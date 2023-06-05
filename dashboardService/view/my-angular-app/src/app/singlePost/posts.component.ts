import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post-display.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: Post[] = [];
  //Hold value for search by title
  @Input() postTitleSearchValue = "";

  constructor(
    private postService: PostService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

//Display all posts
  getPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.changeDetectorRef.detectChanges();
    });
  }

//Display posts that are relevant for a user clicked tag
  ChangePosts(event: Event,tag: string): void {
   event.preventDefault();
   this.postService.filterTags(tag).subscribe(posts => {
        this.posts = posts;
        this.changeDetectorRef.detectChanges();
      });
  }

  //Display posts that are relevant for a input tag (app component form submit)
  getFilteredPosts(tag: string): void {
    this.postService.filterTags(tag).subscribe(posts => {
      this.posts = posts;
      this.changeDetectorRef.detectChanges();
    });
  }

  // Posts by Name

  getPostsByName(name: string): void{
   this.postService.getPostByName(name).subscribe(posts => {
        this.posts = posts;
        this.changeDetectorRef.detectChanges();
      });

  }

  // Separate string of tags from backend
  separateTags(tags: string): string[] {
    return tags.split(',');
  }

}
