$(document).ready(
    function(){
        $('.next').click(
            /*al click sulla freccia next eseguo funzione
             per passare alla img successiva*/
            nextImg
        )
        $('.prev').click(
            /*al click sulla freccia prev eseguo funzione
             per passare alla img precedente*/
            prevImg
        )
    }
    
);


//FUNZIONI

//funzione immagine successiva
function nextImg() {
    var imgActive = $('.images img.active');
    var navActive = $('.nav i.active');
    console.log(imgActive, navActive);
    imgActive.removeClass('active');
    navActive.removeClass('active');
    if (imgActive.hasClass('last')) {
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        imgActive.next().addClass('active');
        navActive.next().addClass('active');
    }
}

//funzione immagine precedente
function prevImg() {
    var imgActive = $('.images img.active');
    var navActive = $('.nav i.active');
    console.log(imgActive), navActive;
    imgActive.removeClass('active');
    navActive.removeClass('active');
    if (imgActive.hasClass('first')) {
        $('.images img.last').addClass('active');
        $('.nav i.last').addClass('active');
    } else {
        imgActive.prev().addClass('active');
        navActive.prev().addClass('active');
    }
}