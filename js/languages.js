/* Language Filter for Wikipedia
 * Copyright (c) 2012-2017 Stefan Fischer <sfischer13@ymail.com>
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

// https://svn.wikimedia.org/viewvc/mediawiki/trunk/phase3/languages/Names.php?view=markup&pathrev=113600
// https://meta.wikimedia.org/wiki/List_of_Wikipedias
var languages = {
    'aa': 'Qafár af',
    'ab': 'Аҧсуа',
    'ace': 'Acèh',
    'af': 'Afrikaans',
    'ak': 'Akan',
    'aln': 'Gegë',
    'als': 'Alemannisch',
    'am': 'አማርኛ',
    'an': 'Aragonés',
    'ang': 'Ænglisc',
    'anp': 'अङ्गिका',
    'arc': 'ܐܪܡܝܐ',
    'arn': 'Mapudungun',
    'ary': 'Maġribi',
    'arz': 'مصرى',
    'ar': 'العربية',
    'ast': 'Asturianu',
    'as': 'অসমীয়া',
    'avk': 'Kotava',
    'av': 'Авар',
    'ay': 'Aymar aru',
    'az': 'Azərbaycanca',
    'bar': 'Boarisch',
    'bat-smg': 'Žemaitėška',
    'ba': 'Башҡортса',
    'bcc': 'بلوچی مکرانی',
    'bcl': 'Bikol Central',
    'be-tarask': 'Беларуская (тарашкевіца)',
    'be-x-old': 'Беларуская (тарашкевіца)',
    'be': 'Беларуская',
    'bg': 'Български',
    'bho': 'भोजपुरी',
    'bh': 'भोजपुरी',
    'bi': 'Bislama',
    'bjn': 'Bahasa Banjar',
    'bm': 'Bamanankan',
    'bn': 'বাংলা',
    'bo': 'བོད་ཡིག',
    'bpy': 'ইমার ঠার/বিষ্ণুপ্রিয়া মণিপুরী',
    'bqi': 'بختياري',
    'br': 'Brezhoneg',
    'brh': 'Bráhuí',
    'bs': 'Bosanski',
    'bug': 'ᨅᨔ ᨕᨘᨁᨗ',
    'bxr': 'Буряад',
    'ca': 'Català',
    'cbk-zam': 'Chavacano de Zamboanga',
    'cdo': 'Mìng-dĕ̤ng-ngṳ̄',
    'ceb': 'Cebuano',
    'ce': 'Нохчийн',
    'ch': 'Chamoru',
    'cho': 'Choctaw',
    'chr': 'ᏣᎳᎩ',
    'chy': 'Tsetsêhestâhese',
    'ckb': 'کوردی',
    'co': 'Corsu',
    'cps': 'Capiceño',
    'crh-cyrl': 'Къырымтатарджа (Кирилл)',
    'crh-latn': 'Qırımtatarca (Latin)',
    'crh': 'Qırımtatarca',
    'cr': 'Nēhiyawēwin / ᓀᐦᐃᔭᐍᐏᐣ',
    'csb': 'Kaszëbsczi',
    'cs': 'Česky',
    'cu': 'Словѣ́ньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ',
    'cv': 'Чӑвашла',
    'cy': 'Cymraeg',
    'da': 'Dansk',
    'de-at': 'Österreichisches Deutsch',
    'de-ch': 'Schweizer Hochdeutsch',
    'de': 'Deutsch',
    'de-formal': 'Deutsch (Sie-Form)',
    'diq': 'Zazaki',
    'dsb': 'Dolnoserbski',
    'dtp': 'Dusun Bundu-liwan',
    'dv': 'ދިވެހިބަސް',
    'dz': 'ཇོང་ཁ',
    'ee': 'Eʋegbe',
    'el': 'Ελληνικά',
    'eml': 'Emiliàn e rumagnòl',
    'en-ca': 'Canadian English',
    'en': 'English',
    'en-gb': 'British English',
    'eo': 'Esperanto',
    'es': 'Español',
    'et': 'Eesti',
    'eu': 'Euskara',
    'ext': 'Estremeñu',
    'fa': 'فارسی',
    'ff': 'Fulfulde',
    'fi': 'Suomi',
    'fiu-vro': 'Võro',
    'fj': 'Na Vosa Vakaviti',
    'fo': 'Føroyskt',
    'frc': 'Français cadien',
    'fr': 'Français',
    'frp': 'Arpetan',
    'frr': 'Nordfriisk',
    'fur': 'Furlan',
    'fy': 'Frysk',
    'ga': 'Gaeilge',
    'gag': 'Gagauz',
    'gan-hans': '赣语(简体)',
    'gan-hant': '贛語(繁體)',
    'gan': '贛語',
    'gd': 'Gàidhlig',
    'gl': 'Galego',
    'glk': 'گیلکی',
    'gn': 'Avañe\'ẽ',
    'got': '𐌲𐌿𐍄𐌹𐍃𐌺',
    'grc': 'Ἀρχαία ἑλληνικὴ',
    'gsw': 'Alemannisch',
    'gu': 'ગુજરાતી',
    'gv': 'Gaelg',
    'hak': 'Hak-kâ-fa',
    'haw': 'Hawai`i',
    'ha': 'هَوُسَ',
    'he': 'עברית',
    'hif': 'Fiji Hindi',
    'hif-latn': 'Fiji Hindi',
    'hil': 'Ilonggo',
    'hi': 'हिन्दी',
    'ho': 'Hiri Motu',
    'hr': 'Hrvatski',
    'hsb': 'Hornjoserbsce',
    'ht': 'Kreyòl ayisyen',
    'hu': 'Magyar',
    'hy': 'Հայերեն',
    'hz': 'Otsiherero',
    'ia': 'Interlingua',
    'id': 'Bahasa Indonesia',
    'ie': 'Interlingue',
    'ig': 'Igbo',
    'ii': 'ꆇꉙ',
    'ike-cans': 'ᐃᓄᒃᑎᑐᑦ',
    'ike-latn': 'inuktitut',
    'ik': 'Iñupiak',
    'ilo': 'Ilokano',
    'inh': 'ГІалгІай Ğalğaj',
    'io': 'Ido',
    'is': 'Íslenska',
    'it': 'Italiano',
    'iu': 'ᐃᓄᒃᑎᑐᑦ/inuktitut',
    'jam': 'Patois',
    'ja': '日本語',
    'jbo': 'Lojban',
    'jut': 'Jysk',
    'jv': 'Basa Jawa',
    'kaa': 'Qaraqalpaqsha',
    'kab': 'Taqbaylit',
    'ka': 'ქართული',
    'kbd-cyrl': 'Адыгэбзэ',
    'kbd': 'Адыгэбзэ',
    'kg': 'Kongo',
    'khw': 'کھوار',
    'ki': 'Gĩkũyũ',
    'kiu': 'Kırmancki',
    'kj': 'Kwanyama',
    'kk-arab': 'قازاقشا (تٴوتە)',
    'kk-cn': 'قازاقشا (جۇنگو)',
    'kk-cyrl': 'Қазақша (кирил)',
    'kk-kz': 'Қазақша (Қазақстан)',
    'kk-latn': 'Qazaqşa (latın)',
    'kk-tr': 'Qazaqşa (Türkïya)',
    'kk': 'Қазақша',
    'kl': 'Kalaallisut',
    'km': 'ភាសាខ្មែរ',
    'kn': 'ಕನ್ನಡ',
    'ko': '한국어',
    'koi': 'Перем Коми',
    'ko-kp': '한국어 (조선)',
    'krc': 'Къарачай-Малкъар',
    'kri': 'Krio',
    'krj': 'Kinaray-a',
    'kr': 'Kanuri',
    'ks-arab': 'کٲشُر',
    'ks-deva': 'कॉशुर',
    'ksh': 'Ripoarisch',
    'ks': 'कॉशुर - کٲشُر',
    'ku-arab': 'كوردي (عەرەبی)',
    'ku' : 'Kurdî',
    'ku-latn': 'Kurdî (latînî)',
    'kv': 'Коми',
    'kw': 'Kernowek',
    'ky': 'Кыргызча',
    'lad': 'Ladino',
    'la': 'Latina',
    'lbe': 'Лакку',
    'lb': 'Lëtzebuergesch',
    'lez': 'Лезги',
    'lfn': 'Lingua Franca Nova',
    'lg': 'Luganda',
    'lij': 'Ligure',
    'li': 'Limburgs',
    'liv': 'Līvõ kēļ',
    'lmo': 'Lumbaart',
    'ln': 'Lingála',
    'lo': 'ລາວ',
    'loz': 'Silozi',
    'ltg': 'Latgaļu',
    'lt': 'Lietuvių',
    'lus': 'Mizo ţawng',
    'lv': 'Latviešu',
    'lzh': '文言',
    'lzz': 'Lazuri',
    'mai': 'मैथिली',
    'map-bms': 'Basa Banyumasan',
    'mdf': 'Мокшень',
    'mg': 'Malagasy',
    'mh': 'Ebon',
    'mhr': 'Олык Марий',
    'mi': 'Māori',
    'min': 'Baso Minangkabau',
    'mk': 'Македонски',
    'ml': 'മലയാളം',
    'mn': 'Монгол',
    'mo': 'Молдовеняскэ',
    'mrj': 'Кырык мары',
    'mr': 'मराठी',
    'ms': 'Bahasa Melayu',
    'mt': 'Malti',
    'mus': 'Mvskoke',
    'mwl': 'Mirandés',
    'myv': 'Эрзянь',
    'my': 'မြန်မာဘာသာ',
    'mzn': 'مازِرونی',
    'na': 'Dorerin Naoero',
    'nah': 'Nāhuatl',
    'nan': 'Bân-lâm-gú',
    'nap': 'Nnapulitano',
    'nb': 'Norsk (bokmål)',
    'nds-nl': 'Nedersaksisch',
    'nds': 'Plattdüütsch',
    'new': 'नेपाल भाषा',
    'ne': 'नेपाली',
    'ng': 'Oshiwambo',
    'niu': 'Niuē',
    'nl-informal': 'Nederlands (informeel)',
    'nl': 'Nederlands',
    'nn': 'Norsk (nynorsk)',
    'nov': 'Novial',
    'no': 'Norsk (bokmål)',
    'nrm': 'Nouormand',
    'nso': 'Sesotho sa Leboa',
    'nv': 'Diné bizaad',
    'ny': 'Chi-Chewa',
    'oc': 'Occitan',
    'om': 'Oromoo',
    'or': 'ଓଡ଼ିଆ',
    'os': 'Ирон',
    'pag': 'Pangasinan',
    'pam': 'Kapampangan',
    'pap': 'Papiamentu',
    'pa': 'ਪੰਜਾਬੀ',
    'pcd': 'Picard',
    'pdc': 'Deitsch',
    'pdt': 'Plautdietsch',
    'pfl': 'Pälzisch',
    'pih': 'Norfuk / Pitkern',
    'pi': 'पािऴ',
    'pl': 'Polski',
    'pms': 'Piemontèis',
    'pnb': 'پنجابی',
    'pnt': 'Ποντιακά',
    'prg': 'Prūsiskan',
    'ps': 'پښتو',
    'pt-br': 'Português do Brasil',
    'pt': 'Português',
    'qug': 'Runa shimi',
    'qu': 'Runa Simi',
    'rgn': 'Rumagnôl',
    'rif': 'Tarifit',
    'rm': 'Rumantsch',
    'rmy': 'Romani',
    'rn': 'Kirundi',
    'roa-rup': 'Armãneashce',
    'roa-tara': 'Tarandíne',
    'ro': 'Română',
    'rue': 'Русиньскый',
    'rup': 'Armãneashce',
    'ruq-cyrl': 'Влахесте',
    'ruq-latn': 'Vlăheşte',
    'ruq': 'Vlăheşte',
    'ru': 'Русский',
    'rw': 'Kinyarwanda',
    'sah': 'Саха тыла',
    'sa': 'संस्कृतम्',
    'scn': 'Sicilianu',
    'sco': 'Scots',
    'sc': 'Sardu',
    'sdc': 'Sassaresu',
    'sd': 'سنڌي',
    'sei': 'Cmique Itom',
    'se': 'Sámegiella',
    'sg': 'Sängö',
    'sgs': 'Žemaitėška',
    'shi-latn': 'Tašlḥiyt',
    'shi': 'Tašlḥiyt/ⵜⴰⵛⵍⵃⵉⵜ',
    'shi-tfng': 'ⵜⴰⵛⵍⵃⵉⵜ',
    'sh': 'Srpskohrvatski / Српскохрватски',
    'simple': 'Simple English',
    'si': 'සිංහල',
    'sk': 'Slovenčina',
    'sli': 'Schläsch',
    'sl': 'Slovenščina',
    'sma': 'Åarjelsaemien',
    'sm': 'Gagana Samoa',
    'sn': 'chiShona',
    'so': 'Soomaaliga',
    'sq': 'Shqip',
    'sr-ec': 'Српски (ћирилица)',
    'sr-el': 'Srpski (latinica)',
    'srn': 'Sranantongo',
    'sr': 'Српски / Srpski',
    'ss': 'SiSwati',
    'stq': 'Seeltersk',
    'st': 'Sesotho',
    'su': 'Basa Sunda',
    'sv': 'Svenska',
    'sw': 'Kiswahili',
    'szl': 'Ślůnski',
    'ta': 'தமிழ்',
    'tcy': 'ತುಳು',
    'tet': 'Tetun',
    'te': 'తెలుగు',
    'tg-cyrl': 'Тоҷикӣ',
    'tg-latn': 'tojikī',
    'tg': 'Тоҷикӣ',
    'th': 'ไทย',
    'ti': 'ትግርኛ',
    'tk': 'Türkmençe',
    'tl': 'Tagalog',
    'tly': 'толышә зывон',
    'tn': 'Setswana',
    'tokipona': 'Toki Pona',
    'to': 'lea faka-Tonga',
    'tpi': 'Tok Pisin',
    'tr': 'Türkçe',
    'ts': 'Xitsonga',
    'tt-cyrl': 'Татарча',
    'tt-latn': 'Tatarça',
    'tt': 'Татарча/Tatarça',
    'tum': 'chiTumbuka',
    'tw': 'Twi',
    'ty': 'Reo Mā`ohi',
    'tyv': 'Тыва дыл',
    'udm': 'Удмурт',
    'ug-arab': 'ئۇيغۇرچە',
    'ug-latn': 'Uyghurche',
    'ug': 'ئۇيغۇرچە / Uyghurche',
    'uk': 'Українська',
    'ur': 'اردو',
    'uz': 'O\'zbek',
    'vec': 'Vèneto',
    'vep': 'Vepsän kel\'',
    've': 'Tshivenda',
    'vi': 'Tiếng Việt',
    'vls': 'West-Vlams',
    'vmf': 'Mainfränkisch',
    'vot': 'Vaďďa',
    'vo': 'Volapük',
    'vro': 'Võro',
    'war': 'Winaray',
    'wa': 'Walon',
    'wo': 'Wolof',
    'wuu': '吴语',
    'xal': 'Хальмг',
    'xh': 'isiXhosa',
    'xmf': 'მარგალური',
    'yi': 'ייִדיש',
    'yo': 'Yorùbá',
    'yue': '粵語',
    'za': 'Vahcuengh',
    'zea': 'Zeêuws',
    'zh-classical': '文言',
    'zh-cn': '中文(中国大陆)',
    'zh-hans': '中文(简体)',
    'zh-hant': '中文(繁體)',
    'zh-hk': '中文(香港)',
    'zh-min-nan': 'Bân-lâm-gú',
    'zh-mo': '中文(澳門)',
    'zh-my': '中文(马来西亚)',
    'zh-sg': '中文(新加坡)',
    'zh-tw': '中文(台灣)',
    'zh-yue': '粵語',
    'zh': '中文',
    'zu': 'isiZulu'
};

function getAllLanguages() {
    'use strict';

    return $.map(languages, function (name, code) {
        return code;
    });
}

// TOP 25
// https://meta.wikimedia.org/wiki/List_of_Wikipedias#All_Wikipedias_ordered_by_number_of_articles
function getCommonLanguages() {
    'use strict';

    return ['en', 'sv', 'nl', 'de', 'fr', 'war', 'ceb', 'ru', 'it', 'es', 'vi', 'pl', 'ja', 'pt', 'zh', 'uk', 'ca', 'no', 'fa', 'fi', 'id', 'ar', 'sr', 'cs', 'ko'];
}

function getDefaultLanguages() {
    'use strict';

    var defaultLanguages = $.merge([], getCommonLanguages());
    $.each(getAcceptedLanguages(), function (index, code) {
        if ($.inArray(code, getAllLanguages()) !== -1 && $.inArray(code, getCommonLanguages()) === -1) {
            defaultLanguages.push(code);
        }
    });
    defaultLanguages.sort();
    return defaultLanguages;
}
