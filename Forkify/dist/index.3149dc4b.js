var t,e,r,n,o,i,a,c,u,s,l,f,p,h,v,d,g,y,m,w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},b={},x={},j=function(t){return t&&t.Math==Math&&t};x=j("object"==typeof globalThis&&globalThis)||j("object"==typeof window&&window)||j("object"==typeof self&&self)||j("object"==typeof w&&w)||function(){return this}()||x||Function("return this")();var k={},O={};k=!(O=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},_={};_=!O(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var L=Function.prototype.call;S=_?L.bind(L):function(){return L.apply(L,arguments)};var T={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor;n=E&&!T.call({1:2},1)?function(t){var e=E(this,t);return!!e&&e.enumerable}:T;var M={};M=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var P={},I={},F={},z=Function.prototype,A=z.call,D=_&&z.bind.bind(A,A),N={},C=(F=_?D:function(t){return function(){return A.apply(t,arguments)}})({}.toString),B=F("".slice);N=function(t){return B(C(t),8,-1)};var $=Object,G=F("".split);I=O(function(){return!$("z").propertyIsEnumerable(0)})?function(t){return"String"==N(t)?G(t,""):$(t)}:$;var H={},R={};R=function(t){return null==t};var q=TypeError;H=function(t){if(R(t))throw q("Can't call method on "+t);return t},P=function(t){return I(H(t))};var V={},W={},Y={},K={},J={},Q="object"==typeof document&&document.all,U=(J={all:Q,IS_HTMLDDA:void 0===Q&&void 0!==Q}).all;K=J.IS_HTMLDDA?function(t){return"function"==typeof t||t===U}:function(t){return"function"==typeof t};var X=J.all;Y=J.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:K(t)||t===X}:function(t){return"object"==typeof t?null!==t:K(t)};var Z={},tt={};tt=function(t,e){var r;return arguments.length<2?K(r=x[t])?r:void 0:x[t]&&x[t][e]};var te={};te=F({}.isPrototypeOf);var tr={},tn={},to={},ti={};ti="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ta=x.process,tc=x.Deno,tu=ta&&ta.versions||tc&&tc.version,ts=tu&&tu.v8;ts&&(i=(o=ts.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&ti&&(!(o=ti.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=ti.match(/Chrome\/(\d+)/))&&(i=+o[1]),to=i;var tl=x.String;tr=(tn=!!Object.getOwnPropertySymbols&&!O(function(){var t=Symbol();return!tl(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&to&&to<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tf=Object;Z=tr?function(t){return"symbol"==typeof t}:function(t){var e=tt("Symbol");return K(e)&&te(e.prototype,tf(t))};var tp={},th={},tv={},td=String;tv=function(t){try{return td(t)}catch(t){return"Object"}};var tg=TypeError;th=function(t){if(K(t))return t;throw tg(tv(t)+" is not a function")},tp=function(t,e){var r=t[e];return R(r)?void 0:th(r)};var ty={},tm=TypeError;ty=function(t,e){var r,n;if("string"===e&&K(r=t.toString)&&!Y(n=S(r,t))||K(r=t.valueOf)&&!Y(n=S(r,t))||"string"!==e&&K(r=t.toString)&&!Y(n=S(r,t)))return n;throw tm("Can't convert object to primitive value")};var tw={},tb={};tb=!1;var tx={},tj={},tk=Object.defineProperty;tj=function(t,e){try{tk(x,t,{value:e,configurable:!0,writable:!0})}catch(r){x[t]=e}return e};var tO="__core-js_shared__";tx=x[tO]||tj(tO,{}),(tw=function(t,e){return tx[t]||(tx[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.0",mode:tb?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"});var tS={},t_={},tL=Object;t_=function(t){return tL(H(t))};var tT=F({}.hasOwnProperty);tS=Object.hasOwn||function(t,e){return tT(t_(t),e)};var tE={},tM=0,tP=Math.random(),tI=F(1..toString);tE=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tI(++tM+tP,36)};var tF=x.Symbol,tz=tw("wks"),tA=tr?tF.for||tF:tF&&tF.withoutSetter||tE,tD=TypeError,tN=(tS(tz,t="toPrimitive")||(tz[t]=tn&&tS(tF,t)?tF[t]:tA("Symbol."+t)),tz[t]);W=function(t,e){if(!Y(t)||Z(t))return t;var r,n=tp(t,tN);if(n){if(void 0===e&&(e="default"),!Y(r=S(n,t,e))||Z(r))return r;throw tD("Can't convert object to primitive value")}return void 0===e&&(e="number"),ty(t,e)},V=function(t){var e=W(t,"string");return Z(e)?e:e+""};var tC={},tB={},t$=x.document,tG=Y(t$)&&Y(t$.createElement);tB=function(t){return tG?t$.createElement(t):{}},tC=!k&&!O(function(){return 7!=Object.defineProperty(tB("div"),"a",{get:function(){return 7}}).a});var tH=Object.getOwnPropertyDescriptor;r=k?tH:function(t,e){if(t=P(t),e=V(e),tC)try{return tH(t,e)}catch(t){}if(tS(t,e))return M(!S(n,t,e),t[e])};var tR={},tq={};tq=k&&O(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tV={},tW=String,tY=TypeError;tV=function(t){if(Y(t))return t;throw tY(tW(t)+" is not an object")};var tK=TypeError,tJ=Object.defineProperty,tQ=Object.getOwnPropertyDescriptor,tU="enumerable",tX="configurable",tZ="writable";a=k?tq?function(t,e,r){if(tV(t),e=V(e),tV(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tZ in r&&!r[tZ]){var n=tQ(t,e);n&&n[tZ]&&(t[e]=r.value,r={configurable:tX in r?r[tX]:n[tX],enumerable:tU in r?r[tU]:n[tU],writable:!1})}return tJ(t,e,r)}:tJ:function(t,e,r){if(tV(t),e=V(e),tV(r),tC)try{return tJ(t,e,r)}catch(t){}if("get"in r||"set"in r)throw tK("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tR=k?function(t,e,r){return a(t,e,M(1,r))}:function(t,e,r){return t[e]=r,t};var t0={},t1={},t2=Function.prototype,t3=k&&Object.getOwnPropertyDescriptor,t5=tS(t2,"name")&&(!k||k&&t3(t2,"name").configurable),t9={},t8=F(Function.toString);K(tx.inspectSource)||(tx.inspectSource=function(t){return t8(t)}),t9=tx.inspectSource;var t4={},t7={},t6=x.WeakMap;t7=K(t6)&&/native code/.test(String(t6));var et={},ee=tw("keys");et=function(t){return ee[t]||(ee[t]=tE(t))};var er={};er={};var en="Object already initialized",eo=x.TypeError,ei=x.WeakMap;if(t7||tx.state){var ea=tx.state||(tx.state=new ei);ea.get=ea.get,ea.has=ea.has,ea.set=ea.set,c=function(t,e){if(ea.has(t))throw eo(en);return e.facade=t,ea.set(t,e),e},u=function(t){return ea.get(t)||{}},s=function(t){return ea.has(t)}}else{var ec=et("state");er[ec]=!0,c=function(t,e){if(tS(t,ec))throw eo(en);return e.facade=t,tR(t,ec,e),e},u=function(t){return tS(t,ec)?t[ec]:{}},s=function(t){return tS(t,ec)}}var eu=(t4={set:c,get:u,has:s,enforce:function(t){return s(t)?u(t):c(t,{})},getterFor:function(t){return function(e){var r;if(!Y(e)||(r=u(e)).type!==t)throw eo("Incompatible receiver, "+t+" required");return r}}}).enforce,es=t4.get,el=String,ef=Object.defineProperty,ep=F("".slice),eh=F("".replace),ev=F([].join),ed=k&&!O(function(){return 8!==ef(function(){},"length",{value:8}).length}),eg=String(String).split("String"),ey=t1=function(t,e,r){"Symbol("===ep(el(e),0,7)&&(e="["+eh(el(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tS(t,"name")||t5&&t.name!==e)&&(k?ef(t,"name",{value:e,configurable:!0}):t.name=e),ed&&r&&tS(r,"arity")&&t.length!==r.arity&&ef(t,"length",{value:r.arity});try{r&&tS(r,"constructor")&&r.constructor?k&&ef(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=eu(t);return tS(n,"source")||(n.source=ev(eg,"string"==typeof e?e:"")),t};Function.prototype.toString=ey(function(){return K(this)&&es(this).source||t9(this)},"toString"),t0=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(K(r)&&t1(r,i,n),n.global)o?t[e]=r:tj(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:a(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var em={},ew={},eb={},ex={},ej={},ek={},eO=Math.ceil,eS=Math.floor;ek=Math.trunc||function(t){var e=+t;return(e>0?eS:eO)(e)},ej=function(t){var e=+t;return e!=e||0===e?0:ek(e)};var e_=Math.max,eL=Math.min;ex=function(t,e){var r=ej(t);return r<0?e_(r+e,0):eL(r,e)};var eT={},eE={},eM=Math.min;eE=function(t){return t>0?eM(ej(t),9007199254740991):0},eT=function(t){return eE(t.length)};var eP=function(t){return function(e,r,n){var o,i=P(e),a=eT(i),c=ex(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},eI={includes:eP(!0),indexOf:eP(!1)}.indexOf,eF=F([].push);eb=function(t,e){var r,n=P(t),o=0,i=[];for(r in n)!tS(er,r)&&tS(n,r)&&eF(i,r);for(;e.length>o;)tS(n,r=e[o++])&&(~eI(i,r)||eF(i,r));return i};var ez=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return eb(t,ez)},f=Object.getOwnPropertySymbols;var eA=F([].concat);ew=tt("Reflect","ownKeys")||function(t){var e=l(tV(t));return f?eA(e,f(t)):e},em=function(t,e,n){for(var o=ew(e),i=0;i<o.length;i++){var c=o[i];tS(t,c)||n&&tS(n,c)||a(t,c,r(e,c))}};var eD={},eN=/#|\.prototype\./,eC=function(t,e){var r=e$[eB(t)];return r==eH||r!=eG&&(K(e)?O(e):!!e)},eB=eC.normalize=function(t){return String(t).replace(eN,".").toLowerCase()},e$=eC.data={},eG=eC.NATIVE="N",eH=eC.POLYFILL="P";eD=eC,b=function(t,e){var n,o,i,a,c,u=t.target,s=t.global,l=t.stat;if(n=s?x:l?x[u]||tj(u,{}):(x[u]||{}).prototype)for(o in e){if(a=e[o],i=t.dontCallGetSet?(c=r(n,o))&&c.value:n[o],!eD(s?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;em(a,i)}(t.sham||i&&i.sham)&&tR(a,"sham",!0),t0(n,o,a,t)}};var eR={},eq={},eV=Function.prototype,eW=eV.apply,eY=eV.call;eq="object"==typeof Reflect&&Reflect.apply||(_?eY.bind(eW):function(){return eY.apply(eW,arguments)});var eK={},eJ={},eQ=(eJ=function(t){if("Function"===N(t))return F(t)})(eJ.bind);eK=function(t,e){return th(t),void 0===e?t:_?eQ(t,e):function(){return t.apply(e,arguments)}};var eU={};eU=tt("document","documentElement");var eX={};eX=F([].slice);var eZ={},e0=TypeError;eZ=function(t,e){if(t<e)throw e0("Not enough arguments");return t};var e1={};e1=/(?:ipad|iphone|ipod).*applewebkit/i.test(ti);var e2={},e3={},e5=e3={};function e9(){throw Error("setTimeout has not been defined")}function e8(){throw Error("clearTimeout has not been defined")}function e4(t){if(p===setTimeout)return setTimeout(t,0);if((p===e9||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}!function(){try{p="function"==typeof setTimeout?setTimeout:e9}catch(t){p=e9}try{h="function"==typeof clearTimeout?clearTimeout:e8}catch(t){h=e8}}();var e7=[],e6=!1,rt=-1;function re(){e6&&v&&(e6=!1,v.length?e7=v.concat(e7):rt=-1,e7.length&&rr())}function rr(){if(!e6){var t=e4(re);e6=!0;for(var e=e7.length;e;){for(v=e7,e7=[];++rt<e;)v&&v[rt].run();rt=-1,e=e7.length}v=null,e6=!1,function(t){if(h===clearTimeout)return clearTimeout(t);if((h===e8||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}(t)}}function rn(t,e){this.fun=t,this.array=e}function ro(){}e5.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];e7.push(new rn(t,e)),1!==e7.length||e6||e4(rr)},rn.prototype.run=function(){this.fun.apply(null,this.array)},e5.title="browser",e5.browser=!0,e5.env={},e5.argv=[],e5.version="",e5.versions={},e5.on=ro,e5.addListener=ro,e5.once=ro,e5.off=ro,e5.removeListener=ro,e5.removeAllListeners=ro,e5.emit=ro,e5.prependListener=ro,e5.prependOnceListener=ro,e5.listeners=function(t){return[]},e5.binding=function(t){throw Error("process.binding is not supported")},e5.cwd=function(){return"/"},e5.chdir=function(t){throw Error("process.chdir is not supported")},e5.umask=function(){return 0},e2=void 0!==e3&&"process"==N(e3);var ri=x.setImmediate,ra=x.clearImmediate,rc=x.process,ru=x.Dispatch,rs=x.Function,rl=x.MessageChannel,rf=x.String,rp=0,rh={},rv="onreadystatechange";O(function(){d=x.location});var rd=function(t){if(tS(rh,t)){var e=rh[t];delete rh[t],e()}},rg=function(t){return function(){rd(t)}},ry=function(t){rd(t.data)},rm=function(t){x.postMessage(rf(t),d.protocol+"//"+d.host)};ri&&ra||(ri=function(t){eZ(arguments.length,1);var e=K(t)?t:rs(t),r=eX(arguments,1);return rh[++rp]=function(){eq(e,void 0,r)},g(rp),rp},ra=function(t){delete rh[t]},e2?g=function(t){rc.nextTick(rg(t))}:ru&&ru.now?g=function(t){ru.now(rg(t))}:rl&&!e1?(m=(y=new rl).port2,y.port1.onmessage=ry,g=eK(m.postMessage,m)):x.addEventListener&&K(x.postMessage)&&!x.importScripts&&d&&"file:"!==d.protocol&&!O(rm)?(g=rm,x.addEventListener("message",ry,!1)):g=rv in tB("script")?function(t){eU.appendChild(tB("script"))[rv]=function(){eU.removeChild(this),rd(t)}}:function(t){setTimeout(rg(t),0)});var rw=(eR={set:ri,clear:ra}).clear;b({global:!0,bind:!0,enumerable:!0,forced:x.clearImmediate!==rw},{clearImmediate:rw});var rb=eR.set,rx={},rj={};rj="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rk=x.Function,rO=/MSIE .\./.test(ti)||rj&&((e=x.Bun.version.split(".")).length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2]));rx=function(t,e){var r=e?2:1;return rO?function(n,o){var i=eZ(arguments.length,1)>r,a=K(n)?n:rk(n),c=i?eX(arguments,r):[],u=i?function(){eq(a,this,c)}:a;return e?t(u,o):t(u)}:t};var rS=x.setImmediate?rx(rb,!1):rb;b({global:!0,bind:!0,enumerable:!0,forced:x.setImmediate!==rS},{setImmediate:rS});var r_=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return o(u,"_invoke",{value:(a=new L(i||[]),c=p,function(r,o){if(c===h)throw Error("Generator is already running");if(c===v){if("throw"===r)throw o;return E()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),d;var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(i,a);if(u){if(u===d)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var s=f(t,n,a);if("normal"===s.type){if(c=a.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=v,a.method="throw",a.arg=s.arg)}})}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",v="completed",d={};function g(){}function y(){}function m(){}var w={};s(w,a,function(){return this});var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,a)&&(w=x);var j=m.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){var r;o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,c)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:E}}function E(){return{value:e,done:!0}}return y.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},k(O.prototype),s(O.prototype,c,function(){return this}),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},k(j),s(j,u,"Generator"),s(j,a,function(){return this}),s(j,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}({});try{regeneratorRuntime=r_}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r_:Function("r","regeneratorRuntime = r")(r_)}const rL=function(t){let e=`
  <div class="loading">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
</div>`;t.insertAdjacentHTML("afterbegin",e)},rT=async function(){try{rL(n);let t=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),e=await t.json(),{recipe:r}=e.data;r={id:r.id,title:r.title,sourceImage:r.source_url,servings:r.servings,ingredients:r.ingredients,image:r.image_url,publisher:r.publisher,cookingTime:r.cooking_time},console.log(r);let n=`
    <div class="recipe__main w-2/3">
          <div class="sourceImage h-[30%] flex flex-col items-center">
            <div class="image-source w-full h-full">
            <img src="${r.image}" alt="${r.image}" class="w-full h-full object-cover">
            </div>
            <h1
              class="title-image bg-gradient-to-r -mt-[70px] from-left to-right inline-block px-2 py-1 font-medium text-3xl text-white -skew-y-6 "
            >
              ${r.title}
            </h1>
          </div>
          <div class="recipe__info mt-4 flex flex-row justify-around">
            <div class="cocking__time flex flex-row text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f38e82"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1><span class="font-semibold">${r.cookingTime}</span> minutes</h1>
            </div>
            <div class="cooking__serveings flex flex-row text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f38e82"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <h1><span class="font-semibold">${r.servings}</span> servings</h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#f38e82"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#f38e82"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <div class="user flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f38e82"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-8 h-8 bg-gradient-to-r from-left to-right p-1 rounded-xl"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>
          </div>
          <div class="recipe__ingredients flex items-center text-xl flex-col mt-8">
            <h1 class="recipe__ingredients--title uppercase text-svg-color">
              recipe ingredients
            </h1>
            <div class="recipe__ingredients-menu flex flex-row mt-6 justify-around w-[500px]">
              <ul class="menu__ingredients">
                ${r.ingredients.map(t=>`<li class="recipe__ingredient-list inline-block w-1/2 h-min">
                  <div class='flex'>
                  <div class='recipe__quantity'>${t.quantity}</div>
                  <div class="recipe__description">
                  ${t.description}
                    <span class="recipe__unit">${t.unit}</span></div>
                  </div>
                  </li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="guide-to-cook flex justify-center flex-col items-center mt-9 px-6">
            <h1 class="guide-title uppercase text-svg-color mb-4">How to cook it </h1>
            <p class="guide-para">This recipe was carefully designed and tested by <span class="publisher">${r.publisher}</span>.
            Please check out directions at their website.</p>
            <button class="guide-directions bg-gradient-to-r from-left to-right p-3 rounded-xl text-white">Directions</button>
          </div>
        </div>`;rL(n),n.innerHTML="";let o=document.querySelector(".main");o.insertAdjacentHTML("beforeend",n)}catch(t){console.log(t)}};rT();
//# sourceMappingURL=index.3149dc4b.js.map
