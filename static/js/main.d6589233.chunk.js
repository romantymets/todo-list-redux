(this["webpackJsonptodo-list-redux"]=this["webpackJsonptodo-list-redux"]||[]).push([[0],{17:function(e,t,n){e.exports={doneTodo:"List_doneTodo__2TbJg",listItem:"List_listItem__2LIIa",containerList:"List_containerList__1D-vT",checkboxContainer:"List_checkboxContainer__1MgP0",button:"List_button__3dycr",header:"List_header__1Ribu",titleBody:"List_titleBody__2w7tx",titleText:"List_titleText__1hq8s","card-body":"List_card-body__1Y4I-"}},21:function(e,t,n){e.exports={todoContainer:"TodoListConteiner_todoContainer__wdeMS",droppableContainer:"TodoListConteiner_droppableContainer__2HGtg",dropContainer:"TodoListConteiner_dropContainer__1Ouui",formContainer:"TodoListConteiner_formContainer__3J7Rd",buttonSubmit:"TodoListConteiner_buttonSubmit__2F13j",buttonLoadMore:"TodoListConteiner_buttonLoadMore__19r8b",list:"TodoListConteiner_list__3LWOZ",button:"TodoListConteiner_button__1ljHT"}},45:function(e,t,n){e.exports={todoContainer:"FormList_todoContainer__2keaY",formContainer:"FormList_formContainer__2Mxya",buttonSubmit:"FormList_buttonSubmit__1YlDG",buttonLoadMore:"FormList_buttonLoadMore__1bn-G"}},46:function(e,t,n){e.exports={formContainer:"FormCard_formContainer__2CjnC"}},56:function(e,t,n){},63:function(e,t,n){},67:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),o=n.n(s),i=(n(56),n(7)),r=n(5),l=n(43),d=n(44),b="changeTitle",j=n(8),u=n(12),m=n(18),O=n(4),p="LIST/",x="TODO/",h={},f="".concat(p,"ADD_NEWLIST"),v="".concat(p,"DELETE_LIST"),N="".concat(x,"ADD_TODO"),g="".concat(x,"DELETE_TODO"),_="".concat(x,"CHECK_TODO"),I="".concat(x,"ONDRAG_END"),C="".concat(x,"TODOITEM_CHANGE"),y="changeTodoTitle",T={},L="".concat("TOKEN/","TAKE_TOKEN"),k={title:"",listItems:h,titleTodo:"",token:T},E=Object(r.combineReducers)({title:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.title;default:return e}},listItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),t.list);case v:var n=delete e[t.id];return Object(O.a)(Object(O.a)({},e),n);case N:var a=t.todo,c=t.itemId,s=e[c],o=Object(O.a)(Object(O.a)({},s),{},{todos:[].concat(Object(m.a)(s.todos),[a])});return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},c,o));case I:var i=t.result,r=t.colums,l=i.source,d=i.destination;if(l.droppableId!==d.droppableId){var b,p=r[l.droppableId],x=r[d.droppableId],y=Object(m.a)(p.todos),T=Object(m.a)(x.todos),L=y.splice(l.index,1),k=Object(j.a)(L,1),E=k[0];T.splice(d.index,0,E);var S=Object(O.a)(Object(O.a)({},r),{},(b={},Object(u.a)(b,l.droppableId,Object(O.a)(Object(O.a)({},p),{},{todos:y})),Object(u.a)(b,d.droppableId,Object(O.a)(Object(O.a)({},x),{},{todos:T})),b));return S}var w=r[l.droppableId],D=Object(m.a)(w.todos),F=D.splice(l.index,1),P=Object(j.a)(F,1),M=P[0];D.splice(d.index,0,M);var q=Object(O.a)(Object(O.a)({},r),{},Object(u.a)({},l.droppableId,Object(O.a)(Object(O.a)({},w),{},{todos:D})));return q;case g:var A=t.todoId,H=t.itemId,R=e[H],B=R.todos.filter((function(e){return e.id!==A})),G=Object(O.a)(Object(O.a)({},R),{},{todos:Object(m.a)(B)});return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},H,G));case _:var J=t.todoId,K=t.itemId,W=t.completed,Y=e[K],U=Y.todos.find((function(e){return e.id===J}));U.completed=W;var X=Y.todos.map((function(e){return e.id===J?U:e})),V=Object(O.a)(Object(O.a)({},Y),{},{todos:Object(m.a)(X)});return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},K,V));case C:var Z=t.listId,z=t.todoId,Q=t.changedTitle;if(Z&&z&&Q){var $=e[Z],ee=$.todos.find((function(e){return e.id===z}));ee.title=Q;var te=$.todos.map((function(e){return e.id===z?ee:e})),ne=Object(O.a)(Object(O.a)({},$),{},{todos:Object(m.a)(te)});return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},Z,ne))}return e;default:return e}},titleTodo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var n=t.itemId,a=t.title;return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},n,a));default:return e}},tokenState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:var n=Object(O.a)({},t.token);return n;default:return e}}}),S=[d.a],w=r.compose.apply(void 0,[r.applyMiddleware.apply(void 0,S)].concat([])),D=Object(r.createStore)(E,k,Object(l.composeWithDevTools)(r.applyMiddleware.apply(void 0,S),w)),F=n(14),P=n(6),M=(n(61),n(90)),q=n(15),A=n.n(q),H=n(45),R=n.n(H),B=n(2);var G=Object(r.compose)(Object(i.b)((function(e){return{title:e.title,listItems:e.listItems}}),{changeTitle:function(e){return function(t){t({type:b,title:e})}},addNewList:function(e){return function(t){t({type:f,list:e})}}}))((function(e){var t=e.changeTitle,n=e.title,a=e.addNewList;return Object(B.jsx)("div",{className:A()("container",R.a.todoContainer),children:Object(B.jsx)("form",{className:"container",onSubmit:function(e){e.preventDefault(),a(Object(u.a)({},Object(M.a)(),{name:n,todos:[]})),t("")},children:Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter text",required:!0,onChange:function(e){var n=e.target.value;t(n)},value:n}),Object(B.jsx)("br",{}),Object(B.jsxs)("button",{type:"submit",className:"btn btn-primary",children:["+"," Add new card"]})]})})})})),J=(n(63),n(24)),K=n(17),W=n.n(K);var Y=Object(r.compose)(Object(i.b)((function(e){return{listItems:e.listItems}}),{deleteTodo:function(e,t){return function(n){n({type:g,todoId:e,itemId:t})}},checkTodo:function(e,t,n){return function(a){a({type:_,todoId:e,itemId:t,completed:n})}}}))((function(e){var t=e.itemId,n=e.listItems,c=e.deleteTodo,s=e.checkTodo,o=e.listName,i=(n[t]||{}).todos||[],r=Object(P.f)(),l=function(e,n){return function(){r.push("/todo-list-redux/todoitem/".concat(e.id),Object(O.a)(Object(O.a)({},e),{},{itemId:t,index:n,listName:o}))}},d=function(e,t){return function(n){var a=n.target.checked;s(e,t,a)}};return Object(B.jsx)("diV",{children:i.map((function(e,n){return Object(B.jsx)(J.b,{draggableId:e.id,index:n,children:function(s,o){return Object(a.createElement)("div",Object(O.a)(Object(O.a)(Object(O.a)({ref:s.innerRef},s.draggableProps),s.dragHandleProps),{},{className:A()("card",W.a.listItem),key:e.id}),Object(B.jsxs)("div",{className:A()("card-header",W.a.header),children:[n+1," Card",Object(B.jsxs)("span",{className:A()(W.a.button),onClick:function(n){n.stopPropagation(),c(e.id,t)},children:[" ","X"," "]})]}),Object(B.jsx)("div",{className:"card-body",children:Object(B.jsxs)("div",{className:A()("card-title",W.a.titleBody,"".concat(e.completed?W.a.doneTodo:null),W.a.titleText),children:[Object(B.jsx)("input",{type:"checkbox",checked:e.completed,className:W.a.checkboxContainer,onChange:d(e.id,t),onClick:function(e){e.stopPropagation()}}),Object(B.jsxs)("span",{onClick:l(e,n),className:"h6",children:[" ",e.title]})]})}))}},e.id)}))})})),U=n(46),X=n.n(U);var V=Object(r.compose)(Object(i.b)((function(e){return{titleTodo:e.titleTodo,listItems:e.listItems}}),{changeTodoTitle:function(e,t){return function(n){n({type:y,title:e,itemId:t})}},addTodo:function(e,t){return function(n){n({type:N,todo:e,itemId:t})}}}))((function(e){var t=e.changeTodoTitle,n=e.titleTodo,a=e.addTodo,c=(e.listItems,e.itemId),s=n[c]||"";return Object(B.jsx)("form",{className:"container",onSubmit:function(e){e.preventDefault(),a({title:n[c]||"",id:Object(M.a)(),completed:!1},c),t("",c)},children:Object(B.jsxs)("div",{className:A()("form-group",X.a.formContainer),children:[Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter text",required:!0,onChange:function(e){var n=e.target.value;t(n,c)},value:s||""}),Object(B.jsx)("button",{type:"submit",className:"btn btn-primary",children:"+"})]})})})),Z=n(21),z=n.n(Z),Q=n(65),$=Object(r.compose)(Object(i.b)((function(e){return{listItems:e.listItems}}),{deleteList:function(e){return function(t){t({type:v,id:e})}},dragEnd:function(e,t){return function(n){n({type:I,result:e,colums:t})}}}))((function(e){var t=e.listItems,n=void 0===t?{}:t,a=e.deleteList,c=e.dragEnd,s=n;return Q.isEmpty(s)?Object(B.jsx)("div",{}):Object(B.jsx)("div",{className:z.a.list,children:Object(B.jsx)(J.a,{onDragEnd:function(e){!function(e,t){e.destination&&c(e,t)}(e,s)},children:Object.entries(s).map((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(B.jsxs)("div",{className:A()("container",z.a.todoContainer),children:[Object(B.jsxs)("h4",{children:[" ",c.name," ",Object(B.jsxs)("span",{className:A()(z.a.button),onClick:function(){a(n)},children:[" ","x"," "]})," "]}),Object(B.jsxs)("div",{className:"formTodo",children:[" ",Object(B.jsx)(V,{itemId:n})," "]}),Object(B.jsx)("div",{className:z.a.dropContainer,children:Object(B.jsx)(J.c,{droppableId:n,children:function(e,t){return Object(B.jsxs)("div",Object(O.a)(Object(O.a)({className:z.a.droppableContainer,ref:e.innerRef},e.droppableProps),{},{style:{background:t.isDraggingOver?"lightblue":"#ebecf0"},children:[Object(B.jsx)(Y,{itemId:n,listName:c.name}),e.placeholder]}))}},n)})]},n)}))})})})),ee=Object(r.compose)(Object(i.b)((function(e){return{todos:e.todos,listItems:e.listItems}})))((function(){return Object(B.jsxs)("div",{className:"mycontainer",children:[Object(B.jsx)(G,{}),Object(B.jsx)($,{})]})})),te=function(){return Object(B.jsx)("div",{children:Object(B.jsx)("h2",{children:" About "})})},ne=n(33),ae=n(47),ce=n(49),se=n(48);n(67);var oe=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&s(!1)}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e]),Object(B.jsx)("div",{className:"container-fluid",children:Object(B.jsxs)("nav",{className:"navbar navbar-expand-md ",ref:e,children:[Object(B.jsxs)(F.b,{to:"/todo-list-redux",className:"navbar-brand",children:[" ","MyTODO"," ",Object(B.jsx)("span",{className:"image",children:Object(B.jsx)(ae.a,{})})," "]}),Object(B.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){s(!c)},children:Object(B.jsxs)("span",{className:"image",children:[" ",Object(B.jsx)(se.a,{})]})}),Object(B.jsx)("div",{className:"collapse navbar-collapse ".concat(c?"show":null),id:"navbarSupportedContent",children:Object(B.jsxs)("ul",{className:"navbar-nav ml-auto my",children:[Object(B.jsx)("li",{className:"nav-item active",children:Object(B.jsxs)(F.b,{to:"/todo-list-redux/todoitem/:id",className:"nav-link",children:[" ",Object(B.jsxs)("span",{className:"image",children:[" ",Object(B.jsx)(ce.a,{})]}),Object(B.jsx)("span",{className:"textColor",children:" TodoItem"}),Object(B.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsxs)(F.b,{to:"/todo-list-redux/about",className:"nav-link",children:[" ",Object(B.jsxs)("span",{className:"image",children:[Object(B.jsx)(ne.a,{})," "]})," ",Object(B.jsx)("span",{className:"textColor",children:" About"}),Object(B.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsxs)(F.b,{to:"/todo-list-redux/",className:"nav-link",children:[" ",Object(B.jsxs)("span",{className:"image",children:[Object(B.jsx)(ne.b,{})," "]})," ",Object(B.jsx)("span",{className:"textColor",children:" Home"})," ",Object(B.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsxs)(F.b,{to:"/todo-list-redux/signup",className:"nav-link",children:[Object(B.jsx)("span",{className:"textColor",children:" sign up"})," ",Object(B.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsxs)(F.b,{to:"/todo-list-redux/signin",className:"nav-link",children:[Object(B.jsx)("span",{className:"textColor",children:" Sign in"})," ",Object(B.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsxs)(F.b,{className:"nav-link",children:[Object(B.jsx)("span",{className:"textColor",children:" Log Out"})," ",Object(B.jsx)("span",{className:"sr-only",children:"(current)"})]})})]})})]})})};var ie=Object(r.compose)(Object(i.b)((function(e){return{listItems:e.listItems}}),{todoItemChange:function(e,t,n){return function(a){a({type:C,listId:e,todoId:t,changedTitle:n})}}}))((function(e){var t=e.todoItemChange,n=Object(P.f)(),c=Object(P.g)().state||{title:"",id:"",itemId:"",index:"",listName:""},s=c.title,o=c.id,i=c.itemId,r=c.index,l=c.listName,d=Object(a.useState)(s),b=Object(j.a)(d,2),u=b[0],m=b[1];return Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"card",children:[Object(B.jsx)("div",{className:"card-header",children:Object(B.jsxs)("h5",{children:[" List Name: ",l]})}),Object(B.jsxs)("div",{className:"card-body",children:[Object(B.jsxs)("h5",{className:"card-title",children:[" Change todo: ",r+1," "]}),Object(B.jsx)("div",{className:"form-floating",children:Object(B.jsx)("textarea",{className:"form-control",placeholder:"chose uor todo",onChange:function(e){var t=e.target.value;m(t)},children:u})}),Object(B.jsx)("br",{}),Object(B.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){t(i,o,u),n.goBack(),m("")},children:"Go back"})]})]})})})),re=n(50),le=n.n(re).a.create({baseURL:"/api/v1",timeout:5e3,headers:{"X-Custom-Header":"foobar"}}),de=function(e,t){return le.post(e,t)},be=(n(86),Object(r.compose)(Object(i.b)((function(e){return{initialToken:e.token}}),{takeToken:function(e){return function(t){t({type:L,token:e})}}}))((function(e){var t=e.takeToken,n=Object(a.useState)({}),c=Object(j.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),l=r[0],d=r[1],b=Object(a.useState)(""),u=Object(j.a)(b,2),m=u[0],p=u[1],x=Object(a.useState)(""),h=Object(j.a)(x,2),f=h[0],v=h[1],N=Object(a.useState)(""),g=Object(j.a)(N,2),_=g[0],I=g[1],C=Object(a.useState)(!1),y=Object(j.a)(C,2),T=y[0],L=y[1],k=Object(a.useState)(!1),E=Object(j.a)(k,2),S=E[0],w=E[1],D=Object(P.f)();return Object(B.jsx)("div",{children:S?Object(B.jsxs)("div",{children:[Object(B.jsx)("h5",{children:" registration successful "}),Object(B.jsx)("button",{className:"btn btn-primary",onClick:function(){w(!1),D.push("/signin")},children:"log in"})]}):Object(B.jsxs)("div",{children:[Object(B.jsx)("h5",{className:"register",children:"Registration"}),Object(B.jsx)("div",{className:"LogUpContainer",children:Object(B.jsxs)("form",{className:"FormContainer",onSubmit:function(e){e.preventDefault(),L(!0),de("/auth/signup",{email:l,password:m,firstName:f,lastName:_}).then((function(e){var n=e.data;o(Object(O.a)({},n)),L(!1),w(!0),t(s)})).catch((function(e){alert(e.message),L(!1)}))},children:[Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(B.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:" enter your email",value:l,onChange:function(e){var t=e.target.value;d(t)},required:!0})]}),Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(B.jsx)("input",{type:"password",className:"form-control",placeholder:" enter your password",value:m,onChange:function(e){var t=e.target.value;p(t)},required:!0})]}),Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{className:"form-label",children:"First Name"}),Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:" enter your First Name",value:f,onChange:function(e){var t=e.target.value;v(t)},required:!0})]}),Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{className:"form-label",children:"Last Name"}),Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:" enter your Last Name",value:_,onChange:function(e){var t=e.target.value;I(t)},required:!0})]}),Object(B.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:T,children:"Submit"})]})})]})})}))),je=(n(87),function(){return Object(B.jsx)("div",{className:"LogInContainer",children:Object(B.jsxs)("form",{className:"FormContainer",children:[Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(B.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:" enter your email",required:!0})]}),Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(B.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:" enter your password",required:!0})]}),Object(B.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})});n(88);var ue=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(i.a,{store:D,children:Object(B.jsxs)(F.a,{children:[Object(B.jsx)(oe,{}),Object(B.jsxs)(P.c,{children:[Object(B.jsx)(P.a,{path:"/todo-list-redux/about",children:Object(B.jsx)(te,{})}),Object(B.jsx)(P.a,{path:"/todo-list-redux/signin",children:Object(B.jsx)(je,{})}),Object(B.jsx)(P.a,{path:"/todo-list-redux/signup",children:Object(B.jsx)(be,{})}),Object(B.jsx)(P.a,{path:"/todo-list-redux/todoitem/:id",children:Object(B.jsx)(ie,{})}),Object(B.jsx)(P.a,{exact:!0,path:"/todo-list-redux",children:Object(B.jsx)(ee,{})})]})]})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(ue,{})}),document.getElementById("root")),me()}},[[89,1,2]]]);
//# sourceMappingURL=main.d6589233.chunk.js.map