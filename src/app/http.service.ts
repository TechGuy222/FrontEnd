import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl:String="http://localhost:8080/api/";
  constructor(private http:HttpClient) { }

  getALlEmp(){
   return(this.http.get(`${this.baseUrl}getAllEmployee`));
   
  }
getEmpById(id:any){
 return( this.http.get(`${this.baseUrl}getParticularEmployeeById/${id}`))
}
getAllCountry(){
 return(this.http.get(`${this.baseUrl}getAllCountry`))
}

}
