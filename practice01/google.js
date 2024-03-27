function onSearch() {
if (window.event.keyCode == 13) {
   let searchValue = document.getElementById('search-input').value.trim();
location.href = "https://google.com/search?q=" + searchValue;
     }
}

function OnClickButton(){
alert('clicked');

}