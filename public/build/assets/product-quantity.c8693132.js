import{_ as c,A as v,p as m,j as p,o as l,a as f,q as h,e as d,f as a,t as b,h as g,P as q}from"./bootstrap.b3920df9.js";import{n as x,a as k}from"./ns-numpad-plus.dcfa5f84.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const S={components:{nsNumpad:x,nsNumpadPlus:k},data(){return{finalValue:1,virtualStock:null,options:{},optionsSubscription:null,allSelected:!0,isLoading:!1}},beforeDestroy(){this.optionsSubscription.unsubscribe()},mounted(){this.optionsSubscription=POS.options.subscribe(e=>{this.options=e}),this.$popup.event.subscribe(e=>{e.event==="click-overlay"&&(this.$popupParams.reject(!1),this.$popup.close())}),this.$popupParams.product.quantity&&(this.finalValue=this.$popupParams.product.quantity),this.popupCloser()},destroyed(){nsHotPress.destroy("pos-quantity-numpad"),nsHotPress.destroy("pos-quantity-backspace"),nsHotPress.destroy("pos-quantity-enter")},methods:{__:c,popupCloser:v,closePopup(){this.$popupParams.reject(!1),this.$popup.close()},updateQuantity(e){this.finalValue=e},defineQuantity(e){const{product:t,data:i}=this.$popupParams;if(e===0)return m.error(c("Please provide a quantity")).subscribe();if(t.$original().stock_management==="enabled"&&t.$original().type==="materialized"){const r=POS.getStockUsage(t.$original().id,i.unit_quantity_id)-(t.quantity||0);if(e>parseFloat(i.$quantities().quantity)-r)return m.error(c("Unable to add the product, there is not enough stock. Remaining %s").replace("%s",i.$quantities().quantity-r)).subscribe()}this.resolve({quantity:e})},resolve(e){this.$popupParams.resolve(e),this.$popup.close()}}},Q={class:"ns-box shadow min-h-2/5-screen w-3/4-screen md:w-3/5-screen lg:w-2/5-screen xl:w-2/5-screen relative"},$={key:0,id:"loading-overlay",style:{background:"rgb(202 202 202 / 49%)"},class:"flex w-full h-full absolute top-O left-0 items-center justify-center"},V={class:"flex-shrink-0 flex justify-between items-center p-2 border-b ns-box-header"},N={class:"text-xl font-bold text-primary text-center"},C={id:"screen",class:"h-24 border-b primary ns-box-body flex items-center justify-center"},j={class:"font-bold text-3xl"};function O(e,t,i,r,n,s){const y=p("ns-spinner"),_=p("ns-close-button"),u=p("ns-numpad"),P=p("ns-numpad-plus");return l(),f("div",Q,[n.isLoading?(l(),f("div",$,[h(y)])):d("",!0),a("div",V,[a("div",null,[a("h1",N,b(s.__("Define Quantity")),1)]),a("div",null,[h(_,{onClick:t[0]||(t[0]=o=>s.closePopup())})])]),a("div",C,[a("h1",j,b(n.finalValue),1)]),n.options.ns_pos_numpad==="default"?(l(),g(u,{key:1,floating:n.options.ns_pos_allow_decimal_quantities,onChanged:t[1]||(t[1]=o=>s.updateQuantity(o)),onNext:t[2]||(t[2]=o=>s.defineQuantity(o)),value:n.finalValue},null,8,["floating","value"])):d("",!0),n.options.ns_pos_numpad==="advanced"?(l(),g(P,{key:2,onChanged:t[3]||(t[3]=o=>s.updateQuantity(o)),onNext:t[4]||(t[4]=o=>s.defineQuantity(o)),value:n.finalValue},null,8,["value"])):d("",!0)])}var B=w(S,[["render",O]]);class z{constructor(t){this.product=t}run(t){return new Promise((i,r)=>{const n=new q({popupClass:"shadow-lg h-1/2-screen w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/4 bg-white"}),s=this.product;if(POS.options.getValue().ns_pos_show_quantity!==!1||!POS.processingAddQueue)n.open(B,{resolve:i,reject:r,product:s,data:t});else{if(s.$original().stock_management==="enabled"&&s.$original().type==="materialized"){const u=POS.getStockUsage(s.$original().id,t.unit_quantity_id)-(s.quantity||0);if(1>parseFloat(t.$quantities().quantity)-u)return m.error(c("Unable to add the product, there is not enough stock. Remaining %s").replace("%s",(t.$quantities().quantity-u).toString())).subscribe()}i({quantity:1})}})}}export{z as P};