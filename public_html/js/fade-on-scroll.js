/* 
fade-on-scroll.js
Author: Therese Levin
Created: October 2018
*/ 

//Lägga in i en function så vi kan kalla på den senare


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

//När det scrollar, då aktiveras det
$(document).scroll(function(){
    setAlpha(calcAlpha());
});



//console.log("Du är " + $(document).scrollTop() + " från toppen");