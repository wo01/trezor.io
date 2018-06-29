/* our code */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $.fn.shuffle = function () {
        var allElems = this.get(),
            getRandom = function (max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function () {
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });
        this.each(function (i) {
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };

    function scrolled(event) {
        var scrollPos = $(document).scrollTop();
        $('.scrollTo').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.scrollTo').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }

    $('.scrollTo').on('click touchstart', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            scrollTop: $target.offset().top + 20
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.endor').click(function() {
        if ($(this).hasClass('active')) {
            return;
        } else {
            $('.endor.active').removeClass('active');
            $(this).addClass('active');
            $('#quote-content').html($(this).data('quote'));
        }
    });

    var vid = $('.wallet-video .video.show video')[0];
        vid.load();
        vid.onloadeddata = function() {
            var h = $('.wallet-video .video.show').height();
            $('.wallet-video').height(h);
        }

    $('.switcher').click(function (e) {
        e.preventDefault();
        var newSrc = $(this).data('video');

        $('.switcher.active').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
        $('.wallet-video .video').removeClass('show');
        $('.wallet-video .video video').each(function(i, el) {
            el.pause();
        });
        
        setTimeout(function() {
            $('.wallet-video .video[data-target="' + newSrc + '"]').addClass('show');
            setTimeout(function() {
                $('.wallet-video .video[data-target="' + newSrc + '"] video')[0].play();    
            }, 500);
        }, 500);
    });


    /* Google Analytics */
    $('#HP_Header_GetTrezor').click(function (e) {
        dataLayer.push({
            'event': 'InteractionUI',
            'eventCategory': 'Button',
            'eventAction': 'Click',
            'eventLabel': 'HP_Header_GetTrezor',
            'eventValue': ''
        });            
    });
    $('#HP_Pick_GetTrezorOne').click(function (e) {
        dataLayer.push({
            'event': 'InteractionUI',
            'eventCategory': 'Button',
            'eventAction': 'Click',
            'eventLabel': 'HP_Pick_GetTrezorOne',
            'eventValue': ''
        });                      
    });
    $('#HP_Pick_GetTrezorT').click(function (e) {
        dataLayer.push({
            'event': 'InteractionUI',
            'eventCategory': 'Button',
            'eventAction': 'Click',
            'eventLabel': 'HP_Pick_GetTrezorT',
            'eventValue': ''
        });         
    });
    $('#HP_Safe_GetToday').click(function (e) {
        dataLayer.push({
            'event': 'InteractionUI',
            'eventCategory': 'Button',
            'eventAction': 'Click',
            'eventLabel': 'HP_Safe_GetToday',
            'eventValue': ''
        });               
    });
    $('.HP_Footer_Newsletter').click(function (e) {                
        dataLayer.push({
            'event': 'InteractionForm',
            'eventCategory': 'Form',
            'eventAction': 'Submit',
            'eventLabel': 'HP_Footer_Newsletter',
            'eventValue': ''
        });
    });
    /* End Google Analytics */

    function getVideoUrl(type, name) {
        if (type === 'mp4') return '/static/video/mp4/'+name+'.mp4';
        if (type === 'ogv') return '/static/video/ogv/'+name+'.mp4';
        return '/static/video/webm/'+name+'.mp4';
    }

    function bindStickyHandler() {
        // @todo config
        var scrollPos = $(window).scrollTop();
        var startPos = $('#comparison-table thead').offset().top;
        var endPos = $('#comparison-table-footer').offset().top;

        if (scrollPos > startPos && endPos > scrollPos) {
            $('#comparison-header-sticky').addClass('active')
        } else {
            $('#comparison-header-sticky').removeClass('active')
        }
    }

    $(window).scroll(function (event) {
        bindStickyHandler();
    });

    var screenWidth = $(window).width();
    if (screenWidth < 768){
        $("#jumbo-video").removeAttr('autoplay');
        $("#jumbo-video").attr('preload',"none");

    } else {
        $("#jumbo-video").attr('autoplay');
    }

    function onPageLoaded() {
        bindStickyHandler();
    }

    // init
    onPageLoaded();
});
