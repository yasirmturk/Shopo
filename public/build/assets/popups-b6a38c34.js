import{b as q,f as M}from"./components-da360036.js";import{d as v,P as k,e as g,b as O,c as T}from"./bootstrap-cc349f82.js";import F from"./ns-alert-popup-eb00e755.js";import{n as x,d as N,b as B,c as z}from"./ns-prompt-popup-2b956d09.js";import{n as W,a as H}from"./ns-orders-preview-popup-2314fc3f.js";import{n as D}from"./ns-procurement-quantity-6ee66b83.js";import{_ as u,n as E}from"./currency-feccde3d.js";import"./index.es-25aa42ee.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as d,F as P,a as e,t as a,f as h,n as U,b as A,g as S,w,e as f,i as L,s as R}from"./runtime-core.esm-bundler-d74bfa4d.js";import"./ns-avatar-image-762bed1e.js";import"./chart-2ccf8ff7.js";const I={name:"ns-products-convertion",props:["popup","unitQuantity","product"],data(){return{unitQuantities:[],isLoading:!1,unitPair:{from:{unit:{},unitQuantity:{},selected:!0,quantity:0,realQuantity:0,fields:[{label:u("Assigned Unit"),name:"assigned_unit",value:"",type:"select",options:[]}]},to:{unit:{},unitQuantity:{},selected:!1,quantity:0,fields:[{label:u("Assigned Unit"),name:"assigned_unit",value:"",type:"select",options:[]}]}},selected:""}},mounted(){this.loadProductQuantities(),console.log(this)},methods:{__:u,async submitConvertion(){if(this.unitPair.from.quantity===0)return v.error(u("The quantity should be greater than 0")).subscribe();if(Math.floor(this.unitPair.to.quantity)===0)return v.error(u(`The provided quantity can't result in any convertion for unit "{destination}"`).replace("{destination}",this.unitPair.to.unit.name)).subscribe();if(this.unitPair.from.quantity!==this.unitPair.from.realQuantity)try{const t=await new Promise((i,s)=>{k.show(x,{title:u("Conversion Warning"),message:u("Only {quantity}({source}) can be converted to {destinationCount}({destination}). Would you like to proceed ?").replace("{quantity}",this.unitPair.from.realQuantity).replace("{destinationCount}",Math.floor(this.unitPair.to.quantity)).replace("{source}",this.unitPair.from.unit.name).replace("{destination}",this.unitPair.to.unit.name),onAction:l=>{l?i(!0):s(!1)}})});return this.proceedConversionSubmissions()}catch{return}try{const t=await new Promise((i,s)=>{k.show(x,{title:u("Confirm Conversion"),message:u("You're about to convert {quantity}({source}) to {destinationCount}({destination}). Would you like to proceed?").replace("{quantity}",this.unitPair.from.quantity).replace("{destinationCount}",Math.floor(this.unitPair.to.quantity)).replace("{source}",this.unitPair.from.unit.name).replace("{destination}",this.unitPair.to.unit.name),onAction:l=>{l?i(!0):s(!1)}})});return this.proceedConversionSubmissions()}catch{return}},proceedConversionSubmissions(){this.isLoading=!0,nsHttpClient.post(`/api/products/${this.unitQuantity.product_id}/units/conversion`,{from:this.unitPair.from.unit.id,to:this.unitPair.to.unit.id,quantity:this.unitPair.from.realQuantity}).subscribe({next:t=>(this.isLoading=!1,this.popup.close(),this.popup.params.resolve(t),g.success(u("Conversion Successful"),u("The product {product} has been converted successfully.").replace("{product}",this.product.name))),error:t=>(this.isLoading=!1,this.popup.params.reject(t),g.error(u("An error occured"),t.message||u("An error occured while converting the product {product}").replace("{product}",this.product.name)))})},handlePairUnitUpdated(t){const i=this.selectedUnitPair();i.unitQuantity=this.unitQuantities.filter(l=>l.unit.id===t.value)[0],i.unit=i.unitQuantity.unit,i.fields[0].value=t.value;const s=i===this.unitPair.from?this.unitPair.to:this.unitPair.from;s.unit.id===i.unit.id&&(s.unitQuantity=this.unitQuantities.filter(l=>l.unit.id!==i.unit.id)[0],s.unit=s.unitQuantity.unit,s.fields[0].value=s.unit.id),this.updateFromPairQuantity(this.unitPair.from.quantity)},updateFromPairQuantity(t){t.length===0&&(t=0),t>this.unitPair.from.unitQuantity.quantity&&(t=this.unitPair.from.unitQuantity.quantity,v.info(u("The quantity has been set to the maximum available")).subscribe()),this.unitPair.from.quantity=parseFloat(t);const i=this.unitQuantities.filter(o=>o.unit.base_unit)[0];if(i.length===0)return g.error(u("An error occured"),u("The product {product} has no base unit").replace("{product}",this.product.name));const l=this.unitPair.from.quantity*this.unitPair.from.unit.value*i.unit.value/this.unitPair.to.unit.value;this.unitPair.from.unit.value<this.unitPair.to.unit.value?this.unitPair.from.realQuantity=Math.floor(l)*this.unitPair.to.unit.value:this.unitPair.from.realQuantity=this.unitPair.from.quantity,this.unitPair.to.quantity=l},switchPair(){const t=this.unitPair.from.unit,i=this.unitPair.to.unit;this.unitPair.from.unit=i,this.unitPair.from.unitQuantity=this.unitQuantities.filter(s=>s.unit.id===i.id)[0],this.unitPair.from.quantity=Math.floor(this.unitPair.to.quantity),this.unitPair.to.unit=t,this.unitPair.to.unitQuantity=this.unitQuantities.filter(s=>s.unit.id===t.id)[0],this.updateFromPairQuantity(this.unitPair.from.quantity)},selectedUnitPair(){return this.unitPair[this.unitPair.from.selected?"from":"to"]},setVisible(t,i){const s=i==="from"?"to":"from";t[i].selected=!0,t[s].selected=!1},loadProductQuantities(){nsHttpClient.get("/api/products/"+this.unitQuantity.product_id+"/units/quantities").subscribe({next:t=>{this.unitQuantities=t,this.unitPair.from.unit=this.unitQuantity.unit,this.unitPair.from.unitQuantity=this.unitQuantity,this.unitPair.from.fields[0].value=this.unitQuantity.unit.id,this.unitPair.from.fields[0].options=t.map(i=>({label:i.unit.name,value:i.unit.id})),this.unitPair.to.unit=t.filter(i=>i.unit.id!==this.unitQuantity.unit.id)[0].unit,this.unitPair.to.unitQuantity=t.filter(i=>i.unit.id!==this.unitQuantity.unit.id)[0],this.unitPair.to.fields[0].value=this.unitPair.to.unit.id,this.unitPair.to.fields[0].options=t.map(i=>({label:i.unit.name,value:i.unit.id}))}})}}},Y={class:"shadow-lg w-6/7-screen lg:w-3/5-screen ns-box overflow-hidden flex flex-col"},G={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},J={class:"relative"},K={class:"border-b border-box-edge"},X={class:"flex"},Z={class:"font-bold text-3xl"},$={class:"border-r border-box-edge relative"},tt=e("i",{class:"las la-exchange-alt text-3xl"},null,-1),it=[tt],et={class:"font-bold text-3xl"},nt={class:"p-2 border-b border-box-edge"},st={class:""},ot={key:0,class:"top-0 left-0 absolute h-full w-full flex items-center justify-center",style:{background:"rgb(121 121 121 / 20%)"}},rt={key:1,class:"flex items-center h-full justify-center"};function ut(t,i,s,l,o,n){const b=p("ns-close-button"),y=p("ns-field"),_=p("ns-numpad"),m=p("ns-spinner");return c(),d("div",Y,[o.unitQuantities.length>0?(c(),d(P,{key:0},[e("div",G,[e("div",null,a(n.__("Unit Conversion : {product}").replace("{product}",s.product.name)),1),e("div",null,[h(b,{onClick:i[0]||(i[0]=r=>s.popup.close())})])]),e("div",J,[e("div",K,[e("div",X,[e("div",{class:U(["p-2 w-full md:w-1/2 flex flex-col items-center justify-center",o.unitPair.from.selected?"bg-info-primary text-white":""]),onClick:i[1]||(i[1]=r=>n.setVisible(o.unitPair,"from"))},[e("span",null,a(o.unitPair.from.unit.name),1),e("h3",Z,a(o.unitPair.from.quantity),1)],2),e("div",$,[e("div",{class:"rounded-full h-12 w-12 flex items-center justify-center absolute shadow bg-input-button p-2",onClick:i[2]||(i[2]=r=>n.switchPair()),style:{position:"absolute",left:"-22px",top:"14px"}},it)]),e("div",{class:U(["p-2 w-full md:w-1/2 flex flex-col items-center justify-center",o.unitPair.to.selected?"bg-info-primary text-white":""]),onClick:i[3]||(i[3]=r=>n.setVisible(o.unitPair,"to"))},[e("span",null,a(o.unitPair.to.unit.name),1),e("h3",et,a(Math.floor(o.unitPair.to.quantity)),1)],2)])]),e("div",nt,[(c(!0),d(P,null,A(n.selectedUnitPair().fields,r=>(c(),S(y,{onChange:i[4]||(i[4]=C=>n.handlePairUnitUpdated(C)),field:r},null,8,["field"]))),256))]),e("div",st,[h(_,{onNext:i[6]||(i[6]=r=>n.submitConvertion()),value:o.unitPair.from.quantity,onChanged:i[7]||(i[7]=r=>n.updateFromPairQuantity(r))},{"numpad-footer":w(()=>[e("div",{onClick:i[5]||(i[5]=r=>n.updateFromPairQuantity(o.unitPair.from.unitQuantity.quantity)),class:"w-full ns-numpad-key h-24 font-bold flex items-center justify-center cursor-pointer col-span-3"},a(n.__("Convert {quantity} available").replace("{quantity}",o.unitPair.from.unitQuantity.quantity)),1)]),_:1},8,["value"])]),o.isLoading?(c(),d("div",ot,[h(m,{size:"24"})])):f("",!0)])],64)):f("",!0),o.unitQuantities.length===0?(c(),d("div",rt,[h(m)])):f("",!0)])}const at=V(I,[["render",ut]]),lt={name:"ns-products-preview",props:["popup","product"],computed:{product(){return this.popup.params.product}},methods:{__:u,nsCurrency:E,changeActiveTab(t){this.active=t,this.active==="units-quantities"&&this.loadProductQuantities()},loadProductQuantities(){console.log("is loadinfg"),this.hasLoadedUnitQuantities=!1,O.get(`/api/products/${this.product.id}/units/quantities`).subscribe({next:t=>{this.unitQuantities=t,this.hasLoadedUnitQuantities=!0}})},async convert(t,i){try{const s=await new Promise((l,o)=>{Popup.show(at,{unitQuantity:t,product:i,resolve:l,reject:o})});this.loadProductQuantities()}catch(s){console.log({exception:s})}}},data(){return{active:"units-quantities",unitQuantities:[],hasLoadedUnitQuantities:!1}},mounted(){this.loadProductQuantities()}},ct={class:"shadow-lg w-6/7-screen lg:w-3/5-screen h-6/7-screen lg:h-4/5-screen ns-box overflow-hidden flex flex-col"},dt={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},pt={class:"flex-auto overflow-y-auto ns-box-body"},ht={class:"p-2"},ft={key:0,class:"table ns-table w-full"},mt={class:"p-1 border"},Pt={width:"150",class:"text-right p-1 border"},bt={width:"150",class:"text-right p-1 border"},yt={width:"150",class:"text-right p-1 border"},_t={class:"p-1 border text-left"},vt=["onClick"],gt={class:"p-1 border text-right"},xt={class:"p-1 border text-right"},wt={class:"p-1 border text-right"};function Qt(t,i,s,l,o,n){const b=p("ns-close-button"),y=p("ns-spinner"),_=p("ns-tabs-item"),m=p("ns-tabs");return c(),d("div",ct,[e("div",dt,[e("div",null,a(n.__("Previewing :"))+" "+a(n.product.name),1),e("div",null,[h(b,{onClick:i[0]||(i[0]=r=>s.popup.close())})])]),e("div",pt,[e("div",ht,[h(m,{active:o.active,onActive:i[1]||(i[1]=r=>n.changeActiveTab(r))},{default:w(()=>[h(_,{label:n.__("Units & Quantities"),identifier:"units-quantities"},{default:w(()=>[o.hasLoadedUnitQuantities?(c(),d("table",ft,[e("thead",null,[e("tr",null,[e("th",mt,a(n.__("Unit")),1),e("th",Pt,a(n.__("Sale Price")),1),e("th",bt,a(n.__("Wholesale Price")),1),e("th",yt,a(n.__("Quantity")),1)])]),e("tbody",null,[(c(!0),d(P,null,A(o.unitQuantities,r=>(c(),d("tr",{key:r.id},[e("td",_t,[L(a(r.unit.name)+" ",1),n.product.rawType==="materialized"&&n.product.rawStockManagement==="enabled"?(c(),d(P,{key:0},[L(" — "),e("a",{onClick:C=>n.convert(r,n.product),class:"text-sm text-info-secondary hover:underline border-dashed",href:"javascript:void(0)"},a(n.__("Convert")),9,vt)],64)):f("",!0)]),e("td",gt,a(n.nsCurrency(r.sale_price)),1),e("td",xt,a(n.nsCurrency(r.wholesale_price)),1),e("td",wt,a(r.quantity),1)]))),128))])])):f("",!0),o.hasLoadedUnitQuantities?f("",!0):(c(),S(y,{key:1,size:"16",border:"4"}))]),_:1},8,["label"])]),_:1},8,["active"])])])])}const Ct=V(lt,[["render",Qt]]),j={nsOrderPreview:W,nsProductPreview:Ct,nsAlertPopup:F,nsConfirmPopup:x,nsPromptPopup:N,nsMediaPopup:M,nsProcurementQuantity:D,nsOrdersRefund:H,nsSelectPopup:B,nsPOSLoadingPopup:z};for(let t in j)window[t]=j[t];const Q=T({data(){return{popups:[],defaultClass:"absolute top-0 left-0 w-full h-full items-center flex overflow-y-auto justify-center is-popup"}},mounted(){nsState.subscribe(t=>{t.popups!==void 0&&(document.body.focus(),this.popups=R(t.popups),this.$forceUpdate())})},methods:{closePopup(t,i){(Object.values(i.target.classList).includes("is-popup")&&t.config!==void 0&&[void 0,!0].includes(t.config.closeOnOverlayClick)||Object.keys(t.config).length===0)&&(t.params&&typeof t.params.reject=="function"?(t.params.reject(!1),typeof t.close=="function"&&t.close(),i.stopPropagation()):t.close())},preventPropagation(t){t.stopImmediatePropagation()}}});for(let t in q)Q.component(t,q[t]);document.addEventListener("DOMContentLoaded",()=>{Q.mount("#dashboard-popups"),window.nsPopups=Q});
