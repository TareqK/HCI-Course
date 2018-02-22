if (self.CavalryLogger) { CavalryLogger.start_js(["NQYVz"]); }

__d("AYMTTipActionTypes",["keyMirrorRecursive"],(function a(b,c,d,e,f,g){"use strict";var h="AYMT",i={TIPS_REQUESTED:"",TIPS_LOADED:"",TIPS_LOADED_ERROR:"",TIPS_DISMISSED:""},j=c("keyMirrorRecursive")(i,h);f.exports=j}),null);
__d("InputLabelLabel_DEPRECATED.react",["React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;j.prototype.render=function(){var k=this.props,l=k.children,m=babelHelpers.objectWithoutProperties(k,["children"]);return c("React").createElement("label",m,l)};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d("BasicFBNux",["AsyncRequest","XBasicFBNuxDismissController","XBasicFBNuxViewController"],(function a(b,c,d,e,f,g){var h={subscribeHide:function i(j,k){j.subscribe("hide",h.onDismiss.bind(this,k))},onView:function i(j){var k=c("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",j).getURI();new(c("AsyncRequest"))().setURI(k).send()},onDismiss:function i(j){var k=c("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",j).getURI();new(c("AsyncRequest"))().setURI(k).send()}};f.exports=h}),null);
__d("AsyncLayout",["AjaxPipeRequest","Arbiter","AsyncRequest","AsyncResponse","CSS","FaceliftGating","DOM","HTML","NavigationMessage","PageTransitionsRegistrar","URI","$","emptyFunction","ge","goURI","requireWeak"],(function a(b,c,d,e,f,g){__p&&__p();var h;c("requireWeak")("PageTransitions",function(j){h=j});function i(j){"use strict";__p&&__p();this.canvasID=j;if(c("ge")("rightCol"))this.auxiliaryID="rightCol";if(c("ge")("headerArea"))this.headerID="headerArea";if(c("ge")("toolbarContainer"))this.toolbarID="toolbarContainer";this.waitingForAux=false;c("PageTransitionsRegistrar").registerHandler(this.catchPageTransition.bind(this));this.subscription=c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN,this.onNavigate.bind(this));c("Arbiter").inform("AsyncLayout/initialized",null,c("Arbiter").BEHAVIOR_STATE)}i.prototype.catchPageTransition=function(j){"use strict";this.subscription.unsubscribe();return false};i.prototype.getCanvasID=function(j){"use strict";return j.sidecol?"contentCol":"contentArea"};i.prototype.onNavigate=function(j,k){"use strict";__p&&__p();var l=k.useAjaxPipe;k=k.params;if(k.endpoint){if(this.request){this.request.setFinallyHandler(c("emptyFunction"));this.request.abort()}if(l){k.xui_grid=c("FaceliftGating").hasXUIGrid;this.request=new(c("AjaxPipeRequest"))(this.getCanvasID(k),k.endpoint).setData(k).setFinallyHandler(this.finallyHandler.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFirstResponseCallback(this.firstResponseCallback.bind(this)).send()}else{k.handled=true;this.waitingForAux=k.sidecol;var m=!!k.iframe,n=new(c("AsyncRequest"))().setOption("useIframeTransport",m).setURI(new(c("URI"))(k.endpoint)).setReadOnly(true).setMethod("GET").setData(k).setHandler(this.onResponse.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFinallyHandler(this.finallyHandler.bind(this));this.request=n;n.send()}}};i.prototype.receivedAux=function(j){"use strict";!this.waitingForAux;this.waitingForAux=false;c("DOM").setContent(c("$")(this.auxiliaryID),c("HTML")(j))};i.prototype.onResponse=function(j){"use strict";__p&&__p();var k=j.getPayload();if(k.redirect)c("goURI")(k.redirect);else{var l=k.html||k;c("DOM").setContent(c("$")(this.canvasID),c("HTML")(l));if(k.side_html&&this.auxiliaryID)this.receivedAux(k.side_html);if(this.headerID&&!k.keep_header){var m=c("$")(this.headerID);c("DOM").setContent(m,c("HTML")(k.header_html||""));c("CSS").conditionShow(m,k.header_html)}if(k.toolbar_html&&this.toolbarID)c("DOM").setContent(c("$")(this.toolbarID),c("HTML")(k.toolbar_html));if(k.js)new Function(k.js)();c("CSS").conditionClass(c("$")("contentCol"),"hasRightCol",this.auxiliaryID&&!k.noRightSide);var n=c("ge")("rightCol");if(n&&k.noRightSide)c("DOM").empty(n)}var o=j.getRequest().getData();c("Arbiter").inform(c("NavigationMessage").NAVIGATION_COMPLETED,o.key)};i.prototype.errorHandler=function(j){"use strict";c("AsyncResponse").verboseErrorHandler(j);c("Arbiter").inform(c("NavigationMessage").NAVIGATION_FAILED);this.request=null};i.prototype.firstResponseCallback=function(){"use strict";window.scrollTo(0,0);c("Arbiter").inform(c("NavigationMessage").NAVIGATION_FIRST_RESPONSE)};i.prototype.finallyHandler=function(j){"use strict";this.request=null;if(h)h.transitionComplete(true);c("Arbiter").inform(c("NavigationMessage").NAVIGATION_COMPLETED)};f.exports=i}),null);
__d("AbstractDockingElement",["Arbiter","Event","Run","SubscriptionsHandler","onEnclosingPageletDestroy","queryThenMutateDOM","removeFromArray"],(function a(b,c,d,e,f,g){__p&&__p();var h=[],i=null;function j(){c("queryThenMutateDOM")(function(){return h.forEach(function(m){return m.queryDOM()})},function(){return h.forEach(function(m){return m.updateWithCache()})},"AbstractDockingElement")}function k(){if(!i){i=new(c("SubscriptionsHandler"))();i.addSubscriptions(c("Event").listen(window,"scroll",j),c("Event").listen(window,"resize",j),c("Run").onLeave(function(){while(h.length)l(h[0])}));i=i}return i}function l(m){__p&&__p();try{m.onPageletDestroyed&&c("Arbiter").unsubscribe(m.onPageletDestroyed)}catch(n){}finally{m.onPageletDestroyed=null}if(!i||h.indexOf(m)===-1)return;c("removeFromArray")(h,m);if(h.length)return;i.release();i=null}f.exports={register:function m(n,o,p){var i=k(),q={onPageletDestroyed:i.addSubscriptions(c("onEnclosingPageletDestroy")(n,function(){l(q)})),queryDOM:o,updateWithCache:p};h.push(q)}}}),null);
__d("DirectionalDockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","Scroll","Style","UITinyViewportAction","UserAgent","ViewportBounds","getElementPosition","getStyleProperty","queryThenMutateDOM"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=true,j=false,k=c("UserAgent").isBrowser("Safari < 10")||c("UserAgent").isBrowser("Mobile Safari < 10");function l(m){"use strict";__p&&__p();this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement2=null;this.$DirectionalDockingElement7=false;this.$DirectionalDockingElement12=m;this.$DirectionalDockingElement8=0;this.$DirectionalDockingElement11=null;this.$DirectionalDockingElement13=0;this.register();this.$DirectionalDockingElement14=c("ViewportBounds").getTop();c("Style").set(this.$DirectionalDockingElement12,"width",this.$DirectionalDockingElement12.getBoundingClientRect().width+"px");this.$DirectionalDockingElement9=c("DOM").create("div");c("CSS").addClass(this.$DirectionalDockingElement9,"_lwx");c("Style").set(this.$DirectionalDockingElement9,"position","relative");c("DOM").replace(this.$DirectionalDockingElement12,this.$DirectionalDockingElement9);c("DOM").appendContent(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12);this.update()}l.prototype.register=function(){"use strict";c("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};l.prototype.subscribe=function(event,m,n){"use strict";if(!this.$DirectionalDockingElement1)this.$DirectionalDockingElement1=new(c("Arbiter"))();return this.$DirectionalDockingElement1.subscribe(event,m,n)};l.prototype.destroy=function(){"use strict";c("DOM").replace(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12)};l.prototype.__queryDOM=function(){"use strict";__p&&__p();var m=-c("getElementPosition")(this.$DirectionalDockingElement9).y;if(m!==this.$DirectionalDockingElement13){this.$DirectionalDockingElement15=m>this.$DirectionalDockingElement13?j:i;this.$DirectionalDockingElement13=m}this.$DirectionalDockingElement6=this.$DirectionalDockingElement12.getBoundingClientRect();var n=document,o=n.body,p=n.documentElement;if(o&&p){var q=p.clientHeight,r=p.scrollHeight;this.$DirectionalDockingElement7=c("Scroll").getTop(o)+q>Math.max(q,r)}if(k){this.$DirectionalDockingElement11=c("getElementPosition")(this.$DirectionalDockingElement9);var s=parseInt(c("getStyleProperty")(this.$DirectionalDockingElement12,"left"),10);if(this.$DirectionalDockingElement11&&!isNaN(s)&&s!==this.$DirectionalDockingElement11.x)this.$DirectionalDockingElement11=babelHelpers["extends"]({},this.$DirectionalDockingElement11,{x:s})}if(this.$DirectionalDockingElement12.style.position==="fixed")this.$DirectionalDockingElement5=c("getElementPosition")(this.$DirectionalDockingElement12).y+this.$DirectionalDockingElement13};l.prototype.$DirectionalDockingElement16=function(m,n,o){"use strict";__p&&__p();if(n===this.$DirectionalDockingElement4&&m===this.$DirectionalDockingElement3&&o===this.$DirectionalDockingElement2)return;var p=m!==this.$DirectionalDockingElement3,q={};if(n!==this.$DirectionalDockingElement4){q.top=n+"px";this.$DirectionalDockingElement4=n}if(m!==this.$DirectionalDockingElement3){q.position=m;this.$DirectionalDockingElement3=m}if(k)if(o!==this.$DirectionalDockingElement2){q.left=typeof o==="number"?o+"px":"auto";this.$DirectionalDockingElement2=o}c("Style").apply(this.$DirectionalDockingElement12,q);if(p&&this.$DirectionalDockingElement1)this.$DirectionalDockingElement1.inform("changedposition")};l.prototype.$DirectionalDockingElement17=function(){"use strict";this.$DirectionalDockingElement16("fixed",this.$DirectionalDockingElement14,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null)};l.prototype.$DirectionalDockingElement18=function(){"use strict";this.$DirectionalDockingElement16("fixed",this.$DirectionalDockingElement8,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null)};l.prototype.$DirectionalDockingElement19=function(){"use strict";this.$DirectionalDockingElement16("absolute",this.$DirectionalDockingElement5,null)};l.prototype.unfixAndScrollBy=function(m){"use strict";this.$DirectionalDockingElement5=Math.max(0,this.$DirectionalDockingElement5-m);this.$DirectionalDockingElement19()};l.prototype.translateY=function(m){"use strict";var n=c("getElementPosition")(this.$DirectionalDockingElement12).y,o=c("getElementPosition")(this.$DirectionalDockingElement9).y,p=n-o;this.$DirectionalDockingElement5=m+p;this.$DirectionalDockingElement19()};l.prototype.__updateWithCache=function(){"use strict";__p&&__p();var m=Math.round(this.$DirectionalDockingElement6.height);if(m!==this.$DirectionalDockingElement10){c("Style").set(this.$DirectionalDockingElement9,"height",m+"px");this.$DirectionalDockingElement10=m;this.$DirectionalDockingElement1&&this.$DirectionalDockingElement1.inform("changedheight")}if(this.$DirectionalDockingElement7)return;if(this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<0||c("UITinyViewportAction").isTiny()){this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement19();c("Arbiter").inform("reflow");return}if(this.$DirectionalDockingElement15===j&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement8>=this.$DirectionalDockingElement5)this.$DirectionalDockingElement18();else if(this.$DirectionalDockingElement15===i&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<=this.$DirectionalDockingElement5)this.$DirectionalDockingElement17();else this.$DirectionalDockingElement19();c("Arbiter").inform("reflow")};l.prototype.update=function(){"use strict";c("queryThenMutateDOM")(function(){this.__queryDOM()}.bind(this),function(){this.__updateWithCache()}.bind(this))};l.prototype.setOffset=function(m){"use strict";return this.setOffsetAndTop(m,this.$DirectionalDockingElement14)};l.prototype.setOffsetAndTop=function(m,n){"use strict";c("queryThenMutateDOM")(function(){this.__queryDOM();this.$DirectionalDockingElement8=Math.round(m);this.$DirectionalDockingElement14=n}.bind(this),function(){this.__updateWithCache()}.bind(this));return this};l.prototype.setTop=function(m){"use strict";return this.setOffsetAndTop(this.$DirectionalDockingElement8,m)};l.prototype.getPlaceholder=function(){"use strict";return this.$DirectionalDockingElement9};l.prototype.getRoot=function(){"use strict";return this.$DirectionalDockingElement12};f.exports=l}),null);
__d("DockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","DOMDimensions","Style","UserAgent","UIGridColumnsConfig","UITinyViewportAction","getElementPosition","mixin"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=c("UserAgent").isBrowser("Safari")||c("UserAgent").isBrowser("Mobile Safari < 11");function j(k){__p&&__p();var l=arguments.length<=1||arguments[1]===undefined?false:arguments[1];"use strict";this.$DockingElement13=k;this.$DockingElement12=l;this.$DockingElement9=c("DOM").create("div");c("CSS").addClass(this.$DockingElement9,"_1pfm");c("Style").set(this.$DockingElement9,"position","relative");c("DOM").replace(this.$DockingElement13,this.$DockingElement9);c("DOM").appendContent(this.$DockingElement9,this.$DockingElement13);this.$DockingElement8=0;this.register();this.update()}j.prototype.register=function(){"use strict";c("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};j.prototype.subscribe=function(event,k,l){"use strict";if(!this.$DockingElement1)this.$DockingElement1=new(c("Arbiter"))();return this.$DockingElement1.subscribe(event,k,l)};j.prototype.__queryDOM=function(){"use strict";this.$DockingElement11=c("getElementPosition")(this.getPlaceholder());this.$DockingElement5=c("DOMDimensions").getElementDimensions(this.$DockingElement13)};j.prototype.__updateWithCache=function(){"use strict";__p&&__p();var k=this.$DockingElement8,l=this.getPlaceholder(),m=!c("UIGridColumnsConfig").responsive_rhc_when_narrow&&c("UITinyViewportAction").isTiny();if(!m&&this.$DockingElement11.y<=k){if(!this.$DockingElement7&&this.$DockingElement13.parentNode){c("CSS").addClass(this.$DockingElement13,"fixed_elem");this.$DockingElement7=true}var n;if(this.$DockingElement4!==k){n={};n.top=k+"px";this.$DockingElement4=k}var o=this.$DockingElement5.width;if(o!==this.$DockingElement3){if(!this.$DockingElement12){n=n||{};n.width=o+"px"}this.$DockingElement3=o}if(i){var p=this.$DockingElement11.x;if(p!==this.$DockingElement2){n=n||{};n.left=p+"px";this.$DockingElement2=p}}n&&c("Style").apply(this.$DockingElement13,n);var q=this.$DockingElement5.height;c("Style").set(l,"height",q+"px");if(q+1<this.$DockingElement10||q-1>this.$DockingElement10){this.$DockingElement10=q;this.$DockingElement1&&this.$DockingElement1.inform("changedheight")}}else if(this.$DockingElement7){c("Style").set(l,"height","");c("Style").apply(this.$DockingElement13,{left:"",top:"",width:""});c("CSS").removeClass(this.$DockingElement13,"fixed_elem");this.$DockingElement7=false;this.$DockingElement2=null;this.$DockingElement3=null;this.$DockingElement4=null}};j.prototype.update=function(){"use strict";this.__queryDOM();this.__updateWithCache()};j.prototype.getPlaceholder=function(){"use strict";return this.$DockingElement9};j.prototype.getRoot=function(){"use strict";return this.$DockingElement13};j.prototype.setOffset=function(k){"use strict";this.$DockingElement8=k;this.update();return this};f.exports=j}),null);
__d("StickyRHC",["csx","$","Arbiter","DirectionalDockingElement","DockingElement","DOMDimensions","DOMQuery","Event","Run","SubscriptionsHandler","ViewportBounds","JSReliabilityFixesGatingConfig","ge","getElementPosition","getViewportDimensions","removeFromArray","throttle"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=35,j=[],k;function l(z,A){__p&&__p();if(!A||!A.dom_id){j.forEach(m);return}var B=c("$")(A.dom_id);for(var C=0;C<j.length;C++)if(c("DOMQuery").contains(j[C].getRoot(),B)){m(j[C]);return}}function m(z){__p&&__p();var A=z.getRoot(),B=z.updateOffset.bind(z),C=c("DOMQuery").scry(A,"img.img");C.forEach(function(D){if(D.complete||D.getAttribute("height")||D.naturalHeight===undefined&&D.naturalHeight!==0)return;var E=function E(){B();F.remove();G.remove();H.remove()},F=c("Event").listen(D,"load",E),G=c("Event").listen(D,"error",E),H=c("Event").listen(D,"abort",E)});B()}function n(){j.forEach(function(z){z.updateOffset()})}function o(){n();n()}function p(z){var A=c("DOMQuery").scry(z,"._4-u2"),B=c("DOMQuery").scry(z,"._4-u3"),C=c("DOMQuery").scry(z,".uiHeader"),D=c("DOMQuery").scry(z,".ego_unit");return[].concat(A,B,C,D).filter(function(E){return t(E)!==0})}function q(z){return c("getElementPosition")(z).y}function r(z,A){return z-A}function s(){return t(c("ge")("pageFooter"))}function t(z){return z?c("DOMDimensions").getElementDimensions(z).height:0}var u=v(n);function v(z){return function(A){return c("Arbiter").subscribe(A,z)}}function w(z,A){__p&&__p();var B=arguments.length<=2||arguments[2]===undefined?true:arguments[2],C=arguments.length<=3||arguments[3]===undefined?false:arguments[3];"use strict";this.$StickyRHC1=z;this.$StickyRHC2=A?new(c("DirectionalDockingElement"))(z):new(c("DockingElement"))(z,C);this.$StickyRHC3=B;this.$StickyRHC2.subscribe("changedheight",this.updateOffset.bind(this));this.updateOffset();m(this);if(!j.length){k=new(c("SubscriptionsHandler"))();k.addSubscriptions(u("header_loaded"),u("responsive_rhc_loaded"),u("browse_top_filters_full_width_displayed"),u("search_top_bar_displayed"),u("ad_home_pagelet_loaded"),c("Arbiter").subscribe("netego_loaded",l),c("Arbiter").subscribe("video_fullscreen_change",o),c("Event").listen(window,"resize",c("throttle")(n)))}c("Run").onLeave(function(){return this.destroy()}.bind(this));j.push(this)}w.getInstances=function(){"use strict";return j};w.prototype.getRoot=function(){"use strict";return this.$StickyRHC1};w.prototype.subscribe=function(event,z){"use strict";return this.$StickyRHC2.subscribe(event,z)};w.prototype.destroy=function(){"use strict";this.$StickyRHC2=null;c("removeFromArray")(j,this);if(!j.length&&k){k.release();k=null}};w.prototype.unfixAndScrollBy=function(z){"use strict";if(c("JSReliabilityFixesGatingConfig").should_get_fix)this.$StickyRHC2&&this.$StickyRHC2.unfixAndScrollBy(z);else this.$StickyRHC2.unfixAndScrollBy(z)};w.prototype.updateOffset=function(){"use strict";if(c("JSReliabilityFixesGatingConfig").should_get_fix)this.$StickyRHC2&&this.$StickyRHC2.setOffset(this.calculateRHCOffset());else this.$StickyRHC2.setOffset(this.calculateRHCOffset())};w.prototype.calculateRHCOffset=function(){"use strict";__p&&__p();var z=this.getRoot(),A=t(z),B=x(),C=y();if(A<C)return B;if(this.$StickyRHC3){var D=p(z).map(q).sort(r),E=A+q(z);for(var F=D,G=Array.isArray(F),H=0,F=G?F:F[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var I;if(G){if(H>=F.length)break;I=F[H++]}else{H=F.next();if(H.done)break;I=H.value}var J=I,K=E-J;if(K<C)return B-(A-K)}}return B-(A-C)};function x(){return c("ViewportBounds").getTop()}function y(){var z=x(),A=c("getViewportDimensions")().height,B=s();return A-z-i-B}f.exports=w}),null);
__d("XUISubNavigationLoader",["cx","csx","AjaxPipeRequest","CSS","DOM","FIGEntityPageLayout","PageHooks","PageTransitions","PageTransitionsRegistrar","Parent","Run","createCancelableFunction"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j="._3o_h",k="content_container",l="_4t7n",m="._4t7n",n="_2fvv",o="_2yap",p="._2yap",q=null,r=[],s=[],t=null;function u(w){__p&&__p();for(var x=r,y=Array.isArray(x),z=0,x=y?x:x[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var A;if(y){if(z>=x.length)break;A=x[z++]}else{z=x.next();if(z.done)break;A=z.value}var B=A;if(B(w))return true}c("Run").onLeave(function(){c("PageTransitionsRegistrar").removeHandler(u,6);s.forEach(function(B){return B()});s=[];r=[]});return false}var v={setLoading:function w(x,y){c("CSS").conditionClass(x,l,y)},setSelected:function w(x){var y=c("Parent").byClass(x,n);c("DOM").scry(y,j).forEach(function(z){c("DOM").remove(z)});c("DOM").scry(y,p).forEach(function(z){c("CSS").removeClass(z,o)});c("CSS").addClass(x,o)},cancelRequest:function w(x){if(q){q.abort();q=null;c("DOM").scry(c("Parent").byClass(x,n),m).forEach(function(y){c("CSS").removeClass(y,l)})}},sendRequest:function w(x,y,z){v.cancelRequest(z);v.setSelected(z);v.setLoading(z,true);c("PageHooks").runHooks("onleavehooks");q=new(c("AjaxPipeRequest"))(k,y).setData(babelHelpers["extends"]({},x.getQueryData(),{path:x.getPath()})).setFirstResponseHandler(function(){v.setLoading(z,false)}).setFinallyHandler(function(){q=null;c("FIGEntityPageLayout").update();c("PageTransitions").transitionComplete(true)}).send()},registerHandler:function w(x){if(!r.length)c("PageTransitionsRegistrar").registerHandler(u,6);if(t)t.remove();r.push(x)},onLeave:function w(x){if(!r.length&&!t)t=c("Run").onLeave(function(){s.forEach(function(x){return x()});s=[]});x=c("createCancelableFunction")(x);s.push(x);return{remove:function y(){x.cancel()}}}};f.exports=v}),null);
__d("EntityPageDirectionalDockingElement",["DirectionalDockingElement","EntityPageDockingElementController"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("DirectionalDockingElement"));i=h&&h.prototype;j.prototype.register=function(){"use strict";c("EntityPageDockingElementController").register(this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("EntityPageDockingElementController",["Event","SubscriptionsHandler","XUISubNavigationLoader","queryThenMutateDOM","throttle"],(function a(b,c,d,e,f,g){__p&&__p();var h=[],i=null,j=c("throttle")(function(){c("queryThenMutateDOM")(function(){return h.forEach(function(l){return l.queryDOM()})},function(){return h.forEach(function(l){return l.updateWithCache()})},"EntityPageDockingElementController")}),k={register:function l(m,n){__p&&__p();if(!i){i=new(c("SubscriptionsHandler"))();i.addSubscriptions(c("Event").listen(window,"scroll",j),c("Event").listen(window,"resize",j),c("XUISubNavigationLoader").onLeave(function(){h=[];if(i){i.release();i=null}}))}var o={queryDOM:m,updateWithCache:n};h.push(o)}};f.exports=k}),null);
__d("getEntityPageDockingElementOffset",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=function h(i,j,k){__p&&__p();var l=k.getRootBoundingClientRect(),m=l.height,n=l.top,o=k.getPlaceholderBoundingClientRect(),p=o.top,q=i-m,r=k.getSections();if(r){var s=Array.from(r).map(function(w){return p+w.getBoundingClientRect().top-n});s.sort(function(w,x){return w-x});for(var t=0,u=s.length;t<u;t++){var v=s[t]-p;if(m-v<i-j){q=j-v;break}}}return q};f.exports=h}),null);
__d("EntityPageRegion",["DirectionalDockingElement","getElementRect","getEntityPageDockingElementOffset","memoize","uniqueID"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j,k){__p&&__p();this.$EntityPageRegion9=function(){return c("getElementRect")(this.$EntityPageRegion1.getPlaceholder())}.bind(this);this.$EntityPageRegion10=function(){return c("getElementRect")(this.$EntityPageRegion1.getRoot())}.bind(this);this.$EntityPageRegion1=i;this.$EntityPageRegion2=c("uniqueID")();this.$EntityPageRegion3=0;this.$EntityPageRegion4=false;this.$EntityPageRegion5=k;this.$EntityPageRegion6=j;this.$EntityPageRegion7=0;this.$EntityPageRegion8=false;this.getPlaceholderBoundingClientRect=c("memoize")(this.$EntityPageRegion9);this.getRootBoundingClientRect=c("memoize")(this.$EntityPageRegion10)}h.prototype.calculateOffset=function(i,j){if(this.$EntityPageRegion5)return this.$EntityPageRegion5(i,j,this);if(this.getRootBoundingClientRect().height+j<i)return j;else return c("getEntityPageDockingElementOffset")(i,j,this)};h.prototype.getID=function(){return this.$EntityPageRegion2};h.prototype.getOffset=function(){return this.$EntityPageRegion3};h.prototype.getTop=function(){return this.$EntityPageRegion7};h.prototype.getSections=function(){var i=this.$EntityPageRegion6;if(!i)return null;return this.$EntityPageRegion1.getPlaceholder().querySelectorAll(i)};h.prototype.setOffset=function(i){if(i===this.$EntityPageRegion3)return;this.$EntityPageRegion3=i;this.$EntityPageRegion4=true};h.prototype.setTop=function(i){if(i===this.$EntityPageRegion7)return;this.$EntityPageRegion7=i;this.$EntityPageRegion8=true};h.prototype.update=function(){__p&&__p();var i=this.$EntityPageRegion4,j=this.$EntityPageRegion8,k=this.$EntityPageRegion1,l=this.$EntityPageRegion3,m=this.$EntityPageRegion7;if(k instanceof c("DirectionalDockingElement")&&j)if(i)k.setOffsetAndTop(l,m);else k.setTop(m);else if(i)k.setOffset(l);this.$EntityPageRegion4=false;this.$EntityPageRegion8=false;this.getPlaceholderBoundingClientRect=c("memoize")(this.$EntityPageRegion9);this.getRootBoundingClientRect=c("memoize")(this.$EntityPageRegion10)};f.exports=h}),null);
__d("SimpleObjectsPool",["invariant"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j){"use strict";this.$SimpleObjectsPool1=j;this.$SimpleObjectsPool2=[]}i.prototype.get=function(){"use strict";if(this.$SimpleObjectsPool2.length)return this.$SimpleObjectsPool2.pop();else{var j=this.$SimpleObjectsPool1;return new j()}};i.prototype.put=function(j){"use strict";j instanceof this.$SimpleObjectsPool1||h(0);this.$SimpleObjectsPool2.push(j)};f.exports=i}),null);
__d("PersistentAnimationFrame",["SimpleObjectsPool","Visibility","cancelAnimationFrame","requestAnimationFrame"],(function a(b,c,d,e,f,g){__p&&__p();var h=16,i,j={},k=true;function l(){if(!i)i=new(c("SimpleObjectsPool"))(m);return i}function m(){"use strict";this.$PersistentAnimationFrame1=function(){this.callback();this.$PersistentAnimationFrame2();l().put(this)}.bind(this)}m.request=function(p){"use strict";if(!p)return 0;return l().get().request(p)};m.cancel=function(p){"use strict";if(p===0)return;var q=j[String(p)];if(q)q.cancel()};m.prototype.request=function(p){"use strict";__p&&__p();k&&n();this.callback=p;this.hidden=c("Visibility").isHidden();if(this.hidden)this.intID=setTimeout(this.$PersistentAnimationFrame1,h);else this.intID=c("requestAnimationFrame")(this.$PersistentAnimationFrame1);this.strID=String(this.intID);j[this.strID]=this;return this.intID};m.prototype.cancel=function(){"use strict";if(this.strID){if(this.hidden)clearTimeout(this.intID);else c("cancelAnimationFrame")(this.intID);this.$PersistentAnimationFrame2();l().put(this)}};m.prototype.$PersistentAnimationFrame2=function(){"use strict";delete j[this.strID];delete this.intID;delete this.strID;delete this.callback;delete this.hidden};function n(){k=false;c("Visibility").addListener(c("Visibility").HIDDEN,o);c("Visibility").addListener(c("Visibility").VISIBLE,o)}function o(){Object.keys(j).forEach(function(p){var q=j[p],r=q.callback;q.cancel();r()})}f.exports=m}),null);
__d("requestPersistentAnimationFrame",["PersistentAnimationFrame"],(function a(b,c,d,e,f,g){"use strict";f.exports=c("PersistentAnimationFrame").request}),null);
__d("ResizeEventHandler",["requestPersistentAnimationFrame"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){__p&&__p();this.handleEvent=function(){if(this.$ResizeEventHandler1===false){this.$ResizeEventHandler1=true;c("requestPersistentAnimationFrame")(this.$ResizeEventHandler3)}}.bind(this);this.$ResizeEventHandler3=function(){this.$ResizeEventHandler1=false;this.$ResizeEventHandler2()}.bind(this);this.$ResizeEventHandler1=false;this.$ResizeEventHandler2=i}f.exports=h}),null);
__d("FIGEntityPageLayout",["Arbiter","DirectionalDockingElement","Event","EntityPageConfig","EntityPageDirectionalDockingElement","EntityPageRegion","MutationObserver","ResizeEventHandler","Run","SubscriptionsHandler","ViewportBounds","XUISubNavigationLoader","getViewportDimensions","queryThenMutateDOM","removeFromArray","throttle"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=[],i=null,j=null,k=null,l=null,m={attributes:false,characterData:true,childList:true,subtree:true};function n(){__p&&__p();c("queryThenMutateDOM")(function(){__p&&__p();var t=c("getViewportDimensions")().height,u=c("ViewportBounds").getTop();h.sort(function(v,w){return v.getPlaceholderBoundingClientRect().top<w.getPlaceholderBoundingClientRect().top?-1:1});h.forEach(function(v){var w=v.getRootBoundingClientRect(),x=w.width,y=v.getPlaceholderBoundingClientRect(),z=y.left,A=y.top,B=u;h.forEach(function(D){var E=D.getRootBoundingClientRect(),F=E.height,G=E.width,H=D.getPlaceholderBoundingClientRect(),I=H.left,J=H.top;if(v!==D&&J+F<=A&&Math.min(z+x,I+G)>=Math.max(z,I))B+=F+D.getOffset()-D.getTop()});var C=v.calculateOffset(t,B);v.setOffset(C);v.setTop(B)})},function(){h.forEach(function(t,u){t.update()})},"EntityPageLayout")}function o(){p();if(!k){k=new(c("SubscriptionsHandler"))();k.addSubscriptions(c("Run").onLeave(q))}return k}function p(){__p&&__p();if(!j){j=new(c("SubscriptionsHandler"))();j.addSubscriptions(c("ViewportBounds").subscribe("change",n),c("Arbiter").subscribe("footerLoaded",n),c("Event").listen(window,"resize",c("throttle")(n)),c("XUISubNavigationLoader").onLeave(function(){__p&&__p();if(j){j.release();j=null}if(l){l.disconnect();l=null}if(i)i=null}))}return j}function q(){if(k){k.release();k=null}}function r(t,u,v,w,x){__p&&__p();var y=new(c("EntityPageRegion"))(v,u?u.join(","):null,x);h.push(y);n();w.addSubscriptions(v.subscribe("changedheight",n),c("Event").listen(t,"resize",n));if(c("EntityPageConfig").hasMutationObserver){if(!l){i=new(c("ResizeEventHandler"))(n);l=new(c("MutationObserver"))(i.handleEvent)}l.observe(t,m)}return function z(){c("removeFromArray")(h,y);if(h.length===0)q()}}var s={register:function t(u,v,w,x){var y=w?new w(u):new(c("DirectionalDockingElement"))(u),z=r(u,v,y,o(),x);return{remove:function A(){z();y.destroy()}}},registerAcrossTransitions:function t(u,v,w,x){var y=w?new w(u):new(c("EntityPageDirectionalDockingElement"))(u),z=r(u,v,y,p(),x);return{remove:function A(){z();y.destroy()}}},update:n};f.exports=s}),null);
__d("XUISubNavigation",["cx","CSS","Event","Parent","Run","SubscriptionsHandler","URI","XUISubNavigationLoader"],(function a(b,c,d,e,f,g,h){__p&&__p();var i="_8ue",j="_2yaa",k=false;function l(m,n){"use strict";__p&&__p();this.$XUISubNavigation1=m;c("XUISubNavigationLoader").registerHandler(function(o){return this.$XUISubNavigation3(o)}.bind(this));this.$XUISubNavigation2=new(c("SubscriptionsHandler"))();this.$XUISubNavigation2&&this.$XUISubNavigation2.addSubscriptions(c("Event").listen(this.$XUISubNavigation1,"click",function(event){var o=c("Parent").byClass(event.target,j);if(o instanceof HTMLElement&&o.getAttribute("data-endpoint"))c("XUISubNavigationLoader").setSelected(o)}),c("Event").listen(this.$XUISubNavigation1,"focusin",this.$XUISubNavigation4.bind(this)),c("Event").listen(this.$XUISubNavigation1,"focusout",this.$XUISubNavigation5.bind(this)),c("XUISubNavigationLoader").onLeave(this.destroy.bind(this)));if(n)this.$XUISubNavigation2&&this.$XUISubNavigation2.addSubscriptions(c("Event").listen(n,"click",function(event){event.preventDefault();c("CSS").addClass(this.$XUISubNavigation1,"_5rll");c("Event").fire(this.$XUISubNavigation1,"resize")}.bind(this)))}l.prototype.destroy=function(){"use strict";this.$XUISubNavigation2&&this.$XUISubNavigation2.release();this.$XUISubNavigation2=null};l.prototype.$XUISubNavigation4=function(event){"use strict";var m=c("Parent").byClass(event.target,j);if(m)c("CSS").addClass(m,i)};l.prototype.$XUISubNavigation5=function(event){"use strict";var m=c("Parent").byClass(event.target,j);if(m&&!m.contains(event.relatedTarget))c("CSS").removeClass(m,i)};l.prototype.$XUISubNavigation3=function(m){"use strict";__p&&__p();if(k){k=false;return false}var n=m.getPath(),o=Array.prototype.find.call(this.$XUISubNavigation1.getElementsByTagName("a"),function(o){return new(c("URI"))(o.href).getPath()===n&&o.hasAttribute("data-endpoint")});if(o){var p=c("Parent").byClass(o,j);if(p instanceof HTMLElement){c("XUISubNavigationLoader").sendRequest(m,new(c("URI"))(o.getAttribute("data-endpoint")),p);return true}return false}return false};l.skipNextTransition=function(){"use strict";k=true};f.exports=l}),null);
__d("AYMTTipSettings",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ALERT_BLACKLISTED:"alert_blacklisted",ALREADY_DELIVERED:"already_delivered",AYMT_DATA:"aymt_data",AYMT_REQUEST_ID:"aymt_request_id",BY_CHANNEL_IGNORE_ALL_CAPS:"by_channel_ignore_all_caps",CAMPAIGN_ACTION_COUNT_LOWER_BOUND:"campaign_action_count_lower_bound",CAMPAIGN_ACTION_COUNT_UPPER_BOUND:"campaign_action_count_upper_bound",CAMPAIGN_OBJECTIVE:"campaign_objective",CHANNEL_ID:"channel_id",CHURN_PROBABILITY_SCORE_LOWER_BOUND:"churn_probability_score_lower_bound",CHURN_PROBABILITY_SCORE_UPPER_BOUND:"churn_probability_score_upper_bound",CLIENT_SIDE_IMPRESSIONS_COUNT:"client_side_impressions_count",CLIENT_SIDE_RENDERER:"client_side_renderer",CLIENT_SIDE_RENDERING_CLASS:"client_side_rendering_class",CLIENT_SIDE_RENDERING_PARAMS:"client_side_rendering_params",CLIENT_SIDE_RENDERING_SPEC:"client_side_rendering_spec",CLIENT_SIDE_RULES:"client_side_rules",CLIENT_SIDE_RULE_CLASS:"client_side_rule_class",CLIENT_SIDE_RULE_PARAMS:"client_side_rule_params",CONTEXT_IDS_CLUSTER_NAME:"context_ids_cluster_name",CMS_ID:"cms_id",DELIVERY_DELAY_IN_SEC:"delay_in_sec",DEPENDS_ON_OTHER_TIP_EVENT:"depends_on_other_tip_event",DELIVER_ONCE_PER:"deliver_once_per",DELIVERY_REQUESTED_BY_USER:"delivery_requested_by_user",ELIGIBILITY_GK:"eligibility_gk",EMAIL_CMS_ID:"email_cms_id",ENT_TIP_CONFIG_ID:"ent_tip_config_id",GUARANTEE_TIP_DELIVERY:"guarantee_delivery",HAS_GLOBAL_HOLDOUT:"has_global_holdout",HIDE_ON_BUSINESS_MANAGER:"hide_on_business_manager",HIDE_TIP_IF_CONVERTED:"hide_if_converted",HOLDOUT_UNIT_TYPE:"holdout_unit_type",INVALID_REASON_SAMPLE_RATE:"invalid_reason_sample_rate",IS_HIGHLIGHTED_IN_MOBILE_ADS_MANAGER:"is_highlighted_in_mobile_ads_manager",LAUNCH_GK:"launch_gk",LOOKBACK_DAYS:"lookback_days",MAX_INSTANCES_NUM:"max_instances_num",MILESTONE_STAGE:"milestone_stage",MIN_RESULTS:"min_results",MIN_PERCENTILE:"min_percentile",NAME:"name",OWNER:"owner",PIXEL_HELP_LINK:"pixel_help_link",PIXEL_LAST_FIRING_DAYS_BACK:"pixel_last_firing_days_back",PIXEL_COUPON_CONTENT_VALUE:"pixel_coupon_content_value",PROMOTION_ID:"promotion_id",PROMOTION_TEST_QE:"promotion_test_qe",PROMOTION_GROUP_ID:"promotion_group_id",RENDERING_TYPE:"rendering_type",SIGNATURE_PARAMS:"signature_params",SKIP_AUGMENTATION_FOR_CONVERSION:"skip_augmentation_for_conversion",TIME_WINDOW_FROM_START:"time_window_from_start",TIME_WINDOW_TO_END:"time_window_to_end",SUPPORT_FORM_ID:"support_form_id",TASK_NUMBER:"task_number",TASK_SPECIFIC_HOLDOUT:"task_specific_holdout",TASK_SPECIFIC_GK_HOLDOUT:"task_specific_gk_holdout",TIP_CLASS:"tip_class",TIP_CONVERSION_EXPIRES_AFTER:"conversion_expires_after",TIP_CLICK_EXPIRES_AFTER:"click_expires_after",TIP_DELIVERY_CAP:"tip_delivery_cap",TIP_DELIVERY_CAP_RESET_PERIOD:"tip_delivery_cap_reset_period",TIP_GLOBAL_IMPRESSION_CAP:"tip_global_impression_cap",TIP_ID:"tip_id",TIP_IMPRESSION_CAP:"impression_cap",TIP_IMPRESSION_CAP_RESET_PERIOD:"impression_cap_reset_period",TIP_IS_INLINE:"tip_is_inline",TIP_IS_STANDALONE:"tip_is_standalone",TIP_NAME_DELIVERY_CAP:"tip_name_delivery_cap",TIP_NAME_DELIVERY_CAP_RESET_PERIOD:"tip_name_delivery_cap_reset_period",TIP_NAME_IMPRESSION_CAP:"tip_name_impression_cap",TIP_NAME_IMPRESSION_CAP_RESET_PERIOD:"tip_name_impression_cap_reset_period",TIP_PRIORITY:"tip_priority",TIP_SCORE:"tip_score",TIP_XOUT_EXPIRES_AFTER:"xout_expires_after",TIP_XOUT_IS_BENIGN:"tip_xout_is_benign",TUTORIAL_ID:"tutorial_id",VALIDATE_ONLY_ESSENTIAL:"validate_only_essential",VALIDATION_CACHE_TIMEOUT:"validation_cache_timeout",VISIBILITY_PARAM:"visibility_param",VISIBILITY_QE:"visibility_qe"})}),null);
__d("CurrentPage",["invariant","Run"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=null,j=null,k={init:function l(m){var n=m.pageID,o=m.pageName;this.setID(n);this.setName(o);c("Run").onLeave(this._clear)},getID:function l(){i!==null||h(0);return i},setID:function l(m){if(!i)i=m},getName:function l(){j!==null||h(0);return j},setName:function l(m){if(!j)j=m},_clear:function l(){i=null;j=null}};f.exports=k}),null);
__d("HubbleContext",[],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={get:function j(k){return h[k]},getPageID:function j(){return h.page&&h.page.id},getBusinessID:function j(){return h.page&&h.page.businessID},getEventToShow:function j(){return h.eventToShow},setContext:function j(k){h=k},setFieldsIfNonexistant:function j(k){for(var l in k)if(!Object.prototype.hasOwnProperty.call(h,l))i.setKey(l,k[l])},setKey:function j(k,l){h[k]=l},reset:function j(){h={}},getContext:function j(){return h}};f.exports=i}),null);
__d("HubbleLogger",["BanzaiLogger","ErrorUtils","FBLogger","HubbleContext","HubbleSurfaces"],(function a(b,c,d,e,f,g){__p&&__p();var h=null,i=null,j=null,k=null,l=Object.keys(c("HubbleSurfaces")).map(function(n){return c("HubbleSurfaces")[n]}),m={getStatefulFields:function n(){return{pageid:c("HubbleContext").getPageID(),platform:j,prev_section:k,section:h,surface:i}},logAction:function n(o){c("BanzaiLogger").log("HubbleLoggerConfig",babelHelpers["extends"]({},this.getStatefulFields(),{action:o}))},logWithData:function n(o){c("BanzaiLogger").log("HubbleLoggerConfig",Object.assign.apply(Object,[o].concat(this.getStatefulFields())))},logMetric:function n(o,p){c("BanzaiLogger").log("HubbleLoggerConfig",babelHelpers["extends"]({},this.getStatefulFields(),{metric:o,metric_value:p}))},logException:function n(o,p){c("FBLogger")("hubble").catching(p).mustfix(o);var q=c("ErrorUtils").normalizeError(p);c("BanzaiLogger").log("HubbleLoggerConfig",babelHelpers["extends"]({},this.getStatefulFields(),{error_message:o,stack_trace:q.stack.split("\n")}))},reset:function n(){h=null;i=null;j=null;k=null},setActiveSection:function n(o){k=h;h=o},setActiveSurface:function n(o){if(!l.includes(o)){c("FBLogger")("hubble").mustfix("Invalid surface value: %s",o);return}i=o},setPlatform:function n(o){j=o}};f.exports=m}),null);
__d("XEventCreateDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/events/dialog/create/",{acontext:{type:"String",required:true},page_id:{type:"Int"},group_id:{type:"Int"},actor_id:{type:"Int"},post_id:{type:"Int"},post_text:{type:"String"},event_id_for_copy:{type:"Int"},default_user_event_privacy_type:{type:"Enum",defaultValue:"private_event",enumType:1},invite_ids:{type:"IntVector"},default_theme_id:{type:"Int"},default_title:{type:"String"},default_start_time:{type:"Int"},default_end_time:{type:"Int"},default_description:{type:"String"},default_cover_id:{type:"Int"},default_ticket_url:{type:"String"},friend_birthday_prompt_xout_id:{type:"FBID"},community_id:{type:"Int"},composer_id:{type:"String"},dialog_entry_point:{type:"Enum",defaultValue:"others",enumType:1},__asyncDialog:{type:"Int"}})}),null);