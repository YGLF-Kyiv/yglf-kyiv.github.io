webpackJsonp([0xcdb6e3eb306c],{215:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(3),i=o(c);n(487);var l=n(16),s=function(e){function t(){return r(this,t),u(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentWillMount=function(){(0,l.gaTrack)({eventCategory:"purchase",eventAction:"success",eventLabel:"Success"})},t.prototype.render=function(){return i.default.createElement("div",{className:"page-successful-purchase lines-bg"},i.default.createElement("div",{className:"container container-fluid"},i.default.createElement("h2",null,"Thank you!"),i.default.createElement("p",null,"See you in Kyiv in May! ",i.default.createElement("br",null),i.default.createElement("em",null,"YGLF | Kyiv Team"),".")))},t}(i.default.Component);t.default=s,e.exports=t.default},487:function(e,t){},14:function(e,t){"use strict";function n(){return"undefined"!=typeof window}t.__esModule=!0,t.isInBrowser=n},16:function(e,t,n){"use strict";function o(e){var t=e.hitType,n=void 0===t?"event":t,o=e.eventCategory,u=e.eventAction,a=e.eventLabel;(0,r.isInBrowser)()&&window.ga&&(console.log("Tracking QA event",e),window.ga("send",{hitType:n,eventCategory:o,eventAction:u,eventLabel:a}))}t.__esModule=!0,t.gaTrack=o;var r=n(14)}});
//# sourceMappingURL=component---src-pages-successful-purchase-js-2364b6c6785ea914e6a6.js.map