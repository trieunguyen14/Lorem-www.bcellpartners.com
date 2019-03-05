(function () {
    'use strict';

    /*------------------------------------------------------------------
    Slick Homepage Slider
    ------------------------------------------------------------------*/
    $(document).ready(function () {
        $(document).ready(function () {
            $('.aboutUs-carousel').slick({
                slidesToShow: 1,
                dots: true
            });
            var urlForUS = $('#hdnURLForUSA').val();
            var urlForExternal = $('#hdnURLForExternal').val();
            //Jquery Vector Map Colors
            // var color1 = "#88d38e";  // Canada
            var color1 = "#b46882";  // Canada
            // var color2 = "#5fcdff"; //USA
            var color2 = "#484d73"; //USA
            var color3 = "#000000"; //??
            // var color4 = "#976c99"; //china
            var color4 = "#6f6194"; //china
            // var color3 = "#fcc288"; //europe
            var color3 = "#e6974c"; //europe
            // var color6 = "#ffbcb4"; //mexico
            var color6 = "#b38dc0"; //mexico

            //Jquery Vector Map
            jQuery('#vmap').vectorMap({
                map: 'world_en',
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderOpacity: 0.25,
                borderWidth: .1,
                color: '#ffffff',
                hoverOpacity: 0.8,
                // selectedColor: '#FFFF66', //focus color
                selectedColor: '#f7dc85', //focus color
                enableZoom: false,
                showTooltip: true,
                scaleColors: ['#976c99', '#5fcdff'],
                selectedRegion: "US",
                normalizeFunction: 'linear',
                onRegionClick: function (element, code, region) {
                    var message = 'You clicked "'
                        + region
                        + '" which has the code: '
                        + code.toUpperCase();
                    if (code.toUpperCase() == "US") {
                        var answer = confirm("You are exiting the www.bcellpartners.com website and will now be redirected to " + urlForUS);
                        if (answer) {
                            window.location.href = urlForUS;
                        }

                    } else {
                        var answer = confirm("You are exiting the www.bcellpartners.com website and will now be redirected to " + urlForExternal);
                        if (answer) {
                            window.location.href = urlForExternal;
                        }

                    }

                },
                colors: {
                    "af": color3,
                    "al": color3,
                    "dz": color3,
                    "ao": color3,
                    "ag": color6,
                    "ar": color6,
                    "am": color3,
                    "au": color4,
                    "at": color3,
                    "az": color3,
                    "bs": color6,
                    "bh": color3,
                    "bd": color4,
                    "bb": color6,
                    "by": color3,
                    "be": color3,
                    "bz": color6,
                    "bj": color3,
                    "bt": color4,
                    "bo": color6,
                    "ba": color3,
                    "bw": color3,
                    "br": color6,
                    "bn": color4,
                    "bg": color3,
                    "bf": color3,
                    "bi": color3,
                    "kh": color4,
                    "cm": color3,
                    "ca": color1,
                    "cv": color3,
                    "cf": color3,
                    "td": color3,
                    "cl": color6,
                    "cn": color4,
                    "co": color6,
                    "km": color3,
                    "cd": color3,
                    "cg": color3,
                    "cr": color6,
                    "ci": color3,
                    "hr": color3,
                    "cy": color3,
                    "cz": color3,
                    "cu": color6,
                    "dk": color3,
                    "dj": color3,
                    "dm": color6,
                    "do": color6,
                    "ec": color6,
                    "eg": color3,
                    "sv": color6,
                    "gq": color3,
                    "er": color3,
                    "ee": color3,
                    "et": color3,
                    "fk": color6,
                    "fj": color4,
                    "fi": color3,
                    "fr": color3,
                    "ga": color3,
                    "gf": color6,
                    "gm": color3,
                    "ge": color3,
                    "de": color3,
                    "gh": color3,
                    "gr": color3,
                    "gd": color6,
                    "gt": color6,
                    "gn": color3,
                    "gw": color3,
                    "gy": color6,
                    "ht": color6,
                    "hn": color6,
                    "hk": color4,
                    "hu": color3,
                    "is": color3,
                    "in": color4,
                    "id": color4,
                    "ir": color3,
                    "iq": color3,
                    "ie": color3,
                    "il": color3,
                    "it": color3,
                    "jm": color6,
                    "jp": color4,
                    "jo": color3,
                    "kz": color3,
                    "ke": color3,
                    "kp": color4,
                    "ki": color4,
                    "kr": color4,
                    "undefined": color1,
                    "kw": color3, "kg": color3,
                    "la": color4, "lv": color3,
                    "lb": color3, "ls": color3,
                    "lr": color3, "ly": color3,
                    "lt": color3, "lu": color3,
                    "mk": color3, "mg": color3,
                    "mw": color3, "my": color4,
                    "mv": color4, "ml": color3,
                    "mt": color3, "mr": color3,
                    "mu": color3, "mx": color6,
                    "md": color3, "mn": color3,
                    "me": color3, "ma": color3,
                    "mz": color3, "nc": color4,
                    "mm": color4, "na": color3,
                    "np": color4, "nl": color3,
                    "nz": color4, "ni": color6,
                    "ne": color3, "ng": color3,
                    "no": color3, "om": color3,
                    "pf": color4, "pk": color3,
                    "pa": color6, "pg": color4,
                    "py": color6, "pe": color6,
                    "ph": color4, "pl": color3,
                    "pt": color3, "qa": color3,
                    "ro": color3, "ru": color3,
                    "rw": color3, "ws": color4,
                    "st": color3, "sa": color3,
                    "sn": color3, "rs": color3,
                    "sc": color3, "sl": color3,
                    "sg": color4, "sk": color3,
                    "si": color3, "sb": color4,
                    "za": color3, "es": color3,
                    "lk": color4, "kn": color6,
                    "lc": color6, "vc": color1,
                    "sd": color3, "so": color3,
                    "sr": color6, "sz": color3,
                    "se": color3, "ch": color3,
                    "sy": color3, "tw": color4,
                    "tj": color3, "tz": color3,
                    "th": color4, "tl": color4,
                    "tg": color3, "to": color4,
                    "tt": color6, "tn": color3,
                    "tr": color3, "tm": color3,
                    "ug": color3, "ua": color3,
                    "ae": color3, "gl": color3,
                    "gb": color3, "uy": color6,
                    "uz": color3, "vu": color4,
                    "ve": color6, "vn": color4,
                    "ye": color3, "zm": color3,
                    "zw": color3, "us": color2

                }

            });
        });
    });

}());