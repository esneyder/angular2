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
var app_service_1 = require("./service/app.service");
var router_1 = require("@angular/router");
var CoursesComponent = (function () {
    function CoursesComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.title = "Cursos disponibles";
    }
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        this.appService.getCourses().then(function (res) { return _this.courses = res; });
    };
    CoursesComponent.prototype.detail = function (course) {
        var link = ['course', course.id];
        this.router.navigate(link);
    };
    CoursesComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: "courses",
        template: "\n        <h1>{{title}}</h1>\n        <ul>\n           <course [course] =\"course\"  (click)=\"detail(course)\"  *ngFor=\"let course of courses\"></course>\n        </ul>\n    ",
        providers: [app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map