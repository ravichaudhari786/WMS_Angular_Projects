(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_generic-master_generic-master_module_ts"], {
    /***/
    99706:
    /*!******************************************************************************!*\
      !*** ./src/app/routes/generic-master/count-master/count-master.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountMasterComponent": function CountMasterComponent() {
          return (
            /* binding */
            _CountMasterComponent
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-matero/extensions */
      56830);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);

      function CountMasterComponent_div_11_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CountMasterComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CountMasterComponent_div_11_span_1_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtCountName == null ? null : ctx_r0.f.txtCountName.errors == null ? null : ctx_r0.f.txtCountName.errors.required);
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

      var _CountMasterComponent = /*#__PURE__*/function () {
        function _CountMasterComponent(fb, api, dialog) {
          var _this = this;

          _classCallCheck(this, _CountMasterComponent);

          this.fb = fb;
          this.api = api;
          this.dialog = dialog;
          this.submitted = false;
          this.Reseted = false;
          this.HideSaveButton = true;
          this.CountsID = 0;
          this.UserID = 0;
          this.CountListcolumns = [{
            header: "Action",
            field: 'Action',
            minWidth: 90,
            width: '90px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'Edit',
              click: function click(record) {
                return _this.editCount(record);
              }
            }]
          }, {
            header: 'CountID',
            field: 'CountID',
            sortable: true,
            minWidth: 250
          }, {
            header: 'Counts',
            field: 'Counts',
            sortable: true,
            minWidth: 250
          }, {
            header: 'IsActive',
            field: 'IsActive',
            sortable: true,
            minWidth: 120
          }, {
            header: 'CreatedBy',
            field: 'CreatedBy',
            sortable: true,
            minWidth: 170
          }, {
            header: 'CreatedDate',
            field: 'CreatedDate',
            sortable: true,
            minWidth: 170
          }];
          this.UserID = api.getUserID();
          this.currentUser = this.api.getCurrentUser();
        }

        _createClass(_CountMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              txtCountName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              chIsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
            this.BindinfDataToList();
          }
        }, {
          key: "BindinfDataToList",
          value: function BindinfDataToList() {
            var _this2 = this;

            this.api.get('/CountMaster/CountMaster_Select').subscribe(function (data) {
              _this2.countList = data;
            }, function (error) {
              console.error(error);
            });
            this.HideSaveButton = true;
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            var _this3 = this;

            console.log(formData.value);
            console.log(this.form);
            this.submitted = true;

            if (this.form.invalid) {
              return;
            } else {
              //this.form.setValidators(Validators.required);
              var count = {
                CountID: this.CountsID,
                Counts: this.form.value.txtCountName,
                IsActive: this.form.value.chIsActive,
                CreatedBy: this.currentUser.userId
              };
              this.api.post('/CountMaster/CountMaster_Insert_Update', count).subscribe(function (data) {
                _this3.dialog.alert(data[0], ''); // //this.form.controls['txtCountName'].setErrors(null);
                // this.form.controls['txtCountName'].clearValidators();
                // this.form.controls['txtCountName'].setValue('');


                _this3.BindinfDataToList(); //
                // this.form.controls['chIsActive'].setErrors(null);


                _this3.form.reset();

                _this3.form.invalid; // this.ngOnInit();

                console.log("form", _this3.form.value);
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.CountsID = 0;
            this.submitted = false;
            this.HideSaveButton = true;
            this.form.controls['chIsActive'].setValue(true);
            this.BindinfDataToList();
          }
        }, {
          key: "editCount",
          value: function editCount(record) {
            this.HideSaveButton = true;
            this.CountsID = record.CountID;
            var item = {
              txtCountName: record.Counts,
              chIsActive: record.IsActive
            };
            console.log("item", item);
            this.form.setValue(item);
          }
        }]);

        return _CountMasterComponent;
      }();

      _CountMasterComponent.ɵfac = function CountMasterComponent_Factory(t) {
        return new (t || _CountMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog));
      };

      _CountMasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CountMasterComponent,
        selectors: [["app-count-master"]],
        decls: 26,
        vars: 27,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Count Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtCountName", "id", "txtCountName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-6"], ["type", "checkbox", "formControlName", "chIsActive", "id", "chIsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], [2, "height", "300px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridlist", ""], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function CountMasterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CountMasterComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit(ctx.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Count");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CountMasterComponent_div_11_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Is Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "mtx-grid", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.txtCountName.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtCountName.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.countList)("columns", ctx.CountListcolumns)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", true)("toolbarTitle", "Count List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", true)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c1))("pageIndex", 0)("pageSize", 0);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    32629:
    /*!****************************************************************************************!*\
      !*** ./src/app/routes/generic-master/department-master/department-master.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepartmentMasterComponent": function DepartmentMasterComponent() {
          return (
            /* binding */
            _DepartmentMasterComponent
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-matero/extensions */
      56830);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);

      function DepartmentMasterComponent_div_11_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Department Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function DepartmentMasterComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DepartmentMasterComponent_div_11_span_1_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtDepartmentName == null ? null : ctx_r0.f.txtDepartmentName.errors == null ? null : ctx_r0.f.txtDepartmentName.errors.required);
        }
      }

      function DepartmentMasterComponent_div_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Department Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function DepartmentMasterComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DepartmentMasterComponent_div_19_span_1_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.txtDepartmentCode == null ? null : ctx_r1.f.txtDepartmentCode.errors == null ? null : ctx_r1.f.txtDepartmentCode.errors.required);
        }
      }

      function DepartmentMasterComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 20);
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

      var _DepartmentMasterComponent = /*#__PURE__*/function () {
        function _DepartmentMasterComponent(fb, api, dialog) {
          var _this4 = this;

          _classCallCheck(this, _DepartmentMasterComponent);

          this.fb = fb;
          this.api = api;
          this.dialog = dialog;
          this.submitted = false;
          this.Reseted = false;
          this.HideSaveButton = true;
          this.DeptID = 0;
          this.UserID = 0;
          this.columns = [{
            header: "Action",
            field: 'Action',
            minWidth: 90,
            width: '90px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'Edit',
              click: function click(record) {
                return _this4.editDepartment(record);
              }
            }]
          }, {
            header: 'DepartmentID',
            field: 'DepartmentID',
            sortable: true,
            minWidth: 250
          }, {
            header: 'DepartmentName',
            field: 'DepartmentName',
            sortable: true,
            minWidth: 250
          }, {
            header: 'DepartmentCode',
            field: 'DepartmentCode',
            sortable: true,
            minWidth: 250
          }, {
            header: 'IsActive',
            field: 'IsActive',
            sortable: true,
            minWidth: 120
          }];
          this.UserID = api.getUserID();
          this.currentUser = this.api.getCurrentUser();
        }

        _createClass(_DepartmentMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              txtDepartmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              txtDepartmentCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              chIsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
            this.BindinfDataToList();
          }
        }, {
          key: "BindinfDataToList",
          value: function BindinfDataToList() {
            var _this5 = this;

            this.api.get('/Department/Department_Select').subscribe(function (data) {
              _this5.DepartmentList = data;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            var _this6 = this;

            this.submitted = true;

            if (this.form.invalid) {
              return;
            } else {
              this.HideSaveButton = true;
            }

            var Department = {
              DepartmentID: this.DeptID,
              DepartmentName: this.form.value.txtDepartmentName,
              DepartmentCode: this.form.value.txtDepartmentCode,
              IsActive: this.form.value.chIsActive
            };
            console.log("Department", Department);
            this.api.post('/Department/Department_Insert_Update', Department).subscribe(function (data) {
              _this6.dialog.alert(data[0], '', function () {
                window.location.reload();
              });

              _this6.onReset();

              _this6.BindinfDataToList();
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.DeptID = 0;
            this.submitted = false;
            this.HideSaveButton = true;
            this.form.controls['chIsActive'].setValue(true);
            this.BindinfDataToList();
          }
        }, {
          key: "editDepartment",
          value: function editDepartment(record) {
            this.HideSaveButton = true;
            console.log(record);
            this.DeptID = record.DepartmentID;
            var item = {
              txtDepartmentName: record.DepartmentName,
              txtDepartmentCode: record.DepartmentCode,
              chIsActive: record.IsActive
            };
            console.log("item", item);
            this.form.setValue(item);
          }
        }]);

        return _DepartmentMasterComponent;
      }();

      _DepartmentMasterComponent.ɵfac = function DepartmentMasterComponent_Factory(t) {
        return new (t || _DepartmentMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog));
      };

      _DepartmentMasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DepartmentMasterComponent,
        selectors: [["app-department-master"]],
        decls: 35,
        vars: 31,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Department Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtDepartmentName", "id", "txtDepartmentName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "autocomplete", "off", "formControlName", "txtDepartmentCode", "id", "txtDepartmentCode", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-6"], ["type", "checkbox", "formControlName", "chIsActive", "id", "chIsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], ["toolbarTpl", ""], [2, "height", "300px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridlist", ""], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Search"]],
        template: function DepartmentMasterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DepartmentMasterComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit(ctx.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Department Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DepartmentMasterComponent_div_11_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Department Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DepartmentMasterComponent_div_19_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Is Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DepartmentMasterComponent_ng_template_29_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "mtx-grid", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.txtDepartmentName.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtDepartmentName.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.txtDepartmentCode.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtDepartmentCode.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.DepartmentList)("columns", ctx.columns)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", true)("toolbarTitle", "Department List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", true)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c1))("pageIndex", 0)("pageSize", 0);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    14641:
    /*!******************************************************************************************!*\
      !*** ./src/app/routes/generic-master/designation-master/designation-master.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignationMasterComponent": function DesignationMasterComponent() {
          return (
            /* binding */
            _DesignationMasterComponent
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-matero/extensions */
      56830);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);

      function DesignationMasterComponent_div_11_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Designation Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function DesignationMasterComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignationMasterComponent_div_11_span_1_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtDesignationName == null ? null : ctx_r0.f.txtDesignationName.errors == null ? null : ctx_r0.f.txtDesignationName.errors.required);
        }
      }

      function DesignationMasterComponent_div_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Designation Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function DesignationMasterComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignationMasterComponent_div_19_span_1_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.txtDesignationCode == null ? null : ctx_r1.f.txtDesignationCode.errors == null ? null : ctx_r1.f.txtDesignationCode.errors.required);
        }
      }

      function DesignationMasterComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 20);
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

      var _DesignationMasterComponent = /*#__PURE__*/function () {
        function _DesignationMasterComponent(fb, api, dialog) {
          var _this7 = this;

          _classCallCheck(this, _DesignationMasterComponent);

          this.fb = fb;
          this.api = api;
          this.dialog = dialog;
          this.submitted = false;
          this.Reseted = false;
          this.HideSaveButton = true;
          this.DesigID = 0;
          this.UserID = 0;
          this.columns = [{
            header: "Action",
            field: 'Action',
            minWidth: 90,
            width: '90px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'Edit',
              click: function click(record) {
                return _this7.editDesignation(record);
              }
            }]
          }, {
            header: 'DesignationID',
            field: 'DesignationID',
            sortable: true,
            minWidth: 250
          }, {
            header: 'DesignationName',
            field: 'DesignationName',
            sortable: true,
            minWidth: 250
          }, {
            header: 'DesignationCode',
            field: 'DesignationCode',
            sortable: true,
            minWidth: 250
          }, {
            header: 'IsActive',
            field: 'IsActive',
            sortable: true,
            minWidth: 120
          }];
          this.UserID = api.getUserID();
          this.currentUser = this.api.getCurrentUser();
        }

        _createClass(_DesignationMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              txtDesignationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              txtDesignationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              chIsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
            this.BindinfDataToList();
          }
        }, {
          key: "BindinfDataToList",
          value: function BindinfDataToList() {
            var _this8 = this;

            this.api.get('/Designation/Designation_Select').subscribe(function (data) {
              _this8.DesignationList = data;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            var _this9 = this;

            this.submitted = true;

            if (this.form.invalid) {
              return;
            } else {
              this.HideSaveButton = true;
              var Designation = {
                DesignationID: this.DesigID,
                DesignationName: this.form.value.txtDesignationName,
                DesignationCode: this.form.value.txtDesignationCode,
                IsActive: this.form.value.chIsActive
              };
              this.api.post('/Designation/Designation_Insert_Update', Designation).subscribe(function (data) {
                _this9.dialog.alert(data[0], '', function () {
                  window.location.reload();
                });

                _this9.onReset();

                _this9.BindinfDataToList();
              }, function (error) {
                console.error(error);
              });
            }
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.DesigID = 0;
            this.submitted = false;
            this.HideSaveButton = true;
            this.form.controls['chIsActive'].setValue(true);
            this.BindinfDataToList();
          }
        }, {
          key: "editDesignation",
          value: function editDesignation(record) {
            this.HideSaveButton = true;
            console.log(record);
            this.DesigID = record.DesignationID;
            var item = {
              txtDesignationName: record.DesignationName,
              txtDesignationCode: record.DesignationCode,
              chIsActive: record.IsActive
            };
            this.form.setValue(item);
          }
        }]);

        return _DesignationMasterComponent;
      }();

      _DesignationMasterComponent.ɵfac = function DesignationMasterComponent_Factory(t) {
        return new (t || _DesignationMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog));
      };

      _DesignationMasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DesignationMasterComponent,
        selectors: [["app-Designation-master"]],
        decls: 35,
        vars: 31,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Designation Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtDesignationName", "id", "txtDesignationName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "autocomplete", "off", "formControlName", "txtDesignationCode", "id", "txtDesignationCode", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-6"], ["type", "checkbox", "formControlName", "chIsActive", "id", "chIsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], ["toolbarTpl", ""], [2, "height", "300px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridlist", ""], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Search"]],
        template: function DesignationMasterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DesignationMasterComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit(ctx.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Designation Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DesignationMasterComponent_div_11_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Designation Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DesignationMasterComponent_div_19_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Is Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DesignationMasterComponent_ng_template_29_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "mtx-grid", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.txtDesignationName.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtDesignationName.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.txtDesignationCode.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtDesignationCode.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.DesignationList)("columns", ctx.columns)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", false)("hideRowSelectionCheckbox", false)("rowHover", true)("rowStriped", false)("showToolbar", true)("toolbarTitle", "Designation List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", true)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c1))("pageIndex", 0)("pageSize", 0);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJEZXNpZ25hdGlvbi1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    14877:
    /*!************************************************************************!*\
      !*** ./src/app/routes/generic-master/generic-master-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GenericMasterRoutingModule": function GenericMasterRoutingModule() {
          return (
            /* binding */
            _GenericMasterRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _count_master_count_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./count-master/count-master.component */
      99706);
      /* harmony import */


      var _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./department-master/department-master.component */
      32629);
      /* harmony import */


      var _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./designation-master/designation-master.component */
      14641);
      /* harmony import */


      var _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./item-type-master/item-type-master.component */
      43317);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "CountMaster",
        component: _count_master_count_master_component__WEBPACK_IMPORTED_MODULE_0__.CountMasterComponent
      }, {
        path: "DepartmentMaster",
        component: _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_1__.DepartmentMasterComponent
      }, {
        path: "DesignationMaster",
        component: _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_2__.DesignationMasterComponent
      }, {
        path: "Item Type Master",
        component: _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_3__.ItemTypeMasterComponent
      }];

      var _GenericMasterRoutingModule = /*#__PURE__*/_createClass(function _GenericMasterRoutingModule() {
        _classCallCheck(this, _GenericMasterRoutingModule);
      });

      _GenericMasterRoutingModule.ɵfac = function GenericMasterRoutingModule_Factory(t) {
        return new (t || _GenericMasterRoutingModule)();
      };

      _GenericMasterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _GenericMasterRoutingModule
      });
      _GenericMasterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_GenericMasterRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    17500:
    /*!****************************************************************!*\
      !*** ./src/app/routes/generic-master/generic-master.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GenericMasterModule": function GenericMasterModule() {
          return (
            /* binding */
            _GenericMasterModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);
      /* harmony import */


      var _generic_master_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./generic-master-routing.module */
      14877);
      /* harmony import */


      var _count_master_count_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./count-master/count-master.component */
      99706);
      /* harmony import */


      var _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./department-master/department-master.component */
      32629);
      /* harmony import */


      var _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./designation-master/designation-master.component */
      14641);
      /* harmony import */


      var _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./item-type-master/item-type-master.component */
      43317);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _GenericMasterModule = /*#__PURE__*/_createClass(function _GenericMasterModule() {
        _classCallCheck(this, _GenericMasterModule);
      });

      _GenericMasterModule.ɵfac = function GenericMasterModule_Factory(t) {
        return new (t || _GenericMasterModule)();
      };

      _GenericMasterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _GenericMasterModule
      });
      _GenericMasterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _generic_master_routing_module__WEBPACK_IMPORTED_MODULE_1__.GenericMasterRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_GenericMasterModule, {
          declarations: [_count_master_count_master_component__WEBPACK_IMPORTED_MODULE_2__.CountMasterComponent, _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentMasterComponent, _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_4__.DesignationMasterComponent, _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_5__.ItemTypeMasterComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _generic_master_routing_module__WEBPACK_IMPORTED_MODULE_1__.GenericMasterRoutingModule]
        });
      })();
      /***/

    },

    /***/
    43317:
    /*!**************************************************************************************!*\
      !*** ./src/app/routes/generic-master/item-type-master/item-type-master.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemTypeMasterComponent": function ItemTypeMasterComponent() {
          return (
            /* binding */
            _ItemTypeMasterComponent
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-matero/extensions */
      56830);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      23942);

      function ItemTypeMasterComponent_div_11_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Item Type Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ItemTypeMasterComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemTypeMasterComponent_div_11_span_1_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtItemTypeCode == null ? null : ctx_r0.f.txtItemTypeCode.errors == null ? null : ctx_r0.f.txtItemTypeCode.errors.required);
        }
      }

      function ItemTypeMasterComponent_div_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Item Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ItemTypeMasterComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemTypeMasterComponent_div_19_span_1_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.txtItemType == null ? null : ctx_r1.f.txtItemType.errors == null ? null : ctx_r1.f.txtItemType.errors.required);
        }
      }

      function ItemTypeMasterComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 18);
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

      var _ItemTypeMasterComponent = /*#__PURE__*/function () {
        function _ItemTypeMasterComponent(fb, api, dialog) {
          var _this10 = this;

          _classCallCheck(this, _ItemTypeMasterComponent);

          this.fb = fb;
          this.api = api;
          this.dialog = dialog;
          this.submitted = false;
          this.Reseted = false;
          this.HideSaveButton = true;
          this.ItemTpID = 0;
          this.UserID = 0;
          this.columns = [{
            header: "Action",
            field: 'Action',
            minWidth: 90,
            width: '90px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'Edit',
              click: function click(record) {
                return _this10.editItemType(record);
              }
            }]
          }, {
            header: 'ItemTypeID',
            field: 'ItemTypeID',
            sortable: true,
            minWidth: 250
          }, {
            header: 'ItemType',
            field: 'ItemType',
            sortable: true,
            minWidth: 250
          }, {
            header: 'ItemTypeCode',
            field: 'ItemTypeCode',
            sortable: true,
            minWidth: 250
          }];
          this.UserID = api.getUserID();
          this.currentUser = this.api.getCurrentUser();
        }

        _createClass(_ItemTypeMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              //ItemTypeID: [null, Validators.required],
              txtItemTypeCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              txtItemType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
            this.BindinfDataToList();
          }
        }, {
          key: "BindinfDataToList",
          value: function BindinfDataToList() {
            var _this11 = this;

            this.api.get('/ItemTypeMaster/ItemTypeMaster_Select').subscribe(function (data) {
              _this11.ItemTypeList = data;
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            var _this12 = this;

            this.submitted = true;

            if (this.form.invalid) {
              return;
            } else {
              this.HideSaveButton = true;
            }

            var Item = {
              ItemTypeID: this.ItemTpID,
              ItemTypeCode: this.form.value.txtItemTypeCode,
              ItemType: this.form.value.txtItemType
            };
            console.log("Item", Item);
            this.api.post('/ItemTypeMaster/ItemTypeMaster_Insert_Update', Item).subscribe(function (data) {
              _this12.dialog.alert(data[0], '', function () {
                window.location.reload();
              });

              _this12.onReset();

              _this12.BindinfDataToList();
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.ItemTpID = 0;
            this.submitted = false;
            this.HideSaveButton = true;
            this.BindinfDataToList();
          }
        }, {
          key: "editItemType",
          value: function editItemType(record) {
            this.HideSaveButton = true;
            console.log(record);
            this.ItemTpID = record.ItemTypeID;
            var item = {
              txtItemType: record.ItemType,
              txtItemTypeCode: record.ItemTypeCode
            };
            console.log("item", item);
            this.form.setValue(item);
          }
        }]);

        return _ItemTypeMasterComponent;
      }();

      _ItemTypeMasterComponent.ɵfac = function ItemTypeMasterComponent_Factory(t) {
        return new (t || _ItemTypeMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog));
      };

      _ItemTypeMasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ItemTypeMasterComponent,
        selectors: [["app-item-type-master"]],
        decls: 30,
        vars: 31,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Item Type Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtItemTypeCode", "id", "txtItemTypeCode", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "autocomplete", "off", "formControlName", "txtItemType", "id", "txtItemType", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridPendingDOdList", ""], ["toolbarTpl", ""], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Search"]],
        template: function ItemTypeMasterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ItemTypeMasterComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit(ctx.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Item Type Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ItemTypeMasterComponent_div_11_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Item Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ItemTypeMasterComponent_div_19_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mtx-grid", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ItemTypeMasterComponent_ng_template_28_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.txtItemTypeCode.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtItemTypeCode.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.txtItemType.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtItemType.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.ItemTypeList)("columns", ctx.columns)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", true)("hideRowSelectionCheckbox", true)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Detail List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", true)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c1))("pageIndex", 0)("pageSize", 0);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLXR5cGUtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_routes_generic-master_generic-master_module_ts-es5.js.map