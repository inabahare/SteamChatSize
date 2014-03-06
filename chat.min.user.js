// ==UserScript==
// @name        Chat sizer
// @namespace   inabahare
// @description This thing adds a new function to the chat
// @include     *//steamcommunity.com/chat*
// @version     1.5
// @grant       none
// ==/UserScript==

jQuery.noConflict();(function(f){var c=f(".playerAvatar");var b=f("#chat_friendslist_area");var e=f("#chat_msg_area");var d="<style>";d+=".chat-big{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:100%;margin-left:-289px}.chat-small{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:69.4%;margin-left:0}";d+="</style>";var a="chat-small";var g="chat-big";f("head").append(d);c.click(function(){b.toggle(500,function(){});e.removeClass(a);e.addClass(g);g=[a,a=g][0];e.bind("transitionend",function(h){console.log(this)});console.log(a+" "+g)})})(jQuery);


