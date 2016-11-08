import {Component} from '@angular/core'
import {SimpleList} from "../src/simple-list";

@Component({
    selector: 'tester',
    template: `
        <simple-list
            [list]="['a','b','c']"
            (current)="currentItem=$event"
            [content]="getContent"
            [link]="getLink"></simple-list>
        <br/>
        <hr/>
        <label>{{currentItem}}</label>
    `
})
export class TesterComponent {

    private currentItem:any;

    getContent(value):string { return "-> " + value + " <-"; }
    getLink(value:string):any[] { return ['/appComponent'+value.toUpperCase()]; }

}