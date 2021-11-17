import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'auth', component:AuthenticationComponent},
  {path:'feedback', component:FeedbackComponent},
  {path:'room-booking-request', component:RoomBookingRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
