import{j as s}from"./axiosClient.264e3cda.js";import{d as e}from"./useI18n.cd288b87.js";const y=()=>{const{t:o}=e(),t=s();return{notifySaveSuccess:()=>t.notify({message:o("saved"),position:"bottom-right",type:"positive",actions:[{label:"Dismiss",color:"white"}]}),notifySaveFailed:()=>t.notify({message:o("failed_to_save"),position:"bottom-right",type:"negative",actions:[{label:"Dismiss",color:"white"}]}),notifyWarning:i=>t.notify({message:i,position:"bottom-right",type:"warning",actions:[{label:"Dismiss",color:"white"}]})}};export{y as u};
