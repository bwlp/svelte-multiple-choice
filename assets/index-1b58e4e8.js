(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function m(){}function te(e){return e()}function H(){return Object.create(null)}function A(e){e.forEach(te)}function ne(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ie(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function P(){return B(" ")}function Q(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function ue(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let G;function I(e){G=e}const w=[],S=[],C=[],U=[],fe=Promise.resolve();let z=!1;function ce(){z||(z=!0,fe.then(oe))}function D(e){C.push(e)}const K=new Set;let k=0;function oe(){if(k!==0)return;const e=G;do{try{for(;k<w.length;){const t=w[k];k++,I(t),ae(t.$$)}}catch(t){throw w.length=0,k=0,t}for(I(null),w.length=0,k=0;S.length;)S.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];K.has(n)||(K.add(n),n())}C.length=0}while(w.length);for(;U.length;)U.pop()();z=!1,K.clear(),I(e)}function ae(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const L=new Set;let b;function de(){b={r:0,c:[],p:b}}function he(){b.r||A(b.c),b=b.p}function q(e,t){e&&e.i&&(L.delete(e),e.i(t))}function v(e,t,n,o){if(e&&e.o){if(L.has(e))return;L.add(e),b.c.push(()=>{L.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function se(e){e&&e.c()}function J(e,t,n,o){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),o||D(()=>{const f=e.$$.on_mount.map(te).filter(ne);e.$$.on_destroy?e.$$.on_destroy.push(...f):A(f),e.$$.on_mount=[]}),c.forEach(D)}function M(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(w.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,o,r,c,f,d=[-1]){const s=G;I(e);const i=e.$$={fragment:null,ctx:[],props:c,update:m,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:H(),dirty:d,skip_bound:!1,root:t.target||s.$$.root};f&&f(i.root);let u=!1;if(i.ctx=n?n(e,t.props||{},(l,a,...y)=>{const h=y.length?y[0]:a;return i.ctx&&r(i.ctx[l],i.ctx[l]=h)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](h),u&&pe(e,l)),a}):[],i.update(),u=!0,A(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const l=le(t.target);i.fragment&&i.fragment.l(l),l.forEach($)}else i.fragment&&i.fragment.c();t.intro&&q(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),oe()}I(s)}class T{$destroy(){M(this,1),this.$destroy=m}$on(t,n){if(!ne(n))return m;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const O=[];function me(e,t=m){let n;const o=new Set;function r(d){if(j(e,d)&&(e=d,n)){const s=!O.length;for(const i of o)i[1](),O.push(i,e);if(s){for(let i=0;i<O.length;i+=2)O[i][0](O[i+1]);O.length=0}}}function c(d){r(d(e))}function f(d,s=m){const i=[d,s];return o.add(i),o.size===1&&(n=t(r)||m),d(e),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:r,update:c,subscribe:f}}const N=me([]);function V(e,t,n){const o=e.slice();return o[12]=t[n],o[13]=t,o[14]=n,o}function W(e){let t,n,o,r=e[14],c,f=e[12]+"",d,s;const i=()=>e[9](n,r),u=()=>e[9](null,r);return{c(){t=_("label"),n=_("input"),c=P(),d=B(f),s=P(),p(n,"class","radio"),n.checked=o=e[12]===e[3],p(n,"id","question"+e[4]+"_"+e[12]),p(n,"name","question"+e[4]),p(n,"type","radio"),n.value=e[12],p(t,"class","cursor-pointer flex items-center gap-x-3")},m(l,a){E(l,t,a),g(t,n),i(),g(t,c),g(t,d),g(t,s)},p(l,a){e=l,a&8&&o!==(o=e[12]===e[3])&&(n.checked=o),r!==e[14]&&(u(),r=e[14],i())},d(l){l&&$(t),u()}}}function ge(e){let t,n,o,r,c,f,d=e[5],s=[];for(let i=0;i<d.length;i+=1)s[i]=W(V(e,d,i));return{c(){t=_("fieldset"),n=_("label"),n.textContent=`Question ${e[4]}`,o=P(),r=_("div");for(let i=0;i<s.length;i+=1)s[i].c();p(n,"class","fieldset-legend"),p(r,"class","flex flex-wrap gap-y-4 gap-x-10"),p(t,"tabindex","0"),p(t,"class","fieldset"),p(t,"id","question"+e[4])},m(i,u){E(i,t,u),g(t,n),g(t,o),g(t,r);for(let l=0;l<s.length;l+=1)s[l].m(r,null);e[10](t),c||(f=[Q(t,"keypress",e[6]),Q(t,"change",e[7])],c=!0)},p(i,[u]){if(u&60){d=i[5];let l;for(l=0;l<d.length;l+=1){const a=V(i,d,l);s[l]?s[l].p(a,u):(s[l]=W(a),s[l].c(),s[l].m(r,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=d.length}},i:m,o:m,d(i){i&&$(t),re(s,i),e[10](null),c=!1,A(f)}}}const X="ABCDEFGHIJ";function _e(e,t,n){let{questionIndex:o}=t,{numberOfOptions:r}=t;const c=o+1,f=X.slice(0,r),d=X.slice(0,r).split(""),s=[];let i="A";const u=h=>{const x=h.key.toUpperCase();f.includes(x)&&(n(3,i=x),s[f.indexOf(x)].focus())},l=h=>{};function a(h,x){S[h?"unshift":"push"](()=>{s[x]=h,n(2,s)})}function y(h){S[h?"unshift":"push"](()=>{N[o]=h,n(1,N)})}return e.$$set=h=>{"questionIndex"in h&&n(0,o=h.questionIndex),"numberOfOptions"in h&&n(8,r=h.numberOfOptions)},[o,N,s,i,c,d,u,l,r,a,y]}class ye extends T{constructor(t){super(),R(this,t,_e,ge,j,{questionIndex:0,numberOfOptions:8})}}function Y(e,t,n){const o=e.slice();return o[3]=t[n],o[5]=n,o}function Z(e){let t,n,o;return{c(){t=_("div"),n=B(`Jump to Question\r
    `),o=B(e[0]),p(t,"class","alert"),p(t,"role","alert")},m(r,c){E(r,t,c),g(t,n),g(t,o)},p(r,c){c&1&&ue(o,r[0])},d(r){r&&$(t)}}}function ee(e){let t,n;return t=new ye({props:{questionIndex:e[5],numberOfOptions:$e}}),{c(){se(t.$$.fragment)},m(o,r){J(t,o,r),n=!0},p:m,i(o){n||(q(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){M(t,o)}}}function be(e){let t,n,o,r,c,f=e[0]&&Z(e),d=e[1],s=[];for(let u=0;u<d.length;u+=1)s[u]=ee(Y(e,d,u));const i=u=>v(s[u],1,1,()=>{s[u]=null});return{c(){f&&f.c(),t=P(),n=_("section");for(let u=0;u<s.length;u+=1)s[u].c();p(n,"class","grid-cols-3 grid border-collapse")},m(u,l){f&&f.m(u,l),E(u,t,l),E(u,n,l);for(let a=0;a<s.length;a+=1)s[a].m(n,null);o=!0,r||(c=Q(n,"keydown",e[2]),r=!0)},p(u,[l]){if(u[0]?f?f.p(u,l):(f=Z(u),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null),l&0){d=u[1];let a;for(a=0;a<d.length;a+=1){const y=Y(u,d,a);s[a]?(s[a].p(y,l),q(s[a],1)):(s[a]=ee(y),s[a].c(),q(s[a],1),s[a].m(n,null))}for(de(),a=d.length;a<s.length;a+=1)i(a);he()}},i(u){if(!o){for(let l=0;l<d.length;l+=1)q(s[l]);o=!0}},o(u){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)v(s[l]);o=!1},d(u){f&&f.d(u),u&&$(t),u&&$(n),re(s,u),r=!1,c()}}}let $e=6,F=20;function ke(e,t,n){const o=Array(F);let r="";return[r,o,f=>{/[0-9]/.test(f.key)?n(0,r=r.concat(f.key)):/Delete|Escape/.test(f.key)?n(0,r=""):f.key==="Backspace"?n(0,r=r.slice(0,-1)):f.key==="Enter"&&(console.log(N),parseInt(r)>F?n(0,r=F.toString()):N[parseInt(r)-1].focus())}]}class Oe extends T{constructor(t){super(),R(this,t,ke,be,j,{})}}function we(e){let t,n,o;return n=new Oe({}),{c(){t=_("main"),se(n.$$.fragment),p(t,"class","h-full")},m(r,c){E(r,t,c),J(n,t,null),o=!0},p:m,i(r){o||(q(n.$$.fragment,r),o=!0)},o(r){v(n.$$.fragment,r),o=!1},d(r){r&&$(t),M(n)}}}class qe extends T{constructor(t){super(),R(this,t,null,we,j,{})}}new qe({target:document.getElementById("app")});
