COINMARKET_SYMBLOS = {
    'ROCK': 'RKT',
    'CryptoCarbon': 'CCRB',
    'DATAcoin': 'DATA',
    'BLX (Bullion)': 'CBX',
    'CAT (BitClave)': 'CATC',
    'CAT (Blockcat)': 'CAT',
    'CCC (ICONOMI)': 'CCCI',
    'CC3': 'COAL',
    'CoinCrowd': 'CRC',
    'CTG': 'GLT',
    'APT': 'AIX',
    'DROP (dropil)': 'DROPL',
    'BLX (Iconomi)': 'ICN',
    'LINK (Chainlink)': 'LINK',
    'LNC-Linker Coin': 'LNC',
    'BTL (Battle)': 'BTL',
    'BTL (Bitlle)': 'BTLL',
    'CATs (BitClave)_Old': 'BTLLO',
    'CCC (CryptoCrashCourse)': 'CCC',
    '$FIXY NETWORK': 'FXY',
};

$(document).ready(function () {
    new ClipboardJS('.clipboard');
    
    var coins = [],
        bLazy,
        init = function() {
            initSearch();
            initClipboard();
            scrollToHash();
            sizeElements();
            $(window).scroll(function (event) {
                bindStickyHandler();
            });
            $(window).resize(sizeElements);
            $('[data-toggle="tooltip"]').tooltip();
            initImages();
        },
        initSearch = function() {
            $('#search').keyup($.debounce(150, set_search));
        },
        initClipboard = function() {
            $('a.clipboard').click(function (e) {
                e.preventDefault();
                
                var hash = $(e.currentTarget).attr('href').substring(1);
                var scrollTop = $('tr#' + hash).offset().top;
                
                $('tr.coin').removeClass('active');
                $('tr#' + hash).addClass('active');
                
                $('html, body').animate({
                    scrollTop: scrollTop - 48
                }, 600, function () {
                    if (history.pushState) {
                        history.pushState(null, null, '#' + hash);
                    } else {
                        window.location.hash = '#' + hash;
                    }
                });
            });
        },
        scrollToHash = function() {
            var hashlink = window.location.hash;
            if (typeof hashlink !== "undefined" && hashlink.length !== 0 && hashlink.indexOf("test") === -1) {
                hashlink = hashlink.split('?')[0];
                if ($(hashlink).length) {
                    $(hashlink).addClass('active');
                    $('html, body').animate({
                        scrollTop: $(hashlink).offset().top - 48
                    }, 600);
                }
            }
        },
        initImages = function() {
            $.getJSON('https://api.coinmarketcap.com/v2/listings/', function (result) {
                result.data.forEach(function (item) {
                    var isChar = item.symbol.match(/[a-zA-Z0-9\-]+/g);
                    if (isChar && isChar[0] == item.symbol) {
                        var el = $('img#COIN-' + item.symbol);
                        if (el[0]) {
                            el.attr('data-original', 'https://s2.coinmarketcap.com/static/img/coins/32x32/' + item.id + '.png')
                        }
                    }
                });
                
                bLazy = new Blazy({
                    selector: '.b-lazy',
                    src: 'data-original',
                    successClass: 'loaded',
                    error: function (elm, msg) {
                        if (msg === 'missing') {
                            var clearbit = $(elm).data('clearbit');
                            if (clearbit) {
                                $(elm).removeAttr('data-clearbit');
                                $(elm).attr('data-original', clearbit);
                                bLazy.revalidate();
                            } else {
                                nameToIcon(elm);
                            }
                        }
                        if (msg === 'invalid') {
                            nameToIcon(elm);
                        }
                    },
                    offset: 200
                });
            });
        },
        nameToIcon = function(elm) {
            var name = $(elm).data('name');
            var parent = $(elm).parent();
            $(parent).html(name.split('')[0]);
            $(parent).css("background-color", string_to_color(name));
        },
        sizeElements = function() {
            $('#invisible-offset').width($('#visible-offset').width());
            $('#invisible-name').width($('#visible-name').width());
            $('#invisible-t1').width($('#visible-t1').width());
            $('#invisible-t2').width($('#visible-t2').width());
            $('#invisible-wallets').width($('#visible-wallets').width());
            $('#invisible-links').width($('#visible-links').width());
            return false;
        },
        bindStickyHandler = function() {
            var scrollPos = $(window).scrollTop();
            var startPos = $('#content').offset().top;
            var endPos = $('#subscribe').offset().top;
            
            if (scrollPos > startPos && endPos > scrollPos) {
                $('#table-head').addClass('sticky');
            } else {
                $('#table-head').removeClass('sticky');
            }
        },
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
                return 'data-clearbit="https://logo.clearbit.com/' + url_domain(ob.links.Homepage) + '?size=64"';
            }
            return false;
        },
        get_search_results = function (str) {
            var hasResults = false;
            $("tr.coin").each(function () {
                if (str.length > 1) {
                    if ($(this).text().search(new RegExp(str, "i")) < 0) {
                        $(this).fadeOut();
                    } else {
                        hasResults = true;
                        $(this).show();
                    }
                } else {
                    $(this).show();
                }
            });
            
            if (hasResults) {
                $('#noresults').hide();
            } else {
                $('#noresults').show();
            }
        },
        set_search = function (e) {
            var valThis = $(this).val();
            if (e.keyCode === 27) {
                $('#search').blur();
            }
            get_search_results(valThis.toLowerCase());
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
        },
        getWalletLinks = function (links) {
            if (links) {
                var r = [];
                $.each(links, function(title, link) {
                    r.push('<a href="' + link + '" target="_blank" rel="nofollow noopener noreferrer">' + title + '</a>');
                });
                return r.join(', ');
            } else {
                return 'No wallet, yet.';
            }
        };

    init();
    
    // test
    var test = window.location.hash;
    test = test.split('?')[1];
    if (typeof test !== "undefined" && test.length !== 0 && test === 'test') {
        console.warn('loaded remote json');

        $('#content').html('')

        $.getJSON('https://raw.githubusercontent.com/trezor/trezor-common/master/defs/coins_details.json', function (result) {
            $('#all-coins').html('(' + coin_count(result.info) + ')');

            $.each(result.coins, function (i, field) {
                if (typeof field.marketcap_usd === 'undefined') {
                    field.marketcap_usd = 0;
                }
                coins.push(field);
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
                var shortcut = e.shortcut;
                if (COINMARKET_SYMBLOS[e.shortcut]) {
                    shortcut = COINMARKET_SYMBLOS[e.shortcut];
                }
                
                var coinUrl = window.location.origin + '/coins/#' + shortcut;
                var hiddenClass = typeof(e.hidden) === 'undefined' ? ' ' : ' hidden';
                var wrapper = $('<tr class="coin' + hiddenClass + '" data-href="./#' + e.shortcut + '" id="' + shortcut + '"/>');
                var tempTitle = typeof e.marketcap_usd === 'undefined' ? " " : "$ " + e.marketcap_usd.toLocaleString();
                wrapper.append($('<td><span class="logo-wrapper"><img class="b-lazy" id="COIN-' + shortcut.toUpperCase() + '" ' + get_logo(e) + ' data-name="' + e.name + '"></span></td>'));
                wrapper.append($('<td title="' + tempTitle + '"><strong>' + e.name + '</strong> (' + e.shortcut + ') <a href="#' + shortcut + '" class="clipboard"  data-clipboard-text="' + coinUrl + '" data-toggle="tooltip" data-title="copy"><i class="fa fa-link"></i></a><span class="copied"><i class="fa fa-check-circle"></i> copied!</span></td>'));
                wrapper.append($('<td>' + get_result(e.t1_enabled) + '</td>'));
                wrapper.append($('<td>' + get_result(e.t2_enabled) + '</td>'));
                wrapper.append($('<td>' + getWalletLinks(e.wallet) + '</td>'));
                var links = $('<td class="hidden-md-down" />');
                var linkLng = Object.keys(e.links).length;
                $.each(e.links, function (title, link) {
                    linkLng--;
                    var separator = (linkLng < 1) ? '' : ', ';
                    links.append('<a href="' + link + '" rel="nofollow noopener noreferrer" target="_blank">' + title + '</a>' + separator);
                });
                $('#loader').hide();
                wrapper.append(links);
                $.debounce(150, $('#content').append(wrapper))
            });
            init();
        });
    }
});
