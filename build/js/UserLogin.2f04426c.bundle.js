(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{600:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return c}),a.d(t,"e",function(){return l}),a.d(t,"d",function(){return u});var n=a(2),r=a(1),o=a.n(r);function i(e,t){var a=e,r=[];return t&&0!==t.length||(r=e),t&&t.length>0&&e&&e.length>0&&a.forEach(function(e){var a=null;Object.prototype.hasOwnProperty.call(e,"userBookmarkStatus")||Object.prototype.hasOwnProperty.call(e,"userFavouriteStatus")||Object.prototype.hasOwnProperty.call(e,"favourites")||Object.prototype.hasOwnProperty.call(e,"bookmarks")||Object.prototype.hasOwnProperty.call(e,"status")?a=e:t.forEach(function(t){(Object.prototype.hasOwnProperty.call(e,"nid")&&e.nid===t.nid||Object.prototype.hasOwnProperty.call(e,"tid")&&e.tid===t.tid)&&(a=Object(n.a)({},e,t))}),r.push(a)}),r}function s(){return window.innerWidth<769?"xs":window.innerWidth<992&&window.innerWidth>768?"sm":window.innerWidth<1199&&window.innerWidth>991?"md":"lg"}function c(){return o.a.createElement("span",{className:"inline-loading"},o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))}function l(e,t){var a=e;return a&&0===a.length?t:t&&0!==t.length?(t.forEach(function(t,n){e.forEach(function(e,n){t.nid===e.nid&&(a[n]=t)})}),a):void 0}function u(){var e=localStorage.getItem("user"),t=JSON.parse(e);t&&!t.policyFlag&&document.getElementById("toolbar-administration")&&document.getElementById("toolbar-administration").remove()}},608:function(e,t,a){},609:function(e,t,a){e.exports=a.p+"images/Logo.31e15bfe.svg"},610:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=(a(608),a(609)),i=a.n(o);t.a=function(){return r.a.createElement("header",{className:"col-12 top-header"},r.a.createElement("div",{className:"logo text-center"},r.a.createElement("a",{href:"/login"},r.a.createElement("img",{src:i.a,alt:"Aramis and Designer Fragrances"}))))}},612:function(e,t,a){},613:function(e,t,a){"use strict";var n=a(87),r=a.n(n),o=a(74);var i={getLoginBackground:function(){return function(e){e({type:"FETCH_LOGIN_BACKGROUND"}),r.a.get("/api/v1/loginBackgroundImage?_format=json").then(function(t){e({type:"FETCH_LOGIN_BACKGROUND_SUCCESS",payload:t.data})}).catch(function(t){e({type:"FETCH_LOGIN_BACKGROUND_FAILURE",payload:t}),e({type:"ADD_ERROR",payload:t})})}},submitLogin:function(e,t){return Object(o.d)(),function(a){a({type:"USER_LOGIN"}),r.a.post("/api/v1/login?_format=json",{username:e,password:t}).then(function(e){Object(o.b)(e.data),a({type:"USER_LOGIN_SUCCESS",payload:e.data})}).catch(function(e){a({type:"USER_LOGIN_FAILURE",payload:e.response}),a({type:"ADD_ERROR",payload:e})})}}};t.a=i},614:function(e,t,a){},617:function(e,t,a){"use strict";var n=a(87),r=a.n(n),o=a(74),i=Object(o.a)();var s={getGlobalSupportEmail:function(){return function(e){e({type:"FETCH_GLOBAL_SUPPORT_EMAIL"}),r.a.get("/api/v1/globalSupportEmail?_format=json").then(function(t){e({type:"FETCH_GLOBAL_SUPPORT_EMAIL_SUCCESS",payload:t.data})}).catch(function(t){e({type:"FETCH_GLOBAL_SUPPORT_EMAIL_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t})})}},getUserSupportEmail:function(){return function(e){e({type:"FETCH_USER_SUPPORT_EMAIL"}),r.a.get("/api/v1/supportEmail?_format=json",i).then(function(t){e({type:"FETCH_USER_SUPPORT_EMAIL_SUCCESS",payload:t.data})}).catch(function(t){e({type:"FETCH_USER_SUPPORT_EMAIL_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t})})}}};t.a=s},621:function(e,t,a){"use strict";var n=a(87),r=a.n(n),o=a(54),i=a.n(o),s=a(74),c=a(127);var l={submitLogout:function(){var e=i.a.load("access_token"),t=e&&e.accessToken;return localStorage.clear(),function(e){e({type:"USER_LOGOUT"}),r.a.get("/session/token").then(function(a){r.a.post("/api/v1/logout?_format=json",{token:t},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t),"X-CSRF-Token":a.data}}).then(function(t){e({type:"USER_LOGOUT_SUCCESS",payload:t.data}),200===t.status&&(Object(s.d)(),document.location="/login")}).catch(function(t){e({type:"USER_LOGOUT_FAILURE",payload:t.response}),e({type:"ADD_ERROR",payload:t}),document.location=c.b})})}}};t.a=l},653:function(e,t,a){"use strict";a.r(t);var n=a(69),r=a(70),o=a(73),i=a(71),s=a(72),c=a(1),l=a.n(c),u=a(99),d=a(54),p=a.n(d),g=a(587),m=a(573),h=a.n(m),f=a(613),E=a(8),b=a(575),y=a(183),S=a(583),v=a(584),O=a(7),L=a.n(O),U=a(576),_=a.n(U),k=a(600),R=a(181),F=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleLoginSubmit=function(e){if(a.setState({loginData:e}),a.state.remember){var t=_.a.AES.encrypt(JSON.stringify(e),"secret key 123");p.a.save("remember",t.toString(),{path:"/"})}else p.a.remove("remember",{path:"/"});a.props.login(e.email,e.password)},a.toggleCheckbox=function(e){var t=document.getElementById(e.target.id).checked;a.setState({remember:t})},a.state={show:!0,loginData:{},remember:!1,email:"",password:""},a.handleLoginSubmit=a.handleLoginSubmit.bind(Object(E.a)(a)),a.toggleCheckbox=a.toggleCheckbox.bind(Object(E.a)(a)),a.loadingRender=a.loadingRender.bind(Object(E.a)(a)),a.getNeedHelp=a.getNeedHelp.bind(Object(E.a)(a)),a.loginStatus=a.loginStatus.bind(Object(E.a)(a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=p.a.load("remember");if(e){var t=_.a.AES.decrypt(e,"secret key 123"),a=JSON.parse(t.toString(_.a.enc.Utf8));this.setState({email:a.email,password:a.password,remember:!0})}}},{key:"loadingRender",value:function(){return l.a.createElement("div",{className:"text-center"},Object(k.c)())}},{key:"loginStatus",value:function(){var e=this.props,t=e.fetching,a=e.fetched,n=e.userLoginError;return t||a&&null===n?l.a.createElement("div",{className:"login-status"},this.loadingRender()):a&&n&&0!==n.length?l.a.createElement("div",{className:"text-center"},l.a.createElement("p",null,n.data)):void 0}},{key:"getNeedHelp",value:function(){var e=this.props,t=e.fetchingSupportEmail,a=e.fetchedSupportEmail,n=e.supportEmail;return t?l.a.createElement("div",{className:"need-help"},this.loadingRender()):a&&n?l.a.createElement("div",{className:L()("need-help",{disabled:0===n.length||""===n.URL})},l.a.createElement("a",{href:"mailto:".concat(n)},R.y)):void 0}},{key:"render",value:function(){var e=this;return this.props.isOpen&&!1!==this.props.isOpen?l.a.createElement(b.d,{initialValues:{email:this.state.email,password:this.state.password},validate:function(e){var t={};return e.email?/\s?\w+\s/i.test(e.email)&&(t.email="Invalid username"):t.email="Required",e.password||(t.password="Required"),t},onSubmit:function(t,a){var n=a.setSubmitting;setTimeout(function(){n(!1),e.handleLoginSubmit(t)},400)},enableReinitialize:!0},function(t){var a=t.isSubmitting;return l.a.createElement(b.c,{className:L()({disabled:e.props.fetching||e.props.fetched&&null===e.props.userLoginError})},e.loginStatus(),l.a.createElement(b.b,{type:"text",name:"email",placeholder:"Username"}),l.a.createElement(b.a,{name:"email",component:"div",className:"error-msg"}),l.a.createElement(b.b,{type:"password",name:"password",placeholder:"Password"}),l.a.createElement(b.a,{name:"password",component:"div",className:"error-msg"}),l.a.createElement("div",{className:L()("more-link",{"d-none":!e.state.show})},l.a.createElement("button",{type:"submit",className:L()("btn btn-outline-secondary text-uppercase",{disabled:a})},R.bb)),l.a.createElement("div",{className:"extended"},l.a.createElement(y.b,{className:"forget-password",to:"/reset-password"},R.h),l.a.createElement(y.b,{className:"registration",to:"/registration"},"".concat(R.A," ").concat(R.I)),l.a.createElement(S.a,{check:!0,for:"remember-me",className:L()({active:e.state.remember})},l.a.createElement(v.a,{type:"checkbox",id:"remember-me",name:"remember_me",onChange:e.toggleCheckbox}),R.M)),e.getNeedHelp())}):null}}]),t}(c.Component),C=a(184),A=a(599),j=a(585),w=a(586),N=a(127),I=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"loading"},l.a.createElement("img",{className:"loading-icon",src:N.e,alt:"loader"}))}}]),t}(c.Component),D=(a(614),a(87)),T=a.n(D),P=a(74),B=Object(P.a)();var x={updateUserFlag:function(e){return B?B.headers["X-CSRF-Token"]=p.a.load("csrfToken"):B={headers:{Authorization:"".concat(e.tokenType," ").concat(e.accessToken),"X-CSRF-Token":p.a.load("csrfToken")}},function(e){e({type:"UPDATE_USER_FLAG"}),T.a.post("/api/v1/userPolicyFlag?_format=json",{flagStatus:1},B).then(function(t){e({type:"UPDATE_USER_FLAG_SUCCESS",payload:t.data})}).catch(function(t){e({type:"UPDATE_USER_FLAG_FAILURE",payload:t.response.data.message}),e({type:"ADD_ERROR",payload:t})})}}},G=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).acceptLogin=function(){a.state.agree1&&a.state.agree2&&a.props.updateUserFlag(a.props.userLoginCredentails)},a.toggleCheckbox=function(e){var t=document.getElementById(e.target.id),n=e.target.name,r=t.checked;a.setState(Object(C.a)({},n,r))},a.logout=function(){a.setState({logout:!0}),a.props.logout()},a.state={agree1:!1,agree2:!1,active:!1},a.logout=a.logout.bind(Object(E.a)(a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(k.d)()}},{key:"componentWillReceiveProps",value:function(e){if(e.updateUserFlag)if(e.userFlag)e.redirectLogin();else{var t=localStorage.getItem("user");if(t){var a=JSON.parse(t);a.policyFlag=!0,localStorage.setItem("user",JSON.stringify(a))}}}},{key:"render",value:function(){var e=this.props,t=e.isOpen,a=e.updatingUserFlag,n=e.updatedUserFlag;return l.a.createElement(A.a,{className:"tool-modal",isOpen:t,centered:!0},a||this.state.logout||n?l.a.createElement("div",{className:"loader text-center"},Object(k.c)()):null,l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",onClick:this.logout,className:"close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),t?l.a.createElement(j.a,null,l.a.createElement(w.a,{check:!0},l.a.createElement(S.a,{check:!0,for:"agree1",className:L()({active:this.state.agree1}),disabled:a},l.a.createElement(v.a,{type:"checkbox",id:"agree1",name:"agree1",value:this.state.agree1,onChange:this.toggleCheckbox}),"I have read, understand and agree to the ",l.a.createElement("a",{href:"/terms-and-conditions",target:"_blank"},"terms and conditions"))),l.a.createElement(w.a,{check:!0},l.a.createElement(S.a,{check:!0,for:"agree2",className:L()({active:this.state.agree2})},l.a.createElement(v.a,{type:"checkbox",id:"agree2",name:"agree2",value:this.state.agree2,onChange:this.toggleCheckbox,disabled:a})," ","I have read, understand and agree to the privacy policy. Personal data will be used to create and manage your account, including to send transactional emails about your account. Personal data may be stored outside your country of residence. For more information on our privacy practices, your rights and hour to exercise these rights. Please see our ",l.a.createElement("a",{href:"/privacy-policy",target:"_blank"},"Privacy Policy."))),l.a.createElement(g.a,{className:"text-center"},l.a.createElement("div",{className:"col more-link"},l.a.createElement("button",{className:L()("btn btn-outline-secondary text-uppercase",{active:this.state.agree1&&this.state.agree2},{disabled:!(this.state.agree1&&this.state.agree2)}),onClick:this.acceptLogin},"Accept")))):l.a.createElement(I,null))}}]),t}(c.Component);G.defaultProps={isOpen:!1};var M=Object(u.b)(function(e){var t=e.userFlag;return{updatingUserFlag:t.updatingUserFlag,updatedUserFlag:t.updatedUserFlag,userFlag:t.userFlag,userFlagError:t.userFlagError}},function(e){return{updateUserFlag:function(t){return e(x.updateUserFlag(t))}}})(G),H=(a(612),a(617)),J=a(610),W=Object(P.a)();var z={getUserInfo:function(e){return W||(W={headers:{Authorization:"".concat(e.tokenType," ").concat(e.accessToken)}}),function(e){e({type:"FETCH_USER_DETAILS"}),T.a.get("/api/v1/userDashboard?_format=json",W).then(function(t){e({type:"FETCH_USER_DETAILS_SUCCESS",payload:t.data}),localStorage.setItem("user",JSON.stringify(t.data))}).catch(function(t){e({type:"FETCH_USER_DETAILS_FAILURE",payload:t.response.data.message}),e({type:"ADD_ERROR",payload:t})})}}},K=a(621),X=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).redirectLogin=function(){document.location=N.b},a.toggleAcceptModal=function(){var e=!a.state.showAcceptModal;a.setState({showAcceptModal:e})},a.toggleForgot=function(){a.setState({showForgot:!a.state.showForgot})},a.state={background:"rgba(0,0,0,0.3)",true:!1,auth_in_progress:!1,showAcceptModal:!1,cred:!1,showForgot:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=h.a.parse(this.props.location.search).registration;e&&this.setState({registration:e});var t=p.a.load("access_token",{path:"/"});t&&(this.props.getUserInfo(t),this.setState({active:!0})),this.props.getLoginBackground(),this.props.getGlobalSupportEmail()}},{key:"componentWillReceiveProps",value:function(e){var t=e.AuthenticatedUserCredentails,a=e.AuthenticatingUserCredentails,n=e.userLoginCredentails;if(void 0!==e.loginBackground.backGroundImage&&this.setState({background:e.loginBackground.backGroundImage}),a)this.setState({cred:!0});else if(t&&this.state.cred&&n&&""!==n.length){var r=JSON.stringify(n),o=new Date(new Date(0).setUTCSeconds(n.expiresIn));p.a.save("access_token",r,{path:"/",expires:o}),this.setState({cred:!1}),e.getUserInfo(n)}e.fetchedUserDetails&&(e.user&&e.user.policyFlag?(localStorage.setItem("user",JSON.stringify(e.user)),this.redirectLogin()):this.redirectLogin())}},{key:"render",value:function(){var e=this.props,t=e.AuthenticatedUserCredentails,a=e.AuthenticatingUserCredentails,n=e.fetchedFooter,r=e.fetchingFooter,o=e.footer,i=e.userLoginError,s=e.fetchingSupportEmail,c=e.fetchedSupportEmail,u=e.supportEmail;return l.a.createElement(g.a,null,l.a.createElement("div",{className:"user-login-wrapper col-12",style:{backgroundImage:"url("+this.state.background+")"}},l.a.createElement(J.a,null),l.a.createElement("div",{className:"user-login"},this.state.registration&&l.a.createElement("div",{className:"msg"},R.L),l.a.createElement(F,{isOpen:!this.state.showForgot,onSubmitForm:this.toggleAcceptModal,login:this.props.submitLogin,fetching:a||this.state.active,fetched:t,userLoginError:i,fetchedFooter:n,fetchingFooter:r,footer:o,toggleForgot:this.toggleForgot,supportEmail:u,fetchedSupportEmail:c,fetchingSupportEmail:s}),l.a.createElement(M,{isOpen:this.state.showAcceptModal,toggle:this.toggleAcceptModal,logout:this.props.logout,redirectLogin:this.redirectLogin,userLoginCredentails:this.props.userLoginCredentails,user:this.props.user}))))}}]),t}(c.Component);var q=Object(u.b)(function(e){var t=e.userLogin,a=t.fetchingLoginBackground,n=t.fetchedLoginBackground,r=t.userLoginError,o=t.loginBackground,i=t.AuthenticatingUserCredentails,s=t.AuthenticatedUserCredentails,c=t.fetchingLogoutInfo,l=t.fetchedLogoutInfo,u=t.userLogout,d=t.userLoginCredentails,p=e.footer,g=p.fetchedFooter,m=p.fetchingFooter,h=p.footer,f=e.support,E=f.fetchingSupportEmail,b=f.fetchedSupportEmail,y=f.supportError,S=f.supportEmail,v=e.userDetails;return{fetchingLoginBackground:a,fetchedLoginBackground:n,userLoginError:r,loginBackground:o,AuthenticatingUserCredentails:i,AuthenticatedUserCredentails:s,fetchingLogoutInfo:c,fetchedLogoutInfo:l,userLogout:u,fetchedFooter:g,fetchingFooter:m,footer:h,userLoginCredentails:d,fetchingSupportEmail:E,fetchedSupportEmail:b,supportError:y,supportEmail:S,fetchingUserDetails:v.fetchingUserDetails,fetchedUserDetails:v.fetchedUserDetails,user:v.user,userDetailsError:v.userDetailsError}},function(e){return{getLoginBackground:function(){return e(f.a.getLoginBackground())},submitLogin:function(t,a){return e(f.a.submitLogin(t,a))},logout:function(){return e(K.a.submitLogout())},getGlobalSupportEmail:function(){return e(H.a.getGlobalSupportEmail())},getUserInfo:function(t){return e(z.getUserInfo(t))}}})(X);t.default=q}}]);
//# sourceMappingURL=UserLogin.2f04426c.bundle.js.map