
var count;
function sidenavslide()
{
    
    var menu = document.getElementById("sidenavid");
    var sidebutton = document.getElementById("sidelineid").getElementsByTagName("I")[0];
    if(count==0)
    {
        menu.style.left = 0;
        sidebutton.style.transform = "rotate(180deg)";
        count = 1;
    }
    else if(count==1)
    {
        menu.style.left = "-25vw";
        sidebutton.style.transform = "rotate(0deg)";
        count = 0;
    }
    else
    {
        menu.style.left = 0;
        sidebutton.style.transform = "rotate(180deg)";
        count = 1;
    }
}