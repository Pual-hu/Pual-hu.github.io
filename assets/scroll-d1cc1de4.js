import{H as i,K as a}from"./index-4223cdb1.js";const p=(e,o)=>{if(!i)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],l=a(e,t);return["scroll","auto","overlay"].some(r=>l.includes(r))},w=(e,o)=>{if(!i)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(p(t,o))return t;t=t.parentNode}return t};let n;const m=e=>{var o;if(!i)return 0;if(n!==void 0)return n;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const l=t.offsetWidth;t.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",t.appendChild(r);const s=r.offsetWidth;return(o=t.parentNode)==null||o.removeChild(t),n=l-s,n};function v(e,o){if(!i)return;if(!o){e.scrollTop=0;return}const t=[];let l=o.offsetParent;for(;l!==null&&e!==l&&e.contains(l);)t.push(l),l=l.offsetParent;const r=o.offsetTop+t.reduce((d,u)=>d+u.offsetTop,0),s=r+o.offsetHeight,c=e.scrollTop,f=c+e.clientHeight;r<c?e.scrollTop=r:s>f&&(e.scrollTop=s-e.clientHeight)}export{w as a,m as g,v as s};
