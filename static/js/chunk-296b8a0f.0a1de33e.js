(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-296b8a0f"],{"307b":function(e,t,n){},"32f4":function(e,t,n){"use strict";n("5884")},5884:function(e,t,n){},"7daa":function(e,t){!function(){function e(e,t,n){return e.getAttribute(t)||n}function t(e){return document.getElementsByTagName(e)}function n(){var n=t("script"),i=n.length,o=n[i-1];return{l:i,z:e(o,"zIndex",-2),o:e(o,"opacity",.8),c:e(o,"color","255,255,255"),n:e(o,"count",240)}}function i(){a=r.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=r.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function o(){if(d+=1,d<5)g(o);else{d=0,u.clearRect(0,0,a,s);var e,t,n,i,r,l,m=[p].concat(h);h.forEach((function(o){for(o.x+=o.xa,o.y+=o.ya,o.xa*=o.x>a||o.x<0?-1:1,o.ya*=o.y>s||o.y<0?-1:1,u.fillRect(o.x-.5,o.y-.5,2,2),u.fillStyle="#FFFFFF",t=0;t<m.length;t++)e=m[t],o!==e&&null!==e.x&&null!==e.y&&(i=o.x-e.x,r=o.y-e.y,l=i*i+r*r,l<e.max&&(e===p&&l>=e.max/2&&(o.x-=.03*i,o.y-=.03*r),n=(e.max-l)/e.max,u.beginPath(),u.lineWidth=n/2,u.strokeStyle="rgba("+c.c+","+(n+.2)+")",u.moveTo(o.x,o.y),u.lineTo(e.x,e.y),u.stroke()));m.splice(m.indexOf(o),1)})),g(o)}}var a,s,r=document.createElement("canvas"),c=n(),l="c_n"+c.l,u=r.getContext("2d"),d=0,g=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},m=Math.random,p={x:null,y:null,max:2e4};r.id=l,r.style.cssText="position:fixed;top:0;left:0;z-index:"+c.z+";opacity:"+c.o,t("body")[0].appendChild(r),i(),window.onresize=i,window.onmousemove=function(e){e=e||window.event,p.x=e.clientX,p.y=e.clientY},window.onmouseout=function(){p.x=null,p.y=null};for(var h=[],f=0;c.n>f;f++){var w=m()*a,y=m()*s,v=2*m()-1,b=2*m()-1;h.push({x:w,y:y,xa:v,ya:b,max:6e3})}setTimeout((function(){o()}),100)}()},"7eb5":function(e,t,n){"use strict";n("307b")},"9ed6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-account",style:e.backgroundImages?{backgroundImage:"url("+e.backgroundImages+")"}:{backgroundImage:"url("+e.backgroundImageMo+")"}},[n("div",{staticClass:"container",class:[e.fullWidth>768?"containerSamll":"containerBig"]},[e.fullWidth>768?[n("swiper",{staticClass:"swiperPross",attrs:{options:e.swiperOption}},[e._l(e.swiperList,(function(e,t){return n("swiper-slide",{key:t,staticClass:"swiperPic"},[n("img",{attrs:{src:e.pic}})])})),e._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)]:e._e(),e._v(" "),n("div",{staticClass:"index_from page-account-container"},[n("div",{staticClass:"page-account-top "},[n("div",{staticClass:"page-account-top-logo"},[n("img",{attrs:{src:e.loginLogo,alt:"logo"}})])]),e._v(" "),n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}}},[n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{ref:"account",attrs:{"prefix-icon":"el-icon-user",placeholder:"用户名",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.account,callback:function(t){e.$set(e.loginForm,"account",t)},expression:"loginForm.account"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"pwd"}},[n("el-input",{key:e.passwordType,ref:"pwd",attrs:{"prefix-icon":"el-icon-lock",type:e.passwordType,placeholder:"密码",name:"pwd",tabindex:"2","auto-complete":"on"},model:{value:e.loginForm.pwd,callback:function(t){e.$set(e.loginForm,"pwd",t)},expression:"loginForm.pwd"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),n("el-form-item",{staticClass:"captcha",attrs:{prop:"code"}},[n("div",{staticClass:"captcha"},[n("el-input",{ref:"username",staticStyle:{width:"218px"},attrs:{"prefix-icon":"el-icon-message",placeholder:"验证码",name:"username",type:"text",tabindex:"3",autocomplete:"on"},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}}),e._v(" "),n("div",{staticClass:"imgs",on:{click:function(t){return e.getCaptcha()}}},[n("img",{attrs:{src:e.captchatImg}})])],1)]),e._v(" "),n("div",{staticClass:"acea-row"},[n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录\n          ")])],1)],1)],1)],2)])},o=[],a=(n("61f7"),n("7daa"),n("c24f")),s=n("02df"),r=n("74f9"),c=(n("ffd2"),n("5f87"),n("a78e"),{name:"Login",data:function(){return{captchatImg:"",swiperList:[],loginLogo:"",backgroundImages:"",backgroundImageMo:n("e6df"),fullWidth:document.body.clientWidth,swiperOption:{pagination:{el:".pagination"},autoplay:{enabled:!0,disableOnInteraction:!1,delay:3e3}},loginForm:{account:"admin",pwd:"123456",key:"",code:"",wxCode:""},loginRules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],pwd:[{required:!0,trigger:"blur",message:"请输入密码"}],code:[{required:!0,message:"请输入正确的验证码",trigger:"blur"}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{fullWidth:function(e){if(!this.timer){this.screenWidth=e,this.timer=!0;var t=this;setTimeout((function(){t.timer=!1}),400)}},$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){var e=this;document.onkeydown=function(t){if(-1!==e.$route.path.indexOf("login")){var n=window.event.keyCode;13===n&&e.handleLogin()}},window.addEventListener("resize",this.handleResize)},mounted:function(){var e=this;this.getInfo(),this.$nextTick((function(){e.screenWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"})),""===this.loginForm.account?this.$refs.account.focus():""===this.loginForm.pwd&&this.$refs.pwd.focus(),this.getCaptcha(),this.agentWeiXinLogin()},beforeCreate:function(){this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},destroyed:function(){},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg")},methods:{agentWeiXinLogin:function(){var e=this,t=this.$wechat.isWeixin();if(t){var n=this.$route.query.code,i=this.$route.query.state,o=location.origin+"/login";null==n&&Object(r["getWXCodeByUrl"])(o,"step1"),"step1"===i?Object(r["loginByWxCode"])(n).then((function(t){sessionStorage.setItem("token",t.token),e.$router.push({path:e.redirect||"/",query:e.otherQuery})})).catch((function(e){Object(r["getWXCodeByUrl"])(o,"step2")})):"step2"===i&&(this.loginForm.wxCode=n)}},onWechat:function(){var e=this.$route.query.redirect?this.$route.query.redirect:"/dashboard";this.$wechat.oAuth(e,"login")},handleResize:function(e){this.fullWidth=document.body.clientWidth,this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},getInfo:function(){var e=this;Object(a["d"])().then((function(t){e.swiperList=t.banner,e.loginLogo=t.loginLogo,e.backgroundImages=t.backgroundImage}))},checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.pwd.focus()}))},handleLogin:function(){var e=this,t=this.$route.query.code;this.$refs.loginForm.validate((function(n){if(!n)return!1;e.loading=!0,e.$wechat.isWeixin()&&(e.loginForm.wxCode=t),e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),Object(s["b"])(),e.loading=!1})).catch((function(t){e.loading=!1,e.$wechat.isPhone()&&e.$dialog.error(t.message),e.getCaptcha()}))}))},getCaptcha:function(){var e=this;Object(a["a"])().then((function(t){e.captchatImg=t.code,e.loginForm.key=t.key})).catch((function(t){var n=t.message;e.$message.error(n)}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,n){return"redirect"!==n&&(t[n]=e[n]),t}),{})}}}),l=c,u=(n("7eb5"),n("32f4"),n("2877")),d=Object(u["a"])(l,i,o,!1,null,"2431c538",null);t["default"]=d.exports},e6df:function(e,t,n){e.exports=n.p+"static/img/bg.590046d3.jpg"}}]);