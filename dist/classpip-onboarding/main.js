(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/pages/students/students.component.ts");
/* harmony import */ var _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/teachers/teachers.component */ "./src/app/pages/teachers/teachers.component.ts");
/* harmony import */ var _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/administrator/administrator.component */ "./src/app/pages/administrator/administrator.component.ts");
/* harmony import */ var _pages_git_git_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/git/git.component */ "./src/app/pages/git/git.component.ts");
/* harmony import */ var _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tutorial/tutorial.component */ "./src/app/pages/tutorial/tutorial.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'students', component: _pages_students_students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"] },
    { path: 'teachers', component: _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_5__["TeachersComponent"] },
    { path: 'administrator', component: _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_6__["AdministratorComponent"] },
    { path: 'git', component: _pages_git_git_component__WEBPACK_IMPORTED_MODULE_7__["GitComponent"] },
    { path: 'tutorial', component: _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__["TutorialComponent"] },
    { path: 'faq', component: _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"] },
    { path: '404', component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- footer and router outlet are inside navigation component -->\n<app-navigation></app-navigation>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'classpip-onboarding';
        this.loading = true;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                _this.loading = false;
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/navigation/navigation.component */ "./src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/pages/students/students.component.ts");
/* harmony import */ var _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/teachers/teachers.component */ "./src/app/pages/teachers/teachers.component.ts");
/* harmony import */ var _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/administrator/administrator.component */ "./src/app/pages/administrator/administrator.component.ts");
/* harmony import */ var _pages_git_git_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/git/git.component */ "./src/app/pages/git/git.component.ts");
/* harmony import */ var _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/tutorial/tutorial.component */ "./src/app/pages/tutorial/tutorial.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"],
                _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
                _pages_students_students_component__WEBPACK_IMPORTED_MODULE_20__["StudentsComponent"],
                _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_21__["TeachersComponent"],
                _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_22__["AdministratorComponent"],
                _pages_git_git_component__WEBPACK_IMPORTED_MODULE_23__["GitComponent"],
                _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_24__["TutorialComponent"],
                _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_25__["FaqComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/teacher_videos.ts":
/*!****************************************!*\
  !*** ./src/app/data/teacher_videos.ts ***!
  \****************************************/
/*! exports provided: CARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS", function() { return CARDS; });
var CARDS = [
    {
        "title": "Crear colección",
        "videoLink": "https://www.youtube.com/embed/o5nJ2ATKNKk"
    },
    {
        "title": "Editar una colección existente",
        "videoLink": "https://www.youtube.com/embed/bJZyRUNvjvI"
    },
    {
        "title": "Crear cuestionario de respuesta multiple con puntos",
        "videoLink": "https://www.youtube.com/embed/OgFsZVxTWDA"
    },
    {
        "title": "Crear cuestionario de respuesta abierta con insignia",
        "videoLink": "https://www.youtube.com/embed/mpngcbhq264"
    },
    {
        "title": "Crear y asignar puntos",
        "videoLink": "https://www.youtube.com/embed/pUD9CQ9fDYQ"
    },
    {
        "title": "Enviar 3 cromos aleatorios a un estudiante",
        "videoLink": "https://www.youtube.com/embed/NpNNypMq5es"
    }
];


/***/ }),

/***/ "./src/app/pages/administrator/administrator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/administrator/administrator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  administrator works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/administrator/administrator.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/administrator/administrator.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluaXN0cmF0b3IvYWRtaW5pc3RyYXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/administrator/administrator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/administrator/administrator.component.ts ***!
  \****************************************************************/
