if (self.CavalryLogger) { CavalryLogger.start_js(["HqWtw"]); }

__d("MessengerThreadSharedMediaHelper",["AsyncRequest","MessengerThreadSharedMediaAfterWebGraphQLQuery","MessengerThreadSharedMediaBeforeWebGraphQLQuery","MessengerThreadSharedMediaFindWebGraphQLQuery"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={search:function i(j,k,l){var m=new(c("AsyncRequest"))(c("MessengerThreadSharedMediaFindWebGraphQLQuery").getLegacyURI({id:j,photoID:k}));m.setAllowCrossPageTransition(true).exec().then(function(n){return n.getPayload()}).done(function(n){return l(n)});return m},loadMorePrevious:function i(j,k,l,m){var n=new(c("AsyncRequest"))(c("MessengerThreadSharedMediaAfterWebGraphQLQuery").getLegacyURI({id:j,after:k,first:l}));n.setAllowCrossPageTransition(true).exec().then(function(o){return o.getPayload()}).done(function(o){return m(o)});return n},loadMoreLatest:function i(j,k,l,m){var n=new(c("AsyncRequest"))(c("MessengerThreadSharedMediaBeforeWebGraphQLQuery").getLegacyURI({id:j,before:k,last:l}));n.setAllowCrossPageTransition(true).exec().then(function(o){return o.getPayload()}).done(function(o){return m(o)});return n}};f.exports=h}),null);