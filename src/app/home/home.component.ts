import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactForm:FormGroup;
  all_services:any;
  base_url="http://localhost/hotel-management-system/LaravelHotelManagement/";
  constructor(private fb:FormBuilder, private http:HttpClient) { 
    this.contactForm = fb.group({
      name:'',
      email:'',
      mobile_no:'',
      message:''
    });

  }

  ngOnInit(): void {
    this.http.get(this.base_url+'public/api/services').subscribe((data)=>{
      let resp1 = Array.from(Object.keys(data), k=>data[k]);
      if(resp1[0]=='true')
      {
        this.all_services=resp1['1'];
      }
    });
  }
   save_contact(contactForm)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
  let options={
    headers:headers,
  };
  this.http.post(this.base_url+'public/api/contact_form',contactForm.value,options).subscribe((data)=>{
    
    if(data['success'])
    {
      this.contactForm.reset();
      alert(data['success']);
    }
    else
    {
      alert('please try again...');

    }
    
  });
    // console.log(contactForm.value.name);

  }

}
