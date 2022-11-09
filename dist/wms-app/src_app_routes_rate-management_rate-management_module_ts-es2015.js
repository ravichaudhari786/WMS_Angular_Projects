"use strict";
(self["webpackChunkwms_app"] = self["webpackChunkwms_app"] || []).push([["src_app_routes_rate-management_rate-management_module_ts"],{

/***/ 85222:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/rate-management/rate-list/dropdown-button-ratelist/dropdown-button-ratelist.component.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownButtonRatelistComponent": function() { return /* binding */ DropdownButtonRatelistComponent; }
/* harmony export */ });
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-community */ 79574);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);






function DropdownButtonRatelistComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", i_r1.BillingCycleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r1.BillingCyclesName);
} }
class DropdownButtonRatelistComponent {
    constructor(api) {
        this.api = api;
        this.label = '';
        this.cellValue = 0;
        this.nrSelect = 0;
    }
    agInit(params) {
        // this.form = this.fb.group({
        //   cbbillingID:[0]
        // });
        this.params = params;
        this.label = this.params.label || null;
        this.api.get('/BillingCycles/BillingCycle_Select').subscribe(data => { this.billingCycleList = data; }, error => { console.error(error); });
        this.cellValue = this.getValueToDisplay(params);
        this.nrSelect = this.cellValue;
    }
    refresh(params) {
        this.cellValue = this.getValueToDisplay(params);
        return true;
    }
    getValueToDisplay(params) {
        return params.valueFormatted ? params.valueFormatted : params.value;
    }
    GetBillingID(selectData) {
        this.params.data[this.params.colDef.field] = Number(selectData.target.value);
        console.log("this.params", this.params.data);
    }
}
DropdownButtonRatelistComponent.ɵfac = function DropdownButtonRatelistComponent_Factory(t) { return new (t || DropdownButtonRatelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
DropdownButtonRatelistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DropdownButtonRatelistComponent, selectors: [["app-dropdown-button-ratelist"]], decls: 2, vars: 2, consts: [["id", "cbbillingID", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DropdownButtonRatelistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DropdownButtonRatelistComponent_Template_select_ngModelChange_0_listener($event) { return ctx.nrSelect = $event; })("change", function DropdownButtonRatelistComponent_Template_select_change_0_listener($event) { return ctx.GetBillingID($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DropdownButtonRatelistComponent_option_1_Template, 2, 2, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.nrSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.billingCycleList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1idXR0b24tcmF0ZWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 26364:
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/rate-management/rate-list/rate-list-button/rate-list-button.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateListButtonComponent": function() { return /* binding */ RateListButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class RateListButtonComponent {
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
RateListButtonComponent.ɵfac = function RateListButtonComponent_Factory(t) { return new (t || RateListButtonComponent)(); };
RateListButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateListButtonComponent, selectors: [["app-rate-list-button"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"]], template: function RateListButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RateListButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRlLWxpc3QtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6112:
/*!*************************************************************************!*\
  !*** ./src/app/routes/rate-management/rate-list/rate-list.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateListComponent": function() { return /* binding */ RateListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community */ 79574);
/* harmony import */ var _rate_list_button_rate_list_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-list-button/rate-list-button.component */ 26364);
/* harmony import */ var _dropdown_button_ratelist_dropdown_button_ratelist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-button-ratelist/dropdown-button-ratelist.component */ 85222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular */ 82022);



















function RateListComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", p_r4.RateID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", p_r4.RateDescription, "");
} }
function RateListComponent_div_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RateListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RateListComponent_div_17_span_1_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.RateID == null ? null : ctx_r1.f.RateID.errors == null ? null : ctx_r1.f.RateID.errors.required);
} }
function RateListComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", p_r6.ProductID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", p_r6.ProductName, "");
} }
function RateListComponent_div_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RateListComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RateListComponent_div_27_span_1_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.ProductID == null ? null : ctx_r3.f.ProductID.errors == null ? null : ctx_r3.f.ProductID.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RateListComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.submitted = false;
        this.SaveData = {};
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.tab = 0;
        this.UserID = 0;
        this.HideSaveButton = true;
        this.ServiceDatasave = {};
        this.RateServiceList = [];
        this.RateListID = 0;
        this.TaxID = 0;
        this.LTD_Customer = [];
        this.RateID = 0;
        this.ProductID = 0;
        this.RateColumn = [
            {
                headerName: 'Action', width: 100, floatingFilter: false,
                cellRenderer: "buttonRenderer",
                cellRendererParams: {
                    // onClick: this.onBtnClick1.bind(this),
                    onClick: this.onEditService.bind(this),
                    label: 'Click 1'
                }
            },
            {
                headerName: 'RateListID',
                field: 'RateListID',
                hide: true
            },
            {
                headerName: 'RateDescription',
                field: 'RateDescription',
                minWidth: 200,
            },
            {
                headerName: 'ProductID',
                field: 'ProductID',
                hide: true
            },
            {
                headerName: 'ProductName',
                field: 'ProductName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 200,
            },
            {
                headerName: 'ServiceName',
                field: 'ServiceName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 200,
            },
            {
                headerName: 'Rate',
                field: 'Rate',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 170,
            },
            {
                headerName: 'L_Rate',
                field: 'L_Rate',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 170,
            },
            {
                headerName: 'TaxDescription',
                field: 'TaxDescription',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 200,
            },
            {
                headerName: 'BillingCyclesName ',
                field: 'BillingCyclesName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 170,
            }
        ];
        this.ServicecolumnDefs = [
            { headerName: 'ServiceID ', field: 'ServiceID ', hide: true, },
            { headerName: 'ServiceName', field: 'ServiceName', hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
            { headerName: 'ServiceType', field: 'ServiceType', hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
            {
                headerName: 'Rate', field: 'Rate', hide: false, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
                valueParser: "Number(newValue)", editable: true, cellStyle: params => {
                    if (params.value > 0) {
                        return { color: 'white', backgroundColor: '#FF0000' };
                    }
                    else {
                        return { color: 'black', backgroundColor: '#98FB98' };
                    }
                }
            },
            {
                headerName: 'L_Rate', field: 'L_Rate', hide: false, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
                valueParser: "Number(newValue)", editable: true, cellStyle: params => {
                    if (params.value > 0) {
                        return { color: 'white', backgroundColor: '#FF0000' };
                    }
                    else {
                        return { color: 'black', backgroundColor: '#98FB98' };
                    }
                }
            },
            {
                headerName: 'BillingCycleID', field: 'BillingCycleID', minWidth: 50, cellRenderer: 'comboxRender',
                cellRendererParams: {
                    //onClick: this.OnCancelledShifting.bind(this),
                    label: 'Click 1'
                }
            }
        ];
        this.currentUser = this.api.getCurrentUser();
        this.frameworkComponents = {
            buttonRenderer: _rate_list_button_rate_list_button_component__WEBPACK_IMPORTED_MODULE_2__.RateListButtonComponent,
        };
        this.frameworkComponentscb = {
            comboxRender: _dropdown_button_ratelist_dropdown_button_ratelist_component__WEBPACK_IMPORTED_MODULE_3__.DropdownButtonRatelistComponent,
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            RateID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            ProductID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
        this.BindDropdown();
        this.billingCycleList = [];
    }
    BindDropdown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.api.get('/Rate/RateList_Select').subscribe(data => {
                this.rateList = data; //console.log("rateList", data)
            }, error => { console.error(error); });
            this.api.get('/RateMaster/Rate_Select').subscribe(data => { this.ratedetail = data; }, error => { console.error(error); });
            this.api.get('/ProductList').subscribe(data => { this.productList = data; }, error => { console.error(error); });
        });
    }
    get f() { return this.form.controls; }
    tabchange(event) {
        this.tab = event;
    }
    // onDOCellKeyPress(e:any){
    // }
    OnProductSelect(id) {
        const serviceData = {
            "SpecialRateID": 0,
            "RateID": this.form.value.RateID,
            "ProductID": this.form.value.ProductID,
            "WarehouseID": 0,
            "TaxID": 0,
        };
        this.api.post('/Rate/Rate_Services', serviceData).subscribe(data => {
            if (data.Table.length == 0) {
                this.RateServiceList = data.Table1;
            }
            else {
                this.RateServiceList = data.Table;
            }
            console.log(data.Table);
            console.log(data.Table1);
        }, error => { console.error(error); });
    }
    Customer() {
        const LTD_Customer = {
            "CustomerID": 0
        };
    }
    onSubmit(formData) {
        // console.log(this.RateServiceList);
        // console.log(formData)
        this.submitted = true;
        if (this.form.invalid) {
            //alert("invalid form");
            return;
        }
        else {
            this.HideSaveButton = false;
            this.ServiceDatasave = {
                RateListID: this.RateListID,
                RateID: this.form.value.RateID,
                ProductID: this.form.value.ProductID,
                WarehouseID: this.currentUser.warehouseId,
                LTD_Rate: this.RateServiceList,
                TaxID: this.TaxID,
                CreatedBy: this.currentUser.userId,
                LTD_Customer: this.LTD_Customer
            };
            console.log(this.ServiceDatasave);
            this.api.post('/Rate/Ratelist_Insert', this.ServiceDatasave).subscribe(data => {
                this.dialog.alert(data.Table[0].message, '');
                // this.ResetForm();
                this.BindDropdown();
                this.form.reset();
                this.form.controls['RateID'].setErrors(null);
                this.form.controls['ProductID'].setErrors(null);
                // window.location.reload();
            }, error => { console.error(error); });
        }
    }
    onEditService(record) {
        console.log(record.rowData);
        //  this.RateID=record.RateID;
        // const RatedId = this.ratedetail.filter((x: any) => x.RateDescription == record.RateDescription);
        // const item: any = {
        //   RateID: record.RateID,
        //   BillingCyclesName: record.BillingCyclesName,
        //   L_Rate: record.L_Rate,
        //   ProductID: record.ProductID,
        //   ProductName: record.ProductName,
        //   Rate: record.Rate,
        //   RateDescription: record.RateDescription,
        //   RateListID: record.RateListID,
        //   ServiceName: record.ServiceName,
        //   TaxDescription: record.TaxDescription,
        // }
        // 
        // this.tab = 0;
        // const item: any = {
        //   RateID: record.RateID,
        //   BillingCyclesName: record.BillingCyclesName,
        //   L_Rate: record.L_Rate,
        //   ProductID: record.ProductID,
        //   ProductName: record.ProductName,
        //   Rate: record.Rate,
        //   RateDescription: record.RateDescription,
        //   RateListID: record.RateListID,
        //   ServiceName: record.ServiceName,
        //   TaxDescription: record.TaxDescription,
        // }
        const item = {
            RateID: Number(1),
            ProductID: record.rowData.ProductID
        };
        this.RateServiceList;
        this.form.setValue(item);
        const serviceData = {
            "SpecialRateID": 0,
            "RateID": Number(1),
            "ProductID": record.rowData.ProductID,
            "WarehouseID": 0,
            "TaxID": 0,
        };
        this.api.post('/Rate/Rate_Services', serviceData).subscribe(data => {
            if (data.Table.length == 0) {
                this.RateServiceList = data.Table1;
            }
            else {
                this.RateServiceList = data.Table;
            }
            console.log(data.Table);
            console.log(data.Table1);
        }, error => { console.error(error); });
    }
}
RateListComponent.ɵfac = function RateListComponent_Factory(t) { return new (t || RateListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_9__.MtxDialog)); };
RateListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RateListComponent, selectors: [["app-rate-list"]], decls: 42, vars: 20, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Rate"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12"], [1, "form-group"], ["formControlName", "RateID", "id", "RateID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "ProductID", "id", "ProductID", 1, "form-control", "form-control-sm", 3, "ngClass", "change"], [1, "col-12"], [1, "font-weight-bold"], [1, "ag-theme-alpine", 2, "height", "500px", 3, "rowData", "columnDefs", "frameworkComponents"], [1, "col-sm-6"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "value", "hidden"], ["label", "List"], [2, "height", "100%", "box-sizing", "border-box"], [1, "ag-theme-alpine", 2, "height", "450px", 3, "rowData", "columnDefs", "frameworkComponents"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"]], template: function RateListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedIndexChange", function RateListComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tabchange($event); })("selectedIndexChange", function RateListComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function RateListComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Rate List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RateListComponent_option_16_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, RateListComponent_div_17_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RateListComponent_Template_select_change_23_listener($event) { return ctx.OnProductSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, RateListComponent_option_26_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, RateListComponent_div_27_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Service Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "ag-grid-angular", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "ag-grid-angular", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedIndex", ctx.tab);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.RateID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ratedetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.RateID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.ProductID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.productList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.ProductID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.RateServiceList)("columnDefs", ctx.ServicecolumnDefs)("frameworkComponents", ctx.frameworkComponentscb);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.submitted)("hidden", !ctx.HideSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.rateList)("columnDefs", ctx.RateColumn)("frameworkComponents", ctx.frameworkComponents);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 19950:
/*!**************************************************************************!*\
  !*** ./src/app/routes/rate-management/rate-management-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateManagementRoutingModule": function() { return /* binding */ RateManagementRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _rate_list_rate_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-list/rate-list.component */ 6112);
