(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],[,,,,,,function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"j",(function(){return _}));var a="https://",c="http://",r="swapi.dev/api/",s="people",i="/?page=",o=a+r+s+i,u=a+r+s,l=a+r+s+"/?search=",j=".jpg",_="https://starwars-visualguide.com/assets/img/characters"},,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var a=n(8),c=n.n(a),r=n(15),s=n(6),i=function(e){return e?e.replace(s.e,s.f):e},o=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Couldn`t fetch",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Couldn`t fetch",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},function(e,t,n){e.exports={container:"ChooseSide_container__9UQhp",item:"ChooseSide_item__3k3rY",item__header:"ChooseSide_item__header__2jRd-",item__img:"ChooseSide_item__img__2Xd0V",item__light:"ChooseSide_item__light__MUFbc",item__dark:"ChooseSide_item__dark__3PoTO",item__neitral:"ChooseSide_item__neitral__1CVIX"}},,,function(e,t,n){e.exports={list__container:"SearchPageInfo_list__container__2-pKy",list__item:"SearchPageInfo_list__item__HmNwC",person__photo:"SearchPageInfo_person__photo__3eD-h",person__name:"SearchPageInfo_person__name__2KHxM",person__comment:"SearchPageInfo_person__comment__1AnS7"}},,function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__-KHX_",list__container:"PersonInfo_list__container__2AVWC",list__item:"PersonInfo_list__item__2chUd",item__title:"PersonInfo_item__title__3Tg0n"}},function(e,t,n){e.exports={wrapper__input:"UiInput_wrapper__input__1jssc",input:"UiInput_input__1x1L_",clear:"UiInput_clear__SohdO",clear__disabled:"UiInput_clear__disabled__3m-yd"}},,,,function(e,t,n){e.exports={list__container:"PeopleList_list__container__1LnwO",list__item:"PeopleList_list__item__1AeEE",person__photo:"PeopleList_person__photo__aNqOM"}},function(e,t,n){e.exports={container:"PeopleNavigation_container__EpyYn",buttons:"PeopleNavigation_buttons__1oa92"}},function(e,t,n){e.exports={container:"PersonPhoto_container__355N7",photo:"PersonPhoto_photo__1ucRy",favourite:"PersonPhoto_favourite__2mjAq"}},function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__2pmFo",person__name:"PersonPage_person__name__2jrq9",container:"PersonPage_container__2zFan"}},function(e,t,n){e.exports={container:"Favourite_container__2-cSM",icon:"Favourite_icon__3Xbd0",counter:"Favourite_counter__3b0s8"}},function(e,t,n){e.exports={container:"Header_container__1OWE0",logo:"Header_logo__1VzFz",list__container:"Header_list__container__3zFhf"}},,,function(e,t,n){e.exports={text:"ErrorMessage_text__25Pq0",video:"ErrorMessage_video__3URFf"}},,function(e,t,n){e.exports={button:"UiButton_button__2XOx3",dark:"UiButton_dark__bHlCC",light:"UiButton_light__-bZkC"}},function(e,t,n){e.exports={img:"NotFoundPage_img__39bus",text:"NotFoundPage_text__19DBf"}},function(e,t,n){e.exports={loader:"UiLoading_loader__3LmBg",shadow:"UiLoading_shadow__r0QcL"}},function(e,t,n){e.exports={link:"PersonLinkBack_link__2ufSl",link__img:"PersonLinkBack_link__img__2DzDE"}},,,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){e.exports={comment:"FavouritesPage_comment__CC749"}},function(e,t,n){e.exports={input__search:"SearchPeage_input__search__852Ld"}},function(e,t,n){e.exports={wrapper:"App_wrapper__1JJ3g"}},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(24),s=n.n(r),i=n(13),o=n(19),u=n(45),l=n(46),j=n(14),_=n(26),d="ADD_PERSON_TO_FAVOURITE",p="REMOVE_PERSON_FROM_FAVOURITE",b=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),t.payload);case p:return Object(_.omit)(e,[t.payload]);default:return e}},h=Object(o.combineReducers)({favouriteReducer:m}),f=Object(o.createStore)(h,Object(u.composeWithDevTools)(Object(o.applyMiddleware)(l.a)));f.subscribe((function(){var e,t;e="store",t=f.getState().favouriteReducer,localStorage.setItem(e,JSON.stringify(t))}));var O=f,x=n(3),g=n(52),v=n(0),N=["children"],k="light",S="dark",P="neitral",w=c.a.createContext(),C=function(e){var t=e.children,n=Object(g.a)(e,N),c=Object(a.useState)(null),r=Object(x.a)(c,2),s=r[0],i=r[1];return Object(v.jsx)(w.Provider,Object(j.a)(Object(j.a)({value:{theme:s,change:function(e){i(e),function(e){var t=document.querySelector(":root");["header","bgimage"].forEach((function(n){t.style.setProperty("--theme-default-".concat(n),"var(--theme-".concat(e,"-").concat(n))}))}(e)}}},n),{},{children:t}))},F=function(){return Object(a.useContext)(w)},y=n(5),E=n(4),I=n(8),R=n.n(I),U=n(15),L=n(12),A=n.n(L),H=n(47),M=n.n(H),B=function(e){var t=e.src,n=e.classes,c=e.playbackRate,r=void 0===c?1:c,s=Object(a.useRef)(null);return Object(a.useEffect)((function(){s.current.playbackRate=r}),[]),Object(v.jsx)("video",{className:A()(M.a.video,n),playbackRate:r,loop:!0,autoPlay:!0,muted:!0,ref:s,children:Object(v.jsx)("source",{src:t})})},D=n.p+"static/media/han-solo.db435084.mp4",T=n(35),V=n.n(T),z=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{className:V.a.text,children:["The dark side of the force has won.",Object(v.jsx)("br",{}),"We cannot display data.",Object(v.jsx)("br",{}),"Come back when we fix everything"]}),Object(v.jsx)(B,{src:D,classes:V.a.video,playbackRate:1})]})},J=function(e){return function(t){var n=Object(a.useState)(!1),c=Object(x.a)(n,2),r=c[0],s=c[1];return Object(v.jsx)(v.Fragment,{children:r?Object(v.jsx)(z,{}):Object(v.jsx)(e,Object(j.a)({setErrorApi:s},t))})}},q=n(27),W=n.n(q),X=function(e){var t=e.people;return Object(v.jsx)("ul",{className:W.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(v.jsx)("li",{className:W.a.list__item,children:Object(v.jsxs)(y.b,{to:"/people/".concat(t),children:[Object(v.jsx)("img",{className:W.a.person__photo,src:a,alt:n}),Object(v.jsx)("p",{children:n})]})},t)}))})},G=(n(43),n(37)),K=n.n(G),Y=function(e){var t=e.text,n=e.onClick,a=e.disabled,c=e.theme,r=void 0===c?"dark":c;e.classes;return Object(v.jsx)("button",{onClick:n,disabled:a,className:A()(K.a.button,K.a[r]),children:t})},Q=n(28),Z=n.n(Q),$=function(e){var t=e.getResourse,n=e.prevPage,a=e.nextPage,c=e.counterPage;return Object(v.jsxs)("div",{className:Z.a.container,children:[Object(v.jsx)(y.b,{to:"/people/?page=".concat(c-1),className:Z.a.buttons,children:Object(v.jsx)(Y,{text:"Previous",onClick:function(){return t(n)},disabled:!n})}),Object(v.jsx)(y.b,{to:"/people/?page=".concat(c+1),className:Z.a.buttons,children:Object(v.jsx)(Y,{text:"Next",onClick:function(){return t(a)},disabled:!a})})]})},ee=n(16),te=n(6),ne=function(e){var t=e.lastIndexOf(te.g),n=e.slice(t+te.g.length,e.length);return Number(n)},ae=function(e){return function(e,t){return e.replace(te.f+te.i+t,"").replace(/\//g,"")}(e,te.h)},ce=function(e){return"".concat(te.j,"/").concat(e+te.d)},re=J((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),c=Object(x.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(1),o=Object(x.a)(i,2),u=o[0],l=o[1],j=Object(a.useState)(null),_=Object(x.a)(j,2),d=_[0],p=_[1],b=Object(a.useState)(null),m=Object(x.a)(b,2),h=m[0],f=m[1],O=new URLSearchParams(Object(E.g)().search).get("page"),g=function(){var e=Object(U.a)(R.a.mark((function e(n){var a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)(n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ae(n);return{id:a,name:t,img:ce(a)}})),s(c),p(Object(ee.a)(a.previous)),f(Object(ee.a)(a.next)),l(ne(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(te.a+O)}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)($,{getResourse:g,prevPage:d,nextPage:h,counterPage:u}),r&&Object(v.jsx)(X,{people:r})]})})),se=n.p+"static/media/light-side.eebc5217.jpg",ie=n.p+"static/media/dark-side.e0f8cab7.jpg",oe=n.p+"static/media/falcon.c1d0a8d1.jpg",ue=n(17),le=n.n(ue),je=function(e){var t=e.classes,n=e.theme,a=e.text,c=e.img,r=F();return Object(v.jsxs)("div",{className:A()(le.a.item,t),onClick:function(){return r.change(n)},children:[Object(v.jsx)("div",{className:le.a.item__header,children:a}),Object(v.jsx)("img",{className:le.a.item__img,src:c,alt:a})]})},_e=function(){var e=[{theme:k,text:"Light Side",img:se,classes:le.a.item__light},{theme:S,text:"Dark Side",img:ie,classes:le.a.item__dark},{theme:P,text:"I'm Han Solo",img:oe,classes:le.a.item__neitral}];return Object(v.jsx)("div",{className:le.a.container,children:e.map((function(e,t){var n=e.theme,a=e.text,c=e.img,r=e.classes;return Object(v.jsx)(je,{theme:n,text:a,img:c,classes:r},t)}))})},de=(n(65),function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Choose your side"}),Object(v.jsx)(_e,{})]})}),pe=n.p+"static/media/not-found.1062f5e4.jpg",be=n(38),me=n.n(be),he=function(){var e=Object(E.g)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{className:me.a.img,src:pe,alt:"not found"}),Object(v.jsxs)("p",{className:me.a.text,children:["No match for ",Object(v.jsx)("u",{children:e.pathname})]})]})},fe=n(22),Oe=n.n(fe),xe=function(e){var t=e.personInfo;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:Oe.a.wrapper,children:Object(v.jsx)("ul",{className:Oe.a.list__container,children:t.map((function(e){var t=e.title,n=e.data;return n&&Object(v.jsxs)("li",{className:Oe.a.list__item,children:[Object(v.jsx)("span",{className:Oe.a.item__title,children:t}),": ",n]},t)}))})})})},ge=n(25),ve=n.p+"static/media/favourite.1c84b31b.svg",Ne=n.p+"static/media/favourite-fill.138a6c2c.svg",ke=n(29),Se=n.n(ke),Pe=function(e){var t=e.personId,n=e.personPhoto,a=e.personName,c=e.personFavourite,r=e.setPersonFavourite,s=Object(i.b)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:Se.a.container,children:[Object(v.jsx)("img",{className:Se.a.photo,src:n,alt:a}),Object(v.jsx)("img",{src:c?Ne:ve,onClick:function(){var e;c?(s(function(e){return{type:p,payload:e}}(t)),r(!1)):(s((e=Object(ge.a)({},t,{name:a,img:n}),{type:d,payload:e})),r(!0))},className:Se.a.favourite,alt:"Add to favourite"})]})})},we=n.p+"static/media/loader-black.a65ae439.svg",Ce=n.p+"static/media/loader-white.1a1a2a78.svg",Fe=n.p+"static/media/loader-blue.77fd5012.svg",ye=n(39),Ee=n.n(ye),Ie=function(e){var t=e.theme,n=void 0===t?"white":t,c=e.isShadow,r=void 0===c||c,s=e.classes,i=Object(a.useState)(null),o=Object(x.a)(i,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){switch(n){default:l(we);break;case"white":l(Ce);break;case"blue":l(Fe)}}),[]),Object(v.jsx)("img",{className:A()(Ee.a.loader,r&&Ee.a.shadow,s),src:u,alt:"Loader"})},Re=n(30),Ue=n.n(Re),Le=n.p+"static/media/back.80fbc768.svg",Ae=n(40),He=n.n(Ae),Me=function(){var e=Object(E.f)();return Object(v.jsxs)("a",{href:"#",onClick:function(t){t.preventDefault(),e.goBack()},className:He.a.link,children:[Object(v.jsx)("img",{className:He.a.link__img,src:Le,alt:"Go back"}),Object(v.jsx)("span",{children:"Go back"})]})},Be=c.a.lazy((function(){return n.e(3).then(n.bind(null,69))})),De=J((function(e){var t=e.match,n=e.setErrorApi,c=Object(a.useState)(null),r=Object(x.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(null),l=Object(x.a)(u,2),j=l[0],_=l[1],d=Object(a.useState)(null),p=Object(x.a)(d,2),b=p[0],m=p[1],h=Object(a.useState)(null),f=Object(x.a)(h,2),O=f[0],g=f[1],N=Object(a.useState)(null),k=Object(x.a)(N,2),S=k[0],P=k[1],w=Object(a.useState)(!1),C=Object(x.a)(w,2),F=C[0],y=C[1],E=Object(i.c)((function(e){return e.favouriteReducer}));return Object(a.useEffect)((function(){Object(U.a)(R.a.mark((function e(){var a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params.id,e.next=3,Object(ee.b)("".concat(te.b,"/").concat(a,"/"));case 3:c=e.sent,E[a]?y(!0):y(!1),P(a),c?(o([{title:"Height",data:c.height},{title:"Mass",data:c.mass},{title:"Hair Color",data:c.hair_color},{title:"Skin Color",data:c.skin_color},{title:"Eye Color",data:c.eye_color},{title:"Birth Year",data:c.birth_year},{title:"Gender",data:c.gender}]),_(c.name),m(ce(a)),c.films.length&&g(c.films),n(!1)):n(!0);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Me,{}),Object(v.jsxs)("div",{className:Ue.a.wrapper,children:[Object(v.jsx)("span",{className:Ue.a.person__name,children:j}),Object(v.jsxs)("div",{className:Ue.a.container,children:[Object(v.jsx)(Pe,{personId:S,personPhoto:b,personName:j,personFavourite:F,setPersonFavourite:y}),s&&Object(v.jsx)(xe,{personInfo:s}),O&&Object(v.jsx)(a.Suspense,{fallback:Object(v.jsx)(Ie,{}),children:Object(v.jsx)(Be,{personFilms:O})})]})]})]})})),Te=n(49),Ve=n.n(Te),ze=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(i.c)((function(e){return e.favouriteReducer}));return Object(a.useEffect)((function(){var e=Object.entries(r);if(e.length){var t=e.map((function(e){return Object(j.a)({id:e[0]},e[1])}));c(t)}}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Favourites Page"}),n.length?Object(v.jsx)(X,{people:n}):Object(v.jsx)("h2",{className:Ve.a.comment,children:"No data"})]})},Je=n(20),qe=n.n(Je),We=function(e){var t=e.people;return Object(v.jsx)(v.Fragment,{children:t.length?Object(v.jsx)("ul",{className:qe.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(v.jsx)("li",{className:qe.a.list__item,children:Object(v.jsxs)(y.b,{to:"/people/".concat(t),children:[Object(v.jsx)("img",{className:qe.a.person__photo,src:a,alt:n}),Object(v.jsx)("p",{className:qe.a.person__name,children:n})]})},t)}))}):Object(v.jsx)("h2",{className:qe.a.person__comment,children:"No results"})})},Xe=n.p+"static/media/cancel.1d37b349.svg",Ge=n(23),Ke=n.n(Ge),Ye=function(e){var t=e.value,n=e.handleInputChange,a=e.placeholder,c=e.classes;return Object(v.jsxs)("div",{className:A()(Ke.a.wrapper__input,c),children:[Object(v.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:a,className:Ke.a.input}),Object(v.jsx)("img",{onClick:function(){return t&&n("")},src:Xe,className:A()(Ke.a.clear,!t&&Ke.a.clear__disabled),alt:"Clear"})]})},Qe=n(50),Ze=n.n(Qe),$e=J((function(e){var t=e.setErrorApi,n=Object(a.useState)(""),c=Object(x.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(x.a)(i,2),u=o[0],l=o[1],j=function(){var e=Object(U.a)(R.a.mark((function e(n){var a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)(te.c+n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ae(n);return{id:a,name:t,img:ce(a)}})),l(c),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){j("")}),[]);var d=Object(a.useCallback)(Object(_.debounce)((function(e){return j(e)}),300),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Search"}),Object(v.jsx)(Ye,{value:r,handleInputChange:function(e){s(e),d(e)},placeholder:"Input characters's name",classes:Ze.a.input__search}),Object(v.jsx)(We,{people:u})]})})),et=[{path:"/",exact:!0,component:de},{path:"/people",exact:!0,component:re},{path:"/people/:id",exact:!1,component:De},{path:"/not-found",exact:!0,component:he},{path:"/favourites",exact:!0,component:ze},{path:"/search",exact:!0,component:$e},{path:"/fail",exact:!0,component:z},{path:"*",exact:!1,component:he}],tt=n.p+"static/media/bookmark.ebd2a954.svg",nt=n(31),at=n.n(nt),ct=function(){var e=Object(a.useState)(),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(i.c)((function(e){return e.favouriteReducer}));return Object(a.useEffect)((function(){var e=Object.keys(r).length;c(e)})),Object(v.jsx)("div",{className:at.a.container,children:Object(v.jsxs)(y.b,{to:"/favourites",children:[Object(v.jsx)("span",{className:at.a.counter,children:n}),Object(v.jsx)("img",{className:at.a.icon,src:tt,alt:"Favourites"})]})})},rt=n.p+"static/media/droid.de165dd8.svg",st=n.p+"static/media/lightsaber.eb7d4cd6.svg",it=n.p+"static/media/space-station.7a027c6e.svg",ot=n(32),ut=n.n(ot),lt=function(){var e=Object(a.useState)(it),t=Object(x.a)(e,2),n=t[0],c=t[1],r=F();return Object(a.useEffect)((function(){switch(r.theme){case k:c(st);break;default:c(it);break;case P:c(rt)}}),[r]),Object(v.jsxs)("div",{className:ut.a.container,children:[Object(v.jsx)("img",{className:ut.a.logo,src:n,alt:"Star Wars"}),Object(v.jsxs)("ul",{className:ut.a.list__container,children:[Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/",exact:!0,children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/people/?page=1",children:"People"})}),Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/search",exact:!0,children:"Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/not-found",exact:!0,children:"Not Found"})}),Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/fail",exact:!0,children:"Fail"})})]}),Object(v.jsx)(ct,{})]})},jt=n(51),_t=n.n(jt),dt=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y.a,{children:Object(v.jsxs)("div",{className:_t.a.wrapper,children:[Object(v.jsx)(lt,{}),Object(v.jsx)(E.c,{children:et.map((function(e,t){return Object(v.jsx)(E.a,{path:e.path,exact:e.exact,component:e.component},t)}))})]})})})};n(66);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(i.a,{store:O,children:Object(v.jsx)(C,{children:Object(v.jsx)(dt,{})})})}),document.getElementById("root"))}],[[67,1,2]]]);
//# sourceMappingURL=main.9769018d.chunk.js.map