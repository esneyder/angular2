import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course.component';
import {Welcome} from './welcome.component';
import {Detail} from './detail.component';

const routes = [
    {
        path: '',
        component: Welcome
    },
    {
        path:"courses",
        component:CoursesComponent
    },
    {
        path:"course/:id",
        component:Detail
    }
];

@NgModule({
    imports : [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)],
    declarations: [AppComponent,CoursesComponent,CourseComponent,Welcome,Detail],
    bootstrap: [AppComponent],
    
})
export class AppModule {}