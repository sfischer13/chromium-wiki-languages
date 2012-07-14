/* Wikipedia Language Filter
 * Copyright (c) 2012 Stefan Fischer <sfischer13@ymail.com>
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

function selectOptions() {
    var selectedLanguages = JSON.parse(localStorage['selectedLanguages']);
    $.each($("#languages > option"), function(i, o) {
        if(o.value) { // filter empty option
            o.selected = $.inArray(o.value, selectedLanguages) != -1;        
        }
    });
    $("#languages").trigger("liszt:updated");
}

function fillForm() {
    var options = $.map(languages, function(name, code) {
        return new Option(code + ": " + name, code);            
    });
    $("#languages").append(options); // preserve empty option
    selectOptions();
}

function selectAll() {
    localStorage['selectedLanguages'] = JSON.stringify(getAllLanguages());
    selectOptions();
    saveMessage();
}

function deselectAll() {
    localStorage['selectedLanguages'] = JSON.stringify([]);
    selectOptions();
    saveMessage();
}

function defaultSelection() {
    localStorage['selectedLanguages'] = JSON.stringify(getDefaultLanguages());
    selectOptions();
    saveMessage();
}

function getSelectedOptions() {
    return $.map($("#languages > option"), function(o, i) {
        if (o.selected) {
            return o.value;
        } else {
            return null;
        }
    });
}

function saveMessage() {
    $("#save_message").html(chrome.i18n.getMessage("save_message"));
    setTimeout(function() {
        $("#save_message").html("");
    }, 3000);
}

function load() {
    $(".chzn-select").chosen({no_results_text: ""});
    $("#languages").chosen().change(function() {
        localStorage['selectedLanguages'] = JSON.stringify(getSelectedOptions());
        saveMessage();
    });
    fillForm();
}

var acceptedLanguages = [];

function getAcceptedLanguages() {
    return acceptedLanguages;
}

function i18n_class(cl) {
    $("." + cl).html(chrome.i18n.getMessage(cl));
}

function i18n() {
    i18n_class("options_title");
    i18n_class("options_about");
    i18n_class("options_about_text");    
    i18n_class("options_languages");
    i18n_class("options_languages_text");
    i18n_class("options_deselect");            
    i18n_class("options_default");    
    i18n_class("options_select");
    i18n_class("options_support");            
    i18n_class("options_problems");    
    i18n_class("options_feedback");
    i18n_class("options_like");            
    i18n_class("options_rate");    
    i18n_class("options_help");
    i18n_class("options_design");            
    i18n_class("options_images");    
    i18n_class("options_css");
    i18n_class("options_translate");            
    i18n_class("options_contact");    
    i18n_class("options_mail");
    i18n_class("options_comment");
}

function init() {
    load();
    $("#bn_deselect").click(function() {deselectAll();});  
    $("#bn_default").click(function() {defaultSelection();});    
    $("#bn_select").click(function() {selectAll();});  
    i18n();
}

$(document).ready(function() {
    chrome.i18n.getAcceptLanguages(function(acceptedList) {
        acceptedLanguages = acceptedList;
        init();
    });
});
