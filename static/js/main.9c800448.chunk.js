(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{246:function(e,t,c){},253:function(e,t,c){"use strict";c.r(t);var n=c(7),i=c(0),s=c(27),a=c.n(s),r=c(262),o=c(54),l=c(36),d=c(78),j=c(79),h=c(258),b=c(256),u=c(130),O=c(261),x=c(260),m=function(e){var t=e.item,c=e.onCheck,i=e.onRemove;return Object(n.jsxs)("li",{className:"todo-item",children:[Object(n.jsxs)(O.a,{checked:t.checked,onChange:function(){c(t.id)},style:{textDecorationLine:t.checked?"line-through":"none",color:"blue",textDecorationColor:t.checked?"color":"red"},children:[t.name,Object(n.jsx)("p",{children:t.description})]}),Object(n.jsx)(u.a,{type:"danger",onClick:function(){i(t.id)},children:Object(n.jsx)(x.a,{})})]})},f=c(257),p=c(259),k=f.a.Item,g=function(e){var t=e.onSubmit;return Object(n.jsxs)(f.a,{className:"todo-form",layout:"horizontal",onFinish:function(e){t(e.name,e.description)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(k,{name:"name",rules:[{required:!0,message:"Please input title!"}],label:"Title",children:Object(n.jsx)(p.a,{pattern:"^.+\\[A-Z][a-zA-Z0-9]{3,}",title:"3 characters minimum, must start with capital letter"})}),Object(n.jsx)(k,{name:"description",label:"Description",children:Object(n.jsx)(p.a,{pattern:"^.+\\[a-zA-Z0-9]{3,}",description:"3 characters minimum"})}),Object(n.jsx)(k,{children:Object(n.jsx)(u.a,{htmlType:"submit",children:"Add"})})]})},v=function(){var e=Object(i.useState)([{id:1,name:"todo 1",description:" des 1",checked:!1},{id:2,name:"todo 2",description:" des 2",checked:!1}]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(10),r=Object(j.a)(a,2),O=r[0],x=r[1],f=Object(i.useState)(0),p=Object(j.a)(f,2),k=p[0],v=p[1],y=function(e){var t=c.findIndex((function(t){return t.id===e})),n=c[t];n.checked=!n.checked,s(Object(d.a)(c)),C()},C=function(){var e=c.filter((function(e){return!1===e.checked}));v(e.length)},T=function(e){var t=c.findIndex((function(t){return t.id===e}));c.splice(t,1),s(Object(d.a)(c)),C()};return Object(n.jsxs)(h.a,{title:"My Todo List",children:[Object(n.jsx)(g,{onSubmit:function(e,t){var n=c.filter((function(e){return!1===e.checked}));v(n.length+1);var i={id:O,name:e,description:t,checked:!1};s([].concat(Object(d.a)(c),[i])),x(O+1)}}),Object(n.jsx)(b.a,{}),function(e){return e.length?Object(n.jsx)("ul",{className:"todo-list",children:e.map((function(e){return Object(n.jsx)(m,{item:e,onCheck:y,onRemove:T})}))}):Object(n.jsx)("ul",{className:"todo-list",children:Object(n.jsx)("li",{className:"todo-item",children:"Are You Ready To Start A Todo List?"})})}(c),Object(n.jsx)(b.a,{}),Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{span:"12",children:Object(n.jsx)(u.a,{type:"primary",danger:!0,onClick:function(){if(c.length>0){var e=c.filter((function(e){return!1===e.checked}));s(e),C()}},children:"Remove All Checked"})})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{span:"12",children:Object(n.jsxs)("ul",{class:"ant-list-items",children:[Object(n.jsxs)("li",{class:"ant-list-item",children:["Total UnChecked Todos: ",Object(n.jsx)("strong",{children:k})]}),Object(n.jsxs)("li",{class:"ant-list-item",children:["Total Todos: ",Object(n.jsx)("strong",{children:c.length})]})]})})})]})},y=(c(245),c(246),r.a.Header),C=r.a.Footer,T=r.a.Content,A=function(){return Object(n.jsxs)(r.a,{children:[Object(n.jsx)(y,{}),Object(n.jsx)(T,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{span:12,offset:6,children:Object(n.jsx)(v,{})})})}),Object(n.jsx)(C,{})]})};a.a.render(Object(n.jsx)(A,{}),document.getElementById("root"))}},[[253,1,2]]]);
//# sourceMappingURL=main.9c800448.chunk.js.map