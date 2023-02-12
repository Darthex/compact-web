(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ia={},t1={get exports(){return ia},set exports(t){ia=t}},Ja={},wt={},n1={get exports(){return wt},set exports(t){wt=t}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=Symbol.for("react.element"),r1=Symbol.for("react.portal"),i1=Symbol.for("react.fragment"),s1=Symbol.for("react.strict_mode"),o1=Symbol.for("react.profiler"),a1=Symbol.for("react.provider"),l1=Symbol.for("react.context"),u1=Symbol.for("react.forward_ref"),c1=Symbol.for("react.suspense"),h1=Symbol.for("react.memo"),d1=Symbol.for("react.lazy"),hf=Symbol.iterator;function f1(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,zm={};function ci(t,e,n){this.props=t,this.context=e,this.refs=zm,this.updater=n||bm}ci.prototype.isReactComponent={};ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bm(){}Bm.prototype=ci.prototype;function ah(t,e,n){this.props=t,this.context=e,this.refs=zm,this.updater=n||bm}var lh=ah.prototype=new Bm;lh.constructor=ah;Vm(lh,ci.prototype);lh.isPureReactComponent=!0;var df=Array.isArray,jm=Object.prototype.hasOwnProperty,uh={current:null},Hm={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jm.call(e,r)&&!Hm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$s,type:t,key:s,ref:o,props:i,_owner:uh.current}}function p1(t,e){return{$$typeof:$s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===$s}function m1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ff=/\/+/g;function Kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m1(""+t.key):e.toString(36)}function Fo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $s:case r1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kl(o,0):r,df(i)?(n="",t!=null&&(n=t.replace(ff,"$&/")+"/"),Fo(i,e,n,"",function(u){return u})):i!=null&&(ch(i)&&(i=p1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ff,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",df(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Kl(s,a);o+=Fo(s,e,n,l,i)}else if(l=f1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Kl(s,a++),o+=Fo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function po(t,e,n){if(t==null)return t;var r=[],i=0;return Fo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function g1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},bo={transition:null},y1={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:bo,ReactCurrentOwner:uh};j.Children={map:po,forEach:function(t,e,n){po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return po(t,function(){e++}),e},toArray:function(t){return po(t,function(e){return e})||[]},only:function(t){if(!ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=ci;j.Fragment=i1;j.Profiler=o1;j.PureComponent=ah;j.StrictMode=s1;j.Suspense=c1;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jm.call(e,l)&&!Hm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$s,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:l1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a1,_context:t},t.Consumer=t};j.createElement=qm;j.createFactory=function(t){var e=qm.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:u1,render:t}};j.isValidElement=ch;j.lazy=function(t){return{$$typeof:d1,_payload:{_status:-1,_result:t},_init:g1}};j.memo=function(t,e){return{$$typeof:h1,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=bo.transition;bo.transition={};try{t()}finally{bo.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return We.current.useCallback(t,e)};j.useContext=function(t){return We.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return We.current.useDeferredValue(t)};j.useEffect=function(t,e){return We.current.useEffect(t,e)};j.useId=function(){return We.current.useId()};j.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return We.current.useMemo(t,e)};j.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};j.useRef=function(t){return We.current.useRef(t)};j.useState=function(t){return We.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return We.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(n1);const ji=Fm(wt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=wt,w1=Symbol.for("react.element"),E1=Symbol.for("react.fragment"),_1=Object.prototype.hasOwnProperty,S1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I1={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_1.call(e,r)&&!I1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:w1,type:t,key:s,ref:o,props:i,_owner:S1.current}}Ja.Fragment=E1;Ja.jsx=Wm;Ja.jsxs=Wm;(function(t){t.exports=Ja})(t1);const Q=ia.jsx,er=ia.jsxs;var $u={},T1={get exports(){return $u},set exports(t){$u=t}},st={},Uu={},k1={get exports(){return Uu},set exports(t){Uu=t}},Km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,b){var V=k.length;k.push(b);e:for(;0<V;){var ue=V-1>>>1,Ee=k[ue];if(0<i(Ee,b))k[ue]=b,k[V]=Ee,V=ue;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var b=k[0],V=k.pop();if(V!==b){k[0]=V;e:for(var ue=0,Ee=k.length,ho=Ee>>>1;ue<ho;){var Un=2*(ue+1)-1,Wl=k[Un],Fn=Un+1,fo=k[Fn];if(0>i(Wl,V))Fn<Ee&&0>i(fo,Wl)?(k[ue]=fo,k[Fn]=V,ue=Fn):(k[ue]=Wl,k[Un]=V,ue=Un);else if(Fn<Ee&&0>i(fo,V))k[ue]=fo,k[Fn]=V,ue=Fn;else break e}}return b}function i(k,b){var V=k.sortIndex-b.sortIndex;return V!==0?V:k.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=k)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function E(k){if(v=!1,m(k),!y)if(n(l)!==null)y=!0,Hl(I);else{var b=n(u);b!==null&&ql(E,b.startTime-k)}}function I(k,b){y=!1,v&&(v=!1,p(x),x=-1),g=!0;var V=d;try{for(m(b),h=n(l);h!==null&&(!(h.expirationTime>b)||k&&!pt());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,d=h.priorityLevel;var Ee=ue(h.expirationTime<=b);b=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),m(b)}else r(l);h=n(l)}if(h!==null)var ho=!0;else{var Un=n(u);Un!==null&&ql(E,Un.startTime-b),ho=!1}return ho}finally{h=null,d=V,g=!1}}var C=!1,N=null,x=-1,J=5,z=-1;function pt(){return!(t.unstable_now()-z<J)}function Si(){if(N!==null){var k=t.unstable_now();z=k;var b=!0;try{b=N(!0,k)}finally{b?Ii():(C=!1,N=null)}}else C=!1}var Ii;if(typeof f=="function")Ii=function(){f(Si)};else if(typeof MessageChannel<"u"){var cf=new MessageChannel,e1=cf.port2;cf.port1.onmessage=Si,Ii=function(){e1.postMessage(null)}}else Ii=function(){R(Si,0)};function Hl(k){N=k,C||(C=!0,Ii())}function ql(k,b){x=R(function(){k(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Hl(I))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var V=d;d=b;try{return k()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var V=d;d=k;try{return b()}finally{d=V}},t.unstable_scheduleCallback=function(k,b,V){var ue=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ue+V:ue):V=ue,k){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=V+Ee,k={id:c++,callback:b,priorityLevel:k,startTime:V,expirationTime:Ee,sortIndex:-1},V>ue?(k.sortIndex=V,e(u,k),n(l)===null&&k===n(u)&&(v?(p(x),x=-1):v=!0,ql(E,V-ue))):(k.sortIndex=Ee,e(l,k),y||g||(y=!0,Hl(I))),k},t.unstable_shouldYield=pt,t.unstable_wrapCallback=function(k){var b=d;return function(){var V=d;d=b;try{return k.apply(this,arguments)}finally{d=V}}}})(Km);(function(t){t.exports=Km})(k1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=wt,rt=Uu;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,ss={};function dr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(ss[t]=e,t=0;t<e.length;t++)Qm.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,C1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pf={},mf={};function N1(t){return Fu.call(mf,t)?!0:Fu.call(pf,t)?!1:C1.test(t)?mf[t]=!0:(pf[t]=!0,!1)}function A1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D1(t,e,n,r){if(e===null||typeof e>"u"||A1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){De[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];De[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){De[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){De[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){De[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){De[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){De[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){De[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){De[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var hh=/[\-:]([a-z])/g;function dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hh,dh);De[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hh,dh);De[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hh,dh);De[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){De[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){De[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function fh(t,e,n,r){var i=De.hasOwnProperty(e)?De[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D1(e,n,i,r)&&(n=null),r||i===null?N1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var en=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),gf=Symbol.iterator;function Ti(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Gl;function Pi(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Ql=!1;function Yl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pi(t):""}function R1(t){switch(t.tag){case 5:return Pi(t.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sr:return"Fragment";case _r:return"Portal";case bu:return"Profiler";case ph:return"StrictMode";case Vu:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xm:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gh:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case sn:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function O1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x1(t){var e=Zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function go(t){t._valueTracker||(t._valueTracker=x1(t))}function eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tg(t,e){e=e.checked,e!=null&&fh(t,"checked",e,!1)}function Hu(t,e){tg(t,e);var n=Nn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&qu(t,e.type,Nn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qu(t,e,n){(e!=="number"||sa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function $r(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(Li(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nn(n)}}function ng(t,e){var n=Nn(e.value),r=Nn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yo,ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P1=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(t){P1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hi[e]=Hi[t]})});function sg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hi.hasOwnProperty(t)&&Hi[t]?(""+e).trim():e+"px"}function og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var L1=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gu(t,e){if(e){if(L1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function Qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xu=null,Ur=null,Fr=null;function _f(t){if(t=bs(t)){if(typeof Xu!="function")throw Error(_(280));var e=t.stateNode;e&&(e=rl(e),Xu(t.stateNode,t.type,e))}}function ag(t){Ur?Fr?Fr.push(t):Fr=[t]:Ur=t}function lg(){if(Ur){var t=Ur,e=Fr;if(Fr=Ur=null,_f(t),e)for(t=0;t<e.length;t++)_f(e[t])}}function ug(t,e){return t(e)}function cg(){}var Xl=!1;function hg(t,e,n){if(Xl)return t(e,n);Xl=!0;try{return ug(t,e,n)}finally{Xl=!1,(Ur!==null||Fr!==null)&&(cg(),lg())}}function as(t,e){var n=t.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var Ju=!1;if(qt)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Ju=!1}function M1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var qi=!1,oa=null,aa=!1,Zu=null,$1={onError:function(t){qi=!0,oa=t}};function U1(t,e,n,r,i,s,o,a,l){qi=!1,oa=null,M1.apply($1,arguments)}function F1(t,e,n,r,i,s,o,a,l){if(U1.apply(this,arguments),qi){if(qi){var u=oa;qi=!1,oa=null}else throw Error(_(198));aa||(aa=!0,Zu=u)}}function fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(t){if(fr(t)!==t)throw Error(_(188))}function b1(t){var e=t.alternate;if(!e){if(e=fr(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sf(i),t;if(s===r)return Sf(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function fg(t){return t=b1(t),t!==null?pg(t):null}function pg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pg(t);if(e!==null)return e;t=t.sibling}return null}var mg=rt.unstable_scheduleCallback,If=rt.unstable_cancelCallback,V1=rt.unstable_shouldYield,z1=rt.unstable_requestPaint,ce=rt.unstable_now,B1=rt.unstable_getCurrentPriorityLevel,vh=rt.unstable_ImmediatePriority,gg=rt.unstable_UserBlockingPriority,la=rt.unstable_NormalPriority,j1=rt.unstable_LowPriority,yg=rt.unstable_IdlePriority,Za=null,Rt=null;function H1(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Za,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:K1,q1=Math.log,W1=Math.LN2;function K1(t){return t>>>=0,t===0?32:31-(q1(t)/W1|0)|0}var vo=64,wo=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ua(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mi(a):(s&=o,s!==0&&(r=Mi(s)))}else o=n&~i,o!==0?r=Mi(o):s!==0&&(r=Mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function G1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=G1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vg(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function Y1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eg,Eh,_g,Sg,Ig,tc=!1,Eo=[],mn=null,gn=null,yn=null,ls=new Map,us=new Map,an=[],X1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(t,e){switch(t){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":ls.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(e.pointerId)}}function Ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bs(e),e!==null&&Eh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function J1(t,e,n,r,i){switch(e){case"focusin":return mn=Ci(mn,t,e,n,r,i),!0;case"dragenter":return gn=Ci(gn,t,e,n,r,i),!0;case"mouseover":return yn=Ci(yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ls.set(s,Ci(ls.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,us.set(s,Ci(us.get(s)||null,t,e,n,r,i)),!0}return!1}function Tg(t){var e=Bn(t.target);if(e!==null){var n=fr(e);if(n!==null){if(e=n.tag,e===13){if(e=dg(n),e!==null){t.blockedOn=e,Ig(t.priority,function(){_g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yu=r,n.target.dispatchEvent(r),Yu=null}else return e=bs(n),e!==null&&Eh(e),t.blockedOn=n,!1;e.shift()}return!0}function kf(t,e,n){Vo(t)&&n.delete(e)}function Z1(){tc=!1,mn!==null&&Vo(mn)&&(mn=null),gn!==null&&Vo(gn)&&(gn=null),yn!==null&&Vo(yn)&&(yn=null),ls.forEach(kf),us.forEach(kf)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,tc||(tc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Z1)))}function cs(t){function e(i){return Ni(i,t)}if(0<Eo.length){Ni(Eo[0],t);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mn!==null&&Ni(mn,t),gn!==null&&Ni(gn,t),yn!==null&&Ni(yn,t),ls.forEach(e),us.forEach(e),n=0;n<an.length;n++)r=an[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&an.shift()}var br=en.ReactCurrentBatchConfig,ca=!0;function eE(t,e,n,r){var i=G,s=br.transition;br.transition=null;try{G=1,_h(t,e,n,r)}finally{G=i,br.transition=s}}function tE(t,e,n,r){var i=G,s=br.transition;br.transition=null;try{G=4,_h(t,e,n,r)}finally{G=i,br.transition=s}}function _h(t,e,n,r){if(ca){var i=nc(t,e,n,r);if(i===null)lu(t,e,r,ha,n),Tf(t,r);else if(J1(i,t,e,n,r))r.stopPropagation();else if(Tf(t,r),e&4&&-1<X1.indexOf(t)){for(;i!==null;){var s=bs(i);if(s!==null&&Eg(s),s=nc(t,e,n,r),s===null&&lu(t,e,r,ha,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lu(t,e,r,null,n)}}var ha=null;function nc(t,e,n,r){if(ha=null,t=yh(r),t=Bn(t),t!==null)if(e=fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ha=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B1()){case vh:return 1;case gg:return 4;case la:case j1:return 16;case yg:return 536870912;default:return 16}default:return 16}}var fn=null,Sh=null,zo=null;function Cg(){if(zo)return zo;var t,e=Sh,n=e.length,r,i="value"in fn?fn.value:fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zo=i.slice(t,1<r?1-r:void 0)}function Bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function Cf(){return!1}function ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:Cf,this.isPropagationStopped=Cf,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=ot(hi),Fs=oe({},hi,{view:0,detail:0}),nE=ot(Fs),Zl,eu,Ai,el=oe({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(Zl=t.screenX-Ai.screenX,eu=t.screenY-Ai.screenY):eu=Zl=0,Ai=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Nf=ot(el),rE=oe({},el,{dataTransfer:0}),iE=ot(rE),sE=oe({},Fs,{relatedTarget:0}),tu=ot(sE),oE=oe({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),aE=ot(oE),lE=oe({},hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uE=ot(lE),cE=oe({},hi,{data:0}),Af=ot(cE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fE[t])?!!e[t]:!1}function Th(){return pE}var mE=oe({},Fs,{key:function(t){if(t.key){var e=hE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gE=ot(mE),yE=oe({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=ot(yE),vE=oe({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),wE=ot(vE),EE=oe({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),_E=ot(EE),SE=oe({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IE=ot(SE),TE=[9,13,27,32],kh=qt&&"CompositionEvent"in window,Wi=null;qt&&"documentMode"in document&&(Wi=document.documentMode);var kE=qt&&"TextEvent"in window&&!Wi,Ng=qt&&(!kh||Wi&&8<Wi&&11>=Wi),Rf=String.fromCharCode(32),Of=!1;function Ag(t,e){switch(t){case"keyup":return TE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function CE(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(Of=!0,Rf);case"textInput":return t=e.data,t===Rf&&Of?null:t;default:return null}}function NE(t,e){if(Ir)return t==="compositionend"||!kh&&Ag(t,e)?(t=Cg(),zo=Sh=fn=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ng&&e.locale!=="ko"?null:e.data;default:return null}}var AE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AE[t.type]:e==="textarea"}function Rg(t,e,n,r){ag(r),e=da(e,"onChange"),0<e.length&&(n=new Ih("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ki=null,hs=null;function DE(t){zg(t,0)}function tl(t){var e=Cr(t);if(eg(e))return t}function RE(t,e){if(t==="change")return e}var Og=!1;if(qt){var nu;if(qt){var ru="oninput"in document;if(!ru){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),ru=typeof Pf.oninput=="function"}nu=ru}else nu=!1;Og=nu&&(!document.documentMode||9<document.documentMode)}function Lf(){Ki&&(Ki.detachEvent("onpropertychange",xg),hs=Ki=null)}function xg(t){if(t.propertyName==="value"&&tl(hs)){var e=[];Rg(e,hs,t,yh(t)),hg(DE,e)}}function OE(t,e,n){t==="focusin"?(Lf(),Ki=e,hs=n,Ki.attachEvent("onpropertychange",xg)):t==="focusout"&&Lf()}function xE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tl(hs)}function PE(t,e){if(t==="click")return tl(e)}function LE(t,e){if(t==="input"||t==="change")return tl(e)}function ME(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:ME;function ds(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fu.call(e,i)||!It(t[i],e[i]))return!1}return!0}function Mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $f(t,e){var n=Mf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mf(n)}}function Pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=sa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sa(t.document)}return e}function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $E(t){var e=Lg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pg(n.ownerDocument.documentElement,n)){if(r!==null&&Ch(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$f(n,s);var o=$f(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UE=qt&&"documentMode"in document&&11>=document.documentMode,Tr=null,rc=null,Gi=null,ic=!1;function Uf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ic||Tr==null||Tr!==sa(r)||(r=Tr,"selectionStart"in r&&Ch(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&ds(Gi,r)||(Gi=r,r=da(rc,"onSelect"),0<r.length&&(e=new Ih("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function So(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},iu={},Mg={};qt&&(Mg=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function nl(t){if(iu[t])return iu[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mg)return iu[t]=e[n];return t}var $g=nl("animationend"),Ug=nl("animationiteration"),Fg=nl("animationstart"),bg=nl("transitionend"),Vg=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,e){Vg.set(t,e),dr(e,[t])}for(var su=0;su<Ff.length;su++){var ou=Ff[su],FE=ou.toLowerCase(),bE=ou[0].toUpperCase()+ou.slice(1);xn(FE,"on"+bE)}xn($g,"onAnimationEnd");xn(Ug,"onAnimationIteration");xn(Fg,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(bg,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VE=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function bf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,F1(r,e,void 0,t),t.currentTarget=null}function zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;bf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;bf(i,a,u),s=l}}}if(aa)throw t=Zu,aa=!1,Zu=null,t}function Z(t,e){var n=e[uc];n===void 0&&(n=e[uc]=new Set);var r=t+"__bubble";n.has(r)||(Bg(e,t,2,!1),n.add(r))}function au(t,e,n){var r=0;e&&(r|=4),Bg(n,t,r,e)}var Io="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[Io]){t[Io]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(VE.has(n)||au(n,!1,t),au(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Io]||(e[Io]=!0,au("selectionchange",!1,e))}}function Bg(t,e,n,r){switch(kg(e)){case 1:var i=eE;break;case 4:i=tE;break;default:i=_h}n=i.bind(null,e,n,t),i=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Bn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}hg(function(){var u=s,c=yh(n),h=[];e:{var d=Vg.get(t);if(d!==void 0){var g=Ih,y=t;switch(t){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":g=gE;break;case"focusin":y="focus",g=tu;break;case"focusout":y="blur",g=tu;break;case"beforeblur":case"afterblur":g=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=iE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wE;break;case $g:case Ug:case Fg:g=aE;break;case bg:g=_E;break;case"scroll":g=nE;break;case"wheel":g=IE;break;case"copy":case"cut":case"paste":g=uE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Df}var v=(e&4)!==0,R=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=as(f,p),E!=null&&v.push(ps(f,E,m)))),R)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Yu&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[Wt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Bn(y):null,y!==null&&(R=fr(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Nf,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Df,E="onPointerLeave",p="onPointerEnter",f="pointer"),R=g==null?d:Cr(g),m=y==null?d:Cr(y),d=new v(E,f+"leave",g,n,c),d.target=R,d.relatedTarget=m,E=null,Bn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=R,E=v),R=E,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=vr(m))f++;for(m=0,E=p;E;E=vr(E))m++;for(;0<f-m;)v=vr(v),f--;for(;0<m-f;)p=vr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=vr(v),p=vr(p)}v=null}else v=null;g!==null&&Vf(h,d,g,v,!1),y!==null&&R!==null&&Vf(h,R,y,v,!0)}}e:{if(d=u?Cr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=RE;else if(xf(d))if(Og)I=LE;else{I=xE;var C=OE}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=PE);if(I&&(I=I(t,u))){Rg(h,I,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&qu(d,"number",d.value)}switch(C=u?Cr(u):window,t){case"focusin":(xf(C)||C.contentEditable==="true")&&(Tr=C,rc=u,Gi=null);break;case"focusout":Gi=rc=Tr=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Uf(h,n,c);break;case"selectionchange":if(UE)break;case"keydown":case"keyup":Uf(h,n,c)}var N;if(kh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ir?Ag(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Ng&&n.locale!=="ko"&&(Ir||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ir&&(N=Cg()):(fn=c,Sh="value"in fn?fn.value:fn.textContent,Ir=!0)),C=da(u,x),0<C.length&&(x=new Af(x,t,null,n,c),h.push({event:x,listeners:C}),N?x.data=N:(N=Dg(n),N!==null&&(x.data=N)))),(N=kE?CE(t,n):NE(t,n))&&(u=da(u,"onBeforeInput"),0<u.length&&(c=new Af("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}zg(h,e)})}function ps(t,e,n){return{instance:t,listener:e,currentTarget:n}}function da(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=as(t,n),s!=null&&r.unshift(ps(t,s,i)),s=as(t,e),s!=null&&r.push(ps(t,s,i))),t=t.return}return r}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=as(n,s),l!=null&&o.unshift(ps(n,l,a))):i||(l=as(n,s),l!=null&&o.push(ps(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zE=/\r\n?/g,BE=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(zE,`
`).replace(BE,"")}function To(t,e,n){if(e=zf(e),zf(t)!==e&&n)throw Error(_(425))}function fa(){}var sc=null,oc=null;function ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,jE=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,HE=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(qE)}:lc;function qE(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cs(e)}function vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var di=Math.random().toString(36).slice(2),At="__reactFiber$"+di,ms="__reactProps$"+di,Wt="__reactContainer$"+di,uc="__reactEvents$"+di,WE="__reactListeners$"+di,KE="__reactHandles$"+di;function Bn(t){var e=t[At];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[At]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jf(t);t!==null;){if(n=t[At])return n;t=jf(t)}return e}t=n,n=t.parentNode}return null}function bs(t){return t=t[At]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function rl(t){return t[ms]||null}var cc=[],Nr=-1;function Pn(t){return{current:t}}function te(t){0>Nr||(t.current=cc[Nr],cc[Nr]=null,Nr--)}function Y(t,e){Nr++,cc[Nr]=t.current,t.current=e}var An={},be=Pn(An),Ye=Pn(!1),tr=An;function Gr(t,e){var n=t.type.contextTypes;if(!n)return An;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(t){return t=t.childContextTypes,t!=null}function pa(){te(Ye),te(be)}function Hf(t,e,n){if(be.current!==An)throw Error(_(168));Y(be,e),Y(Ye,n)}function jg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,O1(t)||"Unknown",i));return oe({},n,r)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||An,tr=be.current,Y(be,t),Y(Ye,Ye.current),!0}function qf(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=jg(t,e,tr),r.__reactInternalMemoizedMergedChildContext=t,te(Ye),te(be),Y(be,t)):te(Ye),Y(Ye,n)}var Ut=null,il=!1,cu=!1;function Hg(t){Ut===null?Ut=[t]:Ut.push(t)}function GE(t){il=!0,Hg(t)}function Ln(){if(!cu&&Ut!==null){cu=!0;var t=0,e=G;try{var n=Ut;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,il=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),mg(vh,Ln),i}finally{G=e,cu=!1}}return null}var Ar=[],Dr=0,ga=null,ya=0,at=[],lt=0,nr=null,Ft=1,bt="";function bn(t,e){Ar[Dr++]=ya,Ar[Dr++]=ga,ga=t,ya=e}function qg(t,e,n){at[lt++]=Ft,at[lt++]=bt,at[lt++]=nr,nr=t;var r=Ft;t=bt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ft=1<<32-_t(e)+i|n<<i|r,bt=s+t}else Ft=1<<s|n<<i|r,bt=t}function Nh(t){t.return!==null&&(bn(t,1),qg(t,1,0))}function Ah(t){for(;t===ga;)ga=Ar[--Dr],Ar[Dr]=null,ya=Ar[--Dr],Ar[Dr]=null;for(;t===nr;)nr=at[--lt],at[lt]=null,bt=at[--lt],at[lt]=null,Ft=at[--lt],at[lt]=null}var tt=null,et=null,ne=!1,vt=null;function Wg(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=nr!==null?{id:Ft,overflow:bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dc(t){if(ne){var e=et;if(e){var n=e;if(!Wf(t,e)){if(hc(t))throw Error(_(418));e=vn(n.nextSibling);var r=tt;e&&Wf(t,e)?Wg(r,n):(t.flags=t.flags&-4097|2,ne=!1,tt=t)}}else{if(hc(t))throw Error(_(418));t.flags=t.flags&-4097|2,ne=!1,tt=t}}}function Kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function ko(t){if(t!==tt)return!1;if(!ne)return Kf(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ac(t.type,t.memoizedProps)),e&&(e=et)){if(hc(t))throw Kg(),Error(_(418));for(;e;)Wg(t,e),e=vn(e.nextSibling)}if(Kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?vn(t.stateNode.nextSibling):null;return!0}function Kg(){for(var t=et;t;)t=vn(t.nextSibling)}function Qr(){et=tt=null,ne=!1}function Dh(t){vt===null?vt=[t]:vt.push(t)}var QE=en.ReactCurrentBatchConfig;function gt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var va=Pn(null),wa=null,Rr=null,Rh=null;function Oh(){Rh=Rr=wa=null}function xh(t){var e=va.current;te(va),t._currentValue=e}function fc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vr(t,e){wa=t,Rh=Rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qe=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(Rh!==t)if(t={context:t,memoizedValue:e,next:null},Rr===null){if(wa===null)throw Error(_(308));Rr=t,wa.dependencies={lanes:0,firstContext:t}}else Rr=Rr.next=t;return e}var jn=null;function Ph(t){jn===null?jn=[t]:jn.push(t)}function Gg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kt(t,r)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var on=!1;function Lh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kt(t,n)}function jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wh(t,n)}}function Gf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ea(t,e,n,r){var i=t.updateQueue;on=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=oe({},h,d);break e;case 2:on=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ir|=o,t.lanes=o,t.memoizedState=h}}function Qf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Yg=new Gm.Component().refs;function pc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sl={isMounted:function(t){return(t=t._reactInternals)?fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=_n(t),s=jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(St(e,t,i,r),jo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=_n(t),s=jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(St(e,t,i,r),jo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=_n(t),i=jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=wn(t,i,r),e!==null&&(St(e,t,r,n),jo(e,t,r))}};function Yf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ds(n,r)||!ds(i,s):!0}function Xg(t,e,n){var r=!1,i=An,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Xe(e)?tr:be.current,r=e.contextTypes,s=(r=r!=null)?Gr(t,i):An),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sl.enqueueReplaceState(e,e.state,null)}function mc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Yg,Lh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Xe(e)?tr:be.current,i.context=Gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sl.enqueueReplaceState(i,i.state,null),Ea(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Yg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function Co(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jf(t){var e=t._init;return e(t._payload)}function Jg(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Sn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,E){return f===null||f.tag!==6?(f=yu(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,E){var I=m.type;return I===Sr?c(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sn&&Jf(I)===f.type)?(E=i(f,m.props),E.ref=Di(p,f,m),E.return=p,E):(E=Qo(m.type,m.key,m.props,null,p.mode,E),E.ref=Di(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=vu(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,E,I){return f===null||f.tag!==7?(f=Qn(m,p.mode,E,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=yu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mo:return m=Qo(f.type,f.key,f.props,null,p.mode,m),m.ref=Di(p,null,f),m.return=p,m;case _r:return f=vu(f,p.mode,m),f.return=p,f;case sn:var E=f._init;return h(p,E(f._payload),m)}if(Li(f)||Ti(f))return f=Qn(f,p.mode,m,null),f.return=p,f;Co(p,f)}return null}function d(p,f,m,E){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:return m.key===I?l(p,f,m,E):null;case _r:return m.key===I?u(p,f,m,E):null;case sn:return I=m._init,d(p,f,I(m._payload),E)}if(Li(m)||Ti(m))return I!==null?null:c(p,f,m,E,null);Co(p,m)}return null}function g(p,f,m,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(f,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case mo:return p=p.get(E.key===null?m:E.key)||null,l(f,p,E,I);case _r:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,I);case sn:var C=E._init;return g(p,f,m,C(E._payload),I)}if(Li(E)||Ti(E))return p=p.get(m)||null,c(f,p,E,I,null);Co(f,E)}return null}function y(p,f,m,E){for(var I=null,C=null,N=f,x=f=0,J=null;N!==null&&x<m.length;x++){N.index>x?(J=N,N=null):J=N.sibling;var z=d(p,N,m[x],E);if(z===null){N===null&&(N=J);break}t&&N&&z.alternate===null&&e(p,N),f=s(z,f,x),C===null?I=z:C.sibling=z,C=z,N=J}if(x===m.length)return n(p,N),ne&&bn(p,x),I;if(N===null){for(;x<m.length;x++)N=h(p,m[x],E),N!==null&&(f=s(N,f,x),C===null?I=N:C.sibling=N,C=N);return ne&&bn(p,x),I}for(N=r(p,N);x<m.length;x++)J=g(N,p,x,m[x],E),J!==null&&(t&&J.alternate!==null&&N.delete(J.key===null?x:J.key),f=s(J,f,x),C===null?I=J:C.sibling=J,C=J);return t&&N.forEach(function(pt){return e(p,pt)}),ne&&bn(p,x),I}function v(p,f,m,E){var I=Ti(m);if(typeof I!="function")throw Error(_(150));if(m=I.call(m),m==null)throw Error(_(151));for(var C=I=null,N=f,x=f=0,J=null,z=m.next();N!==null&&!z.done;x++,z=m.next()){N.index>x?(J=N,N=null):J=N.sibling;var pt=d(p,N,z.value,E);if(pt===null){N===null&&(N=J);break}t&&N&&pt.alternate===null&&e(p,N),f=s(pt,f,x),C===null?I=pt:C.sibling=pt,C=pt,N=J}if(z.done)return n(p,N),ne&&bn(p,x),I;if(N===null){for(;!z.done;x++,z=m.next())z=h(p,z.value,E),z!==null&&(f=s(z,f,x),C===null?I=z:C.sibling=z,C=z);return ne&&bn(p,x),I}for(N=r(p,N);!z.done;x++,z=m.next())z=g(N,p,x,z.value,E),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?x:z.key),f=s(z,f,x),C===null?I=z:C.sibling=z,C=z);return t&&N.forEach(function(Si){return e(p,Si)}),ne&&bn(p,x),I}function R(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Sr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:e:{for(var I=m.key,C=f;C!==null;){if(C.key===I){if(I=m.type,I===Sr){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sn&&Jf(I)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=Di(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Sr?(f=Qn(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=Qo(m.type,m.key,m.props,null,p.mode,E),E.ref=Di(p,f,m),E.return=p,p=E)}return o(p);case _r:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=vu(m,p.mode,E),f.return=p,p=f}return o(p);case sn:return C=m._init,R(p,f,C(m._payload),E)}if(Li(m))return y(p,f,m,E);if(Ti(m))return v(p,f,m,E);Co(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=yu(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return R}var Yr=Jg(!0),Zg=Jg(!1),Vs={},Ot=Pn(Vs),gs=Pn(Vs),ys=Pn(Vs);function Hn(t){if(t===Vs)throw Error(_(174));return t}function Mh(t,e){switch(Y(ys,e),Y(gs,t),Y(Ot,Vs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ku(e,t)}te(Ot),Y(Ot,e)}function Xr(){te(Ot),te(gs),te(ys)}function ey(t){Hn(ys.current);var e=Hn(Ot.current),n=Ku(e,t.type);e!==n&&(Y(gs,t),Y(Ot,n))}function $h(t){gs.current===t&&(te(Ot),te(gs))}var ie=Pn(0);function _a(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function Uh(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var Ho=en.ReactCurrentDispatcher,du=en.ReactCurrentBatchConfig,rr=0,se=null,me=null,Se=null,Sa=!1,Qi=!1,vs=0,YE=0;function Oe(){throw Error(_(321))}function Fh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function bh(t,e,n,r,i,s){if(rr=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ho.current=t===null||t.memoizedState===null?e_:t_,t=n(r,i),Qi){s=0;do{if(Qi=!1,vs=0,25<=s)throw Error(_(301));s+=1,Se=me=null,e.updateQueue=null,Ho.current=n_,t=n(r,i)}while(Qi)}if(Ho.current=Ia,e=me!==null&&me.next!==null,rr=0,Se=me=se=null,Sa=!1,e)throw Error(_(300));return t}function Vh(){var t=vs!==0;return vs=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?se.memoizedState=Se=t:Se=Se.next=t,Se}function ft(){if(me===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Se===null?se.memoizedState:Se.next;if(e!==null)Se=e,me=t;else{if(t===null)throw Error(_(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Se===null?se.memoizedState=Se=t:Se=Se.next=t}return Se}function ws(t,e){return typeof e=="function"?e(t):e}function fu(t){var e=ft(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,se.lanes|=c,ir|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,It(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,ir|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pu(t){var e=ft(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||(Qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ty(){}function ny(t,e){var n=se,r=ft(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,zh(sy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Es(9,iy.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(_(349));rr&30||ry(n,e,i)}return i}function ry(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iy(t,e,n,r){e.value=n,e.getSnapshot=r,oy(e)&&ay(t)}function sy(t,e,n){return n(function(){oy(e)&&ay(t)})}function oy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function ay(t){var e=Kt(t,1);e!==null&&St(e,t,1,-1)}function Zf(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},e.queue=t,t=t.dispatch=ZE.bind(null,se,t),[e.memoizedState,t]}function Es(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ly(){return ft().memoizedState}function qo(t,e,n,r){var i=Nt();se.flags|=t,i.memoizedState=Es(1|e,n,void 0,r===void 0?null:r)}function ol(t,e,n,r){var i=ft();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&Fh(r,o.deps)){i.memoizedState=Es(e,n,s,r);return}}se.flags|=t,i.memoizedState=Es(1|e,n,s,r)}function ep(t,e){return qo(8390656,8,t,e)}function zh(t,e){return ol(2048,8,t,e)}function uy(t,e){return ol(4,2,t,e)}function cy(t,e){return ol(4,4,t,e)}function hy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dy(t,e,n){return n=n!=null?n.concat([t]):null,ol(4,4,hy.bind(null,e,t),n)}function Bh(){}function fy(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function py(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function my(t,e,n){return rr&21?(It(n,e)||(n=vg(),se.lanes|=n,ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n)}function XE(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=du.transition;du.transition={};try{t(!1),e()}finally{G=n,du.transition=r}}function gy(){return ft().memoizedState}function JE(t,e,n){var r=_n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yy(t))vy(e,n);else if(n=Gg(t,e,n,r),n!==null){var i=qe();St(n,t,r,i),wy(n,e,r)}}function ZE(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yy(t))vy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,It(a,o)){var l=e.interleaved;l===null?(i.next=i,Ph(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Gg(t,e,i,r),n!==null&&(i=qe(),St(n,t,r,i),wy(n,e,r))}}function yy(t){var e=t.alternate;return t===se||e!==null&&e===se}function vy(t,e){Qi=Sa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wh(t,n)}}var Ia={readContext:dt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},e_={readContext:dt,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qo(4194308,4,hy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JE.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:Zf,useDebugValue:Bh,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=Zf(!1),e=t[0];return t=XE.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=Nt();if(ne){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),Ie===null)throw Error(_(349));rr&30||ry(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ep(sy.bind(null,r,s,t),[t]),r.flags|=2048,Es(9,iy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=Ie.identifierPrefix;if(ne){var n=bt,r=Ft;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},t_={readContext:dt,useCallback:fy,useContext:dt,useEffect:zh,useImperativeHandle:dy,useInsertionEffect:uy,useLayoutEffect:cy,useMemo:py,useReducer:fu,useRef:ly,useState:function(){return fu(ws)},useDebugValue:Bh,useDeferredValue:function(t){var e=ft();return my(e,me.memoizedState,t)},useTransition:function(){var t=fu(ws)[0],e=ft().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ny,useId:gy,unstable_isNewReconciler:!1},n_={readContext:dt,useCallback:fy,useContext:dt,useEffect:zh,useImperativeHandle:dy,useInsertionEffect:uy,useLayoutEffect:cy,useMemo:py,useReducer:pu,useRef:ly,useState:function(){return pu(ws)},useDebugValue:Bh,useDeferredValue:function(t){var e=ft();return me===null?e.memoizedState=t:my(e,me.memoizedState,t)},useTransition:function(){var t=pu(ws)[0],e=ft().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ny,useId:gy,unstable_isNewReconciler:!1};function Jr(t,e){try{var n="",r=e;do n+=R1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var r_=typeof WeakMap=="function"?WeakMap:Map;function Ey(t,e,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ka||(ka=!0,Cc=r),gc(t,e)},n}function _y(t,e,n){n=jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gc(t,e),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new r_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=y_.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jt(-1,1),e.tag=2,wn(n,e,1))),n.lanes|=1),t)}var i_=en.ReactCurrentOwner,Qe=!1;function je(t,e,n,r){e.child=t===null?Zg(e,null,n,r):Yr(e,t.child,n,r)}function ip(t,e,n,r,i){n=n.render;var s=e.ref;return Vr(e,i),r=bh(t,e,n,r,s,i),n=Vh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&n&&Nh(e),e.flags|=1,je(t,e,r,i),e.child)}function sp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sy(t,e,s,r,i)):(t=Qo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ds,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=Sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Sy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ds(s,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qe=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return yc(t,e,n,r,i)}function Iy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(xr,Ze),Ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(xr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(xr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(xr,Ze),Ze|=r;return je(t,e,i,n),e.child}function Ty(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yc(t,e,n,r,i){var s=Xe(n)?tr:be.current;return s=Gr(e,s),Vr(e,i),n=bh(t,e,n,r,s,i),r=Vh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&r&&Nh(e),e.flags|=1,je(t,e,n,i),e.child)}function op(t,e,n,r,i){if(Xe(n)){var s=!0;ma(e)}else s=!1;if(Vr(e,i),e.stateNode===null)Wo(t,e),Xg(e,n,r),mc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Xe(n)?tr:be.current,u=Gr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Xf(e,o,r,u),on=!1;var d=e.memoizedState;o.state=d,Ea(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ye.current||on?(typeof c=="function"&&(pc(e,n,c,r),l=e.memoizedState),(a=on||Yf(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=Xe(n)?tr:be.current,l=Gr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Xf(e,o,r,l),on=!1,d=e.memoizedState,o.state=d,Ea(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ye.current||on?(typeof g=="function"&&(pc(e,n,g,r),y=e.memoizedState),(u=on||Yf(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return vc(t,e,n,r,s,i)}function vc(t,e,n,r,i,s){Ty(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qf(e,n,!1),Gt(t,e,s);r=e.stateNode,i_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yr(e,t.child,null,s),e.child=Yr(e,null,a,s)):je(t,e,a,s),e.memoizedState=r.state,i&&qf(e,n,!0),e.child}function ky(t){var e=t.stateNode;e.pendingContext?Hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hf(t,e.context,!1),Mh(t,e.containerInfo)}function ap(t,e,n,r,i){return Qr(),Dh(i),e.flags|=256,je(t,e,n,r),e.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cy(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(ie,i&1),t===null)return dc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ul(o,r,0,null),t=Qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ec(n),e.memoizedState=wc,t):jh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return s_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sn(a,s):(s=Qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wc,r}return s=t.child,t=s.sibling,r=Sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jh(t,e){return e=ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function No(t,e,n,r){return r!==null&&Dh(r),Yr(e,t.child,null,n),t=jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function s_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mu(Error(_(422))),No(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ul({mode:"visible",children:r.children},i,0,null),s=Qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yr(e,t.child,null,o),e.child.memoizedState=Ec(o),e.memoizedState=wc,s);if(!(e.mode&1))return No(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=mu(s,r,void 0),No(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qe||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kt(t,i),St(r,t,i,-1))}return Qh(),r=mu(Error(_(421))),No(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=v_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=vn(i.nextSibling),tt=e,ne=!0,vt=null,t!==null&&(at[lt++]=Ft,at[lt++]=bt,at[lt++]=nr,Ft=t.id,bt=t.overflow,nr=e),e=jh(e,r.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fc(t.return,e,n)}function gu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ny(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_a(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_a(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gu(e,!0,n,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=Sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o_(t,e,n){switch(e.tag){case 3:ky(e),Qr();break;case 5:ey(e);break;case 1:Xe(e.type)&&ma(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(va,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Cy(t,e,n):(Y(ie,ie.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);Y(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ny(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Iy(t,e,n)}return Gt(t,e,n)}var Ay,_c,Dy,Ry;Ay=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};Dy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hn(Ot.current);var s=null;switch(n){case"input":i=ju(t,i),r=ju(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=Wu(t,i),r=Wu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fa)}Gu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ss.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ry=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ri(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function a_(t,e,n){var r=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Xe(e.type)&&pa(),xe(e),null;case 3:return r=e.stateNode,Xr(),te(Ye),te(be),Uh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(Dc(vt),vt=null))),_c(t,e),xe(e),null;case 5:$h(e);var i=Hn(ys.current);if(n=e.type,t!==null&&e.stateNode!=null)Dy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return xe(e),null}if(t=Hn(Ot.current),ko(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[At]=e,r[ms]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)Z($i[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":yf(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":wf(r,s),Z("invalid",r)}Gu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&To(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&To(r.textContent,a,t),i=["children",""+a]):ss.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":go(r),vf(r,s,!0);break;case"textarea":go(r),Ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[At]=e,t[ms]=r,Ay(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qu(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)Z($i[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":yf(t,r),i=ju(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",t);break;case"textarea":wf(t,r),i=Wu(t,r),Z("invalid",t);break;default:i=r}Gu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&os(t,l):typeof l=="number"&&os(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ss.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&fh(t,s,l,o))}switch(n){case"input":go(t),vf(t,r,!1);break;case"textarea":go(t),Ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$r(t,!!r.multiple,s,!1):r.defaultValue!=null&&$r(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)Ry(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=Hn(ys.current),Hn(Ot.current),ko(e)){if(r=e.stateNode,n=e.memoizedProps,r[At]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:To(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=e,e.stateNode=r}return xe(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&et!==null&&e.mode&1&&!(e.flags&128))Kg(),Qr(),e.flags|=98560,s=!1;else if(s=ko(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[At]=e}else Qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else vt!==null&&(Dc(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ge===0&&(ge=3):Qh())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return Xr(),_c(t,e),t===null&&fs(e.stateNode.containerInfo),xe(e),null;case 10:return xh(e.type._context),xe(e),null;case 17:return Xe(e.type)&&pa(),xe(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ri(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_a(t),o!==null){for(e.flags|=128,Ri(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>Zr&&(e.flags|=128,r=!0,Ri(s,!1),e.lanes=4194304)}else{if(!r)if(t=_a(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return xe(e),null}else 2*ce()-s.renderingStartTime>Zr&&n!==1073741824&&(e.flags|=128,r=!0,Ri(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ie.current,Y(ie,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return Gh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function l_(t,e){switch(Ah(e),e.tag){case 1:return Xe(e.type)&&pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),te(Ye),te(be),Uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $h(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));Qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Xr(),null;case 10:return xh(e.type._context),null;case 22:case 23:return Gh(),null;case 24:return null;default:return null}}var Ao=!1,Le=!1,u_=typeof WeakSet=="function"?WeakSet:Set,T=null;function Or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Sc(t,e,n){try{n()}catch(r){ae(t,e,r)}}var up=!1;function c_(t,e){if(sc=ca,t=Lg(),Ch(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oc={focusedElem:t,selectionRange:n},ca=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,R=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:gt(e.type,v),R);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(E){ae(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=up,up=!1,y}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sc(e,n,s)}i=i.next}while(i!==r)}}function al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Oy(t){var e=t.alternate;e!==null&&(t.alternate=null,Oy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[At],delete e[ms],delete e[uc],delete e[WE],delete e[KE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xy(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fa));else if(r!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}function kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kc(t,e,n),t=t.sibling;t!==null;)kc(t,e,n),t=t.sibling}var ke=null,yt=!1;function nn(t,e,n){for(n=n.child;n!==null;)Py(t,e,n),n=n.sibling}function Py(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Za,n)}catch{}switch(n.tag){case 5:Le||Or(n,e);case 6:var r=ke,i=yt;ke=null,nn(t,e,n),ke=r,yt=i,ke!==null&&(yt?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(yt?(t=ke,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),cs(t)):uu(ke,n.stateNode));break;case 4:r=ke,i=yt,ke=n.stateNode.containerInfo,yt=!0,nn(t,e,n),ke=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sc(n,e,o),i=i.next}while(i!==r)}nn(t,e,n);break;case 1:if(!Le&&(Or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}nn(t,e,n);break;case 21:nn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,nn(t,e,n),Le=r):nn(t,e,n);break;default:nn(t,e,n)}}function hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u_),e.forEach(function(r){var i=w_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,yt=!1;break e;case 3:ke=a.stateNode.containerInfo,yt=!0;break e;case 4:ke=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(ke===null)throw Error(_(160));Py(s,o,i),ke=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ly(e,t),e=e.sibling}function Ly(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),Ct(t),r&4){try{Yi(3,t,t.return),al(3,t)}catch(v){ae(t,t.return,v)}try{Yi(5,t,t.return)}catch(v){ae(t,t.return,v)}}break;case 1:mt(e,t),Ct(t),r&512&&n!==null&&Or(n,n.return);break;case 5:if(mt(e,t),Ct(t),r&512&&n!==null&&Or(n,n.return),t.flags&32){var i=t.stateNode;try{os(i,"")}catch(v){ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tg(i,s),Qu(a,o);var u=Qu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?og(i,h):c==="dangerouslySetInnerHTML"?ig(i,h):c==="children"?os(i,h):fh(i,c,h,u)}switch(a){case"input":Hu(i,s);break;case"textarea":ng(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?$r(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?$r(i,!!s.multiple,s.defaultValue,!0):$r(i,!!s.multiple,s.multiple?[]:"",!1))}i[ms]=s}catch(v){ae(t,t.return,v)}}break;case 6:if(mt(e,t),Ct(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ae(t,t.return,v)}}break;case 3:if(mt(e,t),Ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cs(e.containerInfo)}catch(v){ae(t,t.return,v)}break;case 4:mt(e,t),Ct(t);break;case 13:mt(e,t),Ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wh=ce())),r&4&&hp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(u=Le)||c,mt(e,t),Le=u):mt(e,t),Ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(T=t,c=t.child;c!==null;){for(h=T=c;T!==null;){switch(d=T,g=d.child,d.tag){case 0:case 11:case 14:case 15:Yi(4,d,d.return);break;case 1:Or(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Or(d,d.return);break;case 22:if(d.memoizedState!==null){fp(h);continue}}g!==null?(g.return=d,T=g):fp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sg("display",o))}catch(v){ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mt(e,t),Ct(t),r&4&&hp(t);break;case 21:break;default:mt(e,t),Ct(t)}}function Ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xy(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(os(i,""),r.flags&=-33);var s=cp(t);kc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=cp(t);Tc(t,a,o);break;default:throw Error(_(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h_(t,e,n){T=t,My(t)}function My(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ao;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=Ao;var u=Le;if(Ao=o,(Le=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?pp(i):l!==null?(l.return=o,T=l):pp(i);for(;s!==null;)T=s,My(s),s=s.sibling;T=i,Ao=a,Le=u}dp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):dp(t)}}function dp(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||al(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&cs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Le||e.flags&512&&Ic(e)}catch(d){ae(e,e.return,d)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function fp(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function pp(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{al(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{Ic(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{Ic(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var d_=Math.ceil,Ta=en.ReactCurrentDispatcher,Hh=en.ReactCurrentOwner,ht=en.ReactCurrentBatchConfig,q=0,Ie=null,fe=null,Ne=0,Ze=0,xr=Pn(0),ge=0,_s=null,ir=0,ll=0,qh=0,Xi=null,Ge=null,Wh=0,Zr=1/0,$t=null,ka=!1,Cc=null,En=null,Do=!1,pn=null,Ca=0,Ji=0,Nc=null,Ko=-1,Go=0;function qe(){return q&6?ce():Ko!==-1?Ko:Ko=ce()}function _n(t){return t.mode&1?q&2&&Ne!==0?Ne&-Ne:QE.transition!==null?(Go===0&&(Go=vg()),Go):(t=G,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function St(t,e,n,r){if(50<Ji)throw Ji=0,Nc=null,Error(_(185));Us(t,n,r),(!(q&2)||t!==Ie)&&(t===Ie&&(!(q&2)&&(ll|=n),ge===4&&ln(t,Ne)),Je(t,r),n===1&&q===0&&!(e.mode&1)&&(Zr=ce()+500,il&&Ln()))}function Je(t,e){var n=t.callbackNode;Q1(t,e);var r=ua(t,t===Ie?Ne:0);if(r===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?GE(mp.bind(null,t)):Hg(mp.bind(null,t)),HE(function(){!(q&6)&&Ln()}),n=null;else{switch(wg(r)){case 1:n=vh;break;case 4:n=gg;break;case 16:n=la;break;case 536870912:n=yg;break;default:n=la}n=jy(n,$y.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $y(t,e){if(Ko=-1,Go=0,q&6)throw Error(_(327));var n=t.callbackNode;if(zr()&&t.callbackNode!==n)return null;var r=ua(t,t===Ie?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Na(t,r);else{e=r;var i=q;q|=2;var s=Fy();(Ie!==t||Ne!==e)&&($t=null,Zr=ce()+500,Gn(t,e));do try{m_();break}catch(a){Uy(t,a)}while(1);Oh(),Ta.current=s,q=i,fe!==null?e=0:(Ie=null,Ne=0,e=ge)}if(e!==0){if(e===2&&(i=ec(t),i!==0&&(r=i,e=Ac(t,i))),e===1)throw n=_s,Gn(t,0),ln(t,r),Je(t,ce()),n;if(e===6)ln(t,r);else{if(i=t.current.alternate,!(r&30)&&!f_(i)&&(e=Na(t,r),e===2&&(s=ec(t),s!==0&&(r=s,e=Ac(t,s))),e===1))throw n=_s,Gn(t,0),ln(t,r),Je(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:Vn(t,Ge,$t);break;case 3:if(ln(t,r),(r&130023424)===r&&(e=Wh+500-ce(),10<e)){if(ua(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lc(Vn.bind(null,t,Ge,$t),e);break}Vn(t,Ge,$t);break;case 4:if(ln(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d_(r/1960))-r,10<r){t.timeoutHandle=lc(Vn.bind(null,t,Ge,$t),r);break}Vn(t,Ge,$t);break;case 5:Vn(t,Ge,$t);break;default:throw Error(_(329))}}}return Je(t,ce()),t.callbackNode===n?$y.bind(null,t):null}function Ac(t,e){var n=Xi;return t.current.memoizedState.isDehydrated&&(Gn(t,e).flags|=256),t=Na(t,e),t!==2&&(e=Ge,Ge=n,e!==null&&Dc(e)),t}function Dc(t){Ge===null?Ge=t:Ge.push.apply(Ge,t)}function f_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ln(t,e){for(e&=~qh,e&=~ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function mp(t){if(q&6)throw Error(_(327));zr();var e=ua(t,0);if(!(e&1))return Je(t,ce()),null;var n=Na(t,e);if(t.tag!==0&&n===2){var r=ec(t);r!==0&&(e=r,n=Ac(t,r))}if(n===1)throw n=_s,Gn(t,0),ln(t,e),Je(t,ce()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t,Ge,$t),Je(t,ce()),null}function Kh(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Zr=ce()+500,il&&Ln())}}function sr(t){pn!==null&&pn.tag===0&&!(q&6)&&zr();var e=q;q|=1;var n=ht.transition,r=G;try{if(ht.transition=null,G=1,t)return t()}finally{G=r,ht.transition=n,q=e,!(q&6)&&Ln()}}function Gh(){Ze=xr.current,te(xr)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jE(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Ah(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pa();break;case 3:Xr(),te(Ye),te(be),Uh();break;case 5:$h(r);break;case 4:Xr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:xh(r.type._context);break;case 22:case 23:Gh()}n=n.return}if(Ie=t,fe=t=Sn(t.current,null),Ne=Ze=e,ge=0,_s=null,qh=ll=ir=0,Ge=Xi=null,jn!==null){for(e=0;e<jn.length;e++)if(n=jn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jn=null}return t}function Uy(t,e){do{var n=fe;try{if(Oh(),Ho.current=Ia,Sa){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sa=!1}if(rr=0,Se=me=se=null,Qi=!1,vs=0,Hh.current=null,n===null||n.return===null){ge=1,_s=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=np(o);if(g!==null){g.flags&=-257,rp(g,o,a,s,e),g.mode&1&&tp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){tp(s,u,e),Qh();break e}l=Error(_(426))}}else if(ne&&a.mode&1){var R=np(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),rp(R,o,a,s,e),Dh(Jr(l,a));break e}}s=l=Jr(l,a),ge!==4&&(ge=2),Xi===null?Xi=[s]:Xi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ey(s,l,e);Gf(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(En===null||!En.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=_y(s,a,e);Gf(s,E);break e}}s=s.return}while(s!==null)}Vy(n)}catch(I){e=I,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Fy(){var t=Ta.current;return Ta.current=Ia,t===null?Ia:t}function Qh(){(ge===0||ge===3||ge===2)&&(ge=4),Ie===null||!(ir&268435455)&&!(ll&268435455)||ln(Ie,Ne)}function Na(t,e){var n=q;q|=2;var r=Fy();(Ie!==t||Ne!==e)&&($t=null,Gn(t,e));do try{p_();break}catch(i){Uy(t,i)}while(1);if(Oh(),q=n,Ta.current=r,fe!==null)throw Error(_(261));return Ie=null,Ne=0,ge}function p_(){for(;fe!==null;)by(fe)}function m_(){for(;fe!==null&&!V1();)by(fe)}function by(t){var e=By(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?Vy(t):fe=e,Hh.current=null}function Vy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=l_(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}else if(n=a_(n,e,Ze),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function Vn(t,e,n){var r=G,i=ht.transition;try{ht.transition=null,G=1,g_(t,e,n,r)}finally{ht.transition=i,G=r}return null}function g_(t,e,n,r){do zr();while(pn!==null);if(q&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y1(t,s),t===Ie&&(fe=Ie=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,jy(la,function(){return zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ht.transition,ht.transition=null;var o=G;G=1;var a=q;q|=4,Hh.current=null,c_(t,n),Ly(n,t),$E(oc),ca=!!sc,oc=sc=null,t.current=n,h_(n),z1(),q=a,G=o,ht.transition=s}else t.current=n;if(Do&&(Do=!1,pn=t,Ca=i),s=t.pendingLanes,s===0&&(En=null),H1(n.stateNode),Je(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ka)throw ka=!1,t=Cc,Cc=null,t;return Ca&1&&t.tag!==0&&zr(),s=t.pendingLanes,s&1?t===Nc?Ji++:(Ji=0,Nc=t):Ji=0,Ln(),null}function zr(){if(pn!==null){var t=wg(Ca),e=ht.transition,n=G;try{if(ht.transition=null,G=16>t?16:t,pn===null)var r=!1;else{if(t=pn,pn=null,Ca=0,q&6)throw Error(_(331));var i=q;for(q|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Yi(8,c,s)}var h=c.child;if(h!==null)h.return=c,T=h;else for(;T!==null;){c=T;var d=c.sibling,g=c.return;if(Oy(c),c===u){T=null;break}if(d!==null){d.return=g,T=d;break}T=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:al(9,a)}}catch(I){ae(a,a.return,I)}if(a===o){T=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,T=E;break e}T=a.return}}if(q=i,Ln(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Za,t)}catch{}r=!0}return r}finally{G=n,ht.transition=e}}return!1}function gp(t,e,n){e=Jr(n,e),e=Ey(t,e,1),t=wn(t,e,1),e=qe(),t!==null&&(Us(t,1,e),Je(t,e))}function ae(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){t=Jr(n,t),t=_y(e,t,1),e=wn(e,t,1),t=qe(),e!==null&&(Us(e,1,t),Je(e,t));break}}e=e.return}}function y_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>ce()-Wh?Gn(t,0):qh|=n),Je(t,e)}function zy(t,e){e===0&&(t.mode&1?(e=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):e=1);var n=qe();t=Kt(t,e),t!==null&&(Us(t,e,n),Je(t,n))}function v_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zy(t,n)}function w_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),zy(t,n)}var By;By=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ye.current)Qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qe=!1,o_(t,e,n);Qe=!!(t.flags&131072)}else Qe=!1,ne&&e.flags&1048576&&qg(e,ya,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wo(t,e),t=e.pendingProps;var i=Gr(e,be.current);Vr(e,n),i=bh(null,e,r,t,i,n);var s=Vh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(r)?(s=!0,ma(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lh(e),i.updater=sl,e.stateNode=i,i._reactInternals=e,mc(e,r,t,n),e=vc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Nh(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=__(r),t=gt(r,t),i){case 0:e=yc(null,e,r,t,n);break e;case 1:e=op(null,e,r,t,n);break e;case 11:e=ip(null,e,r,t,n);break e;case 14:e=sp(null,e,r,gt(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),op(t,e,r,i,n);case 3:e:{if(ky(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qg(t,e),Ea(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Jr(Error(_(423)),e),e=ap(t,e,r,n,i);break e}else if(r!==i){i=Jr(Error(_(424)),e),e=ap(t,e,r,n,i);break e}else for(et=vn(e.stateNode.containerInfo.firstChild),tt=e,ne=!0,vt=null,n=Zg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){e=Gt(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return ey(e),t===null&&dc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ac(r,i)?o=null:s!==null&&ac(r,s)&&(e.flags|=32),Ty(t,e),je(t,e,o,n),e.child;case 6:return t===null&&dc(e),null;case 13:return Cy(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yr(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),ip(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(va,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!Ye.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vr(e,n),i=dt(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),sp(t,e,r,i,n);case 15:return Sy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Wo(t,e),e.tag=1,Xe(r)?(t=!0,ma(e)):t=!1,Vr(e,n),Xg(e,r,i),mc(e,r,i,n),vc(null,e,r,!0,t,n);case 19:return Ny(t,e,n);case 22:return Iy(t,e,n)}throw Error(_(156,e.tag))};function jy(t,e){return mg(t,e)}function E_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new E_(t,e,n,r)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function __(t){if(typeof t=="function")return Yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mh)return 11;if(t===gh)return 14}return 2}function Sn(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sr:return Qn(n.children,i,s,e);case ph:o=8,i|=8;break;case bu:return t=ct(12,n,e,i|2),t.elementType=bu,t.lanes=s,t;case Vu:return t=ct(13,n,e,i),t.elementType=Vu,t.lanes=s,t;case zu:return t=ct(19,n,e,i),t.elementType=zu,t.lanes=s,t;case Jm:return ul(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:o=10;break e;case Xm:o=9;break e;case mh:o=11;break e;case gh:o=14;break e;case sn:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qn(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function ul(t,e,n,r){return t=ct(22,t,r,e),t.elementType=Jm,t.lanes=n,t.stateNode={isHidden:!1},t}function yu(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function vu(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function S_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,r,i,s,o,a,l){return t=new S_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(s),t}function I_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hy(t){if(!t)return An;t=t._reactInternals;e:{if(fr(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(Xe(n))return jg(t,n,e)}return e}function qy(t,e,n,r,i,s,o,a,l){return t=Xh(n,r,!0,t,i,s,o,a,l),t.context=Hy(null),n=t.current,r=qe(),i=_n(n),s=jt(r,i),s.callback=e??null,wn(n,s,i),t.current.lanes=i,Us(t,i,r),Je(t,r),t}function cl(t,e,n,r){var i=e.current,s=qe(),o=_n(i);return n=Hy(n),e.context===null?e.context=n:e.pendingContext=n,e=jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wn(i,e,o),t!==null&&(St(t,i,o,s),jo(t,i,o)),o}function Aa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jh(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function T_(){return null}var Wy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zh(t){this._internalRoot=t}hl.prototype.render=Zh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));cl(t,e,null,null)};hl.prototype.unmount=Zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sr(function(){cl(null,t,null,null)}),e[Wt]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<an.length&&e!==0&&e<an[n].priority;n++);an.splice(n,0,t),n===0&&Tg(t)}};function ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function k_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Aa(o);s.call(u)}}var o=qy(e,r,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[Wt]=o.current,fs(t.nodeType===8?t.parentNode:t),sr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Aa(l);a.call(u)}}var l=Xh(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[Wt]=l.current,fs(t.nodeType===8?t.parentNode:t),sr(function(){cl(e,l,n,r)}),l}function fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Aa(o);a.call(l)}}cl(e,o,t,i)}else o=k_(n,e,t,i,r);return Aa(o)}Eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(wh(e,n|1),Je(e,ce()),!(q&6)&&(Zr=ce()+500,Ln()))}break;case 13:sr(function(){var r=Kt(t,1);if(r!==null){var i=qe();St(r,t,1,i)}}),Jh(t,1)}};Eh=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=qe();St(e,t,134217728,n)}Jh(t,134217728)}};_g=function(t){if(t.tag===13){var e=_n(t),n=Kt(t,e);if(n!==null){var r=qe();St(n,t,e,r)}Jh(t,e)}};Sg=function(){return G};Ig=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Xu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rl(r);if(!i)throw Error(_(90));eg(r),Hu(r,i)}}}break;case"textarea":ng(t,n);break;case"select":e=n.value,e!=null&&$r(t,!!n.multiple,e,!1)}};ug=Kh;cg=sr;var C_={usingClientEntryPoint:!1,Events:[bs,Cr,rl,ag,lg,Kh]},Oi={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},N_={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fg(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Za=Ro.inject(N_),Rt=Ro}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;st.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(e))throw Error(_(200));return I_(t,e,null,n)};st.createRoot=function(t,e){if(!ed(t))throw Error(_(299));var n=!1,r="",i=Wy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,fs(t.nodeType===8?t.parentNode:t),new Zh(e)};st.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=fg(e),t=t===null?null:t.stateNode,t};st.flushSync=function(t){return sr(t)};st.hydrate=function(t,e,n){if(!dl(e))throw Error(_(200));return fl(null,t,e,!0,n)};st.hydrateRoot=function(t,e,n){if(!ed(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qy(e,null,t,1,n??null,i,!1,s,o),t[Wt]=e.current,fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hl(e)};st.render=function(t,e,n){if(!dl(e))throw Error(_(200));return fl(null,t,e,!1,n)};st.unmountComponentAtNode=function(t){if(!dl(t))throw Error(_(40));return t._reactRootContainer?(sr(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};st.unstable_batchedUpdates=Kh;st.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dl(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return fl(t,e,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=st})(T1);const A_=Fm($u),Ky="/assets/logofinal-21b92a0e.png";function D_(t){return Q("div",{className:"page1",children:er("section",{className:"sign-in",children:[Q("img",{src:Ky,alt:"",className:"logo"}),er("div",{className:"section",children:[Q("input",{type:"text",placeholder:"name",className:"input",onChange:t.change,name:"name",value:t.name,autoComplete:"off"}),Q("input",{type:"text",placeholder:"email",className:"input",onChange:t.change,name:"email",value:t.email,autoComplete:"off"}),Q("input",{type:"text",placeholder:"password",className:"input",onChange:t.change,name:"password",value:t.pass,autoComplete:"off"}),Q("button",{className:"submit-button input",onClick:t.submit,children:"Submit"})]})]})})}/**
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
 *//**
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
 */const Gy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},R_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):R_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},O_=function(t){const e=Gy(t);return Qy.encodeByteArray(e,!0)},Da=function(t){return O_(t).replace(/\./g,"")},Yy=function(t){try{return Qy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function x_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P_=()=>x_().__FIREBASE_DEFAULTS__,L_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},M_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yy(t[1]);return e&&JSON.parse(e)},td=()=>{try{return P_()||L_()||M_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xy=t=>{var e,n;return(n=(e=td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$_=t=>{const e=Xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},U_=()=>{var t;return(t=td())===null||t===void 0?void 0:t.config},Jy=t=>{var e;return(e=td())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class F_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function b_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Da(JSON.stringify(n)),Da(JSON.stringify(o)),a].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function z_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function B_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j_(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H_(){try{return typeof indexedDB=="object"}catch{return!1}}function q_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const W_="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W_,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?K_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function K_(t,e){return t.replace(G_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const G_=/\{\$([^}]+)}/g;function Q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wp(s)&&wp(o)){if(!Ra(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wp(t){return t!==null&&typeof t=="object"}/**
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
 */function Bs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ui(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Y_(t,e){const n=new X_(t,e);return n.subscribe.bind(n)}class X_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");J_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wu),i.error===void 0&&(i.error=wu),i.complete===void 0&&(i.complete=wu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function J_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wu(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class Z_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new F_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tS(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eS(t){return t===zn?void 0:t}function tS(t){return t.instantiationMode==="EAGER"}/**
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
 */class nS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const rS={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},iS=W.INFO,sS={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},oS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nd{constructor(e){this.name=e,this._logLevel=iS,this._logHandler=oS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const aS=(t,e)=>e.some(n=>t instanceof n);let Ep,_p;function lS(){return Ep||(Ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uS(){return _p||(_p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zy=new WeakMap,Rc=new WeakMap,ev=new WeakMap,Eu=new WeakMap,rd=new WeakMap;function cS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(In(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zy.set(n,t)}).catch(()=>{}),rd.set(e,t),e}function hS(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ev.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dS(t){Oc=t(Oc)}function fS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_u(this),e,...n);return ev.set(r,e.sort?e.sort():[e]),In(r)}:uS().includes(t)?function(...e){return t.apply(_u(this),e),In(Zy.get(this))}:function(...e){return In(t.apply(_u(this),e))}}function pS(t){return typeof t=="function"?fS(t):(t instanceof IDBTransaction&&hS(t),aS(t,lS())?new Proxy(t,Oc):t)}function In(t){if(t instanceof IDBRequest)return cS(t);if(Eu.has(t))return Eu.get(t);const e=pS(t);return e!==t&&(Eu.set(t,e),rd.set(e,t)),e}const _u=t=>rd.get(t);function mS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=In(o);return r&&o.addEventListener("upgradeneeded",l=>{r(In(o.result),l.oldVersion,l.newVersion,In(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const gS=["get","getKey","getAll","getAllKeys","count"],yS=["put","add","delete","clear"],Su=new Map;function Sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Su.get(e))return Su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Su.set(e,s),s}dS(t=>({...t,get:(e,n,r)=>Sp(e,n)||t.get(e,n,r),has:(e,n)=>!!Sp(e,n)||t.has(e,n)}));/**
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
 */class vS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",Ip="0.9.3";/**
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
 */const ar=new nd("@firebase/app"),ES="@firebase/app-compat",_S="@firebase/analytics-compat",SS="@firebase/analytics",IS="@firebase/app-check-compat",TS="@firebase/app-check",kS="@firebase/auth",CS="@firebase/auth-compat",NS="@firebase/database",AS="@firebase/database-compat",DS="@firebase/functions",RS="@firebase/functions-compat",OS="@firebase/installations",xS="@firebase/installations-compat",PS="@firebase/messaging",LS="@firebase/messaging-compat",MS="@firebase/performance",$S="@firebase/performance-compat",US="@firebase/remote-config",FS="@firebase/remote-config-compat",bS="@firebase/storage",VS="@firebase/storage-compat",zS="@firebase/firestore",BS="@firebase/firestore-compat",jS="firebase",HS="9.17.1";/**
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
 */const Pc="[DEFAULT]",qS={[xc]:"fire-core",[ES]:"fire-core-compat",[SS]:"fire-analytics",[_S]:"fire-analytics-compat",[TS]:"fire-app-check",[IS]:"fire-app-check-compat",[kS]:"fire-auth",[CS]:"fire-auth-compat",[NS]:"fire-rtdb",[AS]:"fire-rtdb-compat",[DS]:"fire-fn",[RS]:"fire-fn-compat",[OS]:"fire-iid",[xS]:"fire-iid-compat",[PS]:"fire-fcm",[LS]:"fire-fcm-compat",[MS]:"fire-perf",[$S]:"fire-perf-compat",[US]:"fire-rc",[FS]:"fire-rc-compat",[bS]:"fire-gcs",[VS]:"fire-gcs-compat",[zS]:"fire-fst",[BS]:"fire-fst-compat","fire-js":"fire-js",[jS]:"fire-js-all"};/**
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
 */const Oa=new Map,Lc=new Map;function WS(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(Lc.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Lc.set(e,t);for(const n of Oa.values())WS(n,t);return!0}function id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const KS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tn=new zs("app","Firebase",KS);/**
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
 */class GS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const js=HS;function tv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(n||(n=U_()),!n)throw Tn.create("no-options");const s=Oa.get(i);if(s){if(Ra(n,s.options)&&Ra(r,s.config))return s;throw Tn.create("duplicate-app",{appName:i})}const o=new nS(i);for(const l of Lc.values())o.addComponent(l);const a=new GS(n,r,o);return Oa.set(i,a),a}function nv(t=Pc){const e=Oa.get(t);if(!e&&t===Pc)return tv();if(!e)throw Tn.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let i=(r=qS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}ei(new or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const QS="firebase-heartbeat-database",YS=1,Ss="firebase-heartbeat-store";let Iu=null;function rv(){return Iu||(Iu=mS(QS,YS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Iu}async function XS(t){try{return(await rv()).transaction(Ss).objectStore(Ss).get(iv(t))}catch(e){if(e instanceof tn)ar.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Tp(t,e){try{const r=(await rv()).transaction(Ss,"readwrite");return await r.objectStore(Ss).put(e,iv(t)),r.done}catch(n){if(n instanceof tn)ar.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function iv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JS=1024,ZS=30*24*60*60*1e3;class eI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ZS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kp(),{heartbeatsToSend:n,unsentEntries:r}=tI(this._heartbeatsCache.heartbeats),i=Da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kp(){return new Date().toISOString().substring(0,10)}function tI(t,e=JS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H_()?q_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await XS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cp(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rI(t){ei(new or("platform-logger",e=>new vS(e),"PRIVATE")),ei(new or("heartbeat",e=>new eI(e),"PRIVATE")),kn(xc,Ip,t),kn(xc,Ip,"esm2017"),kn("fire-js","")}rI("");var iI="firebase",sI="9.17.1";/**
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
 */kn(iI,sI,"app");function sd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function sv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oI=sv,ov=new zs("auth","Firebase",sv());/**
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
 */const Np=new nd("@firebase/auth");function Yo(t,...e){Np.logLevel<=W.ERROR&&Np.error(`Auth (${js}): ${t}`,...e)}/**
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
 */function Tt(t,...e){throw od(t,...e)}function xt(t,...e){return od(t,...e)}function aI(t,e,n){const r=Object.assign(Object.assign({},oI()),{[e]:n});return new zs("auth","Firebase",r).create(e,{appName:t.name})}function od(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ov.create(t,...e)}function L(t,e,...n){if(!t)throw od(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function Qt(t,e){t||Vt(e)}/**
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
 */const Ap=new Map;function zt(t){Qt(t instanceof Function,"Expected a class definition");let e=Ap.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ap.set(t,e),e)}/**
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
 */function lI(t,e){const n=id(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ra(s,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function uI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cI(){return Dp()==="http:"||Dp()==="https:"}function Dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cI()||z_()||"connection"in navigator)?navigator.onLine:!0}function dI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=V_()||B_()}get(){return hI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ad(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class av{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const pI=new Hs(3e4,6e4);function qs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fi(t,e,n,r,i={}){return lv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),av.fetch()(uv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function lv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fI),e);try{const i=new mI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aI(t,c,u);Tt(t,c)}}catch(i){if(i instanceof tn)throw i;Tt(t,"network-request-failed")}}async function Ws(t,e,n,r,i={}){const s=await fi(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ad(t.config,i):`${t.config.apiScheme}://${i}`}class mI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),pI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function gI(t,e){return fi(t,"POST","/v1/accounts:delete",e)}async function yI(t,e){return fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vI(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=ld(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zi(Tu(i.auth_time)),issuedAtTime:Zi(Tu(i.iat)),expirationTime:Zi(Tu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tu(t){return Number(t)*1e3}function ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yy(n);return i?JSON.parse(i):(Yo("Failed to decode base64 JWT payload"),null)}catch(i){return Yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wI(t){const e=ld(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&EI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _I{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ti(t,yI(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TI(s.providerUserInfo):[],a=II(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function SI(t){const e=ze(t);await xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function II(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TI(t){return t.map(e=>{var{providerId:n}=e,r=sd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kI(t,e){const n=await lv(t,{},async()=>{const r=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",av.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Is;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function rn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=sd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _I(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vI(this,e)}reload(){return SI(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ti(this,gI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:I,providerData:C,stsTokenManager:N}=n;L(m&&N,e,"internal-error");const x=Is.fromJSON(this.name,N);L(typeof m=="string",e,"internal-error"),rn(h,e.name),rn(d,e.name),L(typeof E=="boolean",e,"internal-error"),L(typeof I=="boolean",e,"internal-error"),rn(g,e.name),rn(y,e.name),rn(v,e.name),rn(R,e.name),rn(p,e.name),rn(f,e.name);const J=new Yn({uid:m,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(J.providerData=C.map(z=>Object.assign({},z))),R&&(J._redirectEventId=R),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Is;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xa(s),s}}/**
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
 */class hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hv.type="NONE";const Rp=hv;/**
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
 */function Xo(t,e,n){return`firebase:${t}:${e}:${n}`}class Br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Br(zt(Rp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zt(Rp);const o=Xo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Yn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Br(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Br(s,e,r))}}/**
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
 */function Op(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gv(e))return"Blackberry";if(yv(e))return"Webos";if(ud(e))return"Safari";if((e.includes("chrome/")||fv(e))&&!e.includes("edge/"))return"Chrome";if(mv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dv(t=Ve()){return/firefox\//i.test(t)}function ud(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fv(t=Ve()){return/crios\//i.test(t)}function pv(t=Ve()){return/iemobile/i.test(t)}function mv(t=Ve()){return/android/i.test(t)}function gv(t=Ve()){return/blackberry/i.test(t)}function yv(t=Ve()){return/webos/i.test(t)}function pl(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CI(t=Ve()){var e;return pl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NI(){return j_()&&document.documentMode===10}function vv(t=Ve()){return pl(t)||mv(t)||yv(t)||gv(t)||/windows phone/i.test(t)||pv(t)}function AI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wv(t,e=[]){let n;switch(t){case"Browser":n=Op(Ve());break;case"Worker":n=`${Op(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class DI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class RI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xp(this),this.idTokenSubscription=new xp(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ov,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ks(t){return ze(t)}class xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y_(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function OI(t,e,n){const r=Ks(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ev(e),{host:o,port:a}=xI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PI()}function Ev(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xI(t){const e=Ev(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pp(o)}}}function Pp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function LI(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function MI(t,e){return Ws(t,"POST","/v1/accounts:signInWithPassword",qs(t,e))}/**
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
 */async function $I(t,e){return Ws(t,"POST","/v1/accounts:signInWithEmailLink",qs(t,e))}async function UI(t,e){return Ws(t,"POST","/v1/accounts:signInWithEmailLink",qs(t,e))}/**
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
 */class Ts extends cd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ts(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ts(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return MI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $I(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return LI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UI(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jr(t,e){return Ws(t,"POST","/v1/accounts:signInWithIdp",qs(t,e))}/**
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
 */const FI="http://localhost";class lr extends cd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=sd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:FI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bs(n)}return e}}/**
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
 */function bI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VI(t){const e=Ui(Fi(t)).link,n=e?Ui(Fi(e)).deep_link_id:null,r=Ui(Fi(t)).deep_link_id;return(r?Ui(Fi(r)).link:null)||r||n||e||t}class hd{constructor(e){var n,r,i,s,o,a;const l=Ui(Fi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=bI((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=VI(e);try{return new hd(n)}catch{return null}}}/**
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
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return Ts._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hd.parseLink(n);return L(r,"argument-error"),Ts._fromEmailAndCode(e,r.code,r.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _v{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gs extends _v{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends Gs{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class cn extends Gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
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
 */class hn extends Gs{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class dn extends Gs{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */async function zI(t,e){return Ws(t,"POST","/v1/accounts:signUp",qs(t,e))}/**
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
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=Lp(r);return new ur({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lp(r);return new ur({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pa extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pa(e,n,r,i)}}function Sv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,s,e,r):s})}async function BI(t,e,n=!1){const r=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ur._forOperation(t,"link",r)}/**
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
 */async function jI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ti(t,Sv(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=ld(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),ur._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
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
 */async function Iv(t,e,n=!1){const r="signIn",i=await Sv(t,r,e),s=await ur._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function HI(t,e){return Iv(Ks(t),e)}async function qI(t,e,n){const r=Ks(t),i=await zI(r,{returnSecureToken:!0,email:e,password:n}),s=await ur._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function WI(t,e,n){return HI(ze(t),pi.credential(e,n))}/**
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
 */async function KI(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function GI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ze(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ti(r,KI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function QI(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function YI(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function XI(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}const La="__sak";/**
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
 */class Tv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(La,"1"),this.storage.removeItem(La),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function JI(){const t=Ve();return ud(t)||pl(t)}const ZI=1e3,eT=10;class kv extends Tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JI()&&AI(),this.fallbackToPolling=vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kv.type="LOCAL";const tT=kv;/**
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
 */class Cv extends Tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cv.type="SESSION";const Nv=Cv;/**
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
 */function nT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ml(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await nT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
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
 */function dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=dd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pt(){return window}function iT(t){Pt().location.href=t}/**
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
 */function Av(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function sT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aT(){return Av()?self:null}/**
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
 */const Dv="firebaseLocalStorageDb",lT=1,Ma="firebaseLocalStorage",Rv="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(t,e){return t.transaction([Ma],e?"readwrite":"readonly").objectStore(Ma)}function uT(){const t=indexedDB.deleteDatabase(Dv);return new Qs(t).toPromise()}function $c(){const t=indexedDB.open(Dv,lT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ma,{keyPath:Rv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ma)?e(r):(r.close(),await uT(),e(await $c()))})})}async function Mp(t,e,n){const r=gl(t,!0).put({[Rv]:e,value:n});return new Qs(r).toPromise()}async function cT(t,e){const n=gl(t,!1).get(e),r=await new Qs(n).toPromise();return r===void 0?null:r.value}function $p(t,e){const n=gl(t,!0).delete(e);return new Qs(n).toPromise()}const hT=800,dT=3;class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(aT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sT(),!this.activeServiceWorker)return;this.sender=new rT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await Mp(e,La,"1"),await $p(e,La),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$p(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gl(i,!1).getAll();return new Qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ov.type="LOCAL";const fT=Ov;/**
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
 */function pT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pT().appendChild(r)})}function gT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Hs(3e4,6e4);/**
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
 */function yT(t,e){return e?zt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fd extends cd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vT(t){return Iv(t.auth,new fd(t),t.bypassAuthState)}function wT(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),jI(n,new fd(t),t.bypassAuthState)}async function ET(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),BI(n,new fd(t),t.bypassAuthState)}/**
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
 */class xv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vT;case"linkViaPopup":case"linkViaRedirect":return ET;case"reauthViaPopup":case"reauthViaRedirect":return wT;default:Tt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _T=new Hs(2e3,1e4);class Pr extends xv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_T.get())};e()}}Pr.currentPopupAction=null;/**
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
 */const ST="pendingRedirect",Jo=new Map;class IT extends xv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await TT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TT(t,e){const n=NT(e),r=CT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kT(t,e){Jo.set(t._key(),e)}function CT(t){return zt(t._redirectPersistence)}function NT(t){return Xo(ST,t.config.apiKey,t.name)}async function AT(t,e,n=!1){const r=Ks(t),i=yT(r,e),o=await new IT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DT=10*60*1e3;class RT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Up(e))}saveEventToCache(e){this.cachedEventUids.add(Up(e)),this.lastProcessedEventTime=Date.now()}}function Up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pv(t);default:return!1}}/**
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
 */async function xT(t,e={}){return fi(t,"GET","/v1/projects",e)}/**
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
 */const PT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LT=/^https?/;async function MT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xT(t);for(const n of e)try{if($T(n))return}catch{}Tt(t,"unauthorized-domain")}function $T(t){const e=Mc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LT.test(n))return!1;if(PT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UT=new Hs(3e4,6e4);function Fp(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FT(t){return new Promise((e,n)=>{var r,i,s;function o(){Fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fp(),n(xt(t,"network-request-failed"))},timeout:UT.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pt().gapi)===null||s===void 0)&&s.load)o();else{const a=gT("iframefcb");return Pt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},mT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zo=null,e})}let Zo=null;function bT(t){return Zo=Zo||FT(t),Zo}/**
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
 */const VT=new Hs(5e3,15e3),zT="__/auth/iframe",BT="emulator/auth/iframe",jT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qT(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ad(e,BT):`https://${t.config.authDomain}/${zT}`,r={apiKey:e.apiKey,appName:t.name,v:js},i=HT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bs(r).slice(1)}`}async function WT(t){const e=await bT(t),n=Pt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:qT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Pt().setTimeout(()=>{s(o)},VT.get());function l(){Pt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const KT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GT=500,QT=600,YT="_blank",XT="http://localhost";class bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JT(t,e,n,r=GT,i=QT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=fv(u)?YT:n),dv(u)&&(e=e||XT,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(CI(u)&&a!=="_self")return ZT(e||"",a),new bp(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new bp(h)}function ZT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ek="__/auth/handler",tk="emulator/auth/handler";function Vp(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:i};if(e instanceof _v){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Q_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Gs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${nk(t)}?${Bs(a).slice(1)}`}function nk({config:t}){return t.emulator?ad(t,tk):`https://${t.authDomain}/${ek}`}/**
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
 */const ku="webStorageSupport";class rk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nv,this._completeRedirectFn=AT,this._overrideRedirectResult=kT}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vp(e,n,r,Mc(),i);return JT(e,o,dd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),iT(Vp(e,n,r,Mc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WT(e),r=new RT(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ku,{type:ku},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ku];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vv()||ud()||pl()}}const ik=rk;var zp="@firebase/auth",Bp="0.21.3";/**
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
 */class sk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ok(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ak(t){ei(new or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wv(t)},c=new RI(a,l,u);return uI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new or("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(r=>new sk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(zp,Bp,ok(t)),kn(zp,Bp,"esm2017")}/**
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
 */const lk=5*60,uk=Jy("authIdTokenMaxAge")||lk;let jp=null;const ck=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uk)return;const i=n==null?void 0:n.token;jp!==i&&(jp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hk(t=nv()){const e=id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lI(t,{popupRedirectResolver:ik,persistence:[fT,tT,Nv]}),r=Jy("authTokenSyncURL");if(r){const s=ck(r);YI(n,s,()=>s(n.currentUser)),QI(n,o=>s(o))}const i=Xy("auth");return i&&OI(n,`http://${i}`),n}ak("Browser");function dk(t){return Q("div",{className:"page1",children:er("section",{className:"sign-in",children:[Q("img",{src:Ky,alt:"",className:"logo"}),er("div",{className:"section",children:[Q("input",{type:"text",placeholder:"email",className:"input",onChange:t.change,name:"email",value:t.email,autoComplete:"off"}),Q("input",{type:"text",placeholder:"password",className:"input",onChange:t.change,name:"password",value:t.pass,autoComplete:"off"}),Q("button",{className:"submit-button input",onClick:t.submit,children:"Submit"}),Q("button",{className:"new--button",onClick:t.new,children:"New ?"})]})]})})}var fk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,pd=pd||{},$=fk||self;function $a(){}function yl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ys(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pk(t){return Object.prototype.hasOwnProperty.call(t,Cu)&&t[Cu]||(t[Cu]=++mk)}var Cu="closure_uid_"+(1e9*Math.random()>>>0),mk=0;function gk(t,e,n){return t.call.apply(t.bind,arguments)}function yk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ue=gk:Ue=yk,Ue.apply(null,arguments)}function xo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Re(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Mn(){this.s=this.s,this.o=this.o}var vk=0;Mn.prototype.s=!1;Mn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vk!=0)&&pk(this)};Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function md(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Hp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var wk=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",$a,e),$.removeEventListener("test",$a,e)}catch{}return t}();function Ua(t){return/^[\s\xa0]*$/.test(t)}var qp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nu(t,e){return t<e?-1:t>e?1:0}function vl(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Dt(t){return vl().indexOf(t)!=-1}function gd(t){return gd[" "](t),t}gd[" "]=$a;function Ek(t){var e=Ik;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _k=Dt("Opera"),ni=Dt("Trident")||Dt("MSIE"),Mv=Dt("Edge"),Uc=Mv||ni,$v=Dt("Gecko")&&!(vl().toLowerCase().indexOf("webkit")!=-1&&!Dt("Edge"))&&!(Dt("Trident")||Dt("MSIE"))&&!Dt("Edge"),Sk=vl().toLowerCase().indexOf("webkit")!=-1&&!Dt("Edge");function Uv(){var t=$.document;return t?t.documentMode:void 0}var Fa;e:{var Au="",Du=function(){var t=vl();if($v)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mv)return/Edge\/([\d\.]+)/.exec(t);if(ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Sk)return/WebKit\/(\S+)/.exec(t);if(_k)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Du&&(Au=Du?Du[1]:""),ni){var Ru=Uv();if(Ru!=null&&Ru>parseFloat(Au)){Fa=String(Ru);break e}}Fa=Au}var Ik={};function Tk(){return Ek(function(){let t=0;const e=qp(String(Fa)).split("."),n=qp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nu(i[2].length==0,s[2].length==0)||Nu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Fc;if($.document&&ni){var Wp=Uv();Fc=Wp||parseInt(Fa,10)||void 0}else Fc=void 0;var kk=Fc;function ks(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($v){e:{try{gd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ck[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ks.X.h.call(this)}}Re(ks,Fe);var Ck={2:"touch",3:"pen",4:"mouse"};ks.prototype.h=function(){ks.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xs="closure_listenable_"+(1e6*Math.random()|0),Nk=0;function Ak(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++Nk,this.ba=this.ea=!1}function wl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Fv(t){const e={};for(const n in t)e[n]=t[n];return e}const Kp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Kp.length;s++)n=Kp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function El(t){this.src=t,this.g={},this.h=0}El.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Vc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ak(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function bc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Lv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(wl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var vd="closure_lm_"+(1e6*Math.random()|0),Ou={};function Vv(t,e,n,r,i){if(r&&r.once)return Bv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vv(t,e[s],n,r,i);return null}return n=_d(n),t&&t[Xs]?t.N(e,n,Ys(r)?!!r.capture:!!r,i):zv(t,e,n,!1,r,i)}function zv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ys(i)?!!i.capture:!!i,a=Ed(t);if(a||(t[vd]=a=new El(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Dk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Hv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Dk(){function t(n){return e.call(t.src,t.listener,n)}const e=Rk;return t}function Bv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Bv(t,e[s],n,r,i);return null}return n=_d(n),t&&t[Xs]?t.O(e,n,Ys(r)?!!r.capture:!!r,i):zv(t,e,n,!0,r,i)}function jv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)jv(t,e[s],n,r,i);else r=Ys(r)?!!r.capture:!!r,n=_d(n),t&&t[Xs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Vc(s,n,r,i),-1<n&&(wl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ed(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vc(e,n,r,i)),(n=-1<t?e[t]:null)&&wd(n))}function wd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Xs])bc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Hv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ed(e))?(bc(n,t),n.h==0&&(n.src=null,e[vd]=null)):wl(t)}}}function Hv(t){return t in Ou?Ou[t]:Ou[t]="on"+t}function Rk(t,e){if(t.ba)t=!0;else{e=new ks(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&wd(t),t=n.call(r,e)}return t}function Ed(t){return t=t[vd],t instanceof El?t:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function _d(t){return typeof t=="function"?t:(t[xu]||(t[xu]=function(e){return t.handleEvent(e)}),t[xu])}function Te(){Mn.call(this),this.i=new El(this),this.P=this,this.I=null}Re(Te,Mn);Te.prototype[Xs]=!0;Te.prototype.removeEventListener=function(t,e,n,r){jv(this,t,e,n,r)};function Ae(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(r,t),bv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Po(o,r,!0,e)&&i}if(o=e.g=t,i=Po(o,r,!0,e)&&i,i=Po(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Po(o,r,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wl(n[r]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Te.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Po(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&bc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Sd=$.JSON.stringify;function Ok(){var t=Kv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xk{constructor(){this.h=this.g=null}add(e,n){const r=qv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pk,t=>t.reset());class Pk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Lk(t){$.setTimeout(()=>{throw t},0)}function Wv(t,e){zc||Mk(),Bc||(zc(),Bc=!0),Kv.add(t,e)}var zc;function Mk(){var t=$.Promise.resolve(void 0);zc=function(){t.then($k)}}var Bc=!1,Kv=new xk;function $k(){for(var t;t=Ok();){try{t.h.call(t.g)}catch(n){Lk(n)}var e=qv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bc=!1}function _l(t,e){Te.call(this),this.h=t||1,this.g=e||$,this.j=Ue(this.lb,this),this.l=Date.now()}Re(_l,Te);D=_l.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(Id(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Id(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){_l.X.M.call(this),Id(this),delete this.g};function Td(t,e,n){if(typeof t=="function")n&&(t=Ue(t,n));else if(t&&typeof t.handleEvent=="function")t=Ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Gv(t){t.g=Td(()=>{t.g=null,t.i&&(t.i=!1,Gv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Uk extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gv(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(t){Mn.call(this),this.h=t,this.g={}}Re(Cs,Mn);var Gp=[];function Qv(t,e,n,r){Array.isArray(n)||(n&&(Gp[0]=n.toString()),n=Gp);for(var i=0;i<n.length;i++){var s=Vv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Yv(t){yd(t.g,function(e,n){this.g.hasOwnProperty(n)&&wd(e)},t),t.g={}}Cs.prototype.M=function(){Cs.X.M.call(this),Yv(this)};Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sl(){this.g=!0}Sl.prototype.Aa=function(){this.g=!1};function Fk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function bk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Lr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zk(t,n)+(r?" "+r:"")})}function Vk(t,e){t.info(function(){return"TIMEOUT: "+e})}Sl.prototype.info=function(){};function zk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Sd(n)}catch{return e}}var pr={},Qp=null;function Il(){return Qp=Qp||new Te}pr.Pa="serverreachability";function Xv(t){Fe.call(this,pr.Pa,t)}Re(Xv,Fe);function Ns(t){const e=Il();Ae(e,new Xv(e))}pr.STAT_EVENT="statevent";function Jv(t,e){Fe.call(this,pr.STAT_EVENT,t),this.stat=e}Re(Jv,Fe);function He(t){const e=Il();Ae(e,new Jv(e,t))}pr.Qa="timingevent";function Zv(t,e){Fe.call(this,pr.Qa,t),this.size=e}Re(Zv,Fe);function Js(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Tl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},e0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function kd(){}kd.prototype.h=null;function Yp(t){return t.h||(t.h=t.i())}function t0(){}var Zs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cd(){Fe.call(this,"d")}Re(Cd,Fe);function Nd(){Fe.call(this,"c")}Re(Nd,Fe);var jc;function kl(){}Re(kl,kd);kl.prototype.g=function(){return new XMLHttpRequest};kl.prototype.i=function(){return{}};jc=new kl;function eo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Cs(this),this.O=Bk,t=Uc?125:void 0,this.T=new _l(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new n0}function n0(){this.i=null,this.g="",this.h=!1}var Bk=45e3,Hc={},ba={};D=eo.prototype;D.setTimeout=function(t){this.O=t};function qc(t,e,n){t.K=1,t.v=Nl(Yt(e)),t.s=n,t.P=!0,r0(t,null)}function r0(t,e){t.F=Date.now(),to(t),t.A=Yt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),h0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new n0,t.g=x0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Uk(Ue(t.La,t,t.g),t.N)),Qv(t.S,t.g,"readystatechange",t.ib),e=t.H?Fv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ns(),Fk(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const c=Bt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Uc||this.g&&(this.h.h||this.g.fa()||em(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ns(3):Ns(2)),Cl(this);var n=this.g.aa();this.Y=n;t:if(i0(this)){var r=em(this.g);t="";var i=r.length,s=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),es(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,bk(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ua(a)){var u=a;break t}}u=null}if(n=u)Lr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wc(this,n);else{this.i=!1,this.o=3,He(12),qn(this),es(this);break e}}this.P?(s0(this,c,o),Uc&&this.i&&c==3&&(Qv(this.S,this.T,"tick",this.hb),this.T.start())):(Lr(this.j,this.m,o,null),Wc(this,o)),c==4&&qn(this),this.i&&!this.I&&(c==4?A0(this.l,this):(this.i=!1,to(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),qn(this),es(this)}}}catch{}finally{}};function i0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function s0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=jk(t,n),i==ba){e==4&&(t.o=4,He(14),r=!1),Lr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Hc){t.o=4,He(15),Lr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Lr(t.j,t.m,i,null),Wc(t,i);i0(t)&&i!=ba&&i!=Hc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ld(e),e.K=!0,He(11))):(Lr(t.j,t.m,n,"[Invalid Chunked Response]"),qn(t),es(t))}D.hb=function(){if(this.g){var t=Bt(this.g),e=this.g.fa();this.C<e.length&&(Cl(this),s0(this,t,e),this.i&&t!=4&&to(this))}};function jk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ba:(n=Number(e.substring(n,r)),isNaN(n)?Hc:(r+=1,r+n>e.length?ba:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,qn(this)};function to(t){t.V=Date.now()+t.O,o0(t,t.O)}function o0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Js(Ue(t.gb,t),e)}function Cl(t){t.B&&($.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Vk(this.j,this.A),this.K!=2&&(Ns(),He(17)),qn(this),this.o=2,es(this)):o0(this,this.V-t)};function es(t){t.l.G==0||t.I||A0(t.l,t)}function qn(t){Cl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Id(t.T),Yv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Wc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Kc(n.h,t))){if(!t.J&&Kc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ba(n),Rl(n);else break e;Pd(n),He(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Js(Ue(n.cb,n),6e3));if(1>=p0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Wn(n,11)}else if((t.J||n.g==t)&&Ba(n),!Ua(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ad(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=O0(r,r.H?r.ka:null,r.V),o.J){m0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Cl(a),to(a)),r.g=o}else C0(r);0<n.i.length&&Ol(n)}else u[0]!="stop"&&u[0]!="close"||Wn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Wn(n,7):xd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ns(4)}catch{}}function Hk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function a0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qk(t),r=Hk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var l0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xn){this.h=e!==void 0?e:t.h,Va(this,t.j),this.s=t.s,this.g=t.g,za(this,t.m),this.l=t.l,e=t.i;var n=new As;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xp(this,n),this.o=t.o}else t&&(n=String(t).match(l0))?(this.h=!!e,Va(this,n[1]||"",!0),this.s=bi(n[2]||""),this.g=bi(n[3]||"",!0),za(this,n[4]),this.l=bi(n[5]||"",!0),Xp(this,n[6]||"",!0),this.o=bi(n[7]||"")):(this.h=!!e,this.i=new As(null,this.h))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vi(e,Jp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vi(e,Jp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vi(n,n.charAt(0)=="/"?Qk:Gk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vi(n,Xk)),t.join("")};function Yt(t){return new Xn(t)}function Va(t,e,n){t.j=n?bi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function za(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xp(t,e,n){e instanceof As?(t.i=e,Jk(t.i,t.h)):(n||(e=Vi(e,Yk)),t.i=new As(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Nl(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Kk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Kk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jp=/[#\/\?@]/g,Gk=/[#\?:]/g,Qk=/[#\?]/g,Yk=/[#\?@]/g,Xk=/#/g;function As(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $n(t){t.g||(t.g=new Map,t.h=0,t.i&&Wk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=As.prototype;D.add=function(t,e){$n(this),this.i=null,t=mi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function u0(t,e){$n(t),e=mi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function c0(t,e){return $n(t),e=mi(t,e),t.g.has(e)}D.forEach=function(t,e){$n(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){$n(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){$n(this);let e=[];if(typeof t=="string")c0(this,t)&&(e=e.concat(this.g.get(mi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return $n(this),this.i=null,t=mi(this,t),c0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function h0(t,e,n){u0(t,e),0<n.length&&(t.i=null,t.g.set(mi(t,e),md(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function mi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Jk(t,e){e&&!t.j&&($n(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(u0(this,r),h0(this,i,n))},t)),t.j=e}var Zk=class{constructor(e,n){this.h=e,this.g=n}};function d0(t){this.l=t||eC,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eC=10;function f0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function p0(t){return t.h?1:t.g?t.g.size:0}function Kc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ad(t,e){t.g?t.g.add(e):t.h=e}function m0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}d0.prototype.cancel=function(){if(this.i=g0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function g0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return md(t.i)}function Dd(){}Dd.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Dd.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function tC(){this.g=new Dd}function nC(t,e,n){const r=n||"";try{a0(t,function(i,s){let o=i;Ys(i)&&(o=Sd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rC(t,e){const n=new Sl;if($.Image){const r=new Image;r.onload=xo(Lo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xo(Lo,n,r,"TestLoadImage: error",!1,e),r.onabort=xo(Lo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xo(Lo,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Lo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function no(t){this.l=t.ac||null,this.j=t.jb||!1}Re(no,kd);no.prototype.g=function(){return new Al(this.l,this.j)};no.prototype.i=function(t){return function(){return t}}({});function Al(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Re(Al,Te);var Rd=0;D=Al.prototype;D.open=function(t,e){if(this.readyState!=Rd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ds(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=Rd};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;y0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function y0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ro(this):Ds(this),this.readyState==3&&y0(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,ro(this))};D.Ua=function(t){this.g&&(this.response=t,ro(this))};D.ga=function(){this.g&&ro(this)};function ro(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ds(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iC=$.JSON.parse;function le(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=v0,this.K=this.L=!1}Re(le,Te);var v0="",sC=/^https?$/i,oC=["POST","PUT"];D=le.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jc.g(),this.C=this.u?Yp(this.u):Yp(jc),this.g.onreadystatechange=Ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Zp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=Lv(oC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_0(this),0<this.B&&((this.K=aC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ue(this.qa,this)):this.A=Td(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zp(this,s)}};function aC(t){return ni&&Tk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Zp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,w0(t),Dl(t)}function w0(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Dl(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dl(this,!0)),le.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?E0(this):this.fb())};D.fb=function(){E0(this)};function E0(t){if(t.h&&typeof pd<"u"&&(!t.C[1]||Bt(t)!=4||t.aa()!=2)){if(t.v&&Bt(t)==4)Td(t.Ha,0,t);else if(Ae(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(l0)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!sC.test(i?i.toLowerCase():"")}n=r}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",w0(t)}}finally{Dl(t)}}}}function Dl(t,e){if(t.g){_0(t);const n=t.g,r=t.C[0]?$a:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=r}catch{}}}function _0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iC(e)}};function em(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case v0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function S0(t){let e="";return yd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Od(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=S0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function xi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function I0(t){this.Ca=0,this.i=[],this.j=new Sl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xi("baseRetryDelayMs",5e3,t),this.bb=xi("retryDelaySeedMs",1e4,t),this.$a=xi("forwardChannelMaxRetries",2,t),this.ta=xi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new d0(t&&t.concurrentRequestLimit),this.Fa=new tC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=I0.prototype;D.ma=8;D.G=1;function xd(t){if(T0(t),t.G==3){var e=t.U++,n=Yt(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),io(t,n),e=new eo(t,t.j,e,void 0),e.K=2,e.v=Nl(Yt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=x0(e.l,null),e.g.da(e.v)),e.F=Date.now(),to(e)}R0(t)}function Rl(t){t.g&&(Ld(t),t.g.cancel(),t.g=null)}function T0(t){Rl(t),t.u&&($.clearTimeout(t.u),t.u=null),Ba(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Ol(t){f0(t.h)||t.m||(t.m=!0,Wv(t.Ja,t),t.C=0)}function lC(t,e){return p0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Js(Ue(t.Ja,t,e),D0(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new eo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Fv(s),bv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=k0(this,i,e),n=Yt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),io(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(S0(s)))+"&"+e:this.o&&Od(n,this.o,s)),Ad(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,qc(i,n,null)):qc(i,n,e),this.G=2}}else this.G==3&&(t?tm(this,t):this.i.length==0||f0(this.h)||tm(this))};function tm(t,e){var n;e?n=e.m:n=t.U++;const r=Yt(t.F);re(r,"SID",t.I),re(r,"RID",n),re(r,"AID",t.T),io(t,r),t.o&&t.s&&Od(r,t.o,t.s),n=new eo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=k0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ad(t.h,n),qc(n,r,e)}function io(t,e){t.ia&&yd(t.ia,function(n,r){re(e,r,n)}),t.l&&a0({},function(n,r){re(e,r,n)})}function k0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ue(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{nC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function C0(t){t.g||t.u||(t.Z=1,Wv(t.Ia,t),t.A=0)}function Pd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Js(Ue(t.Ia,t),D0(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,N0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Js(Ue(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,He(10),Rl(this),N0(this))};function Ld(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function N0(t){t.g=new eo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Yt(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),io(t,e),t.o&&t.s&&Od(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nl(Yt(e)),n.s=null,n.P=!0,r0(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Rl(this),Pd(this),He(19))};function Ba(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function A0(t,e){var n=null;if(t.g==e){Ba(t),Ld(t),t.g=null;var r=2}else if(Kc(t.h,e))n=e.D,m0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Il(),Ae(r,new Zv(r,n)),Ol(t)}else C0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&lC(t,e)||r==2&&Pd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Wn(t,5);break;case 4:Wn(t,10);break;case 3:Wn(t,6);break;default:Wn(t,2)}}}function D0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Wn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ue(t.kb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Va(n,"https"),Nl(n)),rC(n.toString(),r)}else He(2);t.G=0,t.l&&t.l.va(e),R0(t),T0(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function R0(t){if(t.G=0,t.la=[],t.l){const e=g0(t.h);(e.length!=0||t.i.length!=0)&&(Hp(t.la,e),Hp(t.la,t.i),t.h.i.length=0,md(t.i),t.i.length=0),t.l.ua()}}function O0(t,e,n){var r=n instanceof Xn?Yt(n):new Xn(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),za(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Xn(null,void 0);r&&Va(s,r),e&&(s.g=e),i&&za(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&re(r,n,e),re(r,"VER",t.ma),io(t,r),r}function x0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new le(new no({jb:!0})):new le(t.ra),e.Ka(t.H),e}function P0(){}D=P0.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function ja(){if(ni&&!(10<=Number(kk)))throw Error("Environmental error: no available transport.")}ja.prototype.g=function(t,e){return new it(t,e)};function it(t,e){Te.call(this),this.g=new I0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ua(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ua(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}Re(it,Te);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=O0(t,null,t.V),Ol(t)};it.prototype.close=function(){xd(this.g)};it.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Sd(t),t=n);e.i.push(new Zk(e.ab++,t)),e.G==3&&Ol(e)};it.prototype.M=function(){this.g.l=null,delete this.j,xd(this.g),delete this.g,it.X.M.call(this)};function L0(t){Cd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Re(L0,Cd);function M0(){Nd.call(this),this.status=1}Re(M0,Nd);function gi(t){this.g=t}Re(gi,P0);gi.prototype.xa=function(){Ae(this.g,"a")};gi.prototype.wa=function(t){Ae(this.g,new L0(t))};gi.prototype.va=function(t){Ae(this.g,new M0)};gi.prototype.ua=function(){Ae(this.g,"b")};ja.prototype.createWebChannel=ja.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Tl.NO_ERROR=0;Tl.TIMEOUT=8;Tl.HTTP_ERROR=6;e0.COMPLETE="complete";t0.EventType=Zs;Zs.OPEN="a";Zs.CLOSE="b";Zs.ERROR="c";Zs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.Oa;le.prototype.getLastErrorCode=le.prototype.Ea;le.prototype.getStatus=le.prototype.aa;le.prototype.getResponseJson=le.prototype.Sa;le.prototype.getResponseText=le.prototype.fa;le.prototype.send=le.prototype.da;le.prototype.setWithCredentials=le.prototype.Ka;var uC=function(){return new ja},cC=function(){return Il()},Pu=Tl,hC=e0,dC=pr,nm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fC=no,Mo=t0,pC=le;const rm="@firebase/firestore";/**
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
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
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
 */let yi="9.17.1";/**
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
 */const cr=new nd("@firebase/firestore");function im(){return cr.logLevel}function O(t,...e){if(cr.logLevel<=W.DEBUG){const n=e.map(Md);cr.debug(`Firestore (${yi}): ${t}`,...n)}}function Xt(t,...e){if(cr.logLevel<=W.ERROR){const n=e.map(Md);cr.error(`Firestore (${yi}): ${t}`,...n)}}function Gc(t,...e){if(cr.logLevel<=W.WARN){const n=e.map(Md);cr.warn(`Firestore (${yi}): ${t}`,...n)}}function Md(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function M(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function X(t,e){t||M()}function F(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class gC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yC{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new $0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Pe(e)}}class vC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(X(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new vC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.A=n.token,new EC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function SC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class U0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new ye(0,0))}static max(){return new U(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rs{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends Rs{construct(e,n,r){return new ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const IC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Rs{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return IC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ee.fromString(e))}static fromName(e){return new P(ee.fromString(e).popFirst(5))}static empty(){return new P(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ee(e.slice()))}}function TC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new Dn(i,P.empty(),e)}function kC(t){return new Dn(t.readTime,t.key,-1)}class Dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dn(U.min(),P.empty(),-1)}static max(){return new Dn(U.max(),P.empty(),-1)}}function CC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:K(t.largestBatchId,e.largestBatchId))}/**
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
 */const NC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function so(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==NC)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function oo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $d{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}$d.at=-1;/**
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
 */class DC{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Os{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Os("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Os&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function sm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function F0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function xl(t){return t==null}function Ha(t){return t===0&&1/t==-1/0}function RC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const OC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(X(!!t),typeof t=="string"){let e=0;const n=OC.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
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
 */function b0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function V0(t){const e=t.mapValue.fields.__previous_value__;return b0(e)?V0(e):e}function xs(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */const $o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?b0(t)?4:xC(t)?9007199254740991:10:M()}function Mt(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xs(t).isEqual(xs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Rn(r.timestampValue),o=Rn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ii(r.bytesValue).isEqual(ii(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return de(r.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return de(r.integerValue)===de(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=de(r.doubleValue),o=de(i.doubleValue);return s===o?Ha(s)===Ha(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(sm(s)!==sm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Mt(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function Ps(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=de(i.integerValue||i.doubleValue),a=de(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return om(t.timestampValue,e.timestampValue);case 4:return om(xs(t),xs(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ii(i),a=ii(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=K(o[l],a[l]);if(u!==0)return u}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=K(de(i.latitude),de(s.latitude));return o!==0?o:K(de(i.longitude),de(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=si(o[l],a[l]);if(u)return u}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===$o.mapValue&&s===$o.mapValue)return 0;if(i===$o.mapValue)return 1;if(s===$o.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=K(a[c],u[c]);if(h!==0)return h;const d=si(o[a[c]],l[u[c]]);if(d!==0)return d}return K(a.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function om(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=Rn(t),r=Rn(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function oi(t){return Qc(t)}function Qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Rn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Qc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Qc(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function am(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yc(t){return!!t&&"integerValue"in t}function Ud(t){return!!t&&"arrayValue"in t}function lm(t){return!!t&&"nullValue"in t}function um(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ts(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qa{constructor(e,n){this.position=e,this.inclusive=n}}function cm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=si(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class z0{}class pe extends z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LC(e,n,r):n==="array-contains"?new UC(e,r):n==="in"?new FC(e,r):n==="not-in"?new bC(e,r):n==="array-contains-any"?new VC(e,r):new pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MC(e,r):new $C(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class kt extends z0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new kt(e,n)}matches(e){return B0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function B0(t){return t.op==="and"}function j0(t){return PC(t)&&B0(t)}function PC(t){for(const e of t.filters)if(e instanceof kt)return!1;return!0}function Xc(t){if(t instanceof pe)return t.field.canonicalString()+t.op.toString()+oi(t.value);if(j0(t))return t.filters.map(e=>Xc(e)).join(",");{const e=t.filters.map(n=>Xc(n)).join(",");return`${t.op}(${e})`}}function H0(t,e){return t instanceof pe?function(n,r){return r instanceof pe&&n.op===r.op&&n.field.isEqual(r.field)&&Mt(n.value,r.value)}(t,e):t instanceof kt?function(n,r){return r instanceof kt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&H0(s,r.filters[o]),!0):!1}(t,e):void M()}function q0(t){return t instanceof pe?function(e){return`${e.field.canonicalString()} ${e.op} ${oi(e.value)}`}(t):t instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(q0).join(" ,")+"}"}(t):"Filter"}class LC extends pe{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class MC extends pe{constructor(e,n){super(e,"in",n),this.keys=W0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $C extends pe{constructor(e,n){super(e,"not-in",n),this.keys=W0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class UC extends pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ud(n)&&Ps(n.arrayValue,this.value)}}class FC extends pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ps(this.value.arrayValue,n)}}class bC extends pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ps(this.value.arrayValue,n)}}class VC extends pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ps(this.value.arrayValue,r))}}/**
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
 */class Hr{constructor(e,n="asc"){this.field=e,this.dir=n}}function zC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uo(this.root,e,this.comparator,!0)}}class Uo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ce.EMPTY,this.right=s??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dm(this.data.getIterator())}getIteratorFrom(e){return new dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Et([])}unionWith(e){let n=new ve($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ts(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ts(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ea(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ut(ts(this.value))}}function K0(t){const e=[];return vi(t.fields,(n,r)=>{const i=new $e([n]);if(ea(r)){const s=K0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
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
 */class Me{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,U.min(),U.min(),U.min(),ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Me(e,1,n,U.min(),r,i,0)}static newNoDocument(e,n){return new Me(e,2,n,U.min(),U.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,U.min(),U.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class BC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function fm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BC(t,e,n,r,i,s,o)}function Fd(t){const e=F(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oi(r)).join(",")),e.ft=n}return e.ft}function bd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!H0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hm(t.startAt,e.startAt)&&hm(t.endAt,e.endAt)}function Jc(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class wi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function jC(t,e,n,r,i,s,o,a){return new wi(t,e,n,r,i,s,o,a)}function Vd(t){return new wi(t)}function pm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function G0(t){return t.collectionGroup!==null}function qr(t){const e=F(t);if(e.dt===null){e.dt=[];const n=Pl(e),r=zd(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Hr(n)),e.dt.push(new Hr($e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Hr($e.keyField(),s))}}}return e.dt}function Jt(t){const e=F(t);if(!e._t)if(e.limitType==="F")e._t=fm(e.path,e.collectionGroup,qr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of qr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Hr(s.field,o))}const r=e.endAt?new qa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new qa(e.startAt.position,e.startAt.inclusive):null;e._t=fm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Zc(t,e){e.getFirstInequalityField(),Pl(t);const n=t.filters.concat([e]);return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function eh(t,e,n){return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return bd(Jt(t),Jt(e))&&t.limitType===e.limitType}function Q0(t){return`${Fd(Jt(t))}|lt:${t.limitType}`}function th(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>q0(r)).join(", ")}]`),xl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oi(r)).join(",")),`Target(${n})`}(Jt(t))}; limitType=${t.limitType})`}function Ml(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of qr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=cm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,qr(n),r)||n.endAt&&!function(i,s,o){const a=cm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,qr(n),r))}(t,e)}function HC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Y0(t){return(e,n)=>{let r=!1;for(const i of qr(t)){const s=qC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qC(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?si(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */function X0(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ha(e)?"-0":e}}function J0(t){return{integerValue:""+t}}function WC(t,e){return RC(e)?J0(e):X0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $l{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Wa?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ls?ew(t,e):t instanceof Ms?tw(t,e):function(r,i){const s=Z0(r,i),o=mm(s)+mm(r.gt);return Yc(s)&&Yc(r.gt)?J0(o):X0(r.yt,o)}(t,e)}function GC(t,e,n){return t instanceof Ls?ew(t,e):t instanceof Ms?tw(t,e):n}function Z0(t,e){return t instanceof Ka?Yc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Wa extends $l{}class Ls extends $l{constructor(e){super(),this.elements=e}}function ew(t,e){const n=nw(e);for(const r of t.elements)n.some(i=>Mt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ms extends $l{constructor(e){super(),this.elements=e}}function tw(t,e){let n=nw(e);for(const r of t.elements)n=n.filter(i=>!Mt(i,r));return{arrayValue:{values:n}}}class Ka extends $l{constructor(e,n){super(),this.yt=e,this.gt=n}}function mm(t){return de(t.integerValue||t.doubleValue)}function nw(t){return Ud(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ls&&r instanceof Ls||n instanceof Ms&&r instanceof Ms?ri(n.elements,r.elements,Mt):n instanceof Ka&&r instanceof Ka?Mt(n.gt,r.gt):n instanceof Wa&&r instanceof Wa}(t.transform,e.transform)}class YC{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function rw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sw(t.key,Ht.none()):new ao(t.key,t.data,Ht.none());{const n=t.data,r=ut.empty();let i=new ve($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(t.key,r,new Et(i.toArray()),Ht.none())}}function XC(t,e,n){t instanceof ao?function(r,i,s){const o=r.value.clone(),a=ym(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(r,i,s){if(!ta(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ym(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(iw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ns(t,e,n,r){return t instanceof ao?function(i,s,o,a){if(!ta(i.precondition,s))return o;const l=i.value.clone(),u=vm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(i,s,o,a){if(!ta(i.precondition,s))return o;const l=vm(i.fieldTransforms,a,s),u=s.data;return u.setAll(iw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ta(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function JC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Z0(r.transform,i||null);s!=null&&(n===null&&(n=ut.empty()),n.set(r.field,s))}return n||null}function gm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ri(n,r,(i,s)=>QC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends Ul{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends Ul{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ym(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,GC(o,a,n[i]))}return r}function vm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KC(s,o,e))}return r}class sw extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZC extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eN{constructor(e){this.count=e}}/**
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
 */var he,H;function tN(t){switch(t){default:return M();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function ow(t){if(t===void 0)return Xt("GRPC error has no .code"),w.UNKNOWN;switch(t){case he.OK:return w.OK;case he.CANCELLED:return w.CANCELLED;case he.UNKNOWN:return w.UNKNOWN;case he.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case he.INTERNAL:return w.INTERNAL;case he.UNAVAILABLE:return w.UNAVAILABLE;case he.UNAUTHENTICATED:return w.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case he.NOT_FOUND:return w.NOT_FOUND;case he.ALREADY_EXISTS:return w.ALREADY_EXISTS;case he.PERMISSION_DENIED:return w.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case he.ABORTED:return w.ABORTED;case he.OUT_OF_RANGE:return w.OUT_OF_RANGE;case he.UNIMPLEMENTED:return w.UNIMPLEMENTED;case he.DATA_LOSS:return w.DATA_LOSS;default:return M()}}(H=he||(he={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return F0(this.inner)}size(){return this.innerSize}}/**
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
 */const nN=new we(P.comparator);function Zt(){return nN}const aw=new we(P.comparator);function zi(...t){let e=aw;for(const n of t)e=e.insert(n.key,n);return e}function lw(t){let e=aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kn(){return rs()}function uw(){return rs()}function rs(){return new Ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const rN=new we(P.comparator),iN=new ve(P.comparator);function B(...t){let e=iN;for(const n of t)e=e.add(n);return e}const sN=new ve(K);function cw(){return sN}/**
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
 */class Fl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fl(U.min(),i,cw(),Zt(),B())}}class lo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lo(r,n,B(),B(),B())}}/**
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
 */class na{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class hw{constructor(e,n){this.targetId=e,this.Et=n}}class dw{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wm{constructor(){this.At=0,this.Rt=_m(),this.bt=Be.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=B(),n=B(),r=B();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new lo(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=_m()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class oN{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Zt(),this.qt=Em(),this.Ut=new ve(K)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Jc(s))if(r===0){const o=new P(s.path);this.Qt(n,o,Me.newNoDocument(o,U.min()))}else X(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Jc(a.target)){const l=new P(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Me.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=B();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Fl(e,n,this.Ut,this.Lt,r);return this.Lt=Zt(),this.qt=Em(),this.Ut=new ve(K),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new wm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ve(K),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new wm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Em(){return new we(P.comparator)}function _m(){return new we(P.comparator)}/**
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
 */const aN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uN=(()=>({and:"AND",or:"OR"}))();class cN{constructor(e,n){this.databaseId=e,this.wt=n}}function Ga(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(t,e){return t.wt?e.toBase64():e.toUint8Array()}function hN(t,e){return Ga(t,e.toTimestamp())}function Lt(t){return X(!!t),U.fromTimestamp(function(e){const n=Rn(e);return new ye(n.seconds,n.nanos)}(t))}function Bd(t,e){return function(n){return new ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function pw(t){const e=ee.fromString(t);return X(vw(e)),e}function nh(t,e){return Bd(t.databaseId,e.path)}function Lu(t,e){const n=pw(e);if(n.get(1)!==t.databaseId.projectId)throw new A(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(mw(n))}function rh(t,e){return Bd(t.databaseId,e)}function dN(t){const e=pw(t);return e.length===4?ee.emptyPath():mw(e)}function ih(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mw(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sm(t,e,n){return{name:nh(t,e),fields:n.value.mapValue.fields}}function fN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(X(u===void 0||typeof u=="string"),Be.fromBase64String(u||"")):(X(u===void 0||u instanceof Uint8Array),Be.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:ow(l.code);return new A(u,l.message||"")}(o);n=new dw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lu(t,r.document.name),s=Lt(r.document.updateTime),o=r.document.createTime?Lt(r.document.createTime):U.min(),a=new ut({mapValue:{fields:r.document.fields}}),l=Me.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new na(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lu(t,r.document),s=r.readTime?Lt(r.readTime):U.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new na([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lu(t,r.document),s=r.removedTargetIds||[];n=new na([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new eN(i),o=r.targetId;n=new hw(o,s)}}return n}function pN(t,e){let n;if(e instanceof ao)n={update:Sm(t,e.key,e.value)};else if(e instanceof sw)n={delete:nh(t,e.key)};else if(e instanceof mr)n={update:Sm(t,e.key,e.data),updateMask:IN(e.fieldMask)};else{if(!(e instanceof ZC))return M();n={verify:nh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Wa)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ls)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ms)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ka)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:hN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function mN(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Lt(r.updateTime):Lt(i);return s.isEqual(U.min())&&(s=Lt(i)),new YC(s,r.transformResults||[])}(n,e))):[]}function gN(t,e){return{documents:[rh(t,e.path)]}}function yN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=rh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return yw(kt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:wr(c.field),direction:EN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||xl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vN(t){let e=dN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=gw(c);return h instanceof kt&&j0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Hr(Er(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,xl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new qa(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new qa(d,h)}(n.endAt)),jC(e,i,o,s,a,"F",l,u)}function wN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return M()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Er(e.unaryFilter.field);return pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Er(e.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(e.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Er(e.unaryFilter.field);return pe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return pe.create(Er(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(n=>gw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function EN(t){return aN[t]}function _N(t){return lN[t]}function SN(t){return uN[t]}function wr(t){return{fieldPath:t.canonicalString()}}function Er(t){return $e.fromServerFormat(t.fieldPath)}function yw(t){return t instanceof pe?function(e){if(e.op==="=="){if(um(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NAN"}};if(lm(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(um(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NAN"}};if(lm(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(e.field),op:_N(e.op),value:e.value}}}(t):t instanceof kt?function(e){const n=e.getFilters().map(r=>yw(r));return n.length===1?n[0]:{compositeFilter:{op:SN(e.op),filters:n}}}(t):M()}function IN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class TN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ns(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ns(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=rw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),B())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,r)=>gm(n,r))&&ri(this.baseMutations,e.baseMutations,(n,r)=>gm(n,r))}}class jd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=rN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jd(e,n,r,i)}}/**
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
 */class kN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Zn{constructor(e,n,r,i,s=U.min(),o=U.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class CN{constructor(e){this.ie=e}}function NN(t){const e=vN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eh(e,e.limit,"L"):e}/**
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
 */class AN{constructor(){this.Je=new DN}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Dn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class DN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(ee.comparator)).toArray()}}/**
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
 */class ai{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ai(0)}static vn(){return new ai(-1)}}/**
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
 */class RN{constructor(){this.changes=new Ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class ON{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ns(r.mutation,i,Et.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,n,r=B()){const i=Kn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,B()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Zt();const o=rs(),a=rs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof mr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ns(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new ON(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=rs();let i=new we((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Et.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||B()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=uw();c.forEach(d=>{if(!s.has(d)){const g=rw(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):G0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Kn());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,B())).next(c=>({batchId:a,changes:lw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=zi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new wi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Me.newInvalidDocument(u)))});let o=zi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ns(u.mutation,l,Et.empty(),ye.now()),Ml(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class PN{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Lt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:NN(r.bundledQuery),readTime:Lt(r.readTime)}}(n)),S.resolve()}}/**
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
 */class LN{constructor(){this.overlays=new we(P.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Kn(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Kn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Kn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kN(n,r));let s=this.es.get(n);s===void 0&&(s=B(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Hd{constructor(){this.ns=new ve(_e.ss),this.rs=new ve(_e.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new _e(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new _e(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new P(new ee([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new P(new ee([])),r=new _e(n,e),i=new _e(n,e+1);let s=B();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return P.comparator(e.key,n.key)||K(e._s,n._s)}static os(e,n){return K(e._s,n._s)||P.comparator(e.key,n.key)}}/**
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
 */class MN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ve(_e.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(K);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new _e(new P(s),0);let a=new ve(K);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new _e(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $N{constructor(e){this.Es=e,this.docs=new we(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=Zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zt();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CC(kC(c),r)<=0||(i.has(c.key)||Ml(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UN(this)}getSize(e){return S.resolve(this.size)}}class UN extends RN{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class FN{constructor(e){this.persistence=e,this.Rs=new Ei(n=>Fd(n),bd),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Hd,this.targetCount=0,this.vs=ai.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ai(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
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
 */class bN{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new $d(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new FN(this),this.indexManager=new AN,this.remoteDocumentCache=function(r){return new $N(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new CN(n),this.Ns=new PN(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new MN(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new VN(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class VN extends AC{constructor(e){super(),this.currentSequenceNumber=e}}class qd{constructor(e){this.persistence=e,this.Fs=new Hd,this.$s=null}static Bs(e){return new qd(e)}get Ls(){if(this.$s)return this.$s;throw M()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=P.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Wd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=B(),i=B();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wd(e,n.fromCache,r,i)}}/**
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
 */class zN{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(pm(n))return S.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=eh(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=B(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,eh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return pm(n)||i.isEqual(U.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(im()<=W.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),th(n)),this.Bi(e,o,n,TC(i,-1)))})}Fi(e,n){let r=new ve(Y0(e));return n.forEach((i,s)=>{Ml(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return im()<=W.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",th(n)),this.Ni.getDocumentsMatchingQuery(e,n,Dn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class BN{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new we(K),this.Ui=new Ei(s=>Fd(s),bd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xN(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function jN(t,e,n,r){return new BN(t,e,n,r)}async function ww(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=B();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function HN(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);X(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=B();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ew(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function qN(t,e){const n=F(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Be.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,R){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=Zt(),u=B();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(WN(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(U.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function WN(t,e,n){let r=B(),i=B();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Zt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function KN(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GN(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Zn(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function sh(t,e,n){const r=F(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!oo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Im(t,e,n){const r=F(t);let i=U.min(),s=B();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),h=c.Ui.get(u);return h!==void 0?S.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,Jt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:B())).next(a=>(QN(r,HC(e),a),{documents:a,Hi:s})))}function QN(t,e,n){let r=t.Ki.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Tm{constructor(){this.activeTargetIds=cw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YN{constructor(){this.Lr=new Tm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Tm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XN{Ur(e){}shutdown(){}}/**
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
 */class km{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const JN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ZN{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class eA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);O("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw Gc("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=JN[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new pC;a.setWithCredentials(!0),a.listenOnce(hC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Pu.NO_ERROR:const u=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Pu.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new A(w.DEADLINE_EXCEEDED,"Request time out"));break;case Pu.HTTP_ERROR:const c=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(v)>=0?v:w.UNKNOWN}(d.status);o(new A(g,d.message))}else o(new A(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(w.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uC(),o=cC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fC({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new ZN({Hr:y=>{h?O("Connection","Not sending because WebChannel is closed:",y):(c||(O("Connection","Opening WebChannel transport."),u.open(),c=!0),O("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,R)=>{y.listen(v,p=>{try{R(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,Mo.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),g(u,Mo.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),g(u,Mo.EventType.ERROR,y=>{h||(h=!0,Gc("Connection","WebChannel transport errored:",y),d.io(new A(w.UNAVAILABLE,"The operation could not be completed")))}),g(u,Mo.EventType.MESSAGE,y=>{var v;if(!h){const R=y.data[0];X(!!R);const p=R,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){O("Connection","WebChannel received error:",f);const m=f.status;let E=function(C){const N=he[C];if(N!==void 0)return ow(N)}(m),I=f.message;E===void 0&&(E=w.INTERNAL,I="Unknown error status: "+m+" with message "+f.message),h=!0,d.io(new A(E,I)),u.close()}else O("Connection","WebChannel received:",R),d.ro(R)}}),g(o,dC.STAT_EVENT,y=>{y.stat===nm.PROXY?O("Connection","Detected buffering proxy"):y.stat===nm.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Mu(){return typeof document<"u"?document:null}/**
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
 */function bl(t){return new cN(t,!0)}class _w{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Sw{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new _w(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new A(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tA extends Sw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=fN(this.yt,e),r=function(i){if(!("targetChange"in i))return U.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?U.min():s.readTime?Lt(s.readTime):U.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=ih(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=Jc(a)?{documents:gN(i,a)}:{query:yN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=fw(i,s.resumeToken):s.snapshotVersion.compareTo(U.min())>0&&(o.readTime=Ga(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=wN(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=ih(this.yt),n.removeTarget=e,this.Bo(n)}}class nA extends Sw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=mN(e.writeResults,e.commitTime),r=Lt(e.commitTime);return this.listener.Zo(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ih(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pN(this.yt,r))};this.Bo(n)}}/**
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
 */class rA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new A(w.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(w.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(w.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class iA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Xt(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class sA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{gr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l._u.add(4),await uo(l),l.gu.set("Unknown"),l._u.delete(4),await Vl(l)}(this))})}),this.gu=new iA(r,i)}}async function Vl(t){if(gr(t))for(const e of t.wu)await e(!0)}async function uo(t){for(const e of t.wu)await e(!1)}function Iw(t,e){const n=F(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Qd(n)?Gd(n):_i(n).ko()&&Kd(n,e))}function Tw(t,e){const n=F(t),r=_i(n);n.du.delete(e),r.ko()&&kw(n,e),n.du.size===0&&(r.ko()?r.Fo():gr(n)&&n.gu.set("Unknown"))}function Kd(t,e){t.yu.Ot(e.targetId),_i(t).zo(e)}function kw(t,e){t.yu.Ot(e),_i(t).Ho(e)}function Gd(t){t.yu=new oN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),_i(t).start(),t.gu.uu()}function Qd(t){return gr(t)&&!_i(t).No()&&t.du.size>0}function gr(t){return F(t)._u.size===0}function Cw(t){t.yu=void 0}async function oA(t){t.du.forEach((e,n)=>{Kd(t,e)})}async function aA(t,e){Cw(t),Qd(t)?(t.gu.hu(e),Gd(t)):t.gu.set("Unknown")}async function lA(t,e,n){if(t.gu.set("Online"),e instanceof dw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qa(t,r)}else if(e instanceof na?t.yu.Kt(e):e instanceof hw?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(U.min()))try{const r=await Ew(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Be.EMPTY_BYTE_STRING,l.snapshotVersion)),kw(i,a);const u=new Zn(l.target,a,1,l.sequenceNumber);Kd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Qa(t,r)}}async function Qa(t,e,n){if(!oo(e))throw e;t._u.add(1),await uo(t),t.gu.set("Offline"),n||(n=()=>Ew(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Vl(t)})}function Nw(t,e){return e().catch(n=>Qa(t,n,e))}async function zl(t){const e=F(t),n=On(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;uA(e);)try{const i=await KN(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,cA(e,i)}catch(i){await Qa(e,i)}Aw(e)&&Dw(e)}function uA(t){return gr(t)&&t.fu.length<10}function cA(t,e){t.fu.push(e);const n=On(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Aw(t){return gr(t)&&!On(t).No()&&t.fu.length>0}function Dw(t){On(t).start()}async function hA(t){On(t).eu()}async function dA(t){const e=On(t);for(const n of t.fu)e.Xo(n.mutations)}async function fA(t,e,n){const r=t.fu.shift(),i=jd.from(r,e,n);await Nw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zl(t)}async function pA(t,e){e&&On(t).Yo&&await async function(n,r){if(i=r.code,tN(i)&&i!==w.ABORTED){const s=n.fu.shift();On(n).Mo(),await Nw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await zl(n)}var i}(t,e),Aw(t)&&Dw(t)}async function Cm(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=gr(n);n._u.add(3),await uo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Vl(n)}async function mA(t,e){const n=F(t);e?(n._u.delete(2),await Vl(n)):e||(n._u.add(2),await uo(n),n.gu.set("Unknown"))}function _i(t){return t.pu||(t.pu=function(e,n,r){const i=F(e);return i.su(),new tA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:oA.bind(null,t),Zr:aA.bind(null,t),Wo:lA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Qd(t)?Gd(t):t.gu.set("Unknown")):(await t.pu.stop(),Cw(t))})),t.pu}function On(t){return t.Iu||(t.Iu=function(e,n,r){const i=F(e);return i.su(),new nA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:hA.bind(null,t),Zr:pA.bind(null,t),tu:dA.bind(null,t),Zo:fA.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await zl(t)):(await t.Iu.stop(),t.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Yd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Yd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xd(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),oo(t))return new A(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=zi(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Nm{constructor(){this.Tu=new we(P.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):M():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class li{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new li(e,n,Wr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class gA{constructor(){this.Au=void 0,this.listeners=[]}}class yA{constructor(){this.queries=new Ei(e=>Q0(e),Ll),this.onlineState="Unknown",this.Ru=new Set}}async function vA(t,e){const n=F(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gA),i)try{s.Au=await n.onListen(r)}catch(o){const a=Xd(o,`Initialization of query '${th(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Jd(n)}async function wA(t,e){const n=F(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EA(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Jd(n)}function _A(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Jd(t){t.Ru.forEach(e=>{e.next()})}class SA{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Rw{constructor(e){this.key=e}}class Ow{constructor(e){this.key=e}}class IA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=B(),this.mutatedKeys=B(),this.Gu=Y0(e),this.Qu=new Wr(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Nm,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Ml(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),R=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),R=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),R=!0):d&&!g&&(r.track({type:1,doc:d}),R=!0,(l||u)&&(a=!0)),R&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new li(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Nm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=B(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Ow(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Rw(r))}),n}tc(e){this.qu=e.Hi,this.Ku=B();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return li.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class TA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kA{constructor(e){this.key=e,this.nc=!1}}class CA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ei(a=>Q0(a),Ll),this.rc=new Map,this.oc=new Set,this.uc=new we(P.comparator),this.cc=new Map,this.ac=new Hd,this.hc={},this.lc=new Map,this.fc=ai.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function NA(t,e){const n=UA(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await GN(n.localStore,Jt(e));n.isPrimaryClient&&Iw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AA(n,e,r,a==="current",o.resumeToken)}return i}async function AA(t,e,n,r,i){t._c=(h,d,g)=>async function(y,v,R,p){let f=v.view.Wu(R);f.$i&&(f=await Im(y.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,f)));const m=p&&p.targetChanges.get(v.targetId),E=v.view.applyChanges(f,y.isPrimaryClient,m);return Dm(y,v.targetId,E.Xu),E.snapshot}(t,h,d,g);const s=await Im(t.localStore,e,!0),o=new IA(e,s.Hi),a=o.Wu(s.documents),l=lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Dm(t,n,u.Xu);const c=new TA(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function DA(t,e){const n=F(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Ll(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await sh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Tw(n.remoteStore,r.targetId),oh(n,r.targetId)}).catch(so)):(oh(n,r.targetId),await sh(n.localStore,r.targetId,!0))}async function RA(t,e,n){const r=FA(t);try{const i=await function(s,o){const a=F(s),l=ye.now(),u=o.reduce((d,g)=>d.add(g.key),B());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Zt(),y=B();return a.Gi.getEntries(d,u).next(v=>{g=v,g.forEach((R,p)=>{p.isValidDocument()||(y=y.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const R=[];for(const p of o){const f=JC(p,c.get(p.key).overlayedDocument);f!=null&&R.push(new mr(p.key,f,K0(f.value.mapValue),Ht.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,R,o)}).next(v=>{h=v;const R=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,R)})}).then(()=>({batchId:h.batchId,changes:lw(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new we(K)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await co(r,i.changes),await zl(r.remoteStore)}catch(i){const s=Xd(i,"Failed to persist write");n.reject(s)}}async function xw(t,e){const n=F(t);try{const r=await qN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?X(o.nc):i.removedDocuments.size>0&&(X(o.nc),o.nc=!1))}),await co(n,r,e)}catch(r){await so(r)}}function Am(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Jd(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OA(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new we(P.comparator);o=o.insert(s,Me.newNoDocument(s,U.min()));const a=B().add(s),l=new Fl(U.min(),new Map,new ve(K),o,a);await xw(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Zd(r)}else await sh(r.localStore,e,!1).then(()=>oh(r,e,n)).catch(so)}async function xA(t,e){const n=F(t),r=e.batch.batchId;try{const i=await HN(n.localStore,e);Lw(n,r,null),Pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await co(n,i)}catch(i){await so(i)}}async function PA(t,e,n){const r=F(t);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(X(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Lw(r,e,n),Pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await co(r,i)}catch(i){await so(i)}}function Pw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Lw(t,e,n){const r=F(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Mw(t,r)})}function Mw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Tw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Zd(t))}function Dm(t,e,n){for(const r of n)r instanceof Rw?(t.ac.addReference(r.key,e),LA(t,r)):r instanceof Ow?(O("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Mw(t,r.key)):M()}function LA(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.oc.add(r),Zd(t))}function Zd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new P(ee.fromString(e)),r=t.fc.next();t.cc.set(r,new kA(n)),t.uc=t.uc.insert(n,r),Iw(t.remoteStore,new Zn(Jt(Vd(n.path)),r,2,$d.at))}}async function co(t,e,n){const r=F(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Wd.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!oo(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function MA(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await ww(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new A(w.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await co(n,r.ji)}}function $A(t,e){const n=F(t),r=n.cc.get(e);if(r&&r.nc)return B().add(r.key);{let i=B();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function UA(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$A.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OA.bind(null,e),e.sc.Wo=EA.bind(null,e.eventManager),e.sc.wc=_A.bind(null,e.eventManager),e}function FA(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PA.bind(null,e),e}class bA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=bl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return jN(this.persistence,new zN,e.initialUser,this.yt)}yc(e){return new bN(qd.Bs,this.yt)}gc(e){return new YN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Am(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MA.bind(null,this.syncEngine),await mA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yA}createDatastore(e){const n=bl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new eA(i));var i;return function(s,o,a,l){return new rA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Am(this.syncEngine,a,0),o=km.C()?new km:new XN,new sA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new CA(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await uo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function $w(t,e,n){if(!n)throw new A(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zA(t,e,n,r){if(e===!0&&r===!0)throw new A(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rm(t){if(!P.isDocumentKey(t))throw new A(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Om(t){if(P.isDocumentKey(t))throw new A(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bl(t);throw new A(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const xm=new Map;class Pm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class jl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mC;switch(n.type){case"gapi":const r=n.client;return new wC(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xm.get(e);n&&(O("ComponentProvider","Removing Datastore"),xm.delete(e),n.terminate())}(this),Promise.resolve()}}function BA(t,e,n,r={}){var i;const s=(t=is(t,jl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Gc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Pe.MOCK_USER;else{o=b_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new A(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Pe(l)}t._authCredentials=new gC(new $0(o,a))}}/**
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
 */class nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class Cn extends yr{constructor(e,n,r){super(e,n,Vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new P(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function jA(t,e,...n){if(t=ze(t),$w("collection","path",e),t instanceof jl){const r=ee.fromString(e,...n);return Om(r),new Cn(t,null,r)}{if(!(t instanceof nt||t instanceof Cn))throw new A(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return Om(r),new Cn(t.firestore,null,r)}}function HA(t,e,...n){if(t=ze(t),arguments.length===1&&(e=U0.R()),$w("doc","path",e),t instanceof jl){const r=ee.fromString(e,...n);return Rm(r),new nt(t,null,new P(r))}{if(!(t instanceof nt||t instanceof Cn))throw new A(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return Rm(r),new nt(t.firestore,t instanceof Cn?t.converter:null,new P(r))}}/**
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
 *//**
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
 */class qA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class WA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=U0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function KA(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ww(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function GA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QA(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Cm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Cm(e.remoteStore,s)),t.onlineComponents=e}async function QA(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await KA(t,new bA)),t.offlineComponents}async function Uw(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await GA(t,new VA)),t.onlineComponents}function YA(t){return Uw(t).then(e=>e.syncEngine)}async function Lm(t){const e=await Uw(t),n=e.eventManager;return n.onListen=NA.bind(null,e.syncEngine),n.onUnlisten=DA.bind(null,e.syncEngine),n}class XA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new _w(this,"async_queue_retry"),this.Wc=()=>{const n=Mu();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Mu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Mu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Jn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!oo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Xt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Yd.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&M()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Mm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ya extends jl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new XA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bw(this),this._firestoreClient.terminate()}}function JA(t,e){const n=typeof t=="object"?t:nv(),r=typeof t=="string"?t:e||"(default)",i=id(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$_("firestore");s&&BA(i,...s)}return i}function Fw(t){return t._firestoreClient||bw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new DC(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new WA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ui(Be.fromBase64String(e))}catch(n){throw new A(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ui(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ef{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vw{constructor(e){this._methodName=e}}/**
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
 */class tf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
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
 */const ZA=/^__.*__$/;class eD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}function zw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Xa(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(zw(this.sa)&&ZA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class tD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||bl(e)}da(e,n,r,i=!1){return new nf({sa:e,methodName:n,fa:r,path:$e.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Bw(t){const e=t._freezeSettings(),n=bl(t._databaseId);return new tD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);qw("Data must be an object, but it was:",o,r);const a=jw(r,o);let l,u;if(s.merge)l=new Et(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=iD(e,h,n);if(!o.contains(d))throw new A(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);oD(c,d)||c.push(d)}l=new Et(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new eD(new ut(a),l,u)}function rD(t,e,n,r=!1){return rf(n,t.da(r?4:3,e))}function rf(t,e){if(Hw(t=ze(t)))return qw("Unsupported field value:",e,t),jw(t,e);if(t instanceof Vw)return function(n,r){if(!zw(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=rf(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WC(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Ga(r.yt,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ga(r.yt,i)}}if(n instanceof tf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ui)return{bytesValue:fw(r.yt,n._byteString)};if(n instanceof nt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Bl(n)}`)}(t,e)}function jw(t,e){const n={};return F0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(t,(r,i)=>{const s=rf(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Hw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof tf||t instanceof ui||t instanceof nt||t instanceof Vw)}function qw(t,e,n){if(!Hw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Bl(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function iD(t,e,n){if((e=ze(e))instanceof ef)return e._internalPath;if(typeof e=="string")return Ww(t,e);throw Xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const sD=new RegExp("[~\\*/\\[\\]]");function Ww(t,e,n){if(e.search(sD)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ef(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(w.INVALID_ARGUMENT,a+t+l)}function oD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Kw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aD extends Kw{data(){return super.data()}}function sf(t,e){return typeof e=="string"?Ww(t,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
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
 */function lD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class of{}class Gw extends of{}function uD(t,e,...n){let r=[];e instanceof of&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof lf).length,o=i.filter(a=>a instanceof af).length;if(s>1||s>0&&o>0)throw new A(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class af extends Gw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new af(e,n,r)}_apply(e){const n=this._parse(e);return Qw(e._query,n),new yr(e.firestore,e.converter,Zc(e._query,n))}_parse(e){const n=Bw(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Um(c,u);const d=[];for(const g of c)d.push($m(a,i,g));h={arrayValue:{values:d}}}else h=$m(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Um(c,u),h=rD(o,s,c,u==="in"||u==="not-in");return pe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class lf extends of{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Qw(s,a),s=Zc(s,a)}(e._query,n),new yr(e.firestore,e.converter,Zc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uf extends Gw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new uf(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Hr(i,s);return function(a,l){if(zd(a)===null){const u=Pl(a);u!==null&&Yw(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new wi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function cD(t,e="asc"){const n=e,r=sf("orderBy",t);return uf._create(r,n)}function $m(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new A(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!G0(e)&&n.indexOf("/")!==-1)throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ee.fromString(n));if(!P.isDocumentKey(r))throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return am(t,new P(r))}if(n instanceof nt)return am(t,n._key);throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bl(n)}.`)}function Um(t,e){if(!Array.isArray(t)||t.length===0)throw new A(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new A(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Qw(t,e){if(e.isInequality()){const r=Pl(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=zd(t);s!==null&&Yw(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Yw(t,e,n){if(!n.isEqual(e))throw new A(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class hD{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){const r={};return vi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new tf(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=V0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xs(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ee.fromString(e);X(vw(r));const i=new Os(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||Xt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function dD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xw extends Kw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ra extends Xw{data(e={}){return super.data(e)}}class fD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ra(this._firestore,this._userDataWriter,r.key,r,new Bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ra(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Bi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ra(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Bi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:pD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class Jw extends hD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function mD(t,e){const n=is(t.firestore,Ya),r=HA(t),i=dD(t.converter,e);return yD(n,[nD(Bw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function gD(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Mm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof nt)u=is(t.firestore,Ya),c=Vd(t._key.path),l={next:h=>{e[o]&&e[o](vD(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=is(t,yr);u=is(h.firestore,Ya),c=h._query;const d=new Jw(u);l={next:g=>{e[o]&&e[o](new fD(u,d,h,g))},error:e[o+1],complete:e[o+2]},lD(t._query)}return function(h,d,g,y){const v=new qA(y),R=new SA(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>vA(await Lm(h),R)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>wA(await Lm(h),R))}}(Fw(u),c,a,l)}function yD(t,e){return function(n,r){const i=new Jn;return n.asyncQueue.enqueueAndForget(async()=>RA(await YA(n),r,i)),i.promise}(Fw(t),e)}function vD(t,e,n){const r=n.docs.get(e._key),i=new Jw(t);return new Xw(t,i,e._key,r,new Bi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){yi=n})(js),ei(new or("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ya(new yC(n.getProvider("auth-internal")),new _C(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kn(rm,"3.8.3",t),kn(rm,"3.8.3","esm2017")})();function wD(t){return Q("div",{className:"chat-container",children:t.data.map(e=>Q("div",{children:er("fieldset",{style:{color:"white"},className:e.uid===t.uid?"send":"receive",children:[Q("legend",{children:e.name}),Q("p",{children:e.text})]})}))})}const ED="/assets/send-eff09256.png",_D="/assets/logout-4925acd0.png";function SD(t){const e=JA(),n=jA(e,"messages"),[r,i]=ji.useState([]),[s,o]=ji.useState("");function a(){gD(uD(n,cD("createdAt")),u=>{const c=[];u.forEach(h=>{c.push(h.data())}),i(c)})}ji.useEffect(()=>{a()},[]),console.log("running");async function l(u){u.preventDefault(),await mD(n,JSON.parse(JSON.stringify({createdAt:Date.now(),text:s,uid:t.uid.uid,name:t.dName}))),o("")}return er("div",{className:"page2",children:[Q("nav",{children:Q("button",{onClick:t.signOut,className:"sign-out",children:Q("img",{src:_D,alt:"",className:"send-image"})})}),Q(wD,{data:r,uid:t.uid.uid}),er("form",{onSubmit:l,className:"bottom-area",children:[Q("input",{type:"text",value:s,onChange:u=>o(u.target.value),className:"message-field",placeholder:"Message"}),Q("button",{type:"submit",className:"send-button",children:Q("img",{src:ED,alt:"",className:"send-image"})})]})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ID(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function TD(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Mr=function(){return Mr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Mr.apply(this,arguments)},Zw=function(t){return{loading:t==null,value:t}},kD=function(){return function(t,e){switch(e.type){case"error":return Mr(Mr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Zw(e.defaultValue);case"value":return Mr(Mr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},CD=function(t){var e=t?t():void 0,n=wt.useReducer(kD(),Zw(e)),r=n[0],i=n[1],s=wt.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=wt.useCallback(function(l){i({type:"error",error:l})},[]),a=wt.useCallback(function(l){i({type:"value",value:l})},[]);return wt.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},ND=function(t,e){var n=CD(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return wt.useEffect(function(){var l=XI(t,function(u){return ID(void 0,void 0,void 0,function(){var c;return TD(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};function AD(){const[t,e]=ji.useState(!1),[n,r]=ji.useState({name:"",email:"",password:""});tv({apiKey:"AIzaSyC80O-bbmUfmZ1KtVfSjL5SQZd-4ZAkhAQ",authDomain:"fir-2d336.firebaseapp.com",projectId:"fir-2d336",storageBucket:"fir-2d336.appspot.com",messagingSenderId:"852338299358",appId:"1:852338299358:web:3d5b40477224600481cd4f",measurementId:"G-8D68YR7Q2K"});const i=hk(),s=i.currentUser,[o]=ND(i);function a(d){r(g=>({...g,[d.target.name]:d.target.value}))}function l(){WI(i,n.email,n.password).then(()=>{console.log("LoggedIn"),r(d=>({name:"",email:"",password:""}))}).catch(d=>{console.log(d.message)})}function u(){qI(i,n.email,n.password).then(()=>{i.currentUser&&GI(i.currentUser,{displayName:n.name})}).then(d=>{r(g=>({name:"",email:"",password:""}))}).catch(d=>{console.log(d.message)})}function c(){r(d=>({name:"",email:"",password:""})),e(!0)}function h(){i.currentUser&&i.signOut()}return Q("div",{children:o?Q(SD,{signOut:h,uid:s,dName:i.currentUser.displayName}):t?Q(D_,{change:a,submit:u,name:n.name,email:n.email,pass:n.password}):Q(dk,{change:a,submit:l,new:c,email:n.email,pass:n.password})})}A_.render(Q(AD,{}),document.getElementById("root"));
