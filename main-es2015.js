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
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar>\n</app-navbar>\n<div>\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-4 border-0\">\n\n    <form [formGroup]=\"taskEditForm\">\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label>Task Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"taskName\" placeholder=\"name\" [ngClass]=\"{ 'is-invalid': submitted && fval.taskName.errors }\" #taskName [(ngModel)]=\"toEditTask.taskName\" />\n                <div *ngIf=\"submitted && fval.taskName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fval.taskName.errors.required\">Task name is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label>Task Description</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"taskDescription\" placeholder=\"description\" [(ngModel)]=\"toEditTask.taskDescription\" [ngClass]=\"{ 'is-invalid': submitted && fval.taskDescription.errors }\" #taskDescription />\n                <div *ngIf=\"submitted && fval.taskDescription.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fval.taskDescription.errors.required\">Task name is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label>Priority </label>\n                <select formControlName=\"priority\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.priority.errors }\" [(ngModel)]=\"toEditTask.taskPriority\">\n                        \n                        <option value=\"High\">High</option>\n                        <option value=\"Medium\">Medium</option>\n                        <option value=\"Low\">Low</option>\n                    </select>\n                <div *ngIf=\"submitted && fval.priority.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fval.priority.errors.required\">priority is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label>Status </label>\n                <select formControlName=\"status\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.status.errors }\" [(ngModel)]=\"toEditTask.status\">\n                            \n                            <option value=\"New\">New</option>\n                            <option value=\"In Progress\">In Progress</option>\n                            <option value=\"Completed\">Completed</option>\n                        </select>\n                <div *ngIf=\"submitted && fval.priority.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fval.priority.errors.required\">status is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"\">\n            <button type=\"submit\" class=\"btn btn-primary mr-1\" (click)=\"updateForm()\">Update</button>\n            <button class=\"btn btn-secondary  mr-1\" type=\"reset\" (click)=\"onReset()\">Reset</button>\n            <button class=\"btn btn-danger  mr-1\" type=\"submit\" (click)=\"deleteTask()\">Delete</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-task-tracker/my-task-tracker.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-task-tracker/my-task-tracker.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\">\n    <div class=\"row justify-content-around\">\n        <div class=\"col-xl-2 col-lg-4 col-md-4 scrollbar scrollbar-primary\" id=\"taskLists\">\n\n            <div class=\"card-body\">\n                <h6>New</h6>\n                <div>\n                    <div *ngFor=\"let task of taskList \">\n                        <div *ngIf=\"task.status == 'New'\">\n                            <div *ngIf=\"task.taskPriority == 'High'\" id=\"newTask\" class=\"taskDetail high\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  newEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  newEditButton\">Details</button>\n                            </div>\n                            <div *ngIf=\"task.taskPriority == 'Medium'\" id=\"newTask\" class=\"taskDetail medium\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  newEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  newEditButton\">Details</button>\n                            </div>\n                            <div *ngIf=\"task.taskPriority == 'Low'\" id=\"newTask\" class=\"taskDetail low\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  newEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  newEditButton\">Details</button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"col-xl-2 col-lg-4 col-md-4 scrollbar scrollbar-primary\" id=\"taskLists\">\n\n            <div class=\"card-body\">\n                <h6>In Progress</h6>\n\n                <div>\n                    <div *ngFor=\"let task of taskList \">\n                        <div *ngIf=\"task.status == 'In Progress'\">\n                            <div *ngIf=\"task.taskPriority == 'High'\" id=\"inProgressTask\" class=\"taskDetail high\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  progressEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  progressEditButton\">Details</button>\n                            </div>\n                            <div *ngIf=\"task.taskPriority == 'Medium'\" id=\"inProgressTask\" class=\"taskDetail medium\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  progressEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  progressEditButton\">Details</button>\n                            </div>\n                            <div *ngIf=\"task.taskPriority == 'Low'\" id=\"inProgressTask\" class=\"taskDetail low\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  progressEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  progressEditButton\">Details</button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"col-xl-2 col-lg-4 col-md-4 scrollbar scrollbar-primary\" id=\"taskLists\">\n\n            <div class=\"card-body\">\n                <h6>Completed</h6>\n                <div>\n                    <div *ngFor=\"let task of taskList \">\n                        <div *ngIf=\"task.status == 'Completed'\">\n                            <div *ngIf=\"task.taskPriority == 'High'\" id=\"completedTask\" class=\"taskDetail high\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  completeEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  completeEditButton\">Details</button>\n                            </div>\n                            <div *ngIf=\"task.taskPriority == 'Medium'\" id=\"completedTask\" class=\"taskDetail medium\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  completeEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  completeEditButton\">Details</button>\n                            </div>\n                            <div *ngIf=\"task.taskPriority == 'Low'\" id=\"completedTask\" class=\"taskDetail low\">\n\n                                <p class=\"newTaskHead\">{{task.taskName}}</p>\n                                <p>{{task.taskDescription}}</p>\n                                <button [routerLink]=\"['/edit-task/',task.creationDate]\" class=\"btn  completeEditButton\">Edit</button>\n                                <button [routerLink]=\"['/task-details/',task.creationDate]\" class=\"btn  completeEditButton\">Details</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-light\">\n    <div class=\"container-fluid\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a routerLink=\"\" class=\"nav-link\" routerLinkActive=\"active\">\n                    My Task Traker\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a routerLink=\"/new-task\" routerLinkActive=\"active\" class=\"nav-link float-right\"\n                    routerLinkActive=\"active\">\n                    New Task\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-details/task-details.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-details/task-details.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"tempTask.status == 'New'\" id=\"newTask\" class=\"taskDetail \">\n    <span>\n        <label>Task Name:</label>\n        <p >{{tempTask.taskName}}</p>\n    </span>\n    <span>\n        <label>Task Description:</label>\n        <p>{{tempTask.taskDescription}}</p>\n    </span>\n    <span>\n\n\n        <label>Task Priority:</label>\n        <p>{{tempTask.taskPriority}}</p>\n    </span>\n    <span>\n\n\n        <label>Task status:</label>\n        <p>{{tempTask.status}}</p>\n    </span>\n    <span>\n        <label>Task Creation Date:</label>\n        <p>{{cd}}</p>\n    </span>\n    <span>\n        <label>Task Completion Date:</label>\n        <p>{{compD}}</p>\n    </span>\n    <button [routerLink]=\"['/edit-task/',tempTask.creationDate]\" class=\"btn  btn-primary\">Edit</button>\n    <button class=\"btn btn-danger  mr-1\" type=\"submit\" (click)=\"deleteTask()\">Delete</button>\n</div>\n\n<div *ngIf=\"tempTask.status == 'In Progress'\" id=\"inProgressTask\" class=\"taskDetail \">\n    <label>Task Name:</label>\n    <p>{{tempTask.taskName}}</p>\n\n    <label>Task Description:</label>\n    <p>{{tempTask.taskDescription}}</p>\n\n    <label>Task Priority:</label>\n    <p>{{tempTask.taskPriority}}</p>\n\n    <label>Task status:</label>\n    <p>{{tempTask.status}}</p>\n\n    <label>Task Creation Date:</label>\n    <p>{{cd}}</p>\n\n    <label>Task Completion Date:</label>\n    <p>{{compD}}</p>\n    <button [routerLink]=\"['/edit-task/',tempTask.creationDate]\" class=\"btn  btn-primary\">Edit</button>\n    <button class=\"btn btn-danger  mr-1\" type=\"submit\" (click)=\"deleteTask()\">Delete</button>\n</div>\n\n<div *ngIf=\"tempTask.status == 'Completed'\" id=\"completedTask\" class=\"taskDetail \">\n    <label>Task Name:</label>\n    <p>{{tempTask.taskName}}</p>\n\n    <label>Task Description:</label>\n    <p>{{tempTask.taskDescription}}</p>\n\n    <label>Task Priority:</label>\n    <p>{{tempTask.taskPriority}}</p>\n\n    <label>Task status:</label>\n    <p>{{tempTask.status}}</p>\n\n    <label>Task Creation Date:</label>\n    <p>{{cd}}</p>\n\n    <label>Task Completion Date:</label>\n    <p>{{compD}}</p>\n    <button [routerLink]=\"['/edit-task/',tempTask.creationDate]\" class=\"btn  btn-primary\">Edit</button>\n    <button class=\"btn btn-danger  mr-1\" type=\"submit\" (click)=\"deleteTask()\">Delete</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-form/task-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-form/task-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-4 border-0\">\n\n    <form [formGroup]=\"taskForm\">\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label>Task Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"taskName\" placeholder=\"name\" [ngClass]=\"{ 'is-invalid': submitted && fval.taskName.errors }\" #taskName />\n                <div *ngIf=\"submitted && fval.taskName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fval.taskName.errors.required\">Task name is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label>Task Description</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"taskDescription\" placeholder=\"description\" [ngClass]=\"{ 'is-invalid': submitted && fval.taskDescription.errors }\" #taskName />\n                <div *ngIf=\"submitted && fval.taskDescription.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fval.taskDescription.errors.required\">Task name is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label>Priority </label>\n                <select formControlName=\"priority\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.priority.errors }\">\n                    <option value=\"High\">High</option>\n                    <option value=\"Medium\">Medium</option>\n                    <option value=\"Low\">Low</option>\n                </select>\n                <div *ngIf=\"submitted && fval.priority.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fval.priority.errors.required\">Task name is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"\">\n            <button type=\"submit\" class=\"btn btn-primary mr-1\" (click)=\"addTask()\">Add</button>\n            <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Reset</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-model/task-model.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-model/task-model.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'UI10';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-form/task-form.component */ "./src/app/task-form/task-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _my_task_tracker_my_task_tracker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-task-tracker/my-task-tracker.component */ "./src/app/my-task-tracker/my-task-tracker.component.ts");
/* harmony import */ var _task_model_task_model_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-model/task-model.component */ "./src/app/task-model/task-model.component.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task-details/task-details.component */ "./src/app/task-details/task-details.component.ts");














