import {TesterComponent} from "./tester"

export const appRoutes = [
    {path: '', redirectTo: '/appComponentA', pathMatch: 'full'},
    {path: 'appComponentA', component: TesterComponent},
    {path: 'appComponentB', component: TesterComponent},
    {path: 'appComponentC', component: TesterComponent}
]