/* harmony import */ var _special_rates_special_rates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./special-rates/special-rates.component */ 62927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'RateList', component: _rate_list_rate_list_component__WEBPACK_IMPORTED_MODULE_0__.RateListComponent },
    { path: 'SpecialRates', component: _special_rates_special_rates_component__WEBPACK_IMPORTED_MODULE_1__.SpecialRatesComponent },
];
class RateManagementRoutingModule {
}
RateManagementRoutingModule.ɵfac = function RateManagementRoutingModule_Factory(t) { return new (t || RateManagementRoutingModule)(); };
RateManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RateManagementRoutingModule });
RateManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RateManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 49325:
/*!******************************************************************!*\
  !*** ./src/app/routes/rate-management/rate-management.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateManagementModule": function() { return /* binding */ RateManagementModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 82022);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _rate_management_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-management-routing.module */ 19950);
/* harmony import */ var _rate_list_rate_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-list/rate-list.component */ 6112);
/* harmony import */ var _rate_list_rate_list_button_rate_list_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate-list/rate-list-button/rate-list-button.component */ 26364);
/* harmony import */ var _special_rates_special_rates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special-rates/special-rates.component */ 62927);
/* harmony import */ var _special_rates_special_rates_edit_button_special_rates_edit_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./special-rates/special-rates-edit-button/special-rates-edit-button.component */ 71629);
/* harmony import */ var _special_rates_dropdown_grid_special_rates_dropdown_grid_special_rates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./special-rates/dropdown-grid-special-rates/dropdown-grid-special-rates.component */ 43258);
/* harmony import */ var _rate_list_dropdown_button_ratelist_dropdown_button_ratelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rate-list/dropdown-button-ratelist/dropdown-button-ratelist.component */ 85222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);













