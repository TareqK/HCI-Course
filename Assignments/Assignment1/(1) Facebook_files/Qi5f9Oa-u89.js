if (self.CavalryLogger) { CavalryLogger.start_js(["JgXBT"]); }

__d("AvailableListConstants",[],(function a(b,c,d,e,f,g){var h=Object.freeze({ON_AVAILABILITY_CHANGED:"buddylist/availability-changed",ON_UPDATE_ERROR:"buddylist/update-error",ON_UPDATED:"buddylist/updated",ON_CHAT_NOTIFICATION_CHANGED:"chat-notification-changed",OFFLINE:0,IDLE:1,ACTIVE:2,MOBILE:3,WEB_STATUS:"webStatus",FB_APP_STATUS:"fbAppStatus",MESSENGER_STATUS:"messengerStatus",OTHER_STATUS:"otherStatus",STATUS_ACTIVE:"active",STATUS_IDLE:"idle",STATUS_OFFLINE:"offline"});f.exports=h}),null);
__d("LastActiveTimes",["fbt","ServerTime"],(function a(b,c,d,e,f,g,h){__p&&__p();var i={};function j(n){__p&&__p();if(!n||n<0)return null;var o=c("ServerTime").get()/1e3-n,p=Math.floor(o/60),q=Math.floor(p/60),r=Math.floor(q/24);if(p<=1)return h._({"*":"{count}m"},[h.param("count",1,[0])]);else if(p<60)return h._({"*":"{count}m"},[h.param("count",p,[0])]);else if(q<24)return h._({"*":"{count}h"},[h.param("count",q,[0])]);else if(r<3)return h._({"*":"{count}d"},[h.param("count",r,[0])]);else return null}function k(n,o){if(!(n in i)||i[n]<o)i[n]=o}function l(n){if(n in i)return i[n];else return 0}var m={update:function n(o){for(var p in o)k(p,o[p])},getShortDisplay:function n(o){return j(l(o))},get:function n(o){return l(o)},getDebugData:function n(){return i}};f.exports=m}),null);
__d("ChatConfig",["ChatConfigInitialData"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={get:function j(k,l){return k in h?h[k]:l},set:function j(k){if(arguments.length>1){var l={};l[k]=arguments[1];k=l}Object.assign(h,k)},getDebugInfo:function j(){return h}};i.set(c("ChatConfigInitialData"));f.exports=i}),null);
__d("PresenceStatus",["ArbiterMixin","AvailableListConstants","BanzaiODS","Bootloader","ChatConfig","ChatVisibility","CurrentUser","FBIDCheck","LastActiveTimes","PresencePrivacy","ServerTime","createObjectFrom","debounceAcrossTransitions"],(function a(b,c,d,e,f,g){__p&&__p();c("BanzaiODS").setEntitySample("presence",1e-4);var h={},i={},j={},k={},l={},m=Object.assign({},c("ArbiterMixin")),n=c("debounceAcrossTransitions")(function(){return m.inform("change")},0);function o(p){var q,r=parseInt(p.topic.match(/\d+$/),10),s=parseInt(JSON.parse(p.payload).lat,10),t=Date.now()-s*1e3,u=c("ChatConfig").get("active_cutoff")*1e3-t;c("LastActiveTimes").update((q={},q[r]=s,q));m.checkPresence(r);if(m.get(r)===c("AvailableListConstants").ACTIVE){clearTimeout(k[r].timeout);k[r].timeout=setTimeout(function(){m.checkPresence(r)},u)}}Object.assign(m,{resetPresenceData:function p(){h={};i={}},reset:function p(){m.resetPresenceData();j={};l={}},get:function p(q){__p&&__p();if(q==c("CurrentUser").getID())return c("ChatVisibility").isOnline()?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE;if(!c("FBIDCheck").isUser_deprecated(q)&&!k[q]){c("BanzaiODS").bumpEntityKey("presence","page_subscribe");k[q]={};if(c("ChatConfig").get("presence_page_green_dot_sub"))c("Bootloader").loadModules(["RTISubscriptionManager"],function(s){s.subscribe("presence_push/fb/"+q,o)},"PresenceStatus")}var r=c("AvailableListConstants").OFFLINE;if(q in h)r=h[q];if(!c("PresencePrivacy").allows(q))r=c("AvailableListConstants").OFFLINE;return r},getCapabilities:function p(q){var r=i[q];return r?r:0},isPlayingCanvasGameUser:function p(q){return!!j[q]},getGroup:function p(q){return q.some(function(r){if(r==c("CurrentUser").getID())return false;return m.get(r)===c("AvailableListConstants").ACTIVE})?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE},set:function p(q,r,s,t,u,v){__p&&__p();if(q==c("CurrentUser").getID())return false;var w;if(r!==null&&r!==undefined){r=r==c("AvailableListConstants").ACTIVE?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE;var x=m.get(q);w=x!=r;if((w||r==c("AvailableListConstants").ACTIVE)&&c("FBIDCheck").isUser_deprecated(q)){var y;c("LastActiveTimes").update((y={},y[q]=c("ServerTime").get()/1e3,y))}h[q]=r}var z=false;if(u!==undefined&&u!==null){z=m.getCapabilities(q)!=u;i[q]=u}var A=w||z;if(A&&!v)n();return A},setPlayingCanvasGameFriends:function p(q){j=c("createObjectFrom")(q)},setFriendToGameData:function p(q){l=q},getOnlineIDs:function p(){var q,r=[];for(q in h)if(m.get(q)===c("AvailableListConstants").ACTIVE)r.push(q);return r},getAllIDs:function p(){return Object.keys(h)},getOnlineCount:function p(){return m.getOnlineIDs().length},getPresenceStats:function p(){__p&&__p();var q=0,r=0,s=0;for(var t in h){q+=1;switch(m.get(t)){case c("AvailableListConstants").OFFLINE:r+=1;break;case c("AvailableListConstants").ACTIVE:s+=1;break;default:break}}return{total:q,offline:r,active:s}},getAllDebugInfo:function p(){var q={};for(var r in h)q[r]={p:h[r],vc:i[r]};return q},setMultiChatproxy:function p(q){var r={};for(var s in q){if(q[s].lat)r[s]=q[s].lat;var t=q[s].p;m.set(s,t,false,"chatproxy",q[s].vc,true)}c("LastActiveTimes").update(r);n()},setMultiActive:function p(q,r){var s=false;q.forEach(function(t){m.set(t,c("AvailableListConstants").ACTIVE,false,r,null,true)&&(s=true)});if(s)n()},checkPresence:function p(q){var r=false,s=Math.ceil(Date.now()/1e3)-c("LastActiveTimes").get(q);m.set(q,s<c("ChatConfig").get("active_cutoff")?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE,false,"pylon",null,true)&&(r=true);if(r)n()}});f.exports=m}),null);
__d("ChatproxyPresence",["Arbiter","AvailableListConstants","AvailableListInitialData","BanzaiODS","ChannelConstants","LastActiveTimes","PresenceStatus","debounceAcrossTransitions","gkx","ClientChromeExperimentsData"],(function a(b,c,d,e,f,g){__p&&__p();var h=c("ClientChromeExperimentsData").ClientChromeAvailableListInitialDataPreloader;function i(k){__p&&__p();var l=k.activeList,m=k.lastActiveTimes,n=k.playingNow,o=k.gameIDs;if(n&&c("gkx")("AT7yBpg1V7CzKVaTkCsDW_DkXA2fczgihYwI2HQX5LeBop45hQUdEiqH1VoxT7WnKBTDSj2fGjsqWwvOmixi9XTEC3KJkl26uGSBOQ2EPjno0g")){c("PresenceStatus").setPlayingCanvasGameFriends(n);if(o)c("PresenceStatus").setFriendToGameData(o)}if(l)c("PresenceStatus").setMultiActive(l,"available_list_active");if(m&&!Array.isArray(m))c("LastActiveTimes").update(m)}function j(k){"use strict";this.$ChatproxyPresence1=k;this.$ChatproxyPresence2=false;this.$ChatproxyPresence3=c("AvailableListInitialData").chatNotif;this.$ChatproxyPresence4=false;if(h)h.onLoaded(i);else i(c("AvailableListInitialData"))}j.prototype.subscribe=function(){"use strict";__p&&__p();c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("chatproxy-presence"),this.updatePresenceInfo.bind(this));c("Arbiter").subscribe(c("ChannelConstants").ON_INVALID_HISTORY,function(){this.$ChatproxyPresence2=true}.bind(this));c("Arbiter").subscribe(c("ChannelConstants").RTI_SESSION,function(k,l){if(l)this.$ChatproxyPresence4=l}.bind(this));c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("get_debug_presence"),function(k,l){__p&&__p();var m=c("PresenceStatus").getAllDebugInfo(),n=c("LastActiveTimes").getDebugData();for(var o in n){var p=m[o];if(p===undefined){p={};m[o]=p}p.l=Math.floor(n[o])}this.$ChatproxyPresence4.issueRequest("/debug_presence",{},m,function(){c("BanzaiODS").bumpEntityKey("ChatproxyPresence","debug_presence.sucess")})}.bind(this))};j.prototype.getRTISession=function(){"use strict";return this.$ChatproxyPresence4};j.prototype.updatePresenceInfo=function(k,l){"use strict";__p&&__p();if(this.$ChatproxyPresence2){this.$ChatproxyPresence2=false;c("PresenceStatus").resetPresenceData()}l=l.obj;var m=l.buddyList;c("PresenceStatus").setMultiChatproxy(m);var n=false;if(l.chatNotif!==undefined)n=this.$ChatproxyPresence3!==l.chatNotif;if(n)this.$ChatproxyPresence3=l.chatNotif;if(l.gamers)if(c("gkx")("AT4ZK4-HJfHD7oj43iGtVof3AGIE4_u3z6F0HOgDTJ4fOy3YfjtGPsjx32l5qWfj1k3ucgmRet0aKZYemlSZXFKbUm1LMDVAH-yVQcR_OagZzg")&&l.gamers[0]===-1){var o=[],p={};for(var q=1;q<l.gamers.length;q+=2){o.push(l.gamers[q]);p[l.gamers[q]]=l.gamers[q+1]}c("PresenceStatus").setPlayingCanvasGameFriends(o);c("PresenceStatus").setFriendToGameData(p)}else c("PresenceStatus").setPlayingCanvasGameFriends(l.gamers);if(n)this.$ChatproxyPresence1(c("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED,this.$ChatproxyPresence3);c("debounceAcrossTransitions")(function(){this.$ChatproxyPresence1(c("AvailableListConstants").ON_AVAILABILITY_CHANGED)}.bind(this),0)()};j.prototype.getWebChatNotification=function(){"use strict";return this.$ChatproxyPresence3};f.exports=j}),null);
__d("ChatDispatcher",["ExplicitRegistrationDispatcher"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("ExplicitRegistrationDispatcher"));i=h&&h.prototype;function j(){h.apply(this,arguments)}f.exports=new j({strict:false})}),null);
__d("PresenceStatusActionTypes",["keyMirror"],(function a(b,c,d,e,f,g){"use strict";f.exports=c("keyMirror")({AVAILABILITY_CHANGED:null})}),null);
__d("TypingStates",[],(function a(b,c,d,e,f,g){var h=Object.freeze({INACTIVE:0,TYPING:1,QUITTING:2});f.exports=h}),null);
__d("AvailableList",["Arbiter","ArbiterMixin","AsyncRequest","AvailableListConstants","BanzaiODS","Bootloader","ChannelConstants","ChatConfig","ChatDispatcher","ChatproxyPresence","ChatReliabilityInstrumentation","ChatVisibility","CurrentUser","FBIDCheck","ErrorUtils","JSLogger","LastActiveTimes","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","Run","ServerTime","TypingStates","debounceAcrossTransitions","emptyFunction","requireWeak"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();c("BanzaiODS").setEntitySample("presence",1e-4);var h=babelHelpers["extends"]({},c("AvailableListConstants"),c("ArbiterMixin")),i=/\D/;h.subscribe([c("AvailableListConstants").ON_AVAILABILITY_CHANGED,c("AvailableListConstants").ON_UPDATE_ERROR],function(p,q){c("Arbiter").inform(p,q)});c("PresenceStatus").subscribe("change",c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED)},0));var j=c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED);c("ChatDispatcher").dispatch({type:c("PresenceStatusActionTypes").AVAILABILITY_CHANGED})},0);function k(q,r,s,t,u){if(q===c("CurrentUser").getID())return;var v=c("PresenceStatus").set(q,r,s,t,u);if(v){var w=c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED,q);c("ChatDispatcher").dispatch({type:c("PresenceStatusActionTypes").AVAILABILITY_CHANGED,id:q})},0);w()}}function l(q){var r=q.payload.availability||{};for(var s in r)k(s&&s.toString(),r[s].a,true,"mercury_tabs",r[s].c)}function m(q){if(!q||q==="0"||i.test(q)){c("ChatReliabilityInstrumentation").logERROR("bad id for available list: "+q);return}new(c("AsyncRequest"))("/ajax/mercury/tabs_presence.php").setData({target_id:q}).setHandler(l).setErrorHandler(c("emptyFunction")).setAllowCrossPageTransition(true).send()}function n(q,r){r.chat_config=c("ChatConfig").getDebugInfo();r.available_list_debug_info={count:c("PresenceStatus").getOnlineIDs().length}}var o=undefined;try{o=new(c("ChatproxyPresence"))(function(event){h.inform(event)});o.subscribe()}catch(p){c("ErrorUtils").reportError&&c("ErrorUtils").reportError(p,false);c("ChatReliabilityInstrumentation").logERROR(p.getMessage())}Object.assign(h,{getChatproxyPresenceObject:function q(){return o},get:function q(r){return c("PresenceStatus").get(r)},updateForID:function q(r){if(c("ChatConfig").get("presence_page_green_dot_sub")&&!c("FBIDCheck").isUser_deprecated(r))return;m(r);if(c("PresencePrivacy").getVisibility()==c("PresencePrivacy").ONLINE)c("Run").onAfterLoad(function(){return c("Bootloader").loadModules(["ChannelManager","ChannelTransport"],function(s,t){s.startChannelManager();t.sendAdditionalBuddyRequest(s.getCompleteConfig(),r)},"AvailableList")})},getWebChatNotification:function q(){return o&&o.getWebChatNotification()},isReady:function q(){return!!o},set:function q(r,s,t,u){k(r,s,true,t,u)}});c("Arbiter").subscribe(c("JSLogger").DUMP_EVENT,n);c("PresencePrivacy").subscribe(["privacy-changed","privacy-availability-changed","privacy-user-presence-response"],j);c("requireWeak")("ChannelConnection",function(q){return q.subscribe([q.CONNECTED,q.RECONNECTING,q.SHUTDOWN,q.MUTE_WARNING,q.UNMUTE_WARNING],j)});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("buddylist_overlay"),function(q,r){var s={},t=r.obj.overlay;for(var u in t){h.set(u,t[u].a,t[u].s||"channel",t[u].vc);if(t[u].la)s[u]=t[u].la}c("LastActiveTimes").update(s)});c("Arbiter").subscribe([c("ChannelConstants").getArbiterType("typ"),c("ChannelConstants").getArbiterType("ttyp")],function(q,r){__p&&__p();var s=r.obj;if(s.st===c("TypingStates").TYPING){var t=s.from;if(c("ChatVisibility").isOnline()){c("BanzaiODS").bumpEntityKey("presence","stale_presence_check_typing");var u=c("PresenceStatus").get(t);if(u!=c("AvailableListConstants").ACTIVE){var v=c("LastActiveTimes").get(t)*1e3,w=c("ServerTime").get();if(!v)c("BanzaiODS").bumpEntityKey("presence","no_detailed_presence_typing");else if(w-v>5*60*1e3){var x="stale_presence_typing",y=w-v;if(y<10*60*1e3)x+="600";else if(y<60*60*1e3)x+="3600";c("BanzaiODS").bumpEntityKey("presence",x)}}}h.set(t&&t.toString(),c("AvailableListConstants").ACTIVE,"channel-typing")}});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("messaging"),function(q,r){__p&&__p();if(!c("ChatVisibility").isOnline())return;var s=r.obj;if(s.message&&s.message.timestamp&&s.message.sender_fbid){var t=c("ServerTime").get(),u=s.message.timestamp;if(t-u<2*60*1e3){c("BanzaiODS").bumpEntityKey("presence","stale_presence_check");var v=s.message.sender_fbid,w=c("PresenceStatus").get(v);if(w==c("AvailableListConstants").ACTIVE)return;var x=c("LastActiveTimes").get(v)*1e3;if(!x)c("BanzaiODS").bumpEntityKey("presence","no_detailed_presence");else if(u-x>5*60*1e3){var y="stale_presence",z=u-x;if(z<10*60*1e3)y+="600";else if(z<60*60*1e3)y+="3600";c("BanzaiODS").bumpEntityKey("presence",y)}}}});f.exports=h}),null);
__d("ChatSidebarPreloadStore",["InitialChatFriendsList"],(function a(b,c,d,e,f,g){"use strict";var h={onLoaded:function i(j){j({buddies:c("InitialChatFriendsList").list,groups:c("InitialChatFriendsList").groups,shortProfiles:c("InitialChatFriendsList").shortProfiles,nearby:c("InitialChatFriendsList").nearby,recents:c("InitialChatFriendsList").recents,adminedPages:c("InitialChatFriendsList").adminedPages,pageListModule:c("InitialChatFriendsList").pageListModule,pymmList:c("InitialChatFriendsList").pymmList||{},profiles:[]})}};f.exports=h}),null);
__d("ChatProfileStore",["ChatSidebarPreloadStore"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={},i={init:function j(){c("ChatSidebarPreloadStore").onLoaded(function(k){var l=k.profiles,m=k.nearby;return l.filter(function(n){return!m||m.indexOf(n.id)===-1}).forEach(function(n){var o=new Date(),p=n.birthdate&&o.getDate()===n.birthdate.day&&o.getMonth()+1===n.birthdate.month,q=n.profile_picture&&n.profile_picture.uri?n.profile_picture.uri:null;h[n.id]={id:n.id,is_birthday:p,thumbSrc:q,name:n.name,is_messenger_only:!!n.is_messenger_only}})})},get:function j(k){return h[k]}};f.exports=i}),null);
__d("OrderedFriendsList",["AvailableListConstants","ChatProfileStore","ChatSidebarPreloadStore","MercuryIDs","PresenceStatus","SearchableEntry","ShortProfiles","WorkModeConfig","createArrayFromMixed","isValidUniqueID"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i={},j=[],k={};function l(r){r=String(r);return c("MercuryIDs").isValid(r)?r:c("MercuryIDs").getParticipantIDFromUserID(r)}function m(r,s){var t=c("createArrayFromMixed")(r);s(t.filter(function(u){var v=c("ShortProfiles").getNow(u);return!v||p(v)||v.is_nonfriend_messenger_contact}))}function n(r){h=[];var s=0;r.forEach(function(t){var u=t.slice(0,-2),v=t.slice(-1);if(c("PresenceStatus").get(u)==v){h[s]=u;i[u]=s++}})}function o(r){var s=0;r.forEach(function(t){var u=t.slice(0,-2),v=t.slice(-1);if(v==c("AvailableListConstants").ACTIVE){j[s]=u;k[u]=s++}})}function p(r){return r.type==="friend"||c("WorkModeConfig").is_work_user&&r.type==="fb4c"}var q={contains:function r(s){return s in i},getList:function r(s){if(h&&h.length){m(h,s);return}c("ChatSidebarPreloadStore").onLoaded(function(t){var u=t.buddies;n(u);m(h,s)})},getSearchableEntries:function r(s,t,u){__p&&__p();q.getList(function(v){__p&&__p();c("ChatSidebarPreloadStore").onLoaded(function(w){var x=w.groups;c("ShortProfiles").getMulti(v.slice(0,s),function(y){var z=[];for(var A in y)z.push(q.normalizeProfileEntry(y[A],A));var B=t?x.map(q.normalizeThreadEntry):[];u(z.concat(B).filter(function(C){return!!C}).sort(function(C,D){return C.getOrder()-D.getOrder()}))})})})},normalizeProfileEntry:function r(s,t){var u=s.searchTokens||[],v=s.name,w=null;return new(c("SearchableEntry"))({uniqueID:s.id||t,keywordString:u.join(" "),order:q.getRank(s.id||t),photo:s.thumbSrc,title:v,subtitle:w,type:s.type,uri:s.uri,auxiliaryData:{isMessengerUser:s.is_messenger_user}})},normalizeThreadEntry:function r(s,t){__p&&__p();var u=s.mercury_thread,v=s.participants_to_render.map(function(B){return babelHelpers["extends"]({},B,{id:l(B.id)})});u.participants=u.participants.map(l);var w=s.text,x=null;if(!w)w=u.name;var y=v.map(function(B){return B.name}),z=y.join(", ");if(!w)w=z;else x=z;var A=s.uid;if(!w||!c("isValidUniqueID")(A))return null;return new(c("SearchableEntry"))({uniqueID:A,order:t,photo:u.image_src,title:w,subtitle:x,type:"thread",auxiliaryData:{participantsToRender:v,tooltipContent:y.join("\n"),thread:u}})},getRank:function r(s){if(s in i)return i[s];return h?h.length:0},getActiveList:function r(s){if(j.length>0){s(j);return}q.getList(function(t){return s(t)})},getActiveRank:function r(s){return s in k?k[s]:q.getRank(s)}};(function(){c("ChatSidebarPreloadStore").onLoaded(function(r){var s=r.buddies,t=r.shortProfiles;c("ShortProfiles").setMulti(t);o(s);n(s)});c("ChatProfileStore").init()})();f.exports=q}),null);
__d("ChatPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$ChatPerfTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$ChatPerfTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$ChatPerfTypedLogger1={};return this};h.prototype.updateData=function(j){this.$ChatPerfTypedLogger1=babelHelpers["extends"]({},this.$ChatPerfTypedLogger1,j);return this};h.prototype.setDuration=function(j){this.$ChatPerfTypedLogger1.duration=j;return this};h.prototype.setEndpoint=function(j){this.$ChatPerfTypedLogger1.endpoint=j;return this};h.prototype.setEvent=function(j){this.$ChatPerfTypedLogger1.event=j;return this};h.prototype.setTabsOpen=function(j){this.$ChatPerfTypedLogger1.tabs_open=j;return this};var i={duration:true,endpoint:true,event:true,tabs_open:true};f.exports=h}),null);
__d("ChatPerfInstrumentation",["Promise","BaseEventEmitter","ChatPerfEvent","ChatPerfTypedLogger","FantaConst","PresenceState","WorkModeConfig","emptyFunction","performanceAbsoluteNow"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("WorkModeConfig").is_work_user,i=h?c("FantaConst").cookieIDs.WORK_COOKIE_ID:c("FantaConst").cookieIDs.PERSONAL_COOKIE_ID,j=c("PresenceState").getInitial(),k=j&&j[i]?j[i].length:0,l=void 0,m={_startTime:Number,_sidebarStartTime:Number,init:function n(){this._startTime=c("performanceAbsoluteNow")();return new(c("Promise"))(function(o){return o()})},initDivebar:function n(){this._sidebarStartTime=c("performanceAbsoluteNow")()},_log:function n(event,o){var p=c("performanceAbsoluteNow")()-(o||this._startTime);if(l)l.emit(event,p);var q=new(c("ChatPerfTypedLogger"))();q.setEvent(event).setDuration(p);q.setTabsOpen(k);q.log()},addPerfTimingsListener:function n(event,o){if(!l)l=new(c("BaseEventEmitter"))();return l.once(event,o)},logInitStores:function n(){this.logInitStores=c("emptyFunction");this._log(c("ChatPerfEvent").CHAT_INIT_STORES)},logInitData:function n(){this.logInitData=c("emptyFunction");this._log(c("ChatPerfEvent").CHAT_INIT_DATA)},logInitUI:function n(){this.logInitUI=c("emptyFunction");this._log(c("ChatPerfEvent").CHAT_INIT_UI)},logInitSound:function n(){this.logInitSound=c("emptyFunction");this._log(c("ChatPerfEvent").CHAT_INIT_SOUND)},logDisplayDone:function n(){this.logDisplayDone=c("emptyFunction");this._log(c("ChatPerfEvent").CHAT_DISPLAY_DONE)},logTTI:function n(){this.logTTI=c("emptyFunction");this._log(c("ChatPerfEvent").TTI)},logCHAT_CONVERSATION_TTI:function n(){this.logCHAT_CONVERSATION_TTI=c("emptyFunction");this._log(c("ChatPerfEvent").CHAT_CONVERSATION_TTI)},logSIDEBAR_FROM_CLIENT_TTI:function n(){this.logSIDEBAR_FROM_CLIENT_TTI=c("emptyFunction");this._log(c("ChatPerfEvent").SIDEBAR_FROM_CLIENT_TTI,this._sidebarStartTime)},logSIDEBAR_DISPLAY_DONE:function n(){this.logSIDEBAR_DISPLAY_DONE=c("emptyFunction");this._log(c("ChatPerfEvent").SIDEBAR_DISPLAY_DONE,this._sidebarStartTime)}};f.exports=m}),null);
__d("FBRTCDispatcher",["Dispatcher_DEPRECATED"],(function a(b,c,d,e,f,g){"use strict";f.exports=new(c("Dispatcher_DEPRECATED"))()}),null);
__d("onAfterLoadSafe",["Run","TimeSlice","requestIdleCallback"],(function a(b,c,d,e,f,g){"use strict";var h=function h(i){return c("TimeSlice").guard(function(){return c("Run").onAfterLoad(function(){c("requestIdleCallback")(i)})},"delayed after load",{propagationType:c("TimeSlice").PropagationType.ORPHAN})()};f.exports=h}),null);
__d("ChatSidebarActionTypes",["keyMirror"],(function a(b,c,d,e,f,g){"use strict";f.exports=c("keyMirror")({INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null})}),null);
__d("ChatSidebarHideReason",[],(function a(b,c,d,e,f,g){var h=Object.freeze({VIEWPORT_INCAPABLE:0,LOW_FRIEND_COUNT:1,NOT_ENABLED:2});f.exports=h}),null);
__d("ChatSidebarStore",["ChatDispatcher","ChatOptionsInitialData","ChatSidebarActionTypes","FluxStore","performanceAbsoluteNow"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("FluxStore"));i=h&&h.prototype;function j(){i.constructor.call(this,c("ChatDispatcher"));this.$ChatSidebarStore2={initialized:false,initTime:c("performanceAbsoluteNow")(),loaded:false,enabled:!!c("ChatOptionsInitialData").sidebar_mode,visible:null};this.$ChatSidebarStore1={}}j.prototype.__onDispatch=function(k){__p&&__p();var l=k.type;this.$ChatSidebarStore1=babelHelpers["extends"]({},this.$ChatSidebarStore2);switch(l){case c("ChatSidebarActionTypes").INIT:if(!this.$ChatSidebarStore1.initialized)this.$ChatSidebarStore2.initTime=c("performanceAbsoluteNow")();this.$ChatSidebarStore2.initialized=true;break;case c("ChatSidebarActionTypes").LOADED:this.$ChatSidebarStore2.loaded=true;break;case c("ChatSidebarActionTypes").SHOW:this.$ChatSidebarStore2.visible=k.sidebarType;break;case c("ChatSidebarActionTypes").SET_ENABLED:this.$ChatSidebarStore2.enabled=k.enabled;this.$ChatSidebarStore2.visible=k.sidebarType;break}for(var m in this.$ChatSidebarStore2)if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore2,m))if(this.$ChatSidebarStore2[m]!==this.$ChatSidebarStore1[m]){this.__emitChange();break}};j.prototype.getPrevState=function(){return this.$ChatSidebarStore1};j.prototype.getState=function(){return this.$ChatSidebarStore2};j.prototype.isInitialized=function(){return this.$ChatSidebarStore2.initialized};j.prototype.isLoaded=function(){return this.$ChatSidebarStore2.loaded};j.prototype.isEnabled=function(){return this.$ChatSidebarStore2.enabled};j.prototype.getInitTime=function(){return this.$ChatSidebarStore2.initTime};j.prototype.getVisibleType=function(){return this.$ChatSidebarStore2.visible};f.exports=new j()}),null);
__d("SidebarType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"})}),null);
__d("ChatSidebarVisibility",["ChatConfig","ChatSidebarHideReason","ChatSidebarStore","OrderedFriendsList","SidebarType","getViewportDimensions"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("ChatConfig").get("sidebar.min_friends"),i=c("ChatConfig").get("sidebar.minimum_width"),j={getViewport:function k(){return c("getViewportDimensions").withoutScrollbars()},shouldShowSidebar:function k(l,m){j.shouldShowSidebarIgnoreEnabled(l,function(n,o){var p=c("ChatSidebarStore").isEnabled();m(n&&p,p?o:o.concat([c("ChatSidebarHideReason").NOT_ENABLED]))})},shouldShowSidebarIgnoreEnabled:function k(l,m){__p&&__p();c("OrderedFriendsList").getActiveList(function(n){__p&&__p();var o=l||j.getViewport(),p=o.width>i,q=n.length<h,r=true,s=[];if(!p){r=false;s.push(c("ChatSidebarHideReason").VIEWPORT_INCAPABLE)}if(q){r=false;s.push(c("ChatSidebarHideReason").LOW_FRIEND_COUNT)}m(r,s)})},isSidebarVisible:function k(){return c("ChatSidebarStore").getVisibleType()===c("SidebarType").SIDEBAR},isBuddyListVisible:function k(){return c("ChatSidebarStore").getVisibleType()===c("SidebarType").BUDDYLIST}};f.exports=j}),null);
__d("ChatSidebarActions",["ChatDispatcher","ChatSidebarActionTypes","ChatSidebarVisibility","SidebarType"],(function a(b,c,d,e,f,g){"use strict";var h={init:function i(){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").INIT})},loaded:function i(){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").LOADED})},disable:function i(){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").SET_ENABLED,enabled:false,sidebarType:c("SidebarType").BUDDYLIST})},enable:function i(j){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").SET_ENABLED,enabled:true,sidebarType:j})},show:function i(j){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").SHOW,sidebarType:j})}};f.exports=h}),null);
__d("ChatSidebar",["csx","Arbiter","AsyncRequest","Bootloader","ChatDispatcher","ChatPerfInstrumentation","ChatSidebarActions","ChatSidebarBotsDispatcher","ChatSidebarBotsStore","ChatSidebarStore","ChatSidebarVisibility","CSS","CurrentUser","DOM","DOMDimensions","Event","JSLogger","KeyEventController","LitestandClassicPlaceHolders","LogHistory","Parent","PresencePrivacy","PresenceUtil","SidebarType","Style","TimeSlice","ViewportBounds","debounce","emptyFunction","ge","gkx","onAfterLoadSafe","queryThenMutateDOM"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=c("ChatSidebarBotsDispatcher").module,j=c("ChatSidebarBotsStore").module,k,l,m,n,o,p,q=null,r=false,s,t=true,u=null,v=44,w=30,x=c("LogHistory").getInstance("chat_sidebar");function y(){return c("ChatSidebarStore").getVisibleType()===c("SidebarType").SIDEBAR}function z(M,N){if(!y())return;if(c("CurrentUser").isWorkUser())A(!N);if(N)o.hide();else{o.show();E()}}function A(M){if(q)if(M&&r)c("CSS").show(q);else{r=c("CSS").shown(q);c("CSS").hide(q)}}function B(){return!y()||!n?0:206}function C(){c("CSS").removeClass(document.documentElement,"sidebarMode");if(c("ChatSidebarStore").isInitialized()){o.hide();c("CSS").hide(n);c("CSS").hide(m)}c("Arbiter").inform("sidebar/visibility",false,c("Arbiter").BEHAVIOR_STATE);c("Arbiter").inform("reflow");c("ViewportBounds").inform("change")}function D(M){E(M,L._cacheViewport)}function E(M,N){var O=void 0;c("queryThenMutateDOM")(function(){N&&N();if(!M||M.height!==u.height)O=H()},function(){if(M==null||M.width!==u.width)c("ChatSidebarVisibility").shouldShowSidebar(u,function(P,Q){c("ChatSidebarActions").show(P?c("SidebarType").SIDEBAR:c("SidebarType").BUDDYLIST)});I(O)})}function F(M){__p&&__p();var N=u||c("ChatSidebarVisibility").getViewport(),O=N.height;if(M&&M.length){M.forEach(function(P){if(P&&P!==k&&!c("CSS").hasClass(P,"hidden_elem"))O-=c("DOMDimensions").getElementDimensions(P).height});if(s)O-=s.getOffset();if(p)O-=c("DOMDimensions").getElementDimensions(p).height}else{O-=v;O-=w}return Math.max(0,O)}function G(){c("CSS").show(m);c("CSS").show(n);c("CSS").addClass(document.documentElement,"sidebarMode");o.show();x.log("sidebar_show","{}");c("Arbiter").inform("sidebar/visibility",true,c("Arbiter").BEHAVIOR_STATE);c("LitestandClassicPlaceHolders").destroy("sidebar");c("ViewportBounds").inform("change")}function H(){return{body:L.getBodyHeight(),item:o.getItemHeight()}}function I(M){if(!M)return;var N=8,O=Math.floor((M.body-N)/M.item);o.setNumTopFriends(O,t,c("SidebarType").SIDEBAR);t=false;var P=Math.floor(M.body-N);c("Style").set(k,"height",M.body+"px");c("Arbiter").inform("sidebar/resized",P,c("Arbiter").BEHAVIOR_STATE);c("Arbiter").inform("reflow")}function J(){var M=void 0;c("queryThenMutateDOM")(function(){M=H()},function(){return I(M)})}function K(){new(c("AsyncRequest"))("/ajax/chat/settings.php").setHandler(c("emptyFunction")).setErrorHandler(c("emptyFunction")).setData({sidebar_mode:c("ChatSidebarStore").isEnabled(),window_id:c("PresenceUtil").getSessionID()}).setAllowCrossPageTransition(true).send()}var L={init:function M(N,O,P){__p&&__p();L.init=c("emptyFunction");c("ChatPerfInstrumentation").initDivebar();c("ChatDispatcher").explicitlyRegisterStore(c("ChatSidebarStore"));if(i&&j)i.explicitlyRegisterStore(j);c("ChatSidebarActions").loaded();n=N;o=O;q=P;k=c("DOM").find(N,"div.fbChatSidebarBody");m=c("DOM").find(N,"._51x_");p=c("DOM").find(N,"._5qqe");c("Event").listen(window,"resize",function(){var Q=babelHelpers["extends"]({},u)||{};D(Q)});c("KeyEventController").registerKey("q",function(event){__p&&__p();if(c("ChatSidebarStore").getVisibleType()!==c("SidebarType").SIDEBAR)return;if(!l){var Q=c("DOM").scry(N,"._3rhb input");if(Q.length>0)l=Q[0]}if(l){l.focus();event.prevent()}});o.setScrollContainer(c("Parent").byClass(o.getRoot(),"uiScrollableAreaWrap"));c("Arbiter").subscribe("chat/option-changed",function(Q,R){var S=R.name;if(S==="hide_groups"||S==="hide_admined_pages"||S==="hide_businesses")J()});c("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps","PagesDivebar/show-pages","PagesDivebar/hide-pages"],J);c("Arbiter").subscribe("sidebar/typeahead/active",z);c("PresencePrivacy").subscribe("privacy-user-presence-changed",E);c("ChatSidebarStore").addListener(function(){var Q=c("ChatSidebarStore").getState(),R=c("ChatSidebarStore").getPrevState();if(Q.visible!==R.visible)switch(Q.visible){case c("SidebarType").SIDEBAR:G();break;case c("SidebarType").BUDDYLIST:C();break}if(Q.enabled!==R.enabled)K()});if(j)j.addListener(function(){return J()});D();c("onAfterLoadSafe")(function(){c("Bootloader").loadModules(["ChatImpressionLogger"],function(Q){Q.init(o)},"ChatSidebar")});c("ViewportBounds").addPersistentRight(B);c("Arbiter").inform("sidebar/initialized",L,c("Arbiter").BEHAVIOR_STATE);c("ChatSidebarActions").init();c("ChatPerfInstrumentation").logSIDEBAR_DISPLAY_DONE()},ensureLoaded:function M(){__p&&__p();if(!c("ChatSidebarStore").isEnabled())return;if(c("ChatSidebarStore").isLoaded())return;if(c("ge")("pagelet_sidebar"))return;c("Bootloader").loadModules(["UIPagelet"],function(N){var O=c("DOM").create("div",{id:"pagelet_sidebar"});c("DOM").appendContent(document.body,O);N.loadFromEndpoint("SidebarPagelet","pagelet_sidebar")},"ChatSidebar");c("ChatSidebarActions").loaded()},hide:function M(){if(!c("ChatSidebarStore").isEnabled())return;c("ChatSidebarActions").disable()},unhide:function M(){if(c("ChatSidebarStore").isEnabled())return;c("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null,function(N,O){c("ChatSidebarActions").enable(N?c("SidebarType").SIDEBAR:c("SidebarType").BUDDYLIST)})},_cacheViewport:function M(){u=c("ChatSidebarVisibility").getViewport()},getBodyHeight:function M(){return c("gkx")("AT6ezxCFIuDr3f155YU0cVompttkL6-4ye5A4xnJR5wWiQ5IOmLV0d94XM9VgwajF9248OtJTIz0cnvOn5PCMW2_")?F():F(Array.from(m.childNodes))}};c("Arbiter").subscribe(c("JSLogger").DUMP_EVENT,function(M,N){N.sidebar_visible=y()});L.init=c("TimeSlice").guard(L.init,"ChatSidebar init");f.exports=L}),null);