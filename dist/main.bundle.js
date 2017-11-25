webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Respuesta\" name=\"description\" ></textarea>\n  </mat-form-field>\n</form> -->\n\n\n<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n  <mat-input-container>\n    <textarea\n      matInput\n      placeholder=\"Respuesta\"\n      name=\"description\"\n      ngModel></textarea>\n  </mat-input-container>\n  <button type=\"submit\" mat-raised-button color=\"accent\">Responder</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/answer/answer-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_model__ = __webpack_require__("../../../../../src/app/answer/answer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question_model__ = __webpack_require__("../../../../../src/app/question/question.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question_service__ = __webpack_require__("../../../../../src/app/question/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweet_scroll__ = __webpack_require__("../../../../sweet-scroll/sweet-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweet_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweet_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnswerFormComponent = (function () {
    function AnswerFormComponent(questionService, authService, router) {
        this.questionService = questionService;
        this.authService = authService;
        this.router = router;
        this.sweetScroll = new __WEBPACK_IMPORTED_MODULE_4_sweet_scroll___default.a();
    }
    AnswerFormComponent.prototype.ngOnInit = function () {
    };
    AnswerFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/signin');
        }
        var answer = new __WEBPACK_IMPORTED_MODULE_1__answer_model__["a" /* Answer */](form.value.description, this.question);
        this.questionService.addAnswer(answer)
            .subscribe(function (a) {
            _this.question.answers.unshift(a);
            _this.sweetScroll.to('#title');
        }, this.authService.handleError);
        form.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__question_question_model__["a" /* Question */])
    ], AnswerFormComponent.prototype, "question", void 0);
    AnswerFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-answer-form',
            template: __webpack_require__("../../../../../src/app/answer/answer-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/answer/answer-form.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_3__question_question_service__["a" /* QuestionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__question_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], AnswerFormComponent);
    return AnswerFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/answer/answer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer(description, question, createdAt, user) {
        this.description = description;
        this.question = question;
        this.createdAt = createdAt;
        this.user = user;
    }
    return Answer;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span [routerLink]=\"['/']\">Question Overflow</span>\n  <span class=\"space\"></span>\n\n  <button *ngIf=\"!isLoggedIn()\" [routerLink]=\"['/signin']\" mat-icon-button>\n    <mat-icon>account_circle</mat-icon>\n  </button>\n\n  <div *ngIf=\"isLoggedIn()\">\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>account_circle</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item disabled>\n        {{ fullName() }}\n      </button>\n      <button mat-menu-item (click)=\"logout()\">\n        Cerrar sessión\n      </button>\n    </mat-menu>\n  </div>\n\n</mat-toolbar>\n<!-- <app-question-detail></app-question-detail> -->\n<!-- <app-signin-screen></app-signin-screen> -->\n<!-- <app-signup-screen></app-signup-screen> -->\n<!-- <app-question-list></app-question-list> -->\n<!-- <app-question-form></app-question-form> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.fullName = function () {
        return this.authService.currentUser.fullName();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_question_detail_component__ = __webpack_require__("../../../../../src/app/question/question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__answer_answer_form_component__ = __webpack_require__("../../../../../src/app/answer/answer-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_signin_screen_component__ = __webpack_require__("../../../../../src/app/auth/signin-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_signup_screen_component__ = __webpack_require__("../../../../../src/app/auth/signup-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_question_list_component__ = __webpack_require__("../../../../../src/app/question/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__question_question_form_component__ = __webpack_require__("../../../../../src/app/question/question-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question_question_screen_component__ = __webpack_require__("../../../../../src/app/question/question-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// material angular



// librerias

// componentes








// routing

// services

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__question_question_list_component__["a" /* QuestionListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__question_question_detail_component__["a" /* QuestionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__question_question_form_component__["a" /* QuestionFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__answer_answer_form_component__["a" /* AnswerFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__auth_signin_screen_component__["a" /* SigninScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_12__auth_signup_screen_component__["a" /* SignupScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_15__question_question_screen_component__["a" /* QuestionScreenComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_signin_screen_component__ = __webpack_require__("../../../../../src/app/auth/signin-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_signup_screen_component__ = __webpack_require__("../../../../../src/app/auth/signup-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question_screen_component__ = __webpack_require__("../../../../../src/app/question/question-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_question_routing__ = __webpack_require__("../../../../../src/app/question/question.routing.ts");




// other routes

var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__question_question_screen_component__["a" /* QuestionScreenComponent */], pathMatch: 'full' },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_1__auth_signin_screen_component__["a" /* SigninScreenComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__auth_signup_screen_component__["a" /* SignupScreenComponent */] },
    { path: 'questions', children: __WEBPACK_IMPORTED_MODULE_4__question_question_routing__["a" /* QUESTION_ROUTES */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join__ = __webpack_require__("../../../../url-join/lib/url-join.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url_join__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthService = (function () {
    function AuthService(http, router, snackBar) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.login = function (_a) {
            var token = _a.token, userId = _a.userId, firstName = _a.firstName, lastName = _a.lastName, email = _a.email;
            _this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */](email, null, firstName, lastName, userId);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify({ userId: userId, firstName: firstName, lastName: lastName, email: email }));
            _this.router.navigateByUrl('/');
        };
        this.handleError = function (error) {
            var name = error.error.name, message = error.message;
            if (name === 'TokenExpiredError') {
                _this.showError('Tu sesión ha expirado');
            }
            else if (name === 'JsonWebTokenError') {
                _this.showError('Ha habido un problema con tu sesión');
            }
            else {
                _this.showError(message || 'Ha ocurrido un error. Intentalo de nuevo.');
            }
            _this.logout();
        };
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_1_url_join___default()(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl, 'auth');
        // console.log(this.usersUrl);
        if (this.isLoggedIn()) {
            var _a = JSON.parse(localStorage.getItem('user')), userId = _a.userId, email = _a.email, firstName = _a.firstName, lastName = _a.lastName;
            this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */](email, null, firstName, lastName, userId);
        }
    }
    AuthService.prototype.signin = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var url = __WEBPACK_IMPORTED_MODULE_1_url_join___default()(this.usersUrl, 'signin');
        return this.http.post(url, body, { headers: headers })
            .map(function (response) {
            var json = response.json();
            _this.login(json);
            return json;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    AuthService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var url = __WEBPACK_IMPORTED_MODULE_1_url_join___default()(this.usersUrl, 'signup');
        return this.http.post(url, body, { headers: headers })
            .map(function (response) {
            var json = response.json();
            _this.login(json);
            return json;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.currentUser = null;
        this.router.navigateByUrl('/signin');
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.showError = function (message) {
        this.snackBar.open(message, 'x', { duration: 2500 });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatSnackBar */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n  <mat-input-container>\n    <input\n      matInput\n      placeholder=\"Correo electrónico\"\n      formControlName=\"email\"\n      id=\"email\">\n  </mat-input-container>\n  <mat-input-container>\n    <input\n    type=\"password\"\n    matInput\n    placeholder=\"Contraseña\"\n    formControlName=\"password\"\n    id=\"password\">\n  </mat-input-container>\n  <button type=\"submit\" mat-raised-button color=\"accent\">Iniciar sesión</button>\n  <p style=\"text-align: center;\">\n    ¿Eres nuevo?\n    <a mat-button color=\"primary\" [routerLink]=\"['/signup']\">Crear usuario</a>\n  </p>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninScreenComponent = (function () {
    function SigninScreenComponent(authService) {
        this.authService = authService;
    }
    SigninScreenComponent.prototype.ngOnInit = function () {
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    };
    SigninScreenComponent.prototype.onSubmit = function () {
        if (this.signinForm.valid) {
            var _a = this.signinForm.value, email = _a.email, password = _a.password;
            var user = new __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* User */](email, password);
            this.authService.signin(user)
                .subscribe(this.authService.login, this.authService.handleError);
        }
        else {
            console.log('err');
        }
    };
    SigninScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin-screen',
            template: __webpack_require__("../../../../../src/app/auth/signin-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signin-screen.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], SigninScreenComponent);
    return SigninScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n  <mat-input-container>\n    <input\n      matInput\n      placeholder=\"Nombre\"\n      formControlName=\"name\"\n      id=\"name\">\n  </mat-input-container>\n  <mat-input-container>\n    <input\n      matInput\n      placeholder=\"Apellido\"\n      formControlName=\"lastName\"\n      id=\"lastName\">\n  </mat-input-container>\n  <mat-input-container>\n    <input\n      matInput\n      placeholder=\"Correo electrónico\"\n      formControlName=\"email\"\n      id=\"email\">\n  </mat-input-container>\n  <mat-input-container>\n    <input\n    type=\"password\"\n    matInput\n    placeholder=\"Contraseña\"\n    formControlName=\"password\"\n    id=\"password\">\n  </mat-input-container>\n  <button type=\"submit\" mat-raised-button color=\"accent\">Registrarse</button>\n  <p style=\"text-align: center;\">\n      ¿Ya tienes una cuenta?\n      <a mat-button color=\"primary\" [routerLink]=\"['/signin']\">Iniciar sesión</a>\n  </p>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupScreenComponent = (function () {
    function SignupScreenComponent(authService) {
        this.authService = authService;
    }
    SignupScreenComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    };
    SignupScreenComponent.prototype.onSubmit = function () {
        if (this.signupForm.valid) {
            var _a = this.signupForm.value, email = _a.email, password = _a.password, name_1 = _a.name, lastName = _a.lastName;
            var user = new __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* User */](email, password, name_1, lastName);
            this.authService.signup(user)
                .subscribe(this.authService.login, this.authService.handleError);
        }
        else {
            console.log('err');
        }
    };
    SignupScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-screen',
            template: __webpack_require__("../../../../../src/app/auth/signup-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup-screen.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], SignupScreenComponent);
    return SignupScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password, firstName, lastName, _id) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this._id = _id;
    }
    User.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var mod = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTabsModule */]
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: mod,
            exports: mod
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/question/icons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        'name': 'amazonwebservices',
        'tags': ['cloud', 'hosting', 'server'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain-wordmark'],
            'font': ['original', 'plain-wordmark']
        }
    },
    {
        'name': 'android',
        'tags': ['os', 'mobile'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'angularjs',
        'tags': ['framework', 'javascript'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'appcelerator',
        'tags': ['app', 'mobile'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain-wordmark'],
            'font': ['original', 'plain-wordmark']
        }
    },
    {
        'name': 'apple',
        'tags': ['brand', 'mobile'],
        'versions': {
            'svg': ['original'],
            'font': ['original']
        }
    },
    {
        'name': 'atom',
        'tags': ['editor'],
        'versions': {
            'svg': ['original', 'original-wordmark'],
            'font': ['original', 'original-wordmark']
        }
    },
    {
        'name': 'backbonejs',
        'tags': ['javascript', 'framework'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'bootstrap',
        'tags': ['css', 'framework'],
        'versions': {
            'svg': ['plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'bower',
        'tags': ['package', 'manager'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark'],
            'font': ['plain', 'plain-wordmark', 'line', 'line-wordmark']
        }
    },
    {
        'name': 'chrome',
        'tags': ['browser'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'codeigniter',
        'tags': ['php', 'framework'],
        'versions': {
            'svg': ['plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'css3',
        'tags': ['language', 'programming'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'debian',
        'tags': ['os', 'server'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'dot-net',
        'tags': ['framework'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'drupal',
        'tags': ['cms'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'firefox',
        'tags': ['browser'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'foundation',
        'tags': ['framework', 'css'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'git',
        'tags': ['version-control'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'grunt',
        'tags': ['task-runner', 'nodejs'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark'],
            'font': ['plain', 'plain-wordmark', 'line', 'line-wordmark']
        }
    },
    {
        'name': 'gulp',
        'tags': ['task-runner', 'nodejs'],
        'versions': {
            'svg': ['plain'],
            'font': ['plain']
        }
    },
    {
        'name': 'html5',
        'tags': ['programming', 'language'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'ie10',
        'tags': ['browser'],
        'versions': {
            'svg': ['original'],
            'font': ['original']
        }
    },
    {
        'name': 'java',
        'tags': ['programming', 'language'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'javascript',
        'tags': ['programming', 'language'],
        'versions': {
            'svg': ['original', 'plain'],
            'font': ['plain']
        }
    },
    {
        'name': 'jquery',
        'tags': ['library', 'javascript'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'krakenjs',
        'tags': ['nodejs', 'framework'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'laravel',
        'tags': ['php', 'framework'],
        'versions': {
            'svg': ['plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'less',
        'tags': ['css', 'pre-processor'],
        'versions': {
            'svg': ['plain-wordmark'],
            'font': ['plain-wordmark']
        }
    },
    {
        'name': 'linux',
        'tags': ['os'],
        'versions': {
            'svg': ['original', 'plain'],
            'font': ['plain']
        }
    },
    {
        'name': 'mongodb',
        'tags': ['database'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'moodle',
        'tags': ['platform'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'mysql',
        'tags': ['database', 'language'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'nodejs',
        'tags': ['javascript', 'language'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'oracle',
        'tags': ['database'],
        'versions': {
            'svg': ['original'],
            'font': ['original']
        }
    },
    {
        'name': 'photoshop',
        'tags': ['editor', 'graphic'],
        'versions': {
            'svg': ['plain', 'line'],
            'font': ['plain', 'line']
        }
    },
    {
        'name': 'php',
        'tags': ['programming', 'language'],
        'versions': {
            'svg': ['original', 'plain'],
            'font': ['plain']
        }
    },
    {
        'name': 'postgresql',
        'tags': ['database'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'python',
        'tags': ['programming', 'language'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'rails',
        'tags': ['framework'],
        'versions': {
            'svg': ['original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'ruby',
        'tags': ['programming', 'language'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'sass',
        'tags': ['pre-processor', 'css'],
        'versions': {
            'svg': ['original'],
            'font': ['original']
        }
    },
    {
        'name': 'travis',
        'tags': ['platform', 'integration'],
        'versions': {
            'svg': ['plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'trello',
        'tags': ['platform', 'organize'],
        'versions': {
            'svg': ['plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'ubuntu',
        'tags': ['os'],
        'versions': {
            'svg': ['plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'windows8',
        'tags': ['os'],
        'versions': {
            'svg': ['original', 'original-wordmark'],
            'font': ['original', 'original-wordmark']
        }
    },
    {
        'name': 'wordpress',
        'tags': ['cms'],
        'versions': {
            'svg': ['original', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'yii',
        'tags': ['php', 'framework'],
        'versions': {
            'svg': ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    },
    {
        'name': 'zend',
        'tags': ['php', 'framework'],
        'versions': {
            'svg': ['plain', 'plain-wordmark'],
            'font': ['plain', 'plain-wordmark']
        }
    }
]);


/***/ }),

/***/ "../../../../../src/app/question/question-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon {\n  font-size: 38px;\n}\n\n.answers-list {\n padding: 0;\n list-style: none;\n padding-left: 15px;\n padding-bottom: 160px;\n}\n\n.banner{\n  padding-left: 15px;\n}\n\nh5 {\n  margin-bottom: 0;\n}\n\nh5 small {\n  font-weight: normal;\n  font-size: smaller;\n  color: rgba(0, 0, 0, .54)\n}\n\n.description {\n  padding-left: 6px;\n  border-left: 2px solid #eee;\n  margin-top: 6px;\n}\n\n.answer-form {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 2;\n  background-color: white;\n  border-top: 1px solid #dcdcdc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"!loading\">\n  <mat-card>\n    <mat-card-header>\n      <div mat-card-avatar>\n        <i class=\"{{ question.icon }} icon\"></i>\n      </div>\n      <mat-card-title>{{ question.title }}</mat-card-title>\n      <mat-card-subtitle>\n        <small>Joel barron - {{ question.createdAt | amLocale: 'es' | amTimeAgo }}</small>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>{{ question.description }}</p>\n    </mat-card-content>\n  </mat-card>\n  <div class=\"answers\">\n    <h3 id=\"title\" data-scroll>Respuestas</h3>\n    <ul class=\"answers-list\" *ngIf=\"question.answers.length > 0\">\n      <li *ngFor=\"let answer of question.answers\">\n        <h5>{{ answer.user.firstName }} {{ answer.user.lastName }} <small>{{ answer.createdAt | amLocale: 'es' | amTimeAgo }}</small></h5>\n        <p class=\"description\">{{ answer.description }}</p>\n      </li>\n    </ul>\n    <p *ngIf=\"question.answers.length == 0\" class=\"banner\">Sé el primero en responder esta pregunta</p>\n    <app-answer-form [question]=\"question\" class=\"answer-form\"></app-answer-form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question/question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionDetailComponent = (function () {
    function QuestionDetailComponent(questionService, route) {
        this.questionService = questionService;
        this.route = route;
        this.loading = true;
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // hacer el llamado
            _this.questionService
                .getQuestion(params.id)
                .then(function (response) {
                _this.question = response;
                _this.loading = false;
            });
            // termina el llamado
        });
    };
    QuestionDetailComponent.prototype.ngOnDestroy = function () {
        // des suscribirnos para liberar recursos
        this.sub.unsubscribe();
    };
    QuestionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-detail',
            template: __webpack_require__("../../../../../src/app/question/question-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], QuestionDetailComponent);
    return QuestionDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/question-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  font-size: 48px;\n}\n\nsmall {\n  display: block;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- formulario SIN reactive forms -->\n<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n  <mat-input-container>\n    <input\n      matInput\n      placeholder=\"Titulo\"\n      name=\"title\"\n      ngModel>\n  </mat-input-container>\n  <mat-input-container>\n    <textarea\n      matInput\n      placeholder=\"Descripcion\"\n      name=\"description\"\n      ngModel></textarea>\n  </mat-input-container>\n  <button type=\"submit\" mat-raised-button color=\"accent\">Enviar</button>\n\n  <mat-grid-list cols=\"3\" rowHeight=\"3:2\">\n    <mat-grid-tile>\n      <mat-radio-group [ngModel] name=\"icon\">\n        <mat-radio-button value=\"none\">\n          <i mat-list-icon class=\"material-icons\">help</i>\n          <small>Sin icono</small>\n        </mat-radio-button>\n      </mat-radio-group>\n    </mat-grid-tile>\n    <mat-grid-tile *ngFor=\"let icon of icons\">\n      <mat-radio-group [ngModel] name=\"icon\">\n        <mat-radio-button [ngModel] value=\"devicon-{{ icon.name }}-{{ getIconVersion(icon) }}\">\n          <i mat-list-icon class=\"devicon-{{ icon.name }}-{{ getIconVersion(icon) }}\"></i>\n        </mat-radio-button>\n      </mat-radio-group>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n\n</form>\n\n\n<!-- <md-grid-list cols=\"3\" rowHeight=\"3:2\">\n    <md-grid-tile>\n      <md-radio-group [ngModel] name=\"icon\">\n        <md-radio-button value='none'>\n          <i md-list-icon class=\"material-icons\">help</i>\n          <small>Sin ícono</small>\n        </md-radio-button>\n      </md-radio-group>\n    </md-grid-tile>\n\n    <md-grid-tile *ngFor=\"let icon of icons\">\n      <md-radio-group [ngModel] name=\"icon\">\n        <md-radio-button value=\"devicon-{{ icon.name }}-{{ getIconVersion(icon) }}\">\n          <i md-list-icon class=\"devicon-{{ icon.name }}-{{ getIconVersion(icon) }}\"></i>\n        </md-radio-button>\n      </md-radio-group>\n    </md-grid-tile>\n  </md-grid-list> -->\n"

/***/ }),

/***/ "../../../../../src/app/question/question-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_model__ = __webpack_require__("../../../../../src/app/question/question.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons__ = __webpack_require__("../../../../../src/app/question/icons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_service__ = __webpack_require__("../../../../../src/app/question/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionFormComponent = (function () {
    function QuestionFormComponent(questionService, router, authService) {
        this.questionService = questionService;
        this.router = router;
        this.authService = authService;
        this.icons = __WEBPACK_IMPORTED_MODULE_3__icons__["a" /* default */];
    }
    QuestionFormComponent.prototype.ngOnInit = function () {
        if (!this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/signin');
        }
    };
    QuestionFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var q = new __WEBPACK_IMPORTED_MODULE_2__question_model__["a" /* Question */](form.value.title, form.value.description, new Date(), form.value.icon);
        // console.log(q);
        this.questionService.addQuestion(q)
            .subscribe(function (_a) {
            var _id = _a._id;
            return _this.router.navigate(['/questions/', _id]);
        }, this.authService.handleError);
        form.resetForm();
    };
    QuestionFormComponent.prototype.getIconVersion = function (icon) {
        var version;
        if (icon.versions.font.includes('plain-wordmark')) {
            version = 'plain-wordmark';
        }
        else {
            version = icon.versions.font[0];
        }
        return version;
    };
    QuestionFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-form',
            template: __webpack_require__("../../../../../src/app/question/question-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question-form.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_4__question_service__["a" /* QuestionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */]])
    ], QuestionFormComponent);
    return QuestionFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  font-size: 48px;\n}\n\n.material-icons {\n  width: 48px !important;\n  height: 48px !important;\n  padding: 0 !important;\n  font-size: 48px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"!loading\">\n  <mat-list>\n    <mat-list-item *ngFor=\"let question of questions\" [routerLink]=\"['/questions', question._id]\">\n      <i *ngIf=\"question.icon === 'none'\" mat-list-icon class=\"material-icons\">help</i>\n      <i *ngIf=\"question.icon !== 'none'\" mat-list-icon class=\"{{ question.icon }}\"></i>\n      <h4 mat-line>{{ question.title }}</h4>\n      <p mat-line>\n        <small>{{ question.answers.length }} respuestas {{ question.createdAt | amLocale: 'es' | amTimeAgo }}</small>\n      </p>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionListComponent = (function () {
    function QuestionListComponent(questionService) {
        this.questionService = questionService;
        this.sort = '-createdAt';
        this.loading = true;
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService
            .getQuestions(this.sort)
            .then(function (response) {
            _this.questions = response;
            _this.loading = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionListComponent.prototype, "sort", void 0);
    QuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__("../../../../../src/app/question/question-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question-list.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/question-screen.component.html":
/***/ (function(module, exports) {

module.exports = "    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Más recientes\">\n        <div class=\"demo-tab-content\">\n          <app-question-list sort='-createdAt'></app-question-list>\n        </div>\n      </mat-tab>\n\n      <mat-tab label=\"Trending\">\n          <div class=\"demo-tab-content\">\n              <app-question-list sort='-answers'></app-question-list>\n          </div>\n        </mat-tab>\n    </mat-tab-group>\n\n<button [routerLink]=\"['/questions/new']\" mat-fab color=\"accent\" class=\"add-question\"><i class=\"material-icons agregar\">add</i></button>\n"

/***/ }),

/***/ "../../../../../src/app/question/question-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuestionScreenComponent = (function () {
    function QuestionScreenComponent() {
    }
    QuestionScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-screen',
            template: __webpack_require__("../../../../../src/app/question/question-screen.component.html"),
            styles: ["\n    .add-question {\n      position: fixed !important;\n      bottom: 30px;\n      right: 30px;\n      font-size: 24px;\n    }\n\n    .agregar {\n      font-size: 30px !important;\n    }\n  "]
        })
    ], QuestionScreenComponent);
    return QuestionScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/question.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(title, description, createdAt, icon, answers) {
        this._id = '1';
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;
        this.answers = answers;
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/question/question.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUESTION_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_detail_component__ = __webpack_require__("../../../../../src/app/question/question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_form_component__ = __webpack_require__("../../../../../src/app/question/question-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_screen_component__ = __webpack_require__("../../../../../src/app/question/question-screen.component.ts");



var QUESTION_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__question_screen_component__["a" /* QuestionScreenComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_1__question_form_component__["a" /* QuestionFormComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__question_detail_component__["a" /* QuestionDetailComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/question/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url_join__ = __webpack_require__("../../../../url-join/lib/url-join.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url_join___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_url_join__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.questionsUrl = __WEBPACK_IMPORTED_MODULE_3_url_join___default()(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl, 'questions');
        // this.questionsUrl = `${environment.apiUrl}/questions`;
    }
    QuestionService.prototype.getQuestions = function (sort) {
        if (sort === void 0) { sort = '-createdAt'; }
        return this.http.get(this.questionsUrl + "?sort=" + sort)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.getQuestion = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_url_join___default()(this.questionsUrl, id);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.addQuestion = function (question) {
        var body = JSON.stringify(question);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var url = this.questionsUrl + this.getToken();
        return this.http.post(url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    QuestionService.prototype.addAnswer = function (answer) {
        var a = {
            description: answer.description,
            question: {
                _id: answer.question._id
            }
        };
        var body = JSON.stringify(a);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var url = __WEBPACK_IMPORTED_MODULE_3_url_join___default()(this.questionsUrl, answer.question._id, 'answers') + this.getToken();
        return this.http.post(url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    QuestionService.prototype.handleError = function (error) {
        var errMsg = error.message ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log("Error: " + errMsg);
    };
    QuestionService.prototype.getToken = function () {
        var token = localStorage.getItem('token') || 'no token';
        return "?token=" + token;
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://question.usbix.com.mx/api'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map