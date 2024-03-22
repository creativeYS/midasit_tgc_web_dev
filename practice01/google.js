window.onload = function()
{
  document.getElementById('button1').onclick = on_search;
  document.getElementById('button2').onclick = not_yet_developed;

  var HeaderElements =  document.querySelectorAll('.HeaderBox');
  for (const Element of HeaderElements){
    Element.addEventListener("click", not_yet_developed);
  }
};

function not_yet_developed(){
  alert("not yet developed ")
}

function on_search() {
  var input_val = document.getElementById("SearchBox").value;
  var search_URL = "https://www.google.com/search?q=" + input_val;
  window.open(search_URL);

  document.getElementById("SearchBox").value="";
}

function is_enter(event) {  
  if (event.keyCode === 13) on_search();
}

