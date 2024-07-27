import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  maintitle = 'Directives';
  titleOne = 'ngIf';
  titleTwo = 'hidden property';
  titleThree = 'ngSwitchCase';
  titleFour = 'ngFor';
  titleFive = 'ngFor and change detection';

  
  // ngIf
  // hidden property
  courses = [1,2];

  // ngSwitchCase
  viewMode = 'map'; //property initialized

  // ngFor
  books = [
    {id: 1, name: 'Atomic Habits'},
    {id: 2, name: 'Sunconscious Mind'},
    {id: 3, name: 'Into The Wild'},
  ];

  // ngFor and change detection
  addBook(){
    this.books.push({id: 4, name: 'Infulence People'});
  }
  removeBook(book: any) {
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }
  editBook(book: any) {
    book.name = 'Updated Book';
  }
}
