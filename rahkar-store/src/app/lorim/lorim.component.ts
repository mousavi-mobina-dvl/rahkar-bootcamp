import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Getnameservice } from './lorim.service';
import { Router, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-lorim',
  standalone: true,
  imports:[CommonModule, FormsModule , ReactiveFormsModule , RouterLinkActive],
  templateUrl: './lorim.component.html',
  styleUrl: './lorim.component.scss'
})
export class LorimComponent {
[x: string]: any;
  constructor (private fb:FormBuilder , private getnameservice: Getnameservice , private router: Router){}
  form: any= this.fb.group ({
    UserName:[''],
    password:[''],
  })
  onClick(){
    console.log(this.form.value);
    if(this.getnameservice.get(this.form.value.UserName , this.form.value.password)){
      this.router.navigate(['/page'])
    }
    else{
      this.router.navigate(['/lorim'])
    }
}
}