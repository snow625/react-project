"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[257],{5738:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(885),a={backbox:"RightSideBar_backbox__f1uHh",box:"RightSideBar_box__5rTAJ",title:"RightSideBar_title__b9qBg",flexbox:"RightSideBar_flexbox__Ultvk",list:"RightSideBar_list__RNeJX",item:"RightSideBar_item__0V+B1",sub_title:"RightSideBar_sub_title__A7b6T",text:"RightSideBar_text__J6xPs",ol:"RightSideBar_ol__xwjjx",li:"RightSideBar_li__bdv0f"},i=r(1405),s=r(2616),c=r(3329),l=function(){var e=(0,i.v9)(s.Sp),t=(0,i.v9)(s.gN),r=(0,i.v9)(s.kZ),l=function(){if(e.dailyRate){var t={};return Object.entries(e).forEach((function(e){var r=(0,n.Z)(e,2),a=r[0],i=r[1];t[a]=Math.floor(i)>0?Math.floor(i):"0"})),{kcalLeft:t.kcalLeft,kcalConsumed:t.kcalConsumed,dailyRate:t.dailyRate,percentsOfDailyRate:t.percentsOfDailyRate}}return{kcalLeft:"000",kcalConsumed:"000",dailyRate:"000",percentsOfDailyRate:"000"}}(),o=l.kcalLeft,d=l.kcalConsumed,u=l.dailyRate,m=l.percentsOfDailyRate;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:a.backbox,children:(0,c.jsxs)("div",{className:a.box,children:[(0,c.jsxs)("div",{className:a.summary,children:[(0,c.jsx)("h3",{className:a.title,children:"\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 ".concat(function(){if(t){var e=t.split("");e.splice(4,1,"/");var r=e;return r.splice(7,1,"/"),r.join("")}}())}),(0,c.jsxs)("div",{className:a.flexbox,children:[(0,c.jsxs)("ul",{className:a.list,children:[(0,c.jsx)("li",{className:a.item,children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c"}),(0,c.jsx)("li",{className:a.item,children:"\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e"}),(0,c.jsx)("li",{className:a.item,children:"\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430"}),(0,c.jsx)("li",{className:a.item,children:"% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b"})]}),(0,c.jsxs)("ul",{className:a.list,children:[(0,c.jsxs)("li",{className:a.item,children:[(0,c.jsx)("span",{className:"{style.number}",children:o})," \u043a\u043a\u0430\u043b"]}),(0,c.jsxs)("li",{className:a.item,children:[(0,c.jsx)("span",{className:"{style.number}",children:d})," \u043a\u043a\u0430\u043b"]}),(0,c.jsxs)("li",{className:a.item,children:[(0,c.jsx)("span",{className:"{style.number}",children:u})," \u043a\u043a\u0430\u043b"]}),(0,c.jsxs)("li",{className:a.item,children:[(0,c.jsx)("span",{className:"{style.number}",children:m})," ","%"]})]})]})]}),(0,c.jsxs)("div",{className:a.food,children:[(0,c.jsx)("h3",{className:a.sub_title,children:"\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b:"}),r.length>0?function(){var e=r.map((function(e){return(0,c.jsx)("li",{className:a.li,children:e},e)}));return(0,c.jsx)("ol",{className:a.ol,children:e})}():(0,c.jsx)("p",{className:a.text,children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d"})]})]})})})}},3361:function(e,t,r){r.r(t),r.d(t,{default:function(){return Se}});var n=r(1405),a=r(2791),i=r(6871),s=r(3504),c=r(1167),l=r(885),o=r(9513),d=r.n(o),u=(r(8639),r(8938)),m="diaryDate\u0421alendar_wrapper__1gq55",_="diaryDate\u0421alendar_datePicker__FksKS",h="diaryDate\u0421alendar_icon__cZyaP",f=r(3329),p=function(e){var t=e.fetchDayInfo,r=(0,a.useState)(new Date),n=(0,l.Z)(r,2),i=n[0],s=n[1];return(0,a.useEffect)((function(){t({date:i.toISOString().slice(0,10)})}),[t,i]),(0,f.jsx)("div",{className:"wrapper_container",children:(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)(d(),{className:_,selected:i,onChange:function(e){return s(e)},dateFormat:"dd.MM.yyyy"}),(0,f.jsx)("svg",{className:h,children:(0,f.jsx)("use",{href:u.Z+"#icon-calendar"})})]})})},x=r(4165),v=r(1413),j=r(5861),b="circleButton_btn__2aj1H",y="circleButton_mobile__5dTLh",g="circleButton_icon__AB0yh",N=function(e){var t=e.type,r=e.label,n=e.mobile,a=e.iconNameInSprite,i=e.onClick;return(0,f.jsx)("button",{className:n?"".concat(b," ").concat(y):b,type:t,"aria-label":r,onClick:i,children:(0,f.jsx)("svg",{className:g,children:(0,f.jsx)("use",{href:u.Z+"#icon-".concat(a)})})})};N.defaultProps={type:"button",label:"Button",mobile:!1,onClick:function(){}};var Z=N,k="productSelector_select__gPhvF",P="productSelector_option__Jsy0Y",w=function(e){var t=e.id,r=e.productsList,n=(r.length>10?r.slice(0,10):r).map((function(e){var t=e._id,r=e.title.ru;return(0,f.jsx)("option",{className:P,id:t,value:r,children:r},t)}));return(0,f.jsx)("datalist",{className:k,id:t,children:n})};w.defaultProps={productsList:[]};var S=w,R=r(4498),C=r(158),B=r(7864),I=r(8626),L=r(2704),A=function(){var e=(0,j.Z)((0,x.Z)().mark((function e(t){var r,n;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.eE.get("/product?search=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,j.Z)((0,x.Z)().mark((function e(t){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.jsx)(I.Z,{message:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=(0,L.Z)(A,1e3),E=((0,L.Z)(F,1e3),r(5518)),G=r(2358),T={product:"",foundProducts:[],currentProduct:"",id:null,weight:"",error:null,loading:!1,clearButton:!1},H={product:{name:"product",required:!0,type:"text",autoComplete:"off",id:"product"},weight:{name:"weight",id:"weight",required:!0,type:"number",min:"1",max:"3000",title:"Input weight product in (gram)"}},M="diaryAddProductForm_addForm__6LUsR",q="diaryAddProductForm_mobileAddForm__GGTHk",J="diaryAddProductForm_wrapperProduct__hr9La",O="diaryAddProductForm_wrapperGrams__4Ji+U",U="diaryAddProductForm_label__g2eLt",Y="diaryAddProductForm_labelGrams__sdZQs",z="diaryAddProductForm_input__3k+X3",X="diaryAddProductForm_clearBtn__AzNFY",K="diaryAddProductForm_icon__f1IW3",Q="diaryAddProductForm_addBtn__73b0n",V=function(e){var t=e.isMobile,r=e.onSubmit,n=(0,C.Z)({onSubmit:r,initialState:T,isReset:!0}),i=n.state,s=n.setState,c=n.handleChange,l=n.handleSubmit,o=i.product,d=i.foundProducts,m=i.currentProduct,_=i.weight,h=i.clearButton,p=i.loading;(0,a.useEffect)((function(){var e=function(){var e=(0,j.Z)((0,x.Z)().mark((function e(t){var r;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s((function(e){return(0,v.Z)((0,v.Z)({},e),{},{error:null,clearButton:!1})})),e.prev=1,e.next=4,D(t);case 4:r=e.sent,s((function(e){return(0,v.Z)((0,v.Z)({},e),{},{foundProducts:r,loading:!1})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s((function(t){return(0,E.H)(t,e.t0)}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();m||o.length>2&&e(o)}),[o,m,s]);(0,a.useEffect)((function(){""===i.product&&i.foundProducts.length>0&&!i.id&&s((function(e){return(0,v.Z)((0,v.Z)({},e),{},{clearButton:!1,currentProduct:"",product:"",foundProducts:[]})}))}),[s,i.foundProducts.length,i.id,i.product]);return(0,f.jsxs)("div",{className:"wrapper_container",children:[(0,f.jsxs)("form",{className:t?q:M,onSubmit:l,children:[(0,f.jsxs)("div",{className:J,children:[(0,f.jsx)("label",{htmlFor:"product",className:U,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"}),(0,f.jsx)("input",(0,v.Z)({list:"productsToSelect",className:z,value:o,onChange:function(e){c(e);var t=e.target.value;d.length>0&&function(e){var t,r=null===(t=d.find((function(t){return t.title.ru===e})))||void 0===t?void 0:t._id;s((function(t){return(0,v.Z)((0,v.Z)({},t),{},{product:e,currentProduct:e,id:r,clearButton:!0})}))}(t)}},H.product)),(0,f.jsx)(S,{id:"productsToSelect",productsList:d}),h&&(0,f.jsx)("button",{className:X,onClick:function(){return s(T)},"aria-label":"clear input button",children:(0,f.jsx)("svg",{className:K,children:(0,f.jsx)("use",{href:u.Z+"#icon-remove"})})})]}),(0,f.jsxs)("div",{className:O,children:[(0,f.jsx)("label",{htmlFor:"weight",className:Y,children:"\u0413\u0440\u0430\u043c\u043c\u044b"}),(0,f.jsx)("input",(0,v.Z)({className:z,value:_,onChange:c},H.weight))]}),t?(0,f.jsx)("div",{className:Q,children:(0,f.jsx)(R.Z,{type:"submit",text:"Add",white:!1})}):(0,f.jsx)(Z,{type:"submit",label:"Add product button",iconNameInSprite:"add"})]}),p&&(0,f.jsx)(G.Z,{})]})};V.defaultProps={onSubmit:function(){}};var W=V,$="diaryProductsListItem_listItem__sfxH7",ee="diaryProductsListItem_calories__GzQnx",te="diaryProductsListItem_grams__UeXqj",re="diaryProductsListItem_product__KiujG",ne="diaryProductsListItem_btn__2B-43",ae="diaryProductsListItem_doubleBtn__rHUgW",ie="diaryProductsListItem_icon__kttsa",se=function(e){var t=e.title,r=e.weight,n=e.kcal,a=e.id,i=e.onClick;return(0,f.jsxs)("li",{className:$,children:[(0,f.jsx)("span",{className:re,children:t}),(0,f.jsx)("span",{className:te,children:r}),(0,f.jsxs)("span",{className:ee,children:[Math.round(n)," kcal"]}),(0,f.jsx)("button",{className:t.length>24?ae:ne,onClick:function(){return i(a)},"aria-label":"button delete element",children:(0,f.jsx)("svg",{className:ie,children:(0,f.jsx)("use",{href:u.Z+"#icon-remove"})})})]},a)},ce="diaryProductsList_list__HbP9-",le="diaryProductsList_warn__wziG9",oe=function(e){var t=e.eatenProducts,r=e.onClick;return(0,f.jsx)("div",{className:"wrapper_container",children:function(){if(t.length>0){var e=t.map((function(e){var t=e.title,n=e.weight,a=e.kcal,i=e.id;return(0,f.jsx)(se,{onClick:r,title:t,weight:n,kcal:a,id:i},i)}));return(0,f.jsx)("ul",{className:ce,children:e.reverse()})}return(0,f.jsx)("p",{className:le,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442\u043e\u0439, \u0434\u043e\u0431\u0430\u0432\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442!"})}()})};oe.defaultProps={eatenProducts:[]};var de=oe,ue=r(7277),me=r(3269),_e=r(7810),he=r(7008),fe=r(2616),pe=r(1537),xe="diary_wrapper__XjRIh",ve="diary_btn__-pfQA",je="diary_wrapperComponent__ZJh2E",be="diary_title__YzpVb",ye="diary_text__FLh8-",ge="diary_linkTo__aVBGS",Ne="diary_visibility__KYpTX",Ze=function(){var e=(0,me.d)(),t=(0,n.I0)(),r=(0,i.s0)(),l=!(0,c.useMediaPredicate)("(max-width: 768px)"),o=(0,c.useMediaPredicate)("(max-width: 768px)"),d=(0,n.v9)(fe.H2),u=d.loading,m=d.error,_=d.eatenProducts,h=d.dayId,x=d.date,v=d.notAllowedProducts.length>0,j=(0,a.useCallback)((function(e){t((0,pe.GS)(e)),t((0,he.d0)(e))}),[t]),b=function(e){var r=e.id,n=e.weight,a={productId:r,weight:Number(n),date:x};t((0,he.gK)(a)),o&&t((0,_e.g)())},y=(0,a.useCallback)((function(e){var r={dayId:h,eatenProductId:e};t((0,he.kh)(r))}),[h,t]);return(0,f.jsxs)(f.Fragment,{children:[v&&(0,f.jsxs)("div",{className:xe,children:[(0,f.jsx)(p,{fetchDayInfo:j}),l&&(0,f.jsx)(W,{isMobile:!1,onSubmit:b}),(0,f.jsx)(de,{eatenProducts:_,onClick:y}),(0,f.jsx)("div",{className:ve,children:(0,f.jsx)(Z,{type:"button",label:"Add product button",mobile:!0,iconNameInSprite:"add",onClick:function(){t((0,_e.g)())}})})]}),!v&&(0,f.jsxs)("div",{className:xe,children:[(0,f.jsx)("div",{className:Ne,children:(0,f.jsx)(p,{fetchDayInfo:j})}),(0,f.jsxs)("div",{className:je,children:[(0,f.jsx)("h3",{className:be,children:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u0442\u044c!"}),(0,f.jsxs)("p",{className:ye,children:["\u041d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0412\u0430\u043c \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u0434\u0438\u0435\u0442\u0443 \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043b\u043b\u043e\u0440\u0438\u0438. \u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0445\u0443\u0434\u0435\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430"," ",(0,f.jsx)(s.rU,{className:ge,to:"/calculate",children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439 \u0434\u0438\u0435\u0442\u0443"})," "]})]})]}),m&&function(e){401===(null===e||void 0===e?void 0:e.status)&&r("/login")}(m),u&&(0,f.jsx)(G.Z,{}),e&&(0,f.jsx)(ue.Z,{children:(0,f.jsx)(W,{isMobile:!0,onSubmit:b})})]})},ke=r(5738),Pe="diaryPage_wrapper__3dexS",we="diaryPage_diary__DOxYG",Se=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:Pe,children:[(0,f.jsx)("div",{className:we,children:(0,f.jsx)(Ze,{})}),(0,f.jsx)(ke.Z,{})]})})}},2616:function(e,t,r){r.d(t,{H2:function(){return n},Sp:function(){return a},gN:function(){return i},kZ:function(){return s}});var n=function(e){return e.summary},a=function(e){return e.summary.summary},i=function(e){return e.summary.date},s=function(e){return e.summary.notAllowedProducts}},4498:function(e,t,r){r.d(t,{Z:function(){return c}});var n="button_btn__GLfzt",a="button_btn_white__vYoLr",i=r(3329),s=function(e){var t=e.type,r=e.text,s=e.onClick,c=e.white;return(0,i.jsx)("button",{className:c?a:n,onClick:s,type:t,children:r})};s.defaultProps={white:!1,type:"submit",onClick:function(){}};var c=s},7277:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(2791),a=r(4164),i=r(1405),s=r(7810),c="modal_overlay__R++hW",l="modal_modal__2Pbuy",o="modal_close_btn__DTBAR",d="modal_container__Jd1Z7",u="modal_close_icon__mvDI0",m=r(8938),_=r(3329),h=document.getElementById("modal-root"),f=function(e){var t=e.children,r=(0,i.I0)();(0,n.useEffect)((function(){document.body.style.overflow="hidden",document.addEventListener("keydown",p);return function(){return document.removeEventListener("keydown",p),void(document.body.style.overflow="")}}),[]);var f=function(){r((0,s.g)())};function p(e){var t=e.target,r=e.currentTarget,n=e.code;t!==r&&"Escape"!==n||f()}return(0,a.createPortal)((0,_.jsx)("div",{onClick:p,className:c,children:(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)("button",{className:o,type:"button","aria-label":"button close",onClick:f,children:(0,_.jsx)("svg",{className:u,children:(0,_.jsx)("use",{href:m.Z+"#icon-close"})})}),(0,_.jsx)("div",{className:d,children:t})]})}),h)}},158:function(e,t,r){var n=r(4942),a=r(1413),i=r(885),s=r(2791),c=r(2007),l=r.n(c),o=function(e){var t=e.onSubmit,r=e.initialState,c=e.isReset,l=(0,s.useState)((0,a.Z)({},r)),o=(0,i.Z)(l,2),d=o[0],u=o[1];return{state:d,setState:u,handleChange:function(e){var t=e.target,r=t.name,i=t.value,s=t.type,c=t.checked,l="checkbox"===s?c:i;u((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,n.Z)({},r,l))}))},handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},d)),c&&u((0,a.Z)({},r))}}};o.defaultProps={onSubmit:function(){},initialState:{},isReset:!0},o.propTypes={onSubmit:l().func.isRequired,initialState:l().shape.isRequired,isReset:l().bool.isRequired},t.Z=o},5518:function(e,t,r){r.d(t,{H:function(){return i},_:function(){return a}});var n=r(1413),a=function(e){return(0,n.Z)((0,n.Z)({},e),{},{error:null,loading:!0})},i=function(e,t){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1,error:{message:t.response.data.message,status:t.response.status}})}}}]);
//# sourceMappingURL=257.2ad9a683.chunk.js.map