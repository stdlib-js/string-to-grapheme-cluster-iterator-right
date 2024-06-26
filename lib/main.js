/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var isFunction = require( '@stdlib/assert-is-function' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var prevGraphemeClusterBreak = require( '@stdlib/string-prev-grapheme-cluster-break' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an iterator which iterates from right to left over each grapheme cluster in a string.
*
* @param {string} src - input value
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
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
function graphemeClusters2iteratorRight( src ) { // eslint-disable-line id-length
	var thisArg;
	var iter;
	var FLG;
	var fcn;
	var i;
	if ( !isString( src ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', src ) );
	}
	if ( arguments.length > 1 ) {
		fcn = arguments[ 1 ];
		if ( !isFunction( fcn ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fcn ) );
		}
		thisArg = arguments[ 2 ];
	}
	i = src.length - 1;

	// Create an iterator protocol-compliant object:
	iter = {};
	if ( fcn ) {
		setReadOnly( iter, 'next', next1 );
	} else {
		setReadOnly( iter, 'next', next2 );
	}
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next1() {
		var v;
		var j;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		j = prevGraphemeClusterBreak( src, i );
		if ( j === -1 ) {
			FLG = true;
			if ( src.length ) {
				return {
					'value': fcn.call( thisArg, src.substring( j+1, i+1 ), j+1, src ),
					'done': false
				};
			}
			return {
				'done': true
			};
		}
		v = fcn.call( thisArg, src.substring( j+1, i+1 ), j+1, src );
		i = j;
		return {
			'value': v,
			'done': false
		};
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next2() {
		var v;
		var j;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		j = prevGraphemeClusterBreak( src, i );
		if ( j === -1 ) {
			FLG = true;
			if ( src.length ) {
				return {
					'value': src.substring( j+1, i+1 ),
					'done': false
				};
			}
			return {
				'done': true
			};
		}
		v = src.substring( j+1, i+1 );
		i = j;
		return {
			'value': v,
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		if ( fcn ) {
			return graphemeClusters2iteratorRight( src, fcn, thisArg );
		}
		return graphemeClusters2iteratorRight( src );
	}
}


// EXPORTS //

module.exports = graphemeClusters2iteratorRight;
