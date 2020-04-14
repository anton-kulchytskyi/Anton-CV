function showHide(nav, hide1, hide2, hide3, hide4, hide5) {
    if (document.getElementById(nav, hide1, hide2, hide3, hide4, hide5)) { 
        var obj = document.getElementById(nav, hide1, hide2, hide3, hide4, hide5); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
    }     
}
