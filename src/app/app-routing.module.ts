import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { InfoComponent } from './Components/info/info.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { SettingsComponent } from './Components/settings/settings.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Header",component:HeaderComponent},
  {path:"info",component:InfoComponent},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"settings",component:SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
