// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var a=function(a){return r(a)===a&&a>=0},t=Number.POSITIVE_INFINITY,n=a,u=t;var e=function(r,a,t){return!n(r)||!n(a)||!n(t)||r===u||a===u||a>r||t>r?NaN:t*(a/r)*((r-a)/r)*((r-t)/(r-1))};export{e as default};
//# sourceMappingURL=mod.js.map
