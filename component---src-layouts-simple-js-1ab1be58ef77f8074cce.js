webpackJsonp([0xf707306a00e1],{"./node_modules/json-loader/index.js!./.cache/json/layout-simple.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Admin/Documents/Projects/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/simple.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),s=r(a),i=n("./src/layouts/simple.js"),u=r(i),l=n("./node_modules/json-loader/index.js!./.cache/json/layout-simple.json"),c=r(l);t.default=function(e){return s.default.createElement(u.default,o({},e,c.default))},e.exports=t.default},"./data/SiteConfig.js":function(e,t){"use strict";e.exports={blogPostDir:"sample-posts",siteTitle:"You Gotta Love Frontend Conference",twitterTitle:"YGLF Kyiv",siteLogo:"/logo.svg",siteUrl:"yglf.com.ua",pathPrefix:"/",siteDescription:"Kyiv Frontend Conference | May 24-25, 2018",siteRss:"/rss.xml",siteFBAppID:"942305182583127",fbPage:"yglf.kyiv",googleAnalyticsID:"UA-107799328-1",userTwitter:"yglf_kyiv",email:"hello@yglf.com.ua",website:"http://yglf.com.ua",ticketsUrl:"https://2event.com/ru/events/1037785",workshopWebpackUrl:"https://2event.com/events/1230538",workshopWebpackAndConfUrl:"https://2event.com/events/1037785",sitemapPages:["/","/about","/speakers","/sponsorship","/tickets","/diversity","/code-of-conduct"]}},"./node_modules/classnames/index.js":function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=s.call(e),t=s.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=i(e),d=i(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(c=f[a],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var s=Array.prototype.slice,i=n("./node_modules/deep-equal/lib/keys.js"),u=n("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/flexboxgrid/css/index.css":function(e,t){},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),f=r(c),d=n("./node_modules/prop-types/index.js"),p=r(d),m=n("./node_modules/react-side-effect/lib/index.js"),T=r(m),E=n("./node_modules/deep-equal/index.js"),y=r(E),h=n("./node_modules/react-helmet/lib/HelmetUtils.js"),b=n("./node_modules/react-helmet/lib/HelmetConstants.js"),_=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),s(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,s=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=s,t.titleAttributes=u({},a),t));case b.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},a)});case b.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},a)})}return u({},o,(n={},n[r.type]=u({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,s=a.children,i=o(a,["children"]),u=(0,h.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,s),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:s});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:s})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=u({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},v=(0,T.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(A),g=_(v);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n("./node_modules/react/react.js"),i=r(s),u=n("./node_modules/object-assign/index.js"),l=r(u),c=n("./node_modules/react-helmet/lib/HelmetConstants.js"),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=y(e,c.TAG_NAMES.TITLE),n=y(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return y(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],s=a.toLowerCase();if(e.indexOf(s)!==-1&&n[s])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),s=0;s<a.length;s++){var i=a[s],u=i.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(i)===-1||i!==c.TAG_PROPERTIES.INNER_HTML&&i!==c.TAG_PROPERTIES.CSS_TEXT&&i!==c.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),s=0;s<a.length;s++){var i=a[s],u=(0,l.default)({},r[i],o[i]);r[i]=u}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:m(c.ATTRIBUTE_NAMES.BODY,e),defer:y(e,c.HELMET_PROPS.DEFER),encode:y(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:m(c.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),_=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,w=function(e){S&&v(S),e.defer?S=A(function(){j(e,function(){S=null})}):(j(e),S=null)},j=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,s=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,o),P(d,p);var m={baseTag:C(c.TAG_NAMES.BASE,n),linkTags:C(c.TAG_NAMES.LINK,a),metaTags:C(c.TAG_NAMES.META,s),noscriptTags:C(c.TAG_NAMES.NOSCRIPT,i),scriptTags:C(c.TAG_NAMES.SCRIPT,l),styleTags:C(c.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(m).forEach(function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=m[e].oldTags)}),t&&t(),u(e,T,E)},O=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=O(e)),M(c.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),s=Object.keys(t),i=0;i<s.length;i++){var u=s[i],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),o.indexOf(u)===-1&&o.push(u);var f=a.indexOf(u);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==s.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,s.join(","))}},C=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],s=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return s=t,n.isEqualNode(e)})?o.splice(s,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},R=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=R(n),a=O(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},k=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",s=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(s?"/>":">"+a+"</"+e+">")},"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},L=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),a=x(n,o);return[i.default.createElement(c.TAG_NAMES.TITLE,a,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),i.default.createElement(e,o)})},G=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return L(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return k(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,s=e.metaTags,i=e.noscriptTags,u=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:G(c.TAG_NAMES.BASE,t,r),bodyAttributes:G(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:G(c.ATTRIBUTE_NAMES.HTML,o,r),link:G(c.TAG_NAMES.LINK,a,r),meta:G(c.TAG_NAMES.META,s,r),noscript:G(c.TAG_NAMES.NOSCRIPT,i,r),script:G(c.TAG_NAMES.SCRIPT,u,r),style:G(c.TAG_NAMES.STYLE,l,r),title:G(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=I,t.handleClientStateChange=w,t.mapStateOnServer=B,t.reducePropsToState=h,t.requestAnimationFrame=A,t.warn=g}).call(t,function(){return this}())},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("./node_modules/react/react.js"),u=r(i),l=n("./node_modules/exenv/index.js"),c=r(l),f=n("./node_modules/shallowequal/index.js"),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function f(){m=e(p.map(function(e){return e.props})),T.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,T=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.default.createElement(l,this.props)},t}(i.Component);return T.displayName="SideEffect("+r(l)+")",T.canUseDOM=c.default.canUseDOM,T}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var l=a[u];if(!i(l))return!1;var c=e[l],f=t[l];if(o=n?n.call(r,c,f,l):void 0,o===!1||void 0===o&&c!==f)return!1}return!0}},"./src/components/BuyTicketsButton/BuyTicketsButton.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),u=r(i);n("./src/components/BuyTicketsButton/buy-tickets-button.scss");var l=n("./src/shared/utils/ga.js"),c=n("./data/SiteConfig.js"),f=r(c),d=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.trackClick=n.trackClick.bind(n),n}return s(t,e),t.prototype.trackClick=function(){var e=this.props,t=e.eventCategory,n=e.eventLabel;(0,l.gaTrack)({eventCategory:t,eventAction:"click",eventLabel:n})},t.prototype.render=function(){var e=this.props,t=e.href,n=e.text;return u.default.createElement("a",{target:"_blank",href:t,className:"buy-tickets drop-shadow-small",rel:"noopener noreferrer",onClick:this.trackClick},n)},t}(u.default.Component);d.propTypes={href:i.PropTypes.string,eventLabel:i.PropTypes.string,eventCategory:i.PropTypes.string,text:i.PropTypes.string},d.defaultProps={href:f.default.ticketsUrl,eventLabel:"Buy Tickets",eventCategory:"purchase",text:"Buy Tickets"},t.default=d,e.exports=t.default},"./src/components/BuyTicketsButton/buy-tickets-button.scss":function(e,t){},"./src/components/Footer/Footer.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),u=r(i);n("./src/components/Footer/footer.scss");var l=n("./src/components/Subscribe/Subscribe.js"),c=r(l),f=n("./src/components/SocialIcons/SocialIcons.js"),d=r(f),p=n("./node_modules/gatsby-link/index.js"),m=r(p),T=n("./data/SiteConfig.js"),E=r(T),y=n("./src/shared/utils/ga.js"),h=[{type:"twitter",url:"https://twitter.com/"+E.default.userTwitter},{type:"facebook",url:"https://www.facebook.com/"+E.default.fbPage}],b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.trackClick=function(){(0,y.gaTrack)({eventCategory:"purchase",eventAction:"click",eventLabel:"Buy Tickets"})},t.prototype.render=function(){return u.default.createElement("div",{className:"footer"},u.default.createElement("div",{className:"container container-fluid"},u.default.createElement("div",{className:"row footer-subscribe"},u.default.createElement("div",{className:"col-sm-6 col-xs-12"},u.default.createElement("strong",null,"Subscribe"),u.default.createElement("p",null,"Exciting things ahead,",u.default.createElement("br",null),"stay tuned for more information."),u.default.createElement(c.default,null)),u.default.createElement("div",{className:"col-sm-6 col-xs-12"},u.default.createElement("strong",null,"Find your way"),u.default.createElement("div",{className:"footer-links"},u.default.createElement(m.default,{to:"/"},"Home"),u.default.createElement("a",{target:"_blank",href:E.default.ticketsUrl,rel:"noopener noreferrer",onClick:this.trackClick},"Buy Tickets"),u.default.createElement(m.default,{to:"/about"},"About"),u.default.createElement(m.default,{to:"/speakers"},"Speakers"),u.default.createElement(m.default,{to:"/sponsorship"},"Sponsorship"),u.default.createElement(m.default,{to:"/diversity"},"Diversity Tickets"),u.default.createElement(m.default,{to:"/schedule"},"Schedule"),u.default.createElement("a",{href:"https://yougottalovefrontend.com/",target:"_blank",rel:"noopener noreferrer"},"YGLF 2017"),u.default.createElement(m.default,{to:"/code-of-conduct"},"Code Of Conduct")))),u.default.createElement("div",{className:"row footer-contacts"},u.default.createElement("div",{className:"col-md-6 col-xs-12"},u.default.createElement("div",{className:"created-by"},u.default.createElement("span",null,"Designed by"," ",u.default.createElement("a",{href:"http://highondesign.wix.com/",target:"_blank",rel:"noopener noreferrer"},"WixStudio"),",")," ",u.default.createElement("span",null,"Coded by"," ",u.default.createElement("a",{href:"https://www.linkedin.com/in/andriisierkov/",target:"_blank",rel:"noopener noreferrer"},"Andrei Sierkov")," & ",u.default.createElement("a",{href:"https://www.linkedin.com/in/marina-marina/",target:"_blank",rel:"noopener noreferrer"},"Marina Sol")))),u.default.createElement("div",{className:"col-md-6 col-xs-12"},u.default.createElement("a",{className:"footer-mailto",href:"mailto:"+E.default.email},E.default.email),u.default.createElement(d.default,{data:h})))))},t}(u.default.Component);t.default=b,e.exports=t.default},"./src/components/Footer/footer.scss":function(e,t){},"./src/components/Header/Header.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),u=r(i);n("./src/components/Header/header.scss");var l=n("./node_modules/gatsby-link/index.js"),c=r(l),f=n("./src/components/BuyTicketsButton/BuyTicketsButton.js"),d=r(f),p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.showButton;return u.default.createElement("div",{className:"header"},u.default.createElement("div",{className:"header-title"},u.default.createElement("div",{className:"container-fluid"},u.default.createElement(c.default,{to:"/"},u.default.createElement("span",null,"You Gotta Love")," Frontend Conference"))),u.default.createElement("div",{className:"header-description"},u.default.createElement("div",{className:"container-fluid"},"YGLF is a community event built by developers for developers")),u.default.createElement("div",{className:"header-date-location"},u.default.createElement("div",{className:"container-fluid"},u.default.createElement("strong",null,"24-25 May 2018"),u.default.createElement("span",null,", "),"Bel étage | Kyiv, Ukraine")),e&&u.default.createElement(d.default,null))},t}(u.default.Component);p.defaultProps={showButton:!0},t.default=p,e.exports=t.default},"./src/components/Header/header.scss":function(e,t){},"./src/components/HeaderMenu/HeaderMenu.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),u=r(i);n("./src/components/HeaderMenu/header-menu.scss");var l=n("./node_modules/gatsby-link/index.js"),c=r(l),f=n("./node_modules/classnames/index.js"),d=r(f),p=n("./src/shared/utils/common.js"),m=[{title:"Home",to:"/"},{title:"About",to:"/about"},{title:"Speakers",to:"/speakers"},{title:"Schedule",to:"/schedule"},{title:"Sponsors",to:"/sponsorship"}],T=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.state={menuExpanded:!1},n.toggleMenu=n.toggleMenu.bind(n),n.closeMenu=n.closeMenu.bind(n),n}return s(t,e),t.prototype.renderList=function(){var e=this,t=(0,p.isInBrowser)()&&["/",""].includes(document.location.pathname);return m.map(function(n){var r="/"===n.to&&!t;return u.default.createElement(c.default,{activeClassName:"-active",to:n.to,key:n.title,onClick:e.closeMenu,className:(0,d.default)({"-disabled":n.disabled,"-unhighlight":r})},n.title)})},t.prototype.toggleMenu=function(e){e.preventDefault(),this.state.menuExpanded?this.closeMenu():this.openMenu()},t.prototype.openMenu=function(){this.setState({menuExpanded:!0}),window.document.body.style.overflow="hidden",window.scrollTo(0,0)},t.prototype.closeMenu=function(){
this.setState({menuExpanded:!1}),window.document.body.style.overflow="auto"},t.prototype.render=function(){var e=this.state.menuExpanded;return u.default.createElement("div",{className:(0,d.default)("header-menu",{"-expanded":e})},u.default.createElement("div",{className:"header-menu-expand"},u.default.createElement("a",{href:"#",className:"header-menu-expand-btn",onClick:this.toggleMenu},e?"Back":"Menu")),u.default.createElement("div",{className:"header-menu-inner"},this.renderList()),u.default.createElement("div",{className:"header-menu-overlay"},this.renderList()))},t}(u.default.Component);t.default=T,e.exports=t.default},"./src/components/HeaderMenu/header-menu.scss":function(e,t){},"./src/components/Helmet/Helmet.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),u=r(i),l=n("./data/SiteConfig.js"),c=r(l),f=n("./node_modules/react-helmet/lib/Helmet.js"),d=r(f),p=n("./src/shared/utils/common.js"),m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.componentDidMount=function(){(0,p.isInBrowser)()&&(!function(e,t,n,r,o,a,s){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],a=t.createElement(n),a.async=!0,a.src=r,s=t.getElementsByTagName(n)[0],s.parentNode.insertBefore(a,s))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","2013966075486522"),fbq("track","PageView"))},t.prototype.render=function(){return u.default.createElement(d.default,null,u.default.createElement("title",null,c.default.siteTitle),u.default.createElement("meta",{name:"description",content:c.default.siteDescription}),u.default.createElement("meta",{charset:"utf-8"}),u.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),u.default.createElement("meta",{name:"description",content:c.default.siteDescription}),u.default.createElement("meta",{property:"fb:app_id",content:c.default.siteFBAppID}),u.default.createElement("meta",{property:"og:title",content:"You Gotta Love Frontend Conference"}),u.default.createElement("meta",{property:"og:url",content:"http://"+c.default.siteUrl}),u.default.createElement("meta",{property:"og:description",content:c.default.siteDescription}),u.default.createElement("meta",{property:"og:type",content:"website"}),u.default.createElement("meta",{property:"og:image",content:"http://"+c.default.siteUrl+"/fb-share.png"}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:site",content:"@"+c.default.userTwitter}),u.default.createElement("meta",{name:"twitter:creator",content:"@"+c.default.userTwitter}),u.default.createElement("meta",{name:"twitter:title",content:c.default.siteTitle}),u.default.createElement("meta",{name:"twitter:description",content:c.default.siteDescription}),u.default.createElement("meta",{name:"twitter:image:src",content:"http://"+c.default.siteUrl+"/twitter-share.png"}),u.default.createElement("link",{rel:"dns-prefetch",href:"//use.typekit.net"}),u.default.createElement("link",{rel:"dns-prefetch",href:"//cdn.trackjs.com"}),u.default.createElement("link",{rel:"dns-prefetch",href:"//usage.trackjs.com"}),u.default.createElement("link",{rel:"shortcut icon",href:"64.png"}),u.default.createElement("link",{rel:"icon",href:"favicon.ico"}),u.default.createElement("script",{src:"/libs/createjs.min.js"}))},t}(u.default.Component);t.default=m,e.exports=t.default},"./src/components/Subscribe/Subscribe.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),u=r(i);n("./src/components/Subscribe/subscribe.scss");var l=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return u.default.createElement("form",{action:"https://yglf.us17.list-manage.com/subscribe/post?u=6304d25cb6fc721563ac70de3&id=c5ca8dfcd8",method:"post",className:"subscribe-form"},u.default.createElement("input",{type:"email",name:"EMAIL",placeholder:"Enter Your email address",required:!0}),u.default.createElement("div",{className:"subscribe-form-token"},u.default.createElement("input",{type:"text",name:"b_6304d25cb6fc721563ac70de3_c5ca8dfcd8",tabIndex:"-1",value:""})),u.default.createElement("button",{type:"submit",name:"subscribe"},u.default.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw"}),u.default.createElement("span",null,"OK")))},t}(i.Component);t.default=l,e.exports=t.default},"./src/components/Subscribe/subscribe.scss":function(e,t){},"./src/layouts/common.scss":function(e,t){},"./src/layouts/fontello.css":function(e,t){},"./src/layouts/simple.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),u=r(i);n("./node_modules/flexboxgrid/css/index.css"),n("./src/layouts/common.scss"),n("./src/layouts/fontello.css");var l=n("./src/components/Header/Header.js"),c=r(l),f=n("./src/components/HeaderMenu/HeaderMenu.js"),d=r(f),p=n("./src/components/Helmet/Helmet.js"),m=r(p),T=n("./src/components/Footer/Footer.js"),E=r(T),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.children;return u.default.createElement("div",{className:"app"},u.default.createElement(m.default,null),u.default.createElement("div",{className:"app-header"},u.default.createElement(d.default,null),u.default.createElement(c.default,null)),u.default.createElement("div",{className:"app-body"},e()),u.default.createElement("div",{className:"app-footer"},u.default.createElement(E.default,null)))},t}(u.default.Component);t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-simple-js-1ab1be58ef77f8074cce.js.map