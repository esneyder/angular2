import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
    `
    <header class="alert alert-info">{{test}}</header>
    <nav>
     <a routerLink="">Inicio</a>
     <a routerLink="courses">Cursos</a>
    </nav>
    <section>
        <router-outlet></router-outlet>
    </section>

    `
})
export class AppComponent { test = 'angular';}