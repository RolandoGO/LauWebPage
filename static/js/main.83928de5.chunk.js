(this["webpackJsonplau-web"]=this["webpackJsonplau-web"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(41),s=n.n(c),i=(n(83),n(108)),o=n(14),u=n(58);n(85),n(103),n(102);u.a.initializeApp({apiKey:"AIzaSyARV3BaAGWqQ0kcv9Tj86hNwT2zNwWzMXs",authDomain:"lauweb-9bff9.firebaseapp.com",databaseURL:"https://lauweb-9bff9-default-rtdb.firebaseio.com",projectId:"lauweb-9bff9",storageBucket:"lauweb-9bff9.appspot.com",messagingSenderId:"241757289225",appId:"1:241757289225:web:a98d49a9b60f4ee2c831d8"});var l=u.a.firestore(),j=u.a.storage(),b=u.a.auth(),p=n(6),d=Object(r.createContext)();function m(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){l.collection("pictures").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push({picture:e.data(),id:e.id})})),c(t)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(d.Provider,{value:a,children:e.children})})}function f(){var e=Object(r.useContext)(d),t=[];return e.length>0&&(t=e.slice(0,3).map((function(e){return e}))),Object(p.jsx)("div",{className:"home",children:Object(p.jsx)(i.a,{className:"myCarousel",children:t.map((function(e){return Object(p.jsx)(i.a.Item,{className:"carouselItem",interval:2e3,children:Object(p.jsx)("img",{src:e.picture.url,className:"myImg",alt:"..some image"})},e.id)}))})})}var h=n(0),O=n.n(h),x=n(2),g=n(21);function v(){function e(){return(e=Object(x.a)(O.a.mark((function e(t){var n,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.next=3,b.signInWithEmailAndPassword(n,r).then((function(e){a=!0})).catch((function(e){a=!1}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return n.apply(this,arguments)}function n(){return(n=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.signOut().then((function(){t=!0})).catch((function(e){t=!1}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var r=Object(g.g)();function a(){return(a=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:e.sent?r.replace("/home"):alert("no se puede salir");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{logInService:function(t){return e.apply(this,arguments)},handleLogOut:function(){return a.apply(this,arguments)},logInStatus:function(){return new Promise((function(e,t){b.onAuthStateChanged((function(n){n?e(!0):t(!1)}))}))}}}n(74);function w(){var e=Object(r.useContext)(d);function t(){return(t=Object(x.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.refFromURL(t).delete().then((function(e){return console.log("exitos")})).catch((function(e){return console.log(e)})),l.collection("pictures").doc(n).delete();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"row",children:e.map((function(e){return Object(p.jsxs)("div",{className:"col-6-md",style:{height:"350px",width:"300px",margin:"5px"},children:[Object(p.jsx)("button",{className:"btn btn-sm btn-warning ",onClick:function(){return function(e,n){return t.apply(this,arguments)}(e.picture.url,e.id)},children:"X"}),Object(p.jsx)("img",{className:"myImage",src:e.picture.url,alt:"picture from Lau"})]},e.id)}))})}function y(){var e,t=v().handleLogOut,n=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],b=Object(r.useState)(""),p=Object(o.a)(b,2),d=p[0],m=p[1];function f(){return(f=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(!0),n.forEach((function(e){var t=e.name,n=j.ref(t);n.put(e).on("state_change",(function(e){}),(function(e){return alert("upload error whit.. err: ".concat(e))}),Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!1),e.next=3,n.getDownloadURL();case 3:t=e.sent,l.collection("pictures").add({url:t});case 5:case"end":return e.stop()}}),e)}))))})),a([]);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{images:n,uploadSpiner:i,imageError:d,handleImage:function(e){m("");var t=e.target.files;if(t){if(t.length>=5)return m("no mas de 5 imagenes al mismo tiempo"),void a([]);var n=[];for(var r in t)typeof t[r]===typeof{}&&(t[r].id=r,n.push(t[r]));if(!n.find((function(e){if(!1===/[\.|\/](jpeg|jpg)$/i.test(e.type))return m("tipo de imagen inaceptable, tiene que ser jpg o jpeg"),a([]),!0}))){var c=n.filter((function(e){return/[\.|\/](jpeg|jpg)$/i.test(e.type)}));a(c)}}},uploadImage:function(e){return f.apply(this,arguments)}}}(),a=n.images,c=n.uploadSpiner,s=n.imageError,i=n.handleImage,u=n.uploadImage,b=!(a.length>0&&0===s.length&&!c);return e=c?Object(p.jsx)("div",{className:"spinner-border text-secondary",role:"status",style:{height:"80px",width:"80px"}}):Object(p.jsxs)("form",{onSubmit:function(e){return u(e)},className:"imageForm",children:[Object(p.jsx)("input",{type:"file",multiple:!0,onChange:function(e){return i(e)}}),Object(p.jsx)("button",{className:"btn btn-sm btn-primary m-2",disabled:b,type:"submit",children:"add photo"}),Object(p.jsx)("strong",{children:s})]}),Object(p.jsxs)("div",{className:"adminStyle",children:[Object(p.jsx)("button",{className:"btn btn-sm btn-primary m-2",onClick:t,children:"Log Out"}),e,Object(p.jsx)("br",{}),Object(p.jsx)(w,{})]})}var N=n(35),S=n(106),I=n(105),k=n(107);n(93);function L(){return Object(p.jsx)(S.a,{bg:"dark",className:"myNavbar",expand:"lg",variant:"dark",children:Object(p.jsxs)(I.a,{children:[Object(p.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(S.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(k.a,{className:"me-auto",children:[Object(p.jsx)(N.b,{className:"nav-link",to:"/LauWebPage",children:"Home"}),Object(p.jsx)(N.b,{className:"nav-link",to:"/pictures",children:"Pictures"}),Object(p.jsx)(N.b,{className:"nav-link",to:"/contact",children:"Contacts"})]})})]})})}n(96);function C(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsxs)("span",{children:["Autor: ",Object(p.jsx)("strong",{children:"Laura Grethe Ojeda"})]}),Object(p.jsxs)("div",{className:"linksContainer",children:[Object(p.jsx)(N.b,{className:"links",to:"/adminLogIn",children:"Admin logIn"}),Object(p.jsx)(N.b,{className:"links",to:"/admin",children:"Admin"})]})]})}var A=n(16),P=["component"];function E(e){var t=e.component,n=(Object(A.a)(e,P),v().logInStatus),a=Object(r.useState)(),c=Object(o.a)(a,2),s=c[0],i=c[1],u=function(){var e=Object(x.a)(O.a.mark((function e(){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().then((function(e){return e})).catch((function(e){return e}));case 2:r=e.sent,i(r?Object(p.jsx)(g.b,{render:function(){return Object(p.jsx)(t,{})}}):Object(p.jsx)(g.b,{render:function(){return Object(p.jsx)("h2",{children:"Not Admin log In"})}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(p.jsx)("div",{children:s})}var W=["component"];function F(e){var t=e.component,n=(Object(A.a)(e,W),v().logInStatus),a=Object(r.useState)(),c=Object(o.a)(a,2),s=c[0],i=c[1],u=function(){var e=Object(x.a)(O.a.mark((function e(){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().then((function(e){return e})).catch((function(e){return e}));case 2:r=e.sent,i(r?Object(p.jsx)(g.b,{render:function(){return Object(p.jsx)("h2",{children:"You Are all ready log in"})}}):Object(p.jsx)(g.b,{render:function(){return Object(p.jsx)(t,{})}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(p.jsx)("div",{children:s})}n(97);var z="ususario o contrase\xf1a incorrecta";function T(){var e=v().logInService,t=Object(g.g)(),n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),u=Object(o.a)(i,2),l=u[0],j=u[1],b=Object(r.useState)(""),d=Object(o.a)(b,2),m=d[0],f=d[1],h=Object(r.useState)(""),w=Object(o.a)(h,2),y=w[0],N=w[1],S=Object(r.useState)(""),I=Object(o.a)(S,2),k=I[0],L=I[1],C=Object(r.useState)(null),A=Object(o.a)(C,2),P=A[0],E=A[1],W=function(e){L("");var t=e.currentTarget.type,n=e.currentTarget.value;"password"===t?(j(n),/^[\w]{5,10}$/.test(n)?N(""):N("entre 5 y 10 caracteres alfanumericos")):(s(n),/^[\w]+@([a-zA-Z]+\.)[\w]+$/.test(n)?f(""):f("email debe contener solo caracteres alfanumericos, Ej: xxxxxxx@xxx.xx"))};function F(){return(F=Object(x.a)(O.a.mark((function n(r){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),E(!0),a={email:c,password:l},n.next=5,e(a);case 5:n.sent?t.replace("/admin"):(L(z),E(null));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var T=!(!m&&!y&&c.length>0&&l.length>0),R=P?Object(p.jsx)("div",{className:"spinner-border text-info",role:"status"}):Object(p.jsx)("button",{type:"submit",disabled:T,className:"btn btn-primary mt-2",children:"Log In"});return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){return function(e){return F.apply(this,arguments)}(e)},className:"logInForm",children:[Object(p.jsx)("h2",{children:"Admin LogIn Page"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(p.jsx)("input",{type:"email",value:c,onChange:function(e){return W(e)},className:"form-control",id:"email"}),m&&Object(p.jsx)("p",{className:"alert alert-danger",role:"alert",children:m})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(p.jsx)("input",{type:"password",value:l,onChange:function(e){return W(e)},className:"form-control",id:"pwd"}),y&&Object(p.jsx)("p",{className:"alert alert-danger",role:"alert",children:y})]}),R,k&&Object(p.jsx)("p",{children:k})]})})}n(98);function R(){var e=Object(r.useContext)(d);return Object(p.jsx)("div",{className:"row",children:e.map((function(e){return Object(p.jsx)("div",{className:"col-6-md",style:{height:"300px",width:"300px",margin:"5px"},children:Object(p.jsx)("img",{className:"myImage",src:e.picture.url,alt:"pictures from Lau"})},e.id)}))})}function $(){return Object(p.jsx)("div",{children:"Contactos"})}var B=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(L,{}),Object(p.jsx)("main",{className:"myContainer",children:Object(p.jsx)(m,{children:Object(p.jsxs)(g.d,{children:[Object(p.jsx)(g.b,{exact:!0,path:"/LauWebPage",component:f}),Object(p.jsx)(g.b,{exact:!0,path:"/LauWebPage/contact",component:$}),Object(p.jsx)(g.b,{exact:!0,path:"/LauWebPage/pictures",component:R}),Object(p.jsx)(F,{path:"/LauWebPage/adminLogin",component:T}),Object(p.jsx)(E,{path:"/LauWebPage/admin",component:y}),Object(p.jsx)(g.a,{to:"/LauWebPage"})]})})}),Object(p.jsx)(C,{})]})};n(99),n(100);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root"))},74:function(e,t,n){},83:function(e,t,n){},93:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.83928de5.chunk.js.map