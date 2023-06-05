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
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  searchTitle: string = " ";

  //Constructor for dependency injection
  constructor( private changeDetectorRef: ChangeDetectorRef){}

  //Handle search by title

  postName: string = '';

  handleHeaderSearchSubmit(postName: string){
    this.postName = postName;
    this.postsComponent.getPostsByName(postName);
  }

}
