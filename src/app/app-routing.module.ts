import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
  {path:'get',component:GetComponent},
  {path:'save',component:SaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
