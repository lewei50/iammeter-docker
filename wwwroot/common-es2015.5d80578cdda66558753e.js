(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{10250:function(e,t){"use strict";var n=function(){function e(t){if(!t)throw new TypeError("Invalid argument; `value` has no value.");this.value=e.EMPTY,t&&e.isGuid(t)&&(this.value=t)}return e.isGuid=function(t){var n=t.toString();return t&&(t instanceof e||e.validator.test(n))},e.create=function(){return new e([e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-"))},e.createEmpty=function(){return new e("emptyguid")},e.parse=function(t){return new e(t)},e.raw=function(){return[e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-")},e.gen=function(e){for(var t="",n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t},e.prototype.equals=function(t){return e.isGuid(t)&&this.value===t.toString()},e.prototype.isEmpty=function(){return this.value===e.EMPTY},e.prototype.toString=function(){return this.value},e.prototype.toJSON=function(){return{value:this.value}},e.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),e.EMPTY="00000000-0000-0000-0000-000000000000",e}();t.i=n},81057:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var r=n(37716),a=n(91841),i=n(29790);let u=(()=>{class e{constructor(e,t){this._http=e,this._translate=t}getPriceUnit(){return[{key:"$",name:"USD $"},{key:"\uffe5",name:"RMB \uffe5"},{key:"\u20ac",name:"EUR \u20ac"}]}getMeterType(){return[{key:1,name:this._translate.instant("bll.meter.type1")},{key:3,name:this._translate.instant("bll.meter.type3")}]}getMeterUseType(){return[{key:"grid",name:this._translate.instant("bll.usetype.grid")},{key:"inverter",name:this._translate.instant("bll.usetype.inverter")},{key:"load",name:this._translate.instant("bll.usetype.load")}]}getCoefficient(){return[{key:1,name:"None"},{key:20,name:"100:5"},{key:30,name:"150:5"},{key:40,name:"200:5"},{key:50,name:"250:5"},{key:60,name:"300:5"},{key:80,name:"4000:5"},{key:100,name:"500:5"},{key:120,name:"600:5"},{key:160,name:"800:5"},{key:200,name:"1000:5"},{key:400,name:"2000:5"},{key:500,name:"2500:5"}]}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(a.eN),r.LFG(i.sK))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);