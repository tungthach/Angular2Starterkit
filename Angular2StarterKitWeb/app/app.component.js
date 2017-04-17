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
var izendaintegrate_1 = require("./_helpers/izendaintegrate");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router, izItergrate) {
        this.router = router;
        this.izItergrate = izItergrate;
        this.izItergrate.DoIzendaConfig();
    }
    AppComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, izendaintegrate_1.IzendaIntegrate])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map