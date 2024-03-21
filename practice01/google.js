function not_yet_developed(){
  alert("not yet developed ")
}

// var gmailElement = document.getElementById("gmail");
var gmailElement = document.querySelector(".HeaderBox#gmail");
gmailElement.addEventListener("click", function() {
  // 클릭했을 때 실행될 함수 내용을 작성합니다.
  alert("Gmail을 클릭했습니다!");
});

function on_search() {
  var input_val = document.getElementById("SearchBox").value;
  var search_URL = "https://www.google.com/search?q=" + input_val;
  window.open(search_URL);

  document.getElementById("SearchBox").value="";
}

function is_enter(event) {  
  if (event.keyCode === 13) on_search();
}

window.onload = function () {
}