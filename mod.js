// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function t(t){return r(t)===t&&t>=0}var a=Number.POSITIVE_INFINITY;function n(r,n,u){return!t(r)||!t(n)||!t(u)||r===a||n===a||n>r||u>r?NaN:u*(n/r)*((r-n)/r)*((r-u)/(r-1))}export{n as default};
//# sourceMappingURL=mod.js.map
