(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{350:function(t,e,r){t.exports=r.p+"img/logo.dd7187b.png"},353:function(t,e,r){"use strict";r.r(e);var o=r(436),n=r(346),l=r(528),c=r(538),d=r(501),v={name:"Header",data:function(){return{redes:[{icon:"mdi-facebook",link:"https://facebook.com"},{icon:"mdi-twitter",link:"https://twitter.com"},{icon:"mdi-instagram",link:"https://instagram.com"}]}}},m=r(73),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e(l.a,[e(d.a,{attrs:{padless:""}},[e(o.a,{staticClass:"text-center col-12",attrs:{flat:""}},[e(c.a),t._v(" "),e(n.b,[t._v("\n        "+t._s((new Date).getFullYear())+" —\n        "),e("strong",[t._v("Dockeep Project")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,r){"use strict";r.r(e);var o=r(547),n=r(539),l=r(439),c=r(420),d=r(436),v=r(346),m=r(535),h=r(538),_=r(429),f=r(422),x=r(440),w=r(418),y=r(441),k=r(438),C=r(343),O=r(442),j=r(419),S=r(549),$=r(548),I=r(537),B=r(18),P=(r(74),{mounted:function(){var t=this;return Object(B.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null==localStorage.getItem("auth._token.local")?t.bmenu=!1:t.bmenu=!0;case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{clipped:!1,drawer:!1,fav:!0,menu:!1,message:!1,hints:!0,selectedItem:0,avatar:"",nombres:"",apellidos:"",email:"",bmenu:!1,cartlength:0,noticart:!1,noticart2:!1,rtl:!0,items:[{title:"Inicio",icon:"mdi-account",to:"/"}]}},methods:{changeThemeColor:function(){!0===this.$vuetify.theme.dark?this.$vuetify.theme.dark=!1:this.$vuetify.theme.dark=!0},salir:function(){var t=this;return Object(B.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t.menu=!1,t.bmenu=!1,t.$router.push("/");case 4:case"end":return e.stop()}}),e)})))()},toinicio:function(){this.$router.push("/")}}}),D=r(73),component=Object(D.a)(P,(function(){var t=this,e=t._self._c;return e("div",[e($.a,{attrs:{right:"",fixed:"",app:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(f.a,{attrs:{dense:""}},[e(f.a,{directives:[{name:"show",rawName:"v-show",value:t.bmenu,expression:"bmenu"}]},[e(w.a,[e(k.a,[e(l.a,{attrs:{color:"red"}},[e("span",{staticClass:"white--text text-h5"},[t._v(t._s(this.avatar))])])],1),t._v(" "),e(C.a,[e(C.c,[t._v(t._s(this.nombres.toUpperCase()+" "+this.apellidos.toUpperCase()))]),t._v(" "),e(C.b,[t._v(t._s(this.email.toUpperCase()))])],1),t._v(" "),e(y.a)],1)],1),t._v(" "),e(h.a),t._v(" "),t._l(t.items,(function(r,o){return e(O.a,{key:"A"+o},[r.submenu?e(x.a,{attrs:{"prepend-icon":r.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e(C.a,[e(C.c,{domProps:{textContent:t._s(r.title.toUpperCase())}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(r.submenu,(function(r){return e(w.a,{key:r.title,attrs:{to:r.to}},[e(C.a,[e(C.c,{domProps:{textContent:t._s(r.title)}})],1)],1)}))],2):e(w.a,{attrs:{to:r.to}},[e(y.a,[e(_.a,{attrs:{color:"cabugy_text_in_white"}},[t._v(t._s(r.icon))])],1),t._v(" "),e(C.a,[e(C.c,[e("a",{attrs:{color:"cabugy_text_in_white"}},[t._v(" "+t._s(r.title.toUpperCase())+" ")])])],1)],1)],1)})),t._v(" "),e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.bmenu,expression:"bmenu"}],attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[e(w.a,{attrs:{to:"/boardusuario"}},[e(j.a,[e(_.a,[t._v(" mdi-account-cog ")])],1),t._v(" "),e(C.a,[e(C.c,[t._v(" BOARD ")])],1)],1),t._v(" "),e(w.a,{attrs:{to:"/rpasswordusuario"}},[e(j.a,[e(_.a,[t._v(" mdi-account-cog ")])],1),t._v(" "),e(C.a,[e(C.c,[t._v(" CAMBIAR CONTRASEÑA ")])],1)],1),t._v(" "),e(w.a,{on:{click:t.salir}},[e(j.a,[e(_.a,[t._v(" mdi-arrow-left ")])],1),t._v(" "),e(C.a,[e(C.c,[t._v(" SALIR ")])],1)],1)],1)],2)],1),t._v(" "),e(o.a,{attrs:{fixed:"",app:"","hide-on-scroll":"",height:"64","elevate-on-scroll":""}},[e(m.a,{staticClass:"col-10 d-flex px-0",staticStyle:{margin:"0 auto","max-width":"80%"}},[e("img",{staticClass:"d-none d-sm-block",staticStyle:{cursor:"pointer",margin:"0 auto",height:"-webkit-fill-available",display:"flow-root",float:"left","max-height":"64px"},attrs:{src:r(350),"img-alt":"Image",alt:"user"},on:{click:t.toinicio}}),t._v(" "),e("img",{staticClass:"d-block d-sm-none",staticStyle:{cursor:"pointer","margin-top":"6px",height:"-webkit-fill-available",display:"flow-root",float:"left","max-height":"32px"},attrs:{src:r(350),"img-alt":"Image",alt:"user"},on:{click:t.toinicio}}),t._v(" "),e(v.b,{staticClass:"text-lg-h4 text-left"},[t._v("\n                        Dockeep\n        ")]),t._v(" "),e(I.a),t._v(" "),e(I.a),t._v(" "),e(m.a,{attrs:{cols:"auto"}},[t.bmenu?t._e():e(c.a,{staticClass:"cabugy_button",attrs:{to:"/",text:"",color:"white","x-small":t.$vuetify.breakpoint.smAndDown}},[t._v("\n          Iniciar sesion\n        ")])],1),t._v(" "),e(n.a,{on:{click:function(e){t.drawer=!0}}}),t._v(" "),e(m.a,{directives:[{name:"show",rawName:"v-show",value:t.bmenu,expression:"bmenu"}],attrs:{cols:"auto"}},[e(S.a,{directives:[{name:"show",rawName:"v-show",value:t.menu,expression:"menu"}],staticClass:"mb-5",attrs:{"close-on-content-click":!1,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[e(c.a,t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.bmenu,expression:"bmenu"}],staticClass:"cabugy_button ml-2 mt-4 float-right",attrs:{color:"white",dark:"",text:""}},"v-btn",n,!1),o),[t._v("\n            Menu\n          ")])]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e(d.a,[e(f.a,[e(w.a,[e(k.a,[e(l.a,{attrs:{color:"red"}},[e("span",{staticClass:"white--text text-h5"},[t._v(t._s(this.avatar))])])],1),t._v(" "),e(C.a,[e(C.c,[t._v(t._s(this.nombres+" "+this.apellidos))]),t._v(" "),e(C.b,[t._v(t._s(this.email))])],1),t._v(" "),e(y.a)],1)],1),t._v(" "),e(h.a),t._v(" "),e(O.a,{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[e(w.a,{attrs:{to:"/boardusuario"}},[e(j.a,[e(_.a,[t._v(" mdi-account-cog ")])],1),t._v(" "),e(C.a,[e(C.c,[t._v(" Board ")])],1)],1),t._v(" "),e(w.a,{attrs:{to:"/rpasswordusuario"}},[e(j.a,[e(_.a,[t._v(" mdi-account-cog ")])],1),t._v(" "),e(C.a,[e(C.c,[t._v(" Cambiar contraseña ")])],1)],1),t._v(" "),e(w.a,{on:{click:t.salir}},[e(j.a,[e(_.a,[t._v(" mdi-arrow-left ")])],1),t._v(" "),e(C.a,[e(C.c,[t._v(" Salir ")])],1)],1)],1),t._v(" "),e(v.a)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,r){var content=r(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(111).default)("5db1c400",content,!0,{sourceMap:!1})},365:function(t,e,r){var o=r(110)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:6px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:36px 6px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:6px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},421:function(t,e,r){"use strict";r(38),r(30),r(39),r(8),r(52),r(29),r(53);var o=r(21),n=(r(72),r(364),r(356)),l=r(351),c=r(352),d=r(357),v=r(347),m=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=r(344),_=r(40);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(h.a)(n.a,d.a,m).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},546:function(t,e,r){"use strict";r.r(e);var o=r(421),n=r(532),l=r(420),c=r(535),d=r(528),v=r(533),m=r(534),h=r(366),_=r(542),f=(r(38),r(30),r(39),r(8),r(52),r(29),r(53),r(18)),x=r(21),w=(r(64),r(74),r(374)),y=r(164),k=r(353);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(y.d)("eager"),Object(y.c)("required",O(O({},w.f),{},{message:"{_field_} No puede estar vacía"})),Object(y.c)("max",O(O({},w.d),{},{message:"{_field_} no puede ser mayor que {length} caracteres"})),Object(y.c)("regex",O(O({},w.e),{},{message:"{_field_} {_value_} no coincide {regex}"})),Object(y.c)("email",O(O({},w.c),{},{message:"El email debe ser válido"}));var j={mounted:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==localStorage.getItem("auth._token.local")&&t.$router.push("/");case 1:case"end":return e.stop()}}),e)})))()},components:{ValidationProvider:y.b,ValidationObserver:y.a,CabugyFooter:k.default},data:function(){return{email:"",password:"",confirmation:"",verp:!1,show1:!1,iexito:!1,ierror:!1,merror:""}},methods:{submit:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/login",{usuario:t.email,password:t.password});case 3:r=e.sent,console.log(r.data),r&&r.data&&(window.localStorage.setItem("credential",JSON.stringify(r.data)),window.localStorage.setItem("auth._token.local",JSON.stringify("Bearer "+r.data.token)),t.iexito=!0,setTimeout((function(){return t.$router.push({path:"/buscar"})}),3e3)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0.response.data),e.t0.response.data.err,console.log("entra"),t.ierror=!0,t.merror="E-mail o Contraseña invalidos.",setTimeout((function(){return t.ierror=!1}),3e3);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},clear:function(){this.nombres="",this.apellidos="",this.telefono="",this.email="",this.$refs.observer.reset()}}},S=r(73),component=Object(S.a)(j,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{id:"inspire"}},[e("cabugy-header"),t._v(" "),e(v.a,{staticClass:"grey lighten-3"},[e(d.a,[e(m.a,{staticClass:"d-flex"},[e(c.a,[e(h.a,{staticClass:"mx-auto max-xs-width:32% max-sm-width:32% col-lg-6",attrs:{elevation:"8",rounded:"lg"}},[e("div",{staticClass:"col col-12 d-lg-flex"},[e(c.a,{staticClass:"col-sm-12 col-lg-12"},[e("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(r){var n=r.invalid;return[e("form",{staticClass:"px-0",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"text-lg-h4 text-center"},[t._v("\n                      Ingresar\n                      ")]),t._v(" "),e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.iexito,expression:"iexito"}],attrs:{type:"success"}},[t._v("\n                        has ingresado con exito.\n                      ")]),t._v(" "),e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.ierror,expression:"ierror"}],attrs:{type:"error"}},[t._v("\n                        "+t._s(t.merror)+"\n                      ")]),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e("validation-provider",{attrs:{name:"Usuario",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e(_.a,{attrs:{"error-messages":o,label:"Usuario",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})]}}],null,!0)})],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e("Validation-Provider",{attrs:{vid:"password",rules:"required",name:"Contraseña"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e(_.a,{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",name:"input-10-1",label:"Contraseña",hint:"Al menos 4 carácteres"},on:{"click:append":function(e){t.show1=!t.show1},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.text.focus.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),e("span",[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e(c.a,{attrs:{cols:"12 d-flex flex-column mt-2"}},[e(l.a,{attrs:{type:"submit",disabled:n}},[t._v("\n                        Ingresar\n                      ")])],1)],1)]}}])})],1)],1)])],1)],1)],1)],1),t._v(" "),e("cabugy-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CabugyHeader:r(358).default,CabugyFooter:r(353).default})}}]);