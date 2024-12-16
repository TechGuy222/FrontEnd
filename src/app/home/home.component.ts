import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
empData:any[]=[];
  constructor(private Service:HttpService){}
  ngOnInit(): void {
 this.getDAtaFromBackend();
  }
  getDAtaFromBackend() {
   this.Service.getALlEmp()
   .subscribe((responce:any)=>{
 //console.log(responce)
  this.empData=responce
   })
  }

}
