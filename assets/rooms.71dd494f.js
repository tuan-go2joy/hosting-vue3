var _o=Object.defineProperty,co=Object.defineProperties;var po=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var N=(o,e,r)=>e in o?_o(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,c=(o,e)=>{for(var r in e||(e={}))P.call(e,r)&&N(o,r,e[r]);if(O)for(var r of O(e))Y.call(e,r)&&N(o,r,e[r]);return o},p=(o,e)=>co(o,po(e));var $=(o,e)=>{var r={};for(var n in o)P.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&O)for(var n of O(o))e.indexOf(n)<0&&Y.call(o,n)&&(r[n]=o[n]);return r};import{Q as A}from"./QCardSection.c854a72b.js";import{Q as fo}from"./QCard.32dcd3f8.js";import{Q,a as yo}from"./queryKeys.97f4c9ca.js";import{aO as z,aP as G,ax as vo,d as J,a3 as W,aQ as X,n as Z,s as I,aU as Ro,o as S,a1 as D,a2 as w,u as l,c as k,F as Qo,a5 as Co,a as f,h as oo,M as go,y as K,v as ho,t as j,i as Fo}from"./vendor.6afcc2f0.js";import{d as eo}from"./useI18n.5362addb.js";import{Q as Io}from"./QSkeleton.3106c07d.js";import{a as x,Q as So}from"./axiosClient.f33fe5d8.js";import{Q as H}from"./QSelect.9dac8f9c.js";import{Q as wo}from"./QForm.59835bee.js";import{C as Oo}from"./ClosePopup.f66efbcc.js";import{u as bo}from"./useNotify.80155021.js";import{u as U}from"./useRoomTypesQuery.54542a35.js";import{u as Mo,a as Vo}from"./useRoomsQuery.922be7e9.js";import{_ as qo}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-prevent-scroll.943a605d.js";import"./QMenu.dfb89d3c.js";const ko=async o=>{const{data:e}=await x.post("/rooms/create/",o);return e},xo=()=>{const o=G(),{findRoomTypeCodeById:e}=U(),r=t=>{const s=o.getQueryData(Q.ROOMS),u=e(t.room_type);!s||!u||o.setQueryData(Q.ROOMS,()=>s.map(a=>a.room_floor_id!==t.room_floor?a:p(c({},a),{list_rooms:[{id:t.id,name:t.name,room_type_code:u,room_type_id:t.id},...a.list_rooms]})))},n=t=>{const s=o.getQueryData(Q.ROOM_TYPES);!s||o.setQueryData(Q.ROOM_TYPES,()=>s.map(u=>u.id!==t.room_type?u:p(c({},u),{num_of_room:u.num_of_room+1})))};return z(ko,{onSuccess:t=>{n(t),r(t)}})},Uo=async({queryKey:o})=>{const[,e]=o;if(!e)return;const{data:r}=await x.get(`/rooms/get/${e}`);return r},Eo=o=>{const e=[Q.ROOMS,o];return vo(e,Uo)},Lo=async r=>{var n=r,{room_id:o}=n,e=$(n,["room_id"]);const{data:t}=await x.put(`/rooms/update/${o}`,c({},e));return t},To=()=>{const o=G(),{findRoomTypeCodeById:e}=U(),r=t=>{const s=o.getQueryData(Q.ROOMS);if(!s)return;const u=s.flatMap(({list_rooms:y,room_floor_id:i,room_floor_name:C})=>y.map(b=>p(c({},b),{room_floor_id:i,room_floor_name:C}))).find(y=>y.id===t.id);if(!u)return;const a=e(t.room_type);if(!!a)return o.setQueryData(Q.ROOMS,()=>{switch(u.room_floor_id!==t.room_floor){case!0:return s.map(i=>i.room_floor_id!==t.room_floor?p(c({},i),{list_rooms:i.list_rooms.filter(C=>C.id!==t.id)}):p(c({},i),{list_rooms:[...i.list_rooms,{id:t.id,name:t.name,room_type_code:a,room_type_id:t.room_type}]}));case!1:return s.map(i=>i.room_floor_id!==t.room_floor?i:p(c({},i),{list_rooms:i.list_rooms.map(C=>C.id!==t.id?C:{id:t.id,name:t.name,room_type_code:a,room_type_id:t.room_type})}))}}),u.room_type_code},n=(t,s)=>{const u=o.getQueryData(Q.ROOM_TYPES);!u||!s||o.setQueryData(Q.ROOM_TYPES,()=>u.map(a=>a.id===t.room_type?p(c({},a),{num_of_room:a.num_of_room+1}):a.code===s?p(c({},a),{num_of_room:a.num_of_room-1}):a))};return z(Lo,{onSuccess:t=>{const s=r(t);n(t,s)}})};const Bo={key:0,class:"wrapper"},No={key:1,class:"wrapper"},Po={class:"q-mt-md row justify-end q-gutter-md"},Yo=J({props:{roomId:null},setup(o){var B;const e=o,{notifySaveSuccess:r,notifySaveFailed:n}=bo(),t=W(),s=X(),{data:u,isLoading:a,findRoomTypeIdByCode:y}=U(),{data:i,isLoading:C}=Mo(),{findRoomByRoomId:b,isLoading:to}=Vo(),{data:E,isLoading:ro}=Eo(e.roomId==="new"?0:e.roomId),ao=xo(),no=To(),L=Z(()=>a.value||C.value||to.value||ro.value),so=Array.isArray(s.query.code)||(B=s.query.code)==null?void 0:B.replaceAll("_"," "),uo=y(so),v=I({name:""});Ro(()=>{var m,_,d,g,h,F;v.value={room_floor_id:(_=(m=E.value)==null?void 0:m.room_floor)!=null?_:t.options.history.state.floorId,room_type_id:(g=(d=E.value)==null?void 0:d.room_type)!=null?g:uo,name:e.roomId==="new"?"":(F=(h=b(e.roomId))==null?void 0:h.name)!=null?F:""}});const M=I(null),T=[m=>!!m||R("this_field_is_required"),m=>Number.isInteger(m)||R("this_is_invalid_value")],V=I(null),io=T,q=I(null),lo=[m=>!!m||R("this_field_is_required"),m=>m.length<=50||R("this_value_is_too_long")],{t:R}=eo(),mo=()=>{var m,_,d,g,h,F;if((m=q.value)==null||m.validate(),(_=V.value)==null||_.validate(),(d=M.value)==null||d.validate(),!(((g=q.value)==null?void 0:g.error)||((h=V.value)==null?void 0:h.error)||((F=M.value)==null?void 0:F.error))){if(e.roomId==="new"){ao.mutate(v.value,{onSuccess:()=>{r()},onError:()=>{n()}});return}no.mutate(p(c({},v.value),{room_id:e.roomId}),{onSuccess:()=>{r()},onError:()=>{n()}})}};return(m,_)=>(S(),D(wo,{onSubmit:mo},{default:w(()=>[l(L)?(S(),k("div",Bo,[(S(),k(Qo,null,Co(3,d=>f(Io,{key:d,type:"QInput"})),64))])):(S(),k("div",No,[f(So,{ref_key:"nameField",ref:q,modelValue:v.value.name,"onUpdate:modelValue":_[0]||(_[0]=d=>v.value.name=d),label:l(R)("room_name"),rules:lo},null,8,["modelValue","label"]),f(H,{ref_key:"roomTypeField",ref:V,modelValue:v.value.room_type_id,"onUpdate:modelValue":_[1]||(_[1]=d=>v.value.room_type_id=d),label:l(R)("room_type"),rules:l(io),options:l(u),"map-options":"","option-label":"code","option-value":"id","emit-value":""},null,8,["modelValue","label","rules","options"]),f(H,{ref_key:"roomFloorField",ref:M,modelValue:v.value.room_floor_id,"onUpdate:modelValue":_[2]||(_[2]=d=>v.value.room_floor_id=d),label:l(R)("floor"),rules:T,options:l(i),"map-options":"","option-label":"name","option-value":"id","emit-value":""},null,8,["modelValue","label","options"])])),oo("div",Po,[go(f(K,{label:l(R)("cancel"),flat:"",type:"button"},null,8,["label"]),[[Oo]]),f(K,{label:l(R)("save"),color:"orange-9",type:"submit",disable:l(L)},null,8,["label","disable"])])]),_:1}))}});var $o=qo(Yo,[["__scopeId","data-v-60270564"]]);const Ao={class:"text-h6"},ue=J({setup(o){const e=W(),r=X(),{t:n}=eo(),t=I(!1),s=Z(()=>{const{roomId:a}=r.params;return Array.isArray(a)?null:a==="new"?"new":typeof+a=="number"?+a:null});ho(()=>t.value=!0);const u=()=>{e.replace({path:"/settings/room-settings",query:r.query})};return(a,y)=>l(s)?(S(),D(yo,{key:0,modelValue:t.value,"onUpdate:modelValue":y[0]||(y[0]=i=>t.value=i),onHide:u},{default:w(()=>[f(fo,{style:{width:"500px","max-width":"80vw"}},{default:w(()=>[f(A,null,{default:w(()=>[oo("div",Ao,j(l(s)==="new"?l(n)("new_room"):l(n)("edit_room"))+" "+j(l(e).options.history.state.roomName),1)]),_:1}),f(A,{class:"q-pt-none"},{default:w(()=>[f($o,{"room-id":l(s)},null,8,["room-id"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):Fo("",!0)}});export{ue as default};
