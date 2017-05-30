
function get_url_params () {
	var url = $(location).attr('href');

	return parse_url_params (url);
}

function parse_url_params (url) {
	var get_start = url.indexOf("?") + 1;
	var get_end = url.indexOf("#") + 1 || url.length + 1;
	var query = url.slice(get_start, get_end - 1);
	var pairs = query.replace(/\+/g, " ").split("&");
	var params = {};
	var i, n, v, nv;

	if (query === url || query === "")
		return;

	for (i = 0; i < pairs.length; i++) {
		nv = pairs[i].split("=", 2);
		n = decodeURIComponent(nv[0]);
		v = decodeURIComponent(nv[1]);

		if (!params.hasOwnProperty(n))
			params[n] = [];
		params[n].push(nv.length === 2 ? v : null);
	}

	return params;
}