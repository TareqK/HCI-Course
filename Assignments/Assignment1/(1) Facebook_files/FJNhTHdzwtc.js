if (self.CavalryLogger) { CavalryLogger.start_js(["tm9El"]); }

__d("FeedStoryCategory",[],(function a(b,c,d,e,f,g){f.exports={UNKNOWN:0,ORGANIC:1,ENGAGEMENT:2,FIXED_POSITION:3,PROMOTION:4,SPONSORED:5}}),null);
__d("AdAllocationIntegrityGapsInfo",["FeedStoryCategory"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this.story_category=i;this.dist_to_top=-1;this.dist_to_fixed=-1;this.dist_to_promo=-1;this.dist_to_sponsored=-1;this.dist_to_engagement=-1}h.prototype.setDistToTop=function(i){"use strict";this.dist_to_top=i};h.prototype.setDistIfAbsent=function(i,j){"use strict";__p&&__p();if(j<0||i===c("FeedStoryCategory").UNKNOWN||i===c("FeedStoryCategory").ORGANIC)return;switch(i){case c("FeedStoryCategory").ENGAGEMENT:this.dist_to_engagement=this.$AdAllocationIntegrityGapsInfo1(j,this.dist_to_engagement);break;case c("FeedStoryCategory").FIXED_POSITION:this.dist_to_fixed=this.$AdAllocationIntegrityGapsInfo1(j,this.dist_to_fixed);break;case c("FeedStoryCategory").PROMOTION:this.dist_to_promo=this.$AdAllocationIntegrityGapsInfo1(j,this.dist_to_promo);break;case c("FeedStoryCategory").SPONSORED:this.dist_to_sponsored=this.$AdAllocationIntegrityGapsInfo1(j,this.dist_to_sponsored);break}};h.prototype.$AdAllocationIntegrityGapsInfo1=function(i,j){"use strict";if(j===-1)return i;return j};f.exports=h}),null);
__d("AdAllocationIntegrityUtils",["FeedStoryCategory","collectDataAttributes","DataAttributeUtils"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="data-story_category",i="data-dedupekey",j="ft",k={getFeedStoryCategory:function l(m){__p&&__p();var n=c("collectDataAttributes")(m,[j]).ft,o=c("DataAttributeUtils").getDataAttribute(m,h);if(o)switch(o){case"2":return c("FeedStoryCategory").ENGAGEMENT;case"3":return c("FeedStoryCategory").FIXED_POSITION;case"4":return c("FeedStoryCategory").PROMOTION;default:return c("FeedStoryCategory").UNKNOWN}else if(n.ei)return c("FeedStoryCategory").SPONSORED;else return c("FeedStoryCategory").ORGANIC},isGapRuleCategory:function l(m){if(m===c("FeedStoryCategory").SPONSORED||m===c("FeedStoryCategory").ENGAGEMENT||m===c("FeedStoryCategory").FIXED_POSITION||m===c("FeedStoryCategory").PROMOTION)return true;else return false},getDedupKey:function l(m){return c("DataAttributeUtils").getDataAttribute(m,i)}};f.exports=k}),null);
__d("ViewportTrackingHooks",["Base64"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i=[],j={registerFeedObject:function k(l,m){h[l]=c("Base64").encode(m)},updateVisibleViewportObjects:function k(l){__p&&__p();var m=[],n=false;for(var o=0;o<l.length;o++){var p=l[o],q=p.id;while(!(q in h)&&p.firstChild!=undefined&&p.firstChild.id!=undefined&&p.firstChild.id.startsWith("u_")){q=p.firstChild.id;p=p.firstChild}if(q in h){m.push(h[q]);if(!(o in i)||i[o]!=h[q])n=true}}if(!n&&i.length!=m.length)n=true;if(n){i=m;if(typeof __EXT__updateVisibleViewportObjects==="function")__EXT__updateVisibleViewportObjects(i)}}};f.exports=j}),null);
__d("viewportTrackingBuilder",[],(function a(b,c,d,e,f,g){"use strict";var h=function h(i){var j=null;return{factory:i,singleton:function k(){if(!j)j=i.apply(undefined,arguments);return j},clearSingleton:function k(){j=null}}};f.exports=h}),null);
__d("ViewportTracking",["cx","invariant","AdAllocationIntegrityGapsInfo","AdAllocationIntegrityUtils","Arbiter","Banzai","BanzaiScuba","CSS","CurrentUser","DOM","DOMDimensions","Event","LitestandMessages","NavigationMessage","pageID","Run","SubscriptionsHandler","TimeSlice","UserActivity","ViewportTrackingHelper","ViewportTrackingHooks","clickRefAction","collectDataAttributes","debounce","getElementPosition","getViewportDimensions","throttle","viewportTrackingBuilder","setTimeout"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=97,k="vpv",l=3,m=2,n=1,o=0,p=1,q=2,r=3,s=4;function t(w){this.cachedAllStories=[];this.cachedVisibleStories={init:false,data:{}};this.fireTimer=this.fireTimer.bind(this);this.logAnnotatedVPV=this.logAnnotatedVPV.bind(this);this.markStoryRead=this.markStoryRead.bind(this);this.behavior=w}t.prototype.init=function(w){__p&&__p();this.useBanzai=true;this.vpvDebug=!!w.vpv_debug;this.vpvdDebug=!!w.vpvd_debug;this.vpvdAnalysis=!!w.vpvd_analysis;this.trackingHooks=!!w.tracking_hooks;this.ctaLoggingEnabled=!!w.cta_logging_enabled;this.adAllocationIntegrityLoggingEnabled=!!w.ad_allocation_integrity_logging_enabled;this.readStoryIDs={};this.annotatedStoryIDs={};this.minSizeToBeVisible=200;this.storyIDsWasInView={};this.minFractionToBeVisibleForTimetracking=.5;this.scrollThrottlingInterval=100;this.mouseThrottlingInterval=100;this.keyboardThrottlingInterval=100;this.minTimeToReportImmediately=500;this.discardVPVDIntervalThreshold=9e4;this.active_state_duration=1e3;this.height_diff_to_change_state=25;this.focused_state_duration=3500;this.invalidateAllStoriesCache();this.cachedViewportHeight=c("getViewportDimensions")().height;this.isTimetrackingEnabled=false;this.activeStories={};this.userInactiveLock=false;this.userActivityPollerTimeoutID=null;this._headLoadStoryCount=0;if(this.behavior.getDataFromConfig)this.behavior.getDataFromConfig(w,this);if(this.isTimetrackingEnabled){this.lastMouseX=-1;this.lastMouseY=-1;this.lastStreamY=-1;this.latestStreamYChangedTimeStamp=-1;this.userFocus=q;this.latestUserFocus=q;this.latestUserActivity="init";this.focusedStory=null;this.latestFocusedStory=null;this.latestActiveStory=null;this.totalVPVDuration={}}if(w.tracking_duration_config){this.scrollThrottlingInterval=w.tracking_duration_config.scroll_throttling_interval;this.mouseThrottlingInterval=w.tracking_duration_config.mouse_throttling_interval;this.keyboardThrottlingInterval=w.tracking_duration_config.keyboard_throttling_interval;this.userActivityPollingInterval=w.tracking_duration_config.user_activity_polling_interval;this.timeToBeConsideredInactive=w.tracking_duration_config.time_to_be_considered_inactive;this.minFractionToBeVisibleForTimetracking=w.tracking_duration_config.min_fraction_to_be_visible;this.minTimeToReportImmediately=w.tracking_duration_config.min_time_to_report_immediately;this.active_state_duration=w.tracking_duration_config.active_state_duration;this.height_diff_to_change_state=w.tracking_duration_config.story_height_diff_to_change_state;this.focused_state_duration=w.tracking_duration_config.focused_state_duration;this.discardVPVDIntervalThreshold=w.tracking_duration_config.discard_vpvd_interval_threshold}w.record_delay!==undefined||i(0);var x=c("debounce")(this.fireTimer,w.record_delay,this);this.initialStories=this.getStoriesInView();this.initialStoriesLogged=false;if(this.annotatedVPVLogging)this.initialStories.forEach(this.logAnnotatedVPV,this);this.subscriptions=new(c("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(this._getScrollListener(x),c("Event").listen(window,"resize",function(){this.invalidateVisibleStoriesCache();this.cachedViewportHeight=c("getViewportDimensions")().height;x()}.bind(this)),c("Event").listen(window,"focus",function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,"window_focus")}.bind(this)),c("Event").listen(window,"blur",function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(true,"window_blur")}.bind(this)),c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN,this.cleanup.bind(this)),c("Arbiter").subscribe("Stream/totalHeadLoadedStories",function(B,C){this._headLoadStoryCount=C.count}.bind(this)),c("Arbiter").subscribe(c("LitestandMessages").STORIES_INSERTED,function(){if(!this.initialStoriesLogged){var B=this.getStoriesInView();B.forEach(this.logAnnotatedVPV,this)}else x();if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,"stories_inserted")}.bind(this)));if(this.isTimetrackingEnabled&&this.behavior.getStream){this.updateTimeTrackingData(false,"init");var y=c("throttle")(function(event){this.invalidateVisibleStoriesCache();this.handleScroll(event)}.bind(this),this.scrollThrottlingInterval),z=c("throttle")(function(event){return this.handleKeyboard(event)}.bind(this),this.keyboardThrottlingInterval),A=c("throttle")(function(event){return this.handleMouse(event)}.bind(this),this.mouseThrottlingInterval);this.subscriptions.addSubscriptions(c("Event").listen(window,"scroll",y),c("Event").listen(document.documentElement,"DOMMouseScroll",y,undefined,{passive:true}),c("Event").listen(document.documentElement,"mousewheel",y,undefined,{passive:true}),c("Event").listen(document.documentElement,"keydown",z),c("Event").listen(document.documentElement,"mouseover",A),c("Event").listen(document.documentElement,"mousemove",A),c("Event").listen(document.documentElement,"click",function(event){this.handleMouse(event)}.bind(this)),c("Arbiter").subscribe("Event/stop",function(B,C){this.handleMouse(C.event)}.bind(this)),c("Arbiter").subscribe("PhotoSnowlift.OPEN",function(){this.userFocus=r;this.handleLayers()}.bind(this)),c("Arbiter").subscribe("PhotoSnowlift.CLOSE",function(){this.userFocus=p;this.focusedStory=null;this.updateTimeTrackingData(false,"snowlift_close")}.bind(this)));this._userActivityPoller()}c("Run").onLeave(this.cleanup.bind(this));c("Run").onUnload(this.cleanup.bind(this))};t.prototype._getScrollListener=function(w){return c("Event").listen(window,"scroll",w)};t.prototype.cleanup=function(){__p&&__p();if(this.subscriptions){this.subscriptions.release();this.subscriptions=null}if(this.isTimetrackingEnabled){clearTimeout(this.userActivityPollerTimeoutID);this.updateTimeTrackingData(true,"cleanup")}if(this.annotatedVPVLogging){var w=this.getStoriesInView();w.forEach(this.logAnnotatedVPV,this)}this.initialStories=[];this._headLoadStoryCount=0};t.prototype.fireTimer=function(){__p&&__p();if(!this.initialStoriesLogged){this.initialStories.forEach(this.markStoryRead,this);this.initialStoriesLogged=true}this.storiesInView=this.getStoriesInView();this.storiesInView.forEach(this.markStoryRead,this);if(this.trackingHooks){var w=this.isTimetrackingEnabled?this.getVisibleStoriesFromCache():this.getAllStoriesInView(),x=[],y=Object.keys(w);for(var z=0,A=y.length;z<A;z++){var B=y[z];if(w[B].story)x.push(w[B].story)}c("ViewportTrackingHooks").updateVisibleViewportObjects(x)}};t.prototype.getSessionID=function(){return null};t.prototype._userActivityPoller=function(){__p&&__p();if(!this.userInactiveLock&&!c("UserActivity").isActive(this.timeToBeConsideredInactive)){this.userInactiveLock=true;this.userFocus=q;this.updateTimeTrackingData(false,"user_activity_inactive");c("UserActivity").subscribeOnce(function(){this.userFocus=p;this.updateTimeTrackingData(false,"user_activity_active");this.userInactiveLock=false}.bind(this))}this.userActivityPollerTimeoutID=c("setTimeout")(c("TimeSlice").guard(this._userActivityPoller.bind(this),"ViewportTracking poll setTimeout",{propagationType:c("TimeSlice").PropagationType.EXECUTION}),this.userActivityPollingInterval)};t.prototype.getQueryID=function(w){return-1};t.prototype.getFBFeedLocations=function(w){return-1};t.prototype.getFBFeedInsertionPosition=function(w){return-1};t.prototype.createVPVDTimer=function(w){var x=document.createElement("label");x.setAttribute("for",w.toString());x.setAttribute("class","vpvd_debug_timer");return x};t.prototype.updateVPVDTimer=function(w){__p&&__p();var x=this.activeStories[w].story;if(!x)return;var y=c("DOM").scry(x,".vpvd_debug_timer");if(!y.length){y=[this.createVPVDTimer(x),this.createVPVDTimer(x)];var z=c("DOM").scry(x,".UFIRow");if(z.length&&z[z.length-1].clientWidth>0)z[z.length-1].appendChild(y[0]);else x.appendChild(y[0]);x.insertBefore(y[1],x.firstChild)}var A=this.totalVPVDuration[w],B=Math.floor(A/1e3)+"."+Math.floor(A%1e3/100);c("DOM").setContent(y[0],B);c("DOM").setContent(y[1],B)};t.prototype.updateVPVDTimers=function(){for(var w in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,w))this.updateVPVDTimer(w)};t.prototype.logVpvdAnalysis=function(w,x,y,z,A,B){__p&&__p();var C=new(c("BanzaiScuba"))("vpv_duration");C.addDenorm("qid",this.getQueryID(this.activeStories[w].story));C.addDenorm("uid",c("CurrentUser").getID());C.addDenorm("vsid",w);C.addInteger("time",Math.round(Date.now()/1e3));C.addInteger("duration",z);C.addInteger("total_duration",A);C.addNormal("story_state",this.activeStories[w].state);C.addNormal("is_active_state",y);C.addNormal("num_visible_stories",this.numVisibleStories);C.addInteger("story_height",this.activeStories[w].story_height);C.addInteger("story_visible_height",this.activeStories[w].height);C.addInteger("state_visible_height",B);C.addInteger("total_visible_height",this.totalVisibleHeight);C.addInteger("total_height",this.totalHeight);C.addNormal("user_focus",this.latestUserFocus);C.addNormal("next_user_focus",this.userFocus);C.addInteger("vpvd",x);C.addInteger("accumulated_vpvd",this.activeStories[w].vpvd);C.addNormal("user_activity",this.latestUserActivity);C.addNormal("next_user_activity",this.userActivity);C.addInteger("story_position_y",this.activeStories[w].y);C.addInteger("feed_insertion_position",this.getFBFeedInsertionPosition(this.activeStories[w].story));C.addNormal("visible_position",this.activeStories[w].visible_position);C.addNormal("is_focused_story",this.activeStories[w].is_focused);C.post()};t.prototype.shouldDiscardStory=function(w){var x=this.activeStories[w].height||0;return x!=this.activeStories[w].story_height&&x<this.totalHeight/2};t.prototype.calculateTotalHeight=function(){this.totalHeight=0;for(var w in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,w))this.totalHeight+=this.activeStories[w].height};t.prototype.updateVPVDurations=function(w){__p&&__p();var x;if(this.latestUserFocus===q||w-this.latestTimeTrackingTimestamp>this.discardVPVDIntervalThreshold)return;var y=(x={},x[n]=0,x[m]=0,x[l]=0,x),z=w-this.latestTimeTrackingTimestamp>=this.focused_state_duration;this.totalVisibleHeight=0;for(var A in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,A))if(!(this.latestUserFocus===p&&z&&this.shouldDiscardStory(A))){var B=this.activeStories[A].state||null,C=this.activeStories[A].height||0;if(B!==null&&Object.prototype.hasOwnProperty.call(y,B))y[B]+=C;this.totalVisibleHeight+=C}var D=0,E=w-this.latestTimeTrackingTimestamp;if(this.latestUserFocus===p){E=y[l]>0?this.focused_state_duration:this.active_state_duration;E=Math.min(E,w-this.latestTimeTrackingTimestamp);D=w-this.latestTimeTrackingTimestamp-E}var F=0,G=l;for(var H=l;H>=n;H--)if(y[H]>0){F=y[H];G=H;break}var I=y[l]+y[m]+y[n],J=0;for(A in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,A)){if(this.latestUserFocus===p&&z&&this.shouldDiscardStory(A))continue;var K=this.activeStories[A].state||o;if(F>0&&K>=G){var L=this.activeStories[A].height||0;J=E*(L/F);if(this.vpvdAnalysis&&E>0)this.logVpvdAnalysis(A,J,true,E,E+D,F);this.activeStories[A].vpvd+=J;this.totalVPVDuration[A]+=J}if(I>0){var M=this.activeStories[A].height||0;J=D*(M/I);if(this.vpvdAnalysis&&D>0)this.logVpvdAnalysis(A,J,false,D,E+D,I);this.activeStories[A].vpvd+=J;this.totalVPVDuration[A]+=J}}};t.prototype.updateActiveStory=function(w,x,y,z){this.activeStories[w].state=x;this.activeStories[w].ts=y;this.activeStories[w].height_snapshot=z[w].height;this.activeStories[w].is_focused=this.focusedStory===z[w].story;this.activeStories[w].story_height=z[w].story_height;if(this.vpvdAnalysis){this.activeStories[w].visible_position=z[w].visible_position;this.activeStories[w].y=z[w].y}};t.prototype.updateActiveStories=function(w,x){__p&&__p();for(var y in w)if(Object.prototype.hasOwnProperty.call(w,y))if(y in this.activeStories){var z=w[y].height||0;this.activeStories[y].height=z;var A=z-(this.activeStories[y].height_snapshot||0);if(this.focusedStory===w[y].story)this.updateActiveStory(y,l,x,w);else if(A<=-this.height_diff_to_change_state)this.updateActiveStory(y,this.shouldDiscardStory(y)?o:n,x,w);else if(A>=this.height_diff_to_change_state||this.activeStories[y].is_focused||this.activeStories[y].height===this.activeStories[y].story_height)this.updateActiveStory(y,m,x,w)}else{this.storyIDsWasInView[y]=true;this.activeStories[y]={evp_ts:x,story:w[y].story,height:w[y].height,vpvd:0};if(!this.totalVPVDuration[y])this.totalVPVDuration[y]=0;this.updateActiveStory(y,m,x,w)}};t.prototype.recordVPVDurations=function(w,x){for(var y in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,y))if(x||!(y in w)){var z=this.activeStories[y].vpvd||0;if(z>this.focused_state_duration||z===this.totalVPVDuration[y])this.recordTimeStoryWasInView(this.activeStories[y]);delete this.activeStories[y]}};t.prototype.updateTimeTrackingData=function(w,x){__p&&__p();this.userActivity=x;if(!this.activeStories)this.activeStories={};var y=Date.now();if(!this.latestTimeTrackingTimestamp)this.latestTimeTrackingTimestamp=y;var z=this.getVisibleStoriesFromCache();this.calculateTotalHeight();this.updateVPVDurations(y);this.updateActiveStories(z,y);if(this.vpvdDebug)this.updateVPVDTimers();this.recordVPVDurations(z,w);if(w)this.latestTimeTrackingTimestamp=0;else this.latestTimeTrackingTimestamp=y;this.latestUserActivity=this.userActivity;this.latestUserFocus=this.userFocus;if(this.focusedStory)this.latestActiveStory=this.focusedStory;this.latestFocusedStory=this.focusedStory;this.focusedStory=null};t.prototype.needsToUpdateTimeTrackingData=function(){return!(this.latestUserFocus===this.userFocus&&(this.userFocus===q||this.userFocus===p&&!this.latestFocusedStory&&!this.focusedStory))};t.prototype.getfocusedStory=function(w){var x=this.getVisibleStoriesFromCache();for(var y in x)if(Object.prototype.hasOwnProperty.call(x,y)){var z=x[y].story;if(z&&c("ViewportTrackingHelper").isDescendantOf(w,z))return z}return null};t.prototype.handleLayers=function(){if(this.userFocus===r||this.userFocus===s){this.focusedStory=this.latestActiveStory;this.updateTimeTrackingData(false,"media_layer");return true}return false};t.prototype.didInteractWithStream=function(w){if(!this.behavior.getStream)return false;var x=this.behavior.getStream();return c("ViewportTrackingHelper").isDescendantOf(w,x)||c("ViewportTrackingHelper").isDescendantOf(x,w)};t.prototype.handleScroll=function(event){__p&&__p();if(this.handleLayers())return;var w=Date.now();this.behavior.getStream||i(0);var x=c("getElementPosition")(this.behavior.getStream()).y;if(x!=this.lastStreamY||w-this.latestStreamYChangedTimeStamp<2.5*this.scrollThrottlingInterval||this.didInteractWithStream(event.target)){this.latestStreamYChangedTimeStamp=w;this.userFocus=p}else this.userFocus=q;this.lastStreamY=x;if(this.userFocus===p||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,"scroll")};t.prototype.handleKeyboard=function(event){__p&&__p();if(this.handleLayers())return;if(this.didInteractWithStream(event.target)){this.userFocus=p;this.focusedStory=this.getfocusedStory(event.target)}else if(c("CSS").hasClass(event.target,"shareInput")){this.userFocus=p;this.focusedStory=this.latestActiveStory}else this.userFocus=q;if(this.userFocus===p||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,"keyboard")};t.prototype.handleMouse=function(event){__p&&__p();if(this.handleLayers())return;if(event.type!="click"&&event.clientX===this.lastMouseX&&event.clientY===this.lastMouseY)return;if(event.type==="click")this.invalidateVisibleStoriesCache();if(this.didInteractWithStream(event.target)){this.userFocus=p;this.focusedStory=this.getfocusedStory(event.target)}else this.userFocus=q;this.lastMouseX=event.clientX;this.lastMouseY=event.clientY;if(this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,event.type)};t.prototype.getStoriesInView=function(){__p&&__p();var w=this.behavior.getAllStories(),x=[],y=false;for(var z=0;z<w.length;z++){var A=w[z],B=this.behavior.getStoryID(A);if(B&&this.hasBeenVisible(B))continue;if(c("ViewportTrackingHelper").isVisible(A,this.minSizeToBeVisible)){if(A.getAttribute("data-insertion-position")===null)A.setAttribute("data-insertion-position",(z-this._headLoadStoryCount).toString());x.push(A);y=true}else if(y)break}return x};t.prototype.getAllStoriesFromCache=function(){if(this.cachedAllStories.length===0)this.cachedAllStories=this.behavior.getAllStories();return this.cachedAllStories};t.prototype.invalidateAllStoriesCache=function(){this.cachedAllStories=[];this.invalidateVisibleStoriesCache()};t.prototype.getVisibleStoriesFromCache=function(){if(!this.cachedVisibleStories.init)this.cachedVisibleStories={init:true,data:this.getAllStoriesInView()};return this.cachedVisibleStories.data};t.prototype.invalidateVisibleStoriesCache=function(){this.cachedVisibleStories={init:false,data:{}}};t.prototype.getAllStoriesInView=function(){__p&&__p();var w=this.getAllStoriesFromCache(),x={},y=false,z=0,A=w.length,B=1,C=w.length;if(this._indexOfLastVisibleStoryOnPreviousPass>A/2){z=A-1;A=-1;B=-B}for(var D=z;D!=A;D+=B){var E=w[D],F=c("ViewportTrackingHelper").getHeightIfVisible(E,Math.min(this.minSizeToBeVisible,this.minFractionToBeVisibleForTimetracking*c("DOMDimensions").getElementDimensions(E).height));if(F>0||E===this.focusedStory){if(E.getAttribute("data-insertion-position")===null)E.setAttribute("data-insertion-position",(D-this._headLoadStoryCount).toString());var G=this.behavior.getStoryID(E);if(G){x[G]={story:E,height:F,story_height:c("DOMDimensions").getElementDimensions(E).height};y=true;if(this.vpvdAnalysis){x[G].y=c("getElementPosition")(E).y;x[G].visible_position=D;C=Math.min(C,D)}}}else if(y){this._indexOfLastVisibleStoryOnPreviousPass=D-B;break}}if(this.vpvdAnalysis){this.numVisibleStories=0;for(G in x)if(Object.prototype.hasOwnProperty.call(x,G)){x[G].visible_position-=C;this.numVisibleStories++}}return x};t.prototype.getTimetrackingDataToLog=function(w){var x={evt:j,time_spent_id:c("pageID"),vpvd_start_timestamp:w.evp_ts||null,vpvd_time_delta:Math.round(w.vpvd||0),story_height:c("DOMDimensions").getElementDimensions(w.story).height,viewport_height:this.cachedViewportHeight};return{ft:x}};t.prototype.getGapsInfoToLog=function(w){__p&&__p();if(w===null||w===undefined)return null;var x=c("AdAllocationIntegrityUtils").getFeedStoryCategory(w),y=new(c("AdAllocationIntegrityGapsInfo"))(x);if(!c("AdAllocationIntegrityUtils").isGapRuleCategory(x))return y;else{var z=c("AdAllocationIntegrityUtils").getDedupKey(w);if(z===null)return null;var A=this.behavior.getAllStories().filter(function(F){return Object.prototype.hasOwnProperty.call(this.storyIDsWasInView,this.behavior.getStoryID(F))}.bind(this)),B=-1;for(var C=A.length-1;C>=0;C--){var D=c("AdAllocationIntegrityUtils").getDedupKey(A[C]);if(B<0){if(D!==null&&z===D){B=C;y.setDistToTop(B+1)}}else{var E=c("AdAllocationIntegrityUtils").getFeedStoryCategory(A[C]);if(c("AdAllocationIntegrityUtils").isGapRuleCategory(E))y.setDistIfAbsent(E,B-C)}}return y}};t.prototype.recordTimeStoryWasInView=function(w){__p&&__p();if(!this.isTimetrackingEnabled)return;if(!w.vpvd||!w.story)return;if(w.vpvd>0){var x=this.getTimetrackingDataToLog(w),y=c("collectDataAttributes")(w.story,["ft"]);Object.assign(x.ft,y.ft);if(this.adAllocationIntegrityLoggingEnabled){var z=this.getGapsInfoToLog(w.story);Object.assign(x.ft,z)}var A=!!y.ft.ei&&x.ft.vpvd_time_delta>this.minTimeToReportImmediately;if(x.ei)delete x.ei;w.story||i(0);this.sendDataToLog(w.story,x,A)}};t.prototype.hasBeenVisible=function(w){return w in this.readStoryIDs};t.prototype.sendDataToLog=function(w,x,y){__p&&__p();if(this.useBanzai){var z={};if(y)z.delay=3e3;var A=this.getSessionID();if(A)x.ft.session_id=A;c("Banzai").post("feed_tracking",x,z)}else c("clickRefAction")(k,w,null,"FORCE",x)};t.prototype.markStoryRead=function(w){__p&&__p();var x=this.behavior.getStoryID(w);if(!x||this.hasBeenVisible(x))return;this.readStoryIDs[x]=true;this.annotatedStoryIDs[x]=true;var y=this._getDataToLogImpl(w),z=c("collectDataAttributes")(w,["ft"]);Object.assign(y.ft,z.ft);delete y.ei;this.sendDataToLog(w,y,false);if(this.vpvDebug)c("CSS").addClass(w,"_5m7s")};t.prototype.logAnnotatedVPV=function(w){var x=this.behavior.getStoryID(w);if(!x||x in this.annotatedStoryIDs)return;this.annotatedStoryIDs[x]=true;var y=this._getDataToLogImpl(w),z=c("collectDataAttributes")(w,["ft"]);Object.assign(y.ft,z.ft);delete y.ei;y.ft.vpv_ft_only=1;this.sendDataToLog(w,y,false)};t.prototype._getDataToLogImpl=function(w){var x=this.behavior.getDataToLog(w);if(!x.ft)x.ft={};return x};t.clearSingleton=function(){};var u={getAllStories:function w(){return[]},getStoryID:function w(x){return null},getDataToLog:function w(x){return{}}},v=c("viewportTrackingBuilder")(function(w){return new t(u)});t.factory=v.factory.bind(v);t.singleton=v.singleton.bind(v);t.clearSingleton=v.clearSingleton.bind(v);t.getBehavior=function(){return u};f.exports=t}),null);
__d("collectSubtreeData",[],(function a(b,c,d,e,f,g){__p&&__p();function h(j,k,l,m,n){__p&&__p();if(j.offsetWidth===0&&j.offsetHeight===0)return n;var o={};if(j.getAttribute)for(s=0;s<k.length;s++){u=k[s];var p=j.getAttribute(l[u]);if(p){o[u]={};var q=JSON.parse(p);for(var r in m)if(q[r]!==undefined){o[u][r]=true;if(n[u]===undefined)n[u]={};if(n[u][r]===undefined)n[u][r]=[];if(m[r].length>0)n[u][r].push(m[r]);n[u][r].push("("+q[r])}}}for(var s=0;s<j.childNodes.length;s++){var t=j.childNodes[s];h(t,k,l,m,n)}for(var u in o)for(var v in o[u]){var w=n[u][v][n[u][v].length-1];if(w.length>0&&w.charAt(0)=="(")n[u][v][n[u][v].length-1]=w.substr(1);else n[u][v].push(")")}return n}function i(j,k){var l={};for(var m=0;m<k.length;++m)l[k[m]]="data-"+k[m];var n={tn:"","tn-debug":","},o={};h(j,k,l,n,o);for(var p in o)for(var q in o[p])o[p][q]=o[p][q].join("");return o}f.exports=i}),null);
__d("recordTNTreeData",["collectSubtreeData"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j){__p&&__p();var k={},l=c("collectSubtreeData")(i,["ft"]);for(var m in l.ft){k[m+"_tree"]=l.ft[m];if(m==="tn-debug")i.setAttribute("tn-debug_subtree",l.ft[m])}k.evt_value=i.offsetHeight;if(j)k.offset=Math.max(0,i.offsetTop-j.offsetTop);return k}f.exports=h}),null);
__d("StreamViewportTracking",["DataAttributeUtils","DOM","DOMDimensions","ViewportTracking","ge","recordTNTreeData","viewportTrackingBuilder"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=51;function k(n,o,p){__p&&__p();var q=arguments.length<=3||arguments[3]===undefined?j:arguments[3];return{_stream:null,getDataFromConfig:function r(s,t){t.isTimetrackingEnabled=true},getAllStories:function r(){var s=c("DOM").scry(this.getStream(),p);return s.filter(function(t){return c("DataAttributeUtils").getDataFt(t)})},getStream:function r(){if(o)return o;if(!this._stream)this._stream=c("ge")("home_stream");return this._stream},getStoryID:function r(s){var t=JSON.parse(c("DataAttributeUtils").getDataFt(s));return t&&t.mf_story_key},getDataToLog:function r(s){__p&&__p();var t=this.getStream(),u=c("recordTNTreeData")(s,t),v=s.getAttribute("data-insertion-position");if(v!==null)u.inspos=v;u.evt=q;u.vpv_time=Math.round(Date.now()/1e3);var w=c("DOM").scry(s,".fbStoryAttachmentImage")[0];if(w){var x=c("DOMDimensions").getElementDimensions(w);u.story_image_height=x.height;u.story_image_width=x.width}return{ft:u}}}}h=babelHelpers.inherits(l,c("ViewportTracking"));i=h&&h.prototype;l.prototype.getQueryID=function(n){var o=JSON.parse(c("DataAttributeUtils").getDataFt(n));return o.qid};l.prototype.getFBFeedLocations=function(n){var o=JSON.parse(c("DataAttributeUtils").getDataFt(n));return o.fbfeed_location};l.prototype.getFBFeedInsertionPosition=function(n){var o=JSON.parse(c("DataAttributeUtils").getDataFt(n));return o.insertion_position};l.prototype.getTimetrackingDataToLog=function(n){__p&&__p();var o=i.getTimetrackingDataToLog.call(this,n);if(this.ctaLoggingEnabled){var p=c("DOM").scry(n.story,"[data-is-cta]").map(function(q){var r=c("DataAttributeUtils").getDataFt(q),o=r&&JSON.parse(r);return o&&o.cta_types}).filter(function(q){return!!q});if(p.length>0)o.ft.cta_types=p}return o};l.prototype.cleanup=function(){m.clearSingleton();i.cleanup.call(this)};function l(){h.apply(this,arguments)}var m=c("viewportTrackingBuilder")(function(n,o){var p=new l(k(n,o,".uiStreamStory"));p.init(n);return p});l.factory=m.factory.bind(m);l.singleton=m.singleton.bind(m);l.clearSingleton=m.clearSingleton.bind(m);l.getBehavior=k;f.exports=l}),null);
__d("TimelineViewportTrackingLogType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({IMPRESSION:"impression",DURATION:"duration"})}),null);