
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 6,            
        margin: 10,         
        loop: true,       
        autoplay: true,    
        autoplayTimeout: 2000,
        dots: false,         // Disable navigation dots
        responsive: {
          0: {
            items: 2       
          },
          768: {
            items: 3        
          },
          1024: {
            items: 6       
          }
        }
      })
  });

