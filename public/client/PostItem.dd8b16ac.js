import{S as s,i as t,s as a,b as e,t as r,c,f as i,g as o,h as l,d as h,j as p,k as f,a as n,l as E,m as d,n as m}from"./client.e1e5b9a2.js";function v(s){let t,a,v,u,b,k,A,P,j,x,C,H,I,R,S=s[0].title+"",T=s[0].date+"",$=s[0].description+"";return{c(){t=e("article"),a=e("header"),v=e("a"),u=e("h2"),b=r(S),P=c(),j=e("p"),x=r(T),C=c(),H=e("section"),I=e("p"),R=r($),this.h()},l(s){t=i(s,"ARTICLE",{class:!0});var e=o(t);a=i(e,"HEADER",{class:!0});var r=o(a);v=i(r,"A",{href:!0,title:!0});var c=o(v);u=i(c,"H2",{class:!0});var f=o(u);b=l(f,S),f.forEach(h),c.forEach(h),P=p(r),j=i(r,"P",{class:!0});var n=o(j);x=l(n,T),n.forEach(h),r.forEach(h),C=p(e),H=i(e,"SECTION",{class:!0});var E=o(H);I=i(E,"P",{});var d=o(I);R=l(d,$),d.forEach(h),E.forEach(h),e.forEach(h),this.h()},h(){f(u,"class","post-item-title svelte-kc092t"),f(v,"href",k=s[0].path),f(v,"title",A=s[0].title),f(j,"class","post-item-meta svelte-kc092t"),f(a,"class","post-item-header"),f(H,"class","post-item-body"),f(t,"class","post-item")},m(s,e){n(s,t,e),E(t,a),E(a,v),E(v,u),E(u,b),E(a,P),E(a,j),E(j,x),E(t,C),E(t,H),E(H,I),E(I,R)},p(s,[t]){1&t&&S!==(S=s[0].title+"")&&d(b,S),1&t&&k!==(k=s[0].path)&&f(v,"href",k),1&t&&A!==(A=s[0].title)&&f(v,"title",A),1&t&&T!==(T=s[0].date+"")&&d(x,T),1&t&&$!==($=s[0].description+"")&&d(R,$)},i:m,o:m,d(s){s&&h(t)}}}function u(s,t,a){let{post:e}=t;return s.$$set=s=>{"post"in s&&a(0,e=s.post)},[e]}class b extends s{constructor(s){super(),t(this,s,u,v,a,{post:0})}}export{b as P};
