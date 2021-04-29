!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{IyKu:function(e,a,n){"use strict";n.r(a),n.d(a,"ExtensionModule",(function(){return F}));var o=n("PCNd"),c=n("tyNb"),r=n("D465"),s=n("kLqA"),l=n("3Pt+"),b=n("0IaG"),d=n("fXoL"),u=n("5eHb"),p=n("sYmb"),f=n("NFeN"),m=n("ofXK"),h=n("XiUz"),v=n("kmnG"),g=n("YKwE"),y=n("qFsG"),T=n("bSwM"),w=n("bTqV");function C(t,e){1&t&&(d.Ub(0,"mat-error"),d.Qc(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Sc(" ",d.ic(2,1,"validations.required"),""))}function x(t,e){1&t&&(d.Ub(0,"mat-error"),d.Qc(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Sc(" ",d.ic(2,1,"validations.required"),""))}function k(t,e){1&t&&(d.Ub(0,"mat-error"),d.Qc(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Sc(" ",d.ic(2,1,"validations.required"),""))}function I(t,e){if(1&t&&(d.Ub(0,"form",3),d.Ub(1,"div",4),d.Ub(2,"div",5),d.Ub(3,"mat-form-field"),d.Ub(4,"mat-label"),d.Qc(5),d.hc(6,"translate"),d.Tb(),d.Pb(7,"mtx-select",6),d.Oc(8,C,3,3,"mat-error",2),d.Tb(),d.Tb(),d.Ub(9,"div",5),d.Ub(10,"mat-form-field"),d.Ub(11,"mat-label"),d.Qc(12),d.hc(13,"translate"),d.Tb(),d.Pb(14,"input",7),d.hc(15,"translate"),d.Oc(16,x,3,3,"mat-error",2),d.Tb(),d.Tb(),d.Ub(17,"div",5),d.Ub(18,"mat-form-field"),d.Ub(19,"mat-label"),d.Qc(20),d.hc(21,"translate"),d.Tb(),d.Pb(22,"input",8),d.hc(23,"translate"),d.Oc(24,k,3,3,"mat-error",2),d.Tb(),d.Tb(),d.Ub(25,"div",5),d.Ub(26,"mat-checkbox",9),d.Qc(27),d.hc(28,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Tb()),2&t){var i=d.gc();d.pc("formGroup",i.form1),d.Cb(5),d.Rc(d.ic(6,11,"bll.place-name")),d.Cb(2),d.pc("items",i.places),d.Cb(1),d.pc("ngIf",i.form1.get("placeId").invalid),d.Cb(4),d.Rc(d.ic(13,13,"extension.api-key")),d.Cb(2),d.pc("placeholder",d.ic(15,15,"extension.api-key")),d.Cb(2),d.pc("ngIf",i.form1.get("apiKey").invalid),d.Cb(4),d.Rc(d.ic(21,17,"extension.system-id")),d.Cb(2),d.pc("placeholder",d.ic(23,19,"extension.system-id")),d.Cb(2),d.pc("ngIf",i.form1.get("deviceId").invalid),d.Cb(3),d.Sc("",d.ic(28,21,"extension.is-active")," ")}}function U(t,e){if(1&t){var i=d.Vb();d.Ub(0,"mat-dialog-actions"),d.Ub(1,"button",10),d.Qc(2),d.hc(3,"translate"),d.Tb(),d.Ub(4,"button",11),d.cc("click",(function(){return d.Dc(i),d.gc().save()})),d.Qc(5),d.hc(6,"translate"),d.Tb(),d.Tb()}if(2&t){var a=d.gc();d.Cb(2),d.Rc(d.ic(3,3,"common.close")),d.Cb(2),d.pc("disabled",a.form1.invalid),d.Cb(1),d.Rc(d.ic(6,5,"common.save"))}}var O,_=((O=function(){function e(i,a,n,o,c,r){var s=this;t(this,e),this.dialogRef=i,this.toastr=a,this.fb=n,this.translate=o,this._api=c,this.data=r,this.places=this._api.place_placelist().subscribe((function(t){s.places=t.data,s.form1=s.fb.group({id:[null],type:["pvoutput"],placeId:[null,[l.y.required]],isActive:[!0],apiKey:[""],deviceId:[""]}),s.form1.patchValue(s.data)}))}return i(e,[{key:"ngOnInit",value:function(){console.log(this.places)}},{key:"onClose",value:function(){this.dialogRef.close()}},{key:"save",value:function(){var t=this;console.log(this.data.id),this._api.extension_save(this.data.id,this.form1.getRawValue()).subscribe((function(e){!0===e.successful&&t.toastr.success(e.message),t.dialogRef.close(!0)}))}}]),e}()).\u0275fac=function(t){return new(t||O)(d.Ob(b.i),d.Ob(u.b),d.Ob(l.g),d.Ob(p.e),d.Ob(r.a),d.Ob(b.a))},O.\u0275cmp=d.Ib({type:O,selectors:[["app-extension-pvoutput-edit"]],decls:8,vars:6,consts:[["mat-dialog-title",""],["class","form-field-full",3,"formGroup",4,"ngIf"],[4,"ngIf"],[1,"form-field-full",3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","8px grid"],["fxFlex","100","fxFlex.lt-sm","100"],["bindLabel","name","bindValue","id","formControlName","placeId",3,"items"],["matInput","","type","text","formControlName","apiKey","required","",3,"placeholder"],["matInput","","type","text","formControlName","deviceId","required","",3,"placeholder"],["formControlName","isActive"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(d.Ub(0,"div",0),d.Ub(1,"mat-icon"),d.Qc(2),d.Tb(),d.Qc(3),d.hc(4,"translate"),d.Tb(),d.Ub(5,"mat-dialog-content"),d.Oc(6,I,29,23,"form",1),d.Tb(),d.Oc(7,U,7,7,"mat-dialog-actions",2)),2&t&&(d.Cb(2),d.Rc("00000000-0000-0000-0000-000000000000"!=e.data.id?"edit":"add"),d.Cb(1),d.Sc(" ",d.ic(4,4,"00000000-0000-0000-0000-000000000000"!=e.data.id?"extension.edit":"extension.add")," "),d.Cb(3),d.pc("ngIf",null!=e.form1),d.Cb(1),d.pc("ngIf",e.form1))},directives:[b.j,f.a,b.g,m.n,l.z,l.s,l.l,h.c,h.d,h.a,v.c,v.g,g.a,l.r,l.j,y.b,l.d,l.x,T.a,v.b,b.d,w.b,b.e],pipes:[p.d],styles:[".mat-dialog-content[_ngcontent-%COMP%]{overflow:auto;max-height:none;display:inherit}"]}),O),Q=n("r0g6"),D=n("tgey"),P=n("hGDI"),S=["isActiveTpl"];function A(t,e){1&t&&(d.Ub(0,"mat-icon",7),d.Qc(1,"check"),d.Tb())}function L(t,e){1&t&&(d.Ub(0,"mat-icon",8),d.Qc(1,"close"),d.Tb())}function R(t,e){if(1&t&&(d.Oc(0,A,2,0,"mat-icon",5),d.Oc(1,L,2,0,"mat-icon",6)),2&t){var i=e.$implicit;d.pc("ngIf",1==i.isActive),d.Cb(1),d.pc("ngIf",0==i.isActive)}}var q,G,N,j=[{path:"pvoutput",component:(q=function(){function e(i,a,n,o,c,r){t(this,e),this.toastr=i,this.cdr=a,this._api=n,this.dialog=o,this._translate=c,this._router=r,this.columns=[],this.list=[],this.isLoading=!1}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.columns=[{header:this._translate.stream("bll.place-name"),field:"placeName",sortable:!0},{header:this._translate.stream("extension.api-key"),field:"apiKey",sortable:!0},{header:this._translate.stream("extension.system-id"),field:"deviceId",sortable:!0},{header:this._translate.stream("extension.is-active"),field:"isActive",cellTemplate:this.isActiveTpl},{header:this._translate.stream("common.operation"),field:"option",width:"180px",pinned:"right",right:"0px",type:"button",buttons:[{icon:"pageview",tooltip:"View",type:"icon",click:function(t){return window.open("https://pvoutput.org/list.jsp?sid="+t.deviceId)}},{icon:"edit",tooltip:"Edit",type:"icon",click:function(e){return t.edit(e)}},{icon:"delete",tooltip:"Delete",color:"warn",type:"icon",pop:!0,popTitle:"Confirm delete?",click:function(e){return t.delete(e)}}]}],this.loadData()}},{key:"loadData",value:function(){var t=this;this.isLoading=!0,this._api.extension_list("pvoutput").subscribe((function(e){t.list=e.data,t.isLoading=!1,t.cdr.markForCheck(),t.cdr.detectChanges()}))}},{key:"edit",value:function(t){this.openDialog(t)}},{key:"openDialog",value:function(t){var e=this;this.dialog.originalOpen(_,{width:"600px",data:t}).afterClosed().subscribe((function(t){!0===t&&e.loadData()}))}},{key:"add",value:function(){this.openDialog({id:s.Guid.createEmpty(),type:"pvoutput",isActive:!0})}},{key:"delete",value:function(t){var e=this;this._api.extension_delete(t.id).subscribe((function(t){!0===t.successful&&e.toastr.success(t.message),e.loadData()}))}}]),e}(),q.\u0275fac=function(t){return new(t||q)(d.Ob(u.b),d.Ob(d.h),d.Ob(r.a),d.Ob(Q.a),d.Ob(p.e),d.Ob(c.f))},q.\u0275cmp=d.Ib({type:q,selectors:[["app-extension-pvoutput"]],viewQuery:function(t,e){var i;1&t&&d.Ic(S,!0),2&t&&d.yc(i=d.dc())&&(e.isActiveTpl=i.first)},decls:10,vars:9,consts:[["mat-button","",3,"click"],["aria-label","add"],["aria-label","refresh"],[3,"data","columns","loading","multiSelectable","rowSelectable","showPaginator","toolbarTitle","rowStriped","showToolbar"],["isActiveTpl",""],["style","color:green;",4,"ngIf"],["style","color:red;",4,"ngIf"],[2,"color","green"],[2,"color","red"]],template:function(t,e){1&t&&(d.Ub(0,"page-header"),d.Ub(1,"button",0),d.cc("click",(function(){return e.add()})),d.Ub(2,"mat-icon",1),d.Qc(3,"add"),d.Tb(),d.Tb(),d.Ub(4,"button",0),d.cc("click",(function(){return e.loadData()})),d.Ub(5,"mat-icon",2),d.Qc(6,"refresh"),d.Tb(),d.Tb(),d.Tb(),d.Pb(7,"mtx-grid",3),d.Oc(8,R,2,2,"ng-template",null,4,d.Pc)),2&t&&(d.Cb(7),d.pc("data",e.list)("columns",e.columns)("loading",e.isLoading)("multiSelectable",!0)("rowSelectable",!1)("showPaginator",!1)("toolbarTitle","Place list")("rowStriped",!0)("showToolbar",!1))},directives:[D.a,w.b,f.a,P.a,m.n],styles:[""]}),q)}],K=((N=function e(){t(this,e)}).\u0275mod=d.Mb({type:N}),N.\u0275inj=d.Lb({factory:function(t){return new(t||N)},imports:[[c.j.forChild(j)],c.j]}),N),F=((G=function e(){t(this,e)}).\u0275mod=d.Mb({type:G}),G.\u0275inj=d.Lb({factory:function(t){return new(t||G)},imports:[[o.a,K]]}),G)}}])}();