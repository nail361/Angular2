"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Card = (function () {
    function Card() {
    }
    Card = __decorate([
        core_1.Component({
            selector: "card",
            template: "\n    <p> \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u043E\u043C\u0435\u0440 {{cardIndex}}</p>\n    ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], Card);
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=child.component.js.map