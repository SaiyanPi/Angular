// import the component decorator
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

// decorator function
// - takes an argument(s)
// - one or more properties to tell angular how this component works.
@Component({
    selector: 'courses',
    template: ` 
                <h2>{{ "Title: " + title }}</h2>    <!-- interpolation -->
                <h2 [textContent]="title"></h2>     <!-- property binding -->

                <!-- <p>{{ getDescription() }}</p> -->
                <ul>
                     <li *ngFor="let book of books">{{ book }}</li>     <!-- directives -->
                </ul> 
                <ul>
                     <li *ngFor="let course of courses">{{ course }}</li>
                </ul> 
                <img src="{{ imageUrl }}" />    <!-- interpolation -->
                <img [src]="imageUrl"/>         <!-- property binding -->

                <table>
                    <tr>
                        <td [attr.colspan] = "colSpan"></td>  <!-- attribute binding -->
                    </tr>
                </table>

                <!-- bootstrap -->
                 <button class="btn btn-danger" [class.active]="isActive">Delete</button> <!--class binding-->
                 <button [style.backgroundColor]="isActive ? 'red' : 'white'">Delete</button> <!--style binding-->
                 <button (click)="onDelete()">Delete</button> <!--event binding-->
                 <button (click)="onSave($event)">Save</button>  <!--event binding with access to event object-->
                 <!--event bubbling-->
                 <div (click)="onDivClick()">
                    <button (click)="onBubbleClick($event)">Bubble</button>
                 </div>
                <!--event filtering-->
                 <input (keyup) = "onKeyUp($event)"/>
                 <input (keyup.enter)="onKey()"/> 
                 <!--template variable-->
                 <input (keyup.enter)="enter($event)" />
                 <input #greet (keyup.enter)="method(greet.value)"/>
                 <!--two-way binding-->
                 <input [(ngModel)]="email" (keyup.enter)="onKeys()"/> <br>
                 <!--Pipes-->
                 {{ book.title | uppercase}} <br>
                 {{ book.price | currency:'AUD'}} <br>
                 {{ book.author | uppercase}} <br>
                 {{ book.rating |number:'1.1-1'}} <br>
                 {{ book.sold |number}} <br>
                 {{ book.relaseDate |date:'shortDate'}} <br>
                 <!--custom pipe-->
                 {{ text | summary:20 }}
                `
})
export class CoursesComponents{
    title = "List of Courses"; //property/field
    books = ["Book 1", "Book 2", "Book 3"]; //string array (string[]) property
    courses;
    imageUrl = "https://media.istockphoto.com/id/147290529/photo/emperors.jpg?s=612x612&w=0&k=20&c=ZApZFJtKoXGKYYJsgNcNPTMHqqSbbAx9CBg2AF2qyJk=";
    colSpan = 2;
    isActive = true;
    email = "me@example.com";
    // getDescription(){
    //     return this.title + " are: "; 
    // }

    
    // Logic for calling an HTTP service should not be here.
    // It should be in the SERVICE file.

    
    // constructor(){
    //     let service = new CoursesService();
    //     this.courses = service.getCourses();
    // }
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onDelete(){
        console.log("Delete clicked");
    }

    onSave($event){
        console.log("Save Clicked", $event);
    }

    onDivClick(){
        console.log("div clicked");
    }
    onBubbleClick($event){
        $event.stopPropagation();
        console.log("Event Bubbling");
    }
    onKeyUp($event){
        if ($event.keyCode === 13)
            console.log("enter was clicked.")
    }
    onKey(){
        console.log("enter was pressed.");
    }
    enter($event){
        console.log($event.target.value);
    }
    method(greet){
        console.log(greet);
    }
    onKeys(){
        console.log(this.email);
    }
    book = {
        title: "How to Code like a Pro",
        rating: 4.899,
        sold: 19082,
        author: "Neerajan Rai",
        price: 400.99,
        relaseDate: new Date(2016,3,1)
    }
    text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
}