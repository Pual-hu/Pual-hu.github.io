import{d as g,a as b,o as y,k as h,j as n,b as e,w as a,u as m,F as k,f as v,e as p,v as c,a1 as u}from"./index-306901b4.js";import{a as w}from"./el-table-column-c5104fff.js";import"./el-checkbox-b73071a6.js";import"./el-tag-9880a22b.js";import{_ as x}from"./Table.vue_vue_type_script_setup_true_lang-0361e66c.js";import{a as d}from"./myaxios-1ccddccb.js";import"./el-select-1fe09a52.js";import"./el-input-4b781430.js";import"./index-d5ca4fd7.js";import"./scroll-fe39b4a8.js";const F={style:{display:"flex","margin-left":"12px"}},z=g({__name:"memberMan",setup(C){let o=b(),f=function(){o.value.multipleSelection.length===0?console.log("请选择需要禁用用户"):d.put("/users/1",{ids:o.value.multipleSelection.map(r=>r.userId)}).then(()=>{console.log("禁用成功"),o.value.getFromInfos()})},_=function(){o.value.multipleSelection.length===0?console.log("请选择需要解禁用户"):d.put("/users/0",{ids:o.value.multipleSelection.map(r=>r.userId)}).then(()=>{console.log("解除成功"),o.value.getFromInfos()})};return(r,i)=>{const s=v,l=w;return y(),h(k,null,[n("div",F,[e(s,{type:"primary",onClick:m(_)},{default:a(()=>[p("解除禁用")]),_:1},8,["onClick"]),e(s,{type:"danger",onClick:i[0]||(i[0]=t=>m(f)())},{default:a(()=>[p("禁用账户")]),_:1})]),e(x,{action:"/users",ref_key:"table",ref:o},{myTable:a(()=>[e(l,{fixed:"",type:"selection",width:"55"}),e(l,{property:"nickName",label:"昵称",width:"120"}),e(l,{property:"loginName",label:"登录名",width:"120"}),e(l,{label:"身份状态"},{default:a(t=>[n("span",{style:u(t.row.lockedFlag==0?"color: green;":"color: red;")},c(t.row.lockedFlag==0?"正常":"禁用"),5)]),_:1}),e(l,{label:"是否注销"},{default:a(t=>[n("span",{style:u(t.row.lockedFlag==0?"color: green;":"color: red;")},c(t.row.isDeleted==0?"正常":"注销"),5)]),_:1}),e(l,{property:"createTime",label:"注册时间",width:"220"})]),_:1},512)],64)}}});export{z as default};
