import {Component} from '@angular/core';


@Component({
    selector:"welcome",
    template:
    `
    <h1>{{welcome}}</h1>
    `
})
export class Welcome {
    welcome: string = "Bienvenido";
}