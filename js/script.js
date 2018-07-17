(function() {




$('a[href^="#"]').on('click', function(event){

  let target = $(this.getAttribute('href'));

  if(target.length){
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    },1000);
  }//if statement
//on click
}) // on click function






//init function

  const init = function(){

  };//init

}());
