function onSearch() {
    var searchText = document.getElementById("text_box").value;
    window.location.href='http://google.com/search?q=' + searchText;
}

function onLucky() {
    alert('Lucky!');
}

window.onload = function () {
    var textBox = document.getElementById("text_box");
    textBox.addEventListener('keydown', function(e){
        if(e.code == 'Enter'){
            onSearch();
        }
    });

    var btnSearch = document.getElementById("google_search_button");
    btnSearch.onclick = onSearch;

    var btnLucky = document.getElementById("lucky_button");
    btnLucky.onclick = onLucky;
}