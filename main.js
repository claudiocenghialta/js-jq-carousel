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
        $('.nav i').click(
            /*al click sul nav devo rendere attivi 
            quel nav e la relativa immagine*/
            clickNav
        )
    }
    
);


//***************FUNZIONI*****************

//funzione immagine successiva
function nextImg() {
    var imgActive = $('.images img.active');
    var navActive = $('.nav i.active');
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

//funzione per click su nav
function clickNav () {
    var navSelected = $(this);
    //metto classe active al selezionato e la tolgo ai fratelli
    if (navSelected.hasClass('active')==false){
        navSelected.siblings().removeClass('active');
        navSelected.addClass('active');
    }
    //trovo la posizione del nav selezionato 
    var indiceNav = navSelected.index()
    //metto classe active all'immagine nella stessa posizione del nav e la tolgo alle altre
    var imgSelected = $('.images img').eq(indiceNav);
    if (imgSelected.hasClass('active')==false){
        imgSelected.siblings().removeClass('active');
        imgSelected.addClass('active');
    }
}