const appRoutes = [
    { path: 'new-task', component: _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_8__["TaskFormComponent"] },
    { path: 'app-component', component: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] },
    { path: 'my-task-tracker', component: _my_task_tracker_my_task_tracker_component__WEBPACK_IMPORTED_MODULE_10__["MyTaskTrackerComponent"] },
    { path: 'edit-task/:date', component: _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__["EditTaskComponent"] },
    { path: 'task-details/:date', component: _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_13__["TaskDetailsComponent"] },
    { path: '', redirectTo: '/my-task-tracker', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_8__["TaskFormComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _my_task_tracker_my_task_tracker_component__WEBPACK_IMPORTED_MODULE_10__["MyTaskTrackerComponent"],
            _task_model_task_model_component__WEBPACK_IMPORTED_MODULE_11__["TaskModelComponent"],
            _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__["EditTaskComponent"],
            _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_13__["TaskDetailsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit-task/edit-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.ts ***!
  \**************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _task_model_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-model/task-model */ "./src/app/task-model/task-model.ts");
/* harmony import */ var _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-model/task-model.service */ "./src/app/task-model/task-model.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditTaskComponent = class EditTaskComponent {
    constructor(fb, taskService, router, activatedRoute) {
        this.fb = fb;
        this.taskService = taskService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.cD = null;
    }
    ngOnInit() {
        this.taskService.taskList.forEach((t) => {
            if (t.creationDate.toString() == (this.activatedRoute.snapshot.paramMap.get("date"))) {
                this.toEditTask = t;
            }
        });
        /**
         * Attach the form values.
         */
        this.taskEditForm = this.fb.group({
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            taskDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priority: [''],
            status: ['']
        });
    }
    /**
     * Return the values of form.
     */
    get fval() {
        return this.taskEditForm.controls;
    }
    /**
     * Update the edit form .
     */
    updateForm() {
        this.submitted = true;
        if (this.taskEditForm.invalid) {
            return;
        }
        if (this.taskEditForm.value.status == "Completed") {
            this.cD = Date.now();
        }
        this.taskModel = new _task_model_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](this.taskEditForm.value.taskName, this.taskEditForm.value.taskDescription, this.taskEditForm.value.priority, this.taskEditForm.value.status, this.toEditTask.creationDate, this.cD);
        console.log(new Date(this.cD));
        this.save();
        this.router.navigate(['/my-task-tracker']);
    }
    /**
    * Save the value on local storage.
    */
    save() {
        this.taskService.updateTask(this.taskModel);
    }
    /**
     * Delete the task from local storage.
     */
    deleteTask() {
        this.taskService.deleteTask(this.toEditTask);
        this.router.navigate(['/my-task-tracker']);
    }
};
EditTaskComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_4__["TaskModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-task.component.css */ "./src/app/edit-task/edit-task.component.css")).default]
    })
], EditTaskComponent);



