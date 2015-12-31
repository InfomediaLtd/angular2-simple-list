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
var router_1 = require('angular2/router');
var SimpleList = (function () {
    function SimpleList() {
        this.current = new core_1.EventEmitter();
        // work around a problem with changing links for items (Angular2-beta doesn't like that)
        this.linkResultPerItem = {};
    }
    SimpleList.prototype.getContent = function (item) {
        if (this.content) {
            return this.content(item);
        }
        else {
            return item;
        }
    };
    SimpleList.prototype.getLink = function (item) {
        if (this.link) {
            if (this.linkResultPerItem[item] == null) {
                this.linkResultPerItem[item] = this.link(item);
            }
            return this.linkResultPerItem[item];
        }
        else {
            return null;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SimpleList.prototype, "list", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], SimpleList.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], SimpleList.prototype, "link", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SimpleList.prototype, "current", void 0);
    SimpleList = __decorate([
        core_1.Component({
            selector: 'simple-list',
            template: "\n        <div *ngIf=\"!list\">\n            Loading...\n        </div>\n        <div *ngIf=\"list\">\n            <table class=\"table table-striped table-bordered table-hover\">\n                <tbody>\n                    <tr *ngFor=\"#item of list\" (mouseover)=\"current.next(item)\" (mouseout)=\"current.next(null)\">\n                        <td *ngIf=\"!link\">{{getContent(item)}}</td>\n                        <td *ngIf=\"link\"><a [routerLink]=\"getLink(item)\">{{getContent(item)}}</a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            directives: [router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleList);
    return SimpleList;
})();
exports.SimpleList = SimpleList;
//# sourceMappingURL=simple-list.js.map