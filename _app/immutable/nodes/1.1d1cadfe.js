import{S as y,i as b,s as k,k as i,l as p,m as _,h as l,p as u,b as h,L as c,E as g,q as d,r as m,n as f,D as v,u as E}from"../chunks/index.40f7ab64.js";import{p as w}from"../chunks/stores.0e95f282.js";function $(n){let e,a;return{c(){e=i("p"),a=d("Unknown error has occured"),this.h()},l(r){e=p(r,"P",{class:!0});var t=_(e);a=m(t,"Unknown error has occured"),t.forEach(l),this.h()},h(){f(e,"class","error svelte-119elp7")},m(r,t){h(r,e,t),v(e,a)},p:c,d(r){r&&l(e)}}}function q(n){let e,a=n[0].error.message+"",r;return{c(){e=i("p"),r=d(a),this.h()},l(t){e=p(t,"P",{class:!0});var s=_(e);r=m(s,a),s.forEach(l),this.h()},h(){f(e,"class","error svelte-119elp7")},m(t,s){h(t,e,s),v(e,r)},p(t,s){s&1&&a!==(a=t[0].error.message+"")&&E(r,a)},d(t){t&&l(e)}}}function x(n){let e;function a(s,o){return s[0].error?q:$}let r=a(n),t=r(n);return{c(){e=i("div"),t.c(),this.h()},l(s){e=p(s,"DIV",{style:!0});var o=_(e);t.l(o),o.forEach(l),this.h()},h(){u(e,"width","100%"),u(e,"margin","auto 10rem")},m(s,o){h(s,e,o),t.m(e,null)},p(s,[o]){r===(r=a(s))&&t?t.p(s,o):(t.d(1),t=r(s),t&&(t.c(),t.m(e,null)))},i:c,o:c,d(s){s&&l(e),t.d()}}}function D(n,e,a){let r;return g(n,w,t=>a(0,r=t)),[r]}class U extends y{constructor(e){super(),b(this,e,D,x,k,{})}}export{U as component};
