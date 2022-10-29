import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  modalRef?: BsModalRef;
  myForm!: FormGroup;
  message:any;
  show: boolean = false;
  constructor(private modalService: BsModalService, private Route: Router, private profileService: ProfileServiceService) { }
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
      mobile_number: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      country_code: new FormControl('', [Validators.required])
    })
  }
  signUp(signUpData: any) {
    let payload = {
      email: signUpData.email,
      password: signUpData.password,
      mobile_number: signUpData.mobile_number,
      country_code: signUpData.country_code,
      device_type: 1,
      device_id: "1",
      fcm_id: "1"
    }

    this.profileService.signUpApi(payload).subscribe((result: any) => {
      console.log(result);
      this.message=result.message;
      setTimeout(() => {
        if(this.message=='User registered successfully'){
          this.Route.navigate(['/login']);
          return true
        }
        else{
          return false
        }
      }, 1500);
     
    });
  }
  password() {
    this.show = !this.show;
  }
  get Email(){
    return this.myForm.get('email');
  }
  get Password(){
    return this.myForm.get('password');
  }
  get Mobile(){
    return this.myForm.get('mobile_number');
  }
  get Country(){
    return this.myForm.get('country_code');
  }
}