if (self.CavalryLogger) { CavalryLogger.start_js(["W+QVQ"]); }

__d("MessengerSearchFunnelLoggerConstants",[],(function a(b,c,d,e,f,g){"use strict";f.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("ChatSearchSource",["requireWeak","AbstractSearchSource","AsyncRequest","Bootloader","CurrentUser","MercuryParticipantTypes","MessengerSearchFunnelLoggerConstants","SearchableEntry","SearchSourceCallbackManager","ShortProfiles","TokenizeUtil","debounce","emptyFunction","isValidUniqueID"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=null;c("requireWeak")("OrderedFriendsList",function(l){j=l});h=babelHelpers.inherits(k,c("AbstractSearchSource"));i=h&&h.prototype;function k(l){i.constructor.call(this);this.$ChatSearchSource1=new(c("SearchSourceCallbackManager"))({parseFn:c("TokenizeUtil").parse,matchFn:c("TokenizeUtil").isQueryMatch,indexFn:l.indexFn});this.$ChatSearchSource2=l.queryRequests||[];this.$ChatSearchSource3=l.searchType||"";this.$ChatSearchSource4=false;this.$ChatSearchSource5=c("debounce")(this.$ChatSearchSource5,100,this);this.$ChatSearchSource6=l.excludeMemorializedUsers||false;this.$ChatSearchSource7=""}k.prototype.bootstrapImpl=function(l){c("ShortProfiles").fetchAll().done(function(){this.$ChatSearchSource4=true;this.$ChatSearchSource8();l()}.bind(this))};k.prototype.searchImpl=function(l,m,n){__p&&__p();var o=null,p={},q=n&&n.onQueryFinished,r=n&&n.onQueryStarted;r&&r(l);var s=this.$ChatSearchSource1.search(l,function(v){__p&&__p();if(!o){o=v;o.forEach(function(w){return p[w.getUniqueID()]=true})}else v.forEach(function(w){var x=w.getUniqueID();if(!p[x]){o.push(w);p[x]=true}});m(o,l);if(l.length===1&&this.$ChatSearchSource4)q&&q(l)}.bind(this),n);if(!s||!this.$ChatSearchSource2||!this.$ChatSearchSource2.length||l.length===0){q&&q(l);return}if(l.length===1){if(this.$ChatSearchSource4)q&&q(l);return}var t={value:l,existing_ids:o&&o.map(function(v){return v.getUniqueID()}).join(","),limit:n&&n.threadLimit,exclude_memorialized_users:this.$ChatSearchSource6},u=this.$ChatSearchSource2.length;this.$ChatSearchSource2.forEach(function(v){this.$ChatSearchSource5(t,v,function(w){this.$ChatSearchSource9(this.$ChatSearchSource10(this.$ChatSearchSource11(w)).filter(function(x){return!!x}),l);u--;if(u===0){this.$ChatSearchSource1.setQueryStringAsExhausted(l);q&&q(l)}}.bind(this))}.bind(this),this)};k.prototype.getAllEntriesMap=function(){return this.$ChatSearchSource1.getAllEntries()};k.prototype.$ChatSearchSource8=function(){var l=c("ShortProfiles").getCachedProfileIDs(),m=l.filter(function(o){var p=c("ShortProfiles").getNow(o);return o==c("CurrentUser").getID()||p.type===c("MercuryParticipantTypes").FRIEND||p.type===c("MercuryParticipantTypes").FB4C}),n=m.map(this.$ChatSearchSource12);if(n.length)this.$ChatSearchSource1.addLocalEntries(n)};k.prototype.$ChatSearchSource10=function(l){return l.map(this.$ChatSearchSource13,this)};k.prototype.$ChatSearchSource13=function(l,m){__p&&__p();if(l.mercury_thread){if(!j)return null;return j.normalizeThreadEntry(l,m)}var n=l.text,o=l.uid;if(!n||!c("isValidUniqueID")(o))return null;var p=j?j.getActiveRank(o):0;if(j&&!j.contains(o))p+=m;return new(c("SearchableEntry"))({uniqueID:o,title:n,order:p,subtitle:l.subtext,type:l.render_type||l.type,photo:l.photo,uri:l.path,auxiliaryData:{isMessengerUser:l.is_messenger_user,alias:l.alias}})};k.prototype.$ChatSearchSource11=function(l){var m=l.getPayload();if(Array.isArray(m))return m;else if(m&&m.entries)return m.entries;else return[]};k.prototype.$ChatSearchSource12=function(l){var m=c("ShortProfiles").getNow(l),n=l==c("CurrentUser").getID()?c("MercuryParticipantTypes").FRIEND:m.type,o=[m.additionalName,m.alternateName].concat(m.searchTokens||[]).join(" "),p=m.name,q=null;return new(c("SearchableEntry"))({uniqueID:l,title:p,order:j?j.getActiveRank(l):0,subtitle:q,keywordString:o,type:n,photo:m.thumbSrc,uri:m.uri,auxiliaryData:{isMessengerUser:m.is_messenger_user,alias:m.alias}})};k.prototype.$ChatSearchSource5=function(l,m,n,o){if(this.$ChatSearchSource3===c("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG&&l.value!==this.$ChatSearchSource7){c("Bootloader").loadModules(["MessengerSearchFunnelLogger"],function(p){p.logStartQuery(c("MessengerSearchFunnelLoggerConstants").NAME,l.value)},"ChatSearchSource");this.$ChatSearchSource7=l.value}new(c("AsyncRequest"))(m.uri).setData(babelHelpers["extends"]({},l,m.data)).setMethod("GET").setReadOnly(true).setHandler(n).setErrorHandler(o||c("emptyFunction")).setAllowCrossPageTransition(true).send()};k.prototype.$ChatSearchSource9=function(l,m){if(l.length)this.$ChatSearchSource1.addQueryEntries(l,m)};k.prototype.addLocalEntries=function(l){this.$ChatSearchSource1.addLocalEntries(l)};k.prototype.refreshData=function(){c("ShortProfiles").fetchAll()};f.exports=k}),null);
__d("MessengerTypeaheadUtils",["fbt","ix","immutable","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","WorkModeConfig","gkx","mapObject"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=c("immutable").OrderedMap,l=500,m=100,n=c("WorkModeConfig").is_work_user||c("gkx")("AT62Bmuf0c-b-qsSo41XTNJvFn7VwRrjwsI0onsrzyJ35XDxvhLHgPbXt3hZorqUAYplG7jtkngT9YqyGngqDfMq")?[c("MercuryTypeaheadConstants").SEARCH_TYPE,c("MercuryTypeaheadConstants").FRIEND_TYPE,c("MercuryTypeaheadConstants").FB4C_TYPE,c("MercuryTypeaheadConstants").THREAD_TYPE,c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,c("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,c("MercuryTypeaheadConstants").PAGE_TYPE,c("MercuryTypeaheadConstants").NON_FRIEND_TYPE,c("MercuryTypeaheadConstants").GAME_TYPE]:[c("MercuryTypeaheadConstants").SEARCH_TYPE,c("MercuryTypeaheadConstants").FRIEND_TYPE,c("MercuryTypeaheadConstants").THREAD_TYPE,c("MercuryTypeaheadConstants").FB4C_TYPE,c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,c("MercuryTypeaheadConstants").PAGE_TYPE,c("MercuryTypeaheadConstants").NON_FRIEND_TYPE,c("MercuryTypeaheadConstants").GAME_TYPE],o=(j={},j[c("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},j[c("MercuryTypeaheadConstants").FRIEND_TYPE]={header:h._("Contacts")},j[c("MercuryTypeaheadConstants").FB4C_TYPE]={header:h._("Colleagues")},j[c("MercuryTypeaheadConstants").THREAD_TYPE]={header:h._("Group conversations")},j[c("MercuryTypeaheadConstants").PAGE_TYPE]={header:h._("Businesses")},j[c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:h._("Meeting rooms")},j[c("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:h._("Bots")},j[c("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:h._("More people")},j.game={header:h._("Games")},j),p={sortEntries:function q(r,s){__p&&__p();var t=[],u=[],v=[],w=[],x=[],y=[],z=[],A=[],B=[];r.forEach(function(C){__p&&__p();switch(C.getType()){case c("MercuryTypeaheadConstants").FRIEND_TYPE:u.push(C);break;case c("MercuryTypeaheadConstants").FB4C_TYPE:v.push(C);break;case c("MercuryTypeaheadConstants").THREAD_TYPE:w.push(C);break;case c("MercuryTypeaheadConstants").PAGE_TYPE:case c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:y.push(C);break;case c("MercuryTypeaheadConstants").NON_FRIEND_TYPE:x.push(C);break;case c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:z.push(C);break;case c("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:A.push(C);break;case c("MercuryTypeaheadConstants").SEARCH_TYPE:t.push(C);break;case c("MercuryTypeaheadConstants").GAME_TYPE:B.push(C);break}});return t.concat(u,v,w,z,A,y,x,B)},sortEntriesWithoutPages:function q(r){__p&&__p();var s=[],t=[],u=[],v=[];r.forEach(function(w){switch(w.getType()){case c("MercuryTypeaheadConstants").FRIEND_TYPE:s.push(w);break;case c("MercuryTypeaheadConstants").FB4C_TYPE:t.push(w);break;case c("MercuryTypeaheadConstants").THREAD_TYPE:u.push(w);break;case c("MercuryTypeaheadConstants").NON_FRIEND_TYPE:v.push(w);break}});return s.concat(t,u,v)},sortEntriesWithoutGroupsOrViewer:function q(r,s){__p&&__p();var t=[],u=[],v=[];r.forEach(function(w){if(w.getUniqueID()===s)return;switch(w.getType()){case c("MercuryTypeaheadConstants").FRIEND_TYPE:t.push(w);break;case c("MercuryTypeaheadConstants").FB4C_TYPE:u.push(w);break;case c("MercuryTypeaheadConstants").NON_FRIEND_TYPE:v.push(w);break}});return t.concat(u,v)},getEntryOrder:function q(r){var s=arguments.length<=1||arguments[1]===undefined?n:arguments[1];return s},orderEntries:function q(r,s){var t=[];this.getEntryOrder(s).filter(function(u){return u!==c("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(c("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(u){return t.push.apply(t,r.filter(function(v){return this.areSectionsEqual(v.getType(),u)}.bind(this)))}.bind(this));return t},buildSingleSection:function q(r){return k([["",r]])},buildListSections:function q(r,s,t){__p&&__p();if(!r.length)return k();t=this.getEntryOrder(s,t);var u=c("mapObject")(o,function(v){return babelHelpers["extends"]({},v,{entries:[]})});u[c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=u[c("MercuryTypeaheadConstants").PAGE_TYPE];r.forEach(function(v){var w=v.getType();if(u[w])u[w].entries.push(v)});return k(t.filter(function(v){return u[v].entries.length}).map(function(v){return[u[v].header,u[v].entries]}))},buildCustomSection:function q(r,s){var t;return t={},t[r]=s,t},areSectionsEqual:function q(r,s){if(r===c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE)return s===c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||s===c("MercuryTypeaheadConstants").PAGE_TYPE;return r===s},scrollEntryIntoView:function q(r,s){var t=c("ReactDOM").findDOMNode(s),u=s.getScrollTop(),v=r.offsetTop-u,w=t.offsetHeight-r.offsetHeight,x=Math.abs(w-v);if(v>=w&&x<=m)s.scrollToPosition(u+v-w,true,{duration:l});else if(v<0&&x<=w+m)s.scrollToPosition(u+v,true,{duration:l})},getMessageSearchEntry:function q(r){if(!c("MessengerEnvironment").messengerui||r.length<2)return null;return new(c("SearchableEntry"))({uniqueID:"__special_search_entry__",title:h._("Search messages for \"{queryString}\"",[h.param("queryString",r)]),photo:i("86924"),type:c("MercuryTypeaheadConstants").SEARCH_TYPE})}};f.exports=p}),null);
__d("MessengerDialogCancelButton.react",["fbt","MessengerDialogButton.react","React"],(function a(b,c,d,e,f,g,h){"use strict";var i,j;i=babelHelpers.inherits(k,c("React").PureComponent);j=i&&i.prototype;k.prototype.render=function(){return c("React").createElement(c("MessengerDialogButton.react"),babelHelpers["extends"]({action:"cancel",label:h._("Cancel"),type:"secondary"},this.props))};function k(){i.apply(this,arguments)}f.exports=k}),null);
__d("ImageReact.bs",["Image.react","ReasonReact.bs","bs_js_null_undefined"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l,m,n,o,p){return c("ReasonReact.bs").wrapJsForReason(c("Image.react"),{className:c("bs_js_null_undefined").from_opt(i),alt:c("bs_js_null_undefined").from_opt(j),src:c("bs_js_null_undefined").from_opt(k),height:c("bs_js_null_undefined").from_opt(l),title:c("bs_js_null_undefined").from_opt(m),width:c("bs_js_null_undefined").from_opt(n),style:c("bs_js_null_undefined").from_opt(o)},p)}g.make=h}),null);
__d("MessengerSpinnerReact.bs",["cx","ix","fbt","React","ImageReact.bs","ReasonReact.bs","joinClasses"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k=i("86853"),l=i("86857"),m=i("86854"),n=c("ReasonReact.bs").statelessComponent("MessengerSpinnerReact");function o(s,t,u,v){__p&&__p();var w=s?s[0]:"",x=t?t[0]:"blue",y=u?u[0]:24,z=function z(){var B=+(y===24);if(B!==0){var C=+(x==="blue");if(C!==0)return k;else return l}else return m},A=n.slice();A[9]=function(){return c("React").cloneElement(c("ReasonReact.bs").element(0,0,c("ImageReact.bs").make([c("joinClasses")(w,"_3u55 _3qh2")],0,[z(0)],[y],0,[y],0,[])),{"aria-label":j._("Loading..."),"aria-busy":true})};return A}var p=c("ReasonReact.bs").wrapReasonForJs(n,function(s){var t=s.className,u=s.color,v=s.size;return o([t==null?"":t],[u==null?"blue":u],[v==null?24:v],[])}),q=32,r=24;g.large_size=q;g.medium_size=r;g.blue_src=k;g.grey_src=l;g.large_blue_src=m;g.component=n;g.make=o;g.jsComponent=p}),null);
__d("MessengerSpinner.react",["MessengerSpinnerReact.bs"],(function a(b,c,d,e,f,g){f.exports=c("MessengerSpinnerReact.bs").jsComponent;f.exports.large_size=c("MessengerSpinnerReact.bs").large_size;f.exports.medium_size=c("MessengerSpinnerReact.bs").medium_size}),null);