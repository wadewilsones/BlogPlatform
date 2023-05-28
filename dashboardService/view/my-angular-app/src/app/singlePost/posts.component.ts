import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post-display.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

//Initialize
export class PostsComponent implements OnInit {
// Create an empty array of Post data type
 posts: Post[] = [];

  constructor(private postService: PostService) {
 // dependency injection
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);

  }
}
