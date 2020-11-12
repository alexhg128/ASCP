(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");







const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"]
    },
    {
        path: 'connect',
        component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_2__["ConnectComponent"]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__["ConnectComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__["ConnectComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CommonService {
    constructor(http) {
        this.http = http;
        this.contact = '';
        this.userToken = '';
        this.objectId = '';
    }
    getContact() {
        return this.contact;
    }
    setContact(contact) {
        this.contact = contact;
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.http.post('https://api.backendless.com/9176FE65-2FB5-2B00-FFED-BEB6A480BC00/0397420A-AA65-4BA2-9A1F-D4C9583099C8/users/login', {
                'login': email,
                'password': password
            })
                .toPromise()
                .then((data) => {
                this.userToken = data['user-token'];
                this.objectId = data['objectId'];
                resolve();
            }).catch(e => {
                reject();
            });
        });
    }
    updateIp(ip) {
        return this.http.put(`https://api.backendless.com/9176FE65-2FB5-2B00-FFED-BEB6A480BC00/0397420A-AA65-4BA2-9A1F-D4C9583099C8/data/Users/${this.objectId}`, {
            "last_ip": ip
        }, {
            headers: {
                "user-token": this.userToken
            }
        })
            .toPromise()
            .then(data => {
            console.log(data);
        })
            .catch(e => {
            console.log(e);
        });
    }
    lookup(email) {
        return new Promise((resolve, reject) => {
            this.http.get(`https://api.backendless.com/9176FE65-2FB5-2B00-FFED-BEB6A480BC00/0397420A-AA65-4BA2-9A1F-D4C9583099C8/data/Users?where=email%3D%27${email}%27`, {
                headers: {
                    'user-token': this.userToken
                }
            })
                .toPromise()
                .then((data) => {
                if (data.length > 0) {
                    resolve(data[0]['last_ip']);
                }
                else {
                    reject();
                }
            })
                .catch(e => {
                reject();
            });
        });
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function ConnectComponent_h5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unexpected error, try again later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConnectComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConnectComponent_div_15_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.ip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", x_r2)("value", x_r2)("ngModel", ctx_r1.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", x_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r2, " ");
} }
const electron = window.require('electron');
class ConnectComponent {
    constructor(zone, common, router) {
        this.zone = zone;
        this.common = common;
        this.router = router;
        this.ip = '127.0.0.1';
        this.validIP = [];
        this.error = false;
    }
    ngOnInit() {
        electron.ipcRenderer.on('ip-list', (event, arg) => {
            console.log(arg);
            this.zone.run(() => {
                this.validIP = arg;
            });
        });
        electron.ipcRenderer.send('ip-check', {});
    }
    connect() {
        this.error = false;
        this.common.updateIp(this.ip)
            .then(() => {
            this.router.navigate(['messages']);
        })
            .catch(() => {
            this.error = true;
        });
    }
}
ConnectComponent.ɵfac = function ConnectComponent_Factory(t) { return new (t || ConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ConnectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectComponent, selectors: [["app-connect"]], decls: 22, vars: 3, consts: [[1, "row", "align-items-center", 2, "height", "100vh"], [1, "col-sm-12", "col-md-8", "col-lg-6", "offset-md-2", "offset-lg-3"], [1, "ascp-container"], [1, "container", 2, "text-align", "center", "padding", "50px"], ["style", "color: red;", 4, "ngIf"], [1, "form-check"], ["type", "radio", "name", "ip", "id", "127.0.0.1", "value", "127.0.0.1", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "127.0.0.1", 1, "form-check-label"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [2, "color", "red"], ["type", "radio", "name", "ip", 1, "form-check-input", 3, "id", "value", "ngModel", "ngModelChange"], [1, "form-check-label", 3, "for"]], template: function ConnectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select your IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConnectComponent_h5_10_Template, 2, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConnectComponent_Template_input_ngModelChange_12_listener($event) { return ctx.ip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 127.0.0.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ConnectComponent_div_15_Template, 4, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConnectComponent_Template_button_click_17_listener() { return ctx.connect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validIP);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".ascp-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  width: 90%;\n  margin-left: 5%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px 5px #cecece;\n}\n\n.ascp-messages[_ngcontent-%COMP%] {\n  height: calc(90vh - (1.5em + .75rem + 2px + 20px));\n  overflow-y: auto;\n  border: none;\n}\n\n.message-sent-cont[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n.message-sent[_ngcontent-%COMP%] {\n  background-color: #dfdfdf;\n  display: block;\n  padding: 0.75rem;\n  border-radius: 10px;\n}\n\n.message-recv-cont[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n.message-recv[_ngcontent-%COMP%] {\n  background-color: #0062cc;\n  display: block;\n  padding: 0.75rem;\n  border-radius: 10px;\n  color: white;\n}\n\n.failed-integrity[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: 0.7em;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0NvZGUvQVNDUC9hbmd1bGFyL3NyYy9hcHAvY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7RUFJQSxvQ0FBQTtBQ0RKOztBREtBO0VBQ0ksa0RBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzY3AtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgLy9oZWlnaHQ6IDUwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggcmdiKDIwNiwgMjA2LCAyMDYpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2IoMjA2LCAyMDYsIDIwNik7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2IoMjA2LCAyMDYsIDIwNik7XG59XG5cblxuLmFzY3AtbWVzc2FnZXMge1xuICAgIGhlaWdodDogY2FsYyg5MHZoIC0gKDEuNWVtICsgLjc1cmVtICsgMnB4ICsgMjBweCkpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubWVzc2FnZS1zZW50LWNvbnQge1xuICAgIG1heC13aWR0aDogNzAlO1xufVxuXG4ubWVzc2FnZS1zZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1lc3NhZ2UtcmVjdi1jb250IHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2UtcmVjdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmFpbGVkLWludGVncml0eSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59IiwiLmFzY3AtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggI2NlY2VjZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4ICNjZWNlY2U7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggI2NlY2VjZTtcbn1cblxuLmFzY3AtbWVzc2FnZXMge1xuICBoZWlnaHQ6IGNhbGMoOTB2aCAtICgxLjVlbSArIC43NXJlbSArIDJweCArIDIwcHgpKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubWVzc2FnZS1zZW50LWNvbnQge1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2Utc2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1yZWN2LWNvbnQge1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2UtcmVjdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWlsZWQtaW50ZWdyaXR5IHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-connect',
                templateUrl: './connect.component.html',
                styleUrls: ['./connect.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function LoginComponent_h5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email and/or password is not correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_h5_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(common, router) {
        this.common = common;
        this.router = router;
        this.email = '';
        this.password = '';
        this.error = false;
        this.invalid = false;
    }
    ngOnInit() {
    }
    login() {
        this.error = false;
        if (this.validate()) {
            this.invalid = false;
        }
        else {
            this.invalid = true;
            return;
        }
        this.common.login(this.email, this.password)
            .then(() => {
            this.password = '';
            this.email = '';
            this.router.navigate(['connect']);
        }).catch(() => {
            this.error = true;
        });
    }
    validate() {
        if (this.password.length < 2) {
            return false;
        }
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const exp = new RegExp(regex);
        if (exp.test(this.email)) {
            return true;
        }
        else {
            return false;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 4, consts: [[1, "row", "align-items-center", 2, "height", "100vh"], [1, "col-sm-12", "col-md-8", "col-lg-6", "offset-md-2", "offset-lg-3"], [1, "ascp-container"], [1, "container", 2, "text-align", "center", "padding", "50px"], ["style", "color: red;", 4, "ngIf"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["type", "email", "name", "email", "ngDefaultControl", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "ngDefaultControl", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_h5_10_Template, 2, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_h5_11_Template, 2, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2709\uFE0F Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\uD83D\uDD11 Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".ascp-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  width: 90%;\n  margin-left: 5%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px 5px #cecece;\n}\n\n.ascp-messages[_ngcontent-%COMP%] {\n  height: calc(90vh - (1.5em + .75rem + 2px + 20px));\n  overflow-y: auto;\n  border: none;\n}\n\n.message-sent-cont[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n.message-sent[_ngcontent-%COMP%] {\n  background-color: #dfdfdf;\n  display: block;\n  padding: 0.75rem;\n  border-radius: 10px;\n}\n\n.message-recv-cont[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n.message-recv[_ngcontent-%COMP%] {\n  background-color: #0062cc;\n  display: block;\n  padding: 0.75rem;\n  border-radius: 10px;\n  color: white;\n}\n\n.failed-integrity[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: 0.7em;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0NvZGUvQVNDUC9hbmd1bGFyL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBSUEsb0NBQUE7QUNESjs7QURLQTtFQUNJLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzY3AtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgLy9oZWlnaHQ6IDUwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggcmdiKDIwNiwgMjA2LCAyMDYpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2IoMjA2LCAyMDYsIDIwNik7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2IoMjA2LCAyMDYsIDIwNik7XG59XG5cblxuLmFzY3AtbWVzc2FnZXMge1xuICAgIGhlaWdodDogY2FsYyg5MHZoIC0gKDEuNWVtICsgLjc1cmVtICsgMnB4ICsgMjBweCkpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubWVzc2FnZS1zZW50LWNvbnQge1xuICAgIG1heC13aWR0aDogNzAlO1xufVxuXG4ubWVzc2FnZS1zZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1lc3NhZ2UtcmVjdi1jb250IHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2UtcmVjdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmFpbGVkLWludGVncml0eSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59IiwiLmFzY3AtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggI2NlY2VjZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4ICNjZWNlY2U7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggI2NlY2VjZTtcbn1cblxuLmFzY3AtbWVzc2FnZXMge1xuICBoZWlnaHQ6IGNhbGMoOTB2aCAtICgxLjVlbSArIC43NXJlbSArIDJweCArIDIwcHgpKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubWVzc2FnZS1zZW50LWNvbnQge1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2Utc2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1yZWN2LWNvbnQge1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2UtcmVjdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWlsZWQtaW50ZWdyaXR5IHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function MessagesComponent_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2705 Connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_h5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u274C Disconnected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_h5_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDD10 Secure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_h5_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDD13 Insecure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_h5_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u274C Invalid Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.diconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.setKey(ctx_r13.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Set Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.resetKey(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.toogleIntegrity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disable Outgoing Integrity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toogleIntegrity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable Outgoing Integrity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_ng_container_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r21.message, " ");
} }
function MessagesComponent_ng_container_40_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "privacy_tip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The integrity of the following message cannot be confirmed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_ng_container_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessagesComponent_ng_container_40_div_2_p_2_Template, 4, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !msg_r21.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r21.message, " ");
} }
function MessagesComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessagesComponent_ng_container_40_div_1_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessagesComponent_ng_container_40_div_2_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const msg_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r21.user == "Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r21.user != "Me");
} }
const electron = window.require('electron');
class MessagesComponent {
    constructor(zone, common) {
        this.zone = zone;
        this.common = common;
        this.blockButton = false;
        this.messageArray = [];
        this.encrypted = false;
        this.invalidContact = false;
        this.integrity = true;
    }
    ipValidator(event) {
        switch (event.key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                break;
            default:
                var value = event.target.value;
                event.target.value = value.substring(0, value.length - 1);
        }
    }
    hexValidator(event) {
        switch (event.key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
                break;
            default:
                var value = event.target.value;
                event.target.value = value.substring(0, value.length - 1);
        }
    }
    ngOnInit() {
        electron.ipcRenderer.on('message', (event, arg) => {
            console.log(arg);
            this.zone.run(() => {
                this.messageArray.push({
                    user: this.address,
                    message: arg['message'],
                    valid: arg['valid']
                });
            });
        });
        electron.ipcRenderer.on('status', (event, arg) => {
            console.log(arg);
            this.zone.run(() => {
                this.updateStatus(arg);
            });
        });
        electron.ipcRenderer.on('adress', (event, arg) => {
            console.log(arg);
            this.zone.run(() => {
                this.address = arg;
            });
        });
        electron.ipcRenderer.on('key', (event, arg) => {
            console.log(arg);
            this.zone.run(() => {
                this.key = arg;
                this.encrypted = !this.encrypted;
            });
        });
    }
    updateStatus(status) {
        // TODO:
        if (status == Status.LISTENING) {
            // No esta conectado
            // Desbloquear botones
            this.blockButton = false;
            this.encrypted = false;
        }
        else {
            // Conectado
            // Bloquar botones
            this.blockButton = true;
        }
    }
    send() {
        console.log("Sending");
        electron.ipcRenderer.send('message', this.messageText);
        this.messageArray.push({
            user: 'Me',
            message: this.messageText,
            valid: true
        });
    }
    diconnect() {
        this.encrypted = false;
        console.log("Disconnecting");
        electron.ipcRenderer.send('disconnect');
    }
    connect(address) {
        this.invalidContact = false;
        const ipR = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        const emR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const ipExp = new RegExp(ipR);
        const emExp = new RegExp(emR);
        if (emExp.test(address)) {
            console.log("email");
            this.common.lookup(address)
                .then((ip) => {
                console.log(ip);
                electron.ipcRenderer.send('connect', ip);
            })
                .catch(e => {
                console.log("not found");
                this.invalidContact = true;
            });
        }
        else if (ipExp.test(address)) {
            console.log("IP");
            electron.ipcRenderer.send('connect', address);
        }
        else {
            console.log("neither email or ip");
            this.invalidContact = true;
        }
    }
    setKey(key) {
        if (!key) {
            return;
        }
        if (key.length < 16) {
            for (var i = 0; i < 16 - key.length; i++) {
                key = '0' + key;
            }
            console.log(key);
        }
        electron.ipcRenderer.send('key', key);
        this.encrypted = !this.encrypted;
    }
    resetKey() {
        console.log("Reset key");
        electron.ipcRenderer.send('reset-key');
        this.encrypted = !this.encrypted;
    }
    clear() {
        this.messageArray = [];
    }
    toogleIntegrity() {
        electron.ipcRenderer.send('toogle-integrity');
        this.integrity = !this.integrity;
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 49, vars: 18, consts: [[1, "ascp-container"], [1, "row"], [1, "col-4"], [1, "container", 2, "height", "90vh", "border-right", "1px solid #d3d3d3", "text-align", "center"], [4, "ngIf"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["type", "text", "placeholder", "example@example.com", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "00000000000000", "maxlength", "16", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "submit", "class", "btn btn-link", 3, "click", 4, "ngIf"], [1, "col-8"], [1, "ascp-messages", 2, "padding-right", "2rem", "padding-bottom", "2rem !important"], [4, "ngFor", "ngForOf"], [1, "ascp-form"], [1, "col-10", 2, "padding", "0"], ["type", "text", "placeholder", "Message", "maxlength", "236", 1, "form-control", 3, "disabled", "ngModel", "keyup.enter", "ngModelChange"], [1, "col-2", 2, "text-align", "left"], ["type", "submit", 1, "btn", "btn-primary", 2, "padding-bottom", "0", 3, "disabled", "click"], [1, "material-icons-round"], ["type", "submit", 1, "btn", "btn-link", 3, "click"], ["style", "display: flex; justify-content: flex-end", 4, "ngIf"], ["style", "display: flex; justify-content: flex-start", 4, "ngIf"], [2, "display", "flex", "justify-content", "flex-end"], [1, "message-sent-cont"], [1, "message-sent"], [2, "display", "flex", "justify-content", "flex-start"], [1, "message-recv-cont"], ["class", "failed-integrity", 4, "ngIf"], [1, "message-recv"], [1, "failed-integrity"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ASCP Messanger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MessagesComponent_h5_9_Template, 3, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessagesComponent_h5_10_Template, 3, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MessagesComponent_h5_11_Template, 3, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessagesComponent_h5_12_Template, 3, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MessagesComponent_h5_13_Template, 3, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\uD83D\uDDA5 Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_input_ngModelChange_18_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_Template_button_click_19_listener() { return ctx.connect(ctx.address); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MessagesComponent_button_21_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uD83D\uDD11 Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_input_ngModelChange_26_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MessagesComponent_button_27_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MessagesComponent_button_28_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_Template_button_click_31_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Clear Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MessagesComponent_button_35_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MessagesComponent_button_36_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MessagesComponent_ng_container_40_Template, 3, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function MessagesComponent_Template_input_keyup_enter_44_listener() { ctx.send(); return ctx.messageText = ""; })("ngModelChange", function MessagesComponent_Template_input_ngModelChange_44_listener($event) { return ctx.messageText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_Template_button_click_46_listener() { ctx.send(); return ctx.messageText = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blockButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.blockButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.encrypted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.encrypted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.blockButton)("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blockButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.encrypted)("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.encrypted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.encrypted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.integrity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.integrity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.blockButton)("ngModel", ctx.messageText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.blockButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".ascp-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  width: 90vw;\n  height: 90vh;\n  margin-left: 5vw;\n  margin-top: 5vh;\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px 5px #cecece;\n}\n\n.ascp-form[_ngcontent-%COMP%] {\n  height: calc(1.5em + .75rem + 2px + 20px);\n}\n\n.ascp-messages[_ngcontent-%COMP%] {\n  height: calc(90vh - (1.5em + .75rem + 2px + 20px));\n  overflow-y: auto;\n  border: none;\n}\n\n.message-sent-cont[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n.message-sent[_ngcontent-%COMP%] {\n  background-color: #dfdfdf;\n  display: block;\n  padding: 0.75rem;\n  border-radius: 10px;\n}\n\n.message-recv-cont[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n.message-recv[_ngcontent-%COMP%] {\n  background-color: #0062cc;\n  display: block;\n  padding: 0.75rem;\n  border-radius: 10px;\n  color: white;\n}\n\n.failed-integrity[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: 0.7em;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0NvZGUvQVNDUC9hbmd1bGFyL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBSUEsb0NBQUE7QUNBSjs7QURHQTtFQUNJLHlDQUFBO0FDQUo7O0FER0E7RUFDSSxrREFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc2NwLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICB3aWR0aDogOTB2dztcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2IoMjA2LCAyMDYsIDIwNik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHJnYigyMDYsIDIwNiwgMjA2KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHJnYigyMDYsIDIwNiwgMjA2KTtcbn1cblxuLmFzY3AtZm9ybSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4ICsgMjBweCk7XG59XG5cbi5hc2NwLW1lc3NhZ2VzIHtcbiAgICBoZWlnaHQ6IGNhbGMoOTB2aCAtICgxLjVlbSArIC43NXJlbSArIDJweCArIDIwcHgpKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm1lc3NhZ2Utc2VudC1jb250IHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2Utc2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tZXNzYWdlLXJlY3YtY29udCB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG59XG5cbi5tZXNzYWdlLXJlY3Yge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhaWxlZC1pbnRlZ3JpdHkge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufSIsIi5hc2NwLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHdpZHRoOiA5MHZ3O1xuICBoZWlnaHQ6IDkwdmg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4ICNjZWNlY2U7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCAjY2VjZWNlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4ICNjZWNlY2U7XG59XG5cbi5hc2NwLWZvcm0ge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHggKyAyMHB4KTtcbn1cblxuLmFzY3AtbWVzc2FnZXMge1xuICBoZWlnaHQ6IGNhbGMoOTB2aCAtICgxLjVlbSArIC43NXJlbSArIDJweCArIDIwcHgpKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubWVzc2FnZS1zZW50LWNvbnQge1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2Utc2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1yZWN2LWNvbnQge1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lc3NhZ2UtcmVjdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWlsZWQtaW50ZWdyaXR5IHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();
var Status;
(function (Status) {
    Status[Status["CONNECTED_SERVER"] = 0] = "CONNECTED_SERVER";
    Status[Status["CONNECTED_CLIENT"] = 1] = "CONNECTED_CLIENT";
    Status[Status["LISTENING"] = 2] = "LISTENING";
})(Status || (Status = {}));


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alex/Code/ASCP/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map