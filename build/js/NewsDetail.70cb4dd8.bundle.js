(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{599:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return c}),a.d(t,"f",function(){return l}),a.d(t,"e",function(){return u}),a.d(t,"c",function(){return p});var r=a(2),n=a(1),i=a.n(n);function o(e,t){var a=e,n=[];return t&&0!==t.length||(n=e),t&&t.length>0&&e&&e.length>0&&a.forEach(function(e){var a=null;Object.prototype.hasOwnProperty.call(e,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(e,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(e,"favourites")||Object.prototype.hasOwnProperty.call(e,"bookmarks")||Object.prototype.hasOwnProperty.call(e,"status")?a=e:t.forEach(function(t){(Object.prototype.hasOwnProperty.call(e,"nid")&&e.nid===t.nid||Object.prototype.hasOwnProperty.call(e,"tid")&&e.tid===t.tid)&&(a=Object(r.a)({},e,t))}),n.push(a)}),n}function s(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function c(){return i.a.createElement("span",{className:"inline-loading"},i.a.createElement("span",null,"."),i.a.createElement("span",null,"."),i.a.createElement("span",null,"."))}function l(e,t){var a=e;return a&&0===a.length?t:t&&0!==t.length?(t.forEach(function(t,r){e.forEach(function(e,r){t.nid===e.nid&&(a[r]=t)})}),a):void 0}function u(){var e=localStorage.getItem("user"),t=JSON.parse(e);t&&!t.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=t<0?0:t,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}function p(){return function(e){"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate().then(function(t){var a={msg:"Using ".concat(d(t.usage)," out of ").concat(d(t.quota)," bytes."),estimate:t};e({type:"FETCH_BROWSER_CACHE",payload:a})}):e({type:"FETCH_BROWSER_CACHE",payload:null})}}},600:function(e,t,a){"use strict";var r=a(69),n=a(70),i=a(73),o=a(71),s=a(72),c=a(1),l=a.n(c),u=a(127),d=a(7),p=a.n(d),h=a(599),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={src:e.src?e.src:e.defaultImage,alt:"",title:"",status:!1},a.Image=l.a.createRef(),a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){var e=this;if("IntersectionObserver"in window){var t=new IntersectionObserver(function(a,r){a.forEach(function(a){if(a.isIntersecting){var r=a.target;r.parentNode.classList.add("lazy-wrapper"),r.parentNode.classList.add("image-load"),r.src=e.state.src,r.parentNode.style.height=a.target.height+"px",r.classList.remove("lazy"),r.classList.add("lazy-item"),r.parentNode.classList.remove("lazy-wrapper"),r.parentNode.classList.remove("image-load"),r.parentNode.style.height=null,t.unobserve(r)}})});this.Img=t}}},{key:"componentDidMount",value:function(){this.Img.observe(this.Image.current)}},{key:"componentWillReceiveProps",value:function(e){this.setState({src:e.src?e.src:e.defaultImage})}},{key:"render",value:function(){return l.a.createElement("picture",{className:p()({banner:"banner"===this.props.type},{default:this.props.src===this.props.defaultImage},{completed:this.props.completed}),style:"lg"===Object(h.b)()&&"banner"===this.props.type?{backgroundImage:"url(".concat(this.props.imageLarge,")")}:{}},this.props.imageLarge&&l.a.createElement("source",{media:"(min-width: 1081px)",srcSet:this.props.imageLarge}),this.props.imageMedium&&l.a.createElement("source",{media:"(min-width: 769px)",srcSet:this.props.imageMedium}),l.a.createElement("img",{className:"lazy lazy-image",src:this.props.defaultImage?this.props.defaultImage:u.g,"data-src":this.state.src,alt:this.state.alt,ref:this.Image}))}}]),t}(c.Component);t.a=m},603:function(e,t,a){"use strict";var r=a(1),n=a.n(r),i=a(572),o=function(e){return n.a.createElement(i.a,{speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb",className:"row"},n.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:e.width,height:e.height}))};o.defaultProps={height:0,width:0},t.a=o},610:function(e,t,a){"use strict";var r=a(1),n=a.n(r),i=a(572),o=function(e){return n.a.createElement(i.a,{height:200,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n.a.createElement("rect",{x:"170",y:"20",rx:"0",ry:"0",width:"70",height:"8"}),n.a.createElement("rect",{x:"0",y:"70",rx:"2",ry:"2",width:"300",height:"3"}),n.a.createElement("rect",{x:"0",y:"50",rx:"2",ry:"2",width:"250",height:"3"}),n.a.createElement("rect",{x:"0",y:"90",rx:"2",ry:"2",width:"200",height:"3"}))};o.defaultProps={height:0,width:0},t.a=o},640:function(e,t,a){},662:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(69),i=a(70),o=a(73),s=a(71),c=a(8),l=a(72),u=a(1),d=a.n(u),p=a(99),h=a(590),m=a(573),g=a.n(m),f=a(87),y=a.n(f),v=a(74),E=Object(v.a)();var b={getStory:function(e,t,a){return function(t){t({type:"FETCH_STORY_DETAILS"}),y.a.get("/api/v1/story?_format=json&nid=".concat(e),E).then(function(e){t({type:"FETCH_STORY_DETAILS_SUCCESS",payload:e.data})}).catch(function(e){t({type:"FETCH_STORY_DETAILS_FAILURE",payload:e.response.data.message}),t({type:"ADD_ERROR",payload:e})})}}},w=a(600),O=a(127),S=a(603),j=a(610),I=(a(640),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={story:e.story,nid:null,preview:0},a.getTrendingDetailsTemplate=a.getTrendingDetailsTemplate.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.nid,t=g.a.parse(this.props.location.search),a=t.preview,r=t.language;a&&e&&this.setState({preview:a,nid:e}),this.props.getStory(e,a,r)}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"getTrendingDetailsTemplate",value:function(){var e=this.props,t=e.results,a=e.fetchingStory,r=t;if(e.fetchedStory){if(t&&0!==t.length)return d.a.createElement("div",{className:"story-details"},d.a.createElement("div",{className:"story-content text-center"},d.a.createElement(w.a,{defaultImage:O.a,src:r.imageSmall?r.imageSmall:O.a,imageLarge:r.imageLarge?r.imageLarge:O.a,imageMedium:r.imageMedium?r.imageMedium:O.a,type:"banner"}),d.a.createElement("div",{className:"heading carousel-caption"},d.a.createElement("h3",{className:"page-title",dangerouslySetInnerHTML:this.createMarkup(r.displayTitle)}))),d.a.createElement("div",{className:"story-body description"},d.a.createElement(h.a,{xs:12,dangerouslySetInnerHTML:this.createMarkup(r.body)})))}else if(a)return d.a.createElement(d.a.Fragment,null,d.a.createElement(S.a,{height:1920,width:1080}),d.a.createElement(j.a,null))}},{key:"render",value:function(){return d.a.createElement("div",{className:"treding-details-wrapper"},this.getTrendingDetailsTemplate())}}]),t}(u.Component));var T=Object(p.b)(function(e){var t=e.trendingDetails;return{story:t.story,fetchingStory:t.fetchingStory,fetchedStory:t.fetchedStory,fetchedStoryError:t.fetchedStoryError}},function(e){return{getStory:function(t,a,r){return e(b.getStory(t,a,r))}}},function(e,t,a){return Object(r.a)({},e,t,a,{results:e.story.results,sections:!1,countEnable:!0})})(I);t.default=T}}]);
//# sourceMappingURL=NewsDetail.70cb4dd8.bundle.js.map