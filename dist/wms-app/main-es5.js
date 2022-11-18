(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(preloader) {
          _classCallCheck(this, _AppComponent);

          this.preloader = preloader;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.preloader.hide();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.PreloaderService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/core.module */
      40294);
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme/theme.module */
      85056);
      /* harmony import */


      var _routes_routes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./routes/routes.module */
      87951);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-permissions */
      85470);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @env/environment */
      92340);
      /* harmony import */


      var _core_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/interceptors/base-url-interceptor */
      28575);
      /* harmony import */


      var _core_interceptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @core/interceptors */
      72756);
      /* harmony import */


      var _core_initializers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @core/initializers */
      69317);
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      39530);
      /* harmony import */


      var _shared_in_mem_in_mem_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/in-mem/in-mem-data.service */
      72729);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./material.module */
      63806);
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ag-grid-angular */
      82022);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316); //import { FormlyConfigModule } from './formly-config.module';
      // import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
      // import { TranslateHttpLoader } from '@ngx-translate/http-loader';
      // Required for AOT compilation
      // export function TranslateHttpLoaderFactory(http: HttpClient) {
      //   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
      // }


      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [{
          provide: _core_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_6__.BASE_URL,
          useValue: _env_environment__WEBPACK_IMPORTED_MODULE_5__.environment.localUrl
        }, _core_interceptors__WEBPACK_IMPORTED_MODULE_7__.httpInterceptorProviders, _core_initializers__WEBPACK_IMPORTED_MODULE_8__.appInitializerProviders],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _routes_routes_module__WEBPACK_IMPORTED_MODULE_3__.RoutesModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _material_module__WEBPACK_IMPORTED_MODULE_11__.MaterialModule, //FormlyConfigModule.forRoot(),
        ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot(), ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__.AgGridModule.withComponents([]), // TranslateModule.forRoot({
        //   loader: {
        //     provide: TranslateLoader,
        //     useFactory: TranslateHttpLoaderFactory,
        //     deps: [HttpClient],
        //   },
        // }),
        //Demo purposes only for GitHub Pages
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__.HttpClientInMemoryWebApiModule.forRoot(_shared_in_mem_in_mem_data_service__WEBPACK_IMPORTED_MODULE_10__.InMemDataService, {
          dataEncapsulation: false,
          passThruUnknownUrl: true
        }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _routes_routes_module__WEBPACK_IMPORTED_MODULE_3__.RoutesModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _material_module__WEBPACK_IMPORTED_MODULE_11__.MaterialModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__.AgGridModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__.HttpClientInMemoryWebApiModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule]
        });
      })();
      /***/

    },

    /***/
    92677:
    /*!****************************************************!*\
      !*** ./src/app/core/authentication/api.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ApiService = /*#__PURE__*/function () {
        function _ApiService(http, store) {
          _classCallCheck(this, _ApiService);

          this.http = http;
          this.store = store;
        }

        _createClass(_ApiService, [{
          key: "formatErrors",
          value: function formatErrors(error) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error.error);
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var currentUser = JSON.parse(this.store.get("currentUser")); //  if(currentUser){
            //  return currentUser;}
            //  else
            //  return null;

            return currentUser;
          }
        }, {
          key: "getUserID",
          value: function getUserID() {
            var currentUser = JSON.parse(this.store.get("currentUser"));

            if (currentUser) {
              return currentUser.userId;
            }

            return 0;
          }
        }, {
          key: "get",
          value: function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            return this.http.get("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl).concat(path), {
              params: params
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
          }
        }, {
          key: "put",
          value: function put(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            return this.http.put("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl).concat(path), JSON.stringify(body), {
              params: params
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
          }
        }, {
          key: "post",
          value: function post(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            return this.http.post("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl).concat(path), JSON.stringify(body), {
              params: params
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
          }
        }, {
          key: "delete",
          value: function _delete(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            return this.http["delete"]("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl).concat(path), {
              params: params
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
          }
        }]);

        return _ApiService;
      }();

      _ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
      };

      _ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _ApiService,
        factory: _ApiService.ɵfac
      });
      /***/
    },

    /***/
    5428:
    /*!***************************************************!*\
      !*** ./src/app/core/authentication/auth.guard.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      41219);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      92677);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(auth, api, router) {
          _classCallCheck(this, _AuthGuard);

          this.auth = auth;
          this.api = api;
          this.router = router;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.authenticate();
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(childRoute, state) {
            return this.authenticate();
          }
        }, {
          key: "authenticate",
          value: function authenticate() {
            return this.auth.check() ? true : this.router.parseUrl('/auth/login');
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    41219:
    /*!*****************************************************!*\
      !*** ./src/app/core/authentication/auth.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      11355);
      /* harmony import */


      var _token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./token.service */
      54679);
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user */
      19729);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api.service */
      92677);
      /* harmony import */


      var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/storage.service */
      1303);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _AuthService = /*#__PURE__*/function () {
        //private userReq$ = this.http.get<User>('/me');
        function _AuthService(http, token, api, store) {
          var _this = this;

          _classCallCheck(this, _AuthService);

          // this.token
          //   .change()
          //   .pipe(switchMap(() => (this.check() ? this.userReq$ : of(guest))))
          //   .subscribe(user => this.user$.next(Object.assign({}, guest, user)));
          this.http = http;
          this.token = token;
          this.api = api;
          this.store = store;
          this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(_user__WEBPACK_IMPORTED_MODULE_1__.guest);
          this.token.refresh().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function () {
            return _this.refresh();
          })).subscribe();
        }

        _createClass(_AuthService, [{
          key: "check",
          value: function check() {
            return this.token.valid();
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this2 = this;

            var rememberMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return this.api.post('/login', {
              username: username,
              password: password,
              rememberMe: rememberMe
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (data) {
              // login successful if there's a jwt token in the response
              //console.log(user);
              if (data && data.user.Token) {
                var currentUser = {
                  userId: data.user.UserID,
                  username: username,
                  email: '',
                  roleId: data.user.RoleID,
                  warehouseId: 0,
                  warehouseName: '',
                  companyId: data.user.CompanyID,
                  FinantialYearId: 0
                };

                if (data.warehouseList.length < 2) {
                  //var warehouse=user.sploginlist;
                  currentUser.warehouseId = data.warehouseList[0].WarehouseID;
                  currentUser.warehouseName = data.warehouseList[0].WareHouseName;
                }

                _this2.store.set('currentUser', JSON.stringify(currentUser));

                _this2.store.set('token', data.user.Token);
              }

              return data;
            })); // return this.http
            //   .post<Token>('/auth/login', { email, password, remember_me: rememberMe })
            //   .pipe(
            //     tap(token => this.token.set(token)),
            //     map(() => this.check())
            //   );
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this3 = this;

            return this.http.post('/auth/refresh', {}).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(function (token) {
              return _this3.token.set(token, true);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function () {
              return _this3.check();
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this4 = this;

            return this.http.post('/auth/logout', {}).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(function () {
              _this4.token.clear();

              _this4.store.clear();
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function () {
              return !_this4.check();
            }));
          }
        }, {
          key: "user",
          value: function user() {
            return this.user$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77985:
    /*!************************************************!*\
      !*** ./src/app/core/authentication/helpers.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "capitalize": function capitalize() {
          return (
            /* binding */
            _capitalize
          );
        },

        /* harmony export */
        "now": function now() {
          return (
            /* binding */
            _now
          );
        },

        /* harmony export */
        "timeLeft": function timeLeft() {
          return (
            /* binding */
            _timeLeft
          );
        }
        /* harmony export */

      });

      function _capitalize(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
      }

      function _now() {
        return new Date().getTime();
      }

      function _timeLeft(expiredAt) {
        return Math.max(0, expiredAt - _now());
      }
      /***/

    },

    /***/
    54679:
    /*!******************************************************!*\
      !*** ./src/app/core/authentication/token.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenService": function TokenService() {
          return (
            /* binding */
            _TokenService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      12702);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      11355);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/services/storage.service */
      1303);
      /* harmony import */


      var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./token */
      29517);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TokenService = /*#__PURE__*/function () {
        function _TokenService(store) {
          _classCallCheck(this, _TokenService);

          this.store = store;
          this.key = 'TOKEN';
          this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.get());
        }

        _createClass(_TokenService, [{
          key: "save",
          value: function save(value) {
            var tokens = {
              access_token: value,
              token: value,
              token_type: 'bearer',
              expires_in: 3600
            };
            this.set(tokens, false);
          }
        }, {
          key: "set",
          value: function set(token) {
            var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.token = _token__WEBPACK_IMPORTED_MODULE_1__.SimpleToken.create(token);
            this.store.set(this.key, this.token);
            this.change$.next(this.token.clone({
              refresh: refresh
            }));
            return this;
          }
        }, {
          key: "get",
          value: function get() {
            if (!this.token) {
              this.token = new _token__WEBPACK_IMPORTED_MODULE_1__.SimpleToken(this.store.get(this.key));
            }

            return this.token;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.store.remove(this.key);
            this.change$.next(null);
            this.token = null;
          }
        }, {
          key: "change",
          value: function change() {
            return this.change$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (token) {
              return !token || !token.refresh;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this5 = this;

            return this.change$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function () {
              return !!_this5.token && _this5.token.exp > 0;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function () {
              var _a;

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)((_a = _this5.token) === null || _a === void 0 ? void 0 : _a.refreshTime());
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function () {
              return _this5.valid();
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function () {
              return _this5.token;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
          }
        }, {
          key: "valid",
          value: function valid() {
            return !!this.token && this.token.valid();
          }
        }, {
          key: "headerValue",
          value: function headerValue() {
            var _a;

            return (_a = this.token) === null || _a === void 0 ? void 0 : _a.headerValue();
          }
        }]);

        return _TokenService;
      }();

      _TokenService.ɵfac = function TokenService_Factory(t) {
        return new (t || _TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
      };

      _TokenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _TokenService,
        factory: _TokenService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    29517:
    /*!**********************************************!*\
      !*** ./src/app/core/authentication/token.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SimpleToken": function SimpleToken() {
          return (
            /* binding */
            _SimpleToken
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_authentication_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/authentication/helpers */
      77985);

      var _SimpleToken = /*#__PURE__*/function () {
        function _SimpleToken(attributes) {
          _classCallCheck(this, _SimpleToken);

          this.refresh = false;
          this.accessToken = '';
          this.tokenType = '';
          this.exp = 0;
          Object.assign(this, attributes || {});
        }

        _createClass(_SimpleToken, [{
          key: "valid",
          value: function valid() {
            return !!this.accessToken && !this.isExpired();
          }
        }, {
          key: "isExpired",
          value: function isExpired() {
            return this.exp !== 0 && this.exp - (0, _core_authentication_helpers__WEBPACK_IMPORTED_MODULE_0__.now)() < 0;
          }
        }, {
          key: "headerValue",
          value: function headerValue() {
            return !!this.accessToken ? [(0, _core_authentication_helpers__WEBPACK_IMPORTED_MODULE_0__.capitalize)(this.tokenType), this.accessToken].join(' ') : '';
          }
        }, {
          key: "refreshTime",
          value: function refreshTime() {
            return (0, _core_authentication_helpers__WEBPACK_IMPORTED_MODULE_0__.timeLeft)(this.exp - 5000);
          }
        }, {
          key: "clone",
          value: function clone() {
            var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new _SimpleToken(Object.assign({}, this, attributes));
          }
        }], [{
          key: "create",
          value: function create(token) {
            var accessToken = token.access_token || token.token || '';
            var tokenType = token.token_type || 'bearer';
            var expiresIn = token.expires_in || 0;
            var exp = expiresIn <= 0 ? 0 : (0, _core_authentication_helpers__WEBPACK_IMPORTED_MODULE_0__.now)() + expiresIn * 1000;
            return new _SimpleToken({
              accessToken: accessToken,
              tokenType: tokenType,
              exp: exp
            });
          }
        }]);

        return _SimpleToken;
      }();
      /***/

    },

    /***/
    19729:
    /*!*********************************************!*\
      !*** ./src/app/core/authentication/user.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "admin": function admin() {
          return (
            /* binding */
            _admin
          );
        },

        /* harmony export */
        "guest": function guest() {
          return (
            /* binding */
            _guest
          );
        }
        /* harmony export */

      });

      var _admin = {
        userId: 1,
        username: 'Zongbin',
        companyId: 1,
        roleId: 1,
        warehouseId: 1,
        warehouseName: 'PH',
        email: 'nzb329@163.com',
        FinantialYearId: 1,
        avatar: './assets/images/avatar.png'
      };
      var _guest = {
        userId: null,
        username: 'unknown',
        companyId: 0,
        roleId: 0,
        warehouseId: 0,
        warehouseName: 'unknown',
        email: 'unknown',
        FinantialYearId: 0,
        avatar: './assets/images/avatar.png'
      };
      /***/
    },

    /***/
    42627:
    /*!**************************************************!*\
      !*** ./src/app/core/bootstrap/comman.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommanService": function CommanService() {
          return (
            /* binding */
            _CommanService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CommanService = /*#__PURE__*/function () {
        function _CommanService(api) {
          _classCallCheck(this, _CommanService);

          this.api = api;
          this.list = [];
        }

        _createClass(_CommanService, [{
          key: "getItemList",
          value: function getItemList() {
            var _this6 = this;

            this.api.get("/item/itemlist").subscribe(function (data) {
              _this6.list = data;
            }, function (error) {
              return console.error(error);
            });
            return this.list;
          }
        }]);

        return _CommanService;
      }();

      _CommanService.ɵfac = function CommanService_Factory(t) {
        return new (t || _CommanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };

      _CommanService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CommanService,
        factory: _CommanService.ɵfac
      });
      /***/
    },

    /***/
    38714:
    /*!************************************************!*\
      !*** ./src/app/core/bootstrap/menu.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuService": function MenuService() {
          return (
            /* binding */
            _MenuService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      11355);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MenuService = /*#__PURE__*/function () {
        function _MenuService() {
          _classCallCheck(this, _MenuService);

          this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        }
        /** Get all the menu data. */


        _createClass(_MenuService, [{
          key: "getAll",
          value: function getAll() {
            return this.menu$.asObservable();
          }
          /** Observe the change of menu data. */

        }, {
          key: "change",
          value: function change() {
            return this.menu$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.share)());
          }
          /** Initialize the menu data. */

        }, {
          key: "set",
          value: function set(menu) {
            this.menu$.next(menu);
            return this.menu$.asObservable();
          }
          /** Add one item to the menu data. */

        }, {
          key: "add",
          value: function add(menu) {
            var tmpMenu = this.menu$.value;
            tmpMenu.push(menu);
            this.menu$.next(tmpMenu);
          }
          /** Reset the menu data. */

        }, {
          key: "reset",
          value: function reset() {
            this.menu$.next([]);
          }
          /** Delete empty values and rebuild route. */

        }, {
          key: "buildRoute",
          value: function buildRoute(routeArr) {
            var route = '';
            routeArr.forEach(function (item) {
              if (item && item.trim()) {
                route += '/' + item.replace(/^\/+|\/+$/g, '');
              }
            });
            return route;
          }
          /** Get the menu item name based on current route. */

        }, {
          key: "getItemName",
          value: function getItemName(routeArr) {
            return this.getLevel(routeArr)[routeArr.length - 1];
          } // Whether is a leaf menu

        }, {
          key: "isLeafItem",
          value: function isLeafItem(item) {
            var _a;

            var cond0 = item.route === undefined;
            var cond1 = item.children === undefined;
            var cond2 = !cond1 && ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) === 0;
            return cond0 || cond1 || cond2;
          } // Deep clone object could be jsonized

        }, {
          key: "deepClone",
          value: function deepClone(obj) {
            return JSON.parse(JSON.stringify(obj));
          } // Whether two objects could be jsonized equal

        }, {
          key: "isJsonObjEqual",
          value: function isJsonObjEqual(obj0, obj1) {
            return JSON.stringify(obj0) === JSON.stringify(obj1);
          } // Whether routeArr equals realRouteArr (after remove empty route element)

        }, {
          key: "isRouteEqual",
          value: function isRouteEqual(routeArr, realRouteArr) {
            realRouteArr = this.deepClone(realRouteArr);
            realRouteArr = realRouteArr.filter(function (r) {
              return r !== '';
            });
            return this.isJsonObjEqual(routeArr, realRouteArr);
          }
          /** Get the menu level. */

        }, {
          key: "getLevel",
          value: function getLevel(routeArr) {
            var _this7 = this;

            var tmpArr = [];
            this.menu$.value.forEach(function (item) {
              var _a; // Breadth-first traverse


              var unhandledLayer = [{
                item: item,
                parentNamePathList: [],
                realRouteArr: []
              }];

              while (unhandledLayer.length > 0) {
                var nextUnhandledLayer = [];

                var _iterator = _createForOfIteratorHelper(unhandledLayer),
                    _step;

                try {
                  var _loop = function _loop() {
                    var ele = _step.value;
                    var eachItem = ele.item;

                    var currentNamePathList = _this7.deepClone(ele.parentNamePathList).concat(eachItem.name);

                    var currentRealRouteArr = _this7.deepClone(ele.realRouteArr).concat(eachItem.route); // Compare the full Array for expandable


                    if (_this7.isRouteEqual(routeArr, currentRealRouteArr)) {
                      tmpArr = currentNamePathList;
                      return "break";
                    }

                    if (!_this7.isLeafItem(eachItem)) {
                      var wrappedChildren = (_a = eachItem.children) === null || _a === void 0 ? void 0 : _a.map(function (child) {
                        return {
                          item: child,
                          parentNamePathList: currentNamePathList,
                          realRouteArr: currentRealRouteArr
                        };
                      });
                      nextUnhandledLayer = nextUnhandledLayer.concat(wrappedChildren);
                    }
                  };

                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _ret = _loop();

                    if (_ret === "break") break;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                unhandledLayer = nextUnhandledLayer;
              }
            });
            return tmpArr;
          }
          /** Add namespace for translation. */

        }, {
          key: "addNamespace",
          value: function addNamespace(menu, namespace) {
            var _this8 = this;

            menu.forEach(function (menuItem) {
              menuItem.name = "".concat(namespace, ".").concat(menuItem.name);

              if (menuItem.children && menuItem.children.length > 0) {
                _this8.addNamespace(menuItem.children, menuItem.name);
              }
            });
          }
        }]);

        return _MenuService;
      }();

      _MenuService.ɵfac = function MenuService_Factory(t) {
        return new (t || _MenuService)();
      };

      _MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _MenuService,
        factory: _MenuService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    85115:
    /*!*****************************************************!*\
      !*** ./src/app/core/bootstrap/preloader.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreloaderService": function PreloaderService() {
          return (
            /* binding */
            _PreloaderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PreloaderService = /*#__PURE__*/function () {
        function _PreloaderService(document) {
          _classCallCheck(this, _PreloaderService);

          this.document = document;
          this.selector = 'globalLoader';
        }

        _createClass(_PreloaderService, [{
          key: "getElement",
          value: function getElement() {
            return this.document.getElementById(this.selector);
          }
        }, {
          key: "hide",
          value: function hide() {
            var el = this.getElement();

            if (el) {
              el.addEventListener('transitionend', function () {
                el.className = 'global-loader-hidden';
              });

              if (!el.classList.contains('global-loader-hidden')) {
                el.className += ' global-loader-fade-in';
              }
            }
          }
        }]);

        return _PreloaderService;
      }();

      _PreloaderService.ɵfac = function PreloaderService_Factory(t) {
        return new (t || _PreloaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _PreloaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _PreloaderService,
        factory: _PreloaderService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    18863:
    /*!***************************************************!*\
      !*** ./src/app/core/bootstrap/sanctum.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SANCTUM_PREFIX": function SANCTUM_PREFIX() {
          return (
            /* binding */
            _SANCTUM_PREFIX
          );
        },

        /* harmony export */
        "SanctumService": function SanctumService() {
          return (
            /* binding */
            _SanctumService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../interceptors/base-url-interceptor */
      28575);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _SANCTUM_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('SANCTUM_PREFIX');

      var _SanctumService = /*#__PURE__*/function () {
        function _SanctumService(http, baseUrl, prefix) {
          _classCallCheck(this, _SanctumService);

          this.http = http;
          this.baseUrl = baseUrl;
          this.prefix = prefix;
        }

        _createClass(_SanctumService, [{
          key: "load",
          value: function load() {
            return this.toObservable().toPromise();
          }
        }, {
          key: "toObservable",
          value: function toObservable() {
            return this.http.get(this.getUrl());
          }
        }, {
          key: "getUrl",
          value: function getUrl() {
            var prefix = this.prefix || 'sanctum';
            var path = "/".concat(prefix.replace(/^\/|\/$/g, ''), "/csrf-cookie");

            if (!this.baseUrl) {
              return path;
            }

            var url = new URL(this.baseUrl);
            return url.origin + path;
          }
        }]);

        return _SanctumService;
      }();

      _SanctumService.ɵfac = function SanctumService_Factory(t) {
        return new (t || _SanctumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_SANCTUM_PREFIX, 8));
      };

      _SanctumService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SanctumService,
        factory: _SanctumService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    10603:
    /*!****************************************************!*\
      !*** ./src/app/core/bootstrap/settings.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsService": function SettingsService() {
          return (
            /* binding */
            _SettingsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../settings */
      20881);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SettingsService = /*#__PURE__*/function () {
        function _SettingsService() {
          _classCallCheck(this, _SettingsService);

          this.options = _settings__WEBPACK_IMPORTED_MODULE_0__.defaults;
          this.notify$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
        }

        _createClass(_SettingsService, [{
          key: "notify",
          get: function get() {
            return this.notify$.asObservable();
          }
        }, {
          key: "setOptions",
          value: function setOptions(options) {
            this.options = Object.assign(_settings__WEBPACK_IMPORTED_MODULE_0__.defaults, options);
            this.notify$.next(this.options);
          }
        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.options;
          }
          /** System language */

        }, {
          key: "language",
          get: function get() {
            return this.options.language;
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.options.language = lang;
            this.notify$.next({
              lang: lang
            });
          }
        }]);

        return _SettingsService;
      }();

      _SettingsService.ɵfac = function SettingsService_Factory(t) {
        return new (t || _SettingsService)();
      };

      _SettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SettingsService,
        factory: _SettingsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    49675:
    /*!***************************************************!*\
      !*** ./src/app/core/bootstrap/startup.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartupService": function StartupService() {
          return (
            /* binding */
            _StartupService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      130);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu.service */
      38714);
      /* harmony import */


      var _authentication_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../authentication/token.service */
      54679);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-permissions */
      85470);

      var _StartupService = /*#__PURE__*/function () {
        function _StartupService(injector, route, token, menu, http, permissonsSrv, rolesSrv) {
          _classCallCheck(this, _StartupService);

          this.injector = injector;
          this.route = route;
          this.token = token;
          this.menu = menu;
          this.http = http;
          this.permissonsSrv = permissonsSrv;
          this.rolesSrv = rolesSrv;
          this.menuReq$ = this.http.get('/me/menu');
        }

        _createClass(_StartupService, [{
          key: "delay",
          value: function delay(ms, route) {
            var _this9 = this;

            // return new Promise( resolve => setTimeout(resolve, ms) );
            setTimeout(function () {
              //window.location.href="/dashboard";
              _this9.route.navigateByUrl('/dashboard');
            }, ms);
          }
          /** Load the application only after get the menu or other essential informations such as roles and permissions. */

        }, {
          key: "load",
          value: function load() {
            var _this10 = this;

            // debugger;
            var strcollectionName = window.location.href; //reqInfo.collectionName;

            strcollectionName = strcollectionName.substring(strcollectionName.lastIndexOf("/") + 1, strcollectionName.length);
            strcollectionName = strcollectionName.replace("%20", " ");
            return new Promise(function (resolve, reject) {
              _this10.token.change().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(function () {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.iif)(function () {
                  return _this10.token.valid();
                }, _this10.menuReq$, (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
                  menu: []
                }));
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
              })).subscribe(function (response) {
                // this.menu.addNamespace(response.menu, 'menu');
                _this10.menu.set(response.menu); // Demo purposes only. You can add essential permissions and roles with your own cases.


                var permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];

                _this10.permissonsSrv.loadPermissions(permissions);

                _this10.rolesSrv.addRoles({
                  ADMIN: permissions
                }); // Tips: Alternative you can add permissions with role at the same time.
                // this.rolesSrv.addRolesWithPermissions({ ADMIN: permissions });


                resolve(null); // debugger;

                var menu1 = response.menu;
                var flg = false;

                for (var i = 0; i < menu1.length; i++) {
                  for (var j = 0; j < menu1[i].children.length; j++) {
                    if (strcollectionName == menu1[i].children[j].name) {
                      flg = true;
                      break;
                    } else {
                      continue;
                    }
                  }

                  if (flg == true) {
                    break;
                  } else {
                    continue;
                  }
                } //const menu = JSON.parse(this.fetch('assets/data/menu.json?_t=' + Date.now())).menu;


                if (strcollectionName == "dashboard") {
                  return true;
                } else if (strcollectionName == "login") {
                  return true;
                } //if(flg==false && strcollectionName!="dashboard"){
                else if (flg == false) {
                  _this10.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService).info("you are not authorised for this page", "Info");

                  _this10.delay(2000, _this10.route);

                  return false;
                } else {
                  return false;
                }
              });
            });
          }
        }]);

        return _StartupService;
      }();

      _StartupService.ɵfac = function StartupService_Factory(t) {
        return new (t || _StartupService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_authentication_token_service__WEBPACK_IMPORTED_MODULE_1__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_11__.NgxPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_11__.NgxRolesService));
      };

      _StartupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _StartupService,
        factory: _StartupService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    40294:
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-import-guard */
      97802);
      /* harmony import */


      var _authentication_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication/api.service */
      92677);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CoreModule = /*#__PURE__*/_createClass(function _CoreModule(parentModule) {
        _classCallCheck(this, _CoreModule);

        (0, _module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
      });

      _CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_CoreModule, 12));
      };

      _CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_authentication_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
        });
      })();
      /***/

    },

    /***/
    3825:
    /*!*******************************!*\
      !*** ./src/app/core/index.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "defaults": function defaults() {
          return (
            /* reexport safe */
            _settings__WEBPACK_IMPORTED_MODULE_0__.defaults
          );
        },

        /* harmony export */
        "MenuService": function MenuService() {
          return (
            /* reexport safe */
            _bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService
          );
        },

        /* harmony export */
        "SettingsService": function SettingsService() {
          return (
            /* reexport safe */
            _bootstrap_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService
          );
        },

        /* harmony export */
        "StartupService": function StartupService() {
          return (
            /* reexport safe */
            _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_3__.StartupService
          );
        },

        /* harmony export */
        "PreloaderService": function PreloaderService() {
          return (
            /* reexport safe */
            _bootstrap_preloader_service__WEBPACK_IMPORTED_MODULE_4__.PreloaderService
          );
        },

        /* harmony export */
        "SANCTUM_PREFIX": function SANCTUM_PREFIX() {
          return (
            /* reexport safe */
            _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_5__.SANCTUM_PREFIX
          );
        },

        /* harmony export */
        "SanctumService": function SanctumService() {
          return (
            /* reexport safe */
            _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_5__.SanctumService
          );
        },

        /* harmony export */
        "CommanService": function CommanService() {
          return (
            /* reexport safe */
            _bootstrap_comman_service__WEBPACK_IMPORTED_MODULE_6__.CommanService
          );
        },

        /* harmony export */
        "httpInterceptorProviders": function httpInterceptorProviders() {
          return (
            /* reexport safe */
            _interceptors__WEBPACK_IMPORTED_MODULE_7__.httpInterceptorProviders
          );
        },

        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* reexport safe */
            _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard
          );
        },

        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* reexport safe */
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService
          );
        },

        /* harmony export */
        "TokenService": function TokenService() {
          return (
            /* reexport safe */
            _authentication_token_service__WEBPACK_IMPORTED_MODULE_10__.TokenService
          );
        },

        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* reexport safe */
            _authentication_api_service__WEBPACK_IMPORTED_MODULE_11__.ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings */
      20881);
      /* harmony import */


      var _bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bootstrap/menu.service */
      38714);
      /* harmony import */


      var _bootstrap_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bootstrap/settings.service */
      10603);
      /* harmony import */


      var _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bootstrap/startup.service */
      49675);
      /* harmony import */


      var _bootstrap_preloader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bootstrap/preloader.service */
      85115);
      /* harmony import */


      var _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bootstrap/sanctum.service */
      18863);
      /* harmony import */


      var _bootstrap_comman_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bootstrap/comman.service */
      42627);
      /* harmony import */


      var _interceptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./interceptors */
      72756);
      /* harmony import */


      var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./authentication/auth.guard */
      5428);
      /* harmony import */


      var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./authentication/auth.service */
      41219);
      /* harmony import */


      var _authentication_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./authentication/token.service */
      54679);
      /* harmony import */


      var _authentication_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./authentication/api.service */
      92677); // Bootstrap
      //export * from './bootstrap/translate-lang.service';
      // Interceptors
      // Authentication

      /***/

    },

    /***/
    69317:
    /*!**************************************!*\
      !*** ./src/app/core/initializers.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartupServiceFactory": function StartupServiceFactory() {
          return (
            /* binding */
            _StartupServiceFactory
          );
        },

        /* harmony export */
        "appInitializerProviders": function appInitializerProviders() {
          return (
            /* binding */
            _appInitializerProviders
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bootstrap/startup.service */
      49675); //import { TranslateLangService } from './bootstrap/translate-lang.service';
      // import { SanctumService } from './bootstrap/sanctum.service';
      //
      // export function SanctumServiceFactory(sanctumService: SanctumService) {
      //   return () => sanctumService.load();
      // }
      // export function TranslateLangServiceFactory(translateLangService: TranslateLangService) {
      //   return () => translateLangService.load();
      // }


      function _StartupServiceFactory(startupService) {
        return function () {
          return startupService.load();
        };
      }

      var _appInitializerProviders = [// {
      //   provide: APP_INITIALIZER,
      //   useFactory: SanctumServiceFactory,
      //   deps: [SanctumService],
      //   multi: true,
      // },
      // {
      //   provide: APP_INITIALIZER,
      //   useFactory: TranslateLangServiceFactory,
      //   deps: [TranslateLangService],
      //   multi: true,
      // },
      {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
        useFactory: _StartupServiceFactory,
        deps: [_bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_0__.StartupService],
        multi: true
      }];
      /***/
    },

    /***/
    28575:
    /*!***********************************************************!*\
      !*** ./src/app/core/interceptors/base-url-interceptor.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BASE_URL": function BASE_URL() {
          return (
            /* binding */
            _BASE_URL
          );
        },

        /* harmony export */
        "BaseUrlInterceptor": function BaseUrlInterceptor() {
          return (
            /* binding */
            _BaseUrlInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('BASE_URL');

      var _BaseUrlInterceptor = /*#__PURE__*/function () {
        function _BaseUrlInterceptor(baseUrl) {
          _classCallCheck(this, _BaseUrlInterceptor);

          this.baseUrl = baseUrl;
        }

        _createClass(_BaseUrlInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            return this.hasScheme(request.url) === false ? next.handle(request.clone({
              url: this.prependBaseUrl(request.url)
            })) : next.handle(request);
          }
        }, {
          key: "hasScheme",
          value: function hasScheme(url) {
            return this.baseUrl && new RegExp('^http(s)?://', 'i').test(url);
          }
        }, {
          key: "prependBaseUrl",
          value: function prependBaseUrl(url) {
            var _a;

            return [(_a = this.baseUrl) === null || _a === void 0 ? void 0 : _a.replace(/\/$/g, ''), url.replace(/^\.?\//, '')].filter(function (val) {
              return val;
            }).join('/');
          }
        }]);

        return _BaseUrlInterceptor;
      }();

      _BaseUrlInterceptor.ɵfac = function BaseUrlInterceptor_Factory(t) {
        return new (t || _BaseUrlInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_BASE_URL, 8));
      };

      _BaseUrlInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _BaseUrlInterceptor,
        factory: _BaseUrlInterceptor.ɵfac
      });
      /***/
    },

    /***/
    31678:
    /*!**********************************************************!*\
      !*** ./src/app/core/interceptors/default-interceptor.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DefaultInterceptor": function DefaultInterceptor() {
          return (
            /* binding */
            _DefaultInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      85816);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      83315);

      var _DefaultInterceptor = /*#__PURE__*/function () {
        function _DefaultInterceptor(router, toastr) {
          _classCallCheck(this, _DefaultInterceptor);

          this.router = router;
          this.toastr = toastr;
        }

        _createClass(_DefaultInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this11 = this;

            if (!req.url.includes('/api/')) {
              return next.handle(req);
            }

            return next.handle(req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function (event) {
              return _this11.handleOkReq(event);
            }));
          }
        }, {
          key: "handleOkReq",
          value: function handleOkReq(event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
              var body = event.body; // failure: { code: **, msg: 'failure' }
              // success: { code: 0,  msg: 'success', data: {} }

              if (body && 'code' in body && body.code !== 0) {
                if (body.msg && body.msg !== '') {
                  this.toastr.error(body.msg);
                }

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)([]);
              }
            } // Pass down event if everything is OK


            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(event);
          }
        }]);

        return _DefaultInterceptor;
      }();

      _DefaultInterceptor.ɵfac = function DefaultInterceptor_Factory(t) {
        return new (t || _DefaultInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
      };

      _DefaultInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _DefaultInterceptor,
        factory: _DefaultInterceptor.ɵfac
      });
      /***/
    },

    /***/
    47855:
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/error-interceptor.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "STATUS": function STATUS() {
          return (
            /* binding */
            _STATUS
          );
        },

        /* harmony export */
        "ErrorInterceptor": function ErrorInterceptor() {
          return (
            /* binding */
            _ErrorInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      83315);

      var _STATUS;

      (function (STATUS) {
        STATUS[STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
        STATUS[STATUS["FORBIDDEN"] = 403] = "FORBIDDEN";
        STATUS[STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
        STATUS[STATUS["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
      })(_STATUS || (_STATUS = {}));

      var _ErrorInterceptor = /*#__PURE__*/function () {
        function _ErrorInterceptor(router, toastr) {
          _classCallCheck(this, _ErrorInterceptor);

          this.router = router;
          this.toastr = toastr;
          this.errorPages = [_STATUS.UNAUTHORIZED, _STATUS.FORBIDDEN, _STATUS.NOT_FOUND, _STATUS.INTERNAL_SERVER_ERROR];
        }

        _createClass(_ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this12 = this;

            return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(function (error) {
              return _this12.handleError(error);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === _STATUS.UNAUTHORIZED) {
              this.router.navigateByUrl('/auth/login');
            } else if (this.errorPages.includes(error.status)) {
              this.router.navigateByUrl("/sessions/".concat(error.status), {
                skipLocationChange: true
              });
            } else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
              console.error('ERROR', error);
              this.toastr.error(error.error.msg || "".concat(error.status, " ").concat(error.statusText));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
          }
        }]);

        return _ErrorInterceptor;
      }();

      _ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || _ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
      };

      _ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ErrorInterceptor,
        factory: _ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    66643:
    /*!*************************************************************!*\
      !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpTokenInterceptor": function HttpTokenInterceptor() {
          return (
            /* binding */
            _HttpTokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/authentication/token.service */
      54679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HttpTokenInterceptor = /*#__PURE__*/function () {
        function _HttpTokenInterceptor(tokenService) {
          _classCallCheck(this, _HttpTokenInterceptor);

          this.tokenService = tokenService;
        }

        _createClass(_HttpTokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var headersConfig = {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            };

            if (this.tokenService.valid()) {
              var token = this.tokenService.get();

              if (token) {
                headersConfig.Authorization = "Bearer ".concat(token.accessToken);
              }
            }

            var request = req.clone({
              setHeaders: headersConfig
            });
            return next.handle(request);
          }
        }]);

        return _HttpTokenInterceptor;
      }();

      _HttpTokenInterceptor.ɵfac = function HttpTokenInterceptor_Factory(t) {
        return new (t || _HttpTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_authentication_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService));
      };

      _HttpTokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _HttpTokenInterceptor,
        factory: _HttpTokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    72756:
    /*!********************************************!*\
      !*** ./src/app/core/interceptors/index.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "httpInterceptorProviders": function httpInterceptorProviders() {
          return (
            /* binding */
            _httpInterceptorProviders
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./noop-interceptor */
      14421);
      /* harmony import */


      var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./base-url-interceptor */
      28575);
      /* harmony import */


      var _token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./token-interceptor */
      55756);
      /* harmony import */


      var _default_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./default-interceptor */
      31678);
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error-interceptor */
      47855);
      /* harmony import */


      var _logging_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logging-interceptor */
      94569);
      /* harmony import */


      var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./http.token.interceptor */
      66643); //import { SettingsInterceptor } from './settings-interceptor';
      //import { SanctumInterceptor } from './sanctum-interceptor';

      /** Http interceptor providers in outside-in order */


      var _httpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__.NoopInterceptor,
        multi: true
      }, // { provide: HTTP_INTERCEPTORS, useClass: SanctumInterceptor, multi: true },
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BaseUrlInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_2__.TokenInterceptor,
        multi: true
      }, //{ provide: HTTP_INTERCEPTORS, useClass: SettingsInterceptor, multi: true },
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _default_interceptor__WEBPACK_IMPORTED_MODULE_3__.DefaultInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _logging_interceptor__WEBPACK_IMPORTED_MODULE_5__.LoggingInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _http_token_interceptor__WEBPACK_IMPORTED_MODULE_6__.HttpTokenInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    94569:
    /*!**********************************************************!*\
      !*** ./src/app/core/interceptors/logging-interceptor.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoggingInterceptor": function LoggingInterceptor() {
          return (
            /* binding */
            _LoggingInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      71435);
      /* harmony import */


      var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/services/message.service */
      86199);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LoggingInterceptor = /*#__PURE__*/function () {
        function _LoggingInterceptor(messenger) {
          _classCallCheck(this, _LoggingInterceptor);

          this.messenger = messenger;
        }

        _createClass(_LoggingInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this13 = this;

            var started = Date.now();
            var ok; // extend server response observable with logging

            return next.handle(req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)( // Succeeds when there is a response; ignore other events
            function (event) {
              return ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? 'succeeded' : '';
            }, // Operation failed; error is an HttpErrorResponse
            function (error) {
              return ok = 'failed';
            }), // Log when response observable either completes or errors
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(function () {
              var elapsed = Date.now() - started;
              var msg = "".concat(req.method, " \"").concat(req.urlWithParams, "\" ").concat(ok, " in ").concat(elapsed, " ms.");

              _this13.messenger.add(msg);
            }));
          }
        }]);

        return _LoggingInterceptor;
      }();

      _LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) {
        return new (t || _LoggingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _LoggingInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _LoggingInterceptor,
        factory: _LoggingInterceptor.ɵfac
      });
      /***/
    },

    /***/
    14421:
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptors/noop-interceptor.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NoopInterceptor": function NoopInterceptor() {
          return (
            /* binding */
            _NoopInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NoopInterceptor = /*#__PURE__*/function () {
        function _NoopInterceptor() {
          _classCallCheck(this, _NoopInterceptor);
        }

        _createClass(_NoopInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            return next.handle(req);
          }
        }]);

        return _NoopInterceptor;
      }();

      _NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
        return new (t || _NoopInterceptor)();
      };

      _NoopInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NoopInterceptor,
        factory: _NoopInterceptor.ɵfac
      });
      /***/
    },

    /***/
    55756:
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/token-interceptor.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenInterceptor": function TokenInterceptor() {
          return (
            /* binding */
            _TokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _authentication_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../authentication/token.service */
      54679);
      /* harmony import */


      var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./base-url-interceptor */
      28575);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _TokenInterceptor = /*#__PURE__*/function () {
        function _TokenInterceptor(token, router, baseUrl) {
          _classCallCheck(this, _TokenInterceptor);

          this.token = token;
          this.router = router;
          this.baseUrl = baseUrl;
        }

        _createClass(_TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this14 = this;

            var logoutHandler = function logoutHandler() {
              if (request.url.includes('/auth/logout')) {
                _this14.router.navigateByUrl('/auth/login');
              }
            };

            if (this.token.valid() && this.shouldAppendToken(request.url)) {
              return next.handle(request.clone({
                headers: request.headers.append('Authorization', this.token.headerValue()),
                withCredentials: true
              })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function () {
                return logoutHandler();
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (error) {
                if (error.status === 401) {
                  _this14.token.clear();
                }

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
              }));
            }

            return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function () {
              return logoutHandler();
            }));
          }
        }, {
          key: "shouldAppendToken",
          value: function shouldAppendToken(url) {
            return !this.hasHttpScheme(url) || this.includeBaseUrl(url);
          }
        }, {
          key: "hasHttpScheme",
          value: function hasHttpScheme(url) {
            return new RegExp('^http(s)?://', 'i').test(url);
          }
        }, {
          key: "includeBaseUrl",
          value: function includeBaseUrl(url) {
            if (!this.baseUrl) {
              return false;
            }

            var baseUrl = this.baseUrl.replace(/\/$/, '');
            return new RegExp("^".concat(baseUrl), 'i').test(url);
          }
        }]);

        return _TokenInterceptor;
      }();

      _TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || _TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_authentication_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, 8));
      };

      _TokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _TokenInterceptor,
        factory: _TokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    97802:
    /*!*********************************************!*\
      !*** ./src/app/core/module-import-guard.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "throwIfAlreadyLoaded": function throwIfAlreadyLoaded() {
          return (
            /* binding */
            _throwIfAlreadyLoaded
          );
        }
        /* harmony export */

      });

      function _throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    20881:
    /*!**********************************!*\
      !*** ./src/app/core/settings.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "defaults": function defaults() {
          return (
            /* binding */
            _defaults
          );
        }
        /* harmony export */

      });

      var _defaults = {
        navPos: 'side',
        dir: 'ltr',
        theme: 'light',
        showHeader: true,
        headerPos: 'fixed',
        showUserPanel: true,
        sidenavOpened: true,
        sidenavCollapsed: false,
        language: 'en-US'
      };
      /***/
    },

    /***/
    58967:
    /*!************************************!*\
      !*** ./src/app/material-config.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "materialProviders": function materialProviders() {
          return (
            /* binding */
            _materialProviders
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _mat_datetimepicker_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @mat-datetimepicker/moment */
      16877);
      /* harmony import */


      var _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @mat-datetimepicker/core */
      77115);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _shared_services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/services/paginator-i18n.service */
      23350);

      var _materialProviders = [{
        provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__.MatPaginatorIntl,
        deps: [_shared_services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__.PaginatorI18nService],
        useFactory: function useFactory(paginatorI18nSrv) {
          return paginatorI18nSrv.getPaginatorIntl();
        }
      }, {
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DEFAULT_OPTIONS,
        useValue: Object.assign({}, new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogConfig())
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.DateAdapter,
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__.MomentDateAdapter,
        deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      }, // This will be overrided by runtime setting
      {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_LOCALE,
        useFactory: function useFactory() {
          return navigator.language;
        }
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_FORMATS,
        useValue: {
          parse: {
            dateInput: 'YYYY-MM-DD'
          },
          display: {
            dateInput: 'YYYY-MM-DD',
            monthYearLabel: 'YYYY MMM',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'YYYY MMM'
          }
        }
      }, _mat_datetimepicker_moment__WEBPACK_IMPORTED_MODULE_5__.MomentDatetimeAdapter, {
        provide: _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_6__.DatetimeAdapter,
        useClass: _mat_datetimepicker_moment__WEBPACK_IMPORTED_MODULE_5__.MomentDatetimeAdapter
      }, {
        provide: _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATETIME_FORMATS,
        useValue: {
          parse: {
            dateInput: 'YYYY-MM-DD HH:mm',
            monthInput: 'MMMM',
            timeInput: 'HH:mm',
            datetimeInput: 'YYYY-MM-DD HH:mm'
          },
          display: {
            dateInput: 'YYYY-MM-DD HH:mm',
            monthInput: 'MMMM',
            datetimeInput: 'YYYY-MM-DD HH:mm',
            timeInput: 'HH:mm',
            monthYearLabel: 'YYYY MMM',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
            popupHeaderDateLabel: 'MMMM DD, ddd'
          }
        }
      }];
      /***/
    },

    /***/
    63806:
    /*!************************************!*\
      !*** ./src/app/material.module.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      80395);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/portal */
      40912);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      43285);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/table */
      72306);
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/tree */
      85443);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      76322);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      53894);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/radio */
      15644);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      32080);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/slider */
      53616);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      48210);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/tree */
      75473);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @mat-datetimepicker/core */
      77115);
      /* harmony import */


      var _mat_datetimepicker_moment__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @mat-datetimepicker/moment */
      16877);
      /* harmony import */


      var _material_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material-config */
      58967);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316); // 3rd library


      var _MaterialModule = /*#__PURE__*/_createClass(function _MaterialModule() {
        _classCallCheck(this, _MaterialModule);
      });

      _MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || _MaterialModule)();
      };

      _MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MaterialModule
      });
      _MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [_material_config__WEBPACK_IMPORTED_MODULE_0__.materialProviders],
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_19__.MatMomentDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__.MatTreeModule, _mat_datetimepicker_moment__WEBPACK_IMPORTED_MODULE_44__.MatMomentDatetimeModule, _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_45__.MatDatetimepickerModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MaterialModule, {
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_19__.MatMomentDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__.MatTreeModule, _mat_datetimepicker_moment__WEBPACK_IMPORTED_MODULE_44__.MatMomentDatetimeModule, _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_45__.MatDatetimepickerModule]
        });
      })();
      /***/

    },

    /***/
    2408:
    /*!*********************************************************!*\
      !*** ./src/app/routes/dashboard/dashboard.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _dashboard_srevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.srevice */
      42953);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-matero/extensions/progress */
      46787);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      var _c0 = function _c0(a1) {
        return ["text-white", a1];
      };

      function DashboardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-title", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mtx-progress", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Monthly");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stat_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, stat_r12.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r12.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r12.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", stat_r12.progress.value);
        }
      }

      function DashboardComponent_mat_list_item_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", message_r13.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", message_r13.subject, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", message_r13.content, " ");
        }
      }

      function DashboardComponent_th_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.position, " ");
        }
      }

      function DashboardComponent_th_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15.name, " ");
        }
      }

      function DashboardComponent_th_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Weight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r16.weight, " ");
        }
      }

      function DashboardComponent_th_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Symbol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r17.symbol, " ");
        }
      }

      function DashboardComponent_tr_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 56);
        }
      }

      function DashboardComponent_tr_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 57);
        }
      }

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent(ngZone, dashboardSrv, settings) {
          _classCallCheck(this, _DashboardComponent);

          this.ngZone = ngZone;
          this.dashboardSrv = dashboardSrv;
          this.settings = settings;
          this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
          this.dataSource = this.dashboardSrv.getData();
          this.messages = this.dashboardSrv.getMessages();
          this.charts = this.dashboardSrv.getCharts();
          this.stats = this.dashboardSrv.getStats();
        }

        _createClass(_DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.notifySubscription = this.settings.notify.subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this15 = this;

            this.ngZone.runOutsideAngular(function () {
              return _this15.initChart();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a, _b;

            if (this.chart1) {
              (_a = this.chart1) === null || _a === void 0 ? void 0 : _a.destroy();
            }

            if (this.chart2) {
              (_b = this.chart2) === null || _b === void 0 ? void 0 : _b.destroy();
            }

            this.notifySubscription.unsubscribe();
          }
        }, {
          key: "initChart",
          value: function initChart() {
            var _a, _b;

            this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
            (_a = this.chart1) === null || _a === void 0 ? void 0 : _a.render();
            this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
            (_b = this.chart2) === null || _b === void 0 ? void 0 : _b.render();
          }
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_srevice__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_dashboard_srevice__WEBPACK_IMPORTED_MODULE_1__.DashboardService])],
        decls: 121,
        vars: 5,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["class", "matero-col", "fxFlex.gt-sm", "25", "fxFlex.gt-xs", "50", "fxFlex", "100", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "60", 1, "matero-col"], ["id", "chart1"], ["fxFlex", "100", "fxFlex.gt-sm", "40", 1, "matero-col"], ["id", "chart2"], ["fxFlex.gt-sm", "50", "fxFlex", "100", 1, "matero-col"], [1, "m--16"], ["label", "First"], [1, "m-16"], ["src", "assets/images/avatar.png", "alt", "", 1, "d-block", "w-full"], ["label", "Second"], ["label", "Third"], ["cols", "2"], [1, "bg-red-50"], [1, "bg-purple-50"], [1, "bg-orange-50"], [1, "bg-cyan-50"], [4, "ngFor", "ngForOf"], ["mat-table", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""], ["color", "warn", "selected", ""], ["selected", "", 1, "bg-orange-500"], ["selected", "", 1, "bg-teal-500"], ["selected", "", 1, "bg-cyan-500"], ["selected", "", 1, "bg-purple-500"], ["selected", "", 1, "bg-green-500"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-raised-button", "", 1, "bg-orange-500", "text-white"], ["mat-raised-button", "", 1, "bg-teal-500", "text-white"], ["mat-raised-button", "", 1, "bg-cyan-500", "text-white"], ["mat-raised-button", "", 1, "bg-purple-500", "text-white"], ["mat-raised-button", "", 1, "bg-green-500", "text-white"], ["fxFlex.gt-sm", "25", "fxFlex.gt-xs", "50", "fxFlex", "100", 1, "matero-col"], [3, "ngClass"], [1, "f-s-12", "f-w-100"], ["height", "2px", "foreground", "rgba(255,255,255,1)", "background", "rgba(0,0,0,.5)", 3, "value"], [1, "text-muted"], ["matListAvatar", "", "alt", "", 3, "src"], ["matLine", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 10, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Traffic");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Weekly Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-tab-group", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia at, ornare ac eros. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-tab", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Album");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-grid-list", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-grid-tile", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-grid-tile", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-grid-tile", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-grid-tile", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Avatar List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, DashboardComponent_mat_list_item_55_Template, 7, 3, "mat-list-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Revenue Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](61, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, DashboardComponent_th_62_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, DashboardComponent_td_63_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](64, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, DashboardComponent_th_65_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, DashboardComponent_td_66_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](67, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, DashboardComponent_th_68_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, DashboardComponent_td_69_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](70, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, DashboardComponent_th_71_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, DashboardComponent_td_72_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, DashboardComponent_tr_73_Template, 1, 0, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, DashboardComponent_tr_74_Template, 1, 0, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Chips & Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "One fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "mat-chip", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Primary fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "mat-chip", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Accent fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "mat-chip", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Two fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "mat-chip", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Orange fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-chip", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Teal fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "mat-chip", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Cyan fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "mat-chip", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Purple fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "mat-chip", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Green fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Orange");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Teal");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Cyan");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Purple");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.stats);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridTile, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatList, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChip, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_15__.MtxProgressComponent, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatLine, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
        styles: [".mat-raised-button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        margin-top: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsaUJBQWlCO1FBQ2pCLGVBQWU7TUFDakIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    42953:
    /*!*******************************************************!*\
      !*** ./src/app/routes/dashboard/dashboard.srevice.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardService": function DashboardService() {
          return (
            /* binding */
            _DashboardService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne'
      }];
      var MESSAGES = [{
        img: 'assets/images/avatar.png',
        subject: 'Hydrogen',
        content: "Cras sit amet nibh libero, in gravida nulla.\n     Nulla vel metus scelerisque ante sollicitudin commodo."
      }, {
        img: 'assets/images/avatar.png',
        subject: 'Helium',
        content: "Cras sit amet nibh libero, in gravida nulla.\n     Nulla vel metus scelerisque ante sollicitudin commodo."
      }, {
        img: 'assets/images/avatar.png',
        subject: 'Lithium',
        content: "Cras sit amet nibh libero, in gravida nulla.\n     Nulla vel metus scelerisque ante sollicitudin commodo."
      }, {
        img: 'assets/images/avatar.png',
        subject: 'Beryllium',
        content: "Cras sit amet nibh libero, in gravida nulla.\n     Nulla vel metus scelerisque ante sollicitudin commodo."
      }, {
        img: 'assets/images/avatar.png',
        subject: 'Boron',
        content: "Cras sit amet nibh libero, in gravida nulla.\n     Nulla vel metus scelerisque ante sollicitudin commodo."
      }];

      var _DashboardService = /*#__PURE__*/function () {
        function _DashboardService(http) {
          _classCallCheck(this, _DashboardService);

          this.http = http;
          this.stats = [{
            title: 'Total Sales',
            amount: '180,200',
            progress: {
              value: 50
            },
            color: 'bg-indigo-500'
          }, {
            title: 'Revenue',
            amount: '70,205',
            progress: {
              value: 70
            },
            color: 'bg-blue-500'
          }, {
            title: 'Traffic',
            amount: '1,291,922',
            progress: {
              value: 80
            },
            color: 'bg-green-500'
          }, {
            title: 'New User',
            amount: '1,922',
            progress: {
              value: 40
            },
            color: 'bg-teal-500'
          }];
          this.charts = [{
            chart: {
              height: 350,
              type: 'area',
              toolbar: false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            series: [{
              name: 'UV',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'Download',
              data: [11, 32, 45, 32, 34, 52, 41]
            }],
            xaxis: {
              type: 'datetime',
              categories: ['2019-11-24T00:00:00', '2019-11-24T01:30:00', '2019-11-24T02:30:00', '2019-11-24T03:30:00', '2019-11-24T04:30:00', '2019-11-24T05:30:00', '2019-11-24T06:30:00']
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              }
            },
            legend: {
              position: 'top',
              horizontalAlign: 'right'
            }
          }, {
            chart: {
              height: 350,
              type: 'radar'
            },
            series: [{
              name: 'Weekly Revenue',
              data: [20, 100, 40, 30, 50, 80, 33]
            }],
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            plotOptions: {
              radar: {
                size: 140,
                polygons: {
                  strokeColor: '#e9e9e9',
                  fill: {
                    colors: ['#f8f8f8', '#fff']
                  }
                }
              }
            },
            colors: ['#FF4560'],
            markers: {
              size: 4,
              colors: ['#fff'],
              strokeColor: '#FF4560',
              strokeWidth: 2
            },
            tooltip: {
              y: {
                formatter: function formatter(val) {
                  return val;
                }
              }
            },
            yaxis: {
              tickAmount: 7,
              labels: {
                formatter: function formatter(val, i) {
                  if (i % 2 === 0) {
                    return val;
                  } else {
                    return '';
                  }
                }
              }
            }
          }];
        }

        _createClass(_DashboardService, [{
          key: "getData",
          value: function getData() {
            return ELEMENT_DATA;
          }
        }, {
          key: "getMessages",
          value: function getMessages() {
            return MESSAGES;
          }
        }, {
          key: "getCharts",
          value: function getCharts() {
            return this.charts;
          }
        }, {
          key: "getStats",
          value: function getStats() {
            return this.stats;
          }
        }]);

        return _DashboardService;
      }();

      _DashboardService.ɵfac = function DashboardService_Factory(t) {
        return new (t || _DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _DashboardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _DashboardService,
        factory: _DashboardService.ɵfac
      });
      /***/
    },

    /***/
    52200:
    /*!**************************************************************!*\
      !*** ./src/app/routes/renderer/button-renderer.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonRendererComponent": function ButtonRendererComponent() {
          return (
            /* binding */
            _ButtonRendererComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ButtonRendererComponent = /*#__PURE__*/function () {
        function _ButtonRendererComponent() {
          _classCallCheck(this, _ButtonRendererComponent);
        }

        _createClass(_ButtonRendererComponent, [{
          key: "agInit",
          value: function agInit(params) {
            this.params = params;
            this.label = this.params.label || null;
          }
        }, {
          key: "refresh",
          value: function refresh(params) {
            return true;
          }
        }, {
          key: "onClick",
          value: function onClick($event) {
            if (this.params.onClick instanceof Function) {
              // put anything into params u want pass into parents component
              var params = {
                event: $event,
                rowData: this.params.node.data // ...something

              };
              this.params.onClick(params);
            }
          }
        }]);

        return _ButtonRendererComponent;
      }();

      _ButtonRendererComponent.ɵfac = function ButtonRendererComponent_Factory(t) {
        return new (t || _ButtonRendererComponent)();
      };

      _ButtonRendererComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonRendererComponent,
        selectors: [["app-button-renderer"]],
        decls: 2,
        vars: 1,
        consts: [["type", "button", 3, "click"]],
        template: function ButtonRendererComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonRendererComponent_Template_button_click_0_listener($event) {
              return ctx.onClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    26706:
    /*!*************************************************!*\
      !*** ./src/app/routes/routes-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoutesRoutingModule": function RoutesRoutingModule() {
          return (
            /* binding */
            _RoutesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      92340);
      /* harmony import */


      var _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../theme/admin-layout/admin-layout.component */
      36200);
      /* harmony import */


      var _theme_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../theme/auth-layout/auth-layout.component */
      84951);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      2408);
      /* harmony import */


      var _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sessions/login/login.component */
      80039);
      /* harmony import */


      var _core_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/authentication/auth.guard */
      5428);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdminLayoutComponent,
        canActivate: [_core_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
        canActivateChild: [_core_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
        children: [{
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_forms_forms_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./forms/forms.module */
            21257)).then(function (m) {
              return m.FormsModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_tables_tables_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./tables/tables.module */
            31926)).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'sessions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_sessions_sessions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./sessions/sessions.module */
            29174)).then(function (m) {
              return m.SessionsModule;
            });
          }
        }, {
          path: 'master',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_master_master_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./master/master.module */
            94494)).then(function (m) {
              return m.MasterModule;
            });
          }
        }, {
          path: 'genericmaster',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_generic-master_generic-master_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./generic-master/generic-master.module */
            17500)).then(function (m) {
              return m.GenericMasterModule;
            });
          }
        }, {
          path: 'process',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_process_process_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./process/process.module */
            42603)).then(function (m) {
              return m.ProcessModule;
            });
          }
        }, {
          path: 'setup',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_setup_setup_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./setup/setup.module */
            84230)).then(function (m) {
              return m.SetupModule;
            });
          }
        }, {
          path: 'Rate Management',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_rate-management_rate-management_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./rate-management/rate-management.module */
            49325)).then(function (m) {
              return m.RateManagementModule;
            });
          }
        }, {
          path: 'customers',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_customers_customers_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./customers/customers.module */
            31009)).then(function (m) {
              return m.CustomersModule;
            });
          }
        }, {
          path: 'Accounts',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_routes_accounts_accounts_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./accounts/accounts.module */
            13067)).then(function (m) {
              return m.AccountsModule;
            });
          }
        }]
      }, {
        path: 'auth',
        component: _theme_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
        children: [{
          path: 'login',
          component: _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
        } // { path: 'register', component: RegisterComponent },
        ]
      }, {
        path: '**',
        redirectTo: 'dashboard'
      }];

      var _RoutesRoutingModule = /*#__PURE__*/_createClass(function _RoutesRoutingModule() {
        _classCallCheck(this, _RoutesRoutingModule);
      });

      _RoutesRoutingModule.ɵfac = function RoutesRoutingModule_Factory(t) {
        return new (t || _RoutesRoutingModule)();
      };

      _RoutesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _RoutesRoutingModule
      });
      _RoutesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
          useHash: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useHash,
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_RoutesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    87951:
    /*!*****************************************!*\
      !*** ./src/app/routes/routes.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoutesModule": function RoutesModule() {
          return (
            /* binding */
            _RoutesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);
      /* harmony import */


      var _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./routes-routing.module */
      26706);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      2408);
      /* harmony import */


      var _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sessions/login/login.component */
      80039);
      /* harmony import */


      var _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sessions/register/register.component */
      85093);
      /* harmony import */


      var _renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./renderer/button-renderer.component */
      52200);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var COMPONENTS = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent];
      var COMPONENTS_DYNAMIC = [];

      var _RoutesModule = /*#__PURE__*/_createClass(function _RoutesModule() {
        _classCallCheck(this, _RoutesModule);
      });

      _RoutesModule.ɵfac = function RoutesModule_Factory(t) {
        return new (t || _RoutesModule)();
      };

      _RoutesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _RoutesModule
      });
      _RoutesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutesRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_RoutesModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_5__.ButtonRendererComponent],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutesRoutingModule]
        });
      })();
      /***/

    },

    /***/
    80039:
    /*!**********************************************************!*\
      !*** ./src/app/routes/sessions/login/login.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/authentication/auth.service */
      41219);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-matero/extensions/loader */
      32775);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../register/register.component */
      85093);

      function LoginComponent_ng_template_0_mat_error_10_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter Username ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_0_mat_error_10_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.username == null ? null : ctx_r5.username.errors == null ? null : ctx_r5.username.errors.remote, " ");
        }
      }

      function LoginComponent_ng_template_0_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_ng_template_0_mat_error_10_span_1_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_ng_template_0_mat_error_10_span_2_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors.remote);
        }
      }

      function LoginComponent_ng_template_0_mat_error_15_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_0_mat_error_15_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.password == null ? null : ctx_r7.password.errors == null ? null : ctx_r7.password.errors.remote, " ");
        }
      }

      function LoginComponent_ng_template_0_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_ng_template_0_mat_error_15_span_1_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_ng_template_0_mat_error_15_span_2_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors == null ? null : ctx_r3.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors == null ? null : ctx_r3.password.errors.remote);
        }
      }

      function LoginComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mtx-loader", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, LoginComponent_ng_template_0_mat_error_10_Template, 3, 2, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LoginComponent_ng_template_0_mat_error_15_Template, 3, 2, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Remember Me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_ng_template_0_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx_r0.loading)("color", "primary")("hasBackdrop", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.username == null ? null : ctx_r0.username.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.password == null ? null : ctx_r0.password.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.loginForm == null ? null : ctx_r0.loginForm.invalid);
        }
      }

      function LoginComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-register", 13);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("warehouses", ctx_r1.warehouseList)("yearList", ctx_r1.FinantialYears);
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(fb, router, auth, token, store) {
          _classCallCheck(this, _LoginComponent);

          this.fb = fb;
          this.router = router;
          this.auth = auth;
          this.token = token;
          this.store = store;
          this.loading = false;
          this.isAuthenticate = false;
        }

        _createClass(_LoginComponent, [{
          key: "isUserLoggedIn",
          value: function isUserLoggedIn() {
            if (this.token.valid()) {
              var currentUser = this.store.get("currentUser");

              if (currentUser) {
                this.router.navigateByUrl('/dashboard');
              }
            } else {
              this.store.clear();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isUserLoggedIn();
            this.loginForm = this.fb.group({
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              remember_me: [false]
            });
          }
        }, {
          key: "username",
          get: function get() {
            return this.loginForm.get('username');
          }
        }, {
          key: "password",
          get: function get() {
            return this.loginForm.get('password');
          }
        }, {
          key: "rememberMe",
          get: function get() {
            return this.loginForm.get('remember_me');
          }
        }, {
          key: "login",
          value: function login() {
            var _a, _b, _c;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this16 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loading = true;
                      _context.next = 3;
                      return this.auth.login((_a = this.username) === null || _a === void 0 ? void 0 : _a.value, (_b = this.password) === null || _b === void 0 ? void 0 : _b.value, (_c = this.rememberMe) === null || _c === void 0 ? void 0 : _c.value) //.pipe(filter(authenticated => authenticated))
                      .subscribe(function (data) {
                        if (data) {
                          _this16.isAuthenticate = true;

                          if (data.warehouseList) {
                            _this16.warehouseList = data.warehouseList;
                            _this16.FinantialYears = data.finantialYears; //console.log(data)
                          } //this.router.navigate(['auth/register'], {queryParams:{warehouses:warehouselist}});
                          //this.router.navigateByUrl('auth/register',warehouselist);

                        } else {
                          _this16.loading = false;
                          var form = _this16.loginForm;
                          form.controls.password.setErrors({
                            remote: 'The provided username or password is incorrect.'
                          });
                          form.controls.username.setErrors({
                            remote: ''
                          });
                        }
                      }, function (error) {
                        _this16.loading = false;
                        console.error("Error: " + error.message);

                        if (error.status === 422) {
                          var form = _this16.loginForm;
                          var errors = error.error.errors;
                          Object.keys(errors).forEach(function (key) {
                            var _a;

                            (_a = form.get(key === 'username' ? 'username' : key)) === null || _a === void 0 ? void 0 : _a.setErrors({
                              remote: errors[key][0]
                            });
                          });
                        }
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 2,
        vars: 2,
        consts: [[3, "ngIf"], ["fxLayout", "row wrap", 1, "w-full", "h-full"], [1, "mat-elevation-z4", "m-auto", 2, "max-width", "380px"], [1, "text-center", "m-b-24"], ["type", "spinner", 3, "loading", "color", "hasBackdrop"], [1, "form-field-full", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "placeholder", "Username", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "type", "password", "formControlName", "password", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "m-y-16"], ["formControlName", "remember_me"], ["mat-raised-button", "", "color", "primary", 1, "w-full", 3, "disabled", "click"], [3, "warehouses", "yearList"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LoginComponent_ng_template_0_Template, 21, 7, "ng-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_ng_template_1_Template, 1, 2, "ng-template", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isAuthenticate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAuthenticate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_11__.MtxLoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    85093:
    /*!****************************************************************!*\
      !*** ./src/app/routes/sessions/register/register.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterComponent": function RegisterComponent() {
          return (
            /* binding */
            _RegisterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      70781);

      function RegisterComponent_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r4.FinancialYearID);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r4.FY_Name, " ");
        }
      }

      function RegisterComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " FinantialYear is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", i_r5.WarehouseID);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", i_r5.WareHouseName, " ");
        }
      }

      function RegisterComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Warehouse is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _RegisterComponent = /*#__PURE__*/function () {
        function _RegisterComponent(fb, router, api, store, token) {
          _classCallCheck(this, _RegisterComponent);

          this.fb = fb;
          this.router = router;
          this.api = api;
          this.store = store;
          this.token = token;
          this.selectedYear = 0;
          this.warehouse = 0;
          this.FinantialYears = [];
          this.warehouselist = [];
          this.isMultiWarehouses = false;
          this.registerForm = this.fb.group({
            finantialYearId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            warehouseId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
          });
        }

        _createClass(_RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.warehouselist = this.warehouses;
            this.FinantialYears = this.yearList;
            var currentUser = JSON.parse(this.store.get("currentUser"));
            this.selectedYear = this.yearList[0].FinancialYearID;
            this.warehouse = currentUser.warehouseId;
          }
        }, {
          key: "finantialYearId",
          get: function get() {
            return this.registerForm.get('finantialYearId');
          }
        }, {
          key: "warehouseId",
          get: function get() {
            return this.registerForm.get('warehouseId');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a, _b;

            var currentUser = JSON.parse(this.store.get("currentUser"));
            var token = this.store.get("token");
            currentUser.warehouseId = (_a = this.warehouseId) === null || _a === void 0 ? void 0 : _a.value;
            currentUser.FinantialYearId = (_b = this.finantialYearId) === null || _b === void 0 ? void 0 : _b.value;
            this.store.clear();
            this.store.set("currentUser", JSON.stringify(currentUser));
            this.token.save(token);
            this.router.navigateByUrl('/'); //this.router.navigate(['/']);
          }
        }]);

        return _RegisterComponent;
      }();

      _RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || _RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.TokenService));
      };

      _RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _RegisterComponent,
        selectors: [["app-register"]],
        inputs: {
          warehouses: "warehouses",
          yearList: "yearList"
        },
        decls: 24,
        vars: 7,
        consts: [["fxLayout", "row wrap", 1, "w-full", "h-full"], [1, "mat-elevation-z4", "m-auto", 2, "max-width", "380px"], [1, "text-center", "m-b-24"], [1, "form-field-full", 3, "formGroup"], ["appearance", "outline"], ["formControlName", "finantialYearId", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "warehouseId", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "w-full", 3, "click"], [1, "m-t-16"], ["routerLink", "/auth/login"], [3, "value"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Welcome ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Finantial year");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_mat_select_ngModelChange_8_listener($event) {
              return ctx.selectedYear = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RegisterComponent_mat_option_10_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RegisterComponent_mat_error_11_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Warehouse");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_mat_select_ngModelChange_15_listener($event) {
              return ctx.warehouse = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegisterComponent_mat_option_16_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterComponent_mat_error_17_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_18_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Back to Login? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_3_0;
            var tmp_6_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedYear);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.FinantialYears);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.registerForm.get("finantialYearId")) == null ? null : tmp_3_0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.warehouse);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.warehouselist);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.registerForm.get("warehouseId")) == null ? null : tmp_6_0.invalid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        encapsulation: 2
      });
      /***/
    },

    /***/
    41299:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbComponent": function BreadcrumbComponent() {
          return (
            /* binding */
            _BreadcrumbComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/bootstrap/menu.service */
      38714);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var navlink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](navlink_r1);
        }
      }

      function BreadcrumbComponent_li_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var navlink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](navlink_r1);
        }
      }

      function BreadcrumbComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_ng_container_2_Template, 5, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var isFirst_r2 = ctx.first;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isFirst_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isFirst_r2);
        }
      }

      var _BreadcrumbComponent = /*#__PURE__*/function () {
        function _BreadcrumbComponent(router, menu) {
          _classCallCheck(this, _BreadcrumbComponent);

          this.router = router;
          this.menu = menu;
          this.nav = [];
        }

        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav = Array.isArray(this.nav) ? this.nav : [];

            if (this.nav.length === 0) {
              this.genBreadcrumb();
            }
          }
        }, {
          key: "trackByNavlink",
          value: function trackByNavlink(index, navlink) {
            return navlink;
          }
        }, {
          key: "genBreadcrumb",
          value: function genBreadcrumb() {
            var routes = this.router.url.slice(1).split('/');
            this.nav = this.menu.getLevel(routes);
            this.nav.unshift('home');
          }
        }]);

        return _BreadcrumbComponent;
      }();

      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
      };

      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["breadcrumb"]],
        inputs: {
          nav: "nav"
        },
        decls: 3,
        vars: 2,
        consts: [["aria-label", "breadcrumb"], [1, "matero-breadcrumb"], ["class", "matero-breadcrumb-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "matero-breadcrumb-item"], ["href", "#", "class", "link", 4, "ngIf"], [4, "ngIf"], ["href", "#", 1, "link"], [1, "chevron"], [1, "link"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nav)("ngForTrackBy", ctx.trackByNavlink);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
        styles: [".matero-breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-bottom: 1rem;\n  list-style: none;\n  font-size: 0.875rem;\n}\n\n.matero-breadcrumb-item {\n  line-height: 18px;\n  text-transform: capitalize;\n}\n\n.matero-breadcrumb-item > a {\n  color: currentColor;\n}\n\n.matero-breadcrumb-item > a:hover {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.matero-breadcrumb-item > .chevron {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.matero-breadcrumb-item > .link {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDRTtFQUNFLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0FBQ047O0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxzQkFBQTtBQUZKIiwiZmlsZSI6ImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJvLWJyZWFkY3J1bWIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxufVxyXG5cclxuLm1hdGVyby1icmVhZGNydW1iLWl0ZW0ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICA+IGEge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IC5jaGV2cm9uIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgPiAubGluayB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    46947:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/error-code/error-code.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorCodeComponent": function ErrorCodeComponent() {
          return (
            /* binding */
            _ErrorCodeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function ErrorCodeComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      function ErrorCodeComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
        }
      }

      var _ErrorCodeComponent = /*#__PURE__*/_createClass(function _ErrorCodeComponent() {
        _classCallCheck(this, _ErrorCodeComponent);

        this.code = '';
        this.title = '';
        this.message = '';
      });

      _ErrorCodeComponent.ɵfac = function ErrorCodeComponent_Factory(t) {
        return new (t || _ErrorCodeComponent)();
      };

      _ErrorCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ErrorCodeComponent,
        selectors: [["error-code"]],
        inputs: {
          code: "code",
          title: "title",
          message: "message"
        },
        decls: 8,
        vars: 3,
        consts: [[1, "matero-error-wrap"], [1, "matero-error-code"], ["class", "matero-error-title", 4, "ngIf"], ["class", "matero-error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"], [1, "matero-error-title"], [1, "matero-error-message"]],
        template: function ErrorCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ErrorCodeComponent_div_3_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ErrorCodeComponent_div_4_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: [".matero-error-wrap {\n  text-align: center;\n}\n\n.matero-error-code {\n  padding: 20px 0;\n  font-size: 150px;\n  text-shadow: 2.1213203436px 2.1213203436px 0 rgba(0, 0, 0, 0.028575), 4.2426406871px 4.2426406871px 0 rgba(0, 0, 0, 0.02715), 6.3639610307px 6.3639610307px 0 rgba(0, 0, 0, 0.025725), 8.4852813742px 8.4852813742px 0 rgba(0, 0, 0, 0.0243), 10.6066017178px 10.6066017178px 0 rgba(0, 0, 0, 0.022875), 12.7279220614px 12.7279220614px 0 rgba(0, 0, 0, 0.02145), 14.8492424049px 14.8492424049px 0 rgba(0, 0, 0, 0.020025), 16.9705627485px 16.9705627485px 0 rgba(0, 0, 0, 0.0186), 19.091883092px 19.091883092px 0 rgba(0, 0, 0, 0.017175), 21.2132034356px 21.2132034356px 0 rgba(0, 0, 0, 0.01575), 23.3345237792px 23.3345237792px 0 rgba(0, 0, 0, 0.014325), 25.4558441227px 25.4558441227px 0 rgba(0, 0, 0, 0.0129), 27.5771644663px 27.5771644663px 0 rgba(0, 0, 0, 0.011475), 29.6984848098px 29.6984848098px 0 rgba(0, 0, 0, 0.01005), 31.8198051534px 31.8198051534px 0 rgba(0, 0, 0, 0.008625), 33.941125497px 33.941125497px 0 rgba(0, 0, 0, 0.0072), 36.0624458405px 36.0624458405px 0 rgba(0, 0, 0, 0.005775), 38.1837661841px 38.1837661841px 0 rgba(0, 0, 0, 0.00435), 40.3050865276px 40.3050865276px 0 rgba(0, 0, 0, 0.002925), 42.4264068712px 42.4264068712px 0 rgba(0, 0, 0, 0.0015);\n}\n\n.matero-error-title {\n  margin: 0 0 16px;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 32px;\n}\n\n.matero-error-message {\n  margin: 0 0 16px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNG9DQUNFO0FBRko7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUkYiLCJmaWxlIjoiZXJyb3ItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ2xvbmctc2hhZG93JyBhcyAqO1xyXG5cclxuLm1hdGVyby1lcnJvci13cmFwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXRlcm8tZXJyb3ItY29kZSB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTUwcHg7XHJcbiAgdGV4dC1zaGFkb3c6XHJcbiAgICBsb25nLXNoYWRvdyhcclxuICAgICAgJGRpcmVjdGlvbjogNDVkZWcsXHJcbiAgICAgICRsZW5ndGg6IDYwcHgsXHJcbiAgICAgICRjb2xvcjogcmdiYSgwLCAwLCAwLCAuMDMpLFxyXG4gICAgICAkZmFkZTogcmdiYSgwLCAwLCAwLCAuMDAxNSksXHJcbiAgICAgICRzaGFkb3ctY291bnQ6IDIwXHJcbiAgICApO1xyXG59XHJcblxyXG4ubWF0ZXJvLWVycm9yLXRpdGxlIHtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ubWF0ZXJvLWVycm9yLW1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    32802:
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageHeaderComponent": function PageHeaderComponent() {
          return (
            /* binding */
            _PageHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/bootstrap/menu.service */
      38714);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../breadcrumb/breadcrumb.component */
      41299);

      function PageHeaderComponent_breadcrumb_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nav", ctx_r0.nav);
        }
      }

      var _PageHeaderComponent = /*#__PURE__*/function () {
        function _PageHeaderComponent(router, menu) {
          _classCallCheck(this, _PageHeaderComponent);

          this.router = router;
          this.menu = menu;
          this.title = '';
          this.subtitle = '';
          this.nav = [];
          this._hideBreadCrumb = false;
        }

        _createClass(_PageHeaderComponent, [{
          key: "hideBreadcrumb",
          get: function get() {
            return this._hideBreadCrumb;
          },
          set: function set(value) {
            this._hideBreadCrumb = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav = Array.isArray(this.nav) ? this.nav : [];

            if (this.nav.length === 0) {
              this.genBreadcrumb();
            }

            this.title = this.title || this.nav[this.nav.length - 1];
          }
        }, {
          key: "genBreadcrumb",
          value: function genBreadcrumb() {
            var routes = this.router.url.slice(1).split('/');
            this.nav = this.menu.getLevel(routes);
            this.nav.unshift('home');
          }
        }]);

        return _PageHeaderComponent;
      }();

      _PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
        return new (t || _PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
      };

      _PageHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PageHeaderComponent,
        selectors: [["page-header"]],
        hostAttrs: [1, "matero-page-header"],
        inputs: {
          title: "title",
          subtitle: "subtitle",
          nav: "nav",
          hideBreadcrumb: "hideBreadcrumb"
        },
        decls: 6,
        vars: 3,
        consts: [[1, "matero-page-header-inner"], [1, "matero-page-title"], [3, "nav", 4, "ngIf"], [3, "nav"]],
        template: function PageHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PageHeaderComponent_breadcrumb_5_Template, 1, 1, "breadcrumb", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.subtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideBreadcrumb);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
        styles: [".matero-page-header {\n  display: block;\n  padding: 16px;\n  margin: -16px -16px 16px;\n  background-color: #3f51b5;\n  color: #fff;\n}\n.matero-page-header .matero-breadcrumb {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n.matero-page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUdBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6InBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyby1wYWdlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLm1hdGVyby1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0ZXJvLXBhZ2UtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    20034:
    /*!****************************************************************!*\
      !*** ./src/app/shared/directives/disable-control.directive.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisableControlDirective": function DisableControlDirective() {
          return (
            /* binding */
            _DisableControlDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _DisableControlDirective = /*#__PURE__*/function () {
        function _DisableControlDirective(ngControl) {
          _classCallCheck(this, _DisableControlDirective);

          this.ngControl = ngControl;
        }

        _createClass(_DisableControlDirective, [{
          key: "disableControl",
          set: function set(condition) {
            var _a;

            var action = condition ? 'disable' : 'enable';
            (_a = this.ngControl.control) === null || _a === void 0 ? void 0 : _a[action]();
          }
        }]);

        return _DisableControlDirective;
      }();

      _DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) {
        return new (t || _DisableControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 12));
      };

      _DisableControlDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableControlDirective,
        selectors: [["", "disableControl", ""]],
        inputs: {
          disableControl: "disableControl"
        }
      });
      /***/
    },

    /***/
    72729:
    /*!******************************************************!*\
      !*** ./src/app/shared/in-mem/in-mem-data.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InMemDataService": function InMemDataService() {
          return (
            /* binding */
            _InMemDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      39530);
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @env/environment */
      92340);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      function urlSafeBase64Encode(text) {
        return btoa(text).replace(/[+/=]/g, function (m) {
          return {
            '+': '-',
            '/': '_',
            '=': ''
          }[m];
        });
      }

      function urlSafeBase64Decode(text) {
        return atob(text.replace(/[-_]/g, function (m) {
          return {
            '-': '+',
            '_': '/'
          }[m];
        }));
      }

      function generateToken(user) {
        var expiresIn = 3600;
        var header = JSON.stringify({
          typ: 'JWT',
          alg: 'HS256'
        });
        var payload = JSON.stringify({
          exp: Math.ceil(new Date().getTime() / 1000) + expiresIn,
          user: user
        });
        var key = 'ng-matero';
        var accessToken = [urlSafeBase64Encode(header), urlSafeBase64Encode(payload), urlSafeBase64Encode(key)].join('.');
        return {
          access_token: accessToken,
          token_type: 'bearer',
          expires_in: expiresIn
        };
      }

      function is(reqInfo, path) {
        if (_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.localUrl) {
          return false;
        }

        return new RegExp("".concat(path, "(/)?$"), 'i').test(reqInfo.req.url);
      }

      function fetch1(url) {
        var content = null;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);

        xhr.onload = function () {
          return content = xhr.responseText;
        };

        xhr.send();
        return content;
      }

      function is1(reqInfo, userid, path) {
        // debugger;
        var flg = false;
        var strbaseapi = reqInfo.apiBase;
        var strcollectionName = window.location.href; //reqInfo.collectionName;

        strcollectionName = strcollectionName.substring(strcollectionName.lastIndexOf("/") + 1, strcollectionName.length);
        strcollectionName = strcollectionName.replace("%20", " ");
        var currentUser = JSON.parse(userid);

        if (strbaseapi != "me" && strcollectionName != "menu") {
          var menu = fetch1(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "/Menu/GetMenu?userid=" + currentUser.userId);
          menu = JSON.parse(menu);

          for (var i = 0; i < menu.menu.length; i++) {
            for (var j = 0; j < menu.menu[0].children.length; j++) {
              if (strcollectionName == menu.menu[i].children[j].name) {
                flg = true;
                break;
              } else {
                continue;
              }
            }

            if (flg == true) {
              break;
            } else {
              continue;
            }
          } //const menu = JSON.parse(this.fetch('assets/data/menu.json?_t=' + Date.now())).menu;


          if (flg == false) {
            // this.dialog.alert("you are not autherised for this page");
            alert("you are not autherised for this page"); //router.navigateByUrl('/dashboard');

            window.location.href = "/dashboard";
            return false;
          } else {
            return new RegExp("".concat(path, "(/)?$"), 'i').test(reqInfo.req.url);
          }
        } else {
          return new RegExp("".concat(path, "(/)?$"), 'i').test(reqInfo.req.url);
        }
      }

      function getUserFromJWTToken(req) {
        var authorization = req.headers.get('Authorization');

        var _authorization$split = authorization.split(' '),
            _authorization$split2 = _slicedToArray(_authorization$split, 2),
            token = _authorization$split2[1];

        try {
          var _token$split = token.split('.'),
              _token$split2 = _slicedToArray(_token$split, 2),
              payload = _token$split2[1];

          var data = JSON.parse(urlSafeBase64Decode(payload));
          var d = new Date();
          d.setUTCSeconds(data.exp);

          if (new Date().getTime() > d.getTime()) {
            return null;
          }

          return data.user;
        } catch (e) {
          return null;
        }
      }

      var _InMemDataService = /*#__PURE__*/function () {
        function _InMemDataService(store) {
          _classCallCheck(this, _InMemDataService);

          this.store = store;
          this.users = [];
        }

        _createClass(_InMemDataService, [{
          key: "ngOnInit",
          value: function ngOnInit() {// const currentUser=JSON.parse(this.store.get("currentUser"));
          }
        }, {
          key: "createDb",
          value: function createDb(reqInfo) {
            return {
              users: this.users
            };
          }
        }, {
          key: "get",
          value: function get(reqInfo) {
            var _this17 = this;

            if (is(reqInfo, 'sanctum/csrf-cookie')) {
              return reqInfo.utils.createResponse$(function () {
                var headers = reqInfo.headers,
                    url = reqInfo.url;
                return {
                  status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT,
                  headers: headers,
                  url: url,
                  body: {}
                };
              });
            }

            if (is(reqInfo, 'me/menu')) {
              // debugger;
              return reqInfo.utils.createResponse$(function () {
                var headers = reqInfo.headers,
                    url = reqInfo.url;
                var currentUser = JSON.parse(_this17.store.get("currentUser")); //  const menu = JSON.parse(this.fetch('assets/data/menu.json?_t=' + Date.now())).menu;

                var menu = JSON.parse(_this17.fetch(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "/Menu/GetMenu?userid=" + currentUser.userId)).menu;
                return {
                  status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                  headers: headers,
                  url: url,
                  body: {
                    menu: menu
                  }
                };
              });
            } //if (is1(reqInfo,this.store.get("currentUser"), 'me')) {


            if (is(reqInfo, 'me')) {
              // debugger;
              return reqInfo.utils.createResponse$(function () {
                var headers = reqInfo.headers,
                    url = reqInfo.url;
                var user = getUserFromJWTToken(reqInfo.req);

                if (!user) {
                  return {
                    status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.UNAUTHORIZED,
                    headers: headers,
                    url: url,
                    body: {}
                  };
                }

                return {
                  status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                  headers: headers,
                  url: url,
                  body: user
                };
              });
            }

            return;
          }
        }, {
          key: "post",
          value: function post(reqInfo) {
            if (is(reqInfo, 'auth/login')) {
              return this.login(reqInfo);
            }

            if (is(reqInfo, 'auth/refresh')) {
              return this.refresh(reqInfo);
            }

            if (is(reqInfo, 'auth/logout')) {
              return this.logout(reqInfo);
            }

            return;
          }
        }, {
          key: "login",
          value: function login(reqInfo) {
            var _this18 = this;

            return reqInfo.utils.createResponse$(function () {
              var headers = reqInfo.headers,
                  url = reqInfo.url;
              var req = reqInfo.req;
              var _req$body = req.body,
                  email = _req$body.email,
                  password = _req$body.password;
              var currentUser = Object.assign({}, _this18.users.find(function (user) {
                return user.email === email || user.username === email;
              }));

              if (!currentUser) {
                return {
                  status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.UNAUTHORIZED,
                  headers: headers,
                  url: url,
                  body: {}
                };
              }

              if (currentUser.password !== password) {
                return {
                  status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.UNPROCESSABLE_ENTRY,
                  headers: headers,
                  url: url,
                  error: {
                    errors: {
                      password: ['The provided password is incorrect.']
                    }
                  }
                };
              }

              delete currentUser.password;
              return {
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                headers: headers,
                url: url,
                body: generateToken(currentUser)
              };
            });
          }
        }, {
          key: "refresh",
          value: function refresh(reqInfo) {
            return reqInfo.utils.createResponse$(function () {
              var headers = reqInfo.headers,
                  url = reqInfo.url;
              var user = getUserFromJWTToken(reqInfo.req);

              if (!user) {
                return {
                  status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.UNAUTHORIZED,
                  headers: headers,
                  url: url,
                  body: {}
                };
              }

              return {
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                headers: headers,
                url: url,
                body: generateToken(user)
              };
            });
          }
        }, {
          key: "logout",
          value: function logout(reqInfo) {
            return reqInfo.utils.createResponse$(function () {
              var headers = reqInfo.headers,
                  url = reqInfo.url;
              return {
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                headers: headers,
                url: url,
                body: {}
              };
            });
          }
        }, {
          key: "fetch",
          value: function fetch(url) {
            var content = null;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);

            xhr.onload = function () {
              return content = xhr.responseText;
            };

            xhr.send();
            return content;
          }
        }]);

        return _InMemDataService;
      }();

      _InMemDataService.ɵfac = function InMemDataService_Factory(t) {
        return new (t || _InMemDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
      };

      _InMemDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _InMemDataService,
        factory: _InMemDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    51679:
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* reexport safe */
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
          );
        },

        /* harmony export */
        "AppDirectionality": function AppDirectionality() {
          return (
            /* reexport safe */
            _services_directionality_service__WEBPACK_IMPORTED_MODULE_1__.AppDirectionality
          );
        },

        /* harmony export */
        "MessageService": function MessageService() {
          return (
            /* reexport safe */
            _services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
          );
        },

        /* harmony export */
        "LocalStorageService": function LocalStorageService() {
          return (
            /* reexport safe */
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
          );
        },

        /* harmony export */
        "MemoryStorageService": function MemoryStorageService() {
          return (
            /* reexport safe */
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.MemoryStorageService
          );
        },

        /* harmony export */
        "PaginatorI18nService": function PaginatorI18nService() {
          return (
            /* reexport safe */
            _services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_4__.PaginatorI18nService
          );
        },

        /* harmony export */
        "MAT_COLORS": function MAT_COLORS() {
          return (
            /* reexport safe */
            _utils_colors__WEBPACK_IMPORTED_MODULE_5__.MAT_COLORS
          );
        },

        /* harmony export */
        "MAT_ICONS": function MAT_ICONS() {
          return (
            /* reexport safe */
            _utils_icons__WEBPACK_IMPORTED_MODULE_6__.MAT_ICONS
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared.module */
      44466);
      /* harmony import */


      var _services_directionality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/directionality.service */
      83007);
      /* harmony import */


      var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/message.service */
      86199);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/storage.service */
      1303);
      /* harmony import */


      var _services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/paginator-i18n.service */
      23350);
      /* harmony import */


      var _utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils/colors */
      26787);
      /* harmony import */


      var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./utils/icons */
      56419); // Module
      // Services
      // Utils

      /***/

    },

    /***/
    72129:
    /*!***********************************************!*\
      !*** ./src/app/shared/pipes/safe-url.pipe.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SafeUrlPipe": function SafeUrlPipe() {
          return (
            /* binding */
            _SafeUrlPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);

      var _SafeUrlPipe = /*#__PURE__*/function () {
        function _SafeUrlPipe(sanitizer) {
          _classCallCheck(this, _SafeUrlPipe);

          this.sanitizer = sanitizer;
        }

        _createClass(_SafeUrlPipe, [{
          key: "transform",
          value: function transform(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return _SafeUrlPipe;
      }();

      _SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
        return new (t || _SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
      };

      _SafeUrlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeUrl",
        type: _SafeUrlPipe,
        pure: true
      });
      /***/
    },

    /***/
    65279:
    /*!****************************************************!*\
      !*** ./src/app/shared/pipes/to-observable.pipe.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToObservablePipe": function ToObservablePipe() {
          return (
            /* binding */
            _ToObservablePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      64674);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ToObservablePipe = /*#__PURE__*/function () {
        function _ToObservablePipe() {
          _classCallCheck(this, _ToObservablePipe);
        }

        _createClass(_ToObservablePipe, [{
          key: "transform",
          value: function transform(value) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(value) ? value : (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(value);
          }
        }]);

        return _ToObservablePipe;
      }();

      _ToObservablePipe.ɵfac = function ToObservablePipe_Factory(t) {
        return new (t || _ToObservablePipe)();
      };

      _ToObservablePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "toObservable",
        type: _ToObservablePipe,
        pure: true
      });
      /***/
    },

    /***/
    83007:
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/directionality.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppDirectionality": function AppDirectionality() {
          return (
            /* binding */
            _AppDirectionality
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppDirectionality = /*#__PURE__*/function () {
        function _AppDirectionality() {
          _classCallCheck(this, _AppDirectionality);

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._value = 'ltr';
        }

        _createClass(_AppDirectionality, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this._value = value;
            this.change.next(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return _AppDirectionality;
      }();

      _AppDirectionality.ɵfac = function AppDirectionality_Factory(t) {
        return new (t || _AppDirectionality)();
      };

      _AppDirectionality.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AppDirectionality,
        factory: _AppDirectionality.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    86199:
    /*!****************************************************!*\
      !*** ./src/app/shared/services/message.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageService": function MessageService() {
          return (
            /* binding */
            _MessageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MessageService = /*#__PURE__*/function () {
        function _MessageService() {
          _classCallCheck(this, _MessageService);

          this.messages = [];
        }

        _createClass(_MessageService, [{
          key: "add",
          value: function add(message) {
            this.messages.push(message);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.messages = [];
          }
        }]);

        return _MessageService;
      }();

      _MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || _MessageService)();
      };

      _MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MessageService,
        factory: _MessageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    23350:
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/paginator-i18n.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaginatorI18nService": function PaginatorI18nService() {
          return (
            /* binding */
            _PaginatorI18nService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316); //import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


      var _PaginatorI18nService = /*#__PURE__*/function () {
        // constructor(private translate: TranslateService) {
        //   this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.getPaginatorIntl());
        // }
        function _PaginatorI18nService() {
          _classCallCheck(this, _PaginatorI18nService);

          this.paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl();
        }

        _createClass(_PaginatorI18nService, [{
          key: "getPaginatorIntl",
          value: function getPaginatorIntl() {
            this.paginatorIntl.itemsPerPageLabel = 'Items Per Page'; //this.translate.instant('paginator.items_per_page_label');

            this.paginatorIntl.previousPageLabel = 'previous_page_label'; //this.translate.instant('paginator.previous_page_label');

            this.paginatorIntl.nextPageLabel = 'next_page_label'; //this.translate.instant('paginator.next_page_label');

            this.paginatorIntl.firstPageLabel = 'first_page_label'; //this.translate.instant('paginator.first_page_label');

            this.paginatorIntl.lastPageLabel = 'last_page_label'; //this.translate.instant('paginator.last_page_label');

            this.paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
            this.paginatorIntl.changes.next();
            return this.paginatorIntl;
          }
        }, {
          key: "getRangeLabel",
          value: function getRangeLabel(page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
              return 'range_page_label_1' + {
                length: length
              }; //return this.translate.instant('paginator.range_page_label_1', { length });
            }

            length = Math.max(length, 0);
            var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex.toString() + ' of ' + length.toString();
          }
        }]);

        return _PaginatorI18nService;
      }();

      _PaginatorI18nService.ɵfac = function PaginatorI18nService_Factory(t) {
        return new (t || _PaginatorI18nService)();
      };

      _PaginatorI18nService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _PaginatorI18nService,
        factory: _PaginatorI18nService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1303:
    /*!****************************************************!*\
      !*** ./src/app/shared/services/storage.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalStorageService": function LocalStorageService() {
          return (
            /* binding */
            _LocalStorageService
          );
        },

        /* harmony export */
        "MemoryStorageService": function MemoryStorageService() {
          return (
            /* binding */
            _MemoryStorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LocalStorageService = /*#__PURE__*/function () {
        function _LocalStorageService() {
          _classCallCheck(this, _LocalStorageService);
        }

        _createClass(_LocalStorageService, [{
          key: "get",
          value: function get(key) {
            return JSON.parse(localStorage.getItem(key) || '{}') || {};
          }
        }, {
          key: "set",
          value: function set(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
          }
        }, {
          key: "remove",
          value: function remove(key) {
            localStorage.removeItem(key);
          }
        }, {
          key: "clear",
          value: function clear() {
            localStorage.clear();
          }
        }]);

        return _LocalStorageService;
      }();

      _LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
        return new (t || _LocalStorageService)();
      };

      _LocalStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LocalStorageService,
        factory: _LocalStorageService.ɵfac,
        providedIn: 'root'
      });

      var _MemoryStorageService = /*#__PURE__*/function () {
        function _MemoryStorageService() {
          _classCallCheck(this, _MemoryStorageService);

          this.store = {};
        }

        _createClass(_MemoryStorageService, [{
          key: "get",
          value: function get(key) {
            return JSON.parse(this.store[key] || '{}') || {};
          }
        }, {
          key: "set",
          value: function set(key, value) {
            this.store[key] = JSON.stringify(value);
            return true;
          }
        }, {
          key: "remove",
          value: function remove(key) {
            delete this.store[key];
          }
        }, {
          key: "clear",
          value: function clear() {
            this.store = {};
          }
        }]);

        return _MemoryStorageService;
      }();
      /***/

    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../material.module */
      63806);
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-matero/extensions */
      23767);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      78662);
      /* harmony import */


      var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-formly/core */
      75741);
      /* harmony import */


      var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-formly/material */
      45975);
      /* harmony import */


      var ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-progressbar */
      53186);
      /* harmony import */


      var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-progressbar/http */
      96785);
      /* harmony import */


      var ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-progressbar/router */
      29615);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-permissions */
      85470);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/page-header/page-header.component */
      32802);
      /* harmony import */


      var _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/error-code/error-code.component */
      46947);
      /* harmony import */


      var _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./directives/disable-control.directive */
      20034);
      /* harmony import */


      var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pipes/safe-url.pipe */
      72129);
      /* harmony import */


      var _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pipes/to-observable.pipe */
      65279);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var MODULES = [_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__.MaterialExtensionsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_10__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_12__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__.NgProgressHttpModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule];
      var COMPONENTS = [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_3__.ErrorCodeComponent];
      var COMPONENTS_DYNAMIC = [];
      var DIRECTIVES = [_directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_4__.DisableControlDirective];
      var PIPES = [_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_6__.ToObservablePipe];

      var _SharedModule = /*#__PURE__*/_createClass(function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      });

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule].concat(MODULES), _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__.MaterialExtensionsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_10__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_12__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__.NgProgressHttpModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_3__.ErrorCodeComponent, _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_4__.DisableControlDirective, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_6__.ToObservablePipe],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__.MaterialExtensionsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_10__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_12__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__.NgProgressHttpModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__.MaterialExtensionsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_10__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_12__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__.NgProgressHttpModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_3__.ErrorCodeComponent, _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_4__.DisableControlDirective, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_6__.ToObservablePipe]
        });
      })();
      /***/

    },

    /***/
    26787:
    /*!****************************************!*\
      !*** ./src/app/shared/utils/colors.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_COLORS": function MAT_COLORS() {
          return (
            /* binding */
            _MAT_COLORS
          );
        }
        /* harmony export */

      });

      var _MAT_COLORS = {
        'red': {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
          A100: '#FF8A80',
          A200: '#FF5252',
          A400: '#FF1744',
          A700: '#D50000',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light'
          }
        },
        'pink': {
          50: '#FCE4EC',
          100: '#F8BBD0',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63',
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
          A100: '#FF80AB',
          A200: '#FF4081',
          A400: '#F50057',
          A700: '#C51162',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light'
          }
        },
        'purple': {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C',
          A100: '#EA80FC',
          A200: '#E040FB',
          A400: '#D500F9',
          A700: '#AA00FF',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light'
          }
        },
        'deep-purple': {
          50: '#EDE7F6',
          100: '#D1C4E9',
          200: '#B39DDB',
          300: '#9575CD',
          400: '#7E57C2',
          500: '#673AB7',
          600: '#5E35B1',
          700: '#512DA8',
          800: '#4527A0',
          900: '#311B92',
          A100: '#B388FF',
          A200: '#7C4DFF',
          A400: '#651FFF',
          A700: '#6200EA',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light'
          }
        },
        'indigo': {
          50: '#E8EAF6',
          100: '#C5CAE9',
          200: '#9FA8DA',
          300: '#7986CB',
          400: '#5C6BC0',
          500: '#3F51B5',
          600: '#3949AB',
          700: '#303F9F',
          800: '#283593',
          900: '#1A237E',
          A100: '#8C9EFF',
          A200: '#536DFE',
          A400: '#3D5AFE',
          A700: '#304FFE',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light'
          }
        },
        'blue': {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
          A100: '#82B1FF',
          A200: '#448AFF',
          A400: '#2979FF',
          A700: '#2962FF',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light'
          }
        },
        'light-blue': {
          50: '#E1F5FE',
          100: '#B3E5FC',
          200: '#81D4FA',
          300: '#4FC3F7',
          400: '#29B6F6',
          500: '#03A9F4',
          600: '#039BE5',
          700: '#0288D1',
          800: '#0277BD',
          900: '#01579B',
          A100: '#80D8FF',
          A200: '#40C4FF',
          A400: '#00B0FF',
          A700: '#0091EA',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'light'
          }
        },
        'cyan': {
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
          A100: '#84FFFF',
          A200: '#18FFFF',
          A400: '#00E5FF',
          A700: '#00B8D4',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'teal': {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#009688',
          600: '#00897B',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40',
          A100: '#A7FFEB',
          A200: '#64FFDA',
          A400: '#1DE9B6',
          A700: '#00BFA5',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'green': {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
          A100: '#B9F6CA',
          A200: '#69F0AE',
          A400: '#00E676',
          A700: '#00C853',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'light-green': {
          50: '#F1F8E9',
          100: '#DCEDC8',
          200: '#C5E1A5',
          300: '#AED581',
          400: '#9CCC65',
          500: '#8BC34A',
          600: '#7CB342',
          700: '#689F38',
          800: '#558B2F',
          900: '#33691E',
          A100: '#CCFF90',
          A200: '#B2FF59',
          A400: '#76FF03',
          A700: '#64DD17',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'lime': {
          50: '#F9FBE7',
          100: '#F0F4C3',
          200: '#E6EE9C',
          300: '#DCE775',
          400: '#D4E157',
          500: '#CDDC39',
          600: '#C0CA33',
          700: '#AFB42B',
          800: '#9E9D24',
          900: '#827717',
          A100: '#F4FF81',
          A200: '#EEFF41',
          A400: '#C6FF00',
          A700: '#AEEA00',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'yellow': {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFEB3B',
          600: '#FDD835',
          700: '#FBC02D',
          800: '#F9A825',
          900: '#F57F17',
          A100: '#FFFF8D',
          A200: '#FFFF00',
          A400: '#FFEA00',
          A700: '#FFD600',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'dark',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'amber': {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
          A100: '#FFE57F',
          A200: '#FFD740',
          A400: '#FFC400',
          A700: '#FFAB00',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'dark',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'orange': {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
          A100: '#FFD180',
          A200: '#FFAB40',
          A400: '#FF9100',
          A700: '#FF6D00',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'deep-orange': {
          50: '#FBE9E7',
          100: '#FFCCBC',
          200: '#FFAB91',
          300: '#FF8A65',
          400: '#FF7043',
          500: '#FF5722',
          600: '#F4511E',
          700: '#E64A19',
          800: '#D84315',
          900: '#BF360C',
          A100: '#FF9E80',
          A200: '#FF6E40',
          A400: '#FF3D00',
          A700: '#DD2C00',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark'
          }
        },
        'brown': {
          50: '#EFEBE9',
          100: '#D7CCC8',
          200: '#BCAAA4',
          300: '#A1887F',
          400: '#8D6E63',
          500: '#795548',
          600: '#6D4C41',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
          A100: '#D7CCC8',
          A200: '#BCAAA4',
          A400: '#8D6E63',
          A700: '#5D4037',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'light',
            A700: 'light'
          }
        },
        'gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          A100: '#FFFFFF',
          A200: ' #EEEEEE',
          A400: '#BDBDBD',
          A700: '#616161',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'light'
          }
        },
        'blue-gray': {
          50: '#ECEFF1',
          100: '#CFD8DC',
          200: '#B0BEC5',
          300: '#90A4AE',
          400: '#78909C',
          500: '#607D8B',
          600: '#546E7A',
          700: '#455A64',
          800: '#37474F',
          900: '#263238',
          A100: '#CFD8DC',
          A200: '#B0BEC5',
          A400: '#78909C',
          A700: '#455A64',
          contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'light',
            A700: 'light'
          }
        }
      };
      /***/
    },

    /***/
    56419:
    /*!***************************************!*\
      !*** ./src/app/shared/utils/icons.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_ICONS": function MAT_ICONS() {
          return (
            /* binding */
            _MAT_ICONS
          );
        }
        /* harmony export */

      });

      var _MAT_ICONS = {
        action: ['3d_rotation', 'accessibility', 'accessibility_new', 'accessible', 'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'add_shopping_cart', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'all_inbox', 'all_out', 'android', 'announcement', 'arrow_right_alt', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'autorenew', 'backup', 'book', 'bookmark', 'bookmark_border', 'bookmarks', 'bug_report', 'build', 'cached', 'calendar_today', 'calendar_view_day', 'camera_enhance', 'card_giftcard', 'card_membership', 'card_travel', 'change_history', 'check_circle', 'check_circle_outline', 'chrome_reader_mode', 'class', 'code', 'commute', 'compare_arrows', 'contact_support', 'copyright', 'credit_card', 'dashboard', 'date_range', 'delete', 'delete_forever', 'delete_outline', 'description', 'dns', 'done', 'done_all', 'done_outline', 'donut_large', 'donut_small', 'drag_indicator', 'eject', 'euro_symbol', 'event', 'event_seat', 'exit_to_app', 'explore', 'explore_off', 'extension', 'face', 'favorite', 'favorite_border', 'feedback', 'find_in_page', 'find_replace', 'fingerprint', 'flight_land', 'flight_takeoff', 'flip_to_back', 'flip_to_front', 'g_translate', 'gavel', 'get_app', 'gif', 'grade', 'group_work', 'help', 'help_outline', 'highlight_off', 'history', 'home', 'horizontal_split', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'important_devices', 'info', 'input', 'invert_colors', 'label', 'label_important', 'label_off', 'language', 'launch', 'line_style', 'line_weight', 'list', 'lock', 'lock_open', 'loyalty', 'markunread_mailbox', 'maximize', 'minimize', 'motorcycle', 'note_add', 'offline_bolt', 'offline_pin', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pageview', 'pan_tool', 'payment', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'pets', 'picture_in_picture', 'picture_in_picture_alt', 'play_for_work', 'polymer', 'power_settings_new', 'pregnant_woman', 'print', 'query_builder', 'question_answer', 'receipt', 'record_voice_over', 'redeem', 'remove_shopping_cart', 'reorder', 'report_problem', 'restore', 'restore_from_trash', 'restore_page', 'room', 'rounded_corner', 'rowing', 'schedule', 'search', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_voice', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'speaker_notes', 'speaker_notes_off', 'spellcheck', 'star_rate', 'stars', 'store', 'subject', 'supervised_user_circle', 'supervisor_account', 'swap_horiz', 'swap_horizontal_circle', 'swap_vert', 'swap_vertical_circle', 'tab', 'tab_unselected', 'text_rotate_up', 'text_rotate_vertical', 'text_rotation_down', 'text_rotation_none', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'timeline', 'toc', 'today', 'toll', 'touch_app', 'track_changes', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'turned_in', 'turned_in_not', 'update', 'verified_user', 'vertical_split', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'visibility', 'visibility_off', 'voice_over_off', 'watch_later', 'work', 'work_off', 'work_outline', 'youtube_searched_for', 'zoom_in', 'zoom_out'],
        alert: ['add_alert', 'error', 'error_outline', 'notification_important', 'warning'],
        av: ['4k', 'add_to_queue', 'airplay', 'album', 'art_track', 'av_timer', 'branding_watermark', 'call_to_action', 'closed_caption', 'control_camera', 'equalizer', 'explicit', 'fast_forward', 'fast_rewind', 'featured_play_list', 'featured_video', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'forward_10', 'forward_30', 'forward_5', 'games', 'hd', 'hearing', 'high_quality', 'library_add', 'library_books', 'library_music', 'loop', 'mic', 'mic_none', 'mic_off', 'missed_video_call', 'movie', 'music_video', 'new_releases', 'not_interested', 'note', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'play_arrow', 'play_circle_filled', 'play_circle_filled_white', 'play_circle_outline', 'playlist_add', 'playlist_add_check', 'playlist_play', 'queue', 'queue_music', 'queue_play_next', 'radio', 'recent_actors', 'remove_from_queue', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'shuffle', 'skip_next', 'skip_previous', 'slow_motion_video', 'snooze', 'sort_by_alpha', 'stop', 'subscriptions', 'subtitles', 'surround_sound', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'web', 'web_asset'],
        communication: ['alternate_email', 'business', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'cancel_presentation', 'cell_wifi', 'chat', 'chat_bubble', 'chat_bubble_outline', 'clear_all', 'comment', 'contact_mail', 'contact_phone', 'contacts', 'desktop_access_disabled', 'dialer_sip', 'dialpad', 'domain_disabled', 'duo', 'email', 'forum', 'import_contacts', 'import_export', 'invert_colors_off', 'list_alt', 'live_help', 'location_off', 'location_on', 'mail_outline', 'message', 'mobile_screen_share', 'no_sim', 'pause_presentation', 'person_add_disabled', 'phone', 'phonelink_erase', 'phonelink_lock', 'phonelink_ring', 'phonelink_setup', 'portable_wifi_off', 'present_to_all', 'print_disabled', 'ring_volume', 'rss_feed', 'screen_share', 'sentiment_satisfied_alt', 'speaker_phone', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop_screen_share', 'swap_calls', 'textsms', 'unsubscribe', 'voicemail', 'vpn_key'],
        content: ['add', 'add_box', 'add_circle', 'add_circle_outline', 'archive', 'backspace', 'ballot', 'block', 'clear', 'create', 'delete_sweep', 'drafts', 'file_copy', 'filter_list', 'flag', 'font_download', 'forward', 'gesture', 'how_to_reg', 'how_to_vote', 'inbox', 'link', 'link_off', 'low_priority', 'mail', 'markunread', 'move_to_inbox', 'next_week', 'outlined_flag', 'redo', 'remove', 'remove_circle', 'remove_circle_outline', 'reply', 'reply_all', 'report', 'report_off', 'save', 'save_alt', 'select_all', 'send', 'sort', 'text_format', 'unarchive', 'undo', 'waves', 'weekend', 'where_to_vote'],
        device: ['access_alarm', 'access_alarms', 'access_time', 'add_alarm', 'add_to_home_screen', 'airplanemode_active', 'airplanemode_inactive', // 'battery_20',
        // 'battery_30',
        // 'battery_50',
        // 'battery_60',
        // 'battery_80',
        // 'battery_90',
        'battery_alert', // 'battery_charging_20',
        // 'battery_charging_30',
        // 'battery_charging_50',
        // 'battery_charging_60',
        // 'battery_charging_80',
        // 'battery_charging_90',
        'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'bluetooth', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'data_usage', 'developer_mode', 'devices', 'dvr', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'graphic_eq', 'location_disabled', 'location_searching', 'mobile_friendly', 'mobile_off', // 'network_cell',
        // 'network_wifi',
        'nfc', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'sd_storage', 'settings_system_daydream', // 'signal_cellular_0_bar',
        // 'signal_cellular_1_bar',
        // 'signal_cellular_2_bar',
        // 'signal_cellular_3_bar',
        // 'signal_cellular_4_bar',
        'signal_cellular_alt', // 'signal_cellular_connected_no_internet_0_bar',
        // 'signal_cellular_connected_no_internet_1_bar',
        // 'signal_cellular_connected_no_internet_2_bar',
        // 'signal_cellular_connected_no_internet_3_bar',
        'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', // 'signal_wifi_0_bar',
        // 'signal_wifi_1_bar',
        // 'signal_wifi_1_bar_lock',
        // 'signal_wifi_2_bar',
        // 'signal_wifi_2_bar_lock',
        // 'signal_wifi_3_bar',
        // 'signal_wifi_3_bar_lock',
        'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'storage', 'usb', 'wallpaper', 'widgets', 'wifi_lock', 'wifi_tethering'],
        editor: ['add_comment', 'attach_file', 'attach_money', 'bar_chart', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'bubble_chart', 'drag_handle', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_list_numbered_rtl', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'functions', 'highlight', 'insert_chart', 'insert_chart_outlined', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'linear_scale', 'merge_type', 'mode_comment', 'monetization_on', 'money_off', 'multiline_chart', 'notes', 'pie_chart', 'publish', 'scatter_plot', 'score', 'short_text', 'show_chart', 'space_bar', 'strikethrough_s', 'table_chart', 'text_fields', 'title', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'wrap_text'],
        file: ['attachment', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'create_new_folder', 'folder', 'folder_open', 'folder_shared'],
        hardware: ['cast', 'cast_connected', 'cast_for_education', 'computer', 'desktop_mac', 'desktop_windows', 'developer_board', 'device_hub', 'device_unknown', 'devices_other', 'dock', 'gamepad', 'headset', 'headset_mic', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'memory', 'mouse', 'phone_android', 'phone_iphone', 'phonelink', 'phonelink_off', 'power_input', 'router', 'scanner', 'security', 'sim_card', 'smartphone', 'speaker', 'speaker_group', 'tablet', 'tablet_android', 'tablet_mac', 'toys', 'tv', 'videogame_asset', 'watch'],
        image: ['add_a_photo', 'add_photo_alternate', 'add_to_photos', 'adjust', 'assistant', 'assistant_photo', 'audiotrack', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'broken_image', 'brush', 'burst_mode', 'camera', 'camera_alt', 'camera_front', 'camera_rear', 'camera_roll', 'center_focus_strong', 'center_focus_weak', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'compare', 'control_point', 'control_point_duplicate', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dehaze', 'details', 'edit', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flip', 'gradient', 'grain', 'grid_off', 'grid_on', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'healing', 'image', 'image_aspect_ratio', 'image_search', 'iso', 'landscape', 'leak_add', 'leak_remove', 'lens', 'linked_camera', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loupe', 'monochrome_photos', 'movie_creation', 'movie_filter', 'music_note', 'music_off', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'palette', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'portrait', 'remove_red_eye', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'shutter_speed', 'slideshow', 'straighten', 'style', 'switch_camera', 'switch_video', 'tag_faces', 'texture', 'timelapse', 'timer', 'timer_10', 'timer_3', 'timer_off', 'tonality', 'transform', 'tune', 'view_comfy', 'view_compact', 'vignette', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny'],
        maps: ['360', 'add_location', 'atm', 'beenhere', 'category', 'compass_calibration', 'departure_board', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'edit_attributes', 'edit_location', 'ev_station', 'fastfood', 'flight', 'hotel', 'layers', 'layers_clear', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'map', 'money', 'my_location', 'navigation', 'near_me', 'not_listed_location', 'person_pin', 'person_pin_circle', 'pin_drop', 'place', 'rate_review', 'restaurant', 'restaurant_menu', 'satellite', 'store_mall_directory', 'streetview', 'subway', 'terrain', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transit_enterexit', 'trip_origin', 'zoom_out_map'],
        navigation: ['apps', 'arrow_back', 'arrow_back_ios', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_forward_ios', 'arrow_left', 'arrow_right', 'arrow_upward', 'cancel', 'check', 'chevron_left', 'chevron_right', 'close', 'expand_less', 'expand_more', 'first_page', 'fullscreen', 'fullscreen_exit', 'last_page', 'menu', 'more_horiz', 'more_vert', 'refresh', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'unfold_less', 'unfold_more'],
        notification: ['adb', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'bluetooth_audio', 'confirmation_number', 'disc_full', 'drive_eta', 'enhanced_encryption', 'event_available', 'event_busy', 'event_note', 'folder_special', 'live_tv', 'mms', 'more', 'network_check', 'network_locked', 'no_encryption', 'ondemand_video', 'personal_video', 'phone_bluetooth_speaker', 'phone_callback', 'phone_forwarded', 'phone_in_talk', 'phone_locked', 'phone_missed', 'phone_paused', 'power', 'power_off', 'priority_high', 'sd_card', 'sms', 'sms_failed', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'tap_and_play', 'time_to_leave', 'tv_off', 'vibration', 'voice_chat', 'vpn_lock', 'wc', 'wifi', 'wifi_off'],
        places: ['ac_unit', 'airport_shuttle', 'all_inclusive', 'beach_access', 'business_center', 'casino', 'child_care', 'child_friendly', 'fitness_center', 'free_breakfast', 'golf_course', 'hot_tub', 'kitchen', 'meeting_room', 'no_meeting_room', 'pool', 'room_service', 'rv_hookup', 'smoke_free', 'smoking_rooms', 'spa'],
        social: ['cake', 'domain', 'group', 'group_add', 'location_city', 'mood', 'mood_bad', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'pages', 'party_mode', 'people', 'people_outline', 'person', 'person_add', 'person_outline', 'plus_one', 'poll', 'public', 'school', 'sentiment_dissatisfied', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'share', 'thumb_down_alt', 'thumb_up_alt', 'whatshot'],
        toggle: ['check_box', 'check_box_outline_blank', 'indeterminate_check_box', 'radio_button_checked', 'radio_button_unchecked', 'star', 'star_border', 'star_half', 'toggle_off', 'toggle_on']
      };
      /***/
    },

    /***/
    36200:
    /*!**************************************************************!*\
      !*** ./src/app/theme/admin-layout/admin-layout.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminLayoutComponent": function AdminLayoutComponent() {
          return (
            /* binding */
            _AdminLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/layout */
      66883);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      45129);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var ngx_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-progressbar */
      53186);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      9295);
      /* harmony import */


      var _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../sidebar-notice/sidebar-notice.component */
      15283);
      /* harmony import */


      var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../customizer/customizer.component */
      75278);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../header/header.component */
      25868);
      /* harmony import */


      var _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../topmenu/topmenu.component */
      75242);

      var _c0 = ["sidenav"];
      var _c1 = ["content"];

      function AdminLayoutComponent_app_header_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-header", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("toggleSidenav", function AdminLayoutComponent_app_header_2_Template_app_header_toggleSidenav_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);

            return _r1.toggle();
          })("toggleSidenavNotice", function AdminLayoutComponent_app_header_2_Template_app_header_toggleSidenavNotice_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);

            return _r2.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showBranding", true);
        }
      }

      function AdminLayoutComponent_app_header_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-header", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("toggleSidenav", function AdminLayoutComponent_app_header_12_Template_app_header_toggleSidenav_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);

            return _r1.toggle();
          })("toggleSidenavNotice", function AdminLayoutComponent_app_header_12_Template_app_header_toggleSidenavNotice_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);

            return _r2.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showToggle", !ctx_r4.options.sidenavCollapsed && ctx_r4.options.navPos !== "top")("showBranding", ctx_r4.options.navPos === "top");
        }
      }

      function AdminLayoutComponent_app_topmenu_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-topmenu");
        }
      }

      var _c2 = function _c2(a0, a1, a2, a3, a4, a5) {
        return {
          "matero-sidenav-collapsed": a0,
          "matero-navbar-side": a1,
          "matero-navbar-top": a2,
          "matero-header-above": a3,
          "matero-header-fixed": a4,
          "matero-header-white": a5
        };
      };

      var MOBILE_MEDIAQUERY = 'screen and (max-width: 599px)';
      var TABLET_MEDIAQUERY = 'screen and (min-width: 600px) and (max-width: 959px)';
      var MONITOR_MEDIAQUERY = 'screen and (min-width: 960px)';

      var _AdminLayoutComponent = /*#__PURE__*/function () {
        function _AdminLayoutComponent(router, breakpointObserver, overlay, element, settings, document, dir) {
          var _this19 = this;

          _classCallCheck(this, _AdminLayoutComponent);

          this.router = router;
          this.breakpointObserver = breakpointObserver;
          this.overlay = overlay;
          this.element = element;
          this.settings = settings;
          this.document = document;
          this.dir = dir;
          this.options = this.settings.getOptions();
          this.isMobileScreen = true;
          this.isContentWidthFixed = true;
          this.isCollapsedWidthFixed = false;
          this.dir.value = this.options.dir;
          this.document.body.dir = this.dir.value;
          this.layoutChangesSubscription = this.breakpointObserver.observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY]).subscribe(function (state) {
            // SidenavOpened must be reset true when layout changes
            _this19.options.sidenavOpened = true;
            _this19.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
            _this19.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
            _this19.isContentWidthFixed = state.breakpoints[MONITOR_MEDIAQUERY];
          }); // TODO: Scroll top to container

          this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd;
          })).subscribe(function (e) {
            _this19.content.scrollTo({
              top: 0
            });
          }); // Initialize project theme with options

          this.receiveOptions(this.options);
        }

        _createClass(_AdminLayoutComponent, [{
          key: "isOver",
          get: function get() {
            return this.isMobileScreen;
          }
        }, {
          key: "contentWidthFix",
          get: function get() {
            return this.isContentWidthFixed && this.options.navPos === 'side' && this.options.sidenavOpened && !this.isOver;
          }
        }, {
          key: "collapsedWidthFix",
          get: function get() {
            return this.isCollapsedWidthFixed && (this.options.navPos === 'top' || this.options.sidenavOpened && this.isOver);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.layoutChangesSubscription.unsubscribe();
          }
        }, {
          key: "toggleCollapsed",
          value: function toggleCollapsed() {
            this.isContentWidthFixed = false;
            this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
            this.resetCollapsedState();
          } // TODO: Trigger when transition end

        }, {
          key: "resetCollapsedState",
          value: function resetCollapsedState() {
            var _this20 = this;

            var timer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;
            setTimeout(function () {
              return _this20.settings.setOptions(_this20.options);
            }, timer);
          }
        }, {
          key: "sidenavCloseStart",
          value: function sidenavCloseStart() {
            this.isContentWidthFixed = false;
          }
        }, {
          key: "sidenavOpenedChange",
          value: function sidenavOpenedChange(isOpened) {
            this.isCollapsedWidthFixed = !this.isOver;
            this.options.sidenavOpened = isOpened;
            this.settings.setOptions(this.options);
          }
          /** Demo purposes only */

        }, {
          key: "receiveOptions",
          value: function receiveOptions(options) {
            this.options = options;
            this.toggleDarkTheme(options);
            this.toggleDirection(options);
          }
        }, {
          key: "toggleDarkTheme",
          value: function toggleDarkTheme(options) {
            if (options.theme === 'dark') {
              this.element.nativeElement.classList.add('theme-dark');
              this.overlay.getContainerElement().classList.add('theme-dark');
            } else {
              this.element.nativeElement.classList.remove('theme-dark');
              this.overlay.getContainerElement().classList.remove('theme-dark');
            }
          }
        }, {
          key: "toggleDirection",
          value: function toggleDirection(options) {
            this.dir.value = options.dir;
            this.document.body.dir = this.dir.value;
          }
        }]);

        return _AdminLayoutComponent;
      }();

      _AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
        return new (t || _AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality));
      };

      _AdminLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _AdminLayoutComponent,
        selectors: [["app-admin-layout"]],
        viewQuery: function AdminLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("matero-content-width-fix", ctx.contentWidthFix)("matero-sidenav-collapsed-fix", ctx.collapsedWidthFix);
          }
        },
        decls: 17,
        vars: 18,
        consts: [[1, "matero-container-wrap", 3, "ngClass", "dir"], [3, "showBranding", "toggleSidenav", "toggleSidenavNotice", 4, "ngIf"], ["autosize", "", "autoFocus", "", 1, "matero-container"], [1, "matero-sidenav", 3, "mode", "opened", "openedChange", "closedStart"], ["sidenav", ""], [3, "showToggle", "showUser", "showHeader", "toggleChecked", "toggleCollapsed"], ["position", "end", "mode", "over"], ["sidenavNotice", ""], [1, "matero-content-wrap"], ["content", ""], [3, "showToggle", "showBranding", "toggleSidenav", "toggleSidenavNotice", 4, "ngIf"], [4, "ngIf"], [1, "matero-content"], [3, "optionsChange"], [3, "showBranding", "toggleSidenav", "toggleSidenavNotice"], [3, "showToggle", "showBranding", "toggleSidenav", "toggleSidenavNotice"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ng-progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdminLayoutComponent_app_header_2_Template, 1, 1, "app-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-sidenav-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-sidenav", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("openedChange", function AdminLayoutComponent_Template_mat_sidenav_openedChange_4_listener($event) {
              return ctx.sidenavOpenedChange($event);
            })("closedStart", function AdminLayoutComponent_Template_mat_sidenav_closedStart_4_listener() {
              return ctx.sidenavCloseStart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-sidebar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("toggleCollapsed", function AdminLayoutComponent_Template_app_sidebar_toggleCollapsed_6_listener() {
              return ctx.toggleCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-sidenav", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-sidebar-notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-sidenav-content", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AdminLayoutComponent_app_header_12_Template, 1, 2, "app-header", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AdminLayoutComponent_app_topmenu_13_Template, 1, 0, "app-topmenu", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "app-customizer", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionsChange", function AdminLayoutComponent_Template_app_customizer_optionsChange_16_listener($event) {
              return ctx.receiveOptions($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction6"](11, _c2, ctx.options.sidenavCollapsed && ctx.options.navPos !== "top", ctx.options.navPos === "side", ctx.options.navPos === "top", ctx.options.headerPos === "above", ctx.options.headerPos === "fixed", ctx.options.theme === "light"))("dir", ctx.options.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.options.showHeader && ctx.options.headerPos === "above");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mode", ctx.isOver ? "over" : "side")("opened", ctx.options.navPos === "side" && ctx.options.sidenavOpened && !ctx.isOver);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showToggle", !ctx.isOver)("showUser", !!ctx.options.showUserPanel)("showHeader", ctx.options.headerPos !== "above")("toggleChecked", !!ctx.options.sidenavCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.options.showHeader && ctx.options.headerPos !== "above");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.options.navPos === "top");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Dir, ngx_progressbar__WEBPACK_IMPORTED_MODULE_15__.NgProgressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenav, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_3__.SidebarNoticeComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_4__.CustomizerComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_6__.TopmenuComponent],
        styles: [".matero-container-wrap,\n.matero-container {\n  height: 100%;\n}\n\n.matero-content {\n  position: relative;\n  padding: 16px;\n}\n\n.matero-sidenav {\n  position: absolute;\n  overflow-x: hidden;\n  transition: width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.matero-sidenav.mat-drawer-side {\n  border-width: 0;\n}\n\n.matero-header-above .matero-container {\n  height: calc(100% - 64px) !important;\n}\n\n.matero-header-above .matero-sidebar-main {\n  height: 100% !important;\n}\n\n.matero-sidenav-collapsed .matero-sidenav,\n.matero-sidenav-collapsed-fix .matero-sidenav {\n  width: 50px;\n}\n\n.matero-sidenav-collapsed .matero-sidenav .menu-name,\n.matero-sidenav-collapsed .matero-sidenav .menu-label,\n.matero-sidenav-collapsed .matero-sidenav .menu-badge,\n.matero-sidenav-collapsed .matero-sidenav .menu-caret,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-name,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-email,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-icons,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-name,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-label,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-badge,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-caret,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-name,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-email,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-icons {\n  opacity: 0;\n}\n\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-avatar,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-avatar {\n  transform: scale(0.5);\n}\n\n.matero-sidenav-collapsed .matero-sidenav:hover,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover {\n  width: 240px;\n}\n\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-name,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-label,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-badge,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-caret,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-name,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-email,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-icons,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-name,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-label,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-badge,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-caret,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-name,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-email,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-icons {\n  opacity: 1;\n}\n\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-avatar,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-avatar {\n  transform: scale(1);\n}\n\n.matero-sidenav-collapsed .matero-content-wrap {\n  margin-left: 50px !important;\n}\n\n[dir=rtl] .matero-sidenav-collapsed .matero-content-wrap {\n  margin-left: auto !important;\n  margin-right: 50px !important;\n}\n\n.matero-sidenav-collapsed[dir=rtl] .matero-content-wrap {\n  margin-left: auto !important;\n  margin-right: 50px !important;\n}\n\n.matero-navbar-top .matero-topmenu {\n  top: 0;\n}\n\n.matero-navbar-top .matero-branding {\n  margin-left: 16px;\n}\n\n[dir=rtl] .matero-navbar-top .matero-branding {\n  margin-left: auto;\n  margin-right: 16px;\n}\n\n.matero-header-fixed .matero-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.matero-header-fixed .matero-topmenu {\n  top: 64px;\n}\n\n@media (max-width: 599px) {\n  .matero-header-fixed .matero-topmenu {\n    top: 56px;\n  }\n}\n\n.matero-header-fixed.matero-navbar-side .matero-toolbar {\n  border-bottom: unset;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.matero-content-width-fix .matero-content-wrap {\n  margin-left: 240px !important;\n}\n\n[dir=rtl] .matero-content-width-fix .matero-content-wrap {\n  margin-left: auto !important;\n  margin-right: 240px !important;\n}\n\n.matero-header-white .matero-toolbar,\n.matero-header-white .matero-topmenu {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uXFxzdHlsZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxjb3JlXFxzdHlsZVxcX2VsZXZhdGlvbi5zY3NzIiwiLi5cXHN0eWxlXFxfYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7RUFFRSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGFDUk87QURJVDs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtFRTJJQSx5SEFBQTtBRjlJRjs7QUFPRTtFQUNFLGVBQUE7QUFMSjs7QUFXRTtFQUNFLG9DQUFBO0FBUko7O0FBV0U7RUFDRSx1QkFBQTtBQVRKOztBQWdCRTs7RUFDRSxXQ2xDc0I7QURzQjFCOztBQWNJOzs7Ozs7Ozs7Ozs7OztFQU9FLFVBQUE7QUFMTjs7QUFRSTs7RUFDRSxxQkFBQTtBQUxOOztBQVFJOztFQUNFLFlDcERVO0FEK0NoQjs7QUFPTTs7Ozs7Ozs7Ozs7Ozs7RUFPRSxVQUFBO0FBRVI7O0FBQ007O0VBQ0UsbUJBQUE7QUFFUjs7QUFNRTtFQUNFLDRCQUFBO0FBSEo7O0FBS0k7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBSE47O0FBT0U7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBTEo7O0FBV0U7RUFDRSxNQUFBO0FBUko7O0FBV0U7RUFDRSxpQkFBQTtBQVRKOztBQVdJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVROOztBQWdCRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0FBYko7O0FBZ0JFO0VBQ0UsU0MzR3FCO0FENkZ6Qjs7QUc3RUk7RUg4RkU7SUFDRSxTQzlHZ0I7RURnR3RCO0FBQ0Y7O0FBbUJJO0VBQ0Usb0JBQUE7RUUyQkoseUhBQUE7QUYzQ0Y7O0FBeUJFO0VBQ0UsNkJBQUE7QUF0Qko7O0FBd0JJO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtBQXRCTjs7QUE2QkU7O0VBRUUsdUJBQUE7QUExQkoiLCJmaWxlIjoiYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcbkB1c2UgJy4uL3N0eWxlL3ZhcmlhYmxlcyc7XHJcbkB1c2UgJy4uL3N0eWxlL3RyYW5zaXRpb25zJztcclxuQHVzZSAnLi4vc3R5bGUvYnJlYWtwb2ludHMnO1xyXG5cclxuLm1hdGVyby1jb250YWluZXItd3JhcCxcclxuLm1hdGVyby1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdGVyby1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogdmFyaWFibGVzLiRndXR0ZXI7XHJcbn1cclxuXHJcbi5tYXRlcm8tc2lkZW5hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5zd2lmdC1lYXNlLW91dCh3aWR0aCk7IC8vIE9ubHkgc2V0IHdpZHRoIHByb3BlcnR5XHJcblxyXG4gIEBpbmNsdWRlIG1hdC5lbGV2YXRpb24oMik7XHJcblxyXG4gICYubWF0LWRyYXdlci1zaWRlIHtcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWFib3ZlIHtcclxuICAubWF0ZXJvLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7dmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1kZXNrdG9wfSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXRlcm8tc2lkZWJhci1tYWluIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCxcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXgge1xyXG4gIC5tYXRlcm8tc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogdmFyaWFibGVzLiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDtcclxuXHJcbiAgICAubWVudS1uYW1lLFxyXG4gICAgLm1lbnUtbGFiZWwsXHJcbiAgICAubWVudS1iYWRnZSxcclxuICAgIC5tZW51LWNhcmV0LFxyXG4gICAgLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXRlcm8tdXNlci1wYW5lbC1hdmF0YXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgd2lkdGg6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aDtcclxuXHJcbiAgICAgIC5tZW51LW5hbWUsXHJcbiAgICAgIC5tZW51LWxhYmVsLFxyXG4gICAgICAubWVudS1iYWRnZSxcclxuICAgICAgLm1lbnUtY2FyZXQsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4gICAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdGVyby11c2VyLXBhbmVsLWF2YXRhciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCB7XHJcbiAgLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcmlhYmxlcy4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGggIWltcG9ydGFudDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2Rpcj0ncnRsJ10gLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogdmFyaWFibGVzLiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1uYXZiYXItdG9wIHtcclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyby1icmFuZGluZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWZpeGVkIHtcclxuICAubWF0ZXJvLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyby10b3BtZW51IHtcclxuICAgIHRvcDogdmFyaWFibGVzLiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1kZXNrdG9wO1xyXG5cclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzLmJwLWx0KHNtYWxsKSB7XHJcbiAgICAgICYge1xyXG4gICAgICAgIHRvcDogdmFyaWFibGVzLiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubWF0ZXJvLW5hdmJhci1zaWRlIHtcclxuICAgIC5tYXRlcm8tdG9vbGJhciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xyXG5cclxuICAgICAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbigyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZpeCB0aGUgaW5pdCBjb250ZW50IHdpZHRoXHJcbi5tYXRlcm8tY29udGVudC13aWR0aC1maXgge1xyXG4gIC5tYXRlcm8tY29udGVudC13cmFwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXJpYWJsZXMuJHNpZGVuYXYtd2lkdGggIWltcG9ydGFudDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtd2lkdGggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENvbG9yZnVsXHJcbi5tYXRlcm8taGVhZGVyLXdoaXRlIHtcclxuICAubWF0ZXJvLXRvb2xiYXIsXHJcbiAgLm1hdGVyby10b3BtZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iLCJAdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzJztcclxuXHJcbi8vIExheW91dFxyXG4kZ3V0dGVyOiAxNnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gU2lkZW5hdlxyXG4kc2lkZW5hdi13aWR0aDogMjQwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNTBweCAhZGVmYXVsdDtcclxuJHNpZGVuYXYtd2lkdGgtbW9iaWxlOiAyODBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRvb2xiYXJcclxuJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3A6IDY0cHggIWRlZmF1bHQ7XHJcbiR0b29sYmFyLWhlaWdodC1tb2JpbGU6IDU2cHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb3BtZW51XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1kZXNrdG9wOiAkdG9vbGJhci1oZWlnaHQtZGVza3RvcCAhZGVmYXVsdDtcclxuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLW1vYmlsZTogJHRvb2xiYXItaGVpZ2h0LW1vYmlsZSAhZGVmYXVsdDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCAnSGVsdmV0aWNhIE5ldWUgTGlnaHQnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gQnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgeHNtYWxsOiAwLFxyXG4gIHNtYWxsOiAgNjAwcHgsXHJcbiAgbWVkaXVtOiA5NjBweCxcclxuICBsYXJnZTogIDEyODBweCxcclxuICB4bGFyZ2U6IDE5MjBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gTWF0ZXJpYWwgY29sb3JzXHJcbiRtYXQtY29sb3JzOiAoXHJcbiAgcmVkOiBtYXQuJHJlZC1wYWxldHRlLFxyXG4gIHBpbms6IG1hdC4kcGluay1wYWxldHRlLFxyXG4gIHB1cnBsZTogbWF0LiRwdXJwbGUtcGFsZXR0ZSxcclxuICBkZWVwLXB1cnBsZTogbWF0LiRkZWVwLXB1cnBsZS1wYWxldHRlLFxyXG4gIGluZGlnbzogbWF0LiRpbmRpZ28tcGFsZXR0ZSxcclxuICBibHVlOiBtYXQuJGJsdWUtcGFsZXR0ZSxcclxuICBsaWdodC1ibHVlOiBtYXQuJGxpZ2h0LWJsdWUtcGFsZXR0ZSxcclxuICBjeWFuOiBtYXQuJGN5YW4tcGFsZXR0ZSxcclxuICB0ZWFsOiBtYXQuJHRlYWwtcGFsZXR0ZSxcclxuICBncmVlbjogbWF0LiRncmVlbi1wYWxldHRlLFxyXG4gIGxpZ2h0LWdyZWVuOiBtYXQuJGxpZ2h0LWdyZWVuLXBhbGV0dGUsXHJcbiAgbGltZTogbWF0LiRsaW1lLXBhbGV0dGUsXHJcbiAgeWVsbG93OiBtYXQuJHllbGxvdy1wYWxldHRlLFxyXG4gIGFtYmVyOiBtYXQuJGFtYmVyLXBhbGV0dGUsXHJcbiAgb3JhbmdlOiBtYXQuJG9yYW5nZS1wYWxldHRlLFxyXG4gIGRlZXAtb3JhbmdlOiBtYXQuJGRlZXAtb3JhbmdlLXBhbGV0dGUsXHJcbiAgYnJvd246IG1hdC4kYnJvd24tcGFsZXR0ZSxcclxuICBncmF5OiBtYXQuJGdyYXktcGFsZXR0ZSxcclxuICBibHVlLWdyYXk6IG1hdC4kYmx1ZS1ncmF5LXBhbGV0dGUsXHJcbiAgd2hpdGU6IHdoaXRlLFxyXG4gIGJsYWNrOiBibGFjayxcclxuICBsaWdodDogd2hpdGUsXHJcbiAgZGFyazogcmdiYShibGFjaywgLjg3KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIFRoZSBtYXRlcmlhbCBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXNcclxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiB2YXJpYWJsZXMuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uO1xyXG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjtcclxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XHJcbkB1c2UgJ3ZhcmlhYmxlcyc7XHJcblxyXG5AZnVuY3Rpb24gYnAoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtaW46IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcblxyXG4gIEByZXR1cm4gJG1pbjtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC5cclxuQG1peGluIGJwLWd0KCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuXHJcbiAgQGlmICRtaW4ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLlxyXG5AbWl4aW4gYnAtbHQoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtYXg6IGJwKCRuYW1lLCAkYnJlYWtwb2ludHMpIC0gMXB4O1xyXG5cclxuICBAaWYgJG1heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    84951:
    /*!************************************************************!*\
      !*** ./src/app/theme/auth-layout/auth-layout.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthLayoutComponent": function AuthLayoutComponent() {
          return (
            /* binding */
            _AuthLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AuthLayoutComponent = /*#__PURE__*/_createClass(function _AuthLayoutComponent() {
        _classCallCheck(this, _AuthLayoutComponent);
      });

      _AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || _AuthLayoutComponent)();
      };

      _AuthLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 2,
        vars: 0,
        consts: [[1, "matero-auth-container"]],
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: [".matero-auth-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  min-height: 100%;\n  padding: 16px;\n  background-color: #79b5d88e;\n  background-size: 60px 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBQ0YiLCJmaWxlIjoiYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJvLWF1dGgtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5YjVkODhlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    75278:
    /*!**********************************************************!*\
      !*** ./src/app/theme/customizer/customizer.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomizerComponent": function CustomizerComponent() {
          return (
            /* binding */
            _CustomizerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      80395);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/radio */
      15644);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      32080);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);

      var _c0 = function _c0(a1) {
        return {
          "customizer-panel": true,
          "mat-elevation-z12 opened": a1
        };
      };

      var _c1 = function _c1(a1) {
        return {
          "customizer-panel-overlay": true,
          "opened": a1
        };
      };

      var _CustomizerComponent = /*#__PURE__*/function () {
        function _CustomizerComponent(settings) {
          _classCallCheck(this, _CustomizerComponent);

          this.settings = settings;
          this.options = this.settings.getOptions();
          this.opened = false;
          this.dragging = false;
          this.optionsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_CustomizerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleDragStart",
          value: function handleDragStart(event) {
            this.dragging = true;
          }
        }, {
          key: "openPanel",
          value: function openPanel(event) {
            if (this.dragging) {
              this.dragging = false;
              return;
            }

            this.opened = true;
          }
        }, {
          key: "closePanel",
          value: function closePanel() {
            this.opened = false;
          }
        }, {
          key: "togglePanel",
          value: function togglePanel() {
            this.opened = !this.opened;
          }
        }, {
          key: "sendOptions",
          value: function sendOptions() {
            this.optionsChange.emit(this.options);
          }
        }]);

        return _CustomizerComponent;
      }();

      _CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) {
        return new (t || _CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
      };

      _CustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CustomizerComponent,
        selectors: [["app-customizer"]],
        outputs: {
          optionsChange: "optionsChange"
        },
        decls: 49,
        vars: 21,
        consts: [["matTooltip", "Drag me around", "cdkDrag", "", 1, "customizer-handle", 3, "cdkDragStarted"], ["mat-fab", "", 3, "click"], ["aria-label", "Example icon-button with a settings icon"], [3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "f-w-400"], ["mat-icon-button", "", 3, "click"], [1, "f-w-400"], [1, "m-l-8"], [3, "ngModel", "ngModelChange", "change"], [1, "m-r-8", 3, "value"], [3, "ngModel", "disabled", "ngModelChange", "change"], [1, "m-r-8", 3, "value", "disabled"], ["inset", "", 1, "m-x-0", "m-y-24"], [3, "checked", "change"], [3, "ngClass", "click"]],
        template: function CustomizerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDragStarted", function CustomizerComponent_Template_div_cdkDragStarted_0_listener($event) {
              return ctx.handleDragStart($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_1_listener($event) {
              return ctx.openPanel($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_8_listener() {
              return ctx.closePanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-radio-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_Template_mat_radio_group_ngModelChange_14_listener($event) {
              return ctx.options.theme = $event;
            })("change", function CustomizerComponent_Template_mat_radio_group_change_14_listener() {
              return ctx.sendOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-slide-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_Template_mat_slide_toggle_ngModelChange_22_listener($event) {
              return ctx.options.showHeader = $event;
            })("change", function CustomizerComponent_Template_mat_slide_toggle_change_22_listener() {
              return ctx.sendOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "visible ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "position");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-radio-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_Template_mat_radio_group_ngModelChange_26_listener($event) {
              return ctx.options.headerPos = $event;
            })("change", function CustomizerComponent_Template_mat_radio_group_change_26_listener() {
              return ctx.sendOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-radio-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Above ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Static");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "mat-divider", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "position");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-radio-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_Template_mat_radio_group_ngModelChange_39_listener($event) {
              return ctx.options.navPos = $event;
            })("change", function CustomizerComponent_Template_mat_radio_group_change_39_listener() {
              ctx.options.sidenavOpened = ctx.options.navPos === "side" ? true : false;
              return ctx.sendOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "side");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-radio-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "top ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "mat-divider", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomizerComponent_Template_mat_checkbox_change_46_listener() {
              ctx.options.dir = ctx.options.dir === "rtl" ? "ltr" : "rtl";
              return ctx.sendOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "RTL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_div_click_48_listener() {
              return ctx.closePanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.opened));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.options.theme);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.options.showHeader)("disabled", ctx.options.headerPos === "above" || ctx.options.navPos === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.options.headerPos);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "above")("disabled", !ctx.options.showHeader || ctx.options.navPos === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "static");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.options.navPos);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "side");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "top")("disabled", ctx.options.headerPos === "above" || !ctx.options.showHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.options.dir === "rtl");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx.opened));
          }
        },
        directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox],
        styles: [".customizer-handle {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 1;\n}\n[dir=rtl] .customizer-handle {\n  left: 30px;\n  right: auto;\n}\n.customizer-panel {\n  position: fixed;\n  top: 0;\n  right: -320px;\n  bottom: 0;\n  z-index: 3;\n  width: 320px;\n  padding: 0 16px;\n  box-sizing: border-box;\n  transform: translateX(0);\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  overflow: auto;\n}\n.customizer-panel.opened {\n  transform: translateX(-100%);\n}\n[dir=rtl] .customizer-panel {\n  left: -320px;\n  right: auto;\n}\n[dir=rtl] .customizer-panel.opened {\n  transform: translateX(100%);\n}\n.customizer-panel-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: background-color, visibility;\n  visibility: hidden;\n}\n.customizer-panel-overlay.opened {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGNvcmVcXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRkY7QUFJRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBRko7QUFNQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNERBQUE7RUFDQSxjQUFBO0FBSEY7QUFLRTtFQUNFLDRCQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUNFLDJCQUFBO0FBSk47QUFTQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQ3BCd0I7RURxQnhCLDREQ3BCK0I7RURxQi9CLGlEQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVFFO0VBQ0UsbUJBQUE7QUFOSiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc3R5bGUvdmFyaWFibGVzJztcclxuQHVzZSAnLi4vc3R5bGUvdHJhbnNpdGlvbnMnO1xyXG5cclxuLmN1c3RvbWl6ZXItaGFuZGxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gIFtkaXI9J3J0bCddICYge1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbWl6ZXItcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0zMjBweDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLnN3aWZ0LWVhc2Utb3V0KHRyYW5zZm9ybSk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICYub3BlbmVkIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG5cclxuICBbZGlyPSdydGwnXSAmIHtcclxuICAgIGxlZnQ6IC0zMjBweDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG5cclxuICAgICYub3BlbmVkIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbWl6ZXItcGFuZWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcmlhYmxlcy4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb247XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcmlhYmxlcy4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIHZpc2liaWxpdHk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICAmLm9wZW5lZCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJHhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJHNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJHRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiR0b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJGxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    25868:
    /*!**************************************************!*\
      !*** ./src/app/theme/header/header.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! screenfull */
      15950);
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _widgets_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../widgets/notification.component */
      17393);
      /* harmony import */


      var _widgets_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../widgets/user.component */
      94295);
      /* harmony import */


      var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../widgets/branding.component */
      21010);

      function HeaderComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.toggleSidenav.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_app_branding_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-branding");
        }
      }

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent() {
          _classCallCheck(this, _HeaderComponent);

          this.showToggle = true;
          this.showBranding = false;
          this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.toggleSidenavNotice = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(_HeaderComponent, [{
          key: "screenfull",
          get: function get() {
            return screenfull__WEBPACK_IMPORTED_MODULE_0__;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            if (this.screenfull.isEnabled) {
              this.screenfull.toggle();
            }
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)();
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        hostAttrs: [1, "matero-header"],
        inputs: {
          showToggle: "showToggle",
          showBranding: "showBranding"
        },
        outputs: {
          toggleSidenav: "toggleSidenav",
          toggleSidenavNotice: "toggleSidenavNotice"
        },
        decls: 12,
        vars: 2,
        consts: [[1, "matero-toolbar"], ["mat-icon-button", "", "class", "matero-toolbar-button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["fxFlex", ""], ["mat-icon-button", "", 1, "matero-toolbar-button"], ["mat-icon-button", "", "fxHide.lt-sm", "", 1, "matero-toolbar-button", 3, "click"], ["fxHide.lt-sm", ""], ["mat-icon-button", "", 1, "matero-toolbar-button", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_button_1_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderComponent_app_branding_2_Template, 1, 0, "app-branding", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
              return ctx.toggleFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-notification", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-user");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showToggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showBranding);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultShowHideDirective, _widgets_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent, _widgets_user_component__WEBPACK_IMPORTED_MODULE_2__.UserComponent, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_3__.BrandingComponent],
        styles: [".matero-header {\n  position: relative;\n  z-index: 200;\n  display: block;\n}\n.matero-header .matero-toolbar {\n  padding: 0 8px;\n}\n.matero-toolbar {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.matero-toolbar .badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: 50rem;\n}\n.matero-toolbar-button.mat-button, .matero-toolbar-button.mat-icon-button {\n  margin: 0 4px;\n}\n.matero-toolbar-button.mat-button {\n  min-width: unset;\n  line-height: 40px;\n  border-radius: 50rem;\n}\n.matero-toolbar-button.matero-avatar-button {\n  display: block;\n  padding: 0 4px;\n  font-size: 0;\n}\n.matero-toolbar-button.matero-avatar-button .matero-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50rem;\n}\n.matero-toolbar-button.matero-avatar-button .matero-username {\n  margin: 0 8px;\n  font-size: 14px;\n}\n.matero-branding {\n  display: inline-block;\n  color: inherit;\n  font-size: 16px;\n  white-space: nowrap;\n}\n.matero-branding-logo-expanded {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n[dir=rtl] .matero-branding-logo-expanded {\n  margin-left: 10px;\n  margin-right: auto;\n}\n.matero-branding-name {\n  font-weight: normal;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBR0E7RUFDRSw0Q0FBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQU1FO0VBRUUsYUFBQTtBQUpKO0FBT0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFMSjtBQVFFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTko7QUFRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFOTjtBQVNJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFQTjtBQVlBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVEY7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVRGO0FBV0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFhQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFWRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJvLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgLm1hdGVyby10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyby10b29sYmFyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEN1c3RvbWl6ZSB0b29sYmFyIGJ1dHRvblxyXG4ubWF0ZXJvLXRvb2xiYXItYnV0dG9uIHtcclxuICAmLm1hdC1idXR0b24sXHJcbiAgJi5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICB9XHJcblxyXG4gICYubWF0LWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcclxuICB9XHJcblxyXG4gICYubWF0ZXJvLWF2YXRhci1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuXHJcbiAgICAubWF0ZXJvLWF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXRlcm8tdXNlcm5hbWUge1xyXG4gICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0ZXJvLWJyYW5kaW5nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5tYXRlcm8tYnJhbmRpbmctbG9nby1leHBhbmRlZCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICBbZGlyPSdydGwnXSAmIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyby1icmFuZGluZy1uYW1lIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIl19 */"],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    15283:
    /*!******************************************************************!*\
      !*** ./src/app/theme/sidebar-notice/sidebar-notice.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarNoticeComponent": function SidebarNoticeComponent() {
          return (
            /* binding */
            _SidebarNoticeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);

      var _SidebarNoticeComponent = /*#__PURE__*/_createClass(function _SidebarNoticeComponent() {
        _classCallCheck(this, _SidebarNoticeComponent);
      });

      _SidebarNoticeComponent.ɵfac = function SidebarNoticeComponent_Factory(t) {
        return new (t || _SidebarNoticeComponent)();
      };

      _SidebarNoticeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SidebarNoticeComponent,
        selectors: [["app-sidebar-notice"]],
        decls: 5,
        vars: 0,
        consts: [["label", "Today"], ["label", "Notifications"]],
        template: function SidebarNoticeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Content 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Content 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTab],
        encapsulation: 2
      });
      /***/
    },

    /***/
    9295:
    /*!****************************************************!*\
      !*** ./src/app/theme/sidebar/sidebar.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../sidemenu/sidemenu.component */
      90928);
      /* harmony import */


      var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../widgets/branding.component */
      21010);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      32080);

      function SidebarComponent_div_0_mat_slide_toggle_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-slide-toggle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SidebarComponent_div_0_mat_slide_toggle_3_Template_mat_slide_toggle_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r2.toggleCollapsed.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.toggleChecked);
        }
      }

      function SidebarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-branding");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_div_0_mat_slide_toggle_3_Template, 1, 1, "mat-slide-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showToggle);
        }
      }

      var _SidebarComponent = /*#__PURE__*/_createClass(function _SidebarComponent() {
        _classCallCheck(this, _SidebarComponent);

        this.showToggle = true;
        this.showUser = true;
        this.showHeader = true;
        this.toggleChecked = false;
        this.toggleCollapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      });

      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)();
      };

      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        inputs: {
          showToggle: "showToggle",
          showUser: "showUser",
          showHeader: "showHeader",
          toggleChecked: "toggleChecked"
        },
        outputs: {
          toggleCollapsed: "toggleCollapsed"
        },
        decls: 3,
        vars: 2,
        consts: [["class", "matero-sidebar-header", 4, "ngIf"], [1, "matero-sidebar-main", "scrollbar"], [3, "ripple"], [1, "matero-sidebar-header"], ["fxFlex", ""], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 4, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-sidemenu", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ripple", ctx.showToggle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_0__.SidemenuComponent, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_1__.BrandingComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle],
        styles: [".matero-sidebar-header {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0 10px;\n  overflow: hidden;\n}\n@media (max-width: 599px) {\n  .matero-sidebar-header {\n    height: 56px;\n  }\n}\n.matero-header-white .matero-sidebar-header {\n  background-color: white;\n}\n.matero-sidebar-main {\n  height: calc(100% - 64px);\n  overflow: auto;\n}\n@media (max-width: 599px) {\n  .matero-sidebar-main {\n    height: calc(100% - 56px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcc3R5bGVcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFxzdHlsZVxcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlDRXVCO0VERHZCLGVBQUE7RUFDQSxnQkFBQTtBQUZGO0FFa0JJO0VGYkE7SUFDRSxZQ0hrQjtFREN0QjtBQUNGO0FBTUU7RUFDRSx1QkFBQTtBQUpKO0FBUUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFMRjtBRUtJO0VGR0E7SUFDRSx5QkFBQTtFQUxKO0FBQ0YiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL3N0eWxlL3ZhcmlhYmxlcyc7XHJcbkB1c2UgJy4uL3N0eWxlL2JyZWFrcG9pbnRzJztcclxuXHJcbi5tYXRlcm8tc2lkZWJhci1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IHZhcmlhYmxlcy4kdG9vbGJhci1oZWlnaHQtZGVza3RvcDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludHMuYnAtbHQoc21hbGwpIHtcclxuICAgICYge1xyXG4gICAgICBoZWlnaHQ6IHZhcmlhYmxlcy4kdG9vbGJhci1oZWlnaHQtbW9iaWxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29sb3JmdWxcclxuICAubWF0ZXJvLWhlYWRlci13aGl0ZSAmIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyby1zaWRlYmFyLW1haW4ge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3t2YXJpYWJsZXMuJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3B9KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludHMuYnAtbHQoc21hbGwpIHtcclxuICAgICYge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7dmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1tb2JpbGV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL3ZhcmlhYmxlcyc7XHJcblxyXG4vLyBMYXlvdXRcclxuJGd1dHRlcjogMTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFNpZGVuYXZcclxuJHNpZGVuYXYtd2lkdGg6IDI0MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDUwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXdpZHRoLW1vYmlsZTogMjgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb29sYmFyXHJcbiR0b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xyXG4kdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9wbWVudVxyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tZGVza3RvcDogJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3AgIWRlZmF1bHQ7XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU6ICR0b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRicmVha3BvaW50czogKFxyXG4gIHhzbWFsbDogMCxcclxuICBzbWFsbDogIDYwMHB4LFxyXG4gIG1lZGl1bTogOTYwcHgsXHJcbiAgbGFyZ2U6ICAxMjgwcHgsXHJcbiAgeGxhcmdlOiAxOTIwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIE1hdGVyaWFsIGNvbG9yc1xyXG4kbWF0LWNvbG9yczogKFxyXG4gIHJlZDogbWF0LiRyZWQtcGFsZXR0ZSxcclxuICBwaW5rOiBtYXQuJHBpbmstcGFsZXR0ZSxcclxuICBwdXJwbGU6IG1hdC4kcHVycGxlLXBhbGV0dGUsXHJcbiAgZGVlcC1wdXJwbGU6IG1hdC4kZGVlcC1wdXJwbGUtcGFsZXR0ZSxcclxuICBpbmRpZ286IG1hdC4kaW5kaWdvLXBhbGV0dGUsXHJcbiAgYmx1ZTogbWF0LiRibHVlLXBhbGV0dGUsXHJcbiAgbGlnaHQtYmx1ZTogbWF0LiRsaWdodC1ibHVlLXBhbGV0dGUsXHJcbiAgY3lhbjogbWF0LiRjeWFuLXBhbGV0dGUsXHJcbiAgdGVhbDogbWF0LiR0ZWFsLXBhbGV0dGUsXHJcbiAgZ3JlZW46IG1hdC4kZ3JlZW4tcGFsZXR0ZSxcclxuICBsaWdodC1ncmVlbjogbWF0LiRsaWdodC1ncmVlbi1wYWxldHRlLFxyXG4gIGxpbWU6IG1hdC4kbGltZS1wYWxldHRlLFxyXG4gIHllbGxvdzogbWF0LiR5ZWxsb3ctcGFsZXR0ZSxcclxuICBhbWJlcjogbWF0LiRhbWJlci1wYWxldHRlLFxyXG4gIG9yYW5nZTogbWF0LiRvcmFuZ2UtcGFsZXR0ZSxcclxuICBkZWVwLW9yYW5nZTogbWF0LiRkZWVwLW9yYW5nZS1wYWxldHRlLFxyXG4gIGJyb3duOiBtYXQuJGJyb3duLXBhbGV0dGUsXHJcbiAgZ3JheTogbWF0LiRncmF5LXBhbGV0dGUsXHJcbiAgYmx1ZS1ncmF5OiBtYXQuJGJsdWUtZ3JheS1wYWxldHRlLFxyXG4gIHdoaXRlOiB3aGl0ZSxcclxuICBibGFjazogYmxhY2ssXHJcbiAgbGlnaHQ6IHdoaXRlLFxyXG4gIGRhcms6IHJnYmEoYmxhY2ssIC44NyksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBUaGUgbWF0ZXJpYWwgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzXHJcbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogdmFyaWFibGVzLiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjtcclxuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogdmFyaWFibGVzLiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb247XHJcbiIsIkB1c2UgJ3Nhc3M6bWFwJztcclxuQHVzZSAndmFyaWFibGVzJztcclxuXHJcbkBmdW5jdGlvbiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzOiB2YXJpYWJsZXMuJGJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogbWFwLmdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgQHJldHVybiAkbWluO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLlxyXG5AbWl4aW4gYnAtZ3QoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtaW46IGJwKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG5cclxuICBAaWYgJG1pbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXHJcbkBtaXhpbiBicC1sdCgkbmFtZSwgJGJyZWFrcG9pbnRzOiB2YXJpYWJsZXMuJGJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogYnAoJG5hbWUsICRicmVha3BvaW50cykgLSAxcHg7XHJcblxyXG4gIEBpZiAkbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    15779:
    /*!*******************************************************!*\
      !*** ./src/app/theme/sidebar/user-panel.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPanelComponent": function UserPanelComponent() {
          return (
            /* binding */
            _UserPanelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/authentication/auth.service */
      41219);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _UserPanelComponent = /*#__PURE__*/function () {
        function _UserPanelComponent(router, auth) {
          _classCallCheck(this, _UserPanelComponent);

          this.router = router;
          this.auth = auth;
        }

        _createClass(_UserPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.auth.user().subscribe(function (user) {
              return _this21.user = user;
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this22 = this;

            this.auth.logout().subscribe(function () {
              return _this22.router.navigateByUrl('/auth/login');
            });
          }
        }]);

        return _UserPanelComponent;
      }();

      _UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) {
        return new (t || _UserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _UserPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _UserPanelComponent,
        selectors: [["app-user-panel"]],
        decls: 16,
        vars: 3,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "matero-user-panel"], ["alt", "avatar", "width", "64", 1, "matero-user-panel-avatar", 3, "src"], [1, "matero-user-panel-name"], [1, "matero-user-panel-email"], [1, "matero-user-panel-icons"], ["routerLink", "/profile/overview", "mat-icon-button", ""], [1, "icon-20"], ["routerLink", "/profile/settings", "mat-icon-button", ""], ["mat-icon-button", "", 3, "click"]],
        template: function UserPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserPanelComponent_Template_a_click_13_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.email);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        styles: [".matero-user-panel[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n\n.matero-user-panel-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-bottom: 8px;\n  border-radius: 50rem;\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.matero-user-panel-name[_ngcontent-%COMP%], .matero-user-panel-email[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 8px;\n  font-weight: normal;\n}\n\n.matero-user-panel-name[_ngcontent-%COMP%], .matero-user-panel-email[_ngcontent-%COMP%], .matero-user-panel-icons[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0REFBQTtBQUZGOztBQUtBOztFQUVFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7OztFQUdFLFVBQUE7RUFDQSwwREFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSiIsImZpbGUiOiJ1c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc3R5bGUvdHJhbnNpdGlvbnMnO1xyXG5cclxuLm1hdGVyby11c2VyLXBhbmVsIHtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbn1cclxuXHJcbi8vIFNldCBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgY2FuIGF2b2lkIGZsYXNoaW5nIGJlZm9yZSBhdmF0YXIgaW1hZ2UgbG9hZGVkLlxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtYXZhdGFyIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLnN3aWZ0LWVhc2Utb3V0KHRyYW5zZm9ybSk7XHJcbn1cclxuXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5zd2lmdC1lYXNlLW91dChvcGFjaXR5KTtcclxufVxyXG5cclxuLm1hdGVyby11c2VyLXBhbmVsLWljb25zIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAubWF0LWljb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    68720:
    /*!*******************************************************!*\
      !*** ./src/app/theme/sidemenu/accordion.directive.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccordionDirective": function AccordionDirective() {
          return (
            /* binding */
            _AccordionDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AccordionDirective = /*#__PURE__*/function () {
        function _AccordionDirective(router, menu) {
          var _this23 = this;

          _classCallCheck(this, _AccordionDirective);

          this.router = router;
          this.menu = menu;
          this.navlinks = [];
          this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd;
          })).subscribe(function () {
            return _this23.checkOpenLinks();
          }); // Fix opening status for async menu data

          this.menu.change().subscribe(function () {
            setTimeout(function () {
              return _this23.checkOpenLinks();
            });
          });
        }

        _createClass(_AccordionDirective, [{
          key: "addLink",
          value: function addLink(link) {
            this.navlinks.push(link);
          }
        }, {
          key: "closeOtherLinks",
          value: function closeOtherLinks(openLink) {
            this.navlinks.forEach(function (link) {
              if (link !== openLink) {
                link.open = false;
              }
            });
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(link) {
            var index = this.navlinks.indexOf(link);

            if (index !== -1) {
              this.navlinks.splice(index, 1);
            }
          }
        }, {
          key: "checkOpenLinks",
          value: function checkOpenLinks() {
            var _this24 = this;

            this.navlinks.forEach(function (link) {
              if (link.group) {
                if (_this24.router.url.split('/').includes(link.group)) {
                  link.open = true;

                  _this24.closeOtherLinks(link);
                }
              }
            });
          }
        }]);

        return _AccordionDirective;
      }();

      _AccordionDirective.ɵfac = function AccordionDirective_Factory(t) {
        return new (t || _AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService));
      };

      _AccordionDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _AccordionDirective,
        selectors: [["", "navAccordion", ""]]
      });
      /***/
    },

    /***/
    30535:
    /*!***********************************************************!*\
      !*** ./src/app/theme/sidemenu/accordionItem.directive.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccordionItemDirective": function AccordionItemDirective() {
          return (
            /* binding */
            _AccordionItemDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accordion.directive */
      68720);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AccordionItemDirective = /*#__PURE__*/function () {
        function _AccordionItemDirective(nav) {
          _classCallCheck(this, _AccordionItemDirective);

          this.OPEN = false;
          this.nav = nav;
        }

        _createClass(_AccordionItemDirective, [{
          key: "open",
          get: function get() {
            return this.OPEN;
          },
          set: function set(value) {
            // Only sub menu can be open
            this.OPEN = this.type === 'sub' && value;

            if (value) {
              this.nav.closeOtherLinks(this);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav.addLink(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.nav.removeGroup(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.open = !this.open;
          }
        }]);

        return _AccordionItemDirective;
      }();

      _AccordionItemDirective.ɵfac = function AccordionItemDirective_Factory(t) {
        return new (t || _AccordionItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective));
      };

      _AccordionItemDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _AccordionItemDirective,
        selectors: [["", "navAccordionItem", ""]],
        hostVars: 2,
        hostBindings: function AccordionItemDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
          }
        },
        inputs: {
          group: "group",
          type: "type",
          open: "open"
        }
      });
      /***/
    },

    /***/
    99483:
    /*!*************************************************************!*\
      !*** ./src/app/theme/sidemenu/accordionanchor.directive.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccordionAnchorDirective": function AccordionAnchorDirective() {
          return (
            /* binding */
            _AccordionAnchorDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _accordionItem_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accordionItem.directive */
      30535);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AccordionAnchorDirective = /*#__PURE__*/function () {
        function _AccordionAnchorDirective(navlink) {
          _classCallCheck(this, _AccordionAnchorDirective);

          this.navlink = navlink;
        }

        _createClass(_AccordionAnchorDirective, [{
          key: "onClick",
          value: function onClick(e) {
            this.navlink.toggle();
          }
        }]);

        return _AccordionAnchorDirective;
      }();

      _AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) {
        return new (t || _AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionItem_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionItemDirective));
      };

      _AccordionAnchorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _AccordionAnchorDirective,
        selectors: [["", "navAccordionToggle", ""]],
        hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    90928:
    /*!******************************************************!*\
      !*** ./src/app/theme/sidemenu/sidemenu.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidemenuComponent": function SidemenuComponent() {
          return (
            /* binding */
            _SidemenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accordion.directive */
      68720);
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-permissions */
      85470);
      /* harmony import */


      var _accordionItem_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accordionItem.directive */
      30535);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./accordionanchor.directive */
      99483);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _c1 = function _c1(a0, a1) {
        return {
          item: a0,
          level: a1
        };
      };

      function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var parentRoute_r5 = ctx_r15.parentRoute;
          var level_r6 = ctx_r15.level;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r10.buildRoute(parentRoute_r5.concat(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, menuItem_r8.route))))("matRippleDisabled", !ctx_r10.ripple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c1, menuItem_r8, level_r6));
        }
      }

      function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().level;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", menuItem_r8.route, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("matRippleDisabled", !ctx_r11.ripple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c1, menuItem_r8, level_r6));
        }
      }

      function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().level;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", menuItem_r8.route, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("matRippleDisabled", !ctx_r12.ripple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c1, menuItem_r8, level_r6));
        }
      }

      function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().level;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", !ctx_r13.ripple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c1, menuItem_r8, level_r6));
        }
      }

      var _c2 = function _c2(a0, a1, a2) {
        return {
          menuList: a0,
          parentRoute: a1,
          level: a2
        };
      };

      function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_1_Template, 2, 9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_2_Template, 2, 7, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_3_Template, 2, 7, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_4_Template, 2, 6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](5, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var parentRoute_r5 = ctx_r23.parentRoute;
          var level_r6 = ctx_r23.level;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", menuItem_r8.route)("type", menuItem_r8.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](10, _c2, menuItem_r8.children, parentRoute_r5.concat(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, menuItem_r8.route)), level_r6 + 1));
        }
      }

      function SidemenuComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_Template, 6, 14, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var menuItem_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngxPermissionsOnly", menuItem_r8.permissions == null ? null : menuItem_r8.permissions.only)("ngxPermissionsExcept", menuItem_r8.permissions == null ? null : menuItem_r8.permissions.except);
        }
      }

      function SidemenuComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_Template, 2, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuList_r4 = ctx.menuList;
          var level_r6 = ctx.level;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate2"]("matero-sidemenu ", level_r6 > 0 ? "matero-sidemenu-sub" : "", " level-", level_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuList_r4);
        }
      }

      function SidemenuComponent_ng_template_4_mat_icon_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.icon);
        }
      }

      function SidemenuComponent_ng_template_4_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("menu-label bg-", item_r24.label.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r24.label.value, " ");
        }
      }

      function SidemenuComponent_ng_template_4_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("menu-badge bg-", item_r24.badge.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r24.badge.value, " ");
        }
      }

      function SidemenuComponent_ng_template_4_mat_icon_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r24.type === "sub" ? "arrow_drop_down" : "launch", " ");
        }
      }

      function SidemenuComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SidemenuComponent_ng_template_4_mat_icon_0_Template, 2, 1, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidemenuComponent_ng_template_4_span_3_Template, 2, 4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidemenuComponent_ng_template_4_span_5_Template, 2, 4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidemenuComponent_ng_template_4_mat_icon_6_Template, 2, 1, "mat-icon", 19);
        }

        if (rf & 2) {
          var item_r24 = ctx.item;
          var level_r25 = ctx.level;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", level_r25 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.badge);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.type !== "link");
        }
      }

      var _c3 = function _c3() {
        return [];
      };

      var _c4 = function _c4(a0, a1) {
        return {
          menuList: a0,
          parentRoute: a1,
          level: 0
        };
      };

      var _SidemenuComponent = /*#__PURE__*/_createClass(function _SidemenuComponent(menu) {
        _classCallCheck(this, _SidemenuComponent);

        this.menu = menu; // NOTE: Ripple effect make page flashing on mobile

        this.ripple = false;
        this.menu$ = this.menu.getAll();
        this.buildRoute = this.menu.buildRoute;
      });

      _SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) {
        return new (t || _SidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService));
      };

      _SidemenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _SidemenuComponent,
        selectors: [["app-sidemenu"]],
        inputs: {
          ripple: "ripple"
        },
        decls: 6,
        vars: 8,
        consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuListTpl", ""], ["linkTypeTpl", ""], ["navAccordion", ""], [4, "ngFor", "ngForOf"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["navAccordionItem", "", "routerLinkActive", "active", 1, "matero-sidemenu-item", 3, "group", "type"], ["class", "matero-sidemenu-link", "matRipple", "", 3, "routerLink", "matRippleDisabled", 4, "ngIf"], ["class", "matero-sidemenu-link", "matRipple", "", 3, "href", "matRippleDisabled", 4, "ngIf"], ["class", "matero-sidemenu-link", "target", "_blank", "matRipple", "", 3, "href", "matRippleDisabled", 4, "ngIf"], ["navAccordionToggle", "", "class", "matero-sidemenu-toggle", "matRipple", "", 3, "matRippleDisabled", 4, "ngIf"], ["matRipple", "", 1, "matero-sidemenu-link", 3, "routerLink", "matRippleDisabled"], ["matRipple", "", 1, "matero-sidemenu-link", 3, "href", "matRippleDisabled"], ["target", "_blank", "matRipple", "", 1, "matero-sidemenu-link", 3, "href", "matRippleDisabled"], ["navAccordionToggle", "", "matRipple", "", 1, "matero-sidemenu-toggle", 3, "matRippleDisabled"], ["class", "menu-icon", 4, "ngIf"], [1, "menu-name"], [3, "class", 4, "ngIf"], ["fxFlex", ""], ["class", "menu-caret", 4, "ngIf"], [1, "menu-icon"], [1, "menu-caret"]],
        template: function SidemenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidemenuComponent_ng_template_2_Template, 2, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidemenuComponent_ng_template_4_Template, 7, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.menu$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c3)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _accordion_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_permissions__WEBPACK_IMPORTED_MODULE_6__.NgxPermissionsDirective, _accordionItem_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionItemDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_3__.AccordionAnchorDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
        styles: [".matero-sidemenu {\n  width: 240px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.matero-sidemenu .matero-sidemenu-item {\n  display: block;\n  height: auto;\n  padding: 0;\n}\n.matero-sidemenu .matero-sidemenu-item.open > .matero-sidemenu {\n  max-height: 2000px;\n}\n.matero-sidemenu .matero-sidemenu-item.open > .matero-sidemenu-toggle > .menu-caret {\n  transform: rotate(-180deg);\n}\n.matero-sidemenu.matero-sidemenu-sub {\n  max-height: 0;\n  padding-top: 0;\n  overflow: hidden;\n  transform: translateZ(0) !important;\n  transition: max-height 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.matero-sidemenu.matero-sidemenu-sub .matero-sidemenu-item {\n  border-left-width: 0;\n}\n.matero-sidemenu a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 48px;\n  padding: 0 16px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.matero-sidemenu .mat-icon.menu-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 16px;\n  font-size: 18px;\n  line-height: 18px;\n}\n[dir=rtl] .matero-sidemenu .mat-icon.menu-icon {\n  margin-left: 16px;\n  margin-right: auto;\n}\n.matero-sidemenu .mat-icon.menu-caret {\n  display: block;\n  text-align: center;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.matero-sidemenu .menu-name,\n.matero-sidemenu .menu-label,\n.matero-sidemenu .menu-badge {\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.matero-sidemenu .menu-label,\n.matero-sidemenu .menu-badge {\n  display: inline-block;\n  min-width: 18px;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  color: #fff;\n  background-color: #757575;\n  border-radius: 4px;\n}\n.matero-sidemenu .menu-badge {\n  border-radius: 50rem;\n}\n.matero-sidemenu.level-0 > li > a > .menu-name {\n  margin-right: 5px;\n}\n[dir=rtl] .matero-sidemenu.level-0 > li > a > .menu-name {\n  margin-left: 5px;\n  margin-right: auto;\n}\n.matero-sidemenu.level-1 > li > a {\n  padding-left: 50px;\n}\n[dir=rtl] .matero-sidemenu.level-1 > li > a {\n  padding-left: 16px;\n  padding-right: 50px;\n}\n.matero-sidemenu.level-2 > li > a {\n  padding-left: 64px;\n}\n[dir=rtl] .matero-sidemenu.level-2 > li > a {\n  padding-left: 16px;\n  padding-right: 64px;\n}\n.matero-sidemenu.level-2 [class^=level-] > li > a {\n  padding-left: 80px;\n}\n[dir=rtl] .matero-sidemenu.level-2 [class^=level-] > li > a {\n  padding-left: 16px;\n  padding-right: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcc3R5bGVcXF9iYWRnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUNFYztFRERkLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEo7QUFNTTtFQUNFLGtCQUFBO0FBSlI7QUFPTTtFQUNFLDBCQUFBO0FBTFI7QUFVRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlEQUFBO0FBUko7QUFVSTtFQUNFLG9CQUFBO0FBUk47QUFZRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVhKO0FBYUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBWE47QUFlRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0FBYko7QUFnQkU7OztFQUdFLDBEQUFBO0FBZEo7QUFpQkU7O0VFeEVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBRjJERjtBQU9FO0VBQ0Usb0JBQUE7QUFMSjtBQVFFO0VBQ0UsaUJBQUE7QUFOSjtBQVFJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQU5OO0FBVUU7RUFDRSxrQkFBQTtBQVJKO0FBVUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUk47QUFZRTtFQUNFLGtCQUFBO0FBVko7QUFZSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFWTjtBQWNFO0VBQ0Usa0JBQUE7QUFaSjtBQWNJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVpOIiwiZmlsZSI6InNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc3R5bGUvdmFyaWFibGVzJztcclxuQHVzZSAnLi4vc3R5bGUvdHJhbnNpdGlvbnMnO1xyXG5AdXNlICcuLi9zdHlsZS9iYWRnZScgYXMgKjtcclxuXHJcbi5tYXRlcm8tc2lkZW1lbnUge1xyXG4gIHdpZHRoOiB2YXJpYWJsZXMuJHNpZGVuYXYtd2lkdGg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgLm1hdGVyby1zaWRlbWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICA+IC5tYXRlcm8tc2lkZW1lbnUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgPiAubWF0ZXJvLXNpZGVtZW51LXRvZ2dsZSA+IC5tZW51LWNhcmV0IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5tYXRlcm8tc2lkZW1lbnUtc3ViIHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLmZhc3Qtb3V0LXNsb3cobWF4LWhlaWdodCk7XHJcblxyXG4gICAgLm1hdGVyby1zaWRlbWVudS1pdGVtIHtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi5tZW51LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi5tZW51LWNhcmV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnMuZmFzdC1vdXQtc2xvdyh0cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtbmFtZSxcclxuICAubWVudS1sYWJlbCxcclxuICAubWVudS1iYWRnZSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5zd2lmdC1lYXNlLW91dChvcGFjaXR5KTtcclxuICB9XHJcblxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIEBpbmNsdWRlIGJhZGdlKCk7XHJcbiAgfVxyXG5cclxuICAubWVudS1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcclxuICB9XHJcblxyXG4gICYubGV2ZWwtMCA+IGxpID4gYSA+IC5tZW51LW5hbWUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubGV2ZWwtMSA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubGV2ZWwtMiA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubGV2ZWwtMiBbY2xhc3NePSdsZXZlbC0nXSA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL3ZhcmlhYmxlcyc7XHJcblxyXG4vLyBMYXlvdXRcclxuJGd1dHRlcjogMTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFNpZGVuYXZcclxuJHNpZGVuYXYtd2lkdGg6IDI0MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDUwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXdpZHRoLW1vYmlsZTogMjgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb29sYmFyXHJcbiR0b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xyXG4kdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9wbWVudVxyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tZGVza3RvcDogJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3AgIWRlZmF1bHQ7XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU6ICR0b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRicmVha3BvaW50czogKFxyXG4gIHhzbWFsbDogMCxcclxuICBzbWFsbDogIDYwMHB4LFxyXG4gIG1lZGl1bTogOTYwcHgsXHJcbiAgbGFyZ2U6ICAxMjgwcHgsXHJcbiAgeGxhcmdlOiAxOTIwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIE1hdGVyaWFsIGNvbG9yc1xyXG4kbWF0LWNvbG9yczogKFxyXG4gIHJlZDogbWF0LiRyZWQtcGFsZXR0ZSxcclxuICBwaW5rOiBtYXQuJHBpbmstcGFsZXR0ZSxcclxuICBwdXJwbGU6IG1hdC4kcHVycGxlLXBhbGV0dGUsXHJcbiAgZGVlcC1wdXJwbGU6IG1hdC4kZGVlcC1wdXJwbGUtcGFsZXR0ZSxcclxuICBpbmRpZ286IG1hdC4kaW5kaWdvLXBhbGV0dGUsXHJcbiAgYmx1ZTogbWF0LiRibHVlLXBhbGV0dGUsXHJcbiAgbGlnaHQtYmx1ZTogbWF0LiRsaWdodC1ibHVlLXBhbGV0dGUsXHJcbiAgY3lhbjogbWF0LiRjeWFuLXBhbGV0dGUsXHJcbiAgdGVhbDogbWF0LiR0ZWFsLXBhbGV0dGUsXHJcbiAgZ3JlZW46IG1hdC4kZ3JlZW4tcGFsZXR0ZSxcclxuICBsaWdodC1ncmVlbjogbWF0LiRsaWdodC1ncmVlbi1wYWxldHRlLFxyXG4gIGxpbWU6IG1hdC4kbGltZS1wYWxldHRlLFxyXG4gIHllbGxvdzogbWF0LiR5ZWxsb3ctcGFsZXR0ZSxcclxuICBhbWJlcjogbWF0LiRhbWJlci1wYWxldHRlLFxyXG4gIG9yYW5nZTogbWF0LiRvcmFuZ2UtcGFsZXR0ZSxcclxuICBkZWVwLW9yYW5nZTogbWF0LiRkZWVwLW9yYW5nZS1wYWxldHRlLFxyXG4gIGJyb3duOiBtYXQuJGJyb3duLXBhbGV0dGUsXHJcbiAgZ3JheTogbWF0LiRncmF5LXBhbGV0dGUsXHJcbiAgYmx1ZS1ncmF5OiBtYXQuJGJsdWUtZ3JheS1wYWxldHRlLFxyXG4gIHdoaXRlOiB3aGl0ZSxcclxuICBibGFjazogYmxhY2ssXHJcbiAgbGlnaHQ6IHdoaXRlLFxyXG4gIGRhcms6IHJnYmEoYmxhY2ssIC44NyksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBUaGUgbWF0ZXJpYWwgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzXHJcbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogdmFyaWFibGVzLiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjtcclxuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogdmFyaWFibGVzLiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb247XHJcbiIsIkBtaXhpbiBiYWRnZSgpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAxOHB4O1xyXG4gIHBhZGRpbmc6IC4zNWVtIC42NWVtO1xyXG4gIGZvbnQtc2l6ZTogLjc1ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    85056:
    /*!***************************************!*\
      !*** ./src/app/theme/theme.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThemeModule": function ThemeModule() {
          return (
            /* binding */
            _ThemeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);
      /* harmony import */


      var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-layout/admin-layout.component */
      36200);
      /* harmony import */


      var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-layout/auth-layout.component */
      84951);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      9295);
      /* harmony import */


      var _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar/user-panel.component */
      15779);
      /* harmony import */


      var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sidemenu/sidemenu.component */
      90928);
      /* harmony import */


      var _sidemenu_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sidemenu/accordion.directive */
      68720);
      /* harmony import */


      var _sidemenu_accordionItem_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidemenu/accordionItem.directive */
      30535);
      /* harmony import */


      var _sidemenu_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sidemenu/accordionanchor.directive */
      99483);
      /* harmony import */


      var _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./sidebar-notice/sidebar-notice.component */
      15283);
      /* harmony import */


      var _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./topmenu/topmenu.component */
      75242);
      /* harmony import */


      var _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./topmenu/topmenu-panel.component */
      38863);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./header/header.component */
      25868);
      /* harmony import */


      var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./widgets/branding.component */
      21010);
      /* harmony import */


      var _widgets_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./widgets/notification.component */
      17393);
      /* harmony import */


      var _widgets_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./widgets/user.component */
      94295);
      /* harmony import */


      var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./customizer/customizer.component */
      75278);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-permissions */
      85470);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _ThemeModule = /*#__PURE__*/_createClass(function _ThemeModule() {
        _classCallCheck(this, _ThemeModule);
      });

      _ThemeModule.ɵfac = function ThemeModule_Factory(t) {
        return new (t || _ThemeModule)();
      };

      _ThemeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: _ThemeModule
      });
      _ThemeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](_ThemeModule, {
          declarations: [_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdminLayoutComponent, _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_4__.UserPanelComponent, _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__.SidemenuComponent, _sidemenu_accordion_directive__WEBPACK_IMPORTED_MODULE_6__.AccordionDirective, _sidemenu_accordionItem_directive__WEBPACK_IMPORTED_MODULE_7__.AccordionItemDirective, _sidemenu_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__.AccordionAnchorDirective, _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_9__.SidebarNoticeComponent, _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__.TopmenuComponent, _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__.TopmenuPanelComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_13__.BrandingComponent, _widgets_notification_component__WEBPACK_IMPORTED_MODULE_14__.NotificationComponent, _widgets_user_component__WEBPACK_IMPORTED_MODULE_15__.UserComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_16__.CustomizerComponent],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetComponentScope"](_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__.TopmenuComponent, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, ngx_permissions__WEBPACK_IMPORTED_MODULE_20__.NgxPermissionsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgTemplateOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatAnchor, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__.TopmenuPanelComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon], [_angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe]);
      /***/

    },

    /***/
    38863:
    /*!**********************************************************!*\
      !*** ./src/app/theme/topmenu/topmenu-panel.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TopmenuPanelComponent": function TopmenuPanelComponent() {
          return (
            /* binding */
            _TopmenuPanelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-permissions */
      85470);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function TopmenuPanelComponent_ng_container_1_ng_template_1_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopmenuPanelComponent_ng_container_1_ng_template_1_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r9.onRouterLinkClick(_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _r8.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r4.buildRoute(ctx_r4.parentRoute.concat(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, item_r1.route))));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
        }
      }

      function TopmenuPanelComponent_ng_container_1_ng_template_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "launch");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
        }
      }

      function TopmenuPanelComponent_ng_container_1_ng_template_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "launch");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
        }
      }

      function TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-topmenu-panel", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("routeChange", function TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template_app_topmenu_panel_routeChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.onRouteChange($event, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var index_r2 = ctx_r18.index;
          var item_r1 = ctx_r18.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r7.menuStates[index_r2].active);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r14.menuPanel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", item_r1.children)("parentRoute", ctx_r7.parentRoute.concat(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, item_r1.route)))("level", ctx_r7.level + 1);
        }
      }

      function TopmenuPanelComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopmenuPanelComponent_ng_container_1_ng_template_1_button_0_Template, 3, 6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_ng_template_1_a_1_Template, 5, 2, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopmenuPanelComponent_ng_container_1_ng_template_1_a_2_Template, 5, 2, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template, 4, 9, "button", 5);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "sub");
        }
      }

      function TopmenuPanelComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_ng_template_1_Template, 4, 4, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", item_r1.permissions == null ? null : item_r1.permissions.only)("ngxPermissionsExcept", item_r1.permissions == null ? null : item_r1.permissions.except);
        }
      }

      var _TopmenuPanelComponent = /*#__PURE__*/function () {
        function _TopmenuPanelComponent(menu, router) {
          _classCallCheck(this, _TopmenuPanelComponent);

          this.menu = menu;
          this.router = router;
          this.items = [];
          this.parentRoute = [];
          this.level = 1;
          this.routeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.menuStates = [];
          this.buildRoute = this.menu.buildRoute;
        }

        _createClass(_TopmenuPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.items.forEach(function (item) {
              _this25.menuStates.push({
                active: _this25.checkRoute(item),
                route: item.route
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "checkRoute",
          value: function checkRoute(item) {
            if (!item.route) {
              return this.checkChildRoute(item.children);
            } else {
              return this.router.url.split('/').includes(item.route);
            }
          }
        }, {
          key: "checkChildRoute",
          value: function checkChildRoute(menuItems) {
            var _this26 = this;

            return menuItems.some(function (child) {
              if (_this26.router.url.split('/').includes(child.route)) {
                return true;
              }

              if (!child.route && child.children) {
                _this26.checkChildRoute(child.children);
              }

              return false;
            });
          }
        }, {
          key: "onRouterLinkClick",
          value: function onRouterLinkClick(rla) {
            this.routeChange.emit(rla);
          }
        }, {
          key: "onRouteChange",
          value: function onRouteChange(rla, index) {
            var _this27 = this;

            var _a;

            this.routeChange.emit(rla);
            (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.routerSubscription = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
            })).subscribe(function (e) {
              _this27.menuStates.forEach(function (item) {
                return item.active = false;
              });

              setTimeout(function () {
                return _this27.menuStates[index].active = rla.isActive;
              });
            });
          }
        }]);

        return _TopmenuPanelComponent;
      }();

      _TopmenuPanelComponent.ɵfac = function TopmenuPanelComponent_Factory(t) {
        return new (t || _TopmenuPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _TopmenuPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TopmenuPanelComponent,
        selectors: [["app-topmenu-panel"]],
        viewQuery: function TopmenuPanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuPanel = _t.first);
          }
        },
        inputs: {
          items: "items",
          parentRoute: "parentRoute",
          level: "level"
        },
        outputs: {
          routeChange: "routeChange"
        },
        decls: 2,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["mat-menu-item", "", "routerLinkActive", "", 3, "routerLink", "active", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "href", 4, "ngIf"], ["mat-menu-item", "", "target", "_blank", 3, "href", 4, "ngIf"], ["mat-menu-item", "", "routerLinkActive", "active", 3, "matMenuTriggerFor", "active", 4, "ngIf"], ["mat-menu-item", "", "routerLinkActive", "", 3, "routerLink", "click"], ["rla", "routerLinkActive"], ["mat-menu-item", "", 3, "href"], [1, "menu-name"], ["mat-menu-item", "", "target", "_blank", 3, "href"], ["mat-menu-item", "", "routerLinkActive", "active", 3, "matMenuTriggerFor"], [3, "items", "parentRoute", "level", "routeChange"], ["submenu", ""]],
        template: function TopmenuPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_Template, 2, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_permissions__WEBPACK_IMPORTED_MODULE_6__.NgxPermissionsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _TopmenuPanelComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    75242:
    /*!****************************************************!*\
      !*** ./src/app/theme/topmenu/topmenu.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TopmenuComponent": function TopmenuComponent() {
          return (
            /* binding */
            _TopmenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _c1 = function _c1(a0) {
        return {
          item: a0
        };
      };

      function TopmenuComponent_ng_container_1_ng_template_1_button_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r6.buildRoute(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, menuItem_r3.route)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, menuItem_r3));
        }
      }

      function TopmenuComponent_ng_container_1_ng_template_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", menuItem_r3.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, menuItem_r3));
        }
      }

      function TopmenuComponent_ng_container_1_ng_template_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", menuItem_r3.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, menuItem_r3));
        }
      }

      function TopmenuComponent_ng_container_1_ng_template_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-topmenu-panel", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("routeChange", function TopmenuComponent_ng_container_1_ng_template_1_button_3_Template_app_topmenu_panel_routeChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.onRouteChange($event, index_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var index_r4 = ctx_r17.index;
          var menuItem_r3 = ctx_r17.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r9.menuStates[index_r4].active);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r13.menuPanel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, menuItem_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", menuItem_r3.children)("parentRoute", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, menuItem_r3.route))("level", 1);
        }
      }

      function TopmenuComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopmenuComponent_ng_container_1_ng_template_1_button_0_Template, 2, 7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_ng_template_1_a_1_Template, 2, 5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopmenuComponent_ng_container_1_ng_template_1_a_2_Template, 2, 5, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuComponent_ng_container_1_ng_template_1_button_3_Template, 4, 12, "button", 7);
        }

        if (rf & 2) {
          var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "sub");
        }
      }

      function TopmenuComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_ng_template_1_Template, 4, 4, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var menuItem_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", menuItem_r3.permissions == null ? null : menuItem_r3.permissions.only)("ngxPermissionsExcept", menuItem_r3.permissions == null ? null : menuItem_r3.permissions.except);
        }
      }

      function TopmenuComponent_ng_template_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge menu-label bg-", item_r19.label.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.label.value, " ");
        }
      }

      function TopmenuComponent_ng_template_3_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge menu-badge bg-", item_r19.badge.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.badge.value, " ");
        }
      }

      function TopmenuComponent_ng_template_3_mat_icon_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.type === "sub" ? "arrow_drop_down" : "launch", " ");
        }
      }

      function TopmenuComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TopmenuComponent_ng_template_3_span_4_Template, 2, 4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TopmenuComponent_ng_template_3_span_5_Template, 2, 4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TopmenuComponent_ng_template_3_mat_icon_6_Template, 2, 1, "mat-icon", 18);
        }

        if (rf & 2) {
          var item_r19 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.badge);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.type !== "link");
        }
      }

      var _TopmenuComponent = /*#__PURE__*/function () {
        function _TopmenuComponent(menu, router) {
          var _this28 = this;

          _classCallCheck(this, _TopmenuComponent);

          this.menu = menu;
          this.router = router;
          this.menu$ = this.menu.getAll();
          this.buildRoute = this.menu.buildRoute;
          this.menuList = [];
          this.menuStates = [];
          this.menuSubscription = this.menu$.subscribe(function (res) {
            _this28.menuList = res;

            _this28.menuList.forEach(function (item) {
              _this28.menuStates.push({
                active: _this28.router.url.split('/').includes(item.route),
                route: item.route
              });
            });
          });
        }

        _createClass(_TopmenuComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            this.menuSubscription.unsubscribe();
            (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "onRouteChange",
          value: function onRouteChange(rla, index) {
            var _this29 = this;

            var _a;

            (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.routerSubscription = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
            })).subscribe(function (e) {
              _this29.menuStates.forEach(function (item) {
                return item.active = false;
              });

              setTimeout(function () {
                return _this29.menuStates[index].active = rla.isActive;
              });
            });
          }
        }]);

        return _TopmenuComponent;
      }();

      _TopmenuComponent.ɵfac = function TopmenuComponent_Factory(t) {
        return new (t || _TopmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _TopmenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TopmenuComponent,
        selectors: [["app-topmenu"]],
        hostAttrs: [1, "matero-topmenu"],
        decls: 5,
        vars: 3,
        consts: [["mat-tab-nav-bar", ""], [4, "ngFor", "ngForOf"], ["linkTypeTpl", ""], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["mat-button", "", 3, "href", 4, "ngIf"], ["mat-button", "", "target", "_blank", 3, "href", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", 3, "matMenuTriggerFor", "active", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-button", "", 3, "href"], ["mat-button", "", "target", "_blank", 3, "href"], ["mat-button", "", "routerLinkActive", "active", 3, "matMenuTriggerFor"], [3, "items", "parentRoute", "level", "routeChange"], ["submenu", ""], [1, "menu-icon"], [1, "menu-name"], [3, "class", 4, "ngIf"], ["class", "menu-caret", 4, "ngIf"], [1, "menu-caret"]],
        template: function TopmenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_Template, 2, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuComponent_ng_template_3_Template, 7, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.menu$));
          }
        },
        styles: [".matero-topmenu {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 200;\n  display: block;\n  padding: 8px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.matero-topmenu .mat-icon.menu-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  font-size: 18px;\n  line-height: 18px;\n}\n[dir=rtl] .matero-topmenu .mat-icon.menu-icon {\n  margin-left: 8px;\n  margin-right: auto;\n}\n.matero-topmenu .mat-icon.menu-caret {\n  margin-right: -8px;\n}\n[dir=rtl] .matero-topmenu .mat-icon.menu-caret {\n  margin-left: -8px;\n  margin-right: auto;\n}\n.matero-topmenu .menu-label,\n.matero-topmenu .menu-badge {\n  margin-left: 8px;\n  font-size: 12px;\n}\n[dir=rtl] .matero-topmenu .menu-label,\n[dir=rtl] .matero-topmenu .menu-badge {\n  margin-left: auto;\n  margin-right: 8px;\n}\n.matero-topmenu .menu-badge {\n  border-radius: 50rem;\n}\n.matero-topmenu .mat-tab-nav-bar,\n.matero-topmenu .mat-tab-header {\n  border-bottom: none;\n}\n.mat-menu-item .menu-name {\n  margin-right: 8px;\n  vertical-align: middle;\n}\n[dir=rtl] .mat-menu-item .menu-name {\n  margin-left: 8px;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGNvcmVcXHN0eWxlXFxfZWxldmF0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VDdUpBLHlIQUFBO0FEdkpGO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7QUFJSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQU1FO0VBQ0Usa0JBQUE7QUFKSjtBQU1JO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUpOO0FBUUU7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FBTko7QUFRSTs7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBTE47QUFTRTtFQUNFLG9CQUFBO0FBUEo7QUFVRTs7RUFFRSxtQkFBQTtBQVJKO0FBYUU7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBVko7QUFZSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFWTiIsImZpbGUiOiJ0b3BtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4ubWF0ZXJvLXRvcG1lbnUge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbigyKTtcclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi5tZW51LWNhcmV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItbmF2LWJhcixcclxuICAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICAubWVudS1uYW1lIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJ3ZhcmlhYmxlcyc7XG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiR0cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcmlhYmxlcy4kZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRjb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJGNvbG9yLCAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IG1hdGguaXMtdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLmdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC5nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJGNvbG9yLFxuICAgICRvcGFjaXR5OiAkb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRwcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBlbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    21010:
    /*!*****************************************************!*\
      !*** ./src/app/theme/widgets/branding.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BrandingComponent": function BrandingComponent() {
          return (
            /* binding */
            _BrandingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BrandingComponent = /*#__PURE__*/_createClass(function _BrandingComponent() {
        _classCallCheck(this, _BrandingComponent);
      });

      _BrandingComponent.ɵfac = function BrandingComponent_Factory(t) {
        return new (t || _BrandingComponent)();
      };

      _BrandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BrandingComponent,
        selectors: [["app-branding"]],
        decls: 4,
        vars: 0,
        consts: [["href", "/", 1, "matero-branding"], ["src", "./assets/images/warehouse.png", "alt", "logo", 1, "matero-branding-logo-expanded"], [1, "matero-branding-name"]],
        template: function BrandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WMS-App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    17393:
    /*!*********************************************************!*\
      !*** ./src/app/theme/widgets/notification.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationComponent": function NotificationComponent() {
          return (
            /* binding */
            _NotificationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function NotificationComponent_mat_list_item_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2);
        }
      }

      var _NotificationComponent = /*#__PURE__*/_createClass(function _NotificationComponent() {
        _classCallCheck(this, _NotificationComponent);

        this.messages = ['Server Error Reports', 'Server Error Reports', 'Server Error Reports'];
      });

      _NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
        return new (t || _NotificationComponent)();
      };

      _NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NotificationComponent,
        selectors: [["app-notification"]],
        decls: 9,
        vars: 2,
        consts: [["mat-icon-button", "", 1, "matero-toolbar-button", 3, "matMenuTriggerFor"], [1, "badge", "bg-red-500"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["matLine", "", "href", "#"], ["mat-icon-button", ""]],
        template: function NotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotificationComponent_mat_list_item_8_Template, 6, 1, "mat-list-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLine],
        encapsulation: 2
      });
      /***/
    },

    /***/
    94295:
    /*!*************************************************!*\
      !*** ./src/app/theme/widgets/user.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserComponent": function UserComponent() {
          return (
            /* binding */
            _UserComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/authentication/auth.service */
      41219);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _UserComponent = /*#__PURE__*/function () {
        function _UserComponent(router, auth, cdr) {
          _classCallCheck(this, _UserComponent);

          this.router = router;
          this.auth = auth;
          this.cdr = cdr;
        }

        _createClass(_UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this30 = this;

            this.auth.user().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function (user) {
              return _this30.user = user;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(10)).subscribe(function () {
              return _this30.cdr.detectChanges();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this31 = this;

            this.auth.logout().subscribe(function () {
              return _this31.router.navigateByUrl('/auth/login');
            });
          }
        }]);

        return _UserComponent;
      }();

      _UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || _UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
      };

      _UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _UserComponent,
        selectors: [["app-user"]],
        decls: 10,
        vars: 2,
        consts: [["mat-button", "", 1, "matero-toolbar-button", "matero-avatar-button", 3, "matMenuTriggerFor"], [1, "icon-42"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-menu", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_Template_button_click_5_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("LogOut");
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem],
        encapsulation: 2
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        //baseUrl: 'http://localhost:50999/api',
        baseUrl: 'http://localhost:50191/api',
        //baseUrl:'http://localhost:50191/', 
        //baseUrl:'http://localhost:5281',  
        localUrl: '',
        useHash: false,
        hmr: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    84187:
    /*!********************!*\
      !*** ./src/hmr.ts ***!
      \********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "hmrBootstrap": function hmrBootstrap() {
          return (
            /* binding */
            _hmrBootstrap
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angularclass/hmr */
      90334);

      var _hmrBootstrap = function _hmrBootstrap(module, bootstrap) {
        var ngModule;
        module.hot.accept();
        bootstrap().then(function (mod) {
          return ngModule = mod;
        });
        module.hot.dispose(function () {
          var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
          var elements = appRef.components.map(function (c) {
            return c.location.nativeElement;
          });
          var makeVisible = (0, _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
          ngModule.destroy();
          makeVisible();
        });
      };
      /***/

    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hmr */
      84187);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      var bootstrap = function bootstrap() {
        return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
      };

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hmr) {
        if (false) {} else {
          console.error('HMR is not enabled for webpack-dev-server!');
          console.log('Are you using the --hmr flag for ng serve?');
        }
      } else {
        bootstrap()["catch"](function (err) {
          return console.log(err);
        });
      }
      /***/

    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 62275,
        "./af.js": 62275,
        "./ar": 90857,
        "./ar-dz": 11218,
        "./ar-dz.js": 11218,
        "./ar-kw": 14754,
        "./ar-kw.js": 14754,
        "./ar-ly": 66680,
        "./ar-ly.js": 66680,
        "./ar-ma": 92178,
        "./ar-ma.js": 92178,
        "./ar-sa": 56522,
        "./ar-sa.js": 56522,
        "./ar-tn": 95682,
        "./ar-tn.js": 95682,
        "./ar.js": 90857,
        "./az": 70164,
        "./az.js": 70164,
        "./be": 79774,
        "./be.js": 79774,
        "./bg": 60947,
        "./bg.js": 60947,
        "./bm": 21832,
        "./bm.js": 21832,
        "./bn": 89650,
        "./bn-bd": 74477,
        "./bn-bd.js": 74477,
        "./bn.js": 89650,
        "./bo": 66005,
        "./bo.js": 66005,
        "./br": 98492,
        "./br.js": 98492,
        "./bs": 70534,
        "./bs.js": 70534,
        "./ca": 52061,
        "./ca.js": 52061,
        "./cs": 84737,
        "./cs.js": 84737,
        "./cv": 61167,
        "./cv.js": 61167,
        "./cy": 77996,
        "./cy.js": 77996,
        "./da": 9528,
        "./da.js": 9528,
        "./de": 14540,
        "./de-at": 49430,
        "./de-at.js": 49430,
        "./de-ch": 67978,
        "./de-ch.js": 67978,
        "./de.js": 14540,
        "./dv": 83426,
        "./dv.js": 83426,
        "./el": 6616,
        "./el.js": 6616,
        "./en-au": 63816,
        "./en-au.js": 63816,
        "./en-ca": 32162,
        "./en-ca.js": 32162,
        "./en-gb": 83305,
        "./en-gb.js": 83305,
        "./en-ie": 61954,
        "./en-ie.js": 61954,
        "./en-il": 43060,
        "./en-il.js": 43060,
        "./en-in": 59923,
        "./en-in.js": 59923,
        "./en-nz": 13540,
        "./en-nz.js": 13540,
        "./en-sg": 16505,
        "./en-sg.js": 16505,
        "./eo": 41907,
        "./eo.js": 41907,
        "./es": 86640,
        "./es-do": 41246,
        "./es-do.js": 41246,
        "./es-mx": 56131,
        "./es-mx.js": 56131,
        "./es-us": 36430,
        "./es-us.js": 36430,
        "./es.js": 86640,
        "./et": 62551,
        "./et.js": 62551,
        "./eu": 32711,
        "./eu.js": 32711,
        "./fa": 54572,
        "./fa.js": 54572,
        "./fi": 33390,
        "./fi.js": 33390,
        "./fil": 87860,
        "./fil.js": 87860,
        "./fo": 48216,
        "./fo.js": 48216,
        "./fr": 99291,
        "./fr-ca": 98527,
        "./fr-ca.js": 98527,
        "./fr-ch": 58407,
        "./fr-ch.js": 58407,
        "./fr.js": 99291,
        "./fy": 47054,
        "./fy.js": 47054,
        "./ga": 49540,
        "./ga.js": 49540,
        "./gd": 73917,
        "./gd.js": 73917,
        "./gl": 51486,
        "./gl.js": 51486,
        "./gom-deva": 56245,
        "./gom-deva.js": 56245,
        "./gom-latn": 48868,
        "./gom-latn.js": 48868,
        "./gu": 59652,
        "./gu.js": 59652,
        "./he": 89019,
        "./he.js": 89019,
        "./hi": 42040,
        "./hi.js": 42040,
        "./hr": 63402,
        "./hr.js": 63402,
        "./hu": 79322,
        "./hu.js": 79322,
        "./hy-am": 27609,
        "./hy-am.js": 27609,
        "./id": 57942,
        "./id.js": 57942,
        "./is": 98275,
        "./is.js": 98275,
        "./it": 73053,
        "./it-ch": 4378,
        "./it-ch.js": 4378,
        "./it.js": 73053,
        "./ja": 46176,
        "./ja.js": 46176,
        "./jv": 679,
        "./jv.js": 679,
        "./ka": 92726,
        "./ka.js": 92726,
        "./kk": 72953,
        "./kk.js": 72953,
        "./km": 86957,
        "./km.js": 86957,
        "./kn": 59181,
        "./kn.js": 59181,
        "./ko": 47148,
        "./ko.js": 47148,
        "./ku": 27752,
        "./ku.js": 27752,
        "./ky": 65675,
        "./ky.js": 65675,
        "./lb": 41263,
        "./lb.js": 41263,
        "./lo": 65746,
        "./lo.js": 65746,
        "./lt": 11143,
        "./lt.js": 11143,
        "./lv": 38753,
        "./lv.js": 38753,
        "./me": 44054,
        "./me.js": 44054,
        "./mi": 31573,
        "./mi.js": 31573,
        "./mk": 30202,
        "./mk.js": 30202,
        "./ml": 68523,
        "./ml.js": 68523,
        "./mn": 79794,
        "./mn.js": 79794,
        "./mr": 56681,
        "./mr.js": 56681,
        "./ms": 56975,
        "./ms-my": 39859,
        "./ms-my.js": 39859,
        "./ms.js": 56975,
        "./mt": 3691,
        "./mt.js": 3691,
        "./my": 5152,
        "./my.js": 5152,
        "./nb": 7607,
        "./nb.js": 7607,
        "./ne": 21526,
        "./ne.js": 21526,
        "./nl": 86368,
        "./nl-be": 40076,
        "./nl-be.js": 40076,
        "./nl.js": 86368,
        "./nn": 68420,
        "./nn.js": 68420,
        "./oc-lnc": 51906,
        "./oc-lnc.js": 51906,
        "./pa-in": 94504,
        "./pa-in.js": 94504,
        "./pl": 54721,
        "./pl.js": 54721,
        "./pt": 74645,
        "./pt-br": 54548,
        "./pt-br.js": 54548,
        "./pt.js": 74645,
        "./ro": 71977,
        "./ro.js": 71977,
        "./ru": 26042,
        "./ru.js": 26042,
        "./sd": 78849,
        "./sd.js": 78849,
        "./se": 27739,
        "./se.js": 27739,
        "./si": 50084,
        "./si.js": 50084,
        "./sk": 92449,
        "./sk.js": 92449,
        "./sl": 23086,
        "./sl.js": 23086,
        "./sq": 33139,
        "./sq.js": 33139,
        "./sr": 30607,
        "./sr-cyrl": 30063,
        "./sr-cyrl.js": 30063,
        "./sr.js": 30607,
        "./ss": 40131,
        "./ss.js": 40131,
        "./sv": 21665,
        "./sv.js": 21665,
        "./sw": 5642,
        "./sw.js": 5642,
        "./ta": 33622,
        "./ta.js": 33622,
        "./te": 74825,
        "./te.js": 74825,
        "./tet": 48336,
        "./tet.js": 48336,
        "./tg": 39238,
        "./tg.js": 39238,
        "./th": 99463,
        "./th.js": 99463,
        "./tk": 39986,
        "./tk.js": 39986,
        "./tl-ph": 29672,
        "./tl-ph.js": 29672,
        "./tlh": 40043,
        "./tlh.js": 40043,
        "./tr": 51212,
        "./tr.js": 51212,
        "./tzl": 50110,
        "./tzl.js": 50110,
        "./tzm": 80482,
        "./tzm-latn": 38309,
        "./tzm-latn.js": 38309,
        "./tzm.js": 80482,
        "./ug-cn": 42495,
        "./ug-cn.js": 42495,
        "./uk": 54157,
        "./uk.js": 54157,
        "./ur": 80984,
        "./ur.js": 80984,
        "./uz": 64141,
        "./uz-latn": 43662,
        "./uz-latn.js": 43662,
        "./uz.js": 64141,
        "./vi": 12607,
        "./vi.js": 12607,
        "./x-pseudo": 66460,
        "./x-pseudo.js": 66460,
        "./yo": 92948,
        "./yo.js": 92948,
        "./zh-cn": 62658,
        "./zh-cn.js": 62658,
        "./zh-hk": 39352,
        "./zh-hk.js": 39352,
        "./zh-mo": 38274,
        "./zh-mo.js": 38274,
        "./zh-tw": 98451,
        "./zh-tw.js": 98451
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map