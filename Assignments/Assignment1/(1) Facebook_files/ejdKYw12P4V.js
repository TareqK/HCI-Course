if (self.CavalryLogger) { CavalryLogger.start_js(["wSzI8"]); }

__d("OptimisticVideoPostUtils",["AsyncRequest"],(function a(b,c,d,e,f,g){__p&&__p();var h={shouldShowOptimisticPost:function i(j){if(j.isScheduledPost||j.isHiddenFromTimeline||j.isSecret||!j.isPageToPage&&!j.isToUserProfile||j.isDraft)return false;return true},checkVideoStatus:function i(j,k,l,m){new(c("AsyncRequest"))().setURI("/ajax/video/encode/feedback/ping/").setData({video_id:j}).setHandler(function(n){var o=n.getPayload();if(n.error||o.error)l(j,n);else if(o.is_ready)k(j);else m(j)}).send()}};f.exports=h}),null);
__d("SubscriptionLevels",[],(function a(b,c,d,e,f,g){var h=Object.freeze({ALL:"162318810514679",DEFAULT:"271670892858696",TOP:"266156873403755"});f.exports=h}),null);
__d("EditSubscriptions",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","MenuDeprecated","Parent","SubscriptionLevels","ge","getOrCreateDOMID"],(function aa(a,b,ba,ca,c,da,ea,fa){__p&&__p();var d=45,e=[b("SubscriptionLevels").ALL,b("SubscriptionLevels").DEFAULT,b("SubscriptionLevels").TOP],f={},g={},h={},i={},j={},k={},l={},m={},n={},o={},p={},q="/ajax/follow/follow_profile.php",r="/ajax/follow/unfollow_profile.php",s="/ajax/settings/notifications/notify_me.php",t={},u={},v={},w=null,x={};function y(T){return e.includes(T)}function z(T,U,V,W){__p&&__p();var X=b("Parent").byClass(W,"uiMenuItem")||b("Parent").bySelector(W,"._54ni"),Y=b("getOrCreateDOMID")(T);if(!X||!b("DOM").contains(T,X))return;else if(b("CSS").hasClass(X,"SubscribeMenuSubscribeCheckbox")){if(h[U])E(Y,U);else D(Y,U);return false}else if(b("CSS").hasClass(X,"SubscribeMenuUnsubscribe")){E(Y,U);return false}else if(b("CSS").hasClass(X,"SubscribeMenuSettingsItem")){Q(T,true);return false}else if(b("CSS").hasClass(X,"SubscriptionMenuGoBack")){Q(T,false);return false}else if(b("CSS").hasClass(X,"SubscriptionMenuItem")){B(T,U,V,X);return false}else if(b("CSS").hasClass(X,"SubscribeMenuNotifyMeCheckbox")){A(T,U);return false}}function A(T,U){if(i[U])ha(T,U);else ga(T,U)}function B(T,U,V,W){if(b("CSS").hasClass(W,"SubscriptionMenuLevel")){if(b("MenuDeprecated").isItemChecked(W))return;O(T,U,H(W),true,V)}else if(b("CSS").hasClass(W,"SubscriptionMenuCategory"))L(U,W,!b("MenuDeprecated").isItemChecked(W),true,V);else if(b("CSS").hasClass(W,"SubscriptionAppStory"))N(U,W,!b("MenuDeprecated").isItemChecked(W),V)}function C(T){return x[T]?x[T]:0}function D(T,U){var V={profile_id:U};b("Arbiter").inform("FollowingUser",V);b("Arbiter").inform(b("FeedBlacklistButton").UNBLACKLIST,V);new(b("AsyncRequest"))().setURI(q).setMethod("POST").setData({profile_id:U,location:C(T)}).setErrorHandler(b("Arbiter").inform.bind(null,"FollowUserFail",V)).send()}function E(T,U){var V={profile_id:U};b("Arbiter").inform("UnfollowingUser",V);b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,V);new(b("AsyncRequest"))().setURI(r).setMethod("POST").setData({profile_id:U,location:C(T)}).setErrorHandler(b("Arbiter").inform.bind(null,"UnfollowUserFail",V)).send()}function F(T,U,V){var W={profile_id:T,level:m[T],custom_categories:n[T],location:V};new(b("AsyncRequest"))().setURI("/ajax/follow/manage_subscriptions.php").setData(W).send()}function G(T,U){__p&&__p();var V=n[U]||[],W=b("MenuDeprecated").getItems(T);W.forEach(function(X){__p&&__p();if(b("CSS").hasClass(X,"SubscriptionMenuCategory")){var Y=H(X);if(V.includes(Y))J(X);else K(X)}else if(b("CSS").hasClass(X,"SubscriptionAppStory")){var Z=H(X);if(v[U]&&v[U][Z])J(X);else K(X)}});O(T,U,m[U],false)}function H(T){var U=b("DOM").scry(T,"input")[0];return U&&U.value}function I(T){return b("DOM").find(T,"a.itemAnchor")}function J(T){b("CSS").addClass(T,"checked");I(T).setAttribute("aria-checked",true)}function K(T){b("CSS").removeClass(T,"checked");I(T).setAttribute("aria-checked",false)}function L(T,U,V,W,X){__p&&__p();if(V)J(U);else K(U);var Y=H(U);if(y(Y))V&&M(T,Y);else if(V){if(!n[T].includes(Y))n[T].push(Y)}else{var Z=n[T].indexOf(Y);if(Z!==-1)n[T].splice(Z,1)}if(W)F(T,Y,X)}function M(T,U){m[T]=U;b("Arbiter").inform("SubscriptionLevelUpdated",{profile_id:T,level:U})}function N(T,U,V,W){__p&&__p();var X="/ajax/feed/filter_action/",Y=H(U),Z={actor_id:T,app_id:Y};if(V){J(U);X+="resubscribe_user_app/";Z.action="resubscribe_user_app";if(!v[T])v[T]={};v[T][Y]=true}else{K(U);X+="unsubscribe_user_app_checkbox/";Z.action="unsubscribe_user_app_checkbox";if(v[T])v[T][Y]=false}new(b("AsyncRequest"))().setURI(X).setData(Z).send()}function O(T,U,V,W,X){var Y=b("DOM").scry(T,".SubscriptionMenuLevel"),Z=null;Y.forEach(function($){if(H($)==V)Z=$;else if(b("MenuDeprecated").isItemChecked($))L(U,$,false,false)});Z&&L(U,Z,true,W,X)}function P(T,U,V){h[U]=V;b("CSS").conditionClass(T,"isUnsubscribed",!V);var W=b("DOM").scry(T,"li.SubscribeMenuSubscribeCheckbox");if(W.length!==0){var X=W[0];if(V)J(X);else K(X)}}function Q(T,U){b("CSS").conditionClass(T,"subscriptionMenuOpen",U)}function R(T,U,V){var W=b("DOM").find(T,".FriendListSubscriptionsMenu"),X=b("DOM").find(W,".uiMenuInner");if(w!=null)w.forEach(function(Y){X.removeChild(Y)});V.forEach(function(Y){X.appendChild(Y)});w=V}b("Arbiter").subscribe("UnfollowUser",function(T,U){if(o[U.profile_id]){M(U.profile_id,o[U.profile_id]);n[U.profile_id]=p[U.profile_id].slice()}});b("Arbiter").subscribe("UpdateSubscriptionLevel",function(T,U){var V=U.profile_id+"",W=U.level+"";M(V,W);var X;for(X in f)if(f[X]===V){var Y=b("ge")(X);Y&&O(Y,V,W,false)}});b("Arbiter").subscribe("listeditor/close_editor",function(){var T;for(T in f){var U=b("ge")(T);U&&Q(U,false)}});function S(T,U,V){__p&&__p();i[U]=V;var W=u[U];if(W){if(V)W.select();else W.deselect();return}var X=b("DOM").scry(T,"li.SubscribeMenuNotifyMeCheckbox");if(X.length!==0){var Y=X[0];b("CSS").conditionShow(Y,true);var Z=b("DOM").scry(T,"li.SubscribeMenuNotifyMeCheckboxSeparator");if(Z.length>0)b("CSS").conditionShow(Z[0],true);if(V)J(Y);else K(Y)}}function ga(T,U){var V={profile_id:U};b("Arbiter").inform("EnableNotifsForUser",V);new(b("AsyncRequest"))().setURI(s).setMethod("POST").setData({notifier_id:U,enable:true}).setErrorHandler(b("Arbiter").inform.bind(null,"EnableNotifsForUserFail",V)).send()}function ha(T,U){var V={profile_id:U};b("Arbiter").inform("DisableNotifsForUser",V);new(b("AsyncRequest"))().setURI(s).setMethod("POST").setData({notifier_id:U,enable:false}).setErrorHandler(b("Arbiter").inform.bind(null,"DisableNotifsForUserFail",V)).send()}var ia={init:function T(U,V,W){__p&&__p();var X=b("getOrCreateDOMID")(U);x[X]=W;if(!f[X])b("Event").listen(U,"click",function(Y){return z(U,f[X],W,Y.getTarget())});if(W===d&&t[V].length)R(U,V,t[V]);if(m[V])G(U,V);f[X]=V;b("CSS").conditionClass(U,"NonFriendSubscriptionMenu",!g[V]);b("CSS").conditionClass(U,"cannotSubscribe",!j[V]);b("CSS").conditionClass(U,"noSubscriptionLevels",k[V]&&!l[V]);b("CSS").conditionClass(U,"noSubscribeCheckbox",!g[V]&&!k[V]);P(U,V,h[V]);S(U,V,i[V]);b("Arbiter").subscribe(["FollowUser","FollowingUser","UnfollowUserFail"],function(Y,Z){if(Z.profile_id==V)P(U,V,true)}.bind(this));b("Arbiter").subscribe(["UnfollowUser","UnfollowingUser","FollowUserFail"],function(Y,Z){if(Z.profile_id==V){b("Arbiter").inform("SubMenu/Reset");P(U,V,false)}}.bind(this));b("Arbiter").subscribe(["EnableNotifsForUser","DisableNotifsForUserFail"],function(Y,Z){if(Z.profile_id==V)S(U,V,true)}.bind(this));b("Arbiter").subscribe(["DisableNotifsForUser","EnableNotifsForUserFail"],function(Y,Z){if(Z.profile_id==V)S(U,V,false)}.bind(this));b("Arbiter").subscribe("listeditor/friend_lists_changed",function(Y,Z){if(Z.notify_state){var $=Z.added_uid?Z.added_uid:Z.removed_uid;S(U,$,Z.notify_state.is_notified)}}.bind(this))},getSubscriptions:function T(U){return{level:m[U],custom_categories:n[U]}},registerTimelineNotifySelector:function T(U,V){__p&&__p();var W=U.getInitialMenu(),X=U.getContentRoot();W.forEachItem(function(Y){var Z=Y.getRoot();if(b("CSS").hasClass(Z,"SubscribeMenuNotifyMeCheckbox")){u[V]=Y;S(X,V,i[V])}});W.subscribe("itemclick",function(Y,Z){if(Z.item===u[V])A(X,V);return true})},toggleNotificationsOnJoin:function T(U,V){if(i[U]!==V)A(null,U)},setSubscriptions:function T(U,V,W,X,Y,Z,$,ja,ka,la,ma,na){__p&&__p();M(U,$+"");g[U]=V;h[U]=W;j[U]=X;k[U]=Y;l[U]=Z;o[U]=ka+"";n[U]=ja.map(String);p[U]=la.map(String);t[U]=na;i[U]=ma}};c.exports=a.EditSubscriptions||ia}),null);
__d("ProfileVideoWWWFrontendActionTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$ProfileVideoWWWFrontendActionTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$ProfileVideoWWWFrontendActionTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$ProfileVideoWWWFrontendActionTypedLogger1={};return this};h.prototype.updateData=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1=babelHelpers["extends"]({},this.$ProfileVideoWWWFrontendActionTypedLogger1,j);return this};h.prototype.setEvent=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.event=j;return this};h.prototype.setSessionID=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.session_id=j;return this};h.prototype.setUploadError=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.upload_error=j;return this};var i={event:true,session_id:true,upload_error:true};f.exports=h}),null);
__d("PagesComposerUnpublishedPostsStore",["ReactComposerStoreBase","PagesComposerActionsTypes"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j={isDraft:false,scheduledPublishTime:null,backdateConfig:null,isAdsPost:false,isReviewableBrandedContent:false,stopFeedDistributionDate:null,isOfferUpsellShown:false,isOfferUpsellAbandoned:false,offerConfig:null};h=babelHelpers.inherits(k,c("ReactComposerStoreBase"));i=h&&h.prototype;function k(){"use strict";__p&&__p();var l;i.constructor.call(this,function(){return Object.assign({},j)},function(m){__p&&__p();switch(m.type){case c("PagesComposerActionsTypes").BACKDATE:l&&l.$PagesComposerUnpublishedPostsStore1(m);break;case c("PagesComposerActionsTypes").SET_DRAFT:l&&l.$PagesComposerUnpublishedPostsStore2(m);break;case c("PagesComposerActionsTypes").SCHEDULE:l&&l.$PagesComposerUnpublishedPostsStore3(m);break;case c("PagesComposerActionsTypes").SET_ADS_POST:l&&l.$PagesComposerUnpublishedPostsStore4(m);break;case c("PagesComposerActionsTypes").SHOW_OFFER_UPSELL:l&&l.$PagesComposerUnpublishedPostsStore5(m);break;case c("PagesComposerActionsTypes").ABANDON_OFFER_UPSELL:l&&l.$PagesComposerUnpublishedPostsStore6(m);break;case c("PagesComposerActionsTypes").SET_IS_REVIEWABLE_BRANDED_CONTENT:l&&l.$PagesComposerUnpublishedPostsStore7(m);break;case c("PagesComposerActionsTypes").CLEAR_COMPOSER_DATA:l&&l.$PagesComposerUnpublishedPostsStore8(m);break}});l=this}k.prototype.getBackdateConfig=function(l){"use strict";return this.getComposerData(l).backdateConfig};k.prototype.getIsDraft=function(l){"use strict";return this.getComposerData(l).isDraft};k.prototype.getIsReviewableBrandedContent=function(l){"use strict";return this.getComposerData(l).isReviewableBrandedContent};k.prototype.getScheduledPublishTime=function(l){"use strict";return this.getComposerData(l).scheduledPublishTime};k.prototype.getStopFeedDistributionTime=function(l){"use strict";return this.getComposerData(l).stopFeedDistributionDate};k.prototype.getIsAdsPost=function(l){"use strict";return this.getComposerData(l).isAdsPost};k.prototype.getIsOfferUpsellShown=function(l){"use strict";return this.getComposerData(l).isOfferUpsellShown};k.prototype.getIsOfferUpsellAbandoned=function(l){"use strict";return this.getComposerData(l).isOfferUpsellAbandoned};k.prototype.getOfferConfig=function(l){"use strict";return this.getComposerData(l).offerConfig};k.prototype.$PagesComposerUnpublishedPostsStore1=function(l){"use strict";var m=this.getComposerData(l.composerID);m.backdateConfig={year:l.year,month:l.month,day:l.day,hideFromNewsFeed:l.hideFromNewsFeed}};k.prototype.$PagesComposerUnpublishedPostsStore3=function(l){"use strict";var m=this.getComposerData(l.composerID);m.scheduledPublishTime=l.scheduleDate;m.stopFeedDistributionDate=l.stopFeedDistributionDate};k.prototype.$PagesComposerUnpublishedPostsStore2=function(l){"use strict";var m=this.getComposerData(l.composerID);m.isDraft=true};k.prototype.$PagesComposerUnpublishedPostsStore4=function(l){"use strict";var m=this.getComposerData(l.composerID);m.isAdsPost=true};k.prototype.$PagesComposerUnpublishedPostsStore5=function(l){"use strict";var m=this.validateAction(l,["composerID","config"]),n=m[0],o=m[1],p=this.getComposerData(n);p.offerConfig=o;p.isOfferUpsellShown=true;this.emitChange(n)};k.prototype.$PagesComposerUnpublishedPostsStore6=function(l){"use strict";var m=this.getComposerData(l.composerID);m.isOfferUpsellAbandoned=true};k.prototype.$PagesComposerUnpublishedPostsStore7=function(l){"use strict";var m=this.getComposerData(l.composerID);m.isReviewableBrandedContent=true};k.prototype.$PagesComposerUnpublishedPostsStore8=function(l){"use strict";this.clearComposerData(l.composerID)};f.exports=new k()}),null);
__d("ReactComposerFocusStore",["ReactComposerFocusActionTypes","ReactComposerStoreBase"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("ReactComposerStoreBase"));i=h&&h.prototype;function j(){__p&&__p();var k=void 0;i.constructor.call(this,function(){return{focusConfig:{},isFocused:false}},function(l){__p&&__p();if(!k)return;switch(l.type){case c("ReactComposerFocusActionTypes").SUBSCRIBE:k.$ReactComposerFocusStore1(l.composerID,l.onFocusAcquiredCallback,l.onFocusLostCallback);k.emitChange(l.composerID);break;case c("ReactComposerFocusActionTypes").UNSUBSCRIBE:k.$ReactComposerFocusStore2(l.composerID);k.emitChange(l.composerID);break;case c("ReactComposerFocusActionTypes").FOCUS_ACQUIRED:k.$ReactComposerFocusStore3(l.composerID);k.emitChange(l.composerID);break;case c("ReactComposerFocusActionTypes").FOCUS_LOST:k.$ReactComposerFocusStore4(l.composerID);k.emitChange(l.composerID);break}});k=this}j.prototype.$ReactComposerFocusStore1=function(k,l,m){var n=this.getComposerData(k);n.focusConfig={onFocusAcquiredCallback:l,onFocusLostCallback:m}};j.prototype.$ReactComposerFocusStore2=function(k){var l=this.getComposerData(k);l.focusConfig={}};j.prototype.$ReactComposerFocusStore3=function(k){var l=this.getComposerData(k);if(l.focusConfig.onFocusAcquiredCallback)setTimeout(l.focusConfig.onFocusAcquiredCallback,0);l.isFocused=true};j.prototype.$ReactComposerFocusStore4=function(k){var l=this.getComposerData(k);if(l.focusConfig.onFocusLostCallback)setTimeout(l.focusConfig.onFocusLostCallback,0);l.isFocused=false};j.prototype.isComposerFocused=function(k){return this.getComposerData(k).isFocused};f.exports=new j()}),null);
__d("XAfterPartyWWWController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/ads/afterparty/www/",{page_id:{type:"Int",required:true},scrolling_offset:{type:"Int",defaultValue:0}})}),null);
__d("XUnpublishedPostSuccessController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/pages/unpublished_posts/post_success/",{type:{type:"String",required:true}})}),null);
__d("PagesComposer",["csx","cx","ActorURI","Arbiter","AsyncRequest","Bootloader","ReactComposerFocusStore","ComposerXMarauderLogger","ComposerXStore","DOM","PagesComposerUnpublishedPostsStore","Parent","ReloadPage","Run","XUnpublishedPostSuccessController","XAfterPartyWWWController","$","getObjectValues","goURI"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=500,k=20,l=58,m=void 0,n=void 0;function o(){c("ComposerXMarauderLogger").logCompleted(m.id)}function p(s){__p&&__p();if(s.hidePost){var t=c("ComposerXStore").getAllForComposer(m.id);if(!c("getObjectValues")(t).length){var u=null;if(c("PagesComposerUnpublishedPostsStore").getIsDraft(m.id))u="draft";if(c("PagesComposerUnpublishedPostsStore").getScheduledPublishTime(m.id))u="scheduled";if(u){var v=c("XUnpublishedPostSuccessController").getURIBuilder().setString("type",u).getURI();v=c("ActorURI").create(v,n);new(c("AsyncRequest"))().setURI(v).send()}}o();return}if(s.redirect){var t=c("ComposerXStore").getAllForComposer(m.id);c("getObjectValues")(t).forEach(function(y){if(y.reset)y.reset(y)});c("goURI")(s.redirect);o();return}if(!s.streamStory){c("ReloadPage").now();return}if(s.backdatedTime){c("Bootloader").loadModules(["PagesStoryPublisher"],function(y){y.publish(s)},"PagesComposer");o();return}var w=r.renderStory(m,s.streamStory);c("Arbiter").inform("TimelineComposer/on_after_publish",w,c("Arbiter").BEHAVIOR_PERSISTENT);if(n){var x=c("XAfterPartyWWWController").getURIBuilder().setInt("page_id",n);q(x,0)}o()}function q(s,t){if(!c("ReactComposerFocusStore").isComposerFocused(m.id)){if(t>0)s.setInt("scrolling_offset",l);new(c("AsyncRequest"))().setURI(s.getURI()).send()}else if(t<k)setTimeout(q.bind(this,s,t+1),j)}var r={init:function s(t,u){m=c("$")(t);n=u;var v=c("Arbiter").subscribe("composer/publish",function(event,w){if(w.composer_id===m.id)p(w)});c("Run").onLeave(v.unsubscribe.bind(v))},renderStory:function s(t,u){var v=c("Parent").bySelector(t,"#pagelet_timeline_main_column");if(!v)return;var w=c("DOM").scry(v,"._5sem")[0],x=c("DOM").setContent(w,u)[0];c("Bootloader").loadModules(["Animation"],function(y){new y(x).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(y.ease.both).go()},"PagesComposer");return x},replaceByID:function s(t,u){c("DOM").replace(c("$")(t),u)}};f.exports=b.PagesComposer||r}),null);
__d("StoryProfile.react",["cx","BackgroundImage.react","FBProfilePhotoShadow.react","Image.react","ImageBlock.react","InlineBlock.react","Link.react","PrivacyConst","React","XUIGrayText.react","XUIText.react","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){__p&&__p();var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$StoryProfile1=function(){__p&&__p();var r=null;if(this.props.privacyIndicator)r=this.props.privacyIndicator;else if(this.props.privacySetting){var s=this.props.privacySetting==c("PrivacyConst").BaseValue.EVERYONE,t=this.props.privacySetting==c("PrivacyConst").BaseValue.ALL_FRIENDS;r=c("React").createElement(c("BackgroundImage.react"),{width:13,height:12,"data-hover":"tooltip","data-tooltip-content":this.props.privacyTooltip,className:"_14g-"+(s?" _14g_":"")+(t?" _5qhp":"")+(!t&&!s?" _14h0":"")})}if(!r)return null;return c("React").createElement("span",null,c("React").createElement(c("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},"\xa0\xb7\xa0"),r)}.bind(this),this.$StoryProfile2=function(){__p&&__p();var r,s;if(this.props.profileURL){var t;if(this.props.openProfileURLInNewPage)t="_blank";s="bold";r=c("React").createElement(c("Link.react"),{href:this.props.profileURL,target:t},this.props.username)}else r=this.props.username;if(this.props.description)return c("React").createElement("div",null,c("React").createElement(c("XUIText.react"),{className:"_14gz",size:"header4",weight:s},r)," ",this.props.description);else return c("React").createElement(c("XUIText.react"),{className:"_14gz",size:"header4",weight:s,display:"block"},r)}.bind(this),this.$StoryProfile3=function(){if(this.props.additionalLinks)return c("React").createElement(c("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},this.props.additionalLinks.map(function(r,s){return c("React").createElement("span",{key:s},"\xa0\xb7\xa0",c("React").createElement(c("Link.react"),{href:r.URL,target:"_blank"},r.text))}));return null}.bind(this),n}l.prototype.render=function(){"use strict";return c("React").createElement(c("ImageBlock.react"),{spacing:"medium",className:c("joinClasses")(this.props.className,"_56-3")},this.props.profilePicture?c("React").createElement(c("FBProfilePhotoShadow.react"),null,c("React").createElement(c("Image.react"),{className:"_56-4",src:this.props.profilePicture})):c("React").createElement("span",null),c("React").createElement(c("InlineBlock.react"),{alignv:"middle",height:40,fullWidth:true},this.$StoryProfile2(),c("React").createElement("div",null,c("React").createElement(c("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},this.props.uploadTime),this.$StoryProfile1(),this.$StoryProfile3())))};l.propTypes={privacySetting:k.number,privacyIndicator:k.object,profilePicture:k.string,privacyTooltip:k.node,username:k.string.isRequired,uploadTime:k.node.isRequired,profileURL:k.string,openProfileURLInNewPage:k.bool,additionalLinks:k.arrayOf(k.shape({URL:k.string,text:k.node})),description:k.node};l.defaultProps={openProfileURLInNewPage:false};f.exports=l}),null);
__d("glyph",[],(function a(b,c,d,e,f,g){f.exports=function h(i){throw new Error("glyph: Unexpected glyph call.")}}),null);
__d("XVideoGenerateStoryController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/video/generate_story/",{video_id:{type:"Int"},feed_location:{type:"Enum",enumType:0},timeline_identifier:{type:"String"}})}),null);