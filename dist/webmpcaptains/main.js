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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/here-map/here-map.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/here-map/here-map.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class= \"container\" align=\"center\">\n  <div  class= \"row mt-5 ml-5\">\n      <div  *ngIf=\"loading\" class = \"fa-3x ml-5\"> <i class =\"fas fa-spinner fa-spin \"></i></div>\n    </div>\n      <div class=\"row mt-2 ml-1 mr-1\">\n        <div  #map class=\"map\" id =\"map\"></div>\n      </div>\n</div>\n\n<br>\n\n<div class= \"container\" align=\"center\">\n  <div  class= \"row mt-5 ml-5\">\n    <form #f=\"ngForm\" class=\"form-horizontal form-material\">\n    <button *ngIf=\"!loading\" class=\"btn btn-primary mr-2 mb-3\" (click)=\"recogerPedido(miMarker, f)\">{{'buttonPickUp' | translate}}</button>\n    <button *ngIf=\"!loading\" class=\"btn btn-primary mr-2 mb-3\" (click)=\"entregarPedido()\">{{'buttonEntregar' | translate}}</button>\n    <select *ngIf=\"this.pedidos !== undefined && !loading\" [(ngModel)]=\"pedido\" name=\"pedidoSeleccionado\" #pedidoSeleccionado=\"ngModel\" required class=\"form-control\">\n        <option *ngFor=\"let pedido of this.pedidosTienda\" [value]=\"pedido.idPedido\">{{pedido.idPedido}}</option>\n      </select>\n    </form>\n\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class= \"container\" align=\"center\">\n  <div  class= \"row mt-5 ml-5 \">\n      <h4>{{ 'welcome' | translate}}</h4>\n    <br>\n\n  </div>\n</div>\n\n  <div class= \"container\" align=\"center\">\n    <div  class= \"row mt-5 ml-5 \">\n      <button (click) = \"logIn()\" class=\"btn btn-info btn-lg  text-uppercase btn-rounded\" align=\"center\">{{ 'login' | translate}}</button>\n  </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inputs-form/inputs-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inputs-form/inputs-form.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class= \"container\" align=\"center\">\n\n\n  <div class=\"row mt-5 ml-5\">\n    <div class=\"col-xs-12\">\n        <form #f=\"ngForm\" class=\"form-horizontal form-material\" (ngSubmit)=\"saveData(f)\">\n          <h3>{{'titleInputForm' | translate}}</h3>\n          <select [(ngModel)]=\"user.hub\" name=\"hub\" #hub=\"ngModel\" required class=\"form-control\">\n            <option *ngFor=\"let hub of hubs\" [value]=\"hub\">{{hub}}</option>\n          </select>\n\n          <div *ngIf=\"hub?.errors?.required && hub.touched\"\n            class=\"alert alert-danger\">\n            {{'validHub' | translate}}\n          </div>\n\n          <h3>{{'titlePlate' | translate}}</h3>\n          <input class=\"form-control\" [(ngModel)]=\"user.plate\" type=\"text\" name=\"plate\" #plate=\"ngModel\" required placeholder=\"Plate\">\n          <div *ngIf=\"plate?.errors?.required && plate.touched\"\n            class=\"alert alert-danger\">\n            {{'validPlate' | translate}}\n          </div>\n\n          <h3>{{'titleOdometer' | translate}}</h3>\n          <input [(ngModel)]=\"user.odometer\" class=\"form-control\" type=\"number\" name=\"odometer\" #odometer=\"ngModel\" required placeholder=\"Km\">\n          <div *ngIf=\"odometer?.errors?.required && odometer.touched\"\n            class=\"alert alert-danger\">\n            {{'validOdometer' | translate}}\n          </div>\n          <br>\n          <br>\n\n          <button [disabled]=\" f.invalid \"  type=\"submit\" class=\"btn btn-primary\">{{'saveButton' | translate}}</button>\n\n        </form>\n    </div>\n  </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class= \"container\" align=\"center animated fadeIn \">\n\n  <div class= \"row mt-5 ml-5\">\n\n    <form #f=\"ngForm\" class=\"form-horizontal form-material\" (ngSubmit)=\"login(f)\">\n\n      <div class=\"form-group m-t-40\">\n          <div class=\"col-xs-12\">\n              <input [(ngModel)]=\"user.usuario\" name=\"user\" #name=\"ngModel\" class=\"form-control\" type=\"text\" required placeholder=\"User name\">\n          </div>\n      </div>\n      <div *ngIf=\"name?.errors?.required && name.touched\"\n         class=\"alert alert-danger\">\n      {{'validUsername' | translate}}\n      </div>\n\n\n      <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n              <input [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" class=\"form-control\" type=\"password\" required placeholder=\"Password\">\n          </div>\n      </div>\n      <div *ngIf=\"password?.errors?.required && password.touched\"\n         class=\"alert alert-danger\">\n      {{'validPassword' | translate}}\n      </div>\n      <div class=\"form-group text-center m-t-20\">\n        <div class=\"col-xs-12\">\n            <button class=\"btn btn-info btn-lg btn-block text-uppercase btn-rounded\" type=\"submit\">{{'login' | translate}}</button>\n        </div>\n      </div>\n      </form>\n\n  </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online/online.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/online/online.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  <div class=\"row mt-3 ml-5\" >\n      <div class = \"col-6\" >\n        <form #f=\"ngForm\" class=\"form-horizontal form-material\" (ngSubmit)=\"saveData(f)\" >\n            <h4>Hub orders</h4>\n            <select [(ngModel)]=\"pedidoSeleccionado\" name=\"pedido\" #hub=\"ngModel\" class=\"form-control\">\n              <option *ngFor=\"let pedido of this.pedidos\" [value]=\"hub\">{{pedido.idPedido}}</option>\n            </select>\n            <button>recoger</button>\n        </form>\n\n\n      </div>\n  </div> -->\n\n\n  <div class= \"container\" align=\"center\">\n    <div  class= \"row mt-2 ml-5\">\n      <button *ngIf=\"!online\" (click)= \"online= !online\" class = \"btn btn-block btn-success\"> {{'onlineButton' | translate}}</button>\n      <button *ngIf=\"online\" (click)= \"online= !online\" class = \"btn btn-block btn-danger\"> {{'offlineButton' | translate}}</button>\n\n    </div>\n  </div>\n\n\n  <div class= \"container\" align=\"center\">\n    <div  class= \"col-xs-12 \">\n          <!-- Aqui va el mapa -->\n          <app-here-map *ngIf=\"online\" [apikey]=\"this.apikey\" id=\"map\" [lat]=\"myLat\" [lng]=\"myLong\"></app-here-map>\n        </div>\n    </div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Deliver </a>\n      </li>\n\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input (click) = 'cambiarIdioma(this.language[0])' class=\" mr-2\" type=\"image\" src='assets/ingles.png' width=\"45\" height=\"35\" />\n      <input (click) = 'cambiarIdioma(this.language[1])'class=\" mr-5\" type=\"image\" src='assets/spain.png' width=\"45\" height=\"35\" />\n      <button (click)=\"logout()\" class=\"btn btn-danger my-2 my-sm-0\" type=\"submit\" i18n=\"@@botonLogout\">{{'logoutButton' | translate}}</button>\n    </form>\n\n</nav>\n\n<div class=\"container\" align=\"center\">\n  <div class=\"row mt-5\">\n\n  <router-outlet></router-outlet>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webmpcaptains';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_13__);