/***/ }),

/***/ "./src/app/my-task-tracker/my-task-tracker.component.css":
/*!***************************************************************!*\
  !*** ./src/app/my-task-tracker/my-task-tracker.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nh6{\r\n    text-align: center;\r\n}\r\n\r\n#taskLists{\r\n    background-color:rgb(252, 217, 217);\r\n    height:600px;\r\n    margin-top:2rem;\r\n    margin-bottom:2rem;\r\n    border-radius: 2%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.scrollbar {\r\n    margin-left: 30px;\r\n    float: left;\r\n    height: 300px;\r\n    width: 65px;\r\n    background: #fff;\r\n    overflow-y: scroll;\r\n    margin-bottom: 25px;\r\n    }\r\n\r\n.scrollbar-primary::-webkit-scrollbar {\r\n        width: 12px;\r\n        background-color: rgb(245, 245, 245); }\r\n\r\n.scrollbar-primary::-webkit-scrollbar-thumb {\r\n            border-radius: 10px;\r\n           \r\n            background-color: rgb(193, 217, 241); }\r\n\r\n#newTask{\r\n    background-color: rgb(153, 153, 253);\r\n    margin:1rem 0;\r\n    border-radius: 2%;\r\n}\r\n\r\n.high .newTaskHead{\r\n    background-color: rgb(250, 192, 192); \r\n}\r\n\r\n.medium .newTaskHead{\r\n    background-color: rgb(211, 248, 222);\r\n}\r\n\r\n.low .newTaskHead{\r\n    background-color: rgb(252, 251, 183);\r\n}\r\n\r\n.newTaskHead{\r\n    background-color: rgb(216, 216, 250);\r\n}\r\n\r\n#inProgressTask{\r\n    background-color: rgb(247, 194, 223);\r\n    margin:1rem 0;\r\n    border-radius: 2%;\r\n}\r\n\r\n.progressTaskHead{\r\n    background-color: rgb(255, 221, 240);\r\n}\r\n\r\n#completedTask{\r\n    background-color: rgb(190, 248, 250);\r\n    margin:1rem 0;\r\n    border-radius: 2%;\r\n}\r\n\r\n.completedTaskHead{\r\n    background-color: rgb(239, 253, 253);\r\n}\r\n\r\n.card-body {\r\n    padding-left:0;\r\n    padding-right:0;\r\n}\r\n\r\n.taskDetail > p{\r\n    padding: 0 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.newEditButton{\r\n    width: 49%;\r\n    background-color: rgb(109, 109, 248);\r\n    margin:0.5%;\r\n}\r\n\r\n.progressEditButton{\r\n    width: 49%;\r\n    background-color: rgba(255, 174, 219, 0.822);\r\n    margin:0.5%;\r\n}\r\n\r\n.completeEditButton{\r\n    width: 49%;\r\n    background-color: rgba(113, 237, 243, 0.788);\r\n    margin:0.5%;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktdGFzay10cmFja2VyL215LXRhc2stdHJhY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjs7QUFFQTtRQUNJLFdBQVc7UUFDWCxvQ0FBb0MsRUFBRTs7QUFFdEM7WUFDSSxtQkFBbUI7O1lBRW5CLG9DQUFvQyxFQUFFOztBQUNsRDtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDRDQUE0QztJQUM1QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL215LXRhc2stdHJhY2tlci9teS10YXNrLXRyYWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaDZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0YXNrTGlzdHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTIsIDIxNywgMjE3KTtcclxuICAgIGhlaWdodDo2MDBweDtcclxuICAgIG1hcmdpbi10b3A6MnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5zY3JvbGxiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zY3JvbGxiYXItcHJpbWFyeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTsgfVxyXG5cclxuICAgICAgICAuc2Nyb2xsYmFyLXByaW1hcnk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjE3LCAyNDEpOyB9XHJcbiNuZXdUYXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAyNTMpO1xyXG4gICAgbWFyZ2luOjFyZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4uaGlnaCAubmV3VGFza0hlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxOTIsIDE5Mik7IFxyXG59XHJcblxyXG4ubWVkaXVtIC5uZXdUYXNrSGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDI0OCwgMjIyKTtcclxufVxyXG5cclxuLmxvdyAubmV3VGFza0hlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTEsIDE4Myk7XHJcbn1cclxuXHJcbi5uZXdUYXNrSGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjUwKTtcclxufVxyXG5cclxuI2luUHJvZ3Jlc3NUYXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTk0LCAyMjMpO1xyXG4gICAgbWFyZ2luOjFyZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NUYXNrSGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMSwgMjQwKTtcclxufVxyXG5cclxuXHJcbiNjb21wbGV0ZWRUYXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMjQ4LCAyNTApO1xyXG4gICAgbWFyZ2luOjFyZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4uY29tcGxldGVkVGFza0hlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNTMsIDI1Myk7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbn1cclxuXHJcbi50YXNrRGV0YWlsID4gcHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5uZXdFZGl0QnV0dG9ue1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEwOSwgMjQ4KTtcclxuICAgIG1hcmdpbjowLjUlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NFZGl0QnV0dG9ue1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNzQsIDIxOSwgMC44MjIpO1xyXG4gICAgbWFyZ2luOjAuNSU7XHJcbn1cclxuXHJcbi5jb21wbGV0ZUVkaXRCdXR0b257XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDIzNywgMjQzLCAwLjc4OCk7XHJcbiAgICBtYXJnaW46MC41JTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/my-task-tracker/my-task-tracker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/my-task-tracker/my-task-tracker.component.ts ***!
  \**************************************************************/
