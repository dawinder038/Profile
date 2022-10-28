import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!:FormGroup

  constructor(private profileService:ProfileServiceService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  
  initializeForm() {
    this.changePasswordForm = new FormGroup({
     old_password : new FormControl(''),
     new_password : new FormControl(''),
    })
   
  }
  changePassword(data:any){
    console.log(data);
    this.profileService.changePasswordApi(data).subscribe((result)=>{
   
      console.log(result);
    })
  }
}
