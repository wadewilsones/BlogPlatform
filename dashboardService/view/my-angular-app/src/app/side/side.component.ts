import { Component, OnInit } from '@angular/core';
import { Side } from './side.model';
import { SideService } from './side.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

// Create an empty array of Post data type
 posts: Side[] = [];

  constructor(private sideService: SideService) {
 // dependency injection
  }

//Run a function on initialization
  ngOnInit() {
    this.getPosts();
  }


  getPosts(): void {
    this.sideService.getPosts()
      .subscribe(posts => this.posts = posts);

  }
}
