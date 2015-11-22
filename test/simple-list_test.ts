import {
    it,
    describe,
    expect,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';

import { SimpleList } from '../app/components/simple-list';

describe('simple list', () => {

    beforeEachProviders(() => [SimpleList]);

    it('should repeat list items', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.overrideTemplate(SimpleList, '<simple-list [list]="[1,2,3]"></simple-list>')
            .createAsync(SimpleList).then((fixture) => {
                fixture.detectChanges();

                console.log(fixture.debugElement.componentInstance);
                console.log(fixture.debugElement.componentInstance.pending);
                console.log(fixture.debugElement.componentInstance.list);

                /*return fixture.debugElement.componentInstance.pending.then(() => {
                    fixture.detectChanges();

                    console.log(fixture.debugElement.componentInstance);
                });*/
            });
    }));

});
