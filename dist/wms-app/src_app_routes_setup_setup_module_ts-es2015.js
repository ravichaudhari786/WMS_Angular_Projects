"use strict";
(self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_setup_setup_module_ts"],{

/***/ 36739:
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/setup/company/company-edit-button/company-edit-button.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyEditButtonComponent": function() { return /* binding */ CompanyEditButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CompanyEditButtonComponent {
    constructor() {
        this.label = '';
    }
    agInit(params) {
        this.params = params;
        this.label = this.params.label || null;
    }
    refresh(params) {
        return true;
    }
    onClick($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            const params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    }
}
CompanyEditButtonComponent.ɵfac = function CompanyEditButtonComponent_Factory(t) { return new (t || CompanyEditButtonComponent)(); };
CompanyEditButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyEditButtonComponent, selectors: [["app-company-edit-button"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"]], template: function CompanyEditButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyEditButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWVkaXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 20476:
/*!***********************************************************!*\
  !*** ./src/app/routes/setup/company/company.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyComponent": function() { return /* binding */ CompanyComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community */ 79574);
/* harmony import */ var _company_edit_button_company_edit_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-edit-button/company-edit-button.component */ 36739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ag-grid-angular */ 82022);


















function CompanyComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompanyComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompanyComponent_div_14_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.CompanyName == null ? null : ctx_r0.f.CompanyName.errors == null ? null : ctx_r0.f.CompanyName.errors.required);
} }
function CompanyComponent_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Company Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompanyComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompanyComponent_div_20_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.CompanyCode == null ? null : ctx_r1.f.CompanyCode.errors == null ? null : ctx_r1.f.CompanyCode.errors.required);
} }
function CompanyComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", p_r10.ParentCompanyID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r10.ParentCompany, "");
} }
function CompanyComponent_div_36_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Mobile No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompanyComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompanyComponent_div_36_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.MobileNo == null ? null : ctx_r3.f.MobileNo.errors == null ? null : ctx_r3.f.MobileNo.errors.required);
} }
function CompanyComponent_div_48_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter GST NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompanyComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompanyComponent_div_48_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.f.GSTINNo == null ? null : ctx_r4.f.GSTINNo.errors == null ? null : ctx_r4.f.GSTINNo.errors.required);
} }
function CompanyComponent_div_54_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Pan No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompanyComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompanyComponent_div_54_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.PANNo == null ? null : ctx_r5.f.PANNo.errors == null ? null : ctx_r5.f.PANNo.errors.required);
} }
function CompanyComponent_div_61_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Address 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompanyComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompanyComponent_div_61_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.Address1 == null ? null : ctx_r6.f.Address1.errors == null ? null : ctx_r6.f.Address1.errors.required);
} }
function CompanyComponent_option_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", p_r15.CityID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](p_r15.City);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CompanyComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.tab = 0;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.UserID = 0;
        this.submitted = false;
        this.SaveData2 = {};
        this.HideSaveButton = true;
        this.CompanyID = 0;
        this.CompanylistColumn = [
            {
                headerName: 'Action', width: 100, floatingFilter: false,
                cellRenderer: "buttonRenderer",
                cellRendererParams: {
                    // onClick: this.onBtnClick1.bind(this),
                    onClick: this.editCompany.bind(this),
                    label: 'Click 1'
                }
            },
            {
                headerName: 'CompanyID',
                field: 'CompanyID',
                sortable: true,
                hide: true
            },
            {
                headerName: 'CompanyName',
                field: 'CompanyName',
                sortable: true,
                minWidth: 170,
            },
            {
                headerName: 'CompanyCode',
                field: 'CompanyCode',
                sortable: true,
                minWidth: 150,
            },
            {
                headerName: 'ParentCompanyID',
                field: 'ParentCompanyID',
                sortable: true,
                hide: true
            },
            {
                headerName: 'ParentCompany',
                field: 'ParentCompany',
                sortable: true,
                minWidth: 150,
            },
            {
                headerName: 'MobileNo',
                field: 'MobileNo',
                sortable: true,
                minWidth: 150,
            },
            {
                headerName: 'ContactNo',
                field: 'ContactNo',
                sortable: true,
                minWidth: 150,
            },
            {
                headerName: 'GSTINNo',
                field: 'GSTINNo',
                sortable: true,
                minWidth: 150,
            },
            {
                headerName: 'PANNo',
                field: 'PANNo',
                sortable: true,
                minWidth: 150,
            },
            {
                headerName: 'Address1',
                field: 'Address1',
                sortable: true,
                minWidth: 250,
            },
            {
                headerName: 'Address2',
                field: 'Address2',
                sortable: true,
                minWidth: 250,
            },
            {
                headerName: 'Address3',
                field: 'Address3',
                sortable: true,
                minWidth: 250,
            },
            {
                headerName: 'City',
                field: 'City',
                sortable: true,
                minWidth: 150,
            },
            {
                headerName: 'PinCode',
                field: 'PinCode',
                sortable: true,
                minWidth: 150,
            },
        ];
        this.currentUser = this.api.getCurrentUser();
        this.frameworkComponents = {
            buttonRenderer: _company_edit_button_company_edit_button_component__WEBPACK_IMPORTED_MODULE_2__.CompanyEditButtonComponent,
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            // CompanyID: [0, Validators.required],
            CompanyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            CompanyCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            ParentCompanyID: [null,],
            MobileNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            ContactNo: [null,],
            GSTINNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            PANNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Address1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Address2: [null,],
            Address3: [null,],
            CBCityID: [null],
            PinCode: [null,],
            ParentCompany: [null],
            CreatedBy: [this.UserID],
        });
        this.BindDropdown();
    }
    BindDropdown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.api.get('/Company_Select/Company_Select1').subscribe(data => { this.CompanyList = data; console.log("company", data); }, error => { console.error(error); });
            this.api.get('/City/Cities_Select').subscribe(data => { this.CitiesList = data; }, error => { console.error(error); });
        });
    }
    // ResetForm(){
    //   this. CompanyID=0;
    //   this.form.reset();
    //   this.HideSaveButton = true;
    //   this.submitted = false;
    //   this.BindDropdown();
    // }
    onSubmit(formData) {
        console.log(formData);
        this.submitted = true;
        if (this.form.invalid) {
            //alert("invalid form");
            return;
        }
        else {
            this.HideSaveButton = false;
            this.SaveData2 = {
                CompanyID: this.CompanyID,
                Companyname: this.form.value.CompanyName,
                CompanyCode: this.form.value.CompanyCode,
                Address1: this.form.value.Address1,
                Address2: this.form.value.Address2,
                Address3: this.form.value.Address3,
                CityId: this.form.value.CBCityID,
                Pincode: this.form.value.PinCode,
                ContactNo: this.form.value.ContactNo,
                MobileNo: this.form.value.MobileNo,
                Gstno: this.form.value.GSTINNo,
                Panno: this.form.value.PANNo,
                ParentCompanyId: this.form.value.ParentCompanyID,
                createdby: this.currentUser.userId,
            };
            console.log(this.SaveData2);
            this.api.post('/Company_Select/Company_Insert_Update', this.SaveData2).subscribe(data => {
                this.dialog.alert(data[0], '');
                // this.ResetForm();
                this.BindDropdown();
                this.form.reset();
                this.form.controls['CompanyName'].setErrors(null);
                this.form.controls['CompanyCode'].setErrors(null);
                this.form.controls['MobileNo'].setErrors(null);
                this.form.controls['GSTINNo'].setErrors(null);
                this.form.controls['PANNo'].setErrors(null);
                this.form.controls['Address1'].setErrors(null);
                // window.location.reload();
            }, error => { console.error(error); });
        }
    }
    get f() { return this.form.controls; }
    tabchange(event) {
        this.tab = event;
    }
    editCompany(record) {
        console.log(record);
        this.CompanyID = record.CompanyID;
        const item = {
            // CompanyID: record.CompanyID,
            CompanyName: record.rowData.CompanyName,
            CompanyCode: record.rowData.CompanyCode,
            ParentCompanyID: record.rowData.ParentCompanyID,
            ParentCompany: record.rowData.ParentCompanyID,
            MobileNo: record.rowData.MobileNo,
            ContactNo: record.rowData.ContactNo,
            GSTINNo: record.rowData.GSTINNo,
            PANNo: record.rowData.ParentCompany,
            Address1: record.rowData.Address1,
            Address2: record.rowData.Address2,
            Address3: record.rowData.Address3,
            CBCityID: record.rowData.CityID == null ? 0 : record.rowData.CityID,
            PinCode: record.rowData.PinCode,
            CreatedBy: this.currentUser.userId,
        };
        this.form.setValue(item);
        this.tab = 0;
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_8__.MtxDialog)); };
CompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 96, vars: 33, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Company Master"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-6"], [1, "form-group"], ["type", "text", "formControlName", "CompanyName", "id", "CompanyName", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "company"], ["type", "text", "formControlName", "CompanyCode", "id", "CompanyCode", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-12"], ["formControlName", "ParentCompanyID", "id", "ParentCompanyID", 1, "form-control", "form-control-sm"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "MobileNo", "id", "MobileNo", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "ContactNo", "id", "ContactNo", "autocomplete", "off", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "GSTINNo", "id", "GSTINNo", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "PANNo", "id", "PANNo", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "Address1", "id", "Address1", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "Address2", "id", "Address2", "autocomplete", "off", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "Address3", "id", "Address3", "autocomplete", "off", 1, "form-control", "form-control-sm"], ["formControlName", "CBCityID", "id", "CBCityID", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "PinCode", "id", "PinCode", "autocomplete", "off", 1, "form-control", "form-control-sm"], [1, "col-sm-6", "col-md-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", "margin-left", "20px !important", 3, "hidden", "value"], ["label", "List"], [2, "height", "100%", "box-sizing", "border-box"], [1, "ag-theme-alpine", 2, "height", "450px", 3, "rowData", "columnDefs", "frameworkComponents"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function CompanyComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tabchange($event); })("selectedIndexChange", function CompanyComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CompanyComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CompanyComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Company Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CompanyComponent_div_20_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, CompanyComponent_option_29_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CompanyComponent_div_36_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Contact No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "GST NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, CompanyComponent_div_48_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Pan No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, CompanyComponent_div_54_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Address 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, CompanyComponent_div_61_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Address 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, CompanyComponent_option_82_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "PinCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "ag-grid-angular", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.tab);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.CompanyName.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.CompanyName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.CompanyCode.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.CompanyCode.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.CompanyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.MobileNo.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.MobileNo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.GSTINNo.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.GSTINNo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c0, ctx.submitted && ctx.f.PANNo.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.PANNo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c0, ctx.submitted && ctx.f.Address1.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Address1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.CitiesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.CompanyList)("columnDefs", ctx.CompanylistColumn)("frameworkComponents", ctx.frameworkComponents);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__.AgGridAngular], styles: ["#rrt[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNycnR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ 60740:
/*!*************************************************************************!*\
  !*** ./src/app/routes/setup/service-master/service-master.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceMasterComponent": function() { return /* binding */ ServiceMasterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ 23942);













function ServiceMasterComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Service Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServiceMasterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ServiceMasterComponent_div_11_span_1_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.txtServiceName == null ? null : ctx_r0.f.txtServiceName.errors == null ? null : ctx_r0.f.txtServiceName.errors.required);
} }
function ServiceMasterComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Servicecode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServiceMasterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ServiceMasterComponent_div_17_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.txtServiceCode == null ? null : ctx_r1.f.txtServiceCode.errors == null ? null : ctx_r1.f.txtServiceCode.errors.required);
} }
function ServiceMasterComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", i_r13.ServiceTypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r13.ServiceType);
} }
function ServiceMasterComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Service Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServiceMasterComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ServiceMasterComponent_div_26_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.ServiceTypeID.errors == null ? null : ctx_r3.f.ServiceTypeID.errors.required);
} }
function ServiceMasterComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", p_r15.StorageAreaTypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", p_r15.StorageAreaType, " ");
} }
function ServiceMasterComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select StorageAreaType");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServiceMasterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ServiceMasterComponent_div_35_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.StorageAreaTypeID.errors == null ? null : ctx_r5.f.StorageAreaTypeID.errors.required);
} }
function ServiceMasterComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", p_r17.BillingCycleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", p_r17.BillingCyclesName, " ");
} }
function ServiceMasterComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select BillingCycleName");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServiceMasterComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ServiceMasterComponent_div_44_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.f.BillingCycleID.errors == null ? null : ctx_r7.f.BillingCycleID.errors.required);
} }
function ServiceMasterComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 26);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return [10, 20, 50, 100, 500]; };
class ServiceMasterComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.submitted = false;
        this.Reseted = false;
        this.HideSaveButton = true;
        this.ItemID = 0;
        this.UserID = 0;
        this.ServiceID = 0;
        this.AreaTypeID = 0;
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
                        click: record => this.editService(record),
                    }
                ]
            },
            {
                header: 'ServiceID',
                field: 'ServiceID',
                sortable: true,
                hide: true
            },
            {
                header: 'ServiceName',
                field: 'ServiceName',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'ServiceCode',
                field: 'ServiceCode',
                sortable: true,
                minWidth: 170,
            },
            {
                header: 'ServiceType',
                field: 'ServiceType',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'StorageAreaType',
                field: 'StorageAreaType',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'BillingCyclesName',
                field: 'BillingCyclesName',
                sortable: true,
                minWidth: 250,
            },
            {
                header: 'HCNCode',
                field: 'HCNCode',
                hide: true,
                minWidth: 170,
            },
            {
                header: 'IsActive',
                field: 'IsActive',
                sortable: true,
                minWidth: 120,
            },
            {
                header: 'TaxID',
                field: 'TaxID',
                hide: true
            },
        ];
        this.UserID = api.getUserID();
    }
    ngOnInit() {
        this.form = this.fb.group({
            txtServiceName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            txtServiceCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ServiceTypeID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            StorageAreaTypeID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            BillingCycleID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            IsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.BindinfDataToList();
        this.BindDropdown();
    }
    BindinfDataToList() {
        this.api.get('/Services/Service_Select').subscribe(data => { this.ServiceList = data; }, error => { console.error(error); });
    }
    BindDropdown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.api.get('/Service/serviceType').subscribe(data => { this.ServiceTypelist = data; }, error => { console.error(error); });
            this.api.get('/StorageAreaType/StorageAreaType_Select').subscribe(data => { this.StorageAreaTypeList = data; }, error => { console.error(error); });
            this.api.get('/BillingCycles/BillingCycle_Select').subscribe(data => { this.BillingCycleNameIList = data; }, error => { console.error(error); });
        });
    }
    get f() { return this.form.controls; }
    onSubmit(formData) {
        console.log(this.form);
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else {
            this.HideSaveButton = false;
            {
                console.log("formData", formData);
                const dataitem = {
                    ServiceID: this.ServiceID,
                    ServiceCode: formData.value.txtServiceCode,
                    ServiceName: formData.value.txtServiceName,
                    ServiceTypeID: this.form.value.ServiceTypeID == null ? 0 : this.form.value.ServiceTypeID,
                    HCNCode: '',
                    BillingCycleID: this.form.value.BillingCycleID == null ? 0 : this.form.value.BillingCycleID,
                    StorageAreaTypeID: this.form.value.StorageAreaTypeID == null ? 0 : this.form.value.StorageAreaTypeID,
                    IsActive: formData.value.IsActive,
                    TaxID: 0
                };
                console.log("dataitem", dataitem);
                this.api.post('/Services/Services_Insert', dataitem).subscribe(data => {
                    this.dialog.alert(data[0], '', () => { window.location.reload(); });
                    this.BindinfDataToList();
                }, error => { console.error(error); });
            }
        }
    }
    onReset() {
        this.form.reset();
        this.ServiceID = 0;
        this.submitted = false;
        this.HideSaveButton = true;
        this.BindinfDataToList();
    }
    editService(record) {
        this.AreaTypeID = 0;
        const Billingdata = this.BillingCycleNameIList.filter((x) => x.BillingCyclesName == record.BillingCyclesName);
        const Servicedata = this.ServiceTypelist.filter((x) => x.ServiceType == record.ServiceType);
        const Storagedata = this.StorageAreaTypeList.filter((x) => x.StorageAreaType == record.StorageAreaType);
        this.HideSaveButton = true;
        this.submitted = false;
        this.ServiceID = record.ServiceID;
        if (Storagedata.length == 0) {
            this.AreaTypeID = 0;
        }
        else {
            this.AreaTypeID = Number(Storagedata[0].StorageAreaTypeID);
        }
        const item = {
            txtServiceName: record.ServiceName,
            txtServiceCode: record.ServiceCode == null ? '' : record.ServiceCode,
            ServiceTypeID: Servicedata[0].ServiceTypeID == null ? 0 : Servicedata[0].ServiceTypeID,
            StorageAreaTypeID: this.AreaTypeID,
            BillingCycleID: Billingdata[0].BillingCycleID == null ? 0 : Billingdata[0].BillingCycleID,
            IsActive: record.IsActive,
        };
        this.form.setValue(item);
    }
}
ServiceMasterComponent.ɵfac = function ServiceMasterComponent_Factory(t) { return new (t || ServiceMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_5__.MtxDialog)); };
ServiceMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ServiceMasterComponent, selectors: [["app-service-master"]], decls: 60, vars: 46, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-6"], [1, "form-group"], ["type", "text", "autocomplete", "off", "formControlName", "txtServiceName", "id", "txtServiceName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "company"], ["type", "text", "autocomplete", "off", "formControlName", "txtServiceCode", "id", "txtServiceCode", 1, "form-control", "form-control-sm", 3, "ngClass"], ["formControlName", "ServiceTypeID", "id", "ServiceTypeID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "StorageAreaTypeID", "id", "StorageAreaTypeID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["formControlName", "BillingCycleID", "id", "BillingCycleID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "checkbox", "formControlName", "IsActive", "id", "IsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], [1, "row"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "hidden", "value"], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize"], ["gridPendingDOdList", ""], ["toolbarTpl", ""], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], ["placeholder", "Search"]], template: function ServiceMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ServiceMasterComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Service Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ServiceMasterComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Service Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ServiceMasterComponent_div_17_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Service Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ServiceMasterComponent_option_25_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ServiceMasterComponent_div_26_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Storage Area Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ServiceMasterComponent_option_34_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ServiceMasterComponent_div_35_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Billing Cycle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ServiceMasterComponent_option_43_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ServiceMasterComponent_div_44_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Is Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "mtx-grid", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ServiceMasterComponent_ng_template_58_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c0, ctx.submitted && ctx.f.txtServiceName.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtServiceName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c0, ctx.submitted && ctx.f.txtServiceCode.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.txtServiceCode.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c0, ctx.submitted && ctx.f.ServiceTypeID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ServiceTypelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.ServiceTypeID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c0, ctx.submitted && ctx.f.StorageAreaTypeID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.StorageAreaTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.StorageAreaTypeID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c0, ctx.submitted && ctx.f.BillingCycleID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.BillingCycleNameIList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.BillingCycleID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.ServiceList)("columns", ctx.columns)("loading", false)("columnResizable", true)("multiSelectable", false)("rowSelectable", true)("hideRowSelectionCheckbox", true)("rowHover", true)("rowStriped", false)("showToolbar", false)("toolbarTitle", "Detail List")("columnHideable", false)("columnMovable", true)("expandable", false)("pageOnFront", true)("showPaginator", true)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](45, _c1))("pageIndex", 0)("pageSize", 0);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__.MtxGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 96203:
/*!******************************************************!*\
  !*** ./src/app/routes/setup/setup-routing.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRoutingModule": function() { return /* binding */ SetupRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company/company.component */ 20476);
