(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3af4d67b"],{"79da":function(t,a,s){"use strict";s("7d3a")},"7d3a":function(t,a,s){},"7f5c":function(t,a,s){"use strict";s.d(a,"a",(function(){return e}));var i=s("b775");function e(t,a,s,e){return Object(i["a"])({url:"/artist/list",method:"get",params:{limit:t,area:a,type:s,offset:e}})}},"9aec":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"singer-content"},[s("div",{staticClass:"filter-wrap"},[s("div",{staticClass:"seciton-wrap"},[s("span",{staticClass:"section-type"},[t._v("热门类型:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"-1"==t.type},on:{click:function(a){t.type="-1"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"1"==t.type},on:{click:function(a){t.type="1"}}},[t._v("男歌手")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"2"==t.type},on:{click:function(a){t.type="2"}}},[t._v("女歌手")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"3"==t.type},on:{click:function(a){t.type="3"}}},[t._v("乐队")])])])]),s("div",{staticClass:"order-wrap"},[s("span",{staticClass:"order-type"},[t._v("歌手地区:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"-1"==t.area},on:{click:function(a){t.area="-1"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"7"==t.area},on:{click:function(a){t.area="7"}}},[t._v("华语")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"96"==t.area},on:{click:function(a){t.area="96"}}},[t._v("欧美")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"8"==t.area},on:{click:function(a){t.area="8"}}},[t._v("日本")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"16"==t.area},on:{click:function(a){t.area="16"}}},[t._v("韩国")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"0"==t.area},on:{click:function(a){t.area="0"}}},[t._v("其他")])])])])]),s("div",{staticClass:"singer"},[s("div",{staticClass:"items"},t._l(t.singerList,(function(a){return s("div",{key:a.id,staticClass:"item",on:{click:function(s){return t.tosearch(a.name)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.picUrl,alt:""}})]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))])])])})),0),s("el-pagination",{attrs:{background:"",small:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":t.limit},on:{"current-change":t.handleCurrentChange}})],1),s("br"),s("hr"),s("br")])},e=[],c=(s("96cf"),s("1da1")),n=s("7f5c"),r={name:"singerIndex",components:{},props:{},data:function(){return{area:"-1",type:"-1",limit:40,page:1,total:1e3,singerList:[]}},computed:{},watch:{area:function(){this.page=1,this.getData()},type:function(){this.page=1,this.getData()}},created:function(){this.getData()},mounted:function(){},methods:{handleCurrentChange:function(t){this.page=t,this.getData()},getData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var s,i,e,c,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.limit,i=t.area,e=t.type,c=t.page,a.next=3,Object(n["a"])(s,i,e,(c-1)*s);case 3:r=a.sent,t.singerList=r.data.artists;case 5:case"end":return a.stop()}}),a)})))()},tosearch:function(t){this.$router.push({name:"m.search",params:{keywords:t}})}}},l=r,o=(s("79da"),s("2877")),u=Object(o["a"])(l,i,e,!1,null,"2deb8c5a",null);a["default"]=u.exports}}]);