import{b as y,d as f}from"./bootstrap-cc349f82.js";import{c as v,e as k}from"./components-da360036.js";import{_ as l,n as w}from"./currency-feccde3d.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{r as b,o as n,c as a,a as e,f as p,t,F,b as C,n as _,e as i,i as u}from"./runtime-core.esm-bundler-d74bfa4d.js";import"./chart-2ccf8ff7.js";import"./ns-alert-popup-eb00e755.js";import"./ns-avatar-image-762bed1e.js";import"./index.es-25aa42ee.js";import"./ns-prompt-popup-2b956d09.js";const N={name:"ns-best-products-report",mounted(){},components:{nsDatepicker:v,nsDateTimePicker:k},data(){return{ns:window.ns,startDateField:{name:"start_date",type:"datetime",value:ns.date.moment.startOf("day").format()},endDateField:{name:"end_date",type:"datetime",value:ns.date.moment.endOf("day").format()},report:null,sortField:{name:"sort",type:"select",label:l("Sort Results"),value:"using_quantity_asc",options:[{value:"using_quantity_asc",label:l("Using Quantity Ascending")},{value:"using_quantity_desc",label:l("Using Quantity Descending")},{value:"using_sales_asc",label:l("Using Sales Ascending")},{value:"using_sales_desc",label:l("Using Sales Descending")},{value:"using_name_asc",label:l("Using Name Ascending")},{value:"using_name_desc",label:l("Using Name Descending")}]}}},computed:{totalDebit(){return 0},totalCredit(){return 0}},props:["storeLogo","storeName"],methods:{nsCurrency:w,__:l,printSaleReport(){this.$htmlToPaper("best-products-report")},loadReport(){y.post("/api/reports/products-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,sort:this.sortField.value}).subscribe({next:d=>{d.current.products=Object.values(d.current.products),this.report=d},error:d=>{f.error(d.message).subscribe()}})}}},S={id:"report-section",class:"px-4"},B={class:"flex -mx-2"},P={class:"px-2"},R={class:"px-2"},U={class:"px-2"},q={class:"ns-button"},V=e("i",{class:"las la-sync-alt text-xl"},null,-1),j={class:"pl-2"},L={class:"px-2"},A={class:"ns-button"},O=e("i",{class:"las la-print text-xl"},null,-1),Q={class:"pl-2"},T={class:"flex -mx-2"},z={class:"px-2"},E={id:"best-products-report",class:"anim-duration-500 fade-in-entrance"},H={class:"flex w-full"},G={class:"my-4 flex justify-between w-full"},I={class:"text-primary"},J={class:"pb-1 border-b border-dashed"},K={class:"pb-1 border-b border-dashed"},M={class:"pb-1 border-b border-dashed"},W=["src","alt"],X={class:"my-4"},Y={class:"shadow ns-box"},Z={class:"ns-box-body"},$={class:"table ns-table border w-full"},ee={class:""},te={class:"p-2 text-left"},se={width:"150",class:"p-2 text-right"},re={width:"150",class:"p-2 text-right"},oe={width:"150",class:"p-2 text-right"},ne={width:"150",class:"p-2 text-right"},ae={key:0,class:""},le={class:"p-2 border"},ie={class:"p-2 border text-right"},de={class:"p-2 border text-right"},ce={class:"flex flex-col"},_e={key:0},ue={class:"p-2 border text-right"},pe={class:"flex flex-col"},he={key:0},me={key:0},be=e("i",{class:"las la-arrow-up"},null,-1),xe={key:1},ge=e("i",{class:"las la-arrow-down"},null,-1),ye={key:0,class:""},fe={colspan:"5",class:"border text-center p-2"},ve={key:1},ke={colspan:"5",class:"text-center p-2 border"},we={key:2,class:"font-semibold"},De=e("td",{colspan:"3",class:"p-2 border"},null,-1),Fe={class:"p-2 border text-right"},Ce=e("td",{class:"p-2 border text-right"},null,-1);function Ne(d,c,h,Se,o,r){const m=b("ns-date-time-picker"),x=b("ns-field");return n(),a("div",S,[e("div",B,[e("div",P,[p(m,{field:o.startDateField},null,8,["field"])]),e("div",R,[p(m,{field:o.endDateField},null,8,["field"])]),e("div",U,[e("div",q,[e("button",{onClick:c[0]||(c[0]=s=>r.loadReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[V,e("span",j,t(r.__("Load")),1)])])]),e("div",L,[e("div",A,[e("button",{onClick:c[1]||(c[1]=s=>r.printSaleReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[O,e("span",Q,t(r.__("Print")),1)])])])]),e("div",T,[e("div",z,[p(x,{field:o.sortField},null,8,["field"])])]),e("div",E,[e("div",H,[e("div",G,[e("div",I,[e("ul",null,[e("li",J,t(r.__("Date Range : {date1} - {date2}").replace("{date1}",o.startDateField.value).replace("{date2}",o.endDateField.value)),1),e("li",K,t(r.__("Document : Best Products")),1),e("li",M,t(r.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:h.storeLogo,alt:h.storeName},null,8,W)])])]),e("div",X,[e("div",Y,[e("div",Z,[e("table",$,[e("thead",ee,[e("tr",null,[e("th",te,t(r.__("Product")),1),e("th",se,t(r.__("Unit")),1),e("th",re,t(r.__("Quantity")),1),e("th",oe,t(r.__("Value")),1),e("th",ne,t(r.__("Progress")),1)])]),o.report?(n(),a("tbody",ae,[(n(!0),a(F,null,C(o.report.current.products,(s,g)=>(n(),a("tr",{key:g,class:_(s.evolution==="progress"?"bg-success-primary":"bg-error-primary")},[e("td",le,t(s.name),1),e("td",ie,t(s.unit_name),1),e("td",de,[e("div",ce,[e("span",null,[e("span",null,t(s.quantity),1)]),e("span",{class:_([s.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[s.evolution==="progress"?(n(),a("span",_e,"+")):i("",!0),u(" "+t(s.quantity-s.old_quantity),1)],2)])]),e("td",ue,[e("div",pe,[e("span",null,t(r.nsCurrency(s.total_price)),1),e("span",{class:_([s.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[s.evolution==="progress"?(n(),a("span",he,"+")):i("",!0),u(" "+t(r.nsCurrency(s.total_price-s.old_total_price)),1)],2)])]),e("td",{class:_([s.evolution==="progress"?"text-success-tertiary":"text-error-light-tertiary","p-2 border text-right"])},[s.evolution==="progress"?(n(),a("span",me,[u(t(s.difference.toFixed(2))+"% ",1),be])):i("",!0),s.evolution==="regress"?(n(),a("span",xe,[u(t(s.difference.toFixed(2))+"% ",1),ge])):i("",!0)],2)],2))),128)),o.report.current.products.length===0?(n(),a("tr",ye,[e("td",fe,t(r.__("No results to show.")),1)])):i("",!0)])):i("",!0),o.report?i("",!0):(n(),a("tbody",ve,[e("tr",null,[e("td",ke,t(r.__("Start by choosing a range and loading the report.")),1)])])),o.report?(n(),a("tfoot",we,[e("tr",null,[De,e("td",Fe,t(r.nsCurrency(o.report.current.total_price)),1),Ce])])):i("",!0)])])])])])])}const Qe=D(N,[["render",Ne]]);export{Qe as default};