// loader module
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_services_services_module__WEBPACK_IMPORTED_MODULE_4__["ServicesModule"],
                ng_push__WEBPACK_IMPORTED_MODULE_13__["PushNotificationsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_ROUTES"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                    }
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
            ],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
            providers: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




var appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _inputs_form_inputs_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputs-form/inputs-form.component */ "./src/app/components/inputs-form/inputs-form.component.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.component */ "./src/app/components/pages.component.ts");
/* harmony import */ var _online_online_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./online/online.component */ "./src/app/components/online/online.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.routes */ "./src/app/components/components.routes.ts");
/* harmony import */ var _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./here-map/here-map.component */ "./src/app/components/here-map/here-map.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _services_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/pipes/translate.pipe */ "./src/app/services/pipes/translate.pipe.ts");














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _inputs_form_inputs_form_component__WEBPACK_IMPORTED_MODULE_5__["InputsFormComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"],
                _online_online_component__WEBPACK_IMPORTED_MODULE_7__["OnlineComponent"],
                _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_11__["HereMapComponent"],
                _services_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_13__["Translate"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _components_routes__WEBPACK_IMPORTED_MODULE_10__["COMPONENTS_ROUTES"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_12__["ServicesModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.routes.ts ***!
  \*************************************************/
/*! exports provided: COMPONENTS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_ROUTES", function() { return COMPONENTS_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inputs_form_inputs_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs-form/inputs-form.component */ "./src/app/components/inputs-form/inputs-form.component.ts");
/* harmony import */ var _online_online_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online/online.component */ "./src/app/components/online/online.component.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/components/pages.component.ts");
/* harmony import */ var _services_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/guards/login.guard */ "./src/app/services/guards/login.guard.ts");






var componentsRoutes = [
    {
        path: 'pages',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
        canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]],
        children: [
            { path: 'inputsForm', component: _inputs_form_inputs_form_component__WEBPACK_IMPORTED_MODULE_2__["InputsFormComponent"] },
            { path: 'online', component: _online_online_component__WEBPACK_IMPORTED_MODULE_3__["OnlineComponent"] },
            { path: '', redirectTo: '/inputsForm', pathMatch: 'full' }
        ]
    }
];
var COMPONENTS_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(componentsRoutes);


/***/ }),

/***/ "./src/app/components/here-map/here-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/here-map/here-map.component.ts ***!
  \***********************************************************/
/*! exports provided: HereMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HereMapComponent", function() { return HereMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_heremap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/heremap.service */ "./src/app/services/heremap.service.ts");
/* harmony import */ var src_app_models_posicion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/posicion */ "./src/app/models/posicion.ts");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pedido.service */ "./src/app/services/pedido.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_9__);




// tslint:disable-next-line: max-line-length






