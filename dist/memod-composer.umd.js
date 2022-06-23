(function(a,n){typeof exports=="object"&&typeof module!="undefined"?module.exports=n(require("@vue/composition-api")):typeof define=="function"&&define.amd?define(["@vue/composition-api"],n):(a=typeof globalThis!="undefined"?globalThis:a||self,a["memod-composer"]=n(a.compositionApi))})(this,function(compositionApi){"use strict";var be=Object.defineProperty,ve=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var me=(a,n,t)=>n in a?be(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,pe=(a,n)=>{for(var t in n||(n={}))xe.call(n,t)&&me(a,t,n[t]);if(he)for(var t of he(n))Oe.call(n,t)&&me(a,t,n[t]);return a},ge=(a,n)=>ve(a,Ee(n));var base="",quill_bubble="",quill_core="";function Mitt(a){return{all:a=a||new Map,on:function(n,t){var e=a.get(n);e?e.push(t):a.set(n,[t])},off:function(n,t){var e=a.get(n);e&&(t?e.splice(e.indexOf(t)>>>0,1):a.set(n,[]))},emit:function(n,t){var e=a.get(n);e&&e.slice().map(function(r){r(t)}),(e=a.get("*"))&&e.slice().map(function(r){r(n,t)})}}}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function getDefaultExportFromCjs(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function getAugmentedNamespace(a){if(a.__esModule)return a;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(a).forEach(function(t){var e=Object.getOwnPropertyDescriptor(a,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return a[t]}})}),n}var quill$1={exports:{}};/*!
 * Quill Editor v2.0.0-dev.3
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */(function(module,exports){(function(n,t){module.exports=t()})(window,function(){return function(a){var n={};function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=n,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(r&1&&(e=t(e)),r&8||r&4&&typeof e=="object"&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),r&2&&typeof e!="string")for(var s in e)t.d(o,s,function(u){return e[u]}.bind(null,s));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}({"./assets/icons/align-center.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/align-center.svg?`)},"./assets/icons/align-justify.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/align-justify.svg?`)},"./assets/icons/align-left.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/align-left.svg?`)},"./assets/icons/align-right.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/align-right.svg?`)},"./assets/icons/background.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <g class=\\"ql-fill ql-color-label\\"> <polygon points=\\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\\"6.817 5 6 5 6 6 6.38 6 6.817 5\\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\\"4.63 10 4 10 4 11 4.192 11 4.63 10\\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\\"12 6.868 12 6 11.62 6 12 6.868\\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\\"12.933 9 13 9 13 8 12.495 8 12.933 9\\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\\"5.5 13 9 5 12.5 13\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/background.svg?`)},"./assets/icons/blockquote.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <rect class=\\"ql-fill ql-stroke\\" height=3 width=3 x=4 y=5></rect> <rect class=\\"ql-fill ql-stroke\\" height=3 width=3 x=11 y=5></rect> <path class=\\"ql-even ql-fill ql-stroke\\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\\"ql-even ql-fill ql-stroke\\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/blockquote.svg?`)},"./assets/icons/bold.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/bold.svg?`)},"./assets/icons/clean.svg":function(module,exports){eval(`// Module
var code = "<svg class=\\"\\" viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/clean.svg?`)},"./assets/icons/code.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <polyline class=\\"ql-even ql-stroke\\" points=\\"5 7 3 9 5 11\\"></polyline> <polyline class=\\"ql-even ql-stroke\\" points=\\"13 7 15 9 13 11\\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/code.svg?`)},"./assets/icons/color.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=\\"ql-color-label ql-stroke ql-transparent\\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\\"5.5 11 9 3 12.5 11\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/color.svg?`)},"./assets/icons/direction-ltr.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <polygon class=\\"ql-stroke ql-fill\\" points=\\"3 11 5 9 3 7 3 11\\"></polygon> <line class=\\"ql-stroke ql-fill\\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/direction-ltr.svg?`)},"./assets/icons/direction-rtl.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <polygon class=\\"ql-stroke ql-fill\\" points=\\"15 12 13 10 15 8 15 12\\"></polygon> <line class=\\"ql-stroke ql-fill\\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/direction-rtl.svg?`)},"./assets/icons/dropdown.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <polygon class=ql-stroke points=\\"7 11 9 13 11 11 7 11\\"></polygon> <polygon class=ql-stroke points=\\"7 7 9 5 11 7 7 7\\"></polygon> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/dropdown.svg?`)},"./assets/icons/formula.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/formula.svg?`)},"./assets/icons/header-2.svg":function(module,exports){eval(`// Module
var code = "<svg viewBox=\\"0 0 18 18\\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/header-2.svg?`)},"./assets/icons/header.svg":function(module,exports){eval(`// Module
var code = "<svg viewBox=\\"0 0 18 18\\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/header.svg?`)},"./assets/icons/image.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\\"ql-even ql-fill\\" points=\\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\\"></polyline> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/image.svg?`)},"./assets/icons/indent.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\\"ql-fill ql-stroke\\" points=\\"3 7 3 11 5 9 3 7\\"></polyline> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/indent.svg?`)},"./assets/icons/italic.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/italic.svg?`)},"./assets/icons/link.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\\"ql-even ql-stroke\\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\\"ql-even ql-stroke\\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/link.svg?`)},"./assets/icons/list-bullet.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/list-bullet.svg?`)},"./assets/icons/list-check.svg":function(module,exports){eval(`// Module
var code = "<svg class=\\"\\" viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\\"3 4 4 5 6 3\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\\"3 14 4 15 6 13\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\"3 9 4 10 6 8\\"></polyline> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/list-check.svg?`)},"./assets/icons/list-ordered.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\\"ql-stroke ql-thin\\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\\"ql-stroke ql-thin\\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\\"ql-stroke ql-thin\\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/list-ordered.svg?`)},"./assets/icons/outdent.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\"5 7 5 11 3 9 5 7\\"></polyline> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/outdent.svg?`)},"./assets/icons/strike.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <line class=\\"ql-stroke ql-thin\\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/strike.svg?`)},"./assets/icons/subscript.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/subscript.svg?`)},"./assets/icons/superscript.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/superscript.svg?`)},"./assets/icons/table.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class=\\"ql-fill ql-transparent\\"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/table.svg?`)},"./assets/icons/underline.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/underline.svg?`)},"./assets/icons/video.svg":function(module,exports){eval(`// Module
var code = "<svg viewbox=\\"0 0 18 18\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";
// Exports
module.exports = code;

//# sourceURL=webpack://Quill/./assets/icons/video.svg?`)},"./blots/block.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockDelta", function() { return blockDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubbleFormats", function() { return bubbleFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockEmbed", function() { return BlockEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Block; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ "./blots/break.js");
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ "./blots/inline.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./blots/text.js");






const NEWLINE_LENGTH = 1;

class Block extends parchment__WEBPACK_IMPORTED_MODULE_2__["BlockBlot"] {
  constructor(scroll, domNode) {
    super(scroll, domNode);
    this.cache = {};
  }

  delta() {
    if (this.cache.delta == null) {
      this.cache.delta = blockDelta(this);
    }

    return this.cache.delta;
  }

  deleteAt(index, length) {
    super.deleteAt(index, length);
    this.cache = {};
  }

  formatAt(index, length, name, value) {
    if (length <= 0) return;

    if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].BLOCK)) {
      if (index + length === this.length()) {
        this.format(name, value);
      }
    } else {
      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);
    }

    this.cache = {};
  }

  insertAt(index, value, def) {
    if (def != null) {
      super.insertAt(index, value, def);
      this.cache = {};
      return;
    }

    if (value.length === 0) return;
    const lines = value.split('\\n');
    const text = lines.shift();

    if (text.length > 0) {
      if (index < this.length() - 1 || this.children.tail == null) {
        super.insertAt(Math.min(index, this.length() - 1), text);
      } else {
        this.children.tail.insertAt(this.children.tail.length(), text);
      }

      this.cache = {};
    }

    let block = this;
    lines.reduce((lineIndex, line) => {
      block = block.split(lineIndex, true);
      block.insertAt(0, line);
      return line.length;
    }, index + text.length);
  }

  insertBefore(blot, ref) {
    const {
      head
    } = this.children;
    super.insertBefore(blot, ref);

    if (head instanceof _break__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      head.remove();
    }

    this.cache = {};
  }

  length() {
    if (this.cache.length == null) {
      this.cache.length = super.length() + NEWLINE_LENGTH;
    }

    return this.cache.length;
  }

  moveChildren(target, ref) {
    super.moveChildren(target, ref);
    this.cache = {};
  }

  optimize(context) {
    super.optimize(context);
    this.cache = {};
  }

  path(index) {
    return super.path(index, true);
  }

  removeChild(child) {
    super.removeChild(child);
    this.cache = {};
  }

  split(index, force = false) {
    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
      const clone = this.clone();

      if (index === 0) {
        this.parent.insertBefore(clone, this);
        return this;
      }

      this.parent.insertBefore(clone, this.next);
      return clone;
    }

    const next = super.split(index, force);
    this.cache = {};
    return next;
  }

}

Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = _break__WEBPACK_IMPORTED_MODULE_3__["default"];
Block.allowedChildren = [_break__WEBPACK_IMPORTED_MODULE_3__["default"], _inline__WEBPACK_IMPORTED_MODULE_4__["default"], parchment__WEBPACK_IMPORTED_MODULE_2__["EmbedBlot"], _text__WEBPACK_IMPORTED_MODULE_5__["default"]];

class BlockEmbed extends parchment__WEBPACK_IMPORTED_MODULE_2__["EmbedBlot"] {
  attach() {
    super.attach();
    this.attributes = new parchment__WEBPACK_IMPORTED_MODULE_2__["AttributorStore"](this.domNode);
  }

  delta() {
    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(this.value(), extend__WEBPACK_IMPORTED_MODULE_0___default()(this.formats(), this.attributes.values()));
  }

  format(name, value) {
    const attribute = this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].BLOCK_ATTRIBUTE);

    if (attribute != null) {
      this.attributes.attribute(attribute, value);
    }
  }

  formatAt(index, length, name, value) {
    this.format(name, value);
  }

  insertAt(index, value, def) {
    if (typeof value === 'string' && value.endsWith('\\n')) {
      const block = this.scroll.create(Block.blotName);
      this.parent.insertBefore(block, index === 0 ? this : this.next);
      block.insertAt(0, value.slice(0, -1));
    } else {
      super.insertAt(index, value, def);
    }
  }

}

BlockEmbed.scope = parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].BLOCK_BLOT; // It is important for cursor behavior BlockEmbeds use tags that are block level elements

function blockDelta(blot, filter = true) {
  return blot.descendants(parchment__WEBPACK_IMPORTED_MODULE_2__["LeafBlot"]).reduce((delta, leaf) => {
    if (leaf.length() === 0) {
      return delta;
    }

    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));
  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a()).insert('\\n', bubbleFormats(blot));
}

function bubbleFormats(blot, formats = {}, filter = true) {
  if (blot == null) return formats;

  if (typeof blot.formats === 'function') {
    formats = extend__WEBPACK_IMPORTED_MODULE_0___default()(formats, blot.formats());

    if (filter) {
      // exclude syntax highlighting from deltas and getFormat()
      delete formats['code-token'];
    }
  }

  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }

  return bubbleFormats(blot.parent, formats, filter);
}



//# sourceURL=webpack://Quill/./blots/block.js?`)},"./blots/break.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");


class Break extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  static value() {
    return undefined;
  }

  optimize() {
    if (this.prev || this.next) {
      this.remove();
    }
  }

  length() {
    return 0;
  }

  value() {
    return '';
  }

}

Break.blotName = 'break';
Break.tagName = 'BR';
/* harmony default export */ __webpack_exports__["default"] = (Break);

//# sourceURL=webpack://Quill/./blots/break.js?`)},"./blots/container.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");


class Container extends parchment__WEBPACK_IMPORTED_MODULE_0__["ContainerBlot"] {}

/* harmony default export */ __webpack_exports__["default"] = (Container);

//# sourceURL=webpack://Quill/./blots/container.js?`)},"./blots/cursor.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./blots/text.js");



class Cursor extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  static value() {
    return undefined;
  }

  constructor(scroll, domNode, selection) {
    super(scroll, domNode);
    this.selection = selection;
    this.textNode = document.createTextNode(Cursor.CONTENTS);
    this.domNode.appendChild(this.textNode);
    this.savedLength = 0;
  }

  detach() {
    // super.detach() will also clear domNode.__blot
    if (this.parent != null) this.parent.removeChild(this);
  }

  format(name, value) {
    if (this.savedLength !== 0) {
      super.format(name, value);
      return;
    }

    let target = this;
    let index = 0;

    while (target != null && target.statics.scope !== parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK_BLOT) {
      index += target.offset(target.parent);
      target = target.parent;
    }

    if (target != null) {
      this.savedLength = Cursor.CONTENTS.length;
      target.optimize();
      target.formatAt(index, Cursor.CONTENTS.length, name, value);
      this.savedLength = 0;
    }
  }

  index(node, offset) {
    if (node === this.textNode) return 0;
    return super.index(node, offset);
  }

  length() {
    return this.savedLength;
  }

  position() {
    return [this.textNode, this.textNode.data.length];
  }

  remove() {
    super.remove();
    this.parent = null;
  }

  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const range = this.selection.getNativeRange(); // Link format will insert text outside of anchor tag

    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    }

    const prevTextBlot = this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"] ? this.prev : null;
    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;
    const nextTextBlot = this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"] ? this.next : null;
    const nextText = nextTextBlot ? nextTextBlot.text : '';
    const {
      textNode
    } = this; // take text from inside this blot and reset it

    const newText = textNode.data.split(Cursor.CONTENTS).join('');
    textNode.data = Cursor.CONTENTS; // proactively merge TextBlots around cursor so that optimization
    // doesn't lose the cursor.  the reason we are here in cursor.restore
    // could be that the user clicked in prevTextBlot or nextTextBlot, or
    // the user typed something.

    let mergedTextBlot;

    if (prevTextBlot) {
      mergedTextBlot = prevTextBlot;

      if (newText || nextTextBlot) {
        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);

        if (nextTextBlot) {
          nextTextBlot.remove();
        }
      }
    } else if (nextTextBlot) {
      mergedTextBlot = nextTextBlot;
      nextTextBlot.insertAt(0, newText);
    } else {
      const newTextNode = document.createTextNode(newText);
      mergedTextBlot = this.scroll.create(newTextNode);
      this.parent.insertBefore(mergedTextBlot, this);
    }

    this.remove();

    if (range) {
      // calculate selection to restore
      const remapOffset = (node, offset) => {
        if (prevTextBlot && node === prevTextBlot.domNode) {
          return offset;
        }

        if (node === textNode) {
          return prevTextLength + offset - 1;
        }

        if (nextTextBlot && node === nextTextBlot.domNode) {
          return prevTextLength + newText.length + offset;
        }

        return null;
      };

      const start = remapOffset(range.start.node, range.start.offset);
      const end = remapOffset(range.end.node, range.end.offset);

      if (start !== null && end !== null) {
        return {
          startNode: mergedTextBlot.domNode,
          startOffset: start,
          endNode: mergedTextBlot.domNode,
          endOffset: end
        };
      }
    }

    return null;
  }

  update(mutations, context) {
    if (mutations.some(mutation => {
      return mutation.type === 'characterData' && mutation.target === this.textNode;
    })) {
      const range = this.restore();
      if (range) context.range = range;
    }
  }

  value() {
    return '';
  }

}

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\\uFEFF'; // Zero width no break space

/* harmony default export */ __webpack_exports__["default"] = (Cursor);

//# sourceURL=webpack://Quill/./blots/cursor.js?`)},"./blots/embed.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./blots/text.js");


const GUARD_TEXT = '\\uFEFF';

class Embed extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  constructor(scroll, node) {
    super(scroll, node);
    this.contentNode = document.createElement('span');
    this.contentNode.setAttribute('contenteditable', false);
    Array.from(this.domNode.childNodes).forEach(childNode => {
      this.contentNode.appendChild(childNode);
    });
    this.leftGuard = document.createTextNode(GUARD_TEXT);
    this.rightGuard = document.createTextNode(GUARD_TEXT);
    this.domNode.appendChild(this.leftGuard);
    this.domNode.appendChild(this.contentNode);
    this.domNode.appendChild(this.rightGuard);
  }

  index(node, offset) {
    if (node === this.leftGuard) return 0;
    if (node === this.rightGuard) return 1;
    return super.index(node, offset);
  }

  restore(node) {
    let range;
    let textNode;
    const text = node.data.split(GUARD_TEXT).join('');

    if (node === this.leftGuard) {
      if (this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        const prevLength = this.prev.length();
        this.prev.insertAt(prevLength, text);
        range = {
          startNode: this.prev.domNode,
          startOffset: prevLength + text.length
        };
      } else {
        textNode = document.createTextNode(text);
        this.parent.insertBefore(this.scroll.create(textNode), this);
        range = {
          startNode: textNode,
          startOffset: text.length
        };
      }
    } else if (node === this.rightGuard) {
      if (this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        this.next.insertAt(0, text);
        range = {
          startNode: this.next.domNode,
          startOffset: text.length
        };
      } else {
        textNode = document.createTextNode(text);
        this.parent.insertBefore(this.scroll.create(textNode), this.next);
        range = {
          startNode: textNode,
          startOffset: text.length
        };
      }
    }

    node.data = GUARD_TEXT;
    return range;
  }

  update(mutations, context) {
    mutations.forEach(mutation => {
      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {
        const range = this.restore(mutation.target);
        if (range) context.range = range;
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Embed);

//# sourceURL=webpack://Quill/./blots/embed.js?`)},"./blots/inline.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./break */ "./blots/break.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./blots/text.js");




class Inline extends parchment__WEBPACK_IMPORTED_MODULE_0__["InlineBlot"] {
  static compare(self, other) {
    const selfIndex = Inline.order.indexOf(self);
    const otherIndex = Inline.order.indexOf(other);

    if (selfIndex >= 0 || otherIndex >= 0) {
      return selfIndex - otherIndex;
    }

    if (self === other) {
      return 0;
    }

    if (self < other) {
      return -1;
    }

    return 1;
  }

  formatAt(index, length, name, value) {
    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOT)) {
      const blot = this.isolate(index, length);

      if (value) {
        blot.wrap(name, value);
      }
    } else {
      super.formatAt(index, length, name, value);
    }
  }

  optimize(context) {
    super.optimize(context);

    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const parent = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(parent);
      parent.wrap(this);
    }
  }

}

Inline.allowedChildren = [Inline, _break__WEBPACK_IMPORTED_MODULE_1__["default"], parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"], _text__WEBPACK_IMPORTED_MODULE_2__["default"]]; // Lower index means deeper in the DOM tree, since not found (-1) is for embeds

Inline.order = ['cursor', 'inline', // Must be lower
'link', // Chrome wants <a> to be lower
'underline', 'strike', 'italic', 'bold', 'script', 'code' // Must be higher
];
/* harmony default export */ __webpack_exports__["default"] = (Inline);

//# sourceURL=webpack://Quill/./blots/inline.js?`)},"./blots/scroll.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./blots/block.js");
/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ "./blots/break.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./blots/container.js");






function isLine(blot) {
  return blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__["default"] || blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"];
}

class Scroll extends parchment__WEBPACK_IMPORTED_MODULE_0__["ScrollBlot"] {
  constructor(registry, domNode, {
    emitter
  }) {
    super(registry, domNode);
    this.emitter = emitter;
    this.batch = false;
    this.optimize();
    this.enable();
    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));
  }

  batchStart() {
    if (!Array.isArray(this.batch)) {
      this.batch = [];
    }
  }

  batchEnd() {
    const mutations = this.batch;
    this.batch = false;
    this.update(mutations);
  }

  emitMount(blot) {
    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_BLOT_MOUNT, blot);
  }

  emitUnmount(blot) {
    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_BLOT_UNMOUNT, blot);
  }

  deleteAt(index, length) {
    const [first, offset] = this.line(index);
    const [last] = this.line(index + length);
    super.deleteAt(index, length);

    if (last != null && first !== last && offset > 0) {
      if (first instanceof _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"] || last instanceof _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"]) {
        this.optimize();
        return;
      }

      const ref = last.children.head instanceof _break__WEBPACK_IMPORTED_MODULE_3__["default"] ? null : last.children.head;
      first.moveChildren(last, ref);
      first.remove();
    }

    this.optimize();
  }

  enable(enabled = true) {
    this.domNode.setAttribute('contenteditable', enabled);
  }

  formatAt(index, length, format, value) {
    super.formatAt(index, length, format, value);
    this.optimize();
  }

  handleDragStart(event) {
    event.preventDefault();
  }

  insertAt(index, value, def) {
    if (index >= this.length()) {
      if (def == null || this.scroll.query(value, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK) == null) {
        const blot = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(blot);

        if (def == null && value.endsWith('\\n')) {
          blot.insertAt(0, value.slice(0, -1), def);
        } else {
          blot.insertAt(0, value, def);
        }
      } else {
        const embed = this.scroll.create(value, def);
        this.appendChild(embed);
      }
    } else {
      super.insertAt(index, value, def);
    }

    this.optimize();
  }

  insertBefore(blot, ref) {
    if (blot.statics.scope === parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE_BLOT) {
      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);
      wrapper.appendChild(blot);
      super.insertBefore(wrapper, ref);
    } else {
      super.insertBefore(blot, ref);
    }
  }

  isEnabled() {
    return this.domNode.getAttribute('contenteditable') === 'true';
  }

  leaf(index) {
    return this.path(index).pop() || [null, -1];
  }

  line(index) {
    if (index === this.length()) {
      return this.line(index - 1);
    }

    return this.descendant(isLine, index);
  }

  lines(index = 0, length = Number.MAX_VALUE) {
    const getLines = (blot, blotIndex, blotLength) => {
      let lines = [];
      let lengthLeft = blotLength;
      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {
        if (isLine(child)) {
          lines.push(child);
        } else if (child instanceof parchment__WEBPACK_IMPORTED_MODULE_0__["ContainerBlot"]) {
          lines = lines.concat(getLines(child, childIndex, lengthLeft));
        }

        lengthLeft -= childLength;
      });
      return lines;
    };

    return getLines(this, index, length);
  }

  optimize(mutations = [], context = {}) {
    if (this.batch) return;
    super.optimize(mutations, context);

    if (mutations.length > 0) {
      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_OPTIMIZE, mutations, context);
    }
  }

  path(index) {
    return super.path(index).slice(1); // Exclude self
  }

  remove() {// Never remove self
  }

  update(mutations) {
    if (this.batch) {
      if (Array.isArray(mutations)) {
        this.batch = this.batch.concat(mutations);
      }

      return;
    }

    let source = _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER;

    if (typeof mutations === 'string') {
      source = mutations;
    }

    if (!Array.isArray(mutations)) {
      mutations = this.observer.takeRecords();
    }

    if (mutations.length > 0) {
      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_BEFORE_UPDATE, source, mutations);
    }

    super.update(mutations.concat([])); // pass copy

    if (mutations.length > 0) {
      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_UPDATE, source, mutations);
    }
  }

}

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = _block__WEBPACK_IMPORTED_MODULE_2__["default"];
Scroll.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_2__["default"], _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"], _container__WEBPACK_IMPORTED_MODULE_4__["default"]];
/* harmony default export */ __webpack_exports__["default"] = (Scroll);

//# sourceURL=webpack://Quill/./blots/scroll.js?`)},"./blots/text.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeText", function() { return escapeText; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");


class Text extends parchment__WEBPACK_IMPORTED_MODULE_0__["TextBlot"] {}

function escapeText(text) {
  return text.replace(/[&<>"']/g, s => {
    // https://lodash.com/docs#escape
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return entityMap[s];
  });
}



//# sourceURL=webpack://Quill/./blots/text.js?`)},"./core.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/quill */ "./core/quill.js");
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blots/break */ "./blots/break.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blots/container */ "./blots/container.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blots/embed */ "./blots/embed.js");
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blots/inline */ "./blots/inline.js");
/* harmony import */ var _blots_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blots/scroll */ "./blots/scroll.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blots/text */ "./blots/text.js");
/* harmony import */ var _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clipboard */ "./modules/clipboard.js");
/* harmony import */ var _modules_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/history */ "./modules/history.js");
/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/keyboard */ "./modules/keyboard.js");
/* harmony import */ var _modules_uploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/uploader */ "./modules/uploader.js");













_core_quill__WEBPACK_IMPORTED_MODULE_0__["default"].register({
  'blots/block': _blots_block__WEBPACK_IMPORTED_MODULE_1__["default"],
  'blots/block/embed': _blots_block__WEBPACK_IMPORTED_MODULE_1__["BlockEmbed"],
  'blots/break': _blots_break__WEBPACK_IMPORTED_MODULE_2__["default"],
  'blots/container': _blots_container__WEBPACK_IMPORTED_MODULE_3__["default"],
  'blots/cursor': _blots_cursor__WEBPACK_IMPORTED_MODULE_4__["default"],
  'blots/embed': _blots_embed__WEBPACK_IMPORTED_MODULE_5__["default"],
  'blots/inline': _blots_inline__WEBPACK_IMPORTED_MODULE_6__["default"],
  'blots/scroll': _blots_scroll__WEBPACK_IMPORTED_MODULE_7__["default"],
  'blots/text': _blots_text__WEBPACK_IMPORTED_MODULE_8__["default"],
  'modules/clipboard': _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__["default"],
  'modules/history': _modules_history__WEBPACK_IMPORTED_MODULE_10__["default"],
  'modules/keyboard': _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__["default"],
  'modules/uploader': _modules_uploader__WEBPACK_IMPORTED_MODULE_12__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (_core_quill__WEBPACK_IMPORTED_MODULE_0__["default"]);

//# sourceURL=webpack://Quill/./core.js?`)},"./core/editor.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection */ "./core/selection.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/break */ "./blots/break.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blots/text */ "./blots/text.js");










const ASCII = /^[ -~]*$/;

class Editor {
  constructor(scroll) {
    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  applyDelta(delta) {
    let consumeNextNewline = false;
    this.scroll.update();
    let scrollLength = this.scroll.length();
    this.scroll.batchStart();
    const normalizedDelta = normalizeDelta(delta);
    normalizedDelta.reduce((index, op) => {
      const length = op.retain || op.delete || op.insert.length || 1;
      let attributes = op.attributes || {};

      if (op.insert != null) {
        if (typeof op.insert === 'string') {
          let text = op.insert;

          if (text.endsWith('\\n') && consumeNextNewline) {
            consumeNextNewline = false;
            text = text.slice(0, -1);
          }

          if ((index >= scrollLength || this.scroll.descendant(_blots_block__WEBPACK_IMPORTED_MODULE_7__["BlockEmbed"], index)[0]) && !text.endsWith('\\n')) {
            consumeNextNewline = true;
          }

          this.scroll.insertAt(index, text);
          const [line, offset] = this.scroll.line(index);
          let formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(line));

          if (line instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__["default"]) {
            const [leaf] = line.descendant(parchment__WEBPACK_IMPORTED_MODULE_4__["LeafBlot"], offset);
            formats = extend__WEBPACK_IMPORTED_MODULE_2___default()(formats, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(leaf));
          }

          attributes = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(formats, attributes) || {};
        } else if (typeof op.insert === 'object') {
          const key = Object.keys(op.insert)[0]; // There should only be one key

          if (key == null) return index;
          this.scroll.insertAt(index, key, op.insert[key]);
        }

        scrollLength += length;
      }

      Object.keys(attributes).forEach(name => {
        this.scroll.formatAt(index, length, name, attributes[name]);
      });
      return index + length;
    }, 0);
    normalizedDelta.reduce((index, op) => {
      if (typeof op.delete === 'number') {
        this.scroll.deleteAt(index, op.delete);
        return index;
      }

      return index + (op.retain || op.insert.length || 1);
    }, 0);
    this.scroll.batchEnd();
    this.scroll.optimize();
    return this.update(normalizedDelta);
  }

  deleteText(index, length) {
    this.scroll.deleteAt(index, length);
    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).delete(length));
  }

  formatLine(index, length, formats = {}) {
    this.scroll.update();
    Object.keys(formats).forEach(format => {
      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {
        line.format(format, formats[format]);
      });
    });
    this.scroll.optimize();
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));
    return this.update(delta);
  }

  formatText(index, length, formats = {}) {
    Object.keys(formats).forEach(format => {
      this.scroll.formatAt(index, length, format, formats[format]);
    });
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));
    return this.update(delta);
  }

  getContents(index, length) {
    return this.delta.slice(index, index + length);
  }

  getDelta() {
    return this.scroll.lines().reduce((delta, line) => {
      return delta.concat(line.delta());
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());
  }

  getFormat(index, length = 0) {
    let lines = [];
    let leaves = [];

    if (length === 0) {
      this.scroll.path(index).forEach(path => {
        const [blot] = path;

        if (blot instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__["default"]) {
          lines.push(blot);
        } else if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["LeafBlot"]) {
          leaves.push(blot);
        }
      });
    } else {
      lines = this.scroll.lines(index, length);
      leaves = this.scroll.descendants(parchment__WEBPACK_IMPORTED_MODULE_4__["LeafBlot"], index, length);
    }

    const formatsArr = [lines, leaves].map(blots => {
      if (blots.length === 0) return {};
      let formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(blots.shift());

      while (Object.keys(formats).length > 0) {
        const blot = blots.shift();
        if (blot == null) return formats;
        formats = combineFormats(Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(blot), formats);
      }

      return formats;
    });
    return extend__WEBPACK_IMPORTED_MODULE_2___default.a.apply(extend__WEBPACK_IMPORTED_MODULE_2___default.a, formatsArr);
  }

  getHTML(index, length) {
    const [line, lineOffset] = this.scroll.line(index);

    if (line.length() >= lineOffset + length) {
      return convertHTML(line, lineOffset, length, true);
    }

    return convertHTML(this.scroll, index, length, true);
  }

  getText(index, length) {
    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');
  }

  insertEmbed(index, embed, value) {
    this.scroll.insertAt(index, embed, value);
    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert({
      [embed]: value
    }));
  }

  insertText(index, text, formats = {}) {
    text = text.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');
    this.scroll.insertAt(index, text);
    Object.keys(formats).forEach(format => {
      this.scroll.formatAt(index, text.length, format, formats[format]);
    });
    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert(text, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats)));
  }

  isBlank() {
    if (this.scroll.children.length === 0) return true;
    if (this.scroll.children.length > 1) return false;
    const block = this.scroll.children.head;
    if (block.statics.blotName !== _blots_block__WEBPACK_IMPORTED_MODULE_7__["default"].blotName) return false;
    if (block.children.length > 1) return false;
    return block.children.head instanceof _blots_break__WEBPACK_IMPORTED_MODULE_8__["default"];
  }

  removeFormat(index, length) {
    const text = this.getText(index, length);
    const [line, offset] = this.scroll.line(index + length);
    let suffixLength = 0;
    let suffix = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a();

    if (line != null) {
      suffixLength = line.length() - offset;
      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\\n');
    }

    const contents = this.getContents(index, length + suffixLength);
    const diff = contents.diff(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(text).concat(suffix));
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(diff);
    return this.applyDelta(delta);
  }

  update(change, mutations = [], selectionInfo = undefined) {
    const oldDelta = this.delta;

    if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {
      // Optimization for character changes
      const textBlot = this.scroll.find(mutations[0].target);
      const formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(textBlot);
      const index = textBlot.offset(this.scroll);
      const oldValue = mutations[0].oldValue.replace(_blots_cursor__WEBPACK_IMPORTED_MODULE_6__["default"].CONTENTS, '');
      const oldText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(oldValue);
      const newText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(textBlot.value());
      const relativeSelectionInfo = selectionInfo && {
        oldRange: shiftRange(selectionInfo.oldRange, -index),
        newRange: shiftRange(selectionInfo.newRange, -index)
      };
      const diffDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));
      change = diffDelta.reduce((delta, op) => {
        if (op.insert) {
          return delta.insert(op.insert, formats);
        }

        return delta.push(op);
      }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());
      this.delta = oldDelta.compose(change);
    } else {
      this.delta = this.getDelta();

      if (!change || !deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(oldDelta.compose(change), this.delta)) {
        change = oldDelta.diff(this.delta, selectionInfo);
      }
    }

    return change;
  }

}

function convertListHTML(items, lastIndent, types) {
  if (items.length === 0) {
    const [endTag] = getListType(types.pop());

    if (lastIndent <= 0) {
      return "</li></".concat(endTag, ">");
    }

    return "</li></".concat(endTag, ">").concat(convertListHTML([], lastIndent - 1, types));
  }

  const [{
    child,
    offset,
    length,
    indent,
    type
  }, ...rest] = items;
  const [tag, attribute] = getListType(type);

  if (indent > lastIndent) {
    types.push(type);

    if (indent === lastIndent + 1) {
      return "<".concat(tag, "><li").concat(attribute, ">").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));
    }

    return "<".concat(tag, "><li>").concat(convertListHTML(items, lastIndent + 1, types));
  }

  const previousType = types[types.length - 1];

  if (indent === lastIndent && type === previousType) {
    return "</li><li".concat(attribute, ">").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));
  }

  const [endTag] = getListType(types.pop());
  return "</li></".concat(endTag, ">").concat(convertListHTML(items, lastIndent - 1, types));
}

function convertHTML(blot, index, length, isRoot = false) {
  if (typeof blot.html === 'function') {
    return blot.html(index, length);
  }

  if (blot instanceof _blots_text__WEBPACK_IMPORTED_MODULE_9__["default"]) {
    return Object(_blots_text__WEBPACK_IMPORTED_MODULE_9__["escapeText"])(blot.value().slice(index, index + length));
  }

  if (blot.children) {
    // TODO fix API
    if (blot.statics.blotName === 'list-container') {
      const items = [];
      blot.children.forEachAt(index, length, (child, offset, childLength) => {
        const formats = child.formats();
        items.push({
          child,
          offset,
          length: childLength,
          indent: formats.indent || 0,
          type: formats.list
        });
      });
      return convertListHTML(items, -1, []);
    }

    const parts = [];
    blot.children.forEachAt(index, length, (child, offset, childLength) => {
      parts.push(convertHTML(child, offset, childLength));
    });

    if (isRoot || blot.statics.blotName === 'list') {
      return parts.join('');
    }

    const {
      outerHTML,
      innerHTML
    } = blot.domNode;
    const [start, end] = outerHTML.split(">".concat(innerHTML, "<")); // TODO cleanup

    if (start === '<table') {
      return "<table style=\\"border: 1px solid #000;\\">".concat(parts.join(''), "<").concat(end);
    }

    return "".concat(start, ">").concat(parts.join(''), "<").concat(end);
  }

  return blot.domNode.outerHTML;
}

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce((merged, name) => {
    if (formats[name] == null) return merged;

    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }

    return merged;
  }, {});
}

function getListType(type) {
  const tag = type === 'ordered' ? 'ol' : 'ul';

  switch (type) {
    case 'checked':
      return [tag, ' data-list="checked"'];

    case 'unchecked':
      return [tag, ' data-list="unchecked"'];

    default:
      return [tag, ''];
  }
}

function normalizeDelta(delta) {
  return delta.reduce((normalizedDelta, op) => {
    if (typeof op.insert === 'string') {
      const text = op.insert.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');
      return normalizedDelta.insert(text, op.attributes);
    }

    return normalizedDelta.push(op);
  }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());
}

function shiftRange({
  index,
  length
}, amount) {
  return new _selection__WEBPACK_IMPORTED_MODULE_5__["Range"](index + amount, length);
}

/* harmony default export */ __webpack_exports__["default"] = (Editor);

//# sourceURL=webpack://Quill/./core/editor.js?`)},"./core/emitter.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instances */ "./core/instances.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./core/logger.js");



const debug = Object(_logger__WEBPACK_IMPORTED_MODULE_2__["default"])('quill:events');
const EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];
EVENTS.forEach(eventName => {
  document.addEventListener(eventName, (...args) => {
    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {
      const quill = _instances__WEBPACK_IMPORTED_MODULE_1__["default"].get(node);

      if (quill && quill.emitter) {
        quill.emitter.handleDOM(...args);
      }
    });
  });
});

class Emitter extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor() {
    super();
    this.listeners = {};
    this.on('error', debug.error);
  }

  emit(...args) {
    debug.log.call(debug, ...args);
    super.emit(...args);
  }

  handleDOM(event, ...args) {
    (this.listeners[event.type] || []).forEach(({
      node,
      handler
    }) => {
      if (event.target === node || node.contains(event.target)) {
        handler(event, ...args);
      }
    });
  }

  listenDOM(eventName, node, handler) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push({
      node,
      handler
    });
  }

}

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_BLOT_MOUNT: 'scroll-blot-mount',
  SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};
/* harmony default export */ __webpack_exports__["default"] = (Emitter);

//# sourceURL=webpack://Quill/./core/emitter.js?`)},"./core/instances.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (new WeakMap());

//# sourceURL=webpack://Quill/./core/instances.js?`)},"./core/logger.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
const levels = ['error', 'warn', 'log', 'info'];
let level = 'warn';

function debug(method, ...args) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    console[method](...args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce((logger, method) => {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

namespace.level = newLevel => {
  level = newLevel;
};

debug.level = namespace.level;
/* harmony default export */ __webpack_exports__["default"] = (namespace);

//# sourceURL=webpack://Quill/./core/logger.js?`)},"./core/module.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
class Module {
  constructor(quill, options = {}) {
    this.quill = quill;
    this.options = options;
  }

}

Module.DEFAULTS = {};
/* harmony default export */ __webpack_exports__["default"] = (Module);

//# sourceURL=webpack://Quill/./core/module.js?`)},"./core/quill.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalRegistry", function() { return globalRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandConfig", function() { return expandConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overload", function() { return overload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quill; });
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ "./core/editor.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ "./core/emitter.js");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module */ "./core/module.js");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ "./core/selection.js");
/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instances */ "./core/instances.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "./core/logger.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ "./core/theme.js");










const debug = Object(_logger__WEBPACK_IMPORTED_MODULE_8__["default"])('quill');
const globalRegistry = new parchment__WEBPACK_IMPORTED_MODULE_1__["Registry"]();
parchment__WEBPACK_IMPORTED_MODULE_1__["ParentBlot"].uiClass = 'ql-ui';

class Quill {
  static debug(limit) {
    if (limit === true) {
      limit = 'log';
    }

    _logger__WEBPACK_IMPORTED_MODULE_8__["default"].level(limit);
  }

  static find(node) {
    return _instances__WEBPACK_IMPORTED_MODULE_7__["default"].get(node) || globalRegistry.find(node);
  }

  static import(name) {
    if (this.imports[name] == null) {
      debug.error("Cannot import ".concat(name, ". Are you sure it was registered?"));
    }

    return this.imports[name];
  }

  static register(path, target, overwrite = false) {
    if (typeof path !== 'string') {
      const name = path.attrName || path.blotName;

      if (typeof name === 'string') {
        // register(Blot | Attributor, overwrite)
        this.register("formats/".concat(name), path, target);
      } else {
        Object.keys(path).forEach(key => {
          this.register(key, path[key], target);
        });
      }
    } else {
      if (this.imports[path] != null && !overwrite) {
        debug.warn("Overwriting ".concat(path, " with"), target);
      }

      this.imports[path] = target;

      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
        globalRegistry.register(target);
      }

      if (typeof target.register === 'function') {
        target.register(globalRegistry);
      }
    }
  }

  constructor(container, options = {}) {
    this.options = expandConfig(container, options);
    this.container = this.options.container;

    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }

    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }

    const html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    _instances__WEBPACK_IMPORTED_MODULE_7__["default"].set(this.container, this);
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const ScrollBlot = this.options.registry.query(parchment__WEBPACK_IMPORTED_MODULE_1__["ScrollBlot"].blotName);
    this.scroll = new ScrollBlot(this.options.registry, this.root, {
      emitter: this.emitter
    });
    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_3__["default"](this.scroll);
    this.selection = new _selection__WEBPACK_IMPORTED_MODULE_6__["default"](this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap

    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.uploader = this.theme.addModule('uploader');
    this.theme.init();
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.EDITOR_CHANGE, type => {
      if (type === _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.TEXT_CHANGE) {
        this.root.classList.toggle('ql-blank', this.editor.isBlank());
      }
    });
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.SCROLL_UPDATE, (source, mutations) => {
      const oldRange = this.selection.lastRange;
      const [newRange] = this.selection.getRange();
      const selectionInfo = oldRange && newRange ? {
        oldRange,
        newRange
      } : undefined;
      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);
    });
    const contents = this.clipboard.convert({
      html: "".concat(html, "<p><br></p>"),
      text: '\\n'
    });
    this.setContents(contents);
    this.history.clear();

    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }

    if (this.options.readOnly) {
      this.disable();
    }

    this.allowReadOnlyEdits = false;
  }

  addContainer(container, refNode = null) {
    if (typeof container === 'string') {
      const className = container;
      container = document.createElement('div');
      container.classList.add(className);
    }

    this.container.insertBefore(container, refNode);
    return container;
  }

  blur() {
    this.selection.setRange(null);
  }

  deleteText(index, length, source) {
    [index, length,, source] = overload(index, length, source);
    return modify.call(this, () => {
      return this.editor.deleteText(index, length);
    }, source, index, -1 * length);
  }

  disable() {
    this.enable(false);
  }

  editReadOnly(modifier) {
    this.allowReadOnlyEdits = true;
    const value = modifier();
    this.allowReadOnlyEdits = false;
    return value;
  }

  enable(enabled = true) {
    this.scroll.enable(enabled);
    this.container.classList.toggle('ql-disabled', !enabled);
  }

  focus() {
    const {
      scrollTop
    } = this.scrollingContainer;
    this.selection.focus();
    this.scrollingContainer.scrollTop = scrollTop;
    this.scrollIntoView();
  }

  format(name, value, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    return modify.call(this, () => {
      const range = this.getSelection(true);
      let change = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();
      if (range == null) return change;

      if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__["Scope"].BLOCK)) {
        change = this.editor.formatLine(range.index, range.length, {
          [name]: value
        });
      } else if (range.length === 0) {
        this.selection.format(name, value);
        return change;
      } else {
        change = this.editor.formatText(range.index, range.length, {
          [name]: value
        });
      }

      this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
      return change;
    }, source);
  }

  formatLine(index, length, name, value, source) {
    let formats; // eslint-disable-next-line prefer-const

    [index, length, formats, source] = overload(index, length, name, value, source);
    return modify.call(this, () => {
      return this.editor.formatLine(index, length, formats);
    }, source, index, 0);
  }

  formatText(index, length, name, value, source) {
    let formats; // eslint-disable-next-line prefer-const

    [index, length, formats, source] = overload(index, length, name, value, source);
    return modify.call(this, () => {
      return this.editor.formatText(index, length, formats);
    }, source, index, 0);
  }

  getBounds(index, length = 0) {
    let bounds;

    if (typeof index === 'number') {
      bounds = this.selection.getBounds(index, length);
    } else {
      bounds = this.selection.getBounds(index.index, index.length);
    }

    const containerBounds = this.container.getBoundingClientRect();
    return {
      bottom: bounds.bottom - containerBounds.top,
      height: bounds.height,
      left: bounds.left - containerBounds.left,
      right: bounds.right - containerBounds.left,
      top: bounds.top - containerBounds.top,
      width: bounds.width
    };
  }

  getContents(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getContents(index, length);
  }

  getFormat(index = this.getSelection(true), length = 0) {
    if (typeof index === 'number') {
      return this.editor.getFormat(index, length);
    }

    return this.editor.getFormat(index.index, index.length);
  }

  getIndex(blot) {
    return blot.offset(this.scroll);
  }

  getLength() {
    return this.scroll.length();
  }

  getLeaf(index) {
    return this.scroll.leaf(index);
  }

  getLine(index) {
    return this.scroll.line(index);
  }

  getLines(index = 0, length = Number.MAX_VALUE) {
    if (typeof index !== 'number') {
      return this.scroll.lines(index.index, index.length);
    }

    return this.scroll.lines(index, length);
  }

  getModule(name) {
    return this.theme.modules[name];
  }

  getSelection(focus = false) {
    if (focus) this.focus();
    this.update(); // Make sure we access getRange with editor in consistent state

    return this.selection.getRange()[0];
  }

  getSemanticHTML(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getHTML(index, length);
  }

  getText(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getText(index, length);
  }

  hasFocus() {
    return this.selection.hasFocus();
  }

  insertEmbed(index, embed, value, source = Quill.sources.API) {
    return modify.call(this, () => {
      return this.editor.insertEmbed(index, embed, value);
    }, source, index);
  }

  insertText(index, text, name, value, source) {
    let formats; // eslint-disable-next-line prefer-const

    [index,, formats, source] = overload(index, 0, name, value, source);
    return modify.call(this, () => {
      return this.editor.insertText(index, text, formats);
    }, source, index, text.length);
  }

  isEnabled() {
    return this.scroll.isEnabled();
  }

  off(...args) {
    return this.emitter.off(...args);
  }

  on(...args) {
    return this.emitter.on(...args);
  }

  once(...args) {
    return this.emitter.once(...args);
  }

  removeFormat(index, length, source) {
    [index, length,, source] = overload(index, length, source);
    return modify.call(this, () => {
      return this.editor.removeFormat(index, length);
    }, source, index);
  }

  scrollIntoView() {
    this.selection.scrollIntoView(this.scrollingContainer);
  }

  setContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    return modify.call(this, () => {
      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);
      const length = this.getLength();
      const deleted = this.editor.deleteText(0, length);
      const applied = this.editor.applyDelta(delta);
      const lastOp = applied.ops[applied.ops.length - 1];

      if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\\n') {
        this.editor.deleteText(this.getLength() - 1, 1);
        applied.delete(1);
      }

      return deleted.compose(applied);
    }, source);
  }

  setSelection(index, length, source) {
    if (index == null) {
      this.selection.setRange(null, length || Quill.sources.API);
    } else {
      [index, length,, source] = overload(index, length, source);
      this.selection.setRange(new _selection__WEBPACK_IMPORTED_MODULE_6__["Range"](Math.max(0, index), length), source);

      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT) {
        this.selection.scrollIntoView(this.scrollingContainer);
      }
    }
  }

  setText(text, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().insert(text);
    return this.setContents(delta, source);
  }

  update(source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER) {
    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes

    this.selection.update(source); // TODO this is usually undefined

    return change;
  }

  updateContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    return modify.call(this, () => {
      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);
      return this.editor.applyDelta(delta, source);
    }, source, true);
  }

}

Quill.DEFAULTS = {
  bounds: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  registry: globalRegistry,
  scrollingContainer: null,
  theme: 'default'
};
Quill.events = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events;
Quill.sources = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources; // eslint-disable-next-line no-undef

Quill.version =  false ? undefined : "2.0.0-dev.3";
Quill.imports = {
  delta: quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a,
  parchment: parchment__WEBPACK_IMPORTED_MODULE_1__,
  'core/module': _module__WEBPACK_IMPORTED_MODULE_5__["default"],
  'core/theme': _theme__WEBPACK_IMPORTED_MODULE_9__["default"]
};

function expandConfig(container, userConfig) {
  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {
    container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true,
      uploader: true
    }
  }, userConfig);

  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme__WEBPACK_IMPORTED_MODULE_9__["default"];
  } else {
    userConfig.theme = Quill.import("themes/".concat(userConfig.theme));

    if (userConfig.theme == null) {
      throw new Error("Invalid theme ".concat(userConfig.theme, ". Did you register it?"));
    }
  }

  const themeConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(config => {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(module => {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  const moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  const moduleConfig = moduleNames.reduce((config, name) => {
    const moduleClass = Quill.import("modules/".concat(name));

    if (moduleClass == null) {
      debug.error("Cannot load ".concat(name, " module. Are you sure you registered it?"));
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }

    return config;
  }, {}); // Special case toolbar shorthand

  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }

  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, Quill.DEFAULTS, {
    modules: moduleConfig
  }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(key => {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce((config, name) => {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }

    return config;
  }, {});
  return userConfig;
} // Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs


function modify(modifier, source, index, shift) {
  if (!this.isEnabled() && source === _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER && !this.allowReadOnlyEdits) {
    return new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();
  }

  let range = index == null ? null : this.getSelection();
  const oldDelta = this.editor.delta;
  const change = modifier();

  if (range != null) {
    if (index === true) {
      index = range.index; // eslint-disable-line prefer-destructuring
    }

    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }

    this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
  }

  if (change.length() > 0) {
    const args = [_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.TEXT_CHANGE, change, oldDelta, source];
    this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.EDITOR_CHANGE, ...args);

    if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT) {
      this.emitter.emit(...args);
    }
  }

  return change;
}

function overload(index, length, name, value, source) {
  let formats = {};

  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value;
      value = name;
      name = length;
      length = index.length; // eslint-disable-line prefer-destructuring

      index = index.index; // eslint-disable-line prefer-destructuring
    } else {
      length = index.length; // eslint-disable-line prefer-destructuring

      index = index.index; // eslint-disable-line prefer-destructuring
    }
  } else if (typeof length !== 'number') {
    source = value;
    value = name;
    name = length;
    length = 0;
  } // Handle format being object, two format name/value strings or excluded


  if (typeof name === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  } // Handle optional source


  source = source || _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  let start;
  let end;

  if (index instanceof quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a) {
    [start, end] = [range.index, range.index + range.length].map(pos => index.transformPosition(pos, source !== _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER));
  } else {
    [start, end] = [range.index, range.index + range.length].map(pos => {
      if (pos < index || pos === index && source === _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER) return pos;

      if (length >= 0) {
        return pos + length;
      }

      return Math.max(index, pos + length);
    });
  }

  return new _selection__WEBPACK_IMPORTED_MODULE_6__["Range"](start, end - start);
}



//# sourceURL=webpack://Quill/./core/quill.js?`)},"./core/selection.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selection; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./core/emitter.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./core/logger.js");





const debug = Object(_logger__WEBPACK_IMPORTED_MODULE_4__["default"])('quill:selection');

class Range {
  constructor(index, length = 0) {
    this.index = index;
    this.length = length;
  }

}

class Selection {
  constructor(scroll, emitter) {
    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = this.scroll.create('cursor', this); // savedRange is last non-null range

    this.savedRange = new Range(0, 0);
    this.lastRange = this.savedRange;
    this.lastNative = null;
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, () => {
      if (!this.mouseDown && !this.composing) {
        setTimeout(this.update.bind(this, _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER), 1);
      }
    });
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const native = this.getNativeRange();
      if (native == null) return;
      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle

      this.emitter.once(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_UPDATE, () => {
        try {
          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {
            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
          }

          this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
        } catch (ignored) {// ignore
        }
      });
    });
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_OPTIMIZE, (mutations, context) => {
      if (context.range) {
        const {
          startNode,
          startOffset,
          endNode,
          endOffset
        } = context.range;
        this.setNativeRange(startNode, startOffset, endNode, endOffset);
        this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
      }
    });
    this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
  }

  handleComposition() {
    this.root.addEventListener('compositionstart', () => {
      this.composing = true;
      this.scroll.batchStart();
    });
    this.root.addEventListener('compositionend', () => {
      this.scroll.batchEnd();
      this.composing = false;

      if (this.cursor.parent) {
        const range = this.cursor.restore();
        if (!range) return;
        setTimeout(() => {
          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
        }, 1);
      }
    });
  }

  handleDragging() {
    this.emitter.listenDOM('mousedown', document.body, () => {
      this.mouseDown = true;
    });
    this.emitter.listenDOM('mouseup', document.body, () => {
      this.mouseDown = false;
      this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER);
    });
  }

  focus() {
    if (this.hasFocus()) return;
    this.root.focus();
    this.setRange(this.savedRange);
  }

  format(format, value) {
    this.scroll.update();
    const nativeRange = this.getNativeRange();
    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK)) return;

    if (nativeRange.start.node !== this.cursor.textNode) {
      const blot = this.scroll.find(nativeRange.start.node, false);
      if (blot == null) return; // TODO Give blot ability to not split

      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__["LeafBlot"]) {
        const after = blot.split(nativeRange.start.offset);
        blot.parent.insertBefore(this.cursor, after);
      } else {
        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
      }

      this.cursor.attach();
    }

    this.cursor.format(format, value);
    this.scroll.optimize();
    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
    this.update();
  }

  getBounds(index, length = 0) {
    const scrollLength = this.scroll.length();
    index = Math.min(index, scrollLength - 1);
    length = Math.min(index + length, scrollLength - 1) - index;
    let node;
    let [leaf, offset] = this.scroll.leaf(index);
    if (leaf == null) return null;
    [node, offset] = leaf.position(offset, true);
    const range = document.createRange();

    if (length > 0) {
      range.setStart(node, offset);
      [leaf, offset] = this.scroll.leaf(index + length);
      if (leaf == null) return null;
      [node, offset] = leaf.position(offset, true);
      range.setEnd(node, offset);
      return range.getBoundingClientRect();
    }

    let side = 'left';
    let rect;

    if (node instanceof Text) {
      if (offset < node.data.length) {
        range.setStart(node, offset);
        range.setEnd(node, offset + 1);
      } else {
        range.setStart(node, offset - 1);
        range.setEnd(node, offset);
        side = 'right';
      }

      rect = range.getBoundingClientRect();
    } else {
      rect = leaf.domNode.getBoundingClientRect();
      if (offset > 0) side = 'right';
    }

    return {
      bottom: rect.top + rect.height,
      height: rect.height,
      left: rect[side],
      right: rect[side],
      top: rect.top,
      width: 0
    };
  }

  getNativeRange() {
    const selection = document.getSelection();
    if (selection == null || selection.rangeCount <= 0) return null;
    const nativeRange = selection.getRangeAt(0);
    if (nativeRange == null) return null;
    const range = this.normalizeNative(nativeRange);
    debug.info('getNativeRange', range);
    return range;
  }

  getRange() {
    const normalized = this.getNativeRange();
    if (normalized == null) return [null, null];
    const range = this.normalizedToRange(normalized);
    return [range, normalized];
  }

  hasFocus() {
    return document.activeElement === this.root || contains(this.root, document.activeElement);
  }

  normalizedToRange(range) {
    const positions = [[range.start.node, range.start.offset]];

    if (!range.native.collapsed) {
      positions.push([range.end.node, range.end.offset]);
    }

    const indexes = positions.map(position => {
      const [node, offset] = position;
      const blot = this.scroll.find(node, true);
      const index = blot.offset(this.scroll);

      if (offset === 0) {
        return index;
      }

      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__["LeafBlot"]) {
        return index + blot.index(node, offset);
      }

      return index + blot.length();
    });
    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);
    const start = Math.min(end, ...indexes);
    return new Range(start, end - start);
  }

  normalizeNative(nativeRange) {
    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
      return null;
    }

    const range = {
      start: {
        node: nativeRange.startContainer,
        offset: nativeRange.startOffset
      },
      end: {
        node: nativeRange.endContainer,
        offset: nativeRange.endOffset
      },
      native: nativeRange
    };
    [range.start, range.end].forEach(position => {
      let {
        node,
        offset
      } = position;

      while (!(node instanceof Text) && node.childNodes.length > 0) {
        if (node.childNodes.length > offset) {
          node = node.childNodes[offset];
          offset = 0;
        } else if (node.childNodes.length === offset) {
          node = node.lastChild;

          if (node instanceof Text) {
            offset = node.data.length;
          } else if (node.childNodes.length > 0) {
            // Container case
            offset = node.childNodes.length;
          } else {
            // Embed case
            offset = node.childNodes.length + 1;
          }
        } else {
          break;
        }
      }

      position.node = node;
      position.offset = offset;
    });
    return range;
  }

  rangeToNative(range) {
    const indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
    const args = [];
    const scrollLength = this.scroll.length();
    indexes.forEach((index, i) => {
      index = Math.min(scrollLength - 1, index);
      const [leaf, leafOffset] = this.scroll.leaf(index);
      const [node, offset] = leaf.position(leafOffset, i !== 0);
      args.push(node, offset);
    });

    if (args.length < 2) {
      return args.concat(args);
    }

    return args;
  }

  scrollIntoView(scrollingContainer) {
    const range = this.lastRange;
    if (range == null) return;
    const bounds = this.getBounds(range.index, range.length);
    if (bounds == null) return;
    const limit = this.scroll.length() - 1;
    const [first] = this.scroll.line(Math.min(range.index, limit));
    let last = first;

    if (range.length > 0) {
      [last] = this.scroll.line(Math.min(range.index + range.length, limit));
    }

    if (first == null || last == null) return;
    const scrollBounds = scrollingContainer.getBoundingClientRect();

    if (bounds.top < scrollBounds.top) {
      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
    } else if (bounds.bottom > scrollBounds.bottom) {
      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
    }
  }

  setNativeRange(startNode, startOffset, endNode = startNode, endOffset = startOffset, force = false) {
    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);

    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
      return;
    }

    const selection = document.getSelection();
    if (selection == null) return;

    if (startNode != null) {
      if (!this.hasFocus()) this.root.focus();
      const {
        native
      } = this.getNativeRange() || {};

      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
        if (startNode.tagName === 'BR') {
          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);
          startNode = startNode.parentNode;
        }

        if (endNode.tagName === 'BR') {
          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);
          endNode = endNode.parentNode;
        }

        const range = document.createRange();
        range.setStart(startNode, startOffset);
        range.setEnd(endNode, endOffset);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      selection.removeAllRanges();
      this.root.blur();
    }
  }

  setRange(range, force = false, source = _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.API) {
    if (typeof force === 'string') {
      source = force;
      force = false;
    }

    debug.info('setRange', range);

    if (range != null) {
      const args = this.rangeToNative(range);
      this.setNativeRange(...args, force);
    } else {
      this.setNativeRange(null);
    }

    this.update(source);
  }

  update(source = _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER) {
    const oldRange = this.lastRange;
    const [lastRange, nativeRange] = this.getRange();
    this.lastRange = lastRange;
    this.lastNative = nativeRange;

    if (this.lastRange != null) {
      this.savedRange = this.lastRange;
    }

    if (!deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(oldRange, this.lastRange)) {
      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
        const range = this.cursor.restore();

        if (range) {
          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
        }
      }

      const args = [_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SELECTION_CHANGE, clone__WEBPACK_IMPORTED_MODULE_1___default()(this.lastRange), clone__WEBPACK_IMPORTED_MODULE_1___default()(oldRange), source];
      this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.EDITOR_CHANGE, ...args);

      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT) {
        this.emitter.emit(...args);
      }
    }
  }

}

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode; // eslint-disable-line no-unused-expressions
  } catch (e) {
    return false;
  }

  return parent.contains(descendant);
}



//# sourceURL=webpack://Quill/./core/selection.js?`)},"./core/theme.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
class Theme {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  init() {
    Object.keys(this.options.modules).forEach(name => {
      if (this.modules[name] == null) {
        this.addModule(name);
      }
    });
  }

  addModule(name) {
    const ModuleClass = this.quill.constructor.import("modules/".concat(name));
    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});
    return this.modules[name];
  }

}

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  default: Theme
};
/* harmony default export */ __webpack_exports__["default"] = (Theme);

//# sourceURL=webpack://Quill/./core/theme.js?`)},"./formats/align.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignAttribute", function() { return AlignAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignClass", function() { return AlignClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignStyle", function() { return AlignStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");

const config = {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK,
  whitelist: ['right', 'center', 'justify']
};
const AlignAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('align', 'align', config);
const AlignClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('align', 'ql-align', config);
const AlignStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"]('align', 'text-align', config);


//# sourceURL=webpack://Quill/./formats/align.js?`)},"./formats/background.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundClass", function() { return BackgroundClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundStyle", function() { return BackgroundStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./formats/color.js");


const BackgroundClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('background', 'ql-bg', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE
});
const BackgroundStyle = new _color__WEBPACK_IMPORTED_MODULE_1__["ColorAttributor"]('background', 'background-color', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE
});


//# sourceURL=webpack://Quill/./formats/background.js?`)},"./formats/blockquote.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");


class Blockquote extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {}

Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';
/* harmony default export */ __webpack_exports__["default"] = (Blockquote);

//# sourceURL=webpack://Quill/./formats/blockquote.js?`)},"./formats/bold.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Bold extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create() {
    return super.create();
  }

  static formats() {
    return true;
  }

  optimize(context) {
    super.optimize(context);

    if (this.domNode.tagName !== this.statics.tagName[0]) {
      this.replaceWith(this.statics.blotName);
    }
  }

}

Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];
/* harmony default export */ __webpack_exports__["default"] = (Bold);

//# sourceURL=webpack://Quill/./formats/bold.js?`)},"./formats/code.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlockContainer", function() { return CodeBlockContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeBlock; });
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/break */ "./blots/break.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blots/text */ "./blots/text.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/container */ "./blots/container.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");








class CodeBlockContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_5__["default"] {
  static create(value) {
    const domNode = super.create(value);
    domNode.setAttribute('spellcheck', false);
    return domNode;
  }

  html(index, length) {
    const text = this.children.map(child => child.domNode.innerText).join('\\n').slice(index, index + length);
    return "<pre>".concat(Object(_blots_text__WEBPACK_IMPORTED_MODULE_4__["escapeText"])(text), "</pre>");
  }

}

class CodeBlock extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_6__["default"].register(CodeBlockContainer);
  }

}

class Code extends _blots_inline__WEBPACK_IMPORTED_MODULE_3__["default"] {}

Code.blotName = 'code';
Code.tagName = 'CODE';
CodeBlock.blotName = 'code-block';
CodeBlock.className = 'ql-code-block';
CodeBlock.tagName = 'DIV';
CodeBlockContainer.blotName = 'code-block-container';
CodeBlockContainer.className = 'ql-code-block-container';
CodeBlockContainer.tagName = 'DIV';
CodeBlockContainer.allowedChildren = [CodeBlock];
CodeBlock.allowedChildren = [_blots_text__WEBPACK_IMPORTED_MODULE_4__["default"], _blots_break__WEBPACK_IMPORTED_MODULE_1__["default"], _blots_cursor__WEBPACK_IMPORTED_MODULE_2__["default"]];
CodeBlock.requiredContainer = CodeBlockContainer;
CodeBlock.TAB = '  ';


//# sourceURL=webpack://Quill/./formats/code.js?`)},"./formats/color.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAttributor", function() { return ColorAttributor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorClass", function() { return ColorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorStyle", function() { return ColorStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");


class ColorAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"] {
  value(domNode) {
    let value = super.value(domNode);
    if (!value.startsWith('rgb(')) return value;
    value = value.replace(/^[^\\d]+/, '').replace(/[^\\d]+$/, '');
    const hex = value.split(',').map(component => "00".concat(parseInt(component, 10).toString(16)).slice(-2)).join('');
    return "#".concat(hex);
  }

}

const ColorClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('color', 'ql-color', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE
});
const ColorStyle = new ColorAttributor('color', 'color', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE
});


//# sourceURL=webpack://Quill/./formats/color.js?`)},"./formats/direction.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionAttribute", function() { return DirectionAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionClass", function() { return DirectionClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionStyle", function() { return DirectionStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");

const config = {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK,
  whitelist: ['rtl']
};
const DirectionAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('direction', 'dir', config);
const DirectionClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('direction', 'ql-direction', config);
const DirectionStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"]('direction', 'direction', config);


//# sourceURL=webpack://Quill/./formats/direction.js?`)},"./formats/font.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return FontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontClass", function() { return FontClass; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");

const config = {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
  whitelist: ['serif', 'monospace']
};
const FontClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('font', 'ql-font', config);

class FontStyleAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"] {
  value(node) {
    return super.value(node).replace(/["']/g, '');
  }

}

const FontStyle = new FontStyleAttributor('font', 'font-family', config);


//# sourceURL=webpack://Quill/./formats/font.js?`)},"./formats/formula.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/embed */ "./blots/embed.js");


class Formula extends _blots_embed__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }

    const node = super.create(value);

    if (typeof value === 'string') {
      window.katex.render(value, node, {
        throwOnError: false,
        errorColor: '#f00'
      });
      node.setAttribute('data-value', value);
    }

    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }

  html() {
    const {
      formula
    } = this.value();
    return "<span>".concat(formula, "</span>");
  }

}

Formula.blotName = 'formula';
Formula.className = 'ql-formula';
Formula.tagName = 'SPAN';
/* harmony default export */ __webpack_exports__["default"] = (Formula);

//# sourceURL=webpack://Quill/./formats/formula.js?`)},"./formats/header.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");


class Header extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static formats(domNode) {
    return this.tagName.indexOf(domNode.tagName) + 1;
  }

}

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
/* harmony default export */ __webpack_exports__["default"] = (Header);

//# sourceURL=webpack://Quill/./formats/header.js?`)},"./formats/image.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./formats/link.js");


const ATTRIBUTES = ['alt', 'height', 'width'];

class Image extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  static create(value) {
    const node = super.create(value);

    if (typeof value === 'string') {
      node.setAttribute('src', this.sanitize(value));
    }

    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }

      return formats;
    }, {});
  }

  static match(url) {
    return /\\.(jpe?g|gif|png)$/.test(url) || /^data:image\\/.+;base64/.test(url);
  }

  static register() {
    if (/Firefox/i.test(navigator.userAgent)) {
      setTimeout(() => {
        // Disable image resizing in Firefox
        document.execCommand('enableObjectResizing', false, false);
      }, 1);
    }
  }

  static sanitize(url) {
    return Object(_link__WEBPACK_IMPORTED_MODULE_1__["sanitize"])(url, ['http', 'https', 'data']) ? url : '//:0';
  }

  static value(domNode) {
    return domNode.getAttribute('src');
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

}

Image.blotName = 'image';
Image.tagName = 'IMG';
/* harmony default export */ __webpack_exports__["default"] = (Image);

//# sourceURL=webpack://Quill/./formats/image.js?`)},"./formats/indent.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");


class IndentAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"] {
  add(node, value) {
    if (value === '+1' || value === '-1') {
      const indent = this.value(node) || 0;
      value = value === '+1' ? indent + 1 : indent - 1;
    }

    if (value === 0) {
      this.remove(node);
      return true;
    }

    return super.add(node, value);
  }

  canAdd(node, value) {
    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));
  }

  value(node) {
    return parseInt(super.value(node), 10) || undefined; // Don't return NaN
  }

}

const IndentClass = new IndentAttributor('indent', 'ql-indent', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
/* harmony default export */ __webpack_exports__["default"] = (IndentClass);

//# sourceURL=webpack://Quill/./formats/indent.js?`)},"./formats/italic.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ "./formats/bold.js");


class Italic extends _bold__WEBPACK_IMPORTED_MODULE_0__["default"] {}

Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];
/* harmony default export */ __webpack_exports__["default"] = (Italic);

//# sourceURL=webpack://Quill/./formats/italic.js?`)},"./formats/link.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize; });
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Link extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('href', this.sanitize(value));
    node.setAttribute('rel', 'noopener noreferrer');
    node.setAttribute('target', '_blank');
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href');
  }

  static sanitize(url) {
    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      super.format(name, value);
    } else {
      this.domNode.setAttribute('href', this.constructor.sanitize(value));
    }
  }

}

Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function sanitize(url, protocols) {
  const anchor = document.createElement('a');
  anchor.href = url;
  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}



//# sourceURL=webpack://Quill/./formats/link.js?`)},"./formats/list.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainer", function() { return ListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ "./blots/container.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");




class ListContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {}

ListContainer.blotName = 'list-container';
ListContainer.tagName = 'OL';

class ListItem extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    const node = super.create();
    node.setAttribute('data-list', value);
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-list') || undefined;
  }

  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].register(ListContainer);
  }

  constructor(scroll, domNode) {
    super(scroll, domNode);
    const ui = domNode.ownerDocument.createElement('span');

    const listEventHandler = e => {
      if (!scroll.isEnabled()) return;
      const format = this.statics.formats(domNode, scroll);

      if (format === 'checked') {
        this.format('list', 'unchecked');
        e.preventDefault();
      } else if (format === 'unchecked') {
        this.format('list', 'checked');
        e.preventDefault();
      }
    };

    ui.addEventListener('mousedown', listEventHandler);
    ui.addEventListener('touchstart', listEventHandler);
    this.attachUI(ui);
  }

  format(name, value) {
    if (name === this.statics.blotName && value) {
      this.domNode.setAttribute('data-list', value);
    } else {
      super.format(name, value);
    }
  }

}

ListItem.blotName = 'list';
ListItem.tagName = 'LI';
ListContainer.allowedChildren = [ListItem];
ListItem.requiredContainer = ListContainer;


//# sourceURL=webpack://Quill/./formats/list.js?`)},"./formats/script.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Script extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    if (value === 'super') {
      return document.createElement('sup');
    }

    if (value === 'sub') {
      return document.createElement('sub');
    }

    return super.create(value);
  }

  static formats(domNode) {
    if (domNode.tagName === 'SUB') return 'sub';
    if (domNode.tagName === 'SUP') return 'super';
    return undefined;
  }

}

Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];
/* harmony default export */ __webpack_exports__["default"] = (Script);

//# sourceURL=webpack://Quill/./formats/script.js?`)},"./formats/size.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeClass", function() { return SizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeStyle", function() { return SizeStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");

const SizeClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('size', 'ql-size', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
  whitelist: ['small', 'large', 'huge']
});
const SizeStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"]('size', 'font-size', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
  whitelist: ['10px', '18px', '32px']
});


//# sourceURL=webpack://Quill/./formats/size.js?`)},"./formats/strike.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ "./formats/bold.js");


class Strike extends _bold__WEBPACK_IMPORTED_MODULE_0__["default"] {}

Strike.blotName = 'strike';
Strike.tagName = ['S', 'STRIKE'];
/* harmony default export */ __webpack_exports__["default"] = (Strike);

//# sourceURL=webpack://Quill/./formats/strike.js?`)},"./formats/table.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCell", function() { return TableCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableContainer", function() { return TableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableId", function() { return tableId; });
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ "./blots/container.js");



class TableCell extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    const node = super.create();

    if (value) {
      node.setAttribute('data-row', value);
    } else {
      node.setAttribute('data-row', tableId());
    }

    return node;
  }

  static formats(domNode) {
    if (domNode.hasAttribute('data-row')) {
      return domNode.getAttribute('data-row');
    }

    return undefined;
  }

  cellOffset() {
    if (this.parent) {
      return this.parent.children.indexOf(this);
    }

    return -1;
  }

  format(name, value) {
    if (name === TableCell.blotName && value) {
      this.domNode.setAttribute('data-row', value);
    } else {
      super.format(name, value);
    }
  }

  row() {
    return this.parent;
  }

  rowOffset() {
    if (this.row()) {
      return this.row().rowOffset();
    }

    return -1;
  }

  table() {
    return this.row() && this.row().table();
  }

}

TableCell.blotName = 'table';
TableCell.tagName = 'TD';

class TableRow extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const thisHead = this.children.head.formats();
      const thisTail = this.children.tail.formats();
      const nextHead = this.next.children.head.formats();
      const nextTail = this.next.children.tail.formats();
      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;
    }

    return false;
  }

  optimize(...args) {
    super.optimize(...args);
    this.children.forEach(child => {
      if (child.next == null) return;
      const childFormats = child.formats();
      const nextFormats = child.next.formats();

      if (childFormats.table !== nextFormats.table) {
        const next = this.splitAfter(child);

        if (next) {
          next.optimize();
        } // We might be able to merge with prev now


        if (this.prev) {
          this.prev.optimize();
        }
      }
    });
  }

  rowOffset() {
    if (this.parent) {
      return this.parent.children.indexOf(this);
    }

    return -1;
  }

  table() {
    return this.parent && this.parent.parent;
  }

}

TableRow.blotName = 'table-row';
TableRow.tagName = 'TR';

class TableBody extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {}

TableBody.blotName = 'table-body';
TableBody.tagName = 'TBODY';

class TableContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {
  balanceCells() {
    const rows = this.descendants(TableRow);
    const maxColumns = rows.reduce((max, row) => {
      return Math.max(row.children.length, max);
    }, 0);
    rows.forEach(row => {
      new Array(maxColumns - row.children.length).fill(0).forEach(() => {
        let value;

        if (row.children.head != null) {
          value = TableCell.formats(row.children.head.domNode);
        }

        const blot = this.scroll.create(TableCell.blotName, value);
        row.appendChild(blot);
        blot.optimize(); // Add break blot
      });
    });
  }

  cells(column) {
    return this.rows().map(row => row.children.at(column));
  }

  deleteColumn(index) {
    const [body] = this.descendant(TableBody);
    if (body == null || body.children.head == null) return;
    body.children.forEach(row => {
      const cell = row.children.at(index);

      if (cell != null) {
        cell.remove();
      }
    });
  }

  insertColumn(index) {
    const [body] = this.descendant(TableBody);
    if (body == null || body.children.head == null) return;
    body.children.forEach(row => {
      const ref = row.children.at(index);
      const value = TableCell.formats(row.children.head.domNode);
      const cell = this.scroll.create(TableCell.blotName, value);
      row.insertBefore(cell, ref);
    });
  }

  insertRow(index) {
    const [body] = this.descendant(TableBody);
    if (body == null || body.children.head == null) return;
    const id = tableId();
    const row = this.scroll.create(TableRow.blotName);
    body.children.head.children.forEach(() => {
      const cell = this.scroll.create(TableCell.blotName, id);
      row.appendChild(cell);
    });
    const ref = body.children.at(index);
    body.insertBefore(row, ref);
  }

  rows() {
    const body = this.children.head;
    if (body == null) return [];
    return body.children.map(row => row);
  }

}

TableContainer.blotName = 'table-container';
TableContainer.tagName = 'TABLE';
TableContainer.allowedChildren = [TableBody];
TableBody.requiredContainer = TableContainer;
TableBody.allowedChildren = [TableRow];
TableRow.requiredContainer = TableBody;
TableRow.allowedChildren = [TableCell];
TableCell.requiredContainer = TableRow;

function tableId() {
  const id = Math.random().toString(36).slice(2, 6);
  return "row-".concat(id);
}



//# sourceURL=webpack://Quill/./formats/table.js?`)},"./formats/underline.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Underline extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {}

Underline.blotName = 'underline';
Underline.tagName = 'U';
/* harmony default export */ __webpack_exports__["default"] = (Underline);

//# sourceURL=webpack://Quill/./formats/underline.js?`)},"./formats/video.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./formats/link.js");


const ATTRIBUTES = ['height', 'width'];

class Video extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["BlockEmbed"] {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', true);
    node.setAttribute('src', this.sanitize(value));
    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }

      return formats;
    }, {});
  }

  static sanitize(url) {
    return _link__WEBPACK_IMPORTED_MODULE_1__["default"].sanitize(url); // eslint-disable-line import/no-named-as-default-member
  }

  static value(domNode) {
    return domNode.getAttribute('src');
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

  html() {
    const {
      video
    } = this.value();
    return "<a href=\\"".concat(video, "\\">").concat(video, "</a>");
  }

}

Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';
/* harmony default export */ __webpack_exports__["default"] = (Video);

//# sourceURL=webpack://Quill/./formats/video.js?`)},"./modules/clipboard.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchAttributor", function() { return matchAttributor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchBlot", function() { return matchBlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchNewline", function() { return matchNewline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchText", function() { return matchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/logger */ "./core/logger.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/module */ "./core/module.js");
/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formats/align */ "./formats/align.js");
/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formats/background */ "./formats/background.js");
/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ "./formats/code.js");
/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formats/color */ "./formats/color.js");
/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../formats/direction */ "./formats/direction.js");
/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formats/font */ "./formats/font.js");
/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formats/size */ "./formats/size.js");














const debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_5__["default"])('quill:clipboard');
const CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['ol, ul', matchList], ['pre', matchCodeBlock], ['tr', matchTable], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['strike', matchAlias.bind(matchAlias, 'strike')], ['style', matchIgnore]];
const ATTRIBUTE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__["AlignAttribute"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__["DirectionAttribute"]].reduce((memo, attr) => {
  memo[attr.keyName] = attr;
  return memo;
}, {});
const STYLE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__["AlignStyle"], _formats_background__WEBPACK_IMPORTED_MODULE_8__["BackgroundStyle"], _formats_color__WEBPACK_IMPORTED_MODULE_10__["ColorStyle"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__["DirectionStyle"], _formats_font__WEBPACK_IMPORTED_MODULE_12__["FontStyle"], _formats_size__WEBPACK_IMPORTED_MODULE_13__["SizeStyle"]].reduce((memo, attr) => {
  memo[attr.keyName] = attr;
  return memo;
}, {});

class Clipboard extends _core_module__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(quill, options) {
    super(quill, options);
    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));
    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));
    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));
    this.matchers = [];
    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(([selector, matcher]) => {
      this.addMatcher(selector, matcher);
    });
  }

  addMatcher(selector, matcher) {
    this.matchers.push([selector, matcher]);
  }

  convert({
    html,
    text
  }, formats = {}) {
    if (formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]) {
      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text, {
        [_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]: formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]
      });
    }

    if (!html) {
      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text || '');
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const container = doc.body;
    const nodeMatches = new WeakMap();
    const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);
    const delta = traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches); // Remove trailing newline

    if (deltaEndsWith(delta, '\\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {
      return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(delta.length() - 1).delete(1));
    }

    return delta;
  }

  dangerouslyPasteHTML(index, html, source = _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    if (typeof index === 'string') {
      const delta = this.convert({
        html: index,
        text: ''
      });
      this.quill.setContents(delta, html);
      this.quill.setSelection(0, _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
    } else {
      const paste = this.convert({
        html,
        text: ''
      });
      this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(index).concat(paste), source);
      this.quill.setSelection(index + paste.length(), _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
    }
  }

  onCaptureCopy(e, isCut = false) {
    if (e.defaultPrevented) return;
    e.preventDefault();
    const [range] = this.quill.selection.getRange();
    if (range == null) return;
    const {
      html,
      text
    } = this.onCopy(range, isCut);
    e.clipboardData.setData('text/plain', text);
    e.clipboardData.setData('text/html', html);

    if (isCut) {
      this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER);
    }
  }

  onCapturePaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled()) return;
    e.preventDefault();
    const range = this.quill.getSelection(true);
    if (range == null) return;
    const html = e.clipboardData.getData('text/html');
    const text = e.clipboardData.getData('text/plain');
    const files = Array.from(e.clipboardData.files || []);

    if (!html && files.length > 0) {
      this.quill.uploader.upload(range, files);
    } else {
      this.onPaste(range, {
        html,
        text
      });
    }
  }

  onCopy(range) {
    const text = this.quill.getText(range);
    const html = this.quill.getSemanticHTML(range);
    return {
      html,
      text
    };
  }

  onPaste(range, {
    text,
    html
  }) {
    const formats = this.quill.getFormat(range.index);
    const pastedDelta = this.convert({
      text,
      html
    }, formats);
    debug.log('onPaste', pastedDelta, {
      text,
      html
    });
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(range.index).delete(range.length).concat(pastedDelta);
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER); // range.length contributes to delta.length()

    this.quill.setSelection(delta.length() - range.length, _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
    this.quill.scrollIntoView();
  }

  prepareMatching(container, nodeMatches) {
    const elementMatchers = [];
    const textMatchers = [];
    this.matchers.forEach(pair => {
      const [selector, matcher] = pair;

      switch (selector) {
        case Node.TEXT_NODE:
          textMatchers.push(matcher);
          break;

        case Node.ELEMENT_NODE:
          elementMatchers.push(matcher);
          break;

        default:
          Array.from(container.querySelectorAll(selector)).forEach(node => {
            if (nodeMatches.has(node)) {
              const matches = nodeMatches.get(node);
              matches.push(matcher);
            } else {
              nodeMatches.set(node, [matcher]);
            }
          });
          break;
      }
    });
    return [elementMatchers, textMatchers];
  }

}

Clipboard.DEFAULTS = {
  matchers: []
};

function applyFormat(delta, format, value) {
  if (typeof format === 'object') {
    return Object.keys(format).reduce((newDelta, key) => {
      return applyFormat(newDelta, key, format[key]);
    }, delta);
  }

  return delta.reduce((newDelta, op) => {
    if (op.attributes && op.attributes[format]) {
      return newDelta.push(op);
    }

    return newDelta.insert(op.insert, extend__WEBPACK_IMPORTED_MODULE_0___default()({}, {
      [format]: value
    }, op.attributes));
  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
}

function deltaEndsWith(delta, text) {
  let endText = '';

  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus
  ) {
    const op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }

  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks

  return ['address', 'article', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'iframe', 'li', 'main', 'nav', 'ol', 'output', 'p', 'pre', 'section', 'table', 'td', 'tr', 'ul', 'video'].includes(node.tagName.toLowerCase());
}

const preNodes = new WeakMap();

function isPre(node) {
  if (node == null) return false;

  if (!preNodes.has(node)) {
    if (node.tagName === 'PRE') {
      preNodes.set(node, true);
    } else {
      preNodes.set(node, isPre(node.parentNode));
    }
  }

  return preNodes.get(node);
}

function traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce((delta, matcher) => {
      return matcher(node, delta, scroll);
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
  }

  if (node.nodeType === node.ELEMENT_NODE) {
    return Array.from(node.childNodes || []).reduce((delta, childNode) => {
      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);

      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {
          return matcher(childNode, reducedDelta, scroll);
        }, childrenDelta);
        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {
          return matcher(childNode, reducedDelta, scroll);
        }, childrenDelta);
      }

      return delta.concat(childrenDelta);
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
  }

  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta, scroll) {
  const attributes = parchment__WEBPACK_IMPORTED_MODULE_2__["Attributor"].keys(node);
  const classes = parchment__WEBPACK_IMPORTED_MODULE_2__["ClassAttributor"].keys(node);
  const styles = parchment__WEBPACK_IMPORTED_MODULE_2__["StyleAttributor"].keys(node);
  const formats = {};
  attributes.concat(classes).concat(styles).forEach(name => {
    let attr = scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].ATTRIBUTE);

    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }

    attr = ATTRIBUTE_ATTRIBUTORS[name];

    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }

    attr = STYLE_ATTRIBUTORS[name];

    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });

  if (Object.keys(formats).length > 0) {
    return applyFormat(delta, formats);
  }

  return delta;
}

function matchBlot(node, delta, scroll) {
  const match = scroll.query(node);
  if (match == null) return delta;

  if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__["EmbedBlot"]) {
    const embed = {};
    const value = match.value(node);

    if (value != null) {
      embed[match.blotName] = value;
      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(embed, match.formats(node, scroll));
    }
  } else {
    if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__["BlockBlot"] && !deltaEndsWith(delta, '\\n')) {
      delta.insert('\\n');
    }

    if (typeof match.formats === 'function') {
      return applyFormat(delta, match.blotName, match.formats(node, scroll));
    }
  }

  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\\n')) {
    delta.insert('\\n');
  }

  return delta;
}

function matchCodeBlock(node, delta, scroll) {
  const match = scroll.query('code-block');
  const language = match ? match.formats(node, scroll) : true;
  return applyFormat(delta, 'code-block', language);
}

function matchIgnore() {
  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();
}

function matchIndent(node, delta, scroll) {
  const match = scroll.query(node);

  if (match == null || match.blotName !== 'list' || !deltaEndsWith(delta, '\\n')) {
    return delta;
  }

  let indent = -1;
  let parent = node.parentNode;

  while (parent != null) {
    if (['OL', 'UL'].includes(parent.tagName)) {
      indent += 1;
    }

    parent = parent.parentNode;
  }

  if (indent <= 0) return delta;
  return delta.reduce((composed, op) => {
    if (op.attributes && op.attributes.list) {
      return composed.push(op);
    }

    return composed.insert(op.insert, {
      indent,
      ...(op.attributes || {})
    });
  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
}

function matchList(node, delta) {
  const list = node.tagName === 'OL' ? 'ordered' : 'bullet';
  return applyFormat(delta, 'list', list);
}

function matchNewline(node, delta, scroll) {
  if (!deltaEndsWith(delta, '\\n')) {
    if (isLine(node)) {
      return delta.insert('\\n');
    }

    if (delta.length() > 0 && node.nextSibling) {
      let {
        nextSibling
      } = node;

      while (nextSibling != null) {
        if (isLine(nextSibling)) {
          return delta.insert('\\n');
        }

        const match = scroll.query(nextSibling);

        if (match && match.prototype instanceof _blots_block__WEBPACK_IMPORTED_MODULE_3__["BlockEmbed"]) {
          return delta.insert('\\n');
        }

        nextSibling = nextSibling.firstChild;
      }
    }
  }

  return delta;
}

function matchStyles(node, delta) {
  const formats = {};
  const style = node.style || {};

  if (style.fontStyle === 'italic') {
    formats.italic = true;
  }

  if (style.textDecoration === 'underline') {
    formats.underline = true;
  }

  if (style.textDecoration === 'line-through') {
    formats.strike = true;
  }

  if (style.fontWeight.startsWith('bold') || parseInt(style.fontWeight, 10) >= 700) {
    formats.bold = true;
  }

  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }

  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert('\\t').concat(delta);
  }

  return delta;
}

function matchTable(node, delta) {
  const table = node.parentNode.tagName === 'TABLE' ? node.parentNode : node.parentNode.parentNode;
  const rows = Array.from(table.querySelectorAll('tr'));
  const row = rows.indexOf(node) + 1;
  return applyFormat(delta, 'table', row);
}

function matchText(node, delta) {
  let text = node.data; // Word represents empty line with <o:p>&nbsp;</o:p>

  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }

  if (text.trim().length === 0 && text.includes('\\n')) {
    return delta;
  }

  if (!isPre(node)) {
    const replacer = (collapse, match) => {
      const replaced = match.replace(/[^\\u00a0]/g, ''); // \\u00a0 is nbsp;

      return replaced.length < 1 && collapse ? ' ' : replaced;
    };

    text = text.replace(/\\r\\n/g, ' ').replace(/\\n/g, ' ');
    text = text.replace(/\\s\\s+/g, replacer.bind(replacer, true)); // collapse whitespace

    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\\s+/, replacer.bind(replacer, false));
    }

    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\\s+$/, replacer.bind(replacer, false));
    }
  }

  return delta.insert(text);
}



//# sourceURL=webpack://Quill/./modules/clipboard.js?`)},"./modules/history.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastChangeIndex", function() { return getLastChangeIndex; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ "./core/module.js");




class History extends _core_module__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    super(quill, options);
    this.lastRecorded = 0;
    this.ignoreChange = false;
    this.clear();
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {
      if (eventName !== _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.TEXT_CHANGE || this.ignoreChange) return;

      if (!this.options.userOnly || source === _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER) {
        this.record(delta, oldDelta);
      } else {
        this.transform(delta);
      }
    });
    this.quill.keyboard.addBinding({
      key: 'z',
      shortKey: true
    }, this.undo.bind(this));
    this.quill.keyboard.addBinding({
      key: 'z',
      shortKey: true,
      shiftKey: true
    }, this.redo.bind(this));

    if (/Win/i.test(navigator.platform)) {
      this.quill.keyboard.addBinding({
        key: 'y',
        shortKey: true
      }, this.redo.bind(this));
    }
  }

  change(source, dest) {
    if (this.stack[source].length === 0) return;
    const delta = this.stack[source].pop();
    const base = this.quill.getContents();
    const inverseDelta = delta.invert(base);
    this.stack[dest].push(inverseDelta);
    this.lastRecorded = 0;
    this.ignoreChange = true;
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    this.ignoreChange = false;
    const index = getLastChangeIndex(this.quill.scroll, delta);
    this.quill.setSelection(index);
  }

  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }

  cutoff() {
    this.lastRecorded = 0;
  }

  record(changeDelta, oldDelta) {
    if (changeDelta.ops.length === 0) return;
    this.stack.redo = [];
    let undoDelta = changeDelta.invert(oldDelta);
    const timestamp = Date.now();

    if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
      const delta = this.stack.undo.pop();
      undoDelta = undoDelta.compose(delta);
    } else {
      this.lastRecorded = timestamp;
    }

    if (undoDelta.length() === 0) return;
    this.stack.undo.push(undoDelta);

    if (this.stack.undo.length > this.options.maxStack) {
      this.stack.undo.shift();
    }
  }

  redo() {
    this.change('redo', 'undo');
  }

  transform(delta) {
    transformStack(this.stack.undo, delta);
    transformStack(this.stack.redo, delta);
  }

  undo() {
    this.change('undo', 'redo');
  }

}

History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function transformStack(stack, delta) {
  let remoteDelta = delta;

  for (let i = stack.length - 1; i >= 0; i -= 1) {
    const oldDelta = stack[i];
    stack[i] = remoteDelta.transform(oldDelta, true);
    remoteDelta = oldDelta.transform(remoteDelta);

    if (stack[i].length() === 0) {
      stack.splice(i, 1);
    }
  }
}

function endsWithNewlineChange(scroll, delta) {
  const lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;

  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\\n');
  }

  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(attr => {
      return scroll.query(attr, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK) != null;
    });
  }

  return false;
}

function getLastChangeIndex(scroll, delta) {
  const deleteLength = delta.reduce((length, op) => {
    return length + (op.delete || 0);
  }, 0);
  let changeIndex = delta.length() - deleteLength;

  if (endsWithNewlineChange(scroll, delta)) {
    changeIndex -= 1;
  }

  return changeIndex;
}



//# sourceURL=webpack://Quill/./modules/history.js?`)},"./modules/keyboard.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHORTKEY", function() { return SHORTKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/logger */ "./core/logger.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/module */ "./core/module.js");








const debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_6__["default"])('quill:keyboard');
const SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

class Keyboard extends _core_module__WEBPACK_IMPORTED_MODULE_7__["default"] {
  static match(evt, binding) {
    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {
      return !!binding[key] !== evt[key] && binding[key] !== null;
    })) {
      return false;
    }

    return binding.key === evt.key || binding.key === evt.which;
  }

  constructor(quill, options) {
    super(quill, options);
    this.bindings = {};
    Object.keys(this.options.bindings).forEach(name => {
      if (this.options.bindings[name]) {
        this.addBinding(this.options.bindings[name]);
      }
    });
    this.addBinding({
      key: 'Enter',
      shiftKey: null
    }, this.handleEnter);
    this.addBinding({
      key: 'Enter',
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {});

    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      this.addBinding({
        key: 'Backspace'
      }, {
        collapsed: true
      }, this.handleBackspace);
      this.addBinding({
        key: 'Delete'
      }, {
        collapsed: true
      }, this.handleDelete);
    } else {
      this.addBinding({
        key: 'Backspace'
      }, {
        collapsed: true,
        prefix: /^.?$/
      }, this.handleBackspace);
      this.addBinding({
        key: 'Delete'
      }, {
        collapsed: true,
        suffix: /^.?$/
      }, this.handleDelete);
    }

    this.addBinding({
      key: 'Backspace'
    }, {
      collapsed: false
    }, this.handleDeleteRange);
    this.addBinding({
      key: 'Delete'
    }, {
      collapsed: false
    }, this.handleDeleteRange);
    this.addBinding({
      key: 'Backspace',
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: true,
      offset: 0
    }, this.handleBackspace);
    this.listen();
  }

  addBinding(keyBinding, context = {}, handler = {}) {
    const binding = normalize(keyBinding);

    if (binding == null) {
      debug.warn('Attempted to add invalid keyboard binding', binding);
      return;
    }

    if (typeof context === 'function') {
      context = {
        handler: context
      };
    }

    if (typeof handler === 'function') {
      handler = {
        handler
      };
    }

    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];
    keys.forEach(key => {
      const singleBinding = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, binding, {
        key
      }, context, handler);
      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];
      this.bindings[singleBinding.key].push(singleBinding);
    });
  }

  listen() {
    this.quill.root.addEventListener('keydown', evt => {
      if (evt.defaultPrevented || evt.isComposing) return;
      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);
      const matches = bindings.filter(binding => Keyboard.match(evt, binding));
      if (matches.length === 0) return;
      const range = this.quill.getSelection();
      if (range == null || !this.quill.hasFocus()) return;
      const [line, offset] = this.quill.getLine(range.index);
      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);
      const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);
      const prefixText = leafStart instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["TextBlot"] ? leafStart.value().slice(0, offsetStart) : '';
      const suffixText = leafEnd instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["TextBlot"] ? leafEnd.value().slice(offsetEnd) : '';
      const curContext = {
        collapsed: range.length === 0,
        empty: range.length === 0 && line.length() <= 1,
        format: this.quill.getFormat(range),
        line,
        offset,
        prefix: prefixText,
        suffix: suffixText,
        event: evt
      };
      const prevented = matches.some(binding => {
        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {
          return false;
        }

        if (binding.empty != null && binding.empty !== curContext.empty) {
          return false;
        }

        if (binding.offset != null && binding.offset !== curContext.offset) {
          return false;
        }

        if (Array.isArray(binding.format)) {
          // any format is present
          if (binding.format.every(name => curContext.format[name] == null)) {
            return false;
          }
        } else if (typeof binding.format === 'object') {
          // all formats must match
          if (!Object.keys(binding.format).every(name => {
            if (binding.format[name] === true) return curContext.format[name] != null;
            if (binding.format[name] === false) return curContext.format[name] == null;
            return deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(binding.format[name], curContext.format[name]);
          })) {
            return false;
          }
        }

        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {
          return false;
        }

        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {
          return false;
        }

        return binding.handler.call(this, range, curContext, binding) !== true;
      });

      if (prevented) {
        evt.preventDefault();
      }
    });
  }

  handleBackspace(range, context) {
    // Check for astral symbols
    const length = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]$/.test(context.prefix) ? 2 : 1;
    if (range.index === 0 || this.quill.getLength() <= 1) return;
    let formats = {};
    const [line] = this.quill.getLine(range.index);
    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - length).delete(length);

    if (context.offset === 0) {
      // Always deleting newline here, length always 1
      const [prev] = this.quill.getLine(range.index - 1);

      if (prev) {
        const curFormats = line.formats();
        const prevFormats = this.quill.getFormat(range.index - 1, 1);
        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(curFormats, prevFormats) || {};

        if (Object.keys(formats).length > 0) {
          // line.length() - 1 targets \\n in line, another -1 for newline being deleted
          const formatDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - 2).retain(1, formats);
          delta = delta.compose(formatDelta);
        }
      }
    }

    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    this.quill.focus();
  }

  handleDelete(range, context) {
    // Check for astral symbols
    const length = /^[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/.test(context.suffix) ? 2 : 1;
    if (range.index >= this.quill.getLength() - length) return;
    let formats = {};
    const [line] = this.quill.getLine(range.index);
    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(length);

    if (context.offset >= line.length() - 1) {
      const [next] = this.quill.getLine(range.index + 1);

      if (next) {
        const curFormats = line.formats();
        const nextFormats = this.quill.getFormat(range.index, 1);
        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(curFormats, nextFormats) || {};

        if (Object.keys(formats).length > 0) {
          delta = delta.retain(next.length() - 1).retain(1, formats);
        }
      }
    }

    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    this.quill.focus();
  }

  handleDeleteRange(range) {
    const lines = this.quill.getLines(range);
    let formats = {};

    if (lines.length > 1) {
      const firstFormats = lines[0].formats();
      const lastFormats = lines[lines.length - 1].formats();
      formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(lastFormats, firstFormats) || {};
    }

    this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);

    if (Object.keys(formats).length > 0) {
      this.quill.formatLine(range.index, 1, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    }

    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
    this.quill.focus();
  }

  handleEnter(range, context) {
    const lineFormats = Object.keys(context.format).reduce((formats, format) => {
      if (this.quill.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_4__["Scope"].BLOCK) && !Array.isArray(context.format[format])) {
        formats[format] = context.format[format];
      }

      return formats;
    }, {});
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\n', lineFormats);
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
    this.quill.focus();
    Object.keys(context.format).forEach(name => {
      if (lineFormats[name] != null) return;
      if (Array.isArray(context.format[name])) return;
      if (name === 'code' || name === 'link') return;
      this.quill.format(name, context.format[name], _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    });
  }

}

Keyboard.DEFAULTS = {
  bindings: {
    bold: makeFormatHandler('bold'),
    italic: makeFormatHandler('italic'),
    underline: makeFormatHandler('underline'),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: 'Tab',
      format: ['blockquote', 'indent', 'list'],

      handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        return false;
      }

    },
    outdent: {
      key: 'Tab',
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],

      // highlight tab or tab at beginning of list, indent or blockquote
      handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        return false;
      }

    },
    'outdent backspace': {
      key: 'Backspace',
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,

      handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      }

    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: 'Tab',
      shiftKey: true,
      collapsed: true,
      prefix: /\\t$/,

      handler(range) {
        this.quill.deleteText(range.index - 1, 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      }

    },
    tab: {
      key: 'Tab',

      handler(range, context) {
        if (context.format.table) return true;
        this.quill.history.cutoff();
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\t');
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        return false;
      }

    },
    'blockquote empty enter': {
      key: 'Enter',
      collapsed: true,
      format: ['blockquote'],
      empty: true,

      handler() {
        this.quill.format('blockquote', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      }

    },
    'list empty enter': {
      key: 'Enter',
      collapsed: true,
      format: ['list'],
      empty: true,

      handler(range, context) {
        const formats = {
          list: false
        };

        if (context.format.indent) {
          formats.indent = false;
        }

        this.quill.formatLine(range.index, range.length, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      }

    },
    'checklist enter': {
      key: 'Enter',
      collapsed: true,
      format: {
        list: 'checked'
      },

      handler(range) {
        const [line, offset] = this.quill.getLine(range.index);
        const formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, line.formats(), {
          list: 'checked'
        });
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', formats).retain(line.length() - offset - 1).retain(1, {
          list: 'unchecked'
        });
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        this.quill.scrollIntoView();
      }

    },
    'header enter': {
      key: 'Enter',
      collapsed: true,
      format: ['header'],
      suffix: /^$/,

      handler(range, context) {
        const [line, offset] = this.quill.getLine(range.index);
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', context.format).retain(line.length() - offset - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        this.quill.scrollIntoView();
      }

    },
    'table backspace': {
      key: 'Backspace',
      format: ['table'],
      collapsed: true,
      offset: 0,

      handler() {}

    },
    'table delete': {
      key: 'Delete',
      format: ['table'],
      collapsed: true,
      suffix: /^$/,

      handler() {}

    },
    'table enter': {
      key: 'Enter',
      shiftKey: null,
      format: ['table'],

      handler(range) {
        const module = this.quill.getModule('table');

        if (module) {
          const [table, row, cell, offset] = module.getTable(range);
          const shift = tableSide(table, row, cell, offset);
          if (shift == null) return;
          let index = table.offset();

          if (shift < 0) {
            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');
            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
            this.quill.setSelection(range.index + 1, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
          } else if (shift > 0) {
            index += table.length();
            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');
            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
            this.quill.setSelection(index, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
          }
        }
      }

    },
    'table tab': {
      key: 'Tab',
      shiftKey: null,
      format: ['table'],

      handler(range, context) {
        const {
          event,
          line: cell
        } = context;
        const offset = cell.offset(this.quill.scroll);

        if (event.shiftKey) {
          this.quill.setSelection(offset - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        } else {
          this.quill.setSelection(offset + cell.length(), _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      }

    },
    'list autofill': {
      key: ' ',
      shiftKey: null,
      collapsed: true,
      format: {
        list: false,
        'code-block': false,
        blockquote: false,
        header: false,
        table: false
      },
      prefix: /^\\s*?(\\d+\\.|-|\\*|\\[ ?\\]|\\[x\\])$/,

      handler(range, context) {
        if (this.quill.scroll.query('list') == null) return true;
        const {
          length
        } = context.prefix;
        const [line, offset] = this.quill.getLine(range.index);
        if (offset > length) return true;
        let value;

        switch (context.prefix.trim()) {
          case '[]':
          case '[ ]':
            value = 'unchecked';
            break;

          case '[x]':
            value = 'checked';
            break;

          case '-':
          case '*':
            value = 'bullet';
            break;

          default:
            value = 'ordered';
        }

        this.quill.insertText(range.index, ' ', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.history.cutoff();
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {
          list: value
        });
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        return false;
      }

    },
    'code exit': {
      key: 'Enter',
      collapsed: true,
      format: ['code-block'],
      prefix: /^$/,
      suffix: /^\\s*$/,

      handler(range) {
        const [line, offset] = this.quill.getLine(range.index);
        let numLines = 2;
        let cur = line;

        while (cur != null && cur.length() <= 1 && cur.formats()['code-block']) {
          cur = cur.prev;
          numLines -= 1; // Requisite prev lines are empty

          if (numLines <= 0) {
            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - offset - 2).retain(1, {
              'code-block': null
            }).delete(1);
            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
            this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
            return false;
          }
        }

        return true;
      }

    },
    'embed left': makeEmbedArrowHandler('ArrowLeft', false),
    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),
    'embed right': makeEmbedArrowHandler('ArrowRight', false),
    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),
    'table down': makeTableArrowHandler(false),
    'table up': makeTableArrowHandler(true)
  }
};

function makeCodeBlockHandler(indent) {
  return {
    key: 'Tab',
    shiftKey: !indent,
    format: {
      'code-block': true
    },

    handler(range) {
      const CodeBlock = this.quill.scroll.query('code-block');
      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);
      let {
        index,
        length
      } = range;
      lines.forEach((line, i) => {
        if (indent) {
          line.insertAt(0, CodeBlock.TAB);

          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.domNode.textContent.startsWith(CodeBlock.TAB)) {
          line.deleteAt(0, CodeBlock.TAB.length);

          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
      });
      this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      this.quill.setSelection(index, length, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
    }

  };
}

function makeEmbedArrowHandler(key, shiftKey) {
  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';
  return {
    key,
    shiftKey,
    altKey: null,
    [where]: /^$/,

    handler(range) {
      let {
        index
      } = range;

      if (key === 'ArrowRight') {
        index += range.length + 1;
      }

      const [leaf] = this.quill.getLeaf(index);
      if (!(leaf instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["EmbedBlot"])) return true;

      if (key === 'ArrowLeft') {
        if (shiftKey) {
          this.quill.setSelection(range.index - 1, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        } else {
          this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      } else if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      }

      return false;
    }

  };
}

function makeFormatHandler(format) {
  return {
    key: format[0],
    shortKey: true,

    handler(range, context) {
      this.quill.format(format, !context.format[format], _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    }

  };
}

function makeTableArrowHandler(up) {
  return {
    key: up ? 'ArrowUp' : 'ArrowDown',
    collapsed: true,
    format: ['table'],

    handler(range, context) {
      // TODO move to table module
      const key = up ? 'prev' : 'next';
      const cell = context.line;
      const targetRow = cell.parent[key];

      if (targetRow != null) {
        if (targetRow.statics.blotName === 'table-row') {
          let targetCell = targetRow.children.head;
          let cur = cell;

          while (cur.prev != null) {
            cur = cur.prev;
            targetCell = targetCell.next;
          }

          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);
          this.quill.setSelection(index, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      } else {
        const targetLine = cell.table()[key];

        if (targetLine != null) {
          if (up) {
            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
          } else {
            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
          }
        }
      }

      return false;
    }

  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    binding = {
      key: binding
    };
  } else if (typeof binding === 'object') {
    binding = clone__WEBPACK_IMPORTED_MODULE_0___default()(binding, false);
  } else {
    return null;
  }

  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }

  return binding;
}

function tableSide(table, row, cell, offset) {
  if (row.prev == null && row.next == null) {
    if (cell.prev == null && cell.next == null) {
      return offset === 0 ? -1 : 1;
    }

    return cell.prev == null ? -1 : 1;
  }

  if (row.prev == null) {
    return -1;
  }

  if (row.next == null) {
    return 1;
  }

  return null;
}



//# sourceURL=webpack://Quill/./modules/keyboard.js?`)},"./modules/syntax.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return SyntaxCodeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeToken", function() { return CodeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Syntax; });
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ "./core/module.js");
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/break */ "./blots/break.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/text */ "./blots/text.js");
/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ "./formats/code.js");
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clipboard */ "./modules/clipboard.js");











const TokenAttributor = new parchment__WEBPACK_IMPORTED_MODULE_1__["ClassAttributor"]('code-token', 'hljs', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_1__["Scope"].INLINE
});

class CodeToken extends _blots_inline__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static formats(node, scroll) {
    while (node != null && node !== scroll.domNode) {
      if (node.classList && node.classList.contains(_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].className)) {
        return super.formats(node, scroll);
      }

      node = node.parentNode;
    }

    return undefined;
  }

  constructor(scroll, domNode, value) {
    super(scroll, domNode, value);
    TokenAttributor.add(this.domNode, value);
  }

  format(format, value) {
    if (format !== CodeToken.blotName) {
      super.format(format, value);
    } else if (value) {
      TokenAttributor.add(this.domNode, value);
    } else {
      TokenAttributor.remove(this.domNode);
      this.domNode.classList.remove(this.statics.className);
    }
  }

  optimize(...args) {
    super.optimize(...args);

    if (!TokenAttributor.value(this.domNode)) {
      this.unwrap();
    }
  }

}

CodeToken.blotName = 'code-token';
CodeToken.className = 'ql-token';

class SyntaxCodeBlock extends _formats_code__WEBPACK_IMPORTED_MODULE_9__["default"] {
  static create(value) {
    const domNode = super.create(value);

    if (typeof value === 'string') {
      domNode.setAttribute('data-language', value);
    }

    return domNode;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-language') || 'plain';
  }

  static register() {} // Syntax module will register


  format(name, value) {
    if (name === this.statics.blotName && value) {
      this.domNode.setAttribute('data-language', value);
    } else {
      super.format(name, value);
    }
  }

  replaceWith(name, value) {
    this.formatAt(0, this.length(), CodeToken.blotName, false);
    return super.replaceWith(name, value);
  }

}

class SyntaxCodeBlockContainer extends _formats_code__WEBPACK_IMPORTED_MODULE_9__["CodeBlockContainer"] {
  attach() {
    super.attach();
    this.forceNext = false;
    this.scroll.emitMount(this);
  }

  format(name, value) {
    if (name === SyntaxCodeBlock.blotName) {
      this.forceNext = true;
      this.children.forEach(child => {
        child.format(name, value);
      });
    }
  }

  formatAt(index, length, name, value) {
    if (name === SyntaxCodeBlock.blotName) {
      this.forceNext = true;
    }

    super.formatAt(index, length, name, value);
  }

  highlight(highlight, forced = false) {
    if (this.children.head == null) return;
    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);
    const text = "".concat(nodes.map(node => node.textContent).join('\\n'), "\\n");
    const language = SyntaxCodeBlock.formats(this.children.head.domNode);

    if (forced || this.forceNext || this.cachedText !== text) {
      if (text.trim().length > 0 || this.cachedText == null) {
        const oldDelta = this.children.reduce((delta, child) => {
          return delta.concat(Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__["blockDelta"])(child, false));
        }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());
        const delta = highlight(text, language);
        oldDelta.diff(delta).reduce((index, {
          retain,
          attributes
        }) => {
          // Should be all retains
          if (!retain) return index;

          if (attributes) {
            Object.keys(attributes).forEach(format => {
              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {
                this.formatAt(index, retain, format, attributes[format]);
              }
            });
          }

          return index + retain;
        }, 0);
      }

      this.cachedText = text;
      this.forceNext = false;
    }
  }

  optimize(context) {
    super.optimize(context);

    if (this.parent != null && this.children.head != null && this.uiNode != null) {
      const language = SyntaxCodeBlock.formats(this.children.head.domNode);

      if (language !== this.uiNode.value) {
        this.uiNode.value = language;
      }
    }
  }

}

SyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];
SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;
SyntaxCodeBlock.allowedChildren = [CodeToken, _blots_cursor__WEBPACK_IMPORTED_MODULE_7__["default"], _blots_text__WEBPACK_IMPORTED_MODULE_8__["default"], _blots_break__WEBPACK_IMPORTED_MODULE_6__["default"]];

class Syntax extends _core_module__WEBPACK_IMPORTED_MODULE_4__["default"] {
  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].register(CodeToken, true);
    _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].register(SyntaxCodeBlock, true);
    _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].register(SyntaxCodeBlockContainer, true);
  }

  constructor(quill, options) {
    super(quill, options);

    if (this.options.hljs == null) {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }

    this.languages = this.options.languages.reduce((memo, {
      key
    }) => {
      memo[key] = true;
      return memo;
    }, {});
    this.highlightBlot = this.highlightBlot.bind(this);
    this.initListener();
    this.initTimer();
  }

  initListener() {
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_BLOT_MOUNT, blot => {
      if (!(blot instanceof SyntaxCodeBlockContainer)) return;
      const select = this.quill.root.ownerDocument.createElement('select');
      this.options.languages.forEach(({
        key,
        label
      }) => {
        const option = select.ownerDocument.createElement('option');
        option.textContent = label;
        option.setAttribute('value', key);
        select.appendChild(option);
      });
      select.addEventListener('change', () => {
        blot.format(SyntaxCodeBlock.blotName, select.value);
        this.quill.root.focus(); // Prevent scrolling

        this.highlight(blot, true);
      });

      if (blot.uiNode == null) {
        blot.attachUI(select);

        if (blot.children.head) {
          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);
        }
      }
    });
  }

  initTimer() {
    let timer = null;
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_OPTIMIZE, () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.highlight();
        timer = null;
      }, this.options.interval);
    });
  }

  highlight(blot = null, force = false) {
    if (this.quill.selection.composing) return;
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER);
    const range = this.quill.getSelection();
    const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];
    blots.forEach(container => {
      container.highlight(this.highlightBlot, force);
    });
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);

    if (range != null) {
      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
    }
  }

  highlightBlot(text, language = 'plain') {
    language = this.languages[language] ? language : 'plain';

    if (language === 'plain') {
      return Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__["escapeText"])(text).split('\\n').reduce((delta, line, i) => {
        if (i !== 0) {
          delta.insert('\\n', {
            [_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]: language
          });
        }

        return delta.insert(line);
      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());
    }

    const container = this.quill.root.ownerDocument.createElement('div');
    container.classList.add(_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].className);
    container.innerHTML = this.options.hljs.highlight(language, text).value;
    return Object(_clipboard__WEBPACK_IMPORTED_MODULE_10__["traverse"])(this.quill.scroll, container, [(node, delta) => {
      const value = TokenAttributor.value(node);

      if (value) {
        return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(delta.length(), {
          [CodeToken.blotName]: value
        }));
      }

      return delta;
    }], [(node, delta) => {
      return node.data.split('\\n').reduce((memo, nodeText, i) => {
        if (i !== 0) memo.insert('\\n', {
          [_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]: language
        });
        return memo.insert(nodeText);
      }, delta);
    }], new WeakMap());
  }

}

Syntax.DEFAULTS = {
  hljs: (() => {
    return window.hljs;
  })(),
  interval: 1000,
  languages: [{
    key: 'plain',
    label: 'Plain'
  }, {
    key: 'bash',
    label: 'Bash'
  }, {
    key: 'cpp',
    label: 'C++'
  }, {
    key: 'cs',
    label: 'C#'
  }, {
    key: 'css',
    label: 'CSS'
  }, {
    key: 'diff',
    label: 'Diff'
  }, {
    key: 'xml',
    label: 'HTML/XML'
  }, {
    key: 'java',
    label: 'Java'
  }, {
    key: 'javascript',
    label: 'Javascript'
  }, {
    key: 'markdown',
    label: 'Markdown'
  }, {
    key: 'php',
    label: 'PHP'
  }, {
    key: 'python',
    label: 'Python'
  }, {
    key: 'ruby',
    label: 'Ruby'
  }, {
    key: 'sql',
    label: 'SQL'
  }]
};


//# sourceURL=webpack://Quill/./modules/syntax.js?`)},"./modules/table.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ "./core/module.js");
/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/table */ "./formats/table.js");





class Table extends _core_module__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableCell"]);
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableRow"]);
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableBody"]);
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableContainer"]);
  }

  constructor(...args) {
    super(...args);
    this.listenBalanceCells();
  }

  balanceTables() {
    this.quill.scroll.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableContainer"]).forEach(table => {
      table.balanceCells();
    });
  }

  deleteColumn() {
    const [table,, cell] = this.getTable();
    if (cell == null) return;
    table.deleteColumn(cell.cellOffset());
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
  }

  deleteRow() {
    const [, row] = this.getTable();
    if (row == null) return;
    row.remove();
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
  }

  deleteTable() {
    const [table] = this.getTable();
    if (table == null) return;
    const offset = table.offset();
    table.remove();
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    this.quill.setSelection(offset, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
  }

  getTable(range = this.quill.getSelection()) {
    if (range == null) return [null, null, null, -1];
    const [cell, offset] = this.quill.getLine(range.index);

    if (cell == null || cell.statics.blotName !== _formats_table__WEBPACK_IMPORTED_MODULE_3__["TableCell"].blotName) {
      return [null, null, null, -1];
    }

    const row = cell.parent;
    const table = row.parent.parent;
    return [table, row, cell, offset];
  }

  insertColumn(offset) {
    const range = this.quill.getSelection();
    const [table, row, cell] = this.getTable(range);
    if (cell == null) return;
    const column = cell.cellOffset();
    table.insertColumn(column + offset);
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    let shift = row.rowOffset();

    if (offset === 0) {
      shift += 1;
    }

    this.quill.setSelection(range.index + shift, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
  }

  insertColumnLeft() {
    this.insertColumn(0);
  }

  insertColumnRight() {
    this.insertColumn(1);
  }

  insertRow(offset) {
    const range = this.quill.getSelection();
    const [table, row, cell] = this.getTable(range);
    if (cell == null) return;
    const index = row.rowOffset();
    table.insertRow(index + offset);
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);

    if (offset > 0) {
      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
    } else {
      this.quill.setSelection(range.index + row.children.length, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
    }
  }

  insertRowAbove() {
    this.insertRow(0);
  }

  insertRowBelow() {
    this.insertRow(1);
  }

  insertTable(rows, columns) {
    const range = this.quill.getSelection();
    if (range == null) return;
    const delta = new Array(rows).fill(0).reduce(memo => {
      const text = new Array(columns).fill('\\n').join('');
      return memo.insert(text, {
        table: Object(_formats_table__WEBPACK_IMPORTED_MODULE_3__["tableId"])()
      });
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index));
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
    this.balanceTables();
  }

  listenBalanceCells() {
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_OPTIMIZE, mutations => {
      mutations.some(mutation => {
        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {
          this.quill.once(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.TEXT_CHANGE, (delta, old, source) => {
            if (source !== _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER) return;
            this.balanceTables();
          });
          return true;
        }

        return false;
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Table);

//# sourceURL=webpack://Quill/./modules/table.js?`)},"./modules/toolbar.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addControls", function() { return addControls; });
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/logger */ "./core/logger.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ "./core/module.js");





const debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_3__["default"])('quill:toolbar');

class Toolbar extends _core_module__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(quill, options) {
    super(quill, options);

    if (Array.isArray(this.options.container)) {
      const container = document.createElement('div');
      addControls(container, this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      this.container = container;
    } else if (typeof this.options.container === 'string') {
      this.container = document.querySelector(this.options.container);
    } else {
      this.container = this.options.container;
    }

    if (!(this.container instanceof HTMLElement)) {
      return debug.error('Container required for toolbar', this.options);
    }

    this.container.classList.add('ql-toolbar');
    this.controls = [];
    this.handlers = {};
    Object.keys(this.options.handlers).forEach(format => {
      this.addHandler(format, this.options.handlers[format]);
    });
    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {
      this.attach(input);
    });
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.EDITOR_CHANGE, (type, range) => {
      if (type === _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.SELECTION_CHANGE) {
        this.update(range);
      }
    });
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.SCROLL_OPTIMIZE, () => {
      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update

      this.update(range);
    });
  }

  addHandler(format, handler) {
    this.handlers[format] = handler;
  }

  attach(input) {
    let format = Array.from(input.classList).find(className => {
      return className.indexOf('ql-') === 0;
    });
    if (!format) return;
    format = format.slice('ql-'.length);

    if (input.tagName === 'BUTTON') {
      input.setAttribute('type', 'button');
    }

    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {
      debug.warn('ignoring attaching to nonexistent format', format, input);
      return;
    }

    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';
    input.addEventListener(eventName, e => {
      let value;

      if (input.tagName === 'SELECT') {
        if (input.selectedIndex < 0) return;
        const selected = input.options[input.selectedIndex];

        if (selected.hasAttribute('selected')) {
          value = false;
        } else {
          value = selected.value || false;
        }
      } else {
        if (input.classList.contains('ql-active')) {
          value = false;
        } else {
          value = input.value || !input.hasAttribute('value');
        }

        e.preventDefault();
      }

      this.quill.focus();
      const [range] = this.quill.selection.getRange();

      if (this.handlers[format] != null) {
        this.handlers[format].call(this, value);
      } else if (this.quill.scroll.query(format).prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_1__["EmbedBlot"]) {
        value = prompt("Enter ".concat(format)); // eslint-disable-line no-alert

        if (!value) return;
        this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length).insert({
          [format]: value
        }), _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      } else {
        this.quill.format(format, value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }

      this.update(range);
    });
    this.controls.push([format, input]);
  }

  update(range) {
    const formats = range == null ? {} : this.quill.getFormat(range);
    this.controls.forEach(pair => {
      const [format, input] = pair;

      if (input.tagName === 'SELECT') {
        let option;

        if (range == null) {
          option = null;
        } else if (formats[format] == null) {
          option = input.querySelector('option[selected]');
        } else if (!Array.isArray(formats[format])) {
          let value = formats[format];

          if (typeof value === 'string') {
            value = value.replace(/"/g, '\\\\"');
          }

          option = input.querySelector("option[value=\\"".concat(value, "\\"]"));
        }

        if (option == null) {
          input.value = ''; // TODO make configurable?

          input.selectedIndex = -1;
        } else {
          option.selected = true;
        }
      } else if (range == null) {
        input.classList.remove('ql-active');
      } else if (input.hasAttribute('value')) {
        // both being null should match (default values)
        // '1' should match with 1 (headers)
        const isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
        input.classList.toggle('ql-active', isActive);
      } else {
        input.classList.toggle('ql-active', formats[format] != null);
      }
    });
  }

}

Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  const input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add("ql-".concat(format));

  if (value != null) {
    input.value = value;
  }

  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }

  groups.forEach(controls => {
    const group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(control => {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        const format = Object.keys(control)[0];
        const value = control[format];

        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  const input = document.createElement('select');
  input.classList.add("ql-".concat(format));
  values.forEach(value => {
    const option = document.createElement('option');

    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }

    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const range = this.quill.getSelection();
      if (range == null) return;

      if (range.length === 0) {
        const formats = this.quill.getFormat();
        Object.keys(formats).forEach(name => {
          // Clean functionality in existing apps only clean inline formats
          if (this.quill.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__["Scope"].INLINE) != null) {
            this.quill.format(name, false, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
          }
        });
      } else {
        this.quill.removeFormat(range, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
    },

    direction(value) {
      const {
        align
      } = this.quill.getFormat();

      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }

      this.quill.format('direction', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
    },

    indent(value) {
      const range = this.quill.getSelection();
      const formats = this.quill.getFormat(range);
      const indent = parseInt(formats.indent || 0, 10);

      if (value === '+1' || value === '-1') {
        let modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
    },

    link(value) {
      if (value === true) {
        value = prompt('Enter link URL:'); // eslint-disable-line no-alert
      }

      this.quill.format('link', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
    },

    list(value) {
      const range = this.quill.getSelection();
      const formats = this.quill.getFormat(range);

      if (value === 'check') {
        if (formats.list === 'checked' || formats.list === 'unchecked') {
          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
        }
      } else {
        this.quill.format('list', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
    }

  }
};


//# sourceURL=webpack://Quill/./modules/toolbar.js?`)},"./modules/uploader.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ "./core/module.js");




class Uploader extends _core_module__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    super(quill, options);
    quill.root.addEventListener('drop', e => {
      e.preventDefault();
      let native;

      if (document.caretRangeFromPoint) {
        native = document.caretRangeFromPoint(e.clientX, e.clientY);
      } else if (document.caretPositionFromPoint) {
        const position = document.caretPositionFromPoint(e.clientX, e.clientY);
        native = document.createRange();
        native.setStart(position.offsetNode, position.offset);
        native.setEnd(position.offsetNode, position.offset);
      } else {
        return;
      }

      const normalized = quill.selection.normalizeNative(native);
      const range = quill.selection.normalizedToRange(normalized);
      this.upload(range, e.dataTransfer.files);
    });
  }

  upload(range, files) {
    const uploads = [];
    Array.from(files).forEach(file => {
      if (file && this.options.mimetypes.includes(file.type)) {
        uploads.push(file);
      }
    });

    if (uploads.length > 0) {
      this.options.handler.call(this, range, uploads);
    }
  }

}

Uploader.DEFAULTS = {
  mimetypes: ['image/png', 'image/jpeg'],

  handler(range, files) {
    const promises = files.map(file => {
      return new Promise(resolve => {
        const reader = new FileReader();

        reader.onload = e => {
          resolve(e.target.result);
        };

        reader.readAsDataURL(file);
      });
    });
    Promise.all(promises).then(images => {
      const update = images.reduce((delta, image) => {
        return delta.insert({
          image
        });
      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length));
      this.quill.updateContents(update, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
      this.quill.setSelection(range.index + images.length, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
    });
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Uploader);

//# sourceURL=webpack://Quill/./modules/uploader.js?`)},"./node_modules/array-filter/index.js":function(module,exports){eval(`
/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;


//# sourceURL=webpack://Quill/./node_modules/array-filter/index.js?`)},"./node_modules/available-typed-arrays/index.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(global) {

var filter = __webpack_require__(/*! array-filter */ "./node_modules/array-filter/index.js");

module.exports = function availableTypedArrays() {
	return filter([
		'BigInt64Array',
		'BigUint64Array',
		'Float32Array',
		'Float64Array',
		'Int16Array',
		'Int32Array',
		'Int8Array',
		'Uint16Array',
		'Uint32Array',
		'Uint8Array',
		'Uint8ClampedArray'
	], function (typedArray) {
		return typeof global[typedArray] === 'function';
	});
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

//# sourceURL=webpack://Quill/./node_modules/available-typed-arrays/index.js?`)},"./node_modules/clone/clone.js":function(module,exports){eval(`var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no \`Map\`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if \`circular\` is false and \`parent\` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param \`parent\` - the object to be cloned
 * @param \`circular\` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param \`depth\` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param \`prototype\` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param \`includeNonEnumerable\` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


//# sourceURL=webpack://Quill/./node_modules/clone/clone.js?`)},"./node_modules/deep-equal/index.js":function(module,exports,__webpack_require__){eval(`

var objectKeys = __webpack_require__(/*! object-keys */ "./node_modules/deep-equal/node_modules/object-keys/index.js");
var isArguments = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");
var is = __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./node_modules/deep-equal/node_modules/is-regex/index.js");
var flags = __webpack_require__(/*! regexp.prototype.flags */ "./node_modules/regexp.prototype.flags/index.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/deep-equal/node_modules/isarray/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./node_modules/deep-equal/node_modules/is-date-object/index.js");
var whichBoxedPrimitive = __webpack_require__(/*! which-boxed-primitive */ "./node_modules/which-boxed-primitive/index.js");
var GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ "./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js");
var whichCollection = __webpack_require__(/*! which-collection */ "./node_modules/which-collection/index.js");
var getIterator = __webpack_require__(/*! es-get-iterator */ "./node_modules/es-get-iterator/index.js");
var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var whichTypedArray = __webpack_require__(/*! which-typed-array */ "./node_modules/which-typed-array/index.js");
var assign = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var $getTime = callBound('Date.prototype.getTime');
var gPO = Object.getPrototypeOf;
var $objToString = callBound('Object.prototype.toString');

var $Set = GetIntrinsic('%Set%', true);
var $mapHas = callBound('Map.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSize = callBound('Map.prototype.size', true);
var $setAdd = callBound('Set.prototype.add', true);
var $setDelete = callBound('Set.prototype.delete', true);
var $setHas = callBound('Set.prototype.has', true);
var $setSize = callBound('Set.prototype.size', true);

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
function setHasEqualElement(set, val1, opts, channel) {
  var i = getIterator(set);
  var result;
  while ((result = i.next()) && !result.done) {
    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define
      // Remove the matching element to make sure we do not check that again.
      $setDelete(set, result.value);
      return true;
    }
  }

  return false;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
function findLooseMatchingPrimitives(prim) {
  if (typeof prim === 'undefined') {
    return null;
  }
  if (typeof prim === 'object') { // Only pass in null as object!
    return void 0;
  }
  if (typeof prim === 'symbol') {
    return false;
  }
  if (typeof prim === 'string' || typeof prim === 'number') {
    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
    return +prim === +prim; // eslint-disable-line no-implicit-coercion
  }
  return true;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }
  var curB = $mapGet(b, altValue);
  var looseOpts = assign({}, opts, { strict: false });
  if (
    (typeof curB === 'undefined' && !$mapHas(b, altValue))
    // eslint-disable-next-line no-use-before-define
    || !internalDeepEqual(item, curB, looseOpts, channel)
  ) {
    return false;
  }
  // eslint-disable-next-line no-use-before-define
  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }

  return $setHas(b, altValue) && !$setHas(a, altValue);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
  var i = getIterator(set);
  var result;
  var key2;
  while ((result = i.next()) && !result.done) {
    key2 = result.value;
    if (
      // eslint-disable-next-line no-use-before-define
      internalDeepEqual(key1, key2, opts, channel)
      // eslint-disable-next-line no-use-before-define
      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
    ) {
      $setDelete(set, key2);
      return true;
    }
  }

  return false;
}

function internalDeepEqual(actual, expected, options, channel) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  var actualBoxed = whichBoxedPrimitive(actual);
  var expectedBoxed = whichBoxedPrimitive(expected);
  if (actualBoxed !== expectedBoxed) {
    return false;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration

  var hasActual = channel.has(actual);
  var hasExpected = channel.has(expected);
  var sentinel;
  if (hasActual && hasExpected) {
    if (channel.get(actual) === channel.get(expected)) {
      return true;
    }
  } else {
    sentinel = {};
  }
  if (!hasActual) { channel.set(actual, sentinel); }
  if (!hasExpected) { channel.set(expected, sentinel); }

  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts, channel);
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }

  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
}

function setEquiv(a, b, opts, channel) {
  if ($setSize(a) !== $setSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  while ((resultA = iA.next()) && !resultA.done) {
    if (resultA.value && typeof resultA.value === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    } else if (!$setHas(b, resultA.value)) {
      if (opts.strict) { return false; }
      if (!setMightHaveLoosePrim(a, b, resultA.value)) {
        return false;
      }
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    }
  }
  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
      if (resultB.value && typeof resultB.value === 'object') {
        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && !$setHas(a, resultB.value)
        && !setHasEqualElement(set, resultB.value, opts.strict, channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function mapEquiv(a, b, opts, channel) {
  if ($mapSize(a) !== $mapSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  var key;
  var item1;
  var item2;
  while ((resultA = iA.next()) && !resultA.done) {
    key = resultA.value[0];
    item1 = resultA.value[1];
    if (key && typeof key === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, key);
    } else {
      item2 = $mapGet(b, key);
      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {
        if (opts.strict) {
          return false;
        }
        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
          return false;
        }
        if (!set) { set = new $Set(); }
        $setAdd(set, key);
      }
    }
  }

  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      key = resultB.value[0];
      item2 = resultB.value[1];
      if (key && typeof key === 'object') {
        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))
        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function objEquiv(a, b, opts, channel) {
  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */
  var i, key;

  if (typeof a !== typeof b) { return false; }
  if (a == null || b == null) { return false; }

  if ($objToString(a) !== $objToString(b)) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsArray = isArray(a);
  var bIsArray = isArray(b);
  if (aIsArray !== bIsArray) { return false; }

  // TODO: replace when a cross-realm brand check is available
  var aIsError = a instanceof Error;
  var bIsError = b instanceof Error;
  if (aIsError !== bIsError) { return false; }
  if (aIsError || bIsError) {
    if (a.name !== b.name || a.message !== b.message) { return false; }
  }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
    return false;
  }

  var aIsDate = isDate(a);
  var bIsDate = isDate(b);
  if (aIsDate !== bIsDate) { return false; }
  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here
    if ($getTime(a) !== $getTime(b)) { return false; }
  }
  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }

  if (whichTypedArray(a) !== whichTypedArray(b)) {
    return false;
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq
  }

  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }
  }

  var aCollection = whichCollection(a);
  var bCollection = whichCollection(b);
  if (aCollection !== bCollection) {
    return false;
  }
  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection
    return setEquiv(a, b, opts, channel);
  }
  if (aCollection === 'Map') { // aCollection === bCollection
    return mapEquiv(a, b, opts, channel);
  }

  return true;
}

module.exports = function deepEqual(a, b, opts) {
  return internalDeepEqual(a, b, opts, getSideChannel());
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/index.js?`)},"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js":function(module,exports,__webpack_require__){eval(`

/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;
var reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js?`)},"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js":function(module,exports,__webpack_require__){eval(`

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js?`)},"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js?`)},"./node_modules/deep-equal/node_modules/is-date-object/index.js":function(module,exports,__webpack_require__){eval(`

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-date-object/index.js?`)},"./node_modules/deep-equal/node_modules/is-regex/index.js":function(module,exports,__webpack_require__){eval(`

var has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0; // eslint-disable-line no-param-reassign

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-regex/index.js?`)},"./node_modules/deep-equal/node_modules/isarray/index.js":function(module,exports){eval(`var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/isarray/index.js?`)},"./node_modules/deep-equal/node_modules/object-keys/implementation.js":function(module,exports,__webpack_require__){eval(`

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/deep-equal/node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/implementation.js?`)},"./node_modules/deep-equal/node_modules/object-keys/index.js":function(module,exports,__webpack_require__){eval(`

var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/deep-equal/node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/deep-equal/node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/index.js?`)},"./node_modules/deep-equal/node_modules/object-keys/isArguments.js":function(module,exports,__webpack_require__){eval(`

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/isArguments.js?`)},"./node_modules/define-properties/index.js":function(module,exports,__webpack_require__){eval(`

var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


//# sourceURL=webpack://Quill/./node_modules/define-properties/index.js?`)},"./node_modules/es-get-iterator/index.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(process) {

/* eslint global-require: 0 */
// the code is structured this way so that bundlers can
// alias out \`has-symbols\` to \`() => true\` or \`() => false\` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, \`isarray\` can be aliased to \`Array.isArray\` if
// available in all target environments.

var isArguments = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");

if (__webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")() || __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")()) {
	var $iterator = Symbol.iterator;
	// Symbol is available natively or shammed
	// natively:
	//  - Chrome >= 38
	//  - Edge 12-14?, Edge >= 15 for sure
	//  - FF >= 36
	//  - Safari >= 9
	//  - node >= 0.12
	module.exports = function getIterator(iterable) {
		// alternatively, \`iterable[$iterator]?.()\`
		if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
			return iterable[$iterator]();
		}
		if (isArguments(iterable)) {
			// arguments objects lack Symbol.iterator
			// - node 0.12
			return Array.prototype[$iterator].call(iterable);
		}
	};
} else {
	// Symbol is not available, native or shammed
	var isArray = __webpack_require__(/*! isarray */ "./node_modules/es-get-iterator/node_modules/isarray/index.js");
	var isString = __webpack_require__(/*! is-string */ "./node_modules/is-string/index.js");
	var GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ "./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js");
	var $Map = GetIntrinsic('%Map%', true);
	var $Set = GetIntrinsic('%Set%', true);
	var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js");
	var $arrayPush = callBound('Array.prototype.push');
	var $charCodeAt = callBound('String.prototype.charCodeAt');
	var $stringSlice = callBound('String.prototype.slice');

	var advanceStringIndex = function advanceStringIndex(S, index) {
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	};

	var getArrayIterator = function getArrayIterator(arraylike) {
		var i = 0;
		return {
			next: function next() {
				var done = i >= arraylike.length;
				var value;
				if (!done) {
					value = arraylike[i];
					i += 1;
				}
				return {
					done: done,
					value: value
				};
			}
		};
	};

	var getNonCollectionIterator = function getNonCollectionIterator(iterable) {
		if (isArray(iterable) || isArguments(iterable)) {
			return getArrayIterator(iterable);
		}
		if (isString(iterable)) {
			var i = 0;
			return {
				next: function next() {
					var nextIndex = advanceStringIndex(iterable, i);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		}
	};

	if (!$Map && !$Set) {
		// the only language iterables are Array, String, arguments
		// - Safari <= 6.0
		// - Chrome < 38
		// - node < 0.12
		// - FF < 13
		// - IE < 11
		// - Edge < 11

		module.exports = getNonCollectionIterator;
	} else {
		// either Map or Set are available, but Symbol is not
		// - es6-shim on an ES5 browser
		// - Safari 6.2 (maybe 6.1?)
		// - FF v[13, 36)
		// - IE 11
		// - Edge 11
		// - Safari v[6, 9)

		var isMap = __webpack_require__(/*! is-map */ "./node_modules/is-map/index.js");
		var isSet = __webpack_require__(/*! is-set */ "./node_modules/is-set/index.js");

		// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
		var $mapForEach = callBound('Map.prototype.forEach', true);
		var $setForEach = callBound('Set.prototype.forEach', true);
		if (typeof process === 'undefined' || !process.versions || !process.versions.node) { // "if is not node"

			// Firefox 17 - 26 has \`.iterator()\`, whose iterator \`.next()\` either
			// returns a value, or throws a StopIteration object. These browsers
			// do not have any other mechanism for iteration.
			var $mapIterator = callBound('Map.prototype.iterator', true);
			var $setIterator = callBound('Set.prototype.iterator', true);
			var getStopIterationIterator = function (iterator) {
				var done = false;
				return {
					next: function next() {
						try {
							return {
								done: done,
								value: done ? undefined : iterator.next()
							};
						} catch (e) {
							done = true;
							return {
								done: true,
								value: undefined
							};
						}
					}
				};
			};
		}
		// Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
		// this returns a proper iterator object, so we should use it instead of forEach.
		// newer es6-shim versions use a string "_es6-shim iterator_" property.
		var $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);
		var $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);

		var getCollectionIterator = function getCollectionIterator(iterable) {
			if (isMap(iterable)) {
				if ($mapIterator) {
					return getStopIterationIterator($mapIterator(iterable));
				}
				if ($mapAtAtIterator) {
					return $mapAtAtIterator(iterable);
				}
				if ($mapForEach) {
					var entries = [];
					$mapForEach(iterable, function (v, k) {
						$arrayPush(entries, [k, v]);
					});
					return getArrayIterator(entries);
				}
			}
			if (isSet(iterable)) {
				if ($setIterator) {
					return getStopIterationIterator($setIterator(iterable));
				}
				if ($setAtAtIterator) {
					return $setAtAtIterator(iterable);
				}
				if ($setForEach) {
					var values = [];
					$setForEach(iterable, function (v) {
						$arrayPush(values, v);
					});
					return getArrayIterator(values);
				}
			}
		};

		module.exports = function getIterator(iterable) {
			return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
		};
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/index.js?`)},"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js":function(module,exports,__webpack_require__){eval(`

/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;
var reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js?`)},"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js":function(module,exports,__webpack_require__){eval(`

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js?`)},"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js?`)},"./node_modules/es-get-iterator/node_modules/isarray/index.js":function(module,exports){eval(`var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/isarray/index.js?`)},"./node_modules/eventemitter3/index.js":function(module,exports){eval(`'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our \`EE\` objects.
 * An \`Events\` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from \`Object.prototype\`. In some engines creating an
// instance in this way is faster than calling \`Object.create(null)\` directly.
// If \`Object.create(null)\` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the \`__proto__\` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the \`EventEmitter\` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the \`EventEmitter\` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal \`EventEmitter\` interface that is molded against the Node.js
 * \`EventEmitter\` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} \`true\` if the event had listeners, else \`false\`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} \`this\`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} \`this\`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} \`this\`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} \`this\`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow \`EventEmitter\` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}


//# sourceURL=webpack://Quill/./node_modules/eventemitter3/index.js?`)},"./node_modules/extend/index.js":function(module,exports){eval(`'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


//# sourceURL=webpack://Quill/./node_modules/extend/index.js?`)},"./node_modules/fast-diff/diff.js":function(module,exports){eval(`/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos, _fix_unicode) {
  // Check for equality
  if (text1 === text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  if (cursor_pos != null) {
    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
    if (editdiff) {
      return editdiff;
    }
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs, _fix_unicode);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i !== -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [
      [DIFF_INSERT, longtext.substring(0, i)],
      [DIFF_EQUAL, shorttext],
      [DIFF_INSERT, longtext.substring(i + shorttext.length)]
    ];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length === 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 !== 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (
        x1 < text1_length && y1 < text2_length &&
        text1.charAt(x1) === text2.charAt(y1)
      ) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (
        x2 < text1_length && y2 < text2_length &&
        text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)
      ) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (
      text1.substring(pointerstart, pointermid) ==
      text2.substring(pointerstart, pointermid)
    ) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
    pointermid--;
  }

  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (
      text1.substring(text1.length - pointermid, text1.length - pointerend) ==
      text2.substring(text2.length - pointermid, text2.length - pointerend)
    ) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
    pointermid--;
  }

  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
      var prefixLength = diff_commonPrefix(
        longtext.substring(i), shorttext.substring(j));
      var suffixLength = diff_commonSuffix(
        longtext.substring(0, i), shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(
          j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [
        best_longtext_a, best_longtext_b,
        best_shorttext_a, best_shorttext_b, best_common
      ];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff
 */
function diff_cleanupMerge(diffs, fix_unicode) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
      diffs.splice(pointer, 1);
      continue;
    }
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:

        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        var previous_equality = pointer - count_insert - count_delete - 1;
        if (fix_unicode) {
          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,
          // we assume that the old and new text in the diff are complete and correct
          // unicode-encoded JS strings, but the tuple boundaries may fall between
          // surrogate pairs.  we fix this by shaving off stray surrogates from the end
          // of the previous equality and the beginning of this equality.  this may create
          // empty equalities or a common prefix or suffix.  for example, if AB and AC are
          // emojis, \`[[0, 'A'], [-1, 'BA'], [0, 'C']]\` would turn into deleting 'ABAC' and
          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this
          // particular case, both equalities go away, we absorb any previous inequalities,
          // and we keep scanning for the next equality before rewriting the tuples.
          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
            var stray = diffs[previous_equality][1].slice(-1);
            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
            text_delete = stray + text_delete;
            text_insert = stray + text_insert;
            if (!diffs[previous_equality][1]) {
              // emptied out previous equality, so delete it and include previous delete/insert
              diffs.splice(previous_equality, 1);
              pointer--;
              var k = previous_equality - 1;
              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                count_insert++;
                text_insert = diffs[k][1] + text_insert;
                k--;
              }
              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                count_delete++;
                text_delete = diffs[k][1] + text_delete;
                k--;
              }
              previous_equality = k;
            }
          }
          if (starts_with_pair_end(diffs[pointer][1])) {
            var stray = diffs[pointer][1].charAt(0);
            diffs[pointer][1] = diffs[pointer][1].slice(1);
            text_delete += stray;
            text_insert += stray;
          }
        }
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          // for empty equality not at end, wait for next equality
          diffs.splice(pointer, 1);
          break;
        }
        if (text_delete.length > 0 || text_insert.length > 0) {
          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware
          if (text_delete.length > 0 && text_insert.length > 0) {
            // Factor out any common prefixes.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if (previous_equality >= 0) {
                diffs[previous_equality][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixes.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] =
                text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length - commonlength);
              text_delete = text_delete.substring(0, text_delete.length - commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          var n = count_insert + count_delete;
          if (text_delete.length === 0 && text_insert.length === 0) {
            diffs.splice(pointer - n, n);
            pointer = pointer - n;
          } else if (text_delete.length === 0) {
            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
            pointer = pointer - n + 1;
          } else if (text_insert.length === 0) {
            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
            pointer = pointer - n + 1;
          } else {
            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
            pointer = pointer - n + 2;
          }
        }
        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] === DIFF_EQUAL &&
      diffs[pointer + 1][0] === DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
        diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
          diffs[pointer][1].substring(0, diffs[pointer][1].length -
            diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
        diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
          diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs, fix_unicode);
  }
};

function is_surrogate_pair_start(charCode) {
  return charCode >= 0xD800 && charCode <= 0xDBFF;
}

function is_surrogate_pair_end(charCode) {
  return charCode >= 0xDC00 && charCode <= 0xDFFF;
}

function starts_with_pair_end(str) {
  return is_surrogate_pair_end(str.charCodeAt(0));
}

function ends_with_pair_start(str) {
  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
}

function remove_empty_tuples(tuples) {
  var ret = [];
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][1].length > 0) {
      ret.push(tuples[i]);
    }
  }
  return ret;
}

function make_edit_splice(before, oldMiddle, newMiddle, after) {
  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
    return null;
  }
  return remove_empty_tuples([
    [DIFF_EQUAL, before],
    [DIFF_DELETE, oldMiddle],
    [DIFF_INSERT, newMiddle],
    [DIFF_EQUAL, after]
  ]);
}

function find_cursor_edit_diff(oldText, newText, cursor_pos) {
  // note: this runs after equality check has ruled out exact equality
  var oldRange = typeof cursor_pos === 'number' ?
    { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
  var newRange = typeof cursor_pos === 'number' ?
    null : cursor_pos.newRange;
  // take into account the old and new selection to generate the best diff
  // possible for a text edit.  for example, a text change from "xxx" to "xx"
  // could be a delete or forwards-delete of any one of the x's, or the
  // result of selecting two of the x's and typing "x".
  var oldLength = oldText.length;
  var newLength = newText.length;
  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
    // see if we have an insert or delete before or after cursor
    var oldCursor = oldRange.index;
    var oldBefore = oldText.slice(0, oldCursor);
    var oldAfter = oldText.slice(oldCursor);
    var maybeNewCursor = newRange ? newRange.index : null;
    editBefore: {
      // is this an insert or delete right before oldCursor?
      var newCursor = oldCursor + newLength - oldLength;
      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
        break editBefore;
      }
      if (newCursor < 0 || newCursor > newLength) {
        break editBefore;
      }
      var newBefore = newText.slice(0, newCursor);
      var newAfter = newText.slice(newCursor);
      if (newAfter !== oldAfter) {
        break editBefore;
      }
      var prefixLength = Math.min(oldCursor, newCursor);
      var oldPrefix = oldBefore.slice(0, prefixLength);
      var newPrefix = newBefore.slice(0, prefixLength);
      if (oldPrefix !== newPrefix) {
        break editBefore;
      }
      var oldMiddle = oldBefore.slice(prefixLength);
      var newMiddle = newBefore.slice(prefixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
    }
    editAfter: {
      // is this an insert or delete right after oldCursor?
      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
        break editAfter;
      }
      var cursor = oldCursor;
      var newBefore = newText.slice(0, cursor);
      var newAfter = newText.slice(cursor);
      if (newBefore !== oldBefore) {
        break editAfter;
      }
      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
      var newSuffix = newAfter.slice(newAfter.length - suffixLength);
      if (oldSuffix !== newSuffix) {
        break editAfter;
      }
      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
    }
  }
  if (oldRange.length > 0 && newRange && newRange.length === 0) {
    replaceRange: {
      // see if diff could be a splice of the old selection range
      var oldPrefix = oldText.slice(0, oldRange.index);
      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
      var prefixLength = oldPrefix.length;
      var suffixLength = oldSuffix.length;
      if (newLength < prefixLength + suffixLength) {
        break replaceRange;
      }
      var newPrefix = newText.slice(0, prefixLength);
      var newSuffix = newText.slice(newLength - suffixLength);
      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
        break replaceRange;
      }
      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
    }
  }

  return null;
}

function diff(text1, text2, cursor_pos) {
  // only pass fix_unicode=true at the top level, not when diff_main is
  // recursively invoked
  return diff_main(text1, text2, cursor_pos, true);
}

diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;


//# sourceURL=webpack://Quill/./node_modules/fast-diff/diff.js?`)},"./node_modules/foreach/index.js":function(module,exports){eval(`
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



//# sourceURL=webpack://Quill/./node_modules/foreach/index.js?`)},"./node_modules/function-bind/implementation.js":function(module,exports,__webpack_require__){eval(`

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


//# sourceURL=webpack://Quill/./node_modules/function-bind/implementation.js?`)},"./node_modules/function-bind/index.js":function(module,exports,__webpack_require__){eval(`

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


//# sourceURL=webpack://Quill/./node_modules/function-bind/index.js?`)},"./node_modules/has-symbols/index.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

//# sourceURL=webpack://Quill/./node_modules/has-symbols/index.js?`)},"./node_modules/has-symbols/shams.js":function(module,exports,__webpack_require__){eval(`

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


//# sourceURL=webpack://Quill/./node_modules/has-symbols/shams.js?`)},"./node_modules/has/src/index.js":function(module,exports,__webpack_require__){eval(`

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


//# sourceURL=webpack://Quill/./node_modules/has/src/index.js?`)},"./node_modules/is-arguments/index.js":function(module,exports,__webpack_require__){eval(`

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


//# sourceURL=webpack://Quill/./node_modules/is-arguments/index.js?`)},"./node_modules/is-bigint/index.js":function(module,exports,__webpack_require__){eval(`

if (typeof BigInt === 'function') {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && false;
	};
}


//# sourceURL=webpack://Quill/./node_modules/is-bigint/index.js?`)},"./node_modules/is-boolean-object/index.js":function(module,exports,__webpack_require__){eval(`

var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};


//# sourceURL=webpack://Quill/./node_modules/is-boolean-object/index.js?`)},"./node_modules/is-date-object/index.js":function(module,exports,__webpack_require__){eval(`

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


//# sourceURL=webpack://Quill/./node_modules/is-date-object/index.js?`)},"./node_modules/is-map/index.js":function(module,exports,__webpack_require__){eval(`

var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Map) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// \`Map\` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// \`Map\` does not have a \`has\` method
		return false;
	};
}

module.exports = exported || function isMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


//# sourceURL=webpack://Quill/./node_modules/is-map/index.js?`)},"./node_modules/is-number-object/index.js":function(module,exports,__webpack_require__){eval(`

var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


//# sourceURL=webpack://Quill/./node_modules/is-number-object/index.js?`)},"./node_modules/is-regex/index.js":function(module,exports,__webpack_require__){eval(`

var has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


//# sourceURL=webpack://Quill/./node_modules/is-regex/index.js?`)},"./node_modules/is-set/index.js":function(module,exports,__webpack_require__){eval(`

var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// \`Set\` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// \`Set\` does not have a \`has\` method
		return false;
	};
}

module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x);
		if ($mapHas) {
			try {
				$mapHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Set; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


//# sourceURL=webpack://Quill/./node_modules/is-set/index.js?`)},"./node_modules/is-string/index.js":function(module,exports,__webpack_require__){eval(`

var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


//# sourceURL=webpack://Quill/./node_modules/is-string/index.js?`)},"./node_modules/is-typed-array/index.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(/*! foreach */ "./node_modules/foreach/index.js");
var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "./node_modules/available-typed-arrays/index.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js");

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new global[typedArray]();
		if (!(Symbol.toStringTag in arr)) {
			throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
		}
		var proto = getPrototypeOf(arr);
		var descriptor = gOPD(proto, Symbol.toStringTag);
		if (!descriptor) {
			var superProto = getPrototypeOf(proto);
			descriptor = gOPD(superProto, Symbol.toStringTag);
		}
		toStrTags[typedArray] = descriptor.get;
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

//# sourceURL=webpack://Quill/./node_modules/is-typed-array/index.js?`)},"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js":function(module,exports,__webpack_require__){eval(`

/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;
var reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js?`)},"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js":function(module,exports,__webpack_require__){eval(`

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js?`)},"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js?`)},"./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?`)},"./node_modules/is-weakmap/index.js":function(module,exports,__webpack_require__){eval(`

var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// \`WeakMap\` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// \`WeakMap\` does not have a \`has\` method
		return false;
	};
}

module.exports = exported || function isWeakMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x, $mapHas);
		if ($setHas) {
			try {
				$setHas.call(x, $setHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakMap; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


//# sourceURL=webpack://Quill/./node_modules/is-weakmap/index.js?`)},"./node_modules/is-weakset/index.js":function(module,exports,__webpack_require__){eval(`

var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakSet(x) {
		// \`WeakSet\` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakSet(x) {
		// \`WeakSet\` does not have a \`has\` method
		return false;
	};
}

module.exports = exported || function isWeakSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x, $setHas);
		if ($mapHas) {
			try {
				$mapHas.call(x, $mapHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakSet; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


//# sourceURL=webpack://Quill/./node_modules/is-weakset/index.js?`)},"./node_modules/object-inspect/index.js":function(module,exports,__webpack_require__){eval(`var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__(/*! ./util.inspect */ 1).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return '[Object]';
    }

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : '') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object') {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var xs = arrObjKeys(obj, inspect);
        if (xs.length === 0) { return '{}'; }
        return '{ ' + xs.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(f, /^function\\s*([\\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\\\])/g, '\\\\$1').replace(/[\\x00-\\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
    }[n];
    if (x) { return '\\\\' + x; }
    return '\\\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries) {
    return type + ' (' + size + ') {' + entries.join(', ') + '}';
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}


//# sourceURL=webpack://Quill/./node_modules/object-inspect/index.js?`)},"./node_modules/object-is/index.js":function(module,exports,__webpack_require__){eval(`

// http://www.ecma-international.org/ecma-262/6.0/#sec-object.is

var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



//# sourceURL=webpack://Quill/./node_modules/object-is/index.js?`)},"./node_modules/object-keys/index.js":function(module,exports,__webpack_require__){eval(`

// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$applicationCache: true,
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


//# sourceURL=webpack://Quill/./node_modules/object-keys/index.js?`)},"./node_modules/object-keys/isArguments.js":function(module,exports,__webpack_require__){eval(`

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


//# sourceURL=webpack://Quill/./node_modules/object-keys/isArguments.js?`)},"./node_modules/object.assign/implementation.js":function(module,exports,__webpack_require__){eval(`

// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


//# sourceURL=webpack://Quill/./node_modules/object.assign/implementation.js?`)},"./node_modules/object.assign/index.js":function(module,exports,__webpack_require__){eval(`

var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


//# sourceURL=webpack://Quill/./node_modules/object.assign/index.js?`)},"./node_modules/object.assign/polyfill.js":function(module,exports,__webpack_require__){eval(`

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


//# sourceURL=webpack://Quill/./node_modules/object.assign/polyfill.js?`)},"./node_modules/object.assign/shim.js":function(module,exports,__webpack_require__){eval(`

var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


//# sourceURL=webpack://Quill/./node_modules/object.assign/shim.js?`)},"./node_modules/parchment/src/attributor/attributor.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attributor; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ "./node_modules/parchment/src/scope.ts");

class Attributor {
    constructor(attrName, keyName, options = {}) {
        this.attrName = attrName;
        this.keyName = keyName;
        const attributeBit = _scope__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE & _scope__WEBPACK_IMPORTED_MODULE_0__["default"].ATTRIBUTE;
        this.scope =
            options.scope != null
                ? // Ignore type bits, force attribute bit
                    (options.scope & _scope__WEBPACK_IMPORTED_MODULE_0__["default"].LEVEL) | attributeBit
                : _scope__WEBPACK_IMPORTED_MODULE_0__["default"].ATTRIBUTE;
        if (options.whitelist != null) {
            this.whitelist = options.whitelist;
        }
    }
    static keys(node) {
        return Array.from(node.attributes).map((item) => item.name);
    }
    add(node, value) {
        if (!this.canAdd(node, value)) {
            return false;
        }
        node.setAttribute(this.keyName, value);
        return true;
    }
    canAdd(_node, value) {
        if (this.whitelist == null) {
            return true;
        }
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    }
    remove(node) {
        node.removeAttribute(this.keyName);
    }
    value(node) {
        const value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    }
}


//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/attributor.ts?`)},"./node_modules/parchment/src/attributor/class.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ "./node_modules/parchment/src/attributor/attributor.ts");

function match(node, prefix) {
    const className = node.getAttribute('class') || '';
    return className
        .split(/\\s+/)
        .filter((name) => name.indexOf(\`\${prefix}-\`) === 0);
}
class ClassAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static keys(node) {
        return (node.getAttribute('class') || '')
            .split(/\\s+/)
            .map((name) => name.split('-').slice(0, -1).join('-'));
    }
    add(node, value) {
        if (!this.canAdd(node, value)) {
            return false;
        }
        this.remove(node);
        node.classList.add(\`\${this.keyName}-\${value}\`);
        return true;
    }
    remove(node) {
        const matches = match(node, this.keyName);
        matches.forEach((name) => {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    }
    value(node) {
        const result = match(node, this.keyName)[0] || '';
        const value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    }
}
/* harmony default export */ __webpack_exports__["default"] = (ClassAttributor);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/class.ts?`)},"./node_modules/parchment/src/attributor/store.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ "./node_modules/parchment/src/registry.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributor */ "./node_modules/parchment/src/attributor/attributor.ts");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ "./node_modules/parchment/src/attributor/class.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./node_modules/parchment/src/attributor/style.ts");





class AttributorStore {
    constructor(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    attribute(attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    }
    build() {
        this.attributes = {};
        const blot = _registry__WEBPACK_IMPORTED_MODULE_0__["default"].find(this.domNode);
        if (blot == null) {
            return;
        }
        const attributes = _attributor__WEBPACK_IMPORTED_MODULE_2__["default"].keys(this.domNode);
        const classes = _class__WEBPACK_IMPORTED_MODULE_3__["default"].keys(this.domNode);
        const styles = _style__WEBPACK_IMPORTED_MODULE_4__["default"].keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach((name) => {
            const attr = blot.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_1__["default"].ATTRIBUTE);
            if (attr instanceof _attributor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                this.attributes[attr.attrName] = attr;
            }
        });
    }
    copy(target) {
        Object.keys(this.attributes).forEach((key) => {
            const value = this.attributes[key].value(this.domNode);
            target.format(key, value);
        });
    }
    move(target) {
        this.copy(target);
        Object.keys(this.attributes).forEach((key) => {
            this.attributes[key].remove(this.domNode);
        });
        this.attributes = {};
    }
    values() {
        return Object.keys(this.attributes).reduce((attributes, name) => {
            attributes[name] = this.attributes[name].value(this.domNode);
            return attributes;
        }, {});
    }
}
/* harmony default export */ __webpack_exports__["default"] = (AttributorStore);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/store.ts?`)},"./node_modules/parchment/src/attributor/style.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ "./node_modules/parchment/src/attributor/attributor.ts");

function camelize(name) {
    const parts = name.split('-');
    const rest = parts
        .slice(1)
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join('');
    return parts[0] + rest;
}
class StyleAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static keys(node) {
        return (node.getAttribute('style') || '').split(';').map((value) => {
            const arr = value.split(':');
            return arr[0].trim();
        });
    }
    add(node, value) {
        if (!this.canAdd(node, value)) {
            return false;
        }
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    }
    remove(node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    }
    value(node) {
        // @ts-ignore
        const value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    }
}
/* harmony default export */ __webpack_exports__["default"] = (StyleAttributor);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/style.ts?`)},"./node_modules/parchment/src/blot/abstract/container.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ "./node_modules/parchment/src/blot/abstract/parent.ts");


class ContainerBlot extends _parent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    checkMerge() {
        return (this.next !== null && this.next.statics.blotName === this.statics.blotName);
    }
    deleteAt(index, length) {
        super.deleteAt(index, length);
        this.enforceAllowedChildren();
    }
    formatAt(index, length, name, value) {
        super.formatAt(index, length, name, value);
        this.enforceAllowedChildren();
    }
    insertAt(index, value, def) {
        super.insertAt(index, value, def);
        this.enforceAllowedChildren();
    }
    optimize(context) {
        super.optimize(context);
        if (this.children.length > 0 && this.next != null && this.checkMerge()) {
            this.next.moveChildren(this);
            this.next.remove();
        }
    }
}
ContainerBlot.blotName = 'container';
ContainerBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK_BLOT;
/* harmony default export */ __webpack_exports__["default"] = (ContainerBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/container.ts?`)},"./node_modules/parchment/src/blot/abstract/leaf.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadow */ "./node_modules/parchment/src/blot/abstract/shadow.ts");


class LeafBlot extends _shadow__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static value(_domNode) {
        return true;
    }
    index(node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) &
                Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    }
    position(index, _inclusive) {
        const childNodes = Array.from(this.parent.domNode.childNodes);
        let offset = childNodes.indexOf(this.domNode);
        if (index > 0) {
            offset += 1;
        }
        return [this.parent.domNode, offset];
    }
    value() {
        return {
            [this.statics.blotName]: this.statics.value(this.domNode) || true,
        };
    }
}
LeafBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__["default"].INLINE_BLOT;
/* harmony default export */ __webpack_exports__["default"] = (LeafBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/leaf.ts?`)},"./node_modules/parchment/src/blot/abstract/parent.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collection/linked-list */ "./node_modules/parchment/src/collection/linked-list.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error */ "./node_modules/parchment/src/error.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ "./node_modules/parchment/src/blot/abstract/shadow.ts");




function makeAttachedBlot(node, scroll) {
    let blot = scroll.find(node);
    if (blot == null) {
        try {
            blot = scroll.create(node);
        }
        catch (e) {
            blot = scroll.create(_scope__WEBPACK_IMPORTED_MODULE_2__["default"].INLINE);
            Array.from(node.childNodes).forEach((child) => {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
class ParentBlot extends _shadow__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(scroll, domNode) {
        super(scroll, domNode);
        this.uiNode = null;
        this.build();
    }
    appendChild(other) {
        this.insertBefore(other);
    }
    attach() {
        super.attach();
        this.children.forEach((child) => {
            child.attach();
        });
    }
    attachUI(node) {
        if (this.uiNode != null) {
            this.uiNode.remove();
        }
        this.uiNode = node;
        if (ParentBlot.uiClass) {
            this.uiNode.classList.add(ParentBlot.uiClass);
        }
        this.uiNode.setAttribute('contenteditable', 'false');
        this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
    }
    build() {
        this.children = new _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__["default"]();
        // Need to be reversed for if DOM nodes already in order
        Array.from(this.domNode.childNodes)
            .filter((node) => node !== this.uiNode)
            .reverse()
            .forEach((node) => {
            try {
                const child = makeAttachedBlot(node, this.scroll);
                this.insertBefore(child, this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof _error__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                    return;
                }
                else {
                    throw err;
                }
            }
        });
    }
    deleteAt(index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, (child, offset, childLength) => {
            child.deleteAt(offset, childLength);
        });
    }
    descendant(criteria, index = 0) {
        const [child, offset] = this.children.find(index);
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ParentBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    }
    descendants(criteria, index = 0, length = Number.MAX_VALUE) {
        let descendants = [];
        let lengthLeft = length;
        this.children.forEachAt(index, length, (child, childIndex, childLength) => {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ParentBlot) {
                descendants = descendants.concat(child.descendants(criteria, childIndex, lengthLeft));
            }
            lengthLeft -= childLength;
        });
        return descendants;
    }
    detach() {
        this.children.forEach((child) => {
            child.detach();
        });
        super.detach();
    }
    enforceAllowedChildren() {
        let done = false;
        this.children.forEach((child) => {
            if (done) {
                return;
            }
            const allowed = this.statics.allowedChildren.some((def) => child instanceof def);
            if (allowed) {
                return;
            }
            if (child.statics.scope === _scope__WEBPACK_IMPORTED_MODULE_2__["default"].BLOCK_BLOT) {
                if (child.next != null) {
                    this.splitAfter(child);
                }
                if (child.prev != null) {
                    this.splitAfter(child.prev);
                }
                child.parent.unwrap();
                done = true;
            }
            else if (child instanceof ParentBlot) {
                child.unwrap();
            }
            else {
                child.remove();
            }
        });
    }
    formatAt(index, length, name, value) {
        this.children.forEachAt(index, length, (child, offset, childLength) => {
            child.formatAt(offset, childLength, name, value);
        });
    }
    insertAt(index, value, def) {
        const [child, offset] = this.children.find(index);
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            const blot = def == null
                ? this.scroll.create('text', value)
                : this.scroll.create(value, def);
            this.appendChild(blot);
        }
    }
    insertBefore(childBlot, refBlot) {
        if (childBlot.parent != null) {
            childBlot.parent.children.remove(childBlot);
        }
        let refDomNode = null;
        this.children.insertBefore(childBlot, refBlot || null);
        childBlot.parent = this;
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode !== childBlot.domNode ||
            this.domNode.nextSibling !== refDomNode) {
            this.domNode.insertBefore(childBlot.domNode, refDomNode);
        }
        childBlot.attach();
    }
    length() {
        return this.children.reduce((memo, child) => {
            return memo + child.length();
        }, 0);
    }
    moveChildren(targetParent, refNode) {
        this.children.forEach((child) => {
            targetParent.insertBefore(child, refNode);
        });
    }
    optimize(context) {
        super.optimize(context);
        this.enforceAllowedChildren();
        if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {
            this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
        }
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                const child = this.scroll.create(this.statics.defaultChild.blotName);
                this.appendChild(child);
                // TODO double check if necessary
                // child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    }
    path(index, inclusive = false) {
        const [child, offset] = this.children.find(index, inclusive);
        const position = [[this, index]];
        if (child instanceof ParentBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    }
    removeChild(child) {
        this.children.remove(child);
    }
    replaceWith(name, value) {
        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;
        if (replacement instanceof ParentBlot) {
            this.moveChildren(replacement);
        }
        return super.replaceWith(replacement);
    }
    split(index, force = false) {
        if (!force) {
            if (index === 0) {
                return this;
            }
            if (index === this.length()) {
                return this.next;
            }
        }
        const after = this.clone();
        if (this.parent) {
            this.parent.insertBefore(after, this.next || undefined);
        }
        this.children.forEachAt(index, this.length(), (child, offset, _length) => {
            const split = child.split(offset, force);
            if (split != null) {
                after.appendChild(split);
            }
        });
        return after;
    }
    splitAfter(child) {
        const after = this.clone();
        while (child.next != null) {
            after.appendChild(child.next);
        }
        if (this.parent) {
            this.parent.insertBefore(after, this.next || undefined);
        }
        return after;
    }
    unwrap() {
        if (this.parent) {
            this.moveChildren(this.parent, this.next || undefined);
        }
        this.remove();
    }
    update(mutations, _context) {
        const addedNodes = [];
        const removedNodes = [];
        mutations.forEach((mutation) => {
            if (mutation.target === this.domNode && mutation.type === 'childList') {
                addedNodes.push(...mutation.addedNodes);
                removedNodes.push(...mutation.removedNodes);
            }
        });
        removedNodes.forEach((node) => {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) &
                    Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            const blot = this.scroll.find(node);
            if (blot == null) {
                return;
            }
            if (blot.domNode.parentNode == null ||
                blot.domNode.parentNode === this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter((node) => {
            return node.parentNode === this.domNode || node === this.uiNode;
        })
            .sort((a, b) => {
            if (a === b) {
                return 0;
            }
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach((node) => {
            let refBlot = null;
            if (node.nextSibling != null) {
                refBlot = this.scroll.find(node.nextSibling);
            }
            const blot = makeAttachedBlot(node, this.scroll);
            if (blot.next !== refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(this);
                }
                this.insertBefore(blot, refBlot || undefined);
            }
        });
        this.enforceAllowedChildren();
    }
}
ParentBlot.uiClass = '';
/* harmony default export */ __webpack_exports__["default"] = (ParentBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/parent.ts?`)},"./node_modules/parchment/src/blot/abstract/shadow.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error */ "./node_modules/parchment/src/error.ts");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registry */ "./node_modules/parchment/src/registry.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ "./node_modules/parchment/src/scope.ts");



class ShadowBlot {
    constructor(scroll, domNode) {
        this.scroll = scroll;
        this.domNode = domNode;
        _registry__WEBPACK_IMPORTED_MODULE_1__["default"].blots.set(domNode, this);
        this.prev = null;
        this.next = null;
    }
    static create(value) {
        if (this.tagName == null) {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__["default"]('Blot definition missing tagName');
        }
        let node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value, 10).toString() === value) {
                    value = parseInt(value, 10);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    }
    // Hack for accessing inherited static methods
    get statics() {
        return this.constructor;
    }
    attach() {
        // Nothing to do
    }
    clone() {
        const domNode = this.domNode.cloneNode(false);
        return this.scroll.create(domNode);
    }
    detach() {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
        _registry__WEBPACK_IMPORTED_MODULE_1__["default"].blots.delete(this.domNode);
    }
    deleteAt(index, length) {
        const blot = this.isolate(index, length);
        blot.remove();
    }
    formatAt(index, length, name, value) {
        const blot = this.isolate(index, length);
        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__["default"].BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__["default"].ATTRIBUTE) != null) {
            const parent = this.scroll.create(this.statics.scope);
            blot.wrap(parent);
            parent.format(name, value);
        }
    }
    insertAt(index, value, def) {
        const blot = def == null
            ? this.scroll.create('text', value)
            : this.scroll.create(value, def);
        const ref = this.split(index);
        this.parent.insertBefore(blot, ref || undefined);
    }
    isolate(index, length) {
        const target = this.split(index);
        if (target == null) {
            throw new Error('Attempt to isolate at end');
        }
        target.split(length);
        return target;
    }
    length() {
        return 1;
    }
    offset(root = this.parent) {
        if (this.parent == null || this === root) {
            return 0;
        }
        return this.parent.children.offset(this) + this.parent.offset(root);
    }
    optimize(_context) {
        if (this.statics.requiredContainer &&
            !(this.parent instanceof this.statics.requiredContainer)) {
            this.wrap(this.statics.requiredContainer.blotName);
        }
    }
    remove() {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    }
    replaceWith(name, value) {
        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(replacement, this.next || undefined);
            this.remove();
        }
        return replacement;
    }
    split(index, _force) {
        return index === 0 ? this : this.next;
    }
    update(_mutations, _context) {
        // Nothing to do by default
    }
    wrap(name, value) {
        const wrapper = typeof name === 'string'
            ? this.scroll.create(name, value)
            : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next || undefined);
        }
        if (typeof wrapper.appendChild !== 'function') {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__["default"](\`Cannot wrap \${name}\`);
        }
        wrapper.appendChild(this);
        return wrapper;
    }
}
ShadowBlot.blotName = 'abstract';
/* harmony default export */ __webpack_exports__["default"] = (ShadowBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/shadow.ts?`)},"./node_modules/parchment/src/blot/block.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ "./node_modules/parchment/src/attributor/attributor.ts");
/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ "./node_modules/parchment/src/attributor/store.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ "./node_modules/parchment/src/blot/abstract/leaf.ts");
/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ "./node_modules/parchment/src/blot/abstract/parent.ts");
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline */ "./node_modules/parchment/src/blot/inline.ts");






class BlockBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(scroll, domNode) {
        super(scroll, domNode);
        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__["default"](this.domNode);
    }
    static formats(domNode, scroll) {
        const match = scroll.query(BlockBlot.blotName);
        if (match != null &&
            domNode.tagName === match.tagName) {
            return undefined;
        }
        else if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
    }
    format(name, value) {
        const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__["default"].BLOCK);
        if (format == null) {
            return;
        }
        else if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.attributes.attribute(format, value);
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else if (value &&
            (name !== this.statics.blotName || this.formats()[name] !== value)) {
            this.replaceWith(name, value);
        }
    }
    formats() {
        const formats = this.attributes.values();
        const format = this.statics.formats(this.domNode, this.scroll);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    }
    formatAt(index, length, name, value) {
        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__["default"].BLOCK) != null) {
            this.format(name, value);
        }
        else {
            super.formatAt(index, length, name, value);
        }
    }
    insertAt(index, value, def) {
        if (def == null || this.scroll.query(value, _scope__WEBPACK_IMPORTED_MODULE_2__["default"].INLINE) != null) {
            // Insert text or inline
            super.insertAt(index, value, def);
        }
        else {
            const after = this.split(index);
            if (after != null) {
                const blot = this.scroll.create(value, def);
                after.parent.insertBefore(blot, after);
            }
            else {
                throw new Error('Attempt to insertAt after block boundaries');
            }
        }
    }
    replaceWith(name, value) {
        const replacement = super.replaceWith(name, value);
        this.attributes.copy(replacement);
        return replacement;
    }
    update(mutations, context) {
        super.update(mutations, context);
        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');
        if (attributeChanged) {
            this.attributes.build();
        }
    }
}
BlockBlot.blotName = 'block';
BlockBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__["default"].BLOCK_BLOT;
BlockBlot.tagName = 'P';
BlockBlot.allowedChildren = [
    _inline__WEBPACK_IMPORTED_MODULE_5__["default"],
    BlockBlot,
    _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__["default"],
];
/* harmony default export */ __webpack_exports__["default"] = (BlockBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/block.ts?`)},"./node_modules/parchment/src/blot/embed.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/leaf */ "./node_modules/parchment/src/blot/abstract/leaf.ts");

class EmbedBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static formats(_domNode, _scroll) {
        return undefined;
    }
    format(name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        super.formatAt(0, this.length(), name, value);
    }
    formatAt(index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            super.formatAt(index, length, name, value);
        }
    }
    formats() {
        return this.statics.formats(this.domNode, this.scroll);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (EmbedBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/embed.ts?`)},"./node_modules/parchment/src/blot/inline.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ "./node_modules/parchment/src/attributor/attributor.ts");
/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ "./node_modules/parchment/src/attributor/store.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ "./node_modules/parchment/src/blot/abstract/leaf.ts");
/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ "./node_modules/parchment/src/blot/abstract/parent.ts");





// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    // @ts-ignore
    for (const prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
class InlineBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(scroll, domNode) {
        super(scroll, domNode);
        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__["default"](this.domNode);
    }
    static formats(domNode, scroll) {
        const match = scroll.query(InlineBlot.blotName);
        if (match != null &&
            domNode.tagName === match.tagName) {
            return undefined;
        }
        else if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    }
    format(name, value) {
        if (name === this.statics.blotName && !value) {
            this.children.forEach((child) => {
                if (!(child instanceof InlineBlot)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__["default"].INLINE);
            if (format == null) {
                return;
            }
            if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                this.attributes.attribute(format, value);
            }
            else if (value &&
                (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    }
    formats() {
        const formats = this.attributes.values();
        const format = this.statics.formats(this.domNode, this.scroll);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    }
    formatAt(index, length, name, value) {
        if (this.formats()[name] != null ||
            this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__["default"].ATTRIBUTE)) {
            const blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            super.formatAt(index, length, name, value);
        }
    }
    optimize(context) {
        super.optimize(context);
        const formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        const next = this.next;
        if (next instanceof InlineBlot &&
            next.prev === this &&
            isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    }
    replaceWith(name, value) {
        const replacement = super.replaceWith(name, value);
        this.attributes.copy(replacement);
        return replacement;
    }
    update(mutations, context) {
        super.update(mutations, context);
        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');
        if (attributeChanged) {
            this.attributes.build();
        }
    }
    wrap(name, value) {
        const wrapper = super.wrap(name, value);
        if (wrapper instanceof InlineBlot) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    }
}
InlineBlot.allowedChildren = [InlineBlot, _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__["default"]];
InlineBlot.blotName = 'inline';
InlineBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__["default"].INLINE_BLOT;
InlineBlot.tagName = 'SPAN';
/* harmony default export */ __webpack_exports__["default"] = (InlineBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/inline.ts?`)},"./node_modules/parchment/src/blot/scroll.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ "./node_modules/parchment/src/registry.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _abstract_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/container */ "./node_modules/parchment/src/blot/abstract/container.ts");
/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/parent */ "./node_modules/parchment/src/blot/abstract/parent.ts");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ "./node_modules/parchment/src/blot/block.ts");





const OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
const MAX_OPTIMIZE_ITERATIONS = 100;
class ScrollBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(registry, node) {
        // @ts-ignore
        super(null, node);
        this.registry = registry;
        this.scroll = this;
        this.build();
        this.observer = new MutationObserver((mutations) => {
            this.update(mutations);
        });
        this.observer.observe(this.domNode, OBSERVER_CONFIG);
        this.attach();
    }
    create(input, value) {
        return this.registry.create(this, input, value);
    }
    find(node, bubble = false) {
        return this.registry.find(node, bubble);
    }
    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__["default"].ANY) {
        return this.registry.query(query, scope);
    }
    register(...definitions) {
        return this.registry.register(...definitions);
    }
    build() {
        if (this.scroll == null) {
            return;
        }
        super.build();
    }
    detach() {
        super.detach();
        this.observer.disconnect();
    }
    deleteAt(index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach((child) => {
                child.remove();
            });
        }
        else {
            super.deleteAt(index, length);
        }
    }
    formatAt(index, length, name, value) {
        this.update();
        super.formatAt(index, length, name, value);
    }
    insertAt(index, value, def) {
        this.update();
        super.insertAt(index, value, def);
    }
    optimize(mutations = [], context = {}) {
        super.optimize(context);
        const mutationsMap = context.mutationsMap || new WeakMap();
        // We must modify mutations directly, cannot make copy and then modify
        let records = Array.from(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0) {
            mutations.push(records.pop());
        }
        const mark = (blot, markParent = true) => {
            if (blot == null || blot === this) {
                return;
            }
            if (blot.domNode.parentNode == null) {
                return;
            }
            if (!mutationsMap.has(blot.domNode)) {
                mutationsMap.set(blot.domNode, []);
            }
            if (markParent) {
                mark(blot.parent);
            }
        };
        const optimize = (blot) => {
            // Post-order traversal
            if (!mutationsMap.has(blot.domNode)) {
                return;
            }
            if (blot instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                blot.children.forEach(optimize);
            }
            mutationsMap.delete(blot.domNode);
            blot.optimize(context);
        };
        let remaining = mutations;
        for (let i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach((mutation) => {
                const blot = this.find(mutation.target, true);
                if (blot == null) {
                    return;
                }
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(this.find(mutation.previousSibling, false));
                        Array.from(mutation.addedNodes).forEach((node) => {
                            const child = this.find(node, false);
                            mark(child, false);
                            if (child instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                                child.children.forEach((grandChild) => {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = Array.from(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0) {
                mutations.push(records.pop());
            }
        }
    }
    update(mutations, context = {}) {
        mutations = mutations || this.observer.takeRecords();
        const mutationsMap = new WeakMap();
        mutations
            .map((mutation) => {
            const blot = _registry__WEBPACK_IMPORTED_MODULE_0__["default"].find(mutation.target, true);
            if (blot == null) {
                return null;
            }
            if (mutationsMap.has(blot.domNode)) {
                mutationsMap.get(blot.domNode).push(mutation);
                return null;
            }
            else {
                mutationsMap.set(blot.domNode, [mutation]);
                return blot;
            }
        })
            .forEach((blot) => {
            if (blot != null && blot !== this && mutationsMap.has(blot.domNode)) {
                blot.update(mutationsMap.get(blot.domNode) || [], context);
            }
        });
        context.mutationsMap = mutationsMap;
        if (mutationsMap.has(this.domNode)) {
            super.update(mutationsMap.get(this.domNode), context);
        }
        this.optimize(mutations, context);
    }
}
ScrollBlot.blotName = 'scroll';
ScrollBlot.defaultChild = _block__WEBPACK_IMPORTED_MODULE_4__["default"];
ScrollBlot.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_4__["default"], _abstract_container__WEBPACK_IMPORTED_MODULE_2__["default"]];
ScrollBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_1__["default"].BLOCK_BLOT;
ScrollBlot.tagName = 'DIV';
/* harmony default export */ __webpack_exports__["default"] = (ScrollBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/scroll.ts?`)},"./node_modules/parchment/src/blot/text.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ "./node_modules/parchment/src/scope.ts");
/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/leaf */ "./node_modules/parchment/src/blot/abstract/leaf.ts");


class TextBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(scroll, node) {
        super(scroll, node);
        this.text = this.statics.value(this.domNode);
    }
    static create(value) {
        return document.createTextNode(value);
    }
    static value(domNode) {
        return domNode.data;
    }
    deleteAt(index, length) {
        this.domNode.data = this.text =
            this.text.slice(0, index) + this.text.slice(index + length);
    }
    index(node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    }
    insertAt(index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            super.insertAt(index, value, def);
        }
    }
    length() {
        return this.text.length;
    }
    optimize(context) {
        super.optimize(context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    }
    position(index, _inclusive = false) {
        return [this.domNode, index];
    }
    split(index, force = false) {
        if (!force) {
            if (index === 0) {
                return this;
            }
            if (index === this.length()) {
                return this.next;
            }
        }
        const after = this.scroll.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next || undefined);
        this.text = this.statics.value(this.domNode);
        return after;
    }
    update(mutations, _context) {
        if (mutations.some((mutation) => {
            return (mutation.type === 'characterData' && mutation.target === this.domNode);
        })) {
            this.text = this.statics.value(this.domNode);
        }
    }
    value() {
        return this.text;
    }
}
TextBlot.blotName = 'text';
TextBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__["default"].INLINE_BLOT;
/* harmony default export */ __webpack_exports__["default"] = (TextBlot);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/text.ts?`)},"./node_modules/parchment/src/collection/linked-list.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(...nodes) {
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            const rest = nodes.slice(1);
            this.append(...rest);
        }
    }
    at(index) {
        const next = this.iterator();
        let cur = next();
        while (cur && index > 0) {
            index -= 1;
            cur = next();
        }
        return cur;
    }
    contains(node) {
        const next = this.iterator();
        let cur = next();
        while (cur) {
            if (cur === node) {
                return true;
            }
            cur = next();
        }
        return false;
    }
    indexOf(node) {
        const next = this.iterator();
        let cur = next();
        let index = 0;
        while (cur) {
            if (cur === node) {
                return index;
            }
            index += 1;
            cur = next();
        }
        return -1;
    }
    insertBefore(node, refNode) {
        if (node == null) {
            return;
        }
        this.remove(node);
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    }
    offset(target) {
        let index = 0;
        let cur = this.head;
        while (cur != null) {
            if (cur === target) {
                return index;
            }
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    }
    remove(node) {
        if (!this.contains(node)) {
            return;
        }
        if (node.prev != null) {
            node.prev.next = node.next;
        }
        if (node.next != null) {
            node.next.prev = node.prev;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        this.length -= 1;
    }
    iterator(curNode = this.head) {
        // TODO use yield when we can
        return () => {
            const ret = curNode;
            if (curNode != null) {
                curNode = curNode.next;
            }
            return ret;
        };
    }
    find(index, inclusive = false) {
        const next = this.iterator();
        let cur = next();
        while (cur) {
            const length = cur.length();
            if (index < length ||
                (inclusive &&
                    index === length &&
                    (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length;
            cur = next();
        }
        return [null, 0];
    }
    forEach(callback) {
        const next = this.iterator();
        let cur = next();
        while (cur) {
            callback(cur);
            cur = next();
        }
    }
    forEachAt(index, length, callback) {
        if (length <= 0) {
            return;
        }
        const [startNode, offset] = this.find(index);
        let curIndex = index - offset;
        const next = this.iterator(startNode);
        let cur = next();
        while (cur && curIndex < index + length) {
            const curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
            cur = next();
        }
    }
    map(callback) {
        return this.reduce((memo, cur) => {
            memo.push(callback(cur));
            return memo;
        }, []);
    }
    reduce(callback, memo) {
        const next = this.iterator();
        let cur = next();
        while (cur) {
            memo = callback(memo, cur);
            cur = next();
        }
        return memo;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (LinkedList);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/collection/linked-list.ts?`)},"./node_modules/parchment/src/error.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParchmentError; });
class ParchmentError extends Error {
    constructor(message) {
        message = '[Parchment] ' + message;
        super(message);
        this.message = message;
        this.name = this.constructor.name;
    }
}


//# sourceURL=webpack://Quill/./node_modules/parchment/src/error.ts?`)},"./node_modules/parchment/src/parchment.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blot/abstract/container */ "./node_modules/parchment/src/blot/abstract/container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerBlot", function() { return _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blot/abstract/leaf */ "./node_modules/parchment/src/blot/abstract/leaf.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafBlot", function() { return _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blot/abstract/parent */ "./node_modules/parchment/src/blot/abstract/parent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParentBlot", function() { return _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _blot_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blot/block */ "./node_modules/parchment/src/blot/block.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockBlot", function() { return _blot_block__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _blot_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blot/embed */ "./node_modules/parchment/src/blot/embed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbedBlot", function() { return _blot_embed__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _blot_inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blot/inline */ "./node_modules/parchment/src/blot/inline.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineBlot", function() { return _blot_inline__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _blot_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blot/scroll */ "./node_modules/parchment/src/blot/scroll.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollBlot", function() { return _blot_scroll__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _blot_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blot/text */ "./node_modules/parchment/src/blot/text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextBlot", function() { return _blot_text__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributor/attributor */ "./node_modules/parchment/src/attributor/attributor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attributor", function() { return _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _attributor_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributor/class */ "./node_modules/parchment/src/attributor/class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassAttributor", function() { return _attributor_class__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attributor/store */ "./node_modules/parchment/src/attributor/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributorStore", function() { return _attributor_store__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _attributor_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributor/style */ "./node_modules/parchment/src/attributor/style.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleAttributor", function() { return _attributor_style__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registry */ "./node_modules/parchment/src/registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return _registry__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scope */ "./node_modules/parchment/src/scope.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_13__["default"]; });


















//# sourceURL=webpack://Quill/./node_modules/parchment/src/parchment.ts?`)},"./node_modules/parchment/src/registry.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Registry; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/parchment/src/error.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ "./node_modules/parchment/src/scope.ts");


class Registry {
    constructor() {
        this.attributes = {};
        this.classes = {};
        this.tags = {};
        this.types = {};
    }
    static find(node, bubble = false) {
        if (node == null) {
            return null;
        }
        if (this.blots.has(node)) {
            return this.blots.get(node) || null;
        }
        if (bubble) {
            return this.find(node.parentNode, bubble);
        }
        return null;
    }
    create(scroll, input, value) {
        const match = this.query(input);
        if (match == null) {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__["default"](\`Unable to create \${input} blot\`);
        }
        const blotClass = match;
        const node = 
        // @ts-ignore
        input instanceof Node || input.nodeType === Node.TEXT_NODE
            ? input
            : blotClass.create(value);
        const blot = new blotClass(scroll, node, value);
        Registry.blots.set(blot.domNode, blot);
        return blot;
    }
    find(node, bubble = false) {
        return Registry.find(node, bubble);
    }
    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__["default"].ANY) {
        let match;
        if (typeof query === 'string') {
            match = this.types[query] || this.attributes[query];
            // @ts-ignore
        }
        else if (query instanceof Text || query.nodeType === Node.TEXT_NODE) {
            match = this.types.text;
        }
        else if (typeof query === 'number') {
            if (query & _scope__WEBPACK_IMPORTED_MODULE_1__["default"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__["default"].BLOCK) {
                match = this.types.block;
            }
            else if (query & _scope__WEBPACK_IMPORTED_MODULE_1__["default"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__["default"].INLINE) {
                match = this.types.inline;
            }
        }
        else if (query instanceof HTMLElement) {
            const names = (query.getAttribute('class') || '').split(/\\s+/);
            names.some((name) => {
                match = this.classes[name];
                if (match) {
                    return true;
                }
                return false;
            });
            match = match || this.tags[query.tagName];
        }
        if (match == null) {
            return null;
        }
        // @ts-ignore
        if (scope & _scope__WEBPACK_IMPORTED_MODULE_1__["default"].LEVEL & match.scope && scope & _scope__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE & match.scope) {
            return match;
        }
        return null;
    }
    register(...definitions) {
        if (definitions.length > 1) {
            return definitions.map((d) => {
                return this.register(d);
            });
        }
        const definition = definitions[0];
        if (typeof definition.blotName !== 'string' &&
            typeof definition.attrName !== 'string') {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid definition');
        }
        else if (definition.blotName === 'abstract') {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__["default"]('Cannot register abstract class');
        }
        this.types[definition.blotName || definition.attrName] = definition;
        if (typeof definition.keyName === 'string') {
            this.attributes[definition.keyName] = definition;
        }
        else {
            if (definition.className != null) {
                this.classes[definition.className] = definition;
            }
            if (definition.tagName != null) {
                if (Array.isArray(definition.tagName)) {
                    definition.tagName = definition.tagName.map((tagName) => {
                        return tagName.toUpperCase();
                    });
                }
                else {
                    definition.tagName = definition.tagName.toUpperCase();
                }
                const tagNames = Array.isArray(definition.tagName)
                    ? definition.tagName
                    : [definition.tagName];
                tagNames.forEach((tag) => {
                    if (this.tags[tag] == null || definition.className == null) {
                        this.tags[tag] = definition;
                    }
                });
            }
        }
        return definition;
    }
}
Registry.blots = new WeakMap();


//# sourceURL=webpack://Quill/./node_modules/parchment/src/registry.ts?`)},"./node_modules/parchment/src/scope.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope || (Scope = {}));
/* harmony default export */ __webpack_exports__["default"] = (Scope);


//# sourceURL=webpack://Quill/./node_modules/parchment/src/scope.ts?`)},"./node_modules/process/browser.js":function(module,exports){eval(`// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


//# sourceURL=webpack://Quill/./node_modules/process/browser.js?`)},"./node_modules/quill-delta/dist/AttributeMap.js":function(module,exports,__webpack_require__){eval(`
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ "./node_modules/quill-delta/node_modules/deep-equal/index.js"));
var extend_1 = __importDefault(__webpack_require__(/*! extend */ "./node_modules/extend/index.js"));
var AttributeMap;
(function (AttributeMap) {
    function compose(a, b, keepNull) {
        if (a === void 0) { a = {}; }
        if (b === void 0) { b = {}; }
        if (typeof a !== 'object') {
            a = {};
        }
        if (typeof b !== 'object') {
            b = {};
        }
        var attributes = extend_1.default(true, {}, b);
        if (!keepNull) {
            attributes = Object.keys(attributes).reduce(function (copy, key) {
                if (attributes[key] != null) {
                    copy[key] = attributes[key];
                }
                return copy;
            }, {});
        }
        for (var key in a) {
            if (a[key] !== undefined && b[key] === undefined) {
                attributes[key] = a[key];
            }
        }
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.compose = compose;
    function diff(a, b) {
        if (a === void 0) { a = {}; }
        if (b === void 0) { b = {}; }
        if (typeof a !== 'object') {
            a = {};
        }
        if (typeof b !== 'object') {
            b = {};
        }
        var attributes = Object.keys(a)
            .concat(Object.keys(b))
            .reduce(function (attrs, key) {
            if (!deep_equal_1.default(a[key], b[key])) {
                attrs[key] = b[key] === undefined ? null : b[key];
            }
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.diff = diff;
    function invert(attr, base) {
        if (attr === void 0) { attr = {}; }
        if (base === void 0) { base = {}; }
        attr = attr || {};
        var baseInverted = Object.keys(base).reduce(function (memo, key) {
            if (base[key] !== attr[key] && attr[key] !== undefined) {
                memo[key] = base[key];
            }
            return memo;
        }, {});
        return Object.keys(attr).reduce(function (memo, key) {
            if (attr[key] !== base[key] && base[key] === undefined) {
                memo[key] = null;
            }
            return memo;
        }, baseInverted);
    }
    AttributeMap.invert = invert;
    function transform(a, b, priority) {
        if (priority === void 0) { priority = false; }
        if (typeof a !== 'object') {
            return b;
        }
        if (typeof b !== 'object') {
            return undefined;
        }
        if (!priority) {
            return b; // b simply overwrites us without priority
        }
        var attributes = Object.keys(b).reduce(function (attrs, key) {
            if (a[key] === undefined) {
                attrs[key] = b[key]; // null is a valid value
            }
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.transform = transform;
})(AttributeMap || (AttributeMap = {}));
exports.default = AttributeMap;
//# sourceMappingURL=AttributeMap.js.map

//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/AttributeMap.js?`)},"./node_modules/quill-delta/dist/Delta.js":function(module,exports,__webpack_require__){eval(`
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ "./node_modules/quill-delta/node_modules/deep-equal/index.js"));
var extend_1 = __importDefault(__webpack_require__(/*! extend */ "./node_modules/extend/index.js"));
var fast_diff_1 = __importDefault(__webpack_require__(/*! fast-diff */ "./node_modules/fast-diff/diff.js"));
var AttributeMap_1 = __importDefault(__webpack_require__(/*! ./AttributeMap */ "./node_modules/quill-delta/dist/AttributeMap.js"));
var Op_1 = __importDefault(__webpack_require__(/*! ./Op */ "./node_modules/quill-delta/dist/Op.js"));
var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()
var Delta = /** @class */ (function () {
    function Delta(ops) {
        // Assume we are given a well formed ops
        if (Array.isArray(ops)) {
            this.ops = ops;
        }
        else if (ops != null && Array.isArray(ops.ops)) {
            this.ops = ops.ops;
        }
        else {
            this.ops = [];
        }
    }
    Delta.prototype.insert = function (arg, attributes) {
        var newOp = {};
        if (typeof arg === 'string' && arg.length === 0) {
            return this;
        }
        newOp.insert = arg;
        if (attributes != null &&
            typeof attributes === 'object' &&
            Object.keys(attributes).length > 0) {
            newOp.attributes = attributes;
        }
        return this.push(newOp);
    };
    Delta.prototype.delete = function (length) {
        if (length <= 0) {
            return this;
        }
        return this.push({ delete: length });
    };
    Delta.prototype.retain = function (length, attributes) {
        if (length <= 0) {
            return this;
        }
        var newOp = { retain: length };
        if (attributes != null &&
            typeof attributes === 'object' &&
            Object.keys(attributes).length > 0) {
            newOp.attributes = attributes;
        }
        return this.push(newOp);
    };
    Delta.prototype.push = function (newOp) {
        var index = this.ops.length;
        var lastOp = this.ops[index - 1];
        newOp = extend_1.default(true, {}, newOp);
        if (typeof lastOp === 'object') {
            if (typeof newOp.delete === 'number' &&
                typeof lastOp.delete === 'number') {
                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };
                return this;
            }
            // Since it does not matter if we insert before or after deleting at the same index,
            // always prefer to insert first
            if (typeof lastOp.delete === 'number' && newOp.insert != null) {
                index -= 1;
                lastOp = this.ops[index - 1];
                if (typeof lastOp !== 'object') {
                    this.ops.unshift(newOp);
                    return this;
                }
            }
            if (deep_equal_1.default(newOp.attributes, lastOp.attributes)) {
                if (typeof newOp.insert === 'string' &&
                    typeof lastOp.insert === 'string') {
                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
                    if (typeof newOp.attributes === 'object') {
                        this.ops[index - 1].attributes = newOp.attributes;
                    }
                    return this;
                }
                else if (typeof newOp.retain === 'number' &&
                    typeof lastOp.retain === 'number') {
                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
                    if (typeof newOp.attributes === 'object') {
                        this.ops[index - 1].attributes = newOp.attributes;
                    }
                    return this;
                }
            }
        }
        if (index === this.ops.length) {
            this.ops.push(newOp);
        }
        else {
            this.ops.splice(index, 0, newOp);
        }
        return this;
    };
    Delta.prototype.chop = function () {
        var lastOp = this.ops[this.ops.length - 1];
        if (lastOp && lastOp.retain && !lastOp.attributes) {
            this.ops.pop();
        }
        return this;
    };
    Delta.prototype.filter = function (predicate) {
        return this.ops.filter(predicate);
    };
    Delta.prototype.forEach = function (predicate) {
        this.ops.forEach(predicate);
    };
    Delta.prototype.map = function (predicate) {
        return this.ops.map(predicate);
    };
    Delta.prototype.partition = function (predicate) {
        var passed = [];
        var failed = [];
        this.forEach(function (op) {
            var target = predicate(op) ? passed : failed;
            target.push(op);
        });
        return [passed, failed];
    };
    Delta.prototype.reduce = function (predicate, initialValue) {
        return this.ops.reduce(predicate, initialValue);
    };
    Delta.prototype.changeLength = function () {
        return this.reduce(function (length, elem) {
            if (elem.insert) {
                return length + Op_1.default.length(elem);
            }
            else if (elem.delete) {
                return length - elem.delete;
            }
            return length;
        }, 0);
    };
    Delta.prototype.length = function () {
        return this.reduce(function (length, elem) {
            return length + Op_1.default.length(elem);
        }, 0);
    };
    Delta.prototype.slice = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = Infinity; }
        var ops = [];
        var iter = Op_1.default.iterator(this.ops);
        var index = 0;
        while (index < end && iter.hasNext()) {
            var nextOp = void 0;
            if (index < start) {
                nextOp = iter.next(start - index);
            }
            else {
                nextOp = iter.next(end - index);
                ops.push(nextOp);
            }
            index += Op_1.default.length(nextOp);
        }
        return new Delta(ops);
    };
    Delta.prototype.compose = function (other) {
        var thisIter = Op_1.default.iterator(this.ops);
        var otherIter = Op_1.default.iterator(other.ops);
        var ops = [];
        var firstOther = otherIter.peek();
        if (firstOther != null &&
            typeof firstOther.retain === 'number' &&
            firstOther.attributes == null) {
            var firstLeft = firstOther.retain;
            while (thisIter.peekType() === 'insert' &&
                thisIter.peekLength() <= firstLeft) {
                firstLeft -= thisIter.peekLength();
                ops.push(thisIter.next());
            }
            if (firstOther.retain - firstLeft > 0) {
                otherIter.next(firstOther.retain - firstLeft);
            }
        }
        var delta = new Delta(ops);
        while (thisIter.hasNext() || otherIter.hasNext()) {
            if (otherIter.peekType() === 'insert') {
                delta.push(otherIter.next());
            }
            else if (thisIter.peekType() === 'delete') {
                delta.push(thisIter.next());
            }
            else {
                var length_1 = Math.min(thisIter.peekLength(), otherIter.peekLength());
                var thisOp = thisIter.next(length_1);
                var otherOp = otherIter.next(length_1);
                if (typeof otherOp.retain === 'number') {
                    var newOp = {};
                    if (typeof thisOp.retain === 'number') {
                        newOp.retain = length_1;
                    }
                    else {
                        newOp.insert = thisOp.insert;
                    }
                    // Preserve null when composing with a retain, otherwise remove it for inserts
                    var attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
                    if (attributes) {
                        newOp.attributes = attributes;
                    }
                    delta.push(newOp);
                    // Optimization if rest of other is just retain
                    if (!otherIter.hasNext() &&
                        deep_equal_1.default(delta.ops[delta.ops.length - 1], newOp)) {
                        var rest = new Delta(thisIter.rest());
                        return delta.concat(rest).chop();
                    }
                    // Other op should be delete, we could be an insert or retain
                    // Insert + delete cancels out
                }
                else if (typeof otherOp.delete === 'number' &&
                    typeof thisOp.retain === 'number') {
                    delta.push(otherOp);
                }
            }
        }
        return delta.chop();
    };
    Delta.prototype.concat = function (other) {
        var delta = new Delta(this.ops.slice());
        if (other.ops.length > 0) {
            delta.push(other.ops[0]);
            delta.ops = delta.ops.concat(other.ops.slice(1));
        }
        return delta;
    };
    Delta.prototype.diff = function (other, cursor) {
        if (this.ops === other.ops) {
            return new Delta();
        }
        var strings = [this, other].map(function (delta) {
            return delta
                .map(function (op) {
                if (op.insert != null) {
                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
                }
                var prep = delta === other ? 'on' : 'with';
                throw new Error('diff() called ' + prep + ' non-document');
            })
                .join('');
        });
        var retDelta = new Delta();
        var diffResult = fast_diff_1.default(strings[0], strings[1], cursor);
        var thisIter = Op_1.default.iterator(this.ops);
        var otherIter = Op_1.default.iterator(other.ops);
        diffResult.forEach(function (component) {
            var length = component[1].length;
            while (length > 0) {
                var opLength = 0;
                switch (component[0]) {
                    case fast_diff_1.default.INSERT:
                        opLength = Math.min(otherIter.peekLength(), length);
                        retDelta.push(otherIter.next(opLength));
                        break;
                    case fast_diff_1.default.DELETE:
                        opLength = Math.min(length, thisIter.peekLength());
                        thisIter.next(opLength);
                        retDelta.delete(opLength);
                        break;
                    case fast_diff_1.default.EQUAL:
                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                        var thisOp = thisIter.next(opLength);
                        var otherOp = otherIter.next(opLength);
                        if (deep_equal_1.default(thisOp.insert, otherOp.insert)) {
                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));
                        }
                        else {
                            retDelta.push(otherOp).delete(opLength);
                        }
                        break;
                }
                length -= opLength;
            }
        });
        return retDelta.chop();
    };
    Delta.prototype.eachLine = function (predicate, newline) {
        if (newline === void 0) { newline = '\\n'; }
        var iter = Op_1.default.iterator(this.ops);
        var line = new Delta();
        var i = 0;
        while (iter.hasNext()) {
            if (iter.peekType() !== 'insert') {
                return;
            }
            var thisOp = iter.peek();
            var start = Op_1.default.length(thisOp) - iter.peekLength();
            var index = typeof thisOp.insert === 'string'
                ? thisOp.insert.indexOf(newline, start) - start
                : -1;
            if (index < 0) {
                line.push(iter.next());
            }
            else if (index > 0) {
                line.push(iter.next(index));
            }
            else {
                if (predicate(line, iter.next(1).attributes || {}, i) === false) {
                    return;
                }
                i += 1;
                line = new Delta();
            }
        }
        if (line.length() > 0) {
            predicate(line, {}, i);
        }
    };
    Delta.prototype.invert = function (base) {
        var inverted = new Delta();
        this.reduce(function (baseIndex, op) {
            if (op.insert) {
                inverted.delete(Op_1.default.length(op));
            }
            else if (op.retain && op.attributes == null) {
                inverted.retain(op.retain);
                return baseIndex + op.retain;
            }
            else if (op.delete || (op.retain && op.attributes)) {
                var length_2 = (op.delete || op.retain);
                var slice = base.slice(baseIndex, baseIndex + length_2);
                slice.forEach(function (baseOp) {
                    if (op.delete) {
                        inverted.push(baseOp);
                    }
                    else if (op.retain && op.attributes) {
                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
                    }
                });
                return baseIndex + length_2;
            }
            return baseIndex;
        }, 0);
        return inverted.chop();
    };
    Delta.prototype.transform = function (arg, priority) {
        if (priority === void 0) { priority = false; }
        priority = !!priority;
        if (typeof arg === 'number') {
            return this.transformPosition(arg, priority);
        }
        var other = arg;
        var thisIter = Op_1.default.iterator(this.ops);
        var otherIter = Op_1.default.iterator(other.ops);
        var delta = new Delta();
        while (thisIter.hasNext() || otherIter.hasNext()) {
            if (thisIter.peekType() === 'insert' &&
                (priority || otherIter.peekType() !== 'insert')) {
                delta.retain(Op_1.default.length(thisIter.next()));
            }
            else if (otherIter.peekType() === 'insert') {
                delta.push(otherIter.next());
            }
            else {
                var length_3 = Math.min(thisIter.peekLength(), otherIter.peekLength());
                var thisOp = thisIter.next(length_3);
                var otherOp = otherIter.next(length_3);
                if (thisOp.delete) {
                    // Our delete either makes their delete redundant or removes their retain
                    continue;
                }
                else if (otherOp.delete) {
                    delta.push(otherOp);
                }
                else {
                    // We retain either their retain or insert
                    delta.retain(length_3, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));
                }
            }
        }
        return delta.chop();
    };
    Delta.prototype.transformPosition = function (index, priority) {
        if (priority === void 0) { priority = false; }
        priority = !!priority;
        var thisIter = Op_1.default.iterator(this.ops);
        var offset = 0;
        while (thisIter.hasNext() && offset <= index) {
            var length_4 = thisIter.peekLength();
            var nextType = thisIter.peekType();
            thisIter.next();
            if (nextType === 'delete') {
                index -= Math.min(length_4, index - offset);
                continue;
            }
            else if (nextType === 'insert' && (offset < index || !priority)) {
                index += length_4;
            }
            offset += length_4;
        }
        return index;
    };
    Delta.Op = Op_1.default;
    Delta.AttributeMap = AttributeMap_1.default;
    return Delta;
}());
module.exports = Delta;
//# sourceMappingURL=Delta.js.map

//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Delta.js?`)},"./node_modules/quill-delta/dist/Iterator.js":function(module,exports,__webpack_require__){eval(`
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Op_1 = __importDefault(__webpack_require__(/*! ./Op */ "./node_modules/quill-delta/dist/Op.js"));
var Iterator = /** @class */ (function () {
    function Iterator(ops) {
        this.ops = ops;
        this.index = 0;
        this.offset = 0;
    }
    Iterator.prototype.hasNext = function () {
        return this.peekLength() < Infinity;
    };
    Iterator.prototype.next = function (length) {
        if (!length) {
            length = Infinity;
        }
        var nextOp = this.ops[this.index];
        if (nextOp) {
            var offset = this.offset;
            var opLength = Op_1.default.length(nextOp);
            if (length >= opLength - offset) {
                length = opLength - offset;
                this.index += 1;
                this.offset = 0;
            }
            else {
                this.offset += length;
            }
            if (typeof nextOp.delete === 'number') {
                return { delete: length };
            }
            else {
                var retOp = {};
                if (nextOp.attributes) {
                    retOp.attributes = nextOp.attributes;
                }
                if (typeof nextOp.retain === 'number') {
                    retOp.retain = length;
                }
                else if (typeof nextOp.insert === 'string') {
                    retOp.insert = nextOp.insert.substr(offset, length);
                }
                else {
                    // offset should === 0, length should === 1
                    retOp.insert = nextOp.insert;
                }
                return retOp;
            }
        }
        else {
            return { retain: Infinity };
        }
    };
    Iterator.prototype.peek = function () {
        return this.ops[this.index];
    };
    Iterator.prototype.peekLength = function () {
        if (this.ops[this.index]) {
            // Should never return 0 if our index is being managed correctly
            return Op_1.default.length(this.ops[this.index]) - this.offset;
        }
        else {
            return Infinity;
        }
    };
    Iterator.prototype.peekType = function () {
        if (this.ops[this.index]) {
            if (typeof this.ops[this.index].delete === 'number') {
                return 'delete';
            }
            else if (typeof this.ops[this.index].retain === 'number') {
                return 'retain';
            }
            else {
                return 'insert';
            }
        }
        return 'retain';
    };
    Iterator.prototype.rest = function () {
        if (!this.hasNext()) {
            return [];
        }
        else if (this.offset === 0) {
            return this.ops.slice(this.index);
        }
        else {
            var offset = this.offset;
            var index = this.index;
            var next = this.next();
            var rest = this.ops.slice(this.index);
            this.offset = offset;
            this.index = index;
            return [next].concat(rest);
        }
    };
    return Iterator;
}());
exports.default = Iterator;
//# sourceMappingURL=Iterator.js.map

//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Iterator.js?`)},"./node_modules/quill-delta/dist/Op.js":function(module,exports,__webpack_require__){eval(`
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Iterator_1 = __importDefault(__webpack_require__(/*! ./Iterator */ "./node_modules/quill-delta/dist/Iterator.js"));
var Op;
(function (Op) {
    function iterator(ops) {
        return new Iterator_1.default(ops);
    }
    Op.iterator = iterator;
    function length(op) {
        if (typeof op.delete === 'number') {
            return op.delete;
        }
        else if (typeof op.retain === 'number') {
            return op.retain;
        }
        else {
            return typeof op.insert === 'string' ? op.insert.length : 1;
        }
    }
    Op.length = length;
})(Op || (Op = {}));
exports.default = Op;
//# sourceMappingURL=Op.js.map

//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Op.js?`)},"./node_modules/quill-delta/node_modules/deep-equal/index.js":function(module,exports,__webpack_require__){eval(`var objectKeys = __webpack_require__(/*! object-keys */ "./node_modules/quill-delta/node_modules/object-keys/index.js");
var isArguments = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");
var is = __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");
var flags = __webpack_require__(/*! regexp.prototype.flags */ "./node_modules/regexp.prototype.flags/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./node_modules/is-date-object/index.js");

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/deep-equal/index.js?`)},"./node_modules/quill-delta/node_modules/object-keys/implementation.js":function(module,exports,__webpack_require__){eval(`

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/quill-delta/node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/implementation.js?`)},"./node_modules/quill-delta/node_modules/object-keys/index.js":function(module,exports,__webpack_require__){eval(`

var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/quill-delta/node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/quill-delta/node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/index.js?`)},"./node_modules/quill-delta/node_modules/object-keys/isArguments.js":function(module,exports,__webpack_require__){eval(`

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/isArguments.js?`)},"./node_modules/regexp.prototype.flags/implementation.js":function(module,exports,__webpack_require__){eval(`

var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/implementation.js?`)},"./node_modules/regexp.prototype.flags/index.js":function(module,exports,__webpack_require__){eval(`

var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/regexp.prototype.flags/shim.js");

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/index.js?`)},"./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js":function(module,exports,__webpack_require__){eval(`

/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;
var reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js?`)},"./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js":function(module,exports,__webpack_require__){eval(`

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js?`)},"./node_modules/regexp.prototype.flags/polyfill.js":function(module,exports,__webpack_require__){eval(`

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");

var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/polyfill.js?`)},"./node_modules/regexp.prototype.flags/shim.js":function(module,exports,__webpack_require__){eval(`

var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/shim.js?`)},"./node_modules/side-channel/index.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ "./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);
var $push = callBound('Array.prototype.push');

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);
var objectGet = function (objects, key) { // eslint-disable-line consistent-return
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			return objects[i].value;
		}
	}
};
var objectSet = function (objects, key, value) {
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			objects[i].value = value; // eslint-disable-line no-param-reassign
			return;
		}
	}
	$push(objects, {
		key: key,
		value: value
	});
};
var objectHas = function (objects, key) {
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			return true;
		}
	}
	return false;
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return objectGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return objectHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					$o = [];
				}
				objectSet($o, key, value);
			}
		}
	};
	return channel;
};


//# sourceURL=webpack://Quill/./node_modules/side-channel/index.js?`)},"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js":function(module,exports,__webpack_require__){eval(`

/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;
var reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js?`)},"./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js":function(module,exports,__webpack_require__){eval(`

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js?`)},"./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js?`)},"./node_modules/webpack/buildin/global.js":function(module,exports){eval(`var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


//# sourceURL=webpack://Quill/(webpack)/buildin/global.js?`)},"./node_modules/which-boxed-primitive/index.js":function(module,exports,__webpack_require__){eval(`

var isString = __webpack_require__(/*! is-string */ "./node_modules/is-string/index.js");
var isNumber = __webpack_require__(/*! is-number-object */ "./node_modules/is-number-object/index.js");
var isBoolean = __webpack_require__(/*! is-boolean-object */ "./node_modules/is-boolean-object/index.js");
var isSymbol = __webpack_require__(/*! is-symbol */ "./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js");
var isBigInt = __webpack_require__(/*! is-bigint */ "./node_modules/is-bigint/index.js");

// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
	// eslint-disable-next-line eqeqeq
	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
		return null;
	}
	if (isString(value)) {
		return 'String';
	}
	if (isNumber(value)) {
		return 'Number';
	}
	if (isBoolean(value)) {
		return 'Boolean';
	}
	if (isSymbol(value)) {
		return 'Symbol';
	}
	if (isBigInt(value)) {
		return 'BigInt';
	}
};


//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/index.js?`)},"./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js":function(module,exports,__webpack_require__){eval(`

var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\\(.*\\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js?`)},"./node_modules/which-collection/index.js":function(module,exports,__webpack_require__){eval(`

var isMap = __webpack_require__(/*! is-map */ "./node_modules/is-map/index.js");
var isSet = __webpack_require__(/*! is-set */ "./node_modules/is-set/index.js");
var isWeakMap = __webpack_require__(/*! is-weakmap */ "./node_modules/is-weakmap/index.js");
var isWeakSet = __webpack_require__(/*! is-weakset */ "./node_modules/is-weakset/index.js");

module.exports = function whichCollection(value) {
	if (value && typeof value === 'object') {
		if (isMap(value)) {
			return 'Map';
		}
		if (isSet(value)) {
			return 'Set';
		}
		if (isWeakMap(value)) {
			return 'WeakMap';
		}
		if (isWeakSet(value)) {
			return 'WeakSet';
		}
	}
	return false;
};


//# sourceURL=webpack://Quill/./node_modules/which-collection/index.js?`)},"./node_modules/which-typed-array/index.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(/*! foreach */ "./node_modules/foreach/index.js");
var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "./node_modules/available-typed-arrays/index.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js");

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(/*! is-typed-array */ "./node_modules/is-typed-array/index.js");

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

//# sourceURL=webpack://Quill/./node_modules/which-typed-array/index.js?`)},"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js":function(module,exports,__webpack_require__){eval(`

/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;
var reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js?`)},"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js":function(module,exports,__webpack_require__){eval(`

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js?`)},"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js?`)},"./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":function(module,exports,__webpack_require__){eval(`

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?`)},"./quill.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./core.js");
/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats/align */ "./formats/align.js");
/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats/direction */ "./formats/direction.js");
/* harmony import */ var _formats_indent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formats/indent */ "./formats/indent.js");
/* harmony import */ var _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formats/blockquote */ "./formats/blockquote.js");
/* harmony import */ var _formats_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formats/header */ "./formats/header.js");
/* harmony import */ var _formats_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/list */ "./formats/list.js");
/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/background */ "./formats/background.js");
/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formats/color */ "./formats/color.js");
/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formats/font */ "./formats/font.js");
/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formats/size */ "./formats/size.js");
/* harmony import */ var _formats_bold__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formats/bold */ "./formats/bold.js");
/* harmony import */ var _formats_italic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formats/italic */ "./formats/italic.js");
/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formats/link */ "./formats/link.js");
/* harmony import */ var _formats_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formats/script */ "./formats/script.js");
/* harmony import */ var _formats_strike__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formats/strike */ "./formats/strike.js");
/* harmony import */ var _formats_underline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formats/underline */ "./formats/underline.js");
/* harmony import */ var _formats_formula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formats/formula */ "./formats/formula.js");
/* harmony import */ var _formats_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formats/image */ "./formats/image.js");
/* harmony import */ var _formats_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formats/video */ "./formats/video.js");
/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formats/code */ "./formats/code.js");
/* harmony import */ var _modules_syntax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/syntax */ "./modules/syntax.js");
/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/table */ "./modules/table.js");
/* harmony import */ var _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/toolbar */ "./modules/toolbar.js");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/icons */ "./ui/icons.js");
/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/picker */ "./ui/picker.js");
/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/color-picker */ "./ui/color-picker.js");
/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/icon-picker */ "./ui/icon-picker.js");
/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/tooltip */ "./ui/tooltip.js");
/* harmony import */ var _themes_bubble__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./themes/bubble */ "./themes/bubble.js");
/* harmony import */ var _themes_snow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./themes/snow */ "./themes/snow.js");































_core__WEBPACK_IMPORTED_MODULE_0__["default"].register({
  'attributors/attribute/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionAttribute"],
  'attributors/class/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__["AlignClass"],
  'attributors/class/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__["BackgroundClass"],
  'attributors/class/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__["ColorClass"],
  'attributors/class/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"],
  'attributors/class/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__["FontClass"],
  'attributors/class/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__["SizeClass"],
  'attributors/style/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__["AlignStyle"],
  'attributors/style/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__["BackgroundStyle"],
  'attributors/style/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__["ColorStyle"],
  'attributors/style/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionStyle"],
  'attributors/style/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__["FontStyle"],
  'attributors/style/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__["SizeStyle"]
}, true);
_core__WEBPACK_IMPORTED_MODULE_0__["default"].register({
  'formats/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__["AlignClass"],
  'formats/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"],
  'formats/indent': _formats_indent__WEBPACK_IMPORTED_MODULE_3__["default"],
  'formats/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__["BackgroundStyle"],
  'formats/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__["ColorStyle"],
  'formats/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__["FontClass"],
  'formats/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__["SizeClass"],
  'formats/blockquote': _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__["default"],
  'formats/code-block': _formats_code__WEBPACK_IMPORTED_MODULE_20__["default"],
  'formats/header': _formats_header__WEBPACK_IMPORTED_MODULE_5__["default"],
  'formats/list': _formats_list__WEBPACK_IMPORTED_MODULE_6__["default"],
  'formats/bold': _formats_bold__WEBPACK_IMPORTED_MODULE_11__["default"],
  'formats/code': _formats_code__WEBPACK_IMPORTED_MODULE_20__["Code"],
  'formats/italic': _formats_italic__WEBPACK_IMPORTED_MODULE_12__["default"],
  'formats/link': _formats_link__WEBPACK_IMPORTED_MODULE_13__["default"],
  'formats/script': _formats_script__WEBPACK_IMPORTED_MODULE_14__["default"],
  'formats/strike': _formats_strike__WEBPACK_IMPORTED_MODULE_15__["default"],
  'formats/underline': _formats_underline__WEBPACK_IMPORTED_MODULE_16__["default"],
  'formats/formula': _formats_formula__WEBPACK_IMPORTED_MODULE_17__["default"],
  'formats/image': _formats_image__WEBPACK_IMPORTED_MODULE_18__["default"],
  'formats/video': _formats_video__WEBPACK_IMPORTED_MODULE_19__["default"],
  'modules/syntax': _modules_syntax__WEBPACK_IMPORTED_MODULE_21__["default"],
  'modules/table': _modules_table__WEBPACK_IMPORTED_MODULE_22__["default"],
  'modules/toolbar': _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__["default"],
  'themes/bubble': _themes_bubble__WEBPACK_IMPORTED_MODULE_29__["default"],
  'themes/snow': _themes_snow__WEBPACK_IMPORTED_MODULE_30__["default"],
  'ui/icons': _ui_icons__WEBPACK_IMPORTED_MODULE_24__["default"],
  'ui/picker': _ui_picker__WEBPACK_IMPORTED_MODULE_25__["default"],
  'ui/icon-picker': _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__["default"],
  'ui/color-picker': _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__["default"],
  'ui/tooltip': _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__["default"]
}, true);
/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

//# sourceURL=webpack://Quill/./quill.js?`)},"./themes/base.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTooltip", function() { return BaseTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseTheme; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _core_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/theme */ "./core/theme.js");
/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/color-picker */ "./ui/color-picker.js");
/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon-picker */ "./ui/icon-picker.js");
/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/picker */ "./ui/picker.js");
/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/tooltip */ "./ui/tooltip.js");







const ALIGNS = [false, 'center', 'right', 'justify'];
const COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];
const FONTS = [false, 'serif', 'monospace'];
const HEADERS = ['1', '2', '3', false];
const SIZES = ['small', false, 'large', 'huge'];

class BaseTheme extends _core_theme__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    super(quill, options);

    const listener = e => {
      if (!document.body.contains(quill.root)) {
        document.body.removeEventListener('click', listener);
        return;
      }

      if (this.tooltip != null && !this.tooltip.root.contains(e.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {
        this.tooltip.hide();
      }

      if (this.pickers != null) {
        this.pickers.forEach(picker => {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };

    quill.emitter.listenDOM('click', document.body, listener);
  }

  addModule(name) {
    const module = super.addModule(name);

    if (name === 'toolbar') {
      this.extendToolbar(module);
    }

    return module;
  }

  buildButtons(buttons, icons) {
    Array.from(buttons).forEach(button => {
      const className = button.getAttribute('class') || '';
      className.split(/\\s+/).forEach(name => {
        if (!name.startsWith('ql-')) return;
        name = name.slice('ql-'.length);
        if (icons[name] == null) return;

        if (name === 'direction') {
          button.innerHTML = icons[name][''] + icons[name].rtl;
        } else if (typeof icons[name] === 'string') {
          button.innerHTML = icons[name];
        } else {
          const value = button.value || '';

          if (value != null && icons[name][value]) {
            button.innerHTML = icons[name][value];
          }
        }
      });
    });
  }

  buildPickers(selects, icons) {
    this.pickers = Array.from(selects).map(select => {
      if (select.classList.contains('ql-align')) {
        if (select.querySelector('option') == null) {
          fillSelect(select, ALIGNS);
        }

        return new _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__["default"](select, icons.align);
      }

      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
        const format = select.classList.contains('ql-background') ? 'background' : 'color';

        if (select.querySelector('option') == null) {
          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
        }

        return new _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__["default"](select, icons[format]);
      }

      if (select.querySelector('option') == null) {
        if (select.classList.contains('ql-font')) {
          fillSelect(select, FONTS);
        } else if (select.classList.contains('ql-header')) {
          fillSelect(select, HEADERS);
        } else if (select.classList.contains('ql-size')) {
          fillSelect(select, SIZES);
        }
      }

      return new _ui_picker__WEBPACK_IMPORTED_MODULE_5__["default"](select);
    });

    const update = () => {
      this.pickers.forEach(picker => {
        picker.update();
      });
    };

    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.EDITOR_CHANGE, update);
  }

}

BaseTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _core_theme__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit('formula');
        },

        image() {
          let fileInput = this.container.querySelector('input.ql-image[type=file]');

          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', () => {
              const range = this.quill.getSelection(true);
              this.quill.uploader.upload(range, fileInput.files);
              fileInput.value = '';
            });
            this.container.appendChild(fileInput);
          }

          fileInput.click();
        },

        video() {
          this.quill.theme.tooltip.edit('video');
        }

      }
    }
  }
});

class BaseTooltip extends _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(quill, boundsContainer) {
    super(quill, boundsContainer);
    this.textbox = this.root.querySelector('input[type="text"]');
    this.listen();
  }

  listen() {
    this.textbox.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        this.save();
        event.preventDefault();
      } else if (event.key === 'Escape') {
        this.cancel();
        event.preventDefault();
      }
    });
  }

  cancel() {
    this.hide();
  }

  edit(mode = 'link', preview = null) {
    this.root.classList.remove('ql-hidden');
    this.root.classList.add('ql-editing');

    if (preview != null) {
      this.textbox.value = preview;
    } else if (mode !== this.root.getAttribute('data-mode')) {
      this.textbox.value = '';
    }

    this.position(this.quill.getBounds(this.quill.selection.savedRange));
    this.textbox.select();
    this.textbox.setAttribute('placeholder', this.textbox.getAttribute("data-".concat(mode)) || '');
    this.root.setAttribute('data-mode', mode);
  }

  restoreFocus() {
    const {
      scrollTop
    } = this.quill.scrollingContainer;
    this.quill.focus();
    this.quill.scrollingContainer.scrollTop = scrollTop;
  }

  save() {
    let {
      value
    } = this.textbox;

    switch (this.root.getAttribute('data-mode')) {
      case 'link':
        {
          const {
            scrollTop
          } = this.quill.root;

          if (this.linkRange) {
            this.quill.formatText(this.linkRange, 'link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
            delete this.linkRange;
          } else {
            this.restoreFocus();
            this.quill.format('link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
          }

          this.quill.root.scrollTop = scrollTop;
          break;
        }

      case 'video':
        {
          value = extractVideoUrl(value);
        }
      // eslint-disable-next-line no-fallthrough

      case 'formula':
        {
          if (!value) break;
          const range = this.quill.getSelection(true);

          if (range != null) {
            const index = range.index + range.length;
            this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);

            if (this.root.getAttribute('data-mode') === 'formula') {
              this.quill.insertText(index + 1, ' ', _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
            }

            this.quill.setSelection(index + 2, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
          }

          break;
        }

      default:
    }

    this.textbox.value = '';
    this.hide();
  }

}

function extractVideoUrl(url) {
  let match = url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtube\\.com\\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtu\\.be\\/([a-zA-Z0-9_-]+)/);

  if (match) {
    return "".concat(match[1] || 'https', "://www.youtube.com/embed/").concat(match[2], "?showinfo=0");
  } // eslint-disable-next-line no-cond-assign


  if (match = url.match(/^(?:(https?):\\/\\/)?(?:www\\.)?vimeo\\.com\\/(\\d+)/)) {
    return "".concat(match[1] || 'https', "://player.vimeo.com/video/").concat(match[2], "/");
  }

  return url;
}

function fillSelect(select, values, defaultValue = false) {
  values.forEach(value => {
    const option = document.createElement('option');

    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }

    select.appendChild(option);
  });
}



//# sourceURL=webpack://Quill/./themes/base.js?`)},"./themes/bubble.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleTooltip", function() { return BubbleTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BubbleTheme; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./themes/base.js");
/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/selection */ "./core/selection.js");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icons */ "./ui/icons.js");





const TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{
  header: 1
}, {
  header: 2
}, 'blockquote']];

class BubbleTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseTooltip"] {
  constructor(quill, bounds) {
    super(quill, bounds);
    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.EDITOR_CHANGE, (type, range, oldRange, source) => {
      if (type !== _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SELECTION_CHANGE) return;

      if (range != null && range.length > 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER) {
        this.show(); // Lock our width so we will expand beyond our offsetParent boundaries

        this.root.style.left = '0px';
        this.root.style.width = '';
        this.root.style.width = "".concat(this.root.offsetWidth, "px");
        const lines = this.quill.getLines(range.index, range.length);

        if (lines.length === 1) {
          this.position(this.quill.getBounds(range));
        } else {
          const lastLine = lines[lines.length - 1];
          const index = this.quill.getIndex(lastLine);
          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);
          const indexBounds = this.quill.getBounds(new _core_selection__WEBPACK_IMPORTED_MODULE_3__["Range"](index, length));
          this.position(indexBounds);
        }
      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {
        this.hide();
      }
    });
  }

  listen() {
    super.listen();
    this.root.querySelector('.ql-close').addEventListener('click', () => {
      this.root.classList.remove('ql-editing');
    });
    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_OPTIMIZE, () => {
      // Let selection be restored by toolbar handlers before repositioning
      setTimeout(() => {
        if (this.root.classList.contains('ql-hidden')) return;
        const range = this.quill.getSelection();

        if (range != null) {
          this.position(this.quill.getBounds(range));
        }
      }, 1);
    });
  }

  cancel() {
    this.show();
  }

  position(reference) {
    const shift = super.position(reference);
    const arrow = this.root.querySelector('.ql-tooltip-arrow');
    arrow.style.marginLeft = '';

    if (shift !== 0) {
      arrow.style.marginLeft = "".concat(-1 * shift - arrow.offsetWidth / 2, "px");
    }

    return shift;
  }

}

BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

class BubbleTheme extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    super(quill, options);
    this.quill.container.classList.add('ql-bubble');
  }

  extendToolbar(toolbar) {
    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
    this.tooltip.root.appendChild(toolbar.container);
    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }

}

BubbleTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        }

      }
    }
  }
});


//# sourceURL=webpack://Quill/./themes/bubble.js?`)},"./themes/snow.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./themes/base.js");
/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/link */ "./formats/link.js");
/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/selection */ "./core/selection.js");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icons */ "./ui/icons.js");






const TOOLBAR_CONFIG = [[{
  header: ['1', '2', '3', false]
}], ['bold', 'italic', 'underline', 'link'], [{
  list: 'ordered'
}, {
  list: 'bullet'
}], ['clean']];

class SnowTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseTooltip"] {
  constructor(quill, bounds) {
    super(quill, bounds);
    this.preview = this.root.querySelector('a.ql-preview');
  }

  listen() {
    super.listen();
    this.root.querySelector('a.ql-action').addEventListener('click', event => {
      if (this.root.classList.contains('ql-editing')) {
        this.save();
      } else {
        this.edit('link', this.preview.textContent);
      }

      event.preventDefault();
    });
    this.root.querySelector('a.ql-remove').addEventListener('click', event => {
      if (this.linkRange != null) {
        const range = this.linkRange;
        this.restoreFocus();
        this.quill.formatText(range, 'link', false, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
        delete this.linkRange;
      }

      event.preventDefault();
      this.hide();
    });
    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SELECTION_CHANGE, (range, oldRange, source) => {
      if (range == null) return;

      if (range.length === 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER) {
        const [link, offset] = this.quill.scroll.descendant(_formats_link__WEBPACK_IMPORTED_MODULE_3__["default"], range.index);

        if (link != null) {
          this.linkRange = new _core_selection__WEBPACK_IMPORTED_MODULE_4__["Range"](range.index - offset, link.length());
          const preview = _formats_link__WEBPACK_IMPORTED_MODULE_3__["default"].formats(link.domNode);
          this.preview.textContent = preview;
          this.preview.setAttribute('href', preview);
          this.show();
          this.position(this.quill.getBounds(this.linkRange));
          return;
        }
      } else {
        delete this.linkRange;
      }

      this.hide();
    });
  }

  show() {
    super.show();
    this.root.removeAttribute('data-mode');
  }

}

SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

class SnowTheme extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    super(quill, options);
    this.quill.container.classList.add('ql-snow');
  }

  extendToolbar(toolbar) {
    toolbar.container.classList.add('ql-snow');
    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);

    if (toolbar.container.querySelector('.ql-link')) {
      this.quill.keyboard.addBinding({
        key: 'k',
        shortKey: true
      }, (range, context) => {
        toolbar.handlers.link.call(toolbar, !context.format.link);
      });
    }
  }

}

SnowTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(value) {
          if (value) {
            const range = this.quill.getSelection();
            if (range == null || range.length === 0) return;
            let preview = this.quill.getText(range);

            if (/^\\S+@\\S+\\.\\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
              preview = "mailto:".concat(preview);
            }

            const {
              tooltip
            } = this.quill.theme;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        }

      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (SnowTheme);

//# sourceURL=webpack://Quill/./themes/snow.js?`)},"./ui/color-picker.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ "./ui/picker.js");


class ColorPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(select, label) {
    super(select);
    this.label.innerHTML = label;
    this.container.classList.add('ql-color-picker');
    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {
      item.classList.add('ql-primary');
    });
  }

  buildItem(option) {
    const item = super.buildItem(option);
    item.style.backgroundColor = option.getAttribute('value') || '';
    return item;
  }

  selectItem(item, trigger) {
    super.selectItem(item, trigger);
    const colorLabel = this.label.querySelector('.ql-color-label');
    const value = item ? item.getAttribute('data-value') || '' : '';

    if (colorLabel) {
      if (colorLabel.tagName === 'line') {
        colorLabel.style.stroke = value;
      } else {
        colorLabel.style.fill = value;
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

//# sourceURL=webpack://Quill/./ui/color-picker.js?`)},"./ui/icon-picker.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ "./ui/picker.js");


class IconPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(select, icons) {
    super(select);
    this.container.classList.add('ql-icon-picker');
    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    this.defaultItem = this.container.querySelector('.ql-selected');
    this.selectItem(this.defaultItem);
  }

  selectItem(target, trigger) {
    super.selectItem(target, trigger);
    const item = target || this.defaultItem;
    if (this.label.innerHTML === item.innerHTML) return;
    this.label.innerHTML = item.innerHTML;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IconPicker);

//# sourceURL=webpack://Quill/./ui/icon-picker.js?`)},"./ui/icons.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/align-left.svg */ "./assets/icons/align-left.svg");
/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/align-center.svg */ "./assets/icons/align-center.svg");
/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/align-right.svg */ "./assets/icons/align-right.svg");
/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/align-justify.svg */ "./assets/icons/align-justify.svg");
/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/background.svg */ "./assets/icons/background.svg");
/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/blockquote.svg */ "./assets/icons/blockquote.svg");
/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/bold.svg */ "./assets/icons/bold.svg");
/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/clean.svg */ "./assets/icons/clean.svg");
/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/code.svg */ "./assets/icons/code.svg");
/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/color.svg */ "./assets/icons/color.svg");
/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/direction-ltr.svg */ "./assets/icons/direction-ltr.svg");
/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/direction-rtl.svg */ "./assets/icons/direction-rtl.svg");
/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/formula.svg */ "./assets/icons/formula.svg");
/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/header.svg */ "./assets/icons/header.svg");
/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/icons/header-2.svg */ "./assets/icons/header-2.svg");
/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icons/italic.svg */ "./assets/icons/italic.svg");
/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/image.svg */ "./assets/icons/image.svg");
/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/indent.svg */ "./assets/icons/indent.svg");
/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/outdent.svg */ "./assets/icons/outdent.svg");
/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/link.svg */ "./assets/icons/link.svg");
/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/list-bullet.svg */ "./assets/icons/list-bullet.svg");
/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/list-check.svg */ "./assets/icons/list-check.svg");
/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/icons/list-ordered.svg */ "./assets/icons/list-ordered.svg");
/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/icons/subscript.svg */ "./assets/icons/subscript.svg");
/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/icons/superscript.svg */ "./assets/icons/superscript.svg");
/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/icons/strike.svg */ "./assets/icons/strike.svg");
/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/table.svg */ "./assets/icons/table.svg");
/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/underline.svg */ "./assets/icons/underline.svg");
/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/video.svg */ "./assets/icons/video.svg");
/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__);





























/* harmony default export */ __webpack_exports__["default"] = ({
  align: {
    '': _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    center: _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    right: _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    justify: _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  background: _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  blockquote: _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  bold: _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  clean: _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  code: _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  'code-block': _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  color: _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  direction: {
    '': _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    rtl: _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  formula: _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
  header: {
    '1': _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    '2': _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default.a
  },
  italic: _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
  image: _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
  indent: {
    '+1': _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
    '-1': _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default.a
  },
  link: _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
  list: {
    bullet: _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
    check: _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
    ordered: _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default.a
  },
  script: {
    sub: _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default.a,
    super: _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default.a
  },
  strike: _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default.a,
  table: _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default.a,
  underline: _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
  video: _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default.a
});

//# sourceURL=webpack://Quill/./ui/icons.js?`)},"./ui/picker.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/dropdown.svg */ "./assets/icons/dropdown.svg");
/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);

let optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
}

class Picker {
  constructor(select) {
    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);
    this.label.addEventListener('mousedown', () => {
      this.togglePicker();
    });
    this.label.addEventListener('keydown', event => {
      switch (event.key) {
        case 'Enter':
          this.togglePicker();
          break;

        case 'Escape':
          this.escape();
          event.preventDefault();
          break;

        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  togglePicker() {
    this.container.classList.toggle('ql-expanded'); // Toggle aria-expanded and aria-hidden to make the picker accessible

    toggleAriaAttribute(this.label, 'aria-expanded');
    toggleAriaAttribute(this.options, 'aria-hidden');
  }

  buildItem(option) {
    const item = document.createElement('span');
    item.tabIndex = '0';
    item.setAttribute('role', 'button');
    item.classList.add('ql-picker-item');

    if (option.hasAttribute('value')) {
      item.setAttribute('data-value', option.getAttribute('value'));
    }

    if (option.textContent) {
      item.setAttribute('data-label', option.textContent);
    }

    item.addEventListener('click', () => {
      this.selectItem(item, true);
    });
    item.addEventListener('keydown', event => {
      switch (event.key) {
        case 'Enter':
          this.selectItem(item, true);
          event.preventDefault();
          break;

        case 'Escape':
          this.escape();
          event.preventDefault();
          break;

        default:
      }
    });
    return item;
  }

  buildLabel() {
    const label = document.createElement('span');
    label.classList.add('ql-picker-label');
    label.innerHTML = _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default.a;
    label.tabIndex = '0';
    label.setAttribute('role', 'button');
    label.setAttribute('aria-expanded', 'false');
    this.container.appendChild(label);
    return label;
  }

  buildOptions() {
    const options = document.createElement('span');
    options.classList.add('ql-picker-options'); // Don't want screen readers to read this until options are visible

    options.setAttribute('aria-hidden', 'true');
    options.tabIndex = '-1'; // Need a unique id for aria-controls

    options.id = "ql-picker-options-".concat(optionsCounter);
    optionsCounter += 1;
    this.label.setAttribute('aria-controls', options.id);
    this.options = options;
    Array.from(this.select.options).forEach(option => {
      const item = this.buildItem(option);
      options.appendChild(item);

      if (option.selected === true) {
        this.selectItem(item);
      }
    });
    this.container.appendChild(options);
  }

  buildPicker() {
    Array.from(this.select.attributes).forEach(item => {
      this.container.setAttribute(item.name, item.value);
    });
    this.container.classList.add('ql-picker');
    this.label = this.buildLabel();
    this.buildOptions();
  }

  escape() {
    // Close menu and return focus to trigger label
    this.close(); // Need setTimeout for accessibility to ensure that the browser executes
    // focus on the next process thread and after any DOM content changes

    setTimeout(() => this.label.focus(), 1);
  }

  close() {
    this.container.classList.remove('ql-expanded');
    this.label.setAttribute('aria-expanded', 'false');
    this.options.setAttribute('aria-hidden', 'true');
  }

  selectItem(item, trigger = false) {
    const selected = this.container.querySelector('.ql-selected');
    if (item === selected) return;

    if (selected != null) {
      selected.classList.remove('ql-selected');
    }

    if (item == null) return;
    item.classList.add('ql-selected');
    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);

    if (item.hasAttribute('data-value')) {
      this.label.setAttribute('data-value', item.getAttribute('data-value'));
    } else {
      this.label.removeAttribute('data-value');
    }

    if (item.hasAttribute('data-label')) {
      this.label.setAttribute('data-label', item.getAttribute('data-label'));
    } else {
      this.label.removeAttribute('data-label');
    }

    if (trigger) {
      this.select.dispatchEvent(new Event('change'));
      this.close();
    }
  }

  update() {
    let option;

    if (this.select.selectedIndex > -1) {
      const item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
      option = this.select.options[this.select.selectedIndex];
      this.selectItem(item);
    } else {
      this.selectItem(null);
    }

    const isActive = option != null && option !== this.select.querySelector('option[selected]');
    this.label.classList.toggle('ql-active', isActive);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Picker);

//# sourceURL=webpack://Quill/./ui/picker.js?`)},"./ui/tooltip.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
class Tooltip {
  constructor(quill, boundsContainer) {
    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;

    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', () => {
        this.root.style.marginTop = "".concat(-1 * this.quill.root.scrollTop, "px");
      });
    }

    this.hide();
  }

  hide() {
    this.root.classList.add('ql-hidden');
  }

  position(reference) {
    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2; // root.scrollTop should be 0 if scrollContainer !== root

    const top = reference.bottom + this.quill.root.scrollTop;
    this.root.style.left = "".concat(left, "px");
    this.root.style.top = "".concat(top, "px");
    this.root.classList.remove('ql-flip');
    const containerBounds = this.boundsContainer.getBoundingClientRect();
    const rootBounds = this.root.getBoundingClientRect();
    let shift = 0;

    if (rootBounds.right > containerBounds.right) {
      shift = containerBounds.right - rootBounds.right;
      this.root.style.left = "".concat(left + shift, "px");
    }

    if (rootBounds.left < containerBounds.left) {
      shift = containerBounds.left - rootBounds.left;
      this.root.style.left = "".concat(left + shift, "px");
    }

    if (rootBounds.bottom > containerBounds.bottom) {
      const height = rootBounds.bottom - rootBounds.top;
      const verticalShift = reference.bottom - reference.top + height;
      this.root.style.top = "".concat(top - verticalShift, "px");
      this.root.classList.add('ql-flip');
    }

    return shift;
  }

  show() {
    this.root.classList.remove('ql-editing');
    this.root.classList.remove('ql-hidden');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

//# sourceURL=webpack://Quill/./ui/tooltip.js?`)},0:function(module,exports,__webpack_require__){eval(`module.exports = __webpack_require__(/*! ./quill.js */"./quill.js");


//# sourceURL=webpack://Quill/multi_./quill.js?`)},1:function(module,exports){eval(`/* (ignored) */

//# sourceURL=webpack://Quill/./util.inspect_(ignored)?`)}}).default})})(quill$1);var Quill$1=getDefaultExportFromCjs(quill$1.exports),quillAutoformat={exports:{}};(function(a,n){(function(t,e){a.exports=e(quill$1.exports)})(window,function(t){return function(e){var r={};function o(s){if(r[s])return r[s].exports;var u=r[s]={i:s,l:!1,exports:{}};return e[s].call(u.exports,u,u.exports,o),u.l=!0,u.exports}return o.m=e,o.c=r,o.d=function(s,u,_){o.o(s,u)||Object.defineProperty(s,u,{enumerable:!0,get:_})},o.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,u){if(1&u&&(s=o(s)),8&u||4&u&&typeof s=="object"&&s&&s.__esModule)return s;var _=Object.create(null);if(o.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:s}),2&u&&typeof s!="string")for(var p in s)o.d(_,p,function(f){return s[f]}.bind(null,p));return _},o.n=function(s){var u=s&&s.__esModule?function(){return s.default}:function(){return s};return o.d(u,"a",u),u},o.o=function(s,u){return Object.prototype.hasOwnProperty.call(s,u)},o.p="",o(o.s=1)}([function(e,r){e.exports=t},function(e,r,o){o.r(r);var s=o(0),u=o.n(s);const _=u.a.import("blots/embed"),p=u.a.import("blots/inline"),f=u.a.import("blots/text"),c=u.a.import("blots/cursor");class l extends _{static create(w){let k=super.create(w);return k.setAttribute("href",this.BASE_URL+w),k.setAttribute("spellcheck",!1),k.textContent="#"+w,k}static formats(w){return w.getAttribute("href").substr(this.BASE_URL.length)}format(w,k){this.domNode.setAttribute("href",this.BASE_URL+k)}static value(w){return w.textContent.substr(1)}}l.blotName="hashtag",l.className="ql-hashtag",l.tagName="A",l.BASE_URL="#";class d extends p{static create(w){let k=super.create(w);return k.setAttribute("href",this.BASE_URL+w),k.setAttribute("spellcheck",!1),k}static formats(w){return w.getAttribute("href").substr(this.BASE_URL.length)}format(w,k){this.domNode.setAttribute("href",this.BASE_URL+k)}}d.blotName="hashtag",d.className="ql-hashtag",d.tagName="A",d.allowedChildren=[f,c],d.BASE_URL="#";const g=u.a.import("blots/embed");class h extends g{static create(w){const k=super.create(w);return k.setAttribute("title",w),k.setAttribute("href",this.BASE_URL+w),k.textContent="@"+w,k}static value(w){return w.textContent.substr(1)}}h.blotName="mention",h.className="ql-mention",h.tagName="A",h.BASE_URL="/";var v=h;function b(O,w){return function(k){if(Array.isArray(k))return k}(O)||function(k,C){var R=[],N=!0,j=!1,H=void 0;try{for(var U,q=k[Symbol.iterator]();!(N=(U=q.next()).done)&&(R.push(U.value),!C||R.length!==C);N=!0);}catch(A){j=!0,H=A}finally{try{N||q.return==null||q.return()}finally{if(j)throw H}}return R}(O,w)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const y=u.a.import("core/module"),E=u.a.import("delta"),m=u.a.import("parchment"),x=m.Attributor,S=m.Scope;class T extends y{constructor(w,k){super(w,k),this.transforms=k,this.registerTypeListener(),this.registerPasteListener()}registerPasteListener(){for(const w in this.transforms){const k=this.transforms[w];this.quill.clipboard.addMatcher(Node.TEXT_NODE,(C,R)=>{if(typeof C.data=="string")return R.ops.forEach((N,j,H)=>{if(typeof N.insert=="string"){let U=D(k,N.insert),q=new E([N]).compose(U);H.splice(j,1,...q.ops)}}),R})}}registerTypeListener(){this.quill.keyboard.addBinding({key:38,collapsed:!0,format:["autoformat-helper"]},this.forwardKeyboardUp.bind(this)),this.quill.keyboard.addBinding({key:40,collapsed:!0,format:["autoformat-helper"]},this.forwardKeyboardDown.bind(this)),this.quill.on(u.a.events.TEXT_CHANGE,(w,k,C)=>{let R=w.ops;if(C!=="user"||!R||R.length<1)return;let N=R.length-1,j=R[N];for(;!j.insert&&N>0;)j=R[--N];if(!j.insert||typeof j.insert!="string")return;let H=j.insert===`
`,U=this.quill.getSelection();if(!U)return;let q=this.quill.getLength()-U.index-(H?1:0),A=U.index,M=b(this.quill.getLeaf(A),1)[0];if(!M||!M.text)return;let L=M.offset(M.scroll),W=A-L,K=!1;for(const B in this.transforms){const $=this.transforms[B];if($.helper&&$.helper.trigger&&j.insert.match($.helper.trigger))this.quill.formatText(A,1,"autoformat-helper",B,u.a.sources.API),this.openHelper($,A);else if(j.insert.match($.trigger||/./)){this.closeHelper($);let F=new E().retain(L),G=D($,M.text,W);G&&(F=F.concat(G)),this.quill.updateContents(F,"api"),K=!0}}K&&setTimeout(()=>{this.quill.setSelection(this.quill.getLength()-q,"api")},0)})}forwardKeyboard(w,k){if(this.currentHelper&&this.currentHelper.container){let C=this.currentHelper.container.querySelector(".dropdown-menu");console.log("keyboard",C,k.event),C.dispatchEvent(k.event)}}forwardKeyboardUp(w,k){var C=new KeyboardEvent("keydown",{key:"ArrowUp",keyCode:38,which:38,bubbles:!0,cancelable:!0});k.event=C,this.forwardKeyboard(w,k)}forwardKeyboardDown(w,k){var C=new KeyboardEvent("keydown",{key:"ArrowDown",keyCode:40,which:40,bubbles:!0,cancelable:!0});k.event=C,this.forwardKeyboard(w,k)}openHelper(w,k){if(w.helper&&(this.currentHelper=w.helper,typeof w.helper.open=="function")){console.log("openHelper",k,this.quill.getFormat(k));let C=this.quill.getBounds(k),R=this.quill.addContainer("ql-helper");R.style.position="absolute",R.style.top=C.top+"px",R.style.left=C.left+"px",R.style.width=C.width+"px",R.style.height=C.height+"px",console.log("openHelper",C,R),w.helper.container=R,w.helper.open(R)}}closeHelper(w){w.helper&&typeof w.helper.close=="function"&&w.helper.close(w.helper.container)}}function D(O,w,k){O.find.global||(O.find=new RegExp(O.find,O.find.flags+"g")),O.find.lastIndex=0;let C=new E,R=null;if(k!=null)for(R=O.find.exec(w);R&&R.length&&R.index<k;){if(R.index<k&&R.index+R[0].length+1>=k){C=C.concat(I(O,R).ops);break}R=O.find.exec(w)}else for(;(R=O.find.exec(w))!==null;){let N=I(O,R);C=C.concat(N.ops),w=w.substr(N.rightIndex),O.find.lastIndex=0}return C}function I(O,w){let k=(w=function(H,U){if(H.extract){let q=new RegExp(H.extract).exec(U[0]);return q&&q.length?(q.index+=U.index,q):U}return U}(O,w)).index,C=function(H,U){let q=new RegExp(H.extract||H.find);return H.transform?U.replace(q,H.transform):U}(O,w[0]),R=C;O.insert&&((R={})[O.insert]=C);let N=function(H,U){let q={};return typeof H.format=="string"?q[H.format]=U:typeof H.format=="object"&&(q=H.format),q}(O,C);const j=new E;return j.retain(k).delete(w[0].length).insert(R,N),{ops:j,rightIndex:k+w[0].length}}T.DEFAULTS={hashtag:{trigger:/[\s.,;:!?]/,find:/(?:^|\s)#[^\s.,;:!?]+/i,extract:/#([^\s.,;:!?]+)/i,transform:"$1",insert:"hashtag"},mention:{trigger:/[\s.,;:!?]/,find:/(?:^|\s)@[^\s.,;:!?]+/i,extract:/@([^\s.,;:!?]+)/i,transform:"$1",insert:"mention"},link:{trigger:/[\s]/,find:/https?:\/\/[\S]+|(www\.[\S]+)/gi,transform:function(O,w){return w?"http://"+O:O},format:"link"}};const P=new x("autoformat-helper","data-helper",{scope:S.INLINE});o.d(r,"default",function(){return T}),o.d(r,"Hashtag",function(){return l}),o.d(r,"Mention",function(){return v}),o.d(r,"AutoformatHelperAttribute",function(){return P}),u.a.version&&parseInt(u.a.version[0])<2&&console.warn("quill-autoformat requires Quill 2.0 or higher to work properly"),u.a.register({"modules/autoformat":T,"formats/hashtag":l,"formats/mention":v,"formats/autoformat-helper":P})}])})})(quillAutoformat);const resizerConfig={endpoint:"https://resizer.memodapp.com/v1/image",width:667,height:500,fit:"cover"},previewerConfig={endpoint:"https://resizer.memodapp.com/v1/preview"};Quill$1.import("blots/inline"),Quill$1.import("blots/block");let Image=Quill$1.import("formats/image"),BlockEmbed=Quill$1.import("blots/block/embed");Quill$1.import("blots/embed"),Image.className="bullet-image";class CustomImage extends BlockEmbed{static create(n){const t=super.create(),e=getAspectRatio(n);return t.classList.add("image-container"),t.innerHTML=`<img alt='' src=${n} class='bullet-image' style="aspect-ratio:${e}" />`,t}}function getAspectRatio(a){try{const n=new URL(a),t=n.searchParams.get("w"),e=n.searchParams.get("h");return t>e?"16/9":t<e?"4/5":"1/1"}catch{return"1/1"}}class CustomLink extends BlockEmbed{static create(n){const t=super.create();t.setAttribute("contenteditable","false"),t.classList.add("editor-link","loading"),t.innerHTML='<green-loader class="green-loader">';function e(r,o){try{const s=new URL(r).origin;return o&&o!=="http://favicon.ico/"?o:`https://www.google.com/s2/favicons?domain=${s}&size=196`}catch{return""}}return fetch(`${previewerConfig.endpoint}?url=${n}`).then(r=>r.json()).then(r=>{const{image:o={url:""},title:s,description:u,favicon:_,siteName:p,hostname:f,originalUrl:c}=r,l=u||s,d=`
        <editor-link-card
          img="${o.url}"
          description="${l}"
          url="${n}"
          favicon="${e(c,"")}"
          sitename="${p}"
          hostname="${f}"
        />
      `;t.querySelector(".green-loader").remove(),t.classList.remove("loading"),t.innerHTML+=d}),t}}class MemoLink extends BlockEmbed{static create(n){const t=super.create();t.setAttribute("contenteditable","false"),t.classList.add("memo-link-card");const{id:e,displayname:r,title:o,slug:s,coverImage:u,coverOrientation:_}=n,p=`
        <memo-link-card
          memoId="${e}"
          displayname='${r}'
          title="${o}"
          slug="${s}"
          data-cover-image="${u}"
          data-cover-orientation="${_}"
          coverimage="${u}"
          coverorientation="${_}"
        />
      `.trim();return t.innerHTML=p,t}}CustomLink.blotName="memod-link",CustomLink.tagName="div",CustomImage.blotName="memod-image",CustomImage.tagName="div",MemoLink.blotName="memo-card-link",MemoLink.tagName="div",Quill$1.register(CustomLink),Quill$1.register(MemoLink),Quill$1.register(Image),Quill$1.register(CustomImage);const Embed$4=Quill$1.import("blots/embed");class Hyperlink$1 extends Embed$4{static create(n){const t=super.create(n);t.setAttribute("title",n.trim()),t.setAttribute("href",n),t.setAttribute("target","_blank");let e="";try{e=new URL(n).hostname}catch{e=n}return t.textContent=e,t}static value(n){return n.textContent}}Hyperlink$1.blotName="custom-hyperlink",Hyperlink$1.className="ql-hyperlink",Hyperlink$1.tagName="A",Quill$1.register(Hyperlink$1);var quill={exports:{}};/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */(function(a,n){(function(e,r){a.exports=r()})(typeof self!="undefined"?self:commonjsGlobal,function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(o,s,u){r.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:u})},r.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(s,"a",s),s},r.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},r.p="",r(r.s=109)}([function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(17),s=r(18),u=r(19),_=r(45),p=r(46),f=r(47),c=r(48),l=r(49),d=r(12),g=r(32),h=r(33),v=r(31),b=r(1),y={Scope:b.Scope,create:b.create,find:b.find,query:b.query,register:b.register,Container:o.default,Format:s.default,Leaf:u.default,Embed:c.default,Scroll:_.default,Block:f.default,Inline:p.default,Text:l.default,Attributor:{Attribute:d.default,Class:g.default,Style:h.default,Store:v.default}};e.default=y},function(t,e,r){var o=this&&this.__extends||function(){var v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,y){b.__proto__=y}||function(b,y){for(var E in y)y.hasOwnProperty(E)&&(b[E]=y[E])};return function(b,y){v(b,y);function E(){this.constructor=b}b.prototype=y===null?Object.create(y):(E.prototype=y.prototype,new E)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=function(v){o(b,v);function b(y){var E=this;return y="[Parchment] "+y,E=v.call(this,y)||this,E.message=y,E.name=E.constructor.name,E}return b}(Error);e.ParchmentError=s;var u={},_={},p={},f={};e.DATA_KEY="__blot";var c;(function(v){v[v.TYPE=3]="TYPE",v[v.LEVEL=12]="LEVEL",v[v.ATTRIBUTE=13]="ATTRIBUTE",v[v.BLOT=14]="BLOT",v[v.INLINE=7]="INLINE",v[v.BLOCK=11]="BLOCK",v[v.BLOCK_BLOT=10]="BLOCK_BLOT",v[v.INLINE_BLOT=6]="INLINE_BLOT",v[v.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",v[v.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",v[v.ANY=15]="ANY"})(c=e.Scope||(e.Scope={}));function l(v,b){var y=g(v);if(y==null)throw new s("Unable to create "+v+" blot");var E=y,m=v instanceof Node||v.nodeType===Node.TEXT_NODE?v:E.create(b);return new E(m,b)}e.create=l;function d(v,b){return b===void 0&&(b=!1),v==null?null:v[e.DATA_KEY]!=null?v[e.DATA_KEY].blot:b?d(v.parentNode,b):null}e.find=d;function g(v,b){b===void 0&&(b=c.ANY);var y;if(typeof v=="string")y=f[v]||u[v];else if(v instanceof Text||v.nodeType===Node.TEXT_NODE)y=f.text;else if(typeof v=="number")v&c.LEVEL&c.BLOCK?y=f.block:v&c.LEVEL&c.INLINE&&(y=f.inline);else if(v instanceof HTMLElement){var E=(v.getAttribute("class")||"").split(/\s+/);for(var m in E)if(y=_[E[m]],y)break;y=y||p[v.tagName]}return y==null?null:b&c.LEVEL&y.scope&&b&c.TYPE&y.scope?y:null}e.query=g;function h(){for(var v=[],b=0;b<arguments.length;b++)v[b]=arguments[b];if(v.length>1)return v.map(function(m){return h(m)});var y=v[0];if(typeof y.blotName!="string"&&typeof y.attrName!="string")throw new s("Invalid definition");if(y.blotName==="abstract")throw new s("Cannot register abstract class");if(f[y.blotName||y.attrName]=y,typeof y.keyName=="string")u[y.keyName]=y;else if(y.className!=null&&(_[y.className]=y),y.tagName!=null){Array.isArray(y.tagName)?y.tagName=y.tagName.map(function(m){return m.toUpperCase()}):y.tagName=y.tagName.toUpperCase();var E=Array.isArray(y.tagName)?y.tagName:[y.tagName];E.forEach(function(m){(p[m]==null||y.className==null)&&(p[m]=y)})}return y}e.register=h},function(t,e,r){var o=r(51),s=r(11),u=r(3),_=r(20),p=String.fromCharCode(0),f=function(c){Array.isArray(c)?this.ops=c:c!=null&&Array.isArray(c.ops)?this.ops=c.ops:this.ops=[]};f.prototype.insert=function(c,l){var d={};return c.length===0?this:(d.insert=c,l!=null&&typeof l=="object"&&Object.keys(l).length>0&&(d.attributes=l),this.push(d))},f.prototype.delete=function(c){return c<=0?this:this.push({delete:c})},f.prototype.retain=function(c,l){if(c<=0)return this;var d={retain:c};return l!=null&&typeof l=="object"&&Object.keys(l).length>0&&(d.attributes=l),this.push(d)},f.prototype.push=function(c){var l=this.ops.length,d=this.ops[l-1];if(c=u(!0,{},c),typeof d=="object"){if(typeof c.delete=="number"&&typeof d.delete=="number")return this.ops[l-1]={delete:d.delete+c.delete},this;if(typeof d.delete=="number"&&c.insert!=null&&(l-=1,d=this.ops[l-1],typeof d!="object"))return this.ops.unshift(c),this;if(s(c.attributes,d.attributes)){if(typeof c.insert=="string"&&typeof d.insert=="string")return this.ops[l-1]={insert:d.insert+c.insert},typeof c.attributes=="object"&&(this.ops[l-1].attributes=c.attributes),this;if(typeof c.retain=="number"&&typeof d.retain=="number")return this.ops[l-1]={retain:d.retain+c.retain},typeof c.attributes=="object"&&(this.ops[l-1].attributes=c.attributes),this}}return l===this.ops.length?this.ops.push(c):this.ops.splice(l,0,c),this},f.prototype.chop=function(){var c=this.ops[this.ops.length-1];return c&&c.retain&&!c.attributes&&this.ops.pop(),this},f.prototype.filter=function(c){return this.ops.filter(c)},f.prototype.forEach=function(c){this.ops.forEach(c)},f.prototype.map=function(c){return this.ops.map(c)},f.prototype.partition=function(c){var l=[],d=[];return this.forEach(function(g){var h=c(g)?l:d;h.push(g)}),[l,d]},f.prototype.reduce=function(c,l){return this.ops.reduce(c,l)},f.prototype.changeLength=function(){return this.reduce(function(c,l){return l.insert?c+_.length(l):l.delete?c-l.delete:c},0)},f.prototype.length=function(){return this.reduce(function(c,l){return c+_.length(l)},0)},f.prototype.slice=function(c,l){c=c||0,typeof l!="number"&&(l=1/0);for(var d=[],g=_.iterator(this.ops),h=0;h<l&&g.hasNext();){var v;h<c?v=g.next(c-h):(v=g.next(l-h),d.push(v)),h+=_.length(v)}return new f(d)},f.prototype.compose=function(c){var l=_.iterator(this.ops),d=_.iterator(c.ops),g=[],h=d.peek();if(h!=null&&typeof h.retain=="number"&&h.attributes==null){for(var v=h.retain;l.peekType()==="insert"&&l.peekLength()<=v;)v-=l.peekLength(),g.push(l.next());h.retain-v>0&&d.next(h.retain-v)}for(var b=new f(g);l.hasNext()||d.hasNext();)if(d.peekType()==="insert")b.push(d.next());else if(l.peekType()==="delete")b.push(l.next());else{var y=Math.min(l.peekLength(),d.peekLength()),E=l.next(y),m=d.next(y);if(typeof m.retain=="number"){var x={};typeof E.retain=="number"?x.retain=y:x.insert=E.insert;var S=_.attributes.compose(E.attributes,m.attributes,typeof E.retain=="number");if(S&&(x.attributes=S),b.push(x),!d.hasNext()&&s(b.ops[b.ops.length-1],x)){var T=new f(l.rest());return b.concat(T).chop()}}else typeof m.delete=="number"&&typeof E.retain=="number"&&b.push(m)}return b.chop()},f.prototype.concat=function(c){var l=new f(this.ops.slice());return c.ops.length>0&&(l.push(c.ops[0]),l.ops=l.ops.concat(c.ops.slice(1))),l},f.prototype.diff=function(c,l){if(this.ops===c.ops)return new f;var d=[this,c].map(function(y){return y.map(function(E){if(E.insert!=null)return typeof E.insert=="string"?E.insert:p;var m=y===c?"on":"with";throw new Error("diff() called "+m+" non-document")}).join("")}),g=new f,h=o(d[0],d[1],l),v=_.iterator(this.ops),b=_.iterator(c.ops);return h.forEach(function(y){for(var E=y[1].length;E>0;){var m=0;switch(y[0]){case o.INSERT:m=Math.min(b.peekLength(),E),g.push(b.next(m));break;case o.DELETE:m=Math.min(E,v.peekLength()),v.next(m),g.delete(m);break;case o.EQUAL:m=Math.min(v.peekLength(),b.peekLength(),E);var x=v.next(m),S=b.next(m);s(x.insert,S.insert)?g.retain(m,_.attributes.diff(x.attributes,S.attributes)):g.push(S).delete(m);break}E-=m}}),g.chop()},f.prototype.eachLine=function(c,l){l=l||`
`;for(var d=_.iterator(this.ops),g=new f,h=0;d.hasNext();){if(d.peekType()!=="insert")return;var v=d.peek(),b=_.length(v)-d.peekLength(),y=typeof v.insert=="string"?v.insert.indexOf(l,b)-b:-1;if(y<0)g.push(d.next());else if(y>0)g.push(d.next(y));else{if(c(g,d.next(1).attributes||{},h)===!1)return;h+=1,g=new f}}g.length()>0&&c(g,{},h)},f.prototype.transform=function(c,l){if(l=!!l,typeof c=="number")return this.transformPosition(c,l);for(var d=_.iterator(this.ops),g=_.iterator(c.ops),h=new f;d.hasNext()||g.hasNext();)if(d.peekType()==="insert"&&(l||g.peekType()!=="insert"))h.retain(_.length(d.next()));else if(g.peekType()==="insert")h.push(g.next());else{var v=Math.min(d.peekLength(),g.peekLength()),b=d.next(v),y=g.next(v);if(b.delete)continue;y.delete?h.push(y):h.retain(v,_.attributes.transform(b.attributes,y.attributes,l))}return h.chop()},f.prototype.transformPosition=function(c,l){l=!!l;for(var d=_.iterator(this.ops),g=0;d.hasNext()&&g<=c;){var h=d.peekLength(),v=d.peekType();if(d.next(),v==="delete"){c-=Math.min(h,c-g);continue}else v==="insert"&&(g<c||!l)&&(c+=h);g+=h}return c},t.exports=f},function(t,e){var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,_=function(d){return typeof Array.isArray=="function"?Array.isArray(d):o.call(d)==="[object Array]"},p=function(d){if(!d||o.call(d)!=="[object Object]")return!1;var g=r.call(d,"constructor"),h=d.constructor&&d.constructor.prototype&&r.call(d.constructor.prototype,"isPrototypeOf");if(d.constructor&&!g&&!h)return!1;var v;for(v in d);return typeof v=="undefined"||r.call(d,v)},f=function(d,g){s&&g.name==="__proto__"?s(d,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):d[g.name]=g.newValue},c=function(d,g){if(g==="__proto__")if(r.call(d,g)){if(u)return u(d,g).value}else return;return d[g]};t.exports=function l(){var d,g,h,v,b,y,E=arguments[0],m=1,x=arguments.length,S=!1;for(typeof E=="boolean"&&(S=E,E=arguments[1]||{},m=2),(E==null||typeof E!="object"&&typeof E!="function")&&(E={});m<x;++m)if(d=arguments[m],d!=null)for(g in d)h=c(E,g),v=c(d,g),E!==v&&(S&&v&&(p(v)||(b=_(v)))?(b?(b=!1,y=h&&_(h)?h:[]):y=h&&p(h)?h:{},f(E,{name:g,newValue:l(S,y,v)})):typeof v!="undefined"&&f(E,{name:g,newValue:v}));return E}},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var o=function(){function O(w,k){for(var C=0;C<k.length;C++){var R=k[C];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(w,R.key,R)}}return function(w,k,C){return k&&O(w.prototype,k),C&&O(w,C),w}}(),s=function O(w,k,C){w===null&&(w=Function.prototype);var R=Object.getOwnPropertyDescriptor(w,k);if(R===void 0){var N=Object.getPrototypeOf(w);return N===null?void 0:O(N,k,C)}else{if("value"in R)return R.value;var j=R.get;return j===void 0?void 0:j.call(C)}},u=r(3),_=E(u),p=r(2),f=E(p),c=r(0),l=E(c),d=r(16),g=E(d),h=r(6),v=E(h),b=r(7),y=E(b);function E(O){return O&&O.__esModule?O:{default:O}}function m(O,w){if(!(O instanceof w))throw new TypeError("Cannot call a class as a function")}function x(O,w){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:O}function S(O,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);O.prototype=Object.create(w&&w.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(O,w):O.__proto__=w)}var T=1,D=function(O){S(w,O);function w(){return m(this,w),x(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))}return o(w,[{key:"attach",value:function(){s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"attach",this).call(this),this.attributes=new l.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new f.default().insert(this.value(),(0,_.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(C,R){var N=l.default.query(C,l.default.Scope.BLOCK_ATTRIBUTE);N!=null&&this.attributes.attribute(N,R)}},{key:"formatAt",value:function(C,R,N,j){this.format(N,j)}},{key:"insertAt",value:function(C,R,N){if(typeof R=="string"&&R.endsWith(`
`)){var j=l.default.create(I.blotName);this.parent.insertBefore(j,C===0?this:this.next),j.insertAt(0,R.slice(0,-1))}else s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"insertAt",this).call(this,C,R,N)}}]),w}(l.default.Embed);D.scope=l.default.Scope.BLOCK_BLOT;var I=function(O){S(w,O);function w(k){m(this,w);var C=x(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,k));return C.cache={},C}return o(w,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(l.default.Leaf).reduce(function(C,R){return R.length()===0?C:C.insert(R.value(),P(R))},new f.default).insert(`
`,P(this))),this.cache.delta}},{key:"deleteAt",value:function(C,R){s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"deleteAt",this).call(this,C,R),this.cache={}}},{key:"formatAt",value:function(C,R,N,j){R<=0||(l.default.query(N,l.default.Scope.BLOCK)?C+R===this.length()&&this.format(N,j):s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"formatAt",this).call(this,C,Math.min(R,this.length()-C-1),N,j),this.cache={})}},{key:"insertAt",value:function(C,R,N){if(N!=null)return s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"insertAt",this).call(this,C,R,N);if(R.length!==0){var j=R.split(`
`),H=j.shift();H.length>0&&(C<this.length()-1||this.children.tail==null?s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"insertAt",this).call(this,Math.min(C,this.length()-1),H):this.children.tail.insertAt(this.children.tail.length(),H),this.cache={});var U=this;j.reduce(function(q,A){return U=U.split(q,!0),U.insertAt(0,A),A.length},C+H.length)}}},{key:"insertBefore",value:function(C,R){var N=this.children.head;s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"insertBefore",this).call(this,C,R),N instanceof g.default&&N.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"length",this).call(this)+T),this.cache.length}},{key:"moveChildren",value:function(C,R){s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"moveChildren",this).call(this,C,R),this.cache={}}},{key:"optimize",value:function(C){s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"optimize",this).call(this,C),this.cache={}}},{key:"path",value:function(C){return s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"path",this).call(this,C,!0)}},{key:"removeChild",value:function(C){s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"removeChild",this).call(this,C),this.cache={}}},{key:"split",value:function(C){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R&&(C===0||C>=this.length()-T)){var N=this.clone();return C===0?(this.parent.insertBefore(N,this),this):(this.parent.insertBefore(N,this.next),N)}else{var j=s(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"split",this).call(this,C,R);return this.cache={},j}}}]),w}(l.default.Block);I.blotName="block",I.tagName="P",I.defaultChild="break",I.allowedChildren=[v.default,l.default.Embed,y.default];function P(O){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return O==null||(typeof O.formats=="function"&&(w=(0,_.default)(w,O.formats())),O.parent==null||O.parent.blotName=="scroll"||O.parent.statics.scope!==O.statics.scope)?w:P(O.parent,w)}e.bubbleFormats=P,e.BlockEmbed=D,e.default=I},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},s=function(){function U(q,A){var M=[],L=!0,W=!1,K=void 0;try{for(var B=q[Symbol.iterator](),$;!(L=($=B.next()).done)&&(M.push($.value),!(A&&M.length===A));L=!0);}catch(F){W=!0,K=F}finally{try{!L&&B.return&&B.return()}finally{if(W)throw K}}return M}return function(q,A){if(Array.isArray(q))return q;if(Symbol.iterator in Object(q))return U(q,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function U(q,A){for(var M=0;M<A.length;M++){var L=A[M];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(q,L.key,L)}}return function(q,A,M){return A&&U(q.prototype,A),M&&U(q,M),q}}();r(50);var _=r(2),p=P(_),f=r(14),c=P(f),l=r(8),d=P(l),g=r(9),h=P(g),v=r(0),b=P(v),y=r(15),E=P(y),m=r(3),x=P(m),S=r(10),T=P(S),D=r(34),I=P(D);function P(U){return U&&U.__esModule?U:{default:U}}function O(U,q,A){return q in U?Object.defineProperty(U,q,{value:A,enumerable:!0,configurable:!0,writable:!0}):U[q]=A,U}function w(U,q){if(!(U instanceof q))throw new TypeError("Cannot call a class as a function")}var k=(0,T.default)("quill"),C=function(){u(U,null,[{key:"debug",value:function(A){A===!0&&(A="log"),T.default.level(A)}},{key:"find",value:function(A){return A.__quill||b.default.find(A)}},{key:"import",value:function(A){return this.imports[A]==null&&k.error("Cannot import "+A+". Are you sure it was registered?"),this.imports[A]}},{key:"register",value:function(A,M){var L=this,W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof A!="string"){var K=A.attrName||A.blotName;typeof K=="string"?this.register("formats/"+K,A,M):Object.keys(A).forEach(function(B){L.register(B,A[B],M)})}else this.imports[A]!=null&&!W&&k.warn("Overwriting "+A+" with",M),this.imports[A]=M,(A.startsWith("blots/")||A.startsWith("formats/"))&&M.blotName!=="abstract"?b.default.register(M):A.startsWith("modules")&&typeof M.register=="function"&&M.register()}}]);function U(q){var A=this,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(w(this,U),this.options=R(q,M),this.container=this.options.container,this.container==null)return k.error("Invalid Quill container",q);this.options.debug&&U.debug(this.options.debug);var L=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new d.default,this.scroll=b.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new c.default(this.scroll),this.selection=new E.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(d.default.events.EDITOR_CHANGE,function(K){K===d.default.events.TEXT_CHANGE&&A.root.classList.toggle("ql-blank",A.editor.isBlank())}),this.emitter.on(d.default.events.SCROLL_UPDATE,function(K,B){var $=A.selection.lastRange,F=$&&$.length===0?$.index:void 0;N.call(A,function(){return A.editor.update(null,B,F)},K)});var W=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+L+"<p><br></p></div>");this.setContents(W),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return u(U,[{key:"addContainer",value:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof A=="string"){var L=A;A=document.createElement("div"),A.classList.add(L)}return this.container.insertBefore(A,M),A}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(A,M,L){var W=this,K=j(A,M,L),B=s(K,4);return A=B[0],M=B[1],L=B[3],N.call(this,function(){return W.editor.deleteText(A,M)},L,A,-1*M)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.scroll.enable(A),this.container.classList.toggle("ql-disabled",!A)}},{key:"focus",value:function(){var A=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=A,this.scrollIntoView()}},{key:"format",value:function(A,M){var L=this,W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:d.default.sources.API;return N.call(this,function(){var K=L.getSelection(!0),B=new p.default;if(K==null)return B;if(b.default.query(A,b.default.Scope.BLOCK))B=L.editor.formatLine(K.index,K.length,O({},A,M));else{if(K.length===0)return L.selection.format(A,M),B;B=L.editor.formatText(K.index,K.length,O({},A,M))}return L.setSelection(K,d.default.sources.SILENT),B},W)}},{key:"formatLine",value:function(A,M,L,W,K){var B=this,$=void 0,F=j(A,M,L,W,K),G=s(F,4);return A=G[0],M=G[1],$=G[2],K=G[3],N.call(this,function(){return B.editor.formatLine(A,M,$)},K,A,0)}},{key:"formatText",value:function(A,M,L,W,K){var B=this,$=void 0,F=j(A,M,L,W,K),G=s(F,4);return A=G[0],M=G[1],$=G[2],K=G[3],N.call(this,function(){return B.editor.formatText(A,M,$)},K,A,0)}},{key:"getBounds",value:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,L=void 0;typeof A=="number"?L=this.selection.getBounds(A,M):L=this.selection.getBounds(A.index,A.length);var W=this.container.getBoundingClientRect();return{bottom:L.bottom-W.top,height:L.height,left:L.left-W.left,right:L.right-W.left,top:L.top-W.top,width:L.width}}},{key:"getContents",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-A,L=j(A,M),W=s(L,2);return A=W[0],M=W[1],this.editor.getContents(A,M)}},{key:"getFormat",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof A=="number"?this.editor.getFormat(A,M):this.editor.getFormat(A.index,A.length)}},{key:"getIndex",value:function(A){return A.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(A){return this.scroll.leaf(A)}},{key:"getLine",value:function(A){return this.scroll.line(A)}},{key:"getLines",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof A!="number"?this.scroll.lines(A.index,A.length):this.scroll.lines(A,M)}},{key:"getModule",value:function(A){return this.theme.modules[A]}},{key:"getSelection",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return A&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-A,L=j(A,M),W=s(L,2);return A=W[0],M=W[1],this.editor.getText(A,M)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(A,M,L){var W=this,K=arguments.length>3&&arguments[3]!==void 0?arguments[3]:U.sources.API;return N.call(this,function(){return W.editor.insertEmbed(A,M,L)},K,A)}},{key:"insertText",value:function(A,M,L,W,K){var B=this,$=void 0,F=j(A,0,L,W,K),G=s(F,4);return A=G[0],$=G[2],K=G[3],N.call(this,function(){return B.editor.insertText(A,M,$)},K,A,M.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(A,M,L){this.clipboard.dangerouslyPasteHTML(A,M,L)}},{key:"removeFormat",value:function(A,M,L){var W=this,K=j(A,M,L),B=s(K,4);return A=B[0],M=B[1],L=B[3],N.call(this,function(){return W.editor.removeFormat(A,M)},L,A)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(A){var M=this,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d.default.sources.API;return N.call(this,function(){A=new p.default(A);var W=M.getLength(),K=M.editor.deleteText(0,W),B=M.editor.applyDelta(A),$=B.ops[B.ops.length-1];$!=null&&typeof $.insert=="string"&&$.insert[$.insert.length-1]===`
`&&(M.editor.deleteText(M.getLength()-1,1),B.delete(1));var F=K.compose(B);return F},L)}},{key:"setSelection",value:function(A,M,L){if(A==null)this.selection.setRange(null,M||U.sources.API);else{var W=j(A,M,L),K=s(W,4);A=K[0],M=K[1],L=K[3],this.selection.setRange(new y.Range(A,M),L),L!==d.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d.default.sources.API,L=new p.default().insert(A);return this.setContents(L,M)}},{key:"update",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:d.default.sources.USER,M=this.scroll.update(A);return this.selection.update(A),M}},{key:"updateContents",value:function(A){var M=this,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d.default.sources.API;return N.call(this,function(){return A=new p.default(A),M.editor.applyDelta(A,L)},L,!0)}}]),U}();C.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},C.events=d.default.events,C.sources=d.default.sources,C.version="1.3.7",C.imports={delta:p.default,parchment:b.default,"core/module":h.default,"core/theme":I.default};function R(U,q){if(q=(0,x.default)(!0,{container:U,modules:{clipboard:!0,keyboard:!0,history:!0}},q),!q.theme||q.theme===C.DEFAULTS.theme)q.theme=I.default;else if(q.theme=C.import("themes/"+q.theme),q.theme==null)throw new Error("Invalid theme "+q.theme+". Did you register it?");var A=(0,x.default)(!0,{},q.theme.DEFAULTS);[A,q].forEach(function(W){W.modules=W.modules||{},Object.keys(W.modules).forEach(function(K){W.modules[K]===!0&&(W.modules[K]={})})});var M=Object.keys(A.modules).concat(Object.keys(q.modules)),L=M.reduce(function(W,K){var B=C.import("modules/"+K);return B==null?k.error("Cannot load "+K+" module. Are you sure you registered it?"):W[K]=B.DEFAULTS||{},W},{});return q.modules!=null&&q.modules.toolbar&&q.modules.toolbar.constructor!==Object&&(q.modules.toolbar={container:q.modules.toolbar}),q=(0,x.default)(!0,{},C.DEFAULTS,{modules:L},A,q),["bounds","container","scrollingContainer"].forEach(function(W){typeof q[W]=="string"&&(q[W]=document.querySelector(q[W]))}),q.modules=Object.keys(q.modules).reduce(function(W,K){return q.modules[K]&&(W[K]=q.modules[K]),W},{}),q}function N(U,q,A,M){if(this.options.strict&&!this.isEnabled()&&q===d.default.sources.USER)return new p.default;var L=A==null?null:this.getSelection(),W=this.editor.delta,K=U();if(L!=null&&(A===!0&&(A=L.index),M==null?L=H(L,K,q):M!==0&&(L=H(L,A,M,q)),this.setSelection(L,d.default.sources.SILENT)),K.length()>0){var B,$=[d.default.events.TEXT_CHANGE,K,W,q];if((B=this.emitter).emit.apply(B,[d.default.events.EDITOR_CHANGE].concat($)),q!==d.default.sources.SILENT){var F;(F=this.emitter).emit.apply(F,$)}}return K}function j(U,q,A,M,L){var W={};return typeof U.index=="number"&&typeof U.length=="number"?typeof q!="number"?(L=M,M=A,A=q,q=U.length,U=U.index):(q=U.length,U=U.index):typeof q!="number"&&(L=M,M=A,A=q,q=0),(typeof A=="undefined"?"undefined":o(A))==="object"?(W=A,L=M):typeof A=="string"&&(M!=null?W[A]=M:L=A),L=L||d.default.sources.API,[U,q,W,L]}function H(U,q,A,M){if(U==null)return null;var L=void 0,W=void 0;if(q instanceof p.default){var K=[U.index,U.index+U.length].map(function(G){return q.transformPosition(G,M!==d.default.sources.USER)}),B=s(K,2);L=B[0],W=B[1]}else{var $=[U.index,U.index+U.length].map(function(G){return G<q||G===q&&M===d.default.sources.USER?G:A>=0?G+A:Math.max(q,G+A)}),F=s($,2);L=F[0],W=F[1]}return new y.Range(L,W-L)}e.expandConfig=R,e.overload=j,e.default=C},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function v(b,y){for(var E=0;E<y.length;E++){var m=y[E];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(b,m.key,m)}}return function(b,y,E){return y&&v(b.prototype,y),E&&v(b,E),b}}(),s=function v(b,y,E){b===null&&(b=Function.prototype);var m=Object.getOwnPropertyDescriptor(b,y);if(m===void 0){var x=Object.getPrototypeOf(b);return x===null?void 0:v(x,y,E)}else{if("value"in m)return m.value;var S=m.get;return S===void 0?void 0:S.call(E)}},u=r(7),_=c(u),p=r(0),f=c(p);function c(v){return v&&v.__esModule?v:{default:v}}function l(v,b){if(!(v instanceof b))throw new TypeError("Cannot call a class as a function")}function d(v,b){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:v}function g(v,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);v.prototype=Object.create(b&&b.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(v,b):v.__proto__=b)}var h=function(v){g(b,v);function b(){return l(this,b),d(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return o(b,[{key:"formatAt",value:function(E,m,x,S){if(b.compare(this.statics.blotName,x)<0&&f.default.query(x,f.default.Scope.BLOT)){var T=this.isolate(E,m);S&&T.wrap(x,S)}else s(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"formatAt",this).call(this,E,m,x,S)}},{key:"optimize",value:function(E){if(s(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"optimize",this).call(this,E),this.parent instanceof b&&b.compare(this.statics.blotName,this.parent.statics.blotName)>0){var m=this.parent.isolate(this.offset(),this.length());this.moveChildren(m),m.wrap(this)}}}],[{key:"compare",value:function(E,m){var x=b.order.indexOf(E),S=b.order.indexOf(m);return x>=0||S>=0?x-S:E===m?0:E<m?-1:1}}]),b}(f.default.Inline);h.allowedChildren=[h,f.default.Embed,_.default],h.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=h},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),s=u(o);function u(l){return l&&l.__esModule?l:{default:l}}function _(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function p(l,d){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:l}function f(l,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);l.prototype=Object.create(d&&d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(l,d):l.__proto__=d)}var c=function(l){f(d,l);function d(){return _(this,d),p(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(s.default.Text);e.default=c},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function y(E,m){for(var x=0;x<m.length;x++){var S=m[x];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(E,S.key,S)}}return function(E,m,x){return m&&y(E.prototype,m),x&&y(E,x),E}}(),s=function y(E,m,x){E===null&&(E=Function.prototype);var S=Object.getOwnPropertyDescriptor(E,m);if(S===void 0){var T=Object.getPrototypeOf(E);return T===null?void 0:y(T,m,x)}else{if("value"in S)return S.value;var D=S.get;return D===void 0?void 0:D.call(x)}},u=r(54),_=c(u),p=r(10),f=c(p);function c(y){return y&&y.__esModule?y:{default:y}}function l(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}function d(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function g(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}var h=(0,f.default)("quill:events"),v=["selectionchange","mousedown","mouseup","click"];v.forEach(function(y){document.addEventListener(y,function(){for(var E=arguments.length,m=Array(E),x=0;x<E;x++)m[x]=arguments[x];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(S){if(S.__quill&&S.__quill.emitter){var T;(T=S.__quill.emitter).handleDOM.apply(T,m)}})})});var b=function(y){g(E,y);function E(){l(this,E);var m=d(this,(E.__proto__||Object.getPrototypeOf(E)).call(this));return m.listeners={},m.on("error",h.error),m}return o(E,[{key:"emit",value:function(){h.log.apply(h,arguments),s(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(x){for(var S=arguments.length,T=Array(S>1?S-1:0),D=1;D<S;D++)T[D-1]=arguments[D];(this.listeners[x.type]||[]).forEach(function(I){var P=I.node,O=I.handler;(x.target===P||P.contains(x.target))&&O.apply(void 0,[x].concat(T))})}},{key:"listenDOM",value:function(x,S,T){this.listeners[x]||(this.listeners[x]=[]),this.listeners[x].push({node:S,handler:T})}}]),E}(_.default);b.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},b.sources={API:"api",SILENT:"silent",USER:"user"},e.default=b},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});function o(u,_){if(!(u instanceof _))throw new TypeError("Cannot call a class as a function")}var s=function u(_){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};o(this,u),this.quill=_,this.options=p};s.DEFAULTS={},e.default=s},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=["error","warn","log","info"],s="warn";function u(p){if(o.indexOf(p)<=o.indexOf(s)){for(var f,c=arguments.length,l=Array(c>1?c-1:0),d=1;d<c;d++)l[d-1]=arguments[d];(f=console)[p].apply(f,l)}}function _(p){return o.reduce(function(f,c){return f[c]=u.bind(console,c,p),f},{})}u.level=_.level=function(p){s=p},e.default=_},function(t,e,r){var o=Array.prototype.slice,s=r(52),u=r(53),_=t.exports=function(l,d,g){return g||(g={}),l===d?!0:l instanceof Date&&d instanceof Date?l.getTime()===d.getTime():!l||!d||typeof l!="object"&&typeof d!="object"?g.strict?l===d:l==d:c(l,d,g)};function p(l){return l==null}function f(l){return!(!l||typeof l!="object"||typeof l.length!="number"||typeof l.copy!="function"||typeof l.slice!="function"||l.length>0&&typeof l[0]!="number")}function c(l,d,g){var h,v;if(p(l)||p(d)||l.prototype!==d.prototype)return!1;if(u(l))return u(d)?(l=o.call(l),d=o.call(d),_(l,d,g)):!1;if(f(l)){if(!f(d)||l.length!==d.length)return!1;for(h=0;h<l.length;h++)if(l[h]!==d[h])return!1;return!0}try{var b=s(l),y=s(d)}catch{return!1}if(b.length!=y.length)return!1;for(b.sort(),y.sort(),h=b.length-1;h>=0;h--)if(b[h]!=y[h])return!1;for(h=b.length-1;h>=0;h--)if(v=b[h],!_(l[v],d[v],g))return!1;return typeof l==typeof d}},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(1),s=function(){function u(_,p,f){f===void 0&&(f={}),this.attrName=_,this.keyName=p;var c=o.Scope.TYPE&o.Scope.ATTRIBUTE;f.scope!=null?this.scope=f.scope&o.Scope.LEVEL|c:this.scope=o.Scope.ATTRIBUTE,f.whitelist!=null&&(this.whitelist=f.whitelist)}return u.keys=function(_){return[].map.call(_.attributes,function(p){return p.name})},u.prototype.add=function(_,p){return this.canAdd(_,p)?(_.setAttribute(this.keyName,p),!0):!1},u.prototype.canAdd=function(_,p){var f=o.query(_,o.Scope.BLOT&(this.scope|o.Scope.TYPE));return f==null?!1:this.whitelist==null?!0:typeof p=="string"?this.whitelist.indexOf(p.replace(/["']/g,""))>-1:this.whitelist.indexOf(p)>-1},u.prototype.remove=function(_){_.removeAttribute(this.keyName)},u.prototype.value=function(_){var p=_.getAttribute(this.keyName);return this.canAdd(_,p)&&p?p:""},u}();e.default=s},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var o=function(){function D(I,P){var O=[],w=!0,k=!1,C=void 0;try{for(var R=I[Symbol.iterator](),N;!(w=(N=R.next()).done)&&(O.push(N.value),!(P&&O.length===P));w=!0);}catch(j){k=!0,C=j}finally{try{!w&&R.return&&R.return()}finally{if(k)throw C}}return O}return function(I,P){if(Array.isArray(I))return I;if(Symbol.iterator in Object(I))return D(I,P);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function D(I,P){for(var O=0;O<P.length;O++){var w=P[O];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(I,w.key,w)}}return function(I,P,O){return P&&D(I.prototype,P),O&&D(I,O),I}}(),u=function D(I,P,O){I===null&&(I=Function.prototype);var w=Object.getOwnPropertyDescriptor(I,P);if(w===void 0){var k=Object.getPrototypeOf(I);return k===null?void 0:D(k,P,O)}else{if("value"in w)return w.value;var C=w.get;return C===void 0?void 0:C.call(O)}},_=r(2),p=y(_),f=r(0),c=y(f),l=r(4),d=y(l),g=r(6),h=y(g),v=r(7),b=y(v);function y(D){return D&&D.__esModule?D:{default:D}}function E(D,I){if(!(D instanceof I))throw new TypeError("Cannot call a class as a function")}function m(D,I){if(!D)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:D}function x(D,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);D.prototype=Object.create(I&&I.prototype,{constructor:{value:D,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(D,I):D.__proto__=I)}var S=function(D){x(I,D);function I(){return E(this,I),m(this,(I.__proto__||Object.getPrototypeOf(I)).apply(this,arguments))}return I}(h.default);S.blotName="code",S.tagName="CODE";var T=function(D){x(I,D);function I(){return E(this,I),m(this,(I.__proto__||Object.getPrototypeOf(I)).apply(this,arguments))}return s(I,[{key:"delta",value:function(){var O=this,w=this.domNode.textContent;return w.endsWith(`
`)&&(w=w.slice(0,-1)),w.split(`
`).reduce(function(k,C){return k.insert(C).insert(`
`,O.formats())},new p.default)}},{key:"format",value:function(O,w){if(!(O===this.statics.blotName&&w)){var k=this.descendant(b.default,this.length()-1),C=o(k,1),R=C[0];R!=null&&R.deleteAt(R.length()-1,1),u(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"format",this).call(this,O,w)}}},{key:"formatAt",value:function(O,w,k,C){if(w!==0&&!(c.default.query(k,c.default.Scope.BLOCK)==null||k===this.statics.blotName&&C===this.statics.formats(this.domNode))){var R=this.newlineIndex(O);if(!(R<0||R>=O+w)){var N=this.newlineIndex(O,!0)+1,j=R-N+1,H=this.isolate(N,j),U=H.next;H.format(k,C),U instanceof I&&U.formatAt(0,O-N+w-j,k,C)}}}},{key:"insertAt",value:function(O,w,k){if(k==null){var C=this.descendant(b.default,O),R=o(C,2),N=R[0],j=R[1];N.insertAt(j,w)}}},{key:"length",value:function(){var O=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?O:O+1}},{key:"newlineIndex",value:function(O){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(w)return this.domNode.textContent.slice(0,O).lastIndexOf(`
`);var k=this.domNode.textContent.slice(O).indexOf(`
`);return k>-1?O+k:-1}},{key:"optimize",value:function(O){this.domNode.textContent.endsWith(`
`)||this.appendChild(c.default.create("text",`
`)),u(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"optimize",this).call(this,O);var w=this.next;w!=null&&w.prev===this&&w.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===w.statics.formats(w.domNode)&&(w.optimize(O),w.moveChildren(this),w.remove())}},{key:"replace",value:function(O){u(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"replace",this).call(this,O),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(w){var k=c.default.find(w);k==null?w.parentNode.removeChild(w):k instanceof c.default.Embed?k.remove():k.unwrap()})}}],[{key:"create",value:function(O){var w=u(I.__proto__||Object.getPrototypeOf(I),"create",this).call(this,O);return w.setAttribute("spellcheck",!1),w}},{key:"formats",value:function(){return!0}}]),I}(d.default);T.blotName="code-block",T.tagName="PRE",T.TAB="  ",e.Code=S,e.default=T},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},s=function(){function U(q,A){var M=[],L=!0,W=!1,K=void 0;try{for(var B=q[Symbol.iterator](),$;!(L=($=B.next()).done)&&(M.push($.value),!(A&&M.length===A));L=!0);}catch(F){W=!0,K=F}finally{try{!L&&B.return&&B.return()}finally{if(W)throw K}}return M}return function(q,A){if(Array.isArray(q))return q;if(Symbol.iterator in Object(q))return U(q,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function U(q,A){for(var M=0;M<A.length;M++){var L=A[M];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(q,L.key,L)}}return function(q,A,M){return A&&U(q.prototype,A),M&&U(q,M),q}}(),_=r(2),p=w(_),f=r(20),c=w(f),l=r(0),d=w(l),g=r(13),h=w(g),v=r(24),b=w(v),y=r(4),E=w(y),m=r(16),x=w(m),S=r(21),T=w(S),D=r(11),I=w(D),P=r(3),O=w(P);function w(U){return U&&U.__esModule?U:{default:U}}function k(U,q,A){return q in U?Object.defineProperty(U,q,{value:A,enumerable:!0,configurable:!0,writable:!0}):U[q]=A,U}function C(U,q){if(!(U instanceof q))throw new TypeError("Cannot call a class as a function")}var R=/^[ -~]*$/,N=function(){function U(q){C(this,U),this.scroll=q,this.delta=this.getDelta()}return u(U,[{key:"applyDelta",value:function(A){var M=this,L=!1;this.scroll.update();var W=this.scroll.length();return this.scroll.batchStart(),A=H(A),A.reduce(function(K,B){var $=B.retain||B.delete||B.insert.length||1,F=B.attributes||{};if(B.insert!=null){if(typeof B.insert=="string"){var G=B.insert;G.endsWith(`
`)&&L&&(L=!1,G=G.slice(0,-1)),K>=W&&!G.endsWith(`
`)&&(L=!0),M.scroll.insertAt(K,G);var V=M.scroll.line(K),J=s(V,2),ee=J[0],te=J[1],ie=(0,O.default)({},(0,y.bubbleFormats)(ee));if(ee instanceof E.default){var ae=ee.descendant(d.default.Leaf,te),ce=s(ae,1),ue=ce[0];ie=(0,O.default)(ie,(0,y.bubbleFormats)(ue))}F=c.default.attributes.diff(ie,F)||{}}else if(o(B.insert)==="object"){var z=Object.keys(B.insert)[0];if(z==null)return K;M.scroll.insertAt(K,z,B.insert[z])}W+=$}return Object.keys(F).forEach(function(Q){M.scroll.formatAt(K,$,Q,F[Q])}),K+$},0),A.reduce(function(K,B){return typeof B.delete=="number"?(M.scroll.deleteAt(K,B.delete),K):K+(B.retain||B.insert.length||1)},0),this.scroll.batchEnd(),this.update(A)}},{key:"deleteText",value:function(A,M){return this.scroll.deleteAt(A,M),this.update(new p.default().retain(A).delete(M))}},{key:"formatLine",value:function(A,M){var L=this,W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(W).forEach(function(K){if(!(L.scroll.whitelist!=null&&!L.scroll.whitelist[K])){var B=L.scroll.lines(A,Math.max(M,1)),$=M;B.forEach(function(F){var G=F.length();if(!(F instanceof h.default))F.format(K,W[K]);else{var V=A-F.offset(L.scroll),J=F.newlineIndex(V+$)-V+1;F.formatAt(V,J,K,W[K])}$-=G})}}),this.scroll.optimize(),this.update(new p.default().retain(A).retain(M,(0,T.default)(W)))}},{key:"formatText",value:function(A,M){var L=this,W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(W).forEach(function(K){L.scroll.formatAt(A,M,K,W[K])}),this.update(new p.default().retain(A).retain(M,(0,T.default)(W)))}},{key:"getContents",value:function(A,M){return this.delta.slice(A,A+M)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(A,M){return A.concat(M.delta())},new p.default)}},{key:"getFormat",value:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,L=[],W=[];M===0?this.scroll.path(A).forEach(function(B){var $=s(B,1),F=$[0];F instanceof E.default?L.push(F):F instanceof d.default.Leaf&&W.push(F)}):(L=this.scroll.lines(A,M),W=this.scroll.descendants(d.default.Leaf,A,M));var K=[L,W].map(function(B){if(B.length===0)return{};for(var $=(0,y.bubbleFormats)(B.shift());Object.keys($).length>0;){var F=B.shift();if(F==null)return $;$=j((0,y.bubbleFormats)(F),$)}return $});return O.default.apply(O.default,K)}},{key:"getText",value:function(A,M){return this.getContents(A,M).filter(function(L){return typeof L.insert=="string"}).map(function(L){return L.insert}).join("")}},{key:"insertEmbed",value:function(A,M,L){return this.scroll.insertAt(A,M,L),this.update(new p.default().retain(A).insert(k({},M,L)))}},{key:"insertText",value:function(A,M){var L=this,W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return M=M.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(A,M),Object.keys(W).forEach(function(K){L.scroll.formatAt(A,M.length,K,W[K])}),this.update(new p.default().retain(A).insert(M,(0,T.default)(W)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var A=this.scroll.children.head;return A.statics.blotName!==E.default.blotName||A.children.length>1?!1:A.children.head instanceof x.default}},{key:"removeFormat",value:function(A,M){var L=this.getText(A,M),W=this.scroll.line(A+M),K=s(W,2),B=K[0],$=K[1],F=0,G=new p.default;B!=null&&(B instanceof h.default?F=B.newlineIndex($)-$+1:F=B.length()-$,G=B.delta().slice($,$+F-1).insert(`
`));var V=this.getContents(A,M+F),J=V.diff(new p.default().insert(L).concat(G)),ee=new p.default().retain(A).concat(J);return this.applyDelta(ee)}},{key:"update",value:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],L=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,W=this.delta;if(M.length===1&&M[0].type==="characterData"&&M[0].target.data.match(R)&&d.default.find(M[0].target)){var K=d.default.find(M[0].target),B=(0,y.bubbleFormats)(K),$=K.offset(this.scroll),F=M[0].oldValue.replace(b.default.CONTENTS,""),G=new p.default().insert(F),V=new p.default().insert(K.value()),J=new p.default().retain($).concat(G.diff(V,L));A=J.reduce(function(ee,te){return te.insert?ee.insert(te.insert,B):ee.push(te)},new p.default),this.delta=W.compose(A)}else this.delta=this.getDelta(),(!A||!(0,I.default)(W.compose(A),this.delta))&&(A=W.diff(this.delta,L));return A}}]),U}();function j(U,q){return Object.keys(q).reduce(function(A,M){return U[M]==null||(q[M]===U[M]?A[M]=q[M]:Array.isArray(q[M])?q[M].indexOf(U[M])<0&&(A[M]=q[M].concat([U[M]])):A[M]=[q[M],U[M]]),A},{})}function H(U){return U.reduce(function(q,A){if(A.insert===1){var M=(0,T.default)(A.attributes);return delete M.image,q.insert({image:A.attributes.image},M)}if(A.attributes!=null&&(A.attributes.list===!0||A.attributes.bullet===!0)&&(A=(0,T.default)(A),A.attributes.list?A.attributes.list="ordered":(A.attributes.list="bullet",delete A.attributes.bullet)),typeof A.insert=="string"){var L=A.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return q.insert(L,A.attributes)}return q.push(A)},new p.default)}e.default=N},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var o=function(){function D(I,P){var O=[],w=!0,k=!1,C=void 0;try{for(var R=I[Symbol.iterator](),N;!(w=(N=R.next()).done)&&(O.push(N.value),!(P&&O.length===P));w=!0);}catch(j){k=!0,C=j}finally{try{!w&&R.return&&R.return()}finally{if(k)throw C}}return O}return function(I,P){if(Array.isArray(I))return I;if(Symbol.iterator in Object(I))return D(I,P);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function D(I,P){for(var O=0;O<P.length;O++){var w=P[O];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(I,w.key,w)}}return function(I,P,O){return P&&D(I.prototype,P),O&&D(I,O),I}}(),u=r(0),_=b(u),p=r(21),f=b(p),c=r(11),l=b(c),d=r(8),g=b(d),h=r(10),v=b(h);function b(D){return D&&D.__esModule?D:{default:D}}function y(D){if(Array.isArray(D)){for(var I=0,P=Array(D.length);I<D.length;I++)P[I]=D[I];return P}else return Array.from(D)}function E(D,I){if(!(D instanceof I))throw new TypeError("Cannot call a class as a function")}var m=(0,v.default)("quill:selection"),x=function D(I){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;E(this,D),this.index=I,this.length=P},S=function(){function D(I,P){var O=this;E(this,D),this.emitter=P,this.scroll=I,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=_.default.create("cursor",this),this.lastRange=this.savedRange=new x(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){O.mouseDown||setTimeout(O.update.bind(O,g.default.sources.USER),1)}),this.emitter.on(g.default.events.EDITOR_CHANGE,function(w,k){w===g.default.events.TEXT_CHANGE&&k.length()>0&&O.update(g.default.sources.SILENT)}),this.emitter.on(g.default.events.SCROLL_BEFORE_UPDATE,function(){if(!!O.hasFocus()){var w=O.getNativeRange();w!=null&&w.start.node!==O.cursor.textNode&&O.emitter.once(g.default.events.SCROLL_UPDATE,function(){try{O.setNativeRange(w.start.node,w.start.offset,w.end.node,w.end.offset)}catch{}})}}),this.emitter.on(g.default.events.SCROLL_OPTIMIZE,function(w,k){if(k.range){var C=k.range,R=C.startNode,N=C.startOffset,j=C.endNode,H=C.endOffset;O.setNativeRange(R,N,j,H)}}),this.update(g.default.sources.SILENT)}return s(D,[{key:"handleComposition",value:function(){var P=this;this.root.addEventListener("compositionstart",function(){P.composing=!0}),this.root.addEventListener("compositionend",function(){if(P.composing=!1,P.cursor.parent){var O=P.cursor.restore();if(!O)return;setTimeout(function(){P.setNativeRange(O.startNode,O.startOffset,O.endNode,O.endOffset)},1)}})}},{key:"handleDragging",value:function(){var P=this;this.emitter.listenDOM("mousedown",document.body,function(){P.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){P.mouseDown=!1,P.update(g.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(P,O){if(!(this.scroll.whitelist!=null&&!this.scroll.whitelist[P])){this.scroll.update();var w=this.getNativeRange();if(!(w==null||!w.native.collapsed||_.default.query(P,_.default.Scope.BLOCK))){if(w.start.node!==this.cursor.textNode){var k=_.default.find(w.start.node,!1);if(k==null)return;if(k instanceof _.default.Leaf){var C=k.split(w.start.offset);k.parent.insertBefore(this.cursor,C)}else k.insertBefore(this.cursor,w.start.node);this.cursor.attach()}this.cursor.format(P,O),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(P){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,w=this.scroll.length();P=Math.min(P,w-1),O=Math.min(P+O,w-1)-P;var k=void 0,C=this.scroll.leaf(P),R=o(C,2),N=R[0],j=R[1];if(N==null)return null;var H=N.position(j,!0),U=o(H,2);k=U[0],j=U[1];var q=document.createRange();if(O>0){q.setStart(k,j);var A=this.scroll.leaf(P+O),M=o(A,2);if(N=M[0],j=M[1],N==null)return null;var L=N.position(j,!0),W=o(L,2);return k=W[0],j=W[1],q.setEnd(k,j),q.getBoundingClientRect()}else{var K="left",B=void 0;return k instanceof Text?(j<k.data.length?(q.setStart(k,j),q.setEnd(k,j+1)):(q.setStart(k,j-1),q.setEnd(k,j),K="right"),B=q.getBoundingClientRect()):(B=N.domNode.getBoundingClientRect(),j>0&&(K="right")),{bottom:B.top+B.height,height:B.height,left:B[K],right:B[K],top:B.top,width:0}}}},{key:"getNativeRange",value:function(){var P=document.getSelection();if(P==null||P.rangeCount<=0)return null;var O=P.getRangeAt(0);if(O==null)return null;var w=this.normalizeNative(O);return m.info("getNativeRange",w),w}},{key:"getRange",value:function(){var P=this.getNativeRange();if(P==null)return[null,null];var O=this.normalizedToRange(P);return[O,P]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(P){var O=this,w=[[P.start.node,P.start.offset]];P.native.collapsed||w.push([P.end.node,P.end.offset]);var k=w.map(function(N){var j=o(N,2),H=j[0],U=j[1],q=_.default.find(H,!0),A=q.offset(O.scroll);return U===0?A:q instanceof _.default.Container?A+q.length():A+q.index(H,U)}),C=Math.min(Math.max.apply(Math,y(k)),this.scroll.length()-1),R=Math.min.apply(Math,[C].concat(y(k)));return new x(R,C-R)}},{key:"normalizeNative",value:function(P){if(!T(this.root,P.startContainer)||!P.collapsed&&!T(this.root,P.endContainer))return null;var O={start:{node:P.startContainer,offset:P.startOffset},end:{node:P.endContainer,offset:P.endOffset},native:P};return[O.start,O.end].forEach(function(w){for(var k=w.node,C=w.offset;!(k instanceof Text)&&k.childNodes.length>0;)if(k.childNodes.length>C)k=k.childNodes[C],C=0;else if(k.childNodes.length===C)k=k.lastChild,C=k instanceof Text?k.data.length:k.childNodes.length+1;else break;w.node=k,w.offset=C}),O}},{key:"rangeToNative",value:function(P){var O=this,w=P.collapsed?[P.index]:[P.index,P.index+P.length],k=[],C=this.scroll.length();return w.forEach(function(R,N){R=Math.min(C-1,R);var j=void 0,H=O.scroll.leaf(R),U=o(H,2),q=U[0],A=U[1],M=q.position(A,N!==0),L=o(M,2);j=L[0],A=L[1],k.push(j,A)}),k.length<2&&(k=k.concat(k)),k}},{key:"scrollIntoView",value:function(P){var O=this.lastRange;if(O!=null){var w=this.getBounds(O.index,O.length);if(w!=null){var k=this.scroll.length()-1,C=this.scroll.line(Math.min(O.index,k)),R=o(C,1),N=R[0],j=N;if(O.length>0){var H=this.scroll.line(Math.min(O.index+O.length,k)),U=o(H,1);j=U[0]}if(!(N==null||j==null)){var q=P.getBoundingClientRect();w.top<q.top?P.scrollTop-=q.top-w.top:w.bottom>q.bottom&&(P.scrollTop+=w.bottom-q.bottom)}}}}},{key:"setNativeRange",value:function(P,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:P,k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:O,C=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(m.info("setNativeRange",P,O,w,k),!(P!=null&&(this.root.parentNode==null||P.parentNode==null||w.parentNode==null))){var R=document.getSelection();if(R!=null)if(P!=null){this.hasFocus()||this.root.focus();var N=(this.getNativeRange()||{}).native;if(N==null||C||P!==N.startContainer||O!==N.startOffset||w!==N.endContainer||k!==N.endOffset){P.tagName=="BR"&&(O=[].indexOf.call(P.parentNode.childNodes,P),P=P.parentNode),w.tagName=="BR"&&(k=[].indexOf.call(w.parentNode.childNodes,w),w=w.parentNode);var j=document.createRange();j.setStart(P,O),j.setEnd(w,k),R.removeAllRanges(),R.addRange(j)}}else R.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(P){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:g.default.sources.API;if(typeof O=="string"&&(w=O,O=!1),m.info("setRange",P),P!=null){var k=this.rangeToNative(P);this.setNativeRange.apply(this,y(k).concat([O]))}else this.setNativeRange(null);this.update(w)}},{key:"update",value:function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g.default.sources.USER,O=this.lastRange,w=this.getRange(),k=o(w,2),C=k[0],R=k[1];if(this.lastRange=C,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,l.default)(O,this.lastRange)){var N;!this.composing&&R!=null&&R.native.collapsed&&R.start.node!==this.cursor.textNode&&this.cursor.restore();var j=[g.default.events.SELECTION_CHANGE,(0,f.default)(this.lastRange),(0,f.default)(O),P];if((N=this.emitter).emit.apply(N,[g.default.events.EDITOR_CHANGE].concat(j)),P!==g.default.sources.SILENT){var H;(H=this.emitter).emit.apply(H,j)}}}}]),D}();function T(D,I){try{I.parentNode}catch{return!1}return I instanceof Text&&(I=I.parentNode),D.contains(I)}e.Range=x,e.default=S},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function g(h,v){for(var b=0;b<v.length;b++){var y=v[b];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}return function(h,v,b){return v&&g(h.prototype,v),b&&g(h,b),h}}(),s=function g(h,v,b){h===null&&(h=Function.prototype);var y=Object.getOwnPropertyDescriptor(h,v);if(y===void 0){var E=Object.getPrototypeOf(h);return E===null?void 0:g(E,v,b)}else{if("value"in y)return y.value;var m=y.get;return m===void 0?void 0:m.call(b)}},u=r(0),_=p(u);function p(g){return g&&g.__esModule?g:{default:g}}function f(g,h){if(!(g instanceof h))throw new TypeError("Cannot call a class as a function")}function c(g,h){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:g}function l(g,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);g.prototype=Object.create(h&&h.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(g,h):g.__proto__=h)}var d=function(g){l(h,g);function h(){return f(this,h),c(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return o(h,[{key:"insertInto",value:function(b,y){b.children.length===0?s(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"insertInto",this).call(this,b,y):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),h}(_.default.Embed);d.blotName="break",d.tagName="BR",e.default=d},function(t,e,r){var o=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,d){l.__proto__=d}||function(l,d){for(var g in d)d.hasOwnProperty(g)&&(l[g]=d[g])};return function(l,d){c(l,d);function g(){this.constructor=l}l.prototype=d===null?Object.create(d):(g.prototype=d.prototype,new g)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(44),u=r(30),_=r(1),p=function(c){o(l,c);function l(d){var g=c.call(this,d)||this;return g.build(),g}return l.prototype.appendChild=function(d){this.insertBefore(d)},l.prototype.attach=function(){c.prototype.attach.call(this),this.children.forEach(function(d){d.attach()})},l.prototype.build=function(){var d=this;this.children=new s.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(g){try{var h=f(g);d.insertBefore(h,d.children.head||void 0)}catch(v){if(v instanceof _.ParchmentError)return;throw v}})},l.prototype.deleteAt=function(d,g){if(d===0&&g===this.length())return this.remove();this.children.forEachAt(d,g,function(h,v,b){h.deleteAt(v,b)})},l.prototype.descendant=function(d,g){var h=this.children.find(g),v=h[0],b=h[1];return d.blotName==null&&d(v)||d.blotName!=null&&v instanceof d?[v,b]:v instanceof l?v.descendant(d,b):[null,-1]},l.prototype.descendants=function(d,g,h){g===void 0&&(g=0),h===void 0&&(h=Number.MAX_VALUE);var v=[],b=h;return this.children.forEachAt(g,h,function(y,E,m){(d.blotName==null&&d(y)||d.blotName!=null&&y instanceof d)&&v.push(y),y instanceof l&&(v=v.concat(y.descendants(d,E,b))),b-=m}),v},l.prototype.detach=function(){this.children.forEach(function(d){d.detach()}),c.prototype.detach.call(this)},l.prototype.formatAt=function(d,g,h,v){this.children.forEachAt(d,g,function(b,y,E){b.formatAt(y,E,h,v)})},l.prototype.insertAt=function(d,g,h){var v=this.children.find(d),b=v[0],y=v[1];if(b)b.insertAt(y,g,h);else{var E=h==null?_.create("text",g):_.create(g,h);this.appendChild(E)}},l.prototype.insertBefore=function(d,g){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(h){return d instanceof h}))throw new _.ParchmentError("Cannot insert "+d.statics.blotName+" into "+this.statics.blotName);d.insertInto(this,g)},l.prototype.length=function(){return this.children.reduce(function(d,g){return d+g.length()},0)},l.prototype.moveChildren=function(d,g){this.children.forEach(function(h){d.insertBefore(h,g)})},l.prototype.optimize=function(d){if(c.prototype.optimize.call(this,d),this.children.length===0)if(this.statics.defaultChild!=null){var g=_.create(this.statics.defaultChild);this.appendChild(g),g.optimize(d)}else this.remove()},l.prototype.path=function(d,g){g===void 0&&(g=!1);var h=this.children.find(d,g),v=h[0],b=h[1],y=[[this,d]];return v instanceof l?y.concat(v.path(b,g)):(v!=null&&y.push([v,b]),y)},l.prototype.removeChild=function(d){this.children.remove(d)},l.prototype.replace=function(d){d instanceof l&&d.moveChildren(this),c.prototype.replace.call(this,d)},l.prototype.split=function(d,g){if(g===void 0&&(g=!1),!g){if(d===0)return this;if(d===this.length())return this.next}var h=this.clone();return this.parent.insertBefore(h,this.next),this.children.forEachAt(d,this.length(),function(v,b,y){v=v.split(b,g),h.appendChild(v)}),h},l.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},l.prototype.update=function(d,g){var h=this,v=[],b=[];d.forEach(function(y){y.target===h.domNode&&y.type==="childList"&&(v.push.apply(v,y.addedNodes),b.push.apply(b,y.removedNodes))}),b.forEach(function(y){if(!(y.parentNode!=null&&y.tagName!=="IFRAME"&&document.body.compareDocumentPosition(y)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var E=_.find(y);E!=null&&(E.domNode.parentNode==null||E.domNode.parentNode===h.domNode)&&E.detach()}}),v.filter(function(y){return y.parentNode==h.domNode}).sort(function(y,E){return y===E?0:y.compareDocumentPosition(E)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(y){var E=null;y.nextSibling!=null&&(E=_.find(y.nextSibling));var m=f(y);(m.next!=E||m.next==null)&&(m.parent!=null&&m.parent.removeChild(h),h.insertBefore(m,E||void 0))})},l}(u.default);function f(c){var l=_.find(c);if(l==null)try{l=_.create(c)}catch{l=_.create(_.Scope.INLINE),[].slice.call(c.childNodes).forEach(function(g){l.domNode.appendChild(g)}),c.parentNode&&c.parentNode.replaceChild(l.domNode,c),l.attach()}return l}e.default=p},function(t,e,r){var o=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,d){l.__proto__=d}||function(l,d){for(var g in d)d.hasOwnProperty(g)&&(l[g]=d[g])};return function(l,d){c(l,d);function g(){this.constructor=l}l.prototype=d===null?Object.create(d):(g.prototype=d.prototype,new g)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(12),u=r(31),_=r(17),p=r(1),f=function(c){o(l,c);function l(d){var g=c.call(this,d)||this;return g.attributes=new u.default(g.domNode),g}return l.formats=function(d){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return d.tagName.toLowerCase()},l.prototype.format=function(d,g){var h=p.query(d);h instanceof s.default?this.attributes.attribute(h,g):g&&h!=null&&(d!==this.statics.blotName||this.formats()[d]!==g)&&this.replaceWith(d,g)},l.prototype.formats=function(){var d=this.attributes.values(),g=this.statics.formats(this.domNode);return g!=null&&(d[this.statics.blotName]=g),d},l.prototype.replaceWith=function(d,g){var h=c.prototype.replaceWith.call(this,d,g);return this.attributes.copy(h),h},l.prototype.update=function(d,g){var h=this;c.prototype.update.call(this,d,g),d.some(function(v){return v.target===h.domNode&&v.type==="attributes"})&&this.attributes.build()},l.prototype.wrap=function(d,g){var h=c.prototype.wrap.call(this,d,g);return h instanceof l&&h.statics.scope===this.statics.scope&&this.attributes.move(h),h},l}(_.default);e.default=f},function(t,e,r){var o=this&&this.__extends||function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,c){f.__proto__=c}||function(f,c){for(var l in c)c.hasOwnProperty(l)&&(f[l]=c[l])};return function(f,c){p(f,c);function l(){this.constructor=f}f.prototype=c===null?Object.create(c):(l.prototype=c.prototype,new l)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(30),u=r(1),_=function(p){o(f,p);function f(){return p!==null&&p.apply(this,arguments)||this}return f.value=function(c){return!0},f.prototype.index=function(c,l){return this.domNode===c||this.domNode.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(l,1):-1},f.prototype.position=function(c,l){var d=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return c>0&&(d+=1),[this.parent.domNode,d]},f.prototype.value=function(){var c;return c={},c[this.statics.blotName]=this.statics.value(this.domNode)||!0,c},f.scope=u.Scope.INLINE_BLOT,f}(s.default);e.default=_},function(t,e,r){var o=r(11),s=r(3),u={attributes:{compose:function(p,f,c){typeof p!="object"&&(p={}),typeof f!="object"&&(f={});var l=s(!0,{},f);c||(l=Object.keys(l).reduce(function(g,h){return l[h]!=null&&(g[h]=l[h]),g},{}));for(var d in p)p[d]!==void 0&&f[d]===void 0&&(l[d]=p[d]);return Object.keys(l).length>0?l:void 0},diff:function(p,f){typeof p!="object"&&(p={}),typeof f!="object"&&(f={});var c=Object.keys(p).concat(Object.keys(f)).reduce(function(l,d){return o(p[d],f[d])||(l[d]=f[d]===void 0?null:f[d]),l},{});return Object.keys(c).length>0?c:void 0},transform:function(p,f,c){if(typeof p!="object")return f;if(typeof f=="object"){if(!c)return f;var l=Object.keys(f).reduce(function(d,g){return p[g]===void 0&&(d[g]=f[g]),d},{});return Object.keys(l).length>0?l:void 0}}},iterator:function(p){return new _(p)},length:function(p){return typeof p.delete=="number"?p.delete:typeof p.retain=="number"?p.retain:typeof p.insert=="string"?p.insert.length:1}};function _(p){this.ops=p,this.index=0,this.offset=0}_.prototype.hasNext=function(){return this.peekLength()<1/0},_.prototype.next=function(p){p||(p=1/0);var f=this.ops[this.index];if(f){var c=this.offset,l=u.length(f);if(p>=l-c?(p=l-c,this.index+=1,this.offset=0):this.offset+=p,typeof f.delete=="number")return{delete:p};var d={};return f.attributes&&(d.attributes=f.attributes),typeof f.retain=="number"?d.retain=p:typeof f.insert=="string"?d.insert=f.insert.substr(c,p):d.insert=f.insert,d}else return{retain:1/0}},_.prototype.peek=function(){return this.ops[this.index]},_.prototype.peekLength=function(){return this.ops[this.index]?u.length(this.ops[this.index])-this.offset:1/0},_.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},_.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var p=this.offset,f=this.index,c=this.next(),l=this.ops.slice(this.index);return this.offset=p,this.index=f,[c].concat(l)}else return[]},t.exports=u},function(t,e){var r=function(){function o(h,v){return v!=null&&h instanceof v}var s;try{s=Map}catch{s=function(){}}var u;try{u=Set}catch{u=function(){}}var _;try{_=Promise}catch{_=function(){}}function p(h,v,b,y,E){typeof v=="object"&&(b=v.depth,y=v.prototype,E=v.includeNonEnumerable,v=v.circular);var m=[],x=[],S=typeof Buffer!="undefined";typeof v=="undefined"&&(v=!0),typeof b=="undefined"&&(b=1/0);function T(D,I){if(D===null)return null;if(I===0)return D;var P,O;if(typeof D!="object")return D;if(o(D,s))P=new s;else if(o(D,u))P=new u;else if(o(D,_))P=new _(function(q,A){D.then(function(M){q(T(M,I-1))},function(M){A(T(M,I-1))})});else if(p.__isArray(D))P=[];else if(p.__isRegExp(D))P=new RegExp(D.source,g(D)),D.lastIndex&&(P.lastIndex=D.lastIndex);else if(p.__isDate(D))P=new Date(D.getTime());else{if(S&&Buffer.isBuffer(D))return Buffer.allocUnsafe?P=Buffer.allocUnsafe(D.length):P=new Buffer(D.length),D.copy(P),P;o(D,Error)?P=Object.create(D):typeof y=="undefined"?(O=Object.getPrototypeOf(D),P=Object.create(O)):(P=Object.create(y),O=y)}if(v){var w=m.indexOf(D);if(w!=-1)return x[w];m.push(D),x.push(P)}o(D,s)&&D.forEach(function(q,A){var M=T(A,I-1),L=T(q,I-1);P.set(M,L)}),o(D,u)&&D.forEach(function(q){var A=T(q,I-1);P.add(A)});for(var k in D){var C;O&&(C=Object.getOwnPropertyDescriptor(O,k)),!(C&&C.set==null)&&(P[k]=T(D[k],I-1))}if(Object.getOwnPropertySymbols)for(var R=Object.getOwnPropertySymbols(D),k=0;k<R.length;k++){var N=R[k],j=Object.getOwnPropertyDescriptor(D,N);j&&!j.enumerable&&!E||(P[N]=T(D[N],I-1),j.enumerable||Object.defineProperty(P,N,{enumerable:!1}))}if(E)for(var H=Object.getOwnPropertyNames(D),k=0;k<H.length;k++){var U=H[k],j=Object.getOwnPropertyDescriptor(D,U);j&&j.enumerable||(P[U]=T(D[U],I-1),Object.defineProperty(P,U,{enumerable:!1}))}return P}return T(h,b)}p.clonePrototype=function(v){if(v===null)return null;var b=function(){};return b.prototype=v,new b};function f(h){return Object.prototype.toString.call(h)}p.__objToStr=f;function c(h){return typeof h=="object"&&f(h)==="[object Date]"}p.__isDate=c;function l(h){return typeof h=="object"&&f(h)==="[object Array]"}p.__isArray=l;function d(h){return typeof h=="object"&&f(h)==="[object RegExp]"}p.__isRegExp=d;function g(h){var v="";return h.global&&(v+="g"),h.ignoreCase&&(v+="i"),h.multiline&&(v+="m"),v}return p.__getRegExpFlags=g,p}();typeof t=="object"&&t.exports&&(t.exports=r)},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function P(O,w){var k=[],C=!0,R=!1,N=void 0;try{for(var j=O[Symbol.iterator](),H;!(C=(H=j.next()).done)&&(k.push(H.value),!(w&&k.length===w));C=!0);}catch(U){R=!0,N=U}finally{try{!C&&j.return&&j.return()}finally{if(R)throw N}}return k}return function(O,w){if(Array.isArray(O))return O;if(Symbol.iterator in Object(O))return P(O,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function P(O,w){for(var k=0;k<w.length;k++){var C=w[k];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(O,C.key,C)}}return function(O,w,k){return w&&P(O.prototype,w),k&&P(O,k),O}}(),u=function P(O,w,k){O===null&&(O=Function.prototype);var C=Object.getOwnPropertyDescriptor(O,w);if(C===void 0){var R=Object.getPrototypeOf(O);return R===null?void 0:P(R,w,k)}else{if("value"in C)return C.value;var N=C.get;return N===void 0?void 0:N.call(k)}},_=r(0),p=m(_),f=r(8),c=m(f),l=r(4),d=m(l),g=r(16),h=m(g),v=r(13),b=m(v),y=r(25),E=m(y);function m(P){return P&&P.__esModule?P:{default:P}}function x(P,O){if(!(P instanceof O))throw new TypeError("Cannot call a class as a function")}function S(P,O){if(!P)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O&&(typeof O=="object"||typeof O=="function")?O:P}function T(P,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);P.prototype=Object.create(O&&O.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(P,O):P.__proto__=O)}function D(P){return P instanceof d.default||P instanceof l.BlockEmbed}var I=function(P){T(O,P);function O(w,k){x(this,O);var C=S(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,w));return C.emitter=k.emitter,Array.isArray(k.whitelist)&&(C.whitelist=k.whitelist.reduce(function(R,N){return R[N]=!0,R},{})),C.domNode.addEventListener("DOMNodeInserted",function(){}),C.optimize(),C.enable(),C}return s(O,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(k,C){var R=this.line(k),N=o(R,2),j=N[0],H=N[1],U=this.line(k+C),q=o(U,1),A=q[0];if(u(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"deleteAt",this).call(this,k,C),A!=null&&j!==A&&H>0){if(j instanceof l.BlockEmbed||A instanceof l.BlockEmbed){this.optimize();return}if(j instanceof b.default){var M=j.newlineIndex(j.length(),!0);if(M>-1&&(j=j.split(M+1),j===A)){this.optimize();return}}else if(A instanceof b.default){var L=A.newlineIndex(0);L>-1&&A.split(L+1)}var W=A.children.head instanceof h.default?null:A.children.head;j.moveChildren(A,W),j.remove()}this.optimize()}},{key:"enable",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.domNode.setAttribute("contenteditable",k)}},{key:"formatAt",value:function(k,C,R,N){this.whitelist!=null&&!this.whitelist[R]||(u(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"formatAt",this).call(this,k,C,R,N),this.optimize())}},{key:"insertAt",value:function(k,C,R){if(!(R!=null&&this.whitelist!=null&&!this.whitelist[C])){if(k>=this.length())if(R==null||p.default.query(C,p.default.Scope.BLOCK)==null){var N=p.default.create(this.statics.defaultChild);this.appendChild(N),R==null&&C.endsWith(`
`)&&(C=C.slice(0,-1)),N.insertAt(0,C,R)}else{var j=p.default.create(C,R);this.appendChild(j)}else u(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"insertAt",this).call(this,k,C,R);this.optimize()}}},{key:"insertBefore",value:function(k,C){if(k.statics.scope===p.default.Scope.INLINE_BLOT){var R=p.default.create(this.statics.defaultChild);R.appendChild(k),k=R}u(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"insertBefore",this).call(this,k,C)}},{key:"leaf",value:function(k){return this.path(k).pop()||[null,-1]}},{key:"line",value:function(k){return k===this.length()?this.line(k-1):this.descendant(D,k)}},{key:"lines",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,R=function N(j,H,U){var q=[],A=U;return j.children.forEachAt(H,U,function(M,L,W){D(M)?q.push(M):M instanceof p.default.Container&&(q=q.concat(N(M,L,A))),A-=W}),q};return R(this,k,C)}},{key:"optimize",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(u(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"optimize",this).call(this,k,C),k.length>0&&this.emitter.emit(c.default.events.SCROLL_OPTIMIZE,k,C))}},{key:"path",value:function(k){return u(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"path",this).call(this,k).slice(1)}},{key:"update",value:function(k){if(this.batch!==!0){var C=c.default.sources.USER;typeof k=="string"&&(C=k),Array.isArray(k)||(k=this.observer.takeRecords()),k.length>0&&this.emitter.emit(c.default.events.SCROLL_BEFORE_UPDATE,C,k),u(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"update",this).call(this,k.concat([])),k.length>0&&this.emitter.emit(c.default.events.SCROLL_UPDATE,C,k)}}}]),O}(p.default.Scroll);I.blotName="scroll",I.className="ql-editor",I.tagName="DIV",I.defaultChild="block",I.allowedChildren=[d.default,l.BlockEmbed,E.default],e.default=I},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},s=function(){function B($,F){var G=[],V=!0,J=!1,ee=void 0;try{for(var te=$[Symbol.iterator](),ie;!(V=(ie=te.next()).done)&&(G.push(ie.value),!(F&&G.length===F));V=!0);}catch(ae){J=!0,ee=ae}finally{try{!V&&te.return&&te.return()}finally{if(J)throw ee}}return G}return function($,F){if(Array.isArray($))return $;if(Symbol.iterator in Object($))return B($,F);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function B($,F){for(var G=0;G<F.length;G++){var V=F[G];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty($,V.key,V)}}return function($,F,G){return F&&B($.prototype,F),G&&B($,G),$}}(),_=r(21),p=P(_),f=r(11),c=P(f),l=r(3),d=P(l),g=r(2),h=P(g),v=r(20),b=P(v),y=r(0),E=P(y),m=r(5),x=P(m),S=r(10),T=P(S),D=r(9),I=P(D);function P(B){return B&&B.__esModule?B:{default:B}}function O(B,$,F){return $ in B?Object.defineProperty(B,$,{value:F,enumerable:!0,configurable:!0,writable:!0}):B[$]=F,B}function w(B,$){if(!(B instanceof $))throw new TypeError("Cannot call a class as a function")}function k(B,$){if(!B)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return $&&(typeof $=="object"||typeof $=="function")?$:B}function C(B,$){if(typeof $!="function"&&$!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof $);B.prototype=Object.create($&&$.prototype,{constructor:{value:B,enumerable:!1,writable:!0,configurable:!0}}),$&&(Object.setPrototypeOf?Object.setPrototypeOf(B,$):B.__proto__=$)}var R=(0,T.default)("quill:keyboard"),N=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",j=function(B){C($,B),u($,null,[{key:"match",value:function(G,V){return V=K(V),["altKey","ctrlKey","metaKey","shiftKey"].some(function(J){return!!V[J]!==G[J]&&V[J]!==null})?!1:V.key===(G.which||G.keyCode)}}]);function $(F,G){w(this,$);var V=k(this,($.__proto__||Object.getPrototypeOf($)).call(this,F,G));return V.bindings={},Object.keys(V.options.bindings).forEach(function(J){J==="list autofill"&&F.scroll.whitelist!=null&&!F.scroll.whitelist.list||V.options.bindings[J]&&V.addBinding(V.options.bindings[J])}),V.addBinding({key:$.keys.ENTER,shiftKey:null},M),V.addBinding({key:$.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(V.addBinding({key:$.keys.BACKSPACE},{collapsed:!0},U),V.addBinding({key:$.keys.DELETE},{collapsed:!0},q)):(V.addBinding({key:$.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},U),V.addBinding({key:$.keys.DELETE},{collapsed:!0,suffix:/^.?$/},q)),V.addBinding({key:$.keys.BACKSPACE},{collapsed:!1},A),V.addBinding({key:$.keys.DELETE},{collapsed:!1},A),V.addBinding({key:$.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},U),V.listen(),V}return u($,[{key:"addBinding",value:function(G){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},J=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},ee=K(G);if(ee==null||ee.key==null)return R.warn("Attempted to add invalid keyboard binding",ee);typeof V=="function"&&(V={handler:V}),typeof J=="function"&&(J={handler:J}),ee=(0,d.default)(ee,V,J),this.bindings[ee.key]=this.bindings[ee.key]||[],this.bindings[ee.key].push(ee)}},{key:"listen",value:function(){var G=this;this.quill.root.addEventListener("keydown",function(V){if(!V.defaultPrevented){var J=V.which||V.keyCode,ee=(G.bindings[J]||[]).filter(function(le){return $.match(V,le)});if(ee.length!==0){var te=G.quill.getSelection();if(!(te==null||!G.quill.hasFocus())){var ie=G.quill.getLine(te.index),ae=s(ie,2),ce=ae[0],ue=ae[1],z=G.quill.getLeaf(te.index),Q=s(z,2),X=Q[0],Z=Q[1],Y=te.length===0?[X,Z]:G.quill.getLeaf(te.index+te.length),ne=s(Y,2),re=ne[0],oe=ne[1],de=X instanceof E.default.Text?X.value().slice(0,Z):"",fe=re instanceof E.default.Text?re.value().slice(oe):"",se={collapsed:te.length===0,empty:te.length===0&&ce.length()<=1,format:G.quill.getFormat(te),offset:ue,prefix:de,suffix:fe},ye=ee.some(function(le){if(le.collapsed!=null&&le.collapsed!==se.collapsed||le.empty!=null&&le.empty!==se.empty||le.offset!=null&&le.offset!==se.offset)return!1;if(Array.isArray(le.format)){if(le.format.every(function(_e){return se.format[_e]==null}))return!1}else if(o(le.format)==="object"&&!Object.keys(le.format).every(function(_e){return le.format[_e]===!0?se.format[_e]!=null:le.format[_e]===!1?se.format[_e]==null:(0,c.default)(le.format[_e],se.format[_e])}))return!1;return le.prefix!=null&&!le.prefix.test(se.prefix)||le.suffix!=null&&!le.suffix.test(se.suffix)?!1:le.handler.call(G,te,se)!==!0});ye&&V.preventDefault()}}}})}}]),$}(I.default);j.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},j.DEFAULTS={bindings:{bold:W("bold"),italic:W("italic"),underline:W("underline"),indent:{key:j.keys.TAB,format:["blockquote","indent","list"],handler:function($,F){if(F.collapsed&&F.offset!==0)return!0;this.quill.format("indent","+1",x.default.sources.USER)}},outdent:{key:j.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function($,F){if(F.collapsed&&F.offset!==0)return!0;this.quill.format("indent","-1",x.default.sources.USER)}},"outdent backspace":{key:j.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function($,F){F.format.indent!=null?this.quill.format("indent","-1",x.default.sources.USER):F.format.list!=null&&this.quill.format("list",!1,x.default.sources.USER)}},"indent code-block":L(!0),"outdent code-block":L(!1),"remove tab":{key:j.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function($){this.quill.deleteText($.index-1,1,x.default.sources.USER)}},tab:{key:j.keys.TAB,handler:function($){this.quill.history.cutoff();var F=new h.default().retain($.index).delete($.length).insert("	");this.quill.updateContents(F,x.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection($.index+1,x.default.sources.SILENT)}},"list empty enter":{key:j.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function($,F){this.quill.format("list",!1,x.default.sources.USER),F.format.indent&&this.quill.format("indent",!1,x.default.sources.USER)}},"checklist enter":{key:j.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function($){var F=this.quill.getLine($.index),G=s(F,2),V=G[0],J=G[1],ee=(0,d.default)({},V.formats(),{list:"checked"}),te=new h.default().retain($.index).insert(`
`,ee).retain(V.length()-J-1).retain(1,{list:"unchecked"});this.quill.updateContents(te,x.default.sources.USER),this.quill.setSelection($.index+1,x.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:j.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function($,F){var G=this.quill.getLine($.index),V=s(G,2),J=V[0],ee=V[1],te=new h.default().retain($.index).insert(`
`,F.format).retain(J.length()-ee-1).retain(1,{header:null});this.quill.updateContents(te,x.default.sources.USER),this.quill.setSelection($.index+1,x.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function($,F){var G=F.prefix.length,V=this.quill.getLine($.index),J=s(V,2),ee=J[0],te=J[1];if(te>G)return!0;var ie=void 0;switch(F.prefix.trim()){case"[]":case"[ ]":ie="unchecked";break;case"[x]":ie="checked";break;case"-":case"*":ie="bullet";break;default:ie="ordered"}this.quill.insertText($.index," ",x.default.sources.USER),this.quill.history.cutoff();var ae=new h.default().retain($.index-te).delete(G+1).retain(ee.length()-2-te).retain(1,{list:ie});this.quill.updateContents(ae,x.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection($.index-G,x.default.sources.SILENT)}},"code exit":{key:j.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function($){var F=this.quill.getLine($.index),G=s(F,2),V=G[0],J=G[1],ee=new h.default().retain($.index+V.length()-J-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(ee,x.default.sources.USER)}},"embed left":H(j.keys.LEFT,!1),"embed left shift":H(j.keys.LEFT,!0),"embed right":H(j.keys.RIGHT,!1),"embed right shift":H(j.keys.RIGHT,!0)}};function H(B,$){var F,G=B===j.keys.LEFT?"prefix":"suffix";return F={key:B,shiftKey:$,altKey:null},O(F,G,/^$/),O(F,"handler",function(J){var ee=J.index;B===j.keys.RIGHT&&(ee+=J.length+1);var te=this.quill.getLeaf(ee),ie=s(te,1),ae=ie[0];return ae instanceof E.default.Embed?(B===j.keys.LEFT?$?this.quill.setSelection(J.index-1,J.length+1,x.default.sources.USER):this.quill.setSelection(J.index-1,x.default.sources.USER):$?this.quill.setSelection(J.index,J.length+1,x.default.sources.USER):this.quill.setSelection(J.index+J.length+1,x.default.sources.USER),!1):!0}),F}function U(B,$){if(!(B.index===0||this.quill.getLength()<=1)){var F=this.quill.getLine(B.index),G=s(F,1),V=G[0],J={};if($.offset===0){var ee=this.quill.getLine(B.index-1),te=s(ee,1),ie=te[0];if(ie!=null&&ie.length()>1){var ae=V.formats(),ce=this.quill.getFormat(B.index-1,1);J=b.default.attributes.diff(ae,ce)||{}}}var ue=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test($.prefix)?2:1;this.quill.deleteText(B.index-ue,ue,x.default.sources.USER),Object.keys(J).length>0&&this.quill.formatLine(B.index-ue,ue,J,x.default.sources.USER),this.quill.focus()}}function q(B,$){var F=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test($.suffix)?2:1;if(!(B.index>=this.quill.getLength()-F)){var G={},V=0,J=this.quill.getLine(B.index),ee=s(J,1),te=ee[0];if($.offset>=te.length()-1){var ie=this.quill.getLine(B.index+1),ae=s(ie,1),ce=ae[0];if(ce){var ue=te.formats(),z=this.quill.getFormat(B.index,1);G=b.default.attributes.diff(ue,z)||{},V=ce.length()}}this.quill.deleteText(B.index,F,x.default.sources.USER),Object.keys(G).length>0&&this.quill.formatLine(B.index+V-1,F,G,x.default.sources.USER)}}function A(B){var $=this.quill.getLines(B),F={};if($.length>1){var G=$[0].formats(),V=$[$.length-1].formats();F=b.default.attributes.diff(V,G)||{}}this.quill.deleteText(B,x.default.sources.USER),Object.keys(F).length>0&&this.quill.formatLine(B.index,1,F,x.default.sources.USER),this.quill.setSelection(B.index,x.default.sources.SILENT),this.quill.focus()}function M(B,$){var F=this;B.length>0&&this.quill.scroll.deleteAt(B.index,B.length);var G=Object.keys($.format).reduce(function(V,J){return E.default.query(J,E.default.Scope.BLOCK)&&!Array.isArray($.format[J])&&(V[J]=$.format[J]),V},{});this.quill.insertText(B.index,`
`,G,x.default.sources.USER),this.quill.setSelection(B.index+1,x.default.sources.SILENT),this.quill.focus(),Object.keys($.format).forEach(function(V){G[V]==null&&(Array.isArray($.format[V])||V!=="link"&&F.quill.format(V,$.format[V],x.default.sources.USER))})}function L(B){return{key:j.keys.TAB,shiftKey:!B,format:{"code-block":!0},handler:function(F){var G=E.default.query("code-block"),V=F.index,J=F.length,ee=this.quill.scroll.descendant(G,V),te=s(ee,2),ie=te[0],ae=te[1];if(ie!=null){var ce=this.quill.getIndex(ie),ue=ie.newlineIndex(ae,!0)+1,z=ie.newlineIndex(ce+ae+J),Q=ie.domNode.textContent.slice(ue,z).split(`
`);ae=0,Q.forEach(function(X,Z){B?(ie.insertAt(ue+ae,G.TAB),ae+=G.TAB.length,Z===0?V+=G.TAB.length:J+=G.TAB.length):X.startsWith(G.TAB)&&(ie.deleteAt(ue+ae,G.TAB.length),ae-=G.TAB.length,Z===0?V-=G.TAB.length:J-=G.TAB.length),ae+=X.length+1}),this.quill.update(x.default.sources.USER),this.quill.setSelection(V,J,x.default.sources.SILENT)}}}}function W(B){return{key:B[0].toUpperCase(),shortKey:!0,handler:function(F,G){this.quill.format(B,!G.format[B],x.default.sources.USER)}}}function K(B){if(typeof B=="string"||typeof B=="number")return K({key:B});if((typeof B=="undefined"?"undefined":o(B))==="object"&&(B=(0,p.default)(B,!1)),typeof B.key=="string")if(j.keys[B.key.toUpperCase()]!=null)B.key=j.keys[B.key.toUpperCase()];else if(B.key.length===1)B.key=B.key.toUpperCase().charCodeAt(0);else return null;return B.shortKey&&(B[N]=B.shortKey,delete B.shortKey),B}e.default=j,e.SHORTKEY=N},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function b(y,E){var m=[],x=!0,S=!1,T=void 0;try{for(var D=y[Symbol.iterator](),I;!(x=(I=D.next()).done)&&(m.push(I.value),!(E&&m.length===E));x=!0);}catch(P){S=!0,T=P}finally{try{!x&&D.return&&D.return()}finally{if(S)throw T}}return m}return function(y,E){if(Array.isArray(y))return y;if(Symbol.iterator in Object(y))return b(y,E);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function b(y,E,m){y===null&&(y=Function.prototype);var x=Object.getOwnPropertyDescriptor(y,E);if(x===void 0){var S=Object.getPrototypeOf(y);return S===null?void 0:b(S,E,m)}else{if("value"in x)return x.value;var T=x.get;return T===void 0?void 0:T.call(m)}},u=function(){function b(y,E){for(var m=0;m<E.length;m++){var x=E[m];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(y,x.key,x)}}return function(y,E,m){return E&&b(y.prototype,E),m&&b(y,m),y}}(),_=r(0),p=l(_),f=r(7),c=l(f);function l(b){return b&&b.__esModule?b:{default:b}}function d(b,y){if(!(b instanceof y))throw new TypeError("Cannot call a class as a function")}function g(b,y){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:b}function h(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);b.prototype=Object.create(y&&y.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(b,y):b.__proto__=y)}var v=function(b){h(y,b),u(y,null,[{key:"value",value:function(){}}]);function y(E,m){d(this,y);var x=g(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,E));return x.selection=m,x.textNode=document.createTextNode(y.CONTENTS),x.domNode.appendChild(x.textNode),x._length=0,x}return u(y,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(m,x){if(this._length!==0)return s(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"format",this).call(this,m,x);for(var S=this,T=0;S!=null&&S.statics.scope!==p.default.Scope.BLOCK_BLOT;)T+=S.offset(S.parent),S=S.parent;S!=null&&(this._length=y.CONTENTS.length,S.optimize(),S.formatAt(T,y.CONTENTS.length,m,x),this._length=0)}},{key:"index",value:function(m,x){return m===this.textNode?0:s(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"index",this).call(this,m,x)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){s(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!(this.selection.composing||this.parent==null)){var m=this.textNode,x=this.selection.getNativeRange(),S=void 0,T=void 0,D=void 0;if(x!=null&&x.start.node===m&&x.end.node===m){var I=[m,x.start.offset,x.end.offset];S=I[0],T=I[1],D=I[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==y.CONTENTS){var P=this.textNode.data.split(y.CONTENTS).join("");this.next instanceof c.default?(S=this.next.domNode,this.next.insertAt(0,P),this.textNode.data=y.CONTENTS):(this.textNode.data=P,this.parent.insertBefore(p.default.create(this.textNode),this),this.textNode=document.createTextNode(y.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),T!=null){var O=[T,D].map(function(k){return Math.max(0,Math.min(S.data.length,k-1))}),w=o(O,2);return T=w[0],D=w[1],{startNode:S,startOffset:T,endNode:S,endOffset:D}}}}},{key:"update",value:function(m,x){var S=this;if(m.some(function(D){return D.type==="characterData"&&D.target===S.textNode})){var T=this.restore();T&&(x.range=T)}}},{key:"value",value:function(){return""}}]),y}(p.default.Embed);v.blotName="cursor",v.className="ql-cursor",v.tagName="span",v.CONTENTS="\uFEFF",e.default=v},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),s=p(o),u=r(4),_=p(u);function p(g){return g&&g.__esModule?g:{default:g}}function f(g,h){if(!(g instanceof h))throw new TypeError("Cannot call a class as a function")}function c(g,h){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:g}function l(g,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);g.prototype=Object.create(h&&h.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(g,h):g.__proto__=h)}var d=function(g){l(h,g);function h(){return f(this,h),c(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return h}(s.default.Container);d.allowedChildren=[_.default,u.BlockEmbed,d],e.default=d},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var o=function(){function v(b,y){for(var E=0;E<y.length;E++){var m=y[E];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(b,m.key,m)}}return function(b,y,E){return y&&v(b.prototype,y),E&&v(b,E),b}}(),s=function v(b,y,E){b===null&&(b=Function.prototype);var m=Object.getOwnPropertyDescriptor(b,y);if(m===void 0){var x=Object.getPrototypeOf(b);return x===null?void 0:v(x,y,E)}else{if("value"in m)return m.value;var S=m.get;return S===void 0?void 0:S.call(E)}},u=r(0),_=p(u);function p(v){return v&&v.__esModule?v:{default:v}}function f(v,b){if(!(v instanceof b))throw new TypeError("Cannot call a class as a function")}function c(v,b){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:v}function l(v,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);v.prototype=Object.create(b&&b.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(v,b):v.__proto__=b)}var d=function(v){l(b,v);function b(){return f(this,b),c(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return o(b,[{key:"value",value:function(E){var m=s(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"value",this).call(this,E);return m.startsWith("rgb(")?(m=m.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+m.split(",").map(function(x){return("00"+parseInt(x).toString(16)).slice(-2)}).join("")):m}}]),b}(_.default.Attributor.Style),g=new _.default.Attributor.Class("color","ql-color",{scope:_.default.Scope.INLINE}),h=new d("color","color",{scope:_.default.Scope.INLINE});e.ColorAttributor=d,e.ColorClass=g,e.ColorStyle=h},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var o=function(){function h(v,b){for(var y=0;y<b.length;y++){var E=b[y];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(v,E.key,E)}}return function(v,b,y){return b&&h(v.prototype,b),y&&h(v,y),v}}(),s=function h(v,b,y){v===null&&(v=Function.prototype);var E=Object.getOwnPropertyDescriptor(v,b);if(E===void 0){var m=Object.getPrototypeOf(v);return m===null?void 0:h(m,b,y)}else{if("value"in E)return E.value;var x=E.get;return x===void 0?void 0:x.call(y)}},u=r(6),_=p(u);function p(h){return h&&h.__esModule?h:{default:h}}function f(h,v){if(!(h instanceof v))throw new TypeError("Cannot call a class as a function")}function c(h,v){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:h}function l(h,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);h.prototype=Object.create(v&&v.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(h,v):h.__proto__=v)}var d=function(h){l(v,h);function v(){return f(this,v),c(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return o(v,[{key:"format",value:function(y,E){if(y!==this.statics.blotName||!E)return s(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"format",this).call(this,y,E);E=this.constructor.sanitize(E),this.domNode.setAttribute("href",E)}}],[{key:"create",value:function(y){var E=s(v.__proto__||Object.getPrototypeOf(v),"create",this).call(this,y);return y=this.sanitize(y),E.setAttribute("href",y),E.setAttribute("rel","noopener noreferrer"),E.setAttribute("target","_blank"),E}},{key:"formats",value:function(y){return y.getAttribute("href")}},{key:"sanitize",value:function(y){return g(y,this.PROTOCOL_WHITELIST)?y:this.SANITIZED_URL}}]),v}(_.default);d.blotName="link",d.tagName="A",d.SANITIZED_URL="about:blank",d.PROTOCOL_WHITELIST=["http","https","mailto","tel"];function g(h,v){var b=document.createElement("a");b.href=h;var y=b.href.slice(0,b.href.indexOf(":"));return v.indexOf(y)>-1}e.default=d,e.sanitize=g},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},s=function(){function v(b,y){for(var E=0;E<y.length;E++){var m=y[E];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(b,m.key,m)}}return function(b,y,E){return y&&v(b.prototype,y),E&&v(b,E),b}}(),u=r(23),_=c(u),p=r(107),f=c(p);function c(v){return v&&v.__esModule?v:{default:v}}function l(v,b){if(!(v instanceof b))throw new TypeError("Cannot call a class as a function")}var d=0;function g(v,b){v.setAttribute(b,v.getAttribute(b)!=="true")}var h=function(){function v(b){var y=this;l(this,v),this.select=b,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){y.togglePicker()}),this.label.addEventListener("keydown",function(E){switch(E.keyCode){case _.default.keys.ENTER:y.togglePicker();break;case _.default.keys.ESCAPE:y.escape(),E.preventDefault();break}}),this.select.addEventListener("change",this.update.bind(this))}return s(v,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),g(this.label,"aria-expanded"),g(this.options,"aria-hidden")}},{key:"buildItem",value:function(y){var E=this,m=document.createElement("span");return m.tabIndex="0",m.setAttribute("role","button"),m.classList.add("ql-picker-item"),y.hasAttribute("value")&&m.setAttribute("data-value",y.getAttribute("value")),y.textContent&&m.setAttribute("data-label",y.textContent),m.addEventListener("click",function(){E.selectItem(m,!0)}),m.addEventListener("keydown",function(x){switch(x.keyCode){case _.default.keys.ENTER:E.selectItem(m,!0),x.preventDefault();break;case _.default.keys.ESCAPE:E.escape(),x.preventDefault();break}}),m}},{key:"buildLabel",value:function(){var y=document.createElement("span");return y.classList.add("ql-picker-label"),y.innerHTML=f.default,y.tabIndex="0",y.setAttribute("role","button"),y.setAttribute("aria-expanded","false"),this.container.appendChild(y),y}},{key:"buildOptions",value:function(){var y=this,E=document.createElement("span");E.classList.add("ql-picker-options"),E.setAttribute("aria-hidden","true"),E.tabIndex="-1",E.id="ql-picker-options-"+d,d+=1,this.label.setAttribute("aria-controls",E.id),this.options=E,[].slice.call(this.select.options).forEach(function(m){var x=y.buildItem(m);E.appendChild(x),m.selected===!0&&y.selectItem(x)}),this.container.appendChild(E)}},{key:"buildPicker",value:function(){var y=this;[].slice.call(this.select.attributes).forEach(function(E){y.container.setAttribute(E.name,E.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var y=this;this.close(),setTimeout(function(){return y.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(y){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=this.container.querySelector(".ql-selected");if(y!==m&&(m!=null&&m.classList.remove("ql-selected"),y!=null&&(y.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(y.parentNode.children,y),y.hasAttribute("data-value")?this.label.setAttribute("data-value",y.getAttribute("data-value")):this.label.removeAttribute("data-value"),y.hasAttribute("data-label")?this.label.setAttribute("data-label",y.getAttribute("data-label")):this.label.removeAttribute("data-label"),E))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event=="undefined"?"undefined":o(Event))==="object"){var x=document.createEvent("Event");x.initEvent("change",!0,!0),this.select.dispatchEvent(x)}this.close()}}},{key:"update",value:function(){var y=void 0;if(this.select.selectedIndex>-1){var E=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];y=this.select.options[this.select.selectedIndex],this.selectItem(E)}else this.selectItem(null);var m=y!=null&&y!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",m)}}]),v}();e.default=h},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),s=R(o),u=r(5),_=R(u),p=r(4),f=R(p),c=r(16),l=R(c),d=r(25),g=R(d),h=r(24),v=R(h),b=r(35),y=R(b),E=r(6),m=R(E),x=r(22),S=R(x),T=r(7),D=R(T),I=r(55),P=R(I),O=r(42),w=R(O),k=r(23),C=R(k);function R(N){return N&&N.__esModule?N:{default:N}}_.default.register({"blots/block":f.default,"blots/block/embed":p.BlockEmbed,"blots/break":l.default,"blots/container":g.default,"blots/cursor":v.default,"blots/embed":y.default,"blots/inline":m.default,"blots/scroll":S.default,"blots/text":D.default,"modules/clipboard":P.default,"modules/history":w.default,"modules/keyboard":C.default}),s.default.register(f.default,l.default,v.default,m.default,S.default,D.default),e.default=_.default},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(1),s=function(){function u(_){this.domNode=_,this.domNode[o.DATA_KEY]={blot:this}}return Object.defineProperty(u.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),u.create=function(_){if(this.tagName==null)throw new o.ParchmentError("Blot definition missing tagName");var p;return Array.isArray(this.tagName)?(typeof _=="string"&&(_=_.toUpperCase(),parseInt(_).toString()===_&&(_=parseInt(_))),typeof _=="number"?p=document.createElement(this.tagName[_-1]):this.tagName.indexOf(_)>-1?p=document.createElement(_):p=document.createElement(this.tagName[0])):p=document.createElement(this.tagName),this.className&&p.classList.add(this.className),p},u.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},u.prototype.clone=function(){var _=this.domNode.cloneNode(!1);return o.create(_)},u.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[o.DATA_KEY]},u.prototype.deleteAt=function(_,p){var f=this.isolate(_,p);f.remove()},u.prototype.formatAt=function(_,p,f,c){var l=this.isolate(_,p);if(o.query(f,o.Scope.BLOT)!=null&&c)l.wrap(f,c);else if(o.query(f,o.Scope.ATTRIBUTE)!=null){var d=o.create(this.statics.scope);l.wrap(d),d.format(f,c)}},u.prototype.insertAt=function(_,p,f){var c=f==null?o.create("text",p):o.create(p,f),l=this.split(_);this.parent.insertBefore(c,l)},u.prototype.insertInto=function(_,p){p===void 0&&(p=null),this.parent!=null&&this.parent.children.remove(this);var f=null;_.children.insertBefore(this,p),p!=null&&(f=p.domNode),(this.domNode.parentNode!=_.domNode||this.domNode.nextSibling!=f)&&_.domNode.insertBefore(this.domNode,f),this.parent=_,this.attach()},u.prototype.isolate=function(_,p){var f=this.split(_);return f.split(p),f},u.prototype.length=function(){return 1},u.prototype.offset=function(_){return _===void 0&&(_=this.parent),this.parent==null||this==_?0:this.parent.children.offset(this)+this.parent.offset(_)},u.prototype.optimize=function(_){this.domNode[o.DATA_KEY]!=null&&delete this.domNode[o.DATA_KEY].mutations},u.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},u.prototype.replace=function(_){_.parent!=null&&(_.parent.insertBefore(this,_.next),_.remove())},u.prototype.replaceWith=function(_,p){var f=typeof _=="string"?o.create(_,p):_;return f.replace(this),f},u.prototype.split=function(_,p){return _===0?this:this.next},u.prototype.update=function(_,p){},u.prototype.wrap=function(_,p){var f=typeof _=="string"?o.create(_,p):_;return this.parent!=null&&this.parent.insertBefore(f,this.next),f.appendChild(this),f},u.blotName="abstract",u}();e.default=s},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(12),s=r(32),u=r(33),_=r(1),p=function(){function f(c){this.attributes={},this.domNode=c,this.build()}return f.prototype.attribute=function(c,l){l?c.add(this.domNode,l)&&(c.value(this.domNode)!=null?this.attributes[c.attrName]=c:delete this.attributes[c.attrName]):(c.remove(this.domNode),delete this.attributes[c.attrName])},f.prototype.build=function(){var c=this;this.attributes={};var l=o.default.keys(this.domNode),d=s.default.keys(this.domNode),g=u.default.keys(this.domNode);l.concat(d).concat(g).forEach(function(h){var v=_.query(h,_.Scope.ATTRIBUTE);v instanceof o.default&&(c.attributes[v.attrName]=v)})},f.prototype.copy=function(c){var l=this;Object.keys(this.attributes).forEach(function(d){var g=l.attributes[d].value(l.domNode);c.format(d,g)})},f.prototype.move=function(c){var l=this;this.copy(c),Object.keys(this.attributes).forEach(function(d){l.attributes[d].remove(l.domNode)}),this.attributes={}},f.prototype.values=function(){var c=this;return Object.keys(this.attributes).reduce(function(l,d){return l[d]=c.attributes[d].value(c.domNode),l},{})},f}();e.default=p},function(t,e,r){var o=this&&this.__extends||function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,c){f.__proto__=c}||function(f,c){for(var l in c)c.hasOwnProperty(l)&&(f[l]=c[l])};return function(f,c){p(f,c);function l(){this.constructor=f}f.prototype=c===null?Object.create(c):(l.prototype=c.prototype,new l)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(12);function u(p,f){var c=p.getAttribute("class")||"";return c.split(/\s+/).filter(function(l){return l.indexOf(f+"-")===0})}var _=function(p){o(f,p);function f(){return p!==null&&p.apply(this,arguments)||this}return f.keys=function(c){return(c.getAttribute("class")||"").split(/\s+/).map(function(l){return l.split("-").slice(0,-1).join("-")})},f.prototype.add=function(c,l){return this.canAdd(c,l)?(this.remove(c),c.classList.add(this.keyName+"-"+l),!0):!1},f.prototype.remove=function(c){var l=u(c,this.keyName);l.forEach(function(d){c.classList.remove(d)}),c.classList.length===0&&c.removeAttribute("class")},f.prototype.value=function(c){var l=u(c,this.keyName)[0]||"",d=l.slice(this.keyName.length+1);return this.canAdd(c,d)?d:""},f}(s.default);e.default=_},function(t,e,r){var o=this&&this.__extends||function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,c){f.__proto__=c}||function(f,c){for(var l in c)c.hasOwnProperty(l)&&(f[l]=c[l])};return function(f,c){p(f,c);function l(){this.constructor=f}f.prototype=c===null?Object.create(c):(l.prototype=c.prototype,new l)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(12);function u(p){var f=p.split("-"),c=f.slice(1).map(function(l){return l[0].toUpperCase()+l.slice(1)}).join("");return f[0]+c}var _=function(p){o(f,p);function f(){return p!==null&&p.apply(this,arguments)||this}return f.keys=function(c){return(c.getAttribute("style")||"").split(";").map(function(l){var d=l.split(":");return d[0].trim()})},f.prototype.add=function(c,l){return this.canAdd(c,l)?(c.style[u(this.keyName)]=l,!0):!1},f.prototype.remove=function(c){c.style[u(this.keyName)]="",c.getAttribute("style")||c.removeAttribute("style")},f.prototype.value=function(c){var l=c.style[u(this.keyName)];return this.canAdd(c,l)?l:""},f}(s.default);e.default=_},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function _(p,f){for(var c=0;c<f.length;c++){var l=f[c];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}return function(p,f,c){return f&&_(p.prototype,f),c&&_(p,c),p}}();function s(_,p){if(!(_ instanceof p))throw new TypeError("Cannot call a class as a function")}var u=function(){function _(p,f){s(this,_),this.quill=p,this.options=f,this.modules={}}return o(_,[{key:"init",value:function(){var f=this;Object.keys(this.options.modules).forEach(function(c){f.modules[c]==null&&f.addModule(c)})}},{key:"addModule",value:function(f){var c=this.quill.constructor.import("modules/"+f);return this.modules[f]=new c(this.quill,this.options.modules[f]||{}),this.modules[f]}}]),_}();u.DEFAULTS={modules:{}},u.themes={default:u},e.default=u},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function b(y,E){for(var m=0;m<E.length;m++){var x=E[m];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(y,x.key,x)}}return function(y,E,m){return E&&b(y.prototype,E),m&&b(y,m),y}}(),s=function b(y,E,m){y===null&&(y=Function.prototype);var x=Object.getOwnPropertyDescriptor(y,E);if(x===void 0){var S=Object.getPrototypeOf(y);return S===null?void 0:b(S,E,m)}else{if("value"in x)return x.value;var T=x.get;return T===void 0?void 0:T.call(m)}},u=r(0),_=c(u),p=r(7),f=c(p);function c(b){return b&&b.__esModule?b:{default:b}}function l(b,y){if(!(b instanceof y))throw new TypeError("Cannot call a class as a function")}function d(b,y){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:b}function g(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);b.prototype=Object.create(y&&y.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(b,y):b.__proto__=y)}var h="\uFEFF",v=function(b){g(y,b);function y(E){l(this,y);var m=d(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,E));return m.contentNode=document.createElement("span"),m.contentNode.setAttribute("contenteditable",!1),[].slice.call(m.domNode.childNodes).forEach(function(x){m.contentNode.appendChild(x)}),m.leftGuard=document.createTextNode(h),m.rightGuard=document.createTextNode(h),m.domNode.appendChild(m.leftGuard),m.domNode.appendChild(m.contentNode),m.domNode.appendChild(m.rightGuard),m}return o(y,[{key:"index",value:function(m,x){return m===this.leftGuard?0:m===this.rightGuard?1:s(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"index",this).call(this,m,x)}},{key:"restore",value:function(m){var x=void 0,S=void 0,T=m.data.split(h).join("");if(m===this.leftGuard)if(this.prev instanceof f.default){var D=this.prev.length();this.prev.insertAt(D,T),x={startNode:this.prev.domNode,startOffset:D+T.length}}else S=document.createTextNode(T),this.parent.insertBefore(_.default.create(S),this),x={startNode:S,startOffset:T.length};else m===this.rightGuard&&(this.next instanceof f.default?(this.next.insertAt(0,T),x={startNode:this.next.domNode,startOffset:T.length}):(S=document.createTextNode(T),this.parent.insertBefore(_.default.create(S),this.next),x={startNode:S,startOffset:T.length}));return m.data=h,x}},{key:"update",value:function(m,x){var S=this;m.forEach(function(T){if(T.type==="characterData"&&(T.target===S.leftGuard||T.target===S.rightGuard)){var D=S.restore(T.target);D&&(x.range=D)}})}}]),y}(_.default.Embed);e.default=v},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var o=r(0),s=u(o);function u(l){return l&&l.__esModule?l:{default:l}}var _={scope:s.default.Scope.BLOCK,whitelist:["right","center","justify"]},p=new s.default.Attributor.Attribute("align","align",_),f=new s.default.Attributor.Class("align","ql-align",_),c=new s.default.Attributor.Style("align","text-align",_);e.AlignAttribute=p,e.AlignClass=f,e.AlignStyle=c},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var o=r(0),s=_(o),u=r(26);function _(c){return c&&c.__esModule?c:{default:c}}var p=new s.default.Attributor.Class("background","ql-bg",{scope:s.default.Scope.INLINE}),f=new u.ColorAttributor("background","background-color",{scope:s.default.Scope.INLINE});e.BackgroundClass=p,e.BackgroundStyle=f},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var o=r(0),s=u(o);function u(l){return l&&l.__esModule?l:{default:l}}var _={scope:s.default.Scope.BLOCK,whitelist:["rtl"]},p=new s.default.Attributor.Attribute("direction","dir",_),f=new s.default.Attributor.Class("direction","ql-direction",_),c=new s.default.Attributor.Style("direction","direction",_);e.DirectionAttribute=p,e.DirectionClass=f,e.DirectionStyle=c},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var o=function(){function b(y,E){for(var m=0;m<E.length;m++){var x=E[m];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(y,x.key,x)}}return function(y,E,m){return E&&b(y.prototype,E),m&&b(y,m),y}}(),s=function b(y,E,m){y===null&&(y=Function.prototype);var x=Object.getOwnPropertyDescriptor(y,E);if(x===void 0){var S=Object.getPrototypeOf(y);return S===null?void 0:b(S,E,m)}else{if("value"in x)return x.value;var T=x.get;return T===void 0?void 0:T.call(m)}},u=r(0),_=p(u);function p(b){return b&&b.__esModule?b:{default:b}}function f(b,y){if(!(b instanceof y))throw new TypeError("Cannot call a class as a function")}function c(b,y){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:b}function l(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);b.prototype=Object.create(y&&y.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(b,y):b.__proto__=y)}var d={scope:_.default.Scope.INLINE,whitelist:["serif","monospace"]},g=new _.default.Attributor.Class("font","ql-font",d),h=function(b){l(y,b);function y(){return f(this,y),c(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return o(y,[{key:"value",value:function(m){return s(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"value",this).call(this,m).replace(/["']/g,"")}}]),y}(_.default.Attributor.Style),v=new h("font","font-family",d);e.FontStyle=v,e.FontClass=g},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var o=r(0),s=u(o);function u(f){return f&&f.__esModule?f:{default:f}}var _=new s.default.Attributor.Class("size","ql-size",{scope:s.default.Scope.INLINE,whitelist:["small","large","huge"]}),p=new s.default.Attributor.Style("size","font-size",{scope:s.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=_,e.SizeStyle=p},function(t,e,r){t.exports={align:{"":r(76),center:r(77),right:r(78),justify:r(79)},background:r(80),blockquote:r(81),bold:r(82),clean:r(83),code:r(58),"code-block":r(58),color:r(84),direction:{"":r(85),rtl:r(86)},float:{center:r(87),full:r(88),left:r(89),right:r(90)},formula:r(91),header:{1:r(92),2:r(93)},italic:r(94),image:r(95),indent:{"+1":r(96),"-1":r(97)},link:r(98),list:{ordered:r(99),bullet:r(100),check:r(101)},script:{sub:r(102),super:r(103)},strike:r(104),underline:r(105),video:r(106)}},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var o=function(){function E(m,x){for(var S=0;S<x.length;S++){var T=x[S];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(m,T.key,T)}}return function(m,x,S){return x&&E(m.prototype,x),S&&E(m,S),m}}(),s=r(0),u=l(s),_=r(5),p=l(_),f=r(9),c=l(f);function l(E){return E&&E.__esModule?E:{default:E}}function d(E,m){if(!(E instanceof m))throw new TypeError("Cannot call a class as a function")}function g(E,m){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:E}function h(E,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);E.prototype=Object.create(m&&m.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(E,m):E.__proto__=m)}var v=function(E){h(m,E);function m(x,S){d(this,m);var T=g(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,x,S));return T.lastRecorded=0,T.ignoreChange=!1,T.clear(),T.quill.on(p.default.events.EDITOR_CHANGE,function(D,I,P,O){D!==p.default.events.TEXT_CHANGE||T.ignoreChange||(!T.options.userOnly||O===p.default.sources.USER?T.record(I,P):T.transform(I))}),T.quill.keyboard.addBinding({key:"Z",shortKey:!0},T.undo.bind(T)),T.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},T.redo.bind(T)),/Win/i.test(navigator.platform)&&T.quill.keyboard.addBinding({key:"Y",shortKey:!0},T.redo.bind(T)),T}return o(m,[{key:"change",value:function(S,T){if(this.stack[S].length!==0){var D=this.stack[S].pop();this.stack[T].push(D),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(D[S],p.default.sources.USER),this.ignoreChange=!1;var I=y(D[S]);this.quill.setSelection(I)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(S,T){if(S.ops.length!==0){this.stack.redo=[];var D=this.quill.getContents().diff(T),I=Date.now();if(this.lastRecorded+this.options.delay>I&&this.stack.undo.length>0){var P=this.stack.undo.pop();D=D.compose(P.undo),S=P.redo.compose(S)}else this.lastRecorded=I;this.stack.undo.push({redo:S,undo:D}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(S){this.stack.undo.forEach(function(T){T.undo=S.transform(T.undo,!0),T.redo=S.transform(T.redo,!0)}),this.stack.redo.forEach(function(T){T.undo=S.transform(T.undo,!0),T.redo=S.transform(T.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),m}(c.default);v.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};function b(E){var m=E.ops[E.ops.length-1];return m==null?!1:m.insert!=null?typeof m.insert=="string"&&m.insert.endsWith(`
`):m.attributes!=null?Object.keys(m.attributes).some(function(x){return u.default.query(x,u.default.Scope.BLOCK)!=null}):!1}function y(E){var m=E.reduce(function(S,T){return S+=T.delete||0,S},0),x=E.length()-m;return b(E)&&(x-=1),x}e.default=v,e.getLastChangeIndex=y},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var o=function(){function M(L,W){for(var K=0;K<W.length;K++){var B=W[K];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(L,B.key,B)}}return function(L,W,K){return W&&M(L.prototype,W),K&&M(L,K),L}}(),s=function M(L,W,K){L===null&&(L=Function.prototype);var B=Object.getOwnPropertyDescriptor(L,W);if(B===void 0){var $=Object.getPrototypeOf(L);return $===null?void 0:M($,W,K)}else{if("value"in B)return B.value;var F=B.get;return F===void 0?void 0:F.call(K)}},u=r(3),_=I(u),p=r(2),f=I(p),c=r(8),l=I(c),d=r(23),g=I(d),h=r(34),v=I(h),b=r(59),y=I(b),E=r(60),m=I(E),x=r(28),S=I(x),T=r(61),D=I(T);function I(M){return M&&M.__esModule?M:{default:M}}function P(M,L){if(!(M instanceof L))throw new TypeError("Cannot call a class as a function")}function O(M,L){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L&&(typeof L=="object"||typeof L=="function")?L:M}function w(M,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof L);M.prototype=Object.create(L&&L.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),L&&(Object.setPrototypeOf?Object.setPrototypeOf(M,L):M.__proto__=L)}var k=[!1,"center","right","justify"],C=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],R=[!1,"serif","monospace"],N=["1","2","3",!1],j=["small",!1,"large","huge"],H=function(M){w(L,M);function L(W,K){P(this,L);var B=O(this,(L.__proto__||Object.getPrototypeOf(L)).call(this,W,K)),$=function F(G){if(!document.body.contains(W.root))return document.body.removeEventListener("click",F);B.tooltip!=null&&!B.tooltip.root.contains(G.target)&&document.activeElement!==B.tooltip.textbox&&!B.quill.hasFocus()&&B.tooltip.hide(),B.pickers!=null&&B.pickers.forEach(function(V){V.container.contains(G.target)||V.close()})};return W.emitter.listenDOM("click",document.body,$),B}return o(L,[{key:"addModule",value:function(K){var B=s(L.prototype.__proto__||Object.getPrototypeOf(L.prototype),"addModule",this).call(this,K);return K==="toolbar"&&this.extendToolbar(B),B}},{key:"buildButtons",value:function(K,B){K.forEach(function($){var F=$.getAttribute("class")||"";F.split(/\s+/).forEach(function(G){if(!!G.startsWith("ql-")&&(G=G.slice(3),B[G]!=null))if(G==="direction")$.innerHTML=B[G][""]+B[G].rtl;else if(typeof B[G]=="string")$.innerHTML=B[G];else{var V=$.value||"";V!=null&&B[G][V]&&($.innerHTML=B[G][V])}})})}},{key:"buildPickers",value:function(K,B){var $=this;this.pickers=K.map(function(G){if(G.classList.contains("ql-align"))return G.querySelector("option")==null&&A(G,k),new m.default(G,B.align);if(G.classList.contains("ql-background")||G.classList.contains("ql-color")){var V=G.classList.contains("ql-background")?"background":"color";return G.querySelector("option")==null&&A(G,C,V==="background"?"#ffffff":"#000000"),new y.default(G,B[V])}else return G.querySelector("option")==null&&(G.classList.contains("ql-font")?A(G,R):G.classList.contains("ql-header")?A(G,N):G.classList.contains("ql-size")&&A(G,j)),new S.default(G)});var F=function(){$.pickers.forEach(function(V){V.update()})};this.quill.on(l.default.events.EDITOR_CHANGE,F)}}]),L}(v.default);H.DEFAULTS=(0,_.default)(!0,{},v.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var L=this,W=this.container.querySelector("input.ql-image[type=file]");W==null&&(W=document.createElement("input"),W.setAttribute("type","file"),W.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),W.classList.add("ql-image"),W.addEventListener("change",function(){if(W.files!=null&&W.files[0]!=null){var K=new FileReader;K.onload=function(B){var $=L.quill.getSelection(!0);L.quill.updateContents(new f.default().retain($.index).delete($.length).insert({image:B.target.result}),l.default.sources.USER),L.quill.setSelection($.index+1,l.default.sources.SILENT),W.value=""},K.readAsDataURL(W.files[0])}}),this.container.appendChild(W)),W.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var U=function(M){w(L,M);function L(W,K){P(this,L);var B=O(this,(L.__proto__||Object.getPrototypeOf(L)).call(this,W,K));return B.textbox=B.root.querySelector('input[type="text"]'),B.listen(),B}return o(L,[{key:"listen",value:function(){var K=this;this.textbox.addEventListener("keydown",function(B){g.default.match(B,"enter")?(K.save(),B.preventDefault()):g.default.match(B,"escape")&&(K.cancel(),B.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),B!=null?this.textbox.value=B:K!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+K)||""),this.root.setAttribute("data-mode",K)}},{key:"restoreFocus",value:function(){var K=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=K}},{key:"save",value:function(){var K=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":{var B=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",K,l.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",K,l.default.sources.USER)),this.quill.root.scrollTop=B;break}case"video":K=q(K);case"formula":{if(!K)break;var $=this.quill.getSelection(!0);if($!=null){var F=$.index+$.length;this.quill.insertEmbed(F,this.root.getAttribute("data-mode"),K,l.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(F+1," ",l.default.sources.USER),this.quill.setSelection(F+2,l.default.sources.USER)}break}}this.textbox.value="",this.hide()}}]),L}(D.default);function q(M){var L=M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return L?(L[1]||"https")+"://www.youtube.com/embed/"+L[2]+"?showinfo=0":(L=M.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(L[1]||"https")+"://player.vimeo.com/video/"+L[2]+"/":M}function A(M,L){var W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;L.forEach(function(K){var B=document.createElement("option");K===W?B.setAttribute("selected","selected"):B.setAttribute("value",K),M.appendChild(B)})}e.BaseTooltip=U,e.default=H},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function s(){this.head=this.tail=null,this.length=0}return s.prototype.append=function(){for(var u=[],_=0;_<arguments.length;_++)u[_]=arguments[_];this.insertBefore(u[0],null),u.length>1&&this.append.apply(this,u.slice(1))},s.prototype.contains=function(u){for(var _,p=this.iterator();_=p();)if(_===u)return!0;return!1},s.prototype.insertBefore=function(u,_){!u||(u.next=_,_!=null?(u.prev=_.prev,_.prev!=null&&(_.prev.next=u),_.prev=u,_===this.head&&(this.head=u)):this.tail!=null?(this.tail.next=u,u.prev=this.tail,this.tail=u):(u.prev=null,this.head=this.tail=u),this.length+=1)},s.prototype.offset=function(u){for(var _=0,p=this.head;p!=null;){if(p===u)return _;_+=p.length(),p=p.next}return-1},s.prototype.remove=function(u){!this.contains(u)||(u.prev!=null&&(u.prev.next=u.next),u.next!=null&&(u.next.prev=u.prev),u===this.head&&(this.head=u.next),u===this.tail&&(this.tail=u.prev),this.length-=1)},s.prototype.iterator=function(u){return u===void 0&&(u=this.head),function(){var _=u;return u!=null&&(u=u.next),_}},s.prototype.find=function(u,_){_===void 0&&(_=!1);for(var p,f=this.iterator();p=f();){var c=p.length();if(u<c||_&&u===c&&(p.next==null||p.next.length()!==0))return[p,u];u-=c}return[null,0]},s.prototype.forEach=function(u){for(var _,p=this.iterator();_=p();)u(_)},s.prototype.forEachAt=function(u,_,p){if(!(_<=0))for(var f=this.find(u),c=f[0],l=f[1],d,g=u-l,h=this.iterator(c);(d=h())&&g<u+_;){var v=d.length();u>g?p(d,u-g,Math.min(_,g+v-u)):p(d,0,Math.min(v,u+_-g)),g+=v}},s.prototype.map=function(u){return this.reduce(function(_,p){return _.push(u(p)),_},[])},s.prototype.reduce=function(u,_){for(var p,f=this.iterator();p=f();)_=u(_,p);return _},s}();e.default=o},function(t,e,r){var o=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,d){l.__proto__=d}||function(l,d){for(var g in d)d.hasOwnProperty(g)&&(l[g]=d[g])};return function(l,d){c(l,d);function g(){this.constructor=l}l.prototype=d===null?Object.create(d):(g.prototype=d.prototype,new g)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(17),u=r(1),_={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},p=100,f=function(c){o(l,c);function l(d){var g=c.call(this,d)||this;return g.scroll=g,g.observer=new MutationObserver(function(h){g.update(h)}),g.observer.observe(g.domNode,_),g.attach(),g}return l.prototype.detach=function(){c.prototype.detach.call(this),this.observer.disconnect()},l.prototype.deleteAt=function(d,g){this.update(),d===0&&g===this.length()?this.children.forEach(function(h){h.remove()}):c.prototype.deleteAt.call(this,d,g)},l.prototype.formatAt=function(d,g,h,v){this.update(),c.prototype.formatAt.call(this,d,g,h,v)},l.prototype.insertAt=function(d,g,h){this.update(),c.prototype.insertAt.call(this,d,g,h)},l.prototype.optimize=function(d,g){var h=this;d===void 0&&(d=[]),g===void 0&&(g={}),c.prototype.optimize.call(this,g);for(var v=[].slice.call(this.observer.takeRecords());v.length>0;)d.push(v.pop());for(var b=function(x,S){S===void 0&&(S=!0),!(x==null||x===h)&&x.domNode.parentNode!=null&&(x.domNode[u.DATA_KEY].mutations==null&&(x.domNode[u.DATA_KEY].mutations=[]),S&&b(x.parent))},y=function(x){x.domNode[u.DATA_KEY]==null||x.domNode[u.DATA_KEY].mutations==null||(x instanceof s.default&&x.children.forEach(y),x.optimize(g))},E=d,m=0;E.length>0;m+=1){if(m>=p)throw new Error("[Parchment] Maximum optimize iterations reached");for(E.forEach(function(x){var S=u.find(x.target,!0);S!=null&&(S.domNode===x.target&&(x.type==="childList"?(b(u.find(x.previousSibling,!1)),[].forEach.call(x.addedNodes,function(T){var D=u.find(T,!1);b(D,!1),D instanceof s.default&&D.children.forEach(function(I){b(I,!1)})})):x.type==="attributes"&&b(S.prev)),b(S))}),this.children.forEach(y),E=[].slice.call(this.observer.takeRecords()),v=E.slice();v.length>0;)d.push(v.pop())}},l.prototype.update=function(d,g){var h=this;g===void 0&&(g={}),d=d||this.observer.takeRecords(),d.map(function(v){var b=u.find(v.target,!0);return b==null?null:b.domNode[u.DATA_KEY].mutations==null?(b.domNode[u.DATA_KEY].mutations=[v],b):(b.domNode[u.DATA_KEY].mutations.push(v),null)}).forEach(function(v){v==null||v===h||v.domNode[u.DATA_KEY]==null||v.update(v.domNode[u.DATA_KEY].mutations||[],g)}),this.domNode[u.DATA_KEY].mutations!=null&&c.prototype.update.call(this,this.domNode[u.DATA_KEY].mutations,g),this.optimize(d,g)},l.blotName="scroll",l.defaultChild="block",l.scope=u.Scope.BLOCK_BLOT,l.tagName="DIV",l}(s.default);e.default=f},function(t,e,r){var o=this&&this.__extends||function(){var f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,l){c.__proto__=l}||function(c,l){for(var d in l)l.hasOwnProperty(d)&&(c[d]=l[d])};return function(c,l){f(c,l);function d(){this.constructor=c}c.prototype=l===null?Object.create(l):(d.prototype=l.prototype,new d)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(18),u=r(1);function _(f,c){if(Object.keys(f).length!==Object.keys(c).length)return!1;for(var l in f)if(f[l]!==c[l])return!1;return!0}var p=function(f){o(c,f);function c(){return f!==null&&f.apply(this,arguments)||this}return c.formats=function(l){if(l.tagName!==c.tagName)return f.formats.call(this,l)},c.prototype.format=function(l,d){var g=this;l===this.statics.blotName&&!d?(this.children.forEach(function(h){h instanceof s.default||(h=h.wrap(c.blotName,!0)),g.attributes.copy(h)}),this.unwrap()):f.prototype.format.call(this,l,d)},c.prototype.formatAt=function(l,d,g,h){if(this.formats()[g]!=null||u.query(g,u.Scope.ATTRIBUTE)){var v=this.isolate(l,d);v.format(g,h)}else f.prototype.formatAt.call(this,l,d,g,h)},c.prototype.optimize=function(l){f.prototype.optimize.call(this,l);var d=this.formats();if(Object.keys(d).length===0)return this.unwrap();var g=this.next;g instanceof c&&g.prev===this&&_(d,g.formats())&&(g.moveChildren(this),g.remove())},c.blotName="inline",c.scope=u.Scope.INLINE_BLOT,c.tagName="SPAN",c}(s.default);e.default=p},function(t,e,r){var o=this&&this.__extends||function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,c){f.__proto__=c}||function(f,c){for(var l in c)c.hasOwnProperty(l)&&(f[l]=c[l])};return function(f,c){p(f,c);function l(){this.constructor=f}f.prototype=c===null?Object.create(c):(l.prototype=c.prototype,new l)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(18),u=r(1),_=function(p){o(f,p);function f(){return p!==null&&p.apply(this,arguments)||this}return f.formats=function(c){var l=u.query(f.blotName).tagName;if(c.tagName!==l)return p.formats.call(this,c)},f.prototype.format=function(c,l){u.query(c,u.Scope.BLOCK)!=null&&(c===this.statics.blotName&&!l?this.replaceWith(f.blotName):p.prototype.format.call(this,c,l))},f.prototype.formatAt=function(c,l,d,g){u.query(d,u.Scope.BLOCK)!=null?this.format(d,g):p.prototype.formatAt.call(this,c,l,d,g)},f.prototype.insertAt=function(c,l,d){if(d==null||u.query(l,u.Scope.INLINE)!=null)p.prototype.insertAt.call(this,c,l,d);else{var g=this.split(c),h=u.create(l,d);g.parent.insertBefore(h,g)}},f.prototype.update=function(c,l){navigator.userAgent.match(/Trident/)?this.build():p.prototype.update.call(this,c,l)},f.blotName="block",f.scope=u.Scope.BLOCK_BLOT,f.tagName="P",f}(s.default);e.default=_},function(t,e,r){var o=this&&this.__extends||function(){var _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,f){p.__proto__=f}||function(p,f){for(var c in f)f.hasOwnProperty(c)&&(p[c]=f[c])};return function(p,f){_(p,f);function c(){this.constructor=p}p.prototype=f===null?Object.create(f):(c.prototype=f.prototype,new c)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(19),u=function(_){o(p,_);function p(){return _!==null&&_.apply(this,arguments)||this}return p.formats=function(f){},p.prototype.format=function(f,c){_.prototype.formatAt.call(this,0,this.length(),f,c)},p.prototype.formatAt=function(f,c,l,d){f===0&&c===this.length()?this.format(l,d):_.prototype.formatAt.call(this,f,c,l,d)},p.prototype.formats=function(){return this.statics.formats(this.domNode)},p}(s.default);e.default=u},function(t,e,r){var o=this&&this.__extends||function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,c){f.__proto__=c}||function(f,c){for(var l in c)c.hasOwnProperty(l)&&(f[l]=c[l])};return function(f,c){p(f,c);function l(){this.constructor=f}f.prototype=c===null?Object.create(c):(l.prototype=c.prototype,new l)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r(19),u=r(1),_=function(p){o(f,p);function f(c){var l=p.call(this,c)||this;return l.text=l.statics.value(l.domNode),l}return f.create=function(c){return document.createTextNode(c)},f.value=function(c){var l=c.data;return l.normalize&&(l=l.normalize()),l},f.prototype.deleteAt=function(c,l){this.domNode.data=this.text=this.text.slice(0,c)+this.text.slice(c+l)},f.prototype.index=function(c,l){return this.domNode===c?l:-1},f.prototype.insertAt=function(c,l,d){d==null?(this.text=this.text.slice(0,c)+l+this.text.slice(c),this.domNode.data=this.text):p.prototype.insertAt.call(this,c,l,d)},f.prototype.length=function(){return this.text.length},f.prototype.optimize=function(c){p.prototype.optimize.call(this,c),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof f&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},f.prototype.position=function(c,l){return[this.domNode,c]},f.prototype.split=function(c,l){if(l===void 0&&(l=!1),!l){if(c===0)return this;if(c===this.length())return this.next}var d=u.create(this.domNode.splitText(c));return this.parent.insertBefore(d,this.next),this.text=this.statics.value(this.domNode),d},f.prototype.update=function(c,l){var d=this;c.some(function(g){return g.type==="characterData"&&g.target===d.domNode})&&(this.text=this.statics.value(this.domNode))},f.prototype.value=function(){return this.text},f.blotName="text",f.scope=u.Scope.INLINE_BLOT,f}(s.default);e.default=_},function(t,e,r){var o=document.createElement("div");if(o.classList.toggle("test-class",!1),o.classList.contains("test-class")){var s=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(u,_){return arguments.length>1&&!this.contains(u)==!_?_:s.call(this,u)}}String.prototype.startsWith||(String.prototype.startsWith=function(u,_){return _=_||0,this.substr(_,u.length)===u}),String.prototype.endsWith||(String.prototype.endsWith=function(u,_){var p=this.toString();(typeof _!="number"||!isFinite(_)||Math.floor(_)!==_||_>p.length)&&(_=p.length),_-=u.length;var f=p.indexOf(u,_);return f!==-1&&f===_}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(_){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof _!="function")throw new TypeError("predicate must be a function");for(var p=Object(this),f=p.length>>>0,c=arguments[1],l,d=0;d<f;d++)if(l=p[d],_.call(c,l,d,p))return l}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(t,e){var r=-1,o=1,s=0;function u(m,x,S){if(m==x)return m?[[s,m]]:[];(S<0||m.length<S)&&(S=null);var T=c(m,x),D=m.substring(0,T);m=m.substring(T),x=x.substring(T),T=l(m,x);var I=m.substring(m.length-T);m=m.substring(0,m.length-T),x=x.substring(0,x.length-T);var P=_(m,x);return D&&P.unshift([s,D]),I&&P.push([s,I]),g(P),S!=null&&(P=b(P,S)),P=y(P),P}function _(m,x){var S;if(!m)return[[o,x]];if(!x)return[[r,m]];var T=m.length>x.length?m:x,D=m.length>x.length?x:m,I=T.indexOf(D);if(I!=-1)return S=[[o,T.substring(0,I)],[s,D],[o,T.substring(I+D.length)]],m.length>x.length&&(S[0][0]=S[2][0]=r),S;if(D.length==1)return[[r,m],[o,x]];var P=d(m,x);if(P){var O=P[0],w=P[1],k=P[2],C=P[3],R=P[4],N=u(O,k),j=u(w,C);return N.concat([[s,R]],j)}return p(m,x)}function p(m,x){for(var S=m.length,T=x.length,D=Math.ceil((S+T)/2),I=D,P=2*D,O=new Array(P),w=new Array(P),k=0;k<P;k++)O[k]=-1,w[k]=-1;O[I+1]=0,w[I+1]=0;for(var C=S-T,R=C%2!=0,N=0,j=0,H=0,U=0,q=0;q<D;q++){for(var A=-q+N;A<=q-j;A+=2){var M=I+A,L;A==-q||A!=q&&O[M-1]<O[M+1]?L=O[M+1]:L=O[M-1]+1;for(var W=L-A;L<S&&W<T&&m.charAt(L)==x.charAt(W);)L++,W++;if(O[M]=L,L>S)j+=2;else if(W>T)N+=2;else if(R){var K=I+C-A;if(K>=0&&K<P&&w[K]!=-1){var B=S-w[K];if(L>=B)return f(m,x,L,W)}}}for(var $=-q+H;$<=q-U;$+=2){var K=I+$,B;$==-q||$!=q&&w[K-1]<w[K+1]?B=w[K+1]:B=w[K-1]+1;for(var F=B-$;B<S&&F<T&&m.charAt(S-B-1)==x.charAt(T-F-1);)B++,F++;if(w[K]=B,B>S)U+=2;else if(F>T)H+=2;else if(!R){var M=I+C-$;if(M>=0&&M<P&&O[M]!=-1){var L=O[M],W=I+L-M;if(B=S-B,L>=B)return f(m,x,L,W)}}}}return[[r,m],[o,x]]}function f(m,x,S,T){var D=m.substring(0,S),I=x.substring(0,T),P=m.substring(S),O=x.substring(T),w=u(D,I),k=u(P,O);return w.concat(k)}function c(m,x){if(!m||!x||m.charAt(0)!=x.charAt(0))return 0;for(var S=0,T=Math.min(m.length,x.length),D=T,I=0;S<D;)m.substring(I,D)==x.substring(I,D)?(S=D,I=S):T=D,D=Math.floor((T-S)/2+S);return D}function l(m,x){if(!m||!x||m.charAt(m.length-1)!=x.charAt(x.length-1))return 0;for(var S=0,T=Math.min(m.length,x.length),D=T,I=0;S<D;)m.substring(m.length-D,m.length-I)==x.substring(x.length-D,x.length-I)?(S=D,I=S):T=D,D=Math.floor((T-S)/2+S);return D}function d(m,x){var S=m.length>x.length?m:x,T=m.length>x.length?x:m;if(S.length<4||T.length*2<S.length)return null;function D(j,H,U){for(var q=j.substring(U,U+Math.floor(j.length/4)),A=-1,M="",L,W,K,B;(A=H.indexOf(q,A+1))!=-1;){var $=c(j.substring(U),H.substring(A)),F=l(j.substring(0,U),H.substring(0,A));M.length<F+$&&(M=H.substring(A-F,A)+H.substring(A,A+$),L=j.substring(0,U-F),W=j.substring(U+$),K=H.substring(0,A-F),B=H.substring(A+$))}return M.length*2>=j.length?[L,W,K,B,M]:null}var I=D(S,T,Math.ceil(S.length/4)),P=D(S,T,Math.ceil(S.length/2)),O;if(!I&&!P)return null;P?I?O=I[4].length>P[4].length?I:P:O=P:O=I;var w,k,C,R;m.length>x.length?(w=O[0],k=O[1],C=O[2],R=O[3]):(C=O[0],R=O[1],w=O[2],k=O[3]);var N=O[4];return[w,k,C,R,N]}function g(m){m.push([s,""]);for(var x=0,S=0,T=0,D="",I="",P;x<m.length;)switch(m[x][0]){case o:T++,I+=m[x][1],x++;break;case r:S++,D+=m[x][1],x++;break;case s:S+T>1?(S!==0&&T!==0&&(P=c(I,D),P!==0&&(x-S-T>0&&m[x-S-T-1][0]==s?m[x-S-T-1][1]+=I.substring(0,P):(m.splice(0,0,[s,I.substring(0,P)]),x++),I=I.substring(P),D=D.substring(P)),P=l(I,D),P!==0&&(m[x][1]=I.substring(I.length-P)+m[x][1],I=I.substring(0,I.length-P),D=D.substring(0,D.length-P))),S===0?m.splice(x-T,S+T,[o,I]):T===0?m.splice(x-S,S+T,[r,D]):m.splice(x-S-T,S+T,[r,D],[o,I]),x=x-S-T+(S?1:0)+(T?1:0)+1):x!==0&&m[x-1][0]==s?(m[x-1][1]+=m[x][1],m.splice(x,1)):x++,T=0,S=0,D="",I="";break}m[m.length-1][1]===""&&m.pop();var O=!1;for(x=1;x<m.length-1;)m[x-1][0]==s&&m[x+1][0]==s&&(m[x][1].substring(m[x][1].length-m[x-1][1].length)==m[x-1][1]?(m[x][1]=m[x-1][1]+m[x][1].substring(0,m[x][1].length-m[x-1][1].length),m[x+1][1]=m[x-1][1]+m[x+1][1],m.splice(x-1,1),O=!0):m[x][1].substring(0,m[x+1][1].length)==m[x+1][1]&&(m[x-1][1]+=m[x+1][1],m[x][1]=m[x][1].substring(m[x+1][1].length)+m[x+1][1],m.splice(x+1,1),O=!0)),x++;O&&g(m)}var h=u;h.INSERT=o,h.DELETE=r,h.EQUAL=s,t.exports=h;function v(m,x){if(x===0)return[s,m];for(var S=0,T=0;T<m.length;T++){var D=m[T];if(D[0]===r||D[0]===s){var I=S+D[1].length;if(x===I)return[T+1,m];if(x<I){m=m.slice();var P=x-S,O=[D[0],D[1].slice(0,P)],w=[D[0],D[1].slice(P)];return m.splice(T,1,O,w),[T+1,m]}else S=I}}throw new Error("cursor_pos is out of bounds!")}function b(m,x){var S=v(m,x),T=S[1],D=S[0],I=T[D],P=T[D+1];if(I==null)return m;if(I[0]!==s)return m;if(P!=null&&I[1]+P[1]===P[1]+I[1])return T.splice(D,2,P,I),E(T,D,2);if(P!=null&&P[1].indexOf(I[1])===0){T.splice(D,2,[P[0],I[1]],[0,I[1]]);var O=P[1].slice(I[1].length);return O.length>0&&T.splice(D+2,0,[P[0],O]),E(T,D,3)}else return m}function y(m){for(var x=!1,S=function(P){return P.charCodeAt(0)>=56320&&P.charCodeAt(0)<=57343},T=function(P){return P.charCodeAt(P.length-1)>=55296&&P.charCodeAt(P.length-1)<=56319},D=2;D<m.length;D+=1)m[D-2][0]===s&&T(m[D-2][1])&&m[D-1][0]===r&&S(m[D-1][1])&&m[D][0]===o&&S(m[D][1])&&(x=!0,m[D-1][1]=m[D-2][1].slice(-1)+m[D-1][1],m[D][1]=m[D-2][1].slice(-1)+m[D][1],m[D-2][1]=m[D-2][1].slice(0,-1));if(!x)return m;for(var I=[],D=0;D<m.length;D+=1)m[D][1].length>0&&I.push(m[D]);return I}function E(m,x,S){for(var T=x+S-1;T>=0&&T>=x-1;T--)if(T+1<m.length){var D=m[T],I=m[T+1];D[0]===I[1]&&m.splice(T,2,[D[0],D[1]+I[1]])}return m}},function(t,e){e=t.exports=typeof Object.keys=="function"?Object.keys:r,e.shim=r;function r(o){var s=[];for(var u in o)s.push(u);return s}},function(t,e){var r=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";e=t.exports=r?o:s,e.supported=o;function o(u){return Object.prototype.toString.call(u)=="[object Arguments]"}e.unsupported=s;function s(u){return u&&typeof u=="object"&&typeof u.length=="number"&&Object.prototype.hasOwnProperty.call(u,"callee")&&!Object.prototype.propertyIsEnumerable.call(u,"callee")||!1}},function(t,e){var r=Object.prototype.hasOwnProperty,o="~";function s(){}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(o=!1));function u(p,f,c){this.fn=p,this.context=f,this.once=c||!1}function _(){this._events=new s,this._eventsCount=0}_.prototype.eventNames=function(){var f=[],c,l;if(this._eventsCount===0)return f;for(l in c=this._events)r.call(c,l)&&f.push(o?l.slice(1):l);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(c)):f},_.prototype.listeners=function(f,c){var l=o?o+f:f,d=this._events[l];if(c)return!!d;if(!d)return[];if(d.fn)return[d.fn];for(var g=0,h=d.length,v=new Array(h);g<h;g++)v[g]=d[g].fn;return v},_.prototype.emit=function(f,c,l,d,g,h){var v=o?o+f:f;if(!this._events[v])return!1;var b=this._events[v],y=arguments.length,E,m;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),y){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,c),!0;case 3:return b.fn.call(b.context,c,l),!0;case 4:return b.fn.call(b.context,c,l,d),!0;case 5:return b.fn.call(b.context,c,l,d,g),!0;case 6:return b.fn.call(b.context,c,l,d,g,h),!0}for(m=1,E=new Array(y-1);m<y;m++)E[m-1]=arguments[m];b.fn.apply(b.context,E)}else{var x=b.length,S;for(m=0;m<x;m++)switch(b[m].once&&this.removeListener(f,b[m].fn,void 0,!0),y){case 1:b[m].fn.call(b[m].context);break;case 2:b[m].fn.call(b[m].context,c);break;case 3:b[m].fn.call(b[m].context,c,l);break;case 4:b[m].fn.call(b[m].context,c,l,d);break;default:if(!E)for(S=1,E=new Array(y-1);S<y;S++)E[S-1]=arguments[S];b[m].fn.apply(b[m].context,E)}}return!0},_.prototype.on=function(f,c,l){var d=new u(c,l||this),g=o?o+f:f;return this._events[g]?this._events[g].fn?this._events[g]=[this._events[g],d]:this._events[g].push(d):(this._events[g]=d,this._eventsCount++),this},_.prototype.once=function(f,c,l){var d=new u(c,l||this,!0),g=o?o+f:f;return this._events[g]?this._events[g].fn?this._events[g]=[this._events[g],d]:this._events[g].push(d):(this._events[g]=d,this._eventsCount++),this},_.prototype.removeListener=function(f,c,l,d){var g=o?o+f:f;if(!this._events[g])return this;if(!c)return--this._eventsCount===0?this._events=new s:delete this._events[g],this;var h=this._events[g];if(h.fn)h.fn===c&&(!d||h.once)&&(!l||h.context===l)&&(--this._eventsCount===0?this._events=new s:delete this._events[g]);else{for(var v=0,b=[],y=h.length;v<y;v++)(h[v].fn!==c||d&&!h[v].once||l&&h[v].context!==l)&&b.push(h[v]);b.length?this._events[g]=b.length===1?b[0]:b:--this._eventsCount===0?this._events=new s:delete this._events[g]}return this},_.prototype.removeAllListeners=function(f){var c;return f?(c=o?o+f:f,this._events[c]&&(--this._eventsCount===0?this._events=new s:delete this._events[c])):(this._events=new s,this._eventsCount=0),this},_.prototype.off=_.prototype.removeListener,_.prototype.addListener=_.prototype.on,_.prototype.setMaxListeners=function(){return this},_.prefixed=o,_.EventEmitter=_,typeof t!="undefined"&&(t.exports=_)},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},s=function(){function z(Q,X){var Z=[],Y=!0,ne=!1,re=void 0;try{for(var oe=Q[Symbol.iterator](),de;!(Y=(de=oe.next()).done)&&(Z.push(de.value),!(X&&Z.length===X));Y=!0);}catch(fe){ne=!0,re=fe}finally{try{!Y&&oe.return&&oe.return()}finally{if(ne)throw re}}return Z}return function(Q,X){if(Array.isArray(Q))return Q;if(Symbol.iterator in Object(Q))return z(Q,X);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function z(Q,X){for(var Z=0;Z<X.length;Z++){var Y=X[Z];Y.enumerable=Y.enumerable||!1,Y.configurable=!0,"value"in Y&&(Y.writable=!0),Object.defineProperty(Q,Y.key,Y)}}return function(Q,X,Z){return X&&z(Q.prototype,X),Z&&z(Q,Z),Q}}(),_=r(3),p=w(_),f=r(2),c=w(f),l=r(0),d=w(l),g=r(5),h=w(g),v=r(10),b=w(v),y=r(9),E=w(y),m=r(36),x=r(37),S=r(13),T=w(S),D=r(26),I=r(38),P=r(39),O=r(40);function w(z){return z&&z.__esModule?z:{default:z}}function k(z,Q,X){return Q in z?Object.defineProperty(z,Q,{value:X,enumerable:!0,configurable:!0,writable:!0}):z[Q]=X,z}function C(z,Q){if(!(z instanceof Q))throw new TypeError("Cannot call a class as a function")}function R(z,Q){if(!z)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q&&(typeof Q=="object"||typeof Q=="function")?Q:z}function N(z,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Q);z.prototype=Object.create(Q&&Q.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),Q&&(Object.setPrototypeOf?Object.setPrototypeOf(z,Q):z.__proto__=Q)}var j=(0,b.default)("quill:clipboard"),H="__ql-matcher",U=[[Node.TEXT_NODE,ue],[Node.TEXT_NODE,ie],["br",J],[Node.ELEMENT_NODE,ie],[Node.ELEMENT_NODE,V],[Node.ELEMENT_NODE,ae],[Node.ELEMENT_NODE,G],[Node.ELEMENT_NODE,ce],["li",te],["b",F.bind(F,"bold")],["i",F.bind(F,"italic")],["style",ee]],q=[m.AlignAttribute,I.DirectionAttribute].reduce(function(z,Q){return z[Q.keyName]=Q,z},{}),A=[m.AlignStyle,x.BackgroundStyle,D.ColorStyle,I.DirectionStyle,P.FontStyle,O.SizeStyle].reduce(function(z,Q){return z[Q.keyName]=Q,z},{}),M=function(z){N(Q,z);function Q(X,Z){C(this,Q);var Y=R(this,(Q.__proto__||Object.getPrototypeOf(Q)).call(this,X,Z));return Y.quill.root.addEventListener("paste",Y.onPaste.bind(Y)),Y.container=Y.quill.addContainer("ql-clipboard"),Y.container.setAttribute("contenteditable",!0),Y.container.setAttribute("tabindex",-1),Y.matchers=[],U.concat(Y.options.matchers).forEach(function(ne){var re=s(ne,2),oe=re[0],de=re[1];!Z.matchVisual&&de===ae||Y.addMatcher(oe,de)}),Y}return u(Q,[{key:"addMatcher",value:function(Z,Y){this.matchers.push([Z,Y])}},{key:"convert",value:function(Z){if(typeof Z=="string")return this.container.innerHTML=Z.replace(/\>\r?\n +\</g,"><"),this.convert();var Y=this.quill.getFormat(this.quill.selection.savedRange.index);if(Y[T.default.blotName]){var ne=this.container.innerText;return this.container.innerHTML="",new c.default().insert(ne,k({},T.default.blotName,Y[T.default.blotName]))}var re=this.prepareMatching(),oe=s(re,2),de=oe[0],fe=oe[1],se=$(this.container,de,fe);return K(se,`
`)&&se.ops[se.ops.length-1].attributes==null&&(se=se.compose(new c.default().retain(se.length()-1).delete(1))),j.log("convert",this.container.innerHTML,se),this.container.innerHTML="",se}},{key:"dangerouslyPasteHTML",value:function(Z,Y){var ne=arguments.length>2&&arguments[2]!==void 0?arguments[2]:h.default.sources.API;if(typeof Z=="string")this.quill.setContents(this.convert(Z),Y),this.quill.setSelection(0,h.default.sources.SILENT);else{var re=this.convert(Y);this.quill.updateContents(new c.default().retain(Z).concat(re),ne),this.quill.setSelection(Z+re.length(),h.default.sources.SILENT)}}},{key:"onPaste",value:function(Z){var Y=this;if(!(Z.defaultPrevented||!this.quill.isEnabled())){var ne=this.quill.getSelection(),re=new c.default().retain(ne.index),oe=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(h.default.sources.SILENT),setTimeout(function(){re=re.concat(Y.convert()).delete(ne.length),Y.quill.updateContents(re,h.default.sources.USER),Y.quill.setSelection(re.length()-ne.length,h.default.sources.SILENT),Y.quill.scrollingContainer.scrollTop=oe,Y.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var Z=this,Y=[],ne=[];return this.matchers.forEach(function(re){var oe=s(re,2),de=oe[0],fe=oe[1];switch(de){case Node.TEXT_NODE:ne.push(fe);break;case Node.ELEMENT_NODE:Y.push(fe);break;default:[].forEach.call(Z.container.querySelectorAll(de),function(se){se[H]=se[H]||[],se[H].push(fe)});break}}),[Y,ne]}}]),Q}(E.default);M.DEFAULTS={matchers:[],matchVisual:!0};function L(z,Q,X){return(typeof Q=="undefined"?"undefined":o(Q))==="object"?Object.keys(Q).reduce(function(Z,Y){return L(Z,Y,Q[Y])},z):z.reduce(function(Z,Y){return Y.attributes&&Y.attributes[Q]?Z.push(Y):Z.insert(Y.insert,(0,p.default)({},k({},Q,X),Y.attributes))},new c.default)}function W(z){if(z.nodeType!==Node.ELEMENT_NODE)return{};var Q="__ql-computed-style";return z[Q]||(z[Q]=window.getComputedStyle(z))}function K(z,Q){for(var X="",Z=z.ops.length-1;Z>=0&&X.length<Q.length;--Z){var Y=z.ops[Z];if(typeof Y.insert!="string")break;X=Y.insert+X}return X.slice(-1*Q.length)===Q}function B(z){if(z.childNodes.length===0)return!1;var Q=W(z);return["block","list-item"].indexOf(Q.display)>-1}function $(z,Q,X){return z.nodeType===z.TEXT_NODE?X.reduce(function(Z,Y){return Y(z,Z)},new c.default):z.nodeType===z.ELEMENT_NODE?[].reduce.call(z.childNodes||[],function(Z,Y){var ne=$(Y,Q,X);return Y.nodeType===z.ELEMENT_NODE&&(ne=Q.reduce(function(re,oe){return oe(Y,re)},ne),ne=(Y[H]||[]).reduce(function(re,oe){return oe(Y,re)},ne)),Z.concat(ne)},new c.default):new c.default}function F(z,Q,X){return L(X,z,!0)}function G(z,Q){var X=d.default.Attributor.Attribute.keys(z),Z=d.default.Attributor.Class.keys(z),Y=d.default.Attributor.Style.keys(z),ne={};return X.concat(Z).concat(Y).forEach(function(re){var oe=d.default.query(re,d.default.Scope.ATTRIBUTE);oe!=null&&(ne[oe.attrName]=oe.value(z),ne[oe.attrName])||(oe=q[re],oe!=null&&(oe.attrName===re||oe.keyName===re)&&(ne[oe.attrName]=oe.value(z)||void 0),oe=A[re],oe!=null&&(oe.attrName===re||oe.keyName===re)&&(oe=A[re],ne[oe.attrName]=oe.value(z)||void 0))}),Object.keys(ne).length>0&&(Q=L(Q,ne)),Q}function V(z,Q){var X=d.default.query(z);if(X==null)return Q;if(X.prototype instanceof d.default.Embed){var Z={},Y=X.value(z);Y!=null&&(Z[X.blotName]=Y,Q=new c.default().insert(Z,X.formats(z)))}else typeof X.formats=="function"&&(Q=L(Q,X.blotName,X.formats(z)));return Q}function J(z,Q){return K(Q,`
`)||Q.insert(`
`),Q}function ee(){return new c.default}function te(z,Q){var X=d.default.query(z);if(X==null||X.blotName!=="list-item"||!K(Q,`
`))return Q;for(var Z=-1,Y=z.parentNode;!Y.classList.contains("ql-clipboard");)(d.default.query(Y)||{}).blotName==="list"&&(Z+=1),Y=Y.parentNode;return Z<=0?Q:Q.compose(new c.default().retain(Q.length()-1).retain(1,{indent:Z}))}function ie(z,Q){return K(Q,`
`)||(B(z)||Q.length()>0&&z.nextSibling&&B(z.nextSibling))&&Q.insert(`
`),Q}function ae(z,Q){if(B(z)&&z.nextElementSibling!=null&&!K(Q,`

`)){var X=z.offsetHeight+parseFloat(W(z).marginTop)+parseFloat(W(z).marginBottom);z.nextElementSibling.offsetTop>z.offsetTop+X*1.5&&Q.insert(`
`)}return Q}function ce(z,Q){var X={},Z=z.style||{};return Z.fontStyle&&W(z).fontStyle==="italic"&&(X.italic=!0),Z.fontWeight&&(W(z).fontWeight.startsWith("bold")||parseInt(W(z).fontWeight)>=700)&&(X.bold=!0),Object.keys(X).length>0&&(Q=L(Q,X)),parseFloat(Z.textIndent||0)>0&&(Q=new c.default().insert("	").concat(Q)),Q}function ue(z,Q){var X=z.data;if(z.parentNode.tagName==="O:P")return Q.insert(X.trim());if(X.trim().length===0&&z.parentNode.classList.contains("ql-clipboard"))return Q;if(!W(z.parentNode).whiteSpace.startsWith("pre")){var Z=function(ne,re){return re=re.replace(/[^\u00a0]/g,""),re.length<1&&ne?" ":re};X=X.replace(/\r\n/g," ").replace(/\n/g," "),X=X.replace(/\s\s+/g,Z.bind(Z,!0)),(z.previousSibling==null&&B(z.parentNode)||z.previousSibling!=null&&B(z.previousSibling))&&(X=X.replace(/^\s+/,Z.bind(Z,!1))),(z.nextSibling==null&&B(z.parentNode)||z.nextSibling!=null&&B(z.nextSibling))&&(X=X.replace(/\s+$/,Z.bind(Z,!1)))}return Q.insert(X)}e.default=M,e.matchAttributor=G,e.matchBlot=V,e.matchNewline=ie,e.matchSpacing=ae,e.matchText=ue},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function g(h,v){for(var b=0;b<v.length;b++){var y=v[b];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}return function(h,v,b){return v&&g(h.prototype,v),b&&g(h,b),h}}(),s=function g(h,v,b){h===null&&(h=Function.prototype);var y=Object.getOwnPropertyDescriptor(h,v);if(y===void 0){var E=Object.getPrototypeOf(h);return E===null?void 0:g(E,v,b)}else{if("value"in y)return y.value;var m=y.get;return m===void 0?void 0:m.call(b)}},u=r(6),_=p(u);function p(g){return g&&g.__esModule?g:{default:g}}function f(g,h){if(!(g instanceof h))throw new TypeError("Cannot call a class as a function")}function c(g,h){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:g}function l(g,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);g.prototype=Object.create(h&&h.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(g,h):g.__proto__=h)}var d=function(g){l(h,g);function h(){return f(this,h),c(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return o(h,[{key:"optimize",value:function(b){s(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"optimize",this).call(this,b),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return s(h.__proto__||Object.getPrototypeOf(h),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),h}(_.default);d.blotName="bold",d.tagName=["STRONG","B"],e.default=d},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var o=function(){function O(w,k){var C=[],R=!0,N=!1,j=void 0;try{for(var H=w[Symbol.iterator](),U;!(R=(U=H.next()).done)&&(C.push(U.value),!(k&&C.length===k));R=!0);}catch(q){N=!0,j=q}finally{try{!R&&H.return&&H.return()}finally{if(N)throw j}}return C}return function(w,k){if(Array.isArray(w))return w;if(Symbol.iterator in Object(w))return O(w,k);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function O(w,k){for(var C=0;C<k.length;C++){var R=k[C];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(w,R.key,R)}}return function(w,k,C){return k&&O(w.prototype,k),C&&O(w,C),w}}(),u=r(2),_=b(u),p=r(0),f=b(p),c=r(5),l=b(c),d=r(10),g=b(d),h=r(9),v=b(h);function b(O){return O&&O.__esModule?O:{default:O}}function y(O,w,k){return w in O?Object.defineProperty(O,w,{value:k,enumerable:!0,configurable:!0,writable:!0}):O[w]=k,O}function E(O,w){if(!(O instanceof w))throw new TypeError("Cannot call a class as a function")}function m(O,w){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:O}function x(O,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);O.prototype=Object.create(w&&w.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(O,w):O.__proto__=w)}var S=(0,g.default)("quill:toolbar"),T=function(O){x(w,O);function w(k,C){E(this,w);var R=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,k,C));if(Array.isArray(R.options.container)){var N=document.createElement("div");I(N,R.options.container),k.container.parentNode.insertBefore(N,k.container),R.container=N}else typeof R.options.container=="string"?R.container=document.querySelector(R.options.container):R.container=R.options.container;if(!(R.container instanceof HTMLElement)){var j;return j=S.error("Container required for toolbar",R.options),m(R,j)}return R.container.classList.add("ql-toolbar"),R.controls=[],R.handlers={},Object.keys(R.options.handlers).forEach(function(H){R.addHandler(H,R.options.handlers[H])}),[].forEach.call(R.container.querySelectorAll("button, select"),function(H){R.attach(H)}),R.quill.on(l.default.events.EDITOR_CHANGE,function(H,U){H===l.default.events.SELECTION_CHANGE&&R.update(U)}),R.quill.on(l.default.events.SCROLL_OPTIMIZE,function(){var H=R.quill.selection.getRange(),U=o(H,1),q=U[0];R.update(q)}),R}return s(w,[{key:"addHandler",value:function(C,R){this.handlers[C]=R}},{key:"attach",value:function(C){var R=this,N=[].find.call(C.classList,function(H){return H.indexOf("ql-")===0});if(!!N){if(N=N.slice(3),C.tagName==="BUTTON"&&C.setAttribute("type","button"),this.handlers[N]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[N]==null){S.warn("ignoring attaching to disabled format",N,C);return}if(f.default.query(N)==null){S.warn("ignoring attaching to nonexistent format",N,C);return}}var j=C.tagName==="SELECT"?"change":"click";C.addEventListener(j,function(H){var U=void 0;if(C.tagName==="SELECT"){if(C.selectedIndex<0)return;var q=C.options[C.selectedIndex];q.hasAttribute("selected")?U=!1:U=q.value||!1}else C.classList.contains("ql-active")?U=!1:U=C.value||!C.hasAttribute("value"),H.preventDefault();R.quill.focus();var A=R.quill.selection.getRange(),M=o(A,1),L=M[0];if(R.handlers[N]!=null)R.handlers[N].call(R,U);else if(f.default.query(N).prototype instanceof f.default.Embed){if(U=prompt("Enter "+N),!U)return;R.quill.updateContents(new _.default().retain(L.index).delete(L.length).insert(y({},N,U)),l.default.sources.USER)}else R.quill.format(N,U,l.default.sources.USER);R.update(L)}),this.controls.push([N,C])}}},{key:"update",value:function(C){var R=C==null?{}:this.quill.getFormat(C);this.controls.forEach(function(N){var j=o(N,2),H=j[0],U=j[1];if(U.tagName==="SELECT"){var q=void 0;if(C==null)q=null;else if(R[H]==null)q=U.querySelector("option[selected]");else if(!Array.isArray(R[H])){var A=R[H];typeof A=="string"&&(A=A.replace(/\"/g,'\\"')),q=U.querySelector('option[value="'+A+'"]')}q==null?(U.value="",U.selectedIndex=-1):q.selected=!0}else if(C==null)U.classList.remove("ql-active");else if(U.hasAttribute("value")){var M=R[H]===U.getAttribute("value")||R[H]!=null&&R[H].toString()===U.getAttribute("value")||R[H]==null&&!U.getAttribute("value");U.classList.toggle("ql-active",M)}else U.classList.toggle("ql-active",R[H]!=null)})}}]),w}(v.default);T.DEFAULTS={};function D(O,w,k){var C=document.createElement("button");C.setAttribute("type","button"),C.classList.add("ql-"+w),k!=null&&(C.value=k),O.appendChild(C)}function I(O,w){Array.isArray(w[0])||(w=[w]),w.forEach(function(k){var C=document.createElement("span");C.classList.add("ql-formats"),k.forEach(function(R){if(typeof R=="string")D(C,R);else{var N=Object.keys(R)[0],j=R[N];Array.isArray(j)?P(C,N,j):D(C,N,j)}}),O.appendChild(C)})}function P(O,w,k){var C=document.createElement("select");C.classList.add("ql-"+w),k.forEach(function(R){var N=document.createElement("option");R!==!1?N.setAttribute("value",R):N.setAttribute("selected","selected"),C.appendChild(N)}),O.appendChild(C)}T.DEFAULTS={container:null,handlers:{clean:function(){var w=this,k=this.quill.getSelection();if(k!=null)if(k.length==0){var C=this.quill.getFormat();Object.keys(C).forEach(function(R){f.default.query(R,f.default.Scope.INLINE)!=null&&w.quill.format(R,!1)})}else this.quill.removeFormat(k,l.default.sources.USER)},direction:function(w){var k=this.quill.getFormat().align;w==="rtl"&&k==null?this.quill.format("align","right",l.default.sources.USER):!w&&k==="right"&&this.quill.format("align",!1,l.default.sources.USER),this.quill.format("direction",w,l.default.sources.USER)},indent:function(w){var k=this.quill.getSelection(),C=this.quill.getFormat(k),R=parseInt(C.indent||0);if(w==="+1"||w==="-1"){var N=w==="+1"?1:-1;C.direction==="rtl"&&(N*=-1),this.quill.format("indent",R+N,l.default.sources.USER)}},link:function(w){w===!0&&(w=prompt("Enter link URL:")),this.quill.format("link",w,l.default.sources.USER)},list:function(w){var k=this.quill.getSelection(),C=this.quill.getFormat(k);w==="check"?C.list==="checked"||C.list==="unchecked"?this.quill.format("list",!1,l.default.sources.USER):this.quill.format("list","unchecked",l.default.sources.USER):this.quill.format("list",w,l.default.sources.USER)}}},e.default=T,e.addControls=I},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function g(h,v){for(var b=0;b<v.length;b++){var y=v[b];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}return function(h,v,b){return v&&g(h.prototype,v),b&&g(h,b),h}}(),s=function g(h,v,b){h===null&&(h=Function.prototype);var y=Object.getOwnPropertyDescriptor(h,v);if(y===void 0){var E=Object.getPrototypeOf(h);return E===null?void 0:g(E,v,b)}else{if("value"in y)return y.value;var m=y.get;return m===void 0?void 0:m.call(b)}},u=r(28),_=p(u);function p(g){return g&&g.__esModule?g:{default:g}}function f(g,h){if(!(g instanceof h))throw new TypeError("Cannot call a class as a function")}function c(g,h){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:g}function l(g,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);g.prototype=Object.create(h&&h.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(g,h):g.__proto__=h)}var d=function(g){l(h,g);function h(v,b){f(this,h);var y=c(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,v));return y.label.innerHTML=b,y.container.classList.add("ql-color-picker"),[].slice.call(y.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(E){E.classList.add("ql-primary")}),y}return o(h,[{key:"buildItem",value:function(b){var y=s(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"buildItem",this).call(this,b);return y.style.backgroundColor=b.getAttribute("value")||"",y}},{key:"selectItem",value:function(b,y){s(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"selectItem",this).call(this,b,y);var E=this.label.querySelector(".ql-color-label"),m=b&&b.getAttribute("data-value")||"";E&&(E.tagName==="line"?E.style.stroke=m:E.style.fill=m)}}]),h}(_.default);e.default=d},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function g(h,v){for(var b=0;b<v.length;b++){var y=v[b];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}return function(h,v,b){return v&&g(h.prototype,v),b&&g(h,b),h}}(),s=function g(h,v,b){h===null&&(h=Function.prototype);var y=Object.getOwnPropertyDescriptor(h,v);if(y===void 0){var E=Object.getPrototypeOf(h);return E===null?void 0:g(E,v,b)}else{if("value"in y)return y.value;var m=y.get;return m===void 0?void 0:m.call(b)}},u=r(28),_=p(u);function p(g){return g&&g.__esModule?g:{default:g}}function f(g,h){if(!(g instanceof h))throw new TypeError("Cannot call a class as a function")}function c(g,h){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:g}function l(g,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);g.prototype=Object.create(h&&h.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(g,h):g.__proto__=h)}var d=function(g){l(h,g);function h(v,b){f(this,h);var y=c(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,v));return y.container.classList.add("ql-icon-picker"),[].forEach.call(y.container.querySelectorAll(".ql-picker-item"),function(E){E.innerHTML=b[E.getAttribute("data-value")||""]}),y.defaultItem=y.container.querySelector(".ql-selected"),y.selectItem(y.defaultItem),y}return o(h,[{key:"selectItem",value:function(b,y){s(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"selectItem",this).call(this,b,y),b=b||this.defaultItem,this.label.innerHTML=b.innerHTML}}]),h}(_.default);e.default=d},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function _(p,f){for(var c=0;c<f.length;c++){var l=f[c];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}return function(p,f,c){return f&&_(p.prototype,f),c&&_(p,c),p}}();function s(_,p){if(!(_ instanceof p))throw new TypeError("Cannot call a class as a function")}var u=function(){function _(p,f){var c=this;s(this,_),this.quill=p,this.boundsContainer=f||document.body,this.root=p.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){c.root.style.marginTop=-1*c.quill.root.scrollTop+"px"}),this.hide()}return o(_,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(f){var c=f.left+f.width/2-this.root.offsetWidth/2,l=f.bottom+this.quill.root.scrollTop;this.root.style.left=c+"px",this.root.style.top=l+"px",this.root.classList.remove("ql-flip");var d=this.boundsContainer.getBoundingClientRect(),g=this.root.getBoundingClientRect(),h=0;if(g.right>d.right&&(h=d.right-g.right,this.root.style.left=c+h+"px"),g.left<d.left&&(h=d.left-g.left,this.root.style.left=c+h+"px"),g.bottom>d.bottom){var v=g.bottom-g.top,b=f.bottom-f.top+v;this.root.style.top=l-b+"px",this.root.classList.add("ql-flip")}return h}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),_}();e.default=u},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function P(O,w){var k=[],C=!0,R=!1,N=void 0;try{for(var j=O[Symbol.iterator](),H;!(C=(H=j.next()).done)&&(k.push(H.value),!(w&&k.length===w));C=!0);}catch(U){R=!0,N=U}finally{try{!C&&j.return&&j.return()}finally{if(R)throw N}}return k}return function(O,w){if(Array.isArray(O))return O;if(Symbol.iterator in Object(O))return P(O,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function P(O,w,k){O===null&&(O=Function.prototype);var C=Object.getOwnPropertyDescriptor(O,w);if(C===void 0){var R=Object.getPrototypeOf(O);return R===null?void 0:P(R,w,k)}else{if("value"in C)return C.value;var N=C.get;return N===void 0?void 0:N.call(k)}},u=function(){function P(O,w){for(var k=0;k<w.length;k++){var C=w[k];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(O,C.key,C)}}return function(O,w,k){return w&&P(O.prototype,w),k&&P(O,k),O}}(),_=r(3),p=E(_),f=r(8),c=E(f),l=r(43),d=E(l),g=r(27),h=E(g),v=r(15),b=r(41),y=E(b);function E(P){return P&&P.__esModule?P:{default:P}}function m(P,O){if(!(P instanceof O))throw new TypeError("Cannot call a class as a function")}function x(P,O){if(!P)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O&&(typeof O=="object"||typeof O=="function")?O:P}function S(P,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);P.prototype=Object.create(O&&O.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(P,O):P.__proto__=O)}var T=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],D=function(P){S(O,P);function O(w,k){m(this,O),k.modules.toolbar!=null&&k.modules.toolbar.container==null&&(k.modules.toolbar.container=T);var C=x(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,w,k));return C.quill.container.classList.add("ql-snow"),C}return u(O,[{key:"extendToolbar",value:function(k){k.container.classList.add("ql-snow"),this.buildButtons([].slice.call(k.container.querySelectorAll("button")),y.default),this.buildPickers([].slice.call(k.container.querySelectorAll("select")),y.default),this.tooltip=new I(this.quill,this.options.bounds),k.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(C,R){k.handlers.link.call(k,!R.format.link)})}}]),O}(d.default);D.DEFAULTS=(0,p.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(O){if(O){var w=this.quill.getSelection();if(w==null||w.length==0)return;var k=this.quill.getText(w);/^\S+@\S+\.\S+$/.test(k)&&k.indexOf("mailto:")!==0&&(k="mailto:"+k);var C=this.quill.theme.tooltip;C.edit("link",k)}else this.quill.format("link",!1)}}}}});var I=function(P){S(O,P);function O(w,k){m(this,O);var C=x(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,w,k));return C.preview=C.root.querySelector("a.ql-preview"),C}return u(O,[{key:"listen",value:function(){var k=this;s(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(C){k.root.classList.contains("ql-editing")?k.save():k.edit("link",k.preview.textContent),C.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(C){if(k.linkRange!=null){var R=k.linkRange;k.restoreFocus(),k.quill.formatText(R,"link",!1,c.default.sources.USER),delete k.linkRange}C.preventDefault(),k.hide()}),this.quill.on(c.default.events.SELECTION_CHANGE,function(C,R,N){if(C!=null){if(C.length===0&&N===c.default.sources.USER){var j=k.quill.scroll.descendant(h.default,C.index),H=o(j,2),U=H[0],q=H[1];if(U!=null){k.linkRange=new v.Range(C.index-q,U.length());var A=h.default.formats(U.domNode);k.preview.textContent=A,k.preview.setAttribute("href",A),k.show(),k.position(k.quill.getBounds(k.linkRange));return}}else delete k.linkRange;k.hide()}})}},{key:"show",value:function(){s(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),O}(l.BaseTooltip);I.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=D},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(29),s=Y(o),u=r(36),_=r(38),p=r(64),f=r(65),c=Y(f),l=r(66),d=Y(l),g=r(67),h=Y(g),v=r(37),b=r(26),y=r(39),E=r(40),m=r(56),x=Y(m),S=r(68),T=Y(S),D=r(27),I=Y(D),P=r(69),O=Y(P),w=r(70),k=Y(w),C=r(71),R=Y(C),N=r(72),j=Y(N),H=r(73),U=Y(H),q=r(13),A=Y(q),M=r(74),L=Y(M),W=r(75),K=Y(W),B=r(57),$=Y(B),F=r(41),G=Y(F),V=r(28),J=Y(V),ee=r(59),te=Y(ee),ie=r(60),ae=Y(ie),ce=r(61),ue=Y(ce),z=r(108),Q=Y(z),X=r(62),Z=Y(X);function Y(ne){return ne&&ne.__esModule?ne:{default:ne}}s.default.register({"attributors/attribute/direction":_.DirectionAttribute,"attributors/class/align":u.AlignClass,"attributors/class/background":v.BackgroundClass,"attributors/class/color":b.ColorClass,"attributors/class/direction":_.DirectionClass,"attributors/class/font":y.FontClass,"attributors/class/size":E.SizeClass,"attributors/style/align":u.AlignStyle,"attributors/style/background":v.BackgroundStyle,"attributors/style/color":b.ColorStyle,"attributors/style/direction":_.DirectionStyle,"attributors/style/font":y.FontStyle,"attributors/style/size":E.SizeStyle},!0),s.default.register({"formats/align":u.AlignClass,"formats/direction":_.DirectionClass,"formats/indent":p.IndentClass,"formats/background":v.BackgroundStyle,"formats/color":b.ColorStyle,"formats/font":y.FontClass,"formats/size":E.SizeClass,"formats/blockquote":c.default,"formats/code-block":A.default,"formats/header":d.default,"formats/list":h.default,"formats/bold":x.default,"formats/code":q.Code,"formats/italic":T.default,"formats/link":I.default,"formats/script":O.default,"formats/strike":k.default,"formats/underline":R.default,"formats/image":j.default,"formats/video":U.default,"formats/list/item":g.ListItem,"modules/formula":L.default,"modules/syntax":K.default,"modules/toolbar":$.default,"themes/bubble":Q.default,"themes/snow":Z.default,"ui/icons":G.default,"ui/picker":J.default,"ui/icon-picker":ae.default,"ui/color-picker":te.default,"ui/tooltip":ue.default},!0),e.default=s.default},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var o=function(){function h(v,b){for(var y=0;y<b.length;y++){var E=b[y];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(v,E.key,E)}}return function(v,b,y){return b&&h(v.prototype,b),y&&h(v,y),v}}(),s=function h(v,b,y){v===null&&(v=Function.prototype);var E=Object.getOwnPropertyDescriptor(v,b);if(E===void 0){var m=Object.getPrototypeOf(v);return m===null?void 0:h(m,b,y)}else{if("value"in E)return E.value;var x=E.get;return x===void 0?void 0:x.call(y)}},u=r(0),_=p(u);function p(h){return h&&h.__esModule?h:{default:h}}function f(h,v){if(!(h instanceof v))throw new TypeError("Cannot call a class as a function")}function c(h,v){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:h}function l(h,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);h.prototype=Object.create(v&&v.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(h,v):h.__proto__=v)}var d=function(h){l(v,h);function v(){return f(this,v),c(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return o(v,[{key:"add",value:function(y,E){if(E==="+1"||E==="-1"){var m=this.value(y)||0;E=E==="+1"?m+1:m-1}return E===0?(this.remove(y),!0):s(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"add",this).call(this,y,E)}},{key:"canAdd",value:function(y,E){return s(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"canAdd",this).call(this,y,E)||s(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"canAdd",this).call(this,y,parseInt(E))}},{key:"value",value:function(y){return parseInt(s(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"value",this).call(this,y))||void 0}}]),v}(_.default.Attributor.Class),g=new d("indent","ql-indent",{scope:_.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=g},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(4),s=u(o);function u(l){return l&&l.__esModule?l:{default:l}}function _(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function p(l,d){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:l}function f(l,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);l.prototype=Object.create(d&&d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(l,d):l.__proto__=d)}var c=function(l){f(d,l);function d(){return _(this,d),p(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(s.default);c.blotName="blockquote",c.tagName="blockquote",e.default=c},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function d(g,h){for(var v=0;v<h.length;v++){var b=h[v];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,h,v){return h&&d(g.prototype,h),v&&d(g,v),g}}(),s=r(4),u=_(s);function _(d){return d&&d.__esModule?d:{default:d}}function p(d,g){if(!(d instanceof g))throw new TypeError("Cannot call a class as a function")}function f(d,g){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:d}function c(d,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);d.prototype=Object.create(g&&g.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(d,g):d.__proto__=g)}var l=function(d){c(g,d);function g(){return p(this,g),f(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return o(g,null,[{key:"formats",value:function(v){return this.tagName.indexOf(v.tagName)+1}}]),g}(u.default);l.blotName="header",l.tagName=["H1","H2","H3","H4","H5","H6"],e.default=l},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var o=function(){function m(x,S){for(var T=0;T<S.length;T++){var D=S[T];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(x,D.key,D)}}return function(x,S,T){return S&&m(x.prototype,S),T&&m(x,T),x}}(),s=function m(x,S,T){x===null&&(x=Function.prototype);var D=Object.getOwnPropertyDescriptor(x,S);if(D===void 0){var I=Object.getPrototypeOf(x);return I===null?void 0:m(I,S,T)}else{if("value"in D)return D.value;var P=D.get;return P===void 0?void 0:P.call(T)}},u=r(0),_=d(u),p=r(4),f=d(p),c=r(25),l=d(c);function d(m){return m&&m.__esModule?m:{default:m}}function g(m,x,S){return x in m?Object.defineProperty(m,x,{value:S,enumerable:!0,configurable:!0,writable:!0}):m[x]=S,m}function h(m,x){if(!(m instanceof x))throw new TypeError("Cannot call a class as a function")}function v(m,x){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:m}function b(m,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);m.prototype=Object.create(x&&x.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(m,x):m.__proto__=x)}var y=function(m){b(x,m);function x(){return h(this,x),v(this,(x.__proto__||Object.getPrototypeOf(x)).apply(this,arguments))}return o(x,[{key:"format",value:function(T,D){T===E.blotName&&!D?this.replaceWith(_.default.create(this.statics.scope)):s(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"format",this).call(this,T,D)}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():s(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(T,D){return this.parent.isolate(this.offset(this.parent),this.length()),T===this.parent.statics.blotName?(this.parent.replaceWith(T,D),this):(this.parent.unwrap(),s(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"replaceWith",this).call(this,T,D))}}],[{key:"formats",value:function(T){return T.tagName===this.tagName?void 0:s(x.__proto__||Object.getPrototypeOf(x),"formats",this).call(this,T)}}]),x}(f.default);y.blotName="list-item",y.tagName="LI";var E=function(m){b(x,m),o(x,null,[{key:"create",value:function(T){var D=T==="ordered"?"OL":"UL",I=s(x.__proto__||Object.getPrototypeOf(x),"create",this).call(this,D);return(T==="checked"||T==="unchecked")&&I.setAttribute("data-checked",T==="checked"),I}},{key:"formats",value:function(T){if(T.tagName==="OL")return"ordered";if(T.tagName==="UL")return T.hasAttribute("data-checked")?T.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet"}}]);function x(S){h(this,x);var T=v(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,S)),D=function(P){if(P.target.parentNode===S){var O=T.statics.formats(S),w=_.default.find(P.target);O==="checked"?w.format("list","unchecked"):O==="unchecked"&&w.format("list","checked")}};return S.addEventListener("touchstart",D),S.addEventListener("mousedown",D),T}return o(x,[{key:"format",value:function(T,D){this.children.length>0&&this.children.tail.format(T,D)}},{key:"formats",value:function(){return g({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(T,D){if(T instanceof y)s(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"insertBefore",this).call(this,T,D);else{var I=D==null?this.length():D.offset(this),P=this.split(I);P.parent.insertBefore(T,P)}}},{key:"optimize",value:function(T){s(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"optimize",this).call(this,T);var D=this.next;D!=null&&D.prev===this&&D.statics.blotName===this.statics.blotName&&D.domNode.tagName===this.domNode.tagName&&D.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(D.moveChildren(this),D.remove())}},{key:"replace",value:function(T){if(T.statics.blotName!==this.statics.blotName){var D=_.default.create(this.statics.defaultChild);T.moveChildren(D),this.appendChild(D)}s(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"replace",this).call(this,T)}}]),x}(l.default);E.blotName="list",E.scope=_.default.Scope.BLOCK_BLOT,E.tagName=["OL","UL"],E.defaultChild="list-item",E.allowedChildren=[y],e.ListItem=y,e.default=E},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(56),s=u(o);function u(l){return l&&l.__esModule?l:{default:l}}function _(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function p(l,d){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:l}function f(l,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);l.prototype=Object.create(d&&d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(l,d):l.__proto__=d)}var c=function(l){f(d,l);function d(){return _(this,d),p(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(s.default);c.blotName="italic",c.tagName=["EM","I"],e.default=c},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function g(h,v){for(var b=0;b<v.length;b++){var y=v[b];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}return function(h,v,b){return v&&g(h.prototype,v),b&&g(h,b),h}}(),s=function g(h,v,b){h===null&&(h=Function.prototype);var y=Object.getOwnPropertyDescriptor(h,v);if(y===void 0){var E=Object.getPrototypeOf(h);return E===null?void 0:g(E,v,b)}else{if("value"in y)return y.value;var m=y.get;return m===void 0?void 0:m.call(b)}},u=r(6),_=p(u);function p(g){return g&&g.__esModule?g:{default:g}}function f(g,h){if(!(g instanceof h))throw new TypeError("Cannot call a class as a function")}function c(g,h){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:g}function l(g,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);g.prototype=Object.create(h&&h.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(g,h):g.__proto__=h)}var d=function(g){l(h,g);function h(){return f(this,h),c(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return o(h,null,[{key:"create",value:function(b){return b==="super"?document.createElement("sup"):b==="sub"?document.createElement("sub"):s(h.__proto__||Object.getPrototypeOf(h),"create",this).call(this,b)}},{key:"formats",value:function(b){if(b.tagName==="SUB")return"sub";if(b.tagName==="SUP")return"super"}}]),h}(_.default);d.blotName="script",d.tagName=["SUB","SUP"],e.default=d},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(6),s=u(o);function u(l){return l&&l.__esModule?l:{default:l}}function _(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function p(l,d){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:l}function f(l,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);l.prototype=Object.create(d&&d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(l,d):l.__proto__=d)}var c=function(l){f(d,l);function d(){return _(this,d),p(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(s.default);c.blotName="strike",c.tagName="S",e.default=c},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=r(6),s=u(o);function u(l){return l&&l.__esModule?l:{default:l}}function _(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function p(l,d){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:l}function f(l,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);l.prototype=Object.create(d&&d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(l,d):l.__proto__=d)}var c=function(l){f(d,l);function d(){return _(this,d),p(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(s.default);c.blotName="underline",c.tagName="U",e.default=c},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function v(b,y){for(var E=0;E<y.length;E++){var m=y[E];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(b,m.key,m)}}return function(b,y,E){return y&&v(b.prototype,y),E&&v(b,E),b}}(),s=function v(b,y,E){b===null&&(b=Function.prototype);var m=Object.getOwnPropertyDescriptor(b,y);if(m===void 0){var x=Object.getPrototypeOf(b);return x===null?void 0:v(x,y,E)}else{if("value"in m)return m.value;var S=m.get;return S===void 0?void 0:S.call(E)}},u=r(0),_=f(u),p=r(27);function f(v){return v&&v.__esModule?v:{default:v}}function c(v,b){if(!(v instanceof b))throw new TypeError("Cannot call a class as a function")}function l(v,b){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:v}function d(v,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);v.prototype=Object.create(b&&b.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(v,b):v.__proto__=b)}var g=["alt","height","width"],h=function(v){d(b,v);function b(){return c(this,b),l(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return o(b,[{key:"format",value:function(E,m){g.indexOf(E)>-1?m?this.domNode.setAttribute(E,m):this.domNode.removeAttribute(E):s(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"format",this).call(this,E,m)}}],[{key:"create",value:function(E){var m=s(b.__proto__||Object.getPrototypeOf(b),"create",this).call(this,E);return typeof E=="string"&&m.setAttribute("src",this.sanitize(E)),m}},{key:"formats",value:function(E){return g.reduce(function(m,x){return E.hasAttribute(x)&&(m[x]=E.getAttribute(x)),m},{})}},{key:"match",value:function(E){return/\.(jpe?g|gif|png)$/.test(E)||/^data:image\/.+;base64/.test(E)}},{key:"sanitize",value:function(E){return(0,p.sanitize)(E,["http","https","data"])?E:"//:0"}},{key:"value",value:function(E){return E.getAttribute("src")}}]),b}(_.default.Embed);h.blotName="image",h.tagName="IMG",e.default=h},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function v(b,y){for(var E=0;E<y.length;E++){var m=y[E];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(b,m.key,m)}}return function(b,y,E){return y&&v(b.prototype,y),E&&v(b,E),b}}(),s=function v(b,y,E){b===null&&(b=Function.prototype);var m=Object.getOwnPropertyDescriptor(b,y);if(m===void 0){var x=Object.getPrototypeOf(b);return x===null?void 0:v(x,y,E)}else{if("value"in m)return m.value;var S=m.get;return S===void 0?void 0:S.call(E)}},u=r(4),_=r(27),p=f(_);function f(v){return v&&v.__esModule?v:{default:v}}function c(v,b){if(!(v instanceof b))throw new TypeError("Cannot call a class as a function")}function l(v,b){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:v}function d(v,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);v.prototype=Object.create(b&&b.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(v,b):v.__proto__=b)}var g=["height","width"],h=function(v){d(b,v);function b(){return c(this,b),l(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return o(b,[{key:"format",value:function(E,m){g.indexOf(E)>-1?m?this.domNode.setAttribute(E,m):this.domNode.removeAttribute(E):s(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"format",this).call(this,E,m)}}],[{key:"create",value:function(E){var m=s(b.__proto__||Object.getPrototypeOf(b),"create",this).call(this,E);return m.setAttribute("frameborder","0"),m.setAttribute("allowfullscreen",!0),m.setAttribute("src",this.sanitize(E)),m}},{key:"formats",value:function(E){return g.reduce(function(m,x){return E.hasAttribute(x)&&(m[x]=E.getAttribute(x)),m},{})}},{key:"sanitize",value:function(E){return p.default.sanitize(E)}},{key:"value",value:function(E){return E.getAttribute("src")}}]),b}(u.BlockEmbed);h.blotName="video",h.className="ql-video",h.tagName="IFRAME",e.default=h},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var o=function(){function E(m,x){for(var S=0;S<x.length;S++){var T=x[S];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(m,T.key,T)}}return function(m,x,S){return x&&E(m.prototype,x),S&&E(m,S),m}}(),s=function E(m,x,S){m===null&&(m=Function.prototype);var T=Object.getOwnPropertyDescriptor(m,x);if(T===void 0){var D=Object.getPrototypeOf(m);return D===null?void 0:E(D,x,S)}else{if("value"in T)return T.value;var I=T.get;return I===void 0?void 0:I.call(S)}},u=r(35),_=d(u),p=r(5),f=d(p),c=r(9),l=d(c);function d(E){return E&&E.__esModule?E:{default:E}}function g(E,m){if(!(E instanceof m))throw new TypeError("Cannot call a class as a function")}function h(E,m){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:E}function v(E,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);E.prototype=Object.create(m&&m.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(E,m):E.__proto__=m)}var b=function(E){v(m,E);function m(){return g(this,m),h(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return o(m,null,[{key:"create",value:function(S){var T=s(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,S);return typeof S=="string"&&(window.katex.render(S,T,{throwOnError:!1,errorColor:"#f00"}),T.setAttribute("data-value",S)),T}},{key:"value",value:function(S){return S.getAttribute("data-value")}}]),m}(_.default);b.blotName="formula",b.className="ql-formula",b.tagName="SPAN";var y=function(E){v(m,E),o(m,null,[{key:"register",value:function(){f.default.register(b,!0)}}]);function m(){g(this,m);var x=h(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return x}return m}(l.default);e.FormulaBlot=b,e.default=y},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var o=function(){function S(T,D){for(var I=0;I<D.length;I++){var P=D[I];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(T,P.key,P)}}return function(T,D,I){return D&&S(T.prototype,D),I&&S(T,I),T}}(),s=function S(T,D,I){T===null&&(T=Function.prototype);var P=Object.getOwnPropertyDescriptor(T,D);if(P===void 0){var O=Object.getPrototypeOf(T);return O===null?void 0:S(O,D,I)}else{if("value"in P)return P.value;var w=P.get;return w===void 0?void 0:w.call(I)}},u=r(0),_=h(u),p=r(5),f=h(p),c=r(9),l=h(c),d=r(13),g=h(d);function h(S){return S&&S.__esModule?S:{default:S}}function v(S,T){if(!(S instanceof T))throw new TypeError("Cannot call a class as a function")}function b(S,T){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T&&(typeof T=="object"||typeof T=="function")?T:S}function y(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof T);S.prototype=Object.create(T&&T.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),T&&(Object.setPrototypeOf?Object.setPrototypeOf(S,T):S.__proto__=T)}var E=function(S){y(T,S);function T(){return v(this,T),b(this,(T.__proto__||Object.getPrototypeOf(T)).apply(this,arguments))}return o(T,[{key:"replaceWith",value:function(I){this.domNode.textContent=this.domNode.textContent,this.attach(),s(T.prototype.__proto__||Object.getPrototypeOf(T.prototype),"replaceWith",this).call(this,I)}},{key:"highlight",value:function(I){var P=this.domNode.textContent;this.cachedText!==P&&((P.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=I(P),this.domNode.normalize(),this.attach()),this.cachedText=P)}}]),T}(g.default);E.className="ql-syntax";var m=new _.default.Attributor.Class("token","hljs",{scope:_.default.Scope.INLINE}),x=function(S){y(T,S),o(T,null,[{key:"register",value:function(){f.default.register(m,!0),f.default.register(E,!0)}}]);function T(D,I){v(this,T);var P=b(this,(T.__proto__||Object.getPrototypeOf(T)).call(this,D,I));if(typeof P.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var O=null;return P.quill.on(f.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(O),O=setTimeout(function(){P.highlight(),O=null},P.options.interval)}),P.highlight(),P}return o(T,[{key:"highlight",value:function(){var I=this;if(!this.quill.selection.composing){this.quill.update(f.default.sources.USER);var P=this.quill.getSelection();this.quill.scroll.descendants(E).forEach(function(O){O.highlight(I.options.highlight)}),this.quill.update(f.default.sources.SILENT),P!=null&&this.quill.setSelection(P,f.default.sources.SILENT)}}}]),T}(l.default);x.DEFAULTS={highlight:function(){return window.hljs==null?null:function(S){var T=window.hljs.highlightAuto(S);return T.value}}(),interval:1e3},e.CodeBlock=E,e.CodeToken=m,e.default=x},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var o=function T(D,I,P){D===null&&(D=Function.prototype);var O=Object.getOwnPropertyDescriptor(D,I);if(O===void 0){var w=Object.getPrototypeOf(D);return w===null?void 0:T(w,I,P)}else{if("value"in O)return O.value;var k=O.get;return k===void 0?void 0:k.call(P)}},s=function(){function T(D,I){for(var P=0;P<I.length;P++){var O=I[P];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(D,O.key,O)}}return function(D,I,P){return I&&T(D.prototype,I),P&&T(D,P),D}}(),u=r(3),_=v(u),p=r(8),f=v(p),c=r(43),l=v(c),d=r(15),g=r(41),h=v(g);function v(T){return T&&T.__esModule?T:{default:T}}function b(T,D){if(!(T instanceof D))throw new TypeError("Cannot call a class as a function")}function y(T,D){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D&&(typeof D=="object"||typeof D=="function")?D:T}function E(T,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof D);T.prototype=Object.create(D&&D.prototype,{constructor:{value:T,enumerable:!1,writable:!0,configurable:!0}}),D&&(Object.setPrototypeOf?Object.setPrototypeOf(T,D):T.__proto__=D)}var m=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],x=function(T){E(D,T);function D(I,P){b(this,D),P.modules.toolbar!=null&&P.modules.toolbar.container==null&&(P.modules.toolbar.container=m);var O=y(this,(D.__proto__||Object.getPrototypeOf(D)).call(this,I,P));return O.quill.container.classList.add("ql-bubble"),O}return s(D,[{key:"extendToolbar",value:function(P){this.tooltip=new S(this.quill,this.options.bounds),this.tooltip.root.appendChild(P.container),this.buildButtons([].slice.call(P.container.querySelectorAll("button")),h.default),this.buildPickers([].slice.call(P.container.querySelectorAll("select")),h.default)}}]),D}(l.default);x.DEFAULTS=(0,_.default)(!0,{},l.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(D){D?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var S=function(T){E(D,T);function D(I,P){b(this,D);var O=y(this,(D.__proto__||Object.getPrototypeOf(D)).call(this,I,P));return O.quill.on(f.default.events.EDITOR_CHANGE,function(w,k,C,R){if(w===f.default.events.SELECTION_CHANGE)if(k!=null&&k.length>0&&R===f.default.sources.USER){O.show(),O.root.style.left="0px",O.root.style.width="",O.root.style.width=O.root.offsetWidth+"px";var N=O.quill.getLines(k.index,k.length);if(N.length===1)O.position(O.quill.getBounds(k));else{var j=N[N.length-1],H=O.quill.getIndex(j),U=Math.min(j.length()-1,k.index+k.length-H),q=O.quill.getBounds(new d.Range(H,U));O.position(q)}}else document.activeElement!==O.textbox&&O.quill.hasFocus()&&O.hide()}),O}return s(D,[{key:"listen",value:function(){var P=this;o(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){P.root.classList.remove("ql-editing")}),this.quill.on(f.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!P.root.classList.contains("ql-hidden")){var O=P.quill.getSelection();O!=null&&P.position(P.quill.getBounds(O))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(P){var O=o(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"position",this).call(this,P),w=this.root.querySelector(".ql-tooltip-arrow");if(w.style.marginLeft="",O===0)return O;w.style.marginLeft=-1*O-w.offsetWidth/2+"px"}}]),D}(c.BaseTooltip);S.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=S,e.default=x},function(t,e,r){t.exports=r(63)}]).default})})(quill);var Quill=getDefaultExportFromCjs(quill.exports);function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function _createClass(a,n,t){return n&&_defineProperties(a.prototype,n),t&&_defineProperties(a,t),a}function _defineProperty$2(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function _extends$2(){return _extends$2=Object.assign||function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},_extends$2.apply(this,arguments)}function _inherits(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&_setPrototypeOf(a,n)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(a)}function _setPrototypeOf(a,n){return _setPrototypeOf=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},_setPrototypeOf(a,n)}function _isNativeReflectConstruct(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _assertThisInitialized(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _possibleConstructorReturn(a,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(a)}function _createSuper(a){var n=_isNativeReflectConstruct();return function(){var e=_getPrototypeOf(a),r;if(n){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _superPropBase(a,n){for(;!Object.prototype.hasOwnProperty.call(a,n)&&(a=_getPrototypeOf(a),a!==null););return a}function _get(){return typeof Reflect!="undefined"&&Reflect.get?_get=Reflect.get:_get=function(n,t,e){var r=_superPropBase(n,t);if(!!r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?n:e):o.value}},_get.apply(this,arguments)}function _unsupportedIterableToArray(a,n){if(!!a){if(typeof a=="string")return _arrayLikeToArray(a,n);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(a,n)}}function _arrayLikeToArray(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=a[t];return e}function _createForOfIteratorHelper(a,n){var t=typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=_unsupportedIterableToArray(a))||n&&a&&typeof a.length=="number"){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(_){throw _},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,u;return{s:function(){t=t.call(a)},n:function(){var _=t.next();return o=_.done,_},e:function(_){s=!0,u=_},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(s)throw u}}}}var Keys={TAB:9,ENTER:13,ESCAPE:27,UP:38,DOWN:40};function attachDataValues(a,n,t){var e=a;return Object.keys(n).forEach(function(r){t.indexOf(r)>-1?e.dataset[r]=n[r]:delete e.dataset[r]}),e}function getMentionCharIndex(a,n){return n.reduce(function(t,e){var r=a.lastIndexOf(e);return r>t.mentionCharIndex?{mentionChar:e,mentionCharIndex:r}:{mentionChar:t.mentionChar,mentionCharIndex:t.mentionCharIndex}},{mentionChar:null,mentionCharIndex:-1})}function hasValidChars(a,n){return n.test(a)}function hasValidMentionCharIndex(a,n,t){return a>-1?!(t&&!(a===0||!!n[a-1].match(/\s/g))):!1}var Embed$3=Quill.import("blots/embed"),MentionBlot=function(a){_inherits(t,a);var n=_createSuper(t);function t(e,r){var o;return _classCallCheck(this,t),o=n.call(this,e,r),_defineProperty$2(_assertThisInitialized(o),"hoverHandler",void 0),_defineProperty$2(_assertThisInitialized(o),"hoverHandler",void 0),o.clickHandler=null,o.hoverHandler=null,o.mounted=!1,o}return _createClass(t,[{key:"attach",value:function(){_get(_getPrototypeOf(t.prototype),"attach",this).call(this),this.mounted||(this.mounted=!0,this.clickHandler=this.getClickHandler(),this.hoverHandler=this.getHoverHandler(),this.domNode.addEventListener("click",this.clickHandler,!1),this.domNode.addEventListener("mouseenter",this.hoverHandler,!1))}},{key:"detach",value:function(){_get(_getPrototypeOf(t.prototype),"detach",this).call(this),this.mounted=!1,this.clickHandler&&(this.domNode.removeEventListener("click",this.clickHandler),this.clickHandler=null)}},{key:"getClickHandler",value:function(){var r=this;return function(o){var s=r.buildEvent("mention-clicked",o);window.dispatchEvent(s),o.preventDefault()}}},{key:"getHoverHandler",value:function(){var r=this;return function(o){var s=r.buildEvent("mention-hovered",o);window.dispatchEvent(s),o.preventDefault()}}},{key:"buildEvent",value:function(r,o){var s=new Event(r,{bubbles:!0,cancelable:!0});return s.value=_extends$2({},this.domNode.dataset),s.event=o,s}}],[{key:"create",value:function(r){var o=_get(_getPrototypeOf(t),"create",this).call(this),s=document.createElement("span");return s.className="ql-mention-denotation-char",s.innerHTML=r.denotationChar,o.appendChild(s),o.innerHTML+=r.value,t.setDataValues(o,r)}},{key:"setDataValues",value:function(r,o){var s=r;return Object.keys(o).forEach(function(u){s.dataset[u]=o[u]}),s}},{key:"value",value:function(r){return r.dataset}}]),t}(Embed$3);MentionBlot.blotName="mention",MentionBlot.tagName="span",MentionBlot.className="mention",Quill.register(MentionBlot);var Mention$1=function(){function a(n,t){var e=this;_classCallCheck(this,a),this.isOpen=!1,this.itemIndex=0,this.mentionCharPos=null,this.cursorPos=null,this.values=[],this.suspendMouseEnter=!1,this.existingSourceExecutionToken=null,this.quill=n,this.options={source:null,renderItem:function(_){return"".concat(_.value)},renderLoading:function(){return null},onSelect:function(_,p){p(_)},mentionDenotationChars:["@"],showDenotationChar:!0,allowedChars:/^[a-zA-Z0-9_]*$/,minChars:0,maxChars:31,offsetTop:2,offsetLeft:0,isolateCharacter:!1,fixMentionsToQuill:!1,positioningStrategy:"normal",defaultMenuOrientation:"bottom",blotName:"mention",dataAttributes:["id","value","denotationChar","link","target","disabled"],linkTarget:"_blank",onOpen:function(){return!0},onBeforeClose:function(){return!0},onClose:function(){return!0},listItemClass:"ql-mention-list-item",mentionContainerClass:"ql-mention-list-container",mentionListClass:"ql-mention-list",spaceAfterInsert:!0,selectKeys:[Keys.ENTER]},_extends$2(this.options,t,{dataAttributes:Array.isArray(t.dataAttributes)?this.options.dataAttributes.concat(t.dataAttributes):this.options.dataAttributes}),this.mentionContainer=document.createElement("div"),this.mentionContainer.className=this.options.mentionContainerClass?this.options.mentionContainerClass:"",this.mentionContainer.style.cssText="display: none; position: absolute;",this.mentionContainer.onmousemove=this.onContainerMouseMove.bind(this),this.options.fixMentionsToQuill&&(this.mentionContainer.style.width="auto"),this.mentionList=document.createElement("ul"),this.mentionList.id="quill-mention-list",n.root.setAttribute("aria-owns","quill-mention-list"),this.mentionList.className=this.options.mentionListClass?this.options.mentionListClass:"",this.mentionContainer.appendChild(this.mentionList),n.on("text-change",this.onTextChange.bind(this)),n.on("selection-change",this.onSelectionChange.bind(this)),n.container.addEventListener("paste",function(){setTimeout(function(){var u=n.getSelection();e.onSelectionChange(u)})}),n.keyboard.addBinding({key:Keys.TAB},this.selectHandler.bind(this)),n.keyboard.bindings[Keys.TAB].unshift(n.keyboard.bindings[Keys.TAB].pop());var r=_createForOfIteratorHelper(this.options.selectKeys),o;try{for(r.s();!(o=r.n()).done;){var s=o.value;n.keyboard.addBinding({key:s},this.selectHandler.bind(this))}}catch(u){r.e(u)}finally{r.f()}n.keyboard.bindings[Keys.ENTER].unshift(n.keyboard.bindings[Keys.ENTER].pop()),n.keyboard.addBinding({key:Keys.ESCAPE},this.escapeHandler.bind(this)),n.keyboard.addBinding({key:Keys.UP},this.upHandler.bind(this)),n.keyboard.addBinding({key:Keys.DOWN},this.downHandler.bind(this))}return _createClass(a,[{key:"selectHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.selectItem(),!1):!0}},{key:"escapeHandler",value:function(){return this.isOpen?(this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList(),!1):!0}},{key:"upHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.prevItem(),!1):!0}},{key:"downHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.nextItem(),!1):!0}},{key:"showMentionList",value:function(){this.options.positioningStrategy==="fixed"?document.body.appendChild(this.mentionContainer):this.quill.container.appendChild(this.mentionContainer),this.mentionContainer.style.visibility="hidden",this.mentionContainer.style.display="",this.mentionContainer.scrollTop=0,this.setMentionContainerPosition(),this.setIsOpen(!0)}},{key:"hideMentionList",value:function(){this.options.onBeforeClose(),this.mentionContainer.style.display="none",this.mentionContainer.remove(),this.setIsOpen(!1),this.quill.root.removeAttribute("aria-activedescendant")}},{key:"highlightItem",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=0;e<this.mentionList.childNodes.length;e+=1)this.mentionList.childNodes[e].classList.remove("selected");if(!(this.itemIndex===-1||this.mentionList.childNodes[this.itemIndex].dataset.disabled==="true")&&(this.mentionList.childNodes[this.itemIndex].classList.add("selected"),this.quill.root.setAttribute("aria-activedescendant",this.mentionList.childNodes[this.itemIndex].id),t)){var r=this.mentionList.childNodes[this.itemIndex].offsetHeight,o=this.mentionList.childNodes[this.itemIndex].offsetTop,s=this.mentionContainer.scrollTop,u=s+this.mentionContainer.offsetHeight;o<s?this.mentionContainer.scrollTop=o:o>u-r&&(this.mentionContainer.scrollTop+=o-u+r)}}},{key:"getItemData",value:function(){var t=this.mentionList.childNodes[this.itemIndex].dataset.link,e=typeof t!="undefined",r=this.mentionList.childNodes[this.itemIndex].dataset.target;return e&&(this.mentionList.childNodes[this.itemIndex].dataset.value='<a href="'.concat(t,'" target=').concat(r||this.options.linkTarget,">").concat(this.mentionList.childNodes[this.itemIndex].dataset.value)),this.mentionList.childNodes[this.itemIndex].dataset}},{key:"onContainerMouseMove",value:function(){this.suspendMouseEnter=!1}},{key:"selectItem",value:function(){var t=this;if(this.itemIndex!==-1){var e=this.getItemData();e.disabled||(this.options.onSelect(e,function(r){t.insertItem(r)}),this.hideMentionList())}}},{key:"insertItem",value:function(t,e){var r=t;if(r!==null){this.options.showDenotationChar||(r.denotationChar="");var o;e?o=this.cursorPos:(o=this.mentionCharPos,this.quill.deleteText(this.mentionCharPos,this.cursorPos-this.mentionCharPos,Quill.sources.USER)),this.quill.insertEmbed(o,this.options.blotName,r,Quill.sources.USER),this.options.spaceAfterInsert?(this.quill.insertText(o+1," ",Quill.sources.USER),this.quill.setSelection(o+2,Quill.sources.USER)):this.quill.setSelection(o+1,Quill.sources.USER),this.hideMentionList()}}},{key:"onItemMouseEnter",value:function(t){if(!this.suspendMouseEnter){var e=Number(t.target.dataset.index);!Number.isNaN(e)&&e!==this.itemIndex&&(this.itemIndex=e,this.highlightItem(!1))}}},{key:"onDisabledItemMouseEnter",value:function(t){this.suspendMouseEnter||(this.itemIndex=-1,this.highlightItem(!1))}},{key:"onItemClick",value:function(t){t.button===0&&(t.preventDefault(),t.stopImmediatePropagation(),this.itemIndex=t.currentTarget.dataset.index,this.highlightItem(),this.selectItem())}},{key:"onItemMouseDown",value:function(t){t.preventDefault(),t.stopImmediatePropagation()}},{key:"renderLoading",value:function(){var t=this.options.renderLoading();if(!!t){if(this.mentionContainer.getElementsByClassName("ql-mention-loading").length>0){this.showMentionList();return}this.mentionList.innerHTML="";var e=document.createElement("div");e.className="ql-mention-loading",e.innerHTML=this.options.renderLoading(),this.mentionContainer.append(e),this.showMentionList()}}},{key:"removeLoading",value:function(){var t=this.mentionContainer.getElementsByClassName("ql-mention-loading");t.length>0&&t[0].remove()}},{key:"renderList",value:function(t,e,r){if(e&&e.length>0){this.removeLoading(),this.values=e,this.mentionList.innerHTML="";for(var o=-1,s=0;s<e.length;s+=1){var u=document.createElement("li");u.id="quill-mention-item-"+s,u.className=this.options.listItemClass?this.options.listItemClass:"",e[s].disabled?(u.className+=" disabled",u.setAttribute("aria-hidden","true")):o===-1&&(o=s),u.dataset.index=s,u.innerHTML=this.options.renderItem(e[s],r),e[s].disabled?u.onmouseenter=this.onDisabledItemMouseEnter.bind(this):(u.onmouseenter=this.onItemMouseEnter.bind(this),u.onmouseup=this.onItemClick.bind(this),u.onmousedown=this.onItemMouseDown.bind(this)),u.dataset.denotationChar=t,this.mentionList.appendChild(attachDataValues(u,e[s],this.options.dataAttributes))}this.itemIndex=o,this.highlightItem(),this.showMentionList()}else this.hideMentionList()}},{key:"nextItem",value:function(){var t=0,e;do{t++,e=(this.itemIndex+t)%this.values.length;var r=this.mentionList.childNodes[e].dataset.disabled==="true";if(t===this.values.length+1){e=-1;break}}while(r);this.itemIndex=e,this.suspendMouseEnter=!0,this.highlightItem()}},{key:"prevItem",value:function(){var t=0,e;do{t++,e=(this.itemIndex+this.values.length-t)%this.values.length;var r=this.mentionList.childNodes[e].dataset.disabled==="true";if(t===this.values.length+1){e=-1;break}}while(r);this.itemIndex=e,this.suspendMouseEnter=!0,this.highlightItem()}},{key:"containerBottomIsNotVisible",value:function(t,e){var r=t+this.mentionContainer.offsetHeight+e.top;return r>window.pageYOffset+window.innerHeight}},{key:"containerRightIsNotVisible",value:function(t,e){if(this.options.fixMentionsToQuill)return!1;var r=t+this.mentionContainer.offsetWidth+e.left,o=window.pageXOffset+document.documentElement.clientWidth;return r>o}},{key:"setIsOpen",value:function(t){this.isOpen!==t&&(t?this.options.onOpen():this.options.onClose(),this.isOpen=t)}},{key:"setMentionContainerPosition",value:function(){this.options.positioningStrategy==="fixed"?this.setMentionContainerPosition_Fixed():this.setMentionContainerPosition_Normal()}},{key:"setMentionContainerPosition_Normal",value:function(){var t=this,e=this.quill.container.getBoundingClientRect(),r=this.quill.getBounds(this.mentionCharPos),o=this.mentionContainer.offsetHeight,s=this.options.offsetTop,u=this.options.offsetLeft;if(this.options.fixMentionsToQuill){var _=0;this.mentionContainer.style.right="".concat(_,"px")}else u+=r.left;if(this.containerRightIsNotVisible(u,e)){var p=this.mentionContainer.offsetWidth+this.options.offsetLeft,f=e.width;u=f-p}if(this.options.defaultMenuOrientation==="top"){if(this.options.fixMentionsToQuill?s=-1*(o+this.options.offsetTop):s=r.top-(o+this.options.offsetTop),s+e.top<=0){var c=this.options.offsetTop;this.options.fixMentionsToQuill?c+=e.height:c+=r.bottom,s=c}}else if(this.options.fixMentionsToQuill?s+=e.height:s+=r.bottom,this.containerBottomIsNotVisible(s,e)){var l=this.options.offsetTop*-1;this.options.fixMentionsToQuill||(l+=r.top),s=l-o}s>=0?this.options.mentionContainerClass.split(" ").forEach(function(d){t.mentionContainer.classList.add("".concat(d,"-bottom")),t.mentionContainer.classList.remove("".concat(d,"-top"))}):this.options.mentionContainerClass.split(" ").forEach(function(d){t.mentionContainer.classList.add("".concat(d,"-top")),t.mentionContainer.classList.remove("".concat(d,"-bottom"))}),this.mentionContainer.style.top="".concat(s,"px"),this.mentionContainer.style.left="".concat(u,"px"),this.mentionContainer.style.visibility="visible"}},{key:"setMentionContainerPosition_Fixed",value:function(){var t=this;this.mentionContainer.style.position="fixed",this.mentionContainer.style.height=null;var e=this.quill.container.getBoundingClientRect(),r=this.quill.getBounds(this.mentionCharPos),o={left:e.left+r.left,top:e.top+r.top,width:0,height:r.height},s=this.options.fixMentionsToQuill?e:o,u=this.options.offsetTop,_=this.options.offsetLeft;if(this.options.fixMentionsToQuill){var p=s.right;this.mentionContainer.style.right="".concat(p,"px")}else _+=s.left,_+this.mentionContainer.offsetWidth>document.documentElement.clientWidth&&(_-=_+this.mentionContainer.offsetWidth-document.documentElement.clientWidth);var f=s.top,c=document.documentElement.clientHeight-(s.top+s.height),l=this.mentionContainer.offsetHeight<=c,d=this.mentionContainer.offsetHeight<=f,g;this.options.defaultMenuOrientation==="top"&&d?g="top":this.options.defaultMenuOrientation==="bottom"&&l?g="bottom":g=c>f?"bottom":"top",g==="bottom"?(u=s.top+s.height,l||(this.mentionContainer.style.height=c-3+"px"),this.options.mentionContainerClass.split(" ").forEach(function(h){t.mentionContainer.classList.add("".concat(h,"-bottom")),t.mentionContainer.classList.remove("".concat(h,"-top"))})):(u=s.top-this.mentionContainer.offsetHeight,d||(this.mentionContainer.style.height=f-3+"px",u=3),this.options.mentionContainerClass.split(" ").forEach(function(h){t.mentionContainer.classList.add("".concat(h,"-top")),t.mentionContainer.classList.remove("".concat(h,"-bottom"))})),this.mentionContainer.style.top="".concat(u,"px"),this.mentionContainer.style.left="".concat(_,"px"),this.mentionContainer.style.visibility="visible"}},{key:"getTextBeforeCursor",value:function(){var t=Math.max(0,this.cursorPos-this.options.maxChars),e=this.quill.getText(t,this.cursorPos-t);return e}},{key:"onSomethingChange",value:function(){var t=this,e=this.quill.getSelection();if(e!=null){this.cursorPos=e.index;var r=this.getTextBeforeCursor(),o=getMentionCharIndex(r,this.options.mentionDenotationChars),s=o.mentionChar,u=o.mentionCharIndex;if(hasValidMentionCharIndex(u,r,this.options.isolateCharacter)){var _=this.cursorPos-(r.length-u);this.mentionCharPos=_;var p=r.substring(u+s.length);if(p.length>=this.options.minChars&&hasValidChars(p,this.getAllowedCharsRegex(s))){this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.renderLoading();var f={abandoned:!1};this.existingSourceExecutionToken=f,this.options.source(p,function(c,l){f.abandoned||(t.existingSourceExecutionToken=null,t.renderList(s,c,l))},s)}else this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList()}else this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList()}}},{key:"getAllowedCharsRegex",value:function(t){return this.options.allowedChars instanceof RegExp?this.options.allowedChars:this.options.allowedChars(t)}},{key:"onTextChange",value:function(t,e,r){r==="user"&&this.onSomethingChange()}},{key:"onSelectionChange",value:function(t){t&&t.length===0?this.onSomethingChange():this.hideMentionList()}},{key:"openMenu",value:function(t){var e=this.quill.getSelection(!0);this.quill.insertText(e.index,t),this.quill.blur(),this.quill.focus()}}]),a}();Quill.register("modules/mention",Mention$1);const Embed$2=Quill$1.import("blots/embed");class Mention extends Embed$2{static create(n){const t=typeof n=="object"?n.value:n,e=super.create(t);return e.setAttribute("title",t.trim()),e.setAttribute("href",this.BASE_URL+t),e.textContent=`@${t} `,e}static value(n){return n.textContent.substr(1)}}Mention.blotName="mention",Mention.className="ql-mention",Mention.tagName="A",Mention.BASE_URL="/",Quill$1.register({"modules/mention":Mention$1}),Quill$1.register(Mention);var docsId$1=/id="docs\-internal\-guid/,styles$1={BOLD:"700",ITALIC:"italic",UNDERLINE:"underline",STRIKETHROUGH:"line-through",SUPERSCRIPT:"super",SUBSCRIPT:"sub"},elements$1={ANCHOR:"a",BOLD:"strong",ITALIC:"em",UNDERLINE:"u",STRIKETHROUGH:"del",SUPERSCRIPT:"sup",SUBSCRIPT:"sub"},headers$1=["H1","H2","H3","H4","H5","H6"],constants$1={docsId:docsId$1,styles:styles$1,elements:elements$1,headers:headers$1},parseHTML$2=function(a){var n=void 0;if(typeof DOMParser!="undefined"){var t=new DOMParser;n=t.parseFromString(a,"text/html")}else n=document.implementation.createHTMLDocument(""),n.documentElement.innerHTML=a;return n.body},_typeof$2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _toConsumableArray$1(a){if(Array.isArray(a)){for(var n=0,t=Array(a.length);n<a.length;n++)t[n]=a[n];return t}else return Array.from(a)}var constants=constants$1,parseHTML$1=parseHTML$2,docsId=constants.docsId,elements=constants.elements,headers=constants.headers,styles=constants.styles,wrapNodeAnchor=function a(n,t){var e=document.createElement(elements.ANCHOR);return e.href=t,e.appendChild(n.cloneNode(!0)),e},wrapNodeInline=function a(n,t){var e=document.createElement(t);return e.appendChild(n.cloneNode(!0)),e},wrapNode=function a(n,t){var e=t.cloneNode(!0);return n&&(n.style&&n.style.fontWeight===styles.BOLD&&(e=wrapNodeInline(e,elements.BOLD)),n.style&&n.style.fontStyle===styles.ITALIC&&(e=wrapNodeInline(e,elements.ITALIC)),n.style&&n.style.textDecoration===styles.UNDERLINE&&(e=wrapNodeInline(e,elements.UNDERLINE)),n.style&&n.style.textDecoration===styles.STRIKETHROUGH&&(e=wrapNodeInline(e,elements.STRIKETHROUGH)),n.style&&n.style.verticalAlign===styles.SUPERSCRIPT&&(e=wrapNodeInline(e,elements.SUPERSCRIPT)),n.style&&n.style.verticalAlign===styles.SUBSCRIPT&&(e=wrapNodeInline(e,elements.SUBSCRIPT))),e},applyBlockStyles=function a(n){var t=n.cloneNode(!0),e=document.createTextNode(t.textContent),r=document.createTextNode("");return t.childNodes[0]&&t.childNodes[0].style&&(r=t.childNodes[0]),t.childNodes[0]&&t.childNodes[0].nodeName==="A"&&(e=wrapNodeAnchor(e.cloneNode(!0),t.childNodes[0].href),r=t.childNodes[0].childNodes[0]),e=wrapNode(r,e),e},applyInlineStyles=function a(n){var t=n.cloneNode(!0),e=document.createTextNode(t.textContent),r=t;return t.nodeName==="A"&&(e=wrapNodeAnchor(e,t.href),t.childNodes[0]&&t.childNodes[0].style&&(r=t.childNodes[0])),e=wrapNode(r,e),e},getCleanNode=function a(n){if(n.childNodes&&(n.childNodes.length<=1||n.nodeName==="OL"||n.nodeName==="UL")){var t=function(){var o=null,s=document.createTextNode(n.textContent);if(n.nodeName==="UL"||n.nodeName==="OL"||n.nodeName==="LI"){o=document.createElement(n.nodeName),s=document.createDocumentFragment();for(var u=[],_=0;_<n.childNodes.length;_++)u.push.apply(u,_toConsumableArray$1(a(n.childNodes[_])));u.map(function(p){return s.appendChild(p)})}else headers.indexOf(n.nodeName)!==-1?(o=document.createElement(n.nodeName),s=applyInlineStyles(n.childNodes[0])):n.nodeName==="P"?(o=document.createElement("p"),s=applyBlockStyles(n)):n.nodeName==="BR"?s=n:(o=document.createElement("span"),s=applyInlineStyles(n));return o?(o.appendChild(s),{v:[o]}):{v:[n.cloneNode(!0)]}}();if((typeof t=="undefined"?"undefined":_typeof$2(t))==="object")return t.v}if(n.childNodes){for(var e=[],r=0;r<n.childNodes.length;r++)e.push.apply(e,_toConsumableArray$1(a(n.childNodes[r])));return e}return[n]},filterNode=function a(n){return n.nodeType!==8},getCleanDocument=function a(n){var t=document.createElement("body"),e=n.childNodes,r=Array.from(e).filter(filterNode),o=[],s=!0,u=!1,_=void 0;try{for(var p=r[Symbol.iterator](),f;!(s=(f=p.next()).done);s=!0){var c=f.value;o.push.apply(o,_toConsumableArray$1(getCleanNode(c)))}}catch(d){u=!0,_=d}finally{try{!s&&p.return&&p.return()}finally{if(u)throw _}}for(var l=0;l<o.length;l++)t.appendChild(o[l].cloneNode(!0));return t},docsSoap$1=function(a){if(typeof a!="string")throw new Error("Expected 'clipboardContent' to be a string of HTML, received "+(typeof a=="undefined"?"undefined":_typeof$2(a)));if(a.length<=0)throw new Error("Expected clipboardContent to have content, received empty string");return a.match(docsId)?getCleanDocument(parseHTML$1(a.replace(/(\r\n|\n|\r)/,""))).outerHTML:parseHTML$1(a.replace(/(\r\n|\n|\r)/,"")).outerHTML};const docsSoap=docsSoap$1,parseHTML=parseHTML$2;var docsSoap_1={default:docsSoap,docsSoap,parseHTML};const cleanGoogleDocsFuss=a=>a.replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g,"").replace('<br class="Apple-interchange-newline">',"").replace("<p>","").replace("</p>","");var Clipboard=Quill$1.import("modules/clipboard");class Clipboard2 extends Clipboard{onCapturePaste(n){if(n.defaultPrevented||!this.quill.isEnabled())return;n.preventDefault();const t=this.quill.getSelection(!0);if(t==null)return;let e=n.clipboardData.getData("text/html");e=e&&docsSoap_1.docsSoap(cleanGoogleDocsFuss(e).trim()).replace("<strong>","<b>").replace("</strong>","</b>");const r=n.clipboardData.getData("text/plain"),o=Array.from(n.clipboardData.files||[]);!e&&o.length>0?this.quill.uploader.upload(t,o):this.onPaste(t,{html:e,text:r})}}Quill$1.register({"modules/clipboard":Clipboard2},!0);let Cursor=Quill$1.import("blots/cursor");const Embed$1=Quill$1.import("blots/embed"),Inline=Quill$1.import("blots/inline"),getTagUrl=a=>`/tags/${a}/trending`;class Hashtag extends Embed$1{static create(n){let t=super.create(n);return t.setAttribute("href",getTagUrl(n)),t.setAttribute("spellcheck",!1),t.textContent=`#${n} `,t}static formats(n){return n.getAttribute("href").substr(this.BASE_URL.length)}format(n,t){this.domNode.setAttribute("href",getTagUrl(t))}static value(n){return n.textContent.substr(1)}}Hashtag.blotName="hashtag",Hashtag.className="ql-hashtag",Hashtag.tagName="A",Hashtag.BASE_URL="#";class HashtagInline extends Inline{static create(n){let t=super.create(n);return t.setAttribute("href",getTagUrl(n)),t.setAttribute("spellcheck",!1),t}static formats(n){return n.getAttribute("href").substr(this.BASE_URL.length)}format(n,t){this.domNode.setAttribute("href",getTagUrl(t))}}HashtagInline.blotName="hashtag",HashtagInline.className="ql-hashtag",HashtagInline.tagName="A",HashtagInline.allowedChildren=[Text,Cursor],HashtagInline.BASE_URL="#",Quill$1.register(HashtagInline),Quill$1.register(Hashtag);const BubbleTheme=Quill$1.import("themes/bubble");class ExtendBubbleTheme extends BubbleTheme{constructor(n,t){super(n,t),n.root.addEventListener("click",e=>{this.setAnchorIcon()})}setAnchorIcon(){const n=this.quill.theme.tooltip.root.querySelector(".ql-mention");n.innerHTML="@"}}Quill$1.register("themes/bubble",ExtendBubbleTheme);class Loader extends HTMLElement{constructor(){super();const n=document.createElement("div"),t=document.createElement("style"),e="#56b1a3",r=`
      <svg class="circular-loader"viewBox="25 25 50 50" >
        <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="${e}" stroke-width="2" />
      </svg>
    `;n.setAttribute("class","loader"),n.innerHTML=r,t.textContent=`
      .loader {
        position: relative;
        margin: 0px auto;
        width: 50px;
        height: 50px;
      }
      .loader:before {
        content: '';
        display: block;
        padding-top: 100%;
      }

      .circular-loader {
        -webkit-animation: rotate 2s linear infinite;
                animation: rotate 2s linear infinite;
        height: 100%;
        -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
                transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin: auto;
      }
      
      .loader-path {
        stroke-dasharray: 150,200;
        stroke-dashoffset: -10;
        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
      }
      
      @-webkit-keyframes rotate {
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
      
      @keyframes rotate {
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
      @-webkit-keyframes dash {
        0% {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -124;
        }
      }
      @keyframes dash {
        0% {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -124;
        }
      }
      @-webkit-keyframes color {
        0% {
          stroke: ${e};
        }
        40% {
          stroke: ${e};
        }
        66% {
          stroke: ${e};
        }
        80%, 90% {
          stroke: ${e};
        }
      }
      @keyframes color {
        0% {
          stroke: ${e};
        }
        40% {
          stroke: ${e};
        }
        66% {
          stroke: ${e};
        }
        80%, 90% {
          stroke: ${e};
        }
      }      
    `;const o=this.attachShadow({mode:"open"});o.appendChild(n),o.appendChild(t)}}customElements.define("green-loader",Loader);const EDITOR_LINK_STYLES=`
.editor-link-card {
  text-decoration: none;
  display: flex;
  border-radius: 10px;
  min-height: 100px;
  overflow: hidden;
  background-color: #2C2C2E !important;
  font-family: "Gibson" !important;
  line-height: 1.31em !important;
  position: relative;
}

.editor-link-card .card-image {
  background-color: #242425;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
}

.memo-link-card .card-image {
  width: 35%;
  max-width: 203.09px;
}

.editor-link-card.no-image .card-image {
  display: none;
}

.editor-link-card .card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.memo-link-card .card-image.portrait img {
  width: 100px;
  margin-right: auto; 
}

.editor-link-card .card-container {
  color: white;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
}

.memo-link-card .card-container {
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding-right: 45px;
}

.editor-link-card.no-image .card-container {
  width: 100%;
}

.editor-link-card .card-container .favicon-and-name-container {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.editor-link-card .card-container .favicon-and-name-container .favicon {
  width: 20px;
  margin-right: 6px;
}

.editor-link-card .card-container .card-description {
  font-size: 18px !important;
  line-height: 18px !important;
  margin-bottom: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.memo-link-card .card-container .card-description {
  text-align: right;
  white-space: pre-line;
  word-break: break-word;
}

.editor-link-card .card-container .web-link {
  font-size: 14px !important;
  color: rgba(235, 235, 245, 0.6) !important;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.editor-link-card .card-container .web-link .link-icon {
  width: 16px;
  height: 17px;
  background-image: url('./assets/link.svg');
  margin-right: 2px;
}

.editor-link-card .card-container .web-link .user-icon {
  width: 16px;
  height: 17px;
  background-image: url('./assets/profile.svg');
  margin-right: 2px;
}

.link-card-remove {
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url('./assets/close-toolbar.svg');
  position: absolute;
  right: 15px;
  top: 15px;
}

.memo-link-card {
  height: 134px;
  margin-top: 5px;
}

.memo-link-card .link-card-left {
  display: flex;
  width: 30%;
  height: 100%;
}

.memo-link-card .link-card-remove {
  background-image: url('./assets/trash-can.svg');
  background-size: 19px;
  background-repeat: no-repeat;
  background-color: #3e3e41;
  border-radius: 100%;
  background-position: center;
  cursor: pointer;
}
`;class EditorLinkCard extends HTMLElement{constructor(){super();const n=document.createElement("a"),t=document.createElement("div"),e=document.createElement("img"),r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("img"),u=document.createElement("span"),_=document.createElement("span"),p=document.createElement("div"),f=document.createElement("span"),c=document.createElement("div"),l=document.createElement("a"),d=document.createElement("style"),g=this.attachShadow({mode:"open"});let h="",v="",b="",y="",E="";this.hasAttribute("img")&&(h=this.sanitizeAttributes("img")),this.hasAttribute("description")&&(v=this.sanitizeAttributes("description")),this.hasAttribute("url")&&(b=this.sanitizeAttributes("url")),this.hasAttribute("favicon")&&(y=this.sanitizeAttributes("favicon")),this.hasAttribute("sitename")&&(E=this.sanitizeAttributes("sitename")),d.textContent=EDITOR_LINK_STYLES,n.setAttribute("class",`editor-link-card ${h?"":"no-image"}`),t.setAttribute("class","card-image"),r.setAttribute("class","card-container"),o.setAttribute("class","favicon-and-name-container"),s.setAttribute("class","favicon"),u.setAttribute("class","sitename"),_.setAttribute("class","card-description"),p.setAttribute("class","web-link"),c.setAttribute("class","link-icon"),l.setAttribute("class","link-card-remove"),l.onclick=m=>{this._onRemove(m)},n.href=b,e.src=h,e.setAttribute("referrerpolicy","origin-when-cross-origin"),e.onerror=function(m){e.remove(),n.classList.add("no-image")},s.src=y,u.innerText=E,_.innerText=v,f.innerText=b,p.appendChild(c),p.appendChild(f),t.appendChild(e),h&&n.appendChild(t),y&&o.appendChild(s),E&&o.appendChild(u),(y||E)&&r.appendChild(o),r.appendChild(_),r.appendChild(p),g.appendChild(n),g.appendChild(d),n.appendChild(t),n.appendChild(r),n.appendChild(l),this._onRemove=m=>{const x=this.parentNode;this.parentNode.parentNode.removeChild(x),m.preventDefault()}}sanitizeAttributes(n){return this.getAttribute(n)==="undefined"?void 0:this.getAttribute(n)}}customElements.define("editor-link-card",EditorLinkCard);class MemoLinkCard extends HTMLElement{constructor(){super();const n=document.createElement("a"),t=document.createElement("div"),e=document.createElement("div"),r=document.createElement("span"),o=document.createElement("div"),s=document.createElement("span"),u=document.createElement("div"),_=document.createElement("a"),p=document.createElement("style"),f=document.createElement("img"),c=this.attachShadow({mode:"open"});let l="",d="",g="",h="";this.hasAttribute("displayname")&&(l=this.sanitizeAttributes("displayname")),this.hasAttribute("title")&&(d=this.sanitizeAttributes("title")),this.hasAttribute("data-cover-image")&&(g=this.sanitizeAttributes("data-cover-image")),this.hasAttribute("data-cover-orientation")&&(h=this.sanitizeAttributes("data-cover-orientation")),p.textContent=EDITOR_LINK_STYLES,n.setAttribute("class","editor-link-card memo-link-card"),n.classList.add("memo-link-card"),e.setAttribute("class","card-container"),r.setAttribute("class","card-description"),o.setAttribute("class","web-link"),t.setAttribute("class",`card-image ${h}`),u.setAttribute("class","user-icon"),_.setAttribute("class","link-card-remove"),_.onclick=()=>{this._onRemove()},f.src=g,f.setAttribute("referrerpolicy","origin-when-cross-origin"),f.onerror=function(v){f.remove(),n.classList.add("no-image")},r.innerText=d,s.innerText=l,o.appendChild(u),o.appendChild(s),e.appendChild(r),e.appendChild(o),c.appendChild(n),c.appendChild(p),t.appendChild(f),g&&n.appendChild(t),n.appendChild(e),n.appendChild(_),this._onRemove=()=>{const v=this.parentNode;this.parentNode.parentNode.removeChild(v)}}sanitizeAttributes(n){return this.getAttribute(n)==="undefined"?void 0:this.getAttribute(n)}}customElements.define("memo-link-card",MemoLinkCard);const Embed=Quill$1.import("blots/embed");class Hyperlink extends Embed{static create(n){const t=super.create(n);t.setAttribute("title",n.trim()),t.setAttribute("href",n),t.setAttribute("target","_blank");let e="";try{e=new URL(n).hostname}catch{e=n}return t.textContent=e,t}static value(n){return n.textContent}}Hyperlink.blotName="custom-hyperlink",Hyperlink.className="ql-hyperlink",Hyperlink.tagName="A",Quill$1.register(Hyperlink),window.Quill=Quill$1;const getLastInsertedChar=a=>{let n=a.ops;if(!n||n.length<1)return;let t=n.length-1,e=n[t];for(;!e.insert&&t>0;)t--,e=n[t];return e.insert&&e.insert.slice&&e.insert.slice(-1)};var render$4=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23.54",height:"23.54",viewBox:"0 0 23.54 23.54"}},[t("g",{attrs:{id:"Group_3211","data-name":"Group 3211",transform:"translate(-245 -74)"}},[t("circle",{attrs:{id:"Oval",cx:"11.77",cy:"11.77",r:"11.77",transform:"translate(245 74)",fill:"rgba(84,84,88,0.65)"}}),t("path",{attrs:{id:"Symbol",d:"M1.29-.92a.619.619,0,0,0,0,.855.623.623,0,0,0,.855,0L4.271-2.182,6.393-.065a.61.61,0,0,0,.855,0,.614.614,0,0,0,0-.855L5.135-3.041,7.252-5.163a.614.614,0,0,0,0-.855.61.61,0,0,0-.855,0L4.271-3.906,2.149-6.027a.623.623,0,0,0-.855,0,.624.624,0,0,0,0,.86L3.411-3.041Z",transform:"translate(252.879 89.195)",fill:"rgba(235,235,245,0.6)"}})])])},staticRenderFns$4=[];function normalizeComponent(a,n,t,e,r,o,s,u){var _=typeof a=="function"?a.options:a;n&&(_.render=n,_.staticRenderFns=t,_._compiled=!0),e&&(_.functional=!0),o&&(_._scopeId="data-v-"+o);var p;if(s?(p=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(l=__VUE_SSR_CONTEXT__),r&&r.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(s)},_._ssrRegister=p):r&&(p=u?function(){r.call(this,(_.functional?this.parent:this).$root.$options.shadowRoot)}:r),p)if(_.functional){_._injectStyles=p;var f=_.render;_.render=function(d,g){return p.call(g),f(d,g)}}else{var c=_.beforeCreate;_.beforeCreate=c?[].concat(c,p):[p]}return{exports:a,options:_}}const __vue2_script$4={},__cssModules$4={};var __component__$4=normalizeComponent(__vue2_script$4,render$4,staticRenderFns$4,!1,__vue2_injectStyles$4,null,null,null);function __vue2_injectStyles$4(a){for(let n in __cssModules$4)this[n]=__cssModules$4[n]}var IconClose=function(){return __component__$4.exports}(),render$3=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 4C6.10457 4 7 3.10457 7 2C7 0.895431 6.10457 0 5 0C3.89543 0 3 0.895431 3 2C3 3.10457 3.89543 4 5 4ZM13 4C14.1046 4 15 3.10457 15 2C15 0.895431 14.1046 0 13 0C11.8954 0 11 0.895431 11 2C11 3.10457 11.8954 4 13 4ZM7 9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7C6.10457 7 7 7.89543 7 9ZM13 11C14.1046 11 15 10.1046 15 9C15 7.89543 14.1046 7 13 7C11.8954 7 11 7.89543 11 9C11 10.1046 11.8954 11 13 11ZM7 16C7 17.1046 6.10457 18 5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14C6.10457 14 7 14.8954 7 16ZM13 18C14.1046 18 15 17.1046 15 16C15 14.8954 14.1046 14 13 14C11.8954 14 11 14.8954 11 16C11 17.1046 11.8954 18 13 18Z",fill:"#3A3A3C"}})])},staticRenderFns$3=[];const __vue2_script$3={},__cssModules$3={};var __component__$3=normalizeComponent(__vue2_script$3,render$3,staticRenderFns$3,!1,__vue2_injectStyles$3,null,null,null);function __vue2_injectStyles$3(a){for(let n in __cssModules$3)this[n]=__cssModules$3[n]}var IconOrder=function(){return __component__$3.exports}();const BULLET_DISPLAY_TYPES={bullet:"bullet",numeric:"numeric"},composerConstants={COMPOSER_URL_REGEX:/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z()]{2,6}\b([-a-zA-Z()@:%_+.~#?&/=]*)/g,COMPOSER_HTML_REGEX:/(<([^>]+)>)/g,URL_REGEX:new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z()]{2,6}\b([-a-zA-Z()@:%_+.~#?&//=]*)/,"g"),MESSAGES:{ADD_NEW_BULLET:"ADD_NEW_BULLET",FORMAT_TEXT:"FORMAT_TEXT",REMOVE_BULLET:"REMOVE_BULLET",ON_BULLET_REORDER:"ON_BULLET_REORDER",ON_BULLET_CHANGE:"ON_BULLET_CHANGE",ON_BULLET_FOCUS:"ON_BULLET_FOCUS",ON_BULLET_BLUR:"ON_BULLET_BLUR",ON_SELECTION_CHANGE:"ON_SELECTION_CHANGE",ON_CONTENT_CHANGE:"ON_CONTENT_CHANGE",ON_TITLE_CHANGE:"ON_TITLE_CHANGE",SET_CONTENT:"SET_CONTENT",SET_TITLE_CONTENT:"SET_TITLE_CONTENT",GET_CONTENT:"GET_CONTENT",GET_TITLE_CONTENT:"GET_TITLE_CONTENT",INSERT_IMAGE:"INSERT_IMAGE",SET_BULLET_DISPLAY_TYPE:"SET_BULLET_DISPLAY_TYPE",INSERT_LINK:"INSERT_LINK",ON_MENTION:"ON_MENTION",ON_HASHTAG:"ON_HASHTAG",ON_MENTION_END:"ON_MENTION_END",ON_HASHTAG_END:"ON_HASHTAG_END",INSERT_MENTION:"INSERT_MENTION",INSERT_HASHTAG:"INSERT_HASHTAG",INSERT_TEXT:"INSERT_TEXT",INSERT_MENTION_TEXT:"INSERT_MENTION_TEXT",INSERT_HASHTAG_TEXT:"INSERT_HASHTAG_TEXT",SET_EDITOR_COLOR:"SET_EDITOR_COLOR",EDITOR_LOADED:"EDITOR_LOADED",ON_TITLE_FOCUS:"ON_TITLE_FOCUS",ON_TITLE_BLUR:"ON_TITLE_BLUR",BLUR_EDITOR:"BLUR_EDITOR",FOCUS_EDITOR:"FOCUS_EDITOR",CLEAR_EDITOR:"CLEAR_EDITOR",INSERT_MEMO_LINK:"INSERT_MEMO_LINK"},SITE_INFO:"https://resizer.memodapp.com/v1/preview",IMAGE_RESIZER:"https://resizer.memodapp.com/v1/image",RESIZE_WIDTH:667,RESIZE_HEIGHT:500,RESIZE_FIT:"cover",BULLETS:[],TITLE:".text-box.title",MAIN_LIST:".main-list",MENTION:"MENTION",HASHTAG:"HASHTAG",CHAR_LIMIT:280,BULLET_LIMIT:10,EVENT_TO_TRIGGER:"",EVENT_WORD_INDEX:0,EVENT_WORD_LENGTH:0,ACTIVE_PART:"",current_selection:null,currentBulletDisplayType:BULLET_DISPLAY_TYPES.bullet},MAX_BULLET_LENGTH=10,{MESSAGES,EVENT_TO_TRIGGER,MENTION,HASHTAG}=composerConstants;function emitCurrentSelectionAndFormat(a){MESSAGES.ON_SELECTION_CHANGE}function emitBulletOnBlur(){MESSAGES.ON_BULLET_BLUR}var render$2=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("li",{staticClass:"relative composer-item",attrs:{id:"editor_"+a.bullet.id,"data-testid":"composer-item","new-content":a.bullet.id?"true":"false"}},[t("div",{staticClass:"bullet",attrs:{"is-active-bullet":a.isFocused?"true":"false"}},[t("div",{staticClass:"bullet-container"},[t("div",{staticClass:"bullet-order"},[t("div",{staticClass:"indicator-container"},[a.isDisplayBullet?t("span",{staticClass:"inline-block bullet-indicator indicator",attrs:{"data-active":a.isFocused?"true":"false"}}):t("span",{staticClass:"bullet-indicator indicator-number",attrs:{"data-active":a.isFocused?"true":"false"}},[a._v(" "+a._s(a.index+1)+" ")])]),t("IconOrder",{staticClass:"bullet-order-img"})],1),t("div",{ref:"editorRef",class:"li-input editor_"+a.bullet.id}),t("div",{staticClass:"bullet-char-counter"},[a._v(" "+a._s(a.charCount)+" / "+a._s(a.CHAR_LIMIT)+" ")])])]),a.isFocused&&a.showRemove?t("div",{staticClass:"remove-bullet",attrs:{"data-testid":"btn-remove-bullet"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),a.$emit("removed",a.bullet.id)}}},[t("IconClose")],1):a._e()])},staticRenderFns$2=[],ComposerItem_vue_vue_type_style_index_0_lang="";const __sfc_main$1={};__sfc_main$1.props={bullet:{type:Object,default(){return{}}},showRemove:{type:Boolean,default:!1},placeholder:{type:String,default:"Add Memo bullet here"},suggestions:{type:Array,default(){return[]}},displayType:{type:String,default:BULLET_DISPLAY_TYPES.bullet},index:{type:Number,default:0},isFocused:{type:Boolean,default:!1}},__sfc_main$1.setup=(a,n)=>{let t=0;const{CHAR_LIMIT:e,COMPOSER_URL_REGEX:r,COMPOSER_HTML_REGEX:o}=composerConstants,s=n.emit,u=a,_=compositionApi.ref(),p=compositionApi.inject("suggestionQuerySearch",async()=>{}),f=compositionApi.reactive({CHAR_LIMIT:e,editor:null,currentSelection:null}),c=compositionApi.inject("eventHub",{on:()=>{},emit:()=>{}}),l=compositionApi.computed(()=>u.displayType===(BULLET_DISPLAY_TYPES==null?void 0:BULLET_DISPLAY_TYPES.bullet));compositionApi.onMounted(()=>{f.editor=new Quill$1(_.value,{modules:{toolbar:["bold","italic","underline","blockquote","link","mention"],mention:{mentionDenotationChars:["@"],async source(P,O,w){const k=await p(P,w);O(k,P)},renderItem(P){return`<div class="inner-item">
            <div class="avatar">
              <img src="/assets/img/icons/avatar.svg" alt="user" />
            </div>
            <span>
              ${P.value}
            </span>
          </div>`},keyboard:{bindings:{"list autofill":{prefix:/^\s*()$/}}}},autoformat:{link:{trigger:/\s|\n|\t/,find:r,transform:function(P,O){return P.includes("http")?P:`https://${P}`},insert:"custom-hyperlink"}},keyboard:{bindings:{"list autofill":{prefix:/^\s*()$/}}}},theme:"bubble",placeholder:u.placeholder}),f.editor.on(Quill$1.events.SELECTION_CHANGE,P=>{P&&setTimeout(()=>{s("focus",u.bullet.id,P)},200)}),f.editor.on(Quill$1.events.TEXT_CHANGE,P=>{f.editor.getLength()>e&&f.editor.deleteText(e,f.editor.getLength());const O=getLastInsertedChar(P);[" ",`
`].includes(O)&&setTimeout(()=>{f.editor.setSelection(P.ops[0].retain+1,0,"silent")}),d(),compositionApi.nextTick(()=>{f.currentSelection=f.editor.getSelection(),emitCurrentSelectionAndFormat(f.currentSelection)})}),f.editor.root.addEventListener("blur",()=>{f.editor.disable(),h(f.editor,f.editor.getContents())}),u.bullet.prettyText&&(f.editor.root.innerHTML=u.bullet.prettyText.trim());let I=Quill$1.import("delta");f.editor.clipboard.addMatcher(Node.ELEMENT_NODE,(P,O)=>O.compose(new I().retain(O.length()))),f.editor.root.addEventListener("paste",P=>{const{clipboardData:O,target:w}=P,C=(O||window.clipboardData).getData("text")||"",R=C.match(r);w.dataset.link||R&&(R&&C.length==R[0].length&&[...new Set(R)].forEach((j,H)=>{let{index:U,length:q}=f.editor.getSelection(!0)||{index:0};f.editor.deleteText(U-j.length,j.length+H),f.editor.setSelection(f.editor.getLength(),0,"user"),setTimeout(()=>{f.editor.setSelection(U-j.length,j.length,"user"),T.insertLink(j),f.editor.setSelection(U,0,"user")},100)}),setTimeout(()=>{f.editor.setSelection(f.editor.getLength()+1,0,"user")}))}),c.on(`bullet:${u.bullet.id}`,(P,O)=>{D(P)})});const d=()=>{f.text=f.editor.getText(),f.html=f.editor.root.innerHTML,s("text-changed",{text:f.text,html:f.html,id:u.bullet.id})};compositionApi.onBeforeUnmount(()=>{compositionApi.toRaw(f.editor).off("text-change"),compositionApi.toRaw(f.editor).off("selection-change")});function g(I,P,O=1){let w=0;const[k]=P.ops;return k.retain&&(w=k.retain),f.editor.getText(t+O,w).trim()}function h(I,P){let O,w,k=!1;if(typeof P=="number")O=v(I,P,0),w=P,k=!0;else{O=g(I,P,0);const[C]=P.ops;w=C.retain}if(O.match(r)){const C=O.match(r),R=C[C.length-1],N=O.slice(-R.length);y(N,w,k)}else setTimeout(()=>{f.editor.enable()},0)}function v(I,P,O=1){return I.getText(t+O,P).trim()}const b=compositionApi.computed(()=>{var I,P;return(P=(I=u.bullet)==null?void 0:I.rawText.length)!=null?P:0});function y(I,P,O){const w=compositionApi.toRaw(f.editor),k=I.length;let C=O?w.getLength()-(P-2):w.getLength()-(k+2);if(k>0)if(O){const R=w.getContents(),j=R.ops[R.ops.length-1].insert.replace(r,"");j.length==0?R.ops.pop():R.ops[R.ops.length-1].insert=j.replace(`
`,""),w.setContents(R),w.insertText(w.getLength()-1," "),C=w.getLength()-1,E(w,C,I),setTimeout(()=>{w.insertText(w.getLength()-1," "),w.enable()},200)}else w.setSelection(C),w.deleteText(C,k,"api"),E(w,C,I),w.setSelection(w.getLength())}function E(I,P,O){const w=O.includes("http")?O:`https://${O}`;I.insertEmbed(P,"custom-hyperlink",w,"silent")}function m(){return f.editor.getFormat()}function x(I){const O=m()[I];f.editor.format(I,!O),s("selection-format",m())}function S(){const I=_.value.$el.querySelector(".ql-editor"),P="code";f.editor.setSelection(0,f.editor.getLength(),"silent"),Array.from(I.classList).includes("quoted-bullet")?(I.classList.remove("quoted-bullet"),x(P)):(I.classList.add("quoted-bullet"),x(P)),f.editor.setSelection(f.editor.getLength())}const T={insertText(I){f.editor.insertText(f.currentSelection||0,I)},insertImages(I){if(Array.isArray(I)){const{endpoint:P,fit:O,height:w,width:k}=resizerConfig;I.forEach(C=>{const{url:R,attributes:N}=C,j=f.currentSelection?f.currentSelection.index:0,H=N.width||k,U=N.height||w,q=N.orientation||"portrait",A=R.replace("//app","/app").replace("//tmp","/tmp"),L=`${R.includes("https://")?P+"/":""}/${A}?w=${H}&h=${U}&fit=${O}&orientation=${q}`;f.editor.insertEmbed(j,"memod-image",L),f.editor.setSelection(f.editor.getLength(),"user")})}},insertMemoLink(I){f.editor.insertText(f.editor.getLength()," "),f.editor.insertEmbed(f.currentSelection||0,"memo-card-link",I),f.editor.insertText(f.editor.getLength()," ")},insertLink(I){f.editor.insertEmbed(f.currentSelection||0,"memod-link",I),f.editor.insertText(f.editor.getLength()," ")},insertMention(I){f.editor.insertEmbed(f.currentSelection,"mention",I)},formatSelection(I){I==="code"?S():x(I)},blur(){var I;(I=_.value)==null||I.blur()}},D=({name:I,params:P})=>{const O=T[I];O&&O(P)};return Object.assign({CHAR_LIMIT:e,editorRef:_,isDisplayBullet:l,charCount:b},pe({},T))},__sfc_main$1.components=Object.assign({IconOrder,IconClose},__sfc_main$1.components);const __vue2_script$2=__sfc_main$1,__cssModules$2={};var __component__$2=normalizeComponent(__vue2_script$2,render$2,staticRenderFns$2,!1,__vue2_injectStyles$2,null,null,null);function __vue2_injectStyles$2(a){for(let n in __cssModules$2)this[n]=__cssModules$2[n]}var ComposerItem=function(){return __component__$2.exports}();/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ownKeys(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function _objectSpread2(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty$1(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function _typeof$1(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$1=function(n){return typeof n}:_typeof$1=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$1(a)}function _defineProperty$1(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function _extends$1(){return _extends$1=Object.assign||function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},_extends$1.apply(this,arguments)}function _objectWithoutPropertiesLoose$1(a,n){if(a==null)return{};var t={},e=Object.keys(a),r,o;for(o=0;o<e.length;o++)r=e[o],!(n.indexOf(r)>=0)&&(t[r]=a[r]);return t}function _objectWithoutProperties$1(a,n){if(a==null)return{};var t=_objectWithoutPropertiesLoose$1(a,n),e,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(r=0;r<o.length;r++)e=o[r],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(t[e]=a[e]))}return t}var version$1="1.15.0";function userAgent$1(a){if(typeof window!="undefined"&&window.navigator)return!!navigator.userAgent.match(a)}var IE11OrLess$1=userAgent$1(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Edge$1=userAgent$1(/Edge/i),FireFox$1=userAgent$1(/firefox/i),Safari$1=userAgent$1(/safari/i)&&!userAgent$1(/chrome/i)&&!userAgent$1(/android/i),IOS$1=userAgent$1(/iP(ad|od|hone)/i),ChromeForAndroid$1=userAgent$1(/chrome/i)&&userAgent$1(/android/i),captureMode$1={capture:!1,passive:!1};function on$1(a,n,t){a.addEventListener(n,t,!IE11OrLess$1&&captureMode$1)}function off$1(a,n,t){a.removeEventListener(n,t,!IE11OrLess$1&&captureMode$1)}function matches$1(a,n){if(!!n){if(n[0]===">"&&(n=n.substring(1)),a)try{if(a.matches)return a.matches(n);if(a.msMatchesSelector)return a.msMatchesSelector(n);if(a.webkitMatchesSelector)return a.webkitMatchesSelector(n)}catch{return!1}return!1}}function getParentOrHost$1(a){return a.host&&a!==document&&a.host.nodeType?a.host:a.parentNode}function closest$1(a,n,t,e){if(a){t=t||document;do{if(n!=null&&(n[0]===">"?a.parentNode===t&&matches$1(a,n):matches$1(a,n))||e&&a===t)return a;if(a===t)break}while(a=getParentOrHost$1(a))}return null}var R_SPACE$1=/\s+/g;function toggleClass$1(a,n,t){if(a&&n)if(a.classList)a.classList[t?"add":"remove"](n);else{var e=(" "+a.className+" ").replace(R_SPACE$1," ").replace(" "+n+" "," ");a.className=(e+(t?" "+n:"")).replace(R_SPACE$1," ")}}function css$1(a,n,t){var e=a&&a.style;if(e){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(a,""):a.currentStyle&&(t=a.currentStyle),n===void 0?t:t[n];!(n in e)&&n.indexOf("webkit")===-1&&(n="-webkit-"+n),e[n]=t+(typeof t=="string"?"":"px")}}function matrix$1(a,n){var t="";if(typeof a=="string")t=a;else do{var e=css$1(a,"transform");e&&e!=="none"&&(t=e+" "+t)}while(!n&&(a=a.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(t)}function find$1(a,n,t){if(a){var e=a.getElementsByTagName(n),r=0,o=e.length;if(t)for(;r<o;r++)t(e[r],r);return e}return[]}function getWindowScrollingElement$1(){var a=document.scrollingElement;return a||document.documentElement}function getRect$1(a,n,t,e,r){if(!(!a.getBoundingClientRect&&a!==window)){var o,s,u,_,p,f,c;if(a!==window&&a.parentNode&&a!==getWindowScrollingElement$1()?(o=a.getBoundingClientRect(),s=o.top,u=o.left,_=o.bottom,p=o.right,f=o.height,c=o.width):(s=0,u=0,_=window.innerHeight,p=window.innerWidth,f=window.innerHeight,c=window.innerWidth),(n||t)&&a!==window&&(r=r||a.parentNode,!IE11OrLess$1))do if(r&&r.getBoundingClientRect&&(css$1(r,"transform")!=="none"||t&&css$1(r,"position")!=="static")){var l=r.getBoundingClientRect();s-=l.top+parseInt(css$1(r,"border-top-width")),u-=l.left+parseInt(css$1(r,"border-left-width")),_=s+o.height,p=u+o.width;break}while(r=r.parentNode);if(e&&a!==window){var d=matrix$1(r||a),g=d&&d.a,h=d&&d.d;d&&(s/=h,u/=g,c/=g,f/=h,_=s+f,p=u+c)}return{top:s,left:u,bottom:_,right:p,width:c,height:f}}}function isScrolledPast$1(a,n,t){for(var e=getParentAutoScrollElement$1(a,!0),r=getRect$1(a)[n];e;){var o=getRect$1(e)[t],s=void 0;if(t==="top"||t==="left"?s=r>=o:s=r<=o,!s)return e;if(e===getWindowScrollingElement$1())break;e=getParentAutoScrollElement$1(e,!1)}return!1}function getChild$1(a,n,t,e){for(var r=0,o=0,s=a.children;o<s.length;){if(s[o].style.display!=="none"&&s[o]!==Sortable$1.ghost&&(e||s[o]!==Sortable$1.dragged)&&closest$1(s[o],t.draggable,a,!1)){if(r===n)return s[o];r++}o++}return null}function lastChild$1(a,n){for(var t=a.lastElementChild;t&&(t===Sortable$1.ghost||css$1(t,"display")==="none"||n&&!matches$1(t,n));)t=t.previousElementSibling;return t||null}function index$1(a,n){var t=0;if(!a||!a.parentNode)return-1;for(;a=a.previousElementSibling;)a.nodeName.toUpperCase()!=="TEMPLATE"&&a!==Sortable$1.clone&&(!n||matches$1(a,n))&&t++;return t}function getRelativeScrollOffset$1(a){var n=0,t=0,e=getWindowScrollingElement$1();if(a)do{var r=matrix$1(a),o=r.a,s=r.d;n+=a.scrollLeft*o,t+=a.scrollTop*s}while(a!==e&&(a=a.parentNode));return[n,t]}function indexOfObject$1(a,n){for(var t in a)if(!!a.hasOwnProperty(t)){for(var e in n)if(n.hasOwnProperty(e)&&n[e]===a[t][e])return Number(t)}return-1}function getParentAutoScrollElement$1(a,n){if(!a||!a.getBoundingClientRect)return getWindowScrollingElement$1();var t=a,e=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var r=css$1(t);if(t.clientWidth<t.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return getWindowScrollingElement$1();if(e||n)return t;e=!0}}while(t=t.parentNode);return getWindowScrollingElement$1()}function extend$1(a,n){if(a&&n)for(var t in n)n.hasOwnProperty(t)&&(a[t]=n[t]);return a}function isRectEqual$1(a,n){return Math.round(a.top)===Math.round(n.top)&&Math.round(a.left)===Math.round(n.left)&&Math.round(a.height)===Math.round(n.height)&&Math.round(a.width)===Math.round(n.width)}var _throttleTimeout$1;function throttle$1(a,n){return function(){if(!_throttleTimeout$1){var t=arguments,e=this;t.length===1?a.call(e,t[0]):a.apply(e,t),_throttleTimeout$1=setTimeout(function(){_throttleTimeout$1=void 0},n)}}}function cancelThrottle$1(){clearTimeout(_throttleTimeout$1),_throttleTimeout$1=void 0}function scrollBy$1(a,n,t){a.scrollLeft+=n,a.scrollTop+=t}function clone$1(a){var n=window.Polymer,t=window.jQuery||window.Zepto;return n&&n.dom?n.dom(a).cloneNode(!0):t?t(a).clone(!0)[0]:a.cloneNode(!0)}var expando$1="Sortable"+new Date().getTime();function AnimationStateManager$1(){var a=[],n;return{captureAnimationState:function(){if(a=[],!!this.options.animation){var e=[].slice.call(this.el.children);e.forEach(function(r){if(!(css$1(r,"display")==="none"||r===Sortable$1.ghost)){a.push({target:r,rect:getRect$1(r)});var o=_objectSpread2({},a[a.length-1].rect);if(r.thisAnimationDuration){var s=matrix$1(r,!0);s&&(o.top-=s.f,o.left-=s.e)}r.fromRect=o}})}},addAnimationState:function(e){a.push(e)},removeAnimationState:function(e){a.splice(indexOfObject$1(a,{target:e}),1)},animateAll:function(e){var r=this;if(!this.options.animation){clearTimeout(n),typeof e=="function"&&e();return}var o=!1,s=0;a.forEach(function(u){var _=0,p=u.target,f=p.fromRect,c=getRect$1(p),l=p.prevFromRect,d=p.prevToRect,g=u.rect,h=matrix$1(p,!0);h&&(c.top-=h.f,c.left-=h.e),p.toRect=c,p.thisAnimationDuration&&isRectEqual$1(l,c)&&!isRectEqual$1(f,c)&&(g.top-c.top)/(g.left-c.left)===(f.top-c.top)/(f.left-c.left)&&(_=calculateRealTime$1(g,l,d,r.options)),isRectEqual$1(c,f)||(p.prevFromRect=f,p.prevToRect=c,_||(_=r.options.animation),r.animate(p,g,c,_)),_&&(o=!0,s=Math.max(s,_),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},_),p.thisAnimationDuration=_)}),clearTimeout(n),o?n=setTimeout(function(){typeof e=="function"&&e()},s):typeof e=="function"&&e(),a=[]},animate:function(e,r,o,s){if(s){css$1(e,"transition",""),css$1(e,"transform","");var u=matrix$1(this.el),_=u&&u.a,p=u&&u.d,f=(r.left-o.left)/(_||1),c=(r.top-o.top)/(p||1);e.animatingX=!!f,e.animatingY=!!c,css$1(e,"transform","translate3d("+f+"px,"+c+"px,0)"),this.forRepaintDummy=repaint$1(e),css$1(e,"transition","transform "+s+"ms"+(this.options.easing?" "+this.options.easing:"")),css$1(e,"transform","translate3d(0,0,0)"),typeof e.animated=="number"&&clearTimeout(e.animated),e.animated=setTimeout(function(){css$1(e,"transition",""),css$1(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},s)}}}}function repaint$1(a){return a.offsetWidth}function calculateRealTime$1(a,n,t,e){return Math.sqrt(Math.pow(n.top-a.top,2)+Math.pow(n.left-a.left,2))/Math.sqrt(Math.pow(n.top-t.top,2)+Math.pow(n.left-t.left,2))*e.animation}var plugins$1=[],defaults$1={initializeByDefault:!0},PluginManager$1={mount:function a(n){for(var t in defaults$1)defaults$1.hasOwnProperty(t)&&!(t in n)&&(n[t]=defaults$1[t]);plugins$1.forEach(function(e){if(e.pluginName===n.pluginName)throw"Sortable: Cannot mount plugin ".concat(n.pluginName," more than once")}),plugins$1.push(n)},pluginEvent:function a(n,t,e){var r=this;this.eventCanceled=!1,e.cancel=function(){r.eventCanceled=!0};var o=n+"Global";plugins$1.forEach(function(s){!t[s.pluginName]||(t[s.pluginName][o]&&t[s.pluginName][o](_objectSpread2({sortable:t},e)),t.options[s.pluginName]&&t[s.pluginName][n]&&t[s.pluginName][n](_objectSpread2({sortable:t},e)))})},initializePlugins:function a(n,t,e,r){plugins$1.forEach(function(u){var _=u.pluginName;if(!(!n.options[_]&&!u.initializeByDefault)){var p=new u(n,t,n.options);p.sortable=n,p.options=n.options,n[_]=p,_extends$1(e,p.defaults)}});for(var o in n.options)if(!!n.options.hasOwnProperty(o)){var s=this.modifyOption(n,o,n.options[o]);typeof s!="undefined"&&(n.options[o]=s)}},getEventProperties:function a(n,t){var e={};return plugins$1.forEach(function(r){typeof r.eventProperties=="function"&&_extends$1(e,r.eventProperties.call(t[r.pluginName],n))}),e},modifyOption:function a(n,t,e){var r;return plugins$1.forEach(function(o){!n[o.pluginName]||o.optionListeners&&typeof o.optionListeners[t]=="function"&&(r=o.optionListeners[t].call(n[o.pluginName],e))}),r}};function dispatchEvent$1(a){var n=a.sortable,t=a.rootEl,e=a.name,r=a.targetEl,o=a.cloneEl,s=a.toEl,u=a.fromEl,_=a.oldIndex,p=a.newIndex,f=a.oldDraggableIndex,c=a.newDraggableIndex,l=a.originalEvent,d=a.putSortable,g=a.extraEventProperties;if(n=n||t&&t[expando$1],!!n){var h,v=n.options,b="on"+e.charAt(0).toUpperCase()+e.substr(1);window.CustomEvent&&!IE11OrLess$1&&!Edge$1?h=new CustomEvent(e,{bubbles:!0,cancelable:!0}):(h=document.createEvent("Event"),h.initEvent(e,!0,!0)),h.to=s||t,h.from=u||t,h.item=r||t,h.clone=o,h.oldIndex=_,h.newIndex=p,h.oldDraggableIndex=f,h.newDraggableIndex=c,h.originalEvent=l,h.pullMode=d?d.lastPutMode:void 0;var y=_objectSpread2(_objectSpread2({},g),PluginManager$1.getEventProperties(e,n));for(var E in y)h[E]=y[E];t&&t.dispatchEvent(h),v[b]&&v[b].call(n,h)}}var _excluded=["evt"],pluginEvent$1=function a(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.evt,o=_objectWithoutProperties$1(e,_excluded);PluginManager$1.pluginEvent.bind(Sortable$1)(n,t,_objectSpread2({dragEl:dragEl$2,parentEl:parentEl$1,ghostEl:ghostEl$1,rootEl:rootEl$1,nextEl:nextEl$1,lastDownEl:lastDownEl$1,cloneEl:cloneEl$1,cloneHidden:cloneHidden$1,dragStarted:moved$1,putSortable:putSortable$1,activeSortable:Sortable$1.active,originalEvent:r,oldIndex:oldIndex$1,oldDraggableIndex:oldDraggableIndex$1,newIndex:newIndex$1,newDraggableIndex:newDraggableIndex$1,hideGhostForTarget:_hideGhostForTarget$1,unhideGhostForTarget:_unhideGhostForTarget$1,cloneNowHidden:function(){cloneHidden$1=!0},cloneNowShown:function(){cloneHidden$1=!1},dispatchSortableEvent:function(u){_dispatchEvent$1({sortable:t,name:u,originalEvent:r})}},o))};function _dispatchEvent$1(a){dispatchEvent$1(_objectSpread2({putSortable:putSortable$1,cloneEl:cloneEl$1,targetEl:dragEl$2,rootEl:rootEl$1,oldIndex:oldIndex$1,oldDraggableIndex:oldDraggableIndex$1,newIndex:newIndex$1,newDraggableIndex:newDraggableIndex$1},a))}var dragEl$2,parentEl$1,ghostEl$1,rootEl$1,nextEl$1,lastDownEl$1,cloneEl$1,cloneHidden$1,oldIndex$1,newIndex$1,oldDraggableIndex$1,newDraggableIndex$1,activeGroup$1,putSortable$1,awaitingDragStarted$1=!1,ignoreNextClick$1=!1,sortables$1=[],tapEvt$1,touchEvt$2,lastDx$1,lastDy$1,tapDistanceLeft$1,tapDistanceTop$1,moved$1,lastTarget$1,lastDirection$1,pastFirstInvertThresh$1=!1,isCircumstantialInvert$1=!1,targetMoveDistance$1,ghostRelativeParent$1,ghostRelativeParentInitialScroll$1=[],_silent$1=!1,savedInputChecked$1=[],documentExists$1=typeof document!="undefined",PositionGhostAbsolutely$1=IOS$1,CSSFloatProperty$1=Edge$1||IE11OrLess$1?"cssFloat":"float",supportDraggable$1=documentExists$1&&!ChromeForAndroid$1&&!IOS$1&&"draggable"in document.createElement("div"),supportCssPointerEvents$1=function(){if(!!documentExists$1){if(IE11OrLess$1)return!1;var a=document.createElement("x");return a.style.cssText="pointer-events:auto",a.style.pointerEvents==="auto"}}(),_detectDirection$1=function a(n,t){var e=css$1(n),r=parseInt(e.width)-parseInt(e.paddingLeft)-parseInt(e.paddingRight)-parseInt(e.borderLeftWidth)-parseInt(e.borderRightWidth),o=getChild$1(n,0,t),s=getChild$1(n,1,t),u=o&&css$1(o),_=s&&css$1(s),p=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+getRect$1(o).width,f=_&&parseInt(_.marginLeft)+parseInt(_.marginRight)+getRect$1(s).width;if(e.display==="flex")return e.flexDirection==="column"||e.flexDirection==="column-reverse"?"vertical":"horizontal";if(e.display==="grid")return e.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&u.float&&u.float!=="none"){var c=u.float==="left"?"left":"right";return s&&(_.clear==="both"||_.clear===c)?"vertical":"horizontal"}return o&&(u.display==="block"||u.display==="flex"||u.display==="table"||u.display==="grid"||p>=r&&e[CSSFloatProperty$1]==="none"||s&&e[CSSFloatProperty$1]==="none"&&p+f>r)?"vertical":"horizontal"},_dragElInRowColumn$1=function a(n,t,e){var r=e?n.left:n.top,o=e?n.right:n.bottom,s=e?n.width:n.height,u=e?t.left:t.top,_=e?t.right:t.bottom,p=e?t.width:t.height;return r===u||o===_||r+s/2===u+p/2},_detectNearestEmptySortable$1=function a(n,t){var e;return sortables$1.some(function(r){var o=r[expando$1].options.emptyInsertThreshold;if(!(!o||lastChild$1(r))){var s=getRect$1(r),u=n>=s.left-o&&n<=s.right+o,_=t>=s.top-o&&t<=s.bottom+o;if(u&&_)return e=r}}),e},_prepareGroup$1=function a(n){function t(o,s){return function(u,_,p,f){var c=u.options.group.name&&_.options.group.name&&u.options.group.name===_.options.group.name;if(o==null&&(s||c))return!0;if(o==null||o===!1)return!1;if(s&&o==="clone")return o;if(typeof o=="function")return t(o(u,_,p,f),s)(u,_,p,f);var l=(s?u:_).options.group.name;return o===!0||typeof o=="string"&&o===l||o.join&&o.indexOf(l)>-1}}var e={},r=n.group;(!r||_typeof$1(r)!="object")&&(r={name:r}),e.name=r.name,e.checkPull=t(r.pull,!0),e.checkPut=t(r.put),e.revertClone=r.revertClone,n.group=e},_hideGhostForTarget$1=function a(){!supportCssPointerEvents$1&&ghostEl$1&&css$1(ghostEl$1,"display","none")},_unhideGhostForTarget$1=function a(){!supportCssPointerEvents$1&&ghostEl$1&&css$1(ghostEl$1,"display","")};documentExists$1&&!ChromeForAndroid$1&&document.addEventListener("click",function(a){if(ignoreNextClick$1)return a.preventDefault(),a.stopPropagation&&a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),ignoreNextClick$1=!1,!1},!0);var nearestEmptyInsertDetectEvent$1=function a(n){if(dragEl$2){n=n.touches?n.touches[0]:n;var t=_detectNearestEmptySortable$1(n.clientX,n.clientY);if(t){var e={};for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r]);e.target=e.rootEl=t,e.preventDefault=void 0,e.stopPropagation=void 0,t[expando$1]._onDragOver(e)}}},_checkOutsideTargetEl$1=function a(n){dragEl$2&&dragEl$2.parentNode[expando$1]._isOutsideThisEl(n.target)};function Sortable$1(a,n){if(!(a&&a.nodeType&&a.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(a));this.el=a,this.options=n=_extends$1({},n),a[expando$1]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(a.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return _detectDirection$1(a,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(s,u){s.setData("Text",u.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:Sortable$1.supportPointer!==!1&&"PointerEvent"in window&&!Safari$1,emptyInsertThreshold:5};PluginManager$1.initializePlugins(this,a,t);for(var e in t)!(e in n)&&(n[e]=t[e]);_prepareGroup$1(n);for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this));this.nativeDraggable=n.forceFallback?!1:supportDraggable$1,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?on$1(a,"pointerdown",this._onTapStart):(on$1(a,"mousedown",this._onTapStart),on$1(a,"touchstart",this._onTapStart)),this.nativeDraggable&&(on$1(a,"dragover",this),on$1(a,"dragenter",this)),sortables$1.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[]),_extends$1(this,AnimationStateManager$1())}Sortable$1.prototype={constructor:Sortable$1,_isOutsideThisEl:function a(n){!this.el.contains(n)&&n!==this.el&&(lastTarget$1=null)},_getDirection:function a(n,t){return typeof this.options.direction=="function"?this.options.direction.call(this,n,t,dragEl$2):this.options.direction},_onTapStart:function a(n){if(!!n.cancelable){var t=this,e=this.el,r=this.options,o=r.preventOnFilter,s=n.type,u=n.touches&&n.touches[0]||n.pointerType&&n.pointerType==="touch"&&n,_=(u||n).target,p=n.target.shadowRoot&&(n.path&&n.path[0]||n.composedPath&&n.composedPath()[0])||_,f=r.filter;if(_saveInputCheckedState$1(e),!dragEl$2&&!(/mousedown|pointerdown/.test(s)&&n.button!==0||r.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Safari$1&&_&&_.tagName.toUpperCase()==="SELECT")&&(_=closest$1(_,r.draggable,e,!1),!(_&&_.animated)&&lastDownEl$1!==_)){if(oldIndex$1=index$1(_),oldDraggableIndex$1=index$1(_,r.draggable),typeof f=="function"){if(f.call(this,n,_,this)){_dispatchEvent$1({sortable:t,rootEl:p,name:"filter",targetEl:_,toEl:e,fromEl:e}),pluginEvent$1("filter",t,{evt:n}),o&&n.cancelable&&n.preventDefault();return}}else if(f&&(f=f.split(",").some(function(c){if(c=closest$1(p,c.trim(),e,!1),c)return _dispatchEvent$1({sortable:t,rootEl:c,name:"filter",targetEl:_,fromEl:e,toEl:e}),pluginEvent$1("filter",t,{evt:n}),!0}),f)){o&&n.cancelable&&n.preventDefault();return}r.handle&&!closest$1(p,r.handle,e,!1)||this._prepareDragStart(n,u,_)}}},_prepareDragStart:function a(n,t,e){var r=this,o=r.el,s=r.options,u=o.ownerDocument,_;if(e&&!dragEl$2&&e.parentNode===o){var p=getRect$1(e);if(rootEl$1=o,dragEl$2=e,parentEl$1=dragEl$2.parentNode,nextEl$1=dragEl$2.nextSibling,lastDownEl$1=e,activeGroup$1=s.group,Sortable$1.dragged=dragEl$2,tapEvt$1={target:dragEl$2,clientX:(t||n).clientX,clientY:(t||n).clientY},tapDistanceLeft$1=tapEvt$1.clientX-p.left,tapDistanceTop$1=tapEvt$1.clientY-p.top,this._lastX=(t||n).clientX,this._lastY=(t||n).clientY,dragEl$2.style["will-change"]="all",_=function(){if(pluginEvent$1("delayEnded",r,{evt:n}),Sortable$1.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!FireFox$1&&r.nativeDraggable&&(dragEl$2.draggable=!0),r._triggerDragStart(n,t),_dispatchEvent$1({sortable:r,name:"choose",originalEvent:n}),toggleClass$1(dragEl$2,s.chosenClass,!0)},s.ignore.split(",").forEach(function(f){find$1(dragEl$2,f.trim(),_disableDraggable$1)}),on$1(u,"dragover",nearestEmptyInsertDetectEvent$1),on$1(u,"mousemove",nearestEmptyInsertDetectEvent$1),on$1(u,"touchmove",nearestEmptyInsertDetectEvent$1),on$1(u,"mouseup",r._onDrop),on$1(u,"touchend",r._onDrop),on$1(u,"touchcancel",r._onDrop),FireFox$1&&this.nativeDraggable&&(this.options.touchStartThreshold=4,dragEl$2.draggable=!0),pluginEvent$1("delayStart",this,{evt:n}),s.delay&&(!s.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Edge$1||IE11OrLess$1))){if(Sortable$1.eventCanceled){this._onDrop();return}on$1(u,"mouseup",r._disableDelayedDrag),on$1(u,"touchend",r._disableDelayedDrag),on$1(u,"touchcancel",r._disableDelayedDrag),on$1(u,"mousemove",r._delayedDragTouchMoveHandler),on$1(u,"touchmove",r._delayedDragTouchMoveHandler),s.supportPointer&&on$1(u,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(_,s.delay)}else _()}},_delayedDragTouchMoveHandler:function a(n){var t=n.touches?n.touches[0]:n;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function a(){dragEl$2&&_disableDraggable$1(dragEl$2),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function a(){var n=this.el.ownerDocument;off$1(n,"mouseup",this._disableDelayedDrag),off$1(n,"touchend",this._disableDelayedDrag),off$1(n,"touchcancel",this._disableDelayedDrag),off$1(n,"mousemove",this._delayedDragTouchMoveHandler),off$1(n,"touchmove",this._delayedDragTouchMoveHandler),off$1(n,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function a(n,t){t=t||n.pointerType=="touch"&&n,!this.nativeDraggable||t?this.options.supportPointer?on$1(document,"pointermove",this._onTouchMove):t?on$1(document,"touchmove",this._onTouchMove):on$1(document,"mousemove",this._onTouchMove):(on$1(dragEl$2,"dragend",this),on$1(rootEl$1,"dragstart",this._onDragStart));try{document.selection?_nextTick$1(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function a(n,t){if(awaitingDragStarted$1=!1,rootEl$1&&dragEl$2){pluginEvent$1("dragStarted",this,{evt:t}),this.nativeDraggable&&on$1(document,"dragover",_checkOutsideTargetEl$1);var e=this.options;!n&&toggleClass$1(dragEl$2,e.dragClass,!1),toggleClass$1(dragEl$2,e.ghostClass,!0),Sortable$1.active=this,n&&this._appendGhost(),_dispatchEvent$1({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function a(){if(touchEvt$2){this._lastX=touchEvt$2.clientX,this._lastY=touchEvt$2.clientY,_hideGhostForTarget$1();for(var n=document.elementFromPoint(touchEvt$2.clientX,touchEvt$2.clientY),t=n;n&&n.shadowRoot&&(n=n.shadowRoot.elementFromPoint(touchEvt$2.clientX,touchEvt$2.clientY),n!==t);)t=n;if(dragEl$2.parentNode[expando$1]._isOutsideThisEl(n),t)do{if(t[expando$1]){var e=void 0;if(e=t[expando$1]._onDragOver({clientX:touchEvt$2.clientX,clientY:touchEvt$2.clientY,target:n,rootEl:t}),e&&!this.options.dragoverBubble)break}n=t}while(t=t.parentNode);_unhideGhostForTarget$1()}},_onTouchMove:function a(n){if(tapEvt$1){var t=this.options,e=t.fallbackTolerance,r=t.fallbackOffset,o=n.touches?n.touches[0]:n,s=ghostEl$1&&matrix$1(ghostEl$1,!0),u=ghostEl$1&&s&&s.a,_=ghostEl$1&&s&&s.d,p=PositionGhostAbsolutely$1&&ghostRelativeParent$1&&getRelativeScrollOffset$1(ghostRelativeParent$1),f=(o.clientX-tapEvt$1.clientX+r.x)/(u||1)+(p?p[0]-ghostRelativeParentInitialScroll$1[0]:0)/(u||1),c=(o.clientY-tapEvt$1.clientY+r.y)/(_||1)+(p?p[1]-ghostRelativeParentInitialScroll$1[1]:0)/(_||1);if(!Sortable$1.active&&!awaitingDragStarted$1){if(e&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<e)return;this._onDragStart(n,!0)}if(ghostEl$1){s?(s.e+=f-(lastDx$1||0),s.f+=c-(lastDy$1||0)):s={a:1,b:0,c:0,d:1,e:f,f:c};var l="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")");css$1(ghostEl$1,"webkitTransform",l),css$1(ghostEl$1,"mozTransform",l),css$1(ghostEl$1,"msTransform",l),css$1(ghostEl$1,"transform",l),lastDx$1=f,lastDy$1=c,touchEvt$2=o}n.cancelable&&n.preventDefault()}},_appendGhost:function a(){if(!ghostEl$1){var n=this.options.fallbackOnBody?document.body:rootEl$1,t=getRect$1(dragEl$2,!0,PositionGhostAbsolutely$1,!0,n),e=this.options;if(PositionGhostAbsolutely$1){for(ghostRelativeParent$1=n;css$1(ghostRelativeParent$1,"position")==="static"&&css$1(ghostRelativeParent$1,"transform")==="none"&&ghostRelativeParent$1!==document;)ghostRelativeParent$1=ghostRelativeParent$1.parentNode;ghostRelativeParent$1!==document.body&&ghostRelativeParent$1!==document.documentElement?(ghostRelativeParent$1===document&&(ghostRelativeParent$1=getWindowScrollingElement$1()),t.top+=ghostRelativeParent$1.scrollTop,t.left+=ghostRelativeParent$1.scrollLeft):ghostRelativeParent$1=getWindowScrollingElement$1(),ghostRelativeParentInitialScroll$1=getRelativeScrollOffset$1(ghostRelativeParent$1)}ghostEl$1=dragEl$2.cloneNode(!0),toggleClass$1(ghostEl$1,e.ghostClass,!1),toggleClass$1(ghostEl$1,e.fallbackClass,!0),toggleClass$1(ghostEl$1,e.dragClass,!0),css$1(ghostEl$1,"transition",""),css$1(ghostEl$1,"transform",""),css$1(ghostEl$1,"box-sizing","border-box"),css$1(ghostEl$1,"margin",0),css$1(ghostEl$1,"top",t.top),css$1(ghostEl$1,"left",t.left),css$1(ghostEl$1,"width",t.width),css$1(ghostEl$1,"height",t.height),css$1(ghostEl$1,"opacity","0.8"),css$1(ghostEl$1,"position",PositionGhostAbsolutely$1?"absolute":"fixed"),css$1(ghostEl$1,"zIndex","100000"),css$1(ghostEl$1,"pointerEvents","none"),Sortable$1.ghost=ghostEl$1,n.appendChild(ghostEl$1),css$1(ghostEl$1,"transform-origin",tapDistanceLeft$1/parseInt(ghostEl$1.style.width)*100+"% "+tapDistanceTop$1/parseInt(ghostEl$1.style.height)*100+"%")}},_onDragStart:function a(n,t){var e=this,r=n.dataTransfer,o=e.options;if(pluginEvent$1("dragStart",this,{evt:n}),Sortable$1.eventCanceled){this._onDrop();return}pluginEvent$1("setupClone",this),Sortable$1.eventCanceled||(cloneEl$1=clone$1(dragEl$2),cloneEl$1.removeAttribute("id"),cloneEl$1.draggable=!1,cloneEl$1.style["will-change"]="",this._hideClone(),toggleClass$1(cloneEl$1,this.options.chosenClass,!1),Sortable$1.clone=cloneEl$1),e.cloneId=_nextTick$1(function(){pluginEvent$1("clone",e),!Sortable$1.eventCanceled&&(e.options.removeCloneOnHide||rootEl$1.insertBefore(cloneEl$1,dragEl$2),e._hideClone(),_dispatchEvent$1({sortable:e,name:"clone"}))}),!t&&toggleClass$1(dragEl$2,o.dragClass,!0),t?(ignoreNextClick$1=!0,e._loopId=setInterval(e._emulateDragOver,50)):(off$1(document,"mouseup",e._onDrop),off$1(document,"touchend",e._onDrop),off$1(document,"touchcancel",e._onDrop),r&&(r.effectAllowed="move",o.setData&&o.setData.call(e,r,dragEl$2)),on$1(document,"drop",e),css$1(dragEl$2,"transform","translateZ(0)")),awaitingDragStarted$1=!0,e._dragStartId=_nextTick$1(e._dragStarted.bind(e,t,n)),on$1(document,"selectstart",e),moved$1=!0,Safari$1&&css$1(document.body,"user-select","none")},_onDragOver:function a(n){var t=this.el,e=n.target,r,o,s,u=this.options,_=u.group,p=Sortable$1.active,f=activeGroup$1===_,c=u.sort,l=putSortable$1||p,d,g=this,h=!1;if(_silent$1)return;function v(H,U){pluginEvent$1(H,g,_objectSpread2({evt:n,isOwner:f,axis:d?"vertical":"horizontal",revert:s,dragRect:r,targetRect:o,canSort:c,fromSortable:l,target:e,completed:y,onMove:function(A,M){return _onMove$1(rootEl$1,t,dragEl$2,r,A,getRect$1(A),n,M)},changed:E},U))}function b(){v("dragOverAnimationCapture"),g.captureAnimationState(),g!==l&&l.captureAnimationState()}function y(H){return v("dragOverCompleted",{insertion:H}),H&&(f?p._hideClone():p._showClone(g),g!==l&&(toggleClass$1(dragEl$2,putSortable$1?putSortable$1.options.ghostClass:p.options.ghostClass,!1),toggleClass$1(dragEl$2,u.ghostClass,!0)),putSortable$1!==g&&g!==Sortable$1.active?putSortable$1=g:g===Sortable$1.active&&putSortable$1&&(putSortable$1=null),l===g&&(g._ignoreWhileAnimating=e),g.animateAll(function(){v("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==l&&(l.animateAll(),l._ignoreWhileAnimating=null)),(e===dragEl$2&&!dragEl$2.animated||e===t&&!e.animated)&&(lastTarget$1=null),!u.dragoverBubble&&!n.rootEl&&e!==document&&(dragEl$2.parentNode[expando$1]._isOutsideThisEl(n.target),!H&&nearestEmptyInsertDetectEvent$1(n)),!u.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),h=!0}function E(){newIndex$1=index$1(dragEl$2),newDraggableIndex$1=index$1(dragEl$2,u.draggable),_dispatchEvent$1({sortable:g,name:"change",toEl:t,newIndex:newIndex$1,newDraggableIndex:newDraggableIndex$1,originalEvent:n})}if(n.preventDefault!==void 0&&n.cancelable&&n.preventDefault(),e=closest$1(e,u.draggable,t,!0),v("dragOver"),Sortable$1.eventCanceled)return h;if(dragEl$2.contains(n.target)||e.animated&&e.animatingX&&e.animatingY||g._ignoreWhileAnimating===e)return y(!1);if(ignoreNextClick$1=!1,p&&!u.disabled&&(f?c||(s=parentEl$1!==rootEl$1):putSortable$1===this||(this.lastPutMode=activeGroup$1.checkPull(this,p,dragEl$2,n))&&_.checkPut(this,p,dragEl$2,n))){if(d=this._getDirection(n,e)==="vertical",r=getRect$1(dragEl$2),v("dragOverValid"),Sortable$1.eventCanceled)return h;if(s)return parentEl$1=rootEl$1,b(),this._hideClone(),v("revert"),Sortable$1.eventCanceled||(nextEl$1?rootEl$1.insertBefore(dragEl$2,nextEl$1):rootEl$1.appendChild(dragEl$2)),y(!0);var m=lastChild$1(t,u.draggable);if(!m||_ghostIsLast$1(n,d,this)&&!m.animated){if(m===dragEl$2)return y(!1);if(m&&t===n.target&&(e=m),e&&(o=getRect$1(e)),_onMove$1(rootEl$1,t,dragEl$2,r,e,o,n,!!e)!==!1)return b(),m&&m.nextSibling?t.insertBefore(dragEl$2,m.nextSibling):t.appendChild(dragEl$2),parentEl$1=t,E(),y(!0)}else if(m&&_ghostIsFirst(n,d,this)){var x=getChild$1(t,0,u,!0);if(x===dragEl$2)return y(!1);if(e=x,o=getRect$1(e),_onMove$1(rootEl$1,t,dragEl$2,r,e,o,n,!1)!==!1)return b(),t.insertBefore(dragEl$2,x),parentEl$1=t,E(),y(!0)}else if(e.parentNode===t){o=getRect$1(e);var S=0,T,D=dragEl$2.parentNode!==t,I=!_dragElInRowColumn$1(dragEl$2.animated&&dragEl$2.toRect||r,e.animated&&e.toRect||o,d),P=d?"top":"left",O=isScrolledPast$1(e,"top","top")||isScrolledPast$1(dragEl$2,"top","top"),w=O?O.scrollTop:void 0;lastTarget$1!==e&&(T=o[P],pastFirstInvertThresh$1=!1,isCircumstantialInvert$1=!I&&u.invertSwap||D),S=_getSwapDirection$1(n,e,o,d,I?1:u.swapThreshold,u.invertedSwapThreshold==null?u.swapThreshold:u.invertedSwapThreshold,isCircumstantialInvert$1,lastTarget$1===e);var k;if(S!==0){var C=index$1(dragEl$2);do C-=S,k=parentEl$1.children[C];while(k&&(css$1(k,"display")==="none"||k===ghostEl$1))}if(S===0||k===e)return y(!1);lastTarget$1=e,lastDirection$1=S;var R=e.nextElementSibling,N=!1;N=S===1;var j=_onMove$1(rootEl$1,t,dragEl$2,r,e,o,n,N);if(j!==!1)return(j===1||j===-1)&&(N=j===1),_silent$1=!0,setTimeout(_unsilent$1,30),b(),N&&!R?t.appendChild(dragEl$2):e.parentNode.insertBefore(dragEl$2,N?R:e),O&&scrollBy$1(O,0,w-O.scrollTop),parentEl$1=dragEl$2.parentNode,T!==void 0&&!isCircumstantialInvert$1&&(targetMoveDistance$1=Math.abs(T-getRect$1(e)[P])),E(),y(!0)}if(t.contains(dragEl$2))return y(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function a(){off$1(document,"mousemove",this._onTouchMove),off$1(document,"touchmove",this._onTouchMove),off$1(document,"pointermove",this._onTouchMove),off$1(document,"dragover",nearestEmptyInsertDetectEvent$1),off$1(document,"mousemove",nearestEmptyInsertDetectEvent$1),off$1(document,"touchmove",nearestEmptyInsertDetectEvent$1)},_offUpEvents:function a(){var n=this.el.ownerDocument;off$1(n,"mouseup",this._onDrop),off$1(n,"touchend",this._onDrop),off$1(n,"pointerup",this._onDrop),off$1(n,"touchcancel",this._onDrop),off$1(document,"selectstart",this)},_onDrop:function a(n){var t=this.el,e=this.options;if(newIndex$1=index$1(dragEl$2),newDraggableIndex$1=index$1(dragEl$2,e.draggable),pluginEvent$1("drop",this,{evt:n}),parentEl$1=dragEl$2&&dragEl$2.parentNode,newIndex$1=index$1(dragEl$2),newDraggableIndex$1=index$1(dragEl$2,e.draggable),Sortable$1.eventCanceled){this._nulling();return}awaitingDragStarted$1=!1,isCircumstantialInvert$1=!1,pastFirstInvertThresh$1=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),_cancelNextTick$1(this.cloneId),_cancelNextTick$1(this._dragStartId),this.nativeDraggable&&(off$1(document,"drop",this),off$1(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Safari$1&&css$1(document.body,"user-select",""),css$1(dragEl$2,"transform",""),n&&(moved$1&&(n.cancelable&&n.preventDefault(),!e.dropBubble&&n.stopPropagation()),ghostEl$1&&ghostEl$1.parentNode&&ghostEl$1.parentNode.removeChild(ghostEl$1),(rootEl$1===parentEl$1||putSortable$1&&putSortable$1.lastPutMode!=="clone")&&cloneEl$1&&cloneEl$1.parentNode&&cloneEl$1.parentNode.removeChild(cloneEl$1),dragEl$2&&(this.nativeDraggable&&off$1(dragEl$2,"dragend",this),_disableDraggable$1(dragEl$2),dragEl$2.style["will-change"]="",moved$1&&!awaitingDragStarted$1&&toggleClass$1(dragEl$2,putSortable$1?putSortable$1.options.ghostClass:this.options.ghostClass,!1),toggleClass$1(dragEl$2,this.options.chosenClass,!1),_dispatchEvent$1({sortable:this,name:"unchoose",toEl:parentEl$1,newIndex:null,newDraggableIndex:null,originalEvent:n}),rootEl$1!==parentEl$1?(newIndex$1>=0&&(_dispatchEvent$1({rootEl:parentEl$1,name:"add",toEl:parentEl$1,fromEl:rootEl$1,originalEvent:n}),_dispatchEvent$1({sortable:this,name:"remove",toEl:parentEl$1,originalEvent:n}),_dispatchEvent$1({rootEl:parentEl$1,name:"sort",toEl:parentEl$1,fromEl:rootEl$1,originalEvent:n}),_dispatchEvent$1({sortable:this,name:"sort",toEl:parentEl$1,originalEvent:n})),putSortable$1&&putSortable$1.save()):newIndex$1!==oldIndex$1&&newIndex$1>=0&&(_dispatchEvent$1({sortable:this,name:"update",toEl:parentEl$1,originalEvent:n}),_dispatchEvent$1({sortable:this,name:"sort",toEl:parentEl$1,originalEvent:n})),Sortable$1.active&&((newIndex$1==null||newIndex$1===-1)&&(newIndex$1=oldIndex$1,newDraggableIndex$1=oldDraggableIndex$1),_dispatchEvent$1({sortable:this,name:"end",toEl:parentEl$1,originalEvent:n}),this.save()))),this._nulling()},_nulling:function a(){pluginEvent$1("nulling",this),rootEl$1=dragEl$2=parentEl$1=ghostEl$1=nextEl$1=cloneEl$1=lastDownEl$1=cloneHidden$1=tapEvt$1=touchEvt$2=moved$1=newIndex$1=newDraggableIndex$1=oldIndex$1=oldDraggableIndex$1=lastTarget$1=lastDirection$1=putSortable$1=activeGroup$1=Sortable$1.dragged=Sortable$1.ghost=Sortable$1.clone=Sortable$1.active=null,savedInputChecked$1.forEach(function(n){n.checked=!0}),savedInputChecked$1.length=lastDx$1=lastDy$1=0},handleEvent:function a(n){switch(n.type){case"drop":case"dragend":this._onDrop(n);break;case"dragenter":case"dragover":dragEl$2&&(this._onDragOver(n),_globalDragOver$1(n));break;case"selectstart":n.preventDefault();break}},toArray:function a(){for(var n=[],t,e=this.el.children,r=0,o=e.length,s=this.options;r<o;r++)t=e[r],closest$1(t,s.draggable,this.el,!1)&&n.push(t.getAttribute(s.dataIdAttr)||_generateId$1(t));return n},sort:function a(n,t){var e={},r=this.el;this.toArray().forEach(function(o,s){var u=r.children[s];closest$1(u,this.options.draggable,r,!1)&&(e[o]=u)},this),t&&this.captureAnimationState(),n.forEach(function(o){e[o]&&(r.removeChild(e[o]),r.appendChild(e[o]))}),t&&this.animateAll()},save:function a(){var n=this.options.store;n&&n.set&&n.set(this)},closest:function a(n,t){return closest$1(n,t||this.options.draggable,this.el,!1)},option:function a(n,t){var e=this.options;if(t===void 0)return e[n];var r=PluginManager$1.modifyOption(this,n,t);typeof r!="undefined"?e[n]=r:e[n]=t,n==="group"&&_prepareGroup$1(e)},destroy:function a(){pluginEvent$1("destroy",this);var n=this.el;n[expando$1]=null,off$1(n,"mousedown",this._onTapStart),off$1(n,"touchstart",this._onTapStart),off$1(n,"pointerdown",this._onTapStart),this.nativeDraggable&&(off$1(n,"dragover",this),off$1(n,"dragenter",this)),Array.prototype.forEach.call(n.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),sortables$1.splice(sortables$1.indexOf(this.el),1),this.el=n=null},_hideClone:function a(){if(!cloneHidden$1){if(pluginEvent$1("hideClone",this),Sortable$1.eventCanceled)return;css$1(cloneEl$1,"display","none"),this.options.removeCloneOnHide&&cloneEl$1.parentNode&&cloneEl$1.parentNode.removeChild(cloneEl$1),cloneHidden$1=!0}},_showClone:function a(n){if(n.lastPutMode!=="clone"){this._hideClone();return}if(cloneHidden$1){if(pluginEvent$1("showClone",this),Sortable$1.eventCanceled)return;dragEl$2.parentNode==rootEl$1&&!this.options.group.revertClone?rootEl$1.insertBefore(cloneEl$1,dragEl$2):nextEl$1?rootEl$1.insertBefore(cloneEl$1,nextEl$1):rootEl$1.appendChild(cloneEl$1),this.options.group.revertClone&&this.animate(dragEl$2,cloneEl$1),css$1(cloneEl$1,"display",""),cloneHidden$1=!1}}};function _globalDragOver$1(a){a.dataTransfer&&(a.dataTransfer.dropEffect="move"),a.cancelable&&a.preventDefault()}function _onMove$1(a,n,t,e,r,o,s,u){var _,p=a[expando$1],f=p.options.onMove,c;return window.CustomEvent&&!IE11OrLess$1&&!Edge$1?_=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(_=document.createEvent("Event"),_.initEvent("move",!0,!0)),_.to=n,_.from=a,_.dragged=t,_.draggedRect=e,_.related=r||n,_.relatedRect=o||getRect$1(n),_.willInsertAfter=u,_.originalEvent=s,a.dispatchEvent(_),f&&(c=f.call(p,_,s)),c}function _disableDraggable$1(a){a.draggable=!1}function _unsilent$1(){_silent$1=!1}function _ghostIsFirst(a,n,t){var e=getRect$1(getChild$1(t.el,0,t.options,!0)),r=10;return n?a.clientX<e.left-r||a.clientY<e.top&&a.clientX<e.right:a.clientY<e.top-r||a.clientY<e.bottom&&a.clientX<e.left}function _ghostIsLast$1(a,n,t){var e=getRect$1(lastChild$1(t.el,t.options.draggable)),r=10;return n?a.clientX>e.right+r||a.clientX<=e.right&&a.clientY>e.bottom&&a.clientX>=e.left:a.clientX>e.right&&a.clientY>e.top||a.clientX<=e.right&&a.clientY>e.bottom+r}function _getSwapDirection$1(a,n,t,e,r,o,s,u){var _=e?a.clientY:a.clientX,p=e?t.height:t.width,f=e?t.top:t.left,c=e?t.bottom:t.right,l=!1;if(!s){if(u&&targetMoveDistance$1<p*r){if(!pastFirstInvertThresh$1&&(lastDirection$1===1?_>f+p*o/2:_<c-p*o/2)&&(pastFirstInvertThresh$1=!0),pastFirstInvertThresh$1)l=!0;else if(lastDirection$1===1?_<f+targetMoveDistance$1:_>c-targetMoveDistance$1)return-lastDirection$1}else if(_>f+p*(1-r)/2&&_<c-p*(1-r)/2)return _getInsertDirection$1(n)}return l=l||s,l&&(_<f+p*o/2||_>c-p*o/2)?_>f+p/2?1:-1:0}function _getInsertDirection$1(a){return index$1(dragEl$2)<index$1(a)?1:-1}function _generateId$1(a){for(var n=a.tagName+a.className+a.src+a.href+a.textContent,t=n.length,e=0;t--;)e+=n.charCodeAt(t);return e.toString(36)}function _saveInputCheckedState$1(a){savedInputChecked$1.length=0;for(var n=a.getElementsByTagName("input"),t=n.length;t--;){var e=n[t];e.checked&&savedInputChecked$1.push(e)}}function _nextTick$1(a){return setTimeout(a,0)}function _cancelNextTick$1(a){return clearTimeout(a)}documentExists$1&&on$1(document,"touchmove",function(a){(Sortable$1.active||awaitingDragStarted$1)&&a.cancelable&&a.preventDefault()}),Sortable$1.utils={on:on$1,off:off$1,css:css$1,find:find$1,is:function a(n,t){return!!closest$1(n,t,n,!1)},extend:extend$1,throttle:throttle$1,closest:closest$1,toggleClass:toggleClass$1,clone:clone$1,index:index$1,nextTick:_nextTick$1,cancelNextTick:_cancelNextTick$1,detectDirection:_detectDirection$1,getChild:getChild$1},Sortable$1.get=function(a){return a[expando$1]},Sortable$1.mount=function(){for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];n[0].constructor===Array&&(n=n[0]),n.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(Sortable$1.utils=_objectSpread2(_objectSpread2({},Sortable$1.utils),e.utils)),PluginManager$1.mount(e)})},Sortable$1.create=function(a,n){return new Sortable$1(a,n)},Sortable$1.version=version$1;var autoScrolls$1=[],scrollEl$1,scrollRootEl$1,scrolling$1=!1,lastAutoScrollX$1,lastAutoScrollY$1,touchEvt$1$1,pointerElemChangedInterval$1;function AutoScrollPlugin$1(){function a(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this))}return a.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?on$1(document,"dragover",this._handleAutoScroll):this.options.supportPointer?on$1(document,"pointermove",this._handleFallbackAutoScroll):e.touches?on$1(document,"touchmove",this._handleFallbackAutoScroll):on$1(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;!this.options.dragOverBubble&&!e.rootEl&&this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?off$1(document,"dragover",this._handleAutoScroll):(off$1(document,"pointermove",this._handleFallbackAutoScroll),off$1(document,"touchmove",this._handleFallbackAutoScroll),off$1(document,"mousemove",this._handleFallbackAutoScroll)),clearPointerElemChangedInterval$1(),clearAutoScrolls$1(),cancelThrottle$1()},nulling:function(){touchEvt$1$1=scrollRootEl$1=scrollEl$1=scrolling$1=pointerElemChangedInterval$1=lastAutoScrollX$1=lastAutoScrollY$1=null,autoScrolls$1.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var r=this,o=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,u=document.elementFromPoint(o,s);if(touchEvt$1$1=t,e||this.options.forceAutoScrollFallback||Edge$1||IE11OrLess$1||Safari$1){autoScroll$1(t,this.options,u,e);var _=getParentAutoScrollElement$1(u,!0);scrolling$1&&(!pointerElemChangedInterval$1||o!==lastAutoScrollX$1||s!==lastAutoScrollY$1)&&(pointerElemChangedInterval$1&&clearPointerElemChangedInterval$1(),pointerElemChangedInterval$1=setInterval(function(){var p=getParentAutoScrollElement$1(document.elementFromPoint(o,s),!0);p!==_&&(_=p,clearAutoScrolls$1()),autoScroll$1(t,r.options,p,e)},10),lastAutoScrollX$1=o,lastAutoScrollY$1=s)}else{if(!this.options.bubbleScroll||getParentAutoScrollElement$1(u,!0)===getWindowScrollingElement$1()){clearAutoScrolls$1();return}autoScroll$1(t,this.options,getParentAutoScrollElement$1(u,!1),!1)}}},_extends$1(a,{pluginName:"scroll",initializeByDefault:!0})}function clearAutoScrolls$1(){autoScrolls$1.forEach(function(a){clearInterval(a.pid)}),autoScrolls$1=[]}function clearPointerElemChangedInterval$1(){clearInterval(pointerElemChangedInterval$1)}var autoScroll$1=throttle$1(function(a,n,t,e){if(!!n.scroll){var r=(a.touches?a.touches[0]:a).clientX,o=(a.touches?a.touches[0]:a).clientY,s=n.scrollSensitivity,u=n.scrollSpeed,_=getWindowScrollingElement$1(),p=!1,f;scrollRootEl$1!==t&&(scrollRootEl$1=t,clearAutoScrolls$1(),scrollEl$1=n.scroll,f=n.scrollFn,scrollEl$1===!0&&(scrollEl$1=getParentAutoScrollElement$1(t,!0)));var c=0,l=scrollEl$1;do{var d=l,g=getRect$1(d),h=g.top,v=g.bottom,b=g.left,y=g.right,E=g.width,m=g.height,x=void 0,S=void 0,T=d.scrollWidth,D=d.scrollHeight,I=css$1(d),P=d.scrollLeft,O=d.scrollTop;d===_?(x=E<T&&(I.overflowX==="auto"||I.overflowX==="scroll"||I.overflowX==="visible"),S=m<D&&(I.overflowY==="auto"||I.overflowY==="scroll"||I.overflowY==="visible")):(x=E<T&&(I.overflowX==="auto"||I.overflowX==="scroll"),S=m<D&&(I.overflowY==="auto"||I.overflowY==="scroll"));var w=x&&(Math.abs(y-r)<=s&&P+E<T)-(Math.abs(b-r)<=s&&!!P),k=S&&(Math.abs(v-o)<=s&&O+m<D)-(Math.abs(h-o)<=s&&!!O);if(!autoScrolls$1[c])for(var C=0;C<=c;C++)autoScrolls$1[C]||(autoScrolls$1[C]={});(autoScrolls$1[c].vx!=w||autoScrolls$1[c].vy!=k||autoScrolls$1[c].el!==d)&&(autoScrolls$1[c].el=d,autoScrolls$1[c].vx=w,autoScrolls$1[c].vy=k,clearInterval(autoScrolls$1[c].pid),(w!=0||k!=0)&&(p=!0,autoScrolls$1[c].pid=setInterval(function(){e&&this.layer===0&&Sortable$1.active._onTouchMove(touchEvt$1$1);var R=autoScrolls$1[this.layer].vy?autoScrolls$1[this.layer].vy*u:0,N=autoScrolls$1[this.layer].vx?autoScrolls$1[this.layer].vx*u:0;typeof f=="function"&&f.call(Sortable$1.dragged.parentNode[expando$1],N,R,a,touchEvt$1$1,autoScrolls$1[this.layer].el)!=="continue"||scrollBy$1(autoScrolls$1[this.layer].el,N,R)}.bind({layer:c}),24))),c++}while(n.bubbleScroll&&l!==_&&(l=getParentAutoScrollElement$1(l,!1)));scrolling$1=p}},30),drop$1=function a(n){var t=n.originalEvent,e=n.putSortable,r=n.dragEl,o=n.activeSortable,s=n.dispatchSortableEvent,u=n.hideGhostForTarget,_=n.unhideGhostForTarget;if(!!t){var p=e||o;u();var f=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(f.clientX,f.clientY);_(),p&&!p.el.contains(c)&&(s("spill"),this.onSpill({dragEl:r,putSortable:e}))}};function Revert$1(){}Revert$1.prototype={startIndex:null,dragStart:function a(n){var t=n.oldDraggableIndex;this.startIndex=t},onSpill:function a(n){var t=n.dragEl,e=n.putSortable;this.sortable.captureAnimationState(),e&&e.captureAnimationState();var r=getChild$1(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(t,r):this.sortable.el.appendChild(t),this.sortable.animateAll(),e&&e.animateAll()},drop:drop$1},_extends$1(Revert$1,{pluginName:"revertOnSpill"});function Remove$1(){}Remove$1.prototype={onSpill:function a(n){var t=n.dragEl,e=n.putSortable,r=e||this.sortable;r.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),r.animateAll()},drop:drop$1},_extends$1(Remove$1,{pluginName:"removeOnSpill"}),Sortable$1.mount(new AutoScrollPlugin$1),Sortable$1.mount(Remove$1,Revert$1);var render$1=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("svg",{attrs:{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.79993 0.983171C6.79993 0.80828 6.65815 0.666504 6.48326 0.666504C6.30837 0.666504 6.16659 0.80828 6.16659 0.983171V6.69987H0.483293C0.308402 6.69987 0.166626 6.84165 0.166626 7.01654C0.166626 7.19143 0.308402 7.3332 0.483293 7.3332H6.16659V13.0165C6.16659 13.1914 6.30837 13.3332 6.48326 13.3332C6.65815 13.3332 6.79993 13.1914 6.79993 13.0165V7.3332H12.5166C12.6915 7.3332 12.8333 7.19143 12.8333 7.01654C12.8333 6.84165 12.6915 6.69987 12.5166 6.69987H6.79993V0.983171Z",fill:"#EBEBF5","fill-opacity":"0.6"}})])},staticRenderFns$1=[];const __vue2_script$1={},__cssModules$1={};var __component__$1=normalizeComponent(__vue2_script$1,render$1,staticRenderFns$1,!1,__vue2_injectStyles$1,null,null,null);function __vue2_injectStyles$1(a){for(let n in __cssModules$1)this[n]=__cssModules$1[n]}var IconPlus=function(){return __component__$1.exports}();const useBulletsEditor=(a,n)=>({focusLastBullet:e=>{var u,_,p,f;const r=e||a.value,o=Math.max.apply(Math,r.map(c=>c.last_focus)),s=r.find(c=>c.last_focus===o||c.focus);if(s)(u=s.editor)==null||u.blur(),n(s.id);else if(a.length){const[c]=a;(_=c==null?void 0:c.editor)==null||_.blur(),n(c.id)}if(s)(p=s.editor)==null||p.blur(),n(s.id);else{const[c]=a.value;(f=c.editor)==null||f.blur(),n(c.id)}return s}});var vuedraggable_umd={exports:{}};/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function _typeof(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(n){return typeof n}:_typeof=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof(a)}function _defineProperty(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function _extends(){return _extends=Object.assign||function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},_extends.apply(this,arguments)}function _objectSpread(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},e=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.forEach(function(r){_defineProperty(a,r,t[r])})}return a}function _objectWithoutPropertiesLoose(a,n){if(a==null)return{};var t={},e=Object.keys(a),r,o;for(o=0;o<e.length;o++)r=e[o],!(n.indexOf(r)>=0)&&(t[r]=a[r]);return t}function _objectWithoutProperties(a,n){if(a==null)return{};var t=_objectWithoutPropertiesLoose(a,n),e,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(r=0;r<o.length;r++)e=o[r],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(t[e]=a[e]))}return t}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var n=0,t=new Array(a.length);n<a.length;n++)t[n]=a[n];return t}}function _iterableToArray(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var version="1.10.2";function userAgent(a){if(typeof window!="undefined"&&window.navigator)return!!navigator.userAgent.match(a)}var IE11OrLess=userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Edge=userAgent(/Edge/i),FireFox=userAgent(/firefox/i),Safari=userAgent(/safari/i)&&!userAgent(/chrome/i)&&!userAgent(/android/i),IOS=userAgent(/iP(ad|od|hone)/i),ChromeForAndroid=userAgent(/chrome/i)&&userAgent(/android/i),captureMode={capture:!1,passive:!1};function on(a,n,t){a.addEventListener(n,t,!IE11OrLess&&captureMode)}function off(a,n,t){a.removeEventListener(n,t,!IE11OrLess&&captureMode)}function matches(a,n){if(!!n){if(n[0]===">"&&(n=n.substring(1)),a)try{if(a.matches)return a.matches(n);if(a.msMatchesSelector)return a.msMatchesSelector(n);if(a.webkitMatchesSelector)return a.webkitMatchesSelector(n)}catch{return!1}return!1}}function getParentOrHost(a){return a.host&&a!==document&&a.host.nodeType?a.host:a.parentNode}function closest(a,n,t,e){if(a){t=t||document;do{if(n!=null&&(n[0]===">"?a.parentNode===t&&matches(a,n):matches(a,n))||e&&a===t)return a;if(a===t)break}while(a=getParentOrHost(a))}return null}var R_SPACE=/\s+/g;function toggleClass(a,n,t){if(a&&n)if(a.classList)a.classList[t?"add":"remove"](n);else{var e=(" "+a.className+" ").replace(R_SPACE," ").replace(" "+n+" "," ");a.className=(e+(t?" "+n:"")).replace(R_SPACE," ")}}function css(a,n,t){var e=a&&a.style;if(e){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(a,""):a.currentStyle&&(t=a.currentStyle),n===void 0?t:t[n];!(n in e)&&n.indexOf("webkit")===-1&&(n="-webkit-"+n),e[n]=t+(typeof t=="string"?"":"px")}}function matrix(a,n){var t="";if(typeof a=="string")t=a;else do{var e=css(a,"transform");e&&e!=="none"&&(t=e+" "+t)}while(!n&&(a=a.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(t)}function find(a,n,t){if(a){var e=a.getElementsByTagName(n),r=0,o=e.length;if(t)for(;r<o;r++)t(e[r],r);return e}return[]}function getWindowScrollingElement(){var a=document.scrollingElement;return a||document.documentElement}function getRect(a,n,t,e,r){if(!(!a.getBoundingClientRect&&a!==window)){var o,s,u,_,p,f,c;if(a!==window&&a!==getWindowScrollingElement()?(o=a.getBoundingClientRect(),s=o.top,u=o.left,_=o.bottom,p=o.right,f=o.height,c=o.width):(s=0,u=0,_=window.innerHeight,p=window.innerWidth,f=window.innerHeight,c=window.innerWidth),(n||t)&&a!==window&&(r=r||a.parentNode,!IE11OrLess))do if(r&&r.getBoundingClientRect&&(css(r,"transform")!=="none"||t&&css(r,"position")!=="static")){var l=r.getBoundingClientRect();s-=l.top+parseInt(css(r,"border-top-width")),u-=l.left+parseInt(css(r,"border-left-width")),_=s+o.height,p=u+o.width;break}while(r=r.parentNode);if(e&&a!==window){var d=matrix(r||a),g=d&&d.a,h=d&&d.d;d&&(s/=h,u/=g,c/=g,f/=h,_=s+f,p=u+c)}return{top:s,left:u,bottom:_,right:p,width:c,height:f}}}function isScrolledPast(a,n,t){for(var e=getParentAutoScrollElement(a,!0),r=getRect(a)[n];e;){var o=getRect(e)[t],s=void 0;if(t==="top"||t==="left"?s=r>=o:s=r<=o,!s)return e;if(e===getWindowScrollingElement())break;e=getParentAutoScrollElement(e,!1)}return!1}function getChild(a,n,t){for(var e=0,r=0,o=a.children;r<o.length;){if(o[r].style.display!=="none"&&o[r]!==Sortable.ghost&&o[r]!==Sortable.dragged&&closest(o[r],t.draggable,a,!1)){if(e===n)return o[r];e++}r++}return null}function lastChild(a,n){for(var t=a.lastElementChild;t&&(t===Sortable.ghost||css(t,"display")==="none"||n&&!matches(t,n));)t=t.previousElementSibling;return t||null}function index(a,n){var t=0;if(!a||!a.parentNode)return-1;for(;a=a.previousElementSibling;)a.nodeName.toUpperCase()!=="TEMPLATE"&&a!==Sortable.clone&&(!n||matches(a,n))&&t++;return t}function getRelativeScrollOffset(a){var n=0,t=0,e=getWindowScrollingElement();if(a)do{var r=matrix(a),o=r.a,s=r.d;n+=a.scrollLeft*o,t+=a.scrollTop*s}while(a!==e&&(a=a.parentNode));return[n,t]}function indexOfObject(a,n){for(var t in a)if(!!a.hasOwnProperty(t)){for(var e in n)if(n.hasOwnProperty(e)&&n[e]===a[t][e])return Number(t)}return-1}function getParentAutoScrollElement(a,n){if(!a||!a.getBoundingClientRect)return getWindowScrollingElement();var t=a,e=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var r=css(t);if(t.clientWidth<t.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return getWindowScrollingElement();if(e||n)return t;e=!0}}while(t=t.parentNode);return getWindowScrollingElement()}function extend(a,n){if(a&&n)for(var t in n)n.hasOwnProperty(t)&&(a[t]=n[t]);return a}function isRectEqual(a,n){return Math.round(a.top)===Math.round(n.top)&&Math.round(a.left)===Math.round(n.left)&&Math.round(a.height)===Math.round(n.height)&&Math.round(a.width)===Math.round(n.width)}var _throttleTimeout;function throttle(a,n){return function(){if(!_throttleTimeout){var t=arguments,e=this;t.length===1?a.call(e,t[0]):a.apply(e,t),_throttleTimeout=setTimeout(function(){_throttleTimeout=void 0},n)}}}function cancelThrottle(){clearTimeout(_throttleTimeout),_throttleTimeout=void 0}function scrollBy(a,n,t){a.scrollLeft+=n,a.scrollTop+=t}function clone(a){var n=window.Polymer,t=window.jQuery||window.Zepto;return n&&n.dom?n.dom(a).cloneNode(!0):t?t(a).clone(!0)[0]:a.cloneNode(!0)}function setRect(a,n){css(a,"position","absolute"),css(a,"top",n.top),css(a,"left",n.left),css(a,"width",n.width),css(a,"height",n.height)}function unsetRect(a){css(a,"position",""),css(a,"top",""),css(a,"left",""),css(a,"width",""),css(a,"height","")}var expando="Sortable"+new Date().getTime();function AnimationStateManager(){var a=[],n;return{captureAnimationState:function(){if(a=[],!!this.options.animation){var e=[].slice.call(this.el.children);e.forEach(function(r){if(!(css(r,"display")==="none"||r===Sortable.ghost)){a.push({target:r,rect:getRect(r)});var o=_objectSpread({},a[a.length-1].rect);if(r.thisAnimationDuration){var s=matrix(r,!0);s&&(o.top-=s.f,o.left-=s.e)}r.fromRect=o}})}},addAnimationState:function(e){a.push(e)},removeAnimationState:function(e){a.splice(indexOfObject(a,{target:e}),1)},animateAll:function(e){var r=this;if(!this.options.animation){clearTimeout(n),typeof e=="function"&&e();return}var o=!1,s=0;a.forEach(function(u){var _=0,p=u.target,f=p.fromRect,c=getRect(p),l=p.prevFromRect,d=p.prevToRect,g=u.rect,h=matrix(p,!0);h&&(c.top-=h.f,c.left-=h.e),p.toRect=c,p.thisAnimationDuration&&isRectEqual(l,c)&&!isRectEqual(f,c)&&(g.top-c.top)/(g.left-c.left)===(f.top-c.top)/(f.left-c.left)&&(_=calculateRealTime(g,l,d,r.options)),isRectEqual(c,f)||(p.prevFromRect=f,p.prevToRect=c,_||(_=r.options.animation),r.animate(p,g,c,_)),_&&(o=!0,s=Math.max(s,_),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},_),p.thisAnimationDuration=_)}),clearTimeout(n),o?n=setTimeout(function(){typeof e=="function"&&e()},s):typeof e=="function"&&e(),a=[]},animate:function(e,r,o,s){if(s){css(e,"transition",""),css(e,"transform","");var u=matrix(this.el),_=u&&u.a,p=u&&u.d,f=(r.left-o.left)/(_||1),c=(r.top-o.top)/(p||1);e.animatingX=!!f,e.animatingY=!!c,css(e,"transform","translate3d("+f+"px,"+c+"px,0)"),repaint(e),css(e,"transition","transform "+s+"ms"+(this.options.easing?" "+this.options.easing:"")),css(e,"transform","translate3d(0,0,0)"),typeof e.animated=="number"&&clearTimeout(e.animated),e.animated=setTimeout(function(){css(e,"transition",""),css(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},s)}}}}function repaint(a){return a.offsetWidth}function calculateRealTime(a,n,t,e){return Math.sqrt(Math.pow(n.top-a.top,2)+Math.pow(n.left-a.left,2))/Math.sqrt(Math.pow(n.top-t.top,2)+Math.pow(n.left-t.left,2))*e.animation}var plugins=[],defaults={initializeByDefault:!0},PluginManager={mount:function a(n){for(var t in defaults)defaults.hasOwnProperty(t)&&!(t in n)&&(n[t]=defaults[t]);plugins.push(n)},pluginEvent:function a(n,t,e){var r=this;this.eventCanceled=!1,e.cancel=function(){r.eventCanceled=!0};var o=n+"Global";plugins.forEach(function(s){!t[s.pluginName]||(t[s.pluginName][o]&&t[s.pluginName][o](_objectSpread({sortable:t},e)),t.options[s.pluginName]&&t[s.pluginName][n]&&t[s.pluginName][n](_objectSpread({sortable:t},e)))})},initializePlugins:function a(n,t,e,r){plugins.forEach(function(u){var _=u.pluginName;if(!(!n.options[_]&&!u.initializeByDefault)){var p=new u(n,t,n.options);p.sortable=n,p.options=n.options,n[_]=p,_extends(e,p.defaults)}});for(var o in n.options)if(!!n.options.hasOwnProperty(o)){var s=this.modifyOption(n,o,n.options[o]);typeof s!="undefined"&&(n.options[o]=s)}},getEventProperties:function a(n,t){var e={};return plugins.forEach(function(r){typeof r.eventProperties=="function"&&_extends(e,r.eventProperties.call(t[r.pluginName],n))}),e},modifyOption:function a(n,t,e){var r;return plugins.forEach(function(o){!n[o.pluginName]||o.optionListeners&&typeof o.optionListeners[t]=="function"&&(r=o.optionListeners[t].call(n[o.pluginName],e))}),r}};function dispatchEvent(a){var n=a.sortable,t=a.rootEl,e=a.name,r=a.targetEl,o=a.cloneEl,s=a.toEl,u=a.fromEl,_=a.oldIndex,p=a.newIndex,f=a.oldDraggableIndex,c=a.newDraggableIndex,l=a.originalEvent,d=a.putSortable,g=a.extraEventProperties;if(n=n||t&&t[expando],!!n){var h,v=n.options,b="on"+e.charAt(0).toUpperCase()+e.substr(1);window.CustomEvent&&!IE11OrLess&&!Edge?h=new CustomEvent(e,{bubbles:!0,cancelable:!0}):(h=document.createEvent("Event"),h.initEvent(e,!0,!0)),h.to=s||t,h.from=u||t,h.item=r||t,h.clone=o,h.oldIndex=_,h.newIndex=p,h.oldDraggableIndex=f,h.newDraggableIndex=c,h.originalEvent=l,h.pullMode=d?d.lastPutMode:void 0;var y=_objectSpread({},g,PluginManager.getEventProperties(e,n));for(var E in y)h[E]=y[E];t&&t.dispatchEvent(h),v[b]&&v[b].call(n,h)}}var pluginEvent=function a(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.evt,o=_objectWithoutProperties(e,["evt"]);PluginManager.pluginEvent.bind(Sortable)(n,t,_objectSpread({dragEl,parentEl,ghostEl,rootEl,nextEl,lastDownEl,cloneEl,cloneHidden,dragStarted:moved,putSortable,activeSortable:Sortable.active,originalEvent:r,oldIndex,oldDraggableIndex,newIndex,newDraggableIndex,hideGhostForTarget:_hideGhostForTarget,unhideGhostForTarget:_unhideGhostForTarget,cloneNowHidden:function(){cloneHidden=!0},cloneNowShown:function(){cloneHidden=!1},dispatchSortableEvent:function(u){_dispatchEvent({sortable:t,name:u,originalEvent:r})}},o))};function _dispatchEvent(a){dispatchEvent(_objectSpread({putSortable,cloneEl,targetEl:dragEl,rootEl,oldIndex,oldDraggableIndex,newIndex,newDraggableIndex},a))}var dragEl,parentEl,ghostEl,rootEl,nextEl,lastDownEl,cloneEl,cloneHidden,oldIndex,newIndex,oldDraggableIndex,newDraggableIndex,activeGroup,putSortable,awaitingDragStarted=!1,ignoreNextClick=!1,sortables=[],tapEvt,touchEvt,lastDx,lastDy,tapDistanceLeft,tapDistanceTop,moved,lastTarget,lastDirection,pastFirstInvertThresh=!1,isCircumstantialInvert=!1,targetMoveDistance,ghostRelativeParent,ghostRelativeParentInitialScroll=[],_silent=!1,savedInputChecked=[],documentExists=typeof document!="undefined",PositionGhostAbsolutely=IOS,CSSFloatProperty=Edge||IE11OrLess?"cssFloat":"float",supportDraggable=documentExists&&!ChromeForAndroid&&!IOS&&"draggable"in document.createElement("div"),supportCssPointerEvents=function(){if(!!documentExists){if(IE11OrLess)return!1;var a=document.createElement("x");return a.style.cssText="pointer-events:auto",a.style.pointerEvents==="auto"}}(),_detectDirection=function a(n,t){var e=css(n),r=parseInt(e.width)-parseInt(e.paddingLeft)-parseInt(e.paddingRight)-parseInt(e.borderLeftWidth)-parseInt(e.borderRightWidth),o=getChild(n,0,t),s=getChild(n,1,t),u=o&&css(o),_=s&&css(s),p=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+getRect(o).width,f=_&&parseInt(_.marginLeft)+parseInt(_.marginRight)+getRect(s).width;if(e.display==="flex")return e.flexDirection==="column"||e.flexDirection==="column-reverse"?"vertical":"horizontal";if(e.display==="grid")return e.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&u.float&&u.float!=="none"){var c=u.float==="left"?"left":"right";return s&&(_.clear==="both"||_.clear===c)?"vertical":"horizontal"}return o&&(u.display==="block"||u.display==="flex"||u.display==="table"||u.display==="grid"||p>=r&&e[CSSFloatProperty]==="none"||s&&e[CSSFloatProperty]==="none"&&p+f>r)?"vertical":"horizontal"},_dragElInRowColumn=function a(n,t,e){var r=e?n.left:n.top,o=e?n.right:n.bottom,s=e?n.width:n.height,u=e?t.left:t.top,_=e?t.right:t.bottom,p=e?t.width:t.height;return r===u||o===_||r+s/2===u+p/2},_detectNearestEmptySortable=function a(n,t){var e;return sortables.some(function(r){if(!lastChild(r)){var o=getRect(r),s=r[expando].options.emptyInsertThreshold,u=n>=o.left-s&&n<=o.right+s,_=t>=o.top-s&&t<=o.bottom+s;if(s&&u&&_)return e=r}}),e},_prepareGroup=function a(n){function t(o,s){return function(u,_,p,f){var c=u.options.group.name&&_.options.group.name&&u.options.group.name===_.options.group.name;if(o==null&&(s||c))return!0;if(o==null||o===!1)return!1;if(s&&o==="clone")return o;if(typeof o=="function")return t(o(u,_,p,f),s)(u,_,p,f);var l=(s?u:_).options.group.name;return o===!0||typeof o=="string"&&o===l||o.join&&o.indexOf(l)>-1}}var e={},r=n.group;(!r||_typeof(r)!="object")&&(r={name:r}),e.name=r.name,e.checkPull=t(r.pull,!0),e.checkPut=t(r.put),e.revertClone=r.revertClone,n.group=e},_hideGhostForTarget=function a(){!supportCssPointerEvents&&ghostEl&&css(ghostEl,"display","none")},_unhideGhostForTarget=function a(){!supportCssPointerEvents&&ghostEl&&css(ghostEl,"display","")};documentExists&&document.addEventListener("click",function(a){if(ignoreNextClick)return a.preventDefault(),a.stopPropagation&&a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),ignoreNextClick=!1,!1},!0);var nearestEmptyInsertDetectEvent=function a(n){if(dragEl){n=n.touches?n.touches[0]:n;var t=_detectNearestEmptySortable(n.clientX,n.clientY);if(t){var e={};for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r]);e.target=e.rootEl=t,e.preventDefault=void 0,e.stopPropagation=void 0,t[expando]._onDragOver(e)}}},_checkOutsideTargetEl=function a(n){dragEl&&dragEl.parentNode[expando]._isOutsideThisEl(n.target)};function Sortable(a,n){if(!(a&&a.nodeType&&a.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(a));this.el=a,this.options=n=_extends({},n),a[expando]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(a.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return _detectDirection(a,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(s,u){s.setData("Text",u.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:Sortable.supportPointer!==!1&&"PointerEvent"in window,emptyInsertThreshold:5};PluginManager.initializePlugins(this,a,t);for(var e in t)!(e in n)&&(n[e]=t[e]);_prepareGroup(n);for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this));this.nativeDraggable=n.forceFallback?!1:supportDraggable,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?on(a,"pointerdown",this._onTapStart):(on(a,"mousedown",this._onTapStart),on(a,"touchstart",this._onTapStart)),this.nativeDraggable&&(on(a,"dragover",this),on(a,"dragenter",this)),sortables.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[]),_extends(this,AnimationStateManager())}Sortable.prototype={constructor:Sortable,_isOutsideThisEl:function a(n){!this.el.contains(n)&&n!==this.el&&(lastTarget=null)},_getDirection:function a(n,t){return typeof this.options.direction=="function"?this.options.direction.call(this,n,t,dragEl):this.options.direction},_onTapStart:function a(n){if(!!n.cancelable){var t=this,e=this.el,r=this.options,o=r.preventOnFilter,s=n.type,u=n.touches&&n.touches[0]||n.pointerType&&n.pointerType==="touch"&&n,_=(u||n).target,p=n.target.shadowRoot&&(n.path&&n.path[0]||n.composedPath&&n.composedPath()[0])||_,f=r.filter;if(_saveInputCheckedState(e),!dragEl&&!(/mousedown|pointerdown/.test(s)&&n.button!==0||r.disabled)&&!p.isContentEditable&&(_=closest(_,r.draggable,e,!1),!(_&&_.animated)&&lastDownEl!==_)){if(oldIndex=index(_),oldDraggableIndex=index(_,r.draggable),typeof f=="function"){if(f.call(this,n,_,this)){_dispatchEvent({sortable:t,rootEl:p,name:"filter",targetEl:_,toEl:e,fromEl:e}),pluginEvent("filter",t,{evt:n}),o&&n.cancelable&&n.preventDefault();return}}else if(f&&(f=f.split(",").some(function(c){if(c=closest(p,c.trim(),e,!1),c)return _dispatchEvent({sortable:t,rootEl:c,name:"filter",targetEl:_,fromEl:e,toEl:e}),pluginEvent("filter",t,{evt:n}),!0}),f)){o&&n.cancelable&&n.preventDefault();return}r.handle&&!closest(p,r.handle,e,!1)||this._prepareDragStart(n,u,_)}}},_prepareDragStart:function a(n,t,e){var r=this,o=r.el,s=r.options,u=o.ownerDocument,_;if(e&&!dragEl&&e.parentNode===o){var p=getRect(e);if(rootEl=o,dragEl=e,parentEl=dragEl.parentNode,nextEl=dragEl.nextSibling,lastDownEl=e,activeGroup=s.group,Sortable.dragged=dragEl,tapEvt={target:dragEl,clientX:(t||n).clientX,clientY:(t||n).clientY},tapDistanceLeft=tapEvt.clientX-p.left,tapDistanceTop=tapEvt.clientY-p.top,this._lastX=(t||n).clientX,this._lastY=(t||n).clientY,dragEl.style["will-change"]="all",_=function(){if(pluginEvent("delayEnded",r,{evt:n}),Sortable.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!FireFox&&r.nativeDraggable&&(dragEl.draggable=!0),r._triggerDragStart(n,t),_dispatchEvent({sortable:r,name:"choose",originalEvent:n}),toggleClass(dragEl,s.chosenClass,!0)},s.ignore.split(",").forEach(function(f){find(dragEl,f.trim(),_disableDraggable)}),on(u,"dragover",nearestEmptyInsertDetectEvent),on(u,"mousemove",nearestEmptyInsertDetectEvent),on(u,"touchmove",nearestEmptyInsertDetectEvent),on(u,"mouseup",r._onDrop),on(u,"touchend",r._onDrop),on(u,"touchcancel",r._onDrop),FireFox&&this.nativeDraggable&&(this.options.touchStartThreshold=4,dragEl.draggable=!0),pluginEvent("delayStart",this,{evt:n}),s.delay&&(!s.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Edge||IE11OrLess))){if(Sortable.eventCanceled){this._onDrop();return}on(u,"mouseup",r._disableDelayedDrag),on(u,"touchend",r._disableDelayedDrag),on(u,"touchcancel",r._disableDelayedDrag),on(u,"mousemove",r._delayedDragTouchMoveHandler),on(u,"touchmove",r._delayedDragTouchMoveHandler),s.supportPointer&&on(u,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(_,s.delay)}else _()}},_delayedDragTouchMoveHandler:function a(n){var t=n.touches?n.touches[0]:n;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function a(){dragEl&&_disableDraggable(dragEl),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function a(){var n=this.el.ownerDocument;off(n,"mouseup",this._disableDelayedDrag),off(n,"touchend",this._disableDelayedDrag),off(n,"touchcancel",this._disableDelayedDrag),off(n,"mousemove",this._delayedDragTouchMoveHandler),off(n,"touchmove",this._delayedDragTouchMoveHandler),off(n,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function a(n,t){t=t||n.pointerType=="touch"&&n,!this.nativeDraggable||t?this.options.supportPointer?on(document,"pointermove",this._onTouchMove):t?on(document,"touchmove",this._onTouchMove):on(document,"mousemove",this._onTouchMove):(on(dragEl,"dragend",this),on(rootEl,"dragstart",this._onDragStart));try{document.selection?_nextTick(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function a(n,t){if(awaitingDragStarted=!1,rootEl&&dragEl){pluginEvent("dragStarted",this,{evt:t}),this.nativeDraggable&&on(document,"dragover",_checkOutsideTargetEl);var e=this.options;!n&&toggleClass(dragEl,e.dragClass,!1),toggleClass(dragEl,e.ghostClass,!0),Sortable.active=this,n&&this._appendGhost(),_dispatchEvent({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function a(){if(touchEvt){this._lastX=touchEvt.clientX,this._lastY=touchEvt.clientY,_hideGhostForTarget();for(var n=document.elementFromPoint(touchEvt.clientX,touchEvt.clientY),t=n;n&&n.shadowRoot&&(n=n.shadowRoot.elementFromPoint(touchEvt.clientX,touchEvt.clientY),n!==t);)t=n;if(dragEl.parentNode[expando]._isOutsideThisEl(n),t)do{if(t[expando]){var e=void 0;if(e=t[expando]._onDragOver({clientX:touchEvt.clientX,clientY:touchEvt.clientY,target:n,rootEl:t}),e&&!this.options.dragoverBubble)break}n=t}while(t=t.parentNode);_unhideGhostForTarget()}},_onTouchMove:function a(n){if(tapEvt){var t=this.options,e=t.fallbackTolerance,r=t.fallbackOffset,o=n.touches?n.touches[0]:n,s=ghostEl&&matrix(ghostEl,!0),u=ghostEl&&s&&s.a,_=ghostEl&&s&&s.d,p=PositionGhostAbsolutely&&ghostRelativeParent&&getRelativeScrollOffset(ghostRelativeParent),f=(o.clientX-tapEvt.clientX+r.x)/(u||1)+(p?p[0]-ghostRelativeParentInitialScroll[0]:0)/(u||1),c=(o.clientY-tapEvt.clientY+r.y)/(_||1)+(p?p[1]-ghostRelativeParentInitialScroll[1]:0)/(_||1);if(!Sortable.active&&!awaitingDragStarted){if(e&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<e)return;this._onDragStart(n,!0)}if(ghostEl){s?(s.e+=f-(lastDx||0),s.f+=c-(lastDy||0)):s={a:1,b:0,c:0,d:1,e:f,f:c};var l="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")");css(ghostEl,"webkitTransform",l),css(ghostEl,"mozTransform",l),css(ghostEl,"msTransform",l),css(ghostEl,"transform",l),lastDx=f,lastDy=c,touchEvt=o}n.cancelable&&n.preventDefault()}},_appendGhost:function a(){if(!ghostEl){var n=this.options.fallbackOnBody?document.body:rootEl,t=getRect(dragEl,!0,PositionGhostAbsolutely,!0,n),e=this.options;if(PositionGhostAbsolutely){for(ghostRelativeParent=n;css(ghostRelativeParent,"position")==="static"&&css(ghostRelativeParent,"transform")==="none"&&ghostRelativeParent!==document;)ghostRelativeParent=ghostRelativeParent.parentNode;ghostRelativeParent!==document.body&&ghostRelativeParent!==document.documentElement?(ghostRelativeParent===document&&(ghostRelativeParent=getWindowScrollingElement()),t.top+=ghostRelativeParent.scrollTop,t.left+=ghostRelativeParent.scrollLeft):ghostRelativeParent=getWindowScrollingElement(),ghostRelativeParentInitialScroll=getRelativeScrollOffset(ghostRelativeParent)}ghostEl=dragEl.cloneNode(!0),toggleClass(ghostEl,e.ghostClass,!1),toggleClass(ghostEl,e.fallbackClass,!0),toggleClass(ghostEl,e.dragClass,!0),css(ghostEl,"transition",""),css(ghostEl,"transform",""),css(ghostEl,"box-sizing","border-box"),css(ghostEl,"margin",0),css(ghostEl,"top",t.top),css(ghostEl,"left",t.left),css(ghostEl,"width",t.width),css(ghostEl,"height",t.height),css(ghostEl,"opacity","0.8"),css(ghostEl,"position",PositionGhostAbsolutely?"absolute":"fixed"),css(ghostEl,"zIndex","100000"),css(ghostEl,"pointerEvents","none"),Sortable.ghost=ghostEl,n.appendChild(ghostEl),css(ghostEl,"transform-origin",tapDistanceLeft/parseInt(ghostEl.style.width)*100+"% "+tapDistanceTop/parseInt(ghostEl.style.height)*100+"%")}},_onDragStart:function a(n,t){var e=this,r=n.dataTransfer,o=e.options;if(pluginEvent("dragStart",this,{evt:n}),Sortable.eventCanceled){this._onDrop();return}pluginEvent("setupClone",this),Sortable.eventCanceled||(cloneEl=clone(dragEl),cloneEl.draggable=!1,cloneEl.style["will-change"]="",this._hideClone(),toggleClass(cloneEl,this.options.chosenClass,!1),Sortable.clone=cloneEl),e.cloneId=_nextTick(function(){pluginEvent("clone",e),!Sortable.eventCanceled&&(e.options.removeCloneOnHide||rootEl.insertBefore(cloneEl,dragEl),e._hideClone(),_dispatchEvent({sortable:e,name:"clone"}))}),!t&&toggleClass(dragEl,o.dragClass,!0),t?(ignoreNextClick=!0,e._loopId=setInterval(e._emulateDragOver,50)):(off(document,"mouseup",e._onDrop),off(document,"touchend",e._onDrop),off(document,"touchcancel",e._onDrop),r&&(r.effectAllowed="move",o.setData&&o.setData.call(e,r,dragEl)),on(document,"drop",e),css(dragEl,"transform","translateZ(0)")),awaitingDragStarted=!0,e._dragStartId=_nextTick(e._dragStarted.bind(e,t,n)),on(document,"selectstart",e),moved=!0,Safari&&css(document.body,"user-select","none")},_onDragOver:function a(n){var t=this.el,e=n.target,r,o,s,u=this.options,_=u.group,p=Sortable.active,f=activeGroup===_,c=u.sort,l=putSortable||p,d,g=this,h=!1;if(_silent)return;function v(j,H){pluginEvent(j,g,_objectSpread({evt:n,isOwner:f,axis:d?"vertical":"horizontal",revert:s,dragRect:r,targetRect:o,canSort:c,fromSortable:l,target:e,completed:y,onMove:function(q,A){return _onMove(rootEl,t,dragEl,r,q,getRect(q),n,A)},changed:E},H))}function b(){v("dragOverAnimationCapture"),g.captureAnimationState(),g!==l&&l.captureAnimationState()}function y(j){return v("dragOverCompleted",{insertion:j}),j&&(f?p._hideClone():p._showClone(g),g!==l&&(toggleClass(dragEl,putSortable?putSortable.options.ghostClass:p.options.ghostClass,!1),toggleClass(dragEl,u.ghostClass,!0)),putSortable!==g&&g!==Sortable.active?putSortable=g:g===Sortable.active&&putSortable&&(putSortable=null),l===g&&(g._ignoreWhileAnimating=e),g.animateAll(function(){v("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==l&&(l.animateAll(),l._ignoreWhileAnimating=null)),(e===dragEl&&!dragEl.animated||e===t&&!e.animated)&&(lastTarget=null),!u.dragoverBubble&&!n.rootEl&&e!==document&&(dragEl.parentNode[expando]._isOutsideThisEl(n.target),!j&&nearestEmptyInsertDetectEvent(n)),!u.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),h=!0}function E(){newIndex=index(dragEl),newDraggableIndex=index(dragEl,u.draggable),_dispatchEvent({sortable:g,name:"change",toEl:t,newIndex,newDraggableIndex,originalEvent:n})}if(n.preventDefault!==void 0&&n.cancelable&&n.preventDefault(),e=closest(e,u.draggable,t,!0),v("dragOver"),Sortable.eventCanceled)return h;if(dragEl.contains(n.target)||e.animated&&e.animatingX&&e.animatingY||g._ignoreWhileAnimating===e)return y(!1);if(ignoreNextClick=!1,p&&!u.disabled&&(f?c||(s=!rootEl.contains(dragEl)):putSortable===this||(this.lastPutMode=activeGroup.checkPull(this,p,dragEl,n))&&_.checkPut(this,p,dragEl,n))){if(d=this._getDirection(n,e)==="vertical",r=getRect(dragEl),v("dragOverValid"),Sortable.eventCanceled)return h;if(s)return parentEl=rootEl,b(),this._hideClone(),v("revert"),Sortable.eventCanceled||(nextEl?rootEl.insertBefore(dragEl,nextEl):rootEl.appendChild(dragEl)),y(!0);var m=lastChild(t,u.draggable);if(!m||_ghostIsLast(n,d,this)&&!m.animated){if(m===dragEl)return y(!1);if(m&&t===n.target&&(e=m),e&&(o=getRect(e)),_onMove(rootEl,t,dragEl,r,e,o,n,!!e)!==!1)return b(),t.appendChild(dragEl),parentEl=t,E(),y(!0)}else if(e.parentNode===t){o=getRect(e);var x=0,S,T=dragEl.parentNode!==t,D=!_dragElInRowColumn(dragEl.animated&&dragEl.toRect||r,e.animated&&e.toRect||o,d),I=d?"top":"left",P=isScrolledPast(e,"top","top")||isScrolledPast(dragEl,"top","top"),O=P?P.scrollTop:void 0;lastTarget!==e&&(S=o[I],pastFirstInvertThresh=!1,isCircumstantialInvert=!D&&u.invertSwap||T),x=_getSwapDirection(n,e,o,d,D?1:u.swapThreshold,u.invertedSwapThreshold==null?u.swapThreshold:u.invertedSwapThreshold,isCircumstantialInvert,lastTarget===e);var w;if(x!==0){var k=index(dragEl);do k-=x,w=parentEl.children[k];while(w&&(css(w,"display")==="none"||w===ghostEl))}if(x===0||w===e)return y(!1);lastTarget=e,lastDirection=x;var C=e.nextElementSibling,R=!1;R=x===1;var N=_onMove(rootEl,t,dragEl,r,e,o,n,R);if(N!==!1)return(N===1||N===-1)&&(R=N===1),_silent=!0,setTimeout(_unsilent,30),b(),R&&!C?t.appendChild(dragEl):e.parentNode.insertBefore(dragEl,R?C:e),P&&scrollBy(P,0,O-P.scrollTop),parentEl=dragEl.parentNode,S!==void 0&&!isCircumstantialInvert&&(targetMoveDistance=Math.abs(S-getRect(e)[I])),E(),y(!0)}if(t.contains(dragEl))return y(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function a(){off(document,"mousemove",this._onTouchMove),off(document,"touchmove",this._onTouchMove),off(document,"pointermove",this._onTouchMove),off(document,"dragover",nearestEmptyInsertDetectEvent),off(document,"mousemove",nearestEmptyInsertDetectEvent),off(document,"touchmove",nearestEmptyInsertDetectEvent)},_offUpEvents:function a(){var n=this.el.ownerDocument;off(n,"mouseup",this._onDrop),off(n,"touchend",this._onDrop),off(n,"pointerup",this._onDrop),off(n,"touchcancel",this._onDrop),off(document,"selectstart",this)},_onDrop:function a(n){var t=this.el,e=this.options;if(newIndex=index(dragEl),newDraggableIndex=index(dragEl,e.draggable),pluginEvent("drop",this,{evt:n}),parentEl=dragEl&&dragEl.parentNode,newIndex=index(dragEl),newDraggableIndex=index(dragEl,e.draggable),Sortable.eventCanceled){this._nulling();return}awaitingDragStarted=!1,isCircumstantialInvert=!1,pastFirstInvertThresh=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),_cancelNextTick(this.cloneId),_cancelNextTick(this._dragStartId),this.nativeDraggable&&(off(document,"drop",this),off(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Safari&&css(document.body,"user-select",""),css(dragEl,"transform",""),n&&(moved&&(n.cancelable&&n.preventDefault(),!e.dropBubble&&n.stopPropagation()),ghostEl&&ghostEl.parentNode&&ghostEl.parentNode.removeChild(ghostEl),(rootEl===parentEl||putSortable&&putSortable.lastPutMode!=="clone")&&cloneEl&&cloneEl.parentNode&&cloneEl.parentNode.removeChild(cloneEl),dragEl&&(this.nativeDraggable&&off(dragEl,"dragend",this),_disableDraggable(dragEl),dragEl.style["will-change"]="",moved&&!awaitingDragStarted&&toggleClass(dragEl,putSortable?putSortable.options.ghostClass:this.options.ghostClass,!1),toggleClass(dragEl,this.options.chosenClass,!1),_dispatchEvent({sortable:this,name:"unchoose",toEl:parentEl,newIndex:null,newDraggableIndex:null,originalEvent:n}),rootEl!==parentEl?(newIndex>=0&&(_dispatchEvent({rootEl:parentEl,name:"add",toEl:parentEl,fromEl:rootEl,originalEvent:n}),_dispatchEvent({sortable:this,name:"remove",toEl:parentEl,originalEvent:n}),_dispatchEvent({rootEl:parentEl,name:"sort",toEl:parentEl,fromEl:rootEl,originalEvent:n}),_dispatchEvent({sortable:this,name:"sort",toEl:parentEl,originalEvent:n})),putSortable&&putSortable.save()):newIndex!==oldIndex&&newIndex>=0&&(_dispatchEvent({sortable:this,name:"update",toEl:parentEl,originalEvent:n}),_dispatchEvent({sortable:this,name:"sort",toEl:parentEl,originalEvent:n})),Sortable.active&&((newIndex==null||newIndex===-1)&&(newIndex=oldIndex,newDraggableIndex=oldDraggableIndex),_dispatchEvent({sortable:this,name:"end",toEl:parentEl,originalEvent:n}),this.save()))),this._nulling()},_nulling:function a(){pluginEvent("nulling",this),rootEl=dragEl=parentEl=ghostEl=nextEl=cloneEl=lastDownEl=cloneHidden=tapEvt=touchEvt=moved=newIndex=newDraggableIndex=oldIndex=oldDraggableIndex=lastTarget=lastDirection=putSortable=activeGroup=Sortable.dragged=Sortable.ghost=Sortable.clone=Sortable.active=null,savedInputChecked.forEach(function(n){n.checked=!0}),savedInputChecked.length=lastDx=lastDy=0},handleEvent:function a(n){switch(n.type){case"drop":case"dragend":this._onDrop(n);break;case"dragenter":case"dragover":dragEl&&(this._onDragOver(n),_globalDragOver(n));break;case"selectstart":n.preventDefault();break}},toArray:function a(){for(var n=[],t,e=this.el.children,r=0,o=e.length,s=this.options;r<o;r++)t=e[r],closest(t,s.draggable,this.el,!1)&&n.push(t.getAttribute(s.dataIdAttr)||_generateId(t));return n},sort:function a(n){var t={},e=this.el;this.toArray().forEach(function(r,o){var s=e.children[o];closest(s,this.options.draggable,e,!1)&&(t[r]=s)},this),n.forEach(function(r){t[r]&&(e.removeChild(t[r]),e.appendChild(t[r]))})},save:function a(){var n=this.options.store;n&&n.set&&n.set(this)},closest:function a(n,t){return closest(n,t||this.options.draggable,this.el,!1)},option:function a(n,t){var e=this.options;if(t===void 0)return e[n];var r=PluginManager.modifyOption(this,n,t);typeof r!="undefined"?e[n]=r:e[n]=t,n==="group"&&_prepareGroup(e)},destroy:function a(){pluginEvent("destroy",this);var n=this.el;n[expando]=null,off(n,"mousedown",this._onTapStart),off(n,"touchstart",this._onTapStart),off(n,"pointerdown",this._onTapStart),this.nativeDraggable&&(off(n,"dragover",this),off(n,"dragenter",this)),Array.prototype.forEach.call(n.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),sortables.splice(sortables.indexOf(this.el),1),this.el=n=null},_hideClone:function a(){if(!cloneHidden){if(pluginEvent("hideClone",this),Sortable.eventCanceled)return;css(cloneEl,"display","none"),this.options.removeCloneOnHide&&cloneEl.parentNode&&cloneEl.parentNode.removeChild(cloneEl),cloneHidden=!0}},_showClone:function a(n){if(n.lastPutMode!=="clone"){this._hideClone();return}if(cloneHidden){if(pluginEvent("showClone",this),Sortable.eventCanceled)return;rootEl.contains(dragEl)&&!this.options.group.revertClone?rootEl.insertBefore(cloneEl,dragEl):nextEl?rootEl.insertBefore(cloneEl,nextEl):rootEl.appendChild(cloneEl),this.options.group.revertClone&&this.animate(dragEl,cloneEl),css(cloneEl,"display",""),cloneHidden=!1}}};function _globalDragOver(a){a.dataTransfer&&(a.dataTransfer.dropEffect="move"),a.cancelable&&a.preventDefault()}function _onMove(a,n,t,e,r,o,s,u){var _,p=a[expando],f=p.options.onMove,c;return window.CustomEvent&&!IE11OrLess&&!Edge?_=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(_=document.createEvent("Event"),_.initEvent("move",!0,!0)),_.to=n,_.from=a,_.dragged=t,_.draggedRect=e,_.related=r||n,_.relatedRect=o||getRect(n),_.willInsertAfter=u,_.originalEvent=s,a.dispatchEvent(_),f&&(c=f.call(p,_,s)),c}function _disableDraggable(a){a.draggable=!1}function _unsilent(){_silent=!1}function _ghostIsLast(a,n,t){var e=getRect(lastChild(t.el,t.options.draggable)),r=10;return n?a.clientX>e.right+r||a.clientX<=e.right&&a.clientY>e.bottom&&a.clientX>=e.left:a.clientX>e.right&&a.clientY>e.top||a.clientX<=e.right&&a.clientY>e.bottom+r}function _getSwapDirection(a,n,t,e,r,o,s,u){var _=e?a.clientY:a.clientX,p=e?t.height:t.width,f=e?t.top:t.left,c=e?t.bottom:t.right,l=!1;if(!s){if(u&&targetMoveDistance<p*r){if(!pastFirstInvertThresh&&(lastDirection===1?_>f+p*o/2:_<c-p*o/2)&&(pastFirstInvertThresh=!0),pastFirstInvertThresh)l=!0;else if(lastDirection===1?_<f+targetMoveDistance:_>c-targetMoveDistance)return-lastDirection}else if(_>f+p*(1-r)/2&&_<c-p*(1-r)/2)return _getInsertDirection(n)}return l=l||s,l&&(_<f+p*o/2||_>c-p*o/2)?_>f+p/2?1:-1:0}function _getInsertDirection(a){return index(dragEl)<index(a)?1:-1}function _generateId(a){for(var n=a.tagName+a.className+a.src+a.href+a.textContent,t=n.length,e=0;t--;)e+=n.charCodeAt(t);return e.toString(36)}function _saveInputCheckedState(a){savedInputChecked.length=0;for(var n=a.getElementsByTagName("input"),t=n.length;t--;){var e=n[t];e.checked&&savedInputChecked.push(e)}}function _nextTick(a){return setTimeout(a,0)}function _cancelNextTick(a){return clearTimeout(a)}documentExists&&on(document,"touchmove",function(a){(Sortable.active||awaitingDragStarted)&&a.cancelable&&a.preventDefault()}),Sortable.utils={on,off,css,find,is:function a(n,t){return!!closest(n,t,n,!1)},extend,throttle,closest,toggleClass,clone,index,nextTick:_nextTick,cancelNextTick:_cancelNextTick,detectDirection:_detectDirection,getChild},Sortable.get=function(a){return a[expando]},Sortable.mount=function(){for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];n[0].constructor===Array&&(n=n[0]),n.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(Sortable.utils=_objectSpread({},Sortable.utils,e.utils)),PluginManager.mount(e)})},Sortable.create=function(a,n){return new Sortable(a,n)},Sortable.version=version;var autoScrolls=[],scrollEl,scrollRootEl,scrolling=!1,lastAutoScrollX,lastAutoScrollY,touchEvt$1,pointerElemChangedInterval;function AutoScrollPlugin(){function a(){this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this))}return a.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?on(document,"dragover",this._handleAutoScroll):this.options.supportPointer?on(document,"pointermove",this._handleFallbackAutoScroll):e.touches?on(document,"touchmove",this._handleFallbackAutoScroll):on(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;!this.options.dragOverBubble&&!e.rootEl&&this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?off(document,"dragover",this._handleAutoScroll):(off(document,"pointermove",this._handleFallbackAutoScroll),off(document,"touchmove",this._handleFallbackAutoScroll),off(document,"mousemove",this._handleFallbackAutoScroll)),clearPointerElemChangedInterval(),clearAutoScrolls(),cancelThrottle()},nulling:function(){touchEvt$1=scrollRootEl=scrollEl=scrolling=pointerElemChangedInterval=lastAutoScrollX=lastAutoScrollY=null,autoScrolls.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var r=this,o=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,u=document.elementFromPoint(o,s);if(touchEvt$1=t,e||Edge||IE11OrLess||Safari){autoScroll(t,this.options,u,e);var _=getParentAutoScrollElement(u,!0);scrolling&&(!pointerElemChangedInterval||o!==lastAutoScrollX||s!==lastAutoScrollY)&&(pointerElemChangedInterval&&clearPointerElemChangedInterval(),pointerElemChangedInterval=setInterval(function(){var p=getParentAutoScrollElement(document.elementFromPoint(o,s),!0);p!==_&&(_=p,clearAutoScrolls()),autoScroll(t,r.options,p,e)},10),lastAutoScrollX=o,lastAutoScrollY=s)}else{if(!this.options.bubbleScroll||getParentAutoScrollElement(u,!0)===getWindowScrollingElement()){clearAutoScrolls();return}autoScroll(t,this.options,getParentAutoScrollElement(u,!1),!1)}}},_extends(a,{pluginName:"scroll",initializeByDefault:!0})}function clearAutoScrolls(){autoScrolls.forEach(function(a){clearInterval(a.pid)}),autoScrolls=[]}function clearPointerElemChangedInterval(){clearInterval(pointerElemChangedInterval)}var autoScroll=throttle(function(a,n,t,e){if(!!n.scroll){var r=(a.touches?a.touches[0]:a).clientX,o=(a.touches?a.touches[0]:a).clientY,s=n.scrollSensitivity,u=n.scrollSpeed,_=getWindowScrollingElement(),p=!1,f;scrollRootEl!==t&&(scrollRootEl=t,clearAutoScrolls(),scrollEl=n.scroll,f=n.scrollFn,scrollEl===!0&&(scrollEl=getParentAutoScrollElement(t,!0)));var c=0,l=scrollEl;do{var d=l,g=getRect(d),h=g.top,v=g.bottom,b=g.left,y=g.right,E=g.width,m=g.height,x=void 0,S=void 0,T=d.scrollWidth,D=d.scrollHeight,I=css(d),P=d.scrollLeft,O=d.scrollTop;d===_?(x=E<T&&(I.overflowX==="auto"||I.overflowX==="scroll"||I.overflowX==="visible"),S=m<D&&(I.overflowY==="auto"||I.overflowY==="scroll"||I.overflowY==="visible")):(x=E<T&&(I.overflowX==="auto"||I.overflowX==="scroll"),S=m<D&&(I.overflowY==="auto"||I.overflowY==="scroll"));var w=x&&(Math.abs(y-r)<=s&&P+E<T)-(Math.abs(b-r)<=s&&!!P),k=S&&(Math.abs(v-o)<=s&&O+m<D)-(Math.abs(h-o)<=s&&!!O);if(!autoScrolls[c])for(var C=0;C<=c;C++)autoScrolls[C]||(autoScrolls[C]={});(autoScrolls[c].vx!=w||autoScrolls[c].vy!=k||autoScrolls[c].el!==d)&&(autoScrolls[c].el=d,autoScrolls[c].vx=w,autoScrolls[c].vy=k,clearInterval(autoScrolls[c].pid),(w!=0||k!=0)&&(p=!0,autoScrolls[c].pid=setInterval(function(){e&&this.layer===0&&Sortable.active._onTouchMove(touchEvt$1);var R=autoScrolls[this.layer].vy?autoScrolls[this.layer].vy*u:0,N=autoScrolls[this.layer].vx?autoScrolls[this.layer].vx*u:0;typeof f=="function"&&f.call(Sortable.dragged.parentNode[expando],N,R,a,touchEvt$1,autoScrolls[this.layer].el)!=="continue"||scrollBy(autoScrolls[this.layer].el,N,R)}.bind({layer:c}),24))),c++}while(n.bubbleScroll&&l!==_&&(l=getParentAutoScrollElement(l,!1)));scrolling=p}},30),drop=function a(n){var t=n.originalEvent,e=n.putSortable,r=n.dragEl,o=n.activeSortable,s=n.dispatchSortableEvent,u=n.hideGhostForTarget,_=n.unhideGhostForTarget;if(!!t){var p=e||o;u();var f=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(f.clientX,f.clientY);_(),p&&!p.el.contains(c)&&(s("spill"),this.onSpill({dragEl:r,putSortable:e}))}};function Revert(){}Revert.prototype={startIndex:null,dragStart:function a(n){var t=n.oldDraggableIndex;this.startIndex=t},onSpill:function a(n){var t=n.dragEl,e=n.putSortable;this.sortable.captureAnimationState(),e&&e.captureAnimationState();var r=getChild(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(t,r):this.sortable.el.appendChild(t),this.sortable.animateAll(),e&&e.animateAll()},drop},_extends(Revert,{pluginName:"revertOnSpill"});function Remove(){}Remove.prototype={onSpill:function a(n){var t=n.dragEl,e=n.putSortable,r=e||this.sortable;r.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),r.animateAll()},drop},_extends(Remove,{pluginName:"removeOnSpill"});var lastSwapEl;function SwapPlugin(){function a(){this.defaults={swapClass:"sortable-swap-highlight"}}return a.prototype={dragStart:function(t){var e=t.dragEl;lastSwapEl=e},dragOverValid:function(t){var e=t.completed,r=t.target,o=t.onMove,s=t.activeSortable,u=t.changed,_=t.cancel;if(!!s.options.swap){var p=this.sortable.el,f=this.options;if(r&&r!==p){var c=lastSwapEl;o(r)!==!1?(toggleClass(r,f.swapClass,!0),lastSwapEl=r):lastSwapEl=null,c&&c!==lastSwapEl&&toggleClass(c,f.swapClass,!1)}u(),e(!0),_()}},drop:function(t){var e=t.activeSortable,r=t.putSortable,o=t.dragEl,s=r||this.sortable,u=this.options;lastSwapEl&&toggleClass(lastSwapEl,u.swapClass,!1),lastSwapEl&&(u.swap||r&&r.options.swap)&&o!==lastSwapEl&&(s.captureAnimationState(),s!==e&&e.captureAnimationState(),swapNodes(o,lastSwapEl),s.animateAll(),s!==e&&e.animateAll())},nulling:function(){lastSwapEl=null}},_extends(a,{pluginName:"swap",eventProperties:function(){return{swapItem:lastSwapEl}}})}function swapNodes(a,n){var t=a.parentNode,e=n.parentNode,r,o;!t||!e||t.isEqualNode(n)||e.isEqualNode(a)||(r=index(a),o=index(n),t.isEqualNode(e)&&r<o&&o++,t.insertBefore(n,t.children[r]),e.insertBefore(a,e.children[o]))}var multiDragElements=[],multiDragClones=[],lastMultiDragSelect,multiDragSortable,initialFolding=!1,folding=!1,dragStarted=!1,dragEl$1,clonesFromRect,clonesHidden;function MultiDragPlugin(){function a(n){for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this));n.options.supportPointer?on(document,"pointerup",this._deselectMultiDrag):(on(document,"mouseup",this._deselectMultiDrag),on(document,"touchend",this._deselectMultiDrag)),on(document,"keydown",this._checkKeyDown),on(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(r,o){var s="";multiDragElements.length&&multiDragSortable===n?multiDragElements.forEach(function(u,_){s+=(_?", ":"")+u.textContent}):s=o.textContent,r.setData("Text",s)}}}return a.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){var e=t.dragEl;dragEl$1=e},delayEnded:function(){this.isMultiDrag=~multiDragElements.indexOf(dragEl$1)},setupClone:function(t){var e=t.sortable,r=t.cancel;if(!!this.isMultiDrag){for(var o=0;o<multiDragElements.length;o++)multiDragClones.push(clone(multiDragElements[o])),multiDragClones[o].sortableIndex=multiDragElements[o].sortableIndex,multiDragClones[o].draggable=!1,multiDragClones[o].style["will-change"]="",toggleClass(multiDragClones[o],this.options.selectedClass,!1),multiDragElements[o]===dragEl$1&&toggleClass(multiDragClones[o],this.options.chosenClass,!1);e._hideClone(),r()}},clone:function(t){var e=t.sortable,r=t.rootEl,o=t.dispatchSortableEvent,s=t.cancel;!this.isMultiDrag||this.options.removeCloneOnHide||multiDragElements.length&&multiDragSortable===e&&(insertMultiDragClones(!0,r),o("clone"),s())},showClone:function(t){var e=t.cloneNowShown,r=t.rootEl,o=t.cancel;!this.isMultiDrag||(insertMultiDragClones(!1,r),multiDragClones.forEach(function(s){css(s,"display","")}),e(),clonesHidden=!1,o())},hideClone:function(t){var e=this;t.sortable;var r=t.cloneNowHidden,o=t.cancel;!this.isMultiDrag||(multiDragClones.forEach(function(s){css(s,"display","none"),e.options.removeCloneOnHide&&s.parentNode&&s.parentNode.removeChild(s)}),r(),clonesHidden=!0,o())},dragStartGlobal:function(t){t.sortable,!this.isMultiDrag&&multiDragSortable&&multiDragSortable.multiDrag._deselectMultiDrag(),multiDragElements.forEach(function(e){e.sortableIndex=index(e)}),multiDragElements=multiDragElements.sort(function(e,r){return e.sortableIndex-r.sortableIndex}),dragStarted=!0},dragStarted:function(t){var e=this,r=t.sortable;if(!!this.isMultiDrag){if(this.options.sort&&(r.captureAnimationState(),this.options.animation)){multiDragElements.forEach(function(s){s!==dragEl$1&&css(s,"position","absolute")});var o=getRect(dragEl$1,!1,!0,!0);multiDragElements.forEach(function(s){s!==dragEl$1&&setRect(s,o)}),folding=!0,initialFolding=!0}r.animateAll(function(){folding=!1,initialFolding=!1,e.options.animation&&multiDragElements.forEach(function(s){unsetRect(s)}),e.options.sort&&removeMultiDragElements()})}},dragOver:function(t){var e=t.target,r=t.completed,o=t.cancel;folding&&~multiDragElements.indexOf(e)&&(r(!1),o())},revert:function(t){var e=t.fromSortable,r=t.rootEl,o=t.sortable,s=t.dragRect;multiDragElements.length>1&&(multiDragElements.forEach(function(u){o.addAnimationState({target:u,rect:folding?getRect(u):s}),unsetRect(u),u.fromRect=s,e.removeAnimationState(u)}),folding=!1,insertMultiDragElements(!this.options.removeCloneOnHide,r))},dragOverCompleted:function(t){var e=t.sortable,r=t.isOwner,o=t.insertion,s=t.activeSortable,u=t.parentEl,_=t.putSortable,p=this.options;if(o){if(r&&s._hideClone(),initialFolding=!1,p.animation&&multiDragElements.length>1&&(folding||!r&&!s.options.sort&&!_)){var f=getRect(dragEl$1,!1,!0,!0);multiDragElements.forEach(function(l){l!==dragEl$1&&(setRect(l,f),u.appendChild(l))}),folding=!0}if(!r)if(folding||removeMultiDragElements(),multiDragElements.length>1){var c=clonesHidden;s._showClone(e),s.options.animation&&!clonesHidden&&c&&multiDragClones.forEach(function(l){s.addAnimationState({target:l,rect:clonesFromRect}),l.fromRect=clonesFromRect,l.thisAnimationDuration=null})}else s._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,r=t.isOwner,o=t.activeSortable;if(multiDragElements.forEach(function(u){u.thisAnimationDuration=null}),o.options.animation&&!r&&o.multiDrag.isMultiDrag){clonesFromRect=_extends({},e);var s=matrix(dragEl$1,!0);clonesFromRect.top-=s.f,clonesFromRect.left-=s.e}},dragOverAnimationComplete:function(){folding&&(folding=!1,removeMultiDragElements())},drop:function(t){var e=t.originalEvent,r=t.rootEl,o=t.parentEl,s=t.sortable,u=t.dispatchSortableEvent,_=t.oldIndex,p=t.putSortable,f=p||this.sortable;if(!!e){var c=this.options,l=o.children;if(!dragStarted)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),toggleClass(dragEl$1,c.selectedClass,!~multiDragElements.indexOf(dragEl$1)),~multiDragElements.indexOf(dragEl$1))multiDragElements.splice(multiDragElements.indexOf(dragEl$1),1),lastMultiDragSelect=null,dispatchEvent({sortable:s,rootEl:r,name:"deselect",targetEl:dragEl$1,originalEvt:e});else{if(multiDragElements.push(dragEl$1),dispatchEvent({sortable:s,rootEl:r,name:"select",targetEl:dragEl$1,originalEvt:e}),e.shiftKey&&lastMultiDragSelect&&s.el.contains(lastMultiDragSelect)){var d=index(lastMultiDragSelect),g=index(dragEl$1);if(~d&&~g&&d!==g){var h,v;for(g>d?(v=d,h=g):(v=g,h=d+1);v<h;v++)~multiDragElements.indexOf(l[v])||(toggleClass(l[v],c.selectedClass,!0),multiDragElements.push(l[v]),dispatchEvent({sortable:s,rootEl:r,name:"select",targetEl:l[v],originalEvt:e}))}}else lastMultiDragSelect=dragEl$1;multiDragSortable=f}if(dragStarted&&this.isMultiDrag){if((o[expando].options.sort||o!==r)&&multiDragElements.length>1){var b=getRect(dragEl$1),y=index(dragEl$1,":not(."+this.options.selectedClass+")");if(!initialFolding&&c.animation&&(dragEl$1.thisAnimationDuration=null),f.captureAnimationState(),!initialFolding&&(c.animation&&(dragEl$1.fromRect=b,multiDragElements.forEach(function(m){if(m.thisAnimationDuration=null,m!==dragEl$1){var x=folding?getRect(m):b;m.fromRect=x,f.addAnimationState({target:m,rect:x})}})),removeMultiDragElements(),multiDragElements.forEach(function(m){l[y]?o.insertBefore(m,l[y]):o.appendChild(m),y++}),_===index(dragEl$1))){var E=!1;multiDragElements.forEach(function(m){if(m.sortableIndex!==index(m)){E=!0;return}}),E&&u("update")}multiDragElements.forEach(function(m){unsetRect(m)}),f.animateAll()}multiDragSortable=f}(r===o||p&&p.lastPutMode!=="clone")&&multiDragClones.forEach(function(m){m.parentNode&&m.parentNode.removeChild(m)})}},nullingGlobal:function(){this.isMultiDrag=dragStarted=!1,multiDragClones.length=0},destroyGlobal:function(){this._deselectMultiDrag(),off(document,"pointerup",this._deselectMultiDrag),off(document,"mouseup",this._deselectMultiDrag),off(document,"touchend",this._deselectMultiDrag),off(document,"keydown",this._checkKeyDown),off(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(typeof dragStarted!="undefined"&&dragStarted)&&multiDragSortable===this.sortable&&!(t&&closest(t.target,this.options.draggable,this.sortable.el,!1))&&!(t&&t.button!==0))for(;multiDragElements.length;){var e=multiDragElements[0];toggleClass(e,this.options.selectedClass,!1),multiDragElements.shift(),dispatchEvent({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},_extends(a,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[expando];!e||!e.options.multiDrag||~multiDragElements.indexOf(t)||(multiDragSortable&&multiDragSortable!==e&&(multiDragSortable.multiDrag._deselectMultiDrag(),multiDragSortable=e),toggleClass(t,e.options.selectedClass,!0),multiDragElements.push(t))},deselect:function(t){var e=t.parentNode[expando],r=multiDragElements.indexOf(t);!e||!e.options.multiDrag||!~r||(toggleClass(t,e.options.selectedClass,!1),multiDragElements.splice(r,1))}},eventProperties:function(){var t=this,e=[],r=[];return multiDragElements.forEach(function(o){e.push({multiDragElement:o,index:o.sortableIndex});var s;folding&&o!==dragEl$1?s=-1:folding?s=index(o,":not(."+t.options.selectedClass+")"):s=index(o),r.push({multiDragElement:o,index:s})}),{items:_toConsumableArray(multiDragElements),clones:[].concat(multiDragClones),oldIndicies:e,newIndicies:r}},optionListeners:{multiDragKey:function(t){return t=t.toLowerCase(),t==="ctrl"?t="Control":t.length>1&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}function insertMultiDragElements(a,n){multiDragElements.forEach(function(t,e){var r=n.children[t.sortableIndex+(a?Number(e):0)];r?n.insertBefore(t,r):n.appendChild(t)})}function insertMultiDragClones(a,n){multiDragClones.forEach(function(t,e){var r=n.children[t.sortableIndex+(a?Number(e):0)];r?n.insertBefore(t,r):n.appendChild(t)})}function removeMultiDragElements(){multiDragElements.forEach(function(a){a!==dragEl$1&&a.parentNode&&a.parentNode.removeChild(a)})}Sortable.mount(new AutoScrollPlugin),Sortable.mount(Remove,Revert);var sortable_esm=Object.freeze(Object.defineProperty({__proto__:null,default:Sortable,MultiDrag:MultiDragPlugin,Sortable,Swap:SwapPlugin},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(sortable_esm);(function(a,n){(function(e,r){a.exports=r(require$$0)})(typeof self!="undefined"?self:commonjsGlobal,function(t){return function(e){var r={};function o(s){if(r[s])return r[s].exports;var u=r[s]={i:s,l:!1,exports:{}};return e[s].call(u.exports,u,u.exports,o),u.l=!0,u.exports}return o.m=e,o.c=r,o.d=function(s,u,_){o.o(s,u)||Object.defineProperty(s,u,{enumerable:!0,get:_})},o.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,u){if(u&1&&(s=o(s)),u&8||u&4&&typeof s=="object"&&s&&s.__esModule)return s;var _=Object.create(null);if(o.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:s}),u&2&&typeof s!="string")for(var p in s)o.d(_,p,function(f){return s[f]}.bind(null,p));return _},o.n=function(s){var u=s&&s.__esModule?function(){return s.default}:function(){return s};return o.d(u,"a",u),u},o.o=function(s,u){return Object.prototype.hasOwnProperty.call(s,u)},o.p="",o(o.s="fb15")}({"01f9":function(e,r,o){var s=o("2d00"),u=o("5ca1"),_=o("2aba"),p=o("32e9"),f=o("84f2"),c=o("41a0"),l=o("7f20"),d=o("38fd"),g=o("2b4c")("iterator"),h=!([].keys&&"next"in[].keys()),v="@@iterator",b="keys",y="values",E=function(){return this};e.exports=function(m,x,S,T,D,I,P){c(S,x,T);var O=function(L){if(!h&&L in R)return R[L];switch(L){case b:return function(){return new S(this,L)};case y:return function(){return new S(this,L)}}return function(){return new S(this,L)}},w=x+" Iterator",k=D==y,C=!1,R=m.prototype,N=R[g]||R[v]||D&&R[D],j=N||O(D),H=D?k?O("entries"):j:void 0,U=x=="Array"&&R.entries||N,q,A,M;if(U&&(M=d(U.call(new m)),M!==Object.prototype&&M.next&&(l(M,w,!0),!s&&typeof M[g]!="function"&&p(M,g,E))),k&&N&&N.name!==y&&(C=!0,j=function(){return N.call(this)}),(!s||P)&&(h||C||!R[g])&&p(R,g,j),f[x]=j,f[w]=E,D)if(q={values:k?j:O(y),keys:I?j:O(b),entries:H},P)for(A in q)A in R||_(R,A,q[A]);else u(u.P+u.F*(h||C),x,q);return q}},"02f4":function(e,r,o){var s=o("4588"),u=o("be13");e.exports=function(_){return function(p,f){var c=String(u(p)),l=s(f),d=c.length,g,h;return l<0||l>=d?_?"":void 0:(g=c.charCodeAt(l),g<55296||g>56319||l+1===d||(h=c.charCodeAt(l+1))<56320||h>57343?_?c.charAt(l):g:_?c.slice(l,l+2):(g-55296<<10)+(h-56320)+65536)}}},"0390":function(e,r,o){var s=o("02f4")(!0);e.exports=function(u,_,p){return _+(p?s(u,_).length:1)}},"0bfb":function(e,r,o){var s=o("cb7c");e.exports=function(){var u=s(this),_="";return u.global&&(_+="g"),u.ignoreCase&&(_+="i"),u.multiline&&(_+="m"),u.unicode&&(_+="u"),u.sticky&&(_+="y"),_}},"0d58":function(e,r,o){var s=o("ce10"),u=o("e11e");e.exports=Object.keys||function(p){return s(p,u)}},1495:function(e,r,o){var s=o("86cc"),u=o("cb7c"),_=o("0d58");e.exports=o("9e1e")?Object.defineProperties:function(f,c){u(f);for(var l=_(c),d=l.length,g=0,h;d>g;)s.f(f,h=l[g++],c[h]);return f}},"214f":function(e,r,o){o("b0c5");var s=o("2aba"),u=o("32e9"),_=o("79e5"),p=o("be13"),f=o("2b4c"),c=o("520a"),l=f("species"),d=!_(function(){var h=/./;return h.exec=function(){var v=[];return v.groups={a:"7"},v},"".replace(h,"$<a>")!=="7"}),g=function(){var h=/(?:)/,v=h.exec;h.exec=function(){return v.apply(this,arguments)};var b="ab".split(h);return b.length===2&&b[0]==="a"&&b[1]==="b"}();e.exports=function(h,v,b){var y=f(h),E=!_(function(){var I={};return I[y]=function(){return 7},""[h](I)!=7}),m=E?!_(function(){var I=!1,P=/a/;return P.exec=function(){return I=!0,null},h==="split"&&(P.constructor={},P.constructor[l]=function(){return P}),P[y](""),!I}):void 0;if(!E||!m||h==="replace"&&!d||h==="split"&&!g){var x=/./[y],S=b(p,y,""[h],function(P,O,w,k,C){return O.exec===c?E&&!C?{done:!0,value:x.call(O,w,k)}:{done:!0,value:P.call(w,O,k)}:{done:!1}}),T=S[0],D=S[1];s(String.prototype,h,T),u(RegExp.prototype,y,v==2?function(I,P){return D.call(I,this,P)}:function(I){return D.call(I,this)})}}},"230e":function(e,r,o){var s=o("d3f4"),u=o("7726").document,_=s(u)&&s(u.createElement);e.exports=function(p){return _?u.createElement(p):{}}},"23c6":function(e,r,o){var s=o("2d95"),u=o("2b4c")("toStringTag"),_=s(function(){return arguments}())=="Arguments",p=function(f,c){try{return f[c]}catch{}};e.exports=function(f){var c,l,d;return f===void 0?"Undefined":f===null?"Null":typeof(l=p(c=Object(f),u))=="string"?l:_?s(c):(d=s(c))=="Object"&&typeof c.callee=="function"?"Arguments":d}},2621:function(e,r){r.f=Object.getOwnPropertySymbols},"2aba":function(e,r,o){var s=o("7726"),u=o("32e9"),_=o("69a8"),p=o("ca5a")("src"),f=o("fa5b"),c="toString",l=(""+f).split(c);o("8378").inspectSource=function(d){return f.call(d)},(e.exports=function(d,g,h,v){var b=typeof h=="function";b&&(_(h,"name")||u(h,"name",g)),d[g]!==h&&(b&&(_(h,p)||u(h,p,d[g]?""+d[g]:l.join(String(g)))),d===s?d[g]=h:v?d[g]?d[g]=h:u(d,g,h):(delete d[g],u(d,g,h)))})(Function.prototype,c,function(){return typeof this=="function"&&this[p]||f.call(this)})},"2aeb":function(e,r,o){var s=o("cb7c"),u=o("1495"),_=o("e11e"),p=o("613b")("IE_PROTO"),f=function(){},c="prototype",l=function(){var d=o("230e")("iframe"),g=_.length,h="<",v=">",b;for(d.style.display="none",o("fab2").appendChild(d),d.src="javascript:",b=d.contentWindow.document,b.open(),b.write(h+"script"+v+"document.F=Object"+h+"/script"+v),b.close(),l=b.F;g--;)delete l[c][_[g]];return l()};e.exports=Object.create||function(g,h){var v;return g!==null?(f[c]=s(g),v=new f,f[c]=null,v[p]=g):v=l(),h===void 0?v:u(v,h)}},"2b4c":function(e,r,o){var s=o("5537")("wks"),u=o("ca5a"),_=o("7726").Symbol,p=typeof _=="function",f=e.exports=function(c){return s[c]||(s[c]=p&&_[c]||(p?_:u)("Symbol."+c))};f.store=s},"2d00":function(e,r){e.exports=!1},"2d95":function(e,r){var o={}.toString;e.exports=function(s){return o.call(s).slice(8,-1)}},"2fdb":function(e,r,o){var s=o("5ca1"),u=o("d2c8"),_="includes";s(s.P+s.F*o("5147")(_),"String",{includes:function(f){return!!~u(this,f,_).indexOf(f,arguments.length>1?arguments[1]:void 0)}})},"32e9":function(e,r,o){var s=o("86cc"),u=o("4630");e.exports=o("9e1e")?function(_,p,f){return s.f(_,p,u(1,f))}:function(_,p,f){return _[p]=f,_}},"38fd":function(e,r,o){var s=o("69a8"),u=o("4bf8"),_=o("613b")("IE_PROTO"),p=Object.prototype;e.exports=Object.getPrototypeOf||function(f){return f=u(f),s(f,_)?f[_]:typeof f.constructor=="function"&&f instanceof f.constructor?f.constructor.prototype:f instanceof Object?p:null}},"41a0":function(e,r,o){var s=o("2aeb"),u=o("4630"),_=o("7f20"),p={};o("32e9")(p,o("2b4c")("iterator"),function(){return this}),e.exports=function(f,c,l){f.prototype=s(p,{next:u(1,l)}),_(f,c+" Iterator")}},"456d":function(e,r,o){var s=o("4bf8"),u=o("0d58");o("5eda")("keys",function(){return function(p){return u(s(p))}})},4588:function(e,r){var o=Math.ceil,s=Math.floor;e.exports=function(u){return isNaN(u=+u)?0:(u>0?s:o)(u)}},4630:function(e,r){e.exports=function(o,s){return{enumerable:!(o&1),configurable:!(o&2),writable:!(o&4),value:s}}},"4bf8":function(e,r,o){var s=o("be13");e.exports=function(u){return Object(s(u))}},5147:function(e,r,o){var s=o("2b4c")("match");e.exports=function(u){var _=/./;try{"/./"[u](_)}catch{try{return _[s]=!1,!"/./"[u](_)}catch{}}return!0}},"520a":function(e,r,o){var s=o("0bfb"),u=RegExp.prototype.exec,_=String.prototype.replace,p=u,f="lastIndex",c=function(){var g=/a/,h=/b*/g;return u.call(g,"a"),u.call(h,"a"),g[f]!==0||h[f]!==0}(),l=/()??/.exec("")[1]!==void 0,d=c||l;d&&(p=function(h){var v=this,b,y,E,m;return l&&(y=new RegExp("^"+v.source+"$(?!\\s)",s.call(v))),c&&(b=v[f]),E=u.call(v,h),c&&E&&(v[f]=v.global?E.index+E[0].length:b),l&&E&&E.length>1&&_.call(E[0],y,function(){for(m=1;m<arguments.length-2;m++)arguments[m]===void 0&&(E[m]=void 0)}),E}),e.exports=p},"52a7":function(e,r){r.f={}.propertyIsEnumerable},5537:function(e,r,o){var s=o("8378"),u=o("7726"),_="__core-js_shared__",p=u[_]||(u[_]={});(e.exports=function(f,c){return p[f]||(p[f]=c!==void 0?c:{})})("versions",[]).push({version:s.version,mode:o("2d00")?"pure":"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})},"5ca1":function(e,r,o){var s=o("7726"),u=o("8378"),_=o("32e9"),p=o("2aba"),f=o("9b43"),c="prototype",l=function(d,g,h){var v=d&l.F,b=d&l.G,y=d&l.S,E=d&l.P,m=d&l.B,x=b?s:y?s[g]||(s[g]={}):(s[g]||{})[c],S=b?u:u[g]||(u[g]={}),T=S[c]||(S[c]={}),D,I,P,O;b&&(h=g);for(D in h)I=!v&&x&&x[D]!==void 0,P=(I?x:h)[D],O=m&&I?f(P,s):E&&typeof P=="function"?f(Function.call,P):P,x&&p(x,D,P,d&l.U),S[D]!=P&&_(S,D,O),E&&T[D]!=P&&(T[D]=P)};s.core=u,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},"5eda":function(e,r,o){var s=o("5ca1"),u=o("8378"),_=o("79e5");e.exports=function(p,f){var c=(u.Object||{})[p]||Object[p],l={};l[p]=f(c),s(s.S+s.F*_(function(){c(1)}),"Object",l)}},"5f1b":function(e,r,o){var s=o("23c6"),u=RegExp.prototype.exec;e.exports=function(_,p){var f=_.exec;if(typeof f=="function"){var c=f.call(_,p);if(typeof c!="object")throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if(s(_)!=="RegExp")throw new TypeError("RegExp#exec called on incompatible receiver");return u.call(_,p)}},"613b":function(e,r,o){var s=o("5537")("keys"),u=o("ca5a");e.exports=function(_){return s[_]||(s[_]=u(_))}},"626a":function(e,r,o){var s=o("2d95");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(u){return s(u)=="String"?u.split(""):Object(u)}},6762:function(e,r,o){var s=o("5ca1"),u=o("c366")(!0);s(s.P,"Array",{includes:function(p){return u(this,p,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},6821:function(e,r,o){var s=o("626a"),u=o("be13");e.exports=function(_){return s(u(_))}},"69a8":function(e,r){var o={}.hasOwnProperty;e.exports=function(s,u){return o.call(s,u)}},"6a99":function(e,r,o){var s=o("d3f4");e.exports=function(u,_){if(!s(u))return u;var p,f;if(_&&typeof(p=u.toString)=="function"&&!s(f=p.call(u))||typeof(p=u.valueOf)=="function"&&!s(f=p.call(u))||!_&&typeof(p=u.toString)=="function"&&!s(f=p.call(u)))return f;throw TypeError("Can't convert object to primitive value")}},7333:function(e,r,o){var s=o("0d58"),u=o("2621"),_=o("52a7"),p=o("4bf8"),f=o("626a"),c=Object.assign;e.exports=!c||o("79e5")(function(){var l={},d={},g=Symbol(),h="abcdefghijklmnopqrst";return l[g]=7,h.split("").forEach(function(v){d[v]=v}),c({},l)[g]!=7||Object.keys(c({},d)).join("")!=h})?function(d,g){for(var h=p(d),v=arguments.length,b=1,y=u.f,E=_.f;v>b;)for(var m=f(arguments[b++]),x=y?s(m).concat(y(m)):s(m),S=x.length,T=0,D;S>T;)E.call(m,D=x[T++])&&(h[D]=m[D]);return h}:c},7726:function(e,r){var o=e.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},"77f1":function(e,r,o){var s=o("4588"),u=Math.max,_=Math.min;e.exports=function(p,f){return p=s(p),p<0?u(p+f,0):_(p,f)}},"79e5":function(e,r){e.exports=function(o){try{return!!o()}catch{return!0}}},"7f20":function(e,r,o){var s=o("86cc").f,u=o("69a8"),_=o("2b4c")("toStringTag");e.exports=function(p,f,c){p&&!u(p=c?p:p.prototype,_)&&s(p,_,{configurable:!0,value:f})}},8378:function(e,r){var o=e.exports={version:"2.6.5"};typeof __e=="number"&&(__e=o)},"84f2":function(e,r){e.exports={}},"86cc":function(e,r,o){var s=o("cb7c"),u=o("c69a"),_=o("6a99"),p=Object.defineProperty;r.f=o("9e1e")?Object.defineProperty:function(c,l,d){if(s(c),l=_(l,!0),s(d),u)try{return p(c,l,d)}catch{}if("get"in d||"set"in d)throw TypeError("Accessors not supported!");return"value"in d&&(c[l]=d.value),c}},"9b43":function(e,r,o){var s=o("d8e8");e.exports=function(u,_,p){if(s(u),_===void 0)return u;switch(p){case 1:return function(f){return u.call(_,f)};case 2:return function(f,c){return u.call(_,f,c)};case 3:return function(f,c,l){return u.call(_,f,c,l)}}return function(){return u.apply(_,arguments)}}},"9c6c":function(e,r,o){var s=o("2b4c")("unscopables"),u=Array.prototype;u[s]==null&&o("32e9")(u,s,{}),e.exports=function(_){u[s][_]=!0}},"9def":function(e,r,o){var s=o("4588"),u=Math.min;e.exports=function(_){return _>0?u(s(_),9007199254740991):0}},"9e1e":function(e,r,o){e.exports=!o("79e5")(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},a352:function(e,r){e.exports=t},a481:function(e,r,o){var s=o("cb7c"),u=o("4bf8"),_=o("9def"),p=o("4588"),f=o("0390"),c=o("5f1b"),l=Math.max,d=Math.min,g=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,b=function(y){return y===void 0?y:String(y)};o("214f")("replace",2,function(y,E,m,x){return[function(D,I){var P=y(this),O=D==null?void 0:D[E];return O!==void 0?O.call(D,P,I):m.call(String(P),D,I)},function(T,D){var I=x(m,T,this,D);if(I.done)return I.value;var P=s(T),O=String(this),w=typeof D=="function";w||(D=String(D));var k=P.global;if(k){var C=P.unicode;P.lastIndex=0}for(var R=[];;){var N=c(P,O);if(N===null||(R.push(N),!k))break;var j=String(N[0]);j===""&&(P.lastIndex=f(O,_(P.lastIndex),C))}for(var H="",U=0,q=0;q<R.length;q++){N=R[q];for(var A=String(N[0]),M=l(d(p(N.index),O.length),0),L=[],W=1;W<N.length;W++)L.push(b(N[W]));var K=N.groups;if(w){var B=[A].concat(L,M,O);K!==void 0&&B.push(K);var $=String(D.apply(void 0,B))}else $=S(A,O,M,L,K,D);M>=U&&(H+=O.slice(U,M)+$,U=M+A.length)}return H+O.slice(U)}];function S(T,D,I,P,O,w){var k=I+T.length,C=P.length,R=v;return O!==void 0&&(O=u(O),R=h),m.call(w,R,function(N,j){var H;switch(j.charAt(0)){case"$":return"$";case"&":return T;case"`":return D.slice(0,I);case"'":return D.slice(k);case"<":H=O[j.slice(1,-1)];break;default:var U=+j;if(U===0)return N;if(U>C){var q=g(U/10);return q===0?N:q<=C?P[q-1]===void 0?j.charAt(1):P[q-1]+j.charAt(1):N}H=P[U-1]}return H===void 0?"":H})}})},aae3:function(e,r,o){var s=o("d3f4"),u=o("2d95"),_=o("2b4c")("match");e.exports=function(p){var f;return s(p)&&((f=p[_])!==void 0?!!f:u(p)=="RegExp")}},ac6a:function(e,r,o){for(var s=o("cadf"),u=o("0d58"),_=o("2aba"),p=o("7726"),f=o("32e9"),c=o("84f2"),l=o("2b4c"),d=l("iterator"),g=l("toStringTag"),h=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=u(v),y=0;y<b.length;y++){var E=b[y],m=v[E],x=p[E],S=x&&x.prototype,T;if(S&&(S[d]||f(S,d,h),S[g]||f(S,g,E),c[E]=h,m))for(T in s)S[T]||_(S,T,s[T],!0)}},b0c5:function(e,r,o){var s=o("520a");o("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},be13:function(e,r){e.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},c366:function(e,r,o){var s=o("6821"),u=o("9def"),_=o("77f1");e.exports=function(p){return function(f,c,l){var d=s(f),g=u(d.length),h=_(l,g),v;if(p&&c!=c){for(;g>h;)if(v=d[h++],v!=v)return!0}else for(;g>h;h++)if((p||h in d)&&d[h]===c)return p||h||0;return!p&&-1}}},c649:function(e,r,o){(function(s){o.d(r,"c",function(){return d}),o.d(r,"a",function(){return c}),o.d(r,"b",function(){return _}),o.d(r,"d",function(){return l}),o("a481");function u(){return typeof window!="undefined"?window.console:s.console}var _=u();function p(g){var h=Object.create(null);return function(b){var y=h[b];return y||(h[b]=g(b))}}var f=/-(\w)/g,c=p(function(g){return g.replace(f,function(h,v){return v?v.toUpperCase():""})});function l(g){g.parentElement!==null&&g.parentElement.removeChild(g)}function d(g,h,v){var b=v===0?g.children[0]:g.children[v-1].nextSibling;g.insertBefore(h,b)}}).call(this,o("c8ba"))},c69a:function(e,r,o){e.exports=!o("9e1e")&&!o("79e5")(function(){return Object.defineProperty(o("230e")("div"),"a",{get:function(){return 7}}).a!=7})},c8ba:function(e,r){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}e.exports=o},ca5a:function(e,r){var o=0,s=Math.random();e.exports=function(u){return"Symbol(".concat(u===void 0?"":u,")_",(++o+s).toString(36))}},cadf:function(e,r,o){var s=o("9c6c"),u=o("d53b"),_=o("84f2"),p=o("6821");e.exports=o("01f9")(Array,"Array",function(f,c){this._t=p(f),this._i=0,this._k=c},function(){var f=this._t,c=this._k,l=this._i++;return!f||l>=f.length?(this._t=void 0,u(1)):c=="keys"?u(0,l):c=="values"?u(0,f[l]):u(0,[l,f[l]])},"values"),_.Arguments=_.Array,s("keys"),s("values"),s("entries")},cb7c:function(e,r,o){var s=o("d3f4");e.exports=function(u){if(!s(u))throw TypeError(u+" is not an object!");return u}},ce10:function(e,r,o){var s=o("69a8"),u=o("6821"),_=o("c366")(!1),p=o("613b")("IE_PROTO");e.exports=function(f,c){var l=u(f),d=0,g=[],h;for(h in l)h!=p&&s(l,h)&&g.push(h);for(;c.length>d;)s(l,h=c[d++])&&(~_(g,h)||g.push(h));return g}},d2c8:function(e,r,o){var s=o("aae3"),u=o("be13");e.exports=function(_,p,f){if(s(p))throw TypeError("String#"+f+" doesn't accept regex!");return String(u(_))}},d3f4:function(e,r){e.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},d53b:function(e,r){e.exports=function(o,s){return{value:s,done:!!o}}},d8e8:function(e,r){e.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},e11e:function(e,r){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},f559:function(e,r,o){var s=o("5ca1"),u=o("9def"),_=o("d2c8"),p="startsWith",f=""[p];s(s.P+s.F*o("5147")(p),"String",{startsWith:function(l){var d=_(this,l,p),g=u(Math.min(arguments.length>1?arguments[1]:void 0,d.length)),h=String(l);return f?f.call(d,h,g):d.slice(g,g+h.length)===h}})},f6fd:function(e,r){(function(o){var s="currentScript",u=o.getElementsByTagName("script");s in o||Object.defineProperty(o,s,{get:function(){try{throw new Error}catch(f){var _,p=(/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(f.stack)||[!1])[1];for(_ in u)if(u[_].src==p||u[_].readyState=="interactive")return u[_];return null}}})})(document)},f751:function(e,r,o){var s=o("5ca1");s(s.S+s.F,"Object",{assign:o("7333")})},fa5b:function(e,r,o){e.exports=o("5537")("native-function-to-string",Function.toString)},fab2:function(e,r,o){var s=o("7726").document;e.exports=s&&s.documentElement},fb15:function(e,r,o){if(o.r(r),typeof window!="undefined"){o("f6fd");var s;(s=window.document.currentScript)&&(s=s.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(o.p=s[1])}o("f751"),o("f559"),o("ac6a"),o("cadf"),o("456d");function u(A){if(Array.isArray(A))return A}function _(A,M){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(A)))){var L=[],W=!0,K=!1,B=void 0;try{for(var $=A[Symbol.iterator](),F;!(W=(F=$.next()).done)&&(L.push(F.value),!(M&&L.length===M));W=!0);}catch(G){K=!0,B=G}finally{try{!W&&$.return!=null&&$.return()}finally{if(K)throw B}}return L}}function p(A,M){(M==null||M>A.length)&&(M=A.length);for(var L=0,W=new Array(M);L<M;L++)W[L]=A[L];return W}function f(A,M){if(!!A){if(typeof A=="string")return p(A,M);var L=Object.prototype.toString.call(A).slice(8,-1);if(L==="Object"&&A.constructor&&(L=A.constructor.name),L==="Map"||L==="Set")return Array.from(A);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return p(A,M)}}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(A,M){return u(A)||_(A,M)||f(A,M)||c()}o("6762"),o("2fdb");function d(A){if(Array.isArray(A))return p(A)}function g(A){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(A))return Array.from(A)}function h(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(A){return d(A)||g(A)||f(A)||h()}var b=o("a352"),y=o.n(b),E=o("c649");function m(A,M,L){return L===void 0||(A=A||{},A[M]=L),A}function x(A,M){return A.map(function(L){return L.elm}).indexOf(M)}function S(A,M,L,W){if(!A)return[];var K=A.map(function(F){return F.elm}),B=M.length-W,$=v(M).map(function(F,G){return G>=B?K.length:K.indexOf(F)});return L?$.filter(function(F){return F!==-1}):$}function T(A,M){var L=this;this.$nextTick(function(){return L.$emit(A.toLowerCase(),M)})}function D(A){var M=this;return function(L){M.realList!==null&&M["onDrag"+A](L),T.call(M,A,L)}}function I(A){return["transition-group","TransitionGroup"].includes(A)}function P(A){if(!A||A.length!==1)return!1;var M=l(A,1),L=M[0].componentOptions;return L?I(L.tag):!1}function O(A,M,L){return A[L]||(M[L]?M[L]():void 0)}function w(A,M,L){var W=0,K=0,B=O(M,L,"header");B&&(W=B.length,A=A?[].concat(v(B),v(A)):v(B));var $=O(M,L,"footer");return $&&(K=$.length,A=A?[].concat(v(A),v($)):v($)),{children:A,headerOffset:W,footerOffset:K}}function k(A,M){var L=null,W=function(V,J){L=m(L,V,J)},K=Object.keys(A).filter(function(G){return G==="id"||G.startsWith("data-")}).reduce(function(G,V){return G[V]=A[V],G},{});if(W("attrs",K),!M)return L;var B=M.on,$=M.props,F=M.attrs;return W("on",B),W("props",$),Object.assign(L.attrs,F),L}var C=["Start","Add","Remove","Update","End"],R=["Choose","Unchoose","Sort","Filter","Clone"],N=["Move"].concat(C,R).map(function(A){return"on"+A}),j=null,H={options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(M){return M}},element:{type:String,default:"div"},tag:{type:String,default:null},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},U={name:"draggable",inheritAttrs:!1,props:H,data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1}},render:function(M){var L=this.$slots.default;this.transitionMode=P(L);var W=w(L,this.$slots,this.$scopedSlots),K=W.children,B=W.headerOffset,$=W.footerOffset;this.headerOffset=B,this.footerOffset=$;var F=k(this.$attrs,this.componentData);return M(this.getTag(),F,K)},created:function(){this.list!==null&&this.value!==null&&E.b.error("Value and list props are mutually exclusive! Please set one or another."),this.element!=="div"&&E.b.warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props"),this.options!==void 0&&E.b.warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props")},mounted:function(){var M=this;if(this.noneFunctionalComponentMode=this.getTag().toLowerCase()!==this.$el.nodeName.toLowerCase()&&!this.getIsFunctional(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));var L={};C.forEach(function(B){L["on"+B]=D.call(M,B)}),R.forEach(function(B){L["on"+B]=T.bind(M,B)});var W=Object.keys(this.$attrs).reduce(function(B,$){return B[Object(E.a)($)]=M.$attrs[$],B},{}),K=Object.assign({},this.options,W,L,{onMove:function($,F){return M.onDragMove($,F)}});!("draggable"in K)&&(K.draggable=">*"),this._sortable=new y.a(this.rootContainer,K),this.computeIndexes()},beforeDestroy:function(){this._sortable!==void 0&&this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(M){this.updateOptions(M)},deep:!0},$attrs:{handler:function(M){this.updateOptions(M)},deep:!0},realList:function(){this.computeIndexes()}},methods:{getIsFunctional:function(){var M=this._vnode.fnOptions;return M&&M.functional},getTag:function(){return this.tag||this.element},updateOptions:function(M){for(var L in M){var W=Object(E.a)(L);N.indexOf(W)===-1&&this._sortable.option(W,M[L])}},getChildrenNodes:function(){if(this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var M=this.$slots.default;return this.transitionMode?M[0].child.$slots.default:M},computeIndexes:function(){var M=this;this.$nextTick(function(){M.visibleIndexes=S(M.getChildrenNodes(),M.rootContainer.children,M.transitionMode,M.footerOffset)})},getUnderlyingVm:function(M){var L=x(this.getChildrenNodes()||[],M);if(L===-1)return null;var W=this.realList[L];return{index:L,element:W}},getUnderlyingPotencialDraggableComponent:function(M){var L=M.__vue__;return!L||!L.$options||!I(L.$options._componentTag)?!("realList"in L)&&L.$children.length===1&&"realList"in L.$children[0]?L.$children[0]:L:L.$parent},emitChanges:function(M){var L=this;this.$nextTick(function(){L.$emit("change",M)})},alterList:function(M){if(this.list){M(this.list);return}var L=v(this.value);M(L),this.$emit("input",L)},spliceList:function(){var M=arguments,L=function(K){return K.splice.apply(K,v(M))};this.alterList(L)},updatePosition:function(M,L){var W=function(B){return B.splice(L,0,B.splice(M,1)[0])};this.alterList(W)},getRelatedContextFromMoveEvent:function(M){var L=M.to,W=M.related,K=this.getUnderlyingPotencialDraggableComponent(L);if(!K)return{component:K};var B=K.realList,$={list:B,component:K};if(L!==W&&B&&K.getUnderlyingVm){var F=K.getUnderlyingVm(W);if(F)return Object.assign(F,$)}return $},getVmIndex:function(M){var L=this.visibleIndexes,W=L.length;return M>W-1?W:L[M]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(M){if(!(!this.noTransitionOnDrag||!this.transitionMode)){var L=this.getChildrenNodes();L[M].data=null;var W=this.getComponent();W.children=[],W.kept=void 0}},onDragStart:function(M){this.context=this.getUnderlyingVm(M.item),M.item._underlying_vm_=this.clone(this.context.element),j=M.item},onDragAdd:function(M){var L=M.item._underlying_vm_;if(L!==void 0){Object(E.d)(M.item);var W=this.getVmIndex(M.newIndex);this.spliceList(W,0,L),this.computeIndexes();var K={element:L,newIndex:W};this.emitChanges({added:K})}},onDragRemove:function(M){if(Object(E.c)(this.rootContainer,M.item,M.oldIndex),M.pullMode==="clone"){Object(E.d)(M.clone);return}var L=this.context.index;this.spliceList(L,1);var W={element:this.context.element,oldIndex:L};this.resetTransitionData(L),this.emitChanges({removed:W})},onDragUpdate:function(M){Object(E.d)(M.item),Object(E.c)(M.from,M.item,M.oldIndex);var L=this.context.index,W=this.getVmIndex(M.newIndex);this.updatePosition(L,W);var K={element:this.context.element,oldIndex:L,newIndex:W};this.emitChanges({moved:K})},updateProperty:function(M,L){M.hasOwnProperty(L)&&(M[L]+=this.headerOffset)},computeFutureIndex:function(M,L){if(!M.element)return 0;var W=v(L.to.children).filter(function(F){return F.style.display!=="none"}),K=W.indexOf(L.related),B=M.component.getVmIndex(K),$=W.indexOf(j)!==-1;return $||!L.willInsertAfter?B:B+1},onDragMove:function(M,L){var W=this.move;if(!W||!this.realList)return!0;var K=this.getRelatedContextFromMoveEvent(M),B=this.context,$=this.computeFutureIndex(K,M);Object.assign(B,{futureIndex:$});var F=Object.assign({},M,{relatedContext:K,draggedContext:B});return W(F,L)},onDragEnd:function(){this.computeIndexes(),j=null}}};typeof window!="undefined"&&"Vue"in window&&window.Vue.component("draggable",U);var q=U;r.default=q}}).default})})(vuedraggable_umd);var draggable=getDefaultExportFromCjs(vuedraggable_umd.exports),getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}var REGEX=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function validate(a){return typeof a=="string"&&REGEX.test(a)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));function stringify(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(byteToHex[a[n+0]]+byteToHex[a[n+1]]+byteToHex[a[n+2]]+byteToHex[a[n+3]]+"-"+byteToHex[a[n+4]]+byteToHex[a[n+5]]+"-"+byteToHex[a[n+6]]+byteToHex[a[n+7]]+"-"+byteToHex[a[n+8]]+byteToHex[a[n+9]]+"-"+byteToHex[a[n+10]]+byteToHex[a[n+11]]+byteToHex[a[n+12]]+byteToHex[a[n+13]]+byteToHex[a[n+14]]+byteToHex[a[n+15]]).toLowerCase();if(!validate(t))throw TypeError("Stringified UUID is invalid");return t}function v4(a,n,t){a=a||{};var e=a.random||(a.rng||rng)();if(e[6]=e[6]&15|64,e[8]=e[8]&63|128,n){t=t||0;for(var r=0;r<16;++r)n[t+r]=e[r];return n}return stringify(e)}var render=function(){var a=this,n=a.$createElement,t=a._self._c||n;return a.state?t("div",{staticClass:"memod-composer"},[t("div",{staticClass:"title-input-container"},[t("span",{staticClass:"active-part"}),t("input",{directives:[{name:"model",rawName:"v-model",value:a.state.title,expression:"state.title"}],ref:"editorTitle",staticClass:"text-box title",attrs:{type:"text",placeholder:"Your amazing title",maxlength:"100"},domProps:{value:a.state.title},on:{input:function(e){e.target.composing||a.$set(a.state,"title",e.target.value)}}})]),t("div",{ref:"mainList",staticClass:"space-y-8 main-list"},[t("draggable",{attrs:{group:"bullets",handle:".bullet-order"},on:{start:function(e){a.drag=!0},end:function(e){a.drag=!1}},model:{value:a.state.bullets,callback:function(e){a.$set(a.state,"bullets",e)},expression:"state.bullets"}},a._l(a.state.bullets,function(e,r){return t("composer-item",{key:e.id+"-"+r,attrs:{index:r,bullet:e,"show-remove":Boolean(a.state.bullets.length>1),suggestions:a.state.suggestions,"display-type":a.bulletDisplayType,"is-focused":e.focus},on:{"text-changed":a.onTextChanged,"suggestion-query":a.handleSuggestionQuery,removed:a.handleRemove,"selection-updated":a.handleSelectionUpdated,blur:a.handleBlur,focus:function(o){return a.focusBullet(e.id)}}})}),1)],1),a.canAddBullets?t("button",{staticClass:"mt-4 add-bullet-btn flex items-center",attrs:{type:"button"},on:{click:function(e){return a.addBullet({},!0)}}},[t("IconPlus",{attrs:{alt:"Add new bullet"}}),t("span",{staticClass:"ml-3 block"},[a._v(" Add New Bullet ")])],1):a._e()]):a._e()},staticRenderFns=[];const __sfc_main={};__sfc_main.props={title:{type:String,default:""},value:{type:Array,required:!0},suggestionQuerySearch:{type:Function,default:()=>{}},bulletDisplayType:{type:String,validator:a=>Object.values(BULLET_DISPLAY_TYPES).includes(a),default:BULLET_DISPLAY_TYPES.bullet}},__sfc_main.setup=(a,n)=>{const t=a;compositionApi.provide("suggestionQuerySearch",t.suggestionQuerySearch);const e=n.emit,r=compositionApi.reactive({title:"",currentElement:null,currentSelection:null,suggestions:[""],bullets:compositionApi.ref(t.value)}),o=Mitt();compositionApi.provide("eventHub",o);const s=compositionApi.computed(()=>r.bullets.length<MAX_BULLET_LENGTH),u=N=>{const j=JSON.parse(JSON.stringify(N));r.bullets=compositionApi.ref(j.map(H=>(H.id=H.id||"new_"+v4(),H)))};compositionApi.watch(()=>t.title,(N,j)=>{N!==j&&(r.title=N)},{immediate:!0}),compositionApi.watch(()=>r.title,(N,j)=>{e("title-updated",r.title)},{immediate:!0}),compositionApi.watch(()=>[...t.value],(N,j)=>{(N.length!==j.length||N.some((H,U)=>H.prettyText!==j[U].prettyText))&&u(N)},{immediate:!0,deep:!0}),compositionApi.watch(()=>[...r.bullets],N=>{e("input",N)},{deep:!0});const _=N=>{const{id:j}=N,H=r.bullets.findIndex(({id:U})=>U===j);r.bullets[H].rawText=N.text,r.bullets[H].prettyText=N.html},p=N=>{const j=r.bullets.findIndex(H=>H.editorId===N);j!==-1&&(r.bullets[j].focus=!0)},f=N=>{r.bullets.forEach((j,H)=>{j.focus&&j.id!==N&&(r.bullets[H].focus=!1,d(j.id))})},c=(N,j=!0)=>{if(r.bullets.length<MAX_BULLET_LENGTH){const{id:H,prettyText:U}=N,q=H||Date.now().toString(),A=U||"",M=`editor_${q}`;r.bullets=[...r.bullets,ge(pe({},N),{id:q,editorId:M,prettyText:A,focus:!1,last_focus:0})],f(M),r.currentElement=document.querySelector(`.${M}`),compositionApi.nextTick(()=>{j&&C(q)})}},l=compositionApi.ref(null);compositionApi.onMounted(()=>{setTimeout(()=>{var N;(N=document.querySelector(".title"))==null||N.focus()})});const d=N=>{const j=r.bullets.find(H=>H.id===N);j&&(j.focus=!1,r.currentElement=null,emitBulletOnBlur())},g=N=>{r.bullets=r.bullets.filter(j=>j.id!==N)},h=N=>{r.currentSelection=N},v=()=>{},{bullets:b}=compositionApi.toRefs(r),{focusLastBullet:y}=useBulletsEditor(b,p),E=(N,j,H)=>{o.emit(`bullet:${N}`,{name:j,params:H})},m=N=>{const j=y();E(j==null?void 0:j.id,"insertText",N)},x=N=>{const j=y();E(j==null?void 0:j.id,"formatSelection",N)},S=N=>{const j=y(r.bullets);E(j==null?void 0:j.id,"insertImages",N)},T=N=>{const j=y();E(j==null?void 0:j.id,"insertLink",N)},D=N=>{const j=y();E(j==null?void 0:j.id,"insertMemoLink",N)},I=N=>{const j=y();E(j==null?void 0:j.id,"insertMention",N)},P=()=>{c({prettyText:"",rawText:""},!0)},O=N=>{r.title=N},w=compositionApi.ref(),k=()=>{var j;const N=y();(j=w.value)==null||j.blur(),E(N==null?void 0:N.id,"blur")},C=(N,j)=>{r.bullets.findIndex(U=>U.id===N)!==-1&&(r.bullets=r.bullets.map(U=>(U.id==N?(U.focus=!0,U.last_focus=Date.now(),r.currentElement=document.querySelector(`.editor_${U.id}`),e("focus",U,j),emitCurrentSelectionAndFormat(j)):U.focus=!1,U)))};return Object.assign({state:r,canAddBullets:s,onTextChanged:_,addBullet:c,mainList:l,handleBlur:d,handleRemove:g,handleSelectionUpdated:h,handleSuggestionQuery:v,editorTitle:w,focusBullet:C},{addNewBullet:P,insertText:m,insertImages:S,insertMemoLink:D,insertLink:T,insertMention:I,formatSelection:x,setTitleContent:O,blurBullet:k,focusBullet:C,clearBullet:()=>{r.bullets.splice(0,r.bullets.length),r.title="",r.bulletDisplayType=BULLET_DISPLAY_TYPES.bullet,P()},setContent:u})},__sfc_main.components=Object.assign({draggable,ComposerItem,IconPlus},__sfc_main.components);const __vue2_script=__sfc_main,__cssModules={};var __component__=normalizeComponent(__vue2_script,render,staticRenderFns,!1,__vue2_injectStyles,null,null,null);function __vue2_injectStyles(a){for(let n in __cssModules)this[n]=__cssModules[n]}var MemodComposer=function(){return __component__.exports}();return MemodComposer});
