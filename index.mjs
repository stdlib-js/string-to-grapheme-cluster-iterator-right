// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-prev-grapheme-cluster-break@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function o(d){var l,m,u,g,v;if(!n(d))throw new TypeError(i("1gzME",d));if(arguments.length>1){if(!t(g=arguments[1]))throw new TypeError(i("1gz2H,G6",g));l=arguments[2]}return v=d.length-1,e(m={},"next",g?h:p),e(m,"return",a),r&&e(m,r,f),m;function h(){var e,t;return u?{done:!0}:-1===(t=s(d,v))?(u=!0,d.length?{value:g.call(l,d.substring(t+1,v+1),t+1,d),done:!1}:{done:!0}):(e=g.call(l,d.substring(t+1,v+1),t+1,d),v=t,{value:e,done:!1})}function p(){var e,t;return u?{done:!0}:-1===(t=s(d,v))?(u=!0,d.length?{value:d.substring(t+1,v+1),done:!1}:{done:!0}):(e=d.substring(t+1,v+1),v=t,{value:e,done:!1})}function a(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return g?o(d,g,l):o(d)}}export{o as default};
//# sourceMappingURL=index.mjs.map
