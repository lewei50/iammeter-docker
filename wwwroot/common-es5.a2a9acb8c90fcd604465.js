(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{kLqA:function(n,t,e){"use strict";t.__esModule=!0;var r=function(){function n(t){if(!t)throw new TypeError("Invalid argument; `value` has no value.");this.value=n.EMPTY,t&&n.isGuid(t)&&(this.value=t)}return n.isGuid=function(t){var e=t.toString();return t&&(t instanceof n||n.validator.test(e))},n.create=function(){return new n([n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-"))},n.createEmpty=function(){return new n("emptyguid")},n.parse=function(t){return new n(t)},n.raw=function(){return[n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-")},n.gen=function(n){for(var t="",e=0;e<n;e++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t},n.prototype.equals=function(t){return n.isGuid(t)&&this.value===t.toString()},n.prototype.isEmpty=function(){return this.value===n.EMPTY},n.prototype.toString=function(){return this.value},n.prototype.toJSON=function(){return{value:this.value}},n.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),n.EMPTY="00000000-0000-0000-0000-000000000000",n}();t.Guid=r}}]);