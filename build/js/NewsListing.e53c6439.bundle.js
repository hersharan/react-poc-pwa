(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{599:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return c}),a.d(t,"f",function(){return l}),a.d(t,"e",function(){return u}),a.d(t,"c",function(){return p});var n=a(2),r=a(1),s=a.n(r);function i(e,t){var a=e,r=[];return t&&0!==t.length||(r=e),t&&t.length>0&&e&&e.length>0&&a.forEach(function(e){var a=null;Object.prototype.hasOwnProperty.call(e,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(e,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(e,"favourites")||Object.prototype.hasOwnProperty.call(e,"bookmarks")||Object.prototype.hasOwnProperty.call(e,"status")?a=e:t.forEach(function(t){(Object.prototype.hasOwnProperty.call(e,"nid")&&e.nid===t.nid||Object.prototype.hasOwnProperty.call(e,"tid")&&e.tid===t.tid)&&(a=Object(n.a)({},e,t))}),r.push(a)}),r}function o(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function c(){return s.a.createElement("span",{className:"inline-loading"},s.a.createElement("span",null,"."),s.a.createElement("span",null,"."),s.a.createElement("span",null,"."))}function l(e,t){var a=e;return a&&0===a.length?t:t&&0!==t.length?(t.forEach(function(t,n){e.forEach(function(e,n){t.nid===e.nid&&(a[n]=t)})}),a):void 0}function u(){var e=localStorage.getItem("user"),t=JSON.parse(e);t&&!t.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function p(){return function(e){"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate().then(function(t){var a={msg:"Using ".concat(d(t.usage)," out of ").concat(d(t.quota)," bytes."),estimate:t};e({type:"FETCH_BROWSER_CACHE",payload:a})}):e({type:"FETCH_BROWSER_CACHE",payload:null})}}},600:function(e,t,a){"use strict";var n=a(69),r=a(70),s=a(73),i=a(71),o=a(72),c=a(1),l=a.n(c),u=a(127),d=a(7),p=a.n(d),h=a(599),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={src:e.src?e.src:e.defaultImage,alt:"",title:"",status:!1},a.Image=l.a.createRef(),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;if("IntersectionObserver"in window){var t=new IntersectionObserver(function(a,n){a.forEach(function(a){if(a.isIntersecting){var n=a.target;n.parentNode.classList.add("lazy-wrapper"),n.parentNode.classList.add("image-load"),n.src=e.state.src,n.parentNode.style.height=a.target.height+"px",n.classList.remove("lazy"),n.classList.add("lazy-item"),n.parentNode.classList.remove("lazy-wrapper"),n.parentNode.classList.remove("image-load"),n.parentNode.style.height=null,t.unobserve(n)}})});this.Img=t}}},{key:"componentDidMount",value:function(){this.Img.observe(this.Image.current)}},{key:"componentWillReceiveProps",value:function(e){this.setState({src:e.src?e.src:e.defaultImage})}},{key:"render",value:function(){return l.a.createElement("picture",{className:p()({banner:"banner"===this.props.type},{default:this.props.src===this.props.defaultImage},{completed:this.props.completed}),style:"lg"===Object(h.b)()&&"banner"===this.props.type?{backgroundImage:"url(".concat(this.props.imageLarge,")")}:{}},this.props.imageLarge&&l.a.createElement("source",{media:"(min-width: 1081px)",srcSet:this.props.imageLarge}),this.props.imageMedium&&l.a.createElement("source",{media:"(min-width: 769px)",srcSet:this.props.imageMedium}),l.a.createElement("img",{className:"lazy lazy-image",src:this.props.defaultImage?this.props.defaultImage:u.g,"data-src":this.state.src,alt:this.state.alt,ref:this.Image}))}}]),t}(c.Component);t.a=m},601:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(1),r=a.n(n);function s(e){return r.a.createElement("h1",{className:"no-data text-center"},e||"No Content Found")}},604:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(572);t.a=function(){return r.a.createElement(s.a,{height:260,width:260,speed:2,primaryColor:"#f3eeed",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"8",y:"19",rx:"0",ry:"0",width:"245",height:"183"}),r.a.createElement("rect",{x:"8",y:"213",rx:"0",ry:"0",width:"245",height:"15"}),r.a.createElement("rect",{x:"67",y:"237",rx:"0",ry:"0",width:"125",height:"15"}))}},605:function(e,t,a){"use strict";var n=a(128),r=a(69),s=a(70),i=a(73),o=a(71),c=a(8),l=a(72),u=a(1),d=a.n(u),p=a(590),h=a(591),m=a(592),g=a(593),f=a(594),b=a(586),y=a(182),v=a(127),E=a(600),O=a(601),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).createMarkup=a.createMarkup.bind(Object(c.a)(a)),a.getRenderResults=a.getRenderResults.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"getRenderResults",value:function(){var e=this,t=this.props,a=t.items,r=t.type,s=t.showBrandTitle,i=Object(n.a)(t,["items","type","showBrandTitle"]),o="#";if("undefined"!==typeof r)switch(r){case"levels":o="/levels/";break;case"products":case"product":o="/product/";break;case"ingredients":case"ingredient":o="/ingredient/";break;case"news":o="/news/";break;default:o="#"}return a&&0!==a.length?a.map(function(t,a){return d.a.createElement(p.a,Object.assign({key:a,xs:12,sm:6,md:4,lg:3},i,{className:"list-item text-center"}),d.a.createElement(h.a,{className:"listing-block"},d.a.createElement(m.a,{href:"".concat(o).concat(t.nid?t.nid:t.tid)},d.a.createElement(E.a,{defaultImage:v.g,src:t.imageSmall})),d.a.createElement(g.a,{tag:"h2"},d.a.createElement(m.a,{href:"".concat(o).concat(t.nid?t.nid:t.tid),dangerouslySetInnerHTML:e.createMarkup(t.displayTitle&&t.displayTitle)})),s&&0!==t.brand&&d.a.createElement(f.a,{tag:"h3",className:"brand-title"},e.context[t.brand]),t.subTitle&&e.props.showSubTitle&&d.a.createElement(f.a,{className:"sub-title"},d.a.createElement(m.a,{href:"".concat(o).concat(t.categoryId||t.nid),dangerouslySetInnerHTML:e.createMarkup(t.subTitle)}))))}):Object(O.a)(this.props.noDataLabel)}},{key:"render",value:function(){var e=this;return d.a.createElement(y.b,null,function(){return d.a.createElement(b.a,{className:"section-content"},e.getRenderResults())})}}]),t}(u.Component);w.contextType=y.a,w.defaultProps={showBrandTitle:!0},t.a=w},606:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(590),i=a(586),o=a(127),c=a(604);function l(e){for(var t=[],a=0;a<o.c;a++)t.push(r.a.createElement(s.a,{xs:12,sm:6,md:4,lg:3,className:e.itemClass,key:"".concat(e.type,"_").concat(a)},r.a.createElement(c.a,null)));return r.a.createElement(i.a,null,t)}l.defaultProps={itemClass:"list-item",type:"loader",divClass:""},t.a=l},663:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(574),s=a(69),i=a(70),o=a(73),c=a(71),l=a(8),u=a(72),d=a(1),p=a.n(d),h=a(99),m=a(586),g=a(7),f=a.n(g),b=a(606),y=a(605),v=a(87),E=a.n(v),O=a(74),w=Object(O.a)();var S={getStoriesListing:function(e,t){return function(a){a({type:"FETCH_TRENDING_LISTING"}),E.a.get("/api/v1/stories?_format=json&limit=".concat(e,"&offset=").concat(t),w).then(function(e){a({type:"FETCH_TRENDING_LISTING_SUCCESS",payload:e})}).catch(function(e){a({type:"FETCH_TRENDING_LISTING_FAILURE",payload:e.response}),a({type:"ADD_ERROR",payload:e})})}}},j=a(601),N=a(127),k=a(181),I=a(599),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={stories:[],is_disabled:!1,show:!1,fetched:!1},a.getNextPageContent=a.getNextPageContent.bind(Object(l.a)(a)),a.renderStories=a.renderStories.bind(Object(l.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.results,a=e.fetchingStories,n=e.fetchedStories,s=e.pager,i=e.updatedActivities;if(n&&s&&this.state.fetched?(s.count>N.d?this.setState({show:!0}):this.setState({show:!1}),this.setState({stories:[].concat(Object(r.a)(this.state.stories),Object(r.a)(t)),is_disabled:!1,fetched:!1})):a&&(this.setState({fetched:!0}),0===this.state.stories.length&&this.setState({show:!1})),!a&&n&&i){var o=Object(I.f)(this.state.stories,t);this.setState({stories:o})}}},{key:"getNextPageContent",value:function(){var e=this.state.stories.length;this.setState({is_disabled:!0}),this.props.getStoriesListing(N.d,e)}},{key:"componentDidMount",value:function(){this.props.getStoriesListing(N.d,0),this.setState({stories:this.props.stories})}},{key:"renderStories",value:function(){var e=this.props,t=e.fetchingStories,a=e.fetchedStories,n=e.translations,r=e.status,s=this.state.stories;if(s&&0!==s.length)return p.a.createElement(y.a,{items:s,type:"news"});if(a){if(0===s.length&&204===r)return Object(j.a)(n.NoContentFound)}else if(t)return p.a.createElement(b.a,{divClass:"story-list text-center row",itemClass:"loader-list",type:"news"})}},{key:"render",value:function(){return p.a.createElement("div",{className:"trending-listing listing"},p.a.createElement("h1",{className:"page-title"},this.props.sectionHeading),p.a.createElement("div",{className:"story-list text-center"},this.renderStories()),p.a.createElement(m.a,null,p.a.createElement("div",{className:f()("col more-link",{"d-none":!this.state.show})},p.a.createElement("button",{className:f()("btn btn-outline-secondary text-uppercase",{disabled:this.state.is_disabled}),onClick:this.getNextPageContent},this.props.seeMoreLabel))))}}]),t}(d.Component);C.defaultProps={sectionHeading:k.db,seeMoreLabel:k.R};var x=Object(h.b)(function(e){var t=e.trendingListing;return{stories:t.stories,fetchingStories:t.fetchingStories,fetchedStories:t.fetchedStories,fetchingStoriesError:t.fetchingStoriesError,pager:t.pager,status:t.status}},function(e){return{getStoriesListing:function(t,a){return e(S.getStoriesListing(t,a))}}},function(e,t,a){return Object(n.a)({},e,t,a,{results:e.stories.results,sections:!1,countEnable:!0})})(C);t.default=x}}]);
//# sourceMappingURL=NewsListing.e53c6439.bundle.js.map