function onSearch() {
    var search = document.getElementById('SearchString').value;

    if (search) 
    {
        window.location.href = 'https://www.google.com/search?q=' + search;
    }
    else
    {
        alert('Please enter a search string');
        return;
    }
}

function onClickLucky()
{
    var search = document.getElementById('SearchString').value;

    alert('Lucky!');
}

function handleKeyPress(event) {

    if (event.keyCode === 13) 
    {
        onSearch();
    }
}

window.onload = function () {
    onSearch();
}