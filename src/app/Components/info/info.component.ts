import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
import { Router } from '@angular/router';

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
  first_name:any;
  last_name:any;
  email:any;
  dob:any;
  image:any;
  data:any;
  changeImage:any;
  constructor(private modalService: BsModalService,private profileService:ProfileServiceService ,private router:Router) { }
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
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      dob: new FormControl(''),
      address : new FormControl(''),
      email: new FormControl(''),
      mobile_number: new FormControl(''),
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
    });

  }
  getUserData() {
    this.profileService.UserProfileGetApi().subscribe((result: any) => {
      console.log(result);
      this.data=result.profile;
      this.image=result.profile.profile_image;
      this.bgImage=this.image;
      sessionStorage.setItem('image',this.bgImage);
      sessionStorage.setItem('firstName',this.data.first_name);
      sessionStorage.setItem('lastName',this.data.last_name);
    });
  }
  editProfile(data:any){
    console.log(data)
    let payload={
      first_name:data.first_name,
      last_name:data.last_name,
      dob:data.dob,
      address:data.address,
      email:data.email,
      mobile_number:data.mobile_number,
      profile_image:this.bgImage
    }
    this.profileService.editProfileApi(payload).subscribe((result:any)=>{
      console.log(result);
      window.location.reload();
    this.getUserData();
    })
  }
}
