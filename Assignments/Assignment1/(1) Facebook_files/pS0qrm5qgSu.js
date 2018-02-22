if (self.CavalryLogger) { CavalryLogger.start_js(["aFvEW"]); }

__d("AppUseTrackerLogger",["AsyncRequest","PageTransitions","Run","isInIframe","pageID"],(function a(b,c,d,e,f,g){__p&&__p();function h(){if(!h.instance)h.instance=this;return h.instance}Object.assign(h,{setup:function i(j,k,l,m,n,o){new h().init(j,k,l,m,n,o)}});Object.assign(h.prototype,{instance:null,endpoint:"/ajax/apps/usage_update.php",heartbeat_endpoint:"/ajax/apps/heartbeat.php",INITIAL_PING:0,ONGOING_PING:1,DISCOVERY_PING:2,ENDING_PING:3,_application_id:0,_is_game:0,_createRequest:function i(j){return new(c("AsyncRequest"))().setURI(this.endpoint).setMethod("POST").setData({app:this._application_id,is_game:this._is_game,type:j,condition:this._signal_on_page_transition})},_createHeartbeatRequest:function i(){return new(c("AsyncRequest"))().setURI(this.heartbeat_endpoint).setMethod("POST").setData({app:this._application_id,page_id:c("pageID")})},init:function i(j,k,l,m,n,o){__p&&__p();if(c("isInIframe")())return;this.cleanup();c("PageTransitions").registerHandler(this.catchPageTransition.bind(this));this._application_id=j;this._is_game=k;if(o){var p=function(){return this._createHeartbeatRequest().send()}.bind(this);p();this._timers.push(setInterval(p,o))}this._timers.push(setTimeout(function(){this._createRequest(this.INITIAL_PING).send();var q=this._createRequest(this.ONGOING_PING);this._timers.push(setInterval(q.send.bind(q),m))}.bind(this),l));if(n)this._timers.push(setTimeout(function(){this._createRequest(this.DISCOVERY_PING).send()}.bind(this),n));c("Run").onBeforeUnload(this.onBeforeUnload.bind(this))},catchPageTransition:function i(j){this._createRequest(this.ENDING_PING).send();this.cleanup()},onBeforeUnload:function i(){this._createRequest(this.ENDING_PING).send();this.cleanup()},cleanup:function i(){if(this._timers)for(var j=0;j<this._timers.length;j++)clearInterval(this._timers[j]);this._timers=[]}});f.exports=h}),null);
__d("NotificationTracking",["invariant"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={},j={getEncodedTrackingData:function k(l,m){return this._getTrackingInfo(l,m).encoded},getTrackingString:function k(l,m){return this._getTrackingInfo(l,m).raw},_getTrackingInfo:function k(l,m){var n=""+l.alert_id,o=i[n];if(o&&o.row===m)return o;var p=this._getEncodedTrackingDataWithRow(l,m);i[n]={row:m,encoded:p,raw:JSON.stringify(p)};return i[n]},_getTrackingAsObject:function k(l){var m=null,n=null;if(l.tracking)try{m=JSON.parse(l.tracking)}catch(o){n=o}if(m===null||n!==null||typeof m!=="object")h(0);return m},_getEncodedTrackingDataWithRow:function k(l,m){var n=this._getTrackingAsObject(l);if(m!="undefined"&&typeof m==="number")return babelHelpers["extends"]({},n,{row:m});return n}};f.exports=j}),null);
__d("NotificationAttachment.react",["cx","Image.react","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").PureComponent);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.image;if(!l)return c("React").createElement("span",null);return c("React").createElement(c("Image.react"),{src:l.uri,className:"_42td","aria-hidden":true})};function k(){i.apply(this,arguments)}f.exports=k}),null);
__d("Fragment.react",["React"],(function a(b,c,d,e,f,g){"use strict";function h(i){var j=i.children;return j}f.exports=h}),null);
__d("NotificationFooter.react",["cx","BizSiteIdentifier.brands","Fragment.react","Image.react","ImageBlock.react","React","Timestamp.react"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("BizSiteIdentifier.brands").isBizSite();i=babelHelpers.inherits(l,c("React").PureComponent);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=m.icon,o=m.metadata,p=m.shortenTimestamp,q=m.timestamp,r="_33f"+(k?" _2g48":""),s=n?c("React").createElement(c("Image.react"),{className:"_10cu",src:n.uri}):null,t=c("React").createElement(c("Timestamp.react"),babelHelpers["extends"]({className:"_33g",shorten:p},q));if(o)if(s)return c("React").createElement(c("ImageBlock.react"),{className:r},s,c("React").createElement(c("Fragment.react"),null,o," \xb7 ",t));else return c("React").createElement("div",{className:r},o," \xb7 ",t);else if(s)return c("React").createElement(c("ImageBlock.react"),{className:r},s,t);else return c("React").createElement("div",{className:r},t)};function l(){i.apply(this,arguments)}f.exports=l}),null);
__d("NotificationListItemChevron.react",["cx","AbstractPopoverButton.react","Banzai","BanzaiLogger","NotificationTokens","NotifTestIDs","PopoverMenu.react","QE2Logger","React","ReactXUIMenu","idx","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("ReactXUIMenu").Item;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){__p&&__p();var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$NotificationListItemChevron1=function(){if(this.props.onHide)this.props.onHide();this.$NotificationListItemChevron2("close")}.bind(this),this.$NotificationListItemChevron3=function(){if(this.props.onShow)this.props.onShow();if(this.props.logMenuExposure)c("QE2Logger").logExposureForUser("pages_growth_optout_button");this.$NotificationListItemChevron2("open");var r={notif_type:this.props.notif_type};c("Banzai").post("notif_chevron_on_click",r)}.bind(this),n}l.prototype.$NotificationListItemChevron2=function(m){var n={event:m,notif_type:this.props.notif_type,notif_id:parseInt(c("NotificationTokens").untokenizeIDs([this.props.alert_id])[0],10)};c("BanzaiLogger").log("NotifJewelMenuLoggerConfig",n)};l.prototype.$NotificationListItemChevron4=function(){__p&&__p();var m=this.props.notificationOptions,n=m&&m.map(function(o){var p,q,r=(p=o)!=null?(p=p.option_display)!=null?(p=p.text)!=null?p.text:p:p:p;if(r==null)return null;var s=o.server_action||"",t=((q=o)!=null?(q=q.client_info)!=null?q.action_type:q:q)||"";return c("React").createElement(k,{onclick:function(){return this.props.onMenuOptionClick(o)}.bind(this),key:t+":"+s},c("React").createElement("div",{className:"_18qh"},r))}.bind(this)).filter(function(o){return o!=null});if(n==null||n.length===0)return null;return c("React").createElement(c("ReactXUIMenu"),null,n)};l.prototype.render=function(){var m=this.$NotificationListItemChevron4();if(!m)return null;var n={button:c("React").createElement("a",{href:"#","aria-label":"Notification options",className:"_1_0d"})},o=c("React").createElement(c("PopoverMenu.react"),{"data-testid":c("NotifTestIDs").CHEVRON,alignh:"right",menu:m,className:c("joinClasses")(this.props.className,"_1_0c"),disableArrowKeyActivation:true,onShow:this.$NotificationListItemChevron3,onHide:this.$NotificationListItemChevron1},c("React").createElement(c("AbstractPopoverButton.react"),{config:n,haschevron:false,image:null,label:null}));return o};f.exports=l}),null);
__d("FlexibleBlock.react",["cx","invariant","LeftRight.react","React","keyMirror"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k,l=c("keyMirror")({left:true,right:true});function m(o){o.flex&&o.flex in n.FLEX||i(0);o.children&&o.children.length===2||i(0)}j=babelHelpers.inherits(n,c("React").Component);k=j&&j.prototype;n.prototype.render=function(){"use strict";__p&&__p();m(this.props);var o,p=this.props,q=p.flex,r=babelHelpers.objectWithoutProperties(p,["flex"]),s=this.props.children[0],t=this.props.children[1],u=q==l.left,v;if(u){v=s;o=c("LeftRight.react").DIRECTION.right}else{v=t;o=c("LeftRight.react").DIRECTION.left}var w=c("React").createElement("div",{className:"_42ef"},v);return c("React").createElement(c("LeftRight.react"),babelHelpers["extends"]({},r,{direction:o}),u?w:this.props.children[0],u?this.props.children[1]:w)};function n(){"use strict";j.apply(this,arguments)}n.FLEX=l;f.exports=n}),null);
__d("NotificationThumbnail.react",["Image.react","React","RoundImage.react","SutroGatingConfig"],(function a(b,c,d,e,f,g){"use strict";var h=c("SutroGatingConfig").avatar;function i(j){if(h.has_rounded_avatars)return c("React").createElement(c("RoundImage.react"),j);else return c("React").createElement(c("Image.react"),j)}f.exports=i}),null);
__d("NotificationListItemContents.react",["cx","ix","BizSiteIdentifier.brands","FlexibleBlock.react","ImageBlock.react","NotificationAttachment.react","NotificationFooter.react","NotificationInterpolator","NotificationThumbnail.react","React","TextWithEntities.react"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("BizSiteIdentifier.brands").isBizSite(),m=i("97000");j=babelHelpers.inherits(n,c("React").Component);k=j&&j.prototype;n.prototype.$NotificationListItemContents1=function(){var o=this.props.notification.title;if(!o)return null;return c("React").createElement(c("TextWithEntities.react"),babelHelpers["extends"]({interpolator:c("NotificationInterpolator")},o,{renderEmoji:true,renderEmoticons:true}))};n.prototype.render=function(){var o=this.$NotificationListItemContents1(),p=this.props,q=p.hideIcon,r=p.isNotifsPage,s=p.noPhotoPreviews,t=p.shortenTimestamp,u=p.notification,v=u.icon,w=u.previewImage,x=u.thumbnail,y=u.timestamp,z=c("React").createElement(c("NotificationFooter.react"),{icon:q?null:v,shortenTimestamp:t,timestamp:y});return c("React").createElement(c("ImageBlock.react"),null,c("React").createElement(c("NotificationThumbnail.react"),{alt:"",className:(!r?"_62bh":"")+(r?" _62bi":""),src:x&&x.uri||m}),c("React").createElement(c("FlexibleBlock.react"),{flex:c("FlexibleBlock.react").FLEX.left},c("React").createElement("div",{className:"_4l_v"},o,z),s?null:c("React").createElement(c("NotificationAttachment.react"),{image:w})))};function n(){j.apply(this,arguments)}f.exports=n}),null);
__d("NotificationListItemOptionConfirmation.react",["cx","fbt","List.react","NotificationInterpolator","React","TextWithEntities.react","idx"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(k){var l=k.notificationOptions,m=k.undoText,n=k.undoToken;return c("React").createElement(c("React").Fragment,null,m!=null||n!=null?c("React").createElement("div",{className:"_4ai"},m!=null?c("React").createElement(c("TextWithEntities.react"),{interpolator:c("NotificationInterpolator"),ranges:m.ranges,aggregatedranges:m.aggregated_ranges,text:m.text}):null,n!=null?c("React").createElement("a",{href:"#",onClick:function o(){return k.onUndoClick()},className:"mls"},i._("Undo")):null):null,c("React").createElement(c("List.react"),{border:"none",className:"_1v4c",spacing:"small"},l?l.map(function(o){var p,q,r=(p=o)!=null?(p=p.option_display)!=null?(p=p.text)!=null?p.text:p:p:p;if(r==null)return null;var s=o.server_action||"",t=((q=o)!=null?(q=q.client_info)!=null?q.action_type:q:q)||"";return c("React").createElement("li",{key:t+":"+s},c("React").createElement("a",{className:"mls",href:"#",onClick:function u(){return k.onMenuOptionClick(o)}},r))}):null))}f.exports=j}),null);
__d("NotificationListItemReadToggle.react",["cx","fbt","React","ReadToggle.react"],(function a(b,c,d,e,f,g,h,i){"use strict";function j(k){var l=k.isRead,m=k.canMarkUnread,n=k.onToggleClick;return c("React").createElement(c("ReadToggle.react"),{className:"_55m9 _55ma",isRead:l,onClick:n,readLabel:m?i._("Mark as Unread"):i._("Read"),unreadLabel:i._("Mark as Read")})}f.exports=j}),null);
__d("NotificationListItemBase.react",["csx","cx","invariant","AsyncDialog","AsyncResponse","BizSiteIdentifier.brands","Bootloader","LogicalGridCell.react","LogicalGridRow.react","NotificationConstants","NotificationListConfig","NotificationListItemChevron.react","NotificationListItemContents.react","NotificationListItemOptionConfirmation.react","NotificationListItemReadToggle.react","NotificationTracking","NotificationUpdates","NotificationUserActions","NotifTestIDs","Parent","React","ReactDOM","Style","URI","compactArray","createObjectFrom","idx"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=c("BizSiteIdentifier.brands").isBizSite(),n=-1;function o(q){if(q.length===0)return;var r=q[0],s=r.description,t=r.is_silent,u=r.is_transient,v=r.message,w=new(c("AsyncResponse"))();w.errorSummary=s;w.errorDescription=v;w.silentError=t;w.transientError=u;c("AsyncResponse").defaultErrorHandler(w)}k=babelHelpers.inherits(p,c("React").Component);l=k&&k.prototype;function p(){__p&&__p();var q,r;"use strict";for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.prefetched=false,this.isLiveVideo=null,this.$NotificationListItemBase1=false,this.state={actionsTaken:[],sendingFeedback:false},this.$NotificationListItemBase4=function(){c("NotificationUserActions").setNextIsFromReadButton(true);if(this.props.isRead){if(this.props.canMarkUnread)if(this.props.onMarkItemUnread)this.props.onMarkItemUnread()}else if(this.props.onMarkItemRead)this.props.onMarkItemRead()}.bind(this),this.$NotificationListItemBase7=function(v){__p&&__p();var w,x,y=this,z=(w=v)!=null?(w=w.client_info)!=null?w.action_type:w:w;if(z==null)return;if(z==="REPORT_BUG"){var A=new(c("URI"))("/ajax/bugs/employee_report").setQueryData({client_notifs:JSON.stringify(this.props.getDebugData()),notif_alert_id:this.$NotificationListItemBase3()});c("AsyncDialog").bootstrap(A.toString(),null,"dialog")}else if(z==="OPEN_IN_INSPECTOR"){var B,C=(B=v)!=null?(B=B.option_display)!=null?(B=B.subtext)!=null?B.text:B:B:B;C!=null||j(0);window.open(C,"_blank")}else{var x=function(){__p&&__p();var D=v.server_action;if(D==null)return{v:void 0};y.setState({sendingFeedback:true});c("NotificationUserActions").sendNotifOption(D).done(function(E){if(this.$NotificationListItemBase1)return;this.setState(function(F){var G,H,I,J=(G=E)!=null?(G=G.notif_option_action)!=null?(G=G.notification)!=null?(G=G.notif_option_sets)!=null?(G=G.edges)!=null?(G=G[0])!=null?(G=G.node)!=null?(G=G.notif_options)!=null?G.edges:G:G:G:G:G:G:G:G,K=babelHelpers["extends"]({},F,{actionsTaken:F.actionsTaken.concat([{actionToken:D,type:z,nextNotificationOptions:J&&c("compactArray")(J.map(function(L){var M=L.node;return M})),undoText:(H=v)!=null?(H=H.option_display)!=null?H.undo_text:H:H,undoToken:(I=v)!=null?(I=I.client_info)!=null?I.undo_server_action:I:I}]),sendingFeedback:false});c("NotificationUpdates").handleUpdate(c("NotificationConstants").PayloadSourceType.USER_ACTION,{hiddenState:c("createObjectFrom")([this.$NotificationListItemBase3()],this.$NotificationListItemBase10(K))});return K}.bind(this))}.bind(y),y.$NotificationListItemBase12)}();if(typeof x==="object")return x.v}}.bind(this),this.$NotificationListItemBase13=function(){__p&&__p();var v=this.$NotificationListItemBase3();this.setState({sendingFeedback:true});var w=this.state.actionsTaken[this.state.actionsTaken.length-1];if(w&&w.undoToken!=null)c("NotificationUserActions").sendNotifOption(w.undoToken).done(function(x){if(this.$NotificationListItemBase1)return;this.setState(function(y){var z=babelHelpers["extends"]({},y,{actionsTaken:y.actionsTaken.slice(0,this.state.actionsTaken.length-1),sendingFeedback:false});c("NotificationUpdates").handleUpdate(c("NotificationConstants").PayloadSourceType.USER_ACTION,{hiddenState:c("createObjectFrom")([v],this.$NotificationListItemBase10(z))});return z}.bind(this))}.bind(this),this.$NotificationListItemBase12)}.bind(this),this.$NotificationListItemBase12=function(v){var w=v.errors;if(this.$NotificationListItemBase1)return;o(w);this.setState({sendingFeedback:false})}.bind(this),r}p.prototype.$NotificationListItemBase3=function(){"use strict";return this.props.notification.alert_id};p.prototype.$NotificationListItemBase5=function(){"use strict";var q=this.props,r=q.canMarkUnread,s=q.isRead;return c("React").createElement(c("NotificationListItemReadToggle.react"),{canMarkUnread:r,isRead:!!s,onToggleClick:this.$NotificationListItemBase4})};p.prototype.$NotificationListItemBase6=function(){var q;"use strict";var r=this.props,s=r.onChevronHide,t=r.onChevronShow,u=r.notification,v=u.alert_id,w=u.notif_option_sets,x=u.notif_type,y=u.renderer_data,z=false;if(y&&(y.__typename==="FallbackNotificationRendererData"||y.__typename==="LiveVideoNotificationRendererData")&&y.should_log_menu_exposure!=null)z=y.should_log_menu_exposure;var A=(q=w)!=null?(q=q.edges)!=null?(q=q[0])!=null?(q=q.node)!=null?(q=q.notif_options)!=null?q.edges:q:q:q:q:q;return c("React").createElement(c("NotificationListItemChevron.react"),{alert_id:v,className:"_55m9",notif_type:x,notificationOptions:A&&c("compactArray")(A.map(function(B){var C=B.node;return C})),onHide:s,onMenuOptionClick:this.$NotificationListItemBase7,onShow:t,logMenuExposure:z})};p.prototype.shouldComponentUpdate=function(q,r){"use strict";var s=this.props.visible!==q.visible||this.props.isRead!==q.isRead||this.props.isSelected!==q.isSelected||this.props.notification.timestamp!==q.notification.timestamp||this.state.actionsTaken.length!==r.actionsTaken.length||this.state.sendingFeedback!==r.sendingFeedback;return s||!!this.props.hasCustomForeground&&this.props.paused!==q.paused};p.prototype.componentWillUpdate=function(q){"use strict";if(!this.$NotificationListItemBase2||!q.isSelected||this.props.isSelected)return;var r=c("ReactDOM").findDOMNode(this.$NotificationListItemBase2);r&&r.scrollIntoViewIfNeeded&&r.scrollIntoViewIfNeeded(false)};p.prototype.componentWillReceiveProps=function(q){"use strict";if(this.props.paused&&!q.paused&&!this.props.visible&&this.state.actionsTaken.length>0)this.setState({actionsTaken:[]})};p.prototype.componentDidMount=function(){"use strict";if(this.$NotificationListItemBase8())c("Bootloader").loadModules(["VideoPlayerMetaData"],function(q){q.genVideoData(this.$NotificationListItemBase9()).done()}.bind(this),"NotificationListItemBase.react")};p.prototype.componentDidUpdate=function(){"use strict";if(this.props.enableHubView&&this.props.isSelected&&this.$NotificationListItemBase2){var q=c("ReactDOM").findDOMNode(this.$NotificationListItemBase2);if(q&&typeof q.focus=="function")q.focus()}};p.prototype.$NotificationListItemBase10=function(){var q=arguments.length<=0||arguments[0]===undefined?this.state:arguments[0];"use strict";return q.actionsTaken.some(function(r){return r.type==="HIDE"})};p.prototype.$NotificationListItemBase11=function(){"use strict";var q=c("ReactDOM").findDOMNode(this);if(!q)return false;var r=c("Parent").bySelector(q,".__tw"),s=r?r.parentNode:null;return s?c("Style").get(s,"display")!=="none":false};p.prototype.$NotificationListItemBase14=function(q){"use strict";if(this.state.actionsTaken.length>=2)return null;var r={};this.state.actionsTaken.forEach(function(s){r[s.actionToken]=true});return q.filter(function(s){var t=s.server_action;return t==null||r[t]!==true})};p.prototype.$NotificationListItemBase9=function(){"use strict";var q=c("NotificationTracking").getEncodedTrackingData(this.props.notification,this.props.row);return q.content_id||null};p.prototype.$NotificationListItemBase8=function(){"use strict";if(this.isLiveVideo===null){var q=c("NotificationTracking").getTrackingString(this.props.notification,this.props.row);this.isLiveVideo=q.indexOf("live_video")!==-1}return!!this.isLiveVideo};p.prototype.render=function(){"use strict";__p&&__p();if(!this.props.visible&&!this.$NotificationListItemBase10())return c("React").createElement("li",{className:"_4_62"});var q="_33c"+(c("NotificationListConfig").isWork?" _1rqj":"")+(!this.props.isRead?" jewelItemNew":"")+(this.state.sendingFeedback?" _4m8s":"")+(this.props.hasCustomForeground?" _3u5n":"")+(this.props.isSelected?" _u-o":""),r=c("NotificationTracking").getTrackingString(this.props.notification,this.props.row),s=this.props.rowIndex;if(this.state.actionsTaken.length>0){var t=this.state.actionsTaken[this.state.actionsTaken.length-1];return c("React").createElement("li",{className:q,"data-gt":r,"data-testid":c("NotifTestIDs").NOTIF_LIST_ITEM},c("React").createElement(c("LogicalGridRow.react"),{className:"_dre",rowIndex:s,component:c("React").createElement("div",null)},c("React").createElement(c("LogicalGridCell.react"),{columnIndex:0,component:c("React").createElement("div",null)},c("React").createElement(c("NotificationListItemOptionConfirmation.react"),{notificationOptions:t.nextNotificationOptions?this.$NotificationListItemBase14(t.nextNotificationOptions):null,onUndoClick:this.$NotificationListItemBase13,onMenuOptionClick:this.$NotificationListItemBase7,undoText:t.undoText,undoToken:t.undoToken}))))}var u=c("React").createElement(c("NotificationListItemContents.react"),this.props),v=this.props.renderLink(u);return c("React").createElement("li",{className:q,"data-gt":r,"data-alert-id":this.$NotificationListItemBase3(),"data-testid":c("NotifTestIDs").NOTIF_LIST_ITEM},c("React").createElement(c("LogicalGridRow.react"),{className:"_dre anchorContainer",rowIndex:s,component:c("React").createElement("div",null)},c("React").createElement(c("LogicalGridCell.react"),{columnIndex:0,component:c("React").createElement("div",null)},v),c("React").createElement("ul",{className:"_55mc"},c("React").createElement(c("LogicalGridCell.react"),{columnIndex:1,component:c("React").createElement("li",{className:"_h_c"})},this.$NotificationListItemBase5()),c("React").createElement(c("LogicalGridCell.react"),{columnIndex:2,component:c("React").createElement("li",{className:"_h_d"}),disableFocusRecovery:true},this.$NotificationListItemBase6()))))};f.exports=p}),null);
__d("GiftCredits",["AsyncRequest","Dialog","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h={dialog:null,callback:null,purchaseLock:false,purchaseLockExpiryThreshold:5e3,purchaseLockTimeoutId:null,getPurchaseCreditPrompt:function i(j,k,l,m){h.main(j,null,null,null,l,null,null,null,"BuyCredits",{},m)},redeemGiftcard:function i(j,k,l){var m=new(c("URI"))(document.location).setPath("/giftcards").toString();h.main(j,null,null,m,null,null,null,null,k,{},l)},getPrompt:function i(j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){h.main(j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G)},main:function i(j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){if(h.isPurchaseLocked())return false;h.setPurchaseLock(true);var H={_path:"pay",method:"pay",display:"async",app_id:j,receiver:k,api_key:p,credits_purchase:w,action:r,next:m,dev_purchase_params:JSON.stringify(s),additional_params:JSON.stringify(t),order_info:JSON.stringify(l),product:u,package_id:v,request_id:x,sdk:y,quantity:z,quantity_min:A,quantity_max:B,test_currency:C,pricepoint_id:D,user:E,user_hash:F,ingame_gift_data:G},I=new(c("AsyncRequest"))().setURI("/fbml/ajax/dialog/").setData(H).setMethod("GET").setReadOnly(true).setStatusElement("commerce_get_more_loading");h.callback=n;h.dialog=new(c("Dialog"))().setAsync(I).setModal(true).setCloseHandler(function(J){h.setPurchaseLock(false);n(J)}).show()},isPurchaseLocked:function i(){return h.purchaseLock},setPurchaseLock:function i(j){h.purchaseLock=j;if(j)h.purchaseLockTimeoutId=setTimeout(function(){h.setPurchaseLock(false)},h.purchaseLockExpiryThreshold);else clearTimeout(h.purchaseLockTimeoutId);return true}};f.exports=h}),null);
__d("legacy:giftcredits",["GiftCredits"],(function a(b,c,d,e,f,g){b.GiftCredits=c("GiftCredits")}),3);
__d("TimePlayingEnum",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({FIVE_SECONDS:"five_seconds",TEN_SECONDS:"ten_seconds",THIRTY_SECONDS:"thirty_seconds",ONE_MINUTE:"one_minute",TWO_MINUTES:"two_minutes",FIVE_MINUTES:"five_minutes"})}),null);
__d("CanvasActivityLogger",["Event","ScriptPath","Visibility","clickRefAction","getActiveElement","setIntervalAcrossTransitions","$","Banzai","TimePlayingEnum"],(function a(b,c,d,e,f,g){__p&&__p();var h=1e3,i=false,j=false,k=false,l=false,m=null,n=null,o=null,p=0,q=0,r=0,s={5:c("TimePlayingEnum").FIVE_SECONDS,10:c("TimePlayingEnum").TEN_SECONDS,30:c("TimePlayingEnum").THIRTY_SECONDS,60:c("TimePlayingEnum").ONE_MINUTE,120:c("TimePlayingEnum").TWO_MINUTES,300:c("TimePlayingEnum").FIVE_MINUTES},t={CANVAS_ACTIVE:"active",CANVAS_INACTIVE:"inactive"},u=t.CANVAS_INACTIVE;function v(){return l&&k&&(i||j)}function w(){__p&&__p();if(u==t.CANVAS_ACTIVE&&!v()){u=t.CANVAS_INACTIVE;var A=Date.now()-n;c("ScriptPath").closeOverlayView("canvas",n?{ms_since_open:A}:null);q+=A;for(var B in s)if(Object.prototype.hasOwnProperty.call(s,B)&&q>B*h){var C=s[B];c("Banzai").post("canvas_playing_game",{played:C,app_id:r});delete s[B]}if(Date.now()-o>60*h){var D=A+p;c("Banzai").post("canvas_time_spent",[D,r]);o=Date.now();p=0}else p=n?A+p:p}else if(u==t.CANVAS_INACTIVE&&v()){u=t.CANVAS_ACTIVE;n=Date.now();if(!o)o=Date.now();c("ScriptPath").openOverlayView("canvas")}}c("Banzai").subscribe(c("Banzai").SHUTDOWN,function(){if(v())c("ScriptPath").closeOverlayView("canvas",n?{ms_since_open:Date.now()-n}:null)});function x(A){__p&&__p();c("clickRefAction")("canvas",m,A,"FORCE").set_namespace("canvas");switch(A.type){case"beforeunload":l=false;i=false;j=false;break;case"visible":l=true;break;case"hidden":l=false;break;case"mouseover":j=true;break;case"mouseout":j=false;break;case"focus":case"blur":i=c("getActiveElement")()==document.getElementById("iframe_canvas");break;default:break}w()}function y(A){var B=document.createEvent("FocusEvent");B.initEvent(A,true,true);return B}var z={trackState:function A(B,C){__p&&__p();r=C;l=!c("Visibility").isHidden();k=document.hasFocus();i=c("getActiveElement")()==document.getElementById("iframe_canvas");j=B.querySelector(":hover")!==null;w();c("Event").listen(B,"mouseover",x);c("Event").listen(B,"mouseout",x);c("Event").listen(window,"blur",x);c("Event").listen(window,"focus",x);c("Event").listen(window,"beforeunload",x);c("Visibility").addListener("hidden",function(){return x(y("hidden"))});c("Visibility").addListener("visible",function(){return x(y("visible"))});c("setIntervalAcrossTransitions")(function(){k=document.hasFocus();w()},h)}};f.exports=z}),null);
__d("CanvasResizer",["createArrayFromMixed","CSS","DOMEventListener","Vector"],(function a(b,c,d,e,f,g){__p&&__p();var h;function i(){__p&&__p();var k,l=document.documentElement;if(window.innerHeight)k=window.innerHeight;else if(l&&l.clientHeight)k=l.clientHeight;else k=document.body.clientHeight;for(var m=0;m<h.length;m++){var n=h[m];if(!c("CSS").hasClass(n,"noresize")){var o=c("Vector").getElementPosition(n,"document").y,p=k-o;n.style.height=p/(h.length-m)+"px"}}}c("DOMEventListener").add(window,"resize",i);var j={smartSizingFrameAdded:function k(){h=[];var l=c("createArrayFromMixed")(document.getElementsByTagName("iframe"));l.forEach(function(m){if(c("CSS").hasClass(m,"smart_sizing_iframe")&&!c("CSS").hasClass(m,"noresize")){c("CSS").removeClass(m,"canvas_iframe_util");h.push(m)}});i()}};f.exports=j}),null);