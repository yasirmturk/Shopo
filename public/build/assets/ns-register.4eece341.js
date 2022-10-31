import{s as y,bH as F,m as n,u as h,_ as m,p as d,o as t,a as o,f as s,F as T,r as V,e as p,q as l,t as c,w as g,j as f,h as w,i as v}from"./bootstrap.b3920df9.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";const N={name:"ns-register",data(){return{fields:[],xXsrfToken:null,validation:new y}},mounted(){F([n.get("/api/nexopos/v4/fields/ns.register"),n.get("/sanctum/csrf-cookie")]).subscribe(r=>{this.fields=this.validation.createFields(r[0]),this.xXsrfToken=n.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>h.doAction("ns-register-mounted",this))})},methods:{__:m,register(){if(!this.validation.validateFields(this.fields))return d.error(m("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),h.applyFilters("ns-register-submit",!0)&&n.post("/auth/sign-up",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{d.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},1500)},e=>{this.validation.triggerFieldsErrors(this.fields,e),this.validation.enableFields(this.fields),d.error(e.message).subscribe()})}}},B={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},C={class:"ns-box-body"},S={class:"p-3 -my-2"},j={key:0,class:"py-2 fade-in-entrance anim-duration-300"},E={key:0,class:"flex items-center justify-center"},R={class:"flex w-full items-center justify-center py-4"},H={href:"/sign-in",class:"link hover:underline text-sm"},A={class:"flex ns-box-footer border-t justify-between items-center p-3"};function K(r,e,O,q,a,i){const b=f("ns-field"),k=f("ns-spinner"),u=f("ns-button");return t(),o("div",B,[s("div",C,[s("div",S,[a.fields.length>0?(t(),o("div",j,[(t(!0),o(T,null,V(a.fields,(_,x)=>(t(),w(b,{key:x,field:_},null,8,["field"]))),128))])):p("",!0)]),a.fields.length===0?(t(),o("div",E,[l(k)])):p("",!0),s("div",R,[s("a",H,c(i.__("Already registered ?")),1)])]),s("div",A,[s("div",null,[l(u,{onClick:e[0]||(e[0]=_=>i.register()),type:"info"},{default:g(()=>[v(c(i.__("Register")),1)]),_:1})]),s("div",null,[l(u,{link:!0,href:"/sign-in",type:"success"},{default:g(()=>[v(c(i.__("Sign In")),1)]),_:1})])])])}var J=X(N,[["render",K]]);export{J as default};