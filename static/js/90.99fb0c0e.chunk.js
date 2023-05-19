"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[90],{6835:function(e,n,t){t.d(n,{$:function(){return o},a:function(){return i}});var r=t(5243),a=t(184),i=function(){return(0,a.jsx)(r.g4,{height:"40",width:"40",radius:"9",color:"#5260df",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},o=function(){return(0,a.jsx)(r.Z1,{height:"30",width:"30",color:" #394497",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},7376:function(e,n,t){t.d(n,{Y:function(){return o},r:function(){return l}});var r=t(6088),a=t(9164),i=t(3736),o=(0,r.Z)(a.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%"}})),l=(0,r.Z)(i.Z)((function(){return{display:"inline-block",padding:" .75rem 1.25rem",borderRadius:"10rem",color:"#fff",textTransform:"uppercase",fontSize:"1rem",letterSpacing:".15rem",transition:"all .3s",position:"relative",overflow:"hidden",zIndex:1,width:305,"&::after":{content:'""',position:"absolute",bottom:0,left:0,width:"100%",height:"100%",backgroundColor:"#0cf",border:"10rem",zIndex:-2},"&::before":{content:'""',position:"absolute",bottom:0,left:0,width:"0%",height:"100%",backgroundColor:"#2f8da4",transition:"all .3s",borderRadius:"10rem",zIndex:-1},"&:hover::before ":{width:"100%"}}}))},2390:function(e,n,t){t.d(n,{D:function(){return c},l:function(){return l}});var r,a,i=t(168),o=t(7691),l=o.ZP.form(r||(r=(0,i.Z)(["\n  font-family: 'Dancing Script', cursive;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n\n  height: 450px;\n  width: 450px;\n  padding: 20px 40px;\n"]))),c=o.ZP.h1(a||(a=(0,i.Z)(["\n  color: black;\n"])))},3301:function(e,n,t){t.d(n,{t:function(){return i}});var r=t(6088),a=t(2379),i=(0,r.Z)(a.Z)((function(){return{background:"rgba(255, 255, 255, 0.22)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(3px)","& label.Mui-focused":{color:"#fff"},"& label":{color:"white"},"& fieldset":{outline:"none",border:"none"}}}))},1818:function(e,n,t){t.d(n,{D:function(){return r}});var r={background:{color:{value:"#0d47a1"}},interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"bubble"}},modes:{bubble:{opacity:.8,size:10},repulse:{distance:100,duration:.2}}},particles:{color:{value:"#eef207"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{enable:!0,speed:1.5},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5}},detectRetina:!0}},9090:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(5861),a=t(4687),i=t.n(a),o=t(2791),l=t(7689),c=t(9434),s=t(2431),u=t(2147),d=t(1818),f=t(1430),b=t(9439),p=t(5218),h=t(6835),m=t(2967),x=t(3722),v=t(7376),g=t(2390),w=t(3301),k=t(184),C=function(){var e=(0,o.useState)(""),n=(0,b.Z)(e,2),t=n[0],r=n[1],a=(0,o.useState)(""),i=(0,b.Z)(a,2),l=i[0],s=i[1],u={isLoading:(0,c.v9)(m.Vc),isError:(0,c.v9)(m.by),allContacts:(0,c.v9)(m.K2),filterContact:(0,c.v9)(m.Db),success:(0,c.v9)(m.db)}.isLoading,d=(0,c.v9)(m.K2),f=(0,c.I0)(),C=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return null}};return(0,k.jsxs)(g.l,{onSubmit:function(e){e.preventDefault(),d.items.some((function(e){return e.number===l}))?p.ZP.error("Contact with number ".concat(l," is already exist! ")):(p.ZP.success("The contact was added"),f((0,x.uK)({name:t,number:l})),r(""),s(""))},children:[(0,k.jsx)("h2",{style:{padding:"0 0 10px",color:"#fff"},children:"Create contact"}),(0,k.jsx)("label",{children:(0,k.jsx)(w.t,{type:"text",name:"name",id:"outlined-basic",label:"Name",variant:"outlined",sx:{width:"25ch"},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:C})}),(0,k.jsx)("label",{children:(0,k.jsx)(w.t,{type:"tel",name:"number",id:"outlined-basic",label:"Number",variant:"outlined",sx:{width:"25ch"},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l,onChange:C})}),(0,k.jsx)("br",{}),u?(0,k.jsx)(h.a,{}):(0,k.jsx)(v.r,{variant:"contained",type:"submit",children:"Add contact"})]})},y=t(6088),Z=t(9164),j=t(3736),z=(0,y.Z)(Z.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}})),S=((0,y.Z)(j.Z)((function(){return{display:"inline-block",padding:" .75rem 1.25rem",borderRadius:"10rem",color:"#fff",textTransform:"uppercase",fontSize:"1rem",letterSpacing:".15rem",transition:"all .3s",position:"relative",overflow:"hidden",zIndex:1,width:305,"&::after":{content:'""',position:"absolute",bottom:0,left:0,width:"100%",height:"100%",backgroundColor:"#0cf",border:"10rem",zIndex:-2},"&::before":{content:'""',position:"absolute",bottom:0,left:0,width:"0%",height:"100%",backgroundColor:"#2f8da4",transition:"all .3s",borderRadius:"10rem",zIndex:-1},"&:hover::before ":{width:"100%"}}})),function(){var e=(0,c.I0)(),n=(0,l.TH)();(0,o.useEffect)((function(){e((0,f.Dx)(n.pathname))}),[e,n.pathname]);var t=(0,o.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.R)(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]),a=(0,o.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,k.jsxs)(z,{disableGutters:!0,maxWidth:!1,children:[(0,k.jsx)(s.Z,{id:"tsparticles",init:t,loaded:a,options:d.D}),(0,k.jsx)(C,{})]})})}}]);
//# sourceMappingURL=90.99fb0c0e.chunk.js.map