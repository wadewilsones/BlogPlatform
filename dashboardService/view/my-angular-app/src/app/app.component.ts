import { Component, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './singlePost/posts.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
  @ViewChild(PostsComponent) postsComponent!: PostsComponent;
  //Constructor for dependency injection
  constructor(private postComponent: PostsComponent, private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit(){}


}
