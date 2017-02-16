$(document).ready(function(){
// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 90});
 // Add smooth scrolling on all links inside the navbar
    $("nav a, .btn").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -30
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
$(function () {
    var currentHash = "#initial_hash"
    $(document).scroll(function () {
        $('section').each(function () {
            var top = window.pageYOffset;
            var distance = top - ($(this).offset().top -30);
            var hash = $(this).attr('id');
            // 30 is an arbitrary padding choice, 
            // if you want a precise check then use distance===0
            if (distance < 10 && distance > -10 && currentHash != hash) {
                window.location.hash = (hash);
                currentHash = hash;
            }
        });
    });
});
