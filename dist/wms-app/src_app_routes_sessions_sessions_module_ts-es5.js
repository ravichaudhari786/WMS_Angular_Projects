(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_sessions_sessions_module_ts"], {
    /***/
    686:
    /*!**************************************************!*\
      !*** ./src/app/routes/sessions/403.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error403Component": function Error403Component() {
          return (
            /* binding */
            _Error403Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/components/error-code/error-code.component */
      46947);

      var _Error403Component = /*#__PURE__*/_createClass(function _Error403Component() {
        _classCallCheck(this, _Error403Component);
      });

      _Error403Component.ɵfac = function Error403Component_Factory(t) {
        return new (t || _Error403Component)();
      };

      _Error403Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _Error403Component,
        selectors: [["app-error-403"]],
        decls: 1,
        vars: 2,
        consts: [["code", "403", 3, "title", "message"]],
        template: function Error403Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Permission denied!")("message", "You do not have permission to access the requested data.");
          }
        },
        directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    91859:
    /*!**************************************************!*\
      !*** ./src/app/routes/sessions/404.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error404Component": function Error404Component() {
          return (
            /* binding */
            _Error404Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/components/error-code/error-code.component */
      46947);

      var _Error404Component = /*#__PURE__*/_createClass(function _Error404Component() {
        _classCallCheck(this, _Error404Component);
      });

      _Error404Component.ɵfac = function Error404Component_Factory(t) {
        return new (t || _Error404Component)();
      };

      _Error404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _Error404Component,
        selectors: [["app-error-404"]],
        decls: 1,
        vars: 2,
        consts: [["code", "404", 3, "title", "message"]],
        template: function Error404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Page not found!")("message", "This is not the web page you are looking for.");
          }
        },
        directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    79337:
    /*!**************************************************!*\
      !*** ./src/app/routes/sessions/500.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error500Component": function Error500Component() {
          return (
            /* binding */
            _Error500Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/components/error-code/error-code.component */
      46947);

      var _Error500Component = /*#__PURE__*/_createClass(function _Error500Component() {
        _classCallCheck(this, _Error500Component);
      });

      _Error500Component.ɵfac = function Error500Component_Factory(t) {
        return new (t || _Error500Component)();
      };

      _Error500Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _Error500Component,
        selectors: [["app-error-500"]],
        decls: 1,
        vars: 2,
        consts: [["code", "500", 3, "title", "message"]],
        template: function Error500Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Server went wrong!")("message", "Just kidding, looks like we have an internal issue, please try refreshing.");
          }
        },
        directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    49762:
    /*!************************************************************!*\
      !*** ./src/app/routes/sessions/sessions-routing.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionsRoutingModule": function SessionsRoutingModule() {
          return (
            /* binding */
            _SessionsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _403_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./403.component */
      686);
      /* harmony import */


      var _404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./404.component */
      91859);
      /* harmony import */


      var _500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./500.component */
      79337);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '403',
        component: _403_component__WEBPACK_IMPORTED_MODULE_0__.Error403Component
      }, {
        path: '404',
        component: _404_component__WEBPACK_IMPORTED_MODULE_1__.Error404Component
      }, {
        path: '500',
        component: _500_component__WEBPACK_IMPORTED_MODULE_2__.Error500Component
      }];

      var _SessionsRoutingModule = /*#__PURE__*/_createClass(function _SessionsRoutingModule() {
        _classCallCheck(this, _SessionsRoutingModule);
      });

      _SessionsRoutingModule.ɵfac = function SessionsRoutingModule_Factory(t) {
        return new (t || _SessionsRoutingModule)();
      };

      _SessionsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _SessionsRoutingModule
      });
      _SessionsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_SessionsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    29174:
    /*!****************************************************!*\
      !*** ./src/app/routes/sessions/sessions.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionsModule": function SessionsModule() {
          return (
            /* binding */
            _SessionsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);
      /* harmony import */


      var _sessions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sessions-routing.module */
      49762);
      /* harmony import */


      var _403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./403.component */
      686);
      /* harmony import */


      var _404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./404.component */
      91859);
      /* harmony import */


      var _500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./500.component */
      79337);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var COMPONENTS = [_404_component__WEBPACK_IMPORTED_MODULE_3__.Error404Component, _403_component__WEBPACK_IMPORTED_MODULE_2__.Error403Component, _500_component__WEBPACK_IMPORTED_MODULE_4__.Error500Component];
      var COMPONENTS_DYNAMIC = [];

      var _SessionsModule = /*#__PURE__*/_createClass(function _SessionsModule() {
        _classCallCheck(this, _SessionsModule);
      });

      _SessionsModule.ɵfac = function SessionsModule_Factory(t) {
        return new (t || _SessionsModule)();
      };

      _SessionsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _SessionsModule
      });
      _SessionsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _sessions_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionsRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_SessionsModule, {
          declarations: [_404_component__WEBPACK_IMPORTED_MODULE_3__.Error404Component, _403_component__WEBPACK_IMPORTED_MODULE_2__.Error403Component, _500_component__WEBPACK_IMPORTED_MODULE_4__.Error500Component],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _sessions_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionsRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_routes_sessions_sessions_module_ts-es5.js.map