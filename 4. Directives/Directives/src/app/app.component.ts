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
  titleSix = 'ngFor and Trackby';
  titleEight = 'ngClass';
  titleNine = 'ngStyle';
  titleTen = 'safe traversal operator';
  titleEleven = 'creating custom directives';
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

  //ngFor and Trackby
  companies;
  loadCompanies(){
    this.companies = [
      {id: 1, name: 'Google'},
      {id: 2, name: 'Facebook'},
      {id: 3, name: 'Microsoft'},
      {id: 4, name: 'Apple'},
    ];

  }
  trackCompanies(index, company){
    return company ? company.id : undefined;
  }

  //ngClass
  isPrimary = true;
  toggleButton(){
    this.isPrimary =!this.isPrimary;
  }

  //ngStyle
  canSave = false;

  // safe traversal operator
 task = {
  title: 'Complete Angular Course',
  // assignee: {
  //   name: 'John Doe'
  // },
  assignee: null,
 }
}
