(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{215:function(t,e,r){"use strict";r.r(e);r(50);var n=r(6),c={props:{urlToImage:{type:String,default:"#"},title:{type:String,default:""}}},l=r(37),o=r(87),h=r.n(o),d=r(204),f=r(217),v=r(203),w=r(213),component=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{attrs:{height:"300px"}},[e("v-img",{attrs:{src:this.urlToImage,alt:this.title,contain:""}}),this._v(" "),e("v-card-title",[e("v-card-actions",[this._v(this._s(this.title))])],1)],1)},[],!1,null,null,null),m=component.exports;h()(component,{VCard:d.a,VCardActions:f.a,VCardTitle:v.a,VImg:w.a});var x={components:{NewsCard:m},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,t.next=3,r.$axios.$get("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=".concat("6201336c8672444d8c603139d705383f"));case 3:return n=t.sent,c=n.articles,t.abrupt("return",{articles:c});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},_=r(214),y=r(205),V=r(206),C=Object(l.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},this._l(this.articles,function(article,t){return e("v-flex",{key:t,attrs:{xs3:""}},[e("a",{attrs:{href:article.url,target:"_blank"}},[e("news-card",{attrs:{"url-to-image":article.urlToImage,title:article.title}})],1)])}),1)],1)],1)},[],!1,null,null,null);e.default=C.exports;h()(C,{VContainer:_.a,VFlex:y.a,VLayout:V.a})}}]);