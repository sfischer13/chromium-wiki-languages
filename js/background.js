/* Wikipedia Language Filter
 * Copyright (c) 2012 Stefan Fischer <sfischer13@ymail.com>
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

function firstRunCheck() {
    var first = false;

    if (!localStorage['installDate']) {
        localStorage['installDate'] = JSON.stringify(new Date().getTime());
        first = true;
    }
    
    if (!localStorage['lastVersion']) {
        localStorage['lastVersion'] = JSON.stringify(chrome.app.getDetails().version);
        first = true;
    }

    if (!localStorage['selectedLanguages']) {
        localStorage['selectedLanguages'] = JSON.stringify(getDefaultLanguages());
        first = true;
    }
    
    if (first) {
        chrome.tabs.create({'url': 'options.html'});
    }
}

function updateCheck() {
    if (chrome.app.getDetails().version != JSON.parse(localStorage['lastVersion'])) {
        localStorage['lastVersion'] = JSON.stringify(chrome.app.getDetails().version);
        chrome.tabs.create({'url': 'options.html'});
        chrome.tabs.create({'url': 'changelog.html'});
    } 
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request == 'getSelectedLanguages') {
        sendResponse(JSON.parse(localStorage['selectedLanguages']));
    } else {
        sendResponse(undefined);
    }
});

firstRunCheck();
updateCheck();
