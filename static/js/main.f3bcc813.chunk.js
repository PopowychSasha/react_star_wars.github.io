(this["webpackJsonpreact-star-wars"]=this["webpackJsonpreact-star-wars"]||[]).push([[0],[,,,,,,,,,,,,function(A,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return s}));var n=t(6),r=t.n(n),a=t(11),c=function(){var A=Object(a.a)(r.a.mark((function A(e){var t;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,fetch(e);case 3:if((t=A.sent).ok){A.next=7;break}return console.error("Could not fetch.",t.status),A.abrupt("return",!1);case 7:return A.next=9,t.json();case 9:return A.abrupt("return",A.sent);case 12:return A.prev=12,A.t0=A.catch(0),console.error("Could not fetch.",A.t0.message),A.abrupt("return",!1);case 16:case"end":return A.stop()}}),A,null,[[0,12]])})));return function(e){return A.apply(this,arguments)}}(),s=function(){var A=Object(a.a)(r.a.mark((function A(e){var t;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.all(e.map((function(A){return fetch(A).then((function(A){return A.json()}))})));case 2:return t=A.sent,A.abrupt("return",t);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},,,,,function(A,e,t){A.exports={wrapper:"PersonInfo_wrapper__2p7RO",list__container:"PersonInfo_list__container__251VZ",list__item:"PersonInfo_list__item__2bpwv",item__title:"PersonInfo_item__title__2mWMs"}},,,,function(A,e,t){A.exports={list__container:"PeopleList_list__container__fDp5W",list__item:"PeopleList_list__item__T8BNl",person__photo:"PeopleList_person__photo__1X9Nl"}},function(A,e,t){A.exports={wrapper:"PersonPage_wrapper__EUt_k",person__name:"PersonPage_person__name__6_DAZ",container:"PersonPage_container__CuFaT"}},function(A,e,t){A.exports={wrapper:"FavoritePageList_wrapper__3_Zfm",favoriteItem:"FavoritePageList_favoriteItem__2YKfh",favoriteHeader:"FavoritePageList_favoriteHeader__1AQCZ"}},,,,,function(A,e,t){A.exports={img:"NotFoundPage_img__38Bn7",text:"NotFoundPage_text__-Fzod"}},function(A,e,t){A.exports={container:"PersonPhoto_container__3hGnV",photo:"PersonPhoto_photo__2Wewc"}},function(A,e,t){A.exports={link:"PersonLinkBack_link__2XrH_",link__img:"PersonLinkBack_link__img__2qFoF"}},function(A,e,t){A.exports={wrapper:"SearchPageList_wrapper__3M5F1",searchItem:"SearchPageList_searchItem__2jsT0"}},function(A,e,t){A.exports={container:"Header_container__2_IYf",list__container:"Header_list__container__19feH"}},,,function(A,e,t){A.exports={wrapper:"App_wrapper__1OpIw"}},,function(A,e,t){A.exports={text:"ErrorMessage_text__1y5dj"}},function(A,e,t){A.exports={navButtonWrapper:"PeopleNavigation_navButtonWrapper__1WrwX"}},,function(A,e,t){A.exports={lds_dual_ring:"UILoading_lds_dual_ring__1HACt"}},,,,,,,function(A,e,t){},,,,,,,,,function(A,e,t){A.exports={prevButton:"PeoplePage_prevButton__3-17l"}},function(A,e,t){},,function(A,e,t){},function(A,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(18),c=t.n(a),s=(t(47),t(20)),i=t(41),o=t(26),l="ADD_PERSON_TO_FAVORITE",u="REMOVE_PERSON_FROM_FAVORITE",j=[],g=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:for(var t=!1,n=0;n<A.length;n++)if(A[n].id==e.payload.id){t=!0;break}if(0==t)return[].concat(Object(i.a)(A),[e.payload]);case u:return A.filter((function(A){return A.id!=e.payload}));default:return A}},p=Object(s.a)({favoriteReducer:g}),f=Object(s.b)(p),w=t(35),d=t.n(w),b=t(6),C=t.n(b),B=t(11),O=t(5),h=t(12),m="https://",P="swapi.dev/api/",E="people",D=function(A){return function(A,e){var t=A.replace(m+P+e,"").replace(/\//g,"");return Number(t)}(A,E)},x=function(A){return"".concat("https://starwars-visualguide.com/assets/img/characters","/").concat(A+".jpg")},v=t(21),Q=t.n(v),I=t(4),J=t(0),k=function(A){var e=A.people;return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("ul",{className:Q.a.list__container,children:e.map((function(A){var e=A.id,t=A.name,n=A.img;return Object(J.jsx)("li",{className:Q.a.list__item,children:Object(J.jsxs)(I.b,{to:"/people/".concat(e),children:[Object(J.jsx)("img",{className:Q.a.person__photo,src:n,alt:t}),Object(J.jsx)("p",{children:t})]})},e)}))})})},M=t(42),_=t(37),S=t.n(_),y=function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("p",{className:S.a.text,children:["We cannot display data ",Object(J.jsx)("br",{}),"Come back when we fix everything ",Object(J.jsx)("br",{})]})})},N=function(A){return function(e){var t=Object(n.useState)(!1),r=Object(O.a)(t,2),a=r[0],c=r[1];return a?Object(J.jsx)(y,{}):Object(J.jsx)(A,Object(M.a)({setErrorApi:c},e))}},H=t(2),G=t(38),F=t.n(G),L=(t(55),function(A){var e=A.prevPage,t=A.setCounterPage,n=A.queryPage,r=A.counterPage,a=A.nextPage;return Object(J.jsxs)("div",{className:F.a.navButtonWrapper,children:[Object(J.jsx)("button",{className:"btn btn-light",disabled:null==e?"disabled":"",onClick:function(){null!=e&&t((function(A){return Number(A)-1}))},children:Object(J.jsx)(I.c,{to:function(){return"?page=".concat(1!=n?Number(r)-1:Number(r))},children:"previous"})}),Object(J.jsx)("button",{className:"btn btn-light",disabled:null==a?"disabled":"",onClick:function(){null!=a&&t((function(A){return Number(A)+1}))},children:Object(J.jsx)(I.c,{to:function(){return"?page=".concat(9!=n?Number(r)+1:Number(r))},children:"next"})})]})}),T=(t(56),N((function(A){var e=A.setErrorApi,t=Object(n.useState)(null),r=Object(O.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(null),i=Object(O.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(null),j=Object(O.a)(u,2),g=j[0],p=j[1],f=Object(n.useState)(),w=Object(O.a)(f,2),d=w[0],b=w[1],m=new URLSearchParams(Object(H.g)().search).get("page"),P=function(){var A=Object(B.a)(C.a.mark((function A(t){var n,r;return C.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Object(h.a)(t);case 2:(n=A.sent)?(r=n.results.map((function(A){var e=A.name,t=A.url,n=D(t);return{id:n,name:e,img:x(n)}})),c(r),l(n.previous),p(n.next),b(m),e(!1)):e(!0);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return Object(n.useEffect)((function(){P("https://swapi.dev/api/people/?page="+m)}),[m]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{className:"header__text",children:"Navigation"}),Object(J.jsx)(L,{prevPage:o,setCounterPage:b,queryPage:m,counterPage:d,nextPage:g}),a&&Object(J.jsx)(k,{people:a})]})}))),R=(t(57),function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("h1",{className:"header__text",children:"HomePage"})})}),U=t(28),X=t.n(U),Y=t.p+"static/media/not-found.02aa485d.png",z=function(){var A=Object(H.g)();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("img",{className:X.a.img,src:Y,alt:"Not Found"}),Object(J.jsxs)("p",{className:X.a.text,children:["No match for ",A.pathname]})]})},q=t(22),V=t.n(q),K=t(14),Z=t(29),W=t.n(Z),$=function(A){var e=A.personId,t=A.personPhoto,n=A.personName,r=Object(H.f)(),a=Object(K.b)();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:W.a.container,children:Object(J.jsx)("img",{className:W.a.photo,src:t,alt:n})}),Object(J.jsx)("button",{className:"btn btn-success",style:{height:"50px"},onClick:function(){a({type:l,payload:{id:e,name:n,img:t}}),r.push("/favorites")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438"}),Object(J.jsx)("button",{className:"btn btn-danger",style:{height:"50px"},onClick:function(){a(function(A){return{type:u,payload:A}}(e)),r.push("/favorites")},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})},AA=t(17),eA=t.n(AA),tA=function(A){var e=A.personInfo;return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("div",{className:eA.a.wrapper,children:Object(J.jsx)("ul",{className:eA.a.list__container,children:e.map((function(A){var e=A.title,t=A.data;return Object(J.jsxs)("li",{className:eA.a.list__item,children:[Object(J.jsxs)("span",{className:eA.a.item__title,children:[e,": "]}),t]},e)}))})})})},nA=t(30),rA=t.n(nA),aA=function(){var A=Object(H.f)();return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),console.log("handleGoBack"),A.goBack()},className:rA.a.link,children:[Object(J.jsx)("img",{className:rA.a.link__img,src:"data:image/png;base64,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",alt:"Go back"}),Object(J.jsx)("span",{children:"Go Back"})]})})},cA=t(40),sA=t.n(cA),iA=function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("div",{className:sA.a.lds_dual_ring})})},oA=r.a.lazy((function(){return t.e(3).then(t.bind(null,62))})),lA=N((function(A){var e=A.match,t=A.setErrorApi,r=Object(n.useState)(),a=Object(O.a)(r,2),c=a[0],s=a[1],i=Object(n.useState)(null),o=Object(O.a)(i,2),l=o[0],u=o[1],j=Object(n.useState)(""),g=Object(O.a)(j,2),p=g[0],f=g[1],w=Object(n.useState)(null),d=Object(O.a)(w,2),b=d[0],m=d[1],P=Object(n.useState)(),E=Object(O.a)(P,2),D=E[0],v=E[1];return Object(n.useEffect)(Object(B.a)(C.a.mark((function A(){var n,r;return C.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n=e.params.id,A.next=3,Object(h.a)("https://swapi.dev/api/people/"+n);case 3:r=A.sent,s(n),r?(u([{title:"Height",data:r.height},{title:"Mass",data:r.height},{title:"Hair Color",data:r.hair_color},{title:"Skin Color",data:r.skin_color},{title:"Eye Color",data:r.eye_color},{title:"Birth Year",data:r.birth_year},{title:"Gender",data:r.gender}]),f(r.name),m(x(n)),r.films.length&&v(r.films),t(!1)):t(!0);case 6:case"end":return A.stop()}}),A)}))),[]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(aA,{}),Object(J.jsxs)("div",{className:V.a.wrapper,children:[Object(J.jsx)("span",{className:V.a.person__name,children:p}),Object(J.jsxs)("div",{className:V.a.container,children:[Object(J.jsx)($,{personPhoto:b,personName:p,personId:c}),l&&Object(J.jsx)(tA,{personInfo:l}),D&&Object(J.jsx)(n.Suspense,{fallback:Object(J.jsx)(iA,{}),children:Object(J.jsx)(oA,{personFilms:D})})]})]})]})})),uA=t(23),jA=t.n(uA),gA=function(A){var e=A.storeDate;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{className:"header__text",children:"FavoritesPage"}),Object(J.jsx)("ul",{className:jA.a.wrapper,children:e&&e.map((function(A){var e=A.id,t=A.name,n=A.img;return Object(J.jsx)(I.b,{to:"/people/".concat(e),children:Object(J.jsxs)("li",{className:jA.a.favoriteItem,children:[Object(J.jsx)("p",{className:jA.a.favoriteHeader,children:t}),Object(J.jsx)("img",{src:n,width:"200px"})]})})}))})]})},pA=(t(59),function(){var A=Object(K.c)((function(A){return A.favoriteReducer}));return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(gA,{storeDate:A})})}),fA=t(31),wA=t.n(fA),dA=function(A){var e=A.people;return Object(J.jsx)(J.Fragment,{children:e&&Object(J.jsx)("ul",{className:wA.a.wrapper,children:e.map((function(A){var e=A.id,t=A.name;A.url;return Object(J.jsx)(I.b,{to:"/people/".concat(e),children:Object(J.jsxs)("li",{className:wA.a.searchItem,children:[Object(J.jsx)("p",{style:{color:"white",textAlign:"center",width:"150px"},children:t}),Object(J.jsx)("img",{src:"".concat(x(e)),width:"200px",style:{margin:"auto"}})]})})}))})})},bA=function(){var A=Object(n.useState)(""),e=Object(O.a)(A,2),t=e[0],r=e[1],a=Object(n.useState)(null),c=Object(O.a)(a,2),s=c[0],i=c[1],l=function(){var A=Object(B.a)(C.a.mark((function A(e){var t,n;return C.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Object(h.a)(e);case 2:t=A.sent,console.log(t),t&&(n=t.results.map((function(A){var e=A.name,t=A.url;return{id:D(t),name:e,url:t}})),i(n)),console.log(s);case 6:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),u=Object(n.useCallback)(Object(o.debounce)((function(A){return l(A)}),600),[]);return Object(n.useEffect)((function(){u("https://swapi.dev/api/people/?search="+t)}),[t]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{className:"header__text",children:"SearchPage"}),Object(J.jsx)("input",{className:"form-control form-control-lg",styles:{},type:"text",value:t,onChange:function(A){var e=A.target.value;r(A.target.value),u(e)},placeholder:"Input Character's name..."}),Object(J.jsx)(dA,{people:s})]})},CA=[{path:"/",exact:!0,component:R},{path:"/people",exact:!0,component:T},{path:"/people/:id",exact:!0,component:lA},{path:"/favorites",exact:!0,component:pA},{path:"/not-found",exact:!0,component:z},{path:"/fail",exact:!0,component:y},{path:"/search",exact:!0,component:bA},{path:"*",exact:!1,component:z}],BA=t(32),OA=t.n(BA),hA=t.p+"static/media/favorite.527b42d1.png",mA=function(){return Object(J.jsx)("div",{className:OA.a.container,children:Object(J.jsxs)("ul",{className:OA.a.list__container,children:[Object(J.jsx)("li",{children:Object(J.jsx)(I.c,{to:"/",exact:!0,children:"Home"})}),Object(J.jsx)("li",{children:Object(J.jsx)(I.c,{to:"/people/?page=1",children:"People"})}),Object(J.jsx)("li",{children:Object(J.jsx)(I.c,{to:"/search",children:"Seach"})}),Object(J.jsx)("li",{children:Object(J.jsx)(I.c,{to:"/not-found",exact:!0,children:"NotFound"})}),Object(J.jsx)("li",{children:Object(J.jsx)(I.c,{to:"/fail",exact:!0,children:"Fail"})}),Object(J.jsx)("li",{style:{marginLeft:"400px"},children:Object(J.jsx)(I.c,{to:"/favorites",children:Object(J.jsx)("img",{src:hA,width:"75px"})})})]})})},PA=function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(I.a,{children:Object(J.jsxs)("div",{className:d.a.wrapper,children:[Object(J.jsx)(mA,{}),Object(J.jsx)(H.c,{children:CA.map((function(A,e){var t=A.path,n=A.exact,r=A.component;return Object(J.jsx)(H.a,{path:t,exact:n,component:r},e)}))})]})})})};c.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(K.a,{store:f,children:Object(J.jsx)(PA,{})})}),document.getElementById("root"))}],[[60,1,2]]]);
//# sourceMappingURL=main.f3bcc813.chunk.js.map