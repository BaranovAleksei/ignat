(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{10:function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},11:function(e,t,n){e.exports={pageError:"Error404_pageError__2d0KO",tilt:"Error404_tilt__3_Esn",tiltInner:"Error404_tiltInner__1Rm7W"}},19:function(e,t,n){e.exports={App:"App_App__1Sc4o"}},22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),c=n.n(l),o=(n(27),n(19)),i=n.n(o),u=n(5),s=n(4),m=n.n(s),p=n(8),E=n(6),d=n(9),v=n.n(d),_=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=(e.inputClassName,Object(E.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","inputClassName"])),s="".concat(v.a.error," ").concat(i||""),m="".concat(v.a.errorInput," ").concat(o||"");return r.a.createElement("div",{className:v.a.overlayInput},r.a.createElement("input",Object.assign({placeholder:"enter your text",type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:s}," ",c," "))},f=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(E.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),i=Object(p.a)(o,2),u=i[0],s=i[1],m=l||{},d=m.children,v=m.onDoubleClick,f=m.className,h=Object(E.a)(m,["children","onDoubleClick","className"]),b="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",f);return r.a.createElement("div",{style:{width:"300px"}},u?r.a.createElement(_,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!0),n&&n()},style:{width:"100%",outline:"none"}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),v&&v(e)},className:b,style:{border:"1px solid #4caf50",borderRadius:"5px",fontSize:"1.2em",margin:"10px 0",padding:"5px 10px",display:"block"}},h),d||c.value))},h=n(10),b=n.n(h),g=function(e){var t=e.red,n=Object(E.a)(e,["red"]),a="".concat(t?b.a.red:b.a.default," ").concat(b.a.default);return r.a.createElement("button",Object.assign({className:a},n))};function x(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}x("test",{x:"A",y:1});!function(e,t){var n=localStorage.getItem(e);null!==n&&(t=JSON.parse(n))}("test",{x:"",y:0});var N=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(f,{value:n,onChangeText:l,spanProps:{children:n?void 0:"enter text..."}})),r.a.createElement(g,{style:{margin:"10px 5px"},onClick:function(){x("editable-span-value",n)}},"save"),r.a.createElement(g,{style:{margin:"10px 5px"},onClick:function(){}},"restore"))};var y=function(){return r.a.createElement("div",null,r.a.createElement(N,null))},k=n(11),C=n.n(k),O=n(20),j=n.n(O);var I=function(){return r.a.createElement("div",{className:C.a.pageError},r.a.createElement(j.a,{className:C.a.tilt,options:{max:20}},r.a.createElement("div",{className:C.a.tiltInner},r.a.createElement("img",{src:"https://luchchemical.net/images/404.png",alt:"404"}))))},S=n(1);var w=function(){return r.a.createElement("div",null)};var H=function(){return r.a.createElement("div",null)},B="/pre-junior",J="/junior",P="/junior-plus";var T=function(){return r.a.createElement("div",null,r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/",exact:!0,render:function(){return r.a.createElement(S.a,{to:B})}}),r.a.createElement(S.b,{path:B,render:function(){return r.a.createElement(y,null)}}),r.a.createElement(S.b,{path:J,render:function(){return r.a.createElement(w,null)}}),r.a.createElement(S.b,{path:P,render:function(){return r.a.createElement(H,null)}}),r.a.createElement(S.b,{render:function(){return r.a.createElement(I,null)}})))};var K=function(){return r.a.createElement("div",{className:m.a.nav},r.a.createElement("button",{className:m.a.menuHover},"\u041c\u0435\u043d\u044e"),r.a.createElement("div",{className:m.a.items},r.a.createElement("div",{className:m.a.item},r.a.createElement(u.b,{to:B,activeClassName:m.a.activeLink},"PreJunior")),r.a.createElement("div",{className:m.a.item},r.a.createElement(u.b,{to:J,activeClassName:m.a.activeLink},"Junior")),r.a.createElement("div",{className:m.a.item},r.a.createElement(u.b,{to:P,activeClassName:m.a.activeLink},"JuniorPlus"))))};var A=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(K,null),r.a.createElement(T,null)))};var D=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={nav:"Header_nav__3GoKr",menuHover:"Header_menuHover__TqR6g",items:"Header_items__3iHKw",item:"Header_item__3RWU3",activeLink:"Header_activeLink__3_F4D"}},9:function(e,t,n){e.exports={overlayInput:"SuperInputText_overlayInput__2ODZd",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}}},[[22,1,2]]]);
//# sourceMappingURL=main.1efa6283.chunk.js.map