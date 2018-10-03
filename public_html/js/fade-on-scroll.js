/* 
fade-on-scroll.js
Author: Therese Levin
Created: October 2018
*/ 




//Stället där den ska sluta fadea
const breakpoint = $(".wrapper").width();

//Kolla hur brett webbläsarfönstret är  (viewporten)
let previousWidth = $(window).width();

selectAlphaMode(previousWidth);

$(window).resize(function() {
    let width = $(window).width();

    if ((width < breakpoint && previousWidth >= breakpoint) || (width >= breakpoint && previousWidth < breakpoint)){
        selectAlphaMode(width);
    }
    previousWidth = width;

});

// Sätt alpha till 1 eller adaptiv baserat på viewportens bredd
function selectAlphaMode(width){
    
    if (width < breakpoint){
        $(document).scroll().off();
        setAlpha(1);
    } else{
        setAlpha(calcAlpha());
        $(document).scroll(function(){
            setAlpha(calcAlpha());
        });
    }
}


function setAlpha(alpha) {
    $("nav").css("background-color" , "rgba(0, 0, 0," + alpha + ")"); //jQuery selectorn //Ändringen .css //Värdet
}

function calcAlpha (){
    //Defineria variabel för alpha värdet
    let alpha = 0;

    //Definierar variabel för hur långt det är till toppen av html dokumentet.
    let scroll = $(document).scrollTop();

    //Var vi vill att faden ska börja. px
    const fadeStart = 100;

    //Var ska faden sluta
    const fadeStop = 200;

    //Hur långt är det mellan start o stopp?
    const fadeLength = fadeStop - fadeStart;

    //Vi har tre cases, mellan 0 och fadestart, mellan fadestart och fadestop, samt från fadestop till oändligheten (och vidare)
    if (scroll < fadeStart) {
        alpha = 0;
    } else if (scroll < fadeStop) {
        alpha = (scroll - fadeStart) / fadeLength;
    } else {
        alpha = 1;
    }

    //Retunera vad alpha nu har blivit efter vår uträkning
    return alpha;
}