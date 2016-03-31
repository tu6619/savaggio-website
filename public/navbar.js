document.addEventListener(() => {
  document.addEventListener('click', (e) => {
    if (e === document.getElementById('fixedbar') || e === document.getElementById('navigation')) {
      e.preventDefault()
    }
  })
  // $('#navigation a, #fixedbar a').on('click', function(e) {
  //   e.preventDefault();
  // });

  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();

    if(scrolltop >= 215) {
      $('#fixedbar').fadeIn(250);
    }

    else if(scrolltop <= 210) {
      $('#fixedbar').fadeOut(250);
    }
  });
});
