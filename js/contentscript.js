/* Wikipedia Language Filter
 * Copyright (c) 2012–2013 Stefan Fischer <sfischer13@ymail.com>
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

chrome.extension.sendRequest('getSelectedLanguages', function(selectedLanguages) {
    $.each($("#p-lang a[lang]"), function(index, l) {
        if ($.inArray(l.lang, selectedLanguages) == -1) {
            $("#p-lang ul > li.interwiki-" + l.lang).attr("style", "display: none;");    
        }
    });
});
