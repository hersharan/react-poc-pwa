(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{514:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return u});var a=n(2),r=n(1),o=n.n(r);function i(e,t){var n=e,r=[];return t&&0!==t.length||(r=e),t&&t.length>0&&e&&e.length>0&&n.forEach(function(e){var n=null;Object.prototype.hasOwnProperty.call(e,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(e,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(e,"favourites")||Object.prototype.hasOwnProperty.call(e,"bookmarks")||Object.prototype.hasOwnProperty.call(e,"status")?n=e:t.forEach(function(t){(Object.prototype.hasOwnProperty.call(e,"nid")&&e.nid===t.nid||Object.prototype.hasOwnProperty.call(e,"tid")&&e.tid===t.tid)&&(n=Object(a.a)({},e,t))}),r.push(n)}),r}function c(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function s(){return o.a.createElement("span",{className:"inline-loading"},o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))}function l(e,t){var n=e;return n&&0===n.length?t:t&&0!==t.length?(t.forEach(function(t,a){e.forEach(function(e,a){t.nid===e.nid&&(n[a]=t)})}),n):void 0}function u(){var e=localStorage.getItem("user"),t=JSON.parse(e);t&&!t.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}},523:function(e,t,n){},524:function(e,t,n){e.exports=n.p+"images/Logo.31e15bfe.svg"},525:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=(n(523),n(524)),i=n.n(o);t.a=function(){return r.a.createElement("header",{className:"col-12 top-header"},r.a.createElement("div",{className:"logo text-center"},r.a.createElement("a",{href:"/login"},r.a.createElement("img",{src:i.a,alt:"Aramis and Designer Fragrances"}))))}},526:function(e,t,n){"use strict";var a=n(48),r=n.n(a),o=n(69);var i={getLoginBackground:function(){return function(e){e({type:"FETCH_LOGIN_BACKGROUND"}),r.a.get("/api/v1/loginBackgroundImage?_format=json").then(function(t){e({type:"FETCH_LOGIN_BACKGROUND_SUCCESS",payload:t.data})}).catch(function(t){e({type:"FETCH_LOGIN_BACKGROUND_FAILURE",payload:t}),e({type:"ADD_ERROR",payload:t})})}},submitLogin:function(e,t){return Object(o.d)(),function(n){n({type:"USER_LOGIN"}),r.a.post("/api/v1/login?_format=json",{username:e,password:t}).then(function(e){Object(o.b)(e.data),n({type:"USER_LOGIN_SUCCESS",payload:e.data})}).catch(function(e){n({type:"USER_LOGIN_FAILURE",payload:e.response}),n({type:"ADD_ERROR",payload:e})})}}};t.a=i},528:function(e,t,n){},536:function(e,t,n){"use strict";var a=n(48),r=n.n(a);var o={submitEmailForReset:function(e){return function(t){t({type:"RESET_EMAIL"}),r.a.post("/api/v1/user/lost-password?_format=json",{mail:e}).then(function(e){t({type:"RESET_EMAIL_SUCCESS",payload:e.data})}).catch(function(e){t({type:"RESET_EMAIL_FAILURE",payload:e.response}),t({type:"ADD_ERROR",payload:e})})}},submitPasswordForReset:function(e,t,n){return function(a){a({type:"CHANGE_PASSWORD"}),r.a.post("/api/v1/user/lost-password-reset?_format=json",{mail:e,tempPass:t,newPass:n}).then(function(e){a({type:"CHANGE_PASSWORD_SUCCESS",payload:e.data})}).catch(function(e){a({type:"CHANGE_PASSWORD_FAILURE",payload:e.response}),a({type:"ADD_ERROR",payload:e})})}}};t.a=o},569:function(e,t,n){"use strict";n.r(t);var a=n(64),r=n(65),o=n(67),i=n(66),c=n(68),s=n(1),l=n.n(s),u=n(87),d=n(501),m=n(80),p=n(490),f=n(7),g=n.n(f),E=n(152),h=n(150),b=n(514),y=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={email:"",show:!1},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(Object(m.a)(n))),n.loadingRender=n.loadingRender.bind(Object(m.a)(Object(m.a)(n))),n.checkStatus=n.checkStatus.bind(Object(m.a)(Object(m.a)(n))),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleSubmit",value:function(e){this.setState({email:e.email}),e.email&&""!==e.email&&this.props.onSubmitForm(e.email)}},{key:"loadingRender",value:function(){return l.a.createElement("div",{className:"text-center"},Object(b.c)())}},{key:"checkStatus",value:function(){var e=this.props,t=e.fetching,n=e.fetched,a=e.error;return t||n&&null===a?l.a.createElement("div",{className:"login-status"},this.loadingRender()):n&&a&&0!==a.length?l.a.createElement("div",{className:"text-center"},l.a.createElement("p",null,a.data)):void 0}},{key:"render",value:function(){var e=this,t=this.state.email;return l.a.createElement(p.d,{initialValues:{email:t},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(t,n){var a=n.setSubmitting;setTimeout(function(){a(!1),e.handleSubmit(t)},400)},enableReinitialize:!0},function(t){var n=t.isSubmitting;return l.a.createElement(p.c,{className:g()({disabled:e.props.fetching||e.props.fetched&&null===e.props.ErrorMessage})},e.checkStatus(),l.a.createElement("div",{className:"extended"},l.a.createElement(E.b,{className:"forget-password mb-4",to:"/login"},h.a)),l.a.createElement(p.b,{type:"text",name:"email",placeholder:"Email Address"}),l.a.createElement(p.a,{name:"email",component:"div",className:"error-msg"}),l.a.createElement("div",{className:"more-link"},l.a.createElement("button",{type:"submit",className:g()("btn btn-outline-secondary text-uppercase",{disabled:n})},h.D)),l.a.createElement("div",{className:"extended"},l.a.createElement(E.b,{className:"forget-password underline",to:"/confirm-password"},h.f)))})}}]),t}(s.Component),R=n(536),v=n(526),O=(n(528),n(525)),S=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={background:""},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getLoginBackground()}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.loginBackground.backGroundImage&&this.setState({background:e.loginBackground.backGroundImage}),e.fetchedEmailReset&&e.emailReset&&e.emailReset.message&&""!==e.emailReset.message&&(document.location="/confirm-password")}},{key:"render",value:function(){var e=this.props,t=e.fetchingEmailReset,n=e.fetchedEmailReset,a=e.resetError,r=e.emailReset;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"user-login-wrapper col-12",style:{backgroundImage:"url("+this.state.background+")"}},l.a.createElement(O.a,null),l.a.createElement("div",{className:"user-login"},l.a.createElement(y,{onSubmitForm:this.props.submitEmailForReset,fetching:t,fetched:n,error:a,emailReset:r}))))}}]),t}(s.Component);var k=Object(u.b)(function(e){var t=e.resetForget,n=t.resetError,a=t.emailReset,r=t.fetchingEmailReset,o=t.fetchedEmailReset,i=e.userLogin;return{resetError:n,emailReset:a,fetchingEmailReset:r,fetchedEmailReset:o,fetchingLoginBackground:i.fetchingLoginBackground,fetchedLoginBackground:i.fetchedLoginBackground,userLoginError:i.userLoginError,loginBackground:i.loginBackground}},function(e){return{submitEmailForReset:function(t){return e(R.a.submitEmailForReset(t))},getLoginBackground:function(){return e(v.a.getLoginBackground())}}})(S);t.default=k}}]);
//# sourceMappingURL=ResetPassword.9c667b55.bundle.js.map