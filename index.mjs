// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";function e(e,n,i){return!t(e)||!t(n)||!t(i)||e===s||n===s||n>e||i>e?NaN:i*(n/e)*((e-n)/e)*((e-i)/(e-1))}export{e as default};
//# sourceMappingURL=index.mjs.map
