(function() {


/**
* @name scrollToLink
* @desc to create a scrolling effect on links
*/
function scrollToLink() {
      const root = $("html, body");
      $(".mainNavLink, .linkToNav").on("click", function(e){
        // disabling default behaviour for click events on our links
        let target = e.target.getAttribute("href");
        if (target !== 'blog.html') {
        e.preventDefault();
      // animating whole website
            root.animate(
              {
              "scrollTop" : $(target).offset().top -10
          },
            600
          );
        };
    });

  };// scrollToLink

/**
* @name hideDiv
* @desc show and hide the back to top button depending on the scrolling position
*/
    const hideDiv = function(){
      const duration = 300;
      const topOfDiv1 = $(".portfolio-container").offset().top;
      $(window).scroll(function(){
        if($(this).scrollTop() > 500){
          $('.toNav').fadeIn(200);
        } else {
          $('.toNav').fadeOut(200);
        }
      });//scroll event
    };// hideDiv






//init function

  const init = function(){
    scrollToLink();
    hideDiv();
  };//init
init();
}());