/*! exports provided: MyTaskTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTaskTrackerComponent", function() { return MyTaskTrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-model/task-model.service */ "./src/app/task-model/task-model.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MyTaskTrackerComponent = class MyTaskTrackerComponent {
    constructor(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
        this.taskList = this.taskService.getAllTasks();
    }
};
MyTaskTrackerComponent.ctorParameters = () => [
    { type: _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_2__["TaskModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MyTaskTrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-task-tracker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-task-tracker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-task-tracker/my-task-tracker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-task-tracker.component.css */ "./src/app/my-task-tracker/my-task-tracker.component.css")).default]
    })
], MyTaskTrackerComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/task-details/task-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/task-details/task-details.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\r\n    text-align: center;\r\n}\r\n\r\n#taskLists {\r\n    background-color: rgb(240, 238, 238);\r\n    height: 600px;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-radius: 2%;\r\n}\r\n\r\n#newTask {\r\n    background-color: rgb(153, 153, 253);\r\n    margin: 1rem 0;\r\n    border-radius: 2%;\r\n}\r\n\r\n.newTaskHead {\r\n    background-color: rgb(216, 216, 250);\r\n}\r\n\r\n#inProgressTask {\r\n    background-color: rgb(247, 194, 223);\r\n    margin: 1rem 0;\r\n    border-radius: 2%;\r\n}\r\n\r\n.progressTaskHead {\r\n    background-color: rgb(255, 221, 240);\r\n}\r\n\r\n#completedTask {\r\n    background-color: rgb(190, 248, 250);\r\n    margin: 1rem 0;\r\n    border-radius: 2%;\r\n}\r\n\r\n.completedTaskHead {\r\n    background-color: rgb(239, 253, 253);\r\n}\r\n\r\n.taskDetail>p {\r\n    padding: 0 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.newEditButton {\r\n    width: 49%;\r\n    background-color: rgb(109, 109, 248);\r\n    margin: 0.5%;\r\n}\r\n\r\n.progressEditButton {\r\n    width: 49%;\r\n    background-color: rgba(255, 174, 219, 0.822);\r\n    margin: 0.5%;\r\n}\r\n\r\n.completeEditButton {\r\n    width: 49%;\r\n    background-color: rgba(113, 237, 243, 0.788);\r\n    margin: 0.5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1kZXRhaWxzL3Rhc2stZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90YXNrLWRldGFpbHMvdGFzay1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0YXNrTGlzdHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM4LCAyMzgpO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbn1cclxuXHJcbiNuZXdUYXNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE1MywgMjUzKTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbn1cclxuXHJcbi5uZXdUYXNrSGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDI1MCk7XHJcbn1cclxuXHJcbiNpblByb2dyZXNzVGFzayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxOTQsIDIyMyk7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NUYXNrSGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjEsIDI0MCk7XHJcbn1cclxuXHJcbiNjb21wbGV0ZWRUYXNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDI0OCwgMjUwKTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWRUYXNrSGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNTMsIDI1Myk7XHJcbn1cclxuXHJcbi50YXNrRGV0YWlsPnAge1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm5ld0VkaXRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEwOSwgMjQ4KTtcclxuICAgIG1hcmdpbjogMC41JTtcclxufVxyXG5cclxuLnByb2dyZXNzRWRpdEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE3NCwgMjE5LCAwLjgyMik7XHJcbiAgICBtYXJnaW46IDAuNSU7XHJcbn1cclxuXHJcbi5jb21wbGV0ZUVkaXRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEzLCAyMzcsIDI0MywgMC43ODgpO1xyXG4gICAgbWFyZ2luOiAwLjUlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/task-details/task-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/task-details/task-details.component.ts ***!
  \********************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-model/task-model.service */ "./src/app/task-model/task-model.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TaskDetailsComponent = class TaskDetailsComponent {
    constructor(taskService, router, activatedRoute) {
        this.taskService = taskService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.taskService.taskList.forEach((t) => {
            if (t.creationDate.toString() == (this.activatedRoute.snapshot.paramMap.get("date"))) {
                this.tempTask = t;
                this.cd = new Date(Number(this.tempTask.creationDate));
                if (this.tempTask.completionDate == null) {
                }
                else {
                    this.compD = new Date(Number(this.tempTask.completionDate));
                }
            }
        });
    }
    /**
     * Detele the task from local storage.
     */
    deleteTask() {
        this.taskService.deleteTask(this.tempTask);
        this.router.navigate(['/my-task-tracker']);
    }
};
TaskDetailsComponent.ctorParameters = () => [
    { type: _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_2__["TaskModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TaskDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-details/task-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-details.component.css */ "./src/app/task-details/task-details.component.css")).default]
    })
], TaskDetailsComponent);



