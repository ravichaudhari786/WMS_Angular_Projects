(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_tables_tables_module_ts"], {
    /***/
    45981:
    /*!***********************************************!*\
      !*** ./src/app/routes/tables/data.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesDataService": function TablesDataService() {
          return (
            /* binding */
            _TablesDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-12345678',
        city: 'New York',
        address: '555 Lexington Avenue',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Hydrogen@gmail.com'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        gender: 'male',
        mobile: '13034676675',
        tele: '010-23456781',
        city: 'Shanghai',
        address: '88 Songshan Road',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Helium@gmail.com'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        gender: 'male',
        mobile: '15376892233',
        tele: '010-34567812',
        city: 'Los Angeles',
        address: '48400 Seminole Dr.,Cabazon',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Lithium@gmail.com'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        gender: 'male',
        mobile: '13765443298',
        tele: '010-45678123',
        city: 'Beijing',
        address: 'chaoyang',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Beryllium@gmail.com'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-56781234',
        city: 'Berlin',
        address: 'Bernauer Str.111,13355',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Boron@gmail.com'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        gender: 'male',
        mobile: '13166665432',
        tele: '010-67812345',
        city: 'Madrid',
        address: 'Madrid International Exhibition Center',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Carbon@gmail.com'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        gender: 'male',
        mobile: '15811112222',
        tele: '010-78123456',
        city: 'Sydney',
        address: 'Circular Quay, Sydney NSW 2000',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Nitrogen@gmail.com'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        gender: 'male',
        mobile: '15044558899',
        tele: '010-81234567',
        city: 'Washington',
        address: 'University of Washington',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Oxygen@gmail.com'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        gender: 'male',
        mobile: '13198666677',
        tele: '010-12345678',
        city: 'London',
        address: 'unkown',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Fluorine@gmail.com'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        gender: 'male',
        mobile: '17098765432',
        tele: '010-12345678',
        city: 'Paris',
        address: 'Rue Croix des Petits Champs',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Neon@gmail.com'
      }, {
        position: 11,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        gender: 'male',
        mobile: '13166665432',
        tele: '010-23456781',
        city: 'Madrid',
        address: 'Madrid International Exhibition Center',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Carbon@gmail.com'
      }, {
        position: 12,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        gender: 'male',
        mobile: '15811112222',
        tele: '010-34567812',
        city: 'Sydney',
        address: 'Circular Quay, Sydney NSW 2000',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Nitrogen@gmail.com'
      }, {
        position: 13,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        gender: 'male',
        mobile: '15044558899',
        tele: '010-45678123',
        city: 'Washington',
        address: 'University of Washington',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Oxygen@gmail.com'
      }, {
        position: 14,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        gender: 'male',
        mobile: '13198666677',
        tele: '010-56781234',
        city: 'London',
        address: 'unkown',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Fluorine@gmail.com'
      }, {
        position: 15,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        gender: 'male',
        mobile: '17098765432',
        tele: '010-67812345',
        city: 'Paris',
        address: 'Rue Croix des Petits Champs',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Neon@gmail.com'
      }, {
        position: 16,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-78123456',
        city: 'New York',
        address: '555 Lexington Avenue',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Hydrogen@gmail.com'
      }, {
        position: 17,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        gender: 'male',
        mobile: '13034676675',
        tele: '010-81234567',
        city: 'Shanghai',
        address: '88 Songshan Road',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Helium@gmail.com'
      }, {
        position: 18,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        gender: 'male',
        mobile: '15376892233',
        tele: '010-12345678',
        city: 'Los Angeles',
        address: '48400 Seminole Dr.,Cabazon',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Lithium@gmail.com'
      }, {
        position: 19,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        gender: 'male',
        mobile: '13765443298',
        tele: '010-12345678',
        city: 'Beijing',
        address: 'chaoyang',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Beryllium@gmail.com'
      }, {
        position: 20,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-23456781',
        city: 'Berlin',
        address: 'Bernauer Str.111,13355',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Boron@gmail.com'
      }];

      var _TablesDataService = /*#__PURE__*/function () {
        function _TablesDataService() {
          _classCallCheck(this, _TablesDataService);
        }

        _createClass(_TablesDataService, [{
          key: "getData",
          value: function getData() {
            return ELEMENT_DATA;
          }
        }]);

        return _TablesDataService;
      }();

      _TablesDataService.ɵfac = function TablesDataService_Factory(t) {
        return new (t || _TablesDataService)();
      };

      _TablesDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _TablesDataService,
        factory: _TablesDataService.ɵfac
      });
      /***/
    },

    /***/
    29514:
    /*!*******************************************************************!*\
      !*** ./src/app/routes/tables/kitchen-sink/edit/edit.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesKitchenSinkEditComponent": function TablesKitchenSinkEditComponent() {
          return (
            /* binding */
            _TablesKitchenSinkEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _TablesKitchenSinkEditComponent = /*#__PURE__*/function () {
        function _TablesKitchenSinkEditComponent(dialogRef, data) {
          _classCallCheck(this, _TablesKitchenSinkEditComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(_TablesKitchenSinkEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.dialogRef.close();
          }
        }]);

        return _TablesKitchenSinkEditComponent;
      }();

      _TablesKitchenSinkEditComponent.ɵfac = function TablesKitchenSinkEditComponent_Factory(t) {
        return new (t || _TablesKitchenSinkEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _TablesKitchenSinkEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TablesKitchenSinkEditComponent,
        selectors: [["app-table-kitchen-sink-edit"]],
        decls: 10,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", ""]],
        template: function TablesKitchenSinkEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablesKitchenSinkEditComponent_Template_button_click_6_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.data), "\n");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    78605:
    /*!**********************************************************************!*\
      !*** ./src/app/routes/tables/kitchen-sink/kitchen-sink.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesKitchenSinkComponent": function TablesKitchenSinkComponent() {
          return (
            /* binding */
            _TablesKitchenSinkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data.service */
      45981);
      /* harmony import */


      var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit/edit.component */
      29514);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-matero/extensions/dialog */
      56830);
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      32802);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/radio */
      15644);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      70781);

      function TablesKitchenSinkComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r2.name, "\n");
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 50, 100];
      }; //import { TranslateService } from '@ngx-translate/core';


      var _TablesKitchenSinkComponent = /*#__PURE__*/function () {
        function _TablesKitchenSinkComponent( // private translate: TranslateService,
        dataSrv, dialog, cdr) {
          var _this = this;

          _classCallCheck(this, _TablesKitchenSinkComponent);

          this.dataSrv = dataSrv;
          this.dialog = dialog;
          this.cdr = cdr;
          this.columns = [{
            header: 'Position',
            field: 'position',
            sortable: true,
            minWidth: 100
          }, {
            header: 'name',
            field: 'name',
            sortable: true,
            disabled: true,
            minWidth: 100
          }, {
            header: 'weight',
            field: 'weight',
            minWidth: 100
          }, {
            header: 'symbol',
            field: 'symbol',
            minWidth: 100
          }, {
            header: 'gender',
            field: 'gender',
            minWidth: 100
          }, {
            header: 'mobile',
            field: 'mobile',
            hide: true,
            minWidth: 120
          }, {
            header: 'tele',
            field: 'tele',
            minWidth: 120,
            width: '120px'
          }, {
            header: 'birthday',
            field: 'birthday',
            minWidth: 180
          }, {
            header: 'city',
            field: 'city',
            minWidth: 120
          }, {
            header: 'address',
            field: 'address',
            minWidth: 180,
            width: '200px'
          }, {
            header: 'company',
            field: 'company',
            minWidth: 120
          }, {
            header: 'website',
            field: 'website',
            minWidth: 180
          }, {
            header: 'email',
            field: 'email',
            minWidth: 180
          }, {
            header: 'operation',
            field: 'operation',
            minWidth: 120,
            width: '120px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'edit',
              click: function click(record) {
                return _this.edit(record);
              }
            }, {
              color: 'warn',
              icon: 'delete',
              text: 'delete',
              tooltip: 'delete',
              pop: true,
              popTitle: 'confirm_delete',
              popCloseText: 'close',
              popOkText: 'ok',
              click: function click(record) {
                return _this["delete"](record);
              }
            }]
          }];
          this.list = [];
          this.isLoading = true;
          this.multiSelectable = true;
          this.rowSelectable = true;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = false;
          this.rowStriped = false;
          this.showPaginator = true;
          this.expandable = false;
          this.columnResizable = false;
        }

        _createClass(_TablesKitchenSinkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.list = this.dataSrv.getData();
            this.isLoading = false;
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var dialogRef = this.dialog.originalOpen(_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.TablesKitchenSinkEditComponent, {
              width: '600px',
              data: {
                record: value
              }
            });
            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            this.dialog.alert("You have deleted ".concat(value.position, "!"));
          }
        }, {
          key: "changeSelect",
          value: function changeSelect(e) {
            console.log(e);
          }
        }, {
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "enableRowExpandable",
          value: function enableRowExpandable() {
            this.columns[0].showExpand = this.expandable;
          }
        }, {
          key: "updateCell",
          value: function updateCell() {
            this.list = this.list.map(function (item) {
              item.weight = Math.round(Math.random() * 1000) / 100;
              return item;
            });
          }
        }, {
          key: "updateList",
          value: function updateList() {
            this.list = this.list.splice(-1).concat(this.list);
          }
        }]);

        return _TablesKitchenSinkComponent;
      }();

      _TablesKitchenSinkComponent.ɵfac = function TablesKitchenSinkComponent_Factory(t) {
        return new (t || _TablesKitchenSinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.TablesDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_4__.MtxDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
      };

      _TablesKitchenSinkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _TablesKitchenSinkComponent,
        selectors: [["app-table-kitchen-sink"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_0__.TablesDataService])],
        decls: 39,
        vars: 35,
        consts: [[1, "bg-green-600"], [1, "data-grid-options"], [3, "ngModel", "ngModelChange"], [3, "value"], [3, "ngModel", "ngModelChange", "change"], ["href", "#", "target", "_blank"], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""], ["mat-stroked-button", "", 3, "click"]],
        template: function TablesKitchenSinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_2_listener($event) {
              return ctx.rowSelectable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Row Selectable");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_4_listener($event) {
              return ctx.hideRowSelectionCheckbox = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Hide checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_radio_group_ngModelChange_6_listener($event) {
              return ctx.multiSelectable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Single Selectable");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Multiple Selectable");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_11_listener($event) {
              return ctx.showToolbar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Show Toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_13_listener($event) {
              return ctx.columnHideable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Column Hiding");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_15_listener($event) {
              return ctx.columnMovable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Column Moving");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_17_listener($event) {
              return ctx.rowHover = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_19_listener($event) {
              return ctx.rowStriped = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_21_listener($event) {
              return ctx.expandable = $event;
            })("change", function TablesKitchenSinkComponent_Template_mat_checkbox_change_21_listener() {
              return ctx.enableRowExpandable();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Row Expandable ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_23_listener($event) {
              return ctx.showPaginator = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Show Paginator");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_25_listener($event) {
              return ctx.isLoading = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Loading Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_27_listener($event) {
              return ctx.columnResizable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Column Resizable");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " View more examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mtx-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function TablesKitchenSinkComponent_Template_mtx_grid_sortChange_32_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function TablesKitchenSinkComponent_Template_mtx_grid_selectionChange_32_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, TablesKitchenSinkComponent_ng_template_33_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TablesKitchenSinkComponent_Template_button_click_35_listener() {
              return ctx.updateCell();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Update Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TablesKitchenSinkComponent_Template_button_click_37_listener() {
              return ctx.updateList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Update List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.rowSelectable);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.hideRowSelectionCheckbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.multiSelectable);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.showToolbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.columnHideable);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.columnMovable);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.rowHover);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.rowStriped);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.expandable);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.showPaginator);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.columnResizable);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Data Grid Toolbar")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](34, _c0))("pageIndex", 0)("pageSize", 5);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioButton, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton],
        styles: [".data-grid-options[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%], .data-grid-options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-checkbox, [dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-group {\n  margin-right: auto;\n  margin-left: 8px;\n}\n.data-grid-options[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-button {\n  margin-right: auto;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtpdGNoZW4tc2luay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxpQkFBQTtBQUFKO0FBRUk7O0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNOO0FBR0U7RUFDRSxpQkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBRE4iLCJmaWxlIjoia2l0Y2hlbi1zaW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGEtZ3JpZC1vcHRpb25zIHtcclxuICAubWF0LWNoZWNrYm94LFxyXG4gIC5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gOmhvc3QgOjpuZy1kZWVwICYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSA6aG9zdCA6Om5nLWRlZXAgJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    25946:
    /*!********************************************************!*\
      !*** ./src/app/routes/tables/tables-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableRoutingModule": function TableRoutingModule() {
          return (
            /* binding */
            _TableRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./kitchen-sink/kitchen-sink.component */
      78605);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'sample-table',
        component: _kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_0__.TablesKitchenSinkComponent
      }];

      var _TableRoutingModule = /*#__PURE__*/_createClass(function _TableRoutingModule() {
        _classCallCheck(this, _TableRoutingModule);
      });

      _TableRoutingModule.ɵfac = function TableRoutingModule_Factory(t) {
        return new (t || _TableRoutingModule)();
      };

      _TableRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _TableRoutingModule
      });
      _TableRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_TableRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    31926:
    /*!************************************************!*\
      !*** ./src/app/routes/tables/tables.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesModule": function TablesModule() {
          return (
            /* binding */
            _TablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tables-routing.module */
      25946);
      /* harmony import */


      var _kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./kitchen-sink/kitchen-sink.component */
      78605);
      /* harmony import */


      var _kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./kitchen-sink/edit/edit.component */
      29514);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var COMPONENTS = [_kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_2__.TablesKitchenSinkComponent];
      var COMPONENTS_DYNAMIC = [_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__.TablesKitchenSinkEditComponent];

      var _TablesModule = /*#__PURE__*/_createClass(function _TablesModule() {
        _classCallCheck(this, _TablesModule);
      });

      _TablesModule.ɵfac = function TablesModule_Factory(t) {
        return new (t || _TablesModule)();
      };

      _TablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _TablesModule
      });
      _TablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__.TableRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_TablesModule, {
          declarations: [_kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_2__.TablesKitchenSinkComponent, _kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__.TablesKitchenSinkEditComponent],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__.TableRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_routes_tables_tables_module_ts-es5.js.map