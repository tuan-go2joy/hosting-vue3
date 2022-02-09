var re=Object.defineProperty,ce=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var I=(e,n,i)=>n in e?re(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,c=(e,n)=>{for(var i in n||(n={}))me.call(n,i)&&I(e,i,n[i]);if(L)for(var i of L(n))fe.call(n,i)&&I(e,i,n[i]);return e},_=(e,n)=>ce(e,de(n));import{j as ve,p as v,k as o,w as b,B as ge,l as d,T as K,m as he,x as qe,A as ke,ag as ye}from"./vendor.c8940223.js";import{u as xe,k as we,a as Te,f as Be,l as Ee,n as Se,b as _e,h as be,r as O,q as Q,i as Ce,o as He,v as De}from"./queryKeys.f0c0fd01.js";import{f as ze}from"./axiosClient.fba0db00.js";let g=0;const Me={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},V={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var $e=ve({name:"QDialog",inheritAttrs:!1,props:_(c(c({},xe),we),{transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}}),emits:[...Te,"shake","click","escape-key"],setup(e,{slots:n,emit:i,attrs:C}){const h=qe(),s=v(null),a=v(!1),H=v(!1),u=v(!1);let q,l=null,m,k;const D=o(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:z}=Ce(),{registerTimeout:M,removeTimeout:F}=Be(),{registerTick:W,removeTick:P}=Ee(),{showPortal:R,hidePortal:U,portalIsActive:G,renderPortal:J}=Se(h,s,le,!0),{hide:f}=_e({showing:a,hideOnRouteChange:D,handleShow:ne,handleHide:oe,processOnMount:!0}),{addToHistory:N,removeFromHistory:X}=be(a,f,D),Y=o(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Me[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),Z=o(()=>"q-transition--"+(e.transitionShow===void 0?V[e.position][0]:e.transitionShow)),p=o(()=>"q-transition--"+(e.transitionHide===void 0?V[e.position][1]:e.transitionHide)),ee=o(()=>H.value===!0?p.value:Z.value),j=o(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=o(()=>a.value===!0&&e.seamless!==!0),te=o(()=>e.autoClose===!0?{onClick:ae}:{}),ie=o(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${y.value===!0?"modal":"seamless"}`,C.class]);b(a,t=>{ke(()=>{H.value=t})}),b(()=>e.maximized,t=>{a.value===!0&&T(t)}),b(y,t=>{z(t),t===!0?(He(B),De(w)):(O(B),Q(w))});function ne(t){F(),P(),N(),l=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,T(e.maximized),R(),u.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),W(r)),M(()=>{if(h.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:ue,bottom:E}=document.activeElement.getBoundingClientRect(),{innerHeight:A}=window,S=window.visualViewport!==void 0?window.visualViewport.height:A;ue>0&&E>S/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-S,E>=A?1/0:Math.ceil(document.scrollingElement.scrollTop+E-S/2))),document.activeElement.scrollIntoView()}k=!0,s.value.click(),k=!1}R(!0),u.value=!1,i("show",t)},e.transitionDuration)}function oe(t){F(),P(),X(),$(!0),u.value=!0,l!==null&&(l.focus(),l=null),M(()=>{U(),u.value=!1,i("hide",t)},e.transitionDuration)}function r(){ze(()=>{let t=s.value;t===null||t.contains(document.activeElement)===!0||(t=t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function x(){r(),i("shake");const t=s.value;t!==null&&(t.classList.remove("q-animate--scale"),t.classList.add("q-animate--scale"),clearTimeout(q),q=setTimeout(()=>{s.value!==null&&(t.classList.remove("q-animate--scale"),r())},170))}function w(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&x():(i("escape-key"),f()))}function $(t){clearTimeout(q),(t===!0||a.value===!0)&&(T(!1),e.seamless!==!0&&(z(!1),O(B),Q(w))),t!==!0&&(l=null)}function T(t){t===!0?m!==!0&&(g<1&&document.body.classList.add("q-body--dialog"),g++,m=!0):m===!0&&(g<2&&document.body.classList.remove("q-body--dialog"),g--,m=!1)}function ae(t){k!==!0&&(f(t),i("click",t))}function se(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?f(t):e.noShake!==!0&&x()}function B(t){a.value===!0&&G.value===!0&&ye(s.value,t.target)!==!0&&r()}Object.assign(h.proxy,{focus:r,shake:x,__updateRefocusTarget(t){l=t||null}}),ge($);function le(){return d("div",_(c({},C),{class:ie.value}),[d(K,{name:"q-transition--fade",appear:!0},()=>y.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:j.value,"aria-hidden":"true",onMousedown:se}):null),d(K,{name:ee.value,appear:!0},()=>a.value===!0?d("div",c({ref:s,class:Y.value,style:j.value,tabindex:-1},te.value),he(n.default)):null)])}return J}});export{$e as Q};
