(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s});var r="/themes/custom/elx_frontend/src/images/defaults/template_default.jpg",a="/themes/custom/elx_frontend/src/images/defaults/banner_homepage.jpg",o="/themes/custom/elx_frontend/src/images/loading.svg",i=12,c="/home",s=4},127:function(e,t,n){"use strict";n.d(t,"i",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"h",function(){return o}),n.d(t,"w",function(){return i}),n.d(t,"v",function(){return c}),n.d(t,"u",function(){return s}),n.d(t,"H",function(){return u}),n.d(t,"z",function(){return l}),n.d(t,"F",function(){return d}),n.d(t,"C",function(){return h}),n.d(t,"I",function(){return f}),n.d(t,"o",function(){return E}),n.d(t,"J",function(){return g}),n.d(t,"G",function(){return p}),n.d(t,"c",function(){return S}),n.d(t,"B",function(){return _}),n.d(t,"s",function(){return L}),n.d(t,"e",function(){return O}),n.d(t,"x",function(){return C}),n.d(t,"E",function(){return T}),n.d(t,"D",function(){return y}),n.d(t,"y",function(){return b}),n.d(t,"f",function(){return v}),n.d(t,"a",function(){return m}),n.d(t,"p",function(){return I}),n.d(t,"q",function(){return F}),n.d(t,"t",function(){return j}),n.d(t,"d",function(){return R}),n.d(t,"b",function(){return A}),n.d(t,"A",function(){return U}),n.d(t,"l",function(){return D}),n.d(t,"k",function(){return N}),n.d(t,"m",function(){return P}),n.d(t,"j",function(){return H}),n.d(t,"r",function(){return w}),n.d(t,"n",function(){return G});var r="Latest Brand News",a="Featured Lessons",o="Featured",i="Products",c="See More",s="Product Library",u="Story",l="Scent",d="Spectrum",h="Selling",f="Video",E="Key Notes",g="Videos",p="News",S="Estee Lauder Inc. All worldwide rights reserved",_="See More",L="Need Help?",O="Forgot Password?",C="Remember Me",T="Sign In",y="Send Reset Code",b="Resend Reset Code",v="Have a Reset Code?",m="<Back To Login",I="Login",F="Logout",j="NEED HELP",R="Something went wrong, Please try again",A="Product Library",U="Scent training",D="Ingredients",N="Ingredients",P="Ingredient Story",H="Featured In",w="Markets:",G="Job Title:"},128:function(e,t,n){"use strict";n.d(t,"a",function(){return E}),n.d(t,"b",function(){return p});var r=n(52),a=n(53),o=n(55),i=n(54),c=n(56),s=n(0),u=n.n(s),l=n(38),d=n.n(l),h=n(57),f=Object(h.a)(),E=u.a.createContext({}),g=E.Provider,p=E.Consumer,S=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).state={brands:["load"]},e}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){if("/login"!==window.location.pathname){var e=localStorage.getItem("brands"),t={},n=this;e?this.setState({brands:JSON.parse(e)}):d.a.get("/api/v1/brands?_format=json",f).then(function(e){e.data&&200===e.status&&0!==e.data.results.length?(e.data.results.forEach(function(e){t[e.tid]=e.name}),localStorage.setItem("brands",JSON.stringify(t)),n.setState({brands:t})):e.data&&204===e.status&&n.setState({brands:[]})}).catch(function(e){204!==e.response.status&&200!==e.response.status&&n.setState({brands:["nodata"]})})}}},{key:"render",value:function(){return u.a.createElement(g,{value:this.state.brands},this.props.children)}}]),t}(s.Component);t.c=S},181:function(e,t,n){e.exports=n(409)},408:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(77),i=n.n(o),c=n(76),s=n(50),u=n(178),l=n(1),d="FETCH_PRIMARY_NAVIGATIONS_LIST",h="FETCH_PRIMARY_NAVIGATIONS_LIST_SUCCESS",f="FETCH_PRIMARY_NAVIGATIONS_LIST_FAILURE",E="FETCH_LOGIN_BACKGROUND",g="FETCH_LOGIN_BACKGROUND_SUCCESS",p="FETCH_LOGIN_BACKGROUND_FAILURE",S="FETCH_INTERACTIVE_CONTENT",_="FETCH_INTERACTIVE_CONTENT_SUCCESS",L="FETCH_INTERACTIVE_CONTENT_FAILURE",O="FETCH_INTERACTIVE_CONTENT_STATUS",C="FETCH_INTERACTIVE_CONTENT_STATUS_SUCCESS",T="FETCH_INTERACTIVE_CONTENT_STATUS_FAILURE",y="FETCH_BRANDS_LEVELS",b="FETCH_BRANDS_LEVELS_SUCCESS",v="FETCH_BRANDS_LEVELS_FAILURE",m="FETCH_MODULE_LISTING",I="FETCH_MODULE_LISTING_SUCCESS",F="FETCH_MODULE_LISTING_FAILURE",j="FETCH_PRODUCT_DETAIL",R="FETCH_PRODUCT_DETAIL_SUCCESS",A="FETCH_PRODUCT_DETAIL_FAILURE",U="FETCH_PRODUCTS_LIST",D="FETCH_PRODUCTS_LIST_SUCCESS",N="FETCH_PRODUCTS_LIST_FAILURE",P="FETCH_HOMEPAGE_LEVELS",H="FETCH_HOMEPAGE_LEVELS_SUCCESS",w="FETCH_HOMEPAGE_LEVELS_FAILURE",G="FETCH_HOMEPAGE_SPOTLIGHT",k="FETCH_HOMEPAGE_SPOTLIGHT_SUCCESS",M="FETCH_HOMEPAGE_SPOTLIGHT_FAILURE",V="FETCH_USER_DETAILS",B="FETCH_USER_DETAILS_SUCCESS",x="FETCH_USER_DETAILS_FAILURE",z="FETCH_VIDEO_DETAILS",K="FETCH_VIDEO_DETAILS_SUCCESS",Y="FETCH_VIDEO_DETAILS_FAILURE",W="FETCH_TRENDING_LISTING",J="FETCH_TRENDING_LISTING_SUCCESS",q="FETCH_TRENDING_LISTING_FAILURE",$="FETCH_STORY_DETAILS",Q="FETCH_STORY_DETAILS_SUCCESS",X="FETCH_STORY_DETAILS_FAILURE",Z="FETCH_HOMEPAGE_TRENDING",ee="FETCH_HOMEPAGE_TRENDING_SUCCESS",te="FETCH_HOMEPAGE_TRENDING_FAILURE",ne="FETCH_TERMS_CONDITIONS",re="FETCH_TERMS_CONDITIONS_SUCCESS",ae="FETCH_TERMS_CONDITIONS_FAILURE",oe="FETCH_PRIVACY_POLICY",ie="FETCH_PRIVACY_POLICY_SUCCESS",ce="FETCH_PRIVACY_POLICY_FAILURE",se="SET_DATAPOINTS",ue="SET_DATAPOINTS_SUCCESS",le="SET_DATAPOINTS_FAILURE",de="FETCH_VIDEO_LISTING",he="FETCH_VIDEO_LISTING_SUCCESS",fe="FETCH_VIDEO_LISTING_FAILURE",Ee="USER_LOGIN",ge="USER_LOGIN_SUCCESS",pe="USER_LOGIN_FAILURE",Se="USER_LOGOUT",_e="USER_LOGOUT_SUCCESS",Le="USER_LOGOUT_FAILURE",Oe="FETCH_FOOTER_MENU",Ce="FETCH_FOOTER_MENU_SUCCESS",Te="FETCH_FOOTER_MENU_FAILURE",ye="RESET_EMAIL",be="RESET_EMAIL_SUCCESS",ve="RESET_EMAIL_FAILURE",me="CHANGE_PASSWORD",Ie="CHANGE_PASSWORD_SUCCESS",Fe="CHANGE_PASSWORD_FAILURE",je="FETCH_BRAND_LIST",Re="FETCH_BRAND_LIST_SUCCESS",Ae="FETCH_BRAND_LIST_FAILURE",Ue="ADD_ERROR",De="REMOVE_ERROR",Ne="FETCH_GLOBAL_SUPPORT_EMAIL",Pe="FETCH_GLOBAL_SUPPORT_EMAIL_SUCCESS",He="FETCH_GLOBAL_SUPPORT_EMAIL_FAILURE",we="FETCH_USER_SUPPORT_EMAIL",Ge="FETCH_USER_SUPPORT_EMAIL_SUCCESS",ke="FETCH_USER_SUPPORT_EMAIL_FAILURE",Me="UPDATE_USER_FLAG",Ve="UPDATE_USER_FLAG_SUCCESS",Be="UPDATE_USER_FLAG_FAILURE",xe="FETCH_INGREDIENTS_LIST",ze="FETCH_INGREDIENTS_LIST_SUCCESS",Ke="FETCH_INGREDIENTS_LIST_FAILURE",Ye="FETCH_FEATURED_CAROUSEL",We="FETCH_FEATURED_CAROUSEL_SUCCESS",Je="FETCH_FEATURED_CAROUSEL_FAILURE",qe="FETCH_INGREDIENT_DETAIL",$e="FETCH_INGREDIENT_DETAIL_SUCCESS",Qe="FETCH_INGREDIENT_DETAIL_FAILURE",Xe="FETCH_KEYNOTES",Ze="FETCH_KEYNOTES_SUCCESS",et="FETCH_KEYNOTES_FAILURE";var tt=Object(s.c)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingLoginBackground:!1,fetchedLoginBackground:!1,AuthenticatingUserCredentails:!1,AuthenticatedUserCredentails:!1,fetchingLogoutInfo:!1,fetchedLogoutInfo:!1,loginBackground:[],userLoginCredentails:null,userLogout:[],error:null,userLoginError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(l.a)({},e,{fetchingLoginBackground:!0,fetchedLoginBackground:!1});case g:return Object(l.a)({},e,{fetchingLoginBackground:!1,fetchedLoginBackground:!0,loginBackground:t.payload});case p:return Object(l.a)({},e,{fetchingLoginBackground:!1,fetchedLoginBackground:!1,loginBackgorundError:t.payload});case Ee:return Object(l.a)({},e,{AuthenticatingUserCredentails:!0,AuthenticatedUserCredentails:!1,userLoginCredentails:null,userLoginError:null});case ge:return Object(l.a)({},e,{AuthenticatingUserCredentails:!1,AuthenticatedUserCredentails:!0,userLoginCredentails:t.payload});case pe:return Object(l.a)({},e,{AuthenticatingUserCredentails:!1,AuthenticatedUserCredentails:!0,userLoginError:t.payload.data});case Se:return Object(l.a)({},e,{fetchingLogoutInfo:!0,fetchedLogoutInfo:!1,userLogout:[],userLogoutError:null});case _e:return Object(l.a)({},e,{fetchingLogoutInfo:!1,fetchedLogoutInfo:!0,userLogout:t.payload});case Le:return Object(l.a)({},e,{fetchingLogoutInfo:!1,fetchedLogoutInfo:!0,userLogoutError:t.payload});default:return e}},trendingListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{stories:[],fetchedStories:!1,fetchingStories:!1,fetchingStoriesError:!1,pager:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(l.a)({},e,{fetchingStories:!0,fetchedStories:!1});case J:return Object(l.a)({},e,{fetchingStories:!1,fetchedStories:!0,stories:t.payload.data,pager:t.payload.data.pager,status:t.payload.status});case q:return Object(l.a)({},e,{fetchedStories:!1,fetchingStoriesError:t.payload});default:return e}},trendingDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{story:[],fetchedStory:!1,fetchingStory:!1,fetchedStoryError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(l.a)({},e,{fetchingStory:!0,fetchedStory:!1});case Q:return Object(l.a)({},e,{fetchingStory:!1,fetchedStory:!0,story:t.payload});case X:return Object(l.a)({},e,{fetchedStory:!1,fetchedStoryError:t.payload});default:return e}},setDatapoints:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{settingDatapoints:!1,setDatapoints:!1,datapoints:[],setDatapointsError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(l.a)({},e,{settingDatapoints:!0,setDatapoints:!1,datapoints:[]});case ue:return Object(l.a)({},e,{settingDatapoints:!1,setDatapoints:!0,datapoints:t.payload});case le:return Object(l.a)({},e,{setDatapoints:!1,settingDatapoints:!1,setDatapointsError:t.payload});default:return e}},homepageTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingTrending:!0,fetchedTrending:!1,trending:[],homepageTrendingError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(l.a)({},e,{fetchingTrending:!0,fetchedTrending:!1});case ee:return Object(l.a)({},e,{fetchingTrending:!1,fetchedTrending:!0,trending:t.payload});case te:return Object(l.a)({},e,{fetchedTrending:!1,homepageTrendingError:t.payload});default:return e}},homepageLevels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingLevelsList:!0,fetchedLevelsList:!1,explorelevels:[],homeLevelsError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(l.a)({},e,{fetchingLevelsList:!0});case H:return Object(l.a)({},e,{fetchingLevelsList:!1,fetchedLevelsList:!0,explorelevels:t.payload});case w:return Object(l.a)({},e,{fetchedLevelsList:!1,homeLevelsError:t.payload});default:return e}},primaryNavigations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingPrimaryNavigations:!1,fetchedPrimaryNavigations:!1,primaryNavigations:[],error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)({},e,{fetchingPrimaryNavigations:!0,fetchedPrimaryNavigations:!1,primaryNavigations:[]});case h:return Object(l.a)({},e,{fetchingPrimaryNavigations:!1,fetchedPrimaryNavigations:!0,primaryNavigations:t.payload});case f:return Object(l.a)({},e,{fetchingPrimaryNavigations:!1,fetchedPrimaryNavigations:!1,error:t.payload});default:return e}},footer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingFooter:!1,fetchedFooter:!1,footer:[],error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(l.a)({},e,{fetchingFooter:!0,fetchedFooter:!1,footer:[]});case Ce:return Object(l.a)({},e,{fetchingFooter:!1,fetchedFooter:!0,footer:t.payload});case Te:return Object(l.a)({},e,{fetchingFooter:!1,fetchedFooter:!0,error:t.payload});default:return e}},resetForget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{resetError:null,emailReset:null,fetchingEmailReset:!1,fetchedEmailReset:!1,changeError:null,changePassword:null,fetchingChangePassword:!1,fetchedChangePassword:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(l.a)({},e,{fetchingEmailReset:!0,fetchedEmailReset:!1,resetError:null});case be:return Object(l.a)({},e,{fetchingEmailReset:!1,fetchedEmailReset:!0,emailReset:t.payload});case ve:return Object(l.a)({},e,{fetchingEmailReset:!1,fetchedEmailReset:!0,resetError:t.payload});case me:return Object(l.a)({},e,{fetchingChangePassword:!0,fetchedChangePassword:!1,changeError:null});case Ie:return Object(l.a)({},e,{fetchingChangePassword:!1,fetchedChangePassword:!0,changePassword:t.payload});case Fe:return Object(l.a)({},e,{fetchingChangePassword:!1,fetchedChangePassword:!0,changeError:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:null,caughtError:!1,errorMessage:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(l.a)({},e,{caughtError:!0,error:t.payload.response.status,errorMessage:t.payload.response.data.message?t.payload.response.data.message:t.payload.response.data});case De:return Object(l.a)({},e,{caughtError:!1,error:null,errorMessage:""});default:return e}},moduleListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingModuleListing:!1,fetchedModuleListing:!1,moduleListing:[],moduleListingError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(l.a)({},e,{fetchingModuleListing:!0,fetchedModuleListing:!1});case I:return Object(l.a)({},e,{fetchingModuleListing:!1,fetchedModuleListing:!0,moduleListing:t.payload.data,pager:t.payload.data.pager,status:t.payload.status});case F:return Object(l.a)({},e,{fetchingModuleListing:!1,fetchedModuleListing:!1,moduleListingError:t.payload});default:return e}},support:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingSupportEmail:!1,fetchedSupportEmail:!1,supportError:[],supportEmail:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(l.a)({},e,{fetchingSupportEmail:!0,fetchedSupportEmail:!1,supportEmail:""});case Pe:return Object(l.a)({},e,{fetchingSupportEmail:!1,fetchedSupportEmail:!0,supportEmail:t.payload.supportEmail});case He:return Object(l.a)({},e,{fetchingSupportEmail:!1,fetchedSupportEmail:!1,supportError:t.payload});case we:return Object(l.a)({},e,{fetchingSupportEmail:!0,fetchedSupportEmail:!1,supportEmail:""});case Ge:return Object(l.a)({},e,{fetchingSupportEmail:!1,fetchedSupportEmail:!0,supportEmail:t.payload.supportEmail});case ke:return Object(l.a)({},e,{fetchingSupportEmail:!1,fetchedSupportEmail:!1,supportError:t.payload});default:return e}},brandLanding:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingLevelsList:!0,fetchedLevelsList:!1,brandlevels:[],brandlevelsError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(l.a)({},e,{fetchingLevelsList:!0,fetchedLevelsList:!1});case b:return Object(l.a)({},e,{fetchingLevelsList:!1,fetchedLevelsList:!0,brandlevels:t.payload.data,pager:t.payload.data.pager,status:t.payload.status});case v:return Object(l.a)({},e,{fetchedLevelsList:!1,brandlevelsError:t.payload});default:return e}},moduleDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingInteractiveContent:!1,fetchedInteractiveContent:!1,fetchingInteractiveContentStatus:!1,fetchedInteractiveContentStatus:!1,interactiveContent:[],interactiveContentStatus:[],error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(l.a)({},e,{fetchingInteractiveContent:!0,fetchedInteractiveContent:!1});case _:return Object(l.a)({},e,{fetchingInteractiveContent:!1,fetchedInteractiveContent:!0,interactiveContent:t.payload});case L:return Object(l.a)({},e,{fetchedInteractiveContent:!1,fetchingInteractiveContent:!1,error:t.payload});case O:return Object(l.a)({},e,{fetchingInteractiveContentStatus:!0});case C:return Object(l.a)({},e,{fetchingInteractiveContentStatus:!1,fetchedInteractiveContentStatus:!0,interactiveContentStatus:t.payload});case T:return Object(l.a)({},e,{fetchedInteractiveContentStatus:!1,error:t.payload});default:return e}},productsListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingProductsList:!1,fetchedProductsList:!1,productsList:[],productListError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(l.a)({},e,{fetchingProductsList:!0,fetchedProductsList:!1,productsList:[]});case D:return Object(l.a)({},e,{fetchingProductsList:!1,fetchedProductsList:!0,productsList:t.payload.data,pager:t.payload.data.pager,status:t.payload.status});case N:return Object(l.a)({},e,{fetchedProductsList:!1,fetchingProductsList:!1,productListError:t.payload});default:return e}},privacyPolicy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingPolicy:!1,fetchedPolicy:!1,policy:null,policyError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(l.a)({},e,{fetchingPolicy:!0,fetchedPolicy:!1});case ie:return Object(l.a)({},e,{fetchingPolicy:!1,fetchedPolicy:!0,policy:t.payload[0]});case ce:return Object(l.a)({},e,{fetchedPolicy:!1,policyError:t.payload});default:return e}},termsAndCondition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingTnc:!1,fetchedTnc:!1,tnc:null,tncError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(l.a)({},e,{fetchingTnc:!0});case re:return Object(l.a)({},e,{fetchingTnc:!1,fetchedTnc:!0,tnc:t.payload[0]});case ae:return Object(l.a)({},e,{fetchedTnc:!1,tncError:t.payload});default:return e}},brandList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingBrandList:!1,fetchedBrandList:!1,brandList:[],brandListError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(l.a)({},e,{fetchingBrandList:!0,fetchedBrandList:!1});case Re:return Object(l.a)({},e,{fetchingBrandList:!1,fetchedBrandList:!0,brandList:t.payload.data,status:t.payload.status});case Ae:return Object(l.a)({},e,{fetchedBrandList:!1,brandListError:t.payload});default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingUserDetails:!1,fetchedUserDetails:!1,user:null,userDetailsError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(l.a)({},e,{fetchingUserDetails:!0,fetchedUserDetails:!1,user:null,userDetailsError:null});case B:return Object(l.a)({},e,{fetchingUserDetails:!1,fetchedUserDetails:!0,user:t.payload,userDetailsError:null});case x:return Object(l.a)({},e,{fetchedUserDetails:!1,userDetailsError:t.payload,fetchingUserDetails:!1,user:null});default:return e}},userFlag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{updatingUserFlag:!1,updatedUserFlag:!1,userFlag:null,userFlagError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(l.a)({},e,{updatingUserFlag:!0,updatedUserFlag:!1,userFlag:null,userFlagError:null});case Ve:return Object(l.a)({},e,{updatingUserFlag:!1,updatedUserFlag:!0,userFlag:t.payload,userFlagError:null});case Be:return Object(l.a)({},e,{updatedUserFlag:!1,userFlagError:t.payload,updatingUserFlag:!1,userFlag:null});default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingProductDetail:!1,fetchedProductDetail:!1,productDetail:null,productDetailsError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)({},e,{fetchingProductDetail:!0,fetchedProductDetail:!1});case R:return Object(l.a)({},e,{fetchingProductDetail:!1,fetchedProductDetail:!0,productDetail:t.payload.data,status:t.payload.status});case A:return Object(l.a)({},e,{fetchedProductDetail:!1,productDetailsError:t.payload});default:return e}},ingredientsListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingIngredientsList:!1,fetchedIngredientsList:!1,ingredients:[],ingredientsListError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(l.a)({},e,{fetchingIngredientsList:!0,fetchedIngredientsList:!1,ingredients:[]});case ze:return Object(l.a)({},e,{fetchingIngredientsList:!1,fetchedIngredientsList:!0,ingredients:t.payload.data,pager:t.payload.data.pager,status:t.payload.status});case Ke:return Object(l.a)({},e,{fetchedIngredientsList:!1,ingredientsListError:t.payload});default:return e}},featuredCarousel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingFeaturedCarousel:!1,fetchedFeaturedCarousel:!1,featuredCarousel:null,featuredCarouselError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ye:return Object(l.a)({},e,{fetchingFeaturedCarousel:!0,fetchedFeaturedCarousel:!1});case We:return Object(l.a)({},e,{fetchingFeaturedCarousel:!1,fetchedFeaturedCarousel:!0,featuredCarousel:t.payload.data,status:t.payload.status});case Je:return Object(l.a)({},e,{fetchedFeaturedCarousel:!1,fetchingFeaturedCarousel:!1,featuredCarouselError:t.payload});default:return e}},ingredientDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingIngredientDetail:!1,fetchedIngredientDetail:!1,ingredientDetail:null,ingredientDetailsError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case qe:return Object(l.a)({},e,{fetchingIngredientDetail:!0,fetchedIngredientDetail:!1});case $e:return Object(l.a)({},e,{fetchingIngredientDetail:!1,fetchedIngredientDetail:!0,ingredientDetail:t.payload.data,status:t.payload.status});case Qe:return Object(l.a)({},e,{fetchedIngredientDetail:!1,ingredientsDetailError:t.payload});default:return e}},keynotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingKeynotes:!1,fetchedKeynotes:!1,keynotes:[],keynotesError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(l.a)({},e,{fetchingKeynotes:!0,fetchedKeynotes:!1});case Ze:return Object(l.a)({},e,{fetchingKeynotes:!1,fetchedKeynotes:!0,keynotes:t.payload.data,status:t.payload.status});case et:return Object(l.a)({},e,{fetchedKeynotes:!1,fetchingKeynotes:!1,keynotesError:t.payload});default:return e}},videosListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingVideosList:!1,fetchedVideosList:!1,videosList:[],videosListError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(l.a)({},e,{fetchingVideosList:!0,fetchedVideosList:!1,videosList:[]});case he:return Object(l.a)({},e,{fetchingVideosList:!1,fetchedVideosList:!0,videosList:t.payload.data,pager:t.payload.data.pager,status:t.payload.status});case fe:return Object(l.a)({},e,{fetchedVideosList:!1,fetchingVideosList:!1,videosListError:t.payload});default:return e}},homepageSpotlight:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingSpotlight:!0,fetchedSpotlight:!1,spotlight:[],spotlightError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(l.a)({},e,{fetchingSpotlight:!0});case k:return Object(l.a)({},e,{fetchingSpotlight:!1,fetchedSpotlight:!0,spotlight:t.payload});case M:return Object(l.a)({},e,{fetchingSpotlight:!1,fetchedSpotlight:!0,spotlightError:t.payload});default:return e}},videoDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchingVideoDetails:!1,fetchedVideoDetails:!1,videoDetails:null,videoDetailsError:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(l.a)({},e,{fetchingVideoDetails:!0,fetchedVideoDetails:!1,videoDetails:null});case K:return Object(l.a)({},e,{fetchingVideoDetails:!1,fetchedVideoDetails:!0,videoDetails:t.payload.data,status:t.payload.status});case Y:return Object(l.a)({},e,{fetchedVideoDetails:!1,fetchingVideoDetails:!1,videoDetailsError:t.payload});default:return e}}}),nt=(n(189).createLogger,[u.a]),rt=Object(s.d)(tt,s.a.apply(void 0,nt)),at=n(92),ot=n(52),it=n(53),ct=n(55),st=n(54),ut=n(56),lt=n(129),dt=n(51),ht=n(38),ft=n.n(ht),Et=n(126),gt=n(57),pt=n(128);ft.a.defaults.baseURL="http://ec2-18-136-101-163.ap-southeast-1.compute.amazonaws.com:5000";var St=a.a.createElement("section",{className:"loading"},a.a.createElement("img",{className:"loading-icon",src:Et.e,alt:"loader"})),_t=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(26),n.e(19)]).then(n.bind(null,561))}),Lt=Object(r.lazy)(function(){return n.e(20).then(n.bind(null,553))}),Ot=Object(r.lazy)(function(){return Promise.all([n.e(27),n.e(8)]).then(n.bind(null,559))}),Ct=Object(r.lazy)(function(){return n.e(7).then(n.bind(null,560))}),Tt=Object(r.lazy)(function(){return n.e(12).then(n.bind(null,565))}),yt=Object(r.lazy)(function(){return n.e(11).then(n.bind(null,570))}),bt=Object(r.lazy)(function(){return n.e(6).then(n.bind(null,563))}),vt=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,568))}),mt=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,576))}),It=(Object(r.lazy)(function(){return n.e(13).then(n.bind(null,480))}),Object(r.lazy)(function(){return n.e(10).then(n.bind(null,562))})),Ft=Object(r.lazy)(function(){return n.e(4).then(n.bind(null,566))}),jt=Object(r.lazy)(function(){return n.e(10).then(n.bind(null,575))}),Rt=Object(r.lazy)(function(){return Promise.all([n.e(1),n.e(16)]).then(n.bind(null,554))}),At=Object(r.lazy)(function(){return Promise.all([n.e(3),n.e(15)]).then(n.bind(null,572))}),Ut=Object(r.lazy)(function(){return Promise.all([n.e(3),n.e(15)]).then(n.bind(null,569))}),Dt=Object(r.lazy)(function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,573))}),Nt=Object(r.lazy)(function(){return Promise.all([n.e(2),n.e(14)]).then(n.bind(null,567))}),Pt=Object(r.lazy)(function(){return Promise.all([n.e(2),n.e(18)]).then(n.bind(null,571))}),Ht=Object(r.lazy)(function(){return Promise.all([n.e(1),n.e(22)]).then(n.bind(null,564))}),wt=Object(r.lazy)(function(){return n.e(21).then(n.bind(null,558))});function Gt(e){var t=e.component,n=Object(at.a)(e,["component"]);return a.a.createElement(dt.b,Object.assign({},n,{render:function(e){return Object(gt.c)()?a.a.createElement(t,e):a.a.createElement(dt.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function kt(e){var t=e.component,n=Object(at.a)(e,["component"]);return a.a.createElement(dt.b,Object.assign({},n,{render:function(e){return Object(gt.c)()?a.a.createElement(dt.a,{to:{pathname:"/home",state:{from:e.location}}}):a.a.createElement(t,e)}}))}var Mt=function(e){function t(){return Object(ot.a)(this,t),Object(ct.a)(this,Object(st.a)(t).apply(this,arguments))}return Object(ut.a)(t,e),Object(it.a)(t,[{key:"render",value:function(){return a.a.createElement(lt.a,null,a.a.createElement(r.Suspense,{fallback:St},a.a.createElement(Ct,null),a.a.createElement("div",{className:"main-content col-12"},a.a.createElement(pt.c,null,a.a.createElement(dt.d,null,a.a.createElement(dt.b,{exact:!0,path:"/",render:function(){return gt.c?a.a.createElement(dt.a,{to:"/home"}):a.a.createElement(dt.a,{to:"/login"})}}),a.a.createElement(dt.a,{from:"/user/login",to:"/login"}),a.a.createElement(dt.a,{from:"/user/logout",to:"/logout"}),a.a.createElement(Gt,{exact:!0,path:"/home",component:Ot}),a.a.createElement(kt,{exact:!0,path:"/login",component:_t}),a.a.createElement(kt,{exact:!0,path:"/user/login"}),a.a.createElement(kt,{exact:!0,path:"/reset-password",component:vt}),a.a.createElement(kt,{exact:!0,path:"/confirm-password",component:mt}),a.a.createElement(Gt,{exact:!0,path:"/news",component:Tt}),a.a.createElement(Gt,{exact:!0,path:"/news/:nid",component:yt}),a.a.createElement(Gt,{exact:!0,path:"/logout",component:Lt}),a.a.createElement(Gt,{exact:!0,path:"/course/:cid",component:It}),a.a.createElement(Gt,{path:"/brand/:id",component:Ft}),a.a.createElement(Gt,{exact:!0,path:"/module/:nid",component:jt}),a.a.createElement(Gt,{exact:!0,path:"/user/:uid",component:wt}),a.a.createElement(Gt,{exact:!0,path:"/products",component:Rt}),a.a.createElement(Gt,{exact:!0,path:"/product/:nid",component:At}),a.a.createElement(Gt,{exact:!0,path:"/ingredients",component:Ut}),a.a.createElement(Gt,{exact:!0,path:"/ingredient/:nid",component:Dt}),a.a.createElement(Gt,{exact:!0,path:"/videos",component:Ht}),a.a.createElement(dt.b,{path:"/privacy-policy",component:Nt}),a.a.createElement(dt.b,{path:"/terms-and-conditions",component:Pt})))),a.a.createElement(bt,null)))}}]),t}(r.Component),Vt=n(67),Bt=n(411),xt=n(127),zt=function(e){function t(e){var n;return Object(ot.a)(this,t),(n=Object(ct.a)(this,Object(st.a)(t).call(this,e))).state={visible:!1},n.onDismiss=n.onDismiss.bind(Object(Vt.a)(Object(Vt.a)(n))),n}return Object(ut.a)(t,e),Object(it.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1}),this.props.removeError()}},{key:"componentWillReceiveProps",value:function(e){this.setState({visible:e.caughtError})}},{key:"render",value:function(){var e=this.props,t=e.errorMessage;return e.caughtError?a.a.createElement(a.a.Fragment,null,a.a.createElement(Bt.a,{color:"dark",isOpen:this.state.visible,toggle:this.onDismiss},t||xt.d," ",a.a.createElement("a",{href:"/logout"},"Click Here"))):null}}]),t}(a.a.Component);var Kt=Object(c.b)(function(e){var t=e.errors;return{errorMessage:t.errorMessage,error:t.error,caughtError:t.caughtError}},function(e){return{removeError:function(){return e({type:"REMOVE_ERROR"})}}})(zt),Yt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Wt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(222),n(408);i.a.render(a.a.createElement(c.a,{store:rt},a.a.createElement(Mt,null),a.a.createElement(Kt,null)),document.getElementById("react-app-container")),function(e){if("serviceWorker"in navigator){var t,n=function(){document.querySelector(".prompt-banner").style.display="none"},r=function(){document.querySelector(".prompt-banner").style.display="none",t.prompt(),t.userChoice.then(function(e){"accepted"===e.outcome?console.log("Added to Homescreen"):console.log("Not Added to Homescreen"),t=null})};if(new URL("",window.location.href).origin!==window.location.origin)return;if(window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Yt?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Wt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Wt(t,e)}),window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),t=e,function(){var e=document.querySelector(".prompt-banner"),t=document.querySelector(".action-prompt"),a=document.querySelector(".prompt-banner .close");e.style.display="block",t.addEventListener("click",r),a.addEventListener("click",n)}()}),!("indexedDB"in window))console.log("This browser doesn't support IndexedDB")}}()},57:function(e,t,n){"use strict";n.d(t,"e",function(){return l}),n.d(t,"a",function(){return d}),n.d(t,"d",function(){return h}),n.d(t,"b",function(){return E}),n.d(t,"c",function(){return p});var r=n(75),a=n.n(r),o=n(124),i=n(38),c=n.n(i),s=n(39),u=n.n(s),l=u.a.load("access_token");function d(){if(c.a.defaults.headers.common["Content-Type"]="application/json","undefined"!==typeof l)return{headers:{Authorization:"".concat(l.tokenType," ").concat(l.accessToken)}}}function h(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=u.a.load("access_token"))||"undefined"===typeof t){e.next=8;break}return e.next=4,u.a.remove("access_token",{path:"/"});case 4:return e.next=6,u.a.remove("csrfToken",{path:"/"});case 6:return e.next=8,localStorage.clear();case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.a.remove("crsfToken"),n={headers:{Authorization:"".concat(t.tokenType," ").concat(t.accessToken)}},c.a.get("/session/token?_format=json",{},n).then(function(e){var t=e.data;return u.a.save("csrfToken",t.toString(),{path:"/"}),t});case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(){var e=localStorage.getItem("user"),t=JSON.parse(e);return!!(l&&void 0!==l&&"undefined"!==typeof l&&e&&t.policyFlag)}}},[[181,24,25]]]);
//# sourceMappingURL=main.74d103e4.chunk.js.map