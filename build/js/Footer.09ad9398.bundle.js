(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{517:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(487),i=function(e){return r.a.createElement(o.a,{height:22,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"110",y:"7",rx:"0",ry:"0",width:"180",height:"7"}))};i.defaultProps={height:0,width:0},t.a=i},529:function(e,t,a){"use strict";var n=a(80),r=a.n(n),o=a(68),i=Object(o.a)();var c={getGlobalSupportEmail:function(){return function(e){e({type:"FETCH_GLOBAL_SUPPORT_EMAIL"}),r.a.get("/api/v1/globalSupportEmail?_format=json").then(function(t){e({type:"FETCH_GLOBAL_SUPPORT_EMAIL_SUCCESS",payload:t.data})}).catch(function(t){e({type:"FETCH_GLOBAL_SUPPORT_EMAIL_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t})})}},getUserSupportEmail:function(){return function(e){e({type:"FETCH_USER_SUPPORT_EMAIL"}),r.a.get("/api/v1/supportEmail?_format=json",i).then(function(t){e({type:"FETCH_USER_SUPPORT_EMAIL_SUCCESS",payload:t.data})}).catch(function(t){e({type:"FETCH_USER_SUPPORT_EMAIL_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t})})}}};t.a=c},554:function(e,t,a){},565:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(63),i=a(64),c=a(66),p=a(65),u=a(67),l=a(79),s=a(87),d=a(48),E=a.n(d),h=a(152),f=a(80),m=a.n(f),y=a(68),O=Object(y.a)();var _={getFooter:function(){return function(e){e({type:"FETCH_FOOTER_MENU"}),m.a.get("/api/v1/footerMenu?_format=json",O).then(function(t){e({type:"FETCH_FOOTER_MENU_SUCCESS",payload:t.data})}).catch(function(t){e({type:"FETCH_FOOTER_MENU_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t})})}}},g=a(517),b=(a(554),a(150)),S=a(529),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(p.a)(t).call(this))).handleOrientation=function(){var t=Object(l.a)(Object(l.a)(e));window.addEventListener("resize",function(){t.setState({width:window.innerWidth})})},e.state={show:!1,width:window.innerWidth,token:null},e.renderFooter=e.renderFooter.bind(Object(l.a)(Object(l.a)(e))),e.getMenuitems=e.getMenuitems.bind(Object(l.a)(Object(l.a)(e))),e.handleOrientation=e.handleOrientation.bind(Object(l.a)(Object(l.a)(e))),e.renderLoader=e.renderLoader.bind(Object(l.a)(Object(l.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getFooter(),this.props.getUserSupportEmail(),this.handleOrientation(),this.setState({token:E.a.load("access_token")})}},{key:"renderFooter",value:function(){var e=this.props,t=e.fetchedFooter,a=e.footer;if(t&&0!==a.length&&a.privacyMenu&&0!==a.privacyMenu.length)return r.a.createElement("div",{className:"footer"},this.getMenuitems())}},{key:"getMenuitems",value:function(){return r.a.createElement("ul",null,this.props.footer.privacyMenu.map(function(e,t){var a="/";switch(e.content){case"tnc":a="/terms-and-conditions";break;case"privacypolicy":a="/privacy-policy";break;default:a=e.URL&&""!==e.URL?e.URL:"/"}return r.a.createElement("li",{key:t,className:"nav-item"},r.a.createElement("a",{href:a,"data-tid":e.targetId},e.name))}),this.props.supportEmail&&""!==this.props.supportEmail&&r.a.createElement("li",{key:"need_help",className:"nav-item"},r.a.createElement("a",{href:"mailto:".concat(this.props.supportEmail)},b.t)),this.state.token&&void 0!==this.state.token&&this.state.width>768&&r.a.createElement("li",{key:"logout",className:"nav-item"},r.a.createElement(h.b,{to:"/logout"},b.q)))}},{key:"renderLoader",value:function(){return r.a.createElement(g.a,{height:10,width:200})}},{key:"render",value:function(){var e=this.props,t=e.fetchingFooter,a=e.fetchingSupportEmail;return r.a.createElement(r.a.Fragment,null,t||a?this.renderLoader():this.renderFooter(),r.a.createElement("p",{className:"copyright-text"},"\xa9",b.c))}}]),t}(n.Component);var w=Object(s.b)(function(e){var t=e.footer,a=t.fetchingFooter,n=t.fetchedFooter,r=t.error,o=t.footer,i=e.support;return{fetchingFooter:a,fetchedFooter:n,error:r,footer:o,fetchingSupportEmail:i.fetchingSupportEmail,fetchedSupportEmail:i.fetchedSupportEmail,supportError:i.supportError,supportEmail:i.supportEmail}},function(e){return{getFooter:function(){return e(_.getFooter())},getUserSupportEmail:function(){return e(S.a.getUserSupportEmail())},getGlobalSupportEmail:function(){return e(S.a.getGlobalSupportEmail())}}})(v);t.default=function(e){return"/login"===window.location.pathname||"/reset-password"===window.location.pathname||"/confirm-password"===window.location.pathname?null:r.a.createElement("footer",{className:"footer-wrapper col-12"},r.a.createElement(w,e))}}}]);
//# sourceMappingURL=Footer.09ad9398.bundle.js.map