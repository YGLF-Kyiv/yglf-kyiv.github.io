webpackJsonp([0xfca11365d841],{"./data/SiteConfig.js":function(e,t){"use strict";e.exports={blogPostDir:"sample-posts",siteTitle:"You Gotta Love Frontend Conference, Kyiv, 24—25 May'18",siteLogo:"/logo.svg",siteUrl:"yglf.com.ua",pathPrefix:"/",siteDescription:"You Gotta Love Frontend Conference, Kyiv, 24—25 May'18",siteRss:"/rss.xml",siteFBAppID:"yglf.kyiv",googleAnalyticsID:"UA-107799328-1",userTwitter:"yglf_kyiv",email:"hello@yglf.com.ua",ticketsUrl:"https://2event.com/ru/events/1037785",sitemapPages:["/","/speakers","/tickets","/diversity","/sponsorship","/code-of-conduct"]}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Admin/Documents/Projects/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/Admin/Documents/Projects/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/tickets.js':function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),a=s(l),c=o("./data/SiteConfig.js"),u=s(c),d=o("./src/utils/common.js"),p=o("./src/utils/ga.js"),f=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentWillMount=function(){(0,p.gaTrack)({eventCategory:"purchase",eventAction:"tickets-page-redirect",eventLabel:"tickets-page-redirect"})},t.prototype.componentDidMount=function(){(0,d.isInBrowser)()&&(window.location.href=u.default.ticketsUrl)},t.prototype.render=function(){return a.default.createElement("noscript",null,a.default.createElement("div",null,"If you are not redirected automatically, follow this ",a.default.createElement("a",{href:u.default.ticketsUrl},"link"),"."))},t}(a.default.Component);t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-tickets-js-f550055885a01e832b0e.js.map