var HereMapComponent = /** @class */ (function () {
    // Inyectamos los servicios que necesitamos
    // tslint:disable-next-line: max-line-length
    function HereMapComponent(here, pedidoS, usuarioService, pushNotifications) {
        this.here = here;
        this.pedidoS = pedidoS;
        this.usuarioService = usuarioService;
        this.pushNotifications = pushNotifications;
        // Iconos de los markers
        this.iconRepartidor = new H.map.Icon(src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_REPARTIDOR"], { size: { w: 56, h: 56 } });
        this.iconTienda = new H.map.Icon(src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_TIENDA"], { size: { w: 56, h: 56 } });
        this.iconPedido = new H.map.Icon(src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_PEDIDO"], { size: { w: 56, h: 56 } });
        // Variables de los pedidos
        this.pedidos = [];
        this.pedidosTienda = [];
        // Variable online
        this.online = true;
        // variable loading
        this.loading = true;
        // Mi posicion
        this.myActualPosition = new src_app_models_posicion__WEBPACK_IMPORTED_MODULE_3__["Posicion"]();
        this.pushNotifications.requestPermission();
    }
    HereMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Instanciamos los iconos:
        this.iconRepartidor = new H.map.Icon(src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_REPARTIDOR"], { size: { w: 56, h: 56 } });
        this.iconTienda = new H.map.Icon(src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_TIENDA"], { size: { w: 56, h: 56 } });
        this.iconPedido = new H.map.Icon(src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_PEDIDO"], { size: { w: 56, h: 56 } });
        // Paso 1: Inicializamos la comunicacion con la plataforma --> No poner la apikey entre comas
        this.platform = new H.service.Platform({
            apikey: this.apikey,
        });
        this.defaultLayers = this.platform.createDefaultLayers();
        // Añadiendo el timer hacemos que lea del observable al inicio y cada 10 segundos
        this.posicionSuscripcion = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(0, 2000)
            .subscribe(function () {
            _this.here.getLocation().subscribe(function (coordenadas) {
                if (coordenadas != null || coordenadas != undefined) {
                    _this.myActualPosition.latitud = coordenadas.latitud;
                    _this.myActualPosition.longitud = coordenadas.longitud;
                    _this.here.updateRepartidor(_this.myActualPosition.latitud, _this.myActualPosition.longitud);
                    // tslint:disable-next-line: max-line-length
                    _this.miMarker = new H.map.Marker({ lat: _this.myActualPosition.latitud, lng: _this.myActualPosition.longitud }, { icon: _this.iconRepartidor });
                    _this.refreshMap();
                }
                else {
                    // console.log('Como no se mueve no refrescamos el mapa');
                }
            });
        });
    };
    HereMapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Pongo el Timeout para que el programa tenga tiempo de conseguir mi posicion
        setTimeout(function () {
            _this.loading = false;
            // Paso 2: Inicializamos el mapa
            _this.map = new H.Map(_this.mapElement.nativeElement, _this.defaultLayers.vector.normal.map, 
            // coordenadas de Madrid, el mapa se muestra centrado y mostrando una vista general de España
            {
                zoom: 4,
                center: { lat: 40.4165000, lng: -3.7025600 }
            });
            // Paso 3: Hacemos que el mapa sea interactivo
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(_this.map));
            _this.ui = H.ui.UI.createDefault(_this.map, _this.defaultLayers, 'es-ES');
            // Una vez instanciado el mapa empezamos a cargar los pedidos y las tiendas
            _this.cargarPedidos(_this.iconPedido);
            _this.añadirTiendas();
            _this.here.addInfoBubble(_this.map, _this.here.getRepartidor(), 'repartidor', _this.iconRepartidor, _this.ui);
        }, 2000);
    };
    // Funcion que se encarga de cargar los pedidos en el mapa
    // Si el repartidor se encuentra repartiendo un pedido, solo mostrara en el mapa el marker del pedido que esta llevando
    // En cambio si el repartidor no lleva ningun pedido encima el programa mostrara todos los pedidos de la tienda a la que esta asignado
    HereMapComponent.prototype.cargarPedidos = function (icon) {
        if (this.ui != undefined) {
            // Cargamos nuestros arrays uno con todos los pedidos pendientes y el otro con los pedidos de la tienda seleccionada
            this.pedidos = this.pedidoS.pedidosPendientes();
            this.pedidosTienda = this.pedidoS.getPedidosTienda(localStorage.getItem('hub'));
            // Compruebo si el repartidor esta llevando un pedido
            if (this.usuarioService.getUsuario().pedido !== undefined) {
                this.map.addObject(this.markerPedido);
            }
            else {
                // Si no esta llevando ningun pedido muestro todos los pedidos del hub al que esta asignado
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.pedidos.length; i++) {
                    var pedido = this.pedidos[i];
                    // Si el hub es igual a 'all' entonces muestra los pedidos de todas las tiendas
                    if (localStorage.getItem('hub') === 'all') {
                        // tslint:disable-next-line: max-line-length
                        this.here.addInfoBubble(this.map, { latitud: pedido.lugarEntrega.latitud, longitud: pedido.lugarEntrega.longitud }, pedido.idPedido.toString(), this.iconPedido, this.ui);
                    }
                    else {
                        // Si no lo es muestra todos los pedidos de la tienda
                        if (pedido.tienda === localStorage.getItem('hub')) {
                            // tslint:disable-next-line: max-line-length
                            this.here.addInfoBubble(this.map, { latitud: pedido.lugarEntrega.latitud, longitud: pedido.lugarEntrega.longitud }, pedido.idPedido.toString(), this.iconPedido, this.ui);
                        }
                    }
                }
            }
        }
    };
    // Este metodo se llama cuando el repartidor ha llegado a su destino
    // Comprueba si esta a menos de 100m
    // Le asigna al pedido una fecha de llegada y quita el pedido al repartidor
    HereMapComponent.prototype.entregarPedido = function () {
        if (this.markerPedido !== undefined) {
            if (this.here.getDistance(this.miMarker, this.markerPedido)) {
                this.posicionFinal = undefined;
                this.pedidoS.llegada(this.usuarioService.getUsuario().pedido);
                this.usuarioService.entregado();
                this.usuarioService.resetPedido();
                this.notify('Congratulations! You delivered the order in time!');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    icon: 'error',
                    title: 'Error al entregar el pedido',
                    text: 'Debes estar a menos de 100 metros para poder recoger el pedido'
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                icon: 'error',
                title: 'Error al entregar el pedido',
                text: 'No llevas ningun pedido!'
            });
        }
    };
    // Funcion que borra todo lo que hay en el mapa
    HereMapComponent.prototype.borrarTodo = function () {
        if (this.map !== undefined && this.map !== null) {
            this.map.removeObjects(this.map.getObjects());
        }
    };
    // Funcion llamada cuando el repartidor va a recoger el pedido de la tienda
    // Per calcular la distancia entre el repartidor i la tenda necessite el marker dels dos
    HereMapComponent.prototype.recogerPedido = function (markerRepartidor, form) {
        var tiendaMarker;
        var pedidoSeleccionat = this.pedidoS.getPedidoById(form.value.pedidoSeleccionado);
        // Primer hem de comprobar quina es la tenda del pedido
        if (pedidoSeleccionat !== undefined && this.usuarioService.getUsuario().pedido == undefined) {
            if (this.here.getMarkerTienda().length <= 1) {
                // Si el array retornat sols te un marker es perque el repartidor sols ha seleccionat una tenda
                tiendaMarker = this.here.getMarkerTienda()[0];
            }
            else {
                switch (pedidoSeleccionat.tienda) {
                    case 'oliva':
                        tiendaMarker = new H.map.Marker({ lat: src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_OLIVA"].latitud, lng: src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_OLIVA"].longitud });
                        break;
                    case 'gandia':
                        tiendaMarker = new H.map.Marker({ lat: src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_GANDIA"].latitud, lng: src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_GANDIA"].longitud });
                        break;
                    case 'tavernes':
                        tiendaMarker = new H.map.Marker({ lat: src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_TAVERNES"].latitud, lng: src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_TAVERNES"].longitud });
                        break;
                }
            }
            // Una volta ja sabem de quina tenda es tracta aleshores fem les comprobacions de la distancia
            // Comprobem que es troba a menys de 100m
            if (this.here.getDistance(markerRepartidor, tiendaMarker)) {
                // Una vegada validada la distancia i la tenda li posem la posicionFinal per a que faja la ruta
                this.posicionFinal = pedidoSeleccionat.lugarEntrega;
                // Assignem el pedido al repartidor
                this.usuarioService.asignarPedido(form.value.pedidoSeleccionado);
                // Guardem el pedido
                this.pedido = this.pedidoS.getPedidoById(form.value.pedidoSeleccionado);
                if (this.pedido !== undefined) {
                    // tslint:disable-next-line: max-line-length
                    this.markerPedido = new H.map.Marker({ lat: this.pedido.lugarEntrega.latitud, lng: this.pedido.lugarEntrega.longitud }, { icon: this.iconPedido });
                    this.markerPedido.setData('Repartidor en camino!');
                    // Luego deberemos llamar a la funcion salida del pedidos Service
                    this.pedidoS.salida(form.value.pedidoSeleccionado, this.usuarioService.getUsuario().usuario);
                    this.notify('Hurry! You have to deliver the order!');
                    this.here.calcularRuta(this.posicionFinal, this.map, this.platform);
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    icon: 'error',
                    title: 'Error al recoger el pedido',
                    text: 'Debes estar a menos de 100 metros para poder recoger el pedido'
                });
            }
        }
        else {
            if (this.usuarioService.getUsuario().pedido !== undefined) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    icon: 'error',
                    title: 'Error al recoger el pedido',
                    text: 'Ya llevas un pedido'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    icon: 'error',
                    title: 'Error al recoger el pedido',
                    text: 'No has seleccionado ningun pedido'
                });
            }
        }
    };
    // Funcion que refresca el mapa para actualizar las posiciones de los marcadores
    HereMapComponent.prototype.refreshMap = function () {
        if (this.here.positionChange()) {
            this.borrarTodo();
            var infoRepartidor = '';
            if (this.usuarioService.getUsuario().pedido !== undefined) {
                infoRepartidor += 'En camino';
            }
            else {
                infoRepartidor += 'Volviendo a por un pedido';
            }
            if (this.map) {
                this.cargarPedidos(this.iconPedido);
                // Añadimos al repartidor
                this.here.addInfoBubble(this.map, this.here.getRepartidor(), infoRepartidor, this.iconRepartidor, this.ui);
                this.añadirTiendas();
                // Si volem posar els incidents de trafic que hi ha en les carreteres
                // this.map.addLayer(this.defaultLayers.vector.normal.trafficincidents);
            }
            if (this.posicionFinal !== undefined) {
                this.here.calcularRuta(this.posicionFinal, this.map, this.platform);
            }
        }
    };
    // Funcion que añade las tiendas al mapa segun el hub seleccionado por el usuario
    HereMapComponent.prototype.añadirTiendas = function () {
        // Segun el hub añadiremos su marker
        if (this.ui != undefined) {
            switch (localStorage.getItem('hub')) {
                case 'oliva':
                    this.here.addInfoBubble(this.map, src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_OLIVA"], src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["INFO_OLIVA"], this.iconTienda, this.ui);
                    break;
                case 'gandia':
                    this.here.addInfoBubble(this.map, src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_GANDIA"], src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["INFO_GANDIA"], this.iconTienda, this.ui);
                    break;
                case 'tavernes':
                    this.here.addInfoBubble(this.map, src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_TAVERNES"], src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["INFO_TAVERNES"], this.iconTienda, this.ui);
                    break;
                case 'all':
                    this.here.addInfoBubble(this.map, src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_OLIVA"], src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["INFO_OLIVA"], this.iconTienda, this.ui);
                    this.here.addInfoBubble(this.map, src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_GANDIA"], src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["INFO_GANDIA"], this.iconTienda, this.ui);
                    this.here.addInfoBubble(this.map, src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["TIENDA_TAVERNES"], src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["INFO_TAVERNES"], this.iconTienda, this.ui);
                    break;
            }
        }
    };
    HereMapComponent.prototype.ngOnDestroy = function () {
        // Elimino la suscripcion al observable de mi posicion
        this.usuarioService.resetPedido();
        this.posicionSuscripcion.unsubscribe();
    };
    // Funcion llamada para crear una notificacion, recibe como parametro el texto de la notificacion
    HereMapComponent.prototype.notify = function (texto) {
        var options = {
            body: texto
        };
        this.pushNotifications.create('webmpcaptains', options).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    HereMapComponent.ctorParameters = function () { return [
        { type: src_app_services_heremap_service__WEBPACK_IMPORTED_MODULE_2__["HeremapService"] },
        { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__["PedidoService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: ng_push__WEBPACK_IMPORTED_MODULE_9__["PushNotificationsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false })
    ], HereMapComponent.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HereMapComponent.prototype, "apikey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HereMapComponent.prototype, "lat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HereMapComponent.prototype, "lng", void 0);
    HereMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-here-map',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./here-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/here-map/here-map.component.html")).default,
            styles: [".map { width: 50vh; height: 70vh; }", ".container {width: 50vh; height: 70vh; border: 2px}", ".containeret {width: 70vw; height: 30px; border: 2px}"]
        })
    ], HereMapComponent);
    return HereMapComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pedido.service */ "./src/app/services/pedido.service.ts");
/* harmony import */ var src_app_services_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messaging.service */ "./src/app/services/messaging.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, pedidoS, msService) {
        this.router = router;
        this.pedidoS = pedidoS;
        this.msService = msService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Aci he de fer una funcio que solicite el permis per a android
        // i una altra per a rebre missatges  que crec que deu ser aquesta
        var userId = 'user001';
        if (navigator.userAgent == 'hcapp') {
        }
        else {
            this.msService.requestPermission(userId);
            this.msService.receiveMessage();
            this.message = this.msService.currentMessage;
        }
    };
    HomeComponent.prototype.logIn = function () {
        this.router.navigate(['/login']);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_3__["PedidoService"] },
        { type: src_app_services_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs-form/inputs-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/inputs-form/inputs-form.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXRzLWZvcm0vaW5wdXRzLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/inputs-form/inputs-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/inputs-form/inputs-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: InputsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsFormComponent", function() { return InputsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var InputsFormComponent = /** @class */ (function () {
    function InputsFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = this.userService.getUsuario();
        this.hubs = ['oliva', 'tavernes', 'gandia', 'all'];
    }
    InputsFormComponent.prototype.ngOnInit = function () {
    };
    InputsFormComponent.prototype.saveData = function (forma) {
        if (forma.invalid) {
            return;
        }
        this.userService.saveData(this.user);
        this.router.navigate(['/pages/online']);
    };
    InputsFormComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    InputsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inputs-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inputs-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inputs-form/inputs-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inputs-form.component.css */ "./src/app/components/inputs-form/inputs-form.component.css")).default]
        })
    ], InputsFormComponent);
    return InputsFormComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_heremap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/heremap.service */ "./src/app/services/heremap.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, here) {
        this.userService = userService;
        this.router = router;
        this.here = here;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = {
            usuario: '',
            password: '',
            hub: '',
            plate: '',
            dni: '',
            telefono: null,
            odometer: null,
            pedido: undefined
        };
    };
    LoginComponent.prototype.login = function (forma) {
        if (forma.invalid) {
            return;
        }
        if (this.userService.login(this.user)) {
            // Login correcte
            this.router.navigate(['/pages/inputsForm']);
        }
        else {
            // Login false, error en l'usuari o la contrasenya
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('User Information', 'Incorrect username or password. Try again.', 'error');
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_heremap_service__WEBPACK_IMPORTED_MODULE_5__["HeremapService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/online/online.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/online/online.component.ts ***!
  \*******************************************************/
/*! exports provided: OnlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineComponent", function() { return OnlineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_heremap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/heremap.service */ "./src/app/services/heremap.service.ts");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pedido.service */ "./src/app/services/pedido.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var OnlineComponent = /** @class */ (function () {
    function OnlineComponent(here, pedidoS, usuarioService) {
        this.here = here;
        this.pedidoS = pedidoS;
        this.usuarioService = usuarioService;
        this.online = false;
        this.apikey = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["API_KEY"];
        this.pedidos = [];
    }
    OnlineComponent.prototype.ngOnInit = function () {
        this.myLat = this.here.myLat;
        this.myLong = this.here.myLong;
        this.pedidos = this.pedidoS.pedidosPendientes();
    };
    // BORRAR
    OnlineComponent.prototype.saveData = function (f) {
    };
    // Funcion go offline, esta funcion cambiara el valor de online y ademas setUsuario.pedido a undefined
    OnlineComponent.prototype.goOffline = function () {
        this.online = !this.online;
        this.usuarioService.resetPedido();
    };
    OnlineComponent.ctorParameters = function () { return [
        { type: src_app_services_heremap_service__WEBPACK_IMPORTED_MODULE_2__["HeremapService"] },
        { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_4__["PedidoService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    OnlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./online.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online/online.component.html")).default,
            styles: [".container {width: 70vw; height: 20px; }"]
        })
    ], OnlineComponent);
    return OnlineComponent;
}());



