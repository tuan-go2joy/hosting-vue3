var Ee=Object.defineProperty,Fe=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ae=(e,t,o)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,z=(e,t)=>{for(var o in t||(t={}))Ve.call(t,o)&&ae(e,o,t[o]);if(oe)for(var o of oe(t))Me.call(t,o)&&ae(e,o,t[o]);return e},le=(e,t)=>Fe(e,xe(t));import{Q as Ne,a as T,c as k,b as re}from"./QMenu.23017405.js";import{m as ge,n as R,l as $,p as A,s as E,w as X,X as De,W as $e,z as Ie,C as be,aM as Le,aN as Be,u as i,aO as J,aP as Z,d as we,aQ as Ce,o as g,a1 as O,a2 as d,aR as N,aS as x,y as I,a as c,M as j,x as ne,a4 as L,t as B,c as U,r as Pe,aT as se,F as ie,a5 as ue,h as ce,a6 as de}from"./vendor.6afcc2f0.js";import{Q as ze}from"./QList.e585812b.js";import{a as ee,Q as Se}from"./axiosClient.264e3cda.js";import{T as Ae}from"./TouchPan.879d8082.js";import{u as Te,a as je,d as Qe}from"./useI18n.cd288b87.js";import{u as Re}from"./useNotify.ae0ad5bc.js";import{r as K}from"./index.fb7e46f5.js";import{Q as C}from"./queryKeys.8d44f393.js";import{u as Oe,a as Ke}from"./useRoomsQuery.8f24cd60.js";import{u as Ue}from"./useRoomTypesQuery.9947d7aa.js";import{Q as We}from"./QSeparator.16660505.js";import{Q as Ye}from"./QTable.5962a416.js";import{C as me}from"./ClosePopup.49e1b2a3.js";import"./use-prevent-scroll.3abd3655.js";import"./QSelect.f08fdad1.js";const Xe=["top","middle","bottom"];var fe=ge({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Xe.includes(e)}},setup(e,{slots:t}){const o=R(()=>e.align!==void 0?{verticalAlign:e.align}:null),a=R(()=>{const l=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(l!==void 0?` text-${l}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>$("div",{class:a.value,style:o.value,role:"alert","aria-label":e.label},e.label!==void 0?e.label:A(t.default))}}),Ge=ge({name:"QSplitter",props:le(z({},Te),{modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]}),emits:["update:modelValue"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=Ie(),l=je(e,a),n=E(null),f={before:E(null),after:E(null)},y=R(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(l.value===!0?" q-splitter--dark":"")),b=R(()=>e.horizontal===!0?"height":"width"),_=R(()=>e.reverse!==!0?"before":"after"),p=R(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function h(r){return(e.unit==="%"?r:Math.round(r))+e.unit}const S=R(()=>({[_.value]:{[b.value]:h(e.modelValue)}}));let w,F,q,V,Q;function D(r){if(r.isFirst===!0){const u=n.value.getBoundingClientRect()[b.value];w=e.horizontal===!0?"up":"left",F=e.unit==="%"?100:u,q=Math.min(F,p.value[1],Math.max(p.value[0],e.modelValue)),V=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:a.lang.rtl===!0?-1:1)*(e.unit==="%"?u===0?0:100/u:1),n.value.classList.add("q-splitter--active");return}if(r.isFinal===!0){Q!==e.modelValue&&o("update:modelValue",Q),n.value.classList.remove("q-splitter--active");return}const s=q+V*(r.direction===w?-1:1)*r.distance[e.horizontal===!0?"y":"x"];Q=Math.min(F,p.value[1],Math.max(p.value[0],s)),f[_.value].value.style[b.value]=h(Q),e.emitImmediately===!0&&e.modelValue!==Q&&o("update:modelValue",Q)}const m=R(()=>[[Ae,D,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function v(r,s){r<s[0]?o("update:modelValue",s[0]):r>s[1]&&o("update:modelValue",s[1])}return X(()=>e.modelValue,r=>{v(r,p.value)}),X(()=>e.limits,()=>{be(()=>{v(e.modelValue,p.value)})}),()=>{const r=[$("div",{ref:f.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:S.value.before},A(t.before)),$("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[De("div",{class:"q-splitter__separator-area absolute-full"},A(t.separator),"sep",e.disable!==!0,()=>m.value)]),$("div",{ref:f.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:S.value.after},A(t.after))];return $("div",{class:y.value,ref:n},$e(t.default,r))}}});function He(e){return Le()?(Be(e),!0):!1}const P=typeof window!="undefined",Je=e=>typeof e=="string",W=()=>{};function Y(e){var t;const o=i(e);return(t=o==null?void 0:o.$el)!=null?t:o}const qe=P?window:void 0;P&&window.document;P&&window.navigator;P&&window.location;function _e(...e){let t,o,a,l;if(Je(e[0])?([o,a,l]=e,t=qe):[t,o,a,l]=e,!t)return W;let n=W;const f=X(()=>i(t),b=>{n(),!!b&&(b.addEventListener(o,a,l),n=()=>{b.removeEventListener(o,a,l),n=W})},{immediate:!0,flush:"post"}),y=()=>{f(),n()};return He(y),y}function Ze(e,t,o={}){const{window:a=qe,ignore:l}=o;if(!a)return;const n=E(!0),y=[_e(a,"click",_=>{const p=Y(e),h=_.composedPath();!p||p===_.target||h.includes(p)||!n.value||l&&l.length>0&&l.some(S=>{const w=Y(S);return w&&(_.target===w||h.includes(w))})||t(_)},{passive:!0,capture:!0}),_e(a,"pointerdown",_=>{const p=Y(e);n.value=!!p&&!_.composedPath().includes(p)},{passive:!0})];return()=>y.forEach(_=>_())}const G=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},H="__vueuse_ssr_handlers__";G[H]=G[H]||{};G[H];var ve,pe;P&&(window==null?void 0:window.navigator)&&((ve=window==null?void 0:window.navigator)==null?void 0:ve.platform)&&/iP(ad|hone|od)/.test((pe=window==null?void 0:window.navigator)==null?void 0:pe.platform);var et=Object.defineProperty,ye=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,he=(e,t,o)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,at=(e,t)=>{for(var o in t||(t={}))tt.call(t,o)&&he(e,o,t[o]);if(ye)for(var o of ye(t))ot.call(t,o)&&he(e,o,t[o]);return e};const lt={top:0,left:0,bottom:0,right:0,height:0,width:0};at({text:""},lt);const ke=e=>{const t=E(!1),o=E(null),a=async()=>{var n;t.value=!0,await be(),(n=o.value)==null||n.focus()},l=()=>{t.value=!1,e==null||e.onFinishEdit()};return Ze(o,()=>l()),{inputElementRef:o,isEditMode:t,startEdit:a,finishEdit:l}},rt=async e=>{const{data:t}=await ee.post("/rooms/floor/create/",e);return t},nt=()=>{const e=Z(),t=a=>{const l=e.getQueryData(C.FLOORS);!l||e.setQueryData(C.FLOORS,()=>[...l,z({},a)])},o=a=>{const l=e.getQueryData(C.ROOMS);!l||e.setQueryData(C.ROOMS,()=>[...l,{room_floor_id:a.id,room_floor_name:a.name,list_rooms:[]}])};return J(rt,{onSuccess:a=>{t(a),o(a)}})},st=async({floor_id:e})=>{await ee.delete(`/rooms/floor/delete/${e}`)},it=()=>{const e=Z(),t=a=>{const l=e.getQueryData(C.FLOORS);!l||e.setQueryData(C.FLOORS,()=>l.filter(n=>n.id!==a.floor_id))},o=a=>{const l=e.getQueryData(C.ROOMS);!l||e.setQueryData(C.ROOMS,()=>l.filter(n=>n.room_floor_id!==a.floor_id))};return J(st,{onSuccess:(a,l)=>{t(l),o(l)}})},ut=async({floor_id:e,name:t})=>{const{data:o}=await ee.put(`/rooms/floor/update/${e}`,{name:t});return o},ct=()=>{const e=Z(),t=a=>{const l=e.getQueryData(C.FLOORS);!l||e.setQueryData(C.FLOORS,()=>l.map(n=>n.id!==a.id?n:z({},a)))},o=a=>{const l=e.getQueryData(C.ROOMS);!l||e.setQueryData(C.ROOMS,()=>l.map(n=>n.room_floor_id!==a.id?n:{room_floor_id:a.id,room_floor_name:a.name,list_rooms:n.list_rooms}))};return J(ut,{onSuccess:a=>{t(a),o(a)}})},dt=we({props:{floorName:null,floorId:null,rooms:null},setup(e){const t=e,{data:o}=Oe(),{notifySaveSuccess:a,notifySaveFailed:l,notifyWarning:n}=Re(),f=Ce(),{t:y}=Qe(),b=R(()=>{const{code:r}=f.query;return!r||Array.isArray(r)?t.rooms:t.rooms.filter(({room_type_code:s})=>s===r.replaceAll("_"," "))}),_=ct(),p=it(),h=E(t.floorName),{inputElementRef:S,isEditMode:w,startEdit:F,finishEdit:q}=ke({onFinishEdit:()=>h.value=t.floorName}),V=[r=>!!r||y("this_is_invalid_value"),r=>r.length<=10||y("this_value_is_too_long"),r=>{var s;return!((s=o.value)==null?void 0:s.some(({name:u})=>u===r))||y("this_is_invalid_value")}],Q=async r=>{var u,M;if((u=S.value)==null||u.validate(),(M=S.value)==null?void 0:M.error)return;const{value:s}=r.currentTarget;_.mutate({floor_id:t.floorId,name:s},{onSuccess:()=>{a(),q()},onError:()=>{l()}})},D=()=>{if(t.rooms.length!==0){n(y("please_remove_all_rooms_of_this_floor"));return}p.mutate({floor_id:t.floorId},{onSuccess:()=>{a()},onError:()=>{l()}})},m=(r,s)=>{K.replace({path:`/settings/room-settings/rooms/${s.id}`,state:{roomName:s.name,floorId:t.floorId},query:f.query})},v=()=>{K.replace({path:"/settings/room-settings/rooms/new",state:{roomName:null,floorId:t.floorId},query:f.query})};return(r,s)=>(g(),O(Ye,{grid:"",title:t.floorName,rows:i(b),columns:[{name:"room_type_code",label:"Room Type Code",field:u=>u.room_type_code},{name:"name",label:"Room Name",field:u=>u.name}],"hide-pagination":"",onRowClick:m},{"top-left":d(()=>[i(w)?(g(),O(Se,{key:0,ref_key:"inputElementRef",ref:S,modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=u=>h.value=u),class:"text-h5",rules:V,placeholder:i(y)("input_floor_name"),filled:"",dense:"",onKeydown:[N(x(Q,["prevent"]),["enter"]),N(x(i(q),["prevent"]),["esc"]),N(x(i(q),["prevent"]),["tab"])]},null,8,["modelValue","placeholder","onKeydown"])):(g(),O(I,{key:1,label:t.floorName,class:"text-h5",padding:"xs 12px","no-caps":"",dense:"",flat:"",onClick:i(F)},null,8,["label","onClick"]))]),"top-right":d(()=>[c(I,{flat:"",round:"",icon:"more_vert"},{default:d(()=>[c(Ne,{anchor:"bottom right",self:"top right"},{default:d(()=>[j((g(),O(T,{clickable:"",onClick:v},{default:d(()=>[c(k,{side:""},{default:d(()=>[c(ne,{name:"add"})]),_:1}),c(k,null,{default:d(()=>[L(B(i(y)("add_new_room")),1)]),_:1})]),_:1})),[[me]]),c(We),j((g(),O(T,{clickable:"",onClick:D},{default:d(()=>[c(k,{side:""},{default:d(()=>[c(ne,{name:"delete"})]),_:1}),c(k,null,{default:d(()=>[L(B(i(y)("delete_floor")),1)]),_:1})]),_:1})),[[me]])]),_:1})]),_:1})]),_:1},8,["title","rows","columns"]))}}),mt={class:"row"},ft={class:"q-my-xl row justify-center"},Vt=we({setup(e){const{data:t}=Ue(),{data:o}=Oe(),{data:a}=Ke(),l=nt(),n=Ce(),{t:f}=Qe(),{notifySaveSuccess:y,notifySaveFailed:b}=Re(),_=E(""),p=[m=>!!m||f("this_is_invalid_value"),m=>m.length<=10||f("this_value_is_too_long"),m=>{var v;return!((v=o.value)==null?void 0:v.some(({name:r})=>r===m))||f("this_is_invalid_value")}],{inputElementRef:h,isEditMode:S,finishEdit:w,startEdit:F}=ke({onFinishEdit:()=>_.value=""}),q=R(()=>{var v;let m=0;return(v=t.value)==null||v.forEach(({num_of_room:r})=>m+=r),m}),V=async()=>{var m,v;(m=h.value)==null||m.validate(),!((v=h.value)==null?void 0:v.error)&&l.mutate({name:_.value},{onSuccess:()=>{y(),w()},onError:()=>{b()}})},Q=()=>{console.log("Create new room type"),K.replace({path:"/settings/room-settings/room-types/new",query:n.query,state:{code:null}})},D=(m,v)=>{console.log("Edit room type",m),K.replace({path:`/settings/room-settings/room-types/${m}`,query:n.query,state:{code:v}})};return(m,v)=>{const r=Pe("router-view");return g(),U("div",null,[c(Ge,{"model-value":15,"before-class":"q-px-sm","separator-style":"background-color: transparent;"},{before:d(()=>[c(ze,{separator:"",bordered:""},{default:d(()=>[j((g(),O(T,{to:"/settings/room-settings",replace:""},{default:d(()=>[c(k,{class:se([i(n).query.code?"text-black":"text-primary"])},{default:d(()=>[L(B(i(f)("all")),1)]),_:1},8,["class"]),c(k,{side:""},{default:d(()=>[c(fe,{label:i(q),rounded:""},null,8,["label"])]),_:1})]),_:1})),[[de]]),(g(!0),U(ie,null,ue(i(t),({num_of_room:s,code:u,name:M,id:te})=>j((g(),O(T,{key:te,to:`/settings/room-settings?code=${u.replaceAll(" ","_")}`,replace:""},{default:d(()=>[c(k,null,{default:d(()=>[c(re,{class:se([i(n).query.code===u.replaceAll(" ","_")?"text-primary":"text-black"])},{default:d(()=>[L(B(u)+" ",1),c(fe,{label:s,rounded:""},null,8,["label"])]),_:2},1032,["class"]),c(re,{caption:""},{default:d(()=>[L(B(M),1)]),_:2},1024)]),_:2},1024),c(k,{side:""},{default:d(()=>[c(I,{icon:"edit",flat:"",round:"",onClick:x(_t=>D(te,u),["prevent"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["to"])),[[de]])),128))]),_:1}),ce("div",mt,[c(I,{label:i(f)("new_room_type"),class:"col q-my-md",icon:"add_circle",stretch:"",onClick:Q},null,8,["label"])])]),after:d(()=>[(g(!0),U(ie,null,ue(i(a),({room_floor_name:s,room_floor_id:u,list_rooms:M})=>(g(),O(dt,{key:u,"floor-name":s,"floor-id":u,rooms:M},null,8,["floor-name","floor-id","rooms"]))),128)),ce("div",ft,[i(S)?(g(),O(Se,{key:0,ref_key:"inputElementRef",ref:h,modelValue:_.value,"onUpdate:modelValue":v[0]||(v[0]=s=>_.value=s),rules:p,class:"h-sm",placeholder:i(f)("input_floor_name"),filled:"",onKeydown:[N(x(V,["prevent"]),["enter"]),N(x(i(w),["prevent"]),["esc"]),N(x(i(w),["prevent"]),["tab"])]},null,8,["modelValue","placeholder","onKeydown"])):(g(),O(I,{key:1,label:i(f)("new_floor"),icon:"add_circle",onClick:i(F)},null,8,["label","onClick"]))])]),_:1}),c(r)])}}});export{Vt as default};
