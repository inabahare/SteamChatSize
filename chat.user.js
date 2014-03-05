// ==UserScript==
// @name        Chat sizer
// @namespace   inabahare
// @description This thing adds a new function to the chat
// @include     http://steamcommunity.com/chat/
// @version     1
// @grant       none
// ==/UserScript==

jQuery.noConflict();
(function($){
    
    var friendlist  = $('#chat_friendslist_area');
    var messages    = $('#chat_msg_area');
    var head        = $('head');
    var customCss   = "<style>.chat-big{width:948px;margin-left:-289px}</style>";
    
    head.append(customCss);
    
    $('.chat_page_header').click(function(){
        
        friendlist.toggle(300,function(){
            console.log(1);
        });
        messages.animate({
	    'width':'948px',
	    'margin-left': '-289px'
	});
        
    });
})(jQuery);