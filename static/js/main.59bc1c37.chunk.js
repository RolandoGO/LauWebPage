(this["webpackJsonplau-web"]=this["webpackJsonplau-web"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(41),s=n.n(c),i=(n(83),n(108)),o=n(14),u=n(58);n(85),n(103),n(102);u.a.initializeApp({apiKey:"AIzaSyARV3BaAGWqQ0kcv9Tj86hNwT2zNwWzMXs",authDomain:"lauweb-9bff9.firebaseapp.com",databaseURL:"https://lauweb-9bff9-default-rtdb.firebaseio.com",projectId:"lauweb-9bff9",storageBucket:"lauweb-9bff9.appspot.com",messagingSenderId:"241757289225",appId:"1:241757289225:web:a98d49a9b60f4ee2c831d8"});var l=u.a.firestore(),j=u.a.storage(),b=u.a.auth(),d=n(6),p=Object(r.createContext)();function m(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){l.collection("pictures").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push({picture:e.data(),id:e.id})})),c(t)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p.Provider,{value:a,children:e.children})})}function f(){var e=Object(r.useContext)(p),t=[];return e.length>0&&(t=e.slice(0,3).map((function(e){return e}))),Object(d.jsxs)("div",{className:"home",children:[Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("h2",{children:"Description.."}),Object(d.jsx)("p",{children:"On this page you can see the work of the artist Laura GO represented in a set of drawings of different styles. It is her work exposed to your eyes."})]}),Object(d.jsx)(i.a,{className:"myCarousel",children:t.map((function(e){return Object(d.jsx)(i.a.Item,{className:"carouselItem",interval:2e3,children:Object(d.jsx)("img",{src:e.picture.url,className:"myImg",alt:"..some image"})},e.id)}))})]})}var h=n(0),O=n.n(h),x=n(2),g=n(21);function v(){function e(){return(e=Object(x.a)(O.a.mark((function e(t){var n,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.next=3,b.signInWithEmailAndPassword(n,r).then((function(e){a=!0})).catch((function(e){a=!1}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return n.apply(this,arguments)}function n(){return(n=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.signOut().then((function(){t=!0})).catch((function(e){t=!1}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var r=Object(g.g)();function a(){return(a=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:e.sent?r.replace("/home"):alert("no se puede salir");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{logInService:function(t){return e.apply(this,arguments)},handleLogOut:function(){return a.apply(this,arguments)},logInStatus:function(){return new Promise((function(e,t){b.onAuthStateChanged((function(n){n?e(!0):t(!1)}))}))}}}n(74);function w(){var e=Object(r.useContext)(p);function t(){return(t=Object(x.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.refFromURL(t).delete().then((function(e){return console.log("exitos")})).catch((function(e){return console.log(e)})),l.collection("pictures").doc(n).delete();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"row",children:e.map((function(e){return Object(d.jsxs)("div",{className:"col-6-md",style:{height:"350px",width:"300px",margin:"5px"},children:[Object(d.jsx)("button",{className:"btn btn-sm btn-warning ",onClick:function(){return function(e,n){return t.apply(this,arguments)}(e.picture.url,e.id)},children:"X"}),Object(d.jsx)("img",{className:"myImage",src:e.picture.url,alt:"picture from Lau"})]},e.id)}))})}function y(){var e,t=v().handleLogOut,n=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],b=Object(r.useState)(""),d=Object(o.a)(b,2),p=d[0],m=d[1];function f(){return(f=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(!0),n.forEach((function(e){var t=e.name,n=j.ref(t);n.put(e).on("state_change",(function(e){}),(function(e){return alert("upload error whit.. err: ".concat(e))}),Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!1),e.next=3,n.getDownloadURL();case 3:t=e.sent,l.collection("pictures").add({url:t});case 5:case"end":return e.stop()}}),e)}))))})),a([]);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{images:n,uploadSpiner:i,imageError:p,handleImage:function(e){m("");var t=e.target.files;if(t){if(t.length>=5)return m("no mas de 5 imagenes al mismo tiempo"),void a([]);var n=[];for(var r in t)typeof t[r]===typeof{}&&(t[r].id=r,n.push(t[r]));if(!n.find((function(e){if(!1===/[\.|\/](jpeg|jpg)$/i.test(e.type))return m("tipo de imagen inaceptable, tiene que ser jpg o jpeg"),a([]),!0}))){var c=n.filter((function(e){return/[\.|\/](jpeg|jpg)$/i.test(e.type)}));a(c)}}},uploadImage:function(e){return f.apply(this,arguments)}}}(),a=n.images,c=n.uploadSpiner,s=n.imageError,i=n.handleImage,u=n.uploadImage,b=!(a.length>0&&0===s.length&&!c);return e=c?Object(d.jsx)("div",{className:"spinner-border text-secondary",role:"status",style:{height:"80px",width:"80px"}}):Object(d.jsxs)("form",{onSubmit:function(e){return u(e)},className:"imageForm",children:[Object(d.jsx)("input",{type:"file",multiple:!0,onChange:function(e){return i(e)}}),Object(d.jsx)("button",{className:"btn btn-sm btn-primary m-2",disabled:b,type:"submit",children:"add photo"}),Object(d.jsx)("strong",{children:s})]}),Object(d.jsxs)("div",{className:"adminStyle",children:[Object(d.jsx)("button",{className:"btn btn-sm btn-primary m-2",onClick:t,children:"Log Out"}),e,Object(d.jsx)("br",{}),Object(d.jsx)(w,{})]})}var N=n(35),I=n(106),S=n(105),k=n(107);n(93);function C(){return Object(d.jsx)(I.a,{bg:"dark",className:"myNavbar",expand:"lg",variant:"dark",children:Object(d.jsxs)(S.a,{children:[Object(d.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(I.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(k.a,{className:"me-auto",children:[Object(d.jsx)(N.b,{className:"nav-link",to:"/",children:"Home"}),Object(d.jsx)(N.b,{className:"nav-link",to:"/pictures",children:"Pictures"}),Object(d.jsx)(N.b,{className:"nav-link",to:"/contact",children:"Contacts"})]})})]})})}n(96);function L(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("span",{children:["Autor: ",Object(d.jsx)("strong",{children:"Laura Grethe Ojeda"})]}),Object(d.jsxs)("div",{className:"linksContainer",children:[Object(d.jsx)(N.b,{className:"links",to:"/adminLogIn",children:"Admin logIn"}),Object(d.jsx)(N.b,{className:"links",to:"/admin",children:"Admin"})]})]})}var A=n(16),E=["component"];function P(e){var t=e.component,n=(Object(A.a)(e,E),v().logInStatus),a=Object(r.useState)(),c=Object(o.a)(a,2),s=c[0],i=c[1],u=function(){var e=Object(x.a)(O.a.mark((function e(){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().then((function(e){return e})).catch((function(e){return e}));case 2:r=e.sent,i(r?Object(d.jsx)(g.b,{render:function(){return Object(d.jsx)(t,{})}}):Object(d.jsx)(g.b,{render:function(){return Object(d.jsx)("h2",{children:"Not Admin log In"})}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(d.jsx)("div",{children:s})}var F=["component"];function z(e){var t=e.component,n=(Object(A.a)(e,F),v().logInStatus),a=Object(r.useState)(),c=Object(o.a)(a,2),s=c[0],i=c[1],u=function(){var e=Object(x.a)(O.a.mark((function e(){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().then((function(e){return e})).catch((function(e){return e}));case 2:r=e.sent,i(r?Object(d.jsx)(g.b,{render:function(){return Object(d.jsx)("h2",{children:"You Are all ready log in"})}}):Object(d.jsx)(g.b,{render:function(){return Object(d.jsx)(t,{})}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(d.jsx)("div",{children:s})}n(97);var T="ususario o contrase\xf1a incorrecta";function D(){var e=v().logInService,t=Object(g.g)(),n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),u=Object(o.a)(i,2),l=u[0],j=u[1],b=Object(r.useState)(""),p=Object(o.a)(b,2),m=p[0],f=p[1],h=Object(r.useState)(""),w=Object(o.a)(h,2),y=w[0],N=w[1],I=Object(r.useState)(""),S=Object(o.a)(I,2),k=S[0],C=S[1],L=Object(r.useState)(null),A=Object(o.a)(L,2),E=A[0],P=A[1],F=function(e){C("");var t=e.currentTarget.type,n=e.currentTarget.value;"password"===t?(j(n),/^[\w]{5,10}$/.test(n)?N(""):N("entre 5 y 10 caracteres alfanumericos")):(s(n),/^[\w]+@([a-zA-Z]+\.)[\w]+$/.test(n)?f(""):f("email debe contener solo caracteres alfanumericos, Ej: xxxxxxx@xxx.xx"))};function z(){return(z=Object(x.a)(O.a.mark((function n(r){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),P(!0),a={email:c,password:l},n.next=5,e(a);case 5:n.sent?t.replace("/admin"):(C(T),P(null));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var D=!(!m&&!y&&c.length>0&&l.length>0),R=E?Object(d.jsx)("div",{className:"spinner-border text-info",role:"status"}):Object(d.jsx)("button",{type:"submit",disabled:D,className:"btn btn-primary mt-2",children:"Log In"});return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){return function(e){return z.apply(this,arguments)}(e)},className:"logInForm",children:[Object(d.jsx)("h2",{children:"Admin LogIn Page"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(d.jsx)("input",{type:"email",value:c,onChange:function(e){return F(e)},className:"form-control",id:"email"}),m&&Object(d.jsx)("p",{className:"alert alert-danger",role:"alert",children:m})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(d.jsx)("input",{type:"password",value:l,onChange:function(e){return F(e)},className:"form-control",id:"pwd"}),y&&Object(d.jsx)("p",{className:"alert alert-danger",role:"alert",children:y})]}),R,k&&Object(d.jsx)("p",{children:k})]})})}n(98);function R(){var e=Object(r.useContext)(p);return Object(d.jsx)("div",{className:"row",children:e.map((function(e){return Object(d.jsx)("div",{className:"col-6-md",style:{height:"300px",width:"300px",margin:"5px"},children:Object(d.jsx)("img",{className:"myImage",src:e.picture.url,alt:"pictures from Lau"})},e.id)}))})}function W(){return Object(d.jsx)("div",{children:"Contactos"})}var $=function(){return Object(g.g)(),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C,{}),Object(d.jsx)("main",{className:"myContainer",children:Object(d.jsx)(m,{children:Object(d.jsxs)(g.d,{children:[Object(d.jsx)(g.b,{exact:!0,path:"/",component:f}),Object(d.jsx)(g.b,{exact:!0,path:"/contact",component:W}),Object(d.jsx)(g.b,{exact:!0,path:"/pictures",component:R}),Object(d.jsx)(z,{path:"/adminLogin",component:D}),Object(d.jsx)(P,{path:"/admin",component:y}),Object(d.jsx)(g.a,{to:"/"})]})})}),Object(d.jsx)(L,{})]})};n(99),n(100);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N.a,{basename:"/LauWebPage",children:Object(d.jsx)($,{})})}),document.getElementById("root"))},74:function(e,t,n){},83:function(e,t,n){},93:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.59bc1c37.chunk.js.map