import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private profileService:ProfileServiceService,private router:Router) { }

  ngOnInit(): void {
  
  }
info(){
  setTimeout(() => {
    this.router.navigateByUrl('/info');
  }, 2000);

}
logout(){
  sessionStorage.clear();
  setTimeout(() => {
    this.router.navigateByUrl('/login')
  }, 1500);
}
  
}
