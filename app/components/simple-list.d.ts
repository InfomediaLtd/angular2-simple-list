import { EventEmitter } from 'angular2/core';
export declare class SimpleList {
    list: any[];
    content: ((any) => string);
    link: ((any) => any[]);
    current: EventEmitter<any>;
    constructor();
    getContent(item: any): string;
}