class RateManagementModule {
}
RateManagementModule.ɵfac = function RateManagementModule_Factory(t) { return new (t || RateManagementModule)(); };
RateManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RateManagementModule });
RateManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _rate_management_routing_module__WEBPACK_IMPORTED_MODULE_1__.RateManagementRoutingModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule.withComponents([]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RateManagementModule, { declarations: [_rate_list_rate_list_component__WEBPACK_IMPORTED_MODULE_2__.RateListComponent,
        _rate_list_rate_list_button_rate_list_button_component__WEBPACK_IMPORTED_MODULE_3__.RateListButtonComponent,
        _special_rates_special_rates_component__WEBPACK_IMPORTED_MODULE_4__.SpecialRatesComponent,
        _special_rates_special_rates_edit_button_special_rates_edit_button_component__WEBPACK_IMPORTED_MODULE_5__.SpecialRatesEditButtonComponent,
        _special_rates_dropdown_grid_special_rates_dropdown_grid_special_rates_component__WEBPACK_IMPORTED_MODULE_6__.DropdownGridSpecialRatesComponent,
        _rate_list_dropdown_button_ratelist_dropdown_button_ratelist_component__WEBPACK_IMPORTED_MODULE_7__.DropdownButtonRatelistComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _rate_management_routing_module__WEBPACK_IMPORTED_MODULE_1__.RateManagementRoutingModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule] }); })();


