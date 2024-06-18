function onClickSearch() {
	const searchInput = document.getElementById('input').value;
	const searchURL = 'https://www.google.com/search?q=' + searchInput;
	window.location.href = searchURL;
}

function onClickLucky() {
	window.location.href = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg';
}

window.onload = function () {
	// Google Search 버튼 클릭 이벤트
	document.getElementById("link_search").addEventListener("click", onClickSearch);
	// Enter 키 입력 이벤트
	document.getElementById("input").addEventListener("keyup", function(event) {
		if (event.key === "Enter") {
			onClickSearch();
		}
	});

	document.getElementById("link_lucky").addEventListener("click", onClickLucky);
}