"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{854:function(e,n,t){t.d(n,{$:function(){return i},a:function(){return a}});var r=t(5243),o=t(184),a=function(){return(0,o.jsx)(r.g4,{height:"40",width:"40",radius:"9",color:"#5260df",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},i=function(){return(0,o.jsx)(r.Z1,{height:"30",width:"30",color:" #394497",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},7376:function(e,n,t){t.d(n,{Y:function(){return i},r:function(){return c}});var r=t(6088),o=t(9164),a=t(6151),i=(0,r.Z)(o.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%"}})),c=(0,r.Z)(a.Z)((function(){return{display:"inline-block",padding:" .75rem 1.25rem",borderRadius:"10rem",color:"#fff",textTransform:"uppercase",fontSize:"1rem",letterSpacing:".15rem",transition:"all .3s",position:"relative",overflow:"hidden",zIndex:1,width:305,"&::after":{content:'""',position:"absolute",bottom:0,left:0,width:"100%",height:"100%",backgroundColor:"#0cf",border:"10rem",zIndex:-2},"&::before":{content:'""',position:"absolute",bottom:0,left:0,width:"0%",height:"100%",backgroundColor:"#2f8da4",transition:"all .3s",borderRadius:"10rem",zIndex:-1},"&:hover::before ":{width:"100%"}}}))},2390:function(e,n,t){t.d(n,{D:function(){return l},l:function(){return c}});var r,o,a=t(168),i=t(7691),c=i.ZP.form(r||(r=(0,a.Z)(["\n  position: relative;\n  font-family: 'Dancing Script', cursive;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n\n  height: 450px;\n  width: 450px;\n  padding: 20px 40px;\n"]))),l=i.ZP.h1(o||(o=(0,a.Z)(["\n  color: black;\n  font-size: 27px;\n"])))},3301:function(e,n,t){t.d(n,{t:function(){return a}});var r=t(6088),o=t(4875),a=(0,r.Z)(o.Z)((function(){return{background:"rgba(255, 255, 255, 0.22)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(3px)","& label.Mui-focused":{color:"#fff"},"& label":{color:"white"},"& fieldset":{outline:"none",border:"none"}}}))},2304:function(e,n,t){t.d(n,{A:function(){return a}});var r=t(9434),o=t(2967),a=function(){return{isLoading:(0,r.v9)(o.Vc),isError:(0,r.v9)(o.by),allContacts:(0,r.v9)(o.K2),filterContact:(0,r.v9)(o.Db),success:(0,r.v9)(o.db)}}},1818:function(e,n,t){t.d(n,{D:function(){return r}});var r={background:{color:{value:"#0d47a1"}},interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"bubble"}},modes:{bubble:{opacity:.8,size:10},repulse:{distance:100,duration:.2}}},particles:{color:{value:"#eef207"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{enable:!0,speed:1.5},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5}},detectRetina:!0}},6305:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(5861),o=t(4687),a=t.n(o),i=t(2791),c=t(7689),l=t(9434),s=t(2431),u=t(2147),d=t(1818),f=t(1430),p=t(9439),b=t(6382),h=t(5218),m=t(854),x=t(2304),v=t(2967),g=t(9272),w=t(7376),k=t(2390),C=t(3301),y=t(184),Z=function(){var e=(0,i.useState)(""),n=(0,p.Z)(e,2),t=n[0],r=n[1],o=(0,i.useState)(""),a=(0,p.Z)(o,2),c=a[0],s=a[1],u=(0,x.A)().isLoading,d=(0,l.v9)(v.K2),f=(0,l.I0)(),Z=function(e){var n=e.target,t=n.name,o=n.value;switch(t){case"name":r(o);break;case"phone":s(o);break;default:return null}};return(0,y.jsxs)(k.l,{onSubmit:function(e){e.preventDefault();var n={name:t,phone:c},o=d.items.some((function(e){return e.phone===c}));o?h.ZP.error("Contact with number ".concat(c," is already exist! ")):(f((0,g.uK)(n)).then(b.SI).then((function(e){h.ZP.success("".concat(e.name," was added to your List of Contacts"))})).catch((function(e){return h.ZP.error("Something wrong ".concat(e.message))})),r(""),s(""))},children:[(0,y.jsx)("h2",{style:{padding:"0 0 10px",color:"#fff"},children:"Create contact"}),(0,y.jsx)("label",{children:(0,y.jsx)(C.t,{type:"text",name:"name",id:"outlined-basic",label:"Name",variant:"outlined",sx:{width:"25ch"},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:Z})}),(0,y.jsx)("label",{children:(0,y.jsx)(C.t,{type:"tel",name:"phone",id:"outlined-basic",label:"Number",variant:"outlined",sx:{width:"25ch"},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:Z})}),(0,y.jsx)("br",{}),u?(0,y.jsx)(m.a,{}):(0,y.jsx)(w.r,{variant:"contained",type:"submit",children:"Add contact"})]})},j=t(6088),z=t(9164),S=t(6151),I=(0,j.Z)(z.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}})),A=((0,j.Z)(S.Z)((function(){return{display:"inline-block",padding:" .75rem 1.25rem",borderRadius:"10rem",color:"#fff",textTransform:"uppercase",fontSize:"1rem",letterSpacing:".15rem",transition:"all .3s",position:"relative",overflow:"hidden",zIndex:1,width:305,"&::after":{content:'""',position:"absolute",bottom:0,left:0,width:"100%",height:"100%",backgroundColor:"#0cf",border:"10rem",zIndex:-2},"&::before":{content:'""',position:"absolute",bottom:0,left:0,width:"0%",height:"100%",backgroundColor:"#2f8da4",transition:"all .3s",borderRadius:"10rem",zIndex:-1},"&:hover::before ":{width:"100%"}}})),function(){var e=(0,l.I0)(),n=(0,c.TH)();(0,i.useEffect)((function(){e((0,f.Dx)(n.pathname))}),[e,n.pathname]);var t=(0,i.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.R)(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]),o=(0,i.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,y.jsxs)(I,{disableGutters:!0,maxWidth:!1,children:[(0,y.jsx)(s.Z,{id:"tsparticles",init:t,loaded:o,options:d.D}),(0,y.jsx)(Z,{})]})})}}]);
//# sourceMappingURL=305.be43adc6.chunk.js.map