import{cd as F,a$ as y,ce as R,H as $,bc as N}from"./index-969c3991.js";var b=/\s/;function D(e){for(var n=e.length;n--&&b.test(e.charAt(n)););return n}var P=/^\s+/;function U(e){return e&&e.slice(0,D(e)+1).replace(P,"")}var L=0/0,_=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,w=/^0o[0-7]+$/i,V=parseInt;function S(e){if(typeof e=="number")return e;if(F(e))return L;if(y(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=y(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=U(e);var t=j.test(e);return t||w.test(e)?V(e.slice(2),t?2:8):_.test(e)?L:+e}var X=function(){return R.Date.now()};const I=X;var q="Expected a function",z=Math.max,G=Math.min;function K(e,n,t){var a,s,c,o,i,u,l=0,v=!1,m=!1,p=!0;if(typeof e!="function")throw new TypeError(q);n=S(n)||0,y(t)&&(v=!!t.leading,m="maxWait"in t,c=m?z(S(t.maxWait)||0,n):c,p="trailing"in t?!!t.trailing:p);function g(r){var f=a,h=s;return a=s=void 0,l=r,o=e.apply(h,f),o}function T(r){return l=r,i=setTimeout(x,n),v?g(r):o}function M(r){var f=r-u,h=r-l,H=n-f;return m?G(H,c-h):H}function C(r){var f=r-u,h=r-l;return u===void 0||f>=n||f<0||m&&h>=c}function x(){var r=I();if(C(r))return k(r);i=setTimeout(x,M(r))}function k(r){return i=void 0,p&&a?g(r):(a=s=void 0,o)}function O(){i!==void 0&&clearTimeout(i),l=0,a=u=s=i=void 0}function W(){return i===void 0?o:k(I())}function E(){var r=I(),f=C(r);if(a=arguments,s=this,u=r,f){if(i===void 0)return T(u);if(m)return clearTimeout(i),i=setTimeout(x,n),g(u)}return i===void 0&&(i=setTimeout(x,n)),o}return E.cancel=O,E.flush=W,E}const d=new Map;let A;$&&(document.addEventListener("mousedown",e=>A=e),document.addEventListener("mouseup",e=>{for(const n of d.values())for(const{documentHandler:t}of n)t(e,A)}));function B(e,n){let t=[];return Array.isArray(n.arg)?t=n.arg:N(n.arg)&&t.push(n.arg),function(a,s){const c=n.instance.popperRef,o=a.target,i=s==null?void 0:s.target,u=!n||!n.instance,l=!o||!i,v=e.contains(o)||e.contains(i),m=e===o,p=t.length&&t.some(T=>T==null?void 0:T.contains(o))||t.length&&t.includes(i),g=c&&(c.contains(o)||c.contains(i));u||l||v||m||p||g||n.value(a,s)}}const Q={beforeMount(e,n){d.has(e)||d.set(e,[]),d.get(e).push({documentHandler:B(e,n),bindingFn:n.value})},updated(e,n){d.has(e)||d.set(e,[]);const t=d.get(e),a=t.findIndex(c=>c.bindingFn===n.oldValue),s={documentHandler:B(e,n),bindingFn:n.value};a>=0?t.splice(a,1,s):t.push(s)},unmounted(e){d.delete(e)}};export{Q as C,K as d};
