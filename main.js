(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/ng2-twitter/node_modules/@angular/core/src/linker lazy recursive":
/*!**********************************************************************************************!*\
  !*** ./node_modules/ng2-twitter/node_modules/@angular/core/src/linker lazy namespace object ***!
  \**********************************************************************************************/
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
webpackEmptyAsyncContext.id = "./node_modules/ng2-twitter/node_modules/@angular/core/src/linker lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twitter-timeline/twitter-timeline.component */ "./src/app/twitter-timeline/twitter-timeline.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");





var routes = [
    {
        path: 'twitter_timeline/:name',
        component: _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TwitterTimelineComponent"]
    },
    {
        path: 'twitter_timeline',
        component: _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TwitterTimelineComponent"]
    },
    {
        path: 'stats',
        component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"]
    },
    {
        path: '',
        redirectTo: 'TwitterTimelineComponent',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n    <mat-nav-list>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Duders Twitters\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <a mat-list-item routerLink=\"/twitter_timeline/jeff\">Jeff</a>\n        <a mat-list-item routerLink='/twitter_timeline/alex'>Alex</a>\n        <a mat-list-item routerLink='/twitter_timeline/brad'>Brad</a>\n        <a mat-list-item routerLink='/twitter_timeline/ben'>Ben</a>\n        <a mat-list-item routerLink='/twitter_timeline/abby'>Abby</a>\n        <a mat-list-item routerLink='/twitter_timeline/jason'>Jason</a>\n        <a mat-list-item routerLink='/twitter_timeline/jan'>Jan</a>\n      </mat-expansion-panel>\n      <a mat-list-item routerLink=\"/stats\">Stats</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'giant-bomb-angular-fresh';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-twitter */ "./node_modules/ng2-twitter/dist/index.js");
/* harmony import */ var _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./twitter-timeline/twitter-timeline.component */ "./src/app/twitter-timeline/twitter-timeline.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-twitter-timeline */ "./node_modules/ngx-twitter-timeline/fesm5/ngx-twitter-timeline.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TwitterTimelineComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_17__["StatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_11__["NgxTwitterTimelineModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_18__["NgxChartsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"]
            ],
            providers: [ng2_twitter__WEBPACK_IMPORTED_MODULE_7__["TwitterService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\n    <mat-toolbar-row>\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"primary\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n      <mat-nav-list>\n        <a mat-list-item routerLink='/twitter_timeline'>First Component</a>\n        <a mat-list-item routerLink='/instagram_timeline'>Second Component</a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"undefined === myTimeline\">Loading...</div>\n<div *ngIf=\"undefined !== myTimeline\">\n  <mat-card>\n    <h1>Username: </h1>{{myTimeline.data[0].user.name}}\n    <h1>Location: </h1>{{myTimeline.data[0].user.location}}\n    <h1>Description: </h1>{{myTimeline.data[0].user.description}}\n    <h1>Follower Count: </h1>{{myTimeline.data[0].user.followers_count}}\n    <h1>Account Creation Date: </h1>{{myTimeline.data[0].user.created_at}}\n    <h1>Favourites Count: </h1>{{myTimeline.data[0].user.favourites_count}}\n    <h1>Tweet count: </h1>{{myTimeline.data[0].user.statuses_count}}\n\n  </mat-card>\n</div>\n<div *ngIf=\"undefined !== totalTweets\">\n  <h1>Jeff's total tweets</h1> {{totalTweets[0].value}}\n  <h1>Alex's total tweets</h1> {{totalTweets[1].value}}\n  <h1>Brad's total tweets</h1> {{totalTweets[2].value}}\n\n</div> -->\n<div *ngIf=\"undefined !== totalTweets\" class=\"myClass\">\n  <mat-tab-group>\n    <mat-tab label=\"Tweets\">\n      <div *ngIf=\"undefined !== totalTweets\">\n        <ngx-charts-bar-vertical *ngIf=\"selected === 'bar-vertical'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalTweets\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\n          [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n          [yAxisLabel]=\"yAxisLabel\" (select)=\"onSelect($event)\">\n        </ngx-charts-bar-vertical>\n        <ngx-charts-pie-chart *ngIf=\"selected === 'pie'\" [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"totalTweets\"\n          [gradient]=\"gradient\" [legend]=\"showLegend\" (select)=\"onSelect($event)\">\n        </ngx-charts-pie-chart>\n        <ngx-charts-advanced-pie-chart *ngIf=\"selected === 'pie-advanced'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalTweets\" [gradient]=\"gradient\" (select)=\"onSelect($event)\">\n        </ngx-charts-advanced-pie-chart>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Favourites\">\n      <div *ngIf=\"undefined !== totalFavourites\">\n        <ngx-charts-bar-vertical *ngIf=\"selected === 'bar-vertical'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalFavourites\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n          [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n          [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"'Favourites'\" (select)=\"onSelect($event)\">\n        </ngx-charts-bar-vertical>\n        <ngx-charts-pie-chart *ngIf=\"selected === 'pie'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalFavourites\" [gradient]=\"gradient\" [legend]=\"showLegend\" (select)=\"onSelect($event)\">\n        </ngx-charts-pie-chart>\n        <ngx-charts-advanced-pie-chart *ngIf=\"selected === 'pie-advanced'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalFavourites\" [gradient]=\"gradient\" (select)=\"onSelect($event)\">\n        </ngx-charts-advanced-pie-chart>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Followers\">\n      <div *ngIf=\"undefined !== totalFollowers\">\n        <ngx-charts-bar-vertical *ngIf=\"selected === 'bar-vertical'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalFollowers\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\n          [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n          [yAxisLabel]=\"'Followers'\" (select)=\"onSelect($event)\">\n        </ngx-charts-bar-vertical>\n        <ngx-charts-pie-chart *ngIf=\"selected === 'pie'\" [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"totalFollowers\"\n          [gradient]=\"gradient\" [legend]=\"showLegend\" (select)=\"onSelect($event)\">\n        </ngx-charts-pie-chart>\n        <ngx-charts-advanced-pie-chart *ngIf=\"selected === 'pie-advanced'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalFollowers\" [gradient]=\"gradient\" (select)=\"onSelect($event)\">\n        </ngx-charts-advanced-pie-chart>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Friends\">\n      <div *ngIf=\"undefined !== totalFriends\">\n        <ngx-charts-bar-vertical *ngIf=\"selected === 'bar-vertical'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalFriends\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\n          [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n          [yAxisLabel]=\"'Friends'\" (select)=\"onSelect($event)\">\n        </ngx-charts-bar-vertical>\n        <ngx-charts-pie-chart *ngIf=\"selected === 'pie'\" [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"totalFriends\"\n          [gradient]=\"gradient\" [legend]=\"showLegend\" (select)=\"onSelect($event)\">\n        </ngx-charts-pie-chart>\n        <ngx-charts-advanced-pie-chart *ngIf=\"selected === 'pie-advanced'\" [view]=\"view\" [scheme]=\"colorScheme\"\n          [results]=\"totalFriends\" [gradient]=\"gradient\" (select)=\"onSelect($event)\">\n        </ngx-charts-advanced-pie-chart>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n  <mat-form-field>\n    <mat-select placeholder=\"Chart Type\" [(value)]=\"selected\">\n      <mat-option *ngFor=\"let chart of charts\" [value]=\"chart.value\">\n        {{chart.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>"

/***/ }),

/***/ "./src/app/stats/stats.component.scss":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-size: cover; }\n\n.myClass {\n  padding: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvZjpcXERldlxcR2l0XFxnaWFudC1ib21iLWFuZ3VsYXItZnJlc2gvc3JjXFxhcHBcXHN0YXRzXFxzdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5teUNsYXNzIHtcclxuICAgIHBhZGRpbmc6MjAwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");



var StatsComponent = /** @class */ (function () {
    function StatsComponent(api) {
        this.api = api;
        this.view = [700, 400];
        this.selected = 'bar-vertical';
        this.charts = [
            { value: 'bar-vertical', viewValue: 'Bar Chart' },
            { value: 'pie', viewValue: 'Pie Chart' },
            { value: 'pie-advanced', viewValue: 'Advanced Pie Chart' }
        ];
        this.name = 'jeff';
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Duders';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Tweets';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#0080ff', '#8000ff', '#ff80ff']
        };
    }
    StatsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    StatsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    StatsComponent.prototype.getAll = function () {
        var _this = this;
        Promise.all([
            this.api.getUserTimeline('jeff'),
            this.api.getUserTimeline('alex'),
            this.api.getUserTimeline('brad'),
            this.api.getUserTimeline('ben'),
            this.api.getUserTimeline('abby'),
            this.api.getUserTimeline('jason'),
            this.api.getUserTimeline('jan'),
        ]).then(function (values) {
            _this.createData(values);
        });
    };
    StatsComponent.prototype.getTwitterUserTimeline = function (name) {
        var _this = this;
        this.api.getUserTimeline(name).then(function (res) {
            console.log(res);
            _this.myTimeline = res;
        });
    };
    StatsComponent.prototype.createData = function (timelines) {
        this.totalTweets = [
            {
                "name": "jeff",
                "value": timelines[0].data[0].user.statuses_count
            },
            {
                "name": "alex",
                "value": timelines[1].data[0].user.statuses_count
            },
            {
                "name": "brad",
                "value": timelines[2].data[0].user.statuses_count
            },
            {
                "name": "ben",
                "value": timelines[3].data[0].user.statuses_count
            },
            {
                "name": "abby",
                "value": timelines[4].data[0].user.statuses_count
            },
            {
                "name": "jason",
                "value": timelines[5].data[0].user.statuses_count
            },
            {
                "name": "Jan",
                "value": timelines[6].data[0].user.statuses_count
            }
        ];
        this.totalFollowers = [
            {
                "name": "jeff",
                "value": timelines[0].data[0].user.followers_count
            },
            {
                "name": "alex",
                "value": timelines[1].data[0].user.followers_count
            },
            {
                "name": "brad",
                "value": timelines[2].data[0].user.followers_count
            },
            {
                "name": "ben",
                "value": timelines[3].data[0].user.followers_count
            },
            {
                "name": "abby",
                "value": timelines[4].data[0].user.followers_count
            },
            {
                "name": "jason",
                "value": timelines[5].data[0].user.followers_count
            },
            {
                "name": "Jan",
                "value": timelines[6].data[0].user.followers_count
            }
        ];
        this.totalFavourites = [
            {
                "name": "jeff",
                "value": timelines[0].data[0].user.favourites_count
            },
            {
                "name": "alex",
                "value": timelines[1].data[0].user.favourites_count
            },
            {
                "name": "brad",
                "value": timelines[2].data[0].user.favourites_count
            },
            {
                "name": "ben",
                "value": timelines[3].data[0].user.favourites_count
            },
            {
                "name": "abby",
                "value": timelines[4].data[0].user.favourites_count
            },
            {
                "name": "jason",
                "value": timelines[5].data[0].user.favourites_count
            },
            {
                "name": "Jan",
                "value": timelines[6].data[0].user.favourites_count
            }
        ];
        this.totalFriends = [
            {
                "name": "jeff",
                "value": timelines[0].data[0].user.friends_count
            },
            {
                "name": "alex",
                "value": timelines[1].data[0].user.friends_count
            },
            {
                "name": "brad",
                "value": timelines[2].data[0].user.friends_count
            },
            {
                "name": "ben",
                "value": timelines[3].data[0].user.friends_count
            },
            {
                "name": "abby",
                "value": timelines[4].data[0].user.friends_count
            },
            {
                "name": "jason",
                "value": timelines[5].data[0].user.friends_count
            },
            {
                "name": "Jan",
                "value": timelines[6].data[0].user.friends_count
            }
        ];
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.scss */ "./src/app/stats/stats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_2__["TwitterService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/twitter-timeline/twitter-timeline.component.html":
/*!******************************************************************!*\
  !*** ./src/app/twitter-timeline/twitter-timeline.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"undefined === myTimeline\">Loading...</div>\n<div *ngIf=\"undefined !== myTimeline\">\n  <mat-card>\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{myTimeline.data[0].user.name}}</mat-card-title>\n      <mat-card-subtitle>\n        <h1>{{myTimeline.data[0].user.location}}</h1>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <img [src]=\"url\" alt=\"Place image title\">\n    <mat-card-content>{{myTimeline.data[0].user.description}}\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<div *ngIf=\"undefined === name\">Loading...</div>\n<div *ngIf=\"'jeff' === name\">\n  <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/jeffgerstmann'}\" [opts]=\"{tweetLimit: 5}\">\n  </ngx-twitter-timeline>\n</div>\n<div *ngIf=\"'alex' === name\">\n  <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/alex_navarro'}\" [opts]=\"{tweetLimit: 5}\">\n  </ngx-twitter-timeline>\n</div>\n<div *ngIf=\"'brad' === name\">\n    <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/bradshoemaker'}\" [opts]=\"{tweetLimit: 5}\">\n    </ngx-twitter-timeline>\n  </div>\n<div *ngIf=\"'ben' === name\">\n  <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/PackBenPack'}\" [opts]=\"{tweetLimit: 5}\">\n  </ngx-twitter-timeline>\n</div>\n<div *ngIf=\"'abby' === name\">\n  <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/ybbaaabby'}\" [opts]=\"{tweetLimit: 5}\">\n  </ngx-twitter-timeline>\n</div>\n<div *ngIf=\"'jason' === name\">\n  <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/unastrike'}\" [opts]=\"{tweetLimit: 5}\">\n  </ngx-twitter-timeline>\n</div>\n<div *ngIf=\"'jan' === name\">\n  <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/_janjerome'}\" [opts]=\"{tweetLimit: 5}\">\n  </ngx-twitter-timeline>\n</div>"

/***/ }),

/***/ "./src/app/twitter-timeline/twitter-timeline.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/twitter-timeline/twitter-timeline.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngx-twitter-timeline {\n  height: 100%; }\n\nimg {\n  padding-left: 55px;\n  padding-bottom: 10px; }\n\nmat-card-content {\n  padding-left: 55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdpdHRlci10aW1lbGluZS9mOlxcRGV2XFxHaXRcXGdpYW50LWJvbWItYW5ndWxhci1mcmVzaC9zcmNcXGFwcFxcdHdpdHRlci10aW1lbGluZVxcdHdpdHRlci10aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixvQkFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90d2l0dGVyLXRpbWVsaW5lL3R3aXR0ZXItdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ3gtdHdpdHRlci10aW1lbGluZSB7XHJcbiAgICBoZWlnaHQ6MTAwJVxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/twitter-timeline/twitter-timeline.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/twitter-timeline/twitter-timeline.component.ts ***!
  \****************************************************************/
/*! exports provided: TwitterTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTimelineComponent", function() { return TwitterTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TwitterTimelineComponent = /** @class */ (function () {
    function TwitterTimelineComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
    }
    TwitterTimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.name = _this.route.snapshot.paramMap.get('name');
            console.log(_this.name);
            _this.getTwitterUserTimeline(_this.name);
        });
    };
    TwitterTimelineComponent.prototype.getTwitterUserTimeline = function (name) {
        var _this = this;
        this.api.getUserTimeline(name).then(function (res) {
            console.log(res);
            _this.myTimeline = res;
            _this.url = _this.myTimeline.data[0].user.profile_image_url;
            _this.url = _this.url.substring(0, _this.url.length - 10);
            _this.url = _this.url + '400x400.jpg';
            console.log(_this.url);
        });
    };
    TwitterTimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-twitter-timeline',
            template: __webpack_require__(/*! ./twitter-timeline.component.html */ "./src/app/twitter-timeline/twitter-timeline.component.html"),
            styles: [__webpack_require__(/*! ./twitter-timeline.component.scss */ "./src/app/twitter-timeline/twitter-timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_2__["TwitterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TwitterTimelineComponent);
    return TwitterTimelineComponent;
}());



/***/ }),

/***/ "./src/app/twitter.service.ts":
/*!************************************!*\
  !*** ./src/app/twitter.service.ts ***!
  \************************************/
/*! exports provided: TwitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterService", function() { return TwitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TwitterService = /** @class */ (function () {
    function TwitterService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:3000';
    }
    TwitterService.prototype.getTimeline = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http
                .get(_this.API_URL + '/home_timeline')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; })).toPromise().then(function (res) {
                console.log(res);
                _this.results = res;
                resolve();
                return res;
            });
        });
    };
    TwitterService.prototype.getUserTimeline = function (name) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http
                .get(_this.API_URL + '/user_timeline/' + name)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; })).toPromise().then(function (res) {
                //  console.log(res);
                //  this.results = res;
                resolve(res);
            });
        });
        return promise;
    };
    TwitterService.prototype.getMentions = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http
                .get(_this.API_URL + '/mentions_timeline')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; })).toPromise().then(function (res) {
                console.log(res);
                resolve();
            });
        });
        return promise;
    };
    TwitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TwitterService);
    return TwitterService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! f:\Dev\Git\giant-bomb-angular-fresh\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map