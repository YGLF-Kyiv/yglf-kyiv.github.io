webpackJsonp([0xd3d0832cef0b],{"./src/components/InvitationBlock/InvitationBlock.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n("./node_modules/react/react.js"),l=o(a);n("./src/components/InvitationBlock/invitation-block.scss");var c=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data;return l.default.createElement("div",{className:"info-block container container-fluid"},l.default.createElement("div",{className:"info-block-text"},l.default.createElement("h2",null,"Hello, ",e.invitation.name,"!"),l.default.createElement("p",null,"We’ve made a very personal invitation asking you to speak at You Gotta Love Frontend Conference in Kyiv, Ukraine."),l.default.createElement("p",null,l.default.createElement("div",{className:"invitation-block-video"},l.default.createElement("iframe",{src:e.invitation.video,width:"450",height:"253",frameBorder:"0",allowFullScreen:!0}))),l.default.createElement("p",null,e.invitation.text)))},t}(a.Component);t.default=c,e.exports=t.default},"./src/components/InvitationBlock/invitation-block.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/invitation.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.data;return i.default.createElement("div",{className:"lines-bg"},i.default.createElement(l.default,{data:t}))}t.__esModule=!0,t.pageQuery=void 0,t.default=r;var s=n("./node_modules/react/react.js"),i=o(s),a=n("./src/components/InvitationBlock/InvitationBlock.js"),l=o(a);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-invitation-js-c3a20b525e094b4c4f90.js.map