/***/ }),

/***/ "./src/app/task-form/task-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-form/task-form.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZm9ybS90YXNrLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/task-form/task-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-form/task-form.component.ts ***!
  \**************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _task_model_task_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-model/task-Model */ "./src/app/task-model/task-Model.ts");
/* harmony import */ var _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-model/task-model.service */ "./src/app/task-model/task-model.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TaskFormComponent = class TaskFormComponent {
    constructor(fb, taskService, router) {
        this.fb = fb;
        this.taskService = taskService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.taskForm = this.fb.group({
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            taskDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    /**
     * Return the value of form.
     */
    get fval() {
        return this.taskForm.controls;
    }
    /**
     * Method to add task in local storage.
     */
    addTask() {
        this.submitted = true;
        if (this.taskForm.invalid) {
            return;
        }
        this.taskModel = new _task_model_task_Model__WEBPACK_IMPORTED_MODULE_3__["Task"](this.taskForm.value.taskName, this.taskForm.value.taskDescription, this.taskForm.value.priority, "New", Date.now(), null);
        this.save();
        this.router.navigate(['/my-task-tracker']);
    }
    /**
     * save the value on local storage.
     */
    save() {
        this.taskService.createTask(this.taskModel);
    }
};
TaskFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _task_model_task_model_service__WEBPACK_IMPORTED_MODULE_4__["TaskModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TaskFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-form/task-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-form.component.css */ "./src/app/task-form/task-form.component.css")).default]
    })
], TaskFormComponent);



