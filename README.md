<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Variance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Hypergeometric][hypergeometric-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [variance][variance] for a [hypergeometric][hypergeometric-distribution] random variable is

<!-- <equation class="equation" label="eq:hypergeometric_variance" align="center" raw="\operatorname{Var}\left( X \right) = n{K \over N}{(N-K) \over N}{N-n \over N-1}" alt="Variance for a hypergeometric distribution."> -->

```math
\mathop{\mathrm{Var}}\left( X \right) = n{K \over N}{(N-K) \over N}{N-n \over N-1}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = n{K \over N}{(N-K) \over N}{N-n \over N-1}" data-equation="eq:hypergeometric_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/variance/docs/img/equation_hypergeometric_variance.svg" alt="Variance for a hypergeometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
variance = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-variance@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/tags). For example,

```javascript
variance = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-variance@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var variance = require( 'path/to/vendor/umd/stats-base-dists-hypergeometric-variance/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-variance@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.variance;
})();
</script>
```

#### variance( N, K, n )

Returns the [variance][variance] of a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var v = variance( 16, 11, 4 );
// returns ~0.688

v = variance( 2, 1, 1 );
// returns 0.25
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = variance( NaN, 10, 4 );
// returns NaN

v = variance( 20, NaN, 4 );
// returns NaN

v = variance( 20, 10, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = variance( 10.5, 5, 2 );
// returns NaN

v = variance( 10, 1.5, 2 );
// returns NaN

v = variance( 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var v = variance( 10, 5, 12 );
// returns NaN

v = variance( 10, 12, 5 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-variance@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var v;
var i;
var N;
var K;
var n;

for ( i = 0; i < 10; i++ ) {
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    v = variance( N, K, n );
    console.log( 'N: %d, K: %d, n: %d, Var(X;N,K,n): %d', N, K, n, v.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-hypergeometric-variance.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-hypergeometric-variance

[test-image]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-hypergeometric-variance/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-hypergeometric-variance?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-hypergeometric-variance.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-hypergeometric-variance/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-variance/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-hypergeometric-variance/main/LICENSE

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
