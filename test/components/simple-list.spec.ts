import {
    it,
    describe,
    expect,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';

import { Component } from 'angular2/core';
import { SimpleList } from '../../app/components/simple-list';
// import { COMMON_DIRECTIVES } from "angular2/src/common/common_directives";

export function main() {

    @Component({
        template: `<simple-list [list]="[1,2,3]"></simple-list>`,
        directives: [SimpleList]
    })
    class TestComponent { }

    describe('SimpleList', () => {

        beforeEachProviders(() => [SimpleList]);

        it('should repeat list items', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
            return tcb
                // .overrideTemplate(TestComponent, '<simple-list [list]="[1,2,3]"></simple-list>')
                // .overrideTemplate(TestComponent, `
                // <button [disabled]="true">Save</button><button [disabled]="false">Save</button>
                // <span [ngClass]="'special'">aaa</span>
                // `)
                .createAsync(TestComponent).then((fixture) => {

                    expect(1 + 1).toEqual(2);

                    fixture.detectChanges();

                    const nativeElement:HTMLElement = fixture.debugElement.nativeElement;
                    const textContent = nativeElement.textContent;

                    // console.log(fixture.debugElement.componentInstance);
                    // console.log(fixture.debugElement.nativeElement);
                    // console.log(fixture.debugElement.nativeElement.textContent);
                    // console.log(textContent);

                    expect(textContent).toContain('1');
                    expect(textContent).toContain('2');
                    expect(textContent).toContain('3');
                });
        }));

    });
}
