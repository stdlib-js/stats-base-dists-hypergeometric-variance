// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return e(n)===n&&n>=0}var t=Number.POSITIVE_INFINITY;return function(e,o,f){return!n(e)||!n(o)||!n(f)||e===t||o===t||o>e||f>e?NaN:f*(o/e)*((e-o)/e)*((e-f)/(e-1))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).variance=n();
//# sourceMappingURL=index.js.map