/***/ }),

/***/ "./src/app/components/pages.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/pages.component.ts ***!
  \***********************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/translation.service */ "./src/app/services/translation.service.ts");





var PagesComponent = /** @class */ (function () {
    function PagesComponent(userService, translateService) {
        this.userService = userService;
        this.translateService = translateService;
        this.language = ['en', 'es'];
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent.prototype.logout = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.userService.logout();
            }
        });
    };
    PagesComponent.prototype.cambiarIdioma = function (idioma) {
        this.translateService.changeLanguage(idioma);
    };
    PagesComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"] }
    ]; };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages.component.html")).default
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: API_KEY, URL_HERE, URL_REPARTIDOR, URL_TIENDA, URL_PEDIDO, URL_ENGLISH, URL_SPANISH, TIENDA_OLIVA, TIENDA_GANDIA, TIENDA_TAVERNES, INFO_OLIVA, INFO_GANDIA, INFO_TAVERNES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_HERE", function() { return URL_HERE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_REPARTIDOR", function() { return URL_REPARTIDOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_TIENDA", function() { return URL_TIENDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_PEDIDO", function() { return URL_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_ENGLISH", function() { return URL_ENGLISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SPANISH", function() { return URL_SPANISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIENDA_OLIVA", function() { return TIENDA_OLIVA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIENDA_GANDIA", function() { return TIENDA_GANDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIENDA_TAVERNES", function() { return TIENDA_TAVERNES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_OLIVA", function() { return INFO_OLIVA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_GANDIA", function() { return INFO_GANDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_TAVERNES", function() { return INFO_TAVERNES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var API_KEY = '5cNr9lfPUqqKYFqkhhr_0TUo5LQ8xnowwlh1GlcgbWU';
var URL_HERE = 'https://image.maps.api.here.com';
var URL_REPARTIDOR = 'assets/repartidor.png';
var URL_TIENDA = 'assets/tienda.png';
var URL_PEDIDO = 'assets/pedido.png';
var URL_ENGLISH = 'assets/ingles.jpg';
var URL_SPANISH = 'assets/spain.jpg';
var TIENDA_OLIVA = { latitud: 38.9178068, longitud: -0.1269189 };
var TIENDA_GANDIA = { latitud: 38.9764272, longitud: -0.1909041 };
var TIENDA_TAVERNES = { latitud: 39.0766803, longitud: -0.2868987 };
var INFO_OLIVA = 'Oliva ' + '<br> ' + 'c/ Montaña';
var INFO_GANDIA = 'Gandia ' + '<br> ' + 'c/ Rosales';
var INFO_TAVERNES = 'Tavernes ' + '<br> ' + 'Cami la Dula';


/***/ }),

/***/ "./src/app/models/posicion.ts":
/*!************************************!*\
  !*** ./src/app/models/posicion.ts ***!
  \************************************/
/*! exports provided: Posicion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posicion", function() { return Posicion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Posicion = /** @class */ (function () {
    function Posicion() {
    }
    return Posicion;
}());



/***/ }),

/***/ "./src/app/models/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Usuario = /** @class */ (function () {
    function Usuario() {
        this.pedido = undefined;
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/services/guards/login.guard.ts":
/*!************************************************!*\
  !*** ./src/app/services/guards/login.guard.ts ***!
  \************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/services/user.service.ts");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.userService.isLogged()) {
            return true;
        }
        else {
            console.log('Bloqueado por el guard');
            this.router.navigate(['/login']);
            localStorage.clear();
            sessionStorage.clear();
            return false;
        }
    };
    LoginGuard.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/services/heremap.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/heremap.service.ts ***!
  \*********************************************/
/*! exports provided: HeremapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeremapService", function() { return HeremapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_posicion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/posicion */ "./src/app/models/posicion.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");








var HeremapService = /** @class */ (function () {
    function HeremapService(router, http, deviceService) {
        this.router = router;
        this.http = http;
        this.deviceService = deviceService;
        this.markers = [];
        this.posicionAnterior = new _models_posicion__WEBPACK_IMPORTED_MODULE_5__["Posicion"]();
        this.posicionActual = new _models_posicion__WEBPACK_IMPORTED_MODULE_5__["Posicion"]();
        this.minDistance = 100;
    }
    // Metodo que retorna un observable que muestra la posicion actual del repartidor
    HeremapService.prototype.getLocation = function () {
        var _this = this;
        if (this.posicionActual != null || this.posicionActual != undefined) {
            this.posicionAnterior.latitud = this.posicionActual.latitud;
            this.posicionAnterior.longitud = this.posicionActual.longitud;
        }
        if (navigator.userAgent == 'hcapp') {
            this.posicionActual.latitud = window['android'].getLatitude();
            this.posicionActual.longitud = window['android'].getLongitude();
            // Ahora como ya tenemos la posicion actual tenemos que comprobar la distancia
            // entre la anterior posicion y esta
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                // tslint:disable-next-line: max-line-length
                if (_this.distance(_this.posicionAnterior.latitud, _this.posicionAnterior.longitud, _this.posicionActual.latitud, _this.posicionActual.longitud) > 10) {
                    observer.next(_this.posicionActual);
                    observer.complete();
                }
                else {
                    observer.next(null);
                    observer.complete();
                }
            });
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                if (window.navigator && window.navigator.geolocation) {
                    window.navigator.geolocation.getCurrentPosition(function (position) {
                        _this.posicionActual.latitud = position.coords.latitude;
                        _this.posicionActual.longitud = position.coords.longitude;
                        _this.myLat = position.coords.latitude;
                        _this.myLong = position.coords.longitude;
                        observer.next(_this.posicionActual);
                        observer.complete();
                    }, function (error) { return observer.error(error); });
                }
                else {
                    observer.error('Unsupported Browser');
                }
            });
        }
    };
    // Funcion que retorna true si la distancia entre los puntos A y B es menor a minDistance y retorna false si la distancia es mayor
    HeremapService.prototype.getDistance = function (positionA, positionB) {
        if (positionA.getGeometry().distance(positionB.getGeometry()) < this.minDistance) {
            return true;
        }
        return false;
    };
    // Funcion que lee del localstorage la variable 'hub' en caso de ser igual a oliva, tavernes o Gandia, devuelve un array con solo un marker
    // en la posicion de la tienda.
    // En caso de ser 'all' retornara un array de markers con todas las tiendas.
    HeremapService.prototype.getMarkerTienda = function () {
        var iconTienda = new H.map.Icon(_config_config__WEBPACK_IMPORTED_MODULE_6__["URL_TIENDA"], { size: { w: 56, h: 56 } });
        var markers = [];
        var marker;
        switch (localStorage.getItem('hub')) {
            case 'oliva':
                marker = new H.map.Marker({ lat: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_OLIVA"].latitud, lng: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_OLIVA"].longitud }, { icon: iconTienda });
                markers.push(marker);
                return markers;
                break;
            case 'gandia':
                marker = new H.map.Marker({ lat: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_GANDIA"].latitud, lng: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_GANDIA"].longitud }, { icon: iconTienda });
                markers.push(marker);
                return markers;
                break;
            case 'tavernes':
                marker = new H.map.Marker({ lat: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_TAVERNES"].latitud, lng: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_TAVERNES"].longitud }, { icon: iconTienda });
                markers.push(marker);
                return markers;
                break;
            case 'all':
                var markerOliva = new H.map.Marker({ lat: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_OLIVA"].latitud, lng: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_OLIVA"].longitud }, { icon: iconTienda });
                var markerGandia = new H.map.Marker({ lat: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_GANDIA"].latitud, lng: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_GANDIA"].longitud }, { icon: iconTienda });
                // tslint:disable-next-line: max-line-length
                var markerTavernes = new H.map.Marker({ lat: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_TAVERNES"].latitud, lng: _config_config__WEBPACK_IMPORTED_MODULE_6__["TIENDA_TAVERNES"].longitud }, { icon: iconTienda });
                markers.push(markerOliva);
                markers.push(markerGandia);
                markers.push(markerTavernes);
                return markers;
                break;
        }
    };
    // creates a marker and adds it to a group
    HeremapService.prototype.addMarkerToGroup = function (group, coordinate, html, icon) {
        var marker = new H.map.Marker(coordinate, { icon: icon });
        // add custom data to the marker
        marker.setData(html);
        group.addObject(marker);
    };
    HeremapService.prototype.addInfoBubble = function (map, position, info, icon, ui) {
        var group = new H.map.Group();
        map.addObject(group);
        // Add a 'tap' event listener, that opens info bubble, to the group
        group.addEventListener('tap', function (evt) {
            // Event target is the marker itself, group is a parent event target
            // for all object that it contains
            var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                // read custom data
                content: evt.target.getData()
            });
            // Show info bubble
            ui.addBubble(bubble);
        }, false);
        this.addMarkerToGroup(group, { lat: position.latitud, lng: position.longitud }, info, icon);
    };
    HeremapService.prototype.deleteMarker = function (marker, mapa) {
        if (marker instanceof H.map.Marker) {
            mapa.removeObjects(marker);
        }
    };
    HeremapService.prototype.updateRepartidor = function (lat, lng) {
        var iconRepartidor = new H.map.Icon(_config_config__WEBPACK_IMPORTED_MODULE_6__["URL_REPARTIDOR"], { size: { w: 56, h: 56 } });
        this.markerRepartidor = new H.map.Marker({ lat: lat, lng: lng }, { icon: iconRepartidor });
    };
    HeremapService.prototype.getRepartidor = function () {
        var pos = { latitud: this.posicionActual.latitud, longitud: this.posicionActual.longitud };
        return pos;
    };
    HeremapService.prototype.calcularRuta = function (posicionFinal, map, platform) {
        // Creando los parametros para la peticion de la ruta
        var routingParameters = {
            // The routing mode:
            'mode': 'fastest;car',
            // El punto inicial de la ruta:
            'waypoint0': 'geo!' + this.posicionActual.latitud + ',' + this.posicionActual.longitud,
            // The end point of the route
            'waypoint1': 'geo!' + posicionFinal.latitud + ',' + posicionFinal.longitud,
            'representation': 'display'
        };
        // Define a callback function to process the routing response
        var onResult = function (result) {
            // tslint:disable-next-line: one-variable-per-declaration
            var route, routeShape, startPoint, endPoint, linestring;
            if (result.response.route) {
                // Pick the first route from the response:
                route = result.response.route[0];
                // Pick the route's shape:
                routeShape = route.shape;
                // Create a linestring to use as a point for the route line
                linestring = new H.geo.LineString();
                // push all the pointsin the shape into the linestring:
                routeShape.forEach(function (point) {
                    var parts = point.split(',');
                    linestring.pushLatLngAlt(parts[0], parts[1]);
                });
                // Retrieve the mapped positions of the requested waypoints:
                startPoint = route.waypoint[0].mappedPosition;
                endPoint = route.waypoint[1].mappedPosition;
                // Create a polyline to display the route
                var routeLine = new H.map.Polyline(linestring, { style: { strokeColor: 'blue', lineWidth: 3 } });
                // Create a patterned polyline:
                var routeArrows = new H.map.Polyline(linestring, {
                    style: {
                        lineWidth: 10,
                        fillColor: 'white',
                        strokeColor: 'rgba(255, 255, 255, 1)',
                        lineDash: [0, 2],
                        lineTailCap: 'arrow-tail',
                        lineHeadCap: 'arrow-head'
                    }
                });
                // Aci el tutorial crea un marker per als dos punts el d'inici i el final pero vamos que passem q te cagas
                map.addObjects([routeLine, routeArrows]);
            }
        };
        // Get an instance of the routing service
        var router = platform.getRoutingService();
        // Call calculateRoute() with the routing parameters,
        // the callback and an error callback function
        // (called if a communication error occurs):
        router.calculateRoute(routingParameters, onResult, function (error) {
            alert(error.message);
        });
    };
    HeremapService.prototype.distance = function (lat1, lon1, lat2, lon2) {
        if (lat1 != undefined && lat2 != undefined && lon1 != undefined && lon2 != undefined) {
            if ((lat1 === lat2) && (lon1 === lon2)) {
                return 0;
            }
            else {
                var radlat1 = Math.PI * lat1 / 180;
                var radlat2 = Math.PI * lat2 / 180;
                var theta = lon1 - lon2;
                var radtheta = Math.PI * theta / 180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180 / Math.PI;
                dist = dist * 60 * 1.1515;
                dist = dist * 1.609344; // Distancia en kilometres
                dist = dist * 1000; // Ho passem a metres
                console.log('Distancia: ' + dist.toFixed(2));
                return dist;
            }
        }
        else {
            return 0;
        }
    };
    HeremapService.prototype.mostrarPosiciones = function () {
        console.log('Posicion Anterior: ');
        console.log('Latitud: ' + this.posicionAnterior.latitud);
        console.log('Longitud: ' + this.posicionAnterior.longitud);
        console.log('Posicion Actual: ');
        console.log('Latitud: ' + this.posicionActual.latitud);
        console.log('Longitud: ' + this.posicionActual.longitud);
    };
    // Metodo que retorna si la posicion actual ha cambiado mas de 10 metros de la anterior
    HeremapService.prototype.positionChange = function () {
        // tslint:disable-next-line: max-line-length
        if (this.posicionAnterior.latitud !== this.posicionActual.latitud || this.posicionAnterior.longitud !== this.posicionActual.latitud && this.distance(this.posicionAnterior.latitud, this.posicionAnterior.longitud, this.posicionActual.latitud, this.posicionActual.longitud) > 10) {
            return true;
        }
        else {
            return false;
        }
        return false;
    };
    HeremapService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"] }
    ]; };
    HeremapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HeremapService);
    return HeremapService;
}());



