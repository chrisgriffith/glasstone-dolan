window.onload = function() {
	if (window.history) {

		let fnoteLinks = document.querySelectorAll('a[href^="#fnote"]');
		let closeLinks = document.querySelectorAll('a.close');

		for (let fnLink of fnoteLinks) {
			fnLink.addEventListener('click',fncloser);
		}
		for (let cLink of closeLinks) {
			cLink.addEventListener('click',fncloser);
		}
		window.addEventListener('keyup',keyClose);

		function fncloser() {
			let fragID = window.location.hash;
			if (fragID == '') return;
			let caller = '#' + this.parentElement.getAttribute('id');
			if (caller == '#null') caller = this.getAttribute('href');
			if (caller == fragID) window.history.back();
		}
		
		function keyClose(e) {
			if (window.location.hash.search('fnote') < 0) return;
			if (e.key == "Escape") window.history.back();
		}

	}
}
