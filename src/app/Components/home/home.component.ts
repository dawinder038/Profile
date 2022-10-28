import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private profileService:ProfileServiceService) { }

  ngOnInit(): void {
  
  }

  
}
