import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Getservice } from './app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TelegramComponent } from "./telegram/telegram.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, TelegramComponent]
})
export class AppComponent {
  [x: string]: any;
  getnameService = inject(Getservice)
  formBuilder = inject(FormBuilder)
 ngOnInit(){
    this.getnameService.gethttp().subscribe((data:any) =>{
     console.log(data)
    });
  // ngOnInit(); void{
  //   this.http.get(
  //     "http://api.telegram.org/bots/6786608459:AAGRUZ7d-_mi2WEutDmb_6LjO8fnMkovVuU"

  //   )
  // }
 }
  form:FormGroup =this.formBuilder.group({

  });
  url:string="http://api.telegram.org/bots/6786608459:AAGRUZ7d-_mi2WEutDmb_6LjO8fnMkovVuU"

}