import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

// interface FavouriteChangedEventArgs {
//   newValue: boolean;  
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReusableComponent';
  post = {
    isFavourite: false
  }

  // onFavouriteChanged() {
  //   console.log('Favourite Changed');
  // }

  // onFavouriteChanged(isFavourite: boolean) {
  //   console.log('Favourite Changed', isFavourite);
  // }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {    //or 'eventArgs: any' or 'eventArgs:{newValue: boolean} 
    console.log('Favourite Changed', eventArgs);
  }
  
}
