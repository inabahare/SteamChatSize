// ==UserScript==
// @name        Chat sizer
// @namespace   inabahare
// @description This thing adds a new function to the chat
// @include     *//steamcommunity.com/chat*
// @version     1.1
// @grant       none
// ==/UserScript==

jQuery.noConflict();
(function($) {
    var avatar = $('.playerAvatar');
    var friendlist = $('#chat_friendslist_area');
    var messages = $('#chat_msg_area');
    var newStyle = "<style>";
    newStyle += ".chat-big{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:100%;margin-left:-289px}.chat-small{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:69.4%;margin-left:0}";
    newStyle += "</style>";
    
    var oldClass = 'chat-small';
    var newClass = 'chat-big';
    
    $('head').append(newStyle);
    
    avatar.click(function() {
	
	friendlist.toggle(500, function() {});
	
	messages.removeClass(oldClass);
	messages.addClass(newClass);
	
	newClass = [oldClass, oldClass = newClass][0];
	
	console.log(oldClass + " " + newClass);
	
    });
    
})(jQuery);