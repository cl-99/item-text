(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eff17b80"],{"498a":function(t,e,n){"use strict";var s=n("23e7"),r=n("58a8").trim,a=n("c8d2");s({target:"String",proto:!0,forced:a("trim")},{trim:function(){return r(this)}})},"559f":function(t,e,n){"use strict";n("9eea")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var s=n("1d80"),r=n("5899"),a="["+r+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),i=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:i(1),end:i(2),trim:i(3)}},"9eea":function(t,e,n){},b378:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-container"},[n("van-nav-bar",{staticClass:"page-navbar",attrs:{title:"我不是robot",fixed:""}}),n("div",{ref:"message-list",staticClass:"message-list"},t._l(t.messages,(function(e,s){return n("div",{key:s,staticClass:"message-item",class:{reverse:s%2==1}},[n("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:t.photo(s)}}),n("div",{staticClass:"msg-wrap",staticStyle:{flex:"1"}},[n("div",{staticClass:"title"},[t._v(t._s(e))])])],1)})),0),n("van-cell-group",{staticClass:"send-message"},[n("van-field",{attrs:{center:"",clearable:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[n("van-button",{attrs:{slot:"button",size:"mini",type:"primary"},on:{click:t.onSend},slot:"button"},[t._v("发送")])],1)],1)],1)},r=[],a=(n("498a"),n("96cf"),n("1da1")),o=n("5530"),c=n("bc3a"),i=n.n(c),u=n("5d2d"),f=n("c24f"),l=n("2f62"),m={name:"ChatPage",data:function(){return{messages:Object(u["a"])("messages")||["你好"],message:"",robotPhoto:"https://img01.yzcdn.cn/vant/logo.png",userphoto:""}},computed:Object(o["a"])({},Object(l["b"])(["user"])),watch:{},created:function(){this.loadCurrentUser()},mounted:function(){this.scrollToBottom()},methods:{photo:function(t){return t%2===1?this.userphoto:this.robotPhoto},loadCurrentUser:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["b"])();case 2:n=e.sent,s=n.data,t.userphoto=s.data.photo;case 5:case"end":return e.stop()}}),e)})))()},onSend:function(){this.scrollToBottom();var t=this.message.trim();t&&(this.onloadAxios(),this.messages.push(this.message),this.message="")},onloadAxios:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("http://www.tuling123.com/openapi/api?key=61d2ef6a5c38407f8d58df05ea992df7&info=".concat(t.message));case 3:n=e.sent,t.messages.push(n.data.text),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.messages.push("你网咯不好,不想和你说话");case 10:Object(u["c"])("messages",t.messages);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},scrollToBottom:function(){var t=this.$refs["message-list"];this.$nextTick((function(){t.scrollTop=t.scrollHeight}))}}},d=m,p=(n("559f"),n("2877")),h=Object(p["a"])(d,s,r,!1,null,"5b88feac",null);e["default"]=h.exports},c24f:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u}));var s=n("b775"),r=function(t){return Object(s["a"])({method:"POST",url:"/mp/v1_0/authorizations",data:t})},a=function(){return Object(s["a"])({method:"GET",url:"/mp/v1_0/user/profile"})},o=function(t){return Object(s["a"])({method:"PATCH",url:"/mp/v1_0/user/photo",data:t})},c=function(t){return Object(s["a"])({method:"PATCH",url:"/mp/v1_0/user/profile",data:t})},i=function(t){return Object(s["a"])({method:"GET",url:"/mp/v1_0/sms/codes/".concat(t)})},u=function(){return Object(s["a"])({method:"GET",url:"/app/v1_0/user"})}},c8d2:function(t,e,n){var s=n("d039"),r=n("5899"),a="​᠎";t.exports=function(t){return s((function(){return!!r[t]()||a[t]()!=a||r[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-eff17b80.11f4dd83.js.map