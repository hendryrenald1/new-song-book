(this["webpackJsonpyour-app"]=this["webpackJsonpyour-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),o=n.n(c),l=(n(59),n(60),n(61),n(31),n(9)),s=n(10),i=n(12),m=n(11),u=(r.a.Component,n(48)),h=n.n(u),d=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.songs.filter((function(t){if(e.props.search.searchChordedOnly&&!1===t.chorded)return!1;if(e.props.search.searchRecordedOnly&&""===t.recording)return!1;var n=t.name;return e.props.search.searchLyrics&&(n+=t.lyrics),(n=n.toLowerCase()).includes(e.props.search.searchInput)})).sort((function(e,t){return e.name>t.name?1:-1})).map((function(t){e.props.selected;return r.a.createElement("li",{className:"list-group-item",key:t._id,onClick:function(){return e.props.selectSong(t)}}," ",t.name," ")}))}}]),n}(r.a.Component),g=n(3),p=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={display:"none"},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.f,null,r.a.createElement(g.d,{md:"12"},r.a.createElement("span",{className:"d-block p-2 bg-dark"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg ",name:"searchInput",placeholder:"Search Songs....",onChange:this.props.handleSearchChange})))))}}]),n}(r.a.Component),f=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={songs:[],selected:"",search:{searchInput:"",searchLyrics:!1,searchChordedOnly:!1,searchRecordedOnly:!1},clickCount:0,viewLogin:!1,admin:"",edit:!1},e.getSongs=function(){h.a.get("/api/songs").then((function(t){return e.setState({songs:t.data})})).catch((function(e){return console.log("error fetching songs from db")}))},e.selectSong=function(t){console.log(t),e.props.history.push({pathname:"/selectedSong",state:{song:t}})},e.handleSearchChange=function(t){var n=e.state.search;if("searchInput"===t.target.name)n.searchInput=t.target.value.toLowerCase();else{var a=t.target.name;n[a]=!n[a]}e.setState({search:n})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("admin");e&&this.setState({admin:e}),this.getSongs()}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("header",{id:"home-section",className:"img-fluid"},r.a.createElement("div",{className:"dard-overlay"},r.a.createElement("div",{className:"home-inner container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement(p,{handleSearchChange:this.handleSearchChange}))))))),r.a.createElement("section",{id:"song-list",className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"list-group my-4"},r.a.createElement(d,{songs:this.state.songs,search:this.state.search,selected:this.state.selected,selectSong:this.selectSong}))))))}}]),n}(a.Component),E=n(19),v=function(e){e.location.state.song.lyrics.replace(/(?:\r\n|\r|\n)/g,"<br />");return r.a.createElement(g.f,{className:"mt-4 text-center"},r.a.createElement(g.q,null,r.a.createElement(g.d,null,r.a.createElement("h3",null," ",r.a.createElement("strong",null," ",e.location.state.song.name+"\n\n"," ")))),r.a.createElement(g.q,{className:"d-none d-sm-block d-md-none"},r.a.createElement(g.d,null,r.a.createElement("h4",null," ",r.a.createElement("strong",null," Tamil version ")))),r.a.createElement(g.q,null,r.a.createElement(g.d,{md:"6"},r.a.createElement(g.c,null,r.a.createElement("pre",null,e.location.state.song.lyrics))),r.a.createElement(g.q,{className:"d-none d-sm-block d-md-none"},r.a.createElement(g.d,null,r.a.createElement("h4",null," English version"))),r.a.createElement(g.d,{md:"6"},r.a.createElement(g.c,null,r.a.createElement("pre",null,e.location.state.song.lyrics)))),r.a.createElement(g.q,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{onClick:e.history.goBack,gradient:"purple",rounded:!0},"Back"))))},y=n(16),w=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(g.k,{dark:!0,expand:"md"},r.a.createElement(g.l,{className:"m1 p0 mx-1"},r.a.createElement("img",{src:"../../img/fcm-weblogo.png",href:"#",className:"logo-navbar",height:"64rem",alt:" FCM logo"}),r.a.createElement("strong",null," Faith Church Ministries ")),r.a.createElement(g.n,{onClick:this.toggleCollapse}),r.a.createElement(g.e,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(g.m,{right:!0},r.a.createElement(g.i,{active:!0},r.a.createElement(g.j,{to:"#!"},"Home")),r.a.createElement(g.i,null,r.a.createElement(g.j,{to:"#!"},"Song List")),r.a.createElement(g.i,null,r.a.createElement(g.j,{to:"#!"},"Contact Us"))))))}}]),n}(a.Component),b=function(){return r.a.createElement(g.g,{className:"font-small  panel-footer sticky-footer"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(g.f,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright:"," ",r.a.createElement("a",{href:"https://www.faithchurchministries.co.uk/"}," Faith Church Ministries "))))},O=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(E.a,{exact:!0,path:"/",component:f}),r.a.createElement(E.a,{exact:!0,path:"/selectedSong",component:v}),r.a.createElement(b,null))}}]),n}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(y.a,null,r.a.createElement(O,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()},31:function(e,t,n){},54:function(e,t,n){e.exports=n(102)}},[[54,1,2]]]);
//# sourceMappingURL=main.7c1f1ebe.chunk.js.map