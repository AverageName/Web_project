(this.webpackJsonprecsystem=this.webpackJsonprecsystem||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/auth_logo.cf2107eb.png"},,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),o=(a(18),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),p=(a(19),a(20),a(9),a(6)),g=a.n(p),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"logForm",action:"action_page.php"},i.a.createElement("div",{className:"login"},i.a.createElement("p",null,i.a.createElement("b",null,"Login")),i.a.createElement("input",{id:"reg-login",type:"text",placeholder:"login"})),i.a.createElement("div",{className:"login"},i.a.createElement("p",null,i.a.createElement("b",null,"Email")),i.a.createElement("input",{id:"reg-email",type:"text",placeholder:"email"})),i.a.createElement("div",{className:"password"},i.a.createElement("p",null,i.a.createElement("b",null,"Password")),i.a.createElement("input",{id:"reg-password",type:"password",placeholder:"password"})),i.a.createElement("div",{className:"submit"},i.a.createElement("button",{className:"submit-button",onClick:function(){return e.props.reg()}},"Sign up")),i.a.createElement("div",{className:"goback"},i.a.createElement("button",{className:"gobackButton",onClick:function(){return e.props.changePage("main")}},"Go back to main page")))}}]),t}(i.a.Component),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).setFunction=function(e){if(e)a.props.getUserInfo();else{var t=a.props.isAuthorized?"account":"auth";a.props.changePage(t)}},a.exitOrSignup=function(e){e?a.props.exit():a.props.changePage("reg")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.login,a=this.props.isAuthorized,n=a?"Log out":"Sign up";return i.a.createElement("div",{className:"logIcon"},i.a.createElement("div",{className:"acc-pic",onClick:function(){return e.setFunction(a)}},i.a.createElement("img",{src:g.a,className:"image"}),i.a.createElement("span",{className:"login-span"},t,"\xa0")),i.a.createElement("p",{onClick:function(){return e.exitOrSignup(a)}},n))}}]),t}(i.a.Component),f=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Info1"},i.a.createElement("h1",null,"About us"),i.a.createElement("p",null,' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'))}}]),t}(i.a.Component)),b=(a(22),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"logForm",action:"action_page.php"},i.a.createElement("div",{className:"login"},i.a.createElement("p",null,i.a.createElement("b",null,"Login")),i.a.createElement("input",{id:"login",type:"text",placeholder:"Type in your login"})),i.a.createElement("div",{className:"password"},i.a.createElement("p",null,i.a.createElement("b",null,"Password")),i.a.createElement("input",{id:"password",type:"password",placeholder:"Type in your password"})),i.a.createElement("div",{className:"submit"},i.a.createElement("button",{className:"submit-button",onClick:function(){return e.props.auth()}},"Sign in")),i.a.createElement("div",{className:"goback"},i.a.createElement("button",{className:"gobackButton",onClick:function(){return e.props.changePage("main")}},"Go back to main page")))}}]),t}(i.a.Component)),E=a(12),v=a(7),O=a.n(v),y=(a(10),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!1},a.changeState=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.film,a=this.state.isOpen||t.description.length<12?t.description:t.description.substring(0,10)+"...";return i.a.createElement("div",{className:"about-film"},i.a.createElement("h3",null,"Title: ",t.title),i.a.createElement("br",null),i.a.createElement("div",{className:"about"},i.a.createElement("b",{className:"descr",onClick:function(){return e.changeState()}},"Description:\xa0"),a,i.a.createElement("br",null),i.a.createElement("b",null,"Language:")," ",t.language," ",i.a.createElement("br",null),i.a.createElement("b",null,"Rating:")," ",t.rating))}}]),t}(i.a.Component)),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"listOfFilms",value:O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.films,a=0;case 2:if(!(a<t.length)){e.next=8;break}return e.next=5,i.a.createElement(y,{film:t[a]});case 5:a++,e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"MainContent"},i.a.createElement("div",{className:"PictureButton"},i.a.createElement("img",{className:"ProfilePicture",src:g.a}),i.a.createElement("button",{onClick:function(){return e.props.changePage("main")}},"Back to main page")),i.a.createElement("div",{className:"PersonInfo"},i.a.createElement("p",null,i.a.createElement("b",null,"Nickname:")," ",this.props.login),i.a.createElement("p",null,i.a.createElement("b",null,"Films watched:")," ",this.props.films.length),i.a.createElement("p",null,i.a.createElement("b",null,"Films person watched:")),i.a.createElement("div",{className:"WatchedFilms"},Object(E.a)(this.listOfFilms()))))}}]),t}(i.a.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={page:"main",isAuthorized:!0,login:"Ke",films:[],url:document.location.href+"api/"},a.auth=function(){var e=document.getElementById("login").value,t=document.getElementById("password").value;fetch(a.state.url+"auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:e,password:t})}).then((function(e){return e.json()})).then((function(t){t.success&&a.setState({login:e,isAuthorized:!0,page:"main"})}))},a.reg=function(){var e=document.getElementById("reg-login").value,t=document.getElementById("reg-password").value,n=document.getElementById("reg-email").value;fetch(a.state.url+"registrate/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:e,password:t,email:n})}).then((function(e){return e.json()})).then((function(t){t.success&&a.setState({login:e,isAuthorized:!0,page:"main"})}))},a.getUserInfo=function(){console.log(a.state.url),fetch(a.state.url+"get_user_info/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:a.state.login})}).then((function(e){return e.json()})).then((function(e){console.log(e.films),a.setState({films:e.films,page:"account"})}))},a.exit=function(){a.setState({isAuthorized:!1,login:"Login",page:"main"})},a.changePage=function(e){a.setState({page:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.isAuthorized),"main"===this.state.page?i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"header"},i.a.createElement(d,{changePage:this.changePage,isAuthorized:this.state.isAuthorized,login:this.state.login,getUserInfo:this.getUserInfo,exit:this.exit,reg:this.reg})),i.a.createElement("div",{className:"main-block"},i.a.createElement(f,null))):"auth"===this.state.page?i.a.createElement(b,{auth:this.auth,changePage:this.changePage}):"account"===this.state.page?i.a.createElement(j,{changePage:this.changePage,films:this.state.films,login:this.state.login}):"reg"===this.state.page?i.a.createElement(h,{changePage:this.changePage,reg:this.reg}):void 0}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.5851ea8c.chunk.js.map