/* harmony import */ var _service_master_service_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-master/service-master.component */ 60740);
/* harmony import */ var _storage_area_storage_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-area/storage-area.component */ 93394);
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse/warehouse.component */ 52762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    { path: "Storagearea", component: _storage_area_storage_area_component__WEBPACK_IMPORTED_MODULE_2__.StorageAreaComponent },
    { path: "Company", component: _company_company_component__WEBPACK_IMPORTED_MODULE_0__.CompanyComponent },
    { path: "Warehouse", component: _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_3__.WarehouseComponent },
    { path: "ServiceMaster", component: _service_master_service_master_component__WEBPACK_IMPORTED_MODULE_1__.ServiceMasterComponent }
];
class SetupRoutingModule {
}
SetupRoutingModule.ɵfac = function SetupRoutingModule_Factory(t) { return new (t || SetupRoutingModule)(); };
SetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SetupRoutingModule });
SetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 84230:
/*!**********************************************!*\
  !*** ./src/app/routes/setup/setup.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupModule": function() { return /* binding */ SetupModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 82022);
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-routing.module */ 96203);
/* harmony import */ var _storage_area_storage_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-area/storage-area.component */ 93394);
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/company.component */ 20476);
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse/warehouse.component */ 52762);
/* harmony import */ var _storage_area_storage_area_button_storage_area_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-area/storage-area-button/storage-area-button.component */ 66935);
/* harmony import */ var _company_company_edit_button_company_edit_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/company-edit-button/company-edit-button.component */ 36739);
/* harmony import */ var _warehouse_warehouse_edit_button_warehouse_edit_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warehouse/warehouse-edit-button/warehouse-edit-button.component */ 83242);
/* harmony import */ var _service_master_service_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-master/service-master.component */ 60740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);