/***/ }),

/***/ "./src/app/task-model/generateGuid.ts":
/*!********************************************!*\
  !*** ./src/app/task-model/generateGuid.ts ***!
  \********************************************/
/*! exports provided: generateGuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGuid", function() { return generateGuid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class generateGuid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


/***/ }),

/***/ "./src/app/task-model/task-Model.ts":
/*!******************************************!*\
  !*** ./src/app/task-model/task-Model.ts ***!
  \******************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    constructor(taskName, taskDescription, taskPriority, status, creationDate, completionDate) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskPriority = taskPriority;
        this.status = status;
        this.creationDate = creationDate;
        this.completionDate = completionDate;
    }
}


/***/ }),

/***/ "./src/app/task-model/task-model.component.css":
/*!*****************************************************!*\
  !*** ./src/app/task-model/task-model.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbW9kZWwvdGFzay1tb2RlbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/task-model/task-model.component.ts":
/*!****************************************************!*\
  !*** ./src/app/task-model/task-model.component.ts ***!
  \****************************************************/
/*! exports provided: TaskModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModelComponent", function() { return TaskModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskModelComponent = class TaskModelComponent {
    constructor() { }
    ngOnInit() {
    }
};
TaskModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-model',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-model/task-model.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-model.component.css */ "./src/app/task-model/task-model.component.css")).default]
    })
], TaskModelComponent);



