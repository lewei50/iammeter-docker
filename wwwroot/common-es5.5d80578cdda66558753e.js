!function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{10250:function(e,n){"use strict";var t=function(){function e(n){if(!n)throw new TypeError("Invalid argument; `value` has no value.");this.value=e.EMPTY,n&&e.isGuid(n)&&(this.value=n)}return e.isGuid=function(n){var t=n.toString();return n&&(n instanceof e||e.validator.test(t))},e.create=function(){return new e([e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-"))},e.createEmpty=function(){return new e("emptyguid")},e.parse=function(n){return new e(n)},e.raw=function(){return[e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-")},e.gen=function(e){for(var n="",t=0;t<e;t++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n},e.prototype.equals=function(n){return e.isGuid(n)&&this.value===n.toString()},e.prototype.isEmpty=function(){return this.value===e.EMPTY},e.prototype.toString=function(){return this.value},e.prototype.toJSON=function(){return{value:this.value}},e.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),e.EMPTY="00000000-0000-0000-0000-000000000000",e}();n.i=t},81057:function(n,t,r){"use strict";r.d(t,{I:function(){return o}});var a=r(37716),i=r(91841),u=r(29790),o=function(){var n=function(){function n(e,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this._http=e,this._translate=t}var t,r,a;return t=n,(r=[{key:"getPriceUnit",value:function(){return[{key:"$",name:"USD $"},{key:"\uffe5",name:"RMB \uffe5"},{key:"\u20ac",name:"EUR \u20ac"}]}},{key:"getMeterType",value:function(){return[{key:1,name:this._translate.instant("bll.meter.type1")},{key:3,name:this._translate.instant("bll.meter.type3")}]}},{key:"getMeterUseType",value:function(){return[{key:"grid",name:this._translate.instant("bll.usetype.grid")},{key:"inverter",name:this._translate.instant("bll.usetype.inverter")},{key:"load",name:this._translate.instant("bll.usetype.load")}]}},{key:"getCoefficient",value:function(){return[{key:1,name:"None"},{key:20,name:"100:5"},{key:30,name:"150:5"},{key:40,name:"200:5"},{key:50,name:"250:5"},{key:60,name:"300:5"},{key:80,name:"4000:5"},{key:100,name:"500:5"},{key:120,name:"600:5"},{key:160,name:"800:5"},{key:200,name:"1000:5"},{key:400,name:"2000:5"},{key:500,name:"2500:5"}]}}])&&e(t.prototype,r),a&&e(t,a),n}();return n.\u0275fac=function(e){return new(e||n)(a.LFG(i.eN),a.LFG(u.sK))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}])}();