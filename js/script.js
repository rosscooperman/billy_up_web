$('#slideshow').cycle({
    fx: 'scrollHorz',
    speed: 200,
    timeout: 5000,
    pause: 1,
    cleartype: true,
    cleartypeNoBg: true,
    startingSlide: 5,
    pager: '#slideshow-nav',
    updateActivePagerLink: function(pager, currSlideIndex) { 
        $(pager).find('li').removeClass('active') 
            .filter('li:eq('+currSlideIndex+')').addClass('active'); },
    pagerAnchorBuilder: function(idx, slide) {
        return '#slideshow-nav li:eq(' + (idx) + ')';
    }
});

$('#slideshow-nav li').click(function() { 
    $('#slideshow').cycle('pause');
    setTimeout(function(){
      $('#slideshow').cycle('resume');
    }, 5000);
});