/***/ }),

/***/ "./src/app/services/messaging.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/messaging.service.ts ***!
  \***********************************************/
/*! exports provided: firebaseConfig, MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







// Aquesta es la configuracio que hem de gastar per a que funcione el firebase cloud-messaging
var firebaseConfig = {
    apiKey: "AIzaSyAe_nW9kpnCDbSyBuAFcwbskz4pCXmNLD4",
    authDomain: "notificationproject-72594.firebaseapp.com",
    databaseURL: "https://notificationproject-72594.firebaseio.com",
    projectId: "notificationproject-72594",
    storageBucket: "notificationproject-72594.addspot.com",
    messagingSenderId: "10395800507",
    appId: "1:651932795394:android:811d2fad52ab2b1a"
};
var MessagingService = /** @class */ (function () {
    function MessagingService(angularFireDB, angularFireAuth, angularFireMessaging) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        if (navigator.userAgent == 'hcapp') {
            // window['android'].onMessageReceived();
        }
        else {
            this.angularFireMessaging.messaging.subscribe(function (messaging) {
                messaging.onMessage = messaging.onMessage.bind(messaging);
                messaging.onTokenRefresh = messaging.onTokenRefresh.bind(messaging);
            });
        }
    }
    // Update token on firebase database
    MessagingService.prototype.updateToken = function (userId, token) {
        var _this = this;
        console.log('updating token');
        this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            var data = {};
            data[userId] = token;
            _this.angularFireDB.object('fcmTokens/').update(data);
        });
    };
    // request permission for notification from firebase cloud messaging
    MessagingService.prototype.requestPermission = function (userId) {
        var _this = this;
        if (navigator.userAgent == 'hcapp') {
            console.log('Asking for permission from mobile');
        }
        else {
            this.angularFireMessaging.requestToken.subscribe(function (token) {
                console.log(token);
                _this.updateToken(userId, token);
            }, function (err) {
                console.error('Unable to get permission to notify.' + err);
            });
        }
    };
    // Funcion que se ejecuta cuando recibimos un mensaje
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        if (navigator.userAgent == 'hcapp') {
            // Como tenemos configurado el cloud-messaging nativamente en android aqui no necesitamos hacer nada
        }
        else {
            // Esto en cambio se ejecuta cuando estamos en un navegador
            this.angularFireMessaging.messages.subscribe(function (payload) {
                console.log('new message received. ', payload);
                _this.currentMessage.next(payload);
            });
        }
    };
    MessagingService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__["AngularFireMessaging"] }
    ]; };
    MessagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./src/app/services/pedido.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pedido.service.ts ***!
  \********************************************/
