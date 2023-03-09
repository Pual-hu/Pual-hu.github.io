import{d as F,r as G,a as r,q as R,o as d,k as g,j as x,b as t,w as l,s as V,u as _,c as y,F as j,an as q,e as c,t as M,W as A,f as W}from"./index-4223cdb1.js";import{E as H,a as J,v as K}from"./el-select-119de416.js";import"./el-input-16016f20.js";import"./el-tag-89d34ce8.js";import{E as O,a as Q}from"./el-table-column-5cbb539f.js";import"./el-checkbox-d5efd420.js";import{E as U}from"./el-popover-ae4914f2.js";import{a as u}from"./myaxios-b5c13c86.js";import"./index-4944fcd8.js";import"./scroll-d1cc1de4.js";const X={style:{display:"flex","margin-left":"12px"}},Y=["src"],Z={key:0,style:{color:"green"}},ee={key:1,style:{color:"red"}},te={style:{margin:"10px 0 0 0"}},ge=F({__name:"goodsMan",setup(oe){let h=M(),S=A("filters");const n=G({tableData:[],totalCount:0,currentPage:1,pageSize:10});r(),r("add");const I=r("");let m=r(!1),v=r(1),b=r(0);const C=r(),f=r([]),E=o=>{f.value=o};function p(){const o=H.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});u.get("/goods/list",{params:{pageNumber:n.currentPage,pageSize:n.pageSize,categoryLevel:v.value,parentId:b.value}}).then(e=>{n.tableData=e.list,n.totalCount=e.totalCount,o.close()})}let z=function(o){m.value=!0,u.get("/goods/list",{params:{pageNumber:o,pageSize:n.pageSize,categoryLevel:v.value,parentId:b.value}}).then(e=>{C.value.setScrollTop(0),n.tableData=e.list,n.totalCount=e.totalCount,m.value=!1})};const T=function(o){console.log(h),h.push({name:"addGoods",query:{id:o}})},N=function(o){let e=[];o==="all"?f.value.length===0?console.log("请选择需要批量删除的文件"):(e=f.value.map(i=>i.categoryId),u.delete("/indexConfigs/delete",{data:{ids:e}}).then(()=>{p()})):(e=[I.value],u.delete("/indexConfigs/delete",{data:{ids:e}}).then(()=>{p()}))},k=function(o,e){u.put(`/goods/status/${o}`,{ids:e?[e]:[]}).then(()=>{console.log("修改成功"),p()})};return R(()=>{p()}),(o,e)=>{const i=W,B=q("router-link"),D=U,s=Q,L=O,P=J,$=K;return d(),g(j,null,[x("div",X,[t(B,{to:"/addGoods",style:{"margin-right":"16px"}},{default:l(()=>[t(i,{type:"primary"},{default:l(()=>[c("新增")]),_:1})]),_:1}),t(D,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:e[0]||(e[0]=a=>N("all"))},{reference:l(()=>[t(i,{type:"danger"},{default:l(()=>[c("批量删除")]),_:1})]),_:1})]),V((d(),y(L,{ref_key:"multipleTableRef",ref:C,data:n.tableData,height:"500",style:{width:"100%"},onSelectionChange:E,"scroll-container":""},{default:l(()=>[t(s,{fixed:"",type:"selection",width:"55"}),t(s,{property:"goodsId",label:"商品编号",width:"120"}),t(s,{property:"goodsName",label:"商品名",width:"120"}),t(s,{property:"goodsIntro",label:"商品简介",width:"120"}),t(s,{label:"商品图片",width:"150px"},{default:l(a=>[(d(),g("img",{style:{width:"100px",height:"100px"},key:a.row.categoryId,src:_(S).prefix(a.row.goodsCoverImg),alt:"商品主图",lazy:""},null,8,Y))]),_:1}),t(s,{property:"stockNum",label:"商品库存",width:"120"}),c("ss "),t(s,{property:"sellingPrice",label:"商品售价",width:"120"}),t(s,{label:"上架状态"},{default:l(a=>[a.row.goodsSellStatus==0?(d(),g("span",Z,"销售中")):(d(),g("span",ee,"已下架"))]),_:1}),t(s,{label:"操作","show-overflow-tooltip":""},{default:l(a=>[a.row.goodsSellStatus==0?(d(),y(i,{key:0,link:"",type:"primary",size:"small",onClick:w=>k(1,a.row.goodsId)},{default:l(()=>[c("下架")]),_:2},1032,["onClick"])):(d(),y(i,{key:1,link:"",type:"primary",size:"small",onClick:w=>k(0,a.row.goodsId)},{default:l(()=>[c("上架")]),_:2},1032,["onClick"])),t(i,{link:"",type:"primary",size:"small",onClick:w=>T(a.row.goodsId)},{default:l(()=>[c("修改")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[$,_(m)]]),x("div",te,[t(P,{background:"",layout:"prev, pager, next",total:n.totalCount,onCurrentChange:_(z)},null,8,["total","onCurrentChange"])])],64)}}});export{ge as default};
