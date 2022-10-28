import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  myForm!: FormGroup;
  imageForm!:FormGroup;
  modalRef?: BsModalRef;
  bgImage: any;
  constructor(private modalService: BsModalService,private profileService:ProfileServiceService) { }
  ngOnInit(): void {
    this.initializeForm();
    this.getUserData();
    // throw new Error('Method not implemented.');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initializeForm() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
    })
    this.imageForm = new FormGroup({
      profile_image: new FormControl(''),
    })
  }

  submitForm(data: any) {
    console.log(data);
  }
  fileChange(event: any) {
    this.profileService.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      this.bgImage = 'http://139.59.47.49:4004/' + result.filename;
      this.imageForm.controls['profile_image'].patchValue(result.filename);
    });
  }
  getUserData() {
    this.profileService.UserProfileGetApi().subscribe((result: any) => {
      console.log(result);
    });
  }
}
