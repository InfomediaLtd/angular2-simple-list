import {Component, CORE_DIRECTIVES, Input, Output, EventEmitter} from 'angular2/angular2';
import {RouterLink} from 'angular2/router'

@Component({
    selector: 'simple-list',
    template: `
        <div *ng-if="!list">
            Loading...
        </div>
        <div *ng-if="list">
            <table class="table table-striped table-bordered table-hover">
                <tbody>
                    <tr *ng-for="#item of list" (mouseover)="current.next(item)" (mouseout)="current.next(null)">
                        <td *ng-if="!link">{{getContent(item)}}</td>
                        <td *ng-if="link"><a [router-link]="link(item)">{{getContent(item)}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    directives: [CORE_DIRECTIVES, RouterLink]
})
export class SimpleList {

    @Input() list:any[];
    @Input() content:((any)=>string);
    @Input() link:((any)=>any[]);
    @Output() current: EventEmitter = new EventEmitter();

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