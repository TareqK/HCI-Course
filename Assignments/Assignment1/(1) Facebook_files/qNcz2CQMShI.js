if (self.CavalryLogger) { CavalryLogger.start_js(["sbYF0"]); }

__d("FantaReducersSharePreview",["Bootloader","FantaMessageActions","FantaTypeSharePreview","immutable","ifRequired","setImmediate"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("FantaMessageActions").Types,i="scraperLastPermissiveMatch";function j(q,r){switch(r.type){case h.COMPOSER_TEXT_UPDATE:var s=r.message,t=r.threadID,u=r.composer,v=q.mercury.tabContents.get(t);if(!v||v&&v.composer.version!==u.version)return q;q=k(q,s,t)}return q}function k(q,r,s){__p&&__p();c("ifRequired")("URLMatcher",function(t){__p&&__p();c("ifRequired")("DataStore",function(u){__p&&__p();if(r.length===0)u.remove(s,i);else{var v=q.mercury.tabContents.get(s);if(!v)return q;if(!t.trigger(r+" ")){var w=t.match(r),x=t.permissiveMatch(r);if(x&&x!==u.get(s,i)){u.set(s,i,x);q=q.mergeIn(["mercury","tabContents",s,"composer","sharePreview"],{params:null,type:null,uri:w||x})}}}})},function(){c("Bootloader").loadModules(["URLMatcher","DataStore"],function(t,u){var v;if(r.length>0)(function(){var w=q.mercury.tabContents.get(s),x=w&&w.composer;c("setImmediate")(function(){c("FantaMessageActions").composerTextUpdate(s,r,x)})})()},"FantaReducersSharePreview")});return q}function l(q,r){switch(r.type){case h.LINK_PREVIEW:var s=r.uri,t=r.tabID;if(!q.mercury.tabContents.get(t))return q;q=q.mergeIn(["mercury","tabContents",t,"composer","sharePreview"],{params:null,type:null,uri:s})}return q}function m(q,r){switch(r.type){case h.LOADED_SHARE_DATA:var s=r.attachmentData,t=r.composer,u=r.tabID,v=s.share_data,w=q.mercury.tabContents.get(u);if(!w||w.composer.version!==t.version)return q;q=q.mergeIn(["mercury","tabContents",u,"composer","sharePreview"],{isLoading:false,params:c("immutable").Map({data:v.share_params}),type:v.share_type})}return q}function n(q,r){switch(r.type){case h.LOADING_SHARE_DATA:var s=r.composer,t=r.tabID,u=q.mercury.tabContents.get(t);if(!u||u.composer.version!==s.version)return q;q=q.mergeIn(["mercury","tabContents",t,"composer","sharePreview"],{isLoading:true,params:null,type:null})}return q}function o(q,r){switch(r.type){case h.REMOVE_SHARE_PREVIEW:var s=r.tabID;q=p(q,s)}return q}function p(q,r){if(!q.mercury.tabContents.get(r))return q;return q.setIn(["mercury","tabContents",r,"composer","sharePreview"],new(c("FantaTypeSharePreview"))())}f.exports={closeTab:o,composerTextUpdate:j,linkPreview:l,loadedShareData:m,loadingShareData:n}}),null);
__d("promiseTimeout",["Promise","setTimeout"],(function a(b,c,d,e,f,g){"use strict";function h(i){return new(c("Promise"))(function(j){return void c("setTimeout")(j,i)})}f.exports=h}),null);