import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';              // for two-way binding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponents } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';              // for custom pipe

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents,
    CourseComponent,
    SummaryPipe          // custom pipe     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule          // Import FormsModule for two-way data binding
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
