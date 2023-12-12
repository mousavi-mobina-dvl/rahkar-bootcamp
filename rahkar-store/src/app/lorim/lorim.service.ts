import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Getnameservice {
  Islogin: boolean = false;
  get(name: any, password: any): boolean {
    if (name == 'poopak' && password == '123456789') {
      this.Islogin = true;
      return true;
    }
    this.Islogin = false;
    return false;
  }
}
