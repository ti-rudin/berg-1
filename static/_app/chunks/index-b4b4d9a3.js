function k(){}const st=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function b(t){t.forEach(J)}function K(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Lt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ct(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function zt(t,e,n,r){if(t){const s=Q(t,e,n,r);return t[0](s)}}function Q(t,e,n,r){return t[1]&&r?ot(n.ctx.slice(),t[1](r(e))):n.ctx}function Bt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)l[c]=e.dirty[c]|s[c];return l}return e.dirty|s}return e.dirty}function Ft(t,e,n,r,s,l){if(s){const i=Q(e,n,r,l);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Wt(t,e,n){return t.set(n),e}const U=typeof window!="undefined";let ut=U?()=>window.performance.now():()=>Date.now(),B=U?t=>requestAnimationFrame(t):k;const x=new Set;function V(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&B(V)}function at(t){let e;return x.size===0&&B(V),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let O=!1;function ft(){O=!0}function _t(){O=!1}function dt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:dt(1,s,a=>e[n[a]].claim_order,u))-1;r[o]=n[_]+1;const f=_+1;n[f]=o,s=Math.max(f,s)}const l=[],i=[];let c=e.length-1;for(let o=n[s]+1;o!=0;o=r[o-1]){for(l.push(e[o-1]);c>=o;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);l.reverse(),i.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<i.length;o++){for(;u<l.length&&i[o].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(i[o],_)}}function mt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=Y("style");return yt(X(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(O){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){O&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Kt(){return F(" ")}function Qt(){return F("")}function Ut(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,r,s=!1){wt(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,e,n,r){return Z(t,s=>s.nodeName===e,s=>{const l=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||l.push(c.name)}l.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Xt(t,e,n){return tt(t,e,n,Y)}function Yt(t,e,n){return tt(t,e,n,bt)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>F(e),!0)}function Zt(t){return vt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e==null?"":e}function ne(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ie(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function re(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let R=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:pt(e),rules:{}};return q.set(t,n),n}function I(t,e,n,r,s,l,i,c=0){const o=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*l(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${kt(_)}_${c}`,a=X(t),{stylesheet:d,rules:h}=q.get(a)||At(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,R+=1,f}function Nt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),R-=s,R||Ct())}function Ct(){B(()=>{R||(q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),q.clear())})}let E;function v(t){E=t}function A(){if(!E)throw new Error("Function called outside component initialization");return E}function se(t){A().$$.on_mount.push(t)}function oe(t){A().$$.after_update.push(t)}function ce(t){A().$$.on_destroy.push(t)}function le(t,e){A().$$.context.set(t,e)}function ue(t){return A().$$.context.get(t)}const w=[],W=[],j=[],G=[],et=Promise.resolve();let z=!1;function nt(){z||(z=!0,et.then(it))}function ae(){return nt(),et}function D(t){j.push(t)}const L=new Set;let S=0;function it(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),St(e.$$)}for(v(null),w.length=0,S=0;W.length;)W.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];L.has(n)||(L.add(n),n())}j.length=0}while(w.length);for(;G.length;)G.pop()();z=!1,L.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let $;function jt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function T(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const M=new Set;let m;function fe(){m={r:0,c:[],p:m}}function _e(){m.r||b(m.c),m=m.p}function Mt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function de(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),m.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const qt={duration:0};function he(t,e,n,r){let s=e(t,n),l=r?0:1,i=null,c=null,o=null;function u(){o&&Nt(t,o)}function _(a,d){const h=a.b-l;return d*=Math.abs(h),{a:l,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=st,tick:p=k,css:g}=s||qt,P={start:ut()+d,b:a};a||(P.group=m,m.r+=1),i||c?c=P:(g&&(u(),o=I(t,l,a,h,d,y,g)),a&&p(0,1),i=_(P,h),D(()=>T(t,a,"start")),at(N=>{if(c&&N>c.start&&(i=_(c,h),c=null,T(t,i.b,"start"),g&&(u(),o=I(t,l,i.b,i.duration,0,y,s.css))),i){if(N>=i.end)p(l=i.b,1-l),T(t,i.b,"end"),c||(i.b?u():--i.group.r||b(i.group.c)),i=null;else if(N>=i.start){const rt=N-i.start;l=i.a+i.d*y(rt/i.duration),p(l,1-l)}}return!!(i||c)}))}return{run(a){K(s)?jt().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=c=null}}}function me(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],c=e[l];if(c){for(const o in i)o in c||(r[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);t[l]=c}else for(const o in i)s[o]=1}for(const i in r)i in n||(n[i]=void 0);return n}function pe(t){return typeof t=="object"&&t!==null?t:{}}function ye(t){t&&t.c()}function ge(t,e){t&&t.l(e)}function Rt(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||D(()=>{const o=l.map(J).filter(K);i?i.push(...o):b(o),t.$$.on_mount=[]}),c.forEach(D)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,r,s,l,i,c=[-1]){const o=E;v(t);const u=t.$$={fragment:null,ctx:null,props:l,update:k,not_equal:s,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:H(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Ot(t,f)),a}):[],u.update(),_=!0,b(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){ft();const f=$t(e.target);u.fragment&&u.fragment.l(f),f.forEach(xt)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),_t(),it()}v(o)}class be{$destroy(){Dt(this,1),this.$destroy=k}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ce as $,pe as A,Dt as B,ot as C,ae as D,k as E,ie as F,gt as G,Ut as H,b as I,bt as J,Yt as K,ue as L,zt as M,Ft as N,Ht as O,Bt as P,Tt as Q,It as R,be as S,Wt as T,Lt as U,re as V,ee as W,W as X,Jt as Y,D as Z,he as _,$t as a,Vt as b,Xt as c,xt as d,Y as e,ne as f,Gt as g,vt as h,xe as i,te as j,Kt as k,Qt as l,Zt as m,fe as n,de as o,_e as p,Mt as q,le as r,Pt as s,F as t,oe as u,se as v,ye as w,ge as x,Rt as y,me as z};
