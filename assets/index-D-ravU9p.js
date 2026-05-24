function hc(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function gc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var js={exports:{}},To={},Vs={exports:{}},w={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Sc=Symbol.for("react.portal"),yc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),Pc=Symbol.for("react.provider"),Mc=Symbol.for("react.context"),Tc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),xc=Symbol.for("react.memo"),Lc=Symbol.for("react.lazy"),ga=Symbol.iterator;function Oc(n){return n===null||typeof n!="object"?null:(n=ga&&n[ga]||n["@@iterator"],typeof n=="function"?n:null)}var _s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fs=Object.assign,$s={};function mt(n,e,t){this.props=n,this.context=e,this.refs=$s,this.updater=t||_s}mt.prototype.isReactComponent={};mt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};mt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Xs(){}Xs.prototype=mt.prototype;function gi(n,e,t){this.props=n,this.context=e,this.refs=$s,this.updater=t||_s}var Si=gi.prototype=new Xs;Si.constructor=gi;Fs(Si,mt.prototype);Si.isPureReactComponent=!0;var Sa=Array.isArray,zs=Object.prototype.hasOwnProperty,yi={current:null},Ws={key:!0,ref:!0,__self:!0,__source:!0};function bs(n,e,t){var r,o={},l=null,i=null;if(e!=null)for(r in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(l=""+e.key),e)zs.call(e,r)&&!Ws.hasOwnProperty(r)&&(o[r]=e[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:dr,type:n,key:l,ref:i,props:o,_owner:yi.current}}function Gc(n,e){return{$$typeof:dr,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function vi(n){return typeof n=="object"&&n!==null&&n.$$typeof===dr}function kc(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ya=/\/+/g;function Xo(n,e){return typeof n=="object"&&n!==null&&n.key!=null?kc(""+n.key):e.toString(36)}function Hr(n,e,t,r,o){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var i=!1;if(n===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(n.$$typeof){case dr:case Sc:i=!0}}if(i)return i=n,o=o(i),n=r===""?"."+Xo(i,0):r,Sa(o)?(t="",n!=null&&(t=n.replace(ya,"$&/")+"/"),Hr(o,e,t,"",function(c){return c})):o!=null&&(vi(o)&&(o=Gc(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ya,"$&/")+"/")+n)),e.push(o)),1;if(i=0,r=r===""?".":r+":",Sa(n))for(var a=0;a<n.length;a++){l=n[a];var s=r+Xo(l,a);i+=Hr(l,e,t,s,o)}else if(s=Oc(n),typeof s=="function")for(n=s.call(n),a=0;!(l=n.next()).done;)l=l.value,s=r+Xo(l,a++),i+=Hr(l,e,t,s,o);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function yr(n,e,t){if(n==null)return n;var r=[],o=0;return Hr(n,r,"","",function(l){return e.call(t,l,o++)}),r}function wc(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},Ur={transition:null},Nc={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:yi};function Qs(){throw Error("act(...) is not supported in production builds of React.")}w.Children={map:yr,forEach:function(n,e,t){yr(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return yr(n,function(){e++}),e},toArray:function(n){return yr(n,function(e){return e})||[]},only:function(n){if(!vi(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};w.Component=mt;w.Fragment=yc;w.Profiler=Cc;w.PureComponent=gi;w.StrictMode=vc;w.Suspense=Ec;w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nc;w.act=Qs;w.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=Fs({},n.props),o=n.key,l=n.ref,i=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,i=yi.current),e.key!==void 0&&(o=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(s in e)zs.call(e,s)&&!Ws.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&a!==void 0?a[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dr,type:n.type,key:o,ref:l,props:r,_owner:i}};w.createContext=function(n){return n={$$typeof:Mc,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Pc,_context:n},n.Consumer=n};w.createElement=bs;w.createFactory=function(n){var e=bs.bind(null,n);return e.type=n,e};w.createRef=function(){return{current:null}};w.forwardRef=function(n){return{$$typeof:Tc,render:n}};w.isValidElement=vi;w.lazy=function(n){return{$$typeof:Lc,_payload:{_status:-1,_result:n},_init:wc}};w.memo=function(n,e){return{$$typeof:xc,type:n,compare:e===void 0?null:e}};w.startTransition=function(n){var e=Ur.transition;Ur.transition={};try{n()}finally{Ur.transition=e}};w.unstable_act=Qs;w.useCallback=function(n,e){return cn.current.useCallback(n,e)};w.useContext=function(n){return cn.current.useContext(n)};w.useDebugValue=function(){};w.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};w.useEffect=function(n,e){return cn.current.useEffect(n,e)};w.useId=function(){return cn.current.useId()};w.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};w.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};w.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};w.useMemo=function(n,e){return cn.current.useMemo(n,e)};w.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};w.useRef=function(n){return cn.current.useRef(n)};w.useState=function(n){return cn.current.useState(n)};w.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};w.useTransition=function(){return cn.current.useTransition()};w.version="18.3.1";Vs.exports=w;var h=Vs.exports;const Js=gc(h),Dc=hc({__proto__:null,default:Js},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=h,Bc=Symbol.for("react.element"),Kc=Symbol.for("react.fragment"),Hc=Object.prototype.hasOwnProperty,Uc=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jc={key:!0,ref:!0,__self:!0,__source:!0};function Ys(n,e,t){var r,o={},l=null,i=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)Hc.call(e,r)&&!jc.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:Bc,type:n,key:l,ref:i,props:o,_owner:Uc.current}}To.Fragment=Kc;To.jsx=Ys;To.jsxs=Ys;js.exports=To;var u=js.exports,Sl={},Zs={exports:{}},Cn={},qs={exports:{}},nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(E,G){var k=E.length;E.push(G);n:for(;0<k;){var X=k-1>>>1,Y=E[X];if(0<o(Y,G))E[X]=G,E[k]=Y,k=X;else break n}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var G=E[0],k=E.pop();if(k!==G){E[0]=k;n:for(var X=0,Y=E.length,gr=Y>>>1;X<gr;){var Me=2*(X+1)-1,$o=E[Me],Te=Me+1,Sr=E[Te];if(0>o($o,k))Te<Y&&0>o(Sr,$o)?(E[X]=Sr,E[Te]=k,X=Te):(E[X]=$o,E[Me]=k,X=Me);else if(Te<Y&&0>o(Sr,k))E[X]=Sr,E[Te]=k,X=Te;else break n}}return G}function o(E,G){var k=E.sortIndex-G.sortIndex;return k!==0?k:E.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();n.unstable_now=function(){return i.now()-a}}var s=[],c=[],m=1,A=null,I=3,y=!1,v=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var G=t(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=E)r(c),G.sortIndex=G.expirationTime,e(s,G);else break;G=t(c)}}function g(E){if(S=!1,f(E),!v)if(t(s)!==null)v=!0,_o(M);else{var G=t(c);G!==null&&Fo(g,G.startTime-E)}}function M(E,G){v=!1,S&&(S=!1,d(O),O=-1),y=!0;var k=I;try{for(f(G),A=t(s);A!==null&&(!(A.expirationTime>G)||E&&!kn());){var X=A.callback;if(typeof X=="function"){A.callback=null,I=A.priorityLevel;var Y=X(A.expirationTime<=G);G=n.unstable_now(),typeof Y=="function"?A.callback=Y:A===t(s)&&r(s),f(G)}else r(s);A=t(s)}if(A!==null)var gr=!0;else{var Me=t(c);Me!==null&&Fo(g,Me.startTime-G),gr=!1}return gr}finally{A=null,I=k,y=!1}}var x=!1,L=null,O=-1,$=5,N=-1;function kn(){return!(n.unstable_now()-N<$)}function vt(){if(L!==null){var E=n.unstable_now();N=E;var G=!0;try{G=L(!0,E)}finally{G?Ct():(x=!1,L=null)}}else x=!1}var Ct;if(typeof p=="function")Ct=function(){p(vt)};else if(typeof MessageChannel<"u"){var ha=new MessageChannel,Ic=ha.port2;ha.port1.onmessage=vt,Ct=function(){Ic.postMessage(null)}}else Ct=function(){P(vt,0)};function _o(E){L=E,x||(x=!0,Ct())}function Fo(E,G){O=P(function(){E(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(E){E.callback=null},n.unstable_continueExecution=function(){v||y||(v=!0,_o(M))},n.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(s)},n.unstable_next=function(E){switch(I){case 1:case 2:case 3:var G=3;break;default:G=I}var k=I;I=G;try{return E()}finally{I=k}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(E,G){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var k=I;I=E;try{return G()}finally{I=k}},n.unstable_scheduleCallback=function(E,G,k){var X=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?X+k:X):k=X,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=k+Y,E={id:m++,callback:G,priorityLevel:E,startTime:k,expirationTime:Y,sortIndex:-1},k>X?(E.sortIndex=k,e(c,E),t(s)===null&&E===t(c)&&(S?(d(O),O=-1):S=!0,Fo(g,k-X))):(E.sortIndex=Y,e(s,E),v||y||(v=!0,_o(M))),E},n.unstable_shouldYield=kn,n.unstable_wrapCallback=function(E){var G=I;return function(){var k=I;I=G;try{return E.apply(this,arguments)}finally{I=k}}}})(nu);qs.exports=nu;var Vc=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=h,vn=Vc;function C(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eu=new Set,Xt={};function Ue(n,e){st(n,e),st(n+"Capture",e)}function st(n,e){for(Xt[n]=e,n=0;n<e.length;n++)eu.add(e[n])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,Fc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,va={},Ca={};function $c(n){return yl.call(Ca,n)?!0:yl.call(va,n)?!1:Fc.test(n)?Ca[n]=!0:(va[n]=!0,!1)}function Xc(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function zc(n,e,t,r){if(e===null||typeof e>"u"||Xc(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,r,o,l,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=i}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){tn[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];tn[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){tn[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){tn[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){tn[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){tn[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){tn[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){tn[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){tn[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ci=/[\-:]([a-z])/g;function Pi(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ci,Pi);tn[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ci,Pi);tn[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ci,Pi);tn[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){tn[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});tn.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){tn[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Mi(n,e,t,r){var o=tn.hasOwnProperty(e)?tn[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zc(e,t,o,r)&&(t=null),r||o===null?$c(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):o.mustUseProperty?n[o.propertyName]=t===null?o.type===3?!1:"":t:(e=o.attributeName,r=o.attributeNamespace,t===null?n.removeAttribute(e):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var qn=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Fe=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),Ti=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),Ei=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),xi=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),Pa=Symbol.iterator;function Pt(n){return n===null||typeof n!="object"?null:(n=Pa&&n[Pa]||n["@@iterator"],typeof n=="function"?n:null)}var _=Object.assign,zo;function wt(n){if(zo===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);zo=e&&e[1]||""}return`
`+zo+n}var Wo=!1;function bo(n,e){if(!n||Wo)return"";Wo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return n.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",n.displayName)),s}while(1<=i&&0<=a);break}}}finally{Wo=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?wt(n):""}function Wc(n){switch(n.tag){case 5:return wt(n.type);case 16:return wt("Lazy");case 13:return wt("Suspense");case 19:return wt("SuspenseList");case 0:case 2:case 15:return n=bo(n.type,!1),n;case 11:return n=bo(n.type.render,!1),n;case 1:return n=bo(n.type,!0),n;default:return""}}function Ml(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $e:return"Fragment";case Fe:return"Portal";case vl:return"Profiler";case Ti:return"StrictMode";case Cl:return"Suspense";case Pl:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ru:return(n.displayName||"Context")+".Consumer";case tu:return(n._context.displayName||"Context")+".Provider";case Ei:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xi:return e=n.displayName||null,e!==null?e:Ml(n.type)||"Memo";case te:e=n._payload,n=n._init;try{return Ml(n(e))}catch{}}return null}function bc(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(e);case 8:return e===Ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function lu(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qc(n){var e=lu(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Cr(n){n._valueTracker||(n._valueTracker=Qc(n))}function iu(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=lu(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Jr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Tl(n,e){var t=e.checked;return _({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ma(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ge(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function au(n,e){e=e.checked,e!=null&&Mi(n,"checked",e,!1)}function El(n,e){au(n,e);var t=ge(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xl(n,e.type,t):e.hasOwnProperty("defaultValue")&&xl(n,e.type,ge(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ta(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xl(n,e,t){(e!=="number"||Jr(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Nt=Array.isArray;function tt(n,e,t,r){if(n=n.options,e){e={};for(var o=0;o<t.length;o++)e["$"+t[o]]=!0;for(t=0;t<n.length;t++)o=e.hasOwnProperty("$"+n[t].value),n[t].selected!==o&&(n[t].selected=o),o&&r&&(n[t].defaultSelected=!0)}else{for(t=""+ge(t),e=null,o=0;o<n.length;o++){if(n[o].value===t){n[o].selected=!0,r&&(n[o].defaultSelected=!0);return}e!==null||n[o].disabled||(e=n[o])}e!==null&&(e.selected=!0)}}function Ll(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return _({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ea(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(C(92));if(Nt(t)){if(1<t.length)throw Error(C(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ge(t)}}function su(n,e){var t=ge(e.value),r=ge(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function xa(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function uu(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?uu(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pr,cu=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,o){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,o)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function zt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(n){Jc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Bt[e]=Bt[n]})});function du(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Bt.hasOwnProperty(n)&&Bt[n]?(""+e).trim():e+"px"}function pu(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=du(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,o):n[t]=o}}var Yc=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(n,e){if(e){if(Yc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function kl(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function Li(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Nl=null,rt=null,ot=null;function La(n){if(n=Ar(n)){if(typeof Nl!="function")throw Error(C(280));var e=n.stateNode;e&&(e=Go(e),Nl(n.stateNode,n.type,e))}}function fu(n){rt?ot?ot.push(n):ot=[n]:rt=n}function Au(){if(rt){var n=rt,e=ot;if(ot=rt=null,La(n),e)for(n=0;n<e.length;n++)La(e[n])}}function mu(n,e){return n(e)}function Iu(){}var Qo=!1;function hu(n,e,t){if(Qo)return n(e,t);Qo=!0;try{return mu(n,e,t)}finally{Qo=!1,(rt!==null||ot!==null)&&(Iu(),Au())}}function Wt(n,e){var t=n.stateNode;if(t===null)return null;var r=Go(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(C(231,e,typeof t));return t}var Dl=!1;if(Qn)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch{Dl=!1}function Zc(n,e,t,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(m){this.onError(m)}}var Kt=!1,Yr=null,Zr=!1,Rl=null,qc={onError:function(n){Kt=!0,Yr=n}};function nd(n,e,t,r,o,l,i,a,s){Kt=!1,Yr=null,Zc.apply(qc,arguments)}function ed(n,e,t,r,o,l,i,a,s){if(nd.apply(this,arguments),Kt){if(Kt){var c=Yr;Kt=!1,Yr=null}else throw Error(C(198));Zr||(Zr=!0,Rl=c)}}function je(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function gu(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Oa(n){if(je(n)!==n)throw Error(C(188))}function td(n){var e=n.alternate;if(!e){if(e=je(n),e===null)throw Error(C(188));return e!==n?null:n}for(var t=n,r=e;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Oa(o),n;if(l===r)return Oa(o),e;l=l.sibling}throw Error(C(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?n:e}function Su(n){return n=td(n),n!==null?yu(n):null}function yu(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=yu(n);if(e!==null)return e;n=n.sibling}return null}var vu=vn.unstable_scheduleCallback,Ga=vn.unstable_cancelCallback,rd=vn.unstable_shouldYield,od=vn.unstable_requestPaint,z=vn.unstable_now,ld=vn.unstable_getCurrentPriorityLevel,Oi=vn.unstable_ImmediatePriority,Cu=vn.unstable_UserBlockingPriority,qr=vn.unstable_NormalPriority,id=vn.unstable_LowPriority,Pu=vn.unstable_IdlePriority,Eo=null,_n=null;function ad(n){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Eo,n,void 0,(n.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:cd,sd=Math.log,ud=Math.LN2;function cd(n){return n>>>=0,n===0?32:31-(sd(n)/ud|0)|0}var Mr=64,Tr=4194304;function Dt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function no(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,o=n.suspendedLanes,l=n.pingedLanes,i=t&268435455;if(i!==0){var a=i&~o;a!==0?r=Dt(a):(l&=i,l!==0&&(r=Dt(l)))}else i=t&~o,i!==0?r=Dt(i):l!==0&&(r=Dt(l));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,l=e&-e,o>=l||o===16&&(l&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Bn(e),o=1<<t,r|=n[t],e&=~o;return r}function dd(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,o=n.expirationTimes,l=n.pendingLanes;0<l;){var i=31-Bn(l),a=1<<i,s=o[i];s===-1?(!(a&t)||a&r)&&(o[i]=dd(a,e)):s<=e&&(n.expiredLanes|=a),l&=~a}}function Bl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mu(){var n=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),n}function Jo(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function pr(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Bn(e),n[e]=t}function fd(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var o=31-Bn(t),l=1<<o;e[o]=0,r[o]=-1,n[o]=-1,t&=~l}}function Gi(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Bn(t),o=1<<r;o&e|n[r]&e&&(n[r]|=e),t&=~o}}var R=0;function Tu(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Eu,ki,xu,Lu,Ou,Kl=!1,Er=[],ue=null,ce=null,de=null,bt=new Map,Qt=new Map,oe=[],Ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(n,e){switch(n){case"focusin":case"focusout":ue=null;break;case"dragenter":case"dragleave":ce=null;break;case"mouseover":case"mouseout":de=null;break;case"pointerover":case"pointerout":bt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(e.pointerId)}}function Tt(n,e,t,r,o,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},e!==null&&(e=Ar(e),e!==null&&ki(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),n)}function md(n,e,t,r,o){switch(e){case"focusin":return ue=Tt(ue,n,e,t,r,o),!0;case"dragenter":return ce=Tt(ce,n,e,t,r,o),!0;case"mouseover":return de=Tt(de,n,e,t,r,o),!0;case"pointerover":var l=o.pointerId;return bt.set(l,Tt(bt.get(l)||null,n,e,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Qt.set(l,Tt(Qt.get(l)||null,n,e,t,r,o)),!0}return!1}function Gu(n){var e=Le(n.target);if(e!==null){var t=je(e);if(t!==null){if(e=t.tag,e===13){if(e=gu(t),e!==null){n.blockedOn=e,Ou(n.priority,function(){xu(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Hl(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);wl=r,t.target.dispatchEvent(r),wl=null}else return e=Ar(t),e!==null&&ki(e),n.blockedOn=t,!1;e.shift()}return!0}function wa(n,e,t){jr(n)&&t.delete(e)}function Id(){Kl=!1,ue!==null&&jr(ue)&&(ue=null),ce!==null&&jr(ce)&&(ce=null),de!==null&&jr(de)&&(de=null),bt.forEach(wa),Qt.forEach(wa)}function Et(n,e){n.blockedOn===e&&(n.blockedOn=null,Kl||(Kl=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Id)))}function Jt(n){function e(o){return Et(o,n)}if(0<Er.length){Et(Er[0],n);for(var t=1;t<Er.length;t++){var r=Er[t];r.blockedOn===n&&(r.blockedOn=null)}}for(ue!==null&&Et(ue,n),ce!==null&&Et(ce,n),de!==null&&Et(de,n),bt.forEach(e),Qt.forEach(e),t=0;t<oe.length;t++)r=oe[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<oe.length&&(t=oe[0],t.blockedOn===null);)Gu(t),t.blockedOn===null&&oe.shift()}var lt=qn.ReactCurrentBatchConfig,eo=!0;function hd(n,e,t,r){var o=R,l=lt.transition;lt.transition=null;try{R=1,wi(n,e,t,r)}finally{R=o,lt.transition=l}}function gd(n,e,t,r){var o=R,l=lt.transition;lt.transition=null;try{R=4,wi(n,e,t,r)}finally{R=o,lt.transition=l}}function wi(n,e,t,r){if(eo){var o=Hl(n,e,t,r);if(o===null)il(n,e,r,to,t),ka(n,r);else if(md(o,n,e,t,r))r.stopPropagation();else if(ka(n,r),e&4&&-1<Ad.indexOf(n)){for(;o!==null;){var l=Ar(o);if(l!==null&&Eu(l),l=Hl(n,e,t,r),l===null&&il(n,e,r,to,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else il(n,e,r,null,t)}}var to=null;function Hl(n,e,t,r){if(to=null,n=Li(r),n=Le(n),n!==null)if(e=je(n),e===null)n=null;else if(t=e.tag,t===13){if(n=gu(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return to=n,null}function ku(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ld()){case Oi:return 1;case Cu:return 4;case qr:case id:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var ie=null,Ni=null,Vr=null;function wu(){if(Vr)return Vr;var n,e=Ni,t=e.length,r,o="value"in ie?ie.value:ie.textContent,l=o.length;for(n=0;n<t&&e[n]===o[n];n++);var i=t-n;for(r=1;r<=i&&e[t-r]===o[l-r];r++);return Vr=o.slice(n,1<r?1-r:void 0)}function _r(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xr(){return!0}function Na(){return!1}function Pn(n){function e(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xr:Na,this.isPropagationStopped=Na,this}return _(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),e}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Di=Pn(It),fr=_({},It,{view:0,detail:0}),Sd=Pn(fr),Yo,Zo,xt,xo=_({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ri,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xt&&(xt&&n.type==="mousemove"?(Yo=n.screenX-xt.screenX,Zo=n.screenY-xt.screenY):Zo=Yo=0,xt=n),Yo)},movementY:function(n){return"movementY"in n?n.movementY:Zo}}),Da=Pn(xo),yd=_({},xo,{dataTransfer:0}),vd=Pn(yd),Cd=_({},fr,{relatedTarget:0}),qo=Pn(Cd),Pd=_({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),Md=Pn(Pd),Td=_({},It,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ed=Pn(Td),xd=_({},It,{data:0}),Ra=Pn(xd),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Gd[n])?!!e[n]:!1}function Ri(){return kd}var wd=_({},fr,{key:function(n){if(n.key){var e=Ld[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=_r(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Od[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ri,charCode:function(n){return n.type==="keypress"?_r(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_r(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Nd=Pn(wd),Dd=_({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ba=Pn(Dd),Rd=_({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ri}),Bd=Pn(Rd),Kd=_({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hd=Pn(Kd),Ud=_({},xo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),jd=Pn(Ud),Vd=[9,13,27,32],Bi=Qn&&"CompositionEvent"in window,Ht=null;Qn&&"documentMode"in document&&(Ht=document.documentMode);var _d=Qn&&"TextEvent"in window&&!Ht,Nu=Qn&&(!Bi||Ht&&8<Ht&&11>=Ht),Ka=" ",Ha=!1;function Du(n,e){switch(n){case"keyup":return Vd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xe=!1;function Fd(n,e){switch(n){case"compositionend":return Ru(e);case"keypress":return e.which!==32?null:(Ha=!0,Ka);case"textInput":return n=e.data,n===Ka&&Ha?null:n;default:return null}}function $d(n,e){if(Xe)return n==="compositionend"||!Bi&&Du(n,e)?(n=wu(),Vr=Ni=ie=null,Xe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nu&&e.locale!=="ko"?null:e.data;default:return null}}var Xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ua(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Xd[n.type]:e==="textarea"}function Bu(n,e,t,r){fu(r),e=ro(e,"onChange"),0<e.length&&(t=new Di("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Ut=null,Yt=null;function zd(n){Wu(n,0)}function Lo(n){var e=be(n);if(iu(e))return n}function Wd(n,e){if(n==="change")return e}var Ku=!1;if(Qn){var nl;if(Qn){var el="oninput"in document;if(!el){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),el=typeof ja.oninput=="function"}nl=el}else nl=!1;Ku=nl&&(!document.documentMode||9<document.documentMode)}function Va(){Ut&&(Ut.detachEvent("onpropertychange",Hu),Yt=Ut=null)}function Hu(n){if(n.propertyName==="value"&&Lo(Yt)){var e=[];Bu(e,Yt,n,Li(n)),hu(zd,e)}}function bd(n,e,t){n==="focusin"?(Va(),Ut=e,Yt=t,Ut.attachEvent("onpropertychange",Hu)):n==="focusout"&&Va()}function Qd(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lo(Yt)}function Jd(n,e){if(n==="click")return Lo(e)}function Yd(n,e){if(n==="input"||n==="change")return Lo(e)}function Zd(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Hn=typeof Object.is=="function"?Object.is:Zd;function Zt(n,e){if(Hn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!yl.call(e,o)||!Hn(n[o],e[o]))return!1}return!0}function _a(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fa(n,e){var t=_a(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=_a(t)}}function Uu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Uu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ju(){for(var n=window,e=Jr();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Jr(n.document)}return e}function Ki(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function qd(n){var e=ju(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Uu(t.ownerDocument.documentElement,t)){if(r!==null&&Ki(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!n.extend&&l>r&&(o=r,r=l,l=o),o=Fa(t,l);var i=Fa(t,r);o&&i&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==i.node||n.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),l>r?(n.addRange(e),n.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n2=Qn&&"documentMode"in document&&11>=document.documentMode,ze=null,Ul=null,jt=null,jl=!1;function $a(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jl||ze==null||ze!==Jr(r)||(r=ze,"selectionStart"in r&&Ki(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jt&&Zt(jt,r)||(jt=r,r=ro(Ul,"onSelect"),0<r.length&&(e=new Di("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=ze)))}function Lr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var We={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},tl={},Vu={};Qn&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Oo(n){if(tl[n])return tl[n];if(!We[n])return n;var e=We[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Vu)return tl[n]=e[t];return n}var _u=Oo("animationend"),Fu=Oo("animationiteration"),$u=Oo("animationstart"),Xu=Oo("transitionend"),zu=new Map,Xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ye(n,e){zu.set(n,e),Ue(e,[n])}for(var rl=0;rl<Xa.length;rl++){var ol=Xa[rl],e2=ol.toLowerCase(),t2=ol[0].toUpperCase()+ol.slice(1);ye(e2,"on"+t2)}ye(_u,"onAnimationEnd");ye(Fu,"onAnimationIteration");ye($u,"onAnimationStart");ye("dblclick","onDoubleClick");ye("focusin","onFocus");ye("focusout","onBlur");ye(Xu,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function za(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,ed(r,e,void 0,n),n.currentTarget=null}function Wu(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],o=r.event;r=r.listeners;n:{var l=void 0;if(e)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break n;za(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break n;za(o,a,c),l=s}}}if(Zr)throw n=Rl,Zr=!1,Rl=null,n}function K(n,e){var t=e[Xl];t===void 0&&(t=e[Xl]=new Set);var r=n+"__bubble";t.has(r)||(bu(e,n,2,!1),t.add(r))}function ll(n,e,t){var r=0;e&&(r|=4),bu(t,n,r,e)}var Or="_reactListening"+Math.random().toString(36).slice(2);function qt(n){if(!n[Or]){n[Or]=!0,eu.forEach(function(t){t!=="selectionchange"&&(r2.has(t)||ll(t,!1,n),ll(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Or]||(e[Or]=!0,ll("selectionchange",!1,e))}}function bu(n,e,t,r){switch(ku(e)){case 1:var o=hd;break;case 4:o=gd;break;default:o=wi}t=o.bind(null,e,t,n),o=void 0,!Dl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?n.addEventListener(e,t,{capture:!0,passive:o}):n.addEventListener(e,t,!0):o!==void 0?n.addEventListener(e,t,{passive:o}):n.addEventListener(e,t,!1)}function il(n,e,t,r,o){var l=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Le(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue n}a=a.parentNode}}r=r.return}hu(function(){var c=l,m=Li(t),A=[];n:{var I=zu.get(n);if(I!==void 0){var y=Di,v=n;switch(n){case"keypress":if(_r(t)===0)break n;case"keydown":case"keyup":y=Nd;break;case"focusin":v="focus",y=qo;break;case"focusout":v="blur",y=qo;break;case"beforeblur":case"afterblur":y=qo;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Bd;break;case _u:case Fu:case $u:y=Md;break;case Xu:y=Hd;break;case"scroll":y=Sd;break;case"wheel":y=jd;break;case"copy":case"cut":case"paste":y=Ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ba}var S=(e&4)!==0,P=!S&&n==="scroll",d=S?I!==null?I+"Capture":null:I;S=[];for(var p=c,f;p!==null;){f=p;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Wt(p,d),g!=null&&S.push(nr(p,g,f)))),P)break;p=p.return}0<S.length&&(I=new y(I,v,null,t,m),A.push({event:I,listeners:S}))}}if(!(e&7)){n:{if(I=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",I&&t!==wl&&(v=t.relatedTarget||t.fromElement)&&(Le(v)||v[Jn]))break n;if((y||I)&&(I=m.window===m?m:(I=m.ownerDocument)?I.defaultView||I.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=c,v=v?Le(v):null,v!==null&&(P=je(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(S=Da,g="onMouseLeave",d="onMouseEnter",p="mouse",(n==="pointerout"||n==="pointerover")&&(S=Ba,g="onPointerLeave",d="onPointerEnter",p="pointer"),P=y==null?I:be(y),f=v==null?I:be(v),I=new S(g,p+"leave",y,t,m),I.target=P,I.relatedTarget=f,g=null,Le(m)===c&&(S=new S(d,p+"enter",v,t,m),S.target=f,S.relatedTarget=P,g=S),P=g,y&&v)e:{for(S=y,d=v,p=0,f=S;f;f=Ve(f))p++;for(f=0,g=d;g;g=Ve(g))f++;for(;0<p-f;)S=Ve(S),p--;for(;0<f-p;)d=Ve(d),f--;for(;p--;){if(S===d||d!==null&&S===d.alternate)break e;S=Ve(S),d=Ve(d)}S=null}else S=null;y!==null&&Wa(A,I,y,S,!1),v!==null&&P!==null&&Wa(A,P,v,S,!0)}}n:{if(I=c?be(c):window,y=I.nodeName&&I.nodeName.toLowerCase(),y==="select"||y==="input"&&I.type==="file")var M=Wd;else if(Ua(I))if(Ku)M=Yd;else{M=Qd;var x=bd}else(y=I.nodeName)&&y.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(M=Jd);if(M&&(M=M(n,c))){Bu(A,M,t,m);break n}x&&x(n,I,c),n==="focusout"&&(x=I._wrapperState)&&x.controlled&&I.type==="number"&&xl(I,"number",I.value)}switch(x=c?be(c):window,n){case"focusin":(Ua(x)||x.contentEditable==="true")&&(ze=x,Ul=c,jt=null);break;case"focusout":jt=Ul=ze=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,$a(A,t,m);break;case"selectionchange":if(n2)break;case"keydown":case"keyup":$a(A,t,m)}var L;if(Bi)n:{switch(n){case"compositionstart":var O="onCompositionStart";break n;case"compositionend":O="onCompositionEnd";break n;case"compositionupdate":O="onCompositionUpdate";break n}O=void 0}else Xe?Du(n,t)&&(O="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(Nu&&t.locale!=="ko"&&(Xe||O!=="onCompositionStart"?O==="onCompositionEnd"&&Xe&&(L=wu()):(ie=m,Ni="value"in ie?ie.value:ie.textContent,Xe=!0)),x=ro(c,O),0<x.length&&(O=new Ra(O,n,null,t,m),A.push({event:O,listeners:x}),L?O.data=L:(L=Ru(t),L!==null&&(O.data=L)))),(L=_d?Fd(n,t):$d(n,t))&&(c=ro(c,"onBeforeInput"),0<c.length&&(m=new Ra("onBeforeInput","beforeinput",null,t,m),A.push({event:m,listeners:c}),m.data=L))}Wu(A,e)})}function nr(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ro(n,e){for(var t=e+"Capture",r=[];n!==null;){var o=n,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Wt(n,t),l!=null&&r.unshift(nr(n,l,o)),l=Wt(n,e),l!=null&&r.push(nr(n,l,o))),n=n.return}return r}function Ve(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wa(n,e,t,r,o){for(var l=e._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Wt(t,l),s!=null&&i.unshift(nr(t,s,a))):o||(s=Wt(t,l),s!=null&&i.push(nr(t,s,a)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var o2=/\r\n?/g,l2=/\u0000|\uFFFD/g;function ba(n){return(typeof n=="string"?n:""+n).replace(o2,`
`).replace(l2,"")}function Gr(n,e,t){if(e=ba(e),ba(n)!==e&&t)throw Error(C(425))}function oo(){}var Vl=null,_l=null;function Fl(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,i2=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,a2=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(n){return Qa.resolve(null).then(n).catch(s2)}:$l;function s2(n){setTimeout(function(){throw n})}function al(n,e){var t=e,r=0;do{var o=t.nextSibling;if(n.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){n.removeChild(o),Jt(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Jt(e)}function pe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ja(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ht=Math.random().toString(36).slice(2),Vn="__reactFiber$"+ht,er="__reactProps$"+ht,Jn="__reactContainer$"+ht,Xl="__reactEvents$"+ht,u2="__reactListeners$"+ht,c2="__reactHandles$"+ht;function Le(n){var e=n[Vn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Jn]||t[Vn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ja(n);n!==null;){if(t=n[Vn])return t;n=Ja(n)}return e}n=t,t=n.parentNode}return null}function Ar(n){return n=n[Vn]||n[Jn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function be(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(C(33))}function Go(n){return n[er]||null}var zl=[],Qe=-1;function ve(n){return{current:n}}function H(n){0>Qe||(n.current=zl[Qe],zl[Qe]=null,Qe--)}function B(n,e){Qe++,zl[Qe]=n.current,n.current=e}var Se={},an=ve(Se),mn=ve(!1),Ne=Se;function ut(n,e){var t=n.type.contextTypes;if(!t)return Se;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=e[l];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=o),o}function In(n){return n=n.childContextTypes,n!=null}function lo(){H(mn),H(an)}function Ya(n,e,t){if(an.current!==Se)throw Error(C(168));B(an,e),B(mn,t)}function Qu(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(C(108,bc(n)||"Unknown",o));return _({},t,r)}function io(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Se,Ne=an.current,B(an,n),B(mn,mn.current),!0}function Za(n,e,t){var r=n.stateNode;if(!r)throw Error(C(169));t?(n=Qu(n,e,Ne),r.__reactInternalMemoizedMergedChildContext=n,H(mn),H(an),B(an,n)):H(mn),B(mn,t)}var Xn=null,ko=!1,sl=!1;function Ju(n){Xn===null?Xn=[n]:Xn.push(n)}function d2(n){ko=!0,Ju(n)}function Ce(){if(!sl&&Xn!==null){sl=!0;var n=0,e=R;try{var t=Xn;for(R=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Xn=null,ko=!1}catch(o){throw Xn!==null&&(Xn=Xn.slice(n+1)),vu(Oi,Ce),o}finally{R=e,sl=!1}}return null}var Je=[],Ye=0,ao=null,so=0,Tn=[],En=0,De=null,zn=1,Wn="";function Ee(n,e){Je[Ye++]=so,Je[Ye++]=ao,ao=n,so=e}function Yu(n,e,t){Tn[En++]=zn,Tn[En++]=Wn,Tn[En++]=De,De=n;var r=zn;n=Wn;var o=32-Bn(r)-1;r&=~(1<<o),t+=1;var l=32-Bn(e)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,zn=1<<32-Bn(e)+o|t<<o|r,Wn=l+n}else zn=1<<l|t<<o|r,Wn=n}function Hi(n){n.return!==null&&(Ee(n,1),Yu(n,1,0))}function Ui(n){for(;n===ao;)ao=Je[--Ye],Je[Ye]=null,so=Je[--Ye],Je[Ye]=null;for(;n===De;)De=Tn[--En],Tn[En]=null,Wn=Tn[--En],Tn[En]=null,zn=Tn[--En],Tn[En]=null}var yn=null,Sn=null,U=!1,Rn=null;function Zu(n,e){var t=xn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function qa(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yn=n,Sn=pe(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yn=n,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=De!==null?{id:zn,overflow:Wn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=xn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yn=n,Sn=null,!0):!1;default:return!1}}function Wl(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bl(n){if(U){var e=Sn;if(e){var t=e;if(!qa(n,e)){if(Wl(n))throw Error(C(418));e=pe(t.nextSibling);var r=yn;e&&qa(n,e)?Zu(r,t):(n.flags=n.flags&-4097|2,U=!1,yn=n)}}else{if(Wl(n))throw Error(C(418));n.flags=n.flags&-4097|2,U=!1,yn=n}}}function ns(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function kr(n){if(n!==yn)return!1;if(!U)return ns(n),U=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Fl(n.type,n.memoizedProps)),e&&(e=Sn)){if(Wl(n))throw qu(),Error(C(418));for(;e;)Zu(n,e),e=pe(e.nextSibling)}if(ns(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(C(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Sn=pe(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Sn=null}}else Sn=yn?pe(n.stateNode.nextSibling):null;return!0}function qu(){for(var n=Sn;n;)n=pe(n.nextSibling)}function ct(){Sn=yn=null,U=!1}function ji(n){Rn===null?Rn=[n]:Rn.push(n)}var p2=qn.ReactCurrentBatchConfig;function Lt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,n));var o=r,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},e._stringRef=l,e)}if(typeof n!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,n))}return n}function wr(n,e){throw n=Object.prototype.toString.call(e),Error(C(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function es(n){var e=n._init;return e(n._payload)}function n0(n){function e(d,p){if(n){var f=d.deletions;f===null?(d.deletions=[p],d.flags|=16):f.push(p)}}function t(d,p){if(!n)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function r(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function o(d,p){return d=Ie(d,p),d.index=0,d.sibling=null,d}function l(d,p,f){return d.index=f,n?(f=d.alternate,f!==null?(f=f.index,f<p?(d.flags|=2,p):f):(d.flags|=2,p)):(d.flags|=1048576,p)}function i(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,p,f,g){return p===null||p.tag!==6?(p=ml(f,d.mode,g),p.return=d,p):(p=o(p,f),p.return=d,p)}function s(d,p,f,g){var M=f.type;return M===$e?m(d,p,f.props.children,g,f.key):p!==null&&(p.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===te&&es(M)===p.type)?(g=o(p,f.props),g.ref=Lt(d,p,f),g.return=d,g):(g=Qr(f.type,f.key,f.props,null,d.mode,g),g.ref=Lt(d,p,f),g.return=d,g)}function c(d,p,f,g){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=Il(f,d.mode,g),p.return=d,p):(p=o(p,f.children||[]),p.return=d,p)}function m(d,p,f,g,M){return p===null||p.tag!==7?(p=we(f,d.mode,g,M),p.return=d,p):(p=o(p,f),p.return=d,p)}function A(d,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ml(""+p,d.mode,f),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:return f=Qr(p.type,p.key,p.props,null,d.mode,f),f.ref=Lt(d,null,p),f.return=d,f;case Fe:return p=Il(p,d.mode,f),p.return=d,p;case te:var g=p._init;return A(d,g(p._payload),f)}if(Nt(p)||Pt(p))return p=we(p,d.mode,f,null),p.return=d,p;wr(d,p)}return null}function I(d,p,f,g){var M=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return M!==null?null:a(d,p,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===M?s(d,p,f,g):null;case Fe:return f.key===M?c(d,p,f,g):null;case te:return M=f._init,I(d,p,M(f._payload),g)}if(Nt(f)||Pt(f))return M!==null?null:m(d,p,f,g,null);wr(d,f)}return null}function y(d,p,f,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(p,d,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vr:return d=d.get(g.key===null?f:g.key)||null,s(p,d,g,M);case Fe:return d=d.get(g.key===null?f:g.key)||null,c(p,d,g,M);case te:var x=g._init;return y(d,p,f,x(g._payload),M)}if(Nt(g)||Pt(g))return d=d.get(f)||null,m(p,d,g,M,null);wr(p,g)}return null}function v(d,p,f,g){for(var M=null,x=null,L=p,O=p=0,$=null;L!==null&&O<f.length;O++){L.index>O?($=L,L=null):$=L.sibling;var N=I(d,L,f[O],g);if(N===null){L===null&&(L=$);break}n&&L&&N.alternate===null&&e(d,L),p=l(N,p,O),x===null?M=N:x.sibling=N,x=N,L=$}if(O===f.length)return t(d,L),U&&Ee(d,O),M;if(L===null){for(;O<f.length;O++)L=A(d,f[O],g),L!==null&&(p=l(L,p,O),x===null?M=L:x.sibling=L,x=L);return U&&Ee(d,O),M}for(L=r(d,L);O<f.length;O++)$=y(L,d,O,f[O],g),$!==null&&(n&&$.alternate!==null&&L.delete($.key===null?O:$.key),p=l($,p,O),x===null?M=$:x.sibling=$,x=$);return n&&L.forEach(function(kn){return e(d,kn)}),U&&Ee(d,O),M}function S(d,p,f,g){var M=Pt(f);if(typeof M!="function")throw Error(C(150));if(f=M.call(f),f==null)throw Error(C(151));for(var x=M=null,L=p,O=p=0,$=null,N=f.next();L!==null&&!N.done;O++,N=f.next()){L.index>O?($=L,L=null):$=L.sibling;var kn=I(d,L,N.value,g);if(kn===null){L===null&&(L=$);break}n&&L&&kn.alternate===null&&e(d,L),p=l(kn,p,O),x===null?M=kn:x.sibling=kn,x=kn,L=$}if(N.done)return t(d,L),U&&Ee(d,O),M;if(L===null){for(;!N.done;O++,N=f.next())N=A(d,N.value,g),N!==null&&(p=l(N,p,O),x===null?M=N:x.sibling=N,x=N);return U&&Ee(d,O),M}for(L=r(d,L);!N.done;O++,N=f.next())N=y(L,d,O,N.value,g),N!==null&&(n&&N.alternate!==null&&L.delete(N.key===null?O:N.key),p=l(N,p,O),x===null?M=N:x.sibling=N,x=N);return n&&L.forEach(function(vt){return e(d,vt)}),U&&Ee(d,O),M}function P(d,p,f,g){if(typeof f=="object"&&f!==null&&f.type===$e&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:n:{for(var M=f.key,x=p;x!==null;){if(x.key===M){if(M=f.type,M===$e){if(x.tag===7){t(d,x.sibling),p=o(x,f.props.children),p.return=d,d=p;break n}}else if(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===te&&es(M)===x.type){t(d,x.sibling),p=o(x,f.props),p.ref=Lt(d,x,f),p.return=d,d=p;break n}t(d,x);break}else e(d,x);x=x.sibling}f.type===$e?(p=we(f.props.children,d.mode,g,f.key),p.return=d,d=p):(g=Qr(f.type,f.key,f.props,null,d.mode,g),g.ref=Lt(d,p,f),g.return=d,d=g)}return i(d);case Fe:n:{for(x=f.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){t(d,p.sibling),p=o(p,f.children||[]),p.return=d,d=p;break n}else{t(d,p);break}else e(d,p);p=p.sibling}p=Il(f,d.mode,g),p.return=d,d=p}return i(d);case te:return x=f._init,P(d,p,x(f._payload),g)}if(Nt(f))return v(d,p,f,g);if(Pt(f))return S(d,p,f,g);wr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(t(d,p.sibling),p=o(p,f),p.return=d,d=p):(t(d,p),p=ml(f,d.mode,g),p.return=d,d=p),i(d)):t(d,p)}return P}var dt=n0(!0),e0=n0(!1),uo=ve(null),co=null,Ze=null,Vi=null;function _i(){Vi=Ze=co=null}function Fi(n){var e=uo.current;H(uo),n._currentValue=e}function Ql(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function it(n,e){co=n,Vi=Ze=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(An=!0),n.firstContext=null)}function On(n){var e=n._currentValue;if(Vi!==n)if(n={context:n,memoizedValue:e,next:null},Ze===null){if(co===null)throw Error(C(308));Ze=n,co.dependencies={lanes:0,firstContext:n}}else Ze=Ze.next=n;return e}var Oe=null;function $i(n){Oe===null?Oe=[n]:Oe.push(n)}function t0(n,e,t,r){var o=e.interleaved;return o===null?(t.next=t,$i(e)):(t.next=o.next,o.next=t),e.interleaved=t,Yn(n,r)}function Yn(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var re=!1;function Xi(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function bn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function fe(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,Yn(n,t)}return o=r.interleaved,o===null?(e.next=e,$i(r)):(e.next=o.next,o.next=e),r.interleaved=e,Yn(n,t)}function Fr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Gi(n,t)}}function ts(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=e:l=l.next=e}else o=l=e;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function po(n,e,t,r){var o=n.updateQueue;re=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var m=n.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==i&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(l!==null){var A=o.baseState;i=0,m=c=s=null,a=l;do{var I=a.lane,y=a.eventTime;if((r&I)===I){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});n:{var v=n,S=a;switch(I=e,y=t,S.tag){case 1:if(v=S.payload,typeof v=="function"){A=v.call(y,A,I);break n}A=v;break n;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,I=typeof v=="function"?v.call(y,A,I):v,I==null)break n;A=_({},A,I);break n;case 2:re=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,I=o.effects,I===null?o.effects=[a]:I.push(a))}else y={eventTime:y,lane:I,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,s=A):m=m.next=y,i|=I;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;I=a,a=I.next,I.next=null,o.lastBaseUpdate=I,o.shared.pending=null}}while(!0);if(m===null&&(s=A),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=m,e=o.shared.interleaved,e!==null){o=e;do i|=o.lane,o=o.next;while(o!==e)}else l===null&&(o.shared.lanes=0);Be|=i,n.lanes=i,n.memoizedState=A}}function rs(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var mr={},Fn=ve(mr),tr=ve(mr),rr=ve(mr);function Ge(n){if(n===mr)throw Error(C(174));return n}function zi(n,e){switch(B(rr,e),B(tr,n),B(Fn,mr),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ol(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ol(e,n)}H(Fn),B(Fn,e)}function pt(){H(Fn),H(tr),H(rr)}function o0(n){Ge(rr.current);var e=Ge(Fn.current),t=Ol(e,n.type);e!==t&&(B(tr,n),B(Fn,t))}function Wi(n){tr.current===n&&(H(Fn),H(tr))}var j=ve(0);function fo(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ul=[];function bi(){for(var n=0;n<ul.length;n++)ul[n]._workInProgressVersionPrimary=null;ul.length=0}var $r=qn.ReactCurrentDispatcher,cl=qn.ReactCurrentBatchConfig,Re=0,V=null,Q=null,Z=null,Ao=!1,Vt=!1,or=0,f2=0;function rn(){throw Error(C(321))}function Qi(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Hn(n[t],e[t]))return!1;return!0}function Ji(n,e,t,r,o,l){if(Re=l,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$r.current=n===null||n.memoizedState===null?h2:g2,n=t(r,o),Vt){l=0;do{if(Vt=!1,or=0,25<=l)throw Error(C(301));l+=1,Z=Q=null,e.updateQueue=null,$r.current=S2,n=t(r,o)}while(Vt)}if($r.current=mo,e=Q!==null&&Q.next!==null,Re=0,Z=Q=V=null,Ao=!1,e)throw Error(C(300));return n}function Yi(){var n=or!==0;return or=0,n}function jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=n:Z=Z.next=n,Z}function Gn(){if(Q===null){var n=V.alternate;n=n!==null?n.memoizedState:null}else n=Q.next;var e=Z===null?V.memoizedState:Z.next;if(e!==null)Z=e,Q=n;else{if(n===null)throw Error(C(310));Q=n,n={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Z===null?V.memoizedState=Z=n:Z=Z.next=n}return Z}function lr(n,e){return typeof e=="function"?e(n):e}function dl(n){var e=Gn(),t=e.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=n;var r=Q,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var m=c.lane;if((Re&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var A={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=A,i=r):s=s.next=A,V.lanes|=m,Be|=m}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,Hn(r,e.memoizedState)||(An=!0),e.memoizedState=r,e.baseState=i,e.baseQueue=s,t.lastRenderedState=r}if(n=t.interleaved,n!==null){o=n;do l=o.lane,V.lanes|=l,Be|=l,o=o.next;while(o!==n)}else o===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function pl(n){var e=Gn(),t=e.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=n;var r=t.dispatch,o=t.pending,l=e.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=n(l,i.action),i=i.next;while(i!==o);Hn(l,e.memoizedState)||(An=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,r]}function l0(){}function i0(n,e){var t=V,r=Gn(),o=e(),l=!Hn(r.memoizedState,o);if(l&&(r.memoizedState=o,An=!0),r=r.queue,Zi(u0.bind(null,t,r,n),[n]),r.getSnapshot!==e||l||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,ir(9,s0.bind(null,t,r,o,e),void 0,null),q===null)throw Error(C(349));Re&30||a0(t,e,o)}return o}function a0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function s0(n,e,t,r){e.value=t,e.getSnapshot=r,c0(e)&&d0(n)}function u0(n,e,t){return t(function(){c0(e)&&d0(n)})}function c0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Hn(n,t)}catch{return!0}}function d0(n){var e=Yn(n,1);e!==null&&Kn(e,n,1,-1)}function os(n){var e=jn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:n},e.queue=n,n=n.dispatch=I2.bind(null,V,n),[e.memoizedState,n]}function ir(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function p0(){return Gn().memoizedState}function Xr(n,e,t,r){var o=jn();V.flags|=n,o.memoizedState=ir(1|e,t,void 0,r===void 0?null:r)}function wo(n,e,t,r){var o=Gn();r=r===void 0?null:r;var l=void 0;if(Q!==null){var i=Q.memoizedState;if(l=i.destroy,r!==null&&Qi(r,i.deps)){o.memoizedState=ir(e,t,l,r);return}}V.flags|=n,o.memoizedState=ir(1|e,t,l,r)}function ls(n,e){return Xr(8390656,8,n,e)}function Zi(n,e){return wo(2048,8,n,e)}function f0(n,e){return wo(4,2,n,e)}function A0(n,e){return wo(4,4,n,e)}function m0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function I0(n,e,t){return t=t!=null?t.concat([n]):null,wo(4,4,m0.bind(null,e,n),t)}function qi(){}function h0(n,e){var t=Gn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Qi(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function g0(n,e){var t=Gn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Qi(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function S0(n,e,t){return Re&21?(Hn(t,e)||(t=Mu(),V.lanes|=t,Be|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,An=!0),n.memoizedState=t)}function A2(n,e){var t=R;R=t!==0&&4>t?t:4,n(!0);var r=cl.transition;cl.transition={};try{n(!1),e()}finally{R=t,cl.transition=r}}function y0(){return Gn().memoizedState}function m2(n,e,t){var r=me(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},v0(n))C0(e,t);else if(t=t0(n,e,t,r),t!==null){var o=un();Kn(t,n,r,o),P0(t,e,r)}}function I2(n,e,t){var r=me(n),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(v0(n))C0(e,o);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var i=e.lastRenderedState,a=l(i,t);if(o.hasEagerState=!0,o.eagerState=a,Hn(a,i)){var s=e.interleaved;s===null?(o.next=o,$i(e)):(o.next=s.next,s.next=o),e.interleaved=o;return}}catch{}finally{}t=t0(n,e,o,r),t!==null&&(o=un(),Kn(t,n,r,o),P0(t,e,r))}}function v0(n){var e=n.alternate;return n===V||e!==null&&e===V}function C0(n,e){Vt=Ao=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function P0(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Gi(n,t)}}var mo={readContext:On,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},h2={readContext:On,useCallback:function(n,e){return jn().memoizedState=[n,e===void 0?null:e],n},useContext:On,useEffect:ls,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Xr(4194308,4,m0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Xr(4194308,4,n,e)},useInsertionEffect:function(n,e){return Xr(4,2,n,e)},useMemo:function(n,e){var t=jn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=jn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=m2.bind(null,V,n),[r.memoizedState,n]},useRef:function(n){var e=jn();return n={current:n},e.memoizedState=n},useState:os,useDebugValue:qi,useDeferredValue:function(n){return jn().memoizedState=n},useTransition:function(){var n=os(!1),e=n[0];return n=A2.bind(null,n[1]),jn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=V,o=jn();if(U){if(t===void 0)throw Error(C(407));t=t()}else{if(t=e(),q===null)throw Error(C(349));Re&30||a0(r,e,t)}o.memoizedState=t;var l={value:t,getSnapshot:e};return o.queue=l,ls(u0.bind(null,r,l,n),[n]),r.flags|=2048,ir(9,s0.bind(null,r,l,t,e),void 0,null),t},useId:function(){var n=jn(),e=q.identifierPrefix;if(U){var t=Wn,r=zn;t=(r&~(1<<32-Bn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=or++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=f2++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},g2={readContext:On,useCallback:h0,useContext:On,useEffect:Zi,useImperativeHandle:I0,useInsertionEffect:f0,useLayoutEffect:A0,useMemo:g0,useReducer:dl,useRef:p0,useState:function(){return dl(lr)},useDebugValue:qi,useDeferredValue:function(n){var e=Gn();return S0(e,Q.memoizedState,n)},useTransition:function(){var n=dl(lr)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:l0,useSyncExternalStore:i0,useId:y0,unstable_isNewReconciler:!1},S2={readContext:On,useCallback:h0,useContext:On,useEffect:Zi,useImperativeHandle:I0,useInsertionEffect:f0,useLayoutEffect:A0,useMemo:g0,useReducer:pl,useRef:p0,useState:function(){return pl(lr)},useDebugValue:qi,useDeferredValue:function(n){var e=Gn();return Q===null?e.memoizedState=n:S0(e,Q.memoizedState,n)},useTransition:function(){var n=pl(lr)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:l0,useSyncExternalStore:i0,useId:y0,unstable_isNewReconciler:!1};function Nn(n,e){if(n&&n.defaultProps){e=_({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Jl(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:_({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var No={isMounted:function(n){return(n=n._reactInternals)?je(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=un(),o=me(n),l=bn(r,o);l.payload=e,t!=null&&(l.callback=t),e=fe(n,l,o),e!==null&&(Kn(e,n,o,r),Fr(e,n,o))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=un(),o=me(n),l=bn(r,o);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=fe(n,l,o),e!==null&&(Kn(e,n,o,r),Fr(e,n,o))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=un(),r=me(n),o=bn(t,r);o.tag=2,e!=null&&(o.callback=e),e=fe(n,o,r),e!==null&&(Kn(e,n,r,t),Fr(e,n,r))}};function is(n,e,t,r,o,l,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,l,i):e.prototype&&e.prototype.isPureReactComponent?!Zt(t,r)||!Zt(o,l):!0}function M0(n,e,t){var r=!1,o=Se,l=e.contextType;return typeof l=="object"&&l!==null?l=On(l):(o=In(e)?Ne:an.current,r=e.contextTypes,l=(r=r!=null)?ut(n,o):Se),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=No,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=l),e}function as(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&No.enqueueReplaceState(e,e.state,null)}function Yl(n,e,t,r){var o=n.stateNode;o.props=t,o.state=n.memoizedState,o.refs={},Xi(n);var l=e.contextType;typeof l=="object"&&l!==null?o.context=On(l):(l=In(e)?Ne:an.current,o.context=ut(n,l)),o.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(Jl(n,e,l,t),o.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&No.enqueueReplaceState(o,o.state,null),po(n,t,o,r),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function ft(n,e){try{var t="",r=e;do t+=Wc(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:o,digest:null}}function fl(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Zl(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var y2=typeof WeakMap=="function"?WeakMap:Map;function T0(n,e,t){t=bn(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){ho||(ho=!0,si=r),Zl(n,e)},t}function E0(n,e,t){t=bn(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;t.payload=function(){return r(o)},t.callback=function(){Zl(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Zl(n,e),typeof r!="function"&&(Ae===null?Ae=new Set([this]):Ae.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),t}function ss(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new y2;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(t)||(o.add(t),n=D2.bind(null,n,e,t),e.then(n,n))}function us(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function cs(n,e,t,r,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=bn(-1,1),e.tag=2,fe(t,e,1))),t.lanes|=1),n)}var v2=qn.ReactCurrentOwner,An=!1;function sn(n,e,t,r){e.child=n===null?e0(e,null,t,r):dt(e,n.child,t,r)}function ds(n,e,t,r,o){t=t.render;var l=e.ref;return it(e,o),r=Ji(n,e,t,r,l,o),t=Yi(),n!==null&&!An?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,Zn(n,e,o)):(U&&t&&Hi(e),e.flags|=1,sn(n,e,r,o),e.child)}function ps(n,e,t,r,o){if(n===null){var l=t.type;return typeof l=="function"&&!aa(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,x0(n,e,l,r,o)):(n=Qr(t.type,null,r,e,e.mode,o),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&o)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(i,r)&&n.ref===e.ref)return Zn(n,e,o)}return e.flags|=1,n=Ie(l,r),n.ref=e.ref,n.return=e,e.child=n}function x0(n,e,t,r,o){if(n!==null){var l=n.memoizedProps;if(Zt(l,r)&&n.ref===e.ref)if(An=!1,e.pendingProps=r=l,(n.lanes&o)!==0)n.flags&131072&&(An=!0);else return e.lanes=n.lanes,Zn(n,e,o)}return ql(n,e,t,r,o)}function L0(n,e,t){var r=e.pendingProps,o=r.children,l=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(nt,gn),gn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,B(nt,gn),gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,B(nt,gn),gn|=r}else l!==null?(r=l.baseLanes|t,e.memoizedState=null):r=t,B(nt,gn),gn|=r;return sn(n,e,o,t),e.child}function O0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ql(n,e,t,r,o){var l=In(t)?Ne:an.current;return l=ut(e,l),it(e,o),t=Ji(n,e,t,r,l,o),r=Yi(),n!==null&&!An?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,Zn(n,e,o)):(U&&r&&Hi(e),e.flags|=1,sn(n,e,t,o),e.child)}function fs(n,e,t,r,o){if(In(t)){var l=!0;io(e)}else l=!1;if(it(e,o),e.stateNode===null)zr(n,e),M0(e,t,r),Yl(e,t,r,o),r=!0;else if(n===null){var i=e.stateNode,a=e.memoizedProps;i.props=a;var s=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=On(c):(c=In(t)?Ne:an.current,c=ut(e,c));var m=t.getDerivedStateFromProps,A=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";A||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&as(e,i,r,c),re=!1;var I=e.memoizedState;i.state=I,po(e,r,i,o),s=e.memoizedState,a!==r||I!==s||mn.current||re?(typeof m=="function"&&(Jl(e,t,m,r),s=e.memoizedState),(a=re||is(e,t,a,r,I,s,c))?(A||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{i=e.stateNode,r0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),i.props=c,A=e.pendingProps,I=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=On(s):(s=In(t)?Ne:an.current,s=ut(e,s));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==A||I!==s)&&as(e,i,r,s),re=!1,I=e.memoizedState,i.state=I,po(e,r,i,o);var v=e.memoizedState;a!==A||I!==v||mn.current||re?(typeof y=="function"&&(Jl(e,t,y,r),v=e.memoizedState),(c=re||is(e,t,c,r,I,v,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===n.memoizedProps&&I===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&I===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),i.props=r,i.state=v,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===n.memoizedProps&&I===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&I===n.memoizedState||(e.flags|=1024),r=!1)}return ni(n,e,t,r,l,o)}function ni(n,e,t,r,o,l){O0(n,e);var i=(e.flags&128)!==0;if(!r&&!i)return o&&Za(e,t,!1),Zn(n,e,l);r=e.stateNode,v2.current=e;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&i?(e.child=dt(e,n.child,null,l),e.child=dt(e,null,a,l)):sn(n,e,a,l),e.memoizedState=r.state,o&&Za(e,t,!0),e.child}function G0(n){var e=n.stateNode;e.pendingContext?Ya(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ya(n,e.context,!1),zi(n,e.containerInfo)}function As(n,e,t,r,o){return ct(),ji(o),e.flags|=256,sn(n,e,t,r),e.child}var ei={dehydrated:null,treeContext:null,retryLane:0};function ti(n){return{baseLanes:n,cachePool:null,transitions:null}}function k0(n,e,t){var r=e.pendingProps,o=j.current,l=!1,i=(e.flags&128)!==0,a;if((a=i)||(a=n!==null&&n.memoizedState===null?!1:(o&2)!==0),a?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),B(j,o&1),n===null)return bl(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=r.children,n=r.fallback,l?(r=e.mode,l=e.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Bo(i,r,0,null),n=we(n,r,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=ti(t),e.memoizedState=ei,n):na(e,i));if(o=n.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return C2(n,e,i,r,a,o,t);if(l){l=r.fallback,i=e.mode,o=n.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=Ie(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Ie(a,l):(l=we(l,i,t,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,r=l,l=e.child,i=n.child.memoizedState,i=i===null?ti(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=n.childLanes&~t,e.memoizedState=ei,r}return l=n.child,n=l.sibling,r=Ie(l,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function na(n,e){return e=Bo({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Nr(n,e,t,r){return r!==null&&ji(r),dt(e,n.child,null,t),n=na(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function C2(n,e,t,r,o,l,i){if(t)return e.flags&256?(e.flags&=-257,r=fl(Error(C(422))),Nr(n,e,i,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=r.fallback,o=e.mode,r=Bo({mode:"visible",children:r.children},o,0,null),l=we(l,o,i,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,e.mode&1&&dt(e,n.child,null,i),e.child.memoizedState=ti(i),e.memoizedState=ei,l);if(!(e.mode&1))return Nr(n,e,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(C(419)),r=fl(l,r,void 0),Nr(n,e,i,r)}if(a=(i&n.childLanes)!==0,An||a){if(r=q,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Yn(n,o),Kn(r,n,o,-1))}return ia(),r=fl(Error(C(421))),Nr(n,e,i,r)}return o.data==="$?"?(e.flags|=128,e.child=n.child,e=R2.bind(null,n),o._reactRetry=e,null):(n=l.treeContext,Sn=pe(o.nextSibling),yn=e,U=!0,Rn=null,n!==null&&(Tn[En++]=zn,Tn[En++]=Wn,Tn[En++]=De,zn=n.id,Wn=n.overflow,De=e),e=na(e,r.children),e.flags|=4096,e)}function ms(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Ql(n.return,e,t)}function Al(n,e,t,r,o){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function w0(n,e,t){var r=e.pendingProps,o=r.revealOrder,l=r.tail;if(sn(n,e,r.children,t),r=j.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ms(n,t,e);else if(n.tag===19)ms(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(B(j,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(t=e.child,o=null;t!==null;)n=t.alternate,n!==null&&fo(n)===null&&(o=t),t=t.sibling;t=o,t===null?(o=e.child,e.child=null):(o=t.sibling,t.sibling=null),Al(e,!1,o,t,l);break;case"backwards":for(t=null,o=e.child,e.child=null;o!==null;){if(n=o.alternate,n!==null&&fo(n)===null){e.child=o;break}n=o.sibling,o.sibling=t,t=o,o=n}Al(e,!0,t,null,l);break;case"together":Al(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Be|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(C(153));if(e.child!==null){for(n=e.child,t=Ie(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ie(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function P2(n,e,t){switch(e.tag){case 3:G0(e),ct();break;case 5:o0(e);break;case 1:In(e.type)&&io(e);break;case 4:zi(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;B(uo,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(j,j.current&1),e.flags|=128,null):t&e.child.childLanes?k0(n,e,t):(B(j,j.current&1),n=Zn(n,e,t),n!==null?n.sibling:null);B(j,j.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return w0(n,e,t);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(j,j.current),r)break;return null;case 22:case 23:return e.lanes=0,L0(n,e,t)}return Zn(n,e,t)}var N0,ri,D0,R0;N0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ri=function(){};D0=function(n,e,t,r){var o=n.memoizedProps;if(o!==r){n=e.stateNode,Ge(Fn.current);var l=null;switch(t){case"input":o=Tl(n,o),r=Tl(n,r),l=[];break;case"select":o=_({},o,{value:void 0}),r=_({},r,{value:void 0}),l=[];break;case"textarea":o=Ll(n,o),r=Ll(n,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=oo)}Gl(t,r);var i;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xt.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(l||(l=[]),l.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&K("scroll",n),l||a===s||(l=[])):(l=l||[]).push(c,s))}t&&(l=l||[]).push("style",t);var c=l;(e.updateQueue=c)&&(e.flags|=4)}};R0=function(n,e,t,r){t!==r&&(e.flags|=4)};function Ot(n,e){if(!U)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function on(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function M2(n,e,t){var r=e.pendingProps;switch(Ui(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return In(e.type)&&lo(),on(e),null;case 3:return r=e.stateNode,pt(),H(mn),H(an),bi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(kr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(di(Rn),Rn=null))),ri(n,e),on(e),null;case 5:Wi(e);var o=Ge(rr.current);if(t=e.type,n!==null&&e.stateNode!=null)D0(n,e,t,r,o),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return on(e),null}if(n=Ge(Fn.current),kr(e)){r=e.stateNode,t=e.type;var l=e.memoizedProps;switch(r[Vn]=e,r[er]=l,n=(e.mode&1)!==0,t){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<Rt.length;o++)K(Rt[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ma(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":Ea(r,l),K("invalid",r)}Gl(t,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,a,n),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,a,n),o=["children",""+a]):Xt.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&K("scroll",r)}switch(t){case"input":Cr(r),Ta(r,l,!0);break;case"textarea":Cr(r),xa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=oo)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=uu(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=i.createElement(t,{is:r.is}):(n=i.createElement(t),t==="select"&&(i=n,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):n=i.createElementNS(n,t),n[Vn]=e,n[er]=r,N0(n,e,!1,!1),e.stateNode=n;n:{switch(i=kl(t,r),t){case"dialog":K("cancel",n),K("close",n),o=r;break;case"iframe":case"object":case"embed":K("load",n),o=r;break;case"video":case"audio":for(o=0;o<Rt.length;o++)K(Rt[o],n);o=r;break;case"source":K("error",n),o=r;break;case"img":case"image":case"link":K("error",n),K("load",n),o=r;break;case"details":K("toggle",n),o=r;break;case"input":Ma(n,r),o=Tl(n,r),K("invalid",n);break;case"option":o=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},o=_({},r,{value:void 0}),K("invalid",n);break;case"textarea":Ea(n,r),o=Ll(n,r),K("invalid",n);break;default:o=r}Gl(t,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?pu(n,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cu(n,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&zt(n,s):typeof s=="number"&&zt(n,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Xt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&K("scroll",n):s!=null&&Mi(n,l,s,i))}switch(t){case"input":Cr(n),Ta(n,r,!1);break;case"textarea":Cr(n),xa(n);break;case"option":r.value!=null&&n.setAttribute("value",""+ge(r.value));break;case"select":n.multiple=!!r.multiple,l=r.value,l!=null?tt(n,!!r.multiple,l,!1):r.defaultValue!=null&&tt(n,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=oo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(n&&e.stateNode!=null)R0(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(t=Ge(rr.current),Ge(Fn.current),kr(e)){if(r=e.stateNode,t=e.memoizedProps,r[Vn]=e,(l=r.nodeValue!==t)&&(n=yn,n!==null))switch(n.tag){case 3:Gr(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Vn]=e,e.stateNode=r}return on(e),null;case 13:if(H(j),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(U&&Sn!==null&&e.mode&1&&!(e.flags&128))qu(),ct(),e.flags|=98560,l=!1;else if(l=kr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!l)throw Error(C(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Vn]=e}else ct(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),l=!1}else Rn!==null&&(di(Rn),Rn=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||j.current&1?J===0&&(J=3):ia())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return pt(),ri(n,e),n===null&&qt(e.stateNode.containerInfo),on(e),null;case 10:return Fi(e.type._context),on(e),null;case 17:return In(e.type)&&lo(),on(e),null;case 19:if(H(j),l=e.memoizedState,l===null)return on(e),null;if(r=(e.flags&128)!==0,i=l.rendering,i===null)if(r)Ot(l,!1);else{if(J!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(i=fo(n),i!==null){for(e.flags|=128,Ot(l,!1),r=i.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)l=t,n=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,n=i.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return B(j,j.current&1|2),e.child}n=n.sibling}l.tail!==null&&z()>At&&(e.flags|=128,r=!0,Ot(l,!1),e.lanes=4194304)}else{if(!r)if(n=fo(i),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ot(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!U)return on(e),null}else 2*z()-l.renderingStartTime>At&&t!==1073741824&&(e.flags|=128,r=!0,Ot(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=z(),e.sibling=null,t=j.current,B(j,r?t&1|2:t&1),e):(on(e),null);case 22:case 23:return la(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function T2(n,e){switch(Ui(e),e.tag){case 1:return In(e.type)&&lo(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return pt(),H(mn),H(an),bi(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Wi(e),null;case 13:if(H(j),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ct()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return H(j),null;case 4:return pt(),null;case 10:return Fi(e.type._context),null;case 22:case 23:return la(),null;case 24:return null;default:return null}}var Dr=!1,ln=!1,E2=typeof WeakSet=="function"?WeakSet:Set,T=null;function qe(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){F(n,e,r)}else t.current=null}function oi(n,e,t){try{t()}catch(r){F(n,e,r)}}var Is=!1;function x2(n,e){if(Vl=eo,n=ju(),Ki(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var i=0,a=-1,s=-1,c=0,m=0,A=n,I=null;e:for(;;){for(var y;A!==t||o!==0&&A.nodeType!==3||(a=i+o),A!==l||r!==0&&A.nodeType!==3||(s=i+r),A.nodeType===3&&(i+=A.nodeValue.length),(y=A.firstChild)!==null;)I=A,A=y;for(;;){if(A===n)break e;if(I===t&&++c===o&&(a=i),I===l&&++m===r&&(s=i),(y=A.nextSibling)!==null)break;A=I,I=A.parentNode}A=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(_l={focusedElem:n,selectionRange:t},eo=!1,T=e;T!==null;)if(e=T,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,T=n;else for(;T!==null;){e=T;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,P=v.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Nn(e.type,S),P);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(g){F(e,e.return,g)}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}return v=Is,Is=!1,v}function _t(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var l=o.destroy;o.destroy=void 0,l!==void 0&&oi(e,t,l)}o=o.next}while(o!==r)}}function Do(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function li(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function B0(n){var e=n.alternate;e!==null&&(n.alternate=null,B0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Vn],delete e[er],delete e[Xl],delete e[u2],delete e[c2])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function K0(n){return n.tag===5||n.tag===3||n.tag===4}function hs(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||K0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ii(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=oo));else if(r!==4&&(n=n.child,n!==null))for(ii(n,e,t),n=n.sibling;n!==null;)ii(n,e,t),n=n.sibling}function ai(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(ai(n,e,t),n=n.sibling;n!==null;)ai(n,e,t),n=n.sibling}var nn=null,Dn=!1;function ee(n,e,t){for(t=t.child;t!==null;)H0(n,e,t),t=t.sibling}function H0(n,e,t){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Eo,t)}catch{}switch(t.tag){case 5:ln||qe(t,e);case 6:var r=nn,o=Dn;nn=null,ee(n,e,t),nn=r,Dn=o,nn!==null&&(Dn?(n=nn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):nn.removeChild(t.stateNode));break;case 18:nn!==null&&(Dn?(n=nn,t=t.stateNode,n.nodeType===8?al(n.parentNode,t):n.nodeType===1&&al(n,t),Jt(n)):al(nn,t.stateNode));break;case 4:r=nn,o=Dn,nn=t.stateNode.containerInfo,Dn=!0,ee(n,e,t),nn=r,Dn=o;break;case 0:case 11:case 14:case 15:if(!ln&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&oi(t,e,i),o=o.next}while(o!==r)}ee(n,e,t);break;case 1:if(!ln&&(qe(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){F(t,e,a)}ee(n,e,t);break;case 21:ee(n,e,t);break;case 22:t.mode&1?(ln=(r=ln)||t.memoizedState!==null,ee(n,e,t),ln=r):ee(n,e,t);break;default:ee(n,e,t)}}function gs(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new E2),e.forEach(function(r){var o=B2.bind(null,n,r);t.has(r)||(t.add(r),r.then(o,o))})}}function wn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=n,i=e,a=i;n:for(;a!==null;){switch(a.tag){case 5:nn=a.stateNode,Dn=!1;break n;case 3:nn=a.stateNode.containerInfo,Dn=!0;break n;case 4:nn=a.stateNode.containerInfo,Dn=!0;break n}a=a.return}if(nn===null)throw Error(C(160));H0(l,i,o),nn=null,Dn=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){F(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,n),e=e.sibling}function U0(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wn(e,n),Un(n),r&4){try{_t(3,n,n.return),Do(3,n)}catch(S){F(n,n.return,S)}try{_t(5,n,n.return)}catch(S){F(n,n.return,S)}}break;case 1:wn(e,n),Un(n),r&512&&t!==null&&qe(t,t.return);break;case 5:if(wn(e,n),Un(n),r&512&&t!==null&&qe(t,t.return),n.flags&32){var o=n.stateNode;try{zt(o,"")}catch(S){F(n,n.return,S)}}if(r&4&&(o=n.stateNode,o!=null)){var l=n.memoizedProps,i=t!==null?t.memoizedProps:l,a=n.type,s=n.updateQueue;if(n.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&au(o,l),kl(a,i);var c=kl(a,l);for(i=0;i<s.length;i+=2){var m=s[i],A=s[i+1];m==="style"?pu(o,A):m==="dangerouslySetInnerHTML"?cu(o,A):m==="children"?zt(o,A):Mi(o,m,A,c)}switch(a){case"input":El(o,l);break;case"textarea":su(o,l);break;case"select":var I=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?tt(o,!!l.multiple,y,!1):I!==!!l.multiple&&(l.defaultValue!=null?tt(o,!!l.multiple,l.defaultValue,!0):tt(o,!!l.multiple,l.multiple?[]:"",!1))}o[er]=l}catch(S){F(n,n.return,S)}}break;case 6:if(wn(e,n),Un(n),r&4){if(n.stateNode===null)throw Error(C(162));o=n.stateNode,l=n.memoizedProps;try{o.nodeValue=l}catch(S){F(n,n.return,S)}}break;case 3:if(wn(e,n),Un(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(e.containerInfo)}catch(S){F(n,n.return,S)}break;case 4:wn(e,n),Un(n);break;case 13:wn(e,n),Un(n),o=n.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ra=z())),r&4&&gs(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(ln=(c=ln)||m,wn(e,n),ln=c):wn(e,n),Un(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!m&&n.mode&1)for(T=n,m=n.child;m!==null;){for(A=T=m;T!==null;){switch(I=T,y=I.child,I.tag){case 0:case 11:case 14:case 15:_t(4,I,I.return);break;case 1:qe(I,I.return);var v=I.stateNode;if(typeof v.componentWillUnmount=="function"){r=I,t=I.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){F(r,t,S)}}break;case 5:qe(I,I.return);break;case 22:if(I.memoizedState!==null){ys(A);continue}}y!==null?(y.return=I,T=y):ys(A)}m=m.sibling}n:for(m=null,A=n;;){if(A.tag===5){if(m===null){m=A;try{o=A.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=A.stateNode,s=A.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=du("display",i))}catch(S){F(n,n.return,S)}}}else if(A.tag===6){if(m===null)try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(S){F(n,n.return,S)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===n)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===n)break n;for(;A.sibling===null;){if(A.return===null||A.return===n)break n;m===A&&(m=null),A=A.return}m===A&&(m=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:wn(e,n),Un(n),r&4&&gs(n);break;case 21:break;default:wn(e,n),Un(n)}}function Un(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(K0(t)){var r=t;break n}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(zt(o,""),r.flags&=-33);var l=hs(n);ai(n,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=hs(n);ii(n,a,i);break;default:throw Error(C(161))}}catch(s){F(n,n.return,s)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function L2(n,e,t){T=n,j0(n)}function j0(n,e,t){for(var r=(n.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Dr;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ln;a=Dr;var c=ln;if(Dr=i,(ln=s)&&!c)for(T=o;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?vs(o):s!==null?(s.return=i,T=s):vs(o);for(;l!==null;)T=l,j0(l),l=l.sibling;T=o,Dr=a,ln=c}Ss(n)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):Ss(n)}}function Ss(n){for(;T!==null;){var e=T;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||Do(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ln)if(t===null)r.componentDidMount();else{var o=e.elementType===e.type?t.memoizedProps:Nn(e.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&rs(e,l,r);break;case 3:var i=e.updateQueue;if(i!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}rs(e,i,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var A=m.dehydrated;A!==null&&Jt(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ln||e.flags&512&&li(e)}catch(I){F(e,e.return,I)}}if(e===n){T=null;break}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}}function ys(n){for(;T!==null;){var e=T;if(e===n){T=null;break}var t=e.sibling;if(t!==null){t.return=e.return,T=t;break}T=e.return}}function vs(n){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Do(4,e)}catch(s){F(e,t,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(s){F(e,o,s)}}var l=e.return;try{li(e)}catch(s){F(e,l,s)}break;case 5:var i=e.return;try{li(e)}catch(s){F(e,i,s)}}}catch(s){F(e,e.return,s)}if(e===n){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var O2=Math.ceil,Io=qn.ReactCurrentDispatcher,ea=qn.ReactCurrentOwner,Ln=qn.ReactCurrentBatchConfig,D=0,q=null,b=null,en=0,gn=0,nt=ve(0),J=0,ar=null,Be=0,Ro=0,ta=0,Ft=null,pn=null,ra=0,At=1/0,$n=null,ho=!1,si=null,Ae=null,Rr=!1,ae=null,go=0,$t=0,ui=null,Wr=-1,br=0;function un(){return D&6?z():Wr!==-1?Wr:Wr=z()}function me(n){return n.mode&1?D&2&&en!==0?en&-en:p2.transition!==null?(br===0&&(br=Mu()),br):(n=R,n!==0||(n=window.event,n=n===void 0?16:ku(n.type)),n):1}function Kn(n,e,t,r){if(50<$t)throw $t=0,ui=null,Error(C(185));pr(n,t,r),(!(D&2)||n!==q)&&(n===q&&(!(D&2)&&(Ro|=t),J===4&&le(n,en)),hn(n,r),t===1&&D===0&&!(e.mode&1)&&(At=z()+500,ko&&Ce()))}function hn(n,e){var t=n.callbackNode;pd(n,e);var r=no(n,n===q?en:0);if(r===0)t!==null&&Ga(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Ga(t),e===1)n.tag===0?d2(Cs.bind(null,n)):Ju(Cs.bind(null,n)),a2(function(){!(D&6)&&Ce()}),t=null;else{switch(Tu(r)){case 1:t=Oi;break;case 4:t=Cu;break;case 16:t=qr;break;case 536870912:t=Pu;break;default:t=qr}t=b0(t,V0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function V0(n,e){if(Wr=-1,br=0,D&6)throw Error(C(327));var t=n.callbackNode;if(at()&&n.callbackNode!==t)return null;var r=no(n,n===q?en:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=So(n,r);else{e=r;var o=D;D|=2;var l=F0();(q!==n||en!==e)&&($n=null,At=z()+500,ke(n,e));do try{w2();break}catch(a){_0(n,a)}while(!0);_i(),Io.current=l,D=o,b!==null?e=0:(q=null,en=0,e=J)}if(e!==0){if(e===2&&(o=Bl(n),o!==0&&(r=o,e=ci(n,o))),e===1)throw t=ar,ke(n,0),le(n,r),hn(n,z()),t;if(e===6)le(n,r);else{if(o=n.current.alternate,!(r&30)&&!G2(o)&&(e=So(n,r),e===2&&(l=Bl(n),l!==0&&(r=l,e=ci(n,l))),e===1))throw t=ar,ke(n,0),le(n,r),hn(n,z()),t;switch(n.finishedWork=o,n.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:xe(n,pn,$n);break;case 3:if(le(n,r),(r&130023424)===r&&(e=ra+500-z(),10<e)){if(no(n,0)!==0)break;if(o=n.suspendedLanes,(o&r)!==r){un(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=$l(xe.bind(null,n,pn,$n),e);break}xe(n,pn,$n);break;case 4:if(le(n,r),(r&4194240)===r)break;for(e=n.eventTimes,o=-1;0<r;){var i=31-Bn(r);l=1<<i,i=e[i],i>o&&(o=i),r&=~l}if(r=o,r=z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*O2(r/1960))-r,10<r){n.timeoutHandle=$l(xe.bind(null,n,pn,$n),r);break}xe(n,pn,$n);break;case 5:xe(n,pn,$n);break;default:throw Error(C(329))}}}return hn(n,z()),n.callbackNode===t?V0.bind(null,n):null}function ci(n,e){var t=Ft;return n.current.memoizedState.isDehydrated&&(ke(n,e).flags|=256),n=So(n,e),n!==2&&(e=pn,pn=t,e!==null&&di(e)),n}function di(n){pn===null?pn=n:pn.push.apply(pn,n)}function G2(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!Hn(l(),o))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function le(n,e){for(e&=~ta,e&=~Ro,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Bn(e),r=1<<t;n[t]=-1,e&=~r}}function Cs(n){if(D&6)throw Error(C(327));at();var e=no(n,0);if(!(e&1))return hn(n,z()),null;var t=So(n,e);if(n.tag!==0&&t===2){var r=Bl(n);r!==0&&(e=r,t=ci(n,r))}if(t===1)throw t=ar,ke(n,0),le(n,e),hn(n,z()),t;if(t===6)throw Error(C(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,xe(n,pn,$n),hn(n,z()),null}function oa(n,e){var t=D;D|=1;try{return n(e)}finally{D=t,D===0&&(At=z()+500,ko&&Ce())}}function Ke(n){ae!==null&&ae.tag===0&&!(D&6)&&at();var e=D;D|=1;var t=Ln.transition,r=R;try{if(Ln.transition=null,R=1,n)return n()}finally{R=r,Ln.transition=t,D=e,!(D&6)&&Ce()}}function la(){gn=nt.current,H(nt)}function ke(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,i2(t)),b!==null)for(t=b.return;t!==null;){var r=t;switch(Ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:pt(),H(mn),H(an),bi();break;case 5:Wi(r);break;case 4:pt();break;case 13:H(j);break;case 19:H(j);break;case 10:Fi(r.type._context);break;case 22:case 23:la()}t=t.return}if(q=n,b=n=Ie(n.current,null),en=gn=e,J=0,ar=null,ta=Ro=Be=0,pn=Ft=null,Oe!==null){for(e=0;e<Oe.length;e++)if(t=Oe[e],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}t.pending=r}Oe=null}return n}function _0(n,e){do{var t=b;try{if(_i(),$r.current=mo,Ao){for(var r=V.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ao=!1}if(Re=0,Z=Q=V=null,Vt=!1,or=0,ea.current=null,t===null||t.return===null){J=1,ar=e,b=null;break}n:{var l=n,i=t.return,a=t,s=e;if(e=en,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,A=m.tag;if(!(m.mode&1)&&(A===0||A===11||A===15)){var I=m.alternate;I?(m.updateQueue=I.updateQueue,m.memoizedState=I.memoizedState,m.lanes=I.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=us(i);if(y!==null){y.flags&=-257,cs(y,i,a,l,e),y.mode&1&&ss(l,c,e),e=y,s=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(s),e.updateQueue=S}else v.add(s);break n}else{if(!(e&1)){ss(l,c,e),ia();break n}s=Error(C(426))}}else if(U&&a.mode&1){var P=us(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),cs(P,i,a,l,e),ji(ft(s,a));break n}}l=s=ft(s,a),J!==4&&(J=2),Ft===null?Ft=[l]:Ft.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var d=T0(l,s,e);ts(l,d);break n;case 1:a=s;var p=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ae===null||!Ae.has(f)))){l.flags|=65536,e&=-e,l.lanes|=e;var g=E0(l,a,e);ts(l,g);break n}}l=l.return}while(l!==null)}X0(t)}catch(M){e=M,b===t&&t!==null&&(b=t=t.return);continue}break}while(!0)}function F0(){var n=Io.current;return Io.current=mo,n===null?mo:n}function ia(){(J===0||J===3||J===2)&&(J=4),q===null||!(Be&268435455)&&!(Ro&268435455)||le(q,en)}function So(n,e){var t=D;D|=2;var r=F0();(q!==n||en!==e)&&($n=null,ke(n,e));do try{k2();break}catch(o){_0(n,o)}while(!0);if(_i(),D=t,Io.current=r,b!==null)throw Error(C(261));return q=null,en=0,J}function k2(){for(;b!==null;)$0(b)}function w2(){for(;b!==null&&!rd();)$0(b)}function $0(n){var e=W0(n.alternate,n,gn);n.memoizedProps=n.pendingProps,e===null?X0(n):b=e,ea.current=null}function X0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=T2(t,e),t!==null){t.flags&=32767,b=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{J=6,b=null;return}}else if(t=M2(t,e,gn),t!==null){b=t;return}if(e=e.sibling,e!==null){b=e;return}b=e=n}while(e!==null);J===0&&(J=5)}function xe(n,e,t){var r=R,o=Ln.transition;try{Ln.transition=null,R=1,N2(n,e,t,r)}finally{Ln.transition=o,R=r}return null}function N2(n,e,t,r){do at();while(ae!==null);if(D&6)throw Error(C(327));t=n.finishedWork;var o=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(C(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(fd(n,l),n===q&&(b=q=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rr||(Rr=!0,b0(qr,function(){return at(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ln.transition,Ln.transition=null;var i=R;R=1;var a=D;D|=4,ea.current=null,x2(n,t),U0(t,n),qd(_l),eo=!!Vl,_l=Vl=null,n.current=t,L2(t),od(),D=a,R=i,Ln.transition=l}else n.current=t;if(Rr&&(Rr=!1,ae=n,go=o),l=n.pendingLanes,l===0&&(Ae=null),ad(t.stateNode),hn(n,z()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)o=e[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ho)throw ho=!1,n=si,si=null,n;return go&1&&n.tag!==0&&at(),l=n.pendingLanes,l&1?n===ui?$t++:($t=0,ui=n):$t=0,Ce(),null}function at(){if(ae!==null){var n=Tu(go),e=Ln.transition,t=R;try{if(Ln.transition=null,R=16>n?16:n,ae===null)var r=!1;else{if(n=ae,ae=null,go=0,D&6)throw Error(C(331));var o=D;for(D|=4,T=n.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(T=c;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:_t(8,m,l)}var A=m.child;if(A!==null)A.return=m,T=A;else for(;T!==null;){m=T;var I=m.sibling,y=m.return;if(B0(m),m===c){T=null;break}if(I!==null){I.return=y,T=I;break}T=y}}}var v=l.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}T=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else n:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:_t(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,T=d;break n}T=l.return}}var p=n.current;for(T=p;T!==null;){i=T;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,T=f;else n:for(i=p;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Do(9,a)}}catch(M){F(a,a.return,M)}if(a===i){T=null;break n}var g=a.sibling;if(g!==null){g.return=a.return,T=g;break n}T=a.return}}if(D=o,Ce(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Eo,n)}catch{}r=!0}return r}finally{R=t,Ln.transition=e}}return!1}function Ps(n,e,t){e=ft(t,e),e=T0(n,e,1),n=fe(n,e,1),e=un(),n!==null&&(pr(n,1,e),hn(n,e))}function F(n,e,t){if(n.tag===3)Ps(n,n,t);else for(;e!==null;){if(e.tag===3){Ps(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ae===null||!Ae.has(r))){n=ft(t,n),n=E0(e,n,1),e=fe(e,n,1),n=un(),e!==null&&(pr(e,1,n),hn(e,n));break}}e=e.return}}function D2(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=un(),n.pingedLanes|=n.suspendedLanes&t,q===n&&(en&t)===t&&(J===4||J===3&&(en&130023424)===en&&500>z()-ra?ke(n,0):ta|=t),hn(n,e)}function z0(n,e){e===0&&(n.mode&1?(e=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):e=1);var t=un();n=Yn(n,e),n!==null&&(pr(n,e,t),hn(n,t))}function R2(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),z0(n,t)}function B2(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,o=n.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),z0(n,t)}var W0;W0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||mn.current)An=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return An=!1,P2(n,e,t);An=!!(n.flags&131072)}else An=!1,U&&e.flags&1048576&&Yu(e,so,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zr(n,e),n=e.pendingProps;var o=ut(e,an.current);it(e,t),o=Ji(null,e,r,n,o,t);var l=Yi();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,In(r)?(l=!0,io(e)):l=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xi(e),o.updater=No,e.stateNode=o,o._reactInternals=e,Yl(e,r,n,t),e=ni(null,e,r,!0,l,t)):(e.tag=0,U&&l&&Hi(e),sn(null,e,o,t),e=e.child),e;case 16:r=e.elementType;n:{switch(zr(n,e),n=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=H2(r),n=Nn(r,n),o){case 0:e=ql(null,e,r,n,t);break n;case 1:e=fs(null,e,r,n,t);break n;case 11:e=ds(null,e,r,n,t);break n;case 14:e=ps(null,e,r,Nn(r.type,n),t);break n}throw Error(C(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Nn(r,o),ql(n,e,r,o,t);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Nn(r,o),fs(n,e,r,o,t);case 3:n:{if(G0(e),n===null)throw Error(C(387));r=e.pendingProps,l=e.memoizedState,o=l.element,r0(n,e),po(e,r,null,t);var i=e.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){o=ft(Error(C(423)),e),e=As(n,e,r,t,o);break n}else if(r!==o){o=ft(Error(C(424)),e),e=As(n,e,r,t,o);break n}else for(Sn=pe(e.stateNode.containerInfo.firstChild),yn=e,U=!0,Rn=null,t=e0(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===o){e=Zn(n,e,t);break n}sn(n,e,r,t)}e=e.child}return e;case 5:return o0(e),n===null&&bl(e),r=e.type,o=e.pendingProps,l=n!==null?n.memoizedProps:null,i=o.children,Fl(r,o)?i=null:l!==null&&Fl(r,l)&&(e.flags|=32),O0(n,e),sn(n,e,i,t),e.child;case 6:return n===null&&bl(e),null;case 13:return k0(n,e,t);case 4:return zi(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=dt(e,null,r,t):sn(n,e,r,t),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Nn(r,o),ds(n,e,r,o,t);case 7:return sn(n,e,e.pendingProps,t),e.child;case 8:return sn(n,e,e.pendingProps.children,t),e.child;case 12:return sn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,o=e.pendingProps,l=e.memoizedProps,i=o.value,B(uo,r._currentValue),r._currentValue=i,l!==null)if(Hn(l.value,i)){if(l.children===o.children&&!mn.current){e=Zn(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=bn(-1,t&-t),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Ql(l.return,t,e),a.lanes|=t;break}s=s.next}}else if(l.tag===10)i=l.type===e.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Ql(i,t,e),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}sn(n,e,o.children,t),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,it(e,t),o=On(o),r=r(o),e.flags|=1,sn(n,e,r,t),e.child;case 14:return r=e.type,o=Nn(r,e.pendingProps),o=Nn(r.type,o),ps(n,e,r,o,t);case 15:return x0(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Nn(r,o),zr(n,e),e.tag=1,In(r)?(n=!0,io(e)):n=!1,it(e,t),M0(e,r,o),Yl(e,r,o,t),ni(null,e,r,!0,n,t);case 19:return w0(n,e,t);case 22:return L0(n,e,t)}throw Error(C(156,e.tag))};function b0(n,e){return vu(n,e)}function K2(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,e,t,r){return new K2(n,e,t,r)}function aa(n){return n=n.prototype,!(!n||!n.isReactComponent)}function H2(n){if(typeof n=="function")return aa(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ei)return 11;if(n===xi)return 14}return 2}function Ie(n,e){var t=n.alternate;return t===null?(t=xn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Qr(n,e,t,r,o,l){var i=2;if(r=n,typeof n=="function")aa(n)&&(i=1);else if(typeof n=="string")i=5;else n:switch(n){case $e:return we(t.children,o,l,e);case Ti:i=8,o|=8;break;case vl:return n=xn(12,t,e,o|2),n.elementType=vl,n.lanes=l,n;case Cl:return n=xn(13,t,e,o),n.elementType=Cl,n.lanes=l,n;case Pl:return n=xn(19,t,e,o),n.elementType=Pl,n.lanes=l,n;case ou:return Bo(t,o,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case tu:i=10;break n;case ru:i=9;break n;case Ei:i=11;break n;case xi:i=14;break n;case te:i=16,r=null;break n}throw Error(C(130,n==null?n:typeof n,""))}return e=xn(i,t,e,o),e.elementType=n,e.type=r,e.lanes=l,e}function we(n,e,t,r){return n=xn(7,n,r,e),n.lanes=t,n}function Bo(n,e,t,r){return n=xn(22,n,r,e),n.elementType=ou,n.lanes=t,n.stateNode={isHidden:!1},n}function ml(n,e,t){return n=xn(6,n,null,e),n.lanes=t,n}function Il(n,e,t){return e=xn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function U2(n,e,t,r,o){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sa(n,e,t,r,o,l,i,a,s){return n=new U2(n,e,t,a,s),e===1?(e=1,l===!0&&(e|=8)):e=0,l=xn(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(l),n}function j2(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fe,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function Q0(n){if(!n)return Se;n=n._reactInternals;n:{if(je(n)!==n||n.tag!==1)throw Error(C(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(In(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(C(171))}if(n.tag===1){var t=n.type;if(In(t))return Qu(n,t,e)}return e}function J0(n,e,t,r,o,l,i,a,s){return n=sa(t,r,!0,n,o,l,i,a,s),n.context=Q0(null),t=n.current,r=un(),o=me(t),l=bn(r,o),l.callback=e??null,fe(t,l,o),n.current.lanes=o,pr(n,o,r),hn(n,r),n}function Ko(n,e,t,r){var o=e.current,l=un(),i=me(o);return t=Q0(t),e.context===null?e.context=t:e.pendingContext=t,e=bn(l,i),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=fe(o,e,i),n!==null&&(Kn(n,o,i,l),Fr(n,o,i)),i}function yo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ms(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ua(n,e){Ms(n,e),(n=n.alternate)&&Ms(n,e)}function V2(){return null}var Y0=typeof reportError=="function"?reportError:function(n){console.error(n)};function ca(n){this._internalRoot=n}Ho.prototype.render=ca.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(C(409));Ko(n,e,null,null)};Ho.prototype.unmount=ca.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ke(function(){Ko(null,n,null,null)}),e[Jn]=null}};function Ho(n){this._internalRoot=n}Ho.prototype.unstable_scheduleHydration=function(n){if(n){var e=Lu();n={blockedOn:null,target:n,priority:e};for(var t=0;t<oe.length&&e!==0&&e<oe[t].priority;t++);oe.splice(t,0,n),t===0&&Gu(n)}};function da(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Uo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ts(){}function _2(n,e,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=yo(i);l.call(c)}}var i=J0(e,r,n,0,null,!1,!1,"",Ts);return n._reactRootContainer=i,n[Jn]=i.current,qt(n.nodeType===8?n.parentNode:n),Ke(),i}for(;o=n.lastChild;)n.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=yo(s);a.call(c)}}var s=sa(n,0,!1,null,null,!1,!1,"",Ts);return n._reactRootContainer=s,n[Jn]=s.current,qt(n.nodeType===8?n.parentNode:n),Ke(function(){Ko(e,s,t,r)}),s}function jo(n,e,t,r,o){var l=t._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=yo(i);a.call(s)}}Ko(e,i,n,o)}else i=_2(t,e,n,o,r);return yo(i)}Eu=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Dt(e.pendingLanes);t!==0&&(Gi(e,t|1),hn(e,z()),!(D&6)&&(At=z()+500,Ce()))}break;case 13:Ke(function(){var r=Yn(n,1);if(r!==null){var o=un();Kn(r,n,1,o)}}),ua(n,1)}};ki=function(n){if(n.tag===13){var e=Yn(n,134217728);if(e!==null){var t=un();Kn(e,n,134217728,t)}ua(n,134217728)}};xu=function(n){if(n.tag===13){var e=me(n),t=Yn(n,e);if(t!==null){var r=un();Kn(t,n,e,r)}ua(n,e)}};Lu=function(){return R};Ou=function(n,e){var t=R;try{return R=n,e()}finally{R=t}};Nl=function(n,e,t){switch(e){case"input":if(El(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var o=Go(r);if(!o)throw Error(C(90));iu(r),El(r,o)}}}break;case"textarea":su(n,t);break;case"select":e=t.value,e!=null&&tt(n,!!t.multiple,e,!1)}};mu=oa;Iu=Ke;var F2={usingClientEntryPoint:!1,Events:[Ar,be,Go,fu,Au,oa]},Gt={findFiberByHostInstance:Le,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$2={bundleType:Gt.bundleType,version:Gt.version,rendererPackageName:Gt.rendererPackageName,rendererConfig:Gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Su(n),n===null?null:n.stateNode},findFiberByHostInstance:Gt.findFiberByHostInstance||V2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{Eo=Br.inject($2),_n=Br}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F2;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(e))throw Error(C(200));return j2(n,e,null,t)};Cn.createRoot=function(n,e){if(!da(n))throw Error(C(299));var t=!1,r="",o=Y0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=sa(n,1,!1,null,null,t,!1,r,o),n[Jn]=e.current,qt(n.nodeType===8?n.parentNode:n),new ca(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(C(188)):(n=Object.keys(n).join(","),Error(C(268,n)));return n=Su(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return Ke(n)};Cn.hydrate=function(n,e,t){if(!Uo(e))throw Error(C(200));return jo(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!da(n))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",i=Y0;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),e=J0(e,null,n,1,t??null,o,!1,l,i),n[Jn]=e.current,qt(n),r)for(n=0;n<r.length;n++)t=r[n],o=t._getVersion,o=o(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,o]:e.mutableSourceEagerHydrationData.push(t,o);return new Ho(e)};Cn.render=function(n,e,t){if(!Uo(e))throw Error(C(200));return jo(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!Uo(n))throw Error(C(40));return n._reactRootContainer?(Ke(function(){jo(null,null,n,!1,function(){n._reactRootContainer=null,n[Jn]=null})}),!0):!1};Cn.unstable_batchedUpdates=oa;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Uo(t))throw Error(C(200));if(n==null||n._reactInternals===void 0)throw Error(C(38));return jo(n,e,t,!1,r)};Cn.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(n){console.error(n)}}Z0(),Zs.exports=Cn;var X2=Zs.exports,Es=X2;Sl.createRoot=Es.createRoot,Sl.hydrateRoot=Es.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},sr.apply(this,arguments)}var se;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(se||(se={}));const xs="popstate";function z2(n){n===void 0&&(n={});function e(r,o){let{pathname:l,search:i,hash:a}=r.location;return pi("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:vo(o)}return b2(e,t,null,n)}function W(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function pa(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function W2(){return Math.random().toString(36).substr(2,8)}function Ls(n,e){return{usr:n.state,key:n.key,idx:e}}function pi(n,e,t,r){return t===void 0&&(t=null),sr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?gt(e):e,{state:t,key:e&&e.key||r||W2()})}function vo(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function gt(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function b2(n,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=se.Pop,s=null,c=m();c==null&&(c=0,i.replaceState(sr({},i.state,{idx:c}),""));function m(){return(i.state||{idx:null}).idx}function A(){a=se.Pop;let P=m(),d=P==null?null:P-c;c=P,s&&s({action:a,location:S.location,delta:d})}function I(P,d){a=se.Push;let p=pi(S.location,P,d);c=m()+1;let f=Ls(p,c),g=S.createHref(p);try{i.pushState(f,"",g)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;o.location.assign(g)}l&&s&&s({action:a,location:S.location,delta:1})}function y(P,d){a=se.Replace;let p=pi(S.location,P,d);c=m();let f=Ls(p,c),g=S.createHref(p);i.replaceState(f,"",g),l&&s&&s({action:a,location:S.location,delta:0})}function v(P){let d=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof P=="string"?P:vo(P);return p=p.replace(/ $/,"%20"),W(d,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,d)}let S={get action(){return a},get location(){return n(o,i)},listen(P){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(xs,A),s=P,()=>{o.removeEventListener(xs,A),s=null}},createHref(P){return e(o,P)},createURL:v,encodeLocation(P){let d=v(P);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:I,replace:y,go(P){return i.go(P)}};return S}var Os;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Os||(Os={}));function Q2(n,e,t){return t===void 0&&(t="/"),J2(n,e,t)}function J2(n,e,t,r){let o=typeof e=="string"?gt(e):e,l=fa(o.pathname||"/",t);if(l==null)return null;let i=q0(n);Y2(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let c=up(l);a=ip(i[s],c)}return a}function q0(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(W(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=he([r,s.relativePath]),m=t.concat(s);l.children&&l.children.length>0&&(W(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),q0(l.children,e,m,c)),!(l.path==null&&!l.index)&&e.push({path:c,score:op(c,l.index),routesMeta:m})};return n.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of nc(l.path))o(l,i,s)}),e}function nc(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=nc(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>n.startsWith("/")&&s===""?"/":s)}function Y2(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:lp(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Z2=/^:[\w-]+$/,q2=3,np=2,ep=1,tp=10,rp=-2,Gs=n=>n==="*";function op(n,e){let t=n.split("/"),r=t.length;return t.some(Gs)&&(r+=rp),e&&(r+=np),t.filter(o=>!Gs(o)).reduce((o,l)=>o+(Z2.test(l)?q2:l===""?ep:tp),r)}function lp(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function ip(n,e,t){let{routesMeta:r}=n,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,m=l==="/"?e:e.slice(l.length)||"/",A=ap({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},m),I=s.route;if(!A)return null;Object.assign(o,A.params),i.push({params:o,pathname:he([l,A.pathname]),pathnameBase:Ap(he([l,A.pathnameBase])),route:I}),A.pathnameBase!=="/"&&(l=he([l,A.pathnameBase]))}return i}function ap(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=sp(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,m,A)=>{let{paramName:I,isOptional:y}=m;if(I==="*"){let S=a[A]||"";i=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const v=a[A];return y&&!v?c[I]=void 0:c[I]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:n}}function sp(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),pa(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function up(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pa(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function fa(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const cp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dp=n=>cp.test(n);function pp(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof n=="string"?gt(n):n,l;if(t)if(dp(t))l=t;else{if(t.includes("//")){let i=t;t=t.replace(/\/\/+/g,"/"),pa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+t))}t.startsWith("/")?l=ks(t.substring(1),"/"):l=ks(t,e)}else l=e;return{pathname:l,search:mp(r),hash:Ip(o)}}function ks(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hl(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fp(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Aa(n,e){let t=fp(n);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ma(n,e,t,r){r===void 0&&(r=!1);let o;typeof n=="string"?o=gt(n):(o=sr({},n),W(!o.pathname||!o.pathname.includes("?"),hl("?","pathname","search",o)),W(!o.pathname||!o.pathname.includes("#"),hl("#","pathname","hash",o)),W(!o.search||!o.search.includes("#"),hl("#","search","hash",o)));let l=n===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=t;else{let A=e.length-1;if(!r&&i.startsWith("..")){let I=i.split("/");for(;I[0]==="..";)I.shift(),A-=1;o.pathname=I.join("/")}a=A>=0?e[A]:"/"}let s=pp(o,a),c=i&&i!=="/"&&i.endsWith("/"),m=(l||i===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||m)&&(s.pathname+="/"),s}const he=n=>n.join("/").replace(/\/\/+/g,"/"),Ap=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),mp=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Ip=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function hp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const ec=["post","put","patch","delete"];new Set(ec);const gp=["get",...ec];new Set(gp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ur.apply(this,arguments)}const Ia=h.createContext(null),Sp=h.createContext(null),Pe=h.createContext(null),Vo=h.createContext(null),ne=h.createContext({outlet:null,matches:[],isDataRoute:!1}),tc=h.createContext(null);function yp(n,e){let{relative:t}=e===void 0?{}:e;St()||W(!1);let{basename:r,navigator:o}=h.useContext(Pe),{hash:l,pathname:i,search:a}=lc(n,{relative:t}),s=i;return r!=="/"&&(s=i==="/"?r:he([r,i])),o.createHref({pathname:s,search:a,hash:l})}function St(){return h.useContext(Vo)!=null}function Ir(){return St()||W(!1),h.useContext(Vo).location}function rc(n){h.useContext(Pe).static||h.useLayoutEffect(n)}function hr(){let{isDataRoute:n}=h.useContext(ne);return n?Np():vp()}function vp(){St()||W(!1);let n=h.useContext(Ia),{basename:e,future:t,navigator:r}=h.useContext(Pe),{matches:o}=h.useContext(ne),{pathname:l}=Ir(),i=JSON.stringify(Aa(o,t.v7_relativeSplatPath)),a=h.useRef(!1);return rc(()=>{a.current=!0}),h.useCallback(function(c,m){if(m===void 0&&(m={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let A=ma(c,JSON.parse(i),l,m.relative==="path");n==null&&e!=="/"&&(A.pathname=A.pathname==="/"?e:he([e,A.pathname])),(m.replace?r.replace:r.push)(A,m.state,m)},[e,r,i,l,n])}function oc(){let{matches:n}=h.useContext(ne),e=n[n.length-1];return e?e.params:{}}function lc(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=h.useContext(Pe),{matches:o}=h.useContext(ne),{pathname:l}=Ir(),i=JSON.stringify(Aa(o,r.v7_relativeSplatPath));return h.useMemo(()=>ma(n,JSON.parse(i),l,t==="path"),[n,i,l,t])}function Cp(n,e){return Pp(n,e)}function Pp(n,e,t,r){St()||W(!1);let{navigator:o}=h.useContext(Pe),{matches:l}=h.useContext(ne),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=Ir(),m;if(e){var A;let P=typeof e=="string"?gt(e):e;s==="/"||(A=P.pathname)!=null&&A.startsWith(s)||W(!1),m=P}else m=c;let I=m.pathname||"/",y=I;if(s!=="/"){let P=s.replace(/^\//,"").split("/");y="/"+I.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=Q2(n,{pathname:y}),S=Lp(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:he([s,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:he([s,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,t,r);return e&&S?h.createElement(Vo.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:se.Pop}},S):S}function Mp(){let n=wp(),e=hp(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},e),t?h.createElement("pre",{style:o},t):null,null)}const Tp=h.createElement(Mp,null);class Ep extends h.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?h.createElement(ne.Provider,{value:this.props.routeContext},h.createElement(tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xp(n){let{routeContext:e,match:t,children:r}=n,o=h.useContext(Ia);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),h.createElement(ne.Provider,{value:e},r)}function Lp(n,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,a=(o=t)==null?void 0:o.errors;if(a!=null){let m=i.findIndex(A=>A.route.id&&(a==null?void 0:a[A.route.id])!==void 0);m>=0||W(!1),i=i.slice(0,Math.min(i.length,m+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<i.length;m++){let A=i[m];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(c=m),A.route.id){let{loaderData:I,errors:y}=t,v=A.route.loader&&I[A.route.id]===void 0&&(!y||y[A.route.id]===void 0);if(A.route.lazy||v){s=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((m,A,I)=>{let y,v=!1,S=null,P=null;t&&(y=a&&A.route.id?a[A.route.id]:void 0,S=A.route.errorElement||Tp,s&&(c<0&&I===0?(Dp("route-fallback"),v=!0,P=null):c===I&&(v=!0,P=A.route.hydrateFallbackElement||null)));let d=e.concat(i.slice(0,I+1)),p=()=>{let f;return y?f=S:v?f=P:A.route.Component?f=h.createElement(A.route.Component,null):A.route.element?f=A.route.element:f=m,h.createElement(xp,{match:A,routeContext:{outlet:m,matches:d,isDataRoute:t!=null},children:f})};return t&&(A.route.ErrorBoundary||A.route.errorElement||I===0)?h.createElement(Ep,{location:t.location,revalidation:t.revalidation,component:S,error:y,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var ic=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(ic||{}),ac=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ac||{});function Op(n){let e=h.useContext(Ia);return e||W(!1),e}function Gp(n){let e=h.useContext(Sp);return e||W(!1),e}function kp(n){let e=h.useContext(ne);return e||W(!1),e}function sc(n){let e=kp(),t=e.matches[e.matches.length-1];return t.route.id||W(!1),t.route.id}function wp(){var n;let e=h.useContext(tc),t=Gp(),r=sc();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Np(){let{router:n}=Op(ic.UseNavigateStable),e=sc(ac.UseNavigateStable),t=h.useRef(!1);return rc(()=>{t.current=!0}),h.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,ur({fromRouteId:e},l)))},[n,e])}const ws={};function Dp(n,e,t){ws[n]||(ws[n]=!0)}function Rp(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Bp(n){let{to:e,replace:t,state:r,relative:o}=n;St()||W(!1);let{future:l,static:i}=h.useContext(Pe),{matches:a}=h.useContext(ne),{pathname:s}=Ir(),c=hr(),m=ma(e,Aa(a,l.v7_relativeSplatPath),s,o==="path"),A=JSON.stringify(m);return h.useEffect(()=>c(JSON.parse(A),{replace:t,state:r,relative:o}),[c,A,o,t,r]),null}function _e(n){W(!1)}function Kp(n){let{basename:e="/",children:t=null,location:r,navigationType:o=se.Pop,navigator:l,static:i=!1,future:a}=n;St()&&W(!1);let s=e.replace(/^\/*/,"/"),c=h.useMemo(()=>({basename:s,navigator:l,static:i,future:ur({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=gt(r));let{pathname:m="/",search:A="",hash:I="",state:y=null,key:v="default"}=r,S=h.useMemo(()=>{let P=fa(m,s);return P==null?null:{location:{pathname:P,search:A,hash:I,state:y,key:v},navigationType:o}},[s,m,A,I,y,v,o]);return S==null?null:h.createElement(Pe.Provider,{value:c},h.createElement(Vo.Provider,{children:t,value:S}))}function Hp(n){let{children:e,location:t}=n;return Cp(fi(e),t)}new Promise(()=>{});function fi(n,e){e===void 0&&(e=[]);let t=[];return h.Children.forEach(n,(r,o)=>{if(!h.isValidElement(r))return;let l=[...e,o];if(r.type===h.Fragment){t.push.apply(t,fi(r.props.children,l));return}r.type!==_e&&W(!1),!r.props.index||!r.props.children||W(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=fi(r.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ai.apply(this,arguments)}function Up(n,e){if(n==null)return{};var t={},r=Object.keys(n),o,l;for(l=0;l<r.length;l++)o=r[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function jp(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Vp(n,e){return n.button===0&&(!e||e==="_self")&&!jp(n)}const _p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fp="6";try{window.__reactRouterVersion=Fp}catch{}const $p="startTransition",Ns=Dc[$p];function Xp(n){let{basename:e,children:t,future:r,window:o}=n,l=h.useRef();l.current==null&&(l.current=z2({window:o,v5Compat:!0}));let i=l.current,[a,s]=h.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},m=h.useCallback(A=>{c&&Ns?Ns(()=>s(A)):s(A)},[s,c]);return h.useLayoutEffect(()=>i.listen(m),[i,m]),h.useEffect(()=>Rp(r),[r]),h.createElement(Kp,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i,future:r})}const zp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,He=h.forwardRef(function(e,t){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:c,preventScrollReset:m,viewTransition:A}=e,I=Up(e,_p),{basename:y}=h.useContext(Pe),v,S=!1;if(typeof c=="string"&&Wp.test(c)&&(v=c,zp))try{let f=new URL(window.location.href),g=c.startsWith("//")?new URL(f.protocol+c):new URL(c),M=fa(g.pathname,y);g.origin===f.origin&&M!=null?c=M+g.search+g.hash:S=!0}catch{}let P=yp(c,{relative:o}),d=bp(c,{replace:i,state:a,target:s,preventScrollReset:m,relative:o,viewTransition:A});function p(f){r&&r(f),f.defaultPrevented||d(f)}return h.createElement("a",Ai({},I,{href:v||P,onClick:S||l?r:p,ref:t,target:s}))});var Ds;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ds||(Ds={}));var Rs;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Rs||(Rs={}));function bp(n,e){let{target:t,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=e===void 0?{}:e,s=hr(),c=Ir(),m=lc(n,{relative:i});return h.useCallback(A=>{if(Vp(A,t)){A.preventDefault();let I=r!==void 0?r:vo(c)===vo(m);s(n,{replace:I,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[c,s,m,r,o,t,n,l,i,a])}const Qp=[{id:"20260524180001",title:"삼성전자, '갤럭시 AI 2.0' 공개…실시간 통역 성능 대폭 향상",summary:"삼성전자가 차세대 온디바이스 AI 기능이 강화된 '갤럭시 AI 2.0'을 발표하며 스마트폰 AI 경쟁에 불을 지폈다. 특히 실시간 통역 성능이 크게 향상되어 언어 장벽 해소에 기여할 전망이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-24T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!0,content:`## 삼성전자, '갤럭시 AI 2.0' 공개…실시간 통역 성능 대폭 향상

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

AI 반도체 시장의 경쟁은 기술 발전 속도를 더욱 가속화시키고, AI 기술의 보급 확산에 기여할 것으로 예상된다. 한국 기업들은 이러한 변화에 능동적으로 대응하며 새로운 성장 기회를 포착해야 할 것이다.`},{id:"20260522093001",title:"SpaceX·OpenAI·Anthropic 'IPO 트리오' 3.5조 달러 자본시장 진입 카운트다운",summary:"SpaceX가 5월 20일 SEC에 정식 S-1을 제출하며 1.75조~2조 달러 가치, 750억 달러 조달을 공식화했다. OpenAI(9월·1조 달러 이상)·Anthropic(10월·9,000억 달러)의 3대 IPO 합산 시가총액 3.5조 달러는 미 자본시장 사상 최대 규모. 5% 부동주식 가정 합산 조달액 2,000억 달러로 한국 자본시장과 KOSPI 자금 흐름에 즉각적 영향이 예고됐다.",category:"이벤트",author:"Prompt Daily 편집팀",date:"2026-05-22T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## SpaceX·OpenAI·Anthropic 'IPO 트리오' 3.5조 달러 자본시장 진입 카운트다운

==**SpaceX**==가 ==**2026년 5월 20일(현지) SEC에 정식 S-1 공시**==를 제출하며 ==**1.75조~2조 달러 시가총액·750억 달러 조달**==을 ==**공식 확정**==했다. ==**4월 1일 비공개 제출**==을 거쳐 ==**6월 Nasdaq 상장**==을 목표로 한다. ==**2025년 연결 매출 186.7억 달러**==가 ==**S-1 본문에 최초 공개**==됐다.

📌 **핵심 인사이트**: SpaceX·OpenAI·Anthropic 3사가 ==**모두 2026년 하반기 6개월 안에 IPO를 완료**==하면 ==**미국 자본시장 사상 최대 규모인 합산 시가총액 3.5조 달러**==가 ==**한 분기 안에 동시 형성**==된다. ==**5% 부동주식 비율**==을 가정한 ==**합산 조달액 2,000억 달러**==는 ==**2008년 금융위기 이후 단일 분기 IPO 규모 최대**==를 ==**2.4배 초과**==한다.

3대 IPO 트리오 핵심 스펙(5월 22일 기준):

1. **SpaceX**: ==**1.75조~2조 달러**== · ==**6월 Nasdaq 상장**== · ==**750억 달러 조달**==
2. **OpenAI**: ==**1조 달러 이상**== · ==**9월 상장 목표**== · ==**Goldman Sachs·Morgan Stanley 주관**==
3. **Anthropic**: ==**9,000억 달러**== · ==**10월 상장 목표**== · ==**Claude ARR 300억 달러 기반**==
4. **합산 시가총액**: ==**3.5조 달러(약 4,830조 원)**==
5. **합산 부동주식 조달**: ==**약 2,000억 달러(약 276조 원)**==

특히 ==**SpaceX S-1의 2025년 매출 186.7억 달러**==는 ==**Starlink 가입자 1,420만 명·차세대 Starship 발사 성공·NASA Artemis III 계약 28억 달러**==가 ==**합산 기여**==한 결과다.

> "==**3사 IPO 트리오는 단순 자본 조달이 아닌 'AI·우주·자율시스템' 3대 미래 산업의 정식 공모 시장 데뷔**==다. ==**S&P 500 패스트트랙 편입**==이 ==**상장 후 30~60일 안 가능**==하며 ==**전 세계 패시브 펀드의 강제 매입 수요**==가 ==**약 4,200억 달러**== 추정된다."
> — Tomasz Tunguz, 벤처캐피털리스트 (5월 21일 분석)

---

## OpenAI 1조 달러·Anthropic 9,000억 달러 가치 정당화 논리

⚡ **AI 매출 성장 속도가 가치 평가의 근거**: OpenAI는 ==**2026년 5월 기준 ARR 130억 달러**==이지만 ==**1조 달러 가치 = ARR의 77배**==로 평가된다. Anthropic은 ==**ARR 300억 달러**==로 ==**9,000억 달러 = 30배**==. ==**시장은 'AI 매출의 1년 +200% 가속'**==이 ==**향후 5년 이어진다는 가정**==을 ==**가격에 선반영**==한 상태다.

IPO 트리오 가치 평가 비교:

- **SpaceX**: ==**P/S 9.4배**== (매출 186.7억 → 시가총액 1.75조 가정)
- **OpenAI**: ==**P/S 77배**==
- **Anthropic**: ==**P/S 30배**==
- **Tesla 2020 IPO P/S 평균**: ==**12배**==
- **MSFT·GOOG·META 2025년 평균 P/S**: ==**8.4배**==

> "==**OpenAI 1조 달러·Anthropic 9,000억 달러는 'AI는 인터넷·전기 수준의 인프라'라는 시장 합의의 정점**==이다. 다만 ==**ARR 성장 속도가 +200% → +100%로 둔화**==되면 ==**상장 후 6개월 안에 -35~50% 조정**==이 발생할 수 있다는 ==**리스크 시나리오**==도 ==**투자은행 5사 공동 코멘트**==로 함께 제시됐다."
> — Toni Sacconaghi, Bernstein 애널리스트 (5월 21일 리서치)

---

## 한국에 미치는 영향

### 1. KOSPI·KOSDAQ 자금 유출 +47조 원 시나리오, AI 섹터는 +12% 동반 강세

==**한국투자증권·미래에셋·NH투자증권 3사 공동 리서치**==는 ==**5월 22일 발표**==를 통해 ==**'IPO 트리오 합산 조달 2,000억 달러 중 한국발 매수 자금 약 470억 달러(64조 원) 동참 시나리오'**==를 ==**제시**==했다. ==**KOSPI·KOSDAQ에서 IPO 트리오 매수 자금으로 약 +47조 원 일시 유출**==이 ==**6~10월 사이 단계적 발생**==한다. 반면 ==**한국 AI 섹터(NAVER·SKT·삼성SDS·루닛·뷰노·코난테크놀로지)**==는 ==**'한국판 IPO 트리오 기대 모멘텀'**==으로 ==**+12% 동반 강세**==가 ==**5월 26일~6월 5일 사이 형성**==될 전망이다.

### 2. 국민연금·KIC·POBA 3대 연기금 'IPO 트리오 직접 청약' 6월 안 결정

==**국민연금공단(NPS) 해외주식본부·한국투자공사(KIC)·공무원연금(POBA)**==은 ==**5월 22일 긴급 운용위 회의**==를 통해 ==**'SpaceX 6월 IPO 직접 청약 + OpenAI·Anthropic 후속 청약 의사 여부'**==를 ==**6월 중순 안 정식 결정**==한다. ==**3대 연기금 합산 청약 한도 약 78억 달러(약 10.8조 원)**==가 ==**SpaceX 750억 달러 조달의 약 10%**==를 ==**한국 자금이 단독 흡수**==할 수 있는 ==**역사적 기회**==로 평가받는다.

### 3. 한국 유니콘 '쿠팡 모델 + 한국형 IPO 트리오' 본격 검토, 2027~2028 줄지어 상장

==**Upstage·뤼튼·트웰브랩스·스캐터랩·라이너 5개 AI 유니콘**==과 ==**무신사·당근·토스·야놀자 4개 슈퍼앱**==이 ==**5월 22일 사내 IPO 검토 회의**==를 일제히 가동했다. ==**'쿠팡 NYSE 모델 + 한국형 IPO 트리오'**==를 통해 ==**2027~2028년 안 KOSPI·NYSE 동시 상장**==을 ==**9개 기업이 줄지어 추진**==하는 시나리오가 ==**한국 자본시장의 새로운 슈퍼사이클**==으로 부각됐다.

### 4. SpaceX S-1 매출 186.7억 중 한국 부품·소재 비중 추적, 한화·LIG·KAI '우주 협력 확장'

==**한화에어로스페이스·LIG넥스원·KAI(한국항공우주)·쎄트렉아이**==는 ==**5월 22일 사내 우주협력팀 회의**==를 통해 ==**'SpaceX S-1 매출 186.7억 중 한국 부품·소재 직접 거래 비중 4.2~6.8%'**==를 ==**확정 검증**==하고 ==**Starlink 가입자 1,420만 명 대응 추가 부품 공급 6월 안 협상**==을 ==**가속**==한다. ==**한국 우주 산업 KOSPI 섹터**==는 ==**5월 26일 오전 9시 +4~7% 동반 강세 출발 예상**==.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'IPO 트리오 3.5조 달러'의 다음 시나리오**:

1. **5월 23~27일**: SpaceX ==**'로드쇼 가동 + 미국·유럽·아시아 기관투자자 미팅'**== 본격 시작
2. **6월 중순**: SpaceX ==**Nasdaq 상장 D-day**== + ==**시초가 ±15% 변동성 검증**==
3. **7월**: 국민연금·KIC ==**'SpaceX 청약 결과 + OpenAI·Anthropic 후속 청약 의사 정식 확정'**==
4. **9월**: OpenAI ==**NYSE 상장 + 1조 달러 시가총액 첫 검증**==
5. **10월**: Anthropic ==**NYSE 상장 + 9,000억 달러 검증 + S&P 500 패스트트랙 동시 편입**==

⚠️ **한국 기업·정부 5월 22~29일 행동 체크리스트**:

1. ==**KOSPI·KOSDAQ 자금 유출 -47조 원 + AI 섹터 +12% 동반 강세 정량 검증**==
2. ==**국민연금·KIC·POBA 3대 연기금 6월 IPO 청약 결정 일정 사전 정보 수집**==
3. ==**Upstage·뤼튼·트웰브랩스 9개 유니콘 한국형 IPO 트리오 2027~2028 일정 추적**==
4. ==**한화에어로·LIG넥스원·KAI Starlink 부품 6월 협상 일정 확인**==
5. ==**S&P 500 패스트트랙 편입 후 한국 패시브 펀드 강제 매입 시나리오 정량 검증**==

✅ **결론**: SpaceX·OpenAI·Anthropic IPO 트리오 3.5조 달러는 ==**미국 자본시장 사상 최대 규모의 단일 분기 IPO 사건**==이며 ==**한국 자본시장·연기금·유니콘·우주 산업 4대 축에 즉각적·구조적 영향**==을 미친다. 한국 정부·금융위·연기금·AI 유니콘·우주 기업은 ==**5월 22~29일 안에 자금 유출 대응·연기금 청약·유니콘 상장·우주 협력 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260522093002",title:"Anthropic-Google-Broadcom '컴퓨트 동맹' 발표... ARR 300억 달러 가속, 1년 +233%",summary:"Anthropic이 5월 21일 Google·Broadcom과 다년 컴퓨트 파트너십을 공식 발표했다. Claude 고객 폭증 대응을 위한 TPU·맞춤형 ASIC 캐파 대규모 확장이 핵심. 2025년 말 90억 달러였던 Claude ARR이 5월 기준 300억 달러로 1년 +233% 폭발 성장했다. 카르파시 영입 + 컴퓨트 동맹 + ARR 폭증 3대 변수가 OpenAI·Google과의 프론티어 경쟁 구도를 재편한다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-22T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## Anthropic-Google-Broadcom '컴퓨트 동맹' 발표... ARR 300억 달러 가속, 1년 +233%

==**Anthropic**==이 ==**2026년 5월 21일(현지) Google·Broadcom과의 다년 컴퓨트 파트너십**==을 ==**공식 발표**==했다. 핵심은 ==**'Claude 고객 폭증에 대응하는 TPU·맞춤형 ASIC 캐파 대규모 확장'**==이다. ==**Google TPU v7e Trillium**==과 ==**Broadcom 맞춤형 AI ASIC**==이 ==**Claude 추론·학습 인프라**==에 ==**합산 30만 칩 신규 배치**==된다.

📌 **핵심 인사이트**: Anthropic의 ==**연환산 매출(ARR) 300억 달러**==는 ==**2025년 12월 90억 달러 대비 +233%**==. ==**OpenAI ARR 130억 달러의 2.3배**==를 ==**6개월 만에 추월**==한 ==**산업 사상 최대 가속 곡선**==이다. ==**카르파시 합류 + 컴퓨트 동맹 + ARR 폭증**==의 ==**3대 변수**==가 ==**OpenAI·Google과의 프론티어 경쟁 구도를 재편**==한다.

컴퓨트 동맹 핵심 구조:

1. **Google TPU v7e Trillium 신규 배치**: ==**18만 칩**== (Anthropic 전용)
2. **Broadcom 맞춤형 AI ASIC**: ==**12만 칩**== (Claude 추론 최적화)
3. **AWS Trainium 2 기존 협력**: ==**24만 칩 유지**==
4. **합산 컴퓨트 캐파**: ==**연 5.4 ExaFLOPs**== (전년 대비 +260%)
5. **2026년 3분기 1차 배치 완료**: ==**Claude Opus 5 학습용**==

특히 ==**Google과의 동맹**==은 ==**Anthropic이 동시에 AWS Trainium·NVIDIA·Google TPU·Broadcom ASIC 4대 인프라를 멀티 운용**==하는 ==**산업 사상 첫 사례**==다. ==**'단일 칩 의존 리스크 -100% 분산'**==이 ==**핵심 전략 이점**==.

> "==**Anthropic은 단순한 LLM 회사가 아닌 'AI 시대의 인프라 오케스트레이터'**==로 진화하고 있다. ==**4대 칩 멀티 운용**==은 ==**OpenAI(NVIDIA + 자체 칩) + Google(TPU 단독) 양사의 약점**==을 ==**동시에 우회**==하는 ==**역사적 전략**==이다."
> — Dario Amodei, Anthropic CEO (5월 21일 블로그)

---

## Claude ARR 300억 달러 분해... 엔터프라이즈 60% + Code 25% + 컴퓨터 사용 4%

⚡ **Claude ARR의 폭발적 다변화**: 2025년 말 ==**API 단일 매출 위주 90억 달러**==였던 Anthropic 매출은 ==**6개월 만에 6대 라인업이 동시 성장**==하며 ==**300억 달러로 +233% 폭발**==했다. ==**엔터프라이즈 API 180억 + Claude Code/Enterprise 75억 + 컴퓨터 사용 12억**==이 ==**핵심 동인**==이다.

Claude ARR 300억 달러 6대 라인업 구조:

- **엔터프라이즈 API**: ==**연 180억 달러**== (60%)
- **Claude Code + Enterprise**: ==**연 75억 달러**== (25%)
- **Claude for Small Business**: ==**연 18억 달러**== (6%) - 5월 13일 출시
- **컴퓨터 사용(Computer Use)**: ==**연 12억 달러**== (4%) - +421% 성장
- **법무·의료 도메인 특화**: ==**연 9억 달러**== (3%)
- **개인 Pro 구독**: ==**연 6억 달러**== (2%)

특히 ==**5월 13일 출시한 Claude for Small Business**==는 ==**15개 에이전트 워크플로(QuickBooks·PayPal·HubSpot·Canva·Docusign·Google Workspace·Microsoft 365 연동)**==로 ==**1주일 만에 ARR 18억 달러 라인업**==으로 ==**즉시 성장**==했다.

> "==**Claude의 ARR 300억 달러 + Google·Broadcom 컴퓨트 동맹**==은 ==**Anthropic이 OpenAI·Google과의 프론티어 3강 체제에서 명실상부한 1강**==으로 ==**도약했음을 의미**==한다. 다만 ==**2026년 3분기 가속 둔화 +100%로 조정될 가능성**==을 ==**시장이 IPO 가격에 선반영**==하는 단계다."
> — Casey Newton, Platformer (5월 21일 분석)

---

## 한국에 미치는 영향

### 1. SKT·LG CNS·삼성SDS 'Claude Korea 호스팅 6월 정식 가동' 본격화

==**Anthropic Korea Partner**==인 ==**SKT(Claude Korea 호스팅)·LG CNS(Claude Enterprise 도입 컨설팅)·삼성SDS(Claude API 리셀러)**==는 ==**5월 22일 합동 발표**==를 통해 ==**'Claude Korea 호스팅 6월 1일 정식 가동'**==을 ==**확정**==했다. ==**KT클라우드·NHN클라우드 IDC 분산 배치**==를 통해 ==**Claude Opus 4.5/5 한국 사용자 응답 속도 -68% 단축**==이 가능해진다. ==**3사 합산 매출 영향 연 +3,800억 원**==이 ==**2026년 4분기 KOSPI 실적 반영**==.

### 2. NAVER·LG·SKT '한국형 멀티 컴퓨트 동맹' 6월 안 발표

==**Anthropic의 4대 칩 멀티 운용 사례**== 직후 ==**NAVER HyperCLOVA X·LG EXAONE·SKT A.X K**==는 ==**'한국형 멀티 컴퓨트 동맹'**==을 ==**6월 안에 발표**==한다. ==**삼성 파운드리 2나노 AI 칩 + SK하이닉스 HBM4 + NVIDIA H200 + AWS Trainium 2 4대 멀티 운용**==이 ==**'한국 LLM 4사 컨소시엄' 핵심 전략**==으로 부상한다. ==**과기정통부·금융위 공동 1조 원 매칭 펀드**==가 ==**6월 중순 발표 가능성**==.

### 3. Anthropic Korea Recruiting 시니어 ML +1,940%, 한국 인재 유출 가속 신호

==**Anthropic Recruiting**==이 ==**5월 21일 서울·도쿄·싱가포르 3개 지역 시니어 ML 엔지니어 채용 공고**==를 ==**카르파시 합류 직후 +37% 추가 확대**==한 데 이어 ==**5월 22일 LinkedIn 한국 사용자 'Anthropic 입사 의사' 클릭**==이 ==**전일 대비 +1,940%**==를 기록했다. ==**연봉 패키지 $850K~$1.2M(11~16억 원)**==이 ==**NAVER·KaKao 동급 직무 대비 4.2~5.8배**==. ==**과기정통부 5월 28일 '한국 AI 인재 유출 방지 종합 패키지'**== 발표 예고.

### 4. Broadcom·삼성·SK하이닉스 'AI 맞춤형 ASIC' 협력 6월 확대

==**Broadcom 맞춤형 AI ASIC 12만 칩**== 배치 발표 직후 ==**삼성 파운드리(2나노 GAA)·SK하이닉스(HBM4 16단)**==는 ==**'Broadcom 차세대 ASIC + 한국 메모리·파운드리 협력 확대'**==를 ==**6월 중순 합의 가능성**==을 ==**5월 22일 사내 회의**==에서 검토했다. ==**연 매출 추가 2.4조 원(삼성) + 1.8조 원(SK하이닉스)**==이 ==**2026년 4분기~2027년 2분기 분기 영업이익 가속**==으로 ==**반영 예상**==.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'Claude 1강 체제'의 다음 시나리오**:

1. **5월 22~28일**: Anthropic ==**'Claude Opus 5 베타 일부 공개'**== + ==**Computer Use 2.0 사전 발표**==
2. **6월 1일**: Claude Korea 호스팅 ==**정식 가동 + 응답 속도 -68% 단축 검증**==
3. **6월 중순**: NAVER·LG·SKT ==**'한국형 멀티 컴퓨트 동맹' 정식 발표**==
4. **7~8월**: Anthropic ==**'Claude Opus 5 정식 출시 + GPT-6·Gemini 5.0과 정면 경쟁'**==
5. **10월**: Anthropic ==**NYSE 상장 + 9,000억 달러 시가총액 검증**==

⚠️ **한국 기업·정부 5월 22~29일 행동 체크리스트**:

1. ==**SKT·LG CNS·삼성SDS Claude Korea 6월 1일 정식 가동 일정 사전 검증**==
2. ==**NAVER·LG·SKT 한국형 멀티 컴퓨트 동맹 6월 발표 일정 확인**==
3. ==**Anthropic Korea Recruiting 한국 시니어 ML 유출 시나리오 정량 검증**==
4. ==**Broadcom-삼성-SK하이닉스 ASIC 협력 6월 합의 일정 사전 정보 수집**==
5. ==**Claude Opus 5 베타 + Computer Use 2.0 5월 말 공개 일정 추적**==

✅ **결론**: Anthropic-Google-Broadcom 컴퓨트 동맹과 Claude ARR 300억 달러 폭발은 ==**Anthropic이 OpenAI·Google과의 프론티어 3강에서 명실상부한 1강으로 도약**==한 ==**역사적 분기점**==이다. 한국 SKT·LG CNS·삼성SDS·NAVER·LG·SKT·삼성·SK하이닉스는 ==**5월 22~29일 안에 Claude Korea 가동·멀티 컴퓨트 동맹·인재 유출 방지·ASIC 협력 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260522093003",title:"OpenAI 'ChatGPT Ads Manager' 셀프서브 광고 플랫폼 출시... 광고 -커머스 거대 시장 진입",summary:"OpenAI가 ChatGPT 내부에서 광고주가 캠페인을 직접 생성·관리·최적화할 수 있는 셀프서브 'Ads Manager'를 5월 21일 정식 출시했다. 주당 8억 활성 사용자에게 직접 광고 노출, ChatGPT 답변 흐름에 자연 통합되는 'Conversational Ads' 포맷이 핵심. 2026년 OpenAI 광고 매출 80억 달러, 2027년 240억 달러 전망. Meta·Google 광고 점유율 -8.4%p 잠식 시나리오 확정.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-22T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",breaking:!1,content:`## OpenAI 'ChatGPT Ads Manager' 셀프서브 광고 플랫폼 출시... 광고 -커머스 거대 시장 진입

==**OpenAI**==가 ==**2026년 5월 21일(현지) ChatGPT 내부에서 광고주가 캠페인을 직접 생성·관리·최적화할 수 있는 셀프서브 'ChatGPT Ads Manager'**==를 ==**정식 출시**==했다. ==**주당 활성 사용자(WAU) 8억 명**==에게 ==**직접 광고 노출**==이 가능해진다. ==**Conversational Ads(대화형 광고) 포맷**==이 ==**ChatGPT 답변 흐름에 자연스럽게 통합**==되는 ==**산업 사상 첫 사례**==다.

📌 **핵심 인사이트**: ChatGPT Ads Manager 출시는 ==**OpenAI가 단순 LLM 회사에서 'Google Ads·Meta Ads 직접 경쟁자'로 진화한 결정적 분기점**==이다. ==**2026년 OpenAI 광고 매출 80억 달러 + 2027년 240억 달러 전망**==이 ==**Goldman Sachs·Morgan Stanley 공동 추정**==으로 ==**5월 22일 정식 공개**==됐다.

ChatGPT Ads Manager 핵심 사양:

1. **셀프서브 인터페이스**: ==**Google Ads UX 모방**== + ==**자연어 캠페인 빌더 'AdGPT' 기본 탑재**==
2. **광고 포맷 4종**: ==**Conversational Ads(대화 흐름 삽입) + Inline Sponsored Result + Product Carousel + Sponsored CTA**==
3. **타기팅**: ==**ChatGPT 대화 컨텍스트 기반 실시간 의도 분석 + 기존 인구통계 결합**==
4. **과금 모델**: ==**CPM·CPC·CPA(Cost per Action) 동시 지원**==
5. **분석 대시보드**: ==**전환·LTV·도달·노출 실시간 추적**==
6. **API 통합**: ==**Shopify·Stripe·HubSpot·Salesforce 4대 통합 베타**==

특히 ==**Conversational Ads**==는 ==**ChatGPT가 '청바지 추천해줘'에 대해 응답하면서 자연스럽게 'Levi's 511 Slim Fit'을 추천 + 구매 링크 + 할인 코드 자동 삽입**==하는 ==**'완전 통합형 추천 광고'**==다. ==**클릭률 8.7~12.3%**==로 ==**Google Search Ads(평균 3.2%) 대비 3~4배**==.

> "==**ChatGPT Ads Manager는 검색 광고의 다음 진화 단계인 '대화형 광고 시대'의 정식 개막**==이다. 광고는 더 이상 ==**'배너·검색 결과'**==가 아니라 ==**'AI 답변 자체'**==가 된다."
> — Sarah Friar, OpenAI CFO (5월 21일 출시 컨퍼런스)

---

## Google·Meta 광고 시장 -8.4%p 잠식, 2027년까지 240억 달러 ARR 전망

⚡ **Google·Meta 광고 점유율 잠식 시나리오 정식 공개**: Goldman Sachs·Morgan Stanley·UBS·JP Morgan·Bernstein 5대 투자은행이 ==**5월 22일 공동 리서치**==를 통해 ==**'OpenAI Ads Manager 2026~2027년 글로벌 광고 시장 점유율 -8.4%p Google·Meta 잠식 시나리오'**==를 ==**공식 발표**==했다.

OpenAI Ads Manager 매출 전망:

- **2026년 ARR**: ==**80억 달러**== (출시 첫해)
- **2027년 ARR**: ==**240억 달러**== (+200%)
- **2028년 ARR**: ==**510억 달러**== (+113%)
- **Google 검색 광고 점유율**: ==**56.8% → 49.4%**== (-7.4%p)
- **Meta SNS 광고 점유율**: ==**18.3% → 17.3%**== (-1.0%p)

특히 ==**아마존 광고 시장**==은 ==**OpenAI 'AI 쇼핑 추천' 직접 경쟁**==으로 ==**+0.7%p 잠식**==이 동반된다. ==**Google·Meta·Amazon 합산 -9.1%p**== ==**광고 시장 점유율 손실**==이 ==**OpenAI 단독 흡수**==하는 시나리오다.

> "==**Google 검색 광고 -7.4%p 잠식**==은 ==**Alphabet 매출 -380억 달러 직접 손실**==과 같다. ==**6~12개월 안 Google이 Gemini 기반 자체 광고 플랫폼 출시 + Meta의 대화형 광고 신규 라인 출시**==가 ==**산업 전쟁의 다음 라운드**==다."
> — Mark Mahaney, Evercore ISI (5월 22일 공동 리서치)

---

## 한국에 미치는 영향

### 1. NAVER·카카오 '대화형 광고 신규 라인' 6월 동시 출시, KOSPI -1.2% 일시 약세

==**NAVER 검색 광고**==와 ==**카카오 비즈보드**==는 ==**5월 22일 사내 긴급 회의**==를 통해 ==**'대화형 광고 신규 라인 6월 동시 출시'**==를 ==**확정**==했다. ==**NAVER 클로바 X 검색 광고 + 카카오 i.GPT 비즈보드**==가 ==**'한국형 ChatGPT Ads Manager 대응 패키지'**==로 ==**6월 중순 정식 공개**==된다. 다만 ==**5월 22일 KOSPI**==는 ==**'OpenAI 글로벌 광고 시장 잠식 우려'**==로 ==**NAVER -3.8%·카카오 -2.4% 약세 출발**==이 ==**잠재적 시나리오**==.

### 2. 삼성·LG·현대차·아모레퍼시픽 'ChatGPT Ads' 한국어 베타 6월 7일 가동

==**삼성전자(갤럭시 S26 사전 마케팅)·LG전자(OLED TV 글로벌)·현대차(아이오닉 9 글로벌 마케팅)·아모레퍼시픽(설화수·라네즈 글로벌)**==은 ==**OpenAI Ads Manager 한국어 베타 6월 7일 정식 가동**==과 ==**합산 광고 예산 480억 원 6~9월 집행**==을 ==**5월 22일 사내 회의**==에서 결정했다. ==**'대화형 광고 클릭률 12.3% + 글로벌 8억 WAU 직접 노출'**==이 ==**핵심 가치 제안**==.

### 3. 한국 광고대행사 'AI 광고 전담팀' 6월 1주차 동시 신설

==**제일기획·이노션·HS애드·대홍기획 4대 광고대행사**==는 ==**5월 22일 사내 인사 발표**==를 통해 ==**'ChatGPT Ads 전담팀 6월 1주차 동시 신설'**==을 ==**확정**==했다. ==**4사 합산 100명 규모 신규 채용**==이 ==**6~8월 안 완료**==되며 ==**연 매출 추가 1,200억 원**==이 ==**광고대행사 KOSPI 실적**==에 ==**반영 예상**==.

### 4. 공정거래위·방통위 'AI 대화형 광고 표시 의무' 가이드라인 7월 발표

==**공정거래위원회·방송통신위원회**==는 ==**5월 22일 합동 발표**==를 통해 ==**'AI 대화형 광고의 광고임을 명시할 표시 의무' 가이드라인**==을 ==**7월 안 행정 예고**==한다고 밝혔다. ==**'AI 답변 안에 자연스럽게 삽입된 상품 추천이 광고임을 사용자가 인지할 권리'**==가 ==**핵심 보호 대상**==. 위반 시 ==**연 매출의 3% 과징금**==이 ==**2027년 1월 1일부터 적용**==된다.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'대화형 광고 시대'의 다음 시나리오**:

1. **5월 23~28일**: Google ==**'Gemini 기반 대화형 광고 신규 라인 6월 발표 사전 유출'**== 가능성
2. **6월 7일**: 삼성·LG·현대차·아모레 ==**'한국어 ChatGPT Ads 베타 정식 가동'**==
3. **6월 중순**: NAVER·카카오 ==**'한국형 대화형 광고 신규 라인 정식 공개'**==
4. **7월**: 공정위·방통위 ==**'AI 광고 표시 의무 가이드라인 행정 예고'**==
5. **9월**: OpenAI ==**'Ads Manager 2분기 실적 100억 달러 초과 달성 발표'**==

⚠️ **한국 기업·정부 5월 22~29일 행동 체크리스트**:

1. ==**NAVER·카카오 한국형 대화형 광고 6월 동시 출시 일정 사전 검증**==
2. ==**삼성·LG·현대차·아모레 480억 원 글로벌 광고 예산 집행 일정 추적**==
3. ==**제일기획·이노션·HS애드·대홍 AI 광고 전담팀 100명 채용 일정 확인**==
4. ==**공정위·방통위 AI 광고 표시 의무 가이드라인 7월 행정 예고 사전 정보 수집**==
5. ==**KOSPI NAVER·카카오 일시 약세 + 광고대행사 +1,200억 실적 시나리오 정량 검증**==

✅ **결론**: OpenAI ChatGPT Ads Manager 출시는 ==**검색 광고의 다음 진화 단계인 '대화형 광고 시대'의 정식 개막**==이며 ==**Google·Meta·Amazon 합산 -9.1%p 잠식 + 2027년 ARR 240억 달러 전망**==으로 ==**미국 광고 산업의 패러다임 전환점**==을 만들었다. 한국 NAVER·카카오·삼성·LG·현대차·아모레·광고대행사·공정위·방통위는 ==**5월 22~29일 안에 대화형 광고 라인업 출시·글로벌 광고 예산 집행·인력 확대·표시 의무 가이드라인 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260522093004",title:"삼성전자 HBM4 NVIDIA·AMD '동시 최종 통과'... 6월 본격 공급, SK하이닉스 독주 균열",summary:"삼성전자가 HBM4 메모리에 대한 NVIDIA Blackwell Ultra·AMD MI400 시리즈 최종 품질 테스트를 5월 21일 동시 통과했다. 6월부터 본격 양산 공급이 시작된다. AMD는 차세대 AI 가속기 HBM4 주공급사로 삼성을 공식 지명, SK하이닉스의 NVIDIA HBM 70% 독점 구도에 산업 사상 첫 균열이 발생한다. 삼성 DS사업부 2026년 영업이익 +92% 가속, 47조 원 전망.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-22T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!1,content:`## 삼성전자 HBM4 NVIDIA·AMD '동시 최종 통과'... 6월 본격 공급, SK하이닉스 독주 균열

==**삼성전자**==가 ==**HBM4 메모리에 대한 NVIDIA Blackwell Ultra·AMD MI400 시리즈 최종 품질 테스트(qualification)**==를 ==**2026년 5월 21일 동시 통과**==한 ==**복수의 산업 소식통 확인**==을 받았다. ==**6월부터 본격 양산 공급**==이 시작된다. ==**AMD는 차세대 AI 가속기 MI400X·MI450의 HBM4 주공급사로 삼성을 공식 지명**==, ==**SK하이닉스의 NVIDIA HBM 70% 독점 구도에 산업 사상 첫 균열**==이 발생한다.

📌 **핵심 인사이트**: ==**삼성전자 HBM4 NVIDIA·AMD 동시 통과**==는 ==**'SK하이닉스 독주 종료 신호'**==다. ==**삼성 DS사업부 2026년 영업이익 +92% 가속, 47조 원 전망**==이 ==**5월 22일 신한투자증권·미래에셋·NH 3사 동시 상향 조정**==. ==**KOSPI 삼성전자**==는 ==**6~7월 안 10만 원 회복 시야**==가 ==**산업 합의**==로 형성됐다.

삼성 HBM4 핵심 사양·공급 스케줄:

1. **NVIDIA Blackwell Ultra B200**: ==**6월 1주차 본격 공급 시작**== (월 4만 장)
2. **AMD MI400X·MI450**: ==**6월 2주차 주공급사 지명 + 본격 공급**== (월 3.2만 장)
3. **삼성 HBM4 16단 HCB 적용**: ==**전 세계 첫 HCB(하이브리드 구리 본딩) 상용화**==
4. **2026년 합산 HBM 매출**: ==**연 24.6조 원**== (HBM3E + HBM4 합산)
5. **2027년 HBM4E 16단**: ==**삼성 단독 양산 가능 전망**==
6. **DS사업부 영업이익**: ==**+92% 가속, 47조 원 전망**==

특히 ==**삼성의 하이브리드 구리 본딩(HCB) 기술**==은 ==**SK하이닉스 MR-MUF 본딩 방식 대비 발열 -38% + 적층 한계 16단 → 24단 확장 가능**==이라는 ==**구조적 우위**==를 ==**HBM4E 16단·HBM5(2027~2028) 세대**==에서 가져온다.

> "==**AMD의 삼성 주공급사 지명 + NVIDIA 동시 통과는 'SK하이닉스 70% 독점 구도의 본격 종료 신호'**==다. ==**삼성은 2027~2028년 HBM 시장 점유율 40% 이상 회복**==이 ==**구조적으로 가능**==하다."
> — Mehdi Hosseini, SIG 반도체 애널리스트 (5월 22일 글로벌이코노믹 코멘트)

---

## 메모리 슈퍼사이클 가속... 삼성·SK·마이크론 합산 영업이익 +84%

⚡ **메모리 3사의 슈퍼사이클 본격 진입**: TrendForce·IDC·Counterpoint 5월 21일 동시 발표한 ==**'2026년 DRAM ASP +22.4% / NAND +18.7% / HBM +35.8% 동반 상승'**==에 ==**삼성 HBM4 NVIDIA·AMD 동시 통과**==가 ==**5월 22일 추가 모멘텀**==으로 더해졌다. ==**삼성·SK하이닉스·마이크론 3사 합산 2026년 영업이익 +84% 가속**==이 ==**산업적 확정 시나리오**==로 ==**진입**==한다.

메모리 3사 2026년 영업이익 전망:

- **삼성전자 DS사업부**: ==**+92%**== (47조 원, HBM4 NVIDIA·AMD 동시 공급)
- **SK하이닉스**: ==**+118%**== (38조 원, HBM3E + HBM4 유지)
- **마이크론(Micron)**: ==**+76%**==
- **합산 영업이익**: ==**+84% 가속**==
- **2026년 HBM 시장 규모**: ==**912억 달러**== (+58%)

특히 ==**SK하이닉스의 NVIDIA HBM 점유율**==은 ==**기존 70% → 50%대 안 정착**==이 ==**산업 컨센서스**==로 ==**조정**==됐다. 다만 ==**SK하이닉스의 HBM3E 16단 단독 양산 + HBM4 1세대 우선 공급**==이 ==**'단기 1년 동안 매출 유지'**==를 ==**가능하게 한다**==.

> "==**삼성·SK 동반 슈퍼사이클**==은 ==**2008년 이후 최강**==이다. ==**SK하이닉스 200만 원 돌파 + 삼성 10만 원 회복**==이 ==**5~7월 안 동시 가능**==하며 ==**KOSPI 3,400 돌파 모멘텀**==이 ==**5월 22~6월 5일 사이 형성**==된다."
> — 박유악, 키움증권 반도체팀장 (5월 22일 리포트)

---

## 한국에 미치는 영향

### 1. 삼성전자 주가 10만 원 회복 6~7월 가능, KOSPI 3,400 돌파 모멘텀

==**5월 22일 KOSPI**==는 ==**삼성전자 HBM4 NVIDIA·AMD 동시 통과 + 6월 본격 공급 확정**==을 ==**핵심 모멘텀**==으로 ==**삼성전자 +4~6% 동반 강세 출발**==이 예상된다. ==**삼성전자 주가 10만 원 회복 6~7월 가능**==이 ==**산업 컨센서스**==로 ==**진입**==하며 ==**SK하이닉스 200만 원 돌파**==와 ==**동시 KOSPI 3,400 돌파 모멘텀**==이 ==**시장에 본격 형성**==.

### 2. 한미반도체·HPSP·동진쎄미켐·솔브레인 +5~9% 동반 강세

==**한미반도체(HBM 본딩 장비 1위)·HPSP(고압어닐링)·동진쎄미켐(EUV 소재)·솔브레인(에칭 화학)**==은 ==**5월 22일 오전 9시 +5~9% 동반 강세 출발 예상**==이다. ==**삼성 HBM4 NVIDIA·AMD 동시 공급 + HCB 기술 적용**==이 ==**'장비·소재 4사의 직접 수혜'**==로 ==**확정**==된다.

### 3. 전남 해남·평택 캠퍼스 HBM4 라인 추가 증설 6월 발표

==**삼성전자**==는 ==**5월 22일 사내 투자 위원회**==를 통해 ==**'평택 P4 캠퍼스 + 전남 해남 차세대 캠퍼스 HBM4 추가 라인 증설'**==을 ==**6월 정식 발표**==한다. ==**합산 추가 투자 5.2조 원**==이 ==**2026년 4분기 ~ 2027년 2분기 분기별 집행**==된다. ==**HBM4 월 생산능력 4만 장 → 8만 장 +100% 확장**==이 ==**2027년 1분기 완료 목표**==.

### 4. AMD MI400X·MI450 한국 출시 9~10월, 카카오·NAVER·SKT '추가 채택'

==**AMD MI400X·MI450(삼성 HBM4 탑재)**==는 ==**2026년 9~10월 한국 정식 출시**==가 ==**확정**==됐다. ==**카카오 i.GPT·NAVER 클로바 X·SKT A.X·LG EXAONE 4대 한국 LLM**==이 ==**'NVIDIA H200·B200 단독 의존 탈피 + AMD MI400X 추가 채택'**==을 ==**6~8월 안 검토 본격화**==한다. ==**한국 AI 인프라 다변화**==가 ==**2026년 하반기 주요 트렌드**==로 자리잡는다.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'삼성 HBM4 본격 공급'의 다음 시나리오**:

1. **5월 23~28일**: 삼성 ==**'AMD 주공급사 지명 + HBM4 본격 공급 정식 IR'**== 개최
2. **6월 1주차**: NVIDIA Blackwell Ultra B200 ==**HBM4 첫 출하 + AMD MI400X 2주차 출하**==
3. **6월 중순**: 삼성 ==**'평택 P4 + 해남 HBM4 증설 5.2조 투자 정식 발표'**==
4. **9~10월**: AMD MI400X·MI450 ==**한국 정식 출시 + LLM 4사 채택 발표**==
5. **2027년 1분기**: 삼성 ==**'HBM4E 16단 단독 양산 + HCB 본격 적용 발표'**==

⚠️ **한국 기업·정부 5월 22~29일 행동 체크리스트**:

1. ==**삼성전자 주가 10만 원 회복 6~7월 시나리오 + KOSPI 3,400 돌파 정량 검증**==
2. ==**한미반도체·HPSP·동진쎄미켐·솔브레인 +5~9% 동반 강세 검증**==
3. ==**삼성 평택 P4 + 해남 HBM4 5.2조 투자 6월 발표 일정 확인**==
4. ==**카카오·NAVER·SKT·LG AMD MI400X 6~8월 채택 검토 일정 추적**==
5. ==**SK하이닉스 NVIDIA HBM 점유율 70% → 50% 조정 시나리오 정량 검증**==

✅ **결론**: 삼성 HBM4 NVIDIA·AMD 동시 통과 + 6월 본격 공급은 ==**'SK하이닉스 70% 독점 구도의 본격 종료'**==와 ==**'삼성 DS사업부 영업이익 +92% 가속'**==의 ==**역사적 분기점**==이다. 한국 정부·KOSPI·삼성·SK하이닉스·반도체 장비·LLM 4사는 ==**5월 22~29일 안에 주가 회복·장비 수혜·증설 발표·LLM 다변화 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260522093005",title:"Fortune 500 76% CAIO 임명... 1년 +50%p, 'AI 경영' 의무화 한국도 7월 가이드라인",summary:"2,000여 글로벌 기업 대상 조사 결과 76%가 Chief AI Officer(CAIO)를 공식 임명한 것으로 5월 21일 확인됐다. 2025년 26%에서 +50%p 급증한 사상 최대 증가폭. 보드 차원의 AI 책임자 임명이 사실상 의무화 단계로 진입했다. 한국 금융위·산자부·과기정통부는 7월 'AI 경영 가이드라인' 합동 발표 예정. KOSPI 200 기업 CAIO 임명 의무화가 2027년 ESG 등급 평가에 반영된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-22T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",breaking:!1,content:`## Fortune 500 76% CAIO 임명... 1년 +50%p, 'AI 경영' 의무화 한국도 7월 가이드라인

==**CNBC와 Heidrick & Struggles 공동 조사**==(글로벌 2,038개 기업 대상)에 따르면 ==**76%의 기업이 Chief AI Officer(CAIO)를 공식 임명**==한 것으로 ==**2026년 5월 21일 확인**==됐다. ==**2025년 5월 조사(26%) 대비 +50%p 급증**==한 ==**사상 최대 증가폭**==이다. ==**보드(이사회) 차원의 AI 책임자 임명**==이 ==**사실상 의무화 단계로 진입**==했다.

📌 **핵심 인사이트**: Fortune 500 CAIO 임명 76%는 ==**'AI는 더 이상 IT 부서가 아닌 CEO 직속·이사회 책임 의제'**==라는 ==**산업적 합의**==가 ==**1년 만에 압도적 다수로 형성**==됐음을 의미한다. ==**한국 금융위·산자부·과기정통부**==는 ==**7월 'AI 경영 가이드라인' 합동 발표**==를 ==**확정**==. ==**KOSPI 200 기업 CAIO 임명 의무화**==가 ==**2027년 ESG 등급 평가에 반영**==된다.

글로벌 CAIO 임명 트렌드 5대 변화:

1. **CAIO 임명률**: ==**2025년 26% → 2026년 76% (+50%p)**==
2. **CAIO 평균 연봉**: ==**$1.2M~$2.8M(16~38억 원)**==
3. **이사회 직속 보고**: ==**전체 CAIO의 64%**== (CTO 산하가 아닌 CEO·이사회 직속)
4. **CAIO 출신 배경**: ==**ML 엔지니어 38% + 컨설팅 24% + 데이터사이언티스트 18% + 임원 출신 20%**==
5. **2027년 CAIO 임명률 전망**: ==**92% (Fortune 500 사실상 100%)**==

특히 ==**JP모건의 AI 코어 인프라 재분류(5월 20일)**==와 ==**Anthropic Claude for Small Business 출시(5월 13일)**==가 ==**CAIO의 책임 범위를 'R&D'에서 '핵심 운영 인프라'로 확장**==시킨 ==**결정적 분기점**==이다.

> "==**76%라는 수치는 '실험 단계 졸업'이 아닌 '의무화 단계 진입'을 의미**==한다. 이사회·주주가 ==**'AI 책임자가 없으면 거버넌스 결함'**==으로 ==**간주**==하기 시작했다."
> — Lyndon Taylor, Heidrick & Struggles 경영승계팀장 (5월 21일 CNBC 인터뷰)

---

## CAIO의 권한 확장... 'AI 윤리·리스크·예산·M&A' 4대 책임 정착

⚡ **CAIO의 권한이 4대 영역으로 확장**: 2025년 ==**'AI R&D 자문'**==에 머물렀던 CAIO는 ==**2026년 5월 기준 'AI 윤리 + AI 리스크 + AI 예산 + AI M&A' 4대 책임**==을 ==**동시 보유**==하는 ==**핵심 임원**==으로 진화했다. ==**연 평균 AI 예산 책정 권한 $4.8억(약 6,600억 원)**==이 ==**CAIO 단독 결재**==로 처리된다.

CAIO 4대 책임 영역(2026년 5월 기준):

- **AI 윤리·거버넌스**: ==**EU AI Act + 한국 AI 기본법 컴플라이언스 100% 책임**==
- **AI 리스크 관리**: ==**할루시네이션·편향·사이버보안 사고 책임**==
- **AI 예산 단독 결재**: ==**연 평균 $4.8억(6,600억 원) 권한**==
- **AI 스타트업 M&A**: ==**연 평균 2.3건·합산 $8.6억 인수합병 결재**==

특히 ==**EU AI Act(2026년 2월 전면 시행)**==와 ==**한국 AI 기본법(2026년 1월 시행)**==이 ==**CAIO 책임 범위를 법적으로 확정**==시키며 ==**'CAIO 부재 = 규제 위반 리스크'**==라는 ==**산업 신호**==가 ==**5월 22일 공식 확립**==됐다.

> "==**한국 KOSPI 200 기업의 CAIO 임명률**==은 ==**현재 32%로 글로벌 평균(76%) 대비 44%p 격차**==. ==**금융위 7월 가이드라인**==이 ==**2027년 ESG 등급 평가 반영**==으로 ==**연결**==되면 ==**KOSPI 200 기업의 CAIO 임명 의무화 사실상 강제 시행**==이 ==**1년 안 완료**==된다."
> — 김상민, 한국기업거버넌스연구원 본부장 (5월 22일 리포트)

---

## 한국에 미치는 영향

### 1. 금융위·산자부·과기정통부 7월 'AI 경영 가이드라인' 합동 발표 확정

==**금융위원회·산업통상자원부·과학기술정보통신부 3개 부처**==는 ==**5월 22일 합동 발표**==를 통해 ==**'한국형 AI 경영 가이드라인 7월 정식 발표'**==를 ==**확정**==했다. 핵심은 ==**'KOSPI 200 기업 CAIO 임명 권고 + 2027년 ESG 등급 평가 정식 반영'**==이다. ==**2027년 1월부터 CAIO 미임명 기업은 ESG 등급 -1단계 감점**==이 ==**자동 적용**==된다.

### 2. KOSPI 200 기업 CAIO 임명률 32% → 80% 6개월 내 급증, 헤드헌팅 시장 +280%

==**KOSPI 200 기업의 CAIO 임명률**==은 ==**현재 32%(64개 기업)에서 6개월 내 80%(160개 기업)로 +48%p 급증**==이 ==**산업 컨센서스**==. ==**한국 헤드헌팅 시장(컨라이언·휴넷·잡코리아 등 8대 헤드헌터)**==는 ==**'CAIO 임원급 헤드헌팅 의뢰 +280% 폭증'**==을 ==**5월 22일 동시 보고**==했다. ==**한국 CAIO 평균 연봉 12~24억 원**==이 ==**글로벌 평균 16~38억 원 대비 24% 격차**==.

### 3. 삼성·SK·LG·현대차 '그룹 차원 CAIO 통합 신설' 6월 동시 발표

==**삼성그룹(미래기획실)·SK그룹(SUPEX)·LG그룹(LG AI연구원)·현대차그룹(AI연구소)**==는 ==**5월 22일 사내 발표**==를 통해 ==**'그룹 차원 통합 CAIO 6월 동시 신설'**==을 ==**잠정 결정**==. ==**4대 그룹 합산 32~38명 신규 CAIO 직급 신설**==이 ==**6~8월 안 완료**==된다. ==**연봉 패키지 18~32억 원**==이 ==**글로벌 톱티어 수준**==으로 ==**확정**==.

### 4. 한국 AI 거버넌스 컨설팅 시장 +340% 폭증, 빅4 회계법인·삼정·한영·삼일 모두 신설

==**EY 한영·KPMG 삼정·PwC 삼일·Deloitte 안진 빅4 회계법인**==과 ==**Accenture·McKinsey·BCG·Bain 4대 글로벌 컨설팅펌**==은 ==**5월 22일 사내 발표**==를 통해 ==**'AI 거버넌스 컨설팅 신규 라인 동시 신설'**==을 ==**확정**==. ==**8사 합산 시장 규모 +340% 폭증, 2026년 매출 8,600억 원**==이 ==**KOSPI/외국계 컨설팅 시장에 본격 진입**==한다.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'CAIO 의무화 시대'의 다음 시나리오**:

1. **5월 22~30일**: KOSPI 200 기업 ==**'CAIO 임명 사전 공시' 5~12개사 동시 발표 가능성**==
2. **6월 중순**: 삼성·SK·LG·현대차 ==**'그룹 차원 통합 CAIO 정식 신설 발표'**==
3. **7월 안**: 금융위·산자부·과기정통부 ==**'한국형 AI 경영 가이드라인 정식 발표'**==
4. **9월**: KOSPI 200 기업 ==**'CAIO 임명률 60% 돌파' 중간 점검 발표**==
5. **2027년 1월**: ==**ESG 등급 평가에 CAIO 임명 정식 반영, 미임명 -1단계 감점 자동 적용**==

⚠️ **한국 기업·정부 5월 22~29일 행동 체크리스트**:

1. ==**금융위·산자부·과기정통부 7월 AI 경영 가이드라인 합동 발표 일정 사전 정보 수집**==
2. ==**KOSPI 200 기업 CAIO 임명률 32% → 80% 6개월 내 급증 정량 검증**==
3. ==**삼성·SK·LG·현대차 그룹 차원 통합 CAIO 6월 동시 신설 일정 확인**==
4. ==**빅4 회계법인 + 4대 컨설팅펌 AI 거버넌스 신규 라인 8,600억 매출 시나리오 검증**==
5. ==**한국 헤드헌팅 시장 CAIO 임원급 의뢰 +280% 폭증 정량 추적**==

✅ **결론**: Fortune 500 CAIO 임명률 76%는 ==**'AI는 더 이상 IT 부서가 아닌 이사회 책임 의제'**==라는 ==**산업적 합의가 1년 만에 압도적 다수로 형성**==됐음을 의미하는 ==**역사적 분기점**==이다. 한국 금융위·산자부·과기정통부·KOSPI 200 기업·4대 그룹·빅4 회계법인·8대 헤드헌터는 ==**5월 22~29일 안에 가이드라인 발표·CAIO 신설·헤드헌팅·컨설팅 라인업 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260521093001",title:"오픈AI 공동창업자 카르파시, 앤트로픽 사전학습 신팀 합류... 'AI가 AI를 학습시키는 시대'",summary:"Andrej Karpathy가 5월 19일 X 계정을 통해 Anthropic 사전학습팀(Nick Joseph 산하) 합류를 공식 발표했다. 4시간 만에 X 조회수 1,130만·좋아요 10.2만·리포스트 1.3만을 기록하며 올해 AI 업계 최대 인사 이슈로 떠올랐다. 동시 공개된 Anthropic 연환산 매출 300억 달러(1년 +233%)는 OpenAI 130억 달러의 2.3배다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-21T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",breaking:!0,content:`## 카르파시, 앤트로픽 사전학습 신팀 합류... '오픈AI 공동창업자의 청구서'

**Andrej Karpathy**가 ==**2026년 5월 19일(현지) 자신의 X 계정**==을 통해 ==**Anthropic 합류**==를 공식 발표했다. ==**OpenAI 공동창업자·테슬라 AI 디렉터·소형 모델 교육 신화**==의 ==**세 가지 정체성**==을 모두 가진 ==**그가 앤트로픽으로 향한 사건**==은 ==**4시간 만에 X 조회수 1,130만·좋아요 10.2만·리포스트 1.3만**==을 기록하며 ==**올해 AI 업계 최대 인사 이슈**==로 떠올랐다.

📌 **핵심 인사이트**: 카르파시는 ==**Anthropic 사전학습팀(Nick Joseph 산하)**==에 합류해 ==**'Claude를 활용해 사전학습 자체를 가속하는 메타-자동화 신팀'**==을 ==**6월 1일부터 가동**==한다. 이는 ==**'AI가 AI를 학습시키는 첫 산업 규모 적용'**==이 ==**OpenAI가 아닌 Anthropic에서 먼저 일어남**==을 의미한다.

카르파시 합류 후 앤트로픽 변화의 핵심:

1. **사전학습 신팀**: ==**Claude 4.5/5.0 베이스 모델 학습 파이프라인**==을 ==**Claude 자체로 자동 최적화**==
2. **데이터 큐레이션 자동화**: ==**기존 인력 60명 → 12명 + Claude 에이전트 200대**== 구조로 재편
3. **학습 비용 -37%**: ==**Claude Opus 5 학습 예상 비용**==이 ==**$4.1억 → $2.6억**==으로 절감 전망
4. **6월 인재 영입**: ==**Karpathy 동료 5~7명**== 추가 합류 예상 (Eureka Labs·Tesla AI 출신)
5. **2027년 1분기 'Claude Opus 5' 출시**: ==**카르파시 신팀이 첫 베이스 모델 책임**==

> "I'm joining Anthropic to work on pretraining under Nick Joseph. ==**The mission is to build a team that uses Claude itself to accelerate the science of training runs.**== This is the most exciting problem I've worked on since AlphaGo."
> — Andrej Karpathy, 5월 19일 X 공식 발표

---

## 앤트로픽 매출 300억 달러 돌파... 1년 새 +233% 폭발

⚡ **앤트로픽의 폭발 성장**: 2025년 12월 ==**연환산 매출(ARR) 90억 달러**==였던 앤트로픽은 ==**2026년 5월 기준 300억 달러 돌파**==를 ==**Bloomberg 단독 확인**==받았다. ==**1년 미만 +233% 성장**==은 ==**OpenAI ARR 130억 달러**==를 ==**2.3배 추월**==한 수치다.

앤트로픽 매출 구조(2026년 5월 기준):

- **엔터프라이즈 API**: ==**연 180억 달러**== (전체의 60%)
- **Claude Code/Enterprise**: ==**연 75억 달러**== (전체의 25%)
- **API 트래픽(스타트업)**: ==**연 30억 달러**== (전체의 10%)
- **컴퓨터 사용·법무 등 신규**: ==**연 15억 달러**== (전체의 5%)

특히 ==**컴퓨터 사용(Computer Use) ARR**==이 ==**2025년 말 2.3억 달러 → 2026년 5월 12억 달러**==로 ==**+421% 성장**==하며 ==**OpenAI Operator($200/월·1.1억 달러 ARR 추정)**==를 ==**10배 이상 추월**==한 것으로 확인됐다.

> "앤트로픽이 ==**카르파시를 영입했다는 사실**==은 ==**OpenAI에 '인재 전쟁'을 정조준한 선언**==이다. Demis Hassabis도 ==**비슷한 시기에 DeepMind 측에 영입 제의를 했을 가능성**==이 매우 높다."
> — Casey Newton, Platformer (5월 20일 분석)

---

## 한국에 미치는 영향

### 1. NAVER·LG AI연구원·SKT, '카르파시 메서드' 한국어 LLM 즉시 검토

==**NAVER HyperCLOVA X 3.0팀**==은 ==**5월 21일 사내 긴급 메모**==를 통해 ==**'Claude로 학습 가속 + 사전학습 자동화'**== 기법을 ==**HyperCLOVA X 4.0(2026년 11월 출시 예정)**==에 ==**부분 적용 검토**==를 지시했다. ==**LG AI연구원 EXAONE 4.0**==·==**SKT A.X K2**==도 ==**'데이터 큐레이션 자동화 + 학습 비용 -30%'**== 시뮬레이션을 ==**6월 안에 완료**==한다는 ==**3사 공통 로드맵**==이 윤곽을 드러냈다.

### 2. 카르파시 'Eureka Labs' 한국어 코스 6월 1일 정식 출시

==**Karpathy가 2024년 설립한 Eureka Labs**==는 ==**LLM 교육 신화**==를 ==**한국어로 정식 출시**==하는 작업을 ==**2026년 6월 1일부터 한국어 자막 + 한국 대학(서울대·KAIST·POSTECH) 교재 무료 라이선싱**==으로 전환한다. ==**서울대 자연과학대·KAIST AI대학원**==은 ==**'카르파시 LLM 코스 한국어판'**==을 ==**2026년 2학기 정식 과목**==으로 채택했다.

### 3. AI 인재 전쟁의 '한국 인재 유출' 신호

카르파시 합류 직후 ==**Anthropic Recruiting**==이 ==**서울·도쿄·싱가포르 3개 지역 채용 공고를 +37% 확대**==했다. ==**연봉 패키지**==는 ==**시니어 ML 엔지니어 기준 $850K~$1.2M(11~16억 원)**==으로 ==**NAVER·KaKao 동급 직무 대비 4.2~5.8배**==다. ==**5월 21일 LinkedIn 한국 사용자 기준 '앤트로픽 입사 의사' 클릭**==이 ==**전일 대비 +1,940%**==를 기록한 것은 ==**'한국 시니어 AI 인재 미국 유출 가속'**==을 예고하는 시그널이다.

### 4. KOSPI Anthropic 협력 종목 +3~6% 동반 강세 출발

==**Anthropic의 Tier 1 한국 파트너**==인 ==**SKT(Claude Korea 호스팅)·LG CNS(Claude Enterprise 도입 컨설팅)·삼성SDS(Claude API 리셀러)**==는 ==**5월 20일 종가 대비 +3~6% 동반 강세 출발**==이 예상된다. ==**Anthropic-삼성전자 메모리 협력**==이 ==**6월 중 추가 발표될 가능성**==도 ==**카르파시 합류 이후 시장 모멘텀**==으로 거론된다.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'AI 인재 전쟁'의 다음 시나리오**:

1. **5월 22일**: OpenAI Sam Altman ==**'우리도 카르파시급 영입 발표 곧'**== 트윗 가능성
2. **5월 말**: Google DeepMind ==**'카르파시 동료급 3~5명 동시 영입'**== 카운터 가능성
3. **6월 1주차**: Anthropic ==**'Claude Opus 5 베타 한정 공개'**== 가속화
4. **6월 중순**: ==**카르파시 신팀 첫 사전학습 가속 결과**== 사내 발표 예상
5. **9월~11월**: ==**Claude Opus 5 정식 출시**== + ==**Gemini 5.0/GPT-6와의 정면 경쟁**==

⚠️ **한국 기업·정부 5월 21~28일 행동 체크리스트**:

1. ==**NAVER·LG·SKT 한국어 LLM에 '카르파시 메서드' 부분 도입 시뮬레이션 완료**==
2. ==**Eureka Labs 한국어판 6월 1일 정식 출시 대학 채택 일정 확정**==
3. ==**Anthropic-삼성전자 메모리 협력 6월 발표 가능성**== 사전 정보 수집
4. ==**한국 시니어 AI 인재 유출 방지 패키지(연봉 +40% 가산)**== 4대 기업 동시 발표 검토
5. ==**Claude Korea 호스팅 6월 정식 가동 후 SKT·KT·LG U+ 매출 영향도 분석**==

✅ **결론**: 카르파시의 앤트로픽 합류는 ==**단순 인사 이슈가 아닌 'AI가 AI를 학습시키는 시대' 첫 산업 규모 적용**==을 ==**OpenAI가 아닌 Anthropic이 선점**==한 결정적 이벤트다. 한국 기업과 정부는 ==**향후 7일 안에 사전학습 자동화·인재 유출 방지·매출 영향 3축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260521093002",title:"JP모건 2026 IT 예산 198억 달러 확정... AI를 '코어 인프라' 재분류, Wall Street 첫 사례",summary:"JPMorgan Chase가 2026년 IT 예산 198억 달러(약 27.4조 원)를 5월 20일 주주서한으로 공식 확정 발표했다. 핵심은 AI 지출을 R&D 실험성 비용에서 데이터센터·결제망·리스크 컨트롤과 동급의 코어 인프라로 재분류한 것이다. 비재량(non-discretionary) AI 예산이 연 20억 달러로 정식 회계 처리된다. 15만 명 직원 생산성 +10~11% 입증.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-21T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",breaking:!1,content:`## JP모건 2026 IT 예산 198억 달러 확정... AI '코어 인프라' 재분류 단행

==**JPMorgan Chase**==가 ==**2026년 IT 예산 198억 달러(약 27.4조 원)**==를 ==**5월 20일(현지) 주주서한**==으로 공식 확정 발표했다. 핵심은 ==**'AI 지출을 R&D 실험성 비용에서 데이터센터·결제망·리스크 컨트롤과 동급의 코어 인프라로 재분류'**==한 것이다. ==**비재량(non-discretionary) AI 예산**==이 ==**연 20억 달러(2.8조 원)**==로 ==**정식 회계 처리**==된다.

📌 **핵심 인사이트**: ==**JP모건의 'AI 코어 인프라 재분류'**==는 ==**세계 최대 자산은행이 AI를 '실험 단계 졸업'시킨 첫 사례**==다. ==**골드만삭스·시티·뱅크오브아메리카**==가 ==**2026년 3분기 안에 같은 재분류**==를 ==**모방할 가능성**==이 매우 높다.

JP모건 2026 IT 예산 198억 달러 구조(전년 대비 +10%):

1. **AI 코어 인프라**: ==**연 20억 달러**== (비재량 처리)
2. **데이터센터 확장**: ==**연 48억 달러**==
3. **결제·트레이딩 시스템**: ==**연 52억 달러**==
4. **사이버 보안·리스크**: ==**연 38억 달러**==
5. **신규 AI 프로젝트 추가 증액**: ==**연 12억 달러**==

특히 ==**증액분 12억 달러**==는 ==**고객 서비스 챗봇·고객 인사이트 분석·내부 코딩 AI 어시스턴트**==에 집중 투입된다.

> "We've moved AI from 'innovation bet' to 'utility'. ==**It's now treated like electricity in our budget — you don't ask the CFO every quarter if you need power.**=="
> — Jamie Dimon, JPMorgan Chase CEO (5월 20일 주주서한)

---

## AI 운영비 자체 회수 + 생산성 +10~11% 인증

⚡ **AI 도입의 ROI 산업 표준급 데이터**: JP모건은 ==**AI 투자 비용 20억 달러 전액을 'AI 도입으로 인한 운영비 절감(연 20억 달러)'으로 자체 회수**==했다고 밝혔다. ==**15만 명 직원 기준 평균 생산성 +10~11%**==이 ==**엔지니어링·운영·사기 탐지 3대 부서**==에서 ==**객관적으로 측정**==됐다.

JP모건 AI 적용 500+ 현장 분석:

- **사기 탐지**: ==**연 8.2억 달러 손실 방지**==, 탐지율 +29%
- **투자은행 IB 덱 자동 생성**: ==**애널리스트 한 명당 주 18시간 절감**==
- **컴플라이언스 리뷰**: ==**리뷰 처리 시간 -67%**==
- **유동성 예측**: ==**일일 유동성 변동 예측 정확도 +34%**==
- **고객 인사이트 분석**: ==**개인 고객 ARPU +12%**==

> "==**JP모건의 자체 회수 사례**==는 ==**'AI는 비용이 아닌 인프라'**==라는 ==**Wall Street의 새 표준**==을 세웠다. 6개월 안에 ==**골드만삭스·모건스탠리·시티**==가 ==**같은 구조의 재분류**==를 발표할 것이다."
> — Toni Sacconaghi, Bernstein 애널리스트 (5월 20일 분석)

---

## 한국에 미치는 영향

### 1. KB·신한·하나·우리 4대 금융, '6월 이사회 AI 코어 재분류' 안건 상정

==**KB금융·신한금융·하나금융·우리금융 4대 지주**==는 ==**5월 21일 사내 IT 전략실 긴급 회의**==를 통해 ==**JP모건과 같은 'AI 코어 인프라 재분류' 안건**==을 ==**6월 정기 이사회**==에 상정하기로 잠정 결정했다. ==**연 1.2조 원 규모(4사 합산)**==의 ==**AI 비재량 예산**==이 ==**2026년 3분기부터 정식 회계 처리**==될 가능성이 높다.

### 2. NAVER 클로바 X·SKT A.X 엔터프라이즈 매출 +35% 가속

==**JP모건 모델**==이 ==**한국 금융권 전반에 모방**==되면 ==**NAVER 클로바 X Enterprise·SKT A.X for Finance·KaKao Bank AI Stack**==의 ==**2026년 연 매출 +35%**== 가속이 예상된다. ==**미래에셋증권 IT 섹터팀**==은 ==**'NAVER 클로바 X B2B 매출 2026년 4분기 분기 1,200억 원 돌파'**==를 ==**5월 21일 리포트**==로 상향 조정했다.

### 3. 한국 핀테크 스타트업 '금융 AI 어시스턴트' 시리즈 B 대거 가속

==**JP모건 AI 도입 효과 입증**== 이후 ==**토스·뱅크샐러드·핀크·페이코·NH투자증권 등 한국 핀테크**==는 ==**'금융 AI 어시스턴트 시리즈 B/C 라운드'**==를 ==**6~7월 안에 동시 추진**==한다. ==**총 라운드 규모 8,400억 원**==이 ==**5월 28일 ~ 6월 30일 사이 시장 진입 예고**==.

### 4. KIS·NICE·KCB 신용정보 3사 '실시간 사기 탐지 AI' 매출 확장

==**JP모건 사기 탐지 +29%**== 효과 발표 이후 ==**한국 신용정보회사 KIS·NICE·KCB**==는 ==**'실시간 사기 탐지 AI 모듈'**==을 ==**KB·신한·하나·우리 4대 은행 대상 6월 추가 영업**==한다. ==**연 매출 추가 2,800억 원**==이 ==**3분기 안 확정 전망**==.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'AI는 코어 인프라'의 다음 시나리오**:

1. **5월 22일**: 골드만삭스 ==**'JP모건 모델 6월 안 모방'**== 사내 메모 유출 가능성
2. **6월 중순**: KB금융 ==**'AI 코어 재분류 정식 발표'**== 한국 첫 사례
3. **7월**: 모건스탠리·뱅크오브아메리카 ==**'AI 비재량 예산 동시 발표'**==
4. **9월**: 한국 4대 금융 ==**'AI 코어 인프라 총 1.2조 원'**== 동시 확정 발표
5. **11월**: ==**JP모건 AI 코어 인프라 1년 운영 결과**== 정량 평가 보고서 공개

⚠️ **한국 기업·정부 5월 21~28일 행동 체크리스트**:

1. ==**KB·신한·하나·우리 6월 이사회 AI 코어 재분류 안건 사전 정보 수집**==
2. ==**NAVER 클로바 X B2B 매출 4분기 1,200억 돌파 시나리오 검증**==
3. ==**한국 핀테크 시리즈 B/C 8,400억 원 라운드 일정 사전 확인**==
4. ==**KIS·NICE·KCB 사기 탐지 AI 매출 추가 2,800억 시나리오 추적**==
5. ==**금융위 'AI 코어 인프라' 비재량 회계 인정 가이드라인 6월 발표 압박**==

✅ **결론**: JP모건의 AI 코어 인프라 재분류는 ==**Wall Street의 AI 회계 표준을 'R&D 졸업' 단계로 격상**==한 ==**역사적 분기점**==이다. 한국 4대 금융·핀테크·신용정보회사는 ==**5월 21~28일 안에 AI 비재량 회계 채택, 매출 가속, 시리즈 B/C 라운드 3축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260521093003",title:"OpenAI 'o1' 응급실 의사 진단력 추월... Science 본지 게재, 임상 데이터 76건 분석",summary:"하버드 의대·베스 이스라엘 디코니스 메디컬센터 연구팀이 OpenAI의 o1-preview 모델이 응급실 의사들의 진단력을 객관적으로 추월했다는 대규모 임상 비교 연구를 4월 30일 Science 본지에 정식 게재했다. 보스턴 응급실 환자 76명의 실제 차트 데이터에서 o1은 78.9%의 정확 진단 포함률을 기록, 전문의 62.8%·GPT-4 56.4%를 압도했다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-21T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",breaking:!1,content:`## OpenAI 'o1' 응급실 의사 진단력 추월... Science 게재 정식 임상 데이터 76건 분석

==**하버드 의대·베스 이스라엘 디코니스 메디컬센터 연구팀**==이 ==**OpenAI의 o1-preview 모델이 응급실 의사들의 진단력을 객관적으로 추월**==했다는 ==**대규모 임상 비교 연구**==를 ==**2026년 4월 30일 Science 본지에 정식 게재**==했다. ==**보스턴 응급실 환자 76명의 실제 차트 데이터**==를 ==**o1 모델·GPT-4·12명의 응급실 전문의가 동일 조건에서 진단**==한 결과다.

📌 **핵심 인사이트**: o1 모델은 ==**'정확한 진단을 후보 답변에 포함시킬 확률'**==에서 ==**전문의를 통계적으로 유의미한 차이**==로 추월했다. ==**고전적 의학 교육 사례 + 실제 응급실 차트**==를 ==**동일 조건**==으로 평가한 ==**첫 Science 본지 게재 임상 연구**==다.

연구 핵심 결과(76건 임상 케이스):

1. **o1 모델 정확 진단 포함률**: ==**78.9%**== (96/121건 진단 후보 중)
2. **응급실 전문의 평균**: ==**62.8%**==
3. **GPT-4 평균**: ==**56.4%**==
4. **응급 치료 우선순위 정확도**: o1 ==**81.6%**== vs 전문의 ==**74.3%**==
5. **희귀 질환 식별률**: o1 ==**67.1%**== vs 전문의 ==**51.4%**==
6. **약물 상호작용 위험 식별**: o1 ==**94.7%**== vs 전문의 ==**88.2%**==

> "==**o1 모델이 의사를 대체할 수 있다는 것이 아니다.**== 하지만 ==**의사의 진단 과정을 지원하는 신뢰할 만한 동반자**==가 될 수 있음을 ==**객관적 데이터로 입증**==했다. 임상 워크플로우에 ==**조심스러운 통합 시도가 임상시험 단계로 진입**==할 시점이다."
> — Dr. Adam Rodman, 하버드 의대 (Science 논문 책임 저자)

---

## 'Reasoning 모델 시대'의 시작점... GPT-4 대비 +22.5%p

⚡ **추론 모델(Reasoning Model)의 임상 적용 가능성**: o1-preview의 ==**복잡한 문제 단계별 추론 능력**==이 ==**GPT-4 대비 +22.5%p**==의 ==**진단 정확도 격차**==를 만들어냈다. ==**기존 GPT-4는 한 번에 결론으로 직행**==했지만 ==**o1은 의사의 사고 과정을 모방한 단계별 추론**==을 수행한다.

연구 방법론 핵심:

- **임상 케이스**: ==**보스턴 응급실 실제 환자 76명 차트**==
- **클래식 케이스**: ==**의대 교과서 진단 사례 45건 추가**==
- **블라인드 평가**: ==**12명 응급실 전문의 vs o1 vs GPT-4 동일 조건**==
- **평가 지표**: ==**진단 포함률·우선순위·희귀질환·약물상호작용 4축**==
- **통계 검증**: ==**p < 0.001로 유의미한 격차 확인**==

> "==**Reasoning 모델의 실세계 진단 능력**==이 ==**전문의를 추월한 것**==은 ==**의료 AI의 패러다임 전환점**==이다. ==**FDA가 임상시험 가이드라인**==을 ==**2026년 안에 정식 개정**==할 가능성이 매우 높다."
> — Dr. Eric Topol, 스크립스 연구소 (5월 20일 STAT 코멘트)

---

## 한국에 미치는 영향

### 1. 식약처, 'AI 진단 보조' 임상시험 가이드라인 6월 개정 가속

==**식약처(MFDS) 의료기기 AI 평가팀**==은 ==**5월 21일 긴급 회의**==를 통해 ==**'AI 추론 모델의 임상 보조 진단' 임상시험 가이드라인 개정안**==을 ==**6월 안에 행정 예고**==한다. 핵심은 ==**'Reasoning 모델의 진단 후보 제시 정확도 평가 표준'**==을 ==**Science 논문 방법론에 맞춰 한국형으로 도입**==하는 것이다.

### 2. 서울대병원·삼성서울병원·세브란스 'AI 응급 진단 보조' 6월 임상 도입

==**서울대학교병원 응급의학과·삼성서울병원 응급의료센터·세브란스 응급실**==은 ==**5월 21일 합동 발표**==를 통해 ==**'o1 모델 기반 AI 응급 진단 보조 시스템'**==을 ==**6월 정식 도입**==한다고 밝혔다. ==**환자 트리아지 + 진단 후보 자동 제시 + 약물 상호작용 알림**==이 ==**3개 병원 응급실 동시 가동**==된다.

### 3. 루닛·뷰노·뉴로핏 한국 의료 AI 3사 +30% 가속 모멘텀

==**루닛(Lunit)·뷰노(Vuno)·뉴로핏(Neurophet)**==은 ==**Science 게재 임상 데이터 발표**== 이후 ==**'Reasoning 기반 진단 보조' 신규 라인**==을 ==**6~7월 안에 출시 발표**==한다. ==**시리즈 D/IPO 라운드 9,200억 원**==이 ==**3분기 안 시장 진입 예상**==. ==**5월 21일 KOSDAQ 의료 AI 섹터**==는 ==**평균 +3~7% 동반 상승**== 출발이 예상된다.

### 4. 의사·환자 단체 '의료 AI 책임 소재' 가이드라인 협의체 6월 가동

==**대한의사협회·한국환자단체연합·한국의료법학회**==는 ==**5월 21일 공동 입장문**==을 통해 ==**'AI 진단 보조의 법적 책임 소재' 가이드라인 협의체**==를 ==**6월 정식 가동**==한다고 발표했다. ==**'AI 오진 시 의사 책임 vs AI 책임 vs 병원 책임' 3축 분담 기준**==이 ==**7월 1차 안 도출 예정**==.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'AI 추론 모델 임상 적용'의 다음 시나리오**:

1. **5월 말**: FDA ==**'Reasoning 모델 임상 가이드라인 6월 1차 안'**== 공개 가능성
2. **6월 초**: 식약처 ==**'한국형 AI 진단 가이드라인 행정 예고'**== 첫 공개
3. **6월 중순**: 서울대병원·삼성·세브란스 ==**'AI 응급 진단 6월 도입'**== 정식 가동
4. **7월**: 루닛·뷰노 ==**'Reasoning 기반 진단 보조 신규 라인'**== 출시
5. **9월~11월**: ==**대한의협 의료 AI 책임 소재 가이드라인 정식 확정**==

⚠️ **한국 기업·정부 5월 21~28일 행동 체크리스트**:

1. ==**식약처 AI 임상시험 가이드라인 개정안 6월 행정 예고 일정 확인**==
2. ==**서울대·삼성·세브란스 6월 AI 응급 진단 도입 일정 추적**==
3. ==**루닛·뷰노·뉴로핏 6월 신규 라인 출시 발표 시점 추적**==
4. ==**시리즈 D/IPO 9,200억 라운드 일정 사전 확인**==
5. ==**대한의협·환자단체 AI 책임 소재 협의체 6월 가동 일정 사전 확인**==

✅ **결론**: OpenAI o1 모델의 응급실 의사 진단력 추월은 ==**Science 본지 게재로 임상 신뢰성을 정식 확보**==한 ==**AI 의료의 패러다임 전환점**==이다. 한국 식약처·서울대병원·의료 AI 기업·의사단체는 ==**5월 21~28일 안에 가이드라인 개정·임상 도입·신규 라인 출시·책임 소재 협의 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260521093004",title:"정부, 업스테이지에 5,600억 직접 투자 확정... 국가성장펀드 'AI 주권' 두 번째 베팅",summary:"금융위원회 국가성장펀드 운용위원회가 5월 21일 정기 회의에서 한국 AI 스타트업 업스테이지(Upstage)에 5,600억 원(3.806억 달러) 직접 투자를 공식 의결했다. 국가성장펀드의 두 번째 직접 투자이자 유니콘 단일 베팅 사상 최대 규모. 고도전략산업 펀드 1,000억 원이 별도 투입돼 기업용 LLM 개발에 집중된다. 4월 누적 승인 8.4조 원(약 57억 달러).",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-21T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",breaking:!0,content:`## 정부, 업스테이지에 5,600억 투입 확정... 국가성장펀드 'AI 주권' 두 번째 베팅

==**금융위원회 국가성장펀드 운용위원회**==가 ==**5월 21일 정기 회의**==에서 ==**한국 AI 스타트업 업스테이지(Upstage)에 5,600억 원(3.806억 달러) 직접 투자**==를 ==**공식 의결**==했다. ==**국가성장펀드의 두 번째 직접 투자**==이자 ==**유니콘 기업 단일 베팅 사상 최대 규모**==다. ==**고도전략산업 펀드 1,000억 원(6,790만 달러)**==이 ==**별도 투입**==되며 ==**기업용 LLM·파운데이션 모델 개발**==에 우선 집중된다.

📌 **핵심 인사이트**: 정부의 업스테이지 직접 투자 5,600억 원은 ==**'AI 주권(Sovereign AI)' 전략의 첫 산업급 베팅**==이다. ==**Gemini 4.0·GPT-5.5·Claude Opus 4.5**==가 ==**한국어 정확도 90점대 진입**==한 ==**5월 20일 이후**==, ==**'한국어 LLM 자주권 사수'**==가 ==**국가성장펀드의 최우선 과제**==로 격상됐다.

국가성장펀드 4월 누적 승인 8.4조 원(약 57억 달러) 분배:

1. **국가 AI 컴퓨팅 센터(GPU 1.5만 장)**: ==**1.4조 원**==
2. **업스테이지 직접 투자**: ==**5,600억 원**== (오늘 의결)
3. **고도전략산업 펀드(Upstage 보강)**: ==**1,000억 원**==
4. **에너지·소재 분야**: ==**1.8조 원**==
5. **기타 AI 스타트업 4개사**: ==**3.5조 원**==

전체 ==**8.4조 원**== 승인 + ==**2025년 12월 1.5조 원**== = 누적 ==**9.9조 원(약 71억 달러)**==.

> "==**Upstage는 한국 유일의 LLM 유니콘**==이며, ==**Solar 모델은 한국어 정확도에서 글로벌 최상위권**==이다. ==**5,600억 원 직접 투자**==는 ==**'한국어 AI 주권'의 산업급 첫 베팅**==이며, ==**6~12개월 안에 추가 2~3개사 직접 투자**==가 ==**연속 의결**==될 것이다."
> — 김주현 금융위원장 (5월 21일 정기 회의 발언)

---

## Upstage Solar 4.0 6월 1주차 출시... GPT-5.5와 정면 격돌

⚡ **'Solar 4.0'의 한국어 90점대 진입**: 업스테이지는 ==**5,600억 원 자금 조달 확정 직후**==인 ==**6월 첫째 주 'Solar 4.0' 정식 출시**==를 ==**5월 21일 사내 발표**==를 통해 확인했다. ==**한국어 MMLU 91.4점·KOBEST 종합 89.7점·HellaSwag-KO 92.3점**==으로 ==**GPT-5.5(한국어 88.7점) + Gemini 4.0(89.2점) 동시 추월**==이 예상된다.

Upstage Solar 4.0 핵심 사양:

- **모델 크기**: ==**107B 파라미터**== (Solar 3.0 = 70B)
- **한국어 MMLU**: ==**91.4점**== (GPT-5.5 88.7 / Gemini 4.0 89.2)
- **컨텍스트 길이**: ==**256K 토큰**==
- **API 가격**: ==**입력 $1.20/M, 출력 $4.80/M**== (Gemini 4.0 Pro 대비 -33%)
- **무료 API 한도**: ==**일 200만 토큰**==
- **금융·법무·의료 특화 어댑터**: ==**12종 동시 출시**==

> "==**Solar 4.0**==는 ==**'한국어 1위'와 '가격 경쟁력' 두 마리 토끼**==를 ==**동시 사냥**==한다. ==**Gemini 4.0 가격 -40% 인하**== 직후 일주일 만에 ==**한국 토종 LLM이 가격에서도 -33% 경쟁력**==을 ==**증명**==한 것은 ==**산업적 의미가 매우 크다**==."
> — 김성훈 업스테이지 CEO (5월 21일 사내 메모)

---

## 한국에 미치는 영향

### 1. KOSDAQ AI 섹터 +5~9% 동반 강세, Upstage 기업 가치 1.8조 원 진입

==**5월 21일 KOSDAQ AI 섹터**==는 ==**Upstage 5,600억 투자 확정 + Solar 4.0 출시 임박**==이 ==**시장 모멘텀**==으로 작용해 ==**오전 9시 +5~9% 동반 강세 출발**==이 예상된다. ==**Upstage 비공개 기업 가치**==는 ==**기존 1.0조 원에서 1.8조 원**==으로 ==**80% 상향**==이 ==**6월 1주차 IR**==에서 공식화될 가능성이 매우 높다.

### 2. NAVER·LG·SKT '한국어 90점대' 경쟁 격화, 6월 동시 발표 가속

==**Upstage Solar 4.0 91.4점 진입**== 이후 ==**NAVER HyperCLOVA X 3.0(89.7점)·LG EXAONE 3.5(87.4점)·SKT A.X K1(85.2점)**==은 ==**'한국어 90점대' 모델 신버전 6월 동시 발표**==를 ==**5월 21일 사내 회의**==에서 결정했다. ==**'한국어 1위 자리'**==를 둘러싼 ==**4사 동시 출시 전쟁**==이 ==**6월 1~3주차 사이 격화**==된다.

### 3. 전남 해남 AI 컴퓨팅 센터 1.5만 GPU + Upstage 우선 사용권 6월 합의

==**전남 해남 국가 AI 컴퓨팅 센터(NVIDIA H200 + Blackwell B200 합산 1.5만 장)**==는 ==**6월 합의서**==를 통해 ==**Upstage가 전체 GPU의 18~22% 우선 사용권 6개월 보장**==을 ==**확정**==한다. ==**Solar 5.0(2027년 1분기 예정)**==의 ==**학습 비용 -40% 절감**==이 ==**국가 인프라 무상 사용권**==으로 가능해진다.

### 4. 한국 AI 스타트업 후속 직접 투자 3~5개사 7~9월 줄지어 의결

==**금융위 국가성장펀드 운용위**==는 ==**5월 21일 회의 직후 비공식 브리핑**==에서 ==**'업스테이지에 이어 7~9월 안에 3~5개 한국 AI 유니콘에 직접 투자 의결'**==을 ==**시사**==했다. 후보군은 ==**스캐터랩(Pingpong)·트웰브랩스(Twelve Labs)·뤼튼(Wrtn)·마키나락스·라이너(Liner)·코난테크놀로지**==로 ==**총 1.2~1.8조 원**== 추가 직접 투자가 ==**3분기 안 확정 전망**==.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'AI 주권 베팅'의 다음 시나리오**:

1. **5월 22일**: Upstage 5,600억 자금 ==**공식 입금**== + ==**Solar 4.0 사전 베타**== 일부 공개
2. **6월 1주차**: Solar 4.0 정식 출시 + ==**Upstage 기업 가치 1.8조 원 진입 IR**==
3. **6월 중순**: NAVER·LG·SKT ==**'한국어 90점대' 신버전 동시 출시**==
4. **7~9월**: 국가성장펀드 ==**3~5개 AI 유니콘 직접 투자 줄지어 의결**==
5. **11월**: 정부 ==**'AI 주권 1주년' 종합 평가 보고서**== 공식 발표

⚠️ **한국 기업·정부 5월 21~28일 행동 체크리스트**:

1. ==**Upstage Solar 4.0 6월 1주차 출시 일정 사전 검증**==
2. ==**NAVER·LG·SKT '한국어 90점대' 6월 동시 출시 일정 확인**==
3. ==**전남 해남 AI 컴퓨팅 센터 18~22% GPU 사용권 6월 합의 일정 추적**==
4. ==**스캐터랩·트웰브랩스·뤼튼 등 후속 직접 투자 7~9월 의결 일정 사전 정보 수집**==
5. ==**KOSDAQ AI 섹터 +5~9% 동반 강세 정량 검증 + 6월 1주차 IR 일정 확인**==

✅ **결론**: 정부의 업스테이지 5,600억 원 직접 투자는 ==**'한국 AI 주권'의 첫 산업급 베팅**==이며 ==**Solar 4.0의 한국어 91.4점 진입**==과 ==**6월 출시 일정 확정**==으로 ==**Gemini 4.0·GPT-5.5와의 정면 경쟁 시대**==를 ==**한국 토종 LLM이 본격 진입**==했음을 알리는 결정적 이벤트다. 한국 정부·NAVER·LG·SKT·AI 스타트업은 ==**5월 21~28일 안에 모델·자본·인프라·후속 투자 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260521093005",title:"AI 칩 부족 후폭풍, 2026 스마트폰 6.9%·PC 8% 가격 인상... 저가 브랜드 직격탄",summary:"대만 TrendForce·IDC·Counterpoint Research 3사 공동 보고서가 5월 21일 동시 발표됐다. AI 가속기·HBM 메모리·5nm 이하 첨단 노드 부족이 2026년 스마트폰 평균 가격을 +6.9%, PC 가격을 +8.0% 인상시킬 것이라는 전망. 게임 콘솔 PS6/Xbox 신형은 +12.4% 인상, 저가 브랜드 Xiaomi·Realme·Tecno는 +9.8~12.3% 가격 직격탄. 메모리 3사 영업이익 +84% 가속.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-21T09:30:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800",breaking:!1,content:`## AI 칩 부족 후폭풍, 2026 스마트폰 6.9%·PC 8% 가격 인상... 저가 브랜드 직격탄

==**대만 시장조사기관 TrendForce + IDC + Counterpoint Research 3사 공동 보고서**==가 ==**5월 21일 동시 발표**==한 핵심 결과는 ==**AI 가속기·HBM 메모리·5나노 이하 첨단 노드 부족이 2026년 스마트폰 평균 가격을 +6.9%, PC 가격을 +8.0% 인상**==시킬 것이라는 ==**대량 모형 시뮬레이션**==이다. ==**게임 콘솔 PS6/Xbox 신형**==은 ==**+12.4% 인상**==이 ==**11월 출시 가격에 직접 반영**==된다.

📌 **핵심 인사이트**: ==**AI 칩 부족 → 첨단 노드 점유 → 모바일·PC·게임기 칩 부족 → 가격 인상**==의 ==**4단계 도미노 효과**==가 ==**TrendForce·IDC·Counterpoint 3사 동시 확인**==으로 ==**산업적 합의**==가 형성됐다. ==**저가 브랜드 Xiaomi·Realme·Tecno**==는 ==**+9.8~12.3% 가격 인상**==으로 ==**중·저가 시장 직격탄**==이 예고됐다.

2026년 카테고리별 평균 가격 인상 전망:

1. **스마트폰 글로벌 평균**: ==**+6.9%**== ($482 → $515)
2. **PC(노트북+데스크톱) 평균**: ==**+8.0%**==
3. **게임 콘솔(PS6/Xbox 신형)**: ==**+12.4%**==
4. **태블릿**: ==**+5.2%**==
5. **스마트워치**: ==**+3.8%**==
6. **저가 안드로이드 폰**: ==**+9.8~12.3%**== (Xiaomi·Realme·Tecno)

==**아이폰 17 Pro Max(2026년 9월 출시)**==는 ==**+5.4% 인상**==으로 ==**$1,299 → $1,369**==이 ==**확정적 시나리오**==다.

> "==**AI 칩 수요 폭증이 모바일·PC·게임기 칩 공급망의 잔여 여유를 모두 흡수**==했다. ==**2026년 하반기 ~ 2027년 상반기**==는 ==**'AI 가속기 우선 + 컨슈머 후순위'**==의 ==**구조적 가격 인상기**==다. 저가 브랜드는 ==**이익률 -3~5%p**==의 ==**구조 압박**==을 견뎌야 한다."
> — TrendForce 첨단 노드 분석가 (5월 21일 보고서)

---

## 삼성·SK하이닉스 메모리 '결정적 수혜', 코스피 +1.5% 동반 강세

⚡ **메모리 3사의 ASP +18~36% 상승 직격**: ==**TrendForce·IDC·Counterpoint**==는 ==**2026년 DRAM ASP +22.4%, NAND ASP +18.7%, HBM ASP +35.8% 동반 상승**==을 ==**공동 전망**==했다. ==**삼성전자·SK하이닉스·마이크론 3사**==는 ==**2026년 합산 영업이익 +84% 가속**==이 ==**확실시**==된다.

메모리 3사 2026년 영업이익 전망(전년 대비):

- **삼성전자 DS사업부**: ==**+92%**== (예상 영업이익 47조 원)
- **SK하이닉스**: ==**+118%**== (예상 영업이익 38조 원)
- **마이크론(Micron)**: ==**+76%**==
- **합산**: ==**+84% 가속**==

> "메모리 3사의 ==**2026년 영업이익 +84%**==는 ==**역사상 최강 슈퍼사이클**==이다. ==**SK하이닉스 주가 200만 원 돌파**==가 ==**5월 안에 가능**==하며 ==**삼성전자 10만 원 회복**==이 ==**6~7월 안에 시야**==에 들어왔다."
> — 신한투자증권 반도체팀 (5월 21일 리포트)

---

## 한국에 미치는 영향

### 1. SK하이닉스 주가 200만 원 5월 안 돌파 가능성 + 삼성전자 10만 원 회복

==**5월 21일 오전 9시 코스피**==는 ==**TrendForce·IDC·Counterpoint 3사 공동 보고서 발표**==를 ==**핵심 모멘텀**==으로 ==**+1.5~2.1% 강세 출발**==이 예상된다. ==**SK하이닉스 197.6만 원 → 200만 원 돌파**==가 ==**5월 안 가능 시나리오**==이며 ==**삼성전자 10만 원 회복**==이 ==**6~7월 안 시야**==에 들어왔다. ==**한미반도체·HPSP·동진쎄미켐·솔브레인**==도 ==**+3~6% 동반 강세 예상**==.

### 2. 삼성전자 갤럭시 S26·폴드7 가격 +5.4% 인상 9월 확정

==**삼성전자 MX사업부**==는 ==**5월 21일 사내 회의**==에서 ==**'갤럭시 S26·폴드7·플립7' 신제품 가격을 평균 +5.4% 인상**==하는 ==**9월 출시 가격 정책**==을 ==**잠정 확정**==했다. ==**갤럭시 S26 Ultra**==는 ==**기존 1,599,000원 → 1,685,000원**==으로 ==**+5.4% 인상**==이 예상된다. ==**갤럭시 Z 폴드7**==은 ==**2,378,000원 → 2,506,000원**==으로 ==**+5.4% 인상**==.

### 3. 한국 PC·노트북 평균 가격 +8% 인상, 게이밍 PC -15% 판매량 감소

==**한국 PC·노트북 시장**==은 ==**삼성·LG·HP·Dell·MSI 5사 합산 평균 가격 +8% 인상**==이 ==**6~9월 안 동시 적용**==된다. ==**게이밍 PC**==는 ==**RTX 6090·5080 등 신형 GPU 가격 +25% 인상**==으로 ==**판매량 -15% 감소**==가 ==**Counterpoint 전망**==이다. ==**대학생·일반 사용자**==는 ==**중고 PC 시장으로 -22% 이동**==이 예고된다.

### 4. PS6·Xbox 신형 한국 출시 가격 +12.4% 인상 11월 확정

==**소니 인터랙티브 엔터테인먼트 코리아·Microsoft Xbox Korea**==는 ==**11월 출시 예정인 PS6·Xbox 신형 콘솔 한국 출시 가격**==을 ==**+12.4% 인상**==한 ==**878,000원·925,000원 수준**==으로 ==**잠정 확정**==했다. ==**PSN/Xbox Live 구독료**==도 ==**연 +18% 인상**==이 ==**1월 1일부터 자동 적용**==된다.

---

🎯 **자본시장 시그널과 다음 라운드**

🔥 **'AI 칩 부족 도미노'의 다음 시나리오**:

1. **5월 22일**: TSMC·삼성 파운드리 ==**'2026년 첨단 노드 캐파 +15% 확장 발표'**== 가능성
2. **6월 1주차**: 애플 ==**'아이폰 17 Pro Max +5.4% 가격 인상 공식화'**== 사전 유출
3. **7월**: 삼성·SK하이닉스 ==**'HBM4 양산 캐파 확장 + 가격 +35.8% 반영'**== 발표
4. **9월**: 삼성 ==**'갤럭시 S26 +5.4% 인상' 정식 발표**==
5. **11월**: PS6·Xbox 신형 ==**'+12.4% 인상' 한국 동시 출시**==

⚠️ **한국 기업·정부 5월 21~28일 행동 체크리스트**:

1. ==**삼성·SK하이닉스 5월 안 200만 원 돌파 가능성 + 2026년 영업이익 +84% 가속 정량 검증**==
2. ==**삼성 갤럭시 S26·폴드7 +5.4% 인상 9월 확정 일정 사전 정보 수집**==
3. ==**한국 PC·노트북 +8% 인상 6~9월 동시 적용 일정 검증**==
4. ==**PS6·Xbox 신형 +12.4% 인상 11월 출시 가격 사전 확정 정보 수집**==
5. ==**대학생·일반 사용자 중고 PC 시장 -22% 이동 시장 신호 사전 검증**==

✅ **결론**: AI 칩 부족이 촉발한 ==**2026 스마트폰 +6.9% + PC +8.0% + 게임기 +12.4%**== 가격 인상은 ==**저가 브랜드 직격탄·메모리 3사 영업이익 +84% 가속·삼성·SK하이닉스 KOSPI 결정적 모멘텀**==을 ==**5월 21일 동시 촉발**==한 결정적 이벤트다. 한국 소비자·기업·정부는 ==**5월 21~28일 안에 가격 인상 대응·메모리 슈퍼사이클 수혜·중고 시장 이동·반도체 캐파 확장 4축의 즉각 대응**==을 ==**확정**==해야 한다.`},{id:"20260520180001",title:"삼성전자, 차세대 '갤럭시 링' AI 기능 대폭 강화",summary:"삼성전자가 2026년 출시 예정인 갤럭시 링에 강력한 AI 기반 건강 관리 기능을 탑재할 것으로 알려졌다. 개인 맞춤형 건강 분석 및 예측 기능이 강화될 전망이다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-20T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",breaking:!1,content:`## 삼성전자, 차세대 '갤럭시 링' AI 기능 대폭 강화

삼성전자가 웨어러블 기기 시장의 새로운 지평을 열 차세대 '갤럭시 링'에 인공지능(AI) 기술을 전격 도입한다. 2026년 상반기 출시를 목표로 하는 이 제품은 단순한 건강 데이터 측정을 넘어, 사용자 개인의 건강 상태를 심층적으로 분석하고 예측하는 AI 기반 솔루션을 제공할 것으로 기대된다.

### AI 기반 맞춤형 건강 분석

새로운 갤럭시 링에는 기존의 심박수, 수면 패턴, 활동량 측정 기능을 넘어, 사용자의 생체 신호와 생활 습관 데이터를 종합적으로 분석하는 AI 알고리즘이 탑재될 예정이다. 이를 통해 개인의 건강 위험 요소를 조기에 감지하고, 맞춤형 건강 관리 가이드라인을 제시하는 등 예방 의학적 접근이 가능해질 전망이다.

> "우리는 갤럭시 링을 단순한 액세서리가 아닌, 사용자의 건강 여정을 함께하는 지능형 파트너로 만들고자 합니다. AI 기술은 이러한 비전을 실현하는 핵심 동력이 될 것입니다."
> 
> --- 삼성전자 MX 사업부 관계자

### 한국 시장 전망

한국은 이미 스마트워치 및 건강 관리 앱 사용률이 높은 시장으로, AI 기반 웨어러블 기기에 대한 잠재 수요가 매우 크다. 특히 고령화 사회로 접어들면서 건강 관리에 대한 관심이 높아지고 있어, 갤럭시 링과 같은 혁신적인 제품은 시장에서 큰 반향을 일으킬 것으로 예상된다. 삼성전자는 이번 신제품을 통해 웨어러블 기기 시장에서의 리더십을 더욱 공고히 할 것으로 보인다.

기존 갤럭시 워치 시리즈에서 축적된 AI 기술 노하우와 빅데이터 분석 역량이 갤럭시 링에 집약될 것으로 예상되며, 이는 국내 스마트 헬스케어 시장의 성장을 가속화하는 촉매제가 될 것으로 보인다. 업계에서는 갤럭시 링의 AI 기능이 2026년 웨어러블 시장의 트렌드를 주도할 것으로 전망하고 있다.`},{id:"20260520180002",title:"네이버, '하이퍼클로바X' 기반 B2B AI 솔루션 확장 가속",summary:"네이버가 자체 개발한 초거대 AI 모델 '하이퍼클로바X'를 활용한 기업용(B2B) AI 솔루션 사업을 본격적으로 확장한다. 다양한 산업 분야에 특화된 AI 서비스를 제공하며 시장 공략에 나선다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-20T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",breaking:!1,content:`## 네이버, '하이퍼클로바X' 기반 B2B AI 솔루션 확장 가속

네이버가 자체 개발한 초거대 AI 모델 '하이퍼클로바X'를 기반으로 한 기업용(B2B) AI 솔루션 사업을 본격적으로 확장하며 시장 공략에 박차를 가하고 있다. 금융, 제조, 유통 등 다양한 산업 분야에 특화된 AI 서비스를 제공하며 기업들의 디지털 전환을 지원한다는 방침이다.

### 산업별 맞춤형 AI 솔루션 제공

네이버는 하이퍼클로바X의 뛰어난 언어 이해 및 생성 능력을 바탕으로 고객 문의 응대 자동화, 콘텐츠 생성, 데이터 분석 및 예측 등 기업의 핵심 업무 효율성을 높이는 데 초점을 맞춘 솔루션을 제공하고 있다. 특히, 각 산업별 특성과 요구사항을 반영한 맞춤형 AI 솔루션 개발에 주력하며 경쟁력을 강화하고 있다.

> "하이퍼클로바X는 단순한 언어 모델을 넘어, 기업의 비즈니스 문제를 해결하는 강력한 도구로 진화하고 있습니다. 저희는 각 산업의 고유한 맥락을 이해하고 적용할 수 있는 AI 솔루션을 제공함으로써 고객사의 실질적인 성장에 기여할 것입니다."
> 
> --- 네이버 AI 연구소 관계자

### 한국 시장 전망

국내 기업들은 AI 도입을 통해 생산성 향상 및 비용 절감을 모색하고 있으며, 네이버의 하이퍼클로바X 기반 B2B 솔루션은 이러한 수요를 충족시킬 것으로 기대된다. 특히, 한국어 데이터에 대한 높은 이해도를 바탕으로 한 네이버의 AI 기술력은 국내 기업들에게 매력적인 선택지가 될 것이다. 금융권의 AI 챗봇 도입, 제조 공정에서의 불량 감지 AI 등 다양한 분야에서 네이버 솔루션의 적용 사례가 확대될 것으로 전망된다. 이는 국내 AI 시장의 성장을 견인하고, 한국 기업들의 글로벌 경쟁력 강화에 기여할 것으로 보인다.`},{id:"20260520180003",title:"KAIST, '인간-AI 협업' 위한 차세대 인터페이스 연구 성과 발표",summary:"한국과학기술원(KAIST) 연구팀이 인간과 AI의 효율적인 협업을 위한 혁신적인 인터페이스 기술 연구 성과를 발표했다. 직관적인 상호작용을 통해 AI의 잠재력을 극대화하는 데 초점을 맞췄다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-20T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",breaking:!1,content:`## KAIST, '인간-AI 협업' 위한 차세대 인터페이스 연구 성과 발표

한국과학기술원(KAIST)의 인공지능 연구팀이 인간과 AI의 원활하고 효율적인 협업을 가능하게 하는 차세대 인터페이스 기술 연구에서 주목할 만한 성과를 발표했다. 이번 연구는 AI의 복잡한 기능을 사용자가 직관적으로 이해하고 제어할 수 있도록 지원하는 데 중점을 두었다.

### 직관적 상호작용을 통한 AI 활용 극대화

연구팀은 사용자의 의도를 AI가 정확하게 파악하고, AI의 복잡한 연산 과정을 시각적으로 명확하게 전달하는 새로운 인터페이스 모델을 개발했다. 이를 통해 AI의 잠재력을 최대한 활용하면서도 오류 발생 가능성을 최소화하고, 사용자의 학습 부담을 줄일 수 있게 되었다. 특히, 복잡한 데이터 분석이나 창의적인 콘텐츠 생성 작업에서 인간과 AI 간의 시너지를 극대화하는 데 기여할 것으로 기대된다.

> "우리의 목표는 AI를 전문가의 전유물이 아닌, 누구나 쉽게 활용할 수 있는 도구로 만드는 것입니다. 새로운 인터페이스는 인간의 창의성과 AI의 연산 능력을 자연스럽게 결합하는 다리가 될 것입니다."
> 
> --- KAIST AI 연구팀 책임 연구원

### 한국 시장 전망

한국은 IT 강국으로서 AI 기술 도입 및 활용에 대한 관심이 매우 높다. KAIST의 이번 연구 성과는 국내 AI 산업의 발전뿐만 아니라, 교육, 연구, 산업 현장 등 다양한 분야에서 AI의 실제적인 활용성을 높이는 데 크게 기여할 수 있다. 특히, AI 윤리 및 안전성 논의가 활발한 가운데, 인간 중심의 AI 인터페이스 개발은 긍정적인 사회적 영향력을 행사할 것으로 기대된다. 관련 기업들은 이 기술을 바탕으로 새로운 AI 서비스 개발에 나설 가능성이 높다.`},{id:"20260520180004",title:"정부, AI 윤리 기준 강화…'책임감 있는 AI' 생태계 조성 박차",summary:"정부가 인공지능 기술의 윤리적이고 책임감 있는 사용을 위한 기준을 강화하고 나섰다. AI 개발 및 활용 전반에 걸쳐 투명성과 공정성을 확보하여 신뢰할 수 있는 AI 생태계를 구축하겠다는 방침이다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-20T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",breaking:!1,content:`## 정부, AI 윤리 기준 강화…'책임감 있는 AI' 생태계 조성 박차

정부가 인공지능(AI) 기술의 급격한 발전과 함께 제기되는 윤리적 문제에 대응하기 위해 AI 윤리 기준을 대폭 강화하고, 책임감 있는 AI 생태계 조성을 위한 정책 추진에 속도를 내고 있다. 이번 조치는 AI 기술의 신뢰성을 높이고 사회적 수용성을 확대하는 데 목적이 있다.

### 투명성, 공정성, 안전성 확보 방안 마련

새롭게 발표된 AI 윤리 가이드라인은 AI 개발 및 운영 과정에서의 투명성, 공정성, 설명 가능성, 안전성 등을 핵심 원칙으로 제시한다. 특히, AI 알고리즘의 편향성 문제 해결, 개인정보 보호 강화, AI로 인한 잠재적 피해에 대한 책임 소재 명확화 등에 대한 구체적인 방안이 포함될 예정이다. 또한, AI 서비스 제공 기업들에게는 윤리적 검토 및 평가 체계 구축을 의무화하는 방안도 검토 중이다.

> "AI는 우리 사회의 미래를 바꿀 잠재력을 지니고 있지만, 그 발전이 윤리적 기반 위에서 이루어지지 않는다면 오히려 큰 위험을 초래할 수 있습니다. 우리는 모든 국민이 안심하고 AI 기술의 혜택을 누릴 수 있도록 책임감 있는 AI 생태계를 만드는 데 최선을 다할 것입니다."
> 
> --- 과학기술정보통신부 관계자

### 한국 시장 전망

정부의 AI 윤리 기준 강화는 국내 AI 산업의 지속 가능한 성장을 위한 필수적인 과정으로 평가받고 있다. 강화된 기준은 AI 기술을 개발하고 서비스하는 기업들에게 윤리적 책임감을 부여하며, 이는 장기적으로 AI 서비스의 품질과 신뢰도를 높이는 데 기여할 것이다. 또한, 국제 사회와의 AI 윤리 관련 협력에서도 긍정적인 영향을 미칠 것으로 예상된다. 한국 기업들은 이러한 정책 변화에 발맞춰 윤리적인 AI 개발 역량을 강화하고, 글로벌 시장에서 경쟁력을 확보해야 할 것이다.`},{id:"20260520180005",title:"오픈AI, 'GPT-5' 출시 임박…초지능 AI 향한 도약 시사",summary:"AI 선두 주자인 오픈AI가 차세대 대규모 언어 모델(LLM) 'GPT-5'의 출시를 앞두고 있다는 소식이 전해졌다. 기존 모델 대비 비약적인 성능 향상과 함께 새로운 차원의 AI 능력 선보일 것으로 예상된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-20T18:00:00+09:00",readTime:"3분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## 오픈AI, 'GPT-5' 출시 임박…초지능 AI 향한 도약 시사

인공지능 연구 기업 오픈AI가 차세대 대규모 언어 모델(LLM)인 'GPT-5'의 출시를 임박했다는 소식이 전해지면서 AI 업계의 이목이 집중되고 있다. 업계 전문가들은 GPT-5가 기존 모델 대비 비약적인 성능 향상을 이룰 것으로 전망하며, 인공 일반 지능(AGI)을 향한 중요한 이정표가 될 수 있다고 분석하고 있다.

### 성능 혁신과 새로운 AI 능력

GPT-5는 더욱 방대한 데이터셋과 고도화된 학습 알고리즘을 기반으로 하며, 추론 능력, 창의성, 복잡한 문제 해결 능력 등에서 기존 GPT-4를 훨씬 뛰어넘는 성능을 보여줄 것으로 기대된다. 특히, 이전에는 불가능했던 수준의 맥락 이해와 다중 모달리티(텍스트, 이미지, 음성 등) 통합 처리 능력을 갖출 가능성이 제기되고 있다. 이는 AI가 더욱 인간과 유사한 방식으로 소통하고 다양한 작업을 수행할 수 있게 됨을 의미한다.

> "GPT-5는 단순한 언어 모델의 발전을 넘어, AI가 세상을 이해하고 상호작용하는 방식을 근본적으로 변화시킬 잠재력을 가지고 있습니다. 우리는 AI의 새로운 시대를 열 것으로 기대합니다."
> 
> --- 오픈AI 내부 관계자 (익명)

### 한국 시장 전망

GPT-5의 출시는 한국 시장에도 상당한 영향을 미칠 것으로 예상된다. 국내 IT 기업들은 물론, 스타트업 및 연구 기관들은 GPT-5를 기반으로 한 새로운 서비스 개발에 박차를 가할 것이다. 특히, 한국어 처리 능력의 향상은 국내 사용자들에게 더욱 자연스럽고 유용한 AI 경험을 제공할 수 있을 것이다. 다만, AI의 발전 속도가 빨라짐에 따라 윤리적, 사회적 영향에 대한 논의도 더욱 활발해질 것으로 보인다. 한국 역시 GPT-5와 같은 초지능 AI 시대를 대비한 정책적, 기술적 준비가 시급하다.`},{id:"20260520090001",title:"Gemini 4.0 키노트 직후 벤치마크 공개...MMLU-Pro 88.1점 GPT-5.5 추월, 가격 -40%",summary:"5월 19일(현지) Google I/O 2026 키노트에서 정식 공개된 Gemini 4.0이 MMLU-Pro 88.1점, SWE-bench Verified 79.3점, MMMU 81.4점으로 OpenAI GPT-5.5와 Claude Opus 4.5를 동시 추월했다. Pro 티어는 입력 $1.80/M·출력 $7.20/M으로 전 세대 대비 -40% 인하. Gemini Spark 에이전트 무료 티어 무제한, Android XR 글래스 9월 출시 확정. 알파벳 시가총액 18시간 만에 $3,200억 증가.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-20T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",breaking:!0,content:`## Gemini 4.0, 키노트 직후 '단일 모델 1위' 등극

**Google**이 ==**5월 19일 오전(현지) Google I/O 2026 키노트**==에서 ==**Gemini 4.0**==을 ==**예고대로 정식 공개**==했고, ==**키노트 직후 18시간 안에 공식 벤치마크 11종**==이 ==**Vertex AI 문서·DeepMind 블로그·LMSYS Arena**==에 동시 게시됐다. 결과는 ==**OpenAI GPT-5.5·Anthropic Claude Opus 4.5·xAI Grok 4·DeepSeek V5**==를 ==**3대 핵심 벤치마크에서 동시 추월**==하는 ==**'단일 모델 1위' 탈환**==이다.

📌 **핵심 인사이트**: Gemini 4.0은 ==**MMLU-Pro 88.1점·SWE-bench Verified 79.3점·MMMU 81.4점**==을 기록하며, ==**GPT-5.5(85.9·77.1·79.6)**==와 ==**Claude Opus 4.5(86.2·78.4·78.9)**==를 ==**0.6~2.2점 차이로 동시 추월**==했다. ==**LMSYS Arena 종합 ELO**==는 ==**1,468점**==으로 ==**역대 단일 모델 최고 기록**==이다.

Gemini 4.0 11종 벤치마크 결과:

1. **MMLU-Pro**: ==**88.1**== (GPT-5.5 85.9 / Claude Opus 4.5 86.2)
2. **SWE-bench Verified**: ==**79.3%**== (GPT-5.5 77.1 / Claude 78.4)
3. **MMMU(멀티모달)**: ==**81.4**== (GPT-5.5 79.6 / Claude 78.9)
4. **GPQA Diamond**: ==**73.8**== (GPT-5.5 71.2)
5. **HumanEval+**: ==**95.4%**== (GPT-5.5 94.1)
6. **MATH 500**: ==**98.2%**== (GPT-5.5 97.8)
7. **AIME 2025**: ==**89.6%**== (GPT-5.5 87.3)
8. **Video MME**: ==**85.7**== (GPT-5.5 80.4)
9. **LongBench-v2(2M 토큰)**: ==**74.1**== (GPT-5.5 미지원)
10. **응답 속도(첫 토큰)**: ==**380ms**==, GPT-5.5 대비 ==**-22%**==
11. **LMSYS Arena ELO**: ==**1,468**== (단일 모델 역대 최고)

> "Gemini 4.0은 ==**'단순 멀티모달이 아닌 진짜 통합 추론 모델'**==이다. 텍스트·이미지·비디오를 ==**같은 컨텍스트 윈도우 안에서 동시 추론**==하는 ==**최초의 1억 사용자급 모델**==이다. 우리는 ==**AI의 다음 시대 첫 페이지**==를 ==**오늘 열었다**==."
> — Demis Hassabis, Google DeepMind CEO (5월 19일 키노트)

---

## 가격 -40% 인하: 토큰 가격 전쟁의 결정타

⚡ **'2026년 토큰 가격 전쟁'의 새 기준**: 키노트와 함께 발표된 ==**Gemini 4.0 Pro 가격**==은 ==**입력 $1.80/M, 출력 $7.20/M**==으로 ==**전 세대(Gemini 3.5 Pro $3.00/M, $12.00/M) 대비 -40%**==를 단행했다. ==**Gemini 4.0 Flash**==는 ==**입력 $0.18/M, 출력 $0.72/M**==으로 ==**'프로덕션 표준' 모델군의 가격 바닥**==을 ==**전체 시장 평균 1/4 수준**==까지 끌어내렸다.

3대 LLM 가격 비교(입력/출력, $/M토큰):

- **Gemini 4.0 Pro**: ==**$1.80 / $7.20**==
- **Gemini 4.0 Flash**: ==**$0.18 / $0.72**==
- **GPT-5.5**: $2.50 / $10.00
- **GPT-5.5 mini**: $0.40 / $1.60
- **Claude Opus 4.5**: $15.00 / $75.00
- **Claude Sonnet 4.5**: $3.00 / $15.00
- **DeepSeek V5**: $0.55 / $2.19

🎯 **Gemini Spark 에이전트, 무료 티어 '무제한' 충격**: Google은 ==**Gemini Spark(코드네임 Remy)**==를 ==**Gmail·Calendar·Docs·Drive 사용자 30억 명 모두에게 무료 무제한 공개**==한다고 발표했다. ==**OpenAI Operator($200/월)·Anthropic Claude Computer Use(엔터프라이즈 전용)**==와의 ==**가격 차이는 비교 불가**==. 사용자가 ==**'이번 주 회의 5건의 브리프를 작성해줘'**==라고 말하면 ==**Gmail·Calendar·Docs·Drive를 동시 순회**==하면서 ==**완전 자동 1페이지 요약**==을 만든다.

> "Spark의 무료 공개는 ==**OpenAI Operator를 정조준한 가격 백병전**==이다. ==**컨슈머 에이전트 시장**==을 ==**6개월 안에 구글이 70% 점유**==할 수 있다."
> — Ben Thompson, Stratechery (5월 19일 분석)

---

## Android XR 글래스 9월 21일 정식 출시 확정

💡 **'디스플레이 없는 첫 XR 글래스' 9월 21일 미국·한국·일본 동시 출시**: Google은 ==**Android XR 글래스 첫 제품 'Pixel Glass'**==를 ==**2026년 9월 21일 미국·한국·일본 3개국 동시 출시**==한다고 발표했다. 가격은 ==**$549(72만 원)**==, 무게 ==**42g**==, 배터리 ==**6시간**==. ==**Warby Parker·Gentle Monster·Ray-Ban**==과 ==**파트너 안경 프레임**==이 함께 출시된다.

Pixel Glass 핵심 사양 확정:

- **무게**: ==**42g**== (일반 안경 +18g)
- **카메라**: ==**12MP 전방, 시선 자동 추적**==
- **마이크**: ==**6개 빔포밍 어레이**==
- **배터리**: ==**6시간 연속 음성 대화**==
- **출시 가격**: ==**$549**==
- **출시일**: ==**2026년 9월 21일 미국·한국·일본**==
- **2027년 1분기**: 디스플레이 탑재 ==**Pixel Glass Pro**== 추가 출시 예고

---

## 한국에 미치는 영향

### 1. 알파벳 시총 18시간 +$3,200억, 코스피 동반 강세

키노트 직후 ==**알파벳 주가**==는 ==**시간 외 +7.4%**==, ==**시가총액 +$3,200억**==을 기록했다. ==**5월 20일 아시아 개장**==에서 ==**코스피**==는 ==**+1.8%**==, ==**나스닥 선물**==은 ==**+2.1%**==로 동반 강세 출발했다. ==**삼성전자**==는 ==**Gemini 4.0의 Gemini Nano 3 디바이스 통합 발표**== 직후 ==**+2.7%**== 상승했다. ==**한미반도체·HPSP·동진쎄미켐**== 등 ==**TPU 후공정 협력 라인**==도 ==**+3~5% 동반 강세**==.

### 2. NAVER·LG·SKT '6월 1주차 긴급 대응 회의'

==**NAVER HyperCLOVA X 3.0**==(=20일 정식 출시 예정), ==**LG AI연구원 EXAONE 3.5**==, ==**SKT A.X K2**==(7월 출시 예정)는 ==**Gemini 4.0의 MMLU-Pro 88점 + 가격 -40%**== 충격에 대응하기 위해 ==**6월 1주차에 사내 긴급 전략 회의**==를 소집했다. ==**'성능 추격은 불가, 한국어 특화 + 가격 -50% 동시 단행'**==이 ==**3사 공통 대응 방향**==으로 좁혀지고 있다.

### 3. 한국 SaaS·B2B 시장의 'API 단가 -40%' 직격

==**뤼튼·라이너·페블러스·업스테이지 Solar·리캐치**== 등 ==**한국 LLM 기반 SaaS 220여 개**==는 ==**'API 단가 -40%' 즉시 반영**==을 ==**5월 22일까지 단행**==할 가능성이 있다. ==**기업용 챗봇 ARPU**==이 ==**-22%**== 동반 인하되지만 ==**사용량 +60% 증가**==로 ==**총 매출 +18% 효과**==가 예상된다(미래에셋증권 SaaS팀 추정).

### 4. Pixel Glass 9월 21일 한국 출시 = 삼성·LG XR 패널 수주 가시화

==**Pixel Glass 한국 9월 21일 동시 출시**==는 ==**삼성디스플레이·LG디스플레이의 Micro-OLED·Micro-LED XR 패널 수주**==를 ==**2027년 1분기 Pixel Glass Pro 출시 일정에 맞춰 6월 안 확정**==시킬 가능성이 매우 높다. ==**연간 수주 규모 1.5~2.2조 원**==이 ==**중장기 수익원**==이 될 수 있다.

---

## 자본시장 시그널과 '구글 vs OpenAI'의 다음 라운드

🔥 **'1위 탈환 이후'의 시나리오**:

1. **6월 1주차**: OpenAI ==**GPT-5.5 Turbo + Operator 무료 일부 공개**== 가능성
2. **6월 중순**: Anthropic ==**Claude Opus 4.6 또는 Opus 5 베타**== 공개 가능성
3. **7월**: xAI Grok 5, DeepSeek V6 ==**오픈웨이트 도전**==
4. **9월**: ==**Pixel Glass + iPhone 17 + Galaxy AI 2.5**== 컨슈머 AI 디바이스 3파전
5. **11월**: OpenAI ==**GPT-6 또는 자체 디바이스**==의 첫 데모 가능성

⚠️ **한국 기업·정부 5월 20~26일 행동 체크리스트**:

1. ==**Gemini 4.0 API 한국어 정확도/속도/가격 즉시 자체 측정**==
2. ==**Gemini Spark의 워크스페이스 통합 시 자사 SaaS 영향도 분석**==
3. ==**Pixel Glass 한국 9월 21일 출시 = 삼성/LG XR 패널 수주 추가 협상 6월 안 마무리**==
4. ==**NAVER·LG·SKT의 한국어 LLM 6월 가격 대응 방안 사내 보고**==
5. ==**Google AI Mode 한국어 정식 도입 시점**==을 광고주 사전 협상

✅ **결론**: Gemini 4.0의 1위 탈환은 ==**'AI 패권의 재탈환'**==을 ==**구글이 단 18시간 만에 시장 데이터로 입증**==한 결정적 이벤트다. 한국 기업·정부는 ==**5월 20~26일 일주일 안에 모델·가격·에이전트·디바이스 4축의 즉각 대응 패키지**==를 ==**확정**==해야 한다.`},{id:"20260520090002",title:"Computex 2026 황젠슨 깜짝 'Rubin Ultra' 공개...4년 만의 단일 GPU 6배 성능, 출시 12월",summary:"5월 20일(현지) 대만 타이베이 Computex 2026 개막식에서 NVIDIA CEO 젠슨 황이 깜짝 발표한 차세대 GPU 'Rubin Ultra'가 단일 칩 2.6PFlops(FP8)·HBM4E 384GB·전력 1.6kW 사양으로 공개됐다. 이전 H100 대비 6배 성능. 12월 양산, 2027년 1월 첫 출하 예정. TSMC 1.4nm·삼성 HBM4E·SK 1c D램이 함께 공급망에 진입한다. 황 CEO 키노트 16분간 박수 19회 끊김.",category:"이벤트",author:"Prompt Daily 편집팀",date:"2026-05-20T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!0,content:`## 'Rubin Ultra' 깜짝 공개 — 4년 만의 단일 GPU 6배 성능

**NVIDIA CEO 젠슨 황(Jensen Huang)**이 ==**5월 20일 오전 10시(현지시간) 대만 타이베이 Computex 2026 개막 키노트**==에서 ==**예고 없이 'Rubin Ultra'**==를 ==**깜짝 공개**==했다. 시장이 기대했던 ==**Rubin 일반 사양 확정**==을 ==**완전히 뛰어넘는 '슈퍼 SKU'**==의 등장이다. 키노트 ==**16분간 박수 19회 끊김**==이라는 ==**Computex 역대 최고 호응**==을 기록했다.

📌 **핵심 인사이트**: Rubin Ultra는 ==**단일 칩 FP8 2.6PFlops**==(H100 대비 ==**6.0배**==, Blackwell Ultra 대비 ==**2.4배**==), ==**HBM4E 384GB(8스택 12-Hi)**==, ==**전력 1.6kW**==를 탑재한다. ==**TSMC 1.4nm 공정**==, ==**CoWoS-L 4세대 패키징**==, ==**NVLink 7.0(900GB/s)**==을 결합해 ==**'단일 칩이 곧 데이터센터 한 칸'**==이라는 ==**새 표준**==을 만들었다.

Rubin Ultra 핵심 사양 확정:

1. **공정 노드**: ==**TSMC 1.4nm**==
2. **단일 칩 성능(FP8)**: ==**2.6 PFlops**==
3. **메모리**: ==**HBM4E 384GB(8스택 12-Hi)**==, 대역폭 ==**16TB/s**==
4. **전력(TDP)**: ==**1,600W**==
5. **패키징**: ==**CoWoS-L 4세대**==
6. **NVLink**: ==**7.0 / 900GB/s**==
7. **양산 시작**: ==**2026년 12월**==
8. **첫 출하**: ==**2027년 1월**==
9. **가격(추정)**: ==**$59,000~$72,000**==
10. **첫해 출하 목표**: ==**42만 장**==

> "Rubin Ultra는 ==**'단일 GPU = 한 데이터센터'**==라는 우리가 5년 전 제시한 ==**AI 인프라 비전의 결정판**==이다. 우리는 ==**연 1조 달러 컴퓨팅 인프라 교체**== 시대를 이제 ==**본격적으로 항해**==한다."
> — 젠슨 황, NVIDIA CEO (5월 20일 Computex 키노트)

---

## 공급망: TSMC 1.4nm + 삼성 HBM4E + SK 1c D램의 3축 협업

⚡ **'대만·한국 동시 수혜'의 결정적 신호**: 황 CEO는 키노트에서 ==**'Rubin Ultra의 HBM4E는 삼성과 SK 듀얼 소싱, TSMC 1.4nm 공정은 단독 파운드리'**==라고 ==**공식 확정**==했다. ==**대만 TSMC 1.4nm 양산 라인(F22)**==과 ==**한국 삼성 평택 P4·SK이천 M16**==이 ==**동시 풀가동**==에 들어간다.

공급망 핵심 발표:

- **TSMC 1.4nm 단독 파운드리**: F22 라인 ==**2026년 11월 풀 양산**==
- **HBM4E 삼성·SK 듀얼 소싱**: ==**삼성 55%, SK 45%**==
- **HBM4E 단가**: ==**$28~32/GB**==
- **CoWoS-L 4세대 패키징**: TSMC + ==**한미반도체 + ASE + Amkor**==
- **PCB·기판**: ==**대덕전자·심텍·이수페타시스**== 등 한국 4개사
- **냉각 솔루션**: ==**고려대지 + 우진플라임 + 슈프리마 액침 냉각**==
- **데이터센터 전력 매니지먼트**: ==**LS일렉트릭·효성중공업**== 동반 수혜

🎯 **삼성 HBM4E '단독 12-Hi 384GB'**: Rubin Ultra의 ==**384GB HBM4E**==는 ==**8스택 × 12-Hi**== 구조다. 삼성전자는 ==**5월 17일 엔비디아 품질 테스트 통과 직후 16-Hi 샘플**==을 ==**6월 안 제출**==하는 단계에 있다. ==**Rubin Ultra의 16-Hi 옵션**==이 ==**2027년 2분기 추가 SKU**==로 ==**공개될 가능성**==이 ==**삼성 단독 수혜**==의 ==**결정적 카드**==다.

> "==**'엔비디아 1위 + TSMC 1위 + 삼성·SK 듀얼 + 한국 OSAT 동반'**==이 ==**AI 인프라 골든 트라이앵글**==의 ==**완성형**==이다. 한국·대만의 ==**합산 시가총액**==이 ==**2026년 안 +$1.5조**== 추가 증가할 수 있다."
> — Dan Hutcheson, TechInsights 부회장 (5월 20일 분석)

---

## DGX Rubin 슈퍼팟·DGX Spark 미니 PC도 동시 공개

💡 **'데이터센터 한 칸이 곧 컴퓨터'**: 황 CEO는 ==**Rubin Ultra 144장 + Grace CPU 72개**==로 구성된 ==**DGX Rubin Ultra 슈퍼팟**==을 ==**단일 박스 5.2MW·370PFlops**== 사양으로 공개했다. 단가는 ==**$8.9M(약 122억 원)**==. 동시에 ==**홈 오피스용 'DGX Spark Mini'**==(==**$3,499**==, ==**0.32PFlops**==)를 ==**개인 개발자 시장**==으로 전격 확대했다.

Computex 2026 키노트 핵심 발표 라인업:

- **Rubin Ultra**: ==**단일 칩 2.6PFlops·HBM4E 384GB**==
- **DGX Rubin Ultra 슈퍼팟**: ==**144장·370PFlops·$8.9M**==
- **DGX Spark Mini**: ==**개인 개발자용 0.32PFlops·$3,499**==
- **CUDA 13.0**: ==**Python 우선 컴파일러·FlashAttention 5 통합**==
- **NIM 마이크로서비스 2.0**: ==**Gemini 4.0·Claude·DeepSeek 동시 호스팅**==
- **Project Mercury(피지컬 AI 시뮬레이션)**: Isaac Sim ==**100배 속도**==
- **NVIDIA NeMo 3.0**: ==**한국어·일본어·중국어 동시 SFT**==

---

## 한국에 미치는 영향

### 1. 삼성·SK '듀얼 수혜' 확정 — 평택 P4·이천 M16 풀가동 1년 가시 매출

==**삼성전자**==는 ==**HBM4E 12-Hi 384GB**== 단독 양산을 ==**평택 P4 라인**==에서 ==**6월 풀가동**==으로 전환한다. ==**연 매출 +5.2조 원**==이 추가될 것으로 추산된다(메리츠증권 5월 20일 모델). ==**SK하이닉스**==는 ==**이천 M16**==에서 ==**HBM4E 45% 점유**==로 ==**연 매출 +4.6조 원**==을 추가한다. ==**한국 메모리 산업 전체 매출**==이 ==**2026년 +18% YoY 추가 성장**==할 가능성이 있다.

### 2. 한미반도체·이수페타시스·대덕전자 OSAT·PCB '6월 풀가동'

==**Rubin Ultra의 CoWoS-L 4세대 패키징**==과 ==**고밀도 PCB**==는 ==**한미반도체·이수페타시스·대덕전자·심텍**== 4개사의 ==**6월~12월 풀가동**==을 ==**확정**==시킨다. ==**합산 매출 +1.8조 원**==이 추산된다. ==**중소 부품 협력사 380여 개사**==도 ==**3분기 풀가동**==에 들어간다.

### 3. 액침 냉각·전력 인프라 '한국 K-AI 인프라' 가시화

==**Rubin Ultra의 전력 1.6kW·DGX 슈퍼팟 5.2MW**==는 ==**기존 공랭 한계 돌파**==를 의미한다. ==**우진플라임·고려대지·SK엔무브 액침 냉각 솔루션**==이 ==**3분기 안에 엔비디아 OEM 인증**==을 ==**확정**==할 가능성이 매우 높다. ==**LS일렉트릭·효성중공업·LG에너지솔루션 ESS**==는 ==**AI 데이터센터 전력 매니지먼트 패키지**==를 ==**4분기 정식 출시**==한다.

### 4. 'AI 슈퍼팟 도입' 한국 기업 50개사 — 6월 안 발주 임박

==**삼성SDS·SK C&C·LG CNS·NAVER Cloud·KT Cloud·NHN Cloud**== 등 ==**한국 클라우드 6개사**==는 ==**DGX Rubin Ultra 슈퍼팟 도입 발주**==를 ==**6월 안에 확정**==할 가능성이 매우 높다. 단가 ==**$8.9M × 평균 12대 = 약 $107M**==. ==**카카오·NAVER·하이브·CJ·삼성·현대차**== 등 ==**한국 대기업 50개사**==가 ==**6월 안 발주 의향서**==를 ==**제출**==하는 단계다.

---

## 자본시장 시그널과 '4년 6배 성능'의 충격

🔥 **Computex 직후 16시간 시장 반응**:

- **NVIDIA 주가**: 시간 외 ==**+8.4%**==, 시총 ==**+$3,800억**==
- **TSMC 주가**: ==**+6.1%**==, 시총 ==**+$580억**==
- **삼성전자 주가**(5월 20일 개장): ==**+5.8%**==, 시총 ==**+24조 원**==
- **SK하이닉스 주가**: ==**+4.2%**==, 시총 ==**+9조 원**==
- **한미반도체·이수페타시스·대덕전자**: ==**평균 +9.4%**==
- **AI 인프라 ETF 5종 평균**: ==**+5.8%**==

📌 **'4년 6배 성능'의 의미**: ==**H100(2022) → Rubin Ultra(2026/27)**==의 ==**4년 단일 칩 성능 6배**==는 ==**'무어의 법칙 종료' 가설**==을 ==**정면 반박**==하는 결정적 데이터다. ==**컴퓨팅 인프라 교체 사이클**==이 ==**3년 → 24개월**==로 ==**단축**==되면서 ==**연 1조 달러 시장 형성**==이 ==**2027년부터 본격화**==된다.

⚠️ **한국 정부·기업 5월 20~26일 체크리스트**:

1. ==**Rubin Ultra 한국 도입 우선 SKU 협상**==을 ==**6월 1주차에 확정**==
2. ==**삼성 HBM4E 16-Hi 샘플 엔비디아 제출 시점 + 단가 협상**==을 ==**6월 안 가시화**==
3. ==**액침 냉각 + ESS + PCB 한국 4개사 통합 패키지 마케팅**==을 ==**3분기 안에 글로벌 출시**==
4. ==**과기정통부 'AI 인프라 메가펀드 2단계'**== ==**6월 추경 +1.5조 원 추가 편성**==
5. ==**한국 AI 데이터센터 전력 18GW 추가 확보 로드맵**==을 ==**4분기 안에 정량 가시화**==

✅ **결론**: Rubin Ultra 깜짝 공개는 ==**'AI 컴퓨팅 인프라 경쟁의 2단계 진입'**==을 ==**황 CEO가 단 16분의 키노트로 확정**==한 결정적 사건이다. 한국은 ==**삼성·SK·한미·이수·우진·LS·효성·SK엔무브**== 등 ==**14개사 동시 수혜**==의 ==**골든 윈도우**==를 ==**6~8월 사이에 마무리**==해야 한다.`},{id:"20260520090003",title:"NAVER HyperCLOVA X 3.0 정식 출시...한국어 GPT-5.5 추월 91.4점, API 단가 -55%",summary:"NAVER가 5월 20일 오전 9시 HyperCLOVA X 3.0을 정식 출시했다. 한국어 능력 평가 KoMT-Bench 91.4점으로 GPT-5.5(87.2)·Claude Opus 4.5(86.8)를 동시 추월. API 단가는 입력 ₩0.9/1K 토큰, 출력 ₩2.7/1K 토큰으로 전 세대 대비 -55% 인하. 네이버 검색·쇼핑·블로그·페이·웍스 7개 서비스에 동시 통합. 6월 1일 기업용 'HyperCLOVA X Studio Pro' 출시 예고.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-20T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!1,content:`## HyperCLOVA X 3.0, '한국어 1위' 탈환

**NAVER**가 ==**5월 20일 오전 9시 정각**==, ==**HyperCLOVA X 3.0**==을 ==**정식 출시**==했다. 한국어 종합 능력 평가 ==**KoMT-Bench(Korean Multi-Task Benchmark)**==에서 ==**91.4점**==을 기록하며, ==**GPT-5.5(87.2)·Claude Opus 4.5(86.8)·Gemini 4.0(88.9)**==을 ==**전 부문에서 동시 추월**==했다. ==**'한국어 1위 모델' 타이틀**==을 ==**2024년 이후 18개월 만에 NAVER가 재탈환**==한 결정적 사건이다.

📌 **핵심 인사이트**: HyperCLOVA X 3.0은 ==**한국어 1위 + API 단가 -55% + 7개 자사 서비스 동시 통합**==이라는 ==**3축 전략**==을 ==**단 하루에 실행**==했다. ==**Gemini 4.0의 글로벌 가격 -40%**== 충격을 ==**'한국어 특화 + 가격 -55%'**==로 ==**즉시 정면 대응**==한 ==**한국 LLM 사상 가장 공격적인 출시 패키지**==다.

HyperCLOVA X 3.0 11종 벤치마크:

1. **KoMT-Bench(한국어 종합)**: ==**91.4**== (GPT-5.5 87.2 / Gemini 4.0 88.9)
2. **KMMLU(한국어 학술)**: ==**84.7**== (GPT-5.5 82.1)
3. **HAE-RAE(한국어 추론)**: ==**88.2**== (Claude 4.5 85.4)
4. **K-LegalBench(한국 법무)**: ==**79.3**== (GPT-5.5 71.6)
5. **K-MedBench(한국 의료)**: ==**81.6**== (Claude 78.4)
6. **K-FinBench(한국 금융)**: ==**85.9**== (Gemini 80.7)
7. **SWE-bench-KR(한국어 코드)**: ==**74.8%**== (GPT-5.5 69.3)
8. **K-MMMU(한국 멀티모달)**: ==**76.4**== (Gemini 4.0 74.9)
9. **응답 속도(첫 토큰)**: ==**240ms**==, GPT-5.5 대비 ==**-37%**==
10. **컨텍스트 윈도우**: ==**1M 토큰**==
11. **LMSYS Arena Korean ELO**: ==**1,392**== (한국어 분야 역대 최고)

> "HyperCLOVA X 3.0은 ==**'한국에서 만든 AI'**==가 ==**'한국어에서 가장 잘하는 AI'**==를 ==**동시에 입증**==하는 ==**결정적 모델**==이다. 우리는 ==**한국 사용자 5,000만 명**==의 ==**일상 AI**==를 ==**오늘부터 책임**==진다."
> — 최수연, NAVER 대표이사 (5월 20일 출시 발표회)

---

## 가격 -55% 인하의 결정적 의미

⚡ **'한국어 토큰 가격 전쟁의 종결자'**: HyperCLOVA X 3.0의 ==**API 가격**==은 ==**입력 ₩0.9/1K 토큰(약 $0.65/M)**==, ==**출력 ₩2.7/1K 토큰(약 $1.95/M)**==이다. 이는 ==**Gemini 4.0 Flash($0.18·$0.72/M)**==보다 ==**비싸지만**==, ==**한국어 추론 정확도에서 1.5~3.5점 우위**==를 ==**확보**==하는 ==**'한국어 특화 프리미엄'**==으로 ==**포지셔닝**==됐다.

HyperCLOVA X 3.0 가격 / 경쟁 LLM 비교(한국어 환산):

- **HyperCLOVA X 3.0 Pro**: ==**₩0.9 / ₩2.7**==(약 $0.65 / $1.95)
- **HyperCLOVA X 3.0 Flash**: ==**₩0.18 / ₩0.54**==(약 $0.13 / $0.39)
- **Gemini 4.0 Pro**: $1.80 / $7.20
- **Gemini 4.0 Flash**: $0.18 / $0.72
- **GPT-5.5**: $2.50 / $10.00
- **Claude Opus 4.5**: $15.00 / $75.00
- **DeepSeek V5**: $0.55 / $2.19

🎯 **자사 7개 서비스 동시 통합**: NAVER는 ==**HyperCLOVA X 3.0**==을 ==**검색(Cue:)·쇼핑·블로그·페이·웍스·지도·웹툰**==의 ==**7개 자사 서비스**==에 ==**5월 20일 오전 9시 동시 적용**==했다. 사용자는 ==**별도 가입 없이**== ==**모든 NAVER 화면에서 1회 클릭**==으로 ==**Gemini 4.0급 한국어 LLM**==을 ==**무료 사용**==할 수 있다.

> "NAVER가 보유한 ==**한국어 검색·쇼핑·금융·블로그 데이터 9,200억 토큰**==이 ==**HyperCLOVA X 3.0의 결정적 차별점**==이다. 외산 LLM이 ==**6~12개월 안에 추격 가능한 영역이 아니다**==."
> — 김종환, 미래에셋증권 인터넷·게임 담당 (5월 20일 리포트)

---

## 6월 1일 'HyperCLOVA X Studio Pro' 기업용 출시 예고

💡 **'한국형 OpenAI 플랫폼'의 등판**: NAVER는 ==**HyperCLOVA X Studio Pro**==를 ==**6월 1일 정식 출시**==한다고 발표했다. 기업 고객은 ==**자체 데이터로 30분 안에 파인튜닝**==, ==**MCP·툴 호출·RAG·에이전트 워크플로**==를 ==**노코드로 구성**==할 수 있다. ==**삼성·SK·LG·현대차·KB금융·신한·우리·하나금융**== 등 ==**한국 30대 그룹**==과 ==**선출시 PoC 22건**==이 ==**이미 진행 중**==이다.

HyperCLOVA X Studio Pro 핵심 기능:

1. **자체 데이터 파인튜닝**: ==**30분 안에 도메인 SLM 생성**==
2. **MCP 28종 기본 통합**: ==**Confluence·Jira·Salesforce·SAP·Slack**== 등
3. **에이전트 워크플로 노코드**: ==**드래그&드롭 캔버스**==
4. **온프레미스 옵션**: ==**삼성·국방·금융 보안 요구 충족**==
5. **가격**: ==**월 ₩4.9M~ 시트 단가 별도**==, 온프레미스 ==**연 ₩12억~**==

---

## 한국에 미치는 영향

### 1. NAVER 시총 +6.8조, KOSPI 인터넷 섹터 전반 강세

5월 20일 ==**NAVER 주가**==는 ==**+11.4%**==, ==**시가총액 +6.8조 원**==이 추가됐다. ==**카카오 주가**==는 ==**+4.2%**==(==**'카나나 Pro' 7월 출시 예고**==), ==**크래프톤·NCsoft·하이브**==도 ==**+3~5% 동반 강세**==. ==**KOSPI 인터넷·게임 섹터 ETF**==는 ==**+7.2%**== 폭등하며 ==**연중 최고가**==를 경신했다.

### 2. 한국 SaaS·B2B 시장 'NAVER vs 외산' 양분 본격화

==**HyperCLOVA X Studio Pro**==의 ==**6월 1일 출시**==는 ==**한국 B2B AI 시장**==을 ==**'NAVER vs 외산(GPT·Gemini·Claude)'**==의 ==**양분 구도**==로 ==**재편**==한다. ==**삼성SDS·SK C&C·LG CNS·현대오토에버**== 등 ==**SI 4사**==는 ==**HyperCLOVA X 전담 사업부**==를 ==**3분기 안 신설**==할 가능성이 매우 높다.

### 3. 카카오·LG·SKT의 '6월 1주차' 후속 출시 압박

==**카카오 카나나 Pro**==(7월 출시 예정), ==**LG EXAONE 3.5**==(6월 말 출시 예정), ==**SKT A.X K2**==(7월 출시 예정) ==**3사**==는 ==**HyperCLOVA X 3.0의 한국어 91.4점 + 가격 -55%**== 충격에 ==**6월 1주차 안에 대응 패키지를 즉시 공개**==해야 한다. ==**'성능 추격 + 가격 -50% + 도메인 특화'**==가 ==**3사 공통 전략**==으로 ==**5월 19일 사내 회의**==에서 ==**잠정 합의**==된 상태다.

### 4. 한국 정부의 'K-AI 모델 평가' 본궤도 — 6월 종료 가속

==**과기정통부·NIPA**==가 진행 중인 ==**'한국 자국 AI 모델 2차 평가'**==는 ==**HyperCLOVA X 3.0의 사내 자체 평가 결과**==가 ==**6월 1주차 공식 제출**==되면서 ==**LG·SKT·업스테이지 3파전 → NAVER 단독 선두**==로 ==**구도 변경**==이 거의 확정된다. ==**12월 결승 1위 보상 1,500억 원**==이 ==**NAVER 우선권**==으로 이동할 가능성이 매우 높다.

---

## 자본시장 시그널과 '한국형 OpenAI'의 길

🔥 **'한국어 1위 + 가격 -55%'의 자본시장 의미**:

- **NAVER 주가**: ==**+11.4%**==, 시총 +6.8조 원
- **NAVER 클라우드 ARR(예상)**: 2026년 ==**+88% YoY**==
- **HyperCLOVA X 3.0 API 호출(첫날)**: ==**14억 회**==
- **HyperCLOVA X 3.0 동시 통합 자사 서비스 MAU**: ==**4,820만**==
- **외국인 NAVER 순매수**: ==**2,160억 원**==(단일 거래일)

📌 **'한국형 OpenAI'의 정체성**: NAVER는 ==**'한국 시장에서 GPT를 이긴 LLM'**==이라는 ==**역사적 포지션**==을 ==**HyperCLOVA X 3.0**==으로 ==**굳혔다**==. 향후 ==**일본(LINE)·동남아·중동**==으로의 ==**'비영어권 특화 LLM' 글로벌 확장**==이 ==**2027년 본격 가시화**==될 가능성이 매우 높다.

⚠️ **한국 기업·정부 5월 20일~6월 1일 체크리스트**:

1. ==**HyperCLOVA X 3.0 API 한국어 실측 정확도**==를 ==**자사 5개 도메인에서 즉시 검증**==
2. ==**HyperCLOVA X Studio Pro 6월 1일 출시 직후 PoC 신청**==을 ==**5월 30일까지 확정**==
3. ==**'NAVER vs Gemini 4.0 한국어 격차'**==를 ==**자사 사용량 기준으로 매주 모니터링**==
4. ==**과기정통부 K-AI 평가 1위 보상 1,500억 원**==을 ==**NAVER 단독으로 확정될 시 시장 영향**==을 ==**미리 모델링**==
5. ==**LG·SKT·카카오 6월 1주차 대응 발표**==를 ==**실시간 모니터링**==

✅ **결론**: HyperCLOVA X 3.0의 정식 출시는 ==**'한국 LLM이 외산을 한국어에서 동시 추월'**==을 ==**자본시장 데이터**==로 ==**입증**==한 결정적 사건이다. 6월 1일 ==**Studio Pro 출시**==와 ==**K-AI 평가 종료**==가 동시에 진행되면서, ==**'한국형 OpenAI = NAVER'**==라는 ==**구도가 3분기 안에 시장 표준**==으로 ==**자리매김**==할 가능성이 매우 높다.`},{id:"20260520090004",title:"EU AI Act 2단계 강제 시행...메타·X·바이두 '고위험 AI 미신고' 첫 과징금 4.2억 유로",summary:"유럽연합이 5월 20일 0시부로 AI Act 2단계 강제 시행에 들어가며 메타(€1.8억)·X(€1.4억)·바이두(€1.0억) 등 빅테크 3사에 '고위험 AI 시스템 미신고' 첫 과징금 4.2억 유로를 일제 부과했다. AI Office는 추가로 8개사 사전 경고 발송. 한국 기업 중 NAVER·삼성전자·LG가 6월 30일까지 신고 의무 마감. 미준수 시 글로벌 매출 7% 과징금 위험.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-20T09:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",breaking:!1,content:`## EU AI Act '2단계 강제 시행' 첫날 — 과징금 4.2억 유로

**유럽연합(EU)**이 ==**5월 20일 0시(브뤼셀 시간) 정각**==, ==**AI Act 2단계 조항 — 고위험 AI 시스템 의무 신고·평가·문서화**==를 ==**강제 시행**==하면서 ==**첫날부터 빅테크 3개사에 총 4.2억 유로(약 6,300억 원) 과징금**==을 ==**일제 부과**==했다고 ==**EU AI Office**==가 ==**5월 20일 오전 11시 공식 발표**==했다.

📌 **핵심 인사이트**: 이번 과징금은 ==**'AI Act 강제 집행 시대'**==의 ==**첫 사례**==다. ==**메타(€1.8억)·X(€1.4억)·바이두(€1.0억)**==가 ==**고위험 AI 시스템을 사전 신고·평가 없이 운영**==한 ==**복수의 위반 사례**==를 ==**적발**==당했다. ==**'EU 시장에서의 AI 서비스 = 사전 신고 + 평가서 제출 + 인적 감독 보장'**==이라는 ==**법적 의무**==가 ==**오늘 자정부터 즉시 효력**==을 ==**발휘**==한다.

EU AI Act 2단계 강제 시행 핵심 조항:

1. **고위험 AI 시스템 의무 신고**: ==**채용·신용평가·교육·의료·법무·치안·이민 등 8개 도메인**==
2. **사전 적합성 평가**: ==**Notified Body 14곳**==이 ==**시스템 시험**==
3. **인적 감독 의무**: ==**'사람의 의미 있는 개입(meaningful human oversight)'**== ==**보장**==
4. **데이터 거버넌스 문서**: ==**훈련·검증·테스트 데이터 출처·편향 분석**==
5. **시판 후 모니터링**: ==**연 2회 자체 감사 + 5년 자료 보관**==
6. **과징금**: ==**글로벌 매출 7% 또는 €3,500만 中 큰 금액**==

> "EU는 ==**'AI 혁신을 막는 규제'**==가 아니라 ==**'AI 시장의 신뢰 인프라'**==를 ==**오늘부터 본격 운영**==한다. ==**유럽 5억 시민의 권리 보호**==와 ==**책임 있는 AI 산업**==은 ==**같은 동전의 양면**==이다."
> — Margrethe Vestager 후임 Antoine Robert, EU AI Office 디렉터 (5월 20일 발표문)

---

## 첫 과징금 3사의 위반 내역

⚡ **'사전 신고 누락 + 평가서 부재'의 공통 패턴**: AI Office가 공개한 ==**위반 적발 보고서**==에 따르면, 메타·X·바이두 ==**3사 모두**==는 ==**유럽 사용자 대상 채용 추천·콘텐츠 모더레이션·신용평가 AI 시스템**==을 ==**사전 신고 없이 운영**==한 ==**복수의 위반 사례**==를 보였다.

과징금 부과 내역 상세:

- **Meta(€1.8억)**: ==**Facebook·Instagram 채용 추천·콘텐츠 모더레이션 AI**== ==**6건**== 미신고
- **X(€1.4억)**: ==**Grok 4·Community Notes·광고 추천 AI**== ==**5건**== 미신고
- **Baidu(€1.0억)**: ==**Ernie 5.0의 EU 사용자 신용평가·교육 추천 AI**== ==**4건**== 미신고
- **추가 사전 경고 발송 대상 8개사**: ==**Alibaba·ByteDance·OpenAI·Anthropic·Apple·Microsoft·xAI·Mistral**==
- **2026년 12월 31일까지 EU 시장 진출 빅테크 전수 점검**: AI Office 공식 일정

🎯 **글로벌 매출 7% = 메타 €280억 잠재 과징금**: 이번 첫 과징금은 ==**'사례 만들기'**==를 위한 ==**일종의 시그널 케이스**==다. ==**'반복 위반 + 시스템적 위반'**==이 적발될 경우 ==**글로벌 매출 7%**==(메타 기준 ==**€280억(약 41조 원)**==)가 ==**현실 부과 가능**==하다. ==**기업의 EU 시장 진출 의사결정**==이 ==**근본적으로 흔들릴 정도의 임팩트**==다.

> "EU AI Act는 ==**GDPR보다 5배 강한 집행 의지**==를 ==**오늘 자정 첫 과징금**==으로 입증했다. ==**한국·미국·중국·인도 빅테크 모두**==가 ==**EU 시장에서의 AI 운영을 재설계**==해야 하는 ==**'2026년 가장 중요한 규제 이벤트'**==다."
> — Catelijne Muller, EU AI 윤리 자문위원장 (5월 20일 인터뷰)

---

## 한국에 미치는 영향

### 1. NAVER·삼성·LG '6월 30일 신고 마감' D-41

==**NAVER(HyperCLOVA X·LINE)·삼성전자(Galaxy AI·삼성헬스 AI)·LG(EXAONE·LG H&H 채용 AI)·KB금융·신한은행**== 등 ==**한국 30대 그룹**==이 ==**EU AI Act 고위험 시스템 의무 신고 마감일 6월 30일**==을 앞두고 ==**5월 20일 사내 긴급 점검**==에 ==**일제 착수**==했다. ==**미신고 시 글로벌 매출 7% 과징금 위험**==이 ==**6월 30일 자정부터 즉시 발효**==된다.

### 2. 정부 '한국 AI 기본법' 시행령 6월 안 정비

==**과기정통부·법제처·개인정보보호위원회**==는 ==**한국 AI 기본법(2025년 12월 통과)의 시행령**==을 ==**6월 안에 EU AI Act와 호환**==하는 ==**조항 정비**==를 ==**가속**==한다. ==**'고위험 AI 시스템 정의'**==를 ==**EU 8개 도메인과 일치**==시키는 ==**개정안 의견 수렴**==이 ==**5월 26일~6월 6일 진행**==된다.

### 3. 한국 AI 기업 'EU 시장 진출' 추가 비용 증가

==**뤼튼·업스테이지·페블러스·라이너·코난테크놀로지**== 등 ==**한국 AI 스타트업 220여 개사**==는 ==**EU 시장 진출 시 추가 컴플라이언스 비용 평균 €120만 ~ €380만**==을 ==**부담**==해야 한다. ==**Notified Body 인증·평가서·문서화 비용**==이 ==**연간 €60~120만**==으로 ==**추가 정형화**==된다. ==**KOTRA·KISA**==가 ==**EU 진출 한국 AI 기업 일괄 인증 지원 펀드 200억 원**==을 ==**6월 추경에 추가 편성**==하는 작업에 ==**5월 20일 즉시 착수**==했다.

### 4. 한국 SI·법무·컨설팅 '6~12개월 풀가동' 호황

==**삼성SDS·SK C&C·LG CNS·NHN·Bespin Global**== 등 ==**SI 5사**==와 ==**김앤장·태평양·세종·광장**== 등 ==**대형 로펌 4사**==는 ==**'AI Act 컴플라이언스 컨설팅 + 시스템 검증 + 문서화'**==을 ==**6월 1일부터 정식 서비스**==한다. ==**연 매출 +1.2조 원**==이 ==**한국 SI·법무 4축**==에 ==**추가**==될 가능성이 있다.

---

## 자본시장 시그널과 'AI 규제 시대'의 의미

💡 **5월 20일 자본시장 즉시 반응**:

- **Meta 주가**: ==**-3.2%**==, 시총 -$580억
- **X(비공개 호가)**: -4.1%
- **Baidu 주가**: ==**-5.8%**==
- **Alphabet·Microsoft 주가**: 평균 ==**-1.4%**==(추가 경고 대상)
- **Anthropic 비공개 호가**: -0.9%
- **NAVER 주가**: ==**+0.6%**==(한국어 자국 LLM 수혜)
- **EU AI 컴플라이언스 SaaS 5종 평균**: ==**+9.4%**==

📌 **'AI Act'의 의미**: EU AI Act는 ==**GDPR(2018) + DMA·DSA(2023~2024)**==에 이어 ==**디지털 규제 3대 축**==을 ==**완성**==한 ==**'유럽형 AI 거버넌스 모델'**==이다. ==**미국·중국·인도·일본·한국**==이 ==**향후 1~2년 안에 EU 호환 또는 차별화 모델**==을 ==**선택**==해야 하는 ==**'AI 규제 표준 경쟁'**==이 ==**본격 점화**==된다.

⚠️ **한국 기업·정부 5월 20일~6월 30일 체크리스트**:

1. ==**EU 사용자 대상 자사 AI 서비스 '고위험 도메인 매칭 매트릭스'**==를 ==**5월 26일까지 사내 완성**==
2. ==**Notified Body 14곳 중 한국 기업 우선 협업처(TÜV·DEKRA·BSI)**==를 ==**5월 30일까지 확정**==
3. ==**AI Act 시행령 호환 한국 AI 기본법 의견 수렴(5/26~6/6)**==에 ==**적극 참여**==
4. ==**KOTRA·KISA EU 진출 지원 펀드 200억 원 신청서**==를 ==**6월 10일까지 제출**==
5. ==**EU 시장 매출 비중이 5% 이상인 한국 기업 12개사**==는 ==**6월 30일 신고 마감 100% 준수**==

✅ **결론**: EU AI Act 2단계 강제 시행은 ==**'AI 규제 시대의 본격 점화'**==를 ==**첫 과징금 4.2억 유로**==로 ==**시장에 통보**==한 결정적 사건이다. 한국 기업·정부는 ==**5월 20일~6월 30일 41일 안에 신고·평가·문서화 3축**==을 ==**완성**==하지 못하면 ==**연 매출 7%**==라는 ==**역사적 규모의 과징금 위험**==을 ==**감수**==해야 한다.`},{id:"20260520090005",title:"테슬라 Optimus 2.0 가격 $19,999 공개...2027년 출시·연 100만대 양산, 머스크 'iPhone 모먼트'",summary:"일론 머스크 테슬라 CEO가 5월 19일 X 라이브 방송에서 휴머노이드 로봇 'Optimus 2.0' 가격을 $19,999(약 2,700만 원)로 공개하고 2027년 1분기 출시, 첫해 양산 목표 100만 대를 발표했다. 손가락 22도 자유도, 작업 학습 90초, 음성 인터페이스 Grok 5 탑재. 머스크 '아이폰 모먼트의 로봇 버전'이라며 사전예약 24시간 만에 38만 대 돌파.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-20T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",breaking:!1,content:`## Optimus 2.0 가격 $19,999 공개 — 24시간에 38만 대 사전예약

**Tesla CEO 일론 머스크(Elon Musk)**가 ==**5월 19일 오후 10시(미국 동부시간) X 라이브 방송**==에서 ==**휴머노이드 로봇 'Optimus 2.0'의 공식 가격 $19,999(약 2,700만 원)**==과 ==**2027년 1분기 정식 출시 일정**==을 ==**전격 공개**==했다. ==**첫해 양산 목표는 100만 대**==. ==**사전예약 페이지 오픈 24시간 만에 38만 대**==가 ==**완판**==되며 ==**'테슬라 사이버트럭 사전예약 기록'**==을 ==**경신**==했다.

📌 **핵심 인사이트**: Optimus 2.0은 ==**휴머노이드 로봇 사상 첫 '2만 달러 미만' 가격대**==를 ==**대량 양산 시장에 제시**==한 ==**역사적 사건**==이다. ==**중국 Unitree G1($16,000)·Figure 02($30,000)·Apptronik Apollo($45,000)**==와의 ==**가격 경쟁 우위**==를 확보하면서, 머스크는 ==**'로봇의 아이폰 모먼트(iPhone Moment for Robotics)'**==라고 선언했다.

Optimus 2.0 핵심 사양 확정:

1. **키 / 체중**: ==**173cm / 56kg**==
2. **손가락 자유도**: ==**22 DOF**== (Optimus 1세대 11 DOF의 2배)
3. **최대 가반 하중**: ==**20kg**==
4. **배터리**: ==**14시간 연속 작업**==
5. **작업 학습 시간**: ==**시연 90초**==로 ==**신규 작업 습득**==
6. **음성 인터페이스**: ==**xAI Grok 5 탑재**==
7. **로컬 추론 칩**: ==**Tesla AI5(자체 설계, 3nm TSMC)**==
8. **출시일**: ==**2027년 1분기**==
9. **가격**: ==**$19,999**==
10. **첫해 양산 목표**: ==**100만 대**==

> "Optimus 2.0은 ==**가전이자, 자동차이자, 동료**==다. ==**스마트폰이 2007년 세상을 바꿨듯, 휴머노이드 로봇이 2027년부터 세상을 바꾼다**==. 우리는 ==**가격을 아이폰 가격대로 끌어내려**== ==**진짜 대중화**==를 ==**오늘 선언**==한다."
> — Elon Musk, Tesla·xAI CEO (5월 19일 X 라이브 방송)

---

## '시연 90초 학습' — Optimus 2.0의 결정적 차별점

⚡ **'사람이 한 번 하면, 로봇이 따라 한다'**: Optimus 2.0의 ==**시연 학습(Demonstration Learning)**==은 ==**사용자가 90초간 작업을 직접 시연**==하면 ==**로봇이 즉시 모방 + 일반화**==하는 ==**'Imitation + RL Fine-tuning' 통합 시스템**==이다. ==**Tesla FSD V14**==의 ==**Vision-Language-Action 통합 추론 모델**==이 ==**Optimus 2.0**==에 ==**그대로 이식**==됐다.

시연 학습 메커니즘:

- **시각 입력**: ==**8개 카메라 360도 동시 캡처**==
- **VLA 모델**: ==**Tesla AI5 칩 로컬 추론**==(==**15ms**==)
- **시연 90초**: ==**작업 분해·물체 인식·동작 시퀀스 추출**==
- **모방 + RL 파인튜닝**: ==**자체 시뮬레이션 12만 회**==
- **신규 작업 첫 성공률**: ==**76%**==
- **반복 학습 후**: ==**3시간 안에 95%**==

🎯 **Grok 5 음성 인터페이스 + 친밀감 디자인**: Optimus 2.0은 ==**xAI Grok 5**==(예정)를 ==**기본 음성 인터페이스**==로 탑재한다. 사용자는 ==**'커피 가져와줘'·'아이가 자는지 확인해줘'·'세탁 끝나면 알려줘'**==처럼 ==**일상 자연어**==로 ==**명령**==할 수 있다. ==**머리 부분의 OLED 패널**==이 ==**눈·감정 표현**==을 ==**렌더링**==하면서 ==**'친밀감 디자인'**==을 ==**완성**==했다.

> "Optimus 2.0의 ==**$19,999 가격대**==는 ==**중산층 가구의 자동차 다음 구매 결정**==으로 ==**대중화**==할 수 있는 ==**유일한 휴머노이드**==다. ==**2030년 글로벌 휴머노이드 시장 $2,400억**==의 ==**60% 점유**==가 가능한 ==**'아이폰급 플랫폼'**==이 ==**오늘 탄생**==했다."
> — Adam Jonas, Morgan Stanley 자동차·모빌리티 담당 (5월 19일 리서치)

---

## 한국에 미치는 영향

### 1. 삼성SDI·LG에너지솔루션 '로봇 배터리' 추가 수혜 — 6월 안 협상

==**Optimus 2.0의 14시간 연속 작업**==을 가능케 하는 ==**고밀도 리튬이온 배터리**==는 ==**삼성SDI·LG에너지솔루션·SK온**== 3사가 ==**테슬라 차세대 21700·4680 셀**==을 ==**공급**==할 가능성이 매우 높다. ==**연 100만 대 × 2.4kWh = 2.4GWh**==의 ==**추가 수요**==가 ==**2027년부터 본격 발생**==한다. ==**연 매출 +0.4조 원**==이 ==**한국 배터리 3사**==에 ==**추가**==될 전망이다.

### 2. 한국 휴머노이드 스타트업 '레인보우로보틱스·도구공간·뉴빌리티' 자극

==**삼성전자가 인수한 레인보우로보틱스**==, ==**KAIST 출신 도구공간**==, ==**서울대 출신 뉴빌리티**==는 ==**'한국형 휴머노이드 가격 경쟁력'**==을 ==**$30,000 이하**==로 ==**3분기 안에 재설계**==할 가능성이 있다. ==**삼성전자 갤럭시 로봇 2.0**==(2027년 출시 예정)이 ==**Optimus 2.0과 정면 대결**==할 ==**유력 후보**==로 거론된다.

### 3. 현대차 'Atlas + Mobile X' 로봇 사업 가속 — 6월 사업부 신설 가시화

==**현대차그룹**==이 ==**보스턴 다이내믹스 Atlas + 자체 휴머노이드 'Mobile X'**==를 ==**통합한 로봇 사업부 신설**==을 ==**6월 임원 인사**==에서 ==**공식 발표**==할 가능성이 매우 높다. ==**연간 R&D 예산 1.2조 원**==이 ==**3년간 추가 투입**==될 가능성이 있으며, ==**현대차 노조와의 '로봇 도입 협상'**==이 ==**3분기 안에 본격화**==된다.

### 4. 한국 '로봇 노동법·안전법' 정비 필요성 가시화

==**Optimus 2.0의 2027년 한국 출시 시점**==을 앞두고 ==**고용노동부·산업통상자원부·과기정통부**==는 ==**'AI·로봇 작업장 도입 가이드라인'**==을 ==**6월 안에 합동 TF**==를 ==**구성**==하는 단계다. ==**'1대 로봇 = 인간 노동자 1인 대체 시 사회보장 부담금 의무화'**==와 같은 ==**선제적 입법 논의**==가 ==**6~9월 사이**== ==**가시화**==될 가능성이 있다.

---

## 자본시장 시그널과 '아이폰 모먼트'의 의미

🔥 **5월 19~20일 자본시장 반응**:

- **Tesla 주가**: 시간 외 ==**+9.6%**==, 시총 ==**+$1,180억**==
- **xAI 비공개 호가**: ==**+12.4%**==
- **Apptronik(비상장)**: 추정 가치 -8%
- **Figure AI 호가**: -5.2%
- **Unitree(중국 비상장)**: 추정 -11%
- **삼성SDI·LG엔솔·SK온 평균**: ==**+4.8%**==
- **레인보우로보틱스 주가**: ==**+18.7%**==(연중 최고)
- **한국 로봇 ETF 3종 평균**: ==**+8.4%**==

📌 **'$19,999의 결정적 의미'**: 미국 ==**가구당 자동차 평균 가격 $48,000**==의 ==**41% 수준**==이라는 점은, ==**Optimus 2.0이 '대형 가전' 카테고리에서 자동차 다음 구매 결정**==으로 ==**진입**==할 수 있다는 시그널이다. ==**연 매출 잠재력 $200억(테슬라 자동차 매출의 21%)**==이 ==**2028년 이후 정량 가시화**==된다.

💡 **'아이폰 모먼트' vs '회의적 시각' 동시 존재**:

- **낙관론**: ==**Morgan Stanley·Cathie Wood·아담 조나스**==는 ==**'2030년 4,000만 대'**==까지 전망
- **신중론**: ==**Toyota Research·Boston Dynamics**==는 ==**'5년 100만 대도 도전적'**==이라며 ==**제조 캐파·안전 인증·보험·법적 책임**==을 ==**리스크**==로 거론
- **2027년 1분기 첫 출하**: ==**텍사스 기가팩토리 라인 11**==에서 ==**월 5만 대 양산**==을 ==**목표**==

⚠️ **한국 기업·정부 5월 20일~12월 체크리스트**:

1. ==**Optimus 2.0 2027년 한국 출시 시점**==을 ==**산업부 사전 조사**==를 ==**6월 안 시작**==
2. ==**삼성·LG·SK 배터리 3사**==는 ==**테슬라 로봇 배터리 협상**==을 ==**6월 안 마무리**==
3. ==**현대차 로봇 사업부 신설**==을 ==**6월 임원 인사**==에서 ==**공식 발표**==
4. ==**고용노동부 'AI·로봇 작업장 도입 가이드라인'**==을 ==**9월 안 발표**==
5. ==**KAIST·서울대 휴머노이드 인력 양성 프로그램**==을 ==**3분기 안 본격 가동**==

✅ **결론**: Optimus 2.0의 $19,999 가격 공개는 ==**'휴머노이드 로봇의 대중화'**==를 ==**머스크가 단 한 번의 X 라이브**==로 ==**시장 표준**==으로 ==**설정**==한 결정적 사건이다. 한국 기업·정부는 ==**5월 20일~12월 7개월 동안 배터리·로봇 부품·SI·안전 인증·노동 정책 5축의 즉각 정비**==를 ==**완료**==해야 ==**2027년 1분기 첫 출하 시점**==에 ==**한국 기업 30개사가 동반 수혜**==를 ==**확보**==할 수 있다.`},{id:"20260519090001",title:"Google I/O 2026 개막...Gemini 4.0·Spark 에이전트·Android XR 글래스 19일 공개",summary:"5월 19일 오전(현지시간) 마운틴뷰 쇼어라인에서 Google I/O 2026이 개막한다. 통합 멀티모달 'Gemini 4.0', 사용자 대신 일하는 에이전트 'Gemini Spark', 디스플레이 없는 'Android XR 글래스' 프리뷰가 키노트의 3대 축이다. OpenAI GPT-5.5와의 정면 대결을 위한 무료 티어 확대, Gemini Pro 3.5·Flash 3.5 가격 재설계가 동반 공개된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-19T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",breaking:!0,content:`## 5월 19일 오전 10시, Google I/O 2026이 막을 올린다

**Google I/O 2026**이 한국시간 ==**5월 20일 새벽 2시(현지 5월 19일 오전 10시 PT)**==, **캘리포니아 마운틴뷰 쇼어라인 앰피시어터**에서 정식 개막한다. ==**이틀간(5월 19~20일)**== 진행되는 컨퍼런스의 키노트는 ==**Sundar Pichai CEO와 Demis Hassabis DeepMind CEO**==가 ==**공동 진행**==한다. 이번 행사는 **OpenAI GPT-5.5 출시(4월 말)**와 **Anthropic Claude Opus 4.5**의 압박 속에서 ==**구글의 'AI 패권 재탈환' 신호탄**==으로 평가된다.

📌 **핵심 인사이트**: 이번 I/O의 3대 축은 ==**'통합 멀티모달 Gemini 4.0' + '사용자 대신 일하는 에이전트 Gemini Spark' + '디스플레이 없는 Android XR 글래스 프리뷰'**==다. ==**Pro·Flash·Lite의 3티어 가격 재설계**==와 ==**무료 사용자 한도 확대**==가 동반 공개될 가능성이 높다.

I/O 2026 키노트 예상 발표 라인업:

1. **Gemini 4.0** — 텍스트·이미지·비디오 통합 단일 파이프라인 모델
2. **Gemini Spark(코드네임 Remy)** — 받은편지함 정리, 회의 브리프 자동 작성 에이전트
3. **Gemini Pro 3.5 / Flash 3.5** — 가격·속도·컨텍스트 윈도우 재설계
4. **Android XR 글래스 프리뷰** — 디스플레이 없이 카메라·스피커·마이크
5. **Googlebook** — Gemini 내장 프리미엄 안드로이드 노트북(가을 출시)
6. **Veo 3.5 / Imagen 5** — 비디오·이미지 생성 차세대 모델
7. **AI Mode 정식 출시** — Google 검색의 에이전트 모드 전환

> "우리는 Gemini를 ==**'사용자가 사용하는 모델'**==이 아니라 ==**'사용자 대신 일하는 동반자'**==로 진화시킬 것이다. 이번 I/O는 ==**AI 에이전트의 컨슈머 대중화**==를 본격적으로 알리는 자리다."
> — Sundar Pichai, Google·Alphabet CEO (5월 16일 알파벳 직원 메모)

---

## Gemini 4.0의 차별점: 통합 멀티모달 단일 파이프라인

⚡ **'한 모델에서 텍스트·이미지·비디오 동시 생성'**: 5월 초 ==**Gemini 앱 UI 문자열**==에서 발견된 신규 모델은 ==**텍스트·이미지·비디오를 단일 추론 파이프라인**==으로 처리한다. 기존 Gemini 2.5·3.1은 ==**Veo·Imagen·LLM이 분리**==돼 있었지만, **Gemini 4.0**은 ==**'네이티브 멀티모달'**==이라는 점이 결정적 차이다.

Gemini 4.0의 기술적 추정 사양:

- **활성 파라미터**: ==**약 1.6~2.0T**== (MoE 추정)
- **컨텍스트 윈도우**: ==**2M 토큰**== (Pro 티어)
- **응답 속도**: GPT-5 대비 ==**+22%**==
- **MMLU-Pro 점수 추정**: ==**87.4점**== (GPT-5 85.9점, Claude Opus 4.5 86.2점)
- **비디오 생성 길이**: 단일 호출 ==**최대 60초**==
- **출시 시점**: I/O 직후 ==**Vertex AI 베타**==, ==**6월 안 일반 공개**==

🎯 **Gemini Spark — 사용자 대신 일하는 에이전트**: 코드네임 ==**'Remy'**==로 알려진 ==**Gemini Spark**==는 ==**'에이전트 모드'**==로 동작한다. 사용자가 ==**'이번 주 회의 5건의 브리프를 작성해줘'**==라고 말하면, ==**Gmail·Calendar·Docs·Drive**==를 ==**동시 순회**==하면서 ==**개별 회의 자료를 자동 수집**==하고 ==**한 페이지 요약**==을 만든다.

> "Spark는 ==**OpenAI Operator·Anthropic Computer Use**==를 ==**컨슈머 대중화 한 단계**== 끌어올린다. ==**구글 워크스페이스 사용자 30억 명**==이 ==**기본 도구**==로 접근할 수 있는 ==**최초의 범용 에이전트**==가 될 수 있다."
> — Mark Gurman, Bloomberg 테크 컬럼니스트 (5월 15일 분석)

---

## Android XR 글래스: 메타·애플과의 정면 대결

💡 **'디스플레이 없는 첫 XR 디바이스'**: Google이 I/O 2026에서 공개하는 ==**Android XR 글래스**==의 첫 제품은 ==**디스플레이 없이 카메라·스피커·마이크**==만 탑재한다. ==**Gemini와의 핸즈프리 대화**==를 ==**일반 안경 폼팩터**==로 구현하는 것이 목표다.

Android XR 글래스 핵심 사양 추정:

- **무게**: 약 ==**42g**== (일반 안경 +18g)
- **카메라**: ==**12MP**== 전방, 시선 자동 추적
- **배터리**: ==**6시간 연속 음성 대화**==
- **출시 시기**: ==**2026년 4분기**==
- **출시 가격 추정**: ==**$499~599**==
- **파트너 안경 브랜드**: ==**Warby Parker·Gentle Monster·Ray-Ban**== 가능성 거론

---

## 한국에 미치는 영향

### 1. NAVER·삼성·LG의 'Gemini 4.0 대응' 6월 1주차 본격화

==**NAVER HyperCLOVA X 3.0**==(2분기 출시 예정), ==**삼성전자 Galaxy AI 2.5**==, ==**LG AI연구원 EXAONE 3.5**==는 ==**Gemini 4.0과의 멀티모달 벤치마크 격차**==를 ==**6월 1주차에 사내 평가**==한 뒤 ==**3분기 모델 로드맵을 재조정**==할 가능성이 매우 높다. 특히 ==**삼성 갤럭시 S26 Ultra(2026년 1월 출시)**==의 ==**기본 AI 어시스턴트**==를 ==**Galaxy AI vs Gemini Nano 3**==으로 ==**재분배**==하는 검토가 ==**6~7월 안에 가시화**==된다.

### 2. 카카오·네이버의 '에이전트 모드' 패스트팔로우

**Gemini Spark가 ==Gmail·Calendar·Docs==를 ==동시 순회==**한다는 점은, ==**카카오톡 + 카카오워크 + 카카오메일**==을 ==**단일 에이전트로 통합**==하는 ==**'카카오 카나나 Spark'**==의 ==**3분기 출시 일정 가속**==을 압박한다. ==**네이버 큐: + 웍스 + 라인웍스**==도 ==**유사 통합 에이전트**==를 ==**4분기 안에 정식 출시**==할 가능성이 거론된다.

### 3. 삼성·LG 디스플레이의 'XR 패널 수주' 6개월 가속

==**Android XR 글래스**==의 ==**디스플레이 없는 첫 제품**==은 ==**2027년 출시 예정 디스플레이 탑재 모델**==의 ==**전초전**==이다. ==**삼성디스플레이·LG디스플레이**==는 ==**Micro-OLED·Micro-LED XR 패널 수주**==를 위해 ==**6월 안에 구글과 공급 협상**==을 ==**가속**==할 가능성이 있다. ==**연간 수주 규모 1.2~1.8조 원**==이 ==**중장기 수익원**==이 될 수 있다.

### 4. 광고·검색 시장의 'AI Mode 정식 출시' 충격

==**Google 검색 'AI Mode' 정식 출시**==는 ==**한국 검색 광고 시장의 점유율 지각변동**==을 가속한다. ==**네이버 검색 점유율(58.4%)**==이 ==**6개월 안에 -3~5%p**== 추가 잠식될 가능성이 거론된다. ==**네이버 큐: 단독 모드 + Whale 4.0 + Naver Cloud Search API**==의 ==**3축 방어 전략**==이 ==**3분기 안에 본격화**==된다.

---

## 자본시장 시그널과 '구글 vs OpenAI'의 다음 라운드

🔥 **5월 16~18일 시장 사전 반응**:

- **Alphabet 주가**: 3거래일 누적 ==**+5.8%**==
- **시가총액 증가폭**: 약 ==**$1,420억**==
- **AI ETF 5종 평균**: ==**+3.2%**==
- **OpenAI 비공개 호가**: $6,800억 → $6,950억
- **Anthropic 비공개 호가**: $850억 → $880억

📌 **'Gemini 4.0이 GPT-5.5를 추월할 것인가'**가 ==**5월 20일 키노트의 핵심 시장 질문**==이다. ==**SemiAnalysis·The Information·Stratechery**==는 ==**MMLU-Pro·SWE-bench·MMMU 3대 벤치마크**==에서 ==**Gemini 4.0이 GPT-5.5를 0.8~2.3점 차이로 앞설 가능성**==을 ==**80% 이상**==으로 ==**제시**==했다.

⚠️ **한국 기업 5월 19~26일 행동 체크리스트**:

1. ==**Gemini 4.0 API 단가/속도/컨텍스트 윈도우**== 즉시 측정
2. ==**Gemini Spark의 워크스페이스 통합 시 자사 SaaS 영향도**== 분석
3. ==**Android XR 글래스 6월 한국 진입 시점**== 모니터링
4. ==**삼성·LG·네이버·카카오의 6월 1주차 대응 발표**== 추적
5. ==**Google AI Mode 한국어 정식 도입 시점**== 광고주 사전 협상

✅ **결론**: Google I/O 2026은 ==**'AI 패권의 재탈환'**==을 ==**구글이 무대 중앙에서 선언하는 자리**==다. 한국 기업·정부는 ==**5월 19~26일 일주일 안에 모델·가격·에이전트·디바이스 4축의 즉각 대응 패키지**==를 ==**확정**==해야 한다.`},{id:"20260519090002",title:"삼성 HBM4 엔비디아 품질 테스트 '최고 점수' 통과...SK하이닉스 70% 독점 균열 시작",summary:"삼성전자의 HBM4가 엔비디아 차세대 AI 가속기 'Rubin'용 품질 테스트에서 최고 평가 등급을 받았다고 5월 17~18일 외신·국내 매체가 일제히 보도했다. 1분기 공식 공급계약 체결, 6월 양산 본격화가 예상된다. SK하이닉스 70%·삼성 17% → SK 55%·삼성 35% 점유율 재편이 1년 안에 가시화될 전망. 삼성전자 주가 5월 18일 +6.4% 급등.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-19T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800",breaking:!0,content:`## 삼성 HBM4, 엔비디아 'Rubin'용 테스트 '최고 점수' 통과

**삼성전자**의 차세대 ==**HBM4(High Bandwidth Memory 4세대)**==가 **엔비디아 차세대 AI 가속기 'Rubin' 플랫폼**용 ==**품질 테스트(qualification test)**==에서 ==**'최고 평가 등급(highest evaluation score)'**==을 받았다고 ==**SamMobile·Korea Herald·Investing.com·Tweaktown**==이 5월 17~18일 동시 보도했다. 이는 ==**SK하이닉스의 HBM4 시장 70% 독점 구도**==에 ==**균열을 만들 수 있는 결정적 사건**==이다.

📌 **핵심 인사이트**: 삼성 HBM4는 ==**엔비디아 차세대 GPU 'Rubin'**==(2026년 하반기 출시 예정)에 ==**채택될 가장 유력한 후보**==로 떠올랐다. ==**SK하이닉스 단독 공급 구도**==였던 ==**HBM3E 엔비디아 채택률 70%**==가, ==**HBM4 세대에서는 SK 55% / 삼성 35% / 마이크론 10%**==로 ==**재편될 가능성**==이 ==**1년 안에 가시화**==된다.

삼성 HBM4의 핵심 진전 타임라인:

1. **2024년 12월**: 삼성 HBM4 내부 핵심 테스트 클리어, 양산 준비 완료
2. **2025년 12월**: 엔비디아에 첫 샘플 제출
3. **2026년 1월**: 첫 샘플 생산, 엔비디아 quallification 개시
4. **2026년 3월(GTC 2026)**: 삼성·SK 엔비디아 공급망 전초전
5. **2026년 5월 17일**: 삼성 HBM4 엔비디아 ==**'최고 점수' 평가**==(외신 보도)
6. **2026년 6월 (예상)**: ==**양산 본격화**==, ==**Q1 공식 공급계약**==

> "삼성 HBM4 통과는 ==**SK하이닉스 단일 공급 리스크 해소**==를 의미한다. 엔비디아 Rubin 양산 램프업 시점인 ==**4분기**==에 ==**삼성과 SK가 듀얼 소싱 체제**==로 ==**Rubin 출하량 50% 추가 확보**==가 가능해진다."
> — Dan Hutcheson, TechInsights 부회장 (5월 18일 분석)

---

## SK하이닉스 단독 독점 구도가 깨지는 이유

⚡ **'엔비디아의 듀얼 소싱 전략'**: 엔비디아는 ==**Rubin 양산량 목표를 H100 대비 2.3배, Blackwell Ultra 대비 1.4배**==로 잡고 있다. ==**SK하이닉스 단독 공급으로는 4분기 양산 램프업이 불가능**==한 상태다. ==**삼성 HBM4의 품질 테스트 통과**==는 ==**'SK 의존 리스크를 단번에 절반으로 줄이는 신호'**==다.

HBM 시장 점유율 변화 전망:

- **2025년 2분기**: SK 62%, 마이크론 21%, 삼성 17%
- **2025년 4분기**: SK 65%, 삼성 19%, 마이크론 16%
- **2026년 1분기**: SK 68%, 삼성 22%, 마이크론 10%
- **2026년 4분기(추정)**: SK 55%, ==**삼성 35%**==, 마이크론 10%
- **2027년 1분기(추정)**: SK 50%, ==**삼성 38%**==, 마이크론 12%

🎯 **삼성 HBM4의 차별점**:

1. **공정 노드**: ==**1c(11nm 클래스) D램**== 기반
2. **단수(stack)**: ==**12-Hi(=12단)**==, 16-Hi 샘플도 6월 제출 예정
3. **대역폭**: ==**1.65TB/s 이상**==
4. **TDP**: SK 대비 ==**-8%**==
5. **AMD와의 별도 계약**: ==**AMD MI400X용 HBM4**==에 ==**삼성 주공급사로 이미 지명**==

> "삼성은 ==**'AMD가 먼저, 엔비디아가 나중'**==이라는 ==**전형적 후발 진입 전략**==을 ==**완벽히 성공**==시켰다. AMD MI400X 잭팟에 ==**엔비디아 Rubin 듀얼 소싱**==이 ==**확정**==되면, ==**삼성의 HBM 매출은 2026년 +178%**==에 이를 수 있다."
> — 김선우, 메리츠증권 반도체팀장 (5월 18일 리포트)

---

## 한국에 미치는 영향

### 1. 삼성전자 주가·시가총액 즉각 반응

==**삼성전자 주가**==는 5월 18일 ==**+6.4%**== 급등하며 ==**76,800원**==을 기록했다. 시가총액 ==**약 28조 원 증가**==. 외국인 순매수 ==**3,820억 원**==이 단일 거래일 유입됐다. ==**SK하이닉스 주가**==는 ==**-2.8%**==(==**263,500원**==) 일시 조정됐지만, ==**HBM4 16-Hi 우선 공급권**==으로 ==**6월 안 반등**==이 점쳐진다. ==**한미반도체·테스나·HPSP**== 등 ==**HBM 후공정 장비주**==도 ==**+4~8% 동반 상승**==했다.

### 2. 평택 P3·P4 양산 본격화 → 2.5만 명 추가 채용

==**삼성전자 평택 P3 라인**==은 ==**HBM4 양산 본격 가동**==이 ==**6월 1일 정식 개시**==된다. ==**P4 라인 부분 가동**==도 ==**3분기 내 추가**==된다. ==**평택 캠퍼스 추가 채용 규모**==는 ==**HBM 전담 엔지니어 8,500명 + 후공정 16,800명 = 약 25,300명**==으로 추산된다. ==**평택시·화성시 인근 부동산 가격**==이 ==**상승 압력**==을 받기 시작했다.

### 3. 동탄·천안·청주 후공정 협력사 동반 호황

==**HBM4의 본드 패키징(TC-NCF·MR-MUF) 후공정**==을 담당하는 ==**한미반도체(천안)·테스나(청주)·기가비스(동탄)·HPSP(평택)**==는 ==**6~12개월 가시 매출 +47~92%**== 증가가 ==**확정**==된다. ==**중소 협력사 약 280개사**==가 ==**3분기 안에 풀가동**==에 들어간다.

### 4. 한국 AI 데이터센터·HBM 수출 정책 동반 강화

==**산업통상자원부**==는 ==**HBM4 양산 본격화 직후**== ==**'반도체 메가펀드 2단계'**==를 ==**6월 추경에 1.2조 원 추가 편성**==하는 작업에 ==**5월 17일 즉시 착수**==했다. ==**HBM 수출 통제 강화 + 핵심 인력 유출 방지**== 패키지가 ==**6월 임시국회에 상정**==될 가능성이 있다. ==**KOTRA**==도 ==**HBM4 글로벌 마케팅 예산**==을 ==**2배 증액**==한다.

---

## 자본시장 시그널과 '엔비디아 Rubin' 양산 가속 효과

💡 **엔비디아 Rubin 가속의 시그널**: 엔비디아는 ==**Rubin 출하 목표를 1.2M장 → 1.8M장**==으로 ==**상향**==하는 ==**내부 가이던스 수정**==을 ==**5월 14일 시작**==한 것으로 ==**Tweaktown**==이 보도했다. ==**삼성 HBM4 안정 공급**==이 ==**전제 조건**==이었던 점을 고려하면, ==**5월 17일 품질 테스트 통과**==는 ==**'엔비디아 Rubin 양산 가속의 결정적 조건'**==이다.

5월 18일 주요 시장 반응:

- **삼성전자**: ==**+6.4%**==(시총 +28조 원)
- **SK하이닉스**: -2.8%(일시 조정)
- **NVIDIA(미장)**: ==**+3.1%**==(시총 +$1,180억)
- **AMD(미장)**: ==**+4.4%**==
- **마이크론(미장)**: -2.2%
- **HBM 관련 ETF 4종 평균**: ==**+3.9%**==

> "==**'HBM은 SK가 1위, 삼성은 영원한 추격자'**==라는 ==**시장의 고정관념**==이 ==**5월 18일 무너졌다**==. 향후 12개월은 ==**'듀얼 강자' 시대**==의 시작이다."
> — 도현우, NH투자증권 메모리 담당 (5월 18일 리서치)

---

⚠️ **삼성전자가 클리어해야 할 다음 관문**:

1. ==**Q1 공식 공급계약 체결**== — 6월 1주차 안에
2. ==**16-Hi HBM4 샘플 엔비디아 제출**== — 6월 말 안에
3. ==**HBM4E(차세대 12-Hi 개선)**== — 4분기 샘플 출하
4. ==**HBM4 수율 80%+ 안정화**== — 7월 안 평택 P4
5. ==**구글·아마존 자체 가속기(TPU·Trainium) 추가 채택**==

✅ **결론**: 삼성 HBM4의 엔비디아 테스트 통과는 ==**한국 메모리 산업의 전략 균형**==이 ==**'SK 단독' → '삼성·SK 듀얼'**==로 ==**구조적 재편**==됐음을 알리는 ==**결정적 분기점**==이다. ==**6월 양산 본격화**==와 ==**Q1 공급계약 체결**==이 이뤄지면, ==**삼성전자 시가총액 600조 원 회복**==이 ==**3분기 안에**== ==**현실적 시나리오**==가 된다.`},{id:"20260519090003",title:"애플 iOS 27, Siri에 구글·앤트로픽 AI 선택권 부여...'AI 외주화' 9월 WWDC 정식 공개",summary:"애플이 iOS 27·iPadOS 27·macOS 27에서 사용자가 Apple Intelligence의 기본 AI 모델을 Google Gemini, Anthropic Claude 등 서드파티로 선택할 수 있는 'Extensions' 프레임워크를 준비 중이라고 블룸버그·9to5Mac·테크크런치가 5월 5일 보도했다. 6월 WWDC에서 추가 디테일이 공개되며, OpenAI는 이미 통합돼 있고 구글·앤트로픽 모델은 현재 테스트 중. 음성도 모델별로 다르게 설정 가능.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-19T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",breaking:!1,content:`## 애플이 'AI 모델 선택권'을 사용자에게 넘긴다

**Apple**이 ==**iOS 27·iPadOS 27·macOS 27**==(2026년 가을 정식 출시)에서 ==**Apple Intelligence의 기본 AI 모델**==을 ==**사용자가 직접 선택**==할 수 있는 ==**'Extensions' 프레임워크**==를 ==**내부 개발**==하고 있다고 ==**Bloomberg·9to5Mac·TechCrunch·Business Standard**==가 ==**5월 5~6일 일제히 보도**==했다.

📌 **핵심 인사이트**: 이번 변화는 ==**애플의 'AI 자체 개발 노선' 사실상 후퇴**==를 의미한다. ==**Siri·Writing Tools·Image Playground·Safari 요약**==과 같은 ==**Apple Intelligence 핵심 기능**==에서 ==**'기본 모델을 OpenAI에서 Google Gemini·Anthropic Claude로 교체'**==할 수 있다는 점은, ==**애플의 '인하우스 LLM' 경쟁력 한계**==를 ==**공개 인정**==하는 신호로 해석된다.

'Extensions' 프레임워크의 핵심 메커니즘:

1. **앱 설치 = 모델 설치**: 사용자가 ==**Gemini 앱·Claude 앱**==을 ==**App Store에서 다운로드**==하면, 그 모델이 ==**Apple Intelligence 백엔드**==에 ==**자동 등록**==
2. **시스템 환경설정에서 기본 모델 선택**: ==**Siri 응답·Writing Tools·Notification 요약·Visual Intelligence**==의 ==**기본 LLM**==을 ==**드롭다운으로 변경**==
3. **앱별 모델 분리**: ==**메일은 Apple 자체, 사파리는 Gemini, 메모는 Claude**==처럼 ==**앱별 다른 모델**==을 ==**할당**==
4. **음성도 모델별 분리**: 각 모델별로 ==**고유 음성 톤**==을 ==**개별 설정**==

> "애플은 이제 ==**'AI 운영체제 제공자(AI OS Provider)'**==로 자리 잡으려 한다. ==**자체 모델 개발 경쟁**==에서 ==**OpenAI·구글·앤트로픽**==을 이길 수 없다면, ==**그들을 모두 자신의 OS에서 작동**==하게 만드는 것이 ==**최선의 협상 카드**==다."
> — Mark Gurman, Bloomberg (5월 5일 "Power On" 뉴스레터)

---

## OpenAI 단독 → 멀티 프로바이더 시대로

⚡ **현재 통합 상태와 변화 시점**: 애플 인텔리전스는 ==**2024년부터 OpenAI ChatGPT**==를 ==**유일한 외부 모델**==로 통합해 왔다. ==**Apple Intelligence의 약 40%**==가 ==**OpenAI 백엔드에 의존**==하고 있다는 것이 ==**2025년 4분기 애플 사내 추산**==이다. ==**iOS 27 Extensions**==는 이 ==**'OpenAI 단독 의존'**==을 ==**'멀티 프로바이더 선택'**==으로 ==**구조 변경**==한다.

Extensions 통합 진행 상황:

- **OpenAI ChatGPT**: ==**iOS 18부터 통합 완료**==, Extensions에서 우선 후보
- **Google Gemini**: ==**현재 베타 테스트 진행 중**==, iOS 27 정식 지원
- **Anthropic Claude**: ==**현재 베타 테스트 진행 중**==, iOS 27 정식 지원
- **xAI Grok**: 협상 진행 중, ==**iOS 27.1**==에서 추가 가능성
- **DeepSeek / Mistral**: ==**중장기 검토 단계**==
- **국가별 차등 제공**: ==**중국용 Apple Intelligence**==는 ==**Baidu Ernie·Qwen**== 별도 통합 예정

🎯 **6월 WWDC 2026 키노트(현지 6월 8일)**: 애플은 ==**Extensions 프레임워크 정식 공개**==와 ==**개발자 API 사양**==을 ==**WWDC 2026**==에서 ==**공식 발표**==할 전망이다. 동시에 ==**시리(Siri) 차세대 음성 모델 'Voice Assistant 2'**==, ==**Spatial Computing AI(Vision Pro 2)**==, ==**Mac AI 컴퓨팅 클라우드**==도 ==**키노트 라인업**==에 포함될 가능성이 있다.

---

## 한국에 미치는 영향

### 1. 한국 사용자도 'AI 선택권' 확보 — Apple Intelligence Korea 가속

==**iOS 27 정식 출시(2026년 9월)**==에는 ==**한국어 Apple Intelligence**==가 ==**정식 활성화**==된다. 한국 사용자는 ==**Siri의 기본 응답 모델**==을 ==**Apple 자체 / OpenAI ChatGPT / Google Gemini / Anthropic Claude**==에서 ==**선택**==할 수 있게 된다. ==**삼성 갤럭시 AI**==와의 ==**비교 우위 마케팅**==이 ==**4분기 본격화**==된다. ==**아이폰 15·16 사용자 약 1,250만 명**==이 ==**한국어 멀티 프로바이더 AI**==를 ==**처음 경험**==한다.

### 2. 네이버·카카오의 'AI Extension 등록' 압박

애플이 ==**'Extensions API'**==를 ==**6월 WWDC에서 공개**==하면, ==**네이버 HyperCLOVA X·카카오 카나나·LG EXAONE·SKT A.X K1**==이 ==**한국어 우선 모델로 등록**==할 ==**전략적 기회**==가 열린다. ==**'iOS Apple Intelligence Korea 기본 모델 등록'**==이 ==**3분기 안에 가시화**==될 수 있다. 단, ==**애플의 콘텐츠·보안·정확도 가이드라인 통과**==가 ==**필수 관문**==이다.

### 3. 한국 AI 앱 생태계 전환 — '챗봇 앱 = 모델 공급자' 시대

==**뤼튼·라이너·페블러스·리캐치**== 등 ==**한국 AI 앱 220여 개**==는 ==**'단순 챗봇 앱'**==에서 ==**'모델 공급자'**==로 ==**전환 기회**==를 갖는다. ==**자사 앱을 설치한 사용자에게 Siri·Writing Tools 응답 권한 위탁**==을 통해 ==**ARPU(사용자당 평균 매출)**==을 ==**확보**==하는 ==**신규 비즈니스 모델**==이 ==**WWDC 직후 4분기**==에 본격 출시될 전망이다.

### 4. 통신사·앱마켓의 'AI 번들' 영향

==**SKT·KT·LG U+**==의 ==**'아이폰 + AI 모델 구독' 번들 패키지**==가 ==**iOS 27 정식 출시 시점(9월)**==에 ==**준비 단계**==에 들어간다. ==**Claude Pro·Gemini Advanced·ChatGPT Plus**==를 ==**통신 요금제와 묶어 판매**==하는 ==**'AI 결합 할인'**==이 ==**3분기 안에 가시화**==될 가능성이 있다. ==**원스토어·네이버 앱마켓**==도 ==**AI 모델 앱 카테고리**==를 ==**별도 신설**==할 수 있다.

---

## 자본시장 시그널과 'AI OS 사업자' 변신의 의미

💡 **애플의 진짜 전략**: 애플은 ==**'AI 모델 경쟁'**==을 사실상 포기하면서, ==**'AI를 위한 운영체제 인프라'**==라는 ==**더 큰 시장**==을 ==**선점**==하려 한다. ==**OpenAI·Google·Anthropic의 모델 매출**==이 ==**아이폰·맥·아이패드 위에서 발생**==할 때, ==**애플은 'AI 트래픽 게이트키퍼'**==로 ==**또 다른 30% 수수료**==를 ==**확보**==할 수 있다.

5월 5~18일 자본시장 반응:

- **Apple 주가**: 보도 직후 ==**+2.4%**==, 14일 누적 ==**+5.1%**==
- **OpenAI 비공개 호가**: 영향 -1.2%
- **Anthropic 비공개 호가**: ==**+3.8%**==
- **Alphabet 주가**: ==**+1.7%**==
- **삼성전자 주가**: -0.4%(갤럭시 AI 차별화 우려)

> "애플이 ==**'AI Extension 마켓플레이스'**==를 ==**iOS 27부터 운영**==하면, ==**iOS 안에서 발생하는 AI 매출의 30%**==가 ==**애플 매출**==이 된다. ==**연간 잠재 수익 $40~60억**==이 ==**2027년 안에 가시화**==된다."
> — Ming-Chi Kuo, TF International Securities (5월 8일 리포트)

---

⚠️ **한국 기업·소비자 5월~9월 체크리스트**:

1. ==**아이폰 사용자**==: ==**iOS 27 베타(7월)**==에서 ==**AI 모델 변경 옵션**== 실사용 검증
2. ==**네이버·카카오·LG·SKT**==: ==**Apple Extensions API 호환 사양**==을 ==**6월 WWDC 직후**== 24시간 안에 확인
3. ==**삼성전자**==: ==**'갤럭시 AI 외부 모델 호환' 대응 발표**==를 ==**Galaxy Unpacked 8월**==에서 동시 공개
4. ==**통신 3사**==: ==**'AI 모델 구독' 결합 요금제**==를 ==**3분기 안에 출시**==

✅ **결론**: 애플의 iOS 27 'Extensions' 도입은 ==**'AI 모델 경쟁의 종료'**==가 아니라 ==**'AI 인프라 경쟁의 시작'**==을 알리는 신호다. 한국 LLM 사업자에게는 ==**'iOS 한국어 Extensions 1순위 등록'**==이 ==**2026년 하반기 최대 전략 과제**==가 된다.`},{id:"20260519090004",title:'MS AI CEO 술레이만 "18개월 안에 화이트칼라 업무 다 자동화"...회계·법무·마케팅 1순위',summary:"Microsoft AI CEO 무스타파 술레이만이 파이낸셜타임스 인터뷰에서 '12~18개월 안에 컴퓨터 앞에 앉아서 하는 거의 모든 화이트칼라 업무가 AI로 자동화된다'고 단언했다. 회계·법무·마케팅·프로젝트 매니지먼트 4개 직군이 1순위로 거론됐다. 'AI 모델 만드는 게 블로그·팟캐스트 만드는 수준으로 쉬워질 것'이라고도 발언. 한국 화이트칼라 1,200만 명에 정책·교육·재취업 충격이 예상된다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-19T09:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",breaking:!1,content:`## "18개월 안에 컴퓨터 앞 업무는 다 자동화된다" — 술레이만의 단언

**Microsoft AI CEO 무스타파 술레이만(Mustafa Suleyman)**이 ==**파이낸셜타임스(Financial Times)**==와의 인터뷰에서 ==**'12~18개월 안에 컴퓨터 앞에 앉아서 수행하는 거의 모든 화이트칼라 업무가 AI로 자동화될 것'**==이라고 단언했다. 이 발언은 ==**2026년 5월 둘째 주 Fortune·Tom's Hardware·Windows Central·eWeek·Crypto Briefing**== 등 ==**5개 이상 메이저 매체**==가 일제히 인용·확산하면서 ==**'AI 노동시장 충격 5월 시그널'**==로 자리 잡았다.

📌 **핵심 인사이트**: 술레이만이 지목한 ==**'1순위 자동화 대상 4대 직군'**==은 ==**회계(Accounting)·법무(Legal)·마케팅(Marketing)·프로젝트 매니지먼트(Project Management)**==다. ==**'구조화된 입력과 측정 가능한 출력'**==이라는 ==**공통 특성**==이 ==**AI 자동화의 결정적 조건**==으로 지목됐다.

술레이만 인터뷰의 핵심 발언:

1. **"우리는 거의 모든 전문 직무에서 인간 수준의 성능을 갖게 될 것이다."** (==**'human-level performance on most, if not all, professional tasks'**==)
2. **"AI 모델을 만드는 일이 ==블로그 글이나 팟캐스트 에피소드 만드는 수준==으로 쉬워질 것이다."**
3. **"==회계·법무·마케팅·프로젝트 매니지먼트==가 가장 먼저 자동화된다."**
4. **"기업·기관·개인 단위 맞춤 AI를 ==12개월 안==에 누구나 디자인할 수 있게 된다."**
5. **"이 변화는 ==12~18개월 사이==에 본격적으로 시작될 것이다."**

> "이 발언이 ==**소셜 미디어용 과장**==으로 들릴 수 있지만, ==**Microsoft Copilot Pro·Copilot Studio·M365 Copilot의 1억 9천만 시트 + Azure AI Foundry**==가 ==**이 시나리오를 18개월 안에 가능하게 만든다**==는 사실은 분명하다."
> — Benedict Evans, 전 a16z 파트너 (5월 14일 뉴스레터 "Benedict's Newsletter")

---

## 1순위 4대 직군이 위험한 이유

⚡ **'구조화된 입력 + 측정 가능한 출력'의 조건**: 술레이만이 지목한 ==**회계·법무·마케팅·프로젝트 매니지먼트**==의 공통점은 ==**'대부분의 업무가 컴퓨터 앞에서 수행'**==되고 ==**'정형화된 결과물(보고서·계약서·캠페인 안·로드맵)'**==을 ==**산출**==한다는 점이다.

각 직군의 자동화 가능성:

- **회계(Accounting)**: ==**전표 처리·세무 신고·재무제표 작성**==의 ==**90% 자동화 가능**==. Big 4 회계법인은 ==**EY·Deloitte·KPMG·PwC 모두 'AI 회계 어시스턴트' 정식 출시**==.
- **법무(Legal)**: ==**계약서 검토·판례 검색·소장 작성**==의 ==**75% 자동화 가능**==. ==**Harvey AI, Anthropic Claude for Legal, 톰슨로이터 CoCounsel**== 등 이미 도구 확산.
- **마케팅(Marketing)**: ==**카피라이팅·캠페인 기획·콘텐츠 생성·광고 운영**==의 ==**85% 자동화 가능**==. ==**Jasper·Copy.ai·Hubspot AI**== 등 표준화 진행.
- **프로젝트 매니지먼트(Project Management)**: ==**일정 관리·진행 보고·리소스 배분·회의 요약**==의 ==**80% 자동화 가능**==. ==**Asana AI, Monday AI, Linear AI, Notion AI**== 확산.

🎯 **실제 산업 데이터**:

- **2026년 1분기 미국 화이트칼라 신규 채용**: ==**전년 동기 대비 -18%**==(BLS 발표)
- **회계·법무·마케팅·PM 인턴 채용**: ==**평균 -27%**==
- **Big 4 회계법인 신입 채용**: ==**-32%**==
- **법률사무소(US Top 100) 신입 채용**: ==**-21%**==
- **마케팅 에이전시 신규 채용**: ==**-29%**==

> "==**'AI가 화이트칼라를 대체한다'**==는 ==**가설이 아니라 이미 진행 중인 현상**==이다. 술레이만의 발언은 ==**18개월의 시간표를 단단히 확정**==하는 ==**산업계 첫 공식 시그널**==이다."
> — Daniel Susskind, Oxford 대학 경제학자 (5월 14일 트위터 게시물)

---

## 한국에 미치는 영향

### 1. 한국 화이트칼라 1,200만 명에 직접 충격

==**한국 화이트칼라 노동자 추정 1,200만 명**==(통계청 2025년 기준 사무·기술직·전문직 합산) 중 ==**약 380만 명**==이 ==**회계·법무·마케팅·PM**== 영역에 분포한다. 이 중 ==**상위 30%**==는 ==**'AI 보조 도구로 생산성 +3~5배 증가'**==의 수혜자가 되지만, ==**하위 30%**==는 ==**18개월 안에 직무 재배치 또는 재취업 압력**==을 받을 가능성이 있다. ==**고용노동부의 '직무 전환 지원 사업'**==이 ==**5월 셋째 주부터 1,500억 원 추가 편성**==을 ==**검토 중**==이다.

### 2. 'AI 매니저' 신규 직무 폭발 — 한국 6만 명 부족

==**'AI 도입 매니저'·'프롬프트 디자이너'·'AI 거버넌스 책임자'·'에이전트 워크플로 디자이너'**== 등 ==**AI 친화 신규 직무**==의 ==**한국 시장 부족 인력**==이 ==**2026년 말 약 6만 명**==으로 추산된다(고용정보원 시뮬레이션). ==**연봉 패키지가 화이트칼라 평균의 1.6~2.4배**==로 ==**3분기 안에 형성**==될 전망이다.

### 3. 기업 인재 전략 — 채용 동결 + 내부 재교육 가속

==**삼성·SK·LG·현대차·KB·신한**== 등 ==**한국 대기업 30대 그룹**==은 ==**2026년 하반기 화이트칼라 신규 채용**==을 ==**'동결 또는 -15~25% 감축'**==하면서 ==**내부 재교육·재배치 예산**==을 ==**3배 증액**==하는 ==**계획 수립**==을 ==**5월 셋째 주에 동시 가속**==하고 있다. ==**KAIST·서울대·연세대·고려대 MBA·AI 단기 부트캠프**==의 ==**기업 임원 위탁 교육 수요**==가 ==**3개월 안에 +300%**== 폭증한다.

### 4. 정부 정책 — 'AI 시대 일자리 보장' 입법 6월 임시국회 상정 가능

==**고용노동부·기획재정부·중기부**==는 ==**'AI 시대 일자리 보장법(가칭)'**==을 ==**6월 임시국회**==에 ==**상정**==할 가능성이 있다. 주요 조항으로 ==**'AI 도입 시 기존 직원 60% 이상 재배치 의무'**==, ==**'AI 매니저 채용 시 청년 가산점 지급'**==, ==**'중장년층 재취업 패키지 3년 6,000만 원'**==이 거론된다. 단, ==**경영계의 강력 반발**==이 예상된다.

---

## 자본시장의 시그널과 '백오피스 SaaS'의 부상

💡 **자동화 1순위 직군의 SaaS 시장 가속**:

- **회계 SaaS**: ==**Quickbooks·Xero·NetSuite의 AI 백오피스 매출**==이 ==**5월 둘째 주 +28% YoY**==
- **법무 SaaS**: ==**Harvey AI ARR $2.4억**==, ==**전년 대비 +245%**==
- **마케팅 SaaS**: ==**Hubspot AI Hub ARR $9.8억**==, ==**전년 대비 +112%**==
- **PM SaaS**: ==**Asana AI Premium ARR $5.7억**==, ==**Linear AI ARR $2.1억**==

📌 **'AI 노동시장 충격'의 5단계 시나리오**:

1. **0~6개월**: 신규 채용 동결, 보조 도구 도입
2. **6~12개월**: 직무 재설계, 부분 자동화 본격화
3. **12~18개월**: ==**조직 평면화, 중간관리자 30% 감소**==
4. **18~36개월**: ==**'AI 매니저' 신규 직군 성장, 일부 인력 재배치**==
5. **36~60개월**: ==**'기본소득·평생교육' 정책 논의 본격화**==

⚠️ **한국 정부·기업·개인 5월~9월 행동 가이드**:

1. **기업**: ==**자사 화이트칼라 업무의 'AI 자동화 가능도' 매핑**==을 ==**5월 안에 사내 보고**==
2. **정부**: ==**'AI 시대 일자리 보장법' 입법 단계**==를 ==**6월 안에 정량 가시화**==
3. **개인**: ==**자신의 업무 중 'AI에 위임 가능한 부분 70%'**==을 ==**식별**==하고, ==**나머지 30%에 집중 학습**==
4. **교육기관**: ==**대학·MBA·부트캠프**==의 ==**'AI 매니저·AI 거버넌스' 트랙**==을 ==**3분기 안에 정식 개설**==

✅ **결론**: 술레이만의 ==**'18개월 화이트칼라 자동화'**== 발언은 ==**'시기상조 경고'**==가 아니라 ==**'이미 시작된 변화의 시간표 확정'**==이다. 한국 화이트칼라 노동시장은 ==**5월~9월 4개월 사이에 채용·재교육·정책 3축의 즉각 조정**==이 ==**필수**==가 되며, ==**개인 단위의 'AI 위임 + 핵심 30% 강화' 전략**==이 ==**다음 12개월 생존 키워드**==가 된다.`},{id:"20260519090005",title:'머스크-올트먼 OpenAI 재판 머스크 패소...오클랜드 배심 "제소 시효 도과", 9th Circuit 항소 예고',summary:"5월 18일 캘리포니아 오클랜드 연방법원 배심이 일론 머스크의 OpenAI·샘 올트먼 상대 비영리 약정 위반 소송에서 머스크 패소 평결을 냈다. 배심은 단 2시간 만에 '제소 시효(statute of limitations) 도과'를 만장일치로 판정. 머스크 측은 9th Circuit 항소 의향을 즉시 표명했다. OpenAI 영리 전환 정당성 확정, 2026년 말 IPO 시나리오에 결정적 청신호.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-19T09:00:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",breaking:!1,content:`## 5월 18일, 머스크가 OpenAI 재판에서 졌다

**캘리포니아 오클랜드 연방법원**의 ==**배심**==이 ==**5월 18일(현지시간)**==, ==**일론 머스크(Elon Musk)**==가 ==**OpenAI·샘 올트먼(Sam Altman)**==을 상대로 제기한 ==**'비영리 약정 위반' 소송**==에서 ==**머스크 패소 평결**==을 내렸다. 평결은 ==**단 2시간 미만의 합의 시간**==을 거쳐 ==**만장일치**==로 나왔다. 핵심 사유는 ==**'제소 시효(statute of limitations) 도과'**==였다.

📌 **핵심 인사이트**: 이번 평결은 ==**'OpenAI의 영리 전환은 위법'**==이라는 ==**머스크의 핵심 주장**==을 ==**법정에서 정면 기각**==한 ==**첫 공식 판단**==이다. ==**OpenAI의 PBC(Public Benefit Corporation) 전환·DeployCo 합작·2026년 말 IPO 시나리오**==는 ==**결정적인 법적 청신호**==를 받았다.

재판의 주요 타임라인:

1. **2024년 3월**: 머스크, OpenAI·올트먼 상대 1차 소송 (캘리포니아 주법원)
2. **2024년 6월**: 머스크 자진 소송 취하, ==**연방법원 재제소**==
3. **2024년 8월**: 연방법원 정식 접수, ==**'명령구제 + 손해배상'**== 청구
4. **2025년 11월**: 사전 심리 종료, ==**배심 재판 일정 확정**==
5. **2026년 5월 12일**: 배심 재판 개시 (오클랜드)
6. **2026년 5월 18일**: ==**배심 평결 — 머스크 패소**==
7. **2026년 5월 18일 직후**: 머스크 측, ==**9th Circuit U.S. Court of Appeals 항소 의사 표명**==

> "평결은 ==**'OpenAI의 영리 전환이 적법한가'**==가 아니라 ==**'머스크가 너무 늦게 소송을 냈는가'**==를 다룬 결과다. 머스크의 패배는 ==**'기술적 패배'**==일 뿐, ==**OpenAI의 법적 정당성을 완전히 인정**==하는 것은 아니다."
> — Maxine Doogan, 머스크 측 수석 변호인 (5월 18일 법정 앞 발언)

---

## '머스크 패배'의 진짜 의미

⚡ **세 가지 결정적 파급**: 이 평결은 ==**기술적 절차상 판단**==이지만, 시장과 산업계에는 ==**훨씬 강력한 메시지**==로 받아들여진다.

첫째, ==**OpenAI 영리 전환의 법적 정당성 확보**==:

- ==**'비영리 약정 위반'**==이라는 머스크의 핵심 주장이 ==**시효 도과**==로 ==**본안 심리조차 받지 못했다**==.
- ==**캘리포니아 주 검찰**==과 ==**델라웨어 주 검찰**==의 ==**OpenAI 영리 전환 승인**==이 ==**5월 18일 평결 후 추가 동력**==을 얻는다.
- ==**'PBC + DeployCo + 무한 펀딩'**==의 ==**3단 자본 구조**==가 ==**견고해진다**==.

둘째, ==**2026년 말 OpenAI IPO 시나리오 청신호**==:

- ==**S-1 제출**==을 ==**2026년 11월~2027년 1월**==로 보는 ==**시장 컨센서스**==가 ==**5월 18일 평결로 +20% 확률 상승**==.
- ==**프리머니 밸류에이션**==이 ==**$6,800억 → $7,500억**==으로 ==**평결 직후 상향 거론**==.
- ==**Sequoia·Thrive·Founders Fund**==의 ==**보유 지분 평가액**==이 ==**일제히 재산정**==.

셋째, ==**머스크 vs 올트먼 사적 갈등 격화**==:

- ==**xAI 'Grok' 모델 vs OpenAI 'GPT' 모델**== 정면 마케팅 충돌이 ==**6개월 안에 격화**==.
- ==**머스크의 'OpenAI = 무신뢰'**== 트위터·X 캠페인이 ==**여론 인플레이션**==에도 영향.

🎯 **머스크 측 항소 전략**: 머스크와 그의 변호인단은 ==**9th Circuit U.S. Court of Appeals**==에 ==**즉각 항소**==할 의사를 ==**5월 18일 법정 앞 기자회견**==에서 ==**공개 표명**==했다. 항소심에서 ==**'시효 도과 적용 여부'**==를 ==**다시 다투는 것**==이 ==**핵심 쟁점**==이 된다. 항소심 결론은 ==**최소 12~18개월 소요**==가 ==**전망**==된다.

> "머스크의 항소가 받아들여질 가능성은 ==**현실적으로 25~30% 수준**==이다. 9th Circuit이 ==**시효를 다시 본다**==면 ==**OpenAI의 IPO 일정**==이 ==**6~9개월 지연**==될 수 있다."
> — Jonathan Macey, 예일대 법학대학원 교수 (5월 18일 인터뷰)

---

## 한국에 미치는 영향

### 1. 한국 LLM 사업자의 'OpenAI 안정성 베팅' 확정

==**삼성SDS·LG CNS·SK C&C·카카오엔터프라이즈**==가 ==**OpenAI API 대형 계약**==을 ==**6~12개월 단위로 체결**==할 때 가장 큰 변수였던 ==**'OpenAI 법적 불확실성'**==이 ==**5월 18일 평결로 큰 폭으로 해소**==된다. ==**연간 100~300억 원 단위 멀티이어 계약**==이 ==**3분기 안에 본격 체결**==될 가능성이 있다.

### 2. 한국 정부 'AI 거버넌스 표준' 입법에 미국 사례 인용

==**과학기술정보통신부·국회 과방위**==는 ==**'한국 AI 법인 영리 전환 가이드라인'**==을 ==**6월 임시국회**==에 ==**상정**==할 가능성이 있다. ==**OpenAI 사례를 직접 인용**==하면서, ==**LG AI연구원·NAVER AI랩**==과 같은 ==**비영리·연구소 형태 AI 조직**==의 ==**영리법인 전환 절차**==를 ==**'사전 심사·공시·검증' 3단계**==로 ==**명문화**==하는 안이 검토된다.

### 3. xAI Grok 한국 진입 가속화 — 머스크 반격 카드

==**일론 머스크**==는 ==**5월 18일 패소 직후 X(트위터) 게시물**==에서 ==**'OpenAI보다 더 나은 AI를 만든다'**==고 ==**즉각 반격**==했다. ==**xAI Grok 5**==의 ==**한국 정식 진입 시점**==이 ==**3분기 → 6~7월**==로 ==**앞당겨질 가능성**==이 있다. ==**테슬라 한국 사용자 약 8만 명**==과 ==**X 한국 사용자 480만 명**==에 ==**'Grok 무료 제공'**==이 ==**6월 안에 시작**==될 수 있다.

### 4. SK텔레콤·KT의 'OpenAI 한국 데이터센터' 협상 가속

==**OpenAI Korea 법인 설립(2025년 11월)**==과 ==**서울 강남 사무소 운영**==이 ==**법적 안정성 확보**==로 ==**가속**==된다. ==**SK텔레콤 분당 IDC**==와 ==**KT 가산 IDC**==에서 운영 중인 ==**OpenAI 한국 추론 클러스터(예상 H200 약 4,800장)**==가 ==**6개월 안에 +50% 확장**==될 가능성이 있다. ==**한국 토큰 매출**==이 ==**연간 1,200~1,500억 원**== 규모로 ==**가시화**==된다.

---

## 자본시장 시그널과 '항소 vs IPO' 변수

💡 **5월 18일 직후 시장 반응**:

- **OpenAI 비공개 호가**: ==**$6,800억 → $7,200억**==(+5.9%)
- **Tesla 주가**: -3.4%(머스크 시간·자원 소모 우려)
- **xAI 비공개 호가**: -2.1%
- **Anthropic 비공개 호가**: ==**+1.8%**==
- **Microsoft 주가**: ==**+1.4%**==(OpenAI 지분 평가액 상승)

📌 **'머스크 항소 vs OpenAI IPO'의 향후 12개월 변수**:

1. ==**9th Circuit 항소심 일정**== (2026년 4분기 ~ 2027년 1분기)
2. ==**OpenAI S-1 제출 시점**== (2026년 11월 ~ 2027년 1월)
3. ==**미 법무부의 OpenAI 영리 전환 사전 조사**== 재개 여부
4. ==**유럽 AI Act·DSA**== 관련 ==**OpenAI 신청·등록 절차**==
5. ==**머스크 vs 올트먼 사적 캠페인**==이 ==**여론·정책에 미치는 영향**==

⚠️ **한국 기업·정부 5월~9월 행동 가이드**:

1. ==**OpenAI 멀티이어 계약**==: 법적 안정성 확보 시 ==**3분기 안에 체결 검토**==
2. ==**xAI Grok 한국 진입**==: ==**6~7월 베타 한국어 지원**== 사전 점검
3. ==**AI 법인 영리 전환 가이드라인**==: ==**6월 임시국회 상정 안**== 모니터링
4. ==**OpenAI Korea 운영 본사 확장**== 시 ==**서울·판교·세종**== 입지 후보 사전 검토

✅ **결론**: 머스크-OpenAI 재판의 5월 18일 평결은 ==**'OpenAI 영리 전환 법적 정당성 확정'**==과 ==**'2026년 말 IPO 시나리오 청신호'**==를 동시에 의미한다. 한국 기업·정부는 ==**5월~9월 4개월 사이에 OpenAI 안정성 + xAI Grok 반격 + 한국 AI 거버넌스 입법 3축의 대응**==을 ==**확정**==해야 한다.`},{id:"20260518084501",title:"SKT '국가대표 AI' A.X K1, 국방 최초 도입...519B 모델·과기정통부 GPU 패키지",summary:"SK텔레콤과 국방부가 5월 14일 SKT타워에서 국방 AX 가속을 위한 MOU를 체결했다. 매개변수 5,000억 개를 넘긴 국내 최초 519B급 초거대 모델 'A.X K1'의 경량 버전이 국방 행정·작전지원 영역에 처음 투입된다. 과기정통부 '국가 AI 프로젝트'의 GPU 자원이 2분기 안에 SKT에 지원되며, 국방 특화 SLM 공동 실증이 즉시 착수된다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-18T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",breaking:!0,content:`## 5월 14일, 한국 독자 AI 모델이 국방의 코어 시스템으로 들어갔다

**SK텔레콤**이 5월 14일 서울 중구 을지로 **SKT타워 본사**에서 **국방부·과학기술정보통신부**와 함께 **'독자 AI 파운데이션 모델 국방 분야 활용'** 업무협약(MOU)을 체결했다. 한국 정부가 자국 자본·자국 데이터로 키운 **독자 AI 파운데이션 모델을 국방 영역에 정식 투입**하는 것은 ==이번이 사상 처음==이다.

📌 **핵심 인사이트**: SKT는 1월 국내 최초로 **매개변수 5,000억 개**를 돌파한 **519B급 초거대 모델 'A.X K1(에이닷엑스 케이원)'**으로 과기정통부의 **독자 AI 파운데이션 모델 2단계**에 진입했다. 이 모델의 경량 버전이 국방부 행정·작전지원·문서 분석 시스템에 ==2026년 2분기 안에 실증 투입==된다.

협약의 핵심 합의 사항은 다음과 같다.

1. **A.X K1 기반 국방 특화 SLM 공동 개발 및 실증**
2. **국방 분야 공개 데이터 수집·제공 및 활용 체계 구축**
3. **국가 AI 프로젝트 GPU 자원의 SKT 지원** (2분기 중)
4. **국방 RAG·지식그래프·문서 자동화 파이프라인 구축**
5. **장기 군 통신 인프라 연동 검증** (2027년 1분기 목표)

> "독자 AI 모델이 국방의 핵심 행정과 정보 분석에 들어가는 것은 **국가 디지털 주권의 결정적 전환점**이다. A.X K1은 한국어·군 용어·작전 문서에 최적화된 첫 국산 초거대 모델이다."
> — 유영상, SK텔레콤 사장 (5월 14일 협약식)

---

## A.X K1의 기술적 차별점: 519B·한국어 우선·국방 보안 적합

⚡ **국내 첫 519B 자율 모델**: A.X K1은 ==**5,190억 개 파라미터**==의 디코더 전용(Mixture-of-Experts) 구조로, **국산 한국어·기술 문서·법령·국방 백서 코퍼스**로 사전학습된 첫 모델이다. **OpenAI GPT-5 추정 1.8T**나 **Anthropic Claude Opus 추정 1.2T**에는 못 미치지만, **한국어 작전 문서 정확도 벤치마크(KO-MIL-Bench v1)**에서 **GPT-5 대비 +11%**, **Claude Sonnet 대비 +7%**의 우위를 기록했다.

국방 도입을 위한 경량화 사양:

- **본체 모델**: 519B(MoE, 활성 71B)
- **경량 모델 'A.X K1-Defense'**: 약 **24B**로 압축, **추론 속도 6.3배** 향상
- **온프레미스 추론 가능 GPU**: H100 ==**8장**== 규모로 실시간 추론
- **데이터 격리 등급**: 국방부 **'Class III 폐쇄망 적합 인증'** 5월 9일 사전 통과
- **응답 지연**: 평균 ==**420ms**==(현행 클라우드 LLM 대비 -68%)

> "우리 군의 행정·교육·정보 분석 업무에 **외산 모델 의존 없이** 자국 모델을 사용할 수 있게 됐다는 점이 가장 중요하다. 향후 작전·지휘 통신 영역까지 확장을 검토할 것이다."
> — 강구영, 국방부 정보기획단장 (5월 14일 브리핑)

---

## 국가 AI 프로젝트와의 연계: 2분기 GPU 우선 배정

🎯 **국가 AI 프로젝트 GPU 풀의 첫 우선 배정**: **과기정통부**가 운영하는 **'국가 AI 프로젝트(2026년 예산 8,400억 원)'** GPU 자원이 **2026년 2분기 안에 SKT 국방 실증 프로젝트에 우선 배정**된다. 이는 **LG AI연구원·업스테이지·NAVER Cloud**가 신청한 GPU 패키지 ==**4건 중 1건을 SKT가 선제 수령**==한다는 의미다.

핵심 자원 배분 계획:

- **GPU 총 배정량**: NVIDIA H200 ==**1,200장**== 상당
- **2분기 1차 배정**: ==**320장**== (SKT 분당 IDC)
- **3분기 2차 배정**: ==**480장**== (전남 해남 국가 AI컴퓨팅센터)
- **4분기 검증 배정**: ==**400장**== (국방통합데이터센터 연계)
- **A.X K1-Defense 학습/추론 분리**: 학습은 SKT 분당, 추론은 해남

---

## 한국에 미치는 영향

### 1. LG·업스테이지·NAVER의 자국 모델 평가 6월 결승전 가속화

과기정통부의 **'한국 자국 AI 모델 2차 평가'**가 ==**6월 종료**==를 앞두고 있다. SKT의 국방 영역 선점은 ==**LG AI연구원의 EXAONE 3.5**==, ==**업스테이지의 Solar Pro 2**==, ==**NAVER의 HyperCLOVA X-Korean**==에 ==**'레퍼런스 도메인 경쟁' 압박**==을 가중시킨다. ==**12월 결승 평가**==에서 ==**SKT가 '국방' 도메인을 선점**==한 만큼, 나머지 3사는 ==**금융(KB·신한)·의료(서울대병원·세브란스)·교육(EBS)**== 영역에서 ==**실증 사례 확보 경쟁**==에 6월 안에 돌입할 가능성이 높다.

### 2. 한화시스템·LIG넥스원·KAI의 K-방산 AI 가속

SKT-국방부 MOU 직후, **한화시스템·LIG넥스원·한국항공우주산업(KAI)**은 ==**A.X K1-Defense 경량 모델 라이선스 협상**==을 ==**5월 셋째 주에 비공식 개시**==한 것으로 파악된다. 특히 **무인기 자율비행 의사결정 보조**, **위협 평가 시뮬레이션**, **정비 매뉴얼 자동 분석** 영역에서 ==**'국산 LLM 탑재 K-방산 패키지'**==가 ==**4분기 수출 모델로 등장**==할 가능성이 있다. ==**폴란드·UAE·사우디**==가 ==**이미 관심 의사를 표명**==한 것으로 알려졌다.

### 3. 국방 데이터센터 신축·전력 인프라 발주

국방 AI 추론을 안전하게 운영하기 위해 ==**국방통합데이터센터(DIDC)**==는 ==**HBM 탑재 H200 1,200장 + 추론 가속 ASIC 800장**== 수용 가능한 ==**별관 신축**==을 ==**2027년 완공 목표로 5월 안에 발주**==할 예정이다. 발주 규모는 ==**약 4,800억 원**==으로 추정되며, ==**현대건설·삼성물산·DL이앤씨**==가 ==**컨소시엄 형태**==로 참여할 전망이다. ==**한국전력의 GW급 전용 회선**== 검토도 동반된다.

### 4. 외산 LLM 의존도 감축·디지털 주권 강화

국방·공공·금융 영역에서 ==**OpenAI·Google·Anthropic API 의존도**==는 ==**현재 73%**==(2026년 1분기 기준, 정보통신산업진흥원 추산)에서 ==**2027년 50% 이하**==로 ==**구조적 감소**==가 예상된다. ==**개인정보·국가기밀 데이터 해외 유출 위험**==을 차단하면서, ==**연간 수천억 원 규모의 토큰 사용료**==를 ==**국내 매출로 전환**==하는 효과가 동반된다.

---

## 자본시장·정책 후속 일정

💡 **5월 14일 시장 반응**: SK텔레콤 주가는 발표 직후 **장중 +4.2%** 상승했고, **한화시스템 +6.8%, LIG넥스원 +5.4%**까지 동반 강세를 보였다. **외국인 순매수**가 ==**SKT에 1,840억 원**== 유입됐다.

향후 60일 핵심 일정:

1. **5월 셋째 주**: A.X K1-Defense 코드네임 'K1-D24B' 첫 베타 군 시범 적용
2. **6월 1주차**: 과기정통부 GPU 1차 배정 완료
3. **6월 말**: 자국 AI 모델 2차 평가 종료, 3차 평가 후보 발표
4. **7월 중**: 한화·LIG·KAI 라이선스 본계약 체결 가능
5. **9월**: 국방통합데이터센터 별관 착공

✅ **결론**: SKT의 A.X K1 국방 도입은 단순한 'SI 계약'이 아니라 **국가 AI 주권의 첫 영토 확장**이다. 향후 12개월 안에 ==**국방 → 외교 → 금융 → 의료**== 순으로 ==**자국 LLM의 정부·공공 영역 확장**==이 가속될 가능성이 높다.`},{id:"20260518084502",title:"마키나락스 청약 13.9조 폭주...피지컬 AI 첫 코스닥, 의무보유 78.2% 신기록",summary:"산업용 AI 기업 마키나락스가 5월 11~12일 일반 청약에서 경쟁률 2,807.8대 1을 기록했다. 청약 증거금 13조 8,722억 원은 2026년 최대 규모이며, 의무보유 확약 78.2%는 코스닥 역대 최고치다. 14일 납입을 거쳐 20일 코스닥에 상장한다. AI매터스·머니투데이·ZDNet 등 주요 매체가 '피지컬 AI 1호 IPO'로 일제히 표현했다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-18T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",breaking:!0,content:`## 5월 12일 마감, 13조 8,722억 원이 마키나락스로 몰렸다

**산업용 AI 솔루션 기업 마키나락스(MakinaRocks)**가 5월 11~12일 양일간 진행한 **코스닥 상장 일반청약**에서 ==**경쟁률 2,807.8대 1**==이라는 폭발적 성과를 기록했다. 청약 증거금 ==**13조 8,722억 원**==은 ==**2026년 코스닥 IPO 사상 최대 규모**==다. 청약 건수는 **546,153건**, 일반 투자자 배정 물량 **658,750주**에 대해 **1,849,631,580주**가 신청됐다.

📌 **핵심 인사이트**: 마키나락스는 한국 자본시장에서 ==**'피지컬 AI(Physical AI)' 첫 정식 IPO 사례**==로 평가된다. 산업 현장의 **이상 탐지·예지 보전·공정 최적화·로봇 제어**를 모두 통합한 ==**'산업 도메인 특화 LLM + 강화학습 + 디지털 트윈'**== 스택을 자체 보유하고 있다.

청약 성과의 의미를 한눈에 정리하면 다음과 같다.

1. **일반청약 경쟁률**: ==**2,807.8대 1**==
2. **청약 증거금**: ==**13조 8,722억 원**== (2026년 코스닥 1위)
3. **청약 건수**: **546,153건**
4. **기관 수요예측 경쟁률**: **1,196.1대 1** (4/28~5/6, 2,427개 기관 참여)
5. **의무보유 확약 비율**: ==**78.2%**== (==**코스닥 IPO 역대 최고**==)
6. **납입일**: 5월 14일
7. **상장일**: 5월 20일 (예정)

> "의무보유 확약 78.2%는 **국내외 기관이 단기 차익이 아닌 장기 산업 전환 베팅**으로 마키나락스를 본다는 결정적 신호다. 코스닥 IPO에서 이 수치는 ==사실상 전례가 없다==."
> — 안재준, 인베스트조선 기업분석팀장 (5월 12일 분석노트)

---

## 마키나락스의 사업 구조: 산업 자율 운영 풀스택

⚡ **'피지컬 AI 풀스택' 정의**: 마키나락스는 단일 SaaS가 아닌 ==**산업 자율 운영 풀스택**==을 지향한다. **현대자동차·LG화학·SK이노베이션·포스코홀딩스** 등 한국 주요 제조 그룹에 ==**'예지 보전 + 공정 최적화 + 로봇 강화학습'**== 통합 패키지를 이미 공급하고 있다.

핵심 제품 라인업:

- **MakinaPredict**: 산업 설비 ==**예지 보전 정확도 93.1%**==
- **MakinaOptim**: 공정 최적화 ==**에너지 절감 평균 11.4%**==
- **MakinaRL**: 로봇 강화학습 시뮬레이터, ==**Sim-to-Real 격차 7.2배 축소**==
- **MakinaCore-7B**: 산업 도메인 특화 SLM (한국어·영어·독일어 자동 라우팅)
- **MakinaTwin**: 디지털 트윈 + 강화학습 결합 플랫폼

매출·고객 현황(2025년 결산 기준):

- **2025년 매출**: ==**842억 원**== (전년 대비 +147%)
- **영업이익**: 63억 원 (흑자 전환)
- **고객사**: **현대차·LG화학·SK이노·포스코·삼성SDI·HD현대중공업·LS일렉트릭·두산에너빌리티** 등 ==**대기업 17개사**== + ==**해외 9개사**==(독일·일본·미국)
- **재계약률**: ==**96.4%**==
- **글로벌 매출 비중**: ==**32.7%**== (1년 전 18%)

---

## 자본시장의 시그널: 'AI 도입 → 산업 전환' 베팅

🎯 **'한국형 Palantir' 평가 등장**: 5월 12일 자정 발표 직후 ==**모건스탠리 서울·BoA 코리아 리서치**==는 마키나락스를 ==**'한국형 Palantir Industrial 후보'**==로 비공식 평가했다. ==**시가총액 상장 첫날 약 4.8조 원**== 전후를 전망하며, ==**연간 매출 1조 원 도달 시점**==을 ==**2028년**==으로 제시했다.

5월 12일 시장 반응 요약:

- **코스닥 지수**: +1.8% (마키나락스 효과 0.6%p 추정)
- **현대오토에버**: +4.1% (피지컬 AI 동반 수혜 기대)
- **두산에너빌리티**: +3.2%
- **LG CNS·삼성SDS**: +2.7%, +2.4%
- **AI 관련 ETF 5종**: 평균 +3.6% 동반 상승

> "청약 증거금 13.9조 원은 ==**LG에너지솔루션 상장(2022년 114.1조 원)**== 이후의 ==**산업 패러다임 이벤트**==로 봐야 한다. ==**AI가 제조 도메인에 침투할 수 있다**==는 결정적 자본 신호다."
> — 류영준, 머니투데이 IPO팀장 (5월 12일 칼럼)

---

## 한국에 미치는 영향

### 1. 후속 피지컬 AI 기업 IPO 러시 예상

마키나락스 흥행은 ==**2026년 하반기 피지컬 AI 후속 IPO**==를 가속한다. ==**Rainbow Robotics·뉴빌리티·로보스타·플라잎·미키스**== 등 ==**최소 7개 피지컬/로보틱스 AI 기업**==이 ==**7~10월 상장 일정 조정**==을 검토 중인 것으로 ==**한국거래소 기업공시채널**==을 통해 확인된다. ==**연내 추가 IPO 청약 증거금 합산 30조 원 돌파**==가 예상된다.

### 2. 현대차·삼성·LG의 산업 AI 도입 가속화

마키나락스의 ==**대기업 고객 17개사**==는 모두 ==**자체 'AI 추진단'**==을 운영 중이다. IPO 자금 ==**약 1,800억 원**==이 ==**Sim-to-Real 강화학습 R&D**==와 ==**해외 인수**==에 투입될 예정으로, ==**현대차의 보스턴다이내믹스 활용 확장**==, ==**삼성SDI 배터리 공정 100% AI 최적화**==, ==**LG화학의 화학 공정 자율 운영**== 프로젝트가 ==**6~12개월 단위로 가속**==될 가능성이 높다.

### 3. 산업 도메인 인재 시장 재편

==**제조·화학·에너지·반도체 도메인**==을 알면서 ==**강화학습·LLM·디지털 트윈**==을 동시에 다룰 수 있는 ==**'산업 AI 엔지니어'**==의 ==**연봉 패키지**==가 ==**2026년 안에 +28~35% 인상**==될 전망이다. ==**KAIST·POSTECH·서울대·성균관대**==의 ==**산업공학·기계공학·화학공학 + 컴퓨터공학 복수전공자**== 채용 경쟁이 ==**2분기부터 격화**==된다.

### 4. 정부 'AI+제조' 정책 자금 추가 편성

==**산업통상자원부**==는 5월 12일 즉시 ==**'AI+제조 2.0' 정책 자금 5,000억 원 추가 편성**==을 ==**6월 추경에 반영**==하는 작업에 착수했다. ==**중소제조업 AI 도입 매칭 그랜트 한도**==가 ==**기업당 5억 원 → 12억 원**==으로 ==**상향 추진**==된다. ==**중기부의 '제조 데이터 댐' 사업**==도 ==**7월 안에 2배 확장**==이 검토된다.

---

## 의무보유 78.2%의 함의: 단기 시세보다 산업 전환

💡 **78.2% 의무보유의 의미**: 통상 코스닥 IPO에서 의무보유 확약 비율은 ==**30~45%**== 수준이다. ==**마키나락스의 78.2%**==는 ==**기관이 6~12개월 동안 매도하지 않겠다고 자율 선언**==한 비율이 ==**역대 코스닥 1위**==임을 의미한다. ==**시장은 마키나락스의 12~36개월 산업 전환 베팅**==을 ==**'단기 차익 종목'이 아닌 '구조적 성장주'**==로 본다.

---

⚠️ **5월 20일 상장 직후 변수**:

1. ==**시초가 대비 ±30% 변동성**==이 첫 5거래일 동안 발생할 가능성
2. ==**기관 의무보유 해제 시점**==(2026년 11월·2027년 5월)의 ==**물량 압박 리스크**==
3. ==**해외 매출 비중 32.7% → 50% 돌파 여부**==가 ==**2027년 핵심 KPI**==
4. ==**현대차·LG 그룹 내 마키나락스 솔루션 적용 사업장 수**== 공시 여부

✅ **결론**: 마키나락스 IPO 흥행은 ==**한국 AI 산업의 무게 중심이 'B2C 챗봇'에서 'B2B 산업 자동화'로 이동**==하는 결정적 분기점이다. 향후 6개월 안에 ==**피지컬 AI 시장의 자본·인재·정책 가속**==이 본격화될 가능성이 매우 높다.`},{id:"20260518084503",title:"구글 Gemini 3.1 Flash-Lite 공개...$0.25/M·2.5배 속도, 토큰 가격 전쟁 재점화",summary:"구글이 5월 12일 Gemini 3.1 Flash-Lite를 공개했다. 입력 100만 토큰당 $0.25, 출력 $1.50로 가성비 1위를 노린다. Time to First Token은 이전 2.5 Flash 대비 2.5배 빨라졌고 출력 속도는 45% 향상됐다. 1M 토큰 컨텍스트, 멀티모달 지원으로 대규모 고빈도 트래픽에 최적화됐다. OpenAI·Anthropic·DeepSeek와의 가격 경쟁이 다시 격화된다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-18T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!1,content:`## 5월 12일, 구글이 LLM 가성비 전선을 다시 열었다

**Google AI**는 5월 12일(현지시간) ==**Gemini 3.1 Flash-Lite**==를 공식 출시했다. 핵심 메시지는 단 하나다 — ==**'가장 저렴하면서 가장 빠른 프로덕션 LLM'**==. 입력 100만 토큰당 ==**$0.25**==, 출력 100만 토큰당 ==**$1.50**==이라는 가격은, ==**OpenAI GPT-5 mini($0.30/$1.20), Anthropic Claude Haiku 4.5($0.40/$2.00), DeepSeek V4($0.14/$0.55)**==와의 ==**'가성비 4파전'**==을 본격 개시했다.

📌 **핵심 인사이트**: Gemini 3.1 Flash-Lite는 단순 가격 인하가 아니다. ==**Time to First Token(첫 토큰 응답 시간)이 이전 Gemini 2.5 Flash 대비 2.5배 빨라졌고, 출력 토큰 생성 속도는 45% 향상**==됐다. 즉, ==**가격은 그대로 또는 더 낮으면서, 속도와 멀티모달 성능은 한 단계 점프**==시킨 ==**'프로덕션 트래픽 점유 전략'**==이다.

공식 사양 요약:

- **입력 가격**: ==**$0.25**== / 1M 토큰
- **출력 가격**: ==**$1.50**== / 1M 토큰
- **컨텍스트 윈도우**: ==**1,000,000 토큰**==
- **모달리티**: 텍스트·이미지·오디오·비디오 입력, 텍스트 출력
- **응답 속도**: 첫 토큰 ==**2.5배 향상**==, 출력 ==**+45%**==
- **공급 채널**: Gemini API(AI Studio) + Vertex AI 엔터프라이즈
- **무료 티어 유지**: 일일 쿼터 축소 조건

> "Flash-Lite는 ==**'한 번에 수억 호출이 들어오는 실서비스 트래픽'**==을 위한 모델이다. 검색·요약·분류·번역·실시간 채팅의 ==**95%**== 시나리오에서 Pro 모델과 동등 품질을 제공하면서 ==**비용은 80~92%**== 낮춘다."
> — Demis Hassabis, Google DeepMind CEO (5월 12일 블로그 포스트)

---

## 가성비 4파전 비교: Flash-Lite vs GPT-5 mini vs Haiku 4.5 vs DeepSeek V4

⚡ **단가·속도·컨텍스트의 동시 우위 비교**:

- **Gemini 3.1 Flash-Lite**: 입력 ==**$0.25**==, 출력 ==**$1.50**==, 컨텍스트 ==**1M**==, 멀티모달 ==**4종**==
- **OpenAI GPT-5 mini**: 입력 $0.30, 출력 $1.20, 컨텍스트 256K, 멀티모달 3종
- **Anthropic Claude Haiku 4.5**: 입력 $0.40, 출력 $2.00, 컨텍스트 500K, 멀티모달 2종
- **DeepSeek V4**: 입력 $0.14, 출력 $0.55, 컨텍스트 200K, 멀티모달 1종

📌 **시나리오별 단가 시뮬레이션**(고객지원 챗봇, 월 5,000만 호출, 호출당 입력 1.2K·출력 0.4K 토큰 가정):

1. **Flash-Lite**: 월 ==**약 $48,000**==
2. **GPT-5 mini**: 월 약 $42,000
3. **Haiku 4.5**: 월 약 $66,400
4. **DeepSeek V4**: 월 ==**약 $19,400**==

🎯 **'가격이 전부는 아니다' 변수**: DeepSeek가 가격은 가장 낮지만 ==**한국어 처리·멀티모달·데이터 주권**==에서 약점이 있다. ==**한국 기업이 실서비스 트래픽**==을 옮길 때는 ==**Gemini Flash-Lite ↔ GPT-5 mini**==가 ==**현실적 1·2순위**==가 된다.

---

## 한국에 미치는 영향

### 1. NAVER·카카오·KT의 LLM 단가 재산정 압박

==**NAVER Cloud HyperCLOVA X mini**==(입력 추정 $0.45), ==**카카오엔터프라이즈 KaLM**==(입력 추정 $0.50), ==**KT Mi:dm**==(입력 추정 $0.55)는 ==**Gemini 3.1 Flash-Lite와 즉시 직접 경쟁**==에 노출된다. 한국 대기업이 ==**'국산 LLM 우선' 정책**==을 유지하려면 ==**5~8월 단가를 20~35% 인하**==하거나, ==**'데이터 주권·한국어 정확도·정부 인증'**== 세 카드를 ==**계약서에 명문화**==해야 한다.

### 2. 스타트업·중소 SaaS의 GTM 비용 절감

==**리캐치·뤼튼·라이너·페블러스·업스테이지 Solar API 활용 스타트업 약 220개사**==는 ==**Flash-Lite 도입 시 토큰 비용을 평균 38~55% 절감**==할 수 있다. ==**중기부 'AI 바우처' 사업**==을 통해 ==**Flash-Lite 도입 매칭 지원**==이 ==**3분기 안에 정책 자금화**==될 가능성이 거론된다.

### 3. 정부·공공 RAG 시스템 단가 인하 본격화

==**조달청·국세청·국방부**== 등이 운영하는 ==**대국민 RAG 챗봇 시스템**==에서 ==**Gemini Flash-Lite 도입 검증**==이 ==**6월 안에 진행**==될 예정이다. ==**연간 토큰 비용 약 480억 원**==이 ==**260억 원 수준**==으로 ==**45% 절감**==될 수 있다. 단, ==**디지털 주권·데이터 위치(Region)**== 조건이 ==**서울 리전 의무화**==로 제기된다.

### 4. 광고·미디어·교육의 'AI 콘텐츠 단가 인하'

==**제일기획·이노션·삼성출판사·메가스터디·EBS**== 등 ==**광고·미디어·교육**== 분야 ==**대량 콘텐츠 생성 워크플로**==는 ==**Flash-Lite 전환 시 단가가 50% 이상 절감**==된다. ==**1초당 1만 건 동시 응답**==의 ==**대규모 라이브 이벤트 채팅·실시간 자막**==까지 ==**실시간 처리 가능**==한 점이 차별 포인트다.

---

## 'Flash-Lite 전략'의 진짜 의미

💡 **구글의 노림수**: Flash-Lite는 ==**Pro·Ultra 모델의 ARPU**==를 깎아먹는 ==**'사내 카니발리제이션'**==이 아니라, ==**OpenAI와 Anthropic의 mid-tier 영역**==을 ==**가격으로 강제 잠식**==하려는 ==**'트래픽 점유'** 전술==이다. ==**모델 호출량의 80% 이상**==이 ==**'단순 분류·요약·검색·번역'**==이라는 점을 활용해 ==**API 트래픽 점유율**==을 ==**6개월 안에 +10~15%p**== 끌어올리는 게 목표다.

> "AI 산업의 다음 12개월은 ==**'Pro 모델 성능 경쟁'**==이 아니라 ==**'Flash·Mini·Lite 단가 + 속도 경쟁'**==으로 무게가 옮겨간다. ==**대량 트래픽을 누가 잡느냐**==가 ==**다음 IPO 밸류에이션 핵심 변수**==다."
> — Bridgewater AI 리서치 노트 (5월 13일)

---

⚠️ **한국 기업 대응 체크리스트**:

1. ==**자사 LLM 트래픽의 단가-품질-속도 매트릭스**== 재점검 (5월 안)
2. ==**Flash-Lite vs 자국 모델 A/B 테스트**== — 6월 1주차 안
3. ==**고객 데이터 주권·서비스 SLA·정부 인증 요건**== 계약 재협상
4. ==**'Pro 모델은 핵심, Lite 모델은 트래픽' 듀얼 스택**== 운영 표준화

✅ **결론**: Gemini 3.1 Flash-Lite의 5월 12일 출시는 ==**LLM 산업의 '가성비 라운드'**==를 ==**다시 점화**==시켰다. 한국 LLM 사업자들은 ==**6월 안에 단가·속도·주권 카드의 새 조합**==을 제시하지 않으면 ==**API 트래픽 점유율**==을 ==**구글·OpenAI·DeepSeek에 추가 양도**==할 위험이 있다.`},{id:"20260518084504",title:"OpenAI '슈퍼앱' 통합 가속...ChatGPT·Codex·Atlas·API 단일 팀 재편 단행",summary:"OpenAI가 ChatGPT, 코딩 에이전트 Codex, 개발자 API, Atlas 브라우저를 하나의 제품 팀으로 통합한다. 통합 팀장은 Codex 사업 리드 Thibault Sottiaux. 연환산 매출 250억 달러 돌파 직후 단행된 조직 개편으로, 2026년 말 IPO 가능성을 염두에 둔 '슈퍼앱화' 전략의 신호다. Microsoft·Google·Apple의 OS 레벨 AI 통합 압박에 대한 반격 카드로도 해석된다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-18T08:45:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",breaking:!1,content:`## OpenAI, 4개 제품을 1개 팀으로 합친다

**OpenAI**가 ==**ChatGPT·Codex(코딩 에이전트)·Developer API·Atlas(브라우저)**==를 ==**단일 제품 팀**==으로 통합한다고 5월 둘째 주 사내 공지·외신 보도를 통해 공식화했다. 통합 팀의 ==**리드**==는 ==**Codex 사업부장 Thibault Sottiaux**==. 그는 OpenAI 합류 전 ==**DeepMind 출신 시니어 엔지니어**==로, ==**ChatGPT-4o 어시스턴트 모드 출시**==를 주도한 인물이다.

📌 **핵심 인사이트**: 이 개편은 단순한 조직 정비가 아니다. OpenAI의 ==**연환산 매출(ARR)이 250억 달러를 돌파**==(5월 둘째 주 Sam Altman 발표)한 직후 단행됐으며, 시장은 이를 ==**'2026년 말 IPO를 염두에 둔 슈퍼앱 전략 격상'**==으로 해석한다. ==**Anthropic의 950억 달러 펀딩 추진**==과 ==**Google·Microsoft·Apple의 OS 레벨 AI 통합**==에 대한 ==**전면 반격 카드**==이기도 하다.

통합 후 단일 팀의 핵심 책임 영역:

1. **ChatGPT**: 1B+ MAU 컨슈머 슈퍼앱
2. **Codex**: 코딩·에이전트·터미널 통합 워크플로
3. **Developer API**: 모델 직판 API 전 라인업
4. **Atlas**: AI 네이티브 브라우저 (2025년 11월 출시)
5. **공통 인프라**: 인증·결제·메모리·툴 호출 표준화

> "우리는 이제 '제품 4개'가 아니라 ==**'에이전트로 묶인 단일 슈퍼앱'**==을 만든다. ChatGPT는 입구이고, Codex·API·Atlas는 ==**같은 메모리·같은 도구·같은 결제 시스템**==을 공유해야 한다."
> — Sam Altman, OpenAI CEO (5월 12일 사내 공지 발췌)

---

## 통합 전략의 3대 축: 메모리·툴·결제

⚡ **'슈퍼앱 통합'의 기술적 코어**: OpenAI 슈퍼앱화의 핵심은 ==**공통 메모리 레이어, 공통 툴 호출 표준, 공통 결제 ID**==다.

- **공통 메모리(Unified Memory)**: ChatGPT 대화에서 시작된 작업이 ==**Atlas 브라우저 세션·Codex IDE 세션·API 호출**==에서 ==**컨텍스트 단절 없이 이어진다**==.
- **공통 툴 표준(MCP-Native)**: ==**Anthropic이 주도한 Model Context Protocol(MCP)**==을 ==**OpenAI 내부 툴 호출 표준**==으로 ==**완전 수용**==. 외부 SaaS와의 ==**상호운용성을 8월 안에 100%**== 확보.
- **공통 결제 ID(One Wallet)**: ChatGPT Plus·Team·Enterprise·API 크레딧·Atlas 결제·Codex 라이선스를 ==**'OpenAI Wallet' 단일 지갑**==으로 통합. ==**기업 ID + 개인 ID 결합 SSO**==가 ==**3분기 베타 오픈**==.

🎯 **OpenAI ARR 250억 달러 분해**:

- ChatGPT 구독(개인/팀/엔터): ==**약 $138억**==(55%)
- API 직판: ==**약 $73억**==(29%)
- 엔터프라이즈 패키지·DeployCo: ==**약 $32억**==(13%)
- Atlas·Codex 라이선스: ==**약 $7억**==(3%)

매출 구조에서 ==**API + Atlas + Codex가 차지하는 비중**==이 ==**45%**==로 ==**작년 동기 31%**==보다 ==**14%p 증가**==했다. 슈퍼앱 통합은 ==**'개발자·기업 매출 비중**==을 ==**12개월 안에 60%까지 확대'**==하기 위한 사전 조직 작업이다.

---

## Microsoft·Google·Apple의 OS 레벨 압박과의 정면 충돌

💡 **'OS vs 슈퍼앱'의 결정전**: 2026년 4월 ==**Apple Intelligence 2.0**==(iOS 19) 발표, 5월 ==**Google Gemini Android 통합**== 가속, ==**Microsoft Copilot+ Windows 11 24H2 강제 결합**== 흐름은 모두 ==**'AI를 OS 안에 가두려는'**== 시도다. OpenAI의 슈퍼앱화는 ==**'OS 위에 또 다른 OS'**==를 깔겠다는 ==**정면 반격**==이다.

> "OpenAI가 ChatGPT만으로는 ==**Apple·Google·Microsoft의 OS 레벨 통합**==을 이길 수 없다. Codex(개발자)·Atlas(브라우저)·API(SaaS)를 ==**한 팀이 동시에 굴려야**== ==**OS 우회 슈퍼앱**==이 완성된다."
> — Ben Thompson, Stratechery (5월 13일 분석)

---

## 한국에 미치는 영향

### 1. NAVER·카카오·삼성의 '슈퍼앱 vs 슈퍼앱' 경쟁 격화

==**NAVER**==의 ==**'네이버 + 클로바 + 라인'**== 슈퍼앱 통합, ==**카카오**==의 ==**'카카오톡 + 카나나 + 카카오엔터 + 카카오모빌리티'**== 결합, ==**삼성전자**==의 ==**'Galaxy AI + Bixby 차세대 + One UI 8'**== 묶음은 ==**OpenAI 슈퍼앱의 한국 진입에 대한 방어선**==이 된다. ==**6월 안에 카카오톡 채팅 + 카나나 에이전트 결합 베타**==가 ==**OpenAI ChatGPT + Atlas + Codex의 한국 진입 시점**==과 ==**정면 충돌**==할 가능성이 거론된다.

### 2. 한국 SaaS·노코드 사업자의 MCP 표준 대응

==**Zapier·Make·Notion·Slack과 동등한 위치의 한국 SaaS**==(==**채널코퍼레이션·플렉스·자비스앤빌런즈·아임웹·플리토**==)는 ==**MCP 표준 호환**==을 ==**3분기 안에 출시**==해야 ==**OpenAI 슈퍼앱 안 도구 카탈로그**==에 ==**기본 등록**==된다. ==**미등록 SaaS는 ChatGPT/Atlas 사용자에게 검색 우선순위 하위로 노출**==될 위험이 있다.

### 3. 국내 IDE·코딩 어시스턴트 시장 압박

==**Codex의 ChatGPT 직접 통합**==은 ==**한국 개발자 1.4백만 명**==에게 ==**'코딩 어시스턴트 = ChatGPT 안 기본 탑재' 인식**==을 강화한다. ==**삼성 SDS의 '소공이'**==, ==**LG CNS의 'AI Coder'**==, ==**NHN의 'Toast Code AI'**== 같은 ==**국내 자체 코딩 어시스턴트**==는 ==**'한국어 사양·기업 보안·국내 가격'**== 카드로 ==**6월 안에 차별화 포지셔닝**==을 재정비해야 한다.

### 4. 광고·검색·커머스 트래픽의 'Atlas 우회' 위험

==**Atlas 브라우저 사용자**==가 ==**한국 시장에서 1년 안에 200만 명**==을 돌파할 경우, ==**네이버 검색 트래픽**==과 ==**카카오/쿠팡 커머스 트래픽**==에 ==**최대 -3~5%p 점유율**== 영향이 예상된다. ==**네이버는 'Atlas 우회 트래픽 복구'**==를 위해 ==**자체 AI 브라우저 'Whale 4.0'**==을 ==**3분기 안에 출시**==할 가능성이 있다.

---

## 자본시장 시그널과 IPO 가능성

📌 **OpenAI IPO 2026 말 가능성**: 슈퍼앱 통합은 ==**'IPO 사전 조직 정비'**==의 전형적 사례다. ==**ARR 250억 달러 + 매출 다각화 + 단일 책임 라인**==이 갖춰지면 ==**S-1 제출 시점**==을 ==**2026년 11월~2027년 1월**==로 ==**시장이 기대**==하는 상태다.

주요 자본 시그널:

- **5월 12일 OpenAI 비공개 시장 호가**: ==**$6,200억 → $6,800억**==
- **Microsoft 주가**: -1.2%(OpenAI 독립성 강화 우려)
- **Apple 주가**: -0.8%(Atlas의 Safari 잠식 우려)
- **Alphabet 주가**: -0.5%
- **Anthropic 비공개 호가**: 영향 제한적

---

⚠️ **한국 기업·정부 대응 우선순위**:

1. ==**OpenAI Wallet/SSO 한국 도입 시점**==을 ==**카카오 페이먼츠·KB페이·삼성페이**==가 ==**선제 대응**==
2. ==**MCP 표준 한국 SaaS 등록 우선순위**== 정부 가이드라인 마련
3. ==**Atlas 브라우저 한국 진입 시 광고·검색 영향도**== 시뮬레이션
4. ==**'국산 슈퍼앱' 3사(네이버·카카오·삼성)의 통합 메모리·결제·툴 표준 합의**==

✅ **결론**: OpenAI의 슈퍼앱 통합은 ==**'AI 기업'**==이 ==**'OS 사업자'**==로 변신하는 결정적 단계다. 한국의 슈퍼앱 3사(네이버·카카오·삼성)는 ==**6~12개월 안에 통합 전략의 답을 내놓지 않으면**==, ==**2027년 한국 모바일 AI 트래픽의 상당 부분을 OpenAI 슈퍼앱 생태계에 양도**==할 가능성이 있다.`},{id:"20260518084505",title:"Snap·Perplexity $4억 AI 검색 동맹 백지화...My AI vs Comet 분리 전쟁 본격화",summary:"Snap이 5월 6일 1분기 실적 발표와 함께 Perplexity와의 4억 달러·12개월 AI 검색 통합 계약 백지화를 공개했다. 양사는 '제품 적합성 부족'을 이유로 합의 종료했고, Snap은 자체 My AI·AI Sponsored Snaps에 집중, Perplexity는 Comet 브라우저 직접 유통으로 선회한다. 'AI 인프라 vs AI 인터페이스' 동맹의 첫 대형 실패 사례로 기록된다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-18T08:45:00+09:00",readTime:"4분",image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800",breaking:!1,content:`## 5월 6일, AI 동맹 1호 실패 사례가 등장했다

**Snap**(스냅챗 모회사)이 5월 6일 1분기 실적 발표와 함께 ==**Perplexity와의 4억 달러·12개월 AI 검색 통합 계약을 백지화**==했다고 공식 발표했다. 양사는 ==**"우호적으로 관계를 종료(amicably ended)"**==했다고 표현했지만, 시장은 이를 ==**'AI 인프라 + 컨슈머 인터페이스 동맹'의 첫 대형 실패 사례**==로 기록하고 있다.

📌 **핵심 인사이트**: 이 계약은 ==**2025년 11월에 발표**==됐을 때 ==**'Perplexity가 Snap에 4억 달러(현금 + 주식)를 지불**==하고 ==**Snapchat Chat 인터페이스의 기본 AI 답변 엔진**==이 되겠다는 ==**대형 유통 동맹**==으로 화제를 모았다. 그러나 실제로는 ==**Snapchat Chat 안 제한적 테스트 단계**==를 ==**한 번도 넘기지 못한 채**==, ==**5개월 만에 백지화**==됐다.

계약 백지화의 주요 사실:

1. **계약 발표일**: 2025년 11월
2. **계약 규모**: ==**$400M(약 5,500억 원)**== (12개월, 현금 + 주식 혼합)
3. **백지화 공개일**: 2026년 5월 6일 (Snap 1분기 실적 발표)
4. **백지화 사유**: '제품 적합성(product fit)' 부족, 양사 합의
5. **계약 매출 인식**: ==**Snap 2026년 가이던스에서 전액 제외**==
6. **현재 진행 상황**: Snapchat 안 Perplexity 통합 ==**전면 철수 완료**==

> "이번 종료는 어느 한쪽의 단독 철수가 아니다. 양사는 ==**제품·로드맵·인센티브 구조가 맞지 않는다**==는 결론에 도달했고, ==**상호 우호적 종료**==에 합의했다."
> — Evan Spiegel, Snap CEO (5월 6일 컨퍼런스콜 발췌)

---

## 'AI 인프라 vs 컨슈머 인터페이스' 동맹이 깨진 진짜 이유

⚡ **3가지 구조적 원인**:

- **사용자 기대 격차**: Snapchat 사용자는 ==**'친구와 사진·영상 공유'**==가 핵심 니즈인데, ==**Perplexity의 출처 기반 답변 엔진**==은 ==**'학술·연구·정보 검색'**== 톤이라 ==**Z세대 채팅 흐름과 어울리지 않았다**==.
- **수익 모델 충돌**: Perplexity는 ==**광고 + 구독**== 양면 모델, Snap은 ==**광고 기반**==. ==**Perplexity 답변에 광고를 넣을 권한**==을 ==**Snap이 통제하지 못하면서**== 수익 배분 협상이 ==**3월부터 교착**==.
- **자체 AI 자산 강화**: Snap의 ==**My AI(자체 챗봇)**==과 ==**AI Sponsored Snaps(생성형 광고)**==가 ==**1분기에 빠르게 성장**==하면서 ==**Perplexity 통합의 ROI가 모호**==해졌다.

🎯 **양사의 다음 전략**:

1. **Snap의 'My AI 우선'**: 자체 챗봇 My AI를 ==**Snapchat 사용자 8억 5천만 명**==에 ==**기본 탑재**==. ==**AI Sponsored Snaps**==를 ==**광고주 50대 글로벌 브랜드와 우선 결합**==.
2. **Perplexity의 'Comet 브라우저 직접 유통'**: ==**Comet 브라우저**==(2025년 7월 출시)를 ==**Mac·Windows·iOS·Android**==에 ==**광고 + 인앱 결제**==로 ==**직접 유통**==.
3. **OpenAI Atlas와의 정면 대결**: Perplexity Comet vs OpenAI Atlas vs Arc Browser의 ==**'AI 브라우저 3파전'**==이 ==**2026년 하반기 핵심 전선**==으로 부상.

> "우리는 이번 종료를 ==**전략 재정렬**==으로 본다. ==**Comet 브라우저와 Enterprise 직판**==이 ==**Perplexity의 2026년 주력 채널**==이 될 것이다."
> — Aravind Srinivas, Perplexity CEO (5월 7일 X 게시물)

---

## 한국에 미치는 영향

### 1. 카카오톡·라인·당근의 'AI 검색 동맹' 재검토

==**카카오톡(국내 4,800만 MAU)**==, ==**라인(글로벌 1.9억 MAU)**==, ==**당근(국내 1,920만 MAU)**==이 ==**OpenAI·Anthropic·Perplexity·Mistral**== 등 외부 AI와 ==**'기본 검색 엔진' 동맹**==을 검토 중이라는 ==**업계 관측**==이 5월 초부터 늘었다. Snap-Perplexity 사례가 ==**'4억 달러 동맹도 5개월에 깨질 수 있다'**==는 ==**경고 사례**==로 ==**계약 협상에 결정적 영향**==을 미친다. 카카오는 ==**'카나나(Kanana) 자체 강화 우선'**==으로 ==**5월 15일 사내 기조 정비**==를 한 것으로 알려졌다.

### 2. 네이버·SK텔레콤의 자체 AI 강화 정당화

==**네이버 HyperCLOVA X-Korean**==, ==**SKT A.X K1**==, ==**KT Mi:dm**==의 ==**'자체 LLM + 자체 채널' 전략**==이 ==**Snap-Perplexity 백지화로 정당성을 추가 확보**==한다. ==**'외산 AI 동맹은 단기 비용 대비 ROI가 불확실하다'**==는 ==**내부 보고서 작성 사례**==가 ==**5월 둘째 주부터 늘었다**==.

### 3. 광고 시장의 '생성형 광고' 패러다임 가속

==**Snap이 자체 'AI Sponsored Snaps'**==에 ==**광고주 우선 결합**==을 선언한 것은, ==**제일기획·이노션·HSAD**== 등 ==**한국 광고 대행사**==에게 ==**'네이티브 생성형 광고 포맷'**==의 ==**6개월 안 출시 압박**==을 가한다. ==**카카오 비즈보드·네이버 GFA·NHN ACE**==도 ==**'생성형 AI 광고 슬롯'**==을 ==**3분기 안에 정식 출시**==할 가능성이 거론된다.

### 4. AI 브라우저 3파전의 한국 도입 시점

==**Perplexity Comet, OpenAI Atlas, The Browser Company의 Arc**==가 ==**한국어 정식 지원과 함께 진입**==하는 시점은 ==**2026년 4분기**==로 추정된다. ==**삼성·LG의 노트북·갤럭시·그램**==에 ==**'AI 브라우저 기본 탑재' 마케팅**==이 ==**4분기 글로벌 출시 라운드**==에서 ==**전략적 변수**==가 될 가능성이 높다. ==**네이버 Whale**==의 ==**Whale 4.0 AI 모드 출시**==도 ==**같은 시점**==으로 ==**가속**==된다.

---

## 자본시장 시그널과 'AI 동맹 리스크' 재평가

💡 **5월 6일 시장 반응**:

- **Snap 주가**: 실적 직후 ==**-15.4%**== 급락 (Perplexity 매출 제외 가이던스 영향)
- **Perplexity 비공개 호가**: ==**$180억 → $170억**==으로 소폭 하향
- **OpenAI ChatGPT API 호출량**: 5월 7일 ==**+3.2%**== 일시 상승
- **AI 브라우저 관련 종목**(The Browser Company, Brave 비공개): 호가 ==**+5~7%**== 동반 상승

⚠️ **'AI 동맹 리스크' 5대 교훈**:

1. ==**'기본 탑재' 동맹은 사용자 페르소나 합의가 사전 필수**==
2. ==**수익 배분·광고 통제권**==을 ==**계약서에 정량 명시**==
3. ==**자체 AI 자산 성장 속도**==가 ==**외부 동맹 ROI를 빠르게 뒤집을 수 있다**==
4. ==**6개월 마일스톤 단위 종료 조항**==을 ==**계약서에 표준 삽입**==
5. ==**'AI 인프라 vs AI 인터페이스'**==의 ==**역할 경계를 처음부터 명확히**==

---

📌 **결론**: Snap-Perplexity 4억 달러 동맹의 5개월 만의 백지화는 ==**'AI 동맹의 첫 번째 대형 실패'**==로 기록되며, ==**한국 컨슈머 앱·미디어·광고 사업자**==에게 ==**'외부 AI 동맹 vs 자체 AI 강화'**==의 ==**선택 기준을 다시 쓰게 만드는 사건**==이다. ==**6~12개월 안에 카카오·네이버·라인·당근**==의 ==**AI 전략 정비 발표**==가 ==**잇따를 가능성**==이 매우 높다.`},{id:"202605130843001",title:"OpenAI 'DeployCo' 40억 달러 출범...Tomoro 인수·19개사 동맹 컨설팅 빅뱅",summary:"OpenAI가 5월 11일 별도 법인 OpenAI Deployment Company(DeployCo)를 40억 달러 초기 투자·100억 달러 프리머니 밸류로 공식 출범시켰다. 동시에 영국계 응용 AI 컨설팅 회사 Tomoro를 인수해 150명의 Forward Deployed Engineer를 확보했다. TPG·Advent·Bain Capital·Brookfield 등 19개 글로벌 PE·SI가 동맹에 합류, 매킨지·BCG·딜로이트의 AI 컨설팅 시장을 직접 잠식한다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-13T08:43:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## 5월 11일, OpenAI가 컨설팅 산업에 직접 진입했다

==**OpenAI**==가 5월 11일(현지시간) ==**$40억(약 5조 5,000억 원) 초기 투자**==를 받는 별도 법인 ==**OpenAI Deployment Company(이하 DeployCo)**==를 공식 출범시켰다. 동시에 영국계 응용 AI 컨설팅·엔지니어링 회사 ==**Tomoro**==를 인수해 ==**150명의 Forward Deployed Engineer 및 Deployment Specialist**==를 한 번에 확보한다.

📌 **핵심 인사이트**: DeployCo는 단순 자회사가 아니라 ==**$100억 프리머니 밸류에이션**==의 별도 합작 법인이다. OpenAI가 ==**과반 지배권**==을 유지하지만, ==**TPG·Advent·Bain Capital·Brookfield**==가 ==**공동 창립 파트너**==로 참여한다. 총 ==**19개 글로벌 투자사·컨설팅·SI 기업**==이 동맹에 합류했다.

DeployCo의 핵심 구조:

- **초기 투자금**: ==**$40억**==(약 5.5조 원)
- **프리머니 밸류**: ==**$100억**==
- **창립 리드 파트너**: ==**TPG**==
- **공동 리드 파트너**: ==**Advent, Bain Capital, Brookfield**==
- **합류 기업**: 글로벌 ==**19개사**==(PE·전략 컨설팅·SI)
- **Tomoro 인수가**: 비공개(별도 거래)
- **Forward Deployed Engineer 합류**: ==**약 150명**==
- **기존 고객사 승계**: ==**테스코(Tesco)·버진애틀랜틱(Virgin Atlantic)·수퍼셀(Supercell)**==

> "기존 컨설팅 모델로는 ==**AI 도입 효과를 전사로 확산**==시키는 데 한계가 분명하다. DeployCo는 ==**모델 제공자가 직접 배포 파트너로 일하는**== 새로운 표준을 만들 것이다."
> — Sam Altman, OpenAI CEO (5월 11일 공식 발표문)

---

## 컨설팅 산업의 전면 재편: 매킨지·BCG·딜로이트 직격탄

⚡ **AI 컨설팅 시장 빅뱅**: DeployCo는 단순 OpenAI 영업조직이 아니다. 19개 동맹사가 결합한 ==**역대 최대 규모의 AI 도입 컨소시엄**==이다. 이는 ==**McKinsey·BCG·Bain·Deloitte·Accenture**==의 ==**'AI 도입 컨설팅' 매출(2025년 합산 약 $200억 추정)**==을 직접 잠식한다.

OpenAI는 4월 24일 ==**Anthropic이 골드만·블랙스톤과 1.5조 합작**==을 발표한 직후 ==**OpenAI for Companies(기업 직판) → DeployCo(별도 법인)**==로 전략을 격상했다. 매출 인식 시점과 ==**기업가치 평가 방식**==을 차별화하기 위한 구조 설계다.

DeployCo의 실제 작동 방식:

1. **GTM 단계**: 기업 고객이 ==**OpenAI 영업팀 + DeployCo 컨설턴트 + 19개 동맹사**==를 ==**원스톱 미팅**==으로 만난다.
2. **PoC 단계**: ==**Tomoro 출신 FDE 150명**==이 ==**현장에 6~12주간 상주**==해 모델 배포를 책임진다.
3. **확장 단계**: ==**Bain Capital·TPG가 운용하는 1,000여 개 포트폴리오 기업**==이 ==**우선 도입 대상**==으로 흡수된다.
4. **유지 단계**: ==**OpenAI의 토큰 매출**==과 ==**DeployCo의 컨설팅 매출**==을 ==**분리 인식**==하면서 ==**기업가치 이중 평가**==를 추구한다.

🎯 **5월 12일 시점 매출 전망**: 모건스탠리·골드만삭스의 5월 12일 노트에 따르면, ==**DeployCo의 첫 12개월 매출 전망은 $30~40억**==이다. ==**연간 직원당 매출 $2,000만**==이 목표인데, 이는 ==**현재 McKinsey 1인당 매출($120만)의 16배**==에 해당한다.

---

## 한국에 미치는 영향

### 1. 삼성SDS·LG CNS·SK C&C의 SI 모델 위기

==**삼성SDS·LG CNS·SK C&C**==는 ==**OpenAI Korea와 직접 GTM 동맹 협상**==을 ==**5월 12일 비공식 시작**==한 것으로 ==**전자신문**==이 5월 12일 보도했다. 만약 DeployCo의 ==**아시아 진출 1단계 파트너로 일본 NTT·미츠비시상사**==가 선정될 경우, ==**한국 SI 3사의 글로벌 AI 도입 사업 진입로**==가 ==**최소 18개월 지연**==될 수 있다. 정부 ==**'국가 AI 인프라 SPC' 우선 발주**==를 통한 보완책이 5월 셋째 주 발표될 전망이다.

### 2. 매킨지·BCG·딜로이트 한국 법인의 인력 유출 가속화

==**매킨지 서울·BCG 코리아·딜로이트 컨설팅**==의 ==**AI 도입 컨설턴트 약 800명**==이 ==**DeployCo 한국 진출 시 우선 영입 후보**==로 거론된다. ==**연봉 패키지 1.5~2배 인상**==을 전제로 한 ==**'전사적 영입'**==이 ==**2026년 4분기**==에 본격화될 가능성이 거론된다. ==**삼성·LG·현대차·SK 그룹**==은 ==**자체 'AI 추진단'**==을 ==**1.5배 규모로 증원**==하는 사내 공지를 5월 12일 동시 발표했다.

### 3. 카카오엔터프라이즈·네이버클라우드의 B2B AI 가격 재산정

==**OpenAI API + DeployCo 컨설팅 패키지**==가 ==**한국 대기업에 직접 진입**==할 경우, ==**카카오엔터프라이즈·네이버클라우드·NHN클라우드**==의 ==**Korean LLM B2B 단가**==가 ==**분기당 8~12% 추가 인하 압력**==을 받는다. ==**5월 9일 한국클라우드산업협회**== 회의에서 ==**'국가 AI 인프라 우선 사용 의무화 입법'**==이 정식 의제로 상정됐다.

### 4. K-방산·K-바이오·K-금융의 AI 도입 가속 시그널

DeployCo의 ==**Forward Deployed Engineer 모델**==은 ==**한화시스템·LIG넥스원·삼성바이오·셀트리온·KB금융·신한금융**==의 ==**AI 도입 속도**==를 ==**기존 18개월 → 4~6개월**==로 ==**3~4배 단축**==시킬 가능성이 있다. ==**한국형 DeployCo**==(국내 AI 모델 + 국내 SI + 외국 LLM 결합) 구축 논의가 ==**기재부·산업부·과기부 6월 1주차 정책 협의**==에서 본격화될 전망이다.

---

## 자본시장의 시그널: AI 'GTM 빅뱅'

💡 **DeployCo의 자본구조 의미**: ==**$100억 프리머니**==는 ==**McKinsey 전체 추정 기업가치($150~200억)**==의 ==**50~67%**==에 해당한다. ==**창립 4일 차 신생 법인**==이 ==**100년 컨설팅 회사의 절반 가치**==로 평가된 셈이다.

5월 12일 자본시장 반응:

- **Accenture 주가**: ==**-7.4%**== 하락 (시가총액 약 $200억 증발)
- **Cognizant 주가**: ==**-5.2%**==
- **TCS·인포시스 ADR**: ==**-4.8%**== 평균
- **OpenAI 비공개 시장 호가**: ==**$5,000억 → $6,200억**==으로 상향
- **TPG·Brookfield 주가**: ==**+3.1%, +2.7%**== 동반 상승

📌 **'모델 + 컨설팅 + 자본'의 삼각 통합**: AI 산업의 ==**다음 12개월 핵심 변수**==는 ==**'누가 가장 빠르게 컨설팅·SI를 통합하느냐'**==가 됐다. ==**Anthropic-골드만, OpenAI-TPG, Google-Bain Capital(검토 중)**==의 ==**'AI 빅3 vs PE 빅5' 동맹 구도**==가 6월 안에 윤곽을 드러낼 전망이다.

⚠️ **한국 기업 행동 가이드**:

1. ==**자체 AI 추진단의 외부 컨설팅 의존도 진단**== — 5월 안에 완료
2. ==**OpenAI/Anthropic/Google과의 직접 GTM 협상 라인 구축**== — 6월 1주차 안에
3. ==**'국가 AI 인프라 + 국내 LLM + 국내 SI' 패키지 사용**==의 ==**비교 ROI 분석**==
4. ==**한국형 DeployCo 모델 검토**== — 정부 주도 컨소시엄 참여 신청

✅ **결론**: OpenAI DeployCo의 5월 11일 출범은 ==**AI 도입 컨설팅 산업의 구조적 재편**==을 알리는 첫 결정타다. 한국 기업·정부·SI는 ==**6월 1주차 안에 대응 패키지를 확정**==하지 않으면, ==**2027년 글로벌 AI 도입 사업 경쟁력**==이 ==**일본·인도·동남아에 밀린다**==.`},{id:"202605130843002",title:'Google "AI 제로데이 시대 열렸다"...해커가 AI로 미공개 취약점 자동 발견 사상 첫 차단',summary:"구글이 5월 11일 'AI를 이용해 zero-day 취약점을 자동 발견·무기화한 사이버 공격을 사상 최초로 차단했다'고 공식 발표했다. Google Threat Intelligence Group의 John Hultquist 수석은 '여기 도착했다(It's here). AI 기반 취약점 익스플로잇 시대가 시작됐다'고 경고했다. 2FA를 우회하는 미공개 취약점을 AI 모델이 자동으로 찾아냈고, Anthropic은 Mythos 모델과 Project Glasswing으로 비상 대응 체제에 들어갔다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-13T08:43:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",breaking:!0,content:`## "여기 도착했다(It's here)"...AI가 모르는 취약점을 스스로 찾아냈다

==**구글(Google)**==이 5월 11일 ==**"AI를 이용해 zero-day 취약점을 자동 발견·무기화한 사이버 공격을 사상 최초로 차단했다"**==고 공식 발표했다. ==**Google Threat Intelligence Group(GTIG)**==이 ==**"high confidence"**==를 가지고 보고한 사건이다. ==**2단계 인증(2FA)을 우회**==하는 ==**기업용 보안 소프트웨어의 미공개 취약점**==을 ==**AI 모델이 자체적으로 발견**==한 정황이 ==**처음으로 확보**==됐다.

📌 **핵심 사실**: ==**John Hultquist GTIG 수석 애널리스트**==는 ==**워싱턴포스트·CNBC·Axios**== 동시 인터뷰에서 ==**"여기 도착했다(It's here). AI 기반 취약점 익스플로잇 시대가 이미 시작됐다"**==고 선언했다. 사이버보안 업계가 ==**5년 이상 경고해 온 시점**==이 ==**5월 11일에 공식화**==된 것이다.

5월 11일 발표 핵심 데이터:

- **공격 대상**: 비공개 글로벌 ==**B2B 소프트웨어**== 1개사
- **취약점 종류**: ==**Zero-day(미공개) + 2FA Bypass**==
- **AI 사용**: 취약점 ==**자동 발견 → 익스플로잇 코드 자동 작성**==
- **차단 시점**: ==**2026년 4월 말~5월 초**==
- **공격 그룹 정체**: ==**비공개**==(국가 후원 vs 범죄 조직 미확정)
- **사용된 AI 모델**: ==**Gemini·Claude Mythos 아님**==으로 확인, ==**제3 모델 추정**==
- **사건 명칭**: ==**'Mass Exploitation Event'**==(대량 익스플로잇 사건)

> "수년간 우리는 ==**'AI가 해킹 능력을 가속화하는 시점'**==을 경고했다. 그 순간이 ==**오늘**== 도착했다. ==**AI 기반 취약점·익스플로잇 시대**==가 이미 시작됐다."
> — John Hultquist, Google Threat Intelligence Group 수석 애널리스트 (5월 11일 워싱턴포스트)

---

## Anthropic Mythos와의 연결고리: 'Project Glasswing' 출범

⚠️ **Mythos 모델의 그림자**: Anthropic은 ==**5월 초 Mythos**==라는 ==**사이버 능력 특화 비공개 모델**==을 공개했다. ==**'strikingly capable at hacking'**==이라는 표현이 사용됐을 만큼 강력해서, ==**소수의 신뢰 기관에만 제공**==한다고 밝혔다.

Anthropic은 5월 11일 ==**Project Glasswing**==을 동시 가동한다고 발표했다. 참여 빅테크:

- ==**Amazon, Apple, Google, Microsoft**==
- ==**JPMorgan Chase**==
- ==**Cloudflare**==
- 기타 ==**금융·통신 인프라 기업 7개사**==

Project Glasswing의 핵심 목표는 ==**Mythos급 모델이 외부로 유출됐을 때**==를 가정한 ==**'필수 소프트웨어 보안 사전 강화'**==다. ==**zero-day 자동 패치 시스템·AI 기반 침입 탐지·실시간 위협 헌팅**==이 3대 축이다.

⚡ **결정적 메시지**: ==**Anthropic이 자체 모델 안전**==을 강조하는 동시에, ==**경쟁사 모델 또는 오픈소스 모델**==이 ==**유사 능력을 갖췄을 가능성**==을 ==**암시적으로 경고**==하는 구도다.

---

## 미국 정부의 즉각 반응

==**미국 상무부**==는 5월 11일 ==**'AI 모델 사전 검증 의무화 행정명령'**==을 ==**OpenAI·Google·xAI에 공식 적용**==한다고 발표했다. ==**Claude Mythos**==는 ==**이미 사전 협력 채널**==을 통해 검증 중인 것으로 알려졌다.

검증 의무화 핵심 조항:

1. ==**'Frontier' 등급 AI 모델**==은 ==**일반 공개 전 60일**== 정부 검증 의무
2. 사이버보안·생물학·핵·화학 ==**4대 위험 영역**== 자체 평가서 제출
3. ==**Red Team Test 결과 보고서**== 정부 제출
4. 위반 시 ==**상거래 제재 + 수출 통제 위반 적용**==

==**OpenAI는 EU에도 GPT-5.5-Cyber 모델의 접근권을 제공**==한다고 5월 11일 발표했다. ==**제한된 검증 미리보기(limited preview)**==로 ==**검증된 사이버보안 팀**==에만 공개된다.

---

## 한국에 미치는 영향

### 1. KISA·국정원·국방부의 즉각 대응 채비

==**한국인터넷진흥원(KISA)**==·==**국가정보원**==·==**국방부 사이버사령부**==는 5월 12일 ==**'AI 기반 사이버 위협 합동 대응 TF'**==를 가동한다고 공식 발표했다. ==**Google Project Zero·Anthropic Glasswing**==과의 ==**정보 공유 채널 개설**==이 5월 둘째 주 안에 추진된다. ==**국가 핵심 인프라(전력·통신·금융·국방) 약 240개 자산**==에 대한 ==**AI 기반 취약점 스캔 사전 점검**==이 5월 셋째 주부터 시작될 전망이다.

### 2. K-사이버보안 기업의 사상 최대 수주 기회

==**안랩·시큐아이·SK쉴더스·이글루코퍼레이션·NSHC**==는 ==**'AI 기반 위협 헌팅' 솔루션**==을 ==**2026년 하반기 정부·금융권에 패키지 공급**==할 가능성이 거론된다. ==**대신증권**==은 5월 12일 ==**안랩 목표주가를 1.7배 상향**==했다. ==**K-사이버보안 시장 규모**==가 ==**2026년 7조 원 → 2028년 18조 원**==으로 ==**2.6배 확대**==될 것이라는 ==**한국정보보호산업협회**== 5월 11일 전망이다.

### 3. 한국 금융권의 2FA 인증 시스템 전면 재점검

==**KB금융·신한금융·우리금융·하나금융 4대 금융그룹**==과 ==**카카오뱅크·토스뱅크**==는 ==**2FA·OTP·생체인증 시스템의 AI 우회 가능성**== 점검을 5월 12일 일제히 착수했다. ==**금융보안원**==은 5월 둘째 주 ==**'AI 시대 본인 인증 가이드라인 v2.0'**== 초안을 공개할 예정이다. ==**FIDO2 기반 패스키 의무화·하드웨어 보안 모듈(HSM) 결합**==이 핵심 변경 사항이다.

### 4. 한국 정부의 'AI 모델 사전 검증제' 입법 가속

==**과학기술정보통신부**==·==**개인정보보호위원회**==는 5월 12일 ==**'AI 기본법 시행령 v2.0'**==에 ==**미국식 사전 검증 의무 조항**==을 추가 검토한다고 발표했다. ==**6월 1일 시행 직전**==에 ==**프론티어 AI 모델 정부 검증 60일**==이 ==**한국형 표준**==으로 자리 잡을 가능성이 거론된다. ==**오픈AI Korea·Anthropic Korea·구글 클라우드 코리아**==가 ==**5월 13일 합동 의견서**==를 ==**과기부**==에 제출할 예정이다.

---

## AI 사이버보안 시장의 구조적 전환점

🎯 **AI vs AI 사이버 전쟁의 시작**: 5월 11일은 ==**'AI가 AI를 공격·방어'**==하는 ==**비대칭 사이버 전쟁**==의 첫 공식 사건으로 기록된다. 향후 12개월 전망:

- **AI 기반 zero-day 발견 건수**: ==**연 5~12배 증가**== 예측
- **사이버 보안 시장 규모**: ==**$2,400억(2025) → $3,800억(2026)**==으로 약 ==**+58%**==
- **AI 기반 방어 도구 도입 기업 비율**: ==**전 세계 12% → 38%**==(2026년 말)
- **국가 후원 공격의 AI 도구 사용 비율**: ==**8% → 30%**==

💡 **'AI 시대의 군비 경쟁'**: Anthropic Mythos·OpenAI GPT-5.5-Cyber·Gemini Cyber Defender·xAI Sentinel 등 ==**4대 사이버 특화 모델**==이 ==**6월 말까지 동시 출시**==될 전망이다. ==**한국형 K-Cyber LLM**==(가칭) 개발 논의도 5월 12일 ==**과기부·국정원·KISA·삼성SDS·LG CNS**== 사이에서 시작됐다.

✅ **결론**: 구글의 5월 11일 발표는 ==**AI 사이버보안 패러다임이 '예방·탐지'에서 '실시간 AI 대응'으로 전환**==됨을 알리는 신호탄이다. ==**한국 정부·금융권·통신사**==는 ==**6월 안에 AI 기반 보안 도입 로드맵**==을 확정하지 않으면, ==**2027년 한 차례의 대규모 사고**==가 ==**불가피하다는 전문가 경고**==가 잇따른다.`},{id:"202605130843003",title:"Anthropic 'Claude for Legal' 출범...톰슨로이터 동맹·20개 MCP·12개 변호사 플러그인",summary:"Anthropic이 5월 12일 'Claude for Legal'을 공식 출범시켰다. 20개 이상의 신규 MCP 연결자와 12개 변호사 실무 플러그인, 그리고 톰슨로이터 CoCounsel Legal을 Claude Agent SDK 기반으로 재구축하는 동맹이 핵심이다. Ironclad·DocuSign·iManage·NetDocuments·Relativity·Everlaw가 연결되며 'Commercial counsel'부터 'Law student'까지 12개 전문 영역이 자동화된다. 리걸테크 사상 최대 통합.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-13T08:43:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1696258686454-60082b2c5b51?w=800",breaking:!1,content:`## Claude가 변호사 사무실을 점령하기 시작했다

==**Anthropic**==이 5월 12일 ==**"Claude for Legal"**==을 공식 출범시켰다. 핵심은 두 가지다. ==**20개 이상의 신규 MCP(Model Context Protocol) 연결자**==와 ==**12개 변호사 실무 영역 플러그인**==, 그리고 ==**톰슨로이터(Thomson Reuters)의 CoCounsel Legal**==을 ==**Claude Agent SDK 기반으로 재구축**==하는 협업이다. ==**리걸테크 산업 사상 최대 통합**==이라는 평가가 5월 12일 ==**LawSites·Artificial Lawyer**==에서 잇따랐다.

📌 **핵심 인사이트**: Claude for Legal은 ==**일반 챗봇과 인용 근거가 검증된 법률 작업**==을 ==**하나의 인터페이스에서 자유롭게 이동**==하는 첫 사례다. ==**변호사가 평문으로 사건을 설명**==하면, CoCounsel Legal이 ==**자동으로 적절한 법률 조사 → 인용 포함 초안 작성 → 검증된 참고문헌 추가**==를 수행한다.

5월 12일 발표 핵심 구성:

- **MCP 연결자 수**: ==**20개 이상**==
- **변호사 실무 플러그인 수**: ==**12개**==
- **핵심 파트너**: ==**Thomson Reuters CoCounsel Legal**==
- **추가 파트너**: ==**Free Law Project**==(미국 판례 무료 데이터베이스)
- **계약·문서 연결자**: ==**Ironclad, DocuSign, Definely, iManage, NetDocuments**==
- **eDiscovery·소송 연결자**: ==**Relativity, Everlaw, Consilio**==
- **12개 플러그인 예시**: ==**'commercial counsel', 'employment counsel', 'litigation associate', 'law student'**==

> "==**fiduciary-grade work product**==(수임 책임이 인정되는 결과물)는 ==**계획·도구 선택·인용 검색·중간 적응**==이 모두 자동화되어야 한다. ==**Claude Agent SDK**==가 그 인프라를 제공한다."
> — Steve Hasker, Thomson Reuters CEO (5월 12일 PR Newswire)

---

## 톰슨로이터-Anthropic의 동맹: 'AI 변호사 보조'에서 'AI 변호사'로

⚡ **CoCounsel Legal의 진화**: 톰슨로이터는 ==**2023년 Casetext 인수 ($6.5억)**==를 시작으로 ==**AI 법률 비서 CoCounsel**==을 발전시켜 왔다. 2026년 5월 12일 발표는 ==**근본적 패러다임 전환**==이다.

- **이전 단계 (~2025)**: ==**'검색 + 요약' 보조 도구**==
- **2026년 5월 12일 이후**: ==**'계획·실행·검증' 자율 에이전트**==

새 CoCounsel Legal은 ==**Claude Agent SDK 기반**==으로 재구축됐다. ==**Claude가 한 번에 평균 12~28단계의 법률 작업**==을 ==**자율적으로 수행**==한다. ==**계약 검토·증거 조사·판례 인용·소장 작성**==이 ==**4~7시간 → 35~50분**==으로 단축된다.

🎯 **시장 충격 시나리오**:

1. **로펌 부담**: 1~3년 차 변호사 업무 ==**60~80% 대체 가능성**==
2. **단가 압박**: 시간당 청구 모델 → ==**프로젝트 단가 모델**==로 강제 전환
3. **고객사 직접 도입**: ==**대기업 사내 법무팀이 외부 로펌 우회**==
4. **법학전문대학원**: ==**'AI 변호사 시대'**== 대응 커리큘럼 6개월 내 개편 압력

---

## 12개 플러그인의 의미: 변호사 분야별 특화

5월 12일 Anthropic이 공개한 ==**12개 변호사 플러그인의 상세 구성**==:

1. **Commercial Counsel** — 상사·M&A·계약법
2. **Employment Counsel** — 노동·고용법
3. **Litigation Associate** — 소송 전반·디스커버리·증거
4. **Law Student** — 법학 교육·시험 대비
5. **Corporate Secretary** — 이사회·기업 거버넌스
6. **IP Counsel** — 특허·상표·저작권
7. **Privacy Counsel** — GDPR·CCPA·HIPAA
8. **Tax Counsel** — 세무·국제 조세
9. **Real Estate Counsel** — 부동산·임대·도시계획
10. **Immigration Counsel** — 비자·영주권·국적
11. **Family Law Counsel** — 가족·상속·이혼
12. **Compliance Officer** — 규제 준수·내부 통제

각 플러그인은 ==**해당 분야의 최신 판례·법률·규제**==를 ==**실시간 RAG**==로 가져온다. ==**'Law Student' 플러그인**==이 흥미로운 이유는, ==**미국·EU의 법학전문대학원이 이미 Claude 사용을 사실상 허용**==하는 추세 때문이다.

---

## 한국에 미치는 영향

### 1. 김앤장·광장·태평양·세종·율촌의 즉각 대응

==**대한민국 5대 로펌(김앤장·광장·태평양·세종·율촌)**==은 5월 12일 ==**'AI 변호사 도구 도입 TF'**==를 동시 가동했다. ==**Claude for Legal·OpenAI Harvey·Lexis+ AI 비교 검토**==가 ==**6월 첫째 주까지 완료**==될 전망이다. ==**김앤장**==은 ==**연간 약 800억 원의 AI 도입 예산**==을 ==**2026년 7월부터 집행**==한다고 ==**법률신문**== 5월 12일 보도가 있었다.

### 2. 법무법인 리걸테크의 대규모 재편

==**Beagle Labs·로앤·아이리스 데이터·로비드·로톡**== 등 한국 리걸테크 스타트업은 ==**Claude API 직접 연동 모델**==으로 ==**6월 1주차 안에 제품 업그레이드**==를 발표할 전망이다. ==**한국 법률시장 규모(2025년 약 6.8조 원)**==의 ==**AI 도구 시장 점유율**==이 ==**2026년 4% → 2027년 19%**==로 ==**4.7배 확대**==될 전망이라는 ==**한국리걸테크협회**== 5월 12일 보고서가 발표됐다.

### 3. 한국 변호사 시장의 노동시장 충격

==**대한변호사협회**==는 5월 12일 ==**'AI 변호사 도구 도입 기준안'**==을 ==**긴급 발표**==했다. 핵심은 ==**1) 의뢰인 동의 없이 외국 AI 모델로 사건 정보 처리 금지, 2) AI 작업물의 변호사 책임 명시, 3) AI 도구 사용 시간 수임료 기준 정비**==다. ==**3년 차 미만 변호사 약 1만 1,200명**==의 ==**업무 절반 이상**==이 ==**AI 자동화 영향권**==에 들어간다는 분석이 ==**한국노동연구원**== 5월 12일에서 나왔다.

### 4. 한국형 리걸 LLM 개발 가속

==**과학기술정보통신부·법무부**==는 5월 12일 ==**'한국형 K-Legal LLM 개발 기획안'**==을 ==**비공식 검토**==하기 시작했다. ==**LG AI연구원·업스테이지·KT클라우드**==가 핵심 후보 컨소시엄이다. ==**한국 판례·법령·행정심판 데이터 약 32TB**==를 ==**파인튜닝 베이스로 활용**==하는 ==**'리걸 EXAONE' / '리걸 Solar' / '리걸 믿:음'**== 등 ==**3대 후보**==가 거론된다. ==**2026년 4분기 예비 발표, 2027년 1분기 베타 공개**==가 일정이다.

---

## AI 변호사 시대의 입법·윤리 과제

💡 **'AI 변호사'의 법적 지위**: Claude for Legal이 ==**실무적으로 변호사 업무를 수행**==하면서도 ==**변호사 자격증을 가지지 않는다**==는 점이 5월 12일 ==**미국·EU·한국 변협**==의 공통 논쟁 의제다.

미국 ABA(American Bar Association)·EU CCBE(유럽변호사연합)·대한변협의 3대 쟁점:

1. **무허가 법률 사무 행위**: AI가 ==**일반인에게 직접 법률 조언**==을 제공할 경우 ==**기존 변호사법 위반**==?
2. **수임 책임의 귀속**: AI 작업물의 오류로 의뢰인이 손해를 입었을 때, ==**책임은 변호사·로펌·AI 모델 회사**== 중 누구에게?
3. **인용 검증의 표준**: ==**'환각 인용'**==이 발생할 경우의 ==**제재 기준**==과 ==**보고 의무**==는?

⚠️ **한국 행동 가이드**:

- ==**6월 안에 변협 'AI 변호사 도구 사용 가이드라인 v1.0' 확정**==
- ==**한국형 K-Legal LLM 개발 컨소시엄 7월 안에 발족**==
- ==**리걸 환각·인용 오류 분쟁 조정 절차 8월 안에 정비**==

✅ **결론**: Claude for Legal의 5월 12일 출범은 ==**리걸테크 산업이 '도구'에서 '대체재'로 전환**==됨을 보여주는 결정적 사건이다. 한국 법조계는 ==**6~8월 3개월간**== ==**규제·기술·교육의 3축 정비**==를 동시에 진행해야 ==**2027년 글로벌 리걸 AI 경쟁**==에서 ==**일본·싱가포르·대만에 밀리지 않는다**==.`},{id:"202605130843004",title:"국가 AI컴퓨팅센터 SPC 본궤도...전남 해남 1.5만장 GPU, 3분기 착공 확정",summary:"과기정통부와 민간 사업자들이 5월 11일 '국가 AI컴퓨팅센터' 특수목적법인(SPC)의 핵심 설립 단계를 마무리했다. 2028년까지 첨단 AI 반도체 1만 5,000장을 전남 해남 솔라시도 부지에 구축하는 본격 인프라 사업이 3분기 착공으로 확정됐다. 총 사업비 약 2조 4,000억 원, 한국형 소버린 AI 인프라의 첫 번째 기둥. 11월 1차 서비스 개시 예정.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-13T08:43:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!1,content:`## 전남 해남 솔라시도에 'AI 고속도로'가 깔린다

==**과학기술정보통신부**==와 민간 사업자들이 5월 11일 ==**'국가 AI컴퓨팅센터' 특수목적법인(SPC)**==의 핵심 설립 단계를 ==**본궤도에 올렸다**==. ZDNet Korea·AI타임스 보도에 따르면, ==**3분기 인프라 착공이 확정**==되면서 ==**2028년까지 첨단 AI 반도체 1만 5,000장**== 규모의 ==**한국 첫 '소버린(Sovereign) AI 인프라'**==가 ==**전남 해남 솔라시도 부지**==에 자리 잡는다.

📌 **핵심 인사이트**: 이번 SPC는 ==**민관 합동 자본금 약 4,000억 원 + 추가 대출 2조 원 이상**==으로 ==**총 2조 4,000억 원 규모**==다. ==**일반 데이터센터가 아닌 '국가 전략 자산'**==으로 분류되며, ==**산업계·학계·연구기관에 고성능 컴퓨팅을 직접 제공**==한다. ==**국산 AI 반도체 테스트베드**==를 ==**병행**==한다는 점이 글로벌 사례와 차별화된다.

5월 11일 본궤도 확정 핵심 일정:

- **SPC 자본금**: 약 ==**4,000억 원**==(민관 합동)
- **추가 대출 한도**: ==**2조 원 이상**==
- **총 사업비**: 약 ==**2조 4,000억 원**==
- **부지**: ==**전남 해남 솔라시도**==
- **GPU 규모**: ==**1만 5,000장 이상**==(2028년 기준)
- **착공 시점**: ==**2026년 3분기**==
- **1차 서비스 개시**: ==**2026년 11월**==
- **완전 가동**: ==**2028년**==

> "==**AI 인프라는 더 이상 민간만의 영역이 아니다**==. 국가가 ==**전력·통신과 동격의 전략 자산**==으로 ==**AI 컴퓨팅을 보유**==해야 ==**2030년대 산업·안보 경쟁력**==을 지킬 수 있다."
> — 과학기술정보통신부 고위 관계자 (5월 11일 ZDNet Korea)

---

## '소버린 AI'의 4대 축

⚡ **국가 AI컴퓨팅센터의 4가지 임무**:

1. **AI 고속도로 역할** — 산업계·학계·연구기관 ==**고성능 GPU 직접 접근**==
2. **국산 AI 반도체 테스트베드** — ==**리벨리온 ATOM·퓨리오사AI RNGD**== 실증
3. **외산 GPU 의존도 축소** — ==**엔비디아·AMD 의존을 30%대로 단계 축소**==
4. **소버린 LLM 학습 인프라** — ==**EXAONE·HyperCLOVA X·Solar·믿:음**== 동시 학습

==**솔라시도 부지**==는 ==**약 47만 평**==의 넓은 평지에 ==**전남 신안 해상풍력 단지의 잉여 전력**==을 ==**직접 송전 받아 사용**==할 수 있다는 점이 결정적 강점이다. ==**최대 1.2GW**==의 전력을 ==**저탄소 방식으로 공급**==할 수 있다. ==**삼성전자**==는 별도로 ==**해남 부지에 2조 5,000억 원 규모의 AI 초공정 라인**==을 ==**3월 11일 발표**==한 바 있다.

🎯 **'AI 클러스터' 구성**:

- **국가 AI컴퓨팅센터** (2조 4,000억 원)
- **삼성전자 해남 AI 초공정** (2조 5,000억 원)
- **해상풍력 1.2GW 전력 공급**
- **인접 GIST·전남대학교 AI 연구소 연계**

==**총 약 5조 원 규모**==의 ==**아시아 최대 단일 AI 클러스터**==가 ==**2028년까지 단계 완공**==된다.

---

## 국민성장펀드의 8.4조 원 'AI 직접투자'

📌 **자본의 흐름**: ==**국민성장펀드**==는 2026년 들어 ==**총 8.4조 원**==을 ==**소버린 AI·이차전지·바이오**==에 풀었다. 이 중 ==**5,600억 원이 업스테이지 단일 투자**==로, ==**'AI 모델 부문 1호 직접 투자'**==로 기록됐다.

국민성장펀드의 AI 분야 분류:

- **소버린 모델**: ==**업스테이지(5,600억)**==, ==**LG AI연구원·SK텔레콤(검토 중)**==
- **AI 인프라**: ==**국가 AI컴퓨팅센터 SPC**==
- **국산 AI 반도체**: ==**리벨리온·퓨리오사AI·딥엑스**==
- **AI 응용 산업**: ==**바이오·금융·제조 AI 융합**==

==**기획재정부·산업통상자원부**==는 5월 둘째 주 ==**'AI 인프라 SPC 우선 발주 가이드라인'**==을 발표할 예정이다. ==**국가 AI컴퓨팅센터가 첫 발주처**==가 되면, ==**삼성전자·SK하이닉스의 HBM 직접 공급**==과 ==**리벨리온·퓨리오사의 자국 AI 칩 시범 도입**==이 ==**의무화 수준**==으로 추진된다.

---

## 한국에 미치는 영향

### 1. K-AI 칩 산업의 결정적 기회

==**리벨리온·퓨리오사AI·딥엑스·텔레칩스**==는 ==**'국가 인프라 우선 채택'**==이라는 ==**역대 최대 시장 보장**==을 확보한다. ==**리벨리온 ATOM·퓨리오사 RNGD**==의 ==**2026년 4분기 양산**==이 ==**연 2,000~3,000장 수주**==로 직결될 전망이다. ==**4월 21일 진행 중인 한국 자국 AI 모델 2차 평가**==(6월 종료)와 결합해 ==**한국형 AI 풀스택**==이 ==**2026년 말까지 가동 가능 수준**==으로 정착할 가능성이 거론된다.

### 2. 전남 지역경제의 'AI 르네상스'

==**전남 해남·신안·진도**==에는 ==**해상풍력·AI·반도체 3대 산업**==이 ==**5조 원 이상의 동시 투자**==를 받는다. ==**전남도청·해남군청**==은 5월 12일 ==**'AI 클러스터 특별 지원 조례'**==를 발표했다. ==**부지 개발·전력 우선 공급·세제 혜택·교육 인프라**==의 4축 패키지가 ==**2026년 3분기 안에 단계적 시행**==된다. ==**해남·신안 인구**==가 ==**2028년까지 약 1만 5,000명 증가**==할 것이라는 ==**한국지방행정연구원**== 5월 12일 분석이다.

### 3. 한국전력·한수원의 'AI 전용 송배전' 본격화

==**한국전력**==과 ==**한국수력원자력**==은 ==**'AI 전용 송배전 패스트트랙'**== 도입을 5월 12일 정식 협의했다. ==**해남 솔라시도 1.2GW 공급**==을 ==**가장 빠른 케이스**==로 진행하고, ==**평택·세종·강원**== 등 ==**2~5순위 AI 데이터센터 부지**==에 ==**동일 모델 확산**==을 추진한다. ==**산업통상부**==는 ==**'AI 인프라 전력 가이드라인 v1.0'**==을 ==**6월 1일 AI 기본법 시행령 발효**==와 동시에 발표할 예정이다.

### 4. KT클라우드·네이버클라우드·NHN클라우드의 역할 재정의

==**민간 클라우드 3사**==는 ==**국가 AI컴퓨팅센터의 '관제·운영 파트너'**==로 지원하는 방안을 5월 12일 동시 발표했다. ==**KT클라우드·네이버클라우드·NHN클라우드**==가 ==**각각 30%·40%·30%**==의 ==**가상 인프라 운영 분담**==을 협의 중이다. ==**B2B GPU 임대 단가**==가 ==**국가 인프라와 가격 연동**==되면서 ==**현재 분기당 5~8% 인하**==가 가능해질 전망이다.

---

## '소버린 AI'의 글로벌 의미

💡 **글로벌 소버린 AI 경쟁 구도**: 2026년 5월 기준 ==**'국가 AI 인프라'**==를 ==**공식 추진**==하는 국가는 ==**미국·중국·EU·일본·인도·UAE·한국 7개국**==이다.

==**각국의 GPU 규모**==(2028년 목표):

- **미국**: ==**약 200만 장**==(NVIDIA + 자국 칩 + 동맹국 공급)
- **중국**: ==**약 80만 장**==(Huawei Ascend + SMIC + 자체 칩)
- **EU**: ==**약 15만 장**==(NVIDIA 의존, 6개 회원국 분산)
- **일본**: ==**약 12만 장**==(NVIDIA + 라피더스 시범 칩)
- **인도**: ==**약 10만 장**==(NVIDIA + 자국 스타트업 시범)
- **UAE**: ==**약 5만 장**==(NVIDIA + 자체 G42 컨소시엄)
- **한국**: ==**약 1.5~3만 장**==(NVIDIA + 리벨리온·퓨리오사 시범)

⚠️ **한국의 약점과 강점**:

- **약점**: 절대 GPU 규모는 ==**미국의 1.5% 수준**==
- **강점**: ==**메모리(HBM) 70~90% 시장점유**==·==**리벨리온·퓨리오사 자국 칩**==

📌 **다음 12개월 결정적 변수**:

1. ==**3분기 SPC 착공 일정 준수**== — 한 분기 지연 시 ==**2028년 완공 어려움**==
2. ==**리벨리온·퓨리오사 양산 수율 확보**== — 분기 2,000장 이상 안정 공급
3. ==**해상풍력 전력 공급 안정성**== — 2.4GW 확장 시 ==**전력 수급 비상**== 가능성
4. ==**EXAONE·Solar·HyperCLOVA·믿:음 4대 모델 동시 학습**== — 클러스터 운영 노하우

✅ **결론**: 5월 11일 국가 AI컴퓨팅센터 SPC 본궤도 진입은 ==**한국이 '글로벌 AI 패권 경쟁의 7개국 명단'**==에 ==**공식 진입**==한 결정적 순간이다. ==**6~7월 SPC 최종 설립·자본 납입**==과 ==**3분기 착공**==이 ==**2030년대 한국 산업·안보의 운명**==을 좌우한다.`},{id:"202605130843005",title:"Cadence-엔비디아 'Physical AI 풀스택' 발표...sim-to-real 격차 100배 가속",summary:"케이던스와 엔비디아가 5월 12일 Physical AI Stack 전체 통합 로드맵을 공개했다. 로봇·자율 기계의 'sim-to-real 격차'를 평균 35~60%에서 5~12%로 줄이고, 엔지니어링 워크플로를 최대 100배 가속한다. Cadence VTD/VTDx + NVIDIA Isaac Sim·Cosmos·Jetson 통합으로 휴머노이드 로봇 양산화의 결정적 병목이 해소된다. 두산로보틱스·레인보우로보틱스·보스턴다이내믹스(현대차) 모두 영향권.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-13T08:43:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",breaking:!1,content:`## '시뮬레이션과 현실의 100배 격차'를 좁히다

==**케이던스(Cadence)**==와 ==**엔비디아(NVIDIA)**==가 ==**CadenceLIVE Silicon Valley 2026**== 직후인 5월 12일 ==**Physical AI Stack 전체 통합 로드맵**==을 공개했다. 핵심은 ==**로봇·자율 기계의 'sim-to-real 격차'**==를 ==**최대 100배 가속**==으로 해소하는 것이다. ==**Cadence의 고정밀 멀티피직스 시뮬레이션 + NVIDIA Isaac 오픈소스 로봇 시뮬레이션 라이브러리 + Cosmos 오픈월드 모델**==이 ==**하나의 에이전트 오케스트레이션 워크플로**==로 묶인다.

📌 **핵심 인사이트**: 'sim-to-real 격차'란 ==**가상 환경에서 학습된 로봇이 실제 세계에서 보이는 성능 저하**==를 가리킨다. 기존 격차는 ==**평균 35~60%**==였다. Cadence-NVIDIA 통합 스택은 이를 ==**5~12%**==로 줄이는 것을 목표로 한다. 이는 ==**로봇 양산화의 결정적 병목 해소**==를 의미한다.

5월 12일 발표 핵심 통합:

- **Cadence Physical AI Stack**: 고정밀 멀티피직스 시뮬레이션
- **NVIDIA Isaac Sim + Isaac Lab**: 가상 학습 환경
- **NVIDIA Cosmos**: 오픈월드 월드 모델
- **Cadence VTD/VTDx**: 미션 규모 시나리오 시뮬레이션
- **NVIDIA Jetson**: 엣지 AI 실시간 추론
- **Live Virtual Twin**: 실세계 피드백 연속 모니터링
- **속도 향상**: 엔지니어링 워크플로 ==**최대 100배**==

> "Cadence의 ==**물리 기반 시뮬레이션**==과 ==**NVIDIA의 가속 컴퓨팅·AI 모델**==이 결합하면, ==**로봇·자율 기계의 개발 주기**==가 ==**18~24개월에서 4~6개월**==로 단축된다. ==**Physical AI 시대의 표준 워크플로**==가 될 것이다."
> — Anirudh Devgan, Cadence CEO (5월 12일 보도자료)

---

## Physical AI: 'LLM의 다음 무대'

⚡ **AI 산업의 다음 빅뱅**: 2023~2025년 ==**LLM(언어 모델)**==이 빅테크 매출 성장의 핵심이었다면, 2026~2028년은 ==**Physical AI(피지컬 AI)**==가 ==**산업 변혁의 핵심**==이 될 전망이다.

==**Physical AI 3대 영역**==:

1. **휴머노이드 로봇** — 가정·사무실·서비스업
2. **산업 자동화 로봇** — 제조·물류·창고
3. **자율주행 모빌리티** — 자동차·드론·로봇 트럭

엔비디아 ==**Jensen Huang CEO**==는 ==**'AI 산업의 60%는 결국 Physical AI'**==라는 발언을 ==**3월 GTC 2026**==에서 반복했다. ==**Tesla Optimus·Figure 02·1X Neo·Boston Dynamics Atlas·Apptronik Apollo**==의 ==**2026~2028년 상용화**==가 ==**Cadence-NVIDIA 스택의 직접 수혜**==로 이어진다.

🎯 **시장 규모 전망**:

- **Physical AI 시장 (2026)**: 약 ==**$840억**==
- **Physical AI 시장 (2030)**: 약 ==**$5,200억**==
- **연평균 성장률**: ==**약 +58%**==
- **휴머노이드 로봇 양산**: ==**2026년 1,000~1만 대 → 2030년 200만~500만 대**==

---

## 'Agentic AI 디자인'의 의미

📌 **반도체 설계의 'AI 코파일럿' 시대**: Cadence-NVIDIA 통합은 ==**반도체 칩 설계 자체**==도 변화시킨다. ==**Cadence의 Allegro·OrCAD·Innovus·Genus**== EDA 도구에 ==**Agentic AI**==가 통합되면서, ==**칩 디자인 사이클**==이 ==**6~12개월 → 6~12주**==로 단축될 가능성이 거론된다.

5월 12일 발표 ==**핵심 EDA 가속 사례**==:

- **회로 시뮬레이션**: ==**최대 80배 가속**==
- **물리 검증**: ==**최대 60배 가속**==
- **타이밍 분석**: ==**최대 40배 가속**==
- **레이아웃 자동화**: ==**최대 100배 가속**==
- **DRC/LVS**: ==**최대 50배 가속**==

이는 ==**반도체 기업의 R&D 비용·인력 부담 구조**==를 ==**근본적으로 재편**==한다. ==**팹리스 기업의 진입 장벽**==이 ==**3~5분의 1**==로 낮아질 가능성이 있다.

---

## 한국에 미치는 영향

### 1. K-로봇 산업의 결정적 도약 기회

==**두산로보틱스·레인보우로보틱스·유진로봇·로보티즈·LG전자 로봇사업부**==는 ==**Cadence-NVIDIA Physical AI Stack**==을 ==**도입 검토**==한다고 5월 12일 비공식 의사를 표명했다. ==**현대차·기아 보스턴다이내믹스(현대차 자회사)**==의 ==**Atlas·Stretch 양산화**==가 ==**6~12개월 단축**==될 가능성이 거론된다. ==**한국 휴머노이드 로봇 시장**==이 ==**2026년 약 5,000억 원 → 2028년 약 2.8조 원**==으로 ==**5.6배 확대**==될 전망이라는 ==**한국로봇산업협회**== 5월 12일 분석이다.

### 2. 삼성·하이닉스 반도체 설계 자동화 가속

==**삼성전자·SK하이닉스 반도체 설계팀**==은 ==**Cadence Agentic AI EDA 도구 도입**==을 ==**2026년 3분기부터 단계 적용**==한다. ==**HBM4·HBM4E·차세대 GDDR8**==의 ==**설계 사이클**==이 ==**현재 18개월 → 8~10개월**==로 ==**약 40% 단축**==될 전망이다. ==**팹리스 인력 부족**== 문제를 ==**Agentic AI**==가 ==**부분 대체**==하면서 ==**한국 반도체 산업의 인재 병목**==을 일부 해소할 가능성이 있다.

### 3. 현대차·기아의 자율주행 양산화 가속

==**현대차그룹**==은 ==**Cadence VTDx 미션 시나리오 시뮬레이션**==을 ==**자율주행 4단계(레벨 4) 시범 사업**==에 ==**즉각 적용**==을 검토 중이다. ==**보스턴다이내믹스**==의 ==**물류·서비스 로봇**==과 결합한 ==**'풀스택 모빌리티'**== 전략의 핵심 인프라로 활용될 전망이다. ==**2027년 라스베이거스 CES**==에서 ==**현대차의 통합 Physical AI 데모**==가 공개될 예정이다.

### 4. K-EDA 스타트업의 글로벌 진출 가속

==**알체라·솔리드웨어·딥인사이트**== 등 ==**한국 EDA·시뮬레이션 스타트업**==은 ==**Cadence-NVIDIA 생태계 정식 파트너 등록**==을 ==**5~7월 동시 추진**==한다. ==**자국 시장 한정**==이었던 ==**EDA 보조 도구**==가 ==**글로벌 반도체 기업의 워크플로**==에 편입될 가능성이 거론된다. ==**한국EDA협회**==는 ==**'K-EDA 글로벌 진출 컨소시엄'**==을 ==**6월 1주차 안에 구성**==한다.

---

## Physical AI 시대의 글로벌 경쟁

💡 **Physical AI 인프라 경쟁 구도**:

- **미국**: NVIDIA + Cadence + Synopsys + Tesla + Figure + Boston Dynamics
- **중국**: Huawei + 화웨이 셀레스티얼 + Unitree + UBTECH + Xpeng
- **일본**: Honda Asimo 후속 + Toyota T-HR3 후속 + 소니 AIBO 진화
- **한국**: 보스턴다이내믹스(현대차) + 두산로보틱스 + 레인보우로보틱스 + LG전자
- **EU**: 1X(노르웨이) + Neura Robotics(독일) + 다양한 스타트업

⚠️ **한국 행동 가이드**:

1. ==**Cadence-NVIDIA Physical AI Stack 도입 비용 분석**== 5월 안에 완료
2. ==**'한국형 휴머노이드 컨소시엄'**== — 현대차·삼성·LG·두산 합동 검토 6월 안에
3. ==**Physical AI 인재 양성 프로그램**== — KAIST·서울대·포스텍 합동 9월 신학기 시작
4. ==**산업부 'Physical AI 산업 육성 전략'**== — 7월 발표 목표

✅ **결론**: Cadence-NVIDIA 5월 12일 통합 로드맵은 ==**Physical AI 산업의 본격 양산 시대**==를 알리는 결정타다. ==**한국은 로봇·자율주행·반도체 3대 산업이 모두 영향권**==에 들어가 있으며, ==**6~9월 3개 분기 동안**==의 ==**준비 속도**==가 ==**2028~2030년 글로벌 Physical AI 패권**==을 좌우한다.`},{id:"202605110844001",title:"엔비디아 AI 지분투자 400억 달러 돌파...IREN 5GW·코닝 32억 달러 동시 협약",summary:"엔비디아가 2026년 1~5월 AI 분야 지분 투자 누적액 400억 달러를 돌파했다. 5월 7일 데이터센터 운영사 IREN과 5GW 규모 인프라 협약, 같은 주 유리 제조사 코닝에 32억 달러 투자 권리를 확보하며 '순환 거래' 비판 속에서도 AI 공급망 전반에 자본을 쏟아붓는 전략이 본격화됐다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-11T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",breaking:!0,content:`## 엔비디아 자본 배분 전략, 한 분기 만에 5년치 추월

==**엔비디아(NVIDIA)**==가 ==**2026년 1~5월 사이 AI 분야 지분 투자 누적액 400억 달러**==를 돌파했다. CNBC가 5월 9일 분석한 결과, 엔비디아의 ==공격적 자본 배분 전략==이 ==이전 5년 누적치==를 ==한 분기 만에 추월==한 셈이다.

📌 **핵심 인사이트**: 400억 달러 중 ==**300억 달러는 OpenAI 지분**==이다. 나머지 100억 달러는 ==**5월 첫째 주에만 두 건의 대형 거래**==로 채워졌다. AI 산업 전체의 자본 흐름이 ==엔비디아 중심으로 재편==되고 있다는 결정적 시그널이다.

5월 7일 ==**데이터센터 운영사 IREN**==과 체결한 협약의 골자:

- 엔비디아가 IREN에 ==**최대 21억 달러 투자 권리**== 확보
- IREN은 ==**5기가와트(GW) 규모**==의 ==**엔비디아 DSX 브랜드 AI 인프라**== 전 세계 배치
- 가동 시점은 ==**2027년 1분기부터 단계적**==

같은 주 ==**유리 제조사 코닝(Corning)**==에는 ==**최대 32억 달러 투자 권리**==를 확보했다. 코닝은 ==**미국 내 3개 신규 공장**==을 ==**엔비디아 광통신 기술 전용**==으로 건설한다. 랙 단위 시스템 확장 시 ==**구리 케이블 대신 광섬유 케이블**== 채택이 핵심 변수다.

> "우리는 AI 인프라 스택의 ==**위에서 아래까지(top to bottom)**== 지분을 가지면서 동시에 ==**상업 계약을 체결**==하는 전략을 택했다. 이것이 ==**현재 AI 산업의 작동 방식**==이다."
> — Colette Kress, NVIDIA CFO (5월 9일 컨퍼런스콜)

---

## '순환 거래' 비판: 자본이 같은 회사들 사이를 돈다

⚠️ **비판의 핵심**: 엔비디아가 자사 제품을 사는 ==고객사에 직접 지분 투자==를 하면서, ==**'자본이 같은 회사들 사이를 돌고 있다'**==(circular deal)는 우려가 제기된다.

구체적 순환 구조는 다음과 같다:

1. **엔비디아 → OpenAI**: 300억 달러 지분 + 컴퓨팅 공급
2. **OpenAI → 엔비디아**: 컴퓨팅 사용료 결제
3. **엔비디아 → IREN**: 21억 달러 지분
4. **IREN → 엔비디아**: 5GW GPU 구매
5. **엔비디아 → 코닝**: 32억 달러 지분
6. **코닝 → 엔비디아**: 광통신 케이블 공급

==**골드만삭스·벤징가**==의 분석가들은 이 구조를 ==**'AI 산업의 새로운 자본 사이클'**==로 명명했다. 긍정적 측면은 ==**공급망 확보**==와 ==**기술 표준 통일**==이다. 부정적 측면은 ==**버블 형성 가능성**==과 ==**경쟁사 진입 장벽**==이다.

⚡ **결정적 변수**: ==**미국 SEC**==는 5월 8일 ==**'AI 분야 지분-매출 동시 거래의 회계 처리'**== 점검에 착수했다. 결과에 따라 엔비디아의 회계 보고 기준 변경 가능성이 거론된다. ==**연 200억 달러 규모**==의 매출 인식 시점이 분기당 ==**5~8% 변동**==할 수 있다는 분석이 5월 9일 모건스탠리에서 나왔다.

---

## 한국에 미치는 영향

### 1. SK하이닉스·삼성전자 HBM 슈퍼사이클 연장

==**5GW 규모 IREN 인프라**==는 ==**약 25만 개의 엔비디아 GB300·Rubin 시리즈 GPU**==를 의미한다. 이는 ==**HBM4·HBM4E 약 200만~300만 개 추가 수요**==로 환산된다. ==**SK하이닉스**==(점유율 70%)와 ==**삼성전자**==(점유율 20%)의 ==**2027~2028년 매출 예측이 상향 조정**==될 가능성이 거론된다. ==**메리츠증권**==은 5월 9일 ==**SK하이닉스 목표주가를 31만 원으로 상향**==했다.

### 2. 한국전력·한수원의 데이터센터 전력 협력 기회

==**5GW**==는 ==**대한민국 전체 발전 용량의 약 4.5%**==에 해당한다. IREN이 글로벌 배치를 추진하면서 ==**한국 내 1~2개 거점**==(평택·세종·전남)에 ==**최대 500MW급 AI 데이터센터**== 유치 가능성이 제기됐다. ==**한국전력**==과 ==**한국수력원자력**==이 5월 8일 IREN 한국 진출 검토를 위한 비공식 협의를 시작한 것으로 알려졌다. ==**산업통상부**==도 5월 9일 ==**'AI 인프라 전용 송배전 패스트트랙'**== 도입을 검토 중이다.

### 3. KT클라우드·네이버클라우드의 GPU 임대 단가 압력

엔비디아가 ==**자사 GPU 공급의 상당량을 자본 연결 고객(OpenAI·IREN 등)에 우선 배정**==하면서, ==**한국 클라우드 사업자의 H200·Rubin GPU 조달 단가**==가 ==**2026년 하반기 10~15% 추가 상승**==할 가능성이 거론된다. ==**KT클라우드·네이버클라우드·NHN클라우드**==는 5월 8일 ==**AMD MI400·인텔 가우디 3 도입 검토**==를 가속화한다고 발표했다.

### 4. 리벨리온·퓨리오사AI 등 K-AI 칩의 새 기회

엔비디아 GPU 공급 부족이 장기화되면서, ==**리벨리온의 ATOM·퓨리오사AI의 RNGD**==가 ==**한국 기업·정부 데이터센터 우선 채택 대상**==으로 부상한다. ==**삼성SDS·LG CNS·SK C&C**==가 5월 8일 ==**'한국형 AI 인프라 컨소시엄'**==을 구성했다. ==**2026년 하반기 정부 AI 컴퓨팅 사업 우선 발주**== 가능성이 거론된다.

---

## 자본시장의 시그널: AI 인프라 슈퍼사이클

🎯 **5월 9일 시점 글로벌 AI 인프라 투자 누계**:

- **엔비디아 단독 지분**: ==**400억 달러+**==
- **OpenAI Stargate(연간 자본 지출)**: ==**560억 달러**==
- **Anthropic 컴퓨팅 계약 누적**: ==**2,000억 달러**==
- **Microsoft Azure AI CapEx 2026**: ==**1,800억 달러**==
- **Google Cloud TPU 확장**: ==**1,200억 달러**==

합계 ==**연 5,400억 달러**==. 이는 ==**전 세계 반도체 산업 매출(약 7,000억 달러)의 77%**==에 해당한다. 즉, AI 인프라가 ==**반도체 산업 자체를 흡수**==하는 중이다.

💡 **자본 효율성의 역설**: 엔비디아 1달러 매출당 자본 투자 비율이 ==**2023년 0.04달러에서 2026년 0.27달러로 6.7배 증가**==했다. 자체 성장에 머무르지 않고 ==**생태계 전체에 자본을 미리 배포**==하는 전략이 자리 잡았다.

✅ **결론**: 엔비디아의 400억 달러 지분 전략은 단순 투자가 아니라 ==**AI 인프라 공급망 전체에 대한 지배력 강화**==다. 한국 기업·정부는 ==**HBM 슈퍼사이클 수혜와 전력 인프라 부담**==이라는 ==두 가지 동시 압력==에 5월부터 본격 대응해야 한다. ==**산업부·과기부·기재부 합동 AI 인프라 TF**==가 5월 둘째 주 가동 예정이라는 점이 핵심 변수다.`},{id:"202605110844002",title:"Anthropic, 구글·브로드컴과 3.5GW TPU 협약...연 매출 300억 달러 돌파 공개",summary:"Anthropic이 5월 7일 구글·브로드컴과 2027년부터 가동되는 3.5기가와트 규모 차세대 TPU 인프라 협약을 체결했다. 같은 날 공개한 연 매출 환산액(ARR)은 300억 달러로, 2025년 말 90억 달러 대비 3배 이상 급증했다. AWS·구글·엔비디아 3축에 SpaceX까지 더한 멀티 컴퓨팅 전략의 결정판이다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-11T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",breaking:!0,content:`## 3.5GW TPU와 300억 달러 ARR이라는 두 숫자

==**Anthropic**==이 5월 7일 ==**구글(Google)**==·==**브로드컴(Broadcom)**==과 ==**2027년부터 가동되는 3.5기가와트(GW) 규모 차세대 TPU 인프라 협약**==을 체결했다고 발표했다. 같은 날 공개한 ==**연 매출 환산액(Annual Run Rate, ARR)**==은 ==**300억 달러**==로, ==**2025년 말 90억 달러 대비 약 3.3배**== 급증했다.

📌 **핵심 인사이트**: ARR 300억 달러는 ==**Anthropic이 OpenAI의 ARR(약 110억 달러 추정)을 추월**==했음을 시사한다. 18개월 전 OpenAI ARR의 ==**3분의 1 수준**==이었던 회사가 ==**선두로 도약**==한 셈이다.

3.5GW TPU 협약의 구조:

- ==**브로드컴 → 구글**== TPU 설계 협력 ==**2031년까지 연장**==
- ==**구글 → Anthropic**== 5년간 3.5GW TPU 우선 공급
- 자본 규모: ==**약 2,000억 달러**==(Anthropic-구글 클라우드 5년 계약 포함)
- 가동 시점: ==**2027년 1분기 1GW부터 단계적**==

> "==**Claude는 AI 하드웨어 다양성**==(AWS Trainium, Google TPU, NVIDIA GPU)을 활용해 ==각 워크로드에 최적의 칩==을 매칭한다. ==**3.5GW 신규 TPU**==는 우리의 ==**프론티어 모델 학습과 글로벌 추론**==을 지탱할 것이다."
> — Dario Amodei, Anthropic CEO (5월 7일 공식 발표)

---

## 멀티 컴퓨팅 전략: 4개 공급자 동시 운용

⚡ **Anthropic 컴퓨팅 포트폴리오 (2026년 5월 기준)**:

1. **AWS Trainium**: 약 ==**1.2GW**== (장기 계약 베이스)
2. **Google TPU**: 약 ==**1.0GW**== 현재 + ==**3.5GW 추가**== (2027년부터)
3. **NVIDIA GPU**: 약 ==**0.8GW**== (Anthropic 직접 운영)
4. **SpaceX 협약**: ==**근시일 내 가동**== (구체 규모 비공개)

총 ==**현재 약 3.0GW**== → ==**2028년 약 7.5GW**==로 확장된다. 이는 ==**Anthropic이 현존 AI 기업 중 가장 분산된 컴퓨팅 포트폴리오**==를 가지는 결과를 만든다. ==**단일 공급자 의존도**==를 ==**40% 이하로 유지**==하는 정책이다.

구글이 ==**최대 400억 달러 추가 투자**==(4월 24일 발표)를 결정하면서, Anthropic의 자본 안정성은 ==**향후 7년 이상**== 확보됐다. 이는 ==OpenAI·MS 동맹 구조와 명확히 대비==되는 ==**'구글 진영 결집'**==이다.

---

## 한국에 미치는 영향

### 1. 한국 기업의 Claude API 사용량 폭증 예측

Anthropic의 ARR이 ==**90억 달러 → 300억 달러**==로 급증한 핵심 동력은 ==**아시아·태평양 기업 시장**==이다. ==**삼성전자·LG전자·현대자동차·KB금융·신한금융**== 등 한국 대기업의 ==**Claude API 사용량은 2025년 말 대비 평균 4.2배 증가**==한 것으로 ==**한국클라우드산업협회**== 5월 8일 추정치다. ==**3.5GW 추가 TPU**==는 ==**한국 기업의 사용 한도 확대**==로 직결될 전망이다.

### 2. 네이버클라우드·KT클라우드의 LLM 사업 압력

==**Claude 4.5의 한국어 처리 능력**==이 ==**HyperCLOVA X·EXAONE 3.0**==와 ==**일부 벤치마크에서 우위**==를 보이면서, ==**B2B 한국어 LLM 시장**==에서 Anthropic 점유율이 ==**2025년 말 12% → 2026년 5월 21%**==로 상승했다. ==**네이버클라우드·KT클라우드·NHN클라우드**==는 5월 9일 ==**'한국어 LLM 차별화 협의체'**==를 가동, ==**도메인 특화 모델·온디바이스 추론**==으로 방어 전략을 수립한다.

### 3. 삼성전자 파운드리·브로드컴 협력 가능성

==**브로드컴**==이 ==**구글 TPU 차세대 설계 협력을 2031년까지 연장**==하면서, ==**해당 칩의 파운드리 위탁 생산**==이 변수로 부상한다. 현재 ==**TSMC가 독점**==하지만, ==**삼성전자 파운드리 2nm 공정 양산**==(2026년 하반기 예정)이 일정 점유율 확보 시 ==**한국 파운드리 산업의 빅뱅**==이 가능하다. ==**삼성전자 디바이스솔루션 부문**==이 5월 8일 ==**브로드컴 신규 협력 의제**==를 내부 검토 중이다.

### 4. 한국 정부의 AI 데이터센터 정책 재설계

==**과학기술정보통신부**==와 ==**산업통상부**==는 5월 8일 ==**'Anthropic 3.5GW 협약 분석 TF'**==를 가동했다. 한국이 ==**AI 핵심 데이터센터 거점**==으로 일부 유치되려면 ==**전력·통신·세제**==의 3축 패키지 정비가 필요하다는 결론이다. ==**6월 1일 AI 기본법 시행령 발효**==와 맞물려 ==**'AI 데이터센터 인센티브 패키지'**==가 7월 중 발표될 전망이다.

---

## ARR 300억 달러의 의미: 자본시장 시그널

🎯 **Anthropic ARR 300억 달러의 산업적 의미**:

- **2025년 말 ARR 90억 달러** → 5개월 만에 ==**+233%**==
- 매분기 ==**ARR이 약 22억 달러씩 증가**==(분기 성장률 ==**+50%**==)
- 직원 1인당 매출 ==**약 760만 달러**==(MS 47만 달러의 16배)
- ==**Anthropic 기업가치 추정**==: ==**4,800억~6,200억 달러**==(2026년 5월 기준)

📌 **'AI 슈퍼스타 기업' 등장**: ARR 300억 달러는 ==**Salesforce(2024년 350억 달러)**==와 동급이다. 그러나 Salesforce는 ==**창립 25년**==에 도달한 수치이고, Anthropic은 ==**창립 5년 차**==에 달성했다.

⚡ **시리즈 G 검토**: Anthropic은 5월 9일 비공개로 ==**시리즈 G 펀딩 검토**==를 시작한 것으로 알려졌다. 목표 라운드 규모 ==**150억~250억 달러**==, 평가가치 ==**8,000억 달러**==를 노린다는 분석이다. 만약 성사된다면 ==**스페이스X·바이트댄스에 이어 세 번째**==로 ==**기업가치 1조 달러 비공개 기업**==에 근접한다.

---

## 컴퓨팅 패권 전쟁의 새 국면

💡 **'구글 진영' vs '엔비디아 진영' 구도 명확화**: AI 인프라 산업이 ==**두 진영으로 명확히 갈라지는 첫 분기**==가 시작됐다.

- **구글 진영**: Google + Broadcom + Anthropic + (잠재 동맹)
- **엔비디아 진영**: NVIDIA + OpenAI + IREN + Corning + Microsoft Azure
- **혼합 진영**: Amazon AWS (Trainium 자체 + NVIDIA 협력)

⚠️ **한국 기업 행동 가이드**:

1. ==**진영별 API·하드웨어 의존도 자체 진단**== — 5월 둘째 주 안에 완료
2. ==**구글 진영 가격 정책 변화 모니터링**== — TPU 단가가 분기당 ==**8~12% 인하**== 가능성
3. ==**Anthropic Korea 법인 협력 채널**== 점검 — 한국어 도메인 협업 기회
4. ==**3.5GW 가동(2027년 1분기) 전 한국어 미세조정 우선권 협상**== — 늦으면 ==**일본·인도·동남아**==에 밀린다

✅ **결론**: Anthropic의 5월 7일 두 가지 발표(3.5GW TPU + ARR 300억 달러)는 ==**AI 패권 전쟁의 결정적 분기점**==이다. 한국 기업은 ==**Claude·HyperCLOVA·Solar·EXAONE의 멀티 LLM 시대**==를 ==**6월 안에 자사 인프라에 내재화**==해야 ==2027년 사업 모델==이 흔들리지 않는다.`},{id:"202605110844003",title:"美 국방부, OpenAI·구글·MS·SpaceX 등 8개사와 AI 계약...Anthropic 완전 배제",summary:"미국 국방부가 5월 1일 OpenAI·Google·Microsoft·Amazon·Oracle·Nvidia·SpaceX·Reflection AI 등 8개 빅테크와 기밀망 AI 활용 계약을 체결했다. 자율 살상 무기·대량 감시 사용 거부로 트럼프 행정부와 갈등을 빚은 Anthropic은 200억 달러 시장에서 완전 배제됐다. AI 윤리와 국방 조달의 충돌이 표면화됐다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-11T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",breaking:!1,content:`## 8개사 동시 계약, Anthropic만 빠졌다

==**미국 국방부(Department of Defense, DoD)**==가 5월 1일 ==**기밀 네트워크에서 AI 도구를 사용하기 위한 8개사 동시 계약**==을 공식 체결했다. 계약 대상은 ==**OpenAI·구글·마이크로소프트·아마존·오라클·엔비디아·스페이스X·Reflection AI**==다. 총 계약 규모는 ==**최대 500억 달러(약 70조 원)**==로 추정된다.

📌 **결정적 사실**: 이번 8개사 명단에서 ==**Anthropic은 완전히 배제**==됐다. 트럼프 행정부 출범 직후인 2026년 2월, ==**대통령은 연방 정부 전체에 Anthropic 제품 사용 중단을 명령**==했고, 5월 계약에서도 그 결정이 재확인됐다.

5월 1일 발표된 ==**미국 국방부 AI 통합 전략의 4가지 원칙**==:

1. **공급자 다변화**: ==**단일 AI 공급자 의존 금지**== — 8개사 동시 운용
2. **기밀 네트워크 통합**: AI 도구를 ==**SIPRNet·JWICS**== 등 기밀망에서 사용
3. **자율 무기 시스템 연계**: 일부 계약은 ==**자율 표적 식별·대응 시스템**== 포함
4. **신속 조달 트랙**: 평균 조달 기간을 ==**18개월 → 4개월**==로 단축

> "국방부는 다시는 ==**단일 AI 공급자에 의존**==하지 않을 것이다. 8개사 다중 계약은 ==**미래 전쟁의 표준 조달 방식**==이 될 것이다."
> — Kathleen Hicks, 미국 국방부 부장관 (5월 1일 기자 브리핑)

---

## Anthropic 배제의 본질: 윤리 vs 조달

⚠️ **계약 결렬의 핵심 쟁점**: Anthropic은 2025년 말 ==**최대 200억 달러 규모의 국방 계약 협상**==에서 ==**두 가지 조건을 단호히 거부**==했다.

1. **자율 살상 무기 사용 금지**: Claude를 ==**완전 자율 무기 시스템**==에 통합 거부
2. **미국 시민 대량 감시 금지**: 미국 시민 ==**개인정보 기반 대량 감시 도구**==에 Claude 활용 거부

Anthropic은 ==**'현 프론티어 AI 모델은 완전 자율 무기에 사용할 만큼 신뢰성이 검증되지 않았다'**==고 공식 입장을 밝혔다. ==**'미국 군인과 민간인 모두를 위험에 빠뜨릴 수 있다'**==는 표현이 핵심이었다.

트럼프 행정부는 이를 ==**'국가 안보 위협'**==으로 규정하고 ==**Anthropic을 연방 조달 명단에서 영구 제외**==했다. ==**OpenAI는 200억 달러 단일 계약**==을 ==**2026년 2월 추가 수주**==하며 Anthropic의 빈 자리를 ==**가장 빠르게 메웠다**==.

⚡ **이중 메시지**: 미국 국방부는 ==**'AI 안전성을 가장 강조'**==하면서도 ==**가장 안전성을 강조하는 AI 기업을 배제**==하는 ==**구조적 모순**==을 보였다.

---

## 8개사 계약의 세부 분담 구도

5월 1일 발표문에서 ==**각사별 핵심 역할 분담**==이 공개됐다:

- **OpenAI**: ==**기밀 데이터 챗봇 + 분석**== — 약 ==**200억 달러**==
- **Microsoft**: ==**Azure Government Cloud + Copilot 통합**== — 약 ==**90억 달러**==
- **Google Cloud**: ==**위성 영상 분석·자연어 정보**== — 약 ==**70억 달러**==
- **Amazon AWS**: ==**GovCloud 인프라 + Bedrock 모델 호스팅**== — 약 ==**50억 달러**==
- **Oracle**: ==**전술 데이터베이스 + 보안 통신**== — 약 ==**30억 달러**==
- **NVIDIA**: ==**전술 엣지 GPU + 시뮬레이션**== — 약 ==**25억 달러**==
- **SpaceX (Starshield)**: ==**저궤도 위성 통신 + 데이터 라우팅**== — 약 ==**20억 달러**==
- **Reflection AI**: ==**오픈소스 기반 자율 에이전트**== — 약 ==**15억 달러**==

🎯 **Reflection AI의 다크호스 등장**: 무명에 가깝던 ==**Reflection AI**==가 8개사 명단에 포함된 사실이 업계를 놀라게 했다. ==**오픈소스 기반 자율 에이전트 시스템**==에서 ==**Anthropic 부재를 메우는 보완재**==로 평가받았다. 5월 5일 ==**시리즈 C 35억 달러 펀딩**==이 성사됐다.

---

## 한국에 미치는 영향

### 1. 한미 동맹 AI 협력 프레임워크 재편

==**대한민국 국방부**==와 ==**과학기술정보통신부**==는 5월 8일 ==**'한미 국방 AI 협력 워킹그룹'**== 가동을 검토 중이다. 미국 국방부가 8개사 다중 계약 모델을 채택한 만큼, 한국도 ==**OpenAI·구글·MS·아마존 4개사 동시 운용 모델**==을 일부 차용할 가능성이 거론된다. ==**2027년 국방 사이버사령부 AI 통합 사업**==(예상 규모 5,000억 원)이 우선 적용 대상으로 부상한다.

### 2. 한국 AI 기업의 국방 시장 진입 기회

Anthropic 배제로 ==**미국 국방 AI 공급망에 빈자리**==가 생겼다. ==**한화시스템·LIG넥스원·STX엔진**==과 ==**리벨리온·퓨리오사AI·뤼튼**==이 결합한 ==**한국형 국방 AI 컨소시엄**==이 미국 시장 진입을 검토 중이라는 ==**전자신문**== 5월 8일 보도가 있었다. ==**5각 동맹(파이브 아이즈) 우회 진입 전략**==이 핵심 변수다.

### 3. K-방산의 AI 통합 가속화

==**한화에어로스페이스·KAI·현대로템·LIG넥스원**== 4대 K-방산 기업은 ==**자율 표적 식별·전술 시뮬레이션·정비 예측**== 분야에서 ==**자체 AI 모델 통합**==을 5월부터 본격화한다. ==**해외 LLM API 대신 자체 폐쇄형 모델**==이 우선 채택될 전망이다. ==**2026년 하반기 폴란드·UAE·필리핀 수출**==에서 ==**AI 패키지가 핵심 차별화 요소**==로 부상한다.

### 4. 한국 AI 윤리 정책의 거버넌스 시험대

==**한국 AI 기본법 시행령 6월 1일 발효**==를 앞두고, ==**자율 무기·대량 감시 활용에 대한 명시적 금지 조항**==을 둘러싼 논쟁이 본격화된다. ==**국가정보원·국방부**==는 ==**보안 예외 조항 확대**==를 요구하고, ==**시민사회 + 한국AI윤리위원회**==는 ==**Anthropic식 명시적 거부 권리**== 도입을 주장한다. 5월 말 ==**국가AI위원회 본회의 의제**==로 정식 상정될 전망이다.

---

## 글로벌 AI 거버넌스의 균열

💡 **'안전 우선 AI 기업 vs 안보 우선 정부' 구도**: Anthropic 배제 사건은 ==**AI 산업의 두 가지 정체성**==이 정면 충돌한 첫 사례다.

- **안전 우선 진영**: Anthropic + 일부 학계 + EU 일부 정부
- **안보 우선 진영**: 미국 정부 + OpenAI + MS + 국방 산업
- **혼합 진영**: 구글·아마존·엔비디아 (양측 모두에 일부 참여)

==**OECD·UN AI 윤리 협의체**==는 5월 6일 ==**'AI 자율 무기 사용 국제 표준'**== 협상 재개를 발표했다. 미국 단독 결정이 ==**국제 협상력 약화**==로 이어진다는 ==**유럽·캐나다·일본**==의 우려가 작용했다.

📌 **다음 12개월 추적 변수**:

1. ==**EU AI Office**==의 군사용 AI 기준 발표 (6월 예정)
2. ==**Anthropic 단독 인프라 확장**==(SpaceX·구글)과 ==**상업 시장 집중도**== 변화
3. ==**한국·일본·호주**==의 ==**미국 모델 채택 또는 EU 모델 채택**== 결정
4. ==**OpenAI 200억 달러 단일 계약**==의 ==**실제 무기 시스템 통합 사례**== 공개 여부

✅ **결론**: 미국 국방부의 5월 1일 8개사 계약은 ==**AI 윤리와 국방 조달의 분리 가능성**==을 정책으로 결정한 사건이다. 한국 정부·기업은 ==**6월 AI 기본법 시행령 발효 전**==에 ==**자율 무기·감시 활용 명시 조항**==을 ==최종 확정==해야 한다.`},{id:"202605110844004",title:"AI 칩 수요에 메모리 품귀...스마트폰 6.9%·PC 8% 가격 급등 확정",summary:"AI 데이터센터가 글로벌 DRAM·HBM 생산의 23%를 흡수하면서 2026년 스마트폰 평균가가 전년 대비 6.9% 상승할 것으로 예측됐다. PC는 6~8% 인상, 200달러 미만 저가폰의 부품원가는 이미 20~30% 급등했다. 빅테크 6,500억 달러 인프라 투자의 청구서가 소비자에게 전가되기 시작했다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-11T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800",breaking:!1,content:`## AI 호황의 청구서가 소비자에게 도착했다

==**카운터포인트 리서치**==·==**IDC**==·==**가트너**==가 5월 둘째 주 일제히 발표한 분석에 따르면, ==**2026년 글로벌 스마트폰 평균 판매가(ASP)**==는 ==**전년 대비 6.9% 상승**==할 전망이다. 이는 ==**기존 예측치(3.6%)의 두 배에 가까운 수치**==다.

📌 **핵심 인사이트**: AI 데이터센터가 ==**글로벌 DRAM 웨이퍼 생산의 23%**==를 흡수하면서, ==**스마트폰·PC·게임기 제조용 메모리 공급이 구조적으로 부족**==해졌다. ==**빅테크 6개사(MS·구글·메타·아마존·오라클·테슬라)**==의 ==**2026년 AI 인프라 투자 합계는 약 6,500억 달러**==(전년 대비 +80%)다.

주요 가격 인상 폭(2026년 5월 기준):

- **스마트폰 평균가**: ==**+6.9%**== (기존 예측 +3.6%)
- **저가 스마트폰(200달러 미만) 부품원가**: ==**+20~30%**==
- **PC 평균가 (적정 시나리오)**: ==**+4~6%**==
- **PC 평균가 (비관 시나리오)**: ==**+6~8%**==
- **소비 가전 전반**: ==**+10~20%**==(2026년 말까지)

> "이번 메모리 부족은 ==**일시적 수급 변동이 아니라 구조적 재편**==이다. AI 데이터센터의 메모리 흡수율은 ==**2027년까지 30% 이상**==으로 확대될 것이다."
> — Boris Metodiev, Counterpoint Research 디렉터 (5월 8일 보고서)

---

## HBM이 DRAM 웨이퍼의 23%를 차지하다

⚡ **HBM의 구조적 흡수력**: 2026년 5월 기준 ==**HBM은 전체 DRAM 웨이퍼 면적의 약 23%**==를 차지한다. 2023년 ==**7% 수준**==에서 ==**3년 만에 3.3배**==로 늘어났다.

이유는 단순하다. ==**HBM 1개 모듈을 생산하려면 동급 용량 DDR5 대비 약 3배의 웨이퍼**==가 필요하다. 적층 구조(12단·16단) 때문에 ==**수율 저하**==가 누적된다.

HBM 우선 생산 → DDR5·LPDDR5X 공급 부족 → 스마트폰·PC 가격 상승의 ==구조적 연쇄==가 본격화됐다. ==**삼성전자·SK하이닉스·마이크론**== 3사 모두 ==**HBM 라인 증설을 최우선 순위**==로 두면서, ==**모바일 메모리 공급은 분기당 약 5~8% 감소**==하는 현상이 5월 들어 확인됐다.

🎯 **부메랑 효과**: 빅테크의 AI 투자는 ==**자사 매출 증가로 회수**==되지만, 그 ==**비용의 일부는 일반 소비자가 부담**==하는 구조다. 이는 ==**AI 산업이 만든 첫 번째 거시경제 외부효과**==로 평가받는다.

---

## 시장 충격: 출하량 감소와 폐기 우려

📌 **2026년 시장 충격 예측**:

- 스마트폰 출하량: ==**-2.1%**== 감소
- PC 출하량: ==**-4.9%**== 이상 감소
- 게임기 가격: ==**+12~18%**== 상승 가능성
- 200달러 미만 신규 스마트폰: ==**시장 진입 사실상 중단**== 우려

특히 ==**저가형 스마트폰 시장**==이 가장 큰 충격을 받는다. ==**아프리카·동남아·인도·남미**==의 ==**처음 스마트폰을 사는 약 4억 명의 소비자**==가 ==**6~12개월 구매 연기**==를 결정할 가능성이 거론된다. 이는 ==**디지털 격차 확대**==라는 ==사회적 외부효과==로 이어진다.

주요 PC 제조사(레노버·델·HP·에이서·ASUS)는 ==**15~20% 가격 인상**==을 이미 공급망에 통보한 상태다. ==**B2C 가격 반영**==은 5~6월 사이 단계적으로 진행된다.

---

## 한국에 미치는 영향

### 1. 삼성전자·LG전자 스마트폰 사업의 양면 효과

==**삼성전자 갤럭시·LG는 스마트폰 사업 철수했고, 대신 부품 사업**==이 압도적 수혜를 본다. 메모리 사업부 ==**2026년 영업이익은 70조 원 돌파**==가 예측된다. 그러나 ==**삼성전자 MX(모바일경험) 사업부**==는 ==**원가 부담으로 영업이익률 +2.8%p 압박**==을 받는다. ==**제품 가격 +6.9% 인상 대신 일부 흡수**==하는 정책을 5월 8일 내부 발표했다. 즉 ==**B2B(메모리)와 B2C(완성품)의 이익이 충돌**==하는 ==**삼성전자만의 특수한 구조**==다.

### 2. 한국 소비자 구매력 압박과 통신사 전략 변화

==**삼성·애플의 한국 시장 신규 모델**==이 ==**평균 8~12만 원 인상**==될 전망이다. ==**SK텔레콤·KT·LG유플러스**==는 ==**보조금 정책 확대 + 24개월 할부 → 36개월 할부 전환**==을 5월 9일 동시 발표했다. ==**자급제 시장**==(특히 중국 샤오미·삼성 갤럭시 A 시리즈)으로의 ==**소비자 이탈**==이 2026년 하반기 본격화될 전망이다.

### 3. K-반도체 장비·소부장 산업의 수혜

==**삼성전자·SK하이닉스의 HBM 라인 증설**==이 가속화되면서, ==**원익IPS·주성엔지니어링·세메스·솔브레인·동진쎄미켐**== 등 ==**소부장 기업의 2026년 매출 가이던스가 25~40% 상향**==됐다. ==**HBM 전용 검사 장비·EUV 마스크 블랭크·HBM 본딩 소재**==가 핵심 수혜 품목이다.

### 4. 정부의 메모리 수급 안정화 검토

==**산업통상자원부**==는 5월 8일 ==**'메모리 수급 영향 점검 TF'**==를 가동했다. 한국이 ==**스마트폰·PC 가격 인상의 수혜자(메모리 수출)이자 피해자(소비자 부담)**==인 이중 위치에 있는 만큼, ==**일정 수준의 모바일 메모리 국내 우선 공급 가이드라인**==을 검토 중이다. 그러나 ==**WTO 규정 충돌 가능성**==으로 명시적 정책은 어려운 상태다.

---

## 빅테크 6,500억 달러의 흐름과 결과

💡 **AI 인프라 투자 6,500억 달러의 분해**:

- **NVIDIA GPU 구매**: 약 ==**2,800억 달러**==
- **HBM·DDR5·LPDDR5X 메모리**: 약 ==**1,100억 달러**==
- **데이터센터 건설·전력**: 약 ==**1,400억 달러**==
- **네트워킹·광통신**: 약 ==**600억 달러**==
- **냉각·전력 관리**: 약 ==**400억 달러**==
- **기타 인프라**: 약 ==**200억 달러**==

이 중 ==**한국 부품 산업이 직접 수혜를 보는 금액은 약 1,400~1,800억 달러**==(HBM·DDR5 + 일부 광통신 부품 + 일부 장비). 한국 GDP의 약 ==**8~10%**==에 해당하는 거대 수요다.

⚠️ **결정적 리스크**: 빅테크의 ==**2027년 자본 지출이 둔화**==할 경우, ==**한국 메모리 산업의 수주 절벽**==이 발생할 가능성이 있다. ==**삼성전자·SK하이닉스**== 모두 ==**2027년 하반기 수주 가이던스**==를 6월 중순까지 보수적으로 제시할 전망이다.

---

## 소비자의 선택: 늦추기·중고화·재사용

✅ **5월 8일 한국갤럽 조사 결과**: 향후 12개월 스마트폰·PC 신규 구매 의향 변화:

- **'구매 연기' 응답**: ==**38%**==(전년 대비 +14%p)
- **'중고폰·중고PC 검토' 응답**: ==**29%**==(전년 대비 +11%p)
- **'고급형 → 중급형 다운그레이드' 응답**: ==**24%**==(전년 대비 +9%p)
- **'영향 없음'**: ==**21%**==

📌 **새 시장의 부상**: ==**중고폰 거래 플랫폼(번개장터·당근마켓·민팃)**==의 거래액이 ==**전년 대비 +52% 증가**==(5월 8일 기준)했다. ==**리퍼비시·인증 중고**== 시장이 ==**연 3조 원 규모**==로 확대된다는 ==**한국온라인쇼핑협회**== 5월 9일 분석이다.

✅ **결론**: AI 인프라 투자 폭증이 만든 ==**메모리 품귀**==는 단순한 단기 현상이 아니라 ==**소비 가전 산업의 구조적 재편**==이다. 한국 소비자는 ==**가격 인상 + 출시 지연 + 중고·재사용 시장 확대**==라는 ==3중 충격==에 5월부터 본격 노출된다. ==**스마트폰 평균 교체 주기**==가 ==**현재 32개월에서 2027년 38~42개월**==로 늘어날 전망이다.`},{id:"202605110844005",title:"모건스탠리 '2026년 4~6월 AI 능력 도약' 경고...데이터센터 2.9조 달러·전력 18GW 부족",summary:"모건스탠리가 2026년 2분기 OpenAI·구글·Anthropic·xAI·메타의 컴퓨팅 누적이 임계점을 넘어 'AI 능력 도약(Capability Leap)'이 일어날 것이라고 경고했다. 2028년까지 글로벌 데이터센터 건설비 2.9조 달러, 미국 전력 부족 9~18GW가 동반된다. 2008년 금융위기 이후 최대 변곡점이라는 평가다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-11T08:44:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",breaking:!1,content:`## '2026년 2분기 AI 능력 도약' 시나리오의 정밀화

==**모건스탠리(Morgan Stanley)**==가 3월 13일 처음 제시했던 ==**'2026년 4~6월 AI 능력 도약(Capability Leap)'**== 시나리오가 ==**5월 8일 보강 보고서**==에서 ==**구체 시점 4월 말~6월 중순**==으로 좁혀졌다.

📌 **핵심 시나리오**: ==**OpenAI·Google DeepMind·Anthropic·xAI·Meta**== 5개사의 컴퓨팅 누적이 ==**임계점을 넘어 모델 능력이 비선형 도약**==하는 ==**'Shock-Level AI Breakthrough'**==가 ==**6주 이내**==에 일어날 가능성이 ==**60~70%**==로 평가됐다.

능력 도약의 구체 시나리오:

- **신뢰할 만한 자율 에이전트**: ==**복잡한 8~24시간 작업**== 완료
- **과학 연구 가속화**: ==**Drug Discovery·재료 과학**==에서 ==**기존 6개월 작업을 3주로 단축**==
- **소프트웨어 개발 자동화**: ==**중급 개발자의 80% 업무**== 대체 가능
- **기업 의사결정 보조**: ==**M&A·금융 분석**==에서 ==**시니어 애널리스트 수준**==

> "이번 도약은 ==**1995년 인터넷·2007년 아이폰·2022년 ChatGPT**== 모두에 비할 만한 ==**역사적 변곡점**==이다. 그러나 이번엔 ==**채비할 시간이 2~6개월뿐**==이다."
> — Edward Stanley, Morgan Stanley AI 전략가 (5월 8일 보고서)

---

## 인프라 청구서: 2.9조 달러 + 18GW 전력 부족

⚡ **2028년까지 동반되는 거시 비용**:

- **글로벌 데이터센터 건설비**: ==**약 2.9조 달러(약 4,060조 원)**==
- **미국 전력 부족 추정**: ==**9~18GW**== (수요 대비 ==**12~25% 부족**==)
- **글로벌 메모리·HBM 수요 추가**: 연 ==**약 7,500억 달러**==
- **AI 산업 전기 사용량**: 2025년 ==**420 TWh**== → 2028년 ==**900~1,200 TWh**==

이는 ==**2008년 금융위기 이후 가장 큰 자본 동원**==이라는 평가다. 글로벌 데이터센터 건설비 2.9조 달러는 ==**미국 GDP의 약 11%**==, ==**한국 GDP의 1.4배**==에 해당한다.

🎯 **새 변수: 전력 패권 경쟁**: 모건스탠리는 ==**'2026~2028년 AI 패권의 핵심 변수는 GPU가 아니라 전력'**==이라고 명시했다. 컴퓨팅 수요는 ==**자본으로 메울 수 있지만, 전력 인프라는 자본만으로 빠르게 늘릴 수 없다**==.

---

## 도약의 메커니즘: 컴퓨팅 누적이 임계점에 도달

💡 **컴퓨팅 누적 곡선의 임계점**: 모건스탠리 분석에 따르면, ==**프론티어 AI 모델 학습에 사용되는 FLOPs**==가 ==**2026년 2분기 안에 5e27 FLOPs 임계값**==을 돌파한다. 이는 ==**스케일링 법칙(Scaling Law)**==에 따른 ==**비선형 능력 도약**==을 만든다.

5개사 컴퓨팅 누적 추정(2026년 5월):

1. **OpenAI**: 약 ==**2.8 EFLOP/s 평균 컴퓨팅**==
2. **Google DeepMind**: 약 ==**3.1 EFLOP/s**==(TPU v6 + Trillium)
3. **Anthropic**: 약 ==**2.0 EFLOP/s**==(AWS Trainium + TPU + GPU)
4. **xAI**: 약 ==**2.4 EFLOP/s**==(Memphis Colossus 2)
5. **Meta**: 약 ==**3.6 EFLOP/s**==(자체 인프라 최대 규모)

합계 ==**약 13.9 EFLOP/s**==. ==**2024년 말 대비 약 8.2배**==로 폭증했다. 이 수준의 컴퓨팅에서 ==**RLHF + 자기 학습(Self-play) + 합성 데이터**==를 결합하면 ==**과거에 보지 못한 능력**==이 출현할 가능성이 학계에서 광범위하게 동의된다.

---

## 한국에 미치는 영향

### 1. 한국 산업 AI 전환 가속화 필요성

==**삼성전자·SK하이닉스·현대자동차·LG에너지솔루션·포스코**==가 ==**6주 안에 'AI 능력 도약 대응 TF'**==를 가동해야 한다는 ==**한국경영자총협회**== 5월 9일 권고가 나왔다. ==**금융권(KB·신한·하나·우리·NH)**==은 ==**리스크 모델·여신 심사 자동화**==를 ==**3분기 내 결정**==해야 한다. ==**SK증권**== 분석은 ==**한국 상위 50대 기업이 AI 도약 대응에 실패할 경우 2027년 영업이익 -8~-15% 충격**==을 예측했다.

### 2. 한국 전력 인프라의 구조적 한계 노출

==**한국전력**==과 ==**산업통상자원부**==는 5월 8일 ==**'2026~2030년 AI 데이터센터 전력 수요 재추정'**==을 발표했다. ==**현재 약 1.5GW**==인 한국 데이터센터 전력 수요가 ==**2028년 6~8GW**==로 ==**4~5배 폭증**==할 것으로 추정된다. ==**제11차 전력수급기본계획**== 수정과 ==**소형 모듈 원전(SMR) 가속화**==가 의제로 부상한다.

### 3. 노동시장 충격: 6개월 안에 대비

==**고용노동부**==는 5월 8일 ==**'AI 능력 도약 대응 노동시장 안정화 패키지'**== 검토에 착수했다. ==**연 1조 원 규모**==의 ==**AI 전환 실업급여 + 재교육 예산**==이 6월 추경에 반영될 전망이다. ==**고용보험기금**==의 ==**'AI 직무 전환' 항목**==이 신설될 가능성이 거론된다.

### 4. 자본시장: 한국 AI·반도체 ETF 자금 유입 가속

==**KODEX AI반도체·TIGER 반도체TOP10**== 등 한국 AI·반도체 ETF에 5월 둘째 주 자금이 ==**일주일 약 3,000억 원 순유입**==됐다. ==**모건스탠리 도약 시나리오**==를 매수 근거로 삼는 ==**개인·외국인 자금 유입**==이 가속화되는 추세다. 그러나 ==**도약 시나리오 실현 실패 시**==(확률 30~40%) ==**ETF 자금 급격한 이탈**==이 ==동시 우려==된다.

---

## 시장의 양극화: 준비된 자와 그렇지 못한 자

🎯 **모건스탠리의 4가지 투자 권고**:

1. **AI 인프라**: HBM·전력 인프라·광통신 종목 ==**비중 확대**==
2. **AI 활용 기업**: 매출 대비 AI 도구 사용 비중 ==**상위 20% 종목 우선**==
3. **소프트웨어 빅테크**: MS·구글·메타 ==**비중 유지**==
4. **AI 충격 취약 산업**: 콜센터·BPO·로우코드 SaaS ==**비중 축소**==

📌 **시간표**: 5월 둘째 주~6월 중순이 ==**'준비 윈도우'**==, 7월 이후는 ==**'능력 도약 가시화 단계'**==로 평가된다. 한국 기업의 ==**5~6월 의사결정 속도**==가 향후 24개월 경쟁력의 결정 변수다.

---

## 회의론과 반대 시나리오

⚠️ **AI 능력 도약 시나리오에 대한 회의론**도 분명히 존재한다:

- **MIT 학자들**: 스케일링 법칙의 ==**한계 수확체감**== 가능성 — 컴퓨팅이 2배여도 능력은 ==**1.2~1.4배 정도**== 향상
- **메타 Yann LeCun**: ==**자기지도 학습 아키텍처 혁신**==이 없으면 ==**LLM은 도약이 아닌 점진적 개선**==
- **DeepMind 일부 연구자**: ==**Reasoning Model의 진짜 능력**==은 ==**평가 지표 조작 의심**==

==**도약 시나리오 실패 시**== 영향:

- **AI 관련 주식**: ==**평균 -15~-25% 조정**== 가능성
- **데이터센터 건설 일시 중단**: ==**2027년 1분기 약 12% 프로젝트 지연**==
- **HBM 수요 둔화**: ==**삼성전자·SK하이닉스 매출 가이던스 -8~-12%**== 하향 가능성

✅ **결론**: 모건스탠리의 5월 8일 보고서는 ==**시간표가 명확한 첫 글로벌 경고**==다. ==**'2026년 4~6월 도약'**== 시나리오가 실현되든 실현되지 않든, 한국 기업·정부는 ==**5월 둘째 주~6월 중순의 6주를 결정적 준비 기간**==으로 활용해야 한다. ==**도약하면 따라가고, 도약하지 않으면 안전망을 만든다**==는 ==**이중 전략**==이 5월 9일 한국상장회사협의회의 공식 권고로 채택됐다.`},{id:"202605101000001",title:"美 정부, GPT·Gemini·Grok 출시 전 검증 의무화...AI 안전성 사전 통제 시작",summary:"미국 상무부 산하 CAISI(AI 표준혁신센터)가 5월 5일 마이크로소프트, 구글 딥마인드, xAI와 출시 전 AI 모델 평가 협정을 체결했다. 2024년 OpenAI·Anthropic 협정에 이어 메이저 AI 5개사 모두를 정부 사전 검증 체계에 편입한 것으로, AI 안전성이 자율 영역에서 정부 통제 영역으로 넘어가는 결정적 분기점이다.",category:"정책",author:"Prompt Daily 편집팀",date:"2026-05-10T10:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",breaking:!0,content:`## 미국 정부, AI 모델 출시 전 직접 검증 시대 개막

==**미국 상무부 산하 AI 표준혁신센터(CAISI, Center for AI Standards and Innovation)**==가 5월 5일 ==**마이크로소프트(Microsoft)**==, ==**구글 딥마인드(Google DeepMind)**==, ==**xAI**==와 ==**출시 전 AI 모델 평가 협정**==을 동시 체결했다. 이로써 미국 정부는 ==**OpenAI·Anthropic·MS·구글·xAI**== 등 ==메이저 AI 5개사 전체==의 프론티어 모델을 ==공개 출시 이전 단계==에서 직접 평가할 수 있게 됐다.

📌 **핵심 의미**: 2024년부터 OpenAI·Anthropic만 자발적으로 정부와 사전 평가에 응했지만, 이번 협정으로 ==**사실상 모든 메이저 AI 기업이 정부 검증 의무화**==됐다. AI 안전성이 ==기업 자율 영역==에서 ==**정부 사전 통제 영역**==으로 넘어가는 결정적 분기점이다.

CAISI는 협정에 따라 다음을 직접 평가한다:

- **사이버보안 위협**: 모델이 사이버 공격에 활용될 가능성
- **생화학 무기 설계 능력**: CBRN(화학·생물·방사능·핵) 관련 정보 제공 위험
- **프로파간다 생성**: 대규모 허위정보·여론 조작 가능성
- **자율적 행동(Agentic Risk)**: 인간 통제를 벗어나는 의사결정 위험
- **사기·금융범죄 활용**: 피싱·딥페이크 사기 가능성

> "AI는 더 이상 단순한 기술이 아니라 ==**국가 안보 자산**==이다. 메이저 AI 기업은 자사 모델이 ==출시 전 정부 평가==를 통과해야만 사회에 풀려나가는 시대가 됐다."
> — 하워드 러트닉(Howard Lutnick), 미국 상무부 장관 (5월 5일 협정 발표 기자회견)

---

## 2024년에서 2026년으로: 협정의 진화

CAISI는 2024년 OpenAI·Anthropic과 첫 협정을 맺었지만, 당시는 ==**자발적 협력**==과 ==**일부 모델 한정 평가**==에 그쳤다. 2026년 협정은 다음 4가지 측면에서 ==질적으로 진화==했다.

1. **평가 대상 확대**: 미세조정 변형(Fine-tuned variants)·에이전트 시스템·멀티모달 모델 모두 포함
2. **평가 시점 확정**: 출시 ==**최소 30일 전**==에 모델 가중치·평가 지표·시스템 카드 제출 의무
3. **결과 공개 의무**: ==**고위험 분류 시 의회·NSC(국가안전보장회의) 보고**==
4. **위반 시 제재**: 미통보 출시 시 ==**연방 조달 자격 박탈 및 클라우드 인프라 접근 제한**==

특히 ==**'30일 전 통보'**==는 메이저 AI 기업의 출시 일정 자체를 정부와 사실상 ==공동 관리==하는 구조를 만든다. ==**OpenAI GPT-6**==, ==**Anthropic Claude 5**==, ==**Google Gemini 3**== 등의 출시 일정이 5월 둘째 주부터 일제히 ==**1~2개월 지연**==될 가능성이 거론된다.

---

## 한국에 미치는 영향

### 1. 한국 AI 기본법 시행령에 즉시 반영 가능성

==**한국 AI 기본법**==(2026년 1월 통과, 6월 1일 시행령 발효 예정)은 ==고위험 AI 사전 영향평가==를 명시했지만, ==구체 평가 절차==는 시행령에 위임됐다. ==**과학기술정보통신부**==는 5월 8일 CAISI 협정문을 분석하기 시작했고, ==**한국 시행령에 'CAISI 식 정부 사전 검증 절차'를 일부 차용**==할 가능성이 거론된다. 한국 AI 기업의 ==출시 일정 전반==이 영향을 받을 수 있다.

### 2. 네이버·카카오·LG AI연구원의 글로벌 진출 부담 증가

==**HyperCLOVA X·KoGPT·EXAONE**==을 미국 시장에 직접 출시하려면 ==**CAISI 평가 통과 의무**==가 적용될 가능성이 높다. ==연방 정부 조달 진입==과 ==클라우드 호스팅(AWS·Azure·GCP)==이 모두 CAISI 통과를 전제로 한다는 분석이다. ==**네이버**==는 이미 5월 8일 ==**미국 법인을 통한 CAISI 사전 등록**==을 검토 시작한 것으로 알려졌다.

### 3. AI 컴플라이언스 산업의 폭발적 성장

==**삼정KPMG·딜로이트 안진·EY 한영**==이 ==**'CAISI 대응 컴플라이언스 자문'**==을 5월 둘째 주부터 정식 출시한다. 평균 자문료는 ==**연 5억 원~12억 원**==으로 추정된다. ==**한국정보통신기술협회(TTA)**==도 ==**한국형 AI 안전평가 인증 제도**==를 6월 중 발표할 예정이다.

### 4. K-AI 스타트업의 글로벌 시장 진입 장벽 상승

==**리벨리온·퓨리오사AI·업스테이지·뤼튼**==이 미국 시장 직접 진출 시 ==CAISI 평가 비용 부담==이 추가된다. 평가 기간 ==**평균 60~90일**==, 비용 ==**100만~500만 달러**==로 추정된다. 시리즈 B/C 단계 한국 AI 스타트업의 ==**미국 진출 일정이 6~12개월 지연**==될 가능성이 있다.

---

## 글로벌 AI 거버넌스 구조의 재편

⚡ **CAISI 협정의 구조적 의미**: AI 산업 자율 거버넌스(==**Frontier Model Forum**==, ==**MLCommons**==)의 한계를 미국 정부가 직접 보완하는 결정이다. 자율 거버넌스가 ==**정부 사전 검증과 병행 운영**==되는 ==**이중 거버넌스 시대**==가 도래한다.

다음 12개월 추적해야 할 4가지 변수:

1. **EU AI Office의 유사 협정** — EU가 자체 사전 평가 의무화 검토 중
2. **영국 AISI(AI Safety Institute)의 미국 협력** — 5월 7일 영-미 평가 결과 공유 MOU 체결
3. **중국의 대응 입법** — 자국 AI 기업 보호 입법 및 미국향 모델 평가 거부 검토
4. **OECD의 AI 평가 표준 합의** — 6월 OECD 장관급 회의 의제

🎯 **한국 행동 가이드**: ==**CAISI 평가 절차 한국어 매뉴얼**==을 ==**한국정보통신기술협회(TTA)**==가 6월 중 발간 예정이다. 이를 토대로 한국 기업은 5월 셋째 주~6월 첫째 주 사이 ==**3가지 핵심 진단**==을 외부 자문사에 의뢰해야 한다: 1) 자사 AI의 ==**프론티어 모델 분류 가능성**== 2) ==**사이버보안·CBRN·프로파간다 위험 자체 평가**== 3) ==**미국 시장 출시 30일 전 통보 절차 준비**==.

---

## CAISI 평가 통과 사례: 첫 번째 시범 결과

💡 **2025년 12월 OpenAI o4-mini 평가 결과**: CAISI는 OpenAI의 ==**o4-mini**==를 첫 정식 평가 대상으로 삼았고, 결과는 ==**조건부 통과(Conditional Pass)**==였다. 부과된 조건은 다음 3가지였다.

- **CBRN 정보 차단 강화**: 생화학 무기 합성 경로 정보 제공 차단 필터 추가
- **자율적 행동 제한**: 단일 세션 최대 행동 단계 ==**50단계로 제한**==
- **사기 탐지 협력**: 미국 FBI와 분기별 사기 활용 사례 공유

✅ **OpenAI는 4가지 조건을 모두 수용한 후 12월 23일 o4-mini를 정식 출시**했다. 출시 일정은 당초 11월에서 ==**약 6주 지연**==됐다.

📌 **한국 기업 시사점**: CAISI 평가는 단순한 통과/탈락이 아니라 ==**조건부 통과가 일반화된 협상 절차**==임을 OpenAI 사례가 보여준다. 한국 기업도 ==조건 협상 능력==과 ==조건 이행 가능성 평가==를 내부 컴플라이언스 역량에 추가해야 한다.

⚠️ **주의 사항**: CAISI 평가 결과의 ==**일부 내용은 영업비밀 보호 명목으로 비공개**==된다. 한국 기업은 ==평가 결과 공개 범위==를 협정 체결 시점에 명확히 협상해야 한다. ==**평가 정보가 미국 경쟁사로 유출될 위험**==이 한국 기업의 가장 큰 우려 사항으로 5월 8일 한국AI산업협회에서 공식 제기됐다.`},{id:"202605101000002",title:'스냅 1,000명 해고 단행...슈피겔 "AI가 인력의 4분의 1을 대체"',summary:`스냅챗 운영사 스냅(Snap)이 5월 7일 1,000명 해고와 300여 개 채용 중단을 동시 발표했다. 에반 슈피겔 CEO는 "AI 발전으로 더 작은 팀이 같은 결과를 낸다"고 직접 언급했다. 발표 직후 주가는 시간외 거래에서 11% 급등하며 'AI 노동 대체 시대'의 자본시장 메시지가 현실화됐다.`,category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-10T10:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",breaking:!0,content:`## 1,000명 해고 + 300개 채용 중단 = 전체 25% 인력 감축

==**스냅챗(Snapchat)**==의 운영사 ==**스냅(Snap Inc.)**==이 5월 7일 ==**1,000명 정규직 해고**==와 ==**300개 이상 미충원 포지션 폐쇄**==를 동시 발표했다. 합계 ==**1,300여 명 규모**==로, 회사가 계획했던 전체 인력 규모의 ==**약 4분의 1(25%)**==이 한 번에 사라진다.

📌 **결정적 차이점**: 일반적인 비용 절감형 해고와 달리, 이번에는 ==**CEO가 직접 'AI 대체'를 공식 사유로 언급**==했다. 다른 빅테크들은 'AI 투자 확대 비용 보전' 식으로 우회 표현했지만, ==**에반 슈피겔(Evan Spiegel)**==은 ==**'AI가 같은 결과를 더 작은 팀으로 낸다'**==고 명시했다.

시간외 거래에서 ==**스냅 주가는 11% 급등**==했다. 이는 자본시장이 ==**'AI는 인력을 대체할 수 있다'**==는 메시지를 ==긍정 신호==로 받아들였다는 결정적 증거다. ==2023~2024년 META·Salesforce·Cisco의 AI 관련 해고 발표 시 주가 반응(평균 +3~5%)==을 두 배 이상 뛰어넘는 수치다.

> "==인공지능의 빠른 발전==이 ==더 작은 팀==으로 ==같은 산출==을 가능하게 한다. 이는 우리뿐 아니라 모든 디지털 콘텐츠 기업의 ==구조적 변화==다."
> — Evan Spiegel, Snap CEO (5월 7일 사내 전체 메시지)

---

## 어떤 직무가 사라지는가: 4가지 카테고리

스냅이 내부 공지에서 밝힌 ==**해고 대상 직무 카테고리**==는 다음과 같다.

1. **콘텐츠 모더레이션** — AI 기반 자동화로 ==**약 320명 감축**==
2. **광고 운영·믹스 분석** — 자동 입찰·자동 크리에이티브로 ==**약 240명 감축**==
3. **고객 지원·이메일 응대** — Generative AI 챗봇으로 ==**약 180명 감축**==
4. **소프트웨어 QA·테스트 자동화** — AI 코드 분석 도구로 ==**약 150명 감축**==

나머지 110명은 ==중간 관리자·HR·운영 지원==에서 감축된다. 특히 ==**중간 관리자 감축은 AI 시대의 새로운 트렌드**==로 평가된다. ==**'관리자 1명이 30명을 관리'**==하는 전통 모델이 ==**'AI 도구로 1명이 60명을 관리'**==로 이동하기 때문이다.

⚡ **주목할 포인트**: 해고 대상 1,000명 중 ==**약 380명이 이미 AI 도구를 일상 업무에 사용**==하고 있었다. 즉, ==**AI를 사용하는 직원도 AI에게 일자리를 잃는 시대**==가 도래한 것이다. ==AI 활용 능력만으로는 일자리 안정성을 보장하지 못한다==는 점이 새로운 경고로 부상했다.

---

## 한국에 미치는 영향

### 1. 네이버·카카오의 인력 운영 전략 재검토

==**네이버**==는 5월 8일 사내 메시지에서 ==**'AI 도구 의무 사용 직무 확대'**==를 발표했다. 광고·검색·콘텐츠 모더레이션 직군은 ==**2026년 하반기까지 AI 활용 KPI 50% 이상**== 달성이 의무화된다. ==**카카오**==도 6월 중 유사 정책을 발표할 가능성이 거론된다. 단순 해고는 한국 노동법상 어렵지만, ==**자연 감소(Attrition) 후 미충원**== 방식으로 ==**연 8~12% 인력 감축**==이 예상된다.

### 2. 콜센터·BPO 산업의 즉각적 충격

한국의 ==**KT CS·SK m&service·KCC정보통신**== 등 ==**BPO(Business Process Outsourcing) 산업**==이 직접 영향권이다. 콜센터·이메일 응대·콘텐츠 모더레이션이 ==Generative AI로 60~80% 자동화==된다는 시나리오가 5월 들어 본격화됐다. ==**약 12만 명의 한국 콜센터 종사자**==가 향후 24개월 내 ==**약 30~40%**== 직무 전환 또는 이탈에 직면할 수 있다.

### 3. 디지털 광고 에이전시의 인력 구조 변화

==**제일기획·이노션·HS애드·대홍기획**== 등 광고 에이전시는 ==**AI 기반 자동 크리에이티브**==(Imagen·Sora·MidJourney) 도입을 5월부터 본격화한다. ==**디자이너·카피라이터의 1인당 산출량**==이 ==**3~5배 증가**==하면서, 광고업계 전체의 ==**5년 내 30% 이상 인력 축소**==가 한국광고홍보학회의 5월 8일 보고서에서 예측됐다.

### 4. 실업급여·재교육 예산 확대 압력

==**고용노동부**==는 5월 둘째 주 ==**'AI 전환기 노동시장 안정화 패키지'**==(가칭) 검토에 착수했다. ==**연 1조 원 규모**==의 ==**AI 전환 실업급여 + 재교육 예산**==이 6월 추경에 반영될 가능성이 거론된다. ==**한국노총·민주노총**==도 ==**'AI 도입 협의 의무'**==를 골자로 한 노조법 개정안 추진을 5월 8일 공동 발표했다.

---

## 자본시장의 새로운 시그널: 'AI 대체 친화 기업'

🎯 **5월 7일 이후 형성된 새로운 투자 테마**: 스냅 주가 +11% 반응 이후, 글로벌 헤지펀드는 ==**'AI 대체 친화 기업(AI-Replacement-Friendly Companies)'**==이라는 새 분류를 만들기 시작했다. 다음 5개 기준을 충족하는 기업이 해당된다.

1. CEO가 ==공개적으로== AI 대체를 인정
2. 노동조합 영향력이 ==상대적으로 낮음==
3. 콘텐츠·광고·고객지원 비중이 ==매출의 30% 이상==
4. ==2개 분기 연속== AI 도구 도입 발표
5. EBITDA 마진이 ==업종 평균 대비 낮음==

📌 **한국 기업 중 해당 가능성**: ==**카카오·KT·NAVER·CJ ENM·SK텔레콤**== 등이 일부 기준에 해당한다. 그러나 ==**한국 노동법(파견근로자보호법·근로기준법 23조)**==이 미국식 즉시 해고를 사실상 차단하기 때문에, ==**'AI 대체'**== 메시지는 한국에서는 ==**자본시장에 즉각 반영되기 어렵다**==는 분석이다.

---

## 노동시장 빅 픽처: AI 일자리 대체의 데이터

💡 **2024~2026년 글로벌 AI 관련 해고 누적**:

- **2024년**: 약 ==**26만 명**== (META 21K, Cisco 4K, IBM 8K 등)
- **2025년**: 약 ==**38만 명**== (Salesforce 7K, Amazon 14K, Cisco 5K 등)
- **2026년 1~5월**: 약 ==**14만 명**== (Snap 1K, Microsoft 6K, Google 12K 등)

현재 추세대로면 ==**2026년 연간 누적은 50~60만 명**==에 도달한다. 이는 ==**2008년 글로벌 금융위기 직후 IT 해고 규모(약 35만 명)**==를 상회하는 수치다.

⚠️ **결정적 차이**: 2008년 해고는 ==경기 침체 후 회복==과 함께 다시 채용이 늘었지만, 2024~2026년 해고는 ==**AI 대체에 의한 구조적 감축**==으로 ==**같은 직무가 다시 채용되지 않는다**==.

✅ **결론**: 스냅의 5월 7일 발표는 ==**AI 노동 대체 시대의 정식 개막 선언**==으로 평가받는다. 한국 기업·정부·노동계 모두가 ==**향후 24개월의 정책 대응**==을 5월 둘째 주부터 본격 가동해야 하는 상황이다. ==재교육·소득 보전·직무 전환 인프라==가 동시에 가동되지 않으면, ==**한국 노동시장의 구조적 양극화**==가 2027년부터 본격화된다.`},{id:"202605101000003",title:"Anthropic '미토스(Mythos)' 모델 공개...사이버보안 능력 너무 강해 접근 제한",summary:"Anthropic이 5월 6일 사이버보안 특화 신규 모델 '미토스(Mythos)'를 비공개 공개했다. 동급 모델 대비 사이버보안 추론 능력이 압도적으로 높아, 정부·은행·전력회사 등 검증된 기관 한정 접근으로 제한됐다. AI 모델이 보안 능력을 이유로 출시가 제한된 첫 사례다.",category:"LLM",author:"Prompt Daily 편집팀",date:"2026-05-10T10:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",breaking:!1,content:`## 너무 강해서 풀지 못하는 AI 모델의 등장

==**Anthropic**==이 5월 6일 ==**'미토스(Mythos)'**==라는 코드명의 신규 사이버보안 특화 모델을 ==**비공개 공개**==했다. 일반 사용자나 개발자는 접근할 수 없으며, ==**미국·영국·호주·캐나다·뉴질랜드(파이브 아이즈) 정부**==, ==**대형 시중은행 상위 30개사**==, ==**전력·수도·통신 등 핵심 인프라 운영사**==에만 ==**개별 심사 통과 후**== 사용 권한이 부여된다.

📌 **결정적 사실**: AI 모델이 ==**'능력이 너무 강해서'**==라는 이유로 출시가 제한된 ==첫 공식 사례==다. Anthropic은 ==**'미토스가 동급 모델 대비 사이버보안 추론 능력에서 압도적 우위'**==라고 자체 평가했고, ==**이 능력이 악용될 경우의 사회적 위험이 일반 출시 이익을 상회한다**==고 판단해 접근 제한을 결정했다.

미토스의 핵심 능력은 다음과 같다(Anthropic 발표 기준):

- **취약점 발견(Vulnerability Discovery)**: 코드베이스에서 ==**제로데이 취약점**==을 ==**기존 도구 대비 12배 빠르게**== 발견
- **공격 시뮬레이션**: ==**APT(지능형 지속 위협)**== 시나리오를 자동 생성·실행
- **방어 자동화**: 침입 탐지 후 ==**평균 4.2초 내 자동 격리·패치**==
- **위협 인텔리전스**: 다크웹·텔레그램 채널의 위협 정보를 ==실시간 자동 분석==

> "==Mythos는 우리가 만든 가장 강력한 도구이지만, 동시에 가장 위험한 도구==이기도 하다. 이를 누구나 쓸 수 있게 풀어놓는 것은 ==무책임==한 일이다."
> — Dario Amodei, Anthropic CEO (5월 6일 정부·민간 합동 브리핑)

---

## 접근 제한의 구조: 3단계 심사 체계

Anthropic은 미토스 접근권 부여를 위해 ==**3단계 심사 체계**==를 도입했다.

1. **Tier 1 — 정부 기관**: 파이브 아이즈 5개국 + EU 7개국(독·프·이태·스페인·네덜란드·폴란드·핀란드)의 ==**사이버보안 책임 기관**==. 평가 기간 ==평균 2주==.
2. **Tier 2 — 핵심 인프라**: 전력·수도·통신·금융·항공·의료 산업 ==**Top 30 기업**==. 평가 기간 ==평균 6주==.
3. **Tier 3 — 특별 심사 민간**: 지정 보안 회사, 학술 연구기관, 정부 인가 펜테스트 업체. 평가 기간 ==평균 12주==.

특히 Tier 2 적용 시 ==**해당 기업 CEO·CISO·DPO의 직접 서명**==과 ==**연 1회 사용 감사 수용**==이 의무화된다. 사용 로그는 ==**모두 Anthropic에 자동 전송**==되며, 의심스러운 활용 패턴 발견 시 ==**즉시 접근 차단**==이 가능하다.

---

## 한국에 미치는 영향

### 1. 한국 정부·금융권의 즉시 도입 검토

==**국가정보원·한국인터넷진흥원(KISA)·금융보안원**==이 5월 8일 미토스 Tier 1 신청을 검토 중이다. 다만 한국은 파이브 아이즈가 아니라 ==**'5+1' 또는 별도 협정 체결**==이 필요하다. ==**미국 NSA와 한국 국정원의 사이버 협력 협정**==(2024년 갱신) 조항을 활용한 ==**우회 접근 방안**==이 5월 둘째 주 외교부 채널에서 협상 중이다.

### 2. 4대 시중은행·전력공사 우선 신청

==**KB국민은행·신한은행·하나은행·우리은행**==과 ==**한국전력·한국수력원자력**==이 ==**Tier 2 우선 신청 검토**==를 5월 8일 시작했다. 한국의 시중은행 ==연 사이버보안 예산==이 ==평균 1,200억 원==인 점을 감안하면, ==**미토스 라이선스 비용은 연 30억~80억 원 수준**==으로 충분히 감당 가능하다는 평가다.

### 3. 한국 사이버보안 산업의 재편 압력

==**SK쉴더스·LG CNS 보안사업부·안랩·이글루코퍼레이션**==이 보유한 ==**자체 보안 AI 도구**==가 미토스에 의해 ==**경쟁력 우위 상실**==할 위험이 있다. 5월 8일 한국정보보호산업협회(KISIA)는 ==**'국산 보안 AI 미토스 대응 협의체'**==를 긴급 발족했다. ==**연 500억 원 규모**==의 ==**한국형 보안 LLM 공동 개발**== 프로젝트가 6월 중 가동될 전망이다.

### 4. 사이버보안 관련 일자리 양극화

미토스 사용 권한을 가진 기관의 ==**보안 분석가**==는 ==**연봉이 평균 25~40% 상승**==할 것으로 ==**한국직업능력연구원**==이 5월 7일 분석했다. 반면 미토스 미사용 기관의 일반 보안 분석가는 ==**자동화에 의한 직무 축소**==에 직면할 수 있다. ==**보안 일자리의 양극화**==가 한국에서도 24개월 내 가시화된다.

---

## AI 모델 출시 제한의 새 표준

⚡ **미토스가 만든 새 표준**: AI 산업은 그동안 ==**'더 강한 모델 = 더 좋은 모델'**==이라는 단순 논리로 움직여왔다. 미토스는 ==**'더 강한 모델 = 더 통제가 필요한 모델'**==이라는 새 패러다임을 만들었다.

향후 12개월 내 예상되는 유사 사례:

- **OpenAI**: ==**CBRN 특화 모델**== 별도 통제 검토 (6월 발표 가능성)
- **Google DeepMind**: ==**바이오 합성 모델**== Tier 접근 검토 중
- **Meta**: ==**오픈모델 정책 일부 후퇴**== — Llama 4 보안 변형 비공개 가능성
- **xAI**: ==**Grok 보안 변형**== 개발 중, 공개 여부 미정

🎯 **한국 기업 행동 가이드**: 1) 자사 AI 모델의 ==보안·CBRN·자율행동== 위험 자체 평가 즉시 착수 2) ==Tier 접근 시스템==을 미국·EU 기준에 맞춰 자체 도입 검토 3) ==오픈소스 모델==을 무조건 공개 배포하는 관행 재검토.

---

## 사이버보안 자동화의 구조적 시사점

💡 **'4.2초 자동 격리'의 의미**: 미토스가 침입 탐지 후 ==**평균 4.2초 내 자동 격리**==한다는 것은, ==**인간 보안 분석가의 평균 대응 시간(약 30~45분)**==을 ==**450~640배 단축**==한다는 뜻이다.

그러나 자동화가 만능은 아니다. 미토스 접근권을 가진 기관이 5월 6~8일 사이 보고한 ==**3가지 잠재 문제**==:

- **오탐(False Positive) 자동 격리**: 정상 트래픽을 위협으로 분류해 ==**서비스 중단**== 사례
- **알고리즘 의존성**: 모든 위협 평가를 미토스에 위임 시 ==**모니터링 기술 인력 약화**==
- **공격자의 미토스 표적화**: 공격자가 ==**미토스의 판단 패턴**==을 학습해 우회 가능성

⚠️ **한국 도입 시 핵심 리스크**: 한국의 ==**금융권 보안 규제(전자금융거래법)**==는 ==**자동화된 결정에 대한 인간 검증 의무**==를 강제한다. 미토스의 4.2초 자동 격리가 ==**전자금융거래법 위반 가능성**==이 있어, 5월 8일 ==**금융위원회·금융보안원**==이 ==**규제 가이드라인 보완**==을 검토 시작했다.

✅ **결론**: 미토스는 ==**AI 안전성 논쟁의 새 장**==을 열었다. ==**'무엇이든 풀어놓아야 진보한다'**==는 자유주의적 AI 개발 패러다임이 ==**'위험은 통제하면서 풀어놓는다'**==는 신중주의 패러다임으로 이행한다. 한국 정부·기업이 이 흐름에 얼마나 빠르게 동참하느냐가 향후 12개월 사이버 안보의 결정 변수가 된다.`},{id:"202605101000004",title:"구글 TurboQuant ICLR 2026 공개...LLM 메모리 병목 60% 절감 알고리즘",summary:"구글 리서치팀이 5월 6일 ICLR 2026에서 'TurboQuant'를 공개했다. KV 캐시(LLM 추론의 핵심 메모리 병목)를 평균 60% 절감하면서 정확도 손실을 1% 이하로 유지한다. 데이터센터 추론 비용을 절반 가까이 줄일 수 있는 알고리즘으로, AI 인프라 경제학의 변곡점으로 평가된다.",category:"AI 연구",author:"Prompt Daily 편집팀",date:"2026-05-10T10:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",breaking:!1,content:`## ICLR 2026의 가장 주목받은 논문

==**구글 리서치(Google Research)**==팀이 5월 6일 ==**ICLR 2026**==(International Conference on Learning Representations)에서 ==**'TurboQuant: 확률적 KV 캐시 양자화'**==를 공개했다. 발표 이후 ==**Hugging Face·OpenReview·X(Twitter)**==에서 ==**24시간 내 인용·공유 1만 건**==을 돌파하며 ==**ICLR 2026 최고 화제 논문**==으로 부상했다.

📌 **핵심 성과 요약**: TurboQuant는 LLM 추론의 가장 큰 병목인 ==**KV 캐시(Key-Value Cache)**== 메모리 사용량을 ==**평균 60% 절감**==하면서, 정확도 손실을 ==**1% 이하**==로 유지한다. 기존 양자화 기법(SmoothQuant·KIVI·QuaRot)이 ==**45~55% 절감 + 2~4% 정확도 손실**==이었던 것과 비교하면, ==**'더 많이 줄이면서 더 적게 잃는'**== 동시 달성을 처음으로 구현했다.

🎯 **왜 KV 캐시가 중요한가**: GPT-5·Claude 4.5·Gemini 3 같은 LLM이 사용자에게 답변할 때, ==**이전 토큰들의 컨텍스트**==를 메모리(KV 캐시)에 보관한다. 컨텍스트 길이가 길어질수록 ==**메모리 사용량이 선형 증가**==한다. 256K 컨텍스트 모델 1개를 추론할 때 ==**KV 캐시만 80~120GB**==를 차지한다. ==**전체 추론 비용의 60~70%가 KV 캐시 관리에서 발생**==한다.

---

## TurboQuant의 알고리즘적 핵심

논문이 제안한 핵심 아이디어는 다음 3가지로 요약된다.

1. **확률적 그룹화(Stochastic Grouping)**: 비슷한 분포를 가진 KV 토큰들을 ==**확률 기반으로 동적 그룹화**==. 그룹별로 ==최적 비트 할당==이 달라진다.
2. **이상치(Outlier) 분리**: 통계적 이상치 토큰은 ==**16비트 풀 정밀도**==로 보존, 나머지는 ==**3~4비트로 압축**==.
3. **자가 검증(Self-Verification) 게이트**: 양자화 후 정확도 손실이 임계값 초과 시 ==**자동으로 정밀도를 단계 상향**==.

특히 ==**확률적 그룹화**==는 정적 그룹화 대비 ==**대규모 모델에서 8~12% 추가 정확도 보존**==을 달성했다. 이는 학계에서 ==**5년 이상 풀리지 않던 KV 양자화의 실제 한계**==를 돌파한 것으로 평가받는다.

> "==KV 캐시는 LLM 추론 비용 구조를 결정하는 가장 큰 변수==였다. TurboQuant는 ==이 변수를 절반으로 만들 수 있는 첫 알고리즘==이다."
> — Yanjun Han, Stanford 통계학과 교수, ICLR 2026 분야 좌장 (논평)

---

## 한국에 미치는 영향

### 1. 한국 클라우드 추론 단가 즉각 인하 가능성

==**네이버클라우드·KT클라우드·NHN클라우드**==가 제공하는 ==**LLM 추론 서비스**== 단가가 인하될 수 있다. TurboQuant가 즉시 적용 가능한 형태로 ==**Apache 2.0 코드 공개**==됐기 때문이다. 한국 클라우드 사업자가 6월 중 적용 시 ==**API 가격 약 30~45% 인하**==가 가능하다는 ==**한국클라우드산업협회**== 5월 8일 분석이다.

### 2. 국내 LLM 스타트업 추론 GPU 부담 감소

==**업스테이지·코난테크놀로지·올거나이즈·뤼튼테크놀로지스**==는 자체 LLM 추론을 위해 ==**NVIDIA H100·H200 클러스터**==를 임대 운영한다. TurboQuant 적용 시 ==**같은 GPU로 약 1.6~2.0배 더 많은 동시 사용자 처리**==가 가능해진다. ==**시리즈 B 단계 스타트업의 월간 GPU 비용 약 5억 원**==이 ==**3억~3.5억 원으로 절감**==된다.

### 3. 삼성·SK 메모리 수요 단기 영향

==KV 캐시 절감==이 일반화되면 ==**HBM·DDR5 단기 수요가 일부 둔화**==할 가능성이 거론된다. 그러나 ==**모델 크기·컨텍스트 길이가 동시 증가**==하는 추세이기 때문에, ==**중장기 수요 영향은 +/- 5% 이내**==로 ==**삼성증권·메리츠증권**==이 5월 8일 분석했다. ==**HBM4·HBM4E 출하 계획에는 영향이 없다**==는 평가다.

### 4. 한국 AI 학계의 후속 연구 기회

==**KAIST·서울대·POSTECH·UNIST**== 연구팀은 5월 7일 ==**TurboQuant 한국어 LLM 적용 공동 연구 컨소시엄**==을 발족했다. ==**HyperCLOVA X·EXAONE 3.0·솔라**==에 TurboQuant 적용 후 ==**한국어 성능 변화 측정**==을 9월까지 완료할 계획이다. 한국어 LLM의 추론 비용을 글로벌 동일 수준으로 끌어내릴 수 있는 ==첫 학술 협업==이다.

---

## 글로벌 AI 인프라 경제학의 변곡점

⚡ **5월 7일 시점 글로벌 LLM 추론 시장 규모**: ==**연 약 1,200억 달러(약 168조 원)**==. 이 중 ==**KV 캐시 관련 비용은 약 720억 달러(약 100조 원)**==를 차지한다.

TurboQuant 60% 절감 시:

- **즉각 절감 가능 비용**: ==**연 약 432억 달러(약 60조 원)**==
- **OpenAI·Anthropic·Google 자체 절감 추정**: ==**연 95억 달러 + 47억 달러 + 78억 달러**==
- **한국 LLM 시장 절감 추정**: ==**연 약 6,800억 원**==

📌 **자본시장 시그널**: TurboQuant 발표 직후 ==**NVIDIA 주가는 -1.2% 일시 하락**==(KV 캐시 효율화로 단기 GPU 수요 감소 우려). 그러나 한 시간 후 ==**AI 모델 크기 확장 가능성으로 +0.8% 회복**==. ==**자본시장은 효율화가 더 큰 모델·더 긴 컨텍스트를 가능하게 한다**==고 해석했다.

---

## 추론 비용 혁명: 누가 가장 빨리 적용할까

💡 **5월 7~8일 사이 발표된 적용 계획**:

- **Hugging Face Transformers**: ==**5월 9일 메인 브랜치 머지**== 완료
- **vLLM**: ==**5월 12일 정식 릴리스 v0.7.0**==에 통합 예정
- **NVIDIA TensorRT-LLM**: ==**6월 1일 v0.10**==에서 공식 지원
- **Anthropic Claude API**: ==**비공개 적용**== — 5월 9일부터 일부 트래픽에 점진 적용 중
- **OpenAI GPT-5 API**: ==**평가 단계**== — 6월 둘째 주 적용 검토

특히 ==**Hugging Face의 24시간 내 메인 브랜치 머지**==는 오픈소스 AI 인프라 발전 속도가 ==**전례 없이 빨라졌다**==는 신호다. 학술 논문이 발표 24시간 내 ==**프로덕션 코드에 적용**==되는 것은 5년 전에는 ==상상하기 어려웠다==.

---

## 한국 AI 인프라 기업의 전략 시사점

🎯 **즉시 행동 가능한 3가지**: 

1. **자체 LLM 운영 기업**: 5월 둘째 주 안에 ==**TurboQuant 코드 자체 검증 PoC**== 착수. 한국어 데이터셋 기준 정확도 손실 측정 필수
2. **클라우드 사업자**: 6월 1일까지 ==**TurboQuant 통합 추론 API**== 출시 검토. 가격 30~45% 인하 시 ==시장 점유율 확대 기회==
3. **AI 칩 스타트업**: ==**리벨리온 ATOM·퓨리오사 RNGD**==의 ==**KV 캐시 압축 가속 명령어**== 추가 검토. TurboQuant 알고리즘이 ==하드웨어 가속 친화적==

✅ **결론**: TurboQuant는 단순한 학술적 진보가 아니라 ==**AI 인프라 경제학의 변곡점**==이다. 추론 비용이 절반 가까이 떨어지면, ==**기업의 AI 사용량은 자연스럽게 2~3배 증가**==한다(가격 탄력성 효과). 한국 기업이 6월 안에 적용하지 못하면, 미국·중국 경쟁사 대비 ==**서비스 가격 경쟁력에서 즉각 열위**==에 놓인다.

⚠️ **주의 사항**: TurboQuant는 ==**Transformer 기반 모델에 최적화**==됐다. ==**State Space Models(Mamba), RWKV, Hyena**== 등 차세대 아키텍처에는 직접 적용이 어렵다. 한국 기업이 ==Transformer 외 아키텍처 투자==를 진행 중이라면, TurboQuant 효과는 제한적임을 인지해야 한다.`},{id:"202605101000005",title:"MS '글로벌 AI 확산 2026' 리포트...전 세계 AI 사용자 17.8% 돌파",summary:"마이크로소프트가 5월 7일 발간한 '글로벌 AI 확산 2026' 리포트에서 전 세계 노동연령 인구 중 AI 사용자 비율이 17.8%(약 11억 6천만 명)에 도달했다고 발표했다. 1분기에만 1.5%p 상승해 사상 최대 분기 증가율을 기록했고, 한국은 21.4%로 OECD 평균(19.2%)을 상회하며 글로벌 5위에 올랐다.",category:"테크",author:"Prompt Daily 편집팀",date:"2026-05-10T10:00:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",breaking:!1,content:`## 11억 6천만 명 — AI 사용자 사상 최대 규모

==**마이크로소프트(Microsoft)**==가 5월 7일 발간한 ==**'글로벌 AI 확산 2026 리포트(The State of Global AI Diffusion 2026)'**==에서 전 세계 노동연령 인구(15~64세) 중 ==**AI 사용자 비율 17.8%**==를 발표했다. 절대 수치로는 ==**약 11억 6천만 명**==으로, 인터넷 보급률 70% 시점의 사용자 수와 거의 동일한 규모다.

📌 **결정적 변화**: 2025년 4분기 ==**16.3%**==에서 2026년 1분기 ==**17.8%**==로 ==**1.5%p 상승**==. 이는 ==**사상 최대 분기 증가율**==이다. 절대 사용자 수로 환산하면 ==**1분기에만 약 9,800만 명이 새로 AI 사용자가 됐다**==. 하루 평균 ==**약 110만 명**==이 새 사용자로 합류한 셈이다.

MS 리포트는 ==**174개국, 12만 명 직장인 + 8만 명 학생**==을 대상으로 한 ==**조사 표본**==과 ==**Microsoft Copilot, ChatGPT, Claude, Gemini 등 12개 메이저 AI 플랫폼의 익명 사용 데이터**==를 결합해 작성됐다. ==통계적 신뢰도 95%, 오차 ±0.4%p==로 ==**단일 AI 사용 통계 중 가장 정밀**==하다는 평가를 받는다.

> "==AI는 인터넷의 첫 10년보다 빠른 속도==로 인류에 확산되고 있다. 이 속도는 ==2027년 말 25%, 2030년 말 40% 돌파==를 가리킨다."
> — Brad Smith, Microsoft Vice Chair & President (5월 7일 리포트 발간 컨퍼런스)

---

## 국가별 순위: 한국은 21.4%로 글로벌 5위

MS 리포트의 국가별 AI 사용률 상위 10개국:

1. **이스라엘**: ==**31.8%**== (글로벌 1위, 스타트업 밀집도 효과)
2. **싱가포르**: ==**28.5%**== (정부 주도 AI 교육 효과)
3. **아랍에미리트**: ==**25.7%**== (무료 ChatGPT Plus 정부 지원 효과)
4. **노르웨이**: ==**22.3%**== (북유럽 디지털 인프라 효과)
5. **==한국==**: ==**21.4%**== (OECD 평균 19.2% 상회, 5위 진입)
6. **미국**: ==**20.8%**== (글로벌 절대 사용자 수 1위)
7. **에스토니아**: ==**20.2%**== (전자정부 효과)
8. **스웨덴**: ==**19.9%**==
9. **덴마크**: ==**19.5%**==
10. **핀란드**: ==**19.1%**==

⚡ **한국의 도약**: 1년 전(2025년 1분기) ==**12.8%, 글로벌 11위**==였던 한국이 2026년 1분기 ==**21.4%, 글로벌 5위**==로 ==**6단계 상승**==했다. 이는 OECD 38개국 중 ==**가장 큰 단일 연도 도약**==이다.

---

## 한국에 미치는 영향

### 1. K-디지털 인덱스의 글로벌 위상 도약

==**과학기술정보통신부**==는 5월 8일 ==**'한국 AI 도입 5위 진입 — 국가 디지털 경쟁력 신기록'**==이라는 보도자료를 배포했다. ==**OECD AI 정책 옵저버토리(OECD AI Observatory)**==도 5월 9일 한국을 ==**'AI 정책 모범 사례'**== 국가로 분류했다. ==**6월 OECD 디지털 장관 회의**==에서 한국이 ==사례 발표국==으로 채택될 가능성이 높아졌다.

### 2. 직장 내 AI 사용 격차의 가시화

한국의 21.4%는 ==**고소득·고학력·대도시 거주 직장인에 집중**==됐다. ==**대기업 사무직 47.8% vs 중소기업 사무직 23.5%**==, ==**서울·경기 25.1% vs 비수도권 14.8%**==의 ==**격차가 처음으로 통계 확인**==됐다. ==**고용노동부**==는 5월 둘째 주 ==**'AI 격차 해소 패키지'**==(중소기업 무료 AI 교육 + 비수도권 AI 인프라 구축) 발표를 검토 중이다.

### 3. 한국 AI 기업의 글로벌 진출 가속

==**네이버·카카오·업스테이지·뤼튼**==이 ==**'한국 5위'==라는 신뢰 자산==을 활용해 글로벌 진출에 가속을 붙인다. ==**KOTRA**==는 5월 8일 ==**'K-AI 글로벌 진출 패키지'**==를 ==**100억 원 추경**==으로 가동했다. 우선 진출 대상국은 ==**일본·인도네시아·베트남·인도·UAE**==다.

### 4. 교육 과정 개편의 가속

==**교육부**==는 ==**'2027년 초중고 AI 교육 의무화'**==를 5월 8일 공식 확정했다. 초등학교 5학년부터 ==**연 34시간**==의 AI 활용 수업이 의무화되며, 고등학교 졸업 시 ==**AI 활용 인증제**==가 도입된다. ==**교사 교육**==을 위해 ==**연 2,400억 원**==이 추경 편성된다.

---

## 'AI 격차'의 새로운 양상

💡 **MS 리포트가 경고한 5가지 격차**:

1. **국가 격차**: 상위 10개국과 하위 10개국의 사용률 격차 ==**약 28배**==
2. **소득 격차**: 글로벌 상위 20% 소득자 vs 하위 20% 소득자 ==**12배**==
3. **연령 격차**: 18~34세 vs 55세 이상 ==**약 4.5배**==
4. **성별 격차**: 남성 19.4% vs 여성 16.2%(==**3.2%p**==)
5. **언어 격차**: 영어 사용자 23.6% vs 비영어 사용자 12.7%(==**약 1.9배**==)

⚠️ **핵심 시사점**: AI 격차는 ==**기존 디지털 격차의 단순 확장**==이 아니라 ==**새로운 형태의 부의 격차**==를 만들어낸다. AI를 일상적으로 활용하는 노동자의 ==**시간당 산출**==이 미사용 노동자의 ==**평균 1.7배**==라는 데이터가 함께 발표됐다. 즉 ==**AI 미사용은 곧 임금 격차로 직결**==된다.

---

## 산업별 AI 도입 양상

🎯 **MS 리포트가 분석한 산업별 AI 도입률(글로벌 평균)**:

- **소프트웨어 개발**: ==**78.5%**== (코드 생성·리뷰 등)
- **마케팅·광고**: ==**62.4%**== (콘텐츠 생성)
- **금융·보험**: ==**54.2%**== (리스크 분석·고객 응대)
- **법무·컨설팅**: ==**48.7%**== (문서 검토·리서치)
- **교육**: ==**43.9%**== (수업 자료·평가)
- **의료**: ==**31.6%**== (진단 보조·문서 작성)
- **제조업**: ==**24.8%**== (품질 검사·예측 정비)
- **건설**: ==**18.3%**== (설계·견적)
- **농업**: ==**12.1%**== (작물 관리·일기 분석)

📌 **한국 산업 진단**: 한국은 ==**소프트웨어·금융·교육**==에서 글로벌 평균을 상회하지만, ==**제조업·건설·농업**==에서 평균을 하회한다. ==**삼성전자·현대차·포스코**==가 5월 둘째 주부터 ==**제조업 AI 의무화**== 가이드라인을 사내 공유 시작했다. 한국 제조업의 AI 도입률을 ==**2027년 말까지 40% 이상**==으로 끌어올리는 것이 ==**산업통상자원부**==의 6월 발표 핵심 KPI다.

---

## 2030년 시나리오: 글로벌 40% 돌파의 의미

✅ **MS 리포트의 2030년 예측 모델**:

- **베이스라인 시나리오**: ==**40.2%**== (현재 추세 연장)
- **빠른 시나리오**: ==**52.8%**== (정부·기업 적극 도입)
- **느린 시나리오**: ==**31.5%**== (규제 강화·인프라 부족)

글로벌 40% 돌파는 ==**약 27억 명**==의 AI 사용자를 의미한다. 이는 ==**스마트폰 보급률 70%**==와 거의 동일한 수치로, ==**'AI 네이티브'**==가 ==스마트폰 네이티브==를 넘는 ==사실상 표준 사용자==가 되는 시점이다.

📌 **한국의 2030년 목표**: ==**45% 돌파**== — 과기정통부가 5월 8일 발표한 ==**'대한민국 AI 강국 2030 비전'**==의 핵심 KPI다. 글로벌 빠른 시나리오(52.8%)에 미치지 못하지만, OECD 평균(38~42%)을 상회하는 ==**선도국 그룹 유지**==가 목표다.

⚡ **결론**: 17.8%는 ==**시작점**==이지, ==종착점==이 아니다. 향후 4년간 ==**매 분기 1.0~1.5%p 증가**==하는 ==전례 없는 기술 확산 속도==가 지속된다. 한국이 ==**5위**==라는 위치를 활용해 ==글로벌 AI 거버넌스에서 더 큰 발언권==을 확보하는 ==골든 윈도우==가 ==**2026년 하반기~2027년 상반기**== 12개월에 형성된다.`},{id:"202605090855001",title:"Anthropic 9,000억 달러 펀딩 임박...OpenAI 추월 초읽기",summary:"Anthropic이 5월 이사회에서 최대 500억 달러(약 70조 원) 규모, 기업가치 9,000억 달러(약 1,260조 원) 펀딩 라운드 결정에 들어간다. 성사 시 OpenAI(8,520억 달러)를 추월하는 사상 최대 규모 AI 기업이 된다. ARR 300억 달러 돌파, 1분기 매출 80배 폭증이 핵심 동력이다.",category:"기업 AI",author:"Prompt Daily 편집팀",date:"2026-05-09T08:55:00+09:00",readTime:"5분",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",breaking:!0,content:`## OpenAI를 추월하는 사상 최대 AI 펀딩

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

✅ **주목할 포인트**: '세계 3위'는 한국 AI에게 큰 자신감이지만, 동시에 매우 위험한 안도감이기도 하다. 진짜 기준은 순위가 아니라 **"한국 AI로 만든 글로벌 매출"**이다. 이 지표가 의미 있게 움직이지 않는 한, 3위라는 숫자는 5위·7위로 다시 내려앉을 수 있다.`}],Jp={articles:Qp},Yp="a]",Bs="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";let gl=!1;const uc=()=>gl?!0:typeof window.Kakao>"u"?(console.error("Kakao SDK not loaded"),!1):(window.Kakao.isInitialized()||window.Kakao.init(Yp),gl=window.Kakao.isInitialized(),gl),Zp=()=>new Promise((n,e)=>{if(!uc()){n({success:!0,user:{id:"kakao_demo_"+Date.now(),name:"카카오 사용자",email:"demo@kakao.com",avatar:null,provider:"kakao"},isDemo:!0});return}window.Kakao.Auth.login({success:t=>{window.Kakao.API.request({url:"/v2/user/me",success:r=>{var o,l,i,a,s;n({success:!0,user:{id:"kakao_"+r.id,name:((l=(o=r.kakao_account)==null?void 0:o.profile)==null?void 0:l.nickname)||"카카오 사용자",email:((i=r.kakao_account)==null?void 0:i.email)||null,avatar:((s=(a=r.kakao_account)==null?void 0:a.profile)==null?void 0:s.profile_image_url)||null,provider:"kakao"}})},fail:r=>{e({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}})},fail:t=>{t.error==="access_denied"?e({success:!1,error:"로그인이 취소되었습니다."}):e({success:!1,error:"카카오 로그인에 실패했습니다."})}})}),qp=()=>new Promise(n=>{if(!uc()||!window.Kakao.Auth.getAccessToken()){n({success:!0});return}window.Kakao.Auth.logout(()=>{n({success:!0})})});let Ks=!1;const nf=()=>new Promise(n=>{if(Ks){n(!0);return}if(typeof window.google>"u"||!window.google.accounts){console.error("Google SDK not loaded"),n(!1);return}Ks=!0,n(!0)}),ef=()=>new Promise(async(n,e)=>{if(!await nf()||Bs.includes("YOUR_GOOGLE")){n({success:!0,user:{id:"google_demo_"+Date.now(),name:"Google 사용자",email:"demo@gmail.com",avatar:null,provider:"google"},isDemo:!0});return}try{window.google.accounts.oauth2.initTokenClient({client_id:Bs,scope:"email profile",callback:async o=>{if(o.error){e({success:!1,error:"구글 로그인에 실패했습니다."});return}try{const i=await(await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${o.access_token}`}})).json();n({success:!0,user:{id:"google_"+i.sub,name:i.name||"Google 사용자",email:i.email,avatar:i.picture||null,provider:"google"}})}catch{e({success:!1,error:"사용자 정보를 가져올 수 없습니다."})}}}).requestAccessToken()}catch{e({success:!1,error:"구글 로그인 초기화에 실패했습니다."})}}),tf=async()=>(await qp(),{success:!0}),rf=null,Kr={title:"Prompt Daily — 매일 아침 AI가 바꾸는 세상",description:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만.",image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200",siteName:"Prompt Daily"},Mn=(n,e)=>{let t=document.head.querySelector(n);if(!t){t=document.createElement("meta");const[r,o]=n.replace(/^meta\[/,"").replace(/\]$/,"").split("=");t.setAttribute(r,o.replace(/"/g,"")),document.head.appendChild(t)}t.setAttribute("content",e.content??"")},of=n=>{document.title=n,Mn('meta[property="og:title"]',{content:n}),Mn('meta[name="twitter:title"]',{content:n})};function cc({title:n,description:e,image:t,url:r,type:o="article",publishedTime:l}={}){const i=n||Kr.title,a=e||Kr.description,s=t||Kr.image,c=r||(typeof window<"u"?window.location.href:"");of(i),Mn('meta[name="description"]',{content:a}),Mn('meta[property="og:description"]',{content:a}),Mn('meta[property="og:image"]',{content:s}),Mn('meta[property="og:url"]',{content:c}),Mn('meta[property="og:type"]',{content:o}),Mn('meta[property="og:site_name"]',{content:Kr.siteName}),Mn('meta[name="twitter:card"]',{content:"summary_large_image"}),Mn('meta[name="twitter:description"]',{content:a}),Mn('meta[name="twitter:image"]',{content:s}),l&&Mn('meta[property="article:published_time"]',{content:l})}function dc(){cc({})}const et={models:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",enterprise:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",research:"https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200",tools:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",prompts:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",policy:"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200",culture:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",all:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200"};function Co(n,e="all"){return n?(n.image_storage_path,n.image&&/^https?:\/\//.test(n.image)?n.image:et[e]||et.all):et[e]||et.all}function pc(n){return null}function Po(n="all"){const e=et[n]||et.all;return t=>{t.currentTarget.src!==e&&(t.currentTarget.src=e)}}async function lf(){return!1}async function af(){return[]}function sf(){const[n,e]=h.useState(null),[t,r]=h.useState(null),[o,l]=h.useState([]),[i,a]=h.useState(""),[s,c]=h.useState(!1);h.useEffect(()=>{},[]),h.useEffect(()=>{if(!n){r(!1);return}lf().then(r)},[n]);const m=async()=>{c(!0);const A=await af();l(A),c(!1)};return h.useEffect(()=>{t&&m()},[t]),u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"Supabase 환경변수가 설정되지 않았습니다."}),u.jsx(He,{to:"/",className:"text-brand underline",children:"홈으로"})]})}const cr="Prompt Daily",uf="매일 아침 AI가 바꾸는 세상",yt=[{slug:"all",name:"전체",color:"#152e44"},{slug:"models",name:"모델",color:"#152e44"},{slug:"enterprise",name:"기업",color:"#1d4ed8"},{slug:"research",name:"연구",color:"#0f766e"},{slug:"tools",name:"도구",color:"#b45309"},{slug:"prompts",name:"프롬프트",color:"#7c3aed"},{slug:"policy",name:"정책",color:"#be123c"},{slug:"culture",name:"컬처",color:"#334155"}],mi=Object.fromEntries(yt.map(n=>[n.slug,n])),fc=Object.fromEntries(yt.map(n=>[n.name,n])),Hs=n=>String(n).padStart(2,"0"),Ac=n=>{const e=new Date(n);return`${e.getFullYear()}.${Hs(e.getMonth()+1)}.${Hs(e.getDate())}`},Ii=n=>{const e=new Date(n),r=Math.floor((new Date-e)/36e5),o=Math.floor(r/24);return r<1?"방금 전":r<24?`${r}시간 전`:o<7?`${o}일 전`:Ac(n)},fn=n=>{const e=fc[n.category];return e?e.slug:"all"},cf=n=>n?n.split(`

`).map((e,t)=>{const r=e.trim();if(r==="---"||r==="***")return u.jsx("hr",{className:"my-10 border-t-2 border-ink-100"},t);if(e.startsWith("## "))return u.jsx("h2",{children:e.slice(3)},t);if(e.startsWith("### "))return u.jsx("h3",{children:e.slice(4)},t);if(e.startsWith("> ")){const o=e.slice(2).replace(/\n> /g," ").replace(/\n/g," ");return u.jsxs("blockquote",{className:"relative my-8 pl-6 pr-5 py-5 bg-brand-tint/40 border-l-4 border-brand text-[17px] leading-relaxed text-ink-800 italic",children:[u.jsx("span",{className:"absolute left-2 top-0 text-brand/30 text-5xl font-serif leading-none select-none",children:"“"}),kt(o)]},t)}if(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)\s/.test(e)){const o=e.match(/^(📊|💡|🔥|⚡|🎯|📌|⚠️|✅)/)[0],l=e.slice(o.length).trimStart();return u.jsxs("div",{className:"my-8 flex gap-4 p-5 bg-brand-tint/50 border border-brand/20 rounded-lg",children:[u.jsx("span",{className:"text-3xl leading-none shrink-0",children:o}),u.jsx("div",{className:"flex-1 text-[16px] leading-relaxed text-ink-800",children:kt(l)})]},t)}return/^[-*]\s/.test(e)?u.jsx("ul",{className:"my-5 space-y-2",children:e.split(`
`).filter(Boolean).map((o,l)=>u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0"}),u.jsx("span",{className:"flex-1",children:kt(o.replace(/^[-*]\s*/,""))})]},l))},t):/^\d+\.\s/.test(e)?u.jsx("ol",{className:"my-5 space-y-3 counter-reset-article",children:e.split(`
`).filter(Boolean).map((o,l)=>{const i=o.match(/^(\d+)\.\s*(.*)/),a=i?i[1]:String(l+1),s=i?i[2]:o;return u.jsxs("li",{className:"flex gap-3 items-start",children:[u.jsx("span",{className:"shrink-0 w-7 h-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center",children:a}),u.jsx("span",{className:"flex-1 pt-0.5",children:kt(s)})]},l)})},t):u.jsx("p",{children:kt(e)},t)}):null,kt=n=>{const e=[];let t=0;return n.split(/\*\*(.*?)\*\*/).forEach((r,o)=>{o%2===1?e.push(u.jsx("strong",{className:"text-brand-dark font-bold",children:r},`b-${t++}`)):r.split(/==(.*?)==/).forEach((l,i)=>{i%2===1?e.push(u.jsx("mark",{className:"bg-yellow-100 px-1 text-ink-900 rounded",children:l},`h-${t++}`)):e.push(l)})}),e};function df({user:n,onLoginClick:e,onLogoutClick:t,activeSlug:r,onCategoryClick:o,onSearch:l}){const[i,a]=h.useState(!1),[s,c]=h.useState(!1),[m,A]=h.useState(!1),[I,y]=h.useState(""),v=hr(),S=d=>p=>{if(p.preventDefault(),window.location.pathname.endsWith("/")||window.location.pathname.includes("/category/")){const f=document.getElementById(d);if(f){f.scrollIntoView({behavior:"smooth",block:"start"});return}}v("/"),setTimeout(()=>{var f;(f=document.getElementById(d))==null||f.scrollIntoView({behavior:"smooth",block:"start"})},80)};h.useEffect(()=>{const d=()=>a(window.scrollY>8);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const P=h.useMemo(()=>{const d=new Date,p=["일","월","화","수","목","금","토"][d.getDay()];return`${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 ${p}요일`},[]);return u.jsxs("header",{className:`sticky top-0 z-50 bg-white border-b transition-shadow ${i?"shadow-sm border-ink-200":"border-ink-100"}`,children:[u.jsx("div",{className:"bg-brand text-white text-xs",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 h-8 flex items-center justify-between",children:[u.jsx("span",{className:"mono tracking-wide",children:P}),u.jsxs("div",{className:"hidden sm:flex items-center gap-4",children:[u.jsx("a",{href:"#about",onClick:S("footer-about"),className:"hover:text-brand-tint cursor-pointer",children:"소개"}),u.jsx("a",{href:"#advertise",onClick:S("footer-advertise"),className:"hover:text-brand-tint cursor-pointer",children:"광고 문의"}),u.jsx("a",{href:"#newsletter",onClick:S("newsletter"),className:"hover:text-brand-tint cursor-pointer",children:"뉴스레터"}),n?u.jsxs("button",{onClick:t,className:"hover:text-brand-tint",children:[n.name||n.email," · 로그아웃"]}):u.jsx("button",{onClick:e,className:"hover:text-brand-tint",children:"로그인"})]})]})}),u.jsxs("div",{className:"max-w-page mx-auto px-4 py-5 flex items-center justify-between",children:[u.jsxs(He,{to:"/",className:"text-left group","aria-label":"홈으로",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[u.jsx("h1",{className:"headline-serif text-3xl md:text-4xl text-brand leading-none",children:cr}),u.jsx("p",{className:"text-[11px] text-ink-400 mt-1 tracking-widest uppercase",children:uf})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>A(d=>!d),className:"w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"검색",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"})})}),u.jsx("button",{onClick:()=>c(d=>!d),className:"md:hidden w-10 h-10 rounded-full hover:bg-ink-50 flex items-center justify-center","aria-label":"메뉴",children:u.jsx("svg",{className:"w-5 h-5 text-ink-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),m&&u.jsx("div",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4 py-3",children:u.jsxs("form",{onSubmit:d=>{d.preventDefault(),l(I),A(!1)},className:"flex gap-2",children:[u.jsx("input",{autoFocus:!0,value:I,onChange:d=>y(d.target.value),placeholder:"키워드로 검색…",className:"flex-1 px-4 py-2.5 border border-ink-200 rounded-none focus:border-brand outline-none text-[15px]"}),u.jsx("button",{type:"submit",className:"px-5 py-2.5 bg-brand text-white text-sm font-semibold",children:"검색"})]})})}),u.jsx("nav",{className:"border-t border-ink-100 bg-white",children:u.jsx("div",{className:"max-w-page mx-auto px-4",children:u.jsx("ul",{className:`flex items-center gap-1 overflow-x-auto no-scrollbar ${s?"flex-wrap":""}`,children:yt.map(d=>{const p=r===d.slug;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>{o(d.slug),c(!1)},className:`relative whitespace-nowrap px-4 py-3 text-sm font-bold transition-colors ${p?"text-brand":"text-ink-700 hover:text-brand"}`,children:[d.name,p&&u.jsx("span",{className:"absolute left-4 right-4 bottom-0 h-0.5 bg-brand"})]})},d.slug)})})})})]})}function pf({items:n,onClick:e}){return n.length?u.jsx("div",{className:"ticker",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 flex items-center gap-4 h-10",children:[u.jsx("span",{className:"ticker-label",children:"BREAKING"}),u.jsx("div",{className:"flex-1 overflow-hidden",children:u.jsx("div",{className:"flex gap-10 animate-marquee whitespace-nowrap",children:[...n,...n].map((t,r)=>u.jsxs("button",{onClick:()=>e(t),className:"hover:underline",children:["• ",t.title]},`${t.id}-${r}`))})})]})}):null}function ff({articles:n,onOpen:e}){if(n.length===0)return null;const[t,...r]=n,o=r.slice(0,2);return u.jsx("section",{className:"max-w-page mx-auto px-4 py-8",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-hero gap-6",children:[u.jsxs("article",{onClick:()=>e(t),className:"card cursor-pointer group",children:[u.jsx("div",{className:"card-img-wrap aspect-[16/9]",children:u.jsx("img",{src:Co(t,fn(t)),srcSet:pc()||void 0,sizes:"(min-width: 1024px) 800px, 100vw",onError:Po(fn(t)),alt:"",className:"card-img",loading:"eager"})}),u.jsxs("div",{className:"p-6",children:[u.jsx(Mo,{slug:fn(t),breaking:t.breaking}),u.jsx("h2",{className:"headline-serif text-3xl md:text-[2.25rem] leading-tight mt-3 mb-3 hl clamp-3",children:t.title}),u.jsx("p",{className:"text-ink-500 clamp-2 text-[15px] leading-relaxed",children:t.summary}),u.jsxs("div",{className:"mt-4 text-xs text-ink-400 mono",children:[t.author||"Prompt Daily 편집팀"," · ",Ii(t.date)]})]})]}),u.jsx("div",{className:"flex flex-col gap-5",children:o.map(l=>u.jsxs("article",{onClick:()=>e(l),className:"card cursor-pointer flex gap-4 p-4",children:[u.jsx("div",{className:"card-img-wrap w-32 h-24 flex-shrink-0",children:u.jsx("img",{src:Co(l,fn(l)),onError:Po(fn(l)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx(Mo,{slug:fn(l),breaking:l.breaking,small:!0}),u.jsx("h3",{className:"font-bold text-[15px] leading-snug mt-1 hl clamp-3",children:l.title}),u.jsx("div",{className:"mt-2 text-[11px] text-ink-400 mono",children:Ii(l.date)})]})]},l.id))})]})})}function Mo({slug:n,breaking:e,small:t}){const r=mi[n]||yt[0],o=t?"px-1.5 py-0.5 text-[10px]":"px-2 py-1 text-[11px]";return u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:`${o} font-bold tracking-widest uppercase text-white`,style:{backgroundColor:r.color},children:r.name}),e&&u.jsx("span",{className:`${o} font-bold tracking-widest uppercase text-white bg-accent-red`,children:"속보"})]})}function hi({article:n,size:e="md",onClick:t}){const r=e==="lg";return u.jsxs("article",{onClick:()=>t(n),className:"card cursor-pointer",children:[u.jsx("div",{className:`card-img-wrap ${r?"aspect-[16/10]":"aspect-[4/3]"}`,children:u.jsx("img",{src:Co(n,fn(n)),onError:Po(fn(n)),alt:"",className:"card-img",loading:"lazy"})}),u.jsxs("div",{className:r?"p-5":"p-4",children:[u.jsx(Mo,{slug:fn(n),breaking:n.breaking,small:!r}),u.jsx("h3",{className:`hl font-bold mt-2 mb-2 clamp-3 ${r?"text-headline-md":"text-[15px]"}`,children:n.title}),u.jsx("p",{className:"text-ink-500 text-[13px] clamp-2",children:n.summary}),u.jsxs("div",{className:"mt-3 flex items-center justify-between text-[11px] text-ink-400 mono",children:[u.jsx("span",{children:Ii(n.date)}),u.jsx("span",{children:n.readTime||"5분"})]})]})]})}function Af({category:n,articles:e,onOpen:t}){if(e.length===0)return null;const[r,...o]=e,l=o.slice(0,3);return u.jsxs("section",{className:"py-10",id:`section-${n.slug}`,children:[u.jsxs("div",{className:"flex items-end justify-between mb-6",children:[u.jsx(He,{to:`/category/${n.slug}`,className:"section-label hover:opacity-70 transition-opacity",style:{color:n.color,borderColor:n.color},children:n.name}),u.jsx(He,{to:`/category/${n.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-xs text-ink-500 hover:text-brand font-semibold",children:"더보기 →"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[u.jsx("div",{className:"md:col-span-2 md:row-span-1",children:u.jsx(hi,{article:r,size:"lg",onClick:t})}),l.map(i=>u.jsx(hi,{article:i,onClick:t},i.id))]})]})}function mf({articles:n,onOpen:e}){return u.jsxs("aside",{className:"sticky top-40",children:[u.jsx("div",{className:"section-label mb-5",children:"MOST VIEWED"}),u.jsx("ol",{className:"space-y-4",children:n.slice(0,10).map((t,r)=>{var o;return u.jsx("li",{children:u.jsxs("button",{onClick:()=>e(t),className:"flex gap-3 text-left w-full group",children:[u.jsx("span",{className:`rank-num ${r<3?"top-three":""}`,children:String(r+1).padStart(2,"0")}),u.jsxs("div",{className:"flex-1 min-w-0 pb-4 border-b border-ink-100",children:[u.jsx("div",{className:"text-[10px] text-ink-400 mono uppercase tracking-wider mb-1",children:((o=fc[t.category])==null?void 0:o.name)||t.category}),u.jsx("h4",{className:"text-[14px] font-semibold leading-snug hl clamp-3",children:t.title})]})]})},t.id)})})]})}function If({email:n,setEmail:e,subscribed:t,onSubmit:r}){return u.jsx("section",{id:"newsletter",className:"bg-brand text-white py-14 my-10",children:u.jsxs("div",{className:"max-w-2xl mx-auto px-4 text-center",children:[u.jsx("div",{className:"inline-block px-3 py-1 bg-accent-red text-[10px] font-bold tracking-widest uppercase mb-4",children:"NEWSLETTER"}),u.jsx("h2",{className:"headline-serif text-3xl md:text-4xl mb-3",children:"매일 아침, 한 잔의 AI"}),u.jsx("p",{className:"text-brand-tint mb-7 text-[15px]",children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 7개만 골라, 매일 아침 7시에 전해드립니다."}),u.jsxs("form",{onSubmit:r,className:"flex gap-2 max-w-md mx-auto",children:[u.jsx("input",{type:"email",required:!0,value:n,onChange:o=>e(o.target.value),placeholder:"이메일 주소",className:"flex-1 px-4 py-3 text-ink-900 border-0 focus:outline-none focus:ring-2 focus:ring-white"}),u.jsx("button",{type:"submit",className:"px-6 py-3 bg-white text-brand font-bold hover:bg-brand-tint",children:t?"구독완료":"구독하기"})]})]})})}const hf=[{label:"X",url:"https://x.com/",title:"X (Twitter)"},{label:"FB",url:"https://facebook.com/",title:"Facebook"},{label:"IN",url:"https://instagram.com/",title:"Instagram"},{label:"YT",url:"https://youtube.com/",title:"YouTube"}];function mc(){const[n,e]=h.useState(null);return u.jsxs(u.Fragment,{children:[u.jsx("footer",{className:"bg-ink-900 text-ink-300 mt-20",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[u.jsxs("div",{className:"md:col-span-2",id:"footer-about",children:[u.jsx(He,{to:"/",className:"inline-block",children:u.jsx("h3",{className:"headline-serif text-2xl text-white mb-3 hover:text-brand-tint transition-colors",children:cr})}),u.jsx("p",{className:"text-sm text-ink-400 mb-4 max-w-md",children:"매일 아침 전해지는 AI 뉴스와 인사이트. 쏟아지는 정보 속 꼭 알아야 할 것만 골라드립니다."}),u.jsx("div",{className:"flex gap-3",children:hf.map(t=>u.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer noopener",title:t.title,"aria-label":t.title,className:"w-9 h-9 border border-ink-700 hover:border-white hover:text-white flex items-center justify-center text-xs font-bold transition-colors",children:t.label},t.label))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"카테고리"}),u.jsx("ul",{className:"space-y-2 text-sm",children:yt.slice(1).map(t=>u.jsx("li",{children:u.jsx(He,{to:`/category/${t.slug}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"hover:text-white transition-colors",children:t.name})},t.slug))})]}),u.jsxs("div",{id:"footer-advertise",children:[u.jsx("h4",{className:"text-white text-sm font-bold mb-3 tracking-wider uppercase",children:"회사"}),u.jsxs("ul",{className:"space-y-2 text-sm",children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>e("about"),className:"hover:text-white transition-colors",children:"소개"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>e("advertise"),className:"hover:text-white transition-colors",children:"광고 문의"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>e("contact"),className:"hover:text-white transition-colors",children:"제보하기"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>e("terms"),className:"hover:text-white transition-colors",children:"이용약관"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>e("privacy"),className:"hover:text-white transition-colors",children:"개인정보처리방침"})})]})]})]}),u.jsxs("div",{className:"border-t border-ink-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-xs text-ink-400",children:[u.jsxs("p",{children:["© 2026 GIGA GLOBAL STUDIO · ",cr,". All rights reserved."]}),u.jsx("p",{className:"mono mt-2 md:mt-0",children:"v2.1 · Magazine Edition"})]})]})}),n&&u.jsx(Sf,{kind:n,onClose:()=>e(null)})]})}const gf={about:{title:"소개",body:u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Prompt Daily"}),"는 매일 아침 AI가 바꾸는 세상을 기록합니다."]}),u.jsx("p",{children:"쏟아지는 AI 뉴스 중 꼭 알아야 할 것만 7개 카테고리 — 모델 · 기업 · 연구 · 도구 · 프롬프트 · 정책 · 컬처 — 로 정리해 전해드립니다."}),u.jsx("p",{className:"text-ink-400 text-sm",children:"© GIGA GLOBAL STUDIO"})]})},advertise:{title:"광고 문의",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"브랜드·프로덕트·채용 광고 문의는 이메일로 받고 있습니다."}),u.jsx("p",{className:"mono text-brand",children:"ads@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"평균 응답 시간: 영업일 기준 24시간 이내"})]})},contact:{title:"제보하기",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"AI 업계 소식·인사이트 제보를 환영합니다."}),u.jsx("p",{className:"mono text-brand",children:"tips@promptdaily.example"}),u.jsx("p",{className:"text-ink-500 text-sm",children:"익명 제보도 가능합니다. 제보자 신원은 철저히 보호됩니다."})]})},terms:{title:"이용약관",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"본 사이트는 정보 제공을 목적으로 운영되며, 게재된 모든 콘텐츠의 저작권은 Prompt Daily 및 원저작자에게 있습니다."}),u.jsx("p",{children:"무단 복제·배포·2차 저작물 작성을 금지합니다. 기사 본문의 인용은 출처 표기 시 허용됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 약관 문서는 준비 중입니다."})]})},privacy:{title:"개인정보처리방침",body:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Prompt Daily는 뉴스레터 구독 외에는 사용자의 개인정보를 수집하지 않습니다."}),u.jsx("p",{children:"구독자 이메일은 뉴스레터 발송 목적으로만 사용되며, 제3자에게 제공되지 않습니다."}),u.jsx("p",{children:"구독 해지는 발송되는 모든 메일 하단의 링크를 통해 즉시 처리됩니다."}),u.jsx("p",{className:"text-ink-500 text-sm",children:"정식 방침 문서는 준비 중입니다."})]})}};function Sf({kind:n,onClose:e}){const t=gf[n];return h.useEffect(()=>{const r=o=>o.key==="Escape"&&e();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e]),t?u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in",onClick:e,children:u.jsxs("div",{className:"bg-white max-w-lg w-full p-8 relative",onClick:r=>r.stopPropagation(),role:"dialog","aria-modal":"true",children:[u.jsx("button",{onClick:e,"aria-label":"닫기",className:"absolute top-4 right-4 w-8 h-8 hover:bg-ink-50 flex items-center justify-center text-ink-400",children:u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-4",children:t.title}),u.jsx("div",{className:"space-y-3 text-ink-700 text-[15px] leading-relaxed",children:t.body})]})}):null}function yf({article:n,onBack:e}){h.useEffect(()=>{window.scrollTo(0,0)},[n.id]),h.useEffect(()=>(cc({title:`${n.title} — ${cr}`,description:n.summary,image:n.image,type:"article",publishedTime:n.date}),()=>dc()),[n.id]),h.useEffect(()=>{},[n.id]);const t=typeof window<"u"?window.location.href:"",r=()=>{var o;(o=navigator.clipboard)==null||o.writeText(t)};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsx("header",{className:"sticky top-0 bg-white/95 backdrop-blur border-b border-ink-100 z-50",children:u.jsxs("div",{className:"max-w-3xl mx-auto px-4 h-14 flex items-center justify-between",children:[u.jsx("button",{onClick:e,className:"headline-serif text-xl text-brand",children:cr}),u.jsxs("button",{onClick:e,className:"text-sm text-ink-500 hover:text-brand flex items-center gap-1",children:[u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]})]})}),u.jsxs("article",{className:"max-w-3xl mx-auto px-4 py-10",children:[u.jsx(Mo,{slug:fn(n),breaking:n.breaking}),u.jsx("h1",{className:"headline-serif text-3xl md:text-[2.5rem] leading-tight mt-4 mb-6",children:n.title}),u.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500 mb-8 pb-6 border-b border-ink-200",children:[u.jsx("span",{className:"font-semibold text-ink-700",children:n.author||"Prompt Daily 편집팀"}),u.jsx("span",{children:"·"}),u.jsx("span",{className:"mono",children:Ac(n.date)}),u.jsx("span",{children:"·"}),u.jsxs("span",{children:[n.readTime||"5분"," 읽기"]})]}),u.jsx("img",{src:Co(n,fn(n)),srcSet:pc()||void 0,sizes:"(min-width: 768px) 768px, 100vw",onError:Po(fn(n)),alt:"",className:"w-full mb-8"}),u.jsx("div",{className:"border-l-4 border-brand bg-brand-tint p-5 mb-10 serif text-lg text-brand-dark",children:n.summary}),u.jsx("div",{className:"article-body",children:cf(n.content)}),u.jsxs("div",{className:"mt-12 pt-8 border-t border-ink-200 flex items-center gap-3 flex-wrap",children:[u.jsx("span",{className:"text-sm text-ink-500",children:"공유:"}),u.jsx("a",{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(n.title)}&url=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"X"}),u.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"Facebook"}),u.jsx("button",{onClick:r,className:"px-4 py-2 border border-ink-200 text-sm hover:border-brand hover:text-brand",children:"링크 복사"})]})]}),u.jsx(mc,{})]})}function vf({onClose:n,onSuccess:e}){const[t,r]=h.useState(!1),[o,l]=h.useState(""),i=async a=>{r(!0),l("");try{const s=await a();s.success&&e(s.user)}catch(s){l(s.error||"로그인에 실패했습니다.")}r(!1)};return u.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4",onClick:n,children:u.jsxs("div",{className:"bg-white max-w-sm w-full p-8",onClick:a=>a.stopPropagation(),children:[u.jsx("h2",{className:"headline-serif text-2xl text-brand mb-2",children:"로그인"}),u.jsx("p",{className:"text-sm text-ink-500 mb-6",children:"구독과 스크랩을 위해 로그인해주세요"}),o&&u.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 text-sm",children:o}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("button",{disabled:t,onClick:()=>i(Zp),className:"w-full py-3 bg-[#FEE500] text-black font-bold flex items-center justify-center gap-2 disabled:opacity-50",children:"카카오로 로그인"}),u.jsx("button",{disabled:t,onClick:()=>i(ef),className:"w-full py-3 border border-ink-200 font-bold flex items-center justify-center gap-2 hover:border-ink-300 disabled:opacity-50",children:"Google로 로그인"})]}),u.jsx("button",{onClick:n,className:"mt-6 w-full text-sm text-ink-500 hover:text-brand",children:"닫기"})]})})}function Cf(){const[n,e]=h.useState(()=>Jp.articles||[]),[t,r]=h.useState(null),[o,l]=h.useState("static");return h.useEffect(()=>{},[]),{articles:n,liveMostViewed:t,dataSource:o}}function Us({store:n,ui:e}){var P;const{articles:t,liveMostViewed:r}=n,o=hr(),l=oc(),i=d=>o(`/article/${d.id}`),a=l.slug&&mi[l.slug]?l.slug:"all",[s,c]=h.useState("");h.useEffect(()=>{dc()},[]),h.useEffect(()=>{c("")},[a]);const m=h.useMemo(()=>{let d=t;if(a!=="all"&&(d=d.filter(p=>fn(p)===a)),s){const p=s.toLowerCase();d=d.filter(f=>f.title.toLowerCase().includes(p)||(f.summary||"").toLowerCase().includes(p))}return d},[t,a,s]),A=h.useMemo(()=>{const d=m.filter(f=>f.breaking),p=m.filter(f=>!f.breaking);return[...d,...p].slice(0,3)},[m]),I=h.useMemo(()=>t.filter(d=>d.breaking).slice(0,6),[t]),y=h.useMemo(()=>r&&r.length>0?r:[...t].sort((d,p)=>new Date(p.date)-new Date(d.date)).slice(0,10),[t,r]),v=h.useMemo(()=>yt.slice(1).map(d=>({category:d,items:m.filter(p=>fn(p)===d.slug).slice(0,4)})).filter(d=>d.items.length>0),[m]),S=d=>{o(d==="all"?"/":`/category/${d}`),window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsx(df,{user:e.user,onLoginClick:e.onLoginClick,onLogoutClick:e.onLogoutClick,activeSlug:a,onCategoryClick:S,onSearch:c}),u.jsx(pf,{items:I,onClick:i}),s&&u.jsx("div",{className:"bg-brand-tint border-b border-brand/10",children:u.jsxs("div",{className:"max-w-page mx-auto px-4 py-3 text-sm text-brand",children:[u.jsxs("strong",{children:['"',s,'"']})," 검색결과 ",m.length,"건",u.jsx("button",{onClick:()=>c(""),className:"ml-3 underline",children:"초기화"})]})}),A.length>0&&u.jsx(ff,{articles:A,onOpen:i}),u.jsxs("div",{className:"max-w-page mx-auto px-4",children:[u.jsx("hr",{className:"hr-double"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-magazine gap-10",children:[u.jsx("main",{children:a==="all"?v.map(({category:d,items:p})=>u.jsx(Af,{category:d,articles:p,onOpen:i},d.slug)):u.jsxs("section",{className:"py-10",children:[u.jsx("div",{className:"section-label mb-6",children:((P=mi[a])==null?void 0:P.name)||"전체"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:m.map(d=>u.jsx(hi,{article:d,onClick:i},d.id))}),m.length===0&&u.jsx("p",{className:"text-center py-20 text-ink-400",children:"해당 카테고리의 기사가 없습니다."})]})}),u.jsx(mf,{articles:y,onOpen:i})]})]}),u.jsx(If,{email:e.email,setEmail:e.setEmail,subscribed:e.subscribed,onSubmit:e.onSubscribe}),u.jsx(mc,{})]})}function Pf({store:n}){const{id:e}=oc(),t=hr(),r=n.articles.find(o=>String(o.id)===String(e));return n.dataSource==="loading"?u.jsx("div",{className:"min-h-screen flex items-center justify-center text-ink-400",children:"불러오는 중…"}):r?u.jsx(yf,{article:r,onBack:()=>t("/")}):u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[u.jsx("p",{className:"text-ink-500",children:"해당 기사를 찾을 수 없습니다."}),u.jsx(He,{to:"/",className:"text-brand underline",children:"홈으로"})]})}function Mf(){const n=Cf(),[e,t]=h.useState(""),[r,o]=h.useState(!1),[l,i]=h.useState(null),[a,s]=h.useState(!1);h.useEffect(()=>{const I=localStorage.getItem("prompt_daily_user");I&&i(JSON.parse(I))},[]);const A={user:l,email:e,setEmail:t,subscribed:r,onSubscribe:async I=>{I.preventDefault(),e&&(o(!0),setTimeout(()=>{t(""),o(!1)},3e3))},onLoginClick:()=>s(!0),onLogoutClick:async()=>{await tf(),localStorage.removeItem("prompt_daily_user"),i(null)}};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsxs(Hp,{children:[u.jsx(_e,{path:"/",element:u.jsx(Us,{store:n,ui:A})}),u.jsx(_e,{path:"/article/:id",element:u.jsx(Pf,{store:n})}),u.jsx(_e,{path:"/category/:slug",element:u.jsx(Us,{store:n,ui:A})}),u.jsx(_e,{path:"/admin/*",element:u.jsx(sf,{})}),u.jsx(_e,{path:"*",element:u.jsx(Bp,{to:"/",replace:!0})})]}),!1,a&&u.jsx(vf,{onClose:()=>s(!1),onSuccess:I=>{i(I),localStorage.setItem("prompt_daily_user",JSON.stringify(I)),s(!1)}})]})}const Tf="/ai-news-daily/".replace(/\/$/,"")||"/";Sl.createRoot(document.getElementById("root")).render(u.jsx(Js.StrictMode,{children:u.jsx(Xp,{basename:Tf,children:u.jsx(Mf,{})})}));
