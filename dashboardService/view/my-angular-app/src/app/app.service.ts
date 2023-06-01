import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './singlePost'

@Injectable({
  providedIn: 'root'
})

export class AppService {

  //Dependency injection
  constructor(private http: HttpClient){}


}
