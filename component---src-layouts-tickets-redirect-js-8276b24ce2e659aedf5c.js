webpackJsonp([20422874828e4],{"./node_modules/json-loader/index.js!./.cache/json/layout-tickets-redirect.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/tickets-redirect.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/react.js"),a=r(i),u=n("./src/layouts/tickets-redirect.js"),s=r(u),c=n("./node_modules/json-loader/index.js!./.cache/json/layout-tickets-redirect.json"),l=r(c);t.default=function(e){return a.default.createElement(s.default,o({},e,l.default))},e.exports=t.default},"./data/SiteConfig.js":function(e,t){"use strict";e.exports={blogPostDir:"sample-posts",siteTitle:"You Gotta Love Frontend Conference",twitterTitle:"YGLF Kyiv",siteLogo:"/logo.svg",siteUrl:"yglf.com.ua",pathPrefix:"/",siteDescription:"Kyiv Frontend Conference | May 24-25, 2018",siteRss:"/rss.xml",siteFBAppID:"yglf.kyiv",googleAnalyticsID:"UA-107799328-1",userTwitter:"yglf_kyiv",email:"hello@yglf.com.ua",website:"http://yglf.com.ua",ticketsUrl:"https://2event.com/ru/events/1037785",workshopWebpackUrl:"https://2event.com/events/1230538",workshopWebpackAndConfUrl:"https://2event.com/events/1037785",sitemapPages:["/","/speakers","/tickets","/diversity","/sponsorship","/code-of-conduct"]}},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(l=f[i],!c(e[l],t[l],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n("./node_modules/deep-equal/lib/keys.js"),s=n("./node_modules/deep-equal/lib/is_arguments.js"),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),f=r(l),d=n("./node_modules/prop-types/index.js"),p=r(d),T=n("./node_modules/react-side-effect/lib/index.js"),E=r(T),m=n("./node_modules/deep-equal/index.js"),y=r(m),A=n("./node_modules/react-helmet/lib/HelmetUtils.js"),h=n("./node_modules/react-helmet/lib/HelmetConstants.js"),b=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case h.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.TAG_NAMES.TITLE:return s({},o,(t={},t[r.type]=a,t.titleAttributes=s({},i),t));case h.TAG_NAMES.BODY:return s({},o,{bodyAttributes:s({},i)});case h.TAG_NAMES.HTML:return s({},o,{htmlAttributes:s({},i)})}return s({},o,(n={},n[r.type]=s({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),s=(0,A.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case h.TAG_NAMES.LINK:case h.TAG_NAMES.META:case h.TAG_NAMES.NOSCRIPT:case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=s({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},_=function(){return null},S=(0,E.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(_),v=b(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),u=r(a),s=n("./node_modules/object-assign/index.js"),c=r(s),l=n("./node_modules/react-helmet/lib/HelmetConstants.js"),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=y(e,l.TAG_NAMES.TITLE),n=y(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return y(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();t.indexOf(s)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(u)===-1||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],s=(0,c.default)({},r[u],o[u]);r[u]=s}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:E([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:y(e,l.HELMET_PROPS.DEFER),encode:y(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:m(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:m(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},h=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){h(t)},0)}}(),b=function(e){return clearTimeout(e)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,P=function(e){g&&S(g),e.defer?g=_(function(){O(e,function(){g=null})}):(O(e),g=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(l.TAG_NAMES.BODY,r),M(l.TAG_NAMES.HTML,o),w(d,p);var T={baseTag:j(l.TAG_NAMES.BASE,n),linkTags:j(l.TAG_NAMES.LINK,i),metaTags:j(l.TAG_NAMES.META,a),noscriptTags:j(l.TAG_NAMES.NOSCRIPT,u),scriptTags:j(l.TAG_NAMES.SCRIPT,c),styleTags:j(l.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)}),t&&t(),s(e,E,m)},R=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),M(l.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var s=a[u],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),o.indexOf(s)===-1&&o.push(s);var f=i.indexOf(s);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},j=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=C(n),i=R(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),i=L(n,o);return[u.default.createElement(l.TAG_NAMES.TITLE,i,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return N(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(l.TAG_NAMES.BASE,t,r),bodyAttributes:x(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(l.ATTRIBUTE_NAMES.HTML,o,r),link:x(l.TAG_NAMES.LINK,i,r),meta:x(l.TAG_NAMES.META,a,r),noscript:x(l.TAG_NAMES.NOSCRIPT,u,r),script:x(l.TAG_NAMES.SCRIPT,s,r),style:x(l.TAG_NAMES.STYLE,c,r),title:x(l.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=P,t.mapStateOnServer=U,t.reducePropsToState=A,t.requestAnimationFrame=_,t.warn=v}).call(t,function(){return this}())},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n("./node_modules/react/react.js"),s=r(u),c=n("./node_modules/exenv/index.js"),l=r(c),f=n("./node_modules/shallowequal/index.js"),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return s.default.createElement(c,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(c)+")",E.canUseDOM=l.default.canUseDOM,E}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!u(c))return!1;var l=e[c],f=t[c];if(o=n?n.call(r,l,f,c):void 0,o===!1||void 0===o&&l!==f)return!1}return!0}},"./src/layouts/tickets-redirect.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n("./node_modules/react/react.js"),s=r(u),c=n("./node_modules/react-helmet/lib/Helmet.js"),l=r(c),f=n("./data/SiteConfig.js"),d=r(f);n("./src/layouts/tickets-redirect.scss");var p=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.children;return s.default.createElement("div",{className:"tickets-redirect"},s.default.createElement(l.default,null,s.default.createElement("title",null,d.default.siteTitle),s.default.createElement("meta",{name:"description",content:d.default.siteDescription}),s.default.createElement("meta",{property:"og:title",content:d.default.siteDescription}),s.default.createElement("meta",{property:"og:url",content:d.default.website}),s.default.createElement("meta",{property:"og:description",content:d.default.siteDescription}),s.default.createElement("meta",{property:"og:type",content:"website"}),s.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.default.createElement("meta",{name:"twitter:site",content:"@"+d.default.userTwitter}),s.default.createElement("meta",{name:"twitter:creator",content:"@"+d.default.userTwitter}),s.default.createElement("meta",{name:"twitter:title",content:d.default.twitterTitle}),s.default.createElement("meta",{name:"twitter:description",content:d.default.siteDescription}),s.default.createElement("meta",{charset:"utf-8"}),s.default.createElement("meta",{"http-equiv":"refresh",content:"1; url="+d.default.ticketsUrl})),s.default.createElement("div",null,e()))},t}(s.default.Component);t.default=p,e.exports=t.default},"./src/layouts/tickets-redirect.scss":function(e,t){}});
//# sourceMappingURL=component---src-layouts-tickets-redirect-js-8276b24ce2e659aedf5c.js.map