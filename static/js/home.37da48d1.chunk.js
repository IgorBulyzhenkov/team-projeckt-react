"use strict";(self.webpackChunkteam_project_react=self.webpackChunkteam_project_react||[]).push([[177],{2544:function(e,n,t){t.d(n,{Z:function(){return d}});var a="action-modal_overlay__fcYbf",r="action-modal_modal__ntAmH",l="action-modal_btn__shbkS",i="action-modal_closeBtn__TP7wm",s=t(4164),o=t(184),c=document.querySelector("#modal-root"),d=function(e){var n=e.children,t=e.toggleModal,d=e.logOut;return(0,s.createPortal)((0,o.jsx)("div",{className:a,children:(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("span",{onClick:t,className:i,children:(0,o.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M1 1L13 13",stroke:"#52555F",strokeWidth:"2"}),(0,o.jsx)("path",{d:"M1 13L13 0.999999",stroke:"#52555F",strokeWidth:"2"})]})}),n,(0,o.jsx)("button",{onClick:d,className:l,type:"button",children:"Yes"}),(0,o.jsx)("button",{onClick:t,className:l,type:"button",children:"No"})]})}),c)}},4543:function(e,n,t){t.d(n,{Z:function(){return l}});var a="Container_container__VVOCq",r=t(184);function l(e){var n=e.children;return(0,r.jsx)("div",{className:a,children:n})}},2157:function(e,n,t){t.r(n),t.d(n,{default:function(){return Te}});var a=t(4543),r=t(885),l="Balance_wrap__-7-60",i="Balance_span__1X3WH",s="Balance_form__Jb6Ni",o="Balance_input__5zeug",c="Balance_button__UsoOP",d=t(2791),u=t(1413),p=t(5987),m=t(3587),h=t.n(m),x=t(2181),_=t.n(x),f=t(184),v=["maskOptions"],j={prefix:"",suffix:" UAH",includeThousandsSeparator:!0,thousandsSeparatorSymbol:" ",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:8,requireDecimal:!0,allowNegative:!1,allowLeadingZeroes:!1},b=function(e){var n=e.maskOptions,t=(0,p.Z)(e,v),a=_()((0,u.Z)((0,u.Z)({},j),n));return(0,f.jsx)(h(),(0,u.Z)({mask:a},t))};b.defaultProps={inputMode:"numeric",maskOptions:{}};var C,y,N,g,Z,S,k,H=b,M=t(5928),E="ModalNotification_modalWrap__RB0Q9",F="ModalNotification_modal__hDkEQ",w="ModalNotification_textWrap__AiMgM",V="ModalNotification_startText__Ug0W9",T="ModalNotification_prompt__msFnp",A=t(4139),O=function(){var e=(0,d.useState)(!0),n=(0,r.Z)(e,2),t=n[0],a=n[1],l=(0,A.useTransition)(t,{from:{opacity:1},enter:{opacity:1},leave:{opacity:0}});return(0,d.useEffect)((function(){var e=function(e){a((function(e){return!e}))};return setTimeout((function(){e()}),11e3),document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),l((function(e,n){return n?(0,f.jsx)(A.animated.div,{className:E,style:e,children:(0,f.jsx)("div",{className:F,children:(0,f.jsxs)("div",{className:w,children:[(0,f.jsx)("span",{className:V,children:"Hello! To get started, enter the current balance of your account!"}),(0,f.jsx)("span",{className:T,children:"You can't spend money until you have it :)"})]})})}):""}))},W=function(){var e=(0,M.AR)(),n=(0,r.Z)(e,1)[0],t=(0,M.Nf)().data,a=!(null===t||void 0===t||!t.balance),u=(null===t||void 0===t?void 0:t.transactions.length)>0,p=(0,d.useState)((function(){return null===t||void 0===t?void 0:t.balance})),m=(0,r.Z)(p,2),h=m[0],x=m[1];(0,d.useEffect)((function(){if(null!==t&&void 0!==t&&t.balance){var e=function(e){var n=String(e).split("");return-1===(null===n||void 0===n?void 0:n.indexOf("."))?"".concat(n.join(""),".00"):String(e).split(".")[1].length<2?"".concat(e,"0"):e}(null===t||void 0===t?void 0:t.balance);x(e)}}),[null===t||void 0===t?void 0:t.balance]);return(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("span",{className:i,children:"Balance:"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=Number.parseFloat(h.split(" ").join(""));n(t)},className:s,children:[(0,f.jsx)(H,{placeholder:"00.00 UAH",type:"text",className:o,onChange:function(e){var n=e.currentTarget.value;x(n)},onClick:function(e){"mousedown"===e.type||x("")},value:String(h)}),(0,f.jsx)("button",{type:"submit",className:c,children:"CONFIRM"})]}),!a&&!u&&(0,f.jsx)(O,{})]})},L=t(3504),P=t(143),B="ReportLink_link__yJxke",D="ReportLink_span__GYvVt",I=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(L.rU,{to:"/report",className:B,children:[(0,f.jsx)("span",{className:D,children:"Reports"}),(0,f.jsx)(P.Z,{})]})})},R=t(5048),U="ModalAddExpense_overlay__+2oyh",q="ModalAddExpense_modal__Ajxov",z={form:"FormAddExpense_form__92RYV",calendar:"FormAddExpense_calendar__6yb6X",description:"FormAddExpense_description__GYfd1",input:"FormAddExpense_input__68Uje",arrow:"FormAddExpense_arrow__fbYaO",inputWrap:"FormAddExpense_inputWrap__oatVl",select:"FormAddExpense_select__HohpP",buttonWrap:"FormAddExpense_buttonWrap__QCwnT",buttonInput:"FormAddExpense_buttonInput__ZihK6",buttonClear:"FormAddExpense_buttonClear__eXE00",calculateWrap:"FormAddExpense_calculateWrap__+c4BE",calculate:"FormAddExpense_calculate__-6SMR",currencyWrapp:"FormAddExpense_currencyWrapp__vRZ3x"},Y=t(772),Q=t(5442),X=["title","titleId"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},G.apply(this,arguments)}function J(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function K(e,n){var t=e.title,a=e.titleId,r=J(e,X);return d.createElement("svg",G({width:21,height:20,viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},r),t?d.createElement("title",{id:a},t):null,C||(C=d.createElement("path",{d:"M17.5424 0H3.18071C2.19083 0 1.3855 0.788555 1.3855 1.75781V18.2422C1.3855 19.2114 2.19083 20 3.18071 20H17.5424C18.5323 20 19.3376 19.2114 19.3376 18.2422V1.75781C19.3376 0.788555 18.5323 0 17.5424 0ZM18.1408 18.2422C18.1408 18.5653 17.8724 18.8281 17.5424 18.8281H3.18071C2.85075 18.8281 2.58231 18.5653 2.58231 18.2422V1.75781C2.58231 1.43473 2.85075 1.17188 3.18071 1.17188H17.5424C17.8724 1.17188 18.1408 1.43473 18.1408 1.75781V18.2422Z",fill:"#52555F"})),y||(y=d.createElement("path",{d:"M16.3457 2.34375H4.37758C4.0471 2.34375 3.77917 2.60609 3.77917 2.92969V7.69531C3.77917 8.01891 4.0471 8.28125 4.37758 8.28125H16.3457C16.6761 8.28125 16.9441 8.01891 16.9441 7.69531V2.92969C16.9441 2.60609 16.6761 2.34375 16.3457 2.34375ZM15.7473 7.10938H4.97598V3.51562H15.7473V7.10938Z",fill:"#52555F"})),N||(N=d.createElement("path",{d:"M6.7712 9.45312H4.37758C4.0471 9.45312 3.77917 9.71547 3.77917 10.0391V12.3828C3.77917 12.7064 4.0471 12.9688 4.37758 12.9688H6.7712C7.10167 12.9688 7.3696 12.7064 7.3696 12.3828V10.0391C7.3696 9.71547 7.10167 9.45312 6.7712 9.45312ZM6.17279 11.7969H4.97598V10.625H6.17279V11.7969Z",fill:"#52555F"})),g||(g=d.createElement("path",{d:"M6.7712 14.1406H4.37758C4.0471 14.1406 3.77917 14.403 3.77917 14.7266V17.0703C3.77917 17.3939 4.0471 17.6562 4.37758 17.6562H6.7712C7.10167 17.6562 7.3696 17.3939 7.3696 17.0703V14.7266C7.3696 14.403 7.10167 14.1406 6.7712 14.1406ZM6.17279 16.4844H4.97598V15.3125H6.17279V16.4844Z",fill:"#52555F"})),Z||(Z=d.createElement("path",{d:"M11.5584 9.45312H9.16481C8.83433 9.45312 8.56641 9.71547 8.56641 10.0391V12.3828C8.56641 12.7064 8.83433 12.9688 9.16481 12.9688H11.5584C11.8889 12.9688 12.1568 12.7064 12.1568 12.3828V10.0391C12.1568 9.71547 11.8889 9.45312 11.5584 9.45312ZM10.96 11.7969H9.76322V10.625H10.96V11.7969Z",fill:"#52555F"})),S||(S=d.createElement("path",{d:"M11.5584 14.1406H9.16481C8.83433 14.1406 8.56641 14.403 8.56641 14.7266V17.0703C8.56641 17.3939 8.83433 17.6562 9.16481 17.6562H11.5584C11.8889 17.6562 12.1568 17.3939 12.1568 17.0703V14.7266C12.1568 14.403 11.8889 14.1406 11.5584 14.1406ZM10.96 16.4844H9.76322V15.3125H10.96V16.4844Z",fill:"#52555F"})),k||(k=d.createElement("path",{d:"M16.3457 9.45312H13.952C13.6216 9.45312 13.3536 9.71547 13.3536 10.0391V17.0703C13.3536 17.3939 13.6216 17.6562 13.952 17.6562H16.3457C16.6761 17.6562 16.9441 17.3939 16.9441 17.0703V10.0391C16.9441 9.71547 16.6761 9.45312 16.3457 9.45312ZM15.7473 16.4844H14.5504V10.625H15.7473V16.4844Z",fill:"#52555F"})))}var $=d.forwardRef(K),ee=(t.p,t(7606)),ne=t(6351),te=t(948),ae=function(e){var n=e.expense,t=e.handleClick,a=(0,M.qS)(),l=(0,r.Z)(a,1)[0],i=(0,M.M8)(),s=(0,r.Z)(i,1)[0],o=(0,d.useState)(new Date),c=(0,r.Z)(o,2),p=c[0],m=c[1],h=(0,R.v9)(ne.dz),x={option:function(e,n){return(0,u.Z)((0,u.Z)({},e),{},{color:n.isSelected?"#52555F":"#C7CCDC",backgroundColor:n.isSelected?"#C7CCDC":"#FFFFFF"})},singleValue:function(e,n){return(0,u.Z)((0,u.Z)({},e),{},{color:"#52555F"})},control:function(e,n){return(0,u.Z)((0,u.Z)({},e),{},{border:"2px solid #ffffff",borderRadius:"0 0 20px 0",height:"44px",width:"280px"})},indicatorSeparator:function(e,n){return(0,u.Z)((0,u.Z)({},e),{},{display:"none"})}};return(0,f.jsx)("div",{className:z.formWrap,children:(0,f.jsxs)("form",{className:z.form,onSubmit:function(e){e.preventDefault();var a=e.currentTarget,r=a.amount,i=a.description,o=a.category,c=a.date,d=Number.parseFloat(r.value.split(" ").join("")),u={description:i.value,amount:d,date:c.value,category:o.value};n?l(u):s(u),e.target.reset(),"mobile"===h&&t()},children:[(0,f.jsxs)("div",{className:z.inputWrap,children:[(0,f.jsx)(Q.Z,{value:p,calendarIcon:(0,f.jsx)(Y.Z,{}),clearIcon:null,prevLabel:null,prev2Label:null,nextLabel:null,next2Label:null,className:z.calendar,calendarClassName:z.calendar,name:"date",onChange:m,format:"dd.MM.y"}),(0,f.jsx)("input",{type:"text",id:"description",name:"description",className:z.description,placeholder:"Product description"}),(0,f.jsx)(ee.ZP,{type:"text",id:"category",name:"category",options:n?[{value:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",label:"Transport"},{value:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",label:"Products"},{value:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",label:"Health"},{value:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c",label:"Alcohol"},{value:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",label:"Entertainment"},{value:"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430",label:"Housing"},{value:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430",label:"Technique"},{value:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c",label:"Communal, communication"},{value:"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438",label:"Sports, hobbies"},{value:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",label:"Education"},{value:"\u041f\u0440\u043e\u0447\u0435\u0435",label:"Other"}]:[{value:"\u0417/\u041f",label:"Salary"},{value:"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434",label:"Extra income"}],styles:x,placeholder:"Product category",className:z.select}),(0,f.jsxs)("div",{className:z.currencyWrapp,children:[(0,f.jsx)(te.Z,{suffix:" UAH",decimalScale:2,inputMode:"numeric",placeholder:"00.00 UAH",thousandSeparator:" ",fixedDecimalScale:!0,className:z.input,id:"amount",name:"amount"}),(0,f.jsx)("div",{className:z.calculateWrap,children:(0,f.jsx)($,{width:"20",height:"20"})})]})]}),(0,f.jsxs)("div",{className:z.buttonWrap,children:[(0,f.jsx)("button",{type:"submit",className:z.buttonInput,children:"Input"}),(0,f.jsx)("button",{type:"reset",className:z.buttonClear,children:"Clear"})]})]})})},re=t(7317),le=t(4164),ie=t(4752),se=document.querySelector("#mobileModal-root"),oe=function(e){var n=e.handleClick,t=e.expense;return(0,le.createPortal)((0,f.jsx)("div",{className:U,id:"backDrop",children:(0,f.jsxs)("div",{className:q,children:[(0,f.jsx)(ie.Z,{color:"warning",onClick:n,"aria-label":"button close",component:"button",children:(0,f.jsx)(re.Z,{})}),(0,f.jsx)(ae,{expense:t,handleClick:n})]})}),se)},ce=t(4220);function de(e){var n=e.description,t=e.category,a=e.amount,r=e.date,l=e.id,i=e.expenses,s=e.handleClick;return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:r}),(0,f.jsx)("td",{children:n}),(0,f.jsx)("td",{children:t}),(0,f.jsxs)("td",{style:i?{color:"#e7192e",fontWeight:"700",fontSize:"12px",lineHeight:"14px"}:{color:"#407946",fontWeight:"700",fontSize:"12px",lineHeight:"14px"},children:[a,".00 \u0433\u0440\u043d."]}),(0,f.jsx)("td",{children:(0,f.jsx)(ie.Z,{onClick:function(e){return s(e)},"aria-label":"button delete",component:"label",id:l,children:(0,f.jsx)(ce.Z,{})})})]})}var ue="TransactionList_tableBody__iYd9N",pe="TransactionList_table__d1vG4";function me(e){var n=e.transactions,t=e.expenses,a=e.handleClick;return(0,f.jsxs)("div",{className:pe,children:[(0,f.jsx)("table",{children:(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Date"}),(0,f.jsx)("th",{children:"Description"}),(0,f.jsx)("th",{children:"category"}),(0,f.jsx)("th",{children:"Sum"}),(0,f.jsx)("th",{children:"\xa0"})]})})}),(0,f.jsx)("div",{className:ue,children:(0,f.jsx)("table",{children:(0,f.jsx)("tbody",{children:n.map((function(e){var n=e.description,r=e.category,l=e.amount,i=e.date,s=e._id;return(0,f.jsx)(de,{description:n,category:r,amount:l,date:i,id:s,expenses:t,handleClick:a},s)}))})})})]})}var he="Summary_table__d1qzU";function xe(e){var n=e.monthStats,t=Object.entries(n);return(0,f.jsx)("table",{className:he,children:(0,f.jsxs)("tbody",{children:[(0,f.jsx)("tr",{children:(0,f.jsx)("th",{colSpan:"2",children:"Summary"})}),t.filter((function(e){var n=(0,r.Z)(e,2);n[0];return"N/A"!==n[1]})).map((function(e){var n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:t}),(0,f.jsx)("td",{children:a})]},t)}))]})})}var _e="TransactionHistory_wrap__no1F9";function fe(e){var n=e.transactions,t=e.monthStats,a=e.expenses,r=e.handleClick;return(0,f.jsxs)("div",{className:_e,children:[n&&(0,f.jsx)(me,{transactions:n,expenses:a,handleClick:r}),t&&(0,f.jsx)(xe,{monthStats:t})]})}var ve="MobileTransaction_description__B2U-U",je="MobileTransaction_mobTable__mMx4q",be="MobileTransaction_amount__5yzzH",Ce="MobileTransaction_income__yhNqm",ye="MobileTransaction_expense__H8Hfw",Ne="MobileTransaction_descriptionItem__r6jFk",ge="MobileTransaction_date__xQvPT";function Ze(e){var n=e.handleClick,t=(0,d.useState)(),a=(0,r.Z)(t,2),l=a[0],i=a[1],s=(0,M.Nf)().data;(0,d.useEffect)((function(){s&&i(s.transactions)}),[s]);var o=function(e){if("\u0417/\u041f"===e||"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"===e)return!0};return(0,f.jsx)("table",{className:je,children:null===l||void 0===l?void 0:l.map((function(e){var t=e.description,a=e.category,r=e.amount,l=e.date,i=e._id;return(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{colSpan:"2",className:Ne,children:(0,f.jsx)("span",{className:ve,children:t})}),(0,f.jsxs)("td",{rowSpan:"2",className:"".concat(be," ").concat(o(a)?Ce:ye),children:[r,".00 \u0433\u0440\u043d"]}),(0,f.jsx)("td",{rowSpan:"2",children:(0,f.jsx)(ie.Z,{onClick:function(e){return n(e)},"aria-label":"button delete",component:"label",id:i,children:(0,f.jsx)(ce.Z,{})})})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:ge,children:l}),(0,f.jsx)("td",{children:a})]})]},i)}))})}var Se=t(2544),ke="Transactions_btn__27aoR",He="Transactions_deskWrap__4NnhL",Me="Transactions_text__XOOZe",Ee="Transactions_mobileWrap__SrJyW",Fe="Transactions_isActive__xWfmj";function we(){var e=(0,d.useState)("false"),n=(0,r.Z)(e,2),t=n[0],a=n[1],l=(0,d.useState)("false"),i=(0,r.Z)(l,2),s=i[0],o=i[1],c=(0,d.useState)(null),u=(0,r.Z)(c,2),p=u[0],m=u[1],h=(0,d.useState)(!0),x=(0,r.Z)(h,2),_=x[0],v=x[1],j=(0,d.useState)([]),b=(0,r.Z)(j,2),C=b[0],y=b[1],N=(0,d.useState)({}),g=(0,r.Z)(N,2),Z=g[0],S=g[1],k=(0,M.FF)().data,H=(0,M.yp)().data,E=(0,M.yC)(),F=(0,r.Z)(E,1)[0],w=(0,R.v9)(ne.dz);(0,d.useEffect)((function(){_?(y(null===k||void 0===k?void 0:k.expenses),S(null===k||void 0===k?void 0:k.monthsStats)):(y(null===H||void 0===H?void 0:H.incomes),S(null===H||void 0===H?void 0:H.monthsStats))}),[k,_,H]);var V=function(e){e.preventDefault(),m(e.currentTarget.id),a(!t)};return(0,f.jsxs)("div",{children:[(0,f.jsxs)("button",{className:"".concat(ke," ").concat(_?Fe:""),type:"button",onClick:function(){v(!0),"mobile"===w&&o(!s)},children:["mobile"===w&&"Add ","Expenses"]}),(0,f.jsxs)("button",{className:"".concat(ke," ").concat(_?"":Fe),type:"button",onClick:function(){v(!1),"mobile"===w&&o(!s)},children:["mobile"===w&&"Add ","Income"]}),(0,f.jsx)("div",{className:Ee,children:(0,f.jsx)(Ze,{handleClick:V})}),(0,f.jsxs)("div",{className:He,children:[(0,f.jsx)(ae,{expense:_}),(0,f.jsx)(fe,{handleClick:V,expenses:_,transactions:C,monthStats:Z})]}),!s&&(0,f.jsx)(oe,{handleClick:function(){return o(!s)},expense:_}),!t&&(0,f.jsx)(Se.Z,{toggleModal:function(){return a(!t)},logOut:function(){return F(p),void a(!t)},children:(0,f.jsx)("p",{className:Me,children:"Are you sure?"})})]})}var Ve="HomePage_wrap__SjCET",Te=function(){return(0,f.jsxs)(a.Z,{children:[(0,f.jsxs)("div",{className:Ve,children:[(0,f.jsx)(I,{}),(0,f.jsx)(W,{})]}),(0,f.jsx)(we,{})]})}}}]);
//# sourceMappingURL=home.37da48d1.chunk.js.map