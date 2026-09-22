"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=n(function(q,s){
var a=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),u=require('@stdlib/constants-float64-pinf/dist');function c(e,r,i){var t;return!a(e)||!a(r)||!a(i)||e===u||r===u||r>e||i>e?NaN:(t=r/e,i*t*(1-t)*((e-i)/(e-1)))}s.exports=c
});var o=v();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
