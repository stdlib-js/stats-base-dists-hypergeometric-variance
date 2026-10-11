// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return e(n)===n&&n>=0}var t=Number.POSITIVE_INFINITY;return function(e,o,r){var f;return!n(e)||!n(o)||!n(r)||e===t||o===t||o>e||r>e?NaN:r*(f=o/e)*(1-f)*((e-r)/(e-1))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).variance=n();
//# sourceMappingURL=browser.js.map
