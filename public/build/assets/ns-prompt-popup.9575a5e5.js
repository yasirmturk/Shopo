import{_ as r,o as a,a as n,f as e,t as p,k as u,x as c,n as m}from"./bootstrap.b3920df9.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const f={data(){return{title:"",message:"",input:""}},computed:{size(){return this.$popupParams.size||"h-full w-full"}},mounted(){this.input=this.$popupParams.input||"",this.title=this.$popupParams.title,this.message=this.$popupParams.message,this.$popup.event.subscribe(s=>{s.event==="click-overlay"&&(this.$popupParams.reject(!1),this.$popup.close())})},methods:{__:r,emitAction(s){this.$popupParams.onAction(s&&this.input),this.$popup.close()},reject(s){this.$popupParams.reject!==void 0&&this.$popupParams.reject(s),this.$popup.close()}}},h={class:"flex items-center justify-center flex-col flex-auto p-2"},_={class:"text-3xl font-body"},x={class:"w-full md:mx-auto md:w-2/3 py-4 text-center"},v={class:"p-2"},w={class:"ns-input"},P={class:"flex border-t action-buttons"},b=e("hr",{class:"border-r"},null,-1);function $(s,t,j,k,i,o){return a(),n("div",{id:"prompt-popup",class:m([o.size,"w-5/7-screen md:w-3/7-screen flex flex-col shadow-lg"])},[e("div",h,[e("h2",_,p(i.title),1),e("p",x,p(i.message),1)]),e("div",v,[e("div",w,[u(e("textarea",{"onUpdate:modelValue":t[0]||(t[0]=l=>i.input=l),name:"",id:"",cols:"30",rows:"10",class:"w-full border-2 p-2"},null,512),[[c,i.input]])])]),e("div",P,[e("button",{class:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",onClick:t[1]||(t[1]=l=>o.emitAction(!0))},p(o.__("Ok")),1),b,e("button",{class:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",onClick:t[2]||(t[2]=l=>o.reject(!1))},p(o.__("Cancel")),1)])],2)}var z=d(f,[["render",$]]);export{z as default};