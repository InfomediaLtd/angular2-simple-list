import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'simple-list',
    template: `
        <div *ngIf="!list">
            Loading...
        </div>
        <div *ngIf="list">
            <md-list>
                <md-list-item *ngFor="let item of list" (mouseover)="current.emit(item)" (mouseout)="current.emit(null)">
                    <div *ngIf="!link">{{getContent(item)}}</div>
                    <div *ngIf="link"><a [routerLink]="getLink(item)">{{getContent(item)}}</a></div>
                </md-list-item>
            </md-list>
        </div>
    `
})
export class SimpleList {

    @Input() list:any[];
    @Input() content:((any)=>string);
    @Input() link:(any)=>any[];
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

    // work around a problem with changing links for items (Angular2-beta doesn't like that)
    private linkResultPerItem = {};
    getLink(item):any[] {
        if (this.link) {
            return this.link(item);
        } else {
            return null;
        }
    }

}
