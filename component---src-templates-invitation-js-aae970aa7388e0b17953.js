webpackJsonp([0xd3d0832cef0b],{"./src/components/InvitationBlock/InvitationBlock.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),s=o(l);n("./src/components/InvitationBlock/invitation-block.scss");var c=n("./src/utils/ga.js"),u=n("./src/utils/common.js"),d="invitation-video",p=function(e){function t(){var n,o,i;a(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=r(this,e.call.apply(e,[this].concat(s))),o.player=null,o.playStartTracked=!1,i=n,r(o,i)}return i(t,e),t.prototype.componentWillMount=function(){var e=this.props.shouldTrack;e&&this.startYoutubeTracking()},t.prototype.startYoutubeTracking=function(){var e=this,t=this.props.data,n=t.invitation.video.split("/").pop();(0,u.isInBrowser)()&&(window.onYouTubeIframeAPIReady=function(){window.player=e.player=new YT.Player(d,{videoId:n,events:{onStateChange:function(n){n.data!==YT.PlayerState.PLAYING||e.playStartTracked||((0,c.gaTrack)({eventCategory:"invitation",eventAction:"video-started",eventLabel:t.invitation.name}),e.playStartTracked=!0),n.data===YT.PlayerState.ENDED&&(0,c.gaTrack)({eventCategory:"invitation",eventAction:"video-fully-played",eventLabel:t.invitation.name})}}})})},t.prototype.render=function(){var e=this.props.data;return s.default.createElement("div",{className:"invitation-block container container-fluid"},s.default.createElement("div",{className:"invitation-block-text"},s.default.createElement("h2",null,"Hello, ",e.invitation.name,"!"),s.default.createElement("p",null,"We’ve made a very personal invitation asking you to speak at You Gotta Love Frontend Conference in Kyiv, Ukraine."),s.default.createElement("div",{className:"invitation-block-video"},s.default.createElement("div",{id:d},s.default.createElement("iframe",{src:e.invitation.video,frameBorder:"0",allowFullScreen:!0})))),s.default.createElement("div",{className:"invitation-block-text"},s.default.createElement("h2",null,"What is YGLF?"),s.default.createElement("p",null,"This is a community-driven event. Originally born in Tel Aviv, this will be the first year taking it to  Kyiv."),s.default.createElement("p",null,"We love to say that it is event made by developers for developers."),s.default.createElement("p",null,"This work is joint effort by  volunteers  from local Frontend communities including KyivJS Meetup, React Kyiv Meetup, BeerJS Kyiv, KharkivJS and we’re also getting  help from numerous great local developers and event organisers."),s.default.createElement("p",null,"We're getting this help because we don’t get many internationally recognized speakers visiting Kyiv, so changing  that is one of the primary  goals for YGLF."),s.default.createElement("p",null,"Another goal is to get speakers who  are known for  their service to  the global frontend community: authors of popular libraries, and contributors, writers and speakers, researchers and standards creators.")),s.default.createElement("div",{className:"invitation-block-text"},s.default.createElement("h2",null,"Who are your audience?"),s.default.createElement("p",null,"We are pretty sure that all local communities from Ukraine will be represented in the YGLF Kyiv audience. Also we believe that number of people from Eastern Europe countries would love to join this event.")),s.default.createElement("div",{className:"invitation-block-text"},s.default.createElement("h2",null,"Kyiv"),s.default.createElement("p",null,"You can learn a lot about the city from Bruce’s video."),s.default.createElement("p",null,"In Spring, Kyiv has a special beauty, because the 'chestnut city' starts to bloom – believe us, you'd love to see that."),s.default.createElement("p",null,"To sum up, Kyiv is great place to visit, and you'll want to come back again.")),s.default.createElement("div",{className:"invitation-block-text"},s.default.createElement("p",null,"Again, we want to invite you to speak at YGLF Kyiv and, if you are willing to do that, please reply to the email we sent you,  and we’ll sort out  all the details and logistics. We provide all the transportation and accommodation expenses."),s.default.createElement("p",{className:"-text-uppercase -text-semibold"},"We really hope you will join us!"),s.default.createElement("p",{className:"signing-up"},"With love from Kyiv,",s.default.createElement("br",null),"and the YGLF volunteers team.")))},t}(l.Component);t.default=p,e.exports=t.default},"./src/components/InvitationBlock/invitation-block.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-stage-0/lib/index.js","/Users/andreisierkov/Projects/yglf/website-2018/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/invitation.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n("./node_modules/react/react.js"),s=o(l),c=n("./src/components/InvitationBlock/InvitationBlock.js"),u=o(c),d=n("./src/utils/ga.js"),p=n("./src/utils/common.js"),f=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentWillMount=function(){var e=this.props.pathContext.track,t=this.props.data;e&&(0,d.gaTrack)({eventCategory:"invitation",eventAction:"open",eventLabel:t.invitation.name}),this.loadYoutubeApi()},t.prototype.loadYoutubeApi=function(){if((0,p.isInBrowser)()){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},t.prototype.render=function(){var e=this.props,t=e.data,n=e.pathContext;return s.default.createElement("div",{className:"lines-bg"},s.default.createElement(u.default,{data:t,shouldTrack:n.track}))},t}(s.default.Component);t.default=f;t.pageQuery="** extracted graphql fragment **"},"./src/utils/common.js":function(e,t){"use strict";function n(){return"undefined"!=typeof window}t.__esModule=!0,t.isInBrowser=n},"./src/utils/ga.js":function(e,t,n){"use strict";function o(e){var t=e.hitType,n=void 0===t?"event":t,o=e.eventCategory,r=e.eventAction,i=e.eventLabel;(0,a.isInBrowser)()&&window.ga&&(console.log("Tracking QA event",e),window.ga("send",{hitType:n,eventCategory:o,eventAction:r,eventLabel:i}))}t.__esModule=!0,t.gaTrack=o;var a=n("./src/utils/common.js")}});
//# sourceMappingURL=component---src-templates-invitation-js-aae970aa7388e0b17953.js.map