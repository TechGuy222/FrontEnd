import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmp:any=<Employee>{}
allCountry:any[]=[]
  
constructor(private service:HttpService){}

  ngOnInit(): void {
   this.getAllDataFromBackend();
  }
  getAllDataFromBackend() {
    this.service.getAllCountry()
    .subscribe((responce:any)=>{
      //console.log(responce)
      this.allCountry=responce
    })
   
  }
  
 

  onSubmit(){
    this.addEmp.createdBy="Omkar";
    this.addEmp.createdDate=Date.now();
    this.addEmp.updateddBy="Omkar";
    this.addEmp.updatedDate=Date.now();
    
   console.log(this.addEmp);
  }


}
