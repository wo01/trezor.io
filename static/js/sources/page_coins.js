$(document).ready(function () {
    var coins = [];

    var getResult = function(input) {
        if (input === 'in progress') return 'Soon';
        if (input === 'yes') return '<img src="/static/images/coins/check.svg" alt="">';
        return '-'
    };

    $.getJSON("https://raw.githubusercontent.com/trezor/trezor-common/master/coins_details.json",function(result){
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
        var allCoins = coins.length;
        $('#all-coins').html('(' + allCoins + ')');
        $.each(coins, function(i, e){
            var wrapper = $('<tr id="'+e.shortcut+'"/>');
            var links = $('<td scope="row" />');
            wrapper.append($('<th scope="row">'+ (i+1) +'</th>')); // logo
            wrapper.append($('<th scope="row">' + e.name + ' (' +e.shortcut+ ')</th>'));
            wrapper.append($('<td>'+getResult(e.t1_enabled)+'</td>'));
            wrapper.append($('<td>'+getResult(e.t2_enabled)+'</td>'));
            if (e.marketcap_usd === 0) {
                wrapper.append($('<td>-</td>'));
            } else {
                wrapper.append($('<td>$'+e.marketcap_usd.toLocaleString()+'</td>'));
            }
            var length = Object.keys(e.links).length;
            $.each(e.links, function(title, link){
                length--;
                var separator = (length < 1) ? '' : ', ';
                links.append('<a href="'+link+'">'+title+'</a>' + separator);
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