/*! exports provided: PedidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoService", function() { return PedidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_posicion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/posicion */ "./src/app/models/posicion.ts");



var PedidoService = /** @class */ (function () {
    function PedidoService() {
        this.pedidos = [];
        this.enCamino = false;
        // añadimos unos cuantos pedidos para probar la aplicacion
        var pos = new _models_posicion__WEBPACK_IMPORTED_MODULE_2__["Posicion"]();
        pos.latitud = 38.9704127;
        pos.longitud = -0.1629648;
        this.añadirPedido(100, pos, 'oliva');
        var pos1 = new _models_posicion__WEBPACK_IMPORTED_MODULE_2__["Posicion"]();
        pos1.latitud = 39.9704127;
        pos1.longitud = -0.1629648;
        this.añadirPedido(101, pos1, 'gandia');
        var pos2 = new _models_posicion__WEBPACK_IMPORTED_MODULE_2__["Posicion"]();
        pos2.latitud = 38.5704127;
        pos2.longitud = -0.1629648;
        this.añadirPedido(102, pos2, 'tavernes');
        var pos3 = new _models_posicion__WEBPACK_IMPORTED_MODULE_2__["Posicion"]();
        pos3.latitud = 37.9704127;
        pos3.longitud = -1.1629648;
        this.añadirPedido(103, pos3, 'oliva');
        var pos4 = new _models_posicion__WEBPACK_IMPORTED_MODULE_2__["Posicion"]();
        pos4.latitud = 37.5704127;
        pos4.longitud = -1.1629648;
        this.añadirPedido(104, pos4, 'gandia');
    }
    // Funcion que añade pedidos al array
    PedidoService.prototype.añadirPedido = function (codi, lugarEntrega, tienda) {
        var pedido = {
            idPedido: codi,
            fechaSalida: null,
            fechaLlegada: null,
            repartidor: null,
            enCamino: false,
            lugarEntrega: lugarEntrega,
            tienda: tienda
        };
        // añadimos el pedido al array de pedidos
        this.pedidos.push(pedido);
    };
    PedidoService.prototype.getPedidos = function () {
        return this.pedidos;
    };
    // El metodo salida le asignara una fecha y hora a la fechaSalida del pedido
    // además cambiará la variable enCamino a true y le asignara un repartidor.
    // Esta funcion se llamara cuando el repartidor recoja el pedido.
    PedidoService.prototype.salida = function (codi, repartidor) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.pedidos.length; i++) {
            if (this.pedidos[i].idPedido == codi) {
                var time = new Date().getTime();
                var date = new Date(time);
                this.pedidos[i].fechaSalida = date;
                this.pedidos[i].enCamino = true;
                this.pedidos[i].repartidor = repartidor;
            }
        }
    };
    // Funcion que asigna fecha y hora a la fechaLlegada y cambia la variable enCamino a false
    // Esta funcion se llamara cuando el repartidor haya realizado la entrega
    PedidoService.prototype.llegada = function (codi) {
        console.log('Pedido entregado');
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.pedidos.length; i++) {
            if (this.pedidos[i].idPedido == codi) {
                var time = new Date().getTime();
                var date = new Date(time);
                this.pedidos[i].fechaLlegada = date;
                this.pedidos[i].enCamino = false;
            }
        }
    };
    // Funcion que retornara todos los pedidos que esten pendientes de recoger,
    // es decir aquellos que no esten en camino y los que la fecha de entrega sea igual a null
    PedidoService.prototype.pedidosPendientes = function () {
        var pedidosPendientes = [];
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.pedidos.length; i++) {
            if (!this.pedidos[i].enCamino && this.pedidos[i].fechaLlegada === null) {
                pedidosPendientes.push(this.pedidos[i]);
            }
        }
        return pedidosPendientes;
    };
    PedidoService.prototype.clearData = function () {
        this.pedidos = [];
    };
    // Funcion que recibido un id de pedido retorna el pedido con el mismo id
    PedidoService.prototype.getPedidoById = function (code) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.pedidos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pedido = _c.value;
                if (pedido.idPedido == code) {
                    return pedido;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    // Funcion que dado un hub retorna un array con el codigo de los pedidos de esta tienda
    PedidoService.prototype.getPedidosTienda = function (hub) {
        var e_2, _a;
        var pedidosTienda = [];
        if (hub == 'all') {
            return this.pedidosPendientes();
        }
        else {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.pedidosPendientes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var pedido = _c.value;
                    if (pedido.tienda == hub) {
                        pedidosTienda.push(pedido);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return pedidosTienda;
    };
    PedidoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PedidoService);
    return PedidoService;
}());



