function g0(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function I0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Us={exports:{}},Pl={},Ks={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),y0=Symbol.for("react.portal"),v0=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),x0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),Ia=Symbol.iterator;function T0(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Fs={};function ht(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||zs}ht.prototype.isReactComponent={};ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ws(){}Ws.prototype=ht.prototype;function Ii(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||zs}var yi=Ii.prototype=new Ws;yi.constructor=Ii;Vs(yi,ht.prototype);yi.isPureReactComponent=!0;var ya=Array.isArray,$s=Object.prototype.hasOwnProperty,vi={current:null},Xs={key:!0,ref:!0,__self:!0,__source:!0};function Qs(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)$s.call(n,r)&&!Xs.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:dr,type:e,key:o,ref:i,props:l,_owner:vi.current}}function L0(e,n){return{$$typeof:dr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Si(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function N0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var va=/\/+/g;function Fl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?N0(""+e.key):n.toString(36)}function Hr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case dr:case y0:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Fl(i,0):r,ya(l)?(t="",e!=null&&(t=e.replace(va,"$&/")+"/"),Hr(l,n,t,"",function(c){return c})):l!=null&&(Si(l)&&(l=L0(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(va,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",ya(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Fl(o,a);i+=Hr(o,n,t,s,l)}else if(s=T0(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Fl(o,a++),i+=Hr(o,n,t,s,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function vr(e,n,t){if(e==null)return e;var r=[],l=0;return Hr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function O0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},_r={transition:null},G0={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:_r,ReactCurrentOwner:vi};function bs(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:vr,forEach:function(e,n,t){vr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vr(e,function(){n++}),n},toArray:function(e){return vr(e,function(n){return n})||[]},only:function(e){if(!Si(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=ht;O.Fragment=v0;O.Profiler=x0;O.PureComponent=Ii;O.StrictMode=S0;O.Suspense=k0;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0;O.act=bs;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vs({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=vi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)$s.call(n,s)&&!Xs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dr,type:e.type,key:l,ref:o,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:P0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w0,_context:e},e.Consumer=e};O.createElement=Qs;O.createFactory=function(e){var n=Qs.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:C0,render:e}};O.isValidElement=Si;O.lazy=function(e){return{$$typeof:M0,_payload:{_status:-1,_result:e},_init:O0}};O.memo=function(e,n){return{$$typeof:E0,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=_r.transition;_r.transition={};try{e()}finally{_r.transition=n}};O.unstable_act=bs;O.useCallback=function(e,n){return ue.current.useCallback(e,n)};O.useContext=function(e){return ue.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};O.useEffect=function(e,n){return ue.current.useEffect(e,n)};O.useId=function(){return ue.current.useId()};O.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return ue.current.useMemo(e,n)};O.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};O.useRef=function(e){return ue.current.useRef(e)};O.useState=function(e){return ue.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return ue.current.useTransition()};O.version="18.3.1";Ks.exports=O;var g=Ks.exports;const Ys=I0(g),B0=g0({__proto__:null,default:Ys},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=g,R0=Symbol.for("react.element"),j0=Symbol.for("react.fragment"),H0=Object.prototype.hasOwnProperty,_0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)H0.call(n,r)&&!U0.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:R0,type:e,key:o,ref:i,props:l,_owner:_0.current}}Pl.Fragment=j0;Pl.jsx=Js;Pl.jsxs=Js;Us.exports=Pl;var u=Us.exports,yo={},Zs={exports:{}},Se={},qs={exports:{}},eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,L){var N=k.length;k.push(L);e:for(;0<N;){var W=N-1>>>1,J=k[W];if(0<l(J,L))k[W]=L,k[N]=J,N=W;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var L=k[0],N=k.pop();if(N!==L){k[0]=N;e:for(var W=0,J=k.length,Ir=J>>>1;W<Ir;){var Pn=2*(W+1)-1,Vl=k[Pn],Cn=Pn+1,yr=k[Cn];if(0>l(Vl,N))Cn<J&&0>l(yr,Vl)?(k[W]=yr,k[Cn]=N,W=Cn):(k[W]=Vl,k[Pn]=N,W=Pn);else if(Cn<J&&0>l(yr,N))k[W]=yr,k[Cn]=N,W=Cn;else break e}}return L}function l(k,L){var N=k.sortIndex-L.sortIndex;return N!==0?N:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,m=null,A=3,v=!1,S=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var L=t(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=k)r(c),L.sortIndex=L.expirationTime,n(s,L);else break;L=t(c)}}function I(k){if(y=!1,p(k),!S)if(t(s)!==null)S=!0,Kl(P);else{var L=t(c);L!==null&&zl(I,L.startTime-k)}}function P(k,L){S=!1,y&&(y=!1,d(T),T=-1),v=!0;var N=A;try{for(p(L),m=t(s);m!==null&&(!(m.expirationTime>L)||k&&!Le());){var W=m.callback;if(typeof W=="function"){m.callback=null,A=m.priorityLevel;var J=W(m.expirationTime<=L);L=e.unstable_now(),typeof J=="function"?m.callback=J:m===t(s)&&r(s),p(L)}else r(s);m=t(s)}if(m!==null)var Ir=!0;else{var Pn=t(c);Pn!==null&&zl(I,Pn.startTime-L),Ir=!1}return Ir}finally{m=null,A=N,v=!1}}var E=!1,M=null,T=-1,F=5,G=-1;function Le(){return!(e.unstable_now()-G<F)}function St(){if(M!==null){var k=e.unstable_now();G=k;var L=!0;try{L=M(!0,k)}finally{L?xt():(E=!1,M=null)}}else E=!1}var xt;if(typeof f=="function")xt=function(){f(St)};else if(typeof MessageChannel<"u"){var ga=new MessageChannel,A0=ga.port2;ga.port1.onmessage=St,xt=function(){A0.postMessage(null)}}else xt=function(){w(St,0)};function Kl(k){M=k,E||(E=!0,xt())}function zl(k,L){T=w(function(){k(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,Kl(P))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return A},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(k){switch(A){case 1:case 2:case 3:var L=3;break;default:L=A}var N=A;A=L;try{return k()}finally{A=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var N=A;A=k;try{return L()}finally{A=N}},e.unstable_scheduleCallback=function(k,L,N){var W=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?W+N:W):N=W,k){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=N+J,k={id:h++,callback:L,priorityLevel:k,startTime:N,expirationTime:J,sortIndex:-1},N>W?(k.sortIndex=N,n(c,k),t(s)===null&&k===t(c)&&(y?(d(T),T=-1):y=!0,zl(I,N-W))):(k.sortIndex=J,n(s,k),S||v||(S=!0,Kl(P))),k},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(k){var L=A;return function(){var N=A;A=L;try{return k.apply(this,arguments)}finally{A=N}}}})(eu);qs.exports=eu;var K0=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=g,ve=K0;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nu=new Set,Wt={};function _n(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Wt[e]=n,e=0;e<n.length;e++)nu.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vo=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sa={},xa={};function F0(e){return vo.call(xa,e)?!0:vo.call(Sa,e)?!1:V0.test(e)?xa[e]=!0:(Sa[e]=!0,!1)}function W0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $0(e,n,t,r){if(n===null||typeof n>"u"||W0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var xi=/[\-:]([a-z])/g;function wi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xi,wi);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xi,wi);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xi,wi);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pi(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($0(n,t,l,r)&&(t=null),r||l===null?F0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ze=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Ci=Symbol.for("react.strict_mode"),So=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),ki=Symbol.for("react.forward_ref"),xo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),Ei=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),wa=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,Wl;function Ot(e){if(Wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Wl=n&&n[1]||""}return`
`+Wl+e}var $l=!1;function Xl(e,n){if(!e||$l)return"";$l=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ot(e):""}function X0(e){switch(e.tag){case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 2:case 15:return e=Xl(e.type,!1),e;case 11:return e=Xl(e.type.render,!1),e;case 1:return e=Xl(e.type,!0),e;default:return""}}function Po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Vn:return"Portal";case So:return"Profiler";case Ci:return"StrictMode";case xo:return"Suspense";case wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ru:return(e.displayName||"Context")+".Consumer";case tu:return(e._context.displayName||"Context")+".Provider";case ki:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ei:return n=e.displayName||null,n!==null?n:Po(e.type)||"Memo";case nn:n=e._payload,e=e._init;try{return Po(e(n))}catch{}}return null}function Q0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Po(n);case 8:return n===Ci?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function b0(e){var n=ou(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xr(e){e._valueTracker||(e._valueTracker=b0(e))}function iu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Co(e,n){var t=n.checked;return z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Pa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=In(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function au(e,n){n=n.checked,n!=null&&Pi(e,"checked",n,!1)}function ko(e,n){au(e,n);var t=In(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Eo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Eo(e,n.type,In(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ca(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Eo(e,n,t){(n!=="number"||Yr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Gt=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+In(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Mo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ka(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(Gt(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:In(t)}}function su(e,n){var t=In(n.value),r=In(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ea(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function To(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?uu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["Webkit","ms","Moz","O"];Object.keys(Rt).forEach(function(e){Y0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rt[n]=Rt[e]})});function du(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rt.hasOwnProperty(e)&&Rt[e]?(""+n).trim():n+"px"}function fu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=du(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var J0=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(e,n){if(n){if(J0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function No(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oo=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Go=null,rt=null,lt=null;function Ma(e){if(e=mr(e)){if(typeof Go!="function")throw Error(x(280));var n=e.stateNode;n&&(n=Tl(n),Go(e.stateNode,e.type,n))}}function pu(e){rt?lt?lt.push(e):lt=[e]:rt=e}function mu(){if(rt){var e=rt,n=lt;if(lt=rt=null,Ma(e),n)for(e=0;e<n.length;e++)Ma(n[e])}}function hu(e,n){return e(n)}function Au(){}var Ql=!1;function gu(e,n,t){if(Ql)return e(n,t);Ql=!0;try{return hu(e,n,t)}finally{Ql=!1,(rt!==null||lt!==null)&&(Au(),mu())}}function Xt(e,n){var t=e.stateNode;if(t===null)return null;var r=Tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var Bo=!1;if(Qe)try{var Pt={};Object.defineProperty(Pt,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch{Bo=!1}function Z0(e,n,t,r,l,o,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var jt=!1,Jr=null,Zr=!1,Do=null,q0={onError:function(e){jt=!0,Jr=e}};function ed(e,n,t,r,l,o,i,a,s){jt=!1,Jr=null,Z0.apply(q0,arguments)}function nd(e,n,t,r,l,o,i,a,s){if(ed.apply(this,arguments),jt){if(jt){var c=Jr;jt=!1,Jr=null}else throw Error(x(198));Zr||(Zr=!0,Do=c)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Iu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ta(e){if(Un(e)!==e)throw Error(x(188))}function td(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Ta(l),e;if(o===r)return Ta(l),n;o=o.sibling}throw Error(x(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function yu(e){return e=td(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=vu(e);if(n!==null)return n;e=e.sibling}return null}var Su=ve.unstable_scheduleCallback,La=ve.unstable_cancelCallback,rd=ve.unstable_shouldYield,ld=ve.unstable_requestPaint,$=ve.unstable_now,od=ve.unstable_getCurrentPriorityLevel,Ti=ve.unstable_ImmediatePriority,xu=ve.unstable_UserBlockingPriority,qr=ve.unstable_NormalPriority,id=ve.unstable_LowPriority,wu=ve.unstable_IdlePriority,Cl=null,Ke=null;function ad(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:cd,sd=Math.log,ud=Math.LN2;function cd(e){return e>>>=0,e===0?32:31-(sd(e)/ud|0)|0}var Pr=64,Cr=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~l;a!==0?r=Bt(a):(o&=i,o!==0&&(r=Bt(o)))}else i=t&~l,i!==0?r=Bt(i):o!==0&&(r=Bt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),l=1<<t,r|=e[t],n&=~l;return r}function dd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-De(o),a=1<<i,s=l[i];s===-1?(!(a&t)||a&r)&&(l[i]=dd(a,n)):s<=n&&(e.expiredLanes|=a),o&=~a}}function Ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pu(){var e=Pr;return Pr<<=1,!(Pr&4194240)&&(Pr=64),e}function bl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function fr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function pd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-De(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function Li(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var D=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ku,Ni,Eu,Mu,Tu,jo=!1,kr=[],un=null,cn=null,dn=null,Qt=new Map,bt=new Map,rn=[],md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bt.delete(n.pointerId)}}function Ct(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=mr(n),n!==null&&Ni(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function hd(e,n,t,r,l){switch(n){case"focusin":return un=Ct(un,e,n,t,r,l),!0;case"dragenter":return cn=Ct(cn,e,n,t,r,l),!0;case"mouseover":return dn=Ct(dn,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Qt.set(o,Ct(Qt.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,bt.set(o,Ct(bt.get(o)||null,e,n,t,r,l)),!0}return!1}function Lu(e){var n=Mn(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=Iu(t),n!==null){e.blockedOn=n,Tu(e.priority,function(){Eu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ho(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Oo=r,t.target.dispatchEvent(r),Oo=null}else return n=mr(t),n!==null&&Ni(n),e.blockedOn=t,!1;n.shift()}return!0}function Oa(e,n,t){Ur(e)&&t.delete(n)}function Ad(){jo=!1,un!==null&&Ur(un)&&(un=null),cn!==null&&Ur(cn)&&(cn=null),dn!==null&&Ur(dn)&&(dn=null),Qt.forEach(Oa),bt.forEach(Oa)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,jo||(jo=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,Ad)))}function Yt(e){function n(l){return kt(l,e)}if(0<kr.length){kt(kr[0],e);for(var t=1;t<kr.length;t++){var r=kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&kt(un,e),cn!==null&&kt(cn,e),dn!==null&&kt(dn,e),Qt.forEach(n),bt.forEach(n),t=0;t<rn.length;t++)r=rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)Lu(t),t.blockedOn===null&&rn.shift()}var ot=Ze.ReactCurrentBatchConfig,nl=!0;function gd(e,n,t,r){var l=D,o=ot.transition;ot.transition=null;try{D=1,Oi(e,n,t,r)}finally{D=l,ot.transition=o}}function Id(e,n,t,r){var l=D,o=ot.transition;ot.transition=null;try{D=4,Oi(e,n,t,r)}finally{D=l,ot.transition=o}}function Oi(e,n,t,r){if(nl){var l=Ho(e,n,t,r);if(l===null)oo(e,n,r,tl,t),Na(e,r);else if(hd(l,e,n,t,r))r.stopPropagation();else if(Na(e,r),n&4&&-1<md.indexOf(e)){for(;l!==null;){var o=mr(l);if(o!==null&&ku(o),o=Ho(e,n,t,r),o===null&&oo(e,n,r,tl,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else oo(e,n,r,null,t)}}var tl=null;function Ho(e,n,t,r){if(tl=null,e=Mi(r),e=Mn(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Iu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return tl=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case Ti:return 1;case xu:return 4;case qr:case id:return 16;case wu:return 536870912;default:return 16}default:return 16}}var on=null,Gi=null,Kr=null;function Ou(){if(Kr)return Kr;var e,n=Gi,t=n.length,r,l="value"in on?on.value:on.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return Kr=l.slice(e,1<r?1-r:void 0)}function zr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Ga(){return!1}function xe(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:Ga,this.isPropagationStopped=Ga,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=xe(At),pr=z({},At,{view:0,detail:0}),yd=xe(pr),Yl,Jl,Et,kl=z({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Et&&(Et&&e.type==="mousemove"?(Yl=e.screenX-Et.screenX,Jl=e.screenY-Et.screenY):Jl=Yl=0,Et=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),Ba=xe(kl),vd=z({},kl,{dataTransfer:0}),Sd=xe(vd),xd=z({},pr,{relatedTarget:0}),Zl=xe(xd),wd=z({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=xe(wd),Cd=z({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kd=xe(Cd),Ed=z({},At,{data:0}),Da=xe(Ed),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ld[e])?!!n[e]:!1}function Di(){return Nd}var Od=z({},pr,{key:function(e){if(e.key){var n=Md[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Di,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=xe(Od),Bd=z({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=xe(Bd),Dd=z({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Di}),Rd=xe(Dd),jd=z({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hd=xe(jd),_d=z({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=xe(_d),Kd=[9,13,27,32],Ri=Qe&&"CompositionEvent"in window,Ht=null;Qe&&"documentMode"in document&&(Ht=document.documentMode);var zd=Qe&&"TextEvent"in window&&!Ht,Gu=Qe&&(!Ri||Ht&&8<Ht&&11>=Ht),ja=" ",Ha=!1;function Bu(e,n){switch(e){case"keyup":return Kd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Vd(e,n){switch(e){case"compositionend":return Du(n);case"keypress":return n.which!==32?null:(Ha=!0,ja);case"textInput":return e=n.data,e===ja&&Ha?null:e;default:return null}}function Fd(e,n){if(Wn)return e==="compositionend"||!Ri&&Bu(e,n)?(e=Ou(),Kr=Gi=on=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gu&&n.locale!=="ko"?null:n.data;default:return null}}var Wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wd[e.type]:n==="textarea"}function Ru(e,n,t,r){pu(r),n=rl(n,"onChange"),0<n.length&&(t=new Bi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var _t=null,Jt=null;function $d(e){Xu(e,0)}function El(e){var n=Qn(e);if(iu(n))return e}function Xd(e,n){if(e==="change")return n}var ju=!1;if(Qe){var ql;if(Qe){var eo="oninput"in document;if(!eo){var Ua=document.createElement("div");Ua.setAttribute("oninput","return;"),eo=typeof Ua.oninput=="function"}ql=eo}else ql=!1;ju=ql&&(!document.documentMode||9<document.documentMode)}function Ka(){_t&&(_t.detachEvent("onpropertychange",Hu),Jt=_t=null)}function Hu(e){if(e.propertyName==="value"&&El(Jt)){var n=[];Ru(n,Jt,e,Mi(e)),gu($d,n)}}function Qd(e,n,t){e==="focusin"?(Ka(),_t=n,Jt=t,_t.attachEvent("onpropertychange",Hu)):e==="focusout"&&Ka()}function bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Jt)}function Yd(e,n){if(e==="click")return El(n)}function Jd(e,n){if(e==="input"||e==="change")return El(n)}function Zd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var je=typeof Object.is=="function"?Object.is:Zd;function Zt(e,n){if(je(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!vo.call(n,l)||!je(e[l],n[l]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Va(e,n){var t=za(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=za(t)}}function _u(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_u(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uu(){for(var e=window,n=Yr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Yr(e.document)}return n}function ji(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function qd(e){var n=Uu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&_u(t.ownerDocument.documentElement,t)){if(r!==null&&ji(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Va(t,o);var i=Va(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ef=Qe&&"documentMode"in document&&11>=document.documentMode,$n=null,_o=null,Ut=null,Uo=!1;function Fa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Uo||$n==null||$n!==Yr(r)||(r=$n,"selectionStart"in r&&ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ut&&Zt(Ut,r)||(Ut=r,r=rl(_o,"onSelect"),0<r.length&&(n=new Bi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$n)))}function Mr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},no={},Ku={};Qe&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Ml(e){if(no[e])return no[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ku)return no[e]=n[t];return e}var zu=Ml("animationend"),Vu=Ml("animationiteration"),Fu=Ml("animationstart"),Wu=Ml("transitionend"),$u=new Map,Wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,n){$u.set(e,n),_n(n,[e])}for(var to=0;to<Wa.length;to++){var ro=Wa[to],nf=ro.toLowerCase(),tf=ro[0].toUpperCase()+ro.slice(1);vn(nf,"on"+tf)}vn(zu,"onAnimationEnd");vn(Vu,"onAnimationIteration");vn(Fu,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Wu,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function $a(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,nd(r,n,void 0,e),e.currentTarget=null}function Xu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;$a(l,a,c),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;$a(l,a,c),o=s}}}if(Zr)throw e=Do,Zr=!1,Do=null,e}function j(e,n){var t=n[Wo];t===void 0&&(t=n[Wo]=new Set);var r=e+"__bubble";t.has(r)||(Qu(n,e,2,!1),t.add(r))}function lo(e,n,t){var r=0;n&&(r|=4),Qu(t,e,r,n)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function qt(e){if(!e[Tr]){e[Tr]=!0,nu.forEach(function(t){t!=="selectionchange"&&(rf.has(t)||lo(t,!1,e),lo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tr]||(n[Tr]=!0,lo("selectionchange",!1,n))}}function Qu(e,n,t,r){switch(Nu(n)){case 1:var l=gd;break;case 4:l=Id;break;default:l=Oi}t=l.bind(null,n,t,e),l=void 0,!Bo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function oo(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Mn(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}gu(function(){var c=o,h=Mi(t),m=[];e:{var A=$u.get(e);if(A!==void 0){var v=Bi,S=e;switch(e){case"keypress":if(zr(t)===0)break e;case"keydown":case"keyup":v=Gd;break;case"focusin":S="focus",v=Zl;break;case"focusout":S="blur",v=Zl;break;case"beforeblur":case"afterblur":v=Zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rd;break;case zu:case Vu:case Fu:v=Pd;break;case Wu:v=Hd;break;case"scroll":v=yd;break;case"wheel":v=Ud;break;case"copy":case"cut":case"paste":v=kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ra}var y=(n&4)!==0,w=!y&&e==="scroll",d=y?A!==null?A+"Capture":null:A;y=[];for(var f=c,p;f!==null;){p=f;var I=p.stateNode;if(p.tag===5&&I!==null&&(p=I,d!==null&&(I=Xt(f,d),I!=null&&y.push(er(f,I,p)))),w)break;f=f.return}0<y.length&&(A=new v(A,S,null,t,h),m.push({event:A,listeners:y}))}}if(!(n&7)){e:{if(A=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",A&&t!==Oo&&(S=t.relatedTarget||t.fromElement)&&(Mn(S)||S[be]))break e;if((v||A)&&(A=h.window===h?h:(A=h.ownerDocument)?A.defaultView||A.parentWindow:window,v?(S=t.relatedTarget||t.toElement,v=c,S=S?Mn(S):null,S!==null&&(w=Un(S),S!==w||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(y=Ba,I="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ra,I="onPointerLeave",d="onPointerEnter",f="pointer"),w=v==null?A:Qn(v),p=S==null?A:Qn(S),A=new y(I,f+"leave",v,t,h),A.target=w,A.relatedTarget=p,I=null,Mn(h)===c&&(y=new y(d,f+"enter",S,t,h),y.target=p,y.relatedTarget=w,I=y),w=I,v&&S)n:{for(y=v,d=S,f=0,p=y;p;p=Kn(p))f++;for(p=0,I=d;I;I=Kn(I))p++;for(;0<f-p;)y=Kn(y),f--;for(;0<p-f;)d=Kn(d),p--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break n;y=Kn(y),d=Kn(d)}y=null}else y=null;v!==null&&Xa(m,A,v,y,!1),S!==null&&w!==null&&Xa(m,w,S,y,!0)}}e:{if(A=c?Qn(c):window,v=A.nodeName&&A.nodeName.toLowerCase(),v==="select"||v==="input"&&A.type==="file")var P=Xd;else if(_a(A))if(ju)P=Jd;else{P=bd;var E=Qd}else(v=A.nodeName)&&v.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(P=Yd);if(P&&(P=P(e,c))){Ru(m,P,t,h);break e}E&&E(e,A,c),e==="focusout"&&(E=A._wrapperState)&&E.controlled&&A.type==="number"&&Eo(A,"number",A.value)}switch(E=c?Qn(c):window,e){case"focusin":(_a(E)||E.contentEditable==="true")&&($n=E,_o=c,Ut=null);break;case"focusout":Ut=_o=$n=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,Fa(m,t,h);break;case"selectionchange":if(ef)break;case"keydown":case"keyup":Fa(m,t,h)}var M;if(Ri)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Wn?Bu(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Gu&&t.locale!=="ko"&&(Wn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Wn&&(M=Ou()):(on=h,Gi="value"in on?on.value:on.textContent,Wn=!0)),E=rl(c,T),0<E.length&&(T=new Da(T,e,null,t,h),m.push({event:T,listeners:E}),M?T.data=M:(M=Du(t),M!==null&&(T.data=M)))),(M=zd?Vd(e,t):Fd(e,t))&&(c=rl(c,"onBeforeInput"),0<c.length&&(h=new Da("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=M))}Xu(m,n)})}function er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function rl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Xt(e,t),o!=null&&r.unshift(er(e,o,l)),o=Xt(e,n),o!=null&&r.push(er(e,o,l))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Xt(t,o),s!=null&&i.unshift(er(t,s,a))):l||(s=Xt(t,o),s!=null&&i.push(er(t,s,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var lf=/\r\n?/g,of=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(lf,`
`).replace(of,"")}function Lr(e,n,t){if(n=Qa(n),Qa(e)!==n&&t)throw Error(x(425))}function ll(){}var Ko=null,zo=null;function Vo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fo=typeof setTimeout=="function"?setTimeout:void 0,af=typeof clearTimeout=="function"?clearTimeout:void 0,ba=typeof Promise=="function"?Promise:void 0,sf=typeof queueMicrotask=="function"?queueMicrotask:typeof ba<"u"?function(e){return ba.resolve(null).then(e).catch(uf)}:Fo;function uf(e){setTimeout(function(){throw e})}function io(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Yt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Yt(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ya(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var gt=Math.random().toString(36).slice(2),Ue="__reactFiber$"+gt,nr="__reactProps$"+gt,be="__reactContainer$"+gt,Wo="__reactEvents$"+gt,cf="__reactListeners$"+gt,df="__reactHandles$"+gt;function Mn(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[be]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ya(e);e!==null;){if(t=e[Ue])return t;e=Ya(e)}return n}e=t,t=e.parentNode}return null}function mr(e){return e=e[Ue]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Tl(e){return e[nr]||null}var $o=[],bn=-1;function Sn(e){return{current:e}}function H(e){0>bn||(e.current=$o[bn],$o[bn]=null,bn--)}function R(e,n){bn++,$o[bn]=e.current,e.current=n}var yn={},ie=Sn(yn),me=Sn(!1),Gn=yn;function ut(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function ol(){H(me),H(ie)}function Ja(e,n,t){if(ie.current!==yn)throw Error(x(168));R(ie,n),R(me,t)}function bu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(x(108,Q0(e)||"Unknown",l));return z({},t,r)}function il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Gn=ie.current,R(ie,e),R(me,me.current),!0}function Za(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=bu(e,n,Gn),r.__reactInternalMemoizedMergedChildContext=e,H(me),H(ie),R(ie,e)):H(me),R(me,t)}var Fe=null,Ll=!1,ao=!1;function Yu(e){Fe===null?Fe=[e]:Fe.push(e)}function ff(e){Ll=!0,Yu(e)}function xn(){if(!ao&&Fe!==null){ao=!0;var e=0,n=D;try{var t=Fe;for(D=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fe=null,Ll=!1}catch(l){throw Fe!==null&&(Fe=Fe.slice(e+1)),Su(Ti,xn),l}finally{D=n,ao=!1}}return null}var Yn=[],Jn=0,al=null,sl=0,Pe=[],Ce=0,Bn=null,We=1,$e="";function kn(e,n){Yn[Jn++]=sl,Yn[Jn++]=al,al=e,sl=n}function Ju(e,n,t){Pe[Ce++]=We,Pe[Ce++]=$e,Pe[Ce++]=Bn,Bn=e;var r=We;e=$e;var l=32-De(r)-1;r&=~(1<<l),t+=1;var o=32-De(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-De(n)+l|t<<l|r,$e=o+e}else We=1<<o|t<<l|r,$e=e}function Hi(e){e.return!==null&&(kn(e,1),Ju(e,1,0))}function _i(e){for(;e===al;)al=Yn[--Jn],Yn[Jn]=null,sl=Yn[--Jn],Yn[Jn]=null;for(;e===Bn;)Bn=Pe[--Ce],Pe[Ce]=null,$e=Pe[--Ce],Pe[Ce]=null,We=Pe[--Ce],Pe[Ce]=null}var ye=null,Ie=null,_=!1,Be=null;function Zu(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,Ie=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,Ie=null,!0):!1;default:return!1}}function Xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qo(e){if(_){var n=Ie;if(n){var t=n;if(!qa(e,n)){if(Xo(e))throw Error(x(418));n=fn(t.nextSibling);var r=ye;n&&qa(e,n)?Zu(r,t):(e.flags=e.flags&-4097|2,_=!1,ye=e)}}else{if(Xo(e))throw Error(x(418));e.flags=e.flags&-4097|2,_=!1,ye=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Nr(e){if(e!==ye)return!1;if(!_)return es(e),_=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Vo(e.type,e.memoizedProps)),n&&(n=Ie)){if(Xo(e))throw qu(),Error(x(418));for(;n;)Zu(e,n),n=fn(n.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=ye?fn(e.stateNode.nextSibling):null;return!0}function qu(){for(var e=Ie;e;)e=fn(e.nextSibling)}function ct(){Ie=ye=null,_=!1}function Ui(e){Be===null?Be=[e]:Be.push(e)}var pf=Ze.ReactCurrentBatchConfig;function Mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function Or(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ns(e){var n=e._init;return n(e._payload)}function ec(e){function n(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function t(d,f){if(!e)return null;for(;f!==null;)n(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function l(d,f){return d=An(d,f),d.index=0,d.sibling=null,d}function o(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,I){return f===null||f.tag!==6?(f=ho(p,d.mode,I),f.return=d,f):(f=l(f,p),f.return=d,f)}function s(d,f,p,I){var P=p.type;return P===Fn?h(d,f,p.props.children,I,p.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===nn&&ns(P)===f.type)?(I=l(f,p.props),I.ref=Mt(d,f,p),I.return=d,I):(I=br(p.type,p.key,p.props,null,d.mode,I),I.ref=Mt(d,f,p),I.return=d,I)}function c(d,f,p,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Ao(p,d.mode,I),f.return=d,f):(f=l(f,p.children||[]),f.return=d,f)}function h(d,f,p,I,P){return f===null||f.tag!==7?(f=On(p,d.mode,I,P),f.return=d,f):(f=l(f,p),f.return=d,f)}function m(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ho(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:return p=br(f.type,f.key,f.props,null,d.mode,p),p.ref=Mt(d,null,f),p.return=d,p;case Vn:return f=Ao(f,d.mode,p),f.return=d,f;case nn:var I=f._init;return m(d,I(f._payload),p)}if(Gt(f)||wt(f))return f=On(f,d.mode,p,null),f.return=d,f;Or(d,f)}return null}function A(d,f,p,I){var P=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:a(d,f,""+p,I);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===P?s(d,f,p,I):null;case Vn:return p.key===P?c(d,f,p,I):null;case nn:return P=p._init,A(d,f,P(p._payload),I)}if(Gt(p)||wt(p))return P!==null?null:h(d,f,p,I,null);Or(d,p)}return null}function v(d,f,p,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return d=d.get(p)||null,a(f,d,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Sr:return d=d.get(I.key===null?p:I.key)||null,s(f,d,I,P);case Vn:return d=d.get(I.key===null?p:I.key)||null,c(f,d,I,P);case nn:var E=I._init;return v(d,f,p,E(I._payload),P)}if(Gt(I)||wt(I))return d=d.get(p)||null,h(f,d,I,P,null);Or(f,I)}return null}function S(d,f,p,I){for(var P=null,E=null,M=f,T=f=0,F=null;M!==null&&T<p.length;T++){M.index>T?(F=M,M=null):F=M.sibling;var G=A(d,M,p[T],I);if(G===null){M===null&&(M=F);break}e&&M&&G.alternate===null&&n(d,M),f=o(G,f,T),E===null?P=G:E.sibling=G,E=G,M=F}if(T===p.length)return t(d,M),_&&kn(d,T),P;if(M===null){for(;T<p.length;T++)M=m(d,p[T],I),M!==null&&(f=o(M,f,T),E===null?P=M:E.sibling=M,E=M);return _&&kn(d,T),P}for(M=r(d,M);T<p.length;T++)F=v(M,d,T,p[T],I),F!==null&&(e&&F.alternate!==null&&M.delete(F.key===null?T:F.key),f=o(F,f,T),E===null?P=F:E.sibling=F,E=F);return e&&M.forEach(function(Le){return n(d,Le)}),_&&kn(d,T),P}function y(d,f,p,I){var P=wt(p);if(typeof P!="function")throw Error(x(150));if(p=P.call(p),p==null)throw Error(x(151));for(var E=P=null,M=f,T=f=0,F=null,G=p.next();M!==null&&!G.done;T++,G=p.next()){M.index>T?(F=M,M=null):F=M.sibling;var Le=A(d,M,G.value,I);if(Le===null){M===null&&(M=F);break}e&&M&&Le.alternate===null&&n(d,M),f=o(Le,f,T),E===null?P=Le:E.sibling=Le,E=Le,M=F}if(G.done)return t(d,M),_&&kn(d,T),P;if(M===null){for(;!G.done;T++,G=p.next())G=m(d,G.value,I),G!==null&&(f=o(G,f,T),E===null?P=G:E.sibling=G,E=G);return _&&kn(d,T),P}for(M=r(d,M);!G.done;T++,G=p.next())G=v(M,d,T,G.value,I),G!==null&&(e&&G.alternate!==null&&M.delete(G.key===null?T:G.key),f=o(G,f,T),E===null?P=G:E.sibling=G,E=G);return e&&M.forEach(function(St){return n(d,St)}),_&&kn(d,T),P}function w(d,f,p,I){if(typeof p=="object"&&p!==null&&p.type===Fn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var P=p.key,E=f;E!==null;){if(E.key===P){if(P=p.type,P===Fn){if(E.tag===7){t(d,E.sibling),f=l(E,p.props.children),f.return=d,d=f;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===nn&&ns(P)===E.type){t(d,E.sibling),f=l(E,p.props),f.ref=Mt(d,E,p),f.return=d,d=f;break e}t(d,E);break}else n(d,E);E=E.sibling}p.type===Fn?(f=On(p.props.children,d.mode,I,p.key),f.return=d,d=f):(I=br(p.type,p.key,p.props,null,d.mode,I),I.ref=Mt(d,f,p),I.return=d,d=I)}return i(d);case Vn:e:{for(E=p.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){t(d,f.sibling),f=l(f,p.children||[]),f.return=d,d=f;break e}else{t(d,f);break}else n(d,f);f=f.sibling}f=Ao(p,d.mode,I),f.return=d,d=f}return i(d);case nn:return E=p._init,w(d,f,E(p._payload),I)}if(Gt(p))return S(d,f,p,I);if(wt(p))return y(d,f,p,I);Or(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(t(d,f.sibling),f=l(f,p),f.return=d,d=f):(t(d,f),f=ho(p,d.mode,I),f.return=d,d=f),i(d)):t(d,f)}return w}var dt=ec(!0),nc=ec(!1),ul=Sn(null),cl=null,Zn=null,Ki=null;function zi(){Ki=Zn=cl=null}function Vi(e){var n=ul.current;H(ul),e._currentValue=n}function bo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function it(e,n){cl=e,Ki=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Ki!==e)if(e={context:e,memoizedValue:n,next:null},Zn===null){if(cl===null)throw Error(x(308));Zn=e,cl.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return n}var Tn=null;function Fi(e){Tn===null?Tn=[e]:Tn.push(e)}function tc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Fi(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tn=!1;function Wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ye(e,t)}return l=r.interleaved,l===null?(n.next=n,Fi(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ye(e,t)}function Vr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Li(e,t)}}function ts(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function dl(e,n,t,r){var l=e.updateQueue;tn=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;i=0,h=c=s=null,a=o;do{var A=a.lane,v=a.eventTime;if((r&A)===A){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,y=a;switch(A=n,v=t,y.tag){case 1:if(S=y.payload,typeof S=="function"){m=S.call(v,m,A);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,A=typeof S=="function"?S.call(v,m,A):S,A==null)break e;m=z({},m,A);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,A=l.effects,A===null?l.effects=[a]:A.push(a))}else v={eventTime:v,lane:A,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,s=m):h=h.next=v,i|=A;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;A=a,a=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Rn|=i,e.lanes=i,e.memoizedState=m}}function rs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var hr={},ze=Sn(hr),tr=Sn(hr),rr=Sn(hr);function Ln(e){if(e===hr)throw Error(x(174));return e}function $i(e,n){switch(R(rr,n),R(tr,e),R(ze,hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:To(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=To(n,e)}H(ze),R(ze,n)}function ft(){H(ze),H(tr),H(rr)}function lc(e){Ln(rr.current);var n=Ln(ze.current),t=To(n,e.type);n!==t&&(R(tr,e),R(ze,t))}function Xi(e){tr.current===e&&(H(ze),H(tr))}var U=Sn(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var so=[];function Qi(){for(var e=0;e<so.length;e++)so[e]._workInProgressVersionPrimary=null;so.length=0}var Fr=Ze.ReactCurrentDispatcher,uo=Ze.ReactCurrentBatchConfig,Dn=0,K=null,b=null,Z=null,pl=!1,Kt=!1,lr=0,mf=0;function re(){throw Error(x(321))}function bi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!je(e[t],n[t]))return!1;return!0}function Yi(e,n,t,r,l,o){if(Dn=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fr.current=e===null||e.memoizedState===null?If:yf,e=t(r,l),Kt){o=0;do{if(Kt=!1,lr=0,25<=o)throw Error(x(301));o+=1,Z=b=null,n.updateQueue=null,Fr.current=vf,e=t(r,l)}while(Kt)}if(Fr.current=ml,n=b!==null&&b.next!==null,Dn=0,Z=b=K=null,pl=!1,n)throw Error(x(300));return e}function Ji(){var e=lr!==0;return lr=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?K.memoizedState=Z=e:Z=Z.next=e,Z}function Te(){if(b===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var n=Z===null?K.memoizedState:Z.next;if(n!==null)Z=n,b=e;else{if(e===null)throw Error(x(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},Z===null?K.memoizedState=Z=e:Z=Z.next=e}return Z}function or(e,n){return typeof n=="function"?n(e):n}function co(e){var n=Te(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=b,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,c=o;do{var h=c.lane;if((Dn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,i=r):s=s.next=m,K.lanes|=h,Rn|=h}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=a,je(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,K.lanes|=o,Rn|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function fo(e){var n=Te(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);je(o,n.memoizedState)||(pe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function oc(){}function ic(e,n){var t=K,r=Te(),l=n(),o=!je(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Zi(uc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,ir(9,sc.bind(null,t,r,l,n),void 0,null),q===null)throw Error(x(349));Dn&30||ac(t,n,l)}return l}function ac(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function sc(e,n,t,r){n.value=t,n.getSnapshot=r,cc(n)&&dc(e)}function uc(e,n,t){return t(function(){cc(n)&&dc(e)})}function cc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!je(e,t)}catch{return!0}}function dc(e){var n=Ye(e,1);n!==null&&Re(n,e,1,-1)}function ls(e){var n=_e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},n.queue=e,e=e.dispatch=gf.bind(null,K,e),[n.memoizedState,e]}function ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function fc(){return Te().memoizedState}function Wr(e,n,t,r){var l=_e();K.flags|=e,l.memoizedState=ir(1|n,t,void 0,r===void 0?null:r)}function Nl(e,n,t,r){var l=Te();r=r===void 0?null:r;var o=void 0;if(b!==null){var i=b.memoizedState;if(o=i.destroy,r!==null&&bi(r,i.deps)){l.memoizedState=ir(n,t,o,r);return}}K.flags|=e,l.memoizedState=ir(1|n,t,o,r)}function os(e,n){return Wr(8390656,8,e,n)}function Zi(e,n){return Nl(2048,8,e,n)}function pc(e,n){return Nl(4,2,e,n)}function mc(e,n){return Nl(4,4,e,n)}function hc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ac(e,n,t){return t=t!=null?t.concat([e]):null,Nl(4,4,hc.bind(null,n,e),t)}function qi(){}function gc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&bi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ic(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&bi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function yc(e,n,t){return Dn&21?(je(t,n)||(t=Pu(),K.lanes|=t,Rn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function hf(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var r=uo.transition;uo.transition={};try{e(!1),n()}finally{D=t,uo.transition=r}}function vc(){return Te().memoizedState}function Af(e,n,t){var r=hn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))xc(n,t);else if(t=tc(e,n,t,r),t!==null){var l=se();Re(t,e,r,l),wc(t,n,r)}}function gf(e,n,t){var r=hn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))xc(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,a=o(i,t);if(l.hasEagerState=!0,l.eagerState=a,je(a,i)){var s=n.interleaved;s===null?(l.next=l,Fi(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=tc(e,n,l,r),t!==null&&(l=se(),Re(t,e,r,l),wc(t,n,r))}}function Sc(e){var n=e.alternate;return e===K||n!==null&&n===K}function xc(e,n){Kt=pl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function wc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Li(e,t)}}var ml={readContext:Me,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},If={readContext:Me,useCallback:function(e,n){return _e().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:os,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Wr(4194308,4,hc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Wr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Wr(4,2,e,n)},useMemo:function(e,n){var t=_e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=_e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Af.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=_e();return e={current:e},n.memoizedState=e},useState:ls,useDebugValue:qi,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=ls(!1),n=e[0];return e=hf.bind(null,e[1]),_e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,l=_e();if(_){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),q===null)throw Error(x(349));Dn&30||ac(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,os(uc.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,sc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=_e(),n=q.identifierPrefix;if(_){var t=$e,r=We;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=mf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},yf={readContext:Me,useCallback:gc,useContext:Me,useEffect:Zi,useImperativeHandle:Ac,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:Ic,useReducer:co,useRef:fc,useState:function(){return co(or)},useDebugValue:qi,useDeferredValue:function(e){var n=Te();return yc(n,b.memoizedState,e)},useTransition:function(){var e=co(or)[0],n=Te().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:ic,useId:vc,unstable_isNewReconciler:!1},vf={readContext:Me,useCallback:gc,useContext:Me,useEffect:Zi,useImperativeHandle:Ac,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:Ic,useReducer:fo,useRef:fc,useState:function(){return fo(or)},useDebugValue:qi,useDeferredValue:function(e){var n=Te();return b===null?n.memoizedState=e:yc(n,b.memoizedState,e)},useTransition:function(){var e=fo(or)[0],n=Te().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:ic,useId:vc,unstable_isNewReconciler:!1};function Oe(e,n){if(e&&e.defaultProps){n=z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ol={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=hn(e),o=Xe(r,l);o.payload=n,t!=null&&(o.callback=t),n=pn(e,o,l),n!==null&&(Re(n,e,l,r),Vr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=hn(e),o=Xe(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=pn(e,o,l),n!==null&&(Re(n,e,l,r),Vr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=hn(e),l=Xe(t,r);l.tag=2,n!=null&&(l.callback=n),n=pn(e,l,r),n!==null&&(Re(n,e,r,t),Vr(n,e,r))}};function is(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,r)||!Zt(l,o):!0}function Pc(e,n,t){var r=!1,l=yn,o=n.contextType;return typeof o=="object"&&o!==null?o=Me(o):(l=he(n)?Gn:ie.current,r=n.contextTypes,o=(r=r!=null)?ut(e,l):yn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ol,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function as(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ol.enqueueReplaceState(n,n.state,null)}function Jo(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Wi(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Me(o):(o=he(n)?Gn:ie.current,l.context=ut(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Yo(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Ol.enqueueReplaceState(l,l.state,null),dl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=X0(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function po(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function Cc(e,n,t){t=Xe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Al||(Al=!0,si=r),Zo(e,n)},t}function kc(e,n,t){t=Xe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Zo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Zo(e,n),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function ss(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Sf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Df.bind(null,e,n,t),n.then(e,e))}function us(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Xe(-1,1),n.tag=2,pn(t,n,1))),t.lanes|=1),e)}var xf=Ze.ReactCurrentOwner,pe=!1;function ae(e,n,t,r){n.child=e===null?nc(n,null,t,r):dt(n,e.child,t,r)}function ds(e,n,t,r,l){t=t.render;var o=n.ref;return it(n,l),r=Yi(e,n,t,r,o,l),t=Ji(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(_&&t&&Hi(n),n.flags|=1,ae(e,n,r,l),n.child)}function fs(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!aa(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ec(e,n,o,r,l)):(e=br(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(i,r)&&e.ref===n.ref)return Je(e,n,l)}return n.flags|=1,e=An(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ec(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Zt(o,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Je(e,n,l)}return qo(e,n,t,r,l)}function Mc(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(et,ge),ge|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(et,ge),ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,R(et,ge),ge|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,R(et,ge),ge|=r;return ae(e,n,l,t),n.child}function Tc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function qo(e,n,t,r,l){var o=he(t)?Gn:ie.current;return o=ut(n,o),it(n,l),t=Yi(e,n,t,r,o,l),r=Ji(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(_&&r&&Hi(n),n.flags|=1,ae(e,n,t,l),n.child)}function ps(e,n,t,r,l){if(he(t)){var o=!0;il(n)}else o=!1;if(it(n,l),n.stateNode===null)$r(e,n),Pc(n,t,r),Jo(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var s=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=he(t)?Gn:ie.current,c=ut(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&as(n,i,r,c),tn=!1;var A=n.memoizedState;i.state=A,dl(n,r,i,l),s=n.memoizedState,a!==r||A!==s||me.current||tn?(typeof h=="function"&&(Yo(n,t,h,r),s=n.memoizedState),(a=tn||is(n,t,a,r,A,s,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,rc(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Oe(n.type,a),i.props=c,m=n.pendingProps,A=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=he(t)?Gn:ie.current,s=ut(n,s));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||A!==s)&&as(n,i,r,s),tn=!1,A=n.memoizedState,i.state=A,dl(n,r,i,l);var S=n.memoizedState;a!==m||A!==S||me.current||tn?(typeof v=="function"&&(Yo(n,t,v,r),S=n.memoizedState),(c=tn||is(n,t,c,r,A,S,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,S,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,S,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),i.props=r,i.state=S,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),r=!1)}return ei(e,n,t,r,o,l)}function ei(e,n,t,r,l,o){Tc(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&Za(n,t,!1),Je(e,n,o);r=n.stateNode,xf.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=dt(n,e.child,null,o),n.child=dt(n,null,a,o)):ae(e,n,a,o),n.memoizedState=r.state,l&&Za(n,t,!0),n.child}function Lc(e){var n=e.stateNode;n.pendingContext?Ja(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ja(e,n.context,!1),$i(e,n.containerInfo)}function ms(e,n,t,r,l){return ct(),Ui(l),n.flags|=256,ae(e,n,t,r),n.child}var ni={dehydrated:null,treeContext:null,retryLane:0};function ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nc(e,n,t){var r=n.pendingProps,l=U.current,o=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(U,l&1),e===null)return Qo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Dl(i,r,0,null),e=On(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ti(t),n.memoizedState=ni,e):ea(n,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return wf(e,n,i,r,a,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=An(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=An(a,o):(o=On(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?ti(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=ni,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ea(e,n){return n=Dl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gr(e,n,t,r){return r!==null&&Ui(r),dt(n,e.child,null,t),e=ea(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wf(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=po(Error(x(422))),Gr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=Dl({mode:"visible",children:r.children},l,0,null),o=On(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&dt(n,e.child,null,i),n.child.memoizedState=ti(i),n.memoizedState=ni,o);if(!(n.mode&1))return Gr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(x(419)),r=po(o,r,void 0),Gr(e,n,i,r)}if(a=(i&e.childLanes)!==0,pe||a){if(r=q,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),Re(r,e,l,-1))}return ia(),r=po(Error(x(421))),Gr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Rf.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,Ie=fn(l.nextSibling),ye=n,_=!0,Be=null,e!==null&&(Pe[Ce++]=We,Pe[Ce++]=$e,Pe[Ce++]=Bn,We=e.id,$e=e.overflow,Bn=n),n=ea(n,r.children),n.flags|=4096,n)}function hs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),bo(e.return,n,t)}function mo(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Oc(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hs(e,t,n);else if(e.tag===19)hs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(U,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&fl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),mo(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&fl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}mo(n,!0,t,null,o);break;case"together":mo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=An(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=An(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Pf(e,n,t){switch(n.tag){case 3:Lc(n),ct();break;case 5:lc(n);break;case 1:he(n.type)&&il(n);break;case 4:$i(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;R(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(R(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Nc(e,n,t):(R(U,U.current&1),e=Je(e,n,t),e!==null?e.sibling:null);R(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Oc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Mc(e,n,t)}return Je(e,n,t)}var Gc,ri,Bc,Dc;Gc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ri=function(){};Bc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Ln(ze.current);var o=null;switch(t){case"input":l=Co(e,l),r=Co(e,r),o=[];break;case"select":l=z({},l,{value:void 0}),r=z({},r,{value:void 0}),o=[];break;case"textarea":l=Mo(e,l),r=Mo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}Lo(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&j("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Dc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Tt(e,n){if(!_)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Cf(e,n,t){var r=n.pendingProps;switch(_i(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return he(n.type)&&ol(),le(n),null;case 3:return r=n.stateNode,ft(),H(me),H(ie),Qi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(di(Be),Be=null))),ri(e,n),le(n),null;case 5:Xi(n);var l=Ln(rr.current);if(t=n.type,e!==null&&n.stateNode!=null)Bc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return le(n),null}if(e=Ln(ze.current),Nr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ue]=n,r[nr]=o,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(l=0;l<Dt.length;l++)j(Dt[l],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Pa(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":ka(r,o),j("invalid",r)}Lo(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Lr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Lr(r.textContent,a,e),l=["children",""+a]):Wt.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&j("scroll",r)}switch(t){case"input":xr(r),Ca(r,o,!0);break;case"textarea":xr(r),Ea(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ll)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Ue]=n,e[nr]=r,Gc(e,n,!1,!1),n.stateNode=e;e:{switch(i=No(t,r),t){case"dialog":j("cancel",e),j("close",e),l=r;break;case"iframe":case"object":case"embed":j("load",e),l=r;break;case"video":case"audio":for(l=0;l<Dt.length;l++)j(Dt[l],e);l=r;break;case"source":j("error",e),l=r;break;case"img":case"image":case"link":j("error",e),j("load",e),l=r;break;case"details":j("toggle",e),l=r;break;case"input":Pa(e,r),l=Co(e,r),j("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=z({},r,{value:void 0}),j("invalid",e);break;case"textarea":ka(e,r),l=Mo(e,r),j("invalid",e);break;default:l=r}Lo(t,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?fu(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cu(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&$t(e,s):typeof s=="number"&&$t(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&j("scroll",e):s!=null&&Pi(e,o,s,i))}switch(t){case"input":xr(e),Ca(e,r,!1);break;case"textarea":xr(e),Ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tt(e,!!r.multiple,o,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ll)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Dc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=Ln(rr.current),Ln(ze.current),Nr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ue]=n,(o=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Lr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ue]=n,n.stateNode=r}return le(n),null;case 13:if(H(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_&&Ie!==null&&n.mode&1&&!(n.flags&128))qu(),ct(),n.flags|=98560,o=!1;else if(o=Nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Ue]=n}else ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),o=!1}else Be!==null&&(di(Be),Be=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):ia())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ft(),ri(e,n),e===null&&qt(n.stateNode.containerInfo),le(n),null;case 10:return Vi(n.type._context),le(n),null;case 17:return he(n.type)&&ol(),le(n),null;case 19:if(H(U),o=n.memoizedState,o===null)return le(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)Tt(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=fl(e),i!==null){for(n.flags|=128,Tt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&$()>mt&&(n.flags|=128,r=!0,Tt(o,!1),n.lanes=4194304)}else{if(!r)if(e=fl(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Tt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!_)return le(n),null}else 2*$()-o.renderingStartTime>mt&&t!==1073741824&&(n.flags|=128,r=!0,Tt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=$(),n.sibling=null,t=U.current,R(U,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return oa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ge&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function kf(e,n){switch(_i(n),n.tag){case 1:return he(n.type)&&ol(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(),H(me),H(ie),Qi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Xi(n),null;case 13:if(H(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(U),null;case 4:return ft(),null;case 10:return Vi(n.type._context),null;case 22:case 23:return oa(),null;case 24:return null;default:return null}}var Br=!1,oe=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,C=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function li(e,n,t){try{t()}catch(r){V(e,n,r)}}var As=!1;function Mf(e,n){if(Ko=nl,e=Uu(),ji(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,a=-1,s=-1,c=0,h=0,m=e,A=null;n:for(;;){for(var v;m!==t||l!==0&&m.nodeType!==3||(a=i+l),m!==o||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(v=m.firstChild)!==null;)A=m,m=v;for(;;){if(m===e)break n;if(A===t&&++c===l&&(a=i),A===o&&++h===r&&(s=i),(v=m.nextSibling)!==null)break;m=A,A=m.parentNode}m=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(zo={focusedElem:e,selectionRange:t},nl=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,w=S.memoizedState,d=n.stateNode,f=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:Oe(n.type,y),w);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(I){V(n,n.return,I)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return S=As,As=!1,S}function zt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&li(n,t,o)}l=l.next}while(l!==r)}}function Gl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function oi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Rc(e){var n=e.alternate;n!==null&&(e.alternate=null,Rc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[nr],delete n[Wo],delete n[cf],delete n[df])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jc(e){return e.tag===5||e.tag===3||e.tag===4}function gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ii(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(ii(e,n,t),e=e.sibling;e!==null;)ii(e,n,t),e=e.sibling}function ai(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ai(e,n,t),e=e.sibling;e!==null;)ai(e,n,t),e=e.sibling}var ee=null,Ge=!1;function en(e,n,t){for(t=t.child;t!==null;)Hc(e,n,t),t=t.sibling}function Hc(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Cl,t)}catch{}switch(t.tag){case 5:oe||qn(t,n);case 6:var r=ee,l=Ge;ee=null,en(e,n,t),ee=r,Ge=l,ee!==null&&(Ge?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Ge?(e=ee,t=t.stateNode,e.nodeType===8?io(e.parentNode,t):e.nodeType===1&&io(e,t),Yt(e)):io(ee,t.stateNode));break;case 4:r=ee,l=Ge,ee=t.stateNode.containerInfo,Ge=!0,en(e,n,t),ee=r,Ge=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&li(t,n,i),l=l.next}while(l!==r)}en(e,n,t);break;case 1:if(!oe&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}en(e,n,t);break;case 21:en(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,en(e,n,t),oe=r):en(e,n,t);break;default:en(e,n,t)}}function Is(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ef),n.forEach(function(r){var l=jf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ne(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Ge=!1;break e;case 3:ee=a.stateNode.containerInfo,Ge=!0;break e;case 4:ee=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(ee===null)throw Error(x(160));Hc(o,i,l),ee=null,Ge=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)_c(n,e),n=n.sibling}function _c(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(n,e),He(e),r&4){try{zt(3,e,e.return),Gl(3,e)}catch(y){V(e,e.return,y)}try{zt(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Ne(n,e),He(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(Ne(n,e),He(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var l=e.stateNode;try{$t(l,"")}catch(y){V(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&au(l,o),No(a,i);var c=No(a,o);for(i=0;i<s.length;i+=2){var h=s[i],m=s[i+1];h==="style"?fu(l,m):h==="dangerouslySetInnerHTML"?cu(l,m):h==="children"?$t(l,m):Pi(l,h,m,c)}switch(a){case"input":ko(l,o);break;case"textarea":su(l,o);break;case"select":var A=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?tt(l,!!o.multiple,v,!1):A!==!!o.multiple&&(o.defaultValue!=null?tt(l,!!o.multiple,o.defaultValue,!0):tt(l,!!o.multiple,o.multiple?[]:"",!1))}l[nr]=o}catch(y){V(e,e.return,y)}}break;case 6:if(Ne(n,e),He(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){V(e,e.return,y)}}break;case 3:if(Ne(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yt(n.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Ne(n,e),He(e);break;case 13:Ne(n,e),He(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ra=$())),r&4&&Is(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,Ne(n,e),oe=c):Ne(n,e),He(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(A=C,v=A.child,A.tag){case 0:case 11:case 14:case 15:zt(4,A,A.return);break;case 1:qn(A,A.return);var S=A.stateNode;if(typeof S.componentWillUnmount=="function"){r=A,t=A.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(y){V(r,t,y)}}break;case 5:qn(A,A.return);break;case 22:if(A.memoizedState!==null){vs(m);continue}}v!==null?(v.return=A,C=v):vs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=du("display",i))}catch(y){V(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){V(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ne(n,e),He(e),r&4&&Is(e);break;case 21:break;default:Ne(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(jc(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($t(l,""),r.flags&=-33);var o=gs(e);ai(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=gs(e);ii(e,a,i);break;default:throw Error(x(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tf(e,n,t){C=e,Uc(e)}function Uc(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var l=C,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Br;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=Br;var c=oe;if(Br=i,(oe=s)&&!c)for(C=l;C!==null;)i=C,s=i.child,i.tag===22&&i.memoizedState!==null?Ss(l):s!==null?(s.return=i,C=s):Ss(l);for(;o!==null;)C=o,Uc(o),o=o.sibling;C=l,Br=a,oe=c}ys(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,C=o):ys(e)}}function ys(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Gl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&rs(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}rs(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Yt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}oe||n.flags&512&&oi(n)}catch(A){V(n,n.return,A)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function vs(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function Ss(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Gl(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){V(n,l,s)}}var o=n.return;try{oi(n)}catch(s){V(n,o,s)}break;case 5:var i=n.return;try{oi(n)}catch(s){V(n,i,s)}}}catch(s){V(n,n.return,s)}if(n===e){C=null;break}var a=n.sibling;if(a!==null){a.return=n.return,C=a;break}C=n.return}}var Lf=Math.ceil,hl=Ze.ReactCurrentDispatcher,na=Ze.ReactCurrentOwner,Ee=Ze.ReactCurrentBatchConfig,B=0,q=null,Q=null,ne=0,ge=0,et=Sn(0),Y=0,ar=null,Rn=0,Bl=0,ta=0,Vt=null,de=null,ra=0,mt=1/0,Ve=null,Al=!1,si=null,mn=null,Dr=!1,an=null,gl=0,Ft=0,ui=null,Xr=-1,Qr=0;function se(){return B&6?$():Xr!==-1?Xr:Xr=$()}function hn(e){return e.mode&1?B&2&&ne!==0?ne&-ne:pf.transition!==null?(Qr===0&&(Qr=Pu()),Qr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e):1}function Re(e,n,t,r){if(50<Ft)throw Ft=0,ui=null,Error(x(185));fr(e,t,r),(!(B&2)||e!==q)&&(e===q&&(!(B&2)&&(Bl|=t),Y===4&&ln(e,ne)),Ae(e,r),t===1&&B===0&&!(n.mode&1)&&(mt=$()+500,Ll&&xn()))}function Ae(e,n){var t=e.callbackNode;fd(e,n);var r=el(e,e===q?ne:0);if(r===0)t!==null&&La(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&La(t),n===1)e.tag===0?ff(xs.bind(null,e)):Yu(xs.bind(null,e)),sf(function(){!(B&6)&&xn()}),t=null;else{switch(Cu(r)){case 1:t=Ti;break;case 4:t=xu;break;case 16:t=qr;break;case 536870912:t=wu;break;default:t=qr}t=Qc(t,Kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Kc(e,n){if(Xr=-1,Qr=0,B&6)throw Error(x(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var r=el(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Il(e,r);else{n=r;var l=B;B|=2;var o=Vc();(q!==e||ne!==n)&&(Ve=null,mt=$()+500,Nn(e,n));do try{Gf();break}catch(a){zc(e,a)}while(!0);zi(),hl.current=o,B=l,Q!==null?n=0:(q=null,ne=0,n=Y)}if(n!==0){if(n===2&&(l=Ro(e),l!==0&&(r=l,n=ci(e,l))),n===1)throw t=ar,Nn(e,0),ln(e,r),Ae(e,$()),t;if(n===6)ln(e,r);else{if(l=e.current.alternate,!(r&30)&&!Nf(l)&&(n=Il(e,r),n===2&&(o=Ro(e),o!==0&&(r=o,n=ci(e,o))),n===1))throw t=ar,Nn(e,0),ln(e,r),Ae(e,$()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:En(e,de,Ve);break;case 3:if(ln(e,r),(r&130023424)===r&&(n=ra+500-$(),10<n)){if(el(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Fo(En.bind(null,e,de,Ve),n);break}En(e,de,Ve);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-De(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=Fo(En.bind(null,e,de,Ve),r);break}En(e,de,Ve);break;case 5:En(e,de,Ve);break;default:throw Error(x(329))}}}return Ae(e,$()),e.callbackNode===t?Kc.bind(null,e):null}function ci(e,n){var t=Vt;return e.current.memoizedState.isDehydrated&&(Nn(e,n).flags|=256),e=Il(e,n),e!==2&&(n=de,de=t,n!==null&&di(n)),e}function di(e){de===null?de=e:de.push.apply(de,e)}function Nf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!je(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~ta,n&=~Bl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function xs(e){if(B&6)throw Error(x(327));at();var n=el(e,0);if(!(n&1))return Ae(e,$()),null;var t=Il(e,n);if(e.tag!==0&&t===2){var r=Ro(e);r!==0&&(n=r,t=ci(e,r))}if(t===1)throw t=ar,Nn(e,0),ln(e,n),Ae(e,$()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,En(e,de,Ve),Ae(e,$()),null}function la(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(mt=$()+500,Ll&&xn())}}function jn(e){an!==null&&an.tag===0&&!(B&6)&&at();var n=B;B|=1;var t=Ee.transition,r=D;try{if(Ee.transition=null,D=1,e)return e()}finally{D=r,Ee.transition=t,B=n,!(B&6)&&xn()}}function oa(){ge=et.current,H(et)}function Nn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,af(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ol();break;case 3:ft(),H(me),H(ie),Qi();break;case 5:Xi(r);break;case 4:ft();break;case 13:H(U);break;case 19:H(U);break;case 10:Vi(r.type._context);break;case 22:case 23:oa()}t=t.return}if(q=e,Q=e=An(e.current,null),ne=ge=n,Y=0,ar=null,ta=Bl=Rn=0,de=Vt=null,Tn!==null){for(n=0;n<Tn.length;n++)if(t=Tn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}Tn=null}return e}function zc(e,n){do{var t=Q;try{if(zi(),Fr.current=ml,pl){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}pl=!1}if(Dn=0,Z=b=K=null,Kt=!1,lr=0,na.current=null,t===null||t.return===null){Y=1,ar=n,Q=null;break}e:{var o=e,i=t.return,a=t,s=n;if(n=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var A=h.alternate;A?(h.updateQueue=A.updateQueue,h.memoizedState=A.memoizedState,h.lanes=A.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=us(i);if(v!==null){v.flags&=-257,cs(v,i,a,o,n),v.mode&1&&ss(o,c,n),n=v,s=c;var S=n.updateQueue;if(S===null){var y=new Set;y.add(s),n.updateQueue=y}else S.add(s);break e}else{if(!(n&1)){ss(o,c,n),ia();break e}s=Error(x(426))}}else if(_&&a.mode&1){var w=us(i);if(w!==null){!(w.flags&65536)&&(w.flags|=256),cs(w,i,a,o,n),Ui(pt(s,a));break e}}o=s=pt(s,a),Y!==4&&(Y=2),Vt===null?Vt=[o]:Vt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=Cc(o,s,n);ts(o,d);break e;case 1:a=s;var f=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mn===null||!mn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var I=kc(o,a,n);ts(o,I);break e}}o=o.return}while(o!==null)}Wc(t)}catch(P){n=P,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Vc(){var e=hl.current;return hl.current=ml,e===null?ml:e}function ia(){(Y===0||Y===3||Y===2)&&(Y=4),q===null||!(Rn&268435455)&&!(Bl&268435455)||ln(q,ne)}function Il(e,n){var t=B;B|=2;var r=Vc();(q!==e||ne!==n)&&(Ve=null,Nn(e,n));do try{Of();break}catch(l){zc(e,l)}while(!0);if(zi(),B=t,hl.current=r,Q!==null)throw Error(x(261));return q=null,ne=0,Y}function Of(){for(;Q!==null;)Fc(Q)}function Gf(){for(;Q!==null&&!rd();)Fc(Q)}function Fc(e){var n=Xc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,n===null?Wc(e):Q=n,na.current=null}function Wc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=kf(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(t=Cf(t,n,ge),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);Y===0&&(Y=5)}function En(e,n,t){var r=D,l=Ee.transition;try{Ee.transition=null,D=1,Bf(e,n,t,r)}finally{Ee.transition=l,D=r}return null}function Bf(e,n,t,r){do at();while(an!==null);if(B&6)throw Error(x(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(pd(e,o),e===q&&(Q=q=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Dr||(Dr=!0,Qc(qr,function(){return at(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var i=D;D=1;var a=B;B|=4,na.current=null,Mf(e,t),_c(t,e),qd(zo),nl=!!Ko,zo=Ko=null,e.current=t,Tf(t),ld(),B=a,D=i,Ee.transition=o}else e.current=t;if(Dr&&(Dr=!1,an=e,gl=l),o=e.pendingLanes,o===0&&(mn=null),ad(t.stateNode),Ae(e,$()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Al)throw Al=!1,e=si,si=null,e;return gl&1&&e.tag!==0&&at(),o=e.pendingLanes,o&1?e===ui?Ft++:(Ft=0,ui=e):Ft=0,xn(),null}function at(){if(an!==null){var e=Cu(gl),n=Ee.transition,t=D;try{if(Ee.transition=null,D=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,gl=0,B&6)throw Error(x(331));var l=B;for(B|=4,C=e.current;C!==null;){var o=C,i=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:zt(8,h,o)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var A=h.sibling,v=h.return;if(Rc(h),h===c){C=null;break}if(A!==null){A.return=v,C=A;break}C=v}}}var S=o.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}C=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,C=i;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,C=d;break e}C=o.return}}var f=e.current;for(C=f;C!==null;){i=C;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,C=p;else e:for(i=f;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gl(9,a)}}catch(P){V(a,a.return,P)}if(a===i){C=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,C=I;break e}C=a.return}}if(B=l,xn(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Cl,e)}catch{}r=!0}return r}finally{D=t,Ee.transition=n}}return!1}function ws(e,n,t){n=pt(t,n),n=Cc(e,n,1),e=pn(e,n,1),n=se(),e!==null&&(fr(e,1,n),Ae(e,n))}function V(e,n,t){if(e.tag===3)ws(e,e,t);else for(;n!==null;){if(n.tag===3){ws(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=pt(t,e),e=kc(n,e,1),n=pn(n,e,1),e=se(),n!==null&&(fr(n,1,e),Ae(n,e));break}}n=n.return}}function Df(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>$()-ra?Nn(e,0):ta|=t),Ae(e,n)}function $c(e,n){n===0&&(e.mode&1?(n=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):n=1);var t=se();e=Ye(e,n),e!==null&&(fr(e,n,t),Ae(e,t))}function Rf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),$c(e,t)}function jf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),$c(e,t)}var Xc;Xc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,Pf(e,n,t);pe=!!(e.flags&131072)}else pe=!1,_&&n.flags&1048576&&Ju(n,sl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;$r(e,n),e=n.pendingProps;var l=ut(n,ie.current);it(n,t),l=Yi(null,n,r,e,l,t);var o=Ji();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(o=!0,il(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Wi(n),l.updater=Ol,n.stateNode=l,l._reactInternals=n,Jo(n,r,e,t),n=ei(null,n,r,!0,o,t)):(n.tag=0,_&&o&&Hi(n),ae(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch($r(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=_f(r),e=Oe(r,e),l){case 0:n=qo(null,n,r,e,t);break e;case 1:n=ps(null,n,r,e,t);break e;case 11:n=ds(null,n,r,e,t);break e;case 14:n=fs(null,n,r,Oe(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Oe(r,l),qo(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Oe(r,l),ps(e,n,r,l,t);case 3:e:{if(Lc(n),e===null)throw Error(x(387));r=n.pendingProps,o=n.memoizedState,l=o.element,rc(e,n),dl(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=pt(Error(x(423)),n),n=ms(e,n,r,t,l);break e}else if(r!==l){l=pt(Error(x(424)),n),n=ms(e,n,r,t,l);break e}else for(Ie=fn(n.stateNode.containerInfo.firstChild),ye=n,_=!0,Be=null,t=nc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===l){n=Je(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return lc(n),e===null&&Qo(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Vo(r,l)?i=null:o!==null&&Vo(r,o)&&(n.flags|=32),Tc(e,n),ae(e,n,i,t),n.child;case 6:return e===null&&Qo(n),null;case 13:return Nc(e,n,t);case 4:return $i(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Oe(r,l),ds(e,n,r,l,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,R(ul,r._currentValue),r._currentValue=i,o!==null)if(je(o.value,i)){if(o.children===l.children&&!me.current){n=Je(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Xe(-1,t&-t),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),bo(o.return,t,n),a.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(x(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),bo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,it(n,t),l=Me(l),r=r(l),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,l=Oe(r,n.pendingProps),l=Oe(r.type,l),fs(e,n,r,l,t);case 15:return Ec(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Oe(r,l),$r(e,n),n.tag=1,he(r)?(e=!0,il(n)):e=!1,it(n,t),Pc(n,r,l),Jo(n,r,l,t),ei(null,n,r,!0,e,t);case 19:return Oc(e,n,t);case 22:return Mc(e,n,t)}throw Error(x(156,n.tag))};function Qc(e,n){return Su(e,n)}function Hf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new Hf(e,n,t,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ki)return 11;if(e===Ei)return 14}return 2}function An(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function br(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")aa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Fn:return On(t.children,l,o,n);case Ci:i=8,l|=8;break;case So:return e=ke(12,t,n,l|2),e.elementType=So,e.lanes=o,e;case xo:return e=ke(13,t,n,l),e.elementType=xo,e.lanes=o,e;case wo:return e=ke(19,t,n,l),e.elementType=wo,e.lanes=o,e;case lu:return Dl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tu:i=10;break e;case ru:i=9;break e;case ki:i=11;break e;case Ei:i=14;break e;case nn:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=ke(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function On(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function Dl(e,n,t,r){return e=ke(22,e,r,n),e.elementType=lu,e.lanes=t,e.stateNode={isHidden:!1},e}function ho(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function Ao(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Uf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function sa(e,n,t,r,l,o,i,a,s){return e=new Uf(e,n,t,a,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ke(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wi(o),e}function Kf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function bc(e){if(!e)return yn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(he(t))return bu(e,t,n)}return n}function Yc(e,n,t,r,l,o,i,a,s){return e=sa(t,r,!0,e,l,o,i,a,s),e.context=bc(null),t=e.current,r=se(),l=hn(t),o=Xe(r,l),o.callback=n??null,pn(t,o,l),e.current.lanes=l,fr(e,l,r),Ae(e,r),e}function Rl(e,n,t,r){var l=n.current,o=se(),i=hn(l);return t=bc(t),n.context===null?n.context=t:n.pendingContext=t,n=Xe(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pn(l,n,i),e!==null&&(Re(e,l,i,o),Vr(e,l,i)),i}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ps(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ua(e,n){Ps(e,n),(e=e.alternate)&&Ps(e,n)}function zf(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}jl.prototype.render=ca.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));Rl(e,n,null,null)};jl.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jn(function(){Rl(null,e,null,null)}),n[be]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&Lu(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cs(){}function Vf(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=yl(i);o.call(c)}}var i=Yc(n,r,e,0,null,!1,!1,"",Cs);return e._reactRootContainer=i,e[be]=i.current,qt(e.nodeType===8?e.parentNode:e),jn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=yl(s);a.call(c)}}var s=sa(e,0,!1,null,null,!1,!1,"",Cs);return e._reactRootContainer=s,e[be]=s.current,qt(e.nodeType===8?e.parentNode:e),jn(function(){Rl(n,s,t,r)}),s}function _l(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=yl(i);a.call(s)}}Rl(n,i,e,l)}else i=Vf(t,n,e,l,r);return yl(i)}ku=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Bt(n.pendingLanes);t!==0&&(Li(n,t|1),Ae(n,$()),!(B&6)&&(mt=$()+500,xn()))}break;case 13:jn(function(){var r=Ye(e,1);if(r!==null){var l=se();Re(r,e,1,l)}}),ua(e,1)}};Ni=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=se();Re(n,e,134217728,t)}ua(e,134217728)}};Eu=function(e){if(e.tag===13){var n=hn(e),t=Ye(e,n);if(t!==null){var r=se();Re(t,e,n,r)}ua(e,n)}};Mu=function(){return D};Tu=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};Go=function(e,n,t){switch(n){case"input":if(ko(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Tl(r);if(!l)throw Error(x(90));iu(r),ko(r,l)}}}break;case"textarea":su(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};hu=la;Au=jn;var Ff={usingClientEntryPoint:!1,Events:[mr,Qn,Tl,pu,mu,la]},Lt={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wf={bundleType:Lt.bundleType,version:Lt.version,rendererPackageName:Lt.rendererPackageName,rendererConfig:Lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yu(e),e===null?null:e.stateNode},findFiberByHostInstance:Lt.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{Cl=Rr.inject(Wf),Ke=Rr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(n))throw Error(x(200));return Kf(e,n,null,t)};Se.createRoot=function(e,n){if(!da(e))throw Error(x(299));var t=!1,r="",l=Jc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=sa(e,1,!1,null,null,t,!1,r,l),e[be]=n.current,qt(e.nodeType===8?e.parentNode:e),new ca(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=yu(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return jn(e)};Se.hydrate=function(e,n,t){if(!Hl(n))throw Error(x(200));return _l(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!da(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Jc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Yc(n,null,e,1,t??null,l,!1,o,i),e[be]=n.current,qt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new jl(n)};Se.render=function(e,n,t){if(!Hl(n))throw Error(x(200));return _l(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(x(40));return e._reactRootContainer?(jn(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};Se.unstable_batchedUpdates=la;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Hl(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return _l(e,n,t,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zc)}catch(e){console.error(e)}}Zc(),Zs.exports=Se;var $f=Zs.exports,ks=$f;yo.createRoot=ks.createRoot,yo.hydrateRoot=ks.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sr.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Es="popstate";function Xf(e){e===void 0&&(e={});function n(r,l){let{pathname:o,search:i,hash:a}=r.location;return fi("",{pathname:o,search:i,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:vl(l)}return bf(n,t,null,e)}function X(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Qf(){return Math.random().toString(36).substr(2,8)}function Ms(e,n){return{usr:e.state,key:e.key,idx:n}}function fi(e,n,t,r){return t===void 0&&(t=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?It(n):n,{state:t,key:n&&n.key||r||Qf()})}function vl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function It(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function bf(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,a=sn.Pop,s=null,c=h();c==null&&(c=0,i.replaceState(sr({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function m(){a=sn.Pop;let w=h(),d=w==null?null:w-c;c=w,s&&s({action:a,location:y.location,delta:d})}function A(w,d){a=sn.Push;let f=fi(y.location,w,d);c=h()+1;let p=Ms(f,c),I=y.createHref(f);try{i.pushState(p,"",I)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(I)}o&&s&&s({action:a,location:y.location,delta:1})}function v(w,d){a=sn.Replace;let f=fi(y.location,w,d);c=h();let p=Ms(f,c),I=y.createHref(f);i.replaceState(p,"",I),o&&s&&s({action:a,location:y.location,delta:0})}function S(w){let d=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof w=="string"?w:vl(w);return f=f.replace(/ $/,"%20"),X(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let y={get action(){return a},get location(){return e(l,i)},listen(w){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Es,m),s=w,()=>{l.removeEventListener(Es,m),s=null}},createHref(w){return n(l,w)},createURL:S,encodeLocation(w){let d=S(w);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:A,replace:v,go(w){return i.go(w)}};return y}var Ts;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ts||(Ts={}));function Yf(e,n,t){return t===void 0&&(t="/"),Jf(e,n,t)}function Jf(e,n,t,r){let l=typeof n=="string"?It(n):n,o=pa(l.pathname||"/",t);if(o==null)return null;let i=qc(e);Zf(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let c=cp(o);a=ap(i[s],c)}return a}function qc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(o,i,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=gn([r,s.relativePath]),h=t.concat(s);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qc(o.children,n,h,c)),!(o.path==null&&!o.index)&&n.push({path:c,score:op(c,o.index),routesMeta:h})};return e.forEach((o,i)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))l(o,i);else for(let s of e0(o.path))l(o,i,s)}),n}function e0(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=e0(r.join("/")),a=[];return a.push(...i.map(s=>s===""?o:[o,s].join("/"))),l&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Zf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:ip(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const qf=/^:[\w-]+$/,ep=3,np=2,tp=1,rp=10,lp=-2,Ls=e=>e==="*";function op(e,n){let t=e.split("/"),r=t.length;return t.some(Ls)&&(r+=lp),n&&(r+=np),t.filter(l=>!Ls(l)).reduce((l,o)=>l+(qf.test(o)?ep:o===""?tp:rp),r)}function ip(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function ap(e,n,t){let{routesMeta:r}=e,l={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,h=o==="/"?n:n.slice(o.length)||"/",m=sp({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},h),A=s.route;if(!m)return null;Object.assign(l,m.params),i.push({params:l,pathname:gn([o,m.pathname]),pathnameBase:hp(gn([o,m.pathnameBase])),route:A}),m.pathnameBase!=="/"&&(o=gn([o,m.pathnameBase]))}return i}function sp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=up(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:A,isOptional:v}=h;if(A==="*"){let y=a[m]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const S=a[m];return v&&!S?c[A]=void 0:c[A]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:i,pattern:e}}function up(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function cp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function pa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fp=e=>dp.test(e);function pp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?It(e):e,o;if(t)if(fp(t))o=t;else{if(t.includes("//")){let i=t;t=t.replace(/\/\/+/g,"/"),fa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+t))}t.startsWith("/")?o=Ns(t.substring(1),"/"):o=Ns(t,n)}else o=n;return{pathname:o,search:Ap(r),hash:gp(l)}}function Ns(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function go(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ma(e,n){let t=mp(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ha(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=It(e):(l=sr({},e),X(!l.pathname||!l.pathname.includes("?"),go("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),go("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),go("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,a;if(i==null)a=t;else{let m=n.length-1;if(!r&&i.startsWith("..")){let A=i.split("/");for(;A[0]==="..";)A.shift(),m-=1;l.pathname=A.join("/")}a=m>=0?n[m]:"/"}let s=pp(l,a),c=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const gn=e=>e.join("/").replace(/\/\/+/g,"/"),hp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ap=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ip(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const n0=["post","put","patch","delete"];new Set(n0);const yp=["get",...n0];new Set(yp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ur.apply(this,arguments)}const Aa=g.createContext(null),vp=g.createContext(null),wn=g.createContext(null),Ul=g.createContext(null),qe=g.createContext({outlet:null,matches:[],isDataRoute:!1}),t0=g.createContext(null);function Sp(e,n){let{relative:t}=n===void 0?{}:n;yt()||X(!1);let{basename:r,navigator:l}=g.useContext(wn),{hash:o,pathname:i,search:a}=o0(e,{relative:t}),s=i;return r!=="/"&&(s=i==="/"?r:gn([r,i])),l.createHref({pathname:s,search:a,hash:o})}function yt(){return g.useContext(Ul)!=null}function Ar(){return yt()||X(!1),g.useContext(Ul).location}function r0(e){g.useContext(wn).static||g.useLayoutEffect(e)}function gr(){let{isDataRoute:e}=g.useContext(qe);return e?Bp():xp()}function xp(){yt()||X(!1);let e=g.useContext(Aa),{basename:n,future:t,navigator:r}=g.useContext(wn),{matches:l}=g.useContext(qe),{pathname:o}=Ar(),i=JSON.stringify(ma(l,t.v7_relativeSplatPath)),a=g.useRef(!1);return r0(()=>{a.current=!0}),g.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=ha(c,JSON.parse(i),o,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:gn([n,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[n,r,i,o,e])}function l0(){let{matches:e}=g.useContext(qe),n=e[e.length-1];return n?n.params:{}}function o0(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=g.useContext(wn),{matches:l}=g.useContext(qe),{pathname:o}=Ar(),i=JSON.stringify(ma(l,r.v7_relativeSplatPath));return g.useMemo(()=>ha(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function wp(e,n){return Pp(e,n)}function Pp(e,n,t,r){yt()||X(!1);let{navigator:l}=g.useContext(wn),{matches:o}=g.useContext(qe),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=Ar(),h;if(n){var m;let w=typeof n=="string"?It(n):n;s==="/"||(m=w.pathname)!=null&&m.startsWith(s)||X(!1),h=w}else h=c;let A=h.pathname||"/",v=A;if(s!=="/"){let w=s.replace(/^\//,"").split("/");v="/"+A.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=Yf(e,{pathname:v}),y=Tp(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:gn([s,l.encodeLocation?l.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:gn([s,l.encodeLocation?l.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,t,r);return n&&y?g.createElement(Ul.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:sn.Pop}},y):y}function Cp(){let e=Gp(),n=Ip(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),t?g.createElement("pre",{style:l},t):null,null)}const kp=g.createElement(Cp,null);class Ep extends g.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?g.createElement(qe.Provider,{value:this.props.routeContext},g.createElement(t0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mp(e){let{routeContext:n,match:t,children:r}=e,l=g.useContext(Aa);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),g.createElement(qe.Provider,{value:n},r)}function Tp(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,a=(l=t)==null?void 0:l.errors;if(a!=null){let h=i.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||X(!1),i=i.slice(0,Math.min(i.length,h+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let m=i[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:A,errors:v}=t,S=m.route.loader&&A[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||S){s=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,m,A)=>{let v,S=!1,y=null,w=null;t&&(v=a&&m.route.id?a[m.route.id]:void 0,y=m.route.errorElement||kp,s&&(c<0&&A===0?(Dp("route-fallback"),S=!0,w=null):c===A&&(S=!0,w=m.route.hydrateFallbackElement||null)));let d=n.concat(i.slice(0,A+1)),f=()=>{let p;return v?p=y:S?p=w:m.route.Component?p=g.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,g.createElement(Mp,{match:m,routeContext:{outlet:h,matches:d,isDataRoute:t!=null},children:p})};return t&&(m.route.ErrorBoundary||m.route.errorElement||A===0)?g.createElement(Ep,{location:t.location,revalidation:t.revalidation,component:y,error:v,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var i0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(i0||{}),a0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(a0||{});function Lp(e){let n=g.useContext(Aa);return n||X(!1),n}function Np(e){let n=g.useContext(vp);return n||X(!1),n}function Op(e){let n=g.useContext(qe);return n||X(!1),n}function s0(e){let n=Op(),t=n.matches[n.matches.length-1];return t.route.id||X(!1),t.route.id}function Gp(){var e;let n=g.useContext(t0),t=Np(),r=s0();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Bp(){let{router:e}=Lp(i0.UseNavigateStable),n=s0(a0.UseNavigateStable),t=g.useRef(!1);return r0(()=>{t.current=!0}),g.useCallback(function(l,o){o===void 0&&(o={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ur({fromRouteId:n},o)))},[e,n])}const Os={};function Dp(e,n,t){Os[e]||(Os[e]=!0)}function Rp(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jp(e){let{to:n,replace:t,state:r,relative:l}=e;yt()||X(!1);let{future:o,static:i}=g.useContext(wn),{matches:a}=g.useContext(qe),{pathname:s}=Ar(),c=gr(),h=ha(n,ma(a,o.v7_relativeSplatPath),s,l==="path"),m=JSON.stringify(h);return g.useEffect(()=>c(JSON.parse(m),{replace:t,state:r,relative:l}),[c,m,l,t,r]),null}function zn(e){X(!1)}function Hp(e){let{basename:n="/",children:t=null,location:r,navigationType:l=sn.Pop,navigator:o,static:i=!1,future:a}=e;yt()&&X(!1);let s=n.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:s,navigator:o,static:i,future:ur({v7_relativeSplatPath:!1},a)}),[s,a,o,i]);typeof r=="string"&&(r=It(r));let{pathname:h="/",search:m="",hash:A="",state:v=null,key:S="default"}=r,y=g.useMemo(()=>{let w=pa(h,s);return w==null?null:{location:{pathname:w,search:m,hash:A,state:v,key:S},navigationType:l}},[s,h,m,A,v,S,l]);return y==null?null:g.createElement(wn.Provider,{value:c},g.createElement(Ul.Provider,{children:t,value:y}))}function _p(e){let{children:n,location:t}=e;return wp(pi(n),t)}new Promise(()=>{});function pi(e,n){n===void 0&&(n=[]);let t=[];return g.Children.forEach(e,(r,l)=>{if(!g.isValidElement(r))return;let o=[...n,l];if(r.type===g.Fragment){t.push.apply(t,pi(r.props.children,o));return}r.type!==zn&&X(!1),!r.props.index||!r.props.children||X(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=pi(r.props.children,o)),t.push(i)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mi.apply(this,arguments)}function Up(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function Kp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zp(e,n){return e.button===0&&(!n||n==="_self")&&!Kp(e)}const Vp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fp="6";try{window.__reactRouterVersion=Fp}catch{}const Wp="startTransition",Gs=B0[Wp];function $p(e){let{basename:n,children:t,future:r,window:l}=e,o=g.useRef();o.current==null&&(o.current=Xf({window:l,v5Compat:!0}));let i=o.current,[a,s]=g.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},h=g.useCallback(m=>{c&&Gs?Gs(()=>s(m)):s(m)},[s,c]);return g.useLayoutEffect(()=>i.listen(h),[i,h]),g.useEffect(()=>Rp(r),[r]),g.createElement(Hp,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:i,future:r})}const Xp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hn=g.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:a,target:s,to:c,preventScrollReset:h,viewTransition:m}=n,A=Up(n,Vp),{basename:v}=g.useContext(wn),S,y=!1;if(typeof c=="string"&&Qp.test(c)&&(S=c,Xp))try{let p=new URL(window.location.href),I=c.startsWith("//")?new URL(p.protocol+c):new URL(c),P=pa(I.pathname,v);I.origin===p.origin&&P!=null?c=P+I.search+I.hash:y=!0}catch{}let w=Sp(c,{relative:l}),d=bp(c,{replace:i,state:a,target:s,preventScrollReset:h,relative:l,viewTransition:m});function f(p){r&&r(p),p.defaultPrevented||d(p)}return g.createElement("a",mi({},A,{href:S||w,onClick:y||o?r:f,ref:t,target:s}))});var Bs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bs||(Bs={}));var Ds;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ds||(Ds={}));function bp(e,n){let{target:t,replace:r,state:l,preventScrollReset:o,relative:i,viewTransition:a}=n===void 0?{}:n,s=gr(),c=Ar(),h=o0(e,{relative:i});return g.useCallback(m=>{if(zp(m,t)){m.preventDefault();let A=r!==void 0?r:vl(c)===vl(h);s(e,{replace:A,state:l,preventScrollReset:o,relative:i,viewTransition:a})}},[c,s,h,r,l,t,e,o,i,a])}const Yp=[{id:"202605090855001",title:"Anthropic 9,000억 달러 펀딩 임박...OpenAI 추월 초읽기",summary:"Anthropic이 5월 이사회에서 최대 500억 달러(약 70조 원) 규모, 기업가치 9,000억 달러(약 1,260조 원) 펀딩 라운드 결정에 들어간다. 성사 시 OpenAI(8,520억 달러)를 추월하는 사상 최대 규모 AI 기업이 된다. ARR 300억 달러 돌파, 1분기 매출 80배 폭증이 핵심 동력이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-09T08:55:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## OpenAI를 추월하는 사상 최대 AI 펀딩

생성형 AI 양강 구도가 한 번 더 뒤집힌다. **Anthropic**이 5월 둘째 주 이사회에서 ==**500억 달러(약 70조 원)**== 규모 펀딩 라운드 진행 여부를 결정한다. 성사되면 기업가치는 ==**9,000억 달러(약 1,260조 원)**==로 평가되며, 이는 1월 1,220억 달러 라운드를 마감하면서 8,520억 달러 가치를 인정받은 ==**OpenAI를 정면으로 추월**==하는 수치다.

📌 **핵심 인사이트**: 전 세계 사기업 중 SpaceX·바이트댄스를 제외한 최대 가치평가다. AI 단일 산업이 자본시장의 정점에 올라서는 ==첫 분기==가 2026년 2분기다.

블룸버그·CNBC·테크크런치가 4월 29일~5월 1일 사이 잇따라 보도한 내용에 따르면, 투자자 수요가 워낙 강해 ==최종 가치평가가 9,000억 달러를 상회할 가능성==도 거론된다. Anthropic 이사회는 5월 중 결정 후, ==**2026년 10월 IPO**==를 목표로 하는 마지막 사기업 라운드로 자금을 활용할 계획이다.

---

## ARR 300억 달러, 80배 폭증의 비밀

Anthropic의 2026년 1분기 매출은 ==**전년 동기 대비 80배**==로 폭증했다. 이는 어떤 프론티어 AI 기업도 공개한 적 없는 ==단일 분기 사상 최대 매출 점프==다. ARR(연간 반복 매출)은 **300억 달러**를 돌파했고, 일부 보도는 **440억 달러** 수준까지 추정한다.

성장 동력은 명확히 ==**기업 고객(B2B)**==이다.

- **엔터프라이즈 매출 비중**: 전체의 ==**80%**==
- **연 100만 달러 이상 지출 기업**: ==**1,000개사 이상**==
- **금융권 고객**: 상위 50대 고객 중 ==**40%가 금융기관**==

> "AI를 도입하지 않는 SaaS 기업은 파산할 수 있다. 우리 상위 50개 고객 중 40%가 이미 금융기관이다."
> — Dario Amodei, Anthropic CEO (5월 5일 금융 서비스 이벤트)

특히 5월 첫 주에만 Anthropic은 ==**6건의 메가 뉴스**==를 동시 발표했다. JP모건과의 금융 에이전트 10종 동시 출시(다이먼 CEO 직접 파트너십), Claude Code Auto Mode 정식 출시, **Google Cloud 200억 달러 컴퓨팅 계약**, **SpaceX·xAI Colossus 1 슈퍼컴퓨터 직접 사용 계약**, ==**Claude Agent SDK 전면 외부 개방**==이 그것이다.

---

## 한국에 미치는 영향

### 1. 국내 금융권 AI 도입 가속

==**KB금융·신한금융·하나금융·우리금융**== 4대 금융지주의 Anthropic 채택 압력이 한층 강해진다. 다이먼 JP모건 CEO가 직접 Claude 금융 에이전트의 출시 파트너로 등장한 것은 글로벌 금융 표준의 신호탄이다. 국내에서도 ==**대출 심사·자금세탁 모니터링·리스크 분석**== 영역에서 Claude 직접 도입 검토가 확산될 전망이다.

### 2. 네이버·카카오의 자체 LLM 전략 시험대

==**HyperCLOVA X·KoGPT 3.5·EXAONE 3.0**==가 글로벌 기업 시장에서 Claude·GPT-5와 가격·성능 모두 경쟁해야 한다. Anthropic의 ARR 300억 달러는 ==연간 매출 기준 네이버 전체(약 9조 원)와 견줄만한 규모==다. 자체 모델만으로 글로벌 시장을 여는 기존 전략은 ==재검토가 불가피==하다.

### 3. SK하이닉스·삼성전자 메모리 수혜

Anthropic이 Google Cloud 200억 달러 + SpaceX 컴퓨팅을 동시 확보한다는 것은 ==2027년까지 추가 GPU·TPU 수십만 장이 가동==된다는 뜻이다. 이 모든 가속기에 ==**HBM3E·HBM4**==가 결합된다. 한국 메모리 양사는 ==2027년 매출 가이던스를 추가 상향==할 가능성이 거론된다.

### 4. 국내 AI 인프라 스타트업 기회

==**모레·파네시아·리벨리온·퓨리오사AI**== 등 국내 AI 인프라 스타트업의 글로벌 펀딩 협상력도 동반 상승한다. Anthropic 라운드가 9,000억 달러로 마감되면, 한국 AI 인프라 기업들의 ==**시리즈 B/C 가치평가가 평균 40~60% 상향**==될 것으로 업계는 예상한다.

---

## IPO 시나리오: 10월 상장이 의미하는 것

Anthropic은 이번이 ==마지막 사기업 라운드==가 될 가능성이 높다. CFO 크리스타 슈마허는 4월 말 사내 메시지에서 ==**2026년 10월 NYSE 상장**==을 직접 언급한 것으로 알려졌다.

⚡ **주목할 포인트**: Anthropic이 10월에 상장한다면, ==공모가 기준 시가총액 1조 달러 돌파 가능성==이 거론된다. 이는 NVDA·MSFT·AAPL·GOOG·AMZN 다음 ==**6번째 1조 달러 클럽 진입**==이며, AI 단일 비즈니스 모델로는 ==사상 최단 기간 1조 달러 도달==이다.

✅ **결론**: 9,000억 달러 펀딩이 단순 자금 조달이 아닌 ==AI 산업 자본시장 재편==의 신호라는 점을 한국 정책당국·투자업계 모두 빠르게 인지해야 한다. 5월 이사회 결정과 10월 IPO 사이 ==**5개월의 공백 기간**==이 한국 AI 기업의 글로벌 자본 조달에 ==황금 윈도우==가 될 수 있다.

---

## 펀딩 라운드 참여 가능 투자자 명단

현재까지 거론되는 ==**유력 투자자**==는 다음과 같다.

- **Mubadala(아부다비)**: ==**100억 달러 단독 투자**== 검토. 중동 국부펀드의 첫 AI 메가 투자
- **카타르투자청(QIA)**: ==**80억 달러**== 협상 중. 중동 AI 인프라 허브 구축 의도
- **소프트뱅크 비전펀드**: ==**70억 달러**== 거론. OpenAI 투자 후 양다리 전략
- **Lightspeed·Coatue·General Catalyst**: 합계 ==**120억 달러**== 신디케이트 가능성
- **사우디 PIF**: ==**참여 여부 미확정**== — 카슈끄지 사건 이후 미국 LP 반대 우려

특히 ==**중동 자본 합계 200억 달러 이상**==이 거론되는 점이 주목된다. AI 산업의 자본 축이 ==**실리콘밸리 → 중동·아시아**==로 이동 중이라는 신호다. 한국 ==**국민연금공단(NPS)·KIC**==의 직접 LP 참여는 ==이번에도 무산==된 것으로 알려져, ==**한국 자본의 글로벌 AI 직접 노출 부족**==이 또다시 도마 위에 오른다.`},{id:"202605090855002",title:"구글 Gemma 4 Apache 2.0 공개...256K 컨텍스트·31B 오픈모델 정점",summary:"구글이 5월 첫째 주 Gemma 4 시리즈를 Apache 2.0 라이선스로 전면 공개했다. 256K 컨텍스트, 네이티브 비전·오디오, 140개 언어 지원으로 오픈소스 LLM의 기술 한계를 다시 그었다. 엣지 디바이스용 2B/4B부터 데이터센터급 31B까지 5단계 모델 동시 출시로 라마 4·미스트랄을 정조준한다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-09T08:55:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!0,content:`## 오픈소스 LLM의 기술 한계를 다시 그은 31B 파라미터

==**구글 딥마인드(Google DeepMind)**==가 5월 첫째 주 ==**Gemma 4 시리즈**==를 ==**Apache 2.0 라이선스**==로 전면 공개했다. 핵심 사양만 보면 오픈소스 모델의 한계가 한 단계 도약했음이 분명하다.

- **컨텍스트 윈도우**: ==**256K 토큰**== (이전 Gemma 3 대비 4배)
- **언어 지원**: ==**140개 이상**== (한국어·일본어·태국어 포함)
- **모달리티**: 텍스트 + ==**네이티브 비전 + 오디오**== 처리
- **모델 크기**: ==**2B / 4B / 12B / 27B / 31B**==의 5단계 + 양자화 변형 8종
- **라이선스**: 상업 활용 가능한 ==**Apache 2.0**==

📌 **결정적 차별점**: Gemma 4는 ==Gemini 3와 동일한 연구 기반==으로 만들어졌다. 즉 구글의 클라우드 폐쇄형 모델과 ==기술적 동질성==을 갖춘 첫 오픈모델이다.

특히 2B·4B 모델은 ==추론 시 효과적 활성 파라미터를 줄이는 MoE 변형==을 통해 ==**라즈베리 파이·NVIDIA Jetson Orin Nano·스마트폰 NPU**==에서도 ==완전 오프라인==으로 동작한다. ==**근접 제로 레이턴시(near-zero latency)**==를 강조한 것은 메타의 LLaMA 4·미스트랄 Pixtral과 정면 차별화 포인트다.

---

## 데이원 통합 생태계: 어디서나 즉시 가동

구글은 출시 첫날부터 ==**12개 메이저 런타임**== 동시 지원을 발표했다.

1. **Hugging Face** — 가중치 즉시 다운로드
2. **vLLM** — 데이터센터 추론 최적화
3. **llama.cpp / MLX** — 로컬 추론
4. **Ollama / LM Studio** — 사용자 친화 GUI
5. **NVIDIA NIM / NeMo** — 엔터프라이즈 GPU 가속
6. **LiteRT-LM** — 모바일·엣지
7. **Unsloth / SGLang** — 파인튜닝·서빙

> "오픈모델은 더 이상 폐쇄형 모델의 백업이 아니다. 실제 운영 환경에서 동시 활용되는 ==1군 자산==이다."
> — Demis Hassabis, Google DeepMind CEO (블로그 발표문)

==**Google Cloud Vertex AI**==에서도 동시 가동되며, ==**TPU v8·v9**== 추론 최적화 버전을 별도 제공한다. 한 마디로 ==무료 가중치 + 유료 인프라==의 정확한 분업 구조다.

---

## 한국에 미치는 영향

### 1. 국내 LLM 스타트업 비용 구조 격변

==**업스테이지 솔라(Solar)·코난테크놀로지·올거나이즈·뤼튼테크놀로지스**==는 자체 모델 학습 비용 부담이 컸다. Gemma 4 27B를 베이스로 ==한국어 도메인 파인튜닝==만 진행하면 ==**베이스 모델 학습 대비 90% 이상 비용 절감**==이 가능하다. 시리즈 A·B 단계 스타트업의 경쟁력이 즉시 강화된다.

### 2. 국내 온디바이스 AI 시장 가속

==**삼성전자 갤럭시 S26·LG전자 그램 AI**==가 즉시 수혜다. 2B·4B 변형은 ==NPU 5 TOPS 이상이면 모두 동작==한다. 갤럭시 S25 이상 모델은 모두 ==**오프라인 실시간 번역·요약·질의응답**==이 가능해진다. ==**삼성전자 모바일 AI 라이선스 비용은 분기당 약 1,200억 원이 절감**==될 것으로 분석된다.

### 3. 공공·교육 영역 도입 확산

==**과학기술정보통신부·교육부·서울시교육청**==이 자체 LLM 활용을 검토하던 차에 Apache 2.0은 ==공공 조달 진입 장벽==을 사실상 제거한다. ==연 200억 원 규모==의 공공 AI 도입 예산이 Gemma 4 기반 한국형 미세조정 사업으로 흘러들 가능성이 높다.

⚡ **주의 포인트**: 한국어 성능이 Apache 2.0의 ==충분조건==은 아니다. ==**HyperCLOVA X·EXAONE 3.0·A.X K1**==이 자체 한국어 평가에서 여전히 우위라는 보고가 5월 7일 한국전자통신연구원(ETRI)에서 발표됐다. 국내 모델의 ==한국어·문화·법무 도메인 우위==를 어떻게 지키느냐가 향후 12개월 핵심 과제다.

---

## 라이선싱 경쟁: 라마 4·미스트랄과의 정면 충돌

==**메타 라마 4 (Llama 4)**==는 자체 라이선스(Llama Community License)를 유지하며 월간 활성 사용자 7억 명 이상 기업의 상업 활용을 제한한다. ==**미스트랄(Mistral)**==은 일부 모델만 Apache 2.0이고 대형 모델은 상업 라이선스가 필요하다.

✅ **반면 Gemma 4는 31B까지 모든 변형이 Apache 2.0**으로, ==사실상 라이선스 제약 제로==다. 이는 ==오픈소스 LLM 시장의 라이선싱 게임을 단번에 평정==한 결정이다.

업계 분석가들은 6월~9월 사이 ==**라마 4의 라이선스 완화**==와 ==**미스트랄의 모델 라인 재편**==이 동시에 일어날 것으로 본다. Gemma 4가 만든 ==Apache 2.0 표준==이 오픈소스 LLM의 ==사실상 산업 표준==이 되는 시나리오다.

🎯 **한국 기업 행동 가이드**: 1) 사내 PoC는 즉시 Gemma 4 27B로 전환 2) 한국어 미세조정은 6월 안에 완료 3) 자체 모델 학습 예산은 ==도메인 데이터 정제==로 재배분. ==기초모델 자체 개발에서 응용 차별화로 자원 이동==이 핵심이다.

---

## 핵심 벤치마크: GPT-5와의 격차는?

구글이 동시 공개한 ==**Gemma 4 31B 벤치마크 비교표**==는 다음과 같다.

- **MMLU(다중작업언어이해)**: Gemma 4 31B ==**85.2점**== / GPT-5 91.4 / Claude 4.5 89.8
- **HumanEval(코딩)**: Gemma 4 31B ==**78.4점**== / GPT-5 86.2 / Claude 4.5 84.7
- **수학(MATH)**: Gemma 4 31B ==**62.8점**== / GPT-5 78.5 / Claude 4.5 75.2
- **다국어(MGSM)**: Gemma 4 31B ==**81.6점**== / GPT-5 84.3 / Claude 4.5 82.1

📌 **핵심 인사이트**: ==**오픈모델로는 사상 최고 수준**==이지만 폐쇄형 모델과의 격차는 ==약 6~16점==. 그러나 ==**같은 31B 파라미터로 폐쇄형의 80~90% 성능**==을 ==무료 라이선스==로 제공한다는 사실 자체가 게임 체인저다. 비용 효율성으로 재해석하면 ==**GPT-5 대비 50배 비용 효율**==이라는 평가가 나온다.

⚠️ **운영 환경 주의사항**: 31B 모델 추론에는 ==**최소 60GB VRAM(BF16) 또는 30GB(FP8 양자화)**==가 필요하다. ==**NVIDIA H100 단일 GPU**==로 동작 가능하다. 한국 GPU 클라우드 사업자(==**아이크라프트·메가존클라우드**==)도 5월 8일부터 ==**Gemma 4 31B 즉시 가동 인스턴스**==를 시간당 ==**4,800원**== 수준으로 출시했다.`},{id:"202605090855003",title:"업스테이지, 포털 다음 인수 확정...솔라 LLM 결합 한국형 AI 검색 도전",summary:"업스테이지가 5월 7일 포털 다음 운영사 AXZ 인수를 최종 확정했다. 자체 거대언어모델 솔라(Solar)를 다음 검색 엔진에 결합해 차세대 AI 포털로 재탄생시킨다는 계획이다. 네이버·구글에 맞서는 한국형 AI 검색 생태계의 첫 실험으로, 5~7월 시범 서비스 진입이 예정됐다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-09T08:55:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800",breaking:!1,content:`## 카카오에서 분리된 다음, AI 스타트업의 인수 자산이 되다

==**업스테이지(Upstage)**==가 5월 7일 ==**포털 '다음(Daum)'**==의 운영사 ==**AXZ**==를 정식 인수했다. 인수가는 공식 발표되지 않았으나, 업계는 ==**약 3,500억~4,200억 원 사이**==로 추정한다. 카카오가 2024년 다음을 분사한 이후 약 ==**18개월 만의 매각**==이며, AI 스타트업이 한국 ==**전통 빅 인터넷 포털**==을 인수한 ==첫 사례==다.

📌 **인수 구도의 의미**: 업스테이지는 한국 AI 스타트업 중 ==시리즈 B 규모 1,500억 원==을 받은 톱 티어다. CEO 김성훈은 네이버 출신, 자체 LLM ==**솔라(Solar)**==는 글로벌 오픈모델 리더보드에서 라마 3·믹스트랄을 추월한 경력이 있다. ==기술 자산은 충분, 사용자 트래픽이 부족==했던 회사가 ==**월간 활성 사용자 1,800만 명**==의 다음을 흡수한 것이다.

> "다음은 한국에서 가장 사랑받는 검색 브랜드 중 하나다. 솔라 LLM과 결합한 ==AI 네이티브 검색==으로 네이버·구글이 못 한 것을 우리가 만든다."
> — 김성훈, 업스테이지 CEO (5월 7일 인수 발표 기자회견)

---

## 솔라 LLM 결합 로드맵: 5월 PoC, 7월 시범 서비스

업스테이지는 인수 직후 ==**3단계 통합 로드맵**==을 공개했다.

1. **5~6월**: 다음 검색 결과 상단에 ==**솔라 기반 AI 답변(AI Answer)**== 베타 적용. 사용자 200만 명 한정 노출.
2. **7~9월**: ==**대화형 검색(Conversational Search)**== 시범 서비스. 후속 질문, 멀티턴 대화, 출처 인용 강화.
3. **10월 이후**: ==**다음 카페·뉴스·메일·지도와 통합한 멀티모달 AI 비서**==. 이메일 요약, 카페 게시글 추천, 지도 경로 자연어 질의.

특히 두드러지는 점은 ==**RAG(검색증강생성)**==를 핵심 차별화 축으로 잡았다는 것이다. 다음 ==뉴스 코퍼스 20년치==와 카페 ==공개 게시글 80억 건==을 솔라 모델 ==RAG 인덱스==에 통합한다. 이는 네이버의 ==한국어 검색 데이터 우위==에 정면 도전하는 차별화 자산이다.

---

## 한국에 미치는 영향

### 1. 네이버 검색 점유율 직격탄

==**네이버**== 국내 검색 시장 점유율은 5월 현재 ==**52.8%**==로 1년 새 4.2%p 하락했다. 구글은 38.4%로 상승, 다음은 5.7%로 정체였다. ==**다음 + 솔라 LLM**==이 7월 정식 서비스 시 ==**3년 내 점유율 12~15%**==까지 회복 가능하다는 분석이 ==**미래에셋증권**==에서 5월 8일 나왔다. 네이버의 ==**클로바X 검색 통합**==이 직접 압박을 받는다.

### 2. 카카오의 후회와 재진입 가능성

카카오는 2024년 다음을 분사했지만, ==**카카오톡 AI 검색**==이 2025년 시범 서비스 후 ==사실상 좌초==했다. 업스테이지가 다음+솔라로 빠르게 시장 점유율을 회복하면, 카카오는 ==**카카오톡 내 다음 통합 재추진**==을 검토할 수 있다는 관측이 나온다.

### 3. 업스테이지 펀딩 가치평가 급상승

업스테이지는 인수 발표 직후 ==**시리즈 C 추가 1조 원 펀딩**==을 검토 중이다. 인수 전 가치평가는 약 ==1조 8,000억 원==이었으나, 다음 인수 후 ==**3조 5,000억 원~4조 원**==이 거론된다. ==**소프트뱅크 비전펀드·테마섹·카타르투자청(QIA)**==이 잠재 투자자로 거론된다.

### 4. 한국형 AI 검색 인프라의 첫 실증

==**과학기술정보통신부**==가 추진해온 ==**'국가 AI 컴퓨팅 센터'**== 사업의 첫 실증 사례가 될 가능성이 높다. 업스테이지는 솔라 모델 추론 인프라의 ==**약 30%**==를 국가 AI 컴퓨팅 센터에서 운영하기로 ==**5월 8일 MOU**==를 체결했다.

---

## 풀어야 할 3가지 과제

⚠️ **시장 진입의 위험**: 다음+솔라가 곧 성공을 의미하지는 않는다.

1. **사용자 락인의 어려움**: 다음 사용자의 ==평균 연령이 47.3세==로 네이버(38.5세)·구글(34.2세)보다 높다. AI 검색 도입 의사 비율이 ==상대적으로 낮을 수 있다==.

2. **검색 광고 비즈니스 모델**: 네이버는 검색 광고에서만 연 ==**4조 8,000억 원**==을 번다. 다음의 광고 매출은 ==약 1,400억 원==에 불과하다. ==**AI 답변이 검색 클릭률을 추가로 떨어뜨릴 위험**==이 있다.

3. **솔라 LLM의 한국어 RAG 신뢰성**: 다음 뉴스·카페 코퍼스에는 ==잘못된 정보·차별 표현·법적 분쟁 사례==가 다수 포함된다. ==**RAG 인덱싱 단계의 정밀 필터링**==이 핵심 기술 과제다.

🎯 **결론**: 업스테이지의 다음 인수는 ==단순한 트래픽 흡수==가 아닌 ==**한국형 AI 검색 인프라 구축의 첫 실증 시나리오**==다. 7월 시범 서비스의 사용자 만족도가 향후 1년의 한국 검색 시장 판도를 결정한다.

---

## 솔라(Solar) LLM의 글로벌 트랙 레코드

업스테이지의 솔라 모델은 단순한 한국어 LLM이 아니다. 글로벌 평가에서 객관적인 성과를 다수 보유한다.

- **2024년 4월**: ==**솔라 10.7B**==가 Hugging Face 오픈 LLM 리더보드 ==**1위**==(72.3점). 라마 2 70B를 ==**6.6배 작은 모델**==로 추월
- **2024년 11월**: ==**솔라 미니(Solar Mini)**==가 SAT(미국 대입시험) 영어·수학 ==**평균 1,420점**== 달성
- **2025년 8월**: ==**솔라 Pro 22B**==가 한국어 MMLU에서 ==**87.4점**==으로 ==HyperCLOVA X와 동률==
- **2026년 3월**: AWS Bedrock 한국 리전 ==**공식 첫 한국 LLM**==으로 등록

💡 **결정적 차별화**: 솔라는 ==**Depth Up-Scaling**==이라는 자체 아키텍처를 통해 ==**더 작은 파라미터로 더 좋은 성능**==을 입증해왔다. 이 기술적 강점이 다음의 ==**대규모 사용자 트래픽**==과 결합하는 순간, 한국 AI 검색 시장의 ==**진정한 변곡점**==이 된다.`},{id:"202605090855004",title:"SK하이닉스 HBM4 시장 70% 점유 전망...엔비디아 Rubin 독점 공급 가시화",summary:"UBS가 5월 8일 보고서에서 SK하이닉스의 2026년 HBM4 시장 점유율을 약 70%로 전망했다. 엔비디아의 차세대 AI 가속기 Rubin 플랫폼에 HBM4를 사실상 독점 공급할 가능성이 높다. 삼성전자는 6월 HBM4E 첫 샘플 양산을 목표로 추격에 나섰다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-09T08:55:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800",breaking:!1,content:`## UBS 보고서: SK하이닉스 70% 점유, 사실상 독점

==**UBS**==가 5월 8일 새벽 발간한 ==**'2026년 HBM 시장 전망'**== 보고서에서 ==**SK하이닉스가 HBM4 시장에서 약 70%의 점유율을 달성할 것**==이라고 분석했다. 이는 단순한 점유율 우위가 아닌 ==**사실상 독점적 지위**==를 의미한다.

- **HBM4 시장 규모(2026년 추정)**: ==**약 285억 달러(약 39조 원)**==
- **SK하이닉스 매출 추정**: ==**200억 달러(약 28조 원)**==
- **삼성전자 점유율 추정**: ==**18~22%**==
- **마이크론 점유율 추정**: ==**8~10%**==

📌 **이 수치가 의미하는 것**: SK하이닉스의 HBM 단일 매출이 ==**연간 글로벌 D램 매출의 약 35%**==를 단독 차지한다. 메모리 반도체 사상 ==**단일 제품군 1위 기업의 매출 비중 최고치**==다.

엔비디아의 차세대 AI 가속기 ==**Rubin 플랫폼**==(2026년 4분기~2027년 1분기 출시 예정)에는 ==**HBM4 12스택(12-high)**==이 채택된다. UBS는 SK하이닉스가 ==**Rubin 1차 양산 물량의 80% 이상**==을 ==**독점 공급**==할 것으로 본다. 삼성전자는 ==**1차 검증 통과 시 2027년 2분기부터 보조 공급사**==로 합류한다는 시나리오다.

> "HBM4는 단순한 메모리가 아니라 ==**AI 가속기의 두뇌와 일체화된 기능 부품**==이다. SK하이닉스가 가진 ==**TSV(Through-Silicon Via)**== 적층 기술과 ==**MR-MUF**== 패키징 노하우는 단기에 따라잡기 어렵다."
> — 카오리 마키타, UBS 메모리 반도체 수석 애널리스트

---

## 삼성전자의 HBM4E 추격: 6월이 분기점

==**삼성전자**==는 5월 7일 ==**HBM4E 첫 샘플 양산**==을 6월 중으로 앞당긴다고 내부 공유했다. HBM4E는 HBM4의 다음 세대로, ==**대역폭 12.8TB/s, 스택당 64GB**==를 목표로 한다. 삼성은 ==**HBM4를 건너뛰고 HBM4E에서 점유율 역전**==하는 전략을 사실상 공식화했다.

⚡ **결정적 변수**: HBM4E의 ==**HKMG(High-K Metal Gate) 1c 노드**== 안정화 여부. 5월 6일 화성 17라인에서 ==초기 수율 41%==를 기록한 것으로 알려졌다. 양산 가능 수율(>70%)까지 ==**약 8~12주의 추가 안정화**==가 필요하다는 평가다.

---

## 한국에 미치는 영향

### 1. 코스피·코스닥 메모리 슈퍼사이클 본격화

==**SK하이닉스**==는 5월 8일 종가 ==**38만 7,500원**==으로 사상 최고치를 또다시 경신했다. UBS는 12개월 목표주가를 ==**46만 원에서 52만 원으로 상향**==했다. ==**삼성전자**==도 HBM4E 6월 샘플 일정에 따라 ==**기관 매수세가 6월 첫째 주에 집중**==될 것으로 예상된다. 5월 6일 코스피 7,000선 돌파의 핵심 동력이 ==**메모리 양사의 동반 상승**==이었다.

### 2. 후공정·소재·장비 기업의 동반 호황

==**한미반도체·이오테크닉스·테스나·솔브레인·동진쎄미켐**==이 직접 수혜다. 특히 ==**한미반도체**==의 TC(Thermo-Compression) 본더는 SK하이닉스의 HBM4 12스택 핵심 장비로 ==**3분기 수주 잔고 2조 5,000억 원**==을 돌파했다.

### 3. 전력·냉각 기자재 수요 폭증

HBM4·HBM4E 가동에 필요한 ==데이터센터 전력 인프라== 수요가 동반 폭증한다. ==**효성중공업·LS일렉트릭·LG전자 BS사업부**==의 ==**고전압 변압기·액침 냉각 시스템**== 매출이 2026년 ==**전년 대비 평균 67% 성장**==할 것으로 ==**한화투자증권**==이 5월 7일 분석했다.

### 4. K-AI 인프라 자립 가능성

==**과학기술정보통신부**==가 추진하는 ==**국가 AI 컴퓨팅 센터**==(2027년 가동 목표)는 SK하이닉스 HBM4 + ==**리벨리온 ATOM·퓨리오사 RNGD**== 결합을 핵심 아키텍처로 검토 중이다. ==**미국 GPU 의존도를 70%에서 35%까지 낮추는 시나리오**==가 5월 들어 본격 논의된다.

---

## 글로벌 공급망 리스크: 5가지 변수

⚠️ **70% 점유율이 영구 보장되지는 않는다**. 향후 12개월 추적해야 할 5가지 리스크:

1. **마이크론(Micron)의 HBM4 12-high 진입** — 7월 첫 검증 결과 발표 예정
2. **중국 CXMT의 HBM3 양산** — 자체 AI 칩(화웨이 Ascend) 결합 가능성
3. **삼성 HBM4E 수율 안정화** — 8~12주 내 70% 도달 여부
4. **엔비디아 Rubin 출시 일정 지연** — TSMC CoWoS-L 패키징 병목
5. **미국 BIS 추가 수출통제** — 중국향 HBM4 공급 차단 시 단기 매출 충격

🎯 **5가지 모두가 SK하이닉스의 70% 점유율을 흔들 변수다**. 한국 정부와 기업 모두 ==**기술 격차 유지 + 외교적 안정성 + 차세대(HBM5) 선제 투자**==의 3축을 동시 관리해야 한다.

✅ **결론**: HBM4 70% 점유율은 한국 메모리 산업의 ==**역대 최고 전성기**==를 상징하지만, 동시에 ==**경쟁사 추격이 한꺼번에 진행되는 가장 취약한 시점**==이기도 하다. 2026년 하반기 6개월이 한국 AI 반도체 패권의 ==**결정적 시간**==이다.

---

## HBM5 로드맵: 2028년 다음 전쟁의 윤곽

HBM4·HBM4E 다음의 ==**HBM5 세대**==는 2028년 양산 목표다. 양사가 5월 들어 본격 공개한 ==**HBM5 핵심 사양**==은 다음과 같다.

- **대역폭**: ==**24~28TB/s**== (HBM4 9TB/s 대비 약 3배)
- **스택당 용량**: ==**128~192GB**== (16-high 또는 20-high 구조)
- **전력 효율**: HBM4 대비 ==**40% 개선**==
- **공정 노드**: ==**1d 또는 1e 노드**== (10nm 미만)
- **인터페이스**: ==**PAM4 신호 + 옵티컬 I/O 검토**==

📌 **HBM5의 차별점**: ==**메모리와 GPU 간 옵티컬 I/O 통합**==이 핵심 변수다. 광 인터페이스가 채택되면 ==**전기 신호 한계 돌파**==로 대역폭이 추가 30~50% 확장된다. 이는 ==**삼성·SK하이닉스·인텔·AMD·엔비디아**== 모두가 참여하는 ==**HBM-Centric Architecture**== 합의가 필요하다.

⚡ **5월 8일 기준 실시간 동향**: SK하이닉스는 5월 7일 미국 산호세에서 열린 ==**OCP 글로벌 서밋**==에서 ==**HBM5 첫 프로토타입**==을 공개했다. 양산 일정은 ==**2028년 1분기**==. 삼성전자도 동일 행사에서 ==**HBM5 컨셉 칩**==을 선보였다.`},{id:"202605090855005",title:"EU 교육용 AI 윤리지침 2026판 발표...GDPR·AI법 결합 첫 실행 문서",summary:"유럽연합 집행위원회가 5월 7일 교육자를 위한 AI·데이터 윤리 활용 가이드라인 2026판을 발표했다. 2024년 8월 발효된 EU AI법과 GDPR을 결합한 첫 통합 실행 문서로 평가받는다. 한국 에듀테크 기업의 EU 진출 시 즉시 준수 의무가 발생하며, 2,000만 유로 이상의 과징금 리스크가 동반된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-09T08:55:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",breaking:!1,content:`## EU AI법·GDPR 결합한 사상 첫 실행 가이드라인

==**유럽연합 집행위원회(European Commission)**==가 5월 7일 ==**'교육 분야 AI 및 데이터 윤리적 활용 가이드라인 2026년판'**==을 정식 발표했다. 분량은 ==**총 187페이지**==, 부속 점검 도구 ==**8종**==이 동시 공개됐다.

📌 **이 문서가 갖는 의의**: 2024년 8월 발효된 ==**EU AI법(EU AI Act)**==과 ==**GDPR**==을 ==**한 문서에서 통합 적용**==한 ==**최초의 실행 가이드라인**==이다. 두 법은 그동안 별도로 적용됐고, 교육 현장에서 ==충돌 사례가 다수 보고==됐다.

핵심 변화 4가지:

1. **고위험 AI 분류 명문화**: 학생 평가·입학 심사·장학금 추천 AI는 ==**EU AI법 부속서 III 고위험**==으로 자동 분류
2. **데이터 처리 근거 통합**: GDPR Article 6과 EU AI법 Article 10의 ==**중복 적용 시 우선 순위 명시**==
3. **만 18세 미만 특별 보호**: ==**프로파일링 및 자동화 결정 전면 금지**==, 위반 시 ==**연 매출 4% 또는 2,000만 유로 중 큰 금액**== 과징금
4. **교사 검증 의무**: AI 채점·평가 결과는 ==**반드시 인간 교사의 최종 승인**==을 거쳐야 함

> "AI는 교육 혁신의 ==강력한 도구==지만, 학생의 미래를 결정하는 ==자동화된 판단==이 되어서는 안 된다. 인간 교사의 ==최종 책임 원칙==이 이번 가이드라인의 핵심이다."
> — Iliana Ivanova, EU 집행위원 혁신·연구·교육·청소년·문화 담당 (5월 7일 브뤼셀 기자회견)

---

## 한국에 미치는 영향

### 1. 한국 에듀테크 EU 진출 즉시 영향

==**웅진씽크빅·대교·청담러닝·뤼이드(Riiid)·매스프레소 콴다**==가 EU 시장 진출 시 ==**즉시 가이드라인 준수 의무**==가 발생한다.

- **뤼이드 산타토익**: AI 기반 적응형 학습 → ==**고위험 AI 분류 가능성**== 검토 필요
- **콴다(QANDA)**: AI 풀이 → ==**자동 채점이 평가 등급 결정**==에 활용되면 고위험
- **대교 노리(Knori)**: 학생 진도 추천 → ==**프로파일링 명시적 동의 필수**==

특히 ==**과징금 산정 기준**==이 ==**연 매출 4% 또는 2,000만 유로 중 큰 금액**==으로 명문화된 것은 ==한국 에듀테크 매출 규모로는 사실상 회사 존폐 수준 리스크==다.

### 2. 국내 정부 정책의 표준 모델 가능성

==**과학기술정보통신부·교육부**==는 5월 8일 EU 가이드라인의 ==**한국어 공식 분석 보고서**==를 7월 중 발간하기로 결정했다. ==**'K-에듀테크 AI 윤리 가이드라인'**== 제정이 9~10월에 추진된다. EU 표준을 ==**일부 수정 차용**==할 가능성이 높다.

### 3. K-에듀테크 컴플라이언스 산업 형성

==**법무법인 광장·김앤장·세종**==이 ==**EU AI법 + GDPR 통합 컴플라이언스**== 자문 서비스를 5월 중 정식 출시한다. 평균 자문료는 ==**연 8,000만 원~1억 5,000만 원**== 수준으로, 중소 에듀테크는 ==**컨소시엄 형태의 공동 자문**==이 검토된다.

### 4. 인공지능 윤리 인증·감사 시장 부상

==**한국정보통신기술협회(TTA)·한국인터넷진흥원(KISA)**==이 ==**AI 윤리 인증 제도**== 도입을 6월 중 발표한다. EU 진출 한국 기업이 ==**TTA 인증을 거치면 EU 1차 심사 면제**==하는 ==**상호 인정 협정(MRA)**==이 4분기 중 체결될 가능성이 거론된다.

---

## 글로벌 흐름: AI 규제의 도미노

⚡ **EU의 결정이 글로벌 표준이 되는 이유**: 2018년 GDPR 발효 후 ==**18개월 만에 한국·일본·캐나다·브라질이 유사 법제화**==를 완료했다. AI 규제 영역에서도 동일한 패턴이 예상된다.

- **미국**: 캘리포니아 SB 1047(2025년 12월 발효) + 연방 AI 권리 장전 검토 중
- **중국**: 생성형 AI 관리 잠정 조치(2024년 8월 시행) → 2026년 6월 본법 제정 예정
- **일본**: AI 사업법(2026년 4월 국회 통과) → ==**EU AI법 70% 차용**==
- **한국**: AI 기본법(2026년 1월 국회 통과) → ==**시행령 발효 6월 1일 예정**==

✅ **한국 AI 기본법 시행령**도 ==EU 가이드라인과의 정합성==을 핵심 검토 항목으로 두고 있다. ==**한국 시행령 발효 6월 1일**== 시점에 EU 가이드라인이 한국 산업계의 ==**사실상 첫 실무 표준**==이 된다.

---

## 한국 기업 행동 가이드: 6월 1일 D-Day 전 점검 5단계

🎯 **AI 기본법 시행령 발효 6월 1일까지 ==23일==이 남았다**. 다음 5단계는 즉시 착수해야 한다.

1. **5월 셋째 주**: 자사 AI 시스템의 EU AI법 부속서 III 고위험 해당 여부 자체 점검
2. **5월 넷째 주**: 데이터 처리 근거 GDPR/AI법 통합 매핑
3. **6월 첫째 주**: 만 18세 미만 사용자 데이터 ==**프로파일링·자동화 결정 즉시 중단**==
4. **6월 둘째 주**: AI 자동 평가 시스템에 ==**인간 교사·관리자 최종 승인 절차**== 추가
5. **6월 셋째 주 이후**: 컴플라이언스 외부 감사·인증 진행

⚠️ **핵심 메시지**: EU 가이드라인은 한국 에듀테크의 글로벌 진출이 ==**기술 경쟁력만으로는 불가능**==해진 시대의 시작이다. ==**규제 대응 능력 자체가 기업 경쟁력**==이라는 새로운 패러다임이 5월 7일을 기점으로 정착한다.

---

## 사례 학습: 2025년 EU 첫 과징금이 던진 메시지

2025년 11월 ==**미국 에듀테크 기업 Pearson**==이 EU AI법 첫 과징금 ==**1,800만 유로(약 252억 원)**==를 부과받았다. 위반 사유는 다음과 같다.

- **고위험 AI 미신고**: 학생 평가 AI를 부속서 III 미등록
- **데이터 처리 근거 누락**: GDPR 명시적 동의 없는 미성년 데이터 학습
- **인간 검증 절차 부재**: AI 채점 결과의 자동 적용
- **위험 평가 보고서 미제출**: 분기별 보고 의무 위반

💡 **한국 기업 시사점**: Pearson은 ==EU 매출 비중이 약 12%==였음에도 ==**연 매출 4% 과징금**==이 부과됐다. 한국 에듀테크 중 ==**뤼이드의 EU 매출 비중은 약 8%**==이지만, 위반 시 동일한 4% 과징금 산정 방식이 적용된다. ==**EU 매출 1억 달러 기업이 4% 과징금 4,000만 달러를 맞으면 사실상 EU 사업 철수 수준**==이다.

🎯 **최종 권고**: 한국 에듀테크는 ==**5월 9일 기준 즉시 EU AI법 + GDPR 통합 컴플라이언스 진단**==을 외부 자문사에 의뢰해야 한다. ==**6월 1일 한국 시행령 발효**==와 ==**EU 가이드라인 정식 적용**==이 동시에 진행되는 ==**규제 빅뱅 구간**==이 도래한다.`},{id:"20260508180001",title:"구글 제미나이 2.0, GPT-5 성능 넘어서며 멀티모달 AI 시대 선언",summary:"구글이 차세대 AI 모델 제미나이 2.0을 공개하며 OpenAI GPT-5를 앞선 성능을 입증했다고 발표했습니다. 특히 한국어 처리와 K-콘텐츠 이해 능력이 대폭 향상되어 국내 AI 생태계에 큰 변화가 예상됩니다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-08T18:00:15+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## 제미나이 2.0의 혁신적 성능 개선

구글이 5월 7일 발표한 제미나이 2.0은 멀티모달 벤치마크에서 GPT-5 대비 23% 향상된 성능을 기록했다. 특히 이미지-텍스트 통합 처리에서 기존 모델 대비 40% 개선된 정확도를 보여주며, 실시간 비디오 분석 기능도 새롭게 추가됐다.

> "제미나이 2.0은 단순한 언어 모델을 넘어 진정한 멀티모달 AI의 시작점이 될 것입니다. 특히 아시아 언어권에서의 성능 향상에 집중했습니다." - 순다르 피차이 구글 CEO

새 모델은 128K 토큰 컨텍스트 윈도우를 지원하며, 한국어 처리 성능이 이전 버전 대비 35% 향상됐다. 웹툰, K-드라마 등 한국 고유 콘텐츠에 대한 이해도도 크게 개선되어 창작자들의 관심을 끌고 있다.

## 한국 AI 생태계에 미치는 영향

네이버, 카카오 등 국내 빅테크 기업들은 제미나이 2.0의 등장으로 자사 AI 모델 개발 전략을 재검토하고 있다. 특히 네이버의 하이퍼클로바X와 카카오브레인의 KoGPT 시리즈가 직접적인 경쟁에 직면할 것으로 예상된다.

국내 AI 스타트업들은 제미나이 2.0의 API 활용을 통해 서비스 고도화에 나설 계획이다. 업계 전문가들은 "구글의 강력한 멀티모달 기능이 국내 에듀테크, 헬스케어 AI 분야에 새로운 기회를 제공할 것"이라고 전망했다.

구글은 한국 시장 공략을 위해 서울 R&D 센터 인력을 30% 확충하고, 국내 대학과의 AI 연구 협력도 확대할 예정이라고 밝혔다.`},{id:"20260508180002",title:"삼성전자, 갤럭시 AI 칩셋 자체 개발 성공...엔비디아 의존도 탈피",summary:"삼성전자가 자체 개발한 AI 전용 칩셋 '엑시노스 AI 3200'을 공개했습니다. 엔비디아 H100 대비 30% 향상된 추론 성능과 50% 낮은 전력 소모를 달성해 글로벌 AI 칩 시장에서 한국의 위상을 높였습니다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-08T18:00:15+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!1,content:`## 엑시노스 AI 3200의 기술적 혁신

삼성전자가 5월 6일 공개한 엑시노스 AI 3200은 3나노 GAA(Gate-All-Around) 공정으로 제조된 차세대 AI 칩셋이다. 초당 500 TOPS(Tera Operations Per Second)의 연산 성능을 달성하며, 온디바이스 AI 처리에 최적화된 아키텍처를 채택했다.

특히 트랜스포머 모델 가속을 위한 전용 NPU(Neural Processing Unit)를 탑재해 대규모 언어 모델의 추론 속도를 기존 대비 3배 향상시켰다. 메모리 대역폭도 1TB/s를 달성해 복잡한 멀티모달 AI 작업도 원활하게 처리할 수 있다.

> "엑시노스 AI 3200은 모바일부터 데이터센터까지 확장 가능한 AI 컴퓨팅의 새로운 패러다임을 제시합니다. 특히 에너지 효율성에서 업계 최고 수준을 달성했습니다." - 박용인 삼성전자 시스템LSI사업부 사장

## 한국 반도체 산업 경쟁력 강화

삼성의 AI 칩 자체 개발 성공은 한국이 메모리 반도체를 넘어 시스템 반도체 영역에서도 글로벌 경쟁력을 확보했음을 의미한다. 현재 엔비디아가 독점하고 있는 AI 칩 시장에 균열을 가할 것으로 기대된다.

국내 AI 기업들은 삼성의 새 칩셋을 활용해 비용 효율적인 AI 서비스 개발이 가능해질 것으로 전망한다. 특히 클라우드 비용 부담으로 어려움을 겪던 스타트업들에게는 새로운 기회가 될 것으로 보인다.

삼성은 2026년 하반기부터 엑시노스 AI 3200의 양산을 시작하며, 갤럭시 S27 시리즈에 최초 탑재할 예정이다. 또한 국내외 AI 기업들을 대상으로 한 파운드리 사업도 적극 추진할 계획이다.`},{id:"20260508180003",title:"스탠포드 AI 연구진, 인간 수준 추론 능력 가진 'ReasonGPT' 개발",summary:"스탠포드 대학 연구팀이 복잡한 수학적 추론과 논리적 사고에서 인간 전문가 수준의 성능을 보이는 AI 모델을 개발했다고 발표했습니다. 기존 LLM의 한계였던 다단계 추론 문제를 혁신적으로 해결한 것으로 평가받고 있습니다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-08T18:00:15+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!1,content:`## ReasonGPT의 혁신적 추론 메커니즘

스탠포드 AI 연구소가 5월 5일 공개한 ReasonGPT는 '계층적 추론 트리(Hierarchical Reasoning Tree)' 아키텍처를 도입해 복잡한 문제를 단계별로 분해하고 해결하는 능력을 구현했다. 수학 올림피아드 문제에서 85% 정확도를 달성하며, 기존 GPT-4의 42%를 크게 앞섰다.

연구팀은 특히 '자기 검증(Self-Verification)' 메커니즘을 개발해 AI가 자신의 추론 과정을 스스로 점검하고 오류를 수정할 수 있도록 했다. 이를 통해 환각(Hallucination) 현상을 90% 이상 줄였다고 밝혔다.

> "ReasonGPT는 단순히 패턴을 학습하는 것이 아니라 진정한 의미에서 '생각'하는 AI의 첫걸음입니다. 인간의 사고 과정을 모방한 새로운 신경망 구조가 핵심입니다." - 페이페이 리 스탠포드 AI 연구소 소장

모델은 또한 추론 과정을 자연어로 설명하는 능력도 갖춰 교육 분야에서의 활용 가능성이 높다고 평가받는다.

## 한국 교육 시장에 미치는 영향

 ReasonGPT의 등장으로 국내 에듀테크 업계에 큰 변화가 예상된다. 특히 수학, 과학 교육 분야에서 개인 맞춤형 튜터링 서비스의 질적 향상이 가능해질 것으로 전망된다.

웅진씽크빅, 대교 등 국내 교육 기업들은 ReasonGPT 기술 도입을 적극 검토하고 있다. 한국의 치열한 입시 경쟁 환경에서 논리적 사고력을 기를 수 있는 AI 교사의 역할이 주목받고 있다.

서울대, KAIST 등 국내 주요 대학들도 ReasonGPT를 활용한 연구 협력에 관심을 보이고 있다. 특히 한국어 수학 문제 해결 능력 향상을 위한 공동 연구 프로젝트가 논의되고 있어, 향후 한국형 추론 AI 개발의 발판이 될 것으로 기대된다.`},{id:"20260508180004",title:"EU AI 법안 시행 6개월, 한국 기업들 대응 전략 점검 시급",summary:"유럽연합의 AI 법안 시행 6개월을 맞아 한국 기업들의 대응 현황이 엇갈리고 있습니다. 삼성, LG 등 대기업은 적극 대응하고 있으나, 중소 AI 기업들은 여전히 준비 부족으로 유럽 시장 진출에 어려움을 겪고 있습니다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-08T18:00:15+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!1,content:`## EU AI 법안 시행 6개월 현황

EU AI 법안이 시행된 지 6개월이 지난 가운데, 고위험 AI 시스템에 대한 규제가 본격화되고 있다. 현재까지 1,247개 AI 시스템이 규제 대상으로 분류됐으며, 이 중 23%가 아시아 기업의 제품인 것으로 조사됐다.

특히 얼굴 인식, 자율주행, 의료진단 AI 분야에서 엄격한 인증 절차가 요구되고 있어, 해당 기술을 보유한 한국 기업들의 대응이 주목받고 있다. EU는 법안 위반 시 글로벌 연매출의 최대 7%에 달하는 과징금을 부과할 수 있다고 명시했다.

> "AI 법안 준수는 선택이 아닌 필수입니다. 유럽 시장에서의 지속 가능한 성장을 위해서는 규제 대응이 경쟁력의 핵심 요소가 되었습니다." - 마르그레테 베스타게르 EU 경쟁 담당 부집행위원장

## 한국 기업들의 명암

삼성전자와 LG전자는 EU AI 법안 시행 이전부터 전담 조직을 구성해 대응해왔다. 삼성은 유럽 현지에 AI 윤리 연구센터를 설립했고, LG는 AI 투명성 보고서를 분기별로 발행하며 적극적인 컴플라이언스 체계를 구축했다.

반면 중소 AI 스타트업들은 여전히 준비가 미흡한 상황이다. 한국AI산업협회 조사에 따르면, 국내 AI 스타트업 중 68%가 EU 규제 대응 계획을 수립하지 못한 것으로 나타났다. 특히 규제 대응 비용 부담과 전문 인력 부족이 주요 걸림돌로 지적되고 있다.

정부는 'K-AI 글로벌 진출 지원센터'를 통해 중소기업들의 EU 규제 대응을 지원하고 있으며, 법무법인과 협력해 무료 컨설팅 서비스도 제공하고 있다. 과기정통부는 올해 관련 예산을 150억 원으로 확대해 기업들의 해외 진출을 뒷받침할 계획이다.`},{id:"20260508180005",title:"마이크로소프트-오픈AI 파트너십 재정의...GPT 독점권 포기",summary:"마이크로소프트가 오픈AI와의 독점 파트너십을 부분적으로 완화하기로 했다고 발표했습니다. GPT 모델의 독점 라이선스를 포기하는 대신 AI 인프라 분야에서의 협력을 강화하는 새로운 전략으로 전환합니다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-08T18:00:15+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## 파트너십 구조 재편의 배경

마이크로소프트와 오픈AI는 5월 7일 공동 발표를 통해 기존 독점 계약을 재구성한다고 밝혔다. 가장 큰 변화는 마이크로소프트가 GPT 시리즈에 대한 독점 상용화 권리를 포기하는 것이다. 대신 Azure 클라우드 인프라를 통한 AI 모델 서빙과 기업용 솔루션 개발에 집중하기로 했다.

이번 결정은 전 세계적인 독점 규제 압박과 오픈AI의 독립성 확보 요구가 맞물린 결과로 분석된다. 특히 EU와 미국 FTC의 빅테크 견제 정책이 강화되면서 양사가 선제적 대응에 나선 것으로 보인다.

> "우리의 파트너십은 독점에서 협력으로 진화하고 있습니다. 이는 AI 생태계 전체의 건전한 발전을 위한 선택입니다." - 사티아 나델라 마이크로소프트 CEO

새로운 계약 하에서 오픈AI는 다른 클라우드 제공업체와도 파트너십을 맺을 수 있게 되며, 마이크로소프트는 Azure AI 서비스의 차별화에 더욱 집중할 예정이다.

## 한국 클라우드 시장 전망

이번 파트너십 재편으로 네이버클라우드플랫폼, KT클라우드 등 국내 클라우드 사업자들에게 새로운 기회가 열릴 것으로 전망된다. 오픈AI가 아시아 시장 확장을 위해 현지 클라우드 파트너를 물색하고 있어, 한국 기업들의 관심이 집중되고 있다.

특히 네이버는 자사의 하이퍼클로바X와 오픈AI 모델을 함께 제공하는 하이브리드 AI 서비스 구축을 검토 중인 것으로 알려졌다. 이는 국내 기업들이 글로벌 AI 모델에 더 쉽게 접근할 수 있는 환경을 조성할 것으로 기대된다.

한국 AI 스타트업들도 이번 변화를 긍정적으로 평가하고 있다. 기존에는 마이크로소프트를 통해서만 GPT 모델을 활용할 수 있었지만, 이제 더 다양한 채널과 조건으로 접근이 가능해져 혁신적인 서비스 개발이 촉진될 것으로 예상된다.`},{id:"202605060843001",title:"구글 딥마인드 서울 AI캠퍼스 연내 가동...KAIST·서울대 알파폴드 직접 활용",summary:"구글 딥마인드가 영국 본사 외 세계 최초의 해외 AI 캠퍼스를 서울 강남구 구글코리아 사옥 1,980㎡ 공간에 연내 가동한다. 4월 27일 이재명 대통령과 데미스 허사비스 CEO 공동 발표 이후 5월 들어 운영 일정이 확정됐다. 1차 파트너는 서울대(SNU)·KAIST·과기정통부 산하 AI 바이오 혁신허브 3곳이며, 최소 10명의 구글 연구원이 한국에 상주한다. 알파폴드·알파미사이클 등 AI for Science 시리즈 전체에 한국 연구진이 직접 접근한다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-06T08:43:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",breaking:!0,content:`## 영국 본사 밖 첫 진출, 한국이 선택받은 이유

구글 딥마인드(Google DeepMind)가 영국 런던 본사 외 **세계 최초의 해외 AI 캠퍼스를 서울에 설립**한다. 4월 27일 이재명 대통령과 데미스 허사비스(Demis Hassabis) CEO가 공동 발표한 이 결정은 5월 6일 현재 ==**연내 정식 가동 일정**==이 확정되며 본격 실행 단계에 진입했다.

캠퍼스는 서울 ==**강남구 구글코리아 사옥 내 1,980㎡**== 공간에 들어선다. 1차 협력 파트너는 ==**서울대학교(SNU)·한국과학기술원(KAIST)**==과 과학기술정보통신부 산하 ==**AI 바이오 혁신허브 3개 센터**==다. 최소 ==**10명의 구글 딥마인드 연구원**==이 한국에 상주하며, 알파폴드(AlphaFold)·알파지오메트리·알파미사이클 등 **AI for Science 시리즈 전체에 한국 연구진이 직접 접근**할 수 있게 된다.

📌 **결정의 무게**: 구글이 영국 외 처음으로 AI 캠퍼스를 만든다는 사실이 갖는 의미는 단순한 사무실 확장이 아니다. ==한국의 반도체 인프라(HBM)·바둑이 만들어낸 강화학습 유산·우수 연구 인력==이 글로벌 AI 패권 경쟁의 ==핵심 전략 자산==으로 인정받았다는 신호다.

---

## 4대 연구 분야: 생명과학·기상·기후·약물 발견

MOU에 명시된 협업 분야는 다음과 같다.

1. **생명과학**: 단백질 구조·질병 메커니즘·신약 후보 분자 스크리닝
2. **기상·기후 모델링**: 한반도 미세 기상·동아시아 태풍 경로·해양 변동성
3. **AI 인재 양성**: 연 200명 규모 KAIST·SNU 박사·박사후 과정 공동 지도
4. **책임 있는 AI(Responsible AI)**: AI 안전성·편향성·검증 표준 공동 연구

> "한국은 **AGI(범용 인공지능) 도달까지 5년 이내**가 가능한 매우 드문 국가 중 하나다. 반도체 제조 인프라, 바둑·이세돌이라는 강화학습 영감, 세계 최고 수준의 STEM 교육이 모두 한 곳에 있다."
> — Demis Hassabis, Google DeepMind CEO(서울 발표 직후 인터뷰)

특히 ==신약 개발==에서는 4월 14일 발표된 **노보 노디스크-OpenAI 파트너십**과 정면 경쟁 구도가 만들어진다. 구글은 알파폴드 3.0과 자체 BioReasoner 결합으로 ==신약 후보 분자 스크리닝 시간을 OpenAI 대비 추가 25% 단축==할 수 있다고 주장한다.

---

## 한국에 미치는 영향

### 1. K-바이오·메디컬 AI 생태계 격상

==**삼성바이오로직스·셀트리온·SK바이오사이언스·한미약품·유한양행**==이 직접 수혜 대상이다. 알파폴드 3.0과 AlphaMissense를 활용한 신약 후보 발굴은 기존 ==24개월에서 12개월 이하==로 단축이 가능하다. ==**루닛·뷰노·딥노이드·에이아이메디컬**== 등 의료 AI 스타트업도 캠퍼스 산학 프로그램에 참여하면서 글로벌 라이선싱 협상력이 한 단계 올라간다.

### 2. KAIST·서울대 박사 인재 시장 변동

연 200명 규모 공동 지도 프로그램은 ==한국 박사급 AI 인재의 글로벌 이탈을 일정 부분 완화==한다. 그동안 한국 박사 졸업생의 ==약 35%가 미국·영국 빅테크로 직접 이동==했지만, 캠퍼스를 통한 한국 잔류·원격 협업 모델이 새로운 선택지로 제시된다. ==**연봉 협상력은 평균 30~50% 상승**==이 기대된다.

### 3. 반도체 산업과의 직접 연계

구글의 ==**TPU(Tensor Processing Unit)** 차세대 모델 학습에 한국 HBM 공급사가 직접 결합==한다. ==**삼성전자·SK하이닉스**==는 캠퍼스 입주 동시에 TPU v8·v9 세대 HBM4E 공급 협상이 가속화된다. 한국이 메모리뿐 아니라 AI 모델 개발 그 자체에 참여하는 ==첫 본격 사례==다.

---

## 풀어야 할 5가지 과제

캠퍼스 개소가 곧 성공을 의미하지는 않는다. 다음 5가지가 향후 12개월 핵심 과제다.

1. **데이터 주권**: 한국 환자·기상 데이터를 구글 모델이 학습할 때 ==개인정보보호법·생명윤리법 충돌==이 발생하지 않도록 명확한 가이드라인 필요.
2. **국내 AI 모델과의 형평성**: ==**HyperCLOVA X·EXAONE·A.X K1**==을 키우는 정부의 자국 모델 우선 정책과 외국 자본 투자가 충돌하지 않도록 정책 설계 필요.
3. **인재 유출 vs 정착의 균형**: 캠퍼스가 ==한국 박사 인력을 글로벌로 이동시키는 통로==가 될 위험을 예방.
4. **지식재산권 분배**: 공동 연구로 만들어진 특허·논문의 한국 측 지분이 ==공정하게 보장==되는 계약 설계.
5. **AI 안전성 연구의 글로벌 표준화**: 캠퍼스가 ==AI 안전성·검증의 한국 기준==을 세우는 거점이 될 수 있도록 정부의 적극 지원.

⚡ **장기 의미**: 구글 딥마인드 서울 캠퍼스는 단순한 R&D 허브가 아니라 ==한국이 AI 모델 소비자에서 AI 모델 공동 개발자로== 격상되는 ==첫 공식 사다리==다. 이 5년이 ==한국의 AI 기술 자립도와 글로벌 경쟁력을 결정==한다. 한국 정부와 기업이 캠퍼스를 ==단순 외자 유치==로 보지 않고 ==공동 R&D 플랫폼==으로 적극 활용해야 하는 이유다.

---

## 글로벌 빅테크 진영의 잇따른 한국 직접 투자

구글 딥마인드 캠퍼스는 ==글로벌 빅테크의 한국 직접 투자 트렌드==의 정점이다. 최근 6개월 간 발표된 한국 투자 사례는 다음과 같다.

- **마이크로소프트**: ==**부산 데이터센터 22억 달러**== 투자 발표(3월). Azure 한국 리전 동시 확장.
- **아마존 AWS**: ==**서울·부산·인천 3개 AZ 추가**==. AI 전용 GPU 클러스터 별도 구축.
- **엔비디아**: ==**삼성·SK와 HBM4E 공동 개발 센터**== 판교 신설(4월).
- **메타**: ==한국어 LLaMA 3 자체 미세조정 R&D 허브== 검토.

이 흐름은 ==**한국이 글로벌 AI 인프라의 동아시아 전초기지**==로 자리잡고 있음을 보여준다. 단일 캠퍼스가 아닌 ==빅테크 5사 모두의 동시 진출==이라는 ==구조적 변화==다.`},{id:"202605060843002",title:"Anthropic 매출 30B 폭증 + 구글·브로드컴 3.5GW TPU 확정...HBM 공급망 재편",summary:"5월 6일 공개된 자료에 따르면 Anthropic Claude 연 매출 런레이트가 300억 달러(약 41조 원)로 6개월 만에 3.3배 폭증했다. 1,000개 이상 기업 고객이 연 100만 달러 이상을 지출 중이다. 4월 6일 발표된 구글·브로드컴과의 3.5GW(기가와트) 차세대 TPU 도입 계약은 2027년부터 미국 본토 데이터센터에서 가동되며, 이미 진행 중인 1GW Google Cloud 계약과 별개다. 삼성·SK하이닉스 HBM·국내 변압기·냉각 기자재 기업의 동시 호황 구간이 시작됐다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-06T08:43:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",breaking:!0,content:`## 6개월 만에 3.3배 매출 폭증, AI 산업 단일 최고 성장

5월 6일 공개된 Anthropic 내부 공시 자료에 따르면, Claude 시리즈의 ==**연 매출 런레이트(annual revenue run rate)가 300억 달러**==(약 41조 원)에 도달했다. 2025년 말 약 ==**90억 달러**==였던 점을 감안하면 ==6개월 만에 3.3배 폭증==이다. ==**1,000개 이상의 기업 고객**==이 ==연 100만 달러 이상==을 Claude에 지출하고 있다.

이 성장은 펜타곤 명단 배제(5월 1일)와 무관하게 ==민간·금융·헬스케어 영역==에서 만들어졌다. 골드만삭스·블랙스톤과의 1.5B 합작 법인, 노보 노디스크-OpenAI 충돌에서 보듯 ==Anthropic은 정부 시장 손실을 민간 시장으로 두 배 이상 보전==하는 중이다.

📌 **수치의 의미**: AI 모델 회사 단일 기준 ==사상 최대 성장률==이다. OpenAI(연 매출 약 130억 달러)·Google AI(50억 달러 추정)·Meta AI(20억 달러 추정)을 모두 압도하는 속도다.

---

## 3.5GW TPU 확보: 2027년부터 가동되는 메가 컴퓨트

성장 폭증의 배경에는 ==**Google·Broadcom과 체결한 3.5GW(기가와트) 차세대 TPU 도입 계약**==이 있다. 구체 사양은 다음과 같다.

1. **공식 발표 시점**: 2026년 4월 6일(브로드컴 SEC 공시)
2. **총 용량**: ==**3.5GW**==(원자력 발전소 약 3.5기 분량)
3. **공급 시작**: 2027년부터 단계적
4. **위치**: ==대부분 미국 본토 데이터센터==
5. **별도 계약**: 2026년 가동 중인 ==**1GW Google Cloud 계약과 별개**==

> "지난 6개월간 Claude 사용량은 우리도 예측 못 한 속도로 폭증했다. ==**고객 수요가 우리의 GPU·TPU 공급량을 항상 추월**==하고 있다. 3.5GW는 단지 시작점일 뿐이다."
> — Daniela Amodei, Anthropic President(블룸버그 인터뷰)

3.5GW 인프라는 ==**Claude Opus 5·Sonnet 5 등 차세대 프론티어 모델 학습**==과 추론에 동시 투입된다. 추가로 OpenAI(MS Azure 5GW), Google(자체 8GW), xAI(Colossus 2GW)와의 ==컴퓨트 군비 경쟁==이 본격화됐다.

---

## 한국에 미치는 영향

### 1. HBM 슈퍼사이클의 두 번째 폭발

==**삼성전자·SK하이닉스**==가 직접 수혜자다. TPU v7·v8 세대는 ==스택당 HBM4·HBM4E를 8~16개씩 사용==하므로 3.5GW 인프라 한 개당 ==**HBM 약 280만 개 분량**==이 필요하다. SK하이닉스는 ==Google TPU 진영의 메인 HBM 공급자==로 이미 자리잡았고, ==**2027~2028 매출 추가 +35% 상승**==이 시장 컨센서스로 굳어가는 중이다.

### 2. 전력·냉각 기자재 기업 동반 호황

==**효성중공업·LS일렉트릭·HD현대일렉트릭**==(전력 변압기), ==**일진전기·대한전선**==(초고압 케이블), ==**유니셈·GST**==(반도체 냉각 칠러)가 직접 수혜다. 데이터센터 1GW당 ==변압기 약 800대·초고압 케이블 200km==가 필요하다. 한국은 글로벌 ==초고압 변압기 수출 1위==로, 향후 5년간 ==연 평균 +18% 매출 성장==이 기대된다.

### 3. 한국 AI 스타트업 종속도 증가

반대 측면도 있다. ==**업스테이지·마음AI·코난테크놀로지·뤼튼테크놀로지스**== 등 한국 AI 스타트업의 ==Claude API 의존도가 60% 이상==으로 추정된다. 글로벌 컴퓨트 가격이 ==하락 추세에 들어가면 한국 스타트업의 마진은 개선==되지만, ==기술 종속 심화==라는 부작용도 동반된다.

---

## 향후 12개월 5대 변수

이 메가 컴퓨트 계약은 단순한 인프라 확장 이상의 의미를 갖는다.

1. **TPU vs GPU 점유율 변화**: Anthropic의 TPU 채택은 엔비디아 GPU 시장에 ==**연 15~20% 잠식 가능성**==을 의미한다. 엔비디아는 Rubin Ultra 가격 인하로 대응할 가능성.
2. **OpenAI의 Stargate 진행 속도**: OpenAI-MS-Oracle ==**5GW Stargate 프로젝트**==가 같은 일정에 가동되면 글로벌 데이터센터 전력 수요가 ==2027년 +60% 폭증==한다.
3. **한국 데이터센터 신증설 압박**: 글로벌 컴퓨트 부족이 한국으로 ==이전될 수밖에 없는 워크로드(저지연 추론·국내 데이터)== 가속화. 네이버 각·카카오 안산 데이터센터 증설 속도가 시험대.
4. **전력 가격 변동**: ==한국전력의 산업용 전기 요금 인상==이 데이터센터 산업 경쟁력에 영향. 정부의 ==원전·재생에너지 믹스 정책==이 결정 변수.
5. **샘플 인증 경쟁**: ==**SK하이닉스·삼성전자·마이크론 중 누가 먼저 TPU v8 인증**==을 통과하느냐가 3.5GW 초도 물량 60%를 가져간다.

⚡ **장기 의미**: Anthropic의 ==30B 매출 + 3.5GW 컴퓨트==는 ==AI 산업이 '소프트웨어 회사'가 아니라 '에너지 산업'==으로 변모하고 있다는 가장 명확한 신호다. 한국은 ==HBM 메모리·전력 기자재==에서 글로벌 1위 공급망을 갖췄지만, ==자체 AI 모델 보유 및 활용 측면==에서는 여전히 미국 빅3에 의존한다. 향후 5년 한국 정부의 ==전력 인프라 투자와 자국 AI 모델 육성 정책==이 ==한국 AI 산업의 운명==을 결정한다.

---

## 글로벌 컴퓨트 군비 경쟁 현황

3.5GW 발표 이후 빅테크 5사의 ==공식 컴퓨트 확보 총량==은 다음과 같다.

- **OpenAI**: Stargate 5GW + Azure 추가 3GW = ==**8GW**==
- **Anthropic**: Google·Broadcom 3.5GW + 기존 1GW + AWS 별도 = ==**약 5GW**==
- **Google**: 자체 TPU v7·v8 = ==**8GW 이상**==
- **Meta**: 자체 데이터센터 + AWS 임대 = ==**4GW**==
- **xAI**: Colossus + 신규 멤피스 데이터센터 = ==**2.5GW**==

==**총합 28GW 이상**==이 향후 24개월 안에 가동된다. 이는 ==**한국 전체 전력 소비의 약 22%**==에 해당하는 막대한 규모다. 한국이 ==이 글로벌 컴퓨트 폭증의 공급망에 어떤 위치를 점하느냐==가 향후 5년 산업 정책의 핵심 의제로 떠올랐다.`},{id:"202605060843003",title:"코엑스 'AI EXPO 2026' 정식 개막...피지컬 AI 350개사 600부스 사흘간 폭주",summary:"5월 6일 오전 9시 30분, 서울 코엑스 A홀 전관에서 제9회 'AI EXPO KOREA 2026'이 정식 개막했다. 350개사·600부스가 일제 가동되며 사흘간 5만 명 이상이 방문할 전망이다. 올해 핵심 키워드는 '피지컬 AI(Physical AI)'로, 디지털을 넘어 로봇·자율주행·스마트 디바이스·산업 자동화로 직접 진출하는 AI를 집중 조명한다. 네이버·카카오·LG·SKT·KT·삼성SDS의 자체 모델·에이전트 데모가 동시 무대에 오른다.",category:"이벤트",author:"Prompt Daily 편집팀",date:"2026-05-06T08:43:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`## 9회 차 'AI EXPO KOREA 2026' 정식 개막

5월 6일 오전 9시 30분, 서울 강남구 코엑스 A홀 전관에서 ==**제9회 'AI EXPO KOREA 2026'(국제인공지능산업대전)**==이 정식 개막했다. 한국인공지능협회(KORAIA)·서울메쎄·인공지능신문이 공동 주최하며, ==**350개사·600부스**==가 일제 가동된다. 사흘간 ==**5만 명 이상**== 방문이 예상되는 ==아시아 최대 단일 AI 행사==다.

올해의 키워드는 명확하다. ==**'피지컬 AI(Physical AI)'**==. AI가 디지털 화면을 떠나 ==로봇·자율주행·스마트 디바이스·산업 자동화 시스템==과 직접 결합하는 시대로의 전환을 보여준다. NVIDIA·테슬라·피규어 AI(Figure)·아질리티 로보틱스(Agility Robotics)가 주도해온 글로벌 트렌드를 한국 기업들이 어떻게 따라잡고 추월하는지가 사흘간의 진짜 시험대다.

📌 **올해 다른 점**: 작년까지 'AI 모델·LLM' 중심이었던 행사가 올해는 ==**로봇·자율주행·산업 자동화 부스가 전체의 45%**==를 차지한다. 단순한 시연이 아닌 ==실제 양산형 제품 베이스==가 다수다.

---

## 한국 빅테크 6사 핵심 전시 라인업

개막 첫날 무대를 장식하는 한국 기업의 핵심 데모는 다음과 같다.

1. **네이버**: ==**HyperCLOVA X SEED Think (32B 추론 특화 오픈웨이트)**== 실시간 데모. AA Intelligence Index 44점 달성으로 한국 모델 최고 성능.
2. **카카오**: ==자체 멀티모달 모델 Kanana 시리즈==와 카카오톡 챗봇·이미지 생성·음성 어시스턴트 통합 데모.
3. **LG**: ==**EXAONE 4.0 + EXAONE Bio**== 의료 AI 모델. 셀트리온·한미약품과의 신약 후보 분자 발굴 케이스 스터디 공개.
4. **SKT**: ==A.X K1 + Pinpoint Dispatch== 통신 인프라 운영 자동화. AI 콜센터 ==평균 응대시간 47% 단축== 사례 발표.
5. **KT**: ==Mi:dm 2.0 + 에너지 그리드 AI==. 한전 협업 ==전국 변전소 부하 예측 정확도 92%== 실증.
6. **삼성SDS**: ==Brity Copilot Enterprise== + 사내 5만 명 통합 운영 6개월 결과. 사내 코드·문서·재무 자동화 시연.

> "올해 EXPO는 ==**'AI가 화면 밖으로 나오는 해'**==다. 로봇이 부스를 돌아다니고, 자율주행 트럭이 코엑스 광장에 전시되며, 스마트팩토리 셀이 실시간 가동된다. 단순한 데모가 아니라 ==한국 산업의 6개월~1년 후 모습==이다."
> — 김현수, 한국인공지능협회 사무총장(개막사 발췌)

---

## 한국에 미치는 영향

### 1. 피지컬 AI 스타트업 동시 부상

==**레인보우로보틱스·로보티즈·HD현대로보틱스·뉴빌리티·에이로봇**== 등 한국 로봇 스타트업이 부스 한가운데를 차지한다. 해외 발주처(특히 일본·동남아 제조업) 직접 미팅이 ==사흘간 1,200건 이상== 예약돼 있고, 평균 한 부스당 5~10건의 ==**즉석 PoC(파일럿) 계약**==이 체결될 것으로 예상된다. 작년(평균 2~3건) 대비 ==두 배 이상 증가==.

### 2. 정부·지자체 발주 시그널

==**과학기술정보통신부·산업통상자원부·국방과학연구소·서울시·경기도**==가 동시에 부스를 운영한다. 특히 ==**국방 AI 자율 시스템·재난 대응 로봇·노인 돌봄 로봇**== 부문에서 향후 1년 ==약 8,500억 원 규모 정부 발주==가 예고됐다. 한국 AI·로봇 스타트업 입장에서는 ==연중 가장 큰 수주 기회==다.

### 3. 글로벌 바이어와의 직접 미팅

==**일본 소프트뱅크·NTT·도요타·미쓰비시중공업·중국 BYD·인도 인포시스·미국 테슬라 협력사·독일 지멘스**==가 공식 바이어로 등록됐다. 일본 발주처만 ==약 200곳, 동남아 150곳==이 방한 중이다. 한국 AI·로봇 기업의 ==연간 수출 계약 30~40%가 사흘간 결정==된다.

---

## 사흘간 핵심 관전 포인트 5가지

EXPO를 ==투자·전략 관점==에서 어떻게 봐야 할지 다음 5가지가 결정적이다.

1. **휴머노이드 로봇 양산 일정**: ==레인보우로보틱스·HD현대로보틱스의 양산형 휴머노이드== 공개 여부. 양산 일정이 1년 이내면 코스닥 시총 5조 원 이상.
2. **국산 LLM 성능 비교**: ==**HyperCLOVA X·EXAONE·A.X·Mi:dm·Kanana**== 5개 모델의 동일 벤치마크 공개. 정부 자금 5,300억 원의 향배가 결정된다.
3. **글로벌 발주 계약 공시**: 부스 사흘간 체결되는 ==MOU·LOI·정식 계약 규모==. 작년 6,200억 원 → 올해 1조 원 돌파 예상.
4. **AI 칩 신생 기업**: ==**리벨리온·사피온·텔레칩스**==의 차세대 NPU 발표. 엔비디아 H200 대비 가성비 비교가 핵심.
5. **AGI 토론 패널**: 5월 7일 메인 컨퍼런스에서 ==구글 딥마인드·LG AI연구원·KAIST·서울대== 패널의 'AGI 5년 가능성' 논쟁.

⚡ **장기 의미**: AI EXPO KOREA 2026은 단순 전시회가 아니라 ==**한국 AI·로봇 산업의 1년 명세서**==다. 어떤 기업이 양산을 시작했고, 어떤 기업이 글로벌 발주를 받았으며, 어떤 정부 자금이 어디로 흐르는지가 사흘 안에 모두 공개된다. 다음 12개월 한국 AI 산업의 ==성장 곡선==이 코엑스 A홀에서 결정된다.

---

## 작년 대비 부스 구성 5대 변화

올해 EXPO를 작년과 비교했을 때 가장 큰 차이는 다음 5가지다.

- **부스 구성**: ==LLM·생성형 AI 35% → 25%==, ==피지컬 AI·로봇 20% → 45%==
- **참가 외국 기업**: ==45개사 → 78개사==(73% 증가)
- **B2B 미팅 사전 예약**: ==620건 → 1,200건==(94% 증가)
- **정부·지자체 부스**: ==9곳 → 17곳==(89% 증가)
- **AI 칩·NPU 신생기업**: ==4개사 → 11개사==(175% 증가)

이 변화는 ==**한국 AI 산업이 '소프트웨어 중심'에서 '하드웨어·산업·로봇 중심'으로 무게 중심을 이동**==하고 있음을 보여준다. 작년까지 'AI 모델 컴페티션 무대'였던 EXPO가 올해는 ==**'산업 AI·피지컬 AI 발주 박람회'**==로 변모한 셈이다.`},{id:"202605060843004",title:"中 오픈웨이트 6종 12일 동시 폭발...DeepSeek V4·Kimi K2.6, GPT-5·Claude 추월",summary:"4월 18~30일 12일간 중국 6개 연구소가 오픈웨이트 코딩·추론 LLM을 동시 출시했다. Kimi K2.6은 SWE-Bench Pro 58.6%로 GPT-5.4(xhigh)를 추월한 첫 오픈웨이트 모델이며, GLM-5.1은 754B MoE를 MIT 라이선스로 공개해 Claude Opus 4.6을 일부 코딩 벤치마크에서 앞섰다. DeepSeek V4-Flash 추론 비용은 100만 토큰 $0.28로 미국 프론티어 대비 15~30배 저렴하다. 한국 AI 스타트업·자국 모델 정책에 직접 충격이 시작됐다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-06T08:43:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## 12일 안에 6종, '중국 오픈소스 폭발기' 시작

지난 4월 18~30일, ==중국 6개 AI 연구소==가 ==**오픈웨이트(open-weight) 코딩·추론 LLM 6종**==을 동시에 출시했다. 시간 순서대로 정리하면 다음과 같다.

1. **Z.ai GLM-5.1** (4월 19일): ==**754B 파라미터 MoE 구조, MIT 라이선스**==. Claude Opus 4.6 일부 코딩 벤치마크 추월.
2. **Kimi K2.6** (Moonshot AI, 4월 20일): SWE-Bench Pro ==**58.6% 달성**==. GPT-5.4(xhigh) 추월한 ==**첫 오픈웨이트 모델**==.
3. **MiniMax-M2.7** (4월 22일): AA Intelligence Index ==42점==, Claude Opus 4.6과 동급.
4. **DeepSeek V4** (4월 24일): ==**V4-Pro 출력 100만 토큰 $3.48 / V4-Flash $0.28**==. 화웨이 Ascend 칩과 깊은 통합.
5. **Qwen 3.6** (Alibaba, 4월 28일): 1M 컨텍스트, 멀티모달 Vision-Language 통합.
6. **Step 3.5 Flash** (StepFun, 4월 30일): 초저지연 추론, 로컬 GPU 최적화.

📌 **핵심 사실**: 이 6개 모델 모두 동급 미국 프론티어 모델 대비 ==**5~25배 저렴한 추론 비용**==을 제시한다. ==오픈웨이트 시장의 점유율은 이미 30%==를 넘었다.

---

## 가격·성능 충격: '15~30배 저렴' 무엇을 의미하나

DeepSeek V4-Flash 100만 토큰 ==**$0.28**==과 GPT-5 Turbo의 ==**$10**== 사이의 격차는 단순 가격이 아니다.

- **인프라 효율**: 화웨이 Ascend 910C·Hygon DCU가 NVIDIA H100 대비 ==약 60% 가격에 70% 성능==.
- **모델 아키텍처**: ==**MoE(Mixture of Experts)**==와 ==**FP4 양자화**==로 추론 효율 4배 향상.
- **국가 보조금**: 중국 정부가 데이터센터 전기료 ==최대 70% 할인== + 클러스터 직접 제공.
- **학습 데이터 비용**: ==중국어·영어 혼합 학습 + 자체 합성 데이터 무제한 활용==.

> "중국 오픈웨이트의 진짜 충격은 가격이 아니라 ==**반복 가능한 분산 혁신**==이다. 6개 연구소가 12일 안에 각기 다른 접근법으로 같은 수준에 도달했다. ==미국 빅3가 1년에 한 번 출시==할 때, 중국 오픈웨이트는 ==**한 달에 1~2개**== 출시한다."
> — Sebastien Bubeck, Microsoft Research(외신 인터뷰)

이 격차는 단순 비용 절감이 아니라 ==**글로벌 AI 시장의 가격 기준선 자체를 바꾸는 충격**==이다. OpenAI·Anthropic이 작년 12월 이래 ==추론 가격을 평균 40% 인하==한 배경이 바로 이 중국 오픈웨이트 압박이다.

---

## 한국에 미치는 영향

### 1. 한국 AI 스타트업의 '비용 절감 압박'

==**업스테이지·마음AI·뤼튼테크놀로지스·코난테크놀로지·올거나이즈**== 등 한국 AI 스타트업의 ==마진 구조==가 흔들린다. Claude·GPT API에 매월 ==수억~수십억 원==을 지출하는 회사가 ==DeepSeek·Kimi 오픈웨이트로 전환==하면 ==**비용 70~85% 절감**==이 가능하다. 그러나 이는 ==**중국 모델 의존도 증가**==라는 위험을 동반한다.

### 2. 자국 모델 정책의 명분 강화 vs 약화

==**HyperCLOVA X·EXAONE·A.X K1·Mi:dm**==의 정부 5,300억 원 지원이 더 절실해진 동시에, ==**중국 오픈웨이트가 충분히 좋다면 한국 자국 모델이 굳이 필요한가**==라는 회의론도 시작됐다. ==과학기술정보통신부==가 5월 중 자국 모델 정책 재검토에 착수할 예정이다.

### 3. 데이터·보안 우려 동반 폭증

==**금융감독원·개인정보보호위원회·국가정보원**==이 중국 오픈웨이트 사용에 대한 ==공공·금융 분야 가이드라인==을 5월 안에 마련한다. ==**KB국민은행·신한은행·하나은행·우리은행**==이 자체 ==모델 보안 검증 TF==를 출범시켰다. 사용량 폭증과 동시에 ==보안·규제 비용이 추가 발생==하는 구조다.

---

## 한국이 풀어야 할 5대 과제

중국 오픈웨이트 폭발은 한국 AI 산업에 ==**1년짜리 골든 윈도**==를 강제한다. 다음 5가지가 핵심이다.

1. **자국 모델 가격 경쟁력**: ==EXAONE·HyperCLOVA·A.X== 추론 가격이 ==DeepSeek 대비 3배 이내==로 들어가야 시장에서 살아남는다.
2. **오픈웨이트 vs 폐쇄형 노선 결정**: 한국 정부가 ==EXAONE을 오픈웨이트로 풀 것인지==가 향후 1년 핵심 정책 변수.
3. **NPU 생태계**: ==**리벨리온·사피온·텔레칩스**==의 자국 NPU가 화웨이 Ascend·NVIDIA에 모두 대응 가능해야 한다.
4. **데이터센터 비용**: 한국전력 산업용 전기료가 ==중국 보조금 70% 할인==을 따라가지 못하면 한국 데이터센터의 ==장기 경쟁력 상실==.
5. **글로벌 협력**: 일본·EU·미국 빅3와의 ==한미일·한EU 컨소시엄==으로 중국 오픈웨이트의 ==기술 안보 위험==을 분산.

⚡ **장기 의미**: 중국 오픈웨이트 6종은 단순한 모델 출시가 아니라 ==**AI 산업의 가격·속도·라이선스 기준 자체를 다시 쓰는 사건**==이다. 한국이 이 흐름을 ==**자국 모델 가격 인하 + 자국 NPU 성능 향상 + 안보 검증 강화**==로 동시 대응하지 못하면, 향후 5년 ==한국 AI 산업의 글로벌 점유율이 1.5%(현재) → 0.5%로 추락할 위험==이 있다. 시간은 ==최대 12개월==뿐이다.

---

## 미·중 AI 패권 경쟁의 새 국면

중국 오픈웨이트 6종은 ==미·중 AI 패권 경쟁==을 새로운 국면으로 진입시켰다. 작년까지 ==**'미국이 폐쇄형 프론티어, 중국이 추격하는 오픈웨이트'**== 구도였다면, 올해부터는 ==**'미국 폐쇄형 vs 중국 오픈웨이트'**== 양 진영이 ==동등한 주력 전선==으로 격상됐다.

- **미국 진영**: GPT-5.5·Claude Opus 5·Gemini 3 Pro (모두 폐쇄, 가격 프리미엄)
- **중국 진영**: DeepSeek V4·Kimi K2.6·GLM-5.1 (오픈웨이트, 가격 파괴)
- **유럽**: Mistral·Falcon (중간 노선, 정부 자금 지원)
- **한국·일본**: ==**자국 모델 + 미국 빅3 활용 듀얼 트랙**==

⚠️ **중요한 변수**: 한국·일본·EU가 ==미국 폐쇄형과 중국 오픈웨이트 사이에서 어느 쪽으로 더 기울어지느냐==에 따라 ==2027~2030년 글로벌 AI 시장의 권력 지형==이 결정된다. 한국 정부의 ==중장기 전략 수립==이 시급한 시점이다.`},{id:"202605060843005",title:"한국 자국 AI 모델 2차 평가 6월 종료...LG·SKT·업스테이지 3파전, 12월 결승",summary:"과기정통부 'Independent AI Foundation Model Project' 1차 평가에서 LG AI연구원·SK텔레콤·업스테이지가 통과했고 네이버·NC AI는 탈락했다. 6월 종료되는 2차 평가에 이어 12월 최종 결정이 내려진다. 5,300억 원 정부 자금과 향후 5년 공공·국방·금융 발주 우선권이 걸려 있다. 중국 오픈웨이트 폭발과 구글 딥마인드 서울 캠퍼스 설립이 평가 기준에도 직접 영향을 미친다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-06T08:43:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",breaking:!1,content:`## 1차 평가 통과 3사 확정: LG·SKT·업스테이지

과학기술정보통신부가 추진 중인 ==**'독립형 AI 파운데이션 모델 프로젝트(Independent AI Foundation Model Project)'**==의 1차 평가가 1월 종료된 후, 5월 6일 현재 ==2차 평가가 한 달 남은 시점==에 도달했다. 1차 통과 3사는 다음과 같다.

1. **LG AI연구원**: ==**EXAONE 4.0 (32B & 250B 동시 운용)**==. 의료·바이오·산업 자동화 특화.
2. **SK텔레콤**: ==**A.X K1 (한국어 특화 100B)**==. 통신 인프라·콜센터·B2B 자동화 우선.
3. **업스테이지**: ==**Solar Pro 2 (60B 효율형)**==. 사모펀드 합작 + 글로벌 시장 진출.

탈락한 곳은 ==**네이버 클라우드(HyperCLOVA X)**==와 ==**NC AI**==. 네이버는 사용자·전문가 평가에서는 강세를 보였지만 ==**'독창성(originality) 테스트'에서 비독립 사전학습 컴포넌트 의존도가 과다**==하다는 평가를 받았다.

📌 **충격 포인트**: 한국 AI 시장 점유율 1위인 네이버가 1차 탈락한 사실이 ==**원천 기술 자립도가 시장 점유율과 별개**==라는 정부 메시지로 읽힌다.

---

## 6월 2차 평가, 12월 최종 결승

### 평가 일정

- **1차**: 2025년 9월~2026년 1월 (5사 → 3사 압축)
- **2차**: 2026년 2~6월 ==**(현재 진행 중)**==. 한 달 남음.
- **최종**: 2026년 7~12월. 12월 최종 ==**1~2사 결정**==.

### 2차 평가 핵심 항목

1. **모델 독창성 점수**: 사전학습 데이터 자체 구축 비율, 아키텍처 혁신도.
2. **추론 비용 경쟁력**: ==DeepSeek V4 + GPT-5 Turbo 평균 대비 1.5배 이내==.
3. **국방·공공 보안 적합성**: ==IL3급(국방 비밀)== 환경에서의 운용 가능성.
4. **한국어 정확도**: HAERAE-Bench·KoBEST·KMMLU에서 90점 이상.
5. **에너지 효율**: 토큰 1M당 전력 소비량 글로벌 상위 25%.

> "이번 프로젝트는 단순한 R&D 자금이 아니다. ==**향후 5년간 한국 공공·국방·금융 시장의 자국 모델 우선권**==을 결정한다. 12월 최종 1~2사는 ==사실상 한국의 'AI 국가대표'==가 된다."
> — 류제명, 과기정통부 인공지능산업본부장(5월 5일 브리핑)

---

## 한국에 미치는 영향

### 1. 5년간 5,300억 원 정부 자금 + 발주 우선권

12월 최종 선정 1~2사는 ==**연 1,000억 원 규모 정부 R&D 자금**==과 함께 ==공공·국방·교육·의료 분야 정부 발주 우선권==을 확보한다. 5년 누적 ==**약 1조 원 규모 발주**==가 보장되며, 사실상 ==한국 자국 모델의 시장 지배력 결정==이 12월 한 달에 압축된다.

### 2. 빅3 클라우드 시장 재편

==**네이버 클라우드·KT 클라우드·NHN 클라우드**==의 자국 AI 호스팅 사업이 직접 영향을 받는다. 1차 탈락한 네이버는 ==**하반기 후속 모델(HyperCLOVA X SEED Think 후속)**==으로 즉시 추격하지만, 정부 발주의 첫 번째 사이클은 놓친다. KT·NHN은 ==**LG·SKT·업스테이지의 호스팅 파트너십**==을 두고 사활 경쟁을 벌이는 중.

### 3. 인재 시장 폭증

3사가 동시에 ==**자국 모델 R&D 인재 채용을 가속**==한다. ==**박사급 머신러닝 엔지니어 연봉이 2024년 대비 평균 +45%**== 상승했고, ==**삼성·네이버·카카오·LG·SKT 사이 이직 빈도가 사상 최고치**==를 기록 중. KAIST·서울대·POSTECH 졸업생은 ==졸업 전 평균 5건 이상의 오퍼==를 받는다.

---

## 평가 기준에 영향을 미치는 외부 변수 5가지

12월 최종 결정에 영향을 미치는 외부 변수는 다음과 같다.

1. **중국 오픈웨이트 충격**: DeepSeek V4·Kimi K2.6의 가격 충격이 ==한국 자국 모델의 '가격 경쟁력' 평가 기준==을 강화한다.
2. **구글 딥마인드 서울 캠퍼스**: 캠퍼스가 한국 자국 모델 협력 파트너로 들어오면 ==**원천 기술 자립도 평가 기준에 동요**==가 발생한다.
3. **펜타곤 8사 명단**: 한미 동맹 차원에서 한국이 ==미국 IL6·IL7 인증 모델을 어떻게 활용==할지가 자국 모델 정책의 ==명분==과 ==예외 영역==을 결정한다.
4. **EU AI Act 본격 시행**: EU가 한국 모델에 ==고위험 AI(High-risk AI)== 인증을 요구하면 한국 자국 모델의 ==유럽 수출 가능성==이 결정된다.
5. **삼성·SK 자체 AI 모델 등장**: 양사가 ==**자체 LLM·VLM 출시**==를 검토 중이며, 6월~9월 중 출시되면 평가에 추가 후보로 진입할 가능성.

⚡ **장기 의미**: 한국 자국 AI 모델 평가 프로젝트는 ==**'한국이 AI 시대에 자력 생존할 수 있는가'**==를 묻는 5,300억 원 짜리 ==실험==이다. 12월 최종 결정은 ==**한국 화이트칼라 노동자 1,500만 명, 기업 30만 곳, 공공기관 8천 곳의 향후 10년 운영 환경**==을 결정한다. 단순한 R&D 정책이 아니라 ==**한국의 AI 시대 국가 운영 체계 그 자체**==를 정의하는 사건이다.

---

## 평가 결과가 한국 AI 산업에 미치는 5대 시나리오

12월 최종 결과에 따라 한국 AI 산업의 미래는 다섯 가지 시나리오로 갈린다.

- **시나리오 A (LG 단독 선정)**: ==EXAONE이 사실상 '한국 AI 국가대표'==. 의료·바이오·산업 AI 글로벌 진출 가속.
- **시나리오 B (SKT 단독 선정)**: 통신 인프라 + AI 융합. ==B2B·콜센터·정부 자동화 우선==.
- **시나리오 C (LG + SKT 공동)**: 가장 ==균형 잡힌 결과==. 정부 자금 분산 + 시장 경쟁.
- **시나리오 D (업스테이지 단독)**: ==스타트업 모델의 정부 채택==. 글로벌 시장 진출이 핵심 경쟁력.
- **시나리오 E (재공모)**: 12월 어느 후보도 기준 통과 못 하면 ==2027년 전면 재공모==. 한국 자국 모델 정책 1년 지연.

✅ **확실한 것**: 어느 시나리오든 ==**중국 오픈웨이트와 미국 빅3에 대한 기술 종속 우려**==는 줄어들지 않는다. 정부의 ==자국 모델 정책==과 ==**글로벌 활용 정책의 균형**==이 평가 결과 못지않게 중요하다.`},{id:"20260505180001",title:"삼성, 차세대 갤럭시 AI 'Gemini Nano' 탑재 확정…온디바이스 성능↑",summary:"삼성전자가 갤럭시 S27 시리즈에 구글의 최신 온디바이스 AI 모델인 Gemini Nano를 탑재하기로 결정했다. 이전 세대보다 향상된 성능과 전력 효율을 제공하며, 개인 정보 보호 강화에도 기여할 것으로 예상된다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-05T18:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!1,content:`## 삼성, 갤럭시 AI 업그레이드…Gemini Nano 탑재 결정

삼성전자는 5월 5일, 차세대 갤럭시 스마트폰에 구글의 Gemini Nano를 탑재한다고 공식 발표했다. Gemini Nano는 이전 모델 대비 2배 이상의 성능 향상을 제공하며, 특히 이미지 처리 및 자연어 처리 분야에서 뛰어난 성능을 보여준다. 이는 갤럭시 S27 시리즈를 통해 본격적으로 경험할 수 있을 것으로 보인다.

> "Gemini Nano는 사용자의 데이터를 기기 내에서 안전하게 처리하여 개인 정보 보호를 강화하고, 더욱 빠르고 효율적인 AI 경험을 제공할 것입니다." - 삼성전자 관계자

## 한국 시장 전망

한국은 스마트폰 보급률이 높고 AI 기술에 대한 관심이 뜨거운 시장이다. Gemini Nano 탑재 갤럭시 S27 시리즈는 이러한 시장 트렌드에 부합하며, 경쟁사 대비 차별화된 AI 경험을 제공하여 시장 점유율 확대에 기여할 것으로 예상된다. 시장조사기관 Counterpoint Research에 따르면, 2026년 한국 스마트폰 시장에서 AI 기능이 탑재된 프리미엄 스마트폰의 비중은 65%까지 증가할 것으로 전망된다.`},{id:"20260505180002",title:"카카오, '케이드' 모델 공개…한국어 LLM 경쟁 본격화",summary:"카카오가 자체 개발한 초거대 언어 모델 '케이드(KAIED)'를 공개하며 한국어 LLM 경쟁에 뛰어들었다. 케이드는 한국어 데이터에 특화되어 있으며, 다양한 산업 분야에 적용될 수 있도록 설계되었다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-05T18:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!0,content:`## 카카오, 한국어 LLM '케이드' 공개…AI 주도권 확보 나선다

카카오브레인은 5월 5일, 자체 개발한 초거대 언어 모델 '케이드(KAIED)'를 공개했다. 케이드는 1조 7천억 개의 파라미터를 가진 모델로, 한국어 데이터에 대한 이해도가 매우 높다. 카카오는 케이드를 활용하여 번역, 요약, 챗봇 등 다양한 AI 서비스를 개발하고, 기업 고객에게도 API 형태로 제공할 계획이다.

> "케이드 모델은 한국어 데이터의 특성을 반영하여 개발되었으며, 한국어 기반 AI 서비스의 성능을 획기적으로 향상시킬 수 있을 것입니다." - 카카오브레인 연구팀

## 한국 시장 전망

네이버의 '하이퍼클로바X', LG AI의 '엑사원' 등 한국어 LLM 경쟁이 치열해지는 가운데, 카카오의 케이드 모델 공개는 시장 경쟁을 더욱 가속화할 것으로 예상된다. 특히 카카오의 강력한 플랫폼 영향력을 고려할 때, 케이드 모델은 한국 AI 시장에서 중요한 역할을 수행할 것으로 전망된다. 2026년 한국 LLM 시장 규모는 5천억 달러로 성장할 것으로 예측된다.`},{id:"20260505180003",title:"정부, AI 규제 완화…스타트업 육성 및 기술 혁신 지원",summary:"정부가 AI 산업 육성을 위해 규제를 완화하고, 스타트업 지원 정책을 강화한다. 데이터 활용 규제 완화, AI 안전성 검증 절차 간소화 등이 포함된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-05T18:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1568605116516-b227562cd862?w=800",breaking:!1,content:`## 정부, AI 규제 혁신…산업 생태계 활성화 기대

과학기술정보통신부는 5월 5일, AI 산업 육성을 위한 규제 완화 및 지원 정책을 발표했다. 주요 내용은 데이터 활용 규제 완화, AI 안전성 검증 절차 간소화, AI 스타트업 지원 확대 등이다. 정부는 이러한 정책을 통해 AI 기술 혁신을 촉진하고, 새로운 산업 생태계를 조성할 계획이다.

> "AI 산업은 미래 성장 동력이며, 규제 완화를 통해 기업의 투자와 혁신을 적극적으로 지원할 것입니다." - 과학기술정보통신부 장관

## 한국 시장 전망

정부의 규제 완화 정책은 한국 AI 시장의 성장에 긍정적인 영향을 미칠 것으로 예상된다. 특히 스타트업들은 규제 부담 완화를 통해 더욱 자유롭게 기술 개발에 집중할 수 있게 될 것이다. 2026년 한국 AI 시장 규모는 20조 원으로 성장할 것으로 전망되며, 정부의 지원 정책은 이러한 성장을 더욱 가속화할 것으로 기대된다.`},{id:"20260505180004",title:"OpenAI, GPT-5 개발 완료 임박…멀티모달 기능 대폭 강화",summary:"OpenAI가 차세대 LLM인 GPT-5 개발을 거의 완료했으며, 멀티모달 기능이 대폭 강화될 것으로 알려졌다. GPT-5는 텍스트뿐만 아니라 이미지, 오디오, 비디오 등 다양한 형태의 데이터를 처리할 수 있게 된다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-05T18:00:00+09:00",readTime:"7분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!0,content:`## OpenAI, GPT-5 출시 초읽기…AI 패러다임 전환 예고

OpenAI는 5월 5일, 차세대 LLM인 GPT-5 개발이 거의 완료되었음을 공식 발표했다. GPT-5는 이전 모델보다 훨씬 강력한 성능을 제공하며, 특히 멀티모달 기능이 대폭 강화되어 텍스트, 이미지, 오디오, 비디오 등 다양한 형태의 데이터를 동시에 처리할 수 있게 된다. OpenAI는 GPT-5를 통해 AI 기술의 새로운 지평을 열 것으로 기대하고 있다.

> "GPT-5는 단순한 텍스트 생성 모델을 넘어, 인간과 유사한 수준의 인지 능력을 갖춘 AI 모델이 될 것입니다." - OpenAI CEO

## 한국 시장 전망

GPT-5의 출시가 한국 AI 시장에 미치는 영향은 매우 클 것으로 예상된다. 한국 기업들은 GPT-5를 활용하여 다양한 AI 서비스를 개발하고, 글로벌 경쟁력을 강화할 수 있을 것이다. 특히 교육, 의료, 금융 등 다양한 산업 분야에서 GPT-5 기반의 혁신적인 서비스가 등장할 것으로 기대된다. 2026년 한국 AI 서비스 시장 규모는 10조 원으로 성장할 것으로 전망된다.`},{id:"20260505180005",title:"퀄컴, AI 칩 시장 공략 강화…스마트폰 넘어 PC, 서버까지 확장",summary:"퀄컴이 AI 칩 시장 공략을 위해 투자를 확대하고, 스마트폰뿐만 아니라 PC, 서버 시장으로 사업 영역을 확장한다. 엔비디아, AMD 등 경쟁사들과의 경쟁이 심화될 것으로 예상된다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-05T18:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",breaking:!1,content:`## 퀄컴, AI 칩 시장 경쟁 돌입…다각화 전략 추진

퀄컴은 5월 5일, AI 칩 시장 공략을 위한 투자 확대 계획을 발표했다. 퀄컴은 기존 스마트폰용 AI 칩 외에도 PC, 서버용 AI 칩 개발에 집중 투자하고, 엔비디아, AMD 등 경쟁사들과의 경쟁에서 우위를 확보하기 위해 노력할 것이다. 퀄컴은 2026년까지 AI 칩 시장에서 20%의 점유율을 달성하는 것을 목표로 하고 있다.

> "AI는 미래 기술의 핵심이며, 퀄컴은 AI 칩 시장에서 선도적인 역할을 수행할 것입니다." - 퀄컴 CEO

## 한국 시장 전망

퀄컴의 AI 칩 시장 공략 강화는 한국 IT 산업에도 영향을 미칠 것으로 예상된다. 한국의 스마트폰, PC, 서버 제조사들은 퀄컴의 AI 칩을 활용하여 제품 성능을 향상시키고, 경쟁력을 강화할 수 있을 것이다. 2026년 한국 AI 칩 시장 규모는 3조 원으로 성장할 것으로 전망되며, 퀄컴은 한국 시장에서 중요한 역할을 수행할 것으로 기대된다.`},{id:"20260505084401",title:"美 펜타곤, 8개 빅테크와 기밀망 AI 계약...Anthropic만 '공급망 리스크' 배제",summary:"미 국방부가 5월 1~4일 OpenAI·Google·Microsoft·AWS·Nvidia·SpaceX·Reflection·Oracle 8개사와 IL6·IL7 기밀 네트워크용 AI 배치 계약을 잇따라 체결했다. Anthropic은 '자율 살상무기·대규모 감시 사용 동의' 거부로 공식 공급망 리스크 라벨이 붙어 배제됐다. 5년 누적 약 200억 달러 규모로, 한미 동맹 차원의 한국 국방 AI 도입 정책에도 직접 영향이 예상된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-05T08:45:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!0,content:`## 8개사 'Impact Level 6·7' 진입, Anthropic은 블랙리스트

미 국방부가 5월 1일 발표 후 5월 4일까지 ==**OpenAI·Google·Microsoft·Amazon Web Services·Nvidia·SpaceX·Reflection·Oracle**== 8개 빅테크와 기밀 네트워크용 AI 배치 계약을 잇따라 체결했다. Anthropic은 명단에서 빠졌고, 펜타곤은 회사를 ==공식 '공급망 리스크(supply-chain risk)'==로 지정했다.

승인된 8개사 모델은 미 정부 보안 등급 ==**IL6(비밀 데이터)와 IL7(최고 기밀)**== 시스템에서 운용된다. 분석·물류·대규모 데이터 처리는 물론, 기밀 환경 내 코드 어시스턴트와 자율 의사결정 보조 워크플로우까지 포함된다.

📌 **'공급망 리스크' 라벨이 갖는 무게**: 펜타곤이 이 라벨을 적용한 전례는 ==화웨이·중싱(ZTE) 등 외국 적성 국가 연계 기업==에 한정됐다. 미국 본토 기업에 동일 라벨을 붙인 것은 ==사실상 최초==다.

---

## 분쟁의 뿌리: '모든 합법적 목적'을 둘러싼 충돌

배경은 2026년 1분기로 거슬러 올라간다. 트럼프 행정부는 펜타곤의 AI 사용을 ==**"all lawful purposes"**==(자율 살상무기·대규모 감시 포함)로 광의 해석할 것을 모든 모델 공급사에 요구했다. OpenAI·Google·Microsoft 등은 일부 안전장치를 두면서도 동의했지만, Anthropic은 "Claude는 ==자율 살상무기 의사결정과 대규모 감시==에는 절대 사용될 수 없다"는 이용 약관을 고수했다.

> "AI 안전성은 협상 가능한 옵션이 아니다. 자율 살상 결정·대규모 감시·시민 자유 침해는 우리가 어떤 정부 계약을 위해서도 양보할 수 없는 선이다."
> — Dario Amodei, Anthropic CEO (4월 23일 백악관 회담 후)

캘리포니아 연방법원은 4월 중순 행정부의 일방적 계약 종료를 ==잠정 차단==하는 가처분을 내렸지만, 펜타곤은 신규 계약에서 Anthropic을 일관되게 배제 중이다. 백악관은 4월 말 Amodei와 ==재대화 채널==을 열었고, 트럼프는 "결국엔 잘 지낼 것"이라고 말하며 화해 신호를 보냈지만, IL6·IL7 진입 명단에는 끝내 들지 못했다.

---

## 8개사 진입의 실질적 의미

승인된 8개사가 IL6·IL7에 들어간다는 건 단순 SaaS 계약이 아니다.

1. **물리적 인프라 분리**: 각 사 모델의 ==전용 GPU 클러스터가 미 정부 데이터센터에 격리 설치==된다.
2. **인력 보안 등급**: 모델 운용·튜닝에 참여하는 ==엔지니어 전원이 Top Secret 클리어런스 보유==가 필수다.
3. **데이터 단방향**: 외부 학습 모델은 들어오지만, ==내부 작전·정보 데이터는 절대 외부로 나가지 못한다==.
4. **계약 규모**: 5년 누적 ==**약 200억 달러(약 28조 원)**== 규모로 추정된다.
5. **모델 라인업**: GPT-5.5 Enterprise, Gemini 2.5 Pro Government, Copilot Sovereign, Grok 4.3 Defense 등 ==전부 정부 전용 SKU==가 별도 운용된다.

⚡ **시장 충격**: Anthropic의 미 정부 매출은 사실상 ==연 0원==에 수렴한다. 반면 OpenAI·MS·Google은 ==각각 연 수십억 달러== 규모의 안정적 정부 매출을 확보했다.

---

## 한국에 미치는 영향

### 1. 한국 국방·정보기관의 미국산 AI 도입 가속

국방부와 국정원이 ==한미 동맹 차원에서 IL6·IL7 인증 모델 도입==을 검토할 가능성이 크다. 특히 ==**KAI(한국항공우주산업)·한화시스템·LIG넥스원**==이 자율 무기 시스템에 미국산 LLM을 통합할 경우, 같은 안전 지침이 자동 적용된다. 한미 ABCS·CIS 데이터 공유 체계와 결합되면 ==미국 모델이 한국군 작전 시스템 일부에 직접 들어오는 그림==이 현실화된다.

### 2. 한국형 'Sovereign AI' 정책 명분 강화

한국 정부 입장에서는 ==업스테이지·네이버 HyperCLOVA·LG EXAONE== 같은 자국 모델 보호 명분이 한층 명확해졌다. 5월 3일 발표된 5,600억 원 업스테이지 직접 투자도 같은 맥락이다. 미 정부가 자국 빅테크에만 안보 핵심 워크로드를 맡긴 만큼, ==한국도 자국 모델에 동일 원칙을 적용해야 한다==는 정책 논리가 힘을 얻는다.

### 3. AI 안전성·윤리 표준 글로벌 분열

==Anthropic 진영의 'AI 안전 우선'== vs ==미 정부의 '국가안보 우선'== 사이에서 한국 정부는 선택을 강요받는다. 외교부·과기정통부·국방부의 ==AI 거버넌스 협의체==가 5월 중 의견 조율에 나선다. 동맹 차원의 안보 협력과 시민 자유·국제 인권 규범 사이의 ==정책 균형==이 현 정부가 풀어야 할 숙제로 떠올랐다.

---

## 향후 6개월 5대 변수

이번 사건은 일회성 분쟁이 아니라 ==AI 시대 미·중 패권과 미국 내 진영 분리==의 신호다.

1. **재화해 가능성**: 9~10월 중 백악관-Anthropic 재협상 타결 여부. 미 의회 일부 의원이 ==Anthropic 복권 입법안==을 준비 중이다.
2. **NSA 우회 채널**: 정보기관(NSA·CIA)이 Anthropic Mythos를 비공식 운용한 사실이 알려지면서 ==공식 정책과 실무 운용의 모순==이 의회 청문회 의제가 될 가능성.
3. **EU·아시아 동조 여부**: 영국·프랑스·독일이 ==같은 8개사 명단을 자국 정부 계약에 적용==할지, 아니면 Anthropic 옵션을 유지할지가 글로벌 시장 분기점.
4. **벤더 락인 경고**: 미 정부가 ==한 모델 진영에 의존==하면 향후 가격 협상력 저하·기술 단절 위험. CBO가 5월 중 위험 보고서 발간 예정.
5. **한국 정책 결정**: 한국 정부가 동맹 차원의 미국 모델 도입과 자국 모델 우선 정책 사이에서 ==공공·국방·금융 영역별 차등 접근==을 채택할 가능성이 가장 크다.

💡 **장기 의미**: AI는 더 이상 '단순한 IT 솔루션'이 아니라 ==**핵 기술·사이버 무기와 같은 전략 자산**==으로 격상됐다. 펜타곤의 8사 명단은 향후 10년 ==미국 디지털 안보 인프라의 골격==이 된다. 한국 입장에서는 ==자국 AI 기업 보호와 미국 동맹 활용을 동시에 풀어야 하는 이중 과제==가 가시화됐다. 이번 사건은 단순한 미국 내 분쟁이 아닌, ==**21세기 AI 지정학의 첫 번째 공식 분기점**==이다.`},{id:"20260505084402",title:"Anthropic, 골드만·블랙스톤과 1.5조 합작...컨설팅 산업에 직격탄",summary:"펜타곤 8사 명단 배제 직후인 5월 4일, Anthropic이 Goldman Sachs·Blackstone·Hellman & Friedman·Apollo·General Atlantic과 15억 달러(약 2조 700억 원) 신규 합작 법인을 출범시켰다. 자사 엔지니어를 사모펀드 포트폴리오 800개 중견기업에 직접 투입해 워크플로우를 Claude 에이전트로 재설계하는 모델이다. McKinsey·BCG·Deloitte 등 컨설팅 빅4와 한국 삼정·삼일·EY 한영의 매출 직격탄이 예상된다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-05T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",breaking:!0,content:`## 펜타곤에서 막힌 그날, 월가에서 1.5B 베팅

펜타곤 8사 명단에서 배제된 직후인 5월 4일, Anthropic은 ==**Goldman Sachs·Blackstone·Hellman & Friedman·Apollo Global Management·General Atlantic**== 등 월가 거인들과 ==**15억 달러(약 2조 700억 원)**== 규모의 신규 합작 법인을 출범시켰다. OpenAI 진영도 ==같은 날, 같은 모델==(가칭 'The Development Company', 100억 달러 밸류에이션·40억 달러 펀딩)을 발표하며 정면 충돌했다.

각 출자 비중은 다음과 같다.

- **Anthropic**: $300M
- **Blackstone**: $300M
- **Hellman & Friedman**: $300M
- **Goldman Sachs**: $150M
- **나머지 (Apollo·General Atlantic·기타 LP)**: 합산 $450M

📌 **이 JV가 사상 최초인 이유**: AI 모델 회사가 ==자기 모델 + 자사 엔지니어 + 월가 자본==을 묶어 ==**중견기업 워크플로우 재설계 사업**==에 직접 진출하는 첫 사례다.

---

## 어떻게 작동하나: 'Embed-Engineer' 모델

이번 합작 법인의 비즈니스 모델은 단순 SaaS·컨설팅과 다르다.

1. **단계 1 — 진단**: 합작 법인 엔지니어 팀이 고객 중견기업에 ==90일 상주==하며 워크플로우 분석.
2. **단계 2 — 재설계**: 기존 업무를 ==Claude 기반 에이전트 60~80%, 사람 의사결정 20~40%== 비율로 재구성.
3. **단계 3 — 통합**: ERP·CRM·HR 시스템에 Claude API + Computer Use를 ==전사 통합==.
4. **단계 4 — 운영**: ==성과 연동 수수료(절감액의 15~25%)==로 장기 락인.

> "기업의 AI 도입을 가로막는 가장 큰 병목은 모델이 아니라 사람이다. 올바른 방식으로 워크플로우를 다시 짤 줄 아는 ==**AI 네이티브 컨설턴트**==가 글로벌 전체에 부족하다. 우리가 그 격차를 직접 메우려 한다."
> — Daniela Amodei, Anthropic President(JV 발표 컨퍼런스콜)

타깃 시장은 ==Blackstone·Apollo·Hellman & Friedman 포트폴리오 중견기업 약 800개사==. 평균 매출 5,000만~10억 달러 사이로, ==Big4 컨설팅 정식 계약을 받기엔 작고 자체 AI 팀을 꾸리기엔 어중간==한 시장이다.

---

## 누가 죽고 누가 사나: 컨설팅 산업의 전면 재편

이번 JV의 진짜 타깃은 ==**McKinsey·BCG·Bain·Deloitte·Accenture**==다. 이들은 매년 ==AI 트랜스포메이션 컨설팅으로만 글로벌 약 200억 달러==를 벌어왔다. Anthropic JV는 같은 시장에 ==1/3 가격, 2배 속도==로 진입한다.

특히 위험에 처한 영역은 다음과 같다.

- **운영 효율화 컨설팅(Big4의 30% 매출)**: 에이전트가 직접 워크플로우를 실행하므로 컨설팅 보고서가 무의미.
- **디지털 트랜스포메이션 컨설팅**: ==기술 진단·로드맵 작성에서 실행까지 통합 제공==하는 JV에 밀림.
- **외주 BPO**: ==2027년 안에 BPO 시장 30~40% 위축== 전망.

⚡ **전략적 통찰**: Anthropic은 ==펜타곤 매출 0원==이라는 구멍을 ==월가 + 중견기업 시장==에서 메우려 한다. 이는 단순 보전을 넘어 ==전혀 새로운 카테고리(AI 통합 운영 서비스)==를 창출하는 시도다.

---

## 한국에 미치는 영향

### 1. Big4·삼정·삼일·EY 한영 컨설팅 충격

==**삼정KPMG·딜로이트·삼일PwC·EY 한영**== 등 한국 진출 Big4의 AI 트랜스포메이션 사업은 즉각 압박을 받는다. 클라이언트가 "왜 6개월·100억 컨설팅 대신 ==Anthropic JV에 90일·30억으로 같은 결과를 받지 않느냐=="고 물을 가능성이 크다. 한국 4대 회계법인은 ==자체 AI 통합 인력 풀==을 확보하지 못하면 ==2027년 매출 20~30% 감소==가 불가피하다.

### 2. 한국 SI·컨설팅 빅3 대응 시급

==**삼성SDS·LG CNS·SK C&C**== 등 한국 SI 빅3는 ==자체 'AI 네이티브 통합' 사업부==를 신설 중이다. SK C&C는 ==Anthropic 한국 파트너십==을 5월 중 발표할 것으로 알려졌고, LG CNS는 ==자체 EXAONE 기반 동일 모델==을 추진 중이다. ==2027년 안에 한국 SI 매출의 40%가 'AI 워크플로우 재설계'==로 이동할 전망이다.

### 3. 사모펀드·중견기업 시장 재편

==**MBK파트너스·한앤컴퍼니·IMM PE**== 등 한국 사모펀드 운용사도 같은 모델을 검토 중이다. 자사 포트폴리오 중견기업(연매출 1,000억~1조)에 ==Anthropic 또는 Claude 한국 파트너의 동일 컨설팅을 적용==하면 ==EBITDA 마진 5~10%p 즉시 개선==이 가능하다는 추산이다.

---

## 다음 6개월 5대 관전 포인트

이 JV는 ==AI 산업의 비즈니스 모델 자체==를 다시 쓴다. 다음 6개월에 주목할 5가지 변수다.

1. **OpenAI 'The Development Company' 대응**: TPG·Brookfield·Bain Capital과 100억 달러 밸류에이션, 40억 달러 펀딩 별도 JV. ==사실상 같은 시장에서의 직접 충돌==.
2. **컨설팅 빅4의 AI 인수전**: McKinsey가 ==자체 AI 모델 회사 인수==를 검토 중이라는 보도. ==2026년 하반기 대형 M&A 가능성==.
3. **수수료 모델 입증**: '절감액의 15~25%' 수수료 모델이 ==현실적으로 측정·정산 가능한지==가 1차 시범 6개월 안에 판가름.
4. **인력 시장 충격**: ==Big4·SI 출신 시니어 컨설턴트==가 JV로 대거 이직할지, 한국에서도 비슷한 인재 이동이 일어날지가 중요.
5. **데이터 거버넌스**: 중견기업의 핵심 운영 데이터를 ==Anthropic·Goldman 합작 법인이 관리==할 때, 데이터 주권·소유권 분쟁 발생 가능성.

💡 **장기 의미**: 이번 JV는 ==**'AI 모델 회사가 직접 운영 비즈니스에 진출'**==하는 첫 사례다. 이 모델이 성공하면 향후 5년 안에 ==Google·Microsoft·xAI 모두 같은 형태의 직접 운영 자회사를 만든다==. 한국 기업 입장에서는 ==자체 'AI 네이티브 운영 역량'을 보유하지 못한 회사는 외국 합작 법인의 사실상 OEM==으로 전락할 위험이 있다. 이는 단순 컨설팅 시장 재편이 아니라, ==한국 화이트칼라 노동시장 전체의 구조적 전환==을 알리는 신호탄이다.`},{id:"20260505084403",title:"삼성 HBM4E 5월 샘플 임박...엔비디아 'Vera Rubin Ultra' 핵심 메모리 격돌",summary:"삼성전자 메모리사업부가 5월 안에 7세대 HBM4E 첫 양산형 샘플을 엔비디아에 인도한다. SK하이닉스·마이크론도 5~6월 동시 인도. 핀당 16Gbps·총 4.0TB/s·48GB 용량으로 HBM3E 대비 60% 향상. 엔비디아 'Vera Rubin Ultra' 가속기 탑재용으로 GPT-5.5·Claude Opus 5급 모델 추론 비용을 30~40% 낮춘다. 삼성·SK 합산 2026년 영업이익 100조 원 돌파가 거의 확정적이다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-05T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!1,content:`## 5월의 결정적 출시: 7세대 HBM4E 양산형 샘플

삼성전자 메모리사업부가 5월 안에 ==**HBM4E(High Bandwidth Memory 4 Extended)**== 첫 양산형 샘플을 엔비디아에 인도한다. SK하이닉스·마이크론도 ==5~6월 동시 인도==를 목표로 막바지 점검 중이다. 모두 ==**엔비디아 차세대 'Vera Rubin Ultra' 가속기**== 탑재용이다.

3월 GTC 2026에서 삼성이 처음 공개한 HBM4E 사양은 충격적이었다.

- **데이터 전송 속도**: 핀당 ==**16Gbps**== (HBM3E 대비 60% 향상)
- **총 대역폭**: ==**4.0TB/s**==
- **스택 높이**: 16-Hi (이전 12-Hi에서 확장)
- **용량**: 칩당 ==**48GB**== (HBM3E 대비 50% 증가)
- **발열·전력**: 동일 대역폭 기준 ==25% 전력 절감==

📌 **HBM4E의 의미**: 단순 사양 향상이 아니라, ==**Rubin Ultra**가 LLM 추론 한 회당 처리 가능한 토큰을 1.8배 확대==한다는 뜻. 이는 GPT-5.5·Claude Opus 5급 모델의 추론 비용을 30~40% 낮춘다.

---

## SK하이닉스의 비밀 무기: TSMC 3nm 로직 다이

SK하이닉스가 5월 샘플에서 가장 차별화한 부분은 ==**HBM4E의 베이스 로직 다이에 TSMC 3nm N3 공정**==을 적용했다는 점이다. 통상 메모리 제품은 ==레거시 공정(28~14nm)==을 쓰지만, SK는 첨단 로직 공정으로 ==연산 가속·전력 효율을 동시에 잡는== 전략을 택했다.

> "SK하이닉스 HBM4E는 ==사실상 'In-Memory Compute'의 첫 상용 제품==이다. 연산이 메모리 안에서 일어나면 GPU와의 데이터 이동 병목이 사라진다."
> — Sumit Sadana, Micron CBO(외신 인터뷰)

이 차별화는 즉각 시장 점유율로 반영된다. UBS는 ==SK하이닉스의 Vera Rubin·Rubin Ultra 통합 HBM4 점유율을 약 70%==로 전망했다. 삼성전자는 ==Vera Rubin 한정 HBM4 1순위 공급사==이지만, Ultra 세대에서는 SK에 밀릴 수 있다는 경계심이 깊다.

---

## 메모리 슈퍼사이클의 정점

WSTS는 2026년 글로벌 반도체 시장이 ==**$975B (전년 +25%)**==에 이를 것으로 전망하며, 메모리 부문은 ==30% 이상 성장==이 예상된다. 삼성·SK 합산 영업이익은 ==2026년 사상 최초 100조 원 돌파==가 거의 확정적이다.

1. **삼성전자 2026 1분기 실적**: 매출 ==**133조 원**==, 영업이익 ==**57.2조 원**== (역대 1분기 최대)
2. **SK하이닉스 2026 1분기 영업이익**: ==약 **18조 원**==, 4년 연속 분기 신기록
3. **Vera Rubin 출시 일정**: 2026 4분기 양산
4. **Vera Rubin Ultra 출시**: 2027 2분기 (HBM4E 16-Hi 16Gbps 풀스펙)

⚡ **핵심 경쟁 변수**: HBM4E는 ==2026 3분기 'Nvidia 인증 결과'==가 결정짓는다. 인증을 가장 먼저 통과한 사가 ==**Rubin Ultra 초도 물량의 60% 이상 점유**==를 확보한다.

---

## 한국에 미치는 영향

### 1. 70조 원 'HBM 슈퍼사이클' 현실화

삼성전자·SK하이닉스 합산 ==2026년 영업이익 100조 원, 2027년 130조 원==이 시장 컨센서스다. 이 중 ==**HBM 매출 비중이 50%**== 이상으로, 메모리가 한국 경제 성장률의 ==약 1.2%p를 기여==한다는 추산도 나온다. 정부 GDP 성장률 전망(2026 +2.6%)의 ==상당 부분이 단일 산업에 의존==하는 셈이다.

### 2. 후공정·소부장 호황 본격화

==**한미반도체·이오테크닉스·원익IPS·하나마이크론·테스나·티에스이**== 등 ==후공정·소재·부품·장비(소부장)== 기업이 동시 호황을 맞는다. 특히 HBM 16-Hi 적층에 필수인 ==TC 본더(Thermo-Compression Bonder)와 하이브리드 본딩 장비==를 만드는 한미반도체는 ==2026년 매출 2조 원 돌파== 전망. 한국 코스닥 시총 상위에 ==HBM 후공정 기업 6~8개==가 동시에 진입한다.

### 3. 인력·지방 공장 투자 가속

삼성전자 평택 P3·P4·P5 라인과 SK하이닉스 청주 M15·이천 M16 라인이 ==HBM4E 전용으로 일부 전환==된다. 양사 합산 ==**2026년 한 해에만 70조 원 추가 시설 투자**==가 집행되며, ==충북·경기 남부 지역 인력 1.5만 명 추가 고용==이 동반된다. 지방 부동산·서비스업 활성화에 직접적 영향.

---

## 향후 12개월 5대 변수

HBM4E 5월 샘플은 시작일 뿐이다. 다음 12개월에 다음 5가지가 시장 판도를 결정한다.

1. **Nvidia 인증 통과 순서**: 삼성·SK·마이크론 중 ==가장 먼저 IL(Initial Lot) 통과한 사==가 Rubin Ultra 초도 물량의 60%를 가져간다.
2. **HBM4E 16-Hi 수율**: 16층 적층 양산 수율이 ==70%를 넘기지 못하면== 가격 인상이 불가피하다. 65~75% 사이가 손익분기.
3. **AMD MI400 시리즈 동반 채택**: AMD가 ==MI400에 HBM4E를 채택==하면 시장은 단번에 30% 추가 성장한다.
4. **중국 CXMT의 HBM3E 양산**: 중국 메모리 기업 CXMT가 HBM3E 양산에 들어가면 ==저가 시장에서의 가격 압박==이 시작된다.
5. **GAA(Gate-All-Around) 공정 적용**: SK하이닉스가 ==2027 HBM4E Gen2에 GAA 공정==을 적용하면 전력 효율 추가 30% 향상이 가능하다.

💡 **장기 의미**: HBM은 단순 메모리 제품이 아니라 ==**'AI 시대의 원유'**==다. 한국이 글로벌 HBM의 ==80% 이상을 공급==하는 한, AI 반도체 패권 경쟁의 가장 깊숙한 곳에 한국이 있다. 그러나 ==패키징·후공정·EDA·고급 GPU 설계== 영역에서는 여전히 미국·대만에 의존한다. ==**'메모리 강국'에서 'AI 반도체 종합 강국'으로의 도약**==이 다음 5년의 진짜 시험대다. HBM4E는 그 도약의 첫 관문이다.`},{id:"20260505084404",title:"노보 노디스크-OpenAI 전사 AI 통합...신약 개발 6개월 단축, 韓 바이오 비상",summary:"덴마크 제약공룡 노보 노디스크가 OpenAI와 R&D·생산·상업화 전 영역에 AI를 통합 배치하는 파트너십을 4월 14일 발표했다. 2026년 말 전사 통합 완료가 목표로, 신약 후보 발굴 시간을 평균 30% 단축한다. 데이터 거버넌스·인적 감독 강화가 조건. 삼성바이오로직스·셀트리온·SK바이오사이언스 등 한국 바이오 기업도 자체 AI 파트너 확보 압박이 커진다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-05T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",breaking:!1,content:`## 'AI를 도구로'가 아니라 '운영 체계로' 통합

글로벌 시가총액 1위 제약사 ==**노보 노디스크(Novo Nordisk)**==가 4월 14일 OpenAI와 ==**전사적 AI 통합 파트너십**==을 공식 체결했다. 위고비·오젬픽으로 비만·당뇨 시장을 장악한 덴마크 제약공룡이 ==신약 발굴부터 생산·공급망·상업화까지 모든 영역에 GPT 기반 시스템을 직접 박는== 모델이다.

핵심 골격은 다음과 같다.

- **R&D**: 신약 후보 분자 스크리닝, 단백질 구조 예측, 임상 1·2상 데이터 분석
- **생산**: 비만치료제 ==**위고비·오젬픽 연 100% 폭증 수요**==에 대응하는 GMP 공정 최적화
- **공급망**: 원료 의약품(API) 수급, 콜드체인 물류, 글로벌 출하 일정 자동 조율
- **상업화**: 의료진 마케팅, 환자 어드히어런스 코칭, 보험 청구 자동화
- **인사·재무**: 사내 8.4만 명 직원의 업무 도구로 ChatGPT Enterprise 전사 배포

📌 **타임라인**: 2026년 ==2~3분기 파일럿 → 4분기 부분 통합 → **2026년 말 전사 통합 완료**==가 목표. 글로벌 헬스케어 기업 중 =='가장 빠른 AI 풀스택 통합'== 사례가 된다.

---

## 신약 개발 6개월 단축의 메커니즘

OpenAI는 노보 노디스크에 ==맞춤형 GPT-5.5 + 단백질 구조 모델 + 자체 개발 'BioReasoner' 에이전트==를 패키지로 제공한다. 이를 통해 다음 단축 효과가 기대된다.

1. **신약 후보 분자 발굴**: ==기존 24개월 → 14개월==(43% 단축)
2. **임상 1상 환자 모집**: ==평균 18개월 → 11개월==(39% 단축)
3. **임상 2상 데이터 분석**: ==9개월 → 4개월==(56% 단축)
4. **규제 당국 제출 패키지 작성**: ==12개월 → 5개월==(58% 단축)
5. **시판 후 안전성 모니터링**: ==사실상 실시간==

> "이번 파트너십은 단순한 '도구 도입'이 아니다. ==회사 전체의 운영 운영 체계를 AI 네이티브로 다시 짠다==. 신약 한 종을 12~18개월 빨리 시장에 내놓는다는 것은 환자 수백만 명의 생명·삶의 질에 직접 영향을 준다."
> — Lars Fruergaard Jørgensen, Novo Nordisk CEO

조건은 명확하다. ==**엄격한 데이터 거버넌스**와 **인적 감독(human-in-the-loop)**==이 모든 의사결정 단계에 강제된다. 환자 식별 가능 정보(PII), 임상 데이터 등은 ==노보 자체 격리 클라우드 + OpenAI 전용 모델== 환경에서만 처리된다.

---

## 한국에 미치는 영향

### 1. 삼성바이오로직스·셀트리온의 AI 파트너 선택 압박

==**삼성바이오로직스**==(글로벌 바이오 CDMO 1위)와 ==**셀트리온**==(바이오시밀러 글로벌 톱5)은 직접 경쟁사인 노보 노디스크의 6개월 단축에 즉각 대응해야 한다. 양사 모두 ==자체 AI팀 + 외부 파트너십 듀얼 트랙==을 검토 중이다. 삼성바이오는 ==자사 EXAONE 기반 자체 모델==을, 셀트리온은 ==Anthropic Claude Bio Edition==을 우선 검토 중인 것으로 알려졌다.

### 2. SK바이오사이언스·한미약품·유한양행 R&D 가속

==**SK바이오사이언스**==(코로나 백신·R&D), ==**한미약품**==(신약 라이선스), ==**유한양행**==(폐암 신약 렉라자) 등은 ==신약 임상 단계 단축==을 위해 OpenAI·Google·Anthropic 중 한 곳과 ==2026년 안에 파트너십 체결==이 거의 확실시된다. 식약처와 산업통상자원부도 =='AI 신약 개발 가이드라인'==을 5월 중 발표 예정.

### 3. 의료 AI 스타트업 동반 호황

==**루닛·뷰노·딥노이드·에이아이메디컬·메디컬AI**== 등 한국 의료 AI 스타트업도 동반 호황을 맞는다. 노보·릴리·존슨앤존슨 같은 글로벌 제약사가 한국 의료 AI 임상 데이터·영상 진단 모델 라이선스를 ==연 단위 수백억 원에 구매==하기 시작했다. ==2026년 하반기 IPO·M&A 러시==가 예상된다.

---

## 한국 헬스케어 AI가 풀어야 할 5대 과제

노보-OpenAI 파트너십이 만든 새 표준은 한국 바이오·의료 산업에 즉각 압력을 가한다. 다음 5가지가 핵심 과제다.

1. **데이터 주권**: ==한국 환자 임상 데이터를 OpenAI·Anthropic 같은 외국 모델==에 학습시키는 것이 개인정보보호법·생명윤리법상 허용되는지에 대한 ==명확한 가이드라인==이 필요하다.
2. **자체 모델 vs 외주 선택**: ==EXAONE Bio·HyperCLOVA Med== 같은 한국 자체 모델로 갈 것인가, 외국 모델 + 자체 데이터 격리 모델로 갈 것인가의 ==전략적 결정==이 시급하다.
3. **임상시험 자동화 인증**: 식약처가 ==AI 자동 분석 결과를 임상 데이터로 인정==하는 절차를 확립해야 한다. 현재는 ==사람 검토 의무==가 모든 단계에 있어 AI 효과가 제한적이다.
4. **의료진 재교육**: 의대·약대·병원이 ==AI 협업 의사·약사== 양성 커리큘럼을 도입해야 한다. 5년 안에 ==AI를 못 다루는 의료진은 사실상 도태==될 가능성.
5. **글로벌 라이선싱 협상력**: 한국 신약·바이오시밀러를 글로벌에 라이선싱할 때 ==AI 임상 데이터 패키지를 동반==할 수 있어야 가격 협상력이 생긴다.

💡 **장기 의미**: 노보-OpenAI 파트너십은 ==**'헬스케어가 AI 네이티브 산업으로 재구조화되는 시발점'**==이다. 향후 5년 안에 ==Pfizer·Roche·Novartis·Sanofi 등 글로벌 톱20 제약사 모두==가 비슷한 파트너십을 맺는다. 한국 바이오 산업이 이 흐름에 ==1년 늦게 합류==하면 글로벌 경쟁력 회복에 ==최소 5~7년이 걸릴 위험==이 있다. 정부의 ==R&D 보조금·세제 혜택·규제 샌드박스==가 어느 속도로 따라잡는지가 한국 바이오 경쟁력의 향후 10년을 결정한다.`},{id:"20260505084405",title:"내일 코엑스 'GAID 2026' 개막...아시아 최대 AI 전시, 韓 시장 명세서 공개",summary:"한국인공지능협회(KORAIA)가 5월 6~8일 서울 코엑스 A홀에서 제9회 국제인공지능대전 'GAID 2026'을 개최한다. 단일 AI 행사로는 아시아 최대 규모로, 200여 국내외 AI 기업이 참가한다. 카카오·네이버·LG·SKT·KT·삼성SDS는 자체 모델·에이전트 데모를 일제히 공개. 1월에 발표된 'AI+X 톱100'과 결합해 한국 AI 산업 명세서가 사흘간 펼쳐진다.",category:"이벤트",author:"Prompt Daily 편집팀",date:"2026-05-05T08:45:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",breaking:!1,content:`## 사흘간의 한국 AI 명세서: GAID 2026 개막 D-1

한국인공지능협회(KORAIA, 회장 김현철)가 ==**5월 6일(수)부터 8일(금)까지 3일간 서울 삼성동 코엑스 1층 A홀 전관**==에서 ==**제9회 국제인공지능대전 'GAID 2026'**==을 개최한다. 단일 AI 행사로는 ==아시아 최대 규모==로, 5월 5일 현재 사전 등록자만 ==**3.2만 명**==을 돌파했다.

참가 규모는 다음과 같다.

- **참가 기업**: ==**약 200개사**== (국내 약 150, 해외 약 50)
- **전시 부스**: ==**500여 개**==
- **전시 면적**: 코엑스 A홀 ==12,000㎡ 전관==
- **세션·발표**: 메인 컨퍼런스 ==80여 개==
- **누적 방문객 예상**: 3일간 ==**약 5만 명**==

📌 **2025년 대비 변화**: 작년 대비 ==참가 기업 +35%, 해외 기업 +60%, 사전 등록자 +50%==. 한국 AI 산업의 ==물리적 외형 자체가 1년 만에 1.5배 커졌다==는 신호다.

---

## 누가 무엇을 들고 나오나

참가 기업 라인업에서 가장 주목할 5가지 카테고리는 다음과 같다.

1. **빅테크 자체 모델·에이전트 격돌**
   - **네이버**: HyperCLOVA X 'Agent Studio' 베타 데모
   - **카카오**: Kanana 1.5 + Kanana Agent 첫 공개
   - **LG AI연구원**: EXAONE 4.0 Agent + 산업 도메인 특화 4종
   - **SK텔레콤**: A. Biz Pro + 사내 PCM 시연
   - **KT**: 믿:음 Pro + Sovereign AI Agent 패키지
   - **삼성SDS**: Brity Copilot Enterprise + Anthropic Claude 통합 데모
2. **AI+X 톱100 부스 집결**: 1월에 발표된 ==**'2026 이머징 AI+X 톱 100'**== 선정 기업이 코엑스 중앙 통합관에 모인다. ==2,400개 후보 중 100개 선정==된 한국 AI 신성장 기업의 단일 최대 집결이다.
3. **신설 'AI 보이스' 섹션**: 2026 톱100에 ==신설된 'AI 음성·멀티모달' 부문==이 별도 부스로 운영. ==리턴제로·뮤직워크·셀바스AI·튠브릿지==등이 격돌.
4. **AI 반도체·인프라 존**: ==퓨리오사AI·리벨리온·하이퍼엑셀·세미파이브== 등 한국 AI 칩 스타트업이 자사 칩셋·SDK 발표.
5. **글로벌 빅테크 한국 첫 부스**: ==Anthropic·Mistral·Cohere==가 한국 단독 부스를 처음으로 운영. ==GAID가 한국 진출 거점==으로 자리 잡았다는 의미.

> "GAID는 더 이상 단순 박람회가 아니다. ==**한국 AI 산업의 1년 성과를 세계가 검증받는 무대**==다. 미국·중국·유럽·일본의 정부·VC가 같은 부스를 돌며 한국 기업의 글로벌 협상 가치를 매긴다."
> — 김현철, 한국인공지능협회 회장(개막 사전 인터뷰)

---

## 컨퍼런스 핵심 어젠다

80여 개 세션 중 5월 6~8일 ==반드시 챙겨야 할 5개 어젠다==는 다음과 같다.

- **5/6 09:30** | 키노트: "한국 AI 산업의 글로벌 좌표" — 과기정통부 장관 + 삼성·LG·SK·KT 4사 부회장
- **5/6 14:00** | "국민성장펀드 5,600억 베팅의 의미: 업스테이지 김성훈 대표 케이스 스터디"
- **5/7 10:00** | "펜타곤 AI 명단과 한국 Sovereign AI: 정책·산업의 분기점"
- **5/7 15:30** | "DeepSeek 가격 75% 인하 후 6개월: 한국 LLM 산업의 생존 전략"
- **5/8 11:00** | "AI+X 톱100 발표 + 글로벌 VC 라운드 테이블 (Sequoia·a16z·Lightspeed·소프트뱅크 비전펀드 참가)"

⚡ **하이라이트**: 5월 7일 오후 ==**'AI 안전성·윤리·규제 정책 라운드테이블'**==. 김장겸 의원, 안철수 의원, 이재명 정부 AI 정책수석이 함께 등판한다. ==한국 AI 정책의 향후 5년 골격==이 이 자리에서 정리될 가능성이 크다.

---

## 한국에 미치는 영향

### 1. 글로벌 자본 한국 AI 투자 가속

==Sequoia Capital·Andreessen Horowitz(a16z)·Lightspeed·Index Ventures·소프트뱅크 비전펀드== 등 글로벌 톱 VC가 GAID 부스를 도는 =='딜소싱 투어'==를 운영한다. 작년 GAID 직후 3개월간 ==한국 AI 스타트업에 약 1.2조 원 신규 투자==가 집행됐다. 올해는 ==2~3조 원 규모==로 확대될 가능성이 크다.

### 2. 정부 정책 발표의 단일 무대

과기정통부·금융위·중기부·국정원이 ==**5월 6~8일 사흘 동안 AI 관련 정책 12개를 일제히 발표**==할 예정이다. 그중 핵심은 ==**'AI 에이전트 신뢰성·보안 가이드라인'**==(과기정통부)과 ==**'금융 AI 인증 제도'**==(금융위)다. GAID가 ==사실상 한국 AI 정책의 단일 발표 채널==이 되고 있다.

### 3. 인재 유치·이직 시장 활성화

==삼성·LG·네이버·카카오 + 글로벌 빅테크==가 GAID에서 ==동시 채용 부스==를 운영한다. 사이드 프로그램으로 진행되는 =='AI 글로벌 잡 페어'==에는 작년 4,500명이 면접을 봤고, ==연봉 2~3억 원의 시니어 엔지니어 약 250명==이 이직했다. 한국 AI 인재 시장의 ==**연중 가장 활발한 일주일**==이 시작된다.

---

## 사흘간 핵심 체크포인트

GAID 2026을 따라가는 가장 효율적인 방법은 ==하루별 핵심 시간대==를 미리 정해두는 것이다.

1. **5/6(수)**: 오전 키노트 + 빅테크 6사 부스 순회. 오후 업스테이지·퓨리오사AI 케이스 스터디.
2. **5/7(목)**: 오전 정책 라운드테이블 풀 청취. 오후 DeepSeek 가격 전쟁 패널 + AI 안전성 라운드테이블.
3. **5/8(금)**: AI+X 톱100 통합관 풀 순회 + 글로벌 VC 라운드테이블. 마지막 날 '딜 사인 데이' 이벤트도 신설.

💡 **장기 의미**: GAID 2026은 ==한국 AI 산업이 '내수 산업'에서 '글로벌 플레이어'로 전환하는 분기점==이다. 작년까지는 한국 기업이 ==해외 시장 진출 가능성==을 묻는 자리였다면, 올해는 ==**글로벌 자본·정부·기업이 한국 시장 진입 조건**==을 묻는 자리로 위상이 바뀌었다. 한국이 미·중 AI 패권 경쟁 사이에서 ==**'제3의 신뢰할 수 있는 축'**==으로 자리 잡을 수 있는지가 이 사흘에 가시화된다. 모두가 코엑스로 모이는 이유다.`},{id:"20260504084301",title:"업스테이지에 5,600억 직접투자...국민성장펀드 'AI 모델 1호' 거대 베팅",summary:"정부 국민성장펀드가 5월 3일 한국 LLM 스타트업 업스테이지에 5,600억 원 규모 직접 지분투자를 결정했다. 첨단전략산업기금 1,000억 + 산업은행 300억 + 민간 4,300억 구성으로, 'AI 모델 부문 직접투자 1호' 사례다. 업스테이지는 이 자금으로 한국어 특화 LLM 'Solar Pro 3' 개발과 추론 인프라 확장에 나선다. 누적 11건·8.4조 원에 달하는 국민성장펀드의 첫 AI 풀스택 베팅이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-04T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## 정부 펀드, 한국 LLM 스타트업에 단일 5,600억 원 베팅

금융위원회가 5월 3일 국민성장펀드 기금운용심의회를 개최하고 한국 AI 유니콘 **업스테이지**에 ==**5,600억 원**== 규모의 직접 지분투자를 의결했다. 한국 정부 주도 펀드의 단일 AI 모델 기업 투자로는 **사상 최대 규모**다.

자금 구성은 첨단전략산업기금 **1,000억 원**, 산업은행 자체 자금 **300억 원**, 그리고 매칭 민간 자금 **4,300억 원**이다. 정부·국책은행·민간이 1:0.3:4.3 비율로 함께 들어가는 매칭 구조로, 단순 보조금이 아닌 정식 지분 투자다.

📌 **이번 투자가 갖는 상징성**: 국민성장펀드는 작년 출범 이후 누적 11건·**8조 4,000억 원**을 집행했지만, 이 중 'AI 모델 부문 직접투자'는 업스테이지가 **1호 사례**다. 정부가 한국 사회의 미래 인프라 산업으로 'AI 풀스택'을 정조준했다는 뜻이다.

---

## 업스테이지는 누구인가

업스테이지는 2020년 김성훈·이활석 공동대표가 창업한 LLM 전문 스타트업이다. 'Solar' 계열 한국어 특화 모델로 알려져 있으며, 2024년 KT·SKT·우리은행 등 한국 대형 고객을 잇따라 확보하면서 **국내 모델 벤처 최초로 기업가치 1조 원**을 인정받은 유니콘이다.

- **모델 라인업**: Solar Pro 2(현행 주력), Solar Mini, Document AI(OCR/문서 이해)
- **고객 기반**: 금융권 5개사, 통신 3사, 공공 30+ 기관
- **기술 차별화**: 한국어 토큰 효율 2~3배, GPT-4 대비 한국어 정확도 우위
- **해외 확장**: 일본·동남아 정부 'Sovereign AI' 입찰 참여 중

> "한국어 데이터·문화·법률에 특화된 자체 LLM 없이는 어떤 디지털 주권도 사상누각이다. 업스테이지가 이 역할을 맡아 줄 수 있도록 정부가 처음으로 모델 기업에 직접 베팅했다."
> — 금융위원회 국민성장펀드 운용 관계자

자금 사용처는 명확하다. **차세대 한국어 특화 모델 'Solar Pro 3' 개발**, **추론 GPU 인프라 확장**, **해외 sovereign AI 진출 자금**이다. 특히 추론 인프라는 엔비디아 H200·B200 수천 장 규모를 직접 매입·운영하는 옵션과, 네이버·KT 클라우드와 장기 계약하는 옵션을 병행 검토 중이다.

---

## 한국에 미치는 영향

### 1. AI 모델 기업 투자 마중물 효과

그동안 한국 VC 시장은 'AI 인프라'(클라우드·반도체)에는 몰렸지만 ==모델 자체에 1,000억 단위 베팅==을 꺼려 왔다. 미국·중국과의 모델 격차, 빠른 진부화 위험이 컸기 때문이다. 정부가 5,600억을 매칭 구조로 깔자 후속 라운드 진입 장벽이 크게 낮아진다. **카카오브레인·LG AI연구원·라이너·뤼튼테크놀로지스** 등 국내 LLM 기업 후속 투자에도 연쇄 효과가 예상된다.

### 2. 정부 'Sovereign AI' 정책 가시화

중기부가 2026년 책정한 AI 예산 **약 8,000억 원**(7,992억)과 합치면, 정부는 올해 한 해에만 **1조 4,000억 원**가량을 한국 AI 모델·인프라에 직접 투입한다. 그동안 미국·중국에 의존하던 한국어 LLM 인프라를 자국 모델로 대체하려는 본격 신호다. 행정안전부·국정원·국방부의 자체 모델 도입 입찰에 업스테이지가 우선순위에 오를 가능성이 높다.

### 3. 금융·통신·제조 B2B 시장 재편

업스테이지의 기업 고객은 ==금융 5개사·통신 3사·공공 30+==로 이미 광범위하다. 5,600억으로 추론 인프라를 확장하면 OpenAI·Anthropic API에 월 수십억 지급하던 한국 대기업이 **국산 LLM 운영비를 30~50% 절감**할 수 있다. 삼성SDS·LG CNS·네이버클라우드 등 SI·클라우드 사업자도 'Solar Pro 3 기반 솔루션' 개발 경쟁에 참전할 전망이다.

⚡ **주목할 포인트**: 업스테이지는 자금 일부를 ==동남아·중동 sovereign AI 시장==에 집중 투입할 계획이다. 미국 모델에 대한 정치적 거부감이 큰 인도네시아·UAE·사우디 정부 입찰에서 한국 LLM이 '제3의 선택지'로 부상할 수 있다.

---

## 시장이 주목하는 5가지 후속 변수

이번 5,600억 투자가 실제 'Solar Pro 3'와 한국 sovereign AI 산업으로 이어지려면 몇 가지 후속 조건이 충족되어야 한다.

1. **GPU 확보 능력**: H200 4,000장, B200 1,000장 이상의 ==물리적 GPU 인벤토리==가 필요하다. 엔비디아 직접 할당 또는 SK텔레콤·KT 클라우드와의 장기 계약이 6월 안에 결정되어야 한다.
2. **인재 확보**: ==Solar Pro 3급 모델 개발에는 박사급 50명, 전체 ML 엔지니어 200명 이상==이 필요하다. 한국 인력 풀 한계상 미국·인도·동유럽에서 글로벌 채용이 불가피하다.
3. **고객 락인 강화**: 5,600억 투자 회수를 위해 ==연간 3,000억 원 이상 매출==을 만들어야 하고, 이는 KT·신한·우리 같은 핵심 고객의 다년 계약 갱신이 필수다.
4. **모델 성능 입증**: Solar Pro 3가 ==GPT-5.5 한국어 성능을 상회==해야 한국 대기업의 자체 모델 전환을 정당화할 수 있다.
5. **해외 매출 비중**: 동남아·중동 sovereign AI 입찰에서 ==첫 해 1,000억 원 이상 해외 매출==을 만들어야 한국 정부 자금의 ROI가 정당화된다.

💡 **장기적 의미**: 한국이 'AI 모델 보유국'에서 'AI 모델 수출국'으로 전환하는 첫 시도다. 일본·대만·인도네시아 정부가 같은 방식의 sovereign AI 펀드를 검토 중인데, 한국의 업스테이지 모델이 성공하면 ==동아시아 전체의 정책 모델==이 될 가능성이 있다. 이는 단순한 산업 정책을 넘어 ==한국이 미·중 AI 패권 사이에서 제3의 축==을 형성할 수 있는지를 가늠하는 시험대가 된다. 향후 12개월 안에 Solar Pro 3의 한국어 벤치마크 점수, 첫 해외 sovereign AI 입찰 결과, 그리고 ==연매출 성장률 100% 달성 여부==가 본 투자 성공의 3대 KPI로 자리 잡을 전망이다. 한국 AI 산업 전체가 지켜보는 단일 베팅이다.`},{id:"20260504084302",title:"DeepSeek V4-Pro, API 가격 75% 폭탄 인하...글로벌 LLM 가격 전쟁 점화",summary:"중국 DeepSeek이 4월 26일 자정부터 V4-Pro 출력 토큰 가격을 100만 토큰당 $3.48 → $0.87로 75% 인하했다. 캐시 히트 입력은 출시가의 1/10 수준까지 떨어졌다. OpenAI GPT-5.5의 100만 토큰 $12~25 대비 14~28배 저렴하다. 5월 5일까지 한시 할인이지만, 이미 Zhipu·Moonshot 등 중국 LLM이 줄줄이 가격 인하에 동참하며 미국 모델 마진 압박이 가시화됐다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-04T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!0,content:`## DeepSeek, V4-Pro 출력 가격 4분의 1로 단행

중국 항저우 기반 AI 스타트업 **DeepSeek**이 4월 26일 12:15 UTC를 기점으로 주력 모델 V4-Pro의 API 가격을 ==**75% 인하**==하는 깜짝 조치를 단행했다. 출력 토큰 100만 개당 가격이 **$3.48 → $0.87**로 떨어졌고, 캐시 미스 입력 가격은 $1.74 → $0.435로 동일하게 75% 하락했다.

더 충격적인 것은 캐시 히트 입력가다. 모든 모델에 대해 **캐시 히트 입력 가격이 출시가의 10분의 1**로 책정되면서, 반복 요청이 많은 RAG·검색·에이전트 워크로드에서는 사실상 무료에 가까운 단가가 가능해졌다.

📌 **글로벌 가격 비교**: OpenAI GPT-5.5는 100만 출력 토큰당 약 **$12~25**, Anthropic Claude Opus 4.5는 약 **$15**, 구글 Gemini 2.5 Pro는 약 **$10** 수준이다. DeepSeek V4-Pro의 $0.87은 이들 대비 **14~28배 저렴**한 가격이다.

---

## 가격 전쟁의 메커니즘

DeepSeek은 5월 5일 15:59 UTC까지 한시적 할인이라고 표기했지만, 업계는 이를 ==**상시 가격으로의 전환**==으로 해석한다. 작년 R1 출시 때도 동일한 '한시 할인 → 상시 인하' 패턴이 반복됐기 때문이다.

경쟁 영향은 즉각 나타났다. 24시간 안에 다음 조치가 줄을 이었다.

1. **Zhipu GLM 5.1**: 출력 가격 30% 인하, 캐시 가격 50% 인하
2. **Moonshot Kimi K2.6**: 모든 워크로드 신규 50% 크레딧 제공
3. **Alibaba Qwen-Max**: 코드 모델 가격 60% 인하 발표 예고
4. **xAI Grok 4.3**: 4월 28일 ==40% 가격 인하== 동시 발표

> "파운데이션 모델은 빠르게 '인프라'가 되고 있다. 단일 파라미터 규모 경쟁은 끝났고, 이제 추론 비용 최적화와 개발자 생태계 점유율이 전부다."
> — Bloomberg AI 산업 분석 보고서(요약)

미국 진영의 대응은 어렵다. ==OpenAI·Anthropic은 인프라 손실이 막대==한 상태로, 단가를 더 내리면 적자 폭이 즉시 확대된다. 월스트리트저널은 "OpenAI는 추론 1토큰당 약 0.4센트 손실을 보고 있다"고 보도했고, Anthropic도 H100·H200·TPU에 매년 수조 원을 쏟는 구조라 단가 인하 여력이 제한적이다.

---

## 한국에 미치는 영향

### 1. 한국 LLM 가격 정책 재검토 압력

네이버 HyperCLOVA X·LG EXAONE·업스테이지 Solar Pro 2 등 ==국산 모델의 API 단가는 GPT 수준에 맞춰져 있다==. DeepSeek 가격이 정착되면 국내 SaaS·B2B 고객들이 "같은 성능이면 1/10 가격을 쓰겠다"는 압력을 가하게 된다. 네이버클라우드·KT 클라우드는 5월 중 가격 정책 재검토에 들어갔다.

### 2. 카카오·네이버 자체 추론 인프라 가속

네이버는 세종 데이터센터의 **GPU 추론 클러스터를 H100 → H200 + B200으로 전면 업그레이드** 중이며, 카카오는 안산 데이터센터에 자체 GPU 풀 구축을 가속하고 있다. DeepSeek 같은 가격을 내려면 자체 인프라 효율화가 유일한 길이기 때문이다.

### 3. 한국 AI 스타트업 마진 압축 위험

뤼튼·업스테이지·라이너 등 ==국내 AI SaaS 스타트업의 매출 절반 이상이 OpenAI·Anthropic API 마크업==에서 나온다. 원가가 1/14로 떨어지는 모델이 등장하면, 동일 마크업을 유지하기 어렵다. 단순 'API 래퍼' 구조의 스타트업 정리가 가속될 수 있다는 경고가 나온다.

⚡ **주목할 포인트**: 한국 정부·공공기관 입찰에서 ==중국 모델 사용 가능 여부가 새 변수==로 떠올랐다. 행안부·국정원은 보안 우려로 중국 LLM 사용을 사실상 금지해왔지만, 14~28배의 가격 격차가 정착되면 "보안 등급이 낮은 일반 업무에는 허용"하는 절충안 논의가 시작될 가능성이 있다.

---

## 가격 전쟁이 만들 5가지 시장 재편

DeepSeek의 75% 인하는 일회성 이벤트가 아니라 ==구조적 가격 붕괴의 시작점==이다. 향후 12개월 안에 다음 변화가 예상된다.

1. **모델 그 자체는 코모디티화**: 1년 전 "GPT-4급 성능"이 프리미엄이었다면 이제는 ==기본 사양==이다. 차별화 지점이 모델 자체가 아닌 ==추론 비용·지연·도메인 적합성==으로 이동한다.
2. **'서비스형 추론'(IaaS) 시장 폭발**: 모델 자체가 거의 무료가 되면 ==전용 GPU 인스턴스를 시간 단위로 빌리는== 시장이 더 커진다. AWS·CoreWeave·네이버클라우드 모두 추론 GPU 가격 인하 압력에 직면한다.
3. **수직 통합 모델의 부상**: 의료·법률·금융처럼 ==도메인 특화 데이터·규제 컴플라이언스==를 자체 학습한 모델만 프리미엄 가격을 유지할 수 있다.
4. **소형 모델 전성기**: 7B~14B 파라미터 ==소형 모델을 자체 운영==하는 기업이 늘어난다. DeepSeek 가격이 자체 운영 비용을 거의 따라잡았기 때문이다.
5. **개발자 락인이 진짜 자산**: OpenAI·Anthropic이 살아남는 핵심 무기는 ==개발자 SDK·툴체인 생태계==다. 가격 전쟁에서도 SDK 익숙도와 데이터 보안 신뢰가 마지막 방어선이 된다.

💡 **장기 시나리오**: 2027년이면 ==LLM API는 사실상 '무료'==에 수렴한다. 진짜 돈은 ==맞춤형 에이전트 구축·운영·관리 SaaS==에서 발생한다. DeepSeek은 그 시나리오를 12개월 앞당겼다. 결과적으로 ==NVIDIA·AMD 같은 GPU 업체와 클라우드 인프라 사업자가 마지막 승자==가 될 가능성이 크고, 모델 자체로 돈을 벌려던 미국·중국 LLM 스타트업 절반 이상이 2027년 안에 정리될 것이라는 관측도 나온다. 한국 입장에서는 ==DeepSeek 가격을 기준선으로 삼는 글로벌 클라이언트==가 늘어나면서 국내 AI 서비스 단가도 강제로 조정될 가능성이 높다. 네이버·카카오·SK텔레콤이 ==자체 모델 효율성 경쟁==을 본격화해야 하는 이유다.`},{id:"20260504084303",title:"Anthropic 'Mythos', NSA가 비공식 사용 중...국방부 블랙리스트인데 정보기관은 도입",summary:"Bloomberg는 4월 30일 미 국가안보국(NSA)이 Anthropic의 보안 특화 AI 'Claude Mythos'를 마이크로소프트 제품의 취약점 발굴에 비공식 사용 중이라고 보도했다. 같은 모델은 펜타곤 공식 블랙리스트에 올라 있다. Mythos는 미공개 취약점 99% 이상을 신규 발견했고, 모든 주요 OS·브라우저에서 high-severity 결함 수천 개를 적발했다고 알려졌다. 한국 보안 업계도 즉각 영향권이다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-04T08:45:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",breaking:!1,content:`## 같은 모델, 같은 정부, 정반대 평가

블룸버그 통신이 4월 30일 보도한 내용은 미국 정부 내부의 모순을 드러낸다. ==**미 국가안보국(NSA)**이 Anthropic의 보안 특화 모델 'Claude Mythos'를 마이크로소프트 제품의 취약점 발굴에 비공식 사용 중==이라는 것이다. 그러나 같은 시점, 미 국방부는 Anthropic을 '공급망 리스크' 대상에 올려 ==공식 블랙리스트==에 등록한 상태다.

NSA 관계자는 익명을 전제로 "Mythos의 속도와 효율성에 깊이 인상받았다"며 "전통적 펀저(fuzzer)·정적 분석으로 6개월 걸릴 작업을 며칠 만에 끝낸다"고 말했다. 펜타곤은 안보 위험을 이유로 Anthropic을 막았지만, 사이버 첩보를 담당하는 NSA는 ==Mythos를 사실상 '필수 도구'==로 보고 있다는 뜻이다.

📌 **핵심 인사이트**: 미국 정부 안에서 'Anthropic은 위험하다(국방부)'와 'Anthropic 없이는 일을 못 한다(NSA)'가 동시에 성립하고 있다. 이 모순은 향후 6개월 내 정책 통일이 불가피하다.

---

## Mythos가 발견한 것들

Anthropic이 4월 29일 공개한 'Glasswing' 프로젝트 사전 보고서에 따르면 Mythos가 자체 평가 중 발견한 결함은 충격적이다.

- **수천 건의 high-severity 취약점**을 신규 발견
- 발견된 취약점의 ==**99% 이상이 미공개(zero-day)**==
- **모든 주요 OS**(Windows·Linux·macOS) 및 모든 주요 브라우저(Chrome·Edge·Safari·Firefox)에서 적발
- 보안 무경험 엔지니어가 ==Mythos 출력만으로 작동하는 익스플로잇 코드 작성에 성공==

> "AI 모델이 코드 분석 능력에서 인간 최상위 보안 연구자를 추월하는 단계에 들어섰다. 이는 사이버 공격·방어의 기본 비대칭 구조를 영구히 바꾸는 사건이다."
> — Anthropic 'Glasswing' 보고서 발췌

Anthropic은 이 위험을 인식해 Mythos를 ==벳팅된 정부·산업 파트너에게만 제한 공급==하는 'Project Glasswing' 프로그램으로 운영 중이다. 일반 API로는 접근 자체가 불가능하다.

---

## 문제 1: 99%의 미패치 취약점

Mythos가 찾은 취약점 중 99% 이상이 ==공개·패치된 적이 없는 신규 취약점==이라는 사실은 두 가지를 의미한다.

1. 같은 도구를 적국 정보기관(러시아·중국·북한)이 손에 넣을 경우, 글로벌 인프라 전반에 동시다발 공격이 가능하다.
2. 마이크로소프트·구글·애플 등 빅테크 보안팀의 ==기존 발견 능력이 Mythos 한 모델보다 현저히 뒤처진다==는 뜻이다.

## 문제 2: 비숙련자도 익스플로잇 작성

전통적으로 zero-day 익스플로잇은 ==최상위 보안 연구자 수십 명==만이 만들 수 있었다. Mythos는 보안 무경험 엔지니어도 작동하는 익스플로잇을 만들도록 한다. 진입 장벽이 무너지면 'AI 보조 사이버 범죄'가 폭발적으로 증가한다.

---

## 한국에 미치는 영향

### 1. KISA·국정원, 자체 보안 AI 개발 압박

Mythos급 도구를 보유하지 못한 국가는 사이버 방어에서 영구 열위에 놓인다. ==KISA(한국인터넷진흥원)와 국가정보원==은 Anthropic이 한국 정부 파트너십에 동의할지 협상 중인 것으로 알려졌다. 동의하지 않을 경우 한국이 자체 'Mythos급' 모델을 만들어야 하는데, 현재 한국 LLM 중 이 수준의 코드 분석력을 가진 모델은 없다.

### 2. 한국 빅테크의 자체 보안 검증 의무 강화

삼성·LG·네이버·카카오 등 ==자사 SW를 글로벌 공급망에 내보내는 한국 기업==은 Mythos급 자동 취약점 스캐너로 사전 감사를 받지 않으면 고객 신뢰를 유지하기 어렵다. 한국 보안 기업(안랩·이스트시큐리티·SK쉴더스)도 Anthropic·OpenAI와 파트너십 협상에 들어갔다.

### 3. 사이버 보험·금융 규제 재검토

금융감독원과 삼성화재·DB손해보험 등은 ==기업 사이버 보험 산정 모델==을 재검토하고 있다. 'Mythos급 자동 익스플로잇'이 시장에 풀렸다는 전제로 보험료가 올라갈 가능성이 크고, 금융권은 이 비용을 IT 운영비에 반영해야 한다.

⚡ **주목할 포인트**: NSA-펜타곤 모순은 결국 ==백악관 차원의 통합 가이드라인==으로 정리될 수밖에 없다. 그 결과에 따라 한국이 도입 가능한 미국산 AI 보안 도구의 범위가 결정된다.

---

## 한국 보안 산업이 당장 해야 할 4가지

Mythos가 만들어 낸 새 보안 지형에서 한국 기업·기관이 즉각 검토해야 할 사항은 명확하다.

1. **자체 코드베이스 사전 감사**: ==Mythos 등급 도구로 자사 SW를 사전 스캔==하지 않으면, 적국·범죄 조직이 먼저 zero-day를 발견할 위험이 크다. 삼성전자 SDS·LG CNS·네이버클라우드는 외부 파트너십 또는 자체 도구 개발에 즉시 착수해야 한다.
2. **공급망 의존성 점검**: ==Windows·macOS·Chrome·Edge 사용이 광범위한 한국 정부·금융권==은 'Mythos가 발견했지만 아직 패치 안 된 결함'을 마이크로소프트·구글이 어떤 일정으로 패치하는지 추적해야 한다. 패치 SLA가 도입 결정의 핵심 기준이 된다.
3. **사이버 인력 재배치**: 단순 침해사고 대응(IR) 인력보다 ==AI 도구를 운용하는 'AI-augmented 분석가'==가 더 가치 있어진다. KISA·국가사이버안보센터·대형 SI는 인력 교육 프로그램을 6개월 안에 신설해야 한다.
4. **법·제도 정비**: ==zero-day 발견 시 책임 있는 공개(Coordinated Disclosure)== 의무, AI 도구가 발견한 취약점의 보안 등급 분류, 정부 기관의 AI 보안 도구 구매 절차 등 ==기존 법규는 모두 사람이 발견한 취약점==을 전제로 만들어졌다. 이를 AI 시대에 맞게 재설계해야 한다.

💡 **장기 의미**: Mythos는 단순한 '더 좋은 보안 도구'가 아니다. ==사이버 공격·방어의 비대칭==을 영구히 흔든 사건이다. 1990년대 인터넷, 2000년대 스마트폰, 2020년대 LLM에 이은 ==**사이버 보안의 4번째 패러다임 전환**==으로 기록될 가능성이 크다.`},{id:"20260504084304",title:"기업용 AI 에이전트 시장 5년 만에 28배...연평균 175% 폭주, 한국 SK·LG·KT 격돌",summary:"기업용 AI 에이전트 SW 시장이 2025년 15억 달러에서 2030년 418억 달러로 28배 성장한다는 IDC·Gartner 통합 전망이 나왔다. 연평균 성장률 175%다. 2026년 안에 전체 기업 앱의 40%가 작업 특화 에이전트를 통합하는데, 2025년 5% 미만에서 8배 증가다. SK텔레콤 '에이닷 비즈', LG AI연구원 EXAONE Agent, KT '믿:음 Agent', 카카오 'Kanana Agent' 등 한국 기업 격돌이 본격화됐다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-04T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",breaking:!1,content:`## 'AI 비서'는 끝났다, '에이전트'가 시작이다

2026년 전 세계 기업 IT 시장의 화두는 단 하나다. **에이전트**(Agent). 단순히 질문에 답하는 LLM 어시스턴트가 아니라, ==실제 SW 시스템을 조작하고 외부 API를 호출하며 다단계 업무를 자율 수행==하는 AI다.

IDC와 Gartner가 4월 말 통합 발표한 전망은 시장 폭주를 시사한다.

- **2025년 시장 규모**: $1.5B (약 2.1조 원)
- **2030년 시장 규모 전망**: ==**$41.8B (약 58조 원)**==
- **5년 누적 성장률**: 약 **28배**
- **연평균 성장률(CAGR)**: ==**175%**==

📌 **2026년 단년 변화**: 전체 기업 애플리케이션 중 **작업 특화 AI 에이전트를 통합한 비율**이 2025년 5% 미만 → 2026년 ==**40%**==로 상승한다. **단일 연도 8배** 폭증이다.

---

## 누가 무엇을 만들고 있나

글로벌 진영은 이미 '플랫폼 vs 모델' 양강 구도가 자리 잡았다.

1. **OpenAI ChatGPT Agent / Codex**: 컴퓨터 사용·코딩 자율 수행
2. **Anthropic Claude Computer Use + Agent SDK**: 엔터프라이즈 워크플로우 표준
3. **Google A2A 프로토콜 + Vertex AI Agent**: 멀티 에이전트 오케스트레이션
4. **Microsoft Copilot Studio**: Windows·Office 통합 에이전트
5. **Salesforce Agentforce 3**: CRM 데이터 기반 영업·CS 에이전트

> "2026년은 에이전트 원년이다. 5년 뒤 SaaS 시장의 절반은 에이전트 기반으로 재구성될 것이다."
> — Gartner 'Top 10 Strategic Tech Trends 2026' 발표 요약

---

## 한국 기업의 격돌 구도

한국에서도 ==SK·LG·KT·네이버·카카오==가 동시다발로 기업용 에이전트 플랫폼을 출시 중이다.

### SK텔레콤 'A. Biz' (에이닷 비즈)
- 일정·문서·회의록·채용까지 통합 처리
- ==SKT 자체 PCM(Personal Context Memory)== 기반 사용자별 맞춤화
- 2026년 4월 기준 한국 30대 기업 중 11개사 도입

### LG AI연구원 'EXAONE Agent'
- LG그룹 사내 데이터 학습된 도메인 특화 에이전트
- ==화학·배터리·디스플레이 R&D==에 집중 적용
- LG 계열사 전체 사내 사용자 약 12만 명 활용

### KT '믿:음 Agent'
- 통신·금융·공공 산업 특화
- ==B2B 고객사 전용 가상 사설 LLM==으로 데이터 외부 유출 차단
- KT클라우드와 결합한 'Sovereign AI Agent' 패키지

### 카카오 'Kanana Agent'
- 카카오톡·카카오페이·카카오모빌리티 데이터 기반
- ==C2B 영역 특화== (개인이 기업과 상호작용하는 에이전트)
- 2026년 하반기 정식 베타 예정

### 네이버 HyperCLOVA X 'Agent Studio'
- 네이버 검색·쇼핑·블로그 통합
- ==중소상공인 업무 자동화== 타깃
- 4월 24일 시범 서비스 시작

---

## 한국에 미치는 영향

### 1. 사무직 노동 시장 본격 재편

Gartner는 2026년 안에 ==전체 기업 사무직 업무의 15~20%가 에이전트로 자동화==될 것으로 본다. 한국에서는 회계·법무·인사·CS 등 룰 기반 업무가 1차 타깃이다. 삼성전자·현대차·신한은행은 이미 사내 RPA를 'AI 에이전트'로 전환하는 5개년 계획에 착수했다.

### 2. 한국 SaaS 산업 구조 변화

토스·당근·뱅크샐러드·플렉스 등 ==한국 SaaS 강자들==은 자사 제품에 에이전트를 통합 중이다. '버튼 클릭하는 SaaS'에서 '자연어로 명령하는 SaaS'로의 UI 패러다임 전환이 동시에 진행된다. 이를 따라가지 못하는 SaaS는 1~2년 내 시장에서 도태될 위험이 크다.

### 3. 한국 정부의 'AI 에이전트' 정책 가속

과기정통부는 5월 중 ==**AI 에이전트 신뢰성·보안 가이드라인**==을 발표할 예정이다. 행안부는 공무원 행정업무용 'GovAgent' 시범 도입을, 금융위는 금융 에이전트 인증 제도를 검토 중이다. 한국 AI 프라이버시 민관 정책협의회(4월 출범)가 핵심 채널이 된다.

⚡ **주목할 포인트**: 에이전트 시대의 진짜 승자는 ==모델이 아니라 '컨텍스트 데이터'를 가진 회사==다. 카카오톡·네이버페이·SK텔레콤 통신 메타데이터처럼 한국 일상에 깊이 박힌 데이터 자산을 보유한 기업이 다음 5년의 게임을 지배한다.

---

## 한국 기업이 마주한 5가지 실전 과제

에이전트 도입은 단순히 '모델을 산다'로 끝나지 않는다. 한국 기업의 실전 도입에서 반드시 풀어야 할 문제가 있다.

1. **데이터 거버넌스**: 에이전트가 ==사내 ERP·CRM·인사 시스템에 직접 접근==해야 작동한다. 권한 모델·감사 로그·예외 승인 워크플로우를 새로 설계해야 한다.
2. **온프레미스 vs 클라우드**: 금융·공공은 ==민감 데이터가 외부 클라우드로 나가지 못한다==. 온프레미스 GPU 클러스터 구축 비용이 100억 원 단위라 ROI 계산이 까다롭다.
3. **휴먼-인-더-루프 설계**: 에이전트가 ==자율 결정한 행동의 책임 소재==가 모호하다. 결제·계약·공시 같은 고위험 액션은 사람 승인을 강제하는 가드레일이 필수다.
4. **노조·인사 협의**: ==사무직 자동화는 노동조합 협의 대상==이다. 현대차·기아·HD현대 등 대형 노조가 있는 기업은 도입 속도가 늦어질 가능성이 크다.
5. **벤더 락인 회피**: 한 회사 에이전트 플랫폼에 ==전사 워크플로우를 묶으면 5년 뒤 가격 협상력==이 사라진다. A2A 같은 ==오픈 프로토콜==을 통한 멀티 벤더 전략이 합리적이다.

💡 **장기 의미**: 에이전트는 ==기업 IT의 '클라우드 전환' 이후 가장 큰 패러다임 전환==이다. 클라우드가 인프라 비용 구조를 바꿨다면, 에이전트는 ==노동 비용 구조==를 바꾼다. 한국 기업의 경쟁력이 다음 10년 동안 어떻게 갈릴지를 결정하는 변수다.`},{id:"20260504084305",title:"구글, 차량용 Gemini 통합 본격화...전 세계 수백만대 차에 'AI 코파일럿' 탑재",summary:"구글이 5월 1일 Volvo·Polestar·Honda·Renault에 이어 메르세데스-벤츠와 새 통합 계약을 체결, 차량용 Gemini 탑재 누적 모델이 30종을 돌파했다고 발표했다. 자연어 음성 대화로 길찾기·일정·메시지·결제까지 처리하며, 한국 현대차·기아의 ccNC 시스템과는 정면 경쟁 구도다. 동시에 구글 리서치는 ICLR 2026에서 'TurboQuant' 알고리즘을 공개, KV 캐시 메모리를 60% 절감해 차량 같은 엣지 환경에서도 대형 LLM을 굴릴 수 있게 했다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-04T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800",breaking:!1,content:`## 자동차가 LLM을 직접 굴리는 시대

구글이 5월 1일 ==**메르세데스-벤츠와의 차량용 Gemini 통합 계약**==을 발표했다. 이로써 Volvo·Polestar·Honda·Renault·메르세데스를 포함해 차량용 Gemini를 공식 탑재한 완성차 브랜드는 ==**30종 이상**==으로 확대됐다. 2026년 하반기 출고분부터 단계적으로 적용된다.

탑재 차량의 운전자는 ==자연어 음성 대화로 길찾기·일정·메시지·결제·차량 설정==을 모두 처리할 수 있다. 기존 음성 명령형 인포테인먼트(Siri·Bixby 수준)와 달리, **상황 맥락을 기억하는 다단계 대화**가 핵심 차별점이다.

📌 **사용 시나리오 예시**: "점심 약속 장소로 가는데 도로 막히면 김 부장한테 10분 늦는다고 알려주고, 도착해서 주차할 만한 곳 미리 결제해 둬" → Gemini가 일정 확인·교통 분석·메시지 발송·주차 결제까지 ==한 번에 자율 수행==.

---

## 동시에 공개된 'TurboQuant'

구글 리서치는 같은 주 ICLR 2026 학회에서 차량 같은 엣지 환경에 대형 LLM을 탑재할 수 있도록 한 알고리즘 'TurboQuant'를 공개했다. 핵심은 ==**KV 캐시 메모리 60% 절감**==이다.

- 기존 LLM이 추론 중 차지하던 ==KV(Key-Value) 캐시==는 메모리의 가장 큰 병목
- TurboQuant는 동적 양자화·계층별 압축 기법으로 ==같은 정확도 99.7% 유지하며 60% 메모리 절감==
- 결과: 70억 파라미터급 LLM을 차량용 8GB 메모리 환경에서도 풀 추론 가능

> "엣지 디바이스에서 진짜 대형 모델을 굴리는 가장 큰 장벽은 KV 캐시였다. TurboQuant는 그 벽을 한 단계 낮췄다. 차량·로봇·웨어러블에 LLM이 본격 진입한다."
> — Google DeepMind 엔지니어 X 발표 요약

---

## 한국에 미치는 영향

### 1. 현대차·기아 ccNC 정면 경쟁

현대차그룹은 2025년부터 ccNC 차세대 인포테인먼트에 ==자체 음성 비서 'HKMC AI'==를 탑재해왔다. 그러나 OEM 자체 LLM 경쟁력은 구글·아마존·OpenAI에 비해 약하다. 메르세데스가 Gemini 통합을 발표함에 따라, ==벤츠 GLE·EQS 같은 프리미엄 시장에서 현대 제네시스가 직접 비교당하는 상황==이 되었다. 정의선 회장은 4월 말 사내 임원 회의에서 "차량 AI 경쟁력이 곧 차량 경쟁력"이라고 강조한 것으로 알려졌다.

### 2. LG디스플레이·LG이노텍 차량 디스플레이 수혜

차량 안에서 음성 대화 외에도 ==LLM 기반 멀티모달 출력==(지도·차트·영상)이 늘면, 차량 디스플레이 면적과 화질 요구가 급증한다. LG디스플레이의 차량용 OLED·P-OLED 수주가 2026년 들어 전년 대비 ==**+45%**==를 기록한 것도 이 흐름의 일부다.

### 3. 한국 차량용 SW 스타트업의 생존 전략

42dot·드림에이스·앤시스코리아·뉴라이드 등 ==한국 차량용 OS·SW 스타트업==은 Gemini·Claude·GPT를 어떻게 자사 솔루션에 통합할지가 사활을 가르는 변수다. 자체 LLM 개발 대신 ==구글·OpenAI 파트너 인증을 받아 미들웨어 영역에 집중==하는 전략으로 빠르게 선회 중이다.

⚡ **주목할 포인트**: TurboQuant 같은 ==KV 캐시 압축 기술==은 차량뿐 아니라 스마트폰·로봇·산업용 임베디드에 동시 영향을 준다. 삼성전자·LG전자가 자사 가전·모바일에 70억 파라미터급 모델을 탑재하는 시점이 6개월~1년 앞당겨질 가능성이 높다.

---

## 차량용 AI 경쟁의 4가지 핵심 변수

구글이 30종 이상의 차량 모델을 확보한 지금, 향후 12개월 차량용 AI 패권을 결정할 변수는 명확하다.

1. **응답 지연(Latency)**: 운전자는 ==1초 이상 지연==을 못 견딘다. 클라우드 LLM의 200~500ms 지연은 사용성을 무너뜨린다. 차량용은 ==온디바이스 추론 비중을 70% 이상==으로 가져가는 하이브리드 구조가 필수다.
2. **개인정보 보호**: 차량은 ==운전자의 위치·일정·연락처·결제 정보==를 모두 다룬다. 유럽 GDPR, 한국 개인정보보호법, 미국 CCPA 모두에서 ==차량 AI 데이터 처리에 대한 규제==가 강화되고 있다.
3. **OTA 업데이트 인프라**: 모델은 ==월 단위로 갱신==해야 사용자 만족도를 유지할 수 있다. 100GB 단위 모델 패키지를 ==전국 4G/5G 인프라로 안전하게 배포==하는 OTA 시스템을 구축한 OEM만이 살아남는다.
4. **현지화 데이터**: 한국 도로·한국 식당·한국 결제 시스템에 ==최적화된 추천·답변 품질==이 차이를 만든다. 구글 Gemini의 글로벌 모델이 한국 지역 데이터를 얼마나 학습하는지가 현대·기아의 방어선이다.

💡 **장기 의미**: 자동차는 ==스마트폰 다음 세대의 '엣지 AI 디바이스'==다. 1년 안에 모든 신차가 LLM을 탑재하는 시대가 오면, ==운전자의 시간·돈·관심사==를 차량 AI가 통제한다. 이는 ==광고·결제·구독 비즈니스 모델 전체==를 흔드는 변수다.

한국 자동차·통신·핀테크 기업은 함께 표준을 만들지, 따라갈지 결정해야 한다. 이미 SK텔레콤은 현대차와 ==차량 내 AI 음성 비서 공동 개발 MOU==를 체결했고, KT는 BMW코리아·메르세데스-벤츠 코리아와 ==5G·AI 통합 인포테인먼트 시범 사업==을 진행 중이다.

특히 카카오모빌리티·티맵모빌리티 같은 ==한국 모빌리티 플랫폼==은 차량용 Gemini가 한국 시장에 본격 진입할 때 ==길찾기·주차·결제 데이터의 통제권==을 잃을 위험이 크다. 향후 6개월 안에 자체 차량용 에이전트를 출시하지 못하면, 운전자 접점을 글로벌 빅테크에 영구 양도하게 될 수 있다. 한국 정부도 ==차량용 AI 개인정보 보호 가이드라인==을 5월 안에 마련해야 한다는 압박이 거세다. 차량이 수집하는 운전자 데이터는 스마트폰의 10배 이상이며, 글로벌 LLM 사업자가 이를 어떻게 처리하는지에 대한 규제 공백이 그대로 남아 있는 상태다. 결국 차량용 AI 패권 경쟁의 진짜 무대는 ==기술이 아니라 데이터 주권 정책==이 될 것이라는 분석이 힘을 얻고 있다.`},{id:"20260503163001",title:"펜타곤 AI 핵심 공급사 7곳 발표...Anthropic만 빠졌다, IL6·IL7 기밀시스템 진입",summary:"미국 국방부가 5월 1일 OpenAI·구글·MS·AWS·엔비디아·SpaceX·Reflection AI를 핵심 AI 공급사로 공식 선정했다. Claude 제작사 Anthropic은 자율 무기 약관을 거부해 명단에서 제외됐다. 7개사 모델은 Impact Level 6·7 등 미 국방 최고 보안 등급 시스템에 직접 배포되며, 향후 10~20년 미국 국방 AI 표준이 된다. 한미 연합 작전 환경의 AI 표준에도 직접 영향이 예상된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-03T16:30:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!0,content:`## 펜타곤이 7개 빅테크 골랐다, Anthropic은 빠졌다

미국 국방부가 5월 1일(현지시각) 핵심 AI 인프라 공급사로 7개 기업을 공식 선정했다. **OpenAI, 구글, 마이크로소프트, AWS, 엔비디아, SpaceX, Reflection AI**가 명단에 올랐다. 가장 눈에 띄는 빈자리는 Claude 제작사 **Anthropic**이었다. 6개월 전까지만 해도 Anthropic은 'Claude Gov' 모델로 정보기관·국방부와 가장 긴밀히 협업하던 프론티어 랩 중 하나였다.

이번 계약은 단순한 공급 계약이 아니다. 채택된 7개사의 모델은 ==**Impact Level 6(IL6)**과 **Impact Level 7(IL7)** 분류 시스템==에 직접 배포된다. IL6/IL7은 미국 국방 정보 시스템 중 최고 보안 등급으로, 기밀(Classified) 및 SCI(Sensitive Compartmented Information) 정보를 처리한다. 한 번 진입하면 향후 수십 년간 미국 국방 AI의 표준 인프라가 된다.

📌 **계약 규모 추정**: 단일 발표는 아니지만, 빅테크 7개사가 연간 수십억 달러 규모의 기밀 시스템 AI 운영 계약을 분할 수주한 것으로 분석된다. 클라우드 인프라(AWS·Azure·GCP), 모델 추론(OpenAI·Anthropic·Google), 위성 통신(SpaceX), 가속기(엔비디아)가 통합된 풀스택 패키지다.

---

## 왜 Anthropic은 빠졌나

배경에는 4월 말 트럼프 행정부와 Anthropic의 정면 충돌이 있다. 트럼프 행정부는 Claude를 **"군의 모든 합법적 목적"**(자율 무기·대량 감시 포함)에 사용할 수 있도록 약관을 완화하라고 요구했다. Anthropic은 이를 거부했다.

도널드 트럼프 대통령은 직후 "Anthropic과의 모든 관계를 끊겠다"고 공식 선언했다. Anthropic은 즉각 캘리포니아 연방 지방법원에 행정부를 제소했고, 한 연방 판사가 행정부의 일방적 단절 조치를 일시 차단하는 가처분을 내렸다. CEO **다리오 아모데이**는 며칠 후 백악관에서 수지 와일스(Susie Wiles) 비서실장과 직접 회동했지만, 이번 5월 1일 명단에는 결국 포함되지 못했다.

> "Anthropic은 모델 사용 약관에서 자율 무기 시스템과 무차별 감시 활용을 명시적으로 금지합니다. 이 원칙은 어떤 정부 계약을 위해서도 양보할 수 없는 기준입니다."
> — Anthropic 공식 정책 성명(요약)

대신 명단에 합류한 신생 강자가 **Reflection AI**다. 구글 DeepMind 출신 미샤 라스킨(Misha Laskin)과 이오안니스 안토노글루(Ioannis Antonoglou)가 창업한 이 회사는 2025년 시리즈A에서 유니콘 등극에 이어, 이번 펜타곤 계약으로 단숨에 미국 정부 AI 핵심 공급사로 올라섰다.

---

## IL6/IL7이 의미하는 것

미국 국방부의 Impact Level 분류 체계는 다음과 같이 단계화돼 있다.

1. **IL2**: 비기밀 공개 정보
2. **IL4**: 통제된 비기밀 정보(CUI)
3. **IL5**: CUI + 국가안보 시스템
4. **IL6**: 비밀(SECRET) 등급 기밀 정보
5. **IL7**: 1급 비밀(TOP SECRET) + SCI 컴파트먼트 정보

이번 7개사가 IL6/IL7에 진입한다는 것은 다음 영역에서 직접 운영된다는 뜻이다.

- 핵·미사일·정찰위성 운용 데이터 처리
- 동맹국 정보기관 공유 데이터 활용
- 작전 시뮬레이션 및 표적 분석 AI
- 공세적·방어적 사이버 작전 자동화
- 무인 항공기·해상 드론 군집 제어

한 번 자리잡은 국방 인프라는 정권 교체와 무관하게 이어지는 경우가 많다. 이번 결정은 사실상 **향후 10~20년 미 국방 AI 지형의 기본 골격**을 정한 사건으로 평가된다.

---

## 한국에 미치는 영향

### 1. 한미 안보 협력 AI의 표준 변화

**국방부**와 **국방과학연구소(ADD)**는 한미 정보공유 시스템에서 AI 활용 비중을 빠르게 늘리고 있다. 미군이 IL6/IL7에서 OpenAI·구글·MS·AWS 모델을 사용하면, 한미 연합 작전 환경의 데이터 표준·API·보안 인증도 이들 회사 사양에 맞춰질 가능성이 크다. 국내에서 자체 개발 중인 **'K-국방 LLM'**(LIG넥스원·한화시스템 컨소시엄)이 미군 시스템과 호환성을 확보하지 못하면 활용 범위가 크게 제한될 수 있다.

### 2. 국내 빅테크의 정책 모델 재검토

**네이버**, **카카오**, **LG AI연구원**, **SK텔레콤**은 자사 LLM의 '정부·국방' 활용 약관을 미·중 사례를 토대로 재정비 중이다. Anthropic 사례는 두 가지를 분명히 보여준다 — 약관에서 자율 무기 사용을 명시적으로 금지하면 정부 계약을 잃을 수 있고, 반대로 허용하면 시민사회의 격렬한 반발을 마주한다. 한국 기업들도 곧 이 선택의 갈림길에 서게 된다.

### 3. SpaceX·Reflection AI의 한국 진출 시나리오

신규 진입자 중 **SpaceX**(Starlink)와 **Reflection AI**가 특히 주목된다. SpaceX의 Starlink 위성 인터넷은 이미 한국 정부·과기정통부와 진출 협의 중이며, 펜타곤 AI 공급사 지위는 안보·국방·위성 통신 분야에서 SpaceX의 한국 진출 협상력을 크게 높인다. Reflection AI는 **삼성SDS**·**LG CNS** 등 국내 IT 서비스 기업과 파트너십을 통해 한국 시장에 우회 진입할 가능성이 거론된다.

---

## 데이터로 본 7개사 포지셔닝

7개 공급사를 역할별로 살펴보면 미 국방 AI가 **풀스택 통합 체제**로 진화하고 있음이 분명하다.

- **OpenAI / Reflection AI**: 프론티어 추론·에이전트 모델 본체 공급
- **구글**: Gemini 모델 + Workspace 기반 협업 에이전트
- **마이크로소프트 / AWS**: 기밀 등급 클라우드 인프라(Azure Government, AWS Top Secret Region)
- **엔비디아**: H100/H200·B200·GB200 기반 AI 슈퍼컴퓨팅 가속기
- **SpaceX**: Starlink/Starshield 군용 위성망, 전장 데이터 백본

이 다섯 레이어가 하나로 묶이면 모델·클라우드·가속기·네트워크가 동일 사업자군에 의해 조율된다. 한국 같은 동맹국 입장에서는 **API·보안 인증·데이터 포맷·암호 표준**이 모두 미 빅테크 사양에 정렬돼야 상호 운용이 가능하다는 의미다.

⚡ **주목할 포인트**: 펜타곤의 7개사 선정은 'AI 안보 패권'이 사실상 미국 빅테크 중심으로 통합되고 있음을 의미한다. 한국이 자체 군사 AI 역량을 어느 수준까지 확보할 것인가가 향후 5년 안보·산업 정책의 핵심 의제로 떠올랐다.`},{id:"20260503163002",title:"삼성, 5월 HBM4E 첫 샘플 양산 돌입...메모리 '장기계약' 시대 열렸다",summary:"삼성전자가 5월 중 HBM4E 첫 샘플 양산을 목표로 최종 셋업에 들어갔다. SK하이닉스의 시장 지배에 대응하기 위한 속도전이다. 동시에 메모리 업계 전반이 '스폿 거래'에서 '3년 단위 장기계약'으로 구조 전환되며 슈퍼사이클을 떠받친다. 빅테크 4사의 AI CapEx 700조원 베팅이 한국 반도체 수요를 2028년까지 보장하는 구조다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-03T16:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## 삼성, 5월 HBM4E 샘플 라인 가동...추격의 분수령

삼성전자가 이번 달 안에 차세대 고대역폭 메모리 **HBM4E 첫 샘플** 양산에 들어간다. 화성·평택 라인에서 4월 마지막 주부터 최종 셋업이 진행됐고, 5월 중 엔비디아·구글 등 주요 고객사로의 ==샘플 출하==가 시작된다. 삼성 DS부문 임원진은 "품질 인증 일정을 최단 코스로 압축한다"고 내부 회의에서 강조한 것으로 전해졌다.

이번 일정의 의미는 단순한 신제품 출시가 아니다. SK하이닉스가 HBM3E·HBM4 시장에서 70% 안팎의 점유율을 사실상 굳힌 가운데, **HBM4E는 삼성이 다음 세대에서 격차를 좁히거나 추월할 마지막 골든타임**으로 평가된다. 시장 일각에서는 "HBM4E에서도 밀리면 HBM5(2028년 양산 목표)까지 만회 기회가 사실상 없다"는 진단이 나온다.

📌 **HBM 세대 격차 현황**: 2026년 4월 기준 엔비디아향 HBM3E 점유율은 SK하이닉스 약 71%·삼성 약 22%·마이크론 약 7%다. HBM4 초기 물량에서도 SK하이닉스가 55% 이상을 가져가며 격차가 확대되는 추세다.

---

## '스폿'에서 '장기계약'으로...메모리 시장 구조가 바뀌었다

파이낸셜뉴스는 5월 3일 보도에서 메모리 슈퍼사이클의 본질적 변화를 짚었다. **"스폿 거래에서 3년 단위 장기계약으로 판이 바뀌었다"**는 분석이다.

전통적으로 메모리 반도체는 스폿(현물) 가격이 분기마다 출렁이는 사이클 산업이었다. 그러나 2026년 들어 빅테크들이 행태를 바꿨다.

- **메타·MS·알파벳·아마존 4사 합산 2026년 AI CapEx**: 약 **700조원** 규모로 추정
- **엔비디아의 HBM 장기 발주**: 2028년 양산 분량까지 사전 락업
- **계약 형태**: 종래 6개월~1년 단위 → ==**3년 단위 다년 계약**==으로 전환
- **선납 비중**: 일부 고객사는 총 계약금의 30% 이상을 선급금으로 지급

결과적으로 SK하이닉스·삼성전자의 HBM 라인은 사실상 "수주 잔고가 라인을 밀어내는" 구조가 됐다. CFO들이 컨퍼런스콜에서 입을 모아 "공급이 수요를 따라가지 못한다"고 말하는 배경이다.

> "이제 메모리는 스폿 시장 가격에 좌우되는 일용재가 아닙니다. AI 인프라를 짓기 위한 5년치 자원 계획에 들어가 있는 전략 자산이 됐습니다. 사이클이 사라진 건 아니지만, 사이클의 진폭이 과거와 완전히 다른 시대입니다."
> — 파이낸셜뉴스 인용 메모리 업계 임원

---

## 슈퍼사이클은 언제까지 가나

주요 증권사와 리서치 기관의 메모리 사이클 전망:

1. **모건스탠리**: 2027년 말까지 HBM 공급 부족 지속
2. **트렌드포스(TrendForce)**: 2028년까지 HBM 비트 수요 연평균 60%+ 성장
3. **UBS**: 엔비디아 Rubin 플랫폼이 HBM4E·HBM4 수요를 2028년까지 견인
4. **국내 증권가**: 사이클 정점이 늦어도 2028년 하반기, 일부는 2029년까지 연장 가능

공통적으로 지목되는 변수는 두 가지다. **(1) 빅테크의 AI CapEx가 꺾이는 시점**, **(2) AI 추론(인퍼런스) 효율화로 메모리 수요가 둔화되는 시점**. 둘 다 단기간 내 발생할 가능성은 낮다는 게 다수의 분석이다.

---

## 한국에 미치는 영향

### 1. SK하이닉스·삼성전자, 한국 GDP 견인 구조 고착

**SK하이닉스**(시총 약 1,000조원 진입)와 **삼성전자**(DS 부문 영업이익률 50%대 회복)는 이미 한국 코스피와 GDP의 핵심 견인차다. HBM4E 양산이 본격화되는 2026년 하반기~2027년 상반기에는 두 회사 합산 영업이익이 연 **150조원**을 넘을 가능성이 거론된다. **국세청** 법인세 추정치는 사상 최대치 경신을 예고한다.

### 2. 장비·소재 협력사 동반 호황

HBM4E는 본딩·테스트·EUV 패터닝 등에서 새로운 공정이 추가된다. **한미반도체**(TC 본더), **테스**·**원익IPS**(증착 장비), **솔브레인**·**동진쎄미켐**(소재), **이오테크닉스**(레이저)이 직접 수혜권에 들어간다. 협력사 차원에서도 **3년 단위 장기계약** 비중이 빠르게 늘고 있다. 사이클 변동성이 줄어들면 협력사들의 설비 투자 결정 부담도 가벼워진다.

### 3. 정부 정책 — 전력·용수 인프라가 병목

**산업통상자원부**와 **국토교통부**는 용인·평택 반도체 클러스터 전력·용수 인프라 조기 완공에 사활을 걸고 있다. **한전**의 송전망 보강이 2027년까지 계획대로 완료되지 않으면, HBM 라인 증설이 물리적으로 막힐 수 있다는 경고가 나온다. 정부는 5월 중 '반도체 인프라 패스트트랙' 추가 대책을 발표할 예정이다.

---

## HBM4E 기술 차별화 포인트

SK하이닉스와 삼성의 HBM4E 경쟁은 단순 "누가 먼저"가 아니다. 사양에서 의미 있는 차별화가 시도된다.

1. **로직 다이 공정**: SK하이닉스는 베이스 로직 다이에 ==**3나노**==(TSMC N3) 적용 검토. 삼성은 자체 4나노 우선, 3나노 선택 옵션
2. **대역폭 목표**: HBM4 대비 50% 이상 향상, 단일 스택 1.5TB/s 이상
3. **전력 효율**: 동일 작업 기준 W당 처리량(perf/W) 30% 개선 목표
4. **스택 높이**: 16-Hi(현재 12-Hi 주력) 양산 가능성
5. **고객 인증**: 엔비디아 Rubin·Feynman, AWS Trainium3, 구글 TPUv7 동시 인증 시도

📌 **삼성의 카드**: HBM3E 인증 지연으로 잃어버린 점유율을 만회하려면, HBM4E에서 **"가장 먼저 가장 안정적인 샘플"**을 제공하는 길밖에 없다. 5월 샘플 출하는 그 출발선이다. 시장은 이번 달 내 첫 외부 인증 결과 1차 공개 여부에 촉각을 곤두세우고 있다. 인증 통과 시점이 1분기 늦어질 때마다 점유율이 5%p씩 깎인다는 추정도 나온다.

⚡ **주목할 포인트**: 메모리 시장이 스폿에서 장기계약으로 이동했다는 것은, 한국 반도체가 ==더 이상 사이클 산업이 아니라 인프라 산업==에 가까워지고 있음을 의미한다. 변동성은 줄지만, 한 번 잘못된 기술 베팅(예: 삼성의 HBM3E 인증 지연)을 만회하기는 더 어려워진다.`},{id:"20260503163003",title:"뇌 닮은 신소재 칩 공개...AI 데이터센터 전력 70% 절감 길 열렸다",summary:"사이언스데일리에 게재된 최신 연구에서 변형 하프늄 옥사이드(HfO2) 기반 나노 전자 소자가 뉴런처럼 정보 처리·저장을 동시에 수행한다는 사실이 입증됐다. 기존 폰 노이만 구조의 데이터 이동 병목을 제거해 AI 데이터센터 전력 사용을 최대 70% 절감할 가능성이 제시됐다. 한국전자통신연구원·삼성종합기술원도 유사 기술을 추격 중이며, AI 전력 위기의 게임 체인저로 떠올랐다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-03T16:30:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!1,content:`## 뇌처럼 동작하는 칩, 70% 전력 절감의 실마리

사이언스데일리(ScienceDaily)가 4월 22일 보도한 최신 논문이 AI 칩 업계의 시선을 사로잡고 있다. 연구진이 **변형 하프늄 옥사이드(modified hafnium oxide, HfO2)**를 기반으로 한 새로운 나노전자 소자를 개발했고, 이 소자가 ==**뉴런처럼 정보를 처리(compute)하면서 동시에 저장(store)**==하는 데 성공했다는 내용이다. 연구진의 추산에 따르면 이 구조는 AI 워크로드 전력 사용을 **최대 70%** 줄일 수 있다.

현재의 컴퓨팅은 70여 년간 폰 노이만(Von Neumann) 구조를 따라왔다. CPU/GPU가 메모리에서 데이터를 가져와(Fetch) 연산한 뒤 다시 메모리로 보내는(Store) 왕복 구조다. AI 모델이 거대해질수록 이 데이터 이동에 필요한 전력이 연산 자체보다 더 커지는 **'메모리 월(Memory Wall)'** 문제가 심각해졌다.

📌 **AI 데이터센터 전력 현실**: 2026년 글로벌 AI 데이터센터의 연간 전력 소비는 약 460TWh로 추정된다. 70% 절감이 현실화되면 322TWh, 즉 ==한국 전체 연간 전력 소비량의 절반== 이상을 아낄 수 있다.

---

## 어떻게 동작하는가

연구진이 사용한 변형 하프늄 옥사이드는 인메모리 컴퓨팅(In-Memory Computing) 분야에서 오랫동안 주목받아 온 후보 소재다. 이번 연구의 핵심은 세 가지다.

1. **저장과 연산의 통합**: 별도의 메모리·연산 장치 없이 같은 셀에서 두 작업이 동시에 일어남
2. **아날로그 가중치 표현**: 기존 0/1 디지털이 아닌 연속적인 저항 변화로 신경망 가중치를 직접 표현
3. **저전력 동작**: 동일 작업 기준 GPU 대비 약 1/30 수준의 동작 전력

쉽게 비유하면 이렇다. 폰 노이만 구조가 "창고와 작업장을 매번 왕복하는 노동자"라면, 이 새 소자는 "창고 안에서 바로 작업하는 노동자"다. 이동 거리 자체를 없앤다.

> "AI의 진짜 한계는 알고리즘이 아니라 데이터 이동입니다. 같은 칩 안에서 메모리와 연산이 합쳐지면, 우리는 모델 크기가 아닌 효율로 경쟁하는 시대로 넘어갈 수 있습니다."
> — 연구 책임자, 사이언스데일리 인용 발언

---

## 한계와 상용화 전망

물론 한 편의 학술 논문이 곧바로 데이터센터를 바꾸지는 않는다. 현실적 장벽은 여전히 크다.

- **양산 공정**: 변형 HfO2 셀의 균일성 확보는 여전히 까다로운 난제
- **소프트웨어 스택**: 아날로그 가중치 기반 연산을 위한 컴파일러·프레임워크 부재
- **벤치마크 검증**: 실제 LLM 추론에서의 종단간 성능 검증은 초기 단계
- **기존 생태계**: CUDA·PyTorch·TensorRT에 익숙한 개발자 커뮤니티의 전환 비용

그럼에도 IBM·인텔·삼성 등 주요 칩 제조사들은 이미 인메모리 컴퓨팅 R&D 예산을 매년 늘리고 있다. 업계 일각에서는 "3~5년 내에 데이터센터 추론용 가속기 일부 영역에서 인메모리 칩이 GPU를 부분 대체할 것"이라는 전망이 나온다.

---

## 한국에 미치는 영향

### 1. ETRI·삼성·SK 진영의 추격

**한국전자통신연구원(ETRI)**은 자체 개발한 PIM(Processing-In-Memory) 아키텍처 'AB9'를 2024년 발표한 데 이어, 후속 모델을 준비 중이다. **삼성종합기술원**과 **삼성전자 메모리사업부**는 HBM-PIM(메모리 안에서 연산)을 일부 고객사 대상 샘플링하고 있고, **SK하이닉스**는 GDDR-PIM과 차세대 CXL 기반 메모리 풀링을 결합한 솔루션을 준비 중이다. 이번 연구는 이들 R&D에 추가 추진력을 제공한다.

### 2. 국내 AI 반도체 스타트업의 기회

**리벨리온**, **사피온**, **퓨리오사AI**, **딥엑스** 등 국내 NPU 스타트업은 엔비디아 GPU를 정면 대결하기 어려운 환경에서, **저전력·인메모리** 같은 차별화 영역을 승부처로 잡고 있다. 인메모리 컴퓨팅이 학계에서 산업계로 넘어오는 변곡점은, 이들에게 주류 경쟁의 새 라운드를 의미한다.

### 3. AI 전력 위기의 대안 카드

**한국전력공사(한전)**는 데이터센터 전력 수요 폭증으로 송전망 증설 압박을 받고 있다. **산업통상자원부**는 2030년까지 데이터센터 전력 수요가 현재의 3배에 달할 것으로 추정한다. 인메모리 칩이 상용화되어 단위 추론당 전력 소비를 낮춘다면, 한국이 직면한 **AI 전력 인프라 한계** 문제 자체가 완화될 수 있다.

---

## 인메모리 컴퓨팅 시장의 큰 그림

사이언스데일리가 다룬 단일 연구는 더 큰 흐름의 일부다. 글로벌 시장에서 인메모리 컴퓨팅은 다음과 같이 정렬되고 있다.

- **IBM Research**: PCM(상변화 메모리) 기반 아날로그 가속기 'NorthPole' 후속 연구 진행
- **인텔**: Loihi 시리즈 뉴로모픽 칩 차세대 모델 준비
- **삼성전자**: HBM-PIM·LPDDR-PIM 라인업 확장 중
- **SK하이닉스**: GDDR6-AiM 후속, CXL 메모리 풀링 결합 솔루션 개발
- **Mythic / Rain AI**: 미국 인메모리 AI 칩 스타트업, 데이터센터 추론 영역 공략

시장조사기관 욜(Yole)은 ==**2030년 인메모리/PIM 가속기 시장 규모를 약 350억 달러**==로 전망한다. GPU 시장의 일부를 잠식하는 것이 아니라, **데이터센터 추론(Inference)** 영역에서 새로 만들어지는 시장에 가깝다. AI 모델이 점점 추론 비중이 높아지는 구조라서, 이 영역의 칩 다변화는 사실상 기정사실이다.

특히 추론 워크로드는 학습과 달리 "한 번에 수백만 사용자에게 빠르게 응답해야 하는" 특성을 가진다. 응답 지연이 100ms 줄어들 때마다 사용자 만족도와 매출이 측정 가능한 수준으로 개선되는 분야다. 인메모리 칩이 단순 비용 절감을 넘어 **응답 품질 자체를 바꾸는 카드**로 평가받는 이유다.

💡 **주목할 포인트**: 70% 전력 절감이 "이론적 최대치"임을 잊지 말아야 한다. 실제 데이터센터 환경에서는 20~30% 절감만 실현돼도 게임 체인저다. AI 산업이 단순히 "더 큰 모델"이 아닌 "더 효율적인 칩"으로 경쟁하는 새로운 라운드가 열리고 있다.`},{id:"20260503163004",title:"OpenAI GPT-5.5 공개...MS 독점 깨고 AWS와도 손잡았다",summary:"OpenAI가 GPT-5.5를 공식 발표했다. 코딩·컴퓨터 사용·연구·에이전트 워크플로우에서 역대 최강 성능을 기록했다. 동시에 마이크로소프트와 맺었던 클라우드 독점 구조를 완화해 AWS를 통한 모델 배포가 시작됐다. AI 인프라 다변화로 단일 클라우드 의존 리스크가 해소되며 한국 기업들의 멀티클라우드 전략에도 직접 영향이 예상된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-03T16:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!1,content:`## GPT-5.5, '에이전트 시대' 선언

OpenAI가 4월 말 신모델 **GPT-5.5**를 공식 발표했다. 단순 버전 업이 아니다. **코딩(coding), 컴퓨터 사용(computer use), 심층 연구(research), 에이전트 워크플로우(agentic workflow)** 네 영역에서 일제히 역대 최강 성능을 기록했다는 게 OpenAI의 설명이다. 특히 SWE-bench Verified와 OSWorld 같은 실전 벤치마크에서 직전 GPT-5 대비 두 자릿수 점수 개선이 확인됐다.

GPT-5.5의 진짜 메시지는 "채팅"이 아니라 "실무 자동화"다. 모델이 사용자의 컴퓨터 화면을 인식하고, 직접 마우스·키보드를 조작하며, 멀티스텝 업무를 끝까지 마치는 능력에 자원을 집중했다. **OpenAI Operator**(에이전트 환경)와 **Codex CLI**(코딩 에이전트)가 GPT-5.5를 기본 백본으로 사용하기 시작했다.

📌 **포지셔닝 요약**: GPT-5.5는 "가장 똑똑한 챗봇"이 아니라 "가장 일을 잘 끝내는 디지털 동료"를 노린다. 평가 지표도 정확도 중심에서 ==과제 종료율(Task Completion Rate)== 중심으로 이동 중이다.

---

## 마이크로소프트 독점 구조의 균열

동시에 발표된 또 다른 뉴스는 인프라 구조 자체의 변화다. OpenAI는 마이크로소프트와 맺었던 **클라우드 독점적 우선 공급 구조**를 공식적으로 완화했다. 이로써 OpenAI 모델이 **AWS** 같은 다른 하이퍼스케일러를 통해서도 정식으로 배포될 수 있게 됐다.

변화의 의미를 정리하면 다음과 같다.

1. **인프라 다변화**: GPT-5.5 추론을 Azure에만 의존하던 구조에서 AWS·Oracle·CoreWeave까지 분산
2. **고객 선택권 확대**: 기업 고객이 자사 주력 클라우드(AWS·Azure·GCP)에서 OpenAI 모델을 동일하게 호출 가능
3. **MS 의존도 완화**: 마이크로소프트의 OpenAI 지분·우선권 가치는 유지되되, 추가 성장의 과실은 분산
4. **경쟁 구도 재편**: Anthropic이 AWS·Google과 깊이 결합된 상황에서, OpenAI도 멀티클라우드로 균형

> "AI는 더 이상 한 클라우드의 독점 자산이 아닙니다. 고객이 어디에서 데이터를 다루든 그곳에서 GPT-5.5를 부를 수 있어야 합니다. 그것이 우리가 그리는 '어디에나 있는 AI'의 의미입니다."
> — OpenAI 제품 책임자, 발표 라이브 키노트(요약)

---

## 시장 평가: 누가 이득을 보나

GPT-5.5와 클라우드 다변화의 조합은 사실상 다음 진영에 직접적인 이득을 준다.

- **AWS**: 그동안 Anthropic 의존도가 높았던 라인업에 OpenAI 카드 추가
- **엔터프라이즈 고객**: 클라우드 락인 부담을 줄이며 멀티 모델·멀티 클라우드 설계 가능
- **컨설팅·SI 업계**: 멀티클라우드+멀티모델 통합 구축 수요가 폭증
- **에이전트 SaaS 스타트업**: 컴퓨터 사용·코딩 능력 향상으로 자동화 제품 품질이 단숨에 올라감

반대로 **마이크로소프트 Azure**는 단기 매출 영향은 제한적이지만, '독점 파트너' 프리미엄이 약화된다는 평가가 나온다. 시장은 MS 주가에 즉각 반응하지 않았으나, 향후 몇 분기 매출 가이던스에서 그 영향이 드러날 전망이다.

---

## 한국에 미치는 영향

### 1. 국내 빅테크·SI의 멀티클라우드 전략 가속

**삼성SDS**, **LG CNS**, **SK C&C**는 그동안 OpenAI 모델 기반 솔루션을 구축할 때 사실상 Azure를 기본 전제로 두었다. AWS에서도 GPT-5.5를 직접 호출 가능해지면, 국내 SI들이 고객사의 기존 AWS 환경 위에 OpenAI 모델을 즉시 얹을 수 있다. 이는 **카카오엔터프라이즈**, **네이버클라우드** 같은 국내 클라우드 사업자에게는 추가 압박이다.

### 2. 핀테크·이커머스 — 컴퓨터 사용 에이전트의 실전 도입

GPT-5.5의 컴퓨터 사용 능력은 **토스**, **카카오페이**, **쿠팡**, **네이버 스마트스토어** 같은 핀테크·이커머스 운영 자동화에 직접 활용 가능하다. 백오피스에서 반복되는 정산·CS·재고 관리 업무에 에이전트가 들어오면, 운영 인력 구조 자체가 빠르게 재편될 가능성이 있다.

### 3. 데이터 주권·규제 이슈

멀티 클라우드는 편의성과 동시에 **데이터 주권** 이슈도 키운다. **개인정보보호위원회**는 OpenAI 모델이 AWS·Azure에서 이중 호출될 때 한국 개인정보가 어디 리전에서 처리되는지 추적·고지 의무를 강화하는 가이드라인을 검토 중이다. 금융권은 이미 "클라우드별 데이터 흐름도"를 의무 제출해야 하는 상황이다.

---

## GPT-5.5 벤치마크 — 어디서 진짜 강해졌나

OpenAI와 외부 평가자들이 공개한 주요 벤치마크 변화(GPT-5 대비):

- **SWE-bench Verified**(실전 코딩 수정): 약 ==**+12.4%p**== 개선
- **OSWorld**(컴퓨터 사용 에이전트): 약 +18%p
- **GPQA Diamond**(박사급 과학): 약 +5.6%p
- **τ-bench**(에이전트 멀티스텝): 약 +14%p
- **Long Context Recall(1M 토큰)**: 정확도 +9%p

특히 OSWorld·τ-bench 같이 **"실제 화면을 보고 일을 끝까지 마치는 능력"** 지표에서 두 자릿수 개선이 나온 점이 의미 있다. 단순 채팅 정확도보다 자동화 가능 업무의 폭이 확실히 넓어졌다는 뜻이다.

📌 **개발자 관점**: Codex CLI에서 GPT-5.5를 사용하는 경우, 단일 프롬프트로 끝나지 않는 **다단계 코드 마이그레이션·테스트·배포** 작업의 자동 완료율이 체감상 1.5~2배가 된다는 초기 사용자 후기가 다수 확인된다.

🎯 **주목할 포인트**: GPT-5.5는 단지 더 똑똑한 모델이 아니라, **"AI를 어디에 두느냐"**의 게임 룰을 바꿨다. 한국 기업들은 이제 "어떤 모델을 쓸까"가 아니라 **"어떤 클라우드+어떤 모델 조합을 쓸까"** 라는 더 복잡한 결정을 매 프로젝트마다 마주한다.`},{id:"20260503163005",title:'스탠퍼드 AI Index 2026 "한국 AI 모델 세계 3위"...수익 실현은 여전히 미국·중국 차지',summary:"스탠퍼드대 인간중심AI연구소(HAI)가 4월 13일 발표한 'AI 인덱스 2026'에서 한국이 'AI 모델' 부문 세계 3위로 평가됐다. 미국·중국에 이은 결과로 모델 출시 수와 품질에서 일본·유럽을 모두 앞섰다. 그러나 'AI 수익화'와 '피지컬 AI' 부문에서는 격차가 여전하다. 정부의 10조원 예산과 5대 국가대표(네이버·SKT·LG·NC·업스테이지) 컨소시엄의 다음 시험대가 다가왔다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-03T16:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",breaking:!1,content:`## 한국, 'AI 모델' 부문 세계 3위 진입

스탠퍼드대 인간중심AI연구소(Stanford HAI)가 4월 13일 발표한 ==**AI 인덱스 2026(AI Index 2026)**==에서 한국이 'AI 모델(AI Models)' 부문 ==**세계 3위**==로 평가됐다. 1위는 미국, 2위는 중국이며 일본·영국·프랑스·독일·캐나다 등 주요 AI 강국을 모두 앞선 결과다.

HAI 평가는 단순 '모델 수'만이 아니라 학술 인용·벤치마크 성능·산업 채택률·오픈소스 기여까지 종합한다. 한국이 3위를 차지한 것은 네이버 HyperCLOVA X, LG AI연구원 EXAONE, 카카오 KoGPT, NC AI VARCO, 업스테이지 Solar 등 다섯 개 자체 파운데이션 모델 라인업이 일제히 글로벌 벤치마크에서 '준 프론티어' 수준에 도달한 결과로 해석된다.

📌 **숫자로 본 한국 AI 위상**: 2026년까지 누적 정부 예산 ==10조 1,000억원==, 국가대표 5개 팀 별도 지원 2,000억원, 사상 첫 'AI 모델' 부문 세계 3위.

---

## 그러나 수익화·피지컬 AI는 여전히 미국·중국이 가져간다

AI Index 2026의 다른 부문에서는 한국의 한계도 동시에 드러났다.

- **AI 수익화(AI Revenue)**: 미국 압도적 1위, 중국 2위. 한국은 10위권 밖
- **피지컬 AI(Physical AI / 로봇)**: 미국·중국이 양강 구도, 한국은 일본과 함께 추격권
- **AI 컴퓨팅 인프라**: 미국이 독주, 중국 추격, 한국은 데이터센터 규모에서 한계
- **민간 AI 투자**: 미국 약 1,400억 달러, 한국은 100억 달러 미만 수준

특히 'AI 수익화' 격차는 뼈아프다. 모델은 만들 수 있지만 ==그 모델로 글로벌 매출을 일으키는 능력==에서는 OpenAI($30B+), Anthropic($30B+) 같은 미국 프론티어 랩과 격차가 갈수록 벌어진다. 한 보고서는 "한국은 HBM 80% 점유율을 가졌지만, AI 수익 사슬의 중심에는 없다"고 지적했다.

> "한국의 AI 모델 3위는 인상적인 성취입니다. 그러나 우리가 묻어야 할 진짜 질문은 '왜 한국 AI 모델이 글로벌 매출 차트에는 보이지 않는가' 입니다. 모델 품질과 사업 모델은 별개의 문제입니다."
> — 국내 AI 정책 전문가, 한 토론회 발언(요약)

---

## 다음 시험대 — 5대 국가대표 컨소시엄

과기정통부가 선정한 한국 AI 국가대표 5개 팀은 다음과 같다.

1. **네이버클라우드** — HyperCLOVA X 진영
2. **SK텔레콤** — 에이닷·국가 LLM 인프라
3. **LG AI연구원** — EXAONE
4. **NC AI** — VARCO 시리즈, 게임·창작 AI 강점
5. **업스테이지** — Solar, B2B SaaS·소형 모델 효율화

총 **2,000억원** 이상의 정부 지원이 이들에게 분배되며, 단순 R&D가 아니라 **상용화·수출** 성과가 평가 기준에 들어간다. 정부는 2026년 말까지 5개 팀의 글로벌 매출 비중·외부 인용도·해외 파트너십 등을 종합 점검할 예정이다.

---

## 한국에 미치는 영향

### 1. 정부 — '모델 만들기'에서 '시장 만들기'로 정책 축 이동

**과학기술정보통신부**는 이번 AI Index 결과를 토대로, 향후 정책 무게중심을 "파운데이션 모델 R&D"에서 "국가대표 5팀의 글로벌 시장 진출 지원"으로 이동시킬 계획이다. **중소벤처기업부**는 한국 AI 스타트업의 글로벌 진출 펀드(가칭 'K-AI 글로벌 펀드') 조성에 착수했다.

### 2. 국내 빅테크 — 자사 모델의 '존재 이유' 재정의

**네이버**는 검색·커머스·콘텐츠 통합 플랫폼에 HyperCLOVA X를 깊이 결합하는 전략을, **카카오**는 메신저·페이·모빌리티 데이터를 활용한 'kakao i' 전략을 가속화한다. **LG**는 EXAONE을 그룹 내 화학·바이오·전자 사업의 R&D 가속기로 활용해 "수직 통합형 AI" 사례를 만든다. 모델 자체보다 **"어떤 시장에서 모델로 돈을 벌 것인가"**가 핵심 질문이 됐다.

### 3. 인재·교육 — 글로벌 톱 컨퍼런스 논문 비율

NeurIPS·ICML·ICLR 같은 톱 컨퍼런스에서 한국 소속 1저자 논문 비율은 여전히 5% 미만이다. AI Index 3위 성과가 "제도와 자본의 결과"라면, 다음 단계의 점프는 **인재의 두께**에서 결정된다. **KAIST**, **서울대**, **포스텍** 등이 AI 박사 정원을 늘리고 있지만, 미국·중국과의 인재 쟁탈전은 갈수록 거칠어지고 있다. 미국 빅테크의 시니어 ML 리서처 평균 패키지(스톡 포함)가 100만 달러를 넘는 현실에서, 국내 기업과 학계가 어느 수준의 보상·연구 자율성을 제공할 수 있느냐가 다음 5년의 분수령이 된다.

---

## AI Index 2026 부문별 한국 순위 요약

HAI 보고서에서 한국이 받은 핵심 점수를 정리하면 다음과 같다.

1. **AI 모델 출시·품질**: ==세계 3위== (미국·중국 다음)
2. **민간 AI 투자 규모**: 10위권 (미국 1위, 중국 2위)
3. **AI 수익화·매출**: 10위권 밖 (미국 압도적 1위)
4. **AI 인재 확보·유지**: 6~8위 (미·중·영·캐 우위)
5. **AI 인프라(데이터센터)**: 10위권 후반
6. **AI 정책·거버넌스**: 상위권 (인공지능기본법 1월 시행)
7. **피지컬 AI/로봇**: 6~8위 (미·중 양강, 일본과 추격권)

📌 **모순적 지점**: 한국은 ==**"모델은 잘 만드는데, 매출은 안 나는"**== 구조에 가깝다. 일본은 정반대로 "모델은 약한데, 산업 응용 매출은 높은" 구조다. 한국이 일본형 약점(수익화)에 더해 일본형 강점(피지컬 AI·산업 응용)을 살리지 못하는 시나리오가 가장 위험하다. 모델 점수만 좋고 산업 매출도 약하면, 다음 인덱스에서 순위가 빠르게 미끄러질 수 있다는 경고가 나오는 이유다.

✅ **주목할 포인트**: '세계 3위'는 한국 AI에게 큰 자신감이지만, 동시에 매우 위험한 안도감이기도 하다. 진짜 기준은 순위가 아니라 **"한국 AI로 만든 글로벌 매출"**이다. 이 지표가 의미 있게 움직이지 않는 한, 3위라는 숫자는 5위·7위로 다시 내려앉을 수 있다.`},{id:"20260424083001",title:"SK하이닉스, 영업이익률 72% '역대 최대'...1분기 매출 52.6조 비수기에 터진 신화",summary:"SK하이닉스가 2026년 1분기 매출 52조 5,763억원·영업이익 37조 6,103억원(영업이익률 72%)을 기록하며 창사 이래 최대 실적을 달성했다. 전년 동기 대비 매출 +198%, 영업이익 +405%로, 계절적 비수기임에도 HBM·서버 D램·eSSD 수요가 폭발했다. 하반기 HBM4E 샘플 공급과 2027년 양산 계획도 발표해 AI 반도체 초호황의 지속을 예고했다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-24T08:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800",breaking:!0,content:`## 비수기에 터진 '역대 최대' 신화

SK하이닉스가 4월 23일 2026년 1분기 경영실적을 발표했다. 숫자들이 말한다. 매출 **52조 5,763억원**, 영업이익 **37조 6,103억원**, ==영업이익률 **72%**==, 순이익 **40조 3,459억원**(순이익률 77%). 창사 57년 만에 처음으로 분기 매출 50조원을 돌파했으며, 영업이익률 72%는 종전 최고치(2025년 4분기 58%)를 단숨에 14%p 뛰어넘은 수치다.

이것이 더 놀라운 이유는 **1분기가 반도체 업계의 전통적 비수기**이기 때문이다. 스마트폰·PC 소비가 줄어드는 1월~3월에 이런 실적을 낸다는 것은 AI 인프라 수요가 계절 주기를 완전히 압도하고 있다는 증거다.

📌 **전년 대비 성장폭**: 매출 +198%(약 3배), 영업이익 +405%(약 5배). 2023년 같은 기간 SK하이닉스는 대규모 적자를 기록했다. 3년 만의 역전 드라마다.

---

## 무엇이 이 실적을 만들었나

### HBM의 폭발적 수요

실적의 핵심 엔진은 **고대역폭메모리(HBM)**다. SK하이닉스는 엔비디아 H200·B200에 들어가는 HBM3E의 사실상 독점 공급자다. AI 데이터센터 구축이 전 세계적으로 가속화되며 HBM 수요가 공급을 압도하고 있다.

- **HBM 시장 점유율**: SK하이닉스 약 **60~65%** (2026년 1분기 추정)
- **HBM 매출 비중**: 전체 매출의 약 **45%** 수준
- **공급 부족 지속**: SK하이닉스 CFO는 "향후 3년간 고객 요청 수요가 공급 캐파를 훨씬 상회한다"고 밝혔다

### 서버 D램과 eSSD

HBM 외에도 **고용량 서버 D램 모듈**과 **eSSD(엔터프라이즈 SSD)** 판매 확대가 실적을 뒷받침했다. OpenAI, Anthropic, Google, Microsoft의 대규모 클러스터 구축은 HBM뿐 아니라 시스템 전체의 메모리·스토리지 수요를 끌어올린다.

> "향후 3년 동안 고객들이 요청하는 수요는 이미 당사 공급 캐파를 훨씬 상회하는 수준입니다. 공급을 최대한 늘려도 수요를 따라잡기 어렵습니다."
> — SK하이닉스 CFO, 1분기 실적 컨퍼런스콜

---

## HBM4E: 다음 성장 엔진 이미 준비됐다

SK하이닉스는 이번 실적 발표와 함께 **HBM4E**의 하반기 샘플 공급과 2027년 양산 계획을 공식화했다. HBM 세대별 로드맵:

1. **HBM3E**: 현재 양산 중, 엔비디아 B200·Vera Rubin 탑재
2. **HBM4**: 2026년 하반기 대량 양산 진입
3. **HBM4E**: 2026년 하반기 샘플 공급 → 2027년 양산
4. **HBM5**: 2028년 목표 (3나노 로직 기반 성능 도약)

HBM4E는 현재 검토 중인 **3나노 로직 공정** 적용을 통해 기존 HBM4 대비 대역폭을 50% 이상 개선할 것으로 기대된다. 이를 통해 엔비디아의 2027~2028년 AI 가속기(코드명 'Feynman')에 독점 탑재를 목표로 하고 있다.

---

## 한국에 미치는 영향

### 1. 코스피와 반도체 생태계 수혜

이번 실적 발표 직후 **SK하이닉스 주가**는 장 초반 3.2% 급등해 장중 역대 최고가를 경신했다. 반도체 장비 협력사인 **원익IPS**, **테스**, **피에스케이** 등도 동반 강세를 보였다. **코스피** 지수는 AI 반도체 호재를 반영해 6,400선을 돌파하며 역대 최고치를 기록했다.

### 2. 삼성전자와의 격차 확대

삼성전자 DS(반도체) 부문은 HBM3E 품질 인증 지연으로 엔비디아 공급에서 여전히 제한적이다. SK하이닉스의 72% 영업이익률은 삼성 DS 부문(추정 45~50%)을 크게 앞선다. 이번 실적은 삼성전자 경영진에게 HBM4 인증 가속화 압박을 더욱 강화할 것이다.

### 3. 세수 효과와 정부 정책

**기획재정부**는 SK하이닉스의 역대 최대 법인세 납부(추정 연간 10조원 이상)를 토대로 반도체 산업 지원 예산 확대를 검토 중이다. **산업통상자원부**는 용인 반도체 클러스터 인프라(전력·용수) 조기 구축을 위한 규제 특례 패스트트랙을 적용하기로 했다.

⚡ **주목할 포인트**: SK하이닉스의 72% 영업이익률은 글로벌 제조업 역사상 전례 없는 수준이다. AI 인프라 투자 사이클이 2027~2028년까지 지속된다면 이 실적이 '예외'가 아닌 '기준'이 될 수도 있다.`},{id:"20260424083002",title:"구글 클라우드 넥스트 2026: A2A 프로토콜 150개 기업 실전 운영, Vertex AI 전면 개편",summary:"4월 22일 라스베이거스에서 열린 Google Cloud Next 2026에서 구글이 에이전트 AI 전략을 전면 공개했다. A2A(Agent2Agent) 프로토콜이 버전 1.2로 업그레이드되며 Linux Foundation 산하로 이관됐고, 150개 기업이 실제 업무에 운영 중이다. Vertex AI는 'Gemini Enterprise Agent Platform'으로 통합 개편돼 OpenAI, Anthropic에 정면 도전장을 냈다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-04-24T08:30:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",breaking:!0,content:`## 라스베이거스에서 선언한 '에이전트 AI 시대'

4월 22일(현지시각) 구글이 라스베이거스 컨벤션센터에서 Google Cloud Next 2026을 개막했다. 순다르 피차이 CEO를 비롯한 구글 최고 경영진이 총출동해 에이전트 AI 전략의 전모를 공개했다. 발표의 핵심은 단순 모델 업그레이드가 아니라 **AI 에이전트들이 서로, 그리고 기업 시스템과 소통하는 인프라 전체를 구글이 장악하겠다는 야망**이었다.

이번 발표는 특히 OpenAI의 ChatGPT Enterprise, Anthropic의 Claude for Work와 정면 충돌하는 직접 경쟁 선언이기도 하다. 구글은 클라우드 인프라(GCP), AI 모델(Gemini), 에이전트 프레임워크(ADK), 에이전트 통신 프로토콜(A2A)까지 풀스택을 모두 장악함으로써 경쟁사가 따라오기 힘든 해자를 구축하려 한다.

📌 **행사 규모**: 약 35,000명 참석, 전 세계 스트리밍 시청 500만명 이상. 지난해 대비 참석자 수 40% 증가.

---

## A2A 프로토콜 v1.2: 에이전트 간 '공용어' 표준화

가장 큰 발표는 **Agent2Agent(A2A) 프로토콜**의 대규모 업그레이드다.

### A2A란 무엇인가

Anthopic의 MCP(Model Context Protocol)가 **에이전트와 도구·데이터 소스의 연결**을 담당한다면, A2A는 **서로 다른 플랫폼에 구축된 에이전트들 사이의 통신**을 담당한다. 예를 들어:

- Salesforce Agentforce로 만든 영업 에이전트가 A2A를 통해
- Google Vertex AI의 재고 에이전트에 발주 요청을 보내고
- SAP 시스템의 공급망 에이전트가 이를 처리하는 구조

세 플랫폼이 서로의 내부 구조를 전혀 몰라도 A2A 프로토콜 하나로 통신이 가능하다.

### v1.2 업그레이드 주요 내용

1. **암호화된 에이전트 카드(Signed Agent Cards)**: 도메인 검증용 암호화 서명으로 에이전트 신원 위조 방지
2. **거버넌스 이관**: Linux Foundation 산하 'Agentic AI Foundation'으로 중립적 거버넌스 확립
3. **실전 확산**: ==**150개 기업이 A2A를 실제 업무에 운영 중**==
4. **플랫폼 지원**: Microsoft, AWS, Salesforce, SAP, ServiceNow가 A2A를 프로덕션 환경에 도입
5. **프레임워크 지원**: LangGraph, CrewAI, LlamaIndex Agents, Semantic Kernel, AutoGen에 네이티브 통합

> "A2A는 에이전트 세계의 HTTP입니다. 웹이 서로 다른 서버들을 하나로 연결했듯, A2A는 서로 다른 AI 에이전트들을 하나의 작업 흐름으로 연결합니다."
> — 순다르 피차이(Sundar Pichai), Google CEO, Cloud Next 2026 키노트

---

## Vertex AI → Gemini Enterprise Agent Platform

구글은 이번 행사에서 **Vertex AI를 'Gemini Enterprise Agent Platform'으로 전면 리브랜딩**했다. 단순 명칭 변경이 아니다. Agentspace(에이전트 검색·관리), NotebookLM Enterprise, Google Workspace AI 기능이 모두 하나의 플랫폼으로 통합됐다.

주요 신기능:

- **Workspace Studio**: Gmail, Docs, Sheets, Meet를 아우르는 자연어 기반 업무 자동화 에이전트 빌더
- **에이전트 인박스**: AI 에이전트들이 완료한 작업과 진행 상황을 보고하는 전용 대시보드
- **멀티모달 에이전트**: 텍스트·이미지·음성·코드를 동시에 처리하는 통합 에이전트 환경
- **비용 추적 대시보드**: 에이전트가 실행한 작업별 토큰 비용·시간·성공률을 실시간 모니터링

---

## 한국에 미치는 영향

### 1. 국내 IT 서비스 기업의 에이전트 전환

**삼성SDS**는 Google Cloud 공식 파트너로 Cloud Next 발표 내용을 국내 고객사에 적용하는 로드맵을 즉시 수립 중이다. **LG CNS**, **SK텔레콤**, **KT**도 Gemini Enterprise Agent Platform 기반 엔터프라이즈 에이전트 파일럿 프로젝트를 올해 하반기 시작할 예정이다. 특히 제조·금융·물류 분야에서 A2A 기반 에이전트 자동화 도입이 빠르게 확산될 전망이다.

### 2. 국내 MCP vs A2A 생태계 경쟁

KAKAO, 네이버 클라우드, 토스뱅크 등이 Anthropic의 MCP를 기반으로 에이전트를 구축한 반면, 삼성SDS·LG CNS 등은 Google A2A 진영과 파트너십을 강화 중이다. A2A가 Linux Foundation으로 이관돼 중립적 표준이 되면, **한국 기업들도 MCP↔A2A 연동 브릿지**를 구축해 두 생태계 모두를 지원해야 하는 국면이 올 수 있다.

### 3. 클라우드 시장 점유율 재편

한국 클라우드 시장(2026년 추정 12조원)에서 AWS가 1위, Azure 2위, GCP 3위 구도가 이어지고 있다. Google Cloud Next의 에이전트 AI 발표 이후, GCP의 국내 영업팀은 대기업·금융권 대상 AI 에이전트 플랫폼 영업을 전면 강화할 것으로 예상된다.

⚡ **주목할 포인트**: A2A의 Linux Foundation 이관은 중요한 신호다. 구글이 이 프로토콜을 '자사 독점 표준'이 아닌 '오픈 인터넷 표준'으로 밀겠다는 의지다. 이는 A2A가 에이전트 시대의 TCP/IP가 될 수 있다는 구글의 장기 판단을 반영한다.`},{id:"20260424083003",title:"Anthropic 연매출 $30B 돌파...3개월 만에 3배 성장, Google TPU 3.5GW 초대형 딜",summary:"Anthropic이 연환산 매출(run-rate revenue) 300억 달러(약 39조원)를 돌파했다. 2025년 말 약 90억 달러에서 불과 3개월 만에 3배 이상 성장한 수치다. 동시에 Google·Broadcom과 3.5기가와트 규모의 컴퓨팅 용량 공급 계약을 체결해 2027년부터 역대 최대 규모의 AI 인프라를 확보한다. 연간 100만 달러 이상 결제 기업 고객이 1,000개를 돌파했다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-24T08:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!1,content:`## $9B에서 $30B으로, 3개월의 기적

Anthropic이 4월 초 공식 발표한 수치는 업계를 경악하게 만들었다. 2025년 말 연환산 매출 약 **90억 달러(약 11.7조원)**였던 Anthropic의 run-rate가 ==**300억 달러(약 39조원)**==를 돌파했다. 불과 3개월 만에 **3배 이상 성장**한 것이다.

이는 SaaS 역사상 가장 빠른 매출 성장 중 하나다. Anthropic은 2023년 초 연매출 약 1억 달러에서 시작해, 2026년 1분기 기준 누적 성장 300배를 기록하며 AI 인프라 수요의 폭발성을 가장 직접적으로 보여주는 사례가 됐다.

💡 **run-rate란**: 가장 최근 월(또는 분기) 매출을 연간으로 환산한 수치. 실제 연간 매출 확정치가 아니라 현재 성장 모멘텀을 반영하는 지표다.

---

## Claude 엔터프라이즈: 1,000개 기업이 연간 $1M+ 결제

AnthropicCEO 다리오 아모데이(Dario Amodei)가 공개한 고객 데이터도 인상적이다.

- **연간 100만 달러 이상 결제 기업**: **1,000개** 돌파 (2개월 전 500개에서 2배)
- **총 엔터프라이즈 고객**: 공개하지 않았지만 수만 개 추정
- **주요 고객사**: AWS, Salesforce, Accenture, McKinsey, Goldman Sachs, Pfizer, Boeing
- **Claude 하루 처리량**: 수십억 건의 API 요청

성장의 핵심 동력은 **Claude for Work**와 **Claude Code**다. Claude Code는 깃허브 코파일럿·커서의 강력한 경쟁자로 부상했으며, 특히 Fortune 500 기업의 소프트웨어 개발팀에서 빠른 속도로 채택되고 있다.

> "두 달 만에 연간 100만 달러 이상 결제 기업 고객이 500개에서 1,000개로 두 배가 됐습니다. 이 가속도가 계속된다면 올해 안에 2,000개가 넘을 것입니다."
> — 다리오 아모데이(Dario Amodei), Anthropic CEO

---

## Google·Broadcom과 역대 최대 컴퓨팅 딜

Anthropicは매출 성장과 함께 미래 인프라도 단단히 확보했다. Google의 TPU(텐서 처리 장치) 제조사인 **Broadcom**이 Anthropic과 확장 계약을 체결했다.

계약 내용:

1. **1단계 (기진행)**: 구글 TPU 기반 **1기가와트** 컴퓨팅 용량 — 이미 2026년 초부터 공급 중
2. **2단계 (신규)**: **3.5기가와트** 추가 컴퓨팅 용량 — 2027년부터 공급 시작
3. **총 확보 규모**: 2027년 기준 총 **4.5기가와트** (데이터센터 수십 개 규모)

3.5기가와트가 어느 정도 규모인지 감이 오지 않는다면: 서울 전체 가정용 전력 소비량의 약 2배에 달하는 규모다. 이는 ChatGPT를 훈련시키는 데 사용된 인프라의 **수십 배**에 해당한다.

- **TPU vs GPU**: 구글의 TPU는 엔비디아 GPU 대비 에너지 효율에서 우위를 주장. Anthropic은 엔비디아 의존도를 줄이며 인프라 비용 구조를 개선하는 전략
- **파트너십 심화**: Anthropic→Google 클라우드 고객 유입, Google→Anthropic 기술 마케팅 상호 시너지

---

## 한국에 미치는 영향

### 1. 카카오·네이버·SK텔레콤의 Claude 의존도

**카카오**는 kakao i 엔터프라이즈를 통해 Claude API를 다수 서비스에 통합 중이며, **SK텔레콤**은 AI 어시스턴트 '에이닷(A.)'에 Claude를 핵심 추론 엔진으로 활용하고 있다. Anthropic의 급성장은 이들의 API 비용 협상력에 영향을 미칠 수 있다 — 단가 인하를 기대했던 기업들은 반대 압력을 받을 가능성도 있다.

### 2. 국내 AI 기업 비교 압박

Anthropicの$30B run-rate는 **네이버** 연간 매출(약 11조원)의 3배를 넘는다. 국내 AI 생태계가 '응용 서비스' 레이어에 집중하는 동안, 글로벌 프론티어 기업들은 수십조원 단위의 컴퓨팅 딜로 격차를 더욱 벌리고 있다. **과학기술정보통신부**는 K-AI 기초모델 지원 예산의 규모와 효율성을 재검토해야 하는 압박에 놓여 있다.

### 3. 한국 투자자 시각

**미래에셋**, **한국투자증권**, **KB증권** 등 국내 주요 증권사들은 Anthropic을 2026~2027년 글로벌 테크 IPO 최대 관심 종목으로 분류하기 시작했다. 현재는 비상장이지만, 기업가치 **최소 $150B(약 200조원)** 이상으로 평가받는 Anthropic의 IPO가 현실화되면 국내 기관투자자들의 직접 투자 기회가 열린다.

⚡ **주목할 포인트**: Anthropic의 $30B run-rate는 AI 업계의 수익화가 '가능성'에서 '현실'로 전환됐음을 증명한다. 하지만 3.5GW 컴퓨팅 딜은 이 수익을 유지·성장시키기 위한 지출 규모도 천문학적임을 의미한다. AI 산업에서 살아남으려면 규모의 경제가 필수다.`},{id:"20260424083004",title:"도요타 '위븐시티 AI 비전 엔진' 공개...실제 도시가 피지컬 AI 실험실 된다",summary:"도요타와 Woven by Toyota가 4월 22일 일본 시즈오카의 위븐시티(Woven City)에서 AI Vision Engine을 공개했다. 세계 최고 수준의 비전 언어 모델(VLM)로, 도시 전체의 카메라·모빌리티·로봇 피드를 실시간 처리해 자율주행·로봇 배달·안전 예측을 수행한다. 중국 피지컬 AI 기업들과의 경쟁이 가열되는 가운데 일본이 실제 운영 도시를 AI 실험실로 활용하는 선제적 전략을 발표했다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-04-24T08:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",breaking:!1,content:`## 실제 도시가 AI의 운동장이 됐다

2021년 착공, 2025년 거주자 입주를 시작한 일본 시즈오카 현 스소노시의 **위븐시티(Woven City)**. 도요타가 자사 공장 부지에 조성한 이 '살아있는 실험 도시'가 4월 22일 세계 최초의 도시 규모 피지컬 AI 테스트베드로 공식 업그레이드됐다.

도요타와 Woven by Toyota는 이날 **AI Vision Engine**과 **AI ANZEN System**을 동시 공개했다. AI Vision Engine은 위픈시티 전역에 설치된 카메라, 자율주행 차량, 배달 로봇, 보행자 센서에서 쏟아지는 영상·데이터를 실시간으로 처리하는 대규모 비전 언어 모델(VLM)이다.

📌 **규모**: 위픈시티는 700명 이상의 거주자와 수백 명의 연구원이 실제로 생활하는 환경이다. 통제된 실험실이 아닌 **실제 생활 데이터**를 기반으로 AI를 훈련·검증한다는 점이 핵심 경쟁력이다.

---

## AI Vision Engine: 기술 상세

### 핵심 기능

도요타는 Woven City AI Vision Engine이 **세계 최고 수준의 VLM 중 하나**라고 주장한다. 주요 기능:

- **실시간 위험 탐지**: 보행자 이상 행동, 교통 상충 상황, 낙상·사고 징후를 밀리초 단위로 감지
- **패턴 예측**: 특정 시간대·날씨 조건에서의 교통 흐름, 에너지 사용 패턴을 3시간 전 예측
- **크로스 시스템 조율**: 자율주행 차량↔배달 로봇↔스마트 건물 시스템이 A2A 기반으로 협력
- **멀티모달 처리**: 카메라 영상 + 라이다 + 기상 센서 + 사용자 일정 데이터를 통합 처리

### AI ANZEN System

'ANZEN(安全, 안전)'은 Vision Engine 위에 구축된 통합 안전 레이어다. Behavior AI(행동 예측)와 Drive Sync Assist(차량-보행자-로봇 통합 조율)를 결합해 위픈시티 내 모든 이동 주체의 충돌을 사전에 방지한다.

> "위픈시티는 단순한 쇼케이스 도시가 아닙니다. 우리는 실제 사람들이 살고, 실제 자동차와 로봇이 움직이는 환경에서 AI를 검증합니다. 이것이 시뮬레이션이나 폐쇄 테스트트랙과 근본적으로 다른 점입니다."
> — 다이스케 도요다(Daisuke Toyoda), Woven by Toyota CEO

---

## 중국 피지컬 AI와의 경쟁 맥락

이 발표는 피지컬 AI 분야에서 중국과의 경쟁이 가열되는 시점에 나왔다. **Unitree**, **DEEP Robotics**, **Figure AI의 중국 경쟁사들**이 휴머노이드 로봇 분야에서 빠르게 치고 올라오고 있으며, **화웨이**는 스마트시티 AI 플랫폼을 60개국 이상에 수출 중이다.

도요타-위픈시티 전략의 차별점은:

1. **실제 데이터**: 시뮬레이션이 아닌 실제 거주 환경 데이터
2. **검증 환경**: 규제 샌드박스가 적용된 합법적 테스트베드
3. **생태계 구축**: Joby Aviation(에어택시), AI Robot Association(서비스 로봇), Toyota Financial Services(모빌리티 금융)가 위픈시티 '발명가'로 참여

---

## 한국에 미치는 영향

### 1. 현대차그룹의 피지컬 AI 전략 가속

**현대차그룹**은 보스턴다이내믹스 인수 이후 휴머노이드 로봇 'Atlas'와 자율주행 플랫폼 'Motional'을 보유하고 있다. 위픈시티 발표는 현대차에게 자체 '살아있는 실험 도시' 구축의 필요성을 자극한다. 현대차가 계획 중인 **'씽크바이오스피어'(싱가포르 스마트시티 파트너십)**와 **화성 자율주행 테스트베드**가 위픈시티 모델을 벤치마크할 전망이다.

### 2. 삼성전자·LG전자 로봇 사업

**삼성전자**의 가정용 로봇 'Ballie 2.0'과 **LG전자**의 상업용 서비스 로봇 'CLOi'가 도시 규모 AI 시스템과 통합되는 방향으로 진화해야 한다. 위픈시티 AI Vision Engine처럼 도시 인프라와 연결된 VLM이 상용화되면, 한국 기업들의 로봇도 이에 호환되는 통신 프로토콜과 API를 갖춰야 한다.

### 3. 국내 스마트시티 정책 시사점

**세종시 스마트시티 국가시범도시**, **부산 에코델타시티** 등 국내 스마트시티 프로젝트들이 위픈시티의 '실제 운영 AI 실험실' 모델을 참고할 것으로 보인다. **국토교통부**는 올해 하반기 스마트시티 AI 통합 플랫폼 국제 표준안 마련에 일본·싱가포르와 공동 작업하는 방안을 검토 중이다.

⚡ **주목할 포인트**: 위픈시티의 진짜 의미는 기술 시연이 아니다. 도시 전체를 AI 데이터 수집·검증 기지로 운영한다는 것은, AI 기업에게 필요한 가장 희귀한 자원인 '실제 세계 데이터'를 도요타가 독점하기 시작한다는 뜻이다.`},{id:"20260424083005",title:"코스피 사상 첫 6400 돌파...SK하이닉스 역대 실적에 한국 증시 역사 다시 썼다",summary:"4월 23일 코스피가 6,417.93으로 사상 처음 6,400선을 돌파했다. SK하이닉스의 역대 최대 실적 발표와 미중 AI 반도체 패권 경쟁에서 한국이 최대 수혜를 받고 있다는 분석이 맞물린 결과다. 금융투자업계는 AI 반도체 초호황 사이클이 2027년까지 지속된다면 코스피 7,000선도 현실화될 수 있다고 전망한다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-04-24T08:30:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",breaking:!1,content:`## 코스피 6,417.93: 새 역사가 쓰였다

4월 23일 코스피 지수가 ==**6,417.93**==으로 장을 마감하며 사상 처음 6,400선을 넘어섰다. 전일 대비 **128.4포인트(+2.04%)** 상승한 이 수치는 2023년 2,200대였던 코스피가 3년 만에 **약 2.9배** 오른 결과다.

이 상승의 중심에 **SK하이닉스**가 있었다. 이날 발표된 1분기 실적(영업이익률 72%, 사상 최대)이 장 초반부터 반도체 섹터 전체를 끌어올렸다. SK하이닉스 주가는 당일 **+4.7%** 상승해 장중 역대 최고가를 기록했다.

🎯 **지수 레벨 해석**: 코스피 6,400은 한국 증시의 PBR(주가순자산비율)이 드디어 글로벌 평균에 근접했음을 의미한다. 오랫동안 '코리아 디스카운트'로 불리던 저평가 구조가 AI 반도체 수혜로 해소되기 시작한 것이다.

---

## 상승을 이끈 주요 종목

이날 코스피 상승에 기여한 주요 종목들:

- **SK하이닉스**: +4.7%, 장중 역대 최고가 경신
- **삼성전자**: +1.8%, HBM4 인증 기대감 반영
- **한미반도체**: +6.2%, HBM 본딩 장비 수주 기대
- **원익IPS**: +5.1%, SK하이닉스 공정 장비 수혜
- **이오테크닉스**: +4.3%, 레이저 어닐링 장비 수요 급증
- **현대차**: +2.1%, 피지컬 AI·로봇 사업 기대감
- **LG에너지솔루션**: +1.4%, AI 데이터센터 전력 수요 간접 수혜

반면 내수 소비재·금융 섹터는 상대적으로 부진해, 이번 랠리가 **AI 반도체 테마에 집중된 선택적 상승**임을 보여줬다.

> "미중 AI 경쟁이 격화될수록 한국 반도체가 최대 수혜를 받는 구조입니다. 미국이 중국에 반도체 수출 규제를 가하면 중국은 대안을 찾고, 한국은 미국 AI 기업들의 필수 공급자로서 양쪽 모두에서 수요를 받습니다."
> — 파이낸셜뉴스 서울국제A&D컨퍼런스 발표 애널리스트

---

## 코스피 7,000, 현실화될까

주요 증권사의 코스피 연말 목표치:

1. **삼성증권**: 6,800 (기본 시나리오), 7,200 (강세 시나리오)
2. **미래에셋증권**: 6,900 (반도체 수출 증가율 30% 이상 지속 가정)
3. **KB증권**: 6,600~7,000 (하반기 환율 안정 조건)
4. **신한투자증권**: 6,700 (미국 금리 인하 1~2회 반영)

공통된 상승 근거는 **AI 반도체 초호황 사이클의 지속성**이다. SK하이닉스·삼성전자의 HBM 수주 잔고가 2027년까지 꽉 차 있다는 점, 엔비디아의 Vera Rubin·Feynman 플랫폼 로드맵이 HBM 수요를 2028년까지 보장한다는 점이 핵심 근거다.

---

## 한국에 미치는 영향

### 1. 국민연금과 개인투자자 자산 효과

코스피 6,400 돌파는 **국민연금(NPS)** 포트폴리오에도 직접적인 플러스다. NPS는 국내 주식에 약 16% 비중을 유지하고 있으며, 코스피 1%p 상승 시 NPS 자산가치는 약 1.5조원 증가하는 것으로 추정된다. 개인 투자자들의 직접 투자 자산과 퇴직연금·개인연금 계좌 수익률도 함께 높아지는 효과가 있다.

### 2. 기업 IPO·유상증자 여건 개선

증시 활황은 국내 AI·반도체 관련 기업들의 IPO 환경도 좋게 만든다. 2026년 하반기 상장을 준비 중인 **파두**(AI 반도체 설계), **리벨리온**(NPU), **사피온**(SKT 자회사) 등 국내 AI 칩 스타트업들이 시장 활황의 수혜를 받을 전망이다. 코스피 6,400 수준에서의 밸류에이션은 이들 기업에게 더 높은 공모가 협상력을 부여한다.

### 3. 외국인 자금 유입 지속 여부

이번 코스피 랠리는 외국인 순매수가 주도했다. 연초 이후 외국인은 코스피에서 약 **28조원** 순매수를 기록했다. 달러 강세가 완화되고 미 연준의 금리 인하 기대가 높아지면 외국인 매수세가 더 강화될 수 있다. 반면 지정학적 리스크(중동·대만해협)가 급격히 악화될 경우 한국 증시가 취약한 편이라는 점은 리스크 요인이다.

⚡ **주목할 포인트**: 코스피 6,400은 '버블'이 아니다. SK하이닉스의 72% 영업이익률이라는 실적이 뒷받침하는 상승이다. 그러나 반도체 업황이 언제든 꺾일 수 있는 사이클 산업임을 기억해야 한다. AI 수요 사이클의 지속성을 지속적으로 모니터링하는 것이 현명한 투자자의 자세다.`},{id:"20260423090001",title:"Anthropic 'Claude Mythos 5' 공개...인류 최초 10조 파라미터 AI 모델 탄생",summary:"Anthropic이 4월 22일(현지시각) Claude Mythos 5를 공식화하며 인류 최초 10조 파라미터 AI 모델이 탄생했다. 혼합전문가(MoE) 아키텍처로 실제 추론 비용은 1조 파라미터 수준이나, ARC-AGI-2 등 모든 주요 벤치마크에서 역대 최고 성능을 기록했다. 사이버보안 역량 논란으로 약 50개 기업 대상 'Project Glasswing' 클로즈드 프리뷰로만 제공된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-04-23T09:00:00+09:00",readTime:"6분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!0,content:`## 10조 파라미터, AI 역사의 새 장

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

스마트팩토리 전환을 추진하는 국내 중견 제조업체들에게는 Isaac Sim 기반 시뮬레이션이 실제 공장 라인 가동 전 로봇을 사전 검증하는 비용 효율적 대안이 될 수 있다. 정부 주도의 AI·로봇 R&D 예산이 확대되는 지금, NVIDIA 에코시스템에 조기 진입하는 국내 스타트업들의 경쟁력이 중장기적으로 부각될 전망이다.`}],Jp={articles:Yp},Zp="a]",Rs="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";let Io=!1;const u0=()=>Io?!0:typeof window.Kakao>"u"?(console.error("Kakao SDK not loaded"),!1):(window.Kakao.isInitialized()||window.Kakao.init(Zp),Io=window.Kakao.isInitialized(),Io),qp=()=>new Promise((e,n)=>{if(!u0()){e({success:!0,user:{id:"kakao_demo_"+Date.now(),name:"카카오 사용자",email:"demo@kakao.com",avatar:null,provider:"kakao"},isDemo:!0});return}window.Kakao.Auth.login({success:t=>{window.Kakao.API.request({url:"/v2/user/me",success:r=>{var l,o,i,a,s;e({success:!0,user:{id:"kakao_"+r.id,name:((o=(l=r.kakao_account)==null?void 0:l.profile)==null?void 0:o.nickname)||"카카오 사용자",email:((i=r.kakao_account)==null?void 0:i.email)||null,avatar:((s=(a=r.kakao_account)==null?void 0:a.profile)==null?void 0:s.profile_image_url)||null,provider:"kakao"}})},fail:r=>{n({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}})},fail:t=>{t.error==="access_denied"?n({success:!1,error:"로그인이 취소되었습니다."}):n({success:!1,error:"카카오 로그인에 실패했습니다."})}})}),em=()=>new Promise(e=>{if(!u0()||!window.Kakao.Auth.getAccessToken()){e({success:!0});return}window.Kakao.Auth.logout(()=>{e({success:!0})})});let js=!1;const nm=()=>new Promise(e=>{if(js){e(!0);return}if(typeof window.google>"u"||!window.google.accounts){console.error("Google SDK not loaded"),e(!1);return}js=!0,e(!0)}),tm=()=>new Promise(async(e,n)=>{if(!await nm()||Rs.includes("YOUR_GOOGLE")){e({success:!0,user:{id:"google_demo_"+Date.now(),name:"Google 사용자",email:"demo@gmail.com",avatar:null,provider:"google"},isDemo:!0});return}try{window.google.accounts.oauth2.initTokenClient({client_id:Rs,scope:"email profile",callback:async l=>{if(l.error){n({success:!1,error:"구글 로그인에 실패했습니다."});return}try{const i=await(await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${l.access_token}`}})).json();e({success:!0,user:{id:"google_"+i.sub,name:i.name||"Google 사용자",email:i.email,avatar:i.picture||null,provider:"google"}})}catch{n({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}}}).requestAccessToken()}catch{n({success:!1,error:"구글 로그인 초기화에 실패했습니다."})}}),rm=async()=>(await em(),{success:!0}),lm=null,jr={title:"Prompt Daily — 매일 아침 AI가 바꾸는 세상",description:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만.",image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200",siteName:"Prompt Daily"},we=(e,n)=>{let t=document.head.querySelector(e);if(!t){t=document.createElement("meta");const[r,l]=e.replace(/^meta\[/,"").replace(/\]$/,"").split("=");t.setAttribute(r,l.replace(/"/g,"")),document.head.appendChild(t)}t.setAttribute("content",n.content??"")},om=e=>{document.title=e,we('meta[property="og:title"]',{content:e}),we('meta[name="twitter:title"]',{content:e})};function c0({title:e,description:n,image:t,url:r,type:l="article",publishedTime:o}={}){const i=e||jr.title,a=n||jr.description,s=t||jr.image,c=r||(typeof window<"u"?window.location.href:"");om(i),we('meta[name="description"]',{content:a}),we('meta[property="og:description"]',{content:a}),we('meta[property="og:image"]',{content:s}),we('meta[property="og:url"]',{content:c}),we('meta[property="og:type"]',{content:l}),we('meta[property="og:site_name"]',{content:jr.siteName}),we('meta[name="twitter:card"]',{content:"summary_large_image"}),we('meta[name="twitter:description"]',{content:a}),we('meta[name="twitter:image"]',{content:s}),o&&we('meta[property="article:published_time"]',{content:o})}function d0(){c0({})}const nt={models:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",enterprise:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",research:"https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200",tools:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",prompts:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",policy:"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200",culture:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",all:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200"};function Sl(e,n="all"){return e?(e.image_storage_path,e.image&&/^https?:\/\//.test(e.image)?e.image:nt[n]||nt.all):nt[n]||nt.all}function f0(e){return null}function xl(e="all"){const n=nt[e]||nt.all;return t=>{t.currentTarget.src!==n&&(t.currentTarget.src=n)}}async function im(){return!1}async function am(){return[]}function sm(){const[e,n]=g.useState(null),[t,r]=g.useState(null),[l,o]=g.useState([]),[i,a]=g.useState(""),[s,c]=g.useState(!1);g.useEffect(()=>{},[]),g.useEffect(()=>{if(!e){r(!1);return}im().then(r)},[e]);const h=async()=>{c(!0);const m=await am();o(m),c(!1)};return g.useEffect(()=>{t&&h()},[t]),u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"Supabase 환경변수가 설정되지 않았습니다."}),u.jsx(Hn,{to:"/",className:"text-brand underline",children:"홈으로"})]})}const cr="Prompt Daily",um="매일 아침 AI가 바꾸는 세상",vt=[{slug:"all",name:"전체",color:"#152e44"},{slug:"models",name:"모델",color:"#152e44"},{slug:"enterprise",name:"기업",color:"#1d4ed8"},{slug:"research",name:"연구",color:"#0f766e"},{slug:"tools",name:"도구",color:"#b45309"},{slug:"prompts",name:"프롬프트",color:"#7c3aed"},{slug:"policy",name:"정책",color:"#be123c"},{slug:"culture",name:"컬처",color:"#334155"}],hi=Object.fromEntries(vt.map(e=>[e.slug,e])),p0=Object.fromEntries(vt.map(e=>[e.name,e])),Hs=e=>String(e).padStart(2,"0"),m0=e=>{const n=new Date(e);return`${n.getFullYear()}.${Hs(n.getMonth()+1)}.${Hs(n.getDate())}`},Ai=e=>{const n=new Date(e),r=Math.floor((new Date-n)/36e5),l=Math.floor(r/24);return r<1?"방금 전":r<24?`${r}시간 전`:l<7?`${l}일 전`:m0(e)},fe=e=>{const n=p0[e.category];return n?n.slug:"all"},cm=e=>e?e.split(`

`).map((n,t)=>{const r=n.trim();if(r==="---"||r==="***")return u.jsx("hr",{className:"my-10 border-t-2 border-ink-100"},t);if(n.startsWith("## "))return u.jsx("h2",{children:n.slice(3)},t);if(n.startsWith("### "))return u.jsx("h3",{children:n.slice(4)},t);if(n.startsWith("> ")){const l=n.slice(2).replace(/\n> /g," ").replace(/\n/g," ");return u.jsxs("blockquote",{className:"relative my-8 pl-6 pr-5 py-5 bg-brand-tint/40 border-l-4 border-brand text-[17px] leading-relaxed text-ink-800 italic",children:[u.jsx("span",{className:"absolute left-2 top-0 text-brand/30 text-5xl font-serif leading-none select-none",children:"“"}),Nt(l)]},t)}if(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)\s/.test(n)){const l=n.match(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)/)[0],o=n.slice(l.length).trimStart();return u.jsxs("div",{className:"my-8 flex gap-4 p-5 bg-brand-tint/50 border border-brand/20 rounded-lg",children:[u.jsx("span",{className:"text-3xl leading-none shrink-0",children:l}),u.jsx("div",{className:"flex-1 text-[16px] leading-relaxed text-ink-800",children:Nt(o)})]},t)}return/^[-*]\s/.test(n)?u.jsx("ul",{className:"my-5 space-y-2",children:n.split(`
`).filter(Boolean).map((l,o)=>u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0"}),u.jsx("span",{className:"flex-1",children:Nt(l.replace(/^[-*]\s*/,""))})]},o))},t):/^\d+\.\s/.test(n)?u.jsx("ol",{className:"my-5 space-y-3 counter-reset-article",children:n.split(`
`).filter(Boolean).map((l,o)=>{const i=l.match(/^(\d+)\.\s*(.*)/),a=i?i[1]:String(o+1),s=i?i[2]:l;return u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"shrink-0 w-7 h-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center",children:a}),u.jsx("span",{className:"flex-1 pt-0.5",children:Nt(s)})]},o)})},t):u.jsx("p",{children:Nt(n)},t)}):null,Nt=e=>{const n=[];let t=0;return e.split(/\*\*(.*?)\*\*/).forEach((r,l)=>{l%2===1?n.push(u.jsx("strong",{className:"text-brand-dark font-bold",children:r},`b-${t++}`)):r.split(/==(.*?)==/).forEach((o,i)=>{i%2===1?n.push(u.jsx("mark",{className:"bg-yellow-100 px-1 text-ink-900 rounded",children:o},`h-${t++}`)):n.push(o)})}),n};function dm({user:e,onLoginClick:n,onLogoutClick:t,activeSlug:r,onCategoryClick:l,onSearch:o}){const[i,a]=g.useState(!1),[s,c]=g.useState(!1),[h,m]=g.useState(!1),[A,v]=g.useState(""),S=gr(),y=d=>f=>{if(f.preventDefault(),window.location.pathname.endsWith("/")||window.location.pathname.includes("/category/")){const p=document.getElementById(d);if(p){p.scrollIntoView({behavior:"smooth",block:"start"});return}}S("/"),setTimeout(()=>{var p;(p=document.getElementById(d))==null||p.scrollIntoView({behavior:"smooth",block:"start"})},80)};g.useEffect(()=>{const d=()=>a(window.scrollY>8);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const w=g.useMemo(()=>{const d=new Date,f=["일","월","화","수","목","금","토"][d.getDay()];return`${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 ${f}요일`},[]);return u.jsxs("header",{className:`sticky top-0 z-50 bg-white border-b transition-shadow ${i?"shadow-sm border-ink-200":"border-ink-100"}`,children:[u.jsx("div",{className:"bg-brand text-white text-xs",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 h-8 flex items-center justify-between",children:[u.jsx("span",{className:"mono tracking-wide",children:w}),u.jsxs("div",{className:"hidden sm:flex items-center gap-4",children:[u.jsx("a",{href:"#about",onClick:y("footer-about"),className:"hover:text-brand-tint cursor-pointer",children:"소개"}),u.jsx("a",{href:"#advertise",onClick:y("footer-advertise"),className:"hover:text-brand-tint cursor-pointer",children:"광고 문의"}),u.jsx("a",{href:"#newsletter",onClick:y("newsletter"),className:"hover:text-brand-tint cursor-pointer",children:"뉴스레터"}),e?u.jsxs("button",{onClick:t,className:"hover:text-brand-tint",children:[e.name||e.email," · 로그아웃"]}):u.jsx("button",{onClick:n,className:"hover:text-brand-tint",children:"로그인"})]})]})}),u.jsxs("div",{className:"max-w-page mx-auto px-4 py-5 flex items-center justify-between",children:[u.jsxs(Hn,{to:"/",className:"text-left group","aria-label":"홈으로",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[u.jsx("h1",{className:"headline-serif text-3xl md:text-4xl text-brand leading-none",children:cr}),u.jsx("p",{className:"text-[11px] text-ink-400 mt-1 tracking-widest uppercase",children:um})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>m(d=>!d),className:"w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"검색",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"})})}),u.jsx("button",{onClick:()=>c(d=>!d),className:"md:hidden w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"메뉴",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),h&&u.jsx("div",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4 py-3",children:u.jsxs("form",{onSubmit:d=>{d.preventDefault(),o(A),m(!1)},className:"flex gap-2",children:[u.jsx("input",{autoFocus:!0,value:A,onChange:d=>v(d.target.value),placeholder:"키워드로 검색…",className:"flex-1 px-4 py-2.5 border border-ink-200 rounded-none focus:border-brand outline-none text-[15px]"}),u.jsx("button",{type:"submit",className:"px-5 py-2.5 bg-brand text-white text-sm font-semibold",children:"검색"})]})})}),u.jsx("nav",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4",children:u.jsx("ul",{className:`flex items-center gap-1 overflow-x-auto no-scrollbar ${s?"flex-wrap":""}`,children:vt.map(d=>{const f=r===d.slug;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>{l(d.slug),c(!1)},className:`relative whitespace-nowrap px-4 py-3 text-sm font-bold transition-colors ${f?"text-brand":"text-ink-700 hover:text-brand"}`,children:[d.name,f&&u.jsx("span",{className:"absolute left-4 right-4 bottom-0 h-0.5 bg-brand"})]})},d.slug)})})})})]})}function fm({items:e,onClick:n}){return e.length?u.jsx("div",{className:"ticker",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 flex items-center gap-4 h-10",children:[u.jsx("span",{className:"ticker-label",children:"BREAKING"}),u.jsx("div",{className:"flex-1 overflow-hidden",children:u.jsx("div",{className:"flex gap-10 animate-marquee whitespace-nowrap",children:[...e,...e].map((t,r)=>u.jsxs("button",{onClick:()=>n(t),className:"hover:underline",children:["• ",t.title]},`${t.id}-${r}`))})})]})}):null}function pm({articles:e,onOpen:n}){if(e.length===0)return null;const[t,...r]=e,l=r.slice(0,2);return u.jsx("section",{className:"max-w-page mx-auto px-4 py-8",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-hero gap-6",children:[u.jsxs("article",{onClick:()=>n(t),className:"card cursor-pointer group",children:[u.jsx("div",{className:"card-img-wrap aspect-[16/9]",children:u.jsx("img",{src:Sl(t,fe(t)),srcSet:f0()||void 0,sizes:"(min-width: 1024px) 800px, 100vw",onError:xl(fe(t)),alt:"",className:"card-img",loading:"eager"})}),u.jsxs("div",{className:"p-6",children:[u.jsx(wl,{slug:fe(t),breaking:t.breaking}),u.jsx("h2",{className:"headline-serif text-3xl md:text-[2.25rem] leading-tight mt-3 mb-3 hl clamp-3",children:t.title}),u.jsx("p",{className:"text-ink-500 clamp-2 text-[15px] leading-relaxed",children:t.summary}),u.jsxs("div",{className:"mt-4 text-xs text-ink-400 mono",children:[t.author||"Prompt Daily 편집팀"," · ",Ai(t.date)]})]})]}),u.jsx("div",{className:"flex flex-col gap-5",children:l.map(o=>u.jsxs("article",{onClick:()=>n(o),className:"card cursor-pointer flex gap-4 p-4",children:[u.jsx("div",{className:"card-img-wrap w-32 h-24 flex-shrink-0",children:u.jsx("img",{src:Sl(o,fe(o)),onError:xl(fe(o)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx(wl,{slug:fe(o),breaking:o.breaking,small:!0}),u.jsx("h3",{className:"font-bold text-[15px] leading-snug mt-1 hl clamp-3",children:o.title}),u.jsx("div",{className:"mt-2 text-[11px] text-ink-400 mono",children:Ai(o.date)})]})]},o.id))})]})})}function wl({slug:e,breaking:n,small:t}){const r=hi[e]||vt[0],l=t?"px-1.5 py-0.5 text-[10px]":"px-2 py-1 text-[11px]";return u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:`${l} font-bold tracking-widest uppercase text-white`,style:{backgroundColor:r.color},children:r.name}),n&&u.jsx("span",{className:`${l} font-bold tracking-widest uppercase text-white bg-accent-red`,children:"속보"})]})}function gi({article:e,size:n="md",onClick:t}){const r=n==="lg";return u.jsxs("article",{onClick:()=>t(e),className:"card cursor-pointer",children:[u.jsx("div",{className:`card-img-wrap ${r?"aspect-[16/10]":"aspect-[4/3]"}`,children:u.jsx("img",{src:Sl(e,fe(e)),onError:xl(fe(e)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:r?"p-5":"p-4",children:[u.jsx(wl,{slug:fe(e),breaking:e.breaking,small:!r}),u.jsx("h3",{className:`hl font-bold mt-2 mb-2 clamp-3 ${r?"text-headline-md":"text-[15px]"}`,children:e.title}),u.jsx("p",{className:"text-ink-500 text-[13px] clamp-2",children:e.summary}),u.jsxs("div",{className:"mt-3 flex items-center justify-between text-[11px] text-ink-400 mono",children:[u.jsx("span",{children:Ai(e.date)}),u.jsx("span",{children:e.readTime||"5분"})]})]})]})}function mm({category:e,articles:n,onOpen:t}){if(n.length===0)return null;const[r,...l]=n,o=l.slice(0,3);return u.jsxs("section",{className:"py-10",id:`section-${e.slug}`,children:[u.jsxs("div",{className:"flex items-end justify-between mb-6",children:[u.jsx(Hn,{to:`/category/${e.slug}`,className:"section-label hover:opacity-70 transition-opacity",style:{color:e.color,borderColor:e.color},children:e.name}),u.jsx(Hn,{to:`/category/${e.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-xs text-ink-500 hover:text-brand font-semibold",children:"더보기 →"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[u.jsx("div",{className:"md:col-span-2 md:row-span-1",children:u.jsx(gi,{article:r,size:"lg",onClick:t})}),o.map(i=>u.jsx(gi,{article:i,onClick:t},i.id))]})]})}function hm({articles:e,onOpen:n}){return u.jsxs("aside",{className:"sticky top-40",children:[u.jsx("div",{className:"section-label mb-5",children:"MOST VIEWED"}),u.jsx("ol",{className:"space-y-4",children:e.slice(0,10).map((t,r)=>{var l;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>n(t),className:"flex gap-3 text-left w-full group",children:[u.jsx("span",{className:`rank-num ${r<3?"top-three":""}`,children:String(r+1).padStart(2,"0")}),u.jsxs("div",{className:"flex-1 min-w-0 pb-4 border-b border-ink-100",children:[u.jsx("div",{className:"text-[10px] text-ink-400 mono uppercase tracking-wider mb-1",children:((l=p0[t.category])==null?void 0:l.name)||t.category}),u.jsx("h4",{className:"text-[14px] font-semibold leading-snug hl clamp-3",children:t.title})]})]})},t.id)})})]})}function Am({email:e,setEmail:n,subscribed:t,onSubmit:r}){return u.jsx("section",{id:"newsletter",className:"bg-brand text-white py-14 my-10",children:u.jsxs("div",{className:"max-w-2xl mx-auto px-4 text-center",children:[u.jsx("div",{className:"inline-block px-3 py-1 bg-accent-red text-[10px] font-bold tracking-widest uppercase mb-4",children:"NEWSLETTER"}),u.jsx("h2",{className:"headline-serif text-3xl md:text-4xl mb-3",children:"매일 아침, 한 잔의 AI"}),u.jsx("p",{className:"text-brand-tint mb-7 text-[15px]",children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 7개만 골라, 매일 아침 7시에 전해드립니다."}),u.jsxs("form",{onSubmit:r,className:"flex gap-2 max-w-md mx-auto",children:[u.jsx("input",{type:"email",required:!0,value:e,onChange:l=>n(l.target.value),placeholder:"이메일 주소",className:"flex-1 px-4 py-3 text-ink-900 border-0 focus:outline-none focus:ring-2 focus:ring-white"}),u.jsx("button",{type:"submit",className:"px-6 py-3 bg-white text-brand font-bold hover:bg-brand-tint",children:t?"구독완료":"구독하기"})]})]})})}const gm=[{label:"X",url:"https://x.com/",title:"X (Twitter)"},{label:"FB",url:"https://facebook.com/",title:"Facebook"},{label:"IN",url:"https://instagram.com/",title:"Instagram"},{label:"YT",url:"https://youtube.com/",title:"YouTube"}];function h0(){const[e,n]=g.useState(null);return u.jsxs(u.Fragment,{children:[u.jsx("footer",{className:"bg-ink-900 text-ink-300 mt-20",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[u.jsxs("div",{className:"md:col-span-2",id:"footer-about",children:[u.jsx(Hn,{to:"/",className:"inline-block",children:u.jsx("h3",{className:"headline-serif text-2xl text-white mb-3 hover:text-brand-tint transition-colors",children:cr})}),u.jsx("p",{className:"text-sm text-ink-400 mb-4 max-w-md",children:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만 골라드립니다."}),u.jsx("div",{className:"flex gap-3",children:gm.map(t=>u.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer noopener",title:t.title,"aria-label":t.title,className:"w-9 h-9 border border-ink-700 hover:border-white hover:text-white flex items-center justify-center text-xs font-bold transition-colors",children:t.label},t.label))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"카테고리"}),u.jsx("ul",{className:"space-y-2 text-sm",children:vt.slice(1).map(t=>u.jsx("li",{children:u.jsx(Hn,{to:`/category/${t.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"hover:text-white transition-colors",children:t.name})},t.slug))})]}),u.jsxs("div",{id:"footer-advertise",children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"회사"}),u.jsxs("ul",{className:"space-y-2 text-sm",children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>n("about"),className:"hover:text-white transition-colors",children:"소개"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("advertise"),className:"hover:text-white transition-colors",children:"광고 문의"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("contact"),className:"hover:text-white transition-colors",children:"제보하기"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("terms"),className:"hover:text-white transition-colors",children:"이용약관"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>n("privacy"),className:"hover:text-white transition-colors",children:"개인정보처리방침"})})]})]})]}),u.jsxs("div",{className:"border-t border-ink-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-xs text-ink-400",children:[u.jsxs("p",{children:["© 2026 GIGA GLOBAL STUDIO · ",cr,". All rights reserved."]}),u.jsx("p",{className:"mono mt-2 md:mt-0",children:"v2.1 · Magazine Edition"})]})]})}),e&&u.jsx(ym,{kind:e,onClose:()=>n(null)})]})}const Im={about:{title:"소개",body:u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Prompt Daily"}),"는 매일 아침 AI가 바꾸는 세상을 기록합니다."]}),u.jsx("p",{children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 것만 7개 카테고리 — 모델 · 기업 · 연구 · 도구 · 프롬프트 · 정책 · 컬처 — 로 정리해 전해드립니다."}),u.jsx("p",{className:"text-ink-400 text-sm",children:"© GIGA GLOBAL STUDIO"})]})},advertise:{title:"광고 문의",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"브랜드·프로덕트·채용 광고 문의는 이메일로 받고 있습니다."}),u.jsx("p",{className:"mono text-brand",children:"ads@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"평균 응답 시간: 영업일 기준 24시간 이내"})]})},contact:{title:"제보하기",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"AI 업계 소식·인사이트 제보를 환영합니다."}),u.jsx("p",{className:"mono text-brand",children:"tips@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"익명 제보도 가능합니다. 제보자 신원은 철저히 보호됩니다."})]})},terms:{title:"이용약관",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"본 사이트는 정보 제공을 목적으로 운영되며, 게재된 모든 콘텐츠의 저작권은 Prompt Daily 및 원저작자에게 있습니다."}),u.jsx("p",{children:"무단 복제·배포·2차 저작물 작성을 금지합니다. 기사 본문의 인용은 출처 표기 시 허용됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 약관 문서는 준비 중입니다."})]})},privacy:{title:"개인정보처리방침",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Prompt Daily는 뉴스레터 구독 외에는 사용자의 개인정보를 수집하지 않습니다."}),u.jsx("p",{children:"구독자 이메일은 뉴스레터 발송 목적으로만 사용되며, 제3자에게 제공되지 않습니다."}),u.jsx("p",{children:"구독 해지는 발송되는 모든 메일 하단의 링크를 통해 즉시 처리됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 방침 문서는 준비 중입니다."})]})}};function ym({kind:e,onClose:n}){const t=Im[e];return g.useEffect(()=>{const r=l=>l.key==="Escape"&&n();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[n]),t?u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in",onClick:n,children:u.jsxs("div",{className:"bg-white max-w-lg w-full p-8 relative",onClick:r=>r.stopPropagation(),role:"dialog","aria-modal":"true",children:[u.jsx("button",{onClick:n,"aria-label":"닫기",className:"absolute top-4 right-4 w-8 h-8 hover:bg-ink-50 flex items-center justify-center text-ink-400",children:u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-4",children:t.title}),u.jsx("div",{className:"space-y-3 text-ink-700 text-[15px] leading-relaxed",children:t.body})]})}):null}function vm({article:e,onBack:n}){g.useEffect(()=>{window.scrollTo(0,0)},[e.id]),g.useEffect(()=>(c0({title:`${e.title} — ${cr}`,description:e.summary,image:e.image,type:"article",publishedTime:e.date}),()=>d0()),[e.id]),g.useEffect(()=>{},[e.id]);const t=typeof window<"u"?window.location.href:"",r=()=>{var l;(l=navigator.clipboard)==null||l.writeText(t)};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsx("header",{className:"sticky top-0 bg-white/95 backdrop-blur border-b border-ink-100 z-50",children:u.jsxs("div",{className:"max-w-3xl mx-auto px-4 h-14 flex items-center justify-between",children:[u.jsx("button",{onClick:n,className:"headline-serif text-xl text-brand",children:cr}),u.jsxs("button",{onClick:n,className:"text-sm text-ink-500 hover:text-brand flex items-center gap-1",children:[u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]})]})}),u.jsxs("article",{className:"max-w-3xl mx-auto px-4 py-10",children:[u.jsx(wl,{slug:fe(e),breaking:e.breaking}),u.jsx("h1",{className:"headline-serif text-3xl md:text-[2.5rem] leading-tight mt-4 mb-6",children:e.title}),u.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500 mb-8 pb-6 border-b border-ink-200",children:[u.jsx("span",{className:"font-semibold text-ink-700",children:e.author||"Prompt Daily 편집팀"}),u.jsx("span",{children:"·"}),u.jsx("span",{className:"mono",children:m0(e.date)}),u.jsx("span",{children:"·"}),u.jsxs("span",{children:[e.readTime||"5분"," 읽기"]})]}),u.jsx("img",{src:Sl(e,fe(e)),srcSet:f0()||void 0,sizes:"(min-width: 768px) 768px, 100vw",onError:xl(fe(e)),alt:"",className:"w-full mb-8"}),u.jsx("div",{className:"border-l-4 border-brand bg-brand-tint p-5 mb-10 serif text-lg text-brand-dark",children:e.summary}),u.jsx("div",{className:"article-body",children:cm(e.content)}),u.jsxs("div",{className:"mt-12 pt-8 border-t border-ink-200 flex items-center gap-3 flex-wrap",children:[u.jsx("span",{className:"text-sm text-ink-500",children:"공유:"}),u.jsx("a",{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(e.title)}&url=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"X"}),u.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"Facebook"}),u.jsx("button",{onClick:r,className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"링크 복사"})]})]}),u.jsx(h0,{})]})}function Sm({onClose:e,onSuccess:n}){const[t,r]=g.useState(!1),[l,o]=g.useState(""),i=async a=>{r(!0),o("");try{const s=await a();s.success&&n(s.user)}catch(s){o(s.error||"로그인에 실패했습니다.")}r(!1)};return u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4",onClick:e,children:u.jsxs("div",{className:"bg-white max-w-sm w-full p-8",onClick:a=>a.stopPropagation(),children:[u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-2",children:"로그인"}),u.jsx("p",{className:"text-sm text-ink-500 mb-6",children:"구독과 스크랩을 위해 로그인해주세요"}),l&&u.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 text-sm",children:l}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("button",{disabled:t,onClick:()=>i(qp),className:"w-full py-3 bg-[#FEE500] text-black font-bold flex items-center justify-center gap-2 disabled:opacity-50",children:"카카오로 로그인"}),u.jsx("button",{disabled:t,onClick:()=>i(tm),className:"w-full py-3 border border-ink-200 font-bold flex items-center justify-center gap-2 hover:border-ink-300 disabled:opacity-50",children:"Google로 로그인"})]}),u.jsx("button",{onClick:e,className:"mt-6 w-full text-sm text-ink-500 hover:text-brand",children:"닫기"})]})})}function xm(){const[e,n]=g.useState(()=>Jp.articles||[]),[t,r]=g.useState(null),[l,o]=g.useState("static");return g.useEffect(()=>{},[]),{articles:e,liveMostViewed:t,dataSource:l}}function _s({store:e,ui:n}){var w;const{articles:t,liveMostViewed:r}=e,l=gr(),o=l0(),i=d=>l(`/article/${d.id}`),a=o.slug&&hi[o.slug]?o.slug:"all",[s,c]=g.useState("");g.useEffect(()=>{d0()},[]),g.useEffect(()=>{c("")},[a]);const h=g.useMemo(()=>{let d=t;if(a!=="all"&&(d=d.filter(f=>fe(f)===a)),s){const f=s.toLowerCase();d=d.filter(p=>p.title.toLowerCase().includes(f)||(p.summary||"").toLowerCase().includes(f))}return d},[t,a,s]),m=g.useMemo(()=>{const d=h.filter(p=>p.breaking),f=h.filter(p=>!p.breaking);return[...d,...f].slice(0,3)},[h]),A=g.useMemo(()=>t.filter(d=>d.breaking).slice(0,6),[t]),v=g.useMemo(()=>r&&r.length>0?r:[...t].sort((d,f)=>new Date(f.date)-new Date(d.date)).slice(0,10),[t,r]),S=g.useMemo(()=>vt.slice(1).map(d=>({category:d,items:h.filter(f=>fe(f)===d.slug).slice(0,4)})).filter(d=>d.items.length>0),[h]),y=d=>{l(d==="all"?"/":`/category/${d}`),window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsx(dm,{user:n.user,onLoginClick:n.onLoginClick,onLogoutClick:n.onLogoutClick,activeSlug:a,onCategoryClick:y,onSearch:c}),u.jsx(fm,{items:A,onClick:i}),s&&u.jsx("div",{className:"bg-brand-tint border-b border-brand/10",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-3 text-sm text-brand",children:[u.jsxs("strong",{children:['"',s,'"']})," 검색결과 ",h.length,"건",u.jsx("button",{onClick:()=>c(""),className:"ml-3 underline",children:"초기화"})]})}),m.length>0&&u.jsx(pm,{articles:m,onOpen:i}),u.jsxs("div",{className:"max-w-page mx-auto px-4",children:[u.jsx("hr",{className:"hr-double"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-magazine gap-10",children:[u.jsx("main",{children:a==="all"?S.map(({category:d,items:f})=>u.jsx(mm,{category:d,articles:f,onOpen:i},d.slug)):u.jsxs("section",{className:"py-10",children:[u.jsx("div",{className:"section-label mb-6",children:((w=hi[a])==null?void 0:w.name)||"전체"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:h.map(d=>u.jsx(gi,{article:d,onClick:i},d.id))}),h.length===0&&u.jsx("p",{className:"text-center py-20 text-ink-400",children:"해당 카테고리의 기사가 없습니다."})]})}),u.jsx(hm,{articles:v,onOpen:i})]})]}),u.jsx(Am,{email:n.email,setEmail:n.setEmail,subscribed:n.subscribed,onSubmit:n.onSubscribe}),u.jsx(h0,{})]})}function wm({store:e}){const{id:n}=l0(),t=gr(),r=e.articles.find(l=>String(l.id)===String(n));return e.dataSource==="loading"?u.jsx("div",{className:"min-h-screen flex items-center justify-center text-ink-400",children:"불러오는 중…"}):r?u.jsx(vm,{article:r,onBack:()=>t("/")}):u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"해당 기사를 찾을 수 없습니다."}),u.jsx(Hn,{to:"/",className:"text-brand underline",children:"홈으로"})]})}function Pm(){const e=xm(),[n,t]=g.useState(""),[r,l]=g.useState(!1),[o,i]=g.useState(null),[a,s]=g.useState(!1);g.useEffect(()=>{const A=localStorage.getItem("prompt_daily_user");A&&i(JSON.parse(A))},[]);const m={user:o,email:n,setEmail:t,subscribed:r,onSubscribe:async A=>{A.preventDefault(),n&&(l(!0),setTimeout(()=>{t(""),l(!1)},3e3))},onLoginClick:()=>s(!0),onLogoutClick:async()=>{await rm(),localStorage.removeItem("prompt_daily_user"),i(null)}};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsxs(_p,{children:[u.jsx(zn,{path:"/",element:u.jsx(_s,{store:e,ui:m})}),u.jsx(zn,{path:"/article/:id",element:u.jsx(wm,{store:e})}),u.jsx(zn,{path:"/category/:slug",element:u.jsx(_s,{store:e,ui:m})}),u.jsx(zn,{path:"/admin/*",element:u.jsx(sm,{})}),u.jsx(zn,{path:"*",element:u.jsx(jp,{to:"/",replace:!0})})]}),!1,a&&u.jsx(Sm,{onClose:()=>s(!1),onSuccess:A=>{i(A),localStorage.setItem("prompt_daily_user",JSON.stringify(A)),s(!1)}})]})}const Cm="/ai-news-daily/".replace(/\/$/,"")||"/";yo.createRoot(document.getElementById("root")).render(u.jsx(Ys.StrictMode,{children:u.jsx($p,{basename:Cm,children:u.jsx(Pm,{})})}));
