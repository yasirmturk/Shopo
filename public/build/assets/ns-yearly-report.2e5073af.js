import{h as m,_ as a,y as x,f as p,o,a as n,m as w,q as y,e as b,b as e,w as k,v,t as s,F as i,g as _,k as C,s as f}from"./bootstrap.5d9ac093.js";import{b as D,e as R}from"./components.aa8aebf9.js";import{b as S}from"./ns-notice.610564cb.js";import j from"./ns-pos-confirm-popup.cef1fbda.js";import{n as F}from"./currency.ec6652ed.js";import{_ as T}from"./ns-numpad-plus.ce205eaf.js";import"./ns-alert-popup.cb6a2bd6.js";import"./ns-pos-loading-popup.018d1aee.js";import"./ns-paginate.1937609d.js";import"./ns-prompt-popup.00c4fc54.js";const z={name:"ns-yearly-report",props:["store-logo","store-name"],mounted(){this.timezone!==""&&(this.year=ns.date.getMoment().format("Y"),this.loadReport())},components:{nsDatepicker:D,nsNotice:S,nsDateTimePicker:R},data(){return{startDate:m(),endDate:m(),report:{},timezone:ns.date.timeZone,year:"",ns:window.ns,labels:["month_paid_orders","month_taxes","month_expenses","month_income"]}},computed:{totalDebit(){return 0},totalCredit(){return 0}},methods:{__:a,nsCurrency:F,setStartDate(u){this.startDate=u.format()},setEndDate(u){this.endDate=u.format()},printSaleReport(){this.$htmlToPaper("annual-report")},sumOf(u){return Object.values(this.report).length>0?Object.values(this.report).map(d=>parseFloat(d[u])||0).reduce((d,h)=>d+h):0},recomputeForSpecificYear(){Popup.show(j,{title:a("Would you like to proceed ?"),message:a("The report will be computed for the current year, a job will be dispatched and you'll be informed once it's completed."),onAction:u=>{u&&x.post("/api/nexopos/v4/reports/compute/yearly",{year:this.year}).subscribe(d=>{p.success(d.message).subscribe()},d=>{p.success(d.message||a("An unexpected error has occured.")).subscribe()})}})},getReportForMonth(u){return console.log(this.report,u),this.report[u]},loadReport(){const u=this.year;x.post("/api/nexopos/v4/reports/annual-report",{year:u}).subscribe(d=>{this.report=d},d=>{p.error(d.message).subscribe()})}}},B={class:"px-4"},N={key:1,class:"flex -mx-2"},O={class:"px-2"},P={class:"px-2 flex"},Y=e("i",{class:"las la-sync-alt text-xl"},null,-1),A={class:"pl-2"},M={class:"px-2 flex"},V=e("i",{class:"las la-print text-xl"},null,-1),E={class:"pl-2"},J={class:"px-2 flex"},L=e("i",{class:"las la-sync-alt text-xl"},null,-1),H={class:"pl-2"},U={key:2,id:"annual-report",class:"anim-duration-500 fade-in-entrance"},q={class:"flex w-full"},I={class:"my-4 flex justify-between w-full"},W={class:"text-secondary"},Z={class:"pb-1 border-b border-dashed"},G={class:"pb-1 border-b border-dashed"},K={class:"pb-1 border-b border-dashed"},Q=["src","alt"],X={class:"bg-box-background shadow rounded my-4 overflow-hidden"},$={class:"border-b border-box-edge overflow-auto"},ee={class:"table ns-table w-full"},te={class:""},re=e("th",{width:"100",class:"border p-2 text-left"},null,-1),se={width:"150",class:"border p-2 text-right"},le={width:"150",class:"border p-2 text-right"},oe={width:"150",class:"border p-2 text-right"},ne={width:"150",class:"border p-2 text-right"},ce={class:"border p-2 text-left"},de={class:"border p-2 text-left"},ue={class:"text-left border p-2"},ie={class:"text-left border p-2"},_e={class:"text-left border p-2"},ae={class:"text-left border p-2"},pe={class:"text-left border p-2"},be={class:"text-left border p-2"},he={class:"text-left border p-2"},me={class:"text-left border p-2"},xe={class:"text-left border p-2"},ye={class:"text-left border p-2"},fe={class:"text-left border p-2"};function ge(u,d,h,we,t,r){const g=C("ns-notice");return o(),n("div",B,[t.timezone===""?(o(),w(g,{key:0,color:"error"},{title:y(()=>[f(s(r.__("An Error Has Occured")),1)]),description:y(()=>[f(s(r.__("Unable to load the report as the timezone is not set on the settings.")),1)]),_:1})):b("",!0),t.timezone!==""?(o(),n("div",N,[e("div",O,[k(e("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=l=>t.year=l),placeholder:"{{ __( 'Year' ) }}",class:"outline-none rounded border-gray-400 border-2 focus:border-blue-400 p-2"},null,512),[[v,t.year]])]),e("div",P,[e("button",{onClick:d[1]||(d[1]=l=>r.loadReport()),class:"rounded flex justify-between bg-white shadow py-1 items-center text-gray-700 px-2"},[Y,e("span",A,s(r.__("Load")),1)])]),e("div",M,[e("button",{onClick:d[2]||(d[2]=l=>r.printSaleReport()),class:"rounded flex justify-between bg-white shadow py-1 items-center text-gray-700 px-2"},[V,e("span",E,s(r.__("Print")),1)])]),e("div",J,[e("button",{onClick:d[3]||(d[3]=l=>r.recomputeForSpecificYear()),class:"rounded flex justify-between bg-white shadow py-1 items-center text-gray-700 px-2"},[L,e("span",H,s(r.__("Recompute")),1)])])])):b("",!0),t.timezone!==""?(o(),n("div",U,[e("div",q,[e("div",I,[e("div",W,[e("ul",null,[e("li",Z,s(r.__("Date : {date}").replace("{date}",t.ns.date.current)),1),e("li",G,s(r.__("Document : Yearly Report")),1),e("li",K,s(r.__("By : {user}").replace("{user}",t.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:u.storeLogo,alt:u.storeName},null,8,Q)])])]),e("div",X,[e("div",$,[e("table",ee,[e("thead",te,[e("tr",null,[re,e("th",se,s(r.__("Sales")),1),e("th",le,s(r.__("Taxes")),1),e("th",oe,s(r.__("Expenses")),1),e("th",ne,s(r.__("Income")),1)])]),e("tbody",null,[e("tr",null,[e("td",ce,s(r.__("January")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[1]?t.report[1][l]:0)),1))),128))]),e("tr",null,[e("td",de,s(r.__("Febuary")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[2]?t.report[2][l]:0)),1))),128))]),e("tr",null,[e("td",ue,s(r.__("March")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[3]?t.report[3][l]:0)),1))),128))]),e("tr",null,[e("td",ie,s(r.__("April")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[4]?t.report[4][l]:0)),1))),128))]),e("tr",null,[e("td",_e,s(r.__("May")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[5]?t.report[5][l]:0)),1))),128))]),e("tr",null,[e("td",ae,s(r.__("June")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[6]?t.report[6][l]:0)),1))),128))]),e("tr",null,[e("td",pe,s(r.__("July")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[7]?t.report[7][l]:0)),1))),128))]),e("tr",null,[e("td",be,s(r.__("August")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[8]?t.report[8][l]:0)),1))),128))]),e("tr",null,[e("td",he,s(r.__("September")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[9]?t.report[9][l]:0)),1))),128))]),e("tr",null,[e("td",me,s(r.__("October")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[10]?t.report[10][l]:0)),1))),128))]),e("tr",null,[e("td",xe,s(r.__("November")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[11]?t.report[11][l]:0)),1))),128))]),e("tr",null,[e("td",ye,s(r.__("December")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(t.report[12]?t.report[12][l]:0)),1))),128))])]),e("tfoot",null,[e("tr",null,[e("td",fe,s(r.__("Total")),1),(o(!0),n(i,null,_(t.labels,(l,c)=>(o(),n("td",{key:c,class:"border p-2 text-right"},s(r.nsCurrency(r.sumOf(l))),1))),128))])])])])])])):b("",!0)])}var Be=T(z,[["render",ge]]);export{Be as default};