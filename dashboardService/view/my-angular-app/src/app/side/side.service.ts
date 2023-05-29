import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Side } from './side.model'

@Injectable({
  providedIn: 'root'
})
export class SideService {

  //Define url
  private postFetchURL = "http://localhost:8080/api/posts/popularPosts"

 //Inject dependency
  constructor(private http : HttpClient) {
  }

  //Make a call
  getPosts(): Observable<Side[]> { // return observable list of PostModel from backend
    return this.http.get<Side[]>(this.postFetchURL); //get request using provided url
  }


}
