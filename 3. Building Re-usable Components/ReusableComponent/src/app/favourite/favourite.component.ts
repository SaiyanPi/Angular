import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent implements OnInit {

  // @Input() isFavourite: boolean;
  @Input('is-favourite') isFavourite: boolean;
  @Output() change = new EventEmitter();

  constructor() { 
    this.isFavourite = false; 
  }
  ngOnInit() {
    
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

