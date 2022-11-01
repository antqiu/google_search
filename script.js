const button = document.getElementById('lucky');

window.onload = function() {
    button.onclick = function() {
        var form = document.getElementById('searches');
        form.value = form.action + '?q=' + document.getElementById('search_bar').value + '&btnI=I%27m+Feeling+Lucky&source=hp';
        //alert(form.value);
        //https://www.google.com/search?q=hello&btnI=I%27m+Feeling+Lucky&source=hp  
        window.open(form.value, "_self");
    }
}
