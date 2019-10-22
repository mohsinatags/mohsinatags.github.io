webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        //end-point url 
        this.base_url = 'https://pcwest.remotepc.com/v1/mohsin/my_machine';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'responseType': 'json'
            })
        };
    } //instantiate our http class
    //method to get all the files as you can see it return an observable
    getFiles(path = '', search_string = '', search_sub_folder) {
        if (path == 'root')
            path = '/';
        if (path.charAt(0) !== '/')
            path = '/' + path;
        if (search_string == '')
            //return this.http.get(`${this.base_url}/list`+path, this.httpOptions);
            return this.http.post(`${this.base_url}/list`, `{"path":"${path}"}`, this.httpOptions);
        else {
            return this.http.post(`${this.base_url}/search`, `{"path":"${path}","search_string":"${search_string}","search_sub_folder":"${search_sub_folder}"}`, this.httpOptions);
            //return this.http.get(`${this.base_url}/search/`,headersConfig );
        }
    }
    addFolder(path = '') {
        return this.http.post(`${this.base_url}/create_folder`, `{"path":"${path}"}`, this.httpOptions);
    }
    getProperties(path = '') {
        /*return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("Async Work Complete");
            this.results = this.http.post(`${this.base_url}/properties`, `{"path":"${path}"}`, this.httpOptions)
            console.log(this.results);
              resolve(this.results);
            
          }, 1000);
        });*/
        /* return new Promise((resolve, reject) => {
            this.http.post(`${this.base_url}/properties`, `{"path":"${path}"}`, this.httpOptions)
              .then(
                res => { // Success
                  console.log(res);
                this.results = res;
                resolve(this.results);
                },
                msg => { // Error
                reject(msg);
                }
              );
          });*/
        //}
        return this.http.post(`${this.base_url}/properties`, `{"path":"${path}"}`, this.httpOptions);
    }
    downloadFile(path = '') {
        return this.http.get(`${this.base_url}/download/` + path, { responseType: 'blob' });
    }
    downloadZip(path = '') {
        return this.http.get(`${this.base_url}/downlad_zip/` + path, { responseType: 'blob' });
    }
    moveFile(path = '', dest_path = '') {
        return this.http.post(`${this.base_url}/rename`, `{"path":"${path}","dest_path":"${dest_path}"}`, this.httpOptions);
    }
    deleteFile(path = '') {
        return this.http.get(`${this.base_url}/delete/` + path, this.httpOptions);
    }
};
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ApiService);



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 100px; height: 100%; box-sizing: border-box;\">\r\n  <mat-card style=\"height: 100%; box-sizing: border-box; padding:0\">\r\n    <file-explorer [fileElements]=\"fileElements | async\" [path]=\"currentPath\" [canNavigateUp]=\"canNavigateUp\" (folderAdded)=\"addFolder($event)\"\r\n      (elementRemoved)=\"removeElement($event)\" (navigatedDown)=\"navigateToFolder($event)\" (navigatedUp)=\"navigateUp()\" (elementRenamed)=\"renameElement($event)\"\r\n      (elementMoved)=\"moveElement($event)\">\r\n    </file-explorer>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.files = [];
        this.displayOrNot = true;
        this.currentDir = '/';
        this.canNavigateUp = false;
    }
    ngOnInit() {
        this.updateFileElementQuery();
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    addFolder(folder) {
        this.fileService.addFolder(this.currentDir, { isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
        setTimeout(() => {
            this.updateFileElementQuery();
        }, 3000);
    }
    downloadZip(element) {
        console.log('App -> Downloading Zip: ' + element.parent + '/' + element.name + ' isFolder:' + element.isFolder);
        if (element.isFolder) {
            this.fileService.downloadZip(this.currentDir, element.name);
        }
    }
    removeElement(element) {
        console.log('App -> deleting file: ' + element.name);
        //this.fileService.delete(element);
        setTimeout(() => {
            this.updateFileElementQuery();
        }, 2000);
    }
    navigateToFolder(element) {
        this.currentRoot = element;
        this.updateFileElementQuery();
        this.currentPath = this.pushToPath(this.currentPath, element.name);
        this.canNavigateUp = true;
    }
    navigateUp() {
        if (this.currentRoot && !this.currentDir.includes('/')) {
            this.currentRoot = null;
            this.canNavigateUp = false;
            this.currentDir = this.currentPath = this.popFromPath(this.currentPath);
            this.updateFileElementQuery();
        }
        else {
            if (this.currentRoot) {
                this.currentRoot = this.fileService.get(this.currentRoot.parent);
                this.currentDir = this.currentPath = this.popFromPath(this.currentPath);
            }
            else
                this.currentDir = this.currentPath = this.popFromPath(this.currentPath);
            if (this.currentDir.charAt(0) !== '/')
                this.currentDir = '/' + this.currentDir;
            this.updateFileElementQuery();
        }
        console.log('Current PPP:' + this.currentPath);
        //this.currentPath = this.popFromPath(this.currentPath);
        //this.currentDir = this.currentPath;
    }
    moveElement(event) {
        console.log('Current element:' + event.element.name);
        console.log('Moved-to element:' + event.moveTo.name);
        //this.fileService.update(event.element.id, { parent: event.moveTo.id });
        setTimeout(() => {
            this.updateFileElementQuery();
        }, 2000);
    }
    renameElement(element) {
        this.fileService.rename(this.currentDir, element.id, { name: element.name });
        setTimeout(() => {
            this.updateFileElementQuery();
        }, 2000);
    }
    updateFileElementQuery(term = '') {
        if (this.currentRoot) {
            console.log('Current Root:' + this.currentRoot.name);
            if (this.currentDir == '/')
                this.currentDir = '/' + this.currentRoot.name;
            else if (!this.currentDir.includes('/' + this.currentRoot.name))
                this.currentDir = this.currentDir + '/' + this.currentRoot.name;
        }
        console.log('Current Path:' + this.currentPath);
        //let defaultPath = this.currentRoot ? this.currentRoot.name : 'root';
        //let defaultDir = this.currentRoot ? this.currentRoot.name : 'root';
        // if(this.currentPath) {
        //  if(this.currentPath!=='' && this.currentPath.includes('/'))
        //  this.currentDir = this.currentPath+defaultPath;
        //}
        // else {
        //this.currentDir = defaultPath;
        //}
        //if(this.currentDir.includes('/')) defaultPath = this.currentDir;
        // if(this.currentRoot==null && this.currentPath && this.currentPath.includes('/')){
        //  if(this.currentRoot) defaultPath = this.currentDir = this.currentRoot.parent;
        //  else  defaultPath = this.currentDir = this.currentPath;
        //}
        let defaultPath = '';
        //if(this.currentDir.includes('root')) 
        console.log('Current Dir:' + this.currentDir);
        this.fileElements = this.fileService.queryInFolder(this.currentDir, term);
    }
    pushToPath(path, folderName) {
        let p = path ? path : '';
        p += `${folderName}/`;
        return p;
    }
    popFromPath(path) {
        let p = path ? path : '';
        let split = p.split('/');
        split.splice(split.length - 2, 1);
        p = split.join('/');
        return p;
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_file_service__["a" /* FileService */]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__file_explorer_file_explorer_module__ = __webpack_require__("./src/app/file-explorer/file-explorer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["H" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8__file_explorer_file_explorer_module__["a" /* FileExplorerModule */], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.file-or-folder {\n  padding: 8px;\n  overflow: hidden;\n}\n\n.file-or-folder-icon {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n"

/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\n.search-bar * { color: black !important; }\n.search-bar input { border-bottom-color: black; }\n.md-errors-spacer { display:none; }\n\n</style>\n<mat-toolbar>\n  <mat-icon *ngIf=\"canNavigateUp\" class=\"pointer\" (click)=\"navigateUp()\">arrow_back</mat-icon>\n  <span style=\"margin-left: 8px\">{{path || 'File Manager App'}}</span>\n  <span class=\"spacer\"></span>\n  <div class=\"mat-toolbar-tools search-bar\">\n    <mat-checkbox (change)=\"includeSubfolders($event.checked)\">Include subfolders?</mat-checkbox>\n\n\n          <mat-icon>search</mat-icon>\n\n      <!-- Input Text -->\n      \n        <!-- <label for=\"search\">Search</label> -->\n        <mat-form-field>  <input id=\"search-input\" matInput  type=\"text\" name=\"search\" (keyup)=\"searchTerm($event.target.value)\"/></mat-form-field>\n      \n     \n    </div>\n  <mat-icon class=\"pointer\" (click)=\"openNewFolderDialog()\">create_new_folder</mat-icon>\n</mat-toolbar>\n<h3 mat-subheader>You have ({{fileElements.length}}) items in current directory.</h3>\n\n<div class=\"container\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n  <div class=\"content\" fxFlex fxLayout=\"row\">\n    <mat-grid-list cols=\"8\" rowHeight=\"100px\" fxFlex>\n      <mat-grid-tile *ngFor=\"let element of fileElements\" class=file-or-folder>\n        <span [matMenuTriggerFor]=\"rootMenu\" [matMenuTriggerData]=\"{element: element}\" #menuTrigger=\"matMenuTrigger\"></span>\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" (click)=\"navigate(element)\" (contextmenu)=\"openMenu($event, menuTrigger)\">\n          <mat-icon color=\"primary\" class=\"file-or-folder-icon pointer\" *ngIf=\"element.isFolder\">folder</mat-icon>\n          <img src=\"{{thumb_url}}{{path}}{{element.name}}\" style=\"height:45px;padding:5px 0\" *ngIf=\"element.isImage\"/>         \n          <mat-icon color=\"primary\" class=\"file-or-folder-icon pointer\" *ngIf=\"!element.isFolder && !element.isImage\">insert_drive_file</mat-icon>\n          <span>{{element.name}}</span>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</div>\n<mat-menu #rootMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template matMenuContent let-element=\"element\">\n      <button mat-menu-item (click)=\"downloadElement(element)\">\n          <mat-icon>cloud_download</mat-icon>\n          <span>Download File</span>\n        </button>\n        <button mat-menu-item (click)=\"downloadZip(element)\">\n          <mat-icon>cloud_download</mat-icon>\n          <span>Download Zip</span>\n        </button>\n    <button mat-menu-item [matMenuTriggerFor]=\"moveToMenu\" [matMenuTriggerData]=\"{self: element}\">\n      <mat-icon>open_with</mat-icon>\n      <span>Move To</span>\n    </button>\n    <button mat-menu-item (click)=\"openRenameDialog(element)\">\n      <mat-icon>edit</mat-icon>\n      <span>Rename</span>\n    </button>\n    <button mat-menu-item (click)=\"deleteElement(element)\">\n      <mat-icon>delete</mat-icon>\n      <span>Delete</span>\n    </button>\n    <button mat-menu-item (click)=\"openPropertiesDialog(element)\">\n      <mat-icon>details</mat-icon>\n      <span>Properties</span>\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #moveToMenu=\"matMenu\">\n  <ng-template matMenuContent let-self=\"self\">\n    <ng-container *ngFor=\"let element of fileElements\">\n      <button *ngIf=\"element.isFolder && element.id !== self.id\" mat-menu-item (click)=\"moveElement(self, element)\">{{element.name}}</button>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n\n"

/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExplorerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_newFolderDialog_newFolderDialog_component__ = __webpack_require__("./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_renameDialog_renameDialog_component__ = __webpack_require__("./src/app/file-explorer/modals/renameDialog/renameDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_propertiesDialog_propertiesDialog_component__ = __webpack_require__("./src/app/file-explorer/modals/propertiesDialog/propertiesDialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let FileExplorerComponent = class FileExplorerComponent {
    constructor(dialog, MatCheckboxModule, fileService) {
        this.dialog = dialog;
        this.MatCheckboxModule = MatCheckboxModule;
        this.fileService = fileService;
        this.thumb_url = 'https://pcwest.remotepc.com/v1/mohsin/my_machine/thumb/';
        this.searchSubfolders = false;
        this.folderAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.elementRemoved = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.elementDownloaded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.elementSearched = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.elementProperties = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.elementRenamed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.elementMoved = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.navigatedDown = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.navigatedUp = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    deleteElement(element) {
        console.log('File Explorer -> Deleting file: ' + element.name);
        this.fileService.delete(element);
        setTimeout(() => {
            this.elementRemoved.emit(element);
        }, 2000);
    }
    downloadElement(element) {
        console.log('File Explorer -> Downloading file: ' + element.parent + '/' + element.name + ' isFolder:' + element.isFolder);
        if (!element.isFolder) {
            this.fileService.download(element.name);
            this.elementDownloaded.emit(element);
        }
    }
    downloadZip(element) {
        console.log('File Explorer -> Downloading Zip: ' + element.name + ' isFolder:' + element.isFolder);
        if (element.isFolder) {
            let newpath = ((!this.path || this.path == '')) ? '/' : this.path;
            this.fileService.downloadZip(newpath, element.name);
            this.elementDownloaded.emit(element);
        }
    }
    includeSubfolders(includecheck) {
        this.searchSubfolders = includecheck;
        console.log('File Explorer -> Search includes subfolders?: ' + includecheck);
    }
    searchTerm(term = '') {
        console.log('File Explorer -> Searching file: ' + term);
        let newpath = ((!this.path || this.path == '')) ? '/' : this.path;
        this.fileService.queryInFolder(newpath, term, this.searchSubfolders);
        this.elementSearched.emit(term);
    }
    navigate(element) {
        if (element.isFolder) {
            this.navigatedDown.emit(element);
        }
    }
    navigateUp() {
        this.navigatedUp.emit();
    }
    moveElement(element, moveTo) {
        this.fileService.update(element.id, { parent: moveTo.id });
        setTimeout(() => {
            this.elementMoved.emit({ element: element, moveTo: moveTo });
        }, 2000);
    }
    openNewFolderDialog() {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__modals_newFolderDialog_newFolderDialog_component__["a" /* NewFolderDialogComponent */]);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.folderAdded.emit({ name: res });
            }
        });
    }
    openPropertiesDialog(element) {
        let newpath = ((!this.path || this.path == '')) ? '/' : this.path;
        //this.elementProperties.emit({ name: newpath });
        //console.log(this.fileService.getProperties(newpath, element));
        this.fileService.getProperties(newpath, element).then((properties) => {
            console.log(properties);
            let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_propertiesDialog_propertiesDialog_component__["a" /* PropertiesDialogComponent */], {
                width: '600px',
                data: {
                    properties
                }
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res) {
                    element.name = res;
                    //this.fileService.rename(element.id, { name: element.name });
                    //this.elementRenamed.emit(element);
                }
            });
        }, (err) => console.error(err));
        //console.log(this.properties);
    }
    openRenameDialog(element) {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals_renameDialog_renameDialog_component__["a" /* RenameDialogComponent */]);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                element.name = res;
                //this.fileService.rename(element.id, { name: element.name });
                this.elementRenamed.emit(element);
            }
        });
    }
    openMenu(event, viewChild) {
        event.preventDefault();
        viewChild.openMenu();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
    __metadata("design:type", Array)
], FileExplorerComponent.prototype, "fileElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "properties", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
    __metadata("design:type", String)
], FileExplorerComponent.prototype, "thumb_url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
    __metadata("design:type", String)
], FileExplorerComponent.prototype, "canNavigateUp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
    __metadata("design:type", String)
], FileExplorerComponent.prototype, "path", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
    __metadata("design:type", String)
], FileExplorerComponent.prototype, "search", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
    __metadata("design:type", Boolean)
], FileExplorerComponent.prototype, "searchSubfolders", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "folderAdded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "elementRemoved", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "elementDownloaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "elementSearched", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "elementProperties", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "elementRenamed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "elementMoved", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "navigatedDown", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], FileExplorerComponent.prototype, "navigatedUp", void 0);
FileExplorerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'file-explorer',
        template: __webpack_require__("./src/app/file-explorer/file-explorer.component.html"),
        styles: [__webpack_require__("./src/app/file-explorer/file-explorer.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_0__service_file_service__["a" /* FileService */]])
], FileExplorerComponent);



