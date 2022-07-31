"use strict";(self.webpackChunkteam_project_react=self.webpackChunkteam_project_react||[]).push([[177],{2544:function(e,t,n){n.d(t,{Z:function(){return m}});var a="action-modal_overlay__fcYbf",l="action-modal_modal__ntAmH",r="action-modal_btn__shbkS",s="action-modal_closeBtn__TP7wm",i=n(4164),o=n(2791),c=n(7255),d=n(6602),u=n(184),C=document.querySelector("#modal-root"),m=function(e){var t=e.children,n=e.toggleModal,m=e.logOut,p=(0,o.useContext)(c.N),x="dark"===p?d.Xx.elements:null,h="dark"===p?{stroke:d.Xx.textColor}:null;return(0,i.createPortal)((0,u.jsx)("div",{className:a,children:(0,u.jsxs)("div",{className:l,style:x,children:[(0,u.jsx)("span",{onClick:n,className:s,children:(0,u.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{style:h,d:"M1 1L13 13",stroke:"#52555F",strokeWidth:"2"}),(0,u.jsx)("path",{style:h,d:"M1 13L13 0.999999",stroke:"#52555F",strokeWidth:"2"})]})}),t,(0,u.jsx)("button",{onClick:m,className:r,type:"button",children:"Yes"}),(0,u.jsx)("button",{onClick:n,className:r,type:"button",children:"No"})]})}),C)}},4543:function(e,t,n){n.d(t,{Z:function(){return r}});var a="Container_container__VVOCq",l=n(184);function r(e){var t=e.children;return(0,l.jsx)("div",{className:a,children:t})}},5168:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ie}});var a=n(4543),l=n(885),r="Balance_wrap__-7-60",s="Balance_span__1X3WH",i="Balance_form__Jb6Ni",o="Balance_input__5zeug",c="Balance_button__UsoOP",d=n(2791),u=n(5928),C="ModalNotification_modalWrap__RB0Q9",m="ModalNotification_modal__hDkEQ",p="ModalNotification_textWrap__AiMgM",x="ModalNotification_startText__Ug0W9",h="ModalNotification_prompt__msFnp",_=n(4139),f=n(184),b=function(){var e=(0,d.useState)(!0),t=(0,l.Z)(e,2),n=t[0],a=t[1],r=(0,_.useTransition)(n,{from:{opacity:1},enter:{opacity:1},leave:{opacity:0}});return(0,d.useEffect)((function(){var e=function(e){a((function(e){return!e}))};return setTimeout((function(){e()}),11e3),document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),r((function(e,t){return t?(0,f.jsx)(_.animated.div,{className:C,style:e,children:(0,f.jsx)("div",{className:m,children:(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("span",{className:x,children:"Hello! To get started, enter the current balance of your account!"}),(0,f.jsx)("span",{className:h,children:"You can't spend money until you have it :)"})]})})}):""}))},v=n(1413),j=n(5987),y=n(3587),g=n.n(y),N=n(2181),Z=n.n(N),k=["maskOptions"],S={prefix:"",suffix:" UAH",includeThousandsSeparator:!0,thousandsSeparatorSymbol:" ",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:8,requireDecimal:!0,allowNegative:!1,allowLeadingZeroes:!1},M=function(e){var t=e.maskOptions,n=(0,j.Z)(e,k),a=Z()((0,v.Z)((0,v.Z)({},S),t));return(0,f.jsx)(g(),(0,v.Z)((0,v.Z)({mask:a},n),{},{style:n.themestyle}))};M.defaultProps={inputMode:"numeric",maskOptions:{}};var w,H,E,T,O,V,F,A=M,W=n(7255),L=n(6602),B=n(948),I=function(){var e=(0,u.AR)(),t=(0,l.Z)(e,1)[0],n=(0,u.Nf)().data,a=!(null===n||void 0===n||!n.balance),C=(null===n||void 0===n?void 0:n.transactions.length)>0,m=(0,d.useState)((function(){return null===n||void 0===n?void 0:n.balance})),p=(0,l.Z)(m,2),x=p[0],h=p[1],_="dark"===(0,d.useContext)(W.N)?L.Xx.basic:null,v=function(e){console.log(e);var t=e.floatValue;h(t)};(0,d.useEffect)((function(){if(null!==n&&void 0!==n&&n.balance){var e=function(e){var t=String(e).split("");return-1===(null===t||void 0===t?void 0:t.indexOf("."))?"".concat(t.join(""),".00"):String(e).split(".")[1].length<2?"".concat(e,"0"):e}(null===n||void 0===n?void 0:n.balance);h(e)}}),[null===n||void 0===n?void 0:n.balance]);var j=function(e){"mousedown"===e.type||h("")};return(0,f.jsxs)("div",{className:r,style:_,children:[(0,f.jsx)("span",{className:s,style:_,children:"Balance:"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(x)},className:i,children:[(0,f.jsx)(A,{themestyle:_,placeholder:"00.00 UAH",type:"text",className:o,onChange:v,onClick:j,value:String(x)}),(0,f.jsx)(B.Z,{suffix:" UAH",decimalScale:2,placeholder:"00.00 UAH",thousandSeparator:" ",fixedDecimalScale:!0,className:o,id:"amount",name:"amount",onValueChange:v,value:x,onClick:j,isNumericString:!0,disabled:!(!a&&!C)}),(0,f.jsx)("button",{type:"submit",className:"".concat(c," ballance-btn"),disabled:!(!a&&!C),children:"CONFIRM"})]}),!a&&!C&&(0,f.jsx)(b,{})]})},P=n(3504),X=n(143),D="ReportLink_link__yJxke",R="ReportLink_span__GYvVt",U=function(){var e="dark"===(0,d.useContext)(W.N)?L.Xx.basic:null;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(P.rU,{to:"/report",className:D,children:[(0,f.jsx)("span",{className:R,style:e,children:"Reports"}),(0,f.jsx)(X.Z,{})]})})},q=n(5048),z="ModalAddExpense_overlay__+2oyh",Y="ModalAddExpense_modal__Ajxov",G={form:"FormAddExpense_form__92RYV",calendar:"FormAddExpense_calendar__6yb6X",description:"FormAddExpense_description__GYfd1",input:"FormAddExpense_input__68Uje",arrow:"FormAddExpense_arrow__fbYaO",inputWrap:"FormAddExpense_inputWrap__oatVl",select:"FormAddExpense_select__HohpP",buttonWrap:"FormAddExpense_buttonWrap__QCwnT",buttonInput:"FormAddExpense_buttonInput__ZihK6",buttonClear:"FormAddExpense_buttonClear__eXE00",calculateWrap:"FormAddExpense_calculateWrap__+c4BE",calculate:"FormAddExpense_calculate__-6SMR",currencyWrapp:"FormAddExpense_currencyWrapp__vRZ3x",inputTablet:"FormAddExpense_inputTablet__LPVU4",exitBtn:"FormAddExpense_exitBtn__33I3g"},J=n(772),Q=n(5442),K=n(4752),$=n(7317),ee=["title","titleId"];function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function ae(e,t){var n=e.title,a=e.titleId,l=ne(e,ee);return d.createElement("svg",te({width:21,height:20,viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),n?d.createElement("title",{id:a},n):null,w||(w=d.createElement("path",{d:"M17.5424 0H3.18071C2.19083 0 1.3855 0.788555 1.3855 1.75781V18.2422C1.3855 19.2114 2.19083 20 3.18071 20H17.5424C18.5323 20 19.3376 19.2114 19.3376 18.2422V1.75781C19.3376 0.788555 18.5323 0 17.5424 0ZM18.1408 18.2422C18.1408 18.5653 17.8724 18.8281 17.5424 18.8281H3.18071C2.85075 18.8281 2.58231 18.5653 2.58231 18.2422V1.75781C2.58231 1.43473 2.85075 1.17188 3.18071 1.17188H17.5424C17.8724 1.17188 18.1408 1.43473 18.1408 1.75781V18.2422Z",fill:"#52555F"})),H||(H=d.createElement("path",{d:"M16.3457 2.34375H4.37758C4.0471 2.34375 3.77917 2.60609 3.77917 2.92969V7.69531C3.77917 8.01891 4.0471 8.28125 4.37758 8.28125H16.3457C16.6761 8.28125 16.9441 8.01891 16.9441 7.69531V2.92969C16.9441 2.60609 16.6761 2.34375 16.3457 2.34375ZM15.7473 7.10938H4.97598V3.51562H15.7473V7.10938Z",fill:"#52555F"})),E||(E=d.createElement("path",{d:"M6.7712 9.45312H4.37758C4.0471 9.45312 3.77917 9.71547 3.77917 10.0391V12.3828C3.77917 12.7064 4.0471 12.9688 4.37758 12.9688H6.7712C7.10167 12.9688 7.3696 12.7064 7.3696 12.3828V10.0391C7.3696 9.71547 7.10167 9.45312 6.7712 9.45312ZM6.17279 11.7969H4.97598V10.625H6.17279V11.7969Z",fill:"#52555F"})),T||(T=d.createElement("path",{d:"M6.7712 14.1406H4.37758C4.0471 14.1406 3.77917 14.403 3.77917 14.7266V17.0703C3.77917 17.3939 4.0471 17.6562 4.37758 17.6562H6.7712C7.10167 17.6562 7.3696 17.3939 7.3696 17.0703V14.7266C7.3696 14.403 7.10167 14.1406 6.7712 14.1406ZM6.17279 16.4844H4.97598V15.3125H6.17279V16.4844Z",fill:"#52555F"})),O||(O=d.createElement("path",{d:"M11.5584 9.45312H9.16481C8.83433 9.45312 8.56641 9.71547 8.56641 10.0391V12.3828C8.56641 12.7064 8.83433 12.9688 9.16481 12.9688H11.5584C11.8889 12.9688 12.1568 12.7064 12.1568 12.3828V10.0391C12.1568 9.71547 11.8889 9.45312 11.5584 9.45312ZM10.96 11.7969H9.76322V10.625H10.96V11.7969Z",fill:"#52555F"})),V||(V=d.createElement("path",{d:"M11.5584 14.1406H9.16481C8.83433 14.1406 8.56641 14.403 8.56641 14.7266V17.0703C8.56641 17.3939 8.83433 17.6562 9.16481 17.6562H11.5584C11.8889 17.6562 12.1568 17.3939 12.1568 17.0703V14.7266C12.1568 14.403 11.8889 14.1406 11.5584 14.1406ZM10.96 16.4844H9.76322V15.3125H10.96V16.4844Z",fill:"#52555F"})),F||(F=d.createElement("path",{d:"M16.3457 9.45312H13.952C13.6216 9.45312 13.3536 9.71547 13.3536 10.0391V17.0703C13.3536 17.3939 13.6216 17.6562 13.952 17.6562H16.3457C16.6761 17.6562 16.9441 17.3939 16.9441 17.0703V10.0391C16.9441 9.71547 16.6761 9.45312 16.3457 9.45312ZM15.7473 16.4844H14.5504V10.625H15.7473V16.4844Z",fill:"#52555F"})))}var le,re=d.forwardRef(ae),se=(n.p,n(7606)),ie=n(6351),oe=function(e){var t=e.expense,n=e.handleClick,a=(0,u.qS)(),r=(0,l.Z)(a,1)[0],s=(0,u.M8)(),i=(0,l.Z)(s,1)[0],o=(0,d.useState)(new Date),c=(0,l.Z)(o,2),C=c[0],m=c[1],p=(0,q.v9)(ie.dz),x=(0,d.useContext)(W.N),h="dark"===x?"".concat(L.Xx.backgroundColor):"#C7CCDC",_={option:function(e,t){return(0,v.Z)((0,v.Z)({},e),{},{color:t.isSelected?"#52555F":"#C7CCDC",backgroundColor:t.isSelected?"#C7CCDC":"".concat(h)})},singleValue:function(e,t){return(0,v.Z)((0,v.Z)({},e),{},{color:"#52555F"})},control:function(e,t){return(0,v.Z)((0,v.Z)({},e),{},{border:"2px solid #ffffff",borderRadius:"0 0 20px 0",height:"44px",width:"280px"})},indicatorSeparator:function(e,t){return(0,v.Z)((0,v.Z)({},e),{},{display:"none"})}},b="dark"===x?{background:"white",marginRight:"5px",borderRadius:"16px"}:{},j="dark"===x?L.Xx.basic:null;return(0,f.jsxs)("div",{className:G.formWrap,children:[(0,f.jsx)("div",{className:G.exitBtn,children:(0,f.jsx)(K.Z,{color:"warning",onClick:n,"aria-label":"button close",component:"button",children:(0,f.jsx)($.Z,{})})}),(0,f.jsxs)("form",{className:G.form,onSubmit:function(e){e.preventDefault();var a=e.currentTarget,l=a.amount,s=a.amountTablet,o=a.description,c=a.category,d=a.date,u="";console.log(l),console.log(s),u=l.value?Number.parseFloat(l.value.split(" ").join("")):Number.parseFloat(s.value.split(" ").join(""));var C={description:o.value,amount:u,date:d.value,category:c.value};t?r(C):i(C),e.target.reset(),"mobile"===p&&n()},children:[(0,f.jsxs)("div",{className:G.inputWrap,children:[(0,f.jsx)("div",{style:b,children:(0,f.jsx)(Q.Z,{value:C,calendarIcon:(0,f.jsx)(J.Z,{}),clearIcon:null,prevLabel:null,prev2Label:null,nextLabel:null,next2Label:null,className:G.calendar,calendarClassName:G.calendar,name:"date",onChange:m,format:"dd.MM.y"})}),(0,f.jsx)("input",{style:j,type:"text",id:"description",name:"description",className:G.description,placeholder:"Product description"}),(0,f.jsx)(se.ZP,{style:b,type:"text",id:"category",name:"category",options:t?[{value:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",label:"Transport"},{value:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",label:"Products"},{value:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",label:"Health"},{value:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c",label:"Alcohol"},{value:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",label:"Entertainment"},{value:"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430",label:"Housing"},{value:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430",label:"Technique"},{value:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c",label:"Communal, communication"},{value:"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438",label:"Sports, hobbies"},{value:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",label:"Education"},{value:"\u041f\u0440\u043e\u0447\u0435\u0435",label:"Other"}]:[{value:"\u0417/\u041f",label:"Salary"},{value:"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434",label:"Extra income"}],styles:_,placeholder:"Product category",className:G.select}),(0,f.jsxs)("div",{className:G.currencyWrapp,children:[(0,f.jsx)(B.Z,{style:j,suffix:" UAH",decimalScale:2,inputMode:"numeric",placeholder:"00.00 UAH",thousandSeparator:" ",fixedDecimalScale:!0,className:G.input,id:"amount",name:"amount"}),(0,f.jsx)(B.Z,{decimalScale:2,inputMode:"numeric",placeholder:"0.00",thousandSeparator:" ",fixedDecimalScale:!0,className:G.inputTablet,id:"amountTablet",name:"amountTablet"}),(0,f.jsx)("div",{className:G.calculateWrap,children:(0,f.jsx)(re,{width:"20",height:"20"})})]})]}),(0,f.jsxs)("div",{className:G.buttonWrap,children:[(0,f.jsx)("button",{type:"submit",className:G.buttonInput,children:"Input"}),(0,f.jsx)("button",{type:"reset",className:G.buttonClear,children:"Clear"})]})]})]})},ce=n(4164),de=document.querySelector("#mobileModal-root"),ue=function(e){var t=e.handleClick,n=e.expense,a="dark"===(0,d.useContext)(W.N)?L.Xx.elements:null;return(0,ce.createPortal)((0,f.jsx)("div",{className:z,id:"backDrop",children:(0,f.jsx)("div",{className:Y,style:a,children:(0,f.jsx)(oe,{expense:n,handleClick:t})})}),de)},Ce=n(4220),me="TransactionItem_deleteBox__OVoeM",pe="TransactionItem_deleteIcon__0eKBJ",xe=["title","titleId"];function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},he.apply(this,arguments)}function _e(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function fe(e,t){var n=e.title,a=e.titleId,l=_e(e,xe);return d.createElement("svg",he({width:83,height:90,viewBox:"0 0 83 90",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),n?d.createElement("title",{id:a},n):null,le||(le=d.createElement("path",{d:"M41.6532 89.3955C37.6792 89.396 33.7794 88.5391 29.9828 86.8268C25.6043 84.852 21.3987 82.4265 17.4834 79.6179C17.3122 79.4951 17.1509 79.3648 16.9984 79.227L12.7866 82.6038C12.4945 82.8387 12.0856 82.8649 11.7655 82.6689C11.6197 82.5798 8.15646 80.4477 5.22441 77.0381C2.28214 73.617 0.992591 70.257 0.939248 70.116C0.822784 69.8084 0.886795 69.4613 1.10505 69.2158L3.69349 66.2995C3.75706 66.2281 3.82907 66.1696 3.90641 66.124C2.58308 63.5579 0.806782 58.7835 0.16623 50.9221C-0.400533 43.9606 0.483616 38.2522 2.79378 33.9552C2.91736 33.7251 3.10006 33.3488 3.29787 32.9423C3.63659 32.2464 3.98643 31.5261 4.2278 31.1329C4.46562 30.7455 4.72433 30.2991 5.01149 29.8044C7.23942 25.9635 11.3859 18.8149 20.8599 13.3672C28.8893 8.75053 32.8846 8.27047 36.4092 7.84671C38.506 7.59493 40.3161 7.37684 42.753 6.28995C48.9531 3.52574 50.1915 1.26374 50.2035 1.24114C50.3218 1.01596 50.5351 0.843968 50.7827 0.782797C51.029 0.72074 51.2957 0.761077 51.5055 0.905583C52.155 1.35328 55.3973 3.70083 55.4324 5.96947C55.4498 7.06922 55.067 7.82189 54.7874 8.37065C54.5007 8.93404 54.5109 8.94734 54.6318 9.10825C54.7616 9.28024 54.9981 9.3751 55.3733 9.51561C56.2686 9.85116 57.6212 10.3574 57.6839 12.962C57.7341 15.0365 56.6357 16.1948 55.7418 17.0348C57.5088 17.9133 62.0398 20.3105 65.6337 23.4506C67.9554 25.479 69.7762 27.8505 70.8955 29.4817C71.7489 30.7264 72.2633 31.5473 72.5571 32.1094C73.7022 31.491 74.4805 31.2255 75.0855 31.019C75.7954 30.7769 76.1866 30.6431 76.8009 30.0752C78.8444 28.1865 82.1831 29.671 82.5868 29.9494C82.8148 30.1063 82.9628 30.3536 82.9931 30.6271C83.0495 31.1351 82.7584 31.4494 82.2294 32.0199C81.3497 32.9684 79.52 34.9423 78.6412 38.2916C77.854 41.293 78.0184 44.7811 78.1634 47.8578C78.2549 49.8006 78.3412 51.6353 78.1656 53.0857C77.5917 57.8269 76.3973 67.6936 69.0952 75.804C65.6035 79.6826 61.2214 83.0705 56.6886 85.4456C56.6095 85.5054 56.5215 85.5502 56.4286 85.5808C55.3102 86.1566 54.1842 86.6699 53.0609 87.1136C49.2091 88.6353 45.3978 89.3955 41.6532 89.3955ZM36.7711 87.1242C43.4135 88.3645 49.8808 86.8786 55.5178 84.0386C55.9085 83.2456 57.0394 80.5922 56.9549 76.5802C56.8562 71.8523 56.0343 70.3589 56.0259 70.3448C55.7871 69.9259 55.9227 69.3846 56.3375 69.1373C56.7522 68.8895 57.2847 69.0101 57.5417 69.4179C57.6519 69.593 58.6227 71.2792 58.733 76.543C58.7872 79.1543 58.3769 81.2421 57.9319 82.7119C61.7579 80.4322 65.1158 77.57 67.7718 74.6205C69.1503 73.0895 70.2998 71.488 71.2613 69.8678C70.9359 69.0748 70.2034 66.7836 70.6012 62.9364C71.0644 58.4559 71.2346 56.0126 71.2364 55.9887C71.2698 55.5002 71.7014 55.1363 72.1841 55.1651C72.6744 55.1983 73.0443 55.6216 73.01 56.1101C73.0083 56.1349 72.8362 58.6035 72.3699 63.1186C72.1663 65.092 72.2886 66.5898 72.4753 67.6213C75.3176 61.8256 76.0092 56.1092 76.4008 52.8738C76.5582 51.5711 76.4755 49.8082 76.3879 47.942C76.2368 44.7376 76.0657 41.1064 76.9218 37.8439C77.8371 34.3559 79.64 32.218 80.6811 31.0806C79.853 30.8656 78.6848 30.7517 78.01 31.3762C77.1187 32.1998 76.4435 32.4303 75.6616 32.6972C74.9224 32.9489 74.0031 33.2628 72.4033 34.2491C70.9266 35.1595 70.8915 36.3528 70.9564 38.2252C70.9999 39.4636 71.0484 40.8675 70.3229 42.1082C69.0543 44.278 67.5096 43.7793 66.4881 43.4517C65.9351 43.2735 65.4541 43.1184 64.9527 43.2345C64.9056 43.6175 65.2341 44.6911 65.4781 45.489C66.0391 47.3228 66.8068 49.8339 66.3912 52.3685C66.1587 53.7843 65.7328 54.6504 65.0505 55.0941C64.2543 55.6128 63.4067 55.396 62.7261 55.2205C61.8313 54.9909 61.657 55.0117 61.4001 55.3836C60.4164 56.8029 60.1417 58.0986 59.7612 59.8916C59.6007 60.6474 59.4184 61.5042 59.1597 62.4679C58.7556 63.9732 57.98 65.026 56.8535 65.5969C55.1422 66.4648 52.6773 66.2259 49.0985 64.8451C46.082 63.6816 43.3362 63.4138 41.5643 63.3948C41.555 63.3948 41.5456 63.3948 41.5363 63.3948C40.7637 63.3948 40.0663 63.7547 39.299 64.3168C34.1666 69.222 28.5146 71.9897 22.9447 72.2411C21.8685 72.2894 20.735 72.2495 19.5873 72.144C18.336 72.4574 17.5816 73.4219 17.2744 74.3435C16.8917 75.4907 17.018 77.1006 18.5218 78.1786C22.342 80.9189 26.4444 83.2855 30.7158 85.2115C32.0067 85.7935 33.2989 86.259 34.5862 86.6171C35.1539 86.1898 37.7806 84.1122 40.2032 80.5279C40.016 80.1051 38.9221 77.5461 38.7896 75.2797C38.7238 74.1493 38.6856 72.6959 38.8759 72.1901L40.5401 72.8142C40.5401 72.8142 40.5512 72.7943 40.5637 72.7411C40.5588 72.7615 40.453 73.2628 40.565 75.1764C40.6344 76.3661 41.0353 77.7052 41.3709 78.6445C44.0736 73.9729 44.471 72.3084 44.4746 72.2916C44.5817 71.8182 45.0533 71.515 45.529 71.6161C46.0051 71.7176 46.3118 72.1781 46.2149 72.6537C46.1758 72.8466 45.7446 74.687 42.6903 79.91C40.6188 83.4522 38.2109 85.8644 36.7711 87.1242ZM2.80756 69.9733C3.25964 70.9862 4.47273 73.4401 6.57486 75.8843C8.67522 78.3271 11.1276 80.1086 12.1767 80.8183L15.5039 78.1503C14.2855 77.2176 12.3301 75.7012 11.0823 74.6316C7.78307 71.8067 5.40667 68.5544 5.30709 68.417C5.2662 68.3607 5.2333 68.3013 5.20708 68.2406C5.10439 68.1049 4.97504 67.9258 4.82524 67.7002L2.80756 69.9733ZM8.72278 69.7911C9.65983 70.8505 10.8743 72.117 12.2403 73.2867C13.076 74.0026 14.2655 74.9459 15.3186 75.765C15.2803 75.1143 15.3666 74.4445 15.5875 73.7827C15.8475 73.0026 16.2658 72.3253 16.8006 71.7787C13.7374 71.2668 10.7938 70.4441 8.72278 69.7911ZM6.66555 67.2206C7.88308 67.6648 13.9352 69.7924 19.5037 70.3519C19.8509 70.2885 20.2123 70.2601 20.5799 70.2663C22.2975 70.2973 23.94 70.1759 25.4572 69.8997C31.0319 68.8838 34.6645 65.8407 36.8346 64.0224C37.2169 63.7015 37.5601 63.4152 37.8655 63.1762C37.9619 63.1009 38.0597 63.026 38.1584 62.952C39.6933 61.4741 41.1838 59.7919 42.6107 57.9164C48.2517 50.5019 47.9009 46.9562 47.7325 45.2527L47.7085 45.0049C47.6689 44.5643 47.4208 43.766 47.1581 42.9216C46.4754 40.7256 45.5405 37.7185 46.4238 35.4995C47.239 33.4516 49.3154 33.2672 51.3228 33.089C52.7626 32.9614 54.2518 32.8288 55.4124 32.0615C57.8995 30.4166 56.646 26.1842 55.5138 23.9435C55.0661 23.0579 54.5145 22.3916 54.0277 21.8043C53.1934 20.7977 52.331 19.7564 52.7257 18.1864C52.9778 17.1833 53.6748 16.5352 54.3482 15.9084C55.2026 15.1132 55.9409 14.4261 55.9067 13.0055C55.8725 11.5972 55.4729 11.4478 54.7483 11.1761C54.2624 10.9944 53.6579 10.7678 53.2107 10.1739C52.4141 9.11711 52.8693 8.2226 53.2014 7.56922C53.4396 7.10113 53.6646 6.65875 53.6543 5.99784C53.6419 5.1676 52.3537 3.82184 51.1935 2.88787C50.2902 3.94285 48.1783 5.81388 43.4793 7.90921C40.7966 9.10514 38.7692 9.34894 36.6226 9.60692C33.2665 10.0103 29.4627 10.4673 21.7481 14.9031C12.6861 20.1137 8.84547 26.7352 6.55086 30.6923C6.2557 31.2007 5.98899 31.6599 5.74495 32.0584C5.54891 32.378 5.18796 33.12 4.89858 33.7158C4.68788 34.1484 4.49318 34.5483 4.3616 34.7934C2.37193 38.4929 1.5269 43.3839 1.8434 49.3481C3.17429 44.8795 5.89208 38.2354 11.2717 32.0611C20.2896 21.7103 37.8103 16.0622 38.5518 15.8269C39.0212 15.6797 39.52 15.9368 39.6684 16.4031C39.8173 16.8694 39.5591 17.3681 39.0914 17.5166C38.923 17.5702 22.9963 22.7064 13.9614 31.7805C15.7124 32.3554 19.7784 33.5075 22.6056 32.8625C23.7684 32.5979 24.7735 32.3465 25.6599 32.1245C27.854 31.5748 29.4392 31.1777 31.3048 31.1054C31.3164 31.1045 31.3288 31.1045 31.3399 31.1045C31.8151 31.1045 32.2094 31.4791 32.2276 31.9565C32.2467 32.4458 31.8649 32.8581 31.3741 32.8767C29.773 32.9392 28.3279 33.2849 26.3898 33.7694L28.122 35.4273C28.4763 35.7668 28.4879 36.3275 28.1483 36.6808C27.8073 37.0341 27.2455 37.0456 26.8912 36.707L24.3499 34.2748C23.9253 34.3772 23.4764 34.4835 23.0003 34.5917C19.1321 35.4703 13.6845 33.5855 12.635 33.1998C12.6279 33.2078 12.6208 33.2162 12.6137 33.2242C9.72695 36.5376 7.63371 40.0244 6.12501 43.2066C8.49519 41.9207 12.3652 40.2611 14.8283 41.4872C16.4641 42.301 17.7087 43.7656 18.9134 45.1818C20.2296 46.7301 21.4729 48.1925 23.1021 48.7421C23.5671 48.899 23.8164 49.4021 23.6591 49.8662C23.5017 50.3299 22.9981 50.579 22.5318 50.4217C20.4359 49.7142 18.9725 47.993 17.5572 46.3285C17.0433 45.7239 16.5419 45.1344 16.0258 44.6091C15.6528 45.7607 15.031 47.9394 15.011 49.7182C14.9825 52.251 16.2507 55.8375 16.2632 55.8734C16.4276 56.3349 16.1863 56.842 15.724 57.006C15.2617 57.1709 14.7527 56.9297 14.5882 56.4683C14.5313 56.31 13.2004 52.5502 13.2324 49.6987C13.2604 47.1951 14.2802 44.1751 14.5655 43.3781C14.3922 43.266 14.2157 43.1645 14.0348 43.0741C11.8157 41.9712 6.72022 44.801 5.10973 45.8799C5.04883 45.9207 4.98482 45.9531 4.91858 45.977C2.91069 51.0227 2.42261 54.7644 2.41461 54.83C2.41327 54.8384 2.41239 54.8464 2.41105 54.8548C3.63704 62.8793 6.08856 66.4688 6.66555 67.2206ZM41.8724 61.6261C43.7936 61.6727 46.6345 61.9932 49.7399 63.1909C52.7302 64.3447 54.8532 64.6217 56.0481 64.0153C56.7144 63.678 57.17 63.0215 57.4425 62.0087C57.6888 61.0911 57.8582 60.2946 58.0213 59.5246C58.4129 57.6806 58.7508 56.088 59.9372 54.3761C60.9387 52.9301 62.3354 53.2892 63.1693 53.5037C63.5302 53.5959 63.9387 53.7014 64.0788 53.6092C64.1361 53.572 64.4326 53.3228 64.6366 52.0817C64.9856 49.9553 64.3157 47.7656 63.7774 46.0063C63.2782 44.3737 62.9172 43.1942 63.4098 42.3134C63.5618 42.0421 63.8658 41.6857 64.4539 41.5315C65.4768 41.2633 66.3405 41.5408 67.0348 41.7642C68.007 42.0763 68.239 42.1525 68.7876 41.2146C69.2539 40.4167 69.2183 39.3821 69.1801 38.2868C69.1214 36.601 69.0489 34.5301 71.0235 33.0443C70.3772 31.8776 68.027 27.9001 64.4619 24.7844C60.7102 21.506 55.7298 18.9998 54.5212 18.4138C54.4918 18.4803 54.4678 18.5481 54.4505 18.6172C54.2882 19.2631 54.5492 19.6487 55.3986 20.6744C55.9183 21.3012 56.5646 22.0818 57.102 23.1448C58.8361 26.577 59.6918 31.3585 56.3957 33.5389C54.859 34.5549 53.0645 34.714 51.4811 34.855C49.5692 35.0248 48.469 35.1688 48.077 36.1538C47.4249 37.7912 48.2525 40.453 48.8566 42.3968C49.1607 43.3742 49.423 44.2186 49.4799 44.8458L49.5021 45.0781C49.6932 47.0072 50.0897 51.0201 44.0278 58.9883C43.3242 59.912 42.6049 60.7919 41.8724 61.6261Z"})))}var be=d.forwardRef(fe);n.p;function ve(e){var t=e.description,n=e.category,a=e.amount,l=e.date,r=e.id,s=e.expenses,i=e.handleClick,o=e.themeStyle;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{style:o,children:l}),(0,f.jsx)("td",{style:o,children:t}),(0,f.jsx)("td",{style:o,children:n}),(0,f.jsxs)("td",{style:s?{color:"#e7192e",fontWeight:"700",fontSize:"12px",lineHeight:"14px"}:{color:"#407946",fontWeight:"700",fontSize:"12px",lineHeight:"14px"},children:[a,".00 \u0433\u0440\u043d."]}),(0,f.jsxs)("td",{children:[(0,f.jsx)(K.Z,{onClick:function(e){return i(e)},"aria-label":"button delete",component:"label",id:r,children:(0,f.jsx)(Ce.Z,{})}),(0,f.jsx)("div",{className:me,id:"delete".concat(r),children:(0,f.jsx)(be,{className:pe,width:"50",height:"100%",fill:"#FF751D"})})]})]})})}var je="TransactionList_tableBody__iYd9N",ye="TransactionList_table__d1vG4";function ge(e){var t=e.transactions,n=e.expenses,a=e.handleClick,l=(0,d.useContext)(W.N),r="dark"===l?(0,v.Z)((0,v.Z)({},L.Xx.inputsElements),{},{borderRadius:"16px"}):null,s="dark"===l?L.Xx.basic:null,i="dark"===l?{borderRightColor:L.Xx.elementsColor,borderBottomColor:L.Xx.elementsColor}:null;return(0,f.jsxs)("div",{className:ye,style:r,children:[(0,f.jsx)("table",{children:(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{style:s,children:"Date"}),(0,f.jsx)("th",{style:s,children:"Description"}),(0,f.jsx)("th",{style:s,children:"category"}),(0,f.jsx)("th",{style:s,children:"Sum"}),(0,f.jsx)("th",{style:s,children:"\xa0"})]})})}),(0,f.jsx)("div",{className:je,children:(0,f.jsx)("table",{children:(0,f.jsx)("tbody",{children:t.map((function(e){var t=e.description,l=e.category,r=e.amount,o=e.date,c=e._id;return(0,f.jsx)(ve,{themeStyle:s,tableBorderColor:i,description:t,category:l,amount:r,date:o,id:c,expenses:n,handleClick:a},c)}))})})})]})}var Ne="Summary_table__d1qzU";function Ze(e){var t=e.monthStats,n=Object.entries(t),a="dark"===(0,d.useContext)(W.N)?L.Xx.basic:null;return(0,f.jsx)("table",{className:Ne,children:(0,f.jsxs)("tbody",{children:[(0,f.jsx)("tr",{children:(0,f.jsx)("th",{colSpan:"2",style:a,children:"Summary"})}),n.filter((function(e){var t=(0,l.Z)(e,2);t[0];return"N/A"!==t[1]})).map((function(e){var t=(0,l.Z)(e,2),n=t[0],r=t[1];return(0,f.jsxs)("tr",{style:a,children:[(0,f.jsx)("td",{style:a,children:n}),(0,f.jsx)("td",{style:a,children:r})]},n)}))]})})}var ke="TransactionHistory_wrap__no1F9";function Se(e){var t=e.transactions,n=e.monthStats,a=e.expenses,l=e.handleClick;return(0,f.jsxs)("div",{className:ke,children:[t&&(0,f.jsx)(ge,{transactions:t,expenses:a,handleClick:l}),n&&(0,f.jsx)(Ze,{monthStats:n})]})}var Me="MobileTransaction_description__B2U-U",we="MobileTransaction_mobTable__mMx4q",He="MobileTransaction_amount__5yzzH",Ee="MobileTransaction_income__yhNqm",Te="MobileTransaction_expense__H8Hfw",Oe="MobileTransaction_descriptionItem__r6jFk",Ve="MobileTransaction_date__xQvPT";function Fe(e){var t=e.handleClick,n=(0,d.useState)(),a=(0,l.Z)(n,2),r=a[0],s=a[1],i=(0,u.Nf)().data;(0,d.useEffect)((function(){i&&s(i.transactions)}),[i]);var o=function(e){if("\u0417/\u041f"===e||"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"===e)return!0};return(0,f.jsx)("table",{className:we,children:null===r||void 0===r?void 0:r.map((function(e){var n=e.description,a=e.category,l=e.amount,r=e.date,s=e._id;return(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{colSpan:"2",className:Oe,children:(0,f.jsx)("span",{className:Me,children:n})}),(0,f.jsxs)("td",{rowSpan:"2",className:"".concat(He," ").concat(o(a)?Ee:Te),children:[l,".00 \u0433\u0440\u043d"]}),(0,f.jsx)("td",{rowSpan:"2",children:(0,f.jsx)(K.Z,{sx:{ml:3},onClick:function(e){return t(e)},"aria-label":"button delete",component:"label",id:s,children:(0,f.jsx)(Ce.Z,{})})})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:Ve,children:r}),(0,f.jsx)("td",{children:a})]})]},s)}))})}var Ae=n(2544),We={btn:"Transactions_btn__27aoR",deskWrap:"Transactions_deskWrap__4NnhL",text:"Transactions_text__XOOZe",isActive:"Transactions_isActive__xWfmj",wrap:"Transactions_wrap__Gf7Vs",mobileWrap:"Transactions_mobileWrap__SrJyW",transactionContainer:"Transactions_transactionContainer__KBxe+"};function Le(){var e=(0,d.useState)("false"),t=(0,l.Z)(e,2),n=t[0],a=t[1],r=(0,d.useState)("false"),s=(0,l.Z)(r,2),i=s[0],o=s[1],c=(0,d.useState)(null),C=(0,l.Z)(c,2),m=C[0],p=C[1],x=(0,d.useState)(!0),h=(0,l.Z)(x,2),_=h[0],b=h[1],v=(0,d.useState)([]),j=(0,l.Z)(v,2),y=j[0],g=j[1],N=(0,d.useState)({}),Z=(0,l.Z)(N,2),k=Z[0],S=Z[1],M=(0,u.FF)().data,w=(0,u.yp)().data,H=(0,u.yC)(),E=(0,l.Z)(H,1)[0],T=(0,d.useContext)(W.N),O="dark"===T?L.Xx.elements:null,V="dark"===T?{color:L.Xx.textColor}:null,F=(0,q.v9)(ie.dz);(0,d.useEffect)((function(){_?(g(null===M||void 0===M?void 0:M.expenses),S(null===M||void 0===M?void 0:M.monthsStats)):(g(null===w||void 0===w?void 0:w.incomes),S(null===w||void 0===w?void 0:w.monthsStats))}),[M,_,w]);var A=function(e){e.preventDefault(),p(e.currentTarget.id),a(!n)};return(0,f.jsxs)("div",{className:We.transactionContainer,children:[(0,f.jsx)("div",{className:We.btnWrap}),(0,f.jsxs)("button",{style:_?null:O,className:"".concat(We.btn," ").concat(_?We.isActive:""),type:"button",onClick:function(){b(!0),"mobile"===F&&o(!i)},children:["mobile"===F&&"Add ","Expenses"]}),(0,f.jsxs)("button",{style:_?O:null,className:"".concat(We.btn," ").concat(_?"":We.isActive),type:"button",onClick:function(){b(!1),"mobile"===F&&o(!i)},children:["mobile"===F&&"Add ","Income"]}),(0,f.jsx)("div",{className:We.mobileWrap,children:(0,f.jsx)(Fe,{handleClick:A})}),(0,f.jsxs)("div",{className:We.deskWrap,style:O,children:[(0,f.jsx)(oe,{expense:_}),(0,f.jsx)(Se,{handleClick:A,expenses:_,transactions:y,monthStats:k})]}),!i&&(0,f.jsx)(ue,{handleClick:function(){return o(!i)},expense:_}),!n&&(0,f.jsx)(Ae.Z,{toggleModal:function(){return a(!n)},logOut:function(){return e=m,document.querySelector("#delete".concat(e)).classList.add("deleteTransaction"),setTimeout((function(){E(e)}),700),void a(!n);var e},children:(0,f.jsx)("p",{className:We.text,style:V,children:"Are you sure?"})})]})}var Be="HomePage_wrap__SjCET",Ie=function(){return(0,f.jsxs)(a.Z,{children:[(0,f.jsxs)("div",{className:Be,children:[(0,f.jsx)(U,{}),(0,f.jsx)(I,{})]}),(0,f.jsx)(Le,{})]})}}}]);
//# sourceMappingURL=home.627e96b9.chunk.js.map