/***/ }),

/***/ 43258:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/routes/rate-management/special-rates/dropdown-grid-special-rates/dropdown-grid-special-rates.component.ts ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownGridSpecialRatesComponent": function() { return /* binding */ DropdownGridSpecialRatesComponent; }
/* harmony export */ });
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-community */ 79574);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _special_rates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../special-rates.component */ 62927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);








function DropdownGridSpecialRatesComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r1.BillingCycleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r1.BillingCyclesName);
} }
class DropdownGridSpecialRatesComponent {
    constructor(api, SpecialRatesComponent) {
        this.api = api;
        this.SpecialRatesComponent = SpecialRatesComponent;
        this.label = '';
        this.cellValue = 0;
        this.nrSelect = 0;
    }
    agInit(params) {
        // this.form = this.fb.group({
        //   cbbillingID:[0]
        // });
        this.params = params;
        this.label = this.params.label || null;
        this.api.get('/BillingCycles/BillingCycle_Select').subscribe(data => { this.billingCycleList = data; }, error => { console.error(error); });
        this.cellValue = this.getValueToDisplay(params);
        this.nrSelect = this.cellValue;
    }
    refresh(params) {
        this.cellValue = this.getValueToDisplay(params);
        return true;
    }
    getValueToDisplay(params) {
        return params.valueFormatted ? params.valueFormatted : params.value;
    }
    GetBillingID(selectData) {
        this.params.data[this.params.colDef.field] = Number(selectData.target.value);
        console.log("this.params", this.params.data);
    }
}
DropdownGridSpecialRatesComponent.ɵfac = function DropdownGridSpecialRatesComponent_Factory(t) { return new (t || DropdownGridSpecialRatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_special_rates_component__WEBPACK_IMPORTED_MODULE_2__.SpecialRatesComponent)); };
DropdownGridSpecialRatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DropdownGridSpecialRatesComponent, selectors: [["app-dropdown-grid-special-rates"]], decls: 2, vars: 2, consts: [["id", "cbbillingID", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DropdownGridSpecialRatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DropdownGridSpecialRatesComponent_Template_select_ngModelChange_0_listener($event) { return ctx.nrSelect = $event; })("change", function DropdownGridSpecialRatesComponent_Template_select_change_0_listener($event) { return ctx.GetBillingID($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DropdownGridSpecialRatesComponent_option_1_Template, 2, 2, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nrSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.billingCycleList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1ncmlkLXNwZWNpYWwtcmF0ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 71629:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/routes/rate-management/special-rates/special-rates-edit-button/special-rates-edit-button.component.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialRatesEditButtonComponent": function() { return /* binding */ SpecialRatesEditButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SpecialRatesEditButtonComponent {
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
SpecialRatesEditButtonComponent.ɵfac = function SpecialRatesEditButtonComponent_Factory(t) { return new (t || SpecialRatesEditButtonComponent)(); };
SpecialRatesEditButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialRatesEditButtonComponent, selectors: [["app-special-rates-edit-button"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"]], template: function SpecialRatesEditButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpecialRatesEditButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjaWFsLXJhdGVzLWVkaXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 62927:
/*!*********************************************************************************!*\
  !*** ./src/app/routes/rate-management/special-rates/special-rates.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialRatesComponent": function() { return /* binding */ SpecialRatesComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community */ 79574);
/* harmony import */ var _special_rates_edit_button_special_rates_edit_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-rates-edit-button/special-rates-edit-button.component */ 71629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _dropdown_grid_special_rates_dropdown_grid_special_rates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-grid-special-rates/dropdown-grid-special-rates.component */ 43258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions */ 56830);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ag-grid-angular */ 82022);



















function SpecialRatesComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", c_r5.CustomerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r5.CustomerName, "");
} }
function SpecialRatesComponent_div_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter Customer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SpecialRatesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SpecialRatesComponent_div_17_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.cbCustomerID == null ? null : ctx_r1.f.cbCustomerID.errors == null ? null : ctx_r1.f.cbCustomerID.errors.required);
} }
function SpecialRatesComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", p_r7.ProductID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", p_r7.ProductName, "");
} }
function SpecialRatesComponent_div_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter Product name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SpecialRatesComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SpecialRatesComponent_div_27_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.cbProductID == null ? null : ctx_r3.f.cbProductID.errors == null ? null : ctx_r3.f.cbProductID.errors.required);
} }
function SpecialRatesComponent_div_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter Date And Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SpecialRatesComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SpecialRatesComponent_div_34_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.dtWefDate == null ? null : ctx_r4.f.dtWefDate.errors == null ? null : ctx_r4.f.dtWefDate.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SpecialRatesComponent {
    constructor(fb, api, dialog) {
        this.fb = fb;
        this.api = api;
        this.dialog = dialog;
        this.submitted = false;
        this.tab = 0;
        this.HideSaveButton = true;
        this.SpecialServiceList = [];
        this.ServiceDatasave = {};
        this.SpecialRateID = 0;
        this.TaxID = 0;
        this.LTD_Customer = [];
        this.BillingCycleID = 0;
        this.SpecialRateColumn = [
            {
                headerName: 'Action', width: 100, floatingFilter: false,
                cellRenderer: "buttonRenderer",
                cellRendererParams: {
                    // onClick: this.onBtnClick1.bind(this),
                    onClick: this.onEditSpecialRate.bind(this),
                    label: 'Click 1'
                }
            },
            {
                headerName: 'SpecialRateID',
                field: 'SpecialRateID',
                hide: true
            },
            {
                headerName: 'RateDescription ',
                field: 'RateDescription',
                minWidth: 200,
            },
            {
                headerName: 'RateID',
                field: 'RateID',
                hide: true
            },
            {
                headerName: 'CustomerID',
                field: 'CustomerID',
                minWidth: 200,
                hide: true
            },
            {
                headerName: 'CustomerName',
                field: 'CustomerName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 200,
            },
            {
                headerName: 'ProductID',
                field: 'ProductID',
                minWidth: 170,
                hide: true
            },
            {
                headerName: 'ProductName',
                field: 'ProductName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 170,
            },
            {
                headerName: 'ServiceName',
                field: 'ServiceName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 170,
            },
            {
                headerName: 'TaxDescription',
                field: 'TaxDescription',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 200,
            },
            {
                headerName: 'BillingCyclesName',
                field: 'BillingCyclesName',
                filter: 'agTextColumnFilter', floatingFilter: true,
                minWidth: 200,
            },
            {
                headerName: 'WefDate',
                field: 'WefDate',
                minWidth: 200,
            },
        ];
        this.ServicecolumnDefs = [
            { headerName: 'ServiceID ', field: 'ServiceID ', hide: true, },
            { headerName: 'ServiceName', field: 'ServiceName', minWidth: 100, hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
            { headerName: 'ServiceType', field: 'ServiceType', minWidth: 50, hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
            {
                headerName: 'Rate', field: 'Rate', hide: false, minWidth: 50, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
                valueParser: "Number(newValue)", editable: true, cellStyle: params => {
                    if (params.value > 0) {
                        return { color: 'white', backgroundColor: '#FF0000' };
                    }
                    else {
                        return { color: 'black', backgroundColor: '#98FB98' };
                    }
                }
            },
            {
                headerName: 'L_Rate', field: 'L_Rate', hide: false, minWidth: 50, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
                valueParser: "Number(newValue)", editable: true, cellStyle: params => {
                    if (params.value > 0) {
                        return { color: 'white', backgroundColor: '#FF0000' };
                    }
                    else {
                        return { color: 'black', backgroundColor: '#98FB98' };
                    }
                }
            },
            // { headerName: 'BillingCycleID', field: 'BillingCycleID'},
            {
                headerName: 'BillingCycleID', field: 'BillingCycleID', minWidth: 50, cellRenderer: 'comboxRender',
                cellRendererParams: {
                    //onClick: this.OnCancelledShifting.bind(this),
                    label: 'Click 1'
                }
            }
        ];
        this.currentUser = this.api.getCurrentUser();
        this.frameworkComponents = {
            buttonRenderer: _special_rates_edit_button_special_rates_edit_button_component__WEBPACK_IMPORTED_MODULE_2__.SpecialRatesEditButtonComponent,
        };
        this.frameworkComponentscb = {
            comboxRender: _dropdown_grid_special_rates_dropdown_grid_special_rates_component__WEBPACK_IMPORTED_MODULE_3__.DropdownGridSpecialRatesComponent,
        };
        const dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
        this.todayDate = dateSendingToServer;
        this.productdate = new Date(); //DatePipe('en-US');
    }
    ngOnInit() {
        this.form = this.fb.group({
            cbCustomerID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            cbProductID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            dtWefDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
        this.BindDropdown();
        this.billingCycleList = [];
    }
    BindDropdown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.api.get('/SpecialRates/SpecialRate_List').subscribe(data => { this.specialrateList = data; }, error => { console.error(error); });
            this.api.get('/ProductList').subscribe(data => { this.productList = data; }, error => { console.error(error); });
            this.api.get('/Customer').subscribe(data => { this.customerList = data; }, error => { console.error(error); });
            this.api.get('/BillingCycles/BillingCycle_Select').subscribe(data => { this.billingCycleList = data; }, error => { console.error(error); });
        });
    }
    get f() { return this.form.controls; }
    tabchange(event) {
        this.tab = event;
    }
    OnProductSelect(id) {
        const serviceData = {
            SpecialRateID: 0,
            RateID: 0,
            ProductID: this.form.value.cbProductID,
            WarehouseID: 0,
            L_TD_Rate: [
                {
                    ServiceID: 0,
                    Rate: 0,
                    L_Rate: 0,
                    BillingCycleID: 0
                }
            ],
            TaxID: 0,
            CreatedBy: 0,
            CustomerID: this.form.value.cbCustomerID,
            wef: "",
        };
        //console.log(serviceData);
        this.api.post('/SpecialRates/SpecialRate_Services', serviceData).subscribe(data => {
            //console.log(data);
            if (data.Table.length == 0) {
                this.SpecialServiceList = data.Table1;
            }
            else {
                this.SpecialServiceList = data.Table;
            }
            // console.log(data.Table);
            // console.log(data.Table1);
        }, error => { console.error(error); });
    }
    onSubmit(formData) {
        // console.log(" this.SpecialServiceList", this.SpecialServiceList);
        //console.log(formData)
        this.submitted = true;
        if (this.form.invalid) {
            //alert("invalid form");
            return;
        }
        else {
            this.HideSaveButton = false;
            this.ServiceDatasave = {
                SpecialRateID: this.SpecialRateID,
                RateID: 2,
                ProductID: this.form.value.cbProductID,
                WarehouseID: this.currentUser.warehouseId,
                L_TD_Rate: this.SpecialServiceList,
                TaxID: this.TaxID,
                CreatedBy: this.currentUser.userId,
                CustomerID: this.form.value.cbCustomerID,
                wef: this.form.value.dtWefDate
            };
            //console.log(this.ServiceDatasave)
            this.api.post('/SpecialRates/SpecialRatelist_Insert', this.ServiceDatasave).subscribe(data => {
                this.dialog.alert(data.Table[0].message, '');
                // this.ResetForm();
                this.BindDropdown();
                this.form.reset();
                this.form.controls['cbCustomerID'].setErrors(null);
                this.form.controls['cbProductID'].setErrors(null);
                const inwardeditedDate = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
                this.todayDate = inwardeditedDate;
                this.form.controls['dtWefDate'].setValue(this.todayDate);
                // window.location.reload();
            }, error => { console.error(error); });
        }
    }
    onEditSpecialRate(record) {
        //console.log(record.rowData)
        const item = {
            cbCustomerID: record.rowData.CustomerID,
            cbProductID: record.rowData.ProductID,
            dtWefDate: record.rowData.WefDate,
        };
        // this.SpecialServiceList
        this.form.setValue(item);
        const serviceData = {
            SpecialRateID: 0,
            RateID: 0,
            ProductID: record.rowData.ProductID,
            WarehouseID: 0,
            L_TD_Rate: [
                {
                    ServiceID: 0,
                    Rate: 0,
                    L_Rate: 0,
                    BillingCycleID: 0
                }
            ],
            TaxID: 0,
            CreatedBy: 0,
            CustomerID: record.rowData.CustomerID,
            wef: "",
        };
        //console.log("item", serviceData);
        this.api.post('/SpecialRates/SpecialRate_Services', serviceData).subscribe(data => {
            // console.log(data);
            if (data.Table.length == 0) {
                this.SpecialServiceList = data.Table1;
            }
            else {
                this.SpecialServiceList = data.Table;
            }
            // console.log(data.Table);
            // console.log(data.Table1);
        }, error => { console.error(error); });
    }
}
SpecialRatesComponent.ɵfac = function SpecialRatesComponent_Factory(t) { return new (t || SpecialRatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_9__.MtxDialog)); };
SpecialRatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SpecialRatesComponent, selectors: [["app-special-rates"]], decls: 49, vars: 28, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedIndexChange"], ["label", "Special Rate"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "row", "pt-2"], [1, "col-sm-12", "col-md-12"], [1, "form-group"], ["formControlName", "cbCustomerID", "id", "cbCustomerID", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-6"], ["formControlName", "cbProductID", "id", "cbProductID", 1, "form-control", "form-control-sm", 3, "ngClass", "change"], ["type", "datetime-local", "formControlName", "dtWefDate", "id", "dtWefDate", "placeholder", "yyyy-MM-dd", "name", "dtWefDate", 1, "form-control", "form-control-rounded", 3, "ngModel", "ngClass"], [1, "col-12"], [1, "font-weight-bold"], [1, "ag-theme-alpine", 2, "height", "500px", 3, "rowData", "columnDefs", "frameworkComponents"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "width", "85px !important", "margin-top", "20px !important", 3, "value", "hidden"], ["label", "List"], [2, "height", "100%", "box-sizing", "border-box"], [1, "ag-theme-alpine", 2, "height", "450px", 3, "rowData", "columnDefs", "frameworkComponents"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SpecialRatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedIndexChange", function SpecialRatesComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tabchange($event); })("selectedIndexChange", function SpecialRatesComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) { return ctx.tab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SpecialRatesComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SpecialRatesComponent_option_16_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SpecialRatesComponent_div_17_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SpecialRatesComponent_Template_select_change_23_listener($event) { return ctx.OnProductSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, SpecialRatesComponent_option_26_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, SpecialRatesComponent_div_27_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "With Effective Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, SpecialRatesComponent_div_34_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Service Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "ag-grid-angular", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "ag-grid-angular", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedIndex", ctx.tab);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.cbCustomerID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.customerList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cbCustomerID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.cbProductID.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.productList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cbProductID.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](33, 19, ctx.todayDate, "yyyy-MM-dd hh:mm:ss"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.dtWefDate.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.dtWefDate.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.SpecialServiceList)("columnDefs", ctx.ServicecolumnDefs)("frameworkComponents", ctx.frameworkComponentscb);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.submitted)("hidden", !ctx.HideSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.specialrateList)("columnDefs", ctx.SpecialRateColumn)("frameworkComponents", ctx.frameworkComponents);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__.AgGridAngular], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjaWFsLXJhdGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_routes_rate-management_rate-management_module_ts-es2015.js.map