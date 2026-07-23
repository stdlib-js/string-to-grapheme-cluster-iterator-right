/** @license Apache-2.0 */

'use strict';

/**
* Create an iterator which iterates from right to left over grapheme clusters.
*
* @module @stdlib/string-to-grapheme-cluster-iterator-right
*
* @example
* var graphemeClusters2iteratorRight = require( '@stdlib/string-to-grapheme-cluster-iterator-right' );
*
* var iter = graphemeClusters2iteratorRight( '🌷🍕' );
*
* var v = iter.next().value;
* // returns '🍕'
*
* v = iter.next().value;
* // returns '🌷'
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
