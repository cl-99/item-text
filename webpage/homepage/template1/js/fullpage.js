!function(e){e.fn.fullpage=function(n){function o(){e("body").append('<div id="fp-nav"><ul></ul></div>'),V=e("#fp-nav"),V.css("color",n.navigationColor),V.addClass(n.navigationPosition);for(var o=0;o<e(".fp-section").length;o++){var i="";n.anchors.length&&(i=n.anchors[o]);var t=n.navigationTooltips[o];
"undefined"==typeof t&&(t=""),V.find("ul").append('<li data-tooltip="'+t+'"><a href="#'+i+'"><span></span></a></li>')}}function i(){e(".fp-section").each(function(){var n=e(this).find(".fp-slide");n.length?n.each(function(){b(e(this))}):b(e(this))}),e.isFunction(n.afterRender)&&n.afterRender.call(this)
}function t(){if(!n.autoScrolling){var o=e(window).scrollTop(),i=e(".fp-section").map(function(){return e(this).offset().top<o+100?e(this):void 0}),i=i[i.length-1];if(!i.hasClass("active")){Q=!0;var t=e(".fp-section.active").index(".fp-section")+1,l=S(i),s=i.data("anchor");i.addClass("active").siblings().removeClass("active"),e.isFunction(n.onLeave)&&n.onLeave.call(this,t,i.index(".fp-section")+1,l),e.isFunction(n.afterLoad)&&n.afterLoad.call(this,s,i.index(".fp-section")+1),w(s),m(s,0),n.anchors.length&&!Y&&(I=s,location.hash=s),clearTimeout(K),K=setTimeout(function(){Q=!1
},100)}}}function l(e){return scrollable=e.find(".fp-slides").length?e.find(".fp-slide.active").find(".fp-scrollable"):e.find(".fp-scrollable")}function s(n,o){if("down"==n)var i="bottom",t=e.fn.fullpage.moveSectionDown;else i="top",t=e.fn.fullpage.moveSectionUp;if(0<o.length){if(!(i="top"===i?!o.scrollTop():"bottom"===i?o.scrollTop()+1+o.innerHeight()>=o[0].scrollHeight:void 0))return!0;
t()}else t()}function a(o){var i=o.originalEvent;if(n.autoScrolling&&o.preventDefault(),!f(o.target)){o=e(".fp-section.active");var t=l(o);Y||D||(i=z(i),G=i.y,J=i.x,o.find(".fp-slides").length&&Math.abs($-J)>Math.abs(X-G)?Math.abs($-J)>e(window).width()/100*n.touchSensitivity&&($>J?e.fn.fullpage.moveSlideRight():e.fn.fullpage.moveSlideLeft()):n.autoScrolling&&Math.abs(X-G)>e(window).height()/100*n.touchSensitivity&&(X>G?s("down",t):G>X&&s("up",t)))
}}function f(o,i){i=i||0;var t=e(o).parent();return i<n.normalScrollElementTouchThreshold&&t.is(n.normalScrollElements)?!0:i==n.normalScrollElementTouchThreshold?!1:f(t,++i)}function c(e){e=z(e.originalEvent),X=e.y,$=e.x}function r(o){if(n.autoScrolling){o=window.event||o,o=Math.max(-1,Math.min(1,o.wheelDelta||-o.deltaY||-o.detail));
var i=e(".fp-section.active"),i=l(i);return Y||(0>o?s("down",i):s("up",i)),!1}}function d(o){var i=e(".fp-section.active").find(".fp-slides");if(i.length&&!D){var t=i.find(".fp-slide.active"),l=null,l="prev"===o?t.prev(".fp-slide"):t.next(".fp-slide");if(!l.length){if(!n.loopHorizontal)return;l=t.siblings("prev"===o?":last":":first")
}D=!0,v(i,l)}}function p(){e(".fp-slide.active").each(function(){B(e(this))})}function u(o,i,t){var l={},s=o.position();if("undefined"!=typeof s){var s=s.top,a=S(o),f=o.data("anchor"),c=o.index(".fp-section"),r=o.find(".fp-slide.active"),d=e(".fp-section.active"),u=d.index(".fp-section")+1,h=j;if(r.length)var v=r.data("anchor"),g=r.index();
if(n.autoScrolling&&n.continuousVertical&&"undefined"!=typeof t&&(!t&&"up"==a||t&&"down"==a)){t?e(".fp-section.active").before(d.nextAll(".fp-section")):e(".fp-section.active").after(d.prevAll(".fp-section").get().reverse()),N(e(".fp-section.active").position().top),p();var b=d,s=o.position(),s=s.top,a=S(o)
}o.addClass("active").siblings().removeClass("active"),Y=!0,"undefined"!=typeof f&&M(g,v,f),n.autoScrolling?(l.top=-s,o=".fullpage-wrapper"):(l.scrollTop=s,o="html, body");var C=function(){b&&b.length&&(t?e(".fp-section:first").before(b):e(".fp-section:last").after(b),N(e(".fp-section.active").position().top),p()),e.isFunction(n.afterLoad)&&!h&&n.afterLoad.call(this,f,c+1),setTimeout(function(){Y=!1,e.isFunction(i)&&i.call(this)
},600)};e.isFunction(n.onLeave)&&!h&&n.onLeave.call(this,u,c+1,a),n.css3&&n.autoScrolling?(T("translate3d(0px, -"+s+"px, 0px)",!0),setTimeout(function(){C()},n.scrollingSpeed)):e(o).animate(l,n.scrollingSpeed,n.easing,function(){C()}),I=f,n.autoScrolling&&(w(f),m(f,c))}}function h(){if(!Q){var e=window.location.hash.replace("#","").split("/"),n=e[0],e=e[1];
if(n.length){var o="undefined"==typeof I,i="undefined"==typeof I&&"undefined"==typeof e&&!D;(n&&n!==I&&!o||i||!D&&q!=e)&&L(n,e)}}}function v(o,i){var t=i.position(),l=o.find(".fp-slidesContainer").parent(),s=i.index(),a=o.closest(".fp-section"),f=a.index(".fp-section"),c=a.data("anchor"),r=a.find(".fp-slidesNav"),d=i.data("anchor"),p=j;
if(n.onSlideLeave){var u,h=a.find(".fp-slide.active").index();u=h==s?"none":h>s?"left":"right",p||e.isFunction(n.onSlideLeave)&&n.onSlideLeave.call(this,c,f+1,h,u)}i.addClass("active").siblings().removeClass("active"),"undefined"==typeof d&&(d=s),n.loopHorizontal||(a.find(".fp-controlArrow.fp-prev").toggle(0!=s),a.find(".fp-controlArrow.fp-next").toggle(!i.is(":last-child"))),a.hasClass("active")&&M(s,d,c);
var v=function(){p||e.isFunction(n.afterSlideLoad)&&n.afterSlideLoad.call(this,c,f+1,d,s),D=!1};n.css3?(t="translate3d(-"+t.left+"px, 0px, 0px)",o.find(".fp-slidesContainer").toggleClass("fp-easing",0<n.scrollingSpeed).css(F(t)),setTimeout(function(){v()},n.scrollingSpeed,n.easing)):l.animate({scrollLeft:t.left},n.scrollingSpeed,n.easing,function(){v()
}),r.find(".active").removeClass("active"),r.find("li").eq(s).find("a").addClass("active")}function g(n,o){if(825>n||900>o){var i=Math.min(100*n/825,100*o/900).toFixed(2);e("body").css("font-size",i+"%")}else e("body").css("font-size","100%")}function m(o,i){n.navigation&&(e("#fp-nav").find(".active").removeClass("active"),o?e("#fp-nav").find('a[href="#'+o+'"]').addClass("active"):e("#fp-nav").find("li").eq(i).find("a").addClass("active"))
}function w(o){n.menu&&(e(n.menu).find(".active").removeClass("active"),e(n.menu).find('[data-menuanchor="'+o+'"]').addClass("active"))}function S(n){var o=e(".fp-section.active").index(".fp-section");return n=n.index(".fp-section"),o>n?"up":"down"}function b(e){e.css("overflow","hidden");var o=e.closest(".fp-section"),i=e.find(".fp-scrollable");
if(i.length)var t=i.get(0).scrollHeight;else t=e.get(0).scrollHeight,n.verticalCentered&&(t=e.find(".fp-tableCell").get(0).scrollHeight);o=U-parseInt(o.css("padding-bottom"))-parseInt(o.css("padding-top")),t>o?i.length?i.css("height",o+"px").parent().css("height",o+"px"):(n.verticalCentered?e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):e.wrapInner('<div class="fp-scrollable" />'),e.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:o+"px",size:"10px",alwaysVisible:!0})):C(e),e.css("overflow","")
}function C(e){e.find(".fp-scrollable").children().first().unwrap().unwrap(),e.find(".slimScrollBar").remove(),e.find(".slimScrollRail").remove()}function x(e){e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+y(e)+'px;" />')}function y(e){var o=U;return(n.paddingTop||n.paddingBottom)&&(o=e,o.hasClass("fp-section")||(o=e.closest(".fp-section")),e=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom")),o=U-e),o
}function T(e,n){O.toggleClass("fp-easing",n),O.css(F(e))}function L(n,o){"undefined"==typeof o&&(o=0);var i=isNaN(n)?e('[data-anchor="'+n+'"]'):e(".fp-section").eq(n-1);n===I||i.hasClass("active")?A(i,o):u(i,function(){A(i,o)})}function A(e,n){if("undefined"!=typeof n){var o=e.find(".fp-slides"),i=o.find('[data-anchor="'+n+'"]');
i.length||(i=o.find(".fp-slide").eq(n)),i.length&&v(o,i)}}function E(e,o){e.append('<div class="fp-slidesNav"><ul></ul></div>');var i=e.find(".fp-slidesNav");i.addClass(n.slidesNavPosition);for(var t=0;o>t;t++)i.find("ul").append('<li><a href="#"><span></span></a></li>');i.css("margin-left","-"+i.width()/2+"px"),i.find("li").first().find("a").addClass("active")
}function M(e,o,i){var t="";n.anchors.length&&(e?("undefined"!=typeof i&&(t=i),"undefined"==typeof o&&(o=e),q=o,location.hash=t+"/"+o):("undefined"!=typeof e&&(q=o),location.hash=i))}function P(){var e,n=document.createElement("p"),o={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};
document.body.insertBefore(n,null);for(var i in o)void 0!==n.style[i]&&(n.style[i]="translate3d(1px,1px,1px)",e=window.getComputedStyle(n).getPropertyValue(o[i]));return document.body.removeChild(n),void 0!==e&&0<e.length&&"none"!==e}function k(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}
}function z(e){var n=[];return window.navigator.msPointerEnabled?(n.y=e.pageY,n.x=e.pageX):(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function B(o){var i=n.scrollingSpeed;e.fn.fullpage.setScrollingSpeed(0),v(o.closest(".fp-slides"),o),e.fn.fullpage.setScrollingSpeed(i)}function N(e){n.css3?T("translate3d(0px, -"+e+"px, 0px)",!1):O.css("top",-e)
}function F(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function R(){N(0),e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),e(".fp-section").css({height:"","background-color":"",padding:""}),e(".fp-slide").css({width:""}),O.css({height:"",position:"","-ms-touch-action":""}),e(".fp-section, .fp-slide").each(function(){C(e(this)),e(this).removeClass("fp-table active")
}),O.find(".fp-easing").removeClass("fp-easing"),O.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){e(this).replaceWith(this.childNodes)}),e("html, body").scrollTop(0),O.addClass("fullpage-used")}n=e.extend({verticalCentered:!0,resize:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],slidesNavigation:!1,slidesNavPosition:"bottom",controlArrowColor:"#fff",loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,css3:!1,paddingTop:0,paddingBottom:0,fixedElements:null,normalScrollElements:null,keyboardScrolling:!0,touchSensitivity:5,continuousVertical:!1,animateAnchor:!0,normalScrollElementTouchThreshold:5,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterSlideLoad:null,onSlideLeave:null},n),n.continuousVertical&&(n.loopTop||n.loopBottom)&&(n.continuousVertical=!1,console&&console.log&&console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled")),e.fn.fullpage.setAutoScrolling=function(o){n.autoScrolling=o,o=e(".fp-section.active"),n.autoScrolling?(e("html, body").css({overflow:"hidden",height:"100%"}),o.length&&N(o.position().top)):(e("html, body").css({overflow:"visible",height:"initial"}),N(0),e("html, body").scrollTop(o.position().top))
},e.fn.fullpage.setScrollingSpeed=function(e){n.scrollingSpeed=e},e.fn.fullpage.setMouseWheelScrolling=function(e){e?document.addEventListener?(document.addEventListener("mousewheel",r,!1),document.addEventListener("wheel",r,!1)):document.attachEvent("onmousewheel",r):document.addEventListener?(document.removeEventListener("mousewheel",r,!1),document.removeEventListener("wheel",r,!1)):document.detachEvent("onmousewheel",r)
},e.fn.fullpage.setAllowScrolling=function(n){n?(e.fn.fullpage.setMouseWheelScrolling(!0),(H||W)&&(MSPointer=k(),e(document).off("touchstart "+MSPointer.down).on("touchstart "+MSPointer.down,c),e(document).off("touchmove "+MSPointer.move).on("touchmove "+MSPointer.move,a))):(e.fn.fullpage.setMouseWheelScrolling(!1),(H||W)&&(MSPointer=k(),e(document).off("touchstart "+MSPointer.down),e(document).off("touchmove "+MSPointer.move)))
},e.fn.fullpage.setKeyboardScrolling=function(e){n.keyboardScrolling=e};var I,q,V,D=!1,H=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),W="ontouchstart"in window||0<navigator.msMaxTouchPoints,O=e(this),U=e(window).height(),Y=!1,j=!1;e.fn.fullpage.setAllowScrolling(!0),n.css3&&(n.css3=P()),e(this).length?(O.css({height:"100%",position:"relative","-ms-touch-action":"none"}),O.addClass("fullpage-wrapper")):console.error("Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),e(n.sectionSelector).each(function(){e(this).addClass("fp-section")
}),e(n.slideSelector).each(function(){e(this).addClass("fp-slide")}),n.navigation&&o(),e(".fp-section").each(function(o){var i=e(this),t=e(this).find(".fp-slide"),l=t.length;if(o||0!==e(".fp-section.active").length||e(this).addClass("active"),e(this).css("height",U+"px"),(n.paddingTop||n.paddingBottom)&&e(this).css("padding",n.paddingTop+" 0 "+n.paddingBottom+" 0"),"undefined"!=typeof n.sectionsColor[o]&&e(this).css("background-color",n.sectionsColor[o]),"undefined"!=typeof n.anchors[o]&&e(this).attr("data-anchor",n.anchors[o]),l>1){o=100*l;
var s=100/l;t.wrapAll('<div class="fp-slidesContainer" />'),t.parent().wrap('<div class="fp-slides" />'),e(this).find(".fp-slidesContainer").css("width",o+"%"),e(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),"#fff"!=n.controlArrowColor&&(e(this).find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+n.controlArrowColor),e(this).find(".fp-controlArrow.fp-prev").css("border-color","transparent "+n.controlArrowColor+" transparent transparent")),n.loopHorizontal||e(this).find(".fp-controlArrow.fp-prev").hide(),n.slidesNavigation&&E(e(this),l),t.each(function(){e(this).css("width",s+"%"),n.verticalCentered&&x(e(this))
}),i=i.find(".fp-slide.active"),0==i.length?t.eq(0).addClass("active"):B(i)}else n.verticalCentered&&x(e(this))}).promise().done(function(){e.fn.fullpage.setAutoScrolling(n.autoScrolling);var o=e(".fp-section.active").find(".fp-slide.active");if(o.length&&(0!=e(".fp-section.active").index(".fp-section")||0==e(".fp-section.active").index(".fp-section")&&0!=o.index())&&B(o),n.fixedElements&&n.css3&&e(n.fixedElements).appendTo("body"),n.navigation&&(V.css("margin-top","-"+V.height()/2+"px"),V.find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")),n.menu&&n.css3&&e(n.menu).closest(".fullpage-wrapper").length&&e(n.menu).appendTo("body"),n.scrollOverflow?(O.hasClass("fullpage-used")&&i(),e(window).on("load",i)):e.isFunction(n.afterRender)&&n.afterRender.call(this),o=window.location.hash.replace("#","").split("/")[0],o.length){var t=e('[data-anchor="'+o+'"]');
!n.animateAnchor&&t.length&&(n.autoScrolling?N(t.position().top):(N(0),e("html, body").scrollTop(t.position().top)),w(o),m(o,null),e.isFunction(n.afterLoad)&&n.afterLoad.call(this,o,t.index(".fp-section")+1),t.addClass("active").siblings().removeClass("active"))}e(window).on("load",function(){var e=window.location.hash.replace("#","").split("/"),n=e[0],e=e[1];
n&&L(n,e)})});var K,Q=!1;e(window).on("scroll",t);var X=0,$=0,G=0,J=0;e.fn.fullpage.moveSectionUp=function(){var o=e(".fp-section.active").prev(".fp-section");o.length||!n.loopTop&&!n.continuousVertical||(o=e(".fp-section").last()),o.length&&u(o,null,!0)},e.fn.fullpage.moveSectionDown=function(){var o=e(".fp-section.active").next(".fp-section");
o.length||!n.loopBottom&&!n.continuousVertical||(o=e(".fp-section").first()),o.length&&u(o,null,!1)},e.fn.fullpage.moveTo=function(n,o){var i="",i=isNaN(n)?e('[data-anchor="'+n+'"]'):e(".fp-section").eq(n-1);"undefined"!=typeof o?L(n,o):0<i.length&&u(i)},e.fn.fullpage.moveSlideRight=function(){d("next")
},e.fn.fullpage.moveSlideLeft=function(){d("prev")},e(window).on("hashchange",h),e(document).keydown(function(o){if(n.keyboardScrolling&&!Y)switch(o.which){case 38:case 33:e.fn.fullpage.moveSectionUp();break;case 40:case 34:e.fn.fullpage.moveSectionDown();break;case 36:e.fn.fullpage.moveTo(1);break;case 35:e.fn.fullpage.moveTo(e(".fp-section").length);
break;case 37:e.fn.fullpage.moveSlideLeft();break;case 39:e.fn.fullpage.moveSlideRight()}}),e(document).on("click","#fp-nav a",function(n){n.preventDefault(),n=e(this).parent().index(),u(e(".fp-section").eq(n))}),e(document).on({mouseenter:function(){var o=e(this).data("tooltip");e('<div class="fp-tooltip '+n.navigationPosition+'">'+o+"</div>").hide().appendTo(e(this)).fadeIn(200)
},mouseleave:function(){e(this).find(".fp-tooltip").fadeOut(200,function(){e(this).remove()})}},"#fp-nav li"),n.normalScrollElements&&(e(document).on("mouseenter",n.normalScrollElements,function(){e.fn.fullpage.setMouseWheelScrolling(!1)}),e(document).on("mouseleave",n.normalScrollElements,function(){e.fn.fullpage.setMouseWheelScrolling(!0)
})),e(".fp-section").on("click",".fp-controlArrow",function(){e(this).hasClass("fp-prev")?e.fn.fullpage.moveSlideLeft():e.fn.fullpage.moveSlideRight()}),e(".fp-section").on("click",".toSlide",function(n){n.preventDefault(),n=e(this).closest(".fp-section").find(".fp-slides"),n.find(".fp-slide.active");
var o=null,o=n.find(".fp-slide").eq(e(this).data("index")-1);0<o.length&&v(n,o)});var Z;e(window).resize(function(){H?e.fn.fullpage.reBuild():(clearTimeout(Z),Z=setTimeout(e.fn.fullpage.reBuild,500))}),e.fn.fullpage.reBuild=function(){j=!0;var o=e(window).width();U=e(window).height(),n.resize&&g(U,o),e(".fp-section").each(function(){if(parseInt(e(this).css("padding-bottom")),parseInt(e(this).css("padding-top")),n.verticalCentered&&e(this).find(".fp-tableCell").css("height",y(e(this))+"px"),e(this).css("height",U+"px"),n.scrollOverflow){var o=e(this).find(".fp-slide");
o.length?o.each(function(){b(e(this))}):b(e(this))}o=e(this).find(".fp-slides"),o.length&&v(o,o.find(".fp-slide.active"))}),e(".fp-section.active").position(),o=e(".fp-section.active"),o.index(".fp-section")&&u(o),j=!1,e.isFunction(n.afterResize)&&n.afterResize.call(this)},e(document).on("click",".fp-slidesNav a",function(n){n.preventDefault(),n=e(this).closest(".fp-section").find(".fp-slides");
var o=n.find(".fp-slide").eq(e(this).closest("li").index());v(n,o)}),e.fn.fullpage.destroy=function(o){e.fn.fullpage.setAutoScrolling(!1),e.fn.fullpage.setAllowScrolling(!1),e.fn.fullpage.setKeyboardScrolling(!1),e(window).off("scroll",t).off("hashchange",h),e(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",n.normalScrollElements).off("mouseout",n.normalScrollElements),e(".fp-section").off("click",".fp-controlArrow").off("click",".toSlide"),o&&R()
}}}(jQuery);