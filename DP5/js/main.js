var link_userId, link_date, link_planId, link_setId, link_total;

$(document).ready(function() {
	link_userId = getUrlParameter('userId');
	link_date = getUrlParameter('date')
	link_planId = getUrlParameter('planId')
	link_setId = getUrlParameter('setId')
	link_total = getUrlParameter('total')

	$('.session').each(function() {
		var link = $(this).attr('href')
		if (link_userId != undefined) {
			link += ('?userId=' + link_userId)
			if (link_date != undefined)
				link += ('&date=' + link_date)
			if (link_planId != undefined)
				link += ('&planId=' + link_planId)
			if (link_setId != undefined)
				link += ('&setId=' + link_setId)
			if (link_total != undefined)
				link += ('&total=' + link_total)
		}
		$(this).attr('href', link)
	})
});

// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

// http://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}