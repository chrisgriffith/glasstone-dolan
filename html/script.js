window.onload = function() {
	if (window.history) {
		let closeLinks = document.querySelectorAll('a.close');
		for (let cLink of closeLinks) {
			cLink.addEventListener('click',fncloser);
		}
	}
}

function fncloser() {
	let caller = '#' + this.parentElement.getAttribute('id');
	let fragID = window.location.hash;
	if (caller == fragID) window.history.back();
}
