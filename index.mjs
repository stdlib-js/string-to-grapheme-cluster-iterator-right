// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-prev-grapheme-cluster-break@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function o(d){var l,u,m,f,g;if(!t(d))throw new TypeError(i("1gz3F",d));if(arguments.length>1){if(!r(f=arguments[1]))throw new TypeError(i("1gz2H",f));l=arguments[2]}return g=d.length-1,e(u={},"next",f?function(){var e,r;if(m)return{done:!0};if(-1===(r=s(d,g)))return m=!0,d.length?{value:f.call(l,d.substring(r+1,g+1),r+1,d),done:!1}:{done:!0};return e=f.call(l,d.substring(r+1,g+1),r+1,d),g=r,{value:e,done:!1}}:function(){var e,r;if(m)return{done:!0};if(-1===(r=s(d,g)))return m=!0,d.length?{value:d.substring(r+1,g+1),done:!1}:{done:!0};return e=d.substring(r+1,g+1),g=r,{value:e,done:!1}}),e(u,"return",(function(e){if(m=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&e(u,n,(function(){if(f)return o(d,f,l);return o(d)})),u}export{o as default};
//# sourceMappingURL=index.mjs.map
