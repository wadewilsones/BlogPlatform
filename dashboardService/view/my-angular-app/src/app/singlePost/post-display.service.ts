import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    private apiURL = 'http://localhost:8080/api/posts/recentPosts';

    constructor(private http: HttpClient) {
      //HttpClient dependency injected into the http private var
    }

    getPosts(): Observable<Post[]> { // return observable list of PostModel from backend
      return this.http.get<Post[]>(this.apiURL); //get request using provided url
    }

  filterTags(tag: string): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/posts/filteredPosts?tag=${tag}`);
  }

  getPostByName(name: string): Observable<Post[]> {
     return this.http.get<Post[]>(`http://localhost:8080/api/posts/searchPosts?name=${name}`);
  }

}
