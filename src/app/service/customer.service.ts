import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiurl='https://localhost:7087/api/Employee/';
  constructor(private http:HttpClient) {

   }

   LoadCustomer(){
    debugger;
     return this.http.get(this.apiurl+'Getcustomer');
   }
   SaveCustomer(customedata:any){
    return this.http.post(this.apiurl+'Addcustomer',customedata);
   }
   LoadCustomerbycode(id:any){
    return this.http.get(this.apiurl+'Edit?Id='+id);
  }
  RemoveCustomer(id:any){
    return this.http.delete(this.apiurl+'deletecustomer?Id='+id);
  }

}
