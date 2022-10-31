import{_ as h,P as A,p as g,m as k,o as n,a as o,f as s,k as U,x as F,t as u,F as _,r as v,e as p,l as I,s as Q,q as w,n as V,b as j,j as q,h as S,i as O}from"./bootstrap.f2724e83.js";import $ from"./ns-pos-confirm-popup.e8c513d2.js";import{n as R}from"./ns-select-popup.6d92d557.js";import"./currency.cdd08e48.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const D={name:"ns-product-group",props:["fields"],watch:{searchValue(){clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchProducts(this.searchValue)},1e3)},products:{deep:!0,handler(){this.$forceUpdate()}}},computed:{totalProducts(){return this.products.length>0?(this.$emit("update",this.products),this.products.map(e=>parseFloat(e.sale_price)*parseFloat(e.quantity)).reduce((e,t)=>e+t)):0}},mounted(){const e=this.fields.filter(t=>t.name==="product_subitems");e.length>0&&e[0].value!==void 0&&e[0].value.length>0&&(this.products=e[0].value)},data(){return{searchValue:"",searchTimeout:null,results:[],products:[]}},methods:{__:h,setSalePrice(){this.$emit("updateSalePrice",this.totalProducts)},removeProduct(e){A.show($,{title:h("Delete Sub item"),message:h("Would you like to delete this sub item?"),onAction:t=>{t&&this.products.splice(e,1)}})},toggleUnitField(e){e._unit_toggled||(e._unit_toggled=!e._unit_toggled),setTimeout(()=>{e._unit_toggled&&this.$refs.unitField[0].addEventListener("blur",()=>{e._unit_toggled=!1,this.$forceUpdate()})},200)},toggleQuantityField(e){e._quantity_toggled=!e._quantity_toggled,setTimeout(()=>{e._quantity_toggled&&(this.$refs.quantityField[0].select(),this.$refs.quantityField[0].addEventListener("blur",()=>{this.toggleQuantityField(e),this.$forceUpdate()}))},200)},togglePriceField(e){e._price_toggled=!e._price_toggled,setTimeout(()=>{e._price_toggled&&(this.$refs.priceField[0].select(),this.$refs.priceField[0].addEventListener("blur",()=>{this.togglePriceField(e),this.$forceUpdate()}))},200)},redefineUnit(e){const t=e.unit_quantities.filter(l=>l.id===e.unit_quantity_id);t.length>0&&(e.unit_quantity=t[0],e.unit_id=t[0].unit.id,e.unit=t[0].unit,e.sale_price=t[0].sale_price)},async addResult(e){if(this.searchValue="",e.type==="grouped")return g.error(h("Unable to add a grouped product.")).subscribe();try{const t=await new Promise((d,i)=>{A.show(R,{label:h("Choose The Unit"),options:e.unit_quantities.map(r=>({label:r.unit.name,value:r.id})),resolve:d,reject:i})}),l=e.unit_quantities.filter(d=>parseInt(d.id)===parseInt(t[0].value));this.products.push({name:e.name,unit_quantity_id:t[0].value,unit_quantity:l[0],unit_id:l[0].unit.id,unit:l[0].unit,product_id:l[0].product_id,quantity:1,_price_toggled:!1,_quantity_toggled:!1,_unit_toggled:!1,unit_quantities:e.unit_quantities,sale_price:l[0].sale_price}),this.$emit("update",this.products)}catch(t){console.log(t)}},searchProducts(e){k.post("/api/nexopos/v4/products/search",{search:e,arguments:{type:{comparison:"<>",value:"grouped"}}}).subscribe({next:t=>{this.results=t},error:t=>{g.error(t.message||h("An unexpected error occured"),h("Ok"),{duration:3e3}).subscribe()}})}}},G={class:"flex flex-col px-4 w-full"},B={class:"md:-mx-4 flex flex-col md:flex-row"},J={class:"md:px-4 w-full"},M={class:"input-group border-2 rounded info flex w-full"},K=["placeholder"],L={key:0,class:"h-0 relative"},W={class:"ns-vertical-menu absolute w-full"},z=["onClick"],Y={class:"my-2"},H={class:"ns-table"},X={colspan:"2",class:"border"},Z={colspan:"2",class:"border p-2"},ee={class:"flex justify-between"},te={class:"font-bold"},se=["onClick"],ie=["onClick"],re=["onChange","onUpdate:modelValue"],le=["value"],ne=["onClick"],oe={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},ae=["onUpdate:modelValue"],de=["onClick"],ue={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},ce=["onUpdate:modelValue"],fe={key:0},me={colspan:"2",class:"border p-2 text-center"},he={key:0},pe={class:"w-1/2 border p-2 text-left"},be={class:"w-1/2 border p-2 text-right"};function _e(e,t,l,d,i,r){return n(),o("div",G,[s("div",B,[s("div",J,[s("div",M,[U(s("input",{placeholder:r.__("Search products..."),"onUpdate:modelValue":t[0]||(t[0]=a=>i.searchValue=a),type:"text",class:"flex-auto p-2 outline-none"},null,8,K),[[F,i.searchValue]]),s("button",{onClick:t[1]||(t[1]=a=>r.setSalePrice()),class:"px-2"},u(r.__("Set Sale Price")),1)]),i.results.length>0&&i.searchValue.length>0?(n(),o("div",L,[s("ul",W,[(n(!0),o(_,null,v(i.results,a=>(n(),o("li",{key:a.id,onClick:b=>r.addResult(a),class:"p-2 border-b cursor-pointer"},u(a.name),9,z))),128))])])):p("",!0),s("div",Y,[s("table",H,[s("thead",null,[s("tr",null,[s("th",X,u(r.__("Products")),1)])]),s("tbody",null,[(n(!0),o(_,null,v(i.products,(a,b)=>(n(),o("tr",{key:b},[s("td",Z,[s("div",ee,[s("h3",te,u(a.name),1),s("span",{onClick:m=>r.removeProduct(b),class:"hover:underline text-error-secondary cursor-pointer"},u(r.__("Remove")),9,se)]),s("ul",null,[s("li",{onClick:m=>r.toggleUnitField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[s("span",null,u(r.__("Unit"))+":",1),U(s("select",{onChange:m=>r.redefineUnit(a),ref_for:!0,ref:"unitField",type:"text","onUpdate:modelValue":m=>a.unit_quantity_id=m},[(n(!0),o(_,null,v(a.unit_quantities,m=>(n(),o("option",{key:m.id,value:m.id},u(m.unit.name),9,le))),128))],40,re),[[I,a.unit_quantity_id]])],8,ie),s("li",{onClick:m=>r.toggleQuantityField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[s("span",null,u(r.__("Quantity"))+":",1),a._quantity_toggled?p("",!0):(n(),o("span",oe,u(a.quantity),1)),a._quantity_toggled?U((n(),o("input",{key:1,ref_for:!0,ref:"quantityField",type:"text","onUpdate:modelValue":m=>a.quantity=m},null,8,ae)),[[F,a.quantity]]):p("",!0)],8,ne),s("li",{onClick:m=>r.togglePriceField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[s("span",null,u(r.__("Price"))+":",1),a._price_toggled?p("",!0):(n(),o("span",ue,u(e.nsCurrency(a.sale_price)),1)),a._price_toggled?U((n(),o("input",{key:1,ref_for:!0,ref:"priceField",type:"text","onUpdate:modelValue":m=>a.sale_price=m},null,8,ce)),[[F,a.sale_price]]):p("",!0)],8,de)])])]))),128)),i.products.length===0?(n(),o("tr",fe,[s("td",me,u(r.__("No product are added to this group.")),1)])):p("",!0)]),i.products.length>0?(n(),o("tfoot",he,[s("tr",null,[s("td",pe,u(r.__("Total")),1),s("td",be,u(e.nsCurrency(r.totalProducts)),1)])])):p("",!0)])])])])])}var ge=E(D,[["render",_e]]);const ve={components:{nsProductGroup:ge},data:()=>({formValidation:new Q,nsSnackBar:g,nsHttpClient:k,_sampleVariation:null,form:""}),watch:{form:{deep:!0,handler(e){this.form.variations.forEach(t=>{if(this.formValidation.extractFields(t.tabs.identification.fields).type==="grouped"){for(let d in t.tabs)["identification","groups","taxes","units"].includes(d)||(t.tabs[d].visible=!1);t.tabs.groups&&(t.tabs.groups.visible=!0)}else{for(let d in t.tabs)["identification","groups","taxes","units"].includes(d)||(t.tabs[d].visible=!0);t.tabs.groups&&(t.tabs.groups.visible=!1)}})}}},computed:{defaultVariation(){const e=new Object;for(let t in this._sampleVariation.tabs)e[t]=new Object,e[t].label=this._sampleVariation.tabs[t].label,e[t].active=this._sampleVariation.tabs[t].active,e[t].fields=this._sampleVariation.tabs[t].fields.filter(l=>!["category_id","product_type","stock_management","expires"].includes(l.name)).map(l=>((typeof l.value=="string"&&l.value.length===0||l.value===null)&&(l.value=""),l));return{id:"",tabs:e}}},props:["submit-method","submit-url","return-url","src","units-url"],methods:{__:h,getGroupProducts(e){if(e.groups){const t=e.groups.fields.filter(l=>l.name==="products_subitems");if(console.log(t),t.length>0)return t[0].value}return[]},setProducts(e,t){t.groups.fields.forEach(l=>{l.name==="product_subitems"&&(l.value=e)})},triggerRecompute(e){console.log(this.form)},getUnitQuantity(e){const t=e.filter(l=>l.name==="quantity").map(l=>l.value);return t.length>0?t[0]:0},removeUnitPriceGroup(e,t){const l=e.filter(d=>d.name==="id"&&d.value!==void 0);Popup.show($,{title:h("Confirm Your Action"),message:h("Would you like to delete this group ?"),onAction:d=>{if(d)if(l.length>0)this.confirmUnitQuantityDeletion({group_fields:e,group:t});else{const i=t.indexOf(e);t.splice(i,1)}}})},confirmUnitQuantityDeletion({group_fields:e,group:t}){Popup.show($,{title:h("Your Attention Is Required"),size:"w-3/4-screen h-2/5-screen",message:h("The current unit you're about to delete has a reference on the database and it might have already procured stock. Deleting that reference will remove procured stock. Would you proceed ?"),onAction:l=>{if(l){const d=e.filter(i=>i.name==="id").map(i=>i.value)[0];k.delete(`/api/nexopos/v4/products/units/quantity/${d}`).subscribe(i=>{const r=t.indexOf(e);t.splice(r,1),g.success(i.message).subscribe()},i=>{nsSnackbar.error(i.message).subscribe()})}}})},addUnitGroup(e){if(e.options.length===0)return g.error(h("Please select at least one unit group before you proceed.")).subscribe();e.options.length>e.groups.length?e.groups.push(JSON.parse(JSON.stringify(e.fields))):g.error(h("There shoulnd't be more option than there are units.")).subscribe()},loadAvailableUnits(e){k.get(this.unitsUrl.replace("{id}",e.fields.filter(t=>t.name==="unit_group")[0].value)).subscribe(t=>{e.fields.forEach(l=>{l.type==="group"&&(l.options=t,l.fields.forEach(d=>{d.name==="unit_id"&&(console.log(d),d.options=t.map(i=>({label:i.name,value:i.id})))}))}),this.$forceUpdate()})},loadOptionsFor(e,t,l){k.get(this.unitsUrl.replace("{id}",t)).subscribe(d=>{this.form.variations[l].tabs.units.fields.forEach(i=>{i.name===e&&(i.options=d.map(r=>({label:r.name,value:r.id,selected:!1})))}),this.$forceUpdate()})},submit(){if(this.formValidation.validateFields([this.form.main]),this.form.variations.map(i=>this.formValidation.validateForm(i)).filter(i=>i.length>0).length>0||Object.values(this.form.main.errors).length>0)return g.error(this.$slots["error-form-invalid"]?this.$slots["error-form-invalid"][0].text:h("Unable to proceed the form is not valid.")).subscribe();const t=this.form.variations.map((i,r)=>i.tabs.images.groups.filter(a=>a.filter(b=>b.name==="featured"&&b.value===1).length>0));if(t[0]&&t[0].length>1)return g.error(this.$slots["error-multiple-primary"]?this.$slots["error-multiple-primary"][0].text:h("Unable to proceed, more than one product is set as featured")).subscribe();const l=[];if(this.form.variations.map((i,r)=>i.tabs.units.fields.filter(a=>a.type==="group").forEach(a=>{a.groups.forEach(b=>{l.push(this.formValidation.validateFields(b))})})),l.length===0)return g.error(this.$slots["error-no-units-groups"]?this.$slots["error-no-units-groups"][0].text:h("Either Selling or Purchase unit isn't defined. Unable to proceed.")).subscribe();if(l.filter(i=>i===!1).length>0)return this.$forceUpdate(),g.error(this.$slots["error-invalid-unit-group"]?this.$slots["error-invalid-unit-group"][0].text:h("Unable to proceed as one of the unit group field is invalid")).subscribe();const d={...this.formValidation.extractForm(this.form),variations:this.form.variations.map((i,r)=>{const a=this.formValidation.extractForm(i);r===0&&(a.$primary=!0),a.images=i.tabs.images.groups.map(m=>this.formValidation.extractFields(m));const b=new Object;return i.tabs.units.fields.filter(m=>m.type==="group").forEach(m=>{b[m.name]=m.groups.map(c=>this.formValidation.extractFields(c))}),a.units={...a.units,...b},a})};this.formValidation.disableForm(this.form),k[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,d).subscribe(i=>{if(i.status==="success"){if(this.submitMethod==="POST"&&this.returnUrl!==!1)return document.location=i.data.editUrl||this.returnUrl;g.info(i.message,h("Okay"),{duration:3e3}).subscribe(),this.$emit("save")}this.formValidation.enableForm(this.form)},i=>{g.error(i.message,void 0,{duration:5e3}).subscribe(),this.formValidation.enableForm(this.form),i.response&&this.formValidation.triggerError(this.form,i.response.data)})},deleteVariation(e){confirm(this.$slots["delete-variation"]?this.$slots["delete-variation"][0].text:h("Would you like to delete this variation ?"))&&this.form.variations.splice(e,1)},setTabActive(e,t){for(let l in t)l!==e&&(t[l].active=!1);t[e].active=!0,e==="units"&&this.loadAvailableUnits(t[e])},duplicate(e){this.form.variations.push(Object.assign({},e))},newVariation(){this.form.variations.push(this.defaultVariation)},getActiveTab(e){for(let t in e)if(e[t].active)return e[t];return!1},getActiveTabKey(e){for(let t in e)if(e[t].active)return t;return!1},parseForm(e){return e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0],e.variations.forEach((t,l)=>{let d=0;for(let i in t.tabs)d===0&&t.tabs[i].active===void 0?(t.tabs[i].active=!0,this._sampleVariation=JSON.parse(JSON.stringify(t)),t.tabs[i].fields&&(t.tabs[i].fields=this.formValidation.createFields(t.tabs[i].fields.filter(r=>r.name!=="name")))):t.tabs[i].fields&&(t.tabs[i].fields=this.formValidation.createFields(t.tabs[i].fields)),t.tabs[i].active=t.tabs[i].active===void 0?!1:t.tabs[i].active,t.tabs[i].visible=t.tabs[i].visible===void 0?!0:t.tabs[i].visible,d++}),e},loadForm(){k.get(`${this.src}`).subscribe(t=>{this.form=this.parseForm(t.form)})},addImage(e){e.tabs.images.groups.push(this.formValidation.createFields(JSON.parse(JSON.stringify(e.tabs.images.fields))))},removeImage(e,t){const l=e.tabs.images.groups.indexOf(t);e.tabs.images.groups.splice(l,1)}},mounted(){this.loadForm()},name:"ns-manage-products"},ye={class:"form flex-auto",id:"crud-form"},xe={key:0,class:"flex items-center h-full justify-center flex-auto"},ke={class:"flex flex-col"},we={class:"flex justify-between items-center"},Ve={for:"title",class:"font-bold my-2 text-primary"},Ue={for:"title",class:"text-sm my-2 text-primary"},Fe=["href"],Ce=["disabled"],Pe=["disabled"],qe={key:0,class:"text-xs text-primary py-1"},$e={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},Te={class:"px-4 w-full"},Ae={id:"card-header",class:"flex flex-wrap justify-between ns-tab ml-4"},je={class:"flex flex-wrap"},Se=["onClick"],Oe={key:0,class:"rounded-full bg-error-secondary text-white h-6 w-6 flex font-semibold items-center justify-center"},Ee=s("div",{class:"flex items-center justify-center -mx-1"},null,-1),Ne={class:"card-body ns-tab-item"},Ie={class:"rounded shadow p-2"},Qe={key:0,class:"-mx-4 flex flex-wrap"},Re={key:1,class:"-mx-4 flex flex-wrap text-primary"},De={class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},Ge={class:"rounded border border-box-elevation-edge bg-box-elevation-background flex justify-between p-2 items-center"},Be=["onClick"],Je=s("i",{class:"las la-plus-circle"},null,-1),Me=[Je],Ke={class:"rounded border border-box-elevation-edge flex flex-col overflow-hidden"},Le={class:"p-2"},We=["onClick"],ze={key:2,class:"-mx-4 flex flex-wrap text-primary"},Ye={key:3,class:"-mx-4 flex flex-wrap"},He={class:"px-4 w-full md:w-1/2 lg:w-1/3"},Xe={class:"mb-2"},Ze={class:"font-medium text-primary"},et={class:"py-1 text-sm text-primary"},tt={class:"mb-2"},st=["onClick"],it=s("span",{class:"rounded-full border-2 ns-inset-button info h-8 w-8 flex items-center justify-center"},[s("i",{class:"las la-plus-circle"})],-1),rt={class:"-mx-4 flex flex-wrap"},lt={class:"shadow rounded overflow-hidden bg-box-elevation-background text-primary"},nt={class:"border-b text-sm p-2 flex justify-between text-primary border-box-elevation-edge"},ot={class:"p-2 mb-2"},at=["onClick"];function dt(e,t,l,d,i,r){const a=q("ns-spinner"),b=q("ns-field"),m=q("ns-product-group");return n(),o("div",ye,[Object.values(e.form).length===0?(n(),o("div",xe,[w(a)])):p("",!0),Object.values(e.form).length>0?(n(),o(_,{key:1},[s("div",ke,[s("div",we,[s("label",Ve,u(e.form.main.label),1),s("div",Ue,[e.returnUrl?(n(),o("a",{key:0,href:e.returnUrl,class:"rounded-full border ns-inset-button error hover:bg-error-tertiary px-2 py-1"},u(r.__("Return")),9,Fe)):p("",!0)])]),s("div",{class:V([e.form.main.disabled?"":e.form.main.errors.length>0?"border-error-tertiary":"","input-group info flex border-2 rounded overflow-hidden"])},[U(s("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>e.form.main.value=c),onBlur:t[1]||(t[1]=c=>e.formValidation.checkField(e.form.main)),onChange:t[2]||(t[2]=c=>e.formValidation.checkField(e.form.main)),disabled:e.form.main.disabled,type:"text",class:V([(e.form.main.disabled,""),"flex-auto text-primary outline-none h-10 px-2"])},null,42,Ce),[[F,e.form.main.value]]),s("button",{disabled:e.form.main.disabled,class:V([e.form.main.disabled?"":e.form.main.errors.length>0?"bg-error-tertiary":"","outline-none px-4 h-10 rounded-none"]),onClick:t[3]||(t[3]=c=>r.submit())},[j(e.$slots,"save",{},()=>[S(u(r.__("Save")),1)])],10,Pe)],2),e.form.main.description&&e.form.main.errors.length===0?(n(),o("p",qe,u(e.form.main.description),1)):p("",!0),(n(!0),o(_,null,v(e.form.main.errors,(c,C)=>(n(),o("p",{class:"text-xs py-1 text-error-tertiary",key:C},[s("span",null,[j(e.$slots,"error-required",{},()=>[S(u(c.identifier),1)])])]))),128))]),s("div",$e,[s("div",Te,[(n(!0),o(_,null,v(e.form.variations,(c,C)=>(n(),o("div",{id:"tabbed-card",class:"mb-8",key:C},[s("div",Ae,[s("div",je,[(n(!0),o(_,null,v(c.tabs,(f,y)=>(n(),o(_,null,[f.visible?(n(),o("div",{onClick:x=>r.setTabActive(y,c.tabs),class:V([f.active?"active":"inactive","tab cursor-pointer text-primary px-4 py-2 rounded-tl-lg rounded-tr-lg flex justify-between"]),key:y},[s("span",{class:V(["block",f.errors&&f.errors.length>0?"mr-2":""])},u(f.label),3),f.errors&&f.errors.length>0?(n(),o("span",Oe,u(f.errors.length),1)):p("",!0)],10,Se)):p("",!0)],64))),256))]),Ee]),s("div",Ne,[s("div",Ie,[["images","units","groups"].includes(r.getActiveTabKey(c.tabs))?p("",!0):(n(),o("div",Qe,[(n(!0),o(_,null,v(r.getActiveTab(c.tabs).fields,(f,y)=>(n(),o("div",{key:y,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[w(b,{field:f},null,8,["field"])]))),128))])),r.getActiveTabKey(c.tabs)==="images"?(n(),o("div",Re,[s("div",De,[s("div",Ge,[s("span",null,u(r.__("Add Images")),1),s("button",{onClick:f=>r.addImage(c),class:"outline-none rounded-full border flex items-center justify-center w-8 h-8 ns-inset-button info"},Me,8,Be)])]),(n(!0),o(_,null,v(r.getActiveTab(c.tabs).groups,(f,y)=>(n(),o("div",{key:y,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3 mb-4"},[s("div",Ke,[s("div",Le,[(n(!0),o(_,null,v(f,(x,P)=>(n(),O(b,{key:P,field:x},null,8,["field"]))),128))]),s("div",{onClick:x=>r.removeImage(c,f),class:"text-center py-2 border-t border-box-elevation-edge text-sm cursor-pointer"},u(r.__("Remove Image")),9,We)])]))),128))])):p("",!0),r.getActiveTabKey(c.tabs)==="groups"?(n(),o("div",ze,[w(m,{onUpdate:f=>r.setProducts(f,c.tabs),onUpdateSalePrice:f=>r.triggerRecompute(f,c.tabs),fields:r.getActiveTab(c.tabs).fields},null,8,["onUpdate","onUpdateSalePrice","fields"])])):p("",!0),r.getActiveTabKey(c.tabs)==="units"?(n(),o("div",Ye,[s("div",He,[w(b,{onChange:f=>r.loadAvailableUnits(r.getActiveTab(c.tabs)),field:r.getActiveTab(c.tabs).fields[0]},null,8,["onChange","field"]),w(b,{onChange:f=>r.loadAvailableUnits(r.getActiveTab(c.tabs)),field:r.getActiveTab(c.tabs).fields[1]},null,8,["onChange","field"])]),(n(!0),o(_,null,v(r.getActiveTab(c.tabs).fields,(f,y)=>(n(),o(_,null,[f.type==="group"?(n(),o("div",{class:"px-4 w-full lg:w-2/3",key:y},[s("div",Xe,[s("label",Ze,u(f.label),1),s("p",et,u(f.description),1)]),s("div",tt,[s("div",{onClick:x=>r.addUnitGroup(f),class:"border-dashed border-2 p-1 bg-box-elevation-background border-box-elevation-edge flex justify-between items-center text-primary cursor-pointer rounded-lg"},[it,s("span",null,u(r.__("New Group")),1)],8,st)]),s("div",rt,[(n(!0),o(_,null,v(f.groups,(x,P)=>(n(),o("div",{class:"px-4 w-full md:w-1/2 mb-4",key:P},[s("div",lt,[s("div",nt,[s("span",null,u(r.__("Available Quantity")),1),s("span",null,u(r.getUnitQuantity(x)),1)]),s("div",ot,[(n(!0),o(_,null,v(x,(T,N)=>(n(),O(b,{field:T,key:N},null,8,["field"]))),128))]),s("div",{onClick:T=>r.removeUnitPriceGroup(x,f.groups),class:"p-1 hover:bg-error-primary border-t border-box-elevation-edge flex items-center justify-center cursor-pointer font-medium"},u(r.__("Delete")),9,at)])]))),128))])])):p("",!0)],64))),256))])):p("",!0)])])]))),128))])])],64)):p("",!0)])}var pt=E(ve,[["render",dt]]);export{pt as default};
