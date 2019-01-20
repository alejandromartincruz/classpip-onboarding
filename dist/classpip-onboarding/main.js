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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/pages/students/students.component.ts");
/* harmony import */ var _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/teachers/teachers.component */ "./src/app/pages/teachers/teachers.component.ts");
/* harmony import */ var _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/administrator/administrator.component */ "./src/app/pages/administrator/administrator.component.ts");
/* harmony import */ var _pages_install_install_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/install/install.component */ "./src/app/pages/install/install.component.ts");
/* harmony import */ var _pages_firstrun_firstrun_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/firstrun/firstrun.component */ "./src/app/pages/firstrun/firstrun.component.ts");
/* harmony import */ var _pages_git_git_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/git/git.component */ "./src/app/pages/git/git.component.ts");
/* harmony import */ var _pages_tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/tutoriales/tutoriales.component */ "./src/app/pages/tutoriales/tutoriales.component.ts");
/* harmony import */ var _pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/basicos/basicos.component */ "./src/app/pages/basicos/basicos.component.ts");
/* harmony import */ var _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/tutorial/tutorial.component */ "./src/app/pages/tutorial/tutorial.component.ts");
/* harmony import */ var _pages_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/onboarding/onboarding.component */ "./src/app/pages/onboarding/onboarding.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/privacy/privacy.component */ "./src/app/shared/privacy/privacy.component.ts");
/* harmony import */ var _shared_legalwarning_legalwarning_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/legalwarning/legalwarning.component */ "./src/app/shared/legalwarning/legalwarning.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");




















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user/students', component: _pages_students_students_component__WEBPACK_IMPORTED_MODULE_5__["StudentsComponent"] },
    { path: 'user/teachers', component: _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_6__["TeachersComponent"] },
    { path: 'user/administrator', component: _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_7__["AdministratorComponent"] },
    { path: 'developer/install', component: _pages_install_install_component__WEBPACK_IMPORTED_MODULE_8__["InstallComponent"] },
    { path: 'developer/firstrun', component: _pages_firstrun_firstrun_component__WEBPACK_IMPORTED_MODULE_9__["FirstrunComponent"] },
    { path: 'developer/tutoriales', component: _pages_tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_11__["TutorialesComponent"] },
    { path: 'developer/tutoriales/basicos', component: _pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_12__["BasicosComponent"] },
    { path: 'developer/tutoriales/git', component: _pages_git_git_component__WEBPACK_IMPORTED_MODULE_10__["GitComponent"] },
    { path: 'developer/tutoriales/mesa', component: _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"] },
    { path: 'developer/tutoriales/onboarding', component: _pages_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_14__["OnboardingComponent"] },
    { path: 'developer/projects', component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"] },
    { path: 'developer/faq', component: _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"] },
    { path: 'privacy', component: _shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyComponent"] },
    { path: 'legalwarning', component: _shared_legalwarning_legalwarning_component__WEBPACK_IMPORTED_MODULE_18__["LegalwarningComponent"] },
    { path: '404', component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_19__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, matIconRegistry, router) {
        this.titleService = titleService;
        this.matIconRegistry = matIconRegistry;
        this.router = router;
        this.title = 'classpip-onboarding';
        matIconRegistry.registerFontClassAlias('fab');
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/navigation/navigation.component */ "./src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/pages/students/students.component.ts");
/* harmony import */ var _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/teachers/teachers.component */ "./src/app/pages/teachers/teachers.component.ts");
/* harmony import */ var _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/administrator/administrator.component */ "./src/app/pages/administrator/administrator.component.ts");
/* harmony import */ var _pages_git_git_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/git/git.component */ "./src/app/pages/git/git.component.ts");
/* harmony import */ var _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/tutorial/tutorial.component */ "./src/app/pages/tutorial/tutorial.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _pages_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/onboarding/onboarding.component */ "./src/app/pages/onboarding/onboarding.component.ts");
/* harmony import */ var _shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/privacy/privacy.component */ "./src/app/shared/privacy/privacy.component.ts");
/* harmony import */ var _shared_legalwarning_legalwarning_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/legalwarning/legalwarning.component */ "./src/app/shared/legalwarning/legalwarning.component.ts");
/* harmony import */ var _pages_tutorial_services_services_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/tutorial/services/services.component */ "./src/app/pages/tutorial/services/services.component.ts");
/* harmony import */ var _pages_tutorial_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/tutorial/dashboard/dashboard.component */ "./src/app/pages/tutorial/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_tutorial_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/tutorial/mobile/mobile.component */ "./src/app/pages/tutorial/mobile/mobile.component.ts");
/* harmony import */ var _pages_tutorial_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/tutorial/introduction/introduction.component */ "./src/app/pages/tutorial/introduction/introduction.component.ts");
/* harmony import */ var _pages_faq_windows_windows_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/faq/windows/windows.component */ "./src/app/pages/faq/windows/windows.component.ts");
/* harmony import */ var _pages_faq_linux_linux_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/faq/linux/linux.component */ "./src/app/pages/faq/linux/linux.component.ts");
/* harmony import */ var _pages_faq_macos_macos_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/faq/macos/macos.component */ "./src/app/pages/faq/macos/macos.component.ts");
/* harmony import */ var _pages_faq_generals_generals_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/faq/generals/generals.component */ "./src/app/pages/faq/generals/generals.component.ts");
/* harmony import */ var _pages_install_install_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/install/install.component */ "./src/app/pages/install/install.component.ts");
/* harmony import */ var _pages_firstrun_firstrun_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/firstrun/firstrun.component */ "./src/app/pages/firstrun/firstrun.component.ts");
/* harmony import */ var _pages_install_linuxinstall_linuxinstall_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/install/linuxinstall/linuxinstall.component */ "./src/app/pages/install/linuxinstall/linuxinstall.component.ts");
/* harmony import */ var _pages_install_macosinstall_macosinstall_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/install/macosinstall/macosinstall.component */ "./src/app/pages/install/macosinstall/macosinstall.component.ts");
/* harmony import */ var _pages_install_windowsinstall_windowsinstall_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/install/windowsinstall/windowsinstall.component */ "./src/app/pages/install/windowsinstall/windowsinstall.component.ts");
/* harmony import */ var _pages_firstrun_initservices_initservices_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/firstrun/initservices/initservices.component */ "./src/app/pages/firstrun/initservices/initservices.component.ts");
/* harmony import */ var _pages_firstrun_initdashboard_initdashboard_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/firstrun/initdashboard/initdashboard.component */ "./src/app/pages/firstrun/initdashboard/initdashboard.component.ts");
/* harmony import */ var _pages_firstrun_initmobile_initmobile_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/firstrun/initmobile/initmobile.component */ "./src/app/pages/firstrun/initmobile/initmobile.component.ts");
/* harmony import */ var _pages_firstrun_initonboarding_initonboarding_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/firstrun/initonboarding/initonboarding.component */ "./src/app/pages/firstrun/initonboarding/initonboarding.component.ts");
/* harmony import */ var _pages_firstrun_commonconsiderations_commonconsiderations_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/firstrun/commonconsiderations/commonconsiderations.component */ "./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.ts");
/* harmony import */ var _shared_navigation_links_links_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./shared/navigation/links/links.component */ "./src/app/shared/navigation/links/links.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/tutoriales/tutoriales.component */ "./src/app/pages/tutoriales/tutoriales.component.ts");
/* harmony import */ var _pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/basicos/basicos.component */ "./src/app/pages/basicos/basicos.component.ts");





















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"],
                _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"],
                _pages_students_students_component__WEBPACK_IMPORTED_MODULE_22__["StudentsComponent"],
                _pages_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_23__["TeachersComponent"],
                _pages_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_24__["AdministratorComponent"],
                _pages_git_git_component__WEBPACK_IMPORTED_MODULE_25__["GitComponent"],
                _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_26__["TutorialComponent"],
                _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_27__["FaqComponent"],
                _pages_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_28__["OnboardingComponent"],
                _shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_29__["PrivacyComponent"],
                _shared_legalwarning_legalwarning_component__WEBPACK_IMPORTED_MODULE_30__["LegalwarningComponent"],
                _pages_tutorial_services_services_component__WEBPACK_IMPORTED_MODULE_31__["ServicesComponent"],
                _pages_tutorial_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__["DashboardComponent"],
                _pages_tutorial_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_33__["MobileComponent"],
                _pages_tutorial_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_34__["IntroductionComponent"],
                _pages_faq_windows_windows_component__WEBPACK_IMPORTED_MODULE_35__["WindowsComponent"],
                _pages_faq_linux_linux_component__WEBPACK_IMPORTED_MODULE_36__["LinuxComponent"],
                _pages_faq_macos_macos_component__WEBPACK_IMPORTED_MODULE_37__["MacosComponent"],
                _pages_faq_generals_generals_component__WEBPACK_IMPORTED_MODULE_38__["GeneralsComponent"],
                _pages_install_install_component__WEBPACK_IMPORTED_MODULE_39__["InstallComponent"],
                _pages_firstrun_firstrun_component__WEBPACK_IMPORTED_MODULE_40__["FirstrunComponent"],
                _pages_install_linuxinstall_linuxinstall_component__WEBPACK_IMPORTED_MODULE_41__["LinuxinstallComponent"],
                _pages_install_macosinstall_macosinstall_component__WEBPACK_IMPORTED_MODULE_42__["MacosinstallComponent"],
                _pages_install_windowsinstall_windowsinstall_component__WEBPACK_IMPORTED_MODULE_43__["WindowsinstallComponent"],
                _pages_firstrun_initservices_initservices_component__WEBPACK_IMPORTED_MODULE_44__["InitservicesComponent"],
                _pages_firstrun_initdashboard_initdashboard_component__WEBPACK_IMPORTED_MODULE_45__["InitdashboardComponent"],
                _pages_firstrun_initmobile_initmobile_component__WEBPACK_IMPORTED_MODULE_46__["InitmobileComponent"],
                _pages_firstrun_initonboarding_initonboarding_component__WEBPACK_IMPORTED_MODULE_47__["InitonboardingComponent"],
                _pages_firstrun_commonconsiderations_commonconsiderations_component__WEBPACK_IMPORTED_MODULE_48__["CommonconsiderationsComponent"],
                _shared_navigation_links_links_component__WEBPACK_IMPORTED_MODULE_49__["LinksComponent"],
                _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_50__["ProjectsComponent"],
                _pages_tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_51__["TutorialesComponent"],
                _pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_52__["BasicosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/basic_dev_videos.ts":
/*!******************************************!*\
  !*** ./src/app/data/basic_dev_videos.ts ***!
  \******************************************/
/*! exports provided: CARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS", function() { return CARDS; });
var CARDS = [
    {
        "title": "Lección 0: Lo básico de Git (1/5)",
        "videoLink": "https://www.youtube.com/embed/CUhVn7U0rh4"
    },
    {
        "title": "Lección 0: Lo básico de Git (2/5)",
        "videoLink": "https://www.youtube.com/embed/icB8LFqS0eg"
    },
    {
        "title": "Lección 0: Lo básico de Git (3/5)",
        "videoLink": "https://www.youtube.com/embed/daWGU3BkX94"
    },
    {
        "title": "Lección 0: Lo básico de Git (4/5)",
        "videoLink": "https://www.youtube.com/embed/5OEPUXmRpD0"
    },
    {
        "title": "Lección 0: Lo básico de Git (5/5)",
        "videoLink": "https://www.youtube.com/embed/4cGCQuYaFGU"
    },
    {
        "title": "Lección 1: Iniciar el proyecto Angular (1/2)",
        "videoLink": "https://www.youtube.com/embed/QrBoKDTWr28"
    },
    {
        "title": "Lección 1: Iniciar el proyecto Angular (2/2)",
        "videoLink": "https://www.youtube.com/embed/cxNKX5NfJDI"
    },
    {
        "title": "Lección 2: Añadir componentes (1/2)",
        "videoLink": "https://www.youtube.com/embed/y2wSVOIaAI8"
    },
    {
        "title": "Lección 2: Añadir componentes (2/2)",
        "videoLink": "https://www.youtube.com/embed/ppKKxJWWbeI"
    },
    {
        "title": "Lección 3: Mostrar los datos de una lista (1/2)",
        "videoLink": "https://www.youtube.com/embed/kAsVu6lQ_fo"
    },
    {
        "title": "Lección 3: Mostrar los datos de una lista (2/2)",
        "videoLink": "https://www.youtube.com/embed/IYs3I6Xg68o"
    },
    {
        "title": "Lección 4: Servicios (1/3)",
        "videoLink": "https://www.youtube.com/embed/6kPrjPsxqzM"
    },
    {
        "title": "Lección 4: Servicios (2/3)",
        "videoLink": "https://www.youtube.com/embed/IjnSYFyg5zc"
    },
    {
        "title": "Lección 4: Servicios (3/3)",
        "videoLink": "https://www.youtube.com/embed/NySGLrFgqlw"
    },
    {
        "title": "Lección 5: Bootstrap (1/3)",
        "videoLink": "https://www.youtube.com/embed/DSM7s591100"
    },
    {
        "title": "Lección 5: Bootstrap (2/3)",
        "videoLink": "https://www.youtube.com/embed/qa6QkTAaW24"
    },
    {
        "title": "Lección 5: Bootstrap (3/3)",
        "videoLink": "https://www.youtube.com/embed/wqXxw1BwjFo"
    },
    {
        "title": "Lección 6: Angular Material (1/3)",
        "videoLink": "https://www.youtube.com/embed/mdieVEyMk-Y"
    },
    {
        "title": "Lección 6: Angular Material (2/3)",
        "videoLink": "https://www.youtube.com/embed/hidsRs_nXOE"
    },
    {
        "title": "Lección 6: Angular Material (3/3)",
        "videoLink": "https://www.youtube.com/embed/voW79Wfpqww"
    },
    {
        "title": "Lección 7: Navegación en Angular (1/4)",
        "videoLink": "https://www.youtube.com/embed/wDr6ys3OdCA"
    },
    {
        "title": "Lección 7: Navegación en Angular (2/4)",
        "videoLink": "https://www.youtube.com/embed/bU5BcrLEKtM"
    },
    {
        "title": "Lección 7: Navegación en Angular (3/4)",
        "videoLink": "https://www.youtube.com/embed/Dzr8ATAcqHo"
    },
    {
        "title": "Lección 7: Navegación en Angular (4/4)",
        "videoLink": "https://www.youtube.com/embed/lClVl32XTwY"
    },
    {
        "title": "Lección 8: API REST (1/7)",
        "videoLink": "https://www.youtube.com/embed/xudEttaBytg"
    },
    {
        "title": "Lección 8: API REST (2/7)",
        "videoLink": "https://www.youtube.com/embed/8huGPxId3m8"
    },
    {
        "title": "Lección 8: API REST (3/7)",
        "videoLink": "https://www.youtube.com/embed/yNtevAhJUyg"
    },
    {
        "title": "Lección 8: API REST (4/7)",
        "videoLink": "https://www.youtube.com/embed/73_mGc0rJMo"
    },
    {
        "title": "Lección 8: API REST (5/7)",
        "videoLink": "https://www.youtube.com/embed/g4b12JDmoBw"
    },
    {
        "title": "Lección 8: API REST (6/7)",
        "videoLink": "https://www.youtube.com/embed/dacU0L9bKzI"
    },
    {
        "title": "Lección 8: API REST (7/7)",
        "videoLink": "https://www.youtube.com/embed/wJnNXOIpE_w"
    },
    {
        "title": "Lección 9: API-REST con conexión a MySQL (1/1)",
        "videoLink": "https://www.youtube.com/embed/mkaIHE8ozHI"
    },
    {
        "title": "Lección 10: Lo básico de IONIC (1/4)",
        "videoLink": "https://www.youtube.com/embed/bFfYgvsDb0A"
    },
    {
        "title": "Lección 10: Lo básico de IONIC (2/4)",
        "videoLink": "https://www.youtube.com/embed/owp8X6xyYBg"
    },
    {
        "title": "Lección 10: Lo básico de IONIC (3/4)",
        "videoLink": "https://www.youtube.com/embed/Yb6tBXcsJnE"
    },
    {
        "title": "Lección 10: Lo básico de IONIC (4/4)",
        "videoLink": "https://www.youtube.com/embed/jRBPiCrFA80"
    },
    {
        "title": "Lección 11: Desarrollo de la app (1/4)",
        "videoLink": "https://www.youtube.com/embed/icDWFAJ9F4I"
    },
    {
        "title": "Lección 11: Desarrollo de la app (2/4)",
        "videoLink": "https://www.youtube.com/embed/00B4T_2My6E"
    },
    {
        "title": "Lección 11: Desarrollo de la app (3/4)",
        "videoLink": "https://www.youtube.com/embed/eOtw6NWr61g"
    },
    {
        "title": "Lección 11: Desarrollo de la app (4/4)",
        "videoLink": "https://www.youtube.com/embed/hG-iAsW1pJI"
    },
    {
        "title": "Lección 12: Ejecución de la app en el movil (1/3)",
        "videoLink": "https://www.youtube.com/embed/LbN6MijaqFk"
    },
    {
        "title": "Lección 12: Ejecución de la app en el movil (2/3)",
        "videoLink": "https://www.youtube.com/embed/CneKjUMnY98"
    },
    {
        "title": "Lección 12: Ejecución de la app en el movil (3/3)",
        "videoLink": "https://www.youtube.com/embed/YY74i8xvb4A"
    }
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdministratorComponent = /** @class */ (function () {
    function AdministratorComponent() {
    }
    AdministratorComponent.prototype.ngOnInit = function () {
    };
    AdministratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-administrator',
            template: __webpack_require__(/*! ./administrator.component.html */ "./src/app/pages/administrator/administrator.component.html"),
            styles: [__webpack_require__(/*! ./administrator.component.scss */ "./src/app/pages/administrator/administrator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdministratorComponent);
    return AdministratorComponent;
}());



/***/ }),

/***/ "./src/app/pages/basicos/basicos.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/basicos/basicos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon> Volver</button>\n<h2>Tutoriales en video de todas las tecnologías usadas</h2>\n<div cdkDropList class=\"list\" (cdkDropListDropped)=\"drop($event)\">\n  <mat-card *ngFor=\"let card of cards\" class=\"box\" cdkDrag>\n  \t<mat-card-header>\n  \t  <mat-card-title>{{card.title}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\t  <iframe mat-card-image width=\"560\" height=\"315\" [src]='sanitizer.bypassSecurityTrustResourceUrl(card.videoLink)' frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/basicos/basicos.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/basicos/basicos.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .list mat-card {\n    width: 100%;\n    padding-bottom: 0;\n    background-color: #4527a0;\n    color: #FFF;\n    background-image: linear-gradient(90deg, #4527a0, #3f51b5, #4527a0); }\n  .list mat-card mat-card-header {\n      min-height: 100px; }\n  @media screen and (min-width: 451px) {\n  .list mat-card {\n    width: 40%; } }\n  @media screen and (min-width: 981px) {\n  .list mat-card {\n    width: 30%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvYmFzaWNvcy9iYXNpY29zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTtFQUgvQjtJQUtFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXdCO0lBQ3hCLFdBQVc7SUFDWCxtRUFBbUUsRUFBQTtFQVRyRTtNQVdHLGlCQUFpQixFQUFBO0VBS3BCO0VBQ0M7SUFDQyxVQUFVLEVBQUEsRUFDVjtFQUdGO0VBQ0M7SUFDQyxVQUFVLEVBQUEsRUFDViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhc2ljb3MvYmFzaWNvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0bWF0LWNhcmQge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IzQ1MjdhMDtcblx0XHRjb2xvcjogI0ZGRjtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0NTI3YTAsICMzZjUxYjUsICM0NTI3YTApO1xuXHRcdG1hdC1jYXJkLWhlYWRlciB7XG5cdFx0XHRtaW4taGVpZ2h0OiAxMDBweDtcblx0XHR9XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUxcHgpIHtcblx0Lmxpc3QgbWF0LWNhcmQge1xuXHRcdHdpZHRoOiA0MCU7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgxcHgpIHtcblx0Lmxpc3QgbWF0LWNhcmQge1xuXHRcdHdpZHRoOiAzMCU7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/basicos/basicos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/basicos/basicos.component.ts ***!
  \****************************************************/
/*! exports provided: BasicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicosComponent", function() { return BasicosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _data_basic_dev_videos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/basic_dev_videos */ "./src/app/data/basic_dev_videos.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var BasicosComponent = /** @class */ (function () {
    function BasicosComponent(sanitizer, location) {
        this.sanitizer = sanitizer;
        this.location = location;
        this.cards = _data_basic_dev_videos__WEBPACK_IMPORTED_MODULE_4__["CARDS"];
    }
    BasicosComponent.prototype.ngOnInit = function () { };
    BasicosComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.cards, event.previousIndex, event.currentIndex);
    };
    BasicosComponent.prototype.goBack = function () {
        this.location.back();
    };
    BasicosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicos',
            template: __webpack_require__(/*! ./basicos.component.html */ "./src/app/pages/basicos/basicos.component.html"),
            styles: [__webpack_require__(/*! ./basicos.component.scss */ "./src/app/pages/basicos/basicos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], BasicosComponent);
    return BasicosComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabSelectionChanged($event)\">\n  <mat-tab label=\"Windows\">\n    <ng-template matTabContent>\n      <app-windows></app-windows>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Linux\">\n    <ng-template matTabContent>\n      <app-linux></app-linux>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"macOS\">\n    <ng-template matTabContent>\n      <app-macos></app-macos>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Generales\">\n    <ng-template matTabContent>\n      <app-generals></app-generals>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");



var FaqComponent = /** @class */ (function () {
    function FaqComponent(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    /**
     * Highlight blog post when it's ready
     */
    FaqComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    };
    FaqComponent.prototype.tabSelectionChanged = function (event) {
        this.highlightService.highlightAll();
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/generals/generals.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/faq/generals/generals.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\tCatalogo de errores\n</h2>\n<mat-accordion>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #1: error Visual Package 8.1 SDK</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tQuan es fa la instal·lació del Visual Studio Code, si surt un error en que s’especifica que s’ha d’instal·lar el SDK 8.1 i ja es té instal·lat, s’ha d’anar a: Panell de control &gt; Programes &gt; Programes i Característiques\n    \t<img src=\"../../../assets/img/faq/img8.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n    </p>\n    <p>\n    \tEn la llista de programes, es selecciona el Visual Studio Code, click a botó dret, i seleccionar Canviar. En el formulari que s’obre, seleccionar el SDK 8.1 per a descargar-ho.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #2: error Visual Package 8.1 SDK</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tEn quant es fa la instal·lació del repositori del Mobile si a l’executar la instrucció “cordova prepare” surt aquest error:\n    \t<img src=\"../../../assets/img/faq/img9.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n    </p>\n    <p>\n    \tEs soluciona afegint les següents línies en l’arxiu tsconfig.json, en la part “exclude”\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n\"e2e\", \n\"**/*.spec.ts\"\n    \t</code>\n    </pre>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #3: error interno del servidor</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \t<img src=\"../../../assets/img/faq/img10.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n    \tSi en el moment d’executar l’aplicació i interactuar surt el missatge superior, es pot deure a que el programa estigui apuntant al servidor de producció.\n    </p>\n    <p>\n    \tSi es vol desenvolupar, s’ha de comentar i descomentar les següents línies del fitxer: <b>/classpip-mobile/src/app/app.config.ts</b>\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n// public static get SERVER_URL(): string {{'{'}} return 'https://api.classpip.com'; {{'}'}} // PRO \npublic static get SERVER_URL(): string {{'{'}} return 'http://localhost:3000'; {{'}'}} // DEV\n    \t</code>\n    </pre>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #4: error de dependencias incompatibles al usar ng update</h3>\n    </mat-expansion-panel-header>\n    <p>\n      En ocasiones el resultado de la actualización es un mensaje de error que avisa de que se han encontrado depdendencias incompatibles.\n    </p>\n    <p>\n      En la siguiente imagen se puede apreciar como al intentar actualizar <i>@angular/cdk</i> de la versión 7.0.3 a la versión 7.0.4, aparece un mensaje de error informando de que <i>@angular/material</i> en su versión 7.0.3 requiere la versión 7.0.3 de @angular/cli. La solución a este problema es tan sencilla como realizar el comando de actualización primero a <i>@angular/material</i>, y luego a las demás dependencias, si es que no se han actualizado ya. <br>\n      <img src=\"../../../assets/img/onboarding/img4.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n    </p>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/pages/faq/generals/generals.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/faq/generals/generals.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9nZW5lcmFscy9nZW5lcmFscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/faq/generals/generals.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/faq/generals/generals.component.ts ***!
  \**********************************************************/
/*! exports provided: GeneralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralsComponent", function() { return GeneralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralsComponent = /** @class */ (function () {
    function GeneralsComponent() {
    }
    GeneralsComponent.prototype.ngOnInit = function () {
    };
    GeneralsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generals',
            template: __webpack_require__(/*! ./generals.component.html */ "./src/app/pages/faq/generals/generals.component.html"),
            styles: [__webpack_require__(/*! ./generals.component.scss */ "./src/app/pages/faq/generals/generals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralsComponent);
    return GeneralsComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/linux/linux.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/faq/linux/linux.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\tCatalogo de errores\n</h2>\n<mat-accordion>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #1: Permission denied</h3>\n    </mat-expansion-panel-header>\n\n    <p>\n\t\t<img src=\"../../../assets/img/faq/img3.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t\tAquest error apareix quan no s’executa una instrucció amb permisos d’administració\n\t</p>\n\t<p>\n\t\tEs soluciona posant “sudo” al davant de la instrucció.\n\t</p>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #2: Bucle del strongLoop</h3>\n    </mat-expansion-panel-header>\n    <p>\n\t\t<img src=\"../../../assets/img/faq/img4.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t\tEn instal·lar el strongLoop de la part del services, en la part final de la instal·lació entra en bucle.\n\t</p>\n\t<p>\n\t\tEs para mitjançant Crtl+C. No s’ha observat ninguna implicació en continuar la instal·lació.\n\t</p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #3: not found: make</h3>\n    </mat-expansion-panel-header>\n    <p>\n\t\t<img src=\"../../../assets/img/faq/img5.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t\tEn executar la instrucció npm install, després d’instal·lar l’ionic i el cordovà en la part Mobile, pot aparèixer aquest error.\n\t</p>\n\t<p>\n\t\tExecutar la instrucció:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">\nsudo apt-get install build-essential\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tÉs un paquet que conté una llista de paquets necessaris per compilar en C/C++.\n\t</p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #4: plugins no trobats</h3>\n    </mat-expansion-panel-header>\n    <p>\n\t\tEn executar la instrucció “cordovà prepare” apareixen una sèrie de warnings de plugins que no s’han trobat:\n\t\t<img src=\"../../../assets/img/faq/img6.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tAmb un error al final que diu que no troba l’entorn de “ANDROID_HOME”\n\t</p>\n\t<p>\n\t\tS’executen les següents instruccions per solucionar-ho:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">\nexport ANDROID_HOME=/usr/local/android-sdk-linux/tools \nexport PATH=\"$PATH:/usr/local/android-sdk-linux/platform-tools\"\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEn executar-les es defineix l’entorn automàticament i en executar la instrucció “cordova prepare”, es redueix la llista de plugins a un:\n\t\t<img src=\"../../../assets/img/faq/img7.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/pages/faq/linux/linux.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/faq/linux/linux.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9saW51eC9saW51eC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/faq/linux/linux.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/faq/linux/linux.component.ts ***!
  \****************************************************/
/*! exports provided: LinuxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinuxComponent", function() { return LinuxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinuxComponent = /** @class */ (function () {
    function LinuxComponent() {
    }
    LinuxComponent.prototype.ngOnInit = function () {
    };
    LinuxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-linux',
            template: __webpack_require__(/*! ./linux.component.html */ "./src/app/pages/faq/linux/linux.component.html"),
            styles: [__webpack_require__(/*! ./linux.component.scss */ "./src/app/pages/faq/linux/linux.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinuxComponent);
    return LinuxComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/macos/macos.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/faq/macos/macos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\tCatalogo de errores\n</h2>\n<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #1: Failed to install 'cordova-plugin-inappbrowser'</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \t<b>Error:</b>\n    </p>\n    <p>\n    \tEn la versión mobile al utilizar el comando ‘cordova prepare’ se obtiene el error:\n    </p>\n    <div class=\"error-code\">\n    \tFailed to install 'cordova-plugin-inappbrowser':CordovaError: Failed to find 'ANDROID_HOME' environment variable. Try setting setting it manually.\n    </div>\n    <p>\n    \t<b>Solución:</b>\n    </p>\n    <p>\n    \tLa forma de solucionarlo es ir a la pagina de <a href=\"https://developer.android.com/studio/\">android studio</a> e instalar el Android SDK correspondiente al sistema operativo, en este caso la versión mac. Si se realiza la instalación de Android studio, ya viene el Android sdk.\n    </p>\n    <p>\n    \tEn caso de no querer usar/instalar Android studio hay que descargar solo los archivos del sdk y copiarlos en la ruta /Users/alex/Library/Android/sdk. Y luego indicarle al SO el PATH hacia estos archivos con los siguientes comandos.\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\nexport ANDROID_HOME=/Users/alex/Library/Android/sdk\nexport PATH=${{'{'}}PATH{{'}'}}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools\n    \t</code>\n    </pre>\n  </mat-expansion-panel>\n  \n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #2: repositories.cfg could not be loaded</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \t<b>Error:</b>\n    </p>\n    <div class=\"error-code\">\n    \tError: File  \\Users\\User\\.android\\repositories.cfg could not be loaded.\n    </div>\n    <p>\n    \t<b>Solución:</b>\n    </p>\n    <p>\n    \tCrear archivo repositories.cfg en la ruta \\Users\\User\\.android\\ \n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #3: Build failed with an exception.</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \t<b>Error:</b>\n    </p>\n    <div class=\"error-code\">\n    \t<b>FAILURE: Build failed with an exception.</b><br>\n    \t<br>\n\t\t* What went wrong:<br>\n\t\tA problem occurred configuring root project 'android'.<br>\n\t\t> You have not accepted the license agreements of the following SDK components:<br>\n\t\t  [Android SDK Platform 25].<br>\n\t\t  Before building your project, you need to accept the license agreements and complete the installation of the missing components using the Android Studio SDK Manager.\n    </div>\n    <p>\n    \t<b>Solución:</b>\n    </p>\n    <p>\n    \tEn Android studio ir al menú preferences y en la opción Android SDK en la pestaña sdk platforms y se instala andoid 7.0 (Nougat) que es el que corresponde a la plataforma 24. En la instalación se aceptan los acuerdos de la licencia.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #4: Errores de typescript cuando se ejecuta ionic serve</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \t<b>Error:</b>\n    </p>\n    <p>\n\t\tAl ejecutar el comando ionic serve para inicar el servidor del modulo de mobile, este muestra toda una serie de errores en typescript, abriendo una ventana del navegador que muestra todos los errores de typescript.\n    </p>\n    <p>\n    \t<b>Solución:</b>\n    </p>\n    <p>\n    \tEn el package.json hay que subir la versión de \"typescript\": \"2.0.9\" a la versión \"typescript\": \"2.1.4\". Despues se ejecuta npm install una vez más. Ahora al ejecutar ionic serve, no se muestra ningún error y la pagina de la aplicación mobile se abre sin problemas.\n    </p>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #5: Errores derivados de la instalación de Node.js</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \t<b>Error:</b>\n    </p>\n    <p>\n\t\tNode.js se instala correctamente y sin dar ningún error, pero a la hora de usar el cliente de comandos de angular se empiezan a ver multitud de errores en el términal y los comandos no funcionan. También se obtienen errores al intentar instalar módulos en el proyecto con npm install.\n    </p>\n    <p>\n    \t<b>Solución:</b>\n    </p>\n    <p>\n    \tEl problema es que al realizar una instalación de Node.js desde el instalador que hay en la página de Node.js este se instala sin los permisos de lectura/escritura correspondientes. Al no tener los permisos que necesita, al intentar realizar las acciones que requieren de esos permisos no se pueden ejecutar y el funcionamiento es inestable o directamente da errores.\n    </p>\n    <p>\n    \tla mejor forma de solucionarlo es utilizar el instalador <a href=\"http://nvm.sh\">nvm (node versión manager)</a>, se instala utilizando brew, con el comando ‘brew install nvm’. \n    </p>\n    <p>\n    \tLuego con poner ‘nvm install 8.6’ ya se instala la versión de node 8.6 y se configuran todos los permisos correctamente.\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\nnvm install &lt;versión&gt;  // instala la versión de node indicada\nnvm uninstall &lt;versión&gt;  // desinstala una versión de node\nnvm list  // lista las versiones de node instaladas\nnvm use &lt;versión&gt;  // cambia la versión de node a la indicada\n    \t</code>\n    </pre>\n  </mat-expansion-panel>\n\n</mat-accordion>"

/***/ }),

/***/ "./src/app/pages/faq/macos/macos.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/faq/macos/macos.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-code {\n  color: #96a01b;\n  font-weight: bold;\n  padding: 2em;\n  background-color: #edf9fb;\n  border: 1px solid #bfe8ef; }\n  .error-code b {\n    color: #bd3f0a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvZmFxL21hY29zL21hY29zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBO0VBTDFCO0lBT0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFxL21hY29zL21hY29zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWNvZGUge1xuXHRjb2xvcjogIzk2YTAxYjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHBhZGRpbmc6IDJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VkZjlmYjtcblx0Ym9yZGVyOiAxcHggc29saWQgI2JmZThlZjtcblx0YiB7XG5cdFx0Y29sb3I6ICNiZDNmMGE7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/faq/macos/macos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/faq/macos/macos.component.ts ***!
  \****************************************************/
/*! exports provided: MacosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacosComponent", function() { return MacosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MacosComponent = /** @class */ (function () {
    function MacosComponent() {
    }
    MacosComponent.prototype.ngOnInit = function () {
    };
    MacosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-macos',
            template: __webpack_require__(/*! ./macos.component.html */ "./src/app/pages/faq/macos/macos.component.html"),
            styles: [__webpack_require__(/*! ./macos.component.scss */ "./src/app/pages/faq/macos/macos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MacosComponent);
    return MacosComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/windows/windows.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/faq/windows/windows.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\tCatalogo de errores\n</h2>\n<mat-accordion>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Error #1: Can’t find Python executable</h3>\n    </mat-expansion-panel-header>\n\n    <p>\n\t\t<img src=\"../../../assets/img/faq/img1.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t\tL’error surt per primera vegada a l’instal·lar l’strongloop en el mòdul de services, però ja que es tracta d’una eina, per executar els serveis no dona ningun problema.\n\t</p>\n\t<p>\n\t\tL’error torna a sortir en fer el set up del mòdul de Mobile en executar la instrucció “npm install”:\n\t\t<img src=\"../../../assets/img/faq/img2.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tSimplement, executant la següent instrucció, s’instal·laran tots els components necessaris per dur a terme el set up sense errors:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">\nnpm install --global --production windows-build-tools\n\t\t</code>\n\t</pre>\n\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/pages/faq/windows/windows.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/faq/windows/windows.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS93aW5kb3dzL3dpbmRvd3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/faq/windows/windows.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/faq/windows/windows.component.ts ***!
  \********************************************************/
/*! exports provided: WindowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsComponent", function() { return WindowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WindowsComponent = /** @class */ (function () {
    function WindowsComponent() {
    }
    WindowsComponent.prototype.ngOnInit = function () {
    };
    WindowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-windows',
            template: __webpack_require__(/*! ./windows.component.html */ "./src/app/pages/faq/windows/windows.component.html"),
            styles: [__webpack_require__(/*! ./windows.component.scss */ "./src/app/pages/faq/windows/windows.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WindowsComponent);
    return WindowsComponent;
}());



/***/ }),

/***/ "./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <b>Consideración previa:</b> hay que tener en cuenta dos posibilidades, si eres un estudiante eetac cursando un proyecto de final de carrera, deberás pedir acceso al repositorio para poder trabajar en él según el <a routerLink=\"/developer/tutoriales/git\" (click)=\"setTitle( 'Classpip onboarding como trabajar con git en el proyecto' );\">protocolo de trabajo establecido para Git</a> correspondiente a <i>equipo directamente relacionado con el proyecto</i>. En caso contrario, de querer colaborar, se debería hacer según el caso 2 del protocolo <i>aportaciones de personas o equipos ajenos al proyecto</i>. En este último caso, habrá que hacer un 'fork' del repositorio en lugar de un 'clone'.\n</div>"

/***/ }),

/***/ "./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  color: #3c4fbc;\n  background-color: #f0f8ff;\n  border: 1px solid #add8e6;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 4em;\n          margin-block-end: 4em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  padding: 10px;\n  text-align: justify; }\n  div i {\n    color: #8a1683; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvZmlyc3RydW4vY29tbW9uY29uc2lkZXJhdGlvbnMvY29tbW9uY29uc2lkZXJhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QiwwQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3BCLHlCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQVR2QjtJQVdLLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0cnVuL2NvbW1vbmNvbnNpZGVyYXRpb25zL2NvbW1vbmNvbnNpZGVyYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcblx0Y29sb3I6ICMzYzRmYmM7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNhZGQ4ZTY7XG5cdG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDRlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgaSB7XG4gICAgXHRjb2xvcjogIzhhMTY4MztcbiAgICB9XG59XHQiXX0= */"

/***/ }),

/***/ "./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CommonconsiderationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonconsiderationsComponent", function() { return CommonconsiderationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var CommonconsiderationsComponent = /** @class */ (function () {
    function CommonconsiderationsComponent(titleService) {
        this.titleService = titleService;
    }
    CommonconsiderationsComponent.prototype.ngOnInit = function () {
    };
    CommonconsiderationsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    CommonconsiderationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commonconsiderations',
            template: __webpack_require__(/*! ./commonconsiderations.component.html */ "./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.html"),
            styles: [__webpack_require__(/*! ./commonconsiderations.component.scss */ "./src/app/pages/firstrun/commonconsiderations/commonconsiderations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], CommonconsiderationsComponent);
    return CommonconsiderationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/firstrun/firstrun.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/firstrun/firstrun.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabSelectionChanged($event)\">\n  <mat-tab label=\"Services\">\n    <ng-template matTabContent>\n      <app-initservices></app-initservices>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Dashboard\">\n    <ng-template matTabContent>\n      <app-initdashboard></app-initdashboard>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Mobile\">\n    <ng-template matTabContent>\n      <app-initmobile></app-initmobile>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Onboarding\">\n    <ng-template matTabContent>\n      <app-initonboarding></app-initonboarding>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/pages/firstrun/firstrun.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/firstrun/firstrun.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0cnVuL2ZpcnN0cnVuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/firstrun/firstrun.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/firstrun/firstrun.component.ts ***!
  \******************************************************/
/*! exports provided: FirstrunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstrunComponent", function() { return FirstrunComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");



var FirstrunComponent = /** @class */ (function () {
    function FirstrunComponent(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    FirstrunComponent.prototype.ngOnInit = function () {
    };
    /**
     * Highlight blog post when it's ready
     */
    FirstrunComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    };
    FirstrunComponent.prototype.tabSelectionChanged = function (event) {
        this.highlightService.highlightAll();
    };
    FirstrunComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firstrun',
            template: __webpack_require__(/*! ./firstrun.component.html */ "./src/app/pages/firstrun/firstrun.component.html"),
            styles: [__webpack_require__(/*! ./firstrun.component.scss */ "./src/app/pages/firstrun/firstrun.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]])
    ], FirstrunComponent);
    return FirstrunComponent;
}());



/***/ }),

/***/ "./src/app/pages/firstrun/initdashboard/initdashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/firstrun/initdashboard/initdashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Iniciar proyecto de Dashboard</h2>\n<app-commonconsiderations></app-commonconsiderations>\n<p>\n\t<b>Paso 1:</b> Clona el repositorio en tu entorno de desarrollo local:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ngit clone https://github.com/alejandromartincruz/classpip-dashboard.git\n\t</code>\n</pre>\n<p>\n\t<b>Paso 2:</b> Instala las dependencias del proyecto:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ncd classpip-dashboard\nnpm install\n\t</code>\n</pre>\n<p>\n\t<b>Paso 3:</b> Inicia Classpip-dashboard (por defecto en <a href=\"http://localhost:4200/\">http://localhost:4200</a>) con el siguiente comando:\n</p>\n<pre>\n\t<code class=\"language-markup\">\nnpm run start\n\t</code>\n</pre>\n<section>\n\t<h2>Origen de los datos</h2>\n\t<p>\n\t\tHay que asegurarse de que la aplicación de servicios esta funcionando antes de intentar usar la aplicación de mobile, ya que la aplicación de servicios es el origen y destino de los datos. De no ser así, al intentar iniciar sesión se obtendrá el error: <i>ERROR: Ha ocurrido un error interno en el servidor. Por favor, contacta con tu administrador.</i>\n\t</p>\n\t<p>\n\t\tTambién hay que asegurar que este configurado el origen de los datos en localhost:3000. Para ello hay que dirigirse al archivo <i>'src/environments/environment.ts'</i> y asegurarse de que el <i>SERVER_URL</i> apunta a localhost:3000 y no a https://dashboard.classpip.com basta con dejar las lineas como se muestra a continuación:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"6\">\n\t\t<code class=\"language-typescript\">export const environment = {{'{'}}\n  production: false,\n  api: 'http://localhost:3000'\n{{'}'}};</code>\n\t</pre>\n</section>"

/***/ }),

/***/ "./src/app/pages/firstrun/initdashboard/initdashboard.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/firstrun/initdashboard/initdashboard.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0cnVuL2luaXRkYXNoYm9hcmQvaW5pdGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/firstrun/initdashboard/initdashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/firstrun/initdashboard/initdashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: InitdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitdashboardComponent", function() { return InitdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitdashboardComponent = /** @class */ (function () {
    function InitdashboardComponent() {
    }
    InitdashboardComponent.prototype.ngOnInit = function () {
    };
    InitdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initdashboard',
            template: __webpack_require__(/*! ./initdashboard.component.html */ "./src/app/pages/firstrun/initdashboard/initdashboard.component.html"),
            styles: [__webpack_require__(/*! ./initdashboard.component.scss */ "./src/app/pages/firstrun/initdashboard/initdashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitdashboardComponent);
    return InitdashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/firstrun/initmobile/initmobile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/firstrun/initmobile/initmobile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Iniciar proyecto de Mobile</h2>\n<app-commonconsiderations></app-commonconsiderations>\n<p>\n\t<b>Paso 1:</b> Clona el repositorio en tu entorno de desarrollo local:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ngit clone https://github.com/alejandromartincruz/classpip-mobile.git\n\t</code>\n</pre>\n<p>\n\t<b>Paso 2:</b> Instala la versión 2.2.2 de ionic y la versión 6.4.0 de cordova con npm:\n</p>\n<pre>\n\t<code class=\"language-markup\">\nnpm install -g ionic@2.2.2\nnpm install -g cordova@6.4.0\n\t</code>\n</pre>\n<p>\n\t<b>Paso 3:</b> Instala las dependencias del proyecto:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ncd classpip-mobile\nnpm install\nmkdir www\ncordova prepare\n\t</code>\n</pre>\n<p>\n\t<b>Paso 4:</b> Inicia Classpip-mobile (por defecto en <a href=\"http://localhost:8100/\">http://localhost:8100</a>) con el siguiente comando:\n</p>\n<pre>\n\t<code class=\"language-markup\">\nionic serve --lab\n\t</code>\n</pre>\n<section>\n\t<h2>Origen de los datos</h2>\n\t<p>\n\t\tHay que asegurarse de que la aplicación de servicios esta funcionando antes de intentar usar la aplicación de mobile, ya que la aplicación de servicios es el origen y destino de los datos. De no ser así, al intentar iniciar sesión se obtendrá el error: <i>ERROR: Ha ocurrido un error interno en el servidor. Por favor, contacta con tu administrador.</i>\n\t</p>\n\t<p>\n\t\tTambién hay que asegurar que este configurado el origen de los datos en localhost:3000. Para ello hay que dirigirse al archivo <i>'src/app/app.config.ts'</i> y asegurarse de que el <i>SERVER_URL</i> apunta a localhost:3000 y no a https://api.classpip.com basta con dejar las lineas como se muestra a continuación:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"3\">\n\t\t<code class=\"language-typescript\">// Server connection\n// public static get SERVER_URL(): string {{'{'}} return 'https://api.classpip.com'; {{'}'}} // PRO\npublic static get SERVER_URL(): string {{'{'}} return 'http://localhost:3000'; {{'}'}} // DEV</code>\n\t</pre>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/firstrun/initmobile/initmobile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/firstrun/initmobile/initmobile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0cnVuL2luaXRtb2JpbGUvaW5pdG1vYmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/firstrun/initmobile/initmobile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/firstrun/initmobile/initmobile.component.ts ***!
  \*******************************************************************/
/*! exports provided: InitmobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitmobileComponent", function() { return InitmobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitmobileComponent = /** @class */ (function () {
    function InitmobileComponent() {
    }
    InitmobileComponent.prototype.ngOnInit = function () {
    };
    InitmobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initmobile',
            template: __webpack_require__(/*! ./initmobile.component.html */ "./src/app/pages/firstrun/initmobile/initmobile.component.html"),
            styles: [__webpack_require__(/*! ./initmobile.component.scss */ "./src/app/pages/firstrun/initmobile/initmobile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitmobileComponent);
    return InitmobileComponent;
}());



/***/ }),

/***/ "./src/app/pages/firstrun/initonboarding/initonboarding.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/firstrun/initonboarding/initonboarding.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Iniciar proyecto de Onboarding</h2>\n<app-commonconsiderations></app-commonconsiderations>\n<p>\n\t<b>Paso 1:</b> Clona el repositorio en tu entorno de desarrollo local:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ngit clone https://github.com/alejandromartincruz/classpip-onboarding.git\n\t</code>\n</pre>\n<p>\n\t<b>Paso 2:</b> Instala las dependencias del proyecto:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ncd classpip-onboarding\nnpm install\n\t</code>\n</pre>\n<p>\n\t<b>Paso 3:</b> Inicia Classpip-onboarding (por defecto en <a href=\"http://localhost:4200/\">http://localhost:4200</a>) con el siguiente comando:\n</p>\n<pre>\n\t<code class=\"language-markup\">\nng serve --open\n\t</code>\n</pre>"

/***/ }),

/***/ "./src/app/pages/firstrun/initonboarding/initonboarding.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/firstrun/initonboarding/initonboarding.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0cnVuL2luaXRvbmJvYXJkaW5nL2luaXRvbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/firstrun/initonboarding/initonboarding.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/firstrun/initonboarding/initonboarding.component.ts ***!
  \***************************************************************************/
/*! exports provided: InitonboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitonboardingComponent", function() { return InitonboardingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitonboardingComponent = /** @class */ (function () {
    function InitonboardingComponent() {
    }
    InitonboardingComponent.prototype.ngOnInit = function () {
    };
    InitonboardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initonboarding',
            template: __webpack_require__(/*! ./initonboarding.component.html */ "./src/app/pages/firstrun/initonboarding/initonboarding.component.html"),
            styles: [__webpack_require__(/*! ./initonboarding.component.scss */ "./src/app/pages/firstrun/initonboarding/initonboarding.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitonboardingComponent);
    return InitonboardingComponent;
}());



/***/ }),

/***/ "./src/app/pages/firstrun/initservices/initservices.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/firstrun/initservices/initservices.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Iniciar proyecto de Services</h2>\n<app-commonconsiderations></app-commonconsiderations>\n<p>\n\t<b>Paso 1:</b> Clona el repositorio en tu entorno de desarrollo local:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ngit clone https://github.com/alejandromartincruz/classpip-services.git\n\t</code>\n</pre>\n<p>\n\t<b>Paso 2:</b> Instala la versión 6.0.3 de strongloop con npm\n</p>\n<pre>\n\t<code class=\"language-markup\">\nnpm install -g strongloop@6.0.3\n\t</code>\n</pre>\n<p>\n\t<i>Nota: en macOS la instalación de strongloop acaba con error y parece que no se haya instalado correctamente, pero el funcionamiento de strongloop es correcto.</i>\n</p>\n<p>\n\t<b>Paso 3:</b> Instala las dependencias del proyecto:\n</p>\n<pre>\n\t<code class=\"language-markup\">\ncd classpip-services\nnpm install\n\t</code>\n</pre>\n<p>\n\t<b>Paso 4:</b> Inicia Classpip-services (por defecto en <a href=\"http://localhost:3000/\">localhost:3000</a>) con el siguiente comando:\n</p>\n<pre>\n\t<code class=\"language-markup\">\nnpm run start\n\t</code>\n</pre>\n<section>\n\t<h2>In-Memory o base de datos</h2>\n\t<p>\n\t\tEl repositorio esta preparado para guardar por defecto la información in-memory, si se quiere cambiar este funcionamiento por una base de datos mysql, hay que ir al archivo <i>'classpip-services/server/datasources.json'</i> y cambiar las lineas:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"2\">\n\t\t<code class=\"language-json\">\"db\": {{'{'}}\n    \"name\": \"db\",\n    \"connector\": \"memory\"\n{{'}'}},</code>\n\t</pre>\n\t<p>\n\t\tEn su lugar, hay que sustituirlas por:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"2\">\n\t\t<code class=\"language-json\">\"db\": {{'{'}}\n    \"host\": \"localhost\",\n    \"port\": 3306,\n    \"url\": \"\",\n    \"database\": \"&lt;database_name&gt;\",\n    \"password\": \"&lt;local_user_password&gt;\",\n    \"name\": \"db\",\n    \"user\": \"&lt;local_user&gt;\",\n    \"connector\": \"mysql\"\n{{'}'}},</code>\n\t</pre>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/firstrun/initservices/initservices.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/firstrun/initservices/initservices.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0cnVuL2luaXRzZXJ2aWNlcy9pbml0c2VydmljZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/firstrun/initservices/initservices.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/firstrun/initservices/initservices.component.ts ***!
  \***********************************************************************/
/*! exports provided: InitservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitservicesComponent", function() { return InitservicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitservicesComponent = /** @class */ (function () {
    function InitservicesComponent() {
    }
    InitservicesComponent.prototype.ngOnInit = function () {
    };
    InitservicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initservices',
            template: __webpack_require__(/*! ./initservices.component.html */ "./src/app/pages/firstrun/initservices/initservices.component.html"),
            styles: [__webpack_require__(/*! ./initservices.component.scss */ "./src/app/pages/firstrun/initservices/initservices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitservicesComponent);
    return InitservicesComponent;
}());



/***/ }),

/***/ "./src/app/pages/git/git.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/git/git.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon> Volver</button>\n<section>\n\t<h2>Introducción a Git</h2>\n\t<p>\n\t\tGit es un sistema de control de versiones distribuido. Git es multiplataforma, por lo que se puede usar sin restricciones en los sistemas operativos más comunes, como son Windows, Linux o MacOS.\n\t</p>\n\t<p>\n\t\tGracias a Git se van guardando los cambios que se realizan en los diversos archivos del proyecto, pudiendo ir atrás o adelante en ellos luego con unos simples comandos. Algunas de las funciones más útiles de Git son:\n\t</p>\n\t<ul>\n\t\t<li>Poder comparar el código de un archivo con sus versiones anteriores, para ver los cambios realizados en este.</li>\n\t\t<li>Restaurar versiones anteriores de un archivo.</li>\n\t\t<li>Unir los cambios en un archivo con los cambios realizados por otra persona.</li>\n\t\t<li>Dividir el proyecto en ramas, para que los cambios realizados en una de las ramas no afecte al resto.</li>\n\t\t<li>Subir los cambios realizados a un repositorio remoto para que estén disponibles para el resto del equipo.</li>\n\t</ul>\n\t<p>\n\t\tPara el proyecto de Classpip se ha utilizado Github, que es un servicio de alojamiento de repositorios gestionados con Git.\n\t</p>\n\t<p>\n\t\tSi no se esta familiarizado con Git, hay varios recursos con los que aprender Git de forma fácil y practica:\n\t</p>\n\t<ul class=\"repositorios-list\">\n\t\t<li><a href=\"https://www.codecademy.com/learn/learn-git\" target=\"_blank\">Tutorial básico</a></li>\n\t\t<li><a href=\"https://www.katacoda.com/courses/git\" target=\"_blank\">Tutorial intermedio</a></li>\n\t\t<li><a href=\"https://learngitbranching.js.org\" target=\"_blank\">Tutorial para aprender a trabajar con ramas</a></li>\n\t</ul>\n\t<p>\n\t\tHay bastantes cosas que aprender en Git, pero para manejarse bien en el proyecto, es importante familiarizarse con los conceptos de:\n\t</p>\n\t<ul>\n\t\t<li>Añadir y commitear cambios (git add y git commit).</li>\n\t\t<li>Moverse entre versiones (git checkout).</li>\n\t\t<li>El concepto de rama, poder verlas, crearlas y cambiar entre ellas (git branch, git checkout).</li>\n\t\t<li>Fusionar los cambios realizados en una rama con otra (git merge).</li>\n\t</ul>\n</section>\n<section>\n\t<h2>Los repositorios de Classpip</h2>\n\t<p>\n\t\tLos repositorios de Classpip se encuentran en Github.com, sus enlaces son los siguientes:\n\t</p>\n\t<ul class=\"repositorios-list\">\n\t\t<li><a href=\"https://github.com/alejandromartincruz/classpip-services\" target=\"_blank\">Repositorio de Classpip services</a></li>\n\t\t<li><a href=\"https://github.com/alejandromartincruz/classpip-dashboard\" target=\"_blank\">Repositorio de Classpip dashboard</a></li>\n\t\t<li><a href=\"https://github.com/alejandromartincruz/classpip-mobile\" target=\"_blank\">Repositorio de Classpip mobile</a></li>\n\t\t<li><a href=\"https://github.com/alejandromartincruz/classpip-onboarding\" target=\"_blank\">Repositorio de Classpip onboarding</a></li>\n\t</ul>\n</section>\n<section>\n\t<h2>Primeros pasos con reporitorio Classpip</h2>\n\t<p>\n\t\tPara comenzar a trabajar con uno de los proyectos, es suficiente con clonar el proyecto en nuestro equipo. Para ello bastará con abrir el terminal, ir a la carpeta donde se quieran tener los proyectos y utilizar el siguiente comando:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit clone &lt;url-del-repositorio&gt;\n\nejemplo: git clone https://github.com/alejandromartincruz/classpip-mobile.git\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tuna vez que se ha clonado el proyecto en el equipo, se entra en su carpeta correspondiente, y desde allí se puede ver el estado (git status), las ramas del proyecto (git branch) y sus versiones (git tag). Al estar recién bajado el estado mostrará que no hay cambios, y solo mostrará la rama master.\n\t</p>\n\t<p>\n\t\tLos repositorios tienen la rama master, la dev, la test y la tutorial. Para obtener una rama del repositorio es tan sencillo como utilizar los siguientes comandos:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit fetch origin &lt;nombre-rama&gt;\ngit checkout &lt;nombre-rama&gt;\n\nejemplo: git fetch origin tutorial\ngit checkout tutorial\"}}\n\t</code>\n\t</pre>\n\t<p>\n\t\tDespués de esto, todo el código del proyecto cambiará para mostrar el código que hay en la rama tutorial. Donde se verán los archivos añadidos en el tutorial de desarrollo para classpip.\n\t</p>\n\t<p>\n\t\tCuando se cambie de una versión a otra dentro del repositorio, es bastante probable que los módulos de node instalados hayan cambiado de versión, no se hayan instalado en esa versión, o se hayan instalado módulos nuevos que no estaban en la versión previa. Por ello, es recomendable borrar la carpeta node_modules y volver a realizar la instalación de módulos:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\nrm –rf node_modules\nnpm install\"}}\n\t</code>\n\t</pre>\t\n</section>\n<section>\n\t<h2>Protocolo para trabajo en  grupo en Git</h2>\n\t<p>\n\t\tLa utilización de un programa de control de versiones, como git en este caso, supone un gran avance a la hora de realizar trabajo en equipo en cualquier software.\n\t</p>\n\t<p>Es conveniente marcar unas pautas de trabajo en equipo para facilitar la coordinación de grupos de trabajo en el mismo proyecto, agilizando de esta manera el trabajo de diversas características o módulos, y su posterior integración en el proyecto.\n\t</p>\n\t<p>\n\t\tSe parte de la premisa de que actualmente hay dos ramas, la <b>master</b> y la <b>dev</b>. Teniendo esto en cuenta, cada proyecto nuevo comenzará con una nueva rama que surgirá de la versión actual de master. El objetivo es tener las ramas master y dev sin diferencias entre ellas para poder comenzar a trabajar óptimamente, y una rama donde se realizará el proyecto que será idéntica a master en el momento de comenzarlo. Cada proyecto tendrá un nombre único e identificativo para su rama. A partir de ahora ya se puede considerar:\n\t</p>\n\t<ul>\n\t\t<li>La rama master como la rama de producción, es decir, la que se verá públicamente y utilizarán los usuarios.</li>\n\t\t<li>La rama dev como la rama de preproducción, una rama que será idéntica a la de producción para probar los desarrollos antes de que sean publicados en producción.</li>\n\t\t<li>La rama propia de cada proyecto como la rama donde cada estudiante o grupo de estudiantes irá integrando los diversos desarrollos de su proyecto.</li>\n\t</ul>\n\t<p>\n\t\tAdemás se tomarán en cuenta dos situaciones diferentes, el trabajo del equipo envuelto en el proyecto directamente, y el trabajo por parte de personas o equipos ajenos al proyecto pero que quieran participar.\n\t</p>\n</section>\n<section>\n\t<h2>Caso 1, trabajo en el equipo directamente relacionado con el proyecto:</h2>\n\t<p>\n\t\tLo primero es fijar un tiempo de desarrollo, unas funcionalidades a desarrollar o ambas cosas simultáneamente siguiendo una metodología scrum. Una vez pasado el tiempo fijado, se publicarán los desarrollos que se hayan realizado correctamente durante ese periodo de tiempo. O en el caso de haber fijado funcionalidades en lugar de tiempo, se publicarán las funcionalidades una vez acabadas. La elección de un método u otro deberá ser elegida por el equipo de trabajo.\n\t</p>\n\t<p>\n\t\tEl siguiente paso es clonar el proyecto, y prepararlo con las ramas <b>master</b> y <b>test</b>. Cuando ya están las dos ramas listas, tan solo falta crear una nueva rama para el proyecto. <u>Es importante estar situado en la rama master cuando se crea una rama nueva para que esta surja de master</u>. La creación de esta rama se hace mediante el comando:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit checkout master\ngit checkout –b &lt;nombre-nueva-rama&gt;\"}}\n\t</code>\n\t</pre>\n\t<p>\n\t\tUna vez que se tiene preparado el entorno de trabajo con las tres ramas en la misma situación, se podrá comenzar una metodología de trabajo en equipo que facilite la coordinación entre los miembros del equipo, que asegure el correcto testeo de los trabajos individuales de cada uno.\n\t</p>\n\t<p>\n\t\tPara comenzar un nuevo desarrollo se deberá crear una nueva rama a partir de la rama master, que llamaremos a modo de ejemplo desarrollo_1. Con el comando:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit checkout master\ngit checkout –b desarrollo_1\"}}\n\t</code>\n\t</pre>\n\t<p>\n\t\tEn este momento la rama desarrollo_1 es exactamente igual que la rama master, dev y la del proyecto. Y aquí es donde se comienza a desarrollar la nueva funcionalidad que se quiera añadir al proyecto.\n\t</p>\n\t<p>\n\t\tNo se debería hacer ningún commit hasta que este nuevo desarrollo no este finalizado y funcionando. Si se realizan muchos commits, en el caso de tener que realizar una revisión del trabajo para encontrar un bug o para mejorar algo, habrá que revisar los cambios realizados en cada uno de los commits individualmente, lo que dificulta bastante la revisión. Tener todo el trabajo realizado en un solo commit facilitará la posterior revisión de los cambios realizados, al tenerlos todos juntos. \n\t</p>\n\t<p>\n\t\tUna vez finalizado el nuevo desarrollo, se realizará un merge contra la rama del proyecto. Y se realizarán las pruebas para comprobar el correcto funcionamiento del proyecto.\n\t</p>\n\t<p>\n\t\tPara realizar el merge sobre la rama del proyecto (llamada a partir de ahora <b>proyecto</b> a modo de ejemplo), se hará de la siguiente manera:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit checkout proyecto\ngit pull origin proyecto\nmerge --no-ff --no-commit desarrollo_1\ngit commit -m “[proyecto] merge with desarrollo_1”\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tHay que destacar, que antes de realizar el merge, es importante hacer un pull como se indica en el paso 2, en el que se descargarían todos los posibles cambios a la rama realizados por otro miembro del grupo, y con lo que se realizaría el merge sobre una rama actualizada.\n\t</p>\n\t<p>\n\t\tCuando el desarrollo esta correctamente finalizado, y funciona bien en proyecto, se realiza un merge sobre dev. El proceso de merge en dev es el mismo que en proyecto:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit checkout dev\ngit pull origin dev\nmerge --no-ff --no-commit desarrollo_1\ngit commit -m “[dev] merge with desarrollo_1”\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEn caso de haber un conflicto entre los pasos 3 y 4, este no quedará commiteado gracias al flag “--no-commit”, entonces bastará con solucionar el conflicto, añadir los cambios con un “git add” y commitear según el paso 4:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\nSolucionar conflicto\ngit add –A\ngit commit –m “[dev] merge with desarrollo_1”\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEl flag “--no-ff” se utiliza para evitar que se realice un fast-forward que nos hará perder información del histórico de ramas. En la siguiente imagen se puede apreciar la diferencia entre realizar un commit con el flag y sin el flag.\n\t\t<img src=\"../../assets/img/git/gitmerge--no-ff.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t\t<span style=\"display:block;text-align:center;\">Ilustración 1: <a href=\"https://nvie.com/posts/a-successful-git-branching-model/\" target=\"_blank\">fuente</a></span>\n\t</p>\n\t<p>\n\t\tSi todos los desarrollos mergeados en la rama dev funcionan correctamente, una vez finalizado el tiempo de desarrollo, o todos los desarrollos que se quieran publicar, se realiza un merge contra la rama master, arrastrando todos los cambios mergeados contra la rama dev a la rama master. Una vez realizado este merge se tiene una nueva versión funcional del proyecto, por lo que se procederá a etiquetar dicha versión según el procedimiento habitual.\n\t</p>\n\t<p>\n\t\tEl procedimiento habitual de etiquetado es: <b>x.y.z</b>, donde:\n\t</p>\n\t<ul>\n\t\t<li><b>X</b> es la versión mayor, se usa cuando hay un cambio importante en fucionalidad.</li>\n\t\t<li><b>Y</b> es la versión menor, se usa para añadidos de funcionalidades que no suponen cambios muy grandes.</li>\n\t\t<li><b>Z</b> se usa para pequeñas correcciones de errores.</li>\n\t</ul>\n\t<p>\n\t\tPor lo que una primera versión podría considerarse como v0.1.0, y tras añadir una funcionalidad pasaría a ser la v0.2.0, después de hacer cambios importantes en la aplicación como para considerar que ya esta lista pasaríamos a denominarla con la etiqueta v1.0.0, y en el caso de que esta versión tuviera un bug que requiriera de un fix la nueva versión sería la v1.0.1. Poner un tag en la rama activa es tan fácil como usar el comando:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit tag v0.1.0\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tSi algo funcionara mal en la nueva versión, sería muy fácil revertir los cambios a la versión anterior que fue etiquetada y que se sabe que funcionaba bien. Se puede revertir a un estado anterior usando los tags en lugar de los commits, el comando para realizar este cambio:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit checkout v0.1.0\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tUsando el comando “git tag” se muestra un listado de versiones por etiqueta, que si se ha seguido el protocolo de numeración correctamente será fácil determinar cual es la versión previa a la actual.\n\t\t<img src=\"../../assets/img/git/protocolo-git.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t\t<span style=\"display:block;text-align:center;\">Ilustración 2: ejemplo de linea de trabajo</span>\n\t</p>\n</section>\n<section>\n\t<h2>Caso 2, aportaciones de personas o equipos ajenos al proyecto</h2>\n\t<p>\n\t\tEs de sobras conocido que un proyecto open source acaba siendo tan potente como la comunidad de desarrolladores que tiene detrás. Siendo las colaboraciones de estos tan o más importantes como los del equipo de trabajo directamente implicado. Es por ello que cabe plantear un método de trabajo para publicar en el proyecto las aportaciones de terceros.\n\t</p>\n\t<p>\n\t\tEn este caso los desarrolladores necesitaran crear un fork del repositorio original, pasando a tener su propio repositorio y su propio remoto. La forma de trabajar debe ser similar a la del caso 1, con la excepción de que para publicar algo deberán hacer un pull request.\n\t</p>\n\t<p>\n\t\tPara hacer el pull request hay que ir al repositorio original desde el que se realizó el fork, y presionar el botón “New pull request”.\n\t\t<img src=\"../../assets/img/git/img1.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t</p>\n\t<p>\n\t\tEn este punto, se muestra una pagina con el titulo “Compare changes”, en esta pagina hay que pulsar sobre el enlace “compare across forks”.\n\t\t<img src=\"../../assets/img/git/img2.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t</p>\n\t<p>\n\t\tA continuación hay que seleccionar como “base fork” la rama dev del repositorio original, y como “head fork” la rama dev del repositorio del colaborador. Además habrá que escribir un titulo y una descripción para facilitar la comprensión de los cambios en el código a quien deba aprobar el pull request. Y ya se podrá presionar la solicitud de pull request.\n\t\t<img src=\"../../assets/img/git/img3.png\" style=\"display:block;max-width:100%;margin: 15px auto 10px;\">\n\t</p>\n\t<p>\n\t\tAhora un miembro del equipo con acceso al repositorio original podrá aprobar, rechazar o solicitar una revisión en el pull request.\n\t</p>\n\t<p>\n\t\tEl miembro del equipo, con permisos de escritura en el repositorio, deberá ir a la pestaña “pull requests” que aparecerá ahora en el proyecto, seleccionar el pull request que se quiera integrar en el proyecto, y una vez revisado el código, para aceptarlo solo tendrá que seleccionar “aprove” y luego presionar el botón “Submit review”.\n\t</p>\n\t<p>\n\t\tLas otras dos opciones que hay para seleccionar en un pull request son “Comment”, donde el revisor puede poner un comentario sobre el pull request sin tener que aprobarlo.\n\t</p>\n\t<p>\n\t\tY “Request changes”, donde se solicita que se realicen cambios en el código que se quiere mergear al repositorio.\n\t</p>\n</section>\n<section>\n\t<h2>Consejo tutorial de desarrollo modulo de mesa</h2>\n\t<p>\n\t\tPara seguir el <a routerLink=\"/developer/tutorial\">tutorial de desarrollo</a> en el que se realiza un modulo de mesa de estudiante, es importante tener en cuenta que hay que situarse en el tag v0.1.0 antes de comenzar a intentar desarrollar el modulo del tutorial. Pues el código del tutorial parte de ese punto, y si se iniciara el desarrollo en otro punto el código seria diferente y podría inducir a errores o confusiones.\n\t</p>\n\t<p>\n\t\tSi en algún momento se quiere comparar el código que se esta realizando con el código del tutorial, existen dos opciones. La primera es ir al repositorio de github del proyecto y una vez ahí situarse en la rama tutorial y buscar el archivo que se quiere comparar.\n\t</p>\n\t<p>\n\t\tEl segundo método se pude ejecutar directamente desde la línea de comandos, y como resultado mostrará las diferencias entre el archivo que se esta editando y el archivo del tutorial. De esta manera se puede ver claramente que es exactamente lo que falta para realizar los pasos indicados en el tutorial. Para ello, se debe utilizar el comando 'git diff' de la siguiente manera:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit diff master..tutorial -- myfile.ts\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEste comando supone que se esta realizando el tutorial desde la rama master, de estar realizándose desde una rama personalizada iniciada en master en el punto v0.1.0 habrá que usar el nombre de esa rama en lugar de master. En lugar de myfile.ts hay que poner el nombre del archivo que se quiere comparar.\n\t</p>\n</section>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");




var GitComponent = /** @class */ (function () {
    function GitComponent(highlightService, location) {
        this.highlightService = highlightService;
        this.location = location;
        this.highlighted = false;
    }
    GitComponent.prototype.ngOnInit = function () {
    };
    /**
     * Highlight blog post when it's ready
     */
    GitComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    };
    GitComponent.prototype.goBack = function () {
        this.location.back();
    };
    GitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-git',
            template: __webpack_require__(/*! ./git.component.html */ "./src/app/pages/git/git.component.html"),
            styles: [__webpack_require__(/*! ./git.component.scss */ "./src/app/pages/git/git.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
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

module.exports = "<mat-card class=\"home-card\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12 l6 left\">\n\t\t\t<div class=\"homecard-text\">\n\t\t\t\t<h2>\n\t\t\t\t\tDESCUBRE CLASSPIP\n\t\t\t\t</h2>\n\t\t\t\t<h3>\n\t\t\t\t\tExperimenta con la gamificación en un entorno educativo.\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"col s12 l6 right\"><img mat-card-image class=\"docs-classpip-logo\" src=\"../assets/img/classpip-icon.svg\" alt=\"angular\"></div>\n\t</div>\n</mat-card>\n\n<div class=\"parallax home-parallax\">\n\t<div class=\"text-container\">\n\t\t<h2 class=\"parallas-text\">Deja que tus alumnos aprendan con ordenadores y moviles</h2>\n\t</div>\n</div>\n\n<div class=\"home-card\">\n\t<img class=\"home-image\" src=\"../assets/img/gamification.jpg\">\n</div>\n<div class=\"home-card\">\n\t<img class=\"home-image\" src=\"../assets/img/gamification-working.jpg\">\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = "Homepage";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/install/install.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/install/install.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabSelectionChanged($event)\">\n  <mat-tab label=\"Windows\">\n    <ng-template matTabContent>\n      <app-windowsinstall></app-windowsinstall>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Linux\">\n    <ng-template matTabContent>\n      <app-linuxinstall></app-linuxinstall>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"macOS\">\n    <ng-template matTabContent>\n      <app-macosinstall></app-macosinstall>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/pages/install/install.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/install/install.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhbGwvaW5zdGFsbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/install/install.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/install/install.component.ts ***!
  \****************************************************/
/*! exports provided: InstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallComponent", function() { return InstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");



var InstallComponent = /** @class */ (function () {
    function InstallComponent(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    InstallComponent.prototype.ngOnInit = function () {
    };
    /**
     * Highlight blog post when it's ready
     */
    InstallComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    };
    InstallComponent.prototype.tabSelectionChanged = function (event) {
        this.highlightService.highlightAll();
    };
    InstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-install',
            template: __webpack_require__(/*! ./install.component.html */ "./src/app/pages/install/install.component.html"),
            styles: [__webpack_require__(/*! ./install.component.scss */ "./src/app/pages/install/install.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]])
    ], InstallComponent);
    return InstallComponent;
}());



/***/ }),

/***/ "./src/app/pages/install/linuxinstall/linuxinstall.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/install/linuxinstall/linuxinstall.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\tInstalación del entorno de desarrollo en Linux\n</h2>\n<mat-accordion>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>NODE y NPM</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tLa versión de Node que se usa en el desarrollo es la 8.6.0, por lo que se recomienda descargar esta versión para evitar conflictos entre las versiones de los diferentes programas utilizados.\n    </p>\n    <p>\n    \tNo se recomienda utilizar el instalador de Nodejs para Linux, ya que, aunque se instala sin ningún tipo de error suele dar problemas de permisos de ficheros en la instalación, que se traduce en constantes fallos y problemas a la hora de utilizar comandos de node y de npm.\n    </p>\n    <p>\n    \tLo más facil y seguro para la instalación de Nodejs en Linux es utilizar Node Version Manager (NVM), que además permite instalar varias versiones de Node y cambiar entre ellas fácilmente. Para instalar NVM hay que abrir el términal e introducir uno de los siguientes comandos, o curl o wget:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\ncurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash\nwget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash\n    \t</code>\n    </pre>\n    <p>\n    \tRecarga el shell con el siguiente comando en el términal:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\nsource ~/.bashrc\n    \t</code>\n    </pre>\n    <p>\n    \tUna vez que NVM esta instalado y funcional, instalar la versión 8.6 de Node es tan sencillo como poner el siguiente comando en el terminal:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\nnvm install 8.6.0\n    \t</code>\n    </pre>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Git</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tGit es una herramienta imprescindible para este proyecto. Para poder utilizar los comandos de Git en el terminal del sistema. La mejor forma de instalarlo es ir a <a href=\"https://git-scm.com/downloads\" target=\"_blank\">esta pagina web</a> y seguir sus instrucciones de instalación para Linux. Lo ideal es instalar la versión más reciente disponible.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Sourcetree</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tSourcetree es un cliente gráfico de Git, no es necesario para llevar a cabo un desarrollo en el proyecto, pero va muy bien para visionar los commits y las ramas que se han ido llevando a cabo en el repositorio de una forma más clara y sencilla.\n    </p>\n    <p>\n    \tEste programa se instala desde su <a href=\"https://www.sourcetreeapp.com\" target=\"_blank\">página oficial</a>.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Visual Studio Code</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tPara escribir código se puede utilizar cualquier GUI, existen muchos, como por ejemplo WebStorm de JetBrains, Sublime Text, etc. pero se recomienda el uso de Visual Studio Code.\n    </p>\n    <p>\n    \tEste programa se instala desde su <a href=\"https://code.visualstudio.com/#alt-downloads\" target=\"_blank\">página oficial</a> seleccionando el instalador de Linux. Para instalarlo en Ubuntu, una vez descargado el archivo hay que situarse en la carpeta donde se ha descargado e introducir el siguiente comando:\n    </p>\n    <pre>\n    \t<code>\nsudo dpkg -i nomDeLArchiu.deb\n    \t</code>\n    </pre>\n    <p>\n    \tUna de las razones por las que se recomienda el uso de este GUI, es por la facilidad de instalar diversos plugins que facilitan el desarrollo. Una vez instalado el Visual Studio es muy recomendable instalar los siguientes plugins:\n    </p>\n    <ul>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2\">Angular Snippets plugin por John Papa</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify\">Beautify por HookyQR</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig\">EditorConfig for VS Code</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint\">ESLint por Dirk Baeumer</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint\">Sass Lint por glen-84</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=eg2.tslint\">TSLint por egamma</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter\">TypeScript Toolbox por DSKWRK</a></li>\n    </ul>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Android Studio</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tAndroid Studio no es una herramienta neceesaria para el proyecto, pero puede llegar a ser útil para debuggar la aplicación de Android generada por Cordova. Aunque en caso de no querer instalar Android Studio, habrá que instalar Android SDK, que si que es necesario.\n    </p>\n    <p>\n    \tEl instalador se encuentra en su <a href=\"https://developer.android.com/studio/#downloads\" target=\"_blank\">página oficial</a>.\n    </p>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/pages/install/linuxinstall/linuxinstall.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/install/linuxinstall/linuxinstall.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhbGwvbGludXhpbnN0YWxsL2xpbnV4aW5zdGFsbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/install/linuxinstall/linuxinstall.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/install/linuxinstall/linuxinstall.component.ts ***!
  \**********************************************************************/
/*! exports provided: LinuxinstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinuxinstallComponent", function() { return LinuxinstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinuxinstallComponent = /** @class */ (function () {
    function LinuxinstallComponent() {
    }
    LinuxinstallComponent.prototype.ngOnInit = function () {
    };
    LinuxinstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-linuxinstall',
            template: __webpack_require__(/*! ./linuxinstall.component.html */ "./src/app/pages/install/linuxinstall/linuxinstall.component.html"),
            styles: [__webpack_require__(/*! ./linuxinstall.component.scss */ "./src/app/pages/install/linuxinstall/linuxinstall.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinuxinstallComponent);
    return LinuxinstallComponent;
}());



/***/ }),

/***/ "./src/app/pages/install/macosinstall/macosinstall.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/install/macosinstall/macosinstall.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\tInstalación del entorno de desarrollo en macOS\n</h2>\n<mat-accordion>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Homebrew Package Manager</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tHomebrew instala todo aquello <a href=\"https://formulae.brew.sh/formula/\" target=\"_blank\">que se necesita</a> y que Apple no instala de serie. Y será muy útil para instalar otros elementos necesarios para iniciar el desarrollo de este proyecto.\n    </p>\n    <p>\n    \tPara abrir la instalación de Homebrew, de aqui en adelante brew, hay que abrir el términal e introducir el siguientes comando:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n/usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"\n    \t</code>\n    </pre>\n    <p>\n    \tY luego ir siguiendo las instrucciones que aparecerán por pantalla. Si finalmente esta bien instalado un simple comando \"brew -v\" en el terminal devolverá la versión de brew instalada.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>NODE y NPM</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tLa versión de Node que se usa en el desarrollo es la 8.6.0, por lo que se recomienda descargar esta versión para evitar conflictos entre las versiones de los diferentes programas utilizados.\n    </p>\n    <p>\n    \tNo se recomienda utilizar el instalador de Nodejs para macOS, ya que, aunque se instala sin ningún tipo de error suele dar problemas de permisos de ficheros en la instalación, que se traduce en constantes fallos y problemas a la hora de utilizar comandos de node y de npm.\n    </p>\n    <p>\n    \tLo más facil y seguro para la instalación de Nodejs en macOS es utilizar Node Version Manager (NVM), que además permite instalar varias versiones de Node y cambiar entre ellas fácilmente. Para instalar NVM hay que abrir el términal e instroducir uno de los siguientes comandos curl o wget:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\ncurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash\nwget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash\n    \t</code>\n    </pre>\n    <p>\n    \twget no viene de serie con macOS, si se quiere usar para instalar nvm, antes hay que instalarlo usando brew con el siguiente comando:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n$ brew install wget\n    \t</code>\n    </pre>\n    <p>\n    \tUna vez instalado nvm, hay que cerrar el términal y volver a abrirlo. Para verificar que NVM se ha instalado correctamente instroducir el siguiente comando en el términal:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n$ nvm --version\n    \t</code>\n    </pre>\n    <p>\n    \tUna vez que NVM esta instalado y funcional, instalar la versión 8.6 de Node es tan sencillo como poner el siguiente comando en el terminal:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n$ nvm install 8.6.0\n    \t</code>\n    </pre>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Git</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tGit es una herramienta imprescindible para este proyecto. Para poder utilizar los comandos de Git en el terminal del sistema. La mejor forma de instalarlo es ir a <a href=\"https://git-scm.com/downloads\" target=\"_blank\">esta pagina web</a> y seguir sus instrucciones de instalación para Microsoft Windows. Lo ideal es instalar la versión más reciente disponible.\n    </p>\n    <p>\n    \tEn macOS si se tiene instalado XCode desde la mac App Store, ya se tiene instalado Git y no es necesario instalarlo. Pero si no se quiere instalar XCode, otra forma de instalarlo es mediante brew con el siguiente comando de terminal.\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n$ brew install git\n    \t</code>\n    </pre>\n    <p>\n    \tPara acabar la instalación de Git solo falta configurar el nombre y el email de Git con los siguientes comandos:\n    </p>\n    <pre>\n    \t<code class=\"language-markup\">\n$ git config --global user.name \"John Doe\"\n$ git config --global user.email \"johndoe@example.com\"\n    \t</code>\n    </pre>\n    <p>\n    \tRecordar usar vuestro nombre de usuario y vuestro correo en lugar de \"John Doe\" y \"johndoe@example.com\"\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Sourcetree</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tSourcetree es un cliente gráfico de Git, no es necesario para llevar a cabo un desarrollo en el proyecto, pero va muy bien para visionar los commits y las ramas que se han ido llevando a cabo en el repositorio de una forma más clara y sencilla.\n    </p>\n    <p>\n    \tEste programa se instala desde su <a href=\"https://www.sourcetreeapp.com\" target=\"_blank\">página oficial</a>.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Visual Studio Code</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tPara escribir código se puede utilizar cualquier GUI, existen muchos, como por ejemplo WebStorm de JetBrains, Sublime Text, etc. pero se recomienda el uso de Visual Studio Code.\n    </p>\n    <p>\n    \tEste programa se instala desde su <a href=\"https://code.visualstudio.com/#alt-downloads\" target=\"_blank\">página oficial</a> seleccionando el instalador de macOS.\n    </p>\n    <p>\n    \tUna de las razones por las que se recomienda el uso de este GUI, es por la facilidad de instalar diversos plugins que facilitan el desarrollo. Una vez instalado el Visual Studio es muy recomendable instalar los siguientes plugins:\n    </p>\n    <ul>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2\">Angular Snippets plugin por John Papa</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify\">Beautify por HookyQR</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig\">EditorConfig for VS Code</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint\">ESLint por Dirk Baeumer</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint\">Sass Lint por glen-84</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=eg2.tslint\">TSLint por egamma</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter\">TypeScript Toolbox por DSKWRK</a></li>\n    </ul>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Android Studio</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tAndroid Studio no es una herramienta neceesaria para el proyecto, pero puede llegar a ser útil para debuggar la aplicación de Android generada por Cordova. Aunque en caso de no querer instalar Android Studio, habrá que instalar Android SDK, que si que es necesario.\n    </p>\n    <p>\n    \tEl instalador se encuentra en su <a href=\"https://developer.android.com/studio/#downloads\" target=\"_blank\">página oficial</a>.\n    </p>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/pages/install/macosinstall/macosinstall.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/install/macosinstall/macosinstall.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhbGwvbWFjb3NpbnN0YWxsL21hY29zaW5zdGFsbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/install/macosinstall/macosinstall.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/install/macosinstall/macosinstall.component.ts ***!
  \**********************************************************************/
/*! exports provided: MacosinstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacosinstallComponent", function() { return MacosinstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MacosinstallComponent = /** @class */ (function () {
    function MacosinstallComponent() {
    }
    MacosinstallComponent.prototype.ngOnInit = function () {
    };
    MacosinstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-macosinstall',
            template: __webpack_require__(/*! ./macosinstall.component.html */ "./src/app/pages/install/macosinstall/macosinstall.component.html"),
            styles: [__webpack_require__(/*! ./macosinstall.component.scss */ "./src/app/pages/install/macosinstall/macosinstall.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MacosinstallComponent);
    return MacosinstallComponent;
}());



/***/ }),

/***/ "./src/app/pages/install/windowsinstall/windowsinstall.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/install/windowsinstall/windowsinstall.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\tInstalación del entorno de desarrollo en Microsoft Windows\n</h2>\n<mat-accordion>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>NODE y NPM</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tLa versión de Node que se usa en el desarrollo es la 8.6.0, por lo que se recomienda descargar esta versión para evitar conflictos entre las versiones de los diferentes programas utilizados.\n    </p>\n    <p>\n    \tPara ello, hay que ir a la pagina web de <a href=\"https://nodejs.org/dist/v8.6.0/\" target=\"_blank\">Nodejs 8.6</a> y seleccionar el instalador correspondiente al tipo de sistema operativo, en este caso Microsoft Windows.\n    \t<img src=\"../../../assets/img/install/img1.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Git</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tGit es una herramienta imprescindible para este proyecto. Para poder utilizar los comandos de Git en el terminal del sistema. La mejor forma de instalarlo es ir a <a href=\"https://git-scm.com/downloads\" target=\"_blank\">esta pagina web</a> y seguir sus instrucciones de instalación para Microsoft Windows. Lo ideal es instalar la versión más reciente disponible.\n    </p>\n    <p>\n    \tpara comprobar que Git se ha instalado correctamente lo mejor es probarlo con el comando \"<i>git --version</i>\", si Git está instalado y funcionando se verá una linea con la versión de Git instalada.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Sourcetree</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tSourcetree es un cliente gráfico de Git, no es necesario para llevar a cabo un desarrollo en el proyecto, pero va muy bien para visionar los commits y las ramas que se han ido llevando a cabo en el repositorio de una forma más clara y sencilla.\n    </p>\n    <p>\n    \tEste programa se instala desde su <a href=\"https://www.sourcetreeapp.com\" target=\"_blank\">página oficial</a>.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Visual Studio Code</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tPara escribir código se puede utilizar cualquier GUI, existen muchos, como por ejemplo WebStorm de JetBrains, Sublime Text, etc. pero se recomienda el uso de Visual Studio Code.\n    </p>\n    <p>\n    \tEste programa se instala desde su <a href=\"https://code.visualstudio.com/#alt-downloads\" target=\"_blank\">página oficial</a> seleccionando el instalador de Microsoft Windows.\n    </p>\n    <p>\n    \tUna de las razones por las que se recomienda el uso de este GUI, es por la facilidad de instalar diversos plugins que facilitan el desarrollo. Una vez instalado el Visual Studio es muy recomendable instalar los siguientes plugins:\n    </p>\n    <ul>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2\">Angular Snippets plugin por John Papa</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify\">Beautify por HookyQR</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig\">EditorConfig for VS Code</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint\">ESLint por Dirk Baeumer</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint\">Sass Lint por glen-84</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=eg2.tslint\">TSLint por egamma</a></li>\n    \t<li><a href=\"https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter\">TypeScript Toolbox por DSKWRK</a></li>\n    </ul>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Android Studio</h3>\n    </mat-expansion-panel-header>\n    <p>\n    \tAndroid Studio no es una herramienta neceesaria para el proyecto, pero puede llegar a ser útil para debuggar la aplicación de Android generada por Cordova. Aunque en caso de no querer instalar Android Studio, habrá que instalar Android SDK, que si que es necesario.\n    </p>\n    <p>\n    \tEl instalador se encuentra en su <a href=\"https://developer.android.com/studio/#downloads\" target=\"_blank\">página oficial</a>.\n    </p>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <h3>Windows Build Tools</h3>\n    </mat-expansion-panel-header>\n    <p>\n      El windows build tools instalará algunos componentes necesarios para el proyecto. Para instalarlo, después de haber realizado la instalación de Nodejs hay que introducir el siguiente comando en el terminal:\n    </p>\n    <pre>\n      <code class=\"language-markup\">\nnpm install --global --production windows-build-tools\n      </code>\n    </pre>\n  </mat-expansion-panel>\n\n</mat-accordion>"

/***/ }),

/***/ "./src/app/pages/install/windowsinstall/windowsinstall.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/install/windowsinstall/windowsinstall.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhbGwvd2luZG93c2luc3RhbGwvd2luZG93c2luc3RhbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/install/windowsinstall/windowsinstall.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/install/windowsinstall/windowsinstall.component.ts ***!
  \**************************************************************************/
/*! exports provided: WindowsinstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsinstallComponent", function() { return WindowsinstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WindowsinstallComponent = /** @class */ (function () {
    function WindowsinstallComponent() {
    }
    WindowsinstallComponent.prototype.ngOnInit = function () {
    };
    WindowsinstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-windowsinstall',
            template: __webpack_require__(/*! ./windowsinstall.component.html */ "./src/app/pages/install/windowsinstall/windowsinstall.component.html"),
            styles: [__webpack_require__(/*! ./windowsinstall.component.scss */ "./src/app/pages/install/windowsinstall/windowsinstall.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WindowsinstallComponent);
    return WindowsinstallComponent;
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

module.exports = ".error-page-wrap {\n  width: 310px;\n  height: 310px;\n  margin: 155px auto; }\n\n.error-page-wrap:before {\n  box-shadow: 0 0 200px 150px #fff;\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  position: relative;\n  z-index: -1;\n  content: '';\n  display: block; }\n\n.error-page {\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  top: -310px;\n  position: relative;\n  text-align: center;\n  background: #3f51b5;\n  background: linear-gradient(to bottom, #4d99b5 0%, #3f51b5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$firstColor', endColorstr='$secondColor',GradientType=0 ); }\n\n.error-page:before {\n  width: 63px;\n  height: 63px;\n  border-radius: 50%;\n  box-shadow: 3px 25px 0 5px #4d99b5;\n  content: '';\n  z-index: -1;\n  display: block;\n  position: relative;\n  top: -19px;\n  left: 44px; }\n\n.error-page:after {\n  width: 310px;\n  height: 17px;\n  margin: 0 auto;\n  top: 25px;\n  content: '';\n  z-index: -1;\n  display: block;\n  position: relative;\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, rgba(35, 26, 26, 0) 59%, rgba(60, 44, 44, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6000000', endColorstr='#003c2c2c',GradientType=1 ); }\n\n.error-page h1 {\n  color: rgba(255, 255, 255, 0.94);\n  font-size: 100px;\n  margin: 10px auto 0 auto;\n  text-shadow: 0px 0 7px rgba(0, 0, 0, 0.5); }\n\n.error-page h1:before {\n  width: 260px;\n  height: 1px;\n  position: relative;\n  margin: 0 auto;\n  top: 120px;\n  content: '';\n  display: block;\n  background: radial-gradient(ellipse at center, rgba(111, 25, 25, 0.65) 0%, rgba(75, 38, 38, 0) 70%, rgba(60, 44, 44, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a66f1919', endColorstr='#003c2c2c',GradientType=1 ); }\n\n.error-page h1:after {\n  width: 260px;\n  height: 1px;\n  content: '';\n  display: block;\n  opacity: 0.2;\n  margin: 0 auto;\n  top: 50px;\n  position: relative;\n  /*background: -moz-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(247, 173, 148, 0.65)), color-stop(99%, rgba(255, 255, 255, 0.01)), color-stop(100%, rgba(255, 255, 255, 0)));\n      background: -webkit-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: -o-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: -ms-radial-gradient(center, ellipse cover, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n      background: radial-gradient(ellipse at center, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);*/\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6f7ad94', endColorstr='#00ffffff',GradientType=1 ); }\n\n.error-page h2 {\n  margin: 14px 0 30px 0;\n  font-size: 17px; }\n\n.error-page h2:before {\n  width: 130px;\n  height: 1px;\n  position: relative;\n  margin: 0 auto;\n  top: 31px;\n  content: '';\n  display: block;\n  background: radial-gradient(ellipse at center, rgba(111, 25, 25, 0.65) 0%, rgba(75, 38, 38, 0) 70%, rgba(60, 44, 44, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a66f1919', endColorstr='#003c2c2c',GradientType=1 ); }\n\n.error-page h2:after {\n  width: 130px;\n  height: 1px;\n  content: '';\n  display: block;\n  opacity: 0.2;\n  margin: 0 auto;\n  top: 11px;\n  position: relative;\n  background: radial-gradient(ellipse at center, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6f7ad94', endColorstr='#00ffffff',GradientType=1 ); }\n\n.error-back {\n  text-decoration: none;\n  color: #430400;\n  font-size: 15px; }\n\n.error-back:hover {\n  color: #EB957D;\n  text-shadow: 0 0 3px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFDbEI7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUVsQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQU1uQixnRUFBZ0U7RUFDaEUsMkhBQTJILEVBQUE7O0FBQzNIO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVSxFQUFBOztBQUNaO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQU1sQix5SEFBeUg7RUFDekgsc0hBQXNILEVBQUE7O0FBQ3hIO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIseUNBQXlDLEVBQUE7O0FBQ3pDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQU1kLDZIQUE2SDtFQUM3SCxzSEFBc0gsRUFBQTs7QUFDeEg7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCOzs7OztnSkNXMEk7RURMMUksc0hBQXNILEVBQUE7O0FBQzFIO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFDZjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFNZCw2SEFBNkg7RUFDN0gsc0hBQXNILEVBQUE7O0FBQ3hIO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsU0FBUztFQUNULGtCQUFrQjtFQU1sQix3SUFBd0k7RUFDeEksc0hBQXNILEVBQUE7O0FBRTVIO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYztFQUNkLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItcGFnZS13cmFwIHtcbiAgd2lkdGg6IDMxMHB4O1xuICBoZWlnaHQ6IDMxMHB4O1xuICBtYXJnaW46IDE1NXB4IGF1dG87IH1cbiAgLmVycm9yLXBhZ2Utd3JhcDpiZWZvcmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMDBweCAxNTBweCAjZmZmO1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogLTE7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLmVycm9yLXBhZ2Uge1xuICB3aWR0aDogMzEwcHg7XG4gIGhlaWdodDogMzEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiAtMzEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM0ZDk5YjUgMCUsICMzZjUxYjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICM0ZDk5YjUpLCBjb2xvci1zdG9wKDEwMCUsICMzZjUxYjUpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNGQ5OWI1IDAlLCAjM2Y1MWI1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNGQ5OWI1IDAlLCAjM2Y1MWI1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzRkOTliNSAwJSwgIzNmNTFiNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRkOTliNSAwJSwgIzNmNTFiNSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJGZpcnN0Q29sb3InLCBlbmRDb2xvcnN0cj0nJHNlY29uZENvbG9yJyxHcmFkaWVudFR5cGU9MCApOyB9XG4gIC5lcnJvci1wYWdlOmJlZm9yZSB7XG4gICAgd2lkdGg6IDYzcHg7XG4gICAgaGVpZ2h0OiA2M3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAzcHggMjVweCAwIDVweCAjNGQ5OWI1O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xOXB4O1xuICAgIGxlZnQ6IDQ0cHg7IH1cbiAgLmVycm9yLXBhZ2U6YWZ0ZXIge1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiAyNXB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMzUsIDI2LCAyNiwgMCkgNTklLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkpLCBjb2xvci1zdG9wKDU5JSwgcmdiYSgzNSwgMjYsIDI2LCAwKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSkpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgzNSwgMjYsIDI2LCAwKSA1OSUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgzNSwgMjYsIDI2LCAwKSA1OSUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMzUsIDI2LCAyNiwgMCkgNTklLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgzNSwgMjYsIDI2LCAwKSA1OSUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2E2MDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDNjMmMyYycsR3JhZGllbnRUeXBlPTEgKTsgfVxuICAuZXJyb3ItcGFnZSBoMSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NCk7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cbiAgICAuZXJyb3ItcGFnZSBoMTpiZWZvcmUge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHRvcDogMTIwcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSksIGNvbG9yLXN0b3AoNzAlLCByZ2JhKDc1LCAzOCwgMzgsIDApKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDYwLCA0NCwgNDQsIDApKSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNhNjZmMTkxOScsIGVuZENvbG9yc3RyPScjMDAzYzJjMmMnLEdyYWRpZW50VHlwZT0xICk7IH1cbiAgICAuZXJyb3ItcGFnZSBoMTphZnRlciB7XG4gICAgICB3aWR0aDogMjYwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHRvcDogNTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC8qYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkpLCBjb2xvci1zdG9wKDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTsqL1xuICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2E2ZjdhZDk0JywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgfVxuICAuZXJyb3ItcGFnZSBoMiB7XG4gICAgbWFyZ2luOiAxNHB4IDAgMzBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDsgfVxuICAgIC5lcnJvci1wYWdlIGgyOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgdG9wOiAzMXB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkpLCBjb2xvci1zdG9wKDcwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSkpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjYTY2ZjE5MTknLCBlbmRDb2xvcnN0cj0nIzAwM2MyYzJjJyxHcmFkaWVudFR5cGU9MSApOyB9XG4gICAgLmVycm9yLXBhZ2UgaDI6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0b3A6IDExcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSksIGNvbG9yLXN0b3AoOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA5OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA5OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2E2ZjdhZDk0JywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgfVxuXG4uZXJyb3ItYmFjayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0MzA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDsgXG59XG4uZXJyb3ItYmFjazpob3ZlciB7XG4gICAgY29sb3I6ICNFQjk1N0Q7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG59XG5cbiIsIi5lcnJvci1wYWdlLXdyYXAge1xuICB3aWR0aDogMzEwcHg7XG4gIGhlaWdodDogMzEwcHg7XG4gIG1hcmdpbjogMTU1cHggYXV0bzsgfVxuXG4uZXJyb3ItcGFnZS13cmFwOmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMDBweCAxNTBweCAjZmZmO1xuICB3aWR0aDogMzEwcHg7XG4gIGhlaWdodDogMzEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5lcnJvci1wYWdlIHtcbiAgd2lkdGg6IDMxMHB4O1xuICBoZWlnaHQ6IDMxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogLTMxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNGQ5OWI1IDAlLCAjM2Y1MWI1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjNGQ5OWI1KSwgY29sb3Itc3RvcCgxMDAlLCAjM2Y1MWI1KSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzRkOTliNSAwJSwgIzNmNTFiNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzRkOTliNSAwJSwgIzNmNTFiNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICM0ZDk5YjUgMCUsICMzZjUxYjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0ZDk5YjUgMCUsICMzZjUxYjUgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyRmaXJzdENvbG9yJywgZW5kQ29sb3JzdHI9JyRzZWNvbmRDb2xvcicsR3JhZGllbnRUeXBlPTAgKTsgfVxuXG4uZXJyb3ItcGFnZTpiZWZvcmUge1xuICB3aWR0aDogNjNweDtcbiAgaGVpZ2h0OiA2M3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDNweCAyNXB4IDAgNXB4ICM0ZDk5YjU7XG4gIGNvbnRlbnQ6ICcnO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTlweDtcbiAgbGVmdDogNDRweDsgfVxuXG4uZXJyb3ItcGFnZTphZnRlciB7XG4gIHdpZHRoOiAzMTBweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAyNXB4O1xuICBjb250ZW50OiAnJztcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgzNSwgMjYsIDI2LCAwKSA1OSUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkpLCBjb2xvci1zdG9wKDU5JSwgcmdiYSgzNSwgMjYsIDI2LCAwKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMzUsIDI2LCAyNiwgMCkgNTklLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDAlLCByZ2JhKDM1LCAyNiwgMjYsIDApIDU5JSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMzUsIDI2LCAyNiwgMCkgNTklLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMzUsIDI2LCAyNiwgMCkgNTklLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjYTYwMDAwMDAnLCBlbmRDb2xvcnN0cj0nIzAwM2MyYzJjJyxHcmFkaWVudFR5cGU9MSApOyB9XG5cbi5lcnJvci1wYWdlIGgxIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NCk7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcbiAgdGV4dC1zaGFkb3c6IDBweCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmVycm9yLXBhZ2UgaDE6YmVmb3JlIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAxMjBweDtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkpLCBjb2xvci1zdG9wKDcwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAyNSwgMjUsIDAuNjUpIDAlLCByZ2JhKDc1LCAzOCwgMzgsIDApIDcwJSwgcmdiYSg2MCwgNDQsIDQ0LCAwKSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2E2NmYxOTE5JywgZW5kQ29sb3JzdHI9JyMwMDNjMmMyYycsR3JhZGllbnRUeXBlPTEgKTsgfVxuXG4uZXJyb3ItcGFnZSBoMTphZnRlciB7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC4yO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkpLCBjb2xvci1zdG9wKDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTsqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjYTZmN2FkOTQnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyB9XG5cbi5lcnJvci1wYWdlIGgyIHtcbiAgbWFyZ2luOiAxNHB4IDAgMzBweCAwO1xuICBmb250LXNpemU6IDE3cHg7IH1cblxuLmVycm9yLXBhZ2UgaDI6YmVmb3JlIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAzMXB4O1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSksIGNvbG9yLXN0b3AoNzAlLCByZ2JhKDc1LCAzOCwgMzgsIDApKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDYwLCA0NCwgNDQsIDApKSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDExMSwgMjUsIDI1LCAwLjY1KSAwJSwgcmdiYSg3NSwgMzgsIDM4LCAwKSA3MCUsIHJnYmEoNjAsIDQ0LCA0NCwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDI1LCAyNSwgMC42NSkgMCUsIHJnYmEoNzUsIDM4LCAzOCwgMCkgNzAlLCByZ2JhKDYwLCA0NCwgNDQsIDApIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjYTY2ZjE5MTknLCBlbmRDb2xvcnN0cj0nIzAwM2MyYzJjJyxHcmFkaWVudFR5cGU9MSApOyB9XG5cbi5lcnJvci1wYWdlIGgyOmFmdGVyIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0NywgMTczLCAxNDgsIDAuNjUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDk5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSksIGNvbG9yLXN0b3AoOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA5OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ3LCAxNzMsIDE0OCwgMC42NSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgOTklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA5OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgyNDcsIDE3MywgMTQ4LCAwLjY1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA5OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNhNmY3YWQ5NCcsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IH1cblxuLmVycm9yLWJhY2sge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNDMwNDAwO1xuICBmb250LXNpemU6IDE1cHg7IH1cblxuLmVycm9yLWJhY2s6aG92ZXIge1xuICBjb2xvcjogI0VCOTU3RDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7IH1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/pages/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/pages/notfound/notfound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon> Volver</button>\n<section>\n\t<h2>Añadir página a web de onboarding</h2>\n\t<p>\n\t\tPara añadir una página a la web de onboarding, primero habrá que crear el nuevo componente que alojará el texto, las imagenes y el resto de componentes de esa página. En este ejemplo se creará una nueva página de privacidad. Para crear un nuevo componente hay que usar el temrinal. Primero hay que ir a la carpeta del proyecto, y luego hay que usar el siguiente comando:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">\nng generate component shared/privacy\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEste comando, ha generado la carpeta privacy dentro de <i>app/shared</i>, y a su vez dentro de la carpeta <i>privacy</i> se generan 4 archivos:\n\t</p>\n\t\t<ul>\n\t\t\t<li><b>privacy.component.html:</b> aquí es donde se escribe el código html con el contenido del componente (en este caso página).</li>\n\t\t\t<li><b>privacy.component.scss:</b> aquí es donde se escribe el codigo css en formato sass especifico para este componente.</li>\n\t\t\t<li><b>privacy.component.spec.ts:</b> en este archivo se escriben los test del código.</li>\n\t\t\t<li><b>privacy.component.ts:</b> en este archivo se escriben las importaciones necesarias para el componente, el código que se iniciará al cargar la página, las variables que estarán disponibles en la página, etc.</li>\n\t\t</ul>\n\t<p>\n\t\tGrácias a este comando, también se ha agregado el componente en app.module.ts, tanto la importación como la declaración.\n\t</p>\n\t<p>\n\t\tLo siguiente es generar la ruta para esta nueva página, para ello hay que ir al archivo 'app.routing.ts', importar el componente que se ha generado y añadirle la ruta.\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{\"import { PrivacyComponent } from './shared/privacy/privacy.component';\nimport { NotfoundComponent } from './pages/notfound/notfound.component';\n\nconst routes: Routes = [\n  { path: 'terms/privacy', \tcomponent: PrivacyComponent },\n  { path: '404', \t\t\tcomponent: NotfoundComponent },\n  { path: '**', \t\t\tredirectTo: '/404' }\n];\"}}</code>\n\t</pre>\n\t<p>\n\t\tEn este ejemplo se aprecia que se añade PrivacyComponent junto a la ruta de NotfoundComponent y una ruta por defecto que lleva cualquier ruta que no este declarada al componente de notfound. De esta manera queda claro como agregar rutas nuevas a las ya existentes.\n\t</p>\n\t<p>\n\t\tUna vez que ya se tiene el componente y la ruta ya se pueden crear enlaces hacia esa ruta, o incluso escribirla directamente en el navegador. Ahora ya solo queda escribir el contenido en el archivo <i>privacy.component.html</i>.\n\t</p>\n\n</section>\n<section>\n\t<h2>Añadir enlaces al menu para nuevas páginas</h2>\n\t<p>\n\t\tPara modificar los enlaces del menu sidenav hay que dirigirse al archivo <i>src/app/shared/navigation/links/links.component.html</i>, en ese archivo se encuentra un <i>mat-nav-list</i> que contiene los enlaces del menú.\n\t</p>\n\t<p>\n\t\tExisten dos niveles de enlaces, el que se ve directamente en el menú sidenav (primer nivel), y los que se ven cuando se abren estos (segundo nivel). Todos los enlaces deben llevar <i>mat-list-item</i> dentro del html tag <i>a</i>.\n\t</p>\n\t<p>\n\t\tA todos los enlaces que llevan a una página nueva hay que ponerles la función <i>setTitle( 'Título de la nueva página' )</i> cuando se dispare el evento click. Esto se hace para que el título de la pestaña cambie y cada página tenga un título. <i>setTitle</i> es una función de un servicio de angular creada para cambiar el título de las paginas. Que cada página tenga su propio título mejora el seo (Search Engine Optimization) de la web y por lo tanto su posición a la hora de aparecer en búscadores como Google.\n\t</p>\n\t<p>\n\t\tA los enlaces de primer nivel, si contienen enlaces de segundo nivel, hay que ponerles la funcion <i>openClose( 'idGrupo', 'idGrupoCaret')</i>, y dentro del contenido del html tag <i>a</i> hay que poner un icono <i>caret</i> de material con un id único que se va a asignar a cada grupo de enlaces y que es el parámetro <i>'idGrupoCaret'</i> de la función. El otro parámetro de la función es el nombre de una variable booleana que se va a utilizar para mostrar o ocultar los enlaces de segundo nivel de ese grupo. La función devuelve el valor <i>true</i> o <i>false</i> que se asigna a esa misma variable y gira el icono con el id proporcionado en el segundo parámetro.\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-markup\">\n&lt;a mat-list-item (click)=\"usersShow = openClose(usersShow, 'userCaret')\"&gt;\n    &lt;mat-icon mat-list-icon&gt;people&lt;/mat-icon&gt;\n    &lt;span&gt;Usuarios&lt;/span&gt;  // titulo enlace\n    &lt;span class=\"fill-space\"&gt;&lt;/span&gt;  // span vacio para alinear el caret a la derecha\n    &lt;mat-icon id=\"userCaret\" class=\"material-icons\"&gt;expand_more&lt;/mat-icon&gt;\n&lt;/a&gt;\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tLos enlaces de segundo nivel deben tener un <i>*ngIf=\"idGrupo\"</i>, al ser una variable booleana los enlaces se mostrarán u ocultarán según su valor. A estos enlaces de segundo nivel tambien hay que añadirles la función <i>openClose()</i> en el evento click para que se cierre el grupo una vez seleccionado uno de los enlaces. \n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-markup\">\n&lt;a *ngIf=\"usersShow\" class=\"second-level\" mat-list-item routerLink=\"/user/students\" (click)=\"usersShow = openClose(usersShow, 'userCaret'); setTitle( 'Classpip onboarding aprende a usar la aplicacion como estudiante' );\"&gt;\n    &lt;mat-icon mat-list-icon fontSet=\"fa\" fontIcon=\"fa-user-graduate\"&gt;&lt;/mat-icon&gt;  // ver sección iconos\n    &lt;span&gt;Estudiantes&lt;/span&gt;  // titulo enlace\n&lt;/a&gt;\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEn el ejemplo previo, se observa como esta realizado el enlace de primer nivel 'Usuarios', y un enlace de segundo nivel que pertenece a este llamado 'Estudiantes'.\n\t</p>\n</section>\n<section>\n\t<h2>Iconos</h2>\n\t<p>\n\t\tEn este proyecto se pueden usar los <a href=\"https://material.io/tools/icons/?style=baseline\">material icons</a> de la forma usual, que es <i>&lt;mat-icon&gt;nombreIcono&lt;/mat-icon&gt;</i>, usando como 'nombreIcono' cualquiera de los de la lista del enlace.\n\t</p>\n\t<p>\n\t\tPero también se han añadido los iconos gratuitos de <a href=\"https://fontawesome.com/icons?d=gallery\">font Awesome</a>, que ofrecen una mayor variedad de iconos inexistentes en los material icons, como por ejemplo el del logo de Github. Para poder utilizar los iconos de font awesome dentro de un tag mat-icon, como los de material, se ha instalado un modulo de Node y se ha creado un servicio.\n\t</p>\n\t<p>\n\t\tAhora para añadir un icono de font awesome solo hay que añadir al tag mat-icon un <i>fontSet</i> y un <i>fontIcon</i>. El fontSet depende del tipo de icono que se vaya a utilizar, los normales usan el fontSet <i>fa</i>, los de marcas usan el <i>fab</i>, los del grupo solid usan el <i>fas</i>,etc. En el fontIcon hay que poner el nombre del icono precedido de <i>fa-</i>. Y finalmente, al contrario que con los iconos de material, no hay que poner ningún texto dentro del tag mat-icon.\n\t</p>\n\t<p>\n\t\tSi por ejemplo se quiere usar el icono <i>addess-card</i> del grupo <i>Solid</i> hay que hacerlo de la siguiente manera:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-markup\">\n&lt;mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-address-card\"&gt;&lt;/mat-icon&gt;\n\t\t</code>\n\t</pre>\n</section>\n<section>\n\t<h2>Crear un nuevo servicio</h2>\n\t<p>\n\t\tComo ejemplo se va a crear el servicio que da estilo al formato de código que hay en las páginas de desarrollo de la web de onboarding. Para ello se va a usar el modulo de prismjs.\n\n\t\tEl primer paso es, desde terminal nos situamos en la carpeta del proyecto, y para instalar el módulo de pismjs se utiliza el siguiente comando:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">\n$ npm install prismjs --save\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tAhora toca crear el nuevo servicio. Para generarlo, hay que escribir el siguiente comando del cli de angular:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">\n$ ng generate service shared/services/highlight\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEl servicio que se ha generado, podemos encontrarlo en la ruta <i>app/shared/services/highlight.service.ts</i>, y por el momento sólo tiene código genérico. El archivo debe ser algo como esto:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{\"import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class HighlightService {\n\n  constructor() { }\n}\"}}</code>\n\t</pre>\n\t<p>\n\t\tSe procede a escribir el código del servicio. En este caso, se escribe código para poder utilizar prismjs y que de formato de código, con colores para facilitar la lectura a los fragmentos de código que hay en la web de onboarding. Una vez escrito el código, el archivo de <i>highlight.services.ts</i> quedará así:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{\"import { , PLATFORM_ID, Inject } from '@angular/core';\n \nimport 'clipboard';\n\nimport 'prismjs';\nimport 'prismjs/plugins/toolbar/prism-toolbar';\nimport 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';\nimport 'prismjs/components/prism-javascript';\nimport 'prismjs/components/prism-markup';\nimport 'prismjs/components/prism-typescript';\nimport 'prismjs/components/prism-sass';\nimport 'prismjs/components/prism-scss';\n\ndeclare var Prism: any;\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class HighlightService {\n\n  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }\n\n  highlightAll() {\n    if (isPlatformBrowser(this.platformId)) {\n      Prism.highlightAll();\n    }\n  }\n}\"}}</code>\n\t</pre>\n\t<p>\n\t\tUna vez que se ha programado el servicio que se necesita, hay que utilizarlo en el componente donde se quiere insertar código formatado. Como ejemplo, se va a insertar el servicio de formatado de código en el componente de <i>onboarding</i>. En este caso concreto, además se va a utilizar <i>AfterViewChecked</i> que es un evento que se lanza cuando la vista ya se ha cargado completamente, y es cuando se iniciará el método de highlightAll(). También se ha añadido la variable booleana <i>highlighted</i> que se utiliza para evitar que el método <i>highlighted</i> se llame más de una vez. <br>\n\t\tPor lo tanto, tras importar <i>AfterViewChecked</i> de Angular/core y el servicio <i>HighlightService</i>, hay que añadir <i>private highlightService: HighlightService</i> al constructor, y por último la función que se lanza en <i>ngAfterViewChecked</i>. Una vez hecho esto el código debe ser así:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{\"import { Component, OnInit, AfterViewChecked } from '@angular/core';\n\nimport { HighlightService } from '../../shared/services/highlight.service';\n\n@Component({\n  selector: 'app-onboarding',\n  templateUrl: './onboarding.component.html',\n  styleUrls: ['./onboarding.component.scss']\n})\nexport class OnboardingComponent implements OnInit, AfterViewChecked {\n\n  onboarding: OnboardingInterface;\n  highlighted: boolean = false;\n\n  constructor(private highlightService: HighlightService) { }\n\n  /**\n   * Highlight blog post when it's ready\n   */\n  ngAfterViewChecked() {\n    if (this.onboarding && !this.highlighted) {\n      this.highlightService.highlightAll();\n      this.highlighted = true;\n    }\n  }\n\n  ngOnInit() {\n  }\n\n}\"}}</code>\n\t</pre>\n\t<p>\n\t\tY en este caso, para acabar aún queda un último paso. Hay que importar las hojas de estilos de prismjs en <i>src/sass/styles.scss</i>. Que en el caso de este proyecto son las que pertenecen al tema <i>coi</i>. Y, de ser necesario después se puede añadir alguna personalización al código para que se adapte al estilo de la web. La importación y personalización de estilos es la siguiente:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-scss\">{{'@import \"~prismjs/plugins/toolbar/prism-toolbar.css\";\n@import \"~prismjs/themes/prism-coy\";\n\npre[class*=\"language-\"] {\n  background-color: transparent;\n}\n\npre[class*=\"language-\"]:before, pre[class*=\"language-\"]:after {\n  display: none;\n}'}}</code>\n\t</pre>\n\t<p>\n\t\tEl servicio ya esta añadido y funcionando. Ya se ha explicado como crear un nuevo servicio y como usarlo en los componentes. Ahora, como apunte, hay que señalar que para usar el formatado de texto del servicio de highlight, tan solo hay que añadir la clase <i>class=\"language-'lenguaje-usado'\"</i> al tag <i>code</i>, por ejemplo para código en javascript hay que añadir <i>class=\"language-typescript\"</i> al tag code.\n\t</p>\n</section>\n<section>\n\t<h2>Añadir o modificar datos en página de Profesores</h2>\n\t<p>\n\t\tLas páginas del proyecto de onboarding estan hechas con contenido estático, a excepción de la página con el tutorial de uso para profesores que tiene un archivo con el contenido que se llama y se lista desde el componente correspondiente a la página de profesores. \n\t</p>\n\t<p>\n\t\tPara este contenido se ha creado un objeto dataCard en <i>app/class/dataCard.ts</i> que se utiliza en el archivo <i>app/data/teacher_videos.ts</i>, donde se ha escrito un array de objetos dataCard.\n\t</p>\n\t<p>\n\t\tLo último que queda es importar el objeto dataCard y el array de objetos dataCard en el componente <i>app/pages/teachers/teachers.component.ts</i> y igualar el array a una variable que se pueda usar en la plantilla y utilizar para listar su contenido.\n\t</p>\n\t<p>\n\t\tHay que mencionar, que para que se puedan listar enlaces a webs provenientes de objetos, como lo son los enlaces de youtube, hay que \"sanear\" el contenido ya que si no se hace este queda bloqueado por seguridad. Para ello hay que importar <i>DomSanitizer</i> de <i>angular/platform-browser</i> e introducirlo en el constructor. Ahora que ya se pueden utilizar los métodos de <i>sanitizer</i>, alla donde se vaya a imprimir el contenido url hay que poner lo siguiente: <i>[src]='sanitizer.bypassSecurityTrustResourceUrl(url)'</i>.\n\t</p>\n\t<p>\n\t\tEl código del componente de <i>teachers.component.ts</i> es el siguiente:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code  class=\"language-typescript\">{{\"import { Component, OnInit } from '@angular/core';\nimport { DomSanitizer } from '@angular/platform-browser';\nimport {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';\nimport { DataCard } from '../../class/dataCard';\nimport { CARDS } from '../../data/teacher_videos';\n\n\n@Component({\n  selector: 'app-teachers',\n  templateUrl: './teachers.component.html',\n  styleUrls: ['./teachers.component.scss']\n})\n\nexport class TeachersComponent implements OnInit {\n\n  cards = CARDS;\n\n  constructor(public sanitizer: DomSanitizer) {}\n\n  ngOnInit() {}\n\n  drop(event: CdkDragDrop&lt;DataCard[]&gt;) {\n    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);\n  }\n\n}\"}}</code>\n\t</pre>\n</section>\n<section>\n\t<h2>Insertar fragmentos de código</h2>\n\t<p>\n\t\tPara facilitar la lectura de código en los tutoriales de la web de onboarding se ha utilizado el módulo de Node <a href=\"https://prismjs.com/\">prismjs</a>, y como se ha visto en un punto anterior de este tutorial se ha creado un servicio para su uso.\n\t</p>\n\t<p>\n\t\tPara utilizar el formatado de código en un componente se hace de la siguiente manera:\n\t</p>\n\t<ul>\n\t\t<li>Se importa el servicio en el componente <i>\"import {{'{'}} HighlightService {{'}'}} from 'ruta-hasta/shared/services/highlight.service';\"</i></li>\n\t\t<li>Se añade <i>\"private highlightService: HighlightService\" al constructor de la clase.</i></li>\n\t\t<li>Se añade la variable <i>\"highlighted: boolean = false;\"</i></li>\n\t\t<li>Se añade <i>\"AfterViewChecked\"</i> después del <i>\"implements OnInit\"</i></li>\n\t\t<li>Se añade el método <i>\"ngAfterViewChecked()\"</i></li>\n\t</ul>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{\"ngAfterViewChecked() {\n\tif (this.onboarding && !this.highlighted) {\n\t  this.highlightService.highlightAll();\n\t  this.highlighted = true;\n\t}\n}\"}}</code>\n\t</pre>\n\t<p>\n\t\tEn este caso, se puede seguir de ejemplo el código que hay en el anterior apartado. Donde se implementa el servicio de highlightService en el componente de <i>teachers.component.ts</i>\n\t</p>\n\t<p>\n\t\tEn el caso de utilizar <i>tabs</i>, estos utilizan lazy loading, lo que significa que van cargando contenido cuando se abre el correspondiente tab, no antes. El servicio de hightlightService esta implementado de forma que solo carga una vez cuando carga la página. De esta manera, cuando acaba de cargar la página se da formato al código, pero al cambiar el <i>tab</i>, carga el nuevo contenido y no se lanza la función de formatado, por lo que se ve el texto sin formato. Para solucionar esto, hay que utilizar el evento <i>selectedTabChange</i> para lanzar la función <i>tabSelectionChanged($event)</i> en el tag mat-tab-group.\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">&lt;mat-tab-group (selectedTabChange)=\"tabSelectionChanged($event)\"&gt;</code>\n\t</pre>\n\t<p>\n\t\tLa función <i>tabSelectionChanged(event)</i> lo que hace es volver a lanzar el servicio de highlightService para el nuevo contenido. La función es la siguiente:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{\"tabSelectionChanged(event) {\n    this.highlightService.highlightAll();\n}\"}}</code>\n\t</pre>\n\t<p>\n\t\tUna vez que esta todo listo para formatar el código, solo falta añadirlo en la plantilla html del componente. Para ello se utilizan los tags <i>code</i> y <i>pre</i>.\n\t</p>\n\t<p>\n\t\tEn el tag <i>pre</i> se puede seleccionar si mostrar o no las lineas en el código. Para mostrar las lineas hay que añadir la clase <i>line-numbers</i> al tag <i>pre</i>, en el caso de ponerlas lineas del código se puede elegir en que número comenzar. Si no se pone nada, comienza por la linea numero 1, pero si se quiere comenzar por alguna linea en concreto hay que poner un <i>data-start</i> con el número de linea por el que se quiere comenzar. Si, por ejemplo, se quieren poner números y comenzar por la linea 17, el tag <i>pre</i> quedará de la siguiente manera <i>&lt;pre class=\"line-numbers\" data-start=\"17\"&gt;</i>.\n\t</p>\n\t<p>\n\t\tLo único que queda es indicar que tipo de código se va a mostrar para que le haga un formatado correcto. Para ello hay que añadir una clase al tag <i>code</i>, la clase es <i>language-'tipo-lenguaje'</i>, por lo que si se va a mostrar lenguaje typescript hay que añadir <i>class=\"language-typescript\"</i>.\n\t</p>\n\t<p>\n\t\tAhora mismo, los lenguajes que se pueden formatar son los importados en el archivo <i>highlight.services.ts</i>, y son:\n\t</p>\n\t<ul>\n\t\t<li>javascript</li>\n\t\t<li>markup (actualmente usado para mostrar html)</li>\n\t\t<li>typescript</li>\n\t\t<li>sass</li>\n\t\t<li>scss</li>\n\t</ul>\n\t<p>\n\t\tAunque se pueden añadir cualquiera de los lenguajes disponibles en la página de <a href=\"https://prismjs.com/\">prismjs</a>. Solo se han añadido esos lenguajes ya que, de momento, son los únicos utilizados en el proyecto.\n\t</p>\n\t<p>\n\t\t<b>Importante:</b> Angular compila el código que hay dentro de los pre-code, y nomalmente da error al introducir código y compilar. La forma de solucionarlo es la siguiente: \n\t</p>\n\t<ul>\n\t\t<li>Si aparece algún caracter <i>{{'{'}}</i> y <i>{{'}'}}</i> en el código hay que poner <i>{{'{'}}{{'{'}}'</i> al principio del código, y <i>'{{'}'}}{{'}'}}</i> al final.</li>\n\t\t<li>En ocasiones el código tiene comillas en varios sitios y la forma anterior no funciona. En estos casos hay que sustituir cada <i>{{'}'}}</i> por <i>{{'{'}}{{'{'}}'{{'{'}}'{{'}'}}{{'}'}}</i> y también hay que sustituir cada <i>{{'}'}}</i> por <i>{{'{'}}{{'{'}}'{{'}'}}'{{'}'}}{{'}'}}</i>.</li>\n\t\t<li>Si se quiere mostrar código html hay que sustituir los <i>&lt;</i> y los <i>&gt;</i> de los tags por <i>&amp;lt;</i> y por <i>&amp;gt;</i> de lo contrario angular da error y no carga la página.</li>\n\t</ul>\n</section>\n<section>\n\t<h2>Actualizar proyecto de onboarding</h2>\n\t<p>\n\t\tDesde angular 6 se ha introducido una forma de actualizar la aplicación y sus dependencias muy fácil y sencilla. Este proyecto se inició con Angular 6, y posteriormente se ha actualizado en diversas ocasiones hasta la versión 7 de Angular. Para actualizar basta con introducir el siguiente comando en el terminal:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">ng update</code>\n\t</pre>\n\t<p>\n\t\tIntroduciendo este comando, se obtiene un listado de las actualizaciones disponibles, si las hay, de la siguiente manera:\n\t\t<img src=\"../../../assets/img/onboarding/img1.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tEl paso siguiente es introducir los comando <i>ng update</i> que nos ofrece el mismo listado de actualizaciones uno a uno hasta haberlos introducido todos. El resultado es el que se ve en la siguiente imagen:<br>\n\t\t<img src=\"../../../assets/img/onboarding/img2.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tUna vez realizadas todas las actualizaciones, o si se ejecuta el comando <i>ng update</i> sin haber actualizaciones disponibles, el resultado de este comando es el siguiente:<br>\n\t\t<img src=\"../../../assets/img/onboarding/img3.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\t<b>Importante:</b> en ocasiones el resultado de la actualización es un mensaje de error que avisa de que se han encontrado depdendencias incompatibles.\n\t</p>\n\t<p>\n\t\tEn la siguiente imagen se puede apreciar como al intentar actualizar <i>@angular/cdk</i> de la versión 7.0.3 a la versión 7.0.4, aparece un mensaje de error informando de que <i>@angular/material</i> en su versión 7.0.3 requiere la versión 7.0.3 de @angular/cli. La solución a este problema es tan sencilla como realizar el comando de actualización primero a <i>@angular/material</i>, y luego a las demás dependencias, si es que no se han actualizado ya. <br>\n\t\t<img src=\"../../../assets/img/onboarding/img4.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Compilar aplicación de Angular</h2>\n\t<p>\n\t\t<b>Muy importante:</b> después de actualizar o de hacer cualquier cambio en la web, y antes de commitear, no hay que olvidarse de hacer un <i>ng build</i> para que los cambios generados se suban también a la web de producción.\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">ng build</code>\n\t</pre>\n</section>"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section p {\n  text-align: justify; }\n\nul li i {\n  background-color: lightcyan; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQW1CLEVBQUE7O0FBRXBCO0VBQ0MsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHAge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxudWwgbGkgaSB7XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.component.ts ***!
  \**********************************************************/
/*! exports provided: OnboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function() { return OnboardingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");




var OnboardingComponent = /** @class */ (function () {
    function OnboardingComponent(highlightService, location) {
        this.highlightService = highlightService;
        this.location = location;
        this.highlighted = false;
    }
    OnboardingComponent.prototype.ngOnInit = function () {
    };
    /**
     * Highlight blog post when it's ready
     */
    OnboardingComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    };
    OnboardingComponent.prototype.goBack = function () {
        this.location.back();
    };
    OnboardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding',
            template: __webpack_require__(/*! ./onboarding.component.html */ "./src/app/pages/onboarding/onboarding.component.html"),
            styles: [__webpack_require__(/*! ./onboarding.component.scss */ "./src/app/pages/onboarding/onboarding.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], OnboardingComponent);
    return OnboardingComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <h2 mat-subheader>Proyectos realizados</h2>\n  <a href=\"https://upcommons.upc.edu/handle/2117/101237\" target=\"_blank\">\n  <mat-list-item >\n    <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-external-link-alt\"></mat-icon>\n    <h4 mat-line>Arquitectura software</h4>\n    <p mat-line class=\"project-author\"> Ferran Vila </p>\n  </mat-list-item>\n  </a>\n\n  <a href=\"https://upcommons.upc.edu/handle/2117/108143\" target=\"_blank\">\n  <mat-list-item>\n    <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-external-link-alt\"></mat-icon>\n    <h4 mat-line>Puntos e Insignias</h4>\n    <p mat-line class=\"project-author\"> Guillermo Riverola </p>\n    <p mat-line class=\"project-description\">PBL en una arquitectura de gamificación para un entorno docente</p>\n  </mat-list-item>\n  </a>\n\n  <a href=\"https://upcommons.upc.edu/handle/2117/111094\" target=\"_blank\">\n  <mat-list-item>\n    <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-external-link-alt\"></mat-icon>\n    <h4 mat-line>Colecciones</h4>\n    <p mat-line class=\"project-author\"> Manuel Mendez </p>\n    <p mat-line class=\"project-description\">Gamificació d’entorns docents</p>\n  </mat-list-item>\n  </a>\n\n  <a href=\"https://upcommons.upc.edu/handle/2117/114992\" target=\"_blank\">\n  <mat-list-item>\n    <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-external-link-alt\"></mat-icon>\n    <h4 mat-line>Preguntas</h4>\n    <p mat-line class=\"project-author\"> Daniel Viles </p>\n    <p mat-line class=\"project-description\">Plataforma de gamificació docent amb smartphones</p>\n  </mat-list-item>\n  </a>\n\n  <a href=\"https://upcommons.upc.edu/handle/2117/119560\" target=\"_blank\">\n  <mat-list-item>\n    <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-external-link-alt\"></mat-icon>\n    <h4 mat-line>Competiciones</h4>\n    <p mat-line class=\"project-author\"> Maria del Mar Olmo </p>\n    <p mat-line class=\"project-description\">Generador de competiciones en una herramienta de gamificación</p>\n  </mat-list-item>\n  </a>\n\n  <a href=\"https://upcommons.upc.edu/handle/2117/121556\" target=\"_blank\">\n  <mat-list-item>\n    <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-external-link-alt\"></mat-icon>\n    <h4 mat-line>Primera versión vendible</h4>\n    <p mat-line class=\"project-author\"> Anna García y Joan Valverde </p>\n    <p mat-line class=\"project-description\">Integració de diferents mòduls i posada a punt d’una eina de gamificació</p>\n  </mat-list-item>\n  </a>\n\n</mat-list>"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item {\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  mat-list-item mat-icon {\n    transition-duration: 0.3s;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-timing-function: ease-in-out; }\n  mat-list-item:hover {\n    background-color: #f0ffff; }\n  mat-list-item:hover mat-icon {\n      -webkit-transform: translateX(4px);\n      transform: translateX(4px); }\n  mat-list-item .project-author {\n    color: #939393; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBc0I7RUFDdEIsNENBQTRDLEVBQUE7RUFGN0M7SUFLSyx5QkFBeUI7SUFFekIsc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QixpREFBOEI7SUFFOUIsdUNBQXVDLEVBQUE7RUFUNUM7SUFZRSx5QkFBeUIsRUFBQTtFQVozQjtNQWNHLGtDQUFrQztNQUMvQiwwQkFBMEIsRUFBQTtFQWZoQztJQW1CRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0LWl0ZW0ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblx0bWF0LWljb24ge1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICBcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgXHQtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICBcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICBcdC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXHR9XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGZmZmY7XG5cdFx0bWF0LWljb24ge1xuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICBcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG5cdFx0fVxuXHR9XG5cdC5wcm9qZWN0LWF1dGhvciB7XG5cdFx0Y29sb3I6ICM5MzkzOTM7XG5cdH1cblx0LnByb2plY3QtZGVzY3JpcHRpb24ge1xuXG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/pages/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.scss */ "./src/app/pages/students/students.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = ".list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .list mat-card {\n    width: 100%;\n    padding-bottom: 0;\n    background-color: #4527a0;\n    color: #FFF;\n    background-image: linear-gradient(90deg, #4527a0, #3f51b5, #4527a0); }\n  .list mat-card mat-card-header {\n      min-height: 100px; }\n  @media screen and (min-width: 451px) {\n  .list mat-card {\n    width: 40%; } }\n  @media screen and (min-width: 981px) {\n  .list mat-card {\n    width: 45%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvdGVhY2hlcnMvdGVhY2hlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QixFQUFBO0VBSC9CO0lBS0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBd0I7SUFDeEIsV0FBVztJQUNYLG1FQUFtRSxFQUFBO0VBVHJFO01BV0csaUJBQWlCLEVBQUE7RUFLcEI7RUFDQztJQUNDLFVBQVUsRUFBQSxFQUNWO0VBR0Y7RUFDQztJQUNDLFVBQVUsRUFBQSxFQUNWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhY2hlcnMvdGVhY2hlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdG1hdC1jYXJkIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM0NTI3YTA7XG5cdFx0Y29sb3I6ICNGRkY7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNDUyN2EwLCAjM2Y1MWI1LCAjNDUyN2EwKTtcblx0XHRtYXQtY2FyZC1oZWFkZXIge1xuXHRcdFx0bWluLWhlaWdodDogMTAwcHg7XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MXB4KSB7XG5cdC5saXN0IG1hdC1jYXJkIHtcblx0XHR3aWR0aDogNDAlO1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MXB4KSB7XG5cdC5saXN0IG1hdC1jYXJkIHtcblx0XHR3aWR0aDogNDUlO1xuXHR9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _data_teacher_videos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/teacher_videos */ "./src/app/data/teacher_videos.ts");





var TeachersComponent = /** @class */ (function () {
    function TeachersComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.cards = _data_teacher_videos__WEBPACK_IMPORTED_MODULE_4__["CARDS"];
    }
    TeachersComponent.prototype.ngOnInit = function () { };
    TeachersComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.cards, event.previousIndex, event.currentIndex);
    };
    TeachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teachers',
            template: __webpack_require__(/*! ./teachers.component.html */ "./src/app/pages/teachers/teachers.component.html"),
            styles: [__webpack_require__(/*! ./teachers.component.scss */ "./src/app/pages/teachers/teachers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TeachersComponent);
    return TeachersComponent;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/dashboard/dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tutorial/dashboard/dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<h2>Creació de les pàgines en el repositori Dashboard</h2>\n\t<p>\n\t\tTant el model com el servei són exactament iguals als de la part Mobile, per tant, es pot copiar directament les classes (els models i els serveis estan dins de la carpeta app/shared dins de les seves respectives carpetes). També s’ha de definir la url en el fitxer <b>app.config.ts</b> tal com es va fer en el repositori de Mobile.\n\t</p>\n\t<p>\n\t\tLa única diferència és que s’ha d’afegir l’exportació del servei de “Mesa” al fitxer <b>index.ts</b> dins de la carpeta src/app/services.\n\t</p>\n\t<p>\n\t\tPer crear la pàgina des d’on es mostrarà la informació de l’objecte “Mesa”, s’ha de crear de la mateixa manera que en Mobile, un directori dins de la carpeta pages que contingui, com a mínim els tres fitxers següents:\n\t</p>\n</section>\n<section>\n\t<h2>Mesa.ts</h2>\n\t<p>\n\t\tPrimer s’ha de definir el component i la forma que tindrà la pàgina:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"12\">\n\t\t<code class=\"language-typescript\">{{\"@Component({\n  selector: 'app-mesa',\n  templateUrl: './mesa.html',\n  styleUrls: ['./mesa.scss']\n})\"}}</code>\n\t</pre>\n\t<p>\n\t\tDesprés, a diferència de la part Mobile, la petició es fa directament a la pàgina de “Mesa” ja que només hi ha un botó que porti a la pàgina i dins del mètode que s’executa en quan s’obre la pàgina (ngOnInit())\n\t</p>\n\t<p>\n\t\tEn dashboard, no es diuen pàgines (MesaPage en Mobile) si no components (MesaComponent)\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"17\">\n\t\t<code class=\"language-typescript\">{{\"export class MesaComponent implements OnInit {\n  public mesas: Mesa;\n  public myRole: Role;\n  public role = Role;\n\n  constructor(\n    public alertService: AlertService,\n    public utilsService: UtilsService,\n    public mesaServices: MesaService,\n    public loadingService: LoadingService,\n    public snackbar: MatSnackBar) {\n\n    this.utilsService.currentUser = Login.toObject(localStorage.getItem(AppConfig.LS_USER));\n    this.utilsService.role = Number(localStorage.getItem(AppConfig.LS_ROLE));\n    this.myRole = this.utilsService.role;\n  }\n\n  ngOnInit(): void {\n    if (this.myRole === Role.STUDENT) {\n      this.loadingService.show();\n      this.mesaServices.getMyMesa().subscribe(\n        ((mesa: Mesa) => {\n          this.loadingService.hide();\n          this.mesas = mesa;\n        }),\n        ((error: Response) => {\n          this.loadingService.hide();\n          this.alertService.show(error.toString());\n        }));\n    }\n  }\n\n}\"}}</code>\n\t</pre>\n</section>\n<section>\n\t<h2>Mesa.scss</h2>\n\t<p>\n\t\tEn aquest fitxer simplement es defineix l’estil de la pàgina:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-scss\">{{'.mesa-content {\n  margin: 40px auto;\n  max-width: 400px;\n}\n\nmat-form-field {\n  width: 100%;\n}'}}</code>\n\t</pre>\n</section>\n<section>\n\t<h2>Mesa.html</h2>\n\t<p>\n\t\tFinalment el fitxer html defineix com està estructurada la pàgina, que en el nostre cas, només es tracte de la imatge en la part de dalt i dues línies d’informació:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-markup\">&lt;div class=\"mesa-content\"&gt;\n  &lt;h3 *ngIf=\"myRole == role.STUDENT\"&gt;{{'{'}}{{'{'}} 'MESA.TITLE' | translate {{'}'}}{{'}'}}&lt;/h3&gt;\n  &lt;mat-card *ngIf=\"mesas\"&gt;\n    &lt;mat-card-header&gt;\n      &lt;img [src]=\"mesas.imageM\"&gt;\n      &lt;mat-card-title&gt;{{'{'}}{{'{'}} mesas.nombreAula {{'}'}}{{'}'}}&lt;/mat-card-title&gt;\n      &lt;mat-card-subtitle&gt;{{'{'}}{{'{'}} 'Columna: ' {{'}'}}{{'}'}} {{'{'}}{{'{'}} mesas.numColumna {{'}'}}{{'}'}}&lt;/mat-card-subtitle&gt;\n      &lt;mat-card-subtitle&gt;{{'{'}}{{'{'}} 'Fila: ' {{'}'}}{{'}'}} {{'{'}}{{'{'}} mesas.numFila {{'}'}}{{'}'}}&lt;/mat-card-subtitle&gt;\n    &lt;/mat-card-header&gt;\n  &lt;/mat-card&gt;\n&lt;/div&gt;</code>\n\t</pre>\n\t<p>\n\t\tPer poder referenciar la pàgina, s’ha d’afegir les següents línies en els fitxers especificats:\n\t</p>\n\t<ul><li>Fitxer <b>navBar.html</b> dins la carpeta src/app/shared/navBar</li></ul>\n\t<p>\n\t\tEls tres fitxers navBar corresponen a la barra de dalt de la pàgina on estan col·locats tots els botons.\n\t</p>\n\t<p>\n\t\tPer afegir el botó de “Mesa” simplement s’ha d’afegir una línia abans de la línia corresponent al botó de logout que tingui com a routerLink el direccionalment a la pàgina de mesa i el títol que es vol mostrar dins del botó:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"8\">\n\t\t<code class=\"language-markup\">&lt;a mat-button class=\"docs-navbar-hide-small docs-button\" routerLink=\"/mesa\"&gt;{{'{'}}{{'{'}} 'MESA.TITLE' | translate {{'}'}}{{'}'}}&lt;/a&gt;</code>\n\t</pre>\n\t<ul><li>Fitxer <b>app.module.ts</b> dins la carpeta src/app</li></ul>\n\t<p>\n\t\tTal com s’ha fet en la part de Mobile, s’ha d’afegir la declaració MesaComponent en la part de declarations i MesaService dins la part de providers.\n\t</p>\n\t<ul><li>Fitxer <b>app.routing.ts</b> dins la carpeta src/app</li></ul>\n\t<p>\n\t\tPer últim, s’ha d’afegir el direccionalment a la pàgina afegint una línia amb el path i el component a que es dirigeix:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"16\">\n\t\t<code class=\"language-typescript\">{{\"{ path: 'mesa', component: MesaComponent, canActivate: [AuthGuard] },\"}}</code>\n\t</pre>\n</section>"

/***/ }),

/***/ "./src/app/pages/tutorial/dashboard/dashboard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tutorial/dashboard/dashboard.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tutorial/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tutorial/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/tutorial/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/tutorial/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/introduction/introduction.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tutorial/introduction/introduction.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<h2>Objectiu i definició de l’objecte</h2>\n\t<p>\n\t  L’objectiu es crear un nou objecte “Mesa” que tindrà la informació de la taula a on estigui l’estudiant que utilitzi l’aplicació. Per tant, només podrà veure aquesta informació un usuari que tingui un rol d’estudiant.\n\t</p>\n\t<p>\n\t  Atributs de l’objecte:\n\t</p>\n\t\t<ul>\n\t\t\t<li><b>Id:</b> per identificar el registre</li>\n\t\t\t<li><b>nombreAula:</b> nom de l’aula on és la taula</li>\n\t\t\t<li><b>numFila:</b> número de la fila de taules de l’aula</li>\n\t\t\t<li><b>numColumna:</b> número de la columna de taules de l’aula</li>\n\t\t\t<li><b>imageM:</b> imatge de la taula</li>\n\t\t</ul>\n\t<p>\n\t\tEn l’aplicació mòbil, es podrà accedir a la pàgina de “Mesa” mitjançant la pàgina “home”, on es mostrarà l’atribut de nombreAula i des del menú lateral de l’aplicació, on es mostrarà la variable TITLE de l’objecte.\n\n\t\t<img src=\"../../../assets/img/tutorial/img1.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tI la visualització de la pàgina serà:\n\t\t<img src=\"../../../assets/img/tutorial/img2.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tEn quant a la pàgina web, es podrà accedir mitjançant la barra de navegació superior, on hi haurà un botó que portarà a la pàgina que mostrarà la informació de “Mesa”:\n\t\t<img src=\"../../../assets/img/tutorial/img3.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Consejo tutorial de desarrollo modulo de mesa</h2>\n\t<p>\n\t\tPara seguir este tutorial de desarrollo en el que se realiza un modulo de mesa de estudiante, es importante tener en cuenta que hay que situarse en el tag v0.1.0 antes de comenzar a intentar desarrollar el modulo del tutorial. Pues el código del tutorial parte de ese punto, y si se iniciara el desarrollo en otro punto el código seria diferente y podría inducir a errores o confusiones.\n\t</p>\n\t<p>\n\t\tSi en algún momento se quiere comparar el código que se esta realizando con el código del tutorial, existen dos opciones. La primera es ir al repositorio de github del proyecto y una vez ahí situarse en la rama tutorial y buscar el archivo que se quiere comparar.\n\t</p>\n\t<p>\n\t\tEl segundo método se pude ejecutar directamente desde la línea de comandos, y como resultado mostrará las diferencias entre el archivo que se esta editando y el archivo del tutorial. De esta manera se puede ver claramente que es exactamente lo que falta para realizar los pasos indicados en el tutorial. Para ello, se debe utilizar el comando 'git diff' de la siguiente manera:\n\t</p>\n\t<pre>\n\t\t<code class=\"language-markup\">{{\"\ngit diff master..tutorial -- myfile.ts\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tEste comando supone que se esta realizando el tutorial desde la rama master, de estar realizándose desde una rama personalizada iniciada en master en el punto v0.1.0 habrá que usar el nombre de esa rama en lugar de master. En lugar de myfile.ts hay que poner el nombre del archivo que se quiere comparar.\n\t</p>\n\t<p>\n\t\tPara más información sobre git visitar <a routerLink=\"/developer/git\">el tutorial sobre git</a>.\n\t</p>\n</section>"

/***/ }),

/***/ "./src/app/pages/tutorial/introduction/introduction.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tutorial/introduction/introduction.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tutorial/introduction/introduction.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tutorial/introduction/introduction.component.ts ***!
  \***********************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/pages/tutorial/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/app/pages/tutorial/introduction/introduction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/mobile/mobile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/tutorial/mobile/mobile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<h2>Creació de les pàgines en el al repositori Mobile</h2>\n\t<p>\n\t\t<b>IMPORTANT:</b> quan es parla de un objecte seguit de “Page” es refereix a la pàgina dins de la carpeta corresponent dins del directori de “pages” <br>Exemple: MenuPage es la classe de la pàgina del menu:\n\t\t<img src=\"../../../assets/img/tutorial/img16.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tEl primer pas és la creació del model per tal de poder rebre dades de la API i convertir-les en l’objecte “Mesa” en si. Per fer-ho, crearem una classe de typescrip dins de la carpeta src → models i especificarem els atributs de l’objecte, el constructor, el mètode (<b>toObject</b>) per passar a objecte “Mesa” l’objecte genèric que es rep i els corresponents gets i sets segons els atributs especificats:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{\"export class Mesa {\n\n  private _id: string;\n  private _nombreAula: string;\n  private _numFila: number;\n  private _numColumna: number;\n  private _imageM: string;\n\n\n  constructor(id?: string, nombreAula?: string, numFila?: number, numPatas?: number, imageM?: string) {\n    this._id = id;\n    this._nombreAula = nombreAula;\n    this._numFila = numFila;\n    this._numColumna = numPatas;\n    this._imageM = imageM;\n  }\n  /* tslint:disable */\n  static toObject(object: any): Mesa {\n    /* tslint:enable */\n    let result: Mesa = new Mesa();\n    if (object != null) {\n      result.id = object.id;\n      result.nombreAula = object.nombreAula;\n      result.numFila = object.numFila;\n      result.numColumna = object.numColumna;\n      result.imageM = object.imageM;\n\n    }\n    return result;\n  }\n\n  public get id(): string {\n    return this._id;\n  }\n\n  public set id(value: string) {\n    this._id = value;\n  }\n\n  public get nombreAula(): string {\n    return this._nombreAula;\n  }\n\n  public set nombreAula(value: string) {\n    this._nombreAula = value;\n  }\n\n  public get imageM(): string {\n    return this._imageM;\n  }\n\n  public set imageM(value: string) {\n    this._imageM = value;\n  }\n\n  public get numFila(): number {\n    return this._numFila;\n  }\n\n  public set numFila(value: number) {\n    this._numFila = value;\n  }\n\n  public get numColumna(): number {\n    return this._numColumna;\n  }\n\n  public set numColumna(value: number) {\n    this._numColumna = value;\n  }\n\n}\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tTambé cal afegir l’atribut “mesaId” al model “Student” per tal de que es tradueixi correctament i els corresponents get i set:<br>(veure linies 13, 23, 38)\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"5\">\n\t\t<code class=\"language-typescript\">{{\"private _id: string;\n  private _name: string;\n  private _surname: string;\n  private _username: string;\n  private _email: string;\n  private _schoolId: number;\n  private _avatarId: number;\n  private _avatar: Avatar;\n  private _mesaId: number;\n\n  constructor(name?: string, surname?: string, username?: string,\n    email?: string, schoolId?: number, avatarId?: number, mesaId?: number) {\n    this._name = name;\n    this._surname = surname;\n    this._username = username;\n    this._email = email;\n    this._schoolId = schoolId;\n    this._avatarId = avatarId;\n    this._mesaId = mesaId;\n  }\n\n  /* tslint:disable */\n  static toObject(object: any): Student {\n    /* tslint:enable */\n    let result: Student = new Student();\n    if (object != null) {\n      result.id = object.id;\n      result.name = object.name;\n      result.surname = object.surname;\n      result.username = object.username;\n      result.email = object.email;\n      result.schoolId = object.schoolId;\n      result.avatarId = object.avatarId;\n      result.mesaId = object.mesaId;\n    }\n    return result;\n  }\"}}</code>\n\t</pre>\n\t<p>\n\t\tUna vegada creat el model, creem els mètodes que creen peticions a la API dins de la carpeta src/providers. En el nostre cas, crearem el fitxer mesaService.ts en el que només necessitarem un mètode que l’anomenarem “getMyMesa” que retornarà l’objecte sencer:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{'import {Injectable} from \"@angular/core\";\nimport {UtilsService} from \"./utils.service\";\nimport {Headers, Http, RequestOptions, Response} from \"@angular/http\";\nimport {Observable} from \"rxjs/Observable\";\nimport {AppConfig} from \"../app/app.config\";\nimport {School} from \"../model/school\";\nimport {Mesa} from \"../model/mesa\";\nimport {Avatar} from \"../model/avatar\";\n\n@Injectable()\nexport class MesaService {\n\n  constructor(\n    public http: Http,\n    public utilsService: UtilsService) { }\n\n  public getMyMesa(): Observable&lt;Mesa&gt; {\n\n    let options: RequestOptions = new RequestOptions({\n      headers: this.utilsService.setAuthorizationHeader(new Headers(), this.utilsService.currentUser.id)\n    });\n\n    var url: string = this.utilsService.getMyUrl() + AppConfig.MYMESA_URL;\n\n    return this.http.get(url, options)\n      .map((response: Response, index: number) => Mesa.toObject(response.json()))\n      .catch((error: Response) => this.utilsService.handleAPIError(error));\n  }\n}'}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tLes url de les peticions es fixen en un fitxer a part dins de la carpeta src/app amb el nom de app.config.ts.\n\t</p>\n\t<p>\n\t\tPer saber quina url es necessita, simplement cal consultar els mètodes generats a la API i l’únic que ens interessa de moment es el de la figura ja que ens retorna la “Mesa” lligada a un estudiant.\n\t\t<img src=\"../../../assets/img/tutorial/img17.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tPer tant, només haurem d’afegir la part de “/mesa” ja que el mètode “getMyUrl” ja ens retorna la part de l’estudiant i els seu id.\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"19\">\n\t\t<code class=\"language-typescript\">{{\"public static get MYMESA_URL(): string { return '/mesa'; }\"}}</code>\n\t</pre>\n\t<p>\n\t\tL’objecte “Mesa” s’inicialitzarà tant a la pàgina del menú com a la pàgina home ja que es podrà accedir per les dues pàgines.\n\t</p>\n\t<p>\n\t\tTan en la MenuPage com en la HomePage hi haurà un mètode “vesAlaMesa” on dins hi haurà la petició “getMyMesa()” que hem creat anteriorment en el mesaService.\n\t</p>\n\t<p>\n\t\tDins de la petició, si es rep la informació correctament sense errors, s’utilitza la classe navController per inicialitzar la pàgina MesaPage passant-li la variable “mesa” inicialitzada i amb informació.\n\t\t<img src=\"../../../assets/img/tutorial/img18.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tPer tant, per fer la crida des de la MenuPage, a l'arxiu src/pages/menu/menu.ts es defineixen les variables que s’utilitzen i s’inicialitza la MesaPage:<br>(veure linies 31, 42, 48)\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"24\">\n\t\t<code class=\"language-typescript\">{{\"export class MenuPage {\n\n  @ViewChild(Nav) nav: Nav;\n\n  public rootPage: Component;\n  public homePage: Page;\n  public schoolPage: Page;\n  public mesaPage: Page;\n\n  public myRole: Role;\n  public role = Role;\n\n  constructor(\n    public navController: NavController,\n    public translateService: TranslateService,\n    public utilsService: UtilsService,\n    public ionicService: IonicService,\n    public schoolService: SchoolService,\n    public mesaService: MesaService,\n    private loginService: LoginService) {\n\n    this.rootPage = HomePage;\n    this.homePage = new Page(HomePage, this.translateService.instant('HOME.TITLE'));\n    this.schoolPage = new Page(SchoolPage, this.translateService.instant('SCHOOL.TITLE'));\n    this.mesaPage = new Page(MesaPage,this.translateService.instant('MESA.TITLE'));\n    this.myRole = this.utilsService.role;\n  }\"}}</code>\n\t</pre>\n\t<p>\n\t\tI després el mètode en si té una forma:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"92\">\n\t\t<code class=\"language-typescript\">{{\"public vesAlaMesa(): void {\n\n    this.ionicService.showLoading(this.translateService.instant('APP.WAIT'));\n\n    this.mesaService.getMyMesa().subscribe(\n      ((value: Mesa) => this.navController.push(MesaPage, { mesa: value })),\n      error => {\n        this.ionicService.showAlert(this.translateService.instant('APP.ERROR'), error);\n        this.ionicService.removeLoading();\n      });\n  }\"}}</code>\n\t</pre>\n\t<p>\n\t\tTambé s’ha de definir el botó a menu.html posant com a condició que el rol de l’usuari sigui el d’estudiant. Si no es un estudiant, no es mostrarà.\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"18\">\n\t\t<code class=\"language-markup\">&lt;button menuClose ion-item *ngIf=\"myRole == role.STUDENT\" (click)=\"vesAlaMesa()\"&gt;\n\t{{'{'}}{{'{'}}mesaPage.title{{'}'}}{{'}'}}\n&lt;/button&gt;</code>\n\t</pre>\n\t<p>\n\t\tLa part de la HomePage es igual que la de MenuPage, l’única part que canvia és la que es mostra d’entrada a la HomePage:\n\t\t<img src=\"../../../assets/img/tutorial/img19.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tLa informació del botó s’ha d’inicialitzar en el moment que s’inicialitza la pàgina, és a dir, dins del mètode “getHomeInfo()” i com que només serà visible per els estudiants, ha d’estar dins del If que correspongui als estudiants.\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"112\">\n\t\t<code class=\"language-typescript\">{{\"this.schoolService.getMySchool().finally(() => {\n\trefresher ? refresher.complete() : null;\n    this.ionicService.removeLoading();\n}).subscribe(\n    ((value: School) => {\n        this.school = value;\n\n        this.mesaService.getMyMesa().subscribe(\n            ((value: Mesa) => {\n            \tthis.mesa = value\n            }),\n            error => this.ionicService.showAlert(this.translateService.instant('APP.ERROR'), error));\n        }\n\n    ),\n    error => this.ionicService.showAlert(this.translateService.instant('APP.ERROR'), error));\"}}</code>\n\t</pre>\n\t<p>\n\t\tI el botó en el fitxer home.html tindrà la forma:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"31\">\n\t\t<code class=\"language-markup\">&lt;ion-item *ngIf=\"mesa\" (click)=\"vesAlaMesa()\"&gt;\n    &lt;ion-thumbnail item-left&gt;\n    \t&lt;img [src]=\"mesa.imageM\"&gt;\n    &lt;/ion-thumbnail&gt;\n    &lt;h2&gt;{{'{'}}{{'{'}}mesa.nombreAula{{'}'}}{{'}'}}&lt;/h2&gt;\n    &lt;button ion-button clear item-right icon-only&gt;\n    \t&lt;ion-icon name=\"ios-arrow-forward\"&gt;&lt;/ion-icon&gt;\n    &lt;/button&gt;\n&lt;/ion-item&gt;</code>\n\t</pre>\n\t<p>\n\t\tUna vegada creats els models, els mètodes que interaccionen amb la API i els mètodes que porten a la MesaPage, es procedeix a crear la pàgina “Mesa” dins de la carpeta src → pages, on, per seguir l’estructura del projecte, s’haurà de crear un directori i dins els tres fitxers corresponents:\n\t\t<img src=\"../../../assets/img/tutorial/img20.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Mesa.ts</h2>\n\t<p>\n\t\tAquest fitxer correspon a les funcions que fa la pàgina. Com que en el nostre cas només es tracta d’una pàgina que ensenya informació i l’objecte s’ha inicialitzat a les pàgines anteriors, només s’ha de recuperar la informació:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-typescript\">{{'import {Mesa} from \"../../model/mesa\";\nimport {TranslateService} from \"ng2-translate/ng2-translate\";\nimport {IonicService} from \"../../providers/ionic.service\";\nimport {NavParams} from \"ionic-angular\";\nimport {Component} from \"@angular/core\";\n\n@Component({\n  selector: \"page-mesa\",\n  templateUrl: \"./mesa.html\"\n})\n\nexport class MesaPage {\n\n  public mesa: Mesa;\n\n  constructor(\n    public navParams: NavParams,\n    public translateService: TranslateService,\n    public ionicService: IonicService) {\n\n    this.mesa = this.navParams.data.mesa;\n  }\n  public ionViewDidEnter(): void {\n\n    this.ionicService.removeLoading();\n  }\n\n}'}}</code>\n\t</pre>\n</section>\n<section>\n\t<h2>Mesa.scss</h2>\n\t<p>\n\t\tEn aquest es defineix l’estil dels elements de la pàgina:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-scss\">{{'page-mesa {\n\t.logo-row {\n\t\tpadding-bottom: 20px;\n\t\tpadding-top: 20px;\n\t}\n\tion-row {\n\t\talign-items: center;\n\t\ttext-align: center;\n\t}\n}'}}</code>\n\t</pre>\n</section>\n<section>\n\t<h2>Mesa.html</h2>\n\t<p>\n\t\tFinalment, en el fitxer html es defineix la posició i quins elements es mostren en la pàgina:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-markup\">&lt;ion-header&gt;\n  &lt;ion-navbar color=\"primary\"&gt;\n    &lt;button ion-button menuToggle&gt;\n      &lt;ion-icon name=\"menu\"&gt;&lt;/ion-icon&gt;\n    &lt;/button&gt;\n    &lt;ion-title>{{'{'}}{{'{'}}mesa.nombreAula{{'}'}}{{'}'}}&lt;/ion-title&gt;\n  &lt;/ion-navbar&gt;\n&lt;/ion-header&gt;\n&lt;ion-content&gt;\n  &lt;ion-row class=\"logo-row\" *ngIf=\"mesa\"&gt;\n    &lt;ion-col>&lt;/ion-col&gt;\n    &lt;ion-col width-67&gt;\n      &lt;img [src]=\"mesa.imageM\" width=\"200px\" height=\"200px\" /&gt;\n    &lt;/ion-col&gt;\n    &lt;ion-col>&lt;/ion-col&gt;\n  &lt;/ion-row&gt;\n  &lt;ion-item&gt;\n    {{'{'}}{{'{'}} 'MESA.FILA' | translate {{'}'}}{{'}'}}\n    &lt;ion-note item-right&gt;{{'{'}}{{'{'}} mesa.numFila {{'}'}}{{'}'}} &lt;/ion-note&gt;\n  &lt;/ion-item&gt;\n  &lt;ion-item&gt;\n    {{'{'}}{{'{'}} 'MESA.COLUMNA' | translate {{'}'}}{{'}'}}\n    &lt;ion-note item-right&gt;{{'{'}}{{'{'}} mesa.numColumna {{'}'}}{{'}'}} &lt;/ion-note&gt;\n  &lt;/ion-item&gt;\n&lt;/ion-content&gt;</code>\n\t</pre>\n\t<p>\n\t\tPer tal d’especificar les variables de “MESA.FILA” i “MESA.COLUMNA”, s’han d’afegir al fitxer <b>es.json</b> de la dins de la carpeta src/assets/i18n :\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"40\">\n\t\t<code class=\"language-json\">{{'\"MESA\": {\n    \"TITLE\": \"Mi mesa\",\n    \"FILA\": \"Fila\",\n    \"COLUMNA\": \"Columna\"\n  },'}}</code>\n\t</pre>\n\t<p>\n\t\tPer últim, s’han de definir les pàgines creades en el fitxer <b>app.modules.ts</b> ubicat en els directori src/app. S’ha d’especificar la MesaPage dins de declarations i entryComponents i el servei de MesaService dins de providers.\n\t</p>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/tutorial/mobile/mobile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/tutorial/mobile/mobile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL21vYmlsZS9tb2JpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tutorial/mobile/mobile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/mobile/mobile.component.ts ***!
  \***********************************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileComponent = /** @class */ (function () {
    function MobileComponent() {
    }
    MobileComponent.prototype.ngOnInit = function () {
    };
    MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile',
            template: __webpack_require__(/*! ./mobile.component.html */ "./src/app/pages/tutorial/mobile/mobile.component.html"),
            styles: [__webpack_require__(/*! ./mobile.component.scss */ "./src/app/pages/tutorial/mobile/mobile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileComponent);
    return MobileComponent;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/services/services.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tutorial/services/services.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<h2>Creació del model i les dades al repositori Services</h2>\n\t<p>\n\t\tL’API de l’aplicació es crea automàticament mitjançant la definició del model de dades i les relacions entre els seus objectes.\n\t</p>\n\t<p>\n\t\tPer tal de crear el model de dades per enviar i rebre les peticions de la API, s’han de crear dos fitxers amb el mateix nom (en el nostre cas els anomenem “Mesa”), un amb format <b>js</b> (javascript) i l’altre en format <b>json</b> que es on estarà la definició de les dades, les relacions i el nivell d’accés que es podrà tenir a les dades.\n\t</p>\n\t<p>\n\t\tPer simplificar, l’objecte “Mesa” no tindrà ninguna relació amb ningun altre objecte creat, serà l’estudiant que tingui una taula assignada.\n\t</p>\n\t<p>\n\t\tEl model, per seguir l’estructura del projecte, s’ha de crear a la carpeta common → models\n\t</p>\n\t<h3>Model “Mesa”</h3>\n\t<p>\n\t\tEs crea el fitxer en format js (Mesa.js) en la ruta common/models i simplement s’afegeixen les següents línies que serveixen per definir el nom de la funció:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-javascript\">{{\"'use strict';\n\n/* eslint-disable */\nmodule.exports = function (Mesa) {};\n/* eslint-enable */\"}}\n\t\t</code>\n\t</pre>\n\t\n\t<p>\n\t\tA la mateixa ruta que Mesa.js, s'ha de crear un fitxer json, en aquest cas Mesa.json. En crear el fitxer en format json s’han d’afegir el nom i les propietats de l’objecte, les relacions i el nivell d’accés segons el rol:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-json\">{{'{\n  \"name\": \"Mesa\",\n  \"plural\": \"mesas\",\n  \"base\": \"PersistedModel\",\n  \"idInjection\": true,\n  \"options\": {\n    \"validateUpsert\": true\n  },\n  \"properties\": {\n    \"nombreAula\": {\n      \"type\": \"string\",\n      \"required\": true\n    },\n    \"numFila\": {\n      \"type\": \"number\",\n      \"required\": true\n    },\n    \"numColumna\": {\n      \"type\": \"number\",\n      \"required\": true\n    },\n    \"imageM\": {\n      \"type\": \"string\",\n      \"required\": true\n    }\n  },\n  \"validations\": [],\n  \"relations\": {\n\n  },\n  \"acls\": [{\n      \"accessType\": \"*\",\n      \"principalType\": \"ROLE\",\n      \"principalId\": \"$everyone\",\n      \"permission\": \"DENY\"\n    },\n    {\n      \"accessType\": \"READ\",\n      \"principalType\": \"ROLE\",\n      \"principalId\": \"$everyone\",\n      \"permission\": \"ALLOW\"\n    },\n    {\n      \"accessType\": \"WRITE\",\n      \"principalType\": \"ROLE\",\n      \"principalId\": \"SYS-ADMIN\",\n      \"permission\": \"ALLOW\"\n    }\n  ],\n  \"methods\": {}\n}'}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tL’Id no cal que s’especifiqui ja que no es una propietat en si de l’objecte, si no que es una propietat que serveix per relacionar objectes i que l’API ja dona per suposada.\n\t</p>\n\t<h3>Model “Student”</h3>\n\t<p>\n\t\tPer tal de lligar un estudiant amb la seva taula, a la mateixa ruta dels models, tenim el fitxer student.json, on s’ha d’afegir la relació en el model de dades de l’estudiant:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"41\">\n\t\t<code class=\"language-json\">{{'\"mesa\": {\n    \"type\": \"belongsTo\",\n    \"model\": \"Mesa\",\n    \"foreignKey\": \"mesaId\"\n}'}}</code>\n\t</pre>\n\t<p>\n\t\tLa relació, en el nostre cas serà del tipus “BelongsTo”, és a dir, que cada estudiant té una sola taula assignada i utilitzarem com a clau primària “mesaId”.\n\t</p>\n\t<p>\n\t\tUna vegada acabats els models s’ha d’afegir l’objecte al fitxer <b>server/model-config.json</b> i especificar la base de dades i si és un objecte públic o no:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"37\">\n\t\t<code class=\"language-json\">{{'\"Mesa\": {\n    \"dataSource\": \"db\",\n    \"public\": true\n  },'}}</code>\n\t</pre>\n</section>\n<section>\n\t<h2>Visualització a la API</h2>\n\t<p>\n\t\tUna vegada completats els models i la definició del model, podem comprovar que s’ha creat correctament l’objecte a la API executant el mòdul i obrint la pàgina en el port especificat en la configuració:\n\t\t<img src=\"../../../assets/img/tutorial/img8.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tCom podem comprovar, s’ha creat l’objecte i si despleguem els mètodes podrem veure els que es creen automàticament per defecte ja que no hem assignat ninguna relació a l’objecte:\n\t\t<img src=\"../../../assets/img/tutorial/img9.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tEn canvi, si despleguem l’objecte “Students” podrem trobar la definició de la url que correspon a la relació que hem afegit al model:\n\t\t<img src=\"../../../assets/img/tutorial/img10.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Creació de les dades inicials</h2>\n\t<p>\n\t\tJa que no executem el programa des del servidor de producció, no estem connectats a una base de dades que contingui dades per poder provar que funciona el que estem programant.\n\t</p>\n\t<p>\n\t\tPer tant, per poder visualitzar dades a l’aplicació, hem de crear un fitxer 02-1-crea-Mesas.js a la carpeta server/boot amb informació amb la forma següent:\n\t</p>\n\t<pre class=\"line-numbers\">\n\t\t<code class=\"language-javascript\">{{\"'use strict';\n\nmodule.exports = function (app, cb) {\n\n  app.models.Mesa.create([{\n    nombreAula: 'Aula 1',\n    numFila: 1,\n    numColumna: 1,\n    imageM: 'assets/mesa1.png'\n  }, {\n    nombreAula: 'Aula 1',\n    numFila: 2,\n    numColumna: 4,\n    imageM: 'assets/mesa3.png'\n  }, {\n    nombreAula: 'Aula 2',\n    numFila: 1,\n    numColumna: 6,\n    imageM: 'assets/mesa2.png'\n  }], function (err) {\n\n    if (err) throw err;\n    process.nextTick(cb);\n  });\n};\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tLes imatges es poden declarar de dues maneres:\n\t</p>\n\t<ul>\n\t\t<li>Definint la URL d’un lloc d’internet</li>\n\t\t<li>Definint la ruta on està guardada la imatge. Aquest mètode només es pot considerar si la imatge ha sigut creada i no es troba a internet.</li>\n\t</ul>\n\t<p>\n\t\tEn el cas de les imatges de la taula, s’han guardat en la carpeta assets del repositori del Mobile:\n\t\t<img src=\"../../../assets/img/tutorial/img12.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n\t<p>\n\t\tAixí que, la ruta de les imatges que s’ha d’indicar en la creació de les dades es el nom de la carpeta + el nom de la imatge.\n\t</p>\n\t<p>\n\t\tD’aquesta manera tindrem tres taules a visualitzar.\n\t</p>\n\t<p>\n\t\tA part de crear les taules, les hem d’assignar als estudiants en el fitxer “06- create-students.js” mitjançant la clau especificada en les relacions del model Students: “mesaId”:\n\t</p>\n\t<pre class=\"line-numbers\" data-start=\"3\">\n\t\t<code class=\"language-javascript\">{{\"module.exports = function (app, cb) {\n\n  app.models.Student.create([{\n    id: 10000,\n    username: 'student-1',\n    password: 'student-1',\n    name: 'Lorena',\n    surname: 'Diez',\n    email: 'student-1@classpip.com',\n    emailVerified: 1,\n    schoolId: 1,\n    avatarId: 6,\n    mesaId: 1\n  }, {\n    id: 10001,\n    username: 'student-2',\n    password: 'student-2',\n    name: 'Rosario',\n    surname: 'Arellano',\n    email: 'student-2@classpip.com',\n    emailVerified: 1,\n    schoolId: 1,\n    avatarId: 6,\n    mesaId: 2\n  }, {\n    id: 10002,\n    username: 'student-3',\n    password: 'student-3',\n    name: 'Gillermo',\n    surname: 'Macho',\n    email: 'student-3@classpip.com',\n    emailVerified: 1,\n    schoolId: 2,\n    avatarId: 7,\n    mesaId: 3\n  }, {\"}}\n\t\t</code>\n\t</pre>\n\t<p>\n\t\tUna vegada completats tots els passos, es pot executar la part de Sevices i comprovar tant a la API com amb el Postman que es porti la informació correcta (explicació del funcionament més endavant).\n\t</p>\n\t<p>\n\t\tLes imatges que es defineixen en les dades inicials s’han afegit als assets dels repositoris de Mobile i de Dashboard, però es poden utilitzar imatges d’internet indicant la url en l’atribut.\n\t</p>\n</section>\n<section>\n\t<h2>Verificació de les dades mitjançant Postman i l’API</h2>\n\t<p>\n\t\tPer tal de fer crides a la API mitjançant el programa Postman o la API en si, s’ha de tenir en compte la capçalera de la petició, que es correspon al token, que es una clau que es crea en autenticar-se amb un usuari introduint l’usuari i la contrasenya.\n\t</p>\n\t<p>\n\t\tD’aquesta manera, si el programa es divideix en diversos servidors només caldrà que els usuaris i les contrasenyes estiguin guardats en un, i que s’accedeixi als altres mitjançant aquesta clau. Aquest fet incrementa molt la seguretat per el fet de que només s’ha de protegir les contrasenyes i noms d’usuari en un servidor només.\n\t</p>\n</section>\n<section>\n\t<h2>Com aconseguir el Token</h2>\n\t<p>\n\t\tQuan s’accedeix a l’aplicació introduint les credencials, es genera automàticament un token que es guarda en la variable currentUser.id del provider utils.services.ts. S’ha de tenir en compte de que cada vegada que es fa un login, es canvia el token, de manera que si canviem d’usuari, es generarà un de nou.\n\t</p>\n\t<p>\n\t\tUna manera fàcil de aconseguir-ho es fent una petita modificació del codi perquè en alguna pàgina de l’aplicació mòbil o web es mostri i es pugui copiar.\n\t</p>\n\t<p>\n\t\tEn aquesta guia no s’explicarà com fer aquesta modificació, però sí que està feta als repositoris amb el codi de la guia, en l’aplicació mòbil, en la pàgina del perfil.\n\t\t<img src=\"../../../assets/img/tutorial/img13.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Afegir el token al Postman</h2>\n\t<p>\n\t\tPer afegir el token, en la pestanya “Headers” s’ha d’afegir una línia d’autenticació copiant el token en la part de Values.\n\t\t<img src=\"../../../assets/img/tutorial/img14.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>\n<section>\n\t<h2>Afegir el token a l’API</h2>\n\t<p>\n\t\tEn l’API, simplement, s’ha de copiar a la part superior i pressionar el botó.\n\t\t<img src=\"../../../assets/img/tutorial/img15.png\" style=\"max-width:100%;margin: 15px 0 10px;\">\n\t</p>\n</section>"

/***/ }),

/***/ "./src/app/pages/tutorial/services/services.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tutorial/services/services.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tutorial/services/services.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/tutorial/services/services.component.ts ***!
  \***************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/tutorial/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/pages/tutorial/services/services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon> Volver</button>\n<mat-tab-group (selectedTabChange)=\"tabSelectionChanged($event)\">\n  <mat-tab label=\"Introduccción\">\n    <ng-template matTabContent>\n      <app-introduction></app-introduction>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Services\">\n    <ng-template matTabContent>\n      <app-services></app-services>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Mobile\">\n    <ng-template matTabContent>\n      <app-mobile></app-mobile>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Dashboard\">\n    <ng-template matTabContent>\n      <app-dashboard></app-dashboard>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");




var TutorialComponent = /** @class */ (function () {
    function TutorialComponent(highlightService, location) {
        this.highlightService = highlightService;
        this.location = location;
        this.highlighted = false;
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    /**
     * Highlight blog post when it's ready
     */
    TutorialComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    };
    TutorialComponent.prototype.tabSelectionChanged = function (event) {
        this.highlightService.highlightAll();
    };
    TutorialComponent.prototype.goBack = function () {
        this.location.back();
    };
    TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/pages/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/pages/tutorial/tutorial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/pages/tutoriales/tutoriales.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/tutoriales/tutoriales.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <h2 mat-subheader>Tutoriales disponibles</h2>\n\n  <a routerLink=\"/developer/tutoriales/basicos\" (click)=\"setTitle( 'Classpip onboarding conjunto de videotutoriales de desarrollo' );\">\n  <mat-list-item >\n    <mat-icon mat-list-icon fontSet=\"fab\" fontIcon=\"fa-youtube\"></mat-icon>\n    <h4 mat-line>Videotutoriales de todas las tecnologias usadas</h4>\n    <p mat-line class=\"project-description\">Conjunto de videotutoriales que comprenden todas las tecnologías usadas en el proyecto para aprenderlas desde cero.</p>\n  </mat-list-item>\n  </a>\n\n  <a routerLink=\"/developer/tutoriales/git\" (click)=\"setTitle( 'Classpip onboarding como trabajar con git en el proyecto' );\">\n  <mat-list-item >\n    <mat-icon mat-list-icon fontSet=\"fab\" fontIcon=\"fa-github\"></mat-icon>\n    <h4 mat-line>Pautas git</h4>\n    <p mat-line class=\"project-description\">Aprende la metodología a utilizar para trabajar con git en este proyecto </p>\n  </mat-list-item>\n  </a>\n\n  <a routerLink=\"/developer/tutoriales/mesa\" (click)=\"setTitle( 'Classpip onboarding aprende a desarrollar un módulo para la aplicación' );\">\n  <mat-list-item>\n    <mat-icon mat-list-icon>link</mat-icon>\n    <h4 mat-line>Tutorial módulo mesa</h4>\n    <p mat-line class=\"project-description\">desarrolla un pequeño módulo para aprender a realizar nuevos desarrollos en el proyecto</p>\n  </mat-list-item>\n  </a>\n\n  <a routerLink=\"/developer/tutoriales/onboarding\" (click)=\"setTitle( 'Classpip onboarding aprende a desarrollar y mantener la web de onboarding' );\">\n  <mat-list-item>\n    <mat-icon mat-list-icon>web</mat-icon>\n    <h4 mat-line>Desarrollo para la web de Onboarding</h4>\n    <p mat-line class=\"project-description\">Tutorial para aprender a hacer cambios en la web de onboarding</p>\n  </mat-list-item>\n  </a>\n\n</mat-list>"

/***/ }),

/***/ "./src/app/pages/tutoriales/tutoriales.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/tutoriales/tutoriales.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item {\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  mat-list-item mat-icon {\n    transition-duration: 0.3s;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-timing-function: ease-in-out; }\n  mat-list-item:hover {\n    background-color: #f0ffff; }\n  mat-list-item:hover mat-icon {\n      -webkit-transform: translateX(4px);\n      transform: translateX(4px); }\n  mat-list-item .project-author {\n    color: #939393; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvcGFnZXMvdHV0b3JpYWxlcy90dXRvcmlhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQXNCO0VBQ3RCLDRDQUE0QyxFQUFBO0VBRjdDO0lBS0sseUJBQXlCO0lBRXpCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBRTlCLHVDQUF1QyxFQUFBO0VBVDVDO0lBWUUseUJBQXlCLEVBQUE7RUFaM0I7TUFjRyxrQ0FBa0M7TUFDL0IsMEJBQTBCLEVBQUE7RUFmaEM7SUFtQkUsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHV0b3JpYWxlcy90dXRvcmlhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxpc3QtaXRlbSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXHRtYXQtaWNvbiB7XG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICBcdC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIFx0LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cdH1cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZmZmZjtcblx0XHRtYXQtaWNvbiB7XG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgIFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcblx0XHR9XG5cdH1cblx0LnByb2plY3QtYXV0aG9yIHtcblx0XHRjb2xvcjogIzkzOTM5Mztcblx0fVxuXHQucHJvamVjdC1kZXNjcmlwdGlvbiB7XG5cblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tutoriales/tutoriales.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tutoriales/tutoriales.component.ts ***!
  \**********************************************************/
/*! exports provided: TutorialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialesComponent", function() { return TutorialesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TutorialesComponent = /** @class */ (function () {
    function TutorialesComponent(titleService) {
        this.titleService = titleService;
    }
    TutorialesComponent.prototype.ngOnInit = function () {
    };
    TutorialesComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    TutorialesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutoriales',
            template: __webpack_require__(/*! ./tutoriales.component.html */ "./src/app/pages/tutoriales/tutoriales.component.html"),
            styles: [__webpack_require__(/*! ./tutoriales.component.scss */ "./src/app/pages/tutoriales/tutoriales.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], TutorialesComponent);
    return TutorialesComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"docs-footer\">\n  <div class=\"docs-footer-list\">\n    <div class=\"docs-footer-links\">\n      <ul>\n        <li>\n        \t<a href=\"legalwarning\">aviso legal</a>\n          <!--<a routerLink=\"/aviso-legal\">{{ 'APP.LEGAL' | translate }}</a>-->\n        </li>\n        <li>\n          <span>|</span>\n        </li>\n        <li>\n        \t<a href=\"privacy\">privacidad</a>\n          <!--<a routerLink=\"/privacidad\">{{ 'APP.PRIVACY' | translate }}</a>-->\n        </li>\n      </ul>\n    </div>\n    <div class=\"docs-footer-copyright\">\n    \t<p>Classpip &copy; 2016 - {{ actualYear }}</p>\n      <!--<p>{{ 'APP.MARK' | translate }}</p>-->\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-footer {\n  padding: 12px;\n  font-size: 12px; }\n\n.docs-footer-list {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px; }\n\n.docs-footer-copyright {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end; }\n\n.docs-footer-links ul {\n  list-style: none;\n  margin: 0 0px 0 10px;\n  padding: 0; }\n\n.docs-footer-links ul li {\n    float: left;\n    padding-right: 16px; }\n\n.docs-footer-links ul li a {\n      font-size: 14px;\n      text-decoration: none; }\n\n.docs-footer-links ul li a:hover {\n        text-decoration: underline; }\n\n@media screen and (max-width: 884px) {\n  .docs-footer-list {\n    flex-direction: column; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7O0FBSFo7SUFLSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7O0FBTnZCO01BUU0sZUFBZTtNQUNmLHFCQUFxQixFQUFBOztBQVQzQjtRQVdRLDBCQUEwQixFQUFBOztBQU1sQztFQUNFO0lBQ0Usc0JBQXNCLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2NzLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRvY3MtZm9vdGVyLWxpc3Qge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kb2NzLWZvb3Rlci1jb3B5cmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZG9jcy1mb290ZXItbGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgMHB4IDAgMTBweDtcbiAgcGFkZGluZzogMDtcbiAgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4NHB4KSB7XG4gIC5kb2NzLWZvb3Rlci1saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.actualYear = (new Date()).getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/legalwarning/legalwarning.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/legalwarning/legalwarning.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 style=\"text-align: justify; color: sienna;\">DATOS GENERALES</h4>\n<p style=\"text-align: justify;\"><strong>De acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico ponemos a su disposición los siguientes datos:</strong></p>\n<p style=\"text-align: justify;\"><span style=\"color: blue;\">Classpip</span> está domiciliada en la calle <span style=\"color: blue;\">(dirección fiscal de la empresa)</span>, con CIF <span style=\"color: blue;\">(número correspondiente)</span>. Inscrita en el Registro Mercantil de <span style=\"color: blue;\">(ciudad en la que se encuentre dicho registro)</span>, Vol. <span style=\"color: blue;\">(número correspondiente)</span>, Folio <span style=\"color: blue;\">(número correspondiente)</span>, Hoja <span style=\"color: blue;\">(número correspondiente)</span>, Inscripción&nbsp;<span style=\"color: blue;\">(número correspondiente)</span>.</p>\n<p style=\"text-align: justify;\">En la web <span style=\"color: blue;\">(página web de la empresa)</span> hay una serie de contenidos de carácter informativo sobre <span style=\"color: blue;\">(contenido de la web o explicación de su actividad)</span>.</p>\n<p style=\"text-align: justify;\"><strong>Su principal objetivo</strong> es facilitar a los clientes y al público en general, la información relativa a la empresa, a los productos y servicios que se ofrecen <span style=\"color: blue;\">(esto se puede modificar según la actividad a la que se dedique la empresa).</span></p>\n\n<p>* Esto es un texto de ejemplo para una página con finalidad educativa y no comercial *</p>"

/***/ }),

/***/ "./src/app/shared/legalwarning/legalwarning.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/legalwarning/legalwarning.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sZWdhbHdhcm5pbmcvbGVnYWx3YXJuaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/legalwarning/legalwarning.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/legalwarning/legalwarning.component.ts ***!
  \***************************************************************/
/*! exports provided: LegalwarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalwarningComponent", function() { return LegalwarningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LegalwarningComponent = /** @class */ (function () {
    function LegalwarningComponent() {
    }
    LegalwarningComponent.prototype.ngOnInit = function () {
    };
    LegalwarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-legalwarning',
            template: __webpack_require__(/*! ./legalwarning.component.html */ "./src/app/shared/legalwarning/legalwarning.component.html"),
            styles: [__webpack_require__(/*! ./legalwarning.component.scss */ "./src/app/shared/legalwarning/legalwarning.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LegalwarningComponent);
    return LegalwarningComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/shared/services/loading.service.ts");



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
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/navigation/links/links.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/navigation/links/links.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <a mat-list-item routerLink=\"/home\" (click)=\"setTitle( 'Classpip onboarding para la aplicación de gamificación' )\">\n        <mat-icon mat-list-icon>home</mat-icon>\n        <span>Home</span>\n    </a>      \n    <a mat-list-item (click)=\"usersShow = openClose(usersShow, 'userCaret')\">\n        <mat-icon mat-list-icon>people</mat-icon>\n        <span>Usuarios</span>\n        <span class=\"fill-space\"></span>\n        <mat-icon id=\"userCaret\" class=\"material-icons\">expand_more</mat-icon>\n    </a>\n    <a *ngIf=\"usersShow\" class=\"second-level\" mat-list-item routerLink=\"/user/students\" (click)=\"usersShow = openClose(usersShow, 'userCaret'); setTitle( 'Classpip onboarding aprende a usar la aplicacion como estudiante' );\">\n        <mat-icon mat-list-icon fontSet=\"fa\" fontIcon=\"fa-user-graduate\"></mat-icon>\n        <span>Estudiantes</span>\n    </a>\n    <a *ngIf=\"usersShow\" class=\"second-level\" mat-list-item routerLink=\"/user/teachers\" (click)=\"usersShow = openClose(usersShow, 'userCaret'); setTitle( 'Classpip onboarding aprende a usar las funciones de profesor' );\">\n        <mat-icon mat-list-icon fontSet=\"fa\" fontIcon=\"fa-chalkboard-teacher\"></mat-icon>\n        <span>Profesores</span>\n    </a>\n    <a *ngIf=\"usersShow\" class=\"second-level\" mat-list-item routerLink=\"/user/administrator\" (click)=\"usersShow = openClose(usersShow, 'userCaret'); setTitle( 'Classpip onboarding aprende a usar las funciones de administrador' );\">\n        <mat-icon mat-list-icon fontSet=\"fa\" fontIcon=\"fa-user-tie\"></mat-icon>\n        <span>Administradores</span>\n    </a>\n    <a mat-list-item (click)=\"devShow = openClose(devShow, 'devCaret')\">\n        <mat-icon mat-list-icon>developer_mode</mat-icon>\n        <span>Desarrolladores</span>\n    \t<span class=\"fill-space\"></span>\n        <mat-icon id=\"devCaret\" class=\"material-icons\">expand_more</mat-icon>\n    </a>\n    <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"developer/install\" (click)=\"devShow = openClose(devShow, 'devCaret'); setTitle( 'Classpip onboarding instala tu entorno de desarrollo' );\">\n        <mat-icon mat-list-icon fontSet=\"far\" fontIcon=\"fa-save\"></mat-icon>\n        <span>Instalación del entorno</span>\n    </a>\n    <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"developer/firstrun\" (click)=\"devShow = openClose(devShow, 'devCaret'); setTitle( 'Classpip onboarding primeros pasos para poner en marcha el proyecto' );\">\n        <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-shoe-prints\"></mat-icon>\n        <span>Puesta en marcha</span>\n    </a>\n    <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"/developer/tutoriales\" (click)=\"devShow = openClose(devShow, 'devCaret'); setTitle( 'Classpip onboarding listado de tutoriales disponibles' );\">\n        <mat-icon mat-list-icon>computer</mat-icon>\n        <span>Tutoriales</span>\n    </a>\n    <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"/developer/faq\" (click)=\"devShow = openClose(devShow, 'devCaret'); setTitle( 'Classpip onboarding resuleve tus dudas y problemas' );\">\n        <mat-icon mat-list-icon>report</mat-icon>\n        <span>Errores conocidos</span>\n    </a>\n    <a *ngIf=\"devShow\" class=\"second-level\" mat-list-item routerLink=\"/developer/projects\" (click)=\"devShow = openClose(devShow, 'devCaret'); setTitle( 'Classpip onboarding links a los proyectos realizados previamente' );\">\n        <mat-icon mat-list-icon fontSet=\"fas\" fontIcon=\"fa-book\"></mat-icon>\n        <span>Proyectos realizados</span>\n    </a>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/shared/navigation/links/links.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/navigation/links/links.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-chalkboard-teacher,\n.fa-shoe-prints {\n  padding-left: 0;\n  margin-right: 9px;\n  margin-left: -4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24vbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUMsZUFBZTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZpZ2F0aW9uL2xpbmtzL2xpbmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoYWxrYm9hcmQtdGVhY2hlcixcbi5mYS1zaG9lLXByaW50cyB7XG5cdHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICBtYXJnaW4tbGVmdDogLTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/navigation/links/links.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/navigation/links/links.component.ts ***!
  \************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var LinksComponent = /** @class */ (function () {
    function LinksComponent(titleService) {
        this.titleService = titleService;
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent.prototype.openClose = function (identifier, caretId) {
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
    LinksComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/shared/navigation/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.scss */ "./src/app/shared/navigation/links/links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <app-links></app-links>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <a mat-button class=\"docs-button\" routerLink=\"/home\" (click)=\"setTitle( 'Classpip onboarding para la aplicación de gamificación' )\">\n        <img class=\"docs-classpip-logo\" src=\"../assets/img/classpip-icon.svg\" alt=\"classpip logo\">\n        <span>Classpip</span>\n      </a>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <div fxFlex=\"grow\" class=\"main-content\">\n      <div [hidden]=\"!loading\" class=\"loader\">\n        <h2>Loading...</h2>\n        <app-loading></app-loading>\n      </div>\n      <div [hidden]=\"loading\" class=\"router-output\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 220px; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2; }\n\n.docs-button {\n  font-size: 18px; }\n\n.docs-classpip-logo {\n  height: 40px;\n  margin: 0 4px 3px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0Rlc2t0b3AvY2xhc3NwaXAtY29kZS9jbGFzc3BpcC1vbmJvYXJkaW5nL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZG9jcy1idXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kb2NzLWNsYXNzcGlwLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDA7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(titleService, breakpointObserver, router) {
        this.titleService = titleService;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.usersShow = false;
        this.isHandset$ = this.breakpointObserver.observe('(max-width: 768px)')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.loading = true;
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                _this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationCancel"]) {
                _this.loading = false;
            }
        });
    };
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
    NavigationComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/shared/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/privacy/privacy.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/privacy/privacy.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><strong>POLÍTICA DE PRIVACIDAD</strong></p><p>&nbsp;</p><p>El presente Política de Privacidad establece los términos en que Classpip usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p><p><strong>Información que es recogida</strong></p><p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,&nbsp; información de contacto como&nbsp; su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</p><p><strong>Uso de la información recogida</strong></p><p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. &nbsp;Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p><p>Classpip está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p><p><strong>Cookies</strong></p><p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.</p><p>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente, <a href=\"https://cupondedescuento.com.co/leonisa/\" target=\"_blank\">visitas a una web </a>. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</p><p><strong>Enlaces a Terceros</strong></p><p>Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p><p><strong>Control de su información personal</strong></p><p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.&nbsp; Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. &nbsp;En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</p><p>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p><p>Classpip Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p><p>Esta politica de privacidad se han generado en <a href=\"https://politicadeprivacidadplantilla.com/\" target=\"_blank\">politicadeprivacidadplantilla.com</a>.<br></p>"

/***/ }),

/***/ "./src/app/shared/privacy/privacy.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/privacy/privacy.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/privacy/privacy.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/privacy/privacy.component.ts ***!
  \*****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/shared/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/shared/privacy/privacy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/highlight.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/highlight.service.ts ***!
  \******************************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_14__);















var HighlightService = /** @class */ (function () {
    function HighlightService(platformId) {
        this.platformId = platformId;
    }
    HighlightService.prototype.highlightAll = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    };
    HighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], HighlightService);
    return HighlightService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LoadingService = /** @class */ (function () {
    function LoadingService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Subscripbe to the router events in order to clear the
        // loading or not dpending on keepAfterNavigationChange
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
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
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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