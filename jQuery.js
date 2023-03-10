$(document).ready(function () {
    let i = 0;

    $("#btnClick").click(function () {
      $('.for-nav-hide').toggle()
      $('.for-hide').toggle(1000 )
      
      if (i == 0) {
        $("#btnClick").html(
          '<span type="button" class="btn-close" aria-label="Close"></span>'
        );
        $('body').css('background','#fffef2')
        
        
        $('.for-navbar-hamburger').css("display","flex")

        i++;
      } else {
        $("#btnClick").html(
          '<span class="navbar-toggler-icon "  ></span>'
        );
        $("#btnShow").html(
          '<span type="button" class="btn-close" aria-label="Close"></span>'
        ).fadeIn(1000)
        $('.for-navbar-hamburger').css("display","none")
        $('body').css('background','#f9fafa ')
       

        i = 0;
      }
    });
    $('.pro').click(function(){
      window.location.href = "./project.html"
    })
    $('#resume,.res').click(function(){
      window.location.href = "https://drive.google.com/file/d/1tNrebHmUXhoo0ICrCQDalpE4963T5Sl4/view?usp=sharing"
    })
    $('.con').click(function(){
      window.location = "./contact.html"
    })
    $('.submit').click(function(){
     
      alert("sent Successfully")
    

    
    })

    
    
  });