/***/ }),

/***/ "./src/app/file-explorer/file-explorer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExplorerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_newFolderDialog_newFolderDialog_component__ = __webpack_require__("./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_renameDialog_renameDialog_component__ = __webpack_require__("./src/app/file-explorer/modals/renameDialog/renameDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_propertiesDialog_propertiesDialog_component__ = __webpack_require__("./src/app/file-explorer/modals/propertiesDialog/propertiesDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__file_explorer_component__ = __webpack_require__("./src/app/file-explorer/file-explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm2015/checkbox.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let FileExplorerModule = class FileExplorerModule {
};
FileExplorerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_grid_list__["a" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_menu__["a" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__["a" /* MatCheckboxModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_15__file_explorer_component__["a" /* FileExplorerComponent */], __WEBPACK_IMPORTED_MODULE_10__modals_newFolderDialog_newFolderDialog_component__["a" /* NewFolderDialogComponent */], __WEBPACK_IMPORTED_MODULE_13__modals_renameDialog_renameDialog_component__["a" /* RenameDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__modals_propertiesDialog_propertiesDialog_component__["a" /* PropertiesDialogComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_15__file_explorer_component__["a" /* FileExplorerComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__modals_newFolderDialog_newFolderDialog_component__["a" /* NewFolderDialogComponent */], __WEBPACK_IMPORTED_MODULE_13__modals_renameDialog_renameDialog_component__["a" /* RenameDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__modals_propertiesDialog_propertiesDialog_component__["a" /* PropertiesDialogComponent */]]
    })
], FileExplorerModule);



