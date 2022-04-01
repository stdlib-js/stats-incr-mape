// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(){var n,r;return n=0,r=0,function(t){if(0===arguments.length)return 0===r?null:n;return n+=(t-n)/(r+=1)}},r=function(n){return Math.abs(n)};var t=function(){var t=n();return function(n,u){if(0===arguments.length)return t();return t(100*r((u-n)/u))}};export{t as default};
//# sourceMappingURL=mod.js.map
