var table = document.getElementById("load_table");

if (table != null) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[0].onclick = function () {
			load(this);
		}

		table.rows[i].cells[1].onclick = function () {
			open_preview(this);
		}
	}
}

function load(plan) {
	alert(plan.innerHTML);
}

function open_preview(plan) {
	document.getElementById("preview").style.width = "100%";
}

function close_preview() {
	document.getElementById("preview").style.width = "0%";
}