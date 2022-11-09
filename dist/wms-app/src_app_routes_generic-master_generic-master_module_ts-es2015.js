"use strict";
(self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_generic-master_generic-master_module_ts"],{

/***/ 99706:
/*!******************************************************************************!*\
  !*** ./src/app/routes/generic-master/count-master/count-master.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountMasterComponent": function() { return /* binding */ CountMasterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ 23942);












function CountMasterComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CountMasterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CountMasterComponent_div_11_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtCountName == null ? null : ctx_r0.f.txtCountName.errors == null ? null : ctx_r0.f.txtCountName.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return [10, 20, 50, 100, 500]; };
class CountMasterComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.submitted = false;
        this.Reseted = false;
        this.HideSaveButton = true;
        this.CountsID = 0;
        this.UserID = 0;
        this.CountListcolumns = [
            {
                header: "Action",
                field: 'Action',
                minWidth: 90,
                width: '90px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        icon: 'edit',
                        tooltip: 'Edit',
                        click: record => this.editCount(record),
                    }
                ]
            },
            {
                header: 'CountID',
                field: 'CountID',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'Counts',
                field: 'Counts',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'IsActive',
                field: 'IsActive',
                sortable: true,
                minWidth: 120
            },
            {
                header: 'CreatedBy',
                field: 'CreatedBy',
                sortable: true,
                minWidth: 170
            },
            {
                header: 'CreatedDate',
                field: 'CreatedDate',
                sortable: true,
                minWidth: 170,
            }
        ];
        this.UserID = api.getUserID();
        this.currentUser = this.api.getCurrentUser();
    }
    ngOnInit() {
        this.form = this.fb.group({
            txtCountName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            chIsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.BindinfDataToList();
    }
    BindinfDataToList() {
        this.api.get('/CountMaster/CountMaster_Select').subscribe(data => {
            this.countList = data;
        }, error => { console.error(error); });
        this.HideSaveButton = true;
    }
    get f() { return this.form.controls; }
    onSubmit(formData) {
        console.log(formData.value);
        console.log(this.form);
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else {
            //this.form.setValidators(Validators.required);
            const count = {
                CountID: this.CountsID,
                Counts: this.form.value.txtCountName,
                IsActive: this.form.value.chIsActive,
                CreatedBy: this.currentUser.userId
            };
            this.api.post('/CountMaster/CountMaster_Insert_Update', count).subscribe(data => {
                this.dialog.alert(data[0], '');
                // //this.form.controls['txtCountName'].setErrors(null);
                // this.form.controls['txtCountName'].clearValidators();
                // this.form.controls['txtCountName'].setValue('');
                this.BindinfDataToList();
                //
                // this.form.controls['chIsActive'].setErrors(null);
                this.form.reset();
                this.form.invalid;
                // this.ngOnInit();
                console.log("form", this.form.value);
            }, error => { console.error(error); });
        }
    }
    onReset() {
        this.form.reset();
        this.CountsID = 0;
        this.submitted = false;
        this.HideSaveButton = true;
        this.form.controls['chIsActive'].setValue(true);
        this.BindinfDataToList();
    }
    editCount(record) {
        this.HideSaveButton = true;
        this.CountsID = record.CountID;
        const item = {
            txtCountName: record.Counts,
            chIsActive: record.IsActive,
        };
        console.log("item", item);
        this.form.setValue(item);
    }
}
CountMasterComponent.ɵfac = function CountMasterComponent_Factory(t) { return new (t || CountMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog)); };
CountMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CountMasterComponent, selectors: [["app-count-master"]], decls: 26, vars: 27, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Count Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtCountName", "id", "txtCountName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-6"], ["type", "checkbox", "formControlName", "chIsActive", "id", "chIsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], [2, "height", "300px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridlist", ""], [1, "invalid-feedback"], [4, "ngIf"]], template: function CountMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CountMasterComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.form); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 32629:
/*!****************************************************************************************!*\
  !*** ./src/app/routes/generic-master/department-master/department-master.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentMasterComponent": function() { return /* binding */ DepartmentMasterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ 23942);












function DepartmentMasterComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Department Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DepartmentMasterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DepartmentMasterComponent_div_11_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtDepartmentName == null ? null : ctx_r0.f.txtDepartmentName.errors == null ? null : ctx_r0.f.txtDepartmentName.errors.required);
} }
function DepartmentMasterComponent_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Department Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DepartmentMasterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DepartmentMasterComponent_div_19_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.txtDepartmentCode == null ? null : ctx_r1.f.txtDepartmentCode.errors == null ? null : ctx_r1.f.txtDepartmentCode.errors.required);
} }
function DepartmentMasterComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 20);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return [10, 20, 50, 100, 500]; };
class DepartmentMasterComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.submitted = false;
        this.Reseted = false;
        this.HideSaveButton = true;
        this.DeptID = 0;
        this.UserID = 0;
        this.columns = [
            {
                header: "Action",
                field: 'Action',
                minWidth: 90,
                width: '90px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        icon: 'edit',
                        tooltip: 'Edit',
                        click: record => this.editDepartment(record),
                    }
                ]
            },
            {
                header: 'DepartmentID',
                field: 'DepartmentID',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'DepartmentName',
                field: 'DepartmentName',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'DepartmentCode',
                field: 'DepartmentCode',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'IsActive',
                field: 'IsActive',
                sortable: true,
                minWidth: 120
            }
        ];
        this.UserID = api.getUserID();
        this.currentUser = this.api.getCurrentUser();
    }
    ngOnInit() {
        this.form = this.fb.group({
            txtDepartmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            txtDepartmentCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            chIsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.BindinfDataToList();
    }
    BindinfDataToList() {
        this.api.get('/Department/Department_Select').subscribe(data => {
            this.DepartmentList = data;
        }, error => { console.error(error); });
    }
    get f() { return this.form.controls; }
    onSubmit(formData) {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else {
            this.HideSaveButton = true;
        }
        const Department = {
            DepartmentID: this.DeptID,
            DepartmentName: this.form.value.txtDepartmentName,
            DepartmentCode: this.form.value.txtDepartmentCode,
            IsActive: this.form.value.chIsActive,
        };
        console.log("Department", Department);
        this.api.post('/Department/Department_Insert_Update', Department).subscribe(data => {
            this.dialog.alert(data[0], '', () => { window.location.reload(); });
            this.onReset();
            this.BindinfDataToList();
        }, error => { console.error(error); });
    }
    onReset() {
        this.form.reset();
        this.DeptID = 0;
        this.submitted = false;
        this.HideSaveButton = true;
        this.form.controls['chIsActive'].setValue(true);
        this.BindinfDataToList();
    }
    editDepartment(record) {
        this.HideSaveButton = true;
        console.log(record);
        this.DeptID = record.DepartmentID;
        const item = {
            txtDepartmentName: record.DepartmentName,
            txtDepartmentCode: record.DepartmentCode,
            chIsActive: record.IsActive,
        };
        console.log("item", item);
        this.form.setValue(item);
    }
}
DepartmentMasterComponent.ɵfac = function DepartmentMasterComponent_Factory(t) { return new (t || DepartmentMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog)); };
DepartmentMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DepartmentMasterComponent, selectors: [["app-department-master"]], decls: 35, vars: 31, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Department Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtDepartmentName", "id", "txtDepartmentName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "autocomplete", "off", "formControlName", "txtDepartmentCode", "id", "txtDepartmentCode", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-6"], ["type", "checkbox", "formControlName", "chIsActive", "id", "chIsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], ["toolbarTpl", ""], [2, "height", "300px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridlist", ""], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Search"]], template: function DepartmentMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DepartmentMasterComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.form); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 14641:
/*!******************************************************************************************!*\
  !*** ./src/app/routes/generic-master/designation-master/designation-master.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignationMasterComponent": function() { return /* binding */ DesignationMasterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ 23942);












function DesignationMasterComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Designation Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DesignationMasterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignationMasterComponent_div_11_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtDesignationName == null ? null : ctx_r0.f.txtDesignationName.errors == null ? null : ctx_r0.f.txtDesignationName.errors.required);
} }
function DesignationMasterComponent_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Designation Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DesignationMasterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignationMasterComponent_div_19_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.txtDesignationCode == null ? null : ctx_r1.f.txtDesignationCode.errors == null ? null : ctx_r1.f.txtDesignationCode.errors.required);
} }
function DesignationMasterComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 20);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return [10, 20, 50, 100, 500]; };
class DesignationMasterComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.submitted = false;
        this.Reseted = false;
        this.HideSaveButton = true;
        this.DesigID = 0;
        this.UserID = 0;
        this.columns = [
            {
                header: "Action",
                field: 'Action',
                minWidth: 90,
                width: '90px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        icon: 'edit',
                        tooltip: 'Edit',
                        click: record => this.editDesignation(record),
                    }
                ]
            },
            {
                header: 'DesignationID',
                field: 'DesignationID',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'DesignationName',
                field: 'DesignationName',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'DesignationCode',
                field: 'DesignationCode',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'IsActive',
                field: 'IsActive',
                sortable: true,
                minWidth: 120
            }
        ];
        this.UserID = api.getUserID();
        this.currentUser = this.api.getCurrentUser();
    }
    ngOnInit() {
        this.form = this.fb.group({
            txtDesignationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            txtDesignationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            chIsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.BindinfDataToList();
    }
    BindinfDataToList() {
        this.api.get('/Designation/Designation_Select').subscribe(data => {
            this.DesignationList = data;
        }, error => { console.error(error); });
    }
    get f() { return this.form.controls; }
    onSubmit(formData) {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else {
            this.HideSaveButton = true;
            const Designation = {
                DesignationID: this.DesigID,
                DesignationName: this.form.value.txtDesignationName,
                DesignationCode: this.form.value.txtDesignationCode,
                IsActive: this.form.value.chIsActive,
            };
            this.api.post('/Designation/Designation_Insert_Update', Designation).subscribe(data => {
                this.dialog.alert(data[0], '', () => { window.location.reload(); });
                this.onReset();
                this.BindinfDataToList();
            }, error => { console.error(error); });
        }
    }
    onReset() {
        this.form.reset();
        this.DesigID = 0;
        this.submitted = false;
        this.HideSaveButton = true;
        this.form.controls['chIsActive'].setValue(true);
        this.BindinfDataToList();
    }
    editDesignation(record) {
        this.HideSaveButton = true;
        console.log(record);
        this.DesigID = record.DesignationID;
        const item = {
            txtDesignationName: record.DesignationName,
            txtDesignationCode: record.DesignationCode,
            chIsActive: record.IsActive,
        };
        this.form.setValue(item);
    }
}
DesignationMasterComponent.ɵfac = function DesignationMasterComponent_Factory(t) { return new (t || DesignationMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog)); };
DesignationMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DesignationMasterComponent, selectors: [["app-Designation-master"]], decls: 35, vars: 31, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Designation Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtDesignationName", "id", "txtDesignationName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "autocomplete", "off", "formControlName", "txtDesignationCode", "id", "txtDesignationCode", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-6"], ["type", "checkbox", "formControlName", "chIsActive", "id", "chIsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], ["toolbarTpl", ""], [2, "height", "300px", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridlist", ""], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Search"]], template: function DesignationMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DesignationMasterComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.form); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJEZXNpZ25hdGlvbi1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 14877:
/*!************************************************************************!*\
  !*** ./src/app/routes/generic-master/generic-master-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericMasterRoutingModule": function() { return /* binding */ GenericMasterRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _count_master_count_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count-master/count-master.component */ 99706);
/* harmony import */ var _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department-master/department-master.component */ 32629);
/* harmony import */ var _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designation-master/designation-master.component */ 14641);
/* harmony import */ var _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-type-master/item-type-master.component */ 43317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    { path: "CountMaster", component: _count_master_count_master_component__WEBPACK_IMPORTED_MODULE_0__.CountMasterComponent },
    { path: "DepartmentMaster", component: _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_1__.DepartmentMasterComponent },
    { path: "DesignationMaster", component: _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_2__.DesignationMasterComponent },
    { path: "Item Type Master", component: _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_3__.ItemTypeMasterComponent }
];
class GenericMasterRoutingModule {
}
GenericMasterRoutingModule.ɵfac = function GenericMasterRoutingModule_Factory(t) { return new (t || GenericMasterRoutingModule)(); };
GenericMasterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GenericMasterRoutingModule });
GenericMasterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GenericMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 17500:
/*!****************************************************************!*\
  !*** ./src/app/routes/generic-master/generic-master.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericMasterModule": function() { return /* binding */ GenericMasterModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _generic_master_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-master-routing.module */ 14877);
/* harmony import */ var _count_master_count_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-master/count-master.component */ 99706);
/* harmony import */ var _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-master/department-master.component */ 32629);
/* harmony import */ var _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./designation-master/designation-master.component */ 14641);
/* harmony import */ var _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-type-master/item-type-master.component */ 43317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);








