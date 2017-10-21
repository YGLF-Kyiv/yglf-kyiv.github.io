webpackJsonp([0x9427c64ab85d],{"./node_modules/create-react-class/factory.js":function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=E.hasOwnProperty(t)?E[t]:null;N.hasOwnProperty(t)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function s(e,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,s=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&g.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var a=n[i],l=o.hasOwnProperty(i);if(r(l,i),g.hasOwnProperty(i))g[i](e,a);else{var p=E.hasOwnProperty(i),m="function"==typeof a,y=m&&!p&&!l&&n.autobind!==!1;if(y)s.push(i,a),o[i]=a;else if(l){var b=E[i];u(p&&("DEFINE_MANY_MERGED"===b||"DEFINE_MANY"===b),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",b,i),"DEFINE_MANY_MERGED"===b?o[i]=d(o[i],a):"DEFINE_MANY"===b&&(o[i]=f(o[i],a))}else o[i]=a}}}else;}function l(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in g;u(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var s=n in e;u(!s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=o}}}function p(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(u(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function y(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=m(e,r)}}function b(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=o,this.refs=a,this.updater=r||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;u("object"==typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=s});t.prototype=new v,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(s.bind(null,t)),s(t,_),s(t,e),s(t,j),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in E)t.prototype[r]||(t.prototype[r]=null);return t}var h=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)s(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},j={componentWillUnmount:function(){this.__isMounted=!1}},N={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},v=function(){};return i(v.prototype,e.prototype,N),b}var s,i=n("./node_modules/object-assign/index.js"),a=n("./node_modules/fbjs/lib/emptyObject.js"),u=n("./node_modules/fbjs/lib/invariant.js"),c="mixins";s={},e.exports=r},"./node_modules/object-assign/index.js":function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,a,u=n(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var l in o)s.call(o,l)&&(u[l]=o[l]);if(r){a=r(o);for(var p=0;p<a.length;p++)i.call(o,a[p])&&(u[a[p]]=o[a[p]])}}return u}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n("./node_modules/react/react.js"),s=o(r),i=function(){return s.default.createElement("div",null,s.default.createElement("h1",null,"NOT FOUND"),s.default.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))};t.default=i,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-404-js-bafe40c35a3beb6802f0.js.map