var a=Object.defineProperty;var h=(r,s,e)=>s in r?a(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var t=(r,s,e)=>(h(r,typeof s!="symbol"?s+"":s,e),e);import{b as i,B as p,d as n}from"./bootstrap-cc349f82.js";import{_ as o}from"./currency-feccde3d.js";import"./chart-2ccf8ff7.js";import"./runtime-core.esm-bundler-d74bfa4d.js";class c{constructor(){t(this,"_mysales");t(this,"_reports",{mysales:i.get("/api/reports/cashier-report")});this._mysales=new p({});for(let s in this._reports)this.loadReport(s)}loadReport(s){return this._reports[s].subscribe(e=>{this[`_${s}`].next(e)})}refreshReport(){i.get("/api/reports/cashier-report?refresh=true").subscribe(s=>{this._mysales.next(s),n.success(o("The report has been refreshed."),o("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new c;
