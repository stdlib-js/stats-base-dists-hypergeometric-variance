// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function a(a){return r(a)===a&&a>=0}var t=Number.POSITIVE_INFINITY;function n(r,n,u){var e;return!a(r)||!a(n)||!a(u)||r===t||n===t||n>r||u>r?NaN:u*(e=n/r)*(1-e)*((r-u)/(r-1))}export{n as default};
//# sourceMappingURL=mod.js.map
