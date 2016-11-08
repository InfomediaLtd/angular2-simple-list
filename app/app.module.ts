import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule}   from '@angular/router'
import {HttpModule} from "@angular/http"
import {FormsModule} from '@angular/forms'
import {MaterialModule} from '@angular/material'
import {AppComponent} from './app.component'
import {TesterComponent} from "./tester"
import {SimpleList} from "../src/index"
import {appRoutes} from "./app.routes"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [AppComponent,TesterComponent,SimpleList],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}