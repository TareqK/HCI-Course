if (self.CavalryLogger) { CavalryLogger.start_js(["tbpl5"]); }

__d("UFIReactionsAnimationPreloader",["Promise","Keyframes","UFIReactionsKeyframesAssets","UFIReactionTypes"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=false,i=false;function j(m){__p&&__p();var n=[];for(var o=Object.entries(c("UFIReactionsKeyframesAssets").reactions),p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var r;if(p){if(q>=o.length)break;r=o[q++]}else{q=o.next();if(q.done)break;r=q.value}var s=r,t=s[0],u=s[1];if(m.indexOf(Number(t))!==-1&&typeof u==="string"){var v={projectName:"feedback_reactions",assetName:c("UFIReactionTypes").reactions[t].name};n.push(c("Keyframes").requestDecodedAssetOnly(u,v))}}return c("Promise").all(n)}function k(){return c("Keyframes").preloadPackage(c("UFIReactionsKeyframesAssets")["package"].uri,{projectName:"feedback_reactions",packageName:c("UFIReactionsKeyframesAssets")["package"].name})}function l(){this.$UFIReactionsAnimationPreloader1=false}l.prototype.usePackage=function(m){this.$UFIReactionsAnimationPreloader1=m;return this};l.prototype.load=function(m){if(!h){h=true;this.$UFIReactionsAnimationPreloader2(m).done(function(){i=true},function(){h=false})}};l.prototype.$UFIReactionsAnimationPreloader2=function(m){if(this.$UFIReactionsAnimationPreloader1){var n=m.filter(function(o){return c("UFIReactionsKeyframesAssets")["package"].ids[o]==null});return c("Promise").all([k(),j(n)])}return j(m)};f.exports=l}),null);