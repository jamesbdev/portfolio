(function() {


/**
* @name scrollToLink
* @desc to create a scrolling effect on links
*/
function scrollToLink() {
      const root = $("html, body");

      $(".mainNavLink, .linkToNav").on("click", function(e){
        // disabling default behaviour for click events on our links
        e.preventDefault();
        //console.log(e);
        let target = e.target.getAttribute("href");
        // console.log(target);

        // animating whole website
      root.animate(
            {
              "scrollTop" : $(target).offset().top -10
            },
            600
          );

      });

    }// scrollToLink


    const offset = 500;
    const duration = 300;
    const topOfDiv1 = $(".portfolio-container").offset().top;

    const hideDiv = function(){
      // $(".toNav").hide();

      // const portfolio = $('.portfolio-container');
      // console.log(portfolio);

      $(window).scroll(function(){
        if($(this).scrollTop() > offset){
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
