(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),i=n(25),o=n(7),l=n(132),u=n(131),j=n(58),p=Object(j.a)({palette:{type:"dark",primary:{main:"#f14443"},secondary:{main:"#f0f0f0"}},typography:{fontFamily:"Roboto, Bangers"}}),m=n(118),b=Object(m.a)((function(e){return{root:{flexGrow:1},appBar:{backgroundColor:e.palette.primary.main,height:80},link:{margin:"5px auto 0 auto"},logo:{height:70,filter:"drop-shadow(0px 0px 3px black)","&:hover":{transform:"scale(1.02)"}}}})),x=n(119),d=n(2);function f(){var e=b();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(x.a,{position:"fixed",className:e.appBar,children:Object(d.jsx)(i.b,{to:"/",className:e.link,children:Object(d.jsx)("img",{src:"/pokedex/assets/pokedex_logo.png",alt:"pokedex",className:e.logo})})})})}var h=n(11),O=n.n(h),v=n(23),g=n(18),k=n(16),y=Object(m.a)((function(e){return{root:{marginTop:130,flexGrow:1,margin:"0 10% 0 10%"},spinnerWrapper:{margin:"50px 0",display:"flex",justifyContent:"center"}}})),N=n(29),w=n.n(N),C=function(){var e=Object(g.a)(O.a.mark((function e(t,n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://pokeapi.co/api/v2/pokemon?offset=".concat(t,"&limit=").concat(n),e.abrupt("return",w.a.get(a).then((function(e){return e.data.results})).catch((function(e){return console.error(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.a.get(t).then((function(e){return e.data})).then((function(e){return{id:e.id,name:e.name,picture:e.sprites.other["official-artwork"].front_default,abilities:e.abilities,types:e.types,order:e.order,stats:e.stats,moves:e.moves,species:e.species.url}})).catch((function(e){return console.error(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,a,r,c,s,i,o,l,u,j;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,w()(t);case 4:return a=e.sent,r=a.data,c=r.evolution_chain,e.next=9,w()(c);case 9:s=e.sent,i=s.data.chain;case 11:return o=i.evolution_details[0],e.next=14,w()(i.species.url);case 14:return l=e.sent,u=l.data,e.next=18,S("https://pokeapi.co/api/v2/pokemon/".concat(u.id,"/"));case 18:j=e.sent,n.push({pokemon:j,minLevel:o?o.min_level:null}),i=i.evolves_to[0];case 21:if(i&&i.hasOwnProperty("evolves_to")){e.next=11;break}case 22:return e.abrupt("return",n);case 25:e.prev=25,e.t0=e.catch(1),console.error(e.t0);case 28:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}(),B=n(124),T=n(125),I=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",transition:"transform 0.15s ease-in-out","&:hover":{boxShadow:"0px 0px 10px 5px rgb(0, 0, 0, 0.3)",transform:"scale(1.05)"}},name:{textTransform:"capitalize",textAlign:"center",fontFamily:"'Bangers', cursive",fontSize:28},picture:{height:"100%",width:"100%"}}})),L=n(120),_=n(121),A=n(122),E=n(123);function M(e){var t=e.pokeData,n=I(),r=Object(o.f)(),c=Object(a.useState)(),s=Object(k.a)(c,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t.url).then((function(e){l(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(d.jsx)(L.a,{className:n.root,children:i&&Object(d.jsx)(_.a,{onClick:function(){return r.push("/pokemon/"+i.id)},children:Object(d.jsxs)(A.a,{children:[Object(d.jsx)("img",{src:i.picture,alt:i.name,className:n.picture}),Object(d.jsx)(E.a,{variant:"h6",className:n.name,children:i.name})]})})})}var W=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},pokeball:{maxHeight:80,animation:"$spin 2s linear infinite",filter:"drop-shadow(0px 0px 7px black)"},"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}}));function F(){var e=W();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)("img",{src:"/pokedex/assets/pokeball.png",alt:"pokeball",className:e.pokeball})})}var D=function(){var e=y(),t=Object(a.useState)(!1),n=Object(k.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(k.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(0),j=Object(k.a)(u,2),p=j[0],m=j[1];Object(a.useEffect)((function(){(function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),C(p,48).then((function(e){l((function(t){return[].concat(Object(v.a)(t),Object(v.a)(e))})),c(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(B.a,{container:!0,spacing:3,children:o&&o.map((function(e,t){return Object(d.jsx)(B.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(d.jsx)(M,{pokeData:e})},t)}))}),Object(d.jsx)("div",{className:e.spinnerWrapper,children:r?Object(d.jsx)(F,{}):Object(d.jsx)(T.a,{size:"large",variant:"contained",color:"primary",onClick:function(){c(!0),m(p+48)},children:"Load more"})})]})},P=n(21),G=Object(m.a)((function(e){return{card:Object(P.a)({margin:"130px 20%",padding:"20px 30px"},e.breakpoints.down("md"),{margin:"120px 5%"})}})),J=n(130),H=n(57),R=n.n(H),V=Object(m.a)((function(e){return{card:Object(P.a)({margin:"130px 20%",padding:"20px 30px"},e.breakpoints.down("md"),{margin:"120px 5%"}),title:{textTransform:"capitalize",textAlign:"center",fontFamily:"'Bangers', cursive",textShadow:"0px 0px 5px black"},subtitle:{textAlign:"center",fontFamily:"'Bangers', cursive",fontSize:30},text:{textAlign:"center",fontSize:16,textTransform:"capitalize"},picture:{display:"block",height:250,margin:"0 auto"},evolutionPicture:{height:100},tableCell:{textTransform:"capitalize",borderBottom:"none",fontSize:16},table:{maxWidth:250,margin:"0 auto"},containerMarginTop:{marginTop:30},movesListContainer:{overflowY:"scroll",height:300,maxWidth:400,margin:"0 auto"},movesList:{columnCount:2,columnWidth:"50%","& > *":{textTransform:"capitalize"}}}}));function Y(e){var t=e.pokemon,n=V();return Object(d.jsxs)(B.a,{item:!0,container:!0,justify:"center",alignItems:"center",children:[Object(d.jsx)(B.a,{item:!0,children:Object(d.jsxs)(E.a,{variant:"h5",color:"textSecondary",className:n.title,children:["# ",t.order]})}),Object(d.jsx)(B.a,{item:!0,xs:12,sm:!0,children:Object(d.jsx)(E.a,{variant:"h2",className:n.title,children:t.name})})]})}var $=n(126),q=n(127),K=n(128),Q=n(129);function U(e){var t=e.pokemon,n=V();return Object(d.jsxs)(B.a,{item:!0,container:!0,justify:"center",alignItems:"center",children:[Object(d.jsx)(B.a,{item:!0,container:!0,xs:12,sm:6,children:Object(d.jsx)("img",{src:t.picture,alt:t.name,className:n.picture})}),Object(d.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(d.jsx)(E.a,{className:n.subtitle,gutterBottom:!0,children:"Basic Stats"}),Object(d.jsx)($.a,{size:"small",className:n.table,children:Object(d.jsx)(q.a,{children:t.stats.map((function(e,t){return Object(d.jsxs)(K.a,{children:[Object(d.jsxs)(Q.a,{className:n.tableCell,children:[e.stat.name,":"]}),Object(d.jsx)(Q.a,{className:n.tableCell,align:"right",children:e.base_stat})]},t)}))})})]})]})}function X(e){var t=e.pokemon,n=V();return Object(d.jsxs)(B.a,{item:!0,container:!0,className:n.containerMarginTop,justify:"center",children:[Object(d.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(d.jsx)(E.a,{className:n.subtitle,children:"Type"}),Object(d.jsx)(E.a,{className:n.text,children:t.types.map((function(e){return e.type.name})).join(", ")})]}),Object(d.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(d.jsx)(E.a,{className:n.subtitle,children:"Abilities"}),Object(d.jsx)(E.a,{className:n.text,children:t.abilities.map((function(e){return e.ability.name})).join(", ")})]})]})}function Z(e){var t=e.pokemon,n=e.evolutionChain,a=V(),r=Object(o.f)();return Object(d.jsxs)(B.a,{item:!0,container:!0,alignItems:"flex-start",justify:"center",className:a.containerMarginTop,children:[Object(d.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(d.jsx)(E.a,{className:a.subtitle,gutterBottom:!0,children:"Evolution Chain"}),Object(d.jsx)($.a,{size:"small",className:a.table,children:Object(d.jsx)(q.a,{children:n.map((function(e,t){return Object(d.jsxs)(K.a,{hover:!0,onClick:function(){return r.push("/pokemon/".concat(e.pokemon.id))},style:{cursor:"pointer"},children:[Object(d.jsx)(Q.a,{className:a.tableCell,align:"center",children:Object(d.jsx)("img",{src:e.pokemon.picture,alt:e.pokemon.name,className:a.evolutionPicture})}),Object(d.jsx)(Q.a,{className:a.tableCell,children:e.minLevel?e.pokemon.name+" (Level: ".concat(e.minLevel,")"):e.pokemon.name})]},t)}))})})]}),Object(d.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(d.jsx)(E.a,{className:a.subtitle,gutterBottom:!0,children:"Moves"}),Object(d.jsx)("div",{className:a.movesListContainer,children:Object(d.jsx)("ul",{className:a.movesList,children:t.moves.map((function(e,t){return Object(d.jsx)("li",{children:e.move.name},t)}))})})]})]})}function ee(){var e=G(),t=Object(o.g)().pokemonId,n=Object(a.useState)(),r=Object(k.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)([]),l=Object(k.a)(i,2),u=l[0],j=l[1],p=Object(a.useState)(!0),m=Object(k.a)(p,2),b=m[0],x=m[1],f=Object(o.f)();return Object(a.useEffect)((function(){(function(){var e=Object(g.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="https://pokeapi.co/api/v2/pokemon/".concat(t),S(n).then((function(e){s(e),z(e.species).then((function(e){j(e),x(!1)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(d.jsxs)(L.a,{className:e.card,children:[Object(d.jsx)(J.a,{children:Object(d.jsx)(T.a,{onClick:function(){return f.push("/")},startIcon:Object(d.jsx)(R.a,{}),variant:"outlined",size:"medium",color:"secondary",children:"Back"})}),Object(d.jsx)(A.a,{children:b?Object(d.jsx)(F,{}):c&&u&&Object(d.jsxs)(B.a,{container:!0,spacing:5,children:[Object(d.jsx)(Y,{pokemon:c}),Object(d.jsx)(U,{pokemon:c}),Object(d.jsx)(X,{pokemon:c}),Object(d.jsx)(Z,{pokemon:c,evolutionChain:u})]})})]})}var te=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",margin:"200px auto",width:500,height:100}}}));function ne(){var e=te(),t=Object(o.f)();return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(E.a,{variant:"h5",align:"center",children:"404 page not found"}),Object(d.jsx)(T.a,{onClick:function(){return t.push("/")},variant:"contained",color:"primary",children:"View some pokemons"})]})}var ae=function(){return Object(d.jsx)(u.a,{theme:p,children:Object(d.jsxs)(i.a,{basename:"/pokedex",children:[Object(d.jsx)(l.a,{}),Object(d.jsx)(f,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:D}),Object(d.jsx)(o.a,{path:"/pokemon/:pokemonId",component:ee}),Object(d.jsx)(o.a,{component:ne})]})]})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.86020abb.chunk.js.map