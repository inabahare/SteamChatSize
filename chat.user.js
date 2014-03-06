jQuery.noConflict();
(function($) {
    var avatar = $('.playerAvatar');
    var friend;
    var friendlist = $('#chat_friendslist_area');
    var messages = $('#chat_msg_area');
    var newStyle = "<style>";
    newStyle += ".chat-big{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:100%;margin-left:-289px}.chat-small{-webkit-transition:margin-left .5s,width .5s;-ms-transition:margin-left .5s,width .5s;-moz-transition:margin-left .5s,width .5s;transition:margin-left .5s,width .5s;width:69.4%;margin-left:0}";
    newStyle += "</style>";

    var oldClass = 'chat-small';
    var newClass = 'chat-big';

    $('head').append(newStyle);

    avatar.click(function() {

	friendlist.toggle(500, function() {
	});

	messages.removeClass(oldClass);
	messages.addClass(newClass);

	newClass = [oldClass, oldClass = newClass][0];

	console.log(newClass);
    });


    // With help from the wonderful Mr iSnipeu
    var oldIUMC = CChatFriend.prototype.IncrementUnreadMessageCount;
    CChatFriend.prototype.IncrementUnreadMessageCount = function() {
	if (newClass === 'chat-small') {
	
	    avatar.fadeTo(500, 0.1).fadeTo(600, 1.0);
	    
	}
	return oldIUMC.call(this);
    };
})(jQuery);