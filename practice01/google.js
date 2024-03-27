function onSearch() {
    var text_box = document.getElementById('text_box');
    var searchURL = "https://www.google.com/search?q=" + text_box.value;
    window.location = searchURL;
}

window.onload = function () {
    var google_search_button = document.getElementById('google_search_button');
    google_search_button.onclick = onSearch;
}