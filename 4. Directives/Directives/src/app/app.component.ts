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

  courses = [1,2];
}
