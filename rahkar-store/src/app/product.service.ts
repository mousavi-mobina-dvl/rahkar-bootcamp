import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Getnameservice {
  list = [
    {
      Image: '../assets/45.png',
      title: 'kaktus',
      text: 'is a plant'
    },
    {
      Image: '../assets/1.png',
      title: 'abcd',
      text: 'is a alphabet'
    },
    {
      Image: '../assets/52.png',
      title: 'panda',
      text: 'is a animal'
    },
  ];
  get() {
    return this.list;
  }
}
