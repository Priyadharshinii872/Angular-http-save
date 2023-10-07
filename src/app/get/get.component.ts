import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {

  ListofUsers:any=[];

  constructor(private data:DataService)
  {}

  //getusers
  getusers()
  {
    return this.data.getdata().subscribe( (data:any)=>
    {
      this.ListofUsers=data;
      console.log(this.ListofUsers);
    })
  }

  ngOnInit()
  {
    this.getusers();
  }

}
