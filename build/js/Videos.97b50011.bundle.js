(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{741:function(e,t){},742:function(e,t){},743:function(e,t){},744:function(e,t){},745:function(e,t){},769:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return c}),a.d(t,"f",function(){return l}),a.d(t,"e",function(){return d}),a.d(t,"c",function(){return p});var n=a(2),i=a(1),r=a.n(i);function s(e,t){var a=e,i=[];return t&&0!==t.length||(i=e),t&&t.length>0&&e&&e.length>0&&a.forEach(function(e){var a=null;Object.prototype.hasOwnProperty.call(e,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(e,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(e,"favourites")||Object.prototype.hasOwnProperty.call(e,"bookmarks")||Object.prototype.hasOwnProperty.call(e,"status")?a=e:t.forEach(function(t){(Object.prototype.hasOwnProperty.call(e,"nid")&&e.nid===t.nid||Object.prototype.hasOwnProperty.call(e,"tid")&&e.tid===t.tid)&&(a=Object(n.a)({},e,t))}),i.push(a)}),i}function o(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function c(){return r.a.createElement("span",{className:"inline-loading"},r.a.createElement("span",null,"."),r.a.createElement("span",null,"."),r.a.createElement("span",null,"."))}function l(e,t){var a=e;return a&&0===a.length?t:t&&0!==t.length?(t.forEach(function(t,n){e.forEach(function(e,n){t.nid===e.nid&&(a[n]=t)})}),a):void 0}function d(){var e=localStorage.getItem("user"),t=JSON.parse(e);t&&!t.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function p(){return function(e){"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate().then(function(t){var a={msg:"Using ".concat(u(t.usage)," out of ").concat(u(t.quota)," bytes."),estimate:t};e({type:"FETCH_BROWSER_CACHE",payload:a})}):e({type:"FETCH_BROWSER_CACHE",payload:null})}}},770:function(e,t,a){"use strict";var n=a(82),i=a(83),r=a(86),s=a(84),o=a(85),c=a(1),l=a.n(c),d=a(156),u=a(7),p=a.n(u),h=a(769),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={src:e.src?e.src:e.defaultImage,alt:"",title:"",status:!1},a.Image=l.a.createRef(),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;if("IntersectionObserver"in window){var t=new IntersectionObserver(function(a,n){a.forEach(function(a){if(a.isIntersecting){var n=a.target;n.parentNode.classList.add("lazy-wrapper"),n.parentNode.classList.add("image-load"),n.src=e.state.src,n.parentNode.style.height=a.target.height+"px",n.classList.remove("lazy"),n.classList.add("lazy-item"),n.parentNode.classList.remove("lazy-wrapper"),n.parentNode.classList.remove("image-load"),n.parentNode.style.height=null,t.unobserve(n)}})});this.Img=t}}},{key:"componentDidMount",value:function(){this.Img.observe(this.Image.current)}},{key:"componentWillReceiveProps",value:function(e){this.setState({src:e.src?e.src:e.defaultImage})}},{key:"render",value:function(){return l.a.createElement("picture",{className:p()({banner:"banner"===this.props.type},{default:this.props.src===this.props.defaultImage},{completed:this.props.completed}),style:"lg"===Object(h.b)()&&"banner"===this.props.type?{backgroundImage:"url(".concat(this.props.imageLarge,")")}:{}},this.props.imageLarge&&l.a.createElement("source",{media:"(min-width: 1081px)",srcSet:this.props.imageLarge}),this.props.imageMedium&&l.a.createElement("source",{media:"(min-width: 769px)",srcSet:this.props.imageMedium}),l.a.createElement("img",{className:"lazy lazy-image",src:this.props.defaultImage?this.props.defaultImage:d.g,"data-src":this.state.src,alt:this.state.alt,ref:this.Image}))}}]),t}(c.Component);t.a=m},771:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(1),i=a.n(n);function r(e){return i.a.createElement("h1",{className:"no-data text-center"},e||"No Content Found")}},774:function(e,t,a){"use strict";var n=a(1),i=a.n(n),r=a(736);t.a=function(){return i.a.createElement(r.a,{height:260,width:260,speed:2,primaryColor:"#f3eeed",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"8",y:"19",rx:"0",ry:"0",width:"245",height:"183"}),i.a.createElement("rect",{x:"8",y:"213",rx:"0",ry:"0",width:"245",height:"15"}),i.a.createElement("rect",{x:"67",y:"237",rx:"0",ry:"0",width:"125",height:"15"}))}},776:function(e,t,a){"use strict";var n=a(1),i=a.n(n),r=a(760),s=a(756),o=a(156),c=a(774);function l(e){for(var t=[],a=0;a<o.c;a++)t.push(i.a.createElement(r.a,{xs:12,sm:6,md:4,lg:3,className:e.itemClass,key:"".concat(e.type,"_").concat(a)},i.a.createElement(c.a,null)));return i.a.createElement(s.a,null,t)}l.defaultProps={itemClass:"list-item",type:"loader",divClass:""},t.a=l},783:function(e,t,a){},784:function(e,t,a){"use strict";var n=a(82),i=a(83),r=a(86),s=a(84),o=a(8),c=a(85),l=a(1),d=a.n(l),u=a(757),p=a(767),h=a(758),m=a(759),f=(a(785),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).handleOption=function(e){var t=e.target.dataset.id;a.setState({currentOption:t}),a.props.handleSelect(t)},a.state={dropdownOpen:!1,currentOption:0,allLabel:a.props.allLabel,data:{0:a.props.allLabel}},a.toggle=a.toggle.bind(Object(o.a)(a)),a.handleOption=a.handleOption.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.staticData[0]=this.state.allLabel,this.setState({data:this.props.staticData}),this.props.selected&&this.setState({currentOption:this.props.selected})}},{key:"componentWillReceiveProps",value:function(e){e.staticData[0]=e.allLabel,this.setState({data:e.staticData}),this.props.selected&&this.setState({currentOption:this.props.selected})}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){var e=this,t=this.state.data[this.state.currentOption]?this.state.data[this.state.currentOption]:this.state.data[0];return d.a.createElement("div",{className:"select-filter"},d.a.createElement(u.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,defaultValue:this.props.selected},d.a.createElement(p.a,null,t),d.a.createElement(h.a,null,Object.keys(this.state.data).map(function(t){return-1!==t.indexOf("header")?d.a.createElement(m.a,{header:!0,key:t,id:"".concat(Math.random().toFixed(2),"-option-").concat(t),value:t,"data-id":t},e.state.data[t]):d.a.createElement(m.a,{key:t,id:"".concat(Math.random().toFixed(2),"-option-").concat(t),value:t,onClick:e.handleOption,"data-id":t},e.state.data[t])}))))}}]),t}(d.a.Component));f.defaultProps={allLabel:"All"},t.a=f},785:function(e,t,a){},787:function(e,t,a){},788:function(e,t,a){"use strict";var n=a(82),i=a(83),r=a(86),s=a(84),o=a(85),c=a(1),l=a.n(c),d=a(768),u=a(754),p=a(740),h=a.n(p),m=(a(783),a(769)),f=a(156),g=a(770),v=a(226),b=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"render",value:function(){var e=this.props,t=e.toggle,a=e.modal,n=e.fetching,i=e.type,r=e.data,s=e.fetched;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{isOpen:a,toggle:t,className:this.props.className},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"page-title m-0 p-0"},r&&r.title),l.a.createElement("button",{type:"button",onClick:t,className:"close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement(u.a,null,"videos"===i&&l.a.createElement("div",{className:"video"},n?l.a.createElement("div",{className:"loader text-center"},Object(m.d)()):null,s&&l.a.createElement("video",{width:"640",height:"360",controls:!0,crossOrigin:"anonymous",poster:r&&r.videoThumbnail?r.videoThumbnail:f.a,autoPlay:!0,controlsList:"nodownload"},l.a.createElement("source",{src:r&&r.videoUrl,type:"video/mp4"}),r&&r.videoSubtitle&&l.a.createElement("track",{src:r&&r.videoSubtitle,default:!0}),"Your browser does not support the video tag.")),"tools"===i&&l.a.createElement("div",{className:"popup-wrapper pdf"},n?l.a.createElement("div",{className:"loader text-center"},Object(m.d)()):null,s&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{defaultImage:f.g,src:r.imageSmall}),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:this.createMarkup(r.description)}),r&&r.url?l.a.createElement(h.a,{document:{url:r.url}}):null,l.a.createElement("div",{className:"col more-link"},l.a.createElement("a",{className:"btn btn-outline-secondary text-uppercase active",href:r.url,target:"_blank",rel:"noopener noreferrer"},v.gb)))))))}}]),t}(l.a.Component);t.a=b},789:function(e,t,a){"use strict";var n=a(82),i=a(83),r=a(86),s=a(84),o=a(8),c=a(85),l=a(1),d=a.n(l),u=a(737),p=a.n(u),h=a(769),m=a(784),f=a(227),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).brandList=a.brandList.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"brandList",value:function(){var e=p.a.parse(window.location.search).brand,t=e||0;if("load"!==this.context[0]&&"nodata"!==this.context[0]){var a={},n=localStorage.getItem("user"),i=Object.assign({},this.context),r=JSON.parse(n),s=r.role;if(0!==s.length){var o=s.map(function(e){return e.rid});if(-1!==o.indexOf("administrator")||-1!==o.indexOf("el_nyo_global_education_system_admin"))a=this.context;else r.brands.forEach(function(e){return a[e]=i[e]})}return d.a.createElement(m.a,{staticData:a,handleSelect:this.props.getBrandId,selected:t})}if("load"===this.context[0])return d.a.createElement("div",{className:"text-center"},Object(h.d)())}},{key:"render",value:function(){var e=this;return d.a.createElement(f.b,null,function(){return d.a.createElement("div",{className:"brand-categories"},e.brandList())})}}]),t}(l.Component);g.contextType=f.a,t.a=g},792:function(e,t,a){"use strict";var n=a(102),i=a.n(n),r=a(87),s=Object(r.a)();var o={getVideoDetails:function(e){return function(t){t({type:"FETCH_VIDEO_DETAILS"}),i.a.get("/api/v1/video?_format=json&nid=".concat(e),s).then(function(e){t({type:"FETCH_VIDEO_DETAILS_SUCCESS",payload:e})}).catch(function(e){t({type:"FETCH_VIDEO_DETAILS_FAILURE",payload:e.response}),t({type:"ADD_ERROR",payload:e})})}}};t.a=o},815:function(e,t,a){e.exports=a.p+"static/media/video-play-icon.e1da21c1.png"},825:function(e,t,a){"use strict";a.r(t);var n=a(738),i=a(82),r=a(83),s=a(86),o=a(84),c=a(8),l=a(85),d=a(1),u=a.n(d),p=a(120),h=a(7),m=a.n(h),f=a(737),g=a.n(f),v=a(756),b=a(102),E=a.n(b),y=a(87),O=Object(y.a)();var j={getVideosListing:function(e,t,a){return function(n){n({type:"FETCH_VIDEO_LISTING"}),E.a.get("/api/v1/videos?_format=json&limit=".concat(e,"&offset=").concat(t,"&brand=").concat(a),O).then(function(e){n({type:"FETCH_VIDEO_LISTING_SUCCESS",payload:e})}).catch(function(e){n({type:"FETCH_VIDEO_LISTING_FAILURE",payload:e.response}),n({type:"ADD_ERROR",payload:e})})}}},L=a(792),N=a(760),k=a(761),w=a(763),I=a(764),S=a(815),D=a.n(S),x=a(227),C=a(788),V=a(156),_=a(770),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={modal:!1,selectedVideo:{}},a.createMarkup=a.createMarkup.bind(Object(c.a)(a)),a.getRenderResults=a.getRenderResults.bind(Object(c.a)(a)),a.toggle=a.toggle.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"videoModal",value:function(e){this.setState({modal:!0,selectedVideo:e})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"getRenderResults",value:function(){var e=this,t=this.props.items;if(t&&0!==t.length)return t.map(function(t,a){return u.a.createElement(N.a,{key:a,xs:12,sm:6,md:4,lg:3,className:"list-item text-center"},u.a.createElement(k.a,{className:"listing-block"},u.a.createElement("div",{className:"video-wrapper"},u.a.createElement(_.a,{defaultImage:V.g,src:t.videoThumbnail}),u.a.createElement("div",{className:"video-icon","data-id":t.nid,onClick:function(){return e.videoModal(t)}},u.a.createElement("div",{className:"icon"},u.a.createElement("img",{src:D.a,alt:t.title})))),t.title&&u.a.createElement(w.a,{tag:"h2",dangerouslySetInnerHTML:e.createMarkup(t.title)}),t.brandName&&u.a.createElement(I.a,{tag:"h3",className:"brand-title"},t.brandName),0!==t.brand&&u.a.createElement(I.a,{tag:"h3",className:"brand-title"},e.context[t.brand])))})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.fetching,t.data),n=t.type;t.fetched;return u.a.createElement(x.b,null,function(){return u.a.createElement(v.a,{className:"section-content"},e.getRenderResults(),e.state.modal&&u.a.createElement(C.a,{fetching:!1,fetched:!0,toggle:e.toggle,modal:e.state.modal,type:n,data:e.state.selectedVideo,videoSrc:a.videoUrl,className:"popup-wrapper"}))})}}]),t}(d.Component);M.contextType=x.a;var R=M,B=a(771),T=a(226),P=a(776),F=a(789);a(787);var H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).cacheMe=function(){var e=a.state.data.map(function(e){var t,a=e.videoUrl;(t=a,caches.match(t).then(function(e){return e?e.arrayBuffer():fetch(t).then(function(e){return e.arrayBuffer()})})).then(function(e){if(console.log(e,"=="),void 0===e)return t=a,new Promise(function(e,a){try{var n=document.createElement("video"),i=function(){console.log("Done---\x3e",t),e()};n.src=t,n.autoplay=!0,n.onerror=i,n.onended=i,n.volume=0}catch(r){}});var t})});Promise.all(e).then(function(){return console.log("Done all")})},a.state={data:[],show:!1,fetched:!1,brandId:0},a.getListData=a.getListData.bind(Object(c.a)(a)),a.getNextPageContent=a.getNextPageContent.bind(Object(c.a)(a)),a.getBrandId=a.getBrandId.bind(Object(c.a)(a)),a.getVideo=a.getVideo.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=g.a.parse(this.props.location.search).brand,t=e||this.state.brandId;e&&0!==e.length&&this.setState({brandId:e}),this.props.getVideosListing(V.d,0,t)}},{key:"componentWillReceiveProps",value:function(e){var t=e.fetchingVideosList,a=e.fetchedVideosList,i=e.videosList,r=e.pager;a&&r&&this.state.fetched?(r.count>V.d?this.setState({show:!0}):this.setState({show:!1}),this.setState({data:[].concat(Object(n.a)(this.state.data),Object(n.a)(i.results)),is_disabled:!1,fetched:!1})):t&&this.setState({fetched:!0})}},{key:"getBrandId",value:function(e){this.setState({brandId:e,data:[]}),this.props.getVideosListing(V.d,0,e)}},{key:"getVideo",value:function(e){this.props.getVideoDetails(e)}},{key:"getListData",value:function(){var e=this.props,t=e.fetchingVideosList,a=e.fetchedVideosList,n=e.status,i=e.fetchingVideoDetails,r=e.fetchedVideoDetails,s=e.videoDetails,o=this.state.data;if(o&&0!==o.length)return u.a.createElement(R,{items:o,type:"videos",data:s&&s[0]?s[0]:{},fetching:i,fetched:r,getDetails:this.getVideo});if(a){if(0===o.length&&204===n)return Object(B.a)()}else if(t)return u.a.createElement(P.a,null)}},{key:"getNextPageContent",value:function(){var e=this.state.data.length;this.setState({is_disabled:!0}),this.props.getVideosListing(V.d,e,this.state.brandId)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"videos-listing"},u.a.createElement(v.a,null,u.a.createElement("div",{className:"col content-header"},u.a.createElement("h1",{className:"page-title"},this.props.sectionHeading))),u.a.createElement("div",{className:"brands"},u.a.createElement(F.a,{getBrandId:function(t){return e.getBrandId(t)},defaultBrand:this.state.brandId})),u.a.createElement(v.a,null,u.a.createElement("div",{className:m()("col more-link")},u.a.createElement("button",{className:m()("btn btn-outline-secondary text-uppercase"),onClick:this.cacheMe},"Cache On Click"))),this.getListData(),u.a.createElement(v.a,null,u.a.createElement("div",{className:m()("col more-link",{"d-none":!this.state.show})},u.a.createElement("button",{className:m()("btn btn-outline-secondary text-uppercase",{disabled:this.state.is_disabled}),onClick:this.getNextPageContent},this.props.seeMoreLabel))))}}]),t}(d.Component);H.defaultProps={sectionHeading:T.jb,seeMoreLabel:T.R};var W=Object(p.b)(function(e){var t=e.videoDetails,a=t.fetchingVideoDetails,n=t.fetchedVideoDetails,i=t.videoDetails,r=t.videoDetailsError,s=e.videosListing;return{fetchingVideosList:s.fetchingVideosList,fetchedVideosList:s.fetchedVideosList,videosList:s.videosList,videosListError:s.videosListError,pager:s.pager,status:s.status,fetchingVideoDetails:a,fetchedVideoDetails:n,videoDetails:i,videoDetailsError:r}},function(e){return{getVideosListing:function(t,a,n){return e(j.getVideosListing(t,a,n))},getVideoDetails:function(t){return e(L.a.getVideoDetails(t))}}})(H);t.default=W}}]);
//# sourceMappingURL=Videos.97b50011.bundle.js.map