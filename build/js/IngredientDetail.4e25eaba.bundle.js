(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{514:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return l}),a.d(t,"e",function(){return o}),a.d(t,"d",function(){return u});var n=a(2),r=a(1),i=a.n(r);function c(e,t){var a=e,r=[];return t&&0!==t.length||(r=e),t&&t.length>0&&e&&e.length>0&&a.forEach(function(e){var a=null;Object.prototype.hasOwnProperty.call(e,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(e,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(e,"favourites")||Object.prototype.hasOwnProperty.call(e,"bookmarks")||Object.prototype.hasOwnProperty.call(e,"status")?a=e:t.forEach(function(t){(Object.prototype.hasOwnProperty.call(e,"nid")&&e.nid===t.nid||Object.prototype.hasOwnProperty.call(e,"tid")&&e.tid===t.tid)&&(a=Object(n.a)({},e,t))}),r.push(a)}),r}function s(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function l(){return i.a.createElement("span",{className:"inline-loading"},i.a.createElement("span",null,"."),i.a.createElement("span",null,"."),i.a.createElement("span",null,"."))}function o(e,t){var a=e;return a&&0===a.length?t:t&&0!==t.length?(t.forEach(function(t,n){e.forEach(function(e,n){t.nid===e.nid&&(a[n]=t)})}),a):void 0}function u(){var e=localStorage.getItem("user"),t=JSON.parse(e);t&&!t.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}},515:function(e,t,a){"use strict";var n=a(64),r=a(65),i=a(67),c=a(66),s=a(68),l=a(1),o=a.n(l),u=a(149),d=a(7),m=a.n(d),p=a(514),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={src:e.src?e.src:e.defaultImage,alt:"",title:"",status:!1},a.Image=o.a.createRef(),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;if("IntersectionObserver"in window){var t=new IntersectionObserver(function(a,n){a.forEach(function(a){if(a.isIntersecting){var n=a.target;n.parentNode.classList.add("lazy-wrapper"),n.parentNode.classList.add("image-load"),n.src=e.state.src,n.parentNode.style.height=a.target.height+"px",n.classList.remove("lazy"),n.classList.add("lazy-item"),n.parentNode.classList.remove("lazy-wrapper"),n.parentNode.classList.remove("image-load"),n.parentNode.style.height=null,t.unobserve(n)}})});this.Img=t}}},{key:"componentDidMount",value:function(){this.Img.observe(this.Image.current)}},{key:"componentWillReceiveProps",value:function(e){this.setState({src:e.src?e.src:e.defaultImage})}},{key:"render",value:function(){return o.a.createElement("picture",{className:m()({banner:"banner"===this.props.type}),style:"lg"===Object(p.b)()&&"banner"===this.props.type?{backgroundImage:"url(".concat(this.props.imageLarge,")")}:{}},this.props.imageLarge&&o.a.createElement("source",{media:"(min-width: 1081px)",srcSet:this.props.imageLarge}),this.props.imageMedium&&o.a.createElement("source",{media:"(min-width: 769px)",srcSet:this.props.imageMedium}),o.a.createElement("img",{className:"lazy lazy-image",src:this.props.defaultImage?this.props.defaultImage:u.f,"data-src":this.state.src,alt:this.state.alt,ref:this.Image}))}}]),t}(l.Component);t.a=h},516:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(1),r=a.n(n);function i(e){return r.a.createElement("h1",{className:"no-data text-center"},e||"No Content Found")}},518:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(487),c=function(e){return r.a.createElement(i.a,{speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb",className:"row"},r.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:e.width,height:e.height}))};c.defaultProps={height:0,width:0},t.a=c},519:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(487);t.a=function(){return r.a.createElement(i.a,{height:260,width:260,speed:2,primaryColor:"#f3eeed",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"8",y:"19",rx:"0",ry:"0",width:"245",height:"183"}),r.a.createElement("rect",{x:"8",y:"213",rx:"0",ry:"0",width:"245",height:"15"}),r.a.createElement("rect",{x:"67",y:"237",rx:"0",ry:"0",width:"125",height:"15"}))}},520:function(e,t,a){"use strict";var n=a(109),r=a(64),i=a(65),c=a(67),s=a(66),l=a(68),o=a(80),u=a(1),d=a.n(u),m=a(502),p=a(503),h=a(504),g=a(505),f=a(506),y=a(501),b=a(151),E=a(149),v=a(515),O=a(516),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).createMarkup=a.createMarkup.bind(Object(o.a)(Object(o.a)(a))),a.getRenderResults=a.getRenderResults.bind(Object(o.a)(Object(o.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"getRenderResults",value:function(){var e=this,t=this.props,a=t.items,r=t.type,i=t.showBrandTitle,c=Object(n.a)(t,["items","type","showBrandTitle"]),s="#";if("undefined"!==typeof r)switch(r){case"levels":s="/levels/";break;case"products":case"product":s="/product/";break;case"ingredients":case"ingredient":s="/ingredient/";break;case"news":s="/news/";break;default:s="#"}return a&&0!==a.length?a.map(function(t,a){return d.a.createElement(m.a,Object.assign({key:a,xs:12,sm:6,md:4,lg:3},c,{className:"list-item text-center"}),d.a.createElement(p.a,{className:"listing-block"},d.a.createElement(h.a,{href:"".concat(s).concat(t.nid?t.nid:t.tid)},d.a.createElement(v.a,{defaultImage:E.f,src:t.imageSmall})),d.a.createElement(g.a,{tag:"h2"},d.a.createElement(h.a,{href:"".concat(s).concat(t.nid?t.nid:t.tid),dangerouslySetInnerHTML:e.createMarkup(t.displayTitle&&t.displayTitle)})),i&&0!==t.brand&&d.a.createElement(f.a,{tag:"h3",className:"brand-title"},e.context[t.brand]),t.subTitle&&e.props.showSubTitle&&d.a.createElement(f.a,{className:"sub-title"},d.a.createElement(h.a,{href:"".concat(s).concat(t.categoryId||t.nid),dangerouslySetInnerHTML:e.createMarkup(t.subTitle)}))))}):Object(O.a)(this.props.noDataLabel)}},{key:"render",value:function(){var e=this;return d.a.createElement(b.b,null,function(){return d.a.createElement(y.a,{className:"section-content"},e.getRenderResults())})}}]),t}(u.Component);w.contextType=b.a,w.defaultProps={showBrandTitle:!0},t.a=w},521:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(502),c=a(501),s=a(149),l=a(519);function o(e){for(var t=[],a=0;a<s.c;a++)t.push(r.a.createElement(i.a,{xs:12,sm:6,md:4,lg:3,className:e.itemClass,key:"".concat(e.type,"_").concat(a)},r.a.createElement(l.a,null)));return r.a.createElement(c.a,null,t)}o.defaultProps={itemClass:"list-item",type:"loader",divClass:""},t.a=o},522:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(487),c=function(e){return r.a.createElement(i.a,{height:200,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"170",y:"20",rx:"0",ry:"0",width:"70",height:"8"}),r.a.createElement("rect",{x:"0",y:"70",rx:"2",ry:"2",width:"300",height:"3"}),r.a.createElement("rect",{x:"0",y:"50",rx:"2",ry:"2",width:"250",height:"3"}),r.a.createElement("rect",{x:"0",y:"90",rx:"2",ry:"2",width:"200",height:"3"}))};c.defaultProps={height:0,width:0},t.a=c},542:function(e,t,a){},544:function(e,t,a){"use strict";var n=a(64),r=a(65),i=a(67),c=a(66),s=a(68),l=a(80),o=a(1),u=a.n(o),d=a(87),m=a(48),p=a.n(m),h=a(69),g=Object(h.a)();var f={getKeynotes:function(e,t){var a=t.map(function(e){return"&nid[]=".concat(e)}).toString();return function(t){t({type:"FETCH_KEYNOTES"}),p.a.get("/api/v1/keyNotes?_format=json&type=".concat(e).concat(a),g).then(function(e){t({type:"FETCH_KEYNOTES_SUCCESS",payload:e})}).catch(function(e){t({type:"FETCH_KEYNOTES_FAILURE",payload:e.response}),t({type:"ADD_ERROR",payload:e})})}}},y=a(521),b=a(520),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).keyNotesTemplate=a.keyNotesTemplate.bind(Object(l.a)(Object(l.a)(a))),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getKeynotes(this.props.type,this.props.items)}},{key:"keyNotesTemplate",value:function(){var e=this.props,t=e.fetchingKeynotes,a=e.fetchedKeynotes,n=e.keynotes;return t?u.a.createElement(y.a,null):a&&n&&0!==n.results.length?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"keynotes info"},u.a.createElement("h2",{className:"section-title"},this.props.header),u.a.createElement(b.a,{items:n.results,type:this.props.type,showSubTitle:this.props.showSubTitle}))):void 0}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.keyNotesTemplate())}}]),t}(o.Component);var v=Object(d.b)(function(e){var t=e.keynotes;return{fetchingKeynotes:t.fetchingKeynotes,fetchedKeynotes:t.fetchedKeynotes,keynotes:t.keynotes,keynotesError:t.keynotesError}},function(e){return{getKeynotes:function(t,a){return e(f.getKeynotes(t,a))}}})(E);t.a=v},572:function(e,t,a){"use strict";a.r(t);var n=a(64),r=a(65),i=a(67),c=a(66),s=a(68),l=a(80),o=a(1),u=a.n(o),d=a(87),m=a(501),p=a(152),h=a(48),g=a.n(h),f=a(69),y=Object(f.a)();var b={getIngredientDetails:function(e){return function(t){t({type:"FETCH_INGREDIENT_DETAIL"}),g.a.get("/api/v1/ingredient?_format=json&nid=".concat(e),y).then(function(e){t({type:"FETCH_INGREDIENT_DETAIL_SUCCESS",payload:e})}).catch(function(e){t({type:"FETCH_INGREDIENT_DETAIL_FAILURE",payload:e.response}),t({type:"ADD_ERROR",payload:e})})}}},E=a(515),v=a(518),O=a(522),w=a(149),I=a(544),j=a(150),k=(a(542),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).getIngredientDetailsTemplate=a.getIngredientDetailsTemplate.bind(Object(l.a)(Object(l.a)(a))),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.nid;this.props.getIngredientDetails(e)}},{key:"getIngredientDetailsTemplate",value:function(){var e=this.props,t=e.fetchingIngredientDetail,a=e.fetchedIngredientDetail,n=e.ingredientDetail;if(a){if(n&&0!==n.length){var r=n[0];return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,null,r.imageLarge&&u.a.createElement(E.a,{defaultImage:w.a,src:r.imageSmall?r.imageSmall:w.a,imageLarge:r.imageLarge?r.imageLarge:w.a,imageMedium:r.imageMedium?r.imageMedium:w.a,type:"banner"})),u.a.createElement(m.a,null,u.a.createElement("article",{className:"ingredient text-center"},u.a.createElement("div",{className:"information"},u.a.createElement("p",{className:"sub-heading brand-title"},u.a.createElement(p.b,{to:"/ingredients"},this.props.pageTitle)),r.displayTitle&&u.a.createElement("h2",{className:"page-title"},r.displayTitle)),r.subTitle&&u.a.createElement("div",{className:"summary info"},u.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:r.subTitle}})),r.story&&u.a.createElement("div",{className:"story info"},u.a.createElement("h2",{className:"section-title"},this.props.storyLabel),u.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:r.story}})),0!==r.products.length&&u.a.createElement(I.a,{type:"product",items:r.products,header:this.props.featuredLabel}))))}}else if(t)return u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{height:1920,width:1080}),u.a.createElement(O.a,null))}},{key:"render",value:function(){return u.a.createElement("div",{className:"ingredient-details"},this.getIngredientDetailsTemplate())}}]),t}(o.Component));k.defaultProps={pageTitle:j.k,storyLabel:j.m,featuredLabel:j.j};var N=Object(d.b)(function(e){var t=e.ingredientDetails;return{fetchingIngredientDetail:t.fetchingIngredientDetail,fetchedIngredientDetail:t.fetchedIngredientDetail,ingredientDetail:t.ingredientDetail,ingredientDetailsError:t.ingredientDetailsError}},function(e){return{getIngredientDetails:function(t){return e(b.getIngredientDetails(t))}}})(k);t.default=N}}]);
//# sourceMappingURL=IngredientDetail.4e25eaba.bundle.js.map