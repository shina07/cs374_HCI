var link_userId, link_date, link_planId, link_setId, link_total;

$(document).ready(function() {
	link_userId = getUrlParameter('userId');
	link_date = getUrlParameter('date')
	link_planId = getUrlParameter('planId')
	link_setId = getUrlParameter('setId')
	link_total = getUrlParameter('total')

	$('.session').each(function() {
		var link = $(this).attr('href');
		if ( link.indexOf("?") > -1 ){ link = link.split("?")[0]}
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
		else {
			parsed = document.location.href.split('/')
			if (parsed[parsed.length - 1] == 'index.html') {}
			else if (parsed[parsed.length - 1] == 'main.html')
				document.location.href = 'index.html';
			else if (parsed[parsed.length - 1] == 'add_weight_exercise.html' || parsed[parsed.length - 1] == 'add_param.html')
				document.location.href = '../../index.html'
			else
				document.location.href = '../index.html'
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