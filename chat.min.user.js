// ==UserScript==
// @name        Chat sizer
// @namespace   inabahare
// @description This thing adds a new function to the chat
// @include     *//steamcommunity.com/chat*
// @version     1.5
// @grant       none
// ==/UserScript==

jQuery.noConflict();(function(e){var h=e(".playerAvatar");var a;var i=e("#chat_friendslist_area");var b=e("#chat_msg_area");var c="<style>";c+=".chat-big{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:100%;margin-left:-289px}.chat-small{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:69.4%;margin-left:0}";c+="</style>";var f="chat-small";var g="chat-big";e("head").append(c);h.click(function(){i.toggle(500,function(){});b.removeClass(f);b.addClass(g);g=[f,f=g][0]});var d=CChatFriend.prototype.IncrementUnreadMessageCount;CChatFriend.prototype.IncrementUnreadMessageCount=function(){if(g==="chat-small"){h.fadeTo(500,0.1).fadeTo(600,1)}return d.call(this)}})(jQuery);
