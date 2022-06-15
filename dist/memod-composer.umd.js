(function(d,r){typeof exports=="object"&&typeof module!="undefined"?module.exports=r(require("@vue/composition-api")):typeof define=="function"&&define.amd?define(["@vue/composition-api"],r):(d=typeof globalThis!="undefined"?globalThis:d||self,d["memod-composer"]=r(d.compositionApi))})(this,function(compositionApi){"use strict";var ge=Object.defineProperty,be=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var he=(d,r,t)=>r in d?ge(d,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[r]=t,fe=(d,r)=>{for(var t in r||(r={}))Ee.call(r,t)&&he(d,t,r[t]);if(pe)for(var t of pe(r))xe.call(r,t)&&he(d,t,r[t]);return d},me=(d,r)=>be(d,ve(r));var base="",quill_bubble="",quill_core="";function Mitt(d){return{all:d=d||new Map,on:function(r,t){var e=d.get(r);e?e.push(t):d.set(r,[t])},off:function(r,t){var e=d.get(r);e&&(t?e.splice(e.indexOf(t)>>>0,1):d.set(r,[]))},emit:function(r,t){var e=d.get(r);e&&e.slice().map(function(n){n(t)}),(e=d.get("*"))&&e.slice().map(function(n){n(r,t)})}}}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function getDefaultExportFromCjs(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var quill$1={exports:{}};/*!
 * Quill Editor v2.0.0-dev.3
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */(function(module,exports){(function(r,t){module.exports=t()})(window,function(){return function(d){var r={};function t(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return d[e].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=d,t.c=r,t.d=function(e,n,y){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:y})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8||n&4&&typeof e=="object"&&e&&e.__esModule)return e;var y=Object.create(null);if(t.r(y),Object.defineProperty(y,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(var h in e)t.d(y,h,function(g){return e[g]}.bind(null,h));return y},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({"./assets/icons/align-center.svg":function(module,exports){eval(`// Module
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

//# sourceURL=webpack://Quill/./util.inspect_(ignored)?`)}}).default})})(quill$1);var Quill$1=getDefaultExportFromCjs(quill$1.exports),quillAutoformat={exports:{}};(function(d,r){(function(t,e){d.exports=e(quill$1.exports)})(window,function(t){return function(e){var n={};function y(h){if(n[h])return n[h].exports;var g=n[h]={i:h,l:!1,exports:{}};return e[h].call(g.exports,g,g.exports,y),g.l=!0,g.exports}return y.m=e,y.c=n,y.d=function(h,g,m){y.o(h,g)||Object.defineProperty(h,g,{enumerable:!0,get:m})},y.r=function(h){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},y.t=function(h,g){if(1&g&&(h=y(h)),8&g||4&g&&typeof h=="object"&&h&&h.__esModule)return h;var m=Object.create(null);if(y.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:h}),2&g&&typeof h!="string")for(var v in h)y.d(m,v,function(c){return h[c]}.bind(null,v));return m},y.n=function(h){var g=h&&h.__esModule?function(){return h.default}:function(){return h};return y.d(g,"a",g),g},y.o=function(h,g){return Object.prototype.hasOwnProperty.call(h,g)},y.p="",y(y.s=1)}([function(e,n){e.exports=t},function(e,n,y){y.r(n);var h=y(0),g=y.n(h);const m=g.a.import("blots/embed"),v=g.a.import("blots/inline"),c=g.a.import("blots/text"),a=g.a.import("blots/cursor");class o extends m{static create(O){let k=super.create(O);return k.setAttribute("href",this.BASE_URL+O),k.setAttribute("spellcheck",!1),k.textContent="#"+O,k}static formats(O){return O.getAttribute("href").substr(this.BASE_URL.length)}format(O,k){this.domNode.setAttribute("href",this.BASE_URL+k)}static value(O){return O.textContent.substr(1)}}o.blotName="hashtag",o.className="ql-hashtag",o.tagName="A",o.BASE_URL="#";class i extends v{static create(O){let k=super.create(O);return k.setAttribute("href",this.BASE_URL+O),k.setAttribute("spellcheck",!1),k}static formats(O){return O.getAttribute("href").substr(this.BASE_URL.length)}format(O,k){this.domNode.setAttribute("href",this.BASE_URL+k)}}i.blotName="hashtag",i.className="ql-hashtag",i.tagName="A",i.allowedChildren=[c,a],i.BASE_URL="#";const p=g.a.import("blots/embed");class _ extends p{static create(O){const k=super.create(O);return k.setAttribute("title",O),k.setAttribute("href",this.BASE_URL+O),k.textContent="@"+O,k}static value(O){return O.textContent.substr(1)}}_.blotName="mention",_.className="ql-mention",_.tagName="A",_.BASE_URL="/";var f=_;function u(E,O){return function(k){if(Array.isArray(k))return k}(E)||function(k,I){var S=[],B=!0,q=!1,F=void 0;try{for(var U,R=k[Symbol.iterator]();!(B=(U=R.next()).done)&&(S.push(U.value),!I||S.length!==I);B=!0);}catch(D){q=!0,F=D}finally{try{B||R.return==null||R.return()}finally{if(q)throw F}}return S}(E,O)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const l=g.a.import("core/module"),b=g.a.import("delta"),s=g.a.import("parchment"),x=s.Attributor,M=s.Scope;class P extends l{constructor(O,k){super(O,k),this.transforms=k,this.registerTypeListener(),this.registerPasteListener()}registerPasteListener(){for(const O in this.transforms){const k=this.transforms[O];this.quill.clipboard.addMatcher(Node.TEXT_NODE,(I,S)=>{if(typeof I.data=="string")return S.ops.forEach((B,q,F)=>{if(typeof B.insert=="string"){let U=A(k,B.insert),R=new b([B]).compose(U);F.splice(q,1,...R.ops)}}),S})}}registerTypeListener(){this.quill.keyboard.addBinding({key:38,collapsed:!0,format:["autoformat-helper"]},this.forwardKeyboardUp.bind(this)),this.quill.keyboard.addBinding({key:40,collapsed:!0,format:["autoformat-helper"]},this.forwardKeyboardDown.bind(this)),this.quill.on(g.a.events.TEXT_CHANGE,(O,k,I)=>{let S=O.ops;if(I!=="user"||!S||S.length<1)return;let B=S.length-1,q=S[B];for(;!q.insert&&B>0;)q=S[--B];if(!q.insert||typeof q.insert!="string")return;let F=q.insert===`
`,U=this.quill.getSelection();if(!U)return;let R=this.quill.getLength()-U.index-(F?1:0),D=U.index,C=u(this.quill.getLeaf(D),1)[0];if(!C||!C.text)return;let N=C.offset(C.scroll),K=D-N,W=!1;for(const L in this.transforms){const j=this.transforms[L];if(j.helper&&j.helper.trigger&&q.insert.match(j.helper.trigger))this.quill.formatText(D,1,"autoformat-helper",L,g.a.sources.API),this.openHelper(j,D);else if(q.insert.match(j.trigger||/./)){this.closeHelper(j);let $=new b().retain(N),H=A(j,C.text,K);H&&($=$.concat(H)),this.quill.updateContents($,"api"),W=!0}}W&&setTimeout(()=>{this.quill.setSelection(this.quill.getLength()-R,"api")},0)})}forwardKeyboard(O,k){if(this.currentHelper&&this.currentHelper.container){let I=this.currentHelper.container.querySelector(".dropdown-menu");console.log("keyboard",I,k.event),I.dispatchEvent(k.event)}}forwardKeyboardUp(O,k){var I=new KeyboardEvent("keydown",{key:"ArrowUp",keyCode:38,which:38,bubbles:!0,cancelable:!0});k.event=I,this.forwardKeyboard(O,k)}forwardKeyboardDown(O,k){var I=new KeyboardEvent("keydown",{key:"ArrowDown",keyCode:40,which:40,bubbles:!0,cancelable:!0});k.event=I,this.forwardKeyboard(O,k)}openHelper(O,k){if(O.helper&&(this.currentHelper=O.helper,typeof O.helper.open=="function")){console.log("openHelper",k,this.quill.getFormat(k));let I=this.quill.getBounds(k),S=this.quill.addContainer("ql-helper");S.style.position="absolute",S.style.top=I.top+"px",S.style.left=I.left+"px",S.style.width=I.width+"px",S.style.height=I.height+"px",console.log("openHelper",I,S),O.helper.container=S,O.helper.open(S)}}closeHelper(O){O.helper&&typeof O.helper.close=="function"&&O.helper.close(O.helper.container)}}function A(E,O,k){E.find.global||(E.find=new RegExp(E.find,E.find.flags+"g")),E.find.lastIndex=0;let I=new b,S=null;if(k!=null)for(S=E.find.exec(O);S&&S.length&&S.index<k;){if(S.index<k&&S.index+S[0].length+1>=k){I=I.concat(T(E,S).ops);break}S=E.find.exec(O)}else for(;(S=E.find.exec(O))!==null;){let B=T(E,S);I=I.concat(B.ops),O=O.substr(B.rightIndex),E.find.lastIndex=0}return I}function T(E,O){let k=(O=function(F,U){if(F.extract){let R=new RegExp(F.extract).exec(U[0]);return R&&R.length?(R.index+=U.index,R):U}return U}(E,O)).index,I=function(F,U){let R=new RegExp(F.extract||F.find);return F.transform?U.replace(R,F.transform):U}(E,O[0]),S=I;E.insert&&((S={})[E.insert]=I);let B=function(F,U){let R={};return typeof F.format=="string"?R[F.format]=U:typeof F.format=="object"&&(R=F.format),R}(E,I);const q=new b;return q.retain(k).delete(O[0].length).insert(S,B),{ops:q,rightIndex:k+O[0].length}}P.DEFAULTS={hashtag:{trigger:/[\s.,;:!?]/,find:/(?:^|\s)#[^\s.,;:!?]+/i,extract:/#([^\s.,;:!?]+)/i,transform:"$1",insert:"hashtag"},mention:{trigger:/[\s.,;:!?]/,find:/(?:^|\s)@[^\s.,;:!?]+/i,extract:/@([^\s.,;:!?]+)/i,transform:"$1",insert:"mention"},link:{trigger:/[\s]/,find:/https?:\/\/[\S]+|(www\.[\S]+)/gi,transform:function(E,O){return O?"http://"+E:E},format:"link"}};const w=new x("autoformat-helper","data-helper",{scope:M.INLINE});y.d(n,"default",function(){return P}),y.d(n,"Hashtag",function(){return o}),y.d(n,"Mention",function(){return f}),y.d(n,"AutoformatHelperAttribute",function(){return w}),g.a.version&&parseInt(g.a.version[0])<2&&console.warn("quill-autoformat requires Quill 2.0 or higher to work properly"),g.a.register({"modules/autoformat":P,"formats/hashtag":o,"formats/mention":f,"formats/autoformat-helper":w})}])})})(quillAutoformat);const resizerConfig={endpoint:"https://resizer.memodapp.com/v1/image",width:667,height:500,fit:"cover"},previewerConfig={endpoint:"https://resizer.memodapp.com/v1/preview"};Quill$1.import("blots/inline"),Quill$1.import("blots/block");let Image=Quill$1.import("formats/image"),BlockEmbed=Quill$1.import("blots/block/embed");Quill$1.import("blots/embed"),Image.className="bullet-image";class CustomImage extends BlockEmbed{static create(r){const t=super.create(),e=getAspectRatio(r);return t.classList.add("image-container"),t.innerHTML=`<img alt='' src=${r} class='bullet-image' style="aspect-ratio:${e}" />`,t}}function getAspectRatio(d){try{const r=new URL(d),t=r.searchParams.get("w"),e=r.searchParams.get("h");return t>e?"16/9":t<e?"4/5":"1/1"}catch{return"1/1"}}class CustomLink extends BlockEmbed{static create(r){const t=super.create();t.setAttribute("contenteditable","false"),t.classList.add("editor-link","loading"),t.innerHTML='<green-loader class="green-loader">';function e(n,y){try{const h=new URL(n).origin;return y&&y!=="http://favicon.ico/"?y:`https://www.google.com/s2/favicons?domain=${h}&size=196`}catch{return""}}return fetch(`${previewerConfig.endpoint}?url=${r}`).then(n=>n.json()).then(n=>{const{image:y={url:""},title:h,description:g,favicon:m,siteName:v,hostname:c,originalUrl:a}=n,o=g||h,i=`
        <editor-link-card
          img="${y.url}"
          description="${o}"
          url="${r}"
          favicon="${e(a,"")}"
          sitename="${v}"
          hostname="${c}"
        />
      `;t.querySelector(".green-loader").remove(),t.classList.remove("loading"),t.innerHTML+=i}),t}}class MemoLink extends BlockEmbed{static create(r){const t=super.create();t.setAttribute("contenteditable","false"),t.classList.add("memo-link-card");const{id:e,displayname:n,title:y,slug:h,coverImage:g,coverOrientation:m}=r,v=`
        <memo-link-card
          memoId="${e}"
          displayname='${n}'
          title="${y}"
          slug="${h}"
          data-cover-image="${g}"
          data-cover-orientation="${m}"
          coverimage="${g}"
          coverorientation="${m}"
        />
      `.trim();return t.innerHTML=v,t}}CustomLink.blotName="memod-link",CustomLink.tagName="div",CustomImage.blotName="memod-image",CustomImage.tagName="div",MemoLink.blotName="memo-card-link",MemoLink.tagName="div",Quill$1.register(CustomLink),Quill$1.register(MemoLink),Quill$1.register(Image),Quill$1.register(CustomImage);const Embed$4=Quill$1.import("blots/embed");class Hyperlink$1 extends Embed$4{static create(r){const t=super.create(r);t.setAttribute("title",r.trim()),t.setAttribute("href",r),t.setAttribute("target","_blank");let e="";try{e=new URL(r).hostname}catch{e=r}return t.textContent=e,t}static value(r){return r.textContent}}Hyperlink$1.blotName="custom-hyperlink",Hyperlink$1.className="ql-hyperlink",Hyperlink$1.tagName="A",Quill$1.register(Hyperlink$1);var quill={exports:{}};/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */(function(d,r){(function(e,n){d.exports=n()})(typeof self!="undefined"?self:commonjsGlobal,function(){return function(t){var e={};function n(y){if(e[y])return e[y].exports;var h=e[y]={i:y,l:!1,exports:{}};return t[y].call(h.exports,h,h.exports,n),h.l=!0,h.exports}return n.m=t,n.c=e,n.d=function(y,h,g){n.o(y,h)||Object.defineProperty(y,h,{configurable:!1,enumerable:!0,get:g})},n.n=function(y){var h=y&&y.__esModule?function(){return y.default}:function(){return y};return n.d(h,"a",h),h},n.o=function(y,h){return Object.prototype.hasOwnProperty.call(y,h)},n.p="",n(n.s=109)}([function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(17),h=n(18),g=n(19),m=n(45),v=n(46),c=n(47),a=n(48),o=n(49),i=n(12),p=n(32),_=n(33),f=n(31),u=n(1),l={Scope:u.Scope,create:u.create,find:u.find,query:u.query,register:u.register,Container:y.default,Format:h.default,Leaf:g.default,Embed:a.default,Scroll:m.default,Block:c.default,Inline:v.default,Text:o.default,Attributor:{Attribute:i.default,Class:p.default,Style:_.default,Store:f.default}};e.default=l},function(t,e,n){var y=this&&this.__extends||function(){var f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,l){u.__proto__=l}||function(u,l){for(var b in l)l.hasOwnProperty(b)&&(u[b]=l[b])};return function(u,l){f(u,l);function b(){this.constructor=u}u.prototype=l===null?Object.create(l):(b.prototype=l.prototype,new b)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=function(f){y(u,f);function u(l){var b=this;return l="[Parchment] "+l,b=f.call(this,l)||this,b.message=l,b.name=b.constructor.name,b}return u}(Error);e.ParchmentError=h;var g={},m={},v={},c={};e.DATA_KEY="__blot";var a;(function(f){f[f.TYPE=3]="TYPE",f[f.LEVEL=12]="LEVEL",f[f.ATTRIBUTE=13]="ATTRIBUTE",f[f.BLOT=14]="BLOT",f[f.INLINE=7]="INLINE",f[f.BLOCK=11]="BLOCK",f[f.BLOCK_BLOT=10]="BLOCK_BLOT",f[f.INLINE_BLOT=6]="INLINE_BLOT",f[f.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",f[f.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",f[f.ANY=15]="ANY"})(a=e.Scope||(e.Scope={}));function o(f,u){var l=p(f);if(l==null)throw new h("Unable to create "+f+" blot");var b=l,s=f instanceof Node||f.nodeType===Node.TEXT_NODE?f:b.create(u);return new b(s,u)}e.create=o;function i(f,u){return u===void 0&&(u=!1),f==null?null:f[e.DATA_KEY]!=null?f[e.DATA_KEY].blot:u?i(f.parentNode,u):null}e.find=i;function p(f,u){u===void 0&&(u=a.ANY);var l;if(typeof f=="string")l=c[f]||g[f];else if(f instanceof Text||f.nodeType===Node.TEXT_NODE)l=c.text;else if(typeof f=="number")f&a.LEVEL&a.BLOCK?l=c.block:f&a.LEVEL&a.INLINE&&(l=c.inline);else if(f instanceof HTMLElement){var b=(f.getAttribute("class")||"").split(/\s+/);for(var s in b)if(l=m[b[s]],l)break;l=l||v[f.tagName]}return l==null?null:u&a.LEVEL&l.scope&&u&a.TYPE&l.scope?l:null}e.query=p;function _(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];if(f.length>1)return f.map(function(s){return _(s)});var l=f[0];if(typeof l.blotName!="string"&&typeof l.attrName!="string")throw new h("Invalid definition");if(l.blotName==="abstract")throw new h("Cannot register abstract class");if(c[l.blotName||l.attrName]=l,typeof l.keyName=="string")g[l.keyName]=l;else if(l.className!=null&&(m[l.className]=l),l.tagName!=null){Array.isArray(l.tagName)?l.tagName=l.tagName.map(function(s){return s.toUpperCase()}):l.tagName=l.tagName.toUpperCase();var b=Array.isArray(l.tagName)?l.tagName:[l.tagName];b.forEach(function(s){(v[s]==null||l.className==null)&&(v[s]=l)})}return l}e.register=_},function(t,e,n){var y=n(51),h=n(11),g=n(3),m=n(20),v=String.fromCharCode(0),c=function(a){Array.isArray(a)?this.ops=a:a!=null&&Array.isArray(a.ops)?this.ops=a.ops:this.ops=[]};c.prototype.insert=function(a,o){var i={};return a.length===0?this:(i.insert=a,o!=null&&typeof o=="object"&&Object.keys(o).length>0&&(i.attributes=o),this.push(i))},c.prototype.delete=function(a){return a<=0?this:this.push({delete:a})},c.prototype.retain=function(a,o){if(a<=0)return this;var i={retain:a};return o!=null&&typeof o=="object"&&Object.keys(o).length>0&&(i.attributes=o),this.push(i)},c.prototype.push=function(a){var o=this.ops.length,i=this.ops[o-1];if(a=g(!0,{},a),typeof i=="object"){if(typeof a.delete=="number"&&typeof i.delete=="number")return this.ops[o-1]={delete:i.delete+a.delete},this;if(typeof i.delete=="number"&&a.insert!=null&&(o-=1,i=this.ops[o-1],typeof i!="object"))return this.ops.unshift(a),this;if(h(a.attributes,i.attributes)){if(typeof a.insert=="string"&&typeof i.insert=="string")return this.ops[o-1]={insert:i.insert+a.insert},typeof a.attributes=="object"&&(this.ops[o-1].attributes=a.attributes),this;if(typeof a.retain=="number"&&typeof i.retain=="number")return this.ops[o-1]={retain:i.retain+a.retain},typeof a.attributes=="object"&&(this.ops[o-1].attributes=a.attributes),this}}return o===this.ops.length?this.ops.push(a):this.ops.splice(o,0,a),this},c.prototype.chop=function(){var a=this.ops[this.ops.length-1];return a&&a.retain&&!a.attributes&&this.ops.pop(),this},c.prototype.filter=function(a){return this.ops.filter(a)},c.prototype.forEach=function(a){this.ops.forEach(a)},c.prototype.map=function(a){return this.ops.map(a)},c.prototype.partition=function(a){var o=[],i=[];return this.forEach(function(p){var _=a(p)?o:i;_.push(p)}),[o,i]},c.prototype.reduce=function(a,o){return this.ops.reduce(a,o)},c.prototype.changeLength=function(){return this.reduce(function(a,o){return o.insert?a+m.length(o):o.delete?a-o.delete:a},0)},c.prototype.length=function(){return this.reduce(function(a,o){return a+m.length(o)},0)},c.prototype.slice=function(a,o){a=a||0,typeof o!="number"&&(o=1/0);for(var i=[],p=m.iterator(this.ops),_=0;_<o&&p.hasNext();){var f;_<a?f=p.next(a-_):(f=p.next(o-_),i.push(f)),_+=m.length(f)}return new c(i)},c.prototype.compose=function(a){var o=m.iterator(this.ops),i=m.iterator(a.ops),p=[],_=i.peek();if(_!=null&&typeof _.retain=="number"&&_.attributes==null){for(var f=_.retain;o.peekType()==="insert"&&o.peekLength()<=f;)f-=o.peekLength(),p.push(o.next());_.retain-f>0&&i.next(_.retain-f)}for(var u=new c(p);o.hasNext()||i.hasNext();)if(i.peekType()==="insert")u.push(i.next());else if(o.peekType()==="delete")u.push(o.next());else{var l=Math.min(o.peekLength(),i.peekLength()),b=o.next(l),s=i.next(l);if(typeof s.retain=="number"){var x={};typeof b.retain=="number"?x.retain=l:x.insert=b.insert;var M=m.attributes.compose(b.attributes,s.attributes,typeof b.retain=="number");if(M&&(x.attributes=M),u.push(x),!i.hasNext()&&h(u.ops[u.ops.length-1],x)){var P=new c(o.rest());return u.concat(P).chop()}}else typeof s.delete=="number"&&typeof b.retain=="number"&&u.push(s)}return u.chop()},c.prototype.concat=function(a){var o=new c(this.ops.slice());return a.ops.length>0&&(o.push(a.ops[0]),o.ops=o.ops.concat(a.ops.slice(1))),o},c.prototype.diff=function(a,o){if(this.ops===a.ops)return new c;var i=[this,a].map(function(l){return l.map(function(b){if(b.insert!=null)return typeof b.insert=="string"?b.insert:v;var s=l===a?"on":"with";throw new Error("diff() called "+s+" non-document")}).join("")}),p=new c,_=y(i[0],i[1],o),f=m.iterator(this.ops),u=m.iterator(a.ops);return _.forEach(function(l){for(var b=l[1].length;b>0;){var s=0;switch(l[0]){case y.INSERT:s=Math.min(u.peekLength(),b),p.push(u.next(s));break;case y.DELETE:s=Math.min(b,f.peekLength()),f.next(s),p.delete(s);break;case y.EQUAL:s=Math.min(f.peekLength(),u.peekLength(),b);var x=f.next(s),M=u.next(s);h(x.insert,M.insert)?p.retain(s,m.attributes.diff(x.attributes,M.attributes)):p.push(M).delete(s);break}b-=s}}),p.chop()},c.prototype.eachLine=function(a,o){o=o||`
`;for(var i=m.iterator(this.ops),p=new c,_=0;i.hasNext();){if(i.peekType()!=="insert")return;var f=i.peek(),u=m.length(f)-i.peekLength(),l=typeof f.insert=="string"?f.insert.indexOf(o,u)-u:-1;if(l<0)p.push(i.next());else if(l>0)p.push(i.next(l));else{if(a(p,i.next(1).attributes||{},_)===!1)return;_+=1,p=new c}}p.length()>0&&a(p,{},_)},c.prototype.transform=function(a,o){if(o=!!o,typeof a=="number")return this.transformPosition(a,o);for(var i=m.iterator(this.ops),p=m.iterator(a.ops),_=new c;i.hasNext()||p.hasNext();)if(i.peekType()==="insert"&&(o||p.peekType()!=="insert"))_.retain(m.length(i.next()));else if(p.peekType()==="insert")_.push(p.next());else{var f=Math.min(i.peekLength(),p.peekLength()),u=i.next(f),l=p.next(f);if(u.delete)continue;l.delete?_.push(l):_.retain(f,m.attributes.transform(u.attributes,l.attributes,o))}return _.chop()},c.prototype.transformPosition=function(a,o){o=!!o;for(var i=m.iterator(this.ops),p=0;i.hasNext()&&p<=a;){var _=i.peekLength(),f=i.peekType();if(i.next(),f==="delete"){a-=Math.min(_,a-p);continue}else f==="insert"&&(p<a||!o)&&(a+=_);p+=_}return a},t.exports=c},function(t,e){var n=Object.prototype.hasOwnProperty,y=Object.prototype.toString,h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,m=function(i){return typeof Array.isArray=="function"?Array.isArray(i):y.call(i)==="[object Array]"},v=function(i){if(!i||y.call(i)!=="[object Object]")return!1;var p=n.call(i,"constructor"),_=i.constructor&&i.constructor.prototype&&n.call(i.constructor.prototype,"isPrototypeOf");if(i.constructor&&!p&&!_)return!1;var f;for(f in i);return typeof f=="undefined"||n.call(i,f)},c=function(i,p){h&&p.name==="__proto__"?h(i,p.name,{enumerable:!0,configurable:!0,value:p.newValue,writable:!0}):i[p.name]=p.newValue},a=function(i,p){if(p==="__proto__")if(n.call(i,p)){if(g)return g(i,p).value}else return;return i[p]};t.exports=function o(){var i,p,_,f,u,l,b=arguments[0],s=1,x=arguments.length,M=!1;for(typeof b=="boolean"&&(M=b,b=arguments[1]||{},s=2),(b==null||typeof b!="object"&&typeof b!="function")&&(b={});s<x;++s)if(i=arguments[s],i!=null)for(p in i)_=a(b,p),f=a(i,p),b!==f&&(M&&f&&(v(f)||(u=m(f)))?(u?(u=!1,l=_&&m(_)?_:[]):l=_&&v(_)?_:{},c(b,{name:p,newValue:o(M,l,f)})):typeof f!="undefined"&&c(b,{name:p,newValue:f}));return b}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var y=function(){function E(O,k){for(var I=0;I<k.length;I++){var S=k[I];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(O,S.key,S)}}return function(O,k,I){return k&&E(O.prototype,k),I&&E(O,I),O}}(),h=function E(O,k,I){O===null&&(O=Function.prototype);var S=Object.getOwnPropertyDescriptor(O,k);if(S===void 0){var B=Object.getPrototypeOf(O);return B===null?void 0:E(B,k,I)}else{if("value"in S)return S.value;var q=S.get;return q===void 0?void 0:q.call(I)}},g=n(3),m=b(g),v=n(2),c=b(v),a=n(0),o=b(a),i=n(16),p=b(i),_=n(6),f=b(_),u=n(7),l=b(u);function b(E){return E&&E.__esModule?E:{default:E}}function s(E,O){if(!(E instanceof O))throw new TypeError("Cannot call a class as a function")}function x(E,O){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O&&(typeof O=="object"||typeof O=="function")?O:E}function M(E,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);E.prototype=Object.create(O&&O.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(E,O):E.__proto__=O)}var P=1,A=function(E){M(O,E);function O(){return s(this,O),x(this,(O.__proto__||Object.getPrototypeOf(O)).apply(this,arguments))}return y(O,[{key:"attach",value:function(){h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"attach",this).call(this),this.attributes=new o.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new c.default().insert(this.value(),(0,m.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(I,S){var B=o.default.query(I,o.default.Scope.BLOCK_ATTRIBUTE);B!=null&&this.attributes.attribute(B,S)}},{key:"formatAt",value:function(I,S,B,q){this.format(B,q)}},{key:"insertAt",value:function(I,S,B){if(typeof S=="string"&&S.endsWith(`
`)){var q=o.default.create(T.blotName);this.parent.insertBefore(q,I===0?this:this.next),q.insertAt(0,S.slice(0,-1))}else h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"insertAt",this).call(this,I,S,B)}}]),O}(o.default.Embed);A.scope=o.default.Scope.BLOCK_BLOT;var T=function(E){M(O,E);function O(k){s(this,O);var I=x(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,k));return I.cache={},I}return y(O,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(o.default.Leaf).reduce(function(I,S){return S.length()===0?I:I.insert(S.value(),w(S))},new c.default).insert(`
`,w(this))),this.cache.delta}},{key:"deleteAt",value:function(I,S){h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"deleteAt",this).call(this,I,S),this.cache={}}},{key:"formatAt",value:function(I,S,B,q){S<=0||(o.default.query(B,o.default.Scope.BLOCK)?I+S===this.length()&&this.format(B,q):h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"formatAt",this).call(this,I,Math.min(S,this.length()-I-1),B,q),this.cache={})}},{key:"insertAt",value:function(I,S,B){if(B!=null)return h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"insertAt",this).call(this,I,S,B);if(S.length!==0){var q=S.split(`
`),F=q.shift();F.length>0&&(I<this.length()-1||this.children.tail==null?h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"insertAt",this).call(this,Math.min(I,this.length()-1),F):this.children.tail.insertAt(this.children.tail.length(),F),this.cache={});var U=this;q.reduce(function(R,D){return U=U.split(R,!0),U.insertAt(0,D),D.length},I+F.length)}}},{key:"insertBefore",value:function(I,S){var B=this.children.head;h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"insertBefore",this).call(this,I,S),B instanceof p.default&&B.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"length",this).call(this)+P),this.cache.length}},{key:"moveChildren",value:function(I,S){h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"moveChildren",this).call(this,I,S),this.cache={}}},{key:"optimize",value:function(I){h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"optimize",this).call(this,I),this.cache={}}},{key:"path",value:function(I){return h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"path",this).call(this,I,!0)}},{key:"removeChild",value:function(I){h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"removeChild",this).call(this,I),this.cache={}}},{key:"split",value:function(I){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(S&&(I===0||I>=this.length()-P)){var B=this.clone();return I===0?(this.parent.insertBefore(B,this),this):(this.parent.insertBefore(B,this.next),B)}else{var q=h(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"split",this).call(this,I,S);return this.cache={},q}}}]),O}(o.default.Block);T.blotName="block",T.tagName="P",T.defaultChild="break",T.allowedChildren=[f.default,o.default.Embed,l.default];function w(E){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return E==null||(typeof E.formats=="function"&&(O=(0,m.default)(O,E.formats())),E.parent==null||E.parent.blotName=="scroll"||E.parent.statics.scope!==E.statics.scope)?O:w(E.parent,O)}e.bubbleFormats=w,e.BlockEmbed=A,e.default=T},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},h=function(){function U(R,D){var C=[],N=!0,K=!1,W=void 0;try{for(var L=R[Symbol.iterator](),j;!(N=(j=L.next()).done)&&(C.push(j.value),!(D&&C.length===D));N=!0);}catch($){K=!0,W=$}finally{try{!N&&L.return&&L.return()}finally{if(K)throw W}}return C}return function(R,D){if(Array.isArray(R))return R;if(Symbol.iterator in Object(R))return U(R,D);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function U(R,D){for(var C=0;C<D.length;C++){var N=D[C];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(R,N.key,N)}}return function(R,D,C){return D&&U(R.prototype,D),C&&U(R,C),R}}();n(50);var m=n(2),v=w(m),c=n(14),a=w(c),o=n(8),i=w(o),p=n(9),_=w(p),f=n(0),u=w(f),l=n(15),b=w(l),s=n(3),x=w(s),M=n(10),P=w(M),A=n(34),T=w(A);function w(U){return U&&U.__esModule?U:{default:U}}function E(U,R,D){return R in U?Object.defineProperty(U,R,{value:D,enumerable:!0,configurable:!0,writable:!0}):U[R]=D,U}function O(U,R){if(!(U instanceof R))throw new TypeError("Cannot call a class as a function")}var k=(0,P.default)("quill"),I=function(){g(U,null,[{key:"debug",value:function(D){D===!0&&(D="log"),P.default.level(D)}},{key:"find",value:function(D){return D.__quill||u.default.find(D)}},{key:"import",value:function(D){return this.imports[D]==null&&k.error("Cannot import "+D+". Are you sure it was registered?"),this.imports[D]}},{key:"register",value:function(D,C){var N=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof D!="string"){var W=D.attrName||D.blotName;typeof W=="string"?this.register("formats/"+W,D,C):Object.keys(D).forEach(function(L){N.register(L,D[L],C)})}else this.imports[D]!=null&&!K&&k.warn("Overwriting "+D+" with",C),this.imports[D]=C,(D.startsWith("blots/")||D.startsWith("formats/"))&&C.blotName!=="abstract"?u.default.register(C):D.startsWith("modules")&&typeof C.register=="function"&&C.register()}}]);function U(R){var D=this,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(O(this,U),this.options=S(R,C),this.container=this.options.container,this.container==null)return k.error("Invalid Quill container",R);this.options.debug&&U.debug(this.options.debug);var N=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new i.default,this.scroll=u.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new a.default(this.scroll),this.selection=new b.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(i.default.events.EDITOR_CHANGE,function(W){W===i.default.events.TEXT_CHANGE&&D.root.classList.toggle("ql-blank",D.editor.isBlank())}),this.emitter.on(i.default.events.SCROLL_UPDATE,function(W,L){var j=D.selection.lastRange,$=j&&j.length===0?j.index:void 0;B.call(D,function(){return D.editor.update(null,L,$)},W)});var K=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+N+"<p><br></p></div>");this.setContents(K),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return g(U,[{key:"addContainer",value:function(D){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof D=="string"){var N=D;D=document.createElement("div"),D.classList.add(N)}return this.container.insertBefore(D,C),D}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(D,C,N){var K=this,W=q(D,C,N),L=h(W,4);return D=L[0],C=L[1],N=L[3],B.call(this,function(){return K.editor.deleteText(D,C)},N,D,-1*C)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.scroll.enable(D),this.container.classList.toggle("ql-disabled",!D)}},{key:"focus",value:function(){var D=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=D,this.scrollIntoView()}},{key:"format",value:function(D,C){var N=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:i.default.sources.API;return B.call(this,function(){var W=N.getSelection(!0),L=new v.default;if(W==null)return L;if(u.default.query(D,u.default.Scope.BLOCK))L=N.editor.formatLine(W.index,W.length,E({},D,C));else{if(W.length===0)return N.selection.format(D,C),L;L=N.editor.formatText(W.index,W.length,E({},D,C))}return N.setSelection(W,i.default.sources.SILENT),L},K)}},{key:"formatLine",value:function(D,C,N,K,W){var L=this,j=void 0,$=q(D,C,N,K,W),H=h($,4);return D=H[0],C=H[1],j=H[2],W=H[3],B.call(this,function(){return L.editor.formatLine(D,C,j)},W,D,0)}},{key:"formatText",value:function(D,C,N,K,W){var L=this,j=void 0,$=q(D,C,N,K,W),H=h($,4);return D=H[0],C=H[1],j=H[2],W=H[3],B.call(this,function(){return L.editor.formatText(D,C,j)},W,D,0)}},{key:"getBounds",value:function(D){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,N=void 0;typeof D=="number"?N=this.selection.getBounds(D,C):N=this.selection.getBounds(D.index,D.length);var K=this.container.getBoundingClientRect();return{bottom:N.bottom-K.top,height:N.height,left:N.left-K.left,right:N.right-K.left,top:N.top-K.top,width:N.width}}},{key:"getContents",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-D,N=q(D,C),K=h(N,2);return D=K[0],C=K[1],this.editor.getContents(D,C)}},{key:"getFormat",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof D=="number"?this.editor.getFormat(D,C):this.editor.getFormat(D.index,D.length)}},{key:"getIndex",value:function(D){return D.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(D){return this.scroll.leaf(D)}},{key:"getLine",value:function(D){return this.scroll.line(D)}},{key:"getLines",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof D!="number"?this.scroll.lines(D.index,D.length):this.scroll.lines(D,C)}},{key:"getModule",value:function(D){return this.theme.modules[D]}},{key:"getSelection",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return D&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-D,N=q(D,C),K=h(N,2);return D=K[0],C=K[1],this.editor.getText(D,C)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(D,C,N){var K=this,W=arguments.length>3&&arguments[3]!==void 0?arguments[3]:U.sources.API;return B.call(this,function(){return K.editor.insertEmbed(D,C,N)},W,D)}},{key:"insertText",value:function(D,C,N,K,W){var L=this,j=void 0,$=q(D,0,N,K,W),H=h($,4);return D=H[0],j=H[2],W=H[3],B.call(this,function(){return L.editor.insertText(D,C,j)},W,D,C.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(D,C,N){this.clipboard.dangerouslyPasteHTML(D,C,N)}},{key:"removeFormat",value:function(D,C,N){var K=this,W=q(D,C,N),L=h(W,4);return D=L[0],C=L[1],N=L[3],B.call(this,function(){return K.editor.removeFormat(D,C)},N,D)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(D){var C=this,N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i.default.sources.API;return B.call(this,function(){D=new v.default(D);var K=C.getLength(),W=C.editor.deleteText(0,K),L=C.editor.applyDelta(D),j=L.ops[L.ops.length-1];j!=null&&typeof j.insert=="string"&&j.insert[j.insert.length-1]===`
`&&(C.editor.deleteText(C.getLength()-1,1),L.delete(1));var $=W.compose(L);return $},N)}},{key:"setSelection",value:function(D,C,N){if(D==null)this.selection.setRange(null,C||U.sources.API);else{var K=q(D,C,N),W=h(K,4);D=W[0],C=W[1],N=W[3],this.selection.setRange(new l.Range(D,C),N),N!==i.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(D){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i.default.sources.API,N=new v.default().insert(D);return this.setContents(N,C)}},{key:"update",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i.default.sources.USER,C=this.scroll.update(D);return this.selection.update(D),C}},{key:"updateContents",value:function(D){var C=this,N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i.default.sources.API;return B.call(this,function(){return D=new v.default(D),C.editor.applyDelta(D,N)},N,!0)}}]),U}();I.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},I.events=i.default.events,I.sources=i.default.sources,I.version="1.3.7",I.imports={delta:v.default,parchment:u.default,"core/module":_.default,"core/theme":T.default};function S(U,R){if(R=(0,x.default)(!0,{container:U,modules:{clipboard:!0,keyboard:!0,history:!0}},R),!R.theme||R.theme===I.DEFAULTS.theme)R.theme=T.default;else if(R.theme=I.import("themes/"+R.theme),R.theme==null)throw new Error("Invalid theme "+R.theme+". Did you register it?");var D=(0,x.default)(!0,{},R.theme.DEFAULTS);[D,R].forEach(function(K){K.modules=K.modules||{},Object.keys(K.modules).forEach(function(W){K.modules[W]===!0&&(K.modules[W]={})})});var C=Object.keys(D.modules).concat(Object.keys(R.modules)),N=C.reduce(function(K,W){var L=I.import("modules/"+W);return L==null?k.error("Cannot load "+W+" module. Are you sure you registered it?"):K[W]=L.DEFAULTS||{},K},{});return R.modules!=null&&R.modules.toolbar&&R.modules.toolbar.constructor!==Object&&(R.modules.toolbar={container:R.modules.toolbar}),R=(0,x.default)(!0,{},I.DEFAULTS,{modules:N},D,R),["bounds","container","scrollingContainer"].forEach(function(K){typeof R[K]=="string"&&(R[K]=document.querySelector(R[K]))}),R.modules=Object.keys(R.modules).reduce(function(K,W){return R.modules[W]&&(K[W]=R.modules[W]),K},{}),R}function B(U,R,D,C){if(this.options.strict&&!this.isEnabled()&&R===i.default.sources.USER)return new v.default;var N=D==null?null:this.getSelection(),K=this.editor.delta,W=U();if(N!=null&&(D===!0&&(D=N.index),C==null?N=F(N,W,R):C!==0&&(N=F(N,D,C,R)),this.setSelection(N,i.default.sources.SILENT)),W.length()>0){var L,j=[i.default.events.TEXT_CHANGE,W,K,R];if((L=this.emitter).emit.apply(L,[i.default.events.EDITOR_CHANGE].concat(j)),R!==i.default.sources.SILENT){var $;($=this.emitter).emit.apply($,j)}}return W}function q(U,R,D,C,N){var K={};return typeof U.index=="number"&&typeof U.length=="number"?typeof R!="number"?(N=C,C=D,D=R,R=U.length,U=U.index):(R=U.length,U=U.index):typeof R!="number"&&(N=C,C=D,D=R,R=0),(typeof D=="undefined"?"undefined":y(D))==="object"?(K=D,N=C):typeof D=="string"&&(C!=null?K[D]=C:N=D),N=N||i.default.sources.API,[U,R,K,N]}function F(U,R,D,C){if(U==null)return null;var N=void 0,K=void 0;if(R instanceof v.default){var W=[U.index,U.index+U.length].map(function(H){return R.transformPosition(H,C!==i.default.sources.USER)}),L=h(W,2);N=L[0],K=L[1]}else{var j=[U.index,U.index+U.length].map(function(H){return H<R||H===R&&C===i.default.sources.USER?H:D>=0?H+D:Math.max(R,H+D)}),$=h(j,2);N=$[0],K=$[1]}return new l.Range(N,K-N)}e.expandConfig=S,e.overload=q,e.default=I},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function f(u,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,l,b){return l&&f(u.prototype,l),b&&f(u,b),u}}(),h=function f(u,l,b){u===null&&(u=Function.prototype);var s=Object.getOwnPropertyDescriptor(u,l);if(s===void 0){var x=Object.getPrototypeOf(u);return x===null?void 0:f(x,l,b)}else{if("value"in s)return s.value;var M=s.get;return M===void 0?void 0:M.call(b)}},g=n(7),m=a(g),v=n(0),c=a(v);function a(f){return f&&f.__esModule?f:{default:f}}function o(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function i(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function p(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var _=function(f){p(u,f);function u(){return o(this,u),i(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return y(u,[{key:"formatAt",value:function(b,s,x,M){if(u.compare(this.statics.blotName,x)<0&&c.default.query(x,c.default.Scope.BLOT)){var P=this.isolate(b,s);M&&P.wrap(x,M)}else h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"formatAt",this).call(this,b,s,x,M)}},{key:"optimize",value:function(b){if(h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"optimize",this).call(this,b),this.parent instanceof u&&u.compare(this.statics.blotName,this.parent.statics.blotName)>0){var s=this.parent.isolate(this.offset(),this.length());this.moveChildren(s),s.wrap(this)}}}],[{key:"compare",value:function(b,s){var x=u.order.indexOf(b),M=u.order.indexOf(s);return x>=0||M>=0?x-M:b===s?0:b<s?-1:1}}]),u}(c.default.Inline);_.allowedChildren=[_,c.default.Embed,m.default],_.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=_},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(0),h=g(y);function g(o){return o&&o.__esModule?o:{default:o}}function m(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function v(o,i){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i&&(typeof i=="object"||typeof i=="function")?i:o}function c(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(o,i):o.__proto__=i)}var a=function(o){c(i,o);function i(){return m(this,i),v(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return i}(h.default.Text);e.default=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function l(b,s){for(var x=0;x<s.length;x++){var M=s[x];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(b,M.key,M)}}return function(b,s,x){return s&&l(b.prototype,s),x&&l(b,x),b}}(),h=function l(b,s,x){b===null&&(b=Function.prototype);var M=Object.getOwnPropertyDescriptor(b,s);if(M===void 0){var P=Object.getPrototypeOf(b);return P===null?void 0:l(P,s,x)}else{if("value"in M)return M.value;var A=M.get;return A===void 0?void 0:A.call(x)}},g=n(54),m=a(g),v=n(10),c=a(v);function a(l){return l&&l.__esModule?l:{default:l}}function o(l,b){if(!(l instanceof b))throw new TypeError("Cannot call a class as a function")}function i(l,b){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:l}function p(l,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);l.prototype=Object.create(b&&b.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(l,b):l.__proto__=b)}var _=(0,c.default)("quill:events"),f=["selectionchange","mousedown","mouseup","click"];f.forEach(function(l){document.addEventListener(l,function(){for(var b=arguments.length,s=Array(b),x=0;x<b;x++)s[x]=arguments[x];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(M){if(M.__quill&&M.__quill.emitter){var P;(P=M.__quill.emitter).handleDOM.apply(P,s)}})})});var u=function(l){p(b,l);function b(){o(this,b);var s=i(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return s.listeners={},s.on("error",_.error),s}return y(b,[{key:"emit",value:function(){_.log.apply(_,arguments),h(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(x){for(var M=arguments.length,P=Array(M>1?M-1:0),A=1;A<M;A++)P[A-1]=arguments[A];(this.listeners[x.type]||[]).forEach(function(T){var w=T.node,E=T.handler;(x.target===w||w.contains(x.target))&&E.apply(void 0,[x].concat(P))})}},{key:"listenDOM",value:function(x,M,P){this.listeners[x]||(this.listeners[x]=[]),this.listeners[x].push({node:M,handler:P})}}]),b}(m.default);u.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},u.sources={API:"api",SILENT:"silent",USER:"user"},e.default=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});function y(g,m){if(!(g instanceof m))throw new TypeError("Cannot call a class as a function")}var h=function g(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};y(this,g),this.quill=m,this.options=v};h.DEFAULTS={},e.default=h},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=["error","warn","log","info"],h="warn";function g(v){if(y.indexOf(v)<=y.indexOf(h)){for(var c,a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];(c=console)[v].apply(c,o)}}function m(v){return y.reduce(function(c,a){return c[a]=g.bind(console,a,v),c},{})}g.level=m.level=function(v){h=v},e.default=m},function(t,e,n){var y=Array.prototype.slice,h=n(52),g=n(53),m=t.exports=function(o,i,p){return p||(p={}),o===i?!0:o instanceof Date&&i instanceof Date?o.getTime()===i.getTime():!o||!i||typeof o!="object"&&typeof i!="object"?p.strict?o===i:o==i:a(o,i,p)};function v(o){return o==null}function c(o){return!(!o||typeof o!="object"||typeof o.length!="number"||typeof o.copy!="function"||typeof o.slice!="function"||o.length>0&&typeof o[0]!="number")}function a(o,i,p){var _,f;if(v(o)||v(i)||o.prototype!==i.prototype)return!1;if(g(o))return g(i)?(o=y.call(o),i=y.call(i),m(o,i,p)):!1;if(c(o)){if(!c(i)||o.length!==i.length)return!1;for(_=0;_<o.length;_++)if(o[_]!==i[_])return!1;return!0}try{var u=h(o),l=h(i)}catch{return!1}if(u.length!=l.length)return!1;for(u.sort(),l.sort(),_=u.length-1;_>=0;_--)if(u[_]!=l[_])return!1;for(_=u.length-1;_>=0;_--)if(f=u[_],!m(o[f],i[f],p))return!1;return typeof o==typeof i}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(1),h=function(){function g(m,v,c){c===void 0&&(c={}),this.attrName=m,this.keyName=v;var a=y.Scope.TYPE&y.Scope.ATTRIBUTE;c.scope!=null?this.scope=c.scope&y.Scope.LEVEL|a:this.scope=y.Scope.ATTRIBUTE,c.whitelist!=null&&(this.whitelist=c.whitelist)}return g.keys=function(m){return[].map.call(m.attributes,function(v){return v.name})},g.prototype.add=function(m,v){return this.canAdd(m,v)?(m.setAttribute(this.keyName,v),!0):!1},g.prototype.canAdd=function(m,v){var c=y.query(m,y.Scope.BLOT&(this.scope|y.Scope.TYPE));return c==null?!1:this.whitelist==null?!0:typeof v=="string"?this.whitelist.indexOf(v.replace(/["']/g,""))>-1:this.whitelist.indexOf(v)>-1},g.prototype.remove=function(m){m.removeAttribute(this.keyName)},g.prototype.value=function(m){var v=m.getAttribute(this.keyName);return this.canAdd(m,v)&&v?v:""},g}();e.default=h},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var y=function(){function A(T,w){var E=[],O=!0,k=!1,I=void 0;try{for(var S=T[Symbol.iterator](),B;!(O=(B=S.next()).done)&&(E.push(B.value),!(w&&E.length===w));O=!0);}catch(q){k=!0,I=q}finally{try{!O&&S.return&&S.return()}finally{if(k)throw I}}return E}return function(T,w){if(Array.isArray(T))return T;if(Symbol.iterator in Object(T))return A(T,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function A(T,w){for(var E=0;E<w.length;E++){var O=w[E];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(T,O.key,O)}}return function(T,w,E){return w&&A(T.prototype,w),E&&A(T,E),T}}(),g=function A(T,w,E){T===null&&(T=Function.prototype);var O=Object.getOwnPropertyDescriptor(T,w);if(O===void 0){var k=Object.getPrototypeOf(T);return k===null?void 0:A(k,w,E)}else{if("value"in O)return O.value;var I=O.get;return I===void 0?void 0:I.call(E)}},m=n(2),v=l(m),c=n(0),a=l(c),o=n(4),i=l(o),p=n(6),_=l(p),f=n(7),u=l(f);function l(A){return A&&A.__esModule?A:{default:A}}function b(A,T){if(!(A instanceof T))throw new TypeError("Cannot call a class as a function")}function s(A,T){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T&&(typeof T=="object"||typeof T=="function")?T:A}function x(A,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof T);A.prototype=Object.create(T&&T.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),T&&(Object.setPrototypeOf?Object.setPrototypeOf(A,T):A.__proto__=T)}var M=function(A){x(T,A);function T(){return b(this,T),s(this,(T.__proto__||Object.getPrototypeOf(T)).apply(this,arguments))}return T}(_.default);M.blotName="code",M.tagName="CODE";var P=function(A){x(T,A);function T(){return b(this,T),s(this,(T.__proto__||Object.getPrototypeOf(T)).apply(this,arguments))}return h(T,[{key:"delta",value:function(){var E=this,O=this.domNode.textContent;return O.endsWith(`
`)&&(O=O.slice(0,-1)),O.split(`
`).reduce(function(k,I){return k.insert(I).insert(`
`,E.formats())},new v.default)}},{key:"format",value:function(E,O){if(!(E===this.statics.blotName&&O)){var k=this.descendant(u.default,this.length()-1),I=y(k,1),S=I[0];S!=null&&S.deleteAt(S.length()-1,1),g(T.prototype.__proto__||Object.getPrototypeOf(T.prototype),"format",this).call(this,E,O)}}},{key:"formatAt",value:function(E,O,k,I){if(O!==0&&!(a.default.query(k,a.default.Scope.BLOCK)==null||k===this.statics.blotName&&I===this.statics.formats(this.domNode))){var S=this.newlineIndex(E);if(!(S<0||S>=E+O)){var B=this.newlineIndex(E,!0)+1,q=S-B+1,F=this.isolate(B,q),U=F.next;F.format(k,I),U instanceof T&&U.formatAt(0,E-B+O-q,k,I)}}}},{key:"insertAt",value:function(E,O,k){if(k==null){var I=this.descendant(u.default,E),S=y(I,2),B=S[0],q=S[1];B.insertAt(q,O)}}},{key:"length",value:function(){var E=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?E:E+1}},{key:"newlineIndex",value:function(E){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(O)return this.domNode.textContent.slice(0,E).lastIndexOf(`
`);var k=this.domNode.textContent.slice(E).indexOf(`
`);return k>-1?E+k:-1}},{key:"optimize",value:function(E){this.domNode.textContent.endsWith(`
`)||this.appendChild(a.default.create("text",`
`)),g(T.prototype.__proto__||Object.getPrototypeOf(T.prototype),"optimize",this).call(this,E);var O=this.next;O!=null&&O.prev===this&&O.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===O.statics.formats(O.domNode)&&(O.optimize(E),O.moveChildren(this),O.remove())}},{key:"replace",value:function(E){g(T.prototype.__proto__||Object.getPrototypeOf(T.prototype),"replace",this).call(this,E),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(O){var k=a.default.find(O);k==null?O.parentNode.removeChild(O):k instanceof a.default.Embed?k.remove():k.unwrap()})}}],[{key:"create",value:function(E){var O=g(T.__proto__||Object.getPrototypeOf(T),"create",this).call(this,E);return O.setAttribute("spellcheck",!1),O}},{key:"formats",value:function(){return!0}}]),T}(i.default);P.blotName="code-block",P.tagName="PRE",P.TAB="  ",e.Code=M,e.default=P},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},h=function(){function U(R,D){var C=[],N=!0,K=!1,W=void 0;try{for(var L=R[Symbol.iterator](),j;!(N=(j=L.next()).done)&&(C.push(j.value),!(D&&C.length===D));N=!0);}catch($){K=!0,W=$}finally{try{!N&&L.return&&L.return()}finally{if(K)throw W}}return C}return function(R,D){if(Array.isArray(R))return R;if(Symbol.iterator in Object(R))return U(R,D);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function U(R,D){for(var C=0;C<D.length;C++){var N=D[C];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(R,N.key,N)}}return function(R,D,C){return D&&U(R.prototype,D),C&&U(R,C),R}}(),m=n(2),v=O(m),c=n(20),a=O(c),o=n(0),i=O(o),p=n(13),_=O(p),f=n(24),u=O(f),l=n(4),b=O(l),s=n(16),x=O(s),M=n(21),P=O(M),A=n(11),T=O(A),w=n(3),E=O(w);function O(U){return U&&U.__esModule?U:{default:U}}function k(U,R,D){return R in U?Object.defineProperty(U,R,{value:D,enumerable:!0,configurable:!0,writable:!0}):U[R]=D,U}function I(U,R){if(!(U instanceof R))throw new TypeError("Cannot call a class as a function")}var S=/^[ -~]*$/,B=function(){function U(R){I(this,U),this.scroll=R,this.delta=this.getDelta()}return g(U,[{key:"applyDelta",value:function(D){var C=this,N=!1;this.scroll.update();var K=this.scroll.length();return this.scroll.batchStart(),D=F(D),D.reduce(function(W,L){var j=L.retain||L.delete||L.insert.length||1,$=L.attributes||{};if(L.insert!=null){if(typeof L.insert=="string"){var H=L.insert;H.endsWith(`
`)&&N&&(N=!1,H=H.slice(0,-1)),W>=K&&!H.endsWith(`
`)&&(N=!0),C.scroll.insertAt(W,H);var Q=C.scroll.line(W),X=h(Q,2),J=X[0],ee=X[1],oe=(0,E.default)({},(0,l.bubbleFormats)(J));if(J instanceof b.default){var ie=J.descendant(i.default.Leaf,ee),ue=h(ie,1),le=ue[0];oe=(0,E.default)(oe,(0,l.bubbleFormats)(le))}$=a.default.attributes.diff(oe,$)||{}}else if(y(L.insert)==="object"){var G=Object.keys(L.insert)[0];if(G==null)return W;C.scroll.insertAt(W,G,L.insert[G])}K+=j}return Object.keys($).forEach(function(z){C.scroll.formatAt(W,j,z,$[z])}),W+j},0),D.reduce(function(W,L){return typeof L.delete=="number"?(C.scroll.deleteAt(W,L.delete),W):W+(L.retain||L.insert.length||1)},0),this.scroll.batchEnd(),this.update(D)}},{key:"deleteText",value:function(D,C){return this.scroll.deleteAt(D,C),this.update(new v.default().retain(D).delete(C))}},{key:"formatLine",value:function(D,C){var N=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(K).forEach(function(W){if(!(N.scroll.whitelist!=null&&!N.scroll.whitelist[W])){var L=N.scroll.lines(D,Math.max(C,1)),j=C;L.forEach(function($){var H=$.length();if(!($ instanceof _.default))$.format(W,K[W]);else{var Q=D-$.offset(N.scroll),X=$.newlineIndex(Q+j)-Q+1;$.formatAt(Q,X,W,K[W])}j-=H})}}),this.scroll.optimize(),this.update(new v.default().retain(D).retain(C,(0,P.default)(K)))}},{key:"formatText",value:function(D,C){var N=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(K).forEach(function(W){N.scroll.formatAt(D,C,W,K[W])}),this.update(new v.default().retain(D).retain(C,(0,P.default)(K)))}},{key:"getContents",value:function(D,C){return this.delta.slice(D,D+C)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(D,C){return D.concat(C.delta())},new v.default)}},{key:"getFormat",value:function(D){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,N=[],K=[];C===0?this.scroll.path(D).forEach(function(L){var j=h(L,1),$=j[0];$ instanceof b.default?N.push($):$ instanceof i.default.Leaf&&K.push($)}):(N=this.scroll.lines(D,C),K=this.scroll.descendants(i.default.Leaf,D,C));var W=[N,K].map(function(L){if(L.length===0)return{};for(var j=(0,l.bubbleFormats)(L.shift());Object.keys(j).length>0;){var $=L.shift();if($==null)return j;j=q((0,l.bubbleFormats)($),j)}return j});return E.default.apply(E.default,W)}},{key:"getText",value:function(D,C){return this.getContents(D,C).filter(function(N){return typeof N.insert=="string"}).map(function(N){return N.insert}).join("")}},{key:"insertEmbed",value:function(D,C,N){return this.scroll.insertAt(D,C,N),this.update(new v.default().retain(D).insert(k({},C,N)))}},{key:"insertText",value:function(D,C){var N=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C=C.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(D,C),Object.keys(K).forEach(function(W){N.scroll.formatAt(D,C.length,W,K[W])}),this.update(new v.default().retain(D).insert(C,(0,P.default)(K)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var D=this.scroll.children.head;return D.statics.blotName!==b.default.blotName||D.children.length>1?!1:D.children.head instanceof x.default}},{key:"removeFormat",value:function(D,C){var N=this.getText(D,C),K=this.scroll.line(D+C),W=h(K,2),L=W[0],j=W[1],$=0,H=new v.default;L!=null&&(L instanceof _.default?$=L.newlineIndex(j)-j+1:$=L.length()-j,H=L.delta().slice(j,j+$-1).insert(`
`));var Q=this.getContents(D,C+$),X=Q.diff(new v.default().insert(N).concat(H)),J=new v.default().retain(D).concat(X);return this.applyDelta(J)}},{key:"update",value:function(D){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,K=this.delta;if(C.length===1&&C[0].type==="characterData"&&C[0].target.data.match(S)&&i.default.find(C[0].target)){var W=i.default.find(C[0].target),L=(0,l.bubbleFormats)(W),j=W.offset(this.scroll),$=C[0].oldValue.replace(u.default.CONTENTS,""),H=new v.default().insert($),Q=new v.default().insert(W.value()),X=new v.default().retain(j).concat(H.diff(Q,N));D=X.reduce(function(J,ee){return ee.insert?J.insert(ee.insert,L):J.push(ee)},new v.default),this.delta=K.compose(D)}else this.delta=this.getDelta(),(!D||!(0,T.default)(K.compose(D),this.delta))&&(D=K.diff(this.delta,N));return D}}]),U}();function q(U,R){return Object.keys(R).reduce(function(D,C){return U[C]==null||(R[C]===U[C]?D[C]=R[C]:Array.isArray(R[C])?R[C].indexOf(U[C])<0&&(D[C]=R[C].concat([U[C]])):D[C]=[R[C],U[C]]),D},{})}function F(U){return U.reduce(function(R,D){if(D.insert===1){var C=(0,P.default)(D.attributes);return delete C.image,R.insert({image:D.attributes.image},C)}if(D.attributes!=null&&(D.attributes.list===!0||D.attributes.bullet===!0)&&(D=(0,P.default)(D),D.attributes.list?D.attributes.list="ordered":(D.attributes.list="bullet",delete D.attributes.bullet)),typeof D.insert=="string"){var N=D.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return R.insert(N,D.attributes)}return R.push(D)},new v.default)}e.default=B},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var y=function(){function A(T,w){var E=[],O=!0,k=!1,I=void 0;try{for(var S=T[Symbol.iterator](),B;!(O=(B=S.next()).done)&&(E.push(B.value),!(w&&E.length===w));O=!0);}catch(q){k=!0,I=q}finally{try{!O&&S.return&&S.return()}finally{if(k)throw I}}return E}return function(T,w){if(Array.isArray(T))return T;if(Symbol.iterator in Object(T))return A(T,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function A(T,w){for(var E=0;E<w.length;E++){var O=w[E];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(T,O.key,O)}}return function(T,w,E){return w&&A(T.prototype,w),E&&A(T,E),T}}(),g=n(0),m=u(g),v=n(21),c=u(v),a=n(11),o=u(a),i=n(8),p=u(i),_=n(10),f=u(_);function u(A){return A&&A.__esModule?A:{default:A}}function l(A){if(Array.isArray(A)){for(var T=0,w=Array(A.length);T<A.length;T++)w[T]=A[T];return w}else return Array.from(A)}function b(A,T){if(!(A instanceof T))throw new TypeError("Cannot call a class as a function")}var s=(0,f.default)("quill:selection"),x=function A(T){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;b(this,A),this.index=T,this.length=w},M=function(){function A(T,w){var E=this;b(this,A),this.emitter=w,this.scroll=T,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=m.default.create("cursor",this),this.lastRange=this.savedRange=new x(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){E.mouseDown||setTimeout(E.update.bind(E,p.default.sources.USER),1)}),this.emitter.on(p.default.events.EDITOR_CHANGE,function(O,k){O===p.default.events.TEXT_CHANGE&&k.length()>0&&E.update(p.default.sources.SILENT)}),this.emitter.on(p.default.events.SCROLL_BEFORE_UPDATE,function(){if(!!E.hasFocus()){var O=E.getNativeRange();O!=null&&O.start.node!==E.cursor.textNode&&E.emitter.once(p.default.events.SCROLL_UPDATE,function(){try{E.setNativeRange(O.start.node,O.start.offset,O.end.node,O.end.offset)}catch{}})}}),this.emitter.on(p.default.events.SCROLL_OPTIMIZE,function(O,k){if(k.range){var I=k.range,S=I.startNode,B=I.startOffset,q=I.endNode,F=I.endOffset;E.setNativeRange(S,B,q,F)}}),this.update(p.default.sources.SILENT)}return h(A,[{key:"handleComposition",value:function(){var w=this;this.root.addEventListener("compositionstart",function(){w.composing=!0}),this.root.addEventListener("compositionend",function(){if(w.composing=!1,w.cursor.parent){var E=w.cursor.restore();if(!E)return;setTimeout(function(){w.setNativeRange(E.startNode,E.startOffset,E.endNode,E.endOffset)},1)}})}},{key:"handleDragging",value:function(){var w=this;this.emitter.listenDOM("mousedown",document.body,function(){w.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){w.mouseDown=!1,w.update(p.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(w,E){if(!(this.scroll.whitelist!=null&&!this.scroll.whitelist[w])){this.scroll.update();var O=this.getNativeRange();if(!(O==null||!O.native.collapsed||m.default.query(w,m.default.Scope.BLOCK))){if(O.start.node!==this.cursor.textNode){var k=m.default.find(O.start.node,!1);if(k==null)return;if(k instanceof m.default.Leaf){var I=k.split(O.start.offset);k.parent.insertBefore(this.cursor,I)}else k.insertBefore(this.cursor,O.start.node);this.cursor.attach()}this.cursor.format(w,E),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(w){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,O=this.scroll.length();w=Math.min(w,O-1),E=Math.min(w+E,O-1)-w;var k=void 0,I=this.scroll.leaf(w),S=y(I,2),B=S[0],q=S[1];if(B==null)return null;var F=B.position(q,!0),U=y(F,2);k=U[0],q=U[1];var R=document.createRange();if(E>0){R.setStart(k,q);var D=this.scroll.leaf(w+E),C=y(D,2);if(B=C[0],q=C[1],B==null)return null;var N=B.position(q,!0),K=y(N,2);return k=K[0],q=K[1],R.setEnd(k,q),R.getBoundingClientRect()}else{var W="left",L=void 0;return k instanceof Text?(q<k.data.length?(R.setStart(k,q),R.setEnd(k,q+1)):(R.setStart(k,q-1),R.setEnd(k,q),W="right"),L=R.getBoundingClientRect()):(L=B.domNode.getBoundingClientRect(),q>0&&(W="right")),{bottom:L.top+L.height,height:L.height,left:L[W],right:L[W],top:L.top,width:0}}}},{key:"getNativeRange",value:function(){var w=document.getSelection();if(w==null||w.rangeCount<=0)return null;var E=w.getRangeAt(0);if(E==null)return null;var O=this.normalizeNative(E);return s.info("getNativeRange",O),O}},{key:"getRange",value:function(){var w=this.getNativeRange();if(w==null)return[null,null];var E=this.normalizedToRange(w);return[E,w]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(w){var E=this,O=[[w.start.node,w.start.offset]];w.native.collapsed||O.push([w.end.node,w.end.offset]);var k=O.map(function(B){var q=y(B,2),F=q[0],U=q[1],R=m.default.find(F,!0),D=R.offset(E.scroll);return U===0?D:R instanceof m.default.Container?D+R.length():D+R.index(F,U)}),I=Math.min(Math.max.apply(Math,l(k)),this.scroll.length()-1),S=Math.min.apply(Math,[I].concat(l(k)));return new x(S,I-S)}},{key:"normalizeNative",value:function(w){if(!P(this.root,w.startContainer)||!w.collapsed&&!P(this.root,w.endContainer))return null;var E={start:{node:w.startContainer,offset:w.startOffset},end:{node:w.endContainer,offset:w.endOffset},native:w};return[E.start,E.end].forEach(function(O){for(var k=O.node,I=O.offset;!(k instanceof Text)&&k.childNodes.length>0;)if(k.childNodes.length>I)k=k.childNodes[I],I=0;else if(k.childNodes.length===I)k=k.lastChild,I=k instanceof Text?k.data.length:k.childNodes.length+1;else break;O.node=k,O.offset=I}),E}},{key:"rangeToNative",value:function(w){var E=this,O=w.collapsed?[w.index]:[w.index,w.index+w.length],k=[],I=this.scroll.length();return O.forEach(function(S,B){S=Math.min(I-1,S);var q=void 0,F=E.scroll.leaf(S),U=y(F,2),R=U[0],D=U[1],C=R.position(D,B!==0),N=y(C,2);q=N[0],D=N[1],k.push(q,D)}),k.length<2&&(k=k.concat(k)),k}},{key:"scrollIntoView",value:function(w){var E=this.lastRange;if(E!=null){var O=this.getBounds(E.index,E.length);if(O!=null){var k=this.scroll.length()-1,I=this.scroll.line(Math.min(E.index,k)),S=y(I,1),B=S[0],q=B;if(E.length>0){var F=this.scroll.line(Math.min(E.index+E.length,k)),U=y(F,1);q=U[0]}if(!(B==null||q==null)){var R=w.getBoundingClientRect();O.top<R.top?w.scrollTop-=R.top-O.top:O.bottom>R.bottom&&(w.scrollTop+=O.bottom-R.bottom)}}}}},{key:"setNativeRange",value:function(w,E){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:w,k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:E,I=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(s.info("setNativeRange",w,E,O,k),!(w!=null&&(this.root.parentNode==null||w.parentNode==null||O.parentNode==null))){var S=document.getSelection();if(S!=null)if(w!=null){this.hasFocus()||this.root.focus();var B=(this.getNativeRange()||{}).native;if(B==null||I||w!==B.startContainer||E!==B.startOffset||O!==B.endContainer||k!==B.endOffset){w.tagName=="BR"&&(E=[].indexOf.call(w.parentNode.childNodes,w),w=w.parentNode),O.tagName=="BR"&&(k=[].indexOf.call(O.parentNode.childNodes,O),O=O.parentNode);var q=document.createRange();q.setStart(w,E),q.setEnd(O,k),S.removeAllRanges(),S.addRange(q)}}else S.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(w){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:p.default.sources.API;if(typeof E=="string"&&(O=E,E=!1),s.info("setRange",w),w!=null){var k=this.rangeToNative(w);this.setNativeRange.apply(this,l(k).concat([E]))}else this.setNativeRange(null);this.update(O)}},{key:"update",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p.default.sources.USER,E=this.lastRange,O=this.getRange(),k=y(O,2),I=k[0],S=k[1];if(this.lastRange=I,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,o.default)(E,this.lastRange)){var B;!this.composing&&S!=null&&S.native.collapsed&&S.start.node!==this.cursor.textNode&&this.cursor.restore();var q=[p.default.events.SELECTION_CHANGE,(0,c.default)(this.lastRange),(0,c.default)(E),w];if((B=this.emitter).emit.apply(B,[p.default.events.EDITOR_CHANGE].concat(q)),w!==p.default.sources.SILENT){var F;(F=this.emitter).emit.apply(F,q)}}}}]),A}();function P(A,T){try{T.parentNode}catch{return!1}return T instanceof Text&&(T=T.parentNode),A.contains(T)}e.Range=x,e.default=M},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function p(_,f){for(var u=0;u<f.length;u++){var l=f[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(_,l.key,l)}}return function(_,f,u){return f&&p(_.prototype,f),u&&p(_,u),_}}(),h=function p(_,f,u){_===null&&(_=Function.prototype);var l=Object.getOwnPropertyDescriptor(_,f);if(l===void 0){var b=Object.getPrototypeOf(_);return b===null?void 0:p(b,f,u)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(u)}},g=n(0),m=v(g);function v(p){return p&&p.__esModule?p:{default:p}}function c(p,_){if(!(p instanceof _))throw new TypeError("Cannot call a class as a function")}function a(p,_){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:p}function o(p,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);p.prototype=Object.create(_&&_.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(p,_):p.__proto__=_)}var i=function(p){o(_,p);function _(){return c(this,_),a(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return y(_,[{key:"insertInto",value:function(u,l){u.children.length===0?h(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"insertInto",this).call(this,u,l):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),_}(m.default.Embed);i.blotName="break",i.tagName="BR",e.default=i},function(t,e,n){var y=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var p in i)i.hasOwnProperty(p)&&(o[p]=i[p])};return function(o,i){a(o,i);function p(){this.constructor=o}o.prototype=i===null?Object.create(i):(p.prototype=i.prototype,new p)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(44),g=n(30),m=n(1),v=function(a){y(o,a);function o(i){var p=a.call(this,i)||this;return p.build(),p}return o.prototype.appendChild=function(i){this.insertBefore(i)},o.prototype.attach=function(){a.prototype.attach.call(this),this.children.forEach(function(i){i.attach()})},o.prototype.build=function(){var i=this;this.children=new h.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(p){try{var _=c(p);i.insertBefore(_,i.children.head||void 0)}catch(f){if(f instanceof m.ParchmentError)return;throw f}})},o.prototype.deleteAt=function(i,p){if(i===0&&p===this.length())return this.remove();this.children.forEachAt(i,p,function(_,f,u){_.deleteAt(f,u)})},o.prototype.descendant=function(i,p){var _=this.children.find(p),f=_[0],u=_[1];return i.blotName==null&&i(f)||i.blotName!=null&&f instanceof i?[f,u]:f instanceof o?f.descendant(i,u):[null,-1]},o.prototype.descendants=function(i,p,_){p===void 0&&(p=0),_===void 0&&(_=Number.MAX_VALUE);var f=[],u=_;return this.children.forEachAt(p,_,function(l,b,s){(i.blotName==null&&i(l)||i.blotName!=null&&l instanceof i)&&f.push(l),l instanceof o&&(f=f.concat(l.descendants(i,b,u))),u-=s}),f},o.prototype.detach=function(){this.children.forEach(function(i){i.detach()}),a.prototype.detach.call(this)},o.prototype.formatAt=function(i,p,_,f){this.children.forEachAt(i,p,function(u,l,b){u.formatAt(l,b,_,f)})},o.prototype.insertAt=function(i,p,_){var f=this.children.find(i),u=f[0],l=f[1];if(u)u.insertAt(l,p,_);else{var b=_==null?m.create("text",p):m.create(p,_);this.appendChild(b)}},o.prototype.insertBefore=function(i,p){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(_){return i instanceof _}))throw new m.ParchmentError("Cannot insert "+i.statics.blotName+" into "+this.statics.blotName);i.insertInto(this,p)},o.prototype.length=function(){return this.children.reduce(function(i,p){return i+p.length()},0)},o.prototype.moveChildren=function(i,p){this.children.forEach(function(_){i.insertBefore(_,p)})},o.prototype.optimize=function(i){if(a.prototype.optimize.call(this,i),this.children.length===0)if(this.statics.defaultChild!=null){var p=m.create(this.statics.defaultChild);this.appendChild(p),p.optimize(i)}else this.remove()},o.prototype.path=function(i,p){p===void 0&&(p=!1);var _=this.children.find(i,p),f=_[0],u=_[1],l=[[this,i]];return f instanceof o?l.concat(f.path(u,p)):(f!=null&&l.push([f,u]),l)},o.prototype.removeChild=function(i){this.children.remove(i)},o.prototype.replace=function(i){i instanceof o&&i.moveChildren(this),a.prototype.replace.call(this,i)},o.prototype.split=function(i,p){if(p===void 0&&(p=!1),!p){if(i===0)return this;if(i===this.length())return this.next}var _=this.clone();return this.parent.insertBefore(_,this.next),this.children.forEachAt(i,this.length(),function(f,u,l){f=f.split(u,p),_.appendChild(f)}),_},o.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},o.prototype.update=function(i,p){var _=this,f=[],u=[];i.forEach(function(l){l.target===_.domNode&&l.type==="childList"&&(f.push.apply(f,l.addedNodes),u.push.apply(u,l.removedNodes))}),u.forEach(function(l){if(!(l.parentNode!=null&&l.tagName!=="IFRAME"&&document.body.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var b=m.find(l);b!=null&&(b.domNode.parentNode==null||b.domNode.parentNode===_.domNode)&&b.detach()}}),f.filter(function(l){return l.parentNode==_.domNode}).sort(function(l,b){return l===b?0:l.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(l){var b=null;l.nextSibling!=null&&(b=m.find(l.nextSibling));var s=c(l);(s.next!=b||s.next==null)&&(s.parent!=null&&s.parent.removeChild(_),_.insertBefore(s,b||void 0))})},o}(g.default);function c(a){var o=m.find(a);if(o==null)try{o=m.create(a)}catch{o=m.create(m.Scope.INLINE),[].slice.call(a.childNodes).forEach(function(p){o.domNode.appendChild(p)}),a.parentNode&&a.parentNode.replaceChild(o.domNode,a),o.attach()}return o}e.default=v},function(t,e,n){var y=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var p in i)i.hasOwnProperty(p)&&(o[p]=i[p])};return function(o,i){a(o,i);function p(){this.constructor=o}o.prototype=i===null?Object.create(i):(p.prototype=i.prototype,new p)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(12),g=n(31),m=n(17),v=n(1),c=function(a){y(o,a);function o(i){var p=a.call(this,i)||this;return p.attributes=new g.default(p.domNode),p}return o.formats=function(i){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return i.tagName.toLowerCase()},o.prototype.format=function(i,p){var _=v.query(i);_ instanceof h.default?this.attributes.attribute(_,p):p&&_!=null&&(i!==this.statics.blotName||this.formats()[i]!==p)&&this.replaceWith(i,p)},o.prototype.formats=function(){var i=this.attributes.values(),p=this.statics.formats(this.domNode);return p!=null&&(i[this.statics.blotName]=p),i},o.prototype.replaceWith=function(i,p){var _=a.prototype.replaceWith.call(this,i,p);return this.attributes.copy(_),_},o.prototype.update=function(i,p){var _=this;a.prototype.update.call(this,i,p),i.some(function(f){return f.target===_.domNode&&f.type==="attributes"})&&this.attributes.build()},o.prototype.wrap=function(i,p){var _=a.prototype.wrap.call(this,i,p);return _ instanceof o&&_.statics.scope===this.statics.scope&&this.attributes.move(_),_},o}(m.default);e.default=c},function(t,e,n){var y=this&&this.__extends||function(){var v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var o in a)a.hasOwnProperty(o)&&(c[o]=a[o])};return function(c,a){v(c,a);function o(){this.constructor=c}c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(30),g=n(1),m=function(v){y(c,v);function c(){return v!==null&&v.apply(this,arguments)||this}return c.value=function(a){return!0},c.prototype.index=function(a,o){return this.domNode===a||this.domNode.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(o,1):-1},c.prototype.position=function(a,o){var i=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return a>0&&(i+=1),[this.parent.domNode,i]},c.prototype.value=function(){var a;return a={},a[this.statics.blotName]=this.statics.value(this.domNode)||!0,a},c.scope=g.Scope.INLINE_BLOT,c}(h.default);e.default=m},function(t,e,n){var y=n(11),h=n(3),g={attributes:{compose:function(v,c,a){typeof v!="object"&&(v={}),typeof c!="object"&&(c={});var o=h(!0,{},c);a||(o=Object.keys(o).reduce(function(p,_){return o[_]!=null&&(p[_]=o[_]),p},{}));for(var i in v)v[i]!==void 0&&c[i]===void 0&&(o[i]=v[i]);return Object.keys(o).length>0?o:void 0},diff:function(v,c){typeof v!="object"&&(v={}),typeof c!="object"&&(c={});var a=Object.keys(v).concat(Object.keys(c)).reduce(function(o,i){return y(v[i],c[i])||(o[i]=c[i]===void 0?null:c[i]),o},{});return Object.keys(a).length>0?a:void 0},transform:function(v,c,a){if(typeof v!="object")return c;if(typeof c=="object"){if(!a)return c;var o=Object.keys(c).reduce(function(i,p){return v[p]===void 0&&(i[p]=c[p]),i},{});return Object.keys(o).length>0?o:void 0}}},iterator:function(v){return new m(v)},length:function(v){return typeof v.delete=="number"?v.delete:typeof v.retain=="number"?v.retain:typeof v.insert=="string"?v.insert.length:1}};function m(v){this.ops=v,this.index=0,this.offset=0}m.prototype.hasNext=function(){return this.peekLength()<1/0},m.prototype.next=function(v){v||(v=1/0);var c=this.ops[this.index];if(c){var a=this.offset,o=g.length(c);if(v>=o-a?(v=o-a,this.index+=1,this.offset=0):this.offset+=v,typeof c.delete=="number")return{delete:v};var i={};return c.attributes&&(i.attributes=c.attributes),typeof c.retain=="number"?i.retain=v:typeof c.insert=="string"?i.insert=c.insert.substr(a,v):i.insert=c.insert,i}else return{retain:1/0}},m.prototype.peek=function(){return this.ops[this.index]},m.prototype.peekLength=function(){return this.ops[this.index]?g.length(this.ops[this.index])-this.offset:1/0},m.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},m.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var v=this.offset,c=this.index,a=this.next(),o=this.ops.slice(this.index);return this.offset=v,this.index=c,[a].concat(o)}else return[]},t.exports=g},function(t,e){var n=function(){function y(_,f){return f!=null&&_ instanceof f}var h;try{h=Map}catch{h=function(){}}var g;try{g=Set}catch{g=function(){}}var m;try{m=Promise}catch{m=function(){}}function v(_,f,u,l,b){typeof f=="object"&&(u=f.depth,l=f.prototype,b=f.includeNonEnumerable,f=f.circular);var s=[],x=[],M=typeof Buffer!="undefined";typeof f=="undefined"&&(f=!0),typeof u=="undefined"&&(u=1/0);function P(A,T){if(A===null)return null;if(T===0)return A;var w,E;if(typeof A!="object")return A;if(y(A,h))w=new h;else if(y(A,g))w=new g;else if(y(A,m))w=new m(function(R,D){A.then(function(C){R(P(C,T-1))},function(C){D(P(C,T-1))})});else if(v.__isArray(A))w=[];else if(v.__isRegExp(A))w=new RegExp(A.source,p(A)),A.lastIndex&&(w.lastIndex=A.lastIndex);else if(v.__isDate(A))w=new Date(A.getTime());else{if(M&&Buffer.isBuffer(A))return Buffer.allocUnsafe?w=Buffer.allocUnsafe(A.length):w=new Buffer(A.length),A.copy(w),w;y(A,Error)?w=Object.create(A):typeof l=="undefined"?(E=Object.getPrototypeOf(A),w=Object.create(E)):(w=Object.create(l),E=l)}if(f){var O=s.indexOf(A);if(O!=-1)return x[O];s.push(A),x.push(w)}y(A,h)&&A.forEach(function(R,D){var C=P(D,T-1),N=P(R,T-1);w.set(C,N)}),y(A,g)&&A.forEach(function(R){var D=P(R,T-1);w.add(D)});for(var k in A){var I;E&&(I=Object.getOwnPropertyDescriptor(E,k)),!(I&&I.set==null)&&(w[k]=P(A[k],T-1))}if(Object.getOwnPropertySymbols)for(var S=Object.getOwnPropertySymbols(A),k=0;k<S.length;k++){var B=S[k],q=Object.getOwnPropertyDescriptor(A,B);q&&!q.enumerable&&!b||(w[B]=P(A[B],T-1),q.enumerable||Object.defineProperty(w,B,{enumerable:!1}))}if(b)for(var F=Object.getOwnPropertyNames(A),k=0;k<F.length;k++){var U=F[k],q=Object.getOwnPropertyDescriptor(A,U);q&&q.enumerable||(w[U]=P(A[U],T-1),Object.defineProperty(w,U,{enumerable:!1}))}return w}return P(_,u)}v.clonePrototype=function(f){if(f===null)return null;var u=function(){};return u.prototype=f,new u};function c(_){return Object.prototype.toString.call(_)}v.__objToStr=c;function a(_){return typeof _=="object"&&c(_)==="[object Date]"}v.__isDate=a;function o(_){return typeof _=="object"&&c(_)==="[object Array]"}v.__isArray=o;function i(_){return typeof _=="object"&&c(_)==="[object RegExp]"}v.__isRegExp=i;function p(_){var f="";return _.global&&(f+="g"),_.ignoreCase&&(f+="i"),_.multiline&&(f+="m"),f}return v.__getRegExpFlags=p,v}();typeof t=="object"&&t.exports&&(t.exports=n)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function w(E,O){var k=[],I=!0,S=!1,B=void 0;try{for(var q=E[Symbol.iterator](),F;!(I=(F=q.next()).done)&&(k.push(F.value),!(O&&k.length===O));I=!0);}catch(U){S=!0,B=U}finally{try{!I&&q.return&&q.return()}finally{if(S)throw B}}return k}return function(E,O){if(Array.isArray(E))return E;if(Symbol.iterator in Object(E))return w(E,O);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function w(E,O){for(var k=0;k<O.length;k++){var I=O[k];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(E,I.key,I)}}return function(E,O,k){return O&&w(E.prototype,O),k&&w(E,k),E}}(),g=function w(E,O,k){E===null&&(E=Function.prototype);var I=Object.getOwnPropertyDescriptor(E,O);if(I===void 0){var S=Object.getPrototypeOf(E);return S===null?void 0:w(S,O,k)}else{if("value"in I)return I.value;var B=I.get;return B===void 0?void 0:B.call(k)}},m=n(0),v=s(m),c=n(8),a=s(c),o=n(4),i=s(o),p=n(16),_=s(p),f=n(13),u=s(f),l=n(25),b=s(l);function s(w){return w&&w.__esModule?w:{default:w}}function x(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")}function M(w,E){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:w}function P(w,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);w.prototype=Object.create(E&&E.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(w,E):w.__proto__=E)}function A(w){return w instanceof i.default||w instanceof o.BlockEmbed}var T=function(w){P(E,w);function E(O,k){x(this,E);var I=M(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,O));return I.emitter=k.emitter,Array.isArray(k.whitelist)&&(I.whitelist=k.whitelist.reduce(function(S,B){return S[B]=!0,S},{})),I.domNode.addEventListener("DOMNodeInserted",function(){}),I.optimize(),I.enable(),I}return h(E,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(k,I){var S=this.line(k),B=y(S,2),q=B[0],F=B[1],U=this.line(k+I),R=y(U,1),D=R[0];if(g(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"deleteAt",this).call(this,k,I),D!=null&&q!==D&&F>0){if(q instanceof o.BlockEmbed||D instanceof o.BlockEmbed){this.optimize();return}if(q instanceof u.default){var C=q.newlineIndex(q.length(),!0);if(C>-1&&(q=q.split(C+1),q===D)){this.optimize();return}}else if(D instanceof u.default){var N=D.newlineIndex(0);N>-1&&D.split(N+1)}var K=D.children.head instanceof _.default?null:D.children.head;q.moveChildren(D,K),q.remove()}this.optimize()}},{key:"enable",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.domNode.setAttribute("contenteditable",k)}},{key:"formatAt",value:function(k,I,S,B){this.whitelist!=null&&!this.whitelist[S]||(g(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"formatAt",this).call(this,k,I,S,B),this.optimize())}},{key:"insertAt",value:function(k,I,S){if(!(S!=null&&this.whitelist!=null&&!this.whitelist[I])){if(k>=this.length())if(S==null||v.default.query(I,v.default.Scope.BLOCK)==null){var B=v.default.create(this.statics.defaultChild);this.appendChild(B),S==null&&I.endsWith(`
`)&&(I=I.slice(0,-1)),B.insertAt(0,I,S)}else{var q=v.default.create(I,S);this.appendChild(q)}else g(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"insertAt",this).call(this,k,I,S);this.optimize()}}},{key:"insertBefore",value:function(k,I){if(k.statics.scope===v.default.Scope.INLINE_BLOT){var S=v.default.create(this.statics.defaultChild);S.appendChild(k),k=S}g(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"insertBefore",this).call(this,k,I)}},{key:"leaf",value:function(k){return this.path(k).pop()||[null,-1]}},{key:"line",value:function(k){return k===this.length()?this.line(k-1):this.descendant(A,k)}},{key:"lines",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,S=function B(q,F,U){var R=[],D=U;return q.children.forEachAt(F,U,function(C,N,K){A(C)?R.push(C):C instanceof v.default.Container&&(R=R.concat(B(C,N,D))),D-=K}),R};return S(this,k,I)}},{key:"optimize",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(g(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"optimize",this).call(this,k,I),k.length>0&&this.emitter.emit(a.default.events.SCROLL_OPTIMIZE,k,I))}},{key:"path",value:function(k){return g(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"path",this).call(this,k).slice(1)}},{key:"update",value:function(k){if(this.batch!==!0){var I=a.default.sources.USER;typeof k=="string"&&(I=k),Array.isArray(k)||(k=this.observer.takeRecords()),k.length>0&&this.emitter.emit(a.default.events.SCROLL_BEFORE_UPDATE,I,k),g(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"update",this).call(this,k.concat([])),k.length>0&&this.emitter.emit(a.default.events.SCROLL_UPDATE,I,k)}}}]),E}(v.default.Scroll);T.blotName="scroll",T.className="ql-editor",T.tagName="DIV",T.defaultChild="block",T.allowedChildren=[i.default,o.BlockEmbed,b.default],e.default=T},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},h=function(){function L(j,$){var H=[],Q=!0,X=!1,J=void 0;try{for(var ee=j[Symbol.iterator](),oe;!(Q=(oe=ee.next()).done)&&(H.push(oe.value),!($&&H.length===$));Q=!0);}catch(ie){X=!0,J=ie}finally{try{!Q&&ee.return&&ee.return()}finally{if(X)throw J}}return H}return function(j,$){if(Array.isArray(j))return j;if(Symbol.iterator in Object(j))return L(j,$);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function L(j,$){for(var H=0;H<$.length;H++){var Q=$[H];Q.enumerable=Q.enumerable||!1,Q.configurable=!0,"value"in Q&&(Q.writable=!0),Object.defineProperty(j,Q.key,Q)}}return function(j,$,H){return $&&L(j.prototype,$),H&&L(j,H),j}}(),m=n(21),v=w(m),c=n(11),a=w(c),o=n(3),i=w(o),p=n(2),_=w(p),f=n(20),u=w(f),l=n(0),b=w(l),s=n(5),x=w(s),M=n(10),P=w(M),A=n(9),T=w(A);function w(L){return L&&L.__esModule?L:{default:L}}function E(L,j,$){return j in L?Object.defineProperty(L,j,{value:$,enumerable:!0,configurable:!0,writable:!0}):L[j]=$,L}function O(L,j){if(!(L instanceof j))throw new TypeError("Cannot call a class as a function")}function k(L,j){if(!L)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j&&(typeof j=="object"||typeof j=="function")?j:L}function I(L,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof j);L.prototype=Object.create(j&&j.prototype,{constructor:{value:L,enumerable:!1,writable:!0,configurable:!0}}),j&&(Object.setPrototypeOf?Object.setPrototypeOf(L,j):L.__proto__=j)}var S=(0,P.default)("quill:keyboard"),B=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",q=function(L){I(j,L),g(j,null,[{key:"match",value:function(H,Q){return Q=W(Q),["altKey","ctrlKey","metaKey","shiftKey"].some(function(X){return!!Q[X]!==H[X]&&Q[X]!==null})?!1:Q.key===(H.which||H.keyCode)}}]);function j($,H){O(this,j);var Q=k(this,(j.__proto__||Object.getPrototypeOf(j)).call(this,$,H));return Q.bindings={},Object.keys(Q.options.bindings).forEach(function(X){X==="list autofill"&&$.scroll.whitelist!=null&&!$.scroll.whitelist.list||Q.options.bindings[X]&&Q.addBinding(Q.options.bindings[X])}),Q.addBinding({key:j.keys.ENTER,shiftKey:null},C),Q.addBinding({key:j.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(Q.addBinding({key:j.keys.BACKSPACE},{collapsed:!0},U),Q.addBinding({key:j.keys.DELETE},{collapsed:!0},R)):(Q.addBinding({key:j.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},U),Q.addBinding({key:j.keys.DELETE},{collapsed:!0,suffix:/^.?$/},R)),Q.addBinding({key:j.keys.BACKSPACE},{collapsed:!1},D),Q.addBinding({key:j.keys.DELETE},{collapsed:!1},D),Q.addBinding({key:j.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},U),Q.listen(),Q}return g(j,[{key:"addBinding",value:function(H){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},X=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},J=W(H);if(J==null||J.key==null)return S.warn("Attempted to add invalid keyboard binding",J);typeof Q=="function"&&(Q={handler:Q}),typeof X=="function"&&(X={handler:X}),J=(0,i.default)(J,Q,X),this.bindings[J.key]=this.bindings[J.key]||[],this.bindings[J.key].push(J)}},{key:"listen",value:function(){var H=this;this.quill.root.addEventListener("keydown",function(Q){if(!Q.defaultPrevented){var X=Q.which||Q.keyCode,J=(H.bindings[X]||[]).filter(function(se){return j.match(Q,se)});if(J.length!==0){var ee=H.quill.getSelection();if(!(ee==null||!H.quill.hasFocus())){var oe=H.quill.getLine(ee.index),ie=h(oe,2),ue=ie[0],le=ie[1],G=H.quill.getLeaf(ee.index),z=h(G,2),Y=z[0],Z=z[1],V=ee.length===0?[Y,Z]:H.quill.getLeaf(ee.index+ee.length),te=h(V,2),ne=te[0],re=te[1],ce=Y instanceof b.default.Text?Y.value().slice(0,Z):"",_e=ne instanceof b.default.Text?ne.value().slice(re):"",ae={collapsed:ee.length===0,empty:ee.length===0&&ue.length()<=1,format:H.quill.getFormat(ee),offset:le,prefix:ce,suffix:_e},ye=J.some(function(se){if(se.collapsed!=null&&se.collapsed!==ae.collapsed||se.empty!=null&&se.empty!==ae.empty||se.offset!=null&&se.offset!==ae.offset)return!1;if(Array.isArray(se.format)){if(se.format.every(function(de){return ae.format[de]==null}))return!1}else if(y(se.format)==="object"&&!Object.keys(se.format).every(function(de){return se.format[de]===!0?ae.format[de]!=null:se.format[de]===!1?ae.format[de]==null:(0,a.default)(se.format[de],ae.format[de])}))return!1;return se.prefix!=null&&!se.prefix.test(ae.prefix)||se.suffix!=null&&!se.suffix.test(ae.suffix)?!1:se.handler.call(H,ee,ae)!==!0});ye&&Q.preventDefault()}}}})}}]),j}(T.default);q.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},q.DEFAULTS={bindings:{bold:K("bold"),italic:K("italic"),underline:K("underline"),indent:{key:q.keys.TAB,format:["blockquote","indent","list"],handler:function(j,$){if($.collapsed&&$.offset!==0)return!0;this.quill.format("indent","+1",x.default.sources.USER)}},outdent:{key:q.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(j,$){if($.collapsed&&$.offset!==0)return!0;this.quill.format("indent","-1",x.default.sources.USER)}},"outdent backspace":{key:q.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(j,$){$.format.indent!=null?this.quill.format("indent","-1",x.default.sources.USER):$.format.list!=null&&this.quill.format("list",!1,x.default.sources.USER)}},"indent code-block":N(!0),"outdent code-block":N(!1),"remove tab":{key:q.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(j){this.quill.deleteText(j.index-1,1,x.default.sources.USER)}},tab:{key:q.keys.TAB,handler:function(j){this.quill.history.cutoff();var $=new _.default().retain(j.index).delete(j.length).insert("	");this.quill.updateContents($,x.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(j.index+1,x.default.sources.SILENT)}},"list empty enter":{key:q.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(j,$){this.quill.format("list",!1,x.default.sources.USER),$.format.indent&&this.quill.format("indent",!1,x.default.sources.USER)}},"checklist enter":{key:q.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(j){var $=this.quill.getLine(j.index),H=h($,2),Q=H[0],X=H[1],J=(0,i.default)({},Q.formats(),{list:"checked"}),ee=new _.default().retain(j.index).insert(`
`,J).retain(Q.length()-X-1).retain(1,{list:"unchecked"});this.quill.updateContents(ee,x.default.sources.USER),this.quill.setSelection(j.index+1,x.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:q.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(j,$){var H=this.quill.getLine(j.index),Q=h(H,2),X=Q[0],J=Q[1],ee=new _.default().retain(j.index).insert(`
`,$.format).retain(X.length()-J-1).retain(1,{header:null});this.quill.updateContents(ee,x.default.sources.USER),this.quill.setSelection(j.index+1,x.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(j,$){var H=$.prefix.length,Q=this.quill.getLine(j.index),X=h(Q,2),J=X[0],ee=X[1];if(ee>H)return!0;var oe=void 0;switch($.prefix.trim()){case"[]":case"[ ]":oe="unchecked";break;case"[x]":oe="checked";break;case"-":case"*":oe="bullet";break;default:oe="ordered"}this.quill.insertText(j.index," ",x.default.sources.USER),this.quill.history.cutoff();var ie=new _.default().retain(j.index-ee).delete(H+1).retain(J.length()-2-ee).retain(1,{list:oe});this.quill.updateContents(ie,x.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(j.index-H,x.default.sources.SILENT)}},"code exit":{key:q.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(j){var $=this.quill.getLine(j.index),H=h($,2),Q=H[0],X=H[1],J=new _.default().retain(j.index+Q.length()-X-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(J,x.default.sources.USER)}},"embed left":F(q.keys.LEFT,!1),"embed left shift":F(q.keys.LEFT,!0),"embed right":F(q.keys.RIGHT,!1),"embed right shift":F(q.keys.RIGHT,!0)}};function F(L,j){var $,H=L===q.keys.LEFT?"prefix":"suffix";return $={key:L,shiftKey:j,altKey:null},E($,H,/^$/),E($,"handler",function(X){var J=X.index;L===q.keys.RIGHT&&(J+=X.length+1);var ee=this.quill.getLeaf(J),oe=h(ee,1),ie=oe[0];return ie instanceof b.default.Embed?(L===q.keys.LEFT?j?this.quill.setSelection(X.index-1,X.length+1,x.default.sources.USER):this.quill.setSelection(X.index-1,x.default.sources.USER):j?this.quill.setSelection(X.index,X.length+1,x.default.sources.USER):this.quill.setSelection(X.index+X.length+1,x.default.sources.USER),!1):!0}),$}function U(L,j){if(!(L.index===0||this.quill.getLength()<=1)){var $=this.quill.getLine(L.index),H=h($,1),Q=H[0],X={};if(j.offset===0){var J=this.quill.getLine(L.index-1),ee=h(J,1),oe=ee[0];if(oe!=null&&oe.length()>1){var ie=Q.formats(),ue=this.quill.getFormat(L.index-1,1);X=u.default.attributes.diff(ie,ue)||{}}}var le=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(j.prefix)?2:1;this.quill.deleteText(L.index-le,le,x.default.sources.USER),Object.keys(X).length>0&&this.quill.formatLine(L.index-le,le,X,x.default.sources.USER),this.quill.focus()}}function R(L,j){var $=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(j.suffix)?2:1;if(!(L.index>=this.quill.getLength()-$)){var H={},Q=0,X=this.quill.getLine(L.index),J=h(X,1),ee=J[0];if(j.offset>=ee.length()-1){var oe=this.quill.getLine(L.index+1),ie=h(oe,1),ue=ie[0];if(ue){var le=ee.formats(),G=this.quill.getFormat(L.index,1);H=u.default.attributes.diff(le,G)||{},Q=ue.length()}}this.quill.deleteText(L.index,$,x.default.sources.USER),Object.keys(H).length>0&&this.quill.formatLine(L.index+Q-1,$,H,x.default.sources.USER)}}function D(L){var j=this.quill.getLines(L),$={};if(j.length>1){var H=j[0].formats(),Q=j[j.length-1].formats();$=u.default.attributes.diff(Q,H)||{}}this.quill.deleteText(L,x.default.sources.USER),Object.keys($).length>0&&this.quill.formatLine(L.index,1,$,x.default.sources.USER),this.quill.setSelection(L.index,x.default.sources.SILENT),this.quill.focus()}function C(L,j){var $=this;L.length>0&&this.quill.scroll.deleteAt(L.index,L.length);var H=Object.keys(j.format).reduce(function(Q,X){return b.default.query(X,b.default.Scope.BLOCK)&&!Array.isArray(j.format[X])&&(Q[X]=j.format[X]),Q},{});this.quill.insertText(L.index,`
`,H,x.default.sources.USER),this.quill.setSelection(L.index+1,x.default.sources.SILENT),this.quill.focus(),Object.keys(j.format).forEach(function(Q){H[Q]==null&&(Array.isArray(j.format[Q])||Q!=="link"&&$.quill.format(Q,j.format[Q],x.default.sources.USER))})}function N(L){return{key:q.keys.TAB,shiftKey:!L,format:{"code-block":!0},handler:function($){var H=b.default.query("code-block"),Q=$.index,X=$.length,J=this.quill.scroll.descendant(H,Q),ee=h(J,2),oe=ee[0],ie=ee[1];if(oe!=null){var ue=this.quill.getIndex(oe),le=oe.newlineIndex(ie,!0)+1,G=oe.newlineIndex(ue+ie+X),z=oe.domNode.textContent.slice(le,G).split(`
`);ie=0,z.forEach(function(Y,Z){L?(oe.insertAt(le+ie,H.TAB),ie+=H.TAB.length,Z===0?Q+=H.TAB.length:X+=H.TAB.length):Y.startsWith(H.TAB)&&(oe.deleteAt(le+ie,H.TAB.length),ie-=H.TAB.length,Z===0?Q-=H.TAB.length:X-=H.TAB.length),ie+=Y.length+1}),this.quill.update(x.default.sources.USER),this.quill.setSelection(Q,X,x.default.sources.SILENT)}}}}function K(L){return{key:L[0].toUpperCase(),shortKey:!0,handler:function($,H){this.quill.format(L,!H.format[L],x.default.sources.USER)}}}function W(L){if(typeof L=="string"||typeof L=="number")return W({key:L});if((typeof L=="undefined"?"undefined":y(L))==="object"&&(L=(0,v.default)(L,!1)),typeof L.key=="string")if(q.keys[L.key.toUpperCase()]!=null)L.key=q.keys[L.key.toUpperCase()];else if(L.key.length===1)L.key=L.key.toUpperCase().charCodeAt(0);else return null;return L.shortKey&&(L[B]=L.shortKey,delete L.shortKey),L}e.default=q,e.SHORTKEY=B},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function u(l,b){var s=[],x=!0,M=!1,P=void 0;try{for(var A=l[Symbol.iterator](),T;!(x=(T=A.next()).done)&&(s.push(T.value),!(b&&s.length===b));x=!0);}catch(w){M=!0,P=w}finally{try{!x&&A.return&&A.return()}finally{if(M)throw P}}return s}return function(l,b){if(Array.isArray(l))return l;if(Symbol.iterator in Object(l))return u(l,b);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function u(l,b,s){l===null&&(l=Function.prototype);var x=Object.getOwnPropertyDescriptor(l,b);if(x===void 0){var M=Object.getPrototypeOf(l);return M===null?void 0:u(M,b,s)}else{if("value"in x)return x.value;var P=x.get;return P===void 0?void 0:P.call(s)}},g=function(){function u(l,b){for(var s=0;s<b.length;s++){var x=b[s];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(l,x.key,x)}}return function(l,b,s){return b&&u(l.prototype,b),s&&u(l,s),l}}(),m=n(0),v=o(m),c=n(7),a=o(c);function o(u){return u&&u.__esModule?u:{default:u}}function i(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}function p(u,l){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:u}function _(u,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);u.prototype=Object.create(l&&l.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(u,l):u.__proto__=l)}var f=function(u){_(l,u),g(l,null,[{key:"value",value:function(){}}]);function l(b,s){i(this,l);var x=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,b));return x.selection=s,x.textNode=document.createTextNode(l.CONTENTS),x.domNode.appendChild(x.textNode),x._length=0,x}return g(l,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(s,x){if(this._length!==0)return h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"format",this).call(this,s,x);for(var M=this,P=0;M!=null&&M.statics.scope!==v.default.Scope.BLOCK_BLOT;)P+=M.offset(M.parent),M=M.parent;M!=null&&(this._length=l.CONTENTS.length,M.optimize(),M.formatAt(P,l.CONTENTS.length,s,x),this._length=0)}},{key:"index",value:function(s,x){return s===this.textNode?0:h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"index",this).call(this,s,x)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!(this.selection.composing||this.parent==null)){var s=this.textNode,x=this.selection.getNativeRange(),M=void 0,P=void 0,A=void 0;if(x!=null&&x.start.node===s&&x.end.node===s){var T=[s,x.start.offset,x.end.offset];M=T[0],P=T[1],A=T[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==l.CONTENTS){var w=this.textNode.data.split(l.CONTENTS).join("");this.next instanceof a.default?(M=this.next.domNode,this.next.insertAt(0,w),this.textNode.data=l.CONTENTS):(this.textNode.data=w,this.parent.insertBefore(v.default.create(this.textNode),this),this.textNode=document.createTextNode(l.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),P!=null){var E=[P,A].map(function(k){return Math.max(0,Math.min(M.data.length,k-1))}),O=y(E,2);return P=O[0],A=O[1],{startNode:M,startOffset:P,endNode:M,endOffset:A}}}}},{key:"update",value:function(s,x){var M=this;if(s.some(function(A){return A.type==="characterData"&&A.target===M.textNode})){var P=this.restore();P&&(x.range=P)}}},{key:"value",value:function(){return""}}]),l}(v.default.Embed);f.blotName="cursor",f.className="ql-cursor",f.tagName="span",f.CONTENTS="\uFEFF",e.default=f},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(0),h=v(y),g=n(4),m=v(g);function v(p){return p&&p.__esModule?p:{default:p}}function c(p,_){if(!(p instanceof _))throw new TypeError("Cannot call a class as a function")}function a(p,_){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:p}function o(p,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);p.prototype=Object.create(_&&_.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(p,_):p.__proto__=_)}var i=function(p){o(_,p);function _(){return c(this,_),a(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return _}(h.default.Container);i.allowedChildren=[m.default,g.BlockEmbed,i],e.default=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var y=function(){function f(u,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,l,b){return l&&f(u.prototype,l),b&&f(u,b),u}}(),h=function f(u,l,b){u===null&&(u=Function.prototype);var s=Object.getOwnPropertyDescriptor(u,l);if(s===void 0){var x=Object.getPrototypeOf(u);return x===null?void 0:f(x,l,b)}else{if("value"in s)return s.value;var M=s.get;return M===void 0?void 0:M.call(b)}},g=n(0),m=v(g);function v(f){return f&&f.__esModule?f:{default:f}}function c(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function a(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function o(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var i=function(f){o(u,f);function u(){return c(this,u),a(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return y(u,[{key:"value",value:function(b){var s=h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"value",this).call(this,b);return s.startsWith("rgb(")?(s=s.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+s.split(",").map(function(x){return("00"+parseInt(x).toString(16)).slice(-2)}).join("")):s}}]),u}(m.default.Attributor.Style),p=new m.default.Attributor.Class("color","ql-color",{scope:m.default.Scope.INLINE}),_=new i("color","color",{scope:m.default.Scope.INLINE});e.ColorAttributor=i,e.ColorClass=p,e.ColorStyle=_},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var y=function(){function _(f,u){for(var l=0;l<u.length;l++){var b=u[l];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(f,b.key,b)}}return function(f,u,l){return u&&_(f.prototype,u),l&&_(f,l),f}}(),h=function _(f,u,l){f===null&&(f=Function.prototype);var b=Object.getOwnPropertyDescriptor(f,u);if(b===void 0){var s=Object.getPrototypeOf(f);return s===null?void 0:_(s,u,l)}else{if("value"in b)return b.value;var x=b.get;return x===void 0?void 0:x.call(l)}},g=n(6),m=v(g);function v(_){return _&&_.__esModule?_:{default:_}}function c(_,f){if(!(_ instanceof f))throw new TypeError("Cannot call a class as a function")}function a(_,f){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:_}function o(_,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);_.prototype=Object.create(f&&f.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(_,f):_.__proto__=f)}var i=function(_){o(f,_);function f(){return c(this,f),a(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return y(f,[{key:"format",value:function(l,b){if(l!==this.statics.blotName||!b)return h(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,l,b);b=this.constructor.sanitize(b),this.domNode.setAttribute("href",b)}}],[{key:"create",value:function(l){var b=h(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,l);return l=this.sanitize(l),b.setAttribute("href",l),b.setAttribute("rel","noopener noreferrer"),b.setAttribute("target","_blank"),b}},{key:"formats",value:function(l){return l.getAttribute("href")}},{key:"sanitize",value:function(l){return p(l,this.PROTOCOL_WHITELIST)?l:this.SANITIZED_URL}}]),f}(m.default);i.blotName="link",i.tagName="A",i.SANITIZED_URL="about:blank",i.PROTOCOL_WHITELIST=["http","https","mailto","tel"];function p(_,f){var u=document.createElement("a");u.href=_;var l=u.href.slice(0,u.href.indexOf(":"));return f.indexOf(l)>-1}e.default=i,e.sanitize=p},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},h=function(){function f(u,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,l,b){return l&&f(u.prototype,l),b&&f(u,b),u}}(),g=n(23),m=a(g),v=n(107),c=a(v);function a(f){return f&&f.__esModule?f:{default:f}}function o(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}var i=0;function p(f,u){f.setAttribute(u,f.getAttribute(u)!=="true")}var _=function(){function f(u){var l=this;o(this,f),this.select=u,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){l.togglePicker()}),this.label.addEventListener("keydown",function(b){switch(b.keyCode){case m.default.keys.ENTER:l.togglePicker();break;case m.default.keys.ESCAPE:l.escape(),b.preventDefault();break}}),this.select.addEventListener("change",this.update.bind(this))}return h(f,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),p(this.label,"aria-expanded"),p(this.options,"aria-hidden")}},{key:"buildItem",value:function(l){var b=this,s=document.createElement("span");return s.tabIndex="0",s.setAttribute("role","button"),s.classList.add("ql-picker-item"),l.hasAttribute("value")&&s.setAttribute("data-value",l.getAttribute("value")),l.textContent&&s.setAttribute("data-label",l.textContent),s.addEventListener("click",function(){b.selectItem(s,!0)}),s.addEventListener("keydown",function(x){switch(x.keyCode){case m.default.keys.ENTER:b.selectItem(s,!0),x.preventDefault();break;case m.default.keys.ESCAPE:b.escape(),x.preventDefault();break}}),s}},{key:"buildLabel",value:function(){var l=document.createElement("span");return l.classList.add("ql-picker-label"),l.innerHTML=c.default,l.tabIndex="0",l.setAttribute("role","button"),l.setAttribute("aria-expanded","false"),this.container.appendChild(l),l}},{key:"buildOptions",value:function(){var l=this,b=document.createElement("span");b.classList.add("ql-picker-options"),b.setAttribute("aria-hidden","true"),b.tabIndex="-1",b.id="ql-picker-options-"+i,i+=1,this.label.setAttribute("aria-controls",b.id),this.options=b,[].slice.call(this.select.options).forEach(function(s){var x=l.buildItem(s);b.appendChild(x),s.selected===!0&&l.selectItem(x)}),this.container.appendChild(b)}},{key:"buildPicker",value:function(){var l=this;[].slice.call(this.select.attributes).forEach(function(b){l.container.setAttribute(b.name,b.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var l=this;this.close(),setTimeout(function(){return l.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(l){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=this.container.querySelector(".ql-selected");if(l!==s&&(s!=null&&s.classList.remove("ql-selected"),l!=null&&(l.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(l.parentNode.children,l),l.hasAttribute("data-value")?this.label.setAttribute("data-value",l.getAttribute("data-value")):this.label.removeAttribute("data-value"),l.hasAttribute("data-label")?this.label.setAttribute("data-label",l.getAttribute("data-label")):this.label.removeAttribute("data-label"),b))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event=="undefined"?"undefined":y(Event))==="object"){var x=document.createEvent("Event");x.initEvent("change",!0,!0),this.select.dispatchEvent(x)}this.close()}}},{key:"update",value:function(){var l=void 0;if(this.select.selectedIndex>-1){var b=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];l=this.select.options[this.select.selectedIndex],this.selectItem(b)}else this.selectItem(null);var s=l!=null&&l!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",s)}}]),f}();e.default=_},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(0),h=S(y),g=n(5),m=S(g),v=n(4),c=S(v),a=n(16),o=S(a),i=n(25),p=S(i),_=n(24),f=S(_),u=n(35),l=S(u),b=n(6),s=S(b),x=n(22),M=S(x),P=n(7),A=S(P),T=n(55),w=S(T),E=n(42),O=S(E),k=n(23),I=S(k);function S(B){return B&&B.__esModule?B:{default:B}}m.default.register({"blots/block":c.default,"blots/block/embed":v.BlockEmbed,"blots/break":o.default,"blots/container":p.default,"blots/cursor":f.default,"blots/embed":l.default,"blots/inline":s.default,"blots/scroll":M.default,"blots/text":A.default,"modules/clipboard":w.default,"modules/history":O.default,"modules/keyboard":I.default}),h.default.register(c.default,o.default,f.default,s.default,M.default,A.default),e.default=m.default},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(1),h=function(){function g(m){this.domNode=m,this.domNode[y.DATA_KEY]={blot:this}}return Object.defineProperty(g.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),g.create=function(m){if(this.tagName==null)throw new y.ParchmentError("Blot definition missing tagName");var v;return Array.isArray(this.tagName)?(typeof m=="string"&&(m=m.toUpperCase(),parseInt(m).toString()===m&&(m=parseInt(m))),typeof m=="number"?v=document.createElement(this.tagName[m-1]):this.tagName.indexOf(m)>-1?v=document.createElement(m):v=document.createElement(this.tagName[0])):v=document.createElement(this.tagName),this.className&&v.classList.add(this.className),v},g.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},g.prototype.clone=function(){var m=this.domNode.cloneNode(!1);return y.create(m)},g.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[y.DATA_KEY]},g.prototype.deleteAt=function(m,v){var c=this.isolate(m,v);c.remove()},g.prototype.formatAt=function(m,v,c,a){var o=this.isolate(m,v);if(y.query(c,y.Scope.BLOT)!=null&&a)o.wrap(c,a);else if(y.query(c,y.Scope.ATTRIBUTE)!=null){var i=y.create(this.statics.scope);o.wrap(i),i.format(c,a)}},g.prototype.insertAt=function(m,v,c){var a=c==null?y.create("text",v):y.create(v,c),o=this.split(m);this.parent.insertBefore(a,o)},g.prototype.insertInto=function(m,v){v===void 0&&(v=null),this.parent!=null&&this.parent.children.remove(this);var c=null;m.children.insertBefore(this,v),v!=null&&(c=v.domNode),(this.domNode.parentNode!=m.domNode||this.domNode.nextSibling!=c)&&m.domNode.insertBefore(this.domNode,c),this.parent=m,this.attach()},g.prototype.isolate=function(m,v){var c=this.split(m);return c.split(v),c},g.prototype.length=function(){return 1},g.prototype.offset=function(m){return m===void 0&&(m=this.parent),this.parent==null||this==m?0:this.parent.children.offset(this)+this.parent.offset(m)},g.prototype.optimize=function(m){this.domNode[y.DATA_KEY]!=null&&delete this.domNode[y.DATA_KEY].mutations},g.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},g.prototype.replace=function(m){m.parent!=null&&(m.parent.insertBefore(this,m.next),m.remove())},g.prototype.replaceWith=function(m,v){var c=typeof m=="string"?y.create(m,v):m;return c.replace(this),c},g.prototype.split=function(m,v){return m===0?this:this.next},g.prototype.update=function(m,v){},g.prototype.wrap=function(m,v){var c=typeof m=="string"?y.create(m,v):m;return this.parent!=null&&this.parent.insertBefore(c,this.next),c.appendChild(this),c},g.blotName="abstract",g}();e.default=h},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(12),h=n(32),g=n(33),m=n(1),v=function(){function c(a){this.attributes={},this.domNode=a,this.build()}return c.prototype.attribute=function(a,o){o?a.add(this.domNode,o)&&(a.value(this.domNode)!=null?this.attributes[a.attrName]=a:delete this.attributes[a.attrName]):(a.remove(this.domNode),delete this.attributes[a.attrName])},c.prototype.build=function(){var a=this;this.attributes={};var o=y.default.keys(this.domNode),i=h.default.keys(this.domNode),p=g.default.keys(this.domNode);o.concat(i).concat(p).forEach(function(_){var f=m.query(_,m.Scope.ATTRIBUTE);f instanceof y.default&&(a.attributes[f.attrName]=f)})},c.prototype.copy=function(a){var o=this;Object.keys(this.attributes).forEach(function(i){var p=o.attributes[i].value(o.domNode);a.format(i,p)})},c.prototype.move=function(a){var o=this;this.copy(a),Object.keys(this.attributes).forEach(function(i){o.attributes[i].remove(o.domNode)}),this.attributes={}},c.prototype.values=function(){var a=this;return Object.keys(this.attributes).reduce(function(o,i){return o[i]=a.attributes[i].value(a.domNode),o},{})},c}();e.default=v},function(t,e,n){var y=this&&this.__extends||function(){var v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var o in a)a.hasOwnProperty(o)&&(c[o]=a[o])};return function(c,a){v(c,a);function o(){this.constructor=c}c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(12);function g(v,c){var a=v.getAttribute("class")||"";return a.split(/\s+/).filter(function(o){return o.indexOf(c+"-")===0})}var m=function(v){y(c,v);function c(){return v!==null&&v.apply(this,arguments)||this}return c.keys=function(a){return(a.getAttribute("class")||"").split(/\s+/).map(function(o){return o.split("-").slice(0,-1).join("-")})},c.prototype.add=function(a,o){return this.canAdd(a,o)?(this.remove(a),a.classList.add(this.keyName+"-"+o),!0):!1},c.prototype.remove=function(a){var o=g(a,this.keyName);o.forEach(function(i){a.classList.remove(i)}),a.classList.length===0&&a.removeAttribute("class")},c.prototype.value=function(a){var o=g(a,this.keyName)[0]||"",i=o.slice(this.keyName.length+1);return this.canAdd(a,i)?i:""},c}(h.default);e.default=m},function(t,e,n){var y=this&&this.__extends||function(){var v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var o in a)a.hasOwnProperty(o)&&(c[o]=a[o])};return function(c,a){v(c,a);function o(){this.constructor=c}c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(12);function g(v){var c=v.split("-"),a=c.slice(1).map(function(o){return o[0].toUpperCase()+o.slice(1)}).join("");return c[0]+a}var m=function(v){y(c,v);function c(){return v!==null&&v.apply(this,arguments)||this}return c.keys=function(a){return(a.getAttribute("style")||"").split(";").map(function(o){var i=o.split(":");return i[0].trim()})},c.prototype.add=function(a,o){return this.canAdd(a,o)?(a.style[g(this.keyName)]=o,!0):!1},c.prototype.remove=function(a){a.style[g(this.keyName)]="",a.getAttribute("style")||a.removeAttribute("style")},c.prototype.value=function(a){var o=a.style[g(this.keyName)];return this.canAdd(a,o)?o:""},c}(h.default);e.default=m},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function m(v,c){for(var a=0;a<c.length;a++){var o=c[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(v,o.key,o)}}return function(v,c,a){return c&&m(v.prototype,c),a&&m(v,a),v}}();function h(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")}var g=function(){function m(v,c){h(this,m),this.quill=v,this.options=c,this.modules={}}return y(m,[{key:"init",value:function(){var c=this;Object.keys(this.options.modules).forEach(function(a){c.modules[a]==null&&c.addModule(a)})}},{key:"addModule",value:function(c){var a=this.quill.constructor.import("modules/"+c);return this.modules[c]=new a(this.quill,this.options.modules[c]||{}),this.modules[c]}}]),m}();g.DEFAULTS={modules:{}},g.themes={default:g},e.default=g},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function u(l,b){for(var s=0;s<b.length;s++){var x=b[s];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(l,x.key,x)}}return function(l,b,s){return b&&u(l.prototype,b),s&&u(l,s),l}}(),h=function u(l,b,s){l===null&&(l=Function.prototype);var x=Object.getOwnPropertyDescriptor(l,b);if(x===void 0){var M=Object.getPrototypeOf(l);return M===null?void 0:u(M,b,s)}else{if("value"in x)return x.value;var P=x.get;return P===void 0?void 0:P.call(s)}},g=n(0),m=a(g),v=n(7),c=a(v);function a(u){return u&&u.__esModule?u:{default:u}}function o(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}function i(u,l){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:u}function p(u,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);u.prototype=Object.create(l&&l.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(u,l):u.__proto__=l)}var _="\uFEFF",f=function(u){p(l,u);function l(b){o(this,l);var s=i(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,b));return s.contentNode=document.createElement("span"),s.contentNode.setAttribute("contenteditable",!1),[].slice.call(s.domNode.childNodes).forEach(function(x){s.contentNode.appendChild(x)}),s.leftGuard=document.createTextNode(_),s.rightGuard=document.createTextNode(_),s.domNode.appendChild(s.leftGuard),s.domNode.appendChild(s.contentNode),s.domNode.appendChild(s.rightGuard),s}return y(l,[{key:"index",value:function(s,x){return s===this.leftGuard?0:s===this.rightGuard?1:h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"index",this).call(this,s,x)}},{key:"restore",value:function(s){var x=void 0,M=void 0,P=s.data.split(_).join("");if(s===this.leftGuard)if(this.prev instanceof c.default){var A=this.prev.length();this.prev.insertAt(A,P),x={startNode:this.prev.domNode,startOffset:A+P.length}}else M=document.createTextNode(P),this.parent.insertBefore(m.default.create(M),this),x={startNode:M,startOffset:P.length};else s===this.rightGuard&&(this.next instanceof c.default?(this.next.insertAt(0,P),x={startNode:this.next.domNode,startOffset:P.length}):(M=document.createTextNode(P),this.parent.insertBefore(m.default.create(M),this.next),x={startNode:M,startOffset:P.length}));return s.data=_,x}},{key:"update",value:function(s,x){var M=this;s.forEach(function(P){if(P.type==="characterData"&&(P.target===M.leftGuard||P.target===M.rightGuard)){var A=M.restore(P.target);A&&(x.range=A)}})}}]),l}(m.default.Embed);e.default=f},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var y=n(0),h=g(y);function g(o){return o&&o.__esModule?o:{default:o}}var m={scope:h.default.Scope.BLOCK,whitelist:["right","center","justify"]},v=new h.default.Attributor.Attribute("align","align",m),c=new h.default.Attributor.Class("align","ql-align",m),a=new h.default.Attributor.Style("align","text-align",m);e.AlignAttribute=v,e.AlignClass=c,e.AlignStyle=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var y=n(0),h=m(y),g=n(26);function m(a){return a&&a.__esModule?a:{default:a}}var v=new h.default.Attributor.Class("background","ql-bg",{scope:h.default.Scope.INLINE}),c=new g.ColorAttributor("background","background-color",{scope:h.default.Scope.INLINE});e.BackgroundClass=v,e.BackgroundStyle=c},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var y=n(0),h=g(y);function g(o){return o&&o.__esModule?o:{default:o}}var m={scope:h.default.Scope.BLOCK,whitelist:["rtl"]},v=new h.default.Attributor.Attribute("direction","dir",m),c=new h.default.Attributor.Class("direction","ql-direction",m),a=new h.default.Attributor.Style("direction","direction",m);e.DirectionAttribute=v,e.DirectionClass=c,e.DirectionStyle=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var y=function(){function u(l,b){for(var s=0;s<b.length;s++){var x=b[s];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(l,x.key,x)}}return function(l,b,s){return b&&u(l.prototype,b),s&&u(l,s),l}}(),h=function u(l,b,s){l===null&&(l=Function.prototype);var x=Object.getOwnPropertyDescriptor(l,b);if(x===void 0){var M=Object.getPrototypeOf(l);return M===null?void 0:u(M,b,s)}else{if("value"in x)return x.value;var P=x.get;return P===void 0?void 0:P.call(s)}},g=n(0),m=v(g);function v(u){return u&&u.__esModule?u:{default:u}}function c(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}function a(u,l){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:u}function o(u,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);u.prototype=Object.create(l&&l.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(u,l):u.__proto__=l)}var i={scope:m.default.Scope.INLINE,whitelist:["serif","monospace"]},p=new m.default.Attributor.Class("font","ql-font",i),_=function(u){o(l,u);function l(){return c(this,l),a(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return y(l,[{key:"value",value:function(s){return h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"value",this).call(this,s).replace(/["']/g,"")}}]),l}(m.default.Attributor.Style),f=new _("font","font-family",i);e.FontStyle=f,e.FontClass=p},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var y=n(0),h=g(y);function g(c){return c&&c.__esModule?c:{default:c}}var m=new h.default.Attributor.Class("size","ql-size",{scope:h.default.Scope.INLINE,whitelist:["small","large","huge"]}),v=new h.default.Attributor.Style("size","font-size",{scope:h.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=m,e.SizeStyle=v},function(t,e,n){t.exports={align:{"":n(76),center:n(77),right:n(78),justify:n(79)},background:n(80),blockquote:n(81),bold:n(82),clean:n(83),code:n(58),"code-block":n(58),color:n(84),direction:{"":n(85),rtl:n(86)},float:{center:n(87),full:n(88),left:n(89),right:n(90)},formula:n(91),header:{1:n(92),2:n(93)},italic:n(94),image:n(95),indent:{"+1":n(96),"-1":n(97)},link:n(98),list:{ordered:n(99),bullet:n(100),check:n(101)},script:{sub:n(102),super:n(103)},strike:n(104),underline:n(105),video:n(106)}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var y=function(){function b(s,x){for(var M=0;M<x.length;M++){var P=x[M];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(s,P.key,P)}}return function(s,x,M){return x&&b(s.prototype,x),M&&b(s,M),s}}(),h=n(0),g=o(h),m=n(5),v=o(m),c=n(9),a=o(c);function o(b){return b&&b.__esModule?b:{default:b}}function i(b,s){if(!(b instanceof s))throw new TypeError("Cannot call a class as a function")}function p(b,s){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s&&(typeof s=="object"||typeof s=="function")?s:b}function _(b,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);b.prototype=Object.create(s&&s.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(b,s):b.__proto__=s)}var f=function(b){_(s,b);function s(x,M){i(this,s);var P=p(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,x,M));return P.lastRecorded=0,P.ignoreChange=!1,P.clear(),P.quill.on(v.default.events.EDITOR_CHANGE,function(A,T,w,E){A!==v.default.events.TEXT_CHANGE||P.ignoreChange||(!P.options.userOnly||E===v.default.sources.USER?P.record(T,w):P.transform(T))}),P.quill.keyboard.addBinding({key:"Z",shortKey:!0},P.undo.bind(P)),P.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},P.redo.bind(P)),/Win/i.test(navigator.platform)&&P.quill.keyboard.addBinding({key:"Y",shortKey:!0},P.redo.bind(P)),P}return y(s,[{key:"change",value:function(M,P){if(this.stack[M].length!==0){var A=this.stack[M].pop();this.stack[P].push(A),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(A[M],v.default.sources.USER),this.ignoreChange=!1;var T=l(A[M]);this.quill.setSelection(T)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(M,P){if(M.ops.length!==0){this.stack.redo=[];var A=this.quill.getContents().diff(P),T=Date.now();if(this.lastRecorded+this.options.delay>T&&this.stack.undo.length>0){var w=this.stack.undo.pop();A=A.compose(w.undo),M=w.redo.compose(M)}else this.lastRecorded=T;this.stack.undo.push({redo:M,undo:A}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(M){this.stack.undo.forEach(function(P){P.undo=M.transform(P.undo,!0),P.redo=M.transform(P.redo,!0)}),this.stack.redo.forEach(function(P){P.undo=M.transform(P.undo,!0),P.redo=M.transform(P.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),s}(a.default);f.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};function u(b){var s=b.ops[b.ops.length-1];return s==null?!1:s.insert!=null?typeof s.insert=="string"&&s.insert.endsWith(`
`):s.attributes!=null?Object.keys(s.attributes).some(function(x){return g.default.query(x,g.default.Scope.BLOCK)!=null}):!1}function l(b){var s=b.reduce(function(M,P){return M+=P.delete||0,M},0),x=b.length()-s;return u(b)&&(x-=1),x}e.default=f,e.getLastChangeIndex=l},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var y=function(){function C(N,K){for(var W=0;W<K.length;W++){var L=K[W];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(N,L.key,L)}}return function(N,K,W){return K&&C(N.prototype,K),W&&C(N,W),N}}(),h=function C(N,K,W){N===null&&(N=Function.prototype);var L=Object.getOwnPropertyDescriptor(N,K);if(L===void 0){var j=Object.getPrototypeOf(N);return j===null?void 0:C(j,K,W)}else{if("value"in L)return L.value;var $=L.get;return $===void 0?void 0:$.call(W)}},g=n(3),m=T(g),v=n(2),c=T(v),a=n(8),o=T(a),i=n(23),p=T(i),_=n(34),f=T(_),u=n(59),l=T(u),b=n(60),s=T(b),x=n(28),M=T(x),P=n(61),A=T(P);function T(C){return C&&C.__esModule?C:{default:C}}function w(C,N){if(!(C instanceof N))throw new TypeError("Cannot call a class as a function")}function E(C,N){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N&&(typeof N=="object"||typeof N=="function")?N:C}function O(C,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);C.prototype=Object.create(N&&N.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(C,N):C.__proto__=N)}var k=[!1,"center","right","justify"],I=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],S=[!1,"serif","monospace"],B=["1","2","3",!1],q=["small",!1,"large","huge"],F=function(C){O(N,C);function N(K,W){w(this,N);var L=E(this,(N.__proto__||Object.getPrototypeOf(N)).call(this,K,W)),j=function $(H){if(!document.body.contains(K.root))return document.body.removeEventListener("click",$);L.tooltip!=null&&!L.tooltip.root.contains(H.target)&&document.activeElement!==L.tooltip.textbox&&!L.quill.hasFocus()&&L.tooltip.hide(),L.pickers!=null&&L.pickers.forEach(function(Q){Q.container.contains(H.target)||Q.close()})};return K.emitter.listenDOM("click",document.body,j),L}return y(N,[{key:"addModule",value:function(W){var L=h(N.prototype.__proto__||Object.getPrototypeOf(N.prototype),"addModule",this).call(this,W);return W==="toolbar"&&this.extendToolbar(L),L}},{key:"buildButtons",value:function(W,L){W.forEach(function(j){var $=j.getAttribute("class")||"";$.split(/\s+/).forEach(function(H){if(!!H.startsWith("ql-")&&(H=H.slice(3),L[H]!=null))if(H==="direction")j.innerHTML=L[H][""]+L[H].rtl;else if(typeof L[H]=="string")j.innerHTML=L[H];else{var Q=j.value||"";Q!=null&&L[H][Q]&&(j.innerHTML=L[H][Q])}})})}},{key:"buildPickers",value:function(W,L){var j=this;this.pickers=W.map(function(H){if(H.classList.contains("ql-align"))return H.querySelector("option")==null&&D(H,k),new s.default(H,L.align);if(H.classList.contains("ql-background")||H.classList.contains("ql-color")){var Q=H.classList.contains("ql-background")?"background":"color";return H.querySelector("option")==null&&D(H,I,Q==="background"?"#ffffff":"#000000"),new l.default(H,L[Q])}else return H.querySelector("option")==null&&(H.classList.contains("ql-font")?D(H,S):H.classList.contains("ql-header")?D(H,B):H.classList.contains("ql-size")&&D(H,q)),new M.default(H)});var $=function(){j.pickers.forEach(function(Q){Q.update()})};this.quill.on(o.default.events.EDITOR_CHANGE,$)}}]),N}(f.default);F.DEFAULTS=(0,m.default)(!0,{},f.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var N=this,K=this.container.querySelector("input.ql-image[type=file]");K==null&&(K=document.createElement("input"),K.setAttribute("type","file"),K.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),K.classList.add("ql-image"),K.addEventListener("change",function(){if(K.files!=null&&K.files[0]!=null){var W=new FileReader;W.onload=function(L){var j=N.quill.getSelection(!0);N.quill.updateContents(new c.default().retain(j.index).delete(j.length).insert({image:L.target.result}),o.default.sources.USER),N.quill.setSelection(j.index+1,o.default.sources.SILENT),K.value=""},W.readAsDataURL(K.files[0])}}),this.container.appendChild(K)),K.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var U=function(C){O(N,C);function N(K,W){w(this,N);var L=E(this,(N.__proto__||Object.getPrototypeOf(N)).call(this,K,W));return L.textbox=L.root.querySelector('input[type="text"]'),L.listen(),L}return y(N,[{key:"listen",value:function(){var W=this;this.textbox.addEventListener("keydown",function(L){p.default.match(L,"enter")?(W.save(),L.preventDefault()):p.default.match(L,"escape")&&(W.cancel(),L.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),L!=null?this.textbox.value=L:W!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+W)||""),this.root.setAttribute("data-mode",W)}},{key:"restoreFocus",value:function(){var W=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=W}},{key:"save",value:function(){var W=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":{var L=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",W,o.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",W,o.default.sources.USER)),this.quill.root.scrollTop=L;break}case"video":W=R(W);case"formula":{if(!W)break;var j=this.quill.getSelection(!0);if(j!=null){var $=j.index+j.length;this.quill.insertEmbed($,this.root.getAttribute("data-mode"),W,o.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText($+1," ",o.default.sources.USER),this.quill.setSelection($+2,o.default.sources.USER)}break}}this.textbox.value="",this.hide()}}]),N}(A.default);function R(C){var N=C.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||C.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return N?(N[1]||"https")+"://www.youtube.com/embed/"+N[2]+"?showinfo=0":(N=C.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(N[1]||"https")+"://player.vimeo.com/video/"+N[2]+"/":C}function D(C,N){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;N.forEach(function(W){var L=document.createElement("option");W===K?L.setAttribute("selected","selected"):L.setAttribute("value",W),C.appendChild(L)})}e.BaseTooltip=U,e.default=F},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function h(){this.head=this.tail=null,this.length=0}return h.prototype.append=function(){for(var g=[],m=0;m<arguments.length;m++)g[m]=arguments[m];this.insertBefore(g[0],null),g.length>1&&this.append.apply(this,g.slice(1))},h.prototype.contains=function(g){for(var m,v=this.iterator();m=v();)if(m===g)return!0;return!1},h.prototype.insertBefore=function(g,m){!g||(g.next=m,m!=null?(g.prev=m.prev,m.prev!=null&&(m.prev.next=g),m.prev=g,m===this.head&&(this.head=g)):this.tail!=null?(this.tail.next=g,g.prev=this.tail,this.tail=g):(g.prev=null,this.head=this.tail=g),this.length+=1)},h.prototype.offset=function(g){for(var m=0,v=this.head;v!=null;){if(v===g)return m;m+=v.length(),v=v.next}return-1},h.prototype.remove=function(g){!this.contains(g)||(g.prev!=null&&(g.prev.next=g.next),g.next!=null&&(g.next.prev=g.prev),g===this.head&&(this.head=g.next),g===this.tail&&(this.tail=g.prev),this.length-=1)},h.prototype.iterator=function(g){return g===void 0&&(g=this.head),function(){var m=g;return g!=null&&(g=g.next),m}},h.prototype.find=function(g,m){m===void 0&&(m=!1);for(var v,c=this.iterator();v=c();){var a=v.length();if(g<a||m&&g===a&&(v.next==null||v.next.length()!==0))return[v,g];g-=a}return[null,0]},h.prototype.forEach=function(g){for(var m,v=this.iterator();m=v();)g(m)},h.prototype.forEachAt=function(g,m,v){if(!(m<=0))for(var c=this.find(g),a=c[0],o=c[1],i,p=g-o,_=this.iterator(a);(i=_())&&p<g+m;){var f=i.length();g>p?v(i,g-p,Math.min(m,p+f-g)):v(i,0,Math.min(f,g+m-p)),p+=f}},h.prototype.map=function(g){return this.reduce(function(m,v){return m.push(g(v)),m},[])},h.prototype.reduce=function(g,m){for(var v,c=this.iterator();v=c();)m=g(m,v);return m},h}();e.default=y},function(t,e,n){var y=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var p in i)i.hasOwnProperty(p)&&(o[p]=i[p])};return function(o,i){a(o,i);function p(){this.constructor=o}o.prototype=i===null?Object.create(i):(p.prototype=i.prototype,new p)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(17),g=n(1),m={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},v=100,c=function(a){y(o,a);function o(i){var p=a.call(this,i)||this;return p.scroll=p,p.observer=new MutationObserver(function(_){p.update(_)}),p.observer.observe(p.domNode,m),p.attach(),p}return o.prototype.detach=function(){a.prototype.detach.call(this),this.observer.disconnect()},o.prototype.deleteAt=function(i,p){this.update(),i===0&&p===this.length()?this.children.forEach(function(_){_.remove()}):a.prototype.deleteAt.call(this,i,p)},o.prototype.formatAt=function(i,p,_,f){this.update(),a.prototype.formatAt.call(this,i,p,_,f)},o.prototype.insertAt=function(i,p,_){this.update(),a.prototype.insertAt.call(this,i,p,_)},o.prototype.optimize=function(i,p){var _=this;i===void 0&&(i=[]),p===void 0&&(p={}),a.prototype.optimize.call(this,p);for(var f=[].slice.call(this.observer.takeRecords());f.length>0;)i.push(f.pop());for(var u=function(x,M){M===void 0&&(M=!0),!(x==null||x===_)&&x.domNode.parentNode!=null&&(x.domNode[g.DATA_KEY].mutations==null&&(x.domNode[g.DATA_KEY].mutations=[]),M&&u(x.parent))},l=function(x){x.domNode[g.DATA_KEY]==null||x.domNode[g.DATA_KEY].mutations==null||(x instanceof h.default&&x.children.forEach(l),x.optimize(p))},b=i,s=0;b.length>0;s+=1){if(s>=v)throw new Error("[Parchment] Maximum optimize iterations reached");for(b.forEach(function(x){var M=g.find(x.target,!0);M!=null&&(M.domNode===x.target&&(x.type==="childList"?(u(g.find(x.previousSibling,!1)),[].forEach.call(x.addedNodes,function(P){var A=g.find(P,!1);u(A,!1),A instanceof h.default&&A.children.forEach(function(T){u(T,!1)})})):x.type==="attributes"&&u(M.prev)),u(M))}),this.children.forEach(l),b=[].slice.call(this.observer.takeRecords()),f=b.slice();f.length>0;)i.push(f.pop())}},o.prototype.update=function(i,p){var _=this;p===void 0&&(p={}),i=i||this.observer.takeRecords(),i.map(function(f){var u=g.find(f.target,!0);return u==null?null:u.domNode[g.DATA_KEY].mutations==null?(u.domNode[g.DATA_KEY].mutations=[f],u):(u.domNode[g.DATA_KEY].mutations.push(f),null)}).forEach(function(f){f==null||f===_||f.domNode[g.DATA_KEY]==null||f.update(f.domNode[g.DATA_KEY].mutations||[],p)}),this.domNode[g.DATA_KEY].mutations!=null&&a.prototype.update.call(this,this.domNode[g.DATA_KEY].mutations,p),this.optimize(i,p)},o.blotName="scroll",o.defaultChild="block",o.scope=g.Scope.BLOCK_BLOT,o.tagName="DIV",o}(h.default);e.default=c},function(t,e,n){var y=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,o){a.__proto__=o}||function(a,o){for(var i in o)o.hasOwnProperty(i)&&(a[i]=o[i])};return function(a,o){c(a,o);function i(){this.constructor=a}a.prototype=o===null?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(18),g=n(1);function m(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(var o in c)if(c[o]!==a[o])return!1;return!0}var v=function(c){y(a,c);function a(){return c!==null&&c.apply(this,arguments)||this}return a.formats=function(o){if(o.tagName!==a.tagName)return c.formats.call(this,o)},a.prototype.format=function(o,i){var p=this;o===this.statics.blotName&&!i?(this.children.forEach(function(_){_ instanceof h.default||(_=_.wrap(a.blotName,!0)),p.attributes.copy(_)}),this.unwrap()):c.prototype.format.call(this,o,i)},a.prototype.formatAt=function(o,i,p,_){if(this.formats()[p]!=null||g.query(p,g.Scope.ATTRIBUTE)){var f=this.isolate(o,i);f.format(p,_)}else c.prototype.formatAt.call(this,o,i,p,_)},a.prototype.optimize=function(o){c.prototype.optimize.call(this,o);var i=this.formats();if(Object.keys(i).length===0)return this.unwrap();var p=this.next;p instanceof a&&p.prev===this&&m(i,p.formats())&&(p.moveChildren(this),p.remove())},a.blotName="inline",a.scope=g.Scope.INLINE_BLOT,a.tagName="SPAN",a}(h.default);e.default=v},function(t,e,n){var y=this&&this.__extends||function(){var v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var o in a)a.hasOwnProperty(o)&&(c[o]=a[o])};return function(c,a){v(c,a);function o(){this.constructor=c}c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(18),g=n(1),m=function(v){y(c,v);function c(){return v!==null&&v.apply(this,arguments)||this}return c.formats=function(a){var o=g.query(c.blotName).tagName;if(a.tagName!==o)return v.formats.call(this,a)},c.prototype.format=function(a,o){g.query(a,g.Scope.BLOCK)!=null&&(a===this.statics.blotName&&!o?this.replaceWith(c.blotName):v.prototype.format.call(this,a,o))},c.prototype.formatAt=function(a,o,i,p){g.query(i,g.Scope.BLOCK)!=null?this.format(i,p):v.prototype.formatAt.call(this,a,o,i,p)},c.prototype.insertAt=function(a,o,i){if(i==null||g.query(o,g.Scope.INLINE)!=null)v.prototype.insertAt.call(this,a,o,i);else{var p=this.split(a),_=g.create(o,i);p.parent.insertBefore(_,p)}},c.prototype.update=function(a,o){navigator.userAgent.match(/Trident/)?this.build():v.prototype.update.call(this,a,o)},c.blotName="block",c.scope=g.Scope.BLOCK_BLOT,c.tagName="P",c}(h.default);e.default=m},function(t,e,n){var y=this&&this.__extends||function(){var m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,c){v.__proto__=c}||function(v,c){for(var a in c)c.hasOwnProperty(a)&&(v[a]=c[a])};return function(v,c){m(v,c);function a(){this.constructor=v}v.prototype=c===null?Object.create(c):(a.prototype=c.prototype,new a)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(19),g=function(m){y(v,m);function v(){return m!==null&&m.apply(this,arguments)||this}return v.formats=function(c){},v.prototype.format=function(c,a){m.prototype.formatAt.call(this,0,this.length(),c,a)},v.prototype.formatAt=function(c,a,o,i){c===0&&a===this.length()?this.format(o,i):m.prototype.formatAt.call(this,c,a,o,i)},v.prototype.formats=function(){return this.statics.formats(this.domNode)},v}(h.default);e.default=g},function(t,e,n){var y=this&&this.__extends||function(){var v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var o in a)a.hasOwnProperty(o)&&(c[o]=a[o])};return function(c,a){v(c,a);function o(){this.constructor=c}c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var h=n(19),g=n(1),m=function(v){y(c,v);function c(a){var o=v.call(this,a)||this;return o.text=o.statics.value(o.domNode),o}return c.create=function(a){return document.createTextNode(a)},c.value=function(a){var o=a.data;return o.normalize&&(o=o.normalize()),o},c.prototype.deleteAt=function(a,o){this.domNode.data=this.text=this.text.slice(0,a)+this.text.slice(a+o)},c.prototype.index=function(a,o){return this.domNode===a?o:-1},c.prototype.insertAt=function(a,o,i){i==null?(this.text=this.text.slice(0,a)+o+this.text.slice(a),this.domNode.data=this.text):v.prototype.insertAt.call(this,a,o,i)},c.prototype.length=function(){return this.text.length},c.prototype.optimize=function(a){v.prototype.optimize.call(this,a),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof c&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},c.prototype.position=function(a,o){return[this.domNode,a]},c.prototype.split=function(a,o){if(o===void 0&&(o=!1),!o){if(a===0)return this;if(a===this.length())return this.next}var i=g.create(this.domNode.splitText(a));return this.parent.insertBefore(i,this.next),this.text=this.statics.value(this.domNode),i},c.prototype.update=function(a,o){var i=this;a.some(function(p){return p.type==="characterData"&&p.target===i.domNode})&&(this.text=this.statics.value(this.domNode))},c.prototype.value=function(){return this.text},c.blotName="text",c.scope=g.Scope.INLINE_BLOT,c}(h.default);e.default=m},function(t,e,n){var y=document.createElement("div");if(y.classList.toggle("test-class",!1),y.classList.contains("test-class")){var h=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(g,m){return arguments.length>1&&!this.contains(g)==!m?m:h.call(this,g)}}String.prototype.startsWith||(String.prototype.startsWith=function(g,m){return m=m||0,this.substr(m,g.length)===g}),String.prototype.endsWith||(String.prototype.endsWith=function(g,m){var v=this.toString();(typeof m!="number"||!isFinite(m)||Math.floor(m)!==m||m>v.length)&&(m=v.length),m-=g.length;var c=v.indexOf(g,m);return c!==-1&&c===m}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(m){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof m!="function")throw new TypeError("predicate must be a function");for(var v=Object(this),c=v.length>>>0,a=arguments[1],o,i=0;i<c;i++)if(o=v[i],m.call(a,o,i,v))return o}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(t,e){var n=-1,y=1,h=0;function g(s,x,M){if(s==x)return s?[[h,s]]:[];(M<0||s.length<M)&&(M=null);var P=a(s,x),A=s.substring(0,P);s=s.substring(P),x=x.substring(P),P=o(s,x);var T=s.substring(s.length-P);s=s.substring(0,s.length-P),x=x.substring(0,x.length-P);var w=m(s,x);return A&&w.unshift([h,A]),T&&w.push([h,T]),p(w),M!=null&&(w=u(w,M)),w=l(w),w}function m(s,x){var M;if(!s)return[[y,x]];if(!x)return[[n,s]];var P=s.length>x.length?s:x,A=s.length>x.length?x:s,T=P.indexOf(A);if(T!=-1)return M=[[y,P.substring(0,T)],[h,A],[y,P.substring(T+A.length)]],s.length>x.length&&(M[0][0]=M[2][0]=n),M;if(A.length==1)return[[n,s],[y,x]];var w=i(s,x);if(w){var E=w[0],O=w[1],k=w[2],I=w[3],S=w[4],B=g(E,k),q=g(O,I);return B.concat([[h,S]],q)}return v(s,x)}function v(s,x){for(var M=s.length,P=x.length,A=Math.ceil((M+P)/2),T=A,w=2*A,E=new Array(w),O=new Array(w),k=0;k<w;k++)E[k]=-1,O[k]=-1;E[T+1]=0,O[T+1]=0;for(var I=M-P,S=I%2!=0,B=0,q=0,F=0,U=0,R=0;R<A;R++){for(var D=-R+B;D<=R-q;D+=2){var C=T+D,N;D==-R||D!=R&&E[C-1]<E[C+1]?N=E[C+1]:N=E[C-1]+1;for(var K=N-D;N<M&&K<P&&s.charAt(N)==x.charAt(K);)N++,K++;if(E[C]=N,N>M)q+=2;else if(K>P)B+=2;else if(S){var W=T+I-D;if(W>=0&&W<w&&O[W]!=-1){var L=M-O[W];if(N>=L)return c(s,x,N,K)}}}for(var j=-R+F;j<=R-U;j+=2){var W=T+j,L;j==-R||j!=R&&O[W-1]<O[W+1]?L=O[W+1]:L=O[W-1]+1;for(var $=L-j;L<M&&$<P&&s.charAt(M-L-1)==x.charAt(P-$-1);)L++,$++;if(O[W]=L,L>M)U+=2;else if($>P)F+=2;else if(!S){var C=T+I-j;if(C>=0&&C<w&&E[C]!=-1){var N=E[C],K=T+N-C;if(L=M-L,N>=L)return c(s,x,N,K)}}}}return[[n,s],[y,x]]}function c(s,x,M,P){var A=s.substring(0,M),T=x.substring(0,P),w=s.substring(M),E=x.substring(P),O=g(A,T),k=g(w,E);return O.concat(k)}function a(s,x){if(!s||!x||s.charAt(0)!=x.charAt(0))return 0;for(var M=0,P=Math.min(s.length,x.length),A=P,T=0;M<A;)s.substring(T,A)==x.substring(T,A)?(M=A,T=M):P=A,A=Math.floor((P-M)/2+M);return A}function o(s,x){if(!s||!x||s.charAt(s.length-1)!=x.charAt(x.length-1))return 0;for(var M=0,P=Math.min(s.length,x.length),A=P,T=0;M<A;)s.substring(s.length-A,s.length-T)==x.substring(x.length-A,x.length-T)?(M=A,T=M):P=A,A=Math.floor((P-M)/2+M);return A}function i(s,x){var M=s.length>x.length?s:x,P=s.length>x.length?x:s;if(M.length<4||P.length*2<M.length)return null;function A(q,F,U){for(var R=q.substring(U,U+Math.floor(q.length/4)),D=-1,C="",N,K,W,L;(D=F.indexOf(R,D+1))!=-1;){var j=a(q.substring(U),F.substring(D)),$=o(q.substring(0,U),F.substring(0,D));C.length<$+j&&(C=F.substring(D-$,D)+F.substring(D,D+j),N=q.substring(0,U-$),K=q.substring(U+j),W=F.substring(0,D-$),L=F.substring(D+j))}return C.length*2>=q.length?[N,K,W,L,C]:null}var T=A(M,P,Math.ceil(M.length/4)),w=A(M,P,Math.ceil(M.length/2)),E;if(!T&&!w)return null;w?T?E=T[4].length>w[4].length?T:w:E=w:E=T;var O,k,I,S;s.length>x.length?(O=E[0],k=E[1],I=E[2],S=E[3]):(I=E[0],S=E[1],O=E[2],k=E[3]);var B=E[4];return[O,k,I,S,B]}function p(s){s.push([h,""]);for(var x=0,M=0,P=0,A="",T="",w;x<s.length;)switch(s[x][0]){case y:P++,T+=s[x][1],x++;break;case n:M++,A+=s[x][1],x++;break;case h:M+P>1?(M!==0&&P!==0&&(w=a(T,A),w!==0&&(x-M-P>0&&s[x-M-P-1][0]==h?s[x-M-P-1][1]+=T.substring(0,w):(s.splice(0,0,[h,T.substring(0,w)]),x++),T=T.substring(w),A=A.substring(w)),w=o(T,A),w!==0&&(s[x][1]=T.substring(T.length-w)+s[x][1],T=T.substring(0,T.length-w),A=A.substring(0,A.length-w))),M===0?s.splice(x-P,M+P,[y,T]):P===0?s.splice(x-M,M+P,[n,A]):s.splice(x-M-P,M+P,[n,A],[y,T]),x=x-M-P+(M?1:0)+(P?1:0)+1):x!==0&&s[x-1][0]==h?(s[x-1][1]+=s[x][1],s.splice(x,1)):x++,P=0,M=0,A="",T="";break}s[s.length-1][1]===""&&s.pop();var E=!1;for(x=1;x<s.length-1;)s[x-1][0]==h&&s[x+1][0]==h&&(s[x][1].substring(s[x][1].length-s[x-1][1].length)==s[x-1][1]?(s[x][1]=s[x-1][1]+s[x][1].substring(0,s[x][1].length-s[x-1][1].length),s[x+1][1]=s[x-1][1]+s[x+1][1],s.splice(x-1,1),E=!0):s[x][1].substring(0,s[x+1][1].length)==s[x+1][1]&&(s[x-1][1]+=s[x+1][1],s[x][1]=s[x][1].substring(s[x+1][1].length)+s[x+1][1],s.splice(x+1,1),E=!0)),x++;E&&p(s)}var _=g;_.INSERT=y,_.DELETE=n,_.EQUAL=h,t.exports=_;function f(s,x){if(x===0)return[h,s];for(var M=0,P=0;P<s.length;P++){var A=s[P];if(A[0]===n||A[0]===h){var T=M+A[1].length;if(x===T)return[P+1,s];if(x<T){s=s.slice();var w=x-M,E=[A[0],A[1].slice(0,w)],O=[A[0],A[1].slice(w)];return s.splice(P,1,E,O),[P+1,s]}else M=T}}throw new Error("cursor_pos is out of bounds!")}function u(s,x){var M=f(s,x),P=M[1],A=M[0],T=P[A],w=P[A+1];if(T==null)return s;if(T[0]!==h)return s;if(w!=null&&T[1]+w[1]===w[1]+T[1])return P.splice(A,2,w,T),b(P,A,2);if(w!=null&&w[1].indexOf(T[1])===0){P.splice(A,2,[w[0],T[1]],[0,T[1]]);var E=w[1].slice(T[1].length);return E.length>0&&P.splice(A+2,0,[w[0],E]),b(P,A,3)}else return s}function l(s){for(var x=!1,M=function(w){return w.charCodeAt(0)>=56320&&w.charCodeAt(0)<=57343},P=function(w){return w.charCodeAt(w.length-1)>=55296&&w.charCodeAt(w.length-1)<=56319},A=2;A<s.length;A+=1)s[A-2][0]===h&&P(s[A-2][1])&&s[A-1][0]===n&&M(s[A-1][1])&&s[A][0]===y&&M(s[A][1])&&(x=!0,s[A-1][1]=s[A-2][1].slice(-1)+s[A-1][1],s[A][1]=s[A-2][1].slice(-1)+s[A][1],s[A-2][1]=s[A-2][1].slice(0,-1));if(!x)return s;for(var T=[],A=0;A<s.length;A+=1)s[A][1].length>0&&T.push(s[A]);return T}function b(s,x,M){for(var P=x+M-1;P>=0&&P>=x-1;P--)if(P+1<s.length){var A=s[P],T=s[P+1];A[0]===T[1]&&s.splice(P,2,[A[0],A[1]+T[1]])}return s}},function(t,e){e=t.exports=typeof Object.keys=="function"?Object.keys:n,e.shim=n;function n(y){var h=[];for(var g in y)h.push(g);return h}},function(t,e){var n=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";e=t.exports=n?y:h,e.supported=y;function y(g){return Object.prototype.toString.call(g)=="[object Arguments]"}e.unsupported=h;function h(g){return g&&typeof g=="object"&&typeof g.length=="number"&&Object.prototype.hasOwnProperty.call(g,"callee")&&!Object.prototype.propertyIsEnumerable.call(g,"callee")||!1}},function(t,e){var n=Object.prototype.hasOwnProperty,y="~";function h(){}Object.create&&(h.prototype=Object.create(null),new h().__proto__||(y=!1));function g(v,c,a){this.fn=v,this.context=c,this.once=a||!1}function m(){this._events=new h,this._eventsCount=0}m.prototype.eventNames=function(){var c=[],a,o;if(this._eventsCount===0)return c;for(o in a=this._events)n.call(a,o)&&c.push(y?o.slice(1):o);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(a)):c},m.prototype.listeners=function(c,a){var o=y?y+c:c,i=this._events[o];if(a)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var p=0,_=i.length,f=new Array(_);p<_;p++)f[p]=i[p].fn;return f},m.prototype.emit=function(c,a,o,i,p,_){var f=y?y+c:c;if(!this._events[f])return!1;var u=this._events[f],l=arguments.length,b,s;if(u.fn){switch(u.once&&this.removeListener(c,u.fn,void 0,!0),l){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,a),!0;case 3:return u.fn.call(u.context,a,o),!0;case 4:return u.fn.call(u.context,a,o,i),!0;case 5:return u.fn.call(u.context,a,o,i,p),!0;case 6:return u.fn.call(u.context,a,o,i,p,_),!0}for(s=1,b=new Array(l-1);s<l;s++)b[s-1]=arguments[s];u.fn.apply(u.context,b)}else{var x=u.length,M;for(s=0;s<x;s++)switch(u[s].once&&this.removeListener(c,u[s].fn,void 0,!0),l){case 1:u[s].fn.call(u[s].context);break;case 2:u[s].fn.call(u[s].context,a);break;case 3:u[s].fn.call(u[s].context,a,o);break;case 4:u[s].fn.call(u[s].context,a,o,i);break;default:if(!b)for(M=1,b=new Array(l-1);M<l;M++)b[M-1]=arguments[M];u[s].fn.apply(u[s].context,b)}}return!0},m.prototype.on=function(c,a,o){var i=new g(a,o||this),p=y?y+c:c;return this._events[p]?this._events[p].fn?this._events[p]=[this._events[p],i]:this._events[p].push(i):(this._events[p]=i,this._eventsCount++),this},m.prototype.once=function(c,a,o){var i=new g(a,o||this,!0),p=y?y+c:c;return this._events[p]?this._events[p].fn?this._events[p]=[this._events[p],i]:this._events[p].push(i):(this._events[p]=i,this._eventsCount++),this},m.prototype.removeListener=function(c,a,o,i){var p=y?y+c:c;if(!this._events[p])return this;if(!a)return--this._eventsCount===0?this._events=new h:delete this._events[p],this;var _=this._events[p];if(_.fn)_.fn===a&&(!i||_.once)&&(!o||_.context===o)&&(--this._eventsCount===0?this._events=new h:delete this._events[p]);else{for(var f=0,u=[],l=_.length;f<l;f++)(_[f].fn!==a||i&&!_[f].once||o&&_[f].context!==o)&&u.push(_[f]);u.length?this._events[p]=u.length===1?u[0]:u:--this._eventsCount===0?this._events=new h:delete this._events[p]}return this},m.prototype.removeAllListeners=function(c){var a;return c?(a=y?y+c:c,this._events[a]&&(--this._eventsCount===0?this._events=new h:delete this._events[a])):(this._events=new h,this._eventsCount=0),this},m.prototype.off=m.prototype.removeListener,m.prototype.addListener=m.prototype.on,m.prototype.setMaxListeners=function(){return this},m.prefixed=y,m.EventEmitter=m,typeof t!="undefined"&&(t.exports=m)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},h=function(){function G(z,Y){var Z=[],V=!0,te=!1,ne=void 0;try{for(var re=z[Symbol.iterator](),ce;!(V=(ce=re.next()).done)&&(Z.push(ce.value),!(Y&&Z.length===Y));V=!0);}catch(_e){te=!0,ne=_e}finally{try{!V&&re.return&&re.return()}finally{if(te)throw ne}}return Z}return function(z,Y){if(Array.isArray(z))return z;if(Symbol.iterator in Object(z))return G(z,Y);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function G(z,Y){for(var Z=0;Z<Y.length;Z++){var V=Y[Z];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(z,V.key,V)}}return function(z,Y,Z){return Y&&G(z.prototype,Y),Z&&G(z,Z),z}}(),m=n(3),v=O(m),c=n(2),a=O(c),o=n(0),i=O(o),p=n(5),_=O(p),f=n(10),u=O(f),l=n(9),b=O(l),s=n(36),x=n(37),M=n(13),P=O(M),A=n(26),T=n(38),w=n(39),E=n(40);function O(G){return G&&G.__esModule?G:{default:G}}function k(G,z,Y){return z in G?Object.defineProperty(G,z,{value:Y,enumerable:!0,configurable:!0,writable:!0}):G[z]=Y,G}function I(G,z){if(!(G instanceof z))throw new TypeError("Cannot call a class as a function")}function S(G,z){if(!G)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z&&(typeof z=="object"||typeof z=="function")?z:G}function B(G,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);G.prototype=Object.create(z&&z.prototype,{constructor:{value:G,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(G,z):G.__proto__=z)}var q=(0,u.default)("quill:clipboard"),F="__ql-matcher",U=[[Node.TEXT_NODE,le],[Node.TEXT_NODE,oe],["br",X],[Node.ELEMENT_NODE,oe],[Node.ELEMENT_NODE,Q],[Node.ELEMENT_NODE,ie],[Node.ELEMENT_NODE,H],[Node.ELEMENT_NODE,ue],["li",ee],["b",$.bind($,"bold")],["i",$.bind($,"italic")],["style",J]],R=[s.AlignAttribute,T.DirectionAttribute].reduce(function(G,z){return G[z.keyName]=z,G},{}),D=[s.AlignStyle,x.BackgroundStyle,A.ColorStyle,T.DirectionStyle,w.FontStyle,E.SizeStyle].reduce(function(G,z){return G[z.keyName]=z,G},{}),C=function(G){B(z,G);function z(Y,Z){I(this,z);var V=S(this,(z.__proto__||Object.getPrototypeOf(z)).call(this,Y,Z));return V.quill.root.addEventListener("paste",V.onPaste.bind(V)),V.container=V.quill.addContainer("ql-clipboard"),V.container.setAttribute("contenteditable",!0),V.container.setAttribute("tabindex",-1),V.matchers=[],U.concat(V.options.matchers).forEach(function(te){var ne=h(te,2),re=ne[0],ce=ne[1];!Z.matchVisual&&ce===ie||V.addMatcher(re,ce)}),V}return g(z,[{key:"addMatcher",value:function(Z,V){this.matchers.push([Z,V])}},{key:"convert",value:function(Z){if(typeof Z=="string")return this.container.innerHTML=Z.replace(/\>\r?\n +\</g,"><"),this.convert();var V=this.quill.getFormat(this.quill.selection.savedRange.index);if(V[P.default.blotName]){var te=this.container.innerText;return this.container.innerHTML="",new a.default().insert(te,k({},P.default.blotName,V[P.default.blotName]))}var ne=this.prepareMatching(),re=h(ne,2),ce=re[0],_e=re[1],ae=j(this.container,ce,_e);return W(ae,`
`)&&ae.ops[ae.ops.length-1].attributes==null&&(ae=ae.compose(new a.default().retain(ae.length()-1).delete(1))),q.log("convert",this.container.innerHTML,ae),this.container.innerHTML="",ae}},{key:"dangerouslyPasteHTML",value:function(Z,V){var te=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_.default.sources.API;if(typeof Z=="string")this.quill.setContents(this.convert(Z),V),this.quill.setSelection(0,_.default.sources.SILENT);else{var ne=this.convert(V);this.quill.updateContents(new a.default().retain(Z).concat(ne),te),this.quill.setSelection(Z+ne.length(),_.default.sources.SILENT)}}},{key:"onPaste",value:function(Z){var V=this;if(!(Z.defaultPrevented||!this.quill.isEnabled())){var te=this.quill.getSelection(),ne=new a.default().retain(te.index),re=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(_.default.sources.SILENT),setTimeout(function(){ne=ne.concat(V.convert()).delete(te.length),V.quill.updateContents(ne,_.default.sources.USER),V.quill.setSelection(ne.length()-te.length,_.default.sources.SILENT),V.quill.scrollingContainer.scrollTop=re,V.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var Z=this,V=[],te=[];return this.matchers.forEach(function(ne){var re=h(ne,2),ce=re[0],_e=re[1];switch(ce){case Node.TEXT_NODE:te.push(_e);break;case Node.ELEMENT_NODE:V.push(_e);break;default:[].forEach.call(Z.container.querySelectorAll(ce),function(ae){ae[F]=ae[F]||[],ae[F].push(_e)});break}}),[V,te]}}]),z}(b.default);C.DEFAULTS={matchers:[],matchVisual:!0};function N(G,z,Y){return(typeof z=="undefined"?"undefined":y(z))==="object"?Object.keys(z).reduce(function(Z,V){return N(Z,V,z[V])},G):G.reduce(function(Z,V){return V.attributes&&V.attributes[z]?Z.push(V):Z.insert(V.insert,(0,v.default)({},k({},z,Y),V.attributes))},new a.default)}function K(G){if(G.nodeType!==Node.ELEMENT_NODE)return{};var z="__ql-computed-style";return G[z]||(G[z]=window.getComputedStyle(G))}function W(G,z){for(var Y="",Z=G.ops.length-1;Z>=0&&Y.length<z.length;--Z){var V=G.ops[Z];if(typeof V.insert!="string")break;Y=V.insert+Y}return Y.slice(-1*z.length)===z}function L(G){if(G.childNodes.length===0)return!1;var z=K(G);return["block","list-item"].indexOf(z.display)>-1}function j(G,z,Y){return G.nodeType===G.TEXT_NODE?Y.reduce(function(Z,V){return V(G,Z)},new a.default):G.nodeType===G.ELEMENT_NODE?[].reduce.call(G.childNodes||[],function(Z,V){var te=j(V,z,Y);return V.nodeType===G.ELEMENT_NODE&&(te=z.reduce(function(ne,re){return re(V,ne)},te),te=(V[F]||[]).reduce(function(ne,re){return re(V,ne)},te)),Z.concat(te)},new a.default):new a.default}function $(G,z,Y){return N(Y,G,!0)}function H(G,z){var Y=i.default.Attributor.Attribute.keys(G),Z=i.default.Attributor.Class.keys(G),V=i.default.Attributor.Style.keys(G),te={};return Y.concat(Z).concat(V).forEach(function(ne){var re=i.default.query(ne,i.default.Scope.ATTRIBUTE);re!=null&&(te[re.attrName]=re.value(G),te[re.attrName])||(re=R[ne],re!=null&&(re.attrName===ne||re.keyName===ne)&&(te[re.attrName]=re.value(G)||void 0),re=D[ne],re!=null&&(re.attrName===ne||re.keyName===ne)&&(re=D[ne],te[re.attrName]=re.value(G)||void 0))}),Object.keys(te).length>0&&(z=N(z,te)),z}function Q(G,z){var Y=i.default.query(G);if(Y==null)return z;if(Y.prototype instanceof i.default.Embed){var Z={},V=Y.value(G);V!=null&&(Z[Y.blotName]=V,z=new a.default().insert(Z,Y.formats(G)))}else typeof Y.formats=="function"&&(z=N(z,Y.blotName,Y.formats(G)));return z}function X(G,z){return W(z,`
`)||z.insert(`
`),z}function J(){return new a.default}function ee(G,z){var Y=i.default.query(G);if(Y==null||Y.blotName!=="list-item"||!W(z,`
`))return z;for(var Z=-1,V=G.parentNode;!V.classList.contains("ql-clipboard");)(i.default.query(V)||{}).blotName==="list"&&(Z+=1),V=V.parentNode;return Z<=0?z:z.compose(new a.default().retain(z.length()-1).retain(1,{indent:Z}))}function oe(G,z){return W(z,`
`)||(L(G)||z.length()>0&&G.nextSibling&&L(G.nextSibling))&&z.insert(`
`),z}function ie(G,z){if(L(G)&&G.nextElementSibling!=null&&!W(z,`

`)){var Y=G.offsetHeight+parseFloat(K(G).marginTop)+parseFloat(K(G).marginBottom);G.nextElementSibling.offsetTop>G.offsetTop+Y*1.5&&z.insert(`
`)}return z}function ue(G,z){var Y={},Z=G.style||{};return Z.fontStyle&&K(G).fontStyle==="italic"&&(Y.italic=!0),Z.fontWeight&&(K(G).fontWeight.startsWith("bold")||parseInt(K(G).fontWeight)>=700)&&(Y.bold=!0),Object.keys(Y).length>0&&(z=N(z,Y)),parseFloat(Z.textIndent||0)>0&&(z=new a.default().insert("	").concat(z)),z}function le(G,z){var Y=G.data;if(G.parentNode.tagName==="O:P")return z.insert(Y.trim());if(Y.trim().length===0&&G.parentNode.classList.contains("ql-clipboard"))return z;if(!K(G.parentNode).whiteSpace.startsWith("pre")){var Z=function(te,ne){return ne=ne.replace(/[^\u00a0]/g,""),ne.length<1&&te?" ":ne};Y=Y.replace(/\r\n/g," ").replace(/\n/g," "),Y=Y.replace(/\s\s+/g,Z.bind(Z,!0)),(G.previousSibling==null&&L(G.parentNode)||G.previousSibling!=null&&L(G.previousSibling))&&(Y=Y.replace(/^\s+/,Z.bind(Z,!1))),(G.nextSibling==null&&L(G.parentNode)||G.nextSibling!=null&&L(G.nextSibling))&&(Y=Y.replace(/\s+$/,Z.bind(Z,!1)))}return z.insert(Y)}e.default=C,e.matchAttributor=H,e.matchBlot=Q,e.matchNewline=oe,e.matchSpacing=ie,e.matchText=le},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function p(_,f){for(var u=0;u<f.length;u++){var l=f[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(_,l.key,l)}}return function(_,f,u){return f&&p(_.prototype,f),u&&p(_,u),_}}(),h=function p(_,f,u){_===null&&(_=Function.prototype);var l=Object.getOwnPropertyDescriptor(_,f);if(l===void 0){var b=Object.getPrototypeOf(_);return b===null?void 0:p(b,f,u)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(u)}},g=n(6),m=v(g);function v(p){return p&&p.__esModule?p:{default:p}}function c(p,_){if(!(p instanceof _))throw new TypeError("Cannot call a class as a function")}function a(p,_){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:p}function o(p,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);p.prototype=Object.create(_&&_.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(p,_):p.__proto__=_)}var i=function(p){o(_,p);function _(){return c(this,_),a(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return y(_,[{key:"optimize",value:function(u){h(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"optimize",this).call(this,u),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return h(_.__proto__||Object.getPrototypeOf(_),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),_}(m.default);i.blotName="bold",i.tagName=["STRONG","B"],e.default=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var y=function(){function E(O,k){var I=[],S=!0,B=!1,q=void 0;try{for(var F=O[Symbol.iterator](),U;!(S=(U=F.next()).done)&&(I.push(U.value),!(k&&I.length===k));S=!0);}catch(R){B=!0,q=R}finally{try{!S&&F.return&&F.return()}finally{if(B)throw q}}return I}return function(O,k){if(Array.isArray(O))return O;if(Symbol.iterator in Object(O))return E(O,k);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function E(O,k){for(var I=0;I<k.length;I++){var S=k[I];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(O,S.key,S)}}return function(O,k,I){return k&&E(O.prototype,k),I&&E(O,I),O}}(),g=n(2),m=u(g),v=n(0),c=u(v),a=n(5),o=u(a),i=n(10),p=u(i),_=n(9),f=u(_);function u(E){return E&&E.__esModule?E:{default:E}}function l(E,O,k){return O in E?Object.defineProperty(E,O,{value:k,enumerable:!0,configurable:!0,writable:!0}):E[O]=k,E}function b(E,O){if(!(E instanceof O))throw new TypeError("Cannot call a class as a function")}function s(E,O){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O&&(typeof O=="object"||typeof O=="function")?O:E}function x(E,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);E.prototype=Object.create(O&&O.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(E,O):E.__proto__=O)}var M=(0,p.default)("quill:toolbar"),P=function(E){x(O,E);function O(k,I){b(this,O);var S=s(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,k,I));if(Array.isArray(S.options.container)){var B=document.createElement("div");T(B,S.options.container),k.container.parentNode.insertBefore(B,k.container),S.container=B}else typeof S.options.container=="string"?S.container=document.querySelector(S.options.container):S.container=S.options.container;if(!(S.container instanceof HTMLElement)){var q;return q=M.error("Container required for toolbar",S.options),s(S,q)}return S.container.classList.add("ql-toolbar"),S.controls=[],S.handlers={},Object.keys(S.options.handlers).forEach(function(F){S.addHandler(F,S.options.handlers[F])}),[].forEach.call(S.container.querySelectorAll("button, select"),function(F){S.attach(F)}),S.quill.on(o.default.events.EDITOR_CHANGE,function(F,U){F===o.default.events.SELECTION_CHANGE&&S.update(U)}),S.quill.on(o.default.events.SCROLL_OPTIMIZE,function(){var F=S.quill.selection.getRange(),U=y(F,1),R=U[0];S.update(R)}),S}return h(O,[{key:"addHandler",value:function(I,S){this.handlers[I]=S}},{key:"attach",value:function(I){var S=this,B=[].find.call(I.classList,function(F){return F.indexOf("ql-")===0});if(!!B){if(B=B.slice(3),I.tagName==="BUTTON"&&I.setAttribute("type","button"),this.handlers[B]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[B]==null){M.warn("ignoring attaching to disabled format",B,I);return}if(c.default.query(B)==null){M.warn("ignoring attaching to nonexistent format",B,I);return}}var q=I.tagName==="SELECT"?"change":"click";I.addEventListener(q,function(F){var U=void 0;if(I.tagName==="SELECT"){if(I.selectedIndex<0)return;var R=I.options[I.selectedIndex];R.hasAttribute("selected")?U=!1:U=R.value||!1}else I.classList.contains("ql-active")?U=!1:U=I.value||!I.hasAttribute("value"),F.preventDefault();S.quill.focus();var D=S.quill.selection.getRange(),C=y(D,1),N=C[0];if(S.handlers[B]!=null)S.handlers[B].call(S,U);else if(c.default.query(B).prototype instanceof c.default.Embed){if(U=prompt("Enter "+B),!U)return;S.quill.updateContents(new m.default().retain(N.index).delete(N.length).insert(l({},B,U)),o.default.sources.USER)}else S.quill.format(B,U,o.default.sources.USER);S.update(N)}),this.controls.push([B,I])}}},{key:"update",value:function(I){var S=I==null?{}:this.quill.getFormat(I);this.controls.forEach(function(B){var q=y(B,2),F=q[0],U=q[1];if(U.tagName==="SELECT"){var R=void 0;if(I==null)R=null;else if(S[F]==null)R=U.querySelector("option[selected]");else if(!Array.isArray(S[F])){var D=S[F];typeof D=="string"&&(D=D.replace(/\"/g,'\\"')),R=U.querySelector('option[value="'+D+'"]')}R==null?(U.value="",U.selectedIndex=-1):R.selected=!0}else if(I==null)U.classList.remove("ql-active");else if(U.hasAttribute("value")){var C=S[F]===U.getAttribute("value")||S[F]!=null&&S[F].toString()===U.getAttribute("value")||S[F]==null&&!U.getAttribute("value");U.classList.toggle("ql-active",C)}else U.classList.toggle("ql-active",S[F]!=null)})}}]),O}(f.default);P.DEFAULTS={};function A(E,O,k){var I=document.createElement("button");I.setAttribute("type","button"),I.classList.add("ql-"+O),k!=null&&(I.value=k),E.appendChild(I)}function T(E,O){Array.isArray(O[0])||(O=[O]),O.forEach(function(k){var I=document.createElement("span");I.classList.add("ql-formats"),k.forEach(function(S){if(typeof S=="string")A(I,S);else{var B=Object.keys(S)[0],q=S[B];Array.isArray(q)?w(I,B,q):A(I,B,q)}}),E.appendChild(I)})}function w(E,O,k){var I=document.createElement("select");I.classList.add("ql-"+O),k.forEach(function(S){var B=document.createElement("option");S!==!1?B.setAttribute("value",S):B.setAttribute("selected","selected"),I.appendChild(B)}),E.appendChild(I)}P.DEFAULTS={container:null,handlers:{clean:function(){var O=this,k=this.quill.getSelection();if(k!=null)if(k.length==0){var I=this.quill.getFormat();Object.keys(I).forEach(function(S){c.default.query(S,c.default.Scope.INLINE)!=null&&O.quill.format(S,!1)})}else this.quill.removeFormat(k,o.default.sources.USER)},direction:function(O){var k=this.quill.getFormat().align;O==="rtl"&&k==null?this.quill.format("align","right",o.default.sources.USER):!O&&k==="right"&&this.quill.format("align",!1,o.default.sources.USER),this.quill.format("direction",O,o.default.sources.USER)},indent:function(O){var k=this.quill.getSelection(),I=this.quill.getFormat(k),S=parseInt(I.indent||0);if(O==="+1"||O==="-1"){var B=O==="+1"?1:-1;I.direction==="rtl"&&(B*=-1),this.quill.format("indent",S+B,o.default.sources.USER)}},link:function(O){O===!0&&(O=prompt("Enter link URL:")),this.quill.format("link",O,o.default.sources.USER)},list:function(O){var k=this.quill.getSelection(),I=this.quill.getFormat(k);O==="check"?I.list==="checked"||I.list==="unchecked"?this.quill.format("list",!1,o.default.sources.USER):this.quill.format("list","unchecked",o.default.sources.USER):this.quill.format("list",O,o.default.sources.USER)}}},e.default=P,e.addControls=T},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function p(_,f){for(var u=0;u<f.length;u++){var l=f[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(_,l.key,l)}}return function(_,f,u){return f&&p(_.prototype,f),u&&p(_,u),_}}(),h=function p(_,f,u){_===null&&(_=Function.prototype);var l=Object.getOwnPropertyDescriptor(_,f);if(l===void 0){var b=Object.getPrototypeOf(_);return b===null?void 0:p(b,f,u)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(u)}},g=n(28),m=v(g);function v(p){return p&&p.__esModule?p:{default:p}}function c(p,_){if(!(p instanceof _))throw new TypeError("Cannot call a class as a function")}function a(p,_){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:p}function o(p,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);p.prototype=Object.create(_&&_.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(p,_):p.__proto__=_)}var i=function(p){o(_,p);function _(f,u){c(this,_);var l=a(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,f));return l.label.innerHTML=u,l.container.classList.add("ql-color-picker"),[].slice.call(l.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(b){b.classList.add("ql-primary")}),l}return y(_,[{key:"buildItem",value:function(u){var l=h(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"buildItem",this).call(this,u);return l.style.backgroundColor=u.getAttribute("value")||"",l}},{key:"selectItem",value:function(u,l){h(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"selectItem",this).call(this,u,l);var b=this.label.querySelector(".ql-color-label"),s=u&&u.getAttribute("data-value")||"";b&&(b.tagName==="line"?b.style.stroke=s:b.style.fill=s)}}]),_}(m.default);e.default=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function p(_,f){for(var u=0;u<f.length;u++){var l=f[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(_,l.key,l)}}return function(_,f,u){return f&&p(_.prototype,f),u&&p(_,u),_}}(),h=function p(_,f,u){_===null&&(_=Function.prototype);var l=Object.getOwnPropertyDescriptor(_,f);if(l===void 0){var b=Object.getPrototypeOf(_);return b===null?void 0:p(b,f,u)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(u)}},g=n(28),m=v(g);function v(p){return p&&p.__esModule?p:{default:p}}function c(p,_){if(!(p instanceof _))throw new TypeError("Cannot call a class as a function")}function a(p,_){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:p}function o(p,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);p.prototype=Object.create(_&&_.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(p,_):p.__proto__=_)}var i=function(p){o(_,p);function _(f,u){c(this,_);var l=a(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,f));return l.container.classList.add("ql-icon-picker"),[].forEach.call(l.container.querySelectorAll(".ql-picker-item"),function(b){b.innerHTML=u[b.getAttribute("data-value")||""]}),l.defaultItem=l.container.querySelector(".ql-selected"),l.selectItem(l.defaultItem),l}return y(_,[{key:"selectItem",value:function(u,l){h(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"selectItem",this).call(this,u,l),u=u||this.defaultItem,this.label.innerHTML=u.innerHTML}}]),_}(m.default);e.default=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function m(v,c){for(var a=0;a<c.length;a++){var o=c[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(v,o.key,o)}}return function(v,c,a){return c&&m(v.prototype,c),a&&m(v,a),v}}();function h(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")}var g=function(){function m(v,c){var a=this;h(this,m),this.quill=v,this.boundsContainer=c||document.body,this.root=v.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){a.root.style.marginTop=-1*a.quill.root.scrollTop+"px"}),this.hide()}return y(m,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(c){var a=c.left+c.width/2-this.root.offsetWidth/2,o=c.bottom+this.quill.root.scrollTop;this.root.style.left=a+"px",this.root.style.top=o+"px",this.root.classList.remove("ql-flip");var i=this.boundsContainer.getBoundingClientRect(),p=this.root.getBoundingClientRect(),_=0;if(p.right>i.right&&(_=i.right-p.right,this.root.style.left=a+_+"px"),p.left<i.left&&(_=i.left-p.left,this.root.style.left=a+_+"px"),p.bottom>i.bottom){var f=p.bottom-p.top,u=c.bottom-c.top+f;this.root.style.top=o-u+"px",this.root.classList.add("ql-flip")}return _}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),m}();e.default=g},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function w(E,O){var k=[],I=!0,S=!1,B=void 0;try{for(var q=E[Symbol.iterator](),F;!(I=(F=q.next()).done)&&(k.push(F.value),!(O&&k.length===O));I=!0);}catch(U){S=!0,B=U}finally{try{!I&&q.return&&q.return()}finally{if(S)throw B}}return k}return function(E,O){if(Array.isArray(E))return E;if(Symbol.iterator in Object(E))return w(E,O);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function w(E,O,k){E===null&&(E=Function.prototype);var I=Object.getOwnPropertyDescriptor(E,O);if(I===void 0){var S=Object.getPrototypeOf(E);return S===null?void 0:w(S,O,k)}else{if("value"in I)return I.value;var B=I.get;return B===void 0?void 0:B.call(k)}},g=function(){function w(E,O){for(var k=0;k<O.length;k++){var I=O[k];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(E,I.key,I)}}return function(E,O,k){return O&&w(E.prototype,O),k&&w(E,k),E}}(),m=n(3),v=b(m),c=n(8),a=b(c),o=n(43),i=b(o),p=n(27),_=b(p),f=n(15),u=n(41),l=b(u);function b(w){return w&&w.__esModule?w:{default:w}}function s(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")}function x(w,E){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:w}function M(w,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);w.prototype=Object.create(E&&E.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(w,E):w.__proto__=E)}var P=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],A=function(w){M(E,w);function E(O,k){s(this,E),k.modules.toolbar!=null&&k.modules.toolbar.container==null&&(k.modules.toolbar.container=P);var I=x(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,O,k));return I.quill.container.classList.add("ql-snow"),I}return g(E,[{key:"extendToolbar",value:function(k){k.container.classList.add("ql-snow"),this.buildButtons([].slice.call(k.container.querySelectorAll("button")),l.default),this.buildPickers([].slice.call(k.container.querySelectorAll("select")),l.default),this.tooltip=new T(this.quill,this.options.bounds),k.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(I,S){k.handlers.link.call(k,!S.format.link)})}}]),E}(i.default);A.DEFAULTS=(0,v.default)(!0,{},i.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(E){if(E){var O=this.quill.getSelection();if(O==null||O.length==0)return;var k=this.quill.getText(O);/^\S+@\S+\.\S+$/.test(k)&&k.indexOf("mailto:")!==0&&(k="mailto:"+k);var I=this.quill.theme.tooltip;I.edit("link",k)}else this.quill.format("link",!1)}}}}});var T=function(w){M(E,w);function E(O,k){s(this,E);var I=x(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,O,k));return I.preview=I.root.querySelector("a.ql-preview"),I}return g(E,[{key:"listen",value:function(){var k=this;h(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(I){k.root.classList.contains("ql-editing")?k.save():k.edit("link",k.preview.textContent),I.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(I){if(k.linkRange!=null){var S=k.linkRange;k.restoreFocus(),k.quill.formatText(S,"link",!1,a.default.sources.USER),delete k.linkRange}I.preventDefault(),k.hide()}),this.quill.on(a.default.events.SELECTION_CHANGE,function(I,S,B){if(I!=null){if(I.length===0&&B===a.default.sources.USER){var q=k.quill.scroll.descendant(_.default,I.index),F=y(q,2),U=F[0],R=F[1];if(U!=null){k.linkRange=new f.Range(I.index-R,U.length());var D=_.default.formats(U.domNode);k.preview.textContent=D,k.preview.setAttribute("href",D),k.show(),k.position(k.quill.getBounds(k.linkRange));return}}else delete k.linkRange;k.hide()}})}},{key:"show",value:function(){h(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),E}(o.BaseTooltip);T.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=A},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(29),h=V(y),g=n(36),m=n(38),v=n(64),c=n(65),a=V(c),o=n(66),i=V(o),p=n(67),_=V(p),f=n(37),u=n(26),l=n(39),b=n(40),s=n(56),x=V(s),M=n(68),P=V(M),A=n(27),T=V(A),w=n(69),E=V(w),O=n(70),k=V(O),I=n(71),S=V(I),B=n(72),q=V(B),F=n(73),U=V(F),R=n(13),D=V(R),C=n(74),N=V(C),K=n(75),W=V(K),L=n(57),j=V(L),$=n(41),H=V($),Q=n(28),X=V(Q),J=n(59),ee=V(J),oe=n(60),ie=V(oe),ue=n(61),le=V(ue),G=n(108),z=V(G),Y=n(62),Z=V(Y);function V(te){return te&&te.__esModule?te:{default:te}}h.default.register({"attributors/attribute/direction":m.DirectionAttribute,"attributors/class/align":g.AlignClass,"attributors/class/background":f.BackgroundClass,"attributors/class/color":u.ColorClass,"attributors/class/direction":m.DirectionClass,"attributors/class/font":l.FontClass,"attributors/class/size":b.SizeClass,"attributors/style/align":g.AlignStyle,"attributors/style/background":f.BackgroundStyle,"attributors/style/color":u.ColorStyle,"attributors/style/direction":m.DirectionStyle,"attributors/style/font":l.FontStyle,"attributors/style/size":b.SizeStyle},!0),h.default.register({"formats/align":g.AlignClass,"formats/direction":m.DirectionClass,"formats/indent":v.IndentClass,"formats/background":f.BackgroundStyle,"formats/color":u.ColorStyle,"formats/font":l.FontClass,"formats/size":b.SizeClass,"formats/blockquote":a.default,"formats/code-block":D.default,"formats/header":i.default,"formats/list":_.default,"formats/bold":x.default,"formats/code":R.Code,"formats/italic":P.default,"formats/link":T.default,"formats/script":E.default,"formats/strike":k.default,"formats/underline":S.default,"formats/image":q.default,"formats/video":U.default,"formats/list/item":p.ListItem,"modules/formula":N.default,"modules/syntax":W.default,"modules/toolbar":j.default,"themes/bubble":z.default,"themes/snow":Z.default,"ui/icons":H.default,"ui/picker":X.default,"ui/icon-picker":ie.default,"ui/color-picker":ee.default,"ui/tooltip":le.default},!0),e.default=h.default},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var y=function(){function _(f,u){for(var l=0;l<u.length;l++){var b=u[l];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(f,b.key,b)}}return function(f,u,l){return u&&_(f.prototype,u),l&&_(f,l),f}}(),h=function _(f,u,l){f===null&&(f=Function.prototype);var b=Object.getOwnPropertyDescriptor(f,u);if(b===void 0){var s=Object.getPrototypeOf(f);return s===null?void 0:_(s,u,l)}else{if("value"in b)return b.value;var x=b.get;return x===void 0?void 0:x.call(l)}},g=n(0),m=v(g);function v(_){return _&&_.__esModule?_:{default:_}}function c(_,f){if(!(_ instanceof f))throw new TypeError("Cannot call a class as a function")}function a(_,f){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:_}function o(_,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);_.prototype=Object.create(f&&f.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(_,f):_.__proto__=f)}var i=function(_){o(f,_);function f(){return c(this,f),a(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return y(f,[{key:"add",value:function(l,b){if(b==="+1"||b==="-1"){var s=this.value(l)||0;b=b==="+1"?s+1:s-1}return b===0?(this.remove(l),!0):h(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"add",this).call(this,l,b)}},{key:"canAdd",value:function(l,b){return h(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"canAdd",this).call(this,l,b)||h(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"canAdd",this).call(this,l,parseInt(b))}},{key:"value",value:function(l){return parseInt(h(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"value",this).call(this,l))||void 0}}]),f}(m.default.Attributor.Class),p=new i("indent","ql-indent",{scope:m.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=p},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(4),h=g(y);function g(o){return o&&o.__esModule?o:{default:o}}function m(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function v(o,i){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i&&(typeof i=="object"||typeof i=="function")?i:o}function c(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(o,i):o.__proto__=i)}var a=function(o){c(i,o);function i(){return m(this,i),v(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return i}(h.default);a.blotName="blockquote",a.tagName="blockquote",e.default=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function i(p,_){for(var f=0;f<_.length;f++){var u=_[f];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(p,u.key,u)}}return function(p,_,f){return _&&i(p.prototype,_),f&&i(p,f),p}}(),h=n(4),g=m(h);function m(i){return i&&i.__esModule?i:{default:i}}function v(i,p){if(!(i instanceof p))throw new TypeError("Cannot call a class as a function")}function c(i,p){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:i}function a(i,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);i.prototype=Object.create(p&&p.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(i,p):i.__proto__=p)}var o=function(i){a(p,i);function p(){return v(this,p),c(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return y(p,null,[{key:"formats",value:function(f){return this.tagName.indexOf(f.tagName)+1}}]),p}(g.default);o.blotName="header",o.tagName=["H1","H2","H3","H4","H5","H6"],e.default=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var y=function(){function s(x,M){for(var P=0;P<M.length;P++){var A=M[P];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(x,A.key,A)}}return function(x,M,P){return M&&s(x.prototype,M),P&&s(x,P),x}}(),h=function s(x,M,P){x===null&&(x=Function.prototype);var A=Object.getOwnPropertyDescriptor(x,M);if(A===void 0){var T=Object.getPrototypeOf(x);return T===null?void 0:s(T,M,P)}else{if("value"in A)return A.value;var w=A.get;return w===void 0?void 0:w.call(P)}},g=n(0),m=i(g),v=n(4),c=i(v),a=n(25),o=i(a);function i(s){return s&&s.__esModule?s:{default:s}}function p(s,x,M){return x in s?Object.defineProperty(s,x,{value:M,enumerable:!0,configurable:!0,writable:!0}):s[x]=M,s}function _(s,x){if(!(s instanceof x))throw new TypeError("Cannot call a class as a function")}function f(s,x){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:s}function u(s,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);s.prototype=Object.create(x&&x.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(s,x):s.__proto__=x)}var l=function(s){u(x,s);function x(){return _(this,x),f(this,(x.__proto__||Object.getPrototypeOf(x)).apply(this,arguments))}return y(x,[{key:"format",value:function(P,A){P===b.blotName&&!A?this.replaceWith(m.default.create(this.statics.scope)):h(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"format",this).call(this,P,A)}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():h(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(P,A){return this.parent.isolate(this.offset(this.parent),this.length()),P===this.parent.statics.blotName?(this.parent.replaceWith(P,A),this):(this.parent.unwrap(),h(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"replaceWith",this).call(this,P,A))}}],[{key:"formats",value:function(P){return P.tagName===this.tagName?void 0:h(x.__proto__||Object.getPrototypeOf(x),"formats",this).call(this,P)}}]),x}(c.default);l.blotName="list-item",l.tagName="LI";var b=function(s){u(x,s),y(x,null,[{key:"create",value:function(P){var A=P==="ordered"?"OL":"UL",T=h(x.__proto__||Object.getPrototypeOf(x),"create",this).call(this,A);return(P==="checked"||P==="unchecked")&&T.setAttribute("data-checked",P==="checked"),T}},{key:"formats",value:function(P){if(P.tagName==="OL")return"ordered";if(P.tagName==="UL")return P.hasAttribute("data-checked")?P.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet"}}]);function x(M){_(this,x);var P=f(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,M)),A=function(w){if(w.target.parentNode===M){var E=P.statics.formats(M),O=m.default.find(w.target);E==="checked"?O.format("list","unchecked"):E==="unchecked"&&O.format("list","checked")}};return M.addEventListener("touchstart",A),M.addEventListener("mousedown",A),P}return y(x,[{key:"format",value:function(P,A){this.children.length>0&&this.children.tail.format(P,A)}},{key:"formats",value:function(){return p({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(P,A){if(P instanceof l)h(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"insertBefore",this).call(this,P,A);else{var T=A==null?this.length():A.offset(this),w=this.split(T);w.parent.insertBefore(P,w)}}},{key:"optimize",value:function(P){h(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"optimize",this).call(this,P);var A=this.next;A!=null&&A.prev===this&&A.statics.blotName===this.statics.blotName&&A.domNode.tagName===this.domNode.tagName&&A.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(A.moveChildren(this),A.remove())}},{key:"replace",value:function(P){if(P.statics.blotName!==this.statics.blotName){var A=m.default.create(this.statics.defaultChild);P.moveChildren(A),this.appendChild(A)}h(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"replace",this).call(this,P)}}]),x}(o.default);b.blotName="list",b.scope=m.default.Scope.BLOCK_BLOT,b.tagName=["OL","UL"],b.defaultChild="list-item",b.allowedChildren=[l],e.ListItem=l,e.default=b},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(56),h=g(y);function g(o){return o&&o.__esModule?o:{default:o}}function m(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function v(o,i){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i&&(typeof i=="object"||typeof i=="function")?i:o}function c(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(o,i):o.__proto__=i)}var a=function(o){c(i,o);function i(){return m(this,i),v(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return i}(h.default);a.blotName="italic",a.tagName=["EM","I"],e.default=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function p(_,f){for(var u=0;u<f.length;u++){var l=f[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(_,l.key,l)}}return function(_,f,u){return f&&p(_.prototype,f),u&&p(_,u),_}}(),h=function p(_,f,u){_===null&&(_=Function.prototype);var l=Object.getOwnPropertyDescriptor(_,f);if(l===void 0){var b=Object.getPrototypeOf(_);return b===null?void 0:p(b,f,u)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(u)}},g=n(6),m=v(g);function v(p){return p&&p.__esModule?p:{default:p}}function c(p,_){if(!(p instanceof _))throw new TypeError("Cannot call a class as a function")}function a(p,_){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:p}function o(p,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);p.prototype=Object.create(_&&_.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(p,_):p.__proto__=_)}var i=function(p){o(_,p);function _(){return c(this,_),a(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return y(_,null,[{key:"create",value:function(u){return u==="super"?document.createElement("sup"):u==="sub"?document.createElement("sub"):h(_.__proto__||Object.getPrototypeOf(_),"create",this).call(this,u)}},{key:"formats",value:function(u){if(u.tagName==="SUB")return"sub";if(u.tagName==="SUP")return"super"}}]),_}(m.default);i.blotName="script",i.tagName=["SUB","SUP"],e.default=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(6),h=g(y);function g(o){return o&&o.__esModule?o:{default:o}}function m(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function v(o,i){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i&&(typeof i=="object"||typeof i=="function")?i:o}function c(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(o,i):o.__proto__=i)}var a=function(o){c(i,o);function i(){return m(this,i),v(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return i}(h.default);a.blotName="strike",a.tagName="S",e.default=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=n(6),h=g(y);function g(o){return o&&o.__esModule?o:{default:o}}function m(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function v(o,i){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i&&(typeof i=="object"||typeof i=="function")?i:o}function c(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(o,i):o.__proto__=i)}var a=function(o){c(i,o);function i(){return m(this,i),v(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return i}(h.default);a.blotName="underline",a.tagName="U",e.default=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function f(u,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,l,b){return l&&f(u.prototype,l),b&&f(u,b),u}}(),h=function f(u,l,b){u===null&&(u=Function.prototype);var s=Object.getOwnPropertyDescriptor(u,l);if(s===void 0){var x=Object.getPrototypeOf(u);return x===null?void 0:f(x,l,b)}else{if("value"in s)return s.value;var M=s.get;return M===void 0?void 0:M.call(b)}},g=n(0),m=c(g),v=n(27);function c(f){return f&&f.__esModule?f:{default:f}}function a(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function o(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function i(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var p=["alt","height","width"],_=function(f){i(u,f);function u(){return a(this,u),o(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return y(u,[{key:"format",value:function(b,s){p.indexOf(b)>-1?s?this.domNode.setAttribute(b,s):this.domNode.removeAttribute(b):h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"format",this).call(this,b,s)}}],[{key:"create",value:function(b){var s=h(u.__proto__||Object.getPrototypeOf(u),"create",this).call(this,b);return typeof b=="string"&&s.setAttribute("src",this.sanitize(b)),s}},{key:"formats",value:function(b){return p.reduce(function(s,x){return b.hasAttribute(x)&&(s[x]=b.getAttribute(x)),s},{})}},{key:"match",value:function(b){return/\.(jpe?g|gif|png)$/.test(b)||/^data:image\/.+;base64/.test(b)}},{key:"sanitize",value:function(b){return(0,v.sanitize)(b,["http","https","data"])?b:"//:0"}},{key:"value",value:function(b){return b.getAttribute("src")}}]),u}(m.default.Embed);_.blotName="image",_.tagName="IMG",e.default=_},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function f(u,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,l,b){return l&&f(u.prototype,l),b&&f(u,b),u}}(),h=function f(u,l,b){u===null&&(u=Function.prototype);var s=Object.getOwnPropertyDescriptor(u,l);if(s===void 0){var x=Object.getPrototypeOf(u);return x===null?void 0:f(x,l,b)}else{if("value"in s)return s.value;var M=s.get;return M===void 0?void 0:M.call(b)}},g=n(4),m=n(27),v=c(m);function c(f){return f&&f.__esModule?f:{default:f}}function a(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function o(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function i(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var p=["height","width"],_=function(f){i(u,f);function u(){return a(this,u),o(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return y(u,[{key:"format",value:function(b,s){p.indexOf(b)>-1?s?this.domNode.setAttribute(b,s):this.domNode.removeAttribute(b):h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"format",this).call(this,b,s)}}],[{key:"create",value:function(b){var s=h(u.__proto__||Object.getPrototypeOf(u),"create",this).call(this,b);return s.setAttribute("frameborder","0"),s.setAttribute("allowfullscreen",!0),s.setAttribute("src",this.sanitize(b)),s}},{key:"formats",value:function(b){return p.reduce(function(s,x){return b.hasAttribute(x)&&(s[x]=b.getAttribute(x)),s},{})}},{key:"sanitize",value:function(b){return v.default.sanitize(b)}},{key:"value",value:function(b){return b.getAttribute("src")}}]),u}(g.BlockEmbed);_.blotName="video",_.className="ql-video",_.tagName="IFRAME",e.default=_},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var y=function(){function b(s,x){for(var M=0;M<x.length;M++){var P=x[M];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(s,P.key,P)}}return function(s,x,M){return x&&b(s.prototype,x),M&&b(s,M),s}}(),h=function b(s,x,M){s===null&&(s=Function.prototype);var P=Object.getOwnPropertyDescriptor(s,x);if(P===void 0){var A=Object.getPrototypeOf(s);return A===null?void 0:b(A,x,M)}else{if("value"in P)return P.value;var T=P.get;return T===void 0?void 0:T.call(M)}},g=n(35),m=i(g),v=n(5),c=i(v),a=n(9),o=i(a);function i(b){return b&&b.__esModule?b:{default:b}}function p(b,s){if(!(b instanceof s))throw new TypeError("Cannot call a class as a function")}function _(b,s){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s&&(typeof s=="object"||typeof s=="function")?s:b}function f(b,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);b.prototype=Object.create(s&&s.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(b,s):b.__proto__=s)}var u=function(b){f(s,b);function s(){return p(this,s),_(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return y(s,null,[{key:"create",value:function(M){var P=h(s.__proto__||Object.getPrototypeOf(s),"create",this).call(this,M);return typeof M=="string"&&(window.katex.render(M,P,{throwOnError:!1,errorColor:"#f00"}),P.setAttribute("data-value",M)),P}},{key:"value",value:function(M){return M.getAttribute("data-value")}}]),s}(m.default);u.blotName="formula",u.className="ql-formula",u.tagName="SPAN";var l=function(b){f(s,b),y(s,null,[{key:"register",value:function(){c.default.register(u,!0)}}]);function s(){p(this,s);var x=_(this,(s.__proto__||Object.getPrototypeOf(s)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return x}return s}(o.default);e.FormulaBlot=u,e.default=l},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var y=function(){function M(P,A){for(var T=0;T<A.length;T++){var w=A[T];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(P,w.key,w)}}return function(P,A,T){return A&&M(P.prototype,A),T&&M(P,T),P}}(),h=function M(P,A,T){P===null&&(P=Function.prototype);var w=Object.getOwnPropertyDescriptor(P,A);if(w===void 0){var E=Object.getPrototypeOf(P);return E===null?void 0:M(E,A,T)}else{if("value"in w)return w.value;var O=w.get;return O===void 0?void 0:O.call(T)}},g=n(0),m=_(g),v=n(5),c=_(v),a=n(9),o=_(a),i=n(13),p=_(i);function _(M){return M&&M.__esModule?M:{default:M}}function f(M,P){if(!(M instanceof P))throw new TypeError("Cannot call a class as a function")}function u(M,P){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P&&(typeof P=="object"||typeof P=="function")?P:M}function l(M,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof P);M.prototype=Object.create(P&&P.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),P&&(Object.setPrototypeOf?Object.setPrototypeOf(M,P):M.__proto__=P)}var b=function(M){l(P,M);function P(){return f(this,P),u(this,(P.__proto__||Object.getPrototypeOf(P)).apply(this,arguments))}return y(P,[{key:"replaceWith",value:function(T){this.domNode.textContent=this.domNode.textContent,this.attach(),h(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"replaceWith",this).call(this,T)}},{key:"highlight",value:function(T){var w=this.domNode.textContent;this.cachedText!==w&&((w.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=T(w),this.domNode.normalize(),this.attach()),this.cachedText=w)}}]),P}(p.default);b.className="ql-syntax";var s=new m.default.Attributor.Class("token","hljs",{scope:m.default.Scope.INLINE}),x=function(M){l(P,M),y(P,null,[{key:"register",value:function(){c.default.register(s,!0),c.default.register(b,!0)}}]);function P(A,T){f(this,P);var w=u(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,A,T));if(typeof w.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var E=null;return w.quill.on(c.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(E),E=setTimeout(function(){w.highlight(),E=null},w.options.interval)}),w.highlight(),w}return y(P,[{key:"highlight",value:function(){var T=this;if(!this.quill.selection.composing){this.quill.update(c.default.sources.USER);var w=this.quill.getSelection();this.quill.scroll.descendants(b).forEach(function(E){E.highlight(T.options.highlight)}),this.quill.update(c.default.sources.SILENT),w!=null&&this.quill.setSelection(w,c.default.sources.SILENT)}}}]),P}(o.default);x.DEFAULTS={highlight:function(){return window.hljs==null?null:function(M){var P=window.hljs.highlightAuto(M);return P.value}}(),interval:1e3},e.CodeBlock=b,e.CodeToken=s,e.default=x},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var y=function P(A,T,w){A===null&&(A=Function.prototype);var E=Object.getOwnPropertyDescriptor(A,T);if(E===void 0){var O=Object.getPrototypeOf(A);return O===null?void 0:P(O,T,w)}else{if("value"in E)return E.value;var k=E.get;return k===void 0?void 0:k.call(w)}},h=function(){function P(A,T){for(var w=0;w<T.length;w++){var E=T[w];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(A,E.key,E)}}return function(A,T,w){return T&&P(A.prototype,T),w&&P(A,w),A}}(),g=n(3),m=f(g),v=n(8),c=f(v),a=n(43),o=f(a),i=n(15),p=n(41),_=f(p);function f(P){return P&&P.__esModule?P:{default:P}}function u(P,A){if(!(P instanceof A))throw new TypeError("Cannot call a class as a function")}function l(P,A){if(!P)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A&&(typeof A=="object"||typeof A=="function")?A:P}function b(P,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof A);P.prototype=Object.create(A&&A.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(P,A):P.__proto__=A)}var s=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],x=function(P){b(A,P);function A(T,w){u(this,A),w.modules.toolbar!=null&&w.modules.toolbar.container==null&&(w.modules.toolbar.container=s);var E=l(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,T,w));return E.quill.container.classList.add("ql-bubble"),E}return h(A,[{key:"extendToolbar",value:function(w){this.tooltip=new M(this.quill,this.options.bounds),this.tooltip.root.appendChild(w.container),this.buildButtons([].slice.call(w.container.querySelectorAll("button")),_.default),this.buildPickers([].slice.call(w.container.querySelectorAll("select")),_.default)}}]),A}(o.default);x.DEFAULTS=(0,m.default)(!0,{},o.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(A){A?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var M=function(P){b(A,P);function A(T,w){u(this,A);var E=l(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,T,w));return E.quill.on(c.default.events.EDITOR_CHANGE,function(O,k,I,S){if(O===c.default.events.SELECTION_CHANGE)if(k!=null&&k.length>0&&S===c.default.sources.USER){E.show(),E.root.style.left="0px",E.root.style.width="",E.root.style.width=E.root.offsetWidth+"px";var B=E.quill.getLines(k.index,k.length);if(B.length===1)E.position(E.quill.getBounds(k));else{var q=B[B.length-1],F=E.quill.getIndex(q),U=Math.min(q.length()-1,k.index+k.length-F),R=E.quill.getBounds(new i.Range(F,U));E.position(R)}}else document.activeElement!==E.textbox&&E.quill.hasFocus()&&E.hide()}),E}return h(A,[{key:"listen",value:function(){var w=this;y(A.prototype.__proto__||Object.getPrototypeOf(A.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){w.root.classList.remove("ql-editing")}),this.quill.on(c.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!w.root.classList.contains("ql-hidden")){var E=w.quill.getSelection();E!=null&&w.position(w.quill.getBounds(E))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(w){var E=y(A.prototype.__proto__||Object.getPrototypeOf(A.prototype),"position",this).call(this,w),O=this.root.querySelector(".ql-tooltip-arrow");if(O.style.marginLeft="",E===0)return E;O.style.marginLeft=-1*E-O.offsetWidth/2+"px"}}]),A}(a.BaseTooltip);M.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=M,e.default=x},function(t,e,n){t.exports=n(63)}]).default})})(quill);var Quill=getDefaultExportFromCjs(quill.exports);function _classCallCheck(d,r){if(!(d instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(d,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(d,e.key,e)}}function _createClass(d,r,t){return r&&_defineProperties(d.prototype,r),t&&_defineProperties(d,t),d}function _defineProperty$1(d,r,t){return r in d?Object.defineProperty(d,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):d[r]=t,d}function _extends$1(){return _extends$1=Object.assign||function(d){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(d[e]=t[e])}return d},_extends$1.apply(this,arguments)}function _inherits(d,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(r&&r.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),r&&_setPrototypeOf(d,r)}function _getPrototypeOf(d){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(d)}function _setPrototypeOf(d,r){return _setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},_setPrototypeOf(d,r)}function _isNativeReflectConstruct(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _assertThisInitialized(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function _possibleConstructorReturn(d,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(d)}function _createSuper(d){var r=_isNativeReflectConstruct();return function(){var e=_getPrototypeOf(d),n;if(r){var y=_getPrototypeOf(this).constructor;n=Reflect.construct(e,arguments,y)}else n=e.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _superPropBase(d,r){for(;!Object.prototype.hasOwnProperty.call(d,r)&&(d=_getPrototypeOf(d),d!==null););return d}function _get(){return typeof Reflect!="undefined"&&Reflect.get?_get=Reflect.get:_get=function(r,t,e){var n=_superPropBase(r,t);if(!!n){var y=Object.getOwnPropertyDescriptor(n,t);return y.get?y.get.call(arguments.length<3?r:e):y.value}},_get.apply(this,arguments)}function _unsupportedIterableToArray(d,r){if(!!d){if(typeof d=="string")return _arrayLikeToArray(d,r);var t=Object.prototype.toString.call(d).slice(8,-1);if(t==="Object"&&d.constructor&&(t=d.constructor.name),t==="Map"||t==="Set")return Array.from(d);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(d,r)}}function _arrayLikeToArray(d,r){(r==null||r>d.length)&&(r=d.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=d[t];return e}function _createForOfIteratorHelper(d,r){var t=typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(!t){if(Array.isArray(d)||(t=_unsupportedIterableToArray(d))||r&&d&&typeof d.length=="number"){t&&(d=t);var e=0,n=function(){};return{s:n,n:function(){return e>=d.length?{done:!0}:{done:!1,value:d[e++]}},e:function(m){throw m},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=!0,h=!1,g;return{s:function(){t=t.call(d)},n:function(){var m=t.next();return y=m.done,m},e:function(m){h=!0,g=m},f:function(){try{!y&&t.return!=null&&t.return()}finally{if(h)throw g}}}}var Keys={TAB:9,ENTER:13,ESCAPE:27,UP:38,DOWN:40};function attachDataValues(d,r,t){var e=d;return Object.keys(r).forEach(function(n){t.indexOf(n)>-1?e.dataset[n]=r[n]:delete e.dataset[n]}),e}function getMentionCharIndex(d,r){return r.reduce(function(t,e){var n=d.lastIndexOf(e);return n>t.mentionCharIndex?{mentionChar:e,mentionCharIndex:n}:{mentionChar:t.mentionChar,mentionCharIndex:t.mentionCharIndex}},{mentionChar:null,mentionCharIndex:-1})}function hasValidChars(d,r){return r.test(d)}function hasValidMentionCharIndex(d,r,t){return d>-1?!(t&&!(d===0||!!r[d-1].match(/\s/g))):!1}var Embed$3=Quill.import("blots/embed"),MentionBlot=function(d){_inherits(t,d);var r=_createSuper(t);function t(e,n){var y;return _classCallCheck(this,t),y=r.call(this,e,n),_defineProperty$1(_assertThisInitialized(y),"hoverHandler",void 0),_defineProperty$1(_assertThisInitialized(y),"hoverHandler",void 0),y.clickHandler=null,y.hoverHandler=null,y.mounted=!1,y}return _createClass(t,[{key:"attach",value:function(){_get(_getPrototypeOf(t.prototype),"attach",this).call(this),this.mounted||(this.mounted=!0,this.clickHandler=this.getClickHandler(),this.hoverHandler=this.getHoverHandler(),this.domNode.addEventListener("click",this.clickHandler,!1),this.domNode.addEventListener("mouseenter",this.hoverHandler,!1))}},{key:"detach",value:function(){_get(_getPrototypeOf(t.prototype),"detach",this).call(this),this.mounted=!1,this.clickHandler&&(this.domNode.removeEventListener("click",this.clickHandler),this.clickHandler=null)}},{key:"getClickHandler",value:function(){var n=this;return function(y){var h=n.buildEvent("mention-clicked",y);window.dispatchEvent(h),y.preventDefault()}}},{key:"getHoverHandler",value:function(){var n=this;return function(y){var h=n.buildEvent("mention-hovered",y);window.dispatchEvent(h),y.preventDefault()}}},{key:"buildEvent",value:function(n,y){var h=new Event(n,{bubbles:!0,cancelable:!0});return h.value=_extends$1({},this.domNode.dataset),h.event=y,h}}],[{key:"create",value:function(n){var y=_get(_getPrototypeOf(t),"create",this).call(this),h=document.createElement("span");return h.className="ql-mention-denotation-char",h.innerHTML=n.denotationChar,y.appendChild(h),y.innerHTML+=n.value,t.setDataValues(y,n)}},{key:"setDataValues",value:function(n,y){var h=n;return Object.keys(y).forEach(function(g){h.dataset[g]=y[g]}),h}},{key:"value",value:function(n){return n.dataset}}]),t}(Embed$3);MentionBlot.blotName="mention",MentionBlot.tagName="span",MentionBlot.className="mention",Quill.register(MentionBlot);var Mention$1=function(){function d(r,t){var e=this;_classCallCheck(this,d),this.isOpen=!1,this.itemIndex=0,this.mentionCharPos=null,this.cursorPos=null,this.values=[],this.suspendMouseEnter=!1,this.existingSourceExecutionToken=null,this.quill=r,this.options={source:null,renderItem:function(m){return"".concat(m.value)},renderLoading:function(){return null},onSelect:function(m,v){v(m)},mentionDenotationChars:["@"],showDenotationChar:!0,allowedChars:/^[a-zA-Z0-9_]*$/,minChars:0,maxChars:31,offsetTop:2,offsetLeft:0,isolateCharacter:!1,fixMentionsToQuill:!1,positioningStrategy:"normal",defaultMenuOrientation:"bottom",blotName:"mention",dataAttributes:["id","value","denotationChar","link","target","disabled"],linkTarget:"_blank",onOpen:function(){return!0},onBeforeClose:function(){return!0},onClose:function(){return!0},listItemClass:"ql-mention-list-item",mentionContainerClass:"ql-mention-list-container",mentionListClass:"ql-mention-list",spaceAfterInsert:!0,selectKeys:[Keys.ENTER]},_extends$1(this.options,t,{dataAttributes:Array.isArray(t.dataAttributes)?this.options.dataAttributes.concat(t.dataAttributes):this.options.dataAttributes}),this.mentionContainer=document.createElement("div"),this.mentionContainer.className=this.options.mentionContainerClass?this.options.mentionContainerClass:"",this.mentionContainer.style.cssText="display: none; position: absolute;",this.mentionContainer.onmousemove=this.onContainerMouseMove.bind(this),this.options.fixMentionsToQuill&&(this.mentionContainer.style.width="auto"),this.mentionList=document.createElement("ul"),this.mentionList.id="quill-mention-list",r.root.setAttribute("aria-owns","quill-mention-list"),this.mentionList.className=this.options.mentionListClass?this.options.mentionListClass:"",this.mentionContainer.appendChild(this.mentionList),r.on("text-change",this.onTextChange.bind(this)),r.on("selection-change",this.onSelectionChange.bind(this)),r.container.addEventListener("paste",function(){setTimeout(function(){var g=r.getSelection();e.onSelectionChange(g)})}),r.keyboard.addBinding({key:Keys.TAB},this.selectHandler.bind(this)),r.keyboard.bindings[Keys.TAB].unshift(r.keyboard.bindings[Keys.TAB].pop());var n=_createForOfIteratorHelper(this.options.selectKeys),y;try{for(n.s();!(y=n.n()).done;){var h=y.value;r.keyboard.addBinding({key:h},this.selectHandler.bind(this))}}catch(g){n.e(g)}finally{n.f()}r.keyboard.bindings[Keys.ENTER].unshift(r.keyboard.bindings[Keys.ENTER].pop()),r.keyboard.addBinding({key:Keys.ESCAPE},this.escapeHandler.bind(this)),r.keyboard.addBinding({key:Keys.UP},this.upHandler.bind(this)),r.keyboard.addBinding({key:Keys.DOWN},this.downHandler.bind(this))}return _createClass(d,[{key:"selectHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.selectItem(),!1):!0}},{key:"escapeHandler",value:function(){return this.isOpen?(this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList(),!1):!0}},{key:"upHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.prevItem(),!1):!0}},{key:"downHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.nextItem(),!1):!0}},{key:"showMentionList",value:function(){this.options.positioningStrategy==="fixed"?document.body.appendChild(this.mentionContainer):this.quill.container.appendChild(this.mentionContainer),this.mentionContainer.style.visibility="hidden",this.mentionContainer.style.display="",this.mentionContainer.scrollTop=0,this.setMentionContainerPosition(),this.setIsOpen(!0)}},{key:"hideMentionList",value:function(){this.options.onBeforeClose(),this.mentionContainer.style.display="none",this.mentionContainer.remove(),this.setIsOpen(!1),this.quill.root.removeAttribute("aria-activedescendant")}},{key:"highlightItem",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=0;e<this.mentionList.childNodes.length;e+=1)this.mentionList.childNodes[e].classList.remove("selected");if(!(this.itemIndex===-1||this.mentionList.childNodes[this.itemIndex].dataset.disabled==="true")&&(this.mentionList.childNodes[this.itemIndex].classList.add("selected"),this.quill.root.setAttribute("aria-activedescendant",this.mentionList.childNodes[this.itemIndex].id),t)){var n=this.mentionList.childNodes[this.itemIndex].offsetHeight,y=this.mentionList.childNodes[this.itemIndex].offsetTop,h=this.mentionContainer.scrollTop,g=h+this.mentionContainer.offsetHeight;y<h?this.mentionContainer.scrollTop=y:y>g-n&&(this.mentionContainer.scrollTop+=y-g+n)}}},{key:"getItemData",value:function(){var t=this.mentionList.childNodes[this.itemIndex].dataset.link,e=typeof t!="undefined",n=this.mentionList.childNodes[this.itemIndex].dataset.target;return e&&(this.mentionList.childNodes[this.itemIndex].dataset.value='<a href="'.concat(t,'" target=').concat(n||this.options.linkTarget,">").concat(this.mentionList.childNodes[this.itemIndex].dataset.value)),this.mentionList.childNodes[this.itemIndex].dataset}},{key:"onContainerMouseMove",value:function(){this.suspendMouseEnter=!1}},{key:"selectItem",value:function(){var t=this;if(this.itemIndex!==-1){var e=this.getItemData();e.disabled||(this.options.onSelect(e,function(n){t.insertItem(n)}),this.hideMentionList())}}},{key:"insertItem",value:function(t,e){var n=t;if(n!==null){this.options.showDenotationChar||(n.denotationChar="");var y;e?y=this.cursorPos:(y=this.mentionCharPos,this.quill.deleteText(this.mentionCharPos,this.cursorPos-this.mentionCharPos,Quill.sources.USER)),this.quill.insertEmbed(y,this.options.blotName,n,Quill.sources.USER),this.options.spaceAfterInsert?(this.quill.insertText(y+1," ",Quill.sources.USER),this.quill.setSelection(y+2,Quill.sources.USER)):this.quill.setSelection(y+1,Quill.sources.USER),this.hideMentionList()}}},{key:"onItemMouseEnter",value:function(t){if(!this.suspendMouseEnter){var e=Number(t.target.dataset.index);!Number.isNaN(e)&&e!==this.itemIndex&&(this.itemIndex=e,this.highlightItem(!1))}}},{key:"onDisabledItemMouseEnter",value:function(t){this.suspendMouseEnter||(this.itemIndex=-1,this.highlightItem(!1))}},{key:"onItemClick",value:function(t){t.button===0&&(t.preventDefault(),t.stopImmediatePropagation(),this.itemIndex=t.currentTarget.dataset.index,this.highlightItem(),this.selectItem())}},{key:"onItemMouseDown",value:function(t){t.preventDefault(),t.stopImmediatePropagation()}},{key:"renderLoading",value:function(){var t=this.options.renderLoading();if(!!t){if(this.mentionContainer.getElementsByClassName("ql-mention-loading").length>0){this.showMentionList();return}this.mentionList.innerHTML="";var e=document.createElement("div");e.className="ql-mention-loading",e.innerHTML=this.options.renderLoading(),this.mentionContainer.append(e),this.showMentionList()}}},{key:"removeLoading",value:function(){var t=this.mentionContainer.getElementsByClassName("ql-mention-loading");t.length>0&&t[0].remove()}},{key:"renderList",value:function(t,e,n){if(e&&e.length>0){this.removeLoading(),this.values=e,this.mentionList.innerHTML="";for(var y=-1,h=0;h<e.length;h+=1){var g=document.createElement("li");g.id="quill-mention-item-"+h,g.className=this.options.listItemClass?this.options.listItemClass:"",e[h].disabled?(g.className+=" disabled",g.setAttribute("aria-hidden","true")):y===-1&&(y=h),g.dataset.index=h,g.innerHTML=this.options.renderItem(e[h],n),e[h].disabled?g.onmouseenter=this.onDisabledItemMouseEnter.bind(this):(g.onmouseenter=this.onItemMouseEnter.bind(this),g.onmouseup=this.onItemClick.bind(this),g.onmousedown=this.onItemMouseDown.bind(this)),g.dataset.denotationChar=t,this.mentionList.appendChild(attachDataValues(g,e[h],this.options.dataAttributes))}this.itemIndex=y,this.highlightItem(),this.showMentionList()}else this.hideMentionList()}},{key:"nextItem",value:function(){var t=0,e;do{t++,e=(this.itemIndex+t)%this.values.length;var n=this.mentionList.childNodes[e].dataset.disabled==="true";if(t===this.values.length+1){e=-1;break}}while(n);this.itemIndex=e,this.suspendMouseEnter=!0,this.highlightItem()}},{key:"prevItem",value:function(){var t=0,e;do{t++,e=(this.itemIndex+this.values.length-t)%this.values.length;var n=this.mentionList.childNodes[e].dataset.disabled==="true";if(t===this.values.length+1){e=-1;break}}while(n);this.itemIndex=e,this.suspendMouseEnter=!0,this.highlightItem()}},{key:"containerBottomIsNotVisible",value:function(t,e){var n=t+this.mentionContainer.offsetHeight+e.top;return n>window.pageYOffset+window.innerHeight}},{key:"containerRightIsNotVisible",value:function(t,e){if(this.options.fixMentionsToQuill)return!1;var n=t+this.mentionContainer.offsetWidth+e.left,y=window.pageXOffset+document.documentElement.clientWidth;return n>y}},{key:"setIsOpen",value:function(t){this.isOpen!==t&&(t?this.options.onOpen():this.options.onClose(),this.isOpen=t)}},{key:"setMentionContainerPosition",value:function(){this.options.positioningStrategy==="fixed"?this.setMentionContainerPosition_Fixed():this.setMentionContainerPosition_Normal()}},{key:"setMentionContainerPosition_Normal",value:function(){var t=this,e=this.quill.container.getBoundingClientRect(),n=this.quill.getBounds(this.mentionCharPos),y=this.mentionContainer.offsetHeight,h=this.options.offsetTop,g=this.options.offsetLeft;if(this.options.fixMentionsToQuill){var m=0;this.mentionContainer.style.right="".concat(m,"px")}else g+=n.left;if(this.containerRightIsNotVisible(g,e)){var v=this.mentionContainer.offsetWidth+this.options.offsetLeft,c=e.width;g=c-v}if(this.options.defaultMenuOrientation==="top"){if(this.options.fixMentionsToQuill?h=-1*(y+this.options.offsetTop):h=n.top-(y+this.options.offsetTop),h+e.top<=0){var a=this.options.offsetTop;this.options.fixMentionsToQuill?a+=e.height:a+=n.bottom,h=a}}else if(this.options.fixMentionsToQuill?h+=e.height:h+=n.bottom,this.containerBottomIsNotVisible(h,e)){var o=this.options.offsetTop*-1;this.options.fixMentionsToQuill||(o+=n.top),h=o-y}h>=0?this.options.mentionContainerClass.split(" ").forEach(function(i){t.mentionContainer.classList.add("".concat(i,"-bottom")),t.mentionContainer.classList.remove("".concat(i,"-top"))}):this.options.mentionContainerClass.split(" ").forEach(function(i){t.mentionContainer.classList.add("".concat(i,"-top")),t.mentionContainer.classList.remove("".concat(i,"-bottom"))}),this.mentionContainer.style.top="".concat(h,"px"),this.mentionContainer.style.left="".concat(g,"px"),this.mentionContainer.style.visibility="visible"}},{key:"setMentionContainerPosition_Fixed",value:function(){var t=this;this.mentionContainer.style.position="fixed",this.mentionContainer.style.height=null;var e=this.quill.container.getBoundingClientRect(),n=this.quill.getBounds(this.mentionCharPos),y={left:e.left+n.left,top:e.top+n.top,width:0,height:n.height},h=this.options.fixMentionsToQuill?e:y,g=this.options.offsetTop,m=this.options.offsetLeft;if(this.options.fixMentionsToQuill){var v=h.right;this.mentionContainer.style.right="".concat(v,"px")}else m+=h.left,m+this.mentionContainer.offsetWidth>document.documentElement.clientWidth&&(m-=m+this.mentionContainer.offsetWidth-document.documentElement.clientWidth);var c=h.top,a=document.documentElement.clientHeight-(h.top+h.height),o=this.mentionContainer.offsetHeight<=a,i=this.mentionContainer.offsetHeight<=c,p;this.options.defaultMenuOrientation==="top"&&i?p="top":this.options.defaultMenuOrientation==="bottom"&&o?p="bottom":p=a>c?"bottom":"top",p==="bottom"?(g=h.top+h.height,o||(this.mentionContainer.style.height=a-3+"px"),this.options.mentionContainerClass.split(" ").forEach(function(_){t.mentionContainer.classList.add("".concat(_,"-bottom")),t.mentionContainer.classList.remove("".concat(_,"-top"))})):(g=h.top-this.mentionContainer.offsetHeight,i||(this.mentionContainer.style.height=c-3+"px",g=3),this.options.mentionContainerClass.split(" ").forEach(function(_){t.mentionContainer.classList.add("".concat(_,"-top")),t.mentionContainer.classList.remove("".concat(_,"-bottom"))})),this.mentionContainer.style.top="".concat(g,"px"),this.mentionContainer.style.left="".concat(m,"px"),this.mentionContainer.style.visibility="visible"}},{key:"getTextBeforeCursor",value:function(){var t=Math.max(0,this.cursorPos-this.options.maxChars),e=this.quill.getText(t,this.cursorPos-t);return e}},{key:"onSomethingChange",value:function(){var t=this,e=this.quill.getSelection();if(e!=null){this.cursorPos=e.index;var n=this.getTextBeforeCursor(),y=getMentionCharIndex(n,this.options.mentionDenotationChars),h=y.mentionChar,g=y.mentionCharIndex;if(hasValidMentionCharIndex(g,n,this.options.isolateCharacter)){var m=this.cursorPos-(n.length-g);this.mentionCharPos=m;var v=n.substring(g+h.length);if(v.length>=this.options.minChars&&hasValidChars(v,this.getAllowedCharsRegex(h))){this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.renderLoading();var c={abandoned:!1};this.existingSourceExecutionToken=c,this.options.source(v,function(a,o){c.abandoned||(t.existingSourceExecutionToken=null,t.renderList(h,a,o))},h)}else this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList()}else this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList()}}},{key:"getAllowedCharsRegex",value:function(t){return this.options.allowedChars instanceof RegExp?this.options.allowedChars:this.options.allowedChars(t)}},{key:"onTextChange",value:function(t,e,n){n==="user"&&this.onSomethingChange()}},{key:"onSelectionChange",value:function(t){t&&t.length===0?this.onSomethingChange():this.hideMentionList()}},{key:"openMenu",value:function(t){var e=this.quill.getSelection(!0);this.quill.insertText(e.index,t),this.quill.blur(),this.quill.focus()}}]),d}();Quill.register("modules/mention",Mention$1);const Embed$2=Quill$1.import("blots/embed");class Mention extends Embed$2{static create(r){const t=typeof r=="object"?r.value:r,e=super.create(t);return e.setAttribute("title",t.trim()),e.setAttribute("href",this.BASE_URL+t),e.textContent=`@${t} `,e}static value(r){return r.textContent.substr(1)}}Mention.blotName="mention",Mention.className="ql-mention",Mention.tagName="A",Mention.BASE_URL="/",Quill$1.register({"modules/mention":Mention$1}),Quill$1.register(Mention);var docsId$1=/id="docs\-internal\-guid/,styles$1={BOLD:"700",ITALIC:"italic",UNDERLINE:"underline",STRIKETHROUGH:"line-through",SUPERSCRIPT:"super",SUBSCRIPT:"sub"},elements$1={ANCHOR:"a",BOLD:"strong",ITALIC:"em",UNDERLINE:"u",STRIKETHROUGH:"del",SUPERSCRIPT:"sup",SUBSCRIPT:"sub"},headers$1=["H1","H2","H3","H4","H5","H6"],constants$1={docsId:docsId$1,styles:styles$1,elements:elements$1,headers:headers$1},parseHTML$2=function(d){var r=void 0;if(typeof DOMParser!="undefined"){var t=new DOMParser;r=t.parseFromString(d,"text/html")}else r=document.implementation.createHTMLDocument(""),r.documentElement.innerHTML=d;return r.body},_typeof$1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};function _toConsumableArray(d){if(Array.isArray(d)){for(var r=0,t=Array(d.length);r<d.length;r++)t[r]=d[r];return t}else return Array.from(d)}var constants=constants$1,parseHTML$1=parseHTML$2,docsId=constants.docsId,elements=constants.elements,headers=constants.headers,styles=constants.styles,wrapNodeAnchor=function d(r,t){var e=document.createElement(elements.ANCHOR);return e.href=t,e.appendChild(r.cloneNode(!0)),e},wrapNodeInline=function d(r,t){var e=document.createElement(t);return e.appendChild(r.cloneNode(!0)),e},wrapNode=function d(r,t){var e=t.cloneNode(!0);return r&&(r.style&&r.style.fontWeight===styles.BOLD&&(e=wrapNodeInline(e,elements.BOLD)),r.style&&r.style.fontStyle===styles.ITALIC&&(e=wrapNodeInline(e,elements.ITALIC)),r.style&&r.style.textDecoration===styles.UNDERLINE&&(e=wrapNodeInline(e,elements.UNDERLINE)),r.style&&r.style.textDecoration===styles.STRIKETHROUGH&&(e=wrapNodeInline(e,elements.STRIKETHROUGH)),r.style&&r.style.verticalAlign===styles.SUPERSCRIPT&&(e=wrapNodeInline(e,elements.SUPERSCRIPT)),r.style&&r.style.verticalAlign===styles.SUBSCRIPT&&(e=wrapNodeInline(e,elements.SUBSCRIPT))),e},applyBlockStyles=function d(r){var t=r.cloneNode(!0),e=document.createTextNode(t.textContent),n=document.createTextNode("");return t.childNodes[0]&&t.childNodes[0].style&&(n=t.childNodes[0]),t.childNodes[0]&&t.childNodes[0].nodeName==="A"&&(e=wrapNodeAnchor(e.cloneNode(!0),t.childNodes[0].href),n=t.childNodes[0].childNodes[0]),e=wrapNode(n,e),e},applyInlineStyles=function d(r){var t=r.cloneNode(!0),e=document.createTextNode(t.textContent),n=t;return t.nodeName==="A"&&(e=wrapNodeAnchor(e,t.href),t.childNodes[0]&&t.childNodes[0].style&&(n=t.childNodes[0])),e=wrapNode(n,e),e},getCleanNode=function d(r){if(r.childNodes&&(r.childNodes.length<=1||r.nodeName==="OL"||r.nodeName==="UL")){var t=function(){var y=null,h=document.createTextNode(r.textContent);if(r.nodeName==="UL"||r.nodeName==="OL"||r.nodeName==="LI"){y=document.createElement(r.nodeName),h=document.createDocumentFragment();for(var g=[],m=0;m<r.childNodes.length;m++)g.push.apply(g,_toConsumableArray(d(r.childNodes[m])));g.map(function(v){return h.appendChild(v)})}else headers.indexOf(r.nodeName)!==-1?(y=document.createElement(r.nodeName),h=applyInlineStyles(r.childNodes[0])):r.nodeName==="P"?(y=document.createElement("p"),h=applyBlockStyles(r)):r.nodeName==="BR"?h=r:(y=document.createElement("span"),h=applyInlineStyles(r));return y?(y.appendChild(h),{v:[y]}):{v:[r.cloneNode(!0)]}}();if((typeof t=="undefined"?"undefined":_typeof$1(t))==="object")return t.v}if(r.childNodes){for(var e=[],n=0;n<r.childNodes.length;n++)e.push.apply(e,_toConsumableArray(d(r.childNodes[n])));return e}return[r]},filterNode=function d(r){return r.nodeType!==8},getCleanDocument=function d(r){var t=document.createElement("body"),e=r.childNodes,n=Array.from(e).filter(filterNode),y=[],h=!0,g=!1,m=void 0;try{for(var v=n[Symbol.iterator](),c;!(h=(c=v.next()).done);h=!0){var a=c.value;y.push.apply(y,_toConsumableArray(getCleanNode(a)))}}catch(i){g=!0,m=i}finally{try{!h&&v.return&&v.return()}finally{if(g)throw m}}for(var o=0;o<y.length;o++)t.appendChild(y[o].cloneNode(!0));return t},docsSoap$1=function(d){if(typeof d!="string")throw new Error("Expected 'clipboardContent' to be a string of HTML, received "+(typeof d=="undefined"?"undefined":_typeof$1(d)));if(d.length<=0)throw new Error("Expected clipboardContent to have content, received empty string");return d.match(docsId)?getCleanDocument(parseHTML$1(d.replace(/(\r\n|\n|\r)/,""))).outerHTML:parseHTML$1(d.replace(/(\r\n|\n|\r)/,"")).outerHTML};const docsSoap=docsSoap$1,parseHTML=parseHTML$2;var docsSoap_1={default:docsSoap,docsSoap,parseHTML};const cleanGoogleDocsFuss=d=>d.replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g,"").replace('<br class="Apple-interchange-newline">',"").replace("<p>","").replace("</p>","");var Clipboard=Quill$1.import("modules/clipboard");class Clipboard2 extends Clipboard{onCapturePaste(r){if(r.defaultPrevented||!this.quill.isEnabled())return;r.preventDefault();const t=this.quill.getSelection(!0);if(t==null)return;let e=r.clipboardData.getData("text/html");e=e&&docsSoap_1.docsSoap(cleanGoogleDocsFuss(e).trim()).replace("<strong>","<b>").replace("</strong>","</b>");debugger;const n=r.clipboardData.getData("text/plain"),y=Array.from(r.clipboardData.files||[]);!e&&y.length>0?this.quill.uploader.upload(t,y):this.onPaste(t,{html:e,text:n})}}Quill$1.register({"modules/clipboard":Clipboard2},!0);let Cursor=Quill$1.import("blots/cursor");const Embed$1=Quill$1.import("blots/embed"),Inline=Quill$1.import("blots/inline"),getTagUrl=d=>`/tags/${d}/trending`;class Hashtag extends Embed$1{static create(r){let t=super.create(r);return t.setAttribute("href",getTagUrl(r)),t.setAttribute("spellcheck",!1),t.textContent=`#${r} `,t}static formats(r){return r.getAttribute("href").substr(this.BASE_URL.length)}format(r,t){this.domNode.setAttribute("href",getTagUrl(t))}static value(r){return r.textContent.substr(1)}}Hashtag.blotName="hashtag",Hashtag.className="ql-hashtag",Hashtag.tagName="A",Hashtag.BASE_URL="#";class HashtagInline extends Inline{static create(r){let t=super.create(r);return t.setAttribute("href",getTagUrl(r)),t.setAttribute("spellcheck",!1),t}static formats(r){return r.getAttribute("href").substr(this.BASE_URL.length)}format(r,t){this.domNode.setAttribute("href",getTagUrl(t))}}HashtagInline.blotName="hashtag",HashtagInline.className="ql-hashtag",HashtagInline.tagName="A",HashtagInline.allowedChildren=[Text,Cursor],HashtagInline.BASE_URL="#",Quill$1.register(HashtagInline),Quill$1.register(Hashtag);const BubbleTheme=Quill$1.import("themes/bubble");class ExtendBubbleTheme extends BubbleTheme{constructor(r,t){super(r,t),r.root.addEventListener("click",e=>{this.setAnchorIcon()})}setAnchorIcon(){const r=this.quill.theme.tooltip.root.querySelector(".ql-mention");r.innerHTML="@"}}Quill$1.register("themes/bubble",ExtendBubbleTheme);class Loader extends HTMLElement{constructor(){super();const r=document.createElement("div"),t=document.createElement("style"),e="#56b1a3",n=`
      <svg class="circular-loader"viewBox="25 25 50 50" >
        <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="${e}" stroke-width="2" />
      </svg>
    `;r.setAttribute("class","loader"),r.innerHTML=n,t.textContent=`
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
    `;const y=this.attachShadow({mode:"open"});y.appendChild(r),y.appendChild(t)}}customElements.define("green-loader",Loader);const EDITOR_LINK_STYLES=`
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
`;class EditorLinkCard extends HTMLElement{constructor(){super();const r=document.createElement("a"),t=document.createElement("div"),e=document.createElement("img"),n=document.createElement("div"),y=document.createElement("div"),h=document.createElement("img"),g=document.createElement("span"),m=document.createElement("span"),v=document.createElement("div"),c=document.createElement("span"),a=document.createElement("div"),o=document.createElement("a"),i=document.createElement("style"),p=this.attachShadow({mode:"open"});let _="",f="",u="",l="",b="";this.hasAttribute("img")&&(_=this.sanitizeAttributes("img")),this.hasAttribute("description")&&(f=this.sanitizeAttributes("description")),this.hasAttribute("url")&&(u=this.sanitizeAttributes("url")),this.hasAttribute("favicon")&&(l=this.sanitizeAttributes("favicon")),this.hasAttribute("sitename")&&(b=this.sanitizeAttributes("sitename")),i.textContent=EDITOR_LINK_STYLES,r.setAttribute("class",`editor-link-card ${_?"":"no-image"}`),t.setAttribute("class","card-image"),n.setAttribute("class","card-container"),y.setAttribute("class","favicon-and-name-container"),h.setAttribute("class","favicon"),g.setAttribute("class","sitename"),m.setAttribute("class","card-description"),v.setAttribute("class","web-link"),a.setAttribute("class","link-icon"),o.setAttribute("class","link-card-remove"),o.onclick=s=>{this._onRemove(s)},r.href=u,e.src=_,e.setAttribute("referrerpolicy","origin-when-cross-origin"),e.onerror=function(s){e.remove(),r.classList.add("no-image")},h.src=l,g.innerText=b,m.innerText=f,c.innerText=u,v.appendChild(a),v.appendChild(c),t.appendChild(e),_&&r.appendChild(t),l&&y.appendChild(h),b&&y.appendChild(g),(l||b)&&n.appendChild(y),n.appendChild(m),n.appendChild(v),p.appendChild(r),p.appendChild(i),r.appendChild(t),r.appendChild(n),r.appendChild(o),this._onRemove=s=>{const x=this.parentNode;this.parentNode.parentNode.removeChild(x),s.preventDefault()}}sanitizeAttributes(r){return this.getAttribute(r)==="undefined"?void 0:this.getAttribute(r)}}customElements.define("editor-link-card",EditorLinkCard);class MemoLinkCard extends HTMLElement{constructor(){super();const r=document.createElement("a"),t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("span"),y=document.createElement("div"),h=document.createElement("span"),g=document.createElement("div"),m=document.createElement("a"),v=document.createElement("style"),c=document.createElement("img"),a=this.attachShadow({mode:"open"});let o="",i="",p="",_="";this.hasAttribute("displayname")&&(o=this.sanitizeAttributes("displayname")),this.hasAttribute("title")&&(i=this.sanitizeAttributes("title")),this.hasAttribute("data-cover-image")&&(p=this.sanitizeAttributes("data-cover-image")),this.hasAttribute("data-cover-orientation")&&(_=this.sanitizeAttributes("data-cover-orientation")),v.textContent=EDITOR_LINK_STYLES,r.setAttribute("class","editor-link-card memo-link-card"),r.classList.add("memo-link-card"),e.setAttribute("class","card-container"),n.setAttribute("class","card-description"),y.setAttribute("class","web-link"),t.setAttribute("class",`card-image ${_}`),g.setAttribute("class","user-icon"),m.setAttribute("class","link-card-remove"),m.onclick=()=>{this._onRemove()},c.src=p,c.setAttribute("referrerpolicy","origin-when-cross-origin"),c.onerror=function(f){c.remove(),r.classList.add("no-image")},n.innerText=i,h.innerText=o,y.appendChild(g),y.appendChild(h),e.appendChild(n),e.appendChild(y),a.appendChild(r),a.appendChild(v),t.appendChild(c),p&&r.appendChild(t),r.appendChild(e),r.appendChild(m),this._onRemove=()=>{const f=this.parentNode;this.parentNode.parentNode.removeChild(f)}}sanitizeAttributes(r){return this.getAttribute(r)==="undefined"?void 0:this.getAttribute(r)}}customElements.define("memo-link-card",MemoLinkCard);const Embed=Quill$1.import("blots/embed");class Hyperlink extends Embed{static create(r){const t=super.create(r);t.setAttribute("title",r.trim()),t.setAttribute("href",r),t.setAttribute("target","_blank");let e="";try{e=new URL(r).hostname}catch{e=r}return t.textContent=e,t}static value(r){return r.textContent}}Hyperlink.blotName="custom-hyperlink",Hyperlink.className="ql-hyperlink",Hyperlink.tagName="A",Quill$1.register(Hyperlink),window.Quill=Quill$1;const getLastInsertedChar=d=>{let r=d.ops;if(!r||r.length<1)return;let t=r.length-1,e=r[t];for(;!e.insert&&t>0;)t--,e=r[t];return e.insert&&e.insert.slice&&e.insert.slice(-1)};var render$4=function(){var d=this,r=d.$createElement,t=d._self._c||r;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23.54",height:"23.54",viewBox:"0 0 23.54 23.54"}},[t("g",{attrs:{id:"Group_3211","data-name":"Group 3211",transform:"translate(-245 -74)"}},[t("circle",{attrs:{id:"Oval",cx:"11.77",cy:"11.77",r:"11.77",transform:"translate(245 74)",fill:"rgba(84,84,88,0.65)"}}),t("path",{attrs:{id:"Symbol",d:"M1.29-.92a.619.619,0,0,0,0,.855.623.623,0,0,0,.855,0L4.271-2.182,6.393-.065a.61.61,0,0,0,.855,0,.614.614,0,0,0,0-.855L5.135-3.041,7.252-5.163a.614.614,0,0,0,0-.855.61.61,0,0,0-.855,0L4.271-3.906,2.149-6.027a.623.623,0,0,0-.855,0,.624.624,0,0,0,0,.86L3.411-3.041Z",transform:"translate(252.879 89.195)",fill:"rgba(235,235,245,0.6)"}})])])},staticRenderFns$4=[];function normalizeComponent(d,r,t,e,n,y,h,g){var m=typeof d=="function"?d.options:d;r&&(m.render=r,m.staticRenderFns=t,m._compiled=!0),e&&(m.functional=!0),y&&(m._scopeId="data-v-"+y);var v;if(h?(v=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(o=__VUE_SSR_CONTEXT__),n&&n.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(h)},m._ssrRegister=v):n&&(v=g?function(){n.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:n),v)if(m.functional){m._injectStyles=v;var c=m.render;m.render=function(i,p){return v.call(p),c(i,p)}}else{var a=m.beforeCreate;m.beforeCreate=a?[].concat(a,v):[v]}return{exports:d,options:m}}const __vue2_script$4={},__cssModules$4={};var __component__$4=normalizeComponent(__vue2_script$4,render$4,staticRenderFns$4,!1,__vue2_injectStyles$4,null,null,null);function __vue2_injectStyles$4(d){for(let r in __cssModules$4)this[r]=__cssModules$4[r]}var IconClose=function(){return __component__$4.exports}(),render$3=function(){var d=this,r=d.$createElement,t=d._self._c||r;return t("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 4C6.10457 4 7 3.10457 7 2C7 0.895431 6.10457 0 5 0C3.89543 0 3 0.895431 3 2C3 3.10457 3.89543 4 5 4ZM13 4C14.1046 4 15 3.10457 15 2C15 0.895431 14.1046 0 13 0C11.8954 0 11 0.895431 11 2C11 3.10457 11.8954 4 13 4ZM7 9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7C6.10457 7 7 7.89543 7 9ZM13 11C14.1046 11 15 10.1046 15 9C15 7.89543 14.1046 7 13 7C11.8954 7 11 7.89543 11 9C11 10.1046 11.8954 11 13 11ZM7 16C7 17.1046 6.10457 18 5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14C6.10457 14 7 14.8954 7 16ZM13 18C14.1046 18 15 17.1046 15 16C15 14.8954 14.1046 14 13 14C11.8954 14 11 14.8954 11 16C11 17.1046 11.8954 18 13 18Z",fill:"#3A3A3C"}})])},staticRenderFns$3=[];const __vue2_script$3={},__cssModules$3={};var __component__$3=normalizeComponent(__vue2_script$3,render$3,staticRenderFns$3,!1,__vue2_injectStyles$3,null,null,null);function __vue2_injectStyles$3(d){for(let r in __cssModules$3)this[r]=__cssModules$3[r]}var IconOrder=function(){return __component__$3.exports}();const BULLET_DISPLAY_TYPES={bullet:"bullet",numeric:"numeric"},composerConstants={COMPOSER_URL_REGEX:/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z()]{2,6}\b([-a-zA-Z()@:%_+.~#?&/=]*)/g,COMPOSER_HTML_REGEX:/(<([^>]+)>)/g,URL_REGEX:new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z()]{2,6}\b([-a-zA-Z()@:%_+.~#?&//=]*)/,"g"),MESSAGES:{ADD_NEW_BULLET:"ADD_NEW_BULLET",FORMAT_TEXT:"FORMAT_TEXT",REMOVE_BULLET:"REMOVE_BULLET",ON_BULLET_REORDER:"ON_BULLET_REORDER",ON_BULLET_CHANGE:"ON_BULLET_CHANGE",ON_BULLET_FOCUS:"ON_BULLET_FOCUS",ON_BULLET_BLUR:"ON_BULLET_BLUR",ON_SELECTION_CHANGE:"ON_SELECTION_CHANGE",ON_CONTENT_CHANGE:"ON_CONTENT_CHANGE",ON_TITLE_CHANGE:"ON_TITLE_CHANGE",SET_CONTENT:"SET_CONTENT",SET_TITLE_CONTENT:"SET_TITLE_CONTENT",GET_CONTENT:"GET_CONTENT",GET_TITLE_CONTENT:"GET_TITLE_CONTENT",INSERT_IMAGE:"INSERT_IMAGE",SET_BULLET_DISPLAY_TYPE:"SET_BULLET_DISPLAY_TYPE",INSERT_LINK:"INSERT_LINK",ON_MENTION:"ON_MENTION",ON_HASHTAG:"ON_HASHTAG",ON_MENTION_END:"ON_MENTION_END",ON_HASHTAG_END:"ON_HASHTAG_END",INSERT_MENTION:"INSERT_MENTION",INSERT_HASHTAG:"INSERT_HASHTAG",INSERT_TEXT:"INSERT_TEXT",INSERT_MENTION_TEXT:"INSERT_MENTION_TEXT",INSERT_HASHTAG_TEXT:"INSERT_HASHTAG_TEXT",SET_EDITOR_COLOR:"SET_EDITOR_COLOR",EDITOR_LOADED:"EDITOR_LOADED",ON_TITLE_FOCUS:"ON_TITLE_FOCUS",ON_TITLE_BLUR:"ON_TITLE_BLUR",BLUR_EDITOR:"BLUR_EDITOR",FOCUS_EDITOR:"FOCUS_EDITOR",CLEAR_EDITOR:"CLEAR_EDITOR",INSERT_MEMO_LINK:"INSERT_MEMO_LINK"},SITE_INFO:"https://resizer.memodapp.com/v1/preview",IMAGE_RESIZER:"https://resizer.memodapp.com/v1/image",RESIZE_WIDTH:667,RESIZE_HEIGHT:500,RESIZE_FIT:"cover",BULLETS:[],TITLE:".text-box.title",MAIN_LIST:".main-list",MENTION:"MENTION",HASHTAG:"HASHTAG",CHAR_LIMIT:280,BULLET_LIMIT:10,EVENT_TO_TRIGGER:"",EVENT_WORD_INDEX:0,EVENT_WORD_LENGTH:0,ACTIVE_PART:"",current_selection:null,currentBulletDisplayType:BULLET_DISPLAY_TYPES.bullet},MAX_BULLET_LENGTH=10,{MESSAGES,EVENT_TO_TRIGGER,MENTION,HASHTAG}=composerConstants;function emitCurrentSelectionAndFormat(d){MESSAGES.ON_SELECTION_CHANGE}function emitBulletOnBlur(){MESSAGES.ON_BULLET_BLUR}var render$2=function(){var d=this,r=d.$createElement,t=d._self._c||r;return t("li",{staticClass:"relative composer-item",attrs:{id:"editor_"+d.bullet.id,"data-testid":"composer-item","new-content":d.bullet.id?"true":"false"}},[t("div",{staticClass:"bullet",attrs:{"is-active-bullet":d.isFocused?"true":"false"}},[t("div",{staticClass:"bullet-container"},[t("div",{staticClass:"bullet-order"},[t("div",{staticClass:"indicator-container"},[d.isDisplayType(d.BULLET_DISPLAY_TYPES.bullet)?t("span",{staticClass:"inline-block bullet-indicator indicator",attrs:{"data-active":d.isFocused?"true":"false"}}):t("span",{staticClass:"bullet-indicator indicator-number",attrs:{"data-active":d.isFocused?"true":"false"}},[d._v(" "+d._s(d.index+1)+" ")])]),t("IconOrder",{staticClass:"bullet-order-img"})],1),t("div",{ref:"editorRef",class:"li-input editor_"+d.bullet.id}),t("div",{staticClass:"bullet-char-counter"},[d._v(" "+d._s(d.chartCount(d.bullet.rawText))+"/ "+d._s(d.CHAR_LIMIT)+" ")])])]),d.isFocused&&d.showRemove?t("div",{staticClass:"remove-bullet",attrs:{"data-testid":"btn-remove-bullet"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),d.$emit("removed",d.bullet.id)}}},[t("IconClose")],1):d._e()])},staticRenderFns$2=[],ComposerItem_vue_vue_type_style_index_0_lang="";const __sfc_main$1={};__sfc_main$1.props={bullet:{type:Object,default(){return{}}},showRemove:{type:Boolean,default:!1},placeholder:{type:String,default:"Add Memo bullet here"},suggestions:{type:Array,default(){return[]}},displayType:{type:String,default:BULLET_DISPLAY_TYPES.bullet},index:{type:Number,default:0},isFocused:{type:Boolean,default:!1}},__sfc_main$1.setup=(d,r)=>{let t=0;const{CHAR_LIMIT:e,COMPOSER_URL_REGEX:n,COMPOSER_HTML_REGEX:y}=composerConstants,h=r.emit,g=d,m=compositionApi.ref(),v=compositionApi.inject("suggestionQuerySearch",async()=>{}),c=compositionApi.reactive({CHAR_LIMIT:e,editor:null,currentSelection:null}),a=compositionApi.inject("eventHub",{on:()=>{},emit:()=>{}}),o=T=>g.displayType===T;compositionApi.onMounted(()=>{c.editor=new Quill$1(m.value,{modules:{toolbar:["bold","italic","underline","blockquote","link","mention"],mention:{mentionDenotationChars:["@"],async source(w,E,O){const k=await v(w,O);E(k,w)},renderItem(w){return`<div class="inner-item">
            <div class="avatar">
              <img src="/assets/img/icons/avatar.svg" alt="user" />
            </div>
            <span>
              ${w.value}
            </span>
          </div>`},keyboard:{bindings:{"list autofill":{prefix:/^\s*()$/}}}},keyboard:{bindings:{"list autofill":{prefix:/^\s*()$/}}}},theme:"bubble",placeholder:g.placeholder}),c.editor.on(Quill$1.events.SELECTION_CHANGE,w=>{w&&setTimeout(()=>{h("focus",g.bullet.id,w)},200)}),c.editor.on(Quill$1.events.TEXT_CHANGE,w=>{const E=getLastInsertedChar(w);[" ",`
`].includes(E)&&_(c.editor,w),i(),compositionApi.nextTick(()=>{c.currentSelection=c.editor.getSelection(),emitCurrentSelectionAndFormat(c.currentSelection)})}),c.editor.root.addEventListener("blur",()=>{c.editor.disable(),_(c.editor,c.editor.getLength())}),g.bullet.prettyText&&(c.editor.root.innerHTML=g.bullet.prettyText.trim());let T=Quill$1.import("delta");c.editor.clipboard.addMatcher(Node.ELEMENT_NODE,(w,E)=>E.compose(new T().retain(E.length()))),c.editor.root.addEventListener("paste",w=>{const{clipboardData:E,target:O}=w,I=(E||window.clipboardData).getData("text")||"",S=I.match(n);O.dataset.link||S&&(S&&I.length==S[0].length&&[...new Set(S)].forEach((q,F)=>{let{index:U,length:R}=c.editor.getSelection(!0)||{index:0};c.editor.deleteText(U-q.length,q.length+F),c.editor.setSelection(c.editor.getLength(),0,"user"),setTimeout(()=>{c.editor.setSelection(U-q.length,q.length,"user"),P.insertLink(q),c.editor.setSelection(U,0,"user")},100)}),setTimeout(()=>{c.editor.setSelection(c.editor.getLength()+1,0,"user")}))}),a.on(`bullet:${g.bullet.id}`,(w,E)=>{A(w)})});const i=()=>{c.text=c.editor.getText(),c.html=c.editor.root.innerHTML,h("text-changed",{text:c.text,html:c.html,id:g.bullet.id})};compositionApi.onBeforeUnmount(()=>{compositionApi.toRaw(c.editor).off("text-change"),compositionApi.toRaw(c.editor).off("selection-change")});function p(T,w,E=1){let O=0;const[k]=w.ops;return k.retain&&(O=k.retain),c.editor.getText(t+E,O).trim()}function _(T,w){let E,O,k=!1;if(typeof w=="number")E=f(T,w,0),O=w,k=!0;else{E=p(T,w,0);const[I]=w.ops;O=I.retain}if(E.match(n)){const I=E.match(n),S=I[I.length-1],B=E.slice(-S.length);l(B,O,k)}else setTimeout(()=>{c.editor.enable()},0)}function f(T,w,E=1){return T.getText(t+E,w).trim()}function u(T){return T?T.replace(y,"").length:0}function l(T,w,E){const O=compositionApi.toRaw(c.editor),k=T.length;let I=E?O.getLength()-(w-2):O.getLength()-(k+2);if(k>0)if(E){const S=O.getContents(),q=S.ops[S.ops.length-1].insert.replace(n,"");q.length==0?S.ops.pop():S.ops[S.ops.length-1].insert=q.replace(`
`,""),O.setContents(S),O.insertText(O.getLength()-1," "),I=O.getLength()-1,b(O,I,T),setTimeout(()=>{O.insertText(O.getLength()-1," "),O.enable()},200)}else O.setSelection(I),O.deleteText(I,k,"api"),b(O,I,T),O.setSelection(O.getLength())}function b(T,w,E){const O=E.includes("http")?E:`https://${E}`;T.insertEmbed(w,"custom-hyperlink",O,"silent")}function s(){return c.editor.getFormat()}function x(T){const E=s()[T];c.editor.format(T,!E),h("selection-format",s())}function M(){const T=m.value.$el.querySelector(".ql-editor"),w="code";c.editor.setSelection(0,c.editor.getLength(),"silent"),Array.from(T.classList).includes("quoted-bullet")?(T.classList.remove("quoted-bullet"),x(w)):(T.classList.add("quoted-bullet"),x(w)),c.editor.setSelection(c.editor.getLength())}const P={insertText(T){c.editor.insertText(c.currentSelection||0,T)},insertImages(T){if(Array.isArray(T)){const{endpoint:w,fit:E,height:O,width:k}=resizerConfig;T.forEach(I=>{const{url:S,attributes:B}=I,q=c.currentSelection?c.currentSelection.index:0,F=B.width||k,U=B.height||O,R=B.orientation||"portrait",D=S.replace("//app","/app").replace("//tmp","/tmp"),N=`${S.includes("https://")?w+"/":""}/${D}?w=${F}&h=${U}&fit=${E}&orientation=${R}`;c.editor.insertEmbed(q,"memod-image",N),c.editor.setSelection(c.editor.getLength(),"user")})}},insertMemoLink(T){c.editor.insertText(c.editor.getLength()," "),c.editor.insertEmbed(c.currentSelection||0,"memo-card-link",T),c.editor.insertText(c.editor.getLength()," ")},insertLink(T){c.editor.insertEmbed(c.currentSelection||0,"memod-link",T),c.editor.insertText(c.editor.getLength()," ")},insertMention(T){c.editor.insertEmbed(c.currentSelection,"mention",T)},formatSelection(T){T==="code"?M():x(T)},blur(){var T;(T=m.value)==null||T.blur()}},A=({name:T,params:w})=>{const E=P[T];E&&E(w)};return Object.assign({BULLET_DISPLAY_TYPES,CHAR_LIMIT:e,editorRef:m,isDisplayType:o,chartCount:u},fe({},P))},__sfc_main$1.components=Object.assign({IconOrder,IconClose},__sfc_main$1.components);const __vue2_script$2=__sfc_main$1,__cssModules$2={};var __component__$2=normalizeComponent(__vue2_script$2,render$2,staticRenderFns$2,!1,__vue2_injectStyles$2,null,null,null);function __vue2_injectStyles$2(d){for(let r in __cssModules$2)this[r]=__cssModules$2[r]}var ComposerItem=function(){return __component__$2.exports}();/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ownKeys(d,r){var t=Object.keys(d);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(d);r&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(d,n).enumerable})),t.push.apply(t,e)}return t}function _objectSpread2(d){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(d,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(d,e,Object.getOwnPropertyDescriptor(t,e))})}return d}function _typeof(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(r){return typeof r}:_typeof=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_typeof(d)}function _defineProperty(d,r,t){return r in d?Object.defineProperty(d,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):d[r]=t,d}function _extends(){return _extends=Object.assign||function(d){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(d[e]=t[e])}return d},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(d,r){if(d==null)return{};var t={},e=Object.keys(d),n,y;for(y=0;y<e.length;y++)n=e[y],!(r.indexOf(n)>=0)&&(t[n]=d[n]);return t}function _objectWithoutProperties(d,r){if(d==null)return{};var t=_objectWithoutPropertiesLoose(d,r),e,n;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(d);for(n=0;n<y.length;n++)e=y[n],!(r.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,e)||(t[e]=d[e]))}return t}var version="1.15.0";function userAgent(d){if(typeof window!="undefined"&&window.navigator)return!!navigator.userAgent.match(d)}var IE11OrLess=userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Edge=userAgent(/Edge/i),FireFox=userAgent(/firefox/i),Safari=userAgent(/safari/i)&&!userAgent(/chrome/i)&&!userAgent(/android/i),IOS=userAgent(/iP(ad|od|hone)/i),ChromeForAndroid=userAgent(/chrome/i)&&userAgent(/android/i),captureMode={capture:!1,passive:!1};function on(d,r,t){d.addEventListener(r,t,!IE11OrLess&&captureMode)}function off(d,r,t){d.removeEventListener(r,t,!IE11OrLess&&captureMode)}function matches(d,r){if(!!r){if(r[0]===">"&&(r=r.substring(1)),d)try{if(d.matches)return d.matches(r);if(d.msMatchesSelector)return d.msMatchesSelector(r);if(d.webkitMatchesSelector)return d.webkitMatchesSelector(r)}catch{return!1}return!1}}function getParentOrHost(d){return d.host&&d!==document&&d.host.nodeType?d.host:d.parentNode}function closest(d,r,t,e){if(d){t=t||document;do{if(r!=null&&(r[0]===">"?d.parentNode===t&&matches(d,r):matches(d,r))||e&&d===t)return d;if(d===t)break}while(d=getParentOrHost(d))}return null}var R_SPACE=/\s+/g;function toggleClass(d,r,t){if(d&&r)if(d.classList)d.classList[t?"add":"remove"](r);else{var e=(" "+d.className+" ").replace(R_SPACE," ").replace(" "+r+" "," ");d.className=(e+(t?" "+r:"")).replace(R_SPACE," ")}}function css(d,r,t){var e=d&&d.style;if(e){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(d,""):d.currentStyle&&(t=d.currentStyle),r===void 0?t:t[r];!(r in e)&&r.indexOf("webkit")===-1&&(r="-webkit-"+r),e[r]=t+(typeof t=="string"?"":"px")}}function matrix(d,r){var t="";if(typeof d=="string")t=d;else do{var e=css(d,"transform");e&&e!=="none"&&(t=e+" "+t)}while(!r&&(d=d.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(t)}function find(d,r,t){if(d){var e=d.getElementsByTagName(r),n=0,y=e.length;if(t)for(;n<y;n++)t(e[n],n);return e}return[]}function getWindowScrollingElement(){var d=document.scrollingElement;return d||document.documentElement}function getRect(d,r,t,e,n){if(!(!d.getBoundingClientRect&&d!==window)){var y,h,g,m,v,c,a;if(d!==window&&d.parentNode&&d!==getWindowScrollingElement()?(y=d.getBoundingClientRect(),h=y.top,g=y.left,m=y.bottom,v=y.right,c=y.height,a=y.width):(h=0,g=0,m=window.innerHeight,v=window.innerWidth,c=window.innerHeight,a=window.innerWidth),(r||t)&&d!==window&&(n=n||d.parentNode,!IE11OrLess))do if(n&&n.getBoundingClientRect&&(css(n,"transform")!=="none"||t&&css(n,"position")!=="static")){var o=n.getBoundingClientRect();h-=o.top+parseInt(css(n,"border-top-width")),g-=o.left+parseInt(css(n,"border-left-width")),m=h+y.height,v=g+y.width;break}while(n=n.parentNode);if(e&&d!==window){var i=matrix(n||d),p=i&&i.a,_=i&&i.d;i&&(h/=_,g/=p,a/=p,c/=_,m=h+c,v=g+a)}return{top:h,left:g,bottom:m,right:v,width:a,height:c}}}function isScrolledPast(d,r,t){for(var e=getParentAutoScrollElement(d,!0),n=getRect(d)[r];e;){var y=getRect(e)[t],h=void 0;if(t==="top"||t==="left"?h=n>=y:h=n<=y,!h)return e;if(e===getWindowScrollingElement())break;e=getParentAutoScrollElement(e,!1)}return!1}function getChild(d,r,t,e){for(var n=0,y=0,h=d.children;y<h.length;){if(h[y].style.display!=="none"&&h[y]!==Sortable.ghost&&(e||h[y]!==Sortable.dragged)&&closest(h[y],t.draggable,d,!1)){if(n===r)return h[y];n++}y++}return null}function lastChild(d,r){for(var t=d.lastElementChild;t&&(t===Sortable.ghost||css(t,"display")==="none"||r&&!matches(t,r));)t=t.previousElementSibling;return t||null}function index(d,r){var t=0;if(!d||!d.parentNode)return-1;for(;d=d.previousElementSibling;)d.nodeName.toUpperCase()!=="TEMPLATE"&&d!==Sortable.clone&&(!r||matches(d,r))&&t++;return t}function getRelativeScrollOffset(d){var r=0,t=0,e=getWindowScrollingElement();if(d)do{var n=matrix(d),y=n.a,h=n.d;r+=d.scrollLeft*y,t+=d.scrollTop*h}while(d!==e&&(d=d.parentNode));return[r,t]}function indexOfObject(d,r){for(var t in d)if(!!d.hasOwnProperty(t)){for(var e in r)if(r.hasOwnProperty(e)&&r[e]===d[t][e])return Number(t)}return-1}function getParentAutoScrollElement(d,r){if(!d||!d.getBoundingClientRect)return getWindowScrollingElement();var t=d,e=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var n=css(t);if(t.clientWidth<t.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return getWindowScrollingElement();if(e||r)return t;e=!0}}while(t=t.parentNode);return getWindowScrollingElement()}function extend(d,r){if(d&&r)for(var t in r)r.hasOwnProperty(t)&&(d[t]=r[t]);return d}function isRectEqual(d,r){return Math.round(d.top)===Math.round(r.top)&&Math.round(d.left)===Math.round(r.left)&&Math.round(d.height)===Math.round(r.height)&&Math.round(d.width)===Math.round(r.width)}var _throttleTimeout;function throttle(d,r){return function(){if(!_throttleTimeout){var t=arguments,e=this;t.length===1?d.call(e,t[0]):d.apply(e,t),_throttleTimeout=setTimeout(function(){_throttleTimeout=void 0},r)}}}function cancelThrottle(){clearTimeout(_throttleTimeout),_throttleTimeout=void 0}function scrollBy(d,r,t){d.scrollLeft+=r,d.scrollTop+=t}function clone(d){var r=window.Polymer,t=window.jQuery||window.Zepto;return r&&r.dom?r.dom(d).cloneNode(!0):t?t(d).clone(!0)[0]:d.cloneNode(!0)}var expando="Sortable"+new Date().getTime();function AnimationStateManager(){var d=[],r;return{captureAnimationState:function(){if(d=[],!!this.options.animation){var e=[].slice.call(this.el.children);e.forEach(function(n){if(!(css(n,"display")==="none"||n===Sortable.ghost)){d.push({target:n,rect:getRect(n)});var y=_objectSpread2({},d[d.length-1].rect);if(n.thisAnimationDuration){var h=matrix(n,!0);h&&(y.top-=h.f,y.left-=h.e)}n.fromRect=y}})}},addAnimationState:function(e){d.push(e)},removeAnimationState:function(e){d.splice(indexOfObject(d,{target:e}),1)},animateAll:function(e){var n=this;if(!this.options.animation){clearTimeout(r),typeof e=="function"&&e();return}var y=!1,h=0;d.forEach(function(g){var m=0,v=g.target,c=v.fromRect,a=getRect(v),o=v.prevFromRect,i=v.prevToRect,p=g.rect,_=matrix(v,!0);_&&(a.top-=_.f,a.left-=_.e),v.toRect=a,v.thisAnimationDuration&&isRectEqual(o,a)&&!isRectEqual(c,a)&&(p.top-a.top)/(p.left-a.left)===(c.top-a.top)/(c.left-a.left)&&(m=calculateRealTime(p,o,i,n.options)),isRectEqual(a,c)||(v.prevFromRect=c,v.prevToRect=a,m||(m=n.options.animation),n.animate(v,p,a,m)),m&&(y=!0,h=Math.max(h,m),clearTimeout(v.animationResetTimer),v.animationResetTimer=setTimeout(function(){v.animationTime=0,v.prevFromRect=null,v.fromRect=null,v.prevToRect=null,v.thisAnimationDuration=null},m),v.thisAnimationDuration=m)}),clearTimeout(r),y?r=setTimeout(function(){typeof e=="function"&&e()},h):typeof e=="function"&&e(),d=[]},animate:function(e,n,y,h){if(h){css(e,"transition",""),css(e,"transform","");var g=matrix(this.el),m=g&&g.a,v=g&&g.d,c=(n.left-y.left)/(m||1),a=(n.top-y.top)/(v||1);e.animatingX=!!c,e.animatingY=!!a,css(e,"transform","translate3d("+c+"px,"+a+"px,0)"),this.forRepaintDummy=repaint(e),css(e,"transition","transform "+h+"ms"+(this.options.easing?" "+this.options.easing:"")),css(e,"transform","translate3d(0,0,0)"),typeof e.animated=="number"&&clearTimeout(e.animated),e.animated=setTimeout(function(){css(e,"transition",""),css(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},h)}}}}function repaint(d){return d.offsetWidth}function calculateRealTime(d,r,t,e){return Math.sqrt(Math.pow(r.top-d.top,2)+Math.pow(r.left-d.left,2))/Math.sqrt(Math.pow(r.top-t.top,2)+Math.pow(r.left-t.left,2))*e.animation}var plugins=[],defaults={initializeByDefault:!0},PluginManager={mount:function d(r){for(var t in defaults)defaults.hasOwnProperty(t)&&!(t in r)&&(r[t]=defaults[t]);plugins.forEach(function(e){if(e.pluginName===r.pluginName)throw"Sortable: Cannot mount plugin ".concat(r.pluginName," more than once")}),plugins.push(r)},pluginEvent:function d(r,t,e){var n=this;this.eventCanceled=!1,e.cancel=function(){n.eventCanceled=!0};var y=r+"Global";plugins.forEach(function(h){!t[h.pluginName]||(t[h.pluginName][y]&&t[h.pluginName][y](_objectSpread2({sortable:t},e)),t.options[h.pluginName]&&t[h.pluginName][r]&&t[h.pluginName][r](_objectSpread2({sortable:t},e)))})},initializePlugins:function d(r,t,e,n){plugins.forEach(function(g){var m=g.pluginName;if(!(!r.options[m]&&!g.initializeByDefault)){var v=new g(r,t,r.options);v.sortable=r,v.options=r.options,r[m]=v,_extends(e,v.defaults)}});for(var y in r.options)if(!!r.options.hasOwnProperty(y)){var h=this.modifyOption(r,y,r.options[y]);typeof h!="undefined"&&(r.options[y]=h)}},getEventProperties:function d(r,t){var e={};return plugins.forEach(function(n){typeof n.eventProperties=="function"&&_extends(e,n.eventProperties.call(t[n.pluginName],r))}),e},modifyOption:function d(r,t,e){var n;return plugins.forEach(function(y){!r[y.pluginName]||y.optionListeners&&typeof y.optionListeners[t]=="function"&&(n=y.optionListeners[t].call(r[y.pluginName],e))}),n}};function dispatchEvent(d){var r=d.sortable,t=d.rootEl,e=d.name,n=d.targetEl,y=d.cloneEl,h=d.toEl,g=d.fromEl,m=d.oldIndex,v=d.newIndex,c=d.oldDraggableIndex,a=d.newDraggableIndex,o=d.originalEvent,i=d.putSortable,p=d.extraEventProperties;if(r=r||t&&t[expando],!!r){var _,f=r.options,u="on"+e.charAt(0).toUpperCase()+e.substr(1);window.CustomEvent&&!IE11OrLess&&!Edge?_=new CustomEvent(e,{bubbles:!0,cancelable:!0}):(_=document.createEvent("Event"),_.initEvent(e,!0,!0)),_.to=h||t,_.from=g||t,_.item=n||t,_.clone=y,_.oldIndex=m,_.newIndex=v,_.oldDraggableIndex=c,_.newDraggableIndex=a,_.originalEvent=o,_.pullMode=i?i.lastPutMode:void 0;var l=_objectSpread2(_objectSpread2({},p),PluginManager.getEventProperties(e,r));for(var b in l)_[b]=l[b];t&&t.dispatchEvent(_),f[u]&&f[u].call(r,_)}}var _excluded=["evt"],pluginEvent=function d(r,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.evt,y=_objectWithoutProperties(e,_excluded);PluginManager.pluginEvent.bind(Sortable)(r,t,_objectSpread2({dragEl,parentEl,ghostEl,rootEl,nextEl,lastDownEl,cloneEl,cloneHidden,dragStarted:moved,putSortable,activeSortable:Sortable.active,originalEvent:n,oldIndex,oldDraggableIndex,newIndex,newDraggableIndex,hideGhostForTarget:_hideGhostForTarget,unhideGhostForTarget:_unhideGhostForTarget,cloneNowHidden:function(){cloneHidden=!0},cloneNowShown:function(){cloneHidden=!1},dispatchSortableEvent:function(g){_dispatchEvent({sortable:t,name:g,originalEvent:n})}},y))};function _dispatchEvent(d){dispatchEvent(_objectSpread2({putSortable,cloneEl,targetEl:dragEl,rootEl,oldIndex,oldDraggableIndex,newIndex,newDraggableIndex},d))}var dragEl,parentEl,ghostEl,rootEl,nextEl,lastDownEl,cloneEl,cloneHidden,oldIndex,newIndex,oldDraggableIndex,newDraggableIndex,activeGroup,putSortable,awaitingDragStarted=!1,ignoreNextClick=!1,sortables=[],tapEvt,touchEvt,lastDx,lastDy,tapDistanceLeft,tapDistanceTop,moved,lastTarget,lastDirection,pastFirstInvertThresh=!1,isCircumstantialInvert=!1,targetMoveDistance,ghostRelativeParent,ghostRelativeParentInitialScroll=[],_silent=!1,savedInputChecked=[],documentExists=typeof document!="undefined",PositionGhostAbsolutely=IOS,CSSFloatProperty=Edge||IE11OrLess?"cssFloat":"float",supportDraggable=documentExists&&!ChromeForAndroid&&!IOS&&"draggable"in document.createElement("div"),supportCssPointerEvents=function(){if(!!documentExists){if(IE11OrLess)return!1;var d=document.createElement("x");return d.style.cssText="pointer-events:auto",d.style.pointerEvents==="auto"}}(),_detectDirection=function d(r,t){var e=css(r),n=parseInt(e.width)-parseInt(e.paddingLeft)-parseInt(e.paddingRight)-parseInt(e.borderLeftWidth)-parseInt(e.borderRightWidth),y=getChild(r,0,t),h=getChild(r,1,t),g=y&&css(y),m=h&&css(h),v=g&&parseInt(g.marginLeft)+parseInt(g.marginRight)+getRect(y).width,c=m&&parseInt(m.marginLeft)+parseInt(m.marginRight)+getRect(h).width;if(e.display==="flex")return e.flexDirection==="column"||e.flexDirection==="column-reverse"?"vertical":"horizontal";if(e.display==="grid")return e.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(y&&g.float&&g.float!=="none"){var a=g.float==="left"?"left":"right";return h&&(m.clear==="both"||m.clear===a)?"vertical":"horizontal"}return y&&(g.display==="block"||g.display==="flex"||g.display==="table"||g.display==="grid"||v>=n&&e[CSSFloatProperty]==="none"||h&&e[CSSFloatProperty]==="none"&&v+c>n)?"vertical":"horizontal"},_dragElInRowColumn=function d(r,t,e){var n=e?r.left:r.top,y=e?r.right:r.bottom,h=e?r.width:r.height,g=e?t.left:t.top,m=e?t.right:t.bottom,v=e?t.width:t.height;return n===g||y===m||n+h/2===g+v/2},_detectNearestEmptySortable=function d(r,t){var e;return sortables.some(function(n){var y=n[expando].options.emptyInsertThreshold;if(!(!y||lastChild(n))){var h=getRect(n),g=r>=h.left-y&&r<=h.right+y,m=t>=h.top-y&&t<=h.bottom+y;if(g&&m)return e=n}}),e},_prepareGroup=function d(r){function t(y,h){return function(g,m,v,c){var a=g.options.group.name&&m.options.group.name&&g.options.group.name===m.options.group.name;if(y==null&&(h||a))return!0;if(y==null||y===!1)return!1;if(h&&y==="clone")return y;if(typeof y=="function")return t(y(g,m,v,c),h)(g,m,v,c);var o=(h?g:m).options.group.name;return y===!0||typeof y=="string"&&y===o||y.join&&y.indexOf(o)>-1}}var e={},n=r.group;(!n||_typeof(n)!="object")&&(n={name:n}),e.name=n.name,e.checkPull=t(n.pull,!0),e.checkPut=t(n.put),e.revertClone=n.revertClone,r.group=e},_hideGhostForTarget=function d(){!supportCssPointerEvents&&ghostEl&&css(ghostEl,"display","none")},_unhideGhostForTarget=function d(){!supportCssPointerEvents&&ghostEl&&css(ghostEl,"display","")};documentExists&&!ChromeForAndroid&&document.addEventListener("click",function(d){if(ignoreNextClick)return d.preventDefault(),d.stopPropagation&&d.stopPropagation(),d.stopImmediatePropagation&&d.stopImmediatePropagation(),ignoreNextClick=!1,!1},!0);var nearestEmptyInsertDetectEvent=function d(r){if(dragEl){r=r.touches?r.touches[0]:r;var t=_detectNearestEmptySortable(r.clientX,r.clientY);if(t){var e={};for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n]);e.target=e.rootEl=t,e.preventDefault=void 0,e.stopPropagation=void 0,t[expando]._onDragOver(e)}}},_checkOutsideTargetEl=function d(r){dragEl&&dragEl.parentNode[expando]._isOutsideThisEl(r.target)};function Sortable(d,r){if(!(d&&d.nodeType&&d.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(d));this.el=d,this.options=r=_extends({},r),d[expando]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(d.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return _detectDirection(d,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(h,g){h.setData("Text",g.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:Sortable.supportPointer!==!1&&"PointerEvent"in window&&!Safari,emptyInsertThreshold:5};PluginManager.initializePlugins(this,d,t);for(var e in t)!(e in r)&&(r[e]=t[e]);_prepareGroup(r);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=r.forceFallback?!1:supportDraggable,this.nativeDraggable&&(this.options.touchStartThreshold=1),r.supportPointer?on(d,"pointerdown",this._onTapStart):(on(d,"mousedown",this._onTapStart),on(d,"touchstart",this._onTapStart)),this.nativeDraggable&&(on(d,"dragover",this),on(d,"dragenter",this)),sortables.push(this.el),r.store&&r.store.get&&this.sort(r.store.get(this)||[]),_extends(this,AnimationStateManager())}Sortable.prototype={constructor:Sortable,_isOutsideThisEl:function d(r){!this.el.contains(r)&&r!==this.el&&(lastTarget=null)},_getDirection:function d(r,t){return typeof this.options.direction=="function"?this.options.direction.call(this,r,t,dragEl):this.options.direction},_onTapStart:function d(r){if(!!r.cancelable){var t=this,e=this.el,n=this.options,y=n.preventOnFilter,h=r.type,g=r.touches&&r.touches[0]||r.pointerType&&r.pointerType==="touch"&&r,m=(g||r).target,v=r.target.shadowRoot&&(r.path&&r.path[0]||r.composedPath&&r.composedPath()[0])||m,c=n.filter;if(_saveInputCheckedState(e),!dragEl&&!(/mousedown|pointerdown/.test(h)&&r.button!==0||n.disabled)&&!v.isContentEditable&&!(!this.nativeDraggable&&Safari&&m&&m.tagName.toUpperCase()==="SELECT")&&(m=closest(m,n.draggable,e,!1),!(m&&m.animated)&&lastDownEl!==m)){if(oldIndex=index(m),oldDraggableIndex=index(m,n.draggable),typeof c=="function"){if(c.call(this,r,m,this)){_dispatchEvent({sortable:t,rootEl:v,name:"filter",targetEl:m,toEl:e,fromEl:e}),pluginEvent("filter",t,{evt:r}),y&&r.cancelable&&r.preventDefault();return}}else if(c&&(c=c.split(",").some(function(a){if(a=closest(v,a.trim(),e,!1),a)return _dispatchEvent({sortable:t,rootEl:a,name:"filter",targetEl:m,fromEl:e,toEl:e}),pluginEvent("filter",t,{evt:r}),!0}),c)){y&&r.cancelable&&r.preventDefault();return}n.handle&&!closest(v,n.handle,e,!1)||this._prepareDragStart(r,g,m)}}},_prepareDragStart:function d(r,t,e){var n=this,y=n.el,h=n.options,g=y.ownerDocument,m;if(e&&!dragEl&&e.parentNode===y){var v=getRect(e);if(rootEl=y,dragEl=e,parentEl=dragEl.parentNode,nextEl=dragEl.nextSibling,lastDownEl=e,activeGroup=h.group,Sortable.dragged=dragEl,tapEvt={target:dragEl,clientX:(t||r).clientX,clientY:(t||r).clientY},tapDistanceLeft=tapEvt.clientX-v.left,tapDistanceTop=tapEvt.clientY-v.top,this._lastX=(t||r).clientX,this._lastY=(t||r).clientY,dragEl.style["will-change"]="all",m=function(){if(pluginEvent("delayEnded",n,{evt:r}),Sortable.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!FireFox&&n.nativeDraggable&&(dragEl.draggable=!0),n._triggerDragStart(r,t),_dispatchEvent({sortable:n,name:"choose",originalEvent:r}),toggleClass(dragEl,h.chosenClass,!0)},h.ignore.split(",").forEach(function(c){find(dragEl,c.trim(),_disableDraggable)}),on(g,"dragover",nearestEmptyInsertDetectEvent),on(g,"mousemove",nearestEmptyInsertDetectEvent),on(g,"touchmove",nearestEmptyInsertDetectEvent),on(g,"mouseup",n._onDrop),on(g,"touchend",n._onDrop),on(g,"touchcancel",n._onDrop),FireFox&&this.nativeDraggable&&(this.options.touchStartThreshold=4,dragEl.draggable=!0),pluginEvent("delayStart",this,{evt:r}),h.delay&&(!h.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Edge||IE11OrLess))){if(Sortable.eventCanceled){this._onDrop();return}on(g,"mouseup",n._disableDelayedDrag),on(g,"touchend",n._disableDelayedDrag),on(g,"touchcancel",n._disableDelayedDrag),on(g,"mousemove",n._delayedDragTouchMoveHandler),on(g,"touchmove",n._delayedDragTouchMoveHandler),h.supportPointer&&on(g,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(m,h.delay)}else m()}},_delayedDragTouchMoveHandler:function d(r){var t=r.touches?r.touches[0]:r;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function d(){dragEl&&_disableDraggable(dragEl),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function d(){var r=this.el.ownerDocument;off(r,"mouseup",this._disableDelayedDrag),off(r,"touchend",this._disableDelayedDrag),off(r,"touchcancel",this._disableDelayedDrag),off(r,"mousemove",this._delayedDragTouchMoveHandler),off(r,"touchmove",this._delayedDragTouchMoveHandler),off(r,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function d(r,t){t=t||r.pointerType=="touch"&&r,!this.nativeDraggable||t?this.options.supportPointer?on(document,"pointermove",this._onTouchMove):t?on(document,"touchmove",this._onTouchMove):on(document,"mousemove",this._onTouchMove):(on(dragEl,"dragend",this),on(rootEl,"dragstart",this._onDragStart));try{document.selection?_nextTick(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function d(r,t){if(awaitingDragStarted=!1,rootEl&&dragEl){pluginEvent("dragStarted",this,{evt:t}),this.nativeDraggable&&on(document,"dragover",_checkOutsideTargetEl);var e=this.options;!r&&toggleClass(dragEl,e.dragClass,!1),toggleClass(dragEl,e.ghostClass,!0),Sortable.active=this,r&&this._appendGhost(),_dispatchEvent({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function d(){if(touchEvt){this._lastX=touchEvt.clientX,this._lastY=touchEvt.clientY,_hideGhostForTarget();for(var r=document.elementFromPoint(touchEvt.clientX,touchEvt.clientY),t=r;r&&r.shadowRoot&&(r=r.shadowRoot.elementFromPoint(touchEvt.clientX,touchEvt.clientY),r!==t);)t=r;if(dragEl.parentNode[expando]._isOutsideThisEl(r),t)do{if(t[expando]){var e=void 0;if(e=t[expando]._onDragOver({clientX:touchEvt.clientX,clientY:touchEvt.clientY,target:r,rootEl:t}),e&&!this.options.dragoverBubble)break}r=t}while(t=t.parentNode);_unhideGhostForTarget()}},_onTouchMove:function d(r){if(tapEvt){var t=this.options,e=t.fallbackTolerance,n=t.fallbackOffset,y=r.touches?r.touches[0]:r,h=ghostEl&&matrix(ghostEl,!0),g=ghostEl&&h&&h.a,m=ghostEl&&h&&h.d,v=PositionGhostAbsolutely&&ghostRelativeParent&&getRelativeScrollOffset(ghostRelativeParent),c=(y.clientX-tapEvt.clientX+n.x)/(g||1)+(v?v[0]-ghostRelativeParentInitialScroll[0]:0)/(g||1),a=(y.clientY-tapEvt.clientY+n.y)/(m||1)+(v?v[1]-ghostRelativeParentInitialScroll[1]:0)/(m||1);if(!Sortable.active&&!awaitingDragStarted){if(e&&Math.max(Math.abs(y.clientX-this._lastX),Math.abs(y.clientY-this._lastY))<e)return;this._onDragStart(r,!0)}if(ghostEl){h?(h.e+=c-(lastDx||0),h.f+=a-(lastDy||0)):h={a:1,b:0,c:0,d:1,e:c,f:a};var o="matrix(".concat(h.a,",").concat(h.b,",").concat(h.c,",").concat(h.d,",").concat(h.e,",").concat(h.f,")");css(ghostEl,"webkitTransform",o),css(ghostEl,"mozTransform",o),css(ghostEl,"msTransform",o),css(ghostEl,"transform",o),lastDx=c,lastDy=a,touchEvt=y}r.cancelable&&r.preventDefault()}},_appendGhost:function d(){if(!ghostEl){var r=this.options.fallbackOnBody?document.body:rootEl,t=getRect(dragEl,!0,PositionGhostAbsolutely,!0,r),e=this.options;if(PositionGhostAbsolutely){for(ghostRelativeParent=r;css(ghostRelativeParent,"position")==="static"&&css(ghostRelativeParent,"transform")==="none"&&ghostRelativeParent!==document;)ghostRelativeParent=ghostRelativeParent.parentNode;ghostRelativeParent!==document.body&&ghostRelativeParent!==document.documentElement?(ghostRelativeParent===document&&(ghostRelativeParent=getWindowScrollingElement()),t.top+=ghostRelativeParent.scrollTop,t.left+=ghostRelativeParent.scrollLeft):ghostRelativeParent=getWindowScrollingElement(),ghostRelativeParentInitialScroll=getRelativeScrollOffset(ghostRelativeParent)}ghostEl=dragEl.cloneNode(!0),toggleClass(ghostEl,e.ghostClass,!1),toggleClass(ghostEl,e.fallbackClass,!0),toggleClass(ghostEl,e.dragClass,!0),css(ghostEl,"transition",""),css(ghostEl,"transform",""),css(ghostEl,"box-sizing","border-box"),css(ghostEl,"margin",0),css(ghostEl,"top",t.top),css(ghostEl,"left",t.left),css(ghostEl,"width",t.width),css(ghostEl,"height",t.height),css(ghostEl,"opacity","0.8"),css(ghostEl,"position",PositionGhostAbsolutely?"absolute":"fixed"),css(ghostEl,"zIndex","100000"),css(ghostEl,"pointerEvents","none"),Sortable.ghost=ghostEl,r.appendChild(ghostEl),css(ghostEl,"transform-origin",tapDistanceLeft/parseInt(ghostEl.style.width)*100+"% "+tapDistanceTop/parseInt(ghostEl.style.height)*100+"%")}},_onDragStart:function d(r,t){var e=this,n=r.dataTransfer,y=e.options;if(pluginEvent("dragStart",this,{evt:r}),Sortable.eventCanceled){this._onDrop();return}pluginEvent("setupClone",this),Sortable.eventCanceled||(cloneEl=clone(dragEl),cloneEl.removeAttribute("id"),cloneEl.draggable=!1,cloneEl.style["will-change"]="",this._hideClone(),toggleClass(cloneEl,this.options.chosenClass,!1),Sortable.clone=cloneEl),e.cloneId=_nextTick(function(){pluginEvent("clone",e),!Sortable.eventCanceled&&(e.options.removeCloneOnHide||rootEl.insertBefore(cloneEl,dragEl),e._hideClone(),_dispatchEvent({sortable:e,name:"clone"}))}),!t&&toggleClass(dragEl,y.dragClass,!0),t?(ignoreNextClick=!0,e._loopId=setInterval(e._emulateDragOver,50)):(off(document,"mouseup",e._onDrop),off(document,"touchend",e._onDrop),off(document,"touchcancel",e._onDrop),n&&(n.effectAllowed="move",y.setData&&y.setData.call(e,n,dragEl)),on(document,"drop",e),css(dragEl,"transform","translateZ(0)")),awaitingDragStarted=!0,e._dragStartId=_nextTick(e._dragStarted.bind(e,t,r)),on(document,"selectstart",e),moved=!0,Safari&&css(document.body,"user-select","none")},_onDragOver:function d(r){var t=this.el,e=r.target,n,y,h,g=this.options,m=g.group,v=Sortable.active,c=activeGroup===m,a=g.sort,o=putSortable||v,i,p=this,_=!1;if(_silent)return;function f(F,U){pluginEvent(F,p,_objectSpread2({evt:r,isOwner:c,axis:i?"vertical":"horizontal",revert:h,dragRect:n,targetRect:y,canSort:a,fromSortable:o,target:e,completed:l,onMove:function(D,C){return _onMove(rootEl,t,dragEl,n,D,getRect(D),r,C)},changed:b},U))}function u(){f("dragOverAnimationCapture"),p.captureAnimationState(),p!==o&&o.captureAnimationState()}function l(F){return f("dragOverCompleted",{insertion:F}),F&&(c?v._hideClone():v._showClone(p),p!==o&&(toggleClass(dragEl,putSortable?putSortable.options.ghostClass:v.options.ghostClass,!1),toggleClass(dragEl,g.ghostClass,!0)),putSortable!==p&&p!==Sortable.active?putSortable=p:p===Sortable.active&&putSortable&&(putSortable=null),o===p&&(p._ignoreWhileAnimating=e),p.animateAll(function(){f("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==o&&(o.animateAll(),o._ignoreWhileAnimating=null)),(e===dragEl&&!dragEl.animated||e===t&&!e.animated)&&(lastTarget=null),!g.dragoverBubble&&!r.rootEl&&e!==document&&(dragEl.parentNode[expando]._isOutsideThisEl(r.target),!F&&nearestEmptyInsertDetectEvent(r)),!g.dragoverBubble&&r.stopPropagation&&r.stopPropagation(),_=!0}function b(){newIndex=index(dragEl),newDraggableIndex=index(dragEl,g.draggable),_dispatchEvent({sortable:p,name:"change",toEl:t,newIndex,newDraggableIndex,originalEvent:r})}if(r.preventDefault!==void 0&&r.cancelable&&r.preventDefault(),e=closest(e,g.draggable,t,!0),f("dragOver"),Sortable.eventCanceled)return _;if(dragEl.contains(r.target)||e.animated&&e.animatingX&&e.animatingY||p._ignoreWhileAnimating===e)return l(!1);if(ignoreNextClick=!1,v&&!g.disabled&&(c?a||(h=parentEl!==rootEl):putSortable===this||(this.lastPutMode=activeGroup.checkPull(this,v,dragEl,r))&&m.checkPut(this,v,dragEl,r))){if(i=this._getDirection(r,e)==="vertical",n=getRect(dragEl),f("dragOverValid"),Sortable.eventCanceled)return _;if(h)return parentEl=rootEl,u(),this._hideClone(),f("revert"),Sortable.eventCanceled||(nextEl?rootEl.insertBefore(dragEl,nextEl):rootEl.appendChild(dragEl)),l(!0);var s=lastChild(t,g.draggable);if(!s||_ghostIsLast(r,i,this)&&!s.animated){if(s===dragEl)return l(!1);if(s&&t===r.target&&(e=s),e&&(y=getRect(e)),_onMove(rootEl,t,dragEl,n,e,y,r,!!e)!==!1)return u(),s&&s.nextSibling?t.insertBefore(dragEl,s.nextSibling):t.appendChild(dragEl),parentEl=t,b(),l(!0)}else if(s&&_ghostIsFirst(r,i,this)){var x=getChild(t,0,g,!0);if(x===dragEl)return l(!1);if(e=x,y=getRect(e),_onMove(rootEl,t,dragEl,n,e,y,r,!1)!==!1)return u(),t.insertBefore(dragEl,x),parentEl=t,b(),l(!0)}else if(e.parentNode===t){y=getRect(e);var M=0,P,A=dragEl.parentNode!==t,T=!_dragElInRowColumn(dragEl.animated&&dragEl.toRect||n,e.animated&&e.toRect||y,i),w=i?"top":"left",E=isScrolledPast(e,"top","top")||isScrolledPast(dragEl,"top","top"),O=E?E.scrollTop:void 0;lastTarget!==e&&(P=y[w],pastFirstInvertThresh=!1,isCircumstantialInvert=!T&&g.invertSwap||A),M=_getSwapDirection(r,e,y,i,T?1:g.swapThreshold,g.invertedSwapThreshold==null?g.swapThreshold:g.invertedSwapThreshold,isCircumstantialInvert,lastTarget===e);var k;if(M!==0){var I=index(dragEl);do I-=M,k=parentEl.children[I];while(k&&(css(k,"display")==="none"||k===ghostEl))}if(M===0||k===e)return l(!1);lastTarget=e,lastDirection=M;var S=e.nextElementSibling,B=!1;B=M===1;var q=_onMove(rootEl,t,dragEl,n,e,y,r,B);if(q!==!1)return(q===1||q===-1)&&(B=q===1),_silent=!0,setTimeout(_unsilent,30),u(),B&&!S?t.appendChild(dragEl):e.parentNode.insertBefore(dragEl,B?S:e),E&&scrollBy(E,0,O-E.scrollTop),parentEl=dragEl.parentNode,P!==void 0&&!isCircumstantialInvert&&(targetMoveDistance=Math.abs(P-getRect(e)[w])),b(),l(!0)}if(t.contains(dragEl))return l(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function d(){off(document,"mousemove",this._onTouchMove),off(document,"touchmove",this._onTouchMove),off(document,"pointermove",this._onTouchMove),off(document,"dragover",nearestEmptyInsertDetectEvent),off(document,"mousemove",nearestEmptyInsertDetectEvent),off(document,"touchmove",nearestEmptyInsertDetectEvent)},_offUpEvents:function d(){var r=this.el.ownerDocument;off(r,"mouseup",this._onDrop),off(r,"touchend",this._onDrop),off(r,"pointerup",this._onDrop),off(r,"touchcancel",this._onDrop),off(document,"selectstart",this)},_onDrop:function d(r){var t=this.el,e=this.options;if(newIndex=index(dragEl),newDraggableIndex=index(dragEl,e.draggable),pluginEvent("drop",this,{evt:r}),parentEl=dragEl&&dragEl.parentNode,newIndex=index(dragEl),newDraggableIndex=index(dragEl,e.draggable),Sortable.eventCanceled){this._nulling();return}awaitingDragStarted=!1,isCircumstantialInvert=!1,pastFirstInvertThresh=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),_cancelNextTick(this.cloneId),_cancelNextTick(this._dragStartId),this.nativeDraggable&&(off(document,"drop",this),off(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Safari&&css(document.body,"user-select",""),css(dragEl,"transform",""),r&&(moved&&(r.cancelable&&r.preventDefault(),!e.dropBubble&&r.stopPropagation()),ghostEl&&ghostEl.parentNode&&ghostEl.parentNode.removeChild(ghostEl),(rootEl===parentEl||putSortable&&putSortable.lastPutMode!=="clone")&&cloneEl&&cloneEl.parentNode&&cloneEl.parentNode.removeChild(cloneEl),dragEl&&(this.nativeDraggable&&off(dragEl,"dragend",this),_disableDraggable(dragEl),dragEl.style["will-change"]="",moved&&!awaitingDragStarted&&toggleClass(dragEl,putSortable?putSortable.options.ghostClass:this.options.ghostClass,!1),toggleClass(dragEl,this.options.chosenClass,!1),_dispatchEvent({sortable:this,name:"unchoose",toEl:parentEl,newIndex:null,newDraggableIndex:null,originalEvent:r}),rootEl!==parentEl?(newIndex>=0&&(_dispatchEvent({rootEl:parentEl,name:"add",toEl:parentEl,fromEl:rootEl,originalEvent:r}),_dispatchEvent({sortable:this,name:"remove",toEl:parentEl,originalEvent:r}),_dispatchEvent({rootEl:parentEl,name:"sort",toEl:parentEl,fromEl:rootEl,originalEvent:r}),_dispatchEvent({sortable:this,name:"sort",toEl:parentEl,originalEvent:r})),putSortable&&putSortable.save()):newIndex!==oldIndex&&newIndex>=0&&(_dispatchEvent({sortable:this,name:"update",toEl:parentEl,originalEvent:r}),_dispatchEvent({sortable:this,name:"sort",toEl:parentEl,originalEvent:r})),Sortable.active&&((newIndex==null||newIndex===-1)&&(newIndex=oldIndex,newDraggableIndex=oldDraggableIndex),_dispatchEvent({sortable:this,name:"end",toEl:parentEl,originalEvent:r}),this.save()))),this._nulling()},_nulling:function d(){pluginEvent("nulling",this),rootEl=dragEl=parentEl=ghostEl=nextEl=cloneEl=lastDownEl=cloneHidden=tapEvt=touchEvt=moved=newIndex=newDraggableIndex=oldIndex=oldDraggableIndex=lastTarget=lastDirection=putSortable=activeGroup=Sortable.dragged=Sortable.ghost=Sortable.clone=Sortable.active=null,savedInputChecked.forEach(function(r){r.checked=!0}),savedInputChecked.length=lastDx=lastDy=0},handleEvent:function d(r){switch(r.type){case"drop":case"dragend":this._onDrop(r);break;case"dragenter":case"dragover":dragEl&&(this._onDragOver(r),_globalDragOver(r));break;case"selectstart":r.preventDefault();break}},toArray:function d(){for(var r=[],t,e=this.el.children,n=0,y=e.length,h=this.options;n<y;n++)t=e[n],closest(t,h.draggable,this.el,!1)&&r.push(t.getAttribute(h.dataIdAttr)||_generateId(t));return r},sort:function d(r,t){var e={},n=this.el;this.toArray().forEach(function(y,h){var g=n.children[h];closest(g,this.options.draggable,n,!1)&&(e[y]=g)},this),t&&this.captureAnimationState(),r.forEach(function(y){e[y]&&(n.removeChild(e[y]),n.appendChild(e[y]))}),t&&this.animateAll()},save:function d(){var r=this.options.store;r&&r.set&&r.set(this)},closest:function d(r,t){return closest(r,t||this.options.draggable,this.el,!1)},option:function d(r,t){var e=this.options;if(t===void 0)return e[r];var n=PluginManager.modifyOption(this,r,t);typeof n!="undefined"?e[r]=n:e[r]=t,r==="group"&&_prepareGroup(e)},destroy:function d(){pluginEvent("destroy",this);var r=this.el;r[expando]=null,off(r,"mousedown",this._onTapStart),off(r,"touchstart",this._onTapStart),off(r,"pointerdown",this._onTapStart),this.nativeDraggable&&(off(r,"dragover",this),off(r,"dragenter",this)),Array.prototype.forEach.call(r.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),sortables.splice(sortables.indexOf(this.el),1),this.el=r=null},_hideClone:function d(){if(!cloneHidden){if(pluginEvent("hideClone",this),Sortable.eventCanceled)return;css(cloneEl,"display","none"),this.options.removeCloneOnHide&&cloneEl.parentNode&&cloneEl.parentNode.removeChild(cloneEl),cloneHidden=!0}},_showClone:function d(r){if(r.lastPutMode!=="clone"){this._hideClone();return}if(cloneHidden){if(pluginEvent("showClone",this),Sortable.eventCanceled)return;dragEl.parentNode==rootEl&&!this.options.group.revertClone?rootEl.insertBefore(cloneEl,dragEl):nextEl?rootEl.insertBefore(cloneEl,nextEl):rootEl.appendChild(cloneEl),this.options.group.revertClone&&this.animate(dragEl,cloneEl),css(cloneEl,"display",""),cloneHidden=!1}}};function _globalDragOver(d){d.dataTransfer&&(d.dataTransfer.dropEffect="move"),d.cancelable&&d.preventDefault()}function _onMove(d,r,t,e,n,y,h,g){var m,v=d[expando],c=v.options.onMove,a;return window.CustomEvent&&!IE11OrLess&&!Edge?m=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent("move",!0,!0)),m.to=r,m.from=d,m.dragged=t,m.draggedRect=e,m.related=n||r,m.relatedRect=y||getRect(r),m.willInsertAfter=g,m.originalEvent=h,d.dispatchEvent(m),c&&(a=c.call(v,m,h)),a}function _disableDraggable(d){d.draggable=!1}function _unsilent(){_silent=!1}function _ghostIsFirst(d,r,t){var e=getRect(getChild(t.el,0,t.options,!0)),n=10;return r?d.clientX<e.left-n||d.clientY<e.top&&d.clientX<e.right:d.clientY<e.top-n||d.clientY<e.bottom&&d.clientX<e.left}function _ghostIsLast(d,r,t){var e=getRect(lastChild(t.el,t.options.draggable)),n=10;return r?d.clientX>e.right+n||d.clientX<=e.right&&d.clientY>e.bottom&&d.clientX>=e.left:d.clientX>e.right&&d.clientY>e.top||d.clientX<=e.right&&d.clientY>e.bottom+n}function _getSwapDirection(d,r,t,e,n,y,h,g){var m=e?d.clientY:d.clientX,v=e?t.height:t.width,c=e?t.top:t.left,a=e?t.bottom:t.right,o=!1;if(!h){if(g&&targetMoveDistance<v*n){if(!pastFirstInvertThresh&&(lastDirection===1?m>c+v*y/2:m<a-v*y/2)&&(pastFirstInvertThresh=!0),pastFirstInvertThresh)o=!0;else if(lastDirection===1?m<c+targetMoveDistance:m>a-targetMoveDistance)return-lastDirection}else if(m>c+v*(1-n)/2&&m<a-v*(1-n)/2)return _getInsertDirection(r)}return o=o||h,o&&(m<c+v*y/2||m>a-v*y/2)?m>c+v/2?1:-1:0}function _getInsertDirection(d){return index(dragEl)<index(d)?1:-1}function _generateId(d){for(var r=d.tagName+d.className+d.src+d.href+d.textContent,t=r.length,e=0;t--;)e+=r.charCodeAt(t);return e.toString(36)}function _saveInputCheckedState(d){savedInputChecked.length=0;for(var r=d.getElementsByTagName("input"),t=r.length;t--;){var e=r[t];e.checked&&savedInputChecked.push(e)}}function _nextTick(d){return setTimeout(d,0)}function _cancelNextTick(d){return clearTimeout(d)}documentExists&&on(document,"touchmove",function(d){(Sortable.active||awaitingDragStarted)&&d.cancelable&&d.preventDefault()}),Sortable.utils={on,off,css,find,is:function d(r,t){return!!closest(r,t,r,!1)},extend,throttle,closest,toggleClass,clone,index,nextTick:_nextTick,cancelNextTick:_cancelNextTick,detectDirection:_detectDirection,getChild},Sortable.get=function(d){return d[expando]},Sortable.mount=function(){for(var d=arguments.length,r=new Array(d),t=0;t<d;t++)r[t]=arguments[t];r[0].constructor===Array&&(r=r[0]),r.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(Sortable.utils=_objectSpread2(_objectSpread2({},Sortable.utils),e.utils)),PluginManager.mount(e)})},Sortable.create=function(d,r){return new Sortable(d,r)},Sortable.version=version;var autoScrolls=[],scrollEl,scrollRootEl,scrolling=!1,lastAutoScrollX,lastAutoScrollY,touchEvt$1,pointerElemChangedInterval;function AutoScrollPlugin(){function d(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this))}return d.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?on(document,"dragover",this._handleAutoScroll):this.options.supportPointer?on(document,"pointermove",this._handleFallbackAutoScroll):e.touches?on(document,"touchmove",this._handleFallbackAutoScroll):on(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;!this.options.dragOverBubble&&!e.rootEl&&this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?off(document,"dragover",this._handleAutoScroll):(off(document,"pointermove",this._handleFallbackAutoScroll),off(document,"touchmove",this._handleFallbackAutoScroll),off(document,"mousemove",this._handleFallbackAutoScroll)),clearPointerElemChangedInterval(),clearAutoScrolls(),cancelThrottle()},nulling:function(){touchEvt$1=scrollRootEl=scrollEl=scrolling=pointerElemChangedInterval=lastAutoScrollX=lastAutoScrollY=null,autoScrolls.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,y=(t.touches?t.touches[0]:t).clientX,h=(t.touches?t.touches[0]:t).clientY,g=document.elementFromPoint(y,h);if(touchEvt$1=t,e||this.options.forceAutoScrollFallback||Edge||IE11OrLess||Safari){autoScroll(t,this.options,g,e);var m=getParentAutoScrollElement(g,!0);scrolling&&(!pointerElemChangedInterval||y!==lastAutoScrollX||h!==lastAutoScrollY)&&(pointerElemChangedInterval&&clearPointerElemChangedInterval(),pointerElemChangedInterval=setInterval(function(){var v=getParentAutoScrollElement(document.elementFromPoint(y,h),!0);v!==m&&(m=v,clearAutoScrolls()),autoScroll(t,n.options,v,e)},10),lastAutoScrollX=y,lastAutoScrollY=h)}else{if(!this.options.bubbleScroll||getParentAutoScrollElement(g,!0)===getWindowScrollingElement()){clearAutoScrolls();return}autoScroll(t,this.options,getParentAutoScrollElement(g,!1),!1)}}},_extends(d,{pluginName:"scroll",initializeByDefault:!0})}function clearAutoScrolls(){autoScrolls.forEach(function(d){clearInterval(d.pid)}),autoScrolls=[]}function clearPointerElemChangedInterval(){clearInterval(pointerElemChangedInterval)}var autoScroll=throttle(function(d,r,t,e){if(!!r.scroll){var n=(d.touches?d.touches[0]:d).clientX,y=(d.touches?d.touches[0]:d).clientY,h=r.scrollSensitivity,g=r.scrollSpeed,m=getWindowScrollingElement(),v=!1,c;scrollRootEl!==t&&(scrollRootEl=t,clearAutoScrolls(),scrollEl=r.scroll,c=r.scrollFn,scrollEl===!0&&(scrollEl=getParentAutoScrollElement(t,!0)));var a=0,o=scrollEl;do{var i=o,p=getRect(i),_=p.top,f=p.bottom,u=p.left,l=p.right,b=p.width,s=p.height,x=void 0,M=void 0,P=i.scrollWidth,A=i.scrollHeight,T=css(i),w=i.scrollLeft,E=i.scrollTop;i===m?(x=b<P&&(T.overflowX==="auto"||T.overflowX==="scroll"||T.overflowX==="visible"),M=s<A&&(T.overflowY==="auto"||T.overflowY==="scroll"||T.overflowY==="visible")):(x=b<P&&(T.overflowX==="auto"||T.overflowX==="scroll"),M=s<A&&(T.overflowY==="auto"||T.overflowY==="scroll"));var O=x&&(Math.abs(l-n)<=h&&w+b<P)-(Math.abs(u-n)<=h&&!!w),k=M&&(Math.abs(f-y)<=h&&E+s<A)-(Math.abs(_-y)<=h&&!!E);if(!autoScrolls[a])for(var I=0;I<=a;I++)autoScrolls[I]||(autoScrolls[I]={});(autoScrolls[a].vx!=O||autoScrolls[a].vy!=k||autoScrolls[a].el!==i)&&(autoScrolls[a].el=i,autoScrolls[a].vx=O,autoScrolls[a].vy=k,clearInterval(autoScrolls[a].pid),(O!=0||k!=0)&&(v=!0,autoScrolls[a].pid=setInterval(function(){e&&this.layer===0&&Sortable.active._onTouchMove(touchEvt$1);var S=autoScrolls[this.layer].vy?autoScrolls[this.layer].vy*g:0,B=autoScrolls[this.layer].vx?autoScrolls[this.layer].vx*g:0;typeof c=="function"&&c.call(Sortable.dragged.parentNode[expando],B,S,d,touchEvt$1,autoScrolls[this.layer].el)!=="continue"||scrollBy(autoScrolls[this.layer].el,B,S)}.bind({layer:a}),24))),a++}while(r.bubbleScroll&&o!==m&&(o=getParentAutoScrollElement(o,!1)));scrolling=v}},30),drop=function d(r){var t=r.originalEvent,e=r.putSortable,n=r.dragEl,y=r.activeSortable,h=r.dispatchSortableEvent,g=r.hideGhostForTarget,m=r.unhideGhostForTarget;if(!!t){var v=e||y;g();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,a=document.elementFromPoint(c.clientX,c.clientY);m(),v&&!v.el.contains(a)&&(h("spill"),this.onSpill({dragEl:n,putSortable:e}))}};function Revert(){}Revert.prototype={startIndex:null,dragStart:function d(r){var t=r.oldDraggableIndex;this.startIndex=t},onSpill:function d(r){var t=r.dragEl,e=r.putSortable;this.sortable.captureAnimationState(),e&&e.captureAnimationState();var n=getChild(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(t,n):this.sortable.el.appendChild(t),this.sortable.animateAll(),e&&e.animateAll()},drop},_extends(Revert,{pluginName:"revertOnSpill"});function Remove(){}Remove.prototype={onSpill:function d(r){var t=r.dragEl,e=r.putSortable,n=e||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop},_extends(Remove,{pluginName:"removeOnSpill"}),Sortable.mount(new AutoScrollPlugin),Sortable.mount(Remove,Revert);var render$1=function(){var d=this,r=d.$createElement,t=d._self._c||r;return t("svg",{attrs:{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.79993 0.983171C6.79993 0.80828 6.65815 0.666504 6.48326 0.666504C6.30837 0.666504 6.16659 0.80828 6.16659 0.983171V6.69987H0.483293C0.308402 6.69987 0.166626 6.84165 0.166626 7.01654C0.166626 7.19143 0.308402 7.3332 0.483293 7.3332H6.16659V13.0165C6.16659 13.1914 6.30837 13.3332 6.48326 13.3332C6.65815 13.3332 6.79993 13.1914 6.79993 13.0165V7.3332H12.5166C12.6915 7.3332 12.8333 7.19143 12.8333 7.01654C12.8333 6.84165 12.6915 6.69987 12.5166 6.69987H6.79993V0.983171Z",fill:"#EBEBF5","fill-opacity":"0.6"}})])},staticRenderFns$1=[];const __vue2_script$1={},__cssModules$1={};var __component__$1=normalizeComponent(__vue2_script$1,render$1,staticRenderFns$1,!1,__vue2_injectStyles$1,null,null,null);function __vue2_injectStyles$1(d){for(let r in __cssModules$1)this[r]=__cssModules$1[r]}var IconPlus=function(){return __component__$1.exports}();const useBulletsEditor=(d,r)=>({focusLastBullet:e=>{var g,m,v,c;const n=e||d.value,y=Math.max.apply(Math,n.map(a=>a.last_focus)),h=n.find(a=>a.last_focus===y||a.focus);if(h)(g=h.editor)==null||g.blur(),r(h.id);else if(d.length){const[a]=d;(m=a==null?void 0:a.editor)==null||m.blur(),r(a.id)}if(h)(v=h.editor)==null||v.blur(),r(h.id);else{const[a]=d.value;(c=a.editor)==null||c.blur(),r(a.id)}return h}});var render=function(){var d=this,r=d.$createElement,t=d._self._c||r;return d.state?t("div",{staticClass:"memod-composer"},[t("div",{staticClass:"title-input-container"},[t("span",{staticClass:"active-part"}),t("input",{directives:[{name:"model",rawName:"v-model",value:d.state.title,expression:"state.title"}],ref:"editorTitle",staticClass:"text-box title",attrs:{type:"text",placeholder:"Your amazing title",maxlength:"100"},domProps:{value:d.state.title},on:{input:function(e){e.target.composing||d.$set(d.state,"title",e.target.value)}}})]),t("div",{ref:"mainList",staticClass:"space-y-8 main-list"},d._l(d.state.bullets,function(e,n){return t("composer-item",{key:e.id,attrs:{index:n,bullet:e,"show-remove":Boolean(d.state.bullets.length>1),suggestions:d.state.suggestions,"display-type":d.bulletDisplayType,"is-focused":e.focus},on:{"text-changed":d.onTextChanged,"suggestion-query":d.handleSuggestionQuery,removed:d.handleRemove,"selection-updated":d.handleSelectionUpdated,blur:d.handleBlur,focus:function(y){return d.focusBullet(e.id)}}})}),1),d.canAddBullets?t("button",{staticClass:"mt-4 add-bullet-btn flex items-center",attrs:{type:"button"},on:{click:function(e){return d.addBullet({},!0)}}},[t("IconPlus",{attrs:{alt:"Add new bullet"}}),t("span",{staticClass:"ml-3 block"},[d._v(" Add New Bullet ")])],1):d._e()]):d._e()},staticRenderFns=[];const __sfc_main={};__sfc_main.props={title:{type:String,default:""},value:{type:Array,required:!0},suggestionQuerySearch:{type:Function,default:()=>{}},bulletDisplayType:{type:String,validator:d=>Object.values(BULLET_DISPLAY_TYPES).includes(d),default:BULLET_DISPLAY_TYPES.bullet}},__sfc_main.setup=(d,r)=>{const t=d;compositionApi.provide("suggestionQuerySearch",t.suggestionQuerySearch);const e=r.emit,n=compositionApi.reactive({title:"",currentElement:null,currentSelection:null,suggestions:[""],bullets:compositionApi.ref(t.value)}),y=Mitt();compositionApi.provide("eventHub",y);const h=compositionApi.computed(()=>n.bullets.length<MAX_BULLET_LENGTH);compositionApi.watch(()=>t.title,(B,q)=>{B!==q&&(n.title=B)},{immediate:!0}),compositionApi.watch(()=>n.title,(B,q)=>{e("title-updated",n.title)},{immediate:!0}),compositionApi.watch(()=>[...t.value],(B,q)=>{(B.length!==q.length||B.some((F,U)=>F.prettyText!==q[U].prettyText))&&(n.bullets=B)},{immediate:!0,deep:!0}),compositionApi.watch(()=>[...n.bullets],B=>{e("input",B)},{deep:!0});const g=B=>{const{id:q}=B,F=n.bullets.findIndex(({id:U})=>U===q);n.bullets[F].rawText=B.text,n.bullets[F].prettyText=B.html},m=B=>{const q=n.bullets.findIndex(F=>F.editorId===B);q!==-1&&(n.bullets[q].focus=!0)},v=B=>{n.bullets.forEach((q,F)=>{q.focus&&q.id!==B&&(n.bullets[F].focus=!1,i(q.id))})},c=(B,q=!0)=>{if(n.bullets.length<MAX_BULLET_LENGTH){const{id:F,prettyText:U}=B,R=F||Date.now().toString(),D=U||"",C=`editor_${R}`;n.bullets=[...n.bullets,me(fe({},B),{id:R,editorId:C,prettyText:D,focus:!1,last_focus:0})],v(C),n.currentElement=document.querySelector(`.${C}`),compositionApi.nextTick(()=>{q&&I(R)})}},a=compositionApi.ref(null),o=()=>{const B=document.querySelector(".main-list");B&&Sortable.create(B,{axis:"y",handle:".bullet-order",onStart:()=>{const q=Math.max.apply(Math,n.bullets.map(U=>U.last_focus)),F=globalThis.bullets.find(U=>U.last_focus===q);F&&(b(F.id,"blur"),n.currentElement=null)},onEnd:()=>{}})};compositionApi.onMounted(()=>{setTimeout(()=>{var B;o(),(B=document.querySelector(".title"))==null||B.focus()})});const i=B=>{const q=n.bullets.find(F=>F.id===B);q&&(q.focus=!1,n.currentElement=null,emitBulletOnBlur())},p=B=>{n.bullets=n.bullets.filter(q=>q.id!==B)},_=B=>{n.currentSelection=B},f=()=>{},{bullets:u}=compositionApi.toRefs(n),{focusLastBullet:l}=useBulletsEditor(u,m),b=(B,q,F)=>{y.emit(`bullet:${B}`,{name:q,params:F})},s=B=>{const q=l();b(q==null?void 0:q.id,"insertText",B)},x=B=>{const q=l();b(q==null?void 0:q.id,"formatSelection",B)},M=B=>{const q=l(n.bullets);b(q==null?void 0:q.id,"insertImages",B)},P=B=>{const q=l();b(q==null?void 0:q.id,"insertLink",B)},A=B=>{const q=l();b(q==null?void 0:q.id,"insertMemoLink",B)},T=B=>{const q=l();b(q==null?void 0:q.id,"insertMention",B)},w=()=>{c({prettyText:"",rawText:""},!0)},E=B=>{n.title=B},O=compositionApi.ref(),k=()=>{var q;const B=l();(q=O.value)==null||q.blur(),b(B==null?void 0:B.id,"blur")},I=(B,q)=>{n.bullets.findIndex(U=>U.id===B)!==-1&&(n.bullets=n.bullets.map(U=>(U.id==B?(U.focus=!0,U.last_focus=Date.now(),n.currentElement=document.querySelector(`.editor_${U.id}`),e("focus",U,q),emitCurrentSelectionAndFormat(q)):U.focus=!1,U)))};return Object.assign({state:n,canAddBullets:h,onTextChanged:g,addBullet:c,mainList:a,handleBlur:i,handleRemove:p,handleSelectionUpdated:_,handleSuggestionQuery:f,editorTitle:O,focusBullet:I},{addNewBullet:w,insertText:s,insertImages:M,insertMemoLink:A,insertLink:P,insertMention:T,formatSelection:x,setTitleContent:E,blurBullet:k,focusBullet:I,clearBullet:()=>{n.bullets.splice(0,n.bullets.length),n.title="",n.bulletDisplayType=BULLET_DISPLAY_TYPES.bullet,w()}})},__sfc_main.components=Object.assign({ComposerItem,IconPlus},__sfc_main.components);const __vue2_script=__sfc_main,__cssModules={};var __component__=normalizeComponent(__vue2_script,render,staticRenderFns,!1,__vue2_injectStyles,null,null,null);function __vue2_injectStyles(d){for(let r in __cssModules)this[r]=__cssModules[r]}var MemodComposer=function(){return __component__.exports}();return MemodComposer});