class SetupModule {
}
SetupModule.ɵfac = function SetupModule_Factory(t) { return new (t || SetupModule)(); };
SetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SetupModule });
SetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetupRoutingModule,
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule.withComponents([]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SetupModule, { declarations: [_storage_area_storage_area_component__WEBPACK_IMPORTED_MODULE_2__.StorageAreaComponent,
        _company_company_component__WEBPACK_IMPORTED_MODULE_3__.CompanyComponent,
        _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__.WarehouseComponent,
        _storage_area_storage_area_button_storage_area_button_component__WEBPACK_IMPORTED_MODULE_5__.StorageAreaButtonComponent,
        _company_company_edit_button_company_edit_button_component__WEBPACK_IMPORTED_MODULE_6__.CompanyEditButtonComponent,
        _warehouse_warehouse_edit_button_warehouse_edit_button_component__WEBPACK_IMPORTED_MODULE_7__.WarehouseEditButtonComponent,
        _service_master_service_master_component__WEBPACK_IMPORTED_MODULE_8__.ServiceMasterComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetupRoutingModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule] }); })();


/***/ }),

/***/ 66935:
/*!************************************************************************************************!*\
  !*** ./src/app/routes/setup/storage-area/storage-area-button/storage-area-button.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageAreaButtonComponent": function() { return /* binding */ StorageAreaButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class StorageAreaButtonComponent {
    constructor() {
        this.label = '';
    }
    agInit(params) {
        this.params = params;
        this.label = this.params.label || null;
    }
    refresh(params) {
        return true;
    }
    onClick($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            const params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    }
}
StorageAreaButtonComponent.ɵfac = function StorageAreaButtonComponent_Factory(t) { return new (t || StorageAreaButtonComponent)(); };
StorageAreaButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorageAreaButtonComponent, selectors: [["app-storage-area-button"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"]], template: function StorageAreaButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageAreaButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yYWdlLWFyZWEtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93394:
/*!*********************************************************************!*\
  !*** ./src/app/routes/setup/storage-area/storage-area.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageAreaComponent": function() { return /* binding */ StorageAreaComponent; },
/* harmony export */   "StorageAreaDetail": function() { return /* binding */ StorageAreaDetail; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community */ 79574);
/* harmony import */ var _storage_area_button_storage_area_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-area-button/storage-area-button.component */ 66935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ag-grid-angular */ 82022);

















function StorageAreaComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Storage Area Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_14_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.Storage_Area_Name == null ? null : ctx_r0.f.Storage_Area_Name.errors == null ? null : ctx_r0.f.Storage_Area_Name.errors.required);
} }
function StorageAreaComponent_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Storage AreaCode Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_20_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.StorageAreaCode == null ? null : ctx_r1.f.StorageAreaCode.errors == null ? null : ctx_r1.f.StorageAreaCode.errors.required);
} }
function StorageAreaComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r13.StorageAreaTypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r13.StorageAreaType, " ");
} }
function StorageAreaComponent_div_29_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Storage Area Type Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_29_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.StorageAreaTypeID == null ? null : ctx_r3.f.StorageAreaTypeID.errors == null ? null : ctx_r3.f.StorageAreaTypeID.errors.required);
} }
function StorageAreaComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r15.TemperatureCategoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r15.TemperatureCategory, " ");
} }
function StorageAreaComponent_div_47_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter TemperatureCategory Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_47_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.TemperatureCategoryID == null ? null : ctx_r5.f.TemperatureCategoryID.errors == null ? null : ctx_r5.f.TemperatureCategoryID.errors.required);
} }
function StorageAreaComponent_div_53_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Temperature Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_53_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.TemperatureCategoryID == null ? null : ctx_r6.f.TemperatureCategoryID.errors == null ? null : ctx_r6.f.TemperatureCategoryID.errors.required);
} }
function StorageAreaComponent_div_73_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Area Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_73_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.f.AreaLength == null ? null : ctx_r7.f.AreaLength.errors == null ? null : ctx_r7.f.AreaLength.errors.required);
} }
function StorageAreaComponent_div_79_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Area Breadth");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_79_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.f.AreaBreadth == null ? null : ctx_r8.f.AreaBreadth.errors == null ? null : ctx_r8.f.AreaBreadth.errors.required);
} }
function StorageAreaComponent_div_85_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Area Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_85_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.f.AreaHeight == null ? null : ctx_r9.f.AreaHeight.errors == null ? null : ctx_r9.f.AreaHeight.errors.required);
} }
function StorageAreaComponent_div_91_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter Storage Capacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StorageAreaComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StorageAreaComponent_div_91_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.f.StorageCapacity == null ? null : ctx_r10.f.StorageCapacity.errors == null ? null : ctx_r10.f.StorageCapacity.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class StorageAreaComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.tab = 0;
        this.UserID = 0;
        this.StorageAreaGridList = {};
        this.StorageAreaDetails = [];
        this.submitted = false;
        this.StorageAreaID = 0;
        this.HideSaveButton = true;
        this.SaveStorageareaData = {};
        // AreaLength: number = 0;
        // AreaHeight: number = 0;
        // AreaBreadth: number = 0;
        // StorageCapacity: number = 0;
        this.WareHouseID = 0;
        //   AddStorageGrid: MtxGridColumn[] = [
        //     {      header: 'StorageAreaID',      field: 'StorageAreaID',            hide: false    },
        //     {      header: 'WareHouseID',      field: 'WareHouseID',            hide: false    },
        //     {      header: 'StorageAreaName',      field: 'StorageArea',            minWidth: 150,    },
        //     {      header: 'StorageAreaCode',      field: 'StorageAreaCode',           minWidth: 300,   },
        //     {      header: 'StorageAreaMasterID',      field: 'StorageAreaMasterID',            hide: false    },
        //     {      header: 'Storage Area Name',      field: 'StorageName',            minWidth: 150,   },
        //     {      header: 'StorageAreaTypeID',      field: 'StorageAreaTypeID',            minWidth: 300,      hide: false    },
        //     {      header: 'StorageAreaType',      field: 'StorageAreaType',            minWidth: 300,    },
        //     {      header: 'ParentStorageAreaID',      field: 'ParentStorageAreaID',               },
        //     {      header: 'IsStorable',      field: 'IsStorable',               },
        //     {      header: 'IsTemparatureControlled',      field: 'IsTemparatureControlled',            },
        //     {      header: 'Preference',      field: 'Preference',            minWidth: 300,},
        //     {      header: 'MinTempareture',      field: 'MinTempareture',            minWidth: 300,},
        //     {      header: 'MaxTempareture',      field: 'MaxTempareture',            minWidth: 300,},
        //     {      header: 'TemperatureCategoryID',      field: 'TemperatureCategoryID',            minWidth: 300,},
        //     {      header: 'AreaLength',      field: 'AreaLength',            minWidth: 300,},
        //     {      header: 'AreaHeight',      field: 'AreaHeight',            minWidth: 300,    },
        //     {      header: 'AreaBreadth',      field: 'AreaBreadth',            minWidth: 300,    },
        //     {      header: 'StorageCapacity',      field: 'StorageCapacity',            minWidth: 300,},
        // ]
        this.ItemTypelist = [
            { "ItemType": 222 }
        ];
        this.StorageArea1 = [
            {
                headerName: 'Action', width: 100, floatingFilter: false,
                cellRenderer: "buttonRenderer",
                cellRendererParams: {
                    // onClick: this.onBtnClick1.bind(this),
                    onClick: this.editstoragearea.bind(this),
                    label: 'Click 1'
                }
            },
            {
                headerName: 'StorageAreaID',
                field: 'StorageAreaID',
                hide: true
            },
            {
                headerName: 'WareHouseID',
                field: 'WareHouseID',
                hide: true
            },
            {
                headerName: 'StorageArea',
                field: 'StorageArea',
                hide: true
            },
            {
                headerName: 'WareHouseName',
                field: 'WareHouseName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'StorageAreaCode',
                field: 'StorageAreaCode',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'Storage Area Name',
                field: 'Storage_Area_Name',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'StorageAreaMasterID',
                field: 'StorageAreaMasterID',
                hide: true
            },
            {
                headerName: 'StorageAreaTypeID',
                field: 'StorageAreaTypeID',
                minWidth: 150,
                hide: true
            },
            {
                headerName: 'StorageAreaType',
                field: 'StorageAreaType',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'ParentStorageAreaID',
                field: 'ParentStorageAreaID',
                hide: true
            },
            {
                headerName: 'IsStorable',
                field: 'IsStorable',
                hide: true
            },
            {
                headerName: 'IsTemparatureControlled',
                field: 'IsTemparatureControlled',
                hide: true
            },
            {
                headerName: 'Preference',
                field: 'Preference',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'MinTempareture',
                field: 'MinTempareture',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'MaxTempareture',
                field: 'MaxTempareture',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'TemperatureCategory',
                field: 'TemperatureCategory',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'AreaLength',
                field: 'AreaLength',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'AreaHeight',
                field: 'AreaHeight',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'AreaBreadth',
                field: 'AreaBreadth',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
            {
                headerName: 'StorageCapacity',
                field: 'StorageCapacity',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 150,
            },
        ];
        this.currentUser = this.api.getCurrentUser();
        this.frameworkComponents = {
            buttonRenderer: _storage_area_button_storage_area_button_component__WEBPACK_IMPORTED_MODULE_2__.StorageAreaButtonComponent,
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            Storage_Area_Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            StorageAreaCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            StorageAreaTypeID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Preference: [0],
            TemperatureCategoryID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            MinTempareture: [0],
            MaxTempareture: [0],
            AreaLength: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            AreaHeight: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            AreaBreadth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            StorageCapacity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            IsStorable: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            IsTemparatureControlled: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            //ParentStorageAreaID: [0, Validators.required],
            //StorageArea: ['', Validators.required],
            //StorageAreaID: [0, Validators.required],
            //StorageAreaMasterID: [0, Validators.required],
            //StorageAreaType: ['', Validators.required],
            //StorageName: [null, Validators.required],
            //WareHouseID: [0, Validators.required],
            //WareHouseName: ['', Validators.required],
            //createdBy: [this.UserID]
        });
        this.WareHouseID = this.currentUser.warehouseId;
        this.BindDropdown();
        //console.log(this.StorageAreaList)
        this.form.controls['AreaLength'].setValue(0);
        this.form.controls['AreaBreadth'].setValue(0);
        this.form.controls['AreaHeight'].setValue(0);
        this.form.controls['StorageCapacity'].setValue(0);
    }
    BindDropdown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.api.get('/StorageAreaType/StorageAreaType_Select').subscribe(data => { this.StorageAreaTypeList = data; }, error => { console.error(error); });
            this.api.get('/TemperatureCategory/TemperatureCategories_Select').subscribe(data => {
                this.TempCatList = data; //console.log("vishal", data);
            }, error => { console.error(error); });
            this.api.post('/Storage/StorageArea_Select').subscribe(data => {
                this.StorageAreaList = data; //console.log(data)
            }, error => { console.error(error); });
        });
    }
    get f() { return this.form.controls; }
    onSubmit(formData) {
        this.submitted = true;
        console.log(this.form);
        if (this.form.invalid) {
            alert("invalid form");
            return;
        }
        else {
            // alert("valid ");
            this.HideSaveButton = false;
            this.StorageAreaGridList = [];
            this.StorageAreaGridList = {
                StorageAreaID: this.StorageAreaID,
                WareHouseID: this.currentUser.warehouseId,
                //Storage_Area_Name: this.form.value.Storage_Area_Name,
                StorageAreaCode: this.form.value.StorageAreaCode,
                StorageArea: this.form.value.Storage_Area_Name,
                StorageAreaMasterID: Number(1),
                StorageName: '',
                StorageAreaTypeID: Number(this.form.value.StorageAreaTypeID),
                StorageAreaType: '',
                ParentStorageAreaID: Number(1),
                IsStorable: this.form.value.IsStorable,
                IsTemparatureControlled: this.form.value.IsTemparatureControlled,
                Preference: this.form.value.Preference,
                MinTempareture: this.form.value.MinTempareture,
                MaxTempareture: this.form.value.MaxTempareture,
                TemperatureCategoryID: Number(this.form.value.TemperatureCategoryID),
                AreaLength: Number(this.form.value.AreaLength),
                AreaHeight: Number(this.form.value.AreaHeight),
                AreaBreadth: Number(this.form.value.AreaBreadth),
                StorageCapacity: Number(this.form.value.StorageCapacity),
            };
            this.StorageAreaDetails.push(this.StorageAreaGridList);
            console.log(this.StorageAreaGridList);
            this.SaveStorageareaData = {
                warehouseID: this.currentUser.warehouseId,
                StorageAreaID: this.StorageAreaID,
                cls_TD_StorageAreaS: this.StorageAreaDetails,
                createdBy: this.currentUser.userId,
                BlockID: 1
            };
            this.submitted = true;
            // console.log(this.SaveStorageareaData);
            this.api.post('/Storage/StorageAreas_Insert', this.SaveStorageareaData).subscribe(data => {
                this.dialog.alert(data.Table[0].Message, '');
            }, error => { console.error(error); });
            this.BindDropdown();
            this.form.reset();
            this.form.controls['Storage_Area_Name'].setErrors(null);
            this.form.controls['StorageAreaCode'].setErrors(null);
            this.form.controls['StorageAreaTypeID'].setErrors(null);
            this.form.controls['TemperatureCategoryID'].setErrors(null);
            this.form.controls['AreaLength'].setErrors(null);
            this.form.controls['AreaHeight'].setErrors(null);
            this.form.controls['AreaBreadth'].setErrors(null);
            this.form.controls['StorageCapacity'].setErrors(null);
            // window.location.reload();
        }
    }
    tabchange(event) {
        this.tab = event;
    }
    editstoragearea(record) {
        const TempID = this.TempCatList.filter((x) => x.TemperatureCategory == record.TemperatureCategory);
        console.log(record);
        this.StorageAreaID = record.rowData.StorageAreaID;
        this.WareHouseID = record.rowData.WareHouseID;
        const item = {
            AreaBreadth: record.rowData.AreaBreadth,
            AreaHeight: record.rowData.AreaHeight,
            AreaLength: record.rowData.AreaLength,
            IsStorable: record.rowData.IsStorable,
            IsTemparatureControlled: record.rowData.IsTemparatureControlled,
            MaxTempareture: record.rowData.MaxTempareture,
            MinTempareture: record.rowData.MinTempareture,
            //ParentStorageAreaID: record.ParentStorageAreaID,
            Preference: record.rowData.Preference,
            Storage_Area_Name: record.rowData.Storage_Area_Name,
            StorageAreaCode: record.rowData.StorageAreaCode,
            //StorageAreaID: record.StorageAreaID,
            //StorageAreaMasterID: record.ParentStorageAreaID,
            //StorageAreaType: record.StorageAreaType,
            StorageAreaTypeID: 1,
            StorageCapacity: record.rowData.StorageCapacity,
            //StorageName: record.StorageName,
            //Storage_Area_Name: record.Storage_Area_Name,
            TemperatureCategoryID: record.rowData.TempID[0].TemperatureCategoryID, //record.TemperatureCategoryID == null ? null : record.TemperatureCategoryID,
            //WareHouseID: record.WareHouseID,
            //WareHouseName: record.WareHouseName,
            //createdBy: this.currentUser.userId,
        };
        this.form.setValue(item);
        console.log(this.form.value);
        this.tab = 0;
    }
    GetTempdetails(a) {
        const datavalue = {
            TempCategoryID: this.form.value.TemperatureCategoryID,
            TempCategory: "",
            MinTemp: 0,
            MaxTemp: 0,
            CreatedBy: 0
        };
        this.api.post('/TemperatureCategory/Get_MinMax_Temp', datavalue).subscribe(data => {
            this.MinMaxList = data;
            // console.log(data);
            this.form.controls['MinTempareture'].setValue(data[0].MinTemperature);
            this.form.controls['MaxTempareture'].setValue(data[0].MaxTemperature);
        }, error => { console.error(error); });
    }
}
StorageAreaComponent.ɵfac = function StorageAreaComponent_Factory(t) { return new (t || StorageAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__.MtxDialog)); };
StorageAreaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StorageAreaComponent, selectors: [["app-storage-area"]], decls: 105, vars: 45, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Storage Area Master"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-6"], [1, "form-group"], ["type", "text", "formControlName", "Storage_Area_Name", "id", "Storage_Area_Name", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "StorageAreaCode", "id", "StorageAreaCode", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["formControlName", "StorageAreaTypeID", "id", "StorageAreaTypeID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "Preference", "id", "Preference", "readonly", "", "autocomplete", "off", 1, "form-control", "form-control-sm"], [1, "font-weight-bold"], ["formControlName", "TemperatureCategoryID", "id", "TemperatureCategoryID", 1, "form-control", "form-control-sm", 3, "ngClass", "change"], ["type", "text", "formControlName", "MinTempareture", "id", "MinTempareture", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "MaxTempareture", "id", "MaxTempareture", "readonly", "", 1, "form-control", "form-control-sm"], [1, "col-sm-6", "col-md-3"], ["type", "checkbox", "formControlName", "IsTemparatureControlled", "id", "IsTemparatureControlled", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important", 3, "ngClass"], ["type", "text", "formControlName", "AreaLength", "id", "AreaLength", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "AreaBreadth", "id", "AreaBreadth", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "AreaHeight", "id", "AreaHeight", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "StorageCapacity", "id", "StorageCapacity", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "checkbox", "formControlName", "IsStorable", "id", "IsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", "margin-left", "300px !important", 3, "hidden", "value"], ["label", "List"], [2, "height", "100%", "box-sizing", "border-box"], [1, "ag-theme-alpine", 2, "height", "450px", 3, "rowData", "columnDefs", "frameworkComponents"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"]], template: function StorageAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function StorageAreaComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tabchange($event); })("selectedIndexChange", function StorageAreaComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function StorageAreaComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Storage Area Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, StorageAreaComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Storage Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, StorageAreaComponent_div_20_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Storage Area Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, StorageAreaComponent_option_28_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, StorageAreaComponent_div_29_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Temperature Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Temperature Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function StorageAreaComponent_Template_select_change_43_listener($event) { return ctx.GetTempdetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, StorageAreaComponent_option_46_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, StorageAreaComponent_div_47_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Min Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, StorageAreaComponent_div_53_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Max Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Temperature Controlled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " Area Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "AreaLength");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, StorageAreaComponent_div_73_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "AreaBreadth");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, StorageAreaComponent_div_79_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Area Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, StorageAreaComponent_div_85_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " Storage Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, StorageAreaComponent_div_91_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Is Storable");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "ag-grid-angular", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.tab);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.Storage_Area_Name.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Storage_Area_Name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c0, ctx.submitted && ctx.f.StorageAreaCode.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.StorageAreaCode.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c0, ctx.submitted && ctx.f.StorageAreaTypeID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.StorageAreaTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.StorageAreaTypeID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](33, _c0, ctx.submitted && ctx.f.TemperatureCategoryID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.TempCatList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.TemperatureCategoryID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.TemperatureCategoryID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](35, _c0, ctx.submitted && ctx.f.IsTemparatureControlled.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](37, _c0, ctx.submitted && ctx.f.AreaLength.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.AreaLength.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](39, _c0, ctx.submitted && ctx.f.AreaBreadth.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.AreaBreadth.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](41, _c0, ctx.submitted && ctx.f.AreaHeight.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.AreaHeight.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](43, _c0, ctx.submitted && ctx.f.StorageCapacity.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.StorageCapacity.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.HideSaveButton)("value", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.StorageAreaList)("columnDefs", ctx.StorageArea1)("frameworkComponents", ctx.frameworkComponents);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yYWdlLWFyZWEuY29tcG9uZW50LnNjc3MifQ== */"] });
class StorageAreaDetail {
    constructor() {
        this.StorageAreaID = 0;
        this.WareHouseID = 0;
        this.StorageAreaCode = 0;
        this.StorageArea = 0;
        this.StorageAreaMasterID = 0;
        this.StorageName = 0;
        this.StorageAreaTypeID = 0;
        this.StorageAreaType = 0;
        this.ParentStorageAreaID = 0;
        this.IsStorable = 0;
        this.IsTemparatureControlled = 0;
        this.Preference = 0;
        this.MinTempareture = 0;
        this.MaxTempareture = 0;
        this.TemperatureCategoryID = 0;
        this.AreaLength = 0;
        this.AreaHeight = 0;
        this.AreaBreadth = 0;
        this.StorageCapacity = 0;
    }
}


