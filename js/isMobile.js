/*
 Taken from - http://bit.ly/15dhUic
 The full repo - http://blog.mobileesp.com
 */

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
    iPad: function() {
        return navigator.userAgent.match(/iPad/i);
    },
    iPhone: function() {
        return navigator.userAgent.match(/iPhone/i);
    },
    iPod: function() {
        return navigator.userAgent.match(/iPod/i);
    },
    smartphone: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iPhone() || isMobile.iPod() || isMobile.Opera() || isMobile.Windows());
    },
    AndroidTablet: function() {
        return (navigator.userAgent.match(/Android/i) && !(navigator.userAgent.match(/Mobile/i) || navigator.userAgent.match(/mobile/i)));
    }
};

/*
 
 To check to see if the user is on a specific mobile device:
 if( isMobile.iOS() ) alert('iOS');
 
 To check to see if the user is on any of the supported mobile devices:
 if( isMobile.any() ) alert('Mobile');
 
 */