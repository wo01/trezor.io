$(document).ready(function () {
    var coins = [];

    var getResult = function(input) {
        if (input === 'in progress') return 'Soon';
        if (input === 'yes') return '<img src="/static/images/coins/check.svg" alt="">';
        return '-'
    };

    var getCoinCount = function(ob) {
        return ob.t1_coins > ob.t2_coins ? ob.t1_coins : ob.t2_coins
    };

    var stringToColour = function(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    };

    $.getJSON("https://raw.githubusercontent.com/trezor/trezor-common/master/coins_details.json",function(result){

        $('#all-coins').html('(' + getCoinCount(result.info) + ')');

        $.each(result.coins, function(i, field){
            coins.push(field);
        });
        coins.sort(function(a, b){
            var nameA=a.name.toLowerCase(),
                nameB=b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        coins.sort(function(a, b){return b.marketcap_usd - a.marketcap_usd});
        $.each(coins, function(i, e){
            var wrapper = $('<tr id="'+e.shortcut+'"/>');
            wrapper.append($('<th scope="row">'+ (i+1) +'</th>')); // logo
            wrapper.append($('<th scope="row" title="$'+e.marketcap_usd.toLocaleString()+'">' + e.name + ' (' +e.shortcut+ ')</th>'));
            wrapper.append($('<td>'+getResult(e.t1_enabled)+'</td>'));
            wrapper.append($('<td>'+getResult(e.t2_enabled)+'</td>'));
            var links = $('<td class="hidden-sm-down" />');
            var length = Object.keys(e.links).length;
            $.each(e.links, function(title, link){
                length--;
                var separator = (length < 1) ? '' : ', ';
                links.append('<a href="'+link+'" rel="nofollow noopener noreferrer">'+title+'</a>' + separator);
            });
            wrapper.append(links);
            $('#content').append(wrapper);
        });
        var hash = window.location.hash;
        if (typeof hash !== "undefined" && hash.length !== 0) {
            if ( $(hash).length ) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 600);
            }
        }
    });
});