webpackJsonp([0xefeaa6d1881d],{"./data/orderedBlock.js":function(e,t){"use strict";e.exports={callForPapers:{number:"1",subtitle:"Amazing Talks",title:"Call For Papers",description:["This year YGLF is hosting amazing speakers from all around the world. Listed below are our keynote speakers. For the full lineup you can visit our speakers page. Make sure to check back regularly, as this is just the beginning, there is a lot more to come!"],actionButton:{href:"mailto:hello@yglf.com.ua?subject=Call%20For%20Papers",text:"Apply"}},meetSpeakers:{number:"1",subtitle:"Amazing Talks",title:"Meet Our Speakers",description:["Kyiv and all of the Frontend communities here are amazing. Audience is technically strong and thankful for new knowledge. If you are eager to share your experience and useful insights, apply to become a speaker."],actionButton:{href:"https://2event.com/ru/events/1037785",text:"Buy Tickets",target:"__blank"}},venue:{number:"1",subtitle:"Awesome Spaces",title:"The Venue",description:["YGLF will take place at Bel étage - a venue in the centre of the city. There’s a beautiful restaurant serving lunch for all attendees, a two-storey auditorium, and an amazing roof, where there will be snacks and coffee during the day.","Located in the Downtown, it’s easy to get there from any hotel, and it’s surrounded by dozens of restaurants and coffee shops."],additionalInfo:{title:"Bel étage",description:"Shota Rustaveli St, 16a, Kyiv, Ukraine"},link:{title:"Get Directions",url:"https://www.google.com/maps/place/Bel+%C3%A9tage+Concert+Club/@50.4391815,30.5188484,18z/data=!3m1!4b1!4m5!3m4!1s0x40d4cefef66ddea3:0x42461c6fe3dca44e!8m2!3d50.4391815!4d30.5199427"},img:"venue.jpg",actionButton:{}},whoWeAre:{number:"1",subtitle:"Who We Are",title:"This Year",description:["This non-profit conference is aimed at delivering high quality content on the hottest topics that cutting edge Frontend developers need to know.","For the first time ever, YGLF is coming to Kyiv, the amazing European capital city of Ukraine.","This is our first international Front End conference on such a scale. People called us crazy, but by bringing internationally recognized speakers, we’re going to break the wall that separates the huge East European Frontend community from the rest of the world.","We hope you'll enjoy our efforts, community involvement and - of course - all the knowledge that will be shared."],actionButton:{}},team:{number:"2",subtitle:"Good Vibes",title:"The Team",description:["A small group of super dedicated people, working hard around the clock to make the most stunning conference ever. During YGLF Conference, you can find a member of the team at the registration desk at all times. Don't hesistate to come and talk to us, if you need any assitance."],actionButton:{}}}},"./data/team.js":function(e,t){"use strict";e.exports={all:[{firstName:"Yuri",lastName:"Tkachenko",position:" ",imageSrc:"/team/yuri_tkachenko",description:"Front-end engineer, <a class='simple-link' href='http://kyivjs.org/' target='__blank'>@kyivjs</a> co-organizer, community guy, nonprofessional drums player, learning double bass as hobby too.",social:[{type:"github",url:"https://github.com/tyv"}]},{firstName:"Sergey",lastName:"Frolov",position:" ",imageSrc:"/team/sergey_frolov",description:"Front-end engineer, <a class='simple-link' href='http://kyivjs.org/' target='__blank'>@kyivjs</a> co-organizer, <a class='simple-link' href='http://telegram.me/beerjskyiv/' target='__blank'>@beerjskyiv</a> organizer, <a class='simple-link' href='http://telegram.me/angularkyiv/' target='__blank'>@angularkyiv</a> co-organizer, coffee lover, digital nomad.",social:[{type:"twitter",url:"https://twitter.com/allfayn"}]},{firstName:"Andrei",lastName:"Sierkov",position:" ",imageSrc:"/team/andrei_sierkov",description:"Front-end developer, beginner speaker, coffee lover and dancer.",social:[{type:"facebook",url:"https://www.facebook.com/andrii.sierkov"},{type:"github",url:"https://github.com/viattik"},{type:"linkedin",url:"https://www.linkedin.com/in/andriisierkov/"}]},{firstName:"Polina",lastName:"Popovychuk",position:" ",imageSrc:"/team/polina_popovychuk",description:"Being in events, planning and organizing for years, making ppl happy and productive at my everyday job, calligraphy enthusiast, snowboard rider, book warm and dog lover.",social:[{type:"facebook",url:"https://www.facebook.com/polinchik"}]},{firstName:"Kate",lastName:"Pozdnysheva",position:" ",imageSrc:"/team/kate_pozdnysheva",description:"Project manager who has a great experience of organizing completely different (large and small) technological events at Yandex.",social:[{type:"linkedin",url:"https://www.linkedin.com/in/kate-pozdnysheva-bb79b8bb/"}]},{firstName:"Marina",lastName:"Sol",position:" ",imageSrc:"/team/marina_sol",description:"Former music student, current software engineering student. Front-end developer, digital nomad and art lover.",social:[{type:"facebook",url:"https://www.facebook.com/someuserid"},{type:"linkedin",url:"https://www.linkedin.com/in/marina-marina/"}]}]}},"./node_modules/react-lazyload/lib/decorator.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o("./node_modules/react/react.js"),c=n(s),u=o("./node_modules/react-lazyload/lib/index.js"),d=n(u),f=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(o){function n(){r(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.displayName="LazyLoad"+f(t),e}return l(n,o),i(n,[{key:"render",value:function(){return c.default.createElement(d.default,e,c.default.createElement(t,this.props))}}]),n}(s.Component)}}},"./node_modules/react-lazyload/lib/index.js":function(e,t,o){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o("./node_modules/react/react.js"),c=n(s),u=o("./node_modules/react-dom/index.js"),d=n(u),f=o("./node_modules/prop-types/index.js"),p=n(f),m=o("./node_modules/react-lazyload/lib/utils/event.js"),h=o("./node_modules/react-lazyload/lib/utils/scrollParent.js"),b=n(h),y=o("./node_modules/react-lazyload/lib/utils/debounce.js"),v=n(y),g=o("./node_modules/react-lazyload/lib/utils/throttle.js"),w=n(g),k=o("./node_modules/react-lazyload/lib/decorator.js"),_=n(k),j={top:0,right:0,bottom:0,left:0,width:0,height:0},E="data-lazyload-listened",O=[],P=[],N=!1;try{var z=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,z)}catch(e){}var x=!!N&&{capture:!1,passive:!0},T=function(e,t){var o=d.default.findDOMNode(e),n=void 0,r=void 0;try{var a=t.getBoundingClientRect();n=a.top,r=a.height}catch(e){n=j.top,r=j.height}var l=window.innerHeight||document.documentElement.clientHeight,i=Math.max(n,0),s=Math.min(l,n+r)-i,c=void 0,u=void 0;try{var f=o.getBoundingClientRect();c=f.top,u=f.height}catch(e){c=j.top,u=j.height}var p=c-i,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return p-m[0]<=s&&p+u+m[1]>=0},A=function(e){var t=d.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var o=void 0,n=void 0;try{var r=t.getBoundingClientRect();o=r.top,n=r.height}catch(e){o=j.top,n=j.height}var a=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return o-l[0]<=a&&o+n+l[1]>=0},S=function(e){var t=d.default.findDOMNode(e);if(t){var o=(0,b.default)(t),n=e.props.overflow&&o!==t.ownerDocument&&o!==document&&o!==document.documentElement,r=n?T(e,o):A(e);r?e.visible||(e.props.once&&P.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){P.forEach(function(e){var t=O.indexOf(e);t!==-1&&O.splice(t,1)}),P=[]},M=function(){for(var e=0;e<O.length;++e){var t=O[e];S(t)}C()},B=void 0,I=null,D=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.visible=!1,o}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===B?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===B&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,m.off)(window,"scroll",I,x),(0,m.off)(window,"resize",I,x),I=null),I||(void 0!==this.props.debounce?(I=(0,v.default)(M,"number"==typeof this.props.debounce?this.props.debounce:300),B="debounce"):void 0!==this.props.throttle?(I=(0,w.default)(M,"number"==typeof this.props.throttle?this.props.throttle:300),B="throttle"):I=M),this.props.overflow){var t=(0,b.default)(d.default.findDOMNode(this));if(t&&"function"==typeof t.getAttribute){var o=1+ +t.getAttribute(E);1===o&&t.addEventListener("scroll",I,x),t.setAttribute(E,o)}}else if(0===O.length||e){var n=this.props,r=n.scroll,a=n.resize;r&&(0,m.on)(window,"scroll",I,x),a&&(0,m.on)(window,"resize",I,x)}O.push(this),S(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,b.default)(d.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(E)-1;0===t?(e.removeEventListener("scroll",I,x),e.removeAttribute(E)):e.setAttribute(E,t)}}var o=O.indexOf(this);o!==-1&&O.splice(o,1),0===O.length&&((0,m.off)(window,"resize",I,x),(0,m.off)(window,"scroll",I,x))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:c.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(s.Component);D.propTypes={once:p.default.bool,height:p.default.oneOfType([p.default.number,p.default.string]),offset:p.default.oneOfType([p.default.number,p.default.arrayOf(p.default.number)]),overflow:p.default.bool,resize:p.default.bool,scroll:p.default.bool,children:p.default.node,throttle:p.default.oneOfType([p.default.number,p.default.bool]),debounce:p.default.oneOfType([p.default.number,p.default.bool]),placeholder:p.default.node,unmountIfInvisible:p.default.bool},D.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=_.default;t.default=D,t.forceCheck=M}).call(t,o("./node_modules/process/browser.js"))},"./node_modules/react-lazyload/lib/utils/debounce.js":function(e,t){"use strict";function o(e,t,o){var n=void 0,r=void 0,a=void 0,l=void 0,i=void 0,s=function s(){var c=+new Date-l;c<t&&c>=0?n=setTimeout(s,t-c):(n=null,o||(i=e.apply(a,r),n||(a=null,r=null)))};return function(){a=this,r=arguments,l=+new Date;var c=o&&!n;return n||(n=setTimeout(s,t)),c&&(i=e.apply(a,r),a=null,r=null),i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},"./node_modules/react-lazyload/lib/utils/event.js":function(e,t){"use strict";function o(e,t,o,n){n=n||!1,e.addEventListener?e.addEventListener(t,o,n):e.attachEvent&&e.attachEvent("on"+t,function(t){o.call(e,t||window.event)})}function n(e,t,o,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,o,n):e.detachEvent&&e.detachEvent("on"+t,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=o,t.off=n},"./node_modules/react-lazyload/lib/utils/scrollParent.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,o=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(n),a=r.position,l=r.overflow,i=r["overflow-x"],s=r["overflow-y"];if("static"===a&&t)n=n.parentNode;else{if(o.test(l)&&o.test(i)&&o.test(s))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},"./node_modules/react-lazyload/lib/utils/throttle.js":function(e,t){"use strict";function o(e,t,o){t||(t=250);var n,r;return function(){var a=o||this,l=+new Date,i=arguments;n&&l<n+t?(clearTimeout(r),r=setTimeout(function(){n=l,e.apply(a,i)},t)):(n=l,e.apply(a,i))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},"./src/components/OrderedBlock/OrderedBlock.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),s=n(i);o("./src/components/OrderedBlock/ordered-block.scss");var c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data,t=e.number,o=e.subtitle,n=e.title,r=e.description,a=e.additionalInfo,l=e.link,i=e.img;return s.default.createElement("div",{className:"ordered-block"},s.default.createElement("div",{className:"venue-block-name"},s.default.createElement("span",null,t," ",s.default.createElement("i",null,o))),s.default.createElement("div",{className:"venue-block-text"},s.default.createElement("h2",null,n),i&&s.default.createElement("div",{className:"venue-block-img"},s.default.createElement("img",{src:i,alt:n})),r.map(function(e,t){return s.default.createElement("p",{key:t},e)}),a&&s.default.createElement("p",null,s.default.createElement("strong",null,a.title),s.default.createElement("br",null),a.description),l&&s.default.createElement("div",{className:"venue-block-text-button"},s.default.createElement("a",{href:l.url,target:"_blank"},l.title))))},t}(i.Component);c.propTypes={data:i.PropTypes.object},c.defaultProps={data:{additionalInfo:{},link:{}}},t.default=c,e.exports=t.default},"./src/components/OrderedBlock/ordered-block.scss":function(e,t){},"./src/components/PersonBlock/PersonBlock.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o("./node_modules/react/react.js"),c=n(s);o("./src/components/PersonBlock/person-block.scss");var u=o("./src/components/SocialIcons/SocialIcons.js"),d=n(u),f=o("./node_modules/react-lazyload/lib/index.js"),p=n(f),m=o("./src/utils/environment.js"),h=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data,t=e.firstName,o=e.lastName,n=e.imageSrc,r=e.social,a=e.position,l=e.company,i=e.description,s=(0,m.isChrome)()?"webp":"jpg",u="person-block container container-fluid",f=this.props.isSmall?"-small-blocks":"";return c.default.createElement("div",{className:u+" "+f},c.default.createElement("div",{className:"person-block-cols"},c.default.createElement("a",{href:"",name:this.anchor,className:"-no-outline anchor"}),c.default.createElement("div",{className:"person-block-img"},c.default.createElement(p.default,{offset:150},c.default.createElement("img",{src:n+"."+s,className:"-drop-shadow",alt:t+" "+o})),c.default.createElement(d.default,{data:r})),c.default.createElement("div",{className:"person-block-text"},c.default.createElement("h3",null,c.default.createElement("span",{className:"person-first-name"},t)," ",c.default.createElement("span",{className:"person-last-name"},o)),c.default.createElement("p",null,a&&c.default.createElement("span",{className:"person-position"},a),l&&c.default.createElement("span",{className:"person-company"},l)),c.default.createElement("p",{dangerouslySetInnerHTML:{__html:i}}))))},i(t,[{key:"anchor",get:function(){var e=this.props.data,t=e.firstName,o=e.lastName;return(t+"-"+o).replace(/\s/g,"-")}}]),t}(s.Component);h.propTypes={data:s.PropTypes.object},h.defaultProps={data:{},isSmall:!1},t.default=h,e.exports=t.default},"./src/components/PersonBlock/person-block.scss":function(e,t){},"./src/components/SocialIcons/SocialIcons.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),s=n(i);o("./src/components/SocialIcons/social-icons.scss");var c=function(e){return"icon-"+e},u=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data,t=e.map(function(e){return s.default.createElement("a",{className:"no-outline",key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.type},s.default.createElement("i",{className:c(e.type)}))});return s.default.createElement("div",{className:"social-icons"},t)},t}(s.default.Component);u.propTypes={data:i.PropTypes.array},u.defaultProps={data:{}},t.default=u,e.exports=t.default},"./src/components/SocialIcons/social-icons.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Admin/Documents/Projects/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),s=n(i);o("./src/pages/about.scss");var c=o("./node_modules/react-lazyload/lib/index.js"),u=(n(c),o("./src/components/OrderedBlock/OrderedBlock.js")),d=n(u),f=o("./src/components/PersonBlock/PersonBlock.js"),p=n(f),m=o("./src/utils/ga.js"),h=o("./data/team.js"),b=n(h),y=o("./data/orderedBlock.js"),v=n(y),g=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentWillMount=function(){(0,m.gaTrack)({eventCategory:"about",eventAction:"about",eventLabel:"About"})},t.prototype.render=function(){return s.default.createElement("div",{className:"about-page bg lines-bg"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"header"},s.default.createElement("div",{className:"header-text"},s.default.createElement("h1",null,"About"),s.default.createElement("p",null,"The largest international frontend conference in the Middle East is happening for the forth time.",s.default.createElement("small",null,"24-25 May, Kyiv")))),s.default.createElement(d.default,{data:v.default.whoWeAre}),s.default.createElement("div",{className:"about-page-past"},s.default.createElement("div",{className:"about-page-past-section"},s.default.createElement("p",null,"In 2017 at the third run of the conference we gladly hosted world-class Frontend gurus who gave amazing talks."),s.default.createElement("a",{href:"https://www.youtube.com/watch?v=kTUs0mu0HHk&list=PLII-CO3Ff0qYaPv6MvFsFzy8LSqPY6KOj",target:"_blank",rel:"noopener noreferrer",className:"btn-underline"},"VIEW 2017 TALKS"))),s.default.createElement(d.default,{data:v.default.team}),s.default.createElement("div",{className:"team-list"},b.default.all.map(function(e,t){return s.default.createElement(p.default,{data:e,key:t,isSmall:!0})}))))},t}(s.default.Component);t.default=g,e.exports=t.default},"./src/pages/about.scss":function(e,t){},"./src/utils/environment.js":function(e,t,o){"use strict";t.__esModule=!0,t.isChrome=void 0;var n=o("./src/utils/common.js");t.isChrome=function(){if((0,n.isInBrowser)()){var e=window.chrome,t=window.navigator,o=t.vendor,r=t.userAgent.indexOf("OPR")>-1,a=t.userAgent.indexOf("Edge")>-1,l=t.userAgent.match("CriOS");return!!l||null!==e&&void 0!==e&&"Google Inc."===o&&r===!1&&a===!1}return!1}}});
//# sourceMappingURL=component---src-pages-about-js-7b73bb3f4990c63e2ab6.js.map