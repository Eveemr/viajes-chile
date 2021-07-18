$(function(){
    //Smooth scroll
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });

    //Cambio de color al hacer Scroll
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 700);
    });

    //tooltips
    $('[data-toggle="tooltip"]').tooltip()

    //Esconder y mostrar cards
    $("#carta").click(function(){
        $('#contenido').slideToggle(500);
    });

    $("#carta2").click(function(){
        $('#contenido2').slideToggle(500);
    });

    $("#carta3").click(function(){
        $('#contenido3').slideToggle(500);
    });    

    $("#carta4").click(function(){
        $('#contenido4').slideToggle(500);
    });

    //popovers
    $('[data-toggle="popover"]').popover()
});