(this.webpackJsonpserver=this.webpackJsonpserver||[]).push([[0],{51:function(e,n,t){e.exports=t(62)},56:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(6),o=t.n(r),l=(t(56),t(12)),c=t(29);var u=t(91),s=t(95),p=Object(u.a)({form:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",flexDirection:"column"}}),m=Object(l.b)(void 0,{updateUsername:function(e){return{type:"UPDATE_USERNAME",payload:e}}})((function(e){var n=p(),t=e.updateUsername,r=Object(a.useState)(""),o=Object(c.a)(r,2),l=o[0],u=o[1];return i.a.createElement("form",{className:n.form,onSubmit:function(e){return e.preventDefault(),t(l),!1}},i.a.createElement(s.a,{id:"standard-basic",label:"Username",variant:"outlined",helperText:"How others will see you",onChange:function(e){console.log("Update local ",l),u(e.target.value)}}))}));var d=t(44),b=function(e){var n=e.bubble,t=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(null!==t&&null!==t.current){var e=d.a.wrap(t.current),a="https://minimap.daily.co/".concat(n.name);e.join({url:a})}}),[n.name]),i.a.createElement("iframe",{className:"Video-Frame",title:"video call iframe",ref:t,allow:"camera; microphone; fullscreen"})},f=Object(u.a)({root:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},canvas:{flex:1},avatar:{position:"fixed",borderRadius:"50%",width:"100px",height:"100px",border:"1px solid transparent"},draggableAvatar:{position:"fixed",borderRadius:"50%",width:"100px",height:"100px",border:"1px solid transparent","&:hover":{cursor:"pointer",border:"1px solid black"}},bubble:{position:"fixed",borderRadius:"50%",textAlign:"center",lineHeight:"300px",width:"300px",height:"300px",border:"1px solid transparent",background:"red",opacity:.4}}),g=Object(l.b)(null,{updateParticipantPosition:function(e,n,t){return{type:"UPDATE_PARTICIPANT_POSITION",uuid:e,x:n,y:t}}})((function(e){var n=e.participant,t=e.updateParticipantPosition,r=f(),o=Object(a.useState)(null),l=Object(c.a)(o,2),u=l[0],s=l[1],p=Object(a.useState)(null),m=Object(c.a)(p,2),d=m[0],b=m[1],g=[window.innerWidth,window.innerHeight],h=g[0],v=g[1],y=n.position.x*h,x=n.position.y*v;return null!==u&&null!=d&&(y+=d.x-u.x,x+=d.y-u.y),n.draggable?i.a.createElement("img",{alt:n.name,draggable:"false",onMouseDown:function(e){return s({x:e.clientX,y:e.clientY})},onMouseMove:function(e){return b({x:e.clientX,y:e.clientY})},onMouseUp:function(e){if(null!==u){var a=y/h,i=x/v;t(n.uuid,a,i),s(null),b(null)}},onMouseLeave:function(e){if(null!==u){var a=y/h,i=x/v;t(n.uuid,a,i),s(null),b(null)}},className:r.draggableAvatar,src:n.icon,style:{left:y,top:x}}):i.a.createElement("img",{src:n.icon,alt:n.name,className:r.avatar,style:{left:y,top:x}})})),h=function(e){var n=f(),t=e.bubble,a=[window.innerWidth,window.innerHeight],r=a[0],o=a[1],l=t.position.x*r,c=t.position.y*o;return i.a.createElement("div",{className:n.bubble,style:{left:l,top:c}},t.name)},v=Object(l.b)((function(e){return{username:e.status.username,room:e.room}}))((function(e){var n=f(),t=e.room,a=t.participants.map((function(e){return e.inBubble})).filter((function(e){return e}))[0];return i.a.createElement("div",{className:n.root},i.a.createElement("div",{className:n.canvas,title:"video call canvas"},t.bubbles.map((function(e){return i.a.createElement(h,{key:e.name,bubble:e})})),t.participants.map((function(e){return i.a.createElement(g,{key:e.uuid,participant:e})}))),null!=a&&i.a.createElement(b,{bubble:a}))})),y=Object(l.b)((function(e){return{username:e.status.username}}))((function(e){return null===e.username?i.a.createElement(m,null):i.a.createElement(v,null)})),x=t(8),E={username:"Nicolas Patry"};var w=t(38),O=t(45),j={bubbles:[{name:"Chill",position:{x:.22,y:.3}},{name:"Figma",position:{x:.6,y:.1}}],participants:[{uuid:"0",name:"Nicolas Steegmann",icon:"https://s3.amazonaws.com/keybase_processed_uploads/a1ce4cc187ac553739200a2ec660ce05_360_360.jpg",position:{x:.45,y:.5},draggable:!0,inBubble:null},{uuid:"1",name:"Nicolas Steegmann",icon:"https://www.pngjoy.com/pngm/182/3614808_cammy-circle-picture-profile-girl-png-transparent-png.png",position:{x:.38,y:.7},draggable:!1,inBubble:null},{uuid:"2",name:"Nicolas Steegmann",icon:"https://miro.medium.com/max/3072/1*o-UCEnQ3VRCrHjI8cx4JBQ.jpeg",position:{x:.22,y:.8},draggable:!1,inBubble:null},{uuid:"3",name:"Nicolas Steegmann",icon:"https://bcsmn.edu/wp-content/uploads/2020/02/Enthoven-Profile-Circle.jpg",position:{x:.8,y:.1},draggable:!1,inBubble:null},{uuid:"4",name:"Nicolas Steegmann",icon:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",position:{x:.67,y:.67},draggable:!1,inBubble:null}]};var N=t(24),_=Object(N.b)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE_USERNAME":return Object(x.a)({},e,{username:n.payload});default:return e}},room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_ROOM":return n.payload;case"UPDATE_PARTICIPANT_POSITION":var t,a=e.participants.findIndex((function(e){return e.uuid===n.uuid})),i=n.x,r=n.y,o=null,l=Object(O.a)(e.bubbles);try{for(l.s();!(t=l.n()).done;){var c=t.value;Math.abs(i-c.position.x)<.15&&Math.abs(r-c.position.y)<.2&&(o=c)}}catch(p){l.e(p)}finally{l.f()}var u=Object(x.a)({},e.participants[a],{position:{x:i,y:r},inBubble:o}),s=[].concat(Object(w.a)(e.participants.slice(0,a)),[u],Object(w.a)(e.participants.slice(a+1)));return Object(x.a)({},e,{participants:s});default:return e}}}),S=Object(N.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var P=function(){return i.a.createElement(l.a,{store:S},i.a.createElement("div",null,i.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.483e8d67.chunk.js.map