import 'zone.js';
import 'reflect-metadata';

import {bootstrap, Component} from 'angular2/angular2';
import {Component} from 'angular2/angular2'
import {SimpleList} from "./components/simple-list";

import "bootstrap/css/bootstrap.css!"

@Component({
    selector: 'my-app',
    template: `
        <simple-list [list]="['a','b','c']"/>
    `,
    directives: [SimpleList]
})
export class AppComponent {
}

bootstrap(AppComponent);