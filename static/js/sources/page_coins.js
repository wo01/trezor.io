$(document).ready(function () {
    var coins = [];
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
        $.each(coins, function(i, e){
            var wrapper = $('<tr />');
            var links = $('<td scope="row" />');
            wrapper.append($('<th scope="row">'+ (i+1) +'</th>')); // logo
            wrapper.append($('<th scope="row">' + e.name + ' (' +e.shortcut+ ')</th>'));
            if (e.t1_enabled === 'yes') {
                wrapper.append($('<td><img src="/static/images/coins/check.svg" alt=""></td>'));
            } else {
                wrapper.append($('<td>-</td>'));
                console.warn('e ', e);
            }
            if (e.t2_enabled === 'yes') {
                wrapper.append($('<td><img src="/static/images/coins/check.svg" alt=""></td>'));
            } else {
                wrapper.append($('<td>-</td>'));
                console.warn('e ', e);
            }
            if (e.marketcap_usd === 0) {
                wrapper.append($('<td>-</td>'));
            } else {
                wrapper.append($('<td>$'+e.marketcap_usd.toLocaleString()+'</td>'));
            }
            $.each(e.links, function(title, link){
                links.append('<a href="'+link+'">'+title+'</a>');
            });
            wrapper.append(links);
            $('#content').append(wrapper);
        });

    });
});