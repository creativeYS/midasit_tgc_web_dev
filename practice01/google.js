function onSearch() {
    var query = document.getElementById("text_box").value;
    if (query.trim() !== "") { // 검색어가 비어 있지 않은 경우에만 검색 실행
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
}

function onNotSupport() {
    alert("This is not supported.");
}

window.onload = function () {
    var searchBox = document.getElementById("text_box");
    searchBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            onSearch();
        }
    });
    var searchButton = document.getElementsByClassName("search_button")[0];
    searchButton.addEventListener("click", function() {
        onSearch();
    });
    var feelingButton = document.getElementsByClassName("search_button")[1];
    feelingButton.addEventListener("click", function() {
        onNotSupport();
    });

    var gmailButton = document.getElementsByClassName("nav_text_box")[0];
    gmailButton.addEventListener("click", function() {
        onNotSupport();
    });
    var imageButton = document.getElementsByClassName("nav_text_box")[1];
    imageButton.addEventListener("click", function() {
        onNotSupport();
    });
}