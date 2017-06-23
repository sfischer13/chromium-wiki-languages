/* Language Filter for Wikipedia
 * Copyright (c) 2012-2017 Stefan Fischer <sfischer13@ymail.com>
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

function selectLanguages() {
    'use strict';

    if (!localStorage.selectedLanguages) {
        localStorage.selectedLanguages = JSON.stringify(getDefaultLanguages());
    }    
    var selectedLanguages = JSON.parse(localStorage.selectedLanguages);
    $.each($('#languages > option'), function (i, o) {
        if(o.value) { // filter empty option
            o.selected = $.inArray(o.value, selectedLanguages) !== -1;        
        }
    });
    $('#languages').trigger('chosen:updated');
}

function selectSettings() {
    'use strict';

    if (!localStorage.mode) {
        localStorage.mode = 'mode_float';
    }
    $('input[type=radio][name=mode]').val([localStorage.mode]);
        
    if (!localStorage.highlight) {
        localStorage.highlight = true;
    }
    $('input[type=checkbox][name=highlight]').prop('checked', JSON.parse(localStorage.highlight));
}

function getSelectedOptions() {
    'use strict';

    return $.map($('#languages > option'), function (o, i) {
        if (o.selected) {
            return o.value;
        } else {
            return null;
        }
    });
}

function saveMessage() {
    'use strict';

    $('#save_message').html(chrome.i18n.getMessage('save_message'));
    setTimeout(function () {
        $('#save_message').html('');
    }, 4000);
}

var acceptedLanguages = [];

function getAcceptedLanguages() {
    'use strict';

    return acceptedLanguages;
}

function i18nClass(cl) {
    'use strict';

    $('.' + cl).html(chrome.i18n.getMessage(cl));
}

function i18n() {
    'use strict';

    i18nClass('options_title');
    i18nClass('options_about');
    i18nClass('options_about_text');
    i18nClass('options_languages');
    i18nClass('options_languages_text');
    i18nClass('options_deselect');            
    i18nClass('options_default');
    i18nClass('options_select');
    i18nClass('options_mode');
    i18nClass('options_float');
    i18nClass('options_hide');
    i18nClass('options_nothing');
    i18nClass('options_misc');
    i18nClass('options_highlight');
    i18nClass('options_support');            
    i18nClass('options_problems');    
    i18nClass('options_feedback');
    i18nClass('options_like');            
    i18nClass('options_rate');    
    i18nClass('options_help');
    i18nClass('options_code');
    i18nClass('options_css');
    i18nClass('options_translate');            
}

function selectAndSaveLanguages(string) {
    'use strict';

    localStorage.selectedLanguages = string;
    selectLanguages();
    saveMessage();
}

function saveSettings() {
    'use strict';

    localStorage.mode = $('input[type=radio][name=mode]:checked').val();
    localStorage.highlight = $('input[type=checkbox][name=highlight]').prop('checked');
    saveMessage();
}

function init() {
    'use strict';

    $('.chosen-select').chosen({no_results_text: ''});
    $('#languages').chosen().change(function () {
        localStorage.selectedLanguages = JSON.stringify(getSelectedOptions());
        saveMessage();
    });

    // language list: add options
    var options = $.map(languages, function (name, code) {
        return new Option(code + ': ' + name, code);
    });
    $('#languages').append(options); // preserve empty option

    // language list: selections + triggers
    selectLanguages();
    $('#bn_deselect').click(function () {selectAndSaveLanguages(JSON.stringify([]));});
    $('#bn_default').click(function () {selectAndSaveLanguages(JSON.stringify(getDefaultLanguages()));});
    $('#bn_select').click(function () {selectAndSaveLanguages(JSON.stringify(getAllLanguages()));});

    // mode: selections + triggers
    selectSettings();
    $('input[type=radio][name=mode]').click(function () {saveSettings();});
    $('input[type=checkbox][name=highlight]').click(function () {saveSettings();});

    i18n();
}

$(document).ready(function () {
    'use strict';

    chrome.i18n.getAcceptLanguages(function (acceptedList) {
        acceptedLanguages = acceptedList;
        init();
    });
});
