(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/FullVinyl6.f58fcdc5.png"},27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/shelf2.d7b9b7d4.png"},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),r=a.n(c),l=(a(32),a(20)),s=a(21),i=a(25),u=a(22),m=a(26),p=a(2),d=a(23),g="https://accounts.spotify.com/authorize",f="914bd207fc094241b1b53245a7767a03",h="https://masatonandate.github.io/spotifun/",b=["user-top-read","user-read-currently-playing","user-read-playback-state","user-read-private"],E=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e},{});window.location.hash="";var v=E,y=function(e){var t=e.item,a=e.image;return o.a.createElement("div",{className:"visualizer"},o.a.createElement("img",{src:t.album.images[0].url,className:"App-logo",alt:"logo"}),o.a.createElement("img",{src:a,className:"record-player",alt:"record player"}))},w=a(24),k=a.n(w),j=(a(9),n.Component,a(5)),_=a(7),N=a.n(_),O=function(e){var t=e.album;return o.a.createElement("div",{className:"Image-Holder"},o.a.createElement("a",{href:t.external_urls.spotify,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{key:t.id,src:t.album.images[0].url,className:"Album-Image",alt:"album"}),o.a.createElement("div",{className:"Song-Details"},o.a.createElement("h4",null,t.name),o.a.createElement("p",null,t.album.artists[0].name))))},A=(a(57),function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),l=Object(j.a)(r,2),s=l[0],i=l[1],u=Object(n.useState)(null),m=Object(j.a)(u,2),p=m[0],d=m[1];return Object(n.useEffect)(function(){var e=v.access_token;e&&(c(e),console.log("token",a))}),Object(n.useEffect)(function(){console.log("inEffect"),console.log("token in access",a),a&&(console.log("in-branch"),N.a.get("https://api.spotify.com/v1/me/top/tracks",{params:{limit:9,time_range:"short_term"},headers:{Authorization:"Bearer ".concat(a)}}).then(function(e){console.log("response happened",e.data),i(e.data.items),console.log(s)}).catch(function(e){console.log("getting player",e)}))},[a]),Object(n.useEffect)(function(){var e=v.access_token;e&&(c(e),console.log("token",a))}),Object(n.useEffect)(function(){a&&(console.log("in-branch"),N.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer ".concat(a)}}).then(function(e){console.log("response happened",e.data),d(e.data),console.log(p)}).catch(function(e){console.log("getting player",e)}))},[a]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},!a&&o.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat(g,"?client_id=").concat(f,"&redirect_uri=").concat(h,"&scope=").concat(b.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify"),a&&s&&p&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Songs Stuck in ",p.display_name,"'s Ear"),o.a.createElement("div",{className:"Album-Grid"},s.map(function(e){return console.log(e),o.a.createElement(O,{album:e})}))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[27,1,2]]]);
//# sourceMappingURL=main.87038074.chunk.js.map