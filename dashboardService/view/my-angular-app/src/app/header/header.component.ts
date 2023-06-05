import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //Handle search form submittion
  @Output() startSearch = new EventEmitter<string>();

  constructor(){}
  //Watch name of input
   @ViewChild('postName', { static: false }) postName!: ElementRef<HTMLInputElement>;

//Handle event
  getPostName(event: Event){
      event.preventDefault();
      const postName = this.postName.nativeElement.value; //assign a entered value to emmiter string
      console.log(postName);
      this.startSearch.emit(postName); // emit
  }



}