/***/ }),

/***/ "./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create a new folder</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Folder Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFolderDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm2015/dialog.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NewFolderDialogComponent = class NewFolderDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
};
NewFolderDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-newFolderDialog',
        template: __webpack_require__("./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.html"),
        styles: [__webpack_require__("./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */]])
], NewFolderDialogComponent);



/***/ }),

/***/ "./src/app/file-explorer/modals/propertiesDialog/propertiesDialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-explorer/modals/propertiesDialog/propertiesDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Properties</h1>\n\n{{data.properties.created_date}}\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/file-explorer/modals/propertiesDialog/propertiesDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let PropertiesDialogComponent = class PropertiesDialogComponent {
    constructor(dialogRef, data, fileService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fileService = fileService;
    }
    ngOnInit() {
        console.log(this.data);
        //console.log(this.fileService.getProperties(this.data.newpath, this.data.element));
    }
};
PropertiesDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-propertiesDialog',
        template: __webpack_require__("./src/app/file-explorer/modals/propertiesDialog/propertiesDialog.component.html"),
        styles: [__webpack_require__("./src/app/file-explorer/modals/propertiesDialog/propertiesDialog.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__service_file_service__["a" /* FileService */]])
], PropertiesDialogComponent);



/***/ }),

/***/ "./src/app/file-explorer/modals/renameDialog/renameDialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-explorer/modals/renameDialog/renameDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Rename Element</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Folder Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/file-explorer/modals/renameDialog/renameDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenameDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm2015/dialog.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let RenameDialogComponent = class RenameDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
};
RenameDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-renameDialog',
        template: __webpack_require__("./src/app/file-explorer/modals/renameDialog/renameDialog.component.html"),
        styles: [__webpack_require__("./src/app/file-explorer/modals/renameDialog/renameDialog.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */]])
], RenameDialogComponent);



