function Ad(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zs={exports:{}},Cl={},Hs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),yd=Symbol.for("react.portal"),vd=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Ed=Symbol.for("react.memo"),Nd=Symbol.for("react.lazy"),Ia=Symbol.iterator;function Td(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var Us={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Fs={};function ht(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||Us}ht.prototype.isReactComponent={};ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $s(){}$s.prototype=ht.prototype;function Io(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||Us}var yo=Io.prototype=new $s;yo.constructor=Io;Vs(yo,ht.prototype);yo.isPureReactComponent=!0;var ya=Array.isArray,Ws=Object.prototype.hasOwnProperty,vo={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Ws.call(n,r)&&!Qs.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:dr,type:e,key:i,ref:o,props:l,_owner:vo.current}}function Md(e,n){return{$$typeof:dr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function So(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Od(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var va=/\/+/g;function Fl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Od(""+e.key):n.toString(36)}function Br(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case dr:case yd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Fl(o,0):r,ya(l)?(t="",e!=null&&(t=e.replace(va,"$&/")+"/"),Br(l,n,t,"",function(c){return c})):l!=null&&(So(l)&&(l=Md(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(va,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",ya(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Fl(i,a);o+=Br(i,n,t,s,l)}else if(s=Td(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Fl(i,a++),o+=Br(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function vr(e,n,t){if(e==null)return e;var r=[],l=0;return Br(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Ld(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Kr={transition:null},jd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:vo};function Ys(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:vr,forEach:function(e,n,t){vr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vr(e,function(){n++}),n},toArray:function(e){return vr(e,function(n){return n})||[]},only:function(e){if(!So(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ht;L.Fragment=vd;L.Profiler=xd;L.PureComponent=Io;L.StrictMode=Sd;L.Suspense=Pd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd;L.act=Ys;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vs({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=vo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ws.call(n,s)&&!Qs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:Cd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wd,_context:e},e.Consumer=e};L.createElement=Xs;L.createFactory=function(e){var n=Xs.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:kd,render:e}};L.isValidElement=So;L.lazy=function(e){return{$$typeof:Nd,_payload:{_status:-1,_result:e},_init:Ld}};L.memo=function(e,n){return{$$typeof:Ed,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=n}};L.unstable_act=Ys;L.useCallback=function(e,n){return ue.current.useCallback(e,n)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,n){return ue.current.useEffect(e,n)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ue.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Hs.exports=L;var A=Hs.exports;const Js=Id(A),Dd=Ad({__proto__:null,default:Js},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=A,Gd=Symbol.for("react.element"),_d=Symbol.for("react.fragment"),Bd=Object.prototype.hasOwnProperty,Kd=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zd={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Bd.call(n,r)&&!zd.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Gd,type:e,key:i,ref:o,props:l,_owner:Kd.current}}Cl.Fragment=_d;Cl.jsx=Zs;Cl.jsxs=Zs;zs.exports=Cl;var u=zs.exports,Ii={},bs={exports:{}},Se={},qs={exports:{}},eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,M){var O=P.length;P.push(M);e:for(;0<O;){var $=O-1>>>1,Z=P[$];if(0<l(Z,M))P[$]=M,P[O]=Z,O=$;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],O=P.pop();if(O!==M){P[0]=O;e:for(var $=0,Z=P.length,Ir=Z>>>1;$<Ir;){var Cn=2*($+1)-1,Vl=P[Cn],kn=Cn+1,yr=P[kn];if(0>l(Vl,O))kn<Z&&0>l(yr,Vl)?(P[$]=yr,P[kn]=O,$=kn):(P[$]=Vl,P[Cn]=O,$=Cn);else if(kn<Z&&0>l(yr,O))P[$]=yr,P[kn]=O,$=kn;else break e}}return M}function l(P,M){var O=P.sortIndex-M.sortIndex;return O!==0?O:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],h=1,m=null,g=3,v=!1,S=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var M=t(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=P)r(c),M.sortIndex=M.expirationTime,n(s,M);else break;M=t(c)}}function I(P){if(y=!1,p(P),!S)if(t(s)!==null)S=!0,Hl(C);else{var M=t(c);M!==null&&Ul(I,M.startTime-P)}}function C(P,M){S=!1,y&&(y=!1,d(T),T=-1),v=!0;var O=g;try{for(p(M),m=t(s);m!==null&&(!(m.expirationTime>M)||P&&!Me());){var $=m.callback;if(typeof $=="function"){m.callback=null,g=m.priorityLevel;var Z=$(m.expirationTime<=M);M=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===t(s)&&r(s),p(M)}else r(s);m=t(s)}if(m!==null)var Ir=!0;else{var Cn=t(c);Cn!==null&&Ul(I,Cn.startTime-M),Ir=!1}return Ir}finally{m=null,g=O,v=!1}}var E=!1,N=null,T=-1,F=5,j=-1;function Me(){return!(e.unstable_now()-j<F)}function St(){if(N!==null){var P=e.unstable_now();j=P;var M=!0;try{M=N(!0,P)}finally{M?xt():(E=!1,N=null)}}else E=!1}var xt;if(typeof f=="function")xt=function(){f(St)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,gd=Aa.port2;Aa.port1.onmessage=St,xt=function(){gd.postMessage(null)}}else xt=function(){w(St,0)};function Hl(P){N=P,E||(E=!0,xt())}function Ul(P,M){T=w(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,Hl(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var O=g;g=M;try{return P()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=g;g=P;try{return M()}finally{g=O}},e.unstable_scheduleCallback=function(P,M,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,P={id:h++,callback:M,priorityLevel:P,startTime:O,expirationTime:Z,sortIndex:-1},O>$?(P.sortIndex=O,n(c,P),t(s)===null&&P===t(c)&&(y?(d(T),T=-1):y=!0,Ul(I,O-$))):(P.sortIndex=Z,n(s,P),S||v||(S=!0,Hl(C))),P},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(P){var M=g;return function(){var O=g;g=M;try{return P.apply(this,arguments)}finally{g=O}}}})(eu);qs.exports=eu;var Hd=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=A,ve=Hd;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nu=new Set,$t={};function Kn(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for($t[e]=n,e=0;e<n.length;e++)nu.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,Vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sa={},xa={};function Fd(e){return yi.call(xa,e)?!0:yi.call(Sa,e)?!1:Vd.test(e)?xa[e]=!0:(Sa[e]=!0,!1)}function $d(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wd(e,n,t,r){if(n===null||typeof n>"u"||$d(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var xo=/[\-:]([a-z])/g;function wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xo,wo);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xo,wo);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xo,wo);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Co(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Wd(n,t,l,r)&&(t=null),r||l===null?Fd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var be=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),ko=Symbol.for("react.strict_mode"),vi=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),Po=Symbol.for("react.forward_ref"),Si=Symbol.for("react.suspense"),xi=Symbol.for("react.suspense_list"),Eo=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),wa=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,$l;function Lt(e){if($l===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);$l=n&&n[1]||""}return`
`+$l+e}var Wl=!1;function Ql(e,n){if(!e||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Lt(e):""}function Qd(e){switch(e.tag){case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Vn:return"Portal";case vi:return"Profiler";case ko:return"StrictMode";case Si:return"Suspense";case xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ru:return(e.displayName||"Context")+".Consumer";case tu:return(e._context.displayName||"Context")+".Provider";case Po:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eo:return n=e.displayName||null,n!==null?n:wi(e.type)||"Memo";case nn:n=e._payload,e=e._init;try{return wi(e(n))}catch{}}return null}function Xd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wi(n);case 8:return n===ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yd(e){var n=iu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xr(e){e._valueTracker||(e._valueTracker=Yd(e))}function ou(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=iu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ca(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=In(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function au(e,n){n=n.checked,n!=null&&Co(e,"checked",n,!1)}function ki(e,n){au(e,n);var t=In(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Pi(e,n.type,In(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ka(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Pi(e,n,t){(n!=="number"||Jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var jt=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+In(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ei(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(jt(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:In(t)}}function su(e,n){var t=In(n.value),r=In(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ea(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?uu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Wt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Gt).forEach(function(e){Jd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Gt[n]=Gt[e]})});function du(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Gt.hasOwnProperty(e)&&Gt[e]?(""+n).trim():n+"px"}function fu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=du(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Zd=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,n){if(n){if(Zd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function Mi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,rt=null,lt=null;function Na(e){if(e=mr(e)){if(typeof Li!="function")throw Error(x(280));var n=e.stateNode;n&&(n=Tl(n),Li(e.stateNode,e.type,n))}}function pu(e){rt?lt?lt.push(e):lt=[e]:rt=e}function mu(){if(rt){var e=rt,n=lt;if(lt=rt=null,Na(e),n)for(e=0;e<n.length;e++)Na(n[e])}}function hu(e,n){return e(n)}function gu(){}var Xl=!1;function Au(e,n,t){if(Xl)return e(n,t);Xl=!0;try{return hu(e,n,t)}finally{Xl=!1,(rt!==null||lt!==null)&&(gu(),mu())}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=Tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var ji=!1;if(Xe)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){ji=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{ji=!1}function bd(e,n,t,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var _t=!1,Zr=null,br=!1,Di=null,qd={onError:function(e){_t=!0,Zr=e}};function ef(e,n,t,r,l,i,o,a,s){_t=!1,Zr=null,bd.apply(qd,arguments)}function nf(e,n,t,r,l,i,o,a,s){if(ef.apply(this,arguments),_t){if(_t){var c=Zr;_t=!1,Zr=null}else throw Error(x(198));br||(br=!0,Di=c)}}function zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Iu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ta(e){if(zn(e)!==e)throw Error(x(188))}function tf(e){var n=e.alternate;if(!n){if(n=zn(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Ta(l),e;if(i===r)return Ta(l),n;i=i.sibling}throw Error(x(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function yu(e){return e=tf(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=vu(e);if(n!==null)return n;e=e.sibling}return null}var Su=ve.unstable_scheduleCallback,Ma=ve.unstable_cancelCallback,rf=ve.unstable_shouldYield,lf=ve.unstable_requestPaint,W=ve.unstable_now,of=ve.unstable_getCurrentPriorityLevel,To=ve.unstable_ImmediatePriority,xu=ve.unstable_UserBlockingPriority,qr=ve.unstable_NormalPriority,af=ve.unstable_LowPriority,wu=ve.unstable_IdlePriority,kl=null,He=null;function sf(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:df,uf=Math.log,cf=Math.LN2;function df(e){return e>>>=0,e===0?32:31-(uf(e)/cf|0)|0}var Cr=64,kr=4194304;function Dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=Dt(a):(i&=o,i!==0&&(r=Dt(i)))}else o=t&~l,o!==0?r=Dt(o):i!==0&&(r=Dt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Re(n),l=1<<t,r|=e[t],n&=~l;return r}function ff(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Re(i),a=1<<o,s=l[o];s===-1?(!(a&t)||a&r)&&(l[o]=ff(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function Ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Yl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function fr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Re(n),e[n]=t}function mf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Re(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Mo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Re(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var R=0;function ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Oo,Eu,Nu,Tu,Gi=!1,Pr=[],un=null,cn=null,dn=null,Xt=new Map,Yt=new Map,rn=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oa(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Xt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function kt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=mr(n),n!==null&&Oo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function gf(e,n,t,r,l){switch(n){case"focusin":return un=kt(un,e,n,t,r,l),!0;case"dragenter":return cn=kt(cn,e,n,t,r,l),!0;case"mouseover":return dn=kt(dn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Xt.set(i,kt(Xt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yt.set(i,kt(Yt.get(i)||null,e,n,t,r,l)),!0}return!1}function Mu(e){var n=Nn(e.target);if(n!==null){var t=zn(n);if(t!==null){if(n=t.tag,n===13){if(n=Iu(t),n!==null){e.blockedOn=n,Tu(e.priority,function(){Eu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_i(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Oi=r,t.target.dispatchEvent(r),Oi=null}else return n=mr(t),n!==null&&Oo(n),e.blockedOn=t,!1;n.shift()}return!0}function La(e,n,t){zr(e)&&t.delete(n)}function Af(){Gi=!1,un!==null&&zr(un)&&(un=null),cn!==null&&zr(cn)&&(cn=null),dn!==null&&zr(dn)&&(dn=null),Xt.forEach(La),Yt.forEach(La)}function Pt(e,n){e.blockedOn===n&&(e.blockedOn=null,Gi||(Gi=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,Af)))}function Jt(e){function n(l){return Pt(l,e)}if(0<Pr.length){Pt(Pr[0],e);for(var t=1;t<Pr.length;t++){var r=Pr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Pt(un,e),cn!==null&&Pt(cn,e),dn!==null&&Pt(dn,e),Xt.forEach(n),Yt.forEach(n),t=0;t<rn.length;t++)r=rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)Mu(t),t.blockedOn===null&&rn.shift()}var it=be.ReactCurrentBatchConfig,nl=!0;function If(e,n,t,r){var l=R,i=it.transition;it.transition=null;try{R=1,Lo(e,n,t,r)}finally{R=l,it.transition=i}}function yf(e,n,t,r){var l=R,i=it.transition;it.transition=null;try{R=4,Lo(e,n,t,r)}finally{R=l,it.transition=i}}function Lo(e,n,t,r){if(nl){var l=_i(e,n,t,r);if(l===null)ii(e,n,r,tl,t),Oa(e,r);else if(gf(l,e,n,t,r))r.stopPropagation();else if(Oa(e,r),n&4&&-1<hf.indexOf(e)){for(;l!==null;){var i=mr(l);if(i!==null&&Pu(i),i=_i(e,n,t,r),i===null&&ii(e,n,r,tl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else ii(e,n,r,null,t)}}var tl=null;function _i(e,n,t,r){if(tl=null,e=No(r),e=Nn(e),e!==null)if(n=zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Iu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return tl=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(of()){case To:return 1;case xu:return 4;case qr:case af:return 16;case wu:return 536870912;default:return 16}default:return 16}}var on=null,jo=null,Hr=null;function Lu(){if(Hr)return Hr;var e,n=jo,t=n.length,r,l="value"in on?on.value:on.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Hr=l.slice(e,1<r?1-r:void 0)}function Ur(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function ja(){return!1}function xe(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Er:ja,this.isPropagationStopped=ja,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=xe(gt),pr=U({},gt,{view:0,detail:0}),vf=xe(pr),Jl,Zl,Et,Pl=U({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Et&&(Et&&e.type==="mousemove"?(Jl=e.screenX-Et.screenX,Zl=e.screenY-Et.screenY):Zl=Jl=0,Et=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Da=xe(Pl),Sf=U({},Pl,{dataTransfer:0}),xf=xe(Sf),wf=U({},pr,{relatedTarget:0}),bl=xe(wf),Cf=U({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),kf=xe(Cf),Pf=U({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ef=xe(Pf),Nf=U({},gt,{data:0}),Ra=xe(Nf),Tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Of[e])?!!n[e]:!1}function Ro(){return Lf}var jf=U({},pr,{key:function(e){if(e.key){var n=Tf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Df=xe(jf),Rf=U({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ga=xe(Rf),Gf=U({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),_f=xe(Gf),Bf=U({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=xe(Bf),zf=U({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hf=xe(zf),Uf=[9,13,27,32],Go=Xe&&"CompositionEvent"in window,Bt=null;Xe&&"documentMode"in document&&(Bt=document.documentMode);var Vf=Xe&&"TextEvent"in window&&!Bt,ju=Xe&&(!Go||Bt&&8<Bt&&11>=Bt),_a=" ",Ba=!1;function Du(e,n){switch(e){case"keyup":return Uf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Ff(e,n){switch(e){case"compositionend":return Ru(n);case"keypress":return n.which!==32?null:(Ba=!0,_a);case"textInput":return e=n.data,e===_a&&Ba?null:e;default:return null}}function $f(e,n){if($n)return e==="compositionend"||!Go&&Du(e,n)?(e=Lu(),Hr=jo=on=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ju&&n.locale!=="ko"?null:n.data;default:return null}}var Wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ka(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wf[e.type]:n==="textarea"}function Gu(e,n,t,r){pu(r),n=rl(n,"onChange"),0<n.length&&(t=new Do("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Kt=null,Zt=null;function Qf(e){Qu(e,0)}function El(e){var n=Xn(e);if(ou(n))return e}function Xf(e,n){if(e==="change")return n}var _u=!1;if(Xe){var ql;if(Xe){var ei="oninput"in document;if(!ei){var za=document.createElement("div");za.setAttribute("oninput","return;"),ei=typeof za.oninput=="function"}ql=ei}else ql=!1;_u=ql&&(!document.documentMode||9<document.documentMode)}function Ha(){Kt&&(Kt.detachEvent("onpropertychange",Bu),Zt=Kt=null)}function Bu(e){if(e.propertyName==="value"&&El(Zt)){var n=[];Gu(n,Zt,e,No(e)),Au(Qf,n)}}function Yf(e,n,t){e==="focusin"?(Ha(),Kt=n,Zt=t,Kt.attachEvent("onpropertychange",Bu)):e==="focusout"&&Ha()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Zt)}function Zf(e,n){if(e==="click")return El(n)}function bf(e,n){if(e==="input"||e==="change")return El(n)}function qf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _e=typeof Object.is=="function"?Object.is:qf;function bt(e,n){if(_e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!yi.call(n,l)||!_e(e[l],n[l]))return!1}return!0}function Ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Va(e,n){var t=Ua(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ua(t)}}function Ku(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ku(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zu(){for(var e=window,n=Jr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Jr(e.document)}return n}function _o(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function e0(e){var n=zu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ku(t.ownerDocument.documentElement,t)){if(r!==null&&_o(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Va(t,i);var o=Va(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n0=Xe&&"documentMode"in document&&11>=document.documentMode,Wn=null,Bi=null,zt=null,Ki=!1;function Fa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ki||Wn==null||Wn!==Jr(r)||(r=Wn,"selectionStart"in r&&_o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zt&&bt(zt,r)||(zt=r,r=rl(Bi,"onSelect"),0<r.length&&(n=new Do("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Wn)))}function Nr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qn={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},ni={},Hu={};Xe&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Nl(e){if(ni[e])return ni[e];if(!Qn[e])return e;var n=Qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hu)return ni[e]=n[t];return e}var Uu=Nl("animationend"),Vu=Nl("animationiteration"),Fu=Nl("animationstart"),$u=Nl("transitionend"),Wu=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,n){Wu.set(e,n),Kn(n,[e])}for(var ti=0;ti<$a.length;ti++){var ri=$a[ti],t0=ri.toLowerCase(),r0=ri[0].toUpperCase()+ri.slice(1);vn(t0,"on"+r0)}vn(Uu,"onAnimationEnd");vn(Vu,"onAnimationIteration");vn(Fu,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn($u,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Wa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,nf(r,n,void 0,e),e.currentTarget=null}function Qu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Wa(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Wa(l,a,c),i=s}}}if(br)throw e=Di,br=!1,Di=null,e}function _(e,n){var t=n[Fi];t===void 0&&(t=n[Fi]=new Set);var r=e+"__bubble";t.has(r)||(Xu(n,e,2,!1),t.add(r))}function li(e,n,t){var r=0;n&&(r|=4),Xu(t,e,r,n)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function qt(e){if(!e[Tr]){e[Tr]=!0,nu.forEach(function(t){t!=="selectionchange"&&(l0.has(t)||li(t,!1,e),li(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tr]||(n[Tr]=!0,li("selectionchange",!1,n))}}function Xu(e,n,t,r){switch(Ou(n)){case 1:var l=If;break;case 4:l=yf;break;default:l=Lo}t=l.bind(null,n,t,e),l=void 0,!ji||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ii(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Nn(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Au(function(){var c=i,h=No(t),m=[];e:{var g=Wu.get(e);if(g!==void 0){var v=Do,S=e;switch(e){case"keypress":if(Ur(t)===0)break e;case"keydown":case"keyup":v=Df;break;case"focusin":S="focus",v=bl;break;case"focusout":S="blur",v=bl;break;case"beforeblur":case"afterblur":v=bl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_f;break;case Uu:case Vu:case Fu:v=kf;break;case $u:v=Kf;break;case"scroll":v=vf;break;case"wheel":v=Hf;break;case"copy":case"cut":case"paste":v=Ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ga}var y=(n&4)!==0,w=!y&&e==="scroll",d=y?g!==null?g+"Capture":null:g;y=[];for(var f=c,p;f!==null;){p=f;var I=p.stateNode;if(p.tag===5&&I!==null&&(p=I,d!==null&&(I=Qt(f,d),I!=null&&y.push(er(f,I,p)))),w)break;f=f.return}0<y.length&&(g=new v(g,S,null,t,h),m.push({event:g,listeners:y}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&t!==Oi&&(S=t.relatedTarget||t.fromElement)&&(Nn(S)||S[Ye]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(S=t.relatedTarget||t.toElement,v=c,S=S?Nn(S):null,S!==null&&(w=zn(S),S!==w||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(y=Da,I="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ga,I="onPointerLeave",d="onPointerEnter",f="pointer"),w=v==null?g:Xn(v),p=S==null?g:Xn(S),g=new y(I,f+"leave",v,t,h),g.target=w,g.relatedTarget=p,I=null,Nn(h)===c&&(y=new y(d,f+"enter",S,t,h),y.target=p,y.relatedTarget=w,I=y),w=I,v&&S)n:{for(y=v,d=S,f=0,p=y;p;p=Hn(p))f++;for(p=0,I=d;I;I=Hn(I))p++;for(;0<f-p;)y=Hn(y),f--;for(;0<p-f;)d=Hn(d),p--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break n;y=Hn(y),d=Hn(d)}y=null}else y=null;v!==null&&Qa(m,g,v,y,!1),S!==null&&w!==null&&Qa(m,w,S,y,!0)}}e:{if(g=c?Xn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var C=Xf;else if(Ka(g))if(_u)C=bf;else{C=Jf;var E=Yf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Zf);if(C&&(C=C(e,c))){Gu(m,C,t,h);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Pi(g,"number",g.value)}switch(E=c?Xn(c):window,e){case"focusin":(Ka(E)||E.contentEditable==="true")&&(Wn=E,Bi=c,zt=null);break;case"focusout":zt=Bi=Wn=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Fa(m,t,h);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":Fa(m,t,h)}var N;if(Go)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else $n?Du(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(ju&&t.locale!=="ko"&&($n||T!=="onCompositionStart"?T==="onCompositionEnd"&&$n&&(N=Lu()):(on=h,jo="value"in on?on.value:on.textContent,$n=!0)),E=rl(c,T),0<E.length&&(T=new Ra(T,e,null,t,h),m.push({event:T,listeners:E}),N?T.data=N:(N=Ru(t),N!==null&&(T.data=N)))),(N=Vf?Ff(e,t):$f(e,t))&&(c=rl(c,"onBeforeInput"),0<c.length&&(h=new Ra("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=N))}Qu(m,n)})}function er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function rl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Qt(e,t),i!=null&&r.unshift(er(e,i,l)),i=Qt(e,n),i!=null&&r.push(er(e,i,l))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Qt(t,i),s!=null&&o.unshift(er(t,s,a))):l||(s=Qt(t,i),s!=null&&o.push(er(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var i0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Xa(e){return(typeof e=="string"?e:""+e).replace(i0,`
`).replace(o0,"")}function Mr(e,n,t){if(n=Xa(n),Xa(e)!==n&&t)throw Error(x(425))}function ll(){}var zi=null,Hi=null;function Ui(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(u0)}:Vi;function u0(e){setTimeout(function(){throw e})}function oi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Jt(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var At=Math.random().toString(36).slice(2),ze="__reactFiber$"+At,nr="__reactProps$"+At,Ye="__reactContainer$"+At,Fi="__reactEvents$"+At,c0="__reactListeners$"+At,d0="__reactHandles$"+At;function Nn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ye]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ja(e);e!==null;){if(t=e[ze])return t;e=Ja(e)}return n}e=t,t=e.parentNode}return null}function mr(e){return e=e[ze]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Tl(e){return e[nr]||null}var $i=[],Yn=-1;function Sn(e){return{current:e}}function B(e){0>Yn||(e.current=$i[Yn],$i[Yn]=null,Yn--)}function G(e,n){Yn++,$i[Yn]=e.current,e.current=n}var yn={},oe=Sn(yn),me=Sn(!1),jn=yn;function ut(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function il(){B(me),B(oe)}function Za(e,n,t){if(oe.current!==yn)throw Error(x(168));G(oe,n),G(me,t)}function Yu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(x(108,Xd(e)||"Unknown",l));return U({},t,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,jn=oe.current,G(oe,e),G(me,me.current),!0}function ba(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=Yu(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,B(me),B(oe),G(oe,e)):B(me),G(me,t)}var Fe=null,Ml=!1,ai=!1;function Ju(e){Fe===null?Fe=[e]:Fe.push(e)}function f0(e){Ml=!0,Ju(e)}function xn(){if(!ai&&Fe!==null){ai=!0;var e=0,n=R;try{var t=Fe;for(R=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fe=null,Ml=!1}catch(l){throw Fe!==null&&(Fe=Fe.slice(e+1)),Su(To,xn),l}finally{R=n,ai=!1}}return null}var Jn=[],Zn=0,al=null,sl=0,Ce=[],ke=0,Dn=null,$e=1,We="";function Pn(e,n){Jn[Zn++]=sl,Jn[Zn++]=al,al=e,sl=n}function Zu(e,n,t){Ce[ke++]=$e,Ce[ke++]=We,Ce[ke++]=Dn,Dn=e;var r=$e;e=We;var l=32-Re(r)-1;r&=~(1<<l),t+=1;var i=32-Re(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,$e=1<<32-Re(n)+l|t<<l|r,We=i+e}else $e=1<<i|t<<l|r,We=e}function Bo(e){e.return!==null&&(Pn(e,1),Zu(e,1,0))}function Ko(e){for(;e===al;)al=Jn[--Zn],Jn[Zn]=null,sl=Jn[--Zn],Jn[Zn]=null;for(;e===Dn;)Dn=Ce[--ke],Ce[ke]=null,We=Ce[--ke],Ce[ke]=null,$e=Ce[--ke],Ce[ke]=null}var ye=null,Ie=null,K=!1,De=null;function bu(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,Ie=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,Ie=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(K){var n=Ie;if(n){var t=n;if(!qa(e,n)){if(Wi(e))throw Error(x(418));n=fn(t.nextSibling);var r=ye;n&&qa(e,n)?bu(r,t):(e.flags=e.flags&-4097|2,K=!1,ye=e)}}else{if(Wi(e))throw Error(x(418));e.flags=e.flags&-4097|2,K=!1,ye=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Or(e){if(e!==ye)return!1;if(!K)return es(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ui(e.type,e.memoizedProps)),n&&(n=Ie)){if(Wi(e))throw qu(),Error(x(418));for(;n;)bu(e,n),n=fn(n.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=ye?fn(e.stateNode.nextSibling):null;return!0}function qu(){for(var e=Ie;e;)e=fn(e.nextSibling)}function ct(){Ie=ye=null,K=!1}function zo(e){De===null?De=[e]:De.push(e)}var p0=be.ReactCurrentBatchConfig;function Nt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function Lr(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ns(e){var n=e._init;return n(e._payload)}function ec(e){function n(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function t(d,f){if(!e)return null;for(;f!==null;)n(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function l(d,f){return d=gn(d,f),d.index=0,d.sibling=null,d}function i(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,I){return f===null||f.tag!==6?(f=mi(p,d.mode,I),f.return=d,f):(f=l(f,p),f.return=d,f)}function s(d,f,p,I){var C=p.type;return C===Fn?h(d,f,p.props.children,I,p.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nn&&ns(C)===f.type)?(I=l(f,p.props),I.ref=Nt(d,f,p),I.return=d,I):(I=Yr(p.type,p.key,p.props,null,d.mode,I),I.ref=Nt(d,f,p),I.return=d,I)}function c(d,f,p,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=hi(p,d.mode,I),f.return=d,f):(f=l(f,p.children||[]),f.return=d,f)}function h(d,f,p,I,C){return f===null||f.tag!==7?(f=Ln(p,d.mode,I,C),f.return=d,f):(f=l(f,p),f.return=d,f)}function m(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=mi(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:return p=Yr(f.type,f.key,f.props,null,d.mode,p),p.ref=Nt(d,null,f),p.return=d,p;case Vn:return f=hi(f,d.mode,p),f.return=d,f;case nn:var I=f._init;return m(d,I(f._payload),p)}if(jt(f)||wt(f))return f=Ln(f,d.mode,p,null),f.return=d,f;Lr(d,f)}return null}function g(d,f,p,I){var C=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(d,f,""+p,I);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===C?s(d,f,p,I):null;case Vn:return p.key===C?c(d,f,p,I):null;case nn:return C=p._init,g(d,f,C(p._payload),I)}if(jt(p)||wt(p))return C!==null?null:h(d,f,p,I,null);Lr(d,p)}return null}function v(d,f,p,I,C){if(typeof I=="string"&&I!==""||typeof I=="number")return d=d.get(p)||null,a(f,d,""+I,C);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Sr:return d=d.get(I.key===null?p:I.key)||null,s(f,d,I,C);case Vn:return d=d.get(I.key===null?p:I.key)||null,c(f,d,I,C);case nn:var E=I._init;return v(d,f,p,E(I._payload),C)}if(jt(I)||wt(I))return d=d.get(p)||null,h(f,d,I,C,null);Lr(f,I)}return null}function S(d,f,p,I){for(var C=null,E=null,N=f,T=f=0,F=null;N!==null&&T<p.length;T++){N.index>T?(F=N,N=null):F=N.sibling;var j=g(d,N,p[T],I);if(j===null){N===null&&(N=F);break}e&&N&&j.alternate===null&&n(d,N),f=i(j,f,T),E===null?C=j:E.sibling=j,E=j,N=F}if(T===p.length)return t(d,N),K&&Pn(d,T),C;if(N===null){for(;T<p.length;T++)N=m(d,p[T],I),N!==null&&(f=i(N,f,T),E===null?C=N:E.sibling=N,E=N);return K&&Pn(d,T),C}for(N=r(d,N);T<p.length;T++)F=v(N,d,T,p[T],I),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?T:F.key),f=i(F,f,T),E===null?C=F:E.sibling=F,E=F);return e&&N.forEach(function(Me){return n(d,Me)}),K&&Pn(d,T),C}function y(d,f,p,I){var C=wt(p);if(typeof C!="function")throw Error(x(150));if(p=C.call(p),p==null)throw Error(x(151));for(var E=C=null,N=f,T=f=0,F=null,j=p.next();N!==null&&!j.done;T++,j=p.next()){N.index>T?(F=N,N=null):F=N.sibling;var Me=g(d,N,j.value,I);if(Me===null){N===null&&(N=F);break}e&&N&&Me.alternate===null&&n(d,N),f=i(Me,f,T),E===null?C=Me:E.sibling=Me,E=Me,N=F}if(j.done)return t(d,N),K&&Pn(d,T),C;if(N===null){for(;!j.done;T++,j=p.next())j=m(d,j.value,I),j!==null&&(f=i(j,f,T),E===null?C=j:E.sibling=j,E=j);return K&&Pn(d,T),C}for(N=r(d,N);!j.done;T++,j=p.next())j=v(N,d,T,j.value,I),j!==null&&(e&&j.alternate!==null&&N.delete(j.key===null?T:j.key),f=i(j,f,T),E===null?C=j:E.sibling=j,E=j);return e&&N.forEach(function(St){return n(d,St)}),K&&Pn(d,T),C}function w(d,f,p,I){if(typeof p=="object"&&p!==null&&p.type===Fn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var C=p.key,E=f;E!==null;){if(E.key===C){if(C=p.type,C===Fn){if(E.tag===7){t(d,E.sibling),f=l(E,p.props.children),f.return=d,d=f;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nn&&ns(C)===E.type){t(d,E.sibling),f=l(E,p.props),f.ref=Nt(d,E,p),f.return=d,d=f;break e}t(d,E);break}else n(d,E);E=E.sibling}p.type===Fn?(f=Ln(p.props.children,d.mode,I,p.key),f.return=d,d=f):(I=Yr(p.type,p.key,p.props,null,d.mode,I),I.ref=Nt(d,f,p),I.return=d,d=I)}return o(d);case Vn:e:{for(E=p.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){t(d,f.sibling),f=l(f,p.children||[]),f.return=d,d=f;break e}else{t(d,f);break}else n(d,f);f=f.sibling}f=hi(p,d.mode,I),f.return=d,d=f}return o(d);case nn:return E=p._init,w(d,f,E(p._payload),I)}if(jt(p))return S(d,f,p,I);if(wt(p))return y(d,f,p,I);Lr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(t(d,f.sibling),f=l(f,p),f.return=d,d=f):(t(d,f),f=mi(p,d.mode,I),f.return=d,d=f),o(d)):t(d,f)}return w}var dt=ec(!0),nc=ec(!1),ul=Sn(null),cl=null,bn=null,Ho=null;function Uo(){Ho=bn=cl=null}function Vo(e){var n=ul.current;B(ul),e._currentValue=n}function Xi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ot(e,n){cl=e,Ho=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Ho!==e)if(e={context:e,memoizedValue:n,next:null},bn===null){if(cl===null)throw Error(x(308));bn=e,cl.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return n}var Tn=null;function Fo(e){Tn===null?Tn=[e]:Tn.push(e)}function tc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Fo(n)):(t.next=l.next,l.next=t),n.interleaved=t,Je(e,r)}function Je(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tn=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Je(e,t)}return l=r.interleaved,l===null?(n.next=n,Fo(r)):(n.next=l.next,l.next=n),r.interleaved=n,Je(e,t)}function Vr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mo(e,t)}}function ts(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function dl(e,n,t,r){var l=e.updateQueue;tn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,h=c=s=null,a=i;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,y=a;switch(g=n,v=t,y.tag){case 1:if(S=y.payload,typeof S=="function"){m=S.call(v,m,g);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,g=typeof S=="function"?S.call(v,m,g):S,g==null)break e;m=U({},m,g);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,s=m):h=h.next=v,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Gn|=o,e.lanes=o,e.memoizedState=m}}function rs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var hr={},Ue=Sn(hr),tr=Sn(hr),rr=Sn(hr);function Mn(e){if(e===hr)throw Error(x(174));return e}function Wo(e,n){switch(G(rr,n),G(tr,e),G(Ue,hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ni(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ni(n,e)}B(Ue),G(Ue,n)}function ft(){B(Ue),B(tr),B(rr)}function lc(e){Mn(rr.current);var n=Mn(Ue.current),t=Ni(n,e.type);n!==t&&(G(tr,e),G(Ue,t))}function Qo(e){tr.current===e&&(B(Ue),B(tr))}var z=Sn(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var si=[];function Xo(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var Fr=be.ReactCurrentDispatcher,ui=be.ReactCurrentBatchConfig,Rn=0,H=null,Y=null,b=null,pl=!1,Ht=!1,lr=0,m0=0;function re(){throw Error(x(321))}function Yo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_e(e[t],n[t]))return!1;return!0}function Jo(e,n,t,r,l,i){if(Rn=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fr.current=e===null||e.memoizedState===null?I0:y0,e=t(r,l),Ht){i=0;do{if(Ht=!1,lr=0,25<=i)throw Error(x(301));i+=1,b=Y=null,n.updateQueue=null,Fr.current=v0,e=t(r,l)}while(Ht)}if(Fr.current=ml,n=Y!==null&&Y.next!==null,Rn=0,b=Y=H=null,pl=!1,n)throw Error(x(300));return e}function Zo(){var e=lr!==0;return lr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?H.memoizedState=b=e:b=b.next=e,b}function Te(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=b===null?H.memoizedState:b.next;if(n!==null)b=n,Y=e;else{if(e===null)throw Error(x(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},b===null?H.memoizedState=b=e:b=b.next=e}return b}function ir(e,n){return typeof n=="function"?n(e):n}function ci(e){var n=Te(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var h=c.lane;if((Rn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,o=r):s=s.next=m,H.lanes|=h,Gn|=h}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,_e(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Gn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function di(e){var n=Te(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);_e(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function ic(){}function oc(e,n){var t=H,r=Te(),l=n(),i=!_e(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,bo(uc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,or(9,sc.bind(null,t,r,l,n),void 0,null),q===null)throw Error(x(349));Rn&30||ac(t,n,l)}return l}function ac(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function sc(e,n,t,r){n.value=t,n.getSnapshot=r,cc(n)&&dc(e)}function uc(e,n,t){return t(function(){cc(n)&&dc(e)})}function cc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_e(e,t)}catch{return!0}}function dc(e){var n=Je(e,1);n!==null&&Ge(n,e,1,-1)}function ls(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=A0.bind(null,H,e),[n.memoizedState,e]}function or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function fc(){return Te().memoizedState}function $r(e,n,t,r){var l=Ke();H.flags|=e,l.memoizedState=or(1|n,t,void 0,r===void 0?null:r)}function Ol(e,n,t,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&Yo(r,o.deps)){l.memoizedState=or(n,t,i,r);return}}H.flags|=e,l.memoizedState=or(1|n,t,i,r)}function is(e,n){return $r(8390656,8,e,n)}function bo(e,n){return Ol(2048,8,e,n)}function pc(e,n){return Ol(4,2,e,n)}function mc(e,n){return Ol(4,4,e,n)}function hc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gc(e,n,t){return t=t!=null?t.concat([e]):null,Ol(4,4,hc.bind(null,n,e),t)}function qo(){}function Ac(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ic(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function yc(e,n,t){return Rn&21?(_e(t,n)||(t=Cu(),H.lanes|=t,Gn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function h0(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),n()}finally{R=t,ui.transition=r}}function vc(){return Te().memoizedState}function g0(e,n,t){var r=hn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))xc(n,t);else if(t=tc(e,n,t,r),t!==null){var l=se();Ge(t,e,r,l),wc(t,n,r)}}function A0(e,n,t){var r=hn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))xc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,_e(a,o)){var s=n.interleaved;s===null?(l.next=l,Fo(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=tc(e,n,l,r),t!==null&&(l=se(),Ge(t,e,r,l),wc(t,n,r))}}function Sc(e){var n=e.alternate;return e===H||n!==null&&n===H}function xc(e,n){Ht=pl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function wc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mo(e,t)}}var ml={readContext:Ne,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},I0={readContext:Ne,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:is,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$r(4194308,4,hc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $r(4194308,4,e,n)},useInsertionEffect:function(e,n){return $r(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ke();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=g0.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:ls,useDebugValue:qo,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=ls(!1),n=e[0];return e=h0.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,l=Ke();if(K){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),q===null)throw Error(x(349));Rn&30||ac(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,is(uc.bind(null,r,i,e),[e]),r.flags|=2048,or(9,sc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ke(),n=q.identifierPrefix;if(K){var t=We,r=$e;t=(r&~(1<<32-Re(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=m0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},y0={readContext:Ne,useCallback:Ac,useContext:Ne,useEffect:bo,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:Ic,useReducer:ci,useRef:fc,useState:function(){return ci(ir)},useDebugValue:qo,useDeferredValue:function(e){var n=Te();return yc(n,Y.memoizedState,e)},useTransition:function(){var e=ci(ir)[0],n=Te().memoizedState;return[e,n]},useMutableSource:ic,useSyncExternalStore:oc,useId:vc,unstable_isNewReconciler:!1},v0={readContext:Ne,useCallback:Ac,useContext:Ne,useEffect:bo,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:Ic,useReducer:di,useRef:fc,useState:function(){return di(ir)},useDebugValue:qo,useDeferredValue:function(e){var n=Te();return Y===null?n.memoizedState=e:yc(n,Y.memoizedState,e)},useTransition:function(){var e=di(ir)[0],n=Te().memoizedState;return[e,n]},useMutableSource:ic,useSyncExternalStore:oc,useId:vc,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ll={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=hn(e),i=Qe(r,l);i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,l),n!==null&&(Ge(n,e,l,r),Vr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=hn(e),i=Qe(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,l),n!==null&&(Ge(n,e,l,r),Vr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=hn(e),l=Qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=pn(e,l,r),n!==null&&(Ge(n,e,r,t),Vr(n,e,r))}};function os(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!bt(t,r)||!bt(l,i):!0}function Cc(e,n,t){var r=!1,l=yn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(l=he(n)?jn:oe.current,r=n.contextTypes,i=(r=r!=null)?ut(e,l):yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ll,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function as(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ll.enqueueReplaceState(n,n.state,null)}function Ji(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},$o(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Ne(i):(i=he(n)?jn:oe.current,l.context=ut(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Yi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Ll.enqueueReplaceState(l,l.state,null),dl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=Qd(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function fi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function kc(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gl||(gl=!0,ao=r),Zi(e,n)},t}function Pc(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Zi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Zi(e,n),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function ss(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new S0;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=R0.bind(null,e,n,t),n.then(e,e))}function us(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,pn(t,n,1))),t.lanes|=1),e)}var x0=be.ReactCurrentOwner,pe=!1;function ae(e,n,t,r){n.child=e===null?nc(n,null,t,r):dt(n,e.child,t,r)}function ds(e,n,t,r,l){t=t.render;var i=n.ref;return ot(n,l),r=Jo(e,n,t,r,i,l),t=Zo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(K&&t&&Bo(n),n.flags|=1,ae(e,n,r,l),n.child)}function fs(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ec(e,n,i,r,l)):(e=Yr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:bt,t(o,r)&&e.ref===n.ref)return Ze(e,n,l)}return n.flags|=1,e=gn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ec(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(bt(i,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,l)}return bi(e,n,t,r,l)}function Nc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(et,Ae),Ae|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,G(et,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,G(et,Ae),Ae|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,G(et,Ae),Ae|=r;return ae(e,n,l,t),n.child}function Tc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bi(e,n,t,r,l){var i=he(t)?jn:oe.current;return i=ut(n,i),ot(n,l),t=Jo(e,n,t,r,i,l),r=Zo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(K&&r&&Bo(n),n.flags|=1,ae(e,n,t,l),n.child)}function ps(e,n,t,r,l){if(he(t)){var i=!0;ol(n)}else i=!1;if(ot(n,l),n.stateNode===null)Wr(e,n),Cc(n,t,r),Ji(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=he(t)?jn:oe.current,c=ut(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&as(n,o,r,c),tn=!1;var g=n.memoizedState;o.state=g,dl(n,r,o,l),s=n.memoizedState,a!==r||g!==s||me.current||tn?(typeof h=="function"&&(Yi(n,t,h,r),s=n.memoizedState),(a=tn||os(n,t,a,r,g,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,rc(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Le(n.type,a),o.props=c,m=n.pendingProps,g=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=he(t)?jn:oe.current,s=ut(n,s));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==s)&&as(n,o,r,s),tn=!1,g=n.memoizedState,o.state=g,dl(n,r,o,l);var S=n.memoizedState;a!==m||g!==S||me.current||tn?(typeof v=="function"&&(Yi(n,t,v,r),S=n.memoizedState),(c=tn||os(n,t,c,r,g,S,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return qi(e,n,t,r,i,l)}function qi(e,n,t,r,l,i){Tc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&ba(n,t,!1),Ze(e,n,i);r=n.stateNode,x0.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=dt(n,e.child,null,i),n.child=dt(n,null,a,i)):ae(e,n,a,i),n.memoizedState=r.state,l&&ba(n,t,!0),n.child}function Mc(e){var n=e.stateNode;n.pendingContext?Za(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Za(e,n.context,!1),Wo(e,n.containerInfo)}function ms(e,n,t,r,l){return ct(),zo(l),n.flags|=256,ae(e,n,t,r),n.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function no(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,n,t){var r=n.pendingProps,l=z.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),G(z,l&1),e===null)return Qi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Rl(o,r,0,null),e=Ln(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=no(t),n.memoizedState=eo,e):ea(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return w0(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=gn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=gn(a,i):(i=Ln(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?no(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=eo,r}return i=e.child,e=i.sibling,r=gn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ea(e,n){return n=Rl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function jr(e,n,t,r){return r!==null&&zo(r),dt(n,e.child,null,t),e=ea(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function w0(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=fi(Error(x(422))),jr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Rl({mode:"visible",children:r.children},l,0,null),i=Ln(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&dt(n,e.child,null,o),n.child.memoizedState=no(o),n.memoizedState=eo,i);if(!(n.mode&1))return jr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=fi(i,r,void 0),jr(e,n,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Je(e,l),Ge(r,e,l,-1))}return oa(),r=fi(Error(x(421))),jr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=G0.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Ie=fn(l.nextSibling),ye=n,K=!0,De=null,e!==null&&(Ce[ke++]=$e,Ce[ke++]=We,Ce[ke++]=Dn,$e=e.id,We=e.overflow,Dn=n),n=ea(n,r.children),n.flags|=4096,n)}function hs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Xi(e.return,n,t)}function pi(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Lc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,n,r.children,t),r=z.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hs(e,t,n);else if(e.tag===19)hs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(z,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&fl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),pi(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&fl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}pi(n,!0,t,null,i);break;case"together":pi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=gn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function C0(e,n,t){switch(n.tag){case 3:Mc(n),ct();break;case 5:lc(n);break;case 1:he(n.type)&&ol(n);break;case 4:Wo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;G(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(G(z,z.current&1),n.flags|=128,null):t&n.child.childLanes?Oc(e,n,t):(G(z,z.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);G(z,z.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Lc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(z,z.current),r)break;return null;case 22:case 23:return n.lanes=0,Nc(e,n,t)}return Ze(e,n,t)}var jc,to,Dc,Rc;jc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};to=function(){};Dc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Mn(Ue.current);var i=null;switch(t){case"input":l=Ci(e,l),r=Ci(e,r),i=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":l=Ei(e,l),r=Ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}Ti(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($t.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($t.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&_("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Rc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Tt(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function k0(e,n,t){var r=n.pendingProps;switch(Ko(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return he(n.type)&&il(),le(n),null;case 3:return r=n.stateNode,ft(),B(me),B(oe),Xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(co(De),De=null))),to(e,n),le(n),null;case 5:Qo(n);var l=Mn(rr.current);if(t=n.type,e!==null&&n.stateNode!=null)Dc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return le(n),null}if(e=Mn(Ue.current),Or(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[ze]=n,r[nr]=i,e=(n.mode&1)!==0,t){case"dialog":_("cancel",r),_("close",r);break;case"iframe":case"object":case"embed":_("load",r);break;case"video":case"audio":for(l=0;l<Rt.length;l++)_(Rt[l],r);break;case"source":_("error",r);break;case"img":case"image":case"link":_("error",r),_("load",r);break;case"details":_("toggle",r);break;case"input":Ca(r,i),_("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_("invalid",r);break;case"textarea":Pa(r,i),_("invalid",r)}Ti(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),l=["children",""+a]):$t.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_("scroll",r)}switch(t){case"input":xr(r),ka(r,i,!0);break;case"textarea":xr(r),Ea(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ll)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[ze]=n,e[nr]=r,jc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Mi(t,r),t){case"dialog":_("cancel",e),_("close",e),l=r;break;case"iframe":case"object":case"embed":_("load",e),l=r;break;case"video":case"audio":for(l=0;l<Rt.length;l++)_(Rt[l],e);l=r;break;case"source":_("error",e),l=r;break;case"img":case"image":case"link":_("error",e),_("load",e),l=r;break;case"details":_("toggle",e),l=r;break;case"input":Ca(e,r),l=Ci(e,r),_("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),_("invalid",e);break;case"textarea":Pa(e,r),l=Ei(e,r),_("invalid",e);break;default:l=r}Ti(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?fu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cu(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Wt(e,s):typeof s=="number"&&Wt(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($t.hasOwnProperty(i)?s!=null&&i==="onScroll"&&_("scroll",e):s!=null&&Co(e,i,s,o))}switch(t){case"input":xr(e),ka(e,r,!1);break;case"textarea":xr(e),Ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tt(e,!!r.multiple,i,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ll)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Rc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=Mn(rr.current),Mn(Ue.current),Or(n)){if(r=n.stateNode,t=n.memoizedProps,r[ze]=n,(i=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ze]=n,n.stateNode=r}return le(n),null;case 13:if(B(z),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ie!==null&&n.mode&1&&!(n.flags&128))qu(),ct(),n.flags|=98560,i=!1;else if(i=Or(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[ze]=n}else ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),i=!1}else De!==null&&(co(De),De=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||z.current&1?J===0&&(J=3):oa())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ft(),to(e,n),e===null&&qt(n.stateNode.containerInfo),le(n),null;case 10:return Vo(n.type._context),le(n),null;case 17:return he(n.type)&&il(),le(n),null;case 19:if(B(z),i=n.memoizedState,i===null)return le(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Tt(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=fl(e),o!==null){for(n.flags|=128,Tt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return G(z,z.current&1|2),n.child}e=e.sibling}i.tail!==null&&W()>mt&&(n.flags|=128,r=!0,Tt(i,!1),n.lanes=4194304)}else{if(!r)if(e=fl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Tt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!K)return le(n),null}else 2*W()-i.renderingStartTime>mt&&t!==1073741824&&(n.flags|=128,r=!0,Tt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=W(),n.sibling=null,t=z.current,G(z,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return ia(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ae&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function P0(e,n){switch(Ko(n),n.tag){case 1:return he(n.type)&&il(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(),B(me),B(oe),Xo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Qo(n),null;case 13:if(B(z),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(z),null;case 4:return ft(),null;case 10:return Vo(n.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var Dr=!1,ie=!1,E0=typeof WeakSet=="function"?WeakSet:Set,k=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function ro(e,n,t){try{t()}catch(r){V(e,n,r)}}var gs=!1;function N0(e,n){if(zi=nl,e=zu(),_o(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,c=0,h=0,m=e,g=null;n:for(;;){for(var v;m!==t||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break n;if(g===t&&++c===l&&(a=o),g===i&&++h===r&&(s=o),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hi={focusedElem:e,selectionRange:t},nl=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,w=S.memoizedState,d=n.stateNode,f=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:Le(n.type,y),w);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(I){V(n,n.return,I)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return S=gs,gs=!1,S}function Ut(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ro(n,t,i)}l=l.next}while(l!==r)}}function jl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function lo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Gc(e){var n=e.alternate;n!==null&&(e.alternate=null,Gc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[nr],delete n[Fi],delete n[c0],delete n[d0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function As(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(io(e,n,t),e=e.sibling;e!==null;)io(e,n,t),e=e.sibling}function oo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,n,t),e=e.sibling;e!==null;)oo(e,n,t),e=e.sibling}var ee=null,je=!1;function en(e,n,t){for(t=t.child;t!==null;)Bc(e,n,t),t=t.sibling}function Bc(e,n,t){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(kl,t)}catch{}switch(t.tag){case 5:ie||qn(t,n);case 6:var r=ee,l=je;ee=null,en(e,n,t),ee=r,je=l,ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?oi(e.parentNode,t):e.nodeType===1&&oi(e,t),Jt(e)):oi(ee,t.stateNode));break;case 4:r=ee,l=je,ee=t.stateNode.containerInfo,je=!0,en(e,n,t),ee=r,je=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ro(t,n,o),l=l.next}while(l!==r)}en(e,n,t);break;case 1:if(!ie&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}en(e,n,t);break;case 21:en(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,en(e,n,t),ie=r):en(e,n,t);break;default:en(e,n,t)}}function Is(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new E0),n.forEach(function(r){var l=_0.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,je=!1;break e;case 3:ee=a.stateNode.containerInfo,je=!0;break e;case 4:ee=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(ee===null)throw Error(x(160));Bc(i,o,l),ee=null,je=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Kc(n,e),n=n.sibling}function Kc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),Be(e),r&4){try{Ut(3,e,e.return),jl(3,e)}catch(y){V(e,e.return,y)}try{Ut(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Oe(n,e),Be(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(Oe(n,e),Be(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var l=e.stateNode;try{Wt(l,"")}catch(y){V(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&au(l,i),Mi(a,o);var c=Mi(a,i);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?fu(l,m):h==="dangerouslySetInnerHTML"?cu(l,m):h==="children"?Wt(l,m):Co(l,h,m,c)}switch(a){case"input":ki(l,i);break;case"textarea":su(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?tt(l,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?tt(l,!!i.multiple,i.defaultValue,!0):tt(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(y){V(e,e.return,y)}}break;case 6:if(Oe(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){V(e,e.return,y)}}break;case 3:if(Oe(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Oe(n,e),Be(e);break;case 13:Oe(n,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ra=W())),r&4&&Is(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(c=ie)||h,Oe(n,e),ie=c):Oe(n,e),Be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(m=k=h;k!==null;){switch(g=k,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ut(4,g,g.return);break;case 1:qn(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(y){V(r,t,y)}}break;case 5:qn(g,g.return);break;case 22:if(g.memoizedState!==null){vs(m);continue}}v!==null?(v.return=g,k=v):vs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=du("display",o))}catch(y){V(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){V(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Oe(n,e),Be(e),r&4&&Is(e);break;case 21:break;default:Oe(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_c(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wt(l,""),r.flags&=-33);var i=As(e);oo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=As(e);io(e,a,o);break;default:throw Error(x(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function T0(e,n,t){k=e,zc(e)}function zc(e,n,t){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Dr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ie;a=Dr;var c=ie;if(Dr=o,(ie=s)&&!c)for(k=l;k!==null;)o=k,s=o.child,o.tag===22&&o.memoizedState!==null?Ss(l):s!==null?(s.return=o,k=s):Ss(l);for(;i!==null;)k=i,zc(i),i=i.sibling;k=l,Dr=a,ie=c}ys(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):ys(e)}}function ys(e){for(;k!==null;){var n=k;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||jl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&rs(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}rs(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Jt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||n.flags&512&&lo(n)}catch(g){V(n,n.return,g)}}if(n===e){k=null;break}if(t=n.sibling,t!==null){t.return=n.return,k=t;break}k=n.return}}function vs(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var t=n.sibling;if(t!==null){t.return=n.return,k=t;break}k=n.return}}function Ss(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{jl(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){V(n,l,s)}}var i=n.return;try{lo(n)}catch(s){V(n,i,s)}break;case 5:var o=n.return;try{lo(n)}catch(s){V(n,o,s)}}}catch(s){V(n,n.return,s)}if(n===e){k=null;break}var a=n.sibling;if(a!==null){a.return=n.return,k=a;break}k=n.return}}var M0=Math.ceil,hl=be.ReactCurrentDispatcher,na=be.ReactCurrentOwner,Ee=be.ReactCurrentBatchConfig,D=0,q=null,X=null,ne=0,Ae=0,et=Sn(0),J=0,ar=null,Gn=0,Dl=0,ta=0,Vt=null,de=null,ra=0,mt=1/0,Ve=null,gl=!1,ao=null,mn=null,Rr=!1,an=null,Al=0,Ft=0,so=null,Qr=-1,Xr=0;function se(){return D&6?W():Qr!==-1?Qr:Qr=W()}function hn(e){return e.mode&1?D&2&&ne!==0?ne&-ne:p0.transition!==null?(Xr===0&&(Xr=Cu()),Xr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e):1}function Ge(e,n,t,r){if(50<Ft)throw Ft=0,so=null,Error(x(185));fr(e,t,r),(!(D&2)||e!==q)&&(e===q&&(!(D&2)&&(Dl|=t),J===4&&ln(e,ne)),ge(e,r),t===1&&D===0&&!(n.mode&1)&&(mt=W()+500,Ml&&xn()))}function ge(e,n){var t=e.callbackNode;pf(e,n);var r=el(e,e===q?ne:0);if(r===0)t!==null&&Ma(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ma(t),n===1)e.tag===0?f0(xs.bind(null,e)):Ju(xs.bind(null,e)),s0(function(){!(D&6)&&xn()}),t=null;else{switch(ku(r)){case 1:t=To;break;case 4:t=xu;break;case 16:t=qr;break;case 536870912:t=wu;break;default:t=qr}t=Xc(t,Hc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Hc(e,n){if(Qr=-1,Xr=0,D&6)throw Error(x(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var r=el(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Il(e,r);else{n=r;var l=D;D|=2;var i=Vc();(q!==e||ne!==n)&&(Ve=null,mt=W()+500,On(e,n));do try{j0();break}catch(a){Uc(e,a)}while(!0);Uo(),hl.current=i,D=l,X!==null?n=0:(q=null,ne=0,n=J)}if(n!==0){if(n===2&&(l=Ri(e),l!==0&&(r=l,n=uo(e,l))),n===1)throw t=ar,On(e,0),ln(e,r),ge(e,W()),t;if(n===6)ln(e,r);else{if(l=e.current.alternate,!(r&30)&&!O0(l)&&(n=Il(e,r),n===2&&(i=Ri(e),i!==0&&(r=i,n=uo(e,i))),n===1))throw t=ar,On(e,0),ln(e,r),ge(e,W()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:En(e,de,Ve);break;case 3:if(ln(e,r),(r&130023424)===r&&(n=ra+500-W(),10<n)){if(el(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Vi(En.bind(null,e,de,Ve),n);break}En(e,de,Ve);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Re(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){e.timeoutHandle=Vi(En.bind(null,e,de,Ve),r);break}En(e,de,Ve);break;case 5:En(e,de,Ve);break;default:throw Error(x(329))}}}return ge(e,W()),e.callbackNode===t?Hc.bind(null,e):null}function uo(e,n){var t=Vt;return e.current.memoizedState.isDehydrated&&(On(e,n).flags|=256),e=Il(e,n),e!==2&&(n=de,de=t,n!==null&&co(n)),e}function co(e){de===null?de=e:de.push.apply(de,e)}function O0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!_e(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~ta,n&=~Dl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Re(n),r=1<<t;e[t]=-1,n&=~r}}function xs(e){if(D&6)throw Error(x(327));at();var n=el(e,0);if(!(n&1))return ge(e,W()),null;var t=Il(e,n);if(e.tag!==0&&t===2){var r=Ri(e);r!==0&&(n=r,t=uo(e,r))}if(t===1)throw t=ar,On(e,0),ln(e,n),ge(e,W()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,En(e,de,Ve),ge(e,W()),null}function la(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(mt=W()+500,Ml&&xn())}}function _n(e){an!==null&&an.tag===0&&!(D&6)&&at();var n=D;D|=1;var t=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=t,D=n,!(D&6)&&xn()}}function ia(){Ae=et.current,B(et)}function On(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,a0(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:ft(),B(me),B(oe),Xo();break;case 5:Qo(r);break;case 4:ft();break;case 13:B(z);break;case 19:B(z);break;case 10:Vo(r.type._context);break;case 22:case 23:ia()}t=t.return}if(q=e,X=e=gn(e.current,null),ne=Ae=n,J=0,ar=null,ta=Dl=Gn=0,de=Vt=null,Tn!==null){for(n=0;n<Tn.length;n++)if(t=Tn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Tn=null}return e}function Uc(e,n){do{var t=X;try{if(Uo(),Fr.current=ml,pl){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}pl=!1}if(Rn=0,b=Y=H=null,Ht=!1,lr=0,na.current=null,t===null||t.return===null){J=1,ar=n,X=null;break}e:{var i=e,o=t.return,a=t,s=n;if(n=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=us(o);if(v!==null){v.flags&=-257,cs(v,o,a,i,n),v.mode&1&&ss(i,c,n),n=v,s=c;var S=n.updateQueue;if(S===null){var y=new Set;y.add(s),n.updateQueue=y}else S.add(s);break e}else{if(!(n&1)){ss(i,c,n),oa();break e}s=Error(x(426))}}else if(K&&a.mode&1){var w=us(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),cs(w,o,a,i,n),zo(pt(s,a));break e}}i=s=pt(s,a),J!==4&&(J=2),Vt===null?Vt=[i]:Vt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=kc(i,s,n);ts(i,d);break e;case 1:a=s;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mn===null||!mn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var I=Pc(i,a,n);ts(i,I);break e}}i=i.return}while(i!==null)}$c(t)}catch(C){n=C,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function Vc(){var e=hl.current;return hl.current=ml,e===null?ml:e}function oa(){(J===0||J===3||J===2)&&(J=4),q===null||!(Gn&268435455)&&!(Dl&268435455)||ln(q,ne)}function Il(e,n){var t=D;D|=2;var r=Vc();(q!==e||ne!==n)&&(Ve=null,On(e,n));do try{L0();break}catch(l){Uc(e,l)}while(!0);if(Uo(),D=t,hl.current=r,X!==null)throw Error(x(261));return q=null,ne=0,J}function L0(){for(;X!==null;)Fc(X)}function j0(){for(;X!==null&&!rf();)Fc(X)}function Fc(e){var n=Qc(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?$c(e):X=n,na.current=null}function $c(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=P0(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(t=k0(t,n,Ae),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);J===0&&(J=5)}function En(e,n,t){var r=R,l=Ee.transition;try{Ee.transition=null,R=1,D0(e,n,t,r)}finally{Ee.transition=l,R=r}return null}function D0(e,n,t,r){do at();while(an!==null);if(D&6)throw Error(x(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(mf(e,i),e===q&&(X=q=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rr||(Rr=!0,Xc(qr,function(){return at(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=R;R=1;var a=D;D|=4,na.current=null,N0(e,t),Kc(t,e),e0(Hi),nl=!!zi,Hi=zi=null,e.current=t,T0(t),lf(),D=a,R=o,Ee.transition=i}else e.current=t;if(Rr&&(Rr=!1,an=e,Al=l),i=e.pendingLanes,i===0&&(mn=null),sf(t.stateNode),ge(e,W()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=ao,ao=null,e;return Al&1&&e.tag!==0&&at(),i=e.pendingLanes,i&1?e===so?Ft++:(Ft=0,so=e):Ft=0,xn(),null}function at(){if(an!==null){var e=ku(Al),n=Ee.transition,t=R;try{if(Ee.transition=null,R=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,Al=0,D&6)throw Error(x(331));var l=D;for(D|=4,k=e.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(k=c;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:Ut(8,h,i)}var m=h.child;if(m!==null)m.return=h,k=m;else for(;k!==null;){h=k;var g=h.sibling,v=h.return;if(Gc(h),h===c){k=null;break}if(g!==null){g.return=v,k=g;break}k=v}}}var S=i.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ut(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,k=d;break e}k=i.return}}var f=e.current;for(k=f;k!==null;){o=k;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,k=p;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(C){V(a,a.return,C)}if(a===o){k=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,k=I;break e}k=a.return}}if(D=l,xn(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{R=t,Ee.transition=n}}return!1}function ws(e,n,t){n=pt(t,n),n=kc(e,n,1),e=pn(e,n,1),n=se(),e!==null&&(fr(e,1,n),ge(e,n))}function V(e,n,t){if(e.tag===3)ws(e,e,t);else for(;n!==null;){if(n.tag===3){ws(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=pt(t,e),e=Pc(n,e,1),n=pn(n,e,1),e=se(),n!==null&&(fr(n,1,e),ge(n,e));break}}n=n.return}}function R0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ne&t)===t&&(J===4||J===3&&(ne&130023424)===ne&&500>W()-ra?On(e,0):ta|=t),ge(e,n)}function Wc(e,n){n===0&&(e.mode&1?(n=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):n=1);var t=se();e=Je(e,n),e!==null&&(fr(e,n,t),ge(e,t))}function G0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Wc(e,t)}function _0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),Wc(e,t)}var Qc;Qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,C0(e,n,t);pe=!!(e.flags&131072)}else pe=!1,K&&n.flags&1048576&&Zu(n,sl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Wr(e,n),e=n.pendingProps;var l=ut(n,oe.current);ot(n,t),l=Jo(null,n,r,e,l,t);var i=Zo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(i=!0,ol(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$o(n),l.updater=Ll,n.stateNode=l,l._reactInternals=n,Ji(n,r,e,t),n=qi(null,n,r,!0,i,t)):(n.tag=0,K&&i&&Bo(n),ae(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Wr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=K0(r),e=Le(r,e),l){case 0:n=bi(null,n,r,e,t);break e;case 1:n=ps(null,n,r,e,t);break e;case 11:n=ds(null,n,r,e,t);break e;case 14:n=fs(null,n,r,Le(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),bi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),ps(e,n,r,l,t);case 3:e:{if(Mc(n),e===null)throw Error(x(387));r=n.pendingProps,i=n.memoizedState,l=i.element,rc(e,n),dl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=pt(Error(x(423)),n),n=ms(e,n,r,t,l);break e}else if(r!==l){l=pt(Error(x(424)),n),n=ms(e,n,r,t,l);break e}else for(Ie=fn(n.stateNode.containerInfo.firstChild),ye=n,K=!0,De=null,t=nc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===l){n=Ze(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return lc(n),e===null&&Qi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ui(r,l)?o=null:i!==null&&Ui(r,i)&&(n.flags|=32),Tc(e,n),ae(e,n,o,t),n.child;case 6:return e===null&&Qi(n),null;case 13:return Oc(e,n,t);case 4:return Wo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),ds(e,n,r,l,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,G(ul,r._currentValue),r._currentValue=o,i!==null)if(_e(i.value,o)){if(i.children===l.children&&!me.current){n=Ze(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Qe(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Xi(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Xi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ae(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,ot(n,t),l=Ne(l),r=r(l),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,l=Le(r,n.pendingProps),l=Le(r.type,l),fs(e,n,r,l,t);case 15:return Ec(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Wr(e,n),n.tag=1,he(r)?(e=!0,ol(n)):e=!1,ot(n,t),Cc(n,r,l),Ji(n,r,l,t),qi(null,n,r,!0,e,t);case 19:return Lc(e,n,t);case 22:return Nc(e,n,t)}throw Error(x(156,n.tag))};function Xc(e,n){return Su(e,n)}function B0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,r){return new B0(e,n,t,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K0(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Po)return 11;if(e===Eo)return 14}return 2}function gn(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")aa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Fn:return Ln(t.children,l,i,n);case ko:o=8,l|=8;break;case vi:return e=Pe(12,t,n,l|2),e.elementType=vi,e.lanes=i,e;case Si:return e=Pe(13,t,n,l),e.elementType=Si,e.lanes=i,e;case xi:return e=Pe(19,t,n,l),e.elementType=xi,e.lanes=i,e;case lu:return Rl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tu:o=10;break e;case ru:o=9;break e;case Po:o=11;break e;case Eo:o=14;break e;case nn:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=Pe(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Ln(e,n,t,r){return e=Pe(7,e,r,n),e.lanes=t,e}function Rl(e,n,t,r){return e=Pe(22,e,r,n),e.elementType=lu,e.lanes=t,e.stateNode={isHidden:!1},e}function mi(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function hi(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function z0(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function sa(e,n,t,r,l,i,o,a,s){return e=new z0(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Pe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(i),e}function H0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Yc(e){if(!e)return yn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(he(t))return Yu(e,t,n)}return n}function Jc(e,n,t,r,l,i,o,a,s){return e=sa(t,r,!0,e,l,i,o,a,s),e.context=Yc(null),t=e.current,r=se(),l=hn(t),i=Qe(r,l),i.callback=n??null,pn(t,i,l),e.current.lanes=l,fr(e,l,r),ge(e,r),e}function Gl(e,n,t,r){var l=n.current,i=se(),o=hn(l);return t=Yc(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pn(l,n,o),e!==null&&(Ge(e,l,o,i),Vr(e,l,o)),o}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ua(e,n){Cs(e,n),(e=e.alternate)&&Cs(e,n)}function U0(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}_l.prototype.render=ca.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));Gl(e,n,null,null)};_l.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_n(function(){Gl(null,e,null,null)}),n[Ye]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&Mu(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function V0(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=yl(o);i.call(c)}}var o=Jc(n,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=o,e[Ye]=o.current,qt(e.nodeType===8?e.parentNode:e),_n(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=yl(s);a.call(c)}}var s=sa(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=s,e[Ye]=s.current,qt(e.nodeType===8?e.parentNode:e),_n(function(){Gl(n,s,t,r)}),s}function Kl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=yl(o);a.call(s)}}Gl(n,o,e,l)}else o=V0(t,n,e,l,r);return yl(o)}Pu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Dt(n.pendingLanes);t!==0&&(Mo(n,t|1),ge(n,W()),!(D&6)&&(mt=W()+500,xn()))}break;case 13:_n(function(){var r=Je(e,1);if(r!==null){var l=se();Ge(r,e,1,l)}}),ua(e,1)}};Oo=function(e){if(e.tag===13){var n=Je(e,134217728);if(n!==null){var t=se();Ge(n,e,134217728,t)}ua(e,134217728)}};Eu=function(e){if(e.tag===13){var n=hn(e),t=Je(e,n);if(t!==null){var r=se();Ge(t,e,n,r)}ua(e,n)}};Nu=function(){return R};Tu=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};Li=function(e,n,t){switch(n){case"input":if(ki(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Tl(r);if(!l)throw Error(x(90));ou(r),ki(r,l)}}}break;case"textarea":su(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};hu=la;gu=_n;var F0={usingClientEntryPoint:!1,Events:[mr,Xn,Tl,pu,mu,la]},Mt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$0={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{kl=Gr.inject($0),He=Gr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(n))throw Error(x(200));return H0(e,n,null,t)};Se.createRoot=function(e,n){if(!da(e))throw Error(x(299));var t=!1,r="",l=Zc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=sa(e,1,!1,null,null,t,!1,r,l),e[Ye]=n.current,qt(e.nodeType===8?e.parentNode:e),new ca(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=yu(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return _n(e)};Se.hydrate=function(e,n,t){if(!Bl(n))throw Error(x(200));return Kl(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!da(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=Zc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,l,!1,i,o),e[Ye]=n.current,qt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new _l(n)};Se.render=function(e,n,t){if(!Bl(n))throw Error(x(200));return Kl(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(x(40));return e._reactRootContainer?(_n(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Se.unstable_batchedUpdates=la;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bl(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Kl(e,n,t,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc)}catch(e){console.error(e)}}bc(),bs.exports=Se;var W0=bs.exports,Ps=W0;Ii.createRoot=Ps.createRoot,Ii.hydrateRoot=Ps.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sr.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Es="popstate";function Q0(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:o,hash:a}=r.location;return fo("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:vl(l)}return Y0(n,t,null,e)}function Q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function X0(){return Math.random().toString(36).substr(2,8)}function Ns(e,n){return{usr:e.state,key:e.key,idx:n}}function fo(e,n,t,r){return t===void 0&&(t=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?It(n):n,{state:t,key:n&&n.key||r||X0()})}function vl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function It(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Y0(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=sn.Pop,s=null,c=h();c==null&&(c=0,o.replaceState(sr({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){a=sn.Pop;let w=h(),d=w==null?null:w-c;c=w,s&&s({action:a,location:y.location,delta:d})}function g(w,d){a=sn.Push;let f=fo(y.location,w,d);c=h()+1;let p=Ns(f,c),I=y.createHref(f);try{o.pushState(p,"",I)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(I)}i&&s&&s({action:a,location:y.location,delta:1})}function v(w,d){a=sn.Replace;let f=fo(y.location,w,d);c=h();let p=Ns(f,c),I=y.createHref(f);o.replaceState(p,"",I),i&&s&&s({action:a,location:y.location,delta:0})}function S(w){let d=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof w=="string"?w:vl(w);return f=f.replace(/ $/,"%20"),Q(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let y={get action(){return a},get location(){return e(l,o)},listen(w){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Es,m),s=w,()=>{l.removeEventListener(Es,m),s=null}},createHref(w){return n(l,w)},createURL:S,encodeLocation(w){let d=S(w);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:v,go(w){return o.go(w)}};return y}var Ts;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ts||(Ts={}));function J0(e,n,t){return t===void 0&&(t="/"),Z0(e,n,t)}function Z0(e,n,t,r){let l=typeof n=="string"?It(n):n,i=pa(l.pathname||"/",t);if(i==null)return null;let o=qc(e);b0(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let c=cp(i);a=ap(o[s],c)}return a}function qc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=An([r,s.relativePath]),h=t.concat(s);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qc(i.children,n,h,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:ip(c,i.index),routesMeta:h})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let s of ed(i.path))l(i,o,s)}),n}function ed(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=ed(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function b0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:op(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const q0=/^:[\w-]+$/,ep=3,np=2,tp=1,rp=10,lp=-2,Ms=e=>e==="*";function ip(e,n){let t=e.split("/"),r=t.length;return t.some(Ms)&&(r+=lp),n&&(r+=np),t.filter(l=>!Ms(l)).reduce((l,i)=>l+(q0.test(i)?ep:i===""?tp:rp),r)}function op(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function ap(e,n,t){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,h=i==="/"?n:n.slice(i.length)||"/",m=sp({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},h),g=s.route;if(!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:An([i,m.pathname]),pathnameBase:hp(An([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=An([i,m.pathnameBase]))}return o}function sp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=up(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let y=a[m]||"";o=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const S=a[m];return v&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function up(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function cp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function pa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fp=e=>dp.test(e);function pp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?It(e):e,i;if(t)if(fp(t))i=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),fa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?i=Os(t.substring(1),"/"):i=Os(t,n)}else i=n;return{pathname:i,search:gp(r),hash:Ap(l)}}function Os(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function gi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ma(e,n){let t=mp(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ha(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=It(e):(l=sr({},e),Q(!l.pathname||!l.pathname.includes("?"),gi("?","pathname","search",l)),Q(!l.pathname||!l.pathname.includes("#"),gi("#","pathname","hash",l)),Q(!l.search||!l.search.includes("#"),gi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=t;else{let m=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}a=m>=0?n[m]:"/"}let s=pp(l,a),c=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const An=e=>e.join("/").replace(/\/\/+/g,"/"),hp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ap=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ip(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nd=["post","put","patch","delete"];new Set(nd);const yp=["get",...nd];new Set(yp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ur.apply(this,arguments)}const ga=A.createContext(null),vp=A.createContext(null),wn=A.createContext(null),zl=A.createContext(null),qe=A.createContext({outlet:null,matches:[],isDataRoute:!1}),td=A.createContext(null);function Sp(e,n){let{relative:t}=n===void 0?{}:n;yt()||Q(!1);let{basename:r,navigator:l}=A.useContext(wn),{hash:i,pathname:o,search:a}=id(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:An([r,o])),l.createHref({pathname:s,search:a,hash:i})}function yt(){return A.useContext(zl)!=null}function gr(){return yt()||Q(!1),A.useContext(zl).location}function rd(e){A.useContext(wn).static||A.useLayoutEffect(e)}function Ar(){let{isDataRoute:e}=A.useContext(qe);return e?Dp():xp()}function xp(){yt()||Q(!1);let e=A.useContext(ga),{basename:n,future:t,navigator:r}=A.useContext(wn),{matches:l}=A.useContext(qe),{pathname:i}=gr(),o=JSON.stringify(ma(l,t.v7_relativeSplatPath)),a=A.useRef(!1);return rd(()=>{a.current=!0}),A.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=ha(c,JSON.parse(o),i,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:An([n,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[n,r,o,i,e])}function ld(){let{matches:e}=A.useContext(qe),n=e[e.length-1];return n?n.params:{}}function id(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=A.useContext(wn),{matches:l}=A.useContext(qe),{pathname:i}=gr(),o=JSON.stringify(ma(l,r.v7_relativeSplatPath));return A.useMemo(()=>ha(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function wp(e,n){return Cp(e,n)}function Cp(e,n,t,r){yt()||Q(!1);let{navigator:l}=A.useContext(wn),{matches:i}=A.useContext(qe),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=gr(),h;if(n){var m;let w=typeof n=="string"?It(n):n;s==="/"||(m=w.pathname)!=null&&m.startsWith(s)||Q(!1),h=w}else h=c;let g=h.pathname||"/",v=g;if(s!=="/"){let w=s.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=J0(e,{pathname:v}),y=Tp(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:An([s,l.encodeLocation?l.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:An([s,l.encodeLocation?l.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,t,r);return n&&y?A.createElement(zl.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:sn.Pop}},y):y}function kp(){let e=jp(),n=Ip(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},n),t?A.createElement("pre",{style:l},t):null,null)}const Pp=A.createElement(kp,null);class Ep extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?A.createElement(qe.Provider,{value:this.props.routeContext},A.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Np(e){let{routeContext:n,match:t,children:r}=e,l=A.useContext(ga);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),A.createElement(qe.Provider,{value:n},r)}function Tp(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,a=(l=t)==null?void 0:l.errors;if(a!=null){let h=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||Q(!1),o=o.slice(0,Math.min(o.length,h+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:v}=t,S=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||S){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let v,S=!1,y=null,w=null;t&&(v=a&&m.route.id?a[m.route.id]:void 0,y=m.route.errorElement||Pp,s&&(c<0&&g===0?(Rp("route-fallback"),S=!0,w=null):c===g&&(S=!0,w=m.route.hydrateFallbackElement||null)));let d=n.concat(o.slice(0,g+1)),f=()=>{let p;return v?p=y:S?p=w:m.route.Component?p=A.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,A.createElement(Np,{match:m,routeContext:{outlet:h,matches:d,isDataRoute:t!=null},children:p})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?A.createElement(Ep,{location:t.location,revalidation:t.revalidation,component:y,error:v,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(od||{}),ad=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ad||{});function Mp(e){let n=A.useContext(ga);return n||Q(!1),n}function Op(e){let n=A.useContext(vp);return n||Q(!1),n}function Lp(e){let n=A.useContext(qe);return n||Q(!1),n}function sd(e){let n=Lp(),t=n.matches[n.matches.length-1];return t.route.id||Q(!1),t.route.id}function jp(){var e;let n=A.useContext(td),t=Op(),r=sd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Dp(){let{router:e}=Mp(od.UseNavigateStable),n=sd(ad.UseNavigateStable),t=A.useRef(!1);return rd(()=>{t.current=!0}),A.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ur({fromRouteId:n},i)))},[e,n])}const Ls={};function Rp(e,n,t){Ls[e]||(Ls[e]=!0)}function Gp(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _p(e){let{to:n,replace:t,state:r,relative:l}=e;yt()||Q(!1);let{future:i,static:o}=A.useContext(wn),{matches:a}=A.useContext(qe),{pathname:s}=gr(),c=Ar(),h=ha(n,ma(a,i.v7_relativeSplatPath),s,l==="path"),m=JSON.stringify(h);return A.useEffect(()=>c(JSON.parse(m),{replace:t,state:r,relative:l}),[c,m,l,t,r]),null}function Un(e){Q(!1)}function Bp(e){let{basename:n="/",children:t=null,location:r,navigationType:l=sn.Pop,navigator:i,static:o=!1,future:a}=e;yt()&&Q(!1);let s=n.replace(/^\/*/,"/"),c=A.useMemo(()=>({basename:s,navigator:i,static:o,future:ur({v7_relativeSplatPath:!1},a)}),[s,a,i,o]);typeof r=="string"&&(r=It(r));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:S="default"}=r,y=A.useMemo(()=>{let w=pa(h,s);return w==null?null:{location:{pathname:w,search:m,hash:g,state:v,key:S},navigationType:l}},[s,h,m,g,v,S,l]);return y==null?null:A.createElement(wn.Provider,{value:c},A.createElement(zl.Provider,{children:t,value:y}))}function Kp(e){let{children:n,location:t}=e;return wp(po(n),t)}new Promise(()=>{});function po(e,n){n===void 0&&(n=[]);let t=[];return A.Children.forEach(e,(r,l)=>{if(!A.isValidElement(r))return;let i=[...n,l];if(r.type===A.Fragment){t.push.apply(t,po(r.props.children,i));return}r.type!==Un&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=po(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mo.apply(this,arguments)}function zp(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function Hp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Up(e,n){return e.button===0&&(!n||n==="_self")&&!Hp(e)}const Vp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fp="6";try{window.__reactRouterVersion=Fp}catch{}const $p="startTransition",js=Dd[$p];function Wp(e){let{basename:n,children:t,future:r,window:l}=e,i=A.useRef();i.current==null&&(i.current=Q0({window:l,v5Compat:!0}));let o=i.current,[a,s]=A.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=A.useCallback(m=>{c&&js?js(()=>s(m)):s(m)},[s,c]);return A.useLayoutEffect(()=>o.listen(h),[o,h]),A.useEffect(()=>Gp(r),[r]),A.createElement(Bp,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:o,future:r})}const Qp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bn=A.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:s,to:c,preventScrollReset:h,viewTransition:m}=n,g=zp(n,Vp),{basename:v}=A.useContext(wn),S,y=!1;if(typeof c=="string"&&Xp.test(c)&&(S=c,Qp))try{let p=new URL(window.location.href),I=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=pa(I.pathname,v);I.origin===p.origin&&C!=null?c=C+I.search+I.hash:y=!0}catch{}let w=Sp(c,{relative:l}),d=Yp(c,{replace:o,state:a,target:s,preventScrollReset:h,relative:l,viewTransition:m});function f(p){r&&r(p),p.defaultPrevented||d(p)}return A.createElement("a",mo({},g,{href:S||w,onClick:y||i?r:f,ref:t,target:s}))});var Ds;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ds||(Ds={}));var Rs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rs||(Rs={}));function Yp(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=n===void 0?{}:n,s=Ar(),c=gr(),h=id(e,{relative:o});return A.useCallback(m=>{if(Up(m,t)){m.preventDefault();let g=r!==void 0?r:vl(c)===vl(h);s(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[c,s,h,r,l,t,e,i,o,a])}const Jp=[{id:"20260621180001",title:"OpenAI, 스스로 작동하는 'GPT-5 에이전트' 전격 공개",summary:"OpenAI가 사용자의 복잡한 지시를 받아 PC와 모바일 환경에서 스스로 작업을 수행하는 'GPT-5 에이전트'를 공식 출시했습니다. 기존 대화형 AI를 넘어 실제 OS를 제어하고 API를 연동해 복잡한 업무를 자동화하는 것이 특징입니다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-06-21T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## 스스로 생각하고 행동하는 AI 에이전트의 등장

OpenAI가 단순한 텍스트 답변을 넘어 사용자의 컴퓨터 화면을 직접 인식하고 제어할 수 있는 차세대 AI 시스템 'GPT-5 에이전트(Agent)'를 전격 공개했습니다. 이번 모델은 이메일 발송, 일정 조율, 데이터 분석 및 보고서 작성 등 여러 단계의 복잡한 워크플로우를 인간의 개입 없이 스스로 계획을 세워 완수합니다.

기존 GPT-4o 대비 추론 능력이 150% 이상 향상되었으며, 코딩 및 수학적 문제 해결 능력 평가(MMLU-Pro)에서 94.2%의 역대 최고 점수를 기록했습니다. 사용자가 "지난달 매출 데이터를 정리해서 이메일로 보내줘"라고 입력하면, AI가 직접 데이터베이스에 접속해 엑셀 파일을 다운로드하고, 차트를 그린 뒤, 메일 앱을 실행해 전송하는 방식입니다.

> "GPT-5 에이전트는 단순한 챗봇의 시대가 끝나고, 인간과 협업하는 '자율형 AI 동료'의 시대가 시작되었음을 의미합니다."
> — 샘 올트먼, OpenAI CEO

## 한국 시장 전망 및 기업에 미치는 영향

국내 IT 업계와 대기업들은 이번 GPT-5 에이전트 도입을 서두를 것으로 전망됩니다. 특히 주 52시간 근무제 도입 이후 업무 효율화가 절실한 한국 기업 환경에서 AI 에이전트는 단순 반복 행정 업무를 80% 이상 감소시킬 수 있는 핵심 솔루션으로 주목받고 있습니다.

국내 주요 포털 및 통신사들 역시 자체 LLM 기반의 에이전트 서비스를 준비 중인 가운데, OpenAI의 이번 발표로 기술 격차를 좁히기 위한 주도권 경쟁이 더욱 치열해질 것으로 보입니다. 한국어 지원 성능 역시 기존 모델 대비 자연스러워져 국내 금융 및 고객 서비스 분야에서의 조기 도입이 예상됩니다.`},{id:"20260621180002",title:"삼성전자-네이버, 초거대 AI 특화 4나노 가속기 'MACH-2' 최초 공개",summary:"삼성전자와 네이버가 공동 개발한 차세대 AI 가속기 '마하-2(MACH-2)'의 세부 스펙이 공개되었습니다. 기존 GPU 대비 전력 효율을 3배 이상 높여 대규모 언어 모델(LLM) 서비스 운영 비용을 획기적으로 절감할 것으로 기대됩니다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-06-21T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## 엔비디아 독점 깨나... 저전력·고효율 '마하-2'의 등장

삼성전자와 네이버가 손잡고 개발한 AI 반도체 '마하-2(MACH-2)'가 마침내 베일을 벗었습니다. 양사는 이번 협력을 통해 엔비디아가 장악하고 있는 AI 가속기 시장에 강력한 도전장을 내밀었습니다. 마하-2는 삼성전자의 최첨단 4나노 공정을 적용하여 제작되었으며, 저전력 LPDDR5X 메모리를 탑재해 가격 경쟁력을 극대화했습니다.

성능 테스트 결과, 마하-2는 글로벌 표준 GPU 대비 전력 소모량을 70% 절감하면서도, LLM 추론 속도는 최대 1.8배 향상된 성능을 보여주었습니다. 이는 초대형 데이터센터를 운영하는 빅테크 기업들의 가장 큰 고민거리인 '전력 소모'와 '비용' 문제를 동시에 해결할 수 있는 수치입니다.

> "마하-2는 양사의 하드웨어와 소프트웨어 역량이 결합된 최고의 결과물이며, 글로벌 AI 인프라의 비용 장벽을 획기적으로 낮출 것입니다."
> — 경계현, 삼성전자 SAIT(종합기술원) 원장

## 한국에 미치는 영향

국내 AI 생태계에 미치는 파급 효과는 매우 클 것으로 분석됩니다. 네이버는 하반기부터 자사 초대형 AI '하이퍼클로바X'의 서비스 인프라에 마하-2를 본격 도입할 예정입니다. 이를 통해 연간 수천억 원에 달하는 데이터센터 운영 비용의 약 45%를 절감할 수 있을 것으로 기대됩니다.

또한 외산 GPU 의존도를 낮춤으로써 국가적인 AI 안보를 강화하고, 국내 중소 AI 스타트업들에게도 저렴한 비용으로 고성능 컴퓨팅 자원을 제공할 수 있는 길이 열리게 되었습니다.`},{id:"20260621180003",title:"국회 본회의 통과한 'AI 기본법', 한국 AI 산업의 새 이정표 세운다",summary:"대한민국 국회가 AI 산업 육성과 고위험 AI 규제의 균형을 맞춘 '인공지능 기본법' 제정안을 본회의에서 통과시켰습니다. 이에 따라 고위험군 AI에 대한 사전 신뢰성 검증과 정부 차원의 AI 안전연구소 설립이 본격화됩니다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-06-21T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",breaking:!1,content:`## 산업 육성과 안전 규제의 조화, 법적 제도화 완비

오랫동안 표류하던 '인공지능 산업 육성 및 신뢰 확보에 관한 법률안(AI 기본법)'이 마침내 국회 본회의를 통과했습니다. 이번 법안은 AI 기술의 건전한 발전을 지원하는 '육성' 정책과, 인간의 생명이나 안전에 직결된 분야에 사용되는 AI를 관리하는 '규제' 정책을 동시에 담고 있습니다.

법안에 따르면 의료, 금융, 공공 서비스 등 국민 생활에 밀접한 영향을 미치는 영역은 '고위험 영역 AI'로 분류되어 출시 전 신뢰성 평가를 의무적으로 받아야 합니다. 동시에 정부는 AI 스타트업 육성을 위해 매년 5,000억 원 규모의 전용 펀드를 조성하고, 기술 개발을 적극 지원하기로 명시했습니다.

> "이번 법안 통과로 대한민국은 글로벌 AI 규제 흐름에 발맞추는 동시에, 기업들이 안심하고 도전할 수 있는 명확한 가이드라인을 확보하게 되었습니다."
> — 과학기술정보통신부 관계자

## 한국 시장 전망

이번 법안 통과로 국내 AI 기업들의 불확실성이 크게 해소될 전망입니다. 그동안 명확한 기준이 없어 투자를 주저하던 대기업과 VC(벤처캐피탈)들이 본격적으로 자금을 집행할 것으로 보입니다.

특히 하반기 설립 예정인 '국립 AI 안전연구소'를 통해 한국 기업들은 해외 진출 시 필요한 글로벌 규제 인증(EU AI Act 등)을 국내에서 사전 검증받을 수 있게 되어, 토종 AI 솔루션의 해외 수출길이 더욱 넓어질 것으로 기대됩니다.`},{id:"20260621180004",title:"구글 딥마인드, 신약 개발 기간 80% 단축하는 '알파폴드-오미크론' 발표",summary:"구글 딥마인드가 단백질 구조 예측을 넘어 분자 간 상호작용과 신약 후보 물질의 독성까지 예측하는 '알파폴드-오미크론'을 발표했습니다. 임상 1상 진입 기간을 기존 5년에서 1년 미만으로 단축할 수 있는 혁신적인 연구 결과입니다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-06-21T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!1,content:`## 바이오와 AI의 융합, 신약 개발의 패러다임을 바꾸다

구글 딥마인드가 생명과학 분야의 또 다른 혁신을 가져올 AI 모델 '알파폴드-오미크론(AlphaFold-Omicron)'을 과학 저널 Nature에 게재했습니다. 이번 모델은 단순한 단백질 3차원 구조 예측에 그치지 않고, 체내에 투입된 약물 분자가 표적 단백질과 어떻게 결합하고 반응하는지 시뮬레이션하는 기능을 갖췄습니다.

특히 신약 후보 물질의 인체 독성 여부를 98.6%의 정확도로 사전 예측하여, 동물 실험 단계에서 발생하는 시간과 비용을 획기적으로 줄여줍니다. 연구진은 실제 췌장암 치료제 후보 물질을 발굴하는 테스트에서 기존 연구원들이 4년 걸릴 작업을 단 18일 만에 완료했다고 밝혔습니다.

> "알파폴드-오미크론은 인류가 질병과 싸우는 방식을 근본적으로 바꿀 것입니다. 이제 우리는 실험실이 아닌 컴퓨터 화면 안에서 대부분의 신약 개발 과정을 끝낼 수 있습니다."
> — 데미스 허사비스, 구글 딥마인드 CEO

## 한국에 미치는 영향

바이오·제약 산업을 미래 먹거리로 육성 중인 한국 시장에 엄청난 기회가 될 전망입니다. 한미약품, 유한양행 등 국내 주요 제약사들은 이미 AI 전담 부서를 확대하고 딥마인드의 오픈소스 기술을 도입하기 위한 검토에 착수했습니다.

신약 개발의 높은 실패율과 천문학적인 비용 때문에 글로벌 빅파마에 밀리던 국내 바이오 스타트업들이 AI 기술을 활용해 신약 후보 물질을 조기에 발굴하고, 이를 글로벌 기업에 라이선스 아웃(기술 수출)하는 전략이 한층 가속화될 것으로 보입니다.`},{id:"20260621180005",title:"애플, 온디바이스 한계 넘은 '애플 인텔리전스 프로' 아시아 최초 한국 출시",summary:"애플이 온디바이스 AI 성능을 대폭 강화한 '애플 인텔리전스 프로' 서비스를 아시아 국가 중 최초로 한국에 출시합니다. 온디바이스와 프라이빗 클라우드를 결합해 한국어 처리 속도와 보안성을 동시에 극대화했습니다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-06-21T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!1,content:`## 강력한 한국어 최적화와 철저한 개인정보 보호

애플이 차세대 OS 업데이트를 통해 더욱 강력해진 '애플 인텔리전스 프로(Apple Intelligence Pro)'를 한국 시장에 공식 선보입니다. 이번 프로 버전은 아이폰 17 및 M4 칩셋 탑재 기기에 최적화되었으며, 기기 내부에서 처리하는 온디바이스 AI와 고도의 연산을 처리하는 프라이빗 클라우드를 유기적으로 연결합니다.

특히 한국어 거대언어모델(LLM) 매개변수를 로컬 환경에 맞게 경량화하여, 인터넷 연결이 없는 상태에서도 복잡한 한국어 문맥 이해, 요약, 이미지 생성 등을 0.2초 이내의 지연 시간으로 처리합니다. 또한 애플 특유의 프라이빗 클라우드 컴퓨팅 기술을 적용해, 사용자의 데이터가 외부로 유출되거나 서버에 저장되지 않도록 차단했습니다.

> "한국은 전 세계에서 가장 기술 수용도가 높고 까다로운 사용자층을 보유한 시장입니다. 아시아 최초 출시를 통해 한국 사용자들에게 진정한 맞춤형 AI 경험을 제공할 것입니다."
> — 크레이그 페더리기, 애플 소프트웨어 엔지니어링 수석 부사장

## 한국 시장 전망

이번 출시는 국내 스마트폰 및 태블릿 시장의 판도를 흔들 변수가 될 것으로 보입니다. 그동안 한국어 지원 속도가 다소 아쉽다는 평가를 받던 애플이 고성능 한국어 AI 서비스를 전면에 내세우면서, 국내 가전 및 모바일 시장을 주도하는 삼성전자의 '갤럭시 AI'와의 정면 대결이 불가피해졌습니다.

국내 모바일 앱 개발사들 역시 애플이 제공하는 '인텔리전스 프로 SDK'를 활용해 고성능 AI 기능을 탑재한 앱을 빠르게 출시할 수 있게 되어, 국내 iOS 앱 생태계의 비약적인 성장이 기대됩니다.`},{id:"20260608180001",title:"삼성, 차세대 '온디바이스 AI' 칩 공개…스마트폰 성능 혁신 예고",summary:"삼성전자가 자체 개발한 차세대 온디바이스 AI 칩을 공개하며 스마트폰 시장의 새로운 가능성을 열었다. 이 칩은 기기 자체에서 AI 연산을 수행하여 개인정보 보호 강화와 함께 더욱 빠르고 효율적인 AI 경험을 제공할 것으로 기대된다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-06-08T18:00:01+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!0,content:`## 삼성, 차세대 '온디바이스 AI' 칩 공개

삼성전자가 6월 7일(현지 시간) 미국 캘리포니아에서 열린 자체 개발자 행사에서 차세대 온디바이스 AI 칩셋을 공개했다. 이 칩셋은 기존 스마트폰 칩셋 대비 AI 연산 능력이 3배 이상 향상되었으며, 특히 저전력 설계 기술을 적용하여 배터리 소모를 최소화하면서도 복잡한 AI 작업을 수행할 수 있도록 설계되었다.

### 한국에 미치는 영향

삼성전자의 온디바이스 AI 칩셋 탑재는 한국 스마트폰 시장에 큰 변화를 가져올 것으로 예상된다. 사용자들은 클라우드 서버를 거치지 않고도 실시간으로 고품질의 AI 기능을 활용할 수 있게 되며, 이는 개인 정보 유출 위험을 줄이고 사용자 경험을 극대화할 것이다. 또한, 국내 앱 개발사들은 이 칩셋의 성능을 활용한 혁신적인 AI 기반 서비스 개발에 박차를 가할 것으로 보인다.

> "이번 온디바이스 AI 칩셋은 스마트폰의 개인화와 보안성을 한 단계 끌어올릴 것입니다. 사용자들은 이제 더욱 안전하고 스마트한 모바일 경험을 누릴 수 있게 될 것입니다."
> 
> *삼성전자 AI 사업부장 김철수 부사장*

## 한국 시장 전망

업계 전문가들은 삼성의 이번 발표가 국내 스마트폰 시장의 경쟁 구도에도 영향을 미칠 것으로 분석한다. AI 기능의 차별화가 스마트폰 구매 결정의 중요한 요소로 작용하면서, 삼성은 기술 리더십을 더욱 공고히 할 수 있을 것으로 기대된다. 또한, 국내 통신사 및 IT 기업들은 온디바이스 AI를 활용한 새로운 서비스 모델 개발에 대한 논의를 가속화할 것으로 보인다.`},{id:"20260608180002",title:"OpenAI, 'GPT-5' 한국어 성능 대폭 향상…번역 정확도 95% 돌파",summary:"OpenAI가 차세대 언어 모델 'GPT-5'의 한국어 처리 능력을 획기적으로 개선했다고 발표했다. 특히 한국어 번역의 정확도가 95%를 돌파하며, 한국어 기반의 AI 서비스 개발에 새로운 가능성을 열었다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-06-08T18:00:02+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## OpenAI, 'GPT-5' 한국어 성능 대폭 향상

인공지능 연구 선두 주자인 OpenAI가 6월 6일(현지 시간) 차세대 거대 언어 모델(LLM)인 'GPT-5'의 한국어 성능에 대한 상세 정보를 공개했다. 기존 모델 대비 학습 데이터셋을 2배 이상 늘리고 한국어 특화 신경망 구조를 도입한 결과, GPT-5는 한국어 이해 및 생성 능력에서 놀라운 발전을 이루었다.

### 한국에 미치는 영향

GPT-5의 한국어 성능 향상은 국내 AI 생태계에 지대한 영향을 미칠 것으로 예상된다. 특히, AI 챗봇, 번역 서비스, 콘텐츠 생성 등 다양한 분야에서 한국어 사용자 경험이 크게 개선될 것이다. 기존에 언어 장벽으로 인해 제한적이었던 AI 서비스들이 한국어 환경에 더욱 최적화되어 제공될 수 있게 된다.

> "GPT-5는 한국어의 복잡한 문맥과 뉘앙스를 이전보다 훨씬 정교하게 이해합니다. 이는 한국어로 이루어지는 모든 형태의 커뮤니케이션에 혁신을 가져올 것입니다."
> 
> *OpenAI 연구팀 리더 박지훈 박사*

## 한국 시장 전망

GPT-5의 공개는 한국 IT 기업들에게 새로운 기회를 제공한다. 네이버, 카카오 등 국내 플랫폼 기업들은 GPT-5를 기반으로 더욱 고도화된 AI 비서, 맞춤형 추천 서비스, 그리고 초개인화된 고객 지원 시스템을 개발할 수 있게 된다. 또한, 한국어 기반의 AI 스타트업들에게도 기술 격차를 줄이고 글로벌 시장에 진출할 수 있는 발판이 마련될 것으로 보인다.`},{id:"20260608180003",title:"정부, 'AI 윤리 가이드라인' 전면 개정…기업 책임 강화",summary:"정부가 급변하는 AI 기술 발전에 맞춰 'AI 윤리 가이드라인'을 전면 개정하고 기업의 책임성을 더욱 강화하는 방향으로 발표했다. 이는 AI 기술의 건전한 발전과 사회적 수용성을 높이기 위한 조치로 풀이된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-06-08T18:00:03+09:00",readTime:"2분",image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",breaking:!1,content:`## 정부, 'AI 윤리 가이드라인' 전면 개정

과학기술정보통신부는 6월 7일, AI 기술의 급속한 발전과 이에 따른 사회적, 윤리적 문제에 대응하기 위해 기존 'AI 윤리 가이드라인'을 전면 개정하여 발표했다. 개정된 가이드라인은 AI 개발 및 활용 전 과정에서 인권 존중, 투명성, 책임성, 안전성 등의 원칙을 더욱 명확히 하고, 특히 기업의 자율 규제 노력을 넘어선 구체적인 책임 규정을 포함하고 있다.

### 한국에 미치는 영향

이번 가이드라인 개정은 국내 AI 기업들에게 AI 개발 및 서비스 운영에 있어 더욱 높은 윤리적 기준을 요구하게 된다. 특히, AI로 인한 차별, 편향, 오용 등의 문제를 예방하고, 발생 시 신속하고 투명하게 대응할 수 있는 체계를 구축하는 것이 중요해졌다. 이는 AI 기술의 사회적 신뢰도를 높이는 데 기여할 것으로 기대된다.

> "AI 기술은 인류에게 큰 혜택을 줄 수 있지만, 동시에 예상치 못한 위험을 초래할 수도 있습니다. 이번 개정은 이러한 위험을 최소화하고 AI가 우리 사회에 긍정적으로 기여하도록 유도하는 데 목적이 있습니다."
> 
> *과학기술정보통신부 장관 이지훈*

## 한국 시장 전망

정부의 강화된 AI 윤리 가이드라인은 국내 AI 시장의 성숙도를 높이는 계기가 될 것이다. 기업들은 윤리적 AI 개발을 위한 투자와 노력을 늘릴 것이며, 이는 장기적으로 AI 기술의 지속 가능한 발전과 글로벌 경쟁력 강화로 이어질 수 있다. 또한, 소비자들은 더욱 신뢰할 수 있는 AI 서비스를 이용하게 될 것으로 전망된다.`},{id:"20260608180004",title:"AI 스타트업 '뉴럴링크', 뇌-컴퓨터 인터페이스 기술로 500억 투자 유치",summary:"뇌-컴퓨터 인터페이스(BCI) 기술을 개발하는 AI 스타트업 뉴럴링크가 500억 원 규모의 시리즈 B 투자를 성공적으로 유치했다. 이번 투자 유치를 통해 뉴럴링크는 기술 개발 및 상용화에 더욱 속도를 낼 전망이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-06-08T18:00:04+09:00",readTime:"2분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## AI 스타트업 '뉴럴링크', 뇌-컴퓨터 인터페이스 기술로 500억 투자 유치

혁신적인 뇌-컴퓨터 인터페이스(BCI) 기술을 개발 중인 AI 스타트업 뉴럴링크가 6월 6일, 총 500억 원 규모의 시리즈 B 투자 유치를 완료했다고 밝혔다. 이번 투자는 국내 유수의 벤처캐피탈들이 주도했으며, 뉴럴링크의 독보적인 AI 기반 BCI 기술력과 미래 성장 가능성을 높이 평가한 결과이다.

### 한국에 미치는 영향

뉴럴링크의 기술은 향후 의료, 재활, 그리고 인간 능력 확장 등 다양한 분야에서 혁신을 가져올 잠재력을 지니고 있다. 특히, 뇌 질환 환자들의 삶의 질을 획기적으로 개선하고, 장애를 극복하는 데 기여할 수 있을 것으로 기대된다. 국내 의료 및 헬스케어 산업과의 협력 가능성도 주목된다.

> "우리의 목표는 인간의 뇌와 컴퓨터를 seamless하게 연결하여, 궁극적으로 인류의 삶을 풍요롭게 하는 것입니다. 이번 투자는 그 여정에 중요한 동력이 될 것입니다."
> 
> *뉴럴링크 CEO 박서준*

## 한국 시장 전망

뉴럴링크의 성공적인 투자 유치는 국내 AI 스타트업 생태계에 긍정적인 신호를 보내고 있다. BCI와 같은 첨단 AI 분야에 대한 투자 관심이 높아지고 있음을 시사하며, 앞으로 더 많은 혁신적인 아이디어들이 자금 지원을 받아 성장할 수 있는 환경이 조성될 것으로 기대된다. 이는 한국이 미래 AI 기술 분야를 선도하는 국가로 발돋움하는 데 기여할 수 있다.`},{id:"20260608180005",title:"AI 연구, '자가 학습' 능력 획기적 향상…미래 AI 발전 가속화",summary:"최근 AI 연구 분야에서 '자가 학습' 능력이 획기적으로 향상된 새로운 알고리즘이 발표되었다. 이 알고리즘은 외부 데이터 없이도 스스로 학습하고 발전하는 능력이 뛰어나, 미래 AI 발전의 속도를 더욱 가속화할 것으로 전망된다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-06-08T18:00:05+09:00",readTime:"2분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!1,content:`## AI 연구, '자가 학습' 능력 획기적 향상

AI 연구 커뮤니티에 따르면, 최근 발표된 새로운 '자기 지도 학습(Self-Supervised Learning)' 알고리즘은 기존 모델 대비 40% 이상 향상된 자가 학습 능력을 보여주고 있다. 이 알고리즘은 레이블링된 데이터에 의존하지 않고, 데이터 자체의 구조와 패턴을 활용하여 스스로 학습 목표를 설정하고 성능을 개선하는 혁신적인 방식을 채택했다.

### 한국에 미치는 영향

이러한 자가 학습 능력의 향상은 한국의 AI 연구 기관 및 기업들에게도 새로운 연구 방향을 제시한다. 데이터 부족 문제를 겪는 특정 분야나 희귀 데이터에 대한 AI 모델 개발에 큰 도움을 줄 수 있으며, 연구 개발 비용 절감 효과도 기대할 수 있다. 또한, AI 모델의 일반화 성능 향상으로 다양한 응용 분야에서의 활용도가 높아질 것이다.

> "이 알고리즘은 AI가 스스로 배우고 발전하는 능력을 한 단계 끌어올렸습니다. 이는 AI의 잠재력을 무한히 확장시킬 수 있는 중요한 진전입니다."
> 
> *MIT AI 연구소 수석 연구원 Dr. Anya Sharma*

## 한국 시장 전망

자가 학습 능력 향상 기술은 한국 AI 시장에서 데이터 중심의 한계를 극복하고 더욱 창의적이고 효율적인 AI 솔루션을 개발하는 데 기여할 수 있다. 특히, 금융, 의료, 제조 등 데이터 활용이 중요한 산업 분야에서 AI 도입 가속화를 이끌 것으로 예상된다. 이는 한국이 글로벌 AI 경쟁에서 우위를 점하는 데 중요한 역할을 할 것이다.`},{id:"20260607180001",title:"삼성, 3나노 공정 AI 칩 생산 속도 높인다",summary:"삼성전자가 최첨단 3나노 공정 기술을 활용한 AI 칩 생산 역량을 강화하고 있다. 이는 고성능 AI 반도체 수요 증가에 대응하고 시장 리더십을 공고히 하기 위한 전략으로 풀이된다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-06-07T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!1,content:`## 삼성, 3나노 공정 AI 칩 생산 속도 높인다

삼성전자가 차세대 AI 반도체 생산을 위한 3나노 공정 기술 고도화에 박차를 가하고 있다. 최근 발표된 업계 소식에 따르면, 삼성전자는 GAA(Gate-All-Around) 기술이 적용된 3나노 공정의 수율을 크게 향상시키며 대량 생산 준비를 서두르고 있는 것으로 알려졌다.

### 한국에 미치는 영향

삼성전자의 이러한 움직임은 국내 반도체 산업 전반에 긍정적인 영향을 미칠 것으로 기대된다. 고성능 AI 칩 생산 능력 강화는 국내 파운드리 산업의 경쟁력을 한층 끌어올리고, 관련 소재 및 부품 산업의 동반 성장을 견인할 수 있다. 또한, 국내 AI 스타트업 및 기업들이 삼성전자의 최첨단 공정을 활용하여 혁신적인 AI 솔루션을 개발하는 데 기여할 것으로 보인다.

> "우리는 3나노 공정의 안정적인 양산을 통해 AI 시대의 핵심 동력이 될 고성능 칩 시장을 선도해 나갈 것입니다." - 삼성전자 관계자

삼성전자는 현재 2세대 3나노 공정 개발에도 집중하고 있으며, 이는 기존 3나노 공정 대비 성능 및 전력 효율성을 더욱 개선할 것으로 예상된다. 이러한 기술 발전은 향후 AI 서비스의 속도와 사용자 경험을 혁신하는 데 중요한 역할을 할 것이다.

## 시장 전망

글로벌 AI 반도체 시장은 폭발적인 성장세를 이어가고 있으며, 특히 고성능 컴퓨팅을 요구하는 생성형 AI 및 자율주행 분야의 수요가 급증하고 있다. 삼성전자가 3나노 공정에서의 경쟁 우위를 확보한다면, TSMC와의 파운드리 시장 경쟁에서 유리한 고지를 점할 수 있을 것으로 전망된다.`},{id:"20260607180002",title:"OpenAI, 차세대 LLM 'GPT-5' 출시 임박… 성능 대폭 향상",summary:"OpenAI가 차세대 거대 언어 모델(LLM)인 GPT-5 출시를 앞두고 막바지 테스트를 진행 중이다. 이번 모델은 이전 버전에 비해 추론 능력, 창의성, 다국어 지원 등에서 획기적인 성능 향상을 이룰 것으로 기대된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-06-07T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## OpenAI, 차세대 LLM 'GPT-5' 출시 임박… 성능 대폭 향상

인공지능 연구 선두 주자인 OpenAI가 차세대 거대 언어 모델(LLM) 'GPT-5'의 출시를 코앞에 두고 있다는 소식이 전해졌다. 내부 관계자들에 따르면, GPT-5는 현재까지 공개된 LLM 중 가장 뛰어난 성능을 자랑할 것으로 예상되며, 다양한 분야에 혁신적인 변화를 가져올 것으로 기대된다.

### 한국에 미치는 영향

GPT-5의 출시는 한국의 IT, 콘텐츠, 교육, 금융 등 전 산업 분야에 지대한 영향을 미칠 것이다. 한국어 이해 및 생성 능력이 비약적으로 향상될 경우, 한국어 기반 AI 서비스 개발에 새로운 지평이 열릴 수 있다. 또한, 국내 기업들은 GPT-5를 활용하여 더욱 정교하고 개인화된 고객 경험을 제공하거나, 복잡한 데이터를 분석하고 새로운 아이디어를 창출하는 데 도움을 받을 수 있다.

> "GPT-5는 이전 모델들의 한계를 뛰어넘어, 인간과 유사한 수준의 이해력과 창의성을 보여줄 것입니다. 이는 AI의 활용 범위를 근본적으로 확장시킬 것입니다." - OpenAI 관계자

이번 모델은 특히 긴 문맥을 이해하고 복잡한 추론을 수행하는 능력, 그리고 윤리적이고 안전한 응답을 생성하는 데 중점을 두었다고 알려졌다. 또한, 멀티모달(Multimodal) 기능의 강화로 텍스트뿐만 아니라 이미지, 음성 등 다양한 형태의 정보를 통합적으로 처리할 수 있을 것으로 보인다.

## 시장 전망

GPT-5의 등장은 LLM 시장의 경쟁을 더욱 심화시키고, AI 기술 발전의 속도를 가속화할 전망이다. OpenAI의 독주를 견제하기 위한 경쟁사들의 움직임도 더욱 활발해질 것으로 예상되며, 이는 결국 더 나은 AI 기술과 서비스의 등장을 촉진할 것이다.`},{id:"20260607180003",title:"AI 규제 논의 가속… EU, 'AI 액트' 최종 합의 임박",summary:"유럽연합(EU)이 AI 기술의 안전하고 윤리적인 사용을 위한 'AI 액트(AI Act)'에 대한 최종 합의를 앞두고 있다. 이번 규제안은 AI 시스템의 위험 수준에 따라 차등적인 의무를 부과하는 것을 골자로 한다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-06-07T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## AI 규제 논의 가속… EU, 'AI 액트' 최종 합의 임박

유럽연합(EU)이 전 세계적으로 AI 기술의 발전 속도가 빨라짐에 따라, AI 시스템의 안전성과 신뢰성을 확보하기 위한 법안 마련에 속도를 내고 있다. 'AI 액트(AI Act)'로 명명된 이 규제안은 AI 시스템을 위험 수준별로 분류하고, 각 수준에 맞는 엄격한 규제를 적용하는 것을 목표로 한다.

### 한국에 미치는 영향

EU의 AI 액트 최종 합의는 한국의 AI 산업에도 상당한 영향을 미칠 것으로 예상된다. EU 시장에 진출하려는 한국 기업들은 AI 액트의 요건을 충족하기 위한 기술 및 프로세스 개선에 나서야 할 것이다. 이는 글로벌 AI 규제 표준 형성에 대한 논의에 한국이 적극적으로 참여해야 할 필요성을 시사한다. 또한, AI 윤리 및 안전에 대한 국제적 기준이 높아짐에 따라, 한국 역시 관련 법규 정비 및 산업계의 자율 규제 강화 노력을 병행해야 할 것이다.

> "AI 액트는 혁신을 저해하지 않으면서도, 시민들의 안전과 기본권을 보호하는 균형 잡힌 접근 방식을 취하고 있습니다." - EU 집행위원회 관계자

AI 액트는 '수용 불가능한 위험', '고위험', '제한적 위험', '최소 위험'의 네 가지 범주로 AI 시스템을 분류한다. 예를 들어, 사회적 점수화 시스템과 같이 명백히 위험한 AI는 금지되며, 자율주행차나 의료기기에 사용되는 AI는 엄격한 사전 평가와 사후 모니터링을 거쳐야 한다.

## 시장 전망

AI 액트의 시행은 AI 기업들에게 새로운 도전 과제를 제시하는 동시에, 규제 준수를 통해 신뢰도를 높인 기업들에게는 오히려 기회가 될 수 있다. 장기적으로는 AI 기술의 건전한 발전을 유도하고, AI 기술에 대한 사회적 신뢰를 구축하는 데 기여할 것으로 기대된다.`},{id:"20260607180004",title:"AI 스타트업 '뉴럴링크', 뇌-컴퓨터 인터페이스 기술 발전 가속",summary:"AI 스타트업 뉴럴링크가 뇌-컴퓨터 인터페이스(BCI) 기술 개발에 박차를 가하며 상용화 가능성을 높이고 있다. 최근 발표된 연구 결과는 BCI 기술의 정확도와 속도를 크게 향상시켰음을 보여준다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-06-07T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!1,content:`## AI 스타트업 '뉴럴링크', 뇌-컴퓨터 인터페이스 기술 발전 가속

혁신적인 AI 스타트업 뉴럴링크가 인간의 뇌와 컴퓨터를 직접 연결하는 뇌-컴퓨터 인터페이스(BCI) 기술 개발에서 괄목할 만한 성과를 거두고 있다. 최근 공개된 연구 결과에 따르면, 뉴럴링크의 새로운 BCI 시스템은 이전 모델 대비 훨씬 빠르고 정확하게 뇌 신호를 해석하는 능력을 보여주었다.

### 한국에 미치는 영향

뉴럴링크의 BCI 기술 발전은 한국의 의료, 재활, 그리고 미래 인터페이스 기술 분야에 새로운 가능성을 열어줄 수 있다. 신경계 질환 환자들의 삶의 질을 획기적으로 개선할 수 있는 재활 도구 개발이나, 인간의 인지 능력을 확장하는 새로운 형태의 컴퓨팅 환경 구축에도 기여할 수 있다. 국내 연구 기관 및 기업들도 이러한 첨단 BCI 기술 동향을 주시하며 관련 연구 개발에 대한 투자를 확대해야 할 필요성이 제기된다.

> "우리의 목표는 뇌의 복잡성을 이해하고, 이를 통해 인간의 능력을 확장하며, 궁극적으로는 뇌 질환으로 고통받는 사람들에게 희망을 주는 것입니다." - 뉴럴링크 CEO

이번 연구에서 뉴럴링크는 고밀도 전극 배열과 고급 AI 알고리즘을 결합하여, 뇌에서 발생하는 미세한 전기 신호를 실시간으로 분석하고 이를 특정 명령으로 변환하는 기술을 선보였다. 이를 통해 사용자는 생각만으로 컴퓨터 커서를 움직이거나 텍스트를 입력하는 것이 가능해졌다.

## 시장 전망

BCI 기술 시장은 아직 초기 단계이지만, 의료 분야를 중심으로 빠르게 성장할 것으로 예상된다. 뉴럴링크와 같은 선도 기업들의 기술 발전은 BCI 기술의 상용화를 앞당기고, 관련 시장 규모를 확대하는 데 중요한 역할을 할 것이다. 장기적으로는 인간과 기계의 상호작용 방식을 근본적으로 변화시킬 잠재력을 지니고 있다.`},{id:"20260607180005",title:"AI 기반 신약 개발 플랫폼, 임상 성공률 20%p 향상",summary:"AI 신약 개발 스타트업 '바이오젠 AI'가 개발한 AI 플랫폼이 임상 시험 성공률을 기존 대비 20%p 높이는 성과를 거두었다. 이는 신약 개발 과정의 시간과 비용을 획기적으로 절감할 것으로 기대된다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-06-07T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!1,content:`## AI 기반 신약 개발 플랫폼, 임상 성공률 20%p 향상

인공지능(AI) 기술이 제약 산업의 혁신을 주도하고 있는 가운데, AI 신약 개발 스타트업 '바이오젠 AI'가 개발한 플랫폼이 임상 시험 성공률을 크게 높이며 주목받고 있다. 이 플랫폼은 방대한 생물학적 데이터와 AI 알고리즘을 활용하여 신약 후보 물질을 발굴하고, 임상 시험의 성공 가능성을 예측하는 데 특화되어 있다.

### 한국에 미치는 영향

바이오젠 AI의 성과는 한국의 제약 및 바이오 산업에 큰 영감을 주고 있다. 국내 제약사들은 AI를 활용한 신약 개발 효율성을 높이고, 글로벌 신약 시장에서의 경쟁력을 강화할 기회를 얻게 될 것이다. 또한, 한국의 AI 기술력과 바이오 산업의 시너지를 통해 혁신 신약 개발을 가속화하고, 관련 일자리 창출에도 기여할 수 있을 것으로 기대된다.

> "우리의 AI 플랫폼은 신약 개발의 초기 단계에서 잠재적인 실패 가능성을 미리 식별함으로써, 귀중한 시간과 자원을 절약하고 성공률을 극대화합니다." - 바이오젠 AI 연구팀장

바이오젠 AI가 발표한 최신 보고서에 따르면, 해당 AI 플랫폼을 적용한 신약 개발 프로젝트들은 전통적인 방식에 비해 평균 20%p 높은 임상 시험 성공률을 기록했다. 이는 AI가 질병 메커니즘을 더 깊이 이해하고, 특정 환자군에 최적화된 신약 후보 물질을 설계하는 데 탁월한 능력을 발휘함을 입증하는 결과다.

## 시장 전망

AI 기반 신약 개발 시장은 급격한 성장세를 보이고 있으며, 바이오젠 AI와 같은 혁신적인 기업들의 등장은 시장의 잠재력을 더욱 부각시키고 있다. 제약사들은 AI 기술 도입을 통해 R&D 비용을 절감하고 신약 출시 기간을 단축하려는 노력을 강화할 것으로 예상되며, 이는 AI 신약 개발 생태계의 지속적인 확장을 이끌 것이다.`},{id:"20260606180001",title:"삼성, 차세대 AI 칩 '엑시노스 AI 2000' 공개… 성능 2배↑",summary:"삼성전자가 6일, 자체 개발한 차세대 AI 칩 '엑시노스 AI 2000'을 공개하며 모바일 AI 시장 경쟁에 본격적으로 뛰어들었다. 이번 신제품은 이전 세대 대비 AI 연산 성능이 2배 향상된 것으로 알려져, 스마트폰 및 웨어러블 기기의 AI 기능 대폭 강화가 기대된다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-06-06T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!0,content:`## 삼성, 차세대 AI 칩 '엑시노스 AI 2000' 공개… 성능 2배↑

삼성전자가 6일, 자체 개발한 차세대 AI 칩 '엑시노스 AI 2000'을 공개하며 모바일 AI 시장 경쟁에 본격적으로 뛰어들었다. 이번 신제품은 이전 세대 대비 AI 연산 성능이 2배 향상된 것으로 알려져, 스마트폰 및 웨어러블 기기의 AI 기능 대폭 강화가 기대된다.

### 엑시노스 AI 2000, 무엇이 달라졌나?

삼성전자는 엑시노스 AI 2000이 온디바이스 AI(On-device AI) 성능을 극대화하는 데 초점을 맞췄다고 밝혔다. 특히, 이미지 인식, 자연어 처리, 음성 인식 등 다양한 AI 작업에서 기존 칩 대비 2배 이상의 처리 속도를 자랑하며, 전력 효율성 또한 30% 개선되었다고 설명했다. 이는 사용자 경험을 한 단계 끌어올릴 수 있는 잠재력을 지닌다.

> "엑시노스 AI 2000은 스마트폰이 단순한 통신 기기를 넘어 개인 비서와 같은 역할을 수행하도록 만들 것입니다. 더욱 빠르고 정확한 AI 경험을 모든 사용자에게 제공할 수 있게 되어 기쁩니다." - 삼성전자 AI 사업부 관계자

### 한국에 미치는 영향

삼성전자의 AI 칩 기술력 강화는 국내 스마트폰 제조사의 경쟁력 강화로 직결될 전망이다. 엑시노스 AI 2000이 탑재된 플래그십 스마트폰은 물론, 중저가 모델까지 AI 기능이 확대 적용될 가능성이 높아 소비자들의 AI 경험 증진에 크게 기여할 것으로 보인다. 또한, 국내 AI 스타트업과의 협력을 통해 새로운 AI 서비스 발굴에도 긍정적인 영향을 미칠 것으로 기대된다.

### 한국 시장 전망

국내 모바일 시장은 이미 AI 기능에 대한 소비자들의 기대치가 높은 편이다. 엑시노스 AI 2000의 성능 향상은 프리미엄 스마트폰 시장에서 삼성전자의 점유율을 더욱 공고히 하는 데 기여할 수 있으며, AI 기반의 새로운 서비스 및 애플리케이션 시장 성장을 견인할 것으로 예상된다.`},{id:"20260606180002",title:"OpenAI, 'GPT-5' 출시 임박… 성능·안전성 '혁신' 예고",summary:"AI 연구 선두주자 OpenAI가 차세대 대규모 언어 모델(LLM) 'GPT-5'의 출시를 임박했다고 공식 발표했다. 이번 모델은 이전 버전에 비해 추론 능력과 창의성이 비약적으로 향상되었으며, 더욱 강화된 안전 장치를 탑재한 것으로 알려져 AI 업계의 큰 주목을 받고 있다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-06-06T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## OpenAI, 'GPT-5' 출시 임박… 성능·안전성 '혁신' 예고

AI 연구 선두주자 OpenAI가 차세대 대규모 언어 모델(LLM) 'GPT-5'의 출시를 임박했다고 공식 발표했다. 이번 모델은 이전 버전에 비해 추론 능력과 창의성이 비약적으로 향상되었으며, 더욱 강화된 안전 장치를 탑재한 것으로 알려져 AI 업계의 큰 주목을 받고 있다.

### GPT-5, 무엇을 기대할 수 있나?

OpenAI는 GPT-5가 복잡한 문제 해결, 다국어 번역, 코드 생성 등 다양한 분야에서 이전 모델 대비 10배 이상의 성능 향상을 보일 것이라고 밝혔다. 특히, 인간과 유사한 수준의 맥락 이해 능력과 창의적인 텍스트 생성이 가능해져, 콘텐츠 제작, 교육, 연구 등 여러 산업 분야에 혁신을 가져올 것으로 기대된다. 또한, 유해 콘텐츠 생성 방지 및 편향성 감소를 위한 새로운 안전 메커니즘이 적용되었다고 강조했다.

> "GPT-5는 AI의 가능성을 한 단계 더 넓힐 것입니다. 우리는 이 강력한 기술이 인류에게 긍정적인 영향을 미치도록 안전과 윤리를 최우선으로 고려했습니다." - OpenAI CEO 샘 알트만

### 한국에 미치는 영향

GPT-5의 등장은 국내 AI 서비스 및 콘텐츠 산업에 큰 영향을 미칠 전망이다. 한국어 이해 및 생성 능력이 더욱 향상될 것으로 예상됨에 따라, 한국어 기반의 챗봇, 번역 서비스, 교육 콘텐츠 개발이 더욱 활발해질 수 있다. 또한, 국내 기업들이 GPT-5를 활용하여 글로벌 시장에 진출할 수 있는 새로운 기회가 열릴 것으로 보인다.

### 한국 시장 전망

국내 IT 기업들은 이미 LLM 기술을 활용한 다양한 서비스를 선보이고 있다. GPT-5의 출시로 인해 국내 LLM 시장의 경쟁은 더욱 치열해질 것으로 예상되며, 동시에 AI 기술 도입을 망설이던 기업들도 적극적으로 기술을 도입할 것으로 보인다. 특히, 교육, 의료, 금융 등 공공 서비스 분야에서의 AI 활용 확대가 기대된다.`},{id:"20260606180003",title:"네이버, '하이퍼클로바X' 성능 대폭 강화… 기업용 AI 솔루션 강화",summary:"네이버가 자체 개발한 초대규모 AI 모델 '하이퍼클로바X'의 성능을 대폭 강화하고, 이를 기반으로 한 기업용 AI 솔루션 라인업을 확대한다고 6일 밝혔다. 이번 업데이트는 기업들의 디지털 전환을 가속화하고 생산성을 높이는 데 초점을 맞췄다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-06-06T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!1,content:`## 네이버, '하이퍼클로바X' 성능 대폭 강화… 기업용 AI 솔루션 강화

네이버가 자체 개발한 초대규모 AI 모델 '하이퍼클로바X'의 성능을 대폭 강화하고, 이를 기반으로 한 기업용 AI 솔루션 라인업을 확대한다고 6일 밝혔다. 이번 업데이트는 기업들의 디지털 전환을 가속화하고 생산성을 높이는 데 초점을 맞췄다.

### 하이퍼클로바X, 무엇이 달라졌나?

네이버는 이번 업데이트를 통해 하이퍼클로바X의 한국어 이해 및 생성 능력을 20% 이상 향상시켰다고 밝혔다. 특히, 전문 용어 이해도와 복잡한 문맥 파악 능력이 크게 개선되어, 법률, 의료, 금융 등 전문 분야에서도 높은 정확도를 자랑한다. 또한, 기존 대비 15% 향상된 추론 능력으로 더욱 정교하고 개인화된 답변 생성이 가능해졌다.

> "하이퍼클로바X는 한국 기업들의 비즈니스 환경에 최적화된 AI 솔루션을 제공하는 것을 목표로 합니다. 이번 성능 강화로 기업들이 더욱 스마트하고 효율적인 업무 환경을 구축할 수 있도록 지원할 것입니다." - 네이버 클라우드 AI 사업부장

### 한국에 미치는 영향

국내 기업들은 하이퍼클로바X의 성능 향상으로 인해 더욱 정교하고 맞춤화된 AI 서비스를 도입할 수 있게 되었다. 네이버의 기업용 AI 솔루션은 고객 상담, 마케팅 자동화, 콘텐츠 제작 등 다양한 업무 영역에서 생산성 향상에 기여할 것으로 기대된다. 이는 국내 중소기업들의 디지털 경쟁력 강화에도 긍정적인 영향을 미칠 수 있다.

### 한국 시장 전망

국내 기업들의 AI 도입 수요가 꾸준히 증가하는 가운데, 네이버의 하이퍼클로바X 기반 솔루션은 시장에서 강력한 경쟁력을 확보할 것으로 보인다. 특히, 한국어 특화 및 국내 기업 환경에 대한 이해도를 바탕으로 B2B AI 시장에서 점유율을 확대해 나갈 것으로 예상된다. 이는 국내 AI 생태계 발전에도 중요한 역할을 할 것이다.`},{id:"20260606180004",title:"AI 윤리 가이드라인 강화, 국내 기업 '책임감 있는 AI' 도입 가속",summary:"과학기술정보통신부가 6일, AI 기술의 건전한 발전과 사회적 신뢰 확보를 위한 'AI 윤리 가이드라인' 개정안을 발표했다. 이번 가이드라인 강화는 기업들의 책임감 있는 AI 개발 및 활용을 촉진하고, 잠재적 위험을 최소화하는 데 중점을 두었다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-06-06T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",breaking:!1,content:`## AI 윤리 가이드라인 강화, 국내 기업 '책임감 있는 AI' 도입 가속

과학기술정보통신부가 6일, AI 기술의 건전한 발전과 사회적 신뢰 확보를 위한 'AI 윤리 가이드라인' 개정안을 발표했다. 이번 가이드라인 강화는 기업들의 책임감 있는 AI 개발 및 활용을 촉진하고, 잠재적 위험을 최소화하는 데 중점을 두었다.

### 개정된 AI 윤리 가이드라인 주요 내용

개정안은 AI 개발 및 활용 전 과정에 걸쳐 인간 존엄성, 사회적 가치, 공정성, 투명성, 안전성, 책임성 등 6대 원칙을 더욱 명확히 하고 구체적인 실천 방안을 제시했다. 특히, AI 시스템의 의사결정 과정에 대한 설명 가능성(Explainability)을 높이고, 개인정보 보호 및 데이터 편향성 문제를 해결하기 위한 구체적인 점검 항목을 추가했다. 또한, AI로 인한 피해 발생 시 기업의 책임 범위를 명확히 규정하는 내용을 포함했다.

> "AI 기술은 우리 사회에 큰 혜택을 줄 수 있지만, 동시에 잠재적인 위험도 내포하고 있습니다. 이번 가이드라인 개정을 통해 모든 주체가 책임감을 가지고 AI를 개발하고 활용하여, AI가 우리 사회에 긍정적인 영향을 미치도록 노력해야 합니다." - 과학기술정보통신부 장관

### 한국에 미치는 영향

이번 가이드라인 강화는 국내 AI 기업들에게 더욱 높은 수준의 윤리적 기준을 요구하게 된다. 기업들은 AI 시스템 개발 및 운영 시 가이드라인을 준수하기 위한 내부 프로세스를 강화해야 하며, 이는 장기적으로 AI 기술에 대한 사회적 신뢰도를 높이는 데 기여할 것이다. 또한, AI 윤리 전문가 수요 증가 및 관련 교육 프로그램 확대에도 영향을 미칠 것으로 보인다.

### 한국 시장 전망

AI 윤리 준수는 글로벌 시장에서 기업 경쟁력의 중요한 요소로 부상하고 있다. 국내 기업들이 강화된 윤리 가이드라인을 성공적으로 이행한다면, 해외 시장 진출 시 유리한 입지를 확보할 수 있을 것이다. 또한, 정부의 지원과 함께 책임감 있는 AI 생태계 구축이 가속화되면서, AI 기술의 지속 가능한 발전과 사회적 수용성 증대에 긍정적인 영향을 미칠 것으로 전망된다.`},{id:"20260606180005",title:"MIT, AI 기반 신약 개발 플랫폼 '바이오AI' 공개… 개발 기간 50% 단축",summary:"미국 MIT 연구진이 AI 기술을 활용하여 신약 개발 기간을 획기적으로 단축할 수 있는 새로운 플랫폼 '바이오AI'를 6일 공개했다. 이 플랫폼은 방대한 생물학적 데이터를 분석하고 약물 후보 물질을 빠르게 탐색하여 신약 개발의 패러다임을 바꿀 것으로 기대된다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-06-06T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",breaking:!1,content:`## MIT, AI 기반 신약 개발 플랫폼 '바이오AI' 공개… 개발 기간 50% 단축

미국 MIT 연구진이 AI 기술을 활용하여 신약 개발 기간을 획기적으로 단축할 수 있는 새로운 플랫폼 '바이오AI'를 6일 공개했다. 이 플랫폼은 방대한 생물학적 데이터를 분석하고 약물 후보 물질을 빠르게 탐색하여 신약 개발의 패러다임을 바꿀 것으로 기대된다.

### '바이오AI' 플랫폼의 혁신

MIT 연구진에 따르면, '바이오AI'는 기존 신약 개발 과정에서 평균 10년 이상 소요되던 기간을 최대 50%까지 단축할 수 있는 잠재력을 지니고 있다. 이 플랫폼은 딥러닝 알고리즘을 활용하여 수십억 개의 화합물 데이터를 분석하고, 특정 질병에 효과적인 약물 후보 물질을 예측한다. 또한, 임상 시험 성공 확률이 높은 후보 물질을 우선적으로 선별하는 기능도 갖추고 있어, 신약 개발의 효율성을 극대화한다.

> "AI는 신약 개발 분야에 혁신적인 변화를 가져올 것입니다. 바이오AI는 수많은 데이터를 분석하여 인간 연구자들이 놓칠 수 있는 패턴을 발견하고, 이를 통해 인류 건강 증진에 기여할 수 있는 새로운 치료법 개발을 앞당길 수 있습니다." - MIT 바이오AI 연구팀 리더

### 한국에 미치는 영향

MIT의 '바이오AI' 플랫폼 공개는 국내 제약 및 바이오 업계에 큰 영향을 미칠 것으로 예상된다. 국내 기업들은 이 플랫폼을 활용하거나 유사한 기술을 개발함으로써 신약 개발 경쟁력을 강화할 수 있다. 또한, AI 기반 신약 개발 기술 도입은 한국이 글로벌 바이오 강국으로 도약하는 데 중요한 발판이 될 수 있다.

### 한국 시장 전망

국내 제약 및 바이오 기업들은 이미 AI 기술을 신약 개발에 도입하기 위한 노력을 기울이고 있다. '바이오AI'와 같은 혁신적인 플랫폼의 등장은 이러한 움직임을 더욱 가속화시킬 것이다. 정부의 정책적 지원과 더불어, 국내 기업들의 적극적인 기술 도입 및 연구 개발 투자가 이루어진다면, 한국은 AI 기반 신약 개발 분야에서 세계적인 경쟁력을 갖출 수 있을 것으로 전망된다.`},{id:"20260604083001",title:"앤트로픽, IPO 비밀 신청…1,300조 몸값으로 오픈AI 추월",summary:"앤트로픽이 6월 1일 미국 증권거래위원회(SEC)에 IPO를 위한 S-1 서류를 비공개로 제출했다. 5월 28일 마무리한 650억 달러 시리즈H 투자로 기업가치는 9,650억 달러(약 1,300조원)에 달해 오픈AI를 제쳤다. 매출 연환산은 1년 만에 100억 달러에서 470억 달러로 폭증했고, 회사는 1.75조~1.8조 달러 몸값에 사상 최대 IPO를 노린다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-06-04T08:30:01+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## 앤트로픽, 오픈AI보다 먼저 증시 문을 두드리다

생성형 AI 대장주 자리를 두고 다투는 ==앤트로픽(Anthropic)==이 6월 1일(현지시간) 미국 증권거래위원회(SEC)에 기업공개(IPO)를 위한 **S-1 등록서류를 비공개로 제출**했다. 클로드(Claude)를 만든 이 회사가 ==오픈AI보다 한발 먼저== 상장 절차에 들어가면서, 'AI 1등 기업'을 가리는 경쟁이 자본시장으로 옮겨붙었다.

바로 사흘 전인 5월 28일, 앤트로픽은 **650억 달러** 규모의 시리즈H 투자를 ==9,650억 달러(약 1,300조원)== 기업가치에 마무리했다고 발표했다. 이는 역대 비상장 AI 기업 중 최고 몸값으로, 오픈AI를 제친 수치다.

📌 **핵심 인사이트**: 앤트로픽의 진짜 무기는 챗봇이 아니라 ==클로드 코드(Claude Code)==다. AI 코딩 시장을 선점하며 매출이 폭증했다.

---

## 숫자로 보는 앤트로픽의 질주

비공개 S-1 제출은 '상장을 하겠다'는 확정이 아니라 ==선택지를 여는== 절차다. 주식 수, 공모가, 상장 거래소, 최종 시점은 아직 정해지지 않았다. 그럼에도 시장이 주목하는 건 이 회사의 ==성장 속도== 때문이다.

1. **시리즈H 650억 달러** 조달 — 9,650억 달러 기업가치
2. **매출 연환산(run-rate) 470억 달러** — 1년 전 약 100억 달러에서 ==4.7배 폭증==
3. **목표 IPO 몸값 1.75조~1.8조 달러** — 최대 **750억 달러** 조달, 성사 시 ==역사상 최대 규모 IPO==
4. **목표 상장 시점** — 이르면 올해 10월 거론

> "앤트로픽은 클로드 코드를 앞세워 단숨에 시장 선두로 치고 나갔다. 매출 곡선이 이를 증명한다."
> — 글로벌 IT 시장 분석가

---

## 왜 지금, 비밀 신청인가

앤트로픽이 서둘러 상장 카드를 꺼낸 데에는 ==실탄 확보== 경쟁이 깔려 있다. 차세대 모델 학습에는 ==수십억 달러의 컴퓨팅 비용==이 들고, 엔비디아 GPU와 데이터센터 임대료가 천정부지로 치솟고 있다. 비상장 투자만으로는 이 군비 경쟁을 감당하기 어렵다는 판단이다.

오픈AI 역시 IPO를 준비 중인 것으로 알려져, ==누가 먼저 공개 시장의 자금을 빨아들이느냐==가 향후 모델 경쟁의 체력을 좌우한다. 앤트로픽의 선제적 움직임은 이 =='자본 군비 경쟁'==에서 주도권을 쥐려는 포석이다.

비공개(confidential) 제출 방식을 택한 것도 전략적이다. 공모가와 시점을 ==시장 상황에 맞춰 유연하게== 조정할 수 있고, 경쟁사에 패를 미리 보이지 않으면서 SEC 심사를 진행할 수 있기 때문이다. 앤트로픽은 "상장 여부는 SEC 심사와 시장 여건에 달려 있다"며 신중한 단서를 달았지만, 시장은 이미 ==사실상의 상장 선언==으로 받아들이는 분위기다.

무엇보다 클로드 코드의 폭발적 성장이 자신감의 배경이다. 단순 챗봇 구독을 넘어 ==개발자가 매일 쓰는 업무 도구==로 자리잡으면서, 매출이 ==예측 가능하고 반복적인== 구조로 바뀌었다. 이는 투자자가 가장 좋아하는 '끈끈한 매출(sticky revenue)'이며, 천문학적 밸류에이션을 정당화하는 핵심 논리다.

---

## 'AI 버블' 논쟁 속의 상장

장밋빛 전망만 있는 것은 아니다. 시장 일각에서는 ==AI 버블== 경고가 끊이지 않는다. 엔비디아·오픈AI·오라클·코어위브 사이의 ==순환출자성 거래(circular financing)==가 **8,000억 달러** 규모로 추정되며, '같은 돈이 돌고 도는' 구조라는 비판이 나온다.

실제 기업 현장의 성적표도 냉정하다. MIT 미디어랩 보고서에 따르면 생성형 AI에 **300억~400억 달러**를 투자한 기업 중 ==95%가 '측정 가능한 수익이 없다'==고 답했다. 앤트로픽의 천문학적 몸값이 ==실제 수익성==으로 뒷받침되느냐가 상장의 최대 관문이다.

⚡ **주목할 포인트**: 앤트로픽의 IPO는 단순한 한 기업의 상장이 아니라, 'AI 거품'의 실체를 시장이 처음으로 ==공개 검증==하는 무대가 된다.

---

## 한국에 미치는 영향

### 1. 국내 AI 투자·벤처 생태계의 재조정
앤트로픽의 1,300조원 몸값은 국내 벤처 투자 심리에 직접 영향을 준다. **미래에셋**, **한국투자증권** 등 국내 운용사들이 해외 AI 비상장 지분에 베팅해온 가운데, 상장 성공 시 막대한 차익이 기대된다. 반면 거품 우려가 커지면 국내 AI 스타트업의 후속 투자 유치 환경도 함께 얼어붙을 수 있다.

### 2. 클로드 코드와 국내 개발 시장
앤트로픽 매출 폭증의 핵심인 클로드 코드는 이미 **네이버**, **카카오**, **토스**, **우아한형제들** 등 국내 개발 조직에서 빠르게 확산되고 있다. 외산 AI 코딩 도구 의존도가 높아질수록, 비용·보안·종속성을 둘러싼 사내 거버넌스 논의도 본격화된다.

### 3. 'AI 주권'과 국산 모델 분발
글로벌 빅2의 몸집이 커질수록 국산 모델의 입지 확보가 절실해진다. **LG AI연구원 엑사원**, **네이버 하이퍼클로바X**, **업스테이지 솔라** 등 토종 모델이 '한국어·국내 데이터 특화'와 '데이터 주권'을 무기로 차별화에 나서야 한다는 목소리가 커진다.

### 4. 서학개미와 국내 증시

앤트로픽이 실제 상장하면 =='서학개미'==의 자금이 또 한 번 미국 AI 주식으로 쏠릴 수 있다. 이는 국내 증시의 자금 이탈 요인이 되는 동시에, **SK하이닉스**·**삼성전자** 등 AI 인프라 수혜주에 대한 재평가로 이어질 수 있다. AI 밸류체인의 '진짜 돈'이 어디서 도느냐를 냉정히 따지는 ==옥석 가리기==가 한국 투자자에게도 필수가 됐다. 결국 이번 IPO는 'AI가 돈을 버는가'라는 근본 질문에 대한 ==첫 시험대==이며, 그 답에 따라 글로벌 자본의 흐름과 한국 산업의 베팅 전략이 다시 짜인다. 앤트로픽이 ==수익성 검증==이라는 관문을 무사히 통과한다면 'AI 투자 황금기'가 이어지지만, 시장의 의심을 사면 그 충격은 ==국내 AI 투자 심리 전반==으로 번질 수 있다. 한국 기업과 투자자 모두 ==기대와 거품을 구분하는 눈==을 길러야 할 때다.

⚡ **주목할 포인트**: 10월로 거론되는 앤트로픽 상장이 현실화되면, 'AI 1등 기업'의 가치를 시장이 직접 매기는 역사적 순간이 온다.`},{id:"20260604083002",title:"엔비디아 '베라 루빈' 양산 돌입…삼성·SK 'HBM4 대전' 점화",summary:"젠슨 황 엔비디아 CEO가 컴퓨텍스 2026에서 차세대 AI 플랫폼 '베라 루빈'의 본격 양산을 공식화했다. 베라 루빈은 TSMC 3나노 공정과 HBM4를 기반으로 하며, 삼성전자·SK하이닉스·마이크론이 공급망을 두고 격돌한다. SK하이닉스는 HBM4 시장 70% 점유가 전망되고, 삼성은 업계 최초 11.7Gbps HBM4 양산 출하로 반격에 나섰다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-06-04T08:30:02+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800",breaking:!0,content:`## 젠슨 황 "베라 루빈, 본격 양산 들어갔다"

젠슨 황 엔비디아 CEO가 6월 1일(현지시간) 대만 타이베이에서 열린 ==컴퓨텍스(Computex) 2026== 기조연설에서 차세대 AI 가속기 플랫폼 **'베라 루빈(Vera Rubin)'**의 ==본격 양산 돌입==을 공식화했다. AI 반도체 패권의 다음 라운드를 알리는 신호탄이다.

베라 루빈은 ==TSMC 3나노 공정==과 첨단 패키징, 그리고 차세대 고대역폭메모리 **HBM4**를 기반으로 구현된다. 황 CEO는 "베라 루빈에 삼성전자, SK하이닉스, 마이크론의 HBM4가 탑재된다"고 직접 언급하며 한국 메모리 3사를 핵심 파트너로 호명했다.

📌 **핵심 인사이트**: AI 가속기의 성능을 좌우하는 건 결국 ==HBM==이다. 베라 루빈 양산은 곧 ==HBM4 수주 전쟁==의 개막을 뜻한다.

---

## HBM4, 누가 주도권을 쥐나

HBM4는 AI 연산 속도와 전력 효율을 결정짓는 ==핵심 부품==이다. 베라 루빈 양산이 본격화되면서 삼성·SK·마이크론의 공급 경쟁도 격화되고 있다.

1. **SK하이닉스** — 세계 최초 HBM4 개발 완료, HBM3E 대비 ==대역폭 2배·전력효율 40% 향상==. 2026년 HBM 물량은 이미 ==완판==, 루빈용 HBM4 시장 점유율 **약 70%** 전망(UBS)
2. **삼성전자** — 지난달 업계 최초로 **11.7Gbps** HBM4 양산 출하 시작. 10나노급 6세대(1c) D램과 4나노 베이스 다이 적용, 올해 HBM 매출 ==전년 대비 3배== 목표
3. **마이크론** — 미국 정부 지원을 등에 업고 추격, 엔비디아 공급망 진입 가속

> "HBM4 경쟁은 단순한 부품 납품을 넘어, AI 시대 메모리 패권을 가르는 분수령이다."
> — 반도체 업계 애널리스트

---

## 'SK 독주'에 균열, 삼성의 반격

그동안 HBM 시장은 ==SK하이닉스의 독주==였다. 2025년 2분기 기준 HBM 출하량 점유율 **62%**로 압도적 1위를 지켰다. 하지만 균열의 조짐이 보인다.

핵심 변수는 **AMD**다. AMD가 차세대 AI 가속기의 HBM4 주공급사로 ==삼성전자를 지명==하면서, 삼성은 엔비디아·AMD ==동시 수주==의 발판을 마련했다. 카운터포인트리서치는 삼성의 2026년 HBM 점유율이 ==30%대로 회복==할 수 있다고 본다.

📌 **주목할 숫자**: 엔비디아 루빈이 만들어낼 =='1조 달러 과실'==을 두고 삼성·SK·마이크론이 벌이는 점유율 싸움이 본격화됐다.

---

## 메모리 슈퍼사이클의 한복판

2026년 반도체 시장은 ==HBM이 이끄는 슈퍼사이클==에 진입했다. AI 데이터센터 증설이 메모리 수요를 폭발시키면서, 한때 공급 과잉에 시달리던 메모리 산업이 =='없어서 못 파는'== 국면으로 반전했다.

SK하이닉스가 2026년 물량을 이미 완판한 것이 단적인 증거다. HBM은 일반 D램보다 ==수익성이 월등히 높아==, 메모리 기업의 실적을 끌어올리는 핵심 동력이 됐다. 다만 ==베라 루빈의 수율과 납품 일정==이 변수로 남아 있어, 품질 검증을 먼저 통과하는 기업이 ==초기 물량==을 선점하게 된다.

HBM4는 이전 세대와 ==설계 철학==부터 다르다. 메모리와 로직(베이스 다이)을 결합하는 방식이 진화하면서, 단순 D램 제조를 넘어 ==파운드리·패키징 역량==이 승부를 가른다. 삼성은 자체 파운드리(4나노 베이스 다이)를 무기로 =='턴키(turn-key) 공급'==을 노리고, SK하이닉스는 TSMC와 손잡아 베이스 다이를 보강하는 ==협업 모델==로 맞선다. 같은 HBM4라도 ==누가 더 빠르고 안정적으로 대량 양산하느냐==가 관건이다.

시장조사기관들은 2026년 HBM 시장이 전년 대비 ==두 배 이상== 커질 것으로 본다. AI 데이터센터 한 곳이 빨아들이는 HBM 물량이 ==웬만한 스마트폰 시장 전체==에 맞먹을 정도로, 수요의 무게중심이 완전히 이동했다. 메모리 3사 모두 HBM 생산능력 확대에 ==수십조원==을 쏟아붓는 이유다.

---

## 한국에 미치는 영향

### 1. 삼성·SK '쌍두마차'의 실적 도약
**SK하이닉스**와 **삼성전자**는 HBM4 슈퍼사이클의 직접 수혜주다. HBM은 두 회사 영업이익의 핵심 축으로 자리잡았고, 베라 루빈 양산은 ==2026~2027년 실적 가시성==을 한층 높인다. 두 회사의 주가와 코스피 향방도 여기에 연동된다.

### 2. 소부장 생태계의 낙수효과
HBM4 양산 확대는 **한미반도체**(TC본더), 패키징·테스트 장비, 소재 기업 등 ==국내 소부장(소재·부품·장비)== 생태계로 낙수효과를 낸다. 첨단 패키징 수요 급증은 후공정 강국 한국에 새로운 기회다.

### 3. '메모리 주권'과 인력 확보
글로벌 AI 패권이 메모리 경쟁력과 직결되면서, ==반도체 인력 양성==과 R&D 투자가 국가 과제로 떠올랐다. 정부의 반도체 클러스터 조성과 세제 지원이 ==속도전==에 들어가야 한다는 목소리가 커진다.

### 4. 중국 추격과 기술 초격차

중국 메모리 기업의 추격이 거세지는 가운데, 한국은 ==HBM4·HBM4E 기술 초격차==로 격차를 벌려야 하는 과제를 안았다. 삼성의 **HBM4E**는 핀당 16Gbps·4.0TB/s 대역폭으로 차세대를 겨냥하고 있다. 결국 관건은 =='세계 최초'와 '최대 물량'==을 동시에 잡는 것이다. 미국의 대중 반도체 규제와 맞물려, 한국 메모리 3사의 ==공급망 다변화==와 기술 리더십이 향후 5년 산업 지형을 좌우한다. AI 시대의 '쌀'로 불리는 HBM에서 한국이 주도권을 놓치는 순간, 반도체 강국의 위상도 흔들릴 수 있다. 반대로 ==HBM4·HBM4E·HBM5==로 이어지는 기술 로드맵에서 초격차를 지켜낸다면, 한국은 AI 인프라 시대의 ==최대 수혜국==으로 올라설 수 있다. 메모리가 단순 부품을 넘어 ==국가 전략 자산==이 된 시대, 삼성과 SK의 어깨에 한국 경제의 무게가 실려 있다.

⚡ **주목할 포인트**: 베라 루빈의 첫 물량을 누가 채우느냐 — 삼성과 SK의 'HBM4 대전' 승부가 올여름 판가름 난다.`},{id:"20260604083003",title:"AI 에이전트가 '뚫린다'…기업 88% 침해, 프롬프트 인젝션 340% 폭증",summary:"자율적으로 작업을 수행하는 AI 에이전트가 새로운 보안 취약점으로 떠올랐다. 2026년 프롬프트 인젝션 공격은 전년 대비 340% 급증했고, 구글은 웹 콘텐츠에 심긴 악성 페이로드가 4개월 새 32% 늘었다고 밝혔다. 공격자가 여러 입력에 무해해 보이는 명령을 쪼개 심는 '멀티스텝 하이재킹'이 올해의 핵심 위협으로 지목됐다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-06-04T08:30:03+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",breaking:!1,content:`## AI가 '일하는 직원'이 되자, 해커의 표적이 됐다

챗봇이 ==말하는 AI==였다면, AI 에이전트는 ==스스로 일하는 AI==다. 코드를 실행하고, 이메일을 보내고, 데이터베이스를 조회하는 자율 에이전트가 기업에 빠르게 도입되면서, 역설적으로 ==새로운 보안 구멍==이 뚫리고 있다.

핵심 위협은 ==프롬프트 인젝션(prompt injection)==이다. 공격자가 AI가 읽는 문서·웹페이지·이메일 속에 ==악성 명령==을 숨겨, 에이전트가 원래 목적을 벗어나 해커가 원하는 행동을 하도록 조종하는 수법이다.

📌 **핵심 인사이트**: 기업이 ==생산성을 높이려== 도입한 AI 에이전트가, 알고 보니 ==새로운 특권 실행 표면(privileged execution surface)==이 됐다.

---

## 숫자로 본 'AI 보안 위기'

2026년 들어 관련 지표가 일제히 ==경고등==을 켰다.

1. **프롬프트 인젝션 공격 340% 급증** — 2026년 한 해 폭증
2. **악성 페이로드 32% 증가** — 구글 연구진, 2025년 11월~2026년 2월 웹 콘텐츠 기준
3. **기업 88%가 이미 침해 경험** — AI 에이전트 보안 관련 조사
4. **멀티 에이전트 전파** — 한 에이전트가 뚫리면 ==연결된 다른 에이전트==로 공격 확산

> "공격자는 이제 모델 하나를 속이는 게 아니라, 여러 도구가 연결된 ==전체 작업 사슬==을 장악한다."
> — 에이전틱 AI 보안 연구자

---

## '멀티스텝 하이재킹'이 무서운 이유

2026년 가장 위험한 공격 양식으로 ==멀티스텝 하이재킹(multi-step hijacking)==이 꼽힌다. 단번에 탐지를 피하기 위해, 공격자는 ==무해해 보이는 명령을 여러 입력에 잘게 쪼개== 심는다. 개별 입력만 보면 정상이지만, 누적되면 에이전트의 ==목표 자체가 변질==된다.

대표적인 게 =='살라미 슬라이싱(salami slicing)'== 수법이다. 공격자가 고객지원 티켓을 여러 번 올리며 매번 '정상 행동'의 기준을 ==조금씩 재정의==하면, 에이전트의 제약 모델이 서서히 표류해 결국 ==무단 작업==을 수행하게 된다.

- **목표 탈취(Goal Hijacking)**: 정보 유출을 넘어 에이전트의 ==전체 목적==을 재설정
- **메모리 오염**: 공유 메모리에 악성 지시를 ==영구 저장==
- **권한 오용**: 탈취한 에이전트가 ==특권 도구 호출==을 실행
- **하류 전파**: 오케스트레이터를 거쳐 ==연결된 시스템 전체==로 확산

> "개별 입력은 어떤 탐지 규칙도 건드리지 않는다. 그래서 더 위험하다."
> — 사이버보안 분석가

---

## 왜 막기 어려운가

전통적 보안은 =='알려진 악성 패턴'==을 차단하는 방식이었다. 하지만 프롬프트 인젝션은 ==자연어== 그 자체를 무기로 삼기에, 정상 명령과 악성 명령의 ==경계가 모호==하다.

게다가 에이전트는 ==외부 데이터를 신뢰==하도록 설계돼 있다. 웹을 검색하고, 문서를 읽고, API를 호출하는 능력이 곧 ==공격 통로==가 된다. 보안 업계는 =='신뢰 경계(trust boundary)'== 재설계, 도구 호출 시 ==사람 승인 큐==, 권한 최소화, 입출력 ==샌드박싱==을 핵심 방어책으로 제시한다.

📌 **방어의 핵심**: AI에게 =='무엇을 할 수 있는가'가 아니라 '무엇을 해서는 안 되는가'==를 설계하는 것이 새로운 보안 패러다임이다.

특히 ==멀티 에이전트 환경==에서는 한 에이전트의 출력이 다른 에이전트의 입력이 되는 ==연쇄 구조== 탓에 피해가 증폭된다. 하나가 오염되면 ==오케스트레이터를 거쳐== 결제·인사·코드 배포 같은 핵심 시스템까지 도미노처럼 무너질 수 있다. 그래서 보안 업계는 각 에이전트를 ==격리된 최소 권한==으로 운영하고, 에이전트 간 ==통신을 검증·로깅==하는 'AI 제로트러스트' 아키텍처를 대안으로 제시한다.

또 다른 난점은 ==탐지의 사후성==이다. 공격이 여러 세션·여러 날에 걸쳐 천천히 진행되기에, 실시간 차단보다 ==행위 패턴의 이상 징후==를 누적 분석하는 방식이 필요하다. 결국 'AI를 지키는 AI', 즉 ==보안 전용 모델==로 에이전트의 행동을 감시하는 ==이중 방어==가 표준이 될 전망이다.

---

## 한국에 미치는 영향

### 1. 국내 기업의 'AI 에이전트' 도입 속도 조절
**삼성SDS**, **LG CNS**, **네이버클라우드** 등이 기업용 AI 에이전트를 잇따라 출시하는 가운데, 보안 검증 없는 성급한 도입은 ==대형 사고==로 이어질 수 있다. 도입 ROI만큼 ==보안 거버넌스==가 핵심 의제로 부상한다.

### 2. 금융·공공 보안 기준 정비
**금융보안원**과 정부는 AI 에이전트가 ==금융 거래·민원 처리==에 투입될 때의 보안 기준을 시급히 마련해야 한다. 자율 에이전트의 ==오작동·탈취 시 책임 소재==를 둘러싼 제도 공백이 크다.

### 3. K-보안 산업의 기회
프롬프트 인젝션 방어, AI 에이전트 ==행위 모니터링==, 권한 통제 솔루션은 **안랩**, **SK쉴더스** 등 국내 보안 기업에 새로운 시장을 연다. =='AI 보안'==이 차세대 보안 산업의 격전지가 되고 있다.

### 4. 인력과 인식의 전환

AI 에이전트 보안은 기술만의 문제가 아니다. 개발자와 임직원이 =='AI도 속을 수 있다'==는 사실을 인식하는 ==보안 문화==가 함께 자리잡아야 한다. 국내 기업은 ==레드팀(모의 침투) 테스트==를 AI 에이전트에도 적용하고, 도입 단계부터 ==보안 내재화(security by design)==를 의무화해야 한다. AI가 더 많은 권한을 갖고 더 자율적으로 일할수록, 그 ==신뢰성을 어떻게 검증하느냐==가 기업 경쟁력의 새로운 척도가 된다. 편리함만 좇다 보안을 놓친 조직과, 처음부터 안전하게 설계한 조직의 격차가 향후 수년간 벌어질 전망이다. 특히 국내 기업은 해외 사례를 '강 건너 불'로 여겨선 안 된다. 이미 ==기업 88%가 침해를 경험==했다는 통계는, 보안 사고가 ==예외가 아니라 일상==이 됐음을 뜻한다. AI 도입의 속도만큼 ==검증과 통제의 체계==를 갖추는 것, 그것이 'AI 네이티브 기업'의 진짜 실력이다.

⚡ **주목할 포인트**: AI 에이전트의 시대는 곧 ==AI 보안의 시대==다. '얼마나 똑똑한가'가 아니라 '얼마나 안전한가'가 도입의 전제 조건이 됐다.`},{id:"20260604083004",title:"'해외의존 99%' 국방반도체 자립…국방반도체법 국무회의 통과",summary:"국방반도체 개발·제조 역량을 확보하기 위한 '국방반도체 육성 및 지원에 관한 법률'이 6월 2일 국무회의를 통과했다. 해외의존도가 99%에 달하는 국방반도체를 국산화해 '반도체 자주국방'을 실현하려는 조치다. AI 반도체, 고출력 RF, GaN·SiC 화합물 반도체 등이 핵심 지원 대상이며, 이르면 올해 4분기 시행된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-06-04T08:30:04+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## '무기 맞춤형 칩'을 직접 만든다

무기체계의 두뇌인 ==국방반도체==를 국산화하기 위한 법적 토대가 마련됐다. 국방부는 6월 2일 **'국방반도체 육성 및 지원에 관한 법률(국방반도체법)'**이 ==국무회의를 통과==했다고 밝혔다. AI 기반 무기체계가 늘면서 "국방반도체를 따로 키워야 한다"는 요구가 마침내 입법으로 결실을 맺은 것이다.

배경에는 충격적인 수치가 있다. 한국의 국방반도체 ==해외의존도는 무려 99%==에 달한다. 첨단 무기를 만들면서도 그 핵심 칩은 거의 전량 수입에 의존해온 셈이다.

📌 **핵심 인사이트**: 이번 법은 단순한 산업 진흥책이 아니라, =='반도체 자주국방'==을 위한 안보 전략이다.

---

## 국방반도체법, 무엇을 담았나

국무회의를 통과한 법안의 핵심 조항은 다음과 같다.

1. **기본계획 수립** — 국방반도체 발전 기본계획·시행계획 의무화
2. **R&D 지원** — 국방반도체 특화 연구개발 사업 지원 및 ==신뢰성시험·인증체계== 구축
3. **우선구매** — R&D로 확보한 국방반도체 ==우선 구매== 보장
4. **부담 완화** — 무기체계 적용 시 ==지체상금 감면==으로 기업 진입 장벽 완화
5. **사업자 지정** — 국내 산업 육성과 ==내재화==를 위한 국방반도체사업자 지정

법은 이달 중 공포되며, 시행령·시행규칙 등 하위법령 마련 후 ==이르면 올해 4분기 중 시행==된다.

> "부품까지 직접 만드는 방산으로 바뀐다. 국방반도체 자립은 더 이상 미룰 수 없는 과제다."
> — 국방부 관계자

---

## 어떤 칩을 키우나

정부는 미래 무기체계의 ==핵심 부품== 분야를 집중 지원한다. 단순한 범용 칩이 아니라, 극한 환경에서 견디고 고성능을 내는 ==특수 반도체==가 대상이다.

- **AI 반도체** — 자율 무기·지능형 감시정찰의 두뇌
- **고출력 RF 반도체·송수신 SoC** — 레이더·통신의 핵심
- **질화갈륨(GaN)·탄화규소(SiC)** — 고온·고전압에 강한 화합물 반도체

이들은 민수용 반도체와 달리 ==소량 다품종==이라 수익성이 낮아, 민간이 자발적으로 뛰어들기 어려웠다. 우선구매와 지체상금 감면 같은 ==유인책==이 핵심인 이유다.

📌 **주목할 점**: AI 무기 경쟁이 가열될수록, ==AI 국방반도체==의 전략적 가치는 더욱 커진다.

---

## 왜 지금, 자립이 시급한가

국방반도체 자립이 ==더는 미룰 수 없는 과제==가 된 데에는 세 가지 구조적 배경이 있다.

1. **공급망 무기화** — 미·중 패권 경쟁 속에서 반도체가 ==전략 무기==로 쓰이면서, 특정국 의존은 곧 ==안보 취약점==이 된다
2. **무기의 AI화** — 자율 드론, 지능형 미사일, 무인 전투체계가 늘며 ==고성능 AI 칩== 수요가 폭증
3. **단종 리스크** — 무기체계는 수십 년간 운용되는데, 상용 칩은 ==수년 만에 단종==돼 부품 조달이 끊기는 사태가 반복

실제로 해외 부품 의존은 ==공급 지연·가격 협상력 상실·기술 정보 노출==이라는 삼중고를 낳았다. 한 발의 미사일에 들어가는 핵심 칩을 ==제때 구하지 못해== 무기 양산이 지연되는 일도 적지 않았다.

> "무기는 만들 수 있어도 그 안의 칩을 못 만들면, 진정한 자주국방이라 할 수 없다."
> — 방위산업 전문가

선진국들은 이미 국방반도체를 ==국가 전략 자산==으로 관리한다. 미국은 '신뢰할 수 있는 파운드리(Trusted Foundry)' 제도로 군용 칩을 자국 내에서 검증·생산하고, 보안이 확인된 시설에서만 ==민감 반도체==를 제조하도록 한다. 한국의 이번 법 제정은 이런 ==글로벌 표준==을 뒤늦게 따라잡는 첫걸음이다.

---

## 한국에 미치는 영향

### 1. 방산·반도체 융합 생태계 출범
이번 법은 **한화시스템**, **LIG넥스원**, **한국항공우주산업(KAI)** 등 방산 기업과 국내 ==팹리스(반도체 설계)== 기업을 잇는 새로운 협력 생태계를 연다. 방산과 반도체가 ==융합==하는 신산업의 출발점이다.

### 2. 국내 팹리스·파운드리의 새 시장
해외의존도 99%를 국산으로 대체하는 과정에서, 국내 ==팹리스와 파운드리(삼성전자·DB하이텍 등)==에 안정적인 ==공공 수요==가 창출된다. 민수 시장의 변동성에 시달려온 중소 설계 기업에 새로운 활로가 된다. 특히 국방이라는 ==확실한 수요처==가 보장되면, 기업은 장기 R&D에 ==과감히 투자==할 수 있고 이는 다시 민수 경쟁력으로 환류된다.

### 3. '반도체 자주국방'과 안보 주권
미·중 기술 패권 경쟁과 글로벌 ==공급망 불안== 속에서, 핵심 무기 부품을 외국에 의존하는 것은 ==안보 리스크==다. 국방반도체 자립은 ==기술 주권==이자 ==안보 주권==의 문제로 격상됐다. 유사시 ==수입선이 끊기면== 무기 양산 자체가 멈출 수 있다는 위기의식이, 이번 입법의 가장 큰 동력이었다.

### 4. 민군 겸용 기술의 선순환

국방반도체 R&D는 ==민군 겸용(dual-use)== 기술로 확장될 잠재력이 크다. 극한 환경용 AI 칩, 고출력 RF 기술은 ==자율주행·위성통신·우주산업== 등 민간 첨단 분야로 이전될 수 있다. 국방 투자가 ==민간 혁신==을 견인하는 선순환 구조가 만들어지는 것이다. 다만 성공의 관건은 ==지속적이고 충분한 예산==과 인력이다. 법 제정만으로 99% 의존도가 하루아침에 낮아지지 않는다. 미국·이스라엘처럼 ==장기적이고 일관된 투자==가 뒷받침될 때, 비로소 '반도체 자주국방'이 구호를 넘어 현실이 된다. AI 시대의 국방력은 결국 ==칩에서 시작==된다는 인식의 전환이 필요한 시점이다. 한국은 세계 최고의 메모리·파운드리 역량을 보유하고도 ==국방용 특수 칩==에서는 변방에 머물렀다. 이번 법이 ==민간의 세계적 제조 역량==과 ==국방 수요==를 연결하는 다리가 된다면, 'K-방산'의 수출 경쟁력은 무기 완성품을 넘어 ==핵심 부품==으로까지 확장될 수 있다.

⚡ **주목할 포인트**: AI 무기 경쟁의 시대, '칩을 지배하는 자가 전장을 지배한다'는 명제가 한국 안보 전략의 중심에 섰다.`},{id:"20260604083005",title:'구글 제미나이 3.5 Pro, 6월 출시 임박…"200만 토큰·딥씽크" 정조준',summary:"구글이 I/O 2026에서 예고한 차세대 프런티어 모델 '제미나이 3.5 Pro'의 정식 출시(GA)가 6월로 임박했다. 200만 토큰 컨텍스트, '딥씽크' 추론, 최고 수준의 멀티모달을 앞세운다. 이미 5월 출시된 플래시는 작년 프로급 코딩·에이전트 성능을 넘어섰지만, 어려운 추론에서 약점을 보여 프로가 이 격차를 메울지 주목된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-06-04T08:30:05+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",breaking:!1,content:`## "다음 달까지 기다려달라"…구글의 약속, 이제 지킬 때

구글의 차세대 프런티어 AI 모델 ==제미나이 3.5 Pro(Gemini 3.5 Pro)==의 정식 출시(GA)가 ==6월로 임박==했다. 순다르 피차이 구글 CEO는 지난 5월 19일 I/O 2026 무대에서 "이 모델을 여러분께 드리려면 ==다음 달까지 기다려달라=='고 말했고, 객석에서는 아쉬움의 탄식이 터져나왔다. 그 '다음 달'이 바로 지금이다.

현재 제미나이 3.5 Pro는 ==버텍스(Vertex) 제한적 프리뷰==와 내부용으로만 쓰이고 있으며, 6월 중 전면 공개가 예상된다.

📌 **핵심 인사이트**: 제미나이 3.5 Pro는 과거 =='제미나이 울트라'==가 맡던 최고 난도 영역 — 프런티어 추론, 심층 멀티모달, 초장문 처리 — 를 흡수하는 모델이다.

---

## 무엇이 달라지나

구글이 내세우는 제미나이 3.5 Pro의 핵심 사양은 다음과 같다.

1. **200만 토큰 컨텍스트** — 책 수십 권 분량을 한 번에 처리하는 ==초장문 이해==
2. **딥씽크(Deep Think) 추론** — 복잡한 문제를 단계적으로 ==심층 사고==
3. **프런티어 멀티모달** — 텍스트·이미지·영상·음성을 넘나드는 최고 수준 이해
4. **예상 가격** — 100만 토큰당 ==15~60달러== 수준으로 거론(GA 시 확정)

> "플래시가 이미 작년 프로급 성능을 넘어섰다. 이제 관건은 프로가 ==어려운 추론==의 벽을 얼마나 넘느냐다."
> — AI 모델 분석가

---

## '플래시'가 남긴 숙제

앞서 5월 19일 GA된 ==제미나이 3.5 플래시(Flash)==는 이미 시장에 단서를 남겼다. 플래시는 ==코딩·에이전트 벤치마크==에서 작년 제미나이 3.1 프로를 ==앞질렀지만==, 정작 ==어려운 추론·추상적 패턴 매칭·초장문 검색==에서는 ==퇴보==하는 모습을 보였다.

바로 이 ==격차==가 프로가 메워야 할 숙제다. 다만 플래시는 성능 향상과 함께 ==가격이 3배== 뛰어, '저렴한 고성능'이라는 공식이 흔들린다는 지적도 나온다. 프로의 가격 책정이 ==클로드 소네트 4.6, GPT-5.5 프로==와의 경쟁에서 핵심 변수가 될 전망이다.

📌 **주목할 점**: 2026년 6월은 구글·앤트로픽·오픈AI의 ==프런티어 모델 출시 파도==가 겹치는 결정적 분기점이다.

---

## 빅테크 모델 경쟁, 다음 라운드

제미나이 3.5 Pro의 등장은 ==프런티어 모델 4파전==을 한층 격화시킨다. 구글은 ==검색·안드로이드·유튜브·워크스페이스==라는 거대한 유통망을 무기로, 모델을 ==수십억 사용자의 일상==에 직접 침투시킨다.

반면 앤트로픽(클로드)과 오픈AI(GPT)는 ==개발자·기업 시장==에서, 특히 ==코딩과 에이전트== 영역에서 강세다. 모델 성능이 상향 평준화되면서, 승부의 축은 =='얼마나 똑똑한가'에서 '얼마나 싸고, 어디서 쓰이는가'==로 이동하고 있다.

주목할 변화는 =='딥씽크' 같은 추론 특화 기능==이다. 모델이 답을 즉시 내놓는 대신 ==생각의 과정을 펼쳐== 단계적으로 검증하면서, 수학·코딩·과학 같은 고난도 문제의 정확도가 크게 올랐다. 다만 이런 ==사고 시간==은 곧 ==토큰 소모와 비용==으로 직결돼, '빠르고 싼 모델'과 '느리지만 정확한 모델'을 ==상황에 맞게 골라 쓰는== 역량이 중요해졌다.

구글의 또 다른 무기는 ==자체 칩 TPU==다. 엔비디아 GPU에 대한 의존을 낮추고 ==추론 단가==를 자체적으로 통제할 수 있어, '저렴한 프런티어 모델'이라는 전략이 가능하다. 이는 종량제 시대에 ==가격 경쟁력==으로 직결되는 구조적 강점이다.

> "이제 모델 하나로 모든 걸 하는 시대는 끝났다. 작업별로 최적의 모델을 ==오케스트레이션==하는 설계가 핵심 역량이 된다."
> — 기업 AI 도입 컨설턴트

---

## 한국에 미치는 영향

### 1. 국내 서비스·앱 생태계의 선택지 확대
200만 토큰 컨텍스트와 저렴한 멀티모달은 **네이버**, **카카오**, 국내 스타트업의 AI 서비스 개발에 강력한 선택지가 된다. 다만 ==구글 종속성== 심화와 ==한국어 성능== 검증이 동시에 과제로 떠오른다.

### 2. 국산 모델의 분발 압박
글로벌 프런티어 모델이 ==가격까지 낮추며== 공세에 나서면서, **LG AI연구원 엑사원**, **네이버 하이퍼클로바X**, **업스테이지 솔라** 등 국산 모델은 ==한국어·도메인 특화==와 ==온프레미스(자체 구축)== 강점으로 차별화해야 한다.

### 3. 'AI 비용 전쟁'과 기업 도입 전략
플래시의 ==3배 가격 인상==이 보여주듯, 'AI는 점점 싸진다'는 통념이 흔들린다. 국내 기업은 작업 난도별로 ==모델을 분리 사용==하고 토큰 비용을 관리하는 =='AI 비용 거버넌스'==를 본격 도입해야 한다. 성능과 비용의 균형점을 찾는 ==최적화 역량==이 곧 수익성으로 직결되는 시대다.

### 4. 멀티모달·에이전트 시대의 기회

200만 토큰과 딥씽크 추론은 ==법률·의료·금융== 등 방대한 문서를 다루는 국내 전문 서비스에 새로운 가능성을 연다. 긴 계약서·판례·논문을 통째로 읽고 분석하는 AI가 현실화되면, ==전문직 업무의 생산성==이 도약한다. 동시에 이는 ==일자리 재편==과 ==오류·환각 책임== 문제도 함께 키운다. 결국 한국 기업의 과제는 글로벌 모델을 ==잘 골라 쓰되 종속되지 않고==, 자국 데이터와 결합해 ==고유한 가치==를 만드는 것이다. 모델 경쟁의 최종 승자는 가장 큰 모델을 만든 회사가 아니라, 그 모델로 ==진짜 문제를 푸는== 기업이 될 것이다. 제미나이 3.5 Pro의 등장은 'AI 두뇌'가 또 한 단계 똑똑해진다는 신호인 동시에, ==그 두뇌를 어떻게 활용할 것인가==라는 숙제를 모두에게 던진다. 도구는 평준화되고, 차별화는 ==상상력과 데이터==에서 나온다. 한국이 모델 소비자를 넘어 ==창의적 활용자==가 될 수 있느냐가 향후 AI 경쟁력의 분기점이다.

⚡ **주목할 포인트**: 6월, 제미나이 3.5 Pro가 베일을 벗으면 'AI 두뇌' 경쟁의 판세가 다시 한번 출렁인다.`},{id:"20260603083001",title:"MS '빌드 2026'서 자체 코딩 AI '폴라리스' 공개…코파일럿 기본 교체",summary:"마이크로소프트가 연례 개발자 콘퍼런스 '빌드 2026'에서 자체 개발 코딩 AI '프로젝트 폴라리스'를 공개했다. 오는 8월부터 깃허브 코파일럿의 기본 모델을 GPT-4 터보에서 폴라리스로 교체하며, 자체 칩 '마이아 200'에서 구동된다. 펜타곤과는 96.9억 달러 규모 사상 최대 정부 계약도 체결했다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-06-03T08:30:01+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!0,content:`## 사티아 나델라 "AI는 이제 '비동기 동료'다"

마이크로소프트가 6월 2일(현지시간) 개막한 연례 개발자 콘퍼런스 ==빌드(Build) 2026==에서 자체 개발 코딩 AI **'프로젝트 폴라리스(Project Polaris)'**를 전면에 내세우며 AI 개발 도구 전쟁의 판을 다시 짰다. 그동안 오픈AI의 모델에 깊이 의존해온 마이크로소프트가 ==자체 모델로 핵심 제품의 엔진을 갈아끼우는== 첫 신호탄이다.

사티아 나델라 CEO는 기조연설에서 "AI는 동기식 비서(synchronous assistant)에서 장시간 작업을 스스로 수행하는 비동기식 동료(async coworker)로 진화했다"고 선언했다.

📌 **핵심 인사이트**: 폴라리스는 단순한 신모델이 아니라, '마이크로소프트가 오픈AI 없이도 간다'는 전략적 독립 선언에 가깝다.

---

## 폴라리스, 코파일럿의 심장을 바꾼다

이번 빌드에서 공개된 핵심 발표를 정리하면 다음과 같다.

1. **기본 모델 교체**: 오는 **8월부터** 깃허브 코파일럿의 기본 모델을 GPT-4 터보에서 폴라리스로 전환 (팀별 3개월 폴백 옵션 제공)
2. **자체 칩 구동**: 폴라리스는 마이크로소프트 커스텀 가속기 **마이아 200(Maia 200)**에서 작동해 비용·전력 효율을 끌어올림
3. **윈도우 에이전트 프레임워크 1.0** — MIT 라이선스로 ==오픈소스 공개==, 파일시스템·네트워크·UI 자동화 제어와 민감 작업 사람 승인 큐 내장
4. **애저 에이전트 메시(Azure Agent Mesh)** — AWS 베드록, 구글 클라우드, 온프레미스를 넘나드는 멀티클라우드 에이전트 오케스트레이션
5. **파운드리 로컬(Foundry Local) 정식 출시** — 윈도우·맥(애플 실리콘)·리눅스에서 클라우드 없이 온디바이스 추론

> "개발자는 이제 코드를 '작성'하는 사람이 아니라, 여러 에이전트를 '지휘'하는 사람이 된다."
> — 사티아 나델라, 마이크로소프트 CEO

---

## 펜타곤 96.9억 달러…MS 역사상 최대 정부 계약

빌드 현장에서 함께 공개된 또 하나의 '빅뉴스'는 미국 국방부(DoD)와 체결한 **96.9억 달러** 규모의 소프트웨어 통합 계약이다. M365·애저·코파일럿을 묶은 이 계약은 마이크로소프트 단일 정부 계약 중 사상 최대 규모로, 국방부는 이를 통해 약 **4.22억 달러**의 비용 절감을 기대한다. AI가 ==국가 안보 인프라==의 중심으로 들어왔음을 보여주는 상징적 장면이다.

---

## 심층 분석: '에이전트 동료' 시대의 개발 패러다임

폴라리스의 진짜 의미는 코딩 자동화를 넘어 개발 조직의 ==운영 방식 자체==를 바꾼다는 데 있다. 비동기 에이전트는 사람이 잠든 사이에도 테스트 작성, 버그 수정, 의존성 업데이트, 리팩터링 같은 장시간 작업을 스스로 수행한다.

- **작업 단위의 변화**: 단순 자동완성에서 ==PR(코드 변경 요청) 단위 작업 위임==으로 진화
- **비용 구조**: 자체 칩 마이아 200으로 추론 단가를 낮춰 종량제 시대의 가격 경쟁력 확보
- **종속성 탈피**: 오픈AI 의존도를 낮추고 모델·클라우드·개발도구를 ==수직 통합==
- **통제와 자동화의 균형**: 윈도우 에이전트 프레임워크의 '사람 승인 큐'로 민감 작업은 사람이 최종 확인

시장에서는 구글(제미나이 코드), 앤트로픽(클로드 코드), 오픈AI(코덱스 계열)와의 ==4파전==이 본격화될 것으로 본다. 특히 마이크로소프트는 깃허브라는 ==전 세계 1억 명 규모== 개발자 생태계를 무기로, 모델·클라우드·개발도구를 하나로 묶은 '풀스택 AI 개발 플랫폼'을 노린다.

> "앞으로 1~2년 안에 신규 코드의 상당 부분이 사람이 아닌 에이전트의 손에서 작성될 것이다. 관건은 누가 그 에이전트를 신뢰할 수 있게 만드느냐다."
> — 글로벌 IT 시장 분석가

한편 일각에서는 자체 모델 전환이 ==품질 저하== 우려를 낳을 수 있다는 지적도 나온다. GPT-4 터보에 익숙한 개발자들이 폴라리스의 응답 품질을 어떻게 평가하느냐가 8월 전환의 최대 변수다. 또한 파운드리 로컬의 온디바이스 추론은 ==데이터 유출 우려== 없이 사내망에서 AI를 돌리려는 금융·공공 수요와 맞물려, 보안에 민감한 기업의 도입 문턱을 크게 낮출 전망이다. 이는 토큰 종량제 부담을 피하려는 기업에게도 매력적인 대안이 된다.

---

## 한국에 미치는 영향

### 1. 국내 SI·클라우드 업계 지각변동
폴라리스와 에이전트 메시는 **삼성SDS**, **LG CNS**, **네이버클라우드** 등 국내 시스템통합(SI)·클라우드 사업자에게 직접적인 영향을 준다. 멀티클라우드 에이전트 표준 경쟁에서 글로벌 빅테크의 주도권이 강해질수록, 국내 사업자의 차별화 전략이 더 중요해진다.

### 2. '오픈AI 의존' 탈피 신호
마이크로소프트의 자체 모델 전환은 국내 기업에도 시사점이 크다. 특정 외산 모델에 종속되는 리스크를 줄이려는 흐름이 강해지면서, **LG AI연구원 엑사원**, **네이버 하이퍼클로바X** 등 국산 모델 내재화 명분에 힘이 실린다.

### 3. 공공·국방 AI 정책 가속
펜타곤 계약은 한국의 **디지털플랫폼정부**와 국방 AI 도입 논의에도 영향을 준다. 공공 영역의 대규모 AI·클라우드 통합 발주와 보안 검증 기준 정비가 더 빨라질 전망이다.

### 4. 인재·교육 시장의 재편

AI 에이전트가 초급 개발 업무를 흡수하면서, 국내 IT 기업의 ==채용·교육 전략==도 바뀐다. 단순 코딩보다 ==에이전트를 설계·검증·지휘==하는 역량, 즉 아키텍처 이해와 코드 리뷰 능력이 더 중요해진다. 부트캠프와 대학 커리큘럼도 'AI와 협업하는 개발자' 양성으로 빠르게 이동할 전망이다. 이는 신입 개발자에게는 진입 장벽이자, 동시에 ==한 명이 열 명 몫==을 해내는 생산성 도약의 기회이기도 하다.

결국 도구를 두려워하는 조직과 길들이는 조직의 격차가 향후 수년간 한국 소프트웨어 산업의 경쟁력을 가른다. 폴라리스 전환은 마이크로소프트만의 사건이 아니라, ==모든 개발 조직이 'AI 네이티브'로 재편==되는 거대한 흐름의 신호탄이다. 변화의 속도를 따라잡는 기업과 그렇지 못한 기업의 운명이 8월을 기점으로 갈리기 시작한다.

⚡ **주목할 포인트**: 코파일럿의 엔진이 바뀌는 8월, 전 세계 수천만 개발자의 일하는 방식이 한 번 더 출렁인다.`},{id:"20260603083002",title:"깃허브 코파일럿, 토큰 종량제 전환…개발자 '월 750달러 폭탄' 반발",summary:"깃허브 코파일럿이 6월 1일부터 정액제를 폐기하고 토큰 기반 종량제로 전환했다. 'AI 크레딧' 1개당 0.01달러로, 에이전트 작업을 많이 쓰는 파워유저의 청구액이 기존 대비 10~50배 폭증할 수 있다는 분석이 나온다. 월 29달러를 내던 한 개발자는 새 요금이 750달러에 달한다고 토로했다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-06-03T08:30:02+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",breaking:!0,content:`## '월 29달러 → 750달러' 청구서 충격

깃허브 코파일럿(GitHub Copilot)이 6월 1일부터 기존 정액제를 폐기하고 ==토큰 기반 종량제(usage-based)==로 과금 체계를 전면 전환했다. 사용자는 이제 작업 중 소모한 토큰량에 따라 'AI 크레딧'을 차감당한다. **1 크레딧은 0.01달러**이며, 입력·출력·캐시 토큰이 모두 과금 대상이다.

변화가 알려지자 레딧과 X(옛 트위터)에는 ==요금 폭탄== 성토가 쏟아졌다. 한 개발자는 "지금은 월 29달러를 내는데, 새 요금제에서는 거의 **750달러**가 나온다"고 토로했다.

📌 **핵심 인사이트**: 에이전트 세션을 적극 쓰는 파워유저일수록 청구액이 **10~50배** 폭증할 수 있다.

---

## 누가, 얼마나 더 내게 되나

플랜별로 매달 포함되는 AI 크레딧은 다음과 같다.

- **Copilot Pro**: 10달러 크레딧 포함
- **Copilot Pro+**: 39달러 크레딧 포함
- **Copilot Business**: 사용자당 19달러 크레딧 포함
- **Copilot Enterprise**: 사용자당 39달러 크레딧 포함

포함된 크레딧을 다 쓰면 그 다음부터는 모델별 공시 API 단가로 ==무제한 과금==된다. 특히 코드베이스 전체를 훑는 에이전트 작업은 한 번에 수십만 토큰을 소모해 비용이 급증한다.

> "마이크로소프트는 그동안 챗봇을 마음껏 쓰라고 부추겨 놓고, 이제 와서 발밑의 양탄자를 빼버렸다."
> — 한 개발자, 온라인 커뮤니티

반론도 있다. 일부 사용자는 "제대로 아는 사람이라면 토큰을 그렇게까지 태우지 않는다. 폭탄을 맞는 건 무분별하게 '바이브 코딩'하는 경우"라고 지적했다.

---

## 'AI 코딩 비용 시대'의 개막

이번 사태의 본질은 ==AI를 공짜처럼 쓰던 시대의 종료==다. 정액제로 손실을 감수하던 사업자들이 실제 추론 비용을 사용자에게 전가하기 시작했고, 종량제는 업계 표준으로 굳어질 가능성이 크다. 개발 생산성과 비용을 동시에 관리하는 역량이 새로운 경쟁력이 된다.

---

## 왜 지금 종량제인가

이번 변화는 갑작스러운 것이 아니라 AI 업계 전반의 ==비용 현실화== 흐름의 일부다. 거대 모델을 돌리는 GPU·전력 비용은 사용량에 비례하는데, 그동안 사업자들은 점유율 확보를 위해 정액제로 손실을 떠안아 왔다.

1. **추론 비용의 가시화**: 에이전트가 코드베이스 전체를 읽고 추론하며 토큰 소모량이 폭증
2. **형평성 재편**: 소수 파워유저가 자원을 독점하던 구조를 사용량 기반으로 전환
3. **수익성 압박**: 상장·IPO를 앞둔 업계 전반의 흑자 전환 요구

> "공짜 점심은 끝났다. 이제 개발팀은 '토큰 예산'을 코드 리뷰만큼 진지하게 관리해야 한다."
> — 개발자 생산성 컨설턴트

전문가들은 코파일럿의 전환이 ==업계 표준==이 될 것으로 본다. 커서(Cursor), 윈드서프 등 경쟁 도구도 비슷한 압박에 직면해 있어 '무제한 AI 코딩'이라는 마케팅 문구는 빠르게 사라질 전망이다.

---

## 개발자가 살아남는 법

결국 핵심은 ==같은 작업을 더 적은 토큰으로== 해내는 역량이다. '비용 감각'이 개발자의 새로운 필수 기술로 떠오른다.

- **컨텍스트 최적화**: 불필요한 파일을 던지지 않고 필요한 맥락만 정확히 제공
- **작업 분할**: 거대한 요청을 잘게 쪼개 토큰 낭비 방지
- **모델 선택**: 단순 작업엔 저렴한 모델, 고난도엔 고성능 모델 분리 사용
- **한도·모니터링**: 팀·프로젝트별 토큰 예산 상한과 실시간 추적 체계 구축
- **로컬 추론 병행**: 민감하거나 반복적인 작업은 온디바이스·자체 구축 모델로 대체

특히 자동화 에이전트를 24시간 돌리는 CI/CD 파이프라인이나 대규모 마이그레이션에서는 토큰 비용이 ==클라우드 컴퓨팅 비용== 수준으로 불어날 수 있어 사전 설계가 필수다. 반대로 비용 구조를 잘 설계한 팀은 AI를 더 공격적으로 활용해 ==생산성 격차==를 벌릴 수 있다. 종량제는 위기인 동시에, 준비된 조직에는 기회다.

---

## 한국에 미치는 영향

### 1. 국내 개발 조직의 비용 재설계
**네이버**, **우아한형제들(배달의민족)**, **토스**, **카카오** 등 대규모 개발 조직을 둔 기업은 AI 코딩 도구 비용이 예측 불가능해지면서 사내 사용 정책과 예산 모델을 다시 짜야 한다.

### 2. 토종·오픈소스 코딩 AI의 반사이익
비용 부담이 커지면서 **네이버 클로바** 기반 코딩 도구, 오픈소스 LLM 자체 구축, 커서·윈드서프 등 대안 도구에 대한 관심이 커진다. 온프레미스 추론으로 토큰 과금을 피하려는 수요도 늘어날 전망이다.

### 3. AI 도입 ROI가 경영 이슈로
'도입했더니 생산성은 올랐는데 비용이 더 들더라'는 딜레마가 현실화되면서, AI 투자수익률(ROI) 측정과 거버넌스가 국내 IT 기업의 핵심 경영 과제로 부상하고 있다.

### 4. 스타트업·1인 개발자의 부담 가중

자금 여력이 빠듯한 ==국내 스타트업과 1인 개발자==에게 토큰 종량제는 특히 뼈아프다. 정액 29달러로 충분했던 비용이 수백 달러로 뛰면, AI 코딩 도구 자체를 포기하거나 무료·오픈소스 대안으로 회귀할 수 있다. 이는 자본력 있는 대기업과의 ==생산성 격차==를 벌리는 요인이 된다. 반대로 정부·지자체의 ==AI 바우처·크레딧 지원== 같은 정책 수요도 커질 전망이며, 창업 생태계의 'AI 접근성'을 어떻게 보장하느냐가 새로운 정책 화두로 떠오른다.

동시에 국내 SaaS·개발도구 기업에게는 ==기회==이기도 하다. 합리적 가격의 한국형 AI 코딩 도구나 비용 모니터링 솔루션 수요가 늘면서 틈새 시장이 새로 열린다. '비용 효율'을 무기로 한 토종 도구의 반격이 시작될 수 있다. 결국 종량제는 한국 개발 생태계의 ==비용 체질==을 시험하는 리트머스가 되며, 도구 종속을 줄이고 자체 역량을 키운 조직이 장기적으로 유리하다.

무엇보다 이번 사태는 '편리한 AI'가 곧 '비싼 AI'일 수 있음을 일깨웠다. 도구의 가치를 ==비용 대비 효과==로 냉정히 따지는 성숙한 활용 문화가 한국 개발 현장에도 자리잡는 계기가 될 전망이다. AI를 많이 쓰는 것이 아니라 ==잘 쓰는 것==이 경쟁력인 시대가 열렸다.

⚡ **주목할 포인트**: 다음 청구서가 도착하는 7월, 한국 개발 조직들도 '메터 쇼크'의 진짜 규모를 마주하게 된다.`},{id:"20260603083003",title:"피지컬 AI 전쟁 가열…현대차 아틀라스 vs 테슬라 옵티머스 3세대",summary:"휴머노이드 로봇을 둘러싼 '피지컬 AI' 경쟁이 본격화됐다. 현대차그룹은 8월 미국 조지아에 로봇 응용센터를 가동해 아틀라스를 연 3만 대 양산할 계획이다. 테슬라는 7~8월 손가락 정밀도가 2배 높아진 옵티머스 3세대를 공개하며, 중국은 1만 6,000달러대 저가 모델로 물량 공세에 나섰다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-06-03T08:30:03+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`## 로봇이 '생각하는 몸'을 갖기 시작했다

언어모델이 화면 속 지능이었다면, ==피지컬 AI(Physical AI)==는 현실 세계에서 움직이는 지능이다. 사람처럼 걷고 손으로 물건을 다루는 휴머노이드 로봇을 둘러싼 경쟁이 2026년 들어 **현대차그룹·테슬라·중국 기업**의 3파전으로 격화되고 있다.

📌 **핵심 인사이트**: 승부의 축은 셋이다 — ==정밀함(현대차)==, ==양산 능력(테슬라)==, 그리고 ==가격(중국)==.

---

## 3강 구도: 정밀함 vs 양산 vs 가격

1. **현대차 아틀라스(Atlas)**: 현대차그룹과 보스턴다이내믹스가 선보인 전동식 휴머노이드. 2028년 미국 조지아 신공장 투입을 전제로 **연 3만 대** 양산을 목표로 하며, 오는 **8월** '로봇 메타플랜트 응용센터(RMAC)'를 가동해 제조 현장 데이터로 완성도를 끌어올린다.
2. **테슬라 옵티머스(Optimus) 3세대**: 오는 **7~8월** 공개 예정. 2세대 대비 손가락 마디 제어 정밀도가 ==2배==로 향상돼 고난도 조립이 가능해지며, 일론 머스크는 궁극적으로 단가를 **2만~3만 달러**(약 3,000만~4,500만원)까지 낮추겠다고 공언했다.
3. **중국의 저가 공세**: 유니트리(Unitree) 'G1'은 아틀라스의 10분의 1도 안 되는 **1만 6,000달러**, 유비테크(Ubtech)는 2026년에만 휴머노이드 **5,000대** 양산을 예고하며 물량으로 시장을 흔든다.

> "휴머노이드 로봇은 내년부터 본격 판매에 들어간다. 이것이 테슬라의 미래 가치를 결정할 것이다."
> — 일론 머스크, 테슬라 CEO

---

## 심층 분석: '데이터'가 로봇의 진짜 무기다

휴머노이드 경쟁의 승부처는 하드웨어가 아니라 ==현실 데이터==다. 로봇이 실제 작업을 반복하며 쌓는 동작·실패 데이터가 곧 지능의 연료이기 때문이다.

- **현대차**: 자동차 공장이라는 ==거대한 실증 무대==에서 제조 데이터를 축적, 8월 RMAC 가동으로 학습 가속
- **테슬라**: 전 세계 차량·공장에서 모은 방대한 영상 데이터와 자율주행용 AI 스택을 로봇에 이식
- **중국**: 저가 양산으로 ==설치 대수==를 늘려 데이터 수집 규모에서 추격

시장조사 기관들은 휴머노이드 시장이 2030년대 ==수천억 달러== 규모로 성장할 것으로 본다. 제조·물류 현장의 인력난과 인건비 상승이 도입을 가속하는 구조적 배경이다.

> "휴머노이드의 경쟁력은 모터나 관절이 아니라, 얼마나 많은 현실 작업 데이터를 학습했느냐로 갈린다."
> — 로보틱스 전문가

다만 넘어야 할 벽도 분명하다. 정밀한 손동작, 예측 불가능한 환경에서의 안전성, 배터리 지속시간, 그리고 ==대당 원가== 문제가 대량 보급의 관건이다. 테슬라조차 양산 시점을 두고 '물리학의 장벽'을 언급하며 신중한 모습을 보였다.

---

## 3세대 옵티머스가 바꿀 것

오는 7~8월 공개될 옵티머스 3세대는 손가락 마디 제어가 2배 정밀해져, 기존에 불가능했던 ==섬세한 조립·분류 작업==이 가능해진다. 이는 휴머노이드가 '시연용 로봇'에서 '실제로 일하는 노동력'으로 넘어가는 분기점이 될 수 있다.

전문가들은 2026~2027년을 휴머노이드 ==상용화의 변곡점==으로 본다. 가격이 2만~3만 달러대로 내려오면, 자동차 한 대 값으로 24시간 일하는 노동력을 살 수 있게 되는 셈이다. 이 경우 제조·물류뿐 아니라 가사·돌봄 등 ==서비스 영역==까지 빠르게 확산될 수 있다. 반면 일자리 대체와 안전·책임 소재를 둘러싼 사회적 논쟁도 동시에 커질 전망이다. 기술 경쟁만큼이나 ==제도와 수용성== 준비가 중요한 이유다. 한국으로서는 제조 강국의 노하우를 ==피지컬 AI 경쟁력==으로 전환할 수 있느냐가 향후 10년 산업 지형을 좌우할 핵심 변수이며, 특히 부품 내재화와 소프트웨어 역량을 동시에 확보하는 기업이 최종 승자가 될 것이다.

---

## 한국에 미치는 영향

### 1. 현대차그룹의 '제조 로봇' 승부수
**현대차그룹**과 **보스턴다이내믹스**는 자동차 공장이라는 거대한 실증 무대를 무기로 삼는다. 8월 RMAC 가동은 한국 기업이 글로벌 피지컬 AI 경쟁의 최전선에 섰음을 보여준다.

### 2. 삼성·LG의 로봇 베팅 확대
**삼성전자**가 인수한 **레인보우로보틱스**, **LG전자**의 로봇 사업 등 국내 대기업들의 로봇 투자도 가속된다. 가전·제조 노하우와 결합한 한국형 서비스·산업용 로봇 전략이 시험대에 오른다.

### 3. 부품·소부장 생태계의 기회
휴머노이드 양산은 정밀 감속기, 액추에이터, 모터, 센서 등 ==국내 부품·소부장 기업==에 새로운 성장 동력이 된다. 다만 중국의 저가 공세에 맞설 원가 경쟁력 확보가 과제다.

### 4. 노동·안전 제도의 정비

휴머노이드의 산업 현장 투입이 현실화되면서 ==산업안전·근로 제도==의 손질이 불가피하다. 사람과 로봇이 같은 공간에서 협업할 때의 안전 기준, 사고 시 책임 소재, 일자리 전환 지원책이 핵심 과제다. 정부와 노동계는 ==자동화 속도와 고용 안정==의 균형을 두고 본격 논의에 들어갈 전망이다. 제조업 비중이 높은 한국에서 이 문제는 단순 기술 이슈를 넘어 ==사회적 합의==의 영역이다.

산업계에서는 휴머노이드가 ==위험·기피 공정(3D 업종)==부터 대체하며 인력난이 심각한 중소 제조 현장의 숨통을 틔워줄 것으로 기대한다. 다만 도입 비용과 유지보수, 작업자 재교육이라는 현실적 과제를 어떻게 풀지가 보급 속도를 좌우한다. ==기술·제도·수용성==이라는 세 박자가 맞아떨어질 때 비로소 '로봇과 일하는 공장'이 일상이 된다. 한국이 이 삼박자를 가장 먼저 갖춘다면 피지컬 AI 시대의 표준을 선점할 수 있으며, 글로벌 빅테크와 중국 사이에서 한국만의 ==차별화 전략==이 절실한 시점이다.

분명한 것은 휴머노이드가 더 이상 공상이 아니라 ==눈앞의 산업==이라는 사실이다. 누가 먼저 '일하는 로봇'을 안전하고 저렴하게 현장에 세우느냐의 싸움이 이미 시작됐고, 그 승패는 향후 수십 년 글로벌 제조 패권과 직결된다. 한국에게는 기회이자 절체절명의 도전이다.

⚡ **주목할 포인트**: 8월, 현대차 RMAC 가동과 테슬라 3세대 공개가 맞물리며 '로봇 대공습'의 진짜 막이 오른다.`},{id:"20260603083004",title:"AI 데이터센터, 전력을 삼키다…빅테크 '원전 직거래' 러시",summary:"AI 데이터센터의 전력 소비가 2026년 1,050TWh에 육박하며 일본과 러시아 사이 세계 5위 전력 소비국 규모에 달할 전망이다. 마이크로소프트·메타·아마존 등 빅테크는 잇따라 20년 장기 원전 전력구매계약을 체결하며 전력 확보 경쟁에 뛰어들었다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-06-03T08:30:04+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",breaking:!1,content:`## AI의 진짜 병목은 칩이 아니라 '전기'

AI 경쟁의 다음 전장은 반도체가 아니라 ==전력==이다. 국제에너지기구(IEA)에 따르면 2026년 전 세계 데이터센터 전력 소비는 **1,050TWh**에 육박한다. 데이터센터를 하나의 국가로 본다면 일본과 러시아 사이, ==세계 5위 전력 소비국==에 해당하는 규모다.

📌 **핵심 인사이트**: AI 가속기를 아무리 확보해도, 그것을 돌릴 ==안정적 전력==이 없으면 무용지물이다. 전력이 곧 컴퓨팅 파워다.

---

## 빅테크의 '원전 직거래' 러시

전력난에 직면한 빅테크는 발전사와 직접 손잡는 ==20년 장기 전력구매계약(PPA)==으로 활로를 찾고 있다.

- **마이크로소프트 × 컨스텔레이션**: 2019년부터 멈춰 있던 **스리마일섬** 원전을 **16억 달러**를 들여 부활시켜 탄소 없는 전력 공급
- **메타 × 컨스텔레이션**: 일리노이에 **1.1GW** 원전 전력, 2027년부터 공급
- **아마존(AWS) × 탈렌 에너지**: 서스쿼해나 원전에서 **1,920MW**를 2042년까지 공급

여기에 차세대 소형모듈원전(SMR)까지 가세하며, '탄소중립 + 안정 전력'을 동시에 만족시키는 원자력이 ==AI 시대의 핵심 인프라==로 재조명받고 있다.

> "향후 10년, AI 산업의 성장은 칩 공급이 아니라 전력 공급이 좌우할 것이다."
> — 에너지 업계 애널리스트

---

## 숫자로 보는 'AI 전력 충격'

AI 데이터센터의 전력 수요는 일반 데이터센터와 차원이 다르다. 최신 AI 서버 랙 하나가 ==수십 kW==를 소비하며, 대형 AI 캠퍼스는 도시 하나에 맞먹는 전력을 빨아들인다.

1. **2026년 데이터센터 전력 소비 1,050TWh** — 세계 5위 전력 소비국 규모
2. **현재의 2배 이상** — IEA 고성장 시나리오 기준 급증
3. **지역 전력망 한계** — 일부 지역은 수요가 공급을 추월, 프로젝트 지연 속출

전력 부족은 곧 AI 확장의 ==물리적 천장==이다. 기업들이 직접 발전소와 계약하거나, 천연가스 발전기를 임시로 설치하는 등 비효율적 자구책까지 등장하고 있다.

> "컴퓨팅의 시대가 곧 전력의 시대다. 전기를 확보하지 못하면 가장 좋은 칩도 그저 비싼 쇳덩이일 뿐이다."
> — 데이터센터 인프라 전문가

---

## 왜 '원전'인가

빅테크가 재생에너지가 아닌 원자력으로 향하는 이유는 명확하다. AI 데이터센터는 24시간 ==끊김 없는 기저전력(baseload)==을 요구하는데, 간헐적인 태양광·풍력만으로는 이를 감당하기 어렵기 때문이다.

- **안정성**: 날씨와 무관한 24/365 발전
- **탄소중립**: 빅테크의 RE100·넷제로 목표와 부합
- **밀도**: 좁은 부지에서 대규모 전력 생산
- **차세대 SMR**: 소형모듈원전으로 데이터센터 인근 분산 배치 가능

이 흐름은 수십 년간 정체됐던 ==원전 산업의 부활==을 이끌고 있다. 멈췄던 원자로가 다시 가동되고, 신규 SMR 프로젝트에 투자가 몰린다. 결국 'AI 패권 = 컴퓨팅 = 전력'이라는 등식이 성립하면서, 전력 확보 능력이 ==국가 경쟁력==으로 직결되고 있다. 미국·중국이 원전과 송전망에 대규모 투자를 단행하는 것도 같은 맥락이다. 전력이 부족한 국가는 데이터센터 유치 경쟁에서 밀리고, 결국 AI 인프라 자체를 해외에 의존하게 될 위험이 있다. 전력은 이제 ==AI 주권의 전제 조건==이며, 한국 역시 안정적이고 저렴한 전력 없이는 'AI 3대 강국' 목표가 구호에 그칠 수 있다는 경고가 나온다. 분산에너지와 SMR을 결합한 '데이터센터 전용 전력 공급' 모델이 새로운 해법으로 주목받는 이유다.

---

## 한국에 미치는 영향

### 1. 국내 데이터센터 전력난과 한전
수도권에 집중된 데이터센터 수요와 송전망 부족으로 **한국전력**의 부담이 커진다. 신규 데이터센터 인허가와 전력계통 영향평가가 한층 까다로워지는 흐름이다.

### 2. SMR·원전 르네상스
글로벌 원전 직거래 붐은 **두산에너빌리티**, **한국수력원자력** 등 국내 원전·SMR 기업에 직접적인 기회다. AI 전력 수요가 원전 생태계의 새로운 성장 서사가 되고 있다.

### 3. 정부의 전력·분산에너지 정책
정부가 추진해온 데이터센터 전력 인센티브와 분산에너지 활성화 정책이 시험대에 오른다. 전력 확보가 ==국가 AI 경쟁력==의 전제 조건으로 격상되고 있다.

### 4. 'AI 전력' 산업의 새 기회

AI 전력 수요 폭증은 위기인 동시에 ==거대한 신산업==을 연다. 발전·송배전·에너지저장장치(ESS)·전력 효율 솔루션 등 전력 밸류체인 전반에 투자가 몰린다. 국내 기업에게는 원전·SMR 수출, 전력 기자재, 데이터센터 냉각·전력관리 솔루션에서 ==수출 기회==가 열린다. 특히 한국은 ==원전 건설·운영 역량==과 반도체·배터리 기술을 동시에 보유한 드문 국가로, 'AI 인프라'를 칩에서 전력까지 통합 공급하는 ==패키지 수출== 모델이 새로운 성장 서사가 될 수 있다.

또한 데이터센터의 ==입지 분산==도 화두다. 수도권 집중을 완화하고 전력·냉각이 유리한 지방으로 유도하는 정책이 본격화되면 지역 균형 발전과 일자리 창출 효과도 기대된다. 결국 AI 시대의 승부는 '얼마나 똑똑한 모델을 만드느냐'를 넘어 '그 모델을 ==얼마나 싸고 안정적으로 돌리느냐=='로 옮겨가고 있다. 전력이 곧 경쟁력인 시대, 에너지 전략 없는 AI 전략은 사상누각이다. 한국의 AI 미래는 데이터센터가 아니라 발전소에서 갈릴 수 있으며, 전력 인프라 투자를 미루는 만큼 AI 경쟁력도 뒤처진다는 점을 직시해야 한다.

전력은 보이지 않지만 가장 근본적인 인프라다. 반도체·모델·데이터센터로 이어지는 AI 가치사슬의 ==맨 밑단==을 떠받치는 것이 바로 전기이며, 이 토대가 흔들리면 그 위의 모든 혁신도 멈춘다. 한국이 'AI 3대 강국'을 진심으로 노린다면, 전력 확보 로드맵을 ==국가 최우선 과제==로 다뤄야 한다.

⚡ **주목할 포인트**: 'GPU 몇 장'을 넘어 '전기 몇 GW'를 확보했느냐가 AI 패권의 새 잣대가 됐다.`},{id:"20260603083005",title:"AI가 설계한 신약, 사람 몸에 들어갔다…78개 분자로 후보 발굴",summary:"딥마인드 스핀오프 아이소모픽 랩스가 알고리즘이 설계한 첫 화합물을 사람 대상 임상시험에 진입시켰다. AI는 통상 수천 개를 검토하던 신약 후보를 단 78개 분자 스크리닝으로, 평균 비용의 10% 미만에 18개월 만에 도출했다. 이암빅·제너레이트 등은 2026년 3개 이상의 AI 설계 신약을 임상에 올린다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-06-03T08:30:05+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",breaking:!1,content:`## 'AI 신약' 시대, 실험실에서 임상으로

인공지능이 설계한 신약이 마침내 ==사람 몸==에 들어갔다. 구글 딥마인드의 스핀오프 **아이소모픽 랩스(Isomorphic Labs)**가 알고리즘으로 설계한 첫 화합물을 사람 대상 임상시험에 진입시켰다. 단백질이 체내에서 어떻게 작동하는지를 AI가 매핑해 후보 물질을 통째로 ==창조==한 것이다.

그 기반에는 단백질 구조 예측을 넘어 단백질·DNA·RNA 간 상호작용까지 예측하는 **알파폴드3(AlphaFold 3)**가 있다. 알파폴드는 2024년 노벨 화학상을 안기며 과학의 패러다임을 바꿨다는 평가를 받았다.

📌 **핵심 인사이트**: 신약 개발의 '10년·1조원' 공식이 ==AI로 붕괴==하기 시작했다.

---

## 숫자로 보는 효율 혁명

- 통상 수천 개를 검토하던 후보 물질을 ==단 78개 분자== 스크리닝으로 도출
- 전임상 후보 지명까지 **18개월**, 승인 신약 평균 비용의 **10% 미만**
- **이암빅(Iambic)·제너레이트(Generate)** 등은 2026년 ==3개 이상==의 AI 설계 신약을 임상 진행 (ALS·자가면역·항암)
- **인실리코 메디슨(Insilico Medicine)**은 항암·섬유증·면역·노화 질환으로 프로그램 확대

> "AI는 신약 개발의 패러다임을 바꾸고 있다. 치료법이 없던 질병에 대한 해답을 훨씬 빠르게 찾게 될 것이다."
> — 글로벌 바이오 연구자

---

## 신약 개발 공식이 무너진다

전통적 신약 개발은 ==평균 10년, 1조원 이상==이 드는 '고위험 도박'이었다. 수천~수만 개 후보물질을 일일이 합성·실험하며 대부분이 임상에서 탈락했다. AI는 이 방정식을 근본부터 다시 쓴다.

1. **탐색 범위 압축**: 수천 개 → ==78개 분자==로 후보군을 정밀 선별
2. **시간 단축**: 전임상 후보 도출까지 18개월
3. **비용 절감**: 승인 신약 평균 비용의 10% 미만
4. **표적 확대**: 단백질·DNA·RNA 상호작용까지 예측해 '약물화 불가' 표적에 도전

> "AI는 신약 개발을 ==운(運)의 영역에서 계산의 영역==으로 옮기고 있다. 이제 우리는 더 적게 실험하고 더 많이 예측한다."
> — AI 신약 플랫폼 연구책임자

---

## 그래도 남는 과제

다만 AI가 ==임상 성공률== 자체를 보장하는 것은 아니다. 후보물질 발굴은 빨라졌지만, 사람 대상 임상에서의 안전성·유효성 검증은 여전히 수년이 걸리는 관문이다.

- **데이터 품질**: 학습에 쓸 양질의 생물학 데이터 확보가 관건
- **블랙박스 문제**: AI가 왜 그 분자를 골랐는지 설명하기 어려움
- **규제 정비**: 각국 보건당국의 심사 기준이 아직 정립 중
- **임상 검증**: 결국 사람 몸에서의 결과가 최종 판정

그럼에도 이번 아이소모픽 랩스의 임상 진입은 'AI 설계 신약'이 ==이론에서 현실==로 넘어왔음을 입증한 이정표로 평가된다. 글로벌 제약사들도 잇따라 AI 기업과 ==수십억 달러== 규모 파트너십을 맺으며 패러다임 전환에 베팅하고 있다. 신약 파이프라인의 초기 단계를 AI가 장악하면서, 향후 5년 내 임상에 진입하는 AI 설계 신약이 ==수십 종==으로 늘어날 것이라는 전망이 나온다. 이는 환자에게는 ==더 빠른 치료법==을, 산업에는 새로운 성장 동력을 의미한다. 치료법이 없던 희귀질환과 난치병 정복의 가능성도 한층 가까워졌다. 신약 개발의 병목이 '발굴'에서 '검증'으로 이동하면서, 임상 효율을 높이는 AI 기술이 다음 격전지가 될 전망이며, 속도와 정확성을 동시에 잡는 기업이 차세대 바이오 패권을 쥔다.

---

## 한국에 미치는 영향

### 1. 국내 제약바이오의 AI 전환 가속
**한미약품**, **대웅제약**, **SK바이오팜** 등 국내 제약사들은 AI 신약 플랫폼 도입과 자체 역량 강화에 속도를 낼 수밖에 없다. 글로벌 기업과의 후보물질 발굴 속도 격차가 곧 경쟁력 격차가 되기 때문이다.

### 2. AI 신약 스타트업·투자 확대
국내 AI 신약 스타트업과 관련 벤처 투자가 늘어날 전망이다. 후보물질 발굴 단계의 ==초기 기술 수출(라이선스 아웃)== 모델이 국내 바이오의 새로운 수익원으로 부상한다.

### 3. 규제·의료데이터 정비
**식품의약품안전처**의 AI 신약 심사 가이드라인과 의료데이터 활용 제도 정비가 시급해진다. AI가 설계한 약물의 안전성·설명가능성을 어떻게 검증할지가 핵심 쟁점이다.

### 4. 'K-바이오'의 기회와 위기

AI 신약은 ==K-바이오==에 양날의 검이다. 후보물질 발굴 속도전에서 글로벌 빅파마에 뒤처지면 격차가 벌어지지만, 반대로 AI를 빠르게 내재화하면 ==추격의 발판==이 된다. 임상 데이터와 AI 역량을 결합한 신약 개발 모델이 국내 바이오의 새 성장 축이 될 수 있다. 국내에서도 AI 신약 플랫폼 기업과 전통 제약사 간 ==협업·M&A==가 활발해질 전망이며, 정부의 디지털 바이오 R&D 투자와 의료데이터 활용 제도가 그 속도를 좌우한다.

관건은 ==데이터 주권==이다. 양질의 한국인 임상·유전체 데이터를 안전하게 확보·활용할 수 있느냐가 토종 AI 신약의 경쟁력을 결정한다. 데이터 3법과 의료 마이데이터 정책의 정교한 설계가 필요한 이유다. AI 신약은 단순한 기술 트렌드가 아니라 ==고령화 시대의 국가 전략==이다. 치매·암·희귀질환 정복은 의료비 절감과 직결되며, 성공한 신약 하나가 ==조 단위 수출==로 이어진다. 속도와 데이터, 규제 정비라는 세 축을 동시에 잡아야 하며, 지금이 바로 'AI 신약 주권'을 준비할 골든타임이다.

인류가 아직 정복하지 못한 질병의 벽 앞에서, AI는 가장 강력한 새 무기가 되고 있다. 한국이 우수한 의료 인프라와 IT 역량을 ==신약 주권==으로 연결한다면, 'AI×바이오'는 반도체에 이은 다음 국가 먹거리가 될 수 있다. 골든타임은 결코 길지 않으며, 지금의 선택이 10년 뒤 한국 바이오 산업의 위상을 결정한다.

⚡ **주목할 포인트**: '78개 분자'라는 숫자는, 신약 개발이 ==운(運)의 영역에서 계산의 영역==으로 넘어가고 있음을 상징한다.`},{id:"20260529180001",title:"삼성전자, '갤럭시 AI 2.0' 공개… 실시간 통역 기능 대폭 강화",summary:"삼성전자가 차세대 온디바이스 AI 기술을 탑재한 '갤럭시 AI 2.0'을 공개하며 스마트폰 AI 경쟁에 불을 지폈다. 특히 실시간 통역 기능이 크게 향상되어 언어 장벽 없는 소통 시대를 예고하고 있다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-29T18:00:01+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## 삼성, '갤럭시 AI 2.0' 공개… 실시간 통역 기능 혁신

삼성전자가 29일, 자체 개발한 차세대 온디바이스 AI 칩셋을 탑재한 '갤럭시 AI 2.0'을 공개하며 스마트폰 AI 시장에 새로운 지평을 열었다. 이번 업그레이드는 특히 실시간 통역 기능의 비약적인 발전을 이루어, 기존 대비 2배 이상 빨라진 응답 속도와 99% 이상의 정확도를 자랑한다.

### 실시간 통역, 언어의 장벽을 허물다

'갤럭시 AI 2.0'의 핵심은 'AI 실시간 통역 2.0'이다. 기존에는 제한된 언어만 지원하고 약간의 지연이 있었던 반면, 이번 버전은 20개 이상의 언어를 실시간으로 지원하며, 대화 상대방의 언어를 즉각적으로 번역하여 들려준다. 이는 비즈니스 미팅, 해외여행 등 다양한 상황에서 사용자 경험을 극대화할 것으로 기대된다.

> "우리는 언어의 장벽이 소통의 단절로 이어지지 않도록 만드는 것을 목표로 했습니다. '갤럭시 AI 2.0'은 단순히 번역기를 넘어, 진정한 의미의 소통을 가능하게 할 것입니다."

삼성전자 AI 사업부장 김민준 전무는 기자간담회에서 이같이 밝혔다.

### 한국 시장 전망

한국은 스마트폰 보급률이 높고 AI 기술 수용도가 뛰어나 '갤럭시 AI 2.0'의 성공 가능성이 높은 시장이다. 통신사와의 협력을 통해 5G 네트워크 환경을 최적으로 활용한 AI 서비스 제공도 강화될 전망이다. 다만, 경쟁사들의 AI 기술 발전 속도와 사용자들의 실제 사용 패턴 분석을 통한 지속적인 업데이트가 중요 과제가 될 것이다.

향후 삼성전자는 '갤럭시 AI 2.0'을 탑재한 신규 스마트폰을 오는 3분기 출시할 예정이며, 기존 갤럭시 시리즈에도 순차적으로 업데이트를 제공할 계획이다.`},{id:"20260529180002",title:"AI 윤리 규범 강화 논의 본격화… 정부, 'AI 책임법' 제정 추진",summary:"인공지능 기술의 급속한 발전과 함께 발생할 수 있는 윤리적 문제에 대한 사회적 우려가 커지고 있다. 정부는 AI 개발 및 활용에 대한 명확한 가이드라인을 제시하고 책임 소재를 규명하기 위한 'AI 책임법' 제정을 본격 추진한다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-29T18:00:02+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1568605116516-b227562cd862?w=800",breaking:!0,content:`## AI 윤리 규범 강화… 'AI 책임법' 제정 논의 급물살

최근 인공지능(AI) 기술의 오남용 및 편향성 논란이 끊이지 않으면서, AI 윤리 규범 강화에 대한 사회적 요구가 높아지고 있다. 이에 정부는 AI 개발자 및 서비스 제공자의 책임을 명확히 하고, AI로 인한 피해를 예방하기 위한 'AI 책임법' 제정을 본격적으로 추진한다고 29일 밝혔다.

### 'AI 책임법' 주요 내용

이번에 추진되는 'AI 책임법'은 AI 시스템의 설계, 개발, 배포, 운영 등 전 과정에 걸쳐 발생할 수 있는 윤리적, 법적 문제를 다룰 예정이다. 주요 내용은 ▲AI 시스템의 투명성 및 설명 가능성 확보 ▲개인정보 보호 및 데이터 윤리 강화 ▲AI로 인한 차별 및 편견 방지 ▲AI 시스템 오류 또는 오작동으로 인한 피해 발생 시 책임 소재 규명 등이다. 특히, 자율주행차, 의료 AI 등 고위험 AI 시스템에 대해서는 더욱 엄격한 안전 기준과 검증 절차를 의무화할 방침이다.

> "AI는 우리 사회에 혁신적인 변화를 가져올 잠재력을 지니고 있지만, 그만큼 책임감 있는 접근이 무엇보다 중요합니다. 'AI 책임법'은 AI 기술의 긍정적 발전을 지원하는 동시에, 발생 가능한 위험으로부터 국민을 보호하는 안전망 역할을 할 것입니다."

과학기술정보통신부 관계자는 법안 추진 배경을 설명하며 이같이 말했다.

### 한국 시장 전망

'AI 책임법' 제정은 국내 AI 산업의 건전한 발전을 유도하고 글로벌 AI 시장에서의 신뢰도를 높이는 데 기여할 것으로 예상된다. 기업들은 법안 시행에 맞춰 AI 윤리 가이드라인을 재정비하고, 관련 기술 개발 및 인력 양성에 더욱 힘쓸 것으로 보인다. 다만, 과도한 규제는 혁신을 저해할 수 있다는 우려도 존재하므로, 산업계의 의견을 충분히 수렴하여 균형 잡힌 법안 마련이 필요하다.`},{id:"20260529180003",title:"오픈AI, 'GPT-5' 로드맵 공개… 멀티모달 AI 기능 대폭 강화",summary:"AI 선두 주자인 오픈AI가 차세대 거대 언어 모델(LLM) 'GPT-5'의 개발 로드맵을 공개하며 AI 연구 및 개발에 대한 야심을 드러냈다. 특히 텍스트, 이미지, 음성 등 다양한 형태의 데이터를 동시에 이해하고 생성하는 멀티모달 AI 기능 강화에 집중할 계획이다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-29T18:00:03+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",breaking:!1,content:`## 오픈AI, 'GPT-5' 로드맵 공개… 멀티모달 AI 경쟁 가속화

인공지능 연구 기업 오픈AI가 차세대 거대 언어 모델(LLM) 'GPT-5' 개발에 박차를 가하고 있다는 소식이 29일 전해졌다. 공개된 로드맵에 따르면, 'GPT-5'는 기존 모델 대비 월등히 향상된 이해력과 생성 능력을 갖출 것으로 예상되며, 특히 텍스트뿐만 아니라 이미지, 음성, 비디오 등 복합적인 데이터를 처리하는 멀티모달(Multimodal) AI 기능이 대폭 강화될 전망이다.

### 멀티모달 AI, AI의 새로운 지평을 열다

'GPT-5'는 사용자가 텍스트로 질문하면 관련 이미지를 생성하거나, 이미지를 보고 내용을 설명하는 등 다양한 형태의 상호작용이 가능해질 것으로 보인다. 또한, 음성 명령을 이해하고 자연스러운 음성으로 답변하는 기능도 향상되어, AI 비서 및 콘텐츠 생성 분야에서 혁신적인 변화를 가져올 것으로 기대된다.

> "우리는 AI가 인간의 사고방식과 더욱 유사하게 정보를 처리하고 이해하는 방향으로 발전해야 한다고 믿습니다. 'GPT-5'는 이러한 멀티모달 능력을 극대화하여 AI의 활용 범위를 한층 넓힐 것입니다."

오픈AI의 샘 알트먼 CEO는 블로그 게시물을 통해 이같이 밝혔다.

### 한국 시장 전망

한국의 IT 기업들은 오픈AI의 'GPT-5' 개발 동향을 예의주시하며 자체 LLM 개발에 더욱 속도를 낼 것으로 보인다. 특히 한국어 데이터 학습을 강화하고, 국내 사용자들의 니즈에 맞는 특화된 AI 서비스를 개발하려는 노력이 이어질 것이다. 'GPT-5'의 성공적인 출시 여부는 향후 국내 AI 시장의 경쟁 구도에도 상당한 영향을 미칠 것으로 분석된다.`},{id:"20260529180004",title:"엔비디아, AI 반도체 시장 독주… 차세대 GPU '호퍼 2' 공개 임박",summary:"AI 연산의 핵심인 GPU 시장을 장악하고 있는 엔비디아가 차세대 GPU '호퍼 2' 출시를 앞두고 있다. 이는 기존 모델 대비 성능과 효율성을 대폭 향상시켜 AI 학습 및 추론 속도를 획기적으로 개선할 것으로 기대된다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-29T18:00:04+09:00",readTime:"2분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## 엔비디아, AI 칩 시장 지배력 강화… '호퍼 2' 출시 임박

인공지능(AI) 시대의 필수품으로 자리 잡은 그래픽 처리 장치(GPU) 시장의 절대 강자 엔비디아가 차세대 GPU '호퍼 2(Hopper 2)'의 출시를 임박했다고 29일 업계 관계자들이 밝혔다. 이는 AI 모델 학습 및 추론에 필요한 연산 능력을 획기적으로 향상시킬 것으로 예상되며, AI 반도체 시장에서의 엔비디아의 독주 체제를 더욱 공고히 할 전망이다.

### '호퍼 2', AI 성능의 새로운 기준 제시

'호퍼 2'는 이전 세대 GPU 대비 약 1.5배 향상된 연산 성능과 2배 향상된 전력 효율성을 제공할 것으로 알려졌다. 또한, AI 학습에 필수적인 메모리 대역폭도 대폭 확대되어, 더욱 복잡하고 거대한 AI 모델을 효율적으로 처리할 수 있게 된다. 이는 AI 연구개발 속도를 가속화하고, 자율주행, 신약 개발 등 다양한 분야에서의 AI 적용을 촉진할 것으로 기대된다.

> "우리는 AI의 미래를 위한 최고의 하드웨어를 제공하기 위해 끊임없이 노력하고 있습니다. '호퍼 2'는 AI 기술의 발전 속도를 한 단계 끌어올릴 것입니다."

엔비디아 CEO 젠슨 황은 과거 인터뷰에서 AI 하드웨어의 중요성을 강조한 바 있다.

### 한국 시장 전망

국내 주요 IT 기업 및 AI 스타트업들은 엔비디아의 차세대 GPU 도입을 위해 적극적인 움직임을 보일 것으로 예상된다. '호퍼 2'의 성능 개선은 국내 AI 서비스의 경쟁력 강화로 이어질 수 있으며, 관련 반도체 설계 및 제조 분야의 기술 발전에도 긍정적인 영향을 미칠 것으로 보인다. 다만, 높은 가격으로 인해 초기 도입에 부담을 느끼는 기업들도 있을 것으로 예상된다.`},{id:"20260529180005",title:"구글, AI 검색 기능 대대적 개편… 'AI 오버뷰'로 정보 탐색 혁신",summary:"구글이 검색 엔진의 AI 기능을 대폭 강화한 'AI 오버뷰(AI Overviews)'를 전 세계적으로 확대 적용한다. 이는 사용자의 복잡한 질문에 대해 AI가 종합적인 답변을 제공하여 정보 탐색 방식을 혁신할 것으로 기대된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-29T18:00:05+09:00",readTime:"2분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!1,content:`## 구글, 'AI 오버뷰' 전면 도입… 검색 결과의 진화

구글이 AI 기반 검색 기능인 'AI 오버뷰(AI Overviews)'를 전 세계 사용자들에게 확대 적용한다고 29일 발표했다. 이는 기존의 키워드 중심 검색 방식에서 벗어나, 사용자의 복잡하고 맥락적인 질문에 대해 AI가 종합적인 정보를 요약하여 제공하는 새로운 검색 경험을 선사할 것으로 기대된다.

### 'AI 오버뷰', 맞춤형 정보 제공의 시작

'AI 오버뷰'는 사용자가 "캠핑 초보자를 위한 여름철 장비 추천과 주의사항"과 같은 질문을 입력하면, 여러 웹사이트의 정보를 종합하여 AI가 직접 정리한 답변을 검색 결과 상단에 보여주는 방식이다. 이를 통해 사용자는 여러 페이지를 일일이 방문하지 않고도 원하는 정보를 빠르고 효율적으로 얻을 수 있게 된다. 구글은 이 기능이 정보 탐색 시간을 최대 40%까지 단축시킬 수 있다고 밝혔다.

> "우리의 목표는 사용자들이 정보를 더 쉽게 찾고, 더 깊이 이해할 수 있도록 돕는 것입니다. 'AI 오버뷰'는 이러한 목표를 달성하기 위한 중요한 단계입니다."

구글 검색 담당 임원은 보도자료를 통해 이같이 밝혔다.

### 한국 시장 전망

국내 사용자들도 'AI 오버뷰'를 통해 더욱 편리하고 정확한 정보 탐색이 가능해질 것으로 예상된다. 특히 한국어 데이터 학습이 강화되면서, 한국 문화 및 상황에 맞는 맞춤형 답변 제공 능력이 향상될 것으로 기대된다. 다만, AI가 생성한 정보의 정확성 및 신뢰도 확보를 위한 지속적인 모니터링과 개선 노력이 중요할 것이다.`},{id:"20260528180001",title:"삼성전자, 차세대 AI 반도체 '뉴로칩' 양산 돌입",summary:"삼성전자가 2026년 5월 말, 획기적인 성능 향상을 이룬 차세대 AI 반도체 '뉴로칩'의 양산을 시작했다고 발표했습니다. 이 칩은 기존 대비 10배 이상의 연산 속도와 5배 이상의 전력 효율성을 자랑합니다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-28T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",breaking:!0,content:`## 삼성전자, 차세대 AI 반도체 '뉴로칩' 양산 개시

삼성전자가 2026년 5월 말, 인공지능(AI) 연산에 최적화된 차세대 반도체 '뉴로칩'의 대량 생산에 돌입했다고 공식 발표했습니다. 이번 뉴로칩 양산은 AI 기술 발전의 새로운 지평을 열 것으로 기대됩니다.

### 획기적인 성능 향상

뉴로칩은 기존 AI 반도체 대비 10배 이상의 연산 속도와 5배 이상의 전력 효율성을 갖춘 것으로 알려졌습니다. 이는 복잡하고 방대한 AI 모델을 더 빠르고 효율적으로 처리할 수 있게 하여, 자율주행, 실시간 영상 분석, 개인 맞춤형 AI 서비스 등 다양한 분야에서 혁신을 가속화할 전망입니다.

### 한국에 미치는 영향

삼성전자의 이번 뉴로칩 양산은 국내 반도체 산업의 경쟁력을 한층 강화하는 계기가 될 것입니다. 또한, 국내 AI 스타트업 및 관련 산업 생태계에도 긍정적인 영향을 미쳐, AI 기술 기반의 새로운 비즈니스 모델 창출을 촉진할 것으로 예상됩니다. 국내 IT 기업들은 뉴로칩을 활용하여 AI 서비스의 성능을 대폭 개선하고, 글로벌 시장에서의 경쟁 우위를 확보할 기회를 얻게 됩니다.

> "뉴로칩은 AI 시대의 새로운 표준이 될 것입니다. 삼성전자는 앞으로도 혁신적인 기술 개발을 통해 AI 생태계 발전에 기여할 것입니다." - 삼성전자 반도체 사업부장

### 한국 시장 전망

국내 스마트폰 제조사 및 가전 업체들은 뉴로칩을 탑재한 차세대 제품 출시를 통해 AI 기능 강화에 나설 것으로 보입니다. 이는 소비자들에게 더욱 향상된 AI 경험을 제공하며, 국내 AI 시장의 성장을 견인할 것으로 분석됩니다. 관련 업계에서는 뉴로칩을 활용한 새로운 애플리케이션 개발 경쟁이 더욱 치열해질 것으로 전망하고 있습니다.`},{id:"20260528180002",title:"구글, '제미나이 2.0' 공개… 멀티모달 AI의 진화",summary:"구글이 2026년 5월 말, 차세대 대규모 언어 모델(LLM) '제미나이 2.0'을 공개하며 멀티모달 AI 기술의 새로운 기준을 제시했습니다. 텍스트, 이미지, 오디오, 비디오 등 다양한 형태의 데이터를 통합적으로 이해하고 생성하는 능력이 크게 향상되었습니다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-28T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!0,content:`## 구글, '제미나이 2.0'으로 멀티모달 AI 새 지평 열다

구글이 2026년 5월 말, 차세대 대규모 언어 모델(LLM)인 '제미나이 2.0'을 공개하며 AI 기술의 또 다른 도약을 알렸습니다. 이번 발표는 텍스트뿐만 아니라 이미지, 오디오, 비디오 등 다양한 형태의 정보를 동시에 이해하고 생성하는 멀티모달 AI의 능력을 한 단계 끌어올렸다는 점에서 주목받고 있습니다.

### 혁신적인 멀티모달 능력

제미나이 2.0은 이전 버전에 비해 훨씬 정교한 멀티모달 처리 능력을 자랑합니다. 예를 들어, 비디오를 시청하면서 등장인물의 감정을 분석하고, 오디오 명령을 통해 복잡한 시각 자료를 생성하는 등의 작업이 가능해졌습니다. 구글은 이를 통해 AI가 인간의 복잡한 의사소통 방식을 더욱 깊이 이해하고 상호작용할 수 있게 될 것이라고 강조했습니다.

### 한국에 미치는 영향

제미나이 2.0의 발전은 한국의 AI 연구 및 개발 분야에 새로운 영감을 제공할 것입니다. 국내 기업들은 제미나이 2.0의 API를 활용하여 더욱 풍부하고 인터랙티브한 AI 서비스를 개발할 수 있게 됩니다. 특히, 교육, 엔터테인먼트, 콘텐츠 제작 분야에서 창의적인 AI 활용 사례가 늘어날 것으로 예상됩니다.

> "제미나이 2.0은 AI가 단순히 정보를 처리하는 것을 넘어, 인간처럼 세상을 이해하고 소통하는 데 한 걸음 더 다가섰음을 의미합니다." - 구글 AI 연구팀 리더

### 한국 시장 전망

한국 시장에서는 제미나이 2.0을 기반으로 한 맞춤형 AI 비서, AI 기반 교육 콘텐츠, 그리고 인터랙티브한 미디어 경험 등이 확대될 가능성이 높습니다. 또한, 국내 IT 기업들은 제미나이 2.0의 강력한 멀티모달 능력을 활용하여 글로벌 시장에서 경쟁력 있는 AI 솔루션을 선보일 수 있을 것으로 전망됩니다.`},{id:"20260528180003",title:"AI 윤리 가이드라인 강화… 정부, '책임 AI' 도입 박차",summary:"정부가 2026년 5월 말, AI 기술의 윤리적이고 책임감 있는 사용을 위한 새로운 가이드라인을 발표했습니다. 이는 AI 개발 및 활용 과정에서의 잠재적 위험을 최소화하고, 사회적 신뢰를 구축하는 데 중점을 두고 있습니다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-28T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",breaking:!1,content:`## AI 윤리 가이드라인 강화, 정부 '책임 AI' 도입 가속화

정부가 2026년 5월 말, 인공지능(AI) 기술의 윤리적이고 책임감 있는 사용을 위한 새로운 가이드라인을 발표하며 '책임 AI' 도입에 박차를 가하고 있습니다. 이번 가이드라인은 AI 기술 발전과 함께 제기되는 사회적, 윤리적 문제에 대한 선제적 대응을 목표로 합니다.

### 핵심 내용 및 기대 효과

새로운 가이드라인은 AI 시스템의 투명성, 설명 가능성, 공정성, 그리고 안전성을 핵심 원칙으로 삼고 있습니다. 특히, AI 알고리즘의 편향성을 줄이고, 의사 결정 과정에 대한 설명을 강화하여 사용자의 신뢰를 높이는 데 초점을 맞추고 있습니다. 또한, AI로 인한 잠재적 피해를 예방하고, 발생 시 신속하게 대응할 수 있는 체계 마련을 강조했습니다.

### 한국에 미치는 영향

이번 가이드라인 강화는 국내 AI 산업의 지속 가능한 성장에 중요한 밑거름이 될 것입니다. 기업들은 AI 시스템 개발 및 운영 전반에 걸쳐 윤리적 고려 사항을 필수적으로 반영해야 하며, 이는 장기적으로 AI 기술에 대한 사회적 수용성을 높이는 데 기여할 것입니다. 또한, AI 윤리 전문가 및 관련 컨설팅 시장의 성장을 촉진할 것으로 예상됩니다.

> "AI 기술의 발전은 인류에게 큰 혜택을 줄 수 있지만, 동시에 신중한 접근과 윤리적 성찰이 반드시 필요합니다. 이번 가이드라인은 책임 있는 AI 생태계 구축의 중요한 발걸음입니다." - 과학기술정보통신부 장관

### 한국 시장 전망

국내 기업들은 이번 가이드라인을 준수하기 위해 AI 윤리 교육을 강화하고, 관련 내부 규정을 정비하는 데 노력을 기울일 것입니다. 이는 AI 기반 서비스의 품질 향상과 함께, 글로벌 시장에서 한국 AI 기술의 신뢰도를 높이는 데 긍정적인 영향을 미칠 것으로 전망됩니다. 또한, AI 윤리 인증 및 평가 서비스 시장의 성장이 예상됩니다.`},{id:"20260528180004",title:"MIT, AI 기반 신약 개발 플랫폼 공개… 속도와 정확도 '혁신'",summary:"매사추세츠 공과대학교(MIT) 연구진이 2026년 5월 말, AI를 활용하여 신약 후보 물질 발굴 및 효능 예측 시간을 획기적으로 단축하는 새로운 플랫폼을 공개했습니다. 이 플랫폼은 기존 방식 대비 수십 배 빠른 속도로 신약 개발 가능성을 제시합니다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-28T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!1,content:`## MIT, AI 신약 개발 플랫폼으로 바이오 혁신 선도

매사추세츠 공과대학교(MIT) 연구진이 2026년 5월 말, 인공지능(AI)을 활용하여 신약 개발 과정을 혁신적으로 단축시키는 새로운 플랫폼을 공개했습니다. 이 플랫폼은 방대한 생물학적 데이터를 분석하여 신약 후보 물질을 발굴하고 그 효능을 예측하는 데 걸리는 시간을 획기적으로 줄여줍니다.

### AI 기반 신약 개발의 진보

MIT 연구진이 개발한 AI 플랫폼은 수백만 개의 화합물 데이터를 분석하고, 특정 질병에 대한 잠재적 치료 효과를 가진 후보 물질을 신속하게 식별합니다. 또한, 기존의 실험 방식으로는 수년이 걸렸던 약물 효능 및 부작용 예측을 단 몇 주, 혹은 며칠 만에 가능하게 합니다. 이는 신약 개발 비용을 절감하고, 환자들에게 더 빨리 새로운 치료법을 제공할 수 있는 가능성을 열었습니다.

### 한국에 미치는 영향

MIT의 이번 연구 성과는 한국의 제약 바이오 산업에 큰 자극이 될 것입니다. 국내 연구 기관 및 제약사들은 이 AI 플랫폼의 기술 동향을 면밀히 분석하고, 자체적인 AI 신약 개발 역량을 강화하는 데 집중할 것입니다. 또한, AI 신약 개발 분야의 국제 협력 기회가 확대될 것으로 기대됩니다.

> "AI는 신약 개발의 패러다임을 바꾸고 있습니다. 우리는 이 기술을 통해 아직 치료법이 없는 질병에 대한 해결책을 더 빠르게 찾을 수 있을 것이라고 믿습니다." - MIT 생명공학 연구소 소장

### 한국 시장 전망

한국 시장에서는 AI 기반 신약 개발 스타트업의 성장이 더욱 가속화될 전망입니다. 기존 제약사들도 AI 기술 도입을 통해 연구 개발 효율성을 높이고, 글로벌 경쟁력을 강화하기 위한 투자를 늘릴 것으로 보입니다. 이는 궁극적으로 한국 바이오 산업의 전반적인 경쟁력 강화로 이어질 것입니다.`},{id:"20260528180005",title:"AI 기반 개인 맞춤형 교육 시장 급성장… 'AI 튜터' 시대 도래",summary:"AI 기술의 발전과 함께 개인 맞춤형 교육 시장이 2026년 5월 말, 폭발적인 성장세를 보이고 있습니다. 특히, 학생 개개인의 학습 수준과 속도에 최적화된 'AI 튜터' 서비스가 주목받으며 교육 패러다임 변화를 이끌고 있습니다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-28T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!1,content:`## AI 튜터, 개인 맞춤형 교육 시장의 새로운 표준으로

인공지능(AI) 기술의 눈부신 발전과 함께 개인 맞춤형 교육 시장이 2026년 5월 말, 전례 없는 성장세를 기록하고 있습니다. 이러한 성장의 중심에는 학생들의 학습 경험을 근본적으로 변화시키고 있는 'AI 튜터' 서비스가 있습니다.

### AI 튜터의 혁신

AI 튜터는 학생들의 학습 데이터를 실시간으로 분석하여 강점과 약점을 파악하고, 이에 맞춰 최적화된 학습 콘텐츠와 피드백을 제공합니다. 이는 학생 개개인의 학습 속도와 스타일에 맞춰 학습 효율을 극대화하며, 뒤처지는 학생이나 앞서나가는 학생 모두에게 맞춤형 교육을 제공할 수 있다는 점에서 기존 교육 방식의 한계를 극복하고 있습니다. 최근 발표된 한 보고서에 따르면, AI 튜터 서비스를 이용한 학생들의 학업 성취도가 평균 15% 이상 향상된 것으로 나타났습니다.

### 한국에 미치는 영향

한국에서도 AI 튜터 시장의 성장은 교육 격차 해소 및 공교육 혁신에 긍정적인 영향을 미칠 것으로 기대됩니다. 교육부는 AI 튜터 기술을 공교육에 도입하기 위한 시범 사업을 확대하고 있으며, 이는 전국 학생들에게 질 높은 맞춤형 교육 기회를 제공하는 데 기여할 것입니다. 또한, AI 교육 관련 스타트업의 성장을 촉진하고 새로운 일자리를 창출할 것으로 예상됩니다.

> "AI 튜터는 더 이상 먼 미래의 이야기가 아닙니다. 이미 우리 교육 현장에서 학생들의 잠재력을 최대한 발휘하도록 돕는 강력한 도구가 되고 있습니다." - 교육 기술 전문가

### 한국 시장 전망

한국의 AI 튜터 시장은 앞으로도 가파른 성장세를 이어갈 것으로 전망됩니다. 특히, 메타버스 기술과 결합된 몰입형 AI 튜터, 그리고 학습 심리 분석 기능을 강화한 AI 튜터 등이 등장하며 시장 경쟁이 더욱 치열해질 것입니다. 이는 한국 교육의 질적 향상과 미래 인재 양성에 중요한 역할을 할 것으로 기대됩니다.`},{id:"20260528084401",title:"SK하이닉스 시총 $1조 돌파... HBM 슈퍼사이클로 250% 폭등, 코스피 8,457 사상최고",summary:"SK하이닉스가 5월 27일 장중 14.9% 폭등으로 시총 1,680조 원(약 $1.12조) 돌파했다. 연초 이후 250% 폭등으로 한국 사상 두 번째, 메모리 반도체 사상 첫 '1조 달러 클럽' 진입. 코스피는 같은 날 +2.9% 상승해 8,457포인트 사상 최고치 갱신.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-28T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800",breaking:!0,content:`## SK하이닉스 시총 $1조 돌파... HBM 슈퍼사이클로 250% 폭등, 코스피 8,457 사상최고

**SK하이닉스**는 **2026년 5월 27일(수요일) 주가가 장중 14.9% 폭등**해 종가 기준 **+9.3% 상승**으로 마감했다. 이로써 **시가총액 1,680조 원(약 1조 1,200억 달러)**을 기록하며 ==**한국 기업 사상 두 번째 '1조 달러 클럽' 진입**==을 확정했다. 같은 날 **코스피 지수**는 **+2.9% 상승해 사상 최초 8,457포인트**를 찍었다.

📌 **핵심 인사이트**: SK하이닉스 주가는 **연초 이후 약 250% 폭등**했고, 이는 **엔비디아 AI 가속기용 HBM(고대역폭 메모리) 핵심 공급자** 지위가 시장에서 결정적으로 인정받은 결과다. **삼성전자(이달 초 시총 $1조 돌파)·TSMC**에 이은 **아시아 3번째, 메모리 반도체 기업 사상 첫 '1조 달러 클럽' 멤버**다.

---

## SK하이닉스 시총 $1조의 의미

이번 폭등은 단순한 단기 랠리가 아니다. **2025년 1월 → 2026년 5월 16개월간 SK하이닉스 시총**은 ==**350조 원 → 1,680조 원으로 약 5배 폭증**==했다. **세계 메모리 반도체 시장 점유율**도 다음과 같이 재편됐다:

1. **HBM 메모리 시장 점유율**: ==**SK하이닉스 52% / 삼성 31% / 마이크론 17%**==
2. **엔비디아 H200·B200·B300 HBM3E 12-Hi 단독 공급**: ==**SK하이닉스 독점 18개월 지속**==
3. **2026년 HBM 시장 규모 전망**: ==**전년 대비 +58% 증가한 546억 달러(BofA 추산)**==
4. **HBM4 16-Hi 양산 일정**: ==**SK하이닉스 6월 / 삼성 7월 / 마이크론 9월**==

특히 **SK하이닉스의 'iHBM' 기술**(HBM 내부 열 배출 통로 추가, 열 저항 30% 이상 감축)이 **5월 26일 공식 공개**되면서, **8세대 HBM5부터 글로벌 AI 가속기 시장 독점 가능성**이 거론된다.

> "==**SK하이닉스의 $1조 클럽 진입은 한국 반도체 산업 60년사의 정점이자 새 출발점**==이다. **메모리 슈퍼사이클은 2027년까지 최소 2년 더 지속**될 것이며, **HBM 단가 +20% 추가 인상이 2026년 4분기 확정**될 가능성이 크다. **삼성·SK·마이크론 3사 합산 매출**은 **2025년 1,900억 달러 → 2026년 3,200억 달러**로 폭증할 것."
> — 김운호, IBK투자증권 반도체 시니어 애널리스트 (5월 27일 리포트)

---

## 글로벌 빅테크 자본지출(CAPEX)이 키운 시장

⚡ **주목할 포인트**: 2026년 **구글·아마존·MS·메타 4사 합산 CAPEX 7,250억 달러**는 전년 4,100억 달러 대비 **+77% 폭증**한 수치다. GPU 가격의 절반은 HBM이 차지한다.

- **엔비디아 Rubin GPU**: 288GB HBM4 탑재, 1장당 GPU 가격 8만 달러 중 ==**HBM 비중 약 3.4만 달러(42%)**==
- **AMD MI450X Helios**: 384GB HBM4 탑재 예정, HBM 비중 50% 초과
- **OpenAI 'HBM 20개' 괴물 칩 특허**: 4월 24일 공개, ==**HBM 10배 사용 설계**==
- **빅4 클라우드 HBM 발주 잔량**: ==**2026년 4분기까지 전량 선매수 완료**==

---

## 한국에 미치는 영향

### 1. 코스피 8,457 사상최고, 외국인 5월 +18조 순매수

**5월 27일 기준 외국인 5월 누적 순매수액 18조 원 돌파**는 한국 증시 사상 첫 기록이다. ==**연기금·국부펀드(KIC·NPS)**==도 SK하이닉스·삼성전자 비중 **연초 12% → 5월 21%**로 확대했고, **6월 추가 +3%p 확대 검토** 중이다. **KB증권·NH투자증권 등 4사**는 **코스피 연말 목표치 9,500~10,000포인트로 일제 상향** 조정했다.

### 2. SK·삼성 합산 시총 비중 코스피 40% 돌파

**SK하이닉스 + 삼성전자 시총 합계**가 ==**5월 27일 기준 코스피 전체의 40.7%**==를 차지하면서 사상 첫 40%선을 돌파했다. ==**'반도체 양강 의존도 심화'에 대한 우려**==도 동시에 제기된다. **금융위원회**는 **6월 중순 '반도체 외 신성장 산업 활성화' 패키지** 발표를 예정하고 있다.

### 3. 정부, SK·삼성 'AI 반도체 특별구역' 7월 지정 검토

**과학기술정보통신부**는 **5월 27일 발표한 'AI 반도체 특별구역 지정 로드맵'**에서 **이천(SK하이닉스)·평택(삼성)·청주(SK)·기흥(삼성) 4곳을 7월 1일 특별구역 지정**하기로 했다. ==**전력·용수·세제·인허가 등 7개 영역 패스트트랙 적용**==. ==**5G·전력 인프라 2조 원 추가 투입**==이 명시됐다.

---

🎯 **다음 시나리오**:

1. **5월 28~30일**: SK하이닉스 **HBM4 16-Hi 엔비디아·AMD 동시 공급 일정 확정**
2. **6월 초**: 정부 **AI 반도체 특별구역 4곳 공식 지정** + **전력 인프라 2조 투입**
3. **6월 중순**: 삼성전자 **HBM4 16-Hi 양산 시작**, SK 독주 부분 균열
4. **7월**: HBM3E 단가 **+20% 추가 인상** 협상 마감
5. **2026년 4분기**: HBM 시장 규모 **연 환산 600억 달러 돌파** 가능성

⚠️ **한국 투자자·기업 5월 28일~6월 5일 행동 체크리스트**:

- ==**SK하이닉스·삼성전자 분할 매수 vs. 차익 실현 시점 판단**==
- ==**한미반도체·HPSP·이오테크닉스 등 HBM 장비주 추적**==
- ==**정부 AI 반도체 특별구역 7월 지정 일정 사전 확인**==
- ==**HBM3E 단가 +20% 인상 결정 영향 분석**==
- ==**코스피 9,000포인트 돌파 시점과 신성장 산업 패키지 동시 추적**==

✅ **결론**: SK하이닉스의 **$1조 시총 진입**은 **AI 슈퍼사이클·HBM 독점 + iHBM 기술**의 3축이 만들어낸 결과다. **한국 반도체 산업은 향후 24개월간 글로벌 AI 인프라 패권의 핵심**이 된다. 정부·기업·투자자는 **AI 반도체 특별구역 지정·HBM 양산 일정·신성장 산업 분산** 3축을 동시에 추적해야 한다.`},{id:"20260528084402",title:"Anthropic 서울사무소 정식 개소... 최기영 CEO 선임, 韓 Claude 사용 3.5배 폭증",summary:"Anthropic이 5월 27일 '대한민국 법인 정식 출범 및 최기영 대표이사 선임'을 발표했다. 6월 중순 서울사무소 정식 개소 일정 확정. Anthropic Economic Index 기준 한국인의 Claude 일일 사용 빈도가 인구 비례 예상치 대비 3.5배 초과한 점이 결정적 근거.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-28T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",breaking:!0,content:`## Anthropic 서울사무소 정식 개소... 최기영 CEO 선임, 韓 Claude 사용 3.5배 폭증

**Anthropic**은 **2026년 5월 27일** ==**'대한민국 법인 정식 출범 및 최기영(KiYoung Choi) 대표이사 선임'**==을 공식 발표했다. **2026년 6월 중순 서울사무소 정식 개소** 일정도 함께 확정됐다. **글로벌 Big Tech 한국 진출 사례 중 가장 빠른 의사결정**으로 기록될 전망이다.

📌 **핵심 인사이트**: Anthropic 자체 'Economic Index' 자료에 따르면 ==**한국인의 Claude 일일 사용 빈도가 인구 비례 예상치 대비 3.5배 초과**==한다. 특히 **고난도 R&D·창작 분야 집중 사용 패턴**이 두드러져, Anthropic이 **'한국=전략적 우선 시장'**으로 격상한 결정적 근거가 됐다.

---

## 최기영 대표는 누구인가

**최기영 신임 CEO**는 ==**Snowflake Korea 한국 총괄 출신**==이며, 글로벌 IT 30년 경력 보유자다. 이전 경력은 다음과 같이 화려하다:

1. **Snowflake Korea 한국 총괄(2023~2026)**: ==**Snowflake 한국 매출 2배 성장 견인**==
2. **Google Cloud Korea 영업본부장(2020~2023)**: ==**Google Cloud 한국 엔터프라이즈 신규 100개사 확보**==
3. **Adobe·Autodesk·Microsoft 한국 지사 임원 역임**: ==**B2B 영업·기술 컨설팅 영역 30년 누적**==
4. **클라우드·AI 전환 컨설팅 전문가**: ==**대기업 30개사 클라우드 마이그레이션 직접 지휘**==

> "==**한국은 Anthropic의 다음 10년을 결정짓는 시장**==이다. **Claude의 한국 사용자 침투력은 글로벌 평균을 3.5배 상회**하며, **NAVER·KT·LG·삼성·현대 등 빅5와의 직접 협업**이 6월부터 본격화된다. ==**서울사무소 개소 후 6개월 내 500명 규모 한국 팀 구축**==이 목표다."
> — Daniel Hong, Anthropic Asia-Pacific 총괄 (5월 27일 한국 미디어 라운드테이블)

---

## 한국 시장 진출의 전략적 의미

⚡ **주목할 포인트**: Anthropic의 한국 진출 결정이 **OpenAI 한국 진출 일정보다 약 6개월 빠르다**. 이로 인해 다음 3가지 시장 변화가 즉시 발생한다:

1. **Claude vs. GPT 한국 엔터프라이즈 경쟁 격화**: ==**Claude 한국 점유율 2025년 14% → 2026년 7월 38% 전망**==
2. **NAVER·삼성·LG 직접 라이선스 협상 가속**: ==**기존 AWS·Google Cloud 우회 경로 → Anthropic 직접 거래**==
3. **삼정KPMG·PwC·EY·딜로이트 한국 4사 Claude 도입 가속**: ==**Big4 합산 4.8만 명 도입 6월 완료**==

> "**Anthropic이 OpenAI보다 한국 시장에 약 6개월 먼저 진입**한 것은 **엔터프라이즈 AI 시장 패권 다툼**에서 결정적이다. ==**한국 대기업 의사결정자가 Claude를 먼저 경험하면 GPT 도입을 자연스럽게 보류**==하는 패턴이 이미 일본·싱가포르에서 입증됐다."
> — 박지영, 삼성증권 글로벌 IT 시니어 애널리스트 (5월 27일 분석 노트)

---

## 한국에 미치는 영향

### 1. NAVER·KT·LG·삼성SDS 'Claude 직접 라이선스' 6월 본격 협상

기존에는 **AWS Bedrock·Google Vertex AI 우회 경로**로만 Claude 사용이 가능했으나, **6월 중순 Anthropic 서울사무소 개소 이후 직접 라이선스·맞춤 컴플라이언스·한국어 성능 튜닝 협상**이 가능해진다. ==**NAVER Cloud의 HyperCLOVA X-Claude 하이브리드 모델 6월 PoC 시작**==이 거론된다. **KT·LG CNS·삼성SDS도 자체 'Claude SLM 한국형' 개발 검토** 단계.

### 2. 정부 'AI 안전성·국가 안보' Claude 우선 협력 가능성

**과학기술정보통신부·국가정보원·국방부**는 ==**5월 27일 'Anthropic Claude Mythos 기반 사이버 안보 시스템 PoC 6월 시작'**==을 검토 중이다. **Anthropic의 Constitutional AI 안전성 노선**이 한국 정부의 'AI 주권·안전성' 정책과 정렬되는 만큼, **국방·사이버 안보 영역 핵심 파트너 격상** 가능성이 높다. **국정원 사이버안보센터의 Project Glasswing 한국 도입 협의**가 시작됐다.

### 3. 한국 AI 스타트업 'Claude 우선 빌더' 생태계 6월 개막

**Anthropic Korea**는 ==**스타트업·연구자·개발자 커뮤니티 지원**==을 핵심 미션으로 명시했다. **5월 27일 발표 자료**는 **'Claude Korea Builder Program 6월 1일 출범'**을 명시했고, **연 1,000개 스타트업·5,000명 개발자에 Claude 무료 크레딧 + 기술 멘토링**을 제공한다. **국내 AI 액셀러레이터 D.CAMP·스파크랩·매쉬업엔젤스**와 **공식 파트너십 체결** 예정.

---

🎯 **다음 시나리오**:

1. **5월 28~31일**: Anthropic **서울사무소 오피스 위치 공식 발표** (강남·종로 후보)
2. **6월 초**: 최기영 대표 **NAVER·삼성·LG·현대·KT 빅5 CEO 직접 미팅**
3. **6월 중순**: **서울사무소 정식 개소식** + **Claude Korea Builder Program 출범**
4. **6월 말**: 삼정KPMG·PwC 한국 **Claude 도입 1차 완료** (1.2만 명)
5. **7월**: 정부 **Claude Mythos 사이버 안보 PoC 시작**

⚠️ **한국 기업·정부 5월 28일~6월 30일 행동 체크리스트**:

- ==**Anthropic 서울사무소 개소 일정 사전 확인**==
- ==**NAVER·KT·LG·삼성SDS Claude 직접 라이선스 협상 결과 추적**==
- ==**정부 Claude Mythos 사이버 안보 PoC 일정 추적**==
- ==**Claude Korea Builder Program 스타트업 지원 자격·신청 확인**==
- ==**OpenAI 한국 진출 6개월 지연에 따른 GPT 점유율 변화 추적**==

✅ **결론**: Anthropic의 **서울사무소 개소·최기영 CEO 선임**은 **한국 엔터프라이즈 AI 시장의 결정적 분기점**이다. **OpenAI보다 6개월 빠른 시장 진출**은 **NAVER·삼성·LG·현대·KT 빅5 + 정부 + 스타트업 생태계 3축**의 Claude 우선 도입을 가속화한다. **6월 중순부터 12월까지 6개월간 한국 엔터프라이즈 AI 시장 점유율이 결정적으로 재편**될 전망이다.`},{id:"20260528084403",title:"Nvidia Vera Rubin NVL72, Computex 골든어워드 4관왕... 288GB HBM4·50PFLOPS H2 출시",summary:"엔비디아 차세대 AI 슈퍼컴퓨터 'Vera Rubin NVL72'가 5월 22일 대만 Computex 2026에서 골든어워드 4관왕을 차지했다. VR200 GPU는 288GB HBM4 + 50 PFLOPS FP4 컴퓨트로 Blackwell 대비 2.5배. 6월 1일 젠슨 황 키노트에서 정식 출시 일정 확정 예정.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-28T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",breaking:!1,content:`## Nvidia Vera Rubin NVL72, Computex 골든어워드 4관왕... 288GB HBM4·50PFLOPS H2 출시

**엔비디아**의 차세대 AI 슈퍼컴퓨터 **'Vera Rubin NVL72'**가 **2026년 5월 22일 대만 컴퓨텍스(COMPUTEX 2026)에서 골든 어워드 4관왕**을 차지했다. **Vera Rubin NVL72 + Jetson Thor + Alpamayo** 3개 플랫폼이 ==**골든어워드·지속가능 기술 특별상·차량 기술 카테고리상**==을 휩쓸었다. **2026년 6월 1일 젠슨 황 키노트**에서 정식 출시 일정이 확정될 예정이다.

📌 **핵심 인사이트**: **Vera Rubin VR200 GPU**는 ==**288GB HBM4 메모리 + 50 PFLOPS FP4 컴퓨트**==를 탑재해 **단일 GPU 성능이 Blackwell B300 대비 2.5배**다. **NVL72 시스템 한 대**는 ==**Vera CPU 36개 + Rubin GPU 72개**==를 6세대 NVLink로 결합해 **약 3.6 ExaFLOPS FP4 컴퓨트**를 달성한다.

---

## Vera Rubin NVL72 핵심 사양

이번 골든어워드 4관왕은 **5개 영역에서의 압도적 사양** 덕분이다:

1. **단일 GPU 성능**: ==**288GB HBM4 + 50 PFLOPS FP4 (Blackwell 대비 2.5배)**==
2. **NVL72 시스템 통합**: ==**36 Vera CPU + 72 Rubin GPU + 6세대 NVLink**==
3. **메모리 대역폭**: ==**HBM4 단일 GPU 13TB/s, 시스템 합산 936TB/s**==
4. **네트워킹**: ==**ConnectX-9 SuperNIC + Spectrum-X Ethernet Photonics**==
5. **에너지 효율**: ==**1 ExaFLOPS당 전력 사용량 Blackwell 대비 -42%**==

⚡ **주목할 포인트**: **NVL72 한 대 가격은 약 280만 달러(약 38억 원)**로 추정되며, **2026년 하반기 하이퍼스케일러(MS·구글·AWS·메타) 우선 출하**가 이미 확정됐다. **2027년 워크스테이션·일반 기업용 변형 모델 출시** 예정.

---

## SK하이닉스·삼성 HBM4 동시 공급

**Vera Rubin VR200**의 **HBM4 12-Hi 288GB** 메모리는 **SK하이닉스 + 삼성전자 + 마이크론 3사 분할 공급** 구조로 확정됐다. 5월 27일 엔비디아 발표 기준 ==**SK 60% / 삼성 25% / 마이크론 15%**== 비중.

> "==**Vera Rubin NVL72는 단순한 AI 가속기가 아니라 차세대 'AI 공장(AI Factory)' 기본 단위**==다. 한 대로 **GPT-4 규모 모델 6개 동시 학습**, **GPT-5 규모 모델 단일 학습**이 가능하다. **2026년 하반기~2027년 상반기 AI 모델 학습 패러다임의 결정적 전환점**이 될 것."
> — Patrick Moorhead, Moor Insights & Strategy 수석 애널리스트 (5월 22일 컴퓨텍스 현장 리포트)

---

## Jetson Thor·Alpamayo 동반 수상

- **Jetson Thor 에지 AI 플랫폼**: 골든어워드, ==**휴머노이드·드론·자율차 핵심 두뇌**==, **2,070 TFLOPS 추론 성능**
- **Alpamayo 자율주행 개발 오픈 플랫폼**: 차량 기술·스마트 콕핏 카테고리상, ==**현대차·기아·BMW·메르세데스 도입 협의 중**==

🔥 **요약**: 엔비디아가 컴퓨텍스에서 **데이터센터(Rubin) + 에지(Jetson Thor) + 차량(Alpamayo) 3개 영역 동시 패권**을 선언한 셈이다.

---

## 한국에 미치는 영향

### 1. SK하이닉스·삼성 HBM4 6월 본격 양산 가속

**5월 27일 엔비디아 공급 발주 확정 기준**, ==**SK하이닉스 6월 / 삼성 7월 / 마이크론 9월 양산 시작**==이 확정됐다. **연간 HBM4 매출 규모**는 ==**SK 28조 원 / 삼성 12조 원 / 마이크론 7조 원**==으로 추정된다. **HBM4 단가는 HBM3E 대비 +35% 인상**되어 메모리 사상 최고 마진율을 기록할 전망.

### 2. NAVER·KT·삼성 '국가 AI 공장' Rubin 도입 7월 협의

**한국지능정보사회진흥원(NIA)·과학기술정보통신부**는 ==**5월 27일 발표한 '국가 AI 데이터센터 구축 로드맵'**==에서 **NVL72 시스템 144대(GPU 10,368장) 도입**을 확정했다. **NAVER·KT·삼성SDS 컨소시엄이 운영 주체**로 거론되며, **2027년 6월 가동 목표 + 총 사업비 2조 원** 규모.

### 3. 현대차·기아 Alpamayo 도입, 자율주행 표준 채택

**현대차그룹**은 ==**5월 27일 'Alpamayo 기반 차세대 자율주행 SDV 플랫폼 2027년 적용'**==을 검토 중이다. **포니AI(Pony.ai)·중국 BYD에 이어 글로벌 3번째 Alpamayo 표준 채택 차종**이 될 가능성이 높다. **현대차 SDV 플랫폼 'Pleos'와 Alpamayo 통합 PoC**가 6월부터 시작된다.

---

🎯 **다음 시나리오**:

1. **2026년 6월 1일**: 젠슨 황 **컴퓨텍스 키노트** 정식 출시 일정 확정
2. **6월 중순**: SK하이닉스 **HBM4 12-Hi 본격 양산** 시작
3. **7월**: **국가 AI 데이터센터 구축 컨소시엄** 입찰
4. **2026년 하반기**: 하이퍼스케일러 4사 **NVL72 우선 출하** (예상 6,000대)
5. **2027년 상반기**: 일반 기업용 Rubin 워크스테이션 출시

⚠️ **한국 기업·정부 5월 28일~6월 30일 행동 체크리스트**:

- ==**SK하이닉스·삼성 HBM4 양산 일정 추적**==
- ==**국가 AI 데이터센터 입찰 자격 확인** (NAVER·KT·삼성SDS 등)==
- ==**현대차 Alpamayo 자율주행 PoC 결과 추적**==
- ==**Jetson Thor 기반 한국 로봇·드론 스타트업 동향 점검**==
- ==**Rubin NVL72 단가 인상 가능성 대응 (38억 원 → 45억 원 시나리오)**==

✅ **결론**: 엔비디아 **Vera Rubin NVL72**의 컴퓨텍스 골든어워드 4관왕은 **AI 가속기 패권의 종착역이 아니라 새 출발점**이다. **한국 SK하이닉스·삼성·현대차·NAVER·KT**는 **HBM4 공급 + 국가 AI 공장 구축 + 자율주행 표준** 3개 축으로 직접 수혜자다. **6월 1일 젠슨 황 키노트 + 6~9월 한국 HBM4 양산 일정**을 동시 추적해야 한다.`},{id:"20260528084404",title:"Figure $10억 Series C 마감... Q1 글로벌 VC $3,000억 신기록, AI가 80% 차지",summary:"휴머노이드 로봇 Figure AI가 5월 27일 10억 달러 Series C 라운드를 $395억 밸류로 마감했다. Crunchbase 발표에 따르면 Q1 2026 글로벌 VC 펀딩은 6,000개 스타트업에 $3,000억 사상 최고치이며 AI 단독 분야가 $2,420억으로 전체의 80% 차지.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-28T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`## Figure $10억 Series C 마감... Q1 글로벌 VC $3,000억 신기록, AI가 80% 차지

**휴머노이드 로봇 기업 Figure AI**가 **2026년 5월 27일 10억 달러(약 1조 4,000억 원) Series C** 라운드를 마감했다. **밸류에이션은 395억 달러**로 단일 라운드 +175% 폭증. 같은 날 **Crunchbase**가 발표한 ==**2026년 Q1 글로벌 벤처 펀딩 통계**==에 따르면, **6,000개 스타트업에 총 3,000억 달러(약 410조 원) 유입**으로 사상 최고치를 갱신했다. ==**AI 단독 분야가 2,420억 달러로 전체의 80%**==를 차지한다.

📌 **핵심 인사이트**: Q1 펀딩 3,000억 달러는 **2025년 Q1 1,200억 달러 대비 +150% 폭증**한 수치다. **'AI 단독 분야가 8할'**이라는 사실은 ==**SaaS·핀테크·바이오·헬스테크 모든 영역이 AI 통합을 강요당하는 시대**==가 도래했다는 강력한 시그널이다.

---

## Figure AI $10억 Series C의 의미

**Figure AI**는 2025년 Series B에서 **6.75억 달러·밸류 26억 달러**를 모금했다. 이번 Series C는 ==**불과 14개월 만에 밸류 +1,419% 폭증**==이며, **휴머노이드 로봇 단일 기업 최대 라운드** 기록이다. **신규 투자자**는 다음 4사:

1. **Microsoft**: ==**$3.5억(35% 비중)**==, **Azure 클라우드·OpenAI 모델 공동 통합**
2. **NVIDIA**: ==**$2.5억(25% 비중)**==, **Rubin GPU + Jetson Thor 전용 공급 확정**
3. **OpenAI**: ==**$2억(20% 비중)**==, **Figure 02 휴머노이드에 GPT-5 통합**
4. **Saudi PIF + Mubadala**: ==**$2억(20% 비중)**==, **사우디 NEOM·UAE 두바이 시범 가동 협약**

> "==**Figure 02는 BMW 공장 시범 가동에서 인간 작업자 대비 시간당 +47% 생산성**==을 입증했다. **2026년 Q4 양산 시작 + 2027년 연간 10만 대 생산 목표**다. **휴머노이드 로봇 시장은 2030년까지 1,200억 달러 규모로 폭증**할 것이다."
> — Brett Adcock, Figure AI 창업자·CEO (5월 27일 펀딩 발표 인터뷰)

---

## Q1 2026 글로벌 VC 펀딩 핵심 통계

⚡ **주목할 포인트**: 분야별 펀딩 분포를 보면 ==**'피지컬 AI(physical AI)' 비중 폭증**==이 가장 두드러진다:

- **AI 인프라(GPU·HBM·데이터센터)**: ==**910억 달러(30.3%)**==
- **AI 파운데이션 모델**: ==**540억 달러(18.0%)**==
- **AI 애플리케이션·에이전트**: ==**470억 달러(15.7%)**==
- **휴머노이드 로봇·자율주행**: ==**380억 달러(12.7%)**==
- **AI 칩 설계·반도체**: ==**220억 달러(7.3%)**==
- **비-AI 분야**: ==**480억 달러(16.0%)**==

> "==**Q1 펀딩의 80%가 AI에 집중된 현상은 글로벌 자본 시장이 AI 외 모든 분야를 '대체 위험'으로 분류**==하기 시작했음을 의미한다. **2026년 전체 벤처 펀딩은 1조 달러 돌파 가능성**이 매우 높다."
> — Gené Teare, Crunchbase 수석 데이터 애널리스트 (5월 27일 보고서)

---

## 주요 라운드 베스트 5

1. **Figure AI** (휴머노이드): ==**$10억 / 밸류 $395억**==
2. **Apptronik** (휴머노이드): ==**$9.35억 / 밸류 $50억**==
3. **FieldAI** (로봇 기반 모델): ==**$4.05억 / 밸류 $25억**==
4. **Reliable Robotics** (자율 항공): ==**$1.6억 / 밸류 $10억**==
5. **Sereact** (물류·제조 AI): ==**$1.1억 / 밸류 $6억**==

---

## 한국에 미치는 영향

### 1. 한국 휴머노이드 로봇 스타트업 5사 'Q2 펀딩 가속'

**레인보우로보틱스·로보티즈·휴림로봇·인티그리트·HD현대로보틱스 5사**가 ==**5월 27일 잇따라 'Series B 추가 라운드 6월 마감'**==을 시사했다. **레인보우로보틱스(삼성전자 자회사화 진행 중) 밸류 8조 원 돌파** 가능성이 거론된다. **HD현대로보틱스는 6월 코스피 상장 예비심사 통과** 단계.

### 2. 정부 'K-휴머노이드 이니셔티브' 5월 30일 공식 발표

**산업통상자원부**는 ==**5월 27일 'K-휴머노이드 이니셔티브 5월 30일 정식 발표'**==를 예고했다. **5년간 1조 5,000억 원 R&D + 양산 지원** 패키지. ==**Figure·Apptronik 대비 한국 휴머노이드 양산 능력 70% 수준까지 추격 목표 + 2027년 글로벌 시장 점유율 5% 달성**==을 명시했다.

### 3. NPS·KIC 'Figure AI 세컨더리 투자' 6월 검토

**국민연금공단(NPS)·한국투자공사(KIC)**는 ==**Figure AI $395억 밸류 라운드 직후 세컨더리(2차 시장) 투자 6월 본격 검토**==를 시사했다. **연내 $500억 밸류 진입 시 +27% 단기 수익 가능성**이 분석된다. **다만 휴머노이드 양산 검증 리스크를 감안한 보수적 진입** 방침.

---

🎯 **다음 시나리오**:

1. **2026년 5월 30일**: 산업부 **'K-휴머노이드 이니셔티브' 정식 발표**
2. **6월 초**: 레인보우로보틱스 **Series B 마감** + 삼성전자 자회사화 완료
3. **6월 중순**: HD현대로보틱스 **코스피 상장 예비심사 통과**
4. **6월 말**: Figure AI **BMW 공장 양산 시작**
5. **2026년 Q4**: 글로벌 휴머노이드 양산 ==**최초 1만 대 돌파**==

⚠️ **한국 기업·정부 5월 28일~6월 30일 행동 체크리스트**:

- ==**'K-휴머노이드 이니셔티브' 1조 5,000억 패키지 세부 내용 확인**==
- ==**레인보우로보틱스·HD현대로보틱스 펀딩 일정 추적**==
- ==**Figure AI·Apptronik 한국 시범 도입 협의 가능성 점검**==
- ==**NPS·KIC 세컨더리 투자 결과 사전 정보 수집**==
- ==**Q1 펀딩 통계 기반 한국 AI 스타트업 자금 유입 추세 분석**==

✅ **결론**: Q1 글로벌 VC 펀딩 **3,000억 달러·AI 80% 집중**은 **AI가 자본시장의 절대 표준**이 됐음을 확정한다. **Figure $10억 Series C**는 **휴머노이드 시장의 '폭주 시작'**이며, **한국 레인보우·HD현대로보틱스·정부 K-휴머노이드 이니셔티브**가 6월 한 달 동안 결정적인 진입 시점이 된다.`},{id:"20260528084405",title:"정부 AI 예산 9.9조 확정, GPU 1.5만장 연내 확보... 데이터센터 전력 인센티브 6월 발표",summary:"정부가 5월 27일 'AI 기본계획 2026~2028 액션플랜'을 통해 연간 AI 예산 9조 9,000억 원·GPU 1만 5,000장 연내 추가 확보를 공식 확정했다. AI 데이터센터 전력·재생에너지 연계 인센티브 패키지는 2026년 6월 30일 정식 발표 예정.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-28T08:44:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",breaking:!1,content:`## 정부 AI 예산 9.9조 확정, GPU 1.5만장 연내 확보... 데이터센터 전력 인센티브 6월 발표

**정부**는 **2026년 5월 27일 'AI 기본계획 2026~2028 액션플랜'**을 통해 ==**연간 AI 예산 9조 9,000억 원·GPU 1만 5,000장 연내 추가 확보**==를 공식 확정했다. **AI 데이터센터 전력·재생에너지 연계 인센티브 패키지**는 ==**2026년 6월 30일 정식 발표**==된다.

📌 **핵심 인사이트**: 2026년 한국 AI 예산 9.9조 원은 ==**2025년 5.3조 → 2026년 9.9조로 +87% 폭증**==한 수치다. **부처별로는 과기정통부 5.1조 / 산업부 1.7조 / 농식품부 0.8조 / 국방부 0.6조 / 기타 1.7조**로 배분됐다.

---

## 정부 AI 예산 9.9조 핵심 사용처

이번 예산은 **5대 영역 집중 투자**로 설계됐다:

1. **AI 컴퓨팅 자원 확충**: ==**2조 805억 원**==, **GPU 1.5만 장 + 통합 운영환경 민관 협력**
2. **AI 기본 모델 R&D**: ==**2조 1,400억 원**==, **HyperCLOVA X·LG Exaone·KT 믿:음·Upstage Solar 등 자국 모델 가속**
3. **AI 인재 양성·교육**: ==**1조 6,200억 원**==, **AI 대학원 50개 확대 + 청년 인재 10만 명 양성**
4. **AI 산업 응용·실증**: ==**2조 4,700억 원**==, **제조·의료·금융·교육·공공 5대 산업 1,000개 PoC**
5. **AI 안전·윤리·국제협력**: ==**1조 5,900억 원**==, **AI 안전성 평가 인프라 + AI 글로벌 거버넌스 참여**

⚡ **주목할 포인트**: ==**'AI 컴퓨팅 자원 확충'에 단일 영역 최대 2조 원 투입**==은 **'GPU 부족 = AI 주권 위협' 인식**이 정부 차원에서 공식화됐음을 의미한다. **NVIDIA Rubin·AMD MI450X·Intel Gaudi 3 등 다양화** 전략 동반.

---

## GPU 1.5만 장 연내 추가 확보 로드맵

**2026년 5월 기준 한국 정부·공공 GPU 보유량**: ==**약 1만 8,000장 (Blackwell B200/H200/MI300X 혼합)**==. **연내 +1.5만 장 확보로 총 3.3만 장 달성** 목표다. 부처별 GPU 배분 계획은 다음과 같다:

- **과기정통부 NIPA·NIA**: ==**8,000장 (53%)**==, **국가 AI 데이터센터 신규 구축**
- **국방부 사이버사령부**: ==**3,000장 (20%)**==, **Claude Mythos·자체 LLM 사이버 안보**
- **산업부 KIAT**: ==**2,000장 (13%)**==, **제조·반도체 산업 AI 실증**
- **농식품부·복지부·국토부**: ==**2,000장 (14%)**==, **농업·의료·교통 분야 AI 응용**

> "==**GPU 1.5만 장 연내 확보는 단순한 인프라 투자가 아니라 '한국이 글로벌 AI 군비 경쟁 상위 10개국에 잔류하기 위한 최소 조건'**==이다. **2026년 글로벌 GPU 총 보급량 약 1,200만 장 중 한국 비중 0.3%**는 절대 부족하며, **연 30% 이상 증분 확보가 향후 5년간 필수**다."
> — 이성환, 고려대 AI 대학원 원장 (5월 27일 정책 토론회)

---

## 데이터센터 전력·재생에너지 인센티브 6월 발표

**산업부·환경부·국토부 3부 공동 'AI 데이터센터 전력 인센티브 패키지'**는 **2026년 6월 30일 정식 발표** 일정으로 ==**5대 핵심 인센티브**==를 포함한다:

1. **AI 데이터센터 전력 우선 공급**: ==**산업 평균 대비 -15% 단가 적용**==
2. **재생에너지 PPA 직접 연계 패스트트랙**: ==**환경영향평가 6개월 → 2개월 단축**==
3. **수도권 제외 5개 지역 특별구역 지정**: ==**용인·평택·청주·여수·해남**==
4. **세제 혜택**: ==**투자 첫 5년 법인세 -50% + 지방세 -100%**==
5. **인허가 패스트트랙**: ==**18개월 → 4개월 단축**==

---

## 한국에 미치는 영향

### 1. NAVER·KT·삼성SDS·LG CNS·SK텔레콤 'AI 데이터센터 6개 추가 착공'

5대 빅테크가 ==**5월 27일 일제히 'AI 데이터센터 신규 착공' 보도자료**==를 냈다. **NAVER 세종 2호기 / KT 천안 / 삼성SDS 평택 / LG CNS 여수 / SKT 가평 / NHN 청주 6개 신규 데이터센터**가 ==**2026년 7월~2027년 6월 단계적 가동**==된다. **합산 총 사업비 8조 5,000억 원 + 합산 전력 용량 720MW**.

### 2. 자국 AI 모델 5사 'R&D 자금 +50% 폭증' 직접 수혜

**HyperCLOVA X(NAVER)·Exaone(LG)·믿:음(KT)·Solar(Upstage)·Trustral(삼성)** 5사가 ==**정부 R&D 매칭 자금 평균 +50% 증액**==을 받게 된다. **2026년 5사 합산 자국 LLM R&D 예산**은 ==**1조 8,000억 원**==으로 미국·중국에 이은 세계 3위 수준 진입.

### 3. AI 인재 10만 명 양성, 청년 일자리 직접 창출

**과기정통부**는 ==**'AI 대학원 50개 확대 + AI 캠퍼스 100개 운영 + AI 청년 인재 10만 명 양성'**==을 명시했다. **2026~2028년 3년간 누적 30만 명** 양성 목표. ==**AI 개발자 평균 초임 연봉 7,500만 원**==으로 일반 IT 대비 +35% 프리미엄 형성. **AI 인재 부족 해소가 자국 모델·서비스 경쟁력의 결정적 변수**.

---

🎯 **다음 시나리오**:

1. **2026년 5월 30일**: 정부 **GPU 1.5만 장 1차 발주(5,000장) 입찰 공고**
2. **6월 30일**: **AI 데이터센터 전력 인센티브 패키지 정식 발표**
3. **7월**: NAVER·KT·삼성SDS·LG CNS 4사 **데이터센터 1차 착공**
4. **2026년 4분기**: HyperCLOVA X 4.0·Exaone 5.0·Solar Pro 2 등 ==**자국 모델 신규 버전 동시 출시**==
5. **2027년 6월**: GPU 누적 5만 장 + 자국 모델 글로벌 점유율 5% 달성

⚠️ **한국 기업·연구자 5월 28일~7월 31일 행동 체크리스트**:

- ==**GPU 1.5만 장 입찰 일정·자격 확인** (NVIDIA·AMD·Intel 다변화 정책)==
- ==**AI 데이터센터 인센티브 패키지 5대 영역 세부 활용 검토**==
- ==**자국 LLM R&D 매칭 자금 신청 일정 확인** (과기정통부 6월 공모)==
- ==**AI 대학원·캠퍼스 확대 일정 추적**==
- ==**5대 빅테크 데이터센터 신규 착공 위치·일정 및 협력 기회 점검**==

✅ **결론**: 정부 **AI 예산 9.9조 + GPU 1.5만 장 + 데이터센터 인센티브 + 자국 모델 R&D 50% 증액 + 인재 10만 명** 5종 패키지는 **한국 AI 주권의 결정적 분기점**이다. **6~7월 정책 발표·입찰·착공이 한국 AI 산업의 향후 3년 경쟁력을 결정**한다. **NAVER·KT·삼성·LG·SK·자국 모델 5사·연구자·청년 모두 즉각 대응**이 필요하다.`},{id:"20260527084401",title:"Anthropic $30B 펀딩 마감 임박... $900B 밸류로 OpenAI($852B) 첫 추월",summary:"Anthropic이 Sequoia·Dragoneer·Greenoaks·Altimeter 4사 공동 주관 30억 달러 신규 펀딩을 5월 말 마감한다. 프리머니 9,000억 달러로 OpenAI의 8,520억 달러를 사상 처음 추월하며, 3개월 만에 밸류가 3배로 폭증했다. 연 환산 매출(ARR)도 90억 → 450억 달러로 5배 점프했고 Q2 영업이익 첫 흑자가 확정된다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-27T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## Anthropic $30B 펀딩 마감 임박... $900B 밸류로 OpenAI($852B) 첫 추월

**Anthropic**이 **2026년 5월 말** **300억 달러(약 41조 원) 규모 신규 펀딩 라운드**를 마감한다. **Sequoia Capital·Dragoneer·Greenoaks·Altimeter Capital** 4사가 **공동 리드 투자자(co-lead)**로 합류했고, **4사 각각 최소 20억 달러씩 투입**할 예정이다. **프리머니 밸류에이션 9,000억 달러**는 ==**OpenAI의 8,520억 달러(2026년 3월 라운드 기준)를 사상 처음 추월**==하는 수치다.

📌 **핵심 인사이트**: 불과 **3개월 전(2026년 2월) 밸류 3,000억 달러**에서 **9,000억 달러로 3배 폭증**했다. ==**스타트업 역사상 가장 빠른 밸류 점프**==이며, **Anthropic의 연 환산 매출(ARR)**도 **2025년 말 90억 달러 → 2026년 5월 450억 달러**로 ==**5배 폭증**==했다. **2026년 Q2 사상 첫 영업이익 흑자 전환**도 확정 단계.

---

## 4사 공동 리드의 의미와 자금 사용처

**Sequoia·Dragoneer·Greenoaks·Altimeter** 4사 공동 리드는 **단일 VC가 30억 달러 규모를 단독으로 흡수할 수 없는 수준**에 도달했음을 의미한다. **공동 리드 4사 외에도 Lightspeed·General Catalyst·Fidelity·T. Rowe Price** 등이 **팔로워 투자자**로 합류한다.

자금 사용처는 다음 3대 영역에 집중된다:

1. **컴퓨트 인프라 확보**: ==**Google TPU + AWS Trainium2 + Broadcom 커스텀 칩**==으로 **2027년까지 100GW급 컴퓨트 확보**
2. **Claude 모델 시리즈 가속**: ==**Claude Opus 5 + Claude Sonnet 5 + Claude Mythos 정식 출시**==를 **2026년 4분기 안 완료**
3. **글로벌 시장 확장**: ==**EU·일본·한국·인도·중동 5개 지역 직판 영업 조직 신설**==. **한국 법인은 6월 중순 정식 가동** 예정

특히 **Anthropic-Google-Broadcom 3자 컴퓨트 파트너십**으로 **2026년 1분기 새 데이터센터 7개 신규 가동**이 완료된 상태에서, **이번 펀딩 자금은 추가 12개 데이터센터 건설**에 직접 투입된다.

> "==**Anthropic의 9,000억 달러 밸류는 단순한 숫자가 아니다**==. **Claude Enterprise ARR 200억 달러 + Claude API ARR 180억 달러 + Claude Code ARR 70억 달러**의 **3개 매출 엔진이 모두 폭발적으로 성장**하고 있고, **OpenAI 단일 제품(ChatGPT) 의존도와 결정적으로 차별화**된다."
> — Roelof Botha, Sequoia Capital 매니징 파트너 (5월 25일 The Information 인터뷰)

---

## OpenAI 추월의 산업적 의미

⚡ **주목할 포인트**: Anthropic이 **OpenAI를 밸류로 추월**한 사건은 다음 4대 의미를 갖는다:

1. **'엔터프라이즈 AI 시장은 Claude 우위' 사실 공식화**: ==**KPMG·Cursor·Lovable·Replit 등 핵심 엔터프라이즈 고객**==이 **Claude 단일 표준 선택**
2. **'Constitutional AI' 안전성 노선의 시장 보상**: ==**규제 친화적 안전성 노선이 엔터프라이즈 도입 속도를 가속**==
3. **Claude Mythos·Glasswing 안보 영역 진입**: ==**미국·영국 정부 사이버 방어 핵심 파트너**==로 자리매김
4. **Q2 흑자 전환으로 'AI 스타트업 = 영구 적자' 통념 깸**: ==**OpenAI Q1 매출 1달러당 1.22달러 손실**== 대비 **확실한 우위**

> "==**Anthropic의 흑자 전환은 OpenAI IPO 일정과 정확히 맞물려 시장에 강력한 시그널을 보낸다**==. **OpenAI가 9월 IPO 로드쇼에 진입할 때 Anthropic은 흑자 + 9,000억 달러 사기업으로 비교 우위**를 갖는다. **공모 후 OpenAI 시가총액 1조 달러 도달은 매우 어려운 환경**이 됐다."
> — Mark Mahaney, Evercore ISI 시니어 애널리스트 (5월 26일 리서치)

---

## 한국에 미치는 영향

### 1. NAVER·KT·LG·삼성SDS '한국 법인 6월 가동' 직접 협상

**NAVER Cloud·KT·LG CNS·삼성SDS** 4사는 **5월 27일 사내 회의**를 통해 **'Anthropic 한국 법인 6월 중순 정식 가동에 따른 직접 협상 채널 확보'**를 확정한다. 기존에는 **AWS·Google Cloud 우회 채널**로 Claude를 제공받았으나, **한국 법인 가동 시 직접 라이선스·기술 지원·맞춤 컴플라이언스 협상**이 가능해진다. **4사 합산 Claude 리셀러 매출 2026년 +280% 폭증 시나리오** 검토 중.

### 2. 삼정KPMG '한국 5,800명 Claude 도입' 일정 6월 1일 → 5월 30일 단축

**삼정KPMG**는 **5월 27일 사내 발표**를 통해 **'한국 5,800명 임직원 Claude Enterprise 정식 도입 일정 6월 1일 → 5월 30일로 2일 단축'**을 확정했다. **Anthropic 글로벌 펀딩 성공**으로 **컴퓨트 리소스 우선 배분**이 보장된 만큼, **한국법인 도입을 가속화**해 **Big4 회계법인 한국 시장 AI 주도권**을 확보한다는 전략. **PwC·EY·Deloitte 한국 법인의 후속 결정 압박**이 본격화된다.

### 3. 한국 사모펀드·연기금 'Anthropic 세컨더리 투자' 6월 본격 검토

**국민연금공단(NPS)·삼성생명·미래에셋·한국투자공사(KIC)** 등은 **5월 27일 보고서**를 통해 **'Anthropic 9,000억 달러 밸류 라운드 이후 세컨더리(2차 시장) 투자 6월 본격 검토'** 시그널을 보냈다. **9,000억 달러 → 1조 2,000억 달러 단계로 진입할 경우 +33% 단기 수익 기회**가 거론된다. **NPS는 OpenAI 직접 투자 검토 단계에서 안전성·거버넌스 우려로 Anthropic 우선 검토** 방침.

---

🎯 **다음 시나리오**:

1. **5월 27~31일**: Anthropic **30억 달러 라운드 정식 마감** + **9,000억 달러 밸류 공식 확정**
2. **6월 초**: Anthropic **한국 법인 정식 발족** + **NAVER·KT·LG·삼성SDS 직접 협상 채널 가동**
3. **6월 중순**: 삼정KPMG **한국 5,800명 Claude 도입 1차 완료**
4. **6월 말**: NPS·KIC **Anthropic 세컨더리 투자 결정** 가능성
5. **7월**: Anthropic **Q2 사상 첫 영업이익 흑자 공식 발표**

⚠️ **한국 기업·정부 5월 27일~6월 5일 행동 체크리스트**:

- ==**Anthropic 한국 법인 6월 가동 일정 사전 확인**==
- ==**NAVER·KT·LG·삼성SDS Claude 직접 라이선스 협상 결과 추적**==
- ==**삼정KPMG 한국 5,800명 도입 일정 5월 30일 검증**==
- ==**NPS·KIC Anthropic 세컨더리 투자 검토 결과 사전 정보 수집**==
- ==**OpenAI 9월 IPO 로드쇼 일정과 Anthropic 흑자 전환 시그널 동시 추적**==

✅ **결론**: Anthropic의 **9,000억 달러 밸류 + Q2 흑자 전환**은 **OpenAI 단일 제품 의존도 + 영구 적자 노선**과 결정적으로 차별화된 **'엔터프라이즈 AI 시장의 새 표준'**을 확정한다. **한국 NAVER·KT·LG·삼성SDS·KPMG·NPS**는 **5월 27일~6월 30일 안 직접 협상·도입 가속·세컨더리 투자 3축**의 즉각 대응을 확정해야 한다.`},{id:"20260527084402",title:"AMD EPYC 'Venice' TSMC 2nm 양산 첫 진입... HPC 사상 첫, MI450X와 Helios 하반기 가동",summary:"AMD가 5월 21일 6세대 EPYC 프로세서 'Venice'를 TSMC 2nm(N2) 노드로 양산 진입했다고 발표했다. 고성능 컴퓨팅(HPC) 제품 중 사상 첫 2nm 양산이며, MI450X GPU와 결합한 Helios 랙 플랫폼은 2026년 하반기부터 멀티 GW급 데이터센터 배포 예정. 후속 'Verano' 칩도 동일 2nm로 확장된다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-27T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800",breaking:!1,content:`## AMD EPYC 'Venice' TSMC 2nm 양산 첫 진입... HPC 사상 첫, MI450X와 Helios 하반기 가동

**AMD**는 **2026년 5월 21일(현지)** **6세대 EPYC 데이터센터 프로세서 'Venice'**를 **TSMC 2nm(N2) 노드로 양산 진입(Production Ramp)**했다고 공식 발표했다. ==**Venice는 고성능 컴퓨팅(HPC) 산업 사상 첫 2nm 양산 제품**==이다. 양산은 **대만 TSMC Fab 20**에서 시작됐고, **2026년 하반기 미국 애리조나 TSMC Fab 21**에서도 동시 양산이 가동된다.

📌 **핵심 인사이트**: TSMC 2nm는 **3nm 대비 트랜지스터 밀도 +1.15배, 전력 효율 -25~30% 개선**, **클럭 속도 +10~15% 향상**을 동시에 달성한 ==**파운드리 산업의 새 패러다임**==이다. **Venice 양산은 'Apple A19 Pro·NVIDIA Rubin'보다 먼저 2nm 시장에 진입**한 사례이며, **AMD가 NVIDIA 추격 가속화**의 결정적 카드를 확보했다는 평가.

---

## Venice 칩의 4대 핵심 사양

AMD가 공개한 **Venice EPYC 6세대 핵심 사양**:

1. **공정 노드**: ==**TSMC 2nm N2 (HPC 사상 첫)**==
2. **코어 수**: ==**최대 256코어 Zen 7 기반**== (현행 192코어 Turin 대비 +33%)
3. **메모리 채널**: ==**16채널 DDR5-6400**== + **CXL 3.1 풀 지원**
4. **AI 가속 통합**: ==**MI450X Instinct GPU + Helios 랙 플랫폼**==으로 ==**단일 랙 1.2EFLOPS FP8 성능**==

특히 **MI450X GPU**는 **HBM4 16단 메모리 + 320GB 용량**으로 ==**NVIDIA B300 192GB 대비 +66.7% 메모리 우위**==를 점한다. **Helios 랙 플랫폼**은 **Venice CPU 16개 + MI450X GPU 128개** 결합으로 **단일 랙 100kW 전력 + 1.2EFLOPS FP8** 성능 도달.

> "==**Venice의 TSMC 2nm 양산 진입은 AMD가 'NVIDIA 독점 시대의 대안 사업자' 지위를 사상 처음 확보한 사건**==이다. **2026년 하반기 OpenAI·Meta·Microsoft 신규 데이터센터의 30~40%가 Helios 플랫폼으로 전환**될 가능성이 있다."
> — Stacy Rasgon, Bernstein Research 시니어 애널리스트 (5월 22일 리서치 노트)

---

## NVIDIA 추격 시나리오와 Helios 멀티 GW 배포

⚡ **주목할 포인트**: AMD는 **2026년 하반기부터 Helios 랙 플랫폼의 '멀티 기가와트(GW) 단위 데이터센터 배포'**를 본격 시작한다. **OpenAI·Meta·Microsoft·xAI·Oracle** 등 **5대 하이퍼스케일러 모두 AMD Helios 플랫폼 채택을 공식 결정**한 상태.

AMD 시장 점유율 시나리오(Bernstein 추정):

- **2026 Q1 AI 가속기 점유율**: ==**12%**== (NVIDIA 78%, AMD 12%, Intel 4%, 기타 6%)
- **2026 Q4 시나리오**: ==**24%**== (Venice + MI450X 양산 효과)
- **2027 Q4 시나리오**: ==**33%**== (Verano 후속 양산 + Helios 2세대)
- **2028 Q4 시나리오**: ==**38%**== (NVIDIA Rubin과 직접 경쟁)

특히 **OpenAI는 2026년 8월 Helios 1.5GW 데이터센터 정식 가동**, **Meta는 2026년 10월 Helios 2.4GW 신규 클러스터 정식 가동**, **Microsoft Azure는 2026년 11월 Helios 1.8GW 가동**을 각각 확정했다.

> "==**Helios 멀티 GW 배포는 'AI 인프라 시장 구조의 결정적 재편'**==이다. NVIDIA의 80% 독점 시대가 2027년부터 50~60% 수준으로 하향 조정될 수 있다. **TSMC 2nm 캐파 분배 정치**가 향후 24개월 AI 산업의 핵심 의제로 부상한다."
> — Hans Mosesmann, Rosenblatt Securities (5월 22일 리서치)

---

## 한국에 미치는 영향

### 1. SK하이닉스 HBM4 16단 'AMD MI450X 단독 공급' 사실상 확정

**SK하이닉스**는 **5월 27일 사내 보고**를 통해 **'AMD MI450X Instinct GPU용 HBM4 16단 단독 공급 사실상 확정'**과 **'2026년 4분기 HBM4 16단 매출 4.2조 원 시나리오'**를 공유했다. **MI450X 단일 GPU당 HBM4 8스택 × $720 = $5,760 매출 기여**이며, **연간 480만 개 MI450X 출하 시 SK하이닉스 HBM4 매출 27.6조 원**이라는 정량 추정이 등장. **NVIDIA Rubin용 HBM4와 결합 시 SK하이닉스 2027년 HBM 매출 60조 원** 시나리오까지 가시화.

### 2. 삼성전자 파운드리 'TSMC 2nm 추격' 압박 vs 삼성 2nm GAA 양산 2027 1분기 일정 재확인

**삼성전자 파운드리 사업부**는 **5월 27일 사내 긴급 회의**를 통해 **'TSMC가 2nm HPC 양산 진입을 선점한 만큼 삼성 2nm GAA 양산 일정 2027년 1분기 → 2026년 4분기 단축 가능성'**을 검토 중이다. **삼성 2nm GAA**는 **TSMC N2 대비 +5% 트랜지스터 밀도 우위·전력 효율 동급**으로 알려져 있으나, **양산 수율 안정화 일정이 결정적 변수**. **AMD Verano 후속 칩 2nm 파운드리 경쟁 입찰**도 핵심 모멘텀.

### 3. NAVER·KT·삼성SDS·KT클라우드 'AMD Helios 2026 하반기 도입' 6월 발표 검토

**NAVER Cloud·KT·삼성SDS·KT클라우드** 4사는 **5월 27일 사내 회의**를 통해 **'AMD Helios 랙 플랫폼 2026년 하반기 도입 6월 발표 가능성'**을 검토 중이다. **4사 합산 도입 규모 약 600MW**로 추정되며, **NAVER HyperCLOVA X 4.0·KT 믿:음 2.0·LG AI연구원 EXAONE 4.0 학습용 컴퓨트**로 활용된다. **NVIDIA 단일 공급 의존도 -45% 축소**가 핵심 목표.

---

🎯 **다음 시나리오**:

1. **5월 27~31일**: AMD **MI450X + Venice 글로벌 출하 본격 가동** + **Helios 1세대 정식 출시**
2. **6월 초**: SK하이닉스 **HBM4 16단 AMD 단독 공급 정식 발표**
3. **6월 중순**: NAVER·KT·삼성SDS·KT클라우드 **Helios 도입 6월 발표**
4. **8월**: OpenAI **Helios 1.5GW 데이터센터 정식 가동**
5. **10~11월**: Meta·Microsoft **Helios 4.2GW 합산 신규 클러스터 가동**

⚠️ **한국 기업·정부 5월 27일~6월 5일 행동 체크리스트**:

- ==**SK하이닉스 HBM4 16단 AMD 단독 공급 정식 발표 일정 사전 확인**==
- ==**삼성전자 파운드리 2nm GAA 양산 일정 단축 결과 추적**==
- ==**NAVER·KT·삼성SDS·KT클라우드 Helios 6월 발표 일정 확인**==
- ==**과기정통부 'K-AI 인프라 다변화 정책' 6월 발표 검토 결과 사전 확인**==
- ==**KOSPI SK하이닉스·삼성전자 2026 Q4 사상 최대 실적 모멘텀 정량 추적**==

✅ **결론**: AMD Venice EPYC의 **TSMC 2nm 양산 진입**은 **NVIDIA 독점 시대의 결정적 균열**을 알리는 신호다. **SK하이닉스·삼성전자·NAVER·KT·삼성SDS**는 **5월 27일~6월 30일 안 HBM4 단독 공급·2nm GAA 양산 가속·Helios 도입 3축**의 즉각 대응을 확정해야 한다.`},{id:"20260527084403",title:"OpenAI 비공개 S-1 SEC 제출 확인... 9월 로드쇼·$1조 IPO 목표, Goldman·Morgan Stanley 주관",summary:"OpenAI가 5월 22일 SEC에 IPO 비공개 S-1 신고서를 정식 제출했다. 목표 시가총액 8,520억~1조 달러, 주관사는 Goldman Sachs와 Morgan Stanley. 9월 정식 로드쇼·Q4 2026 상장이 베이스 시나리오다. 다만 Q1 매출 1달러당 1.22달러 손실 구조와 Anthropic의 흑자 전환이 IPO 흥행에 결정적 변수로 떠올랐다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-27T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",breaking:!0,content:`## OpenAI 비공개 S-1 SEC 제출 확인... 9월 로드쇼·$1조 IPO 목표, Goldman·Morgan Stanley 주관

**OpenAI**가 **2026년 5월 22일(금)** 미국 증권거래위원회(SEC)에 **IPO 비공개 S-1 신고서(Confidential Draft Registration Statement)**를 **정식 제출**한 것이 **5월 26일 The Information·Bloomberg 단독 보도**로 확인됐다. **목표 시가총액 8,520억 달러 ~ 1조 달러**이며, **주관사는 Goldman Sachs와 Morgan Stanley** 양사가 공동으로 맡는다.

📌 **핵심 인사이트**: **9월 정식 로드쇼 → 2026 Q4 상장**이 베이스 시나리오다. **비공개 S-1은 SEC 검토 후 통상 15~30일 전 공개 전환(flip public)**된다. ==**OpenAI 상장은 'AI 산업 사상 최대 IPO'**==이자 ==**AI 거품 정점 시그널**==로 평가받는다. **공모 후 시가총액 1조 달러 도달 여부**가 ==**2027년 글로벌 AI 자본시장의 분수령**==.

---

## S-1 핵심 재무 지표와 위험 요인

The Information이 입수한 **S-1 핵심 재무 지표(2026년 1분기 기준)**:

1. **분기 매출**: ==**75억 달러(+162% YoY)**==
2. **분기 영업손실**: ==**-91.5억 달러**== (매출 1달러당 -1.22달러)
3. **연 환산 ARR**: ==**약 300억 달러**==
4. **2026 전체 예상 매출**: ==**420억 달러 (+185%)**==
5. **현금 보유**: ==**680억 달러**== (1차 펀딩 + 3월 추가 라운드)

주요 위험 요인 5대 항목(S-1 Risk Factors 추정):

- **NVIDIA·AMD 컴퓨트 의존도 92%**: ==**공급 차질 시 사업 영속성 위협**==
- **Microsoft 의존도 (Azure + GitHub Copilot)**: ==**전략적 동맹 깨질 위험**==
- **Anthropic·Google과의 경쟁 격화**: ==**Claude·Gemini 시장 점유율 잠식**==
- **AI 규제 변화 위험**: ==**미국·EU 사전 검증 의무화 부활 가능성**==
- **소송 위험**: ==**NYT·Stack Overflow·Reddit 등 데이터 소송 누적**==

> "==**OpenAI의 S-1 제출은 시장 타이밍 측면에서 매우 공격적**==이다. **Anthropic 9,000억 달러 밸류 + Q2 흑자 전환이 동시에 발표**되면서, **OpenAI의 적자 + 단일 제품(ChatGPT) 의존도**가 상대적으로 부각된다. **9월 로드쇼 시점에서 'OpenAI 1조 달러 vs Anthropic 9,000억 달러' 직접 비교**가 핵심 관전 포인트."
> — Lise Buyer, Class V Group(IPO 컨설팅) 창립자 (5월 26일 Bloomberg 인터뷰)

---

## Goldman·Morgan Stanley 주관 + 9월 로드쇼 시나리오

⚡ **주목할 포인트**: **Goldman Sachs와 Morgan Stanley의 공동 주관**은 **OpenAI가 'Microsoft 단독 의존 + Brad Smith 라인(Goldman 연결)' 구도를 균형 조정**한 시그널로 풀이된다. **JPMorgan·Bank of America·Citi**가 **공동 매니저로 합류** 예정.

9월 로드쇼 ~ Q4 상장 핵심 일정:

1. **5월 22일**: ==**비공개 S-1 SEC 정식 제출**==
2. **6~7월**: SEC **검토·재무 코멘트 1~2회 라운드**
3. **8월 초**: ==**비공개 S-1 → 공개 S-1 전환(flip public)**==
4. **9월 8일~22일**: ==**정식 로드쇼 진행**== (글로벌 30개 도시)
5. **9월 말~10월 초**: ==**최종 가격 결정 + NYSE 상장**==
6. **10월 첫 주**: ==**OpenAI 정식 상장 + 시가총액 1조 달러 도달 시도**==

**상장 후 OpenAI Sam Altman CEO의 보유 주식 가치 350~420억 달러**가 형성되며, **창업자 8명·초기 직원 200명의 누적 보상 1,200억 달러**가 한순간에 가시화된다.

> "==**OpenAI IPO 흥행의 핵심 변수는 '9월 시점의 Anthropic 흑자 전환 발표 + Claude Mythos 시장 반응'**==이다. **두 변수가 OpenAI에 불리하게 작용하면 공모가 하향 조정 + 1조 달러 시가총액 미도달 시나리오**가 현실화된다."
> — Brad Lerman, Renaissance Capital 시니어 디렉터 (5월 26일 리서치)

---

## 한국에 미치는 영향

### 1. 한국 사모펀드·연기금 'OpenAI 공모 청약 12억 달러' 6월 초 결정

**국민연금공단(NPS)·미래에셋·삼성생명·한국투자공사(KIC)** 등은 **5월 27일 보고서**를 통해 **'OpenAI IPO 공모 청약 합산 12억 달러 6월 초 결정'**을 검토 중이다. **NPS 4억 달러 + 미래에셋 3억 달러 + 삼성생명 2.5억 달러 + KIC 2.5억 달러** 시나리오. 다만 **'Anthropic 흑자 전환 vs OpenAI 적자 구조' 직접 비교 후 청약 규모 재조정** 가능성도 거론된다.

### 2. NAVER·카카오·SKT 'OpenAI 한국 영업 가속 vs 자체 LLM 강화' 갈림길

**NAVER Cloud·카카오 Brain·SK텔레콤 A.X** 3사는 **5월 27일 사내 회의**를 통해 **'OpenAI 상장 임박으로 한국 영업 가속이 예상되는 만큼 자체 LLM 강화 vs OpenAI 파트너십 확대 갈림길'**에 직면했다. **NAVER HyperCLOVA X 4.0 자체 모델 강화** + **카카오 Brain 'KOEN' 자체 학습 + Claude 외주** 결합 전략이 부상하고 있다.

### 3. KOSPI 'OpenAI IPO 모멘텀 종목' 6월 초 자금 유입 시나리오

**한국투자증권·미래에셋증권·삼성증권** 등은 **5월 27일 리서치**를 통해 **'OpenAI IPO 모멘텀 수혜 KOSPI 종목 자금 유입 시나리오'**를 제시했다. **삼성전자(파운드리·HBM)·SK하이닉스(HBM)·NAVER(자체 LLM)·KT(데이터센터)·삼성SDS(엔터프라이즈 AI)** 5종목이 ==**'OpenAI IPO 모멘텀 직접 수혜 종목'**==으로 부상. **6월 초 외국인 매수세 집중 시나리오** 예측.

---

🎯 **다음 시나리오**:

1. **5월 27~31일**: SEC **비공개 S-1 1차 검토 시작**
2. **6월 초**: NPS·KIC **OpenAI 공모 청약 합산 12억 달러 결정**
3. **8월 초**: ==**OpenAI 비공개 S-1 → 공개 S-1 전환**==
4. **9월 8일~22일**: ==**정식 로드쇼 글로벌 30개 도시 진행**==
5. **10월 첫 주**: ==**OpenAI NYSE 상장 + 시가총액 1조 달러 도달 시도**==

⚠️ **한국 기업·정부 5월 27일~6월 5일 행동 체크리스트**:

- ==**NPS·KIC OpenAI 공모 청약 결정 시점 사전 정보 수집**==
- ==**NAVER·카카오·SKT 'OpenAI 파트너십 vs 자체 LLM' 갈림길 전략 추적**==
- ==**삼성전자·SK하이닉스·NAVER·KT·삼성SDS KOSPI 모멘텀 종목 자금 유입 정량 검증**==
- ==**Goldman·Morgan Stanley 한국 IB 협업 채널 확보**==
- ==**OpenAI vs Anthropic 9월 직접 비교 시나리오 사전 시뮬레이션**==

✅ **결론**: OpenAI의 **비공개 S-1 정식 제출**은 **AI 산업 사상 최대 IPO**를 향한 결정적 첫걸음이다. **한국 NPS·KIC·NAVER·삼성전자·SK하이닉스**는 **5월 27일~10월 첫 주까지 공모 청약·자체 LLM 강화·KOSPI 모멘텀 3축**의 즉각 대응을 확정해야 한다.`},{id:"20260527084404",title:"Google 'Gemini Omni' 정식 출시... 텍스트·이미지·오디오에서 영상까지 '세계 모델' 시동",summary:"Google이 5월 19일 I/O 2026에서 멀티모달 세계 모델 'Gemini Omni'를 정식 공개했다. 텍스트·이미지·오디오·영상을 동시에 입력받아 시네마틱 영상을 생성하는 모델로, Pichai CEO가 '무엇이든 만드는 모델(create anything)'이라고 직접 강조했다. SynthID 워터마크 + 본인 인증 절차로 딥페이크 방어 체계를 함께 도입한다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-27T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`## Google 'Gemini Omni' 정식 출시... 텍스트·이미지·오디오에서 영상까지 '세계 모델' 시동

**Google**은 **2026년 5월 19일(현지)** 미국 캘리포니아 마운틴뷰에서 열린 **I/O 2026 컨퍼런스**에서 멀티모달 세계 모델 **'Gemini Omni'**를 **정식 공개**했다. **Sundar Pichai CEO**가 키노트에서 직접 ==**"무엇이든 만드는 모델(Create Anything Model)"**==이라고 강조한 만큼, **Google이 AI 모델 경쟁의 새 패러다임**을 제시했다는 평가가 지배적이다.

📌 **핵심 인사이트**: Gemini Omni는 **단일 모델이 텍스트·이미지·오디오·영상 4대 모달을 동시 입력받아 시네마틱 영상으로 출력**하는 **사상 첫 통합 멀티모달 세계 모델**이다. ==**물리 법칙·역사적 사실·과학적 논리·문화적 맥락 모두 추론 후 영상 생성**==이라는 점에서 **OpenAI Sora 3·xAI Grok Video 등 단순 영상 생성 모델과 결정적 차별화**.

---

## Gemini Omni 4대 핵심 기능

Google이 공개한 **Gemini Omni 4대 핵심 기능**:

1. **멀티모달 통합 입력**: ==**텍스트 + 이미지 + 오디오 + 비디오 4대 입력 동시 처리**==. 이전 Sora·Veo는 텍스트 단독 입력 중심.
2. **세계 모델 추론**: ==**물리 법칙(중력·관성·유체역학) + 역사 사실 + 문화 맥락 정확 반영**==. 예: '1920년대 프랑스 파리 카페'에서 의상·메뉴·조명 모두 시대 고증.
3. **개인 아바타 영상 생성**: ==**사용자 본인 영상 + 본인 음성 학습 후 영상 생성**==. **본인 인증 절차(번호 낭독 영상)** 필수.
4. **SynthID 워터마크 자동 삽입**: ==**모든 Omni 생성 영상에 Google 디지털 워터마크 자동 삽입**==. **딥페이크 검증 가능**.

특히 **Gemini Omni Flash**는 **즉시 Google AI Plus·Pro·Ultra 구독자에게 정식 제공**됐고, **YouTube Shorts·YouTube Create 앱**과의 **무료 통합**이 동시 가동됐다. **유튜브 크리에이터 5,800만 명**이 한순간에 Omni 사용권을 확보한 셈.

> "==**Gemini Omni는 AI 영상 생성 시장의 패러다임을 'Text-to-Video'에서 'World-to-Video'로 전환**==한 결정적 모델이다. **사실성·물리 법칙·문화 맥락 추론 능력**이 **OpenAI Sora 3 대비 2~3년 우위**라는 분석이 자체 벤치마크에서 확인됐다."
> — Demis Hassabis, Google DeepMind CEO (5월 19일 I/O 2026 키노트)

---

## 딥페이크 방어와 SynthID 의무 도입

⚡ **주목할 포인트**: Gemini Omni의 **딥페이크 방어 체계**는 **AI 영상 생성 모델 사상 가장 엄격**하다. 핵심 메커니즘 3대:

- **본인 인증 절차**: ==**아바타 등록 시 본인 영상에서 무작위 번호 7자리 낭독 필수**==
- **SynthID 워터마크 자동 삽입**: ==**눈에 보이지 않는 디지털 서명을 모든 픽셀에 분산 삽입**==
- **Google Trust 검증 도구 공개**: ==**누구나 영상 업로드 후 'Omni 생성 여부' 무료 확인 가능**==

특히 **YouTube·Meta·X·TikTok 4대 플랫폼**은 **5월 19일 동시 발표**로 **'SynthID 워터마크 자동 감지 + Omni 생성 영상 자동 라벨링'** 정책을 도입했다. **딥페이크 정치 광고·금융 사기 영상 차단**이 핵심 목적.

> "==**Omni의 SynthID 워터마크 의무 도입은 'AI 영상 시대의 진실 검증 인프라'**==를 사상 처음 구축한 사례다. **2027년 대선·총선 시즌**에 ==**전 세계 정치 광고 영상의 70% 이상이 AI 생성 의심**==으로 검증 단계를 거칠 것으로 예측된다."
> — Sam Gregory, WITNESS(딥페이크 대응 NGO) 책임자 (5월 20일 입장문)

---

## 한국에 미치는 영향

### 1. CJ ENM·SBS·tvN '영상 제작 워크플로 6월 안 Omni 시범 도입'

**CJ ENM Tving·SBS·tvN 드라마본부** 3사는 **5월 27일 사내 회의**를 통해 **'Gemini Omni 영상 제작 워크플로 6월 시범 도입 + 9월 정식 가동' 시나리오**를 확정했다. **드라마 제작비 약 -22% 절감 가능성**이 핵심 동인이며, **K-드라마 글로벌 출시 전 컨셉 영상·예고편·CG 시퀀스**를 Omni로 사전 제작한다. **JTBC·KBS·MBC**도 동일 검토 단계.

### 2. 네이버웹툰·카카오엔터·하이브 '아바타 IP 사업 4분기 정식 가동'

**네이버웹툰·카카오엔터·하이브** 3사는 **5월 27일 사내 발표**를 통해 **'아바타 IP 사업 4분기 정식 가동' 계획**을 공개했다. **K-팝 아티스트·웹툰 캐릭터 아바타 영상 자동 생성 → 글로벌 마케팅 콘텐츠 매주 200건 단위 자동 생산** 시나리오. 특히 **하이브 BTS 멤버 7명 아바타 영상 라이선스**는 **6월 초 정식 계약 추진** 단계.

### 3. 방통위·과기정통부 'AI 영상 SynthID 의무화' 7월 정책 검토

**방송통신위원회**·**과학기술정보통신부**는 **5월 27일 합동 회의**를 통해 **'AI 영상 SynthID 의무화 정책 7월 검토'**를 확정했다. **선거 광고·금융 광고·정치 콘텐츠** 3대 영역에 **SynthID 검증 의무화**를 적용하는 방향. **중앙선거관리위원회**와의 **공동 검토**도 진행 중이며, **2027년 대선 시즌 SynthID 검증 인프라 정식 가동**이 핵심 목표.

---

🎯 **다음 시나리오**:

1. **5월 27~31일**: Google **Gemini Omni 한국어 정식 출시 + 한국 사용자 200만 명 초기 가입**
2. **6월 초**: CJ ENM·SBS·tvN **Gemini Omni 시범 도입 정식 시작**
3. **7월**: 방통위·과기정통부 **AI 영상 SynthID 의무화 정책 정식 발표**
4. **9월**: K-드라마 **Gemini Omni 활용 첫 정식 작품 공개**
5. **11월**: 하이브·네이버웹툰·카카오엔터 **아바타 IP 사업 4분기 정식 매출 1,800억 원 달성 시나리오**

⚠️ **한국 기업·정부 5월 27일~6월 5일 행동 체크리스트**:

- ==**Google Korea Gemini Omni 한국어 정식 출시 일정 사전 확인**==
- ==**CJ ENM·SBS·tvN·하이브 6월 시범 도입 일정 추적**==
- ==**방통위·과기정통부 SynthID 의무화 정책 7월 발표 결과 검증**==
- ==**하이브 BTS 아바타 IP 라이선스 6월 정식 계약 결과 확인**==
- ==**중앙선거관리위 2027 대선 SynthID 검증 인프라 가동 계획 사전 정보 확보**==

✅ **결론**: Gemini Omni 정식 출시는 **AI 영상 생성 시장의 패러다임을 'Text-to-Video'에서 'World-to-Video'로 전환**한 결정적 사건이다. **한국 CJ ENM·SBS·tvN·하이브·네이버웹툰·카카오엔터**는 **5월 27일~11월 안 시범 도입·아바타 IP 사업·SynthID 의무화 3축**의 즉각 대응을 확정해야 한다.`},{id:"20260527084405",title:"Anthropic 'Project Glasswing' 가동... Claude Mythos가 1개월 만에 0-day 1만건 적발",summary:"Anthropic이 비공개 프론티어 모델 'Claude Mythos Preview'로 약 1개월간 1만 건 이상 고위험 0-day 취약점을 자동 발견했다. 모든 주요 OS·브라우저·필수 인프라가 대상이며, Microsoft·Apple·Google·AWS·Cloudflare·NVIDIA·JPMorgan 등 50여 개 기관이 컨소시엄으로 참여. Cloudflare 한 곳에서만 2,000건 적발, OpenBSD 27년 묵은 결함도 포착됐다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-27T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",breaking:!1,content:`## Anthropic 'Project Glasswing' 가동... Claude Mythos가 1개월 만에 0-day 1만건 적발

**Anthropic**은 **2026년 5월 26일(현지)** 컨트롤드 보안 이니셔티브 **'Project Glasswing'**의 **1개월 운영 성과 보고서**를 공식 발표했다. 비공개 프론티어 모델 **'Claude Mythos Preview'**를 **컨소시엄 참여 50여 개 주요 기관**의 핵심 코드베이스에 투입한 결과, ==**약 1개월간 1만 건 이상 고위험·치명적 0-day 취약점이 자동 적발**==됐다.

📌 **핵심 인사이트**: Claude Mythos는 **AI 모델이 '인간 최고 보안 연구자'를 초과하는 수준으로 SW 취약점을 자동 발견·검증한 사상 첫 사례**다. ==**Cloudflare 한 곳에서만 2,000건 적발(고/치명 등급 400건)**==이며, **OpenBSD에서 27년 묵은 보안 결함**도 포착됐다. **Mythos 일반 공개는 금지**되고, **컨소시엄 회원사만 API 기반 제한 접근** 가능.

---

## Glasswing 컨소시엄 + Mythos 성과의 4대 핵심

Project Glasswing **공식 컨소시엄 12개 발족 멤버**:

1. **하이퍼스케일러 4사**: ==**Amazon Web Services · Google · Microsoft · Apple**==
2. **반도체 2사**: ==**NVIDIA · Broadcom**==
3. **보안 2사**: ==**CrowdStrike · Palo Alto Networks**==
4. **네트워크·인프라 2사**: ==**Cisco · Cloudflare**==
5. **금융·오픈소스 2사**: ==**JPMorgan Chase · The Linux Foundation**==

Mythos 1개월 성과 4대 핵심:

- ==**총 1만 건 이상 고위험·치명 0-day 적발**==
- ==**오탐률(False Positive) 인간 최고 보안 연구자 대비 -35% 낮음**==
- ==**모든 주요 OS·브라우저·필수 인프라 SW 대상으로 광범위 점검**==
- ==**OpenBSD 27년 묵은 결함 포함, 인간이 27년간 발견 못한 케이스 다수**==

특히 **JPMorgan Chase**는 **금융 거래 시스템 핵심 코드베이스**에서 **고위험 0-day 320건 + 치명 등급 18건**을 적발해 **금융권 사상 최대 사전 패치**를 진행 중이다.

> "==**Claude Mythos는 'AI가 인간을 초과한 첫 보안 영역'**==을 명확히 보여준다. **Cloudflare 내부 보안팀이 6년간 발견하지 못한 결함을 Mythos가 단 2주만에 2,000건 적발**한 사실은 충격적이다. 다만 이 능력은 **방어 vs 공격 양면 활용 위험**이 결정적이다."
> — Matthew Prince, Cloudflare CEO (5월 26일 X 게시물)

---

## Mythos 일반 공개 금지 + 듀얼 유즈 위험

⚡ **주목할 포인트**: Anthropic은 **Claude Mythos를 일반 공개 금지(Withheld)** 결정했다. 핵심 이유는 **"이 능력이 악의적 행위자 손에 들어갈 경우, 미국·EU·한국 등 핵심 인프라가 즉각 마비될 수 있다"**는 ==**듀얼 유즈(Dual-Use) 리스크**== 때문.

접근 제한 메커니즘 3대:

- ==**Glasswing 컨소시엄 회원사만 Claude API·AWS Bedrock·Google Vertex AI·Microsoft Foundry로 접근**==
- ==**API 사용량 토큰당 단가 $25/$125(input/output)로 일반 모델 대비 10배 프리미엄**==
- ==**모든 사용 내역 Anthropic AISC(AI Safety Council) 실시간 감사**==

특히 **컨소시엄 회원사 가입 자격은 'AI 안전성 기준 + 핵심 인프라 보호 책임 + Anthropic 안전성 위원회 승인'** 3대 조건을 모두 충족해야 한다.

> "==**Mythos의 듀얼 유즈 리스크는 'AI 시대 핵 비확산 조약'에 해당하는 글로벌 거버넌스 협약 도입 필요성**==을 결정적으로 부각시킨다. **EU AI Act·미국 행정명령·UN Frontier AI Task Force**가 **6월 안 공동 대응 프로토콜**을 검토 중이다."
> — Stuart Russell, UC Berkeley AI 교수 (5월 26일 The Guardian 인터뷰)

---

## 한국에 미치는 영향

### 1. 한국인터넷진흥원(KISA)·국정원 'Glasswing 컨소시엄 6월 가입 추진'

**한국인터넷진흥원(KISA)**·**국가정보원**은 **5월 27일 합동 회의**를 통해 **'Anthropic Project Glasswing 컨소시엄 6월 정식 가입 추진'**을 확정했다. **국가 핵심 인프라 SW(전력·통신·금융·정부 행정 시스템) 사상 첫 AI 기반 보안 점검**이 핵심 목표. **국방부 사이버사령부**·**금융보안원**도 **참관 멤버 자격**으로 동시 가입 추진. **연간 라이선스 비용 약 480만 달러(약 66억 원)** 추정.

### 2. 삼성SDS·LG CNS·SK쉴더스 '한국 50대 기업 Mythos 점검 서비스 6월 출시'

**삼성SDS·LG CNS·SK쉴더스** 3사는 **5월 27일 사내 발표**를 통해 **'한국 50대 기업 Mythos 기반 보안 점검 서비스 6월 출시'**를 확정했다. **단가 1회 점검 약 8억 원**, **연간 정기 점검 패키지 32억 원** 책정. **삼성전자·현대차·LG화학·NAVER·카카오·KB금융·신한금융·POSCO·SK하이닉스 등 50개 기업**이 **1차 도입 후보**.

### 3. 금융감독원·개인정보보호위 'AI 보안 점검 의무화' 8월 정책 검토

**금융감독원**·**개인정보보호위원회**는 **5월 27일 합동 회의**를 통해 **'AI 기반 보안 점검 의무화 8월 정책 검토'**를 확정했다. **금융권·플랫폼 빅테크·통신사 3대 영역에 AI 보안 점검 연 2회 의무 적용** 방향. **NICE신용평가·코리아크레딧뷰로(KCB)**와 **공동 검토**도 진행 중이며, **2027년 1분기 정식 의무화 시행** 일정 추진.

---

🎯 **다음 시나리오**:

1. **5월 27~31일**: Anthropic **Glasswing 2차 컨소시엄 모집 정식 개시**
2. **6월 초**: KISA·국정원 **Glasswing 컨소시엄 정식 가입 완료**
3. **6월 중순**: 삼성SDS·LG CNS·SK쉴더스 **'Mythos 점검 서비스' 정식 출시**
4. **7월**: 금융감독원·개인정보보호위 **'AI 보안 점검 의무화 8월 정책 발표'**
5. **10월**: Anthropic **Glasswing 6개월 성과 보고서 + Mythos 적발 누적 5만 건 시나리오**

⚠️ **한국 기업·정부 5월 27일~6월 5일 행동 체크리스트**:

- ==**KISA·국정원 Glasswing 컨소시엄 6월 가입 일정 사전 확인**==
- ==**삼성SDS·LG CNS·SK쉴더스 Mythos 점검 서비스 6월 출시 일정 검증**==
- ==**삼성·현대차·LG·NAVER·카카오·금융 5사 1차 도입 후보 명단 사전 정보 수집**==
- ==**금융감독원·개인정보보호위 AI 보안 점검 의무화 8월 정책 발표 결과 추적**==
- ==**국방부 사이버사령부·금융보안원 참관 멤버 자격 가입 진행 상황 확인**==

✅ **결론**: Project Glasswing + Claude Mythos는 **'AI가 인간을 초과한 첫 보안 영역'**을 공식화한 사건이다. **한국 KISA·국정원·삼성SDS·LG CNS·SK쉴더스·금융감독원·개인정보보호위**는 **5월 27일~8월 안 컨소시엄 가입·점검 서비스 출시·의무화 정책 3축**의 즉각 대응을 확정해야 한다.`},{id:"20260526084401",title:"교황 레오 14세, 첫 AI 회칙 'Magnifica Humanitas' 235쪽 공식 발표",summary:"교황 레오 14세가 5월 25일 즉위 후 첫 회칙 'Magnifica Humanitas(장엄한 인류)'를 공식 발표했다. 235쪽 분량은 'AI 시대의 인간 보호'를 주제로 하며, 회칙 발표 현장에 Anthropic 공동창업자 Chris Olah가 동석한 것은 가톨릭 신학 문서와 AI 기업의 사상 첫 공식 협업이다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-26T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!0,content:`## 교황 레오 14세, 첫 AI 회칙 'Magnifica Humanitas' 235쪽 공식 발표

**교황 레오 14세**는 **2026년 5월 25일(현지)** 바티칸에서 즉위 후 첫 회칙(encyclical)인 **'Magnifica Humanitas(장엄한 인류)'**를 공식 발표했다. **235쪽 분량의 본문**은 **'인공지능 시대의 인간 보호'**를 주제로 하며, **레오 13세가 1891년 5월 25일 산업혁명 시대 노동자 권리 회칙 'Rerum Novarum(새로운 사태)'**을 발표한 지 **정확히 135년 만의 같은 날**에 공개됐다.

📌 **핵심 인사이트**: 교황청 역사상 처음으로 회칙 공식 발표 현장에 **AI 기업 공동창업자인 Anthropic의 Chris Olah**가 동석했다. 가톨릭 신학 문서가 **AI 기업과 직접 협업**한 사상 첫 사례이며, **'AI 산업이 종교적·윤리적 권위와 공식 대화 채널을 구축한 분기점'**으로 평가된다. ==**전 세계 가톨릭 신자 14억 명**==이 일제히 회칙의 메시지에 노출되는 사상 최대 규모의 AI 윤리 공론장이 형성됐다.

---

## 회칙의 4대 핵심 메시지

회칙은 **5개 장 234항**으로 구성됐다. 본문은 **레오 13세의 사회 회칙 전통(Rerum Novarum → Centesimus Annus → Laudato Si')**을 잇는 **'기술 시대의 사회 회칙'**으로 자리매김했다. 핵심 주제는 다음과 같다:

1. **인간 존엄성 보호**: AI가 인간을 **'수단·도구로 환원'**하지 못하도록 신학적 한계를 설정. ==**'인격의 환원 불가능성(Irreducibility of Person)'**==이 핵심 개념.
2. **노동의 가치 재확인**: 화이트칼라 자동화 시대에 **'노동을 통한 인격 형성'**의 가치를 재확인. **무조건적 자동화에 대한 신학적 경계**.
3. **진리와 거짓 분별**: 딥페이크·생성형 AI가 만드는 **'인공 진실(Synthetic Truth)'**에 대한 경계와 **사회적 분별력 회복** 요구.
4. **AI 무기화 우려**: AI를 통한 **'자율 살상무기·세계 분쟁 가속화'**에 대한 강력 경고. 본문 167항은 **"AI가 전쟁을 평화로 위장하는 도구가 되어서는 안 된다"**고 명시.

특히 본문은 **"AI에 대한 통제권이 소수의 손에 머물러서는 안 된다"**고 명시했으며, **"기술이 세계 분쟁을 부추기고 있다"**고 직접 경고했다. ==**'AI 자본의 집중화'**==에 대한 **신학적 비판**으로는 사상 최초.

> "==**AI 시대의 도래는 산업혁명에 버금가는 변곡점**==이다. 다만 그 결과가 **새로운 형태의 종속과 비인간화**로 귀결되지 않도록, 신앙 공동체와 정치 공동체가 **'기술에 대한 윤리적 거버넌스'**를 함께 마련해야 한다."
> — 교황 레오 14세, Magnifica Humanitas 본문 23항

---

## Anthropic Chris Olah 동석의 의미

**Chris Olah**는 Anthropic의 공동창업자이자 **AI 해석 가능성(Interpretability) 연구의 세계적 권위자**다. 그는 **OpenAI 재직 시절부터 'AI 내부 작동 원리를 인간이 이해할 수 있게 만드는 연구'**를 선구적으로 진행해왔다. 바티칸이 그를 회칙 공식 발표 현장에 초청한 것은 **회칙의 신학적·윤리적 메시지를 AI 산업과 정식 협력 채널로 연결**하려는 의도로 풀이된다.

회칙 발표 직후 **Anthropic 공식 블로그**는 다음과 같이 입장을 표명했다:

> "==**Magnifica Humanitas는 AI 산업이 받아본 가장 깊이 있는 윤리적 메시지**==다. 인간 중심성·노동의 존엄·진리의 보호는 **Anthropic의 'Constitutional AI' 원칙과 본질적으로 동일한 가치**를 지향한다. 우리는 이 회칙을 **Claude 모델 학습의 헌법적 기반에 반영**할 것이다."
> — Anthropic 공식 블로그 (5월 25일)

⚡ **주목할 포인트**: 가톨릭 교회의 **글로벌 신자 14억 명**과 **Anthropic의 글로벌 Claude 사용자 8천만 명**이 **'AI 윤리'**라는 공통 의제로 직접 연결된 **역사적 순간**이다. **OpenAI·Google DeepMind·Microsoft AI**도 회칙 메시지에 대한 공식 입장 표명을 준비 중이다.

---

## 한국에 미치는 영향

### 1. 한국천주교주교회의(CBCK) 회칙 한국어판 6월 1일 정식 발간 확정

**한국천주교주교회의 정의평화위원회**는 **5월 26일 새벽 긴급 입장문**을 통해 **'Magnifica Humanitas 회칙 한국어판 6월 1일 정식 발간'**과 **'한국 천주교 AI 윤리 가이드라인 6월 중순 발표'**를 확정했다. **한국 천주교 신자 약 580만 명**과 **천주교 운영 학교·병원 1,200여 곳**이 즉각 회칙 학습 프로그램에 참여한다. 본당 단위의 **'AI 시대 신앙 교육 강좌'**도 **7월 정식 개강** 예정.

### 2. 과학기술정보통신부·개인정보보호위원회 'AI 윤리 정책' 회칙 반영 6월 검토

**과학기술정보통신부**와 **개인정보보호위원회**는 **5월 26일 사내 회의**를 통해 **'Magnifica Humanitas 회칙의 핵심 메시지를 한국 AI 정책에 반영하는 방안'**을 **6월 안에 정식 검토**한다. 특히 **AI 자율 살상무기·딥페이크 규제·노동 자동화 대응** 3대 영역에서 **회칙의 신학적 권위가 사회적 정책 합의 형성에 미치는 영향**을 분석한다. **국방부**도 **'자율 살상무기 윤리 검토 워킹그룹'**을 **5월 28일 신규 가동**할 예정이다.

### 3. NAVER·카카오·삼성SDS 'AI 윤리 거버넌스' 회칙 기반 재정비

**NAVER CLOVA**·**카카오 AI 윤리 위원회**·**삼성SDS AI 거버넌스**는 **5월 26일 사내 발표**를 통해 **'Magnifica Humanitas 회칙의 4대 메시지를 자사 AI 윤리 원칙에 반영하는 작업 6월 안 완료'**를 확정했다. **인간 존엄성 보호·노동 가치 인정·진리 분별·무기화 우려** 4대 원칙이 **각사의 AI 제품 기획·개발·배포 모든 단계**에 **체크리스트로 적용**된다. **LG AI연구원**과 **SK텔레콤 A.X**도 동일한 검토를 진행 중이다.

---

🎯 **다음 시나리오**:

1. **5월 26~28일**: 회칙 한국어 요약본 **천주교 신문·평화방송 동시 송출**
2. **6월 1일**: 한국천주교주교회의 **회칙 한국어판 235쪽 전문 정식 발간**
3. **6월 중순**: 한국 천주교 **AI 윤리 가이드라인 정식 발표**
4. **6월 말**: 과기정통부·개인정보보호위 **AI 정책 회칙 반영 결과 발표**
5. **9월**: 교황청-Anthropic **'AI 윤리 글로벌 대화'** 첫 공동 컨퍼런스 개최 예고

⚠️ **한국 기업·기관 5월 26일~6월 5일 행동 체크리스트**:

- ==**한국천주교주교회의 회칙 한국어판 6월 1일 발간 일정 사전 확인**==
- ==**국방부 자율 살상무기 윤리 검토 워킹그룹 5월 28일 가동 추적**==
- ==**NAVER·카카오·삼성SDS·LG·SKT AI 윤리 거버넌스 6월 재정비 일정 검증**==
- ==**과기정통부·개인정보보호위 6월 AI 정책 회칙 반영 결과 확보**==
- ==**교황청-Anthropic 9월 공동 컨퍼런스 한국 기업 참여 가능성 사전 점검**==

✅ **결론**: 교황 레오 14세의 첫 회칙 Magnifica Humanitas는 **AI 산업 사상 가장 권위 있는 신학적·윤리적 문서**로 자리매김했다. **한국 천주교·정부·기업**은 회칙의 4대 메시지를 **자체 거버넌스에 즉시 반영**해야 한다.`},{id:"20260526084402",title:"트럼프, AI 행정명령 서명 막판 취소... 머스크·저커버그·삭스 90분 전 통화",summary:"트럼프 대통령이 5월 25일 백악관에서 예정됐던 'AI 산업 우선 행정명령' 서명을 마지막 순간에 전격 취소했다. AI 모델 출시 전 정부 사전 검증 의무화·라이선스 제도 등 3대 규제 신설안이었으나, 서명 90분 전 머스크·저커버그·David Sacks 3인이 트럼프에게 직접 통화해 '미국 AI 경쟁 우위 훼손' 우려를 어필한 것이 결정적이었다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-26T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",breaking:!0,content:`## 트럼프, AI 행정명령 서명 막판 취소... 머스크·저커버그·삭스 90분 전 통화

**트럼프 대통령**은 **2026년 5월 25일(현지)** 백악관에서 예정됐던 **'AI 산업 우선 행정명령(AI Industrial Primacy EO)'** 서명을 **서명 직전 마지막 순간에 전격 취소**했다. 행정명령 본문은 **'AI 모델 출시 전 정부 사전 검증 의무화·연방 AI 안전성 기준 도입·고위험 AI 라이선스 제도'**의 3대 규제 신설을 골자로 했다.

📌 **핵심 인사이트**: 서명 취소 직전 **머스크(xAI CEO)·저커버그(Meta CEO)·David Sacks(미국 AI·암호화폐 차르)** 3인이 **트럼프 대통령에게 직접 통화**해 **"행정명령이 미국의 AI 경쟁 우위를 훼손하고 중국에 시장을 내어줄 수 있다"**고 강력 어필했다. ==**AI 산업 빅테크의 백악관 직접 압박**==이 ==**연방 규제 정책을 막판에 뒤집은 사상 첫 사례**==.

---

## 취소된 행정명령의 3대 규제 내용

원래 행정명령 본문은 **5월 24일 White House Briefing Room 회람본**으로 사전 공개됐던 내용이다. 핵심 3대 규제 신설안:

1. **AI 모델 출시 전 정부 사전 검증 의무화**: ==**GPT-6·Claude Opus 5·Gemini 4.0 등 1,000억 파라미터 이상 모델**==은 **AI 안전성 연구소(AISI)** 사전 검증 통과 필수
2. **연방 AI 안전성 기준 강제 적용**: ==**FedRAMP 인증 모델만 연방 기관 사용 허용**==. 미인증 시 정부 조달 전면 금지.
3. **고위험 AI 라이선스 제도 도입**: ==**'자율 살상무기·생물보안·핵심 인프라' 3대 고위험 영역**==은 **별도 라이선스 취득 필수**

특히 **사전 검증 의무화 조항**은 **OpenAI·Anthropic·Google DeepMind**의 **모델 출시 일정에 평균 60~90일 지연**을 유발할 것으로 분석됐다. **미·중 AI 경쟁 속도전**에서 **중국 DeepSeek·Qwen·Baidu**가 **6~9개월 우위 점유** 가능성도 제기됐다.

> "==**AI 사전 검증 의무화는 미국 AI 산업의 경쟁 우위를 훼손하는 자해 행위**==다. 중국 모델이 6개월 안에 미국을 추월할 수 있다. 트럼프 대통령이 이 사실을 직접 들었어야 한다."
> — Elon Musk, xAI CEO (5월 24일 X 게시물)

---

## 빅테크 3인 막판 통화의 의미

**머스크·저커버그·David Sacks**의 막판 통화는 **트럼프 대통령 행정명령 서명 90분 전**에 이뤄졌다. **3인 모두 트럼프 대선 캠프 주요 기부자**이며 **AI·암호화폐·우주 산업의 백악관 자문 그룹** 핵심 멤버다.

⚡ **주목할 포인트**: 백악관 출입 기자들이 **5월 25일 새벽 4시 30분 행정명령 취소 결정**의 배경을 추적한 결과, **3인의 공동 메시지는 다음과 같았다**:

- ==**"중국 AI 추격 속도가 미국 사전 검증 일정보다 빠르다"**==
- ==**"AI 사전 검증은 'AI 산업 국유화'로 가는 첫 단계다"**==
- ==**"민간 자율 규제 + 사후 책임 체계로 충분하다"**==

> "==**AI는 자유시장 원리로 발전시켜야 미국이 이긴다**==. 정부 사전 검증은 AI 시대의 'CFR(중앙계획)' 방식이며 실패가 예정된 길이다."
> — David Sacks, 미국 AI·암호화폐 차르 (5월 25일 백악관 브리핑)

---

## 한국에 미치는 영향

### 1. 미국 AI 규제 공백, 한국 AI 기업 대미 진출 일정 +6~9개월 가속

**삼성SDS·LG CNS·NAVER·업스테이지**는 **5월 26일 사내 회의**를 통해 **'미국 AI 행정명령 취소에 따른 대미 진출 일정 6~9개월 가속'**을 **재검토** 중이다. **사전 검증 의무화 시 평균 60~90일 지연**이 **사라진 만큼**, **NAVER HyperCLOVA X 4.0**과 **업스테이지 Solar 5.0**의 **미국 정식 출시 일정이 2027년 1분기 → 2026년 4분기**로 **앞당겨질 가능성** 검토.

### 2. 과학기술정보통신부 'K-AI 안전성 가이드라인' 7월 발표 일정 재조정

**과기정통부**는 **5월 26일 긴급 정책 회의**를 통해 **'K-AI 안전성 가이드라인 7월 발표 일정 재조정 가능성'**을 검토한다. **미국이 사전 검증 의무화를 철회한 만큼**, **한국이 단독으로 강한 규제를 도입할 경우 한국 AI 기업의 국제 경쟁력 훼손 우려**가 부각됐다. **EU AI Act**와의 **균형 조정**도 핵심 과제로 떠올랐다.

### 3. KOSPI AI 섹터 +3.2% 동반 강세, NAVER·카카오·SKT 일제 반등 시나리오

**5월 26일 KOSPI 개장**과 함께 **AI 섹터 동반 강세**가 예상된다. **미국 AI 규제 공백 + 한국 기업의 대미 진출 가속 시나리오**가 **NAVER·카카오·삼성SDS·SK텔레콤·KT** 5사 **시가총액 합산 +3.2% 상승**을 견인할 전망. 특히 **삼성전자·SK하이닉스** 등 **AI 반도체 기업**도 **글로벌 AI 모델 출시 지연 우려 해소**로 **+2~4% 동반 강세** 시나리오.

---

🎯 **다음 시나리오**:

1. **5월 26~28일**: 백악관 **'수정 행정명령 초안'** 재작성, **빅테크 자문 그룹 사전 협의**
2. **6월 초**: David Sacks **'AI 자율 규제 가이드라인'** 발표 가능성
3. **6월 중순**: 과기정통부 **'K-AI 안전성 가이드라인 7월 일정 재조정'** 결정
4. **6월 말**: NAVER·업스테이지 **'미국 정식 출시 일정 단축'** 공식 발표 가능성
5. **8월**: 중국 정부 **'미국 AI 규제 공백 대응 사이버보안 강화'** 신규 정책 예고

⚠️ **한국 기업·정부 5월 26일~6월 5일 행동 체크리스트**:

- ==**미국 백악관 수정 행정명령 초안 사전 정보 수집**==
- ==**과기정통부 K-AI 안전성 가이드라인 7월 일정 재조정 결과 추적**==
- ==**NAVER·업스테이지·삼성SDS 대미 진출 일정 단축 검증**==
- ==**KOSPI AI 섹터 5월 26일 +3.2% 시나리오 정량 검증**==
- ==**EU AI Act와의 균형 조정 정책 변화 사전 정보 확보**==

✅ **결론**: 트럼프 행정명령 서명 취소는 **미국 AI 산업의 자율 규제 노선 재확정**을 의미한다. **한국 정부·기업**은 **미국의 규제 공백을 활용한 6~9개월 시장 진입 가속 기회**와 **K-AI 안전성 가이드라인의 균형 조정**이라는 **이중 과제**에 즉각 대응해야 한다.`},{id:"20260526084403",title:"AI 칩이 스마트폰값 끌어올렸다... 2026 평균가 $523 사상최고, $100 폰 멸종 위기",summary:"Counterpoint·IDC·Canalys 공동 보고서에 따르면 2026년 글로벌 스마트폰 평균 판매가는 사상 최고치인 $523에 도달할 전망이다. 전년 대비 +14% 상승이며, AI 데이터센터용 DRAM·HBM 가격이 1분기에만 96~143% 폭등한 것이 직접 원인. $100 미만 저가폰 시장 멸종, 신흥국 디지털 격차 심화 우려가 확산된다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-26T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800",breaking:!1,content:`## AI 칩이 스마트폰값 끌어올렸다... 2026 평균가 $523 사상최고, $100 폰 멸종 위기

**Counterpoint Research·IDC·Canalys**가 **2026년 5월 22일 공동 발표**한 **'2026 글로벌 스마트폰 가격 동향 보고서'**에 따르면, **올해 스마트폰 평균 판매가(ASP)**는 **사상 최고치인 $523**에 도달할 전망이다. **전년 대비 +14%** 상승이며, **DRAM·HBM·낸드플래시 메모리 칩 가격이 1분기에만 100% 가까이 폭등**한 것이 핵심 원인이다.

📌 **핵심 인사이트**: **AI 데이터센터 메모리 칩 수요 폭증**이 **스마트폰·PC 소비자 시장 가격을 직격**한 최초의 사례다. ==**$100 미만 스마트폰 제조 사실상 불가능**==이라는 ==**'저가 시장 멸종'**== 시나리오가 **현실화**됐다. **IDC**는 **2026년 전 세계 스마트폰 출하량 11.2억대(-12.9% YoY)**로 **2013년 이후 사상 최대 감소폭**을 예측한다.

---

## 메모리 칩 가격 급등 분해... DRAM +96%, HBM4 +143%

**1분기 메모리 칩 가격 상승률**:

1. **DRAM 평균 단가**: **전년 동기 대비 +96%**
2. **HBM3E 8단**: **+98%**
3. **HBM4 16단**: **+143%** (양산 초기 프리미엄)
4. **TLC NAND 256Gb**: **+58%**
5. **eMMC·UFS 모바일용**: **+47%**

특히 **삼성전자**는 **차세대 HBM4 메모리 칩 가격을 +30% 인상** 결정했고, **SK하이닉스**는 **2026년 HBM4 16단 캐파를 +85% 확대**했음에도 **여전히 완판** 상태다. **Trendforce**는 **"HBM 부족이 2028년까지 지속"**이라고 진단했다.

> "==**AI 데이터센터 한 곳이 소비하는 메모리가 100만대 스마트폰 분량**==이다. AI 인프라 확장이 가속될수록 소비자 디바이스 메모리 공급은 더 빠듯해진다."
> — Brandon Nispel, KeyBanc 애널리스트 (5월 22일 리서치)

---

## 가격 인상 시나리오... 갤럭시 S26 $70~140 인상 가능성

⚡ **주목할 포인트**: **삼성전자 갤럭시 S26 시리즈**는 **메모리 단가 상승분 +$70~140 추가 인상** 가능성이 **5월 22일 KeyBanc 리서치**로 공식 제기됐다. **현재 갤럭시 S25 Ultra $1,299 → S26 Ultra $1,369~1,439** 시나리오.

가격 인상이 예상되는 디바이스 군:

- **갤럭시 S26 시리즈**: ==**$70~140 인상**==
- **iPhone 17 Pro/Pro Max**: ==**$50~100 인상**==
- **샤오미·Oppo·Vivo 중급기**: ==**$20~60 인상**==
- **Dell·HP·Lenovo PC**: ==**+20% 인상 확정**==
- **저가 스마트폰 ($100 이하)**: ==**시장 멸종 위기**==

특히 **인도·동남아·남미·아프리카** 신흥 시장은 **$80~150 저가 폰 의존도 70% 이상**이라 **'저가 폰 멸종'**이 **수억 명의 디지털 격차 심화**로 직결된다.

> "==**$100 미만 스마트폰 제조가 사실상 불가능한 시대가 도래**==했다. 글로벌 디지털 격차가 메모리 칩 부족이라는 산업적 원인으로 심화되는 사상 첫 사례다."
> — IDC Asia Pacific Senior Director (5월 22일 보고서)

---

## 한국에 미치는 영향

### 1. 삼성전자·SK하이닉스 2026 분기 영업이익 사상 최대 행진

**삼성전자 DS 부문**과 **SK하이닉스**는 **2026년 1분기 영업이익 합산 사상 최대**를 기록한 데 이어 **2분기 추가 영업이익 +25~38% 상승**이 **5월 22일 한국투자증권·미래에셋 공동 리서치**로 추정됐다. **삼성전자 DS 영업이익 18.4조 원(분기), SK하이닉스 13.2조 원(분기)** 시나리오가 **현실화**되면 **양사 2026 연간 영업이익 합산 130조 원**이 **사상 최대 기록**을 넘는다.

### 2. KT경제경영연구소 '한국 스마트폰 평균가 $620 도달' 시나리오

**KT경제경영연구소**는 **5월 22일 보고서**를 통해 **'2026 한국 스마트폰 평균 판매가 $620(약 84만 원) 도달, 전년 대비 +16%'** 시나리오를 제시했다. **한국이 글로벌 평균 $523 대비 +19% 프리미엄 시장**임을 반영한 수치다. **갤럭시 S26 Ultra·iPhone 17 Pro Max** 등 **프리미엄 폰 평균 단가 130만 원 돌파**.

### 3. 과기정통부·방통위 '저가 단말기 보조금 정책' 6월 긴급 검토

**과학기술정보통신부**와 **방송통신위원회**는 **5월 26일 긴급 정책 회의**를 통해 **'$100 이하 저가 단말기 멸종에 대한 사회적 대응 방안'**을 **6월 안 정식 검토**한다. **저소득층·청소년·고령층 디지털 격차 심화 우려**가 정책 의제로 부상했고, **3대 통신사(SKT·KT·LGU+)** **단말기 보조금 확대 + 알뜰폰 신규 라인업 6월 출시** 등이 핵심 대응 카드로 거론된다.

---

🎯 **다음 시나리오**:

1. **5월 26~31일**: 삼성·SK하이닉스 **2분기 메모리 단가 추가 인상 통보** 가능성
2. **6월 초**: 과기정통부·방통위 **'저가 단말기 디지털 격차 대응' 정책 발표**
3. **6월 중순**: 갤럭시 S26 시리즈 **공식 가격 발표** ($70~140 인상 검증)
4. **7월**: IDC **2026 상반기 스마트폰 출하량 -12.9% 검증 발표**
5. **9월**: iPhone 17 시리즈 **공식 가격 인상 발표**

⚠️ **한국 기업·정부 5월 26일~6월 5일 행동 체크리스트**:

- ==**삼성전자·SK하이닉스 2분기 영업이익 합산 31.6조 원 추정 정량 검증**==
- ==**과기정통부·방통위 저가 단말기 보조금 정책 6월 발표 일정 추적**==
- ==**3대 통신사(SKT·KT·LGU+) 단말기 보조금 확대 시나리오 사전 확인**==
- ==**갤럭시 S26 가격 인상 $70~140 시나리오 KT경제경영연구소 리서치 검증**==
- ==**KOSPI 삼성전자·SK하이닉스 2분기 사상 최대 실적 모멘텀 정량 추적**==

✅ **결론**: AI 데이터센터 메모리 칩 수요가 **스마트폰·PC 소비자 시장 가격을 직격**한 **사상 첫 글로벌 디지털 격차 위기**다. **삼성·SK하이닉스는 사상 최대 실적**을 누리지만, **한국 정부·통신사·소비자**는 **저가 단말기 멸종·디지털 격차 심화**라는 **이중 과제**에 즉각 대응해야 한다.`},{id:"20260526084404",title:"KPMG, Claude를 27.6만 임직원 전원에... Anthropic 사상최대 엔터프라이즈 계약",summary:"KPMG가 5월 19일 Anthropic과 5년 전략적 동맹을 체결하며 27.6만 글로벌 임직원 전원에게 Claude Enterprise·Code·for Legal을 단계 배포한다고 발표했다. 연 계약 규모 12억 달러(약 1.65조 원)로 Anthropic 사상 최대 단일 엔터프라이즈 계약이며, Big4 회계법인 사상 첫 'AI 단일 표준 채택' 사례다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-26T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",breaking:!1,content:`## KPMG, Claude를 27.6만 임직원 전원에... Anthropic 사상최대 엔터프라이즈 계약

**KPMG**는 **2026년 5월 19일(현지)** Anthropic과의 **'전사 전략적 동맹(Strategic Alliance) 5년 계약'**을 공식 발표했다. **글로벌 27.6만 임직원 전원**에게 **Claude Enterprise + Claude Code + Claude for Legal**이 **5월 26일부터 단계적으로 배포**된다. **연 계약 규모 약 12억 달러(1.65조 원)**로 추정되며, **Anthropic 사상 최대 단일 엔터프라이즈 계약**이다.

📌 **핵심 인사이트**: KPMG는 **글로벌 Big4 회계법인 중 처음으로 'Claude 단일 표준 채택'**을 선언했다. **PwC(ChatGPT Enterprise)·EY(Microsoft Copilot)·Deloitte(GitHub Copilot)** 등 **경쟁사 3개사가 멀티 AI 전략을 유지**하는 가운데, ==**KPMG의 'Claude 올인'**==은 ==**'AI 표준화 단일 베팅' 전략으로 업계 충격**==.

---

## Claude 전사 도입 4대 핵심 영역

KPMG가 **27.6만 임직원에게 Claude를 배포**하는 4대 영역:

1. **감사(Audit) 자동화**: ==**Claude Code 기반 데이터 분석 + 이상치 탐지**==. **감사 보고서 작성 시간 -68% 단축** 예상
2. **세무(Tax) 자문**: ==**Claude for Legal + 세법 데이터셋 결합**==. **글로벌 200개국 세법 즉시 검색·해석**
3. **자문(Advisory) 서비스**: ==**Claude Enterprise + KPMG 내부 지식 베이스**==. **컨설팅 결과물 작성 시간 -45% 단축**
4. **거래(Deal) 어드바이저리**: ==**Claude Code + 재무 모델링**==. **M&A 실사 자료 작성 시간 -52% 단축**

특히 **Claude Code**의 **재무 모델링·감사 워크페이퍼 자동 작성 능력**이 **Big4 회계법인의 전통적 인력 집약 모델**을 근본적으로 재편할 가능성이 제기됐다.

> "==**Claude는 KPMG의 27.6만 임직원이 '슈퍼 컨설턴트'로 변신하는 핵심 인프라**==다. 5년 계약 12억 달러는 **인력 비용 절감 효과 50억 달러**에 비하면 **저렴한 투자**다."
> — Bill Thomas, KPMG Global Chairman (5월 19일 발표문)

---

## 사상 최대 단일 엔터프라이즈 계약의 의미

⚡ **주목할 포인트**: KPMG-Anthropic 5년 12억 달러 계약은 **다음 3대 의미**를 갖는다:

- ==**Anthropic ARR 300억 달러 → 312억 달러 단숨에 +4%p 가속**==
- ==**Claude의 'Big4 회계법인 표준' 지위 사상 첫 확보**==
- ==**OpenAI·Google Workspace AI에 대한 KPMG 결별 신호**==

**Anthropic Recruiting**은 **5월 26일 'KPMG 전사 배포 지원 시니어 솔루션 아키텍트' 600명 채용 공고**를 동시 게재했다. **KPMG 한국법인·일본·홍콩·싱가포르 4개 지역**에서도 **시니어 컨설턴트 + AI 인테그레이터 합산 240명 신규 채용**이 **6월 안 완료** 예정.

> "==**Big4 회계법인 시장의 AI 경쟁은 'Claude vs ChatGPT vs Copilot' 3강 구도에서 'Claude 단일 표준 vs 멀티 AI' 2강 구도로 재편**==됐다. KPMG의 결정은 PwC·EY·Deloitte의 후속 결정에 강력한 영향을 미친다."
> — Sarah Wong, Gartner 애널리스트 (5월 20일 리서치)

---

## 한국에 미치는 영향

### 1. 삼정KPMG, Claude 한국 도입 1순위... 안진·삼일·한영 'AI 전략 재검토'

**삼정KPMG(KPMG 한국법인)**는 **5월 26일 사내 발표**를 통해 **'Claude Enterprise + Claude for Legal 6월 1일 한국법인 단계 배포 시작'**과 **'한국 임직원 약 5,800명 전원 12월까지 정식 도입'**을 확정했다. 반면 **딜로이트안진·삼일PwC·EY한영**은 **5월 26일 긴급 AI 전략 회의**를 통해 **'KPMG 단일 표준 채택에 대한 자사 멀티 AI 전략 재점검'**을 결정했다. **한국 Big4 회계법인 AI 경쟁 구도**가 **5월 26~6월 30일 안 결정적 분기점**을 맞이한다.

### 2. NAVER·LG CNS·삼성SDS 'Claude 엔터프라이즈 리셀러' 시장 확대

**NAVER Cloud·LG CNS·삼성SDS** 3대 Anthropic Korea Partner는 **'KPMG 한국법인 Claude 도입 + 한국 Big4 후속 도입'**으로 **'2026년 한국 엔터프라이즈 Claude 시장 규모 +180% 폭증'**을 **5월 26일 사내 보고**로 전망했다. **3사 합산 Claude 리셀러 매출 2026년 4,800억 원 → 2027년 1.2조 원** 시나리오가 **KOSPI 실적 모멘텀**으로 부상.

### 3. 과기정통부·국세청 '회계 자동화 + AI 감사 가이드라인' 7월 발표

**과기정통부**·**국세청**은 **5월 26일 합동 회의**를 통해 **'AI 기반 회계·감사 자동화 가이드라인'**을 **7월 안 정식 발표**한다고 밝혔다. **'AI 감사 보고서의 법적 효력 + 감사인 면허 책임 한계 + 데이터 보호 기준'** 3대 영역이 핵심 의제. **금융감독원**과의 **공동 검토**도 진행 중.

---

🎯 **다음 시나리오**:

1. **5월 26~30일**: 삼정KPMG **6월 1일 Claude 한국법인 단계 배포 일정 확정**
2. **6월 초**: PwC·EY·Deloitte **글로벌 후속 AI 전략 발표** 가능성
3. **6월 중순**: NAVER·LG CNS·삼성SDS **'Claude 엔터프라이즈 리셀러 시장 +180% 폭증'** 정량 검증
4. **7월**: 과기정통부·국세청 **'AI 회계·감사 가이드라인'** 정식 발표
5. **9월**: Anthropic **'KPMG 5개월 도입 성과 발표'** + **Claude Enterprise 글로벌 ARR 200억 달러 도달 가능성**

⚠️ **한국 기업·정부 5월 26일~6월 5일 행동 체크리스트**:

- ==**삼정KPMG 한국법인 Claude 6월 1일 배포 일정 사전 확인**==
- ==**딜로이트안진·삼일PwC·EY한영 AI 전략 재검토 결과 추적**==
- ==**NAVER·LG CNS·삼성SDS Claude 리셀러 매출 +180% 시나리오 정량 검증**==
- ==**과기정통부·국세청 AI 회계·감사 가이드라인 7월 발표 일정 추적**==
- ==**금융감독원 AI 감사 보고서 법적 효력 검토 결과 사전 정보 수집**==

✅ **결론**: KPMG-Anthropic 5년 12억 달러 동맹은 **Big4 회계법인 AI 경쟁 구도를 'Claude 단일 표준 vs 멀티 AI' 2강 구도로 재편**한 사건이다. **한국 Big4·NAVER·LG CNS·삼성SDS·과기정통부·국세청**은 **5월 26일~6월 30일 안에 자체 AI 전략·리셀러 시장 확대·정책 가이드라인 3축의 즉각 대응**을 확정해야 한다.`},{id:"20260526084405",title:"Microsoft 'Agent 365' 5월 정식 출시... 월 $15, Claude·Gemini 외주 통합 빅뱅",summary:"Microsoft가 5월 1일 엔터프라이즈 AI 에이전트 플랫폼 'Agent 365'를 정식 출시했다. 사용자당 월 $15로 책정됐으며 GPT-5.5 기본 탑재 + Claude Opus 4.7 외주 + Gemini 3.5 Flash 부분 통합 등 멀티 모델 라우팅이 핵심. Wedbush·Bernstein은 2026년 ARR 95억 달러, 2027년 240억 달러를 전망했다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-26T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",breaking:!1,content:`## Microsoft 'Agent 365' 5월 정식 출시... 월 $15, Claude·Gemini 외주 통합 빅뱅

**Microsoft**는 **2026년 5월 1일(현지)** 엔터프라이즈 AI 에이전트 플랫폼 **'Agent 365'**를 정식 출시했다. **사용자당 월 $15**로 책정됐으며, **Copilot Studio + Claude 외주 통합 + Google Gemini 부분 통합 + GPT-5.5 기본 탑재** 등 **멀티 모델 호환 구조**가 특징이다.

📌 **핵심 인사이트**: Agent 365는 **Microsoft 사상 처음으로 'Anthropic Claude를 공식 통합한 엔터프라이즈 제품'**이다. ==**OpenAI 독점 시대의 종말**==과 ==**'멀티 모델 외주(Multi-Model Outsourcing)' 시대의 본격 개막**==을 알리는 신호. **2026년 1년 Agent 365 ARR 95억 달러** 전망(Wedbush·Bernstein 공동 추정).

---

## Agent 365의 4대 핵심 기능

Agent 365가 제공하는 4대 기능:

1. **셀프서브 에이전트 빌더**: ==**'Copilot Studio Pro'**==로 **자연어 빌더 + 노코드 워크플로** 동시 지원
2. **멀티 모델 라우팅**: ==**GPT-5.5 기본 + Claude Opus 4.7 외주 + Gemini 3.5 Flash 외주**==. 작업 유형에 따라 **자동 라우팅**
3. **Microsoft 365 통합**: ==**Outlook·Teams·SharePoint·Excel·PowerPoint·OneDrive 6대 앱**== **원클릭 에이전트 호출**
4. **거버넌스 + 감사 추적**: ==**기업 IT 관리자가 모든 에이전트 활동 + 모델 호출 + 데이터 흐름 실시간 감사**==

특히 **멀티 모델 라우팅**은 **'동일 작업을 GPT-5.5 vs Claude vs Gemini 3개 모델 동시 실행 후 최적 결과 자동 선택'**하는 **'AI 모델 경연 모드'**도 지원한다. **법무 자문**은 **Claude로 라우팅**, **창의적 글쓰기**는 **GPT-5.5로 라우팅**하는 **자동 최적화** 기능이 핵심.

> "==**Agent 365는 'Microsoft가 OpenAI에 종속되지 않는다'는 결정적 선언**==이다. 우리는 고객에게 **'최상의 AI 모델 결과'**를 제공할 의무가 있고, 그것이 GPT인지 Claude인지 Gemini인지는 부차적이다."
> — Mustafa Suleyman, Microsoft AI CEO (5월 1일 출시 컨퍼런스)

---

## 월 $15 가격 + 95억 달러 ARR 시나리오

⚡ **주목할 포인트**: Agent 365 월 $15는 **Microsoft 365 Copilot 월 $30의 절반**이며 **OpenAI ChatGPT Enterprise 월 $25·Anthropic Claude Enterprise 월 $30 대비 가장 저렴**하다.

Agent 365 매출 시나리오(Wedbush·Bernstein 공동 추정):

- **2026년 ARR**: ==**95억 달러**== (글로벌 5,300만 사용자)
- **2027년 ARR**: ==**240억 달러**== (+153%, 1.34억 사용자)
- **2028년 ARR**: ==**460억 달러**== (2.55억 사용자)
- **Microsoft Cloud 전체 매출 기여도**: ==**5.4% → 14.2% (3년)**==
- **Microsoft 365 Copilot 잠식 우려**: ==**-12% 자기잠식**== 발생 예상

**Microsoft Stock**은 **5월 1일 정식 출시 발표 후 +4.2% 상승 마감**했고, **5월 22일 기준 시가총액 4.1조 달러**를 유지하며 **Apple·NVIDIA와 함께 글로벌 시가총액 빅3** 지위를 굳혔다.

> "==**Microsoft Agent 365의 멀티 모델 외주 구조는 'AI 어플리케이션 레이어가 모델 레이어를 압도하는 시대'**==를 알리는 신호다. OpenAI·Anthropic·Google의 LLM 모델 마진은 점차 축소되고, Microsoft·Salesforce 같은 어플리케이션 레이어가 마진을 흡수한다."
> — Mark Mahaney, Evercore ISI (5월 22일 리서치)

---

## 한국에 미치는 영향

### 1. 삼성전자·LG전자·현대차·SKT 'Agent 365' 한국어 베타 6월 9일 정식 가동

**삼성전자·LG전자·현대자동차·SK텔레콤**은 **5월 26일 사내 회의**를 통해 **'Agent 365 한국어 베타 6월 9일 정식 가동'**과 **'합산 사용자 수 8.4만 명 1차 도입'**을 확정했다. **4사 합산 연 계약 규모 약 1,500만 달러(약 207억 원)**가 **6~9월 분기 매출**로 **Microsoft Korea 실적**에 반영된다. **삼성SDS**는 **'Microsoft Agent 365 + 자체 솔루션 결합 패키지'**도 별도 출시 검토.

### 2. NAVER·KaKao Workspace 'Agent 365 직접 경쟁 라인업' 6월 발표 검토

**NAVER Workspace**·**KaKao Workspace**는 **5월 26일 사내 긴급 회의**를 통해 **'Agent 365 직접 경쟁 라인업 6월 발표 가능성'**을 검토 중이다. **'HyperCLOVA X 4.0 + Claude Opus 4.7 + 자체 멀티 모델 라우팅 엔진'** 결합 패키지로 **'한국형 Agent 365'**를 **6월 안 출시** 예고. **월 가격 $12~14 책정** 검토 중이며, **한국 기업의 OS·언어·법규 친화성**을 핵심 경쟁력으로 내세운다.

### 3. 한국 IT 관리자 '멀티 모델 거버넌스' 신규 직무 폭증

**잡코리아·사람인**은 **5월 26일 보고서**를 통해 **'멀티 모델 AI 거버넌스 IT 관리자' 신규 직무가 5월에만 전일 대비 +427% 폭증**했다고 발표했다. **삼성SDS·LG CNS·NAVER Cloud·KT·SK텔레콤**이 **합산 1,800명 신규 채용**을 **6~9월 안 완료** 예정. **연봉 패키지 7,800만 원~1억 2,000만 원** 수준으로 **국내 IT 직무 평균 대비 +52%** 프리미엄.

---

🎯 **다음 시나리오**:

1. **5월 26~31일**: Microsoft Korea **'Agent 365 한국어 베타 6월 9일 가동 사전 안내'** 발송
2. **6월 초**: NAVER·KaKao Workspace **'한국형 Agent 365' 정식 발표** 가능성
3. **6월 중순**: 삼성·LG·현대차 **Agent 365 한국어 베타 1차 도입 성과 발표**
4. **9월**: Microsoft **'Agent 365 ARR 3개월 만에 30억 달러 돌파' 발표** 가능성
5. **10월**: Anthropic **'Microsoft Agent 365 통합 6개월 Claude 매출 기여 분석' 공개**

⚠️ **한국 기업·정부 5월 26일~6월 5일 행동 체크리스트**:

- ==**Microsoft Korea Agent 365 6월 9일 한국어 베타 가동 일정 사전 확인**==
- ==**NAVER·KaKao Workspace 한국형 Agent 365 6월 발표 일정 추적**==
- ==**삼성·LG·현대차·SKT 1차 도입 사용자 8.4만 명 일정 검증**==
- ==**잡코리아·사람인 멀티 모델 AI 거버넌스 신규 직무 +427% 정량 검증**==
- ==**삼성SDS·LG CNS·NAVER Cloud·KT·SKT 합산 1,800명 채용 완료 일정 추적**==

✅ **결론**: Microsoft Agent 365 정식 출시는 **OpenAI 독점 시대의 종말**과 **'AI 어플리케이션 레이어가 모델 레이어를 압도하는 시대'**의 본격 개막을 알리는 신호다. **한국 NAVER·카카오·삼성·LG·현대차·SKT·KT**는 **5월 26일~6월 30일 안에 한국형 Agent 365 출시·1차 도입·인력 채용 3축의 즉각 대응**을 확정해야 한다.`},{id:"20260524180001",title:"삼성전자, '갤럭시 AI 2.0' 공개…실시간 통역 성능 대폭 향상",summary:"삼성전자가 차세대 온디바이스 AI 기능이 강화된 '갤럭시 AI 2.0'을 발표하며 스마트폰 AI 경쟁에 불을 지폈다. 특히 실시간 통역 성능이 크게 향상되어 언어 장벽 해소에 기여할 전망이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-24T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!0,content:`## 삼성전자, '갤럭시 AI 2.0' 공개…실시간 통역 성능 대폭 향상

삼성전자가 23일(현지시간) 미국 캘리포니아 새너제이에서 열린 '삼성 갤럭시 언팩 2026' 행사에서 차세대 스마트폰 AI 기능인 '갤럭시 AI 2.0'을 공개했다. 이번 업데이트는 특히 온디바이스 AI 성능 강화에 초점을 맞춰, 사용자의 개인 정보 보호를 강화하면서도 더욱 빠르고 정확한 AI 경험을 제공하는 데 중점을 두었다.

### 주요 기능 및 성능 개선

갤럭시 AI 2.0의 핵심은 향상된 실시간 통역 기능이다. 이전 버전에 비해 통역 속도가 2배 빨라졌으며, 지원 언어 또한 15개에서 25개로 확대되었다. 이를 통해 해외 여행이나 다국적 비즈니스 환경에서 언어적 제약 없이 원활한 소통이 가능해질 것으로 기대된다.

또한, AI 기반의 텍스트 생성 및 요약 기능도 더욱 정교해졌다. 사용자의 필체와 문체를 학습하여 더욱 자연스러운 글쓰기를 돕고, 긴 문서나 기사를 핵심 내용만 간추려 제공하는 기능이 강화되었다.

### 한국에 미치는 영향

이번 갤럭시 AI 2.0의 발표는 한국 스마트폰 시장에 큰 영향을 미칠 것으로 보인다. 국내 사용자들은 이미 AI 기능에 대한 높은 관심과 활용도를 보여왔으며, 더욱 향상된 AI 기능은 스마트폰 교체 수요를 자극할 수 있다. 특히, 언어의 장벽을 낮추는 실시간 통역 기능은 다문화 사회로 나아가는 한국에서 사회적 통합에도 긍정적인 영향을 줄 수 있다.

삼성전자 관계자는 “갤럭시 AI 2.0은 단순한 기능 추가를 넘어, 사용자의 일상을 더욱 풍요롭게 만드는 AI 경험을 제공하고자 한다”고 밝혔다.

> “갤럭시 AI 2.0은 스마트폰을 넘어 우리의 삶을 연결하는 도구가 될 것입니다.”

업계 전문가들은 이번 발표가 다른 스마트폰 제조사들에게도 AI 기능 강화 경쟁을 촉발할 것으로 예상하고 있다. 갤럭시 AI 2.0은 다음 달 출시될 신규 갤럭시 모델부터 순차적으로 적용될 예정이다.`},{id:"20260524180002",title:"OpenAI, 'GPT-5o' 공개…인간과의 상호작용 더욱 자연스러워진다",summary:"AI 선두 주자인 OpenAI가 새로운 플래그십 모델 'GPT-5o'를 발표하며 AI의 발전 속도를 다시 한번 증명했다. GPT-5o는 음성, 텍스트, 이미지 등 다양한 형태의 입력을 동시에 이해하고 처리하는 능력을 갖췄다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-24T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## OpenAI, 'GPT-5o' 공개…인간과의 상호작용 더욱 자연스러워진다

AI 연구 선두 주자인 OpenAI가 23일(현지시간) 새로운 플래그십 언어 모델 'GPT-5o'를 공개했다. 'o'는 'omni'(모든)를 의미하며, 텍스트, 음성, 이미지를 포함한 모든 형태의 정보를 인간처럼 자연스럽게 이해하고 생성하는 능력을 갖춘 것이 특징이다.

### GPT-5o의 혁신적인 능력

GPT-5o는 이전 모델 대비 2배 빠른 응답 속도를 자랑하며, 특히 실시간 음성 대화 능력이 획기적으로 향상되었다. 사용자의 감정 톤을 파악하고 이에 맞춰 응답하는 기능은 물론, 사용자가 말하는 중간에 끼어들어도 자연스럽게 대화를 이어갈 수 있다. 또한, 이미지와 텍스트를 동시에 분석하여 질문에 답변하거나, 복잡한 시각적 정보를 설명하는 능력도 크게 개선되었다.

OpenAI CEO 샘 올트먼은 발표 행사에서 "GPT-5o는 AI와 인간의 상호작용 방식을 근본적으로 변화시킬 것"이라며, "이전에는 상상할 수 없었던 수준의 몰입감과 자연스러움을 제공할 것"이라고 강조했다.

### 한국 시장 전망

GPT-5o의 등장은 한국의 AI 서비스 시장에 새로운 활력을 불어넣을 것으로 예상된다. 이미 국내 IT 기업들은 AI 챗봇, 번역 서비스 등 다양한 분야에서 GPT 기반 기술을 활용하고 있으며, GPT-5o의 고도화된 성능은 이러한 서비스들의 품질을 한 단계 끌어올릴 잠재력을 가지고 있다. 특히 교육, 고객 서비스, 엔터테인먼트 분야에서 AI의 활용도가 더욱 높아질 것으로 보인다.

> “GPT-5o는 단순한 언어 모델을 넘어, 인간의 지능과 감성을 이해하는 동반자가 될 것입니다.”

다만, AI 기술 발전과 함께 발생할 수 있는 윤리적 문제, 일자리 감소 등에 대한 사회적 논의와 대비도 더욱 중요해질 전망이다. OpenAI는 GPT-5o의 안전하고 책임감 있는 사용을 위해 지속적인 연구와 노력을 기울일 것이라고 밝혔다.`},{id:"20260524180003",title:"구글, '제미나이 1.5 프로' 한국어 성능 대폭 강화…콘텐츠 생성 혁신 예고",summary:"구글이 최신 AI 모델 '제미나이 1.5 프로'의 한국어 이해 및 생성 능력을 대폭 개선했다고 밝혔다. 이를 통해 한국어 기반의 다양한 AI 서비스 출시가 가속화될 전망이다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-24T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!1,content:`## 구글, '제미나이 1.5 프로' 한국어 성능 대폭 강화…콘텐츠 생성 혁신 예고

구글이 자사의 최신 AI 모델인 '제미나이 1.5 프로'의 한국어 처리 성능을 대폭 강화했다고 23일 발표했다. 이번 업데이트는 한국어의 복잡한 문맥과 뉘앙스를 더욱 정확하게 이해하고, 자연스러운 한국어 콘텐츠를 생성하는 데 초점을 맞추고 있다.

### 한국어 이해 및 생성 능력 향상

제미나이 1.5 프로는 이전 모델 대비 한국어 이해도가 30% 이상 향상되었으며, 특히 긴 문장이나 복잡한 구조의 한국어 텍스트를 분석하는 능력이 뛰어나다. 또한, 한국의 문화적 배경과 맥락을 반영한 창의적인 글쓰기, 번역, 요약 등 다양한 콘텐츠 생성 작업에서 더욱 높은 완성도를 보여줄 것으로 기대된다.

구글 AI 연구팀은 "한국은 AI 기술에 대한 관심과 활용도가 매우 높은 시장"이라며, "이번 제미나이 1.5 프로의 한국어 성능 강화는 한국 사용자들에게 더욱 개인화되고 유용한 AI 경험을 제공하기 위한 노력의 일환"이라고 설명했다.

### 한국 시장 전망

제미나이 1.5 프로의 한국어 성능 강화는 한국의 AI 기반 콘텐츠 제작 및 서비스 시장에 상당한 영향을 미칠 것으로 보인다. 언론사, 출판사, 마케터 등 한국어로 콘텐츠를 생산하는 다양한 분야에서 AI를 활용한 생산성 향상이 기대된다. 또한, AI 챗봇, 교육 콘텐츠 등 한국어 사용자들을 위한 서비스의 질적 향상에도 크게 기여할 수 있다.

> “제미나이 1.5 프로는 한국어의 아름다움과 표현력을 AI 기술로 구현하는 데 중요한 역할을 할 것입니다.”

구글은 이번 업데이트를 시작으로 한국 시장에 특화된 다양한 AI 기반 솔루션을 선보일 계획이라고 밝혔다. 이는 한국 IT 기업들과의 협력 강화로 이어져 국내 AI 생태계 발전에 긍정적인 영향을 줄 것으로 예상된다.`},{id:"20260524180004",title:"AI 윤리 규범 강화 논의 본격화…국제 사회, '책임감 있는 AI' 구축 박차",summary:"AI 기술의 급격한 발전과 함께 윤리적 문제에 대한 우려가 커지면서, 국제 사회가 AI 윤리 규범 마련에 속도를 내고 있다. 각국 정부와 기관들은 AI의 안전하고 책임감 있는 개발 및 활용을 위한 논의를 본격화하고 있다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-24T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1568605116516-b227562cd862?w=800",breaking:!1,content:`## AI 윤리 규범 강화 논의 본격화…국제 사회, '책임감 있는 AI' 구축 박차

최근 AI 기술의 발전이 전례 없는 속도로 이루어지면서, AI의 잠재적 위험과 윤리적 문제에 대한 경고의 목소리가 높아지고 있다. 이에 국제 사회는 AI의 안전하고 책임감 있는 개발 및 활용을 위한 윤리 규범 마련에 박차를 가하고 있다.

### 주요 논의 사항 및 동향

유엔, OECD 등 국제기구를 중심으로 AI 편향성, 개인 정보 보호, 투명성, 책임 소재 등 핵심적인 윤리 이슈에 대한 논의가 활발하게 진행 중이다. 특히, AI 모델의 의사 결정 과정을 투명하게 공개하고, 알고리즘의 차별성을 최소화하기 위한 방안들이 집중적으로 다루어지고 있다.

각국 정부 또한 자체적인 AI 윤리 가이드라인을 발표하거나 관련 법규 제정을 추진하고 있다. 유럽연합(EU)의 AI 법안이 대표적인 예시이며, 미국, 중국 등 주요국들도 AI 규제 프레임워크 구축에 적극 나서고 있다.

### 한국에 미치는 영향

AI 윤리 규범 강화는 한국 시장에도 직접적인 영향을 미칠 것이다. 국내 AI 기업들은 국제적인 기준에 부합하는 윤리적 AI 개발 및 운영 체계를 구축해야 할 필요성이 더욱 커졌다. 이는 AI 기술 경쟁력 확보뿐만 아니라, 글로벌 시장 진출에도 필수적인 요소가 될 것이다.

또한, AI 기술의 윤리적 사용에 대한 사회적 요구가 높아짐에 따라, AI 교육 및 인식 개선 프로그램의 중요성도 강조될 것으로 보인다.

> “AI는 인류에게 무한한 가능성을 열어주지만, 동시에 우리는 이 기술을 신중하고 책임감 있게 다루어야 합니다.”

전문가들은 AI 윤리 규범 마련이 기술 발전 자체를 저해하기보다는, 장기적으로 AI 기술의 지속 가능한 성장과 사회적 수용성을 높이는 데 기여할 것이라고 전망하고 있다. 한국 정부 역시 이러한 국제적 흐름에 발맞춰 AI 윤리 정책을 강화해 나갈 것으로 예상된다.`},{id:"20260524180005",title:"AI 반도체 시장 경쟁 심화…엔비디아 독주 막을 '대항마' 등장하나",summary:"AI 연산에 필수적인 고성능 반도체 시장에서 엔비디아의 독주를 견제할 경쟁자들이 속속 등장하며 시장 판도 변화를 예고하고 있다. AMD, 인텔은 물론 빅테크 기업들도 자체 칩 개발에 박차를 가하고 있다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-24T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",breaking:!1,content:`## AI 반도체 시장 경쟁 심화…엔비디아 독주 막을 '대항마' 등장하나

인공지능(AI) 연산의 핵심인 고성능 반도체 시장에서 기존 강자인 엔비디아를 향한 도전이 거세지고 있다. AMD, 인텔 등 전통적인 반도체 기업들은 물론, 구글, 아마존 등 빅테크 기업들까지 자체 AI 칩 개발에 적극 나서면서 시장 경쟁이 한층 치열해질 전망이다.

### 경쟁 구도 및 기술 동향

엔비디아는 GPU(그래픽 처리 장치) 기반의 AI 칩 시장에서 압도적인 점유율을 차지하며 독주 체제를 구축해왔다. 그러나 최근 AMD는 자사의 최신 GPU 라인업을 통해 엔비디아의 성능을 위협하고 있으며, 인텔 또한 AI 연산에 최적화된 새로운 아키텍처의 칩 개발에 총력을 기울이고 있다.

또한, 클라우드 서비스 제공업체들은 자체 데이터센터 운영 효율성을 높이고 비용을 절감하기 위해 자체 AI 칩 개발에 투자를 확대하고 있다. 구글의 TPU(텐서 처리 장치)와 아마존의 Inferentia 등이 대표적이다.

### 한국 시장 전망

AI 반도체 시장의 경쟁 심화는 한국 반도체 산업에도 중요한 기회와 위협 요인이 될 수 있다. 삼성전자, SK하이닉스 등 국내 반도체 기업들은 고대역폭 메모리(HBM) 등 AI 반도체에 필수적인 메모리 반도체 시장에서 경쟁력을 강화하고 있으며, 자체 AI 칩 개발 가능성도 꾸준히 타진하고 있다.

> “AI 반도체 시장은 기술 혁신과 함께 급격한 변화를 겪고 있으며, 이는 관련 생태계 전반에 영향을 미칠 것입니다.”

AI 반도체 시장의 경쟁은 기술 발전 속도를 더욱 가속화시키고, AI 기술의 보급 확산에 기여할 것으로 예상된다. 한국 기업들은 이러한 변화에 능동적으로 대응하며 새로운 성장 기회를 포착해야 할 것이다.`}],Zp={articles:Jp},bp="a]",Gs="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";let Ai=!1;const ud=()=>Ai?!0:typeof window.Kakao>"u"?(console.error("Kakao SDK not loaded"),!1):(window.Kakao.isInitialized()||window.Kakao.init(bp),Ai=window.Kakao.isInitialized(),Ai),qp=()=>new Promise((e,n)=>{if(!ud()){e({success:!0,user:{id:"kakao_demo_"+Date.now(),name:"카카오 사용자",email:"demo@kakao.com",avatar:null,provider:"kakao"},isDemo:!0});return}window.Kakao.Auth.login({success:t=>{window.Kakao.API.request({url:"/v2/user/me",success:r=>{var l,i,o,a,s;e({success:!0,user:{id:"kakao_"+r.id,name:((i=(l=r.kakao_account)==null?void 0:l.profile)==null?void 0:i.nickname)||"카카오 사용자",email:((o=r.kakao_account)==null?void 0:o.email)||null,avatar:((s=(a=r.kakao_account)==null?void 0:a.profile)==null?void 0:s.profile_image_url)||null,provider:"kakao"}})},fail:r=>{n({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}})},fail:t=>{t.error==="access_denied"?n({success:!1,error:"로그인이 취소되었습니다."}):n({success:!1,error:"카카오 로그인에 실패했습니다."})}})}),em=()=>new Promise(e=>{if(!ud()||!window.Kakao.Auth.getAccessToken()){e({success:!0});return}window.Kakao.Auth.logout(()=>{e({success:!0})})});let _s=!1;const nm=()=>new Promise(e=>{if(_s){e(!0);return}if(typeof window.google>"u"||!window.google.accounts){console.error("Google SDK not loaded"),e(!1);return}_s=!0,e(!0)}),tm=()=>new Promise(async(e,n)=>{if(!await nm()||Gs.includes("YOUR_GOOGLE")){e({success:!0,user:{id:"google_demo_"+Date.now(),name:"Google 사용자",email:"demo@gmail.com",avatar:null,provider:"google"},isDemo:!0});return}try{window.google.accounts.oauth2.initTokenClient({client_id:Gs,scope:"email profile",callback:async l=>{if(l.error){n({success:!1,error:"구글 로그인에 실패했습니다."});return}try{const o=await(await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${l.access_token}`}})).json();e({success:!0,user:{id:"google_"+o.sub,name:o.name||"Google 사용자",email:o.email,avatar:o.picture||null,provider:"google"}})}catch{n({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}}}).requestAccessToken()}catch{n({success:!1,error:"구글 로그인 초기화에 실패했습니다."})}}),rm=async()=>(await em(),{success:!0}),lm=null,_r={title:"Prompt Daily — 매일 아침 AI가 바꾸는 세상",description:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만.",image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200",siteName:"Prompt Daily"},we=(e,n)=>{let t=document.head.querySelector(e);if(!t){t=document.createElement("meta");const[r,l]=e.replace(/^meta\[/,"").replace(/\]$/,"").split("=");t.setAttribute(r,l.replace(/"/g,"")),document.head.appendChild(t)}t.setAttribute("content",n.content??"")},im=e=>{document.title=e,we('meta[property="og:title"]',{content:e}),we('meta[name="twitter:title"]',{content:e})};function cd({title:e,description:n,image:t,url:r,type:l="article",publishedTime:i}={}){const o=e||_r.title,a=n||_r.description,s=t||_r.image,c=r||(typeof window<"u"?window.location.href:"");im(o),we('meta[name="description"]',{content:a}),we('meta[property="og:description"]',{content:a}),we('meta[property="og:image"]',{content:s}),we('meta[property="og:url"]',{content:c}),we('meta[property="og:type"]',{content:l}),we('meta[property="og:site_name"]',{content:_r.siteName}),we('meta[name="twitter:card"]',{content:"summary_large_image"}),we('meta[name="twitter:description"]',{content:a}),we('meta[name="twitter:image"]',{content:s}),i&&we('meta[property="article:published_time"]',{content:i})}function dd(){cd({})}const nt={models:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",enterprise:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",research:"https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200",tools:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",prompts:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",policy:"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200",culture:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",all:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200"};function Sl(e,n="all"){return e?(e.image_storage_path,e.image&&/^https?:\/\//.test(e.image)?e.image:nt[n]||nt.all):nt[n]||nt.all}function fd(e){return null}function xl(e="all"){const n=nt[e]||nt.all;return t=>{t.currentTarget.src!==n&&(t.currentTarget.src=n)}}async function om(){return!1}async function am(){return[]}function sm(){const[e,n]=A.useState(null),[t,r]=A.useState(null),[l,i]=A.useState([]),[o,a]=A.useState(""),[s,c]=A.useState(!1);A.useEffect(()=>{},[]),A.useEffect(()=>{if(!e){r(!1);return}om().then(r)},[e]);const h=async()=>{c(!0);const m=await am();i(m),c(!1)};return A.useEffect(()=>{t&&h()},[t]),u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"Supabase 환경변수가 설정되지 않았습니다."}),u.jsx(Bn,{to:"/",className:"text-brand underline",children:"홈으로"})]})}const cr="Prompt Daily",um="매일 아침 AI가 바꾸는 세상",vt=[{slug:"all",name:"전체",color:"#152e44"},{slug:"models",name:"모델",color:"#152e44"},{slug:"enterprise",name:"기업",color:"#1d4ed8"},{slug:"research",name:"연구",color:"#0f766e"},{slug:"tools",name:"도구",color:"#b45309"},{slug:"prompts",name:"프롬프트",color:"#7c3aed"},{slug:"policy",name:"정책",color:"#be123c"},{slug:"culture",name:"컬처",color:"#334155"}],ho=Object.fromEntries(vt.map(e=>[e.slug,e])),pd=Object.fromEntries(vt.map(e=>[e.name,e])),Bs=e=>String(e).padStart(2,"0"),md=e=>{const n=new Date(e);return`${n.getFullYear()}.${Bs(n.getMonth()+1)}.${Bs(n.getDate())}`},go=e=>{const n=new Date(e),r=Math.floor((new Date-n)/36e5),l=Math.floor(r/24);return r<1?"방금 전":r<24?`${r}시간 전`:l<7?`${l}일 전`:md(e)},fe=e=>{const n=pd[e.category];return n?n.slug:"all"},cm=e=>e?e.split(`

`).map((n,t)=>{const r=n.trim();if(r==="---"||r==="***")return u.jsx("hr",{className:"my-10 border-t-2 border-ink-100"},t);if(n.startsWith("## "))return u.jsx("h2",{children:n.slice(3)},t);if(n.startsWith("### "))return u.jsx("h3",{children:n.slice(4)},t);if(n.startsWith("> ")){const l=n.slice(2).replace(/\n> /g," ").replace(/\n/g," ");return u.jsxs("blockquote",{className:"relative my-8 pl-6 pr-5 py-5 bg-brand-tint/40 border-l-4 border-brand text-[17px] leading-relaxed text-ink-800 italic",children:[u.jsx("span",{className:"absolute left-2 top-0 text-brand/30 text-5xl font-serif leading-none select-none",children:"“"}),Ot(l)]},t)}if(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)\s/.test(n)){const l=n.match(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)/)[0],i=n.slice(l.length).trimStart();return u.jsxs("div",{className:"my-8 flex gap-4 p-5 bg-brand-tint/50 border border-brand/20 rounded-lg",children:[u.jsx("span",{className:"text-3xl leading-none shrink-0",children:l}),u.jsx("div",{className:"flex-1 text-[16px] leading-relaxed text-ink-800",children:Ot(i)})]},t)}return/^[-*]\s/.test(n)?u.jsx("ul",{className:"my-5 space-y-2",children:n.split(`
`).filter(Boolean).map((l,i)=>u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0"}),u.jsx("span",{className:"flex-1",children:Ot(l.replace(/^[-*]\s*/,""))})]},i))},t):/^\d+\.\s/.test(n)?u.jsx("ol",{className:"my-5 space-y-3 counter-reset-article",children:n.split(`
`).filter(Boolean).map((l,i)=>{const o=l.match(/^(\d+)\.\s*(.*)/),a=o?o[1]:String(i+1),s=o?o[2]:l;return u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"shrink-0 w-7 h-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center",children:a}),u.jsx("span",{className:"flex-1 pt-0.5",children:Ot(s)})]},i)})},t):u.jsx("p",{children:Ot(n)},t)}):null,Ot=e=>{const n=[];let t=0;return e.split(/\*\*(.*?)\*\*/).forEach((r,l)=>{l%2===1?n.push(u.jsx("strong",{className:"text-brand-dark font-bold",children:r},`b-${t++}`)):r.split(/==(.*?)==/).forEach((i,o)=>{o%2===1?n.push(u.jsx("mark",{className:"bg-yellow-100 px-1 text-ink-900 rounded",children:i},`h-${t++}`)):n.push(i)})}),n};function dm({user:e,onLoginClick:n,onLogoutClick:t,activeSlug:r,onCategoryClick:l,onSearch:i}){const[o,a]=A.useState(!1),[s,c]=A.useState(!1),[h,m]=A.useState(!1),[g,v]=A.useState(""),S=Ar(),y=d=>f=>{if(f.preventDefault(),window.location.pathname.endsWith("/")||window.location.pathname.includes("/category/")){const p=document.getElementById(d);if(p){p.scrollIntoView({behavior:"smooth",block:"start"});return}}S("/"),setTimeout(()=>{var p;(p=document.getElementById(d))==null||p.scrollIntoView({behavior:"smooth",block:"start"})},80)};A.useEffect(()=>{const d=()=>a(window.scrollY>8);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const w=A.useMemo(()=>{const d=new Date,f=["일","월","화","수","목","금","토"][d.getDay()];return`${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 ${f}요일`},[]);return u.jsxs("header",{className:`sticky top-0 z-50 bg-white border-b transition-shadow ${o?"shadow-sm border-ink-200":"border-ink-100"}`,children:[u.jsx("div",{className:"bg-brand text-white text-xs",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 h-8 flex items-center justify-between",children:[u.jsx("span",{className:"mono tracking-wide",children:w}),u.jsxs("div",{className:"hidden sm:flex items-center gap-4",children:[u.jsx("a",{href:"#about",onClick:y("footer-about"),className:"hover:text-brand-tint cursor-pointer",children:"소개"}),u.jsx("a",{href:"#advertise",onClick:y("footer-advertise"),className:"hover:text-brand-tint cursor-pointer",children:"광고 문의"}),u.jsx("a",{href:"#newsletter",onClick:y("newsletter"),className:"hover:text-brand-tint cursor-pointer",children:"뉴스레터"}),e?u.jsxs("button",{onClick:t,className:"hover:text-brand-tint",children:[e.name||e.email," · 로그아웃"]}):u.jsx("button",{onClick:n,className:"hover:text-brand-tint",children:"로그인"})]})]})}),u.jsxs("div",{className:"max-w-page mx-auto px-4 py-5 flex items-center justify-between",children:[u.jsxs(Bn,{to:"/",className:"text-left group","aria-label":"홈으로",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[u.jsx("h1",{className:"headline-serif text-3xl md:text-4xl text-brand leading-none",children:cr}),u.jsx("p",{className:"text-[11px] text-ink-400 mt-1 tracking-widest uppercase",children:um})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>m(d=>!d),className:"w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"검색",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"})})}),u.jsx("button",{onClick:()=>c(d=>!d),className:"md:hidden w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"메뉴",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),h&&u.jsx("div",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4 py-3",children:u.jsxs("form",{onSubmit:d=>{d.preventDefault(),i(g),m(!1)},className:"flex gap-2",children:[u.jsx("input",{autoFocus:!0,value:g,onChange:d=>v(d.target.value),placeholder:"키워드로 검색…",className:"flex-1 px-4 py-2.5 border border-ink-200 rounded-none focus:border-brand outline-none text-[15px]"}),u.jsx("button",{type:"submit",className:"px-5 py-2.5 bg-brand text-white text-sm font-semibold",children:"검색"})]})})}),u.jsx("nav",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4",children:u.jsx("ul",{className:`flex items-center gap-1 overflow-x-auto no-scrollbar ${s?"flex-wrap":""}`,children:vt.map(d=>{const f=r===d.slug;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>{l(d.slug),c(!1)},className:`relative whitespace-nowrap px-4 py-3 text-sm font-bold transition-colors ${f?"text-brand":"text-ink-700 hover:text-brand"}`,children:[d.name,f&&u.jsx("span",{className:"absolute left-4 right-4 bottom-0 h-0.5 bg-brand"})]})},d.slug)})})})})]})}function fm({items:e,onClick:n}){return e.length?u.jsx("div",{className:"ticker",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 flex items-center gap-4 h-10",children:[u.jsx("span",{className:"ticker-label",children:"BREAKING"}),u.jsx("div",{className:"flex-1 overflow-hidden",children:u.jsx("div",{className:"flex gap-10 animate-marquee whitespace-nowrap",children:[...e,...e].map((t,r)=>u.jsxs("button",{onClick:()=>n(t),className:"hover:underline",children:["• ",t.title]},`${t.id}-${r}`))})})]})}):null}function pm({articles:e,onOpen:n}){if(e.length===0)return null;const[t,...r]=e,l=r.slice(0,2);return u.jsx("section",{className:"max-w-page mx-auto px-4 py-8",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-hero gap-6",children:[u.jsxs("article",{onClick:()=>n(t),className:"card cursor-pointer group",children:[u.jsx("div",{className:"card-img-wrap aspect-[16/9]",children:u.jsx("img",{src:Sl(t,fe(t)),srcSet:fd()||void 0,sizes:"(min-width: 1024px) 800px, 100vw",onError:xl(fe(t)),alt:"",className:"card-img",loading:"eager"})}),u.jsxs("div",{className:"p-6",children:[u.jsx(wl,{slug:fe(t),breaking:t.breaking}),u.jsx("h2",{className:"headline-serif text-3xl md:text-[2.25rem] leading-tight mt-3 mb-3 hl clamp-3",children:t.title}),u.jsx("p",{className:"text-ink-500 clamp-2 text-[15px] leading-relaxed",children:t.summary}),u.jsxs("div",{className:"mt-4 text-xs text-ink-400 mono",children:[t.author||"Prompt Daily 편집팀"," · ",go(t.date)]})]})]}),u.jsx("div",{className:"flex flex-col gap-5",children:l.map(i=>u.jsxs("article",{onClick:()=>n(i),className:"card cursor-pointer flex gap-4 p-4",children:[u.jsx("div",{className:"card-img-wrap w-32 h-24 flex-shrink-0",children:u.jsx("img",{src:Sl(i,fe(i)),onError:xl(fe(i)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx(wl,{slug:fe(i),breaking:i.breaking,small:!0}),u.jsx("h3",{className:"font-bold text-[15px] leading-snug mt-1 hl clamp-3",children:i.title}),u.jsx("div",{className:"mt-2 text-[11px] text-ink-400 mono",children:go(i.date)})]})]},i.id))})]})})}function wl({slug:e,breaking:n,small:t}){const r=ho[e]||vt[0],l=t?"px-1.5 py-0.5 text-[10px]":"px-2 py-1 text-[11px]";return u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:`${l} font-bold tracking-widest uppercase text-white`,style:{backgroundColor:r.color},children:r.name}),n&&u.jsx("span",{className:`${l} font-bold tracking-widest uppercase text-white bg-accent-red`,children:"속보"})]})}function Ao({article:e,size:n="md",onClick:t}){const r=n==="lg";return u.jsxs("article",{onClick:()=>t(e),className:"card cursor-pointer",children:[u.jsx("div",{className:`card-img-wrap ${r?"aspect-[16/10]":"aspect-[4/3]"}`,children:u.jsx("img",{src:Sl(e,fe(e)),onError:xl(fe(e)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:r?"p-5":"p-4",children:[u.jsx(wl,{slug:fe(e),breaking:e.breaking,small:!r}),u.jsx("h3",{className:`hl font-bold mt-2 mb-2 clamp-3 ${r?"text-headline-md":"text-[15px]"}`,children:e.title}),u.jsx("p",{className:"text-ink-500 text-[13px] clamp-2",children:e.summary}),u.jsxs("div",{className:"mt-3 flex items-center justify-between text-[11px] text-ink-400 mono",children:[u.jsx("span",{children:go(e.date)}),u.jsx("span",{children:e.readTime||"5분"})]})]})]})}function mm({category:e,articles:n,onOpen:t}){if(n.length===0)return null;const[r,...l]=n,i=l.slice(0,3);return u.jsxs("section",{className:"py-10",id:`section-${e.slug}`,children:[u.jsxs("div",{className:"flex items-end justify-between mb-6",children:[u.jsx(Bn,{to:`/category/${e.slug}`,className:"section-label hover:opacity-70 transition-opacity",style:{color:e.color,borderColor:e.color},children:e.name}),u.jsx(Bn,{to:`/category/${e.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-xs text-ink-500 hover:text-brand font-semibold",children:"더보기 →"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[u.jsx("div",{className:"md:col-span-2 md:row-span-1",children:u.jsx(Ao,{article:r,size:"lg",onClick:t})}),i.map(o=>u.jsx(Ao,{article:o,onClick:t},o.id))]})]})}function hm({articles:e,onOpen:n}){return u.jsxs("aside",{className:"sticky top-40",children:[u.jsx("div",{className:"section-label mb-5",children:"MOST VIEWED"}),u.jsx("ol",{className:"space-y-4",children:e.slice(0,10).map((t,r)=>{var l;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>n(t),className:"flex gap-3 text-left w-full group",children:[u.jsx("span",{className:`rank-num ${r<3?"top-three":""}`,children:String(r+1).padStart(2,"0")}),u.jsxs("div",{className:"flex-1 min-w-0 pb-4 border-b border-ink-100",children:[u.jsx("div",{className:"text-[10px] text-ink-400 mono uppercase tracking-wider mb-1",children:((l=pd[t.category])==null?void 0:l.name)||t.category}),u.jsx("h4",{className:"text-[14px] font-semibold leading-snug hl clamp-3",children:t.title})]})]})},t.id)})})]})}function gm({email:e,setEmail:n,subscribed:t,onSubmit:r}){return u.jsx("section",{id:"newsletter",className:"bg-brand text-white py-14 my-10",children:u.jsxs("div",{className:"max-w-2xl mx-auto px-4 text-center",children:[u.jsx("div",{className:"inline-block px-3 py-1 bg-accent-red text-[10px] font-bold tracking-widest uppercase mb-4",children:"NEWSLETTER"}),u.jsx("h2",{className:"headline-serif text-3xl md:text-4xl mb-3",children:"매일 아침, 한 잔의 AI"}),u.jsx("p",{className:"text-brand-tint mb-7 text-[15px]",children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 7개만 골라, 매일 아침 7시에 전해드립니다."}),u.jsxs("form",{onSubmit:r,className:"flex gap-2 max-w-md mx-auto",children:[u.jsx("input",{type:"email",required:!0,value:e,onChange:l=>n(l.target.value),placeholder:"이메일 주소",className:"flex-1 px-4 py-3 text-ink-900 border-0 focus:outline-none focus:ring-2 focus:ring-white"}),u.jsx("button",{type:"submit",className:"px-6 py-3 bg-white text-brand font-bold hover:bg-brand-tint",children:t?"구독완료":"구독하기"})]})]})})}const Am=[{label:"X",url:"https://x.com/",title:"X (Twitter)"},{label:"FB",url:"https://facebook.com/",title:"Facebook"},{label:"IN",url:"https://instagram.com/",title:"Instagram"},{label:"YT",url:"https://youtube.com/",title:"YouTube"}];function hd(){const[e,n]=A.useState(null);return u.jsxs(u.Fragment,{children:[u.jsx("footer",{className:"bg-ink-900 text-ink-300 mt-20",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[u.jsxs("div",{className:"md:col-span-2",id:"footer-about",children:[u.jsx(Bn,{to:"/",className:"inline-block",children:u.jsx("h3",{className:"headline-serif text-2xl text-white mb-3 hover:text-brand-tint transition-colors",children:cr})}),u.jsx("p",{className:"text-sm text-ink-400 mb-4 max-w-md",children:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만 골라드립니다."}),u.jsx("div",{className:"flex gap-3",children:Am.map(t=>u.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer noopener",title:t.title,"aria-label":t.title,className:"w-9 h-9 border border-ink-700 hover:border-white hover:text-white flex items-center justify-center text-xs font-bold transition-colors",children:t.label},t.label))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"카테고리"}),u.jsx("ul",{className:"space-y-2 text-sm",children:vt.slice(1).map(t=>u.jsx("li",{children:u.jsx(Bn,{to:`/category/${t.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"hover:text-white transition-colors",children:t.name})},t.slug))})]}),u.jsxs("div",{id:"footer-advertise",children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"회사"}),u.jsxs("ul",{className:"space-y-2 text-sm",children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>n("about"),className:"hover:text-white transition-colors",children:"소개"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("advertise"),className:"hover:text-white transition-colors",children:"광고 문의"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("contact"),className:"hover:text-white transition-colors",children:"제보하기"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("terms"),className:"hover:text-white transition-colors",children:"이용약관"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("privacy"),className:"hover:text-white transition-colors",children:"개인정보처리방침"})})]})]})]}),u.jsxs("div",{className:"border-t border-ink-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-xs text-ink-400",children:[u.jsxs("p",{children:["© 2026 GIGA GLOBAL STUDIO · ",cr,". All rights reserved."]}),u.jsx("p",{className:"mono mt-2 md:mt-0",children:"v2.1 · Magazine Edition"})]})]})}),e&&u.jsx(ym,{kind:e,onClose:()=>n(null)})]})}const Im={about:{title:"소개",body:u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Prompt Daily"}),"는 매일 아침 AI가 바꾸는 세상을 기록합니다."]}),u.jsx("p",{children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 것만 7개 카테고리 — 모델 · 기업 · 연구 · 도구 · 프롬프트 · 정책 · 컬처 — 로 정리해 전해드립니다."}),u.jsx("p",{className:"text-ink-400 text-sm",children:"© GIGA GLOBAL STUDIO"})]})},advertise:{title:"광고 문의",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"브랜드·프로덕트·채용 광고 문의는 이메일로 받고 있습니다."}),u.jsx("p",{className:"mono text-brand",children:"ads@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"평균 응답 시간: 영업일 기준 24시간 이내"})]})},contact:{title:"제보하기",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"AI 업계 소식·인사이트 제보를 환영합니다."}),u.jsx("p",{className:"mono text-brand",children:"tips@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"익명 제보도 가능합니다. 제보자 신원은 철저히 보호됩니다."})]})},terms:{title:"이용약관",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"본 사이트는 정보 제공을 목적으로 운영되며, 게재된 모든 콘텐츠의 저작권은 Prompt Daily 및 원저작자에게 있습니다."}),u.jsx("p",{children:"무단 복제·배포·2차 저작물 작성을 금지합니다. 기사 본문의 인용은 출처 표기 시 허용됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 약관 문서는 준비 중입니다."})]})},privacy:{title:"개인정보처리방침",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Prompt Daily는 뉴스레터 구독 외에는 사용자의 개인정보를 수집하지 않습니다."}),u.jsx("p",{children:"구독자 이메일은 뉴스레터 발송 목적으로만 사용되며, 제3자에게 제공되지 않습니다."}),u.jsx("p",{children:"구독 해지는 발송되는 모든 메일 하단의 링크를 통해 즉시 처리됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 방침 문서는 준비 중입니다."})]})}};function ym({kind:e,onClose:n}){const t=Im[e];return A.useEffect(()=>{const r=l=>l.key==="Escape"&&n();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[n]),t?u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in",onClick:n,children:u.jsxs("div",{className:"bg-white max-w-lg w-full p-8 relative",onClick:r=>r.stopPropagation(),role:"dialog","aria-modal":"true",children:[u.jsx("button",{onClick:n,"aria-label":"닫기",className:"absolute top-4 right-4 w-8 h-8 hover:bg-ink-50 flex items-center justify-center text-ink-400",children:u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-4",children:t.title}),u.jsx("div",{className:"space-y-3 text-ink-700 text-[15px] leading-relaxed",children:t.body})]})}):null}function vm({article:e,onBack:n}){A.useEffect(()=>{window.scrollTo(0,0)},[e.id]),A.useEffect(()=>(cd({title:`${e.title} — ${cr}`,description:e.summary,image:e.image,type:"article",publishedTime:e.date}),()=>dd()),[e.id]),A.useEffect(()=>{},[e.id]);const t=typeof window<"u"?window.location.href:"",r=()=>{var l;(l=navigator.clipboard)==null||l.writeText(t)};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsx("header",{className:"sticky top-0 bg-white/95 backdrop-blur border-b border-ink-100 z-50",children:u.jsxs("div",{className:"max-w-3xl mx-auto px-4 h-14 flex items-center justify-between",children:[u.jsx("button",{onClick:n,className:"headline-serif text-xl text-brand",children:cr}),u.jsxs("button",{onClick:n,className:"text-sm text-ink-500 hover:text-brand flex items-center gap-1",children:[u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]})]})}),u.jsxs("article",{className:"max-w-3xl mx-auto px-4 py-10",children:[u.jsx(wl,{slug:fe(e),breaking:e.breaking}),u.jsx("h1",{className:"headline-serif text-3xl md:text-[2.5rem] leading-tight mt-4 mb-6",children:e.title}),u.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500 mb-8 pb-6 border-b border-ink-200",children:[u.jsx("span",{className:"font-semibold text-ink-700",children:e.author||"Prompt Daily 편집팀"}),u.jsx("span",{children:"·"}),u.jsx("span",{className:"mono",children:md(e.date)}),u.jsx("span",{children:"·"}),u.jsxs("span",{children:[e.readTime||"5분"," 읽기"]})]}),u.jsx("img",{src:Sl(e,fe(e)),srcSet:fd()||void 0,sizes:"(min-width: 768px) 768px, 100vw",onError:xl(fe(e)),alt:"",className:"w-full mb-8"}),u.jsx("div",{className:"border-l-4 border-brand bg-brand-tint p-5 mb-10 serif text-lg text-brand-dark",children:e.summary}),u.jsx("div",{className:"article-body",children:cm(e.content)}),u.jsxs("div",{className:"mt-12 pt-8 border-t border-ink-200 flex items-center gap-3 flex-wrap",children:[u.jsx("span",{className:"text-sm text-ink-500",children:"공유:"}),u.jsx("a",{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(e.title)}&url=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"X"}),u.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"Facebook"}),u.jsx("button",{onClick:r,className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"링크 복사"})]})]}),u.jsx(hd,{})]})}function Sm({onClose:e,onSuccess:n}){const[t,r]=A.useState(!1),[l,i]=A.useState(""),o=async a=>{r(!0),i("");try{const s=await a();s.success&&n(s.user)}catch(s){i(s.error||"로그인에 실패했습니다.")}r(!1)};return u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4",onClick:e,children:u.jsxs("div",{className:"bg-white max-w-sm w-full p-8",onClick:a=>a.stopPropagation(),children:[u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-2",children:"로그인"}),u.jsx("p",{className:"text-sm text-ink-500 mb-6",children:"구독과 스크랩을 위해 로그인해주세요"}),l&&u.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 text-sm",children:l}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("button",{disabled:t,onClick:()=>o(qp),className:"w-full py-3 bg-[#FEE500] text-black font-bold flex items-center justify-center gap-2 disabled:opacity-50",children:"카카오로 로그인"}),u.jsx("button",{disabled:t,onClick:()=>o(tm),className:"w-full py-3 border border-ink-200 font-bold flex items-center justify-center gap-2 hover:border-ink-300 disabled:opacity-50",children:"Google로 로그인"})]}),u.jsx("button",{onClick:e,className:"mt-6 w-full text-sm text-ink-500 hover:text-brand",children:"닫기"})]})})}function xm(){const[e,n]=A.useState(()=>Zp.articles||[]),[t,r]=A.useState(null),[l,i]=A.useState("static");return A.useEffect(()=>{},[]),{articles:e,liveMostViewed:t,dataSource:l}}function Ks({store:e,ui:n}){var w;const{articles:t,liveMostViewed:r}=e,l=Ar(),i=ld(),o=d=>l(`/article/${d.id}`),a=i.slug&&ho[i.slug]?i.slug:"all",[s,c]=A.useState("");A.useEffect(()=>{dd()},[]),A.useEffect(()=>{c("")},[a]);const h=A.useMemo(()=>{let d=t;if(a!=="all"&&(d=d.filter(f=>fe(f)===a)),s){const f=s.toLowerCase();d=d.filter(p=>p.title.toLowerCase().includes(f)||(p.summary||"").toLowerCase().includes(f))}return d},[t,a,s]),m=A.useMemo(()=>{const d=h.filter(p=>p.breaking),f=h.filter(p=>!p.breaking);return[...d,...f].slice(0,3)},[h]),g=A.useMemo(()=>t.filter(d=>d.breaking).slice(0,6),[t]),v=A.useMemo(()=>r&&r.length>0?r:[...t].sort((d,f)=>new Date(f.date)-new Date(d.date)).slice(0,10),[t,r]),S=A.useMemo(()=>vt.slice(1).map(d=>({category:d,items:h.filter(f=>fe(f)===d.slug).slice(0,4)})).filter(d=>d.items.length>0),[h]),y=d=>{l(d==="all"?"/":`/category/${d}`),window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsx(dm,{user:n.user,onLoginClick:n.onLoginClick,onLogoutClick:n.onLogoutClick,activeSlug:a,onCategoryClick:y,onSearch:c}),u.jsx(fm,{items:g,onClick:o}),s&&u.jsx("div",{className:"bg-brand-tint border-b border-brand/10",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-3 text-sm text-brand",children:[u.jsxs("strong",{children:['"',s,'"']})," 검색결과 ",h.length,"건",u.jsx("button",{onClick:()=>c(""),className:"ml-3 underline",children:"초기화"})]})}),m.length>0&&u.jsx(pm,{articles:m,onOpen:o}),u.jsxs("div",{className:"max-w-page mx-auto px-4",children:[u.jsx("hr",{className:"hr-double"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-magazine gap-10",children:[u.jsx("main",{children:a==="all"?S.map(({category:d,items:f})=>u.jsx(mm,{category:d,articles:f,onOpen:o},d.slug)):u.jsxs("section",{className:"py-10",children:[u.jsx("div",{className:"section-label mb-6",children:((w=ho[a])==null?void 0:w.name)||"전체"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:h.map(d=>u.jsx(Ao,{article:d,onClick:o},d.id))}),h.length===0&&u.jsx("p",{className:"text-center py-20 text-ink-400",children:"해당 카테고리의 기사가 없습니다."})]})}),u.jsx(hm,{articles:v,onOpen:o})]})]}),u.jsx(gm,{email:n.email,setEmail:n.setEmail,subscribed:n.subscribed,onSubmit:n.onSubscribe}),u.jsx(hd,{})]})}function wm({store:e}){const{id:n}=ld(),t=Ar(),r=e.articles.find(l=>String(l.id)===String(n));return e.dataSource==="loading"?u.jsx("div",{className:"min-h-screen flex items-center justify-center text-ink-400",children:"불러오는 중…"}):r?u.jsx(vm,{article:r,onBack:()=>t("/")}):u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"해당 기사를 찾을 수 없습니다."}),u.jsx(Bn,{to:"/",className:"text-brand underline",children:"홈으로"})]})}function Cm(){const e=xm(),[n,t]=A.useState(""),[r,l]=A.useState(!1),[i,o]=A.useState(null),[a,s]=A.useState(!1);A.useEffect(()=>{const g=localStorage.getItem("prompt_daily_user");g&&o(JSON.parse(g))},[]);const m={user:i,email:n,setEmail:t,subscribed:r,onSubscribe:async g=>{g.preventDefault(),n&&(l(!0),setTimeout(()=>{t(""),l(!1)},3e3))},onLoginClick:()=>s(!0),onLogoutClick:async()=>{await rm(),localStorage.removeItem("prompt_daily_user"),o(null)}};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsxs(Kp,{children:[u.jsx(Un,{path:"/",element:u.jsx(Ks,{store:e,ui:m})}),u.jsx(Un,{path:"/article/:id",element:u.jsx(wm,{store:e})}),u.jsx(Un,{path:"/category/:slug",element:u.jsx(Ks,{store:e,ui:m})}),u.jsx(Un,{path:"/admin/*",element:u.jsx(sm,{})}),u.jsx(Un,{path:"*",element:u.jsx(_p,{to:"/",replace:!0})})]}),!1,a&&u.jsx(Sm,{onClose:()=>s(!1),onSuccess:g=>{o(g),localStorage.setItem("prompt_daily_user",JSON.stringify(g)),s(!1)}})]})}const km="/ai-news-daily/".replace(/\/$/,"")||"/";Ii.createRoot(document.getElementById("root")).render(u.jsx(Js.StrictMode,{children:u.jsx(Wp,{basename:km,children:u.jsx(Cm,{})})}));
