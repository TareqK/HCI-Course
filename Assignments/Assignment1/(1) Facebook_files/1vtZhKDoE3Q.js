if (self.CavalryLogger) { CavalryLogger.start_js(["Fg3F5"]); }

__d("HomepagePanelPageInsights.react",["cx","fbt","FacepileRounded.react","Link.react","List.react","PagesEventObserver","PagesEventType","React","XUIButton.react","XUIButtonGroup.react","intlNumUtils"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=32,m=Object.freeze({LIKE:"like",VIEW:"view",POST:"post"});j=babelHelpers.inherits(n,c("React").PureComponent);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.state={selectedTab:m.LIKE}}n.prototype.$HomepagePanelPageInsights1=function(){return c("React").createElement("div",{className:"_2n5z"},c("React").createElement(c("XUIButtonGroup.react"),null,c("React").createElement(c("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===m.LIKE?" _2n60":""),label:i._("Likes"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.LIKE)}),c("React").createElement(c("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===m.VIEW?" _2n60":""),label:i._("Views"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.VIEW)}),c("React").createElement(c("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===m.POST?" _2n60":""),label:i._("Posts"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.POST)})))};n.prototype.$HomepagePanelPageInsights3=function(){var o=c("React").createElement("div",{className:"_1oso"},this.props.date_range);switch(this.state.selectedTab){case m.LIKE:return c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",{className:"_2n66"},c("React").createElement(c("Link.react"),{className:"_2n67",href:this.props.insights_uri.pageLikesURI},this.props.total_likes)),c("React").createElement("li",{className:"_2n68"},c("React").createElement(c("Link.react"),{className:"_2n69"+(this.props.new_likes===0?" _21t8":""),href:this.props.insights_uri.pageLikesURI},i._({"*":"{number} new likes this week","_1":"1 new like this week"},[i.plural(this.props.new_likes,"number")]))),c("React").createElement("li",{className:"_2n6a"},c("React").createElement(c("Link.react"),{ajaxify:this.props.friend_inviter_uri,"aria-label":"People who recently liked this Page",rel:"dialog"},c("React").createElement(c("FacepileRounded.react"),{imageSize:l,profiles:this.$HomepagePanelPageInsights4(),showNames:true}))));case m.VIEW:var p=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.pageViewsURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_views)),q=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.pageViewsURI},i._({"*":"Page views","_1":"Page view"},[i.plural(this.props.new_views)])),r=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_engagements)),s=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Post engagements","_1":"Post engagement"},[i.plural(this.props.new_engagements)]));return c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,o),c("React").createElement("li",{className:"_1os-"},c("React").createElement(c("List.react"),{border:"light",direction:"horizontal",spacing:"none"},c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,p),c("React").createElement("li",null,q))),c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,r),c("React").createElement("li",null,s))))));case m.POST:var t=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_comments)),u=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Comments","_1":"Comment"},[i.plural(this.props.new_comments)])),v=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_shares)),w=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Shares","_1":"Share"},[i.plural(this.props.new_shares)]));return c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,o),c("React").createElement("li",{className:"_1os-"},c("React").createElement(c("List.react"),{border:"light",direction:"horizontal",spacing:"none"},c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,t),c("React").createElement("li",null,u))),c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,v),c("React").createElement("li",null,w))))));default:return c("React").createElement("div",null)}};n.prototype.$HomepagePanelPageInsights4=function(){var o=this.props.friends_data;return Object.keys(o).map(function(p){return{image_src:"https://graph.facebook.com/"+o[p].uniqueID+"/picture?height="+l*2+"&width="+l*2,name:o[p].name}})};n.prototype.$HomepagePanelPageInsights2=function(o){this.setState({selectedTab:o});c("PagesEventObserver").notify(c("PagesEventType").VISIT_INSIGHTS_TAB,this.props.page_id,{ref:"aymt_homepage_panel"})};n.prototype.render=function(){return c("React").createElement("div",null,this.$HomepagePanelPageInsights1(),this.$HomepagePanelPageInsights3())};f.exports=n}),null);
__d("HomepagePanelRecentPostCarouselItem.react",["ix","cx","fbt","BoostedComponentButtonLabels","BoostedComponentDialogButtonWithDataV2Wrapper.react","BoostedComponentRef","Image.react","ImageBlock.react","InlineBlock.react","Layout.react","LineClamp.react","React","SUIBusinessTheme","SUILink.react","SUIText.react","SUIThemeContainer.react","UFIReactionsBlingTokens.react","XUICarouselItem.react","fbglyph","formatDate"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=64,n={1:{reduced:"1","default":1},2:{reduced:"1","default":1},3:{reduced:"1","default":1}},o={reactioncountmap:n,reactioncount:0,reactioncountreduced:""};k=babelHelpers.inherits(p,c("React").PureComponent);l=k&&k.prototype;p.prototype.render=function(){var q=this.props,r=q.commentCount,s=q.creationTime,t=q.fullWidth,u=q.picture,v=q.postUri,w=c("React").createElement(c("SUIText.react"),{className:"_3-94",display:"block",size:"medium_DEPRECATED",weight:"bold"},j._("\""),this.props.message,j._("\"")),x=c("React").createElement(c("Image.react"),{height:m,src:u,width:m});return c("React").createElement(c("XUICarouselItem.react"),null,c("React").createElement(c("SUIThemeContainer.react"),{theme:c("SUIBusinessTheme")},c("React").createElement("div",{className:t?"_3qzf":"_3qzg"},c("React").createElement(c("ImageBlock.react"),{className:"_3qzh",spacing:"large"},v?c("React").createElement(c("SUILink.react"),{href:v,showUnderline:"never"},x):x,c("React").createElement(c("InlineBlock.react"),{alignv:"middle",height:m},c("React").createElement(c("LineClamp.react"),{enableTooltipOnOverflow:true,lines:2},v?c("React").createElement(c("SUILink.react"),{href:v,showUnderline:"never"},w):{postMessage:w}),c("React").createElement(c("LineClamp.react"),{enableTooltipOnOverflow:true,lines:1},c("React").createElement(c("SUIText.react"),{shade:"light"},s&&j._("{date} at {time}",[j.param("date",c("formatDate")(s,"F j")),j.param("time",c("formatDate")(s,"g:ia"))]))))),c("React").createElement(c("Layout.react"),null,c("React").createElement(c("Layout.react").FillColumn,{className:"mrm"},c("React").createElement(c("SUIText.react"),{className:"_4ar- _3qzi",shade:"light",size:"meta1"},c("React").createElement(c("UFIReactionsBlingTokens.react"),{feedback:o,max:2,noLinks:true}),this.props.reactionCount,r&&c("React").createElement("span",{className:"_3-99"},c("React").createElement(c("Image.react"),{alt:"Number of comments",className:"_3qzk",src:h("125886")}),r))),c("React").createElement(c("Layout.react").Column,null,c("React").createElement(c("BoostedComponentDialogButtonWithDataV2Wrapper.react"),{buttonData:this.props.buttonData,buttonLabel:c("BoostedComponentButtonLabels").DIRECT_BOOST_BUTTON_LABEL,permanentCreateMode:false,placement:c("BoostedComponentRef").WWW_HOMEPAGE_PANEL}))))))};function p(){k.apply(this,arguments)}f.exports=p}),null);
__d("HomepagePanelRecentPostCarousel.react",["ix","cx","fbt","HomepagePanelRecentPostCarouselItem.react","Image.react","React","XUICarousel.react","XUICarouselAnimator","XUICarouselArrow.react","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").createElement(c("XUICarouselArrow.react"),{className:"_1c9r"},c("React").createElement(c("Image.react"),{alt:j._("Previous"),src:h("112989")})),n=c("React").createElement(c("XUICarouselArrow.react"),{className:"_1c9r"},c("React").createElement(c("Image.react"),{alt:j._("Next"),src:h("112999")})),o=[m,n];k=babelHelpers.inherits(p,c("React").PureComponent);l=k&&k.prototype;p.prototype.render=function(){var q=this.props.postEntries,r=q.map(function(s,t){return c("React").createElement(c("HomepagePanelRecentPostCarouselItem.react"),{buttonData:s.buttonData,commentCount:s.commentCount,creationTime:s.creationTime,fullWidth:q.length===1,key:s.buttonData.buttonID?s.buttonData.buttonID:t,message:s.message,picture:s.picture,postUri:s.postUri,reactionCount:s.reactionCount})});return c("React").createElement("div",{className:"_2pid"},c("React").createElement("div",{className:"_1c9t"},j._("Recent posts")),c("React").createElement(c("XUICarousel.react"),{animator:new(c("XUICarouselAnimator"))({type:"horizontal",centered:true,firstAndLastAligned:q.length>1}),arrows:o,autoplay:false,className:"_3-8x",initialAutoplay:false,resizeViewport:"disabled",wrapAround:false},r))};function p(){k.apply(this,arguments)}f.exports=p}),null);