/*! exports provided: AdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorComponent", function() { return AdministratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdministratorComponent = /** @class */ (function () {
    function AdministratorComponent() {
    }
    AdministratorComponent.prototype.ngOnInit = function () {
    };
    AdministratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administrator',
            template: __webpack_require__(/*! ./administrator.component.html */ "./src/app/pages/administrator/administrator.component.html"),
            styles: [__webpack_require__(/*! ./administrator.component.scss */ "./src/app/pages/administrator/administrator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdministratorComponent);
    return AdministratorComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<h2>Catàleg d’errors</h2>\n\t<p>\n\t\tEn aquest catàleg consta la descripció dels errors trobats durant la instal·lació i la seva solució segons el sistema operatiu on s’ha fet la instal·lació.\n\t</p>\n\t<p>\n\t\tEs tracta d’un manual dinàmic en que si els o les futures desenvolupadores es troben algun error durant la instal·lació de l’entorn que no està descrit o es troba una solució més eficient, es pot ampliar o millorar la informació que hi hagi actualment.\n\t</p>\n\t<p>\n\t\tTexto provisional hasta que se rellene con la informacion adecuada\n\t</p>\n\t<p>\n\t\tEn total s’han trobat vuit solucions a errors recurrents en les instal·lacions dutes a terme:\n\t</p>\n\t<ul>\n\t\t<li>Un en el sistema operatiu de Windows. En aquest cas, s’ha trobat que diversos errors s’han pogut solucionar simplement introduint una instrucció per la consola d’instruccions (cmd) al començament de la instal·lació. Aquesta instrucció, bàsicament el que fa es instal·lar els compiladors necessaris no especificats en la guia d’instal·lació per dur a terme la instal·lació sense problemes, com per exemple, el Python.</li>\n\t\t<li>Quatre solucions a errors en el sistema operatiu de Linux. Per a aquest sistema operatiu si que es van tenir diversos errors diferenciats, com la instal·lació de la versió pertinent del node (la 8.6) o els errors de permís per no estar executant el terminal en mode Administrador.</li>\n\t\t<li>Tres errors generals trobats en la instal·lació en els dos sistemes operatius, com per exemple, la falta d’un paquet del Visual o un error que pot semblar molt simple però que a vegades ens ha fet perdre el temps: l’error intern del servidor que simplement t’indica que el programa no està apuntant a l’entorn de desenvolupament.</li>\n\t</ul>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/git/git.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/git/git.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<h2>Protocolo para trabajo en  grupo en Git</h2>\n\t<p>\n\t\tLa utilización de un programa de control de versiones, como git en este caso, supone un gran avance a la hora de realizar trabajo en equipo en cualquier software.\n\t</p>\n\t<p>\n\t\tCreo conveniente marcar unas pautas de trabajo en equipo para facilitar la coordinación de grupos de trabajo en el mismo proyecto, agilizando de esta manera el trabajo de diversas características o módulos, y su posterior integración en el proyecto.\n\t</p>\n\t<p>\n\t\tPartimos de la premisa de que actualmente hay dos ramas, la master y la dev. Teniendo esto en cuenta, añadiremos una rama Test que surgirá de la versión actual de master. El objetivo es tener las ramas master, dev y test sin diferencias entre ellas para poder comenzar a trabajar óptimamente. A partir de ahora ya podemos considerar:\n\t</p>\n\t<ul>\n\t\t<li>La rama master como la rama de producción, es decir, la que se verá públicamente y utilizarán los usuarios.</li>\n\t\t<li>La rama dev como la rama de preproducción, una rama que será idéntica a la de producción para probar los desarrollos antes de que sean publicados en producción.</li>\n\t\t<li>La rama test como la rama de testeo, donde se podrán hacer pruebas diversas con los desarrollos antes de pasarlos a preproducción.</li>\n\t</ul>\n\t<p>\n\t\tAdemás se tomarán en cuenta dos situaciones diferentes, el trabajo del equipo envuelto en el proyecto directamente, y el trabajo por parte de personas o equipos ajenos al proyecto pero que quieran participar.\n\t</p>\n</section>\n<section>\n\t<h2>Caso 1, trabajo en el equipo directamente relacionado con el proyecto:</h2>\n\t<p>\n\t\tLo primero es fijar un tiempo de desarrollo o unas funcionalidades a desarrollar. Una vez pasado el tiempo fijado, se publicarán los desarrollos que se hayan realizado correctamente durante ese periodo de tiempo. O en el caso de haber fijado funcionalidades en lugar de tiempo, se publicarán las funcionalidades una vez acabadas. La elección de un método u otro deberá ser elegida por el equipo de trabajo.\n\t</p>\n\t<p>\n\t\tUna vez que se tiene preparado el entorno de trabajo con las tres ramas en la misma situación, se podrá comenzar una metodología de trabajo en equipo que facilite la coordinación entre los miembros del equipo, que asegure el correcto testeo de los trabajos individuales de cada uno.\n\t</p>\n\t<p>\n\t\tPara comenzar un nuevo desarrollo se deberá crear una nueva rama a partir de la rama master, que llamaremos a modo de ejemplo desarrollo_1. Con el comando “git checkout –b desarrollo_1” En este momento la rama desarrollo_1 es exactamente igual que la rama master, dev y test. Y aquí es donde se comienza a desarrollar la nueva funcionalidad que se quiera añadir al proyecto.\n\t</p>\n\t<p>\n\t\tNo se debería hacer ningún commit hasta que este nuevo desarrollo no este finalizado y funcionando. Si se realizan muchos commits, en el caso de tener que realizar una revisión del trabajo para encontrar un bug o para mejorar algo, habrá que revisar los cambios realizados en cada uno de los commits individualmente, lo que dificulta bastante la revisión. Tener todo el trabajo realizado en un solo commit facilitará la posterior revisión de los cambios realizados, al tenerlos todos juntos. \n\t</p>\n\t<p>\n\t\tUna vez finalizado el nuevo desarrollo, se realizará un merge contra la rama de test. Y se realizarán las pruebas sobre un servidor de test para comprobar el correcto funcionamiento del proyecto.\n\t</p>\n\t<p>\n\t\tPara realizar el merge sobre test, se hará de la siguiente manera:\n\t</p>\n\t<ol>\n\t\t<li>git checkout test</li>\n\t\t<li>git pull origin test</li>\n\t\t<li>merge --no-ff --no-commit desarrollo_1</li>\n\t\t<li>git commit -m \"[test] merge with desarrollo_1\"</li>\n\t</ol>\n\t<p>\n\t\tCuando el desarrollo esta correctamente finalizado, y funciona bien en test, se realiza un merge sobre dev. El proceso de merge en dev es el mismo que en test:\n\t</p>\n\t<ol>\n\t\t<li>git checkout dev</li>\n\t\t<li>git pull origin dev</li>\n\t\t<li>merge --no-ff --no-commit desarrollo_1</li>\n\t\t<li>git commit -m \"[dev] merge with desarrollo_1\"</li>\n\t</ol>\n\t<p>\n\t\tEn caso de haber un conflicto entre los pasos 3 y 4, este no quedará commiteado gracias al flag “--no-commit”, entonces bastará con solucionar el conflicto, añadir los cambios con un “git add” y commitear según el paso 4.\n\t</p>\n\t<p>\n\t\tEl flag “--no-ff” se utiliza para evitar que se realice un fast-forward que nos hará perder información del histórico de ramas. En la siguiente imagen se puede apreciar la diferencia entre realizar un commit con el flag y sin el flag.\n\t\t<img src=\"../../assets/img/git/gitmerge--no-ff.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t\t<span style=\"display:block;text-align:center;\">Ilustración 1: <a href=\"https://nvie.com/posts/a-successful-git-branching-model/\" target=\"_blank\">fuente</a></span>\n\t</p>\n\t<p>\n\t\tSi todos los desarrollos mergeados en la rama dev funcionan correctamente, una vez finalizado el tiempo de desarrollo, o todos los desarrollos que se quieran publicar, se realiza un merge contra la rama master, arrastrando todos los cambios mergeados contra la rama dev a la rama master. Una vez realizado este merge se tiene una nueva versión funcional del proyecto, por lo que se procederá a etiquetar dicha versión según el procedimiento habitual.\n\t</p>\n\t<p>\n\t\tEl procedimiento habitual de etiquetado es:  <b>x.y.z</b>, donde:\n\t</p>\n\t<ul>\n\t\t<li><b>X</b> es la versión mayor, se usa cuando hay un cambio importante en fucionalidad.</li>\n\t\t<li><b>Y</b> es la versión menor, se usa para añadidos de funcionalidades que no suponen cambios muy grandes.</li>\n\t\t<li><b>Z</b> se usa para pequeñas correcciones de errores.</li>\n\t</ul>\n\t<p>\n\t\tPor lo que una primera versión podría considerarse como v0.1.0, y tras añadir una funcionalidad pasaría a ser la v0.2.0, después de hacer cambios importantes en la aplicación como para considerar que ya esta lista pasaríamos a denominarla con la etiqueta v1.0.0, y en el caso de que esta versión tuviera un bug que requiriera de un fix la nueva versión sería la v1.0.1. Poner un tag en la rama activa es tan fácil como usar el comando “git tag v0.1.0”.\n\t</p>\n\t<p>\n\t\tSi algo funcionara mal en la nueva versión, sería muy fácil revertir los cambios a la versión anterior que fue etiquetada y que se sabe que funcionaba bien. Se puede revertir a un estado anterior usando los tags en lugar de los commits, el comando para realizar este cambio es “git checkout v0.1.0”.\n\t\t<img src=\"../../assets/img/git/protocolo-git.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t\t<span style=\"display:block;text-align:center;\">Ilustración 2: ejemplo de linea de trabajo</span>\n\t</p>\n</section>\n<section>\n\t<h2>Caso 2, aportaciones de personas o equipos ajenos al proyecto</h2>\n\t<p>\n\t\tEs de sobras conocido que un proyecto open source acaba siendo tan potente como la comunidad de desarrolladores que tiene detrás. Siendo las colaboraciones de estos tan o más importantes como los del equipo de trabajo directamente implicado. Es por ello que cabe plantear un método de trabajo para publicar en el proyecto las aportaciones de terceros.\n\t</p>\n\t<p>\n\t\tEn este caso los desarrolladores necesitaran crear un fork del repositorio original, pasando a tener su propio repositorio y su propio remoto. La forma de trabajar debe ser similar a la del caso 1, con la excepción de que para publicar algo deberán hacer un pull request.\n\t</p>\n\t<p>\n\t\tPara hacer el pull request hay que ir al repositorio original desde el que se realizó el fork, y presionar el botón “New pull request”.\n\t\t<img src=\"../../assets/img/git/img1.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t</p>\n\t<p>\n\t\tEn este punto, se muestra una pagina con el titulo “Compare changes”, en esta pagina hay que pulsar sobre el enlace “compare across forks”.\n\t\t<img src=\"../../assets/img/git/img2.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t</p>\n\t<p>\n\t\tA continuación hay que seleccionar como “base fork” la rama dev del repositorio original, y como “head fork” la rama dev del repositorio del colaborador. Además habrá que escribir un titulo y una descripción para facilitar la comprensión de los cambios en el código a quien deba aprobar el pull request. Y ya se podrá presionar la solicitud de pull request.\n\t\t<img src=\"../../assets/img/git/img3.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t</p>\n\t<p>\n\t\tAhora un miembro del equipo con acceso al repositorio original podrá aprobar, rechazar o solicitar una revisión en el pull request.\n\t</p>\n\t<p>\n\t\tEl miembro del equipo, con permisos de escritura en el repositorio, deberá ir a la pestaña “pull requests” que aparecerá ahora en el proyecto, seleccionar el pull request que se quiera integrar en el proyecto, y una vez revisado el código, para aceptarlo solo tendrá que seleccionar “aprove” y luego presionar el botón “Submit review”.\n\t</p>\n\t<p>\n\t\tLas otras dos opciones que hay para seleccionar en un pull request son “Comment”, donde el revisor puede poner un comentario sobre el pull request sin tener que aprobarlo.\n\t</p>\n\t<p>\n\t\tY “Request changes”, donde se solicita que se realicen cambios en el código que se quiere mergear al repositorio.\n\t</p>\n</section>"

/***/ }),

/***/ "./src/app/pages/git/git.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/git/git.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dpdC9naXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/git/git.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/git/git.component.ts ***!
  \********************************************/
/*! exports provided: GitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitComponent", function() { return GitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GitComponent = /** @class */ (function () {
    function GitComponent() {
    }
    GitComponent.prototype.ngOnInit = function () {
    };
    GitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-git',
            template: __webpack_require__(/*! ./git.component.html */ "./src/app/pages/git/git.component.html"),
            styles: [__webpack_require__(/*! ./git.component.scss */ "./src/app/pages/git/git.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GitComponent);
    return GitComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"home-card\">\n  <mat-grid-list cols=\"2\">\n   <mat-grid-tile class=\"left\" >\n      <h2>\n\t    DESCUBRE CLASSPIP\n\t  </h2>\n\t  <h3>\n\t\tExperimenta con la gamificación en un entorno educativo.\n\t  </h3>\n   </mat-grid-tile>\n   <mat-grid-tile class=\"right\">\n     <img mat-card-image class=\"docs-classpip-logo\" src=\"../assets/img/classpip-icon.svg\" alt=\"angular\">\n   </mat-grid-tile>\n  </mat-grid-list>\n</mat-card>\n\n<div class=\"parallax home-parallax\">\n\t<h2 class=\"parallas-text\">Deja que tus alumnos aprendan con ordenadores y moviles</h2>\n</div>\n\n<div class=\"home-card\">\n\t<img class=\"home-image\" src=\"../assets/img/gamification.jpg\">\n\t<img class=\"home-image\" src=\"../assets/img/gamification-working.jpg\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = "Homepage";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-page-wrap\">\n\t<article class=\"error-page gradient\">\n\t\t<header class=\"hgroup\">\n\t\t\t<h1>404</h1>\n\t\t\t<h2>oops! page not found</h2>\n\t\t</header>\n\t\t<a routerLink=\"/home\" title=\"Back to site\" class=\"error-back\">back</a>\n\t</article>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-page-wrap {\n  width: 310px;\n  height: 310px;\n  margin: 155px auto; }\n\n.error-page-wrap:before {\n  box-shadow: 0 0 200px 150px #fff;\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  position: relative;\n  z-index: -1;\n  content: '';\n  display: block; }\n\n.error-page {\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  top: -310px;\n  position: relative;\n  text-align: center;\n  background: #3f51b5;\n  background: linear-gradient(to bottom, #4d99b5 0%, #3f51b5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$firstColor', endColorstr='$secondColor',GradientType=0 ); }\n\n.error-page:before {\n  width: 63px;\n  height: 63px;\n  border-radius: 50%;\n  box-shadow: 3px 25px 0 5px #4d99b5;\n  content: '';\n  z-index: -1;\n  display: block;\n  position: relative;\n  top: -19px;\n  left: 44px; }\n\n.error-page:after {\n  width: 310px;\n  height: 17px;\n  margin: 0 auto;\n  top: 25px;\n  content: '';\n  z-index: -1;\n  display: block;\n  position: relative;\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, rgba(35, 26, 26, 0) 59%, rgba(60, 44, 44, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6000000', endColorstr='#003c2c2c',GradientType=1 ); }\n\n.error-page h1 {\n  color: rgba(255, 255, 255, 0.94);\n  font-size: 100px;\n  margin: 10px auto 0 auto;\n  text-shadow: 0px 0 7px rgba(0, 0, 0, 0.5); }\n\n.error-page h1:before {\n  width: 260px;\n  height: 1px;\n  position: relative;\n  margin: 0 auto;\n  top: 120px;\n  content: '';\n  display: block;\n  background: radial-gradient(ellipse at center, rgba(111, 25, 25, 0.65) 0%, rgba(75, 38, 38, 0) 70%, rgba(60, 44, 44, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a66f1919', endColorstr='#003c2c2c',GradientType=1 ); }\n\n.error-page h1:after {\n  width: 260px;\n  height: 1px;\n  content: '';\n  display: block;\n  opacity: 0.2;\n  margin: 0 auto;\n  top: 50px;\n  position: relative;\n  /*background: -moz-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(247, 173, 148, 0.65)), color-stop(99%, rgba(255, 255, 255, 0.01)), color-stop(100%, rgba(255, 255, 255, 0)));\n      background: -webkit-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: -o-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: -ms-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: radial-gradient(ellipse at center, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);*/\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6f7ad94', endColorstr='#00ffffff',GradientType=1 ); }\n\n.error-page h2 {\n  margin: 14px 0 30px 0;\n  font-size: 17px; }\n\n.error-page h2:before {\n  width: 130px;\n  height: 1px;\n  position: relative;\n  margin: 0 auto;\n  top: 31px;\n  content: '';\n  display: block;\n  background: radial-gradient(ellipse at center, rgba(111, 25, 25, 0.65) 0%, rgba(75, 38, 38, 0) 70%, rgba(60, 44, 44, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a66f1919', endColorstr='#003c2c2c',GradientType=1 ); }\n\n.error-page h2:after {\n  width: 130px;\n  height: 1px;\n  content: '';\n  display: block;\n  opacity: 0.2;\n  margin: 0 auto;\n  top: 11px;\n  position: relative;\n  background: radial-gradient(ellipse at center, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6f7ad94', endColorstr='#00ffffff',GradientType=1 ); }\n\n.error-back {\n  text-decoration: none;\n  color: #430400;\n  font-size: 15px; }\n\n.error-back:hover {\n  color: #EB957D;\n  text-shadow: 0 0 3px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQixFQUFHOztBQUNyQjtFQUNFLGlDQUFnQztFQUNoQyxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFlBQVc7RUFDWCxlQUFjLEVBQUc7O0FBRXJCO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBTW5CLGlFQUFnRTtFQUNoRSw0SEFBMkgsRUFBRzs7QUFDOUg7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQ0FBa0M7RUFDbEMsWUFBVztFQUNYLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixXQUFVLEVBQUc7O0FBQ2Y7RUFDRSxhQUFZO0VBQ1osYUFBWTtFQUNaLGVBQWM7RUFDZCxVQUFTO0VBQ1QsWUFBVztFQUNYLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQWtCO0VBTWxCLDBIQUF5SDtFQUN6SCx1SEFBc0gsRUFBRzs7QUFDM0g7RUFDRSxpQ0FBZ0M7RUFDaEMsaUJBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QiwwQ0FBeUMsRUFBRzs7QUFDNUM7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsV0FBVTtFQUNWLFlBQVc7RUFDWCxlQUFjO0VBTWQsOEhBQTZIO0VBQzdILHVIQUFzSCxFQUFHOztBQUMzSDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsWUFBVztFQUNYLGVBQWM7RUFDZCxhQUFZO0VBQ1osZUFBYztFQUNkLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEI7Ozs7O2lKQUsySTtFQUMzSSx1SEFBc0gsRUFBRzs7QUFDN0g7RUFDRSxzQkFBcUI7RUFDckIsZ0JBQWUsRUFBRzs7QUFDbEI7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsVUFBUztFQUNULFlBQVc7RUFDWCxlQUFjO0VBTWQsOEhBQTZIO0VBQzdILHVIQUFzSCxFQUFHOztBQUMzSDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsWUFBVztFQUNYLGVBQWM7RUFDZCxhQUFZO0VBQ1osZUFBYztFQUNkLFVBQVM7RUFDVCxtQkFBa0I7RUFNbEIseUlBQXdJO0VBQ3hJLHVIQUFzSCxFQUFHOztBQUUvSDtFQUNFLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsMkJBQTBCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItcGFnZS13cmFwIHtcbiAgd2lkdGg6IDMxMHB4O1xuICBoZWlnaHQ6IDMxMHB4O1xuICBtYXJnaW46IDE1NXB4IGF1dG87IH1cbiAgLmVycm9yLXBhZ2Utd3JhcDpiZWZvcmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMDBweCAxNTBweCAjZmZmO1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogLTE7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLmVycm9yLXBhZ2Uge1xuICB3aWR0aDogMzEwcHg7XG4gIGhlaWdodDogMzEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiAtMzEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM0ZDk5YjUgMCUsICMzZjUxYjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICM0ZDk5YjUpLCBjb2xvci1zdG9wKDEwMCUsICMzZjUxYjUpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNGQ5OWI1IDAlLCAjM2Y1MWI1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNGQ5OWI1IDAlLCAjM2Y1MWI1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzRkOTliNSAwJSwgIzNmNTFiNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRkOTliNSAwJSwgIzNmNTFiNSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJGZpcnN0Q29sb3InLCBlbmRDb2xvcnN0cj0nJHNlY29uZENvbG9yJyxHcmFkaWVudFR5cGU9MCApOyB9XG4gIC5lcnJvci1wYWdlOmJlZm9yZSB7XG4gICAgd2lkdGg6IDYzcHg7XG4gICAgaGVpZ2h0OiA2M3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAzcHggMjVweCAwIDVweCAjNGQ5OWI1O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xOXB4O1xuICAgIGxlZnQ6IDQ0cHg7IH1cbiAgLmVycm9yLXBhZ2U6YWZ0ZXIge1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiAyNXB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMzUsIDI2LCAyNiwgMCkgNTklLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkpLCBjb2xvci1zdG9wKDU5JSwgcmdiYSgzNSwgMjYsIDI2LCAwKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSkpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgzNSwgMjYsIDI2LCAwKSA1OSUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgzNSwgMjYsIDI2LCAwKSA1OSUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMzUsIDI2LCAyNiwgMCkgNTklLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgzNSwgMjYsIDI2LCAwKSA1OSUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2E2MDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDNjMmMyYycsR3JhZGllbnRUeXBlPTEgKTsgfVxuICAuZXJyb3ItcGFnZSBoMSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NCk7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cbiAgICAuZXJyb3ItcGFnZSBoMTpiZWZvcmUge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHRvcDogMTIwcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSksIGNvbG9yLXN0b3AoNzAlLCByZ2JhKDc1LCAzOCwgMzgsIDApKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDYwLCA0NCwgNDQsIDApKSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNhNjZmMTkxOScsIGVuZENvbG9yc3RyPScjMDAzYzJjMmMnLEdyYWRpZW50VHlwZT0xICk7IH1cbiAgICAuZXJyb3ItcGFnZSBoMTphZnRlciB7XG4gICAgICB3aWR0aDogMjYwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHRvcDogNTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC8qYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkpLCBjb2xvci1zdG9wKDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTsqL1xuICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2E2ZjdhZDk0JywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgfVxuICAuZXJyb3ItcGFnZSBoMiB7XG4gICAgbWFyZ2luOiAxNHB4IDAgMzBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDsgfVxuICAgIC5lcnJvci1wYWdlIGgyOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgdG9wOiAzMXB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkpLCBjb2xvci1zdG9wKDcwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSkpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjYTY2ZjE5MTknLCBlbmRDb2xvcnN0cj0nIzAwM2MyYzJjJyxHcmFkaWVudFR5cGU9MSApOyB9XG4gICAgLmVycm9yLXBhZ2UgaDI6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0b3A6IDExcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSksIGNvbG9yLXN0b3AoOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA5OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA5OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2E2ZjdhZDk0JywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgfVxuXG4uZXJyb3ItYmFjayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0MzA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDsgXG59XG4uZXJyb3ItYmFjazpob3ZlciB7XG4gICAgY29sb3I6ICNFQjk1N0Q7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/pages/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/pages/notfound/notfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/students/students.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/students/students.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  students works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/students/students.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/students/students.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/students/students.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/students/students.component.ts ***!
  \******************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/pages/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.scss */ "./src/app/pages/students/students.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/teachers/teachers.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/teachers/teachers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div cdkDropList class=\"list\" (cdkDropListDropped)=\"drop($event)\">\n  <mat-card *ngFor=\"let card of cards\" class=\"box\" cdkDrag>\n  \t<mat-card-header>\n  \t  <mat-card-title>{{card.title}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\t  <iframe mat-card-image width=\"560\" height=\"315\" [src]='sanitizer.bypassSecurityTrustResourceUrl(card.videoLink)' frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/teachers/teachers.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/teachers/teachers.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .list mat-card {\n    width: 100%;\n    padding-bottom: 0;\n    background-color: #4527a0;\n    color: #FFF;\n    background-image: linear-gradient(90deg, #4527a0, #3f51b5, #4527a0); }\n  .list mat-card mat-card-header {\n      min-height: 100px; }\n  @media screen and (min-width: 451px) {\n  .list mat-card {\n    width: 40%; } }\n  @media screen and (min-width: 981px) {\n  .list mat-card {\n    width: 45%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvdGVhY2hlcnMvdGVhY2hlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFhO0VBQ2IsZ0JBQWU7RUFDZiwrQkFBOEIsRUFXOUI7RUFkRDtJQUtFLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIsMEJBQXdCO0lBQ3hCLFlBQVc7SUFDWCxvRUFBbUUsRUFJbkU7RUFiRjtNQVdHLGtCQUFpQixFQUNqQjtFQUlIO0VBQ0M7SUFDQyxXQUFVLEVBQ1YsRUFBQTtFQUdGO0VBQ0M7SUFDQyxXQUFVLEVBQ1YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3R7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRtYXQtY2FyZCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZy1ib3R0b206IDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjojNDUyN2EwO1xuXHRcdGNvbG9yOiAjRkZGO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQ1MjdhMCwgIzNmNTFiNSwgIzQ1MjdhMCk7XG5cdFx0bWF0LWNhcmQtaGVhZGVyIHtcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMHB4O1xuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTFweCkge1xuXHQubGlzdCBtYXQtY2FyZCB7XG5cdFx0d2lkdGg6IDQwJTtcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkge1xuXHQubGlzdCBtYXQtY2FyZCB7XG5cdFx0d2lkdGg6IDQ1JTtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/teachers/teachers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/teachers/teachers.component.ts ***!
  \******************************************************/
/*! exports provided: TeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersComponent", function() { return TeachersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _data_teacher_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/teacher_videos */ "./src/app/data/teacher_videos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeachersComponent = /** @class */ (function () {
    function TeachersComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.cards = _data_teacher_videos__WEBPACK_IMPORTED_MODULE_3__["CARDS"];
    }
    TeachersComponent.prototype.ngOnInit = function () { };
    TeachersComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.cards, event.previousIndex, event.currentIndex);
    };
    TeachersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teachers',
            template: __webpack_require__(/*! ./teachers.component.html */ "./src/app/pages/teachers/teachers.component.html"),
            styles: [__webpack_require__(/*! ./teachers.component.scss */ "./src/app/pages/teachers/teachers.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], TeachersComponent);
    return TeachersComponent;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<h2>Objectiu i definició de l’objecte</h2>\n\t<p>\n\t  L’objectiu es crear un nou objecte “Mesa” que tindrà la informació de la taula a on estigui l’estudiant que utilitzi l’aplicació. Per tant, només podrà veure aquesta informació un usuari que tingui un rol d’estudiant.\n\t</p>\n\t\t<ul>\n\t\t\t<li><b>Id:</b> per identificar el registre</li>\n\t\t\t<li><b>nombreAula:</b> nom de l’aula on és la taula</li>\n\t\t\t<li><b>numFila:</b> número de la fila de taules de l’aula</li>\n\t\t\t<li><b>numColumna:</b> número de la columna de taules de l’aula</li>\n\t\t\t<li><b>imageM:</b> imatge de la taula</li>\n\t\t</ul>\n\t<p>\n\t\tEn l’aplicació mòbil, es podrà accedir a la pàgina de “Mesa” mitjançant la pàgina “home”, on es mostrarà l’atribut de nombreAula i des del menú lateral de l’aplicació, on es mostrarà la variable TITLE de l’objecte.\n\n\t\t<img src=\"../../assets/img/tutorial/img1.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tI la visualització de la pàgina serà:\n\t\t<img src=\"../../assets/img/tutorial/img2.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tEn quant a la pàgina web, es podrà accedir mitjançant la barra de navegació superior, on hi haurà un botó que portarà a la pàgina que mostrarà la informació de “Mesa”:\n\t\t<img src=\"../../assets/img/tutorial/img3.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Creació del model i les dades al repositori Services</h2>\n\t<p>\n\t\tL’API de l’aplicació es crea automàticament mitjançant la definició del model de dades i les relacions entre els seus objectes.\n\t</p>\n\t<p>\n\t\tPer tal de crear el model de dades per enviar i rebre les peticions de la API, s’han de crear dos fitxers amb el mateix nom (en el nostre cas els anomenem “Mesa”), un amb format <b>js</b> (javascript) i l’altre en format <b>json</b> que es on estarà la definició de les dades, les relacions i el nivell d’accés que es podrà tenir a les dades.\n\t</p>\n\t<p>\n\t\tPer simplificar, l’objecte “Mesa” no tindrà ninguna relació amb ningun altre objecte creat, serà l’estudiant que tingui una taula assignada.\n\t</p>\n\t<p>\n\t\tEl model, per seguir l’estructura del projecte, s’ha de crear a la carpeta common → models\n\t</p>\n\t<h3>Model “Mesa”</h3>\n\t<p>\n\t\tEs crea el fitxer en format js i simplement s’afegeixen les següents línies que serveixen per definir el nom de la funció:\n\t\t<img src=\"../../assets/img/tutorial/img4.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tEn crear el fitxer en format json s’han d’afegir el nom i les propietats de l’objecte, les relacions i el nivell d’accés segons el rol:\n\t\t<img src=\"../../assets/img/tutorial/img5.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tL’Id no cal que s’especifiqui ja que no es una propietat en si de l’objecte, si no que es una propietat que serveix per relacionar objectes i que l’API ja dona per suposada.\n\t</p>\n\t<h3>Model “Student”</h3>\n\t<p>\n\t\tPer tal de lligar un estudiant amb la seva taula, s’ha d’afegir la relació en el model de dades de l’estudiant:\n\t\t<img src=\"../../assets/img/tutorial/img6.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tLa relació, en el nostre cas serà del tipus “BelongsTo”, és a dir, que cada estudiant té una sola taula assignada i utilitzarem com a clau primària “mesaId”.\n\t</p>\n\t<p>\n\t\tUna vegada acabats els models s’ha d’afegir l’objecte al fitxer <b>model-config.json</b> i especificar la base de dades i si és un objecte públic o no:\n\t\t<img src=\"../../assets/img/tutorial/img7.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Visualització a la API</h2>\n\t<p>\n\t\tUna vegada completats els models i la definició del model, podem comprovar que s’ha creat correctament l’objecte a la API executant el mòdul i obrint la pàgina en el port especificat en la configuració:\n\t\t<img src=\"../../assets/img/tutorial/img8.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tCom podem comprovar, s’ha creat l’objecte i si despleguem els mètodes podrem veure els que es creen automàticament per defecte ja que no hem assignat ninguna relació a l’objecte:\n\t\t<img src=\"../../assets/img/tutorial/img9.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tEn canvi, si despleguem l’objecte “Students” podrem trobar la definició de la url que correspon a la relació que hem afegit al model:\n\t\t<img src=\"../../assets/img/tutorial/img10.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Creació de les dades inicials</h2>\n\t<p>\n\t\tJa que no executem el programa des del servidor de producció, no estem connectats a una base de dades que contingui dades per poder provar que funciona el que estem programant.\n\t</p>\n\t<p>\n\t\tPer tant, per poder visualitzar dades a l’aplicació, hem de crear un fitxer a la carpeta server→boot amb informació amb la forma següent:\n\t\t<img src=\"../../assets/img/tutorial/img11.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tLes imatges es poden declarar de dues maneres:\n\t</p>\n\t<ul>\n\t\t<li>Definint la URL d’un lloc d’internet</li>\n\t\t<li>Definint la ruta on està guardada la imatge. Aquest mètode només es pot considerar si la imatge ha sigut creada i no es troba a internet.</li>\n\t</ul>\n\t<p>\n\t\tEn el cas de les imatges de la taula, s’han guardat en la carpeta assets del repositori del Mobile:\n\t\t<img src=\"../../assets/img/tutorial/img12.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tAixí que, la ruta de les imatges que s’ha d’indicar en la creació de les dades es el nom de la carpeta + el nom de la imatge.\n\t</p>\n\t<p>\n\t\tD’aquesta manera tindrem tres taules a visualitzar.\n\t</p>\n\t<p>\n\t\tA part de crear les taules, les hem d’assignar als estudiants en el fitxer “06- create-students.js” mitjançant la clau especificada en les relacions del model Students: “mesaId”:\n\t\t<img src=\"../../assets/img/tutorial/img13.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tUna vegada completats tots els passos, es pot executar la part de Sevices i comprovar tant a la API com amb el Postman que es porti la informació correcta (explicació del funcionament més endavant).\n\t</p>\n\t<p>\n\t\tLes imatges que es defineixen en les dades inicials s’han afegit als assets dels repositoris de Mobile i de Dashboard, però es poden utilitzar imatges d’internet indicant la url en l’atribut.\n\t</p>\n</section>"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.component.ts ***!
  \******************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/pages/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/pages/tutorial/tutorial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"docs-footer\">\n  <div class=\"docs-footer-list\">\n    <div class=\"docs-footer-links\">\n      <ul>\n        <li>\n        \t<a href=\"#\">aviso legal</a>\n          <!--<a routerLink=\"/aviso-legal\">{{ 'APP.LEGAL' | translate }}</a>-->\n        </li>\n        <li>\n          <span>|</span>\n        </li>\n        <li>\n        \t<a href=\"#\">privacidad</a>\n          <!--<a routerLink=\"/privacidad\">{{ 'APP.PRIVACY' | translate }}</a>-->\n        </li>\n      </ul>\n    </div>\n    <div class=\"docs-footer-copyright\">\n    \t<p>Classpip &copy;</p>\n      <!--<p>{{ 'APP.MARK' | translate }}</p>-->\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-footer {\n  padding: 12px;\n  font-size: 12px; }\n\n.docs-footer-list {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px; }\n\n.docs-footer-copyright {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end; }\n\n.docs-footer-links ul {\n  list-style: none;\n  margin: 0 0px 0 10px;\n  padding: 0; }\n\n.docs-footer-links ul li {\n    float: left;\n    padding-right: 16px; }\n\n.docs-footer-links ul li a {\n      font-size: 14px;\n      text-decoration: none; }\n\n.docs-footer-links ul li a:hover {\n        text-decoration: underline; }\n\n@media screen and (max-width: 884px) {\n  .docs-footer-list {\n    flex-direction: column; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsUUFBTztFQUNQLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixxQkFBb0I7RUFDcEIsV0FBVSxFQVlYOztBQWZEO0lBS0ksWUFBVztJQUNYLG9CQUFtQixFQVFwQjs7QUFkSDtNQVFNLGdCQUFlO01BQ2Ysc0JBQXFCLEVBSXRCOztBQWJMO1FBV1EsMkJBQTBCLEVBQzNCOztBQUtQO0VBQ0U7SUFDRSx1QkFBc0IsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3MtZm9vdGVyIHtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZG9jcy1mb290ZXItbGlzdCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmRvY3MtZm9vdGVyLWNvcHlyaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5kb2NzLWZvb3Rlci1saW5rcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAwcHggMCAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBhIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODg0cHgpIHtcbiAgLmRvY3MtZm9vdGVyLWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/loading/loading.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar [mode]=\"mode\"></mat-progress-bar>\n"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/shared/services/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingService) {
        this.loadingService = loadingService;
        this.mode = 'indeterminate';
    }
    LoadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.getLoading().subscribe((function (enable) {
            _this.loading = enable;
        }));
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/home\">\n        <mat-icon mat-list-icon>home</mat-icon>\n        <span>Home</span>\n      </a>      \n      <a mat-list-item (click)=\"usersShow = openClose(usersShow, 'userCaret')\">\n        <mat-icon mat-list-icon>people</mat-icon>\n        <span>Usuarios</span>\n        <span class=\"fill-space\"></span>\n        <mat-icon id=\"userCaret\" class=\"material-icons\">expand_more</mat-icon>\n      </a>\n      <a *ngIf=\"usersShow\" class=\"second-level\" mat-list-item routerLink=\"/students\" (click)=\"usersShow = openClose(usersShow, 'userCaret')\">\n        <mat-icon mat-list-icon>face</mat-icon>\n        <span>Estudiantes</span>\n      </a>\n      <a *ngIf=\"usersShow\" class=\"second-level\" mat-list-item routerLink=\"/teachers\" (click)=\"usersShow = openClose(usersShow, 'userCaret')\">\n        <mat-icon mat-list-icon>school</mat-icon>\n        <span>Profesores</span>\n      </a>\n      <a *ngIf=\"usersShow\" class=\"second-level\" mat-list-item routerLink=\"/administrator\" (click)=\"usersShow = openClose(usersShow, 'userCaret')\">\n        <mat-icon mat-list-icon>person</mat-icon>\n        <span>Administradores</span>\n      </a>\n      <a mat-list-item (click)=\"devShow = openClose(devShow, 'devCaret')\">\n        <mat-icon mat-list-icon>developer_mode</mat-icon>\n        <span>Desarrolladores</span>\n        <span class=\"fill-space\"></span>\n        <mat-icon id=\"devCaret\" class=\"material-icons\">expand_more</mat-icon>\n      </a>\n      <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"/git\" (click)=\"devShow = openClose(devShow, 'devCaret')\">\n        <mat-icon mat-list-icon>extension</mat-icon>\n        <span>Pautas git</span>\n      </a>\n      <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"/tutorial\" (click)=\"devShow = openClose(devShow, 'devCaret')\">\n        <mat-icon mat-list-icon>computer</mat-icon>\n        <span>Tutorial</span>\n      </a>\n      <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"/faq\" (click)=\"devShow = openClose(devShow, 'devCaret')\">\n        <mat-icon mat-list-icon>report</mat-icon>\n        <span>Problemas</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <a mat-button class=\"docs-button\" routerLink=\"/home\">\n        <img class=\"docs-classpip-logo\" src=\"../assets/img/classpip-icon.svg\" alt=\"angular\">\n        <span>Classpip</span>\n      </a>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <div fxFlex=\"grow\" class=\"main-content\">\n      <div [hidden]=\"!loading\" class=\"loader\">\n        <h2>Loading...</h2>\n        <app-loading></app-loading>\n      </div>\n      <div [hidden]=\"loading\" class=\"router-output\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.docs-button {\n  font-size: 18px; }\n\n.docs-classpip-logo {\n  height: 40px;\n  margin: 0 4px 3px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsT0FBTSxFQUNQOztBQUVEO0VBQ0csZ0JBQWUsRUFDakI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuLmRvY3MtYnV0dG9uIHtcbiAgXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi5kb2NzLWNsYXNzcGlwLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.usersShow = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    NavigationComponent.prototype.openClose = function (identifier, caretId) {
        identifier = !identifier;
        var icon = document.getElementById(caretId);
        if (identifier) {
            icon.classList.add('open');
        }
        else {
            icon.classList.remove('open');
        }
        return identifier;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/shared/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/loading.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/loading.service.ts ***!
  \****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingService = /** @class */ (function () {
    function LoadingService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Subscripbe to the router events in order to clear the
        // loading or not dpending on keepAfterNavigationChange
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    LoadingService.prototype.show = function (keepAfterNavigationChange) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next(true);
    };
    LoadingService.prototype.hide = function (keepAfterNavigationChange) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next(false);
    };
    LoadingService.prototype.getLoading = function () {
        return this.subject.asObservable();
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alex/Desktop/classpip-code/classpip-onboarding/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map