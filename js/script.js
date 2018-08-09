(function() {


/**
* @name scrollToLink
* @desc to create a scrolling effect on links
*/
const currentUrl = $(location).attr('href');
console.log(currentUrl);
const blogPageUrl = 'file:///Users/James/Documents/My%20Documents/Training%20Dragon/Courses/WD_2018_04_16/Web%20Design%20Home%20Project/blog1.html';
const jqueryEffect = function(){
  $(".mainNavLink, .linkToNav").on("click", function(e){

    // disabling default behaviour for click events on our links
    e.preventDefault();
    let target = e.currentTarget.getAttribute("href");
    console.log(target);
   // animating whole website
     $("html, body")
      .animate(
        {
          "scrollTop" : $(target).offset().top -10
        },
        600
      );
     });//on click

}
  const scrollToLink = function(){
    //if not on blog page, select links from nav and link from other nav and apply jquery effect. Else if on blog only apply the jquery effect on the back to top link
  if(currentUrl !== blogPageUrl){
    jqueryEffect();
}else{
  $(".linkToNav").on("click", function(e){

    // disabling default behaviour for click events on our links
    e.preventDefault();
    let target = e.currentTarget.getAttribute("href");
    console.log(target);
   // animating whole website
     $("html, body")
      .animate(
        {
          "scrollTop" : $(target).offset().top -10
        },
        600
      );
     });//on click


   }; //end of if else statement


};// scrollToLink





/**
* @name hideDiv
* @desc show and hide the back to top button depending on the scrolling position
*/
    const hideDiv = function(){
      const duration = 300;
      const topOfDiv1 = $(".portfolio-container, .courses").offset().top;
      console.log('portfolio');
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


window.addEventListener("load", init);

}()); //end of Iife
