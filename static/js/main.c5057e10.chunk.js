(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),i=n(25),o=n(7),l=n(132),u=n(131),j=n(58),p=Object(j.a)({palette:{type:"dark",primary:{main:"#f14443"},secondary:{main:"#f0f0f0"}},typography:{fontFamily:"Roboto, Bangers"}}),m=n(119),b=n(11),x=n(118),d=Object(x.a)((function(e){return Object(b.a)({root:{flexGrow:1},appBar:{backgroundColor:e.palette.primary.main,height:80},link:{margin:"5px auto 0 auto"},logo:{height:70,filter:"drop-shadow(0px 0px 3px black)","&:hover":{transform:"scale(1.02)"}}},e.breakpoints.down("sm"),{appBar:{height:60},logo:{height:50}})})),h=n(2);function f(){var e=d();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(m.a,{position:"fixed",className:e.appBar,children:Object(h.jsx)(i.b,{to:"/",className:e.link,children:Object(h.jsx)("img",{"data-testid":"header-logo",src:"/pokedex/assets/pokedex_logo.png",alt:"pokedex",className:e.logo})})})})}var O=n(12),v=n.n(O),g=n(21),k=n(22),y=n(18),N=n(29),w=n.n(N),C=function(){var e=Object(k.a)(v.a.mark((function e(t,n){var a,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://pokeapi.co/api/v2/pokemon?offset=".concat(t,"&limit=").concat(n),e.prev=1,e.next=4,w()(a);case 4:return r=e.sent,c=r.data.results,e.abrupt("return",Promise.all(c.map(function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.a.get(t).then((function(e){return e.data})).then((function(e){return{id:e.id,name:e.name,picture:e.sprites.other["official-artwork"].front_default,abilities:e.abilities,types:e.types,order:e.order,stats:e.stats,moves:e.moves,species:e.species.url}})).catch((function(e){return console.error(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(k.a)(v.a.mark((function e(t){var n,a,r,c,s,i,o,l,u,j;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,w()(t);case 4:return a=e.sent,r=a.data,c=r.evolution_chain,e.next=9,w()(c);case 9:s=e.sent,i=s.data.chain;case 11:return o=i.evolution_details[0],e.next=14,w()(i.species.url);case 14:return l=e.sent,u=l.data,e.next=18,S("https://pokeapi.co/api/v2/pokemon/".concat(u.id,"/"));case 18:j=e.sent,n.push({pokemon:j,minLevel:o?o.min_level:null}),i=i.evolves_to[0];case 21:if(i&&i.hasOwnProperty("evolves_to")){e.next=11;break}case 22:return e.abrupt("return",n);case 25:e.prev=25,e.t0=e.catch(1),console.error(e.t0);case 28:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}(),B=n(124),T=n(125),L=Object(x.a)((function(e){return Object(b.a)({toolbar:e.mixins.toolbar,root:{marginTop:50,flexGrow:1,marginRight:"10%",marginLeft:"10%"},spinnerWrapper:{margin:"50px 0",display:"flex",justifyContent:"center"}},e.breakpoints.down("sm"),{root:{marginTop:30,marginRight:"5%",marginLeft:"5%"}})})),I=n(120),_=n(121),F=n(122),A=n(123),M=Object(x.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",transition:"transform 0.15s ease-in-out","&:hover":{boxShadow:"0px 0px 10px 5px rgb(0, 0, 0, 0.3)",transform:"scale(1.05)"}},name:Object(b.a)({textTransform:"capitalize",textAlign:"center",fontFamily:"'Bangers', cursive",fontSize:28},e.breakpoints.down("sm"),{fontSize:22}),picture:{height:"100%",width:"100%"}}}));function W(e){var t=e.pokeData,n=M(),a=Object(o.f)();return Object(h.jsx)(I.a,{className:n.root,children:t&&Object(h.jsx)(_.a,{onClick:function(){return a.push("/pokemon/"+t.id)},children:Object(h.jsxs)(F.a,{children:[Object(h.jsx)("img",{src:t.picture,alt:t.name,className:n.picture}),Object(h.jsx)(A.a,{variant:"h6",className:n.name,children:t.name})]})})})}var E=Object(x.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},pokeball:{maxHeight:80,animation:"$spin 2s linear infinite",filter:"drop-shadow(0px 0px 7px black)"},"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}}));function P(){var e=E();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)("img",{src:"/pokedex/assets/pokeball.png",alt:"pokeball",className:e.pokeball})})}function R(){var e=L(),t=Object(a.useState)(!1),n=Object(y.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)([]),o=Object(y.a)(i,2),l=o[0],u=o[1],j=Object(a.useState)(0),p=Object(y.a)(j,2),m=p[0],b=p[1];Object(a.useEffect)((function(){(function(){var e=Object(k.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),C(m,48).then((function(e){u((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),s(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("div",{className:e.toolbar}),Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(B.a,{container:!0,spacing:3,children:l&&l.map((function(e,t){return Object(h.jsx)(B.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(h.jsx)(W,{pokeData:e})},t)}))}),Object(h.jsx)("div",{className:e.spinnerWrapper,children:c?Object(h.jsx)(P,{}):Object(h.jsx)(T.a,{size:"large",variant:"contained",color:"primary",onClick:function(){s(!0),b(m+48)},children:"Load more"})})]})]})}var D=n(130),G=n(57),J=n.n(G),H=Object(x.a)((function(e){return{toolbar:e.mixins.toolbar,card:Object(b.a)({margin:"50px 20%",padding:"20px 30px"},e.breakpoints.down("md"),{margin:"30px 5%"})}})),Y=Object(x.a)((function(e){return{card:Object(b.a)({margin:"130px 20%",padding:"20px 30px"},e.breakpoints.down("md"),{margin:"120px 5%"}),title:{textTransform:"capitalize",textAlign:"center",fontFamily:"'Bangers', cursive",textShadow:"0px 0px 5px black"},subtitle:{textAlign:"center",fontFamily:"'Bangers', cursive",fontSize:30},text:{textAlign:"center",fontSize:16,textTransform:"capitalize"},picture:{display:"block",height:250,margin:"0 auto"},evolutionPicture:{height:100},tableCell:{textTransform:"capitalize",borderBottom:"none",fontSize:16},table:{maxWidth:250,margin:"0 auto"},containerMarginTop:{marginTop:30},movesListContainer:{overflowY:"scroll",height:300,maxWidth:400,margin:"0 auto"},movesList:{columnCount:2,columnWidth:"50%","& > *":{textTransform:"capitalize"}}}}));function $(e){var t=e.pokemon,n=Y();return Object(h.jsxs)(B.a,{item:!0,container:!0,justify:"center",alignItems:"center",children:[Object(h.jsx)(B.a,{item:!0,children:Object(h.jsxs)(A.a,{variant:"h5",color:"textSecondary",className:n.title,children:["# ",t.order]})}),Object(h.jsx)(B.a,{item:!0,xs:12,sm:!0,children:Object(h.jsx)(A.a,{variant:"h2",className:n.title,children:t.name})})]})}var q=n(126),K=n(127),Q=n(128),U=n(129);function V(e){var t=e.pokemon,n=Y();return Object(h.jsxs)(B.a,{item:!0,container:!0,justify:"center",alignItems:"center",children:[Object(h.jsx)(B.a,{item:!0,container:!0,xs:12,sm:6,children:Object(h.jsx)("img",{src:t.picture,alt:t.name,className:n.picture})}),Object(h.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(A.a,{className:n.subtitle,gutterBottom:!0,children:"Basic Stats"}),Object(h.jsx)(q.a,{className:n.table,size:"small",children:Object(h.jsx)(K.a,{children:t.stats.map((function(e,t){return Object(h.jsxs)(Q.a,{children:[Object(h.jsxs)(U.a,{className:n.tableCell,children:[e.stat.name,":"]}),Object(h.jsx)(U.a,{className:n.tableCell,align:"right",children:e.base_stat})]},t)}))})})]})]})}function X(e){var t=e.pokemon,n=Y();return Object(h.jsxs)(B.a,{item:!0,container:!0,className:n.containerMarginTop,justify:"center",children:[Object(h.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(A.a,{className:n.subtitle,children:"Type"}),Object(h.jsx)(A.a,{className:n.text,children:t.types.map((function(e){return e.type.name})).join(", ")})]}),Object(h.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(A.a,{className:n.subtitle,children:"Abilities"}),Object(h.jsx)(A.a,{className:n.text,children:t.abilities.map((function(e){return e.ability.name})).join(", ")})]})]})}function Z(e){var t=e.pokemon,n=e.evolutionChain,a=Y(),r=Object(o.f)();return Object(h.jsxs)(B.a,{item:!0,container:!0,alignItems:"flex-start",justify:"center",className:a.containerMarginTop,children:[Object(h.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(A.a,{className:a.subtitle,gutterBottom:!0,children:"Evolution Chain"}),Object(h.jsx)(q.a,{size:"small",className:a.table,children:Object(h.jsx)(K.a,{children:n.map((function(e,t){return Object(h.jsxs)(Q.a,{hover:!0,onClick:function(){return r.push("/pokemon/".concat(e.pokemon.id))},style:{cursor:"pointer"},children:[Object(h.jsx)(U.a,{className:a.tableCell,align:"center",children:Object(h.jsx)("img",{src:e.pokemon.picture,alt:e.pokemon.name,className:a.evolutionPicture})}),Object(h.jsx)(U.a,{className:a.tableCell,children:e.minLevel?e.pokemon.name+" (Level: ".concat(e.minLevel,")"):e.pokemon.name})]},t)}))})})]}),Object(h.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(A.a,{className:a.subtitle,gutterBottom:!0,children:"Moves"}),Object(h.jsx)("div",{className:a.movesListContainer,children:Object(h.jsx)("ul",{className:a.movesList,children:t.moves.map((function(e,t){return Object(h.jsx)("li",{children:e.move.name},t)}))})})]})]})}function ee(){var e=H(),t=Object(o.g)().pokemonId,n=Object(a.useState)(),c=Object(y.a)(n,2),s=c[0],i=c[1],l=Object(a.useState)([]),u=Object(y.a)(l,2),j=u[0],p=u[1],m=Object(a.useState)(!0),b=Object(y.a)(m,2),x=b[0],d=b[1],f=Object(o.f)();return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="https://pokeapi.co/api/v2/pokemon/".concat(t),S(n).then((function(e){i(e),z(e.species).then((function(e){p(e),d(!1)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("div",{className:e.toolbar}),Object(h.jsxs)(I.a,{className:e.card,children:[Object(h.jsx)(D.a,{children:Object(h.jsx)(T.a,{onClick:function(){return f.push("/")},startIcon:Object(h.jsx)(J.a,{}),variant:"outlined",size:"medium",color:"secondary",children:"Back"})}),Object(h.jsx)(F.a,{children:x?Object(h.jsx)(P,{}):s&&j&&Object(h.jsxs)(B.a,{container:!0,spacing:5,children:[Object(h.jsx)($,{pokemon:s}),Object(h.jsx)(V,{pokemon:s}),Object(h.jsx)(X,{pokemon:s}),Object(h.jsx)(Z,{pokemon:s,evolutionChain:j})]})})]})]})}var te=function(){return Object(h.jsx)(u.a,{theme:p,children:Object(h.jsxs)(i.a,{basename:"/pokedex",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)(f,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(h.jsx)(o.a,{path:"/pokemon/:pokemonId",component:ee})]})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(te,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.c5057e10.chunk.js.map