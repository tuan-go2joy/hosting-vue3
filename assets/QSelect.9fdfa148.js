var Rt=Object.defineProperty,Ht=Object.defineProperties;var Lt=Object.getOwnPropertyDescriptors;var rt=Object.getOwnPropertySymbols;var Tt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var ct=(e,l,n)=>l in e?Rt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,I=(e,l)=>{for(var n in l||(l={}))Tt.call(l,n)&&ct(e,n,l[n]);if(rt)for(var n of rt(l))Pt.call(l,n)&&ct(e,n,l[n]);return e},Q=(e,l)=>Ht(e,Lt(l));import{a as je,b as st,c as dt,d as ft,e as Dt,f as jt,g as vt,h as $t}from"./use-quasar.6c925fdd.js";import{j as $e,ay as Nt,az as Kt,k as m,U as Qt,a7 as Ut,x as Ne,l as w,s as Ee,aA as Wt,M as oe,C as mt,p as H,w as ke,A as ie,O as Xt,aH as Yt,P as Gt,R as Jt,B as St,aC as Zt,aI as el,ab as Ke,y as ye,a9 as tl,aE as ll,S as ul}from"./vendor.c8940223.js";import{u as nl,a as ol,n as ht}from"./axiosClient.fba0db00.js";import{Q as il,c as al,b as rl,a as cl}from"./QMenu.2e2a6c56.js";import{Q as sl}from"./QDialog.dde3e87a.js";const dl=typeof Map=="function",fl=typeof Set=="function",vl=typeof ArrayBuffer=="function";function ee(e,l){if(e===l)return!0;if(e!==null&&l!==null&&typeof e=="object"&&typeof l=="object"){if(e.constructor!==l.constructor)return!1;let n,o;if(e.constructor===Array){if(n=e.length,n!==l.length)return!1;for(o=n;o--!=0;)if(ee(e[o],l[o])!==!0)return!1;return!0}if(dl===!0&&e.constructor===Map){if(e.size!==l.size)return!1;for(o=e.entries().next();o.done!==!0;){if(l.has(o.value[0])!==!0)return!1;o=o.next()}for(o=e.entries().next();o.done!==!0;){if(ee(o.value[1],l.get(o.value[0]))!==!0)return!1;o=o.next()}return!0}if(fl===!0&&e.constructor===Set){if(e.size!==l.size)return!1;for(o=e.entries().next();o.done!==!0;){if(l.has(o.value[0])!==!0)return!1;o=o.next()}return!0}if(vl===!0&&e.buffer!=null&&e.buffer.constructor===ArrayBuffer){if(n=e.length,n!==l.length)return!1;for(o=n;o--!=0;)if(e[o]!==l[o])return!1;return!0}if(e.constructor===RegExp)return e.source===l.source&&e.flags===l.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===l.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===l.toString();const E=Object.keys(e).filter(a=>e[a]!==void 0);if(n=E.length,n!==Object.keys(l).filter(a=>l[a]!==void 0).length)return!1;for(o=n;o--!=0;){const a=E[o];if(ee(e[a],l[a])!==!0)return!1}return!0}return e!==e&&l!==l}function Ml(e){return Object.prototype.toString.call(e)==="[object Date]"}function Ol(e){return typeof e=="number"&&isFinite(e)}var ml=$e({name:"QField",inheritAttrs:!1,props:je,emits:st,setup(){return dt(ft())}});const Sl={xs:8,sm:10,md:14,lg:20,xl:24};var hl=$e({name:"QChip",props:Q(I(I({},nl),Nt),{dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}}),emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:n}){const{proxy:{$q:o}}=Ne(),E=ol(e,o),a=Kt(e,Sl),B=m(()=>e.selected===!0||e.icon!==void 0),V=m(()=>e.selected===!0?e.iconSelected||o.iconSet.chip.selected:e.icon),C=m(()=>e.iconRemove||o.iconSet.chip.remove),O=m(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=m(()=>{const x=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(x?` text-${x} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(O.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(E.value===!0?" q-chip--dark q-dark":"")}),k=m(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function A(x){x.keyCode===13&&h(x)}function h(x){e.disable||(n("update:selected",!e.selected),n("click",x))}function K(x){(x.keyCode===void 0||x.keyCode===13)&&(oe(x),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function F(){const x=[];O.value===!0&&x.push(w("div",{class:"q-focus-helper"})),B.value===!0&&x.push(w(Ee,{class:"q-chip__icon q-chip__icon--left",name:V.value}));const W=e.label!==void 0?[w("div",{class:"ellipsis"},[e.label])]:void 0;return x.push(w("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Wt(l.default,W))),e.iconRight&&x.push(w(Ee,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&x.push(w(Ee,Q(I({class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:C.value},k.value),{onClick:K,onKeyup:K}))),x}return()=>{if(e.modelValue===!1)return;const x={class:d.value,style:a.value};return O.value===!0&&Object.assign(x,k.value,{onClick:h,onKeyup:A}),Qt("div",x,F(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ut,e.ripple]])}}});let Fe=!1;{const e=document.createElement("div"),l=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",l.style.width="1000px",l.style.height="1px",document.body.appendChild(e),e.appendChild(l),e.scrollLeft=-1e3,Fe=e.scrollLeft>=0,e.remove()}const U=1e3,gl=["start","center","end","start-force","center-force","end-force"];let yl=1;const bl=Array.prototype.filter,gt=window.getComputedStyle(document.body).overflowAnchor===void 0?mt:function(e,l){const n=e+"_ss";let o=document.getElementById(n);o===null&&(o=document.createElement("style"),o.type="text/css",o.id=n,document.head.appendChild(o)),o.qChildIndex!==l&&(o.qChildIndex=l,o.innerHTML=`#${e} > *:nth-child(${l}) { overflow-anchor: auto }`)};function be(e,l){return e+l}function Qe(e,l,n,o,E,a,B,V){const C=e===window?document.scrollingElement||document.documentElement:e,O=E===!0?"offsetWidth":"offsetHeight",d={scrollStart:0,scrollViewSize:-B-V,scrollMaxSize:0,offsetStart:-B,offsetEnd:-V};if(E===!0?(e===window?(d.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d.scrollViewSize+=document.documentElement.clientWidth):(d.scrollStart=C.scrollLeft,d.scrollViewSize+=C.clientWidth),d.scrollMaxSize=C.scrollWidth,a===!0&&(d.scrollStart=(Fe===!0?d.scrollMaxSize-d.scrollViewSize:0)-d.scrollStart)):(e===window?(d.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,d.scrollViewSize+=document.documentElement.clientHeight):(d.scrollStart=C.scrollTop,d.scrollViewSize+=C.clientHeight),d.scrollMaxSize=C.scrollHeight),n!==null)for(let k=n.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetStart+=k[O]);if(o!==null)for(let k=o.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetEnd+=k[O]);if(l!==e){const k=C.getBoundingClientRect(),A=l.getBoundingClientRect();E===!0?(d.offsetStart+=A.left-k.left,d.offsetEnd-=A.width):(d.offsetStart+=A.top-k.top,d.offsetEnd-=A.height),e!==window&&(d.offsetStart+=d.scrollStart),d.offsetEnd+=d.scrollMaxSize-d.offsetStart}return d}function yt(e,l,n,o){l==="end"&&(l=(e===window?document.body:e)[n===!0?"scrollWidth":"scrollHeight"]),e===window?n===!0?(o===!0&&(l=(Fe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-l),window.scrollTo(l,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,l):n===!0?(o===!0&&(l=(Fe===!0?e.scrollWidth-e.offsetWidth:0)-l),e.scrollLeft=l):e.scrollTop=l}function ze(e,l,n,o){if(n>=o)return 0;const E=l.length,a=Math.floor(n/U),B=Math.floor((o-1)/U)+1;let V=e.slice(a,B).reduce(be,0);return n%U!=0&&(V-=l.slice(a*U,n).reduce(be,0)),o%U!=0&&o!==E&&(V-=l.slice(o,B*U).reduce(be,0)),V}const bt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},_l=Object.keys(bt),wl=I({virtualScrollHorizontal:Boolean,onVirtualScroll:Function},bt);function Cl({virtualScrollLength:e,getVirtualScrollTarget:l,getVirtualScrollEl:n,virtualScrollItemSizeComputed:o}){const E=Ne(),{props:a,emit:B,proxy:V}=E,{$q:C}=V;let O,d,k,A=[],h;const K="qvs_"+yl++,F=H(0),x=H(0),W=H({}),D=H(null),Z=H(null),te=H(null),g=H({from:0,to:0}),Y=m(()=>a.tableColspan!==void 0?a.tableColspan:100);o===void 0&&(o=m(()=>a.virtualScrollItemSize));const ae=m(()=>o.value+";"+a.virtualScrollHorizontal),qe=m(()=>ae.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ke(qe,()=>{G()}),ke(ae,re);function re(){Ce(d,!0)}function we(c){Ce(c===void 0?d:c)}function N(c,s){const f=l();if(f==null||f.nodeType===8)return;const M=Qe(f,n(),D.value,Z.value,a.virtualScrollHorizontal,C.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);k!==M.scrollViewSize&&G(M.scrollViewSize),ce(f,M,Math.min(e.value-1,Math.max(0,parseInt(c,10)||0)),0,gl.indexOf(s)>-1?s:d>-1&&c>d?"end":"start")}function Re(){const c=l();if(c==null||c.nodeType===8)return;const s=Qe(c,n(),D.value,Z.value,a.virtualScrollHorizontal,C.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,M=s.scrollMaxSize-s.offsetStart-s.offsetEnd-x.value;if(O===s.scrollStart)return;if(s.scrollMaxSize<=0){ce(c,s,0,0);return}k!==s.scrollViewSize&&G(s.scrollViewSize),se(g.value.from);const R=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(h[f],s.scrollViewSize/2));if(R>0&&Math.ceil(s.scrollStart)>=R){ce(c,s,f,s.scrollMaxSize-s.offsetEnd-A.reduce(be,0));return}let S=0,y=s.scrollStart-s.offsetStart,L=y;if(y<=M&&y+s.scrollViewSize>=F.value)y-=F.value,S=g.value.from,L=y;else for(let b=0;y>=A[b]&&S<f;b++)y-=A[b],S+=U;for(;y>0&&S<f;)y-=h[S],y>-s.scrollViewSize?(S++,L=y):L=h[S]+y;ce(c,s,S,L)}function ce(c,s,f,M,R){const S=typeof R=="string"&&R.indexOf("-force")>-1,y=S===!0?R.replace("-force",""):R,L=y!==void 0?y:"start";let b=Math.max(0,f-W.value[L]),$=b+W.value.total;$>e.value&&($=e.value,b=Math.max(0,$-W.value.total)),O=s.scrollStart;const le=b!==g.value.from||$!==g.value.to;if(le===!1&&y===void 0){Ve(f);return}const{activeElement:xe}=document,J=te.value;le===!0&&J!==null&&J!==xe&&J.contains(xe)===!0&&(J.addEventListener("focusout",Ie),setTimeout(()=>{J!==void 0&&J.removeEventListener("focusout",Ie)})),gt(K,f-b+1);const He=y!==void 0?h.slice(b,f).reduce(be,0):0;if(le===!0){const de=$>=g.value.from&&b<=g.value.to?g.value.to:$;g.value={from:b,to:de},F.value=ze(A,h,0,b),x.value=ze(A,h,$,e.value),requestAnimationFrame(()=>{g.value.to!==$&&O===s.scrollStart&&(g.value={from:g.value.from,to:$},x.value=ze(A,h,$,e.value))})}requestAnimationFrame(()=>{if(O!==s.scrollStart)return;le===!0&&se(b);const de=h.slice(b,f).reduce(be,0),fe=de+s.offsetStart+F.value,Me=fe+h[f];let j=fe+M;if(y!==void 0){const T=de-He,X=s.scrollStart+T;j=S!==!0&&X<fe&&Me<X+s.scrollViewSize?X:y==="end"?Me-s.scrollViewSize:fe-(y==="start"?0:Math.round((s.scrollViewSize-h[f])/2))}O=j,yt(c,j,a.virtualScrollHorizontal,C.lang.rtl),Ve(f)})}function se(c){const s=te.value;if(s){const f=bl.call(s.children,b=>b.classList&&b.classList.contains("q-virtual-scroll--skip")===!1),M=f.length,R=a.virtualScrollHorizontal===!0?b=>b.getBoundingClientRect().width:b=>b.offsetHeight;let S=c,y,L;for(let b=0;b<M;){for(y=R(f[b]),b++;b<M&&f[b].classList.contains("q-virtual-scroll--with-prev")===!0;)y+=R(f[b]),b++;L=y-h[S],L!==0&&(h[S]+=L,A[Math.floor(S/U)]+=L),S++}}}function Ie(){te.value!==void 0&&te.value.focus()}function Ce(c,s){const f=1*o.value;(s===!0||Array.isArray(h)===!1)&&(h=[]);const M=h.length;h.length=e.value;for(let S=e.value-1;S>=M;S--)h[S]=f;const R=Math.floor((e.value-1)/U);A=[];for(let S=0;S<=R;S++){let y=0;const L=Math.min((S+1)*U,e.value);for(let b=S*U;b<L;b++)y+=h[b];A.push(y)}d=-1,O=void 0,F.value=ze(A,h,0,g.value.from),x.value=ze(A,h,g.value.to,e.value),c>=0?(se(g.value.from),ie(()=>{N(c)})):r()}function G(c){if(c===void 0&&typeof window!="undefined"){const y=l();y!=null&&y.nodeType!==8&&(c=Qe(y,n(),D.value,Z.value,a.virtualScrollHorizontal,C.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}k=c;const s=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,M=1+s+f,R=c===void 0||c<=0?1:Math.ceil(c/o.value),S=Math.max(1,R,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/M));W.value={total:Math.ceil(S*M),start:Math.ceil(S*s),center:Math.ceil(S*(.5+s)),end:Math.ceil(S*(1+s)),view:R}}function Ae(c,s){const f=a.virtualScrollHorizontal===!0?"width":"height",M={["--q-virtual-scroll-item-"+f]:o.value+"px"};return[c==="tbody"?w(c,{class:"q-virtual-scroll__padding",key:"before",ref:D},[w("tr",[w("td",{style:I({[f]:`${F.value}px`},M),colspan:Y.value})])]):w(c,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:I({[f]:`${F.value}px`},M)}),w(c,{class:"q-virtual-scroll__content",key:"content",ref:te,id:K,tabindex:-1},s.flat()),c==="tbody"?w(c,{class:"q-virtual-scroll__padding",key:"after",ref:Z},[w("tr",[w("td",{style:I({[f]:`${x.value}px`},M),colspan:Y.value})])]):w(c,{class:"q-virtual-scroll__padding",key:"after",ref:Z,style:I({[f]:`${x.value}px`},M)})]}function Ve(c){d!==c&&(a.onVirtualScroll!==void 0&&B("virtual-scroll",{index:c,from:g.value.from,to:g.value.to-1,direction:c<d?"decrease":"increase",ref:V}),d=c)}G();const r=Xt(Re,C.platform.is.ios===!0?120:35);Yt(()=>{G()});let q=!1;return Gt(()=>{q=!0}),Jt(()=>{if(q!==!0)return;const c=l();O!==void 0&&c!==void 0&&c!==null&&c.nodeType!==8?yt(c,O,a.virtualScrollHorizontal,C.lang.rtl):N(d)}),gt!==mt&&St(()=>{const c=document.getElementById(K+"_ss");c!==null&&c.remove(),r.cancel()}),Object.assign(V,{scrollTo:N,reset:re,refresh:we}),{virtualScrollSliceRange:g,virtualScrollSliceSizeComputed:W,setVirtualScrollSize:G,onVirtualScrollEvt:r,localResetVirtualScroll:Ce,padVirtualScroll:Ae,scrollTo:N,reset:re,refresh:we}}const wt=e=>["add","add-unique","toggle"].includes(e),Vl=".*+?^${}()|[]\\",xl=Object.keys(je);var Bl=$e({name:"QSelect",inheritAttrs:!1,props:Q(I(I(I({},wl),Dt),je),{modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:wt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function}),emits:[...st,"add","remove","input-value","keyup","keypress","keydown","filter-abort"],setup(e,{slots:l,emit:n}){const{proxy:o}=Ne(),{$q:E}=o,a=H(!1),B=H(!1),V=H(-1),C=H(""),O=H(!1),d=H(!1);let k,A,h,K,F,x,W,D,Z;const te=H(null),g=H(null),Y=H(null),ae=H(null),qe=H(null),re=jt(e),we=$t(lt),N=m(()=>Array.isArray(e.options)?e.options.length:0),Re=m(()=>e.virtualScrollItemSize===void 0?e.dense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ce,virtualScrollSliceSizeComputed:se,localResetVirtualScroll:Ie,padVirtualScroll:Ce,onVirtualScrollEvt:G,scrollTo:Ae,setVirtualScrollSize:Ve}=Cl({virtualScrollLength:N,getVirtualScrollTarget:pt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:Re}),r=ft(),q=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,i=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&A!==void 0?A:[],v=i.map(z=>xt(z,u));return e.modelValue===null&&t===!0?v.filter(z=>z!==null):v}return i}),c=m(()=>{const t={};return xl.forEach(i=>{const u=e[i];u!==void 0&&(t[i]=u)}),t}),s=m(()=>e.optionsDark===null?r.isDark.value:e.optionsDark),f=m(()=>vt(q.value)),M=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||q.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),R=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),S=m(()=>N.value===0),y=m(()=>q.value.map(t=>T.value(t)).join(", ")),L=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),b=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||q.value.some(L.value))),$=m(()=>r.focused.value===!0?e.tabindex:-1),le=m(()=>({tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-owns":`${r.targetUid.value}_lb`,"aria-controls":`${r.targetUid.value}_lb`})),xe=m(()=>{const t={id:`${r.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"};return V.value>=0&&(t["aria-activedescendant"]=`${r.targetUid.value}_${V.value}`),t}),J=m(()=>q.value.map((t,i)=>({index:i,opt:t,html:L.value(t),selected:!0,removeAtIndex:Vt,toggleOption:ue,tabindex:$.value}))),He=m(()=>{if(N.value===0)return[];const{from:t,to:i}=ce.value;return e.options.slice(t,i).map((u,v)=>{const z=X.value(u)===!0,p=t+v,_={clickable:!0,active:!1,activeClass:Me.value,manualFocus:!0,focused:!1,disable:z,tabindex:-1,dense:e.optionsDense,dark:s.value,role:"option",id:`${r.targetUid.value}_${p}`,onClick:()=>{ue(u)}};return z!==!0&&(Pe(u)===!0&&(_.active=!0),V.value===p&&(_.focused=!0),_["aria-selected"]=_.active===!0?"true":"false",E.platform.is.desktop===!0&&(_.onMousemove=()=>{ve(p)})),{index:p,opt:u,html:L.value(u),label:T.value(u),selected:_.active,focused:_.focused,toggleOption:ue,setOptionIndex:ve,itemProps:_}})}),de=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:E.iconSet.arrow.dropdown),fe=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Me=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),j=m(()=>Te(e.optionValue,"value")),T=m(()=>Te(e.optionLabel,"label")),X=m(()=>Te(e.optionDisable,"disable")),Oe=m(()=>q.value.map(t=>j.value(t))),Ct=m(()=>{const t={onInput:lt,onChange:we,onKeydown:Ze,onKeyup:Ge,onKeypress:Je,onFocus:Xe,onClick(i){h===!0&&ye(i)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=we,t});ke(q,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&r.innerLoading.value!==!0&&(B.value!==!0&&a.value!==!0||f.value!==!0)&&(K!==!0&&ge(),(B.value===!0||a.value===!0)&&me(""))},{immediate:!0}),ke(()=>e.fillInput,ge),ke(a,ut);function Ue(t){return e.emitValue===!0?j.value(t):t}function Le(t){if(t>-1&&t<q.value.length)if(e.multiple===!0){const i=e.modelValue.slice();n("remove",{index:t,value:i.splice(t,1)[0]}),n("update:modelValue",i)}else n("update:modelValue",null)}function Vt(t){Le(t),r.focus()}function We(t,i){const u=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&pe(T.value(t),!0,!0),n("update:modelValue",u);return}if(q.value.length===0){n("add",{index:0,value:u}),n("update:modelValue",e.multiple===!0?[u]:u);return}if(i===!0&&Pe(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();n("add",{index:v.length,value:u}),v.push(u),n("update:modelValue",v)}function ue(t,i){if(r.editable.value!==!0||t===void 0||X.value(t)===!0)return;const u=j.value(t);if(e.multiple!==!0){i!==!0&&(pe(e.fillInput===!0?T.value(t):"",!0,!0),ne()),g.value!==null&&g.value.focus(),(q.value.length===0||ee(j.value(q.value[0]),u)!==!0)&&n("update:modelValue",e.emitValue===!0?u:t);return}if((h!==!0||O.value===!0)&&r.focus(),Xe(),q.value.length===0){const p=e.emitValue===!0?u:t;n("add",{index:0,value:p}),n("update:modelValue",e.multiple===!0?[p]:p);return}const v=e.modelValue.slice(),z=Oe.value.findIndex(p=>ee(p,u));if(z>-1)n("remove",{index:z,value:v.splice(z,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const p=e.emitValue===!0?u:t;n("add",{index:v.length,value:p}),v.push(p)}n("update:modelValue",v)}function ve(t){if(E.platform.is.desktop!==!0)return;const i=t>-1&&t<N.value?t:-1;V.value!==i&&(V.value=i)}function _e(t=1,i){if(a.value===!0){let u=V.value;do u=ht(u+t,-1,N.value-1);while(u!==-1&&u!==V.value&&X.value(e.options[u])===!0);V.value!==u&&(ve(u),Ae(u),i!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(u>=0?T.value(e.options[u]):x))}}function xt(t,i){const u=v=>ee(j.value(v),t);return e.options.find(u)||i.find(u)||t}function Te(t,i){const u=t!==void 0?t:i;return typeof u=="function"?u:v=>Object(v)===v&&u in v?v[u]:v}function Pe(t){const i=j.value(t);return Oe.value.find(u=>ee(u,i))!==void 0}function Xe(t){e.useInput===!0&&g.value!==null&&(t===void 0||g.value===t.target&&t.target.value===y.value)&&g.value.select()}function Ye(t){tl(t,27)===!0&&a.value===!0&&(ye(t),ne(),ge()),n("keyup",t)}function Ge(t){const{value:i}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",clearTimeout(k),ge(),typeof i=="string"&&i.length>0){const u=i.toLocaleLowerCase(),v=p=>{const _=e.options.find(P=>p.value(P).toLocaleLowerCase()===u);return _===void 0?!1:(q.value.indexOf(_)===-1?ue(_):ne(),!0)},z=p=>{v(j)!==!0&&(v(T)===!0||p===!0||me(i,!0,()=>z(!0)))};z()}else r.clearValue(t)}function Je(t){n("keypress",t)}function Ze(t){if(n("keydown",t),ll(t)===!0)return;const i=C.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(V.value>-1||i===!0);if(t.keyCode===27){Ke(t);return}if(t.keyCode===9&&u===!1){Se();return}if(t.target===void 0||t.target.id!==r.targetUid.value)return;if(t.keyCode===40&&r.innerLoading.value!==!0&&a.value===!1){oe(t),he();return}if(t.keyCode===8&&e.hideSelected!==!0&&C.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Le(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&n("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof C.value!="string"||C.value.length===0)&&(oe(t),V.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&se.value!==void 0&&(oe(t),V.value=Math.max(-1,Math.min(N.value,V.value+(t.keyCode===33?-1:1)*se.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),_e(t.keyCode===38?-1:1,e.multiple));const v=N.value;if((D===void 0||Z<Date.now())&&(D=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===t.ctrlKey&&(t.keyCode!==32||D.length>0)){a.value!==!0&&he(t);const z=t.key.toLocaleLowerCase(),p=D.length===1&&D[0]===z;Z=Date.now()+1500,p===!1&&(oe(t),D+=z);const _=new RegExp("^"+D.split("").map(De=>Vl.indexOf(De)>-1?"\\"+De:De).join(".*"),"i");let P=V.value;if(p===!0||P<0||_.test(T.value(e.options[P]))!==!0)do P=ht(P+1,-1,v-1);while(P!==V.value&&(X.value(e.options[P])===!0||_.test(T.value(e.options[P]))!==!0));V.value!==P&&ie(()=>{ve(P),Ae(P),P>=0&&e.useInput===!0&&e.fillInput===!0&&Be(T.value(e.options[P]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&oe(t),V.value>-1&&V.value<v){ue(e.options[V.value]);return}if(i===!0){const z=(p,_)=>{if(_){if(wt(_)!==!0)return}else _=e.newValueMode;if(p==null)return;pe("",e.multiple!==!0,!0),(_==="toggle"?ue:We)(p,_==="add-unique"),e.multiple!==!0&&(g.value!==null&&g.value.focus(),ne())};if(e.onNewValue!==void 0?n("new-value",C.value,z):z(C.value),e.multiple!==!0)return}a.value===!0?Se():r.innerLoading.value!==!0&&he()}}function et(){return h===!0?qe.value:Y.value!==null&&Y.value.__qPortalInnerRef.value!==null?Y.value.__qPortalInnerRef.value:void 0}function pt(){return et()}function kt(){return e.hideSelected===!0?[]:l["selected-item"]!==void 0?J.value.map(t=>l["selected-item"](t)).slice():l.selected!==void 0?[].concat(l.selected()):e.useChips===!0?J.value.map((t,i)=>w(hl,{key:"option-"+i,removable:r.editable.value===!0&&X.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:$.value,onRemove(){t.removeAtIndex(i)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:T.value(t.opt)}))):[w("span",{[b.value===!0?"innerHTML":"textContent"]:e.displayValue!==void 0?e.displayValue:y.value})]}function tt(){if(S.value===!0)return l["no-option"]!==void 0?l["no-option"]({inputValue:C.value}):void 0;const t=l.option!==void 0?l.option:u=>w(cl,I({key:u.index},u.itemProps),()=>w(al,()=>w(rl,()=>w("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let i=Ce("div",He.value.map(t));return l["before-options"]!==void 0&&(i=l["before-options"]().concat(i)),ul(l["after-options"],i)}function zt(t,i){const u=I(Q(I(I({ref:i===!0?g:void 0,key:"i_t",class:M.value,style:e.inputStyle,value:C.value!==void 0?C.value:"",type:"search"},le.value),r.splitAttrs.attributes.value),{id:i===!0?r.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0}),Ct.value);return t!==!0&&h===!0&&(Array.isArray(u.class)===!0?u.class=[...u.class,"no-pointer-events"]:u.class+=" no-pointer-events"),w("input",u)}function lt(t){clearTimeout(k),!(t&&t.target&&t.target.composing===!0)&&(Be(t.target.value||""),K=!0,x=C.value,r.focused.value!==!0&&(h!==!0||O.value===!0)&&r.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{me(C.value)},e.inputDebounce)))}function Be(t){C.value!==t&&(C.value=t,n("input-value",t))}function pe(t,i,u){K=u!==!0,e.useInput===!0&&(Be(t),(i===!0||u!==!0)&&(x=t),i!==!0&&me(t))}function me(t,i,u){if(e.onFilter===void 0||i!==!0&&r.focused.value!==!0)return;r.innerLoading.value===!0?n("filter-abort"):(r.innerLoading.value=!0,d.value=!0),t!==""&&e.multiple!==!0&&q.value.length>0&&K!==!0&&t===T.value(q.value[0])&&(t="");const v=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);clearTimeout(F),F=v,n("filter",t,(z,p)=>{(i===!0||r.focused.value===!0)&&F===v&&(clearTimeout(F),typeof z=="function"&&z(),d.value=!1,ie(()=>{r.innerLoading.value=!1,r.editable.value===!0&&(i===!0?a.value===!0&&ne():a.value===!0?ut(!0):a.value=!0),typeof p=="function"&&ie(()=>{p(o)}),typeof u=="function"&&ie(()=>{u(o)})}))},()=>{r.focused.value===!0&&F===v&&(clearTimeout(F),r.innerLoading.value=!1,d.value=!1),a.value===!0&&(a.value=!1)})}function qt(){return w(il,Q(I({ref:Y,class:R.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&S.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:s.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:fe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0},xe.value),{onScrollPassive:G,onBeforeShow:ot,onBeforeHide:It,onShow:At}),tt)}function It(t){it(t),Se()}function At(){Ve()}function Mt(t){ye(t),g.value!==null&&g.value.focus(),O.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Ot(t){ye(t),ie(()=>{O.value=!1})}function _t(){const t=[w(ml,Q(I(Q(I({class:`col-auto ${r.fieldClass.value}`},c.value),{for:r.targetUid.value,dark:s.value,square:!0,loading:d.value,itemAligned:!1,filled:!0,stackLabel:C.value.length>0}),r.splitAttrs.listeners.value),{onFocus:Mt,onBlur:Ot}),Q(I({},l),{rawControl:()=>r.getControl(!0),before:void 0,after:void 0}))];return a.value===!0&&t.push(w("div",Q(I({ref:qe,class:R.value+" scroll",style:e.popupContentStyle},xe.value),{onClick:Ke,onScrollPassive:G}),tt())),w(sl,{ref:ae,modelValue:B.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ot,onBeforeHide:Bt,onHide:Et,onShow:Ft},()=>w("div",{class:"q-select__dialog"+(s.value===!0?" q-select__dialog--dark q-dark":"")+(O.value===!0?" q-select__dialog--focused":"")},t))}function Bt(t){it(t),ae.value!==null&&ae.value.__updateRefocusTarget(r.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),r.focused.value=!1}function Et(t){ne(),r.focused.value===!1&&n("blur",t),ge()}function Ft(){const t=document.activeElement;(t===null||t.id!==r.targetUid.value)&&g.value!==null&&g.value!==t&&g.value.focus(),Ve()}function Se(){B.value!==!0&&(V.value=-1,a.value===!0&&(a.value=!1),r.focused.value===!1&&(clearTimeout(F),F=void 0,r.innerLoading.value===!0&&(n("filter-abort"),r.innerLoading.value=!1,d.value=!1)))}function he(t){r.editable.value===!0&&(h===!0?(r.onControlFocusin(t),B.value=!0,ie(()=>{r.focus()})):r.focus(),e.onFilter!==void 0?me(C.value):(S.value!==!0||l["no-option"]!==void 0)&&(a.value=!0))}function ne(){B.value=!1,Se()}function ge(){e.useInput===!0&&pe(e.multiple!==!0&&e.fillInput===!0&&q.value.length>0&&T.value(q.value[0])||"",!0,!0)}function ut(t){let i=-1;if(t===!0){if(q.value.length>0){const u=j.value(q.value[0]);i=e.options.findIndex(v=>ee(j.value(v),u))}Ie(i)}ve(i)}function nt(){B.value===!1&&Y.value!==null&&Y.value.updatePosition()}function ot(t){t!==void 0&&ye(t),n("popup-show",t),r.hasPopupOpen=!0,r.onControlFocusin(t)}function it(t){t!==void 0&&ye(t),n("popup-hide",t),r.hasPopupOpen=!1,r.onControlFocusout(t)}function at(){h=E.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?l["no-option"]!==void 0||e.onFilter!==void 0||S.value===!1:!0),W=E.platform.is.ios===!0&&h===!0&&e.useInput===!0?"fade":e.transitionShow}return Zt(at),el(nt),at(),St(()=>{clearTimeout(k)}),Object.assign(o,{showPopup:he,hidePopup:ne,removeAtIndex:Le,add:We,toggleOption:ue,setOptionIndex:ve,moveOptionSelection:_e,filter:me,updateMenuPosition:nt,updateInputValue:pe,isOptionSelected:Pe,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>X.value.apply(null,t),getOptionValue:(...t)=>j.value.apply(null,t),getOptionLabel:(...t)=>T.value.apply(null,t)}),Object.assign(r,{innerValue:q,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:te,targetRef:g,hasValue:f,showPopup:he,floatingLabel:m(()=>(e.hideSelected===!0?C.value.length>0:f.value===!0)||vt(e.displayValue)),getControlChild:()=>{if(r.editable.value!==!1&&(B.value===!0||S.value!==!0||l["no-option"]!==void 0))return h===!0?_t():qt();r.hasPopupOpen===!0&&(r.hasPopupOpen=!1)},controlEvents:{onFocusin(t){r.onControlFocusin(t)},onFocusout(t){r.onControlFocusout(t,()=>{ge(),Se()})},onClick(t){if(Ke(t),h!==!0&&a.value===!0){Se(),g.value!==null&&g.value.focus();return}he(t)}},getControl:t=>{const i=kt(),u=t===!0||B.value!==!0||h!==!0;if(e.useInput===!0?i.push(zt(t,u)):r.editable.value===!0&&(i.push(w("div",Q(I({ref:u===!0?g:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?r.targetUid.value:void 0},le.value),{onKeydown:Ze,onKeyup:Ye,onKeypress:Je}))),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&i.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,onKeyup:Ge}))),re.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const v=Oe.value.map(z=>w("option",{value:z,selected:!0}));i.push(w("select",{class:"hidden",name:re.value,multiple:e.multiple},v))}return w("div",I({class:"q-field__native row items-center"},r.splitAttrs.attributes.value),i)},getInnerAppend:()=>e.loading!==!0&&d.value!==!0&&e.hideDropdownIcon!==!0?[w(Ee,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:de.value})]:null}),dt(r)}});export{Bl as Q,Cl as a,Ml as b,_l as c,Ol as i,wl as u};
