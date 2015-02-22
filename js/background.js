/* Wikipedia Language Filter
 * Copyright (c) 2012–2015 Stefan Fischer <sfischer13@ymail.com>
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

function firstRunCheck() {
    'use strict';

    var first = false;

    if (!localStorage['installDate']) {
        localStorage['installDate'] = JSON.stringify(new Date().getTime());
        first = true;
    }
    
    if (!localStorage['lastVersion']) {
        localStorage['lastVersion'] = JSON.stringify(chrome.app.getDetails().version);
        first = true;
    }
    
    if (first) {
        chrome.tabs.create({'url': 'html/options.html'});
    }
}

function updateCheck() {
    'use strict';

    if (chrome.app.getDetails().version !== JSON.parse(localStorage['lastVersion'])) {
        localStorage['lastVersion'] = JSON.stringify(chrome.app.getDetails().version);
        chrome.tabs.create({'url': 'html/options.html'});
        chrome.tabs.create({'url': 'html/changelog.html'});
    } 
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    'use strict';

    if (message === 'getConfig') {
        var langs = JSON.parse(localStorage['selectedLanguages']);
        var float = localStorage['float'];
        var highlight = JSON.parse(localStorage['highlight']);
        sendResponse([langs, float, highlight]);
    } else {
        sendResponse(undefined);
    }
});


firstRunCheck();
updateCheck();
