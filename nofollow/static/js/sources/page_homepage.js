/* our code */
$(document).ready(function () {

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

    $('.switcher').click(function (e) {
        e.preventDefault();
        $('.switcher.active').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
        var newSrc = $(this).data('video');
        $('#interface-video').fadeOut('slow', function() {
            var video = document.getElementById('interface-video');
            var sources = video.getElementsByTagName('source');
            sources[0].src = getVideoUrl('mp4', newSrc); //mp4 /static/video/MP4/wallet.mp4
            sources[1].src = getVideoUrl('ogv', newSrc); //ogv
            sources[2].src = getVideoUrl('webm', newSrc); //webm
            video.load();
            $('#interface-video').fadeIn('slow');
        });
    });

    function getVideoUrl(type, name) {
        if (type === 'mp4') return 'https://trezor.io/nofollow/static/video/mp44/'+name+'.mp4';
        if (type === 'ogv') return 'https://trezor.io/nofollow/static/video/ogv/'+name+'.mp4';
        return 'https://trezor.io/nofollow/static/video/webm/'+name+'.mp4';
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
