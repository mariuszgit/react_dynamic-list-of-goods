(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(3),c=o.n(e),r=o(4),i=o(1),a=o.n(i),u=(o(9),o(0)),s=a.a.memo((function(t){var n=t.goods;return Object(u.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1],c=Object(i.useCallback)((function(){l().then((function(t){return e(t)})).catch((function(t){return console.log("Something went wrong ".concat(t))}))}),[o]),a=Object(i.useCallback)((function(){l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then(e).catch((function(t){return console.log("Something went wrong ".concat(t))}))}),[o]),d=Object(i.useCallback)((function(){l().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(e).catch((function(t){return console.log("Something went wrong ".concat(t))}))}),[o]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:c,children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:a,children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:d,children:"Load red goods"}),Object(u.jsx)(s,{goods:o})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.235f1121.chunk.js.map