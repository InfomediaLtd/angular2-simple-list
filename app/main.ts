import 'zone.js';
import 'reflect-metadata';

import {bootstrap, Component} from 'angular2/angular2';
import {Component} from 'angular2/angular2'
import {SimpleList} from "./components/simple-list";

import "bootstrap/css/bootstrap.css!"

@Component({
    selector: 'my-app',
    template: `
        <simple-list [list]="['a','b','c']" (current)="currentItem=$event"></simple-list>
        <label>{{currentItem}}</label>
    `,
    directives: [SimpleList]
})
export class AppComponent {
    private currentItem:any;

}

bootstrap(AppComponent);