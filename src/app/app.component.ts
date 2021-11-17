import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHotelManagement';
  custom_var = 'My project angular tutorial';
  submitted = false;
  subscribeForm:FormGroup;
  base_url="http://localhost/hotel-management-system/LaravelHotelManagement/";
  constructor(private fb:FormBuilder, private http:HttpClient) { 
    this.subscribeForm = fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  });
  }
  get f() { return this.subscribeForm.controls; }
  subscribe_now(subscribeForm){
    this.submitted = true;
    if (this.subscribeForm.invalid) {
      return;
  }
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
  let options={
    headers:headers,
  };
  this.http.post(this.base_url+'public/api/subscribe',this.subscribeForm.value,options).subscribe((data)=> {
    
    if(data['success'])
    {
      this.subscribeForm.reset();
    alert(data['success']);
    }
    else
    {
      this.subscribeForm.reset();

    }
  });

  }
}
