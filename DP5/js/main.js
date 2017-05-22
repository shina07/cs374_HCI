var link_userId, link_date, link_planId, link_setId, link_total;

$(document).ready(function() {
	link_userId = getUrlParameter('userId');
	link_date = getUrlParameter('date');
	link_planId = getUrlParameter('planId');
	link_setId = getUrlParameter('setId');
	link_total = getUrlParameter('total');

	if (link_userId != undefined && link_date != undefined && link_planId != undefined && link_setId != undefined && link_total != undefined) {
		$('.session').each(function() {
			var link = $(this).attr('href');
			link += ('?userId=' + link_userId + '&date=' + link_date + '&planId=' + link_planId + '&setId=' + link_setId + '&total=' + link_total);
			$(this).attr('href', link);
		});
	}
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