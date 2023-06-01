import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post-display.service';
import { DatePipe } from '@angular/common';
import { Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private postService: PostService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

//Display all posts
  getPosts(): void {
    this.subscription = this.postService.getPosts().subscribe(posts => {
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

  //Display posts that are relevant for a input tag (app component form submittion)
  getFilteredPosts(tag: string): void {
    this.postService.filterTags(tag).subscribe(posts => {
      this.posts = posts;
      this.changeDetectorRef.detectChanges();
    });
  }

  // Separate string of tags from backend
  separateTags(tags: string): string[] {
    return tags.split(',');
  }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
