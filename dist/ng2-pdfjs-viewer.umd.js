(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'),require('@angular/core'),require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng2-pdfjs-viewer'] = {}, global.core, global.common));
}(this, function (exports, core, common,ɵngcc0,ɵngcc1) { 
const _c0 = ["iframe"];
const _c1 = ["title", "ng2-pdfjs-viewer", "width", "100%", "height", "100%", 3, "hidden"];
const _c2 = ["iframe", ""];
'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: ng2-pdfjs-viewer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PdfJsViewerComponent = /** @class */ (function () {
        function PdfJsViewerComponent() {
            this.onBeforePrint = new core.EventEmitter();
            this.onAfterPrint = new core.EventEmitter();
            this.onDocumentLoad = new core.EventEmitter();
            this.onPageChange = new core.EventEmitter();
            this.externalWindow = false;
            this.showSpinner = true;
            this.openFile = true;
            this.download = true;
            this.viewBookmark = true;
            this.print = true;
            this.fullScreen = true;
            //@Input() public showFullScreen: boolean;
            this.find = true;
            this.useOnlyCssZoom = false;
            this.errorOverride = false;
            this.errorAppend = true;
            this.diagnosticLogs = true;
        }
        Object.defineProperty(PdfJsViewerComponent.prototype, "page", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.PDFViewerApplication) {
                    return this.PDFViewerApplication.page;
                }
                else {
                    if (this.diagnosticLogs)
                        console.warn("Document is not loaded yet!!!. Try to retrieve page# after full load.");
                }
            },
            set: /**
             * @param {?} _page
             * @return {?}
             */
            function (_page) {
                this._page = _page;
                if (this.PDFViewerApplication) {
                    this.PDFViewerApplication.page = this._page;
                }
                else {
                    if (this.diagnosticLogs)
                        console.warn("Document is not loaded yet!!!. Try to set page# after full load. Ignore this warning if you are not setting page# using '.' notation. (E.g. pdfViewer.page = 5;)");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfJsViewerComponent.prototype, "pdfSrc", {
            get: /**
             * @return {?}
             */
            function () {
                return this._src;
            },
            set: /**
             * @param {?} _src
             * @return {?}
             */
            function (_src) {
                this._src = _src;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfJsViewerComponent.prototype, "PDFViewerApplicationOptions", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var pdfViewerOptions = null;
                if (this.externalWindow) {
                    if (this.viewerTab) {
                        pdfViewerOptions = this.viewerTab.PDFViewerApplicationOptions;
                    }
                }
                else {
                    if (this.iframe.nativeElement.contentWindow) {
                        pdfViewerOptions = this.iframe.nativeElement.contentWindow.PDFViewerApplicationOptions;
                    }
                }
                return pdfViewerOptions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfJsViewerComponent.prototype, "PDFViewerApplication", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var pdfViewer = null;
                if (this.externalWindow) {
                    if (this.viewerTab) {
                        pdfViewer = this.viewerTab.PDFViewerApplication;
                    }
                }
                else {
                    if (this.iframe.nativeElement.contentWindow) {
                        pdfViewer = this.iframe.nativeElement.contentWindow.PDFViewerApplication;
                    }
                }
                return pdfViewer;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} viewerEvent
         * @return {?}
         */
        PdfJsViewerComponent.prototype.receiveMessage = /**
         * @param {?} viewerEvent
         * @return {?}
         */
        function (viewerEvent) {
            if (viewerEvent.data && viewerEvent.data.viewerId && viewerEvent.data.event) {
                /** @type {?} */
                var viewerId = viewerEvent.data.viewerId;
                /** @type {?} */
                var event_1 = viewerEvent.data.event;
                /** @type {?} */
                var param = viewerEvent.data.param;
                if (this.viewerId == viewerId) {
                    if (this.onBeforePrint && event_1 == "beforePrint") {
                        this.onBeforePrint.emit();
                    }
                    else if (this.onAfterPrint && event_1 == "afterPrint") {
                        this.onAfterPrint.emit();
                    }
                    else if (this.onDocumentLoad && event_1 == "pagesLoaded") {
                        this.onDocumentLoad.emit(param);
                    }
                    else if (this.onPageChange && event_1 == "pageChange") {
                        this.onPageChange.emit(param);
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        PdfJsViewerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            window.addEventListener("message", this.receiveMessage.bind(this), false);
            if (!this.externalWindow) { // Load pdf for embedded views
                this.loadPdf();
            }
        };
        /**
         * @return {?}
         */
        PdfJsViewerComponent.prototype.refresh = /**
         * @return {?}
         */
        function () {
            this.loadPdf();
        };
        /**
         * @private
         * @return {?}
         */
        PdfJsViewerComponent.prototype.loadPdf = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this._src) {
                return;
            }
            // console.log(`Tab is - ${this.viewerTab}`);
            // if (this.viewerTab) {
            //   console.log(`Status of window - ${this.viewerTab.closed}`);
            // }
            if (this.externalWindow && (typeof this.viewerTab === 'undefined' || this.viewerTab.closed)) {
                this.viewerTab = window.open('', '_blank', this.externalWindowOptions || '');
                if (this.viewerTab == null) {
                    if (this.diagnosticLogs)
                        console.error("ng2-pdfjs-viewer: For 'externalWindow = true'. i.e opening in new tab to work, pop-ups should be enabled.");
                    return;
                }
                if (this.showSpinner) {
                    this.viewerTab.document.write("\n          <style>\n          .loader {\n            position: fixed;\n            left: 40%;\n            top: 40%;\n            border: 16px solid #f3f3f3;\n            border-radius: 50%;\n            border-top: 16px solid #3498db;\n            width: 120px;\n            height: 120px;\n            animation: spin 2s linear infinite;\n          }\n          @keyframes spin {\n            0% {\n              transform: rotate(0deg);\n            }\n            100% {\n              transform: rotate(360deg);\n            }\n          }\n          </style>\n          <div class=\"loader\"></div>\n        ");
                }
            }
            /** @type {?} */
            var fileUrl;
            //if (typeof this.src === "string") {
            //  fileUrl = this.src;
            //}
            if (this._src instanceof Blob) {
                fileUrl = encodeURIComponent(URL.createObjectURL(this._src));
            }
            else if (this._src instanceof Uint8Array) {
                /** @type {?} */
                var blob = new Blob([this._src], { type: "application/pdf" });
                fileUrl = encodeURIComponent(URL.createObjectURL(blob));
            }
            else {
                fileUrl = this._src;
            }
            /** @type {?} */
            var viewerUrl;
            if (this.viewerFolder) {
                viewerUrl = this.viewerFolder + "/web/viewer.html";
            }
            else {
                viewerUrl = "assets/pdfjs/web/viewer.html";
            }
            viewerUrl += "?file=" + fileUrl;
            if (typeof this.viewerId !== 'undefined') {
                viewerUrl += "&viewerId=" + this.viewerId;
            }
            if (typeof this.onBeforePrint !== 'undefined') {
                viewerUrl += "&beforePrint=true";
            }
            if (typeof this.onAfterPrint !== 'undefined') {
                viewerUrl += "&afterPrint=true";
            }
            if (typeof this.onDocumentLoad !== 'undefined') {
                viewerUrl += "&pagesLoaded=true";
            }
            if (typeof this.onPageChange !== 'undefined') {
                viewerUrl += "&pageChange=true";
            }
            if (this.downloadFileName) {
                if (!this.downloadFileName.endsWith(".pdf")) {
                    this.downloadFileName += ".pdf";
                }
                viewerUrl += "&fileName=" + this.downloadFileName;
            }
            if (typeof this.openFile !== 'undefined') {
                viewerUrl += "&openFile=" + this.openFile;
            }
            if (typeof this.download !== 'undefined') {
                viewerUrl += "&download=" + this.download;
            }
            if (this.startDownload) {
                viewerUrl += "&startDownload=" + this.startDownload;
            }
            if (typeof this.viewBookmark !== 'undefined') {
                viewerUrl += "&viewBookmark=" + this.viewBookmark;
            }
            if (typeof this.print !== 'undefined') {
                viewerUrl += "&print=" + this.print;
            }
            if (this.startPrint) {
                viewerUrl += "&startPrint=" + this.startPrint;
            }
            if (typeof this.fullScreen !== 'undefined') {
                viewerUrl += "&fullScreen=" + this.fullScreen;
            }
            // if (this.showFullScreen) {
            //   viewerUrl += `&showFullScreen=${this.showFullScreen}`;
            // }
            if (typeof this.find !== 'undefined') {
                viewerUrl += "&find=" + this.find;
            }
            if (this.lastPage) {
                viewerUrl += "&lastpage=" + this.lastPage;
            }
            if (this.rotatecw) {
                viewerUrl += "&rotatecw=" + this.rotatecw;
            }
            if (this.rotateccw) {
                viewerUrl += "&rotateccw=" + this.rotateccw;
            }
            if (this.cursor) {
                viewerUrl += "&cursor=" + this.cursor;
            }
            if (this.scroll) {
                viewerUrl += "&scroll=" + this.scroll;
            }
            if (this.spread) {
                viewerUrl += "&spread=" + this.spread;
            }
            if (this.locale) {
                viewerUrl += "&locale=" + this.locale;
            }
            if (this.useOnlyCssZoom) {
                viewerUrl += "&useOnlyCssZoom=" + this.useOnlyCssZoom;
            }
            if (this._page || this.zoom || this.nameddest || this.pagemode)
                viewerUrl += "#";
            if (this._page) {
                viewerUrl += "&page=" + this._page;
            }
            if (this.zoom) {
                viewerUrl += "&zoom=" + this.zoom;
            }
            if (this.nameddest) {
                viewerUrl += "&nameddest=" + this.nameddest;
            }
            if (this.pagemode) {
                viewerUrl += "&pagemode=" + this.pagemode;
            }
            if (this.errorOverride || this.errorAppend) {
                viewerUrl += "&errorMessage=" + this.errorMessage;
                if (this.errorOverride) {
                    viewerUrl += "&errorOverride=" + this.errorOverride;
                }
                if (this.errorAppend) {
                    viewerUrl += "&errorAppend=" + this.errorAppend;
                }
            }
            if (this.externalWindow) {
                this.viewerTab.location.href = viewerUrl;
            }
            else {
                this.iframe.nativeElement.src = viewerUrl;
            }
            // console.log(`
            //   pdfSrc = ${this.pdfSrc}
            //   fileUrl = ${fileUrl}
            //   externalWindow = ${this.externalWindow}
            //   downloadFileName = ${this.downloadFileName}
            //   viewerFolder = ${this.viewerFolder}
            //   openFile = ${this.openFile}
            //   download = ${this.download}
            //   startDownload = ${this.startDownload}
            //   viewBookmark = ${this.viewBookmark}
            //   print = ${this.print}
            //   startPrint = ${this.startPrint}
            //   fullScreen = ${this.fullScreen}
            //   find = ${this.find}
            //   lastPage = ${this.lastPage}
            //   rotatecw = ${this.rotatecw}
            //   rotateccw = ${this.rotateccw}
            //   cursor = ${this.cursor}
            //   scrollMode = ${this.scroll}
            //   spread = ${this.spread}
            //   page = ${this.page}
            //   zoom = ${this.zoom}
            //   nameddest = ${this.nameddest}
            //   pagemode = ${this.pagemode}
            //   pagemode = ${this.errorOverride}
            //   pagemode = ${this.errorAppend}
            //   pagemode = ${this.errorMessage}
            // `);
        };
        PdfJsViewerComponent.propDecorators = {
            iframe: [{ type: core.ViewChild, args: ['iframe', { static: true },] }],
            viewerId: [{ type: core.Input }],
            onBeforePrint: [{ type: core.Output }],
            onAfterPrint: [{ type: core.Output }],
            onDocumentLoad: [{ type: core.Output }],
            onPageChange: [{ type: core.Output }],
            viewerFolder: [{ type: core.Input }],
            externalWindow: [{ type: core.Input }],
            showSpinner: [{ type: core.Input }],
            downloadFileName: [{ type: core.Input }],
            openFile: [{ type: core.Input }],
            download: [{ type: core.Input }],
            startDownload: [{ type: core.Input }],
            viewBookmark: [{ type: core.Input }],
            print: [{ type: core.Input }],
            startPrint: [{ type: core.Input }],
            fullScreen: [{ type: core.Input }],
            find: [{ type: core.Input }],
            zoom: [{ type: core.Input }],
            nameddest: [{ type: core.Input }],
            pagemode: [{ type: core.Input }],
            lastPage: [{ type: core.Input }],
            rotatecw: [{ type: core.Input }],
            rotateccw: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            scroll: [{ type: core.Input }],
            spread: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            useOnlyCssZoom: [{ type: core.Input }],
            errorOverride: [{ type: core.Input }],
            errorAppend: [{ type: core.Input }],
            errorMessage: [{ type: core.Input }],
            diagnosticLogs: [{ type: core.Input }],
            externalWindowOptions: [{ type: core.Input }],
            page: [{ type: core.Input }],
            pdfSrc: [{ type: core.Input }]
        };
PdfJsViewerComponent.ngComponentDef = ɵngcc0.ɵɵdefineComponent({ type: PdfJsViewerComponent, selectors: [["ng2-pdfjs-viewer"]], factory: function PdfJsViewerComponent_Factory(t) { return new (t || PdfJsViewerComponent)(); }, viewQuery: function PdfJsViewerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadViewQuery()) && (ctx.iframe = _t.first);
    } }, inputs: { externalWindow: "externalWindow", showSpinner: "showSpinner", openFile: "openFile", download: "download", viewBookmark: "viewBookmark", print: "print", fullScreen: "fullScreen", find: "find", useOnlyCssZoom: "useOnlyCssZoom", errorOverride: "errorOverride", errorAppend: "errorAppend", diagnosticLogs: "diagnosticLogs", page: "page", pdfSrc: "pdfSrc", viewerId: "viewerId", viewerFolder: "viewerFolder", downloadFileName: "downloadFileName", startDownload: "startDownload", startPrint: "startPrint", zoom: "zoom", nameddest: "nameddest", pagemode: "pagemode", lastPage: "lastPage", rotatecw: "rotatecw", rotateccw: "rotateccw", cursor: "cursor", scroll: "scroll", spread: "spread", locale: "locale", errorMessage: "errorMessage", externalWindowOptions: "externalWindowOptions" }, outputs: { onBeforePrint: "onBeforePrint", onAfterPrint: "onAfterPrint", onDocumentLoad: "onDocumentLoad", onPageChange: "onPageChange" }, consts: 2, vars: 1, template: function PdfJsViewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "iframe", _c1, _c2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("hidden", ctx.externalWindow || !ctx.externalWindow && !ctx.pdfSrc);
    } }, encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(PdfJsViewerComponent, [{
        type: core.Component,
        args: [{
                selector: 'ng2-pdfjs-viewer',
                template: "<iframe title=\"ng2-pdfjs-viewer\" [hidden]=\"externalWindow || (!externalWindow && !pdfSrc)\" #iframe width=\"100%\" height=\"100%\"></iframe>"
            }]
    }], function () { return []; }, { onBeforePrint: [{
            type: core.Output
        }], onAfterPrint: [{
            type: core.Output
        }], onDocumentLoad: [{
            type: core.Output
        }], onPageChange: [{
            type: core.Output
        }], externalWindow: [{
            type: core.Input
        }], showSpinner: [{
            type: core.Input
        }], openFile: [{
            type: core.Input
        }], download: [{
            type: core.Input
        }], viewBookmark: [{
            type: core.Input
        }], print: [{
            type: core.Input
        }], fullScreen: [{
            type: core.Input
        }], find: [{
            type: core.Input
        }], useOnlyCssZoom: [{
            type: core.Input
        }], errorOverride: [{
            type: core.Input
        }], errorAppend: [{
            type: core.Input
        }], diagnosticLogs: [{
            type: core.Input
        }], page: [{
            type: core.Input
        }], page: [], pdfSrc: [{
            type: core.Input
        }], pdfSrc: [], PDFViewerApplicationOptions: [], PDFViewerApplication: [], receiveMessage: [], ngOnInit: [], refresh: [], loadPdf: [], viewerTab: [], iframe: [{
            type: core.ViewChild,
            args: ['iframe', { static: true }]
        }], viewerId: [{
            type: core.Input
        }], viewerFolder: [{
            type: core.Input
        }], downloadFileName: [{
            type: core.Input
        }], startDownload: [{
            type: core.Input
        }], startPrint: [{
            type: core.Input
        }], zoom: [{
            type: core.Input
        }], nameddest: [{
            type: core.Input
        }], pagemode: [{
            type: core.Input
        }], lastPage: [{
            type: core.Input
        }], rotatecw: [{
            type: core.Input
        }], rotateccw: [{
            type: core.Input
        }], cursor: [{
            type: core.Input
        }], scroll: [{
            type: core.Input
        }], spread: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], errorMessage: [{
            type: core.Input
        }], externalWindowOptions: [{
            type: core.Input
        }] });
        return PdfJsViewerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PdfJsViewerModule = /** @class */ (function () {
        function PdfJsViewerModule() {
        }
        /**
         * @return {?}
         */
        PdfJsViewerModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: PdfJsViewerModule
            };
        };
PdfJsViewerModule.ngModuleDef = ɵngcc0.ɵɵdefineNgModule({ type: PdfJsViewerModule });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(PdfJsViewerModule, { declarations: [PdfJsViewerComponent], imports: [ɵngcc1.CommonModule], exports: [PdfJsViewerComponent] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(PdfJsViewerModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    PdfJsViewerComponent
                ],
                exports: [
                    PdfJsViewerComponent
                ]
            }]
    }], function () { return []; }, null);
PdfJsViewerModule.ngInjectorDef = ɵngcc0.ɵɵdefineInjector({ factory: function PdfJsViewerModule_Factory(t) { return new (t || PdfJsViewerModule)(); }, imports: [[
            common.CommonModule
        ]] });
        return PdfJsViewerModule;
    }());

    exports.PdfJsViewerModule = PdfJsViewerModule;
    exports.PdfJsViewerComponent = PdfJsViewerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

//# sourceMappingURL=ng2-pdfjs-viewer.umd.js.map