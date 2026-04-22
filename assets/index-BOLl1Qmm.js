function yd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Us={exports:{}},kl={},Fs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Id=Symbol.for("react.portal"),Ad=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),kd=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Td=Symbol.for("react.memo"),Ed=Symbol.for("react.lazy"),va=Symbol.iterator;function Nd(e){return e===null||typeof e!="object"?null:(e=va&&e[va]||e["@@iterator"],typeof e=="function"?e:null)}var Hs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Ks={};function ht(e,n,t){this.props=e,this.context=n,this.refs=Ks,this.updater=t||Hs}ht.prototype.isReactComponent={};ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $s(){}$s.prototype=ht.prototype;function vo(e,n,t){this.props=e,this.context=n,this.refs=Ks,this.updater=t||Hs}var Io=vo.prototype=new $s;Io.constructor=vo;Vs(Io,ht.prototype);Io.isPureReactComponent=!0;var Ia=Array.isArray,Ws=Object.prototype.hasOwnProperty,Ao={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Ws.call(n,r)&&!Qs.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:dr,type:e,key:i,ref:o,props:l,_owner:Ao.current}}function Md(e,n){return{$$typeof:dr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function jd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Aa=/\/+/g;function Kl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?jd(""+e.key):n.toString(36)}function Br(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case dr:case Id:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Kl(o,0):r,Ia(l)?(t="",e!=null&&(t=e.replace(Aa,"$&/")+"/"),Br(l,n,t,"",function(c){return c})):l!=null&&(xo(l)&&(l=Md(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Aa,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Ia(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Kl(i,a);o+=Br(i,n,t,s,l)}else if(s=Nd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Kl(i,a++),o+=Br(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Ar(e,n,t){if(e==null)return e;var r=[],l=0;return Br(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Ld(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},zr={transition:null},Od={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:zr,ReactCurrentOwner:Ao};function Ys(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Ar,forEach:function(e,n,t){Ar(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ar(e,function(){n++}),n},toArray:function(e){return Ar(e,function(n){return n})||[]},only:function(e){if(!xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ht;L.Fragment=Ad;L.Profiler=wd;L.PureComponent=vo;L.StrictMode=xd;L.Suspense=Pd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;L.act=Ys;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vs({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Ao.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ws.call(n,s)&&!Qs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:kd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sd,_context:e},e.Consumer=e};L.createElement=Xs;L.createFactory=function(e){var n=Xs.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Cd,render:e}};L.isValidElement=xo;L.lazy=function(e){return{$$typeof:Ed,_payload:{_status:-1,_result:e},_init:Ld}};L.memo=function(e,n){return{$$typeof:Td,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=zr.transition;zr.transition={};try{e()}finally{zr.transition=n}};L.unstable_act=Ys;L.useCallback=function(e,n){return ue.current.useCallback(e,n)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,n){return ue.current.useEffect(e,n)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ue.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Fs.exports=L;var y=Fs.exports;const Js=vd(y),_d=yd({__proto__:null,default:Js},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=y,Rd=Symbol.for("react.element"),Gd=Symbol.for("react.fragment"),Bd=Object.prototype.hasOwnProperty,zd=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ud={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Bd.call(n,r)&&!Ud.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Rd,type:e,key:i,ref:o,props:l,_owner:zd.current}}kl.Fragment=Gd;kl.jsx=Zs;kl.jsxs=Zs;Us.exports=kl;var u=Us.exports,vi={},bs={exports:{}},xe={},qs={exports:{}},eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,M){var j=P.length;P.push(M);e:for(;0<j;){var $=j-1>>>1,Z=P[$];if(0<l(Z,M))P[$]=M,P[j]=Z,j=$;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],j=P.pop();if(j!==M){P[0]=j;e:for(var $=0,Z=P.length,vr=Z>>>1;$<vr;){var kn=2*($+1)-1,Vl=P[kn],Cn=kn+1,Ir=P[Cn];if(0>l(Vl,j))Cn<Z&&0>l(Ir,Vl)?(P[$]=Ir,P[Cn]=j,$=Cn):(P[$]=Vl,P[kn]=j,$=kn);else if(Cn<Z&&0>l(Ir,j))P[$]=Ir,P[Cn]=j,$=Cn;else break e}}return M}function l(P,M){var j=P.sortIndex-M.sortIndex;return j!==0?j:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],h=1,m=null,g=3,A=!1,x=!1,I=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var M=t(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=P)r(c),M.sortIndex=M.expirationTime,n(s,M);else break;M=t(c)}}function v(P){if(I=!1,p(P),!x)if(t(s)!==null)x=!0,Fl(k);else{var M=t(c);M!==null&&Hl(v,M.startTime-P)}}function k(P,M){x=!1,I&&(I=!1,d(N),N=-1),A=!0;var j=g;try{for(p(M),m=t(s);m!==null&&(!(m.expirationTime>M)||P&&!Me());){var $=m.callback;if(typeof $=="function"){m.callback=null,g=m.priorityLevel;var Z=$(m.expirationTime<=M);M=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===t(s)&&r(s),p(M)}else r(s);m=t(s)}if(m!==null)var vr=!0;else{var kn=t(c);kn!==null&&Hl(v,kn.startTime-M),vr=!1}return vr}finally{m=null,g=j,A=!1}}var T=!1,E=null,N=-1,K=5,O=-1;function Me(){return!(e.unstable_now()-O<K)}function xt(){if(E!==null){var P=e.unstable_now();O=P;var M=!0;try{M=E(!0,P)}finally{M?wt():(T=!1,E=null)}}else T=!1}var wt;if(typeof f=="function")wt=function(){f(xt)};else if(typeof MessageChannel<"u"){var ya=new MessageChannel,gd=ya.port2;ya.port1.onmessage=xt,wt=function(){gd.postMessage(null)}}else wt=function(){S(xt,0)};function Fl(P){E=P,T||(T=!0,wt())}function Hl(P,M){N=S(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||A||(x=!0,Fl(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var j=g;g=M;try{return P()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=g;g=P;try{return M()}finally{g=j}},e.unstable_scheduleCallback=function(P,M,j){var $=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=j+Z,P={id:h++,callback:M,priorityLevel:P,startTime:j,expirationTime:Z,sortIndex:-1},j>$?(P.sortIndex=j,n(c,P),t(s)===null&&P===t(c)&&(I?(d(N),N=-1):I=!0,Hl(v,j-$))):(P.sortIndex=Z,n(s,P),x||A||(x=!0,Fl(k))),P},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(P){var M=g;return function(){var j=g;g=M;try{return P.apply(this,arguments)}finally{g=j}}}})(eu);qs.exports=eu;var Fd=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=y,Ae=Fd;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nu=new Set,$t={};function zn(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for($t[e]=n,e=0;e<n.length;e++)nu.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=Object.prototype.hasOwnProperty,Vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xa={},wa={};function Kd(e){return Ii.call(wa,e)?!0:Ii.call(xa,e)?!1:Vd.test(e)?wa[e]=!0:(xa[e]=!0,!1)}function $d(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wd(e,n,t,r){if(n===null||typeof n>"u"||$d(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var wo=/[\-:]([a-z])/g;function So(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wo,So);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wo,So);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wo,So);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ko(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Wd(n,t,l,r)&&(t=null),r||l===null?Kd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var be=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Co=Symbol.for("react.strict_mode"),Ai=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),Po=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),wi=Symbol.for("react.suspense_list"),To=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),Sa=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=Sa&&e[Sa]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,$l;function Lt(e){if($l===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);$l=n&&n[1]||""}return`
`+$l+e}var Wl=!1;function Ql(e,n){if(!e||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Lt(e):""}function Qd(e){switch(e.tag){case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Vn:return"Portal";case Ai:return"Profiler";case Co:return"StrictMode";case xi:return"Suspense";case wi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ru:return(e.displayName||"Context")+".Consumer";case tu:return(e._context.displayName||"Context")+".Provider";case Po:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case To:return n=e.displayName||null,n!==null?n:Si(e.type)||"Memo";case nn:n=e._payload,e=e._init;try{return Si(e(n))}catch{}}return null}function Xd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(n);case 8:return n===Co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yd(e){var n=iu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wr(e){e._valueTracker||(e._valueTracker=Yd(e))}function ou(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=iu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ki(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ka(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function au(e,n){n=n.checked,n!=null&&ko(e,"checked",n,!1)}function Ci(e,n){au(e,n);var t=vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Pi(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ca(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Pi(e,n,t){(n!=="number"||Jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ot=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ti(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(Ot(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function su(e,n){var t=vn(n.value),r=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ta(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?uu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Wt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Rt).forEach(function(e){Jd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rt[n]=Rt[e]})});function du(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rt.hasOwnProperty(e)&&Rt[e]?(""+n).trim():n+"px"}function fu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=du(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Zd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,n){if(n){if(Zd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Mi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,rt=null,lt=null;function Ea(e){if(e=mr(e)){if(typeof Li!="function")throw Error(w(280));var n=e.stateNode;n&&(n=Nl(n),Li(e.stateNode,e.type,n))}}function pu(e){rt?lt?lt.push(e):lt=[e]:rt=e}function mu(){if(rt){var e=rt,n=lt;if(lt=rt=null,Ea(e),n)for(e=0;e<n.length;e++)Ea(n[e])}}function hu(e,n){return e(n)}function gu(){}var Xl=!1;function yu(e,n,t){if(Xl)return e(n,t);Xl=!0;try{return hu(e,n,t)}finally{Xl=!1,(rt!==null||lt!==null)&&(gu(),mu())}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=Nl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var Oi=!1;if(Xe)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{Oi=!1}function bd(e,n,t,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Gt=!1,Zr=null,br=!1,_i=null,qd={onError:function(e){Gt=!0,Zr=e}};function ef(e,n,t,r,l,i,o,a,s){Gt=!1,Zr=null,bd.apply(qd,arguments)}function nf(e,n,t,r,l,i,o,a,s){if(ef.apply(this,arguments),Gt){if(Gt){var c=Zr;Gt=!1,Zr=null}else throw Error(w(198));br||(br=!0,_i=c)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function vu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Na(e){if(Un(e)!==e)throw Error(w(188))}function tf(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Na(l),e;if(i===r)return Na(l),n;i=i.sibling}throw Error(w(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function Iu(e){return e=tf(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var xu=Ae.unstable_scheduleCallback,Ma=Ae.unstable_cancelCallback,rf=Ae.unstable_shouldYield,lf=Ae.unstable_requestPaint,W=Ae.unstable_now,of=Ae.unstable_getCurrentPriorityLevel,No=Ae.unstable_ImmediatePriority,wu=Ae.unstable_UserBlockingPriority,qr=Ae.unstable_NormalPriority,af=Ae.unstable_LowPriority,Su=Ae.unstable_IdlePriority,Cl=null,Fe=null;function sf(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:df,uf=Math.log,cf=Math.LN2;function df(e){return e>>>=0,e===0?32:31-(uf(e)/cf|0)|0}var kr=64,Cr=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=_t(a):(i&=o,i!==0&&(r=_t(i)))}else o=t&~l,o!==0?r=_t(o):i!==0&&(r=_t(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),l=1<<t,r|=e[t],n&=~l;return r}function ff(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),a=1<<o,s=l[o];s===-1?(!(a&t)||a&r)&&(l[o]=ff(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function Di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ku(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Yl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function fr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function mf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-De(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Mo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var D=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,jo,Tu,Eu,Nu,Ri=!1,Pr=[],un=null,cn=null,dn=null,Xt=new Map,Yt=new Map,rn=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ja(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Xt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Ct(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=mr(n),n!==null&&jo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function gf(e,n,t,r,l){switch(n){case"focusin":return un=Ct(un,e,n,t,r,l),!0;case"dragenter":return cn=Ct(cn,e,n,t,r,l),!0;case"mouseover":return dn=Ct(dn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Xt.set(i,Ct(Xt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yt.set(i,Ct(Yt.get(i)||null,e,n,t,r,l)),!0}return!1}function Mu(e){var n=En(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=vu(t),n!==null){e.blockedOn=n,Nu(e.priority,function(){Tu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Gi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ji=r,t.target.dispatchEvent(r),ji=null}else return n=mr(t),n!==null&&jo(n),e.blockedOn=t,!1;n.shift()}return!0}function La(e,n,t){Ur(e)&&t.delete(n)}function yf(){Ri=!1,un!==null&&Ur(un)&&(un=null),cn!==null&&Ur(cn)&&(cn=null),dn!==null&&Ur(dn)&&(dn=null),Xt.forEach(La),Yt.forEach(La)}function Pt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ri||(Ri=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,yf)))}function Jt(e){function n(l){return Pt(l,e)}if(0<Pr.length){Pt(Pr[0],e);for(var t=1;t<Pr.length;t++){var r=Pr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Pt(un,e),cn!==null&&Pt(cn,e),dn!==null&&Pt(dn,e),Xt.forEach(n),Yt.forEach(n),t=0;t<rn.length;t++)r=rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)Mu(t),t.blockedOn===null&&rn.shift()}var it=be.ReactCurrentBatchConfig,nl=!0;function vf(e,n,t,r){var l=D,i=it.transition;it.transition=null;try{D=1,Lo(e,n,t,r)}finally{D=l,it.transition=i}}function If(e,n,t,r){var l=D,i=it.transition;it.transition=null;try{D=4,Lo(e,n,t,r)}finally{D=l,it.transition=i}}function Lo(e,n,t,r){if(nl){var l=Gi(e,n,t,r);if(l===null)ii(e,n,r,tl,t),ja(e,r);else if(gf(l,e,n,t,r))r.stopPropagation();else if(ja(e,r),n&4&&-1<hf.indexOf(e)){for(;l!==null;){var i=mr(l);if(i!==null&&Pu(i),i=Gi(e,n,t,r),i===null&&ii(e,n,r,tl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else ii(e,n,r,null,t)}}var tl=null;function Gi(e,n,t,r){if(tl=null,e=Eo(r),e=En(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=vu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return tl=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(of()){case No:return 1;case wu:return 4;case qr:case af:return 16;case Su:return 536870912;default:return 16}default:return 16}}var on=null,Oo=null,Fr=null;function Lu(){if(Fr)return Fr;var e,n=Oo,t=n.length,r,l="value"in on?on.value:on.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Fr=l.slice(e,1<r?1-r:void 0)}function Hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Oa(){return!1}function we(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Tr:Oa,this.isPropagationStopped=Oa,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_o=we(gt),pr=H({},gt,{view:0,detail:0}),Af=we(pr),Jl,Zl,Tt,Pl=H({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Do,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?(Jl=e.screenX-Tt.screenX,Zl=e.screenY-Tt.screenY):Zl=Jl=0,Tt=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),_a=we(Pl),xf=H({},Pl,{dataTransfer:0}),wf=we(xf),Sf=H({},pr,{relatedTarget:0}),bl=we(Sf),kf=H({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Cf=we(kf),Pf=H({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tf=we(Pf),Ef=H({},gt,{data:0}),Da=we(Ef),Nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jf[e])?!!n[e]:!1}function Do(){return Lf}var Of=H({},pr,{key:function(e){if(e.key){var n=Nf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Do,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=we(Of),Df=H({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=we(Df),Rf=H({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Do}),Gf=we(Rf),Bf=H({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=we(Bf),Uf=H({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ff=we(Uf),Hf=[9,13,27,32],Ro=Xe&&"CompositionEvent"in window,Bt=null;Xe&&"documentMode"in document&&(Bt=document.documentMode);var Vf=Xe&&"TextEvent"in window&&!Bt,Ou=Xe&&(!Ro||Bt&&8<Bt&&11>=Bt),Ga=" ",Ba=!1;function _u(e,n){switch(e){case"keyup":return Hf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Kf(e,n){switch(e){case"compositionend":return Du(n);case"keypress":return n.which!==32?null:(Ba=!0,Ga);case"textInput":return e=n.data,e===Ga&&Ba?null:e;default:return null}}function $f(e,n){if($n)return e==="compositionend"||!Ro&&_u(e,n)?(e=Lu(),Fr=Oo=on=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ou&&n.locale!=="ko"?null:n.data;default:return null}}var Wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wf[e.type]:n==="textarea"}function Ru(e,n,t,r){pu(r),n=rl(n,"onChange"),0<n.length&&(t=new _o("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var zt=null,Zt=null;function Qf(e){Qu(e,0)}function Tl(e){var n=Xn(e);if(ou(n))return e}function Xf(e,n){if(e==="change")return n}var Gu=!1;if(Xe){var ql;if(Xe){var ei="oninput"in document;if(!ei){var Ua=document.createElement("div");Ua.setAttribute("oninput","return;"),ei=typeof Ua.oninput=="function"}ql=ei}else ql=!1;Gu=ql&&(!document.documentMode||9<document.documentMode)}function Fa(){zt&&(zt.detachEvent("onpropertychange",Bu),Zt=zt=null)}function Bu(e){if(e.propertyName==="value"&&Tl(Zt)){var n=[];Ru(n,Zt,e,Eo(e)),yu(Qf,n)}}function Yf(e,n,t){e==="focusin"?(Fa(),zt=n,Zt=t,zt.attachEvent("onpropertychange",Bu)):e==="focusout"&&Fa()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(Zt)}function Zf(e,n){if(e==="click")return Tl(n)}function bf(e,n){if(e==="input"||e==="change")return Tl(n)}function qf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:qf;function bt(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ii.call(n,l)||!Ge(e[l],n[l]))return!1}return!0}function Ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Va(e,n){var t=Ha(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ha(t)}}function zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uu(){for(var e=window,n=Jr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Jr(e.document)}return n}function Go(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function e0(e){var n=Uu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zu(t.ownerDocument.documentElement,t)){if(r!==null&&Go(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Va(t,i);var o=Va(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n0=Xe&&"documentMode"in document&&11>=document.documentMode,Wn=null,Bi=null,Ut=null,zi=!1;function Ka(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zi||Wn==null||Wn!==Jr(r)||(r=Wn,"selectionStart"in r&&Go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ut&&bt(Ut,r)||(Ut=r,r=rl(Bi,"onSelect"),0<r.length&&(n=new _o("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Wn)))}function Er(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qn={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},ni={},Fu={};Xe&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function El(e){if(ni[e])return ni[e];if(!Qn[e])return e;var n=Qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fu)return ni[e]=n[t];return e}var Hu=El("animationend"),Vu=El("animationiteration"),Ku=El("animationstart"),$u=El("transitionend"),Wu=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,n){Wu.set(e,n),zn(n,[e])}for(var ti=0;ti<$a.length;ti++){var ri=$a[ti],t0=ri.toLowerCase(),r0=ri[0].toUpperCase()+ri.slice(1);An(t0,"on"+r0)}An(Hu,"onAnimationEnd");An(Vu,"onAnimationIteration");An(Ku,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An($u,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function Wa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,nf(r,n,void 0,e),e.currentTarget=null}function Qu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Wa(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Wa(l,a,c),i=s}}}if(br)throw e=_i,br=!1,_i=null,e}function G(e,n){var t=n[Ki];t===void 0&&(t=n[Ki]=new Set);var r=e+"__bubble";t.has(r)||(Xu(n,e,2,!1),t.add(r))}function li(e,n,t){var r=0;n&&(r|=4),Xu(t,e,r,n)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function qt(e){if(!e[Nr]){e[Nr]=!0,nu.forEach(function(t){t!=="selectionchange"&&(l0.has(t)||li(t,!1,e),li(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Nr]||(n[Nr]=!0,li("selectionchange",!1,n))}}function Xu(e,n,t,r){switch(ju(n)){case 1:var l=vf;break;case 4:l=If;break;default:l=Lo}t=l.bind(null,n,t,e),l=void 0,!Oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ii(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=En(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}yu(function(){var c=i,h=Eo(t),m=[];e:{var g=Wu.get(e);if(g!==void 0){var A=_o,x=e;switch(e){case"keypress":if(Hr(t)===0)break e;case"keydown":case"keyup":A=_f;break;case"focusin":x="focus",A=bl;break;case"focusout":x="blur",A=bl;break;case"beforeblur":case"afterblur":A=bl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=wf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Gf;break;case Hu:case Vu:case Ku:A=Cf;break;case $u:A=zf;break;case"scroll":A=Af;break;case"wheel":A=Ff;break;case"copy":case"cut":case"paste":A=Tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Ra}var I=(n&4)!==0,S=!I&&e==="scroll",d=I?g!==null?g+"Capture":null:g;I=[];for(var f=c,p;f!==null;){p=f;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Qt(f,d),v!=null&&I.push(er(f,v,p)))),S)break;f=f.return}0<I.length&&(g=new A(g,x,null,t,h),m.push({event:g,listeners:I}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",g&&t!==ji&&(x=t.relatedTarget||t.fromElement)&&(En(x)||x[Ye]))break e;if((A||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,A?(x=t.relatedTarget||t.toElement,A=c,x=x?En(x):null,x!==null&&(S=Un(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=c),A!==x)){if(I=_a,v="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(I=Ra,v="onPointerLeave",d="onPointerEnter",f="pointer"),S=A==null?g:Xn(A),p=x==null?g:Xn(x),g=new I(v,f+"leave",A,t,h),g.target=S,g.relatedTarget=p,v=null,En(h)===c&&(I=new I(d,f+"enter",x,t,h),I.target=p,I.relatedTarget=S,v=I),S=v,A&&x)n:{for(I=A,d=x,f=0,p=I;p;p=Fn(p))f++;for(p=0,v=d;v;v=Fn(v))p++;for(;0<f-p;)I=Fn(I),f--;for(;0<p-f;)d=Fn(d),p--;for(;f--;){if(I===d||d!==null&&I===d.alternate)break n;I=Fn(I),d=Fn(d)}I=null}else I=null;A!==null&&Qa(m,g,A,I,!1),x!==null&&S!==null&&Qa(m,S,x,I,!0)}}e:{if(g=c?Xn(c):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var k=Xf;else if(za(g))if(Gu)k=bf;else{k=Jf;var T=Yf}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Zf);if(k&&(k=k(e,c))){Ru(m,k,t,h);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Pi(g,"number",g.value)}switch(T=c?Xn(c):window,e){case"focusin":(za(T)||T.contentEditable==="true")&&(Wn=T,Bi=c,Ut=null);break;case"focusout":Ut=Bi=Wn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Ka(m,t,h);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":Ka(m,t,h)}var E;if(Ro)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $n?_u(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Ou&&t.locale!=="ko"&&($n||N!=="onCompositionStart"?N==="onCompositionEnd"&&$n&&(E=Lu()):(on=h,Oo="value"in on?on.value:on.textContent,$n=!0)),T=rl(c,N),0<T.length&&(N=new Da(N,e,null,t,h),m.push({event:N,listeners:T}),E?N.data=E:(E=Du(t),E!==null&&(N.data=E)))),(E=Vf?Kf(e,t):$f(e,t))&&(c=rl(c,"onBeforeInput"),0<c.length&&(h=new Da("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=E))}Qu(m,n)})}function er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function rl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Qt(e,t),i!=null&&r.unshift(er(e,i,l)),i=Qt(e,n),i!=null&&r.push(er(e,i,l))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Qt(t,i),s!=null&&o.unshift(er(t,s,a))):l||(s=Qt(t,i),s!=null&&o.push(er(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var i0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Xa(e){return(typeof e=="string"?e:""+e).replace(i0,`
`).replace(o0,"")}function Mr(e,n,t){if(n=Xa(n),Xa(e)!==n&&t)throw Error(w(425))}function ll(){}var Ui=null,Fi=null;function Hi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(u0)}:Vi;function u0(e){setTimeout(function(){throw e})}function oi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Jt(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),Ue="__reactFiber$"+yt,nr="__reactProps$"+yt,Ye="__reactContainer$"+yt,Ki="__reactEvents$"+yt,c0="__reactListeners$"+yt,d0="__reactHandles$"+yt;function En(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ye]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ja(e);e!==null;){if(t=e[Ue])return t;e=Ja(e)}return n}e=t,t=e.parentNode}return null}function mr(e){return e=e[Ue]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Nl(e){return e[nr]||null}var $i=[],Yn=-1;function xn(e){return{current:e}}function B(e){0>Yn||(e.current=$i[Yn],$i[Yn]=null,Yn--)}function R(e,n){Yn++,$i[Yn]=e.current,e.current=n}var In={},oe=xn(In),me=xn(!1),On=In;function ut(e,n){var t=e.type.contextTypes;if(!t)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function il(){B(me),B(oe)}function Za(e,n,t){if(oe.current!==In)throw Error(w(168));R(oe,n),R(me,t)}function Yu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(w(108,Xd(e)||"Unknown",l));return H({},t,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,On=oe.current,R(oe,e),R(me,me.current),!0}function ba(e,n,t){var r=e.stateNode;if(!r)throw Error(w(169));t?(e=Yu(e,n,On),r.__reactInternalMemoizedMergedChildContext=e,B(me),B(oe),R(oe,e)):B(me),R(me,t)}var Ke=null,Ml=!1,ai=!1;function Ju(e){Ke===null?Ke=[e]:Ke.push(e)}function f0(e){Ml=!0,Ju(e)}function wn(){if(!ai&&Ke!==null){ai=!0;var e=0,n=D;try{var t=Ke;for(D=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ke=null,Ml=!1}catch(l){throw Ke!==null&&(Ke=Ke.slice(e+1)),xu(No,wn),l}finally{D=n,ai=!1}}return null}var Jn=[],Zn=0,al=null,sl=0,ke=[],Ce=0,_n=null,$e=1,We="";function Pn(e,n){Jn[Zn++]=sl,Jn[Zn++]=al,al=e,sl=n}function Zu(e,n,t){ke[Ce++]=$e,ke[Ce++]=We,ke[Ce++]=_n,_n=e;var r=$e;e=We;var l=32-De(r)-1;r&=~(1<<l),t+=1;var i=32-De(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,$e=1<<32-De(n)+l|t<<l|r,We=i+e}else $e=1<<i|t<<l|r,We=e}function Bo(e){e.return!==null&&(Pn(e,1),Zu(e,1,0))}function zo(e){for(;e===al;)al=Jn[--Zn],Jn[Zn]=null,sl=Jn[--Zn],Jn[Zn]=null;for(;e===_n;)_n=ke[--Ce],ke[Ce]=null,We=ke[--Ce],ke[Ce]=null,$e=ke[--Ce],ke[Ce]=null}var Ie=null,ve=null,z=!1,_e=null;function bu(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,ve=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_n!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,ve=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(z){var n=ve;if(n){var t=n;if(!qa(e,n)){if(Wi(e))throw Error(w(418));n=fn(t.nextSibling);var r=Ie;n&&qa(e,n)?bu(r,t):(e.flags=e.flags&-4097|2,z=!1,Ie=e)}}else{if(Wi(e))throw Error(w(418));e.flags=e.flags&-4097|2,z=!1,Ie=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function jr(e){if(e!==Ie)return!1;if(!z)return es(e),z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Hi(e.type,e.memoizedProps)),n&&(n=ve)){if(Wi(e))throw qu(),Error(w(418));for(;n;)bu(e,n),n=fn(n.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=Ie?fn(e.stateNode.nextSibling):null;return!0}function qu(){for(var e=ve;e;)e=fn(e.nextSibling)}function ct(){ve=Ie=null,z=!1}function Uo(e){_e===null?_e=[e]:_e.push(e)}var p0=be.ReactCurrentBatchConfig;function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Lr(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ns(e){var n=e._init;return n(e._payload)}function ec(e){function n(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function t(d,f){if(!e)return null;for(;f!==null;)n(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function l(d,f){return d=gn(d,f),d.index=0,d.sibling=null,d}function i(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,v){return f===null||f.tag!==6?(f=mi(p,d.mode,v),f.return=d,f):(f=l(f,p),f.return=d,f)}function s(d,f,p,v){var k=p.type;return k===Kn?h(d,f,p.props.children,v,p.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&ns(k)===f.type)?(v=l(f,p.props),v.ref=Et(d,f,p),v.return=d,v):(v=Yr(p.type,p.key,p.props,null,d.mode,v),v.ref=Et(d,f,p),v.return=d,v)}function c(d,f,p,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=hi(p,d.mode,v),f.return=d,f):(f=l(f,p.children||[]),f.return=d,f)}function h(d,f,p,v,k){return f===null||f.tag!==7?(f=Ln(p,d.mode,v,k),f.return=d,f):(f=l(f,p),f.return=d,f)}function m(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=mi(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:return p=Yr(f.type,f.key,f.props,null,d.mode,p),p.ref=Et(d,null,f),p.return=d,p;case Vn:return f=hi(f,d.mode,p),f.return=d,f;case nn:var v=f._init;return m(d,v(f._payload),p)}if(Ot(f)||St(f))return f=Ln(f,d.mode,p,null),f.return=d,f;Lr(d,f)}return null}function g(d,f,p,v){var k=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(d,f,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return p.key===k?s(d,f,p,v):null;case Vn:return p.key===k?c(d,f,p,v):null;case nn:return k=p._init,g(d,f,k(p._payload),v)}if(Ot(p)||St(p))return k!==null?null:h(d,f,p,v,null);Lr(d,p)}return null}function A(d,f,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(f,d,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return d=d.get(v.key===null?p:v.key)||null,s(f,d,v,k);case Vn:return d=d.get(v.key===null?p:v.key)||null,c(f,d,v,k);case nn:var T=v._init;return A(d,f,p,T(v._payload),k)}if(Ot(v)||St(v))return d=d.get(p)||null,h(f,d,v,k,null);Lr(f,v)}return null}function x(d,f,p,v){for(var k=null,T=null,E=f,N=f=0,K=null;E!==null&&N<p.length;N++){E.index>N?(K=E,E=null):K=E.sibling;var O=g(d,E,p[N],v);if(O===null){E===null&&(E=K);break}e&&E&&O.alternate===null&&n(d,E),f=i(O,f,N),T===null?k=O:T.sibling=O,T=O,E=K}if(N===p.length)return t(d,E),z&&Pn(d,N),k;if(E===null){for(;N<p.length;N++)E=m(d,p[N],v),E!==null&&(f=i(E,f,N),T===null?k=E:T.sibling=E,T=E);return z&&Pn(d,N),k}for(E=r(d,E);N<p.length;N++)K=A(E,d,N,p[N],v),K!==null&&(e&&K.alternate!==null&&E.delete(K.key===null?N:K.key),f=i(K,f,N),T===null?k=K:T.sibling=K,T=K);return e&&E.forEach(function(Me){return n(d,Me)}),z&&Pn(d,N),k}function I(d,f,p,v){var k=St(p);if(typeof k!="function")throw Error(w(150));if(p=k.call(p),p==null)throw Error(w(151));for(var T=k=null,E=f,N=f=0,K=null,O=p.next();E!==null&&!O.done;N++,O=p.next()){E.index>N?(K=E,E=null):K=E.sibling;var Me=g(d,E,O.value,v);if(Me===null){E===null&&(E=K);break}e&&E&&Me.alternate===null&&n(d,E),f=i(Me,f,N),T===null?k=Me:T.sibling=Me,T=Me,E=K}if(O.done)return t(d,E),z&&Pn(d,N),k;if(E===null){for(;!O.done;N++,O=p.next())O=m(d,O.value,v),O!==null&&(f=i(O,f,N),T===null?k=O:T.sibling=O,T=O);return z&&Pn(d,N),k}for(E=r(d,E);!O.done;N++,O=p.next())O=A(E,d,N,O.value,v),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?N:O.key),f=i(O,f,N),T===null?k=O:T.sibling=O,T=O);return e&&E.forEach(function(xt){return n(d,xt)}),z&&Pn(d,N),k}function S(d,f,p,v){if(typeof p=="object"&&p!==null&&p.type===Kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:e:{for(var k=p.key,T=f;T!==null;){if(T.key===k){if(k=p.type,k===Kn){if(T.tag===7){t(d,T.sibling),f=l(T,p.props.children),f.return=d,d=f;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&ns(k)===T.type){t(d,T.sibling),f=l(T,p.props),f.ref=Et(d,T,p),f.return=d,d=f;break e}t(d,T);break}else n(d,T);T=T.sibling}p.type===Kn?(f=Ln(p.props.children,d.mode,v,p.key),f.return=d,d=f):(v=Yr(p.type,p.key,p.props,null,d.mode,v),v.ref=Et(d,f,p),v.return=d,d=v)}return o(d);case Vn:e:{for(T=p.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){t(d,f.sibling),f=l(f,p.children||[]),f.return=d,d=f;break e}else{t(d,f);break}else n(d,f);f=f.sibling}f=hi(p,d.mode,v),f.return=d,d=f}return o(d);case nn:return T=p._init,S(d,f,T(p._payload),v)}if(Ot(p))return x(d,f,p,v);if(St(p))return I(d,f,p,v);Lr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(t(d,f.sibling),f=l(f,p),f.return=d,d=f):(t(d,f),f=mi(p,d.mode,v),f.return=d,d=f),o(d)):t(d,f)}return S}var dt=ec(!0),nc=ec(!1),ul=xn(null),cl=null,bn=null,Fo=null;function Ho(){Fo=bn=cl=null}function Vo(e){var n=ul.current;B(ul),e._currentValue=n}function Xi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ot(e,n){cl=e,Fo=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(Fo!==e)if(e={context:e,memoizedValue:n,next:null},bn===null){if(cl===null)throw Error(w(308));bn=e,cl.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return n}var Nn=null;function Ko(e){Nn===null?Nn=[e]:Nn.push(e)}function tc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ko(n)):(t.next=l.next,l.next=t),n.interleaved=t,Je(e,r)}function Je(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tn=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Je(e,t)}return l=r.interleaved,l===null?(n.next=n,Ko(r)):(n.next=l.next,l.next=n),r.interleaved=n,Je(e,t)}function Vr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mo(e,t)}}function ts(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function dl(e,n,t,r){var l=e.updateQueue;tn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,h=c=s=null,a=i;do{var g=a.lane,A=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:A,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,I=a;switch(g=n,A=t,I.tag){case 1:if(x=I.payload,typeof x=="function"){m=x.call(A,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=I.payload,g=typeof x=="function"?x.call(A,m,g):x,g==null)break e;m=H({},m,g);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else A={eventTime:A,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=A,s=m):h=h.next=A,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Rn|=o,e.lanes=o,e.memoizedState=m}}function rs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var hr={},He=xn(hr),tr=xn(hr),rr=xn(hr);function Mn(e){if(e===hr)throw Error(w(174));return e}function Wo(e,n){switch(R(rr,n),R(tr,e),R(He,hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ei(n,e)}B(He),R(He,n)}function ft(){B(He),B(tr),B(rr)}function lc(e){Mn(rr.current);var n=Mn(He.current),t=Ei(n,e.type);n!==t&&(R(tr,e),R(He,t))}function Qo(e){tr.current===e&&(B(He),B(tr))}var U=xn(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var si=[];function Xo(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var Kr=be.ReactCurrentDispatcher,ui=be.ReactCurrentBatchConfig,Dn=0,F=null,Y=null,b=null,pl=!1,Ft=!1,lr=0,m0=0;function re(){throw Error(w(321))}function Yo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function Jo(e,n,t,r,l,i){if(Dn=i,F=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Kr.current=e===null||e.memoizedState===null?v0:I0,e=t(r,l),Ft){i=0;do{if(Ft=!1,lr=0,25<=i)throw Error(w(301));i+=1,b=Y=null,n.updateQueue=null,Kr.current=A0,e=t(r,l)}while(Ft)}if(Kr.current=ml,n=Y!==null&&Y.next!==null,Dn=0,b=Y=F=null,pl=!1,n)throw Error(w(300));return e}function Zo(){var e=lr!==0;return lr=0,e}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?F.memoizedState=b=e:b=b.next=e,b}function Ne(){if(Y===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=b===null?F.memoizedState:b.next;if(n!==null)b=n,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},b===null?F.memoizedState=b=e:b=b.next=e}return b}function ir(e,n){return typeof n=="function"?n(e):n}function ci(e){var n=Ne(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var h=c.lane;if((Dn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,o=r):s=s.next=m,F.lanes|=h,Rn|=h}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,Ge(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,F.lanes|=i,Rn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function di(e){var n=Ne(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ge(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function ic(){}function oc(e,n){var t=F,r=Ne(),l=n(),i=!Ge(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,bo(uc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,or(9,sc.bind(null,t,r,l,n),void 0,null),q===null)throw Error(w(349));Dn&30||ac(t,n,l)}return l}function ac(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function sc(e,n,t,r){n.value=t,n.getSnapshot=r,cc(n)&&dc(e)}function uc(e,n,t){return t(function(){cc(n)&&dc(e)})}function cc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function dc(e){var n=Je(e,1);n!==null&&Re(n,e,1,-1)}function ls(e){var n=ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=y0.bind(null,F,e),[n.memoizedState,e]}function or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function fc(){return Ne().memoizedState}function $r(e,n,t,r){var l=ze();F.flags|=e,l.memoizedState=or(1|n,t,void 0,r===void 0?null:r)}function jl(e,n,t,r){var l=Ne();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&Yo(r,o.deps)){l.memoizedState=or(n,t,i,r);return}}F.flags|=e,l.memoizedState=or(1|n,t,i,r)}function is(e,n){return $r(8390656,8,e,n)}function bo(e,n){return jl(2048,8,e,n)}function pc(e,n){return jl(4,2,e,n)}function mc(e,n){return jl(4,4,e,n)}function hc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gc(e,n,t){return t=t!=null?t.concat([e]):null,jl(4,4,hc.bind(null,n,e),t)}function qo(){}function yc(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function vc(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ic(e,n,t){return Dn&21?(Ge(t,n)||(t=ku(),F.lanes|=t,Rn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function h0(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),n()}finally{D=t,ui.transition=r}}function Ac(){return Ne().memoizedState}function g0(e,n,t){var r=hn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},xc(e))wc(n,t);else if(t=tc(e,n,t,r),t!==null){var l=se();Re(t,e,r,l),Sc(t,n,r)}}function y0(e,n,t){var r=hn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(xc(e))wc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,Ge(a,o)){var s=n.interleaved;s===null?(l.next=l,Ko(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=tc(e,n,l,r),t!==null&&(l=se(),Re(t,e,r,l),Sc(t,n,r))}}function xc(e){var n=e.alternate;return e===F||n!==null&&n===F}function wc(e,n){Ft=pl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Sc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mo(e,t)}}var ml={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},v0={readContext:Ee,useCallback:function(e,n){return ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:is,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$r(4194308,4,hc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $r(4194308,4,e,n)},useInsertionEffect:function(e,n){return $r(4,2,e,n)},useMemo:function(e,n){var t=ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=g0.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var n=ze();return e={current:e},n.memoizedState=e},useState:ls,useDebugValue:qo,useDeferredValue:function(e){return ze().memoizedState=e},useTransition:function(){var e=ls(!1),n=e[0];return e=h0.bind(null,e[1]),ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=F,l=ze();if(z){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),q===null)throw Error(w(349));Dn&30||ac(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,is(uc.bind(null,r,i,e),[e]),r.flags|=2048,or(9,sc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=ze(),n=q.identifierPrefix;if(z){var t=We,r=$e;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=m0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},I0={readContext:Ee,useCallback:yc,useContext:Ee,useEffect:bo,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:vc,useReducer:ci,useRef:fc,useState:function(){return ci(ir)},useDebugValue:qo,useDeferredValue:function(e){var n=Ne();return Ic(n,Y.memoizedState,e)},useTransition:function(){var e=ci(ir)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:ic,useSyncExternalStore:oc,useId:Ac,unstable_isNewReconciler:!1},A0={readContext:Ee,useCallback:yc,useContext:Ee,useEffect:bo,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:vc,useReducer:di,useRef:fc,useState:function(){return di(ir)},useDebugValue:qo,useDeferredValue:function(e){var n=Ne();return Y===null?n.memoizedState=e:Ic(n,Y.memoizedState,e)},useTransition:function(){var e=di(ir)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:ic,useSyncExternalStore:oc,useId:Ac,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ll={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=hn(e),i=Qe(r,l);i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,l),n!==null&&(Re(n,e,l,r),Vr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=hn(e),i=Qe(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,l),n!==null&&(Re(n,e,l,r),Vr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=hn(e),l=Qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=pn(e,l,r),n!==null&&(Re(n,e,r,t),Vr(n,e,r))}};function os(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!bt(t,r)||!bt(l,i):!0}function kc(e,n,t){var r=!1,l=In,i=n.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=he(n)?On:oe.current,r=n.contextTypes,i=(r=r!=null)?ut(e,l):In),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ll,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function as(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ll.enqueueReplaceState(n,n.state,null)}function Ji(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},$o(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=he(n)?On:oe.current,l.context=ut(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Yi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Ll.enqueueReplaceState(l,l.state,null),dl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=Qd(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function fi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var x0=typeof WeakMap=="function"?WeakMap:Map;function Cc(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gl||(gl=!0,ao=r),Zi(e,n)},t}function Pc(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Zi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Zi(e,n),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function ss(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new x0;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=D0.bind(null,e,n,t),n.then(e,e))}function us(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,pn(t,n,1))),t.lanes|=1),e)}var w0=be.ReactCurrentOwner,pe=!1;function ae(e,n,t,r){n.child=e===null?nc(n,null,t,r):dt(n,e.child,t,r)}function ds(e,n,t,r,l){t=t.render;var i=n.ref;return ot(n,l),r=Jo(e,n,t,r,i,l),t=Zo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(z&&t&&Bo(n),n.flags|=1,ae(e,n,r,l),n.child)}function fs(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Tc(e,n,i,r,l)):(e=Yr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:bt,t(o,r)&&e.ref===n.ref)return Ze(e,n,l)}return n.flags|=1,e=gn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Tc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(bt(i,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,l)}return bi(e,n,t,r,l)}function Ec(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(et,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(et,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,R(et,ye),ye|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,R(et,ye),ye|=r;return ae(e,n,l,t),n.child}function Nc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bi(e,n,t,r,l){var i=he(t)?On:oe.current;return i=ut(n,i),ot(n,l),t=Jo(e,n,t,r,i,l),r=Zo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(z&&r&&Bo(n),n.flags|=1,ae(e,n,t,l),n.child)}function ps(e,n,t,r,l){if(he(t)){var i=!0;ol(n)}else i=!1;if(ot(n,l),n.stateNode===null)Wr(e,n),kc(n,t,r),Ji(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=he(t)?On:oe.current,c=ut(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&as(n,o,r,c),tn=!1;var g=n.memoizedState;o.state=g,dl(n,r,o,l),s=n.memoizedState,a!==r||g!==s||me.current||tn?(typeof h=="function"&&(Yi(n,t,h,r),s=n.memoizedState),(a=tn||os(n,t,a,r,g,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,rc(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Le(n.type,a),o.props=c,m=n.pendingProps,g=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=he(t)?On:oe.current,s=ut(n,s));var A=t.getDerivedStateFromProps;(h=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==s)&&as(n,o,r,s),tn=!1,g=n.memoizedState,o.state=g,dl(n,r,o,l);var x=n.memoizedState;a!==m||g!==x||me.current||tn?(typeof A=="function"&&(Yi(n,t,A,r),x=n.memoizedState),(c=tn||os(n,t,c,r,g,x,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),o.props=r,o.state=x,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return qi(e,n,t,r,i,l)}function qi(e,n,t,r,l,i){Nc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&ba(n,t,!1),Ze(e,n,i);r=n.stateNode,w0.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=dt(n,e.child,null,i),n.child=dt(n,null,a,i)):ae(e,n,a,i),n.memoizedState=r.state,l&&ba(n,t,!0),n.child}function Mc(e){var n=e.stateNode;n.pendingContext?Za(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Za(e,n.context,!1),Wo(e,n.containerInfo)}function ms(e,n,t,r,l){return ct(),Uo(l),n.flags|=256,ae(e,n,t,r),n.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function no(e){return{baseLanes:e,cachePool:null,transitions:null}}function jc(e,n,t){var r=n.pendingProps,l=U.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(U,l&1),e===null)return Qi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Dl(o,r,0,null),e=Ln(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=no(t),n.memoizedState=eo,e):ea(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return S0(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=gn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=gn(a,i):(i=Ln(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?no(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=eo,r}return i=e.child,e=i.sibling,r=gn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ea(e,n){return n=Dl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Or(e,n,t,r){return r!==null&&Uo(r),dt(n,e.child,null,t),e=ea(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function S0(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=fi(Error(w(422))),Or(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Dl({mode:"visible",children:r.children},l,0,null),i=Ln(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&dt(n,e.child,null,o),n.child.memoizedState=no(o),n.memoizedState=eo,i);if(!(n.mode&1))return Or(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=fi(i,r,void 0),Or(e,n,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Je(e,l),Re(r,e,l,-1))}return oa(),r=fi(Error(w(421))),Or(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=R0.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,ve=fn(l.nextSibling),Ie=n,z=!0,_e=null,e!==null&&(ke[Ce++]=$e,ke[Ce++]=We,ke[Ce++]=_n,$e=e.id,We=e.overflow,_n=n),n=ea(n,r.children),n.flags|=4096,n)}function hs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Xi(e.return,n,t)}function pi(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Lc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hs(e,t,n);else if(e.tag===19)hs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(U,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&fl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),pi(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&fl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}pi(n,!0,t,null,i);break;case"together":pi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=gn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function k0(e,n,t){switch(n.tag){case 3:Mc(n),ct();break;case 5:lc(n);break;case 1:he(n.type)&&ol(n);break;case 4:Wo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;R(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(R(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?jc(e,n,t):(R(U,U.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);R(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Lc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Ec(e,n,t)}return Ze(e,n,t)}var Oc,to,_c,Dc;Oc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};to=function(){};_c=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Mn(He.current);var i=null;switch(t){case"input":l=ki(e,l),r=ki(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=Ti(e,l),r=Ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}Ni(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($t.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($t.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&G("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Dc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Nt(e,n){if(!z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function C0(e,n,t){var r=n.pendingProps;switch(zo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return he(n.type)&&il(),le(n),null;case 3:return r=n.stateNode,ft(),B(me),B(oe),Xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_e!==null&&(co(_e),_e=null))),to(e,n),le(n),null;case 5:Qo(n);var l=Mn(rr.current);if(t=n.type,e!==null&&n.stateNode!=null)_c(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(w(166));return le(n),null}if(e=Mn(He.current),jr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ue]=n,r[nr]=i,e=(n.mode&1)!==0,t){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(l=0;l<Dt.length;l++)G(Dt[l],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":ka(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Pa(r,i),G("invalid",r)}Ni(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),l=["children",""+a]):$t.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&G("scroll",r)}switch(t){case"input":wr(r),Ca(r,i,!0);break;case"textarea":wr(r),Ta(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ll)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ue]=n,e[nr]=r,Oc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Mi(t,r),t){case"dialog":G("cancel",e),G("close",e),l=r;break;case"iframe":case"object":case"embed":G("load",e),l=r;break;case"video":case"audio":for(l=0;l<Dt.length;l++)G(Dt[l],e);l=r;break;case"source":G("error",e),l=r;break;case"img":case"image":case"link":G("error",e),G("load",e),l=r;break;case"details":G("toggle",e),l=r;break;case"input":ka(e,r),l=ki(e,r),G("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),G("invalid",e);break;case"textarea":Pa(e,r),l=Ti(e,r),G("invalid",e);break;default:l=r}Ni(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?fu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cu(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Wt(e,s):typeof s=="number"&&Wt(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($t.hasOwnProperty(i)?s!=null&&i==="onScroll"&&G("scroll",e):s!=null&&ko(e,i,s,o))}switch(t){case"input":wr(e),Ca(e,r,!1);break;case"textarea":wr(e),Ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tt(e,!!r.multiple,i,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ll)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Dc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(w(166));if(t=Mn(rr.current),Mn(He.current),jr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ue]=n,(i=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ue]=n,n.stateNode=r}return le(n),null;case 13:if(B(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ve!==null&&n.mode&1&&!(n.flags&128))qu(),ct(),n.flags|=98560,i=!1;else if(i=jr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ue]=n}else ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),i=!1}else _e!==null&&(co(_e),_e=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?J===0&&(J=3):oa())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ft(),to(e,n),e===null&&qt(n.stateNode.containerInfo),le(n),null;case 10:return Vo(n.type._context),le(n),null;case 17:return he(n.type)&&il(),le(n),null;case 19:if(B(U),i=n.memoizedState,i===null)return le(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Nt(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=fl(e),o!==null){for(n.flags|=128,Nt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(U,U.current&1|2),n.child}e=e.sibling}i.tail!==null&&W()>mt&&(n.flags|=128,r=!0,Nt(i,!1),n.lanes=4194304)}else{if(!r)if(e=fl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Nt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!z)return le(n),null}else 2*W()-i.renderingStartTime>mt&&t!==1073741824&&(n.flags|=128,r=!0,Nt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=W(),n.sibling=null,t=U.current,R(U,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return ia(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function P0(e,n){switch(zo(n),n.tag){case 1:return he(n.type)&&il(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(),B(me),B(oe),Xo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Qo(n),null;case 13:if(B(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(U),null;case 4:return ft(),null;case 10:return Vo(n.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var _r=!1,ie=!1,T0=typeof WeakSet=="function"?WeakSet:Set,C=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function ro(e,n,t){try{t()}catch(r){V(e,n,r)}}var gs=!1;function E0(e,n){if(Ui=nl,e=Uu(),Go(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,c=0,h=0,m=e,g=null;n:for(;;){for(var A;m!==t||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===e)break n;if(g===t&&++c===l&&(a=o),g===i&&++h===r&&(s=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fi={focusedElem:e,selectionRange:t},nl=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var I=x.memoizedProps,S=x.memoizedState,d=n.stateNode,f=d.getSnapshotBeforeUpdate(n.elementType===n.type?I:Le(n.type,I),S);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){V(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return x=gs,gs=!1,x}function Ht(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ro(n,t,i)}l=l.next}while(l!==r)}}function Ol(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function lo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Rc(e){var n=e.alternate;n!==null&&(e.alternate=null,Rc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[nr],delete n[Ki],delete n[c0],delete n[d0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gc(e){return e.tag===5||e.tag===3||e.tag===4}function ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(io(e,n,t),e=e.sibling;e!==null;)io(e,n,t),e=e.sibling}function oo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,n,t),e=e.sibling;e!==null;)oo(e,n,t),e=e.sibling}var ee=null,Oe=!1;function en(e,n,t){for(t=t.child;t!==null;)Bc(e,n,t),t=t.sibling}function Bc(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Cl,t)}catch{}switch(t.tag){case 5:ie||qn(t,n);case 6:var r=ee,l=Oe;ee=null,en(e,n,t),ee=r,Oe=l,ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?oi(e.parentNode,t):e.nodeType===1&&oi(e,t),Jt(e)):oi(ee,t.stateNode));break;case 4:r=ee,l=Oe,ee=t.stateNode.containerInfo,Oe=!0,en(e,n,t),ee=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ro(t,n,o),l=l.next}while(l!==r)}en(e,n,t);break;case 1:if(!ie&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}en(e,n,t);break;case 21:en(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,en(e,n,t),ie=r):en(e,n,t);break;default:en(e,n,t)}}function vs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new T0),n.forEach(function(r){var l=G0.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Oe=!1;break e;case 3:ee=a.stateNode.containerInfo,Oe=!0;break e;case 4:ee=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(ee===null)throw Error(w(160));Bc(i,o,l),ee=null,Oe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zc(n,e),n=n.sibling}function zc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),Be(e),r&4){try{Ht(3,e,e.return),Ol(3,e)}catch(I){V(e,e.return,I)}try{Ht(5,e,e.return)}catch(I){V(e,e.return,I)}}break;case 1:je(n,e),Be(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(je(n,e),Be(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var l=e.stateNode;try{Wt(l,"")}catch(I){V(e,e.return,I)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&au(l,i),Mi(a,o);var c=Mi(a,i);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?fu(l,m):h==="dangerouslySetInnerHTML"?cu(l,m):h==="children"?Wt(l,m):ko(l,h,m,c)}switch(a){case"input":Ci(l,i);break;case"textarea":su(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?tt(l,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?tt(l,!!i.multiple,i.defaultValue,!0):tt(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(I){V(e,e.return,I)}}break;case 6:if(je(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(I){V(e,e.return,I)}}break;case 3:if(je(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(I){V(e,e.return,I)}break;case 4:je(n,e),Be(e);break;case 13:je(n,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ra=W())),r&4&&vs(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(c=ie)||h,je(n,e),ie=c):je(n,e),Be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(g=C,A=g.child,g.tag){case 0:case 11:case 14:case 15:Ht(4,g,g.return);break;case 1:qn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(I){V(r,t,I)}}break;case 5:qn(g,g.return);break;case 22:if(g.memoizedState!==null){As(m);continue}}A!==null?(A.return=g,C=A):As(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=du("display",o))}catch(I){V(e,e.return,I)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(I){V(e,e.return,I)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:je(n,e),Be(e),r&4&&vs(e);break;case 21:break;default:je(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Gc(t)){var r=t;break e}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wt(l,""),r.flags&=-33);var i=ys(e);oo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ys(e);io(e,a,o);break;default:throw Error(w(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function N0(e,n,t){C=e,Uc(e)}function Uc(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||_r;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ie;a=_r;var c=ie;if(_r=o,(ie=s)&&!c)for(C=l;C!==null;)o=C,s=o.child,o.tag===22&&o.memoizedState!==null?xs(l):s!==null?(s.return=o,C=s):xs(l);for(;i!==null;)C=i,Uc(i),i=i.sibling;C=l,_r=a,ie=c}Is(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):Is(e)}}function Is(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||Ol(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&rs(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}rs(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Jt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ie||n.flags&512&&lo(n)}catch(g){V(n,n.return,g)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function As(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function xs(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ol(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){V(n,l,s)}}var i=n.return;try{lo(n)}catch(s){V(n,i,s)}break;case 5:var o=n.return;try{lo(n)}catch(s){V(n,o,s)}}}catch(s){V(n,n.return,s)}if(n===e){C=null;break}var a=n.sibling;if(a!==null){a.return=n.return,C=a;break}C=n.return}}var M0=Math.ceil,hl=be.ReactCurrentDispatcher,na=be.ReactCurrentOwner,Te=be.ReactCurrentBatchConfig,_=0,q=null,X=null,ne=0,ye=0,et=xn(0),J=0,ar=null,Rn=0,_l=0,ta=0,Vt=null,de=null,ra=0,mt=1/0,Ve=null,gl=!1,ao=null,mn=null,Dr=!1,an=null,yl=0,Kt=0,so=null,Qr=-1,Xr=0;function se(){return _&6?W():Qr!==-1?Qr:Qr=W()}function hn(e){return e.mode&1?_&2&&ne!==0?ne&-ne:p0.transition!==null?(Xr===0&&(Xr=ku()),Xr):(e=D,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e):1}function Re(e,n,t,r){if(50<Kt)throw Kt=0,so=null,Error(w(185));fr(e,t,r),(!(_&2)||e!==q)&&(e===q&&(!(_&2)&&(_l|=t),J===4&&ln(e,ne)),ge(e,r),t===1&&_===0&&!(n.mode&1)&&(mt=W()+500,Ml&&wn()))}function ge(e,n){var t=e.callbackNode;pf(e,n);var r=el(e,e===q?ne:0);if(r===0)t!==null&&Ma(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ma(t),n===1)e.tag===0?f0(ws.bind(null,e)):Ju(ws.bind(null,e)),s0(function(){!(_&6)&&wn()}),t=null;else{switch(Cu(r)){case 1:t=No;break;case 4:t=wu;break;case 16:t=qr;break;case 536870912:t=Su;break;default:t=qr}t=Xc(t,Fc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fc(e,n){if(Qr=-1,Xr=0,_&6)throw Error(w(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var r=el(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=vl(e,r);else{n=r;var l=_;_|=2;var i=Vc();(q!==e||ne!==n)&&(Ve=null,mt=W()+500,jn(e,n));do try{O0();break}catch(a){Hc(e,a)}while(!0);Ho(),hl.current=i,_=l,X!==null?n=0:(q=null,ne=0,n=J)}if(n!==0){if(n===2&&(l=Di(e),l!==0&&(r=l,n=uo(e,l))),n===1)throw t=ar,jn(e,0),ln(e,r),ge(e,W()),t;if(n===6)ln(e,r);else{if(l=e.current.alternate,!(r&30)&&!j0(l)&&(n=vl(e,r),n===2&&(i=Di(e),i!==0&&(r=i,n=uo(e,i))),n===1))throw t=ar,jn(e,0),ln(e,r),ge(e,W()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(w(345));case 2:Tn(e,de,Ve);break;case 3:if(ln(e,r),(r&130023424)===r&&(n=ra+500-W(),10<n)){if(el(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Vi(Tn.bind(null,e,de,Ve),n);break}Tn(e,de,Ve);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){e.timeoutHandle=Vi(Tn.bind(null,e,de,Ve),r);break}Tn(e,de,Ve);break;case 5:Tn(e,de,Ve);break;default:throw Error(w(329))}}}return ge(e,W()),e.callbackNode===t?Fc.bind(null,e):null}function uo(e,n){var t=Vt;return e.current.memoizedState.isDehydrated&&(jn(e,n).flags|=256),e=vl(e,n),e!==2&&(n=de,de=t,n!==null&&co(n)),e}function co(e){de===null?de=e:de.push.apply(de,e)}function j0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Ge(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~ta,n&=~_l,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function ws(e){if(_&6)throw Error(w(327));at();var n=el(e,0);if(!(n&1))return ge(e,W()),null;var t=vl(e,n);if(e.tag!==0&&t===2){var r=Di(e);r!==0&&(n=r,t=uo(e,r))}if(t===1)throw t=ar,jn(e,0),ln(e,n),ge(e,W()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Tn(e,de,Ve),ge(e,W()),null}function la(e,n){var t=_;_|=1;try{return e(n)}finally{_=t,_===0&&(mt=W()+500,Ml&&wn())}}function Gn(e){an!==null&&an.tag===0&&!(_&6)&&at();var n=_;_|=1;var t=Te.transition,r=D;try{if(Te.transition=null,D=1,e)return e()}finally{D=r,Te.transition=t,_=n,!(_&6)&&wn()}}function ia(){ye=et.current,B(et)}function jn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,a0(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(zo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:ft(),B(me),B(oe),Xo();break;case 5:Qo(r);break;case 4:ft();break;case 13:B(U);break;case 19:B(U);break;case 10:Vo(r.type._context);break;case 22:case 23:ia()}t=t.return}if(q=e,X=e=gn(e.current,null),ne=ye=n,J=0,ar=null,ta=_l=Rn=0,de=Vt=null,Nn!==null){for(n=0;n<Nn.length;n++)if(t=Nn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Nn=null}return e}function Hc(e,n){do{var t=X;try{if(Ho(),Kr.current=ml,pl){for(var r=F.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}pl=!1}if(Dn=0,b=Y=F=null,Ft=!1,lr=0,na.current=null,t===null||t.return===null){J=1,ar=n,X=null;break}e:{var i=e,o=t.return,a=t,s=n;if(n=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var A=us(o);if(A!==null){A.flags&=-257,cs(A,o,a,i,n),A.mode&1&&ss(i,c,n),n=A,s=c;var x=n.updateQueue;if(x===null){var I=new Set;I.add(s),n.updateQueue=I}else x.add(s);break e}else{if(!(n&1)){ss(i,c,n),oa();break e}s=Error(w(426))}}else if(z&&a.mode&1){var S=us(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),cs(S,o,a,i,n),Uo(pt(s,a));break e}}i=s=pt(s,a),J!==4&&(J=2),Vt===null?Vt=[i]:Vt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Cc(i,s,n);ts(i,d);break e;case 1:a=s;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mn===null||!mn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=Pc(i,a,n);ts(i,v);break e}}i=i.return}while(i!==null)}$c(t)}catch(k){n=k,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function Vc(){var e=hl.current;return hl.current=ml,e===null?ml:e}function oa(){(J===0||J===3||J===2)&&(J=4),q===null||!(Rn&268435455)&&!(_l&268435455)||ln(q,ne)}function vl(e,n){var t=_;_|=2;var r=Vc();(q!==e||ne!==n)&&(Ve=null,jn(e,n));do try{L0();break}catch(l){Hc(e,l)}while(!0);if(Ho(),_=t,hl.current=r,X!==null)throw Error(w(261));return q=null,ne=0,J}function L0(){for(;X!==null;)Kc(X)}function O0(){for(;X!==null&&!rf();)Kc(X)}function Kc(e){var n=Qc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?$c(e):X=n,na.current=null}function $c(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=P0(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(t=C0(t,n,ye),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);J===0&&(J=5)}function Tn(e,n,t){var r=D,l=Te.transition;try{Te.transition=null,D=1,_0(e,n,t,r)}finally{Te.transition=l,D=r}return null}function _0(e,n,t,r){do at();while(an!==null);if(_&6)throw Error(w(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(mf(e,i),e===q&&(X=q=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Dr||(Dr=!0,Xc(qr,function(){return at(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var o=D;D=1;var a=_;_|=4,na.current=null,E0(e,t),zc(t,e),e0(Fi),nl=!!Ui,Fi=Ui=null,e.current=t,N0(t),lf(),_=a,D=o,Te.transition=i}else e.current=t;if(Dr&&(Dr=!1,an=e,yl=l),i=e.pendingLanes,i===0&&(mn=null),sf(t.stateNode),ge(e,W()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=ao,ao=null,e;return yl&1&&e.tag!==0&&at(),i=e.pendingLanes,i&1?e===so?Kt++:(Kt=0,so=e):Kt=0,wn(),null}function at(){if(an!==null){var e=Cu(yl),n=Te.transition,t=D;try{if(Te.transition=null,D=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,yl=0,_&6)throw Error(w(331));var l=_;for(_|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Ht(8,h,i)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var g=h.sibling,A=h.return;if(Rc(h),h===c){C=null;break}if(g!==null){g.return=A,C=g;break}C=A}}}var x=i.alternate;if(x!==null){var I=x.child;if(I!==null){x.child=null;do{var S=I.sibling;I.sibling=null,I=S}while(I!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ht(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var f=e.current;for(C=f;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=f;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(k){V(a,a.return,k)}if(a===o){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(_=l,wn(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Cl,e)}catch{}r=!0}return r}finally{D=t,Te.transition=n}}return!1}function Ss(e,n,t){n=pt(t,n),n=Cc(e,n,1),e=pn(e,n,1),n=se(),e!==null&&(fr(e,1,n),ge(e,n))}function V(e,n,t){if(e.tag===3)Ss(e,e,t);else for(;n!==null;){if(n.tag===3){Ss(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=pt(t,e),e=Pc(n,e,1),n=pn(n,e,1),e=se(),n!==null&&(fr(n,1,e),ge(n,e));break}}n=n.return}}function D0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ne&t)===t&&(J===4||J===3&&(ne&130023424)===ne&&500>W()-ra?jn(e,0):ta|=t),ge(e,n)}function Wc(e,n){n===0&&(e.mode&1?(n=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):n=1);var t=se();e=Je(e,n),e!==null&&(fr(e,n,t),ge(e,t))}function R0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Wc(e,t)}function G0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(n),Wc(e,t)}var Qc;Qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,k0(e,n,t);pe=!!(e.flags&131072)}else pe=!1,z&&n.flags&1048576&&Zu(n,sl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Wr(e,n),e=n.pendingProps;var l=ut(n,oe.current);ot(n,t),l=Jo(null,n,r,e,l,t);var i=Zo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(i=!0,ol(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$o(n),l.updater=Ll,n.stateNode=l,l._reactInternals=n,Ji(n,r,e,t),n=qi(null,n,r,!0,i,t)):(n.tag=0,z&&i&&Bo(n),ae(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Wr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=z0(r),e=Le(r,e),l){case 0:n=bi(null,n,r,e,t);break e;case 1:n=ps(null,n,r,e,t);break e;case 11:n=ds(null,n,r,e,t);break e;case 14:n=fs(null,n,r,Le(r.type,e),t);break e}throw Error(w(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),bi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),ps(e,n,r,l,t);case 3:e:{if(Mc(n),e===null)throw Error(w(387));r=n.pendingProps,i=n.memoizedState,l=i.element,rc(e,n),dl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=pt(Error(w(423)),n),n=ms(e,n,r,t,l);break e}else if(r!==l){l=pt(Error(w(424)),n),n=ms(e,n,r,t,l);break e}else for(ve=fn(n.stateNode.containerInfo.firstChild),Ie=n,z=!0,_e=null,t=nc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===l){n=Ze(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return lc(n),e===null&&Qi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Hi(r,l)?o=null:i!==null&&Hi(r,i)&&(n.flags|=32),Nc(e,n),ae(e,n,o,t),n.child;case 6:return e===null&&Qi(n),null;case 13:return jc(e,n,t);case 4:return Wo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),ds(e,n,r,l,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,R(ul,r._currentValue),r._currentValue=o,i!==null)if(Ge(i.value,o)){if(i.children===l.children&&!me.current){n=Ze(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Qe(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Xi(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Xi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ae(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,ot(n,t),l=Ee(l),r=r(l),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,l=Le(r,n.pendingProps),l=Le(r.type,l),fs(e,n,r,l,t);case 15:return Tc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Wr(e,n),n.tag=1,he(r)?(e=!0,ol(n)):e=!1,ot(n,t),kc(n,r,l),Ji(n,r,l,t),qi(null,n,r,!0,e,t);case 19:return Lc(e,n,t);case 22:return Ec(e,n,t)}throw Error(w(156,n.tag))};function Xc(e,n){return xu(e,n)}function B0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,r){return new B0(e,n,t,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z0(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Po)return 11;if(e===To)return 14}return 2}function gn(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")aa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return Ln(t.children,l,i,n);case Co:o=8,l|=8;break;case Ai:return e=Pe(12,t,n,l|2),e.elementType=Ai,e.lanes=i,e;case xi:return e=Pe(13,t,n,l),e.elementType=xi,e.lanes=i,e;case wi:return e=Pe(19,t,n,l),e.elementType=wi,e.lanes=i,e;case lu:return Dl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tu:o=10;break e;case ru:o=9;break e;case Po:o=11;break e;case To:o=14;break e;case nn:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Pe(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Ln(e,n,t,r){return e=Pe(7,e,r,n),e.lanes=t,e}function Dl(e,n,t,r){return e=Pe(22,e,r,n),e.elementType=lu,e.lanes=t,e.stateNode={isHidden:!1},e}function mi(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function hi(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function U0(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function sa(e,n,t,r,l,i,o,a,s){return e=new U0(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Pe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(i),e}function F0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Yc(e){if(!e)return In;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(he(t))return Yu(e,t,n)}return n}function Jc(e,n,t,r,l,i,o,a,s){return e=sa(t,r,!0,e,l,i,o,a,s),e.context=Yc(null),t=e.current,r=se(),l=hn(t),i=Qe(r,l),i.callback=n??null,pn(t,i,l),e.current.lanes=l,fr(e,l,r),ge(e,r),e}function Rl(e,n,t,r){var l=n.current,i=se(),o=hn(l);return t=Yc(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pn(l,n,o),e!==null&&(Re(e,l,o,i),Vr(e,l,o)),o}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ks(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ua(e,n){ks(e,n),(e=e.alternate)&&ks(e,n)}function H0(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}Gl.prototype.render=ca.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Rl(e,n,null,null)};Gl.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gn(function(){Rl(null,e,null,null)}),n[Ye]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Eu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&Mu(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cs(){}function V0(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Il(o);i.call(c)}}var o=Jc(n,r,e,0,null,!1,!1,"",Cs);return e._reactRootContainer=o,e[Ye]=o.current,qt(e.nodeType===8?e.parentNode:e),Gn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Il(s);a.call(c)}}var s=sa(e,0,!1,null,null,!1,!1,"",Cs);return e._reactRootContainer=s,e[Ye]=s.current,qt(e.nodeType===8?e.parentNode:e),Gn(function(){Rl(n,s,t,r)}),s}function zl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=Il(o);a.call(s)}}Rl(n,o,e,l)}else o=V0(t,n,e,l,r);return Il(o)}Pu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_t(n.pendingLanes);t!==0&&(Mo(n,t|1),ge(n,W()),!(_&6)&&(mt=W()+500,wn()))}break;case 13:Gn(function(){var r=Je(e,1);if(r!==null){var l=se();Re(r,e,1,l)}}),ua(e,1)}};jo=function(e){if(e.tag===13){var n=Je(e,134217728);if(n!==null){var t=se();Re(n,e,134217728,t)}ua(e,134217728)}};Tu=function(e){if(e.tag===13){var n=hn(e),t=Je(e,n);if(t!==null){var r=se();Re(t,e,n,r)}ua(e,n)}};Eu=function(){return D};Nu=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};Li=function(e,n,t){switch(n){case"input":if(Ci(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Nl(r);if(!l)throw Error(w(90));ou(r),Ci(r,l)}}}break;case"textarea":su(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};hu=la;gu=Gn;var K0={usingClientEntryPoint:!1,Events:[mr,Xn,Nl,pu,mu,la]},Mt={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$0={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Iu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{Cl=Rr.inject($0),Fe=Rr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(n))throw Error(w(200));return F0(e,n,null,t)};xe.createRoot=function(e,n){if(!da(e))throw Error(w(299));var t=!1,r="",l=Zc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=sa(e,1,!1,null,null,t,!1,r,l),e[Ye]=n.current,qt(e.nodeType===8?e.parentNode:e),new ca(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Iu(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Gn(e)};xe.hydrate=function(e,n,t){if(!Bl(n))throw Error(w(200));return zl(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!da(e))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=Zc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,l,!1,i,o),e[Ye]=n.current,qt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Gl(n)};xe.render=function(e,n,t){if(!Bl(n))throw Error(w(200));return zl(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(w(40));return e._reactRootContainer?(Gn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=la;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bl(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return zl(e,n,t,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc)}catch(e){console.error(e)}}bc(),bs.exports=xe;var W0=bs.exports,Ps=W0;vi.createRoot=Ps.createRoot,vi.hydrateRoot=Ps.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sr.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Ts="popstate";function Q0(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:o,hash:a}=r.location;return fo("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:Al(l)}return Y0(n,t,null,e)}function Q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function X0(){return Math.random().toString(36).substr(2,8)}function Es(e,n){return{usr:e.state,key:e.key,idx:n}}function fo(e,n,t,r){return t===void 0&&(t=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?vt(n):n,{state:t,key:n&&n.key||r||X0()})}function Al(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function vt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Y0(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=sn.Pop,s=null,c=h();c==null&&(c=0,o.replaceState(sr({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){a=sn.Pop;let S=h(),d=S==null?null:S-c;c=S,s&&s({action:a,location:I.location,delta:d})}function g(S,d){a=sn.Push;let f=fo(I.location,S,d);c=h()+1;let p=Es(f,c),v=I.createHref(f);try{o.pushState(p,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(v)}i&&s&&s({action:a,location:I.location,delta:1})}function A(S,d){a=sn.Replace;let f=fo(I.location,S,d);c=h();let p=Es(f,c),v=I.createHref(f);o.replaceState(p,"",v),i&&s&&s({action:a,location:I.location,delta:0})}function x(S){let d=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof S=="string"?S:Al(S);return f=f.replace(/ $/,"%20"),Q(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let I={get action(){return a},get location(){return e(l,o)},listen(S){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Ts,m),s=S,()=>{l.removeEventListener(Ts,m),s=null}},createHref(S){return n(l,S)},createURL:x,encodeLocation(S){let d=x(S);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:A,go(S){return o.go(S)}};return I}var Ns;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ns||(Ns={}));function J0(e,n,t){return t===void 0&&(t="/"),Z0(e,n,t)}function Z0(e,n,t,r){let l=typeof n=="string"?vt(n):n,i=pa(l.pathname||"/",t);if(i==null)return null;let o=qc(e);b0(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let c=cp(i);a=ap(o[s],c)}return a}function qc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=yn([r,s.relativePath]),h=t.concat(s);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qc(i.children,n,h,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:ip(c,i.index),routesMeta:h})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let s of ed(i.path))l(i,o,s)}),n}function ed(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=ed(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function b0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:op(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const q0=/^:[\w-]+$/,ep=3,np=2,tp=1,rp=10,lp=-2,Ms=e=>e==="*";function ip(e,n){let t=e.split("/"),r=t.length;return t.some(Ms)&&(r+=lp),n&&(r+=np),t.filter(l=>!Ms(l)).reduce((l,i)=>l+(q0.test(i)?ep:i===""?tp:rp),r)}function op(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function ap(e,n,t){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,h=i==="/"?n:n.slice(i.length)||"/",m=sp({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},h),g=s.route;if(!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:yn([i,m.pathname]),pathnameBase:hp(yn([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=yn([i,m.pathnameBase]))}return o}function sp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=up(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:A}=h;if(g==="*"){let I=a[m]||"";o=i.slice(0,i.length-I.length).replace(/(.)\/+$/,"$1")}const x=a[m];return A&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function up(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function cp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function pa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fp=e=>dp.test(e);function pp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?vt(e):e,i;if(t)if(fp(t))i=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),fa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?i=js(t.substring(1),"/"):i=js(t,n)}else i=n;return{pathname:i,search:gp(r),hash:yp(l)}}function js(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function gi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ma(e,n){let t=mp(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ha(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=vt(e):(l=sr({},e),Q(!l.pathname||!l.pathname.includes("?"),gi("?","pathname","search",l)),Q(!l.pathname||!l.pathname.includes("#"),gi("#","pathname","hash",l)),Q(!l.search||!l.search.includes("#"),gi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=t;else{let m=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}a=m>=0?n[m]:"/"}let s=pp(l,a),c=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),hp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nd=["post","put","patch","delete"];new Set(nd);const Ip=["get",...nd];new Set(Ip);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ur.apply(this,arguments)}const ga=y.createContext(null),Ap=y.createContext(null),Sn=y.createContext(null),Ul=y.createContext(null),qe=y.createContext({outlet:null,matches:[],isDataRoute:!1}),td=y.createContext(null);function xp(e,n){let{relative:t}=n===void 0?{}:n;It()||Q(!1);let{basename:r,navigator:l}=y.useContext(Sn),{hash:i,pathname:o,search:a}=id(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:yn([r,o])),l.createHref({pathname:s,search:a,hash:i})}function It(){return y.useContext(Ul)!=null}function gr(){return It()||Q(!1),y.useContext(Ul).location}function rd(e){y.useContext(Sn).static||y.useLayoutEffect(e)}function yr(){let{isDataRoute:e}=y.useContext(qe);return e?_p():wp()}function wp(){It()||Q(!1);let e=y.useContext(ga),{basename:n,future:t,navigator:r}=y.useContext(Sn),{matches:l}=y.useContext(qe),{pathname:i}=gr(),o=JSON.stringify(ma(l,t.v7_relativeSplatPath)),a=y.useRef(!1);return rd(()=>{a.current=!0}),y.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=ha(c,JSON.parse(o),i,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:yn([n,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[n,r,o,i,e])}function ld(){let{matches:e}=y.useContext(qe),n=e[e.length-1];return n?n.params:{}}function id(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(Sn),{matches:l}=y.useContext(qe),{pathname:i}=gr(),o=JSON.stringify(ma(l,r.v7_relativeSplatPath));return y.useMemo(()=>ha(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function Sp(e,n){return kp(e,n)}function kp(e,n,t,r){It()||Q(!1);let{navigator:l}=y.useContext(Sn),{matches:i}=y.useContext(qe),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=gr(),h;if(n){var m;let S=typeof n=="string"?vt(n):n;s==="/"||(m=S.pathname)!=null&&m.startsWith(s)||Q(!1),h=S}else h=c;let g=h.pathname||"/",A=g;if(s!=="/"){let S=s.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=J0(e,{pathname:A}),I=Np(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:yn([s,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:yn([s,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,t,r);return n&&I?y.createElement(Ul.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:sn.Pop}},I):I}function Cp(){let e=Op(),n=vp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:l},t):null,null)}const Pp=y.createElement(Cp,null);class Tp extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(qe.Provider,{value:this.props.routeContext},y.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ep(e){let{routeContext:n,match:t,children:r}=e,l=y.useContext(ga);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(qe.Provider,{value:n},r)}function Np(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,a=(l=t)==null?void 0:l.errors;if(a!=null){let h=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||Q(!1),o=o.slice(0,Math.min(o.length,h+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:A}=t,x=m.route.loader&&g[m.route.id]===void 0&&(!A||A[m.route.id]===void 0);if(m.route.lazy||x){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let A,x=!1,I=null,S=null;t&&(A=a&&m.route.id?a[m.route.id]:void 0,I=m.route.errorElement||Pp,s&&(c<0&&g===0?(Dp("route-fallback"),x=!0,S=null):c===g&&(x=!0,S=m.route.hydrateFallbackElement||null)));let d=n.concat(o.slice(0,g+1)),f=()=>{let p;return A?p=I:x?p=S:m.route.Component?p=y.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,y.createElement(Ep,{match:m,routeContext:{outlet:h,matches:d,isDataRoute:t!=null},children:p})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?y.createElement(Tp,{location:t.location,revalidation:t.revalidation,component:I,error:A,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(od||{}),ad=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ad||{});function Mp(e){let n=y.useContext(ga);return n||Q(!1),n}function jp(e){let n=y.useContext(Ap);return n||Q(!1),n}function Lp(e){let n=y.useContext(qe);return n||Q(!1),n}function sd(e){let n=Lp(),t=n.matches[n.matches.length-1];return t.route.id||Q(!1),t.route.id}function Op(){var e;let n=y.useContext(td),t=jp(),r=sd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function _p(){let{router:e}=Mp(od.UseNavigateStable),n=sd(ad.UseNavigateStable),t=y.useRef(!1);return rd(()=>{t.current=!0}),y.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ur({fromRouteId:n},i)))},[e,n])}const Ls={};function Dp(e,n,t){Ls[e]||(Ls[e]=!0)}function Rp(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Gp(e){let{to:n,replace:t,state:r,relative:l}=e;It()||Q(!1);let{future:i,static:o}=y.useContext(Sn),{matches:a}=y.useContext(qe),{pathname:s}=gr(),c=yr(),h=ha(n,ma(a,i.v7_relativeSplatPath),s,l==="path"),m=JSON.stringify(h);return y.useEffect(()=>c(JSON.parse(m),{replace:t,state:r,relative:l}),[c,m,l,t,r]),null}function Hn(e){Q(!1)}function Bp(e){let{basename:n="/",children:t=null,location:r,navigationType:l=sn.Pop,navigator:i,static:o=!1,future:a}=e;It()&&Q(!1);let s=n.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:s,navigator:i,static:o,future:ur({v7_relativeSplatPath:!1},a)}),[s,a,i,o]);typeof r=="string"&&(r=vt(r));let{pathname:h="/",search:m="",hash:g="",state:A=null,key:x="default"}=r,I=y.useMemo(()=>{let S=pa(h,s);return S==null?null:{location:{pathname:S,search:m,hash:g,state:A,key:x},navigationType:l}},[s,h,m,g,A,x,l]);return I==null?null:y.createElement(Sn.Provider,{value:c},y.createElement(Ul.Provider,{children:t,value:I}))}function zp(e){let{children:n,location:t}=e;return Sp(po(n),t)}new Promise(()=>{});function po(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,l)=>{if(!y.isValidElement(r))return;let i=[...n,l];if(r.type===y.Fragment){t.push.apply(t,po(r.props.children,i));return}r.type!==Hn&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=po(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mo.apply(this,arguments)}function Up(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function Fp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hp(e,n){return e.button===0&&(!n||n==="_self")&&!Fp(e)}const Vp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Kp="6";try{window.__reactRouterVersion=Kp}catch{}const $p="startTransition",Os=_d[$p];function Wp(e){let{basename:n,children:t,future:r,window:l}=e,i=y.useRef();i.current==null&&(i.current=Q0({window:l,v5Compat:!0}));let o=i.current,[a,s]=y.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=y.useCallback(m=>{c&&Os?Os(()=>s(m)):s(m)},[s,c]);return y.useLayoutEffect(()=>o.listen(h),[o,h]),y.useEffect(()=>Rp(r),[r]),y.createElement(Bp,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:o,future:r})}const Qp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bn=y.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:s,to:c,preventScrollReset:h,viewTransition:m}=n,g=Up(n,Vp),{basename:A}=y.useContext(Sn),x,I=!1;if(typeof c=="string"&&Xp.test(c)&&(x=c,Qp))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),k=pa(v.pathname,A);v.origin===p.origin&&k!=null?c=k+v.search+v.hash:I=!0}catch{}let S=xp(c,{relative:l}),d=Yp(c,{replace:o,state:a,target:s,preventScrollReset:h,relative:l,viewTransition:m});function f(p){r&&r(p),p.defaultPrevented||d(p)}return y.createElement("a",mo({},g,{href:x||S,onClick:I||i?r:f,ref:t,target:s}))});var _s;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_s||(_s={}));var Ds;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ds||(Ds={}));function Yp(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=n===void 0?{}:n,s=yr(),c=gr(),h=id(e,{relative:o});return y.useCallback(m=>{if(Hp(m,t)){m.preventDefault();let g=r!==void 0?r:Al(c)===Al(h);s(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[c,s,h,r,l,t,e,i,o,a])}const Jp=[{id:"20260423090001",title:"Anthropic 'Claude Mythos 5' 공개...인류 최초 10조 파라미터 AI 모델 탄생",summary:"Anthropic이 4월 22일(현지시각) Claude Mythos 5를 공식화하며 인류 최초 10조 파라미터 AI 모델이 탄생했다. 혼합전문가(MoE) 아키텍처로 실제 추론 비용은 1조 파라미터 수준이나, ARC-AGI-2 등 모든 주요 벤치마크에서 역대 최고 성능을 기록했다. 사이버보안 역량 논란으로 약 50개 기업 대상 'Project Glasswing' 클로즈드 프리뷰로만 제공된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-04-23T09:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!0,content:`## 10조 파라미터, AI 역사의 새 장

Anthropic이 4월 22일(현지시각) **Claude Mythos 5**를 공식화하며 ==인류 최초 10조 파라미터 AI 모델==이 탄생했다. 2020년 GPT-3(1,750억), 2023년 GPT-4(추정 1조)에 이어 불과 3년 만에 파라미터가 **10배** 증가한 역사적 이정표다.

Claude Mythos 5는 3월 26일 Anthropic 내부 초안 문서가 공개 저장소에 실수로 노출되면서 사전 공개된 바 있다. Anthropic은 이후 4주간 레드팀 검토와 안전성 평가를 마친 뒤 파트너 기업들과 함께 공식 발표 무대에 섰다.

📌 **10조 파라미터란**: 인간 뇌의 시냅스 수(약 100조 개)의 10분의 1 규모다. GPT-3 대비 57배, GPT-4 추정치 대비 10배에 달하는 지식 저장 용량이다.

---

## MoE 아키텍처: 비용 문제를 이렇게 해결했다

10조 파라미터를 추론마다 전부 활성화하면 응답 시간이 수분 단위가 되고 전력비용이 현실적이지 않다. Anthropic이 선택한 해법은 **혼합 전문가(Mixture of Experts, MoE)** 아키텍처다.

- **총 파라미터**: 10조 개 (역사상 최대)
- **추론 시 활성 파라미터**: 약 8,000억~1조 2,000억 개 (Claude Opus 4.7급 계산 비용)
- **에너지 효율**: 동급 밀집(Dense) 모델 대비 **85% 절감**
- **응답 속도**: Claude Opus 4.7과 유사 수준 유지

독립 연구자들의 역공학 분석에 의하면 Mythos 5는 약 32개의 전문가 모듈로 구성되며, 각 토큰 처리 시 그 중 2~4개만 활성화된다. 10명의 전문가가 각자 분야에서만 발언하는 구조와 같다.

> "MoE는 10명의 전문가가 각자 분야에서만 발언하는 패널 토론과 같습니다. 10명이 동시에 떠드는 것보다 훨씬 효율적이고 품질도 높습니다."
> — 크리스 올라(Chris Olah), Anthropic 해석 가능성 팀 리드

---

## 벤치마크: 모든 지표에서 역대 최강

- **MMLU Pro (지식·추론)**: **96.8%** (Claude Opus 4.7: 87.2%)
- **SWE-bench Verified (코딩 능력)**: **76.3%** (Claude Opus 4.7: 61.2%)
- **MATH-500 (수학)**: **97.1%** (Claude Opus 4.7: 91.4%)
- **GPQA Diamond (박사급 과학)**: **89.4%** (Claude Opus 4.7: 74.1%)
- **ARC-AGI-2 (추상 추론)**: **71.2%** (기존 세계 최고: 53%)

ARC-AGI-2는 오랫동안 'AI의 벽'으로 여겨진 추상 추론 벤치마크다. ==**71.2%로 기존 최고 대비 18.2%p 경신**==한 것은 AGI 연구 커뮤니티 전체에 충격을 줬다.

## 논란의 중심: 사이버보안 능력

CBC 뉴스, 사우디 타임스 등 주요 언론이 가장 주목한 것은 벤치마크 수치가 아니라 Anthropic 레드팀이 내부 테스트에서 확인한 **보안 역량**이다.

1. 주요 운영체제의 알려지지 않은 **제로데이 취약점 식별 및 개념 증명(PoC) 코드 생성**
2. 주요 웹 브라우저 렌더링 엔진의 취약점 체인 공격 시나리오 자동 도출
3. 특정 조직 대상 맞춤형 소셜 엔지니어링 시나리오 다량 생성

이 때문에 Anthropic은 **'Project Glasswing'** 클로즈드 프리뷰 방식으로만 접근을 허용한다. 현재 접근 허가 기업은 AWS, Apple, Google, Microsoft, NVIDIA, JPMorgan Chase, CrowdStrike 등 **약 50개사**에 한정돼 있다. 일반 공개 API 배포 시기는 미정이다.

---

## 한국에 미치는 영향

### 1. 국내 AI 모델 격차 확대 우려

네이버 HyperCLOVA X, 카카오 KoGPT 등 국내 대형 모델은 파라미터 수와 성능 지표에서 수 세대의 격차를 보인다. **과학기술정보통신부**는 대응책으로 '국가 AI 컴퓨팅 센터 3단계 투자안'(2026~2030, 총 **8조원 규모**)을 국회에 제출할 예정이다. 그러나 민간 전문가들은 "정부 투자만으로 글로벌 프론티어를 따라잡기는 현실적으로 불가능하다"는 회의론을 제기한다.

### 2. 사이버보안 업계 비상

**한국인터넷진흥원(KISA)**은 4월 22일 긴급 브리핑에서 "Mythos 5급 AI가 악의적으로 사용될 경우 기존 방어 체계의 근본적 재검토가 필요하다"고 경고했다. **금융보안원**은 국내 주요 금융기관에 취약점 점검 긴급 지시를 내렸으며, AI 활용 APT 공격 시뮬레이션 훈련을 분기별 의무화하는 방안을 검토 중이다.

### 3. 반도체 수주 폭발 기대

**SK하이닉스** 경영진은 "Mythos 5 학습 클러스터 규모가 지금까지 우리가 공급한 최대 규모 프로젝트의 3배"라며 2026년 하반기 HBM4 수주 증가를 기대했다. **삼성전자**도 HBM4E 품질 인증을 서둘러 이 기회를 잡으려는 압박을 받고 있다.

⚡ **주목할 포인트**: Claude Mythos 5는 단순한 모델 업그레이드가 아니다. 10조 파라미터라는 이정표는 AI가 일부 영역에서 인간 전문가를 초월하기 시작하는 시대의 서막으로 해석된다. 국내 기업과 정부의 AI 전략 전면 재검토가 불가피한 시점이다.`},{id:"20260423090002",title:"OpenAI, 연매출 33조원 돌파...기업가치 1,300조원 IPO 공식화",summary:"OpenAI가 2026년 2월 말 연간 매출 기준 250억 달러(약 33조원)를 돌파했다. 2024년 말 37억 달러에서 14개월 만에 6.7배 성장한 기록이다. 기업가치 1조 달러(약 1,300조원)를 목표로 2026년 하반기 SEC 파일링, 2027년 정식 상장이 유력하다. 연간 140억 달러 적자 등 구조적 이슈는 변수다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-23T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",breaking:!1,content:`## 2026년 가장 뜨거운 IPO가 온다

OpenAI가 2026년 2월 말 연간 매출 기준 **250억 달러(약 33조원)**를 돌파했다. 2024년 말 37억 달러에서 약 14개월 만에 **6.7배** 성장한 기록이다. 이 기세를 등에 업고 OpenAI는 기업가치 ==**1조 달러(약 1,300조원)**==를 목표로 기업공개(IPO)를 공식화하고 있다.

월스트리트저널은 1월 보도에서 "OpenAI가 늦어도 2026년 4분기까지 SEC에 IPO 서류를 제출할 계획"이라고 전했다. CFO 사라 프레어(Sarah Friar)가 내부적으로 2027년 상장을 목표로 협의 중이라는 보도도 잇따랐다. 2026년 하반기 파일링, 2027년 초 정식 상장이 유력한 시나리오다.

📌 **역사적 맥락**: 1조 달러에 상장한다면 ARM(670억), 에어비앤비(460억) 등 최대 규모 테크 IPO를 압도하는 미국 역사상 최대 기술 기업 공개가 된다.

---

## 매출 250억 달러, 하지만 적자도 140억 달러

OpenAI의 재무 구조는 화려한 매출만큼이나 과감한 지출로 유명하다.

- **연간 매출**: **250억 달러** (2026년 2월 기준 연율화)
- **연간 지출**: **390억 달러** 이상 (훈련·추론 컴퓨트, 인건비, 인프라)
- **연간 적자**: **약 140억 달러** (넷 기준)
- **월 활성 사용자**: **9억 명** (2026년 3월)
- **엔터프라이즈 고객**: **약 200만 개** 기업·조직

흑자 전환 시점에 대해 CFO 프레어는 "2029년경"을 가이던스로 제시했다. 대부분의 대형 플랫폼 기업들(Amazon, Uber, Lyft 등)이 IPO 당시 적자였음을 감안하면, 폭발적 매출 성장이 적자 우려를 상쇄할 가능성이 높다.

> "OpenAI의 매출 성장 속도는 인터넷 역사상 가장 빠른 소비자 제품 채택 속도와 맞먹습니다. 140억 달러 적자는 시장 점유율을 사는 비용이지 구조적 문제가 아닙니다."
> — 전직 Goldman Sachs 수석 애널리스트, 블룸버그 인터뷰

---

## IPO의 구조적 복잡성

일반적인 스타트업 IPO와 달리 OpenAI 상장은 여러 법적·구조적 이슈를 안고 있다.

### 비영리→영리 전환

OpenAI는 2024년 말 비영리 법인 구조를 **영리 법인(Public Benefit Corporation)**으로 전환 완료했다. 이로써 주주 이익을 명시적으로 추구할 수 있는 법적 기반이 완성됐다.

### 전환 사채 처리

마이크로소프트, 소프트뱅크 등 기존 투자자들이 보유한 전환 사채(Convertible Notes) 처리 방식이 관건이다. 일부는 기업가치 상한 조건부로 설정돼 있어 1조 달러 목표와 충돌할 소지가 있다.

### 직원·초기 투자자 유동성

2021년 이후 합류한 직원들의 스톡옵션 만기 문제, Khosla Ventures·Sequoia 등 초기 투자자들의 엑싯 수요도 IPO 타이밍을 압박하는 요인이다.

---

## 한국에 미치는 영향

### 1. 국내 기관투자자의 기회

**국민연금(NPS)**, **한국투자공사(KIC)**, **삼성자산운용**, **미래에셋자산운용** 등이 OpenAI IPO를 주목도 1위 딜로 관리 중이다. 국민연금은 이미 마이크로소프트를 통한 간접 지분을 확보했으나, 직접 참여는 IPO가 최초 기회다.

### 2. 국내 AI 기업 밸류에이션 파급효과

OpenAI의 1조 달러 기업가치는 국내 AI 기업들의 밸류에이션 재설정 기준이 된다. **네이버**(시총 약 30조원), **카카오**(시총 약 18조원)와의 격차를 재인식시키는 동시에, 국내 AI 스타트업들의 넥스트 라운드 협상에도 영향을 미칠 전망이다.

### 3. 한국 시장 전략적 파트너십

OpenAI는 IPO 전 글로벌 파트너십 확대에 나서고 있다. 한국에서는 **SK텔레콤**과의 AI 어시스턴트 협력(기존 발표), **삼성전자**와의 온디바이스 AI 협력이 확대되는 방향이다. 파트너십 심화는 양사의 시너지를 높이는 동시에 OpenAI의 한국 시장 존재감도 강화한다.

⚡ **주목할 포인트**: OpenAI의 1조 달러 IPO가 실현되면 AI 산업 전체의 게임 체인저다. 투자자·기업·정책 당국 모두 지금부터 다양한 시나리오를 준비해야 한다.`},{id:"20260423090003",title:"구글 '신규 코드 75% AI 생성'...순다르 피차이, 개발 패러다임 전환 선언",summary:"구글 CEO 순다르 피차이가 Google Cloud Next 2026에서 구글 내부 신규 코드의 75%가 AI로 생성된다고 밝혔다. 1년 전 25%, 지난 가을 50%에서 6개월 만에 또다시 25%p 급증했다. 코드 마이그레이션 속도 6배 단축 등 구체적 성과가 공개됐으며, 국내 카카오·네이버도 40% 이상 AI 코드 채택률에 도달했다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-04-23T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",breaking:!1,content:`## 소프트웨어 개발의 패러다임이 바뀌었다

4월 22일 열린 Google Cloud Next 2026에서 순다르 피차이(Sundar Pichai) 구글 CEO가 발표한 수치 하나가 기술 업계를 뒤흔들었다. **"구글 내에서 작성되는 신규 코드의 75%가 AI에 의해 생성된다."** 이 비율은 2024년 가을 25%, 2025년 가을 50%에서 6개월 만에 **다시 25%p 더 오른** 것이다.

피차이는 '생성(Generation)'이 아닌 '배포(Ship)'된 코드라는 점을 강조했다. 즉, AI가 초안을 만들고 인간 엔지니어가 검토·승인해 실제 프로덕션에 올라간 코드가 ==전체 신규 코드의 **4분의 3**==이라는 뜻이다.

💡 **왜 이 수치가 의미 있나**: AI 생성 코드가 일부 실험 프로젝트가 아닌 구글의 핵심 제품(검색, YouTube, Gmail, Android)에 반영되고 있다는 점에서, 단순 실험이 아닌 **구조적 전환**이 완료됐음을 시사한다.

---

## 무엇이 바뀌었나: 구체적 성과

피차이는 Gemini 기반 내부 도구를 활용한 성과 사례들을 구체적 수치와 함께 공개했다.

- **코드 마이그레이션 속도**: 에이전트+엔지니어 협업으로 **6배 단축** (1년 전 대비)
- **코드 리뷰 시간**: 평균 **4시간 → 45분** (자동 버그 탐지·제안 기능으로)
- **버그 수정 사이클**: 발견 후 패치 배포까지 **평균 72시간 → 18시간**
- **문서화 자동화**: 신규 API 문서 작성의 **80%**가 AI 초안 기반

구글 엔지니어들은 내부 Gemini Code Assist가 메인 도구이며, 선택된 팀에는 Claude Code 같은 외부 도구도 허가됐다고 밝혔다.

> "코드를 쓰는 것과 소프트웨어를 만드는 것은 다릅니다. AI는 코드를 쓰고, 우리 엔지니어는 **소프트웨어를 만듭니다**. 이 구분이 앞으로의 엔지니어링 팀 역할을 정의합니다."
> — 순다르 피차이, Google CEO, Cloud Next 2026 키노트

---

## 엔지니어는 사라지나? 피차이의 대답

'AI가 코드를 쓰면 개발자가 필요 없어지는 것 아니냐'는 질문에 피차이는 단호하게 "No"라고 답했다.

1. **복잡성은 더 증가한다**: AI가 코드 생산 속도를 높이면 더 복잡한 소프트웨어를 더 빠르게 구축하게 된다. 소프트웨어 총량이 늘면 엔지니어 수요도 늘어난다.
2. **품질 보증은 인간의 몫**: AI 생성 코드의 보안 검토, 설계 적합성 판단, 엣지 케이스 발견은 여전히 인간 엔지니어의 핵심 역할이다.
3. **엔지니어의 레버리지가 커진다**: 같은 한 명의 엔지니어가 AI 없던 시절보다 훨씬 큰 영향력을 발휘하게 된다.

---

## 한국에 미치는 영향

### 1. 국내 빅테크의 채택 현황

**카카오**는 사내 AI 코딩 도구 'Koding AI'가 2026년 1분기 기준 전체 신규 코드의 **42%**를 차지한다고 밝혔다. **네이버**는 HyperCLOVA X 기반 'Codeout'의 내부 채택률을 비공개로 하고 있으나 업계 추정으로는 35~45% 수준이다. **쿠팡**은 인프라 자동화 코드의 60% 이상을 AI로 처리 중인 것으로 알려졌다.

### 2. 채용 기준의 변화

**삼성전자**, **SK하이닉스**, **LG전자**, **현대자동차** 등 대기업 IT 부문 채용 담당자들에 따르면, 2026년 하반기 채용부터 **"AI 도구 활용 역량"**이 코딩 테스트만큼 중요한 평가 항목으로 부상하고 있다. 단순 알고리즘 구현보다 AI 생성 코드 검토·디버깅·프롬프트 엔지니어링 능력이 더 중요해지는 추세다.

### 3. 개발 교육 산업의 재편

코딩 부트캠프(코드스테이츠, 우아한테크코스, 위코드 등)와 대학 컴퓨터공학과는 커리큘럼 개편 압박을 받고 있다. 단순 코딩 문법 교육이 아닌 **AI 협업 기반 소프트웨어 설계** 교육으로의 전환이 불가피하다. 2026년 하반기부터 주요 부트캠프의 커리큘럼 비율에서 AI 협업 실습이 30% 이상을 차지할 전망이다.

⚡ **주목할 포인트**: 구글의 75% AI 코드는 단순 수치가 아니다. 구글은 전 세계 소프트웨어 개발 방식의 기준을 제시해 왔다. 이 수치가 업계 표준이 되는 날이 생각보다 빨리 올 수 있다.`},{id:"20260423090004",title:'MIT "AI가 사기를 초강화"...딥페이크·피싱 피해 전년比 340% 폭증',summary:"MIT Technology Review가 4월 21일 'AI 초강화 사기(Supercharged Scams)' 보고서를 통해 AI 기반 사이버 범죄가 2026년 1분기 전년 대비 340% 급증했다고 경고했다. 인터폴은 동남아 사기 센터들이 AI로 피해자 수를 10배 늘렸다고 발표했다. 한국 경찰청 집계에서도 AI 딥페이크 사기 피해액이 1분기에만 1,200억원을 넘어섰다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-23T09:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800",breaking:!0,content:`## 사기가 AI로 '초강화'됐다

MIT Technology Review가 4월 21일 'AI에서 지금 중요한 10가지' 보고서에서 **'초강화 사기(Supercharged Scams)'**를 2026년 가장 위험한 AI 응용 중 하나로 선정했다. 같은 날 인터폴(Interpol)은 동남아시아 사기 센터들이 저렴한 AI 도구로 피해자 규모를 **10배까지 확대**하고 있다는 경고를 발표했다.

FBI IC3 보고서에 따르면 2026년 1분기 AI 기반 사이버 범죄 피해액은 **전년 동기 대비 340% 증가**했다. 1분기에만 미국 내 피해액이 ==**62억 달러(약 8조 1천억원)**==에 달했다.

⚠️ **경고**: AI 기반 딥페이크·피싱은 기존 보이스피싱과 달리 '의심하면 된다'는 직관적 방어가 통하지 않는다. 목소리·얼굴·문체가 실제 지인과 구별 불가능한 수준이기 때문이다.

---

## AI가 사기를 어떻게 바꿨나

### 딥페이크 화상통화 사기

2024년 영국 엔지니어링 기업 Arup에서 한 직원이 AI로 합성된 CFO·동료들의 화상통화에 속아 **2,500만 달러(약 330억원)**를 이체한 사건이 대표적이다. 당시는 개별 일화였으나, 2026년엔 이런 수법이 자동화되어 **하루 수백 건** 규모로 실행되고 있다.

### AI 피싱 이메일

전통적 피싱 이메일은 문법 오류·이상한 말투로 걸러낼 수 있었다. 이제 AI는 특정 대상의 LinkedIn, SNS, 이메일을 분석해 **말투·관심사·최근 활동까지 반영한 맞춤형 피싱 이메일**을 수십 초 안에 생성한다. 탐지율이 기존 피싱 대비 **67% 낮다**는 연구 결과도 있다.

### AI 악성코드 변형

사이버 범죄자들은 AI를 사용해 기존 악성코드의 시그니처를 실시간으로 변형해 백신 탐지를 우회한다. Palo Alto Networks 위협 인텔리전스 팀에 따르면 2026년 1분기 발견된 신종 랜섬웨어의 **78%가 AI 변형 도구의 흔적**을 보였다.

> "AI는 사기의 진입 장벽을 없앴습니다. 과거에는 언어 능력, 사회공학 스킬, 심리 조종 능력이 필요했지만, 이제 AI가 이 모든 것을 대신합니다."
> — 유르겐 스톡(Jürgen Stock), 인터폴 사무총장

---

## 한국의 피해 현황과 대응

### AI 딥페이크 범죄 급증

**경찰청** 사이버수사국에 따르면 2026년 1분기 AI 딥페이크 관련 범죄 신고 건수는 **전년 대비 287% 증가**했다. 피해액은 ==**1,200억원**==을 넘어섰다. 유형별 비중:

- 보이스피싱 딥페이크 음성: **40%** (가족·지인 목소리 복제)
- CEO 사칭 이체 지시: **28%** (기업 임원 딥페이크 영상)
- 로맨스 사기 AI 프로필: **22%** (AI 생성 인물로 장기 친분 후 사기)
- AI 피싱 이메일: **10%** (공공기관·금융사 사칭)

### 정부·기관 대응

- **경찰청**: '딥페이크 실시간 탐지 시스템' 2026년 하반기 구축 계획 발표
- **금융감독원**: 100만원 이상 이체 시 AI 딥페이크 탐지 인증 단계 추가 의무화 검토
- **과학기술정보통신부**: AI 생성 콘텐츠 식별 기술(C2PA 표준) 국내 적용 로드맵 발표
- **한국인터넷진흥원(KISA)**: AI 사기 탐지 API를 금융·통신사에 무상 제공 시작

**삼성전자**와 **LG전자**는 스마트폰 온디바이스 딥페이크 탐지 기능을 2026년 하반기 플래그십 모델에 탑재하는 방안을 개발 중이다.

---

### 개인 보호를 위한 4가지 방법

1. **비밀 코드 사전 약속**: 가족·직장 동료와 긴급 상황 시 확인용 코드워드를 미리 정한다
2. **콜백 확인**: 화상통화·이메일로 이체 지시를 받으면 반드시 등록된 번호로 직접 전화해 확인한다
3. **딥페이크 탐지 앱 활용**: Reality Defender, FakeCatcher 등 실시간 탐지 앱을 설치한다
4. **어색한 질문 활용**: 특정 기억·경험을 묻는 질문으로 AI 한계를 테스트한다

⚡ **주목할 포인트**: AI 사기는 더 이상 '조심하면 피할 수 있는' 수준이 아니다. 인프라 수준의 탐지 체계 구축이 없으면 개인의 노력만으로는 한계가 있다. 사회 전체의 방어 시스템 구축이 시급하다.`},{id:"20260423090005",title:'Nature 연구 "AI 에이전트, 복잡한 과학 과제서 박사급 인간의 절반도 못 미쳐"',summary:"네이처(Nature)에 게재된 스탠퍼드 HAI 연구팀 논문에서 현재 최고 AI 에이전트들이 복잡한 과학 연구 과제에서 박사급 인간 연구자의 절반 수준 성능만 발휘했다고 밝혔다. 단순 정보 검색에서는 AI가 우위지만 가설 생성·이상 데이터 해석 등 고차원 과제에서 인간이 압도했다. AI를 보조 도구로 활용한 인간은 성공률 82%로 단독 인간(68%)을 크게 앞섰다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-04-23T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## AI 에이전트, 박사 전문가에 크게 못 미쳐

네이처(Nature)에 4월 22일 게재된 스탠퍼드 HAI(인간 중심 AI 연구소) 연구팀의 논문이 AI 과대선전(hype)에 중요한 교정 신호를 보냈다. 핵심 발견은 명확하다. 현재 최고 수준의 AI 에이전트들이 복잡한 과학 연구 과제에서 **박사학위 전문가 인간의 절반 수준 성능만 달성**한다는 것이다.

연구팀은 생물학, 재료과학, 신약 개발, 기후과학, 재료공학 등 **5개 분야의 실제 연구 과제 127개**를 AI 에이전트(GPT-5.4, Claude Opus 4.7, Gemini Ultra 2.0)와 박사급 인간 연구자들에게 동일하게 부여했다.

📌 **실험 설계의 핵심**: 이번 연구의 차별점은 '벤치마크'가 아닌 '기존 논문으로 검증되지 않은 오픈 문제'를 과제로 설정했다는 점이다. AI가 학습 데이터에서 답을 암기했을 가능성을 원천 차단했다.

---

## 주요 결과: 단순 과제 AI 우위, 복잡한 과제 인간 압도

- **전체 과제 성공률 (인간 단독)**: 68.3%
- **전체 과제 성공률 (최고 AI 에이전트)**: 34.1% — ==**인간의 50% 수준**==
- **단순 정보 검색 과제**: AI 91% vs 인간 87% — AI 우위
- **복잡한 실험 설계 과제**: AI 22% vs 인간 71% — 인간 압도적 우위
- **가설 생성 과제**: AI 41% vs 인간 74% — 인간 우위
- **이상 데이터 해석 과제**: AI 18% vs 인간 69% — 인간 압도적 우위
- **AI 보조 인간의 과제 성공률**: **82.1%** — 모든 조건 중 최고

주목할 점은 단순 태스크에서는 AI가 인간을 앞지르지만, **복잡성이 높아질수록 격차가 반전돼 인간이 압도**한다는 것이다.

## 인간 연구자가 AI를 앞서는 이유

연구팀은 인간의 우위 원인으로 세 가지를 꼽았다.

1. **실패에서 방향을 수정하는 능력**: 인간은 예상치 못한 결과에서 '의미 있는 실패'를 감지하고 탐구 방향을 창의적으로 전환한다. AI는 과제 기술에 정의된 성공 기준을 따라가려는 경향이 강하다.
2. **암묵적 지식(Tacit Knowledge) 활용**: 박사 연구자들은 수년간 실험실에서 체득한 '기록되지 않은 지식'을 활용한다. 이 지식은 논문에도 없고 AI 학습 데이터에도 없다.
3. **도구 창의적 사용**: 인간은 기존 도구를 의도치 않은 방식으로 창의적으로 활용한다. AI는 학습된 도구 사용 패턴을 벗어나기 어렵다.

> "AI가 과학을 돕는 것은 확실합니다. 하지만 현재 AI는 '훌륭한 연구 조교'이지, '독립적 연구자'가 아닙니다. 이 구분을 흐리는 것은 과학 자체에 해가 됩니다."
> — 페이페이 리(Fei-Fei Li), 스탠퍼드 HAI 공동소장, Nature 논문 공동 저자

---

## AI 보조가 생산성을 높이는 영역

이번 연구가 'AI는 쓸모없다'는 결론이 아님을 강조해야 한다. 연구팀은 **'AI를 보조 도구로 활용한 인간 연구자'**의 성과도 측정했다.

- **AI 보조 인간 성공률**: **82.1%** (인간 단독 68.3%, AI 단독 34.1%)
- **문헌 검토 시간**: AI 보조 시 **78% 단축**
- **실험 설계 초안 작성**: AI 보조 시 **65% 단축**
- **데이터 분석 코드 작성**: AI 보조 시 **91% 단축**

즉, **AI가 연구자를 대체하는 것이 아니라 연구자에게 날개를 달아주는** 형태가 현재 최적 활용 방식이다.

---

## 한국에 미치는 영향

### 1. 한국 R&D 투자 방향 시사

**과학기술정보통신부**와 **한국연구재단(NRF)**은 최근 'AI 기반 연구 자동화' 투자를 대폭 확대하는 방향을 검토 중이었다. 이번 논문은 '완전 자동화 AI 연구'보다 **'인간-AI 협업 증강 연구'**에 예산을 집중해야 한다는 근거로 활용될 전망이다.

### 2. 대학 연구실의 현실적 전략

**서울대**, **KAIST**, **포스텍**, 연세대, 고려대 등 주요 연구중심 대학들에서 AI 도구 도입이 빠르게 진행되고 있다. 이번 연구 결과는 AI 도구를 '연구자 대체제'가 아닌 '연구 가속 도구'로 위치시켜, 대학원생의 역할 정의에도 영향을 줄 것이다.

### 3. AI 연구 거버넌스

**한국과학기술한림원**은 이번 논문을 바탕으로 'AI 연구 보조 윤리 가이드라인' 초안을 5월 내 발표할 예정이다. AI 에이전트에게 독립적 연구 권한을 부여하는 것에 대한 조심스러운 접근의 필요성이 정책 논의에도 반영될 전망이다.

⚡ **주목할 포인트**: 이번 논문은 AI hype에 대한 중요한 교정 신호다. AI 도구를 잘 쓰는 인간 연구자가 AI에게 밀리는 시대는 아직 멀었다. 그러나 AI를 무시하는 연구자는 AI를 잘 활용하는 연구자에게 밀리는 시대는 이미 시작됐다.`},{id:"20260421150001",title:"MIT '지금 중요한 AI 10가지' 발표...에이전트·추론·에너지 3대 축",summary:"MIT Technology Review가 4월 21일 EmTech AI 컨퍼런스 개막과 함께 '2026년 AI에서 가장 중요한 10가지'를 공개했다. AI 에이전트 상용화, 추론 모델 표준화, 데이터센터 에너지 위기, AI 저작권 소송, 합성 데이터 전환이 핵심 축으로 꼽혔다. 한국 기업 중 언급된 곳은 SK하이닉스와 네이버 HyperCLOVA X 뿐이다.",category:"이벤트",author:"Prompt Daily 편집팀",date:"2026-04-21T15:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",breaking:!1,content:`## MIT 캠퍼스에서 열린 AI 연례 총회

MIT Technology Review가 4월 21일(현지시각) MIT 캠퍼스에서 열린 **EmTech AI 2026** 컨퍼런스 개막과 동시에 '2026년 AI에서 가장 중요한 10가지(10 Things That Matter in AI Right Now)'를 공개했다. 매년 4월 발표되는 이 리스트는 글로벌 AI 정책·투자 방향의 기준점으로 활용된다.

📌 **2025년 리스트의 'AI 에이전트·소버린 AI'** 항목은 이후 12개월간 수십억 달러 투자로 이어졌다. 올해 리스트도 비슷한 파급력을 가질 것으로 전망된다.

이번에 선정된 10가지는 다음과 같다.

---

### 2026 TOP 10

1. **AI 에이전트 상용화** — 2026년은 에이전트 원년. 기업의 72%가 파일럿 시작
2. **추론 모델 표준화** — '응답'에서 '생각하는 AI'로 패러다임 전환 완료
3. **데이터센터 에너지 위기** — 2030년까지 전 세계 전력 수요 +45% 예상
4. **AI 저작권 소송의 해** — 뉴욕타임스 vs OpenAI 판결이 업계 구조 결정
5. **합성 데이터로의 전환** — 실제 데이터 부족, Nemotron·Claude Pretraining 데이터셋 확산
6. **피지컬 AI 도약** — Figure, 1X, Tesla Optimus의 본격 상용 배치
7. **오픈소스 모델 역전** — Llama 5·DeepSeek R2가 폐쇄 모델과 격차 좁혀
8. **AI 국가 주권 경쟁** — UAE·프랑스·한국의 소버린 AI 투자 급증
9. **AI 안전성 국제 협약** — EU·미국·영국 합동 Safety Institute 출범
10. **멀티모달 네이티브 모델** — 텍스트→이미지→비디오→3D 통합 생성

## 패널 토론의 하이라이트

개막 키노트는 **페이페이 리(Fei-Fei Li)** 스탠포드 HAI 공동소장이 맡았다. 그는 "현재 AI는 '규모로 승부하는 시대'를 넘어 **'어떻게 잘 만드느냐'의 시대**로 진입했다"며, 무작정 GPU를 늘리는 접근의 종말을 선언했다.

> "지난 5년은 스케일링 법칙의 시대였지만, 다음 5년은 **추론 깊이와 데이터 품질**의 시대가 될 것입니다. 한국처럼 인구가 적지만 데이터 품질이 좋은 국가에게 새로운 기회가 열립니다."
> — 페이페이 리, 스탠포드 HAI

두 번째 패널에서는 **다리오 아모데이(Dario Amodei)** Anthropic CEO와 **샘 알트만(Sam Altman)** OpenAI CEO가 나란히 등장해 AI 안전성과 경쟁 균형을 논의했다. 이례적인 동반 출연은 '3월 ChatGPT 유출 사건' 이후 업계 공동 대응 필요성에서 비롯됐다.

---

## 한국에 미치는 영향

### 1. 한국 기업의 존재감 부족

올해 10가지 트렌드에서 한국 기업으로 언급된 곳은 SK하이닉스(HBM4 맥락)와 네이버 HyperCLOVA X(소버린 AI 사례) **두 곳뿐**이다. 2025년 보고서에서는 네이버·카카오·LG AI연구원·업스테이지 등 **5곳**이 언급됐던 것과 비교하면 뒷걸음질이다.

삼성전자는 HBM3에서 뒤처진 영향으로, 카카오는 자체 모델 개발 지연으로 언급권 밖으로 밀려났다. 글로벌 AI 내러티브에서 한국의 서사가 약화되고 있다는 경고 신호다.

### 2. 소버린 AI로 기회 만들기

'AI 국가 주권 경쟁(#8)' 트렌드는 한국에게 양날의 검이다. UAE가 Falcon AI, G42로 국제적 존재감을 확보하는 동안 한국은 HyperCLOVA X가 전부라는 지적을 받았다.

정부는 이번 주 국무회의에서 '소버린 AI 이니셔티브' 예산을 **2조원 규모**로 편성할 것으로 전해졌다. 네이버·카카오·LG AI연구원·KT·삼성 SDS가 컨소시엄을 구성해 한국어 특화 100B 파라미터 모델을 공동 개발하는 방안이 유력하다.

### 3. 데이터센터 에너지 위기는 한국에도 직격탄

'데이터센터 에너지 위기(#3)'는 한국 산업계의 핵심 고민거리다. 산업통상자원부 추산으로 국내 데이터센터 전력 수요는 **2030년까지 연평균 28% 증가**할 전망이다. 경기도 용인·수원, 충청남도 아산 일대 신규 데이터센터 건설이 지역 전력망 포화 문제를 불러오고 있다.

한국전력은 이달 초 "2027년까지 AI 데이터센터 전용 송전망 확충에 **15조원 투자**"를 발표했다. SMR(소형모듈원전) 도입 논의도 과기부 중심으로 재점화되고 있다.

## 주목할 세션

EmTech AI 2026의 주요 세션은 MIT Technology Review 공식 유튜브 채널에서 4월 23일부터 순차 공개된다. 한국어 자막은 업데이트되지 않으므로, 국내 기업들은 사내 스터디용으로 DeepL·파파고 자동 번역을 활용 중이다. 전체 리포트 전문은 MIT Technology Review 유료 구독자에게 4월 25일부터 제공된다.`},{id:"20260421150002",title:"NVIDIA·Cadence, 로봇 'Sim-to-Real' 격차 해결 선언...피지컬 AI 본격화",summary:"NVIDIA와 Cadence가 CadenceLIVE Silicon Valley 2026에서 확대 파트너십을 발표했다. Cadence의 멀티피직스 시뮬레이션과 NVIDIA의 Isaac 로보틱스 라이브러리·Cosmos 월드 모델을 결합해 로봇 훈련의 'Sim-to-Real' 격차를 해결한다는 구상이다. 현대로보틱스·삼성전자 로봇사업부가 1차 도입 대상에 올랐다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-04-21T15:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`## 로보틱스의 오랜 난제, Sim-to-Real

로봇 개발자들의 오래된 고민이 하나 있다. 시뮬레이션에서는 완벽하게 작동하던 로봇이 현실에서는 맥없이 넘어진다는 것이다. 시뮬레이션 환경과 실제 물리 세계 사이의 간극, 이른바 **'Sim-to-Real gap'**이다.

NVIDIA와 Cadence Design Systems가 4월 20일 CadenceLIVE Silicon Valley 2026 컨퍼런스에서 이 문제에 대한 해답을 들고 나왔다. 양사는 기존 파트너십을 확장해 **멀티피직스 시뮬레이션 × AI 월드 모델** 통합 플랫폼을 공개했다.

## 조합의 핵심

### Cadence가 제공하는 것

- **고정밀 멀티피직스 엔진 Clarity / Fidelity**: 재료역학, 유체역학, 전자기학, 열역학을 동시 시뮬레이션
- **반도체 수준 정확도**: Cadence는 원래 반도체 설계 EDA 툴이 본업. 나노미터 단위 물리 현상을 다뤄온 경험
- **HPC 최적화**: 대규모 병렬 컴퓨팅으로 실시간 시뮬레이션 가능

### NVIDIA가 제공하는 것

- **Isaac Sim / Isaac Lab**: 강화학습 기반 로봇 훈련 플랫폼
- **Cosmos 월드 파운데이션 모델**: 수십만 시간의 실제 주행·조작 영상으로 학습된 물리 세계 생성 모델
- **GROOT 휴머노이드 파운데이션 모델**: 휴머노이드 로봇용 범용 정책 학습기

두 기술이 결합되면 **현실에서 몇 주가 걸릴 로봇 학습을 시뮬레이션 내에서 몇 시간으로 단축**할 수 있다. 젠슨 황 NVIDIA CEO는 키노트에서 이렇게 말했다.

> "우리가 만들려는 건 단순한 시뮬레이터가 아닙니다. 디지털 트윈을 넘어서는 **'디지털 퀀텀 트윈'** — 물리법칙을 완벽히 재현하는 가상세계입니다."
> — 젠슨 황, NVIDIA CEO

## 벤치마크 결과

NVIDIA가 공개한 내부 테스트 결과는 인상적이다.

- **2족 보행 학습**: 기존 3주 → 통합 플랫폼 4일 (**81% 단축**)
- **정밀 조립 파지**: 기존 11일 → 통합 플랫폼 2일 (**82% 단축**)
- **Sim-to-Real 성공률**: 기존 61% → 통합 플랫폼 **89%** (+28%p)
- **훈련 GPU 시간**: 기존 12,000시간 → 통합 플랫폼 3,200시간 (**73% 절감**)

🎯 **Sim-to-Real 성공률 89%**는 업계 최초 도달 수준이다. 기존에는 시뮬레이션에서 훈련된 정책이 실제 환경에서 제대로 작동할 확률이 60%대에 머물러 있었다.

---

## 산업계의 즉각 반응

발표 직후 주요 로봇 기업들의 도입 선언이 이어졌다.

- **Figure AI**: 휴머노이드 Figure 03 훈련 전면 전환 발표
- **Boston Dynamics**: Atlas 2세대 개발에 통합 플랫폼 적용
- **Agility Robotics**: Digit 로봇의 물류 현장 배치 가속화
- **Tesla Optimus**: 생산 라인 로봇 훈련에 부분 도입 검토
- **Unitree (중국)**: H1 휴머노이드 차기 모델에 활용

## 한국에 미치는 영향

### 1. 한국 로봇 기업, 1차 도입 명단에 포함

NVIDIA가 공개한 '얼리 액세스 파트너' 명단에 한국 기업 두 곳이 포함됐다.

- **현대로보틱스**: 산업용 로봇 팔의 물류 창고·공장 자동화 적용
- **삼성전자 로봇사업부**: 가정용 휴머노이드 로봇 '볼리(Ballie)' 후속 모델에 활용

이는 한국 로봇 산업의 글로벌 경쟁력에 대한 긍정적 시그널이다. 특히 현대로보틱스는 모회사 HD현대의 자율운항 선박·건설장비 로봇화 전략과 맞물려 Sim-to-Real 해결이 곧 수조원대 시장 개방으로 이어질 수 있다.

### 2. K-휴머노이드 연합의 도전

정부는 2025년 11월 출범한 'K-휴머노이드 연합'(삼성전자·LG전자·현대자동차·두산로보틱스·레인보우로보틱스·에이로봇 등 12개사 참여)을 중심으로 국산 휴머노이드 플랫폼 공동 개발을 추진 중이다.

NVIDIA-Cadence 통합 플랫폼을 활용하면 연합 회원사들의 개별 개발 부담을 크게 줄일 수 있다. 산업통상부는 이달 말 K-휴머노이드 연합에 **1,500억원 규모의 시뮬레이션 인프라 지원**을 발표할 예정이다.

### 3. 로봇 인재 경쟁 심화

이번 파트너십으로 '로봇 AI 엔지니어' 수요가 폭증하고 있다. 기존 로봇 공학자와 별도로, 강화학습·월드 모델·멀티피직스 시뮬레이션을 모두 이해하는 융합 인재 부족이 심각하다.

KAIST·서울대·포스텍의 로봇공학과·AI 대학원은 관련 과정을 신설 중이며, 기업들도 해외 인재 유치에 나섰다. 네이버랩스·삼성리서치는 'Sim-to-Real' 전문가에게 **연봉 3억원 이상** 파격 제안을 하고 있는 것으로 전해진다. 로봇 분야의 'AI 인재 전쟁'이 본격화됐다.`},{id:"20260421150003",title:"IEA 경고: 2030년 AI 데이터센터 전력, 일본 전체 소비량 넘는다",summary:"국제에너지기구(IEA)가 4월 20일 보고서에서 2030년 전 세계 AI 데이터센터 전력 소비가 945TWh로 일본 전체 연간 전력 소비(약 860TWh)를 초과할 것이라고 경고했다. 구글·마이크로소프트는 SMR(소형모듈원전) 계약을 잇따라 체결 중이며, 한국전력도 15조원 규모 AI 전용 송전망 투자를 발표했다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-21T15:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",breaking:!0,content:`## AI가 세계 전력을 삼킨다

국제에너지기구(IEA)가 4월 20일 공개한 **'Energy and AI 2026'** 보고서는 AI 산업의 에너지 위기를 숫자로 못박았다. 핵심 전망은 다음과 같다.

- **2024년 전 세계 데이터센터 전력 소비**: 415 TWh
- **2030년 전망치**: 945 TWh (130% 증가)
- **비교 기준**: 일본 연간 총 전력 소비 약 860 TWh, 독일 약 515 TWh
- **AI 전용 데이터센터 비중**: 2024년 12% → 2030년 58%

즉, 2030년이면 AI를 위한 컴퓨팅이 일본 한 나라가 쓰는 전기보다 많은 전력을 빨아들인다는 뜻이다. IEA는 "이는 역사상 단일 기술이 촉발한 가장 급격한 전력 수요 증가"라고 진단했다.

## 문제는 어디서 오나

### 훈련 한 번에 도시 한 달치 전력

최신 프론티어 모델 훈련은 믿기 힘든 전력을 소모한다.

- **GPT-4 (2023)**: 훈련 전력 50 GWh — 미국 5,000가구 1년치
- **Grok 4 (2025)**: 훈련 전력 200 GWh — 미국 2만 가구 1년치
- **2026년 프론티어 모델**: 훈련 전력 500 GWh 이상 — 중소도시 1달치

⚡ ChatGPT 질문 하나가 **구글 검색의 10배 전력**을 먹는다. ChatGPT 일 사용량이 10억 쿼리를 넘어가면서, 2026년부터는 **추론 전력이 훈련 전력을 역전**했다.

훈련보다 **추론(inference)** 단계가 더 큰 문제다. 사용자가 ChatGPT에 질문을 하나 던질 때마다 발생하는 전력 소비는 구글 검색의 **10배**다. ChatGPT의 일 사용량이 10억 쿼리를 넘어가면서, 추론 전력이 훈련 전력을 역전했다.

### 냉각 시스템의 과제

GPU 밀집 데이터센터는 전력의 **30~40%를 냉각에 소비**한다. 기존 공랭식은 한계에 도달했고, 액체 냉각(liquid cooling), 심지어 **해저 데이터센터**까지 등장하고 있다. Microsoft는 스코틀랜드 해안 앞바다 프로젝트 Natick에서 수중 냉각의 상업화 가능성을 테스트 중이다.

---

## 빅테크의 대응: 원자력으로의 회귀

글로벌 빅테크들이 2025~2026년에 체결한 주요 전력 계약.

- **Google**: Kairos Power와 **SMR(소형모듈원전) 500MW 전력 구매계약(PPA)** 체결
- **Microsoft**: 퇴역했던 **Three Mile Island 원전 재가동** 계약 (Constellation Energy)
- **Amazon**: Talen Energy Susquehanna 원전 옆 데이터센터 직접 연결 (960MW)
- **Meta**: 원자력 전력 1~4GW 장기 조달 입찰 진행 중
- **Oracle**: SMR 3기 병설 데이터센터 설계안 공개

3년 전만 해도 원자력은 '과거의 기술'로 여겨졌다. 이제는 AI 시대 핵심 인프라로 재평가받고 있다. IEA는 "기후 변화 대응과 AI 성장이라는 두 과제를 동시에 해결하려면 원자력이 사실상 유일한 현실적 옵션"이라고 평가했다.

> "우리는 10년 안에 전 세계 데이터센터 전력의 **25%를 원자력으로 전환**해야 합니다. 그렇지 않으면 AI 발전과 탄소중립 중 하나는 포기해야 합니다."
> — 파티 비롤(Fatih Birol), IEA 사무총장

## 한국에 미치는 영향

### 1. 한국전력, 15조원 투자로 대응

국내 데이터센터 전력 수요는 **2030년까지 연평균 28% 증가**할 전망이다. 경기도 용인·수원, 충남 아산·당진, 강원도 춘천 일대 신규 데이터센터 건설이 쏟아지면서 지역 전력망 포화 문제가 현실화됐다.

한국전력은 4월 초 "2027년까지 **AI 데이터센터 전용 송전망 확충에 15조원 투자**"를 공식 발표했다. 주요 투자 항목:

- 345kV·765kV 초고압 송전선 신설 (경기~충남 축)
- 해저 송전 케이블 (영광 원전 → 수도권 직접 연결)
- 수도권 주변 변전소 대형화
- 수요지 인접 발전원 확충 (LNG 복합화력 + 태양광·풍력 혼합)

### 2. K-SMR, 데이터센터 특화 모델로 재설계

과기부는 한국원자력연구원(KAERI)·두산에너빌리티가 공동 개발 중인 **한국형 SMR(SMART100)**을 **AI 데이터센터 전용 모델**로 재설계하는 방안을 검토 중이다. 기존 SMR이 지역 전력 공급용이었다면, 데이터센터 직결형은 다음 특징을 가진다.

- **모듈형 배치**: 데이터센터 용량에 맞춰 50MW~300MW 유연 구성
- **초저지연 전력**: 발전소~데이터센터 거리 1km 이내 근거리 공급
- **열 재활용**: 원전 폐열을 데이터센터 난방·다른 용도로 활용

두산에너빌리티는 2028년 상용화를 목표로 하고 있으며, 첫 고객사로 **SK하이닉스 이천 캠퍼스**가 거론된다.

### 3. 한국 기업의 글로벌 기회

AI 전력 위기는 한국 에너지·중공업 기업에게 뜻밖의 기회다.

- **두산에너빌리티**: SMR 제조 역량, 미국·체코·루마니아 수주전 선전 중
- **현대건설·삼성물산**: 대형 원전 EPC 경험, 중동·동유럽 신규 원전 입찰 참여
- **LG에너지솔루션·삼성SDI·SK온**: 데이터센터 UPS용 에너지저장장치(ESS) 시장 진출
- **KT·네이버클라우드**: '친환경 데이터센터' 브랜딩으로 글로벌 B2B 고객 유치

특히 두산에너빌리티는 Google의 Kairos Power 프로젝트에 주요 부품 공급사로 참여하고 있어, SMR 글로벌 밸류체인 내 한국의 입지가 단단해지고 있다.

### 4. 소비자에게 돌아오는 부담

하지만 모든 게 장밋빛은 아니다. 한국전력이 투입하는 15조원의 상당 부분은 결국 **전기요금 인상**으로 회수될 가능성이 높다. 에너지경제연구원은 "2030년까지 산업용 전기요금이 연평균 4~6% 상승할 가능성"을 전망했다.

또한 AI 산업이 지역 전력을 대규모로 흡수하면서, 제조업·일반 가정의 전력 공급 우선순위가 밀리는 문제도 제기된다. 국회 산자위는 이달 말 'AI 데이터센터 전력 공정 배분법' 심사를 시작할 예정이다.`},{id:"20260421090001",title:"ChatGPT, 4월 20일 4시간 먹통...글로벌 수십만 명 업무 마비",summary:"ChatGPT가 4월 20일 오전 10시 5분(미국 동부시각)부터 약 4시간 동안 전 세계적으로 접속 장애를 일으켰다. Downdetector 신고 건수가 평소의 150배로 폭증했으며, API에 의존하는 수천 개 B2B 서비스가 연쇄 중단됐다. 단일 AI 제공업체 의존의 리스크가 다시 부각됐다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-21T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",breaking:!0,content:`## 1억 사용자의 AI가 4시간 멈췄다

4월 20일 오전 10시 5분(미국 동부시간, 한국 시간 밤 11시 5분) ChatGPT에 대규모 접속 장애가 발생했다. 웹사이트와 모바일 앱에서 'An error occurred while processing your request' 메시지가 쏟아졌고, 일부 사용자는 로그인조차 실패했다.

Downdetector 기준 신고 건수는 **평소 대비 약 150배**까지 치솟았고, 피크 시점 5분간 약 **2만 3천 건**의 장애 신고가 접수됐다. OpenAI는 공식 상태 페이지에서 "We're investigating elevated error rates"라고 처음 공지한 뒤, 약 30분 후 "문제를 확인했으며 복구 작업 중"으로 업데이트했다.

## 영향 받은 서비스 범위

- **ChatGPT 웹·iOS·안드로이드 앱**: 응답 실패, 타임아웃 다수 발생
- **ChatGPT API**: 완전 다운은 아니었으나 지연율 3배 이상 증가
- **Sora 비디오 생성**: 작업 큐 정체로 사실상 이용 불가
- **DALL-E**: ChatGPT 통합 인터페이스 장애로 간접 영향
- **Custom GPTs / GPT Store**: 모든 커스텀 GPT 일괄 중단

반면 Microsoft Copilot(Azure OpenAI Service 기반)은 대부분 정상 작동했다. Azure 리전 격리 구조 덕분에 OpenAI 본사 인프라 장애의 영향을 받지 않은 것으로 보인다.

## 원인: 인증 레이어 충돌

OpenAI가 4월 20일 저녁 공개한 포스트모템 초안에 따르면, 장애 원인은 **인증 토큰 검증 서비스의 구성 변경**이었다. 신규 구성을 롤링 업데이트하는 과정에서 토큰 캐시가 무효화되며 인증 요청이 폭주했고, 이로 인해 요청 큐가 포화 상태에 빠져 전역 장애로 확산됐다.

> "단일 구성 변경이 전역 서비스 중단으로 이어진 것에 대해 깊이 사과드립니다. 블루/그린 배포 프로세스를 재점검하고 있습니다."
> — OpenAI Engineering 블로그

## 연쇄 피해: B2B 서비스의 도미노

이번 장애의 진짜 충격은 **OpenAI API에 의존하는 수천 개 B2B 서비스**에서 발생했다. 대표적 피해 사례:

- **Cursor, GitHub Copilot X** 등 코딩 어시스턴트: 코드 생성 중단
- **Intercom, Zendesk AI**: 자동 응대 기능 마비
- **Jasper, Copy.ai**: 콘텐츠 생성 서비스 중단
- **Notion AI, Grammarly**: 텍스트 편집 기능 장애

시장조사기업 Menlo Ventures 추산에 따르면 이번 4시간 장애로 발생한 B2B 생산성 손실은 **약 2억 달러**에 달한다.

## 한국에 미치는 영향

국내에서도 피해가 속출했다. 뤼튼테크놀로지스, 업스테이지, 네오사피엔스 등 OpenAI API를 핵심 엔진으로 쓰는 기업들의 서비스가 한국 시간 자정~새벽 3시에 동시 다발적 이상 증세를 보였다.

보험 업계와 금융권에서는 이번 사건을 계기로 **AI 서비스 중단을 커버하는 BCP(업무 연속성 계획) 조항** 신설 논의가 본격화되고 있다. 삼성SDS, LG CNS 등 대형 SI 업체들은 '멀티 AI 프로바이더 아키텍처(GPT + Claude + Gemini + HyperCLOVA X 병렬 운용)' 컨설팅 문의가 이번 주만 30% 급증했다고 밝혔다.

국내 AI 서비스 개발자 커뮤니티에서는 "더 이상 OpenAI 단일 벤더에 의존할 수 없다"는 공감대가 형성되고 있으며, Langchain·LlamaIndex 등 모델 라우팅 프레임워크 채택이 빠르게 확산될 것으로 전망된다.`},{id:"20260421090002",title:"SK하이닉스, HBM4로 엔비디아 '루빈' 독점 공급...주가 113만원 최고가",summary:"UBS는 SK하이닉스가 엔비디아 차세대 GPU '루빈' 플랫폼용 HBM4 시장에서 약 70% 점유율을 확보할 것으로 전망했다. 주가는 4월 중 113만원을 돌파해 시총 110조원을 달성했으며, 씨티증권은 목표주가 170만원을 제시했다. 삼성전자는 품질 검증 지연으로 격차 확대 중이다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-04-21T09:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800",breaking:!0,content:`## 시총 110조 돌파, 국내 반도체 단일 종목 최대

SK하이닉스 주가가 4월 중 장중 **113만원**을 돌파하며 역대 최고가를 경신했다. 종가 기준 시가총액은 약 **110조원(약 800억 달러)**으로 국내 반도체 업종 단일 종목 기준 사상 최대 규모다.

연초 대비 주가 상승률은 **+57%**로, 같은 기간 코스피 상승률(+12%)의 약 5배다. 주가 상승을 견인한 핵심 모멘텀은 명확하다. 엔비디아 차세대 GPU 플랫폼 '루빈(Rubin)'에 탑재될 HBM4 메모리의 **독점에 가까운 공급권 확보**다.

## UBS: 'SK하이닉스 HBM4 점유율 70%'

UBS는 4월 19일 발간한 아시아 반도체 리포트에서 다음과 같이 분석했다:

- **2026년 HBM 시장 규모**: 전년 대비 71% 성장한 **577억 달러**
- **SK하이닉스 HBM4 점유율**: 엔비디아 루빈 초도 물량 기준 **약 70%**
- **마이크론**: 20% 내외
- **삼성전자**: 10% 미만 (품질 인증 지연)

> "2025년 337억 달러였던 HBM 시장이 2026년 **577억 달러로 71% 성장**한다. 이 중 70%를 한 기업이 가져간다는 건 반도체 역사상 유례없는 집중 현상이다."
> — UBS 아시아 반도체 리서치

## HBM4가 왜 중요한가

HBM4(4세대 고대역폭 메모리)는 AI 모델 훈련·추론에 필수적인 메모리 기술이다. GPT-5.4 Pro, Gemini Ultra 2.0, Claude Opus 4.7 같은 최신 프론티어 모델들은 수십 개의 GPU 칩이 HBM을 공유하는 구조로 동작한다.

HBM3E 대비 HBM4의 개선 사항은 뚜렷하다.

- **대역폭**: 1.2 TB/s → 2.0 TB/s (**+67%**)
- **용량**: 24GB → 48GB (**+100%**)
- **전력 효율**: 100% → 140% (**+40%**)
- **I/O 속도**: 9.6 Gbps → 14 Gbps (**+46%**)

## 삼성 vs SK하이닉스: 격차 확대 중

삼성전자도 HBM4 개발을 진행 중이지만, HBM3 시대에 SK하이닉스에 뒤처졌던 **품질 검증(Qualification) 이슈**가 HBM4에서도 해소되지 않았다는 분석이 지배적이다. 4월 15일 삼성 주총에서 경영진은 "HBM4 품질 인증 완료 시점을 2026년 4분기로 목표"한다고 밝혔으나, 업계에서는 2027년 상반기로 지연될 가능성도 제기된다.

애널리스트 목표주가도 SK하이닉스에 호의적이다:
- **씨티증권**: 170만원
- **하나증권**: 160만원  
- **KB증권**: 120만원
- **맥쿼리**: 112만원

## 한국에 미치는 영향

**1. 경제 파급효과**
SK하이닉스의 독주는 한국 경제 전반에 호재다. 하나증권은 SK하이닉스의 2026년 영업이익 전망치를 기존 **200조원에서 231조 7천억원으로 상향**했다. 이는 2025년 삼성전자 반도체 부문 영업이익의 약 3배 규모다.

**2. 소부장 수혜**
평택·이천·청주 캠퍼스의 HBM4 생산 확대는 관련 소재·부품·장비(소부장) 업체들의 수주 증가로 이어진다. 한미반도체, 이오테크닉스, 테스, HPSP 등 관련주들도 동반 강세를 보이고 있다.

**3. 삼성의 위기**
삼성전자 입장에서는 파운드리(위탁생산)와 메모리 양쪽에서 경쟁 열세가 가시화되는 위기 신호다. 업계 관계자는 "삼성이 HBM4에서 올해 안에 반전을 만들지 못하면, AI 반도체 세대교체 사이클에서 최소 2년 이상의 격차가 굳어질 수 있다"고 경고했다.

**4. 정부 정책 영향**
정부의 'K-반도체 벨트' 지원 전략도 SK하이닉스 중심으로 재편될 가능성이 커졌다. 2조원 규모의 R&D 세액공제 확대안이 국회 통과를 앞두고 있으며, 주 수혜 기업은 SK하이닉스와 소부장 생태계가 될 전망이다.`},{id:"20260421090003",title:"OpenAI 'GPT-5.4-Cyber' 출시...보안팀 생산성 5배 증대",summary:"OpenAI가 방어적 사이버보안에 최적화된 GPT-5.4-Cyber를 엔터프라이즈 고객 대상으로 출시했다. 취약점 분석 오탐율을 기존 SAST 대비 78% 낮췄고, MITRE ATT&CK 매핑, 다크웹 위협 인텔리전스, 사고 대응 플레이북 자동 생성을 지원한다. Arctic Wolf, Palo Alto Networks가 즉시 통합을 발표했다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-04-21T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",breaking:!1,content:`## 보안팀 전용 AI의 등장

OpenAI가 GPT-5.4의 사이버보안 특화 버전인 **GPT-5.4-Cyber**를 4월 19일(현지시각) 기업 보안팀 대상으로 출시했다. 3월에 출시된 기본 GPT-5.4를 방어적 사이버보안 태스크에 맞게 파인튜닝한 모델로, 내부 벤치마크에서 보안 업무 생산성을 평균 **5배 증대**시키는 것으로 나타났다.

발표 당일 Arctic Wolf, Palo Alto Networks, CrowdStrike 등 주요 보안 업체들이 즉시 자사 플랫폼 통합을 발표해, 시장이 얼마나 이 모델을 기다렸는지를 보여줬다.

## 3가지 핵심 기능

### 1. 취약점 분석 (Vulnerability Analysis)

코드베이스에서 OWASP Top 10, CWE, CVE 기반 취약점을 자동 식별한다. OpenAI가 공개한 내부 벤치마크 결과:

- **오탐율(False Positive)**: 기존 SAST 도구 대비 **78% 감소**
- **발견 정확도**: 실제 보안 팀 리뷰 대비 **94% 일치**
- **수정 방법 설명 품질**: 시니어 엔지니어 평가 4.6/5.0

자연어로 취약점을 설명하고 구체적인 PR 패치를 제안하기 때문에, 주니어 개발자도 바로 대응할 수 있다.

### 2. 위협 인텔리전스 요약

CISA 경보, MITRE ATT&CK 프레임워크, 다크웹 포럼 데이터(합법적 소스만), VirusTotal, AlienVault OTX 등을 통합해 특정 산업·조직을 겨냥한 위협 행위자(Threat Actor) 프로파일을 자동 생성한다.

예시: "한국 금융권을 타겟팅하는 북한 연계 APT 그룹의 최근 90일 활동 요약해줘" → Lazarus, Kimsuky, Andariel 등의 최근 TTPs, IoC, 피해 사례를 표 형태로 즉시 리포트 생성.

### 3. 사고 대응 플레이북 자동 생성

레드팀·블루팀 연습 시나리오를 자동 생성하고, 각 공격 단계(Kill Chain)에서의 최적 대응 절차를 제시한다. MITRE D3FEND 프레임워크를 기반으로 한 방어 전술 매핑도 지원한다.

## 철저한 안전 장치

OpenAI는 GPT-5.4-Cyber를 **방어적 용도 전용**으로 명시했다. 다음과 같은 공격적 사용은 거부한다:

- 실제 익스플로잇 코드 생성
- 제로데이 취약점 탐색 자동화
- 악성코드 개발 지원
- 특정 시스템에 대한 무단 침투 테스트 안내

Anthropic의 Claude 4.7이 생물·화학 무기 관련 질의를 거부하는 것과 유사한 수준의 강력한 안전 레이어가 적용됐다.

## 가격 정책

- **기본 티어**: GPT-5.4 API 요금의 2.5배 (보안 도메인 특화 추가 프리미엄)
- **Enterprise 전용**: 연 계약 기반, 최소 50 시트부터
- **On-premise 옵션**: Azure Confidential Compute 기반 배포 가능 (정부·방산 고객용)

## 한국에 미치는 영향

### 사이버 공격 40% 증가 시대

KISA에 따르면 2025년 대비 2026년 1분기 국내 금융권·공공기관 대상 사이버 공격이 **40% 증가**했다. 랜섬웨어 피해액도 전년 동기 대비 65% 늘어난 것으로 집계됐다.

GPT-5.4-Cyber는 인력 부족에 시달리는 국내 보안팀에게 **실질적 전력 증강**이 될 수 있다. 특히 SOC(보안관제센터) 1차 분석 업무, 사고 리포트 작성, 경영진 브리핑 자료 준비 등 반복 업무를 대폭 줄일 수 있다.

### MSSP 업계의 재편

국내 MSSP(관리형 보안 서비스 업체) 업계에서는 이 모델의 도입을 둘러싸고 상반된 반응이 나온다:

- **긍정론**: "같은 인원으로 5배 많은 고객 커버 가능. 중소 MSSP도 대형 고객 수주 가능"
- **우려론**: "고객사가 직접 GPT-5.4-Cyber 도입하면 MSSP 수요 감소. 서비스 차별화 전략 재수립 필요"

SK쉴더스, 이글루시큐리티, 안랩 등 주요 업체들은 이미 GPT-5.4-Cyber 기반 차세대 관제 서비스를 개발 중이며, 2026년 하반기 출시를 목표로 하고 있다.

### 규제 이슈

금융감독원과 개인정보보호위원회는 이 모델이 금융권 보안 업무에 사용될 때의 **고객 데이터 처리 가이드라인** 마련에 착수했다. 특히 OpenAI 서버로 로그 데이터가 전송되는 구조에 대한 우려가 제기되고 있어, Azure Korea 리전 내 On-premise 옵션 활용이 주류가 될 전망이다.`},{id:"20260421090004",title:"Snap, 1,000명 해고하며 'AI 때문'이라 명시...노동시장 전환점",summary:"Snap CEO 에반 스피겔이 전체 인력의 약 14%인 1,000명을 해고하며 감원 사유로 'AI의 급격한 발전'을 직접 명시했다. 300개 채용 공고도 취소됐다. 엔지니어링·마케팅·콘텐츠 부서가 집중 타격을 입었고, 절감 비용은 AI 인프라에 재투자된다. AI발 구조조정이 공식화되는 분기점이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-21T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",breaking:!1,content:`## 'AI 때문'이라고 직접 말한 첫 번째 대규모 감원

Snap(스냅챗 모회사)의 에반 스피겔 CEO가 4월 19일 전체 직원에게 보낸 내부 메모에서 **1,000명 해고(전체 인력의 약 14%)**와 **300개 이상의 채용 공고 취소**를 발표했다.

이번 감원이 주목받는 이유는 사유 명시 방식이다. 일반적인 '비용 최적화'나 '사업 재편' 대신, 스피겔은 다음과 같이 직접적으로 밝혔다:

> "AI의 급격한 발전으로 우리는 더 작은 팀으로 같은 결과를 만들 수 있게 됐습니다. 이는 Snap만의 현상이 아니라 전체 기술 산업의 구조적 변화입니다. 우리는 이 변화를 선제적으로 받아들이기로 결정했습니다."
> — 에반 스피겔, Snap CEO

이전에 진행된 Meta, IBM, Salesforce, Dropbox 등의 감원에서는 'AI 도입'이라는 표현을 쓰면서도 공식 사유로는 '효율화'나 '리스트럭처링'을 내세웠다. Snap은 이를 **공식 사유**로 못박은 최초의 상장사다.

## 어떤 팀이 타격을 받았나

Snap이 SEC에 제출한 8-K 문서와 내부 소식을 종합하면 감원은 다음 직군에 집중됐다.

- **엔지니어링 약 350명**: 코드 생성·테스트 자동화가 주니어 업무를 대체
- **마케팅 약 220명**: 광고 크리에이티브·A/B 테스트 자동화
- **콘텐츠 모더레이션 약 180명**: 유해 콘텐츠 자동 필터링 고도화
- **고객 지원 약 150명**: 1차 응대 챗봇으로 전환
- **HR·운영 약 100명**: 채용 스크리닝·문서 처리 자동화

특히 엔지니어링 부서 감원은 충격적이다. 이전까지 'AI로 대체되기 어렵다'고 여겨졌던 미드·시니어 레벨 개발자들이 상당수 포함됐기 때문이다.

## 절감 비용은 AI 인프라로 재투자

Snap은 동시에 **AI 인프라 투자 확대**도 발표했다:

- 2026년 AI 설비투자(CapEx): **기존 8억 달러 → 13억 달러로 62% 증액**
- 생성형 AI 팀 신설: 100명 규모 신규 채용 (감원 총량은 900명 순감소)
- NVIDIA H200 GPU: 4,000개 추가 구매

즉, '일반 직원 1,000명'을 줄여서 'AI 전문가 100명 + GPU 4,000개'로 재투자하는 구조다. 1명의 AI 엔지니어가 10명의 기존 직원 몫을 한다는 셈법이다.

## 월가의 반응: 주가 9% 급등

발표 당일 Snap 주가는 **+9.2%** 급등했다. 투자자들은 "드디어 Snap이 비용 구조 문제를 AI로 해결하려 한다"며 환영했다. 한편 경쟁사인 Meta, Pinterest 주가도 동반 상승하며 '업계 전반의 AI발 구조조정 가속화' 기대감을 반영했다.

골드만삭스는 "Snap의 결정은 테크 기업 CEO들이 AI 생산성 향상을 재무 성과로 현실화하는 첫 사례"라며 투자의견을 Buy로 상향 조정했다.

## 한국에 미치는 영향

### 어떤 직군이 위험한가

국내 기업들도 같은 논리에 직면해 있다. 한국고용정보원의 최신 'AI 직업 영향 지수'(2026년 4월 개정판)에 따르면 향후 3년 내 AI 대체 가능성이 높은 직군은:

1. **카피라이터 / 콘텐츠 라이터**: 72%
2. **주니어 프론트엔드 개발자**: 65%
3. **디자인 실무자 (배너·SNS)**: 63%
4. **QA 엔지니어 (반복 테스트)**: 58%
5. **데이터 분석 보조**: 56%
6. **고객 응대 1차 CS**: 54%
7. **HR 채용 스크리닝**: 48%

반면 **AI 엔지니어, 프롬프트 엔지니어, AI 거버넌스 전문가** 등은 수요가 폭증하고 있다.

### 국내 기업들의 움직임

- **네이버**: 3월 조직개편에서 'AI 전환 TF' 신설. 일반 직군 자연 감소 + AI 직군 집중 채용
- **카카오**: 2026년 공채 규모 30% 축소, AI 직군만 50% 확대
- **쿠팡**: 고객 CS 상담원 1,200명을 AI 챗봇으로 대체 중 (2025년 12월 발표)
- **삼성전자 DX부문**: 마케팅·광고 크리에이티브 팀 30% 감축, 내부 AI 스튜디오로 이관

### 정부 대응

고용노동부는 4월 22일 'AI 전환기 노동시장 대응 TF' 1차 회의를 개최한다. 주요 의제는:

- AI로 인한 직무 변화 실태 조사
- 40~50대 사무직 재훈련(reskilling) 지원 확대
- AI 시대 맞춤형 실업급여 체계 개편
- 대기업의 AI발 대규모 해고 시 사회적 협의 의무화 검토

민주노총·한국노총 등 노동계는 "AI를 이유로 한 해고는 정리해고 정당성 요건을 충족하지 않는다"며 법적 대응 태세를 갖추고 있다. AI와 노동의 긴장이 본격화되는 시점이다.`},{id:"20260421090005",title:"OpenAI 'GPT-Rosalind' 공개...신약 개발 6년을 6개월로",summary:"OpenAI가 생명과학 추론 모델 GPT-Rosalind를 연구 프리뷰로 공개했다. 단백질-약물 결합 예측 정확도 91%, 임상 시험 설계 자동화, 유전체 변이 해석 등에서 기존 AlphaFold+인간 전문가 조합보다 우수한 성능을 보였다. 화이자, 노바티스, 모더나가 이미 파트너십을 체결했으며, 한국의 셀트리온·한미약품도 도입을 검토 중이다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-04-21T09:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",breaking:!1,content:`## 생명과학 전용 추론 모델의 탄생

OpenAI가 4월 18일(현지시각) 생명과학 분야 전용 추론 모델 **GPT-Rosalind**를 연구 프리뷰로 공개했다. 이름은 DNA 이중나선 구조 발견에 결정적 기여를 했지만 노벨상에서 배제됐던 로잘린드 프랭클린(Rosalind Franklin)에게서 따왔다.

GPT-5.4 기반으로 구축된 이 모델은 다음과 같은 데이터로 도메인 특화 훈련을 받았다:

- **PubMed**: 3,500만 편 생의학 논문
- **ClinicalTrials.gov**: 48만 건 임상 시험 데이터  
- **PDB (Protein Data Bank)**: 22만 개 단백질 구조
- **UniProt**: 2.5억 개 단백질 서열
- **ChEMBL**: 240만 개 생물활성 화합물
- **Reactome, KEGG**: 생물학적 경로 데이터베이스

## 4가지 핵심 기능과 벤치마크

### 1. 단백질-약물 결합 예측

AlphaFold 3와 유사한 구조 예측에 추론 능력을 결합해, 후보 약물이 목표 단백질에 어떻게 결합하는지 예측하고 부작용 가능성을 사전 평가한다.

**벤치마크 결과 (CASP-Drug 2026 기준)**:
- GPT-Rosalind: **91.2% 정확도**
- AlphaFold 3 + 인간 전문가: 84.7%
- 인간 전문가 단독: 72.3%
- 기존 범용 GPT-5.4: 58.1%

### 2. 임상 시험 설계 자동화

기존 임상 시험 데이터베이스를 분석해 다음을 자동화한다:

- 최적의 환자군 선정 기준(Inclusion/Exclusion Criteria)
- 1차·2차 평가지표(Primary/Secondary Endpoints) 설계
- 통계적 검정력(Statistical Power) 분석
- 예상 등록 기간 및 비용 산출

화이자 임상개발팀의 파일럿 테스트에서 임상 시험 프로토콜 초안 작성 시간이 **평균 8주에서 3일로 단축**됐다.

### 3. 유전체 변이 해석 (Variant Interpretation)

WGS(전장유전체분석) 결과에서 임상적으로 유의미한 변이를 ACMG/AMP 가이드라인에 따라 우선순위화한다. 희귀질환 진단에서 특히 효과적이다.

### 4. 문헌 종합 메타분석

특정 질병·약물에 대한 수천 편의 논문을 몇 시간 만에 메타분석한다. 연구자가 "GLP-1 수용체 작용제의 심혈관 효과에 대한 2020년 이후 RCT 메타분석"을 요청하면, 관련 논문 추출·품질 평가·효과크기 통합까지 자동 수행한다.

## 조기 파트너십

발표와 동시에 OpenAI는 다음 제약·바이오 기업과의 파트너십을 공개했다:

- **Pfizer**: 종양학 임상 시험 설계 자동화
- **Novartis**: CAR-T 세포 치료제 최적화
- **Moderna**: mRNA 백신 항원 선정
- **Recursion Pharmaceuticals**: 신약 후보 스크리닝
- **Isomorphic Labs** (구글 딥마인드 자회사): 단백질 설계 공동 연구

OpenAI는 "전통적 신약 개발 과정에서 후보 발굴(Drug Discovery) 단계에 평균 6년이 걸렸는데, GPT-Rosalind를 활용하면 **6개월로 단축** 가능하다"고 주장한다. 물론 임상 시험 자체는 AI로 건너뛸 수 없으므로, 전체 신약 출시 기간은 여전히 10년 이상이다.

## 안전성과 규제 이슈

GPT-Rosalind는 다음과 같은 **이중 용도(dual-use) 리스크**를 안고 있다:

- 방어적: 병원성 바이러스 분석, 백신 설계
- 공격적: 이론적으로 생물학 무기 설계 지원 가능성

OpenAI는 이를 방지하기 위해:

1. **Enterprise tier 한정 접근**: 일반 사용자 불가, 검증된 연구 기관·제약사만 허용
2. **고위험 쿼리 차단**: 생물학 무기 관련 에이전트의 16개 카테고리 쿼리 거부
3. **모든 활동 로깅**: 미국 바이오시큐리티 당국과 공유 가능한 감사 로그
4. **USG Biosecurity Board 사전 심사**: 출시 전 미국 정부 생물보안위원회의 검토 완료

## 한국에 미치는 영향

### 제약·바이오 업계 직접 수혜

국내 바이오 기업들은 그동안 신약 개발 초기 단계에서 **높은 비용과 긴 타임라인** 문제를 안고 있었다. GPT-Rosalind 상용화 시 주요 수혜 예상 기업:

- **셀트리온**: 바이오시밀러 개발 최적화, 연간 R&D 비용 15% 절감 가능
- **삼성바이오로직스**: CDMO 고객사 대상 AI 기반 프로세스 최적화 서비스 추가
- **한미약품**: 자체 신약 후보 물질 스크리닝 가속화
- **유한양행**: 렉라자 후속 폐암 신약 후보 발굴 자동화
- **LG화학 생명과학**: 당뇨 치료제 R&D 파이프라인 확대

업계 애널리스트 추산에 따르면, AI 기반 신약 개발 도구 활용 시 국내 제약사의 **초기 발굴(Hit-to-Lead) 단계 비용을 30~50% 절감**할 수 있다.

### 헬스케어 AI 스타트업 지각 변동

국내 AI 신약 개발 스타트업들(스탠다임, 파로스아이바이오, 디어젠 등)은 GPT-Rosalind라는 거대한 경쟁자 앞에서 차별화 전략을 고민 중이다. 대응 방향은 크게 두 가지:

1. **한국 특화 데이터**: 한국인 유전체, 한의학 데이터베이스 등 로컬 자산 활용
2. **특정 질환 수직 통합**: 희귀질환, 한국인 호발 암종 등 틈새 영역 집중

### 정부 정책 대응

과학기술정보통신부는 'K-바이오 AI 클러스터' 구상 일환으로:

- AI 기반 신약 개발 기업에 대한 R&D 세액공제 **최대 50%로 확대**
- 바이오 빅데이터 플랫폼(K-BDS)에 GPT-Rosalind 연동 API 구축 검토
- 서울대, KAIST 의대에 AI-바이오 융합 전문대학원 신설 (2027년 개원 목표)

식품의약품안전처는 AI 기반 신약 개발에 대한 인허가 가이드라인을 2026년 하반기까지 수립할 계획이다. FDA가 3월 발표한 'AI-Generated Drug Candidate Review Framework'를 참고하되 한국 실정에 맞게 조정된 내용이 될 것으로 보인다.`},{id:"20260420180001",title:"스탠포드 AI 인덱스 2026: 미중 AI 격차 2.7%로 좁혀졌다",summary:"스탠포드 HAI가 발표한 2026 AI 인덱스 보고서에 따르면 미국의 AI 우위가 2023년 최대 31%p에서 2.7%로 급격히 좁혀졌다. AI 연구자 미국 유입은 89% 감소했고, 생성형 AI 인구 채택률은 53%로 인터넷보다 빠른 확산 속도를 기록했다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-04-20T18:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## 미중 AI 격차 2.7%로 급감

스탠포드 대학교 인간중심 AI 연구소(HAI)가 2026 AI 인덱스 보고서를 발표했다. 핵심 메시지는 단 하나다. 미국의 AI 우위가 급격히 흔들리고 있다.

2023년 미국은 중국을 AI 성능 벤치마크에서 17~31%p 앞섰다. 2026년 3월 기준 그 격차는 **2.7%**로 줄었다. 2025년 초 DeepSeek-R1이 미국 최고 모델과 동점을 기록하는 등 두 나라의 모델은 이미 여러 차례 1위를 주고받았다.

## AI 성능, 어디까지 왔나

현재 최고 수준 AI 모델은 박사급 과학 질문과 수학 경시대회에서 인간 기준을 충족하거나 초과한다. 코딩 벤치마크 SWE-bench Verified에서는 단 1년 만에 60%에서 거의 100%로 성능이 급등했다. 다만 아날로그 시계는 여전히 50%밖에 못 읽는다. 능력의 고르지 않은 향상이 계속된다.

생성형 AI 인구 채택률은 3년 만에 53%를 기록했다. PC가 같은 수준에 도달하는 데 10년 이상, 인터넷은 약 7년이 걸렸다. 조직 도입률은 88%, 대학생 5명 중 4명이 생성형 AI를 사용한다.

## AI 연구자 미국 유입 89% 감소

투자 규모와 인재 유입 추세는 엇갈린다. 미국의 민간 AI 투자는 2025년 2,859억 달러로 중국(123억 달러)의 23배에 달한다. 새로 자금을 조달한 AI 기업도 미국이 1,953개로 2위 국가의 10배 이상이다.

그러나 미국으로 들어오는 AI 연구자 수는 7년 전 대비 89%, 지난 1년 대비 80% 급감했다. 보고서는 이 수치를 미국 AI 리더십의 가장 큰 구조적 위협 중 하나로 지목했다.

또 하나의 우려는 투명성 후퇴다. 대형 AI 기업들이 훈련 코드, 데이터셋 크기, 파라미터 수를 공개하지 않는 추세가 강해지면서 재단 모델 투명성 지수 평균 점수가 지난해 58점에서 40점으로 하락했다.

## 한국에 미치는 영향

이번 보고서는 한국의 AI 전략에 직접적 함의를 갖는다. 미중 격차 축소는 미국 기술 의존 일변도 전략의 리스크를 높인다. 동시에 AI 연구자의 미국 유입 감소는 한국계 AI 인재의 글로벌 가치를 높이는 기회가 될 수 있다.

생성형 AI 인구 채택률 53%는 전 세계 평균이지만, 한국은 높은 스마트폰 보급률과 빠른 기술 수용 문화를 감안하면 이미 이를 상회할 것으로 추정된다. 정부의 AI 기본법 시행, 과기정통부의 중소기업 AI 지원 8,000억 원 예산과 맞물려 한국 AI 생태계의 체계화가 중요한 시점이다.

스탠포드 HAI는 'AI가 예상보다 빨리 인류의 인지 작업 대부분을 수행할 수 있게 될 것'이라고 경고하며, 국가 차원의 AI 교육·재훈련 정책 수립을 촉구했다.`},{id:"20260420180002",title:"PwC 조사: AI 이익의 75%를 상위 20% 기업이 독식한다",summary:"PwC가 발표한 2026 AI 성과 연구에 따르면 AI 경제적 이익의 75%를 전체의 20%에 불과한 기업이 가져가고 있다. 선두 기업들은 생산성 향상보다 성장 전략을 우선시하며 후발 기업들과의 격차를 벌리고 있다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-20T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!1,content:`## AI 도입 기업 내에서도 양극화 심화

PwC가 공개한 2026 AI 성과 연구(AI Performance Study)는 AI 혜택의 극단적 쏠림을 수치로 확인시켜줬다. AI에 투자하는 기업들 사이에서도 양극화가 심각하다. 상위 20%에 해당하는 선도 기업들이 AI로 창출된 전체 경제적 가치의 75%를 가져가고 있다.

## 선도 기업과 후발 기업의 결정적 차이

선도 기업들의 공통점은 AI를 비용 절감 도구가 아닌 **성장 엔진**으로 쓴다는 것이다. 이들은 생산성 향상(더 빠르게 같은 것을 한다)보다 새로운 수익원 창출과 시장 확대(지금껏 불가능했던 것을 한다)에 집중한다.

반면 AI를 단순 자동화 수단으로 활용하는 기업들은 초기 비용 절감 효과를 얻은 후 성과 정체기를 맞는다. PwC는 이 격차가 기술 수준보다 **전략적 의도의 차이**에서 비롯된다고 분석했다.

선도 기업들이 공통적으로 갖춘 세 가지 특징이다:
- **데이터 인프라 선투자**: AI 도입 전 데이터 정제·통합에 18~24개월을 투자
- **AI 거버넌스 체계 구축**: 어떤 결정을 AI에 맡기고 어떤 결정을 인간이 최종 승인할지 명문화
- **전사적 AI 역량 육성**: IT 부서만의 프로젝트가 아닌 모든 직군의 AI 리터러시 향상

## 한국에 미치는 영향

국내 기업들 사이에서도 AI 격차가 빠르게 벌어지고 있다. 대기업과 중소기업 간 AI 도입률 차이뿐 아니라, 동일 산업 내 대기업들 사이에서도 AI 성과 차이가 커지고 있다.

PwC 한국 법인은 국내 기업의 약 30%만이 AI를 전략적 성장 도구로 활용하고 있으며, 나머지는 여전히 비용 절감 중심으로 접근한다고 밝혔다.

정부가 올해 중기부 AI 예산으로 투입하는 8,000억 원이 중소기업의 전략적 AI 활용을 지원하는 방향으로 집행되지 않으면, 대기업-중소기업 간 AI 격차는 앞으로 5년 내 돌이키기 어려운 수준으로 벌어질 수 있다는 우려가 제기된다.`},{id:"20260420180003",title:"구글, 추론·에이전트 특화 오픈소스 'Gemma 4' 공개",summary:"구글이 고급 추론과 에이전트 워크플로우에 특화된 오픈 모델 시리즈 Gemma 4를 발표했다. 기존 Gemma 시리즈 최고 성능 모델로, 멀티모달 입력을 지원하며 상업적 활용도 무료로 허용된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-04-20T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",breaking:!0,content:`## 구글, Gemma 4로 오픈소스 AI 시장 공략

구글 딥마인드가 오픈 모델 시리즈의 최신작 **Gemma 4**를 공개했다. 구글이 지금까지 내놓은 오픈 모델 중 가장 강력한 성능을 갖춘 이 모델은 고급 추론과 에이전트 워크플로우에 최적화됐다.

Gemma 4는 Gemini 아키텍처를 기반으로 텍스트와 이미지를 동시에 처리하는 멀티모달 입력을 지원한다. 상업적 사용도 무료로 허용하는 오픈 라이선스로 제공된다.

## 에이전트 AI 시대를 겨냥한 설계

이번 Gemma 4의 핵심 차별점은 **에이전트 작업 수행 능력**이다. 단순 질의응답을 넘어 복잡한 다단계 작업을 자율적으로 수행하도록 설계됐다. 도구 사용(tool use), 함수 호출(function calling), 구조화된 출력(structured output)에서 기존 오픈소스 모델들을 압도한다는 것이 구글의 주장이다.

공개 벤치마크에서 Gemma 4는 동급 파라미터 오픈소스 모델 중 수학 추론, 코드 생성, 에이전트 작업 평가 전 항목에서 1위를 기록했다. 특히 Berkeley Function-Calling Leaderboard에서 기존 최고 오픈소스 모델 대비 12.3%p 높은 점수를 받았다.

모델 규모는 4B, 12B, 27B 세 가지로 제공된다. 27B 모델은 A100 GPU 1개로 구동 가능해 중소 기업과 스타트업도 고성능 에이전트 서비스를 구축할 수 있다.

## 한국 AI 생태계에 미치는 영향

국내 AI 스타트업들에게 Gemma 4 출시는 직접적인 기회다. 고성능 에이전트 모델을 API 비용 없이 자체 서버에서 구동할 수 있어 서비스 개발 비용이 크게 줄어든다.

특히 기업용 AI 에이전트 솔루션을 개발하는 국내 스타트업들은 Gemma 4 기반으로 한국어 특화 파인튜닝을 진행할 전망이다. 네이버와 카카오도 HyperCLOVA X, KoGPT와의 성능 비교 테스트를 이미 시작했다는 업계 소식이 전해진다.

중소기업청이 지원하는 AI 바우처 사업에서도 Gemma 4 기반 솔루션이 주요 선택지로 등장할 것으로 보인다. Hugging Face에 공개된 후 첫 24시간 동안 10만 건 이상의 다운로드를 기록하며 개발자 커뮤니티의 뜨거운 관심을 받았다.`},{id:"20260420180004",title:"한국 AI 프라이버시 민관 정책협의회 출범...에이전트 AI 시대 선제 대응",summary:"정부가 에이전트 AI, 피지컬 AI 확산에 대응하는 AI 프라이버시 민관 정책협의회를 출범시켰다. 에이전트 AI 데이터 처리, 리스크 관리, 정보주체 권리 등 3개 분과로 운영되며 하반기 가이드라인 발표를 목표로 한다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-20T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## AI 에이전트 시대, 프라이버시 규칙 새판 짜기 시작

개인정보보호위원회가 '2026 AI 프라이버시 민관 정책협의회'를 공식 출범시켰다. 협의회는 자율적으로 행동하고 학습하는 에이전트 AI와 로봇 등 피지컬 AI가 급속히 확산하는 상황에서 기존 개인정보 보호 체계의 공백을 메우기 위해 구성됐다.

## 3개 분과 구성과 주요 과제

협의회는 다음 세 분과로 운영된다:

**1분과 - 에이전트 AI 데이터 처리**: 사용자를 대신해 인터넷을 탐색하고 서비스를 이용하는 AI 에이전트가 수집하고 처리하는 데이터의 법적 지위를 정립한다. AI가 사용자 모르게 개인 데이터를 제3자 서비스에 공유하는 경우의 책임 소재가 핵심 쟁점이다.

**2분과 - 리스크 관리**: 에이전트 AI가 잘못된 판단을 내렸을 때의 피해 구제 체계와 사전 위험 평가 의무를 설계한다.

**3분과 - 정보주체 권리**: AI 에이전트가 수집한 데이터에 대해 사용자가 열람, 삭제, 이동을 요구할 권리를 보장하는 구체적 메커니즘을 마련한다.

산업계, 학계, 시민단체, 법조계 대표 40여 명이 참여하며, 올해 하반기 에이전트 AI 프라이버시 가이드라인을 발표할 예정이다.

## 한국에 미치는 영향

이번 협의회 출범은 한국의 AI 에이전트 서비스 산업에 단기적으로는 규제 부담, 중장기적으로는 신뢰 인프라 구축이라는 양면 효과를 가져올 것으로 보인다.

국내 B2C AI 에이전트 서비스를 개발하는 기업들은 가이드라인이 나오기 전 자체 프라이버시 설계를 선제적으로 점검해야 한다. 가이드라인 준수 여부가 향후 정부 조달과 인증 심사의 기준으로 활용될 가능성이 높다.

반면 명확한 규칙이 생기면 금융, 의료, 교육 분야에서 에이전트 AI 도입을 꺼렸던 대기업들의 채택이 가속화될 수 있다는 분석도 있다. EU의 AI 거버넌스 체계와의 정합성을 고려한 설계가 이루어지면, 한국 AI 에이전트 서비스의 유럽 시장 진출 시 규제 이중 부담도 줄일 수 있다.`},{id:"20260420180005",title:"Visa, AI 에이전트가 대신 쇼핑·결제하는 플랫폼 출시",summary:"Visa가 AI 에이전트가 사용자를 대신해 상품을 검색하고 구매까지 완료하는 결제 플랫폼 Intelligent Commerce Connect를 출시했다. AI 에이전트 기반 자율 거래 시장의 결제 인프라 표준을 선점하려는 전략이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-20T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800",breaking:!1,content:`## AI가 쇼핑하고 결제까지 완료하는 시대

Visa가 'Intelligent Commerce Connect'를 공식 출시하며 AI 에이전트 결제 시장에 진입했다. 이 플랫폼은 AI 에이전트가 사용자 대신 상품을 탐색하고, 비교하고, 최종 결제까지 완료할 수 있도록 설계된 결제 인프라다.

사용자는 '오늘 저녁 파티용 와인 3병, 예산 10만 원'처럼 조건만 입력하면 된다. 이후 AI 에이전트가 여러 쇼핑 플랫폼을 탐색하고, 조건에 맞는 상품을 선정하고, Visa를 통해 결제를 완료한다.

## 핵심 기술과 보안 체계

Intelligent Commerce Connect의 핵심은 **에이전트 인증 프로토콜**이다. AI 에이전트가 사용자를 대리해 결제할 때, 실제 사용자의 명시적 위임이 있었는지 검증하는 보안 레이어다.

주요 기능은 다음과 같다:
- **위임 한도 설정**: 사용자가 에이전트별 결제 한도, 허용 카테고리, 사용 기간을 세밀하게 설정
- **실시간 이상 탐지**: AI 에이전트의 비정상 결제 패턴을 실시간으로 감지하고 차단
- **투명한 결제 내역**: 어떤 AI 에이전트가 어떤 근거로 결제했는지 상세 로그 제공

Visa는 OpenAI, Microsoft, Anthropic 등 주요 AI 에이전트 개발사와 파트너십을 맺고 이미 파일럿을 완료했다고 밝혔다.

## 한국 커머스·핀테크에 미치는 영향

국내 이커머스와 핀테크 업계에서는 이번 Visa의 움직임을 예의주시하고 있다. 쿠팡, 네이버쇼핑, 카카오선물하기 등 주요 플랫폼들이 AI 에이전트 결제 호환성을 확보하지 않으면 경쟁에서 뒤처질 수 있다.

국내 간편결제 서비스인 카카오페이, 네이버페이, 토스도 AI 에이전트 기반 거래를 수용하는 API 개방 로드맵을 조만간 발표할 것으로 예상된다. 한국의 높은 간편결제 보급률과 MZ세대의 AI 도구 활용 의향을 감안하면, 에이전트 결제 시장 성장 속도는 글로벌 평균을 웃돌 가능성이 높다.

금융위원회는 AI 에이전트 기반 결제를 기존 전자금융거래법 체계 안에서 어떻게 규율할지 검토에 착수했다. 에이전트 결제 사고 발생 시 책임 주체(사용자, AI 개발사, 결제사)를 명확히 하는 가이드라인이 올해 하반기 발표될 예정이다.`},{id:"20260417180001",title:"삼성전자, 차세대 HBM4 메모리로 AI 반도체 시장 선점 나서",summary:"삼성전자가 2027년 상반기 HBM4 메모리 양산을 목표로 개발에 착수했다고 발표했다. 기존 HBM3E 대비 2배 향상된 성능으로 엔비디아 차세대 GPU에 공급 예정이다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-04-17T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!1,content:`## 삼성전자, HBM4 개발 본격화

삼성전자가 차세대 고대역폭 메모리(HBM4) 개발에 본격 착수하며 AI 반도체 메모리 시장 주도권 확보에 나섰다. 회사는 2027년 상반기 HBM4 양산을 목표로 설정했다고 17일 발표했다.

새로운 HBM4는 현재 양산 중인 HBM3E 대비 대역폭이 2배 향상된 2TB/s를 달성할 예정이다. 용량도 기존 24GB에서 48GB로 확대된다.

## 엔비디아와 공급 계약 체결

삼성전자는 엔비디아의 차세대 GPU 'Rubin' 아키텍처에 HBM4를 공급하는 계약을 체결했다. 이는 HBM3 시장에서 SK하이닉스에 밀렸던 삼성의 반격 신호�탄으로 해석된다.

> "HBM4는 AI 모델의 대형화 추세에 맞춰 메모리 병목 현상을 해결하는 핵심 기술이 될 것" - 삼성전자 메모리사업부 관계자

## 한국 반도체 생태계에 미치는 영향

이번 HBM4 개발은 한국 반도체 산업 전반에 긍정적 파급효과를 가져올 전망이다. 삼성전자 평택 라인에서 양산이 시작되면 약 3,000명의 신규 고용 창출이 예상된다.

국내 협력업체들도 수혜를 볼 것으로 보인다. SK하이닉스와의 기술 경쟁이 심화되면서 관련 소재·부품 업체들의 투자도 늘어날 전망이다. 정부는 K-반도체 벨트 프로젝트와 연계해 총 2조원 규모의 R&D 지원을 검토 중이다.`},{id:"20260417180002",title:"구글, 제미나이 2.0에 실시간 영상 분석 기능 추가 발표",summary:"구글이 차세대 AI 모델 제미나이 2.0에 실시간 영상 스트림 분석 기능을 탑재한다고 발표했다. 라이브 방송이나 화상회의 중 실시간으로 내용을 이해하고 요약할 수 있다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-04-17T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!0,content:`## 제미나이 2.0, 실시간 영상 분석 혁신

구글이 차세대 AI 모델 제미나이 2.0에 실시간 영상 스트림 분석 기능을 탑재한다고 17일 발표했다. 이는 기존 정적 이미지나 동영상 파일 분석을 넘어 라이브 스트리밍 콘텐츠를 실시간으로 이해하는 획기적 기능이다.

새로운 기능은 초당 30프레임의 영상을 지연시간 100ms 이내로 분석할 수 있다. 화상회의, 라이브 방송, 실시간 감시 시스템 등 다양한 분야에서 활용 가능하다.

## 주요 활용 사례와 성능

제미나이 2.0의 실시간 영상 분석은 여러 혁신적 사용 사례를 제시한다:

- **화상회의 실시간 요약**: 회의 내용을 실시간으로 분석해 핵심 포인트 추출
- **교육 콘텐츠 분석**: 온라인 강의 중 학습자 이해도 실시간 측정
- **보안 시스템**: CCTV 영상에서 이상 행동 즉시 감지

성능 테스트에서 기존 GPT-4V 대비 영상 이해 정확도가 23% 향상되었다고 구글은 밝혔다.

> "실시간 영상 분석은 AI가 인간의 시각 인지 능력에 한 걸음 더 다가선 중요한 이정표" - 순다르 피차이 구글 CEO

## 한국 시장 전망과 활용 가능성

국내에서는 특히 교육과 엔터테인먼트 분야에서 큰 변화가 예상된다. 온라인 교육 플랫폼들이 실시간 학습 분석 서비스를 도입할 가능성이 높다.

K-pop 라이브 스트리밍에서도 팬들의 반응을 실시간 분석해 맞춤형 콘텐츠를 제공하는 서비스가 등장할 전망이다. 네이버와 카카오 등 국내 빅테크 기업들도 유사 기능 개발에 박차를 가할 것으로 보인다.

제미나이 2.0은 올해 3분기 구글 클라우드를 통해 한국에서도 서비스될 예정이다.`},{id:"20260417180003",title:"EU, AI 안전성 평가 의무화 법안 최종 통과... 글로벌 기준 될듯",summary:"유럽연합이 고위험 AI 시스템에 대한 안전성 평가 의무화 법안을 최종 통과시켰다. 2027년부터 시행되며, 위반 시 글로벌 매출의 최대 7% 벌금이 부과된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-17T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",breaking:!1,content:`## EU AI 안전법, 글로벌 표준 제시

유럽연합(EU)이 인공지능 안전성 평가 의무화 법안을 16일 최종 통과시켰다. 'AI Safety Assessment Regulation'으로 명명된 이 법안은 2027년 1월부터 시행되며, 고위험 AI 시스템에 대한 엄격한 안전성 검증을 요구한다.

법안에 따르면 의료, 금융, 자율주행, 채용 등 고위험 분야의 AI 시스템은 사전 안전성 평가를 의무적으로 받아야 한다. 위반 시 기업 글로벌 연매출의 최대 7% 또는 3,500만 유로 중 높은 금액이 벌금으로 부과된다.

## 주요 규제 내용과 적용 범위

새로운 규제는 다음과 같은 핵심 요구사항을 포함한다:

- **위험도 평가**: AI 시스템의 사회적 영향도 사전 측정
- **투명성 의무**: 알고리즘 의사결정 과정 공개
- **인간 감독**: 중요 결정에 인간의 최종 승인 필수
- **데이터 거버넌스**: 훈련 데이터의 편향성 검증

> "AI 기술의 혜택을 누리면서도 시민의 기본권을 보호하는 균형점을 찾았다" - 우르술라 폰 데어 라이엔 EU 집행위원장

## 한국 AI 기업에 미치는 영향

국내 AI 기업들도 EU 시장 진출을 위해서는 새로운 규제를 준수해야 한다. 네이버, 카카오, LG AI연구원 등 주요 기업들이 대응 조직을 구성하고 있다.

특히 의료 AI 분야에서 강세를 보이는 국내 스타트업들은 추가 비용 부담이 예상된다. 뷰노, 루닛 등 글로벌 진출 기업들은 EU 인증 획득을 위해 연간 10억원 이상의 컴플라이언스 비용을 투입할 전망이다.

정부는 K-디지털 플랫폼 정부 차원에서 중소 AI 기업들의 EU 규제 대응을 지원하는 방안을 검토 중이다. 과기정통부는 "EU 규제가 사실상 글로벌 표준이 될 것"이라며 선제적 대응의 필요성을 강조했다.`},{id:"20260417180004",title:"마이크로소프트, 코파일럿 Pro에 코드 자동 리팩토링 기능 출시",summary:"마이크로소프트가 코파일럭 Pro 구독자를 대상으로 레거시 코드 자동 리팩토링 기능을 출시했다. 기존 코드를 최신 프레임워크로 자동 변환하며, 99% 이상의 정확도를 보인다고 발표했다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-17T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!1,content:`## 코파일럿 Pro, 코드 현대화 자동화

마이크로소프트가 GitHub 코파일럿 Pro 구독자를 대상으로 레거시 코드 자동 리팩토링 기능을 17일 출시했다. 'Copilot Legacy Modernizer'로 명명된 이 기능은 오래된 코드베이스를 최신 프레임워크와 언어 표준으로 자동 변환한다.

새로운 기능은 Java 8을 Java 21로, Angular.js를 React로, Python 2.7을 Python 3.12로 변환하는 등 20여 개 주요 프로그래밍 언어와 프레임워크를 지원한다.

## 획기적인 정확도와 성능

마이크로소프트의 내부 테스트에서 코파일럿의 자동 리팩토링은 99.2%의 구문 정확도를 달성했다. 기존 수동 리팩토링 대비 개발 시간을 85% 단축할 수 있다고 회사는 밝혔다.

주요 기능은 다음과 같다:
- **의존성 자동 업데이트**: 보안 취약점이 있는 라이브러리 자동 교체
- **코드 스타일 통일**: 팀 코딩 컨벤션에 맞춰 자동 조정
- **성능 최적화**: 비효율적인 코드 패턴 자동 개선
- **테스트 코드 생성**: 리팩토링된 코드에 맞는 단위 테스트 자동 작성

> "개발자들이 창의적인 작업에 집중할 수 있도록 반복적인 리팩토링 작업을 AI가 대신한다" - 사티아 나델라 마이크로소프트 CEO

## 한국 개발자 생태계에 미치는 영향

국내 IT 기업들의 레거시 시스템 현대화에 큰 도움이 될 전망이다. 특히 금융권과 대기업들이 보유한 COBOL, 구버전 Java 시스템의 현대화 프로젝트에서 활용도가 높을 것으로 예상된다.

네이버, 카카오, 쿠팡 등 대형 테크 기업들은 이미 파일럿 테스트를 진행 중이다. 한 대형 IT 기업 관계자는 "10년 된 Spring 레거시 시스템을 Spring Boot로 마이그레이션하는 데 기존 6개월 걸렸던 작업이 2주로 단축됐다"고 전했다.

코파일럿 Pro는 월 20달러로, 국내에서는 네이버 클라우드 플랫폼을 통해서도 이용 가능하다. 중소 개발사들을 위한 할인 프로그램도 하반기 도입 예정이다.`},{id:"20260417180005",title:"스탠포드 연구진, 1비트 LLM으로 GPT-4 성능 90% 달성",summary:"스탠포드 대학 연구팀이 1비트 양자화 기술을 적용한 대형언어모델로 GPT-4 성능의 90%를 달성했다고 발표했다. 메모리 사용량은 16분의 1로 줄어들어 모바일 기기에서도 구동 가능하다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-04-17T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",breaking:!0,content:`## 1비트 LLM, 효율성 혁명 일으키나

스탠포드 대학 AI 연구팀이 1비트 양자화 기술을 적용한 대형언어모델(LLM)로 GPT-4 성능의 90%를 달성했다고 17일 발표했다. 'BitLLM'으로 명명된 이 모델은 기존 16비트 모델 대비 메모리 사용량을 16분의 1로 줄이면서도 높은 성능을 유지한다.

연구진은 Nature Machine Intelligence 저널에 게재된 논문에서 "1비트 양자화가 LLM의 민주화를 이끌 핵심 기술"이라고 밝혔다.

## 획기적인 압축 기술과 성능

BitLLM은 신경망의 가중치를 -1과 +1 두 값으로만 표현하는 극단적 양자화 기법을 사용한다. 이를 통해 70B 파라미터 모델을 4.4GB 메모리로 구동할 수 있게 됐다.

주요 성과는 다음과 같다:
- **MMLU 벤치마크**: GPT-4 대비 91.2% 성능
- **코딩 능력**: HumanEval에서 87.3% 달성
- **추론 속도**: 기존 모델 대비 3.2배 향상
- **전력 소모**: 85% 절감

> "1비트 LLM은 AI 접근성의 게임체인저가 될 것. 누구나 스마트폰에서 GPT급 AI를 사용할 수 있게 된다" - 페이페이 리 스탠포드 AI연구소장

## 한국 AI 산업에 미치는 영향

이번 연구 결과는 한국의 AI 스타트업과 중소기업들에게 새로운 기회를 제공할 전망이다. 고가의 GPU 인프라 없이도 고성능 AI 서비스를 개발할 수 있게 되기 때문이다.

특히 모바일 AI 분야에서 강점을 가진 삼성전자와 LG전자에게는 호재다. 갤럭시나 LG 스마트폰에 온디바이스 GPT급 AI를 탑재할 수 있는 길이 열렸다.

국내 AI 반도체 기업들도 주목하고 있다. 사피온, 딥엑스 등 AI 칩 스타트업들은 1비트 연산에 최적화된 전용 칩 개발을 검토 중이다. 업계 관계자는 "AI 칩 시장의 패러다임이 바뀔 수 있는 기술"이라고 평가했다.

연구진은 BitLLM 코드를 오픈소스로 공개할 예정이며, 상용화는 올해 하반기 시작될 것으로 예상된다.`},{id:"20260413180001",title:"메타 'Muse Spark' 공개, OpenAI·구글과 정면 승부",summary:"메타가 Meta Superintelligence Labs를 통해 첫 번째 Muse 시리즈 모델을 발표했다. Llama 4 중간 크기 모델과 동등한 성능을 10배 이하 컴퓨팅 비용으로 구현했다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-04-13T09:00:00+09:00",readTime:"8분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## 메타 'Muse Spark' 공개, OpenAI·구글과 정면 승부 선언

메타(Meta)가 2026년 4월 8일 자사의 새로운 AI 모델 시리즈 첫 번째 모델인 **Muse Spark**를 공개했다. 이 모델은 지난해 약 140억 달러 규모의 계약으로 Scale AI를 창업한 Alexandr Wang을 최고 AI 책임자로 영입한 이후 Meta Superintelligence Labs가 개발한 첫 주요 성과물이다.

Mark Zuckerberg는 내부 공지에서 "2026년은 메타가 AI 분야에서 리더십을 회복하는 해"라고 밝히며, Muse 시리즈가 OpenAI의 GPT 계열, Google의 Gemini와 직접 경쟁하는 프론티어 모델임을 공식화했다.

## 핵심 기술 특징

메타는 Muse Spark가 기존 Llama 4 중간 크기 모델과 동등한 성능을 **10분의 1 이하의 컴퓨팅 비용**으로 달성했다고 밝혔다. 재건된 AI 학습 인프라와 개선된 학습 기법이 결합된 결과다.

특히 주목할 점은 새로운 **Sparse Mixture-of-Experts(MoE)** 아키텍처 적용이다. 전체 파라미터 중 실제 추론 시 활성화되는 비율을 기존 대비 크게 낮춰, 같은 하드웨어에서 훨씬 더 많은 요청을 처리할 수 있게 했다. 내부 벤치마크에서 MMLU 89.4점, HumanEval 91.2점, MT-Bench 9.1점을 기록했다.

또한 Muse Spark는 **128K 토큰 컨텍스트 윈도우**를 지원하며, 코드 생성·수학 추론·다국어 처리 모두에서 균형 잡힌 성능을 보여줬다.

## 경쟁 구도와 시장 영향

현재 프론티어 LLM 시장은 OpenAI, Anthropic, Google이 삼강 체제를 이루고 있다. 메타는 오픈소스 전략(Llama 시리즈)과 자체 고성능 독점 모델(Muse 시리즈)을 병행하는 투트랙으로 맞서고 있다.

Alexandr Wang 체제 아래 메타가 속도를 높이면서 AI 모델 시장의 경쟁은 더욱 격화될 전망이다. 특히 메타는 자사 플랫폼(Facebook, Instagram, WhatsApp, Threads)에 Muse Spark를 우선 적용해 약 **30억 명의 사용자 데이터**를 기반으로 한 실사용 피드백 루프를 확보한다는 전략이다.

시장조사업체 Gartner는 "메타의 듀얼 트랙 전략이 성공한다면, 2027년까지 LLM API 시장에서 OpenAI의 점유율을 최대 15%p 빼앗아올 수 있다"고 분석했다.

## 오픈소스 정책과 커뮤니티 반응

메타는 Muse Spark의 경량 버전(8B, 13B 파라미터)을 오픈소스로 공개할 예정이라고 밝혔다. 다만 최고 성능의 풀 모델은 API로만 접근 가능하다. Hugging Face 커뮤니티에서는 발표 직후 48시간 만에 10만 건 이상의 다운로드가 이루어지는 등 뜨거운 반응이 나왔다.

## 한국에 미치는 영향

메타의 Muse Spark 출시는 한국 AI 스타트업과 개발자들에게 직접적인 기회를 제공한다. 카카오, 네이버, LG AI연구원 등 국내 AI 기업들은 메타의 오픈소스 모델을 기반으로 한국어 특화 파인튜닝을 진행해 왔다. 효율화된 MoE 구조는 국내 스타트업의 서비스 개발 비용 절감에 직접적인 도움이 된다.

네이버 클라우드 관계자는 "Muse 계열 경량 모델이 공개되면 HyperCLOVA X와 상호 벤치마킹을 즉시 진행할 계획"이라고 밝혔다. 다만 글로벌 빅테크 AI 경쟁이 심화될수록 독자 모델을 개발하는 국내 기업들에 대한 투자 주목도가 상대적으로 낮아질 수 있다는 우려도 제기된다.

스타트업 생태계 관점에서는 저렴한 고성능 API 접근이 실질적인 수혜로 이어질 전망이다. B2C AI 서비스를 개발하는 국내 스타트업들은 OpenAI 대비 30~40% 낮은 비용으로 유사한 성능을 확보할 수 있을 것으로 기대된다.`},{id:"20260413180002",title:"삼성·SK하이닉스, 엔비디아 HBM4 공급 주도권 경쟁",summary:"삼성전자와 SK하이닉스가 엔비디아 Vera Rubin 가속기용 HBM4 공급 업체로 확정됐다. SK하이닉스가 약 60% 물량을 확보한 가운데 삼성전자도 양산 출하를 시작하며 점유율 회복에 나섰다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-04-13T09:00:00+09:00",readTime:"8분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!1,content:`## 삼성·SK하이닉스, 엔비디아 HBM4 공급 경쟁서 주도권 다툼

2026년 AI 반도체 시장의 최대 격전지는 **HBM4(High Bandwidth Memory 4세대)**다. 엔비디아의 차세대 AI 가속기 Vera Rubin 플랫폼 탑재를 앞두고 삼성전자와 SK하이닉스 모두 엔비디아의 공식 공급사로 선정됐다. 여기에 미국 마이크론까지 공급 경쟁에 뛰어들며 3파전 구도가 형성됐다.

엔비디아 Vera Rubin GPU는 전작 Blackwell 대비 **2.5배 이상의 AI 연산 성능**을 제공하는 차세대 가속기로, 2026년 하반기 대규모 데이터센터 출하를 앞두고 있다. HBM4 수요는 이 플랫폼에 맞춰 폭발적으로 증가할 전망이다.

## 공급 구도: SK하이닉스 우위, 삼성 추격

시장조사업체 TrendForce에 따르면 SK하이닉스는 엔비디아 HBM4 전체 물량의 약 **60%**를 확보했다. SK하이닉스는 HBM3E 공급에서 쌓은 신뢰 관계를 바탕으로 HBM4 선점에도 성공했다는 평가다.

삼성전자는 2026년 2월부터 HBM4 양산 출하를 시작하며 SK하이닉스와의 격차 좁히기에 나섰다. 2025년 2분기 17%에 불과했던 삼성의 HBM 점유율은 3분기 35%까지 급등했다. 업계 관계자에 따르면 삼성이 HBM3E에서 발생했던 발열·수율 문제를 HBM4에서 상당 부분 해소했다는 평가가 나온다.

마이크론은 두 한국 기업 대비 점유율이 낮지만, 미국 정부의 반도체 공급망 다변화 기조에 힘입어 일부 물량 확보에 성공했다.

## HBM4 핵심 기술 스펙

HBM4는 이전 세대 대비 대역폭이 **2배 이상** 향상됐다. 단일 스택 기준 초당 1.7TB의 메모리 대역폭을 제공하며, 전력 효율도 30% 개선됐다. AI 학습 작업에서 병목 현상이 자주 발생하는 메모리 접근 속도 문제를 근본적으로 해소하는 게 목표다.

적층 구조는 기본 12단에서, 고성능 버전은 **16단 적층**으로 확장된다. 웨이퍼를 30마이크로미터 이하로 얇게 갈아 쌓는 고난도 공정이 필요해, 수율 관리가 공급사 간 경쟁력의 핵심 변수다.

## 차세대 16단 HBM4 개발 경쟁

엔비디아는 2026년 4분기까지 16단 적층 구조의 HBM4 공급을 요청했다. 삼성, SK하이닉스, 마이크론 3사 모두 양산 공급을 위한 본격 개발에 착수했으나 기술 난이도가 상당하다.

SK하이닉스는 TSMC와의 협업을 통한 **하이브리드 본딩(Hybrid Bonding)** 기술을 앞세워 16단 HBM4 선점을 노린다. 삼성전자는 자체 파운드리(GAA 공정)와 메모리 사업부의 시너지를 활용하는 전략이다.

## 한국에 미치는 영향

HBM4 공급 계약 확보는 삼성전자·SK하이닉스의 2026년 실적을 결정짓는 핵심 요인이다. 증권가는 두 회사 합산 영업이익이 2026년 400조 원에 육박할 것으로 전망한다.

AI 반도체 수요가 구조적으로 성장하는 가운데 한국은 HBM 분야에서 전 세계 공급의 90% 이상을 책임지는 독보적 위치를 유지하고 있다. 이는 단순한 수출 실적을 넘어 글로벌 AI 인프라의 핵심 허브로서 한국의 지위를 강화한다.

국내 소부장 기업들도 수혜를 입고 있다. HBM4 생산에 필요한 본딩 소재, 초극박 연마 장비, 테스트 설비 분야에서 국내 기업들의 납품 비중이 높아지고 있다. 다만 엔비디아가 자체 칩(MTIA) 확장을 가속화하거나 화웨이 의존도를 높이는 중국의 동향은 중장기적으로 한국 HBM 수요에 영향을 미칠 수 있는 리스크 변수다.`},{id:"20260413180003",title:"에너지 100배 절감 AI 기술, 로봇에 적용 성공",summary:"미국 터프츠대 연구팀이 뉴로심볼릭 AI를 로보틱스 비주얼-언어-액션 모델에 적용해 에너지 소비를 최대 100배 줄이면서 성능은 오히려 향상시켰다. 하노이 탑 테스트에서 95% 성공률을 기록했다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-04-13T09:00:00+09:00",readTime:"8분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!0,content:`## 뉴로심볼릭 AI, 에너지 100배 절감하며 성능도 향상

AI 시스템의 폭발적 에너지 소비가 글로벌 데이터센터 운영의 최대 도전 과제로 떠오른 가운데, 미국 **터프츠대학교(Tufts University)** 연구팀이 획기적인 돌파구를 내놨다. Matthias Scheutz 교수가 이끄는 연구팀이 개발한 뉴로심볼릭(Neuro-Symbolic) AI 접근법은 훈련 에너지를 기존 대비 **1%**, 운영 에너지를 **5%** 수준으로 줄이는 동시에 정확도를 크게 높였다.

이 연구는 2026년 5월 비엔나에서 열리는 로봇공학 자동화 국제 컨퍼런스(ICRA 2026)에서 발표될 예정이며, 사전 공개된 논문은 arXiv에서 이미 500건 이상의 인용을 기록했다.

## 뉴로심볼릭 AI란 무엇인가

기존 딥러닝 신경망이 수십억 개의 파라미터를 통한 거대한 패턴 매칭에 의존하는 반면, 뉴로심볼릭 AI는 **신경망(Neural Network)과 상징적 추론(Symbolic Reasoning)을 결합**한다.

신경망은 지각(Perception) 역할을 담당해 이미지·음성·자연어를 처리하고, 심볼릭 추론 엔진은 인간이 문제를 단계별로 분해하고 논리적으로 접근하는 방식을 모방해 복잡한 계획·추론 과제를 처리한다. 이 분업 구조가 불필요한 연산을 대폭 줄이는 핵심 원리다.

이번 연구는 로봇에 카메라 입력과 언어 명령을 처리하게 하는 **비주얼-언어-액션(Visual-Language-Action, VLA) 모델**에 뉴로심볼릭 구조를 적용했다. 기존 VLA 모델들은 모든 행동 결정을 대형 신경망에 위임해 연산 비용이 방대했으나, 뉴로심볼릭 구조는 단순 반복 작업은 규칙 기반으로 처리하고 복잡한 예외 상황만 신경망에 위임한다.

## 벤치마크 결과와 검증

연구팀은 여러 로봇 과제에서 성능을 검증했다.

**하노이 탑 퍼즐** 테스트에서 기존 VLA 시스템이 34% 성공률에 그친 반면, 뉴로심볼릭 방식은 **95% 성공률**을 기록했다. 5단 하노이 탑(31번의 최적 이동 필요)에서도 88%의 성공률로 기존 시스템을 크게 앞섰다.

**에너지 효율** 측면에서는 동일한 NVIDIA Jetson Orin 플랫폼에서 기존 방식 대비 훈련 비용 99% 절감, 추론 비용 95% 절감을 달성했다. 실시간 작업에서도 응답 속도가 2.3배 빨라졌다.

Scheutz 교수는 "이건 단순 최적화가 아니라 AI 시스템 설계 철학의 전환"이라며 "인간 수준의 범용 로봇 지능에 한발 더 다가선 것"이라고 밝혔다.

## 산업 적용 가능성

연구팀은 제조업 조립 라인, 물류 창고 피킹 로봇, 수술 보조 로봇 등에 기술을 적용한 시뮬레이션도 진행했다. 에너지 소비 절감은 배터리 의존형 모바일 로봇에서 특히 큰 의미를 갖는다. 기존 AI 기반 로봇은 배터리 소모가 빨라 지속 운용 시간이 짧았으나, 이 기술로 **운용 시간이 최대 8배** 늘어날 수 있다고 연구팀은 추산한다.

구글 딥마인드와 Boston Dynamics는 이미 해당 연구팀에 협력 의향을 전달한 것으로 알려졌다.

## 한국에 미치는 영향

이 기술은 한국의 AI 및 로봇 산업에 복합적 함의를 갖는다.

**데이터센터 관점**: 네이버, KT, SKT 등이 대규모 AI 데이터센터를 운영 중인 상황에서, 에너지 효율 기술 채택은 전기료와 탄소 크레딧 비용에 직결된다. 과기정통부 추산에 따르면 국내 AI 데이터센터 전력 소비는 2026년 한국 전체 전력 소비의 3.2%를 차지할 전망이다.

**로보틱스 산업**: 현대로보틱스, 레인보우로보틱스, 도구공간 등 국내 로보틱스 기업들이 VLA 모델 경량화 기술을 통해 실용적인 산업용 로봇 개발에 박차를 가할 수 있다. 특히 중소 로보틱스 스타트업은 고가의 GPU 클러스터 없이도 경쟁력 있는 로봇 AI를 개발할 수 있게 된다.

**정책 차원**: 한국 정부의 'AI 탄소 중립 로드맵 2030'과 연계해 뉴로심볼릭 AI 연구에 대한 국가 R&D 투자를 확대할 논거가 생겼다. 산업통상자원부는 이 연구를 에너지 효율형 AI 국산화 과제의 레퍼런스로 검토 중인 것으로 알려졌다.`},{id:"20260413180004",title:"한국 AI 기본법 시행 90일, 제도 보정 본격화",summary:"2026년 1월 시행된 한국 AI 기본법이 3개월 만에 보정 국면에 들어섰다. 정부는 40명 이상 전문가로 구성된 민관 태스크포스를 출범시켜 4~8월 기업 대상 설명회와 컨설팅을 진행할 예정이다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-13T09:00:00+09:00",readTime:"8분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## 한국 AI 기본법 시행 90일, 규제 보정 본격화

세계적으로도 유례가 드문 포괄적 AI 규제인 **인공지능 발전과 신뢰 기반 조성 등에 관한 기본법(AI 기본법)**이 2026년 1월 22일 발효된 지 약 3개월이 지난 현재, 정부가 본격적인 제도 보정에 나섰다.

한국은 EU AI법(2024년 8월 발효)과 함께 세계에서 가장 포괄적인 AI 규제 체계를 갖춘 국가로 손꼽힌다. 그러나 법 시행 초기 기업 현장에서 혼란이 발생하면서, 과기정통부는 4월부터 본격적인 제도 개선 작업에 착수했다.

## AI 기본법 핵심 규제 내용

AI 기본법의 핵심은 **고영향 AI**에 대한 특별 관리 체계다. 고영향 AI란 사람의 생명·신체 안전, 기본권, 범죄 수사·기소, 신용·보험 평가, 채용·해고, 공교육 학습 평가 등 **11개 고위험 영역**에서 활용되는 AI 시스템을 말한다.

고영향 AI 사업자는 다음 의무를 이행해야 한다.

- **사전 검토**: 서비스 출시 전 고영향 AI 해당 여부 자체 판단
- **안전성 확보 조치**: 편향성 검사, 오류 대응 체계 구축
- **AI 영향평가**: 연 1회 이상 정기 평가 실시
- **고지 의무**: 생성형 AI를 서비스에 활용할 경우 이용자에게 명시적 고지

이를 위반하면 고지 의무 미이행 시 **최대 3,000만 원**, 안전성 확보 조치 위반 시 **최대 3억 원**의 과태료가 부과된다.

## 보정 작업의 배경과 주요 쟁점

법 시행 3개월 만에 현장에서 다음과 같은 혼란이 제기됐다.

**쟁점 1 - 고영향 AI 판단 기준 불명확**: 동일한 챗봇 서비스가 사용 맥락에 따라 고영향 AI인지 일반 AI인지 달라질 수 있다. 예를 들어 의료 정보를 제공하는 챗봇이 자동 진단을 내리면 고영향 AI지만, 건강 정보를 안내하는 수준이면 일반 AI다. 이 경계가 불명확하다는 지적이다.

**쟁점 2 - 일반목적 AI(GPAI) 규정 공백**: GPT, Claude, Gemini처럼 특정 용도 없이 범용으로 쓰이는 AI에 대한 별도 규정이 없어 해외 빅테크 서비스의 규제 공백이 발생했다.

**쟁점 3 - AI 학습 저작권 기준 불명확**: 크롤링 기반 데이터 학습에 대한 저작권법과 AI 기본법의 충돌 해석이 기업마다 달라 법적 불확실성이 크다.

과기정통부는 이에 대응해 산업계·학계·시민사회 전문가 40명 이상으로 구성된 **AI 기본법 제도개선 태스크포스**를 출범시켰다. 이 TF는 4월부터 8월까지 기업 대상 설명회와 스타트업 1:1 컨설팅을 진행한다.

## 계도 기간과 기업 대응 전략

정부는 최소 1년간 과태료를 유예하는 계도 기간을 운영할 계획으로, 실제 처벌은 빠르면 2027년 이후 시작된다. 이 기간 내 기업들이 이행해야 할 4가지 핵심 과제는 다음과 같다.

1. **AI 사용 고지 체계 구축**: 서비스 내 AI 활용 사실을 이용자에게 명시하는 UI/UX 설계
2. **고영향 AI 판단 기준 수립**: 자사 서비스 포트폴리오 전체에 대한 고영향 AI 해당 여부 자체 심사
3. **AI 영향평가 도입**: 외부 감사 기관 또는 내부 전담 조직 구성
4. **국내 대리인 지정(해외 빅테크)**: Google, OpenAI, Meta 등은 한국 내 법적 대리인을 지정해야 함

## 글로벌 비교: EU AI법과의 정합성

한국 AI 기본법과 EU AI법은 고위험 AI 규제, 투명성 의무, 금지된 AI 관행 금지 등에서 방향성을 공유한다. 향후 양 규제의 **상호 인정(Mutual Recognition)** 협약이 논의될 가능성이 높아, 한국이 EU 시장에 진출하는 AI 기업들에게 규제 준수 부담을 줄여주는 브릿지 역할을 할 수 있다.

## 한국에 미치는 영향

단기적으로는 중소 AI 스타트업의 규제 부담과 법적 불확실성이 투자 유치에 부정적 영향을 미칠 수 있다. 실제로 일부 AI 스타트업은 규제 리스크를 피해 일본·싱가포르로 법인을 이전하는 움직임도 관찰된다.

그러나 중장기적으로는 명확한 AI 거버넌스가 한국 AI 기업의 해외 진출 시 신뢰 지표로 작용할 수 있다. "우리는 AI 기본법을 준수합니다"는 선언이 EU·북미 기업 파트너십에서 경쟁 우위가 될 수 있다. Google, Meta 등 해외 빅테크의 국내 대리인 지정 의무는 데이터 주권과 책임 소재 명확화 측면에서 국내 기업에게 상대적 우위를 줄 수 있다는 분석도 나온다.`},{id:"20260413180005",title:"DeepSeek V4 임박, 화웨이 칩 구동으로 미국 수출 규제 도전",summary:"중국 AI 기업 DeepSeek의 차세대 모델 V4가 수 주 내 출시를 앞두고 있으며 화웨이 최신 칩으로 구동 가능하다는 보도가 나왔다. 1조 파라미터 멀티모달 모델로 훈련 비용은 약 520만 달러로 추정된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-04-13T09:00:00+09:00",readTime:"8분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## DeepSeek V4 임박, 화웨이 칩 구동 가능성으로 파장

중국 AI 기업 **DeepSeek**의 4세대 모델 V4 출시가 수 주 내로 임박했다는 관측이 나오고 있다. Reuters는 The Information을 인용해 DeepSeek V4가 화웨이의 최신 AI 칩으로 구동 가능하다고 보도했으며, 이는 미국의 AI 칩 수출 규제를 우회하는 상징적 이정표로 해석된다.

DeepSeek는 2025년 초 DeepSeek V3와 R1 모델 공개로 전 세계를 놀라게 했다. GPT-4급 성능을 단 600만 달러의 훈련 비용으로 구현한다고 발표하며 DeepSeek 쇼크를 일으킨 바 있다. 당시 엔비디아 주가가 하루 만에 17% 폭락하는 등 AI 반도체 투자 심리에 찬물을 끼얹었다.

## 모델 사양과 기술 특성

DeepSeek V4는 **1조(1T) 파라미터** 규모의 멀티모달 모델로 알려졌다. 스파스 MoE 아키텍처를 적용해 추론 시 활성화 파라미터 수는 전체의 약 15% 수준으로 제한된다. 이를 통해 1조 파라미터의 방대한 지식을 보유하면서도 실제 추론 비용은 훨씬 작은 모델 수준으로 유지한다.

주요 성능 지표는 다음과 같다.

- **HumanEval(코딩)**: 94.7% — GPT 및 Claude 최신 모델과 동급
- **MATH(수학 추론)**: 92.3%
- **MMLU(종합 지식)**: 91.8%
- **컨텍스트 윈도우**: 100만 토큰 지원
- **멀티모달**: 이미지·오디오·비디오 입력 처리 가능

훈련 비용은 약 **520만 달러**로 추정된다. 이는 GPT-4 훈련 비용 추정치(약 1억 달러)의 5% 수준이다.

## 화웨이 칩 구동의 지정학적 의미

이번 보도에서 가장 주목받는 부분은 **화웨이 Ascend 910C 칩**으로의 구동 가능성이다.

미국 정부는 2023년 이후 엔비디아 A100·H100·H200·B100 등 고성능 AI 칩의 중국 수출을 전면 금지했다. 이에 따라 중국 AI 기업들은 구형 엔비디아 칩 재고 소진 이후 화웨이 Ascend 시리즈에 의존해야 하는 상황이다.

DeepSeek V4가 화웨이 칩에서 최신 프론티어 AI 성능을 구현한다면, 이는 중국이 엔비디아 GPU 없이도 자체 AI 생태계를 유지할 수 있다는 것을 증명하는 **첫 번째 공식 사례**가 된다. 업계는 이를 "AI 분야의 반도체 독립 선언"으로 평가한다.

Tencent의 Hunyuan 모델과 Alibaba의 Qwen 시리즈도 Ascend 910C 최적화를 병행하고 있어, 중국 AI의 동시다발적 탈엔비디아 전략이 가속화되고 있다.

## 오픈소스 공개 여부와 글로벌 파장

DeepSeek는 V3·R1과 마찬가지로 V4도 **오픈소스로 공개**할 가능성이 높다. 오픈소스 공개 시 글로벌 개발자 커뮤니티의 빠른 채택이 이루어지며, 각국 AI 기업들이 이를 베이스 모델로 삼아 특화 서비스를 개발하게 된다. 이는 OpenAI·Anthropic 중심의 프리미엄 API 시장에 구조적 압력을 가하는 요인이 된다.

미국 AI 안보 전문가들은 "오픈소스 DeepSeek V4가 적대 세력에게 선진 AI 역량을 무상으로 제공하는 셈"이라며 수출 통제 강화를 주장하지만, 소스 코드가 공개된 이상 실효적 통제는 사실상 불가능하다는 반론도 나온다.

## 한국에 미치는 영향

DeepSeek V4의 저비용 고성능 전략은 한국 AI 업계에 이중적인 영향을 미친다.

**기회 측면**: 네이버 HyperCLOVA X, 카카오 KoGPT 등 국내 LLM 진영은 DeepSeek V4를 기반으로 한국어 특화 파인튜닝 모델을 개발하는 방식으로 비용 효율화를 추구할 수 있다. 스타트업들은 고성능 오픈소스 모델 위에 도메인 특화 서비스를 빠르게 올릴 수 있어 초기 개발 비용이 대폭 줄어든다.

**위험 측면**: 화웨이 기반 AI 확산은 SK하이닉스·삼성전자의 HBM 수요 전망에 장기적 불확실성을 더한다. 중국 데이터센터 시장이 화웨이 칩으로 재편된다면, 한국산 HBM의 중국 수출 물량이 감소할 수 있다. 또한 정부의 국산 AI 육성 정책 관점에서도 중국 오픈소스 모델의 확산이 국내 기반 모델 개발 투자의 당위성을 약화시킬 수 있다는 우려도 제기된다.`},{id:"20260413180006",title:"OpenAI·Anthropic·구글, 중국 AI 복제 공작에 공동 대응",summary:"OpenAI, Anthropic, 구글이 중국 AI 기업들의 조직적 모델 복제에 맞서 Frontier Model Forum을 통한 위협 정보 공유 체계를 가동했다. Anthropic은 중국 3개 기업이 2만4천 개 위조 계정으로 1,600만 건의 쿼리를 추출했다고 밝혔다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-13T10:00:00+09:00",readTime:"7분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!0,content:`## OpenAI·Anthropic·구글, 중국 AI 복제 공작에 공동 방어선 구축

2026년 4월 6~7일, 미국 3대 AI 연구소가 중국 AI 기업들의 조직적 모델 복제에 맞서 처음으로 공동 위협 정보 공유 체계를 가동했다. OpenAI, Anthropic, 구글은 2023년 마이크로소프트와 함께 설립한 비영리 단체 Frontier Model Forum을 특정 외부 적대 세력을 겨냥한 실시간 정보전 플랫폼으로 전환했다.

## 적대적 증류란 무엇인가

'적대적 증류(adversarial distillation)'는 위조 계정을 대량으로 생성한 뒤 AI 플랫폼에 조직적으로 쿼리를 쏟아붓고, 그 응답 데이터를 수집해 자체 모델을 학습시키는 기법이다. 스탠퍼드대의 알파카(Alpaca) 모델이 초기 개념 증명이었지만, 이제는 산업적 규모의 지식재산권 침해 수단으로 진화했다. 수년간의 연구 비용과 안전 정렬(alignment) 작업을 통째로 건너뛰는 것이 핵심 수법이다.

## Anthropic이 공개한 수치

Anthropic은 이번 발표에서 가장 구체적인 데이터를 제시했다. 세 개의 중국 기업(DeepSeek, Moonshot AI, MiniMax)이 약 **2만4,000개의 위조 계정**을 통해 **1,600만 건의 추출 쿼리**를 수행했다고 밝혔다. 미 당국은 이 같은 관행이 미국 AI 기업들에 연간 수십억 달러의 손실을 안긴다고 추산한다.

## 상업적 손실 너머의 안보 우려

이번 협력이 단순한 지식재산권 분쟁으로 축소될 수 없는 이유가 있다. 복제된 모델들은 통상적으로 원본의 안전 필터를 결여한 채 배포된다. 이는 감시·선전·허위정보 생성 등 군사·정치적 용도로의 전용 가능성을 열어두는 구조다.

사이버보안 업계에서는 수십 년간 공격 데이터를 공유하는 관행이 정착돼 있었지만, AI 분야에서 이런 방어 연합이 공식화된 것은 이번이 처음이다. 업계 관계자는 "경쟁사들이 같은 테이블에 앉아 위협 정보를 공유하는 것 자체가 사태의 심각성을 보여준다"고 말했다.

## 입법 대응 초읽기

OpenAI는 이미 하원 중국특별위원회에 공식 메모를 제출했다. 업계 분석가들은 향후 6~12개월 내 다음 조치들이 단계적으로 시행될 것으로 전망한다.

- **API 접근 통제 강화**: 기업용 계정의 실명 인증 의무화
- **이상 쿼리 탐지 시스템**: 반복적 추출 패턴을 실시간으로 감지하는 AI 모니터링 도입
- **입법 조치**: DeepSeek 등 중국산 AI 서비스의 미국 내 접근 제한 법안 발의 가능성

## 한국에 미치는 영향

한국의 AI 스타트업과 연구기관들은 OpenAI, Anthropic, 구글 API를 핵심 인프라로 사용하고 있다. 이들 기업이 계정 인증을 강화하고 API 이용 정책을 조일 경우, 국내 개발자들은 추가 본인 인증 절차와 사용 제한에 직면할 수 있다.

동시에 국내에서 논의 중인 '한국형 AI 안전 프레임워크' 수립에도 이번 사건은 적대적 활용 시나리오를 추가하는 계기가 된다. 네이버, 카카오 등 자체 LLM을 보유한 국내 기업들 역시 동일한 복제 공격에 노출될 가능성에 대한 자체 점검이 필요한 시점이다. 한국은 미국과의 AI 안보 협력 강화 기조 속에서 이번 공동 대응 체계에 어떤 방식으로 참여할지도 정책적 과제로 부상했다.`},{id:"20260413180007",title:"NVIDIA, 로봇 AI 훈련 데이터 팩토리 블루프린트 오픈소스 공개",summary:"NVIDIA가 로봇·자율주행·비전 AI 에이전트 훈련 데이터 생성을 통합 자동화하는 물리 AI 데이터 팩토리 블루프린트를 오픈소스로 공개했다. 뉴턴 1.0 물리 엔진도 함께 출시됐으며, 외과 로봇부터 100MW 태양광 설치 로봇까지 실제 현장 적용 사례가 동시에 발표됐다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-04-13T10:00:00+09:00",readTime:"7분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`## NVIDIA, 로봇 훈련 데이터 생산 공장을 오픈소스로 열다

2026년 4월 내셔널 로보틱스 위크를 계기로 NVIDIA는 로봇·자율주행차·비전 AI 에이전트의 훈련 데이터 생성·증강·평가 과정을 단일 파이프라인으로 통합하는 **물리 AI 데이터 팩토리 블루프린트(Physical AI Data Factory Blueprint)**를 공개했다. 단순한 SDK가 아니라 "훈련 데이터를 어떻게 만들 것인가"라는 물리 AI의 근본 병목을 정면으로 겨냥한 오픈 레퍼런스 아키텍처다.

## 동시 출시된 핵심 인프라

**뉴턴 1.0 물리 엔진(Newton 1.0)**이 정식 오픈소스로 공개됐다. 정밀 충돌 감지와 사실적 물체 접촉 시뮬레이션을 제공하며, NVIDIA는 "정교한 로봇 조작의 빠르고 신뢰할 수 있는 기반"이라고 설명했다. Isaac Sim 6.0, Isaac Lab 3.0, Omniverse NuRec도 동시에 정식 출시됐다.

이와 함께 **Isaac GR00T 오픈 모델**이 발표됐다. 로봇이 자연어 명령을 이해하고 시각-언어-행동 추론을 통해 복잡한 다단계 작업을 수행하도록 설계됐다. 코드 한 줄 없이 Nova Carter 자율 로봇을 일반 언어로 제어하는 데모가 공개돼 개발자 커뮤니티의 큰 주목을 받았다.

## 실제 현장에서 돌아가는 사례들

이번 발표는 연구실 성과에 그치지 않는다.

- **의료 로봇**: PeritasAI는 Lightwheel, Advent Health 병원과 협력해 수술실 자동화 외과 로봇을 Isaac for Healthcare 기반으로 개발 중이다.
- **에너지 인프라**: AES 자회사 Maximo는 NVIDIA 가속 컴퓨팅과 Isaac Sim으로 구축한 로봇 플릿으로 **100MW 규모 태양광 설치**를 완료했다.
- **농업**: Aigen은 Cosmos 월드 모델과 Isaac Sim을 적용한 태양광 농업 로봇을 정밀 잡초 제거에 투입하고 있다.

## 시장 규모와 NVIDIA의 포석

AI 에이전트 시장은 2025년 78억 달러에서 2030년 **526억 달러**로, 연평균 46.3% 성장이 예상된다. NVIDIA의 이번 블루프린트는 이 시장에서 훈련 데이터 생산 비용과 복잡성을 낮추는 공통 인프라를 선점하려는 전략으로 읽힌다.

GPU 판매에 그치지 않고 AI 소프트웨어 스택 전반을 장악하는 NVIDIA의 '풀 스택' 전략이 로봇 분야로 확장되는 것이다. 데이터 팩토리 블루프린트를 기반으로 성장하는 로봇 기업들이 자연스럽게 NVIDIA의 하드웨어와 클라우드 서비스를 쓰게 되는 구조다.

## 왜 훈련 데이터가 물리 AI의 병목인가

언어 AI와 달리 물리 AI는 현실 세계의 데이터를 수집하는 과정이 극도로 비싸고 느리다. 로봇이 물체를 집는 방법을 학습하려면 수만 번의 실제 시도가 필요했다. 시뮬레이션으로 이 과정을 대체하면 학습 속도가 수십~수백 배 빨라지지만, 시뮬레이션과 현실 사이의 격차(sim-to-real gap)를 좁히는 것이 핵심 과제였다.

뉴턴 엔진의 정밀 물리 시뮬레이션과 Isaac Sim의 사실적 렌더링 조합은 이 격차를 좁히는 현실적 솔루션으로 평가받는다.

## 한국에 미치는 영향

한국은 반도체와 제조업 강국이지만 물리 AI 훈련 데이터 생산 역량은 아직 초기 단계다. NVIDIA의 오픈소스 데이터 팩토리 블루프린트는 현대로보틱스, 두산로봇, 레인보우로보틱스 등 국내 로봇 기업들이 자체 AI 훈련 파이프라인을 구축하는 데 직접 활용 가능한 기반이 된다.

스마트팩토리 전환을 추진하는 국내 중견 제조업체들에게는 Isaac Sim 기반 시뮬레이션이 실제 공장 라인 가동 전 로봇을 사전 검증하는 비용 효율적 대안이 될 수 있다. 정부 주도의 AI·로봇 R&D 예산이 확대되는 지금, NVIDIA 에코시스템에 조기 진입하는 국내 스타트업들의 경쟁력이 중장기적으로 부각될 전망이다.`},{id:"20260408120006",title:"프롬프트 엔지니어링, 이제 '컨텍스트 엔지니어링'으로",summary:"Anthropic 응용팀이 공개한 2026 실전 패턴. 프롬프트 문구보다 컨텍스트 구성과 도구 설계가 성능을 좌우한다.",category:"프롬프트",author:"Prompt Daily 편집팀",date:"2026-04-08T15:50:37+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",breaking:!1,content:`## 프롬프트의 시대는 끝났다

Anthropic 응용팀이 공유한 2026년 실전 인사이트의 요지는 간단하다. **어떤 문장을 쓰느냐보다 어떤 정보를 언제 주입하느냐**가 성능을 결정한다.

## 3대 원칙

### 1. 최소 충분 컨텍스트

모든 문서를 때려 넣는 것이 아니라, **태스크 수행에 꼭 필요한 최소 단위**만 선별한다. 컨텍스트 과잉은 성능을 오히려 떨어뜨린다.

### 2. 도구(tool) 설계가 곧 프롬프트

에이전트 시스템에서 도구 이름·설명·파라미터 스키마가 프롬프트의 80%를 차지한다.

### 3. 실패 경로 명시

> "모르면 모른다고 답하라"는 말보다, **무엇을 언제 인간에게 escalate해야 하는지** 규칙으로 명시하는 것이 효과적이다.

## 실전 적용

기업용 RAG에서 이 세 원칙만 지켜도 할루시네이션이 평균 **41% 감소**한다는 내부 벤치마크 결과가 공개됐다.`},{id:"20260408120005",title:"[프롬프트 가이드] Claude 4.6로 제품 PRD 작성하는 7단계",summary:"시니어 PM들이 실제 현장에서 쓰는 Claude 프롬프트 패턴을 공개한다. 단계별 프롬프트 예시와 함께 일반적인 함정까지 정리했다.",category:"프롬프트",author:"Prompt Daily 편집팀",date:"2026-04-08T15:50:37+09:00",readTime:"8분",image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",breaking:!1,content:`## 시작하기 전에

좋은 PRD 프롬프트의 핵심은 **역할 부여 → 컨텍스트 주입 → 산출물 스펙 고정** 순서다.

## 7단계 패턴

### 1. 역할과 맥락 고정

> "너는 시니어 PM이다. 우리는 B2B SaaS 스타트업이고, 주 고객은 시리즈 B 이상의 SaaS 엔지니어링 팀이다."

### 2. 문제 정의 요청

솔루션이 아닌 **문제의 뿌리**부터 정리하게 만든다.

### 3. 가설 트리

핵심 가설을 최소 3개 이상 생성하고 각각의 검증 방식을 함께 요구한다.

### 4. 반대 의견 생성

> "이 방향에 가장 강하게 반대할 시니어 엔지니어의 관점에서 반박해봐."

### 5. 스코프 경계

'이번 릴리스에서 하지 않을 것'을 명시적으로 나열한다.

### 6. 성공 지표

MECE한 선행/후행 지표를 각각 3개씩 요구.

### 7. 리스크 롤백 플랜

실패 시나리오 최소 2개와 롤백 트리거 조건을 함께 작성한다.

## 피해야 할 함정

- **템플릿 먼저 제공 금지**: AI가 템플릿 빈칸 채우기에 머문다.
- **'좋은 PRD 써줘' 금지**: 품질 기준을 명시하지 않으면 표면적 산출물만 나온다.`},{id:"20260408120004",title:"노션, AI 에이전트 '노션 Q' 공개… 문서·DB 자동 연동",summary:"노션이 워크스페이스 전반을 이해하는 AI 에이전트 '노션 Q'를 정식 출시했다. 자연어로 데이터베이스 쿼리와 문서 생성을 동시에 처리한다.",category:"도구",author:"Prompt Daily 편집팀",date:"2026-04-08T15:50:37+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",breaking:!1,content:`## 노션 Q, 워크스페이스 전체를 컨텍스트로

노션이 AI 에이전트 **노션 Q**를 정식 출시했다. 개별 페이지가 아닌 **워크스페이스 전체의 문서·데이터베이스·코멘트**를 컨텍스트로 활용한다.

## 실전 활용 사례

> "Q3 마케팅 OKR 기반으로 이번 주 진행상황 리포트 작성해줘"

같은 지시를 내리면 OKR 페이지 → 담당자 태스크 DB → 최근 코멘트를 자동 교차 참조해 리포트를 생성한다. 내부 테스트에서 기존 대비 문서 작성 시간 **63% 단축**을 기록했다.

## 요금

Plus 플랜 이상에 포함되며, 무료 사용자는 월 20회 쿼리 제한.`},{id:"20260408120003",title:"Cursor 1.0 정식 출시… 멀티 에이전트 협업 코딩 지원",summary:"AI 코드 에디터 Cursor가 1.0 정식 버전을 출시했다. 여러 AI 에이전트가 동시에 협업해 대규모 리팩토링을 자동 수행하는 기능이 핵심이다.",category:"도구",author:"Prompt Daily 편집팀",date:"2026-04-08T15:50:37+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",breaking:!0,content:`## Cursor 1.0, 2년 만의 정식 출시

Anysphere가 개발한 AI 코드 에디터 **Cursor**가 베타 2년 만에 1.0 정식 버전을 출시했다. 가장 눈에 띄는 변화는 **멀티 에이전트 모드**다.

## 멀티 에이전트 협업

사용자가 '결제 모듈을 Stripe v12로 마이그레이션' 같은 고수준 지시를 내리면, 플래너·코더·리뷰어·테스터 네 에이전트가 동시에 작동한다. 5만 줄 규모 리팩토링이 **평균 18분** 만에 완료됐다는 벤치마크도 공개됐다.

## 가격 정책

Hobby 플랜은 무료 유지, Pro $20/월, Business $40/월. 신규 Enterprise 플랜은 SOC 2 Type II 준수와 온프레미스 배포를 지원한다.`},{id:"20260408120002",title:"스탠포드 HAI, '2026 AI 인덱스' 발표… 추론 비용 95% 하락",summary:"스탠포드 인간중심AI연구소가 연례 AI 인덱스 보고서를 공개했다. GPT-3.5급 성능을 내는 모델의 추론 비용이 2년 만에 95% 하락한 것으로 나타났다.",category:"연구",author:"Prompt Daily 편집팀",date:"2026-04-08T15:50:37+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",breaking:!1,content:`## AI 인덱스 2026 핵심 지표

스탠포드 HAI가 발표한 AI 인덱스 보고서는 **모델 효율성의 극적인 개선**을 보여준다. 2023년 GPT-3.5 수준 성능을 내기 위한 100만 토큰 추론 비용은 **$20에서 $0.07로 99.6% 하락**했다.

## 주요 발견

- 기초 모델 발표 건수: 전년 대비 **47% 증가**
- 기업 AI 도입률: 글로벌 평균 **72%** (1년 전 55%)
- AI 논문 중 산업계 발표 비중: **사상 최초 60% 돌파**

## 격차와 과제

보고서는 동시에 **AI 안전성 연구 투자가 전체 R&D의 1.3%**에 불과하다고 지적하며, 평가·벤치마크 표준화의 시급성을 강조했다.`},{id:"20260408120001",title:"MIT, 트랜스포머 대체할 '선형 어텐션' 새 아키텍처 발표",summary:"MIT CSAIL이 기존 트랜스포머 대비 메모리 사용량을 70% 줄이면서도 동등한 성능을 보이는 선형 어텐션 모델을 공개했다. 장문 추론에서 4배 빠른 처리 속도를 기록했다.",category:"연구",author:"Prompt Daily 편집팀",date:"2026-04-08T15:50:37+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800",breaking:!1,content:`## 트랜스포머의 한계를 넘어

MIT CSAIL 연구팀이 기존 트랜스포머의 제곱 복잡도 문제를 해결한 새로운 선형 어텐션 아키텍처를 공개했다. 128K 토큰 이상의 장문 처리에서 GPU 메모리 사용량을 **70% 감소**시키면서도 벤치마크 점수는 유지했다.

## 핵심 혁신

연구진은 어텐션 가중치 계산을 커널 함수 근사로 대체해 시퀀스 길이에 선형 비례하는 계산량을 달성했다. 100만 토큰 문서 요약 테스트에서 기존 GPT-4 대비 **4.2배 빠른 속도**를 기록했다.

> "이건 단순한 최적화가 아니라 LLM 아키텍처의 패러다임 전환입니다."
연구 책임자 레지나 바질레이 교수

## 오픈소스 공개

논문과 가중치는 arXiv와 Hugging Face에 전면 공개됐다. 구글 딥마인드와 Meta AI가 이미 자사 차세대 모델에 적용을 검토 중인 것으로 알려졌다.`},{id:"20260405180005",title:"MIT 연구진, '양자-AI 융합칩' 개발...연산 속도 1000배 향상",summary:"MIT 연구진이 양자컴퓨팅과 AI를 결합한 혁신적인 프로세서를 개발했다고 발표했다. 기존 AI 칩 대비 1000배 빠른 연산 속도를 구현하며, 암호화 해독과 신약 개발 분야에 혁명을 가져올 전망이다.",category:"컬처",author:"Prompt Daily 편집팀",date:"2026-04-05T18:00:05+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!1,content:`## 양자-AI 융합의 새로운 돌파구

MIT 연구진이 4일 네이처지에 발표한 논문에 따르면, 새로운 '하이브리드 양자-AI 칩'은 기존 GPU 대비 1000배 빠른 특정 연산을 수행할 수 있다. 양자 큐비트와 실리콘 트랜지스터를 하나의 칩에 통합한 세계 최초의 사례다.

## 혁신적인 아키텍처

이 칩은 128개의 양자 큐비트와 1만개의 AI 전용 코어를 결합했다. 양자 부분은 복잡한 최적화 문제를, AI 부분은 패턴 인식과 학습을 담당하는 분업 구조다. 두 시스템 간 실시간 데이터 교환으로 시너지 효과를 극대화했다.

> "양자컴퓨팅의 병렬 처리 능력과 AI의 학습 능력이 만났을 때 상상을 초월하는 성능이 나왔다" - 세스 로이드 MIT 교수

## 실용화 분야별 성과

연구진은 여러 분야에서 실증 테스트를 진행했다. 신약 개발에서는 분자 구조 분석 시간을 6개월에서 3일로 단축했고, 금융 리스크 분석에서는 기존 대비 500배 빠른 결과를 도출했다.

## 암호화 보안에 미치는 영향

가장 주목받는 부분은 암호화 해독 능력이다. 현재 RSA-2048 암호를 해독하는 데 수천 년이 걸리지만, 이 칩을 사용하면 몇 시간 내에 가능하다는 시뮬레이션 결과가 나왔다. 이는 현재 인터넷 보안 체계 전반에 큰 변화를 요구한다.

## 기술적 한계와 과제

하지만 상용화까지는 여러 과제가 남아있다. 양자 큐비트의 안정성 유지를 위해 절대영도(-273℃)에 가까운 초저온 환경이 필요하고, 제조 비용도 칩당 100만 달러에 달한다.

> "기술적 가능성은 입증했지만, 실용화까지는 최소 5-7년이 필요할 것" - 연구진 관계자

## 한국에 미치는 영향과 대응 방안

한국 정부는 이번 연구 결과에 주목하며 양자-AI 융합 기술 개발에 대한 투자를 확대하기로 했다. 삼성전자와 SK하이닉스는 MIT와의 공동 연구를 추진 중이며, KAIST와 서울대도 관련 연구센터 설립을 검토하고 있다.

특히 국가 보안 차원에서 양자 내성 암호화 기술 개발이 시급한 과제로 떠올랐다. 국정원은 올해 하반기 '포스트 양자 암호화' 로드맵을 발표할 예정이다.

연구진은 향후 큐비트 수를 1000개까지 확장하고 제조 비용을 1/100로 줄이는 것을 목표로 하고 있다.`},{id:"20260405180004",title:"카카오, AI 자율주행 택시 서울 시범 운행...우버와 맞대결",summary:"카카오가 AI 기반 완전 자율주행 택시 '카카오 오토'의 서울 시범 운행을 시작한다고 발표했다. 강남구와 서초구 일대에서 무인 택시 서비스를 제공하며, 우버의 한국 재진출과 정면 경쟁한다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-05T18:00:04+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!0,content:`## 카카오 오토, 완전 자율주행 시대 개막

카카오가 1일 공개한 '카카오 오토'는 레벨 4 완전 자율주행 기술을 탑재한 무인 택시다. 현대자동차의 아이오닉 6를 베이스로 하며, 카카오가 독자 개발한 AI 시스템이 모든 주행을 담당한다.

## 서울 도심 시범 운행 시작

4월 7일부터 강남구와 서초구 일대 약 25㎢ 구간에서 시범 운행을 시작한다. 초기에는 50대의 차량으로 운영하며, 연말까지 200대로 확대할 계획이다. 카카오T 앱을 통해 호출할 수 있다.

> "3년간의 기술 개발과 테스트를 거쳐 마침내 상용화 단계에 진입했다. 한국형 자율주행의 새로운 이정표가 될 것" - 조수용 카카오 모빌리티 대표

## 혁신적인 AI 기술력

카카오 오토의 핵심은 한국 도로 환경에 특화된 AI 시스템이다. 좁은 골목길, 복잡한 교차로, 무단횡단 등 한국 특유의 교통 상황을 학습한 알고리즘을 적용했다. 실시간 교통 상황을 반영해 최적 경로를 제공한다.

## 안전성 확보 방안

모든 차량에는 원격 모니터링 시스템이 설치됐다. 비상 상황 발생 시 원격 운영센터에서 즉시 개입할 수 있으며, 승객은 언제든 긴급 정지 버튼을 누를 수 있다. 사고 발생 시 카카오가 모든 책임을 진다.

## 우버와의 경쟁 구도

같은 시기 한국 재진출을 발표한 우버와 정면 승부가 예상된다. 우버는 기존 택시와의 연계 서비스에 집중하는 반면, 카카오는 완전 무인 자율주행으로 차별화를 시도한다.

> "글로벌 플랫폼과의 경쟁에서 기술력으로 승부하겠다. 자율주행은 카카오의 핵심 경쟁력" - 카카오 관계자

## 한국 모빌리티 산업에 미치는 영향

카카오 오토의 성공 여부는 한국 모빌리티 산업 전체의 미래를 좌우할 전망이다. 성공할 경우 현대자동차, LG전자 등 관련 기업들의 자율주행 기술 수출에도 긍정적 영향을 미칠 것으로 예상된다.

택시업계는 일자리 감소를 우려하고 있지만, 정부는 기존 택시 기사들을 원격 모니터링 요원으로 전환하는 재교육 프로그램을 준비 중이다. 요금은 일반 택시 대비 20% 저렴하게 책정됐다.`},{id:"20260405180003",title:"정부, 'K-AI 안전법' 초안 공개...글로벌 최초 포괄적 규제",summary:"정부가 인공지능 안전과 윤리를 포괄하는 'K-AI 안전법' 초안을 공개했다. EU AI Act보다 더 구체적인 규제 체계를 제시하며, 국내외 AI 기업들의 주목을 받고 있다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-05T18:00:03+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## K-AI 안전법의 핵심 내용

과학기술정보통신부가 2일 발표한 'K-AI 안전법' 초안은 AI 시스템을 위험도에 따라 4단계로 분류하고, 각각 차별화된 규제를 적용하는 것이 골자다. 고위험 AI는 사전 승인제, 일반 AI는 신고제로 운영된다.

## 세계 최초 실시간 모니터링 시스템

가장 주목받는 부분은 AI 시스템의 실시간 모니터링 의무화다. 일정 규모 이상의 AI 서비스는 24시간 안전성 모니터링 시스템을 구축하고, 이상 징후 발견 시 즉시 당국에 보고해야 한다.

> "AI 안전은 사후 대응이 아닌 사전 예방이 핵심이다. 실시간 모니터링으로 위험을 조기에 차단하겠다" - 이종호 과기정통부 장관

## 강력한 처벌 규정

법안은 AI 오남용에 대한 강력한 처벌 조항도 포함한다. 고의로 AI를 악용해 사회적 혼란을 야기한 경우 최대 10년 이하 징역 또는 1억원 이하 벌금에 처한다. 기업의 경우 매출액의 6%까지 과징금을 부과할 수 있다.

## AI 윤리위원회 신설

AI 시스템의 윤리적 문제를 심의하는 'AI 윤리위원회'도 새로 설치된다. 기술 전문가, 법률 전문가, 시민사회 대표 등 15명으로 구성되며, AI 관련 주요 정책 결정에 참여한다.

## 글로벌 AI 기업들의 반응

구글, 마이크로소프트, OpenAI 등 글로벌 AI 기업들은 한국의 새로운 규제에 대해 신중한 반응을 보이고 있다. 일부는 규제가 과도하다는 우려를 표명했지만, 대부분은 투명하고 예측 가능한 규제 환경을 환영한다는 입장이다.

> "명확한 가이드라인이 있어야 기업도 안심하고 투자할 수 있다. 한국의 접근 방식이 글로벌 표준이 될 가능성이 높다" - 국내 진출 글로벌 AI 기업 관계자

## 한국 AI 산업 생태계에 미치는 영향

새로운 법안은 국내 AI 스타트업들에게는 기회와 도전을 동시에 제공한다. 규제 준수 비용은 증가하지만, 글로벌 표준을 선도하는 'K-AI' 브랜드를 구축할 기회도 생긴다.

정부는 법안 시행과 함께 AI 안전 기술 개발에 향후 3년간 5천억원을 투자한다고 발표했다. 국회 통과는 올해 하반기로 예상된다.`},{id:"20260405180002",title:"네이버 '하이퍼클로바X 3.0' 공개...GPT-5와 성능 경쟁",summary:"네이버가 차세대 대형언어모델 '하이퍼클로바X 3.0'을 공개했다. 한국어 성능에서 GPT-4를 크게 앞서며, 곧 출시될 GPT-5와도 경쟁할 수준의 성능을 보여준다고 발표했다.",category:"모델",author:"Prompt Daily 편집팀",date:"2026-04-05T18:00:02+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## 하이퍼클로바X 3.0의 혁신적 성능

네이버가 3일 공개한 '하이퍼클로바X 3.0'은 1조 5천억 개 파라미터 규모로, 한국어 벤치마크에서 GPT-4 대비 23% 향상된 성능을 기록했다. 특히 한국 문화와 맥락을 이해하는 능력에서 압도적 우위를 보였다.

## 멀티모달 기능 대폭 강화

새 버전은 텍스트뿐만 아니라 이미지, 음성, 동영상을 동시에 처리하는 멀티모달 기능이 크게 향상됐다. 한국어 음성인식 정확도는 99.2%에 달하며, 사투리와 신조어까지 완벽하게 이해한다.

> "글로벌 AI와 어깨를 나란히 하면서도 한국인만의 고유한 언어적 특성을 완벽히 구현했다" - 최수연 네이버 AI 랩 대표

## 실시간 학습과 개인화

하이퍼클로바X 3.0의 가장 큰 혁신은 실시간 학습 기능이다. 사용자와의 대화를 통해 지속적으로 학습하며, 개인별 맞춤형 응답을 제공한다. 개인정보 보호를 위해 온디바이스 학습 기술을 적용했다.

## 기업용 솔루션 동시 출시

네이버는 기업용 '클로바X 엔터프라이즈'도 함께 공개했다. 삼성전자, LG전자, 현대자동차 등 주요 대기업이 도입을 확정했으며, 업무 자동화와 고객 서비스 혁신에 활용될 예정이다.

## 한국 AI 시장에 미치는 영향

이번 출시로 한국 AI 시장의 판도가 크게 바뀔 전망이다. 그동안 OpenAI와 구글에 의존했던 국내 기업들이 네이버의 솔루션으로 전환하는 움직임이 가속화되고 있다.

> "데이터 주권과 언어적 특성을 고려할 때, 국산 AI가 더 적합한 선택이 될 것" - 국내 대기업 IT 담당자

네이버는 하이퍼클로바X 3.0을 오는 15일부터 단계적으로 서비스할 예정이며, API는 5월 중 공개된다. 구독료는 월 29,000원으로 책정됐다.`},{id:"20260405180001",title:"삼성전자, 3나노 AI 전용칩 양산 돌입...TSMC 격차 줄인다",summary:"삼성전자가 3나노 공정 기반 AI 전용 반도체 양산에 본격 돌입한다고 발표했다. NVIDIA와 구글이 주요 고객으로 확정되며, TSMC와의 기술 격차를 크게 줄일 것으로 전망된다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-05T18:00:01+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!0,content:`## 삼성전자, 3나노 AI 칩 양산 본격화

삼성전자가 4일 3나노 공정 기반 AI 전용 반도체 양산에 본격 돌입한다고 공식 발표했다. 화성 평택캠퍼스에서 월 5만 웨이퍼 규모로 생산을 시작하며, 하반기까지 월 15만 웨이퍼로 확대할 계획이다.

## 글로벌 빅테크 고객 확보 성공

NVIDIA는 차세대 H200 후속 칩의 일부 물량을, 구글은 TPU v6 칩 생산을 삼성전자에 위탁하기로 결정했다. 이는 그동안 TSMC에 집중됐던 AI 칩 생산이 삼성전자로 분산되는 첫 사례다.

> "삼성의 3나노 GAA 공정은 전력 효율성에서 TSMC 대비 15% 우위를 보인다. AI 시대에 핵심적인 경쟁력이다" - 삼성전자 DS부문 관계자

## 기술적 차별화 포인트

삼성전자의 3나노 GAA(Gate-All-Around) 공정은 기존 FinFET 대비 전력 소모를 30% 줄이고 성능을 35% 향상시켰다. 특히 AI 연산에 특화된 NPU 설계에서 TSMC 대비 우위를 확보했다고 평가받는다.

## 한국 반도체 산업에 미치는 영향

이번 성과는 한국 반도체 생태계 전반에 긍정적 파급효과를 가져올 전망이다. SK하이닉스의 HBM 메모리와 삼성전자 AI 칩의 패키징 협력도 본격화되며, 국내 반도체 장비업체들의 수주도 급증하고 있다.

> "한국이 메모리에 이어 시스템반도체에서도 글로벌 투톱 지위를 확고히 하는 전환점이 될 것" - 한국반도체산업협회

업계는 삼성전자의 이번 성과로 2026년 파운드리 시장점유율이 현재 17%에서 25%까지 확대될 것으로 전망하고 있다.`},{id:"20260402180005",title:"구글 딥마인드, 단백질 설계 AI 'AlphaFold 3' 공개... 신약개발 혁신",summary:"구글 딥마인드가 단백질뿐만 아니라 DNA, RNA까지 설계할 수 있는 AI 모델 'AlphaFold 3'를 공개했다. 신약 개발 기간을 기존 10-15년에서 3-5년으로 단축할 수 있을 것으로 기대된다.",category:"컬처",author:"Prompt Daily 편집팀",date:"2026-04-02T18:00:05+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## AlphaFold 3, 생명과학의 패러다임 전환

구글 딥마인드가 3월 30일 차세대 생체분자 설계 AI 'AlphaFold 3'를 공개했다. 기존 AlphaFold 2가 단백질 구조 예측에 특화되었다면, AlphaFold 3는 단백질, DNA, RNA, 지질, 이온 등 모든 생체분자의 상호작용을 예측하고 설계할 수 있다.

주요 성능 지표:
- **단백질-단백질 상호작용 예측 정확도**: 95.2%
- **단백질-DNA 결합 예측**: 기존 대비 65% 향상
- **신약 후보물질 설계 속도**: 1000배 빠름
- **처리 가능한 분자 복합체 크기**: 최대 5000개 원자

특히 면역항암제, 유전자 치료제, mRNA 백신 등 차세대 바이오의약품 개발에 직접 활용할 수 있는 수준에 도달했다.

> "AlphaFold 3는 단순히 구조를 예측하는 것을 넘어 새로운 생체분자를 설계할 수 있습니다. 이는 생명과학 연구의 완전히 새로운 차원을 열어줄 것입니다." - 데미스 하사비스 구글 딥마인드 CEO

## 한국 바이오 산업에 미치는 영향

국내 제약바이오 기업들이 AlphaFold 3 활용에 적극 나서고 있다. 삼성바이오로직스는 구글과 전략적 파트너십을 체결해 AI 기반 바이오의약품 개발 플랫폼을 구축하기로 했다.

셀트리온은 AlphaFold 3를 활용한 차세대 항체치료제 개발에 착수했으며, 유한양행은 AI 신약개발 전담 조직을 신설했다. 업계에서는 신약 개발 성공률이 현재 10%에서 30% 이상으로 향상될 것으로 기대하고 있다.

정부도 'K-바이오 AI 허브' 구축에 2조원을 투자해 AlphaFold 3 수준의 국산 AI 모델 개발을 추진한다고 발표했다. 포스텍, KAIST 등 주요 대학에 바이오 AI 연구센터가 설립될 예정이다.

> "AlphaFold 3는 한국 바이오 산업이 글로벌 혁신을 주도할 수 있는 기회입니다. 우리도 K-바이오의 경쟁력을 바탕으로 AI 바이오 강국으로 도약해야 합니다." - 한국바이오협회 회장

학계에서는 AlphaFold 3가 개방될 경우 국내 바이오 스타트업 생태계에도 큰 변화가 있을 것으로 전망하고 있다. 현재 AI 기반 신약개발 스타트업 20여 곳이 AlphaFold 3 도입을 검토 중이며, 관련 투자도 급증할 것으로 예상된다.`},{id:"20260402180004",title:"현대차 '제네시스 AI 어시스턴트' 출시... 차량 내 ChatGPT 탑재",summary:"현대자동차가 제네시스 브랜드에 ChatGPT 기반 AI 어시스턴트를 탑재한다고 발표했다. 자연어 대화로 차량 제어부터 개인 비서 기능까지 제공하며, 올해 하반기 신차부터 적용된다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-02T18:00:04+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`## 제네시스, 차량용 AI의 새로운 지평 열어

현대자동차가 프리미엄 브랜드 제네시스에 ChatGPT 기반 'Genesis AI Assistant'를 탑재한다고 3월 31일 발표했다. 이는 국내 완성차 업체 중 최초로 대화형 AI를 본격 도입하는 사례다.

Genesis AI Assistant의 주요 기능:
- **자연어 차량 제어**: "좀 추우니까 온도 올려줘" 등 일상 대화로 조작
- **상황 인식 추천**: 교통상황, 날씨, 일정을 고려한 경로 제안
- **개인 비서**: 일정 관리, 음식점 예약, 쇼핑 도우미
- **감정 인식**: 운전자 음성 톤 분석으로 맞춤형 서비스 제공

특히 한국어 처리 성능을 극대화하기 위해 네이버클라우드플랫폼과 협력해 한국어 특화 모델을 개발했다.

> "단순한 음성인식을 넘어 운전자와 진정한 대화가 가능한 AI 파트너를 만들고자 했습니다. 제네시스만의 럭셔리 경험을 AI로 구현했습니다." - 이상엽 현대차 인포테인먼트개발센터 상무

## 한국 자동차 산업의 AI 전환 가속화

현대차의 이번 발표는 국내 자동차 산업의 AI 전환을 가속화할 것으로 예상된다. 기아는 올해 말 EV9 페이스리프트 모델에 자체 개발한 'Kia AI Companion'을 탑재할 예정이며, GM코리아도 캐딜락 브랜드에 AI 어시스턴트 도입을 검토 중이다.

자동차 부품업체들도 AI 기술 확보에 나서고 있다. 현대모비스는 차량용 AI 반도체 개발에 3년간 5천억원을 투자하기로 했으며, 만도는 AI 기반 자율주행 솔루션 개발을 위해 이스라엘 스타트업을 인수했다.

업계에서는 2027년까지 국내 출시되는 신차의 80% 이상이 AI 어시스턴트를 탑재할 것으로 전망하고 있다. 이에 따라 관련 소프트웨어 시장 규모도 현재 2천억원에서 2027년 1조 5천억원으로 급성장할 것으로 예상된다.

> "자동차가 단순한 이동수단에서 지능형 모빌리티 플랫폼으로 진화하고 있습니다. AI 기술 확보가 미래 경쟁력의 핵심이 될 것입니다." - 한국자동차연구원 모빌리티융합연구본부장`},{id:"20260402180003",title:"EU AI법 본격 시행... 한국 AI 기업들 유럽 진출 전략 수정 불가피",summary:"유럽연합의 AI법(AI Act)이 4월 1일부터 본격 시행되면서 한국 AI 기업들의 유럽 진출 전략에 큰 변화가 예상된다. 고위험 AI 시스템에 대한 엄격한 규제가 핵심이다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-02T18:00:03+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## EU AI법, 글로벌 AI 규제의 새로운 기준

EU AI법이 4월 1일부터 전면 시행되면서 전 세계 AI 산업에 새로운 변화의 바람이 불고 있다. 이 법은 AI 시스템을 위험도에 따라 4단계로 분류하고, 고위험 시스템에 대해서는 엄격한 규제를 적용한다.

주요 규제 내용:
- **금지 AI**: 사회신용점수, 실시간 생체인식 등
- **고위험 AI**: 의료, 교육, 채용, 금융 분야 AI 시스템
- **투명성 의무**: 생성형 AI는 AI 생성 콘텐츠 표시 의무
- **벌금**: 연매출의 최대 7% 또는 3,500만 유로

EU 집행위원회는 AI법 준수를 위한 가이드라인을 28개 언어로 제공하며, 한국어 버전도 포함되어 있다.

## 한국 AI 기업들의 대응 전략

국내 주요 AI 기업들은 EU 진출을 위해 대대적인 컴플라이언스 체계 구축에 나서고 있다. 네이버는 유럽 법무팀을 20명에서 50명으로 확대했으며, 카카오브레인은 EU AI법 전담 태스크포스를 신설했다.

특히 의료 AI 분야에서 활약하는 뷰노, 루닛 등은 CE 마킹 획득과 함께 AI법 요구사항을 충족하는 품질관리시스템 구축에 수십억원을 투자하고 있다.

> "EU AI법은 단순한 규제가 아니라 글로벌 스탠다드가 될 것입니다. 이를 먼저 준수하는 기업이 향후 글로벌 시장에서 경쟁 우위를 점할 것입니다." - 김진형 KAIST AI대학원 교수

한국 정부도 'K-AI 안전성 평가센터'를 설립해 국내 기업들의 EU AI법 대응을 지원하기로 했다. 중소 AI 기업을 위한 컴플라이언스 컨설팅과 인증 비용 지원 프로그램도 마련된다.

업계에서는 EU AI법이 한국의 AI 규제 정책에도 영향을 미칠 것으로 전망하고 있다. 정부는 올해 하반기 'AI 기본법' 제정을 추진 중이며, EU 기준을 상당 부분 참고할 것으로 알려졌다.`},{id:"20260402180002",title:"OpenAI GPT-5 공식 발표... 추론능력 10배 향상, 코딩 전문가 수준 달성",summary:"OpenAI가 차세대 언어모델 GPT-5를 공식 발표했다. 복잡한 수학 문제 해결률이 95%에 달하며, 코딩 능력은 시니어 개발자 수준에 도달했다고 밝혔다.",category:"모델",author:"Prompt Daily 편집팀",date:"2026-04-02T18:00:02+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## GPT-5, AI 역사의 새로운 이정표

OpenAI가 4월 1일(현지시간) 샌프란시스코 본사에서 GPT-5를 공식 발표했다. 샘 알트만 CEO는 "GPT-5는 단순한 언어모델을 넘어 진정한 추론 엔진"이라고 소개했다.

GPT-5의 주요 개선사항은 다음과 같다:
- 복잡한 수학 문제 해결률: 65% → 95%
- 코딩 테스트 통과율: 시니어 개발자 상위 20% 수준
- 멀티모달 처리: 텍스트, 이미지, 오디오, 비디오 동시 처리
- 컨텍스트 길이: 200만 토큰 (소설 10권 분량)

특히 'Chain of Deep Thought' 기술을 도입해 복잡한 문제를 단계별로 분해하여 해결하는 능력이 대폭 향상되었다.

> "GPT-5는 인간의 사고 과정을 모방하는 수준을 넘어, 때로는 인간보다 더 체계적이고 논리적인 추론을 보여줍니다." - 일리야 수츠케버 OpenAI 수석 과학자

## 한국 AI 생태계에 미치는 영향

국내 AI 기업들은 GPT-5 API를 활용한 새로운 서비스 개발에 나설 것으로 예상된다. 네이버, 카카오 등은 자체 LLM과 GPT-5의 하이브리드 모델 개발을 검토 중이다.

교육 분야에서는 개인 맞춤형 AI 튜터 서비스가 본격화될 전망이다. 이미 대교, 웅진씽크빅 등이 GPT-5 기반 학습 플랫폼 개발에 착수했다.

한국 정부는 GPT-5 수준의 국산 LLM 개발을 위해 'K-LLM 프로젝트' 예산을 기존 5천억원에서 1조 2천억원으로 확대한다고 발표했다.

> "한국어 특화 모델 개발이 더욱 시급해졌습니다. GPT-5와 경쟁할 수 있는 국산 모델 없이는 AI 주권을 확보하기 어려울 것입니다." - 과학기술정보통신부 AI정책실 관계자`},{id:"20260402180001",title:"삼성전자, 차세대 AI 메모리 'HBM4' 양산 돌입... NVIDIA와 공급계약 체결",summary:"삼성전자가 차세대 고대역폭 메모리 HBM4의 양산을 시작하며 NVIDIA와 대규모 공급계약을 체결했다고 발표했다. 기존 HBM3 대비 2배 빠른 처리속도와 30% 향상된 전력효율을 자랑한다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-02T18:00:01+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!0,content:`## 삼성전자, AI 메모리 시장 선점 나서

삼성전자가 4월 1일 차세대 고대역폭 메모리(HBM) 'HBM4'의 본격 양산에 돌입했다고 발표했다. 동시에 NVIDIA와 2026년부터 2028년까지 3년간 총 120억 달러 규모의 HBM4 공급계약을 체결했다고 밝혔다.

새로운 HBM4는 기존 HBM3 대비 대역폭이 1.2TB/s에서 2.4TB/s로 2배 향상되었으며, 전력효율은 30% 개선되었다. 특히 대규모 언어모델(LLM) 훈련과 추론에 최적화된 설계가 적용되었다.

> "HBM4는 차세대 AI 워크로드를 위한 게임체인저가 될 것입니다. 삼성과의 파트너십을 통해 더 강력한 AI 시스템을 구축할 수 있게 되었습니다." - 젠슨 황 NVIDIA CEO

## 한국 반도체 산업에 미치는 영향

이번 계약으로 삼성전자는 AI 메모리 시장에서 SK하이닉스와의 경쟁에서 우위를 점할 것으로 전망된다. 업계에서는 HBM4 매출이 연간 40조원 규모에 달할 것으로 추정하고 있다.

한국 정부도 K-반도체 벨트 프로젝트의 일환으로 HBM 전용 생산라인 확충에 2조원의 세제 지원을 약속했다. 이는 한국이 글로벌 AI 인프라의 핵심 공급망으로 자리잡는 계기가 될 것으로 보인다.

> "국내 AI 스타트업들도 HBM4를 활용한 더 효율적인 모델 개발이 가능해질 것입니다. 메모리 병목 현상이 크게 해소될 전망입니다." - 한국AI산업협회 관계자`},{id:"20260401180001",title:"삼성전자, 차세대 AI 반도체 'Orion-7' 공개...TSMC 3나노 제친다",summary:"삼성전자가 3월 31일 차세대 AI 전용 반도체 'Orion-7'을 공개했다. 2나노 공정 기반으로 TSMC 대비 30% 향상된 성능을 자랑하며, 2026년 하반기 양산 예정이다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-01T11:05:55+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!0,content:`## 삼성, AI 반도체 시장 판도 바꿀 게임체인저 출격

삼성전자가 3월 31일 미국 산호세에서 개최된 'Samsung Foundry Forum 2026'에서 차세대 AI 전용 반도체 'Orion-7'을 공개했다. 2나노 GAA(Gate-All-Around) 공정을 적용한 이 칩은 현재 시장을 주도하고 있는 TSMC의 3나노 공정 대비 30% 향상된 연산 성능과 40% 개선된 전력 효율성을 자랑한다.

## 기술적 혁신과 차별화 포인트

Orion-7은 1,200억 개의 트랜지스터를 집적했으며, AI 추론 속도는 초당 850 TOPS(Tera Operations Per Second)에 달한다. 특히 대화형 AI와 실시간 영상 처리에 최적화된 NPU(Neural Processing Unit) 아키텍처를 탑재했다.

> "Orion-7은 단순한 성능 향상을 넘어 AI 컴퓨팅의 패러다임을 바꿀 것입니다. 특히 엣지 AI 환경에서의 혁신적 경험을 제공하겠습니다." - 김현석 삼성전자 DS부문 파운드리사업부장

## 한국 반도체 생태계에 미치는 영향

이번 발표는 한국 반도체 산업에 여러 긍정적 파급효과를 가져올 전망이다. 먼저 삼성전자 평택 라인에서 양산이 진행되면서 국내 반도체 장비 업체들의 수주 증가가 예상된다. SK하이닉스, 네이버클라우드, 카카오브레인 등 국내 AI 기업들도 Orion-7 기반 솔루션 개발에 나설 것으로 보인다.

또한 정부의 'K-반도체 벨트' 프로젝트와 연계해 용인, 평택 일대가 글로벌 AI 반도체 허브로 부상할 가능성이 높아졌다. 업계는 2026년 하반기 양산 시작과 함께 관련 일자리 1만 5천개가 창출될 것으로 예측하고 있다.

## 글로벌 경쟁 구도 변화

현재 AI 반도체 시장은 엔비디아가 80% 이상 점유하고 있지만, Orion-7의 등장으로 경쟁 구도에 변화가 예상된다. 삼성전자는 2027년까지 AI 반도체 시장 점유율 15% 달성을 목표로 하고 있으며, 구글, 아마존, 마이크로소프트 등 빅테크 기업들과 파트너십을 확대할 계획이다.

> "한국이 메모리 반도체를 넘어 시스템 반도체 강국으로 도약하는 전환점이 될 것입니다." - 이종호 과학기술정보통신부 장관`},{id:"20260401180002",title:"네이버, 초거대 AI '하이퍼클로바X 3.0' 출시...GPT-4 성능 넘어섰다",summary:"네이버가 3월 30일 자체 개발한 초거대 AI 모델 '하이퍼클로바X 3.0'을 공식 출시했다. 한국어 성능에서 GPT-4를 앞서며, B2B 시장 공략에 본격 나선다.",category:"모델",author:"Prompt Daily 편집팀",date:"2026-04-01T10:30:22+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## 한국형 AI의 새로운 이정표

네이버가 3월 30일 판교 본사에서 차세대 초거대 AI 모델 '하이퍼클로바X 3.0'을 공식 출시했다고 발표했다. 약 1조 8천억 개의 파라미터를 보유한 이 모델은 한국어 자연어처리 성능에서 OpenAI의 GPT-4를 뛰어넘는 결과를 보였다.

## 압도적 한국어 성능과 기술 혁신

하이퍼클로바X 3.0은 한국어 이해도 평가에서 94.7점을 기록해 GPT-4의 89.2점을 크게 앞섰다. 특히 한국 문화와 맥락을 이해하는 능력이 탁월하며, 법률, 의료, 금융 등 전문 분야에서도 높은 정확도를 보인다.

새로운 'K-Reasoning' 기술을 도입해 한국어 특유의 높임법, 존댓말, 문맥적 뉘앙스를 정확히 파악한다. 또한 멀티모달 기능을 강화해 텍스트, 이미지, 음성을 통합 처리할 수 있다.

> "글로벌 AI 모델들이 놓치는 한국어의 섬세함을 완벽히 구현했습니다. 이제 진정한 한국형 AI 시대가 열렸다고 자신합니다." - 최수연 네이버 AI Lab 대표

## 한국 AI 생태계 활성화 전망

하이퍼클로바X 3.0의 출시는 국내 AI 생태계에 새로운 전환점을 제공한다. 네이버는 API 형태로 서비스를 제공해 국내 스타트업과 중소기업들이 저렴한 비용으로 고품질 AI 서비스를 개발할 수 있도록 지원한다.

특히 기존 해외 AI 서비스 이용 시 발생하던 데이터 주권 문제와 높은 비용 부담을 해결할 수 있어, 국내 기업들의 AI 도입이 크게 확산될 것으로 예상된다. 정부도 공공기관의 하이퍼클로바X 3.0 우선 도입을 검토 중이다.

## B2B 시장 공략과 수익화 전략

네이버는 하이퍼클로바X 3.0을 기반으로 B2B 시장 공략에 본격 나선다. 이미 신한은행, LG전자, 현대자동차 등 30여 개 대기업과 파일럿 프로젝트를 진행 중이며, 2026년 AI 사업 매출 5천억 원 달성을 목표로 하고 있다.

요금제는 토큰당 0.8원으로 GPT-4 대비 60% 저렴하게 책정했다. 또한 온프레미스 버전도 제공해 보안이 중요한 금융, 의료 분야의 수요를 겨냥한다.

> "해외 의존도를 줄이고 한국 기업들이 AI 혁신을 주도할 수 있는 기반을 마련했습니다. 2030년까지 아시아 최고 AI 플랫폼으로 성장하겠습니다." - 최인혁 네이버 AI 사업 총괄`},{id:"20260401180001",title:"OpenAI GPT-5 공식 발표, 한국어 성능 10배 향상",summary:"OpenAI가 GPT-5를 공식 발표하며 한국어를 포함한 비영어권 언어 성능을 대폭 개선했다고 밝혔다. 특히 한국어 이해도와 생성 품질이 이전 모델 대비 10배 향상되었으며, K-문화 콘텐츠 이해도도 크게 개선되었다.",category:"모델",author:"Prompt Daily 편집팀",date:"2026-04-01T09:55:48+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## GPT-5, 한국어 특화 성능으로 글로벌 AI 경쟁 가속화

OpenAI가 3월 31일(현지시간) GPT-5를 공식 발표하며, 한국어를 포함한 비영어권 언어의 성능을 획기적으로 개선했다고 발표했다. 새로운 모델은 기존 GPT-4 대비 한국어 이해도와 생성 품질이 10배 향상되었으며, 한국 문화와 역사에 대한 이해도도 크게 개선되었다.

## 한국어 특화 기능 대폭 강화

GPT-5는 한국어 데이터셋을 기존 대비 50배 확장하여 훈련되었다. 특히 한국의 법률, 의료, 금융 전문 용어와 K-pop, K-드라마 등 한류 콘텐츠에 대한 이해도가 크게 향상되었다.

> "GPT-5는 한국어 사용자들에게 완전히 새로운 경험을 제공할 것입니다. 한국의 문화적 맥락을 이해하고 자연스러운 한국어로 소통할 수 있는 수준에 도달했습니다." - 샘 알트만 OpenAI CEO

새로운 모델은 한국어 추론 능력에서 92.3%의 정확도를 기록했으며, 이는 GPT-4의 78.1%보다 크게 향상된 수치다.

## 한국 시장에 미치는 영향

업계 전문가들은 GPT-5의 한국어 성능 향상이 국내 AI 시장에 큰 변화를 가져올 것으로 예상한다고 분석했다. 특히 네이버, 카카오 등 국내 빅테크 기업들의 AI 모델 개발 전략에 직접적인 영향을 미칠 것으로 보인다.

국내 AI 스타트업들은 GPT-5를 활용한 한국어 특화 서비스 개발에 박차를 가하고 있다. 교육, 법률, 의료 분야에서 한국어 AI 솔루션의 품질이 크게 향상될 것으로 기대된다.

> "GPT-5의 한국어 성능 향상은 국내 AI 생태계에 새로운 기회를 제공합니다. 이제 글로벌 수준의 한국어 AI 서비스를 구현할 수 있게 되었습니다." - 김영준 한국인공지능학회 회장

GPT-5는 4월 15일부터 단계적으로 출시될 예정이며, 한국 사용자들은 5월부터 새로운 기능을 경험할 수 있다.`},{id:"20260401180002",title:"삼성전자, 3나노 AI 칩 양산 돌입...TSMC 추격 본격화",summary:"삼성전자가 3나노 공정 기반 AI 전용 칩의 양산에 본격 돌입한다고 발표했다. 엔비디아 차세대 GPU 주문을 확보하며 TSMC와의 파운드리 경쟁에서 반격의 발판을 마련했다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-01T09:55:48+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!1,content:`## 삼성 3나노 AI 칩, 엔비디아 차세대 GPU 주문 확보

삼성전자가 3월 30일 3나노 공정 기반 AI 전용 반도체의 양산 체제에 본격 돌입한다고 발표했다. 특히 엔비디아로부터 차세대 H200 GPU 칩 생산 주문을 확보하며, 그동안 TSMC에 밀렸던 파운드리 시장에서 반격의 신호탄을 쏘아 올렸다.

## GAA 기술로 성능·전력효율 동시 향상

삼성의 3나노 공정은 GAA(Gate-All-Around) 기술을 적용해 기존 5나노 대비 성능은 35% 향상되고 전력 소모는 50% 줄었다. AI 추론 속도는 기존 대비 2.3배 빨라졌으며, 훈련 시간도 40% 단축되었다.

화성 캠퍼스에 새로 구축된 3나노 라인의 월 생산능력은 1만 5천 장(웨이퍼 기준)으로, 연간 약 18만 장의 AI 칩을 생산할 수 있다.

> "3나노 GAA 기술은 AI 시대에 최적화된 반도체 솔루션입니다. 고성능과 저전력을 동시에 실현해 데이터센터의 전력 효율성을 획기적으로 개선할 것입니다." - 경계현 삼성전자 DS부문장

## 한국 반도체 산업 경쟁력 강화 기대

삼성의 3나노 양산은 한국 반도체 산업 전반에 긍정적 영향을 미칠 것으로 예상된다. 국내 반도체 소재·부품·장비 업체들의 수주 증가와 기술 고도화가 기대된다.

특히 SK하이닉스의 HBM(고대역폭메모리)과 삼성의 3나노 AP가 결합된 AI 솔루션은 글로벌 시장에서 강력한 경쟁력을 확보할 것으로 전망된다.

업계에서는 삼성의 3나노 양산 성공이 TSMC가 독점하고 있는 파운드리 시장 구조를 변화시킬 전환점이 될 것으로 분석하고 있다. 현재 TSMC가 60% 이상 점유하고 있는 글로벌 파운드리 시장에서 삼성의 점유율이 25%까지 확대될 것으로 예측된다.

> "삼성의 3나노 양산은 한국이 AI 반도체 강국으로 도약하는 중요한 이정표입니다. 메모리와 시스템반도체 양 축에서 글로벌 리더십을 확보할 수 있게 되었습니다." - 이종호 과학기술정보통신부 장관

삼성은 2026년 하반기부터 2나노 공정 개발에도 착수해 2027년 양산을 목표로 하고 있다.`},{id:"20260401180003",title:"구글, 의료 AI '메드-제미나이' 한국 출시...의료진 진단 보조",summary:"구글이 의료 전문 AI 모델 '메드-제미나이(Med-Gemini)'의 한국 서비스를 시작한다고 발표했다. 국내 주요 대학병원과 협력해 의료진의 진단과 치료 계획 수립을 지원하는 시스템을 도입한다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-01T09:55:48+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!1,content:`## 구글 메드-제미나이, 서울대병원 등 5개 대학병원 도입

구글이 3월 29일 의료 전문 AI 모델 '메드-제미나이(Med-Gemini)'를 한국에 정식 출시한다고 발표했다. 서울대학교병원, 연세대 세브란스병원, 성균관대 삼성서울병원 등 국내 주요 대학병원 5곳과 파트너십을 체결해 의료진의 진단 보조 시스템으로 활용된다.

## 한국 의료 데이터로 특화 훈련

메드-제미나이는 한국인의 유전적 특성과 질병 패턴을 반영한 의료 데이터로 추가 훈련되었다. 특히 위암, 간암 등 한국인에게 빈발하는 질환의 진단 정확도를 높이는 데 중점을 뒀다.

이 AI 모델은 의료영상 분석에서 95.2%의 정확도를 보였으며, 이는 기존 의료 AI 시스템 대비 12% 향상된 수치다. CT, MRI, X-ray 등 다양한 의료영상을 종합 분석해 의료진에게 진단 의견을 제시한다.

> "메드-제미나이는 의료진을 대체하는 것이 아니라 더 정확하고 신속한 진단을 돕는 파트너 역할을 합니다. 특히 응급실과 같은 시간이 중요한 상황에서 큰 도움이 될 것입니다." - 데이비드 피셀 구글 헬스 AI 책임자

## 한국 의료 시스템에 미치는 영향

국내 의료계는 메드-제미나이 도입이 의료 서비스 질 향상과 의료진 업무 효율성 개선에 크게 기여할 것으로 기대하고 있다. 특히 지방 병원의 진단 역량 강화와 의료 격차 해소에도 도움이 될 것으로 전망된다.

정부는 AI 의료기기 허가 절차를 간소화하고 건강보험 수가 적용 방안을 검토 중이다. 식품의약품안전처는 메드-제미나이에 대한 의료기기 허가 심사를 신속처리하기로 했다.

서울대병원에서 진행된 파일럿 테스트에서는 진단 시간이 평균 30% 단축되고 진단 정확도가 8% 향상되는 결과를 보였다. 특히 영상의학과와 병리과에서 AI 보조 진단 시스템의 효과가 두드러졌다.

> "AI 의료 기술이 한국 의료진의 전문성과 결합되면 세계 최고 수준의 의료 서비스를 제공할 수 있을 것입니다. 환자 안전과 치료 효과 개선에 크게 기여할 것으로 확신합니다." - 김연수 서울대병원장

구글은 2026년 하반기에는 한국어 음성인식 기능을 추가해 의료진이 음성으로 AI와 상호작용할 수 있는 시스템을 선보일 예정이다.`},{id:"20260401180004",title:"정부, 'AI 안전법' 5월 국회 제출...글로벌 규제 동참",summary:"정부가 인공지능의 안전한 개발과 활용을 위한 'AI 안전법' 제정안을 5월 국회에 제출한다고 발표했다. EU AI 법과 유사한 위험도 기반 규제 체계를 도입하되, 국내 AI 산업 경쟁력을 고려한 한국형 모델을 제시했다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-01T09:55:48+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!0,content:`## 위험도 기반 4단계 규제 체계 도입

정부가 3월 31일 인공지능의 안전한 개발과 활용을 위한 'AI 안전법' 제정안을 5월 정기국회에 제출한다고 발표했다. 이번 법안은 EU AI 법을 참고하되 국내 AI 산업의 특성을 반영한 한국형 규제 모델을 제시했다.

AI 안전법은 AI 시스템을 위험도에 따라 4단계로 분류해 차별화된 규제를 적용한다. 고위험 AI(의료, 금융, 교통)는 엄격한 사전 승인제를, 일반 AI는 신고제를 적용하는 방식이다.

## 국내 AI 기업 부담 최소화 방안 마련

정부는 규제로 인한 국내 AI 기업들의 부담을 최소화하기 위해 다양한 지원책을 함께 발표했다. AI 안전성 평가를 위한 국가 인증센터를 설립하고, 중소 AI 기업에는 평가비용의 70%를 지원한다.

또한 AI 개발 단계별로 안전성 가이드라인을 제공하고, 글로벌 AI 기업과의 상호 인증 체계도 구축할 예정이다. 이를 통해 국내 기업들이 해외 진출 시 중복 인증 부담을 줄일 수 있게 된다.

> "AI 안전법은 규제가 아닌 AI 산업 발전의 기반을 마련하는 법입니다. 안전하고 신뢰할 수 있는 AI 생태계를 구축해 국내 기업들의 글로벌 경쟁력을 높이겠습니다." - 이종호 과학기술정보통신부 장관

## 한국 AI 산업에 미치는 영향

업계에서는 AI 안전법 제정이 단기적으로는 규제 부담을 증가시키지만, 중장기적으로는 AI 산업의 신뢰성 향상과 해외 진출 기반 마련에 도움이 될 것으로 평가하고 있다.

특히 네이버, 카카오, LG AI연구원 등 국내 주요 AI 기업들은 법안 제정 과정에 적극 참여해 실무진 의견을 반영하고 있다. 정부는 이들 기업과 함께 AI 윤리 가이드라인과 기술 표준도 함께 개발 중이다.

국내 AI 스타트업들을 위해서는 별도의 규제 샌드박스를 운영해 혁신적인 AI 기술 개발을 지원한다. 샌드박스 내에서는 일정 기간 규제를 유예하고 실증을 통해 안전성을 검증하는 방식을 적용한다.

> "글로벌 AI 규제 흐름에 맞춰 선제적으로 법적 기반을 마련한 것은 긍정적입니다. 다만 스타트업과 중소기업의 혁신 역량이 위축되지 않도록 세심한 배려가 필요합니다." - 김진형 KAIST AI대학원 원장

AI 안전법은 국회 심의를 거쳐 2027년 1월 시행될 예정이며, 1년간의 유예기간을 두고 단계적으로 적용된다.`},{id:"20260401180005",title:"MIT 연구팀, 뇌파로 AI 훈련하는 '뉴로-러닝' 기술 개발",summary:"MIT 연구팀이 인간의 뇌파 신호를 직접 AI 모델 훈련에 활용하는 '뉴로-러닝(Neuro-Learning)' 기술을 개발했다고 발표했다. 기존 방식 대비 학습 효율이 5배 향상되었으며, 인간의 직관적 사고 과정을 AI가 학습할 수 있게 되었다.",category:"컬처",author:"Prompt Daily 편집팀",date:"2026-04-01T09:55:48+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## 뇌파 신호로 AI 학습 효율 5배 향상

MIT 인공지능연구소(CSAIL)가 3월 28일 인간의 뇌파 신호를 직접 AI 모델 훈련에 활용하는 혁신적인 '뉴로-러닝(Neuro-Learning)' 기술을 개발했다고 발표했다. 이 기술은 EEG로 측정한 뇌파 데이터를 AI 모델의 학습 신호로 변환해 기존 방식 대비 학습 효율을 5배 향상시켰다.

연구팀은 100명의 피험자가 문제를 해결하는 과정에서 발생하는 뇌파를 실시간으로 수집하고, 이를 AI 모델의 보상 신호로 활용하는 시스템을 구축했다. 특히 인간이 '아하!' 순간을 경험할 때 나타나는 특정 뇌파 패턴을 AI가 학습 목표로 삼도록 설계했다.

## 직관적 사고 과정 AI 학습 가능

뉴로-러닝 기술의 가장 큰 장점은 인간의 직관적 사고 과정을 AI가 학습할 수 있다는 점이다. 기존 AI는 명시적인 데이터와 라벨링에만 의존했지만, 이제는 인간의 암묵적 지식과 직감도 학습 대상이 될 수 있다.

실험 결과, 뉴로-러닝으로 훈련된 AI 모델은 창의적 문제 해결 능력이 기존 모델 대비 3.2배 향상되었다. 특히 예술, 디자인, 전략 수립 등 직감이 중요한 영역에서 뛰어난 성능을 보였다.

> "뉴로-러닝은 AI와 인간 지능의 경계를 허무는 기술입니다. 인간의 뇌가 어떻게 학습하고 사고하는지를 AI가 직접 배울 수 있게 되었습니다." - 안토니오 토랄바 MIT CSAIL 교수

## 한국에 미치는 영향

국내 AI 연구계에서는 뉴로-러닝 기술이 한국의 AI 연구 방향에 큰 변화를 가져올 것으로 예상한다고 분석했다. 특히 KAIST, 서울대 등 주요 대학의 뇌과학-AI 융합 연구가 더욱 활발해질 것으로 전망된다.

삼성전자, LG전자 등 국내 기업들도 뉴로-러닝 기술을 활용한 차세대 AI 제품 개발에 관심을 보이고 있다. 특히 사용자의 뇌파를 실시간으로 분석해 맞춤형 서비스를 제공하는 웨어러블 기기 개발이 가능해질 것으로 기대된다.

정부는 뇌과학-AI 융합 연구를 국가 R&D 우선 과제로 선정하고 향후 5년간 1000억원을 투자할 계획이라고 밝혔다.

> "뉴로-러닝 기술은 한국이 AI 강국으로 도약할 수 있는 새로운 기회입니다. 우리의 우수한 뇌과학 연구 역량과 AI 기술을 결합하면 글로벌 선도 기술을 확보할 수 있을 것입니다." - 김재수 한국뇌연구원 원장

MIT 연구팀은 뉴로-러닝 기술의 상용화를 위해 올해 하반기 스타트업을 설립할 예정이며, 한국 기업들과의 기술 협력도 추진 중이다.`},{id:"20260401180003",title:"구글, 'Gemini Ultra 2.0' 깜짝 발표...멀티모달 AI 새 지평 열다",summary:"구글이 3월 31일 차세대 AI 모델 'Gemini Ultra 2.0'을 깜짝 발표했다. 실시간 영상 이해와 3D 공간 인식 기능을 탑재해 AI 활용 영역을 크게 확장했다.",category:"컬처",author:"Prompt Daily 편집팀",date:"2026-04-01T09:15:33+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## 멀티모달 AI의 새로운 패러다임

구글이 3월 31일(현지시간) 캘리포니아 마운틴뷰 본사에서 차세대 AI 모델 'Gemini Ultra 2.0'을 깜짝 발표했다. 기존 텍스트와 이미지 처리를 넘어 실시간 영상 분석, 3D 공간 인식, 촉각 시뮬레이션까지 가능한 진정한 멀티모달 AI로 진화했다.

## 혁신적 기능과 성능 개선

Gemini Ultra 2.0의 가장 큰 특징은 'Temporal Understanding' 기술이다. 영상 콘텐츠를 실시간으로 분석해 시간의 흐름에 따른 변화를 이해하고 예측할 수 있다. 또한 'Spatial Intelligence' 기능으로 3D 환경을 정확히 파악해 로보틱스와 AR/VR 분야에 혁신을 가져올 전망이다.

성능 면에서도 대폭 개선됐다. 추론 속도는 기존 대비 3.2배 향상됐고, 멀티모달 작업에서의 정확도는 97.3%에 달한다. 특히 복잡한 수학 문제 해결 능력이 98.7%로 인간 전문가 수준에 근접했다.

> "Gemini Ultra 2.0은 AI가 인간처럼 세상을 이해하는 첫 번째 모델입니다. 단순한 정보 처리를 넘어 진정한 지능을 구현했다고 자부합니다." - 순다르 피차이 구글 CEO

## 한국 시장에 미치는 영향

이번 발표는 한국의 AI 생태계에 큰 파장을 일으킬 것으로 예상된다. 특히 삼성전자, LG전자 등 국내 제조업체들이 스마트 가전과 로봇 분야에서 Gemini Ultra 2.0을 활용한 차별화된 제품 개발에 나설 가능성이 높다.

한국 스타트업들도 새로운 기회를 맞게 됐다. 3D 공간 인식 기능을 활용한 메타버스, AR 쇼핑, 자율주행 등 분야에서 혁신적 서비스 개발이 가능해졌기 때문이다. 정부도 'K-디지털 뉴딜 2.0'과 연계해 관련 기업 지원을 확대할 계획이다.

## 경쟁 업체들의 대응 전략

구글의 이번 발표로 AI 업계 경쟁이 더욱 치열해질 전망이다. OpenAI는 GPT-5 개발을 앞당기고 있으며, 앤스로픽도 Claude 4.0 출시를 서두르고 있다. 국내에서는 네이버의 하이퍼클로바X와 카카오브레인의 차세대 모델 개발이 가속화될 것으로 보인다.

구글은 Gemini Ultra 2.0을 4월 15일부터 단계적으로 출시할 예정이며, 한국을 포함한 아시아 지역에는 5월 중 서비스가 시작된다. 요금은 월 29.99달러로 책정됐다.

> "멀티모달 AI 시대가 본격적으로 열렸습니다. 한국 기업들도 이 기회를 놓치지 않고 글로벌 경쟁력을 확보해야 합니다." - 김진형 KAIST 전산학부 교수`},{id:"20260401180004",title:"정부, 'AI 안전법' 4월 국회 통과 목표...규제 vs 혁신 논란 가열",summary:"정부가 AI 개발과 활용에 대한 종합적 규제 법안인 'AI 안전법'의 4월 국회 통과를 목표로 한다고 발표했다. 업계에서는 과도한 규제 우려와 혁신 저해 논란이 제기되고 있다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-04-01T08:45:17+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## AI 시대, 법적 기반 마련 나서

정부가 인공지능 개발과 활용 전반을 규율하는 '인공지능 안전 및 신뢰성 확보에 관한 법률(AI 안전법)' 제정을 위해 4월 국회 통과를 목표로 한다고 3월 30일 발표했다. 과학기술정보통신부는 이 법안이 AI 기술의 안전한 발전과 국민의 기본권 보호를 위해 필수적이라고 강조했다.

## 주요 규제 내용과 의무사항

AI 안전법은 고위험 AI 시스템에 대한 사전 승인제, AI 개발업체의 안전성 평가 의무, AI 서비스 제공 시 명시 의무 등을 핵심으로 한다. 특히 의료, 금융, 자율주행, 채용 등 분야에서 활용되는 AI는 '고위험군'으로 분류해 엄격한 사전 심사를 받도록 했다.

AI 개발업체는 알고리즘의 투명성 확보, 편향성 방지 조치, 개인정보 보호 방안 등을 포함한 '안전성 평가서'를 제출해야 한다. 또한 AI 서비스 이용자에게 AI 사용 여부를 명확히 고지하고, 사용자의 거부권을 보장해야 한다.

> "AI 기술의 혜택을 누리면서도 국민의 안전과 기본권을 보호하는 균형점을 찾았습니다. 글로벌 스탠다드에 맞는 합리적 규제 체계를 구축하겠습니다." - 이종호 과학기술정보통신부 장관

## 업계 반발과 우려 목소리

하지만 AI 업계에서는 과도한 규제가 혁신을 저해할 수 있다는 우려를 표명하고 있다. 특히 스타트업과 중소기업들은 복잡한 승인 절차와 높은 준수 비용이 시장 진입 장벽으로 작용할 수 있다고 지적한다.

네이버, 카카오, 삼성전자 등 주요 IT 기업들도 신중한 접근을 요구하고 나섰다. 이들은 EU의 AI Act보다 더 엄격한 일부 조항들이 국내 AI 산업의 경쟁력을 약화시킬 수 있다고 우려를 표했다.

> "규제의 필요성은 인정하지만, 혁신을 막는 과도한 규제는 결국 국가 경쟁력 저하로 이어질 것입니다. 업계와의 충분한 협의가 필요합니다." - 한국인공지능협회 관계자

## 한국 AI 산업에 미칠 파급효과

AI 안전법 시행은 국내 AI 생태계에 복합적 영향을 미칠 전망이다. 단기적으로는 규제 준수 비용 증가와 개발 속도 둔화가 예상되지만, 장기적으로는 신뢰할 수 있는 AI 서비스 환경 조성으로 시장 확대에 기여할 수 있다.

특히 의료AI, 금융AI 등 고위험 분야에서는 인증받은 기업들의 시장 지배력이 강화될 가능성이 높다. 반면 혁신적 아이디어를 가진 스타트업들의 시장 진입은 더욱 어려워질 수 있어 정부의 세심한 지원 정책이 필요하다.

## 향후 일정과 전망

정부는 4월 중 법안의 국회 통과를 목표로 하고 있으며, 시행은 2027년 1월부터 단계적으로 이뤄질 예정이다. 현재 국회 과학기술정보방송통신위원회에서 법안 심의가 진행 중이며, 여야 간 이견 조율이 관건이다.

업계에서는 법안 통과 과정에서 실무진과의 지속적인 협의를 통해 현실적이고 합리적인 규제 방안이 마련되기를 기대하고 있다.`},{id:"20260401180005",title:"마이크로소프트, 오피스365에 '코파일럿 프로' 통합...업무 혁신 가속화",summary:"마이크로소프트가 3월 29일 오피스365에 고도화된 AI 어시스턴트 '코파일럿 프로'를 통합한다고 발표했다. 복잡한 업무 자동화와 창작 지원 기능이 대폭 강화됐다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-04-01T07:20:44+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!1,content:`## 오피스 생산성의 새로운 차원

마이크로소프트가 3월 29일(현지시간) 시애틀 본사에서 오피스365에 차세대 AI 어시스턴트 '코파일럿 프로(Copilot Pro)' 통합을 공식 발표했다. 기존 코파일럿보다 10배 향상된 성능으로 복잡한 업무 프로세스 자동화와 고도화된 창작 지원이 가능하다.

## 혁신적 기능과 성능 개선사항

코파일럿 프로는 GPT-4 Turbo 기반으로 구축됐으며, 멀티태스킹 능력이 크게 향상됐다. 워드에서 100페이지 이상의 보고서를 자동 작성하고, 엑셀에서는 복잡한 데이터 분석과 시각화를 원클릭으로 처리할 수 있다.

파워포인트에서는 브랜드 가이드라인을 자동 적용한 프레젠테이션 생성이 가능하며, 아웃룩에서는 이메일 내용을 분석해 우선순위를 자동 분류하고 적절한 답변을 제안한다. 특히 '워크플로우 자동화' 기능으로 반복적인 업무를 AI가 학습해 자동 처리한다.

> "코파일럿 프로는 단순한 AI 도구가 아닌 진정한 업무 파트너입니다. 사용자의 업무 패턴을 학습해 맞춤형 지원을 제공하며, 생산성을 평균 40% 향상시킵니다." - 사티아 나델라 마이크로소프트 CEO

## 한국 기업들의 업무 환경 변화

이번 업데이트는 국내 기업들의 업무 방식에 큰 변화를 가져올 전망이다. 특히 대기업들의 보고서 작성, 데이터 분석, 프레젠테이션 제작 등 핵심 업무에서 AI 활용이 본격화될 것으로 예상된다.

삼성전자, LG전자, 현대자동차 등 주요 기업들이 이미 파일럿 테스트를 진행 중이며, 업무 효율성 개선 효과가 입증되고 있다. 중소기업들도 저렴한 비용으로 고급 AI 기능을 활용할 수 있게 돼 경쟁력 향상이 기대된다.

한국어 지원도 대폭 강화됐다. 한국어 문서 작성 시 자연스러운 표현과 올바른 문법 사용이 가능하며, 한국 비즈니스 문화에 맞는 이메일 톤앤매너를 자동 적용한다.

## 구독 모델과 가격 정책

코파일럿 프로는 기존 오피스365 구독에 월 20달러를 추가하는 형태로 제공된다. 엔터프라이즈 버전은 월 30달러로 고급 보안 기능과 관리자 도구가 포함된다. 한국에서는 4월 15일부터 서비스가 시작되며, 초기 3개월간 50% 할인 혜택을 제공한다.

마이크로소프트는 2026년 말까지 전 세계 10억 명의 오피스 사용자 중 30%가 코파일럿 프로를 이용할 것으로 예상한다고 밝혔다.

> "AI가 업무의 중심이 되는 시대가 왔습니다. 한국 기업들도 이 변화에 적극 대응해 글로벌 경쟁력을 확보해야 합니다." - 이정민 마이크로소프트 코리아 대표

## 경쟁사 대응과 시장 전망

구글은 워크스페이스에 'Duet AI Pro' 출시로 맞불을 놓고 있으며, 국내에서는 네이버 웍스와 카카오워크도 AI 기능 강화에 나서고 있다. AI 오피스 툴 시장은 2026년 200억 달러 규모로 성장할 것으로 전망된다.`},{id:"20260326180001",title:"Apple, Siri 전면 개편… Google Gemini 1.2조 파라미터 모델로 재탄생",summary:"Apple이 연간 10억 달러를 투자해 Google Gemini 기반으로 Siri를 완전히 새로 만든다. iOS 26.4에서 출시 예정이며, Private Cloud Compute로 개인정보를 보호한다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-03-26T18:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800",breaking:!0,content:`## Apple Siri, 10년 만의 전면 개편

Apple이 Siri를 단순 음성 도우미에서 **컨텍스트 인식 AI 어시스턴트**로 전면 개편한다. 1월 12일 발표된 이 계약은 Apple이 Google에 **연간 약 10억 달러**를 지불하고, 1.2조 파라미터 규모의 커스텀 Gemini 모델을 독점 사용하는 구조다.

> "Apple Intelligence의 다음 단계는 사용자의 화면, 앱, 일정을 모두 이해하는 어시스턴트입니다."
Apple 수석 부사장 크레이그 페더리기

## 핵심 변화 3가지

**1. 화면 인식(On-Screen Awareness)**
Siri가 현재 화면에 표시된 내용을 이해한다. 메시지에서 주소가 보이면 자동으로 지도 앱과 연동하고, 이메일의 일정을 캘린더에 추가할 수 있다.

**2. 앱 간 통합**
"내일 회의 자료를 정리해서 팀한테 공유해줘" 같은 복합 명령이 가능해진다. Pages에서 문서를 요약하고, Mail로 전송하는 작업을 Siri가 자동 처리한다.

**3. Private Cloud Compute**
Gemini 모델이 Apple의 자체 서버에서만 구동되며, 사용자 데이터는 서버 밖으로 나가지 않는다. Google도 데이터에 접근할 수 없다는 점이 핵심이다.

## 출시 일정

새로운 Siri는 **iOS 26.4**에서 출시 예정이며, 3~4월 중 배포될 전망이다. 한국어 지원도 확인되었으며, 기존 Siri의 가장 큰 불만이었던 한국어 이해도가 Gemini 도입으로 크게 개선될 것으로 기대된다.

## 시장 영향

이번 계약으로 Apple 주가는 **2.3% 상승**, Google 주가는 **3.1% 상승**했다. 월가에서는 이 파트너십이 삼성 갤럭시 AI와의 경쟁에서 Apple이 우위를 점하는 계기가 될 것으로 분석하고 있다.`},{id:"20260326180002",title:"Meta, 5개 부서 수백 명 감원… AI에 1,350억 달러 올인",summary:"Meta가 Reality Labs, 채용, 영업 등 5개 부서에서 수백 명을 감원한다. 올해 AI 인프라에 최대 1,350억 달러를 투자할 계획이다.",category:"기업",author:"Prompt Daily 편집팀",date:"2026-03-26T18:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1636114673156-052a82e6e71e?w=800",breaking:!0,content:`## Meta, 올해 두 번째 대규모 감원

Meta가 **Reality Labs, 채용, 영업, Facebook, Instagram** 등 5개 부서에 걸쳐 **수백 명의 직원을 해고**했다. CNBC에 따르면 총 1,000명 미만으로 추정된다.

이는 1월에 Reality Labs에서 **1,000명 이상**을 감원하고 VR 게임 스튜디오 여러 곳을 폐쇄한 데 이은 올해 두 번째 구조조정이다.

> "우리는 가장 중요한 장기 기회에 자원을 재배치하고 있습니다."
Meta 대변인

## AI에 역대급 투자

감원의 배경에는 **AI 인프라 투자 확대**가 있다. Meta는 올해 설비투자(CapEx)를 **1,150억~1,350억 달러**까지 늘릴 계획이다. 이는 역대 최대 규모로, 대부분 AI 데이터센터와 GPU 구매에 투입된다.

## Reality Labs의 위기

특히 **Reality Labs** 부문이 가장 큰 타격을 받았다. 2023년부터 누적 적자가 **500억 달러**를 넘어선 이 부서는 메타버스 하드웨어의 수익성 개선 압박을 받고 있다.

## 한국 시장 영향

Meta의 AI 집중 전략은 **Llama 오픈소스 모델** 개발 가속화로 이어질 전망이다. 국내 AI 스타트업들이 Llama 기반 서비스를 구축하는 데 긍정적 영향을 미칠 수 있다.`},{id:"20260326180003",title:"Microsoft AI Tour Seoul 개최… 한국 기업 AI 도입 사례 공개",summary:"3월 26일 서울 코엑스에서 Microsoft AI Tour가 개최된다. M365 Copilot 실전 활용법과 한국 기업 AI 도입 사례가 공개된다.",category:"컬처",author:"Prompt Daily 편집팀",date:"2026-03-26T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",breaking:!1,content:`## 서울에서 만나는 AI의 현재와 미래

3월 26일 서울 코엑스에서 **Microsoft AI Tour Seoul**이 개최된다. Microsoft의 글로벌 AI 투어 시리즈의 일환으로, 아시아 태평양 주요 도시를 순회하는 행사다.

## 주요 세션

- **M365 Copilot 실전**: Word, Excel, PowerPoint에서 Copilot 활용법
- **Copilot Studio**: 기업 맞춤형 AI 에이전트 구축 방법
- **Azure AI**: 대규모 AI 인프라 설계 및 비용 최적화
- **한국 사례**: 삼성, LG, 현대 등 국내 기업 AI 도입 사례

## 한국 기업 AI 도입 현황

Microsoft에 따르면 한국 대기업의 **73%**가 이미 Copilot을 도입했거나 검토 중이다. 특히 금융권과 제조업에서 도입 속도가 빠르며, KB금융과 포스코가 대표적인 성공 사례로 꼽힌다.

사전 등록은 마감되었으나, 주요 세션은 Microsoft 공식 유튜브에서 **라이브 스트리밍**될 예정이다.`},{id:"20260326180004",title:"Google TurboQuant 공개… AI 메모리 60% 압축, 모바일 AI 시대 열리나",summary:"Google AI 연구팀이 초고효율 AI 압축 알고리즘 TurboQuant를 발표했다. 모델 메모리를 60% 줄이면서 성능 저하를 2% 이내로 억제한다.",category:"컬처",author:"Prompt Daily 편집팀",date:"2026-03-26T18:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",breaking:!0,content:`## 스마트폰에서 GPT-5급 AI를 돌린다?

Google AI 연구팀이 **TurboQuant**를 공개했다. AI 모델의 메모리 사용량을 **60% 이상 줄이면서** 정확도 손실을 **2% 이내**로 억제하는 혁신적 양자화 알고리즘이다.

기존 양자화 기술(GPTQ, AWQ)이 30~40% 압축에 5~10% 성능 저하를 보인 것과 비교하면 획기적인 개선이다.

## 핵심 기술: 적응형 희소 양자화

TurboQuant의 비밀은 **모델의 각 레이어마다 다른 압축률을 적용**하는 적응형 접근법이다. 중요한 레이어는 높은 정밀도를 유지하고, 덜 중요한 레이어는 공격적으로 압축한다.

## 실제 의미

이 기술이 상용화되면:
- **스마트폰**에서 27B 파라미터 모델 구동 가능
- **노트북**에서 70B급 모델 로컬 실행 가능
- 클라우드 API 없이 **완전 오프라인 AI** 실현

## 한국 스타트업에 미치는 영향

GPU 비용이 AI 스타트업의 최대 부담이다. 메모리 효율이 60% 개선되면 같은 GPU로 더 큰 모델을 서빙할 수 있어, 국내 AI 스타트업들의 **인프라 비용이 절반 이하**로 줄어들 수 있다.`},{id:"20260326180005",title:"과기부, 국가 GPU 자원 무료 개방… 산학연 AI 연구자 대상 모집",summary:"과학기술정보통신부가 첨단 GPU 사용자를 모집한다. 대학교, 공공연구기관, 스타트업 모두 신청 가능하다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-03-26T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## 국가 AI 인프라, 연구자에게 문 열다

과학기술정보통신부가 산학연 기관을 대상으로 **첨단 GPU 사용자 모집**을 공고했다. AI와 빅데이터 연구에 필요한 고성능 컴퓨팅 자원을 **무료로 제공**하는 사업이다.

## 신청 대상

- **대학교** 연구실 (교수, 대학원생)
- **공공 연구기관** (ETRI, KIST 등)
- **AI 스타트업** (초기 단계 기업 우선)

## 제공 자원

국가초고성능컴퓨팅센터(KISTI)의 **NVIDIA H100** 클러스터를 포함한 최신 GPU 자원이 할당된다. GPU 부족으로 연구에 어려움을 겪는 기관에 우선 배정될 예정이다.

## 의의

미국, 중국 대비 AI 인프라 투자가 부족하다는 지적이 있는 가운데, 정부가 연구자들에게 직접 GPU 자원을 제공하는 것은 의미있는 첫 걸음이다.`}],Zp={articles:Jp},bp="a]",Rs="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";let yi=!1;const ud=()=>yi?!0:typeof window.Kakao>"u"?(console.error("Kakao SDK not loaded"),!1):(window.Kakao.isInitialized()||window.Kakao.init(bp),yi=window.Kakao.isInitialized(),yi),qp=()=>new Promise((e,n)=>{if(!ud()){e({success:!0,user:{id:"kakao_demo_"+Date.now(),name:"카카오 사용자",email:"demo@kakao.com",avatar:null,provider:"kakao"},isDemo:!0});return}window.Kakao.Auth.login({success:t=>{window.Kakao.API.request({url:"/v2/user/me",success:r=>{var l,i,o,a,s;e({success:!0,user:{id:"kakao_"+r.id,name:((i=(l=r.kakao_account)==null?void 0:l.profile)==null?void 0:i.nickname)||"카카오 사용자",email:((o=r.kakao_account)==null?void 0:o.email)||null,avatar:((s=(a=r.kakao_account)==null?void 0:a.profile)==null?void 0:s.profile_image_url)||null,provider:"kakao"}})},fail:r=>{n({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}})},fail:t=>{t.error==="access_denied"?n({success:!1,error:"로그인이 취소되었습니다."}):n({success:!1,error:"카카오 로그인에 실패했습니다."})}})}),em=()=>new Promise(e=>{if(!ud()||!window.Kakao.Auth.getAccessToken()){e({success:!0});return}window.Kakao.Auth.logout(()=>{e({success:!0})})});let Gs=!1;const nm=()=>new Promise(e=>{if(Gs){e(!0);return}if(typeof window.google>"u"||!window.google.accounts){console.error("Google SDK not loaded"),e(!1);return}Gs=!0,e(!0)}),tm=()=>new Promise(async(e,n)=>{if(!await nm()||Rs.includes("YOUR_GOOGLE")){e({success:!0,user:{id:"google_demo_"+Date.now(),name:"Google 사용자",email:"demo@gmail.com",avatar:null,provider:"google"},isDemo:!0});return}try{window.google.accounts.oauth2.initTokenClient({client_id:Rs,scope:"email profile",callback:async l=>{if(l.error){n({success:!1,error:"구글 로그인에 실패했습니다."});return}try{const o=await(await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${l.access_token}`}})).json();e({success:!0,user:{id:"google_"+o.sub,name:o.name||"Google 사용자",email:o.email,avatar:o.picture||null,provider:"google"}})}catch{n({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}}}).requestAccessToken()}catch{n({success:!1,error:"구글 로그인 초기화에 실패했습니다."})}}),rm=async()=>(await em(),{success:!0}),lm=null,Gr={title:"Prompt Daily — 매일 아침 AI가 바꾸는 세상",description:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만.",image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200",siteName:"Prompt Daily"},Se=(e,n)=>{let t=document.head.querySelector(e);if(!t){t=document.createElement("meta");const[r,l]=e.replace(/^meta\[/,"").replace(/\]$/,"").split("=");t.setAttribute(r,l.replace(/"/g,"")),document.head.appendChild(t)}t.setAttribute("content",n.content??"")},im=e=>{document.title=e,Se('meta[property="og:title"]',{content:e}),Se('meta[name="twitter:title"]',{content:e})};function cd({title:e,description:n,image:t,url:r,type:l="article",publishedTime:i}={}){const o=e||Gr.title,a=n||Gr.description,s=t||Gr.image,c=r||(typeof window<"u"?window.location.href:"");im(o),Se('meta[name="description"]',{content:a}),Se('meta[property="og:description"]',{content:a}),Se('meta[property="og:image"]',{content:s}),Se('meta[property="og:url"]',{content:c}),Se('meta[property="og:type"]',{content:l}),Se('meta[property="og:site_name"]',{content:Gr.siteName}),Se('meta[name="twitter:card"]',{content:"summary_large_image"}),Se('meta[name="twitter:description"]',{content:a}),Se('meta[name="twitter:image"]',{content:s}),i&&Se('meta[property="article:published_time"]',{content:i})}function dd(){cd({})}const nt={models:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",enterprise:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",research:"https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200",tools:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",prompts:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",policy:"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200",culture:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",all:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200"};function xl(e,n="all"){return e?(e.image_storage_path,e.image&&/^https?:\/\//.test(e.image)?e.image:nt[n]||nt.all):nt[n]||nt.all}function fd(e){return null}function wl(e="all"){const n=nt[e]||nt.all;return t=>{t.currentTarget.src!==n&&(t.currentTarget.src=n)}}async function om(){return!1}async function am(){return[]}function sm(){const[e,n]=y.useState(null),[t,r]=y.useState(null),[l,i]=y.useState([]),[o,a]=y.useState(""),[s,c]=y.useState(!1);y.useEffect(()=>{},[]),y.useEffect(()=>{if(!e){r(!1);return}om().then(r)},[e]);const h=async()=>{c(!0);const m=await am();i(m),c(!1)};return y.useEffect(()=>{t&&h()},[t]),u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"Supabase 환경변수가 설정되지 않았습니다."}),u.jsx(Bn,{to:"/",className:"text-brand underline",children:"홈으로"})]})}const cr="Prompt Daily",um="매일 아침 AI가 바꾸는 세상",At=[{slug:"all",name:"전체",color:"#152e44"},{slug:"models",name:"모델",color:"#152e44"},{slug:"enterprise",name:"기업",color:"#1d4ed8"},{slug:"research",name:"연구",color:"#0f766e"},{slug:"tools",name:"도구",color:"#b45309"},{slug:"prompts",name:"프롬프트",color:"#7c3aed"},{slug:"policy",name:"정책",color:"#be123c"},{slug:"culture",name:"컬처",color:"#334155"}],ho=Object.fromEntries(At.map(e=>[e.slug,e])),pd=Object.fromEntries(At.map(e=>[e.name,e])),Bs=e=>String(e).padStart(2,"0"),md=e=>{const n=new Date(e);return`${n.getFullYear()}.${Bs(n.getMonth()+1)}.${Bs(n.getDate())}`},go=e=>{const n=new Date(e),r=Math.floor((new Date-n)/36e5),l=Math.floor(r/24);return r<1?"방금 전":r<24?`${r}시간 전`:l<7?`${l}일 전`:md(e)},fe=e=>{const n=pd[e.category];return n?n.slug:"all"},cm=e=>e?e.split(`

`).map((n,t)=>{const r=n.trim();if(r==="---"||r==="***")return u.jsx("hr",{className:"my-10 border-t-2 border-ink-100"},t);if(n.startsWith("## "))return u.jsx("h2",{children:n.slice(3)},t);if(n.startsWith("### "))return u.jsx("h3",{children:n.slice(4)},t);if(n.startsWith("> ")){const l=n.slice(2).replace(/\n> /g," ").replace(/\n/g," ");return u.jsxs("blockquote",{className:"relative my-8 pl-6 pr-5 py-5 bg-brand-tint/40 border-l-4 border-brand text-[17px] leading-relaxed text-ink-800 italic",children:[u.jsx("span",{className:"absolute left-2 top-0 text-brand/30 text-5xl font-serif leading-none select-none",children:"“"}),jt(l)]},t)}if(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)\s/.test(n)){const l=n.match(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)/)[0],i=n.slice(l.length).trimStart();return u.jsxs("div",{className:"my-8 flex gap-4 p-5 bg-brand-tint/50 border border-brand/20 rounded-lg",children:[u.jsx("span",{className:"text-3xl leading-none shrink-0",children:l}),u.jsx("div",{className:"flex-1 text-[16px] leading-relaxed text-ink-800",children:jt(i)})]},t)}return/^[-*]\s/.test(n)?u.jsx("ul",{className:"my-5 space-y-2",children:n.split(`
`).filter(Boolean).map((l,i)=>u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0"}),u.jsx("span",{className:"flex-1",children:jt(l.replace(/^[-*]\s*/,""))})]},i))},t):/^\d+\.\s/.test(n)?u.jsx("ol",{className:"my-5 space-y-3 counter-reset-article",children:n.split(`
`).filter(Boolean).map((l,i)=>{const o=l.match(/^(\d+)\.\s*(.*)/),a=o?o[1]:String(i+1),s=o?o[2]:l;return u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"shrink-0 w-7 h-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center",children:a}),u.jsx("span",{className:"flex-1 pt-0.5",children:jt(s)})]},i)})},t):u.jsx("p",{children:jt(n)},t)}):null,jt=e=>{const n=[];let t=0;return e.split(/\*\*(.*?)\*\*/).forEach((r,l)=>{l%2===1?n.push(u.jsx("strong",{className:"text-brand-dark font-bold",children:r},`b-${t++}`)):r.split(/==(.*?)==/).forEach((i,o)=>{o%2===1?n.push(u.jsx("mark",{className:"bg-yellow-100 px-1 text-ink-900 rounded",children:i},`h-${t++}`)):n.push(i)})}),n};function dm({user:e,onLoginClick:n,onLogoutClick:t,activeSlug:r,onCategoryClick:l,onSearch:i}){const[o,a]=y.useState(!1),[s,c]=y.useState(!1),[h,m]=y.useState(!1),[g,A]=y.useState(""),x=yr(),I=d=>f=>{if(f.preventDefault(),window.location.pathname.endsWith("/")||window.location.pathname.includes("/category/")){const p=document.getElementById(d);if(p){p.scrollIntoView({behavior:"smooth",block:"start"});return}}x("/"),setTimeout(()=>{var p;(p=document.getElementById(d))==null||p.scrollIntoView({behavior:"smooth",block:"start"})},80)};y.useEffect(()=>{const d=()=>a(window.scrollY>8);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const S=y.useMemo(()=>{const d=new Date,f=["일","월","화","수","목","금","토"][d.getDay()];return`${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 ${f}요일`},[]);return u.jsxs("header",{className:`sticky top-0 z-50 bg-white border-b transition-shadow ${o?"shadow-sm border-ink-200":"border-ink-100"}`,children:[u.jsx("div",{className:"bg-brand text-white text-xs",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 h-8 flex items-center justify-between",children:[u.jsx("span",{className:"mono tracking-wide",children:S}),u.jsxs("div",{className:"hidden sm:flex items-center gap-4",children:[u.jsx("a",{href:"#about",onClick:I("footer-about"),className:"hover:text-brand-tint cursor-pointer",children:"소개"}),u.jsx("a",{href:"#advertise",onClick:I("footer-advertise"),className:"hover:text-brand-tint cursor-pointer",children:"광고 문의"}),u.jsx("a",{href:"#newsletter",onClick:I("newsletter"),className:"hover:text-brand-tint cursor-pointer",children:"뉴스레터"}),e?u.jsxs("button",{onClick:t,className:"hover:text-brand-tint",children:[e.name||e.email," · 로그아웃"]}):u.jsx("button",{onClick:n,className:"hover:text-brand-tint",children:"로그인"})]})]})}),u.jsxs("div",{className:"max-w-page mx-auto px-4 py-5 flex items-center justify-between",children:[u.jsxs(Bn,{to:"/",className:"text-left group","aria-label":"홈으로",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[u.jsx("h1",{className:"headline-serif text-3xl md:text-4xl text-brand leading-none",children:cr}),u.jsx("p",{className:"text-[11px] text-ink-400 mt-1 tracking-widest uppercase",children:um})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>m(d=>!d),className:"w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"검색",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"})})}),u.jsx("button",{onClick:()=>c(d=>!d),className:"md:hidden w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"메뉴",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),h&&u.jsx("div",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4 py-3",children:u.jsxs("form",{onSubmit:d=>{d.preventDefault(),i(g),m(!1)},className:"flex gap-2",children:[u.jsx("input",{autoFocus:!0,value:g,onChange:d=>A(d.target.value),placeholder:"키워드로 검색…",className:"flex-1 px-4 py-2.5 border border-ink-200 rounded-none focus:border-brand outline-none text-[15px]"}),u.jsx("button",{type:"submit",className:"px-5 py-2.5 bg-brand text-white text-sm font-semibold",children:"검색"})]})})}),u.jsx("nav",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4",children:u.jsx("ul",{className:`flex items-center gap-1 overflow-x-auto no-scrollbar ${s?"flex-wrap":""}`,children:At.map(d=>{const f=r===d.slug;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>{l(d.slug),c(!1)},className:`relative whitespace-nowrap px-4 py-3 text-sm font-bold transition-colors ${f?"text-brand":"text-ink-700 hover:text-brand"}`,children:[d.name,f&&u.jsx("span",{className:"absolute left-4 right-4 bottom-0 h-0.5 bg-brand"})]})},d.slug)})})})})]})}function fm({items:e,onClick:n}){return e.length?u.jsx("div",{className:"ticker",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 flex items-center gap-4 h-10",children:[u.jsx("span",{className:"ticker-label",children:"BREAKING"}),u.jsx("div",{className:"flex-1 overflow-hidden",children:u.jsx("div",{className:"flex gap-10 animate-marquee whitespace-nowrap",children:[...e,...e].map((t,r)=>u.jsxs("button",{onClick:()=>n(t),className:"hover:underline",children:["• ",t.title]},`${t.id}-${r}`))})})]})}):null}function pm({articles:e,onOpen:n}){if(e.length===0)return null;const[t,...r]=e,l=r.slice(0,2);return u.jsx("section",{className:"max-w-page mx-auto px-4 py-8",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-hero gap-6",children:[u.jsxs("article",{onClick:()=>n(t),className:"card cursor-pointer group",children:[u.jsx("div",{className:"card-img-wrap aspect-[16/9]",children:u.jsx("img",{src:xl(t,fe(t)),srcSet:fd()||void 0,sizes:"(min-width: 1024px) 800px, 100vw",onError:wl(fe(t)),alt:"",className:"card-img",loading:"eager"})}),u.jsxs("div",{className:"p-6",children:[u.jsx(Sl,{slug:fe(t),breaking:t.breaking}),u.jsx("h2",{className:"headline-serif text-3xl md:text-[2.25rem] leading-tight mt-3 mb-3 hl clamp-3",children:t.title}),u.jsx("p",{className:"text-ink-500 clamp-2 text-[15px] leading-relaxed",children:t.summary}),u.jsxs("div",{className:"mt-4 text-xs text-ink-400 mono",children:[t.author||"Prompt Daily 편집팀"," · ",go(t.date)]})]})]}),u.jsx("div",{className:"flex flex-col gap-5",children:l.map(i=>u.jsxs("article",{onClick:()=>n(i),className:"card cursor-pointer flex gap-4 p-4",children:[u.jsx("div",{className:"card-img-wrap w-32 h-24 flex-shrink-0",children:u.jsx("img",{src:xl(i,fe(i)),onError:wl(fe(i)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx(Sl,{slug:fe(i),breaking:i.breaking,small:!0}),u.jsx("h3",{className:"font-bold text-[15px] leading-snug mt-1 hl clamp-3",children:i.title}),u.jsx("div",{className:"mt-2 text-[11px] text-ink-400 mono",children:go(i.date)})]})]},i.id))})]})})}function Sl({slug:e,breaking:n,small:t}){const r=ho[e]||At[0],l=t?"px-1.5 py-0.5 text-[10px]":"px-2 py-1 text-[11px]";return u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:`${l} font-bold tracking-widest uppercase text-white`,style:{backgroundColor:r.color},children:r.name}),n&&u.jsx("span",{className:`${l} font-bold tracking-widest uppercase text-white bg-accent-red`,children:"속보"})]})}function yo({article:e,size:n="md",onClick:t}){const r=n==="lg";return u.jsxs("article",{onClick:()=>t(e),className:"card cursor-pointer",children:[u.jsx("div",{className:`card-img-wrap ${r?"aspect-[16/10]":"aspect-[4/3]"}`,children:u.jsx("img",{src:xl(e,fe(e)),onError:wl(fe(e)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:r?"p-5":"p-4",children:[u.jsx(Sl,{slug:fe(e),breaking:e.breaking,small:!r}),u.jsx("h3",{className:`hl font-bold mt-2 mb-2 clamp-3 ${r?"text-headline-md":"text-[15px]"}`,children:e.title}),u.jsx("p",{className:"text-ink-500 text-[13px] clamp-2",children:e.summary}),u.jsxs("div",{className:"mt-3 flex items-center justify-between text-[11px] text-ink-400 mono",children:[u.jsx("span",{children:go(e.date)}),u.jsx("span",{children:e.readTime||"5분"})]})]})]})}function mm({category:e,articles:n,onOpen:t}){if(n.length===0)return null;const[r,...l]=n,i=l.slice(0,3);return u.jsxs("section",{className:"py-10",id:`section-${e.slug}`,children:[u.jsxs("div",{className:"flex items-end justify-between mb-6",children:[u.jsx(Bn,{to:`/category/${e.slug}`,className:"section-label hover:opacity-70 transition-opacity",style:{color:e.color,borderColor:e.color},children:e.name}),u.jsx(Bn,{to:`/category/${e.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-xs text-ink-500 hover:text-brand font-semibold",children:"더보기 →"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[u.jsx("div",{className:"md:col-span-2 md:row-span-1",children:u.jsx(yo,{article:r,size:"lg",onClick:t})}),i.map(o=>u.jsx(yo,{article:o,onClick:t},o.id))]})]})}function hm({articles:e,onOpen:n}){return u.jsxs("aside",{className:"sticky top-40",children:[u.jsx("div",{className:"section-label mb-5",children:"MOST VIEWED"}),u.jsx("ol",{className:"space-y-4",children:e.slice(0,10).map((t,r)=>{var l;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>n(t),className:"flex gap-3 text-left w-full group",children:[u.jsx("span",{className:`rank-num ${r<3?"top-three":""}`,children:String(r+1).padStart(2,"0")}),u.jsxs("div",{className:"flex-1 min-w-0 pb-4 border-b border-ink-100",children:[u.jsx("div",{className:"text-[10px] text-ink-400 mono uppercase tracking-wider mb-1",children:((l=pd[t.category])==null?void 0:l.name)||t.category}),u.jsx("h4",{className:"text-[14px] font-semibold leading-snug hl clamp-3",children:t.title})]})]})},t.id)})})]})}function gm({email:e,setEmail:n,subscribed:t,onSubmit:r}){return u.jsx("section",{id:"newsletter",className:"bg-brand text-white py-14 my-10",children:u.jsxs("div",{className:"max-w-2xl mx-auto px-4 text-center",children:[u.jsx("div",{className:"inline-block px-3 py-1 bg-accent-red text-[10px] font-bold tracking-widest uppercase mb-4",children:"NEWSLETTER"}),u.jsx("h2",{className:"headline-serif text-3xl md:text-4xl mb-3",children:"매일 아침, 한 잔의 AI"}),u.jsx("p",{className:"text-brand-tint mb-7 text-[15px]",children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 7개만 골라, 매일 아침 7시에 전해드립니다."}),u.jsxs("form",{onSubmit:r,className:"flex gap-2 max-w-md mx-auto",children:[u.jsx("input",{type:"email",required:!0,value:e,onChange:l=>n(l.target.value),placeholder:"이메일 주소",className:"flex-1 px-4 py-3 text-ink-900 border-0 focus:outline-none focus:ring-2 focus:ring-white"}),u.jsx("button",{type:"submit",className:"px-6 py-3 bg-white text-brand font-bold hover:bg-brand-tint",children:t?"구독완료":"구독하기"})]})]})})}const ym=[{label:"X",url:"https://x.com/",title:"X (Twitter)"},{label:"FB",url:"https://facebook.com/",title:"Facebook"},{label:"IN",url:"https://instagram.com/",title:"Instagram"},{label:"YT",url:"https://youtube.com/",title:"YouTube"}];function hd(){const[e,n]=y.useState(null);return u.jsxs(u.Fragment,{children:[u.jsx("footer",{className:"bg-ink-900 text-ink-300 mt-20",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[u.jsxs("div",{className:"md:col-span-2",id:"footer-about",children:[u.jsx(Bn,{to:"/",className:"inline-block",children:u.jsx("h3",{className:"headline-serif text-2xl text-white mb-3 hover:text-brand-tint transition-colors",children:cr})}),u.jsx("p",{className:"text-sm text-ink-400 mb-4 max-w-md",children:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만 골라드립니다."}),u.jsx("div",{className:"flex gap-3",children:ym.map(t=>u.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer noopener",title:t.title,"aria-label":t.title,className:"w-9 h-9 border border-ink-700 hover:border-white hover:text-white flex items-center justify-center text-xs font-bold transition-colors",children:t.label},t.label))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"카테고리"}),u.jsx("ul",{className:"space-y-2 text-sm",children:At.slice(1).map(t=>u.jsx("li",{children:u.jsx(Bn,{to:`/category/${t.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"hover:text-white transition-colors",children:t.name})},t.slug))})]}),u.jsxs("div",{id:"footer-advertise",children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"회사"}),u.jsxs("ul",{className:"space-y-2 text-sm",children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>n("about"),className:"hover:text-white transition-colors",children:"소개"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("advertise"),className:"hover:text-white transition-colors",children:"광고 문의"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("contact"),className:"hover:text-white transition-colors",children:"제보하기"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("terms"),className:"hover:text-white transition-colors",children:"이용약관"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("privacy"),className:"hover:text-white transition-colors",children:"개인정보처리방침"})})]})]})]}),u.jsxs("div",{className:"border-t border-ink-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-xs text-ink-400",children:[u.jsxs("p",{children:["© 2026 GIGA GLOBAL STUDIO · ",cr,". All rights reserved."]}),u.jsx("p",{className:"mono mt-2 md:mt-0",children:"v2.1 · Magazine Edition"})]})]})}),e&&u.jsx(Im,{kind:e,onClose:()=>n(null)})]})}const vm={about:{title:"소개",body:u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Prompt Daily"}),"는 매일 아침 AI가 바꾸는 세상을 기록합니다."]}),u.jsx("p",{children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 것만 7개 카테고리 — 모델 · 기업 · 연구 · 도구 · 프롬프트 · 정책 · 컬처 — 로 정리해 전해드립니다."}),u.jsx("p",{className:"text-ink-400 text-sm",children:"© GIGA GLOBAL STUDIO"})]})},advertise:{title:"광고 문의",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"브랜드·프로덕트·채용 광고 문의는 이메일로 받고 있습니다."}),u.jsx("p",{className:"mono text-brand",children:"ads@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"평균 응답 시간: 영업일 기준 24시간 이내"})]})},contact:{title:"제보하기",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"AI 업계 소식·인사이트 제보를 환영합니다."}),u.jsx("p",{className:"mono text-brand",children:"tips@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"익명 제보도 가능합니다. 제보자 신원은 철저히 보호됩니다."})]})},terms:{title:"이용약관",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"본 사이트는 정보 제공을 목적으로 운영되며, 게재된 모든 콘텐츠의 저작권은 Prompt Daily 및 원저작자에게 있습니다."}),u.jsx("p",{children:"무단 복제·배포·2차 저작물 작성을 금지합니다. 기사 본문의 인용은 출처 표기 시 허용됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 약관 문서는 준비 중입니다."})]})},privacy:{title:"개인정보처리방침",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Prompt Daily는 뉴스레터 구독 외에는 사용자의 개인정보를 수집하지 않습니다."}),u.jsx("p",{children:"구독자 이메일은 뉴스레터 발송 목적으로만 사용되며, 제3자에게 제공되지 않습니다."}),u.jsx("p",{children:"구독 해지는 발송되는 모든 메일 하단의 링크를 통해 즉시 처리됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 방침 문서는 준비 중입니다."})]})}};function Im({kind:e,onClose:n}){const t=vm[e];return y.useEffect(()=>{const r=l=>l.key==="Escape"&&n();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[n]),t?u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in",onClick:n,children:u.jsxs("div",{className:"bg-white max-w-lg w-full p-8 relative",onClick:r=>r.stopPropagation(),role:"dialog","aria-modal":"true",children:[u.jsx("button",{onClick:n,"aria-label":"닫기",className:"absolute top-4 right-4 w-8 h-8 hover:bg-ink-50 flex items-center justify-center text-ink-400",children:u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-4",children:t.title}),u.jsx("div",{className:"space-y-3 text-ink-700 text-[15px] leading-relaxed",children:t.body})]})}):null}function Am({article:e,onBack:n}){y.useEffect(()=>{window.scrollTo(0,0)},[e.id]),y.useEffect(()=>(cd({title:`${e.title} — ${cr}`,description:e.summary,image:e.image,type:"article",publishedTime:e.date}),()=>dd()),[e.id]),y.useEffect(()=>{},[e.id]);const t=typeof window<"u"?window.location.href:"",r=()=>{var l;(l=navigator.clipboard)==null||l.writeText(t)};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsx("header",{className:"sticky top-0 bg-white/95 backdrop-blur border-b border-ink-100 z-50",children:u.jsxs("div",{className:"max-w-3xl mx-auto px-4 h-14 flex items-center justify-between",children:[u.jsx("button",{onClick:n,className:"headline-serif text-xl text-brand",children:cr}),u.jsxs("button",{onClick:n,className:"text-sm text-ink-500 hover:text-brand flex items-center gap-1",children:[u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]})]})}),u.jsxs("article",{className:"max-w-3xl mx-auto px-4 py-10",children:[u.jsx(Sl,{slug:fe(e),breaking:e.breaking}),u.jsx("h1",{className:"headline-serif text-3xl md:text-[2.5rem] leading-tight mt-4 mb-6",children:e.title}),u.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500 mb-8 pb-6 border-b border-ink-200",children:[u.jsx("span",{className:"font-semibold text-ink-700",children:e.author||"Prompt Daily 편집팀"}),u.jsx("span",{children:"·"}),u.jsx("span",{className:"mono",children:md(e.date)}),u.jsx("span",{children:"·"}),u.jsxs("span",{children:[e.readTime||"5분"," 읽기"]})]}),u.jsx("img",{src:xl(e,fe(e)),srcSet:fd()||void 0,sizes:"(min-width: 768px) 768px, 100vw",onError:wl(fe(e)),alt:"",className:"w-full mb-8"}),u.jsx("div",{className:"border-l-4 border-brand bg-brand-tint p-5 mb-10 serif text-lg text-brand-dark",children:e.summary}),u.jsx("div",{className:"article-body",children:cm(e.content)}),u.jsxs("div",{className:"mt-12 pt-8 border-t border-ink-200 flex items-center gap-3 flex-wrap",children:[u.jsx("span",{className:"text-sm text-ink-500",children:"공유:"}),u.jsx("a",{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(e.title)}&url=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"X"}),u.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"Facebook"}),u.jsx("button",{onClick:r,className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"링크 복사"})]})]}),u.jsx(hd,{})]})}function xm({onClose:e,onSuccess:n}){const[t,r]=y.useState(!1),[l,i]=y.useState(""),o=async a=>{r(!0),i("");try{const s=await a();s.success&&n(s.user)}catch(s){i(s.error||"로그인에 실패했습니다.")}r(!1)};return u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4",onClick:e,children:u.jsxs("div",{className:"bg-white max-w-sm w-full p-8",onClick:a=>a.stopPropagation(),children:[u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-2",children:"로그인"}),u.jsx("p",{className:"text-sm text-ink-500 mb-6",children:"구독과 스크랩을 위해 로그인해주세요"}),l&&u.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 text-sm",children:l}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("button",{disabled:t,onClick:()=>o(qp),className:"w-full py-3 bg-[#FEE500] text-black font-bold flex items-center justify-center gap-2 disabled:opacity-50",children:"카카오로 로그인"}),u.jsx("button",{disabled:t,onClick:()=>o(tm),className:"w-full py-3 border border-ink-200 font-bold flex items-center justify-center gap-2 hover:border-ink-300 disabled:opacity-50",children:"Google로 로그인"})]}),u.jsx("button",{onClick:e,className:"mt-6 w-full text-sm text-ink-500 hover:text-brand",children:"닫기"})]})})}function wm(){const[e,n]=y.useState(()=>Zp.articles||[]),[t,r]=y.useState(null),[l,i]=y.useState("static");return y.useEffect(()=>{},[]),{articles:e,liveMostViewed:t,dataSource:l}}function zs({store:e,ui:n}){var S;const{articles:t,liveMostViewed:r}=e,l=yr(),i=ld(),o=d=>l(`/article/${d.id}`),a=i.slug&&ho[i.slug]?i.slug:"all",[s,c]=y.useState("");y.useEffect(()=>{dd()},[]),y.useEffect(()=>{c("")},[a]);const h=y.useMemo(()=>{let d=t;if(a!=="all"&&(d=d.filter(f=>fe(f)===a)),s){const f=s.toLowerCase();d=d.filter(p=>p.title.toLowerCase().includes(f)||(p.summary||"").toLowerCase().includes(f))}return d},[t,a,s]),m=y.useMemo(()=>{const d=h.filter(p=>p.breaking),f=h.filter(p=>!p.breaking);return[...d,...f].slice(0,3)},[h]),g=y.useMemo(()=>t.filter(d=>d.breaking).slice(0,6),[t]),A=y.useMemo(()=>r&&r.length>0?r:[...t].sort((d,f)=>new Date(f.date)-new Date(d.date)).slice(0,10),[t,r]),x=y.useMemo(()=>At.slice(1).map(d=>({category:d,items:h.filter(f=>fe(f)===d.slug).slice(0,4)})).filter(d=>d.items.length>0),[h]),I=d=>{l(d==="all"?"/":`/category/${d}`),window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsx(dm,{user:n.user,onLoginClick:n.onLoginClick,onLogoutClick:n.onLogoutClick,activeSlug:a,onCategoryClick:I,onSearch:c}),u.jsx(fm,{items:g,onClick:o}),s&&u.jsx("div",{className:"bg-brand-tint border-b border-brand/10",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-3 text-sm text-brand",children:[u.jsxs("strong",{children:['"',s,'"']})," 검색결과 ",h.length,"건",u.jsx("button",{onClick:()=>c(""),className:"ml-3 underline",children:"초기화"})]})}),m.length>0&&u.jsx(pm,{articles:m,onOpen:o}),u.jsxs("div",{className:"max-w-page mx-auto px-4",children:[u.jsx("hr",{className:"hr-double"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-magazine gap-10",children:[u.jsx("main",{children:a==="all"?x.map(({category:d,items:f})=>u.jsx(mm,{category:d,articles:f,onOpen:o},d.slug)):u.jsxs("section",{className:"py-10",children:[u.jsx("div",{className:"section-label mb-6",children:((S=ho[a])==null?void 0:S.name)||"전체"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:h.map(d=>u.jsx(yo,{article:d,onClick:o},d.id))}),h.length===0&&u.jsx("p",{className:"text-center py-20 text-ink-400",children:"해당 카테고리의 기사가 없습니다."})]})}),u.jsx(hm,{articles:A,onOpen:o})]})]}),u.jsx(gm,{email:n.email,setEmail:n.setEmail,subscribed:n.subscribed,onSubmit:n.onSubscribe}),u.jsx(hd,{})]})}function Sm({store:e}){const{id:n}=ld(),t=yr(),r=e.articles.find(l=>String(l.id)===String(n));return e.dataSource==="loading"?u.jsx("div",{className:"min-h-screen flex items-center justify-center text-ink-400",children:"불러오는 중…"}):r?u.jsx(Am,{article:r,onBack:()=>t("/")}):u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"해당 기사를 찾을 수 없습니다."}),u.jsx(Bn,{to:"/",className:"text-brand underline",children:"홈으로"})]})}function km(){const e=wm(),[n,t]=y.useState(""),[r,l]=y.useState(!1),[i,o]=y.useState(null),[a,s]=y.useState(!1);y.useEffect(()=>{const g=localStorage.getItem("prompt_daily_user");g&&o(JSON.parse(g))},[]);const m={user:i,email:n,setEmail:t,subscribed:r,onSubscribe:async g=>{g.preventDefault(),n&&(l(!0),setTimeout(()=>{t(""),l(!1)},3e3))},onLoginClick:()=>s(!0),onLogoutClick:async()=>{await rm(),localStorage.removeItem("prompt_daily_user"),o(null)}};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsxs(zp,{children:[u.jsx(Hn,{path:"/",element:u.jsx(zs,{store:e,ui:m})}),u.jsx(Hn,{path:"/article/:id",element:u.jsx(Sm,{store:e})}),u.jsx(Hn,{path:"/category/:slug",element:u.jsx(zs,{store:e,ui:m})}),u.jsx(Hn,{path:"/admin/*",element:u.jsx(sm,{})}),u.jsx(Hn,{path:"*",element:u.jsx(Gp,{to:"/",replace:!0})})]}),!1,a&&u.jsx(xm,{onClose:()=>s(!1),onSuccess:g=>{o(g),localStorage.setItem("prompt_daily_user",JSON.stringify(g)),s(!1)}})]})}const Cm="/ai-news-daily/".replace(/\/$/,"")||"/";vi.createRoot(document.getElementById("root")).render(u.jsx(Js.StrictMode,{children:u.jsx(Wp,{basename:Cm,children:u.jsx(km,{})})}));