/***/ }),

/***/ "./src/app/services/pipes/translate.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/services/pipes/translate.pipe.ts ***!
  \**************************************************/
/*! exports provided: Translate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translate", function() { return Translate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translation.service */ "./src/app/services/translation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var Translate = /** @class */ (function () {
    function Translate(translationService) {
        this.translationService = translationService;
    }
    Translate.prototype.transform = function (value, args) {
        return this.translationService.translate(value);
    };
    Translate.ctorParameters = function () { return [
        { type: _translation_service__WEBPACK_IMPORTED_MODULE_1__["TranslationService"] }
    ]; };
    Translate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'translate',
            pure: false,
        })
    ], Translate);
    return Translate;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _heremap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heremap.service */ "./src/app/services/heremap.service.ts");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedido.service */ "./src/app/services/pedido.service.ts");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translation.service */ "./src/app/services/translation.service.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/app/services/pipes/translate.pipe.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messaging.service */ "./src/app/services/messaging.service.ts");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire//auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");















var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorModule"].forRoot(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_messaging_service__WEBPACK_IMPORTED_MODULE_10__["firebaseConfig"]),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
                _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_11__["AngularFireMessagingModule"]
            ],
            providers: [
                _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
                _heremap_service__WEBPACK_IMPORTED_MODULE_5__["HeremapService"],
                _pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"],
                _translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"],
                _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["Translate"],
                _messaging_service__WEBPACK_IMPORTED_MODULE_10__["MessagingService"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/translation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/translation.service.ts ***!
  \*************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TranslationService = /** @class */ (function () {
    function TranslationService() {
        this.languages = ['en', 'es'];
        this.language = 'es';
        this.dictionary = {
            en: {
                language: 'en',
                values: {
                    welcome: 'Welcome',
                    login: 'Log In',
                    username: 'User name',
                    validUsername: 'Username is required',
                    validPassword: 'Password is  required',
                    titleInputForm: 'Select Hub',
                    validHub: 'Hub is required',
                    titlePlate: 'Enter your plate',
                    validPlate: 'Plate is required',
                    titleOdometer: 'Odometer value',
                    validOdometer: 'Odometer required',
                    saveButton: 'Save Data',
                    onlineButton: 'Go online!',
                    offlineButton: 'Go offline!',
                    logoutButton: 'Logout',
                    notificationPickUp: 'Hurry! You have to deliver the order!',
                    notificationDeliver: 'Congratulations! You delivered the order in time!',
                    buttonPickUp: 'Pick Up!',
                    buttonEntregar: 'Deliver'
                }
            },
            es: {
                language: 'es',
                values: {
                    welcome: 'Bienvenido',
                    login: 'Entrar',
                    validUsername: 'Nombre de usuario obligatorio',
                    validPassword: 'Contraseña obligatoria',
                    titleInputForm: 'Selecciona Hub',
                    validHub: 'Hub obligatorio',
                    titlePlate: 'Ingresar matricula',
                    validPlate: 'Matricula obligatoria',
                    titleOdometer: 'Cuentakilometros',
                    validOdometer: 'Cuentakilometros obligatorio',
                    saveButton: 'Guardar',
                    onlineButton: 'Conectar!',
                    offlineButton: 'Desconectar!',
                    logoutButton: 'Salir',
                    notificationPickUp: 'Date Prisa! Tienes que entregar el pedido!',
                    notificationDeliver: 'Enhorabuena! Has repartido el pedido a tiempo!',
                    buttonPickUp: 'Recoger!',
                    buttonEntregar: 'Entregar'
                }
            }
        };
    }
    TranslationService.prototype.translate = function (key) {
        if (this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[key];
        }
    };
    TranslationService.prototype.changeLanguage = function (idioma) {
        this.language = idioma;
    };
    TranslationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TranslationService);
    return TranslationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/usuario.model */ "./src/app/models/usuario.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
        this.user = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.logged = false;
    }
    // comprueba si usuario y contraseña son correctos.
    UserService.prototype.login = function (usuario) {
        if (usuario !== null && usuario !== undefined && usuario.usuario === 'adrian' && usuario.password === '123456') {
            this.user.usuario = usuario.usuario;
            this.user.password = usuario.password;
            console.log('Loged with user: ' + this.user.usuario);
            this.logged = true;
            return true;
        }
        return false;
    };
    UserService.prototype.resetPedido = function () {
        this.user.pedido = undefined;
    };
    // Devuelve el usuario
    UserService.prototype.getUsuario = function () {
        return this.user;
    };
    // Devuelve si el usuario esta loggeado
    UserService.prototype.isLogged = function () {
        return this.logged;
    };
    UserService.prototype.logout = function () {
        console.log('Logged out');
        this.logged = false;
        localStorage.clear();
        this.router.navigate(['/home']);
    };
    // Funcion que guarda los datos del usuario en el localstorage
    UserService.prototype.saveData = function (user) {
        // Antes de guardar eliminamos los datos anteriores
        if (localStorage.getItem('usuario')) {
            localStorage.removeItem('usuario');
        }
        if (localStorage.getItem('hub')) {
            localStorage.removeItem('hub');
        }
        if (localStorage.getItem('plate')) {
            localStorage.removeItem('plate');
        }
        if (localStorage.getItem('km')) {
            localStorage.removeItem('km');
        }
        this.user = user;
        localStorage.setItem('hub', this.user.hub);
        localStorage.setItem('plate', this.user.plate);
        localStorage.setItem('km', this.user.odometer.toString());
    };
    // Metodo que retorna un booleano que indica si el repartidor lleva un pedido
    UserService.prototype.repartiendo = function (repartidor) {
        if (repartidor.pedido !== undefined) {
            return true;
        }
        return false;
    };
    // Metodo que dado un codigo de pedido se lo asigna al repartidor
    UserService.prototype.asignarPedido = function (code) {
        this.user.pedido = code;
    };
    UserService.prototype.entregado = function () {
        this.user.pedido = undefined;
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Carlos\Desktop\Adrian\webmpcaptains\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map