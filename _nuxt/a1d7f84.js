(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(t,e,n){"use strict";n.r(e);n(85);var r=n(31),c=n(42),o=n(43),l=n(26),f=n(9),d=n(44);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);v([Object(d.Prop)({required:!0})],y.prototype,"label",void 0);var j=y=v([d.Component],y),O=n(41),component=Object(O.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body__titleBar"},[e("h3",{staticClass:"body__title"},[this._v(this._s(this.label))]),this._v(" "),e("div",{staticClass:"body__titleBtn"},[e("button",{staticClass:"link"},[e("fa",{staticClass:"link__icon--small",attrs:{icon:"plus"}}),this._v(" "),e("div",{staticClass:"link__text"},[this._v("More")])],1)])])}),[],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);n(85);var r=n(31),c=n(32),o=n(42),l=n(43),f=n(26),d=n(9),h=n(44),v=n(11);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"about",get:function(){return v.dataStore.data.info?v.dataStore.data.info.about:""}}]),n}(h.Vue),_=O=j([Object(h.Component)({layout:"default"})],O),R=n(41),component=Object(R.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("BaseTitleBar",{attrs:{label:"About Me"}}),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col result"},[e("div",{staticClass:"about",domProps:{innerHTML:this._s(this.about)}})])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTitleBar:n(246).default})}}]);