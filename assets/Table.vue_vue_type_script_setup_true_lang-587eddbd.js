import{d as h,r as C,a as p,q as x,o as g,k as v,s as N,u as l,c as S,w as k,j as T,b as E,F as P,S as y}from"./index-4223cdb1.js";import{E as z,a as D,v as B}from"./el-select-119de416.js";import"./el-input-16016f20.js";import"./el-tag-89d34ce8.js";import{E as F}from"./el-table-column-5cbb539f.js";import"./el-checkbox-d5efd420.js";import{a as m}from"./myaxios-b5c13c86.js";const j={style:{margin:"10px 0 0 0"}},M=h({__name:"Table",props:["action","extraParams"],setup(u,{expose:b}){const e=u;let a=C({loadingTable:!1,totalCount:0,pageSize:10,pageNumber:1,tableData:[]}),i=p(),s=p();function c(t){t&&(a.pageNumber=t);let r={pageNumber:a.pageNumber,pageSize:a.pageSize};e.extraParams&&Object.keys(e.extraParams).forEach(n=>{r[n]=e.extraParams[n]});const o=z.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});m.get(e.action,{params:r}).then(n=>{a.tableData=n.list,a.totalCount=n.totalCount,o.close()})}let d=function(t){a.loadingTable=!0,a.pageNumber=t;let r={pageNumber:a.pageNumber,pageSize:a.pageSize};e.extraParams&&Object.keys(e.extraParams).forEach(o=>{r.item=e.extraParams[o]}),m.get(e.action,{params:r}).then(o=>{i.value.setScrollTop(0),a.tableData=o.list,a.totalCount=o.totalCount,a.loadingTable=!1})};const f=t=>{s.value=t};return x(()=>{c(void 0)}),b({multipleSelection:s,getFromInfos:c}),(t,r)=>{const o=F,n=D,_=B;return g(),v(P,null,[N((g(),S(o,{ref_key:"multipleTableRef",ref:i,data:l(a).tableData,height:"500",onSelectionChange:f},{default:k(()=>[y(t.$slots,"myTable")]),_:3},8,["data"])),[[_,l(a).loadingTable]]),T("div",j,[E(n,{background:"",layout:"prev, pager, next","current-page":l(a).pageNumber,total:l(a).totalCount,onCurrentChange:l(d)},null,8,["current-page","total","onCurrentChange"])])],64)}}});export{M as _};
