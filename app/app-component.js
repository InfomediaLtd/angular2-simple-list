var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var simple_list_1 = require("./components/simple-list");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getContent = function (value) { return "-> " + value + " <-"; };
    AppComponent.prototype.getLink = function (value) { return ['AppComponent_' + value]; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            template: "\n        <simple-list\n            [list]=\"['a','b','c']\"\n            (current)=\"currentItem=$event\"\n            [content]=\"getContent\"\n            [link]=\"getLink\"></simple-list>\n        <label>{{currentItem}}</label>\n    ",
            directives: [simple_list_1.SimpleList]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-component.js.map