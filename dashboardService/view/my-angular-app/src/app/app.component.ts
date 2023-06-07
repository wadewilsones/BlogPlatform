import { Component, ChangeDetectorRef, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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

  //Elements
  @ViewChild('tag') tagInput!: ElementRef;

  searchTitle: string = " ";
  submittedTag: string = "";
  postName: string = '';

  //Constructor for dependency injection
  constructor( private changeDetectorRef: ChangeDetectorRef){}


  //Handle search by tag
  tagSubmit(event:Event, tagValue: string): void{

    //Change post
    this.postsComponent.ChangePosts(event, tagValue);
    //Display tag
    this.submittedTag = tagValue;

  }

  //Clear tag form if close tag was clicked
  clearTags(event:Event):void{

    this.submittedTag = "";
    this.tagInput.nativeElement.value = "";
    this.postsComponent.getPosts();
  }


  //Handle search by title

  handleHeaderSearchSubmit(postName: string){
    this.postName = postName;
    this.postsComponent.getPostsByName(postName);
  }

}
