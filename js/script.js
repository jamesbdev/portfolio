(function() {


/* @name scrollToLink
@desc to create a scrolling effect on links */
const scrollToLink = function(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

    }; //scrollToLink








//init function

  const init = function(){
    scrollToLink();
  };//init
init();
}());
