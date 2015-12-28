import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouterLink} from 'angular2/router'

@Component({
    selector: 'simple-list',
    template: `
        <div *ngIf="!list">
            Loading...
        </div>
        <div *ngIf="list">
            <table class="table table-striped table-bordered table-hover">
                <tbody>
                    <tr *ngFor="#item of list" (mouseover)="current.next(item)" (mouseout)="current.next(null)">
                        <td *ngIf="!link">{{getContent(item)}}</td>
                        <td *ngIf="link"><a [routerLink]="link(item)">{{getContent(item)}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    directives: [RouterLink]
})
export class SimpleList {

    @Input() list:any[];
    @Input() content:((any)=>string);
    @Input() link:((any)=>any[]);
    @Output() current: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    getContent(item):string {
        if (this.content) {
            return this.content(item);
        } else {
            return item;
        }
    }


}