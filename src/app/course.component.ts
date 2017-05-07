import {Component, Input} from '@angular/core';
import {Course} from './common/course';

@Component ({
    selector: "course",
    template: 
    `
     <li>
        <img [src]="course.image">
        <h2>{{course.title}}</h2>
        <span>{{course.price | currency : 'USD': true : '1.2-2'}}</span>
    </li>
         `
})

export class CourseComponent{
    @Input()
    course:Course;
    
}