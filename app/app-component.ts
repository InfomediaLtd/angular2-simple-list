import {Component} from 'angular2/core'
import {SimpleList} from "./components/simple-list";

@Component({
    selector: 'app-component',
    template: `
        <simple-list
            [list]="['a','b','c']"
            (current)="currentItem=$event"
            [content]="getContent"
            [link]="getLink"></simple-list>
        <label>{{currentItem}}</label>
    `,
    directives: [SimpleList]
})
export class AppComponent {

    private currentItem:any;

    getContent(value):string { return "-> " + value + " <-"; }
    getLink(value):any[] { return ['AppComponent_'+value]; }

}