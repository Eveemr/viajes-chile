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
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
    });

    //tooltips
    $('[data-toggle="tooltip"]').tooltip()

    //Esconder y mostrar cards
    $("#carta").click(function(){
        $('#contenido').toggle(500);
    });

    $("#carta2").click(function(){
        $('#contenido2').toggle(500);
    });

    $("#carta3").click(function(){
        $('#contenido3').toggle(500);
    });    

    $("#carta4").click(function(){
        $('#contenido4').toggle(500);
    });

});