class GenericMasterModule {
}
GenericMasterModule.ɵfac = function GenericMasterModule_Factory(t) { return new (t || GenericMasterModule)(); };
GenericMasterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: GenericMasterModule });
GenericMasterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _generic_master_routing_module__WEBPACK_IMPORTED_MODULE_1__.GenericMasterRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GenericMasterModule, { declarations: [_count_master_count_master_component__WEBPACK_IMPORTED_MODULE_2__.CountMasterComponent,
        _department_master_department_master_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentMasterComponent,
        _designation_master_designation_master_component__WEBPACK_IMPORTED_MODULE_4__.DesignationMasterComponent,
        _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_5__.ItemTypeMasterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _generic_master_routing_module__WEBPACK_IMPORTED_MODULE_1__.GenericMasterRoutingModule] }); })();


/***/ }),

/***/ 43317:
/*!**************************************************************************************!*\
  !*** ./src/app/routes/generic-master/item-type-master/item-type-master.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTypeMasterComponent": function() { return /* binding */ ItemTypeMasterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ 23942);












function ItemTypeMasterComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Item Type Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ItemTypeMasterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemTypeMasterComponent_div_11_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtItemTypeCode == null ? null : ctx_r0.f.txtItemTypeCode.errors == null ? null : ctx_r0.f.txtItemTypeCode.errors.required);
} }
function ItemTypeMasterComponent_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Item Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ItemTypeMasterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemTypeMasterComponent_div_19_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.txtItemType == null ? null : ctx_r1.f.txtItemType.errors == null ? null : ctx_r1.f.txtItemType.errors.required);
} }
function ItemTypeMasterComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 18);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return [10, 20, 50, 100, 500]; };
class ItemTypeMasterComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.submitted = false;
        this.Reseted = false;
        this.HideSaveButton = true;
        this.ItemTpID = 0;
        this.UserID = 0;
        this.columns = [
            {
                header: "Action",
                field: 'Action',
                minWidth: 90,
                width: '90px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        icon: 'edit',
                        tooltip: 'Edit',
                        click: record => this.editItemType(record),
                    }
                ]
            },
            {
                header: 'ItemTypeID',
                field: 'ItemTypeID',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'ItemType',
                field: 'ItemType',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'ItemTypeCode',
                field: 'ItemTypeCode',
                sortable: true,
                minWidth: 250,
            }
        ];
        this.UserID = api.getUserID();
        this.currentUser = this.api.getCurrentUser();
    }
    ngOnInit() {
        this.form = this.fb.group({
            //ItemTypeID: [null, Validators.required],
            txtItemTypeCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            txtItemType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.BindinfDataToList();
    }
    BindinfDataToList() {
        this.api.get('/ItemTypeMaster/ItemTypeMaster_Select').subscribe(data => {
            this.ItemTypeList = data;
        }, error => { console.error(error); });
    }
    get f() { return this.form.controls; }
    onSubmit(formData) {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else {
            this.HideSaveButton = true;
        }
        const Item = {
            ItemTypeID: this.ItemTpID,
            ItemTypeCode: this.form.value.txtItemTypeCode,
            ItemType: this.form.value.txtItemType,
        };
        console.log("Item", Item);
        this.api.post('/ItemTypeMaster/ItemTypeMaster_Insert_Update', Item).subscribe(data => {
            this.dialog.alert(data[0], '', () => { window.location.reload(); });
            this.onReset();
            this.BindinfDataToList();
        }, error => { console.error(error); });
    }
    onReset() {
        this.form.reset();
        this.ItemTpID = 0;
        this.submitted = false;
        this.HideSaveButton = true;
        this.BindinfDataToList();
    }
    editItemType(record) {
        this.HideSaveButton = true;
        console.log(record);
        this.ItemTpID = record.ItemTypeID;
        const item = {
            txtItemType: record.ItemType,
            txtItemTypeCode: record.ItemTypeCode,
        };
        console.log("item", item);
        this.form.setValue(item);
    }
}
ItemTypeMasterComponent.ɵfac = function ItemTypeMasterComponent_Factory(t) { return new (t || ItemTypeMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__.MtxDialog)); };
ItemTypeMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItemTypeMasterComponent, selectors: [["app-item-type-master"]], decls: 30, vars: 31, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["label", "Item Type Master", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtItemTypeCode", "id", "txtItemTypeCode", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "autocomplete", "off", "formControlName", "txtItemType", "id", "txtItemType", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridPendingDOdList", ""], ["toolbarTpl", ""], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Search"]], template: function ItemTypeMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ItemTypeMasterComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.form); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__.MtxGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLXR5cGUtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_routes_generic-master_generic-master_module_ts-es2015.js.map