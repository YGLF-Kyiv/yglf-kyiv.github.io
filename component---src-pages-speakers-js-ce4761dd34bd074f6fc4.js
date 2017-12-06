webpackJsonp([0xe8025391c88],{"./data/SiteConfig.js":function(e,t){"use strict";e.exports={blogPostDir:"sample-posts",siteTitle:"You Gotta Love Frontend Conference, Kyiv, 24—25 May'18",siteLogo:"/logo.svg",siteUrl:"yglf.com.ua",pathPrefix:"/",siteDescription:"You Gotta Love Frontend Conference, Kyiv, 24—25 May'18",siteRss:"/rss.xml",siteFBAppID:"yglf.kyiv",googleAnalyticsID:"UA-107799328-1",userTwitter:"yglf_kyiv",email:"hello@yglf.com.ua",ticketsUrl:"https://2event.com/ru/events/1037785",sitemapPages:["/","/speakers","/tickets","/diversity","/sponsorship","/code-of-conduct"]}},"./data/speakers.json":function(e,t){e.exports={all:[{first_name:"Lea",last_name:"Verou",position:"Human-Computer Interaction Researcher",company:"MIT CSAIL",description:"Lea is currently busy researching how to make web programming easier at <a class='simple-link' href='http://www.csail.mit.edu/' target='__blank'>MIT CSAIL</a>. She is the author of bestselling advanced CSS book <a class='simple-link' href='http://shop.oreilly.com/product/0636920031123.do' target='__blank'>CSS Secrets</a> and has worked as a Developer Advocate at <a class='simple-link' href='https://www.w3.org/' target='__blank'>W3C</a>. She has a long-standing passion for open web standards, and is one of the few Invited Experts in the <a class='simple-link' href='https://www.w3.org/Style/CSS/members.en.php3' target='__blank'>CSS Working Group</a>. Lea has also started <a class='simple-link' href='https://github.com/leaverou' target='__blank'>several popular open source projects and web applications</a>, such as <a class='simple-link' href='https://mavo.io/' target='__blank'>Mavo</a>, <a class='simple-link' href='http://prismjs.com/' target='__blank'>Prism</a>, and <a class='simple-link' href='http://leaverou.github.io/prefixfree/' target='__blank'>-prefix-free</a> and maintains a technical blog at <a class='simple-link' href='http://lea.verou.me/' target='__blank'>lea.verou.me</a>. She holds a MSc in Computer Science from MIT. Despite her academic pursuits in Computer Science, Lea is one of the few misfits who love code and design equally.",image_src:"lea_verou",highlighted:!0,highlightedDescription:"Lea is currently busy researching how to make web programming easier at <a class='simple-link' href='http://www.csail.mit.edu/' target='__blank'>MIT CSAIL</a>. She is the author of bestselling advanced CSS book <a class='simple-link' href='http://shop.oreilly.com/product/0636920031123.do' target='__blank'>CSS Secrets</a> and has worked as a Developer Advocate at <a class='simple-link' href='https://www.w3.org/' target='__blank'>W3C</a>. She has a long-standing passion for open web standards, and is one of the few Invited Experts in the <a class='simple-link' href='https://www.w3.org/Style/CSS/members.en.php3' target='__blank'>CSS Working Group</a>.",social_icons:{userTwitter:"LeaVerou",siteGHAppID:"leaverou",linkedIn:"leaverou"}},{first_name:"Benedikt",last_name:"Meurer",position:"Technical Lead",company:"Google",description:"Benedikt is a JavaScript compiler engineer who loves to tinker with different aspects of programming languages. <br />In 2013 he joined Google to work on the <a class='simple-link' href='https://developers.google.com/v8/' target='__blank'>V8 JavaScript Engine</a> in the Munich office, where he is currently working as tech lead for the Node.js performance team. <br />He spent a rather large amount of his spare time on developing and contributing to open source projects. From 2002 to 2007, he developed and maintained various core parts of the <a class='simple-link' href='https://xfce.org' target='__blank'>Xfce desktop environment</a>, including the new file manager <a class='simple-link' href='https://docs.xfce.org/xfce/thunar/start' target='__blank'>Thunar</a>, which he wrote from scratch. <br />He is also interested in functional programming languages and compiler design. In 2011 he created a <a class='simple-link' href='https://github.com/bmeurer/ocaml-arm/wiki' target='__blank'>brand new ARM port</a> for the <a class='simple-link' href='https://caml.inria.fr/ocaml/' target='__blank'>OCaml</a> native code compiler, and since January 2012 he is now the official maintainer of the <a class='simple-link' href='https://www.arm.com' target='__blank'>ARM</a> port.",highlightedDescription:"Benedikt is a JavaScript compiler engineer who loves to tinker with different aspects of programming languages. At Google he is working on the <a class='simple-link' href='https://developers.google.com/v8/' target='__blank'>V8 JavaScript Engine</a> that powers both Node.js and Chrome, and he is currently leading the Node.js Performance Team.",image_src:"benediktmeurer",social_icons:{userTwitter:"bmeurer",siteGHAppID:"bmeurer",linkedIn:"benediktmeurer"}}]}},"./node_modules/process/browser.js":function(e,t){function o(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function r(e){if(u===setTimeout)return setTimeout(e,0);if((u===o||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){h&&d&&(h=!1,d.length?m=d.concat(m):b=-1,m.length&&i())}function i(){if(!h){var e=r(s);h=!0;for(var t=m.length;t;){for(d=m,m=[];++b<t;)d&&d[b].run();b=-1,t=m.length}d=null,h=!1,a(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var u,p,f=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:o}catch(e){u=o}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(e){p=n}}();var d,m=[],h=!1,b=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];m.push(new l(e,t)),1!==m.length||h||r(i)},l.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},"./node_modules/react-lazyload/lib/decorator.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/react/react.js"),c=n(l),u=o("./node_modules/react-lazyload/lib/index.js"),p=n(u),f=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(o){function n(){r(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.displayName="LazyLoad"+f(t),e}return s(n,o),i(n,[{key:"render",value:function(){return c.default.createElement(p.default,e,c.default.createElement(t,this.props))}}]),n}(l.Component)}}},"./node_modules/react-lazyload/lib/index.js":function(e,t,o){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/react/react.js"),c=n(l),u=o("./node_modules/react-dom/index.js"),p=n(u),f=o("./node_modules/prop-types/index.js"),d=n(f),m=o("./node_modules/react-lazyload/lib/utils/event.js"),h=o("./node_modules/react-lazyload/lib/utils/scrollParent.js"),b=n(h),y=o("./node_modules/react-lazyload/lib/utils/debounce.js"),v=n(y),g=o("./node_modules/react-lazyload/lib/utils/throttle.js"),w=n(g),k=o("./node_modules/react-lazyload/lib/decorator.js"),_=n(k),j={top:0,right:0,bottom:0,left:0,width:0,height:0},E="data-lazyload-listened",S=[],T=[],O=!1;try{var I=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,I)}catch(e){}var x=!!O&&{capture:!1,passive:!0},C=function(e,t){var o=p.default.findDOMNode(e),n=void 0,r=void 0;try{var a=t.getBoundingClientRect();n=a.top,r=a.height}catch(e){n=j.top,r=j.height}var s=window.innerHeight||document.documentElement.clientHeight,i=Math.max(n,0),l=Math.min(s,n+r)-i,c=void 0,u=void 0;try{var f=o.getBoundingClientRect();c=f.top,u=f.height}catch(e){c=j.top,u=j.height}var d=c-i,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return d-m[0]<=l&&d+u+m[1]>=0},P=function(e){var t=p.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var o=void 0,n=void 0;try{var r=t.getBoundingClientRect();o=r.top,n=r.height}catch(e){o=j.top,n=j.height}var a=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return o-s[0]<=a&&o+n+s[1]>=0},A=function(e){var t=p.default.findDOMNode(e);if(t){var o=(0,b.default)(t),n=e.props.overflow&&o!==t.ownerDocument&&o!==document&&o!==document.documentElement,r=n?C(e,o):P(e);r?e.visible||(e.props.once&&T.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},M=function(){T.forEach(function(e){var t=S.indexOf(e);t!==-1&&S.splice(t,1)}),T=[]},D=function(){for(var e=0;e<S.length;++e){var t=S[e];A(t)}M()},N=void 0,L=null,z=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.visible=!1,o}return s(t,e),i(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===N?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===N&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,m.off)(window,"scroll",L,x),(0,m.off)(window,"resize",L,x),L=null),L||(void 0!==this.props.debounce?(L=(0,v.default)(D,"number"==typeof this.props.debounce?this.props.debounce:300),N="debounce"):void 0!==this.props.throttle?(L=(0,w.default)(D,"number"==typeof this.props.throttle?this.props.throttle:300),N="throttle"):L=D),this.props.overflow){var t=(0,b.default)(p.default.findDOMNode(this));if(t&&"function"==typeof t.getAttribute){var o=1+ +t.getAttribute(E);1===o&&t.addEventListener("scroll",L,x),t.setAttribute(E,o)}}else if(0===S.length||e){var n=this.props,r=n.scroll,a=n.resize;r&&(0,m.on)(window,"scroll",L,x),a&&(0,m.on)(window,"resize",L,x)}S.push(this),A(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,b.default)(p.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(E)-1;0===t?(e.removeEventListener("scroll",L,x),e.removeAttribute(E)):e.setAttribute(E,t)}}var o=S.indexOf(this);o!==-1&&S.splice(o,1),0===S.length&&((0,m.off)(window,"resize",L,x),(0,m.off)(window,"scroll",L,x))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:c.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(l.Component);z.propTypes={once:d.default.bool,height:d.default.oneOfType([d.default.number,d.default.string]),offset:d.default.oneOfType([d.default.number,d.default.arrayOf(d.default.number)]),overflow:d.default.bool,resize:d.default.bool,scroll:d.default.bool,children:d.default.node,throttle:d.default.oneOfType([d.default.number,d.default.bool]),debounce:d.default.oneOfType([d.default.number,d.default.bool]),placeholder:d.default.node,unmountIfInvisible:d.default.bool},z.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=_.default;t.default=z,t.forceCheck=D}).call(t,o("./node_modules/process/browser.js"))},"./node_modules/react-lazyload/lib/utils/debounce.js":function(e,t){"use strict";function o(e,t,o){var n=void 0,r=void 0,a=void 0,s=void 0,i=void 0,l=function l(){var c=+new Date-s;c<t&&c>=0?n=setTimeout(l,t-c):(n=null,o||(i=e.apply(a,r),n||(a=null,r=null)))};return function(){a=this,r=arguments,s=+new Date;var c=o&&!n;return n||(n=setTimeout(l,t)),c&&(i=e.apply(a,r),a=null,r=null),i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},"./node_modules/react-lazyload/lib/utils/event.js":function(e,t){"use strict";function o(e,t,o,n){n=n||!1,e.addEventListener?e.addEventListener(t,o,n):e.attachEvent&&e.attachEvent("on"+t,function(t){o.call(e,t||window.event)})}function n(e,t,o,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,o,n):e.detachEvent&&e.detachEvent("on"+t,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=o,t.off=n},"./node_modules/react-lazyload/lib/utils/scrollParent.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,o=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(n),a=r.position,s=r.overflow,i=r["overflow-x"],l=r["overflow-y"];if("static"===a&&t)n=n.parentNode;else{if(o.test(s)&&o.test(i)&&o.test(l))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},"./node_modules/react-lazyload/lib/utils/throttle.js":function(e,t){"use strict";function o(e,t,o){t||(t=250);var n,r;return function(){var a=o||this,s=+new Date,i=arguments;n&&s<n+t?(clearTimeout(r),r=setTimeout(function(){n=s,e.apply(a,i)},t)):(n=s,e.apply(a,i))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},"./src/assets/speakersIntro.json":function(e,t){e.exports={callForPapers:{number:"1",subtitle:"Amazing Talks",title:"Call For Papers",p:["This year YGLF is hosting amazing speakers from all around the world. Listed below are our keynote speakers. For the full lineup you can visit our speakers page. Make sure to check back regularly, as this is just the beginning, there is a lot more to come!"],actionButton:{href:"mailto:hello@yglf.com.ua?subject=Call%20For%20Papers",text:"Apply"}},meetSpeakers:{number:"1",subtitle:"Amazing Talks",title:"Meet Our Speakers",p:["Kyiv and all of the Frontend communities here are amazing. Audience is technically strong and thankful for new knowledge. If you are eager to share your experience and useful insights, apply to become a speaker."],actionButton:{href:"https://2event.com/ru/events/1037785",text:"Buy Tickets",target:"__blank"}}}},"./src/components/SocialIcons/SocialIcons.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),l=n(i);o("./src/components/SocialIcons/social-icons.scss");var c=o("./data/SiteConfig.js"),u=n(c),p=function(e){return"icon-"+e},f=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.urls,t=[{showIcon:!!e.userTwitter,type:"twitter",url:"https://twitter.com/"+e.userTwitter},{showIcon:!!e.siteFBAppID,type:"facebook",url:"https://www.facebook.com/"+e.siteFBAppID},{showIcon:e.siteGHAppID,type:"github",url:"https://www.github.com/"+e.siteGHAppID},{showIcon:e.linkedIn,type:"linkedin",url:"https://www.linkedin.com/in/"+e.linkedIn}],o=t.map(function(e){return e.showIcon?l.default.createElement("a",{className:"no-outline",key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.type},l.default.createElement("i",{className:p(e.type)})):null});return l.default.createElement("div",{className:"social-icons"},o)},t}(l.default.Component);f.propTypes={urls:i.PropTypes.object},f.defaultProps={urls:{userTwitter:u.default.userTwitter,siteFBAppID:u.default.siteFBAppID,siteGHAppID:null}},t.default=f,e.exports=t.default},"./src/components/SocialIcons/social-icons.scss":function(e,t){},"./src/components/SpeakerBlock/SpeakerBlock.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),l=n(i);o("./src/components/SpeakerBlock/speaker-block.scss");var c=o("./src/components/SocialIcons/SocialIcons.js"),u=n(c),p=o("./node_modules/react-lazyload/lib/index.js"),f=n(p),d=o("./src/utils/environment.js"),m=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data,t=(0,d.isChrome)()?"webp":"jpg";return l.default.createElement("div",{className:"speaker-block container container-fluid"},l.default.createElement("div",{className:"speaker-block-cols"},l.default.createElement("a",{href:"",name:e.first_name+"-"+e.last_name,className:"-no-outline anchor"}),l.default.createElement("div",{className:"speaker-block-img"},l.default.createElement(f.default,{offset:150},l.default.createElement("img",{src:"/speakers/"+e.image_src+"."+t,className:"drop-shadow",alt:e.first_name+" "+e.last_name})),l.default.createElement(u.default,{urls:e.social_icons})),l.default.createElement("div",{className:"speaker-block-text"},l.default.createElement("h3",null,l.default.createElement("span",{className:"speaker-first-name"},e.first_name)," ",l.default.createElement("span",{className:"speaker-last-name"},e.last_name)),l.default.createElement("p",null,e.position&&l.default.createElement("span",{className:"speaker-position"},e.position),e.company&&l.default.createElement("span",{className:"speaker-company"},e.company)),l.default.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}}))))},t}(i.Component);m.propTypes={data:i.PropTypes.object},t.default=m,e.exports=t.default},"./src/components/SpeakerBlock/speaker-block.scss":function(e,t){},"./src/components/SpeakersIntroBlock/SpeakersIntroBlock.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),l=n(i);o("./src/components/SpeakersIntroBlock/speakers-intro-block.scss");var c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data;return l.default.createElement("div",{className:"speakers-intro-block"},l.default.createElement("div",{className:"speakers-intro-block-text"},l.default.createElement("h2",null,e.title),e.p.map(function(e,t){return l.default.createElement("p",{key:t},e)}),l.default.createElement("div",{className:"speakers-intro-block-text-button"},l.default.createElement("a",{href:e.actionButton.href,rel:"noopener noreferrer",target:e.actionButton.target},e.actionButton.text))))},t}(i.Component);c.propTypes={data:i.PropTypes.object},c.defaultProps={data:{}},t.default=c,e.exports=t.default},"./src/components/SpeakersIntroBlock/speakers-intro-block.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Admin/Documents/Projects/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/speakers.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),l=n(i);o("./src/pages/speakers.scss");var c=o("./src/utils/ga.js"),u=o("./src/components/SpeakersIntroBlock/SpeakersIntroBlock.js"),p=n(u),f=o("./src/components/SpeakerBlock/SpeakerBlock.js"),d=n(f),m=o("./data/speakers.json"),h=n(m),b=o("./src/assets/speakersIntro.json"),y=n(b),v=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.componentWillMount=function(){(0,c.gaTrack)({eventCategory:"speakers",eventAction:"speakers",eventLabel:"Speakers"})},t.prototype.render=function(){return l.default.createElement("div",{className:"page-speakers lines-bg"},l.default.createElement("div",{className:"container container-fluid"},l.default.createElement(p.default,{data:y.default.meetSpeakers})),l.default.createElement("div",{className:"speakers"},h.default.all.map(function(e,t){return l.default.createElement(d.default,{data:e,key:t})})))},t}(l.default.Component);t.default=v,e.exports=t.default},"./src/pages/speakers.scss":function(e,t){},"./src/utils/environment.js":function(e,t,o){"use strict";t.__esModule=!0,t.isChrome=void 0;var n=o("./src/utils/common.js");t.isChrome=function(){if((0,n.isInBrowser)()){var e=window.chrome,t=window.navigator,o=t.vendor,r=t.userAgent.indexOf("OPR")>-1,a=t.userAgent.indexOf("Edge")>-1,s=t.userAgent.match("CriOS");return!!s||null!==e&&void 0!==e&&"Google Inc."===o&&r===!1&&a===!1}return!1}}});
//# sourceMappingURL=component---src-pages-speakers-js-ce4761dd34bd074f6fc4.js.map