/***/ }),

/***/ 83242:
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/setup/warehouse/warehouse-edit-button/warehouse-edit-button.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseEditButtonComponent": function() { return /* binding */ WarehouseEditButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class WarehouseEditButtonComponent {
    constructor() {
        this.label = '';
    }
    agInit(params) {
        this.params = params;
        this.label = this.params.label || null;
    }
    refresh(params) {
        return true;
    }
    onClick($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            const params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    }
}
WarehouseEditButtonComponent.ɵfac = function WarehouseEditButtonComponent_Factory(t) { return new (t || WarehouseEditButtonComponent)(); };
WarehouseEditButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarehouseEditButtonComponent, selectors: [["app-warehouse-edit-button"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"]], template: function WarehouseEditButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarehouseEditButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtZWRpdC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 52762:
/*!***************************************************************!*\
  !*** ./src/app/routes/setup/warehouse/warehouse.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseComponent": function() { return /* binding */ WarehouseComponent; },
/* harmony export */   "WareHouseDetail": function() { return /* binding */ WareHouseDetail; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community */ 79574);
/* harmony import */ var _warehouse_edit_button_warehouse_edit_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-edit-button/warehouse-edit-button.component */ 83242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ag-grid-angular */ 82022);

















function WarehouseComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter WareHouse Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WarehouseComponent_div_14_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.WareHouseName == null ? null : ctx_r0.f.WareHouseName.errors == null ? null : ctx_r0.f.WareHouseName.errors.required);
} }
function WarehouseComponent_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter WareHouse Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WarehouseComponent_div_20_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.WareHouseCode == null ? null : ctx_r1.f.WareHouseCode.errors == null ? null : ctx_r1.f.WareHouseCode.errors.required);
} }
function WarehouseComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", p_r10.CompanyID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r10.CompanyName, "");
} }
function WarehouseComponent_div_30_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WarehouseComponent_div_30_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.CompanyID == null ? null : ctx_r3.f.CompanyID.errors == null ? null : ctx_r3.f.CompanyID.errors.required);
} }
function WarehouseComponent_div_37_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Address1 Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WarehouseComponent_div_37_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.f.Address1 == null ? null : ctx_r4.f.Address1.errors == null ? null : ctx_r4.f.Address1.errors.required);
} }
function WarehouseComponent_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", p_r13.CityID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](p_r13.City);
} }
function WarehouseComponent_div_89_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Please Choose Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WarehouseComponent_div_89_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.Logo == null ? null : ctx_r6.f.Logo.errors == null ? null : ctx_r6.f.Logo.errors.required);
} }
function WarehouseComponent_img_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 36);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r7.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class WarehouseComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.HideSaveButton = true;
        this.submitted = false;
        this.tab = 0;
        this.SaveData2 = {};
        this.WareHouseDetail = [];
        this.WareHouseID = 0;
        this.url = '';
        this.imagePreview = '';
        this.ImageDT = '';
        this.WarehouselistColumn = [
            {
                headerName: 'Action', width: 100, floatingFilter: false,
                cellRenderer: "buttonRenderer",
                cellRendererParams: {
                    // onClick: this.onBtnClick1.bind(this),
                    onClick: this.editWarehouse.bind(this),
                    label: 'Click 1'
                }
            },
            {
                headerName: 'WareHouseID',
                field: 'WareHouseID',
                sortable: true,
                hide: true
            },
            {
                headerName: 'WareHouseName',
                field: 'WareHouseName',
                sortable: true,
                minWidth: 170,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'WareHouseCode',
                field: 'WareHouseCode',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'CompanyID',
                field: 'CompanyID',
                sortable: true,
                hide: true
            },
            {
                headerName: 'CompanyName',
                field: 'CompanyName',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'Address1',
                field: 'Address1',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'Address2',
                field: 'Address2',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'Address3',
                field: 'Address3',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'TelNumber',
                field: 'TelNumber',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'Fax',
                field: 'Fax',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'EmailID',
                field: 'EmailID',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'City',
                field: 'City',
                sortable: true,
                minWidth: 150,
                filter: 'agTextColumnFilter', floatingFilter: true,
            },
            {
                headerName: 'Logo',
                field: 'Logo',
                sortable: true,
                minWidth: 150,
                hide: true,
            },
            {
                headerName: 'IsActive',
                field: 'IsActive',
                sortable: true,
                minWidth: 150,
                hide: true,
            },
        ];
        this.currentUser = this.api.getCurrentUser();
        this.frameworkComponents = {
            buttonRenderer: _warehouse_edit_button_warehouse_edit_button_component__WEBPACK_IMPORTED_MODULE_2__.WarehouseEditButtonComponent,
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            WareHouseCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            WareHouseName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            CompanyID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Address1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Address2: [null],
            Address3: [null],
            TelNumber: [null],
            Fax: [null],
            EmailID: [null],
            CBCityID: [null],
            Logo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            IsActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        this.WareHouseID = this.currentUser.warehouseId;
        this.BindDropdown();
    }
    BindDropdown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            // const WarehouseData={
            //   id: this.currentUser.warehouseId,
            //   userid:0,
            //   companyId :0
            //   };
            this.api.get('/Company_Select/Company_Select1').subscribe(data => { this.CompanyList = data; console.log("company", data); }, error => { console.error(error); });
            this.api.get('/City/Cities_Select').subscribe(data => { this.CitiesList = data; }, error => { console.error(error); });
            this.api.get('/Warehouse/GetWarehouse').subscribe(data => { this.WarehouseList = data; console.log(data); }, error => { console.error(error); });
        });
    }
    get f() { return this.form.controls; }
    tabchange(event) {
        this.tab = event;
    }
    // onFileSelected(fileInputEvent: any) {
    //   const STRING_CHAR = TYPED_ARRAY.reduce((data:any, byte:any)=> {
    //     return data + String.fromCharCode(byte);
    //     }, '');
    // }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
                var imageData = this.imagePreview.replace("data:image/jpeg;base64,", "");
                this.ImageDT = imageData;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    onSubmit(formData) {
        console.log(formData);
        this.submitted = true;
        if (this.form.invalid) {
            //alert("invalid form");
            return;
        }
        else {
            this.HideSaveButton = false;
            /////////var submitval = JSON.stringify({ data: this.imagePreview});
            this.SaveData2 = {
                WarehouseID: this.currentUser.WarehouseID,
                CompanyID: this.form.value.CompanyID,
                WarehouseName: this.form.value.WareHouseName,
                WarehouseCode: this.form.value.WareHouseCode,
                Address1: this.form.value.Address1,
                Address2: this.form.value.Address2,
                Address3: this.form.value.Address3,
                TelNumber: this.form.value.TelNumber,
                Fax: this.form.value.Fax,
                EmailID: this.form.value.EmailID,
                CityId: this.form.value.CBCityID,
                Logo: this.ImageDT,
                createdby: this.currentUser.userId,
            };
            console.log(this.SaveData2);
            this.api.post('/Warehouse/Warehouse_Insert_Update', this.SaveData2).subscribe(data => {
                console.log(data);
                this.dialog.alert(data[0], '');
                // this.ResetForm();
                this.BindDropdown();
                this.form.reset();
                this.form.controls['WareHouseCode'].setErrors(null);
                this.form.controls['WareHouseName'].setErrors(null);
                this.form.controls['CompanyID'].setErrors(null);
                this.form.controls['GSTINNo'].setErrors(null);
                this.form.controls['Address1'].setErrors(null);
                this.form.controls['Logo'].setErrors(null);
                this.form.controls['Logo'].setErrors(null);
                // window.location.reload();
            }, error => { console.error(error); });
        }
    }
    editWarehouse(record) {
        console.log(record);
        this.WareHouseID = record.WareHouseID;
        const CompanyData = this.CompanyList.filter((x) => x.CompanyName == record.CompanyName);
        // const CityData=this.CitiesList.filter((x:any)=>x.City==record.City);
        const item = {
            // CompanyID:record.CompanyID,
            Address1: record.rowData.Address1,
            Address2: record.rowData.Address2,
            Address3: record.rowData.Address3,
            CBCityID: record.rowData.CityID == null ? 0 : record.rowData.CityID,
            CompanyID: CompanyData[0].CompanyID,
            EmailID: record.rowData.EmailID,
            Fax: record.rowData.Fax,
            IsActive: record.rowData.IsActive,
            Logo: record.rowData.Logo,
            TelNumber: record.rowData.TelNumber,
            WareHouseCode: record.rowData.WareHouseCode,
            WareHouseName: record.rowData.WareHouseName
        };
        this.form.setValue(item);
        this.tab = 0;
    }
}
WarehouseComponent.ɵfac = function WarehouseComponent_Factory(t) { return new (t || WarehouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__.MtxDialog)); };
WarehouseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WarehouseComponent, selectors: [["app-warehouse"]], decls: 99, vars: 29, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "WareHouse Master"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-6"], [1, "form-group"], ["type", "text", "formControlName", "WareHouseName", "id", "WareHouseName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "company"], ["type", "text", "formControlName", "WareHouseCode", "id", "WareHouseCode", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-12"], ["formControlName", "CompanyID", "id", "CompanyID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "Address1", "id", "Address1", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "Address2", "id", "Address2", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "Address3", "id", "Address3", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "TelNumber", "id", "TelNumber", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "Fax", "id", "Fax", 1, "form-control", "form-control-sm"], ["type", "email", "formControlName", "EmailID", "id", "EmailID", 1, "form-control", "form-control-sm"], ["formControlName", "CBCityID", "id", "CBCityID", 1, "form-control", "form-control-sm"], [1, "col-sm-6", "col-md-3"], ["type", "checkbox", "formControlName", "IsActive", "id", "IsActive", 1, "form-check-input", 2, "margin-top", "30px !important", "margin-left", "2px !important"], ["height", "200", 3, "src"], ["type", "file", "value", "select", "formControlName", "Logo", 3, "ngClass", "change"], ["height", "20%", "width", "25%", "class", "image", 3, "src", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", "margin-left", "20px !important"], ["label", "WarehouseList"], [2, "height", "100%", "box-sizing", "border-box"], [1, "ag-theme-alpine", 2, "height", "450px", 3, "rowData", "columnDefs", "frameworkComponents"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], ["height", "20%", "width", "25%", 1, "image", 3, "src"]], template: function WarehouseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function WarehouseComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tabchange($event); })("selectedIndexChange", function WarehouseComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function WarehouseComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "WareHouse Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WarehouseComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "WareHouse Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, WarehouseComponent_div_20_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, WarehouseComponent_option_29_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, WarehouseComponent_div_30_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Address 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, WarehouseComponent_div_37_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Address 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Contact No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Fax");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, WarehouseComponent_option_74_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "IsActive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Select Logo :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function WarehouseComponent_Template_input_change_88_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, WarehouseComponent_div_89_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, WarehouseComponent_img_90_Template, 1, 1, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "mat-tab", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "ag-grid-angular", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.tab);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.WareHouseName.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.WareHouseName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.WareHouseCode.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.WareHouseCode.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.CompanyID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.CompanyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.CompanyID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.Address1.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Address1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.CitiesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.Logo.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Logo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imagePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.WarehouseList)("columnDefs", ctx.WarehouselistColumn)("frameworkComponents", ctx.frameworkComponents);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UuY29tcG9uZW50LnNjc3MifQ== */"] });
class WareHouseDetail {
    constructor() {
        this.WarehouseID = 0;
        this.CompanyID = 0;
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_routes_setup_setup_module_ts-es2015.js.map