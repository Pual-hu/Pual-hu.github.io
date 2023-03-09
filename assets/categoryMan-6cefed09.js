import{d as R,a as c,r as N,o as S,c as q,w as a,j as B,b as o,e as g,u as f,f as z,q as j,k as A,s as G,F as H,x as J,t as K}from"./index-4223cdb1.js";import{E as O,a as Q,v as W}from"./el-select-119de416.js";import{E as X}from"./el-input-16016f20.js";import"./el-tag-89d34ce8.js";import{E as Y,a as Z}from"./el-table-column-5cbb539f.js";import"./el-checkbox-d5efd420.js";import{E as ee}from"./el-popover-ae4914f2.js";import{a as _}from"./myaxios-b5c13c86.js";import{E as te}from"./el-overlay-3f3b1a92.js";import{E as oe,a as le}from"./el-form-item-9c4e171d.js";import"./index-4944fcd8.js";import"./scroll-d1cc1de4.js";const ae={class:"dialog-footer"},ne=R({__name:"dialogCategoryMan",props:["type","id","reload"],setup(D,{expose:r}){const n=D,u=c(!1),v=c();let e=N({name:"",sort:"",parentId:0,categoryLevel:1}),b=new FormData;const h=N({name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],sort:[{required:!0,message:"请输入排序号",trigger:"blur"}]});function k(){u.value=!1}function y(){u.value=!0,n.type==="add"?(e.name="",e.sort=""):_.get(`/categories/${n.id}`).then(i=>{console.log(i),e.name=i.categoryName,e.sort=i.categoryRank,e.parentId=i.parentId,e.categoryLevel=i.categoryLevel})}function x(){u.value=!1,console.log(b.get("file")),n.type==="add"?_.post("/categories",{categoryName:e.name,categoryRank:e.sort,categoryLevel:e.categoryLevel,parentId:e.parentId}).then(()=>{console.log("添加成功"),n.reload()}):_.put("/categories",{categoryId:n.id,categoryName:e.name,categoryRank:e.sort,categoryLevel:e.categoryLevel,parentId:e.parentId}).then(()=>{console.log("编辑成功"),n.reload&&n.reload()})}return r({open:y,close:k}),(i,d)=>{const m=X,w=oe,I=le,E=z,L=te;return S(),q(L,{ref_key:"dialogEle",ref:v,modelValue:u.value,"onUpdate:modelValue":d[2]||(d[2]=p=>u.value=p),title:n.type=="add"?"新增商品":"修改商品",width:"30%","show-close":!1,"destroy-on-close":""},{footer:a(()=>[B("span",ae,[o(E,{type:"primary",onClick:k},{default:a(()=>[g("关闭")]),_:1}),o(E,{type:"primary",onClick:x},{default:a(()=>[g("确认")]),_:1})])]),default:a(()=>[o(I,{ref:"formRef","label-position":"left",model:f(e),"label-width":"100px",class:"demo-ruleForm",rules:h},{default:a(()=>[o(w,{"label-width":"110px",label:"分类名称",prop:"name"},{default:a(()=>[o(m,{modelValue:f(e).name,"onUpdate:modelValue":d[0]||(d[0]=p=>f(e).name=p),placeholder:"请输入分类名称"},null,8,["modelValue"])]),_:1}),o(w,{"label-width":"110px",label:"排序值",prop:"sort"},{default:a(()=>[o(m,{type:"number",modelValue:f(e).sort,"onUpdate:modelValue":d[1]||(d[1]=p=>f(e).sort=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});const re={style:{display:"flex","margin-left":"12px"}},ie={style:{margin:"10px 0 0 0"}},he=R({__name:"categoryMan",setup(D){const r=N({tableData:[],totalCount:0,currentPage:1,pageSize:10}),n=c(),u=c("add"),v=c("");let e=c(!1),b=c(1),h=c(0);const k=K(),y=J(),x=c(),i=c([]),d=l=>{i.value=l};function m(){const l=O.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});_.get("categories",{params:{pageNumber:r.currentPage,pageSize:r.pageSize,categoryLevel:b.value,parentId:h.value}}).then(t=>{r.tableData=t.list,r.totalCount=t.totalCount,l.close()})}let w=function(l){e.value=!0,_.get("categories",{params:{pageNumber:l,pageSize:r.pageSize,categoryLevel:b.value,parentId:h.value}}).then(t=>{x.value.setScrollTop(0),r.tableData=t.list,r.totalCount=t.totalCount,e.value=!1})};const I=function(){new Promise((l,t)=>{u.value="add",l(void 0)}).then(()=>{n.value.open()})},E=function(){u.value="modify",Promise.resolve().then(()=>{n.value.open()})},L=function(l,t,s,T){console.log("hover进入获取单元格的id",l.categoryId,l),v.value=l.categoryId},p=function(l){let t=[];debugger;l==="all"?i.value.length===0?console.log("请选择需要批量删除的文件"):(t=i.value.map(s=>s.categoryId),_.delete("/indexConfigs/delete",{data:{ids:t}}).then(()=>{m()})):(t=[v.value],_.delete("/indexConfigs/delete",{data:{ids:t}}).then(()=>{m()}))};function F(l,t){if(console.log("下级分类"),t===3)console.log("没有下级了");else{let s=`categoryLevel${++t}`;k.push({name:s,query:{level:t,parent_id:l}})}}return j(()=>{console.log(y.query),y.query.level&&(b.value=Number(y.query.level),h.value=Number(y.query.parent_id)),m()}),(l,t)=>{const s=z,T=ee,C=Z,$=Y,P=Q,M=W;return S(),A(H,null,[B("div",re,[o(s,{type:"primary",onClick:I},{default:a(()=>[g("新增")]),_:1}),o(T,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:t[0]||(t[0]=V=>p("all"))},{reference:a(()=>[o(s,{type:"danger"},{default:a(()=>[g("批量删除")]),_:1})]),_:1})]),G((S(),q($,{ref_key:"multipleTableRef",ref:x,data:r.tableData,height:"500",style:{width:"100%"},onSelectionChange:d,onCellMouseEnter:L,"scroll-container":""},{default:a(()=>[o(C,{fixed:"",type:"selection",width:"55"}),o(C,{property:"categoryName",label:"分类名称",width:"120"}),o(C,{property:"categoryRank",label:"排序值",width:"120"}),o(C,{property:"createTime",label:"添加时间",width:"220"}),o(C,{label:"操作","show-overflow-tooltip":""},{default:a(V=>[o(T,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:t[1]||(t[1]=U=>p(""))},{reference:a(()=>[o(s,{link:"",type:"primary",size:"small"},{default:a(()=>[g("删除")]),_:1})]),_:1}),o(s,{link:"",type:"primary",size:"small",onClick:U=>F(V.row.categoryId,V.row.categoryLevel)},{default:a(()=>[g("下级分类")]),_:2},1032,["onClick"]),o(s,{link:"",type:"primary",size:"small",onClick:E},{default:a(()=>[g("修改")]),_:1})]),_:1})]),_:1},8,["data"])),[[M,f(e)]]),B("div",ie,[o(P,{background:"",layout:"prev, pager, next",total:r.totalCount,onCurrentChange:f(w)},null,8,["total","onCurrentChange"])]),o(ne,{ref_key:"dialogSwi",ref:n,reload:m,type:u.value,id:v.value},null,8,["type","id"])],64)}}});export{he as default};
