(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{599:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return c}),a.d(e,"d",function(){return o}),a.d(e,"f",function(){return l}),a.d(e,"e",function(){return u}),a.d(e,"c",function(){return p});var n=a(2),r=a(1),s=a.n(r);function i(t,e){var a=t,r=[];return e&&0!==e.length||(r=t),e&&e.length>0&&t&&t.length>0&&a.forEach(function(t){var a=null;Object.prototype.hasOwnProperty.call(t,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(t,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(t,"favourites")||Object.prototype.hasOwnProperty.call(t,"bookmarks")||Object.prototype.hasOwnProperty.call(t,"status")?a=t:e.forEach(function(e){(Object.prototype.hasOwnProperty.call(t,"nid")&&t.nid===e.nid||Object.prototype.hasOwnProperty.call(t,"tid")&&t.tid===e.tid)&&(a=Object(n.a)({},t,e))}),r.push(a)}),r}function c(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function o(){return s.a.createElement("span",{className:"inline-loading"},s.a.createElement("span",null,"."),s.a.createElement("span",null,"."),s.a.createElement("span",null,"."))}function l(t,e){var a=t;return a&&0===a.length?e:e&&0!==e.length?(e.forEach(function(e,n){t.forEach(function(t,n){e.nid===t.nid&&(a[n]=e)})}),a):void 0}function u(){var t=localStorage.getItem("user"),e=JSON.parse(t);e&&!e.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return"0 Bytes";var a=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function p(){return function(t){"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate().then(function(e){var a={msg:"Using ".concat(d(e.usage)," out of ").concat(d(e.quota)," bytes."),estimate:e};t({type:"FETCH_BROWSER_CACHE",payload:a})}):t({type:"FETCH_BROWSER_CACHE",payload:null})}}},600:function(t,e,a){"use strict";var n=a(69),r=a(70),s=a(73),i=a(71),c=a(72),o=a(1),l=a.n(o),u=a(127),d=a(7),p=a.n(d),h=a(599),f=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(i.a)(e).call(this,t))).state={src:t.src?t.src:t.defaultImage,alt:"",title:"",status:!1},a.Image=l.a.createRef(),a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentWillMount",value:function(){var t=this;if("IntersectionObserver"in window){var e=new IntersectionObserver(function(a,n){a.forEach(function(a){if(a.isIntersecting){var n=a.target;n.parentNode.classList.add("lazy-wrapper"),n.parentNode.classList.add("image-load"),n.src=t.state.src,n.parentNode.style.height=a.target.height+"px",n.classList.remove("lazy"),n.classList.add("lazy-item"),n.parentNode.classList.remove("lazy-wrapper"),n.parentNode.classList.remove("image-load"),n.parentNode.style.height=null,e.unobserve(n)}})});this.Img=e}}},{key:"componentDidMount",value:function(){this.Img.observe(this.Image.current)}},{key:"componentWillReceiveProps",value:function(t){this.setState({src:t.src?t.src:t.defaultImage})}},{key:"render",value:function(){return l.a.createElement("picture",{className:p()({banner:"banner"===this.props.type},{default:this.props.src===this.props.defaultImage},{completed:this.props.completed}),style:"lg"===Object(h.b)()&&"banner"===this.props.type?{backgroundImage:"url(".concat(this.props.imageLarge,")")}:{}},this.props.imageLarge&&l.a.createElement("source",{media:"(min-width: 1081px)",srcSet:this.props.imageLarge}),this.props.imageMedium&&l.a.createElement("source",{media:"(min-width: 769px)",srcSet:this.props.imageMedium}),l.a.createElement("img",{className:"lazy lazy-image",src:this.props.defaultImage?this.props.defaultImage:u.g,"data-src":this.state.src,alt:this.state.alt,ref:this.Image}))}}]),e}(o.Component);e.a=f},601:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a(1),r=a.n(n);function s(t){return r.a.createElement("h1",{className:"no-data text-center"},t||"No Content Found")}},603:function(t,e,a){"use strict";var n=a(1),r=a.n(n),s=a(572),i=function(t){return r.a.createElement(s.a,{speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb",className:"row"},r.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:t.width,height:t.height}))};i.defaultProps={height:0,width:0},e.a=i},604:function(t,e,a){"use strict";var n=a(1),r=a.n(n),s=a(572);e.a=function(){return r.a.createElement(s.a,{height:260,width:260,speed:2,primaryColor:"#f3eeed",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"8",y:"19",rx:"0",ry:"0",width:"245",height:"183"}),r.a.createElement("rect",{x:"8",y:"213",rx:"0",ry:"0",width:"245",height:"15"}),r.a.createElement("rect",{x:"67",y:"237",rx:"0",ry:"0",width:"125",height:"15"}))}},605:function(t,e,a){"use strict";var n=a(128),r=a(69),s=a(70),i=a(73),c=a(71),o=a(8),l=a(72),u=a(1),d=a.n(u),p=a(590),h=a(591),f=a(592),g=a(593),m=a(594),b=a(586),y=a(182),v=a(127),O=a(600),E=a(601),L=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).createMarkup=a.createMarkup.bind(Object(o.a)(a)),a.getRenderResults=a.getRenderResults.bind(Object(o.a)(a)),a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"createMarkup",value:function(t){return{__html:t}}},{key:"getRenderResults",value:function(){var t=this,e=this.props,a=e.items,r=e.type,s=e.showBrandTitle,i=Object(n.a)(e,["items","type","showBrandTitle"]),c="#";if("undefined"!==typeof r)switch(r){case"levels":c="/levels/";break;case"products":case"product":c="/product/";break;case"ingredients":case"ingredient":c="/ingredient/";break;case"news":c="/news/";break;default:c="#"}return a&&0!==a.length?a.map(function(e,a){return d.a.createElement(p.a,Object.assign({key:a,xs:12,sm:6,md:4,lg:3},i,{className:"list-item text-center"}),d.a.createElement(h.a,{className:"listing-block"},d.a.createElement(f.a,{href:"".concat(c).concat(e.nid?e.nid:e.tid)},d.a.createElement(O.a,{defaultImage:v.g,src:e.imageSmall})),d.a.createElement(g.a,{tag:"h2"},d.a.createElement(f.a,{href:"".concat(c).concat(e.nid?e.nid:e.tid),dangerouslySetInnerHTML:t.createMarkup(e.displayTitle&&e.displayTitle)})),s&&0!==e.brand&&d.a.createElement(m.a,{tag:"h3",className:"brand-title"},t.context[e.brand]),e.subTitle&&t.props.showSubTitle&&d.a.createElement(m.a,{className:"sub-title"},d.a.createElement(f.a,{href:"".concat(c).concat(e.categoryId||e.nid),dangerouslySetInnerHTML:t.createMarkup(e.subTitle)}))))}):Object(E.a)(this.props.noDataLabel)}},{key:"render",value:function(){var t=this;return d.a.createElement(y.b,null,function(){return d.a.createElement(b.a,{className:"section-content"},t.getRenderResults())})}}]),e}(u.Component);L.contextType=y.a,L.defaultProps={showBrandTitle:!0},e.a=L},606:function(t,e,a){"use strict";var n=a(1),r=a.n(n),s=a(590),i=a(586),c=a(127),o=a(604);function l(t){for(var e=[],a=0;a<c.c;a++)e.push(r.a.createElement(s.a,{xs:12,sm:6,md:4,lg:3,className:t.itemClass,key:"".concat(t.type,"_").concat(a)},r.a.createElement(o.a,null)));return r.a.createElement(i.a,null,e)}l.defaultProps={itemClass:"list-item",type:"loader",divClass:""},e.a=l},614:function(t,e,a){"use strict";var n=a(69),r=a(70),s=a(73),i=a(71),c=a(8),o=a(72),l=a(1),u=a.n(l),d=a(587),p=a(597),h=a(588),f=a(589),g=(a(615),function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(i.a)(e).call(this,t))).handleOption=function(t){var e=t.target.dataset.id;a.setState({currentOption:e}),a.props.handleSelect(e)},a.state={dropdownOpen:!1,currentOption:0,allLabel:a.props.allLabel,data:{0:a.props.allLabel}},a.toggle=a.toggle.bind(Object(c.a)(a)),a.handleOption=a.handleOption.bind(Object(c.a)(a)),a}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.staticData[0]=this.state.allLabel,this.setState({data:this.props.staticData}),this.props.selected&&this.setState({currentOption:this.props.selected})}},{key:"componentWillReceiveProps",value:function(t){t.staticData[0]=t.allLabel,this.setState({data:t.staticData}),this.props.selected&&this.setState({currentOption:this.props.selected})}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){var t=this,e=this.state.data[this.state.currentOption]?this.state.data[this.state.currentOption]:this.state.data[0];return u.a.createElement("div",{className:"select-filter"},u.a.createElement(d.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,defaultValue:this.props.selected},u.a.createElement(p.a,null,e),u.a.createElement(h.a,null,Object.keys(this.state.data).map(function(e){return-1!==e.indexOf("header")?u.a.createElement(f.a,{header:!0,key:e,id:"".concat(Math.random().toFixed(2),"-option-").concat(e),value:e,"data-id":e},t.state.data[e]):u.a.createElement(f.a,{key:e,id:"".concat(Math.random().toFixed(2),"-option-").concat(e),value:e,onClick:t.handleOption,"data-id":e},t.state.data[e])}))))}}]),e}(u.a.Component));g.defaultProps={allLabel:"All"},e.a=g},615:function(t,e,a){},619:function(t,e,a){"use strict";var n=a(69),r=a(70),s=a(73),i=a(71),c=a(8),o=a(72),l=a(1),u=a.n(l),d=a(573),p=a.n(d),h=a(599),f=a(614),g=a(182),m=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(i.a)(e).call(this,t))).brandList=a.brandList.bind(Object(c.a)(a)),a}return Object(o.a)(e,t),Object(r.a)(e,[{key:"brandList",value:function(){var t=p.a.parse(window.location.search).brand,e=t||0;if("load"!==this.context[0]&&"nodata"!==this.context[0]){var a={},n=localStorage.getItem("user"),r=Object.assign({},this.context),s=JSON.parse(n),i=s.role;if(0!==i.length){var c=i.map(function(t){return t.rid});if(-1!==c.indexOf("administrator")||-1!==c.indexOf("el_nyo_global_education_system_admin"))a=this.context;else s.brands.forEach(function(t){return a[t]=r[t]})}return u.a.createElement(f.a,{staticData:a,handleSelect:this.props.getBrandId,selected:e})}if("load"===this.context[0])return u.a.createElement("div",{className:"text-center"},Object(h.d)())}},{key:"render",value:function(){var t=this;return u.a.createElement(g.b,null,function(){return u.a.createElement("div",{className:"brand-categories"},t.brandList())})}}]),e}(l.Component);m.contextType=g.a,e.a=m},625:function(t,e,a){"use strict";var n=a(87),r=a.n(n),s=a(74),i=Object(s.a)();var c={getProductsListing:function(t,e,a){return function(n){n({type:"FETCH_PRODUCTS_LIST"}),r.a.get("/api/v1/products?_format=json&limit=".concat(t,"&offset=").concat(e,"&brand=").concat(a),i).then(function(t){n({type:"FETCH_PRODUCTS_LIST_SUCCESS",payload:t})}).catch(function(t){n({type:"FETCH_PRODUCTS_LIST_FAILURE",payload:t.response}),n({type:"ADD_ERROR",payload:t})})}}};e.a=c},626:function(t,e,a){"use strict";var n=a(87),r=a.n(n),s=a(74),i=Object(s.a)();var c={getFeauredCarousel:function(t){return function(e){e({type:"FETCH_FEATURED_CAROUSEL"}),r.a.get("/api/v1/featuredCarousel?_format=json&type=".concat(t),i).then(function(t){e({type:"FETCH_FEATURED_CAROUSEL_SUCCESS",payload:t})}).catch(function(t){e({type:"FETCH_FEATURED_CAROUSEL_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t})})}}};e.a=c},627:function(t,e,a){},649:function(t,e,a){"use strict";a.r(e);var n=a(574),r=a(69),s=a(70),i=a(73),c=a(71),o=a(8),l=a(72),u=a(1),d=a.n(u),p=a(99),h=a(7),f=a.n(h),g=a(573),m=a.n(g),b=a(586),y=a(625),v=a(626),O=a(605),E=a(601),L=a(127),j=a(600),w=a(181),C=a(606),S=a(619),k=a(603),I=(a(627),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).state={data:[],show:!1,fetched:!1,brandId:0},a.getListData=a.getListData.bind(Object(o.a)(a)),a.getNextPageContent=a.getNextPageContent.bind(Object(o.a)(a)),a.getBrandId=a.getBrandId.bind(Object(o.a)(a)),a.getSpotlight=a.getSpotlight.bind(Object(o.a)(a)),a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=m.a.parse(this.props.location.search).brand,e=t||this.state.brandId;t&&0!==t.length&&this.setState({brandId:t}),this.props.getProductsListing(L.d,0,e),this.props.getSpotlight("product")}},{key:"getSpotlight",value:function(){var t=this.props,e=t.fetchingFeaturedCarousel,a=t.fetchedFeaturedCarousel,n=t.featuredCarousel;if(a&&n&&0!==n.results.length){var r=n.results[0],s=r.imageLarge,i=r.imageMedium,c=r.imageSmall;return d.a.createElement(j.a,{defaultImage:L.a,src:c||L.a,imageLarge:s||L.a,imageMedium:i||L.a,type:"banner"})}if(e)return d.a.createElement(k.a,{height:1920,width:1080})}},{key:"componentWillReceiveProps",value:function(t){var e=t.fetchingProductsList,a=t.fetchedProductsList,r=t.productsList,s=t.pager;a&&s&&this.state.fetched?(s.count>L.d?this.setState({show:!0}):this.setState({show:!1}),this.setState({data:[].concat(Object(n.a)(this.state.data),Object(n.a)(r.results)),is_disabled:!1,fetched:!1})):e&&this.setState({fetched:!0})}},{key:"getBrandId",value:function(t){this.setState({brandId:t,data:[]}),this.props.getProductsListing(L.d,0,t)}},{key:"getListData",value:function(){var t=this.props,e=t.fetchingProductsList,a=t.fetchedProductsList,n=t.status,r=this.state.data;if(r&&0!==r.length)return d.a.createElement(O.a,{items:r,type:"products"});if(a){if(0===r.length&&204===n)return Object(E.a)()}else if(e)return d.a.createElement(C.a,null)}},{key:"getNextPageContent",value:function(){var t=this.state.data.length;this.setState({is_disabled:!0}),this.props.getProductsListing(L.d,t,this.state.brandId)}},{key:"render",value:function(){var t=this;return d.a.createElement("div",{className:"products-listing"},d.a.createElement("div",{className:"banner-spotlight"},this.getSpotlight()),d.a.createElement(b.a,null,d.a.createElement("div",{className:"col content-header"},d.a.createElement("h1",{className:"page-title"},this.props.sectionHeading))),d.a.createElement("div",{className:"brands"},d.a.createElement(S.a,{getBrandId:function(e){return t.getBrandId(e)},defaultBrand:this.state.brandId})),this.getListData(),d.a.createElement(b.a,null,d.a.createElement("div",{className:f()("col more-link",{"d-none":!this.state.show})},d.a.createElement("button",{className:f()("btn btn-outline-secondary text-uppercase",{disabled:this.state.is_disabled}),onClick:this.getNextPageContent},this.props.seeMoreLabel))))}}]),e}(u.Component));I.defaultProps={sectionHeading:w.H,seeMoreLabel:w.G};var P=Object(p.b)(function(t){var e=t.productsListing,a=e.fetchingProductsList,n=e.fetchedProductsList,r=e.productsList,s=e.productListError,i=e.pager,c=e.status,o=t.featuredCarousel;return{fetchingProductsList:a,fetchedProductsList:n,productsList:r,productListError:s,pager:i,status:c,fetchingFeaturedCarousel:o.fetchingFeaturedCarousel,fetchedFeaturedCarousel:o.fetchedFeaturedCarousel,featuredCarousel:o.featuredCarousel,featuredCarouselError:o.featuredCarouselError}},function(t){return{getProductsListing:function(e,a,n){return t(y.a.getProductsListing(e,a,n))},getSpotlight:function(e){return t(v.a.getFeauredCarousel(e))}}})(I);e.default=P}}]);
//# sourceMappingURL=ProductsListing.88b7d633.bundle.js.map