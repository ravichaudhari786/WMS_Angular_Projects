(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_process_process_module_ts"], {
    /***/
    77969:
    /*!*************************************************************************!*\
      !*** ./src/app/routes/process/deliveryorder/deliveryorder.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryorderComponent": function DeliveryorderComponent() {
          return (
            /* binding */
            _DeliveryorderComponent
          );
        },

        /* harmony export */
        "DeliveryOrderDetail": function DeliveryOrderDetail() {
          return (
            /* binding */
            _DeliveryOrderDetail
          );
        },

        /* harmony export */
        "DODetail": function DODetail() {
          return (
            /* binding */
            _DODetail
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ag-grid-community */
      79574);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ag-grid-angular */
      82022);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);

      function DeliveryorderComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r8.CustomerID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r8.CustomerName);
        }
      }

      function DeliveryorderComponent_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r9.PartyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r9.PartyName);
        }
      }

      function DeliveryorderComponent_option_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r10.CustomerPartyID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r10.PartyName);
        }
      }

      function DeliveryorderComponent_option_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r11.CustomerContactID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r11.ContactPersonName);
        }
      }

      function DeliveryorderComponent_option_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var r_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", r_r12.Remarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r12.Remarks);
        }
      }

      function DeliveryorderComponent_ng_template_95_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r16.CustomerID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r16.CustomerName);
        }
      }

      function DeliveryorderComponent_ng_template_95_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Customer Parties");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DeliveryorderComponent_ng_template_95_option_10_Template, 2, 2, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Party Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Shipping Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Shipping Address2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Pin Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryorderComponent_ng_template_95_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](96);

            return ctx_r17.onAddCustomerParty(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "ADD");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryorderComponent_ng_template_95_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](96);

            return ctx_r19.onCloseCustpmerParty(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.customerList);
        }
      }

      var _DeliveryorderComponent = /*#__PURE__*/function () {
        function _DeliveryorderComponent(api, fb, modalService) {
          var _this = this;

          _classCallCheck(this, _DeliveryorderComponent);

          this.api = api;
          this.fb = fb;
          this.modalService = modalService;
          this.OrderGivenByList = [];
          this.DeliveryOrdersearchList = [];
          this.DO_Detail = [];
          this.checkCust = false;
          this.SaveCustomerParty = {};
          this.SaveDeliveryOrder = {};
          this.clickSave = false;
          this.DeliveryOrderID = 0;
          this.config = {
            backdrop: false,
            ignoreBackdropClick: true
          };
          this.tab = 0; //---------end

          this.DeliveryOrdercolumnDefs = [{
            headerName: 'DeliveryOrderID',
            field: 'DeliveryOrderID',
            hide: true
          }, {
            headerName: 'InwardDID',
            field: 'InwardDID',
            hide: true
          }, {
            headerName: 'InwardLocationID',
            field: 'InwardLocationID',
            hide: true
          }, {
            headerName: 'StorageAreaID',
            field: 'StorageAreaID',
            hide: true
          }, {
            headerName: 'ProductID',
            field: 'ProductID',
            hide: true
          }, {
            headerName: 'ProductName',
            field: 'ProductName',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'Remarks',
            field: 'Remarks',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'LotNo',
            field: 'LotNo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'FirstLotNo',
            field: 'FirstLotNo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'StorageAreaName',
            field: 'StorageAreaName',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'InQuantity',
            field: 'InQuantity',
            hide: false,
            filter: 'agNumberColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'PendingDO',
            field: 'PendingDO',
            hide: false,
            filter: 'agNumberColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'OutQuantity',
            field: 'OutQuantity',
            hide: false,
            filter: 'agNumberColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'BalanceQuantity',
            field: 'BalanceQuantity',
            hide: false,
            filter: 'agNumberColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'DOQuantity',
            field: 'DOQuantity',
            hide: false,
            cellEditorPopup: true,
            sort: "desc",
            filter: 'agNumberColumnFilter',
            floatingFilter: true,
            valueParser: "Number(newValue)",
            editable: true,
            cellStyle: function cellStyle(params) {
              if (params.value > 0) {
                return {
                  color: 'white',
                  backgroundColor: '#FF0000'
                };
              } else {
                return {
                  color: 'black',
                  backgroundColor: '#98FB98'
                };
              }
            }
          }, {
            headerName: 'BrandID',
            field: 'BrandID',
            hide: true
          }, {
            headerName: 'BrandName',
            field: 'BrandName',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ItemsInPacket',
            field: 'ItemsInPacket',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }];
          this.columnsDeliveryOrderList = [{
            header: "Action",
            field: 'Action',
            minWidth: 105,
            pinned: 'left',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'Edit',
              click: function click(record) {
                return _this.onEditDORow(record);
              }
            }, {
              color: 'warn',
              type: 'icon',
              icon: 'delete',
              tooltip: 'delete',
              pop: true,
              popTitle: 'Do you want to delete Delivery order ....!!',
              popCloseText: 'No',
              popOkText: 'Yes',
              popDescription: '',
              popCloseColor: 'warn',
              popOkColor: 'primary',
              click: function click(record) {
                return _this.onDeleteDORow(record);
              }
            }]
          }, {
            header: 'DeliveryOrderID',
            field: 'DeliveryOrderID',
            hide: true
          }, {
            header: 'CustomerID',
            field: 'CustomerID',
            hide: true
          }, {
            header: 'DO No',
            field: 'DeliveryOrderNo',
            minWidth: 80
          }, {
            header: 'DO Date',
            field: 'DeliveryOrderDate',
            minWidth: 100,
            type: 'date',
            typeParameter: {
              format: 'dd-MM-yyyy'
            }
          }, {
            header: 'CustomerName',
            field: 'CustomerName',
            minWidth: 200
          }, {
            header: 'DeliverTo',
            field: 'DeliverTo',
            hide: false,
            minWidth: 200
          }, {
            header: 'Remarks',
            field: 'Remarks',
            minWidth: 200
          }, {
            header: 'StatusID',
            field: 'StatusID',
            hide: true
          }, {
            header: 'Status',
            field: 'Status',
            minWidth: 100,
            hide: false
          }, {
            header: 'CreatedBy',
            field: 'CreatedBy',
            minWidth: 70
          }, {
            header: 'Process',
            field: 'Process',
            minWidth: 70
          }, {
            header: 'CustomerPartyID',
            field: 'CustomerPartyID',
            minWidth: 120,
            hide: true
          }, {
            header: 'ContainerNo',
            field: 'ContainerNo',
            minWidth: 120,
            hide: true
          }, {
            header: 'TruckNo',
            field: 'TruckNo',
            minWidth: 120,
            hide: true
          }, {
            header: 'OrderGivenBy',
            field: 'OrderGivenBy',
            minWidth: 120,
            hide: false
          }, {
            header: 'ShippingAddress',
            field: 'ShippingAddress',
            minWidth: 120,
            hide: true
          }, {
            header: 'WareHouseID',
            field: 'WareHouseID',
            minWidth: 120,
            hide: true
          }];
          this.currentUser = this.api.getCurrentUser();
          this.form = this.fb.group({
            customer_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            chk_Do_Disptch: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            deliveryorder_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            customerParty_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            DeliveryParty_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtDO_No: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtShipping_Address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtTruckNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtContainerNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            OrderGivenBy_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            DORemarks: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            Party_customer_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtPartyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtshiffadd1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtshiffadd2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtPinCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtMobileNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtTotalDOQty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
          });
          var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd');
          this.todayDate = dateSendingToServer;
        }

        _createClass(_DeliveryorderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.BindDropdown();
          }
        }, {
          key: "BindDropdown",
          value: function BindDropdown() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.api.get('/Customer').subscribe(function (data) {
                        _this2.customerList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/CustomerParty').subscribe(function (data) {
                        _this2.customePartyList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/Remarks').subscribe(function (data) {
                        _this2.remarkList = data.filter(function (p) {
                          return p.ProcessID == 2;
                        });
                      }, function (error) {
                        console.error(error);
                      });
                      this.BindDeliveryOrderList();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "BindDeliveryOrderList",
          value: function BindDeliveryOrderList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.api.get('/DeliveryOrder/DOList?FinancialYearID=' + this.currentUser.FinantialYearId + '&WareHouseID=' + this.currentUser.warehouseId + '&UserID=' + this.currentUser.userId).subscribe(function (data) {
                        _this3.DeliveryOrderList = data;
                      }, function (error) {
                        console.error(error);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "tabDeliveryOrderchange",
          value: function tabDeliveryOrderchange(e) {
            this.tab = e;
            this.BindDeliveryOrderList();
          }
        }, {
          key: "BindOrderGIvenBy",
          value: function BindOrderGIvenBy() {
            var _this4 = this;

            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            this.api.get('/CustomerContacts/GetCustomerContactsList?CustomerID=' + e).subscribe(function (data) {
              _this4.OrderGivenByList = [];
              _this4.OrderGivenByList = data;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "GetCustomerID",
          value: function GetCustomerID(e) {
            var _this5 = this;

            this.checkCust = false;
            this.BindOrderGIvenBy(this.form.value.customer_id);
            this.api.get('/DeliveryOrder/DOValidation?CustomerID=' + this.form.value.customer_id + '&WaherhouseID=' + this.currentUser.warehouseId).subscribe(function (data) {
              data;

              if (data.Table.length > 0) {
                _this5.checkCust = true;
                alert("Order is stopped for some reason .... !!!");
              }
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "OnSearchClick",
          value: function OnSearchClick() {
            var _this6 = this;

            var _a;

            if (this.form.value.customer_id == null) {
              alert("Select Customers .....");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              this.api.post('/DeliveryOrder/DOSearch?CustomerID=' + this.form.value.customer_id + '&WarehouseID=' + this.currentUser.warehouseId).subscribe(function (data) {
                _this6.DeliveryOrdersearchList = data; //console.log(this.DeliveryOrdersearchList);          

                if (data.length == 0) {
                  alert("Data not found ..... !!!");
                }
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "onDOCellKeyPress",
          value: function onDOCellKeyPress(e) {
            if (e.data.BalanceQuantity > e.data.DOQuantity) {
              this.onDOSearchGridRefresh();
            } else if (e.data.BalanceQuantity == e.data.DOQuantity) {
              alert(e.data.ProductName + " And Lot no " + e.data.LotNo + ", Stock will be null or zero ...!!!");
              this.onDOSearchGridRefresh();
            } else if (e.data.BalanceQuantity < e.data.DOQuantity) {
              this.DeliveryOrdersearchList.forEach(function (i) {
                if (i.InwardLocationID == e.data.InwardLocationID) {
                  i.DOQuantity = 0;
                }
              });
              alert("DO Quantity must be less than or equal to balance quantity ..!!!");
              this.onDOSearchGridRefresh();
            }
          }
        }, {
          key: "onDOSearchGridRefresh",
          value: function onDOSearchGridRefresh() {
            var newRowData = this.DeliveryOrdersearchList.filter(function (row) {
              return row;
            });
            this.DeliveryOrdersearchList = newRowData;
            var TotalDOqty = this.DeliveryOrdersearchList.map(function (v1) {
              return v1.DOQuantity;
            }).reduce(function (acc, v1) {
              return v1 + acc;
            });
            this.form.controls['txtTotalDOQty'].setValue(TotalDOqty);
          }
        }, {
          key: "onKeyfilter",
          value: function onKeyfilter(e) {
            var _this7 = this;

            this.api.get('/DeliveryOrder/DOList?FinancialYearID=' + this.currentUser.FinantialYearId + '&WareHouseID=' + this.currentUser.warehouseId + '&UserID=' + this.currentUser.userId).subscribe(function (data) {
              _this7.DeliveryOrderList = data;
              var searchName = e;
              var lists = _this7.DeliveryOrderList;
              var res = lists.filter(function (obj) {
                return obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DeliveryOrderDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DeliveryOrderNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DeliverTo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.Remarks.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.CreatedBy.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.Status.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.Process.toLowerCase().indexOf(searchName.toLowerCase()) >= 0;
              });
              _this7.DeliveryOrderList = res;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onCustomerPartyContact",
          value: function onCustomerPartyContact(CustomerPartycontent) {
            var _a;

            if (this.form.value.customer_id == null || this.form.value.customer_id == 0) {
              alert("Select Customers .....");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              this.form.controls['Party_customer_id'].setValue(this.form.value.customer_id);
              this.modalService.open(CustomerPartycontent, this.config);
            }
          }
        }, {
          key: "onCloseCustpmerParty",
          value: function onCloseCustpmerParty(CustomerPartycontent) {
            this.modalService.dismissAll(CustomerPartycontent);
          }
        }, {
          key: "onAddCustomerParty",
          value: function onAddCustomerParty(CustomerPartycontent) {
            var _this8 = this;

            var _a, _b;

            if (this.form.value.Party_customer_id == null || this.form.value.Party_customer_id == 0) {
              alert("Select Customers .....");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("Party_customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
            } else if (this.form.value.txtPartyName == null || this.form.value.txtPartyName == 0) {
              alert("Enter Customer Party Name ..... !!!");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("txtPartyName")) === null || _b === void 0 ? void 0 : _b.focus();
            } else {
              this.SaveCustomerParty = {
                CustomerID: this.form.value.customer_id,
                PartyName: this.form.value.txtPartyName == null ? '' : this.form.value.txtPartyName,
                ShippingAddress: this.form.value.txtshiffadd1 == null ? '' : this.form.value.txtshiffadd1,
                ShippingAddress1: this.form.value.txtshiffadd2 == null ? '' : this.form.value.txtshiffadd2,
                PinCode: this.form.value.txtPinCode == null ? '' : this.form.value.txtPinCode,
                CreatedBy: this.currentUser.userId
              };
              console.log(this.SaveCustomerParty);
              this.api.post('/DeliveryOrder/AddParty', this.SaveCustomerParty).subscribe(function (data) {
                data;
                alert(data.Table[0]["Message"]);

                _this8.form.controls['txtPartyName'].reset();

                _this8.form.controls['txtshiffadd1'].reset();

                _this8.form.controls['txtshiffadd2'].reset();

                _this8.form.controls['txtPinCode'].reset();

                _this8.modalService.dismissAll(CustomerPartycontent);
              }, function (error) {
                console.error(error);
              });
              this.api.get('/CustomerParty').subscribe(function (data) {
                _this8.customePartyList = data;
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "GetMobileNo",
          value: function GetMobileNo(e) {
            var _this9 = this;

            var OrderGivenByData = this.OrderGivenByList.filter(function (x) {
              return x.CustomerContactID == _this9.form.value.OrderGivenBy_id;
            });
            this.form.controls['txtMobileNo'].setValue(OrderGivenByData[0]["MobileNo"]);
            console.log(OrderGivenByData[0]["MobileNo"]);
          } ///---------------------------------save DO

        }, {
          key: "onSaveDeliveryOrder",
          value: function onSaveDeliveryOrder() {
            var _this10 = this;

            var _a; // this.clickSave=true;


            var TotalDOqty;

            if (this.form.value.customer_id == null || this.form.value.customer_id == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else {
              this.api.get('/DeliveryOrder/DOValidation?CustomerID=' + this.form.value.customer_id + '&WaherhouseID=' + this.currentUser.warehouseId).subscribe(function (data) {
                var _a, _b;

                data;

                if (data.Table.length > 0) {
                  _this10.checkCust = true;
                  alert("Order is stopped for some reason .... !!!");
                } else {
                  if (_this10.DeliveryOrdersearchList.length > 0) {
                    TotalDOqty = _this10.DeliveryOrdersearchList.map(function (v1) {
                      return v1.DOQuantity;
                    }).reduce(function (acc, v1) {
                      return v1 + acc;
                    });
                  } else {
                    TotalDOqty = 0;
                  }

                  if (_this10.form.value.customerParty_id == null || _this10.form.value.customerParty_id == "") {
                    alert("Please .... Select customer Party");
                    (_a = document === null || document === void 0 ? void 0 : document.getElementById("customerParty_id")) === null || _a === void 0 ? void 0 : _a.focus();
                    return;
                  } else if (_this10.form.value.OrderGivenBy_id == null || _this10.form.value.OrderGivenBy_id == "") {
                    alert("Please .... Select Order Given By");
                    (_b = document === null || document === void 0 ? void 0 : document.getElementById("OrderGivenBy_id")) === null || _b === void 0 ? void 0 : _b.focus();
                    return;
                  } else if (TotalDOqty <= 0) {
                    alert("Please .... Add DO quantity In delivery order detail ");
                    return;
                  } else {
                    //console.log("Work..... !!!");
                    _this10.clickSave = true;

                    var OrderGivenByData = _this10.OrderGivenByList.filter(function (x) {
                      return x.CustomerContactID == _this10.form.value.OrderGivenBy_id;
                    });

                    var ContactPersonNames;

                    if (OrderGivenByData.length > 0) {
                      ContactPersonNames = OrderGivenByData[0]["ContactPersonName"];
                    } else {
                      ContactPersonNames = "";
                    } // console.log(this.DeliveryOrdersearchList)


                    var DODetail = _this10.DeliveryOrdersearchList.filter(function (x) {
                      return x.DOQuantity > 0;
                    });

                    DODetail.forEach(function (i) {
                      _this10.DO_Detail.push({
                        "DeliveryOrderID": _this10.DeliveryOrderID,
                        "ProductID": i.ProductID,
                        "InwardDID": i.InwardDID,
                        "LotNo": i.LotNo,
                        "DOQuantity": i.DOQuantity,
                        "InwardLocationID": i.InwardLocationID,
                        "StorageAreaID": i.StorageAreaID
                      });
                    });

                    _this10.DO_Detail.slice(); // console.log(this.DO_Detail);


                    _this10.SaveDeliveryOrder = {
                      DeliveryOrderID: _this10.DeliveryOrderID,
                      DeliveryOrderDate: _this10.form.value.deliveryorder_date,
                      CustomerID: _this10.form.value.customer_id,
                      WareHouseID: _this10.currentUser.warehouseId,
                      CompanyID: _this10.currentUser.companyId,
                      DeliverTo: _this10.form.value.customerParty_id,
                      CustomerPartyID: _this10.form.value.DeliveryParty_id == null ? 0 : _this10.form.value.DeliveryParty_id,
                      ShippingAddress: _this10.form.value.txtShipping_Address == null ? '' : _this10.form.value.txtShipping_Address,
                      OrderGivenBy: ContactPersonNames,
                      Remarks: _this10.form.value.DORemarks == null ? '' : _this10.form.value.DORemarks,
                      CreatedBy: _this10.currentUser.userId,
                      ByCustomer: 0,
                      IsDoDispatch: _this10.form.value.chk_Do_Disptch == null ? false : _this10.form.value.chk_Do_Disptch,
                      TruckNo: _this10.form.value.txtTruckNo == null ? '' : _this10.form.value.txtTruckNo,
                      ContainerNo: _this10.form.value.txtContainerNo == null ? '' : _this10.form.value.txtContainerNo,
                      DeliveryOrderDetailModel: _this10.DO_Detail
                    };

                    _this10.api.post('/DeliveryOrder/SaveDO', _this10.SaveDeliveryOrder).subscribe(function (data) {
                      data; //console.log(data)

                      alert(data.Table[0]["Message"]);
                    }, function (error) {
                      console.error(error);
                      _this10.clickSave = false;
                    });

                    console.log(_this10.SaveDeliveryOrder);
                  }
                }
              }, function (error) {
                console.error(error);
              });
            }
          } //---------------------------------------------Reset DO

        }, {
          key: "onResetDeliveryOrder",
          value: function onResetDeliveryOrder() {
            this.clickSave = false;
            this.checkCust = false;
            this.form.reset();
            this.BindDropdown();
            this.DeliveryOrderID = 0;
            var DODate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd');
            this.todayDate = DODate;
            this.form.controls['deliveryorder_date'].setValue(this.todayDate);
            this.DeliveryOrdersearchList = [];
            this.DO_Detail = [];
            this.SaveDeliveryOrder = {}; // let foo = prompt('Type here');    
            // console.log(foo);
          } //------------------------------------------ Reset DO

        }, {
          key: "onEditDORow",
          value: function onEditDORow(e) {
            var _this11 = this;

            this.onResetDeliveryOrder();
            this.api.get('/DeliveryOrder/DOValidation?CustomerID=' + e.CustomerID + '&WaherhouseID=' + e.WareHouseID).subscribe(function (data) {
              data;

              if (data.Table.length > 0) {
                _this11.checkCust = true;
                alert("Order is stopped for some reason .... !!!");
              } else {
                if (e.StatusID == 11) {
                  alert("Sorry,Outward already generated ....!!!");
                } else if (e.StatusID == 12) {
                  alert("Sorry,Dispatch already generated ....!!!");
                } else if (e.StatusID == 13) {
                  alert("Sorry,You can't edit this transaction ,because it's already Cancelled or deactivate ....!!!");
                } else if (e.StatusID == 15) {
                  alert("Sorry,You already Cancelled this Delivery Order ....!!!");
                } else if (e.Process == "Online") {
                  alert("Sorry,You can't edit because its generated by customer....!!!");
                } else {
                  //alert("Work....!!!");
                  //console.log(e);
                  _this11.api.get('/DeliveryOrder/GetEditDelivryOrder?DeliveryOrderID=' + e.DeliveryOrderID).subscribe(function (data) {
                    data;
                    _this11.tab = 0;
                    _this11.DeliveryOrdersearchList = data.Table1;
                    _this11.DeliveryOrderID = e.DeliveryOrderID;

                    _this11.onDOSearchGridRefresh();

                    var DODate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US').transform(e.DeliveryOrderDate, 'yyyy-MM-dd');

                    _this11.BindOrderGIvenBy(e.CustomerID);

                    var TotalDOqty = _this11.DeliveryOrdersearchList.map(function (v1) {
                      return v1.DOQuantity;
                    }).reduce(function (acc, v1) {
                      return v1 + acc;
                    });

                    var OrderGivenByData = _this11.OrderGivenByList.filter(function (x) {
                      return x.ContactPersonName == e.OrderGivenBy;
                    });

                    var OrderGiven;
                    var MobileNumber;

                    if (OrderGivenByData.length > 0) {
                      OrderGiven = OrderGivenByData[0]["CustomerContactID"];
                      MobileNumber = OrderGivenByData[0]["MobileNo"];

                      _this11.form.controls['txtMobileNo'].setValue(OrderGivenByData[0]["MobileNo"]);
                    } else {
                      OrderGiven = 0;
                      MobileNumber = '';

                      _this11.form.controls['txtMobileNo'].setValue('');
                    }

                    var DOitem = {
                      customer_id: e.CustomerID,
                      deliveryorder_date: DODate,
                      chk_Do_Disptch: false,
                      customerParty_id: e.DeliverTo,
                      DeliveryParty_id: e.CustomerPartyID,
                      txtDO_No: e.DeliveryOrderNo,
                      txtShipping_Address: e.ShippingAddress,
                      txtTruckNo: e.TruckNo,
                      txtContainerNo: e.ContainerNo,
                      OrderGivenBy_id: OrderGiven,
                      DORemarks: e.Remarks,
                      Party_customer_id: e.CustomerID,
                      txtPartyName: '',
                      txtshiffadd1: '',
                      txtshiffadd2: '',
                      txtPinCode: '',
                      txtMobileNo: MobileNumber,
                      txtTotalDOQty: TotalDOqty
                    }; //console.log(DOitem);   

                    _this11.form.setValue(DOitem);
                  }, function (error) {
                    console.error(error);
                  });
                }
              }
            }, function (error) {
              console.error(error);
            });
          } //--------------------------------------------------- Delete DO

        }, {
          key: "onDeleteDORow",
          value: function onDeleteDORow(e) {
            var _this12 = this;

            console.log(e.StatusID);
            this.api.get('/DeliveryOrder/DOValidation?CustomerID=' + e.CustomerID + '&WaherhouseID=' + e.WareHouseID).subscribe(function (data) {
              data;

              if (data.Table.length > 0) {
                _this12.checkCust = true;
                alert("Order is stopped for some reason .... !!!");
              } else {
                if (e.StatusID == 11) {
                  alert("Sorry,Outward already generated ....!!!");
                } else if (e.StatusID == 15) {
                  alert("Sorry,You already Cancelled this Delivery Order ....!!!");
                } else if (e.StatusID == 13) {
                  alert("Sorry,You already Cancelled this Delivery Order ....!!!");
                } else if (e.StatusID == 12) {
                  var bar = confirm('Sorry,this translation have dispatch. Do you want to deleted or deactivate your translation ...');

                  if (bar == true) {
                    var foo = prompt('Remarks ');

                    _this12.api.post('/DeliveryOrder/PartiallyCancelled?DeliveryOrderID=' + e.DeliveryOrderID + '&CustomerId=' + e.CustomerID + '&Remarks=' + foo + '&CreatedBy=' + _this12.currentUser.userId).subscribe(function (data) {
                      data;
                      alert(data);

                      _this12.BindDeliveryOrderList();
                    }, function (error) {
                      console.error(error);
                    });
                  }
                } else {
                  var _bar = confirm('Do you want to deleted or deactivate your Delivery Order ...??');

                  if (_bar == true) {
                    var _foo = prompt('Remarks');

                    _this12.api.post('/DeliveryOrder/CancelledDO?DeliveryOrderID=' + e.DeliveryOrderID + '&CustomerId=' + e.CustomerID + '&Remarks=test&CreatedBy=' + _this12.currentUser.userId).subscribe(function (data) {
                      data;
                      alert(data);

                      _this12.BindDeliveryOrderList();
                    }, function (error) {
                      console.error(error);
                    });
                  }
                }
              }
            }, function (error) {
              console.error(error);
            });
          }
        }]);

        return _DeliveryorderComponent;
      }();

      _DeliveryorderComponent.ɵfac = function DeliveryorderComponent_Factory(t) {
        return new (t || _DeliveryorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal));
      };

      _DeliveryorderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DeliveryorderComponent,
        selectors: [["app-deliveryorder"]],
        decls: 122,
        vars: 32,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "1ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Delivery Order"], [3, "formGroup"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-4", "col-md-4"], [1, "form-group"], ["formControlName", "customer_id", "id", "customer_id", 1, "form-control", "form-control-sm", 3, "change"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "customer_id_error"], [1, "col-sm-3", "col-md-3"], ["type", "date", "formControlName", "deliveryorder_date", "id", "deliveryorder_date", "placeholder", "", "name", "deliveryorder_date", 1, "form-control", "form-control-rounded", 3, "ngModel"], [1, "form-group", "pt-4"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "col-sm-2", "col-md-2"], ["type", "checkbox", "formControlName", "chk_Do_Disptch", "id", "chk_Do_Disptch", 1, "form-control"], ["formControlName", "customerParty_id", "id", "customerParty_id", 1, "form-control", "form-control-sm"], ["formControlName", "DeliveryParty_id", "id", "DeliveryParty_id", 1, "form-control", "form-control-sm"], [1, "form-group", "pt-3"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["type", "text", "formControlName", "txtDO_No", "id", "txtDO_No", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtShipping_Address", "id", "txtShipping_Address", "placeholder", "", "autocomplete", "off", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtTruckNo", "id", "txtTruckNo", "placeholder", "", "autocomplete", "off", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtContainerNo", "id", "txtContainerNo", "placeholder", "", "autocomplete", "off", 1, "form-control", "form-control-sm"], ["formControlName", "OrderGivenBy_id", "id", "OrderGivenBy_id", 1, "form-control", "form-control-sm", 3, "change"], ["type", "text", "formControlName", "txtMobileNo", "id", "txtMobileNo", "readonly", "", "placeholder", "", 1, "form-control", "form-control-sm"], ["formControlName", "DORemarks", "id", "DORemarks", 1, "form-control", "form-control-sm"], ["style", "width:620px;"], ["CustomerPartycontent", ""], [1, "col-12"], [1, "font-weight-bold"], [1, "ag-theme-alpine", 2, "height", "500px", 3, "rowData", "columnDefs", "cellValueChanged"], [1, "row", "mt-2"], [1, "col-sm-12"], [1, "form-group", "float-right", 2, "display", "flex"], ["type", "text", "formControlName", "txtTotalDOQty", "id", "txtTotalDOQty", "readonly", "", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "20%", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "ml-3", 2, "width", "20%", 3, "click"], ["label", "Delivery Order List"], [1, "form-control-sm"], ["type", "text", "id", "filtertext", 1, "form-control-sm", 3, "keyup"], ["filtertext", ""], [2, "height", "800px"], [2, "height", "790px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSize"], [3, "value"], [1, "modal-header"], ["id", "modal-basic-title"], [1, "modal-body"], [1, "row"], [1, "col-sm-12", "col-md-12"], ["formControlName", "Party_customer_id", "id", "Party_customer_id", 1, "form-control", "form-control-sm"], ["disabled", "", 3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "txtPartyName", "id", "txtPartyName", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtshiffadd1", "id", "txtshiffadd1", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtshiffadd2", "id", "txtshiffadd2", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtPinCode", "id", "txtPinCode", "placeholder", "", 1, "form-control", "form-control-sm"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["disabled", "", 3, "value"]],
        template: function DeliveryorderComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedIndexChange", function DeliveryorderComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tabDeliveryOrderchange($event);
            })("selectedIndexChange", function DeliveryorderComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DeliveryorderComponent_Template_select_change_13_listener($event) {
              return ctx.GetCustomerID($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DeliveryorderComponent_option_16_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Delivery Order Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryorderComponent_Template_button_click_26_listener() {
              return ctx.OnSearchClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Do & Dispatch");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Customer Party");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, DeliveryorderComponent_option_41_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Delivery Party");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, DeliveryorderComponent_option_49_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryorderComponent_Template_button_click_52_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](96);

              return ctx.onCustomerPartyContact(_r5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "ADD Party");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "DO No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Shipping Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Truck No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Container No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "OrderGivenBy");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DeliveryorderComponent_Template_select_change_78_listener($event) {
              return ctx.GetMobileNo($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, DeliveryorderComponent_option_81_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, DeliveryorderComponent_option_94_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, DeliveryorderComponent_ng_template_95_Template, 36, 1, "ng-template", 30, 31, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Delivery Order Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "ag-grid-angular", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cellValueChanged", function DeliveryorderComponent_Template_ag_grid_angular_cellValueChanged_102_listener($event) {
              return ctx.onDOCellKeyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Total DO Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryorderComponent_Template_button_click_109_listener() {
              return ctx.onSaveDeliveryOrder();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryorderComponent_Template_button_click_111_listener() {
              return ctx.onResetDeliveryOrder();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "mat-tab", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Filter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "input", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function DeliveryorderComponent_Template_input_keyup_117_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](118);

              return ctx.onKeyfilter(_r7.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "mtx-grid", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedIndex", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customerList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](23, 29, ctx.todayDate, "yyyy-MM-dd"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.checkCust);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customePartyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customePartyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.OrderGivenByList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.remarkList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx.DeliveryOrdersearchList)("columnDefs", ctx.DeliveryOrdercolumnDefs);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.clickSave);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.DeliveryOrderList)("columns", ctx.columnsDeliveryOrderList)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Item List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", false)("showPaginator", false)("pageSize", 10000000);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_13__.MtxGridComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      var _DeliveryOrderDetail = /*#__PURE__*/_createClass(function _DeliveryOrderDetail() {
        _classCallCheck(this, _DeliveryOrderDetail);

        this.DeliveryOrderID = 0;
        this.InwardDID = 0;
        this.InwardLocationID = 0;
        this.StorageAreaID = 0;
        this.ProductID = 0;
        this.ProductName = "";
        this.Remarks = "";
        this.LotNo = "";
        this.FirstLotNo = "";
        this.StorageAreaName = "";
        this.InQuantity = 0;
        this.PendingDO = 0;
        this.OutQuantity = 0;
        this.BalanceQuantity = 0;
        this.DOQuantity = 0;
        this.BrandID = 0;
        this.BrandName = "";
        this.ItemsInPacket = "";
      });

      var _DODetail = /*#__PURE__*/_createClass(function _DODetail() {
        _classCallCheck(this, _DODetail);

        this.DeliveryOrderID = 0;
        this.ProductID = 0;
        this.InwardDID = 0;
        this.LotNo = "";
        this.DOQuantity = 0;
        this.InwardLocationID = 0;
        this.StorageAreaID = 0;
      });
      /***/

    },

    /***/
    91270:
    /*!***************************************************************!*\
      !*** ./src/app/routes/process/dispatch/dispatch.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DispatchComponent": function DispatchComponent() {
          return (
            /* binding */
            _DispatchComponent
          );
        },

        /* harmony export */
        "DispatchDetail": function DispatchDetail() {
          return (
            /* binding */
            _DispatchDetail
          );
        },

        /* harmony export */
        "DDetail": function DDetail() {
          return (
            /* binding */
            _DDetail
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ag-grid-community */
      79574);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ag-grid-angular */
      82022);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);

      function DispatchComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r3.CustomerID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r3.CustomerName);
        }
      }

      function DispatchComponent_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r4.CustomerPartyID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r4.PartyName);
        }
      }

      var _DispatchComponent = /*#__PURE__*/function () {
        function _DispatchComponent(api, fb) {
          var _this13 = this;

          _classCallCheck(this, _DispatchComponent);

          this.api = api;
          this.fb = fb;
          this.SaveDispatch = {};
          this.tab = 0;
          this.clickSave = false;
          this.DeliveryOrderID = 0;
          this.DispatchDetailList = [];
          this.DispatchDetail = [];
          this.DispatchDetailcolumnDefs = [{
            headerName: 'DeliveryOrderNo',
            field: 'DeliveryOrderNo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'DeliveryOrderDID',
            field: 'DeliveryOrderDID',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ProductID',
            field: 'ProductID',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ProductName',
            field: 'ProductName',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'LotNo',
            field: 'LotNo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'StorageArea',
            field: 'StorageArea',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'InwardDID',
            field: 'InwardDID',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'InwardLocationID',
            field: 'InwardLocationID',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'DOQuantity',
            field: 'DOQuantity',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'BalanceQuantity',
            field: 'BalanceQuantity',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'DispatchQuantity',
            field: 'DispatchQuantity',
            hide: false,
            filter: 'agNumberColumnFilter',
            valueParser: "Number(newValue)",
            floatingFilter: true,
            cellEditorPopup: true,
            sort: "desc",
            editable: true,
            cellStyle: function cellStyle(params) {
              if (params.value > 0) {
                return {
                  color: 'white',
                  backgroundColor: '#FF0000'
                };
              } else {
                return {
                  color: 'black',
                  backgroundColor: '#98FB98'
                };
              }
            }
          }, {
            headerName: 'BrandName',
            field: 'BrandName',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ItemsInPacket',
            field: 'ItemsInPacket',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'StorageAreaID',
            field: 'StorageAreaID',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'OrderGivenBy',
            field: 'OrderGivenBy',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }];
          this.DispatchSearchcolumnDefs = [{
            headerName: 'DeliveryOrderID',
            field: 'DeliveryOrderID',
            hide: true
          }, {
            headerName: 'DeliveryOrderNo',
            field: 'DeliveryOrderNo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'DeliveryOrderDate',
            field: 'DeliveryOrderDate',
            hide: false,
            type: 'date',
            cellRenderer: 'dateTimeRenderer',
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'OrderGivenBy',
            field: 'OrderGivenBy',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'DeliverTo',
            field: 'DeliverTo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ShippingAddress',
            field: 'ShippingAddress',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'Remarks',
            field: 'Remarks',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'TruckNo',
            field: 'TruckNo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ContainerNo',
            field: 'ContainerNo',
            hide: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }];
          this.Dispatch_ListcolumnDefs = [{
            header: "Action",
            field: 'Action',
            minWidth: 80,
            pinned: 'left',
            type: 'button',
            buttons: [{
              color: 'warn',
              type: 'icon',
              icon: 'delete',
              tooltip: 'delete',
              pop: true,
              popTitle: 'Do you want to delete Dispatch ....!!',
              popCloseText: 'No',
              popOkText: 'Yes',
              popDescription: '',
              popCloseColor: 'warn',
              popOkColor: 'primary',
              click: function click(record) {
                return _this13.onDeleteDORow(record);
              }
            }]
          }, {
            header: 'DispatchID',
            field: 'DispatchID',
            hide: true,
            minWidth: 100
          }, {
            header: 'DeliveryOrderNo',
            field: 'DeliveryOrderNo',
            hide: false,
            minWidth: 100
          }, {
            header: 'DispatchNo',
            field: 'DispatchNo',
            hide: false,
            minWidth: 100
          }, {
            header: 'CustomerID',
            field: 'CustomerID',
            hide: true,
            minWidth: 100
          }, {
            header: 'CustomerName',
            field: 'CustomerName',
            hide: false,
            minWidth: 200
          }, {
            header: 'CustomerPartyID',
            field: 'CustomerPartyID',
            hide: true,
            minWidth: 100
          }, {
            header: 'PartyName',
            field: 'PartyName',
            hide: false,
            minWidth: 200
          }, {
            header: 'ShippingAddress',
            field: 'ShippingAddress',
            hide: false,
            minWidth: 100
          }, {
            header: 'OrderGivenBy',
            field: 'OrderGivenBy',
            hide: false,
            minWidth: 200
          }, {
            header: 'Status',
            field: 'Status',
            hide: false,
            minWidth: 200
          }, {
            header: 'Remarks',
            field: 'Remarks',
            hide: false,
            minWidth: 100
          }, {
            header: 'DispatchDate',
            field: 'DispatchDate',
            hide: false,
            minWidth: 100,
            type: 'date',
            typeParameter: {
              format: 'dd-MM-yyyy'
            }
          }, {
            header: 'WareHouseID',
            field: 'WareHouseID',
            hide: true,
            minWidth: 100
          }, {
            header: 'StatusID',
            field: 'StatusID',
            hide: true,
            minWidth: 100
          }, {
            header: 'CeatedBy',
            field: 'CeatedBy',
            hide: false,
            minWidth: 100
          }, {
            header: 'TruckNo',
            field: 'TruckNo',
            hide: false,
            minWidth: 100
          }, {
            header: 'ContainerNo',
            field: 'ContainerNo',
            hide: false,
            minWidth: 100
          }];
          this.currentUser = this.api.getCurrentUser();
          this.form = this.fb.group({
            customer_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            DeliveryTo_ID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtShipping_Address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            OrderGivenBy_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtTruckNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtContainerNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            DispatchRemarks: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtTotalDispatchQty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
          });
        }

        _createClass(_DispatchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.BindDropdown();
            this.onDispatchList();
            this.DispatchSearchList = [];
            this.DispatchDetailList = [];
          }
        }, {
          key: "BindDropdown",
          value: function BindDropdown() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this14 = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.api.get('/Customer').subscribe(function (data) {
                        _this14.customerList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/CustomerParty').subscribe(function (data) {
                        _this14.customePartyList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/Remarks').subscribe(function (data) {
                        _this14.remarkList = data.filter(function (p) {
                          return p.ProcessID == 2;
                        });
                      }, function (error) {
                        console.error(error);
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "tabDeliveryOrderchange",
          value: function tabDeliveryOrderchange(e) {
            this.tab = e;
            this.onDispatchList();
          }
        }, {
          key: "OnSearchClick",
          value: function OnSearchClick() {
            var _this15 = this;

            var _a;

            if (this.form.value.customer_id == null || this.form.value.customer_id == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else {
              this.api.get('/Dispatch/DispatchSearch?CustomerID=' + this.form.value.customer_id + '&WarehouseId=' + this.currentUser.warehouseId + '&CompanyID=' + this.currentUser.companyId).subscribe(function (data) {
                _this15.DispatchSearchList = data;
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "rowDODoubleClicked",
          value: function rowDODoubleClicked(e) {
            var _this16 = this;

            var DeliverTo = this.customePartyList.filter(function (x) {
              return x.PartyName == e.data.DeliverTo;
            });

            if (DeliverTo.length > 0) {
              var DeliverOrderItem = {
                customer_id: this.form.value.customer_id,
                DeliveryTo_ID: DeliverTo[0]["CustomerPartyID"],
                txtShipping_Address: e.data.ShippingAddress,
                OrderGivenBy_id: e.data.OrderGivenBy,
                txtTruckNo: e.data.TruckNo,
                txtContainerNo: e.data.ContainerNo,
                DispatchRemarks: e.data.Remarks,
                txtTotalDispatchQty: 0
              };
              this.form.setValue(DeliverOrderItem);
            } else {
              var _DeliverOrderItem = {
                customer_id: this.form.value.customer_id,
                DeliveryTo_ID: 0,
                txtShipping_Address: e.data.ShippingAddress,
                OrderGivenBy_id: e.data.OrderGivenBy,
                txtTruckNo: e.data.TruckNo,
                txtContainerNo: e.data.ContainerNo,
                DispatchRemarks: e.data.Remarks,
                txtTotalDispatchQty: 0
              };
              this.form.setValue(_DeliverOrderItem);
            }

            this.DeliveryOrderID = e.data.DeliveryOrderID;
            this.api.get('/Dispatch/GetDispatchDetails?DeliveryOrderID=' + e.data.DeliveryOrderID + '&DeliveryOrderNo=' + e.data.DeliveryOrderNo).subscribe(function (data) {
              _this16.DispatchDetailList = data;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onDispatchCellKeyPress",
          value: function onDispatchCellKeyPress(e) {
            console.log(this.DispatchDetailList);

            if (e.data.BalanceQuantity > e.data.DispatchQuantity) {
              this.onDispatchDetailGridRefresh();
            } else if (e.data.BalanceQuantity == e.data.DispatchQuantity) {
              this.onDispatchDetailGridRefresh();
            } else if (e.data.BalanceQuantity < e.data.DispatchQuantity) {
              this.DispatchDetailList.forEach(function (i) {
                if (i.InwardLocationID == e.data.InwardLocationID) {
                  i.DispatchQuantity = 0;
                }
              });
              alert("DispatchQuantity Must be less than or equal to BalanceQuantity.....!!!");
              this.onDispatchDetailGridRefresh();
            }
          }
        }, {
          key: "onDispatchDetailGridRefresh",
          value: function onDispatchDetailGridRefresh() {
            var newRowData = this.DispatchDetailList.filter(function (row) {
              return row;
            });
            this.DispatchDetailList = newRowData;
            var Totalqty = this.DispatchDetailList.map(function (v1) {
              return v1.DispatchQuantity;
            }).reduce(function (acc, v1) {
              return v1 + acc;
            });
            console.log(Totalqty);
            this.form.controls['txtTotalDispatchQty'].setValue(Totalqty);
          }
        }, {
          key: "onDispatchList",
          value: function onDispatchList() {
            var _this17 = this;

            this.api.get('/Dispatch/Dispatch_Select').subscribe(function (data) {
              _this17.DispatchList = data; //console.log(this.DispatchList);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onDeleteDORow",
          value: function onDeleteDORow(e) {
            var _this18 = this;

            console.log(e);

            if (e.StatusID == 41) {
              alert("This transaction already generated Outward, You can't delete it....!!!");
            } else if (e.StatusID == 43) {
              alert("This transaction already generated Cancelled, You can't delete it....!!!");
            } else {
              var bar = confirm('Do you want to deleted or deactivate your dispatch...');

              if (bar == true) {
                var foo = prompt('Remarks '); //console.log(bar, foo);

                this.api.post('/Dispatch/Dispatch_Cancelled?DispatchID=' + e.DispatchID + '&Remark=' + foo + '&CreatedBy=' + this.currentUser.userId).subscribe(function (data) {
                  data;
                  alert(data);

                  _this18.onDispatchList();
                }, function (error) {
                  console.error(error);
                });
              }
            }
          }
        }, {
          key: "onSaveDispatch",
          value: function onSaveDispatch() {
            var _this19 = this;

            var _a, _b, _c;

            var TotalDispatchQty;

            if (this.DispatchDetailList.length > 0) {
              TotalDispatchQty = this.DispatchDetailList.map(function (v1) {
                return v1.DispatchQuantity;
              }).reduce(function (acc, v1) {
                return v1 + acc;
              });
            } else {
              TotalDispatchQty = 0;
            }

            if (this.form.value.customer_id == null || this.form.value.customer_id == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else if (this.form.value.DeliveryTo_ID == null || this.form.value.DeliveryTo_ID == "") {
              alert("Please.... Select Deliver To..!!!");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("DeliveryTo_ID")) === null || _b === void 0 ? void 0 : _b.focus();
              return;
            } else if (this.form.value.OrderGivenBy_id == null || this.form.value.OrderGivenBy_id == "") {
              alert("Please Enter Order Given By..!!!");
              (_c = document === null || document === void 0 ? void 0 : document.getElementById("OrderGivenBy_id")) === null || _c === void 0 ? void 0 : _c.focus();
              return;
            } else if (TotalDispatchQty <= 0) {
              alert("Please .... Add Dispatch quantity In delivery order detail ");
              return;
            } else {
              console.log(TotalDispatchQty); //alert("Work Fine ...!!!");

              this.clickSave = true;
              this.DispatchDetail = [];
              var DODetail = this.DispatchDetailList.filter(function (x) {
                return x.DispatchQuantity > 0;
              });
              DODetail.forEach(function (i) {
                _this19.DispatchDetail.push({
                  "DeliveryOrderDID": i.DeliveryOrderDID,
                  "ProductID": i.ProductID,
                  "InwardDID": i.InwardDID,
                  "LotNo": i.LotNo,
                  "DispatchQuantity": i.DispatchQuantity,
                  "InwardLocationID": i.InwardLocationID,
                  "StorageAreaID": i.StorageAreaID
                });
              });
              this.DispatchDetail.slice();
              console.log(this.DispatchDetail);
              this.SaveDispatch = {
                DispatchID: 0,
                CustomerID: this.form.value.customer_id,
                CustomerPartyID: this.form.value.DeliveryTo_ID,
                WareHouseID: this.currentUser.warehouseId,
                ShippingAddress: this.form.value.txtShipping_Address,
                OrderGivenBy: this.form.value.OrderGivenBy_id,
                Remarks: this.form.value.DispatchRemarks,
                CreatedBy: this.currentUser.userId,
                DeliveryOrderID: this.DeliveryOrderID,
                TruckNo: this.form.value.txtTruckNo,
                ContainerNo: this.form.value.txtContainerNo,
                DispatchDetailModel: this.DispatchDetail
              };
              console.log(this.SaveDispatch);
              this.api.post('/Dispatch/SaveDispatch', this.SaveDispatch).subscribe(function (data) {
                data;
                console.log(data);
                alert(data.Table[0]["Message"]);
              }, function (error) {
                console.error(error);
                _this19.clickSave = false;
              });
            }
          }
        }, {
          key: "onResetDispatch",
          value: function onResetDispatch() {
            this.form.reset();
            this.BindDropdown();
            this.DispatchSearchList = [];
            this.DispatchDetailList = [];
            this.clickSave = false;
          }
        }, {
          key: "onKeyfilter",
          value: function onKeyfilter(e) {
            var _this20 = this;

            this.api.get('/Dispatch/Dispatch_Select').subscribe(function (data) {
              _this20.DispatchList = data;
              var searchName = e;
              var lists = _this20.DispatchList;
              var res = lists.filter(function (obj) {
                return obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DispatchNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DeliveryOrderNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.OrderGivenBy.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.PartyName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.Remarks.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.ShippingAddress.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.TruckNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.ContainerNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.Status.toLowerCase().indexOf(searchName.toLowerCase()) >= 0;
              });
              _this20.DispatchList = res;
            }, function (error) {
              console.error(error);
            });
          }
        }]);

        return _DispatchComponent;
      }();

      _DispatchComponent.ɵfac = function DispatchComponent_Factory(t) {
        return new (t || _DispatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
      };

      _DispatchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DispatchComponent,
        selectors: [["app-dispatch"]],
        decls: 87,
        vars: 26,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "1ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Dispatch"], [3, "formGroup"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-5", "col-md-5"], [1, "form-group"], ["formControlName", "customer_id", "id", "customer_id", 1, "form-control", "form-control-sm"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "customer_id_error"], [1, "col-sm-2", "col-md-2"], [1, "form-group", "pt-3"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["formControlName", "DeliveryTo_ID", "id", "DeliveryTo_ID", 1, "form-control", "form-control-sm"], [1, "col-sm-6", "col-md-6"], ["type", "text", "formControlName", "txtShipping_Address", "id", "txtShipping_Address", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "OrderGivenBy_id", "id", "OrderGivenBy_id", "placeholder", "", 1, "form-control", "form-control-sm"], [1, "col-sm-4", "col-md-4"], ["type", "text", "formControlName", "txtTruckNo", "id", "txtTruckNo", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtContainerNo", "id", "txtContainerNo", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "DispatchRemarks", "id", "DispatchRemarks", "placeholder", "", 1, "form-control", "form-control-sm"], [1, "col-12"], [1, "font-weight-bold"], [1, "ag-theme-alpine", 2, "height", "250px", 3, "rowData", "columnDefs", "rowDoubleClicked"], [1, "ag-theme-alpine", 2, "height", "250px", 3, "rowData", "columnDefs", "cellValueChanged"], [1, "row", "mt-2"], [1, "col-sm-12"], [1, "form-group", "float-right", 2, "display", "flex"], ["type", "text", "formControlName", "txtTotalDispatchQty", "id", "txtTotalDispatchQty", "readonly", "", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "20%", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "ml-3", 2, "width", "20%", 3, "click"], ["label", "Dispatch List"], [1, "form-control-sm"], ["type", "text", "id", "filtertext", 1, "form-control-sm", 3, "keyup"], ["filtertext", ""], [2, "height", "800px"], [2, "height", "790px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSize"], [3, "value"]],
        template: function DispatchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedIndexChange", function DispatchComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tabDeliveryOrderchange($event);
            })("selectedIndexChange", function DispatchComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DispatchComponent_option_16_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DispatchComponent_Template_button_click_20_listener() {
              return ctx.OnSearchClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "DeliveryTo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DispatchComponent_option_29_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Shipping Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "OrderGivenBy");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Truck No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Container No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " Delivery Order List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "ag-grid-angular", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowDoubleClicked", function DispatchComponent_Template_ag_grid_angular_rowDoubleClicked_60_listener($event) {
              return ctx.rowDODoubleClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Dispatch Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "ag-grid-angular", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cellValueChanged", function DispatchComponent_Template_ag_grid_angular_cellValueChanged_66_listener($event) {
              return ctx.onDispatchCellKeyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Total Dispatch Qty");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DispatchComponent_Template_button_click_74_listener() {
              return ctx.onSaveDispatch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DispatchComponent_Template_button_click_76_listener() {
              return ctx.onResetDispatch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-tab", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Filter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "input", 36, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function DispatchComponent_Template_input_keyup_82_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](83);

              return ctx.onKeyfilter(_r2.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "mtx-grid", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedIndex", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customerList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customePartyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx.DispatchSearchList)("columnDefs", ctx.DispatchSearchcolumnDefs);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx.DispatchDetailList)("columnDefs", ctx.DispatchDetailcolumnDefs);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.clickSave);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.DispatchList)("columns", ctx.Dispatch_ListcolumnDefs)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Item List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", false)("showPaginator", false)("pageSize", 10000000);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_12__.MtxGridComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwYXRjaC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      var _DispatchDetail = /*#__PURE__*/_createClass(function _DispatchDetail() {
        _classCallCheck(this, _DispatchDetail);

        this.DeliveryOrderNo = 0;
        this.DeliveryOrderDID = 0;
        this.ProductID = 0;
        this.ProductName = "";
        this.LotNo = "";
        this.StorageArea = "";
        this.InwardDID = 0;
        this.InwardLocationID = 0;
        this.DOQuantity = 0;
        this.BalanceQuantity = 0;
        this.DispatchQuantity = 0;
        this.BrandName = "";
        this.ItemsInPacket = "";
        this.StorageAreaID = 0;
        this.OrderGivenBy = "";
      });

      var _DDetail = /*#__PURE__*/_createClass(function _DDetail() {
        _classCallCheck(this, _DDetail);

        this.DeliveryOrderDID = 0;
        this.ProductID = 0;
        this.InwardDID = 0;
        this.LotNo = 0;
        this.DispatchQuantity = 0;
        this.InwardLocationID = 0;
        this.StorageAreaID = 0;
      });
      /***/

    },

    /***/
    58535:
    /*!***********************************************************!*\
      !*** ./src/app/routes/process/inward/inward.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InwardComponent": function InwardComponent() {
          return (
            /* binding */
            _InwardComponent
          );
        },

        /* harmony export */
        "StorageArea": function StorageArea() {
          return (
            /* binding */
            _StorageArea
          );
        },

        /* harmony export */
        "InwardStorageArea": function InwardStorageArea() {
          return (
            /* binding */
            _InwardStorageArea
          );
        },

        /* harmony export */
        "InwardShowStorageArea": function InwardShowStorageArea() {
          return (
            /* binding */
            _InwardShowStorageArea
          );
        },

        /* harmony export */
        "InwardCharege": function InwardCharege() {
          return (
            /* binding */
            _InwardCharege
          );
        },

        /* harmony export */
        "InwardTransportData": function InwardTransportData() {
          return (
            /* binding */
            _InwardTransportData
          );
        },

        /* harmony export */
        "InwardTransport": function InwardTransport() {
          return (
            /* binding */
            _InwardTransport
          );
        },

        /* harmony export */
        "InwardDetails": function InwardDetails() {
          return (
            /* binding */
            _InwardDetails
          );
        },

        /* harmony export */
        "SaveInward": function SaveInward() {
          return (
            /* binding */
            _SaveInward
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var app_routes_renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/routes/renderer/button-renderer.component */
      52200);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-matero/extensions */
      56830);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ag-grid-angular */
      82022);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);

      function InwardComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r18.CustomerID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r18.CustomerName);
        }
      }

      function InwardComponent_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", d_r19.DockID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r19.DockName);
        }
      }

      function InwardComponent_option_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var u_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", u_r20.UserID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](u_r20.UserName);
        }
      }

      function InwardComponent_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var r_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", r_r21.Remarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r21.Remarks);
        }
      }

      function InwardComponent_option_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", p_r22.ProductID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r22.ProductName);
        }
      }

      function InwardComponent_option_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", b_r23.BrandID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r23.BrandName);
        }
      }

      function InwardComponent_option_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", c_r24.Counts);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r24.Counts);
        }
      }

      function InwardComponent_option_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var s_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", s_r25.StorageAreaTypeID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", s_r25.ServiceName, " ");
        }
      }

      function InwardComponent_option_153_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", l_r26.LabourContractorID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", l_r26.ContractorName, "");
        }
      }

      function InwardComponent_option_166_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var r_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", r_r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r27.Remarks);
        }
      }

      function InwardComponent_ng_template_191_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Storage Area");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "AllocatedQty");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ag-grid-angular", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cellValueChanged", function InwardComponent_ng_template_191_Template_ag_grid_angular_cellValueChanged_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r31.onCellKeyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_ng_template_191_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](192);

            return ctx_r33.onSaveStorageArea(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "ADD");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_ng_template_191_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](192);

            return ctx_r34.oncloseStoragearea(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx_r11.storageAreaList)("columnDefs", ctx_r11.columnDefs);
        }
      }

      function InwardComponent_ng_template_193_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Customer Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ag-grid-angular", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_ng_template_193_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](194);

            return ctx_r37.onCloseCustomerContact(_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx_r13.customercontactList)("columnDefs", ctx_r13.CustomerContactcolumnDefs)("groupIncludeTotalFooter", true);
        }
      }

      function InwardComponent_ng_template_195_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Transporter Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_ng_template_195_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r41.onAddTranspoterDetailNewrow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ag-grid-angular", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowClicked", function InwardComponent_ng_template_195_Template_ag_grid_angular_rowClicked_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r43.onRowSelectedTransport($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_ng_template_195_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r44.onRemoveTranspoterDetailNewrow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_ng_template_195_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](196);

            return ctx_r45.onCloseTransportContact(_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx_r15.TransportList)("columnDefs", ctx_r15.TransperdetailcolumnDefs);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1() {
        return [10, 20, 50, 100, 500];
      };

      var _InwardComponent = /*#__PURE__*/function () {
        //selectedBrand:any;
        function _InwardComponent(fb, api, dialog, modalService, el) {
          var _this21 = this;

          _classCallCheck(this, _InwardComponent);

          this.fb = fb;
          this.api = api;
          this.dialog = dialog;
          this.modalService = modalService;
          this.el = el;
          this.collapsed = false;
          this.OnAddProductClick = false;
          this.InwardID = 0;
          this.ReceiptNo = '0';
          this.DID = 0;
          this.Flag = false;
          this.click = false;
          this.challanid = 0;
          this.InwardTransportID = 0;
          this.challandid = 0;
          this.closeResult = '';
          this.tab = 0;
          this.config = {
            backdrop: false,
            ignoreBackdropClick: true
          };
          this.submitted = false;
          this.firstlotno = "";
          this.StorageId = 0;
          this.challanquantity = 0;
          this.allocatedQty = 0;
          this.outquantity = 0;
          this.inprocessquantity = 0;
          this.balancequantity = 0;
          this.transferdid = 0;
          this.focusedRowKey = 117;
          this.servicesid = 0;
          this.ProductRate = 0;
          this.isnew = true;
          this.InwardDetailList = [];
          this.DetailList = [];
          this.newDynamicInwardDetails = {};
          this.newDynamicInwardtransfer = {};
          this.InwardchargesList = [];
          this.ChargesList = [];
          this.InwardTransportList = [];
          this.TransportList = [];
          this.InwardshowStorageArea = [];
          this.InwardshowStorage = [];
          this.InwardValidateStorage = [];
          this.storageAreaList = [];
          this.SaveInward = [];
          this.SaveInwardlist = [];
          this.newDynamicSaveInward = {};
          this.GetInwardListJson = {};
          this.InData = {};
          this.InServiceData = {};
          this.BindDropdownData = {};
          this.rowSelection = 'multiple';
          this.columnDefs = [{
            headerName: 'StorageAreaID',
            field: 'StorageAreaID',
            hide: true
          }, {
            headerName: 'StorageArea',
            field: 'StorageArea',
            checkboxSelection: false,
            filter: 'agTextColumnFilter',
            filterParams: {
              applyMiniFilterWhileTyping: true
            },
            floatingFilter: true
          }, {
            headerName: 'Qty',
            field: 'AllocatedQty',
            aggFunc: "sum",
            cellEditorPopup: true,
            editable: true,
            valueParser: "Number(newValue)",
            sort: "desc",
            filter: 'agNumberColumnFilter',
            floatingFilter: true,
            cellEditorPopupPosition: 'defualt',
            cellStyle: function cellStyle(params) {
              if (params.value > 0) {
                //mark police cells as red
                return {
                  color: 'white',
                  backgroundColor: 'blue'
                };
              }

              return {
                color: 'black',
                backgroundColor: 'transparent'
              };
            }
          }];
          this.AppliedStoragecolumnDefs = [{
            headerName: 'InwardDID',
            field: 'InwardDID',
            hide: false
          }, {
            headerName: 'LotNo',
            field: 'LotNo',
            filter: true
          }, {
            headerName: 'TransporterName',
            field: 'TransporterName',
            filter: true
          }, {
            headerName: 'TruckNo',
            field: 'TruckNo',
            filter: true
          }, {
            headerName: 'TransporterName',
            field: 'TransporterName',
            filter: true
          }, {
            headerName: 'ContainerNo',
            field: 'ContainerNo',
            filter: true
          }, {
            headerName: 'Applied Qty',
            field: 'Qty',
            filter: true
          }];
          this.CustomerContactcolumnDefs = [{
            headerName: 'CustomerContactID',
            field: 'CustomerContactID',
            hide: true
          }, {
            headerName: 'Contact Person',
            field: 'ContactPersonName'
          }, {
            headerName: 'Mobile No',
            field: 'MobileNo'
          }, {
            headerName: 'Email ID',
            field: 'EmailID'
          }, {
            headerName: 'Send SMS',
            field: 'SendSMS'
          }, {
            headerName: 'Send Email',
            field: 'SendEmail'
          }];
          this.TransperdetailcolumnDefs = [{
            headerName: 'InwardTransportID',
            field: 'InwardTransportID',
            hide: true
          }, {
            headerName: 'TransporterName',
            field: 'TransporterName',
            editable: true
          }, {
            headerName: 'TruckNo',
            field: 'TruckNo',
            editable: true
          }, {
            headerName: 'ContainerNo',
            field: 'ContainerNo',
            editable: true
          }];
          this.InwardDetailColumns = [{
            header: "InwardDID",
            field: "InwardDID",
            hide: true
          }, {
            header: "ProductID",
            field: "ProductID",
            hide: true
          }, {
            header: "ProductName",
            field: "ProductName"
          }, {
            header: "LotNo",
            field: "LotNo"
          }, {
            header: "BrandID",
            field: "BrandID",
            hide: true
          }, {
            header: "BrandName",
            field: "BrandName"
          }, {
            header: "ItemsInPacket",
            field: "ItemsInPacket"
          }, {
            header: "InQuantity",
            field: "InQuantity"
          }, {
            header: "MFD Date",
            field: "MFGDate",
            hide: true
          }, {
            header: "ExpiryDate",
            field: "ExpDate",
            hide: true
          }, {
            header: "Remarks",
            field: "Remarks"
          }, {
            header: "LabourContractorID",
            field: "LabourContractorID",
            hide: true
          }, {
            header: "LabourContracterName",
            field: "LabourContracterName"
          }, {
            header: "StorageAreaTypeID",
            field: "StorageAreaTypeID",
            hide: true
          }, {
            header: "StorageAreaType",
            field: "StorageAreaType"
          }, {
            header: "SelfLife",
            field: "SelfLife"
          }, {
            header: "Country",
            field: "Country"
          }];
          this.serviceColumns = [{
            field: 'Add',
            cellRenderer: function cellRenderer(params) {
              return _this21.checkBoxCellEditRenderer(params);
            },
            hide: false,
            width: 10
          }, {
            field: 'InwardDID',
            hide: true
          }, {
            field: 'ServiceID',
            hide: true,
            resizable: true
          }, {
            field: 'ServiceName'
          }, {
            field: 'C_Rate',
            hide: true
          }, {
            field: 'L_Rate',
            hide: true
          }]; // serviceColumns: MtxGridColumn[] = [
          //   {
          //     header:"Add",
          //     field:"Add",
          //     hide:true
          //   },{
          //     header:"InwardDID",
          //     field:"InwardDID",
          //     hide:true
          //   },
          //   {
          //     header:"ServiceID",
          //     field:"ServiceID",
          //     hide:true
          //   },
          //   {
          //     header:"ServiceName",
          //     field:"ServiceName",
          //   },{
          //     header:"C_Rate",
          //     field:"C_Rate",
          //     hide:true
          //   },{
          //     header:"L_Rate",
          //     field:"L_Rate",
          //     hide:true
          //   }
          // ]

          this.AppliedStorageArea = [{
            header: "Add",
            field: "Add",
            hide: true
          }, {
            header: "InwardDID",
            field: "InwardDID",
            hide: true
          }, {
            header: "ProductID",
            field: "ProductID",
            hide: true
          }, {
            header: "ProductName",
            field: "ProductName"
          }, {
            header: "LotNo",
            field: "LotNo",
            hide: true
          }, {
            header: "StorageArea",
            field: "StorageArea",
            hide: true
          }, {
            header: "StorageAreaID",
            field: "StorageAreaID",
            hide: true
          }, {
            header: "AllocatedQuantity",
            field: "AllocatedQuantity",
            hide: true
          }, {
            header: "IsCustomerArea",
            field: "IsCustomerArea",
            hide: true
          }];
          this.StorageAreaColumns = [{
            header: "StorageAreaID",
            field: "StorageAreaID",
            hide: true
          }, {
            header: "StorageArea",
            field: "StorageArea",
            hide: false
          }, {
            header: "AllocatedQty",
            field: "AllocatedQty"
          }]; //  public defaultColDef: ColDef = {
          //   flex: 1,
          //   minWidth: 200,
          //   resizable: true,
          //   floatingFilter: true,
          // };
          // public columnInwardDefs: ColDef[] = [
          //   {
          //     headerName:'Action',
          //     minWidth: 100,
          //     cellRenderer: 'buttonRenderer',
          //     cellRendererParams: {
          //       onClick: this.onEditInward.bind(this),
          //       label: 'Edit'
          //     }
          //   },
          //   {
          //     headerName:'InwardID',
          //     field:'InwardID',
          //     hide:false,      
          //     minWidth: 100,
          //   },
          //   {
          //     headerName:'CustomerID',
          //     field:'CustomerID',
          //     hide:true
          //   },
          //   {
          //     headerName:'ReceiptNo',
          //     field:'ReceiptNo',
          //     minWidth: 100,    
          //   },
          //   {
          //     headerName:"CustomerName",
          //     field:"CustomerName",
          //     minWidth:200,filter: 'agTextColumnFilter'
          //   },
          //   {
          //     headerName:"DocID",
          //     field:"DocID",
          //     minWidth:100,
          //   },
          //   {
          //     headerName:'UnLoadingBy',
          //     field:'UnLoadingBy',
          //     filter: 'agTextColumnFilter',
          //     hide:true
          //   },
          //   {
          //     headerName:"InwardDate",
          //     field:"InwardDate",filter: 'agTextColumnFilter',
          //     minWidth:100,
          //   },
          //   {
          //     headerName:"BillingStartDate",
          //     field:"BillingStartDate",filter: 'agTextColumnFilter',
          //     minWidth:100,
          //   },
          //   {
          //     headerName:"PersonName",
          //     field:"PersonName",filter: 'agTextColumnFilter',
          //     minWidth:100,
          //   },
          //   {
          //     headerName:"Remarks",
          //     field:"Remarks",filter: 'agTextColumnFilter',
          //     minWidth:100,
          //   },
          //   {
          //     headerName:"Status",
          //     field:"Status",
          //     minWidth:100,
          //     hide:true
          //   },
          //   {
          //     headerName:"StatusName",
          //     field:"StatusName",filter: 'agTextColumnFilter',
          //     minWidth:100,
          //   },
          // ];

          this.columns = [{
            minWidth: 100,
            header: 'Edit',
            field: 'Edit',
            pinned: 'right',
            right: '0px',
            type: 'button',
            buttons: [// {
            //   type: 'icon',
            //   text: 'copy',
            //   icon: 'file_copy',
            //   tooltip: 'copy',
            //   disabled: true,
            //   click: () => {
            //     alert('copy');
            //   },
            // },
            {
              type: 'icon',
              text: 'edit',
              icon: 'edit',
              tooltip: 'Edit',
              click: function click(e) {
                console.log(e);
                _this21.tab = 0;
              }
            } // {
            //   type: 'icon',
            //   text: 'delete',
            //   icon: 'delete',
            //   tooltip: 'Delete',
            //   color: 'warn',
            //   pop: true,
            //   popTitle: 'Confirm delete?',
            //   click: () => {
            //     alert('delete');
            //   },
            // },
            ]
          }, {
            header: 'InwardID',
            field: 'InwardID',
            hide: false,
            minWidth: 100
          }, {
            header: 'CustomerID',
            field: 'CustomerID',
            hide: true
          }, {
            header: 'ReceiptNo',
            field: 'ReceiptNo',
            minWidth: 100
          }, {
            header: "CustomerName",
            field: "CustomerName",
            minWidth: 200
          }, {
            header: "DocID",
            field: "DocID",
            minWidth: 100
          }, {
            header: 'UnLoadingBy',
            field: 'UnLoadingBy',
            hide: true
          }, {
            header: "InwardDate",
            field: "InwardDate",
            minWidth: 100
          }, {
            header: "BillingStartDate",
            field: "BillingStartDate",
            minWidth: 100
          }, {
            header: "PersonName",
            field: "PersonName",
            minWidth: 100
          }, {
            header: "Remarks",
            field: "Remarks",
            minWidth: 100
          }, {
            header: "Status",
            field: "Status",
            minWidth: 100,
            hide: true
          }, {
            header: "StatusName",
            field: "StatusName",
            minWidth: 100
          }];
          this.columnstest = [{
            header: "Action",
            field: 'Action',
            minWidth: 105,
            pinned: 'left',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'Edit',
              click: function click(record) {
                return _this21.onEditTestListRow(record);
              }
            }, {
              color: 'warn',
              type: 'icon',
              icon: 'delete',
              tooltip: 'delete',
              pop: true,
              popTitle: 'Do you want to delete inward ....!!',
              popCloseText: 'No',
              popOkText: 'Yes',
              popDescription: '',
              popCloseColor: 'warn',
              popOkColor: 'primary',
              click: function click(record) {
                return _this21.onDeleteTestListRow(record);
              }
            }]
          }, {
            header: 'InwardID',
            field: 'InwardID',
            hide: true
          }, {
            header: 'CustomerID',
            field: 'CustomerID',
            hide: true
          }, {
            header: 'ReceiptNo',
            field: 'ReceiptNo',
            minWidth: 80
          }, {
            header: 'CustomerName',
            field: 'CustomerName',
            minWidth: 200
          }, {
            header: 'DocID',
            field: 'DocID',
            hide: true
          }, {
            header: 'UnLoadingBy',
            field: 'UnLoadingBy',
            hide: true
          }, {
            header: 'InwardDate',
            field: 'InwardDate',
            minWidth: 100,
            type: 'date',
            typeParameter: {
              format: 'dd-MM-yyyy'
            }
          }, {
            header: 'BillingStartDate',
            field: 'BillingStartDate',
            minWidth: 100,
            type: 'date',
            typeParameter: {
              format: 'dd-MM-yyyy'
            },
            hide: true
          }, {
            header: 'PersonName',
            field: 'PersonName',
            minWidth: 120
          }, {
            header: 'Status',
            field: 'Status',
            hide: true,
            minWidth: 120
          }, {
            header: 'Remarks',
            field: 'Remarks',
            minWidth: 200
          }, {
            header: 'StatusName',
            field: 'StatusName',
            minWidth: 120
          }];
          this.frameworkComponents = {
            buttonRenderer: app_routes_renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_1__.ButtonRendererComponent
          };
          this.currentUser = this.api.getCurrentUser(); //this.todayDate=new Date();

          var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
          this.todayDate = dateSendingToServer;
          this.productdate = new Date(); //DatePipe('en-US');

          this.form = this.fb.group({
            customer_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            challan_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            dock_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            inward_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            unloading_by: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            custremarks: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            transportername: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            truckno: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            container_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            selflife: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            brand_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            packetcount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            service_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            mgfdate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            expdate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            labourcontractor_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            lot_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            remarks: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            allocatedQty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
          });
        }

        _createClass(_InwardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.BindDropdownData = {
              InwardID: 0,
              CustomerID: 0,
              Remarks: 0,
              CreatedBy: 0,
              serviceID: 0,
              ProductID: 0,
              CompanyId: Number(this.currentUser.companyId),
              WarehouseId: Number(this.currentUser.warehouseId),
              FinantialYearId: Number(this.currentUser.FinantialYearId),
              challan: 0,
              StorageAreaMasterID: 1,
              FinancialYear: ""
            };
            this.BindDropdown(); // console.log(this.todayDate+'----'+this.productdate);

            console.log(this.todayDate);
          }
        }, {
          key: "BindDropdown",
          value: function BindDropdown() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this22 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.api.get('/Customer').subscribe(function (data) {
                        _this22.customerList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/dock').subscribe(function (data) {
                        _this22.dockList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/UnloadingBy').subscribe(function (data) {
                        _this22.unloadingList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/Remarks').subscribe(function (data) {
                        _this22.remarkList = data.filter(function (p) {
                          return p.ProcessID == 1;
                        });
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/brand').subscribe(function (data) {
                        _this22.brandList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/CountInPacket').subscribe(function (data) {
                        _this22.packateCountList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/LabourContracter').subscribe(function (data) {
                        _this22.labourContractorList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/StorageAreaType/servieceStorageAreaType').subscribe(function (data) {
                        _this22.serviceTypeList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.post('/InwardList', this.BindDropdownData).subscribe(function (data) {
                        _this22.InwardList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.post('/Inward/GetLotNo', this.BindDropdownData).subscribe(function (data) {
                        _this22.CurrentLotNo = data[0]["LotNo"]; //console.log(this.CurrentLotNo)
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/StorageAreaMaster', this.BindDropdownData).subscribe(function (data) {
                        _this22.storageAreaList = data;
                      }, function (error) {
                        console.error(error);
                      });

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "GetCustomerID",
          value: function GetCustomerID(id) {
            var _this23 = this;

            //console.log(this.form.value)
            id = this.form.value.customer_id;
            this.api.post('/Inward/GetCustomerProducts', this.BindDropdownData).subscribe(function (data) {
              _this23.productList = data; //console.log(this.productList);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "GetServicedetail",
          value: function GetServicedetail() {
            var _this24 = this;

            this.api.get('/StorageAreaType/servieceStorageAreaType').subscribe(function (data) {
              _this24.serviceTypeList = data;
            }, function (error) {
              console.error(error);
            });
          } // OnEditInward(){
          //var dataGrid = $("#InwardListgrid").data();
          // var selectedKeys = dataGrid.getSelectedRowKeys();
          // var selectedData = dataGrid.getSelectedRowsData();
          // console.log("dataGrid");
          //   this.api.post('/Inward/GetInwardDetailsByID?InwardID=53').subscribe(
          // data=>  {this.InwardEdit=data;
          // console.log(this.InwardEdit);},
          // error=>{ console.log(error);}
          // ); 
          // }
          // editIconClick(e:any){
          //   console.log(e);
          // this.api.get('/CountInPacket').subscribe(
          //   data=>{this.packateCountList=data},
          //   error=>{ console.error(error); alert(error)}
          // );
          //console.log('/Inward/GetInwardDetailsByID?InwardID='+e.row.data.InwardID);
          //else if(e.row.data.Status==52 || e.row.data.Status==0)
          // {
          //   console.log("Sorry,Inward is under process. You can't edit ....!!!");
          // }else if(e.row.data.Status==53)
          // {
          //   console.log("Sorry,Outward already generated.You can't edit ....!!!");
          // }else if(e.row.data.Status==54)
          // {
          //   console.log("Sorry,Inward is already cancelled ....!!!");
          // }
          // console.log(e.row.data);
          // const Inwarditems:any={
          //   customer_id:e.row.data.CustomerID,
          //   challan_no:e.row.data.challan_no==null?0:e.row.data.challan_no,
          //   container_no :e.row.data.container_no,
          //   dock_name:e.row.data.DocID,
          //   inward_date:e.row.data.InwardDate,
          //   unloading_by:e.row.data.UnLoadingBy,
          //   custremarks:e.row.data.Remarks,
          //   //transportername:e.row.data.transportername,
          // }
          // console.log(Inwarditems);
          // this.form.setValue(Inwarditems);
          // }
          //   deleteIconClick(e:any){
          //     if(e.row.data.Status==51)
          //     {
          //       console.log("new inward");
          //     }else if(e.row.data.Status==52 || e.row.data.Status==0)
          //     {
          //       console.log("Sorry,Inward is under process. You can't edit ....!!!");
          //     }else if(e.row.data.Status==53)
          //     {
          //       console.log("Sorry,Outward already generated.You can't edit ....!!!");
          //     }else if(e.row.data.Status==54)
          //     {
          //       console.log("Sorry,Inward is already cancelled ....!!!");
          //     }
          // }
          // onTabclick(){  
          //   console.log("new inward");
          //   this.api.post('/Inward/GetInwardDetailsByID?InwardID=53').subscribe(
          //     data=>  {this.InwardEdit=data;
          //     console.log(this.InwardEdit);},
          //     error=>{ console.log(error);}
          //     ); 
          // }

        }, {
          key: "printIconClick",
          value: function printIconClick(e) {
            //   this.tab=0;
            if (e.row.data.Status == 51 || e.row.data.Status == 5) {}
          }
        }, {
          key: "OnApplyClick",
          value: function OnApplyClick(customer_id, challan_no) {
            var _a, _b; //console.log(this.form.value.challan_no);


            if (this.form.value.customer_id == null || this.form.value.customer_id == 0) {
              alert("Select Customers .....");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
            } else if (this.form.value.challan_no == "" || this.form.value.challan_no == null) {
              alert("Enter challan No .....");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("challan_no")) === null || _b === void 0 ? void 0 : _b.focus();
            }
          }
        }, {
          key: "onCustomerContact",
          value: function onCustomerContact(CustomerContactcontent) {
            var _this25 = this;

            var _a;

            if (this.form.value.customer_id == null || this.form.value.customer_id == 0) {
              alert("Select Customers .....");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              //console.log("open Customers .....");
              var CustomerData = {
                InwardID: 0,
                CustomerID: Number(this.form.value.customer_id),
                Remarks: 0,
                CreatedBy: 0,
                serviceID: 0,
                ProductID: 0,
                CompanyId: Number(this.currentUser.companyId),
                WarehouseId: Number(this.currentUser.warehouseId),
                FinantialYearId: Number(this.currentUser.FinantialYearId),
                challan: 0,
                StorageAreaMasterID: 1,
                FinancialYear: ""
              };
              this.api.post('/Inward/GetCustomerContacts', CustomerData).subscribe(function (data) {
                _this25.customercontactList = data; //console.log(this.customercontactList);
              }, function (error) {
                console.error(error);
              });
              this.modalService.open(CustomerContactcontent);
            }
          }
        }, {
          key: "onCloseCustomerContact",
          value: function onCloseCustomerContact(CustomerContactcontent) {
            this.modalService.dismissAll(CustomerContactcontent);
          } //-----------------------------------------------------------------tansport popup

        }, {
          key: "onCloseTransportContact",
          value: function onCloseTransportContact(TranspoterDetailcontent) {
            var InwardTransports = this.TransportList.filter(function (x) {
              return x.TruckNo.length > 0;
            });
            this.TransportList = InwardTransports; //console.log(this.TransportList);

            this.modalService.dismissAll(TranspoterDetailcontent);
          }
        }, {
          key: "OnTransportAdd",
          value: function OnTransportAdd(TranspoterDetailcontent) {
            if (this.form.value.truckno == null || this.form.value.truckno == "") {
              alert("Please .... Enter Truck Number...");
            } else {
              //console.log('truckno= '+this.form.value.truckno);
              if (this.TransportList.length == 0) {
                this.InwardTransportID = 1;
                this.TransportList.push({
                  "InwardTransportID": this.InwardTransportID,
                  "TransporterName": this.form.value.transportername,
                  "TruckNo": this.form.value.truckno,
                  "ContainerNo": this.form.value.container_no
                });
                this.TransportList.slice();
              } else {
                this.InwardTransportID = this.InwardTransportID + 1;
              }

              this.modalService.open(TranspoterDetailcontent);
            }
          }
        }, {
          key: "onRowSelectedTransport",
          value: function onRowSelectedTransport(e) {
            this.InwardTransportID = e.data.InwardTransportID;
          }
        }, {
          key: "onRemoveTranspoterDetailNewrow",
          value: function onRemoveTranspoterDetailNewrow() {
            var _this26 = this;

            //console.log(this.InwardTransportID);
            var InwardTransports = this.TransportList.filter(function (x) {
              return x.InwardTransportID != _this26.InwardTransportID;
            });
            this.TransportList = InwardTransports; //console.log(this.TransportList);
          }
        }, {
          key: "onAddTranspoterDetailNewrow",
          value: function onAddTranspoterDetailNewrow() {
            this.InwardTransportID = this.InwardTransportID + 1;
            var lists = this.TransportList; //console.log(this.TransportList);

            lists.push({
              "InwardTransportID": this.InwardTransportID,
              "TransporterName": '',
              "TruckNo": '',
              "ContainerNo": ''
            });
            var newRowData = this.TransportList.filter(function (row) {
              return row;
            });
            this.TransportList = newRowData; //console.log(this.TransportList);
          }
        }, {
          key: "OnProductSelect",
          value: function OnProductSelect(id) {
            var _this27 = this;

            id = this.form.value.product_id;
            this.api.get('/service/InwardService?productID=' + id + "&customerID=" + this.form.value.customer_id).subscribe(function (data) {
              _this27.inwardservicelist = data;
              console.log(_this27.inwardservicelist);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "OnBrandSelect",
          value: function OnBrandSelect(id) {}
        }, {
          key: "OnServiceSelect",
          value: function OnServiceSelect(id) {
            var _this28 = this;

            var _a, _b;

            if (this.form.value.customer_id == null) {
              alert("Please .... select Customers");
              this.form.controls['product_id'].reset();
              this.form.controls['service_id'].reset();
              this.inwardservicelist = [];
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else if (this.form.value.product_id == null) {
              alert("Please .... select Product");
              this.form.controls['product_id'].reset();
              this.form.controls['service_id'].reset();
              this.inwardservicelist = [];
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("product_id")) === null || _b === void 0 ? void 0 : _b.focus();
              return;
            } else {
              id = this.form.value.service_id; //.StorageAreaTypeID;

              this.InServiceData = {
                InwardID: 0,
                CustomerID: Number(this.form.value.customer_id),
                Remarks: "",
                CreatedBy: 0,
                serviceID: Number(this.form.value.service_id),
                ProductID: Number(this.form.value.product_id),
                CompanyId: 0,
                WarehouseId: 0,
                FinantialYearId: 0,
                challan: "",
                StorageAreaMasterID: 0,
                FinancialYear: ""
              };
              this.api.post('/Inward/GetServiceId', this.InServiceData).subscribe(function (data) {
                _this28.servicesid = data[0]["StorageAreaTypeID"];
              }, function (error) {
                console.error(error);
              });
              this.api.post('/Inward/GetInwardProductRate', this.InServiceData).subscribe(function (datas) {
                var _a;

                console.log(" mess =>" + datas[0]["Message"]);

                if (datas[0]["Message"] !== '') {
                  alert("" + datas[0]["Message"]);

                  _this28.form.controls['product_id'].reset();

                  _this28.form.controls['service_id'].reset();

                  _this28.inwardservicelist = [];
                  (_a = document === null || document === void 0 ? void 0 : document.getElementById("product_id")) === null || _a === void 0 ? void 0 : _a.focus();
                }
              }, function (errors) {
                console.error(errors);
              });
            }
          }
        }, {
          key: "OnLabourSelect",
          value: function OnLabourSelect(id) {} // getDropDownText(id:any, object:any){
          //   const selObj = _.filter(object, function (o:any) {
          //       return (_.includes(id,o.id));
          //   });
          //   return selObj;
          // }
          // onRowDoubleClick(a:any,e:any)
          // {
          //   console.log(a);
          //   console.log(e);
          // }

        }, {
          key: "onRowDblclicked",
          value: function onRowDblclicked(a, e) {
            var _this29 = this;

            this.Flag = true;
            this.GetServicedetail();
            console.log(this.InwardTransportList); //-----------------------------------------------------Reset

            this.form.controls['product_id'].reset();
            this.form.controls['brand_id'].reset();
            this.form.controls['packetcount'].reset();
            this.form.controls['service_id'].reset();
            this.form.controls['mgfdate'].reset();
            this.form.controls['expdate'].reset();
            this.form.controls['remarks'].reset();
            this.form.controls['selflife'].setValue('0');
            this.form.controls['quantity'].reset();
            this.form.controls['country'].setValue('');
            this.CurrentLotNo = Number(this.CurrentLotNo) + 1;
            this.form.patchValue({
              brand_id: a.cellSelection[0].rowData["BrandID"],
              product_id: a.cellSelection[0].rowData["ProductID"],
              packetcount: a.cellSelection[0].rowData["ItemsInPacket"],
              quantity: a.cellSelection[0].rowData["InQuantity"],
              selflife: a.cellSelection[0].rowData["SelfLife"],
              mgfdate: a.cellSelection[0].rowData["MFGDate"],
              expdate: a.cellSelection[0].rowData["ExpDate"],
              lot_no: a.cellSelection[0].rowData["LotNo"],
              country: a.cellSelection[0].rowData["Country"],
              service_id: a.cellSelection[0].rowData["StorageAreaTypeID"],
              labourcontractor_id: a.cellSelection[0].rowData["LabourContractorID"]
            });
            this.DID = a.cellSelection[0].rowData["InwardDID"];
            this.servicesid = a.cellSelection[0].rowData["ServiceID"];
            this.challanid = a.cellSelection[0].rowData["ChallanID"];
            this.challandid = a.cellSelection[0].rowData["ChallanDID"];
            this.firstlotno = a.cellSelection[0].rowData["FirstLotNo"];
            this.challanquantity = a.cellSelection[0].rowData["ChallanQuantity"];
            this.outquantity = a.cellSelection[0].rowData["OutQuantity"];
            this.inprocessquantity = a.cellSelection[0].rowData["InprocessQuantity"];
            this.transferdid = a.cellSelection[0].rowData["TransferDID"];
            this.isnew = a.cellSelection[0].rowData["IsNew"]; //Get services for edit

            this.inwardservicelist = [];
            this.inwardservicelist = this.InwardchargesList.filter(function (x) {
              return x.InwardDID == a.cellSelection[0].rowData["InwardDID"];
            });
            this.inwardservicelist.forEach(function (element) {
              element["Add"] = true;
            });
            this.api.get('/service/InwardService?productID=' + a.cellSelection[0].rowData["ProductID"] + "&customerID=" + this.form.value.customer_id).subscribe(function (data) {
              _this29.inwardserviTest = data;

              _this29.SetServiceTo_inwardservicelist();
            }, function (error) {
              console.error(error);
            });
            this.GetStorageAreaList();
            var indexStorageArea = this.InwardshowStorageArea.filter(function (x) {
              return x.InwardDID == _this29.DID;
            });
            var resultStorageArea = this.storageAreaList;
            resultStorageArea.forEach(function (element) {
              indexStorageArea.forEach(function (test) {
                if (element.StorageAreaID === test.StorageAreaID) {
                  element.AllocatedQty = test.StorageQuantity;
                }
              });
              return element;
            });
            this.storageAreaList = [];
            this.storageAreaList = resultStorageArea;
            var Qtydata = this.storageAreaList.map(function (v1) {
              return v1.AllocatedQty;
            }).reduce(function (acc, v1) {
              return v1 + acc;
            });
            this.allocatedQty = Qtydata;
            this.form.controls['allocatedQty'].setValue(this.allocatedQty); //console.log(this.storageAreaList);
          }
        }, {
          key: "SetServiceTo_inwardservicelist",
          value: function SetServiceTo_inwardservicelist() {
            var _this30 = this;

            if (this.inwardserviTest.length > 0) {
              var result = this.inwardservicelist.concat(this.inwardserviTest.filter(function (i2) {
                return !_this30.inwardservicelist.find(function (i1) {
                  return i1.ServiceID == i2.ServiceID;
                });
              }));
              this.inwardservicelist = result;
            }
          }
        }, {
          key: "OnAddClick",
          value: function OnAddClick() {
            var _this31 = this;

            var _a, _b, _c, _d, _e, _f;

            if (this.storageAreaList.length > 0) {
              this.InwardValidateStorage = this.storageAreaList.filter(function (x) {
                return x.AllocatedQty > 0;
              });

              if (this.InwardValidateStorage.length > 0) {
                this.allocatedQty = this.InwardValidateStorage.map(function (v1) {
                  return v1.AllocatedQty;
                }).reduce(function (acc, v1) {
                  return v1 + acc;
                });
              } else {
                this.allocatedQty = 0;
              }
            }

            if (this.serviceTypeList.length == 0) {
              this.GetServicedetail();
            }

            if (this.TransportList.length == 0) {
              this.InwardTransportID = 1;
              this.TransportList.push({
                "InwardTransportID": this.InwardTransportID,
                "TransporterName": this.form.value.transportername,
                "TruckNo": this.form.value.truckno,
                "ContainerNo": this.form.value.container_no
              });
              this.TransportList.slice(); //console.log(this.TransportList);
            }

            if (this.form.value.truckno == null || this.form.value.truckno == "") {
              alert("Please .... Enter Truck number");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("truckno")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else if (this.form.value.product_id == null) {
              alert("Please .... select Product");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("product_id")) === null || _b === void 0 ? void 0 : _b.focus();
              return;
            } else if (this.form.value.quantity == null) {
              alert("Please... Enter Quantity ..!!!");
              (_c = document === null || document === void 0 ? void 0 : document.getElementById("quantity")) === null || _c === void 0 ? void 0 : _c.focus();
              return;
            } else if (this.form.value.service_id == null) {
              alert("Please... Select Service Type ..!!!");
              (_d = document === null || document === void 0 ? void 0 : document.getElementById("service_id")) === null || _d === void 0 ? void 0 : _d.focus();
              return;
            } else if (this.form.value.labourcontractor_id == null) {
              alert("Please... Select labour contractor ..!!!");
              (_e = document === null || document === void 0 ? void 0 : document.getElementById("labourcontractor_id")) === null || _e === void 0 ? void 0 : _e.focus();
              return;
            } else if (this.form.value.quantity != this.allocatedQty) {
              alert("Please... Add storage area quntity ..!!!");
              (_f = document === null || document === void 0 ? void 0 : document.getElementById("BtnStorageArea")) === null || _f === void 0 ? void 0 : _f.focus();
              return;
            } else if (this.Flag == true) {
              if (this.ChargesList.length == 0 || this.InwardchargesList.length == 0) {
                this.ChargesList = [];
                this.inwardservicelist.forEach(function (i) {
                  if (i.Add == true) {
                    _this31.ChargesList.push({
                      "InwardDID": _this31.DID,
                      "ServiceID": i.ServiceID,
                      "ServiceName": i.ServiceName,
                      "C_Rate": i.C_Rate,
                      "L_Rate": i.L_Rate
                    });
                  }
                });
                this.ChargesList.slice();
                var Qtydata = this.storageAreaList.map(function (v1) {
                  return v1.AllocatedQty;
                }).reduce(function (acc, v1) {
                  return v1 + acc;
                });
                this.allocatedQty = Qtydata;
              } else if (this.ChargesList.length == 0) {
                var indexcharges = this.InwardchargesList.filter(function (x) {
                  return x.InwardDID == _this31.DID;
                });
                this.ChargesList = indexcharges;
                var Qtydata = this.storageAreaList.map(function (v1) {
                  return v1.AllocatedQty;
                }).reduce(function (acc, v1) {
                  return v1 + acc;
                });
                this.allocatedQty = Qtydata;
              }

              var indexInwardDetail = this.InwardDetailList.filter(function (x) {
                return x.InwardDID != _this31.DID;
              });
              this.InwardDetailList = indexInwardDetail;
              var indexInwardcharges = this.InwardchargesList.filter(function (x) {
                return x.InwardDID != _this31.DID;
              });
              this.InwardchargesList = indexInwardcharges;
              var indexInwardTransper = this.InwardTransportList.filter(function (x) {
                return x.InwardDID != _this31.DID;
              });
              this.InwardTransportList = indexInwardTransper;
              var indexInwardStorageArea = this.InwardshowStorageArea.filter(function (x) {
                return x.InwardDID != _this31.DID;
              });
              this.InwardshowStorageArea = indexInwardStorageArea; //console.log(this.InwardDetailList);  
            } else if (this.Flag == false) {
              this.DID = this.DID + 1;
              this.allocatedQty = 0;
            }

            if (this.form.value.selflife == null || this.form.value.selflife == '') {
              this.form.controls['selflife'].setValue('0');
            }

            if (this.form.value.remarks == null) {
              this.form.value.remarks = ' ';
            }

            if (this.form.value.brand_id == null) {
              this.form.value.brand_id = ' ';
            }

            var Brand = this.brandList.filter(function (x) {
              return x.BrandID == _this31.form.value.brand_id;
            });
            var product = this.productList.filter(function (x) {
              return x.ProductID == _this31.form.value.product_id;
            });
            var StorageAreaTypes = this.serviceTypeList.filter(function (x) {
              return x.StorageAreaTypeID == _this31.form.value.service_id;
            });
            var LabourContractors = this.labourContractorList.filter(function (x) {
              return x.LabourContractorID == _this31.form.value.labourcontractor_id;
            });

            if (Brand.length == 0) {
              Brand.push({
                BrandID: 0,
                BrandName: ''
              });
            }

            if (StorageAreaTypes.length == 0) {
              StorageAreaTypes.push({
                BrandID: 0,
                BrandName: ''
              });
            }

            this.newDynamicInwardDetails = [];
            this.DetailList = [];
            this.newDynamicInwardtransfer = []; //this.TransportList=[];

            this.newDynamicInwardDetails = {
              InwardDID: this.DID,
              ChallanID: this.challanid,
              ChallanDID: this.challandid,
              ProductID: this.form.value.product_id,
              ProductName: product[0].ProductName,
              LotNo: this.form.value.lot_no,
              FirstLotNo: this.firstlotno,
              BrandID: this.form.value.brand_id,
              BrandName: Brand[0].BrandName,
              ItemsInPacket: this.form.value.packetcount,
              InQuantity: this.form.value.quantity,
              ChallanQuantity: this.challanquantity,
              OutQuantity: this.outquantity,
              InprocessQuantity: this.inprocessquantity,
              BalanceQuantity: this.form.value.quantity,
              MFGDate: this.todayDate,
              ExpDate: this.todayDate,
              Remarks: this.form.value.remarks.Remarks,
              TransferDID: this.transferdid,
              LabourContractorID: this.form.value.labourcontractor_id,
              LabourContracterName: LabourContractors[0].ContractorName,
              StorageAreaTypeID: this.servicesid,
              StorageAreaType: StorageAreaTypes[0].ServiceName,
              SelfLife: this.form.value.selflife,
              IsNew: this.isnew,
              Country: this.form.value.country,
              ServiceID: this.form.value.service_id //.StorageAreaTypeID     

            };
            this.DetailList = this.InwardDetailList;
            this.DetailList.push(this.newDynamicInwardDetails);
            this.InwardDetailList = this.DetailList.slice();
            console.log("this.InwardDetailList", this.InwardDetailList); ////--------------Inward Transfer
            // this.newDynamicInwardtransfer={
            // InwardDID:this.DID,
            // LotNo:this.form.value.lot_no,
            // TransporterName:this.form.value.transportername,
            // TruckNo:this.form.value.truckno,
            // ContainerNo:this.form.value.container_no,
            // Qty:this.form.value.quantity
            // };
            // this.TransportList=this.InwardTransportList;
            // this.TransportList.push(this.newDynamicInwardtransfer);
            // this.InwardTransportList=this.TransportList.slice();
            //-------------------InwardChareges

            if (this.ChargesList.length == 0 || this.InwardchargesList.length == 0) {
              this.ChargesList = [];
              this.inwardservicelist.forEach(function (i) {
                if (i.Add == true) {
                  _this31.InwardchargesList.push({
                    "InwardDID": _this31.DID,
                    "ServiceID": i.ServiceID,
                    "ServiceName": i.ServiceName,
                    "C_Rate": i.C_Rate,
                    "L_Rate": i.L_Rate
                  });
                }
              });
              this.InwardchargesList.slice();
            } else {
              this.ChargesList.forEach(function (i) {
                _this31.InwardchargesList.push({
                  "InwardDID": _this31.DID,
                  "ServiceID": i.ServiceID,
                  "ServiceName": i.ServiceName,
                  "C_Rate": i.C_Rate,
                  "L_Rate": i.L_Rate
                });
              });
              this.InwardchargesList.slice();
            } //-------------------Inward Transport


            this.TransportList.forEach(function (i) {
              _this31.InwardTransportList.push({
                "InwardDID": _this31.DID,
                "LotNo": _this31.form.value.lot_no,
                "TransporterName": i.TransporterName == null ? 'A' : i.TransporterName,
                "TruckNo": i.TruckNo == null ? 'B' : i.TruckNo,
                "ContainerNo": i.ContainerNo == null ? 'C' : i.ContainerNo,
                "Qty": _this31.form.value.quantity
              });
            });
            this.InwardchargesList.slice(); //---------------------------------InwardStorageArea

            this.storageAreaList.forEach(function (i) {
              if (i.AllocatedQty > 0) {
                _this31.InwardshowStorageArea.push({
                  "InwardDID": _this31.DID,
                  "StorageAreaID": i.StorageAreaID,
                  "StorageQuantity": i.AllocatedQty,
                  "LotNo": _this31.form.value.lot_no,
                  "IsCustomerAreaSelected": false
                });
              }
            });
            this.InwardshowStorageArea.slice(); // console.log(this.InwardshowStorageArea);
            //--------------------detail

            console.log(this.InwardDetailList);
            console.log(this.InwardchargesList);
            console.log(this.InwardTransportList);
            console.log(this.InwardshowStorageArea); //Reset

            this.form.controls['product_id'].reset();
            this.form.controls['brand_id'].reset();
            this.form.controls['packetcount'].reset();
            this.form.controls['service_id'].reset();
            this.form.controls['mgfdate'].reset();
            this.form.controls['expdate'].reset(); //this.form.controls['labourcontractor_id'].reset();

            this.form.controls['remarks'].reset(); //this.form.value.remarks=null;

            this.form.controls['selflife'].setValue('0');
            this.form.controls['quantity'].reset();
            this.form.controls['country'].setValue('');
            this.CurrentLotNo = Number(this.CurrentLotNo) + 1;
            this.ChargesList = [];
            this.inwardservicelist = [];
            this.storageAreaList = [];
            this.Flag = false;
            this.GetStorageAreaList(); // this.api.get('/StorageAreaMaster?WarehouseID='+this.currentUser.warehouseId).subscribe(
            //   data=>{this.storageAreaList=data;this.allocatedQty=0;},
            //   error=>{ console.error(error);}
            // );
            //}
          }
        }, {
          key: "GetStorageAreaList",
          value: function GetStorageAreaList() {
            var _this32 = this;

            this.api.get('/StorageAreaMaster?WarehouseID=' + this.currentUser.warehouseId).subscribe(function (data) {
              _this32.storageAreaList = data;
              _this32.allocatedQty = 0;
            }, function (error) {
              console.error(error);
            });
          } // OnProductSelect(args:any) {
          //   this.ChargesList=args;
          //   //console.log(this.ChargesList);
          // }

        }, {
          key: "openStorageArea",
          value: function openStorageArea(StorageAreacontent) {
            var _this33 = this;

            var _a; //console.log(this.form.value.quantity);


            this.allocatedQty = 0;

            if (this.form.value.quantity == null || this.form.value.quantity == 0) {
              alert("Please .... Enter Quantity");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("quantity")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              if (this.Flag == true) {
                //this.GetStorageAreaList();
                var indexStorageArea = this.InwardshowStorageArea.filter(function (x) {
                  return x.InwardDID == _this33.DID;
                });
                var resultStorageArea = this.storageAreaList;
                resultStorageArea.forEach(function (element) {
                  indexStorageArea.forEach(function (test) {
                    if (element.StorageAreaID === test.StorageAreaID) {
                      element.AllocatedQty = test.StorageQuantity;
                    }
                  });
                  return element;
                });
                this.storageAreaList = [];
                this.storageAreaList = resultStorageArea;
                var Qtydata = this.storageAreaList.map(function (v1) {
                  return v1.AllocatedQty;
                }).reduce(function (acc, v1) {
                  return v1 + acc;
                });
                this.allocatedQty = Qtydata;
                this.form.controls['allocatedQty'].setValue(this.allocatedQty);
              } else {
                if (this.storageAreaList.length > 0) {
                  this.InwardValidateStorage = this.storageAreaList.filter(function (x) {
                    return x.AllocatedQty > 0;
                  });

                  if (this.InwardValidateStorage.length > 0) {
                    this.allocatedQty = this.InwardValidateStorage.map(function (v1) {
                      return v1.AllocatedQty;
                    }).reduce(function (acc, v1) {
                      return v1 + acc;
                    });
                    this.form.controls['allocatedQty'].setValue(this.allocatedQty);
                  } else {
                    this.allocatedQty = 0;
                    this.form.controls['allocatedQty'].setValue(this.allocatedQty);
                  }
                }
              }

              this.modalService.open(StorageAreacontent, this.config);
            }
          }
        }, {
          key: "oncloseStoragearea",
          value: function oncloseStoragearea(StorageAreacontent) {
            var validatedata = this.storageAreaList.map(function (v1) {
              return v1.AllocatedQty;
            }).reduce(function (acc, v1) {
              return v1 + acc;
            });

            if (this.form.value.quantity == validatedata) {
              this.onStorageGridRefresh();
              this.modalService.dismissAll(StorageAreacontent);
              this.allocatedQty = 0;
            } else {
              alert("Please, Enter correct Quantity ...");
              this.onStorageGridRefresh(); //this.modalService.open(StorageAreacontent)

              this.modalService.dismissAll(StorageAreacontent);
              this.allocatedQty = 0;
            }

            console.log(this.storageAreaList);
          }
        }, {
          key: "onSaveStorageArea",
          value: function onSaveStorageArea(StorageAreacontent) {
            var validatedata = this.storageAreaList.map(function (v1) {
              return v1.AllocatedQty;
            }).reduce(function (acc, v1) {
              return v1 + acc;
            }); //this.allocatedQty=validatedata; 

            if (this.form.value.quantity == validatedata) {
              this.onStorageGridRefresh();
              this.modalService.dismissAll(StorageAreacontent);
            } else {
              alert("Please, Enter correct Quantity ...");
              this.onStorageGridRefresh();
              this.modalService.open(StorageAreacontent);
              this.allocatedQty = 0;
            }

            console.log(this.storageAreaList);
          }
        }, {
          key: "onCellKeyPress",
          value: function onCellKeyPress(e) {
            this.allocatedQty = 0;
            this.StorageId = e.data.StorageAreaID;
            var data = this.storageAreaList.map(function (v1) {
              return v1.AllocatedQty;
            }).reduce(function (acc, v1) {
              return v1 + acc;
            });
            this.allocatedQty = data;

            if (this.form.value.quantity >= this.allocatedQty) {
              this.form.controls['allocatedQty'].setValue(this.allocatedQty);
              this.storageAreaList.slice();
            } else {
              this.storageAreaList.forEach(function (i) {
                if (i.StorageAreaID == e.data.StorageAreaID) {
                  i.AllocatedQty = 0;
                }
              });
              alert("Please .... enter proper quantity");
            }

            this.onStorageGridRefresh();
          }
        }, {
          key: "onStorageGridRefresh",
          value: function onStorageGridRefresh() {
            this.allocatedQty = 0;
            var data = this.storageAreaList.map(function (v1) {
              return v1.AllocatedQty;
            }).reduce(function (acc, v1) {
              return v1 + acc;
            });
            this.allocatedQty = data;
            this.form.controls['allocatedQty'].setValue(this.allocatedQty);
            var newRowData = this.storageAreaList.filter(function (row) {
              return row;
            });
            this.storageAreaList = newRowData;
          } // onCellValueChangedStorageArea(content:any){
          // let updatedData=this.storageAreaList;
          // var data = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
          // this.allocatedQty=data;  
          // //console.log(updatedData);
          // if(this.form.value.quantity>=this.allocatedQty){
          //   this.form.controls['allocatedQty'].setValue(this.allocatedQty);
          // }
          // else
          // {
          //   this.storageAreaList=[];
          //   console.log(this.storageAreaList);  
          //   updatedData.forEach(i => {
          //     if(i.StorageAreaID==this.StorageId)
          //     {
          //       i.AllocatedQty=0;
          //     }});
          //     console.log(updatedData);
          //     this.storageAreaList.slice();
          //     this.storageAreaList=updatedData;
          // }  
          // console.log("refesh");
          // console.log(this.storageAreaList);  
          //}

        }, {
          key: "Ondeleteclick",
          value: function Ondeleteclick(e) {
            console.log(e);
          }
        }, {
          key: "tabInwardchange",
          value: function tabInwardchange(event) {
            //console.log(this.Inwardtab);
            //console.log("tab=>"+this.tab)
            this.tab = event;
            this.GetInwardList();
          }
        }, {
          key: "OnSaveinward",
          value: function OnSaveinward() {
            var _this34 = this;

            var _a, _b, _c, _d, _e; //console.log(this.form.value.dock_name);


            if (this.form.value.customer_id == null || this.form.value.customer_id == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else if (this.form.value.dock_name == null || this.form.value.dock_name == "") {
              alert("Please .... select Dock name ....");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("dock_name")) === null || _b === void 0 ? void 0 : _b.focus();
              return;
            } else if (this.form.value.inward_date == null) {
              alert("Please... Enter inward date ..!!!");
              (_c = document === null || document === void 0 ? void 0 : document.getElementById("inward_date")) === null || _c === void 0 ? void 0 : _c.focus();
              return;
            } else if (this.form.value.unloading_by == null) {
              alert("Please... Select unloading by ..!!!");
              (_d = document === null || document === void 0 ? void 0 : document.getElementById("unloading_by")) === null || _d === void 0 ? void 0 : _d.focus();
              return;
            } else if (this.form.value.truckno == null) {
              alert("Please... Select truck no ..!!!");
              (_e = document === null || document === void 0 ? void 0 : document.getElementById("truckno")) === null || _e === void 0 ? void 0 : _e.focus();
              return;
            } else if (this.InwardDetailList.length == 0) {
              alert("Please... Add Product Details ..!!!"); //document?.getElementById("truckno")?.focus();

              return;
            } else if (this.InwardshowStorageArea.length == 0) {
              alert("Please... Add Storage Details ..!!!"); //document?.getElementById("truckno")?.focus();

              return;
            } else if (this.InwardTransportList.length == 0) {
              alert("Please... Add transport Details..!!!"); //document?.getElementById("truckno")?.focus();

              return;
            } else {
              this.click = true;
              this.newDynamicSaveInward = {
                InwardID: this.InwardID,
                CustomerID: this.form.value.customer_id,
                CompanyID: this.currentUser.companyId,
                WarehouseID: this.currentUser.warehouseId,
                InwardDate: this.form.value.inward_date,
                Remarks: this.form.value.custremarks == null ? "" : this.form.value.custremarks,
                FinancialYearID: this.currentUser.FinantialYearId,
                UserID: this.currentUser.userId,
                ReceiptNo: this.ReceiptNo,
                dockID: this.form.value.dock_name,
                UnLoadingBy: this.form.value.unloading_by,
                StorageAreaMasterID: 1,
                InwardDetailModel: this.InwardDetailList,
                InwardChargesModel: this.InwardchargesList,
                InwardLocationModel: this.InwardshowStorageArea,
                InwardTransperModel: this.InwardTransportList
              };
              this.api.post('/Inward/SaveInward', this.newDynamicSaveInward).subscribe(function (data) {
                data;
                alert(data.Table[0]["Column1"]);

                _this34.OnResetInward();
              }, function (error) {
                console.error(error);
              });
              this.GetInwardList();
            }

            console.log(this.newDynamicSaveInward);
          }
        }, {
          key: "GetInwardList",
          value: function GetInwardList() {
            var _this35 = this;

            this.GetInwardListJson = {
              CompanyId: this.currentUser.companyId,
              WarehouseId: this.currentUser.warehouseId,
              FinantialYearId: this.currentUser.FinantialYearId
            };
            this.api.post('/InwardList', this.GetInwardListJson).subscribe(function (data) {
              _this35.InwardList = data;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onKeyfilter",
          value: function onKeyfilter(e) {
            var _this36 = this;

            this.GetInwardListJson = {
              CompanyId: this.currentUser.companyId,
              WarehouseId: this.currentUser.warehouseId,
              FinantialYearId: this.currentUser.FinantialYearId
            };
            this.api.post('/InwardList', this.GetInwardListJson).subscribe(function (data) {
              _this36.InwardList = data;
              var searchName = e;
              var lists = _this36.InwardList;
              var res = lists.filter(function (obj) {
                return obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.BillingStartDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.InwardDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.PersonName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.ReceiptNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.StatusName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0;
              });
              _this36.InwardList = res;
              console.log(_this36.InwardList);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "SetDataTo_Inwardlist",
          value: function SetDataTo_Inwardlist() {
            var _this37 = this;

            this.api.get('/InwardList?companyId=' + this.currentUser.companyId + '&warehouseId=' + this.currentUser.warehouseId + '&finantialYearId=' + this.currentUser.FinantialYearId).subscribe(function (data) {
              _this37.InwardList = [];
              _this37.InwardList = data;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onDeleteTestListRow",
          value: function onDeleteTestListRow(d) {
            console.log(d);

            if (d.Status == 51) {
              var DeletedData = {
                InwardID: d.InwardID,
                CustomerID: Number(d.CustomerID),
                Remarks: 0,
                CreatedBy: Number(this.currentUser.userId),
                serviceID: 0,
                ProductID: 0,
                CompanyId: Number(this.currentUser.companyId),
                WarehouseId: Number(this.currentUser.warehouseId),
                FinantialYearId: Number(this.currentUser.FinantialYearId),
                challan: 0,
                StorageAreaMasterID: 1,
                FinancialYear: ""
              };
              console.log(DeletedData); // // this.api.post('/Inward/DeleteInward?InwardID='+d.InwardID+'&CustomerID='+d.CustomerID+'&Remarks=test_by_angular&CreatedBy='+this.currentUser.userId).subscribe(
              //   this.api.post('/Inward/DeleteInward',DeletedData).subscribe(  
              //     data=>{data;
              //     alert(data.Table[0]["message"]); 
              //     this.SetDataTo_Inwardlist();},
              //     error=>{ console.error(error);}
              //    ); 
            } else if (d.Status == 52 || d.Status == 0) {
              console.log("Sorry,Inward is under process. You can't Delete ....!!!");
              alert("Sorry,Inward is under process. You can't Delete....!!!");
            } else if (d.Status == 53) {
              console.log("Sorry,Outward already generated.You can't Delete....!!!");
              alert("Sorry,Outward already generated.You can't Delete....!!!");
            } else if (d.Status == 54) {
              console.log("Sorry,Inward is already cancelled ....!!!");
              alert("Sorry,Inward is already cancelled ....!!!");
            }
          }
        }, {
          key: "OnResetInward",
          value: function OnResetInward() {
            this.click = false;
            this.form.reset();
            this.BindDropdown();
            this.InwardTransportID = 0;
            var inwardeditedDate = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
            this.todayDate = inwardeditedDate;
            this.form.controls['inward_date'].setValue(this.todayDate);
            this.InwardDetailList = [];
            this.customercontactList = [];
            this.inwardservicelist = [];
            this.storageAreaList = [];
            this.TransportList = [];
            this.GetStorageAreaList();
            this.DID = 0;
            this.InwardID = 0;
            this.ReceiptNo = '0';
          }
        }, {
          key: "onEditTestListRow",
          value: function onEditTestListRow(e) {
            var _this38 = this;

            var inwardeditedDate = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US').transform(e.InwardDate, 'yyyy-MM-dd hh:mm:ss');

            if (e.Status == 51) {
              this.api.post('/Inward/GetCustomerProducts?customerid=' + e.CustomerID + '&warehouseid=' + this.currentUser.warehouseId).subscribe(function (data) {
                _this38.productList = data;
              }, function (error) {
                console.error(error);
              });
              this.GetStorageAreaList();
              this.InData = {
                InwardID: e.InwardID,
                CustomerID: 0,
                Remarks: 0,
                CreatedBy: 0,
                serviceID: 0,
                ProductID: 0,
                CompanyId: 0,
                WarehouseId: 0,
                FinantialYearId: 0,
                challan: 0,
                StorageAreaMasterID: 0,
                FinancialYear: ""
              };
              this.api.post('/Inward/GetInwardDetailsByID', this.InData).subscribe(function (data) {
                _this38.InwardDetailList = data.Table;
                _this38.InwardshowStorageArea = data.Table1;
                _this38.InwardTransportList = data.Table2;
                _this38.InwardchargesList = data.Table3;
                _this38.InwardID = e.InwardID;
                _this38.TransportList;
                _this38.InwardTransportID = 0;
                _this38.ReceiptNo = e.ReceiptNo;

                var distinctTransport = _this38.InwardTransportList.filter(function (thing, i, arr) {
                  return arr.findIndex(function (t) {
                    return t.TruckNo === thing.TruckNo;
                  }) === i;
                });

                distinctTransport.forEach(function (i) {
                  _this38.InwardTransportID = _this38.InwardTransportID + 1;

                  _this38.TransportList.push({
                    "InwardTransportID": _this38.InwardTransportID,
                    "TransporterName": i.TransporterName == null ? 'A' : i.TransporterName,
                    "TruckNo": i.TruckNo == null ? 'B' : i.TruckNo,
                    "ContainerNo": i.ContainerNo == null ? 'C' : i.ContainerNo
                  });
                });

                _this38.TransportList.slice();

                var inwarditem = {
                  customer_id: e.CustomerID == null ? '' : e.CustomerID,
                  dock_name: e.DocID,
                  challan_no: 0,
                  inward_date: inwardeditedDate,
                  unloading_by: e.UnLoadingBy,
                  custremarks: e.Remarks,
                  transportername: _this38.InwardTransportList[0]["TransporterName"] == null ? '' : _this38.InwardTransportList[0]["TransporterName"],
                  truckno: _this38.InwardTransportList[0]["TruckNo"] == null ? '' : _this38.InwardTransportList[0]["TruckNo"],
                  container_no: _this38.InwardTransportList[0]["TruckNo"] == null ? '' : _this38.InwardTransportList[0]["TruckNo"],
                  selflife: "0",
                  product_id: 0,
                  brand_id: 0,
                  packetcount: 0,
                  quantity: 0,
                  service_id: 0,
                  mgfdate: null,
                  expdate: null,
                  labourcontractor_id: 0,
                  lot_no: _this38.CurrentLotNo,
                  remarks: "",
                  country: "",
                  allocatedQty: 0
                };

                _this38.form.setValue(inwarditem);
              }, function (error) {
                console.log(error);
              });
              this.tab = 0;
              console.log(this.InwardTransportList);
              console.log(this.TransportList);
            } else if (e.Status == 52 || e.Status == 0) {
              console.log("Sorry,Inward is under process. You can't edit ....!!!");
              alert("Sorry,Inward is under process. You can't edit ....!!!");
            } else if (e.Status == 53) {
              console.log("Sorry,Outward already generated.You can't edit ....!!!");
              alert("Sorry,Outward already generated.You can't edit ....!!!");
            } else if (e.Status == 54) {
              console.log("Sorry,Inward is already cancelled ....!!!");
              alert("Sorry,Inward is already cancelled ....!!!");
            }
          } // onEditInward(e:any) {
          //   console.log(e);
          //   this.tab=0;
          // }

        }, {
          key: "contentReady",
          value: function contentReady(e) {
            if (!this.collapsed) {
              this.collapsed = true;
              e.component.expandRow(['EnviroCare']);
            }
          }
        }, {
          key: "checkBoxCellEditRenderer",
          value: // onSubmit(formData:any){
          //   console.log("onSubmit");
          // }
          function checkBoxCellEditRenderer(params) {
            var _this39 = this;

            var input = document.createElement('input');
            input.type = 'checkbox';
            input.value = 'false';
            input.checked = params.value;
            input.addEventListener('click', function (e) {
              var val = params.value == true ? false : true;
              params.setValue(val); //console.log(val);

              _this39.ChargesList = [];

              _this39.inwardservicelist.forEach(function (i) {
                if (i.Add == true) {
                  _this39.ChargesList.push({
                    "InwardDID": _this39.DID,
                    "ServiceID": i.ServiceID,
                    "ServiceName": i.ServiceName,
                    "C_Rate": i.C_Rate,
                    "L_Rate": i.L_Rate
                  });
                }
              });

              _this39.ChargesList.slice();

              console.log(_this39.ChargesList);
            }); //console.log(this.rowData);

            return input;
          }
        }]);

        return _InwardComponent;
      }();

      _InwardComponent.ɵfac = function InwardComponent_Factory(t) {
        return new (t || _InwardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__.MtxDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
      };

      _InwardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InwardComponent,
        selectors: [["app-inward"]],
        decls: 220,
        vars: 64,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "1ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Inward"], [3, "formGroup"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-6", "col-md-6"], [1, "form-group"], ["formControlName", "customer_id", "id", "customer_id", 1, "form-control", "form-control-sm", 3, "change"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "customer_id_error"], [1, "col-sm-6", "col-md-3"], ["type", "text", "formControlName", "challan_no", "id", "challan_no", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "row"], [1, "form-group", "pl-2"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "click"], ["formControlName", "dock_name", "id", "dock_name", 1, "form-control", "form-control-sm"], ["type", "datetime-local", "formControlName", "inward_date", "id", "inward_date", "placeholder", "yyyy-MM-dd", "name", "inward_date", 1, "form-control", "form-control-rounded", 3, "ngModel"], ["formControlName", "unloading_by", "id", "unloading_by", 1, "form-control", "form-control-sm"], ["formControlName", "custremarks", "id", "custremarks", 1, "form-control", "form-control-sm"], [1, "col-12"], [1, "font-weight-bold"], [1, "col"], ["type", "text", "formControlName", "transportername", "id", "transportername", "placeholder", "", "autocomplete", "on", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "truckno", "id", "truckno", "placeholder", "", "autocomplete", "on", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "container_no", "id", "container_no", "placeholder", "", "autocomplete", "on", 1, "form-control", "form-control-sm"], [1, "col-9"], [1, "col-sm-6", "col-md-4"], ["formControlName", "product_id", "id", "product_id", 1, "form-control", "form-control-sm", 3, "change"], ["formControlName", "brand_id", "id", "brand_id", 1, "form-control", "form-control-sm", 3, "change"], ["formControlName", "packetcount", "id", "packetcount", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "quantity", "id", "quantity", "autocomplete", "off", "placeholder", "", "required", "", 1, "form-control", "form-control-sm"], ["formControlName", "service_id", "id", "service_id", 1, "form-control", "form-control-sm", 3, "change"], ["disabled", "", 3, "ngValue"], ["type", "text", "formControlName", "selflife", "id", "selflife", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "date", "formControlName", "mgfdate", "id", "mgfdate", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "date", "formControlName", "expdate", "id", "expdate", "placeholder", "", 1, "form-control", "form-control-sm"], ["formControlName", "labourcontractor_id", "id", "labourcontractor_id", 1, "form-control", "form-control-sm", 3, "change"], ["type", "text", "formControlName", "lot_no", "id", "lot_no", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["formControlName", "remarks", "id", "remarks", 1, "form-control", "form-control-sm"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "country", "id", "country", "placeholder", "", "autocomplete", "off", 1, "form-control", "form-control-sm"], [1, "col-3"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "id", "disabled", "click"], ["id", "BtnStorageArea", 1, "btn", "btn-primary", "btn-sm", 2, "width", "100px !important", "margin-top", "20px !important", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "100px !important", "margin-top", "20px !important"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "105px !important", "margin-top", "20px !important"], [1, "card"], [1, "ag-theme-alpine", 2, "height", "300px", 3, "rowData", "columnDefs"], ["StorageAreacontent", ""], ["CustomerContactcontent", ""], ["style", "width:620px;"], ["TranspoterDetailcontent", ""], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "dblclick"], ["gridlist", ""], [1, "col-md-6"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", 3, "disabled", "click"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", 3, "click"], ["label", "Inward List"], [1, "form-control-sm"], ["type", "text", "id", "filtertext", 1, "form-control-sm", 3, "keyup"], ["filtertext", ""], [2, "height", "800px"], [2, "height", "790px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSize"], [3, "value"], [3, "ngValue"], [1, "modal-header"], ["id", "modal-basic-title"], [1, "col-6"], ["formControlName", "quantity", "id", "quantity", "readonly", "", 2, "width", "50%"], ["formControlName", "allocatedQty", "id", "allocatedQty", "readonly", "", 2, "width", "50%"], [1, "modal-body"], [1, "ag-theme-alpine", 2, "height", "300px", 3, "rowData", "columnDefs", "cellValueChanged"], ["LocationGrid", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["rowSelection", "multiple", 1, "ag-theme-alpine", 2, "height", "300px", 3, "rowData", "columnDefs", "groupIncludeTotalFooter"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [1, "ag-theme-alpine", 2, "height", "300px", 3, "rowData", "columnDefs", "rowClicked"], [1, "modalfooter"], ["type", "button", 1, "btn", "btn-danger", 2, "float", "left", "width", "60px", 3, "click"], ["type", "button", 1, "btn", "btn-info", 2, "float", "right", "width", "100px", 3, "click"]],
        template: function InwardComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedIndexChange", function InwardComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tabInwardchange($event);
            })("selectedIndexChange", function InwardComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InwardComponent_Template_select_change_13_listener($event) {
              return ctx.GetCustomerID($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, InwardComponent_option_16_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Enter Challan");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_Template_button_click_26_listener() {
              return ctx.OnApplyClick(ctx.f.customer_id.value, ctx.f.challan_no.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Apply ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_Template_button_click_29_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

              var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](194);

              return ctx.onCustomerContact(_r12);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Dock Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, InwardComponent_option_38_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Inward Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Unloading By");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, InwardComponent_option_52_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, InwardComponent_option_60_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Transfer Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Transporter Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Truck No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Container No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_Template_button_click_85_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

              var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](196);

              return ctx.OnTransportAdd(_r14);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " Inward Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InwardComponent_Template_select_change_98_listener($event) {
              return ctx.OnProductSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, InwardComponent_option_101_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Brand Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InwardComponent_Template_select_change_106_listener($event) {
              return ctx.OnBrandSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, InwardComponent_option_109_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Count In Packet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, InwardComponent_option_117_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Service Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InwardComponent_Template_select_change_127_listener($event) {
              return ctx.OnServiceSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](130, InwardComponent_option_130_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Self Life");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Mfg Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Expiry Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Labour Contracter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "select", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InwardComponent_Template_select_change_150_listener($event) {
              return ctx.OnLabourSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, InwardComponent_option_153_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Lot No");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InwardComponent_Template_input_ngModelChange_158_listener($event) {
              return ctx.CurrentLotNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "select", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](166, InwardComponent_option_166_Template, 2, 2, "option", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_Template_button_click_174_listener() {
              return ctx.OnAddClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_Template_button_click_178_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](192);

              return ctx.openStorageArea(_r10);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, " Storage Area ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, " Label Print ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, " Receipt Print ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "ag-grid-angular", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](191, InwardComponent_ng_template_191_Template, 21, 2, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](193, InwardComponent_ng_template_193_Template, 8, 3, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](195, InwardComponent_ng_template_195_Template, 12, 2, "ng-template", 53, 54, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, " Inward Details List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "mtx-grid", 55, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function InwardComponent_Template_mtx_grid_dblclick_201_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

              var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](202);

              return ctx.onRowDblclicked(_r16, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](203, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_Template_button_click_206_listener() {
              return ctx.OnSaveinward();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InwardComponent_Template_button_click_209_listener() {
              return ctx.OnResetInward();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "mat-tab", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Filter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "input", 62, 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function InwardComponent_Template_input_keyup_215_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

              var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](216);

              return ctx.onKeyfilter(_r17.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](219, "mtx-grid", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedIndex", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customerList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](61, _c0, ctx.submitted && ctx.f.challan_no.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dockList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](44, 58, ctx.todayDate, "yyyy-MM-dd hh:mm:ss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.unloadingList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.remarkList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.brandList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.packateCountList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.serviceTypeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.labourContractorList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CurrentLotNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.remarkList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.OnAddClick)("disabled", ctx.OnAddProductClick);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx.inwardservicelist)("columnDefs", ctx.serviceColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.InwardDetailList)("columns", ctx.InwardDetailColumns)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Detail List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", false)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](63, _c1))("pageIndex", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.click);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.InwardList)("columns", ctx.columnstest)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Item List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", false)("showPaginator", false)("pageSize", 10000000);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__.AgGridAngular, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_15__.MtxGridComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
        styles: [".mtx-grid[_ngcontent-%COMP%] {\n  height: 280px;\n}\n\ninput.ng-invalid[_ngcontent-%COMP%]:focus {\n  outline-color: red;\n}\n\n.ng-deep[_ngcontent-%COMP%]   #gridContainer[_ngcontent-%COMP%] {\n  height: 440px;\n}\n\n.ng-deep[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 20px;\n  background-color: rgba(191, 191, 191, 0.15);\n}\n\n.ng-deep[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.ng-deep[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.ng-deep[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.ng-deep[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]    > .dx-selectbox[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.modalfooter[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlud2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSw2Q0FBQTtBQUNGIiwiZmlsZSI6Imlud2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdHgtZ3JpZCB7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxufVxyXG5pbnB1dC5uZy1pbnZhbGlkOmZvY3VzIHtcclxuICBvdXRsaW5lLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5uZy1kZWVwICNncmlkQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDQ0MHB4O1xyXG59XHJcblxyXG4ubmctZGVlcCAub3B0aW9ucyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4xNSk7XHJcbn1cclxuXHJcbi5uZy1kZWVwIC5jYXB0aW9uIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm5nLWRlZXAgLm9wdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm5nLWRlZXAgLm9wdGlvbiA+IHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm5nLWRlZXAgLm9wdGlvbiA+IC5keC1zZWxlY3Rib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLm1vZGFsZm9vdGVyIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcclxufSJdfQ== */"]
      });

      var _StorageArea = /*#__PURE__*/_createClass(function _StorageArea() {
        _classCallCheck(this, _StorageArea);

        this.StorageAreaID = 0;
        this.StorageArea = "";
        this.AllocatedQty = 0;
      });

      var _InwardStorageArea = /*#__PURE__*/_createClass(function _InwardStorageArea() {
        _classCallCheck(this, _InwardStorageArea);

        this.InwardDID = 0;
        this.StorageAreaID = 0;
        this.StorageQuantity = 0;
        this.LotNo = "";
        this.IsCustomerAreaSelected = false;
      });

      var _InwardShowStorageArea = /*#__PURE__*/_createClass(function _InwardShowStorageArea() {
        _classCallCheck(this, _InwardShowStorageArea);

        this.AddArea = false;
        this.Auto = false;
        this.InwardDID = 0;
        this.ProductID = 0;
        this.ProductName = "";
        this.LotNo = "";
        this.BrandName = "";
        this.ItemsInPacket = "";
        this.InQuantity = 0;
        this.StorageAreaTypeID = 0;
        this.StorageAreaType = "";
        this.Applied = false;
      });

      var _InwardCharege = /*#__PURE__*/_createClass(function _InwardCharege() {
        _classCallCheck(this, _InwardCharege);

        this.InwardDID = 0;
        this.ServiceID = 0;
        this.ServiceName = "";
        this.C_Rate = 0;
        this.L_Rate = 0;
      });

      var _InwardTransportData = /*#__PURE__*/_createClass(function _InwardTransportData() {
        _classCallCheck(this, _InwardTransportData);

        this.InwardTransportID = 0;
        this.TransporterName = "";
        this.TruckNo = "";
        this.ContainerNo = "";
      });

      var _InwardTransport = /*#__PURE__*/_createClass(function _InwardTransport() {
        _classCallCheck(this, _InwardTransport);

        this.InwardDID = 0;
        this.LotNo = "";
        this.TransporterName = "";
        this.TruckNo = "";
        this.ContainerNo = "";
        this.Qty = 0;
      });

      var _InwardDetails = /*#__PURE__*/_createClass(function _InwardDetails() {
        _classCallCheck(this, _InwardDetails);

        this.InwardDID = 0;
        this.ChallanID = 0;
        this.ChallanDID = 0;
        this.ProductID = 0;
        this.ProductName = "";
        this.LotNo = "";
        this.FirstLotNo = "";
        this.BrandID = 0;
        this.BrandName = "";
        this.ItemsInPacket = "";
        this.InQuantity = 0;
        this.ChallanQuantity = 0;
        this.OutQuantity = 0;
        this.InprocessQuantity = 0;
        this.BalanceQuantity = 0;
        this.MFGDate = new Date();
        this.ExpDate = new Date();
        this.Remarks = "";
        this.TransferDID = 0;
        this.LabourContractorID = 0;
        this.LabourContractorName = "";
        this.StorageAreaTypeID = 0;
        this.StorageAreaType = "";
        this.SelfLife = 0;
        this.IsNew = true;
        this.Country = "";
        this.ServiceID = 0;
      });

      var _SaveInward = /*#__PURE__*/_createClass(function _SaveInward() {
        _classCallCheck(this, _SaveInward);

        this.InwardID = 0;
        this.CustomerID = 0;
        this.CompanyID = 0;
        this.WarehouseID = 0;
        this.InwardDate = new Date();
        this.Remarks = "";
        this.FinancialYearID = 0;
        this.UserID = 0;
        this.ReceiptNo = 0;
        this.dockID = 0;
        this.UnLoadingBy = 0;
        this.StorageAreaMasterID = 0;
        this.InwardDetailModel = [];
        this.InwardChargesModel = [];
        this.InwardLocationModel = [];
        this.InwardTransperModel = [];
      });
      /***/

    },

    /***/
    32797:
    /*!*************************************************************!*\
      !*** ./src/app/routes/process/outward/outward.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OutwardComponent": function OutwardComponent() {
          return (
            /* binding */
            _OutwardComponent
          );
        },

        /* harmony export */
        "OutwardCharege": function OutwardCharege() {
          return (
            /* binding */
            _OutwardCharege
          );
        },

        /* harmony export */
        "OutwardDetail": function OutwardDetail() {
          return (
            /* binding */
            _OutwardDetail
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ag-grid-angular */
      82022);

      function OutwardComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", c_r10.CustomerID);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r10.CustomerName);
        }
      }

      function OutwardComponent_option_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", c_r11.CustomerPartyID);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r11.PartyName);
        }
      }

      function OutwardComponent_option_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var r_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", r_r12.Remarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r12.Remarks);
        }
      }

      function OutwardComponent_option_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", d_r13.DockID);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r13.DockName);
        }
      }

      function OutwardComponent_option_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", c_r14.UserID);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r14.UserName);
        }
      }

      function OutwardComponent_option_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", c_r15.LabourContractorID);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r15.ContractorName);
        }
      }

      function OutwardComponent_ng_template_131_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Party");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Party Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Shipping Address1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Shipping Address2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Pin Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutwardComponent_ng_template_131_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.onAddParty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutwardComponent_ng_template_131_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](132);

            return ctx_r20.onCloseAddParty(_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r9.formParty);
        }
      }

      var _c0 = function _c0() {
        return [10, 20, 50, 100, 500];
      };

      var _OutwardComponent = /*#__PURE__*/function () {
        function _OutwardComponent(api, fb, fbParty, modalService) {
          var _this40 = this;

          _classCallCheck(this, _OutwardComponent);

          this.api = api;
          this.fb = fb;
          this.fbParty = fbParty;
          this.modalService = modalService;
          this.outID = 0;
          this.DOID = 0;
          this.DisptID = 0;
          this.tab = 0;
          this.DID = 0;
          this.Out_Count = 0;
          this.OutwardDetailsData = {};
          this.ChargesListData = [];
          this.OutwardDetailList = [];
          this.OutwardList = {};
          this.config = {
            backdrop: false,
            ignoreBackdropClick: true
          };
          this.SaveCustomerParty = {};
          this.GetPendingDO = {};
          this.newArr = [];
          this.Saveclick = false; //----------------------------Grid Column

          this.PendingDOListColum = [{
            header: "DispatchID",
            field: "DispatchID",
            hide: true
          }, {
            header: "DeliveryOrderID",
            field: "DeliveryOrderID",
            hide: true
          }, {
            header: "DeliveryOrderNo",
            field: "DeliveryOrderNo"
          }, {
            header: "DispatchNo",
            field: "DispatchNo"
          }, {
            header: "CreatedDate",
            field: "CreatedDate",
            hide: true
          }, {
            header: "OrderGivenBy",
            field: "OrderGivenBy"
          }, {
            header: "DeliverTo",
            field: "DeliverTo"
          }, {
            header: "ShippingAddress",
            field: "ShippingAddress"
          }, {
            header: "Remarks",
            field: "Remarks",
            hide: false
          }, {
            header: "TruckNo",
            field: "TruckNo",
            hide: false
          }, {
            header: "ContainerNo",
            field: "ContainerNo"
          }];
          this.OutWardListColumn = [{
            header: "Action",
            field: 'Action',
            minWidth: 80,
            pinned: 'left',
            type: 'button',
            buttons: [{
              color: 'warn',
              type: 'icon',
              icon: 'delete',
              tooltip: 'delete',
              pop: true,
              popTitle: 'Do you want to delete Outward ....!!',
              popCloseText: 'No',
              popOkText: 'Yes',
              popDescription: '',
              popCloseColor: 'warn',
              popOkColor: 'primary',
              click: function click(record) {
                return _this40.onDeleteOutward(record);
              }
            }]
          }, {
            header: "OutWardID",
            field: "OutWardID",
            hide: true
          }, {
            header: "OutWardNo",
            field: "OutWardNo",
            hide: false,
            minWidth: 100
          }, {
            header: "WarehouseID",
            field: "WarehouseID",
            hide: true
          }, {
            header: "CustomerName",
            field: "CustomerName",
            minWidth: 150
          }, {
            header: "WareHouseName",
            field: "WareHouseName",
            hide: true
          }, {
            header: "OutWardDate",
            field: "OutWardDate",
            minWidth: 100,
            type: 'date',
            typeParameter: {
              format: 'dd-MM-yyyy'
            }
          }, {
            header: "DeliveryOrderNo",
            field: "DeliveryOrderNo",
            minWidth: 100
          }, {
            header: "DispatchNo",
            field: "DispatchNo",
            minWidth: 100
          }, {
            header: "DeliverTo",
            field: "DeliverTo",
            minWidth: 120,
            hide: false
          }, {
            header: "TruckNo",
            field: "TruckNo",
            hide: false,
            minWidth: 150
          }, {
            header: "ContainerNo",
            field: "ContainerNo",
            minWidth: 120
          }, {
            header: "TransporterName",
            field: "TransporterName",
            hide: false,
            minWidth: 80
          }, {
            header: "Remarks",
            field: "Remarks",
            minWidth: 100
          }, {
            header: "IsCancelled",
            field: "IsCancelled",
            hide: true
          }, {
            header: "DriverName",
            field: "DriverName",
            minWidth: 80
          }, {
            header: "DocID",
            field: "DocID",
            hide: true
          }, {
            header: "LoadingBy",
            field: "LoadingBy",
            hide: true,
            minWidth: 80
          }, {
            header: "StatusID",
            field: "StatusID",
            hide: true
          }, {
            header: "StatusName",
            field: "StatusName",
            minWidth: 80
          }];
          this.DeliveryOrderDetailColumns = [{
            field: 'Outward',
            hide: false,
            cellRenderer: function cellRenderer(params) {
              return _this40.DeliveryOrderDetailCellRenderer(params);
            },
            width: 10
          }, {
            field: 'ProductName',
            hide: false
          }, {
            field: 'LotNo',
            hide: false,
            resizable: true
          }, {
            field: 'BrandName'
          }, {
            field: 'CountInPacket',
            hide: true
          }, {
            field: 'StorageArea',
            hide: true
          }, {
            field: 'DispatchQuantity'
          }, {
            field: 'FirstLotNo',
            hide: false
          }, {
            field: 'DeliveryOrderDID',
            hide: false
          }, {
            field: 'DispatchDID'
          }, {
            field: 'ProductID',
            hide: false
          }];
          this.DeliveryOrderDetailChargeColumns = [{
            field: 'Add',
            width: 10,
            hide: false,
            cellRenderer: function cellRenderer(params) {
              return _this40.DeliveryOrderChargeCellEditRenderer(params);
            }
          }, {
            field: 'ServiceID',
            hide: true
          }, {
            field: 'ServiceName',
            hide: false,
            resizable: true
          }, {
            field: 'C_Rate',
            hide: true
          }, {
            field: 'L_Rate',
            hide: true
          }];
          this.currentUser = this.api.getCurrentUser();
          var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
          this.todayDate = dateSendingToServer;
          this.currentUser = this.api.getCurrentUser();
          this.form = this.fb.group({
            customer_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            Outward_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtTruck_No: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtContainer_No: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cbCustomer_Party: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cbRemarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtDriver_Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtDriver_MobileNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cbDock_Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cbLodingBy_Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cbLabourContractor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
          });
          this.formParty = this.fbParty.group({
            txtPartyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtShippingAddress1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtShippingAddress2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            txtPinCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
          });
        } //------Innitialize


        _createClass(_OutwardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.BindDropdown();
            this.BindCustomerParty();
            this.BindOutwardList();
            this.DeliveryOrderDetailList = [];
            this.DeliveryOrderDetailChargeList = [];
          }
        }, {
          key: "BindDropdown",
          value: function BindDropdown() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this41 = this;

              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.api.get('/Customer').subscribe(function (data) {
                        _this41.customerList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/Remarks').subscribe(function (data) {
                        _this41.remarkList = data.filter(function (p) {
                          return p.ProcessID == 3;
                        });
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/dock').subscribe(function (data) {
                        _this41.dockList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/UnloadingBy').subscribe(function (data) {
                        _this41.unloadingList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/LabourContracter').subscribe(function (data) {
                        _this41.labourContractorList = data;
                      }, function (error) {
                        console.error(error);
                      });

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //------------Bind Data to Customerpart Selection

        }, {
          key: "BindCustomerParty",
          value: function BindCustomerParty() {
            var _this42 = this;

            this.api.get('/CustomerParty').subscribe(function (data) {
              _this42.customePartyList = data; //console.log(data);
            }, function (error) {
              console.error(error);
            });
          } //---------------Bind Data to Outward List (2nd tab) 

        }, {
          key: "BindOutwardList",
          value: function BindOutwardList() {
            var _this43 = this;

            var OutwardListData = {
              outwardID: 0,
              warehouseID: 1,
              outWardDate: "",
              billStartDate: "",
              deliveryOrderID: 0,
              customerPartyID: 0,
              truckNo: "",
              containerNo: "",
              transporterName: "",
              remarks: "",
              createdBy: 0,
              customerID: 0,
              driverName: "",
              driverNo: "",
              docID: 0,
              loadingBy: 0,
              transferID: 0,
              dispatchID: 0,
              StatusID: 0
            };
            this.api.post('/Outward/GetOutwardList', OutwardListData).subscribe(function (data) {
              _this43.OutwardList = data; //  console.log(data);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "tabOutward",
          value: function tabOutward(event) {
            this.tab = event;
            this.BindOutwardList();
          } //----------- Button click event on pending DO 

        }, {
          key: "OnSearchPendingDO",
          value: function OnSearchPendingDO() {
            var _this44 = this;

            var _a;

            if (this.form.value.customer_id == null || this.form.value.customer_id == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              this.GetPendingDO = {
                CustomerID: this.form.value.customer_id,
                WarehouseId: this.currentUser.warehouseId,
                CompanyID: this.currentUser.companyId
              };
              this.api.post('/Outward/GetDeliveryOrderByID', this.GetPendingDO).subscribe(function (data) {
                if (data.length > 0) {
                  _this44.PendingDOList = data;
                } else {
                  alert("No Pending DO .....");
                }
              }, function (error) {
                console.error(error);
              });
            }
          } ///----------------Open window for Add to new customer party 

        }, {
          key: "openPartyWindow",
          value: function openPartyWindow(AddPartyContent) {
            var _a; //console.log(this.form.value.customer_id);


            if (this.form.value.customer_id == null || this.form.value.customer_id == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              this.modalService.open(AddPartyContent);
            }
          } ///----------------Close window for Add to new customer party 

        }, {
          key: "onCloseAddParty",
          value: function onCloseAddParty(AddPartyContent) {
            this.modalService.dismissAll(AddPartyContent);
          } //-------------------Save Customer party window data

        }, {
          key: "onAddParty",
          value: function onAddParty() {
            var _this45 = this;

            var _a;

            if (this.formParty.value.txtPartyName == null || this.formParty.value.txtPartyName == "") {
              alert("Please .... Enter Party Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("txtPartyName")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              this.SaveCustomerParty = {
                CustomerPartyID: 0,
                CustomerID: this.form.value.customer_id,
                PartyName: this.formParty.value.txtPartyName,
                ShippingAddress: this.formParty.value.txtShippingAddress1,
                ShippingAddress1: this.formParty.value.txtShippingAddress2,
                PinCode: this.formParty.value.txtPinCode,
                CreatedBy: this.currentUser.userId
              };
              this.api.post('/CustomerParty/CustomerPartysave', this.SaveCustomerParty).subscribe(function (data) {
                data;
                alert(data);

                _this45.formParty.reset();

                _this45.BindCustomerParty();
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "onKeyfilter",
          value: function onKeyfilter(e) {
            var _this46 = this;

            //console.log(e.length);
            if (e.length >= 0) {
              var OutwardListData = {
                outwardID: 0,
                warehouseID: 1,
                outWardDate: "",
                billStartDate: "",
                deliveryOrderID: 0,
                customerPartyID: 0,
                truckNo: "",
                containerNo: "",
                transporterName: "",
                remarks: "",
                createdBy: 0,
                customerID: 0,
                driverName: "",
                driverNo: "",
                docID: 0,
                loadingBy: 0,
                transferID: 0,
                dispatchID: 0,
                StatusID: 0
              };
              this.api.post('/Outward/GetOutwardList', OutwardListData).subscribe(function (data) {
                _this46.OutwardList = data;
                var searchName = e;
                var lists = _this46.OutwardList;
                var res = lists.filter(function (obj) {
                  return obj.OutWardNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.OutWardDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DeliveryOrderNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DispatchNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DeliverTo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.TruckNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.TransporterName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.ContainerNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.Remarks.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.DriverName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 || obj.StatusName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0;
                });
                _this46.OutwardList = res;
              }, function (error) {
                console.error(error);
              });
            }
          } //--------- Pending DO List Row double click event

        }, {
          key: "onRowDblclicked",
          value: function onRowDblclicked(a, e) {
            var _this47 = this;

            var _a;

            if (this.form.value.cbLabourContractor == null || this.form.value.cbLabourContractor == "") {
              alert("Please .... Select Labour Contractor");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("cbLabourContractor")) === null || _a === void 0 ? void 0 : _a.focus();
            } else {
              this.DOID = Number(a.cellSelection[0].rowData.DeliveryOrderID);
              this.DisptID = Number(a.cellSelection[0].rowData.DispatchID);
              var customePartyID = this.customePartyList.filter(function (x) {
                return x.PartyName == a.cellSelection[0].rowData["DeliverTo"];
              });
              this.form.patchValue({
                txtTruck_No: a.cellSelection[0].rowData["TruckNo"],
                txtContainer_No: a.cellSelection[0].rowData["ContainerNo"],
                cbCustomer_Party: customePartyID[0].CustomerPartyID
              });
              var GetDeliveryOrderDetailData = {
                outwardID: 0,
                warehouseID: 0,
                outWardDate: 0,
                billStartDate: 0,
                deliveryOrderID: 0,
                customerPartyID: 0,
                truckNo: 0,
                containerNo: 0,
                transporterName: 0,
                remarks: 0,
                createdBy: 0,
                customerID: 0,
                driverName: 0,
                driverNo: 0,
                docID: 0,
                loadingBy: 0,
                transferID: 0,
                dispatchID: a.cellSelection[0].rowData["DispatchID"],
                StatusID: 0
              };
              this.api.post('/Outward/GetDeliveryOrderDetail', GetDeliveryOrderDetailData).subscribe(function (data) {
                _this47.DeliveryOrderDetailList = data; //console.log("orig",data); 
              }, function (error) {
                console.error(error);
              });
            }
          } //---------- Add Data in outward Detail and show outward charges  

        }, {
          key: "DeliveryOrderDetailCellRenderer",
          value: function DeliveryOrderDetailCellRenderer(params) {
            var _this48 = this;

            var input = document.createElement('input');
            input.type = 'checkbox';
            input.value = 'true';
            input.checked = params.value;
            var DODetailData = {
              CustomerID: this.form.value.customer_id,
              WarehouseId: this.currentUser.warehouseId,
              CompanyID: this.currentUser.companyId,
              ProductID: params.data.ProductID
            };
            input.addEventListener('click', function (e) {
              var val = params.value == true ? false : true;
              params.setValue(val);
            });

            if (params.value.toString() == "true") {
              this.api.post('/Outward/GetOutwardServices', DODetailData).subscribe(function (data) {
                _this48.DeliveryOrderDetailChargeList = []; //console.log(data);

                _this48.DeliveryOrderDetailChargeList = data;
                _this48.DID = _this48.DID + 1;
                _this48.OutwardDetailsData = {
                  OutwardDID: _this48.DID,
                  DeliveryOrderDID: params.data.DeliveryOrderDID,
                  DispatchDID: params.data.DispatchDID,
                  OutQuantity: params.data.DispatchQuantity,
                  LabourContractorID: _this48.form.value.cbLabourContractor
                };

                if (_this48.OutwardDetailList.length > 0) {
                  var OutDetailsFilter = _this48.OutwardDetailList.filter(function (x) {
                    return x.DeliveryOrderDID != params.data.DeliveryOrderDID;
                  });

                  _this48.OutwardDetailList = OutDetailsFilter; //console.log("OutwardDetailList",this.OutwardDetailList);
                  // console.log("Filter",OutDetailsFilter);
                  // console.log("FilterID",OutDetailsFilter);
                } //this.OutwardDetailList


                _this48.OutwardDetailList.push(_this48.OutwardDetailsData); //this.ChargesList=[];  
                //console.log("OutwardDetail Final",this.OutwardDetailList);


                _this48.DeliveryOrderDetailChargeList.forEach(function (i) {
                  if (i.Add == true) {
                    _this48.ChargesListData.push({
                      "OutwardDID": _this48.DID,
                      "ServiceID": i.ServiceID,
                      "ServiceName": i.ServiceName,
                      "Rate": i.C_Rate,
                      "L_Rate": i.L_Rate
                    });
                  }
                });

                _this48.ChargesListData.slice();
              }, function (error) {
                console.error(error);
              });
            } else {
              this.DeliveryOrderDetailChargeList = [];

              if (this.OutwardDetailList.length > 0) {
                var OutDetailFilter = this.OutwardDetailList.filter(function (x) {
                  return x.DeliveryOrderDID == params.data.DeliveryOrderDID;
                });
                var OutChargeFilter = this.ChargesListData.filter(function (x) {
                  return x.OutwardDID != OutDetailFilter[0].OutwardDID;
                });
                this.ChargesListData = OutChargeFilter;
              }
            }

            return input;
          } /// -------------------- Apply charges

        }, {
          key: "DeliveryOrderChargeCellEditRenderer",
          value: function DeliveryOrderChargeCellEditRenderer(params) {
            var _this49 = this;

            var input = document.createElement('input');
            input.type = 'checkbox';
            input.value = 'true';
            input.checked = params.value;
            input.addEventListener('click', function (e) {
              var val = params.value == true ? false : true;
              params.setValue(val);

              var ChargesDT = _this49.ChargesListData.filter(function (x) {
                return x.OutwardDID != _this49.DID;
              });

              _this49.ChargesListData = ChargesDT;

              _this49.DeliveryOrderDetailChargeList.forEach(function (i) {
                if (i.Add == true) {
                  _this49.ChargesListData.push({
                    "OutwardDID": _this49.DID,
                    "ServiceID": i.ServiceID,
                    "ServiceName": i.ServiceName,
                    "Rate": i.C_Rate,
                    "L_Rate": i.L_Rate
                  });
                }
              });

              _this49.ChargesListData.slice(); //console.log("click 3",this.ChargesListData);

            });
            return input;
          } ///-------------------------------save Outward

        }, {
          key: "OnSaveOutward",
          value: function OnSaveOutward() {
            var _this50 = this;

            var _a, _b, _c, _d, _e, _f; //console.log(this.DeliveryOrderDetailList);  


            if (this.DeliveryOrderDetailList.length > 0) {
              var OutwardCount = this.DeliveryOrderDetailList.filter(function (x) {
                return x.Outward == false;
              });
              this.Out_Count = OutwardCount.length;
            }

            console.log("Save");

            if (this.form.value.customer_id == null || this.form.value.customer_id == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("customer_id")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else if (this.form.value.Outward_Date == null) {
              alert("Please... Select Outward Date ..!!!");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("Outward_Date")) === null || _b === void 0 ? void 0 : _b.focus();
              return;
            } else if (this.form.value.txtTruck_No == null || this.form.value.txtTruck_No == "") {
              alert("Please .... Enter Truck No ....");
              (_c = document === null || document === void 0 ? void 0 : document.getElementById("txtTruck_No")) === null || _c === void 0 ? void 0 : _c.focus();
              return;
            } else if (this.form.value.cbDock_Name == null || this.form.value.cbDock_Name == "") {
              alert("Please .... select Dock name ....");
              (_d = document === null || document === void 0 ? void 0 : document.getElementById("cbDock_Name")) === null || _d === void 0 ? void 0 : _d.focus();
              return;
            } else if (this.form.value.cbLodingBy_Name == null) {
              alert("Please... Select unloading by ..!!!");
              (_e = document === null || document === void 0 ? void 0 : document.getElementById("cbLodingBy_Name")) === null || _e === void 0 ? void 0 : _e.focus();
              return;
            } else if (this.form.value.cbLabourContractor == null || this.form.value.cbLabourContractor == "") {
              alert("Please .... select Labour Contractor ....");
              (_f = document === null || document === void 0 ? void 0 : document.getElementById("cbLabourContractor")) === null || _f === void 0 ? void 0 : _f.focus();
              return;
            } else if (this.DeliveryOrderDetailList.length == 0) {
              alert("Please... Add Outward Details ..!!!");
              return;
            } else if (this.Out_Count > 0) {
              alert("Please... Select Outward Product ..!!!");
              return;
            } // else if(this.InwardshowStorageArea.length==0){
            //   alert("Please... Add Storage Details ..!!!");
            //   //document?.getElementById("truckno")?.focus();
            //   return;
            // }else if(this.InwardTransportList.length==0){
            //   alert("Please... Add transport Details..!!!");
            //   //document?.getElementById("truckno")?.focus();
            //   return;
            // }
            else {
              //alert("valid");
              //this.form.value.cbLabourContractor
              //const UpdateDODID=this.ChargesListData;
              // this.newArr=this.OutwardDetailList.concat(this.ChargesListData)
              // console.log(this.newArr);
              this.Saveclick = true;
              this.newArr = [];
              this.OutwardDetailList.forEach(function (i) {
                _this50.ChargesListData.forEach(function (j) {
                  if (i.OutwardDID == j.OutwardDID) {
                    _this50.newArr.push({
                      "OutwardDID": i.DeliveryOrderDID,
                      "ServiceID": j.ServiceID,
                      "ServiceName": j.ServiceName,
                      "Rate": j.Rate,
                      "L_Rate": j.L_Rate
                    });
                  }
                });
              });
              this.ChargesListData = this.newArr; //console.log(this.newArr);
              //console.log(this.ChargesListData);
              //console.log(this.OutwardDetailList);

              var InsertOutwardData = {
                OutwardID: this.outID,
                WarehouseID: this.currentUser.warehouseId,
                OutWardDate: this.form.value.Outward_Date,
                BillStartDate: this.form.value.Outward_Date,
                DeliveryOrderID: this.DOID,
                CustomerPartyID: this.form.value.cbCustomer_Party,
                TruckNo: this.form.value.txtTruck_No,
                ContainerNo: this.form.value.txtContainer_No,
                TransporterName: "",
                Remarks: this.form.value.cbRemarks,
                CreatedBy: this.currentUser.userId,
                CustomerID: Number(this.form.value.customer_id),
                OutwardDetailModel: this.OutwardDetailList,
                OutwardChargeModel: this.ChargesListData,
                DriverName: this.form.value.txtDriver_Name,
                DriverNo: this.form.value.txtDriver_MobileNo,
                DocID: Number(this.form.value.cbDock_Name),
                LoadingBy: Number(this.form.value.cbLodingBy_Name),
                TransferID: 0,
                DispatchID: this.DisptID
              }; //console.log(InsertOutwardData);

              this.api.post('/Outward/Outward_Insert', InsertOutwardData).subscribe(function (data) {
                _this50.BindOutwardList();
              }, function (error) {
                console.error(error);
              });
            } // console.log("ChargesListData",this.ChargesListData);
            // console.log("OutwardDetailList",this.OutwardDetailList);

          } //------------Reset Outward Form

        }, {
          key: "OnResetOuward",
          value: function OnResetOuward() {
            this.form.reset();
            this.Saveclick = false;
            this.BindOutwardList();
            var UpdatedDate = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
            this.todayDate = UpdatedDate;
            this.outID = 0;
            this.DOID = 0;
            this.DisptID = 0;
            this.BindCustomerParty();
            this.DeliveryOrderDetailList = [];
            this.DeliveryOrderDetailChargeList = [];
            this.PendingDOList = [];
            this.SaveCustomerParty = [];
            this.DeliveryOrderDetailList = [];
            this.OutwardDetailList = [];
            this.ChargesListData = [];
            this.Out_Count = 0;
            this.newArr = [];
          }
        }, {
          key: "onDeleteOutward",
          value: function onDeleteOutward(records) {
            var _this51 = this;

            console.log("0", records);
            var OutwardDeleteData = {
              outwardID: records.OutWardID,
              warehouseID: records.WarehouseID,
              outWardDate: "",
              billStartDate: "",
              deliveryOrderID: 0,
              customerPartyID: 0,
              truckNo: "",
              containerNo: "",
              transporterName: "",
              remarks: "BY test",
              createdBy: this.currentUser.userId,
              customerID: 0,
              driverName: "",
              driverNo: "",
              docID: 0,
              loadingBy: 0,
              transferID: 0,
              dispatchID: 0,
              StatusID: records.StatusID
            };
            console.log("Delete ", OutwardDeleteData);
            this.api.post('/Outward/OutwardStatus_validation', OutwardDeleteData).subscribe(function (data) {
              console.log("process ", data[0].Count);

              if (data[0].Count == 0) {
                alert("Some data is updated. So Please, reperform your cancelled operation");

                _this51.BindOutwardList();
              } else {
                if (records.StatusID = 82) {
                  alert("Sorry,Outward already deactivated or deleted ....!!!");
                } else {
                  _this51.api.post('/Outward/OutWard_Cancelled', OutwardDeleteData).subscribe(function (data) {
                    alert(data);

                    _this51.BindOutwardList();
                  }, function (error) {
                    console.error(error);
                  });
                }
              }
            }, function (error) {
              console.error(error);
            });
          }
        }]);

        return _OutwardComponent;
      }();

      _OutwardComponent.ɵfac = function OutwardComponent_Factory(t) {
        return new (t || _OutwardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal));
      };

      _OutwardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _OutwardComponent,
        selectors: [["app-outward"]],
        decls: 133,
        vars: 53,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "1ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Outward"], [3, "formGroup"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-5", "col-md-5"], [1, "form-group"], ["formControlName", "customer_id", "id", "customer_id", 1, "form-control", "form-control-sm"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "customer_id_error"], [1, "col-sm-3", "col-md-3"], [1, "form-group", "pt-3"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "col-sm-4", "col-md-4"], ["type", "datetime-local", "formControlName", "Outward_Date", "id", "Outward_Date", "placeholder", "", "name", "deliveryorder_date", 1, "form-control", "form-control-rounded", 3, "ngModel"], [1, "col-sm-6", "col-md-6"], ["type", "text", "formControlName", "txtTruck_No", "id", "txtTruck_No", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtContainer_No", "id", "txtContainer_No", "placeholder", "", 1, "form-control", "form-control-sm"], ["formControlName", "cbCustomer_Party", "id", "cbCustomer_Party", 1, "form-control", "form-control-sm"], ["formControlName", "cbRemarks", "id", "cbRemarks", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtDriver_Name", "id", "txtDriver_Name", "placeholder", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtDriver_MobileNo", "id", "txtDriver_MobileNo", "placeholder", "", 1, "form-control", "form-control-sm"], ["formControlName", "cbDock_Name", "id", "cbDock_Name", 1, "form-control", "form-control-sm"], ["formControlName", "cbLodingBy_Name", "id", "cbLodingBy_Name", 1, "form-control", "form-control-sm"], ["formControlName", "cbLabourContractor", "id", "cbLabourContractor", 1, "form-control", "form-control-sm"], [1, "row"], [1, "col-12"], [1, "font-weight-bold"], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "dblclick"], ["gridPendingDOdList", ""], [1, "col-8"], [1, "card"], [1, "ag-theme-alpine", 2, "height", "300px", 3, "rowData", "columnDefs"], [1, "col-4"], [1, "col-sm-4"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", 3, "disabled", "click"], [1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", 3, "click"], ["label", "Outward List"], [1, "form-control-sm"], ["type", "text", "id", "filtertext", 1, "form-control-sm", 3, "keyup"], ["filtertext", ""], [2, "height", "800px"], [2, "height", "790px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSize"], ["AddPartyContent", ""], [3, "value"], [1, "modal-header"], ["id", "modal-basic-title"], [1, "col-sm-6"], ["type", "text", "formControlName", "txtPartyName", "id", "txtPartyName", "autocomplete", "off", 1, "form-control", "form-control-sm"], ["for", "company"], ["type", "text", "formControlName", "txtShippingAddress1", "id", "txtShippingAddress1", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtShippingAddress2", "id", "txtShippingAddress2", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtPinCode", "id", "txtPinCode", 1, "form-control", "form-control-sm"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"]],
        template: function OutwardComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-tab-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedIndexChange", function OutwardComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tabOutward($event);
            })("selectedIndexChange", function OutwardComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OutwardComponent_option_16_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutwardComponent_Template_button_click_20_listener() {
              return ctx.OnSearchPendingDO();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Pending DO");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Outward Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Truck No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Container No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Customer Party");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, OutwardComponent_option_45_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutwardComponent_Template_button_click_48_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](132);

              return ctx.openPartyWindow(_r8);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "ADD Party");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, OutwardComponent_option_57_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Driver Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Driver Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Dock Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, OutwardComponent_option_75_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "LodingBy Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, OutwardComponent_option_84_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Labour Contractor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, OutwardComponent_option_93_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Pending DO");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "mtx-grid", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function OutwardComponent_Template_mtx_grid_dblclick_100_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](101);

              return ctx.onRowDblclicked(_r6, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Product List");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "ag-grid-angular", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Product Charges");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "ag-grid-angular", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutwardComponent_Template_button_click_117_listener() {
              return ctx.OnSaveOutward();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutwardComponent_Template_button_click_120_listener() {
              return ctx.OnResetOuward();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "mat-tab", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "label", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Filter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "input", 42, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function OutwardComponent_Template_input_keyup_126_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](127);

              return ctx.onKeyfilter(_r7.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "mtx-grid", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](131, OutwardComponent_ng_template_131_Template, 33, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customerList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 49, ctx.todayDate, "yyyy-MM-dd hh:mm:ss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customePartyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.remarkList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dockList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.unloadingList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.labourContractorList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.PendingDOList)("columns", ctx.PendingDOListColum)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", true)("hideRowSelectionCheckbox", true)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Detail List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", false)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](52, _c0))("pageIndex", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowData", ctx.DeliveryOrderDetailList)("columnDefs", ctx.DeliveryOrderDetailColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowData", ctx.DeliveryOrderDetailChargeList)("columnDefs", ctx.DeliveryOrderDetailChargeColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.Saveclick);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.OutwardList)("columns", ctx.OutWardListColumn)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Item List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", false)("showPaginator", false)("pageSize", 10000000);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_11__.MtxGridComponent, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXR3YXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      }); //----------------Define Class

      var _OutwardCharege = /*#__PURE__*/_createClass(function _OutwardCharege() {
        _classCallCheck(this, _OutwardCharege);

        this.OutwardDID = 0;
        this.ServiceID = 0;
        this.ServiceName = "";
        this.Rate = 0;
        this.L_Rate = 0;
      });

      var _OutwardDetail = /*#__PURE__*/_createClass(function _OutwardDetail() {
        _classCallCheck(this, _OutwardDetail);

        this.OutwardDID = 0;
        this.DeliveryOrderDID = 0;
        this.DispatchDID = 0;
        this.OutQuantity = 0;
        this.LabourContractorID = 0;
      });
      /***/

    },

    /***/
    59873:
    /*!**********************************************************!*\
      !*** ./src/app/routes/process/process-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessRoutingModule": function ProcessRoutingModule() {
          return (
            /* binding */
            _ProcessRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _inward_inward_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inward/inward.component */
      58535);
      /* harmony import */


      var _deliveryorder_deliveryorder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deliveryorder/deliveryorder.component */
      77969);
      /* harmony import */


      var _dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dispatch/dispatch.component */
      91270);
      /* harmony import */


      var _outward_outward_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./outward/outward.component */
      32797);
      /* harmony import */


      var _shifting_shifting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shifting/shifting.component */
      81032);
      /* harmony import */


      var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transfer/transfer.component */
      11430);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'Inward',
        component: _inward_inward_component__WEBPACK_IMPORTED_MODULE_0__.InwardComponent
      }, {
        path: 'DeliveryOrder',
        component: _deliveryorder_deliveryorder_component__WEBPACK_IMPORTED_MODULE_1__.DeliveryorderComponent
      }, {
        path: 'Dispatch',
        component: _dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_2__.DispatchComponent
      }, {
        path: 'Outward',
        component: _outward_outward_component__WEBPACK_IMPORTED_MODULE_3__.OutwardComponent
      }, {
        path: 'Shifting',
        component: _shifting_shifting_component__WEBPACK_IMPORTED_MODULE_4__.ShiftingComponent
      }, {
        path: 'Transfer',
        component: _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_5__.TransferComponent
      }];

      var _ProcessRoutingModule = /*#__PURE__*/_createClass(function _ProcessRoutingModule() {
        _classCallCheck(this, _ProcessRoutingModule);
      });

      _ProcessRoutingModule.ɵfac = function ProcessRoutingModule_Factory(t) {
        return new (t || _ProcessRoutingModule)();
      };

      _ProcessRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _ProcessRoutingModule
      });
      _ProcessRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_ProcessRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    42603:
    /*!**************************************************!*\
      !*** ./src/app/routes/process/process.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessModule": function ProcessModule() {
          return (
            /* binding */
            _ProcessModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);
      /* harmony import */


      var _inward_inward_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inward/inward.component */
      58535);
      /* harmony import */


      var _process_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./process-routing.module */
      59873);
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ag-grid-angular */
      82022);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _deliveryorder_deliveryorder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./deliveryorder/deliveryorder.component */
      77969);
      /* harmony import */


      var _dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dispatch/dispatch.component */
      91270);
      /* harmony import */


      var _outward_outward_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./outward/outward.component */
      32797);
      /* harmony import */


      var _shifting_shifting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shifting/shifting.component */
      81032);
      /* harmony import */


      var _shifting_shiftingedit_button_shiftingedit_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shifting/shiftingedit-button/shiftingedit-button.component */
      71631);
      /* harmony import */


      var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./transfer/transfer.component */
      11430);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316); // import {
      //   DxDataGridModule,
      //   DxBulletModule,
      //   DxTemplateModule,
      // } from 'devextreme-angular';


      var _ProcessModule = /*#__PURE__*/_createClass(function _ProcessModule() {
        _classCallCheck(this, _ProcessModule);
      });

      _ProcessModule.ɵfac = function ProcessModule_Factory(t) {
        return new (t || _ProcessModule)();
      };

      _ProcessModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _ProcessModule
      });
      _ProcessModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, // DxDataGridModule,
        // DxTemplateModule,
        // DxBulletModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _process_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProcessRoutingModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule.withComponents([])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_ProcessModule, {
          declarations: [_inward_inward_component__WEBPACK_IMPORTED_MODULE_1__.InwardComponent, _deliveryorder_deliveryorder_component__WEBPACK_IMPORTED_MODULE_3__.DeliveryorderComponent, _dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_4__.DispatchComponent, _outward_outward_component__WEBPACK_IMPORTED_MODULE_5__.OutwardComponent, _shifting_shifting_component__WEBPACK_IMPORTED_MODULE_6__.ShiftingComponent, _shifting_shiftingedit_button_shiftingedit_button_component__WEBPACK_IMPORTED_MODULE_7__.ShiftingeditButtonComponent, _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_8__.TransferComponent],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, // DxDataGridModule,
          // DxTemplateModule,
          // DxBulletModule,
          _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _process_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProcessRoutingModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule]
        });
      })();
      /***/

    },

    /***/
    81032:
    /*!***************************************************************!*\
      !*** ./src/app/routes/process/shifting/shifting.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShiftingComponent": function ShiftingComponent() {
          return (
            /* binding */
            _ShiftingComponent
          );
        },

        /* harmony export */
        "ShiftingCharege": function ShiftingCharege() {
          return (
            /* binding */
            _ShiftingCharege
          );
        },

        /* harmony export */
        "ShiftingCharegeSave": function ShiftingCharegeSave() {
          return (
            /* binding */
            _ShiftingCharegeSave
          );
        },

        /* harmony export */
        "ShiftingDetailsList": function ShiftingDetailsList() {
          return (
            /* binding */
            _ShiftingDetailsList
          );
        },

        /* harmony export */
        "ShiftingDetailSave": function ShiftingDetailSave() {
          return (
            /* binding */
            _ShiftingDetailSave
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core */
      3825);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ag-grid-community */
      79574);
      /* harmony import */


      var _shiftingedit_button_shiftingedit_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shiftingedit-button/shiftingedit-button.component */
      71631);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-matero/extensions */
      56830);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ag-grid-angular */
      82022);

      function ShiftingComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r11.CustomerID);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r11.CustomerName);
        }
      }

      function ShiftingComponent_div_17_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ShiftingComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShiftingComponent_div_17_span_1_Template, 2, 0, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.cbCustomerID == null ? null : ctx_r1.f.cbCustomerID.errors == null ? null : ctx_r1.f.cbCustomerID.errors.required);
        }
      }

      function ShiftingComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Lot No");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ShiftingComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShiftingComponent_div_23_div_1_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.f.txtLotNo == null ? null : ctx_r2.f.txtLotNo.errors == null ? null : ctx_r2.f.txtLotNo.errors.required);
        }
      }

      function ShiftingComponent_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter inward date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ShiftingComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShiftingComponent_div_35_div_1_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.shift_date == null ? null : ctx_r3.f.shift_date.errors == null ? null : ctx_r3.f.shift_date.errors.required);
        }
      }

      function ShiftingComponent_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r15.UserID);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r15.UserName);
        }
      }

      function ShiftingComponent_div_44_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Select Item Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ShiftingComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShiftingComponent_div_44_div_1_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.cbloadingByID.errors == null ? null : ctx_r5.f.cbloadingByID.errors.required);
        }
      }

      function ShiftingComponent_option_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var s_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", s_r17.StorageAreaID);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", s_r17.Storage_Area_Name, " ");
        }
      }

      function ShiftingComponent_option_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", l_r18.LabourContractorID);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", l_r18.ContractorName, "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1() {
        return [10, 20, 50, 100, 500];
      };

      var _ShiftingComponent = /*#__PURE__*/function () {
        function _ShiftingComponent(fb, fbAdd, api, dialog, dialogBox) {
          _classCallCheck(this, _ShiftingComponent);

          this.fb = fb;
          this.fbAdd = fbAdd;
          this.api = api;
          this.dialog = dialog;
          this.dialogBox = dialogBox;
          this.submitted = false;
          this.HideSaveButton = true;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
          this.tab = 0;
          this.UserID = 0;
          this.ServiceList = [];
          this.ShiftingDetailList = [];
          this.SDetailSaveList = [];
          this.SChargeSaveList = [];
          this.DetailList = [];
          this.ShiftDetail = {};
          this.InwardDID = 0;
          this.InwardLocationID = 0;
          this.WareHousesID = 0;
          this.FromLocationID = 0;
          this.shiftingsDID = 0;
          this.Flag = false;
          this.ShiftingID = 0; //----------------------------Grid Column

          this.BalanceStockColumn = [{
            header: "InwardDID",
            field: "InwardDID",
            hide: false
          }, {
            header: "WareHouseID",
            field: "WareHouseID",
            hide: false
          }, {
            header: "InwardLocationID",
            field: "InwardLocationID"
          }, {
            header: "StorageAreaID",
            field: "StorageAreaID"
          }, {
            header: "Location",
            field: "Location",
            hide: false
          }, {
            header: "ProductName",
            field: "ProductName"
          }, {
            header: "LotNo",
            field: "LotNo"
          }, {
            header: "BrandName",
            field: "BrandName"
          }, {
            header: "ItemsInPacket",
            field: "ItemsInPacket",
            hide: false
          }, {
            header: "InQuantity",
            field: "InQuantity",
            hide: false
          }, {
            header: "OutQuantity",
            field: "OutQuantity"
          }, {
            header: "InprocessQuantity",
            field: "InprocessQuantity"
          }, {
            header: "BalanceQuantity",
            field: "BalanceQuantity"
          }];
          this.serviceColumns = [{
            field: 'ShiftingID',
            hide: true
          }, {
            field: 'ServiceID',
            hide: true
          }, {
            field: 'ServiceName',
            hide: false,
            resizable: true,
            width: 120
          }, {
            field: 'Rate',
            hide: false,
            width: 70,
            cellEditorPopup: true,
            editable: true,
            valueParser: "Number(newValue)",
            cellStyle: function cellStyle(params) {
              if (params.value > 0) {
                return {
                  color: 'white',
                  backgroundColor: '#FF0000'
                };
              } else {
                return {
                  color: 'black',
                  backgroundColor: '#98FB98'
                };
              }
            }
          }, {
            field: 'Rate_L',
            hide: false,
            width: 80,
            cellEditorPopup: true,
            editable: true,
            valueParser: "Number(newValue)",
            cellStyle: function cellStyle(params) {
              if (params.value > 0) {
                return {
                  color: 'white',
                  backgroundColor: '#FF0000'
                };
              } else {
                return {
                  color: 'black',
                  backgroundColor: '#98FB98'
                };
              }
            }
          }];
          this.ShiftingDetailColumns = [{
            header: "ShiftingDID",
            field: "ShiftingDID",
            hide: false
          }, {
            header: "InwardLocationID",
            field: "InwardLocationID",
            hide: false
          }, {
            header: "InwardDID",
            field: "InwardDID"
          }, {
            header: "ProductName",
            field: "ProductName"
          }, {
            header: "LotNo",
            field: "LotNo",
            hide: false
          }, {
            header: "BrandName",
            field: "BrandName"
          }, {
            header: "ItemInPackets",
            field: "ItemInPackets"
          }, {
            header: "BalanceQuantity",
            field: "BalanceQuantity"
          }, {
            header: "ShiftingQuantity",
            field: "ShiftingQuantity",
            hide: false
          }, {
            header: "FromLocation",
            field: "FromLocation",
            hide: false
          }, {
            header: "ToLocation",
            field: "ToLocation"
          }, {
            header: "LabourContractor",
            field: "LabourContractor",
            hide: false
          }, {
            header: "FromLocationID",
            field: "FromLocationID"
          }, {
            header: "ToLocationID",
            field: "ToLocationID",
            hide: false
          }, {
            header: "LabourContractorID",
            field: "LabourContractorID"
          }]; // ShiftingListColumn: MtxGridColumn[] = [
          //   {
          //     header: "Action",
          //     field: 'Action',
          //     minWidth: 105,
          //     pinned:'left',    
          //     type: 'button',
          //     buttons: [{
          //         color: 'warn',
          //         type: 'icon',
          //         icon: 'delete',
          //         tooltip: 'delete',
          //         pop: true,
          //         popTitle:'Do you want to delete inward ....!!', //this.translate.stream('table_kitchen_sink.confirm_delete'),
          //         popCloseText:'No', //this.translate.stream('table_kitchen_sink.close'),
          //         popOkText:'Yes', 
          //         popDescription:'',
          //         popCloseColor:'warn',
          //         popOkColor:'primary',
          //         click: record => this.onDeleteTestListRow(record),
          //       }
          //     ]
          //   },
          //   {    header:'ShiftingDID',    field:'ShiftingDID', minWidth: 100, hide:false, sortable:true,  },
          //   {    header:'ShiftingID',    field:'ShiftingID',    hide:true,  },
          //   {    header:'ShiftingDate',    field:'ShiftingDate',    minWidth: 100,type:'date',  typeParameter:{ format:'dd-MM-yyyy'} },
          //   {    header:'CustomerName',    field:'CustomerName',    minWidth: 200,  },
          //   {    header:'LotNo',    field:'LotNo',    hide:true,  },
          //   {    header:'ProductName',    field:'ProductName',    hide:true  },
          //   {    header:'FromLocation',    field:'FromLocation',    minWidth: 100, },
          //   {    header:'ToLocation',    field:'ToLocation',    minWidth: 100,  },
          //   {    header:'Quantity',    field:'Quantity',    minWidth: 120,  },
          //   {    header:'LabourContractorName',    field:'LabourContractorName',    hide:true,    minWidth: 120,  },
          //   {    header:'LoadingBy',    field:'LoadingBy',    minWidth: 200,  },
          //   {    header:'CreatedBy',    field:'CreatedBy',    minWidth: 120,  },
          //   {    header:'CreatedDate',    field:'CreatedDate',    minWidth: 200,  },
          //   {    header:'WarehouseID',    field:'WarehouseID',    minWidth: 200,  },
          //   {    header:'StatusName',    field:'StatusName',    minWidth: 200,  },
          //   {    header:'StatusID',    field:'StatusID',    minWidth: 200,  },
          // ];

          this.ShiftingListColumnDefs = [{
            headerName: 'Action',
            width: 100,
            floatingFilter: false,
            cellRenderer: 'buttonRenderer',
            cellRendererParams: {
              onClick: this.OnCancelledShifting.bind(this),
              label: 'Click 1'
            }
          }, {
            headerName: 'ShiftingDID',
            field: 'ShiftingDID',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ShiftingID',
            field: 'ShiftingID',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, // {    headerName:'ShiftingDate',    field:'ShiftingDate',    minWidth: 100,type:'date',filter: 'agTextColumnFilter',floatingFilter: true,},
          {
            headerName: 'CustomerName',
            field: 'CustomerName',
            minWidth: 200,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'LotNo',
            field: 'LotNo',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ProductName',
            field: 'ProductName',
            hide: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'FromLocation',
            field: 'FromLocation',
            minWidth: 100,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'ToLocation',
            field: 'ToLocation',
            minWidth: 100,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'Quantity',
            field: 'Quantity',
            minWidth: 120,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'LabourContractorName',
            field: 'LabourContractorName',
            hide: true,
            minWidth: 120,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'LoadingBy',
            field: 'LoadingBy',
            minWidth: 200,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'CreatedBy',
            field: 'CreatedBy',
            minWidth: 120,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'CreatedDate',
            field: 'CreatedDate',
            minWidth: 200,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'WarehouseID',
            field: 'WarehouseID',
            minWidth: 200,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'StatusName',
            field: 'StatusName',
            minWidth: 200,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }, {
            headerName: 'StatusID',
            field: 'StatusID',
            minWidth: 200,
            filter: 'agTextColumnFilter',
            floatingFilter: true
          }];
          var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
          this.todayDate = dateSendingToServer;
          this.currentUser = this.api.getCurrentUser();
          this.frameworkComponents = {
            buttonRenderer: _shiftingedit_button_shiftingedit_button_component__WEBPACK_IMPORTED_MODULE_2__.ShiftingeditButtonComponent
          };
        } //======================
        //===================


        _createClass(_ShiftingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              cbCustomerID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              txtLotNo: [''],
              shift_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              cbloadingByID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              txtProductName: [''],
              txtShiftDetailLotNo: [''],
              txtBrandName: [''],
              txtpacketcount: [''],
              txtBalquantity: [''],
              txtShiftingQty: [''],
              txtLocation: [''],
              cbToLocation: [''],
              cblabourcontractor_id: ['']
            });
            this.ShiftingServiceList = [];
            this.BindDropdown();
            this.BindShiftingList();
          }
        }, {
          key: "BindDropdown",
          value: function BindDropdown() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this52 = this;

              var DataParam;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      DataParam = {
                        warehouseID: this.currentUser.warehouseId,
                        StorageAreaID: 0,
                        LTD_StorageAreaS: null,
                        createdBy: 0,
                        BlockID: 0
                      };
                      this.api.get('/Customer').subscribe(function (data) {
                        _this52.customerList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/UnloadingBy').subscribe(function (data) {
                        _this52.loadingByList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.get('/LabourContracter').subscribe(function (data) {
                        _this52.labourContractorList = data;
                      }, function (error) {
                        console.error(error);
                      });
                      this.api.post('/Storage/StorageArea_Select', DataParam).subscribe(function (data) {
                        _this52.StorageAreas = data;
                      }, function (error) {
                        console.error(error);
                      });

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "BindShiftingList",
          value: function BindShiftingList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this53 = this;

              var DataParam;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      DataParam = {
                        warehouseID: this.currentUser.warehouseId,
                        StorageAreaID: 0,
                        LTD_StorageAreaS: null,
                        createdBy: 0,
                        BlockID: 0
                      };
                      this.api.post('/Shifting/Shifting_List', DataParam).subscribe(function (data) {
                        _this53.ShiftingList = data;
                      }, function (error) {
                        console.error(error);
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "OnSearchClick",
          value: function OnSearchClick() {
            var _this54 = this;

            var _a, _b;

            if (this.form.value.cbCustomerID == null || this.form.value.cbCustomerID == "") {
              alert("Please .... Select Customer Name");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("cbCustomerID")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else if (this.form.value.txtLotNo == null || this.form.value.txtLotNo == "") {
              alert("Please .... Enter Lot No ");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("txtLotNo")) === null || _b === void 0 ? void 0 : _b.focus();
              return;
            } else {
              var SearchData = {
                remarks: '',
                shiftingDID: 0,
                shiftingID: 0,
                warehouseID: 0,
                customerID: this.form.value.cbCustomerID,
                createdBy: 0,
                shiftingDate: 0,
                loadingBy: 0,
                LotNo: this.form.value.txtLotNo
              };
              this.api.post('/Shifting/GetInwardDetails', SearchData).subscribe(function (data) {
                _this54.BalanceStockList = data; //console.log(data);
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "onRowDblclicked",
          value: function onRowDblclicked(a, e) {
            var _this55 = this;

            //console.log("SD",a.cellSelection[0].rowData);
            this.api.get('/Shifting/Shifting_services').subscribe(function (data) {
              var _a;

              _this55.ShiftingServiceList = data; //console.log("SC",data);   

              _this55.InwardDID = 0;
              _this55.InwardLocationID = 0;
              _this55.WareHousesID = 0;
              _this55.FromLocationID = 0;

              _this55.form.controls['txtProductName'].reset();

              _this55.form.controls['txtShiftDetailLotNo'].reset();

              _this55.form.controls['txtBrandName'].reset();

              _this55.form.controls['txtpacketcount'].reset();

              _this55.form.controls['txtBalquantity'].reset();

              _this55.form.controls['txtShiftingQty'].reset();

              _this55.form.controls['txtLocation'].reset();

              _this55.form.controls['cbToLocation'].reset(); //this.form.controls['cblabourcontractor_id'].reset();


              _this55.InwardDID = a.cellSelection[0].rowData["InwardDID"];
              _this55.InwardLocationID = a.cellSelection[0].rowData["InwardLocationID"];
              _this55.WareHousesID = a.cellSelection[0].rowData["WareHouseID"];
              _this55.FromLocationID = a.cellSelection[0].rowData["StorageAreaID"];

              _this55.form.patchValue({
                txtProductName: a.cellSelection[0].rowData["ProductName"],
                txtShiftDetailLotNo: a.cellSelection[0].rowData["LotNo"],
                txtBrandName: a.cellSelection[0].rowData["BrandName"],
                txtpacketcount: a.cellSelection[0].rowData["ItemsInPacket"],
                txtBalquantity: a.cellSelection[0].rowData["BalanceQuantity"],
                txtShiftingQty: '',
                txtLocation: a.cellSelection[0].rowData["Location"]
              });

              (_a = document === null || document === void 0 ? void 0 : document.getElementById("txtShiftingQty")) === null || _a === void 0 ? void 0 : _a.focus();
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onKeyfilter",
          value: function onKeyfilter(e) {
            if (Number(this.form.value.txtBalquantity) > 0) {
              if (Number(this.form.value.txtBalquantity) < Number(e)) {
                alert("Shifting Quantity greater than the Balance Quantity ....!!!");
                this.form.controls['txtShiftingQty'].setValue('');
              }
            }
          }
        }, {
          key: "OnToLocationSelect",
          value: function OnToLocationSelect(ID) {
            var _this56 = this;

            var ToLocationNames = this.StorageAreas.filter(function (x) {
              return x.StorageAreaID == _this56.form.value.cbToLocation;
            });

            if (this.form.value.txtLocation != "" || this.form.value.txtLocation != null) {
              if (this.form.value.txtLocation == ToLocationNames[0].Storage_Area_Name) {
                alert("Please Select other location");
                this.form.controls['cbToLocation'].reset();
              }
            }
          }
        }, {
          key: "OnAddClick",
          value: function OnAddClick() {
            var _this57 = this;

            var _a, _b, _c, _d;

            if (this.form.value.txtShiftingQty == null || this.form.value.txtShiftingQty == "") {
              alert("Please .... Enter Shifting Quantity...!!");
              (_a = document === null || document === void 0 ? void 0 : document.getElementById("txtShiftingQty")) === null || _a === void 0 ? void 0 : _a.focus();
              return;
            } else if (Number(this.form.value.txtBalquantity) < Number(this.form.value.txtShiftingQty)) {
              alert("Shifting Quantity greater than the Balance Quantity ....!!!");
              (_b = document === null || document === void 0 ? void 0 : document.getElementById("txtShiftingQty")) === null || _b === void 0 ? void 0 : _b.focus();
              return;
            } else if (this.form.value.cbToLocation == null || this.form.value.cbToLocation == 0) {
              alert("Please .... Select To Location...!!");
              (_c = document === null || document === void 0 ? void 0 : document.getElementById("cbToLocation")) === null || _c === void 0 ? void 0 : _c.focus();
              return;
            } else if (this.form.value.cblabourcontractor_id == null || this.form.value.cblabourcontractor_id == 0) {
              alert("Please .... Select Labour Contractor...!!");
              (_d = document === null || document === void 0 ? void 0 : document.getElementById("cblabourcontractor_id")) === null || _d === void 0 ? void 0 : _d.focus();
              return;
            } else {
              var ToLocationName = this.StorageAreas.filter(function (x) {
                return x.StorageAreaID == _this57.form.value.cbToLocation;
              });
              var FromLocationName = this.StorageAreas.filter(function (x) {
                return x.StorageAreaID == _this57.FromLocationID;
              });
              var LabourContractorName = this.labourContractorList.filter(function (x) {
                return x.LabourContractorID == _this57.form.value.cblabourcontractor_id;
              });

              if (this.Flag == false) {
                this.shiftingsDID = this.shiftingsDID + 1;
              }

              var SDetailList = this.ShiftingDetailList.filter(function (x) {
                return x.ShiftingDID != _this57.shiftingsDID;
              });
              this.ShiftingDetailList = SDetailList;
              var SChargeList = this.ServiceList.filter(function (x) {
                return x.ShiftingDID != _this57.shiftingsDID;
              });
              this.ServiceList = SChargeList;
              this.ShiftDetail = [];
              this.ShiftDetail = {
                ShiftingDID: this.shiftingsDID,
                InwardLocationID: this.InwardLocationID,
                InwardDID: this.InwardDID,
                ProductName: this.form.value.txtProductName,
                LotNo: this.form.value.txtShiftDetailLotNo,
                BrandName: this.form.value.txtBrandName,
                ItemInPacket: this.form.value.txtpacketcount,
                BalanceQuantity: this.form.value.txtBalquantity,
                ShiftingQuantity: Number(this.form.value.txtShiftingQty),
                FromLocation: FromLocationName[0].Storage_Area_Name,
                ToLocation: ToLocationName[0].Storage_Area_Name,
                LabourContractor: LabourContractorName[0].ContractorName,
                FromLocationID: this.FromLocationID,
                ToLocationID: Number(this.form.value.cbToLocation),
                LabourContractorID: Number(this.form.value.cblabourcontractor_id)
              };
              this.DetailList = this.ShiftingDetailList;
              this.DetailList.push(this.ShiftDetail);
              this.ShiftingDetailList = this.DetailList.slice();
              this.ShiftingServiceList.forEach(function (i) {
                if (i.Rate >= 0) {
                  _this57.ServiceList.push({
                    "ShiftingDID": _this57.shiftingsDID,
                    "ServiceID": i.ServiceID,
                    "ServiceName": i.ServiceName,
                    "Rate": i.Rate,
                    "Rate_L": i.Rate_L
                  });
                }
              }); //console.log("SHifting Detail",this.ShiftingDetailList);
              //console.log("SHifting Charges",this.ServiceList);

              this.InwardDID = 0;
              this.InwardLocationID = 0;
              this.WareHousesID = 0;
              this.FromLocationID = 0;
              this.form.controls['txtProductName'].reset();
              this.form.controls['txtShiftDetailLotNo'].reset();
              this.form.controls['txtBrandName'].reset();
              this.form.controls['txtpacketcount'].reset();
              this.form.controls['txtBalquantity'].reset();
              this.form.controls['txtShiftingQty'].reset();
              this.form.controls['txtLocation'].reset();
              this.form.controls['cbToLocation'].reset();
              this.form.controls['txtLotNo'].reset();
              this.BalanceStockList = [];
              this.ShiftingServiceList = [];
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            var _this58 = this;

            this.submitted = true;
            console.log(formData);

            if (this.form.invalid) {
              alert("invalid");
              return;
            } else if (this.ShiftingDetailList.length == 0) {
              alert("Enter Shifting Detail ...");
            } else {
              this.HideSaveButton = false;
              alert("Save");
              this.ShiftingDetailList.forEach(function (i) {
                if (i.ShiftingDID > 0) {
                  _this58.SDetailSaveList.push({
                    "ShiftingDID": i.ShiftingDID,
                    "InwardLocationID": i.InwardLocationID,
                    "LotNo": i.LotNo,
                    "InwardDID": i.InwardDID,
                    "FromLocationID": i.FromLocationID,
                    "ToLocationID": i.ToLocationID,
                    "Quantity": i.ShiftingQuantity,
                    "LabourContractorID": i.LabourContractorID
                  });
                }
              });
              this.ServiceList.forEach(function (i) {
                if (i.Rate > 0 || i.Rate_L > 0) {
                  _this58.SChargeSaveList.push({
                    "ShiftingDID": i.ShiftingDID,
                    "ServiceID": i.ServiceID,
                    "Rate": i.Rate,
                    "Rate_L": i.Rate_L
                  });
                }
              });
              var SaveShiftingData = {
                "ShiftingID": this.ShiftingID,
                "WarehouseID": this.currentUser.warehouseId,
                "CustomerID": this.form.value.cbCustomerID,
                "CreatedBy": this.currentUser.userId,
                "TD_ShiftingDetails": this.SDetailSaveList,
                "TD_ShiftingCharges": this.SChargeSaveList,
                "ShiftingDate": this.form.value.shift_date,
                "LoadingBy": this.form.value.cbloadingByID
              }; //console.log("SHifting Save",SaveShiftingData);

              this.api.post('/Shifting/Shifting_insert', SaveShiftingData).subscribe(function (data) {
                data;

                _this58.dialog.alert(data.Table[0].Column1);
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "tabchange",
          value: function tabchange(event) {
            this.tab = event;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.submitted = false;
            this.HideSaveButton = true;
          }
        }, {
          key: "onShiftDetailRowDblclick",
          value: function onShiftDetailRowDblclick(detailData, events) {
            var _this59 = this;

            //console.log("detailData ",detailData.cellSelection[0].rowData);
            this.Flag = true;
            this.InwardDID = 0;
            this.InwardLocationID = 0;
            this.WareHousesID = 0;
            this.FromLocationID = 0;
            this.form.controls['txtProductName'].reset();
            this.form.controls['txtShiftDetailLotNo'].reset();
            this.form.controls['txtBrandName'].reset();
            this.form.controls['txtpacketcount'].reset();
            this.form.controls['txtBalquantity'].reset();
            this.form.controls['txtShiftingQty'].reset();
            this.form.controls['txtLocation'].reset();
            this.form.controls['cbToLocation'].reset();
            this.form.controls['cblabourcontractor_id'].reset();
            this.form.patchValue({
              txtProductName: detailData.cellSelection[0].rowData["ProductName"],
              txtShiftDetailLotNo: detailData.cellSelection[0].rowData["LotNo"],
              txtBrandName: detailData.cellSelection[0].rowData["BrandName"],
              txtpacketcount: detailData.cellSelection[0].rowData["ItemsInPacket"],
              txtBalquantity: detailData.cellSelection[0].rowData["BalanceQuantity"],
              txtShiftingQty: detailData.cellSelection[0].rowData["ShiftingQuantity"],
              txtLocation: detailData.cellSelection[0].rowData["FromLocation"],
              cbToLocation: detailData.cellSelection[0].rowData["ToLocationID"],
              cblabourcontractor_id: detailData.cellSelection[0].rowData["LabourContractorID"]
            });
            this.InwardDID = detailData.cellSelection[0].rowData["InwardDID"];
            this.InwardLocationID = detailData.cellSelection[0].rowData["InwardLocationID"];
            this.WareHousesID = this.currentUser.warehouseId;
            this.FromLocationID = detailData.cellSelection[0].rowData["FromLocationID"];
            this.shiftingsDID = detailData.cellSelection[0].rowData["ShiftingDID"];
            var SCharges = this.ServiceList.filter(function (x) {
              return x.ShiftingDID == _this59.shiftingsDID;
            });
            this.ShiftingServiceList = SCharges;
          } // onDeleteTestListRow(d:any)
          // {
          //   //console.log(d);
          //   const SearchData={
          //     remarks:'', 
          //     shiftingDID:0, 
          //     shiftingID:d.ShiftingID, 
          //     warehouseID:this.currentUser.warehouseId, 
          //     customerID:this.form.value.cbCustomerID, 
          //     createdBy:0, 
          //     shiftingDate:0, 
          //     loadingBy:0,          
          //     LotNo:this.form.value.txtLotNo,
          //     StatusID:d.StatusID,  
          //   };
          //   this.api.post('/Shifting/ShiftingStatus_validation',SearchData).subscribe(
          //     data=>{data;
          //       //console.log(data);
          //           if(Number(data[0])>0)
          //           {
          //             if(Number(d.StatusID)==62){
          //               this.dialog.alert("Sorry,this transaction has already cancelled ....!!!");
          //             }else 
          //             if(Number(d.StatusID)==61){
          //               const cancelDataParam={
          //                 warehouseID:this.currentUser.warehouseId,
          //                 StorageAreaID:0,
          //                 shiftingDID:d.ShiftingDID,
          //                 shiftingID:d.ShiftingID,
          //                 LTD_StorageAreaS:null,
          //                 BlockID:0,
          //                 remarks:"text",
          //                 createdBy:this.currentUser.userId,
          //               };
          //               this.api.post('/Shifting/Shifting_Cancelled',cancelDataParam).subscribe(
          //                 data=>{data;
          //                   this.dialog.alert(data);
          //                   this.BindShiftingList();
          //               },
          //                 error=>{ console.error(error);}
          //               );
          //             }
          //           }
          //           else
          //           {
          //             this.dialog.alert("Some data is updated. So Please reperform your delete operation...!!!");
          //           }
          //         },error=>{ console.error(error);});
          // }

        }, {
          key: "OnCancelledShifting",
          value: function OnCancelledShifting(d) {
            var _this60 = this;

            var SearchData = {
              remarks: '',
              shiftingDID: 0,
              shiftingID: d.rowData.ShiftingID,
              warehouseID: this.currentUser.warehouseId,
              customerID: this.form.value.cbCustomerID,
              createdBy: 0,
              shiftingDate: 0,
              loadingBy: 0,
              LotNo: this.form.value.txtLotNo,
              StatusID: d.rowData.StatusID
            };
            console.log(SearchData);
            this.api.post('/Shifting/ShiftingStatus_validation', SearchData).subscribe(function (data) {
              data;
              console.log(data);

              if (Number(data[0]) > 0) {
                if (Number(d.rowData.StatusID) == 62) {
                  _this60.dialog.alert("Sorry,this transaction has already cancelled ....!!!");
                } else if (Number(d.rowData.StatusID) == 61) {
                  var cancelDataParam = {
                    warehouseID: _this60.currentUser.warehouseId,
                    StorageAreaID: 0,
                    shiftingDID: d.rowData.ShiftingDID,
                    shiftingID: d.rowData.ShiftingID,
                    LTD_StorageAreaS: null,
                    BlockID: 0,
                    remarks: "text",
                    createdBy: _this60.currentUser.userId
                  };

                  _this60.api.post('/Shifting/Shifting_Cancelled', cancelDataParam).subscribe(function (data) {
                    data;

                    _this60.dialog.alert(data);

                    _this60.BindShiftingList();
                  }, function (error) {
                    console.error(error);
                  });
                }
              } else {
                _this60.dialog.alert("Some data is updated. So Please reperform your delete operation...!!!");
              }
            }, function (error) {
              console.error(error);
            });
          }
        }]);

        return _ShiftingComponent;
      }();

      _ShiftingComponent.ɵfac = function ShiftingComponent_Factory(t) {
        return new (t || _ShiftingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_9__.MtxDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
      };

      _ShiftingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ShiftingComponent,
        selectors: [["app-shifting"]],
        decls: 130,
        vars: 67,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Shifting"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-6"], [1, "form-group"], ["formControlName", "cbCustomerID", "id", "cbCustomerID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-4"], ["for", "company"], ["type", "text", "formControlName", "txtLotNo", "id", "txtLotNo", 1, "form-control", "form-control-sm"], [1, "col-sm-2"], [1, "row"], [1, "form-group", "pl-2"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "click"], ["type", "datetime-local", "formControlName", "shift_date", "id", "shift_date", "placeholder", "yyyy-MM-dd", "name", "shift_date", 1, "form-control", "form-control-sm", 3, "ngModel"], [1, "col-sm-8"], ["formControlName", "cbloadingByID", "id", "cbloadingByID", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-12"], [1, "font-weight-bold"], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "dblclick"], ["gridPendingDOdList", ""], [1, "col-12"], ["type", "text", "formControlName", "txtProductName", "id", "txtProductName", "autocomplete", "off", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtShiftDetailLotNo", "id", "txtShiftDetailLotNo", "autocomplete", "off", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtBrandName", "id", "txtBrandName", "autocomplete", "off", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtpacketcount", "id", "txtpacketcount", "autocomplete", "off", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtBalquantity", "id", "txtBalquantity", "autocomplete", "off", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "txtShiftingQty", "id", "txtShiftingQty", "autocomplete", "off", "placeholder", "", 1, "form-control", "form-control-sm", 3, "keyup"], ["txtShiftingQty", ""], ["type", "text", "formControlName", "txtLocation", "id", "txtLocation", "autocomplete", "off", "placeholder", "", "readonly", "", 1, "form-control", "form-control-sm"], ["formControlName", "cbToLocation", "id", "cbToLocation", 1, "form-control", "form-control-sm", 3, "change"], ["disabled", "", 3, "ngValue"], ["formControlName", "cblabourcontractor_id", "id", "cblabourcontractor_id", 1, "form-control", "form-control-sm"], [1, "card"], [1, "ag-theme-alpine", 2, "height", "300px", 3, "rowData", "columnDefs"], ["gridShiftDetailList", ""], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], ["label", "Shifting List"], [2, "height", "100%", "box-sizing", "border-box"], [1, "ag-theme-alpine", 2, "height", "450px", 3, "rowData", "columnDefs", "frameworkComponents"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function ShiftingComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-tab-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function ShiftingComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tabchange($event);
            })("selectedIndexChange", function ShiftingComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ShiftingComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit(ctx.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ShiftingComponent_option_16_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ShiftingComponent_div_17_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "LotNo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ShiftingComponent_div_23_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShiftingComponent_Template_button_click_27_listener() {
              return ctx.OnSearchClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Apply ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Shifting Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ShiftingComponent_div_35_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Loading By");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ShiftingComponent_option_43_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ShiftingComponent_div_44_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Pending DO");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mtx-grid", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function ShiftingComponent_Template_mtx_grid_dblclick_49_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](50);

              return ctx.onRowDblclicked(_r6, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Shifting Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Lot No");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Brand Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Count In Packet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Balance Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Shifting Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "input", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ShiftingComponent_Template_input_keyup_87_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](88);

              return ctx.onKeyfilter(_r7.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "To Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ShiftingComponent_Template_select_change_98_listener($event) {
              return ctx.OnToLocationSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, ShiftingComponent_option_101_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Labour Contracter");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "select", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, ShiftingComponent_option_109_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShiftingComponent_Template_button_click_112_listener() {
              return ctx.OnAddClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "ag-grid-angular", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](118, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, " Shifting Detail List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "mtx-grid", 25, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function ShiftingComponent_Template_mtx_grid_dblclick_121_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](122);

              return ctx.onShiftDetailRowDblclick(_r10, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "mat-tab", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "ag-grid-angular", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](61, _c0, ctx.submitted && ctx.f.cbCustomerID.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customerList);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cbCustomerID.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtLotNo.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](34, 58, ctx.todayDate, "yyyy-MM-dd hh:mm:ss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.shift_date.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](63, _c0, ctx.submitted && ctx.f.cbloadingByID.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.loadingByList);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cbloadingByID.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.BalanceStockList)("columns", ctx.BalanceStockColumn)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", true)("hideRowSelectionCheckbox", true)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Detail List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", false)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](65, _c1))("pageIndex", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.StorageAreas);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.labourContractorList);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.ShiftingServiceList)("columnDefs", ctx.serviceColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.ShiftingDetailList)("columns", ctx.ShiftingDetailColumns)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Detail List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", false)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](66, _c1))("pageIndex", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.ShiftingList)("columnDefs", ctx.ShiftingListColumnDefs)("frameworkComponents", ctx.frameworkComponents);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_15__.MtxGridComponent, ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__.AgGridAngular],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      }); //----------------Define Class

      var _ShiftingCharege = /*#__PURE__*/_createClass(function _ShiftingCharege() {
        _classCallCheck(this, _ShiftingCharege);

        this.ShiftingDID = 0;
        this.ServiceID = 0;
        this.ServiceName = "";
        this.Rate = 0;
        this.Rate_L = 0;
      });

      ;

      var _ShiftingCharegeSave = /*#__PURE__*/_createClass(function _ShiftingCharegeSave() {
        _classCallCheck(this, _ShiftingCharegeSave);

        this.ShiftingDID = 0;
        this.ServiceID = 0;
        this.Rate = 0;
        this.Rate_L = 0;
      });

      ;

      var _ShiftingDetailsList = /*#__PURE__*/_createClass(function _ShiftingDetailsList() {
        _classCallCheck(this, _ShiftingDetailsList);

        this.ShiftingDID = 0;
        this.InwardLocationID = 0;
        this.InwardDID = 0;
        this.ProductName = "";
        this.LotNo = "";
        this.BrandName = "";
        this.ItemInPackets = "";
        this.BalanceQuantity = 0;
        this.ShiftingQuantity = 0;
        this.FromLocation = "";
        this.ToLocation = "";
        this.LabourContractor = "";
        this.FromLocationID = 0;
        this.ToLocationID = 0;
        this.LabourContractorID = 0;
      });

      ;

      var _ShiftingDetailSave = /*#__PURE__*/_createClass(function _ShiftingDetailSave() {
        _classCallCheck(this, _ShiftingDetailSave);

        this.ShiftingDID = 0;
        this.InwardLocationID = 0;
        this.LotNo = "";
        this.InwardDID = 0;
        this.FromLocationID = 0;
        this.ToLocationID = 0;
        this.Quantity = 0;
        this.LabourContractorID = 0;
      });

      ;
      /***/
    },

    /***/
    71631:
    /*!**********************************************************************************************!*\
      !*** ./src/app/routes/process/shifting/shiftingedit-button/shiftingedit-button.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShiftingeditButtonComponent": function ShiftingeditButtonComponent() {
          return (
            /* binding */
            _ShiftingeditButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShiftingeditButtonComponent = /*#__PURE__*/function () {
        function _ShiftingeditButtonComponent() {
          _classCallCheck(this, _ShiftingeditButtonComponent);

          this.label = '';
        }

        _createClass(_ShiftingeditButtonComponent, [{
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

        return _ShiftingeditButtonComponent;
      }();

      _ShiftingeditButtonComponent.ɵfac = function ShiftingeditButtonComponent_Factory(t) {
        return new (t || _ShiftingeditButtonComponent)();
      };

      _ShiftingeditButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ShiftingeditButtonComponent,
        selectors: [["app-shiftingedit-button"]],
        decls: 2,
        vars: 0,
        consts: [["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"]],
        template: function ShiftingeditButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShiftingeditButtonComponent_Template_button_click_0_listener($event) {
              return ctx.onClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdGluZ2VkaXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    11430:
    /*!***************************************************************!*\
      !*** ./src/app/routes/process/transfer/transfer.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransferComponent": function TransferComponent() {
          return (
            /* binding */
            _TransferComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _TransferComponent = /*#__PURE__*/function () {
        function _TransferComponent() {
          _classCallCheck(this, _TransferComponent);

          this.tab = 0;
        }

        _createClass(_TransferComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "tabchange",
          value: function tabchange(event) {
            this.tab = event;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {}
        }]);

        return _TransferComponent;
      }();

      _TransferComponent.ɵfac = function TransferComponent_Factory(t) {
        return new (t || _TransferComponent)();
      };

      _TransferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TransferComponent,
        selectors: [["app-transfer"]],
        decls: 7,
        vars: 2,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Shifting"], [3, "formGroup", "ngSubmit"]],
        template: function TransferComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedIndexChange", function TransferComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tabchange($event);
            })("selectedIndexChange", function TransferComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TransferComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit(ctx.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Zlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_routes_process_process_module_ts-es5.js.map