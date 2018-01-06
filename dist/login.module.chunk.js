webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 login-container\">\n    <div class=\"col-xl-4 col-md-6 col-10\">\n        <div class=\"card border-0 box-shadow rounded-0\">\n            <div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"card-body text-center pb-1\">\n                <h2>Member login</h2>\n                <a routerLink=\"/register\" class=\"transition\">Don't have an account? Sign up now!</a>\n\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\n                    <div class=\"form-group\">\n                        <input [formControl]=\"email\" class=\"form-control validation-field\" placeholder=\"Email\" type=\"text\">                      \n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('required')\">Email is required</small>                              \n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('email')\">Invalid email address</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <input [formControl]=\"password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('required')\">Password is required</small>                              \n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input checkbox-main\" type=\"checkbox\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description align-middle\">Keep me signed in.</span>\n                        </label>\n                        <a class=\"transition pull-right\" href=\"javascript:void(0);\">Forgot password?</a>                     \n                    </div>\n                    <div class=\"form-group\">\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block\" type=\"submit\">Sign in</button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer text-center bg-transparent\">\n                <ul class=\"list-inline mb-0\">\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-facebook fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-twitter fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-google fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n       "

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  position: absolute; }\n  .login-container .card .card-header {\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n    margin-top: -40px;\n    border-radius: 50%;\n    font-size: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, fb) {
        this.router = router;
        this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    LoginComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['pages/dashboard']);
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */], pathMatch: 'full' }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map