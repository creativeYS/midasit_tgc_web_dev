function onSearch() {
    var searchText = document.getElementById("text_box").value;
    window.location.href='http://google.com/search?q=' + searchText;
}

function onClickedGoogleImg() {
    location.href = location.href;
}

function onClickedGmail() {
    window.location.href='https://mail.google.com';
}

function onClickedImages() {
    window.location.href='https://images.google.com';
}

function onLucky() {
    alert('Lucky!');
}

window.onload = function () {
}