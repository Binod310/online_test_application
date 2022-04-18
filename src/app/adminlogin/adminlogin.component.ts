import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  currentval="";
  p="";
  getVal(val: string,val1: string)
  {
    //console.warn(val)
    //console.warn(val1)
    //this.currentval=val
    //this.currentval1=val1
    if(val=="admin" && val1=="simplilearn")
    {
      this.router.navigateByUrl('/admin');
    }
    
    else{
      this.router.navigateByUrl('/adminlogin');
      this.currentval="Invalid Email or Password";
      this.p="danger";
      
    }

  }
}
