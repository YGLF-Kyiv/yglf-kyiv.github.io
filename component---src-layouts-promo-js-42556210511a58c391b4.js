webpackJsonp([94940602726668],{144:function(e,t){e.exports={layoutContext:{}}},240:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),u=n(257),c=r(u),l=n(144),s=r(l);t.default=function(e){return i.default.createElement(c.default,o({},e,s.default))},e.exports=t.default},9:function(e,t){"use strict";e.exports={blogPostDir:"sample-posts",siteTitle:"You Gotta Love Frontend Conference",twitterTitle:"YGLF Kyiv",siteLogo:"/logo.svg",siteUrl:"yglf.com.ua",pathPrefix:"/",siteDescription:"Kyiv Frontend Conference | May 24-25, 2018",siteRss:"/rss.xml",siteFBAppID:"942305182583127",fbPage:"yglf.kyiv",googleAnalyticsID:"UA-107799328-1",userTwitter:"yglf_kyiv",email:"hello@yglf.com.ua",website:"http://yglf.com.ua",ticketsUrl:"https://2event.com/events/1037785",workshopWebpackUrl:"https://2event.com/events/1230538",workshopWebpackAndConfUrl:"https://2event.com/events/1037785",sitemapPages:["/","/about","/speakers","/sponsors","/tickets","/diversity","/code-of-conduct"]}},18:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},33:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),a=f.length-1;a>=0;a--)if(f[a]!=p[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(35),c=n(34),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},34:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},35:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},36:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},70:function(e,t){},38:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=r(s),p=n(7),d=r(p),E=n(40),m=r(E),T=n(33),y=r(T),h=n(39),b=n(21),A=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case b.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case b.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},_=(0,m.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(v),w=A(_);w.renderStatic=w.rewind,t.Helmet=w,t.default=w},21:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},39:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),u=r(i),c=n(6),l=r(c),s=n(21),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=y(e,s.TAG_NAMES.TITLE),n=y(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return y(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},T=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&w("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:m([s.TAG_PROPERTIES.HREF],e),bodyAttributes:E(s.ATTRIBUTE_NAMES.BODY,e),defer:y(e,s.HELMET_PROPS.DEFER),encode:y(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(s.ATTRIBUTE_NAMES.HTML,e),linkTags:T(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:T(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:T(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:E(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),A=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,w=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,S=function(e){g&&_(g),e.defer?g=v(function(){O(e,function(){g=null})}):(O(e),g=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;C(s.TAG_NAMES.BODY,r),C(s.TAG_NAMES.HTML,o),M(p,d);var E={baseTag:R(s.TAG_NAMES.BASE,n),linkTags:R(s.TAG_NAMES.LINK,a),metaTags:R(s.TAG_NAMES.META,i),noscriptTags:R(s.TAG_NAMES.NOSCRIPT,u),scriptTags:R(s.TAG_NAMES.SCRIPT,l),styleTags:R(s.TAG_NAMES.STYLE,f)},m={},T={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(T[e]=E[e].oldTags)}),t&&t(),c(e,m,T)},P=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),C(s.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=a.indexOf(c);f!==-1&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},k=function(e,t,n,r){var o=N(n),a=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},I=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},x=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},G=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},H=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return x(e,t.title,t.titleAttributes,n)},toString:function(){return k(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return I(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:H(s.TAG_NAMES.BASE,t,r),bodyAttributes:H(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(s.ATTRIBUTE_NAMES.HTML,o,r),link:H(s.TAG_NAMES.LINK,a,r),meta:H(s.TAG_NAMES.META,i,r),noscript:H(s.TAG_NAMES.NOSCRIPT,u,r),script:H(s.TAG_NAMES.SCRIPT,c,r),style:H(s.TAG_NAMES.STYLE,l,r),title:H(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=S,t.mapStateOnServer=U,t.reducePropsToState=h,t.requestAnimationFrame=v,t.warn=w}).call(t,function(){return this}())},40:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){E=e(d.map(function(e){return e.props})),m.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],E=void 0,m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(c.Component);return m.displayName="SideEffect("+r(u)+")",m.canUseDOM=s.canUseDOM,m}}var c=n(2),l=r(c),s=r(n(36)),f=r(n(41));e.exports=u},41:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var s=e[l],f=t[l];if(o=n?n.call(r,s,f,l):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},24:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u);n(26);var l=n(10),s=n(9),f=r(s),p=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.trackClick=n.trackClick.bind(n),n}return i(t,e),t.prototype.trackClick=function(){var e=this.props,t=e.eventCategory,n=e.eventLabel;(0,l.gaTrack)({eventCategory:t,eventAction:"click",eventLabel:n})},t.prototype.render=function(){var e=this.props,t=e.href,n=e.text;return c.default.createElement("a",{target:"_blank",href:t,className:"buy-tickets drop-shadow-small",rel:"noopener noreferrer",onClick:this.trackClick},n)},t}(c.default.Component);p.propTypes={href:u.PropTypes.string,eventLabel:u.PropTypes.string,eventCategory:u.PropTypes.string,text:u.PropTypes.string},p.defaultProps={href:f.default.ticketsUrl,eventLabel:"Buy Tickets",eventCategory:"purchase",text:"Buy Tickets"},t.default=p,e.exports=t.default},26:function(e,t){},59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u);n(78);var l=n(63),s=r(l),f=n(30),p=r(f),d=n(19),E=r(d),m=n(9),T=r(m),y=n(10),h=[{type:"twitter",url:"https://twitter.com/"+T.default.userTwitter},{type:"facebook",url:"https://www.facebook.com/"+T.default.fbPage}],b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.trackClick=function(){(0,y.gaTrack)({eventCategory:"purchase",eventAction:"click",eventLabel:"Buy Tickets"})},t.prototype.render=function(){return c.default.createElement("div",{className:"footer"},c.default.createElement("div",{className:"container container-fluid"},c.default.createElement("div",{className:"row footer-subscribe"},c.default.createElement("div",{className:"col-sm-6 col-xs-12"},c.default.createElement("strong",null,"Subscribe"),c.default.createElement("p",null,"Exciting things ahead,",c.default.createElement("br",null),"stay tuned for more information."),c.default.createElement(s.default,null)),c.default.createElement("div",{className:"col-sm-6 col-xs-12"},c.default.createElement("strong",null,"Find your way"),c.default.createElement("div",{className:"footer-links"},c.default.createElement(E.default,{to:"/"},"Home"),c.default.createElement("a",{target:"_blank",href:T.default.ticketsUrl,rel:"noopener noreferrer",onClick:this.trackClick},"Buy Tickets"),c.default.createElement(E.default,{to:"/about"},"About"),c.default.createElement(E.default,{to:"/speakers"},"Speakers"),c.default.createElement(E.default,{to:"/sponsors"},"Sponsors"),c.default.createElement(E.default,{to:"/diversity"},"Diversity Tickets"),c.default.createElement(E.default,{to:"/schedule"},"Schedule"),c.default.createElement("a",{href:"https://yougottalovefrontend.com/",target:"_blank",rel:"noopener noreferrer"},"YGLF 2017"),c.default.createElement(E.default,{to:"/code-of-conduct"},"Code Of Conduct")))),c.default.createElement("div",{className:"row footer-contacts"},c.default.createElement("div",{className:"col-md-6 col-xs-12"},c.default.createElement("div",{className:"created-by"},c.default.createElement("span",null,"Designed by"," ",c.default.createElement("a",{href:"http://highondesign.wix.com/",target:"_blank",rel:"noopener noreferrer"},"WixStudio"),",")," ",c.default.createElement("span",null,"Coded by"," ",c.default.createElement("a",{href:"https://www.linkedin.com/in/andriisierkov/",target:"_blank",rel:"noopener noreferrer"},"Andrei Sierkov")," & ",c.default.createElement("a",{href:"https://www.linkedin.com/in/marina-marina/",target:"_blank",rel:"noopener noreferrer"},"Marina Sol")))),c.default.createElement("div",{className:"col-md-6 col-xs-12"},c.default.createElement("a",{className:"footer-mailto",href:"mailto:"+T.default.email},T.default.email),c.default.createElement(p.default,{data:h})))))},t}(c.default.Component);t.default=b,e.exports=t.default},78:function(e,t){},60:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u);n(79);var l=n(19),s=r(l),f=n(24),p=r(f),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.showButton;return c.default.createElement("div",{className:"header"},c.default.createElement("div",{className:"header-title"},c.default.createElement("div",{className:"container-fluid"},c.default.createElement(s.default,{to:"/"},c.default.createElement("span",null,"You Gotta Love")," Frontend Conference"))),c.default.createElement("div",{className:"header-description"},c.default.createElement("div",{className:"container-fluid"},"YGLF is a community event built by developers for developers")),c.default.createElement("div",{className:"header-date-location"},c.default.createElement("div",{className:"container-fluid"},c.default.createElement("strong",null,"24-25 May 2018"),c.default.createElement("span",null,", "),"Parkovy Congress Center | Kyiv, Ukraine")),e&&c.default.createElement(p.default,null))},t}(c.default.Component);d.defaultProps={showButton:!0},t.default=d,e.exports=t.default},79:function(e,t){},61:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u);n(80);var l=n(19),s=r(l),f=n(18),p=r(f),d=n(14),E=[{title:"Home",to:"/"},{title:"About",to:"/about"},{title:"Speakers",to:"/speakers"},{title:"Schedule",to:"/schedule"},{title:"Sponsors",to:"/sponsors"}],m=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.state={menuExpanded:!1},n.toggleMenu=n.toggleMenu.bind(n),n.closeMenu=n.closeMenu.bind(n),n}return i(t,e),t.prototype.renderList=function(){var e=this,t=(0,d.isInBrowser)()&&["/",""].includes(document.location.pathname);return E.map(function(n){var r="/"===n.to&&!t;return c.default.createElement(s.default,{activeClassName:"-active",to:n.to,key:n.title,onClick:e.closeMenu,className:(0,p.default)({"-disabled":n.disabled,"-unhighlight":r})},n.title)})},t.prototype.toggleMenu=function(e){e.preventDefault(),this.state.menuExpanded?this.closeMenu():this.openMenu()},t.prototype.openMenu=function(){this.setState({menuExpanded:!0}),window.document.body.style.overflow="hidden",window.scrollTo(0,0)},t.prototype.closeMenu=function(){this.setState({menuExpanded:!1}),window.document.body.style.overflow="auto"},t.prototype.render=function(){var e=this.state.menuExpanded;return c.default.createElement("div",{className:(0,p.default)("header-menu",{"-expanded":e})},c.default.createElement("div",{className:"header-menu-expand"},c.default.createElement("a",{href:"#",className:"header-menu-expand-btn",onClick:this.toggleMenu},e?"Back":"Menu")),c.default.createElement("div",{className:"header-menu-inner"},this.renderList()),c.default.createElement("div",{className:"header-menu-overlay"},this.renderList()))},t}(c.default.Component);t.default=m,e.exports=t.default},80:function(e,t){},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u),l=n(9),s=r(l),f=n(38),p=r(f),d=n(14),E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){(0,d.isInBrowser)()&&(!function(e,t,n,r,o,a,i){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],a=t.createElement(n),a.async=!0,a.src=r,i=t.getElementsByTagName(n)[0],i.parentNode.insertBefore(a,i))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","2013966075486522"),fbq("track","PageView"))},t.prototype.render=function(){return c.default.createElement(p.default,null,c.default.createElement("title",null,s.default.siteTitle),c.default.createElement("meta",{name:"description",content:s.default.siteDescription}),c.default.createElement("meta",{charset:"utf-8"}),c.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),c.default.createElement("meta",{name:"description",content:s.default.siteDescription}),c.default.createElement("meta",{property:"fb:app_id",content:s.default.siteFBAppID}),c.default.createElement("meta",{property:"og:title",content:"You Gotta Love Frontend Conference"}),c.default.createElement("meta",{property:"og:url",content:"http://"+s.default.siteUrl}),c.default.createElement("meta",{property:"og:description",content:s.default.siteDescription}),c.default.createElement("meta",{property:"og:type",content:"website"}),c.default.createElement("meta",{property:"og:image",content:"http://"+s.default.siteUrl+"/fb-share.png"}),c.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"
}),c.default.createElement("meta",{name:"twitter:site",content:"@"+s.default.userTwitter}),c.default.createElement("meta",{name:"twitter:creator",content:"@"+s.default.userTwitter}),c.default.createElement("meta",{name:"twitter:title",content:s.default.siteTitle}),c.default.createElement("meta",{name:"twitter:description",content:s.default.siteDescription}),c.default.createElement("meta",{name:"twitter:image:src",content:"http://"+s.default.siteUrl+"/twitter-share.png"}),c.default.createElement("link",{rel:"dns-prefetch",href:"//use.typekit.net"}),c.default.createElement("link",{rel:"dns-prefetch",href:"//cdn.trackjs.com"}),c.default.createElement("link",{rel:"dns-prefetch",href:"//usage.trackjs.com"}),c.default.createElement("link",{rel:"shortcut icon",href:"64.png"}),c.default.createElement("link",{rel:"icon",href:"favicon.ico"}),c.default.createElement("script",{src:"/libs/createjs.min.js"}),c.default.createElement("script",null,"\n!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\ntwq('init','nzc0l');\ntwq('track','PageView');\n          "),c.default.createElement("script",{type:"text/javascript"},"\nif ((/dou/).test(window.location.pathname)) {\n  var widgetOptions = {bg_color: 'fcfcfc', id: 1037785, lang: 'en', tickets_type: ''};\n  (function() {\n      var script = document.createElement('script');\n      script.type = 'text/javascript';\n      script.async = true;\n      script.src = \"https://2event.com/js/widget-tickets.js\";\n      document.getElementsByTagName('head')[0].appendChild(script);\n  })();\n\n}\n              "))},t}(c.default.Component);t.default=E,e.exports=t.default},63:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u);n(81);var l=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("form",{action:"https://yglf.us17.list-manage.com/subscribe/post?u=6304d25cb6fc721563ac70de3&id=c5ca8dfcd8",method:"post",className:"subscribe-form"},c.default.createElement("input",{type:"email",name:"EMAIL",placeholder:"Enter Your email address",required:!0}),c.default.createElement("div",{className:"subscribe-form-token"},c.default.createElement("input",{type:"text",name:"b_6304d25cb6fc721563ac70de3_c5ca8dfcd8",tabIndex:"-1",value:""})),c.default.createElement("button",{type:"submit",name:"subscribe"},c.default.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw"}),c.default.createElement("span",null,"Ok")))},t}(u.Component);t.default=l,e.exports=t.default},81:function(e,t){},82:function(e,t){},71:function(e,t){},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u);n(70),n(82),n(71);var l=n(60),s=r(l),f=n(61),p=r(f),d=n(62),E=r(d),m=n(59),T=r(m),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.children;return c.default.createElement("div",{className:"app bg-grey"},c.default.createElement(E.default,null),c.default.createElement("div",{className:"app-header"},c.default.createElement(p.default,null),c.default.createElement(s.default,null)),c.default.createElement("div",{className:"app-body"},e()),c.default.createElement("div",{className:"app-footer"},c.default.createElement(T.default,null)))},t}(c.default.Component);t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-promo-js-42556210511a58c391b4.js.map