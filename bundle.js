// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).variance=n()}(this,(function(){"use strict";var e=Math.floor;var n=function(n){return e(n)===n&&n>=0},t=Number.POSITIVE_INFINITY,o=n,f=t;return function(e,n,t){return!o(e)||!o(n)||!o(t)||e===f||n===f||n>e||t>e?NaN:t*(n/e)*((e-n)/e)*((e-t)/(e-1))}}));
//# sourceMappingURL=bundle.js.map
