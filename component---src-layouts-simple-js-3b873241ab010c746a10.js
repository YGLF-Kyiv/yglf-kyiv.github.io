webpackJsonp([0xf707306a00e1],{115:function(e,t){e.exports={layoutContext:{}}},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(3),i=r(a),u=n(227),l=r(u),c=n(115),s=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},11:function(e,t){"use strict";e.exports={blogPostDir:"sample-posts",siteTitle:"You Gotta Love Frontend Conference",twitterTitle:"YGLF Kyiv",siteLogo:"/logo.svg",siteUrl:"yglf.com.ua",pathPrefix:"/",siteDescription:"Kyiv Frontend Conference | May 24-25, 2018",siteRss:"/rss.xml",siteFBAppID:"942305182583127",fbPage:"yglf.kyiv",googleAnalyticsID:"UA-107799328-1",userTwitter:"yglf_kyiv",email:"hello@yglf.com.ua",website:"http://yglf.com.ua",ticketsUrl:"https://2event.com/ru/events/1037785",workshopWebpackUrl:"https://2event.com/events/1230538",workshopWebpackAndConfUrl:"https://2event.com/events/1037785",sitemapPages:["/","/about","/speakers","/sponsors","/tickets","/diversity","/code-of-conduct"]}},24:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},48:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),a=f.length-1;a>=0;a--)if(f[a]!=p[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(50),l=n(49),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},49:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},50:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},51:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},108:function(e,t){},63:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),f=r(s),p=n(8),d=r(p),E=n(65),T=r(E),m=n(48),y=r(m),h=n(64),b=n(28),A=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case b.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case b.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},_=(0,T.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(v),S=A(_);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},28:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},64:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(3),u=r(i),l=n(7),c=r(l),s=n(28),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=y(e,s.TAG_NAMES.TITLE),n=y(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return y(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:E(s.ATTRIBUTE_NAMES.BODY,e),defer:y(e,s.HELMET_PROPS.DEFER),encode:y(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:E(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),A=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,g=function(e){w&&_(w),e.defer?w=v(function(){O(e,function(){w=null})}):(O(e),w=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;C(s.TAG_NAMES.BODY,r),C(s.TAG_NAMES.HTML,o),M(p,d);var E={baseTag:R(s.TAG_NAMES.BASE,n),linkTags:R(s.TAG_NAMES.LINK,a),metaTags:R(s.TAG_NAMES.META,i),noscriptTags:R(s.TAG_NAMES.NOSCRIPT,u),scriptTags:R(s.TAG_NAMES.SCRIPT,c),styleTags:R(s.TAG_NAMES.STYLE,f)},T={},m={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(m[e]=E[e].oldTags)}),t&&t(),l(e,T,m)},P=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),C(s.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=N(n),a=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},k=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},H=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return k(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:H(s.TAG_NAMES.BASE,t,r),bodyAttributes:H(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(s.ATTRIBUTE_NAMES.HTML,o,r),link:H(s.TAG_NAMES.LINK,a,r),meta:H(s.TAG_NAMES.META,i,r),noscript:H(s.TAG_NAMES.NOSCRIPT,u,r),script:H(s.TAG_NAMES.SCRIPT,l,r),style:H(s.TAG_NAMES.STYLE,c,r),title:H(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=g,t.mapStateOnServer=U,t.reducePropsToState=h,t.requestAnimationFrame=v,t.warn=S}).call(t,function(){return this}())},65:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){E=e(d.map(function(e){return e.props})),T.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],E=void 0,T=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return c.createElement(u,this.props)},t}(l.Component);return T.displayName="SideEffect("+r(u)+")",T.canUseDOM=s.canUseDOM,T}}var l=n(3),c=r(l),s=r(n(51)),f=r(n(67));e.exports=u},67:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),l=r(u);n(58);var c=n(10),s=n(11),f=r(s),p=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.trackClick=n.trackClick.bind(n),n}return i(t,e),t.prototype.trackClick=function(){var e=this.props,t=e.eventCategory,n=e.eventLabel;(0,c.gaTrack)({eventCategory:t,eventAction:"click",eventLabel:n})},t.prototype.render=function(){var e=this.props,t=e.href,n=e.text;return l.default.createElement("a",{target:"_blank",href:t,className:"buy-tickets drop-shadow-small",rel:"noopener noreferrer",onClick:this.trackClick},n)},t}(l.default.Component);p.propTypes={href:u.PropTypes.string,eventLabel:u.PropTypes.string,eventCategory:u.PropTypes.string,text:u.PropTypes.string},p.defaultProps={href:f.default.ticketsUrl,eventLabel:"Buy Tickets",eventCategory:"purchase",text:"Buy Tickets"},t.default=p,e.exports=t.default},58:function(e,t){},88:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),l=r(u);n(117);var c=n(94),s=r(c),f=n(32),p=r(f),d=n(27),E=r(d),T=n(11),m=r(T),y=n(10),h=[{type:"twitter",url:"https://twitter.com/"+m.default.userTwitter},{type:"facebook",url:"https://www.facebook.com/"+m.default.fbPage}],b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.trackClick=function(){(0,y.gaTrack)({eventCategory:"purchase",eventAction:"click",eventLabel:"Buy Tickets"})},t.prototype.render=function(){return l.default.createElement("div",{className:"footer"},l.default.createElement("div",{className:"container container-fluid"},l.default.createElement("div",{className:"row footer-subscribe"},l.default.createElement("div",{className:"col-sm-6 col-xs-12"},l.default.createElement("strong",null,"Subscribe"),l.default.createElement("p",null,"Exciting things ahead,",l.default.createElement("br",null),"stay tuned for more information."),l.default.createElement(s.default,null)),l.default.createElement("div",{className:"col-sm-6 col-xs-12"},l.default.createElement("strong",null,"Find your way"),l.default.createElement("div",{className:"footer-links"},l.default.createElement(E.default,{to:"/"},"Home"),l.default.createElement("a",{target:"_blank",href:m.default.ticketsUrl,rel:"noopener noreferrer",onClick:this.trackClick},"Buy Tickets"),l.default.createElement(E.default,{to:"/about"},"About"),l.default.createElement(E.default,{to:"/speakers"},"Speakers"),l.default.createElement(E.default,{to:"/sponsors"},"Sponsors"),l.default.createElement(E.default,{to:"/diversity"},"Diversity Tickets"),l.default.createElement(E.default,{to:"/schedule"},"Schedule"),l.default.createElement("a",{href:"https://yougottalovefrontend.com/",target:"_blank",rel:"noopener noreferrer"},"YGLF 2017"),l.default.createElement(E.default,{to:"/code-of-conduct"},"Code Of Conduct")))),l.default.createElement("div",{className:"row footer-contacts"},l.default.createElement("div",{className:"col-md-6 col-xs-12"},l.default.createElement("div",{className:"created-by"},l.default.createElement("span",null,"Designed by"," ",l.default.createElement("a",{href:"http://highondesign.wix.com/",target:"_blank",rel:"noopener noreferrer"},"WixStudio"),",")," ",l.default.createElement("span",null,"Coded by"," ",l.default.createElement("a",{href:"https://www.linkedin.com/in/andriisierkov/",target:"_blank",rel:"noopener noreferrer"},"Andrei Sierkov")," & ",l.default.createElement("a",{href:"https://www.linkedin.com/in/marina-marina/",target:"_blank",rel:"noopener noreferrer"},"Marina Sol")))),l.default.createElement("div",{className:"col-md-6 col-xs-12"},l.default.createElement("a",{className:"footer-mailto",href:"mailto:"+m.default.email},m.default.email),l.default.createElement(p.default,{data:h})))))},t}(l.default.Component);t.default=b,e.exports=t.default},117:function(e,t){},89:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),l=r(u);n(118);var c=n(27),s=r(c),f=n(41),p=r(f),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.showButton;return l.default.createElement("div",{className:"header"},l.default.createElement("div",{className:"header-title"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement(s.default,{to:"/"},l.default.createElement("span",null,"You Gotta Love")," Frontend Conference"))),l.default.createElement("div",{className:"header-description"},l.default.createElement("div",{className:"container-fluid"},"YGLF is a community event built by developers for developers")),l.default.createElement("div",{className:"header-date-location"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("strong",null,"24-25 May 2018"),l.default.createElement("span",null,", "),"Bel étage | Kyiv, Ukraine")),e&&l.default.createElement(p.default,null))},t}(l.default.Component);d.defaultProps={showButton:!0},t.default=d,e.exports=t.default},118:function(e,t){},90:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),l=r(u);n(119);var c=n(27),s=r(c),f=n(24),p=r(f),d=n(20),E=[{title:"Home",to:"/"},{title:"About",to:"/about"},{title:"Speakers",to:"/speakers"},{title:"Schedule",to:"/schedule"},{title:"Sponsors",to:"/sponsors"}],T=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.state={menuExpanded:!1},n.toggleMenu=n.toggleMenu.bind(n),n.closeMenu=n.closeMenu.bind(n),n}return i(t,e),t.prototype.renderList=function(){var e=this,t=(0,d.isInBrowser)()&&["/",""].includes(document.location.pathname);return E.map(function(n){var r="/"===n.to&&!t;return l.default.createElement(s.default,{activeClassName:"-active",to:n.to,key:n.title,onClick:e.closeMenu,className:(0,p.default)({"-disabled":n.disabled,"-unhighlight":r})},n.title)})},t.prototype.toggleMenu=function(e){e.preventDefault(),this.state.menuExpanded?this.closeMenu():this.openMenu()},t.prototype.openMenu=function(){this.setState({menuExpanded:!0}),window.document.body.style.overflow="hidden",window.scrollTo(0,0)},t.prototype.closeMenu=function(){this.setState({menuExpanded:!1}),window.document.body.style.overflow="auto"},t.prototype.render=function(){var e=this.state.menuExpanded;return l.default.createElement("div",{className:(0,p.default)("header-menu",{"-expanded":e})},l.default.createElement("div",{className:"header-menu-expand"},l.default.createElement("a",{href:"#",className:"header-menu-expand-btn",onClick:this.toggleMenu},e?"Back":"Menu")),l.default.createElement("div",{className:"header-menu-inner"},this.renderList()),l.default.createElement("div",{className:"header-menu-overlay"},this.renderList()))},t}(l.default.Component);t.default=T,e.exports=t.default},119:function(e,t){},91:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),l=r(u),c=n(11),s=r(c),f=n(63),p=r(f),d=n(20),E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){(0,d.isInBrowser)()&&(!function(e,t,n,r,o,a,i){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],a=t.createElement(n),a.async=!0,a.src=r,i=t.getElementsByTagName(n)[0],i.parentNode.insertBefore(a,i))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","2013966075486522"),fbq("track","PageView"))},t.prototype.render=function(){return l.default.createElement(p.default,null,l.default.createElement("title",null,s.default.siteTitle),l.default.createElement("meta",{name:"description",content:s.default.siteDescription}),l.default.createElement("meta",{charset:"utf-8"}),l.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),l.default.createElement("meta",{name:"description",content:s.default.siteDescription}),l.default.createElement("meta",{property:"fb:app_id",content:s.default.siteFBAppID}),l.default.createElement("meta",{property:"og:title",content:"You Gotta Love Frontend Conference"}),l.default.createElement("meta",{property:"og:url",content:"http://"+s.default.siteUrl}),l.default.createElement("meta",{property:"og:description",content:s.default.siteDescription}),l.default.createElement("meta",{property:"og:type",content:"website"}),l.default.createElement("meta",{property:"og:image",content:"http://"+s.default.siteUrl+"/fb-share.png"}),l.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"
}),l.default.createElement("meta",{name:"twitter:site",content:"@"+s.default.userTwitter}),l.default.createElement("meta",{name:"twitter:creator",content:"@"+s.default.userTwitter}),l.default.createElement("meta",{name:"twitter:title",content:s.default.siteTitle}),l.default.createElement("meta",{name:"twitter:description",content:s.default.siteDescription}),l.default.createElement("meta",{name:"twitter:image:src",content:"http://"+s.default.siteUrl+"/twitter-share.png"}),l.default.createElement("link",{rel:"dns-prefetch",href:"//use.typekit.net"}),l.default.createElement("link",{rel:"dns-prefetch",href:"//cdn.trackjs.com"}),l.default.createElement("link",{rel:"dns-prefetch",href:"//usage.trackjs.com"}),l.default.createElement("link",{rel:"shortcut icon",href:"64.png"}),l.default.createElement("link",{rel:"icon",href:"favicon.ico"}),l.default.createElement("script",{src:"/libs/createjs.min.js"}))},t}(l.default.Component);t.default=E,e.exports=t.default},94:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),l=r(u);n(122);var c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return l.default.createElement("form",{action:"https://yglf.us17.list-manage.com/subscribe/post?u=6304d25cb6fc721563ac70de3&id=c5ca8dfcd8",method:"post",className:"subscribe-form"},l.default.createElement("input",{type:"email",name:"EMAIL",placeholder:"Enter Your email address",required:!0}),l.default.createElement("div",{className:"subscribe-form-token"},l.default.createElement("input",{type:"text",name:"b_6304d25cb6fc721563ac70de3_c5ca8dfcd8",tabIndex:"-1",value:""})),l.default.createElement("button",{type:"submit",name:"subscribe"},l.default.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw"}),l.default.createElement("span",null,"OK")))},t}(u.Component);t.default=c,e.exports=t.default},122:function(e,t){},123:function(e,t){},109:function(e,t){},227:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),l=r(u);n(108),n(123),n(109);var c=n(89),s=r(c),f=n(90),p=r(f),d=n(91),E=r(d),T=n(88),m=r(T),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.children;return l.default.createElement("div",{className:"app"},l.default.createElement(E.default,null),l.default.createElement("div",{className:"app-header"},l.default.createElement(p.default,null),l.default.createElement(s.default,null)),l.default.createElement("div",{className:"app-body"},e()),l.default.createElement("div",{className:"app-footer"},l.default.createElement(m.default,null)))},t}(l.default.Component);t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-simple-js-3b873241ab010c746a10.js.map