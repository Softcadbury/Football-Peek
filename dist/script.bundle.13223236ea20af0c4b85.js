!function(e){function n(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var o={};return n.m=e,n.c=o,n.i=function(e){return e},n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n,o){"use strict";function r(e,n,o){var r=document.getElementById(o);r&&(r.style.display="none",document.addEventListener("click",function(o){o.target.id===n||o.target.id===e?r.style.display="none"===r.style.display?"block":"none":r.style.display="none"}))}function t(){var e=document.getElementById("dropdown-label-rounds");if(e){var n=document.getElementsByClassName("round-content"),o=location.hash.replace("#/round-","")||window.currentRound||1;e.innerHTML="Round "+o;for(var r=0;r<n.length;r++)n[r].className.indexOf("round-"+o+"-content")!==-1?n[r].style.display="":n[r].style.display="none";var t=document.getElementById("arrow-rounds-previous");if(o>1){var d=parseInt(o,10)-1;t.setAttribute("href","#/round-"+d),t.style.display=""}else t.style.display="none";var s=document.getElementById("arrow-rounds-next");if(o<window.numberOfRounds){var a=parseInt(o,10)+1;s.setAttribute("href","#/round-"+a),s.style.display=""}else s.style.display="none"}}function d(){var e=document.getElementById("dropdown-label-groups");if(e){var n=document.getElementsByClassName("group-content"),o=location.hash.replace("#/group-","")||"a",r=o.charCodeAt(0);e.innerHTML="Group "+o;for(var t=0;t<n.length;t++)n[t].className.indexOf("group-"+o+"-content")!==-1?n[t].style.display="":n[t].style.display="none";var d=document.getElementById("arrow-groups-previous");if(r>97){var s=String.fromCharCode(r-1);d.setAttribute("href","#/group-"+s),d.style.display=""}else d.style.display="none";var a=document.getElementById("arrow-groups-next");if(r<96+window.numberOfGroups){var l=String.fromCharCode(r+1);a.setAttribute("href","#/group-"+l),a.style.display=""}else a.style.display="none"}}r("dropdown-label-years","dropdown-arrow-years","dropdown-content-years"),r("dropdown-label-rounds","dropdown-arrow-rounds","dropdown-content-rounds"),r("dropdown-label-groups","dropdown-arrow-groups","dropdown-content-groups"),t(),d(),window.onhashchange=function(){t(),d()}},function(e,n){},function(e,n,o){o(0),e.exports=o(1)}]);
//# sourceMappingURL=script.bundle.13223236ea20af0c4b85.js.map