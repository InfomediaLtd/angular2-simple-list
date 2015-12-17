import 'zone.js/dist/zone.min.js';
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core'
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