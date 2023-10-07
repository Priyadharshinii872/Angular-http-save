import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  newEmployee:any=[];

  constructor(private data:DataService)
  {}

  //SaveEmp
  SaveEmp()
  {
    return this.data.savedata(this.newEmployee).subscribe( (data:{})=>
    {
      console.log(data)
      
      this.newEmployee = 
      {
        Name: '',
        Position:'',
        Level:''
      };

      alert('New Employee Added!!!');

    }

    )
  }

  ngOnInit()
  {
    this.SaveEmp();
  }



  //html

  register = new FormGroup({
    Name: new FormControl(),
    Position: new FormControl(),
    Level: new FormControl()
  })

  onreg()
  {
    console.log(this.register.value)
  }

}
