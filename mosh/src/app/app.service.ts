import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class Getservice {
    http=inject(HttpClient)
    gethttp(){
        return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
    } 
}
