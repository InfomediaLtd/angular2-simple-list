import 'zone.js/dist/zone.min.js';
import 'reflect-metadata';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, provide} from '@angular/core'
import {AppComponent} from "./app-component";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig} from '@angular/router-deprecated';

import "bootstrap/css/bootstrap.css!"

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [AppComponent, RouterOutlet]
})
@RouteConfig([
    {path: '/', name: "AppComponent", component: AppComponent, useAsDefault:true},
    {path: '/appComponentA', name: "AppComponent_a", component: AppComponent},
    {path: '/appComponentB', name: "AppComponent_b", component: AppComponent},
    {path: '/appComponentC', name: "AppComponent_c", component: AppComponent}
])
export class MainComponent {
}

bootstrap(MainComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
