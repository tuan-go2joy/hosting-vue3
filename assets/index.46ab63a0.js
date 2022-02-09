var pe=Object.defineProperty,ge=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var U=(e,n,o)=>n in e?pe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,v=(e,n)=>{for(var o in n||(n={}))he.call(n,o)&&U(e,o,n[o]);if(G)for(var o of G(n))ze.call(n,o)&&U(e,o,n[o]);return e},I=(e,n)=>ge(e,de(n));import{d as W,r as q,c as g,a as t,u,F as R,o as _,b as Le,N as Ce,e as A,t as ve,f as we,g as X,h as J,i as K,j as T,k as Ve,l as Y,m as O,n as d,w as s,Q as ye,p as be,q as D,s as Ie,v as Se,x as N,y as ke,z as ee,A as Ee,B as w,C as V,D as S,E as k,G as h,H as ne,I as Me,J as Re,K as H,L as oe,M as Te,O as De,P as Ne,R as re,S as B,T as $,U as Ze,V as Fe,W as Pe,X as xe,Y as Ae,Z as Oe}from"./vendor.c8a9d970.js";const He=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};He();const Be=W({setup(e){return(n,o)=>{const r=q("router-view");return _(),g(R,null,[t(r),t(u(Le.exports.VueQueryDevTools))],64)}}}),$e={plugins:{Notify:Ce}},Qe="modulepreload",te={},je="/GoPMS/",c=function(n,o){return!o||o.length===0?n():Promise.all(o.map(r=>{if(r=`${je}${r}`,r in te)return;te[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Qe,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((z,C)=>{l.addEventListener("load",z),l.addEventListener("error",C)})})).then(()=>n())},E="h-access",Z="h-refresh",Q="h-accommodation-id",M="h-user-id",Ge="https://api-dev.gopms.io/v1",Hn=/^[0-9]{10}$/,se=localStorage.getItem(Q),ie=localStorage.getItem(Z),ae=localStorage.getItem(E),_e=localStorage.getItem(M),f=A({accommodationId:se?+se:null,refreshToken:ie,accessToken:ae,isLoggedIn:!!ae&&!!ie,userId:_e?+_e:null}),F=()=>{const e=r=>{localStorage.setItem(Q,r.accommodationId+""),localStorage.setItem(Z,r.refresh),localStorage.setItem(E,r.access),localStorage.setItem(M,r.userId+""),f.accommodationId=r.accommodationId,f.refreshToken=r.refresh,f.accessToken=r.access,f.isLoggedIn=!0,f.userId=r.userId},n=r=>{localStorage.removeItem(Q),localStorage.removeItem(Z),localStorage.removeItem(E),localStorage.removeItem(M),f.accommodationId=null,f.refreshToken=null,f.accessToken=null,f.isLoggedIn=!1,f.userId=null,r==null||r.push("/login")},o=r=>{localStorage.setItem(E,r),f.accessToken=r};return I(v({},ve(f)),{signin:e,signout:n,refreshAccessToken:o})},{accessToken:Ue}=F(),j=we.create({baseURL:Ge,headers:{Accept:"application/json"}});j.interceptors.request.use(e=>(e.headers=I(v({},e.headers),{Authorization:`Bearer ${Ue.value}`}),e));var P;(function(e){e.ROOM_TYPES="room-types",e.CONSTANTS="constants",e.PROFILES="profiles",e.REFRESH="refresh",e.FLOORS="floors",e.ROOMS="rooms",e.TOKEN="token",e.ME="me"})(P||(P={}));const We=async()=>{const e=localStorage.getItem(M),n=localStorage.getItem(E),{data:o}=await j.post("/authentication/token/verify/",{user_id:e,token:n});return o},qe=async()=>{const e=localStorage.getItem(Z),n=localStorage.getItem(M),{data:o}=await j.post("/authentication/token/refresh/",{refresh:e,user_id:n});return o},Xe=()=>{const e=X(),{isLoggedIn:n,refreshAccessToken:o,signout:r}=F(),i=A({enabled:n,retry:!1}),a=J(P.TOKEN,We,i),l=A({enabled:a.isError,retry:!1,onSuccess:z=>{o(z.access),a.refetch.value()},onError:()=>{r(e)}});return J(P.REFRESH,qe,l),v({},a)};var y=(e,n)=>{const o=e.__vccOpts||e;for(const[r,i]of n)o[r]=i;return o};const Je={},Ke={viewBox:"0 0 64 64",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Ye=K('<path d="M5.11987 37.3248L14.0415 42.4768V52.7744L5.11987 47.6224V37.3248Z" fill="#CA6510"></path><path d="M40.7936 37.3248L31.8784 42.4768L22.9568 37.3248L31.8784 32.1728L40.7936 37.3248Z" fill="#FD7E14"></path><path d="M5.11987 27.0272L14.0415 32.1728V42.4768L5.11987 37.3248V27.0272Z" fill="#CA6510"></path><path d="M22.9568 27.0272L31.8784 32.1728V42.4768L22.9568 37.3248V27.0272Z" fill="#FD7E14"></path><path d="M40.7936 27.0272L31.8784 32.1728L22.9568 27.0272L31.8784 21.8752L40.7936 27.0272Z" fill="#FD7E14"></path><path d="M40.7934 37.3248L31.8782 42.4768V32.1728L40.7934 27.0272V37.3248Z" fill="#FD7E14"></path><path d="M31.8784 32.1728L22.9568 37.3248V27.0272L31.8784 21.8752V32.1728Z" fill="#FD7E14"></path><path d="M40.7936 37.3248L31.8784 42.4768L22.9568 37.3248L31.8784 32.1728L40.7936 37.3248Z" fill="#FD7E14"></path><path d="M22.9568 27.0272L31.8784 32.1728V42.4768L22.9568 37.3248V27.0272Z" fill="#FD7E14"></path><path d="M40.7936 27.0272L31.8784 32.1728L22.9568 27.0272L31.8784 21.8752L40.7936 27.0272Z" fill="#FD7E14"></path><path d="M40.7934 37.3248L31.8782 42.4768V32.1728L40.7934 27.0272V37.3248Z" fill="#FD7E14"></path><path d="M31.8784 32.1728L22.9568 37.3248V27.0272L31.8784 21.8752V32.1728Z" fill="#FD7E14"></path><path d="M31.8782 21.8752L40.7934 27.0272V37.3248L31.8782 32.1728V21.8752Z" fill="#FD7E14"></path><path d="M58.6303 47.6224L49.7151 52.7744V42.4768L58.6303 37.3248V47.6224Z" fill="#FD9843"></path><path d="M58.6303 37.3248L49.7151 42.4768V32.1728L58.6303 27.0272V37.3248Z" fill="#FD9843"></path><path d="M31.8782 21.8752L40.7934 27.0272V37.3248L31.8782 32.1728V21.8752Z" fill="#FD7E14"></path><path d="M40.7936 6.432L31.8784 11.5776L22.9568 6.432L31.8784 1.28L40.7936 6.432Z" fill="#FD7E14"></path><path d="M31.8781 11.5776L22.9565 16.7296L14.0413 11.5776L22.9565 6.43201L31.8781 11.5776Z" fill="#FD7E14"></path><path d="M5.11987 16.7296L14.0415 21.8752V32.1728L5.11987 27.0272V16.7296Z" fill="#CA6510"></path><path d="M22.9567 16.7296L14.0415 21.8752L5.11987 16.7296L14.0415 11.5776L22.9567 16.7296Z" fill="#FD7E14"></path><path d="M49.715 11.5776L40.7934 16.7296L31.8782 11.5776L40.7934 6.43201L49.715 11.5776Z" fill="#FD7E14"></path><path d="M58.6302 16.7296L49.7151 21.8752L40.7935 16.7296L49.7151 11.5776L58.6302 16.7296Z" fill="#FD7E14"></path><path d="M58.63 27.0272L49.7148 32.1728V21.8752L58.63 16.7296V27.0272Z" fill="#FD9843"></path><path d="M22.9568 27.0272L31.8784 32.1728V42.4768L22.9568 37.3248V27.0272Z" fill="#CA6510"></path><path d="M40.7936 27.0272L31.8784 32.1728L22.9568 27.0272L31.8784 21.8752L40.7936 27.0272Z" fill="#FD7E14"></path><path d="M40.7934 37.3248L31.8782 42.4768V32.1728L40.7934 27.0272V37.3248Z" fill="#FD9843"></path><path d="M49.715 52.7744L40.7935 57.92V47.6224L49.715 42.4768V52.7744Z" fill="#FD9843"></path><path d="M22.9568 47.6224L31.8784 52.7744V63.072L22.9568 57.92V47.6224Z" fill="#CA6510"></path><path d="M40.7934 57.92L31.8782 63.072V52.7744L40.7934 47.6224V57.92Z" fill="#FD9843"></path>',29),en=[Ye];function nn(e,n){return _(),g("svg",Ke,en)}var on=y(Je,[["render",nn]]);const rn={},tn={viewBox:"0 0 70 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},sn=T("path",{d:"M10.1973 7.09459H13.5081V12.5811C12.7514 13.1234 11.8811 13.5396 10.8973 13.8297C9.91351 14.1198 8.92973 14.2649 7.94595 14.2649C6.55856 14.2649 5.30991 13.9748 4.2 13.3946C3.09009 12.8018 2.21982 11.982 1.58919 10.9351C0.958559 9.88829 0.643243 8.7027 0.643243 7.37838C0.643243 6.05405 0.958559 4.86847 1.58919 3.82162C2.21982 2.77477 3.0964 1.96126 4.21892 1.38108C5.34144 0.788288 6.60901 0.491891 8.02162 0.491891C9.25766 0.491891 10.3676 0.699999 11.3514 1.11622C12.3351 1.53243 13.155 2.13153 13.8108 2.91351L11.427 5.07027C10.5315 4.08649 9.45946 3.59459 8.21081 3.59459C7.07568 3.59459 6.16126 3.94144 5.46757 4.63513C4.77387 5.31622 4.42703 6.23063 4.42703 7.37838C4.42703 8.10991 4.58468 8.76577 4.9 9.34595C5.21532 9.91351 5.65676 10.3613 6.22432 10.6892C6.79189 11.0045 7.44144 11.1622 8.17297 11.1622C8.89189 11.1622 9.56667 11.0171 10.1973 10.727V7.09459ZM20.4803 14.1703C19.383 14.1703 18.3929 13.9432 17.5101 13.4892C16.6272 13.0351 15.9335 12.4045 15.429 11.5973C14.9371 10.7901 14.6911 9.87568 14.6911 8.85405C14.6911 7.84504 14.9371 6.93694 15.429 6.12973C15.9335 5.32252 16.6209 4.6982 17.4911 4.25676C18.374 3.8027 19.3704 3.57568 20.4803 3.57568C21.5902 3.57568 22.5866 3.8027 23.4695 4.25676C24.3524 4.6982 25.0398 5.32252 25.5317 6.12973C26.0236 6.92432 26.2695 7.83243 26.2695 8.85405C26.2695 9.87568 26.0236 10.7901 25.5317 11.5973C25.0398 12.4045 24.3524 13.0351 23.4695 13.4892C22.5866 13.9432 21.5902 14.1703 20.4803 14.1703ZM20.4803 11.3135C21.111 11.3135 21.6281 11.0991 22.0317 10.6703C22.4353 10.2288 22.6371 9.62342 22.6371 8.85405C22.6371 8.0973 22.4353 7.5045 22.0317 7.07568C21.6281 6.64685 21.111 6.43243 20.4803 6.43243C19.8497 6.43243 19.3326 6.64685 18.929 7.07568C18.5254 7.5045 18.3236 8.0973 18.3236 8.85405C18.3236 9.62342 18.5254 10.2288 18.929 10.6703C19.3326 11.0991 19.8497 11.3135 20.4803 11.3135ZM33.7806 0.756756C34.9788 0.756756 36.0194 0.958558 36.9022 1.36216C37.7851 1.75315 38.4662 2.32072 38.9455 3.06486C39.4248 3.7964 39.6644 4.66036 39.6644 5.65676C39.6644 6.65315 39.4248 7.51712 38.9455 8.24865C38.4662 8.98018 37.7851 9.54775 36.9022 9.95135C36.0194 10.3423 34.9788 10.5378 33.7806 10.5378H31.4725V14H27.7266V0.756756H33.7806ZM33.5536 7.58649C34.323 7.58649 34.9031 7.42252 35.2941 7.09459C35.6851 6.75405 35.8806 6.27477 35.8806 5.65676C35.8806 5.03874 35.6851 4.55946 35.2941 4.21892C34.9031 3.87838 34.323 3.70811 33.5536 3.70811H31.4725V7.58649H33.5536ZM53.0692 14L53.0314 6.98108L49.626 12.6946H47.9611L44.5746 7.17027V14H41.1124V0.756756H44.1962L48.8503 8.4L53.3908 0.756756H56.4746L56.5124 14H53.0692ZM63.4387 14.2649C62.3666 14.2649 61.3261 14.1324 60.3171 13.8676C59.3081 13.6027 58.4882 13.2495 57.8576 12.8081L59.0873 10.0459C59.6801 10.4369 60.3675 10.7523 61.1495 10.9919C61.9315 11.2315 62.7008 11.3514 63.4576 11.3514C64.8954 11.3514 65.6144 10.9919 65.6144 10.273C65.6144 9.89459 65.4063 9.61712 64.99 9.44054C64.5864 9.25135 63.9306 9.05586 63.0225 8.85405C62.0261 8.63964 61.1936 8.41261 60.5252 8.17297C59.8567 7.92072 59.2828 7.52342 58.8035 6.98108C58.3243 6.43874 58.0846 5.70721 58.0846 4.78649C58.0846 3.97928 58.3053 3.25405 58.7468 2.61081C59.1882 1.95495 59.8441 1.43784 60.7144 1.05946C61.5972 0.681081 62.6756 0.491891 63.9495 0.491891C64.8198 0.491891 65.6774 0.592792 66.5225 0.794595C67.3675 0.983784 68.1117 1.26757 68.7549 1.64595L67.6008 4.42703C66.3396 3.74595 65.1162 3.40541 63.9306 3.40541C63.1864 3.40541 62.6441 3.51892 62.3035 3.74595C61.963 3.96036 61.7927 4.24414 61.7927 4.5973C61.7927 4.95045 61.9945 5.21532 62.3981 5.39189C62.8017 5.56847 63.4513 5.75135 64.3468 5.94054C65.3558 6.15495 66.1882 6.38829 66.8441 6.64054C67.5126 6.88018 68.0864 7.27117 68.5657 7.81351C69.0576 8.34324 69.3035 9.06847 69.3035 9.98919C69.3035 10.7838 69.0828 11.5027 68.6414 12.1459C68.1999 12.7892 67.5378 13.3063 66.6549 13.6973C65.772 14.0757 64.6999 14.2649 63.4387 14.2649Z",fill:"currentColor"},null,-1),an=[sn];function _n(e,n){return _(),g("svg",tn,an)}var cn=y(rn,[["render",_n]]);const ln=()=>{const e=Ve(),n=()=>{e.locale.value=e.locale.value==="en-US"?"vi-VN":"en-US"};return I(v({},e),{toggleLocale:n})},un={},mn={width:"100%",height:"100%",viewBox:"0 0 28 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},fn=K('<path d="M14.0001 27.3332C21.3639 27.3332 27.3334 21.3636 27.3334 13.9998C27.3334 6.63604 21.3639 0.666504 14.0001 0.666504C6.63628 0.666504 0.666748 6.63604 0.666748 13.9998C0.666748 21.3636 6.63628 27.3332 14.0001 27.3332Z" fill="#F0F0F0"></path><path d="M3.42266 5.88232C2.37532 7.24498 1.58558 8.81555 1.12573 10.5218H8.06209L3.42266 5.88232Z" fill="#0052B4"></path><path d="M26.874 10.5217C26.4141 8.81556 25.6244 7.24498 24.5771 5.88232L19.9377 10.5217H26.874Z" fill="#0052B4"></path><path d="M1.12573 17.478C1.58563 19.1842 2.37537 20.7547 3.42266 22.1173L8.06193 17.478H1.12573Z" fill="#0052B4"></path><path d="M22.1172 3.42296C20.7545 2.37561 19.184 1.58587 17.4778 1.12598V8.06228L22.1172 3.42296Z" fill="#0052B4"></path><path d="M5.88306 24.5768C7.24571 25.6241 8.81629 26.4139 10.5224 26.8738V19.9375L5.88306 24.5768Z" fill="#0052B4"></path><path d="M10.5224 1.12598C8.81623 1.58587 7.24566 2.37561 5.88306 3.4229L10.5224 8.06223V1.12598Z" fill="#0052B4"></path><path d="M17.478 26.8738C19.1842 26.4139 20.7547 25.6241 22.1173 24.5768L17.478 19.9375V26.8738Z" fill="#0052B4"></path><path d="M19.9377 17.478L24.5771 22.1174C25.6244 20.7548 26.4141 19.1842 26.874 17.478H19.9377Z" fill="#0052B4"></path><path d="M27.2206 12.2607H15.7393H15.7392V0.779368C15.1699 0.705254 14.5895 0.666504 14.0001 0.666504C13.4106 0.666504 12.8302 0.705254 12.261 0.779368V12.2606V12.2607H0.779613C0.705498 12.83 0.666748 13.4104 0.666748 13.9998C0.666748 14.5894 0.705498 15.1697 0.779613 15.739H12.2609H12.2609V27.2203C12.8302 27.2944 13.4106 27.3332 14.0001 27.3332C14.5895 27.3332 15.1699 27.2945 15.7392 27.2203V15.7391V15.739H27.2206C27.2947 15.1697 27.3334 14.5894 27.3334 13.9998C27.3334 13.4104 27.2947 12.83 27.2206 12.2607Z" fill="#D80027"></path><path d="M17.4775 17.4781L23.4273 23.4279C23.701 23.1543 23.962 22.8683 24.2111 22.5719L19.1172 17.478H17.4775V17.4781Z" fill="#D80027"></path><path d="M10.5206 17.478H10.5205L4.5708 23.4278C4.84434 23.7014 5.13033 23.9625 5.42679 24.2115L10.5206 19.1176V17.478Z" fill="#D80027"></path><path d="M10.5221 10.5212V10.5211L4.57232 4.57129C4.29868 4.84483 4.03764 5.13082 3.78857 5.42728L8.88248 10.5212H10.5221V10.5212Z" fill="#D80027"></path><path d="M17.4775 10.5217L23.4274 4.57178C23.1538 4.29814 22.8679 4.0371 22.5714 3.78809L17.4775 8.88199V10.5217Z" fill="#D80027"></path>',14),pn=[fn];function gn(e,n){return _(),g("svg",mn,pn)}var dn=y(un,[["render",gn]]);const hn={},zn={width:"100%",height:"100%",viewBox:"0 0 28 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Ln=T("path",{d:"M14.0006 27.3332C21.3644 27.3332 27.3339 21.3636 27.3339 13.9998C27.3339 6.63604 21.3644 0.666504 14.0006 0.666504C6.63677 0.666504 0.667236 6.63604 0.667236 13.9998C0.667236 21.3636 6.63677 27.3332 14.0006 27.3332Z",fill:"#D80027"},null,-1),Cn=T("path",{d:"M13.9992 7.62256L15.4382 12.0512H20.0947L16.3275 14.7881L17.7664 19.2168L13.9992 16.4797L10.232 19.2168L11.671 14.7881L7.90381 12.0512H12.5603L13.9992 7.62256Z",fill:"#FFDA44"},null,-1),vn=[Ln,Cn];function wn(e,n){return _(),g("svg",zn,vn)}var Vn=y(hn,[["render",wn]]);const yn=W({setup(e){const{toggleLocale:n,locale:o,t:r}=ln(),{data:i}=Xe(),a=X(),l=F(),z=Y(!0),C=Y(!1),le=O(()=>[{to:"/",iconName:"space_dashboard",text:r("home")},{to:"/room-view",iconName:"calendar_view_month",text:r("room_view")},{to:"/bookings",iconName:"auto_stories",text:r("booking",99)},{to:"/guests",iconName:"contacts",text:r("guest",99)},{to:"/services",iconName:"room_service",text:r("service",99)}]),ue=O(()=>[{to:"/reports/bookings",iconName:"auto_stories",text:r("booking")},{to:"/reports/transactions",iconName:"paid",text:r("transaction")}]),me=O(()=>[{to:"/settings/information",iconName:"business",text:r("information")},{to:"/settings/policies",iconName:"menu_book",text:r("policy")},{to:"/settings/room-settings",iconName:"bed",text:r("room_setting")},{to:"/settings/booking-sources",iconName:"source",text:r("booking_source")},{to:"/settings/staff",iconName:"people",text:r("staff")},{to:"/settings/rate-structures",iconName:"price_change",text:r("rate_structure")}]);return(xn,p)=>{const fe=q("router-view");return _(),d(ye,{view:"hHh Lpr lff"},{default:s(()=>[t(Me,{elevated:"",class:"bg-grey-3"},{default:s(()=>[t(be,null,{default:s(()=>[t(D,{flat:"",round:"",dense:"",icon:"menu",color:"black",onClick:p[0]||(p[0]=m=>C.value=!C.value)}),t(Ie,null,{default:s(()=>[t(D,{flat:"",dense:"",to:"/"},{default:s(()=>[t(on,{class:"logo-3d"}),t(cn,{class:"text-orange-9 logo-letter"})]),_:1})]),_:1}),t(Se),t(D,{label:u(r)("create_new_booking"),icon:"add",color:"orange-9",stretch:"",flat:""},null,8,["label"]),t(N,{vertical:""}),t(ke,{label:"Menu",stretch:"",flat:"",color:"orange-9"},{default:s(()=>[t(ee,null,{default:s(()=>[t(Ee,{header:""},{default:s(()=>{var m;return[w(V((m=u(i))==null?void 0:m.extra.name),1)]}),_:1}),S((_(),d(k,{clickable:"",to:"/profile/my-account"},{default:s(()=>[t(h,null,{default:s(()=>[w(V(u(r)("my_account")),1)]),_:1})]),_:1})),[[re]]),t(N),S((_(),d(k,{clickable:"",onClick:p[1]||(p[1]=m=>u(l).signout(u(a)))},{default:s(()=>[t(h,null,{default:s(()=>[w(V(u(r)("sign_out")),1)]),_:1})]),_:1})),[[re]])]),_:1})]),_:1}),t(N,{vertical:""}),t(D,{stretch:"",flat:"",onClick:u(n)},{default:s(()=>[u(o)==="en-US"?(_(),d(dn,{key:0,class:"flag"})):ne("v-if",!0),u(o)==="vi-VN"?(_(),d(Vn,{key:1,class:"flag"})):ne("v-if",!0)]),_:1},8,["onClick"])]),_:1})]),_:1}),t(Te,{modelValue:C.value,"onUpdate:modelValue":p[2]||(p[2]=m=>C.value=m),"show-if-above":"",mini:z.value,"mini-to-overlay":"",width:240,breakpoint:500,bordered:"",class:"bg-grey-3",onMouseover:p[3]||(p[3]=m=>z.value=!1),onMouseout:p[4]||(p[4]=m=>z.value=!0)},{default:s(()=>[t(Re,{class:"fit"},{default:s(()=>[t(ee,{padding:""},{default:s(()=>[(_(!0),g(R,null,H(u(le),({iconName:m,text:b,to:L})=>S((_(),d(k,{key:L,to:L,clickable:""},{default:s(()=>[t(h,{avatar:""},{default:s(()=>[t($,{name:m},null,8,["name"])]),_:2},1024),t(h,null,{default:s(()=>[w(V(b),1)]),_:2},1024)]),_:2},1032,["to"])),[[B]])),128)),t(N),t(oe,{label:u(r)("report",99),icon:"analytics","content-inset-level":.5},{default:s(()=>[(_(!0),g(R,null,H(u(ue),({iconName:m,text:b,to:L})=>S((_(),d(k,{key:L,to:"to",clickable:""},{default:s(()=>[t(h,{avatar:""},{default:s(()=>[t($,{name:m},null,8,["name"])]),_:2},1024),t(h,null,{default:s(()=>[w(V(b),1)]),_:2},1024)]),_:2},1024)),[[B]])),128))]),_:1},8,["label","content-inset-level"]),t(oe,{label:u(r)("setting",99),icon:"settings","content-inset-level":.5},{default:s(()=>[(_(!0),g(R,null,H(u(me),({iconName:m,text:b,to:L})=>S((_(),d(k,{key:L,to:L,clickable:""},{default:s(()=>[t(h,{avatar:""},{default:s(()=>[t($,{name:m},null,8,["name"])]),_:2},1024),t(h,null,{default:s(()=>[w(V(b),1)]),_:2},1024)]),_:2},1032,["to"])),[[B]])),128))]),_:1},8,["label","content-inset-level"])]),_:1})]),_:1})]),_:1},8,["modelValue","mini"]),t(Ne,null,{default:s(()=>[t(De,{padding:""},{default:s(()=>[t(fe)]),_:1})]),_:1})]),_:1})}}});var bn=y(yn,[["__scopeId","data-v-39336072"]]);const In={default:bn,plain:()=>c(()=>import("./plain.4612153d.js"),["assets/plain.4612153d.js","assets/vendor.c8a9d970.js"])};function Sn(e){return e.map(n=>{var o;return{path:n.path,component:In[((o=n.meta)==null?void 0:o.layout)||"default"],children:[I(v({},n),{path:""})]}})}const kn={},En=T("h1",null,"Index Page",-1),Mn=[En];function Rn(e,n){return _(),g("div",null,Mn)}var Tn=y(kn,[["render",Rn]]);const Dn=[{name:"bookings",path:"/bookings",component:()=>c(()=>import("./bookings.4749e563.js"),["assets/bookings.4749e563.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"guests",path:"/guests",component:()=>c(()=>import("./guests.db2857e7.js"),["assets/guests.db2857e7.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"index",path:"/",component:Tn,props:!0},{name:"room-view",path:"/room-view",component:()=>c(()=>import("./room-view.3ec696f5.js"),["assets/room-view.3ec696f5.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"services",path:"/services",component:()=>c(()=>import("./services.f6dbd879.js"),["assets/services.f6dbd879.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"reports-bookings",path:"/reports/bookings",component:()=>c(()=>import("./bookings.81654e6f.js"),["assets/bookings.81654e6f.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"reports-transactions",path:"/reports/transactions",component:()=>c(()=>import("./transactions.d7bb12b0.js"),["assets/transactions.d7bb12b0.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"settings-booking-sources",path:"/settings/booking-sources",component:()=>c(()=>import("./booking-sources.ff03daaa.js"),["assets/booking-sources.ff03daaa.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"settings-information",path:"/settings/information",component:()=>c(()=>import("./information.0ee56335.js"),["assets/information.0ee56335.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"settings-policies",path:"/settings/policies",component:()=>c(()=>import("./policies.5f21087c.js"),["assets/policies.5f21087c.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"settings-rate-structures",path:"/settings/rate-structures",component:()=>c(()=>import("./rate-structures.f012bfe8.js"),["assets/rate-structures.f012bfe8.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"settings-staff",path:"/settings/staff",component:()=>c(()=>import("./staff.683d6d1c.js"),["assets/staff.683d6d1c.js","assets/vendor.c8a9d970.js"]),props:!0},{name:"auth-sign-in",path:"/auth/sign-in",component:()=>c(()=>import("./sign-in.c6eb4281.js"),["assets/sign-in.c6eb4281.js","assets/sign-in.c2189ed8.css","assets/vendor.c8a9d970.js","assets/index.81cacef1.js","assets/QForm.7452a6c8.js"]),props:!0,meta:{layout:"plain"}},{name:"profile-my-account",path:"/profile/my-account",component:()=>c(()=>import("./my-account.9e974040.js"),["assets/my-account.9e974040.js","assets/my-account.46a607ab.css","assets/vendor.c8a9d970.js","assets/QSkeleton.65ce05dd.js","assets/index.81cacef1.js","assets/QSelect.da68c64f.js","assets/QDialog.d32564a8.js","assets/QForm.7452a6c8.js"]),props:!0},{path:"/settings/room-settings",component:()=>c(()=>import("./index.f3877a12.js"),["assets/index.f3877a12.js","assets/vendor.c8a9d970.js","assets/index.81cacef1.js","assets/useRoomsQuery.4a8683d5.js","assets/useNotify.a169d907.js","assets/QSelect.da68c64f.js","assets/QDialog.d32564a8.js"]),children:[{name:"settings-room-settings-index-room-types-roomTypeId",path:"room-types/:roomTypeId",component:()=>c(()=>import("./_roomTypeId_.16760240.js"),["assets/_roomTypeId_.16760240.js","assets/_roomTypeId_.b6ed8b95.css","assets/QCard.f555a3ba.js","assets/vendor.c8a9d970.js","assets/QDialog.d32564a8.js","assets/QSkeleton.65ce05dd.js","assets/index.81cacef1.js","assets/QForm.7452a6c8.js","assets/useNotify.a169d907.js"]),props:!0},{name:"settings-room-settings-index-rooms-roomId",path:"rooms/:roomId",component:()=>c(()=>import("./_roomId_.af501bb5.js"),["assets/_roomId_.af501bb5.js","assets/_roomId_.fbdf2eb4.css","assets/QCard.f555a3ba.js","assets/vendor.c8a9d970.js","assets/QDialog.d32564a8.js","assets/QSkeleton.65ce05dd.js","assets/index.81cacef1.js","assets/QSelect.da68c64f.js","assets/QForm.7452a6c8.js","assets/useNotify.a169d907.js","assets/useRoomsQuery.4a8683d5.js"]),props:!0}],props:!0}],Nn=Sn(Dn),x=Ze({history:Fe(),routes:Nn});x.beforeEach((e,n,o)=>{const{isLoggedIn:r}=F();switch(r.value){case!0:if(e.path==="/auth/sign-in"){x.replace("/");return}return o();case!1:if(e.path!=="/auth/sign-in"){x.replace("/auth/sign-in");return}return o()}});var Zn={add_new_room:(()=>{const e=n=>{const{normalize:o}=n;return o(["Add New Room"])};return e.source="Add New Room",e})(),all:(()=>{const e=n=>{const{normalize:o}=n;return o(["All"])};return e.source="All",e})(),basic_info:(()=>{const e=n=>{const{normalize:o}=n;return o(["Basic Info"])};return e.source="Basic Info",e})(),booking:(()=>{const e=n=>{const{normalize:o,plural:r}=n;return r([o(["Booking"]),o(["Bookings"])])};return e.source="Booking | Bookings",e})(),booking_source:(()=>{const e=n=>{const{normalize:o}=n;return o(["Booking Source"])};return e.source="Booking Source",e})(),cancel:(()=>{const e=n=>{const{normalize:o}=n;return o(["Cancel"])};return e.source="Cancel",e})(),change_password:(()=>{const e=n=>{const{normalize:o}=n;return o(["Change Password"])};return e.source="Change Password",e})(),create_new_booking:(()=>{const e=n=>{const{normalize:o}=n;return o(["Create New Booking"])};return e.source="Create New Booking",e})(),current_password:(()=>{const e=n=>{const{normalize:o}=n;return o(["Current Password"])};return e.source="Current Password",e})(),delete_floor:(()=>{const e=n=>{const{normalize:o}=n;return o(["Delete Floor"])};return e.source="Delete Floor",e})(),edit_room:(()=>{const e=n=>{const{normalize:o}=n;return o(["Edit Room"])};return e.source="Edit Room",e})(),edit_room_type:(()=>{const e=n=>{const{normalize:o}=n;return o(["Edit Room Type"])};return e.source="Edit Room Type",e})(),email:(()=>{const e=n=>{const{normalize:o}=n;return o(["Email"])};return e.source="Email",e})(),failed_to_save:(()=>{const e=n=>{const{normalize:o}=n;return o(["Failed to save"])};return e.source="Failed to save",e})(),floor:(()=>{const e=n=>{const{normalize:o}=n;return o(["Floor"])};return e.source="Floor",e})(),gender:(()=>{const e=n=>{const{normalize:o}=n;return o(["Gender"])};return e.source="Gender",e})(),guest:(()=>{const e=n=>{const{normalize:o,plural:r}=n;return r([o(["Guest"]),o(["Guests"])])};return e.source="Guest | Guests",e})(),home:(()=>{const e=n=>{const{normalize:o}=n;return o(["Home"])};return e.source="Home",e})(),if_you_want_to_register_gopms_please_fill_out_the_registration_form_on_here:(()=>{const e=n=>{const{normalize:o}=n;return o(["If you want to register GoPMS, please fill out the registration form on here."])};return e.source="If you want to register GoPMS, please fill out the registration form on here.",e})(),information:(()=>{const e=n=>{const{normalize:o}=n;return o(["Information"])};return e.source="Information",e})(),input_floor_name:(()=>{const e=n=>{const{normalize:o}=n;return o(["Input floor name"])};return e.source="Input floor name",e})(),mobile:(()=>{const e=n=>{const{normalize:o}=n;return o(["Mobile"])};return e.source="Mobile",e})(),my_account:(()=>{const e=n=>{const{normalize:o}=n;return o(["My Account"])};return e.source="My Account",e})(),name:(()=>{const e=n=>{const{normalize:o}=n;return o(["Name"])};return e.source="Name",e})(),new_floor:(()=>{const e=n=>{const{normalize:o}=n;return o(["New Floor"])};return e.source="New Floor",e})(),new_password:(()=>{const e=n=>{const{normalize:o}=n;return o(["New Password"])};return e.source="New Password",e})(),new_room:(()=>{const e=n=>{const{normalize:o}=n;return o(["New Room"])};return e.source="New Room",e})(),new_room_type:(()=>{const e=n=>{const{normalize:o}=n;return o(["New Room Type"])};return e.source="New Room Type",e})(),number_of_adults:(()=>{const e=n=>{const{normalize:o}=n;return o(["Number of Adults"])};return e.source="Number of Adults",e})(),number_of_beds:(()=>{const e=n=>{const{normalize:o}=n;return o(["Number of Beds"])};return e.source="Number of Beds",e})(),number_of_children:(()=>{const e=n=>{const{normalize:o}=n;return o(["Number of Children"])};return e.source="Number of Children",e})(),password:(()=>{const e=n=>{const{normalize:o}=n;return o(["Password"])};return e.source="Password",e})(),policy:(()=>{const e=n=>{const{normalize:o}=n;return o(["Policy"])};return e.source="Policy",e})(),rate_structure:(()=>{const e=n=>{const{normalize:o}=n;return o(["Rate Structure"])};return e.source="Rate Structure",e})(),"re-enter_password":(()=>{const e=n=>{const{normalize:o}=n;return o(["Re-enter Password"])};return e.source="Re-enter Password",e})(),report:(()=>{const e=n=>{const{normalize:o,plural:r}=n;return r([o(["Report"]),o(["Reports"])])};return e.source="Report | Reports",e})(),role:(()=>{const e=n=>{const{normalize:o}=n;return o(["Role"])};return e.source="Role",e})(),room_name:(()=>{const e=n=>{const{normalize:o}=n;return o(["Room Name"])};return e.source="Room Name",e})(),room_setting:(()=>{const e=n=>{const{normalize:o}=n;return o(["Room Setting"])};return e.source="Room Setting",e})(),room_type:(()=>{const e=n=>{const{normalize:o}=n;return o(["Room Type"])};return e.source="Room Type",e})(),room_type_code:(()=>{const e=n=>{const{normalize:o}=n;return o(["Room Type Code"])};return e.source="Room Type Code",e})(),room_type_name:(()=>{const e=n=>{const{normalize:o}=n;return o(["Room Type Name"])};return e.source="Room Type Name",e})(),room_view:(()=>{const e=n=>{const{normalize:o}=n;return o(["Room View"])};return e.source="Room View",e})(),save:(()=>{const e=n=>{const{normalize:o}=n;return o(["Save"])};return e.source="Save",e})(),saved:(()=>{const e=n=>{const{normalize:o}=n;return o(["Saved"])};return e.source="Saved",e})(),service:(()=>{const e=n=>{const{normalize:o}=n;return o(["Service"])};return e.source="Service",e})(),setting:(()=>{const e=n=>{const{normalize:o,plural:r}=n;return r([o(["Setting"]),o(["Settings"])])};return e.source="Setting | Settings",e})(),sign_in:(()=>{const e=n=>{const{normalize:o}=n;return o(["Sign in"])};return e.source="Sign in",e})(),sign_out:(()=>{const e=n=>{const{normalize:o}=n;return o(["Sign out"])};return e.source="Sign out",e})(),something_went_wrong:(()=>{const e=n=>{const{normalize:o}=n;return o(["Something went wrong..."])};return e.source="Something went wrong...",e})(),staff:(()=>{const e=n=>{const{normalize:o}=n;return o(["Staff"])};return e.source="Staff",e})(),support:(()=>{const e=n=>{const{normalize:o}=n;return o(["Support"])};return e.source="Support",e})(),transaction:(()=>{const e=n=>{const{normalize:o,plural:r}=n;return r([o(["Transaction"]),o(["Transactions"])])};return e.source="Transaction | Transactions",e})(),welcome_to_gopms:(()=>{const e=n=>{const{normalize:o}=n;return o(["Welcome to GoPMS!"])};return e.source="Welcome to GoPMS!",e})(),wrong_credentials:(()=>{const e=n=>{const{normalize:o}=n;return o(["Wrong Credentials"])};return e.source="Wrong Credentials",e})(),"you_can_manage_all_properties_easily with_the_most_convenient_system":(()=>{const e=n=>{const{normalize:o}=n;return o(["You can manage all properties easily with the most convenient system."])};return e.source="You can manage all properties easily with the most convenient system.",e})()},Fn={add_new_room:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),all:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),basic_info:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),booking:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),booking_source:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),cancel:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),change_password:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),create_new_booking:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),current_password:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),delete_floor:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),edit_room:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),edit_room_type:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),email:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),failed_to_save:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),floor:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),gender:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),guest:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),home:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),if_you_want_to_register_gopms_please_fill_out_the_registration_form_on_here:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),information:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),input_floor_name:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),mobile:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),my_account:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),name:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),new_floor:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),new_password:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),new_room:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),new_room_type:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),number_of_adults:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),number_of_beds:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),number_of_children:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),password:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),policy:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),rate_structure:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),"re-enter_password":(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),report:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),role:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),room_name:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),room_setting:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),room_type:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),room_type_code:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),room_type_name:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),room_view:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),save:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),saved:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),service:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),setting:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),sign_in:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),sign_out:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),something_went_wrong:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),staff:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),support:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),transaction:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),welcome_to_gopms:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),wrong_credentials:(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})(),"you_can_manage_all_properties_easily with_the_most_convenient_system":(()=>{const e=n=>{const{normalize:o}=n;return o(["__missing__"])};return e.source="__missing__",e})()},ce;const Pn=Pe({legacy:!1,locale:(ce=localStorage.getItem("locale"))!=null?ce:"en-US",fallbackLocale:"en-US",messages:{"en-US":Zn,"vi-VN":Fn}});xe(Be).use(x).use(Ae,$e).use(Pn).use(Oe).mount("#app");export{dn as F,P as Q,Hn as V,y as _,j as a,F as b,Vn as c,x as r,ln as u};
