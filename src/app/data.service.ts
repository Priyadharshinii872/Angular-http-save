import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Users{
  Name:string|undefined;
  Position:string|undefined;
  Level:string|undefined
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  endpoint = "http://localhost:4052/api/" ; 

  constructor(private httpclientdata:HttpClient) { }

  //getfunction
  getdata():Observable<Users>
  {
    return this.httpclientdata.get<Users>(this.endpoint + 'get');
  }

  //savefunction
  savedata(employees : any ):Observable<Users>
  {
    return this.httpclientdata.post<Users>(this.endpoint + 'save' , employees)
  }
  
}
