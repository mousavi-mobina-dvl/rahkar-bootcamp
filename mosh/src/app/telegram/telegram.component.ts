import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss'
})
export class TelegramComponent {
  http=inject(HttpClient)
  chat_id: number=6786608459
  ngOnInit():void{
    this.sendMessage("null")
  }
  sendMessage(send: any) {
    this.http.get(`ttps://api.telegram.org/bot6786608459:AAGRUZ7d-_mi2WEutDmb_6LjO8fnMkovVuU/sendMessage?chat_id=${this.chat_id}&text=${send}`).subscribe(data=> {})
  }
}