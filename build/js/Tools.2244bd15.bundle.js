(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{599:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i}),a.d(e,"d",function(){return l}),a.d(e,"f",function(){return c}),a.d(e,"e",function(){return d}),a.d(e,"c",function(){return p});var n=a(2),r=a(1),s=a.n(r);function o(t,e){var a=t,r=[];return e&&0!==e.length||(r=t),e&&e.length>0&&t&&t.length>0&&a.forEach(function(t){var a=null;Object.prototype.hasOwnProperty.call(t,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(t,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(t,"favourites")||Object.prototype.hasOwnProperty.call(t,"bookmarks")||Object.prototype.hasOwnProperty.call(t,"status")?a=t:e.forEach(function(e){(Object.prototype.hasOwnProperty.call(t,"nid")&&t.nid===e.nid||Object.prototype.hasOwnProperty.call(t,"tid")&&t.tid===e.tid)&&(a=Object(n.a)({},t,e))}),r.push(a)}),r}function i(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function l(){return s.a.createElement("span",{className:"inline-loading"},s.a.createElement("span",null,"."),s.a.createElement("span",null,"."),s.a.createElement("span",null,"."))}function c(t,e){var a=t;return a&&0===a.length?e:e&&0!==e.length?(e.forEach(function(e,n){t.forEach(function(t,n){e.nid===t.nid&&(a[n]=e)})}),a):void 0}function d(){var t=localStorage.getItem("user"),e=JSON.parse(t);e&&!e.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return"0 Bytes";var a=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function p(){return function(t){"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate().then(function(e){var a={msg:"Using ".concat(u(e.usage)," out of ").concat(u(e.quota)," bytes."),estimate:e};t({type:"FETCH_BROWSER_CACHE",payload:a})}):t({type:"FETCH_BROWSER_CACHE",payload:null})}}},600:function(t,e,a){"use strict";var n=a(69),r=a(70),s=a(73),o=a(71),i=a(72),l=a(1),c=a.n(l),d=a(127),u=a(7),p=a.n(u),h=a(599),m=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(o.a)(e).call(this,t))).state={src:t.src?t.src:t.defaultImage,alt:"",title:"",status:!1},a.Image=c.a.createRef(),a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"componentWillMount",value:function(){var t=this;if("IntersectionObserver"in window){var e=new IntersectionObserver(function(a,n){a.forEach(function(a){if(a.isIntersecting){var n=a.target;n.parentNode.classList.add("lazy-wrapper"),n.parentNode.classList.add("image-load"),n.src=t.state.src,n.parentNode.style.height=a.target.height+"px",n.classList.remove("lazy"),n.classList.add("lazy-item"),n.parentNode.classList.remove("lazy-wrapper"),n.parentNode.classList.remove("image-load"),n.parentNode.style.height=null,e.unobserve(n)}})});this.Img=e}}},{key:"componentDidMount",value:function(){this.Img.observe(this.Image.current)}},{key:"componentWillReceiveProps",value:function(t){this.setState({src:t.src?t.src:t.defaultImage})}},{key:"render",value:function(){return c.a.createElement("picture",{className:p()({banner:"banner"===this.props.type},{default:this.props.src===this.props.defaultImage},{completed:this.props.completed}),style:"lg"===Object(h.b)()&&"banner"===this.props.type?{backgroundImage:"url(".concat(this.props.imageLarge,")")}:{}},this.props.imageLarge&&c.a.createElement("source",{media:"(min-width: 1081px)",srcSet:this.props.imageLarge}),this.props.imageMedium&&c.a.createElement("source",{media:"(min-width: 769px)",srcSet:this.props.imageMedium}),c.a.createElement("img",{className:"lazy lazy-image",src:this.props.defaultImage?this.props.defaultImage:d.g,"data-src":this.state.src,alt:this.state.alt,ref:this.Image}))}}]),e}(l.Component);e.a=m},601:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a(1),r=a.n(n);function s(t){return r.a.createElement("h1",{className:"no-data text-center"},t||"No Content Found")}},604:function(t,e,a){"use strict";var n=a(1),r=a.n(n),s=a(572);e.a=function(){return r.a.createElement(s.a,{height:260,width:260,speed:2,primaryColor:"#f3eeed",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"8",y:"19",rx:"0",ry:"0",width:"245",height:"183"}),r.a.createElement("rect",{x:"8",y:"213",rx:"0",ry:"0",width:"245",height:"15"}),r.a.createElement("rect",{x:"67",y:"237",rx:"0",ry:"0",width:"125",height:"15"}))}},606:function(t,e,a){"use strict";var n=a(1),r=a.n(n),s=a(590),o=a(586),i=a(127),l=a(604);function c(t){for(var e=[],a=0;a<i.c;a++)e.push(r.a.createElement(s.a,{xs:12,sm:6,md:4,lg:3,className:t.itemClass,key:"".concat(t.type,"_").concat(a)},r.a.createElement(l.a,null)));return r.a.createElement(o.a,null,e)}c.defaultProps={itemClass:"list-item",type:"loader",divClass:""},e.a=c},613:function(t,e,a){},614:function(t,e,a){"use strict";var n=a(69),r=a(70),s=a(73),o=a(71),i=a(8),l=a(72),c=a(1),d=a.n(c),u=a(587),p=a(597),h=a(588),m=a(589),g=(a(615),function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(o.a)(e).call(this,t))).handleOption=function(t){var e=t.target.dataset.id;a.setState({currentOption:e}),a.props.handleSelect(e)},a.state={dropdownOpen:!1,currentOption:0,allLabel:a.props.allLabel,data:{0:a.props.allLabel}},a.toggle=a.toggle.bind(Object(i.a)(a)),a.handleOption=a.handleOption.bind(Object(i.a)(a)),a}return Object(l.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.staticData[0]=this.state.allLabel,this.setState({data:this.props.staticData}),this.props.selected&&this.setState({currentOption:this.props.selected})}},{key:"componentWillReceiveProps",value:function(t){t.staticData[0]=t.allLabel,this.setState({data:t.staticData}),this.props.selected&&this.setState({currentOption:this.props.selected})}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){var t=this,e=this.state.data[this.state.currentOption]?this.state.data[this.state.currentOption]:this.state.data[0];return d.a.createElement("div",{className:"select-filter"},d.a.createElement(u.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,defaultValue:this.props.selected},d.a.createElement(p.a,null,e),d.a.createElement(h.a,null,Object.keys(this.state.data).map(function(e){return-1!==e.indexOf("header")?d.a.createElement(m.a,{header:!0,key:e,id:"".concat(Math.random().toFixed(2),"-option-").concat(e),value:e,"data-id":e},t.state.data[e]):d.a.createElement(m.a,{key:e,id:"".concat(Math.random().toFixed(2),"-option-").concat(e),value:e,onClick:t.handleOption,"data-id":e},t.state.data[e])}))))}}]),e}(d.a.Component));g.defaultProps={allLabel:"All"},e.a=g},615:function(t,e,a){},617:function(t,e,a){},618:function(t,e,a){"use strict";var n=a(69),r=a(70),s=a(73),o=a(71),i=a(72),l=a(1),c=a.n(l),d=a(598),u=a(584),p=(a(613),a(599)),h=a(127),m=a(600),g=a(181),f=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(r.a)(e,[{key:"createMarkup",value:function(t){return{__html:t}}},{key:"render",value:function(){var t=this.props,e=t.toggle,a=t.modal,n=t.fetching,r=t.type,s=t.data,o=t.fetched;t.PDFViewer;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{isOpen:a,toggle:e,className:this.props.className},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"page-title m-0 p-0"},s&&s.title),c.a.createElement("button",{type:"button",onClick:e,className:"close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement(u.a,null,"videos"===r&&c.a.createElement("div",{className:"video"},n?c.a.createElement("div",{className:"loader text-center"},Object(p.d)()):null,o&&c.a.createElement("video",{width:"640",height:"360",controls:!0,poster:s&&s.videoThumbnail?s.videoThumbnail:h.a,autoPlay:!0,controlsList:"nodownload"},c.a.createElement("source",{src:s&&s.videoUrl,type:"video/mp4"}),s&&s.videoSubtitle&&c.a.createElement("track",{src:s&&s.videoSubtitle,default:!0}),"Your browser does not support the video tag.")),"tools"===r&&c.a.createElement("div",{className:"popup-wrapper pdf"},n?c.a.createElement("div",{className:"loader text-center"},Object(p.d)()):null,o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{defaultImage:h.g,src:s.imageSmall}),c.a.createElement("div",{className:"description",dangerouslySetInnerHTML:this.createMarkup(s.description)}),c.a.createElement("div",{className:"col more-link"},c.a.createElement("a",{className:"btn btn-outline-secondary text-uppercase active",href:s.url,target:"_blank",rel:"noopener noreferrer"},g.gb)))))))}}]),e}(c.a.Component);e.a=f},619:function(t,e,a){"use strict";var n=a(69),r=a(70),s=a(73),o=a(71),i=a(8),l=a(72),c=a(1),d=a.n(c),u=a(573),p=a.n(u),h=a(599),m=a(614),g=a(182),f=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(o.a)(e).call(this,t))).brandList=a.brandList.bind(Object(i.a)(a)),a}return Object(l.a)(e,t),Object(r.a)(e,[{key:"brandList",value:function(){var t=p.a.parse(window.location.search).brand,e=t||0;if("load"!==this.context[0]&&"nodata"!==this.context[0]){var a={},n=localStorage.getItem("user"),r=Object.assign({},this.context),s=JSON.parse(n),o=s.role;if(0!==o.length){var i=o.map(function(t){return t.rid});if(-1!==i.indexOf("administrator")||-1!==i.indexOf("el_nyo_global_education_system_admin"))a=this.context;else s.brands.forEach(function(t){return a[t]=r[t]})}return d.a.createElement(m.a,{staticData:a,handleSelect:this.props.getBrandId,selected:e})}if("load"===this.context[0])return d.a.createElement("div",{className:"text-center"},Object(h.d)())}},{key:"render",value:function(){var t=this;return d.a.createElement(g.b,null,function(){return d.a.createElement("div",{className:"brand-categories"},t.brandList())})}}]),e}(c.Component);f.contextType=g.a,e.a=f},633:function(t,e,a){},654:function(t,e,a){"use strict";a.r(e);var n=a(574),r=a(69),s=a(70),o=a(73),i=a(71),l=a(8),c=a(72),d=a(1),u=a.n(d),p=a(99),h=a(7),m=a.n(h),g=a(573),f=a.n(g),b=a(586),v=a(87),O=a.n(v),y=a(74),E=Object(y.a)();var j={getToolsListing:function(t,e,a){return function(n){n({type:"FETCH_TOOLS_LISTING"}),O.a.get("/api/v1/tools?_format=json&limit=".concat(t,"&offset=").concat(e,"&brand=").concat(a),E).then(function(t){n({type:"FETCH_TOOLS_LISTING_SUCCESS",payload:t})}).catch(function(t){n({type:"FETCH_TOOLS_LISTING_FAILURE",payload:t.response}),n({type:"ADD_ERROR",payload:t})})}}},L=Object(y.a)();var T={getToolDetails:function(t){return function(e){e({type:"FETCH_TOOL_DETAILS"}),O.a.get("/api/v1/tool?_format=json&nid=".concat(t),L).then(function(t){e({type:"FETCH_TOOL_DETAILS_SUCCESS",payload:t})}).catch(function(t){e({type:"FETCH_TOOL_DETAILS_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t})})}}},w=a(590),k=a(591),S=a(593),N=a(594),I=a(182),D=a(618),_=(a(633),a(127)),x=a(600),C=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(i.a)(e).call(this,t))).state={modal:!1},a.createMarkup=a.createMarkup.bind(Object(l.a)(a)),a.getRenderResults=a.getRenderResults.bind(Object(l.a)(a)),a.toggle=a.toggle.bind(Object(l.a)(a)),a}return Object(c.a)(e,t),Object(s.a)(e,[{key:"createMarkup",value:function(t){return{__html:t}}},{key:"toolModal",value:function(t){this.props.getDetails(t.nid),this.setState({modal:!0})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"getRenderResults",value:function(){var t=this,e=this.props.items;if(e&&0!==e.length)return e.map(function(e,a){return u.a.createElement(w.a,{key:a,xs:12,sm:6,md:4,lg:3,className:"list-item text-center"},u.a.createElement(k.a,{className:"listing-block"},u.a.createElement("div",{className:"video-wrapper",onClick:function(){return t.toolModal(e)}},u.a.createElement(x.a,{defaultImage:_.g,src:e.imageSmall})),e.title&&u.a.createElement(S.a,{tag:"h2",dangerouslySetInnerHTML:t.createMarkup(e.title)}),0!==e.brand&&u.a.createElement(N.a,{tag:"h3",className:"brand-title"},t.context[e.brand])))})}},{key:"render",value:function(){var t=this,e=this.props,a=e.fetching,n=e.data,r=e.type,s=e.fetched;return u.a.createElement(I.b,null,function(){return u.a.createElement(b.a,{className:"section-content"},t.getRenderResults(),t.state.modal&&u.a.createElement(D.a,{fetching:a,fetched:s,toggle:t.toggle,modal:t.state.modal,type:r,data:n,className:"popup-wrapper"}))})}}]),e}(d.Component);C.contextType=I.a;var M=C,R=a(601),B=a(181),F=a(606),P=a(619),H=(a(617),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(i.a)(e).call(this,t))).state={data:[],show:!1,fetched:!1,brandId:0},a.getListData=a.getListData.bind(Object(l.a)(a)),a.getNextPageContent=a.getNextPageContent.bind(Object(l.a)(a)),a.getBrandId=a.getBrandId.bind(Object(l.a)(a)),a.getTool=a.getTool.bind(Object(l.a)(a)),a}return Object(c.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=f.a.parse(this.props.location.search).brand,e=t||this.state.brandId;t&&0!==t.length&&this.setState({brandId:t}),this.props.getToolsListing(_.d,0,e)}},{key:"componentWillReceiveProps",value:function(t){var e=t.fetchingToolsList,a=t.fetchedToolsList,r=t.toolsList,s=t.pager;a&&s&&this.state.fetched?(s.count>_.d?this.setState({show:!0}):this.setState({show:!1}),this.setState({data:[].concat(Object(n.a)(this.state.data),Object(n.a)(r.results)),is_disabled:!1,fetched:!1})):e&&this.setState({fetched:!0})}},{key:"getBrandId",value:function(t){this.setState({brandId:t,data:[]}),this.props.getToolsListing(_.d,0,t)}},{key:"getTool",value:function(t){this.props.getToolDetails(t)}},{key:"getListData",value:function(){var t=this.props,e=t.fetchingToolsList,a=t.fetchedToolsList,n=t.status,r=t.fetchingToolDetails,s=t.fetchedToolDetails,o=t.toolDetails,i=this.state.data;if(i&&0!==i.length)return u.a.createElement(M,{items:i,type:"tools",data:o&&o[0]?o[0]:{},fetching:r,fetched:s,getDetails:this.getTool});if(a){if(0===i.length&&204===n)return Object(R.a)()}else if(e)return u.a.createElement(F.a,null)}},{key:"getNextPageContent",value:function(){var t=this.state.data.length;this.setState({is_disabled:!0}),this.props.getToolsListing(_.d,t,this.state.brandId)}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"videos-listing pdf-listing"},u.a.createElement(b.a,null,u.a.createElement("div",{className:"col content-header"},u.a.createElement("h1",{className:"page-title"},this.props.sectionHeading))),u.a.createElement("div",{className:"brands"},u.a.createElement(P.a,{getBrandId:function(e){return t.getBrandId(e)},defaultBrand:this.state.brandId})),this.getListData(),u.a.createElement(b.a,null,u.a.createElement("div",{className:m()("col more-link",{"d-none":!this.state.show})},u.a.createElement("button",{className:m()("btn btn-outline-secondary text-uppercase",{disabled:this.state.is_disabled}),onClick:this.getNextPageContent},this.props.seeMoreLabel))))}}]),e}(d.Component));H.defaultProps={sectionHeading:B.fb,seeMoreLabel:B.R};var W=Object(p.b)(function(t){var e=t.toolDetails,a=e.fetchingToolDetails,n=e.fetchedToolDetails,r=e.toolDetails,s=e.toolDetailsError,o=t.toolsListing;return{fetchingToolsList:o.fetchingToolsList,fetchedToolsList:o.fetchedToolsList,toolsList:o.toolsList,toolsListError:o.toolsListError,pager:o.pager,status:o.status,fetchingToolDetails:a,fetchedToolDetails:n,toolDetails:r,toolDetailsError:s}},function(t){return{getToolsListing:function(e,a,n){return t(j.getToolsListing(e,a,n))},getToolDetails:function(e){return t(T.getToolDetails(e))}}})(H);e.default=W}}]);
//# sourceMappingURL=Tools.2244bd15.bundle.js.map