(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sc={exports:{}},hs={},oc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),hh=Symbol.for("react.portal"),ph=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),vh=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),Sh=Symbol.for("react.memo"),Ih=Symbol.for("react.lazy"),Il=Symbol.iterator;function kh(e){return e===null||typeof e!="object"?null:(e=Il&&e[Il]||e["@@iterator"],typeof e=="function"?e:null)}var ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lc=Object.assign,uc={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=uc,this.updater=n||ac}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cc(){}cc.prototype=Yn.prototype;function ga(e,t,n){this.props=e,this.context=t,this.refs=uc,this.updater=n||ac}var ya=ga.prototype=new cc;ya.constructor=ga;lc(ya,Yn.prototype);ya.isPureReactComponent=!0;var kl=Array.isArray,dc=Object.prototype.hasOwnProperty,va={current:null},fc={key:!0,ref:!0,__self:!0,__source:!0};function hc(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)dc.call(t,r)&&!fc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Wr,type:e,key:s,ref:o,props:i,_owner:va.current}}function xh(e,t){return{$$typeof:Wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function Eh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xl=/\/+/g;function Ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Eh(""+e.key):t.toString(36)}function _i(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Wr:case hh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ds(o,0):r,kl(i)?(n="",e!=null&&(n=e.replace(xl,"$&/")+"/"),_i(i,t,n,"",function(u){return u})):i!=null&&(wa(i)&&(i=xh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xl,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",kl(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ds(s,a);o+=_i(s,t,n,l,i)}else if(l=kh(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ds(s,a++),o+=_i(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ni(e,t,n){if(e==null)return e;var r=[],i=0;return _i(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Si={transition:null},Ah={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Si,ReactCurrentOwner:va};function pc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ni,forEach:function(e,t,n){ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!wa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Yn;L.Fragment=ph;L.Profiler=gh;L.PureComponent=ga;L.StrictMode=mh;L.Suspense=_h;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah;L.act=pc;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lc({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=va.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)dc.call(t,l)&&!fc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wr,type:e.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:vh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yh,_context:e},e.Consumer=e};L.createElement=hc;L.createFactory=function(e){var t=hc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:wh,render:e}};L.isValidElement=wa;L.lazy=function(e){return{$$typeof:Ih,_payload:{_status:-1,_result:e},_init:Ch}};L.memo=function(e,t){return{$$typeof:Sh,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};L.unstable_act=pc;L.useCallback=function(e,t){return pe.current.useCallback(e,t)};L.useContext=function(e){return pe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};L.useEffect=function(e,t){return pe.current.useEffect(e,t)};L.useId=function(){return pe.current.useId()};L.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return pe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};L.useRef=function(e){return pe.current.useRef(e)};L.useState=function(e){return pe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return pe.current.useTransition()};L.version="18.3.1";oc.exports=L;var H=oc.exports;const Th=fh(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=H,Ph=Symbol.for("react.element"),Oh=Symbol.for("react.fragment"),Rh=Object.prototype.hasOwnProperty,Lh=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dh={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Rh.call(t,r)&&!Dh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ph,type:e,key:s,ref:o,props:i,_owner:Lh.current}}hs.Fragment=Oh;hs.jsx=mc;hs.jsxs=mc;sc.exports=hs;var c=sc.exports,po={},gc={exports:{}},Ce={},yc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,P){var O=k.length;k.push(P);e:for(;0<O;){var W=O-1>>>1,X=k[W];if(0<i(X,P))k[W]=P,k[O]=X,O=W;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var P=k[0],O=k.pop();if(O!==P){k[0]=O;e:for(var W=0,X=k.length,Kt=X>>>1;W<Kt;){var Ge=2*(W+1)-1,pn=k[Ge],Me=Ge+1,Qt=k[Me];if(0>i(pn,O))Me<X&&0>i(Qt,pn)?(k[W]=Qt,k[Me]=O,W=Me):(k[W]=pn,k[Ge]=O,W=Ge);else if(Me<X&&0>i(Qt,O))k[W]=Qt,k[Me]=O,W=Me;else break e}}return P}function i(k,P){var O=k.sortIndex-P.sortIndex;return O!==0?O:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],g=1,m=null,h=3,v=!1,_=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=k)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function y(k){if(S=!1,p(k),!_)if(n(l)!==null)_=!0,hn(I);else{var P=n(u);P!==null&&Te(y,P.startTime-k)}}function I(k,P){_=!1,S&&(S=!1,f(T),T=-1),v=!0;var O=h;try{for(p(P),m=n(l);m!==null&&(!(m.expirationTime>P)||k&&!oe());){var W=m.callback;if(typeof W=="function"){m.callback=null,h=m.priorityLevel;var X=W(m.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(l)&&r(l),p(P)}else r(l);m=n(l)}if(m!==null)var Kt=!0;else{var Ge=n(u);Ge!==null&&Te(y,Ge.startTime-P),Kt=!1}return Kt}finally{m=null,h=O,v=!1}}var C=!1,E=null,T=-1,b=5,R=-1;function oe(){return!(e.unstable_now()-R<b)}function ge(){if(E!==null){var k=e.unstable_now();R=k;var P=!0;try{P=E(!0,k)}finally{P?We():(C=!1,E=null)}}else C=!1}var We;if(typeof d=="function")We=function(){d(ge)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,tt=Gt.port2;Gt.port1.onmessage=ge,We=function(){tt.postMessage(null)}}else We=function(){M(ge,0)};function hn(k){E=k,C||(C=!0,We())}function Te(k,P){T=M(function(){k(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,hn(I))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var O=h;h=P;try{return k()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var O=h;h=k;try{return P()}finally{h=O}},e.unstable_scheduleCallback=function(k,P,O){var W=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,k){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,k={id:g++,callback:P,priorityLevel:k,startTime:O,expirationTime:X,sortIndex:-1},O>W?(k.sortIndex=O,t(u,k),n(l)===null&&k===n(u)&&(S?(f(T),T=-1):S=!0,Te(y,O-W))):(k.sortIndex=X,t(l,k),_||v||(_=!0,hn(I))),k},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(k){var P=h;return function(){var O=h;h=P;try{return k.apply(this,arguments)}finally{h=O}}}})(vc);yc.exports=vc;var Mh=yc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh=H,Ee=Mh;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wc=new Set,Er={};function dn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(Er[e]=t,e=0;e<t.length;e++)wc.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=Object.prototype.hasOwnProperty,Uh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,El={},Cl={};function zh(e){return mo.call(Cl,e)?!0:mo.call(El,e)?!1:Uh.test(e)?Cl[e]=!0:(El[e]=!0,!1)}function bh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fh(e,t,n,r){if(t===null||typeof t>"u"||bh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var _a=/[\-:]([a-z])/g;function Sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_a,Sa);se[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_a,Sa);se[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_a,Sa);se[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ia(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fh(t,n,i,r)&&(n=null),r||i===null?zh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),vn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),ka=Symbol.for("react.strict_mode"),go=Symbol.for("react.profiler"),_c=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),yo=Symbol.for("react.suspense"),vo=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Ic=Symbol.for("react.offscreen"),Al=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ms;function ur(e){if(Ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ms=t&&t[1]||""}return`
`+Ms+e}var js=!1;function Us(e,t){if(!e||js)return"";js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{js=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Bh(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Us(e.type,!1),e;case 11:return e=Us(e.type.render,!1),e;case 1:return e=Us(e.type,!0),e;default:return""}}function wo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case vn:return"Portal";case go:return"Profiler";case ka:return"StrictMode";case yo:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sc:return(e.displayName||"Context")+".Consumer";case _c:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return t=e.displayName||null,t!==null?t:wo(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return wo(e(t))}catch{}}return null}function Hh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wo(t);case 8:return t===ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $h(e){var t=kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ii(e){e._valueTracker||(e._valueTracker=$h(e))}function xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _o(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&Ia(e,"checked",t,!1)}function So(e,t){Ec(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Io(e,t.type,n):t.hasOwnProperty("defaultValue")&&Io(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Io(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ko(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(cr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Cc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ol(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ac(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ac(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,Tc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Nc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Pc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wh=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eo(e,t){if(t){if(Wh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function Ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,On=null,Rn=null;function Rl(e){if(e=Qr(e)){if(typeof To!="function")throw Error(w(280));var t=e.stateNode;t&&(t=vs(t),To(e.stateNode,e.type,t))}}function Oc(e){On?Rn?Rn.push(e):Rn=[e]:On=e}function Rc(){if(On){var e=On,t=Rn;if(Rn=On=null,Rl(e),t)for(e=0;e<t.length;e++)Rl(t[e])}}function Lc(e,t){return e(t)}function Dc(){}var zs=!1;function Mc(e,t,n){if(zs)return e(t,n);zs=!0;try{return Lc(e,t,n)}finally{zs=!1,(On!==null||Rn!==null)&&(Dc(),Rc())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var No=!1;if(ct)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){No=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{No=!1}function Gh(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var pr=!1,Ui=null,zi=!1,Po=null,Kh={onError:function(e){pr=!0,Ui=e}};function Qh(e,t,n,r,i,s,o,a,l){pr=!1,Ui=null,Gh.apply(Kh,arguments)}function Jh(e,t,n,r,i,s,o,a,l){if(Qh.apply(this,arguments),pr){if(pr){var u=Ui;pr=!1,Ui=null}else throw Error(w(198));zi||(zi=!0,Po=u)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ll(e){if(fn(e)!==e)throw Error(w(188))}function Yh(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ll(i),e;if(s===r)return Ll(i),t;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Uc(e){return e=Yh(e),e!==null?zc(e):null}function zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zc(e);if(t!==null)return t;e=e.sibling}return null}var bc=Ee.unstable_scheduleCallback,Dl=Ee.unstable_cancelCallback,Xh=Ee.unstable_shouldYield,qh=Ee.unstable_requestPaint,Y=Ee.unstable_now,Zh=Ee.unstable_getCurrentPriorityLevel,Aa=Ee.unstable_ImmediatePriority,Fc=Ee.unstable_UserBlockingPriority,bi=Ee.unstable_NormalPriority,ep=Ee.unstable_LowPriority,Bc=Ee.unstable_IdlePriority,ps=null,Xe=null;function tp(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:ip,np=Math.log,rp=Math.LN2;function ip(e){return e>>>=0,e===0?32:31-(np(e)/rp|0)|0}var oi=64,ai=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=dr(a):(s&=o,s!==0&&(r=dr(s)))}else o=n&~i,o!==0?r=dr(o):s!==0&&(r=dr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),i=1<<n,r|=e[n],t&=~i;return r}function sp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Be(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sp(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hc(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function bs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Be(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function $c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vc,Na,Wc,Gc,Kc,Ro=!1,li=[],Nt=null,Pt=null,Ot=null,Tr=new Map,Nr=new Map,It=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function rr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Qr(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function up(e,t,n,r,i){switch(t){case"focusin":return Nt=rr(Nt,e,t,n,r,i),!0;case"dragenter":return Pt=rr(Pt,e,t,n,r,i),!0;case"mouseover":return Ot=rr(Ot,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Tr.set(s,rr(Tr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Nr.set(s,rr(Nr.get(s)||null,e,t,n,r,i)),!0}return!1}function Qc(e){var t=qt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=jc(n),t!==null){e.blockedOn=t,Kc(e.priority,function(){Wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ao=r,n.target.dispatchEvent(r),Ao=null}else return t=Qr(n),t!==null&&Na(t),e.blockedOn=n,!1;t.shift()}return!0}function jl(e,t,n){Ii(e)&&n.delete(t)}function cp(){Ro=!1,Nt!==null&&Ii(Nt)&&(Nt=null),Pt!==null&&Ii(Pt)&&(Pt=null),Ot!==null&&Ii(Ot)&&(Ot=null),Tr.forEach(jl),Nr.forEach(jl)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ro||(Ro=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,cp)))}function Pr(e){function t(i){return ir(i,e)}if(0<li.length){ir(li[0],e);for(var n=1;n<li.length;n++){var r=li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&ir(Nt,e),Pt!==null&&ir(Pt,e),Ot!==null&&ir(Ot,e),Tr.forEach(t),Nr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)Qc(n),n.blockedOn===null&&It.shift()}var Ln=yt.ReactCurrentBatchConfig,Bi=!0;function dp(e,t,n,r){var i=U,s=Ln.transition;Ln.transition=null;try{U=1,Pa(e,t,n,r)}finally{U=i,Ln.transition=s}}function fp(e,t,n,r){var i=U,s=Ln.transition;Ln.transition=null;try{U=4,Pa(e,t,n,r)}finally{U=i,Ln.transition=s}}function Pa(e,t,n,r){if(Bi){var i=Lo(e,t,n,r);if(i===null)Js(e,t,r,Hi,n),Ml(e,r);else if(up(i,e,t,n,r))r.stopPropagation();else if(Ml(e,r),t&4&&-1<lp.indexOf(e)){for(;i!==null;){var s=Qr(i);if(s!==null&&Vc(s),s=Lo(e,t,n,r),s===null&&Js(e,t,r,Hi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Js(e,t,r,null,n)}}var Hi=null;function Lo(e,t,n,r){if(Hi=null,e=Ca(r),e=qt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hi=e,null}function Jc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zh()){case Aa:return 1;case Fc:return 4;case bi:case ep:return 16;case Bc:return 536870912;default:return 16}default:return 16}}var At=null,Oa=null,ki=null;function Yc(){if(ki)return ki;var e,t=Oa,n=t.length,r,i="value"in At?At.value:At.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ki=i.slice(e,1<r?1-r:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Ul(){return!1}function Ae(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ui:Ul,this.isPropagationStopped=Ul,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=Ae(Xn),Kr=Q({},Xn,{view:0,detail:0}),hp=Ae(Kr),Fs,Bs,sr,ms=Q({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Fs=e.screenX-sr.screenX,Bs=e.screenY-sr.screenY):Bs=Fs=0,sr=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Bs}}),zl=Ae(ms),pp=Q({},ms,{dataTransfer:0}),mp=Ae(pp),gp=Q({},Kr,{relatedTarget:0}),Hs=Ae(gp),yp=Q({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=Ae(yp),wp=Q({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Ae(wp),Sp=Q({},Xn,{data:0}),bl=Ae(Sp),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xp[e])?!!t[e]:!1}function La(){return Ep}var Cp=Q({},Kr,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=Ae(Cp),Tp=Q({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fl=Ae(Tp),Np=Q({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),Pp=Ae(Np),Op=Q({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=Ae(Op),Lp=Q({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=Ae(Lp),Mp=[9,13,27,32],Da=ct&&"CompositionEvent"in window,mr=null;ct&&"documentMode"in document&&(mr=document.documentMode);var jp=ct&&"TextEvent"in window&&!mr,Xc=ct&&(!Da||mr&&8<mr&&11>=mr),Bl=" ",Hl=!1;function qc(e,t){switch(e){case"keyup":return Mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Up(e,t){switch(e){case"compositionend":return Zc(t);case"keypress":return t.which!==32?null:(Hl=!0,Bl);case"textInput":return e=t.data,e===Bl&&Hl?null:e;default:return null}}function zp(e,t){if(_n)return e==="compositionend"||!Da&&qc(e,t)?(e=Yc(),ki=Oa=At=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xc&&t.locale!=="ko"?null:t.data;default:return null}}var bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bp[e.type]:t==="textarea"}function ed(e,t,n,r){Oc(r),t=$i(t,"onChange"),0<t.length&&(n=new Ra("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,Or=null;function Fp(e){dd(e,0)}function gs(e){var t=kn(e);if(xc(t))return e}function Bp(e,t){if(e==="change")return t}var td=!1;if(ct){var $s;if(ct){var Vs="oninput"in document;if(!Vs){var Vl=document.createElement("div");Vl.setAttribute("oninput","return;"),Vs=typeof Vl.oninput=="function"}$s=Vs}else $s=!1;td=$s&&(!document.documentMode||9<document.documentMode)}function Wl(){gr&&(gr.detachEvent("onpropertychange",nd),Or=gr=null)}function nd(e){if(e.propertyName==="value"&&gs(Or)){var t=[];ed(t,Or,e,Ca(e)),Mc(Fp,t)}}function Hp(e,t,n){e==="focusin"?(Wl(),gr=t,Or=n,gr.attachEvent("onpropertychange",nd)):e==="focusout"&&Wl()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gs(Or)}function Vp(e,t){if(e==="click")return gs(t)}function Wp(e,t){if(e==="input"||e==="change")return gs(t)}function Gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:Gp;function Rr(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mo.call(t,i)||!Ve(e[i],t[i]))return!1}return!0}function Gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kl(e,t){var n=Gl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gl(n)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function id(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kp(e){var t=id(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rd(n.ownerDocument.documentElement,n)){if(r!==null&&Ma(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Kl(n,s);var o=Kl(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qp=ct&&"documentMode"in document&&11>=document.documentMode,Sn=null,Do=null,yr=null,Mo=!1;function Ql(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mo||Sn==null||Sn!==ji(r)||(r=Sn,"selectionStart"in r&&Ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Rr(yr,r)||(yr=r,r=$i(Do,"onSelect"),0<r.length&&(t=new Ra("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},Ws={},sd={};ct&&(sd=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function ys(e){if(Ws[e])return Ws[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sd)return Ws[e]=t[n];return e}var od=ys("animationend"),ad=ys("animationiteration"),ld=ys("animationstart"),ud=ys("transitionend"),cd=new Map,Jl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){cd.set(e,t),dn(t,[e])}for(var Gs=0;Gs<Jl.length;Gs++){var Ks=Jl[Gs],Jp=Ks.toLowerCase(),Yp=Ks[0].toUpperCase()+Ks.slice(1);Bt(Jp,"on"+Yp)}Bt(od,"onAnimationEnd");Bt(ad,"onAnimationIteration");Bt(ld,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(ud,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Yl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jh(r,t,void 0,e),e.currentTarget=null}function dd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yl(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yl(i,a,u),s=l}}}if(zi)throw e=Po,zi=!1,Po=null,e}function B(e,t){var n=t[Fo];n===void 0&&(n=t[Fo]=new Set);var r=e+"__bubble";n.has(r)||(fd(t,e,2,!1),n.add(r))}function Qs(e,t,n){var r=0;t&&(r|=4),fd(n,e,r,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[di]){e[di]=!0,wc.forEach(function(n){n!=="selectionchange"&&(Xp.has(n)||Qs(n,!1,e),Qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,Qs("selectionchange",!1,t))}}function fd(e,t,n,r){switch(Jc(t)){case 1:var i=dp;break;case 4:i=fp;break;default:i=Pa}n=i.bind(null,t,n,e),i=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Js(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Mc(function(){var u=s,g=Ca(n),m=[];e:{var h=cd.get(e);if(h!==void 0){var v=Ra,_=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":v=Ap;break;case"focusin":_="focus",v=Hs;break;case"focusout":_="blur",v=Hs;break;case"beforeblur":case"afterblur":v=Hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Pp;break;case od:case ad:case ld:v=vp;break;case ud:v=Rp;break;case"scroll":v=hp;break;case"wheel":v=Dp;break;case"copy":case"cut":case"paste":v=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Fl}var S=(t&4)!==0,M=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var d=u,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Ar(d,f),y!=null&&S.push(Dr(d,y,p)))),M)break;d=d.return}0<S.length&&(h=new v(h,_,null,n,g),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Ao&&(_=n.relatedTarget||n.fromElement)&&(qt(_)||_[dt]))break e;if((v||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?qt(_):null,_!==null&&(M=fn(_),_!==M||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(S=zl,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=Fl,y="onPointerLeave",f="onPointerEnter",d="pointer"),M=v==null?h:kn(v),p=_==null?h:kn(_),h=new S(y,d+"leave",v,n,g),h.target=M,h.relatedTarget=p,y=null,qt(g)===u&&(S=new S(f,d+"enter",_,n,g),S.target=p,S.relatedTarget=M,y=S),M=y,v&&_)t:{for(S=v,f=_,d=0,p=S;p;p=gn(p))d++;for(p=0,y=f;y;y=gn(y))p++;for(;0<d-p;)S=gn(S),d--;for(;0<p-d;)f=gn(f),p--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break t;S=gn(S),f=gn(f)}S=null}else S=null;v!==null&&Xl(m,h,v,S,!1),_!==null&&M!==null&&Xl(m,M,_,S,!0)}}e:{if(h=u?kn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var I=Bp;else if($l(h))if(td)I=Wp;else{I=$p;var C=Hp}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=Vp);if(I&&(I=I(e,u))){ed(m,I,n,g);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Io(h,"number",h.value)}switch(C=u?kn(u):window,e){case"focusin":($l(C)||C.contentEditable==="true")&&(Sn=C,Do=u,yr=null);break;case"focusout":yr=Do=Sn=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,Ql(m,n,g);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":Ql(m,n,g)}var E;if(Da)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else _n?qc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Xc&&n.locale!=="ko"&&(_n||T!=="onCompositionStart"?T==="onCompositionEnd"&&_n&&(E=Yc()):(At=g,Oa="value"in At?At.value:At.textContent,_n=!0)),C=$i(u,T),0<C.length&&(T=new bl(T,e,null,n,g),m.push({event:T,listeners:C}),E?T.data=E:(E=Zc(n),E!==null&&(T.data=E)))),(E=jp?Up(e,n):zp(e,n))&&(u=$i(u,"onBeforeInput"),0<u.length&&(g=new bl("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:u}),g.data=E))}dd(m,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ar(e,n),s!=null&&r.unshift(Dr(e,s,i)),s=Ar(e,t),s!=null&&r.push(Dr(e,s,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xl(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ar(n,s),l!=null&&o.unshift(Dr(n,l,a))):i||(l=Ar(n,s),l!=null&&o.push(Dr(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qp=/\r\n?/g,Zp=/\u0000|\uFFFD/g;function ql(e){return(typeof e=="string"?e:""+e).replace(qp,`
`).replace(Zp,"")}function fi(e,t,n){if(t=ql(t),ql(e)!==t&&n)throw Error(w(425))}function Vi(){}var jo=null,Uo=null;function zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,Zl=typeof Promise=="function"?Promise:void 0,tm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zl<"u"?function(e){return Zl.resolve(null).then(e).catch(nm)}:bo;function nm(e){setTimeout(function(){throw e})}function Ys(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),Je="__reactFiber$"+qn,Mr="__reactProps$"+qn,dt="__reactContainer$"+qn,Fo="__reactEvents$"+qn,rm="__reactListeners$"+qn,im="__reactHandles$"+qn;function qt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=eu(e);e!==null;){if(n=e[Je])return n;e=eu(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[Je]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function vs(e){return e[Mr]||null}var Bo=[],xn=-1;function Ht(e){return{current:e}}function $(e){0>xn||(e.current=Bo[xn],Bo[xn]=null,xn--)}function F(e,t){xn++,Bo[xn]=e.current,e.current=t}var Ft={},ce=Ht(Ft),we=Ht(!1),on=Ft;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Wi(){$(we),$(ce)}function tu(e,t,n){if(ce.current!==Ft)throw Error(w(168));F(ce,t),F(we,n)}function hd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Hh(e)||"Unknown",i));return Q({},n,r)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,on=ce.current,F(ce,e),F(we,we.current),!0}function nu(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=hd(e,t,on),r.__reactInternalMemoizedMergedChildContext=e,$(we),$(ce),F(ce,e)):$(we),F(we,n)}var rt=null,ws=!1,Xs=!1;function pd(e){rt===null?rt=[e]:rt.push(e)}function sm(e){ws=!0,pd(e)}function $t(){if(!Xs&&rt!==null){Xs=!0;var e=0,t=U;try{var n=rt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,ws=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),bc(Aa,$t),i}finally{U=t,Xs=!1}}return null}var En=[],Cn=0,Ki=null,Qi=0,Ne=[],Pe=0,an=null,st=1,ot="";function Jt(e,t){En[Cn++]=Qi,En[Cn++]=Ki,Ki=e,Qi=t}function md(e,t,n){Ne[Pe++]=st,Ne[Pe++]=ot,Ne[Pe++]=an,an=e;var r=st;e=ot;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var s=32-Be(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,st=1<<32-Be(t)+i|n<<i|r,ot=s+e}else st=1<<s|n<<i|r,ot=e}function ja(e){e.return!==null&&(Jt(e,1),md(e,1,0))}function Ua(e){for(;e===Ki;)Ki=En[--Cn],En[Cn]=null,Qi=En[--Cn],En[Cn]=null;for(;e===an;)an=Ne[--Pe],Ne[Pe]=null,ot=Ne[--Pe],Ne[Pe]=null,st=Ne[--Pe],Ne[Pe]=null}var xe=null,ke=null,V=!1,be=null;function gd(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ke=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:st,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ke=null,!0):!1;default:return!1}}function Ho(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $o(e){if(V){var t=ke;if(t){var n=t;if(!ru(e,t)){if(Ho(e))throw Error(w(418));t=Rt(n.nextSibling);var r=xe;t&&ru(e,t)?gd(r,n):(e.flags=e.flags&-4097|2,V=!1,xe=e)}}else{if(Ho(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,xe=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function hi(e){if(e!==xe)return!1;if(!V)return iu(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zo(e.type,e.memoizedProps)),t&&(t=ke)){if(Ho(e))throw yd(),Error(w(418));for(;t;)gd(e,t),t=Rt(t.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=xe?Rt(e.stateNode.nextSibling):null;return!0}function yd(){for(var e=ke;e;)e=Rt(e.nextSibling)}function Hn(){ke=xe=null,V=!1}function za(e){be===null?be=[e]:be.push(e)}var om=yt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function su(e){var t=e._init;return t(e._payload)}function vd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=jt(f,d),f.index=0,f.sibling=null,f}function s(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,y){return d===null||d.tag!==6?(d=io(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function l(f,d,p,y){var I=p.type;return I===wn?g(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===_t&&su(I)===d.type)?(y=i(d,p.props),y.ref=or(f,d,p),y.return=f,y):(y=Oi(p.type,p.key,p.props,null,f.mode,y),y.ref=or(f,d,p),y.return=f,y)}function u(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=so(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function g(f,d,p,y,I){return d===null||d.tag!==7?(d=rn(p,f.mode,y,I),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=io(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ri:return p=Oi(d.type,d.key,d.props,null,f.mode,p),p.ref=or(f,null,d),p.return=f,p;case vn:return d=so(d,f.mode,p),d.return=f,d;case _t:var y=d._init;return m(f,y(d._payload),p)}if(cr(d)||tr(d))return d=rn(d,f.mode,p,null),d.return=f,d;pi(f,d)}return null}function h(f,d,p,y){var I=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:return p.key===I?l(f,d,p,y):null;case vn:return p.key===I?u(f,d,p,y):null;case _t:return I=p._init,h(f,d,I(p._payload),y)}if(cr(p)||tr(p))return I!==null?null:g(f,d,p,y,null);pi(f,p)}return null}function v(f,d,p,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(d,f,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ri:return f=f.get(y.key===null?p:y.key)||null,l(d,f,y,I);case vn:return f=f.get(y.key===null?p:y.key)||null,u(d,f,y,I);case _t:var C=y._init;return v(f,d,p,C(y._payload),I)}if(cr(y)||tr(y))return f=f.get(p)||null,g(d,f,y,I,null);pi(d,y)}return null}function _(f,d,p,y){for(var I=null,C=null,E=d,T=d=0,b=null;E!==null&&T<p.length;T++){E.index>T?(b=E,E=null):b=E.sibling;var R=h(f,E,p[T],y);if(R===null){E===null&&(E=b);break}e&&E&&R.alternate===null&&t(f,E),d=s(R,d,T),C===null?I=R:C.sibling=R,C=R,E=b}if(T===p.length)return n(f,E),V&&Jt(f,T),I;if(E===null){for(;T<p.length;T++)E=m(f,p[T],y),E!==null&&(d=s(E,d,T),C===null?I=E:C.sibling=E,C=E);return V&&Jt(f,T),I}for(E=r(f,E);T<p.length;T++)b=v(E,f,T,p[T],y),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?T:b.key),d=s(b,d,T),C===null?I=b:C.sibling=b,C=b);return e&&E.forEach(function(oe){return t(f,oe)}),V&&Jt(f,T),I}function S(f,d,p,y){var I=tr(p);if(typeof I!="function")throw Error(w(150));if(p=I.call(p),p==null)throw Error(w(151));for(var C=I=null,E=d,T=d=0,b=null,R=p.next();E!==null&&!R.done;T++,R=p.next()){E.index>T?(b=E,E=null):b=E.sibling;var oe=h(f,E,R.value,y);if(oe===null){E===null&&(E=b);break}e&&E&&oe.alternate===null&&t(f,E),d=s(oe,d,T),C===null?I=oe:C.sibling=oe,C=oe,E=b}if(R.done)return n(f,E),V&&Jt(f,T),I;if(E===null){for(;!R.done;T++,R=p.next())R=m(f,R.value,y),R!==null&&(d=s(R,d,T),C===null?I=R:C.sibling=R,C=R);return V&&Jt(f,T),I}for(E=r(f,E);!R.done;T++,R=p.next())R=v(E,f,T,R.value,y),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?T:R.key),d=s(R,d,T),C===null?I=R:C.sibling=R,C=R);return e&&E.forEach(function(ge){return t(f,ge)}),V&&Jt(f,T),I}function M(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===wn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:e:{for(var I=p.key,C=d;C!==null;){if(C.key===I){if(I=p.type,I===wn){if(C.tag===7){n(f,C.sibling),d=i(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===_t&&su(I)===C.type){n(f,C.sibling),d=i(C,p.props),d.ref=or(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===wn?(d=rn(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Oi(p.type,p.key,p.props,null,f.mode,y),y.ref=or(f,d,p),y.return=f,f=y)}return o(f);case vn:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=so(p,f.mode,y),d.return=f,f=d}return o(f);case _t:return C=p._init,M(f,d,C(p._payload),y)}if(cr(p))return _(f,d,p,y);if(tr(p))return S(f,d,p,y);pi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=io(p,f.mode,y),d.return=f,f=d),o(f)):n(f,d)}return M}var $n=vd(!0),wd=vd(!1),Ji=Ht(null),Yi=null,An=null,ba=null;function Fa(){ba=An=Yi=null}function Ba(e){var t=Ji.current;$(Ji),e._currentValue=t}function Vo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Yi=e,ba=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(ba!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Yi===null)throw Error(w(308));An=e,Yi.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var Zt=null;function Ha(e){Zt===null?Zt=[e]:Zt.push(e)}function _d(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ha(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,Ha(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}function ou(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var i=e.updateQueue;St=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,g=u=l=null,a=s;do{var h=a.lane,v=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,S=a;switch(h=t,v=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){m=_.call(v,m,h);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(v,m,h):_,h==null)break e;m=Q({},m,h);break e;case 2:St=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=v,l=m):g=g.next=v,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);un|=o,e.lanes=o,e.memoizedState=m}}function au(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Jr={},qe=Ht(Jr),jr=Ht(Jr),Ur=Ht(Jr);function en(e){if(e===Jr)throw Error(w(174));return e}function Va(e,t){switch(F(Ur,t),F(jr,e),F(qe,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xo(t,e)}$(qe),F(qe,t)}function Vn(){$(qe),$(jr),$(Ur)}function Id(e){en(Ur.current);var t=en(qe.current),n=xo(t,e.type);t!==n&&(F(jr,e),F(qe,n))}function Wa(e){jr.current===e&&($(qe),$(jr))}var G=Ht(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qs=[];function Ga(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var Ci=yt.ReactCurrentDispatcher,Zs=yt.ReactCurrentBatchConfig,ln=0,K=null,Z=null,te=null,Zi=!1,vr=!1,zr=0,am=0;function ae(){throw Error(w(321))}function Ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Qa(e,t,n,r,i,s){if(ln=s,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ci.current=e===null||e.memoizedState===null?dm:fm,e=n(r,i),vr){s=0;do{if(vr=!1,zr=0,25<=s)throw Error(w(301));s+=1,te=Z=null,t.updateQueue=null,Ci.current=hm,e=n(r,i)}while(vr)}if(Ci.current=es,t=Z!==null&&Z.next!==null,ln=0,te=Z=K=null,Zi=!1,t)throw Error(w(300));return e}function Ja(){var e=zr!==0;return zr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?K.memoizedState=te=e:te=te.next=e,te}function De(){if(Z===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?K.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?K.memoizedState=te=e:te=te.next=e}return te}function br(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var g=u.lane;if((ln&g)===g)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,K.lanes|=g,un|=g}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ve(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,K.lanes|=s,un|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function to(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ve(s,t.memoizedState)||(ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function kd(){}function xd(e,t){var n=K,r=De(),i=t(),s=!Ve(r.memoizedState,i);if(s&&(r.memoizedState=i,ve=!0),r=r.queue,Ya(Ad.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Cd.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(w(349));ln&30||Ed(n,t,i)}return i}function Ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cd(e,t,n,r){t.value=n,t.getSnapshot=r,Td(t)&&Nd(e)}function Ad(e,t,n){return n(function(){Td(t)&&Nd(e)})}function Td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Nd(e){var t=ft(e,1);t!==null&&He(t,e,1,-1)}function lu(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=cm.bind(null,K,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pd(){return De().memoizedState}function Ai(e,t,n,r){var i=Qe();K.flags|=e,i.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function _s(e,t,n,r){var i=De();r=r===void 0?null:r;var s=void 0;if(Z!==null){var o=Z.memoizedState;if(s=o.destroy,r!==null&&Ka(r,o.deps)){i.memoizedState=Fr(t,n,s,r);return}}K.flags|=e,i.memoizedState=Fr(1|t,n,s,r)}function uu(e,t){return Ai(8390656,8,e,t)}function Ya(e,t){return _s(2048,8,e,t)}function Od(e,t){return _s(4,2,e,t)}function Rd(e,t){return _s(4,4,e,t)}function Ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dd(e,t,n){return n=n!=null?n.concat([e]):null,_s(4,4,Ld.bind(null,t,e),n)}function Xa(){}function Md(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ud(e,t,n){return ln&21?(Ve(n,t)||(n=Hc(),K.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function lm(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Zs.transition;Zs.transition={};try{e(!1),t()}finally{U=n,Zs.transition=r}}function zd(){return De().memoizedState}function um(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bd(e))Fd(t,n);else if(n=_d(e,t,n,r),n!==null){var i=fe();He(n,e,r,i),Bd(n,t,r)}}function cm(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bd(e))Fd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ve(a,o)){var l=t.interleaved;l===null?(i.next=i,Ha(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_d(e,t,i,r),n!==null&&(i=fe(),He(n,e,r,i),Bd(n,t,r))}}function bd(e){var t=e.alternate;return e===K||t!==null&&t===K}function Fd(e,t){vr=Zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}var es={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},dm={readContext:Le,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=um.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:lu,useDebugValue:Xa,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=lu(!1),t=e[0];return e=lm.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Qe();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ne===null)throw Error(w(349));ln&30||Ed(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,uu(Ad.bind(null,r,s,e),[e]),r.flags|=2048,Fr(9,Cd.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Qe(),t=ne.identifierPrefix;if(V){var n=ot,r=st;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fm={readContext:Le,useCallback:Md,useContext:Le,useEffect:Ya,useImperativeHandle:Dd,useInsertionEffect:Od,useLayoutEffect:Rd,useMemo:jd,useReducer:eo,useRef:Pd,useState:function(){return eo(br)},useDebugValue:Xa,useDeferredValue:function(e){var t=De();return Ud(t,Z.memoizedState,e)},useTransition:function(){var e=eo(br)[0],t=De().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:xd,useId:zd,unstable_isNewReconciler:!1},hm={readContext:Le,useCallback:Md,useContext:Le,useEffect:Ya,useImperativeHandle:Dd,useInsertionEffect:Od,useLayoutEffect:Rd,useMemo:jd,useReducer:to,useRef:Pd,useState:function(){return to(br)},useDebugValue:Xa,useDeferredValue:function(e){var t=De();return Z===null?t.memoizedState=e:Ud(t,Z.memoizedState,e)},useTransition:function(){var e=to(br)[0],t=De().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:xd,useId:zd,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Mt(e),s=ut(r,i);s.payload=t,n!=null&&(s.callback=n),t=Lt(e,s,i),t!==null&&(He(t,e,i,r),Ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Mt(e),s=ut(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Lt(e,s,i),t!==null&&(He(t,e,i,r),Ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Mt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(He(t,e,r,n),Ei(t,e,r))}};function cu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,s):!0}function Hd(e,t,n){var r=!1,i=Ft,s=t.contextType;return typeof s=="object"&&s!==null?s=Le(s):(i=_e(t)?on:ce.current,r=t.contextTypes,s=(r=r!=null)?Bn(e,i):Ft),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Go(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$a(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Le(s):(s=_e(t)?on:ce.current,i.context=Bn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Wo(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ss.enqueueReplaceState(i,i.state,null),Xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=Bh(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ko(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function $d(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ns||(ns=!0,ra=r),Ko(e,t)},n}function Vd(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ko(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ko(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tm.bind(null,e,t,n),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var mm=yt.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?wd(t,null,n,r):$n(t,e.child,n,r)}function mu(e,t,n,r,i){n=n.render;var s=t.ref;return Dn(t,i),r=Qa(e,t,n,r,s,i),n=Ja(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(V&&n&&ja(t),t.flags|=1,de(e,t,r,i),t.child)}function gu(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!sl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Wd(e,t,s,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(o,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=jt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Rr(s,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ht(e,t,i)}return Qo(e,t,n,r,i)}function Gd(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Nn,Ie),Ie|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Nn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(Nn,Ie),Ie|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,F(Nn,Ie),Ie|=r;return de(e,t,i,n),t.child}function Kd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qo(e,t,n,r,i){var s=_e(n)?on:ce.current;return s=Bn(t,s),Dn(t,i),n=Qa(e,t,n,r,s,i),r=Ja(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(V&&r&&ja(t),t.flags|=1,de(e,t,n,i),t.child)}function yu(e,t,n,r,i){if(_e(n)){var s=!0;Gi(t)}else s=!1;if(Dn(t,i),t.stateNode===null)Ti(e,t),Hd(t,n,r),Go(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=_e(n)?on:ce.current,u=Bn(t,u));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&du(t,o,r,u),St=!1;var h=t.memoizedState;o.state=h,Xi(t,r,o,i),l=t.memoizedState,a!==r||h!==l||we.current||St?(typeof g=="function"&&(Wo(t,n,g,r),l=t.memoizedState),(a=St||cu(t,n,a,r,h,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Sd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),o.props=u,m=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=_e(n)?on:ce.current,l=Bn(t,l));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||h!==l)&&du(t,o,r,l),St=!1,h=t.memoizedState,o.state=h,Xi(t,r,o,i);var _=t.memoizedState;a!==m||h!==_||we.current||St?(typeof v=="function"&&(Wo(t,n,v,r),_=t.memoizedState),(u=St||cu(t,n,u,r,h,_,l)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Jo(e,t,n,r,s,i)}function Jo(e,t,n,r,i,s){Kd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&nu(t,n,!1),ht(e,t,s);r=t.stateNode,mm.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=$n(t,e.child,null,s),t.child=$n(t,null,a,s)):de(e,t,a,s),t.memoizedState=r.state,i&&nu(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tu(e,t.context,!1),Va(e,t.containerInfo)}function vu(e,t,n,r,i){return Hn(),za(i),t.flags|=256,de(e,t,n,r),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jd(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(G,i&1),e===null)return $o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xs(o,r,0,null),e=rn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xo(n),t.memoizedState=Yo,e):qa(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gm(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=jt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jt(a,s):(s=rn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Xo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Yo,r}return s=e.child,e=s.sibling,r=jt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qa(e,t){return t=xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,r){return r!==null&&za(r),$n(t,e.child,null,n),e=qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gm(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(w(422))),mi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=xs({mode:"visible",children:r.children},i,0,null),s=rn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&$n(t,e.child,null,o),t.child.memoizedState=Xo(o),t.memoizedState=Yo,s);if(!(t.mode&1))return mi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=no(s,r,void 0),mi(e,t,o,r)}if(a=(o&e.childLanes)!==0,ve||a){if(r=ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ft(e,i),He(r,e,i,-1))}return il(),r=no(Error(w(421))),mi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ke=Rt(i.nextSibling),xe=t,V=!0,be=null,e!==null&&(Ne[Pe++]=st,Ne[Pe++]=ot,Ne[Pe++]=an,st=e.id,ot=e.overflow,an=t),t=qa(t,r.children),t.flags|=4096,t)}function wu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vo(e.return,t,n)}function ro(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yd(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(de(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wu(e,n,t);else if(e.tag===19)wu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ro(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ro(t,!0,n,null,s);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ym(e,t,n){switch(t.tag){case 3:Qd(t),Hn();break;case 5:Id(t);break;case 1:_e(t.type)&&Gi(t);break;case 4:Va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Jd(e,t,n):(F(G,G.current&1),e=ht(e,t,n),e!==null?e.sibling:null);F(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Gd(e,t,n)}return ht(e,t,n)}var Xd,qo,qd,Zd;Xd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qo=function(){};qd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(qe.current);var s=null;switch(n){case"input":i=_o(e,i),r=_o(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=ko(e,i),r=ko(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vi)}Eo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Er.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Er.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Zd=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vm(e,t,n){var r=t.pendingProps;switch(Ua(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return _e(t.type)&&Wi(),le(t),null;case 3:return r=t.stateNode,Vn(),$(we),$(ce),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(oa(be),be=null))),qo(e,t),le(t),null;case 5:Wa(t);var i=en(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)qd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return le(t),null}if(e=en(qe.current),hi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Je]=t,r[Mr]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)B(fr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Tl(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Pl(r,s),B("invalid",r)}Eo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fi(r.textContent,a,e),i=["children",""+a]):Er.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":ii(r),Nl(r,s,!0);break;case"textarea":ii(r),Ol(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ac(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Je]=t,e[Mr]=r,Xd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Co(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)B(fr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Tl(e,r),i=_o(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":Pl(e,r),i=ko(e,r),B("invalid",e);break;default:i=r}Eo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pc(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tc(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cr(e,l):typeof l=="number"&&Cr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Er.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",e):l!=null&&Ia(e,s,l,o))}switch(n){case"input":ii(e),Nl(e,r,!1);break;case"textarea":ii(e),Ol(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Pn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Zd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=en(Ur.current),en(qe.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(s=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return le(t),null;case 13:if($(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&ke!==null&&t.mode&1&&!(t.flags&128))yd(),Hn(),t.flags|=98560,s=!1;else if(s=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Je]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),s=!1}else be!==null&&(oa(be),be=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ee===0&&(ee=3):il())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return Vn(),qo(e,t),e===null&&Lr(t.stateNode.containerInfo),le(t),null;case 10:return Ba(t.type._context),le(t),null;case 17:return _e(t.type)&&Wi(),le(t),null;case 19:if($(G),s=t.memoizedState,s===null)return le(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ar(s,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=qi(e),o!==null){for(t.flags|=128,ar(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&Y()>Gn&&(t.flags|=128,r=!0,ar(s,!1),t.lanes=4194304)}else{if(!r)if(e=qi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!V)return le(t),null}else 2*Y()-s.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,ar(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,n=G.current,F(G,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return rl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function wm(e,t){switch(Ua(t),t.tag){case 1:return _e(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),$(we),$(ce),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if($(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(G),null;case 4:return Vn(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return rl(),null;case 24:return null;default:return null}}var gi=!1,ue=!1,_m=typeof WeakSet=="function"?WeakSet:Set,x=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Zo(e,t,n){try{n()}catch(r){J(e,t,r)}}var _u=!1;function Sm(e,t){if(jo=Bi,e=id(),Ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,g=0,m=e,h=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++g===r&&(l=o),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uo={focusedElem:e,selectionRange:n},Bi=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,M=_.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ue(t.type,S),M);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){J(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return _=_u,_u=!1,_}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zo(t,n,s)}i=i.next}while(i!==r)}}function Is(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ef(e){var t=e.alternate;t!==null&&(e.alternate=null,ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[Mr],delete t[Fo],delete t[rm],delete t[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tf(e){return e.tag===5||e.tag===3||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}var re=null,ze=!1;function vt(e,t,n){for(n=n.child;n!==null;)nf(e,t,n),n=n.sibling}function nf(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:ue||Tn(n,t);case 6:var r=re,i=ze;re=null,vt(e,t,n),re=r,ze=i,re!==null&&(ze?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(ze?(e=re,n=n.stateNode,e.nodeType===8?Ys(e.parentNode,n):e.nodeType===1&&Ys(e,n),Pr(e)):Ys(re,n.stateNode));break;case 4:r=re,i=ze,re=n.stateNode.containerInfo,ze=!0,vt(e,t,n),re=r,ze=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zo(n,t,o),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!ue&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,vt(e,t,n),ue=r):vt(e,t,n);break;default:vt(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _m),t.forEach(function(r){var i=Pm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,ze=!1;break e;case 3:re=a.stateNode.containerInfo,ze=!0;break e;case 4:re=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(re===null)throw Error(w(160));nf(s,o,i),re=null,ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rf(t,e),t=t.sibling}function rf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),Ke(e),r&4){try{wr(3,e,e.return),Is(3,e)}catch(S){J(e,e.return,S)}try{wr(5,e,e.return)}catch(S){J(e,e.return,S)}}break;case 1:je(t,e),Ke(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(je(t,e),Ke(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var i=e.stateNode;try{Cr(i,"")}catch(S){J(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ec(i,s),Co(a,o);var u=Co(a,s);for(o=0;o<l.length;o+=2){var g=l[o],m=l[o+1];g==="style"?Pc(i,m):g==="dangerouslySetInnerHTML"?Tc(i,m):g==="children"?Cr(i,m):Ia(i,g,m,u)}switch(a){case"input":So(i,s);break;case"textarea":Cc(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Pn(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Pn(i,!!s.multiple,s.defaultValue,!0):Pn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mr]=s}catch(S){J(e,e.return,S)}}break;case 6:if(je(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){J(e,e.return,S)}}break;case 3:if(je(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(S){J(e,e.return,S)}break;case 4:je(t,e),Ke(e);break;case 13:je(t,e),Ke(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tl=Y())),r&4&&Iu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(u=ue)||g,je(t,e),ue=u):je(t,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(x=e,g=e.child;g!==null;){for(m=x=g;x!==null;){switch(h=x,v=h.child,h.tag){case 0:case 11:case 14:case 15:wr(4,h,h.return);break;case 1:Tn(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(S){J(r,n,S)}}break;case 5:Tn(h,h.return);break;case 22:if(h.memoizedState!==null){xu(m);continue}}v!==null?(v.return=h,x=v):xu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nc("display",o))}catch(S){J(e,e.return,S)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){J(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:je(t,e),Ke(e),r&4&&Iu(e);break;case 21:break;default:je(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cr(i,""),r.flags&=-33);var s=Su(e);na(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Su(e);ta(e,a,o);break;default:throw Error(w(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){x=e,sf(e)}function sf(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ue;a=gi;var u=ue;if(gi=o,(ue=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?Eu(i):l!==null?(l.return=o,x=l):Eu(i);for(;s!==null;)x=s,sf(s),s=s.sibling;x=i,gi=a,ue=u}ku(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):ku(e)}}function ku(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Is(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&au(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}au(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Pr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ue||t.flags&512&&ea(t)}catch(h){J(t,t.return,h)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function xu(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function Eu(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Is(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){J(t,i,l)}}var s=t.return;try{ea(t)}catch(l){J(t,s,l)}break;case 5:var o=t.return;try{ea(t)}catch(l){J(t,o,l)}}}catch(l){J(t,t.return,l)}if(t===e){x=null;break}var a=t.sibling;if(a!==null){a.return=t.return,x=a;break}x=t.return}}var km=Math.ceil,ts=yt.ReactCurrentDispatcher,Za=yt.ReactCurrentOwner,Re=yt.ReactCurrentBatchConfig,D=0,ne=null,q=null,ie=0,Ie=0,Nn=Ht(0),ee=0,Br=null,un=0,ks=0,el=0,_r=null,ye=null,tl=0,Gn=1/0,nt=null,ns=!1,ra=null,Dt=null,yi=!1,Tt=null,rs=0,Sr=0,ia=null,Ni=-1,Pi=0;function fe(){return D&6?Y():Ni!==-1?Ni:Ni=Y()}function Mt(e){return e.mode&1?D&2&&ie!==0?ie&-ie:om.transition!==null?(Pi===0&&(Pi=Hc()),Pi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Jc(e.type)),e):1}function He(e,t,n,r){if(50<Sr)throw Sr=0,ia=null,Error(w(185));Gr(e,n,r),(!(D&2)||e!==ne)&&(e===ne&&(!(D&2)&&(ks|=n),ee===4&&kt(e,ie)),Se(e,r),n===1&&D===0&&!(t.mode&1)&&(Gn=Y()+500,ws&&$t()))}function Se(e,t){var n=e.callbackNode;op(e,t);var r=Fi(e,e===ne?ie:0);if(r===0)n!==null&&Dl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dl(n),t===1)e.tag===0?sm(Cu.bind(null,e)):pd(Cu.bind(null,e)),tm(function(){!(D&6)&&$t()}),n=null;else{switch($c(r)){case 1:n=Aa;break;case 4:n=Fc;break;case 16:n=bi;break;case 536870912:n=Bc;break;default:n=bi}n=hf(n,of.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function of(e,t){if(Ni=-1,Pi=0,D&6)throw Error(w(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Fi(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=is(e,r);else{t=r;var i=D;D|=2;var s=lf();(ne!==e||ie!==t)&&(nt=null,Gn=Y()+500,nn(e,t));do try{Cm();break}catch(a){af(e,a)}while(!0);Fa(),ts.current=s,D=i,q!==null?t=0:(ne=null,ie=0,t=ee)}if(t!==0){if(t===2&&(i=Oo(e),i!==0&&(r=i,t=sa(e,i))),t===1)throw n=Br,nn(e,0),kt(e,r),Se(e,Y()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!xm(i)&&(t=is(e,r),t===2&&(s=Oo(e),s!==0&&(r=s,t=sa(e,s))),t===1))throw n=Br,nn(e,0),kt(e,r),Se(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Yt(e,ye,nt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=tl+500-Y(),10<t)){if(Fi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bo(Yt.bind(null,e,ye,nt),t);break}Yt(e,ye,nt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Be(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*km(r/1960))-r,10<r){e.timeoutHandle=bo(Yt.bind(null,e,ye,nt),r);break}Yt(e,ye,nt);break;case 5:Yt(e,ye,nt);break;default:throw Error(w(329))}}}return Se(e,Y()),e.callbackNode===n?of.bind(null,e):null}function sa(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=is(e,t),e!==2&&(t=ye,ye=n,t!==null&&oa(t)),e}function oa(e){ye===null?ye=e:ye.push.apply(ye,e)}function xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ve(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~el,t&=~ks,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function Cu(e){if(D&6)throw Error(w(327));Mn();var t=Fi(e,0);if(!(t&1))return Se(e,Y()),null;var n=is(e,t);if(e.tag!==0&&n===2){var r=Oo(e);r!==0&&(t=r,n=sa(e,r))}if(n===1)throw n=Br,nn(e,0),kt(e,t),Se(e,Y()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,ye,nt),Se(e,Y()),null}function nl(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Gn=Y()+500,ws&&$t())}}function cn(e){Tt!==null&&Tt.tag===0&&!(D&6)&&Mn();var t=D;D|=1;var n=Re.transition,r=U;try{if(Re.transition=null,U=1,e)return e()}finally{U=r,Re.transition=n,D=t,!(D&6)&&$t()}}function rl(){Ie=Nn.current,$(Nn)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,em(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ua(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wi();break;case 3:Vn(),$(we),$(ce),Ga();break;case 5:Wa(r);break;case 4:Vn();break;case 13:$(G);break;case 19:$(G);break;case 10:Ba(r.type._context);break;case 22:case 23:rl()}n=n.return}if(ne=e,q=e=jt(e.current,null),ie=Ie=t,ee=0,Br=null,el=ks=un=0,ye=_r=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zt=null}return e}function af(e,t){do{var n=q;try{if(Fa(),Ci.current=es,Zi){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zi=!1}if(ln=0,te=Z=K=null,vr=!1,zr=0,Za.current=null,n===null||n.return===null){ee=1,Br=t,q=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=hu(o);if(v!==null){v.flags&=-257,pu(v,o,a,s,t),v.mode&1&&fu(s,u,t),t=v,l=u;var _=t.updateQueue;if(_===null){var S=new Set;S.add(l),t.updateQueue=S}else _.add(l);break e}else{if(!(t&1)){fu(s,u,t),il();break e}l=Error(w(426))}}else if(V&&a.mode&1){var M=hu(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),pu(M,o,a,s,t),za(Wn(l,a));break e}}s=l=Wn(l,a),ee!==4&&(ee=2),_r===null?_r=[s]:_r.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=$d(s,l,t);ou(s,f);break e;case 1:a=l;var d=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dt===null||!Dt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Vd(s,a,t);ou(s,y);break e}}s=s.return}while(s!==null)}cf(n)}catch(I){t=I,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function lf(){var e=ts.current;return ts.current=es,e===null?es:e}function il(){(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(un&268435455)&&!(ks&268435455)||kt(ne,ie)}function is(e,t){var n=D;D|=2;var r=lf();(ne!==e||ie!==t)&&(nt=null,nn(e,t));do try{Em();break}catch(i){af(e,i)}while(!0);if(Fa(),D=n,ts.current=r,q!==null)throw Error(w(261));return ne=null,ie=0,ee}function Em(){for(;q!==null;)uf(q)}function Cm(){for(;q!==null&&!Xh();)uf(q)}function uf(e){var t=ff(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?cf(e):q=t,Za.current=null}function cf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wm(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(n=vm(n,t,Ie),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Yt(e,t,n){var r=U,i=Re.transition;try{Re.transition=null,U=1,Am(e,t,n,r)}finally{Re.transition=i,U=r}return null}function Am(e,t,n,r){do Mn();while(Tt!==null);if(D&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ap(e,s),e===ne&&(q=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,hf(bi,function(){return Mn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Re.transition,Re.transition=null;var o=U;U=1;var a=D;D|=4,Za.current=null,Sm(e,n),rf(n,e),Kp(Uo),Bi=!!jo,Uo=jo=null,e.current=n,Im(n),qh(),D=a,U=o,Re.transition=s}else e.current=n;if(yi&&(yi=!1,Tt=e,rs=i),s=e.pendingLanes,s===0&&(Dt=null),tp(n.stateNode),Se(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ns)throw ns=!1,e=ra,ra=null,e;return rs&1&&e.tag!==0&&Mn(),s=e.pendingLanes,s&1?e===ia?Sr++:(Sr=0,ia=e):Sr=0,$t(),null}function Mn(){if(Tt!==null){var e=$c(rs),t=Re.transition,n=U;try{if(Re.transition=null,U=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,rs=0,D&6)throw Error(w(331));var i=D;for(D|=4,x=e.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var g=x;switch(g.tag){case 0:case 11:case 15:wr(8,g,s)}var m=g.child;if(m!==null)m.return=g,x=m;else for(;x!==null;){g=x;var h=g.sibling,v=g.return;if(ef(g),g===u){x=null;break}if(h!==null){h.return=v,x=h;break}x=v}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,x=f;break e}x=s.return}}var d=e.current;for(x=d;x!==null;){o=x;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,x=p;else e:for(o=d;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Is(9,a)}}catch(I){J(a,a.return,I)}if(a===o){x=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,x=y;break e}x=a.return}}if(D=i,$t(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(ps,e)}catch{}r=!0}return r}finally{U=n,Re.transition=t}}return!1}function Au(e,t,n){t=Wn(n,t),t=$d(e,t,1),e=Lt(e,t,1),t=fe(),e!==null&&(Gr(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Wn(n,e),e=Vd(t,e,1),t=Lt(t,e,1),e=fe(),t!==null&&(Gr(t,1,e),Se(t,e));break}}t=t.return}}function Tm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>Y()-tl?nn(e,0):el|=n),Se(e,t)}function df(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=fe();e=ft(e,t),e!==null&&(Gr(e,t,n),Se(e,n))}function Nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),df(e,n)}function Pm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),df(e,n)}var ff;ff=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,ym(e,t,n);ve=!!(e.flags&131072)}else ve=!1,V&&t.flags&1048576&&md(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ti(e,t),e=t.pendingProps;var i=Bn(t,ce.current);Dn(t,n),i=Qa(null,t,r,e,i,n);var s=Ja();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(s=!0,Gi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$a(t),i.updater=Ss,t.stateNode=i,i._reactInternals=t,Go(t,r,e,n),t=Jo(null,t,r,!0,s,n)):(t.tag=0,V&&s&&ja(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rm(r),e=Ue(r,e),i){case 0:t=Qo(null,t,r,e,n);break e;case 1:t=yu(null,t,r,e,n);break e;case 11:t=mu(null,t,r,e,n);break e;case 14:t=gu(null,t,r,Ue(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Qo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),yu(e,t,r,i,n);case 3:e:{if(Qd(t),e===null)throw Error(w(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Sd(e,t),Xi(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Wn(Error(w(423)),t),t=vu(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(w(424)),t),t=vu(e,t,r,n,i);break e}else for(ke=Rt(t.stateNode.containerInfo.firstChild),xe=t,V=!0,be=null,n=wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=ht(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Id(t),e===null&&$o(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,zo(r,i)?o=null:s!==null&&zo(r,s)&&(t.flags|=32),Kd(e,t),de(e,t,o,n),t.child;case 6:return e===null&&$o(t),null;case 13:return Jd(e,t,n);case 4:return Va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),mu(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,F(Ji,r._currentValue),r._currentValue=o,s!==null)if(Ve(s.value,o)){if(s.children===i.children&&!we.current){t=ht(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ut(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?l.next=l:(l.next=g.next,g.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vo(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vo(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=Le(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),gu(e,t,r,i,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Ti(e,t),t.tag=1,_e(r)?(e=!0,Gi(t)):e=!1,Dn(t,n),Hd(t,r,i),Go(t,r,i,n),Jo(null,t,r,!0,e,n);case 19:return Yd(e,t,n);case 22:return Gd(e,t,n)}throw Error(w(156,t.tag))};function hf(e,t){return bc(e,t)}function Om(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Om(e,t,n,r)}function sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rm(e){if(typeof e=="function")return sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===Ea)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oi(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")sl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wn:return rn(n.children,i,s,t);case ka:o=8,i|=8;break;case go:return e=Oe(12,n,t,i|2),e.elementType=go,e.lanes=s,e;case yo:return e=Oe(13,n,t,i),e.elementType=yo,e.lanes=s,e;case vo:return e=Oe(19,n,t,i),e.elementType=vo,e.lanes=s,e;case Ic:return xs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _c:o=10;break e;case Sc:o=9;break e;case xa:o=11;break e;case Ea:o=14;break e;case _t:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Oe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function rn(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function xs(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Ic,e.lanes=n,e.stateNode={isHidden:!1},e}function io(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function so(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bs(0),this.expirationTimes=bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ol(e,t,n,r,i,s,o,a,l){return e=new Lm(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Oe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(s),e}function Dm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pf(e){if(!e)return Ft;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(_e(n))return hd(e,n,t)}return t}function mf(e,t,n,r,i,s,o,a,l){return e=ol(n,r,!0,e,i,s,o,a,l),e.context=pf(null),n=e.current,r=fe(),i=Mt(n),s=ut(r,i),s.callback=t??null,Lt(n,s,i),e.current.lanes=i,Gr(e,i,r),Se(e,r),e}function Es(e,t,n,r){var i=t.current,s=fe(),o=Mt(i);return n=pf(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,o),e!==null&&(He(e,i,o,s),Ei(e,i,o)),o}function ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function al(e,t){Tu(e,t),(e=e.alternate)&&Tu(e,t)}function Mm(){return null}var gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}Cs.prototype.render=ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Es(e,t,null,null)};Cs.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Es(null,e,null,null)}),t[dt]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&Qc(e)}};function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function jm(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ss(o);s.call(u)}}var o=mf(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=o,e[dt]=o.current,Lr(e.nodeType===8?e.parentNode:e),cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ss(l);a.call(u)}}var l=ol(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=l,e[dt]=l.current,Lr(e.nodeType===8?e.parentNode:e),cn(function(){Es(t,l,n,r)}),l}function Ts(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ss(o);a.call(l)}}Es(t,o,e,i)}else o=jm(n,t,e,i,r);return ss(o)}Vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Ta(t,n|1),Se(t,Y()),!(D&6)&&(Gn=Y()+500,$t()))}break;case 13:cn(function(){var r=ft(e,1);if(r!==null){var i=fe();He(r,e,1,i)}}),al(e,1)}};Na=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=fe();He(t,e,134217728,n)}al(e,134217728)}};Wc=function(e){if(e.tag===13){var t=Mt(e),n=ft(e,t);if(n!==null){var r=fe();He(n,e,t,r)}al(e,t)}};Gc=function(){return U};Kc=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};To=function(e,t,n){switch(t){case"input":if(So(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vs(r);if(!i)throw Error(w(90));xc(r),So(r,i)}}}break;case"textarea":Cc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Lc=nl;Dc=cn;var Um={usingClientEntryPoint:!1,Events:[Qr,kn,vs,Oc,Rc,nl]},lr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||Mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{ps=vi.inject(zm),Xe=vi}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ul(t))throw Error(w(200));return Dm(e,t,null,n)};Ce.createRoot=function(e,t){if(!ul(e))throw Error(w(299));var n=!1,r="",i=gf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ol(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new ll(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Uc(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return cn(e)};Ce.hydrate=function(e,t,n){if(!As(t))throw Error(w(200));return Ts(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!ul(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=mf(t,null,e,1,n??null,i,!1,s,o),e[dt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Cs(t)};Ce.render=function(e,t,n){if(!As(t))throw Error(w(200));return Ts(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!As(e))throw Error(w(40));return e._reactRootContainer?(cn(function(){Ts(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Ce.unstable_batchedUpdates=nl;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!As(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ts(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function yf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yf)}catch(e){console.error(e)}}yf(),gc.exports=Ce;var bm=gc.exports,Pu=bm;po.createRoot=Pu.createRoot,po.hydrateRoot=Pu.hydrateRoot;const Fm=[{id:"20260318140001",title:"Morgan Stanley '2026 상반기 AI 대전환 임박'... GPT-5.4 인간 전문가 수준 달성",summary:"Morgan Stanley가 2026년 상반기 중 AI의 대규모 도약이 임박했다고 경고했다. OpenAI의 GPT-5.4 'Thinking' 모델이 GDPVal 벤치마크에서 83%를 기록하며 인간 전문가 수준에 도달했다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-03-18T14:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",breaking:!0,content:`월가의 대형 투자은행 Morgan Stanley가 AI 업계에 강력한 경고 메시지를 보냈다. **2026년 상반기 중 AI의 대규모 도약(AI Leap)이 임박했으며, 세계 대부분이 이에 대비하지 못하고 있다**는 것이다.

이 전망은 단순한 추측이 아니다. 최근 발표된 OpenAI의 GPT-5.4 'Thinking' 모델이 GDPVal 벤치마크에서 **83.0%**를 기록하며, 경제적 가치가 있는 작업에서 인간 전문가 수준에 도달했기 때문이다.

## 미국 AI 연구소들의 '전례 없는 컴퓨팅 집적'

Morgan Stanley 보고서의 핵심은 미국 주요 AI 연구소들에 **전례 없는 규모의 컴퓨팅 파워가 집중**되고 있다는 점이다. OpenAI, Anthropic, Google DeepMind, xAI 등이 수십만 개의 고성능 GPU를 확보하며 AI 학습 인프라를 급격히 확대하고 있다.

> "우리는 컴퓨팅 집적의 임계점에 도달했습니다. 지금까지 축적된 인프라가 올해 상반기 중 결실을 맺을 것입니다."

Morgan Stanley의 수석 테크 애널리스트는 보고서에서 이같이 밝혔다.

특히 주목할 점은 각 연구소가 **단순히 모델 크기만 키우는 것이 아니라, 추론(Reasoning) 능력을 획기적으로 개선하는 새로운 학습 방법론**을 개발했다는 것이다. GPT-5.4 'Thinking'이 그 첫 번째 결과물이다.

## GPT-5.4 'Thinking' 모델의 돌파구

OpenAI가 최근 공개한 GPT-5.4 'Thinking' 모델은 기존 AI의 한계를 넘어섰다. GDPVal 벤치마크는 **실제 경제적 가치를 창출하는 전문가 수준의 업무 능력**을 측정하는 지표로, 83%라는 점수는 다음을 의미한다:

- **법률 문서 분석**: 변호사 수준의 계약서 검토 가능
- **재무 모델링**: 투자 애널리스트급 분석 수행
- **의료 진단 보조**: 전문의 수준의 증상 분석
- **코드 개발**: 시니어 개발자 수준의 소프트웨어 작성

이는 **화이트칼라 직종의 상당 부분이 AI로 대체될 수 있음**을 시사한다.

> "83%라는 수치의 의미를 과소평가해서는 안 됩니다. 이는 대부분의 지식 노동자가 하는 일의 상당 부분을 AI가 동등하게 수행할 수 있다는 뜻입니다."

MIT AI 연구소의 한 교수는 이같이 경고했다.

## 기업들의 대응 현황

문제는 대부분의 기업들이 이러한 변화에 준비되지 않았다는 점이다. Morgan Stanley 조사에 따르면:

- Fortune 500 기업 중 **23%**만이 AI 전환 전략을 수립
- **68%**는 아직 실험 단계에 머물러 있음
- **9%**만이 AI를 핵심 업무에 실제 배치

이는 곧 닥칠 AI 도약에 대다수 기업이 **심각한 경쟁력 격차**에 직면할 수 있음을 의미한다.

## 투자 기회와 리스크

Morgan Stanley는 AI 도약이 **새로운 투자 기회와 동시에 상당한 리스크**를 수반한다고 분석했다.

**기회 영역:**
- AI 인프라 (NVIDIA, AMD, TSMC)
- 클라우드 서비스 (AWS, Azure, GCP)
- AI 애플리케이션 (Salesforce, ServiceNow)
- 데이터 플랫폼 (Snowflake, Databricks)

**리스크 영역:**
- 전통적 IT 서비스 기업
- 단순 반복 업무 의존 기업
- AI 전환 지연 기업

## 한국 기업들의 과제

이 전망은 한국 기업들에게도 중요한 시사점을 제공한다. 글로벌 AI 도약이 시작되면, 한국 기업들도 빠르게 적응하지 않으면 경쟁력을 잃을 수 있다.

특히 제조업, 금융업, 전문 서비스 분야에서 AI 도입 속도가 기업 생존을 좌우할 것으로 보인다. 2026년 하반기가 되면 AI 전환에 성공한 기업과 그렇지 못한 기업 간의 격차가 더욱 뚜렷해질 전망이다.`},{id:"20260318140002",title:"NASA 화성 탐사로버, 사상 첫 AI 자율주행 성공... Anthropic Claude 탑재",summary:"NASA의 퍼서비어런스 로버가 AI를 활용한 최초의 화성 자율주행에 성공했다. Anthropic의 Claude 비전-언어 모델이 궤도 이미지를 분석해 최적 경로를 계획했다.",category:"로보틱스",author:"Prompt Daily 편집팀",date:"2026-03-18T13:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",breaking:!0,content:`인류의 우주 탐사 역사에 새로운 이정표가 세워졌다. NASA의 화성 탐사 로버 **퍼서비어런스(Perseverance)**가 **인공지능에 의해 완전히 계획된 최초의 화성 주행**을 성공적으로 완료했다.

이번 역사적 주행에 사용된 AI는 Anthropic의 **Claude 비전-언어 모델**이다. 지구에서 화성까지의 통신 지연(최대 24분)을 극복하기 위해, 로버가 스스로 환경을 분석하고 최적 경로를 결정한 것이다.

## 어떻게 가능했나

기존 화성 탐사 로버들은 지구 관제센터의 명령에 따라 움직였다. 매 이동 전 과학자들이 궤도 이미지를 분석하고, 안전한 경로를 수동으로 프로그래밍해야 했다. 이 과정에 며칠이 소요되기도 했다.

새로운 시스템은 완전히 다르다:

1. **궤도 이미지 분석**: Claude가 화성 정찰 위성(MRO)의 고해상도 이미지 분석
2. **지형 데이터 통합**: 로버 카메라의 실시간 지형 데이터와 결합
3. **위험 요소 식별**: 암석, 모래 함정, 경사 등 위험 요소 자동 식별
4. **최적 경로 계산**: 과학적 가치와 안전성을 고려한 최적 경로 결정

> "Claude의 멀티모달 능력이 핵심이었습니다. 위성 이미지, 지형 데이터, 과학 목표를 동시에 이해하고 통합 분석할 수 있었죠."

NASA JPL(제트추진연구소)의 자율주행팀 리더는 이같이 설명했다.

## 첫 자율주행의 성과

이번 주행에서 퍼서비어런스는 **423미터**를 이동했다. 기존 방식으로는 1주일 이상 걸렸을 거리를 **단 하루**만에 주파한 것이다.

더 인상적인 것은 **과학적 발견**이다. AI가 계획한 경로 중간에 "관심 지점(Point of Interest)"을 스스로 식별하고, 해당 지점에서 샘플을 수집하도록 결정했다. 과학자들이 예상하지 못했던 특이한 광물 구조가 발견됐다.

> "AI가 인간 과학자가 놓쳤을 수 있는 것을 발견했습니다. 이것이 AI와 인간 협업의 진정한 가치입니다."

NASA 화성 탐사 프로그램 책임자의 평가다.

## 우주 탐사의 패러다임 전환

이번 성공은 **우주 탐사의 패러다임을 근본적으로 바꿀 수 있다**. 통신 지연이 더 긴 외행성 탐사(목성, 토성 등)에서 AI 자율성은 필수적이기 때문이다.

NASA는 이 기술을 다음 임무들에 확대 적용할 계획이다:

- **유로파 클리퍼**: 목성 위성 유로파 탐사 (2030년 도착 예정)
- **타이탄 드래곤플라이**: 토성 위성 타이탄 탐사 (2034년 도착 예정)
- **화성 샘플 귀환 임무**: 퍼서비어런스가 수집한 샘플 지구 귀환

## Anthropic과 NASA의 파트너십

Anthropicは 2024년부터 NASA와 우주 탐사 AI 파트너십을 맺고 있었다. Claude의 **안전 중심 설계(Constitutional AI)**가 우주 임무의 높은 신뢰성 요구사항에 적합했기 때문이다.

흥미로운 점은 Anthropic이 최근 미 국방부와의 계약을 거부하면서 논란이 됐지만, **NASA와의 협력은 적극 지속**하고 있다는 것이다. 회사 측은 "평화로운 과학 탐사에 AI를 사용하는 것은 우리의 미션과 일치한다"고 밝혔다.

## 민간 우주기업들도 주목

SpaceX, Blue Origin 등 민간 우주기업들도 이번 성과에 주목하고 있다. 향후 달 기지 건설, 화성 유인 탐사 등에서 AI 자율 시스템이 필수적일 것으로 예상되기 때문이다.

우주는 AI가 인간의 능력을 확장하는 가장 극적인 무대가 되고 있다.`},{id:"20260318140003",title:"펜타곤 AI 전쟁: Google 합류, Anthropic 배제... 업계 분열 심화",summary:"미 국방부가 300만 직원에게 Google AI 에이전트를 제공한다. 반면 Anthropic은 군사용 AI 거부로 '공급망 리스크'로 지정됐다. OpenAI·Google 직원 30명이 Anthropic 지지 성명에 서명하며 업계가 분열되고 있다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-03-18T13:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",breaking:!1,content:`미국 AI 업계가 **국방부(펜타곤) 계약**을 둘러싸고 깊은 분열에 빠졌다. Google이 펜타곤과 대규모 계약을 체결한 반면, Anthropic은 군사용 AI를 거부하다 '공급망 리스크'로 낙인찍혔다.

더 충격적인 것은 **OpenAI와 Google DeepMind 직원 30명 이상**이 경쟁사인 Anthropic을 공개 지지하고 나섰다는 점이다. AI 업계의 윤리적 균열이 표면화되고 있다.

## Google, 펜타곤 300만 직원에 AI 제공

Google은 미 국방부의 **비기밀(unclassified) 업무**에 AI 에이전트를 제공하는 계약을 체결했다. 대상은 펜타곤 소속 약 300만 명의 군인과 민간인 직원 전체다.

계약 내용에 따르면 Gemini 기반 AI가 다음 업무를 지원한다:

- **문서 작성 및 요약**: 보고서, 브리핑 자료 자동 생성
- **정보 검색**: 방대한 군 데이터베이스 검색
- **일정 관리**: 회의, 훈련 일정 최적화
- **번역**: 다국어 문서 실시간 번역

> "이것은 미국 국방력 강화를 위한 전략적 파트너십입니다. AI가 군인들의 행정 부담을 줄이고 본연의 임무에 집중할 수 있게 합니다."

Google Cloud의 공공부문 담당 부사장은 이같이 밝혔다.

## Anthropic, '공급망 리스크'로 지정

반면 Anthropic은 정반대 길을 걷고 있다. 회사는 펜타곤의 유사한 제안을 **거부**했고, 특히 다음 두 가지 사용 사례를 명시적으로 금지했다:

1. **미국 시민 대상 대규모 감시**에 AI 사용
2. **자율 무기 시스템**에서 인간 승인 없는 치명적 결정

이에 펜타곤은 Anthropic을 **'공급망 리스크(Supply Chain Risk)'**로 지정했다. 이는 국방 관련 계약에서 사실상 배제한다는 의미다.

## 업계 내부의 반발

놀라운 일이 벌어졌다. **OpenAI와 Google DeepMind 직원 30명 이상**이 Anthropic을 지지하는 법적 의견서(Amicus Brief)에 서명한 것이다.

서명자 중에는 **Google 수석 과학자 Jeff Dean**도 포함됐다. 의견서는 "펜타곤의 Anthropic 블랙리스트가 미국 AI 산업 전체를 위협한다"고 경고했다.

> "안전을 우선시하는 AI 기업을 처벌하면, 모든 기업이 안전보다 수익을 선택하도록 압박하는 것입니다. 이것은 재앙적 결과로 이어질 수 있습니다."

서명자 중 한 명인 전 OpenAI 연구원의 말이다.

## OpenAI 하드웨어 책임자 사임

또 다른 충격적 소식도 전해졌다. OpenAI의 하드웨어·로보틱스 책임자 **Caitlin Kalinowski**가 회사를 떠났다. 그녀는 사임 이유로 **국방부 계약**을 직접 언급했다.

> "사법적 감독 없는 국내 감시, 인간 승인 없는 치명적 자율성... 이런 문제들이 충분한 숙의 없이 결정됐습니다."

Kalinowski는 2024년 11월부터 OpenAI에서 일해왔다. 그녀의 사임은 OpenAI 내부에서도 국방부 계약에 대한 불만이 있음을 보여준다.

## 기술 기업과 군의 관계

이 논쟁은 더 큰 질문을 제기한다. **AI 기업이 군사 응용에 얼마나 협력해야 하는가?**

2018년 Google은 직원 반발로 **프로젝트 메이븐(Project Maven)**에서 철수한 바 있다. 그러나 8년이 지난 지금, Google은 다시 펜타곤과 손을 잡았다.

일부 전문가들은 "AI 군비 경쟁에서 미국이 뒤처질 수 없다"고 주장한다. 반면 다른 이들은 "AI 무기화의 위험이 단기적 이익보다 크다"고 반박한다.

## 소비자들의 반응

이 논쟁은 소비자 선택에도 영향을 미치고 있다. #QuitGPT 운동이 확산되며 ChatGPT에서 Claude로 이동하는 사용자가 늘고 있다. AI 기업의 **윤리적 입장**이 시장 경쟁력의 요소가 되고 있는 것이다.`},{id:"20260318140004",title:"AI 챗봇 시장 대지각변... ChatGPT 점유율 19%p 급락, Gemini 18% 돌파",summary:"2026년 AI 챗봇 시장에서 ChatGPT가 시장점유율 19%포인트를 잃었다. 반면 Google Gemini는 5.4%에서 18.2%로 급등했다. 기업들의 멀티 모델 전략 채택이 지형을 바꾸고 있다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-03-18T12:30:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`AI 챗봇 시장의 판도가 급격히 변하고 있다. 2년간 독주해온 ChatGPT가 **시장점유율 19%포인트를 잃은** 반면, Google Gemini가 급부상하며 경쟁 구도가 재편되고 있다.

최신 시장 조사에 따르면 Gemini의 점유율은 **5.4%에서 18.2%로 3배 이상 성장**했다. ChatGPT는 여전히 1위지만, 독점적 지위는 흔들리고 있다.

## 시장 점유율 변화 (2025→2026)

| 서비스 | 2025년 1월 | 2026년 3월 | 변화 |
|--------|-----------|-----------|------|
| ChatGPT | 68% | 49% | -19%p |
| Gemini | 5.4% | 18.2% | +12.8%p |
| Claude | 8% | 15% | +7%p |
| 기타 | 18.6% | 17.8% | -0.8%p |

## Gemini 급성장의 비결

Gemini의 성장에는 여러 요인이 있다:

**1. Google 생태계 통합**
Gmail, Google Docs, Google Meet 등 수십억 명이 사용하는 서비스에 Gemini가 기본 탑재됐다. 별도 가입 없이 AI를 사용할 수 있게 된 것이다.

**2. 가격 경쟁력**
Gemini 3.1 Pro의 API 가격은 입력 토큰 백만 개당 **2달러**로, GPT-4.5(10달러)의 5분의 1이다. 기업 고객들이 비용 절감을 위해 Gemini로 이동하고 있다.

**3. 성능 향상**
Gemini 3.1 시리즈는 16개 주요 벤치마크 중 13개에서 1위를 차지했다. 더 이상 "2등 AI"가 아니다.

> "작년만 해도 Gemini는 ChatGPT의 대안이었습니다. 올해는 많은 기업에서 첫 번째 선택지가 됐습니다."

Forrester Research의 AI 애널리스트 평가다.

## Claude의 조용한 성장

Anthropic의 Claude도 **8%에서 15%로 거의 2배 성장**했다. 특히 다음 분야에서 강세를 보이고 있다:

- **긴 문서 처리**: 100만 토큰 컨텍스트 윈도우
- **코딩**: SWE-Bench에서 GPT-4.5와 동률
- **안전성**: 기업들이 신뢰하는 Constitutional AI

최근 #QuitGPT 운동의 반사이익도 Claude에게 돌아가고 있다.

## 기업들의 '멀티 모델' 전략

더 근본적인 변화는 **기업들이 단일 AI가 아닌 여러 AI를 함께 사용**하기 시작했다는 점이다.

조사에 따르면 Fortune 500 기업의 **67%**가 2개 이상의 LLM을 사용 중이다. 용도에 따라 최적의 모델을 선택하는 것이다:

- **고객 서비스**: Claude (세밀한 뉘앙스 이해)
- **마케팅 콘텐츠**: GPT (창의적 글쓰기)
- **데이터 분석**: Gemini (구조화된 데이터 처리)
- **코드 개발**: 상황에 따라 혼용

> "하나의 AI에 올인하는 시대는 끝났습니다. 각 AI의 강점을 조합하는 것이 새로운 경쟁력입니다."

한 테크 기업 CTO의 말이다.

## OpenAI의 대응

OpenAI는 점유율 하락에도 **매출은 여전히 성장 중**이다. 연간 환산 매출 250억 달러로 Anthropic(190억 달러), Google AI 부문을 앞서고 있다.

회사는 GPT-5.4 'Thinking' 모델로 성능 격차를 유지하려 하고 있다. 또한 기업용 ChatGPT Enterprise 가격을 낮추며 Gemini의 가격 공세에 대응 중이다.

## 향후 전망

전문가들은 2026년 말까지 시장이 더욱 분산될 것으로 전망한다. ChatGPT가 여전히 1위를 유지하겠지만, **40% 이하로 점유율이 떨어질 가능성**도 있다.

AI 챗봇 시장은 스마트폰 시장처럼 iOS(ChatGPT)와 Android(Gemini)가 공존하는 구도로 안정화될 수 있다. 다만 Claude라는 '제3의 선택지'가 얼마나 성장하느냐가 변수다.`},{id:"20260318140005",title:"미군, 이란전에 AI 실전 투입 확인... '데이터 처리 혁신' vs '윤리적 우려'",summary:"미국 중부사령부 사령관이 이란전에서 다양한 AI 도구를 활용 중이라고 확인했다. AI가 방대한 데이터를 처리해 군인들을 지원하고 있지만, 군사 AI의 윤리적 문제도 부각되고 있다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-03-18T12:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1580752300992-559f8e4172ca?w=800",breaking:!1,content:`미국 군이 **이란과의 분쟁에서 인공지능을 실전 투입**하고 있음을 공식 확인했다. Brad Cooper 미 중부사령부(CENTCOM) 사령관은 기자회견에서 "다양한 첨단 AI 도구"가 현재 작전에 활용되고 있다고 밝혔다.

이는 **AI가 실제 전쟁에서 본격 사용되고 있음**을 미군이 처음으로 인정한 것이다. 기술계에서는 이를 역사적 전환점으로 보면서도 윤리적 우려를 제기하고 있다.

## AI가 담당하는 역할

Cooper 사령관에 따르면 AI는 주로 **데이터 처리와 분석**에 사용되고 있다:

- **정보 분석**: 위성, 드론, 통신 감청 등에서 수집된 방대한 데이터 처리
- **패턴 인식**: 적의 이동 패턴, 통신 패턴 분석
- **물류 최적화**: 보급품, 병력 이동 경로 계산
- **언어 번역**: 아랍어, 페르시아어 문서 실시간 번역

> "AI는 병사들이 쏟아지는 데이터 속에서 중요한 것을 찾아낼 수 있게 합니다. 과거에는 몇 주 걸리던 분석이 이제 몇 시간 만에 가능합니다."

Cooper 사령관은 이같이 설명했다.

## '킬 체인'에서의 역할은?

가장 민감한 질문은 AI가 **표적 선정이나 무기 발사 결정**에 관여하는지 여부다. 이른바 '킬 체인(Kill Chain)'에서의 AI 역할이다.

사령관은 이에 대해 **명확한 답변을 피했다**. "AI는 의사결정을 '지원'한다"고만 밝혔을 뿐, 최종 결정이 항상 인간에 의해 이뤄지는지는 확인하지 않았다.

이 모호함이 우려를 키우고 있다. 인권단체들은 "AI가 표적 추천을 하면, 시간 압박 속에서 인간이 그 추천을 거의 그대로 수용할 가능성이 높다"고 지적한다.

## 이스라엘의 선례

실제로 이스라엘군은 가자 분쟁에서 AI 시스템 **'라벤더(Lavender)'**와 **'복음(Gospel)'**을 사용한 것으로 알려졌다. 이 시스템들은 폭격 표적을 추천했고, 민간인 피해 논란을 일으켰다.

미군이 유사한 시스템을 사용하는지, 또는 이스라엘과 기술을 공유하는지는 확인되지 않았다.

## 기술 기업들의 역할

이 전쟁에서 어떤 기업의 AI가 사용되는지도 민감한 문제다. 최근 보도에 따르면:

- **OpenAI**: 펜타곤 기밀 네트워크에 GPT 배치 계약 체결
- **Google**: 300만 국방부 직원에게 Gemini 에이전트 제공 예정
- **Microsoft**: Azure 클라우드 기반 군사 AI 인프라 운영
- **Palantir**: 전장 데이터 분석 플랫폼 제공

Anthropicは 유일하게 군사 계약을 **명시적으로 거부**했다.

## 윤리적 논쟁

AI의 전쟁 투입은 깊은 윤리적 질문을 제기한다:

**찬성 측 주장:**
- AI가 더 정확한 표적 식별로 민간인 피해 감소
- 병사들의 인지적 부담 경감
- 빠른 의사결정으로 군사적 우위 확보

**반대 측 주장:**
- 전쟁의 '문턱'을 낮춰 더 쉽게 무력 사용
- 책임 소재 불명확 (AI 오류 시 누가 책임?)
- 군비 경쟁 가속화

> "AI가 전쟁을 더 '깔끔하게' 만든다는 환상이 위험합니다. 결국 죽는 것은 인간입니다."

Human Rights Watch의 무기 담당 국장은 이같이 경고했다.

## 규제의 부재

현재 **군사 AI에 대한 국제적 규제는 거의 없다**. UN에서 자율 치명 무기 시스템(LAWS) 규제 논의가 진행 중이지만, 강대국들의 반대로 진전이 더디다.

이란전에서의 AI 사용은 이 규제 논의에 새로운 긴급성을 부여할 것으로 보인다. 실제 전장에서 AI가 사용되는 상황에서, 더 이상 가상의 시나리오가 아니기 때문이다.`},{id:"20260318090001",title:"#QuitGPT 운동 폭발... OpenAI 국방부 계약에 250만명 반발, Claude 1위 등극",summary:"OpenAI가 미 국방부 기밀 네트워크에 AI 배치 계약을 체결하자 대규모 불매운동이 발생했다. ChatGPT 삭제가 295% 급증하고 Anthropic의 Claude가 미국 앱스토어 1위를 차지했다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-03-18T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!1,content:`실리콘밸리 역사상 가장 큰 규모의 AI 불매운동이 벌어지고 있다. OpenAI가 미 국방부(펜타곤) 기밀 네트워크에 GPT 모델을 배치하기로 합의한 직후, '#QuitGPT' 운동이 폭발적으로 확산되며 AI 업계의 지형이 급변하고 있다.

17일(현지시간) 기준 #QuitGPT 해시태그는 X(구 트위터)에서 250만 명 이상의 지지를 얻었다. ChatGPT 앱 삭제 건수는 계약 발표 후 24시간 만에 295% 급증했다. 이는 AI 서비스 역사상 가장 빠른 이탈 속도다.

## Anthropic Claude, 앱스토어 1위 등극

반사이익을 얻은 것은 Anthropic의 Claude다. OpenAI의 국방부 계약 발표 직후 Claude 앱 다운로드가 폭증하며, 출시 이래 처음으로 미국 앱스토어 전체 1위를 차지했다. 이는 ChatGPT가 2년 넘게 지켜온 자리다.

흥미로운 것은 Anthropic이 동일한 국방부 계약을 **거부**했다는 사실이다. Anthropic은 "대규모 감시 시스템과 자율 무기에 AI를 사용하는 것은 우리의 윤리 헌장에 위배된다"며 계약을 거절했고, 이후 펜타곤으로부터 '공급망 리스크'로 지정되는 보복 조치를 받았다.

> "소비자들이 분명한 메시지를 보내고 있습니다. AI 기업의 윤리적 선택이 시장에서 보상받는 시대가 온 것입니다."

Harvard Business School의 기술윤리 전문가는 이같이 분석했다.

## OpenAI 내부에서도 반발

더 충격적인 것은 OpenAI 내부의 반응이다. 30명 이상의 OpenAI 직원들이 익명으로 Anthropic 지지 성명에 서명했다. Google DeepMind 직원들도 동참했다. 같은 회사 직원들이 경쟁사를 공개 지지한 것은 전례 없는 일이다.

OpenAI 내부 게시판에는 "우리가 걸어온 길이 맞는지 다시 생각해야 한다"는 글이 올라오고 있다. 일부 연구원들은 퇴사를 고려 중인 것으로 알려졌다.

> "Sam Altman은 AGI의 안전한 개발을 약속했습니다. 군사 AI 계약이 그 약속과 어떻게 양립하는지 설명해야 합니다."

전직 OpenAI 연구원은 이같이 말했다.

## OpenAI의 입장

OpenAI는 성명을 통해 "국가 안보를 위한 방어적 목적의 AI 활용"이라고 해명했다. 구체적으로 사이버 보안, 정보 분석, 물류 최적화 등 비살상 분야에 한정된다고 밝혔다.

하지만 비판자들은 "일단 군에 들어가면 용도를 통제할 수 없다"고 반박한다. 실제로 과거 구글의 프로젝트 메이븐(Project Maven)도 처음에는 비살상 목적이라고 발표했지만, 결국 드론 표적 식별에 사용된 것으로 밝혀져 논란이 됐다.

## 매출 영향은?

OpenAI의 연간 환산 매출은 250억 달러(약 33조원)를 돌파한 상태다. 국방부 계약 규모는 공개되지 않았지만, 수십억 달러에 달할 것으로 추정된다. 단기적으로 매출은 늘겠지만, 소비자 이탈이 장기적으로 어떤 영향을 미칠지는 미지수다.

Anthropicの 매출도 190억 달러(약 25조원)에 근접하며 빠르게 추격 중이다. #QuitGPT 운동이 지속되면 양사의 격차는 더 좁혀질 전망이다.

이번 사태는 AI 기업에게 중요한 교훈을 남기고 있다. 기술력만큼이나 **윤리적 선택**이 시장에서 중요한 경쟁력이 되고 있다는 것이다.`},{id:"20260318090002",title:"Claude Sonnet 4.6, 실무 벤치마크 전체 1위... Opus도 제쳤다",summary:"Anthropic의 Claude Sonnet 4.6이 실제 업무 능력을 측정하는 GDPval-AA Elo에서 1,633점을 기록하며 모든 AI 모델 중 1위를 차지했다. 플래그십 Opus 4.6과 Gemini 3.1 Pro도 넘어섰다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-03-18T08:30:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!1,content:`AI 벤치마크 역사상 이례적인 일이 벌어졌다. 중급 모델인 Claude Sonnet 4.6이 플래그십 모델들을 모두 제치고 실무 벤치마크 1위를 차지한 것이다.

17일(현지시간) 발표된 GDPval-AA Elo(실제 전문가 수준 업무 능력 측정) 벤치마크에서 Claude Sonnet 4.6은 **1,633점**을 기록했다. 이는 Anthropic의 플래그십 모델 Opus 4.6(1,612점)보다 높고, Google의 Gemini 3.1 Pro(1,598점)도 앞선다.

## 중급 가격에 최고급 성능

이 결과가 주목받는 이유는 가격 대비 성능 때문이다. Sonnet 4.6의 API 가격은 입력 토큰 백만 개당 3달러로, Opus 4.6(15달러)의 5분의 1에 불과하다. 같은 비용으로 5배 더 많은 작업을 처리할 수 있는 셈이다.

> "우리는 더 이상 '비싼 모델 = 좋은 모델'이라는 공식이 통하지 않는 시대에 접어들었습니다. Sonnet 4.6이 그 증거입니다."

Anthropic의 제품 담당 부사장은 이같이 밝혔다.

## GDPval-AA Elo란?

GDPval-AA Elo는 기존 벤치마크와 다르다. MMLU나 HumanEval 같은 학술적 테스트가 아니라, **실제 전문가들이 하는 업무**를 시뮬레이션한다.

- **문서 작성**: 보고서, 제안서, 이메일 초안
- **데이터 분석**: 엑셀 데이터 해석, 차트 생성
- **코드 리뷰**: 버그 발견, 리팩토링 제안
- **연구 조사**: 정보 수집, 요약, 인사이트 도출

이 벤치마크에서 높은 점수를 받는다는 것은 실제 업무 환경에서 유용하다는 의미다.

## 다른 벤치마크 결과

Sonnet 4.6은 다른 벤치마크에서도 인상적인 성과를 보였다:

- **SWE-Bench**: 72% (코딩 능력, Opus 4.6과 동일)
- **MATH**: 78% (수학 문제 해결)
- **GPQA**: 71% (대학원 수준 과학)

코딩에서는 Opus와 동등하고, 일반 지식에서는 약간 뒤처지지만, 실무 종합 능력에서는 오히려 앞선다.

## 왜 Sonnet이 Opus를 이겼나?

Anthropicは 정확한 이유를 밝히지 않았지만, 업계 전문가들은 두 가지 가설을 제시한다.

첫째, **학습 데이터 최적화**. Sonnet 4.6은 실무 문서(이메일, 보고서, 회의록 등)에 더 많이 노출됐을 가능성이 있다. 반면 Opus는 학술 자료와 코드에 더 집중했을 수 있다.

둘째, **모델 크기의 역설**. 더 큰 모델이 항상 좋은 것은 아니다. 특정 작업에서는 적절한 크기의 모델이 오히려 더 집중된 성능을 발휘할 수 있다.

## 기업들의 선택

이 결과는 기업 고객들의 선택에 직접적인 영향을 미칠 전망이다. 많은 기업들이 "비용을 5분의 1로 줄이면서 성능은 오히려 향상"된다면 Sonnet으로 전환할 유인이 생긴다.

OpenAI와 Google도 중급 모델 강화에 나설 것으로 예상된다. AI API 시장의 경쟁이 더욱 치열해지고 있다.`},{id:"20260318090003",title:"Snowflake, AI 기능 430개 추가하며 분기 매출 30% 성장",summary:"Snowflake가 2026 회계연도 4분기 실적을 발표했다. 제품 매출이 전년 대비 30% 성장했고, 430개 이상의 AI 기능을 새로 도입했다. Anthropic, Google, OpenAI와의 파트너십도 확대됐다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-03-18T08:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",breaking:!1,content:`클라우드 데이터 플랫폼 Snowflake가 AI 시대의 승자로 부상하고 있다. 2026 회계연도 4분기 실적에서 제품 매출이 전년 대비 30% 성장하며 시장 예상을 상회했다.

가장 주목할 점은 AI 기능의 폭발적 확대다. Snowflake는 이번 분기에만 **430개 이상의 새로운 AI 기능**을 도입했다. 이는 분기당 평균 100개 수준이던 과거와 비교하면 4배 이상 증가한 수치다.

## 주요 실적 하이라이트

- **제품 매출**: 전년 대비 30% 성장
- **신규 고객**: 전 분기 대비 40% 증가
- **AI 기능**: 430개+ 신규 도입
- **잔여이행의무(RPO)**: 사상 최고치 경신

> "AI는 더 이상 부가 기능이 아닙니다. Snowflake의 핵심 가치 제안 자체가 됐습니다."

Sridhar Ramaswamy Snowflake CEO는 실적 발표에서 이같이 강조했다.

## Anthropic, Google, OpenAI 삼중 파트너십

Snowflake의 AI 전략에서 가장 흥미로운 점은 **멀티 LLM 접근법**이다. Anthropic의 Claude, Google의 Gemini, OpenAI의 GPT 모델을 모두 지원한다. 고객이 용도에 따라 최적의 모델을 선택할 수 있게 한 것이다.

이번 분기에는 각 파트너십이 더욱 심화됐다:

- **Anthropic**: Claude 4.6 시리즈 네이티브 통합
- **Google**: Gemini 3.1 Pro 지원 추가
- **OpenAI**: GPT-5.4 베타 액세스 제공

## 에이전틱 AI로의 확장

Snowflake는 단순 AI 쿼리를 넘어 **에이전틱 AI(Agentic AI)** 영역으로 확장하고 있다. 에이전틱 AI는 AI가 단순 응답이 아닌 자율적인 작업 수행까지 담당하는 것을 의미한다.

새로 출시된 'Snowflake Cortex Agents'는 자연어 명령만으로 복잡한 데이터 파이프라인을 구축하고, 이상 탐지 시 자동 알림을 보내며, 정기 보고서를 스스로 생성한다.

> "데이터 엔지니어가 할 일을 AI 에이전트가 대신합니다. 인력 부족에 시달리는 기업들에게 구원자가 될 것입니다."

한 고객사 CTO의 평가다.

## 주가 반응

실적 발표 후 Snowflake 주가는 시간외 거래에서 12% 급등했다. 연초 대비 상승률은 45%에 달한다. 시가총액은 700억 달러(약 94조원)를 돌파했다.

월가 애널리스트들은 목표 주가를 일제히 상향 조정했다. "Snowflake가 AI 인프라의 핵심 플레이어로 자리매김했다"는 평가가 지배적이다.

## 경쟁 구도

하지만 경쟁도 치열하다. Databricks는 최근 AI 기능을 대폭 강화했고, AWS와 Azure도 자체 AI 데이터 솔루션을 밀어붙이고 있다. Snowflake가 현재의 모멘텀을 유지할 수 있을지 지켜볼 필요가 있다.`},{id:"20260318090004",title:"현대차그룹, CES 2026서 'AI+로보틱스' 로드맵 공개... 휴머노이드 시장 진출",summary:"현대자동차그룹이 CES 2026에서 종합 AI+로보틱스 전략을 발표했다. 대형언어모델과 생성형 AI를 탑재한 인간 중심 로봇 개발에 나서며, 휴머노이드 로봇 시장 리더십을 목표로 한다.",category:"로보틱스",author:"Prompt Daily 편집팀",date:"2026-03-18T07:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`현대자동차그룹이 로봇 시장의 새로운 강자로 부상하고 있다. CES 2026에서 발표된 'AI+Robotics' 로드맵은 자동차 회사가 아닌 종합 모빌리티·로봇 기업으로의 전환을 선언한 것이나 다름없다.

현대차그룹은 2019년 보스턴 다이내믹스를 인수한 이후 로봇 분야 투자를 지속해왔다. 이번 CES에서는 그동안의 기술 축적을 바탕으로 한 종합 전략을 처음 공개했다.

## 핵심 전략: LLM + 로봇

현대차그룹 AI+Robotics 전략의 핵심은 **대형언어모델(LLM)과 생성형 AI의 로봇 통합**이다. 기존 산업용 로봇이 정해진 프로그램만 수행했다면, 새로운 로봇은 자연어 명령을 이해하고 상황에 맞게 행동한다.

예를 들어 "저 박스를 선반에 올려줘"라고 말하면, 로봇이 시각 AI로 박스를 인식하고, 최적 경로를 계산하고, 적절한 힘으로 들어올려 선반에 배치한다. 프로그래밍 없이 인간의 언어만으로 로봇을 제어할 수 있는 것이다.

> "우리는 로봇이 인간의 파트너가 되는 미래를 만들고 있습니다. 명령이 아닌 대화로 협업하는 시대가 열릴 것입니다."

정의선 현대차그룹 회장은 CES 기조연설에서 이같이 밝혔다.

## 세 가지 로봇 라인업

현대차그룹은 세 가지 로봇 카테고리를 제시했다:

**1. 산업용 로봇 (Factory DAL-e)**
- 제조 현장 협동 로봇
- 보스턴 다이내믹스 기술 기반
- 2026년 하반기 현대차 공장 시범 배치

**2. 서비스 로봇 (City DAL-e)**
- 호텔, 병원, 쇼핑몰용 안내 로봇
- 자연어 대화 및 길 안내
- 2027년 상반기 출시 예정

**3. 휴머노이드 로봇 (Atlas Next)**
- 보스턴 다이내믹스 Atlas 차세대 버전
- 완전 전기 구동, 40kg 가반 하중
- 2028년 양산 목표

## 투자 규모

현대차그룹은 2030년까지 AI+Robotics 분야에 **50조원**을 투자할 계획이다. 이 중 20조원은 휴머노이드 로봇 개발에, 15조원은 AI 소프트웨어에, 나머지 15조원은 생산 설비 구축에 배정된다.

이는 테슬라의 Optimus 프로젝트, Figure AI, Agility Robotics 등 경쟁사와 정면 대결하겠다는 의지의 표현이다.

## 글로벌 시장 전망

휴머노이드 로봇 시장은 2035년까지 2,000억 달러(약 268조원) 규모로 성장할 전망이다. 골드만삭스는 "자동차 시장의 절반 규모에 달할 것"이라고 예측했다.

현대차그룹은 자동차에서 축적한 대량생산 노하우, 배터리 기술, 글로벌 유통망을 활용해 경쟁 우위를 확보한다는 전략이다. 실리콘밸리 스타트업들이 기술력에서 앞서더라도, 양산과 유통에서는 현대가 유리하다는 계산이다.

한국 기업이 글로벌 휴머노이드 로봇 시장의 주요 플레이어로 부상할 수 있을지 주목된다.`},{id:"20260318090005",title:"OpenAI 연환산 매출 $250억 돌파, IPO 준비 본격화",summary:"OpenAI의 연간 환산 매출이 250억 달러를 넘어섰다. 회사는 2026년 말 또는 2027년 초 IPO를 검토 중이며, 기업가치 3,000억 달러 이상으로 평가받고 있다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-03-18T07:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",breaking:!1,content:`OpenAI가 테크 업계 역사상 가장 빠른 성장 기록을 경신하고 있다. 연간 환산 매출(ARR)이 **250억 달러(약 33조원)**를 돌파하며, 창업 10년도 안 된 스타트업이 글로벌 대기업 수준의 매출을 달성했다.

불과 1년 전 100억 달러였던 매출이 2.5배로 뛰었다. 월간 매출 증가율은 8~10%를 유지하고 있어, 연말에는 300억 달러를 넘길 것이라는 전망도 나온다.

## 매출 구조

OpenAI의 매출은 크게 세 가지로 구성된다:

- **ChatGPT 구독**: 약 40% (개인 Plus, 팀, 엔터프라이즈)
- **API 매출**: 약 50% (개발자, 기업 고객)
- **기타**: 약 10% (라이선싱, 파트너십)

API 매출 비중이 가장 크다는 점이 주목할 만하다. B2B 시장에서 OpenAI의 지배력이 그만큼 강하다는 의미다.

## IPO 준비 착수

복수의 외신에 따르면 OpenAI는 IPO 준비에 착수했다. 골드만삭스와 모건스탠리가 주관사로 물망에 올랐으며, 2026년 말 또는 2027년 초 상장이 유력하다.

예상 기업가치는 **3,000억 달러(약 400조원)** 이상이다. 이는 현재 비상장 기업 중 최고 수준으로, 상장 시 테크 역사상 최대 규모 IPO가 될 전망이다.

> "OpenAI IPO는 AI 시대의 도래를 상징하는 이벤트가 될 것입니다. 모든 투자자가 주목하고 있습니다."

월가 애널리스트의 평가다.

## 수익성은?

다만 수익성은 여전히 과제다. OpenAI는 아직 적자 상태로 알려져 있다. 막대한 GPU 인프라 비용, 연구개발비, 그리고 인재 확보 비용이 매출 성장을 상쇄하고 있다.

회사 측은 "2027년 흑자 전환"을 목표로 제시했다. API 가격 인상, 엔터프라이즈 고객 확대, 그리고 효율적인 모델 개발이 핵심 전략이다.

## Anthropic과의 격차

경쟁사 Anthropic의 연환산 매출은 **190억 달러(약 25조원)**에 근접한 것으로 알려졌다. OpenAI와의 격차는 약 60억 달러지만, Anthropic의 성장률이 더 빠르다는 점이 주목된다.

특히 최근 #QuitGPT 운동으로 Anthropic이 반사이익을 얻으면서 격차가 더 좁혀질 가능성이 있다.

## Sam Altman의 다음 행보

IPO가 성공하면 Sam Altman CEO는 테크 역사상 가장 빠르게 거대 기업을 일군 창업자 중 한 명으로 기록될 것이다. ChatGPT 출시 후 불과 4년 만의 성과다.

Altman은 최근 인터뷰에서 "IPO는 끝이 아니라 시작"이라며 "AGI(범용 인공지능) 개발이라는 미션은 변함없다"고 밝혔다. 상장 후에도 연구 중심 경영을 이어가겠다는 의지다.`}],Bm={articles:Fm},Hm=()=>{};var Ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},$m=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},wf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,g=s>>2,m=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(h=64)),r.push(n[g],n[m],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$m(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new Vm;const h=s<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),m!==64){const _=u<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Vm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wm=function(e){const t=vf(e);return wf.encodeByteArray(t,!0)},_f=function(e){return Wm(e).replace(/\./g,"")},Sf=function(e){try{return wf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=()=>Gm().__FIREBASE_DEFAULTS__,Qm=()=>{if(typeof process>"u"||typeof Ou>"u")return;const e=Ou.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Jm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Sf(e[1]);return t&&JSON.parse(t)},cl=()=>{try{return Hm()||Km()||Qm()||Jm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ym=e=>{var t,n;return(n=(t=cl())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},If=()=>{var e;return(e=cl())==null?void 0:e.config},kf=e=>{var t;return(t=cl())==null?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qm(e){return(await fetch(e,{credentials:"include"})).ok}const Ir={};function Zm(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ir))Ir[t]?e.emulator.push(t):e.prod.push(t);return e}function eg(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Ru=!1;function tg(e,t){if(typeof window>"u"||typeof document>"u"||!Ns(window.location.host)||Ir[e]===t||Ir[e]||Ru)return;Ir[e]=t;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",s=Zm().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,v){h.setAttribute("width","24"),h.setAttribute("id",v),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function u(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Ru=!0,o()},h}function g(h,v){h.setAttribute("id",v),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function m(){const h=eg(r),v=n("text"),_=document.getElementById(v)||document.createElement("span"),S=n("learnmore"),M=document.getElementById(S)||document.createElement("a"),f=n("preprendIcon"),d=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const p=h.element;a(p),g(M,S);const y=u();l(d,f),p.append(d,_,M,y),document.body.appendChild(p)}s?(_.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(d.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function rg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ig(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function og(){const e=he();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ag(){try{return typeof indexedDB=="object"}catch{return!1}}function lg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="FirebaseError";class Vt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ug,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?cg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,a,r)}}function cg(e,t){return e.replace(dg,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const dg=/\{\$([^}]+)}/g;function fg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Kn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Lu(s)&&Lu(o)){if(!Kn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function hg(e,t){const n=new pg(e,t);return n.subscribe.bind(n)}class pg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=oo),i.error===void 0&&(i.error=oo),i.complete===void 0&&(i.complete=oo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function oo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return e&&e._delegate?e._delegate:e}class Qn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vg(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yg(e){return e===Xt?void 0:e}function vg(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new gg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(z||(z={}));const _g={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Sg=z.INFO,Ig={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},kg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Ig[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xf{constructor(t){this.name=t,this._logLevel=Sg,this._logHandler=kg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_g[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const xg=(e,t)=>t.some(n=>e instanceof n);let Du,Mu;function Eg(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cg(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ef=new WeakMap,aa=new WeakMap,Cf=new WeakMap,ao=new WeakMap,dl=new WeakMap;function Ag(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ut(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ef.set(n,e)}).catch(()=>{}),dl.set(t,e),t}function Tg(e){if(aa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});aa.set(e,t)}let la={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return aa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Cf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ng(e){la=e(la)}function Pg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(lo(this),t,...n);return Cf.set(r,t.sort?t.sort():[t]),Ut(r)}:Cg().includes(e)?function(...t){return e.apply(lo(this),t),Ut(Ef.get(this))}:function(...t){return Ut(e.apply(lo(this),t))}}function Og(e){return typeof e=="function"?Pg(e):(e instanceof IDBTransaction&&Tg(e),xg(e,Eg())?new Proxy(e,la):e)}function Ut(e){if(e instanceof IDBRequest)return Ag(e);if(ao.has(e))return ao.get(e);const t=Og(e);return t!==e&&(ao.set(e,t),dl.set(t,e)),t}const lo=e=>dl.get(e);function Rg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ut(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ut(o.result),l.oldVersion,l.newVersion,Ut(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Lg=["get","getKey","getAll","getAllKeys","count"],Dg=["put","add","delete","clear"],uo=new Map;function ju(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(uo.get(t))return uo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Dg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lg.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return uo.set(t,s),s}Ng(e=>({...e,get:(t,n,r)=>ju(t,n)||e.get(t,n,r),has:(t,n)=>!!ju(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ua="@firebase/app",Uu="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new xf("@firebase/app"),Ug="@firebase/app-compat",zg="@firebase/analytics-compat",bg="@firebase/analytics",Fg="@firebase/app-check-compat",Bg="@firebase/app-check",Hg="@firebase/auth",$g="@firebase/auth-compat",Vg="@firebase/database",Wg="@firebase/data-connect",Gg="@firebase/database-compat",Kg="@firebase/functions",Qg="@firebase/functions-compat",Jg="@firebase/installations",Yg="@firebase/installations-compat",Xg="@firebase/messaging",qg="@firebase/messaging-compat",Zg="@firebase/performance",ey="@firebase/performance-compat",ty="@firebase/remote-config",ny="@firebase/remote-config-compat",ry="@firebase/storage",iy="@firebase/storage-compat",sy="@firebase/firestore",oy="@firebase/ai",ay="@firebase/firestore-compat",ly="firebase",uy="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="[DEFAULT]",cy={[ua]:"fire-core",[Ug]:"fire-core-compat",[bg]:"fire-analytics",[zg]:"fire-analytics-compat",[Bg]:"fire-app-check",[Fg]:"fire-app-check-compat",[Hg]:"fire-auth",[$g]:"fire-auth-compat",[Vg]:"fire-rtdb",[Wg]:"fire-data-connect",[Gg]:"fire-rtdb-compat",[Kg]:"fire-fn",[Qg]:"fire-fn-compat",[Jg]:"fire-iid",[Yg]:"fire-iid-compat",[Xg]:"fire-fcm",[qg]:"fire-fcm-compat",[Zg]:"fire-perf",[ey]:"fire-perf-compat",[ty]:"fire-rc",[ny]:"fire-rc-compat",[ry]:"fire-gcs",[iy]:"fire-gcs-compat",[sy]:"fire-fst",[ay]:"fire-fst-compat",[oy]:"fire-vertex","fire-js":"fire-js",[ly]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map,dy=new Map,da=new Map;function zu(e,t){try{e.container.addComponent(t)}catch(n){pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hr(e){const t=e.name;if(da.has(t))return pt.debug(`There were multiple attempts to register component ${t}.`),!1;da.set(t,e);for(const n of os.values())zu(n,e);for(const n of dy.values())zu(n,e);return!0}function Af(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ye(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new Yr("app","Firebase",fy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=uy;function Tf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:ca,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=If()),!n)throw zt.create("no-options");const s=os.get(i);if(s){if(Kn(n,s.options)&&Kn(r,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const o=new wg(i);for(const l of da.values())o.addComponent(l);const a=new hy(n,r,o);return os.set(i,a),a}function py(e=ca){const t=os.get(e);if(!t&&e===ca&&If())return Tf();if(!t)throw zt.create("no-app",{appName:e});return t}function jn(e,t,n){let r=cy[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pt.warn(o.join(" "));return}Hr(new Qn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="firebase-heartbeat-database",gy=1,$r="firebase-heartbeat-store";let co=null;function Nf(){return co||(co=Rg(my,gy,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($r)}catch(n){console.warn(n)}}}}).catch(e=>{throw zt.create("idb-open",{originalErrorMessage:e.message})})),co}async function yy(e){try{const n=(await Nf()).transaction($r),r=await n.objectStore($r).get(Pf(e));return await n.done,r}catch(t){if(t instanceof Vt)pt.warn(t.message);else{const n=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pt.warn(n.message)}}}async function bu(e,t){try{const r=(await Nf()).transaction($r,"readwrite");await r.objectStore($r).put(t,Pf(e)),await r.done}catch(n){if(n instanceof Vt)pt.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function Pf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=1024,wy=30;class _y{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Iy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>wy){const o=ky(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fu(),{heartbeatsToSend:r,unsentEntries:i}=Sy(this._heartbeatsCache.heartbeats),s=_f(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pt.warn(n),""}}}function Fu(){return new Date().toISOString().substring(0,10)}function Sy(e,t=vy){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bu(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Iy{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ag()?lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return bu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return bu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Bu(e){return _f(JSON.stringify({version:2,heartbeats:e})).length}function ky(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(e){Hr(new Qn("platform-logger",t=>new Mg(t),"PRIVATE")),Hr(new Qn("heartbeat",t=>new _y(t),"PRIVATE")),jn(ua,Uu,e),jn(ua,Uu,"esm2020"),jn("fire-js","")}xy("");var Ey="firebase",Cy="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(Ey,Cy,"app");function Of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ay=Of,Rf=new Yr("auth","Firebase",Of());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new xf("@firebase/auth");function Ty(e,...t){as.logLevel<=z.WARN&&as.warn(`Auth (${qr}): ${e}`,...t)}function Ri(e,...t){as.logLevel<=z.ERROR&&as.error(`Auth (${qr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,...t){throw hl(e,...t)}function $e(e,...t){return hl(e,...t)}function fl(e,t,n){const r={...Ay(),[t]:n};return new Yr("auth","Firebase",r).create(t,{appName:e.name})}function sn(e){return fl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ny(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&et(e,"argument-error"),fl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Rf.create(e,...t)}function N(e,t,...n){if(!e)throw hl(t,...n)}function at(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ri(t),new Error(t)}function mt(e,t){e||at(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function Py(){return Hu()==="http:"||Hu()==="https:"}function Hu(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Py()||ig()||"connection"in navigator)?navigator.onLine:!0}function Ry(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n){this.shortDelay=t,this.longDelay=n,mt(n>t,"Short delay should be less than long delay!"),this.isMobile=ng()||sg()}get(){return Oy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e,t){mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],My=new Zr(3e4,6e4);function ml(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Zn(e,t,n,r,i={}){return Df(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xr({key:e.config.apiKey,...o}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...s};return rg()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Ns(e.emulatorConfig.host)&&(u.credentials="include"),Lf.fetch()(await Mf(e,e.config.apiHost,n,a),u)})}async function Df(e,t,n){e._canInitEmulator=!1;const r={...Ly,...t};try{const i=new Uy(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wi(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wi(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw wi(e,"user-disabled",o);const g=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fl(e,g,u);et(e,g)}}catch(i){if(i instanceof Vt)throw i;et(e,"network-request-failed",{message:String(i)})}}async function jy(e,t,n,r,i={}){const s=await Zn(e,t,n,r,i);return"mfaPendingCredential"in s&&et(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Mf(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?pl(e.config,i):`${e.config.apiScheme}://${i}`;return Dy.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Uy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),My.get())})}}function wi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$e(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(e,t){return Zn(e,"POST","/v1/accounts:delete",t)}async function ls(e,t){return Zn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function by(e,t=!1){const n=Wt(e),r=await n.getIdToken(t),i=gl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:kr(fo(i.auth_time)),issuedAtTime:kr(fo(i.iat)),expirationTime:kr(fo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fo(e){return Number(e)*1e3}function gl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sf(n);return i?JSON.parse(i):(Ri("Failed to decode base64 JWT payload"),null)}catch(i){return Ri("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $u(e){const t=gl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Vt&&Fy(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Fy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(e){var m;const t=e.auth,n=await e.getIdToken(),r=await Vr(e,ls(t,{idToken:n}));N(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?jf(i.providerUserInfo):[],o=$y(e.providerData,s),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ha(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,g)}async function Hy(e){const t=Wt(e);await us(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function $y(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function jf(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(e,t){const n=await Df(e,{},async()=>{const r=Xr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=await Mf(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return e.emulatorConfig&&Ns(e.emulatorConfig.host)&&(l.credentials="include"),Lf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Wy(e,t){return Zn(e,"POST","/v2/accounts:revokeToken",ml(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):$u(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){N(t.length!==0,"internal-error");const n=$u(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Vy(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Un;return r&&(N(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Fe{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new By(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ha(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return by(this,t)}reload(){return Hy(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fe({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await us(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(sn(this.auth));const t=await this.getIdToken();return await Vr(this,zy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:m,emailVerified:h,isAnonymous:v,providerData:_,stsTokenManager:S}=n;N(m&&S,t,"internal-error");const M=Un.fromJSON(this.name,S);N(typeof m=="string",t,"internal-error"),wt(r,t.name),wt(i,t.name),N(typeof h=="boolean",t,"internal-error"),N(typeof v=="boolean",t,"internal-error"),wt(s,t.name),wt(o,t.name),wt(a,t.name),wt(l,t.name),wt(u,t.name),wt(g,t.name);const f=new Fe({uid:m,auth:t,email:i,emailVerified:h,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:M,createdAt:u,lastLoginAt:g});return _&&Array.isArray(_)&&(f.providerData=_.map(d=>({...d}))),l&&(f._redirectEventId=l),f}static async _fromIdTokenResponse(t,n,r=!1){const i=new Un;i.updateFromServerResponse(n);const s=new Fe({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await us(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Un;a.updateFromIdToken(r);const l=new Fe({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ha(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map;function lt(e){mt(e instanceof Function,"Expected a class definition");let t=Vu.get(e);return t?(mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vu.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Uf.type="NONE";const Wu=Uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e,t,n){return`firebase:${e}:${t}:${n}`}class zn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,s),this.fullPersistenceKey=Li("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ls(this.auth,{idToken:t}).catch(()=>{});return n?Fe._fromGetAccountInfoResponse(this.auth,n,t):null}return Fe._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zn(lt(Wu),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||lt(Wu);const o=Li(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const g=await u._get(o);if(g){let m;if(typeof g=="string"){const h=await ls(t,{idToken:g}).catch(()=>{});if(!h)break;m=await Fe._fromGetAccountInfoResponse(t,h,g)}else m=Fe._fromJSON(t,g);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($f(t))return"Blackberry";if(Vf(t))return"Webos";if(bf(t))return"Safari";if((t.includes("chrome/")||Ff(t))&&!t.includes("edge/"))return"Chrome";if(Hf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zf(e=he()){return/firefox\//i.test(e)}function bf(e=he()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ff(e=he()){return/crios\//i.test(e)}function Bf(e=he()){return/iemobile/i.test(e)}function Hf(e=he()){return/android/i.test(e)}function $f(e=he()){return/blackberry/i.test(e)}function Vf(e=he()){return/webos/i.test(e)}function yl(e=he()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Gy(e=he()){var t;return yl(e)&&!!((t=window.navigator)!=null&&t.standalone)}function Ky(){return og()&&document.documentMode===10}function Wf(e=he()){return yl(e)||Hf(e)||Vf(e)||$f(e)||/windows phone/i.test(e)||Bf(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(e,t=[]){let n;switch(e){case"Browser":n=Gu(he());break;case"Worker":n=`${Gu(he())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(e,t={}){return Zn(e,"GET","/v2/passwordPolicy",ml(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=6;class Xy{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Yy,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ku(this),this.idTokenSubscription=new Ku(this),this.beforeStateQueue=new Qy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await zn.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ls(this,{idToken:t}),r=await Fe._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(Ye(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await us(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ry()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ye(this.app))return Promise.reject(sn(this));const n=t?Wt(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ye(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Jy(this),n=new Xy(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Yr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wy(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&lt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&Ty(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ps(e){return Wt(e)}class Ku{constructor(t){this.auth=t,this.observer=null,this.addObserver=hg(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zy(e){vl=e}function e0(e){return vl.loadJS(e)}function t0(){return vl.gapiScript}function n0(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(e,t){const n=Af(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kn(s,t??{}))return i;et(i,"already-initialized")}return n.initialize({options:t})}function i0(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function s0(e,t,n){const r=Ps(e);N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Kf(t),{host:o,port:a}=o0(t),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},g=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){N(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),N(Kn(u,r.config.emulator)&&Kn(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,Ns(o)?(qm(`${s}//${o}${l}`),tg("Auth",!0)):a0()}function Kf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function o0(e){const t=Kf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qu(o)}}}function Qu(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function a0(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(t){return at("not implemented")}_linkToIdToken(t,n){return at("not implemented")}_getReauthenticationResolver(t){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t){return jy(e,"POST","/v1/accounts:signInWithIdp",ml(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="http://localhost";class gt extends Qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new gt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new gt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,bn(t,n)}buildRequest(){const t={requestUri:l0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Xr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends wl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class xr extends er{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return N("providerId"in n&&"signInMethod"in n,"argument-error"),gt._fromParams(n)}credential(t){return this._credential({...t,nonce:t.rawNonce})}_credential(t){return N(t.idToken||t.accessToken,"argument-error"),gt._fromParams({...t,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(t){return xr.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return xr.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=t;if(!r&&!i&&!n&&!s||!a)return null;try{return new xr(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends er{constructor(){super("facebook.com")}static credential(t){return gt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends er{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return gt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return it.credentialFromTaggedObject(t)}static credentialFromError(t){return it.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends er{constructor(){super("github.com")}static credential(t){return gt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends er{constructor(){super("twitter.com")}static credential(t,n){return gt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Fe._fromIdTokenResponse(t,r,i),o=Ju(r);return new Jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Ju(r);return new Jn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Ju(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Vt{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new cs(t,n,r,i)}}function Jf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(e,s,t,r):s})}async function u0(e,t,n=!1){const r=await Vr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Jn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(e,t,n=!1){const{auth:r}=e;if(Ye(r.app))return Promise.reject(sn(r));const i="reauthenticate";try{const s=await Vr(e,Jf(r,i,t,e),n);N(s.idToken,r,"internal-error");const o=gl(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(e.uid===a,r,"user-mismatch"),Jn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(e,t,n=!1){if(Ye(e.app))return Promise.reject(sn(e));const r="signIn",i=await Jf(e,r,t),s=await Jn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function f0(e,t,n,r){return Wt(e).onIdTokenChanged(t,n,r)}function h0(e,t,n){return Wt(e).beforeAuthStateChanged(t,n)}function p0(e,t,n,r){return Wt(e).onAuthStateChanged(t,n,r)}function m0(e){return Wt(e).signOut()}const ds="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ds,"1"),this.storage.removeItem(ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=1e3,y0=10;class Xf extends Yf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ky()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,y0):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},g0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xf.type="LOCAL";const v0=Xf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends Yf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}qf.type="SESSION";const Zf=qf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Os(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await w0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_l("",20);i.port1.start();const g=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const h=m;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(g),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function S0(e){Ze().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function I0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k0(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function x0(){return eh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="firebaseLocalStorageDb",E0=1,fs="firebaseLocalStorage",nh="fbase_key";class ei{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rs(e,t){return e.transaction([fs],t?"readwrite":"readonly").objectStore(fs)}function C0(){const e=indexedDB.deleteDatabase(th);return new ei(e).toPromise()}function pa(){const e=indexedDB.open(th,E0);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(fs,{keyPath:nh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(fs)?t(r):(r.close(),await C0(),t(await pa()))})})}async function Yu(e,t,n){const r=Rs(e,!0).put({[nh]:t,value:n});return new ei(r).toPromise()}async function A0(e,t){const n=Rs(e,!1).get(t),r=await new ei(n).toPromise();return r===void 0?null:r.value}function Xu(e,t){const n=Rs(e,!0).delete(t);return new ei(n).toPromise()}const T0=800,N0=3;class rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>N0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Os._getInstance(x0()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await I0(),!this.activeServiceWorker)return;this.sender=new _0(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||k0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pa();return await Yu(t,ds,"1"),await Xu(t,ds),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yu(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>A0(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xu(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Rs(i,!1).getAll();return new ei(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rh.type="LOCAL";const P0=rh;new Zr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e,t){return t?lt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Qf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function O0(e){return d0(e.auth,new Sl(e),e.bypassAuthState)}function R0(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),c0(n,new Sl(e),e.bypassAuthState)}async function L0(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),u0(n,new Sl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return O0;case"linkViaPopup":case"linkViaRedirect":return L0;case"reauthViaPopup":case"reauthViaRedirect":return R0;default:et(this.auth,"internal-error")}}resolve(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=new Zr(2e3,1e4);async function oh(e,t,n){if(Ye(e.app))return Promise.reject($e(e,"operation-not-supported-in-this-environment"));const r=Ps(e);Ny(e,t,wl);const i=ih(r,n);return new tn(r,"signInViaPopup",t,i).executeNotNull()}class tn extends sh{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const t=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,D0.get())};t()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="pendingRedirect",Di=new Map;class j0 extends sh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Di.get(this.auth._key());if(!t){try{const r=await U0(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Di.set(this.auth._key(),t)}return this.bypassAuthState||Di.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U0(e,t){const n=F0(t),r=b0(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function z0(e,t){Di.set(e._key(),t)}function b0(e){return lt(e._redirectPersistence)}function F0(e){return Li(M0,e.config.apiKey,e.name)}async function B0(e,t,n=!1){if(Ye(e.app))return Promise.reject(sn(e));const r=Ps(e),i=ih(r,t),o=await new j0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=10*60*1e3;class $0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!V0(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ah(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError($e(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=H0&&this.cachedEventUids.clear(),this.cachedEventUids.has(qu(t))}saveEventToCache(t){this.cachedEventUids.add(qu(t)),this.lastProcessedEventTime=Date.now()}}function qu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ah({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function V0(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ah(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(e,t={}){return Zn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K0=/^https?/;async function Q0(e){if(e.config.emulator)return;const{authorizedDomains:t}=await W0(e);for(const n of t)try{if(J0(n))return}catch{}et(e,"unauthorized-domain")}function J0(e){const t=fa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!K0.test(n))return!1;if(G0.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new Zr(3e4,6e4);function Zu(){const e=Ze().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function X0(e){return new Promise((t,n)=>{var i,s,o;function r(){Zu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zu(),n($e(e,"network-request-failed"))},timeout:Y0.get()})}if((s=(i=Ze().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((o=Ze().gapi)!=null&&o.load)r();else{const a=n0("iframefcb");return Ze()[a]=()=>{gapi.load?r():n($e(e,"network-request-failed"))},e0(`${t0()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Mi=null,t})}let Mi=null;function q0(e){return Mi=Mi||X0(e),Mi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new Zr(5e3,15e3),ev="__/auth/iframe",tv="emulator/auth/iframe",nv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iv(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?pl(t,tv):`https://${e.config.authDomain}/${ev}`,r={apiKey:t.apiKey,appName:e.name,v:qr},i=rv.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xr(r).slice(1)}`}async function sv(e){const t=await q0(e),n=Ze().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:iv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$e(e,"network-request-failed"),a=Ze().setTimeout(()=>{s(o)},Z0.get());function l(){Ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},av=500,lv=600,uv="_blank",cv="http://localhost";class ec{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dv(e,t,n,r=av,i=lv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...ov,width:r.toString(),height:i.toString(),top:s,left:o},u=he().toLowerCase();n&&(a=Ff(u)?uv:n),zf(u)&&(t=t||cv,l.scrollbars="yes");const g=Object.entries(l).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(Gy(u)&&a!=="_self")return fv(t||"",a),new ec(null);const m=window.open(t||"",a,g);N(m,e,"popup-blocked");try{m.focus()}catch{}return new ec(m)}function fv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="__/auth/handler",pv="emulator/auth/handler",mv=encodeURIComponent("fac");async function tc(e,t,n,r,i,s){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qr,eventId:i};if(t instanceof wl){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",fg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,m]of Object.entries({}))o[g]=m}if(t instanceof er){const g=t.getScopes().filter(m=>m!=="");g.length>0&&(o.scopes=g.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const g of Object.keys(a))a[g]===void 0&&delete a[g];const l=await e._getAppCheckToken(),u=l?`#${mv}=${encodeURIComponent(l)}`:"";return`${gv(e)}?${Xr(a).slice(1)}${u}`}function gv({config:e}){return e.emulator?pl(e,pv):`https://${e.authDomain}/${hv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="webStorageSupport";class yv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zf,this._completeRedirectFn=B0,this._overrideRedirectResult=z0}async _openPopup(t,n,r,i){var o;mt((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await tc(t,n,r,fa(),i);return dv(t,s,_l())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await tc(t,n,r,fa(),i);return S0(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await sv(t),r=new $0(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ho,{type:ho},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ho];s!==void 0&&n(!!s),et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Q0(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wf()||bf()||yl()}}const vv=yv;var nc="@firebase/auth",rc="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sv(e){Hr(new Qn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gf(e)},u=new qy(r,i,s,l);return i0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Hr(new Qn("auth-internal",t=>{const n=Ps(t.getProvider("auth").getImmediate());return(r=>new wv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(nc,rc,_v(e)),jn(nc,rc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=5*60,kv=kf("authIdTokenMaxAge")||Iv;let ic=null;const xv=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kv)return;const i=n==null?void 0:n.token;ic!==i&&(ic=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ev(e=py()){const t=Af(e,"auth");if(t.isInitialized())return t.getImmediate();const n=r0(e,{popupRedirectResolver:vv,persistence:[P0,v0,Zf]}),r=kf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xv(s.toString());h0(n,o,()=>o(n.currentUser)),f0(n,a=>o(a))}}const i=Ym("auth");return i&&s0(n,`http://${i}`),n}function Cv(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}Zy({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=$e("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Cv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sv("Browser");const lh={apiKey:"AIzaSyDemo_Replace_With_Your_Key",authDomain:"prompt-daily-demo.firebaseapp.com",projectId:"prompt-daily-demo",storageBucket:"prompt-daily-demo.appspot.com",messagingSenderId:"123456789012",appId:"1:123456789012:web:abcdef123456789012"},uh=!lh.apiKey.includes("Demo_Replace"),Av=Tf(lh),Ls=Ev(Av),ch=new it;ch.setCustomParameters({prompt:"select_account"});const Tv=new xr("oidc.kakao"),Nv=async()=>{if(!uh)return{success:!1,error:"Firebase가 설정되지 않았습니다. FIREBASE_SETUP.md를 참고하세요.",needsSetup:!0};try{const e=await oh(Ls,ch);return{success:!0,user:{uid:e.user.uid,name:e.user.displayName,email:e.user.email,avatar:e.user.photoURL,provider:"google"}}}catch(e){console.error("Google 로그인 에러:",e);let t=e.message;return e.code==="auth/popup-closed-by-user"?t="로그인이 취소되었습니다.":e.code==="auth/unauthorized-domain"?t="승인되지 않은 도메인입니다. Firebase Console에서 도메인을 추가하세요.":e.code==="auth/popup-blocked"&&(t="팝업이 차단되었습니다. 팝업 차단을 해제하세요."),{success:!1,error:t}}},Pv=async()=>{if(!uh)return{success:!1,error:"Firebase가 설정되지 않았습니다. FIREBASE_SETUP.md를 참고하세요.",needsSetup:!0};try{const e=await oh(Ls,Tv);return{success:!0,user:{uid:e.user.uid,name:e.user.displayName,email:e.user.email,avatar:e.user.photoURL,provider:"kakao"}}}catch(e){console.error("Kakao 로그인 에러:",e);let t=e.message;return e.code==="auth/popup-closed-by-user"?t="로그인이 취소되었습니다.":e.code==="auth/operation-not-supported-in-this-environment"&&(t="카카오 로그인 설정이 필요합니다."),{success:!1,error:t}}},Ov=async()=>{try{return await m0(Ls),{success:!0}}catch(e){return console.error("로그아웃 에러:",e),{success:!1,error:e.message}}},Rv=e=>p0(Ls,t=>{var n;e(t?{uid:t.uid,name:t.displayName,email:t.email,avatar:t.photoURL,provider:((n=t.providerData[0])==null?void 0:n.providerId)||"unknown"}:null)}),yn="Prompt Daily",Lv="AI 뉴스의 모든 것",Dv=()=>c.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5",fill:"currentColor",children:c.jsx("path",{d:"M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.023 5.897l-1.02 3.815c-.046.17.016.353.157.458.14.105.331.117.484.03L9.79 18.11c.71.12 1.447.19 2.21.19 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"})}),Mv=()=>c.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),jv=["전체","LLM","기업 AI","로보틱스","스타트업","이미지 AI","비디오 AI"],ma=e=>{const t=new Date(e),n=t.getDate(),r=t.getMonth()+1,i=t.getFullYear();return`${n} ${["","1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"][r]} ${i}`},Uv=e=>{const t=new Date(e),r=new Date-t,i=Math.floor(r/(1e3*60*60)),s=Math.floor(r/(1e3*60*60*24));return i<1?"방금 전":i<24?`${i}시간 전`:s<7?`${s}일 전`:ma(e)},zv=e=>e?e.split(`

`).map((t,n)=>{if(t.startsWith("## "))return c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mt-10 mb-4",children:t.replace("## ","")},n);if(t.startsWith("### "))return c.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-8 mb-3",children:t.replace("### ","")},n);if(t.startsWith("- ")||t.startsWith("* ")){const r=t.split(`
`).filter(i=>i.trim());return c.jsx("ul",{className:"list-disc list-outside ml-6 my-4 space-y-2 text-gray-700",children:r.map((i,s)=>c.jsx("li",{className:"leading-relaxed pl-2",children:i.replace(/^[-*]\s*/,"").split(/\*\*(.*?)\*\*/).map((o,a)=>a%2===1?c.jsx("strong",{className:"font-semibold text-gray-900",children:o},a):o)},s))},n)}if(/^\d+\.\s/.test(t)){const r=t.split(`
`).filter(i=>i.trim());return c.jsx("ol",{className:"list-decimal list-outside ml-6 my-4 space-y-2 text-gray-700",children:r.map((i,s)=>c.jsx("li",{className:"leading-relaxed pl-2",children:i.replace(/^\d+\.\s*/,"").split(/\*\*(.*?)\*\*/).map((o,a)=>a%2===1?c.jsx("strong",{className:"font-semibold text-gray-900",children:o},a):o)},s))},n)}return t.startsWith("> ")?c.jsx("blockquote",{className:"blockquote my-8 py-4 pr-6 rounded-r-lg text-gray-700 text-lg",children:t.replace("> ","").replace(/"/g,"")},n):t.includes("|")&&t.includes("---")?c.jsx("div",{className:"my-6 text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto font-mono",children:t},n):c.jsx("p",{className:"text-gray-700 mb-5 leading-[1.8] text-[17px]",children:t.split(/\*\*(.*?)\*\*/).map((r,i)=>i%2===1?c.jsx("strong",{className:"font-semibold text-gray-900",children:r},i):r)},n)}):null;function bv({title:e,url:t}){const[n,r]=H.useState(!1),i=t||window.location.href,s=a=>{const l={twitter:`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}&url=${encodeURIComponent(i)}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(i)}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(i)}`};window.open(l[a],"share","width=550,height=450")},o=async()=>{try{await navigator.clipboard.writeText(i)}catch{const a=document.createElement("input");a.value=i,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}r(!0),setTimeout(()=>r(!1),2e3)};return c.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[c.jsx("span",{className:"text-sm text-gray-500",children:"공유하기"}),c.jsx("button",{onClick:()=>s("twitter"),className:"w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity",children:c.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),c.jsx("button",{onClick:()=>s("facebook"),className:"w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity",children:c.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),c.jsx("button",{onClick:()=>s("linkedin"),className:"w-9 h-9 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:opacity-80 transition-opacity",children:c.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),c.jsxs("button",{onClick:o,className:"h-9 px-4 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors text-sm",children:[c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"})}),n?"복사됨!":"링크 복사"]})]})}function Fv({news:e,onClick:t,featured:n=!1}){return c.jsxs("article",{onClick:t,className:`news-card cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg ${n?"md:col-span-2 md:row-span-2":""}`,children:[c.jsx("div",{className:`card-image-wrapper ${n?"aspect-[16/9]":"aspect-[4/3]"} bg-gray-100`,children:c.jsx("img",{src:e.image,alt:"",className:"card-image w-full h-full object-cover",loading:"lazy"})}),c.jsxs("div",{className:"p-5",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsx("span",{className:"px-2.5 py-1 text-xs font-medium text-[#10436b] bg-[#e8f0f7] rounded-full",children:e.category}),e.breaking&&c.jsx("span",{className:"breaking-badge px-2.5 py-1 text-xs font-medium text-white bg-red-500 rounded-full",children:"속보"})]}),c.jsx("h3",{className:`font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#10436b] transition-colors ${n?"text-2xl":"text-lg"}`,children:e.title}),c.jsx("p",{className:"text-gray-500 text-sm line-clamp-2 mb-3",children:e.summary}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400",children:[c.jsx("span",{children:Uv(e.date)}),c.jsxs("span",{children:[e.readTime||"5분"," 읽기"]})]})]})]})}function Bv(){const[e,t]=H.useState(null),[n,r]=H.useState("전체"),[i,s]=H.useState(""),[o,a]=H.useState(!1),[l,u]=H.useState(""),[g,m]=H.useState(!1),[h,v]=H.useState(!1),[_,S]=H.useState(null),[M,f]=H.useState(!1),[d,p]=H.useState(""),[y,I]=H.useState(""),[C,E]=H.useState(!1),[T,b]=H.useState(!1),[R,oe]=H.useState(null),[ge,We]=H.useState({terms:!1,privacy:!1,marketing:!1}),[Gt,tt]=H.useState(!1),[hn,Te]=H.useState("");H.useEffect(()=>{const A=Rv(j=>{if(j){const ti=JSON.parse(localStorage.getItem("prompt_daily_users")||"[]").find(dh=>dh.uid===j.uid);ti?S(ti):(oe(j),b(!0)),f(!1)}else S(null);tt(!1)});return()=>A()},[]);const k=async()=>{tt(!0),Te("");try{const A=await Pv();if(!A.success)if(A.needsSetup){const j={uid:"kakao_demo_"+Date.now(),name:"카카오 사용자",email:"kakao_user@kakao.com",avatar:null,provider:"kakao"};O(j)}else Te(A.error||"카카오 로그인에 실패했습니다.")}catch{Te("카카오 로그인 중 오류가 발생했습니다.")}tt(!1)},P=async()=>{tt(!0),Te("");try{const A=await Nv();if(!A.success)if(A.needsSetup){const j={uid:"google_demo_"+Date.now(),name:"Google 사용자",email:"google_user@gmail.com",avatar:null,provider:"google"};O(j)}else Te(A.error||"구글 로그인에 실패했습니다.")}catch{Te("구글 로그인 중 오류가 발생했습니다.")}tt(!1)},O=A=>{const mn=JSON.parse(localStorage.getItem("prompt_daily_users")||"[]").find(ti=>ti.email===A.email);mn?(S(mn),f(!1),Ge()):(oe(A),f(!1),b(!0))},W=A=>{A.preventDefault(),Te("이메일 로그인은 준비 중입니다. 소셜 로그인을 이용해주세요.")},X=()=>{if(!ge.terms||!ge.privacy){alert("필수 약관에 동의해주세요.");return}const A={...R,consents:ge,createdAt:new Date().toISOString()},j=JSON.parse(localStorage.getItem("prompt_daily_users")||"[]");j.push(A),localStorage.setItem("prompt_daily_users",JSON.stringify(j)),S(A),b(!1),oe(null),We({terms:!1,privacy:!1,marketing:!1})},Kt=async()=>{tt(!0),await Ov(),S(null),tt(!1)},Ge=()=>{p(""),I(""),E(!1),Te("")},pn=H.useMemo(()=>Bm.articles.map(A=>({...A,formattedDate:ma(A.date)})),[]),Me=H.useMemo(()=>{let A=pn;if(n!=="전체"&&(A=A.filter(j=>j.category===n)),i.trim()){const j=i.toLowerCase();A=A.filter(mn=>mn.title.toLowerCase().includes(j)||mn.summary.toLowerCase().includes(j))}return A},[pn,n,i]),Qt=A=>{if(A.preventDefault(),!l.includes("@"))return;const j=JSON.parse(localStorage.getItem("ai_today_subscribers")||"[]");j.includes(l)||(j.push(l),localStorage.setItem("ai_today_subscribers",JSON.stringify(j))),m(!0),u(""),setTimeout(()=>m(!1),3e3)};return H.useEffect(()=>{const A=j=>{j.key==="Escape"&&(e?t(null):o&&a(!1))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[e,o]),e?c.jsxs("div",{className:"min-h-screen bg-white",children:[c.jsx("header",{className:"sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 h-16 flex items-center justify-between",children:[c.jsx("button",{onClick:()=>t(null),className:"text-xl font-bold text-[#10436b] hover:opacity-80 transition-opacity",children:yn}),c.jsxs("button",{onClick:()=>t(null),className:"flex items-center gap-1 text-gray-500 hover:text-[#10436b] transition-colors text-sm",children:[c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]})]})}),c.jsxs("article",{className:"max-w-3xl mx-auto px-4 py-8 md:py-12",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx("span",{className:"px-3 py-1.5 text-sm font-medium text-white bg-[#10436b] rounded-full",children:e.category}),e.breaking&&c.jsx("span",{className:"px-3 py-1.5 text-sm font-medium text-white bg-red-500 rounded-full",children:"속보"})]}),c.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight",children:e.title}),c.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-100",children:[c.jsx("span",{className:"font-medium text-gray-700",children:e.author||"Prompt Daily 편집팀"}),c.jsx("span",{children:"·"}),c.jsx("span",{children:ma(e.date)}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[e.readTime||"5분"," 읽기"]})]}),c.jsx("img",{src:e.image,alt:"",className:"w-full rounded-xl mb-8 shadow-lg"}),c.jsx("div",{className:"bg-gradient-to-r from-[#e8f0f7] to-[#f0f7ff] border-l-4 border-[#10436b] p-5 mb-10 rounded-r-lg",children:c.jsx("p",{className:"text-gray-700 font-medium leading-relaxed",children:e.summary})}),c.jsx("div",{className:"prose prose-lg max-w-none",children:zv(e.content)}),c.jsx("div",{className:"mt-12 pt-8 border-t border-gray-200",children:c.jsx(bv,{title:e.title})}),c.jsxs("div",{className:"mt-12 bg-[#10436b] rounded-2xl p-8 text-center",children:[c.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"AI 뉴스를 놓치지 마세요"}),c.jsx("p",{className:"text-blue-100 mb-6",children:"매일 아침, 엄선된 AI 뉴스를 무료로 받아보세요"}),c.jsxs("form",{onSubmit:Qt,className:"flex gap-2 max-w-md mx-auto",children:[c.jsx("input",{type:"email",value:l,onChange:A=>u(A.target.value),placeholder:"이메일 주소 입력",className:"flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"}),c.jsx("button",{type:"submit",className:"px-6 py-3 bg-white text-[#10436b] font-semibold rounded-lg hover:bg-blue-50 transition-colors",children:g?"완료!":"구독"})]})]})]}),c.jsx("footer",{className:"bg-gray-900 text-gray-400 py-8 mt-16",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center text-sm",children:[c.jsx("p",{className:"text-white font-bold mb-2",children:yn}),c.jsx("p",{children:"© 2026 GIGA GLOBAL STUDIO. All rights reserved."})]})})]}):c.jsxs("div",{className:"min-h-screen bg-[#f8f9fa]",children:[c.jsx("header",{className:"sticky top-0 bg-white border-b border-gray-200 z-50",children:c.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[c.jsxs("div",{className:"h-16 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-8",children:[c.jsx("h1",{className:"text-2xl font-bold text-[#10436b]",children:yn}),c.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[c.jsx("a",{href:"#",className:"text-sm font-medium text-gray-900 hover:text-[#10436b]",children:"전체기사"}),c.jsx("a",{href:"#",className:"text-sm text-gray-500 hover:text-[#10436b]",children:"소개"})]})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:()=>a(!o),className:"p-2 text-gray-500 hover:text-[#10436b] transition-colors",children:c.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),_?c.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[c.jsxs("span",{className:"text-sm text-gray-600",children:[_.name,"님"]}),c.jsx("button",{onClick:Kt,className:"px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors",children:"로그아웃"})]}):c.jsx("button",{onClick:()=>f(!0),className:"hidden sm:block px-4 py-2 bg-[#10436b] text-white text-sm font-medium rounded-lg hover:bg-[#0d3555] transition-colors",children:"가입하기"}),c.jsx("button",{onClick:()=>v(!h),className:"md:hidden p-2 text-gray-500",children:c.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:h?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]})]}),o&&c.jsx("div",{className:"py-4 border-t border-gray-100",children:c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"text",value:i,onChange:A=>s(A.target.value),placeholder:"기사 검색...",className:"search-input w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900",autoFocus:!0}),c.jsx("svg",{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),i&&c.jsx("button",{onClick:()=>s(""),className:"absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:c.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})}),h&&c.jsxs("nav",{className:"md:hidden py-4 border-t border-gray-100",children:[c.jsx("a",{href:"#",className:"block py-2 text-gray-900 font-medium",children:"전체기사"}),c.jsx("a",{href:"#",className:"block py-2 text-gray-500",children:"소개"}),_?c.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[c.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:[_.name,"님 환영합니다"]}),c.jsx("button",{onClick:Kt,className:"w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-lg",children:"로그아웃"})]}):c.jsx("button",{onClick:()=>{f(!0),v(!1)},className:"mt-2 w-full py-3 bg-[#10436b] text-white font-medium rounded-lg",children:"가입하기"})]})]})}),c.jsx("div",{className:"bg-white border-b border-gray-200 sticky top-16 z-40",children:c.jsx("div",{className:"max-w-6xl mx-auto px-4",children:c.jsx("div",{className:"flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide",children:jv.map(A=>c.jsx("button",{onClick:()=>r(A),className:`category-tab px-4 py-2 text-sm whitespace-nowrap rounded-full transition-all ${n===A?"active bg-[#10436b] text-white font-semibold":"text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`,children:A},A))})})}),c.jsxs("main",{className:"max-w-6xl mx-auto px-4 py-8",children:[i&&c.jsx("div",{className:"mb-6",children:c.jsxs("p",{className:"text-gray-500",children:['"',c.jsx("span",{className:"font-medium text-gray-900",children:i}),'" 검색 결과: ',Me.length,"건"]})}),Me.length===0?c.jsxs("div",{className:"text-center py-16",children:[c.jsx("svg",{className:"w-16 h-16 text-gray-300 mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),c.jsx("p",{className:"text-gray-500",children:"검색 결과가 없습니다."})]}):c.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Me.map((A,j)=>c.jsx(Fv,{news:A,onClick:()=>t(A),featured:j===0&&!i&&n==="전체"},A.id))})]}),c.jsx("section",{id:"subscribe-section",className:"bg-gradient-to-br from-[#10436b] to-[#1a5a8a] py-16 mt-8",children:c.jsxs("div",{className:"max-w-2xl mx-auto px-4 text-center",children:[c.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"AI 뉴스레터 구독"}),c.jsxs("p",{className:"text-blue-100 text-lg mb-8",children:["매일 아침 8시, 엄선된 AI 뉴스를 무료로 받아보세요.",c.jsx("br",{}),"인공지능 업계의 최신 소식을 놓치지 마세요."]}),c.jsxs("form",{onSubmit:Qt,className:"flex flex-col sm:flex-row gap-3 max-w-md mx-auto",children:[c.jsx("input",{type:"email",value:l,onChange:A=>u(A.target.value),placeholder:"이메일 주소",className:"flex-1 px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50",required:!0}),c.jsx("button",{type:"submit",className:"px-8 py-4 bg-white text-[#10436b] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg",children:g?"구독 완료!":"무료 구독"})]}),c.jsx("p",{className:"mt-4 text-sm text-blue-200",children:"구독은 무료이며, 언제든 해지할 수 있습니다."})]})}),c.jsx("footer",{className:"bg-gray-900 text-gray-400 py-12",children:c.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[c.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-8",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-white font-bold text-xl mb-3",children:yn}),c.jsx("p",{className:"text-sm leading-relaxed",children:Lv})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-white font-semibold mb-3",children:"바로가기"}),c.jsxs("ul",{className:"space-y-2 text-sm",children:[c.jsx("li",{children:c.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"전체기사"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"소개"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"개인정보처리방침"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"이용약관"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-white font-semibold mb-3",children:"연락처"}),c.jsxs("ul",{className:"space-y-2 text-sm",children:[c.jsx("li",{children:"서울특별시 강남구"}),c.jsx("li",{children:"contact@promptdaily.kr"})]})]})]}),c.jsx("div",{className:"pt-8 border-t border-gray-800 text-center text-sm",children:c.jsxs("p",{children:["© 2026 ",yn,". Powered by GIGA GLOBAL STUDIO. All rights reserved."]})})]})}),M&&c.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-8 relative",children:[c.jsx("button",{onClick:()=>{f(!1),Ge()},className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600",children:c.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2 text-center",children:yn}),c.jsx("p",{className:"text-gray-500 text-center mb-6",children:"1초만에 가입하고 AI 뉴스를 받아보세요"}),hn&&c.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center",children:hn}),c.jsxs("div",{className:"space-y-3 mb-6",children:[c.jsxs("button",{onClick:k,disabled:Gt,className:"w-full py-3 px-4 bg-[#FEE500] text-[#3C1E1E] font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-[#FDD800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[Gt?c.jsx("div",{className:"w-5 h-5 border-2 border-[#3C1E1E]/30 border-t-[#3C1E1E] rounded-full animate-spin"}):c.jsx(Dv,{}),"카카오로 1초 가입"]}),c.jsxs("button",{onClick:P,disabled:Gt,className:"w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[Gt?c.jsx("div",{className:"w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"}):c.jsx(Mv,{}),"Google로 가입"]})]}),c.jsxs("div",{className:"relative my-6",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-200"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-4 bg-white text-gray-400",children:"또는"})})]}),c.jsxs("form",{onSubmit:W,className:"space-y-4",children:[c.jsx("input",{type:"email",value:d,onChange:A=>p(A.target.value),placeholder:"이메일 주소",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10436b]/20 focus:border-[#10436b]"}),c.jsx("input",{type:"password",value:y,onChange:A=>I(A.target.value),placeholder:"비밀번호",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10436b]/20 focus:border-[#10436b]"}),c.jsx("button",{type:"submit",className:"w-full py-3 bg-[#10436b] text-white font-medium rounded-xl hover:bg-[#0d3555] transition-colors",children:"이메일로 계속하기"})]}),c.jsxs("p",{className:"mt-6 text-center text-xs text-gray-400",children:["가입 시 ",c.jsx("a",{href:"#",className:"text-[#10436b] hover:underline",children:"이용약관"})," 및"," ",c.jsx("a",{href:"#",className:"text-[#10436b] hover:underline",children:"개인정보처리방침"}),"에 동의합니다."]})]})}),T&&c.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-8",children:[c.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"환영합니다!"}),c.jsx("p",{className:"text-gray-500 mb-6",children:"서비스 이용을 위해 약관에 동의해주세요."}),c.jsxs("div",{className:"space-y-4 mb-6",children:[c.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:ge.terms,onChange:A=>We(j=>({...j,terms:A.target.checked})),className:"mt-1 w-5 h-5 text-[#10436b] rounded focus:ring-[#10436b]"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium text-gray-900",children:"[필수] 이용약관 동의"}),c.jsx("p",{className:"text-sm text-gray-500",children:"서비스 이용에 필요한 약관입니다."})]})]}),c.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:ge.privacy,onChange:A=>We(j=>({...j,privacy:A.target.checked})),className:"mt-1 w-5 h-5 text-[#10436b] rounded focus:ring-[#10436b]"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium text-gray-900",children:"[필수] 개인정보 수집 동의"}),c.jsx("p",{className:"text-sm text-gray-500",children:"이메일, 이름 등 기본 정보를 수집합니다."})]})]}),c.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:ge.marketing,onChange:A=>We(j=>({...j,marketing:A.target.checked})),className:"mt-1 w-5 h-5 text-[#10436b] rounded focus:ring-[#10436b]"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium text-gray-900",children:"[선택] 마케팅 수신 동의"}),c.jsx("p",{className:"text-sm text-gray-500",children:"AI 뉴스레터 및 이벤트 정보를 받습니다."})]})]})]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:()=>{b(!1),oe(null)},className:"flex-1 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors",children:"취소"}),c.jsx("button",{onClick:X,disabled:!ge.terms||!ge.privacy,className:"flex-1 py-3 bg-[#10436b] text-white font-medium rounded-xl hover:bg-[#0d3555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"동의하고 가입"})]})]})})]})}po.createRoot(document.getElementById("root")).render(c.jsx(Th.StrictMode,{children:c.jsx(Bv,{})}));
