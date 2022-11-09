"use strict";
(self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_accounts_accounts_module_ts"],{

/***/ 4590:
/*!************************************************************!*\
  !*** ./src/app/routes/accounts/accounts-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsRoutingModule": function() { return /* binding */ AccountsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _additional_services_additional_services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional-services/additional-services.component */ 66492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: 'AdditionalServices', component: _additional_services_additional_services_component__WEBPACK_IMPORTED_MODULE_0__.AdditionalServicesComponent },
];
class AccountsRoutingModule {
}
AccountsRoutingModule.ɵfac = function AccountsRoutingModule_Factory(t) { return new (t || AccountsRoutingModule)(); };
AccountsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccountsRoutingModule });
AccountsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 13067:
/*!****************************************************!*\
  !*** ./src/app/routes/accounts/accounts.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsModule": function() { return /* binding */ AccountsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-routing.module */ 4590);
/* harmony import */ var _additional_services_additional_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./additional-services/additional-services.component */ 66492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class AccountsModule {
}
AccountsModule.ɵfac = function AccountsModule_Factory(t) { return new (t || AccountsModule)(); };
AccountsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountsModule });
AccountsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountsModule, { declarations: [_additional_services_additional_services_component__WEBPACK_IMPORTED_MODULE_1__.AdditionalServicesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsRoutingModule] }); })();


/***/ }),

/***/ 66492:
/*!**************************************************************************************!*\
  !*** ./src/app/routes/accounts/additional-services/additional-services.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalServicesComponent": function() { return /* binding */ AdditionalServicesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AdditionalServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdditionalServicesComponent.ɵfac = function AdditionalServicesComponent_Factory(t) { return new (t || AdditionalServicesComponent)(); };
AdditionalServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdditionalServicesComponent, selectors: [["app-additional-services"]], decls: 2, vars: 0, template: function AdditionalServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "additional-services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRpdGlvbmFsLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_routes_accounts_accounts_module_ts-es2015.js.map