(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"53Xx":function(e,n,c){"use strict";c.r(n),c.d(n,"NgxAuthModule",(function(){return ee}));var i=c("ofXK"),t=c("3Pt+"),r=c("tyNb"),l=c("McNs");class s{}var o=c("fXoL"),a=c("aceb");function u(e,n){if(1&e&&(o.hc(0,"li",20),o.Mc(1),o.gc()),2&e){const e=n.$implicit;o.Ob(1),o.Nc(e)}}function g(e,n){if(1&e&&(o.hc(0,"nb-alert",16),o.hc(1,"p",17),o.hc(2,"b"),o.Mc(3,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),o.gc(),o.gc(),o.hc(4,"ul",18),o.Kc(5,u,2,1,"li",19),o.gc(),o.gc()),2&e){const e=o.rc();o.Ob(5),o.wc("ngForOf",e.errors)}}function d(e,n){if(1&e&&(o.hc(0,"li",20),o.Mc(1),o.gc()),2&e){const e=n.$implicit;o.Ob(1),o.Nc(e)}}function f(e,n){if(1&e&&(o.hc(0,"nb-alert",21),o.hc(1,"p",17),o.hc(2,"b"),o.Mc(3,"Hooray!"),o.gc(),o.gc(),o.hc(4,"ul",18),o.Kc(5,d,2,1,"li",19),o.gc(),o.gc()),2&e){const e=o.rc();o.Ob(5),o.wc("ngForOf",e.messages)}}function h(e,n){1&e&&(o.hc(0,"p",23),o.Mc(1," \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 email! "),o.gc())}function m(e,n){1&e&&(o.hc(0,"p",23),o.Mc(1," \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email! "),o.gc())}function p(e,n){if(1&e&&(o.fc(0),o.Kc(1,h,2,0,"p",22),o.Kc(2,m,2,0,"p",22),o.ec()),2&e){o.rc();const e=o.Cc(12);o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.required),o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.pattern)}}function b(e,n){1&e&&(o.hc(0,"p",23),o.Mc(1," \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c! "),o.gc())}function w(e,n){if(1&e&&(o.hc(0,"p",23),o.Mc(1),o.gc()),2&e){const e=o.rc(2);o.Ob(1),o.Pc(" \u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0442 ",e.getConfigValue("forms.validation.password.minLength")," \u0434\u043e ",e.getConfigValue("forms.validation.password.maxLength")," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 ")}}function M(e,n){if(1&e&&(o.fc(0),o.Kc(1,b,2,0,"p",22),o.Kc(2,w,2,2,"p",22),o.ec()),2&e){o.rc();const e=o.Cc(18);o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.required),o.Ob(1),o.wc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function v(e,n){if(1&e&&(o.hc(0,"a",29),o.Mc(1),o.gc()),2&e){const e=o.rc().$implicit;o.Sb("with-icon",e.icon),o.wc("routerLink",e.link),o.Pb("target",e.target)("class",e.icon),o.Ob(1),o.Nc(e.title)}}function O(e,n){if(1&e&&(o.hc(0,"a"),o.Mc(1),o.gc()),2&e){const e=o.rc().$implicit;o.Sb("with-icon",e.icon),o.Pb("href",e.url,o.Gc)("target",e.target)("class",e.icon),o.Ob(1),o.Nc(e.title)}}function I(e,n){if(1&e&&(o.fc(0),o.Kc(1,v,2,6,"a",27),o.Kc(2,O,2,6,"a",28),o.ec()),2&e){const e=n.$implicit;o.Ob(1),o.wc("ngIf",e.link),o.Ob(1),o.wc("ngIf",e.url)}}function C(e,n){if(1&e&&(o.hc(0,"section",24),o.Mc(1," \u0438\u043b\u0438 \u0432\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e: "),o.hc(2,"div",25),o.Kc(3,I,3,2,"ng-container",26),o.gc(),o.gc()),2&e){const e=o.rc();o.Ob(3),o.wc("ngForOf",e.socialLinks)}}let N=(()=>{class e extends l.f{constructor(e,n,c={},i){super(e,c,i,n),this.authService=e,this.router=n,this.options=c,this.cd=i,this.user=new s,localStorage.setItem("logined","true"),this.authService.onTokenChange().subscribe(e=>{e.isValid()})}}return e.\u0275fac=function(n){return new(n||e)(o.bc(l.d),o.bc(r.c),o.bc(l.a),o.bc(o.i))},e.\u0275cmp=o.Vb({type:e,selectors:[["ngx-register"]],features:[o.Lb],decls:23,vars:18,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","pattern",".+@.+\\..+","placeholder","Email","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["nbButton","","fullWidth","","status","success",3,"disabled"],["class","links","aria-label","Social sign in",4,"ngIf"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"],["aria-label","Social sign in",1,"links"],[1,"socials"],[4,"ngFor","ngForOf"],[3,"routerLink","with-icon",4,"ngIf"],[3,"with-icon",4,"ngIf"],[3,"routerLink"]],template:function(e,n){if(1&e&&(o.hc(0,"h1",0),o.Mc(1,"\u0412\u0445\u043e\u0434"),o.gc(),o.hc(2,"p",1),o.Mc(3,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 Email \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430"),o.gc(),o.Kc(4,g,6,1,"nb-alert",2),o.Kc(5,f,6,1,"nb-alert",3),o.hc(6,"form",4,5),o.pc("ngSubmit",(function(){return n.login()})),o.hc(8,"div",6),o.hc(9,"label",7),o.Mc(10,"Email:"),o.gc(),o.hc(11,"input",8,9),o.pc("ngModelChange",(function(e){return n.user.email=e})),o.gc(),o.Kc(13,p,3,2,"ng-container",10),o.gc(),o.hc(14,"div",6),o.hc(15,"label",11),o.Mc(16,"\u041f\u0430\u0440\u043e\u043b\u044c:"),o.gc(),o.hc(17,"input",12,13),o.pc("ngModelChange",(function(e){return n.user.password=e})),o.gc(),o.Kc(19,M,3,2,"ng-container",10),o.gc(),o.hc(20,"button",14),o.Mc(21," \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c "),o.gc(),o.gc(),o.Kc(22,C,4,1,"section",15)),2&e){const e=o.Cc(7),c=o.Cc(12),i=o.Cc(18);o.Ob(4),o.wc("ngIf",n.showMessages.error&&(null==n.errors?null:n.errors.length)&&!n.submitted),o.Ob(1),o.wc("ngIf",n.showMessages.success&&(null==n.messages?null:n.messages.length)&&!n.submitted),o.Ob(6),o.wc("ngModel",n.user.email)("status",c.dirty?c.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.email.required")),o.Pb("aria-invalid",!(!c.invalid||!c.touched)||null),o.Ob(2),o.wc("ngIf",c.invalid&&c.touched),o.Ob(4),o.wc("ngModel",n.user.password)("status",i.dirty?i.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.password.required"))("minlength",n.getConfigValue("forms.validation.password.minLength"))("maxlength",n.getConfigValue("forms.validation.password.maxLength")),o.Pb("aria-invalid",!(!i.invalid||!i.touched)||null),o.Ob(2),o.wc("ngIf",i.invalid&&i.touched),o.Ob(1),o.Sb("btn-pulse",n.submitted),o.wc("disabled",n.submitted||!e.valid),o.Ob(2),o.wc("ngIf",n.socialLinks&&n.socialLinks.length>0)}},directives:[i.l,t.A,t.q,t.r,a.w,t.c,t.u,t.p,t.s,t.w,t.l,t.k,a.d,a.b,i.k,r.f],encapsulation:2}),e})();var K=c("A+vl"),k=c("tNPV");function L(e,n){if(1&e&&(o.hc(0,"li",29),o.Mc(1),o.gc()),2&e){const e=n.$implicit;o.Ob(1),o.Nc(e)}}function q(e,n){if(1&e&&(o.hc(0,"nb-alert",25),o.hc(1,"p",26),o.hc(2,"b"),o.Mc(3,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),o.gc(),o.gc(),o.hc(4,"ul",27),o.Kc(5,L,2,1,"li",28),o.gc(),o.gc()),2&e){const e=o.rc();o.Ob(5),o.wc("ngForOf",e.messages)}}function S(e,n){if(1&e&&(o.hc(0,"li",29),o.Mc(1),o.gc()),2&e){const e=n.$implicit;o.Ob(1),o.Nc(e)}}function x(e,n){if(1&e&&(o.hc(0,"nb-alert",30),o.hc(1,"p",26),o.hc(2,"b"),o.Mc(3,"\u0423\u0441\u043f\u0435\u0448\u043d\u043e!"),o.gc(),o.gc(),o.hc(4,"ul",27),o.Kc(5,S,2,1,"li",28),o.gc(),o.gc()),2&e){const e=o.rc();o.Ob(5),o.wc("ngForOf",e.messages)}}function V(e,n){1&e&&(o.hc(0,"p",32),o.Mc(1," \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u043c\u044f! "),o.gc())}function y(e,n){if(1&e&&(o.hc(0,"p",32),o.Mc(1),o.gc()),2&e){const e=o.rc(2);o.Ob(1),o.Pc(" Full name should contains from ",e.getConfigValue("forms.validation.fullName.minLength")," to ",e.getConfigValue("forms.validation.fullName.maxLength")," characters ")}}function P(e,n){if(1&e&&(o.fc(0),o.Kc(1,V,2,0,"p",31),o.Kc(2,y,2,2,"p",31),o.ec()),2&e){o.rc();const e=o.Cc(10);o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.required),o.Ob(1),o.wc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function F(e,n){1&e&&(o.hc(0,"p",32),o.Mc(1," \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f! "),o.gc())}function $(e,n){if(1&e&&(o.hc(0,"p",32),o.Mc(1),o.gc()),2&e){const e=o.rc(2);o.Ob(1),o.Pc(" Full name should contains from ",e.getConfigValue("forms.validation.lastName.minLength")," to ",e.getConfigValue("forms.validation.lastName.maxLength")," characters ")}}function E(e,n){if(1&e&&(o.fc(0),o.Kc(1,F,2,0,"p",31),o.Kc(2,$,2,2,"p",31),o.ec()),2&e){o.rc();const e=o.Cc(16);o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.required),o.Ob(1),o.wc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function W(e,n){1&e&&(o.hc(0,"p",32),o.Mc(1," \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f email! "),o.gc())}function H(e,n){1&e&&(o.hc(0,"p",32),o.Mc(1," Email \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c! "),o.gc())}function z(e,n){if(1&e&&(o.fc(0),o.Kc(1,W,2,0,"p",31),o.Kc(2,H,2,0,"p",31),o.ec()),2&e){o.rc();const e=o.Cc(27);o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.required),o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.pattern)}}function A(e,n){1&e&&(o.hc(0,"p",32),o.Mc(1," \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c! "),o.gc())}function j(e,n){if(1&e&&(o.hc(0,"p",32),o.Mc(1),o.gc()),2&e){const e=o.rc(2);o.Ob(1),o.Pc(" \u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0442 ",e.getConfigValue("forms.validation.password.minLength")," \u0434\u043e ",e.getConfigValue("forms.validation.password.maxLength")," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 ")}}function B(e,n){if(1&e&&(o.fc(0),o.Kc(1,A,2,0,"p",31),o.Kc(2,j,2,2,"p",31),o.ec()),2&e){o.rc();const e=o.Cc(33);o.Ob(1),o.wc("ngIf",null==e.errors?null:e.errors.required),o.Ob(1),o.wc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function R(e,n){if(1&e&&o.cc(0,"nb-icon",41),2&e){const e=o.rc(2).$implicit;o.wc("icon",e.icon)}}function X(e,n){if(1&e&&o.Mc(0),2&e){const e=o.rc(2).$implicit;o.Nc(e.title)}}function G(e,n){if(1&e&&(o.hc(0,"a",38),o.Kc(1,R,1,1,"nb-icon",39),o.Kc(2,X,1,1,"ng-template",null,40,o.Lc),o.gc()),2&e){const e=o.Cc(3),n=o.rc().$implicit;o.Sb("with-icon",n.icon),o.wc("routerLink",n.link),o.Pb("target",n.target)("class",n.icon),o.Ob(1),o.wc("ngIf",n.icon)("ngIfElse",e)}}function J(e,n){if(1&e&&o.cc(0,"nb-icon",41),2&e){const e=o.rc(2).$implicit;o.wc("icon",e.icon)}}function T(e,n){if(1&e&&o.Mc(0),2&e){const e=o.rc(2).$implicit;o.Nc(e.title)}}function Y(e,n){if(1&e&&(o.hc(0,"a"),o.Kc(1,J,1,1,"nb-icon",39),o.Kc(2,T,1,1,"ng-template",null,40,o.Lc),o.gc()),2&e){const e=o.Cc(3),n=o.rc().$implicit;o.Sb("with-icon",n.icon),o.Pb("href",n.url,o.Gc)("target",n.target)("class",n.icon),o.Ob(1),o.wc("ngIf",n.icon)("ngIfElse",e)}}function Z(e,n){if(1&e&&(o.fc(0),o.Kc(1,G,4,7,"a",36),o.Kc(2,Y,4,7,"a",37),o.ec()),2&e){const e=n.$implicit;o.Ob(1),o.wc("ngIf",e.link),o.Ob(1),o.wc("ngIf",e.url)}}function D(e,n){if(1&e&&(o.hc(0,"section",33),o.Mc(1," \u0438\u043b\u0438 \u0432\u043e\u0439\u0442\u0438 \u0441 : "),o.hc(2,"div",34),o.Kc(3,Z,3,2,"ng-container",35),o.gc(),o.gc()),2&e){const e=o.rc();o.Ob(3),o.wc("ngForOf",e.socialLinks)}}const Q=[{path:"",component:l.b,children:[{path:"login",component:N},{path:"register",component:(()=>{class e extends l.i{constructor(e,n,c,i,t,r,l){super(e,n,c,i),this.authService=e,this.cd=c,this.router=i,this.route=t,this.redirectService=r,this.accountService=l}ngOnInit(){this.route.queryParams.subscribe(e=>{this.accountService.checkSecureHandle(e.secureHandle).subscribe(n=>{console.log(n),this.secureHandle=e.secureHandle,this.accountService.preregistrationStep(e.secureHandle).subscribe(n=>{this.user.firstName=n.firstName,this.user.lastName=n.lastName,this.user.email=n.email,this.user.phoneNumber=n.phoneNumber,this.user.roleId=n.role.roleId,this.user.secureHandle=e.secureHandle})})})}}return e.\u0275fac=function(n){return new(n||e)(o.bc(l.d),o.bc(l.a),o.bc(o.i),o.bc(r.c),o.bc(r.a),o.bc(K.a),o.bc(k.a))},e.\u0275cmp=o.Vb({type:e,selectors:[["ngx-register"]],features:[o.Lb],decls:42,vars:38,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-name",1,"label"],["nbInput","","id","input-firstname","name","firstNames","placeholder","\u0418\u043c\u044f","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["firstName","ngModel"],[4,"ngIf"],["nbInput","","id","input-lastName","name","lastName","placeholder","\u0424\u0430\u043c\u0438\u043b\u0438\u044f","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["lastName","ngModel"],["for","input-phone",1,"label"],["nbInput","","id","input-phone","name","phoneNumber","placeholder","\u0418\u043c\u044f","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["phoneNumber","ngModel"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","pattern",".+@.+..+","placeholder","Email","fullWidth","","fieldSize","large",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],["for","input-password",1,"label"],["nbInput","","type","password","id","input-password","name","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["nbButton","","fullWidth","","status","primary","size","large",3,"disabled"],["class","links","aria-label","Social sign in",4,"ngIf"],["aria-label","Sign in",1,"another-action"],["routerLink","../login",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],["aria-label","Social sign in",1,"links"],[1,"socials"],[4,"ngFor","ngForOf"],[3,"routerLink","with-icon",4,"ngIf"],[3,"with-icon",4,"ngIf"],[3,"routerLink"],[3,"icon",4,"ngIf","ngIfElse"],["title",""],[3,"icon"]],template:function(e,n){if(1&e&&(o.hc(0,"h1",0),o.Mc(1,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.gc(),o.Kc(2,q,6,1,"nb-alert",1),o.Kc(3,x,6,1,"nb-alert",2),o.hc(4,"form",3,4),o.pc("ngSubmit",(function(){return n.register()})),o.hc(6,"div",5),o.hc(7,"label",6),o.Mc(8,"\u0418\u043c\u044f"),o.gc(),o.hc(9,"input",7,8),o.pc("ngModelChange",(function(e){return n.user.firstName=e})),o.gc(),o.Kc(11,P,3,2,"ng-container",9),o.gc(),o.hc(12,"div",5),o.hc(13,"label",6),o.Mc(14,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"),o.gc(),o.hc(15,"input",10,11),o.pc("ngModelChange",(function(e){return n.user.lastName=e})),o.gc(),o.Kc(17,E,3,2,"ng-container",9),o.gc(),o.hc(18,"div",5),o.hc(19,"label",12),o.Mc(20,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),o.gc(),o.hc(21,"input",13,14),o.pc("ngModelChange",(function(e){return n.user.phoneNumber=e})),o.gc(),o.gc(),o.hc(23,"div",5),o.hc(24,"label",15),o.Mc(25,"Email:"),o.gc(),o.hc(26,"input",16,17),o.pc("ngModelChange",(function(e){return n.user.email=e})),o.gc(),o.Kc(28,z,3,2,"ng-container",9),o.gc(),o.hc(29,"div",5),o.hc(30,"label",18),o.Mc(31,"\u041f\u0430\u0440\u043e\u043b\u044c:"),o.gc(),o.hc(32,"input",19,20),o.pc("ngModelChange",(function(e){return n.user.password=e})),o.gc(),o.Kc(34,B,3,2,"ng-container",9),o.gc(),o.hc(35,"button",21),o.Mc(36," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f "),o.gc(),o.gc(),o.Kc(37,D,4,1,"section",22),o.hc(38,"section",23),o.Mc(39," \u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? "),o.hc(40,"a",24),o.Mc(41,"\u0412\u043e\u0439\u0442\u0438"),o.gc(),o.gc()),2&e){const e=o.Cc(5),c=o.Cc(10),i=o.Cc(16),t=o.Cc(22),r=o.Cc(27),l=o.Cc(33);o.Ob(2),o.wc("ngIf",n.showMessages.error&&(null==n.errors?null:n.errors.length)&&!n.submitted),o.Ob(1),o.wc("ngIf",n.showMessages.success&&(null==n.messages?null:n.messages.length)&&!n.submitted),o.Ob(6),o.wc("ngModel",n.user.firstName)("status",c.dirty?c.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.firstName.required"))("minlength",n.getConfigValue("forms.validation.firstName.minLength"))("maxlength",n.getConfigValue("forms.validation.firstName.maxLength")),o.Pb("aria-invalid",!(!c.invalid||!c.touched)||null),o.Ob(2),o.wc("ngIf",c.invalid&&c.touched),o.Ob(4),o.wc("ngModel",n.user.lastName)("status",i.dirty?i.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.lastName.required"))("minlength",n.getConfigValue("forms.validation.lastName.minLength"))("maxlength",n.getConfigValue("forms.validation.lastName.maxLength")),o.Pb("aria-invalid",!(!i.invalid||!i.touched)||null),o.Ob(2),o.wc("ngIf",i.invalid&&i.touched),o.Ob(4),o.wc("ngModel",n.user.phoneNumber)("status",t.dirty?t.invalid?"danger":"success":"basic")("required",!0)("minlength",12)("maxlength",12),o.Pb("aria-invalid",!(!c.invalid||!c.touched)||null),o.Ob(5),o.wc("ngModel",n.user.email)("status",r.dirty?r.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.email.required")),o.Pb("aria-invalid",!(!r.invalid||!r.touched)||null),o.Ob(2),o.wc("ngIf",r.invalid&&r.touched),o.Ob(4),o.wc("ngModel",n.user.password)("status",l.dirty?l.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.password.required"))("minlength",n.getConfigValue("forms.validation.password.minLength"))("maxlength",n.getConfigValue("forms.validation.password.maxLength")),o.Pb("aria-invalid",!(!l.invalid||!l.touched)||null),o.Ob(2),o.wc("ngIf",l.invalid&&l.touched),o.Ob(1),o.Sb("btn-pulse",n.submitted),o.wc("disabled",n.submitted||!e.valid),o.Ob(2),o.wc("ngIf",n.socialLinks&&n.socialLinks.length>0)}},directives:[i.l,t.A,t.q,t.r,a.w,t.c,t.p,t.s,t.w,t.l,t.k,t.u,a.d,r.f,a.b,i.k,a.t],encapsulation:2}),e})()},{path:"request-password",component:l.j},{path:"reset-pass",component:l.k},{path:"logout",component:l.g}]}];let U=(()=>{class e{constructor(){console.log("Burned")}}return e.\u0275mod=o.Zb({type:e}),e.\u0275inj=o.Yb({factory:function(n){return new(n||e)},imports:[[r.g.forChild(Q)],r.g]}),e})();var _=c("tR1z");let ee=(()=>{class e{}return e.\u0275mod=o.Zb({type:e}),e.\u0275inj=o.Yb({factory:function(n){return new(n||e)},imports:[[i.b,t.j,r.g,a.v,a.c,a.x,a.e,a.p,U,_.a,l.c.forRoot({strategies:[l.h.setup({name:"email",token:{class:l.e,key:"token"},baseEndpoint:"https://twm-webapi.somee.com/",login:{endpoint:"api/Account/SignInToAccount",redirect:{success:"/",failure:null},method:"post"},register:{endpoint:"api/Account/Register",redirect:{success:"/",failure:null},method:"post"},logout:{endpoint:"",redirect:{success:"/",failure:null}},resetPass:{endpoint:"/auth/resetpass",redirect:{success:"/welcome",failure:null},method:"post"},requestPass:{endpoint:"/auth/request-pass",method:"post"}})],forms:{}})]]}),e})()}}]);