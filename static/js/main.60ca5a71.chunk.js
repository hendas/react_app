(this.webpackJsonpg=this.webpackJsonpg||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,,,,,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(8),m=a(9),u=a(11),o=a(10),s=a(12),p=(a(30),a(2)),d=a(16),E=a.n(d),h=a(17),f=a.n(h),g=a(14),b=a.n(g),v=(a(31),a(6)),y=function(){var e=[E.a,f.a,b.a],t=e[Math.floor(Math.random()*e.length)];return r.a.createElement(v.e,null,r.a.createElement(v.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:E.a,alt:"city"})}}),r.a.createElement(v.c,{path:"/products",render:function(){return r.a.createElement("img",{src:f.a,alt:"city"})}}),r.a.createElement(v.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:b.a,alt:"city"})}}),r.a.createElement(v.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:b.a,alt:"city"})}}),r.a.createElement(v.c,{render:function(){return r.a.createElement("img",{src:t,alt:"city"})}}))},j=(a(36),[{name:"start",path:"/"},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),k=function(){var e=j.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},x=function(e){return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},e.title),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},e.author),r.a.createElement("p",{style:{fontSize:15}},e.text))},O=[{id:1,title:"Czym jest teoria strun?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi, amet reprehenderit assumenda temporibus cum consectetur adipisci sit aliquam obcaecati. Totam, temporibus. Et quod, labore hic aperiam unde omnis expedita."},{id:2,title:"Czym jest  paradoks Fermiego?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi, amet reprehenderit assumenda temporibus cum consectetur adipisci sit aliquam obcaecati. Totam, temporibus. Et quod, labore hic aperiam unde omnis expedita."},{id:3,title:"Ciemna materia i ciemna energia",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi, amet reprehenderit assumenda temporibus cum consectetur adipisci sit aliquam obcaecati. Totam, temporibus. Et quod, labore hic aperiam unde omnis expedita."}],w=function(){var e=O.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},J=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},N=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(J,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},C=(a(37),["car","bike","motorcycle"]),S=function(){var e=C.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h3",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},z=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:""})},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",null,r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSubmit},"Wy\u015blij")),r.a.createElement(v.a,{when:""!==this.state.value,message:"Masz nie wys\u0142any formularz"}))}}]),t}(n.Component)),q=function(){return r.a.createElement(v.c,{render:function(){return r.a.createElement(v.b,{to:"/login"})}})},P=function(){return r.a.createElement("div",null,"404 Page not found")},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",null,"Podaj haslo",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))}}]),t}(n.Component),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.e,null,r.a.createElement(v.c,{path:"/",exact:!0,component:w}),r.a.createElement(v.c,{path:"/products",component:S}),r.a.createElement(v.c,{path:"/product/:id",component:N}),r.a.createElement(v.c,{path:"/contact",component:z}),r.a.createElement(v.c,{path:"/admin",component:q}),r.a.createElement(v.c,{path:"/login",component:F}),r.a.createElement(v.c,{component:P})))},L=(a(39),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(v.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(v.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(v.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(k,null)),r.a.createElement("section",{className:"page"},r.a.createElement(T,null))),r.a.createElement("footer",null,r.a.createElement(L,null))))}}]),t}(n.Component);a(40);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.60ca5a71.chunk.js.map