$(document).ready(function () {
    var coins = [],
        get_result = function (input) {
            if (input === 'soon') return 'Soon';
            if (input === 'yes') return '<img src="/static/images/coins/check.svg" alt="">';
            return '-'
        },
        coin_count = function (ob) {
            return ob.t1_coins > ob.t2_coins ? ob.t1_coins : ob.t2_coins
        },
        url_domain = function (data) {
            var a = document.createElement('a');
            a.href = data;
            return a.hostname;
        },
        get_logo = function (ob) {
            if (typeof ob.links.Homepage !== 'undefined') {
                return ('<span class="logo-wrapper"><img class="logo lazy" data-name="' + ob.name + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="//logo.clearbit.com/' + url_domain(ob.links.Homepage) + '?size=64"></span>');
            }
            return ('<span class="logo-wrapper errored" style="background-color:' + string_to_color(ob.name) + '">' + ob.name.split('')[0] + '</span>')
        },
        get_search_results = function (str) {
            $("tr.coin").each(function () {
                if (str.length > 1) {
                    if ($(this).text().search(new RegExp(str, "i")) < 0) {
                        $(this).fadeOut();
                    } else {
                        $(this).show();
                    }
                } else {
                    $(this).show();
                }
            });
        },
        string_to_color = function (str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            var color = '#';
            for (var i = 0; i < 3; i++) {
                var value = (hash >> (i * 8)) & 0xFF;
                color += ('00' + value.toString(16)).substr(-2);
            }
            return color;
        };

    $('#search').keyup(function (e) {
        var valThis = $(this).val();
        if (e.keyCode === 27) {
            $('#search').blur();
        }
        get_search_results(valThis.toLowerCase());
    });

    $.getJSON("https://raw.githubusercontent.com/trezor/trezor-common/master/coins_details.json", function (result) {

        $('#all-coins').html('(' + coin_count(result.info) + ')');
        $.each(result.coins, function (i, field) {
            if (typeof(field.hidden ) === 'undefined') {
                coins.push(field);
            }
        });
        coins.sort(function (a, b) {
            var nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        coins.sort(function (a, b) {
            return b.marketcap_usd - a.marketcap_usd
        });

        $.each(coins, function (i, e) {
            var wrapper = $('<tr class="coin" data-href="./#' + e.shortcut + '" id="' + e.shortcut + '"/>');
            wrapper.append($('<td>' + get_logo(e) + '</td>'));
            wrapper.append($('<td title="$' + e.marketcap_usd.toLocaleString() + '"><strong>' + e.name + '</strong> (' + e.shortcut + ')</td>'));
            wrapper.append($('<td>' + get_result(e.t1_enabled) + '</td>'));
            wrapper.append($('<td>' + get_result(e.t2_enabled) + '</td>'));
            var links = $('<td class="hidden-sm-down" />');
            var length = Object.keys(e.links).length;
            $.each(e.links, function (title, link) {
                length--;
                var separator = (length < 1) ? '' : ', ';
                links.append('<a href="' + link + '" rel="nofollow noopener noreferrer">' + title + '</a>' + separator);
            });
            $('#loader').hide();
            wrapper.append(links);
            $('#content').append(wrapper);
        });
        var hash = window.location.hash;
        if (typeof hash !== "undefined" && hash.length !== 0) {
            if ($(hash).length) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 600);
            }
        }
        ;

        var bLazy = new Blazy({
            selector: '.lazy',
            src: 'data-original',
            successClass: 'loaded',
            error: function (elm, msg) {
                if (msg === 'invalid') {
                    // Data-src is invalid
                    var name = $(elm).data('name');
                    var parent = $(elm).parent();
                    $(parent).addClass('errored');
                    $(parent).html(name.split('')[0]);
                    $(parent).css("background-color", string_to_color(name));
                }
            },
            offset: 200
        });
        $(window).scroll(function (event) {
            bindStickyHandler();
        });
        $("tr.coin").click(function () {
            window.location = $(this).data("href");
        });
    });
    function bindStickyHandler() {
        // @todo config
        var scrollPos = $(window).scrollTop();
        var startPos = $('#content').offset().top;
        var endPos = $('#subscribe').offset().top;

        if (scrollPos > startPos && endPos > scrollPos) {
            $('#table-head').addClass('sticky');
        } else {
            $('#table-head').removeClass('sticky');
        }
    }
});