function showHide(nav, hide1, hide2, hide3, hide4, hide5) {
    if (document.getElementById(nav, hide1, hide2, hide3, hide4, hide5)) { 
        var obj = document.getElementById(nav, hide1, hide2, hide3, hide4, hide5); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
    }     
}
var modal = document.getElementById('modal');
var close = document.getElementById('close');
window.onload = function () {
    setTimeout(function() {
        modal.style.display = 'inline';
    }, 30000)
}
close.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});