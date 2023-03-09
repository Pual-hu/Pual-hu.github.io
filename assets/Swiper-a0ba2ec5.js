import{d as D,a as m,r as I,o as U,c as R,w as o,j as C,b as e,e as b,u as c,k as L,m as j,n as A,f as P,q as F,s as q,F as M}from"./index-306901b4.js";import{E as O,a as G,v as J}from"./el-select-1fe09a52.js";import{E as H}from"./el-input-4b781430.js";import"./el-tag-9880a22b.js";import{E as K,a as Q}from"./el-table-column-c5104fff.js";import"./el-checkbox-b73071a6.js";import{E as W}from"./el-image-viewer-20b95527.js";import{E as X}from"./el-popover-cf429df4.js";import{a as f,E as B}from"./myaxios-1ccddccb.js";import{E as Y}from"./el-overlay-3f707a79.js";import{E as Z,a as ee}from"./el-form-item-2dfd0f7a.js";import{E as le}from"./el-progress-ced737b0.js";import"./index-d5ca4fd7.js";import"./scroll-fe39b4a8.js";const te=["src"],oe={class:"dialog-footer"},ae=D({__name:"dialogSwiper",props:["type","id","reload"],setup(z,{expose:n}){const s=z,d=m(!1),v=m();let l=I({imageUrl:"",addressUrl:"",orderNumber:0}),y=new FormData;const h=I({image:[{required:!0,message:"请选择上传文件",trigger:"blur"}],addressUrl:[{required:!0,message:"请输入图片url地址",trigger:"blur"}],orderNumber:[{required:!0,message:"请输入排序号",trigger:"blur"}]}),k=(a,i)=>{l.imageUrl=URL.createObjectURL(i.raw)},w=a=>(y.append("file",a),l.imageUrl=URL.createObjectURL(a),a.type!=="image/jpeg"?(B.error("Avatar picture must be JPG format!"),!1):a.size/1024/1024>2?(B.error("Avatar picture size can not exceed 2MB!"),!1):!0);function E(){d.value=!1}function N(){d.value=!0,s.type==="add"?(l.imageUrl="",l.addressUrl="",l.orderNumber=0):f.get(`/carousels/${s.id}`).then(a=>{console.log(a),l.imageUrl=a.carouselUrl,l.addressUrl=a.redirectUrl,l.orderNumber=a.carouselRank})}function S(){d.value=!1,console.log(y.get("file")),s.type==="add"?f.post("/upload/file",y,{headers:{"Content-Type":'"multipart/form-data"'}}).then(a=>{console.log(a),f.post("/carousels",{carouselUrl:a,redirectUrl:l.addressUrl,carouselRank:l.orderNumber}).then(()=>{s.reload()})}):f.put("/carousels",{carouselId:s.id,carouselUrl:l.imageUrl,redirectUrl:l.addressUrl,carouselRank:l.orderNumber}).then(()=>{s.reload&&s.reload()})}return n({open:N,close:E}),(a,i)=>{const r=A,t=le,u=Z,g=H,p=ee,x=P,T=Y;return U(),R(T,{ref_key:"dialogEle",ref:v,modelValue:d.value,"onUpdate:modelValue":i[2]||(i[2]=_=>d.value=_),title:s.type=="add"?"新增轮播图配置":"修改轮播图配置",width:"30%","show-close":!1,"destroy-on-close":""},{footer:o(()=>[C("span",oe,[e(x,{type:"primary",onClick:E},{default:o(()=>[b("关闭")]),_:1}),e(x,{type:"primary",onClick:S},{default:o(()=>[b("确认")]),_:1})])]),default:o(()=>[e(p,{ref:"formRef","label-position":"left",model:c(l),"label-width":"100px",class:"demo-ruleForm",rules:h},{default:o(()=>[e(u,{"label-width":"110px",label:"轮播图片",prop:"image"},{default:o(()=>[e(t,{class:"avatar-uploader",action:"#","auto-upload":!0,"show-file-list":!1,"on-success":k,"before-upload":w},{default:o(()=>[c(l).imageUrl?(U(),L("img",{key:0,src:c(l).imageUrl,class:"avatar",width:"100",height:"100"},null,8,te)):(U(),R(r,{key:1,class:"avatar-uploader-icon"},{default:o(()=>[e(c(j))]),_:1}))]),_:1})]),_:1}),e(u,{"label-width":"110px",label:"图片链接地址",prop:"addressUrl"},{default:o(()=>[e(g,{modelValue:c(l).addressUrl,"onUpdate:modelValue":i[0]||(i[0]=_=>c(l).addressUrl=_),placeholder:"请输入图片url地址"},null,8,["modelValue"])]),_:1}),e(u,{"label-width":"110px",label:"图片链接地址",prop:"orderNumber"},{default:o(()=>[e(g,{type:"number",modelValue:c(l).orderNumber,"onUpdate:modelValue":i[1]||(i[1]=_=>c(l).orderNumber=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});const re={style:{display:"flex","margin-left":"12px"}},ne={style:{display:"flex","align-items":"center"}},se={style:{margin:"10px 0 0 0"}},we=D({__name:"Swiper",setup(z){const n=I({tableData:[],totalCount:0,currentPage:1,pageSize:10}),s=m(),d=m("add"),v=m(""),l=m(!1),y=m(),h=m([]),k=r=>{h.value=r};function w(){const r=O.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});f.get("/carousels",{params:{pageNumber:n.currentPage,pageSize:n.pageSize}}).then(t=>{n.tableData=t.list,n.totalCount=t.totalCount,r.close()})}let E=function(r){l.value=!0,f.get("/carousels",{params:{pageNumber:r,pageSize:n.pageSize}}).then(t=>{n.tableData=t.list,n.totalCount=t.totalCount,l.value=!1})};const N=function(){new Promise((r,t)=>{d.value="add",r(void 0)}).then(()=>{s.value.open()})},S=function(){d.value="modify",Promise.resolve().then(()=>{s.value.open()})},a=function(r,t,u,g){console.log("hover进入获取单元格的id",r.carouselId),v.value=r.carouselId},i=function(r){let t=[];debugger;r==="all"?h.value.length===0?console.log("请选择需要批量删除的文件"):(t=h.value.map(u=>u.carouselId),f.delete("/carousels",{data:{ids:t}})):(t=[v],f.delete("/carousels",{data:{ids:t}}))};return F(()=>{w()}),(r,t)=>{const u=P,g=X,p=Q,x=W,T=K,_=G,$=J;return U(),L(M,null,[C("div",re,[e(u,{type:"primary",onClick:N},{default:o(()=>[b("新增")]),_:1}),e(g,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:t[0]||(t[0]=V=>i("all"))},{reference:o(()=>[e(u,{type:"danger"},{default:o(()=>[b("批量删除")]),_:1})]),_:1})]),q((U(),R(T,{ref_key:"multipleTableRef",ref:y,data:n.tableData,height:"500",style:{width:"100%"},onSelectionChange:k,onCellMouseEnter:a},{default:o(()=>[e(p,{fixed:"",type:"selection",width:"55"}),e(p,{label:"轮播图",width:"120"},{default:o(V=>[C("div",ne,[e(x,{style:{width:"100px",height:"100px"},"preview-src-list":n.tableData,src:V.row.carouselUrl,"scroll-container":"",lazy:""},null,8,["preview-src-list","src"])])]),_:1}),e(p,{property:"redirectUrl",label:"跳转链接",width:"520"}),e(p,{property:"carouselRank",label:"排序值",width:"120"}),e(p,{property:"createTime",label:"添加时间",width:"120"}),e(p,{label:"操作","show-overflow-tooltip":""},{default:o(()=>[e(g,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:t[1]||(t[1]=V=>i(""))},{reference:o(()=>[e(u,{link:"",type:"primary",size:"small"},{default:o(()=>[b("删除")]),_:1})]),_:1}),e(u,{link:"",type:"primary",size:"small",onClick:S},{default:o(()=>[b("修改")]),_:1})]),_:1})]),_:1},8,["data"])),[[$,l.value]]),C("div",se,[e(_,{background:"",layout:"prev, pager, next",total:n.totalCount,onCurrentChange:c(E)},null,8,["total","onCurrentChange"])]),e(ae,{ref_key:"dialogSwi",ref:s,reload:w,type:d.value,id:v.value},null,8,["type","id"])],64)}}});export{we as default};
