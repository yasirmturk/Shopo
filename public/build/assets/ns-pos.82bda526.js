import b from"./ns-pos-cart.fbe5e0d3.js";import v from"./ns-pos-grid.73c0ef00.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,a as o,f as i,F as h,r as x,n,q as l,e as c,j as a,h as S,z as w}from"./bootstrap.b3920df9.js";import"./currency.ddae5e8e.js";import"./pos-section-switch.b95dab59.js";import"./product-quantity.c8693132.js";import"./ns-numpad-plus.dcfa5f84.js";import"./ns-pos-customer-select-popup.6d41843b.js";import"./ns-notice.dcd05aaf.js";import"./ns-pos-confirm-popup.1b443749.js";import"./ns-paginate.6d11ab6e.js";import"./ns-orders-preview-popup.f45a8d9e.js";import"./ns-select-popup.94967168.js";import"./ns-prompt-popup.9575a5e5.js";import"./ns-pos-loading-popup.c288281e.js";import"./ns-pos-order-type-popup.982e33cd.js";import"./ns-pos-shipping-popup.4c02c477.js";const k={name:"ns-pos",computed:{buttons(){return POS.header.buttons}},mounted(){this.visibleSectionSubscriber=POS.visibleSection.subscribe(r=>{this.visibleSection=r});const s=document.getElementById("loader");s.classList.remove("fade-in-entrance"),s.classList.add("fade-out-exit"),setTimeout(()=>{s.remove(),POS.reset()},500)},destroyed(){this.visibleSectionSubscriber.unsubscribe()},data(){return{visibleSection:null,visibleSectionSubscriber:null}},components:{nsPosCart:b,nsPosGrid:v}},y={class:"h-full flex-auto flex flex-col",id:"pos-container"},P={class:"flex overflow-hidden flex-shrink-0 px-2 pt-2"},g={class:"-mx-2 flex overflow-x-auto pb-1"},B={class:"flex-auto overflow-hidden flex p-2"},C={class:"flex flex-auto overflow-hidden -m-2"};function L(s,r,N,O,t,d){const m=a("ns-pos-cart"),p=a("ns-pos-grid");return e(),o("div",y,[i("div",P,[i("div",g,[(e(!0),o(h,null,x(d.buttons,(u,f)=>(e(),o("div",{class:"header-buttons flex px-2 flex-shrink-0",key:f},[(e(),S(w(u)))]))),128))])]),i("div",B,[i("div",C,[["both","cart"].includes(t.visibleSection)?(e(),o("div",{key:0,class:n([t.visibleSection==="both"?"w-1/2":"w-full","flex overflow-hidden p-2"])},[l(m)],2)):c("",!0),["both","grid"].includes(t.visibleSection)?(e(),o("div",{key:1,class:n([t.visibleSection==="both"?"w-1/2":"w-full","p-2 flex overflow-hidden"])},[l(p)],2)):c("",!0)])])])}var W=_(k,[["render",L]]);export{W as default};