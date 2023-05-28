import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs'; //data stream representation, receiving data async
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostDisplayService {

  constructor() { }
}
