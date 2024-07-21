import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css',
  encapsulation: ViewEncapsulation.Emulated
  // styles: [
  //   `
  //   .demo{
  //   color: green;
  //   }
  //   `
  // ]
  
})
export class FavouriteComponent {

  // @Input() isFavourite: boolean;
  @Input('is-favourite') isFavourite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { 
    this.isFavourite = false; 
  }
  toggleFavourite(){
    this.isFavourite =!this.isFavourite;
    //this.change.emit();                               // emitting a change event
    //this.change.emit(this.isFavourite);               // passing a boolean value
    this.change.emit({ newValue: this.isFavourite });   // passing an object
  }


}

export interface FavouriteChangedEventArgs {
  newValue: boolean;  
}

