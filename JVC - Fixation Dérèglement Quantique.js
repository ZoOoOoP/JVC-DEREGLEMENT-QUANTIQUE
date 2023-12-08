// ==UserScript==
// @name         FIXATION DU DEREGLEMENT QUANTIQUE
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  FIXATION DU DEREGLEMENT QUANTIQUE QUI SUPPRIME LE POINT DU I APRES UN F
// @author       You
// @match        *://*.jeuxvideo.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('* { font-variant-ligatures: none; }');
})();
