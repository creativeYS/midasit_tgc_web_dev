function onClickSearch() {
	const searchInput = document.getElementById('input').value;
	const searchURL = 'https://www.google.com/search?q=' + searchInput;
	window.location.href = searchURL;
}

function onClickLucky() {
	window.location.href = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg';
}

function onClickGmail() {
	window.location.href = 'https://mail.google.com/';
}

function onClickImage() {
	window.location.href = 'https://www.google.com/imghp';
}

window.onload = function () {
	// Enter 키 입력 이벤트
	document.getElementById("input").addEventListener("keyup", function(event) {
		if (event.key === "Enter") {
			onClickSearch();
		}
	});
}