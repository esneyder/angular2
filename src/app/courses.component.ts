import {Component, OnInit} from '@angular/core';
import {Course} from '../app/common/course';
import {AppService} from './service/app.service'
import {Router} from '@angular/router';
@Component({
    selector: "courses",
    template:
    `
        <h1>{{title}}</h1>
        <ul>
           <course [course] ="course"  (click)="detail(course)"  *ngFor="let course of courses"></course>
        </ul>
    `,
    providers:[AppService]
    
})

export class CoursesComponent implements OnInit {
    title: string = "Cursos disponibles"
    courses: Course [];

    constructor(private appService:AppService,private router:Router){

    }
    getCourses() {
        this.appService.getCourses().then(res => this.courses = res);
    }
    detail(course:Course){
        let link = ['course', course.id];
        this.router.navigate(link);
    }
    ngOnInit(): void {
        this.getCourses();
    }
   

}
