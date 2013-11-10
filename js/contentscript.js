/* Wikipedia Language Filter
 * Copyright (c) 2012–2013 Stefan Fischer <sfischer13@ymail.com>
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

var imgUrl = chrome.extension.getURL("img/icon_12.png");
var optionsUrl = chrome.extension.getURL('html/options.html');
$("#p-lang ul").prepend("<li><a href='" + optionsUrl + "' target='_newtab'>" + chrome.i18n.getMessage("filter_list")  + " <img src='" + imgUrl + "'/></a></li>");

// hide unselected languages
chrome.runtime.sendMessage('getSelectedLanguages', function(selectedLanguages) {
    $.each($("#p-lang a[lang]"), function(index, l) {
        if ($.inArray(l.lang, selectedLanguages) == -1) {
            $("#p-lang ul > li.interwiki-" + l.lang).attr("style", "display: none;");    
        }
    });
});
