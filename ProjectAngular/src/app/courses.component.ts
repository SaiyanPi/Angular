// import the component decorator
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

// decorator function
// - takes an argument(s)
// - one or more properties to tell angular how this component works.
@Component({
    selector: 'courses',
    template: `<h2>{{ "Title: " + title }}</h2>
                <!-- <p>{{ getDescription() }}</p> -->
                <ul>
                     <li *ngFor="let book of books">{{ book }}</li> <!-- directives -->
                </ul> 
                <ul>
                     <li *ngFor="let course of courses">{{ course }}</li>
                </ul> 
                `
})
export class CoursesComponents{
    title = "List of Courses"; //property/field
    books = ["Book 1", "Book 2", "Book 3"]; //string array (string[]) property
    // getDescription(){
    //     return this.title + " are: "; 
    // }

    
    // Logic for calling an HTTP service should not be here.
    // It should be in the SERVICE file.

    courses;
    // constructor(){
    //     let service = new CoursesService();
    //     this.courses = service.getCourses();
    // }
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}