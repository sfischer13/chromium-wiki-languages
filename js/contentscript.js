/* Language Filter for Wikipedia
 * Copyright (c) 2012–2016 Stefan Fischer <sfischer13@ymail.com>
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

// hide unselected languages
chrome.runtime.sendMessage('getConfig', function (config) {
    'use strict';

    var languages = config[0];
    var mode = config[1];
    var highlight = config[2];

    if (mode === 'mode_float') {
        $.each($('#p-lang a[lang]'), function (index, link) {
            var lang = link.lang.toLowerCase();
            if ($.inArray(lang, languages) === -1) {
                $('#p-lang ul > li.interwiki-' + lang).appendTo($('#p-lang ul'));
            }
        });
    } else if (mode === 'mode_hide') {
        $.each($('#p-lang a[lang]'), function (index, link) {
            var lang = link.lang.toLowerCase();
            if ($.inArray(lang, languages) === -1) {
                $('#p-lang ul > li.interwiki-' + lang).attr('style', 'display: none;');
            }
        });
    } else if (mode === 'mode_nothing') {
        // nothing
    }
    
    if (highlight) {
        $.each($('#p-lang a[lang]'), function (index, link) {
            var lang = link.lang.toLowerCase();
            if ($.inArray(lang, languages) !== -1) {
                $('#p-lang ul > li.interwiki-' + lang + ' > a').attr('style', 'display: inline-block; background-color: #7090C0; color: #FFFFFF; border-radius: 6px; padding: 3px;');    
            }
        });
    }
});

// link to options
// https://code.google.com/p/chromium/issues/detail?id=47450
// https://developer.chrome.com/extensions/manifest/incognito
if (!chrome.extension.inIncognitoContext) {
    var html = chrome.extension.getURL('html/options.html');
    var text = chrome.i18n.getMessage('filter_list');
    var img = chrome.extension.getURL('img/icon_12.png');
    var listItem = '<li><a href="' + html + '" target="_blank">' + text + ' <img src="' + img + '"/></a></li>';
    $('#p-lang ul').prepend(listItem);
}
