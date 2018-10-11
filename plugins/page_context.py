#coding:utf-8

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
    '$FIXY NETWORK': 'FXY'
}

import json
from django.template.defaulttags import register
from operator import itemgetter
from urllib.parse import urlparse

@register.filter(name='get_item')
def get_item(dictionary, key):
    return dictionary.get(key)

@register.filter(name='to_upper')
def to_upper(value):
    return value.upper()

@register.filter(name='url_to_domain')
def url_to_domain(url):
    return urlparse(url).netloc

@register.filter(name='coin_shortcut')
def coin_shortcut(shortcut):
    try:
      COINMARKET_SYMBLOS[shortcut]
    except KeyError:
      return shortcut
    else:
      return COINMARKET_SYMBLOS[shortcut]

@register.filter(name='t_enabled')
def t_enabled(value):
    if value == 'soon':
        return 'Soon'
    elif value == 'yes':
        return '<img src="/static/images/coins/check.svg" alt="">'
    else:
        return '-'

@register.filter(name='format_number')
def format_number(value):
    return "{:,}".format(value, 2)

def preBuildPage(page, context, data):
    """
    Updates the context of the page to include: the page itself as {{ CURRENT_PAGE }}
    """

    # This will run for each page that Cactus renders.
    # Any changes you make to context will be passed to the template renderer for this page.
    
    json_file = open('./static/json/coins_details.json')
    json_data = json.load(json_file)
    json_file.close()

    coins_array = [];
    coins = json_data['coins']
    for k in coins:
        try:
            coins[k]['marketcap_usd']
        except KeyError:
            coins[k]['marketcap_usd'] = 0;
            coins_array.append(coins[k])
        else:
            coins_array.append(coins[k])

    coins_array = sorted(coins_array, key=itemgetter('name'));
    coins_array = sorted(coins_array, key=itemgetter('marketcap_usd'), reverse=True);

    extra = {
        "CURRENT_PAGE": page,
        "coins": coins_array,
        "coins_info": json_data['info']
    }

    context.update(extra)
    return context, data
