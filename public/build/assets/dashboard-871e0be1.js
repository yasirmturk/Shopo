var o=Object.defineProperty;var d=(r,e,s)=>e in r?o(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var t=(r,e,s)=>(d(r,typeof e!="symbol"?e+"":e,s),s);import{b as a,B as i}from"./bootstrap-cc349f82.js";import"./currency-feccde3d.js";import"./chart-2ccf8ff7.js";import"./runtime-core.esm-bundler-d74bfa4d.js";class n{constructor(){t(this,"_day");t(this,"_bestCustomers");t(this,"_bestCashiers");t(this,"_weeksSummary");t(this,"_recentOrders");t(this,"_reports",{day:a.get("/api/dashboard/day"),bestCustomers:a.get("/api/dashboard/best-customers"),weeksSummary:a.get("/api/dashboard/weeks"),bestCashiers:a.get("/api/dashboard/best-cashiers"),recentOrders:a.get("/api/dashboard/recent-orders")});this._day=new i({}),this._bestCustomers=new i([]),this._weeksSummary=new i({}),this._bestCashiers=new i([]),this._recentOrders=new i([]);for(let e in this._reports)this.loadReport(e)}loadReport(e){return this._reports[e].subscribe(s=>{this[`_${e}`].next(s)})}get day(){return this._day}get bestCustomers(){return this._bestCustomers}get bestCashiers(){return this._bestCashiers}get recentOrders(){return this._recentOrders}get weeksSummary(){return this._weeksSummary}}document.addEventListener("DOMContentLoaded",()=>{window.Dashboard=new n});
