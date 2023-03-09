import{a$ as be,H as B,P as de,Q as se,aT as fe,aG as ue,d as K,b0 as ce,b1 as he,b2 as ke,V as ve,D as me,a6 as Ie,a as y,b3 as _e,aA as ze,Y as b,J as le,aa as pe,q as ge,o as h,c as oe,b as u,w as L,j as p,Z as c,u as t,a1 as re,ay as Le,a0 as k,n as T,b4 as Ce,k as N,F as ie,aX as Ee,aY as Se,b5 as Oe,b6 as Te,$ as Ne,b7 as xe,b8 as $e,ao as Re,s as Ae,aj as Ve,S as J,ak as Be,al as Ye,a2 as we,b9 as Y,aK as V,ba as Me,am as ye,bb as Xe,ah as De,v as Fe,bc as He,aJ as Pe,bd as je}from"./index-3dfffe59.js";import{d as We}from"./el-tag-252c5fac.js";import{u as Ze}from"./myaxios-3322f827.js";import{a as qe}from"./scroll-05d3369a.js";var Ge="Expected a function";function ne(r,d,l){var n=!0,g=!0;if(typeof r!="function")throw new TypeError(Ge);return be(l)&&(n="leading"in l?!!l.leading:n,g="trailing"in l?!!l.trailing:g),We(r,d,{leading:n,maxWait:d,trailing:g})}const Je=(r,d)=>{if(!B||!r||!d)return!1;const l=r.getBoundingClientRect();let n;return d instanceof Element?n=d.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right},Ke=de({urlList:{type:se(Array),default:()=>fe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Qe={close:()=>!0,switch:r=>ue(r)},Ue=["src"],et=K({name:"ElImageViewer"}),tt=K({...et,props:Ke,emits:Qe,setup(r,{expose:d,emit:l}){const n=r,g={CONTAIN:{name:"contain",icon:ce(he)},ORIGINAL:{name:"original",icon:ce(ke)}},{t:C}=ve(),o=me("image-viewer"),{nextZIndex:Q}=Ie(),x=y(),I=y([]),_=_e(),z=y(!0),f=y(n.initialIndex),v=ze(g.CONTAIN),i=y({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),M=b(()=>{const{urlList:e}=n;return e.length<=1}),$=b(()=>f.value===0),j=b(()=>f.value===n.urlList.length-1),U=b(()=>n.urlList[f.value]),X=b(()=>{const{scale:e,deg:a,offsetX:s,offsetY:m,enableTransition:S}=i.value;let w=s/e,O=m/e;switch(a%360){case 90:case-270:[w,O]=[O,-w];break;case 180:case-180:[w,O]=[-w,-O];break;case 270:case-90:[w,O]=[-O,w];break}const A={transform:`scale(${e}) rotate(${a}deg) translate(${w}px, ${O}px)`,transition:S?"transform .3s":""};return v.value.name===g.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),ee=b(()=>ue(n.zIndex)?n.zIndex:Q());function R(){te(),l("close")}function D(){const e=ne(s=>{switch(s.code){case V.esc:n.closeOnPressEscape&&R();break;case V.space:H();break;case V.left:q();break;case V.up:E("zoomIn");break;case V.right:G();break;case V.down:E("zoomOut");break}}),a=ne(s=>{const m=s.deltaY||s.deltaX;E(m<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});_.run(()=>{Y(document,"keydown",e),Y(document,"wheel",a)})}function te(){_.stop()}function ae(){z.value=!1}function W(e){z.value=!1,e.target.alt=C("el.image.error")}function Z(e){if(z.value||e.button!==0||!x.value)return;i.value.enableTransition=!1;const{offsetX:a,offsetY:s}=i.value,m=e.pageX,S=e.pageY,w=ne(A=>{i.value={...i.value,offsetX:a+A.pageX-m,offsetY:s+A.pageY-S}}),O=Y(document,"mousemove",w);Y(document,"mouseup",()=>{O()}),e.preventDefault()}function F(){i.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(z.value)return;const e=Me(g),a=Object.values(g),s=v.value.name,S=(a.findIndex(w=>w.name===s)+1)%e.length;v.value=g[e[S]],F()}function P(e){const a=n.urlList.length;f.value=(e+a)%a}function q(){$.value&&!n.infinite||P(f.value-1)}function G(){j.value&&!n.infinite||P(f.value+1)}function E(e,a={}){if(z.value)return;const{zoomRate:s,rotateDeg:m,enableTransition:S}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":i.value.scale>.2&&(i.value.scale=Number.parseFloat((i.value.scale/s).toFixed(3)));break;case"zoomIn":i.value.scale<7&&(i.value.scale=Number.parseFloat((i.value.scale*s).toFixed(3)));break;case"clockwise":i.value.deg+=m;break;case"anticlockwise":i.value.deg-=m;break}i.value.enableTransition=S}return le(U,()=>{pe(()=>{const e=I.value[0];e!=null&&e.complete||(z.value=!0)})}),le(f,e=>{F(),l("switch",e)}),ge(()=>{var e,a;D(),(a=(e=x.value)==null?void 0:e.focus)==null||a.call(e)}),d({setActiveItem:P}),(e,a)=>(h(),oe(Ye,{to:"body",disabled:!e.teleported},[u(Be,{name:"viewer-fade",appear:""},{default:L(()=>[p("div",{ref_key:"wrapper",ref:x,tabindex:-1,class:c(t(o).e("wrapper")),style:re({zIndex:t(ee)})},[p("div",{class:c(t(o).e("mask")),onClick:a[0]||(a[0]=Le(s=>e.hideOnClickModal&&R(),["self"]))},null,2),k(" CLOSE "),p("span",{class:c([t(o).e("btn"),t(o).e("close")]),onClick:R},[u(t(T),null,{default:L(()=>[u(t(Ce))]),_:1})],2),k(" ARROW "),t(M)?k("v-if",!0):(h(),N(ie,{key:0},[p("span",{class:c([t(o).e("btn"),t(o).e("prev"),t(o).is("disabled",!e.infinite&&t($))]),onClick:q},[u(t(T),null,{default:L(()=>[u(t(Ee))]),_:1})],2),p("span",{class:c([t(o).e("btn"),t(o).e("next"),t(o).is("disabled",!e.infinite&&t(j))]),onClick:G},[u(t(T),null,{default:L(()=>[u(t(Se))]),_:1})],2)],64)),k(" ACTIONS "),p("div",{class:c([t(o).e("btn"),t(o).e("actions")])},[p("div",{class:c(t(o).e("actions__inner"))},[u(t(T),{onClick:a[1]||(a[1]=s=>E("zoomOut"))},{default:L(()=>[u(t(Oe))]),_:1}),u(t(T),{onClick:a[2]||(a[2]=s=>E("zoomIn"))},{default:L(()=>[u(t(Te))]),_:1}),p("i",{class:c(t(o).e("actions__divider"))},null,2),u(t(T),{onClick:H},{default:L(()=>[(h(),oe(Ne(t(v).icon)))]),_:1}),p("i",{class:c(t(o).e("actions__divider"))},null,2),u(t(T),{onClick:a[3]||(a[3]=s=>E("anticlockwise"))},{default:L(()=>[u(t(xe))]),_:1}),u(t(T),{onClick:a[4]||(a[4]=s=>E("clockwise"))},{default:L(()=>[u(t($e))]),_:1})],2)],2),k(" CANVAS "),p("div",{class:c(t(o).e("canvas"))},[(h(!0),N(ie,null,Re(e.urlList,(s,m)=>Ae((h(),N("img",{ref_for:!0,ref:S=>I.value[m]=S,key:s,src:s,style:re(t(X)),class:c(t(o).e("img")),onLoad:ae,onError:W,onMousedown:Z},null,46,Ue)),[[Ve,m===f.value]])),128))],2),J(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var at=we(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const nt=ye(at),st=de({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:se([String,Object])},previewSrcList:{type:se(Array),default:()=>fe([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),lt={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>ue(r),close:()=>!0,show:()=>!0},ot=["src","loading"],rt={key:0},it=K({name:"ElImage",inheritAttrs:!1}),ut=K({...it,props:st,emits:lt,setup(r,{emit:d}){const l=r;let n="";const{t:g}=ve(),C=me("image"),o=Xe(),Q=Ze(),x=y(),I=y(!1),_=y(!0),z=y(!1),f=y(),v=y(),i=B&&"loading"in HTMLImageElement.prototype;let M,$;const j=b(()=>o.style),U=b(()=>{const{fit:e}=l;return B&&e?{objectFit:e}:{}}),X=b(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),ee=b(()=>{const{previewSrcList:e,initialIndex:a}=l;let s=a;return a>e.length-1&&(s=0),s}),R=b(()=>l.loading==="eager"?!1:!i&&l.loading==="lazy"||l.lazy),D=()=>{B&&(_.value=!0,I.value=!1,x.value=l.src)};function te(e){_.value=!1,I.value=!1,d("load",e)}function ae(e){_.value=!1,I.value=!0,d("error",e)}function W(){Je(f.value,v.value)&&(D(),H())}const Z=je(W,200);async function F(){var e;if(!B)return;await pe();const{scrollContainer:a}=l;He(a)?v.value=a:Pe(a)&&a!==""?v.value=(e=document.querySelector(a))!=null?e:void 0:f.value&&(v.value=qe(f.value)),v.value&&(M=Y(v,"scroll",Z),setTimeout(()=>W(),100))}function H(){!B||!v.value||!Z||(M==null||M(),v.value=void 0)}function P(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function q(){X.value&&($=Y("wheel",P,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",z.value=!0,d("show"))}function G(){$==null||$(),document.body.style.overflow=n,z.value=!1,d("close")}function E(e){d("switch",e)}return le(()=>l.src,()=>{R.value?(_.value=!0,I.value=!1,H(),F()):D()}),ge(()=>{R.value?F():D()}),(e,a)=>(h(),N("div",{ref_key:"container",ref:f,class:c([t(C).b(),e.$attrs.class]),style:re(t(j))},[x.value!==void 0&&!I.value?(h(),N("img",De({key:0},t(Q),{src:x.value,loading:e.loading,style:t(U),class:[t(C).e("inner"),t(X)&&t(C).e("preview"),_.value&&t(C).is("loading")],onClick:q,onLoad:te,onError:ae}),null,16,ot)):k("v-if",!0),_.value||I.value?(h(),N("div",{key:1,class:c(t(C).e("wrapper"))},[_.value?J(e.$slots,"placeholder",{key:0},()=>[p("div",{class:c(t(C).e("placeholder"))},null,2)]):I.value?J(e.$slots,"error",{key:1},()=>[p("div",{class:c(t(C).e("error"))},Fe(t(g)("el.image.error")),3)]):k("v-if",!0)],2)):k("v-if",!0),t(X)?(h(),N(ie,{key:2},[z.value?(h(),oe(t(nt),{key:0,"z-index":e.zIndex,"initial-index":t(ee),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:G,onSwitch:E},{default:L(()=>[e.$slots.viewer?(h(),N("div",rt,[J(e.$slots,"viewer")])):k("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):k("v-if",!0)],64)):k("v-if",!0)],6))}});var ct=we(ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const pt=ye(ct);export{pt as E};
