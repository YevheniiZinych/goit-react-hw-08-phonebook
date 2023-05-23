"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[424],{854:function(e,n,r){r.d(n,{$:function(){return a},a:function(){return i}});var t=r(5243),o=r(184),i=function(){return(0,o.jsx)(t.g4,{height:"40",width:"40",radius:"9",color:"#5260df",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},a=function(){return(0,o.jsx)(t.Z1,{height:"30",width:"30",color:" #394497",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},7376:function(e,n,r){r.d(n,{Y:function(){return a},r:function(){return c}});var t=r(6088),o=r(9164),i=r(6151),a=(0,t.Z)(o.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%"}})),c=(0,t.Z)(i.Z)((function(){return{display:"inline-block",padding:" .75rem 1.25rem",borderRadius:"10rem",color:"#fff",textTransform:"uppercase",fontSize:"1rem",letterSpacing:".15rem",transition:"all .3s",position:"relative",overflow:"hidden",zIndex:1,width:305,"&::after":{content:'""',position:"absolute",bottom:0,left:0,width:"100%",height:"100%",backgroundColor:"#0cf",border:"10rem",zIndex:-2},"&::before":{content:'""',position:"absolute",bottom:0,left:0,width:"0%",height:"100%",backgroundColor:"#2f8da4",transition:"all .3s",borderRadius:"10rem",zIndex:-1},"&:hover::before ":{width:"100%"}}}))},2390:function(e,n,r){r.d(n,{D:function(){return l},l:function(){return c}});var t,o,i=r(168),a=r(7691),c=a.ZP.form(t||(t=(0,i.Z)(["\n  position: relative;\n  font-family: 'Dancing Script', cursive;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n\n  height: 450px;\n  width: 450px;\n  padding: 20px 40px;\n"]))),l=a.ZP.h1(o||(o=(0,i.Z)(["\n  color: black;\n  font-size: 27px;\n"])))},3424:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var t=r(9439),o=r(9434),i=r(2791),a=r(3433),c=r(4942),l=r(3366),s=r(7462),u=r(8182),d=r(4419),p=r(4036),f=r(6934),h=r(1402),m=r(3031),b=r(2071),x=r(890),g=r(5878),v=r(1217);function w(e){return(0,v.Z)("MuiLink",e)}var Z=(0,g.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(8529),k=r(2065),C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(e){var n=e.theme,r=e.ownerState,t=function(e){return C[e]||e}(r.color),o=(0,y.DW)(n,"palette.".concat(t),!1)||r.color,i=(0,y.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,k.Fq)(o,.4)},S=r(184),D=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],R=(0,f.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,p.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,c.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(Z.focusVisible),{outline:"auto"}))})),z=i.forwardRef((function(e,n){var r=(0,h.Z)({props:e,name:"MuiLink"}),o=r.className,c=r.color,f=void 0===c?"primary":c,x=r.component,g=void 0===x?"a":x,v=r.onBlur,Z=r.onFocus,y=r.TypographyClasses,k=r.underline,j=void 0===k?"always":k,z=r.variant,I=void 0===z?"inherit":z,L=r.sx,A=(0,l.Z)(r,D),F=(0,m.Z)(),P=F.isFocusVisibleRef,V=F.onBlur,W=F.onFocus,_=F.ref,M=i.useState(!1),N=(0,t.Z)(M,2),T=N[0],B=N[1],q=(0,b.Z)(n,_),G=(0,s.Z)({},r,{color:f,component:g,focusVisible:T,underline:j,variant:I}),H=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,p.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,d.Z)(i,w,n)}(G);return(0,S.jsx)(R,(0,s.Z)({color:f,className:(0,u.Z)(H.root,o),classes:y,component:g,onBlur:function(e){V(e),!1===P.current&&B(!1),v&&v(e)},onFocus:function(e){W(e),!0===P.current&&B(!0),Z&&Z(e)},ref:q,ownerState:G,variant:I,sx:[].concat((0,a.Z)(Object.keys(C).includes(f)?[]:[{color:f}]),(0,a.Z)(Array.isArray(L)?L:[L]))},A))})),I=r(4875),L=r(9286),A=r(2390),F=r(648),P=r(854),V=r(7376),W=r(1371),_=function(){var e=(0,o.I0)(),n=(0,i.useState)(""),r=(0,t.Z)(n,2),a=r[0],c=r[1],l=(0,i.useState)(""),s=(0,t.Z)(l,2),u=s[0],d=s[1],p=(0,F.a)().isRegistered,f=function(e){var n=e.target,r=n.name,t=n.value;switch(r){case"email":return c(t);case"password":return d(t);default:return}};return(0,S.jsx)(V.Y,{disableGutters:!0,maxWidth:!1,children:(0,S.jsxs)(A.l,{onSubmit:function(n){n.preventDefault();var r=n.currentTarget;e((0,L.Ib)({email:r.elements.email.value,password:r.elements.password.value})),c(""),d("")},autoComplete:"off",children:[(0,S.jsx)(A.D,{children:"Sign in width"}),(0,S.jsx)(z,{href:"https://contacts-04gv.onrender.com/api/auth/google",children:(0,S.jsx)("img",{src:W,style:{height:50},alt:"google-registration-icon"})}),(0,S.jsx)("label",{children:(0,S.jsx)(I.Z,{label:"Email",variant:"outlined",sx:{width:"25ch"},required:!0,type:"email",name:"email",value:a,onChange:f})}),(0,S.jsx)("label",{children:(0,S.jsx)(I.Z,{type:"password",name:"password",required:!0,label:"Password",minLength:"8",maxLength:"20",variant:"outlined",sx:{width:"25ch"},value:u,onChange:f})}),p?(0,S.jsx)(P.$,{}):(0,S.jsx)(V.r,{variant:"contained",type:"submit",children:"Sign in"})]})})},M=r(6088),N=r(9164),T=r(2057),B=(0,M.Z)(N.Z)((function(){return{height:"100vh",backgroundImage:"url(".concat(T,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}));function q(){return(0,S.jsx)("section",{children:(0,S.jsx)(B,{disableGutters:!0,maxWidth:!1,children:(0,S.jsx)(_,{})})})}},1371:function(e,n,r){e.exports=r.p+"static/media/IOS_Google_icon.eed5ff7948fed6db0a84.png"},2057:function(e,n,r){e.exports=r.p+"static/media/pexels-ylanite-koppens-1906440.65c626b002c262e3b400.jpg"}}]);
//# sourceMappingURL=424.968830a4.chunk.js.map