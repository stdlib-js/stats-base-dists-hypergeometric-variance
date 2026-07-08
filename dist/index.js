"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var s=n(function(q,u){
var t=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),a=require('@stdlib/constants-float64-pinf/dist');function v(r,e,i){return!t(r)||!t(e)||!t(i)||r===a||e===a||e>r||i>r?NaN:i*(e/r)*((r-e)/r)*((r-i)/(r-1))}u.exports=v
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
