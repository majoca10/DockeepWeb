(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{353:function(t,e,o){"use strict";o.r(e);var r=o(436),n=o(346),c=o(528),f=o(538),l=o(501),d={name:"Header",data:function(){return{redes:[{icon:"mdi-facebook",link:"https://facebook.com"},{icon:"mdi-twitter",link:"https://twitter.com"},{icon:"mdi-instagram",link:"https://instagram.com"}]}}},h=o(73),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,[e(l.a,{attrs:{padless:""}},[e(r.a,{staticClass:"text-center col-12",attrs:{flat:""}},[e(f.a),t._v(" "),e(n.b,[t._v("\n        "+t._s((new Date).getFullYear())+" —\n        "),e("strong",[t._v("Dockeep Project")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,o){"use strict";var r=o(2),n=o(373),c=o(36),f=o(43),l=o(65),d=o(134);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),o=f(e),r=d(e,0);return r.length=n(r,e,e,o,0,void 0===t?1:l(t)),r}})},361:function(t,e,o){o(91)("flat")},362:function(t,e,o){"use strict";var r=o(2),n=o(237);r({target:"String",proto:!0,forced:o(238)("fixed")},{fixed:function(){return n(this,"tt","","")}})},373:function(t,e,o){"use strict";var r=o(89),n=o(43),c=o(165),f=o(71),l=function(t,e,source,o,d,h,v,m){for(var element,y,O=d,j=0,x=!!v&&f(v,m);j<o;)j in source&&(element=x?x(source[j],j,e):source[j],h>0&&r(element)?(y=n(element),O=l(t,e,element,y,O,h-1)-1):(c(O+1),t[O]=element),O++),j++;return O};t.exports=l},415:function(t,e,o){"use strict";var r=o(2),n=o(237);r({target:"String",proto:!0,forced:o(238)("link")},{link:function(t){return n(this,"a","href",t)}})},416:function(t,e,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(111).default)("bb35a8d6",content,!0,{sourceMap:!1})},417:function(t,e,o){var r=o(110)(!1);r.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:36px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),t.exports=r},501:function(t,e,o){"use strict";o(38),o(30),o(39),o(8),o(52),o(29),o(53);var r=o(21),n=(o(236),o(362),o(416),o(366)),c=o(384),f=o(372),l=o(344),d=o(20);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(n.a,Object(c.a)("footer",["height","inset"]),f.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return v(v({},n.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return v(v({},n.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(d.g)(t),left:Object(d.g)(this.computedLeft),right:Object(d.g)(this.computedRight),bottom:Object(d.g)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var data=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,data,this.$slots.default)}})},528:function(t,e,o){"use strict";o(39),o(8),o(38),o(76),o(41),o(386),o(378),o(161),o(112);var r=o(0);var n,c=o(359);e.a=(n="container",r.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var o=e.props,data=e.data,r=e.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var f=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));f.length&&(data.staticClass+=" ".concat(f.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var o,r=e.props,data=e.data,n=e.children,f=data.attrs;return f&&(data.attrs={},o=Object.keys(f).filter((function(t){if("slot"===t)return!1;var e=f[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(o||[])}),n)}})}}]);