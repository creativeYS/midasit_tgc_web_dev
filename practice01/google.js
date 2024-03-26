function onSearch() {
    var search = document.getElementById('SearchString').value;

    if (search) 
    {
        window.location.href = 'https://www.google.com/search?q=' + search;
    }
    else
    {
        alert('검색어를 입력해주세요.');
        return;
    }
}

function handleKeyPress(event) {

    if (event.keyCode === 13) 
    {
        onSearch();
    }
}

function onClickLucky()
{
    var search = document.getElementById('SearchString').value;

    window.location.href = 'https://doodles.google';
}