/***/ }),

/***/ "./src/app/service/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid__ = __webpack_require__("./node_modules/uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm2015/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Access-Control-Allow-Origin': '*'
    })
};
let FileService = class FileService {
    constructor(ApiService) {
        this.ApiService = ApiService;
        this.map = new Map();
        this.base_url = 'https://pcwest.remotepc.com/v1/mohsin/my_machine';
    }
    getProperties(path, fileElement) {
        let newpath;
        let response;
        if (path == '' || path == '/')
            newpath = '/' + fileElement.name;
        else
            newpath = path + '/' + fileElement.name;
        return new Promise((resolve, reject) => {
            console.log("Async Work Complete");
            this.ApiService.getProperties(newpath).subscribe(response => {
                console.log(response);
                this.properties = JSON.parse(JSON.stringify(response));
                if (this.properties) {
                    resolve(this.properties);
                }
            }, //end of (1)
            (error) => console.log(error), //(2) second argument
            () => {
                //this.add(fileElement);
            } //(3) second argument
            );
            // }
        });
        /* this.ApiService.getProperties(newpath).then(
           (val) => console.log(val),
           (err) => console.error(err)
         );
          /*this.ApiService.getProperties(newpath).subscribe(
           response =>  { //start of (1)
             console.log(typeof(response));
             console.log(JSON.parse(JSON.stringify(response)));
             this.properties = response;
             //return this.properties;
         }, //end of (1)
         (error: any)   => console.log(error), //(2) second argument
         ()             => {
           //this.add(fileElement);
         } //(3) second argument
         );
          //return this.properties;
          setTimeout(() =>
          {
           console.log(this.properties);
           return this.properties;
       },
       3000);
       */
    }
    addFolder(path, fileElement) {
        console.log('FileService -> New folder adding.');
        let newpath;
        if (path == '' || path == '/')
            newpath = '/' + fileElement.name;
        else
            newpath = path + '/' + fileElement.name;
        this.ApiService.addFolder(newpath)
            .subscribe(response => {
            console.log(response);
        }, //end of (1)
        (error) => console.log(error), //(2) second argument
        () => {
            //this.add(fileElement);
        } //(3) second argument
        );
        this.add(fileElement);
    }
    add(fileElement) {
        fileElement.id = Object(__WEBPACK_IMPORTED_MODULE_2_uuid__["v4"])();
        this.map.set(fileElement.id, this.clone(fileElement));
        return fileElement;
    }
    delete(element) {
        console.log('FileService -> Deleting file ' + element.name);
        if (element.parent == 'root')
            this.dpath = element.name;
        else
            this.dpath = element.parent + '/' + element.name;
        this.ApiService.deleteFile(this.dpath)
            .subscribe(response => {
            console.log(response);
            this.map.delete(element.id);
        }, //end of (1)
        (error) => console.log(error), //(2) second argument
        () => console.log('all data gets') //(3) second argument
        );
    }
    download(name) {
        this.ApiService.downloadFile(name)
            .subscribe(response => {
            console.log(response);
            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            if (name)
                downloadLink.setAttribute('download', name);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }, //end of (1)
        (error) => console.log(error), //(2) second argument
        () => console.log('Download complete') //(3) second argument
        );
    }
    downloadZip(path, name) {
        let newpath;
        console.log(path);
        if (path == '' || path == '/')
            newpath = '/' + name;
        else
            newpath = path + '/' + name;
        this.ApiService.downloadZip(newpath)
            .subscribe(response => {
            console.log(response);
            let dataType = 'application/zip';
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            if (name)
                downloadLink.setAttribute('download', name);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }, //end of (1)
        (error) => console.log(error), //(2) second argument
        () => console.log('Download complete') //(3) second argument
        );
    }
    update(id, update) {
        let element = this.map.get(id);
        let targetElement = this.map.get(update.parent);
        console.log('Current element:' + element.name);
        console.log('Move-to element:' + targetElement.name);
        element = Object.assign(element, update);
        this.map.set(element.id, element);
        this.ApiService.moveFile(element.name, targetElement.name)
            .subscribe(response => {
            console.log(response);
        }, //end of (1)
        (error) => console.log(error), //(2) second argument
        () => console.log('Update complete') //(3) second argument
        );
    }
    rename(path, id, update) {
        let element = this.map.get(id);
        let currentPath;
        let newPath;
        if (path == '' || path == '/') {
            newPath = '/' + update.name;
            currentPath = '/' + element.name;
        }
        else {
            newPath = path + '/' + update.name;
            currentPath = path + '/' + element.name;
        }
        console.log('Current update:' + element.name);
        console.log('Rename:' + element.name);
        this.map.set(element.id, element);
        this.ApiService.moveFile(currentPath, newPath)
            .subscribe(response => {
            console.log(response);
        }, //end of (1)
        (error) => console.log(error), //(2) second argument
        () => console.log('Rename complete') //(3) second argument
        );
    }
    queryInFolder(folderId = 'root', term = '', search_sub_folder = false) {
        console.log('Current Folder:' + folderId);
        console.log('Search Term:' + term);
        const result = [];
        let count = 0;
        let ext = '';
        let file_attributes = [];
        this.ApiService.getFiles(folderId, term, search_sub_folder)
            .subscribe(data => {
            console.log(typeof (data));
            this.files = data;
            //console.log(this.files.contents);
            if (this.files.totalRecords)
                count = this.files.totalRecords;
            console.log('Total ' + count + ' items in ' + folderId + '. Search term: ' + term);
            if (this.files.contents instanceof Array) {
                this.files.contents.forEach((element) => {
                    if (!element.attributes || element.attributes == '')
                        return;
                    file_attributes = element.attributes.split(", ");
                    if (!file_attributes.includes('System') && !file_attributes.includes('Hidden')) {
                        if (file_attributes.includes('Archive')) {
                            ext = element.name.substr(element.name.lastIndexOf('.') + 1);
                            if (!element.type || element.type == '')
                                element.type = ext;
                            else
                                element.type = element.type;
                            if (element.type == 'png' || element.type == 'jpg' || element.type == 'jpeg' || element.type == 'gif')
                                element.isImage = true;
                            else
                                element.isImage = false;
                        }
                        if (folderId == 'root') {
                            if (!element.parent || element.parent == '')
                                element.parent = 'root';
                        }
                        else {
                            if (!element.parent || element.parent == '')
                                element.parent = folderId;
                        }
                        if (!search_sub_folder)
                            element.name = element.name.split('/').pop();
                        //if(!element.id || element.id=='') element.id=v4();
                        this.add(element);
                        // var newStr = element.name.replace(element.parent, 'Hy');
                        if (element.parent === folderId) {
                            result.push(element);
                        }
                    }
                });
            }
        }, //end of (1)
        (error) => console.log(error), //(2) second argument
        () => console.log('all data gets') //(3) second argument
        );
        if (!this.querySubject) {
            this.querySubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](result);
        }
        else {
            this.querySubject.next(result);
        }
        return this.querySubject.asObservable();
    }
    get(id) {
        return this.map.get(id);
    }
    clone(element) {
        return JSON.parse(JSON.stringify(element));
    }
};
FileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
], FileService);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBJ5Ppe6ItEUS4ogiteg_eDErWUmrPdvPI',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: 'file-explorer-a303e',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map