/***/ }),

/***/ "./src/app/task-model/task-model.service.ts":
/*!**************************************************!*\
  !*** ./src/app/task-model/task-model.service.ts ***!
  \**************************************************/
/*! exports provided: TaskModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModelService", function() { return TaskModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _generateGuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateGuid */ "./src/app/task-model/generateGuid.ts");
/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-model */ "./src/app/task-model/task-model.ts");






let TaskModelService = class TaskModelService {
    constructor(http) {
        this.http = http;
        this.taskList = [];
        this.taskUrl = "http://localhost:8080/tasks";
    }
    /**
     * Method to fatch task from local storage.
     */
    getAllTasks() {
        this.taskList = [];
        for (let key in localStorage) {
            if (localStorage.getItem(String(key)) != null) {
                this.taskTemp = this.stringToTask(localStorage.getItem(String(key)));
                this.taskList.push(this.taskTemp);
            }
        }
        localStorage.key;
        return this.taskList;
    }
    /**
     * Method to convert string to task.
     * @param str
     */
    stringToTask(str) {
        var tempStr = str.split(",");
        if (tempStr[5] == "null") {
            this.task1 = new _task_model__WEBPACK_IMPORTED_MODULE_5__["Task"](String(tempStr[0]), String(tempStr[1]), String(tempStr[2]), String(tempStr[3]), tempStr[4], null);
        }
        else {
            this.task1 = new _task_model__WEBPACK_IMPORTED_MODULE_5__["Task"](String(tempStr[0]), String(tempStr[1]), String(tempStr[2]), String(tempStr[3]), tempStr[4], tempStr[5]);
        }
        return this.task1;
    }
    /**
     * Method to create task.
     * @param task
     */
    createTask(task) {
        var gen = _generateGuid__WEBPACK_IMPORTED_MODULE_4__["generateGuid"].newGuid();
        var json = this.taskToString(task);
        localStorage.setItem(String(gen), json);
        console.log(gen);
    }
    /**
     * Method to convert task to string.
     * @param task
     */
    taskToString(task) {
        var tTs = task.taskName + ','
            + task.taskDescription + ',' + task.taskPriority
            + ',' + task.status + ',' + task.creationDate
            + ',' + task.completionDate;
        return tTs;
    }
    /**
     * Method to update task.
     * @param task
     */
    updateTask(task) {
        for (let key in localStorage) {
            if (localStorage.getItem(String(key)) != null) {
                if (localStorage.getItem(String(key)).split(",")[4] == String(task.creationDate)) {
                    localStorage.setItem(String(key), this.taskToString(task));
                }
            }
        }
    }
    /**
     * Method to delete task.
     */
    deleteTask(task) {
        for (let key in localStorage) {
            if (localStorage.getItem(String(key)) != null) {
                if (localStorage.getItem(String(key)).split(",")[4] == String(task.creationDate)) {
                    localStorage.removeItem(String(key));
                }
            }
        }
    }
    handleError(error) {
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
};
TaskModelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskModelService);



/***/ }),

/***/ "./src/app/task-model/task-model.ts":
/*!******************************************!*\
  !*** ./src/app/task-model/task-model.ts ***!
  \******************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    constructor(taskName, taskDescription, taskPriority, status, creationDate, completionDate) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskPriority = taskPriority;
        this.status = status;
        this.creationDate = creationDate;
        this.completionDate = completionDate;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GET2019\UI-Assignment\UI-10\UI10\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map