$(function(){
    // -----hambarger menu start--------------
    function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"});
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
    
    $("#hamburger-menu").click(function(){
      $(".slide-bar").toggleClass("slide-menu");
    });
    // -----hambarger menu end--------------
    $('#video-play').on('click', function(e){
        e.preventDefault();
        $('#video-overlay').addClass('open');
        $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/RsFGoETBNy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });
      
      $('.video-overlay, .video-overlay-close').on('click', function(e){
        e.preventDefault();
        close_video();
      });
      
      $(document).keyup(function(e){
        if(e.keyCode === 27) { close_video(); }
      });
      
      function close_video() {
        $('.video-overlay.open').removeClass('open').find('iframe').remove();
      };

      $('.person-wrepper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade:true,
        arrows:false,
        speed:2000,
        pauseOnHover:false,
        autoplaySpeed: 2000,
        asNavFor:".text-wrepper"
      });
      $('.text-wrepper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows:false,
        dots:true,
        speed:2000,
        pauseOnHover:false,
        autoplaySpeed: 2000,
        asNavFor:".person-wrepper"
      });
      // ===========back to top==========
      $(".back-to-top") .on("click",function(){
        $("html,boddy") .animate({scrollTop:0},1000)
      });

      $(window).on ('scroll',function(){
        var scroll=$(this).scrollTop()
        if(scroll > 50) {
          $(".back-to-top") .fadeIn(500)
        }
        else{
          $('.back-to-top') .fadeOut(500)
        }
        if(scroll>50){
          $('.navbar').addClass('sticke-menu')
      }
        else{
          $('.navbar').removeClass('sticke-menu')
        }
      })
      // ===========back to top==========
      // ============nav active js============
      $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
      });
      // ============nav active js============
      // ============side bar part============
      $('.show').on('click',function(){
        $('.slide-bar').css('left','0px')
      });
      $('.close').on('click',function(){
        $('.slide-bar').css('left','-100%')
      });
      $('.nav-link').on('click',function (){
        $('.slide-bar').css({left:'-100%'});
    });
      // ============side bar part============
});