$(function(){var i=$(window);i.on("mousewheel DOMMouseScroll",function(e){e.preventDefault();var n=e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,o=i.scrollTop()-parseInt(200*n);TweenMax.to(i,.5,{scrollTo:{y:o,autoKill:!1},ease:Power1.easeOut,autoKill:!0,overwrite:5})})}),$(document).ready(function(){function n(e,n,o){var i=$(".gallery"),t=e.pageX-i.offset().left,a=e.pageY-i.offset().top;TweenMax.to(n,1,{x:(t-i.width()/2)/i.width()*100,y:(a-i.height()/2)/i.height()*100,ease:Power2.easeOut})}$("#short_link").on("scrollSpy:enter",function(){$(function(){var e=setInterval(function(){$("#short_link").text(function(){var e="",n="QWERTY UIOPAS D FGHJ KLZXCV BNM",o=n.length-1;for(i=0;i<15;++i)position=Math.floor(Math.random()*o),e+=n.substring(position,position+1);return e}())},50);setTimeout(function(){clearInterval(e)},1e3),setTimeout(function(){$("#short_link").html("Lorem ipsum")},1001)})}),$("#short_link").scrollSpy(),$(".gallery").mousemove(function(e){setTimeout(function(e){n(e,".slide",-100),n(e,".gallery .slide",0)}.bind(null,e),200)}),$(".center").slick({variableWidth:!0,centerMode:!0,centerPadding:"60px",slidesToShow:3,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]}),$(".anim-1").on("scrollSpy:enter",function(){$(".anim-1").addClass("animated"),$(".anim-1").css({"animation-name":"fadeIn",visibility:"visible"}),setTimeout(function(){$(".anim-1").removeClass("animated")},200)}),$(".anim-1").on("scrollSpy:exit",function(){$(".anim-1").css({"animation-name":"none",visibility:"hidden"})}),$(".anim-1").scrollSpy(),$(".anim-1-box2").on("scrollSpy:enter",function(){$(".anim-1-box2").css({"animation-name":"myanim1",opacity:"1"}),setTimeout(function(){$(".anim-1-box2").removeClass("animated")},200)}),$(".anim-1-box2").on("scrollSpy:exit",function(){$(".anim-1-box2").css({"animation-name":"none",opacity:"0"})}),$(".anim-1-box2").scrollSpy(),$(".anim-2-box2").on("scrollSpy:enter",function(){$(".anim-2-box2").css({"animation-name":"myanim2",opacity:"1"}),setTimeout(function(){$(".anim-2-box2").removeClass("animated")},200)}),$(".anim-2-box2").on("scrollSpy:exit",function(){$(".anim-2-box2").css({"animation-name":"none",opacity:"0"})}),$(".anim-2-box2").scrollSpy(),$(".anim-3-box2").on("scrollSpy:enter",function(){$(".anim-3-box2").css({"animation-name":"myanim3",opacity:"1"}),setTimeout(function(){$(".anim-3-box2").removeClass("animated")},200)}),$(".anim-3-box2").on("scrollSpy:exit",function(){$(".anim-3-box2").css({"animation-name":"none",opacity:"0"})}),$(".anim-3-box2").scrollSpy(),$(".myAnimSlider").on("scrollSpy:enter",function(){$(".myAnimSlider").css({"animation-name":"myAnimSlider",opacity:"1"}),setTimeout(function(){$(".myAnimSlider").removeClass("animated")},200)}),$(".myAnimSlider").on("scrollSpy:exit",function(){$(".myAnimSlider").css({"animation-name":"none",opacity:"0"})}),$(".myAnimSlider").scrollSpy(),document.querySelector(".slick-prev.slick-arrow").innerHTML='<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>',document.querySelector(".slick-next.slick-arrow").innerHTML='<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>',(new WOW).init();var a=$(".layer-0"),s=$(".layer-1"),r=$(".layer-2"),l=$(".layer-3"),m=$(".layer-4"),e=$("body"),c=e.width(),p=e.height();$(window).on("mousemove.parallax",function(e){var n,o,i=e.pageX,t=e.pageY;n=c/2-i,o=p/2-t,TweenMax.set(s,{perspective:400}),TweenMax.to(s,1,{css:{transform:"translateX("+n/40+"px) translateY("+o/40+"px)"},ease:Expo.easeOut,overwrite:"all"}),TweenMax.set(a,{perspective:400}),TweenMax.to(a,10,{css:{transform:"rotate("*o/n/5+"deg)"},ease:Expo.easeOut,overwrite:"none"}),TweenMax.set(r,{perspective:400}),TweenMax.to(r,16,{css:{transform:"matrix3d(0,"*o/n/5+"0"*o/n/5+"%,0,0)"},ease:Expo.easeOut,overwrite:"none"}),TweenMax.set(l,{perspective:400}),TweenMax.to(l,10,{css:{transform:"rotateY(0"+n/100+"deg)"},ease:Expo.easeOut,overwrite:"none"}),TweenMax.set(m,{perspective:400}),TweenMax.to(m,10,{css:{transform:"rotateY(0"+n/50+"deg)"},ease:Expo.easeOut,overwrite:"all"})});var o=$(window);console.log(o)});