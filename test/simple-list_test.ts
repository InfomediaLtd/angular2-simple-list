import {
    it,
    describe,
    expect,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';

import { Component } from 'angular2/angular2';
import { SimpleList } from '../app/components/simple-list';

@Component({
    template: '',
    directives: [SimpleList]
})
class TestComponent {
}

describe('simple list', () => {

    beforeEachProviders(() => [SimpleList]);

    it('should repeat list items', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb
            .overrideTemplate(TestComponent, '<simple-list [list]="[1,2,3]"></simple-list>')
            .createAsync(TestComponent).then((fixture) => {
                fixture.detectChanges();

                var compiled = fixture.debugElement.nativeElement;

                //console.log(fixture.debugElement.componentInstance);
                //console.log(fixture.debugElement.nativeElement);
                //console.log(fixture.debugElement.nativeElement.textContent);

                expect(compiled).toContainText('1');
                expect(compiled).toContainText('2');
                expect(compiled).toContainText('3');
            });
    }));

});
