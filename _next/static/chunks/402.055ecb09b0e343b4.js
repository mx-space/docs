"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402],{1402:(e,t,s)=>{s.r(t),s.d(t,{default:()=>K});var r=s(475),i=Object.create,n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,h=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),d=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of o(t))l.call(e,i)||i===s||n(e,i,{get:()=>t[i],enumerable:!(r=a(t,i))||r.enumerable});return e},u=(e,t,s)=>(s=null!=e?i(h(e)):{},d(!t&&e&&e.__esModule?s:n(s,"default",{value:e,enumerable:!0}),e)),p=c(e=>{function t(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`positive integer expected, not ${e}`)}function s(e){if("boolean"!=typeof e)throw Error(`boolean expected, not ${e}`)}function r(e){return e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name}function i(e,...t){if(!r(e))throw Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)}function n(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");t(e.outputLen),t(e.blockLen)}function a(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function o(e,t){i(e);let s=t.outputLen;if(e.length<s)throw Error(`digestInto() expects output buffer of length at least ${s}`)}Object.defineProperty(e,"__esModule",{value:!0}),e.isBytes=r,e.number=t,e.bool=s,e.bytes=i,e.hash=n,e.exists=a,e.output=o,e.default={number:t,bool:s,bytes:i,hash:n,exists:a,output:o}}),f=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.add5L=e.add5H=e.add4H=e.add4L=e.add3H=e.add3L=e.rotlBL=e.rotlBH=e.rotlSL=e.rotlSH=e.rotr32L=e.rotr32H=e.rotrBL=e.rotrBH=e.rotrSL=e.rotrSH=e.shrSL=e.shrSH=e.toBig=void 0,e.fromBig=r,e.split=i,e.add=w;var t=BigInt(0x100000000-1),s=BigInt(32);function r(e,i=!1){return i?{h:Number(e&t),l:Number(e>>s&t)}:{h:0|Number(e>>s&t),l:0|Number(e&t)}}function i(e,t=!1){let s=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:a,l:o}=r(e[i],t);[s[i],n[i]]=[a,o]}return[s,n]}var n=(e,t)=>BigInt(e>>>0)<<s|BigInt(t>>>0);e.toBig=n;var a=(e,t,s)=>e>>>s;e.shrSH=a;var o=(e,t,s)=>e<<32-s|t>>>s;e.shrSL=o;var h=(e,t,s)=>e>>>s|t<<32-s;e.rotrSH=h;var l=(e,t,s)=>e<<32-s|t>>>s;e.rotrSL=l;var c=(e,t,s)=>e<<64-s|t>>>s-32;e.rotrBH=c;var d=(e,t,s)=>e>>>s-32|t<<64-s;e.rotrBL=d;var u=(e,t)=>t;e.rotr32H=u;var p=(e,t)=>e;e.rotr32L=p;var f=(e,t,s)=>e<<s|t>>>32-s;e.rotlSH=f;var g=(e,t,s)=>t<<s|e>>>32-s;e.rotlSL=g;var y=(e,t,s)=>t<<s-32|e>>>64-s;e.rotlBH=y;var m=(e,t,s)=>e<<s-32|t>>>64-s;function w(e,t,s,r){let i=(t>>>0)+(r>>>0);return{h:e+s+(i/0x100000000|0)|0,l:0|i}}e.rotlBL=m;var b=(e,t,s)=>(e>>>0)+(t>>>0)+(s>>>0);e.add3L=b;var v=(e,t,s,r)=>t+s+r+(e/0x100000000|0)|0;e.add3H=v;var S=(e,t,s,r)=>(e>>>0)+(t>>>0)+(s>>>0)+(r>>>0);e.add4L=S;var x=(e,t,s,r,i)=>t+s+r+i+(e/0x100000000|0)|0;e.add4H=x;var I=(e,t,s,r,i)=>(e>>>0)+(t>>>0)+(s>>>0)+(r>>>0)+(i>>>0);e.add5L=I;var k=(e,t,s,r,i,n)=>t+s+r+i+n+(e/0x100000000|0)|0;e.add5H=k,e.default={fromBig:r,split:i,toBig:n,shrSH:a,shrSL:o,rotrSH:h,rotrSL:l,rotrBH:c,rotrBL:d,rotr32H:u,rotr32L:p,rotlSH:f,rotlSL:g,rotlBH:y,rotlBL:m,add:w,add3L:b,add3H:v,add4L:S,add4H:x,add5H:k,add5L:I}}),g=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=void 0,e.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0}),y=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Hash=e.nextTick=e.byteSwapIfBE=e.byteSwap=e.isLE=e.rotl=e.rotr=e.createView=e.u32=e.u8=void 0,e.isBytes=function(e){return e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name},e.byteSwap32=function(t){for(let s=0;s<t.length;s++)t[s]=(0,e.byteSwap)(t[s])},e.bytesToHex=function(e){(0,s.bytes)(e);let t="";for(let s=0;s<e.length;s++)t+=r[e[s]];return t},e.hexToBytes=function(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length,s=t/2;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let r=new Uint8Array(s);for(let t=0,i=0;t<s;t++,i+=2){let s=n(e.charCodeAt(i)),a=n(e.charCodeAt(i+1));if(void 0===s||void 0===a)throw Error('hex string expected, got non-hex character "'+(e[i]+e[i+1])+'" at index '+i);r[t]=16*s+a}return r},e.asyncLoop=o,e.utf8ToBytes=h,e.toBytes=l,e.concatBytes=function(...e){let t=0;for(let r=0;r<e.length;r++){let i=e[r];(0,s.bytes)(i),t+=i.length}let r=new Uint8Array(t);for(let t=0,s=0;t<e.length;t++){let i=e[t];r.set(i,s),s+=i.length}return r},e.checkOpts=function(e,t){if(void 0!==t&&"[object Object]"!==c.call(t))throw Error("Options should be object or undefined");return Object.assign(e,t)},e.wrapConstructor=function(e){let t=t=>e().update(l(t)).digest(),s=e();return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.create=()=>e(),t},e.wrapConstructorWithOpts=function(e){let t=(t,s)=>e(s).update(l(t)).digest(),s=e({});return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.create=t=>e(t),t},e.wrapXOFConstructorWithOpts=function(e){let t=(t,s)=>e(s).update(l(t)).digest(),s=e({});return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.create=t=>e(t),t},e.randomBytes=function(e=32){if(t.crypto&&"function"==typeof t.crypto.getRandomValues)return t.crypto.getRandomValues(new Uint8Array(e));if(t.crypto&&"function"==typeof t.crypto.randomBytes)return t.crypto.randomBytes(e);throw Error("crypto.getRandomValues must be defined")};var t=g(),s=p();e.u8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),e.u32=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),e.createView=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),e.rotr=(e,t)=>e<<32-t|e>>>t,e.rotl=(e,t)=>e<<t|e>>>32-t>>>0,e.isLE=68===new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],e.byteSwap=e=>e<<24&0xff000000|e<<8&0xff0000|e>>>8&65280|e>>>24&255,e.byteSwapIfBE=e.isLE?e=>e:t=>(0,e.byteSwap)(t);var r=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0")),i={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function n(e){return e>=i._0&&e<=i._9?e-i._0:e>=i._A&&e<=i._F?e-(i._A-10):e>=i._a&&e<=i._f?e-(i._a-10):void 0}var a=async()=>{};async function o(t,s,r){let i=Date.now();for(let n=0;n<t;n++){r(n);let t=Date.now()-i;t>=0&&t<s||(await (0,e.nextTick)(),i+=t)}}function h(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function l(e){return"string"==typeof e&&(e=h(e)),(0,s.bytes)(e),e}e.nextTick=a,e.Hash=class{clone(){return this._cloneInto()}};var c={}.toString}),m=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.shake256=e.shake128=e.keccak_512=e.keccak_384=e.keccak_256=e.keccak_224=e.sha3_512=e.sha3_384=e.sha3_256=e.sha3_224=e.Keccak=void 0,e.keccakP=v;var t=p(),s=f(),r=y(),i=[],n=[],a=[],o=BigInt(0),h=BigInt(1),l=BigInt(2),c=BigInt(7),d=BigInt(256),u=BigInt(113);for(let e=0,t=h,s=1,r=0;e<24;e++){[s,r]=[r,(2*s+3*r)%5],i.push(2*(5*r+s)),n.push((e+1)*(e+2)/2%64);let p=o;for(let e=0;e<7;e++)(t=(t<<h^(t>>c)*u)%d)&l&&(p^=h<<(h<<BigInt(e))-h);a.push(p)}var[g,m]=(0,s.split)(a,!0),w=(e,t,r)=>r>32?(0,s.rotlBH)(e,t,r):(0,s.rotlSH)(e,t,r),b=(e,t,r)=>r>32?(0,s.rotlBL)(e,t,r):(0,s.rotlSL)(e,t,r);function v(e,t=24){let s=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let t=0;t<10;t++)s[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let r=(t+8)%10,i=(t+2)%10,n=s[i],a=s[i+1],o=w(n,a,1)^s[r],h=b(n,a,1)^s[r+1];for(let s=0;s<50;s+=10)e[t+s]^=o,e[t+s+1]^=h}let t=e[2],a=e[3];for(let s=0;s<24;s++){let r=n[s],o=w(t,a,r),h=b(t,a,r),l=i[s];t=e[l],a=e[l+1],e[l]=o,e[l+1]=h}for(let t=0;t<50;t+=10){for(let r=0;r<10;r++)s[r]=e[t+r];for(let r=0;r<10;r++)e[t+r]^=~s[(r+2)%10]&s[(r+4)%10]}e[0]^=g[r],e[1]^=m[r]}s.fill(0)}var S=class e extends r.Hash{constructor(e,s,i,n=!1,a=24){if(super(),this.blockLen=e,this.suffix=s,this.outputLen=i,this.enableXOF=n,this.rounds=a,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,t.number)(i),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,r.u32)(this.state)}keccak(){r.isLE||(0,r.byteSwap32)(this.state32),v(this.state32,this.rounds),r.isLE||(0,r.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(e){(0,t.exists)(this);let{blockLen:s,state:i}=this,n=(e=(0,r.toBytes)(e)).length;for(let t=0;t<n;){let r=Math.min(s-this.pos,n-t);for(let s=0;s<r;s++)i[this.pos++]^=e[t++];this.pos===s&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:s,blockLen:r}=this;e[s]^=t,128&t&&s===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){(0,t.exists)(this,!1),(0,t.bytes)(e),this.finish();let s=this.state,{blockLen:r}=this;for(let t=0,i=e.length;t<i;){this.posOut>=r&&this.keccak();let n=Math.min(r-this.posOut,i-t);e.set(s.subarray(this.posOut,this.posOut+n),t),this.posOut+=n,t+=n}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,t.number)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,t.output)(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:s,suffix:r,outputLen:i,rounds:n,enableXOF:a}=this;return t||(t=new e(s,r,i,a,n)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=n,t.suffix=r,t.outputLen=i,t.enableXOF=a,t.destroyed=this.destroyed,t}};e.Keccak=S;var x=(e,t,s)=>(0,r.wrapConstructor)(()=>new S(t,e,s));e.sha3_224=x(6,144,28),e.sha3_256=x(6,136,32),e.sha3_384=x(6,104,48),e.sha3_512=x(6,72,64),e.keccak_224=x(1,144,28),e.keccak_256=x(1,136,32),e.keccak_384=x(1,104,48),e.keccak_512=x(1,72,64);var I=(e,t,s)=>(0,r.wrapXOFConstructorWithOpts)((r={})=>new S(t,e,void 0===r.dkLen?s:r.dkLen,!0));e.shake128=I(31,168,16),e.shake256=I(31,136,32)}),w=c((e,t)=>{var{sha3_512:s}=m(),r=24,i=32,n=(e=4,t=Math.random)=>{let s="";for(;s.length<e;)s+=Math.floor(36*t()).toString(36);return s};function a(e){let t=BigInt(8),s=BigInt(0);for(let r of e.values())s=(s<<t)+BigInt(r);return s}var o=(e="")=>a(s(e)).toString(36).slice(1),h=Array.from({length:26},(e,t)=>String.fromCharCode(t+97)),l=e=>h[Math.floor(e()*h.length)],c=({globalObj:e="u">typeof global?global:"u">typeof window?window:{},random:t=Math.random}={})=>{let s=Object.keys(e).toString();return o(s.length?s+n(i,t):n(i,t)).substring(0,i)},d=e=>()=>e++,u=0x1c6b1f1f,p=({random:e=Math.random,counter:t=d(Math.floor(e()*u)),length:s=r,fingerprint:i=c({random:e})}={})=>function(){let r=l(e),a=Date.now().toString(36),h=t().toString(36),c=n(s,e),d=`${a+c+h+i}`;return`${r+o(d).substring(1,s)}`},f=p();t.exports.getConstants=()=>({defaultLength:r,bigLength:i}),t.exports.init=p,t.exports.createId=f,t.exports.bufToBigInt=a,t.exports.createCounter=d,t.exports.createFingerprint=c,t.exports.isCuid=(e,{minLength:t=2,maxLength:s=i}={})=>{let r=e.length;return!!("string"==typeof e&&r>=t&&r<=s&&/^[a-z][0-9a-z]+$/.test(e))}}),b=c((e,t)=>{var{createId:s,init:r,getConstants:i,isCuid:n}=w();t.exports.createId=s,t.exports.init=r,t.exports.getConstants=i,t.exports.isCuid=n}),v=u(b(),1);Date.now().toString().slice(5);var S=BigInt(1e3),x=BigInt(1e6),I=BigInt(1e9);function k(e){var t;return{raw:Number(e),formatted:("number"==typeof(t=e)&&(t=BigInt(t)),t<S?`${t}ns`:t<x?`${t/S}\u03BCs`:t<I?`${t/x}ms`:`${t/I}s`)}}["arabic","armenian","bulgarian","danish","dutch","english","finnish","french","german","greek","hungarian","indian","indonesian","irish","italian","lithuanian","nepali","norwegian","portuguese","romanian","russian","serbian","slovenian","spanish","swedish","tamil","turkish","ukrainian","sanskrit"].join(`
 - `);var C="2.1.4",L={version:C},T=u(b(),1),A="orama_user_id";function O(e){return"object"==typeof e?JSON.stringify(e):`${e}`}var _=class{messages;inferenceType;oramaClient;endpoint;abortController;events;userContext;conversationID;lastInteractionParams;state=[];systemPrompts;constructor(e){let t=e.oramaClient.answersApiBaseURL||"https://answer.api.orama.com";this.messages=e.initialMessages||[],this.inferenceType=e.inferenceType,this.oramaClient=e.oramaClient,this.endpoint=`${t}/v1/answer?api-key=${this.oramaClient.api_key}`,this.events=e.events,this.conversationID=(0,T.createId)(),this.userContext=e.userContext}async askStream(e){return this.messages.push({role:"user",content:e.term??""}),this.fetchAnswer(e)}async ask(e){let t=await this.askStream(e),s="";for await(let e of t)s=e;return this.events?.onMessageChange&&this.events.onMessageChange(this.messages),s}getMessages(){return this.messages}clearSession(){this.messages=[],this.state=[],this.events?.onMessageChange&&this.events.onMessageChange(this.messages),this.events?.onStateChange&&this.events.onStateChange(this.state)}abortAnswer(){if(!this.abortController)throw Error("AbortController is not ready");this.abortController.abort(),this.abortController=void 0,this.state[this.state.length-1].aborted=!0}async regenerateLast({stream:e=!0}={}){if(0===this.state.length||0===this.messages.length)throw Error("No messages to regenerate");if(this.messages.at(-1)?.role!=="assistant")throw Error("Last message is not an assistant message");return this.messages.pop(),this.state.pop(),e?this.askStream(this.lastInteractionParams):this.ask(this.lastInteractionParams)}addNewEmptyAssistantMessage(){this.messages.push({role:"assistant",content:""})}async *fetchAnswer(e){this.abortController=new AbortController,this.lastInteractionParams=e;let t=(0,T.createId)(),s=null,r=this.state.length;this.state.push({interactionId:t,query:e.term??"",response:"",relatedQueries:null,sources:null,translatedQuery:null,segment:null,trigger:null,aborted:!1,loading:!0,error:!1,errorMessage:null});try{this.events?.onNewInteractionStarted&&this.events.onNewInteractionStarted(t),this.events?.onStateChange&&this.events.onStateChange(this.state);let i=new URLSearchParams;i.append("type",this.inferenceType),i.append("messages",JSON.stringify(this.messages)),i.append("query",e.term??""),i.append("conversationId",this.conversationID),i.append("userId",this.oramaClient.getUserId()),i.append("endpoint",this.oramaClient.endpoint),i.append("searchParams",JSON.stringify(e)),i.append("identity",this.oramaClient.getIdentity()??""),i.append("interactionId",t),i.append("alias",this.oramaClient.getAlias()??"");let n=this.getSystemPromptConfiguration();if(n&&i.append("systemPrompts",JSON.stringify(n)),this.userContext&&i.append("userContext",O(this.userContext)),e.userData&&i.append("userData",O(e.userData)),e.related){if(e.related?.howMany&&e.related?.howMany>5)throw Error("Can generate at most 5 related queries");i.append("related",JSON.stringify({enabled:!0,howMany:e.related.howMany??3,format:e.related.format??"question"}))}let a=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i.toString(),signal:this.abortController.signal});if(!a.ok||!a.body)throw Error(a.statusText);s=a.body.getReader();let o=new TextDecoder,h=[],l="";this.events?.onMessageLoading&&this.events.onMessageLoading(!0),this.addNewEmptyAssistantMessage();let c=this.messages.at(-1);for(;;){let e,{value:t,done:i}=await s.read();if(i)break;for(l+=o.decode(t,{stream:!0});-1!==(e=l.indexOf(`

`));){let t=l.slice(0,e);l=l.slice(e+2);try{let e=function(e){let[t,...s]=e.split(`
`),r=s.join(`
`).replace("data: ","");return{event:t.replace("event: ",""),data:r}}(t),s=JSON.parse(e.data);if("sources"===s.type)this.state[r].sources=s.message,this.events?.onSourceChange&&this.events.onSourceChange(s.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("query-translated"===s.type)this.state[r].translatedQuery=s.message,this.events?.onQueryTranslated&&this.events.onQueryTranslated(s.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("conversation-metadata"===s.type){let{segment:e,trigger:t}=s.message;e&&(this.state[r].segment=e),t&&(this.state[r].trigger=t),this.events?.onStateChange&&this.events.onStateChange(this.state)}else if("related-queries"===s.type)this.state[r].relatedQueries=s.message,this.events?.onRelatedQueries&&this.events.onRelatedQueries(s.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("text"===s.type)for(h.push(s.message);h.length>0;)c.content+=h.shift(),this.state[r].response=c.content,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageChange&&this.events.onMessageChange(this.messages),yield c.content}catch(e){console.error("Error parsing SSE event:",e),console.error("Raw message:",t)}}}}catch(e){if("AbortError"===e.name)this.state[r].aborted=!0,this.events?.onAnswerAborted&&this.events.onAnswerAborted(!0);else throw this.state[r].error=!0,this.state[r].errorMessage=e.message??"Unknown error",e}finally{s?.releaseLock(),this.state[r].loading=!1,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onInteractionDone&&this.events.onInteractionDone(this.state[r]),this.events?.onMessageLoading&&this.events.onMessageLoading(!1)}}setSystemPromptConfiguration(e){if(Array.isArray(e.systemPrompts)){if(!e.systemPrompts.every(e=>"string"==typeof e))throw Error("Invalid system prompt configuration");this.systemPrompts=e.systemPrompts}return this}getSystemPromptConfiguration(){return this.systemPrompts}},B=class{cache;config;constructor(e){this.cache=new Map,this.config=e}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){return this.cache.delete(e)}clear(){this.cache.clear()}size(){return this.cache.size}};function P(e,t){if("u">typeof navigator){"u">typeof navigator.sendBeacon&&navigator.sendBeacon(e,t);return}fetch(e,{method:"POST",body:t,headers:{"Content-Type":"application/json"}}).then(()=>{},e=>console.log(e))}var E=class e{data;params;config;profile;constructor(e,t){this.data=[],this.config=e,this.profile=t}setParams(e){this.params=e}static create(t,s){let r=new e(t,s);return r.start(),r}add(e){this.data.push({rawSearchString:e.rawSearchString,query:e.query,resultsCount:e.resultsCount,roundTripTime:e.roundTripTime,searchedAt:e.searchedAt,userId:this.profile.getUserId(),identity:this.profile.getIdentity(),alias:this.profile.getAlias(),referer:"u">typeof location?location.toString():void 0}),null!=this.params&&this.data.length>=this.config.flushSize&&this.flush()}flush(){if(null==this.params||0===this.data.length)return;let e=this.data;this.data=[];let t={source:"fe",deploymentID:this.params.deploymentID,index:this.params.index,oramaId:this.config.id,oramaVersion:L.version,userAgent:"u">typeof navigator?navigator.userAgent:void 0,events:e};P(`${this.params.endpoint}?api-key=${this.config.api_key}`,JSON.stringify(t))?.catch(e=>console.log(e))}start(){let e=setInterval(this.flush.bind(this),this.config.flushInterval);null!=e.unref&&e.unref()}},U=class{constructor(e){this.params=e}intervalId;start(){this.stop(),this.intervalId=setInterval(this.beat.bind(this),this.params.frequency)}stop(){void 0!==this.intervalId&&clearInterval(this.intervalId)}beat(){P(this.params.endpoint)?.catch(e=>console.log(e))}},H=u(b(),1),M=class{endpoint;apiKey;userId;identity;userAlias;params;constructor({endpoint:e,apiKey:t}){if(!e||!t)throw Error("Endpoint and API Key are required to create a Profile");if("string"!=typeof e||"string"!=typeof t)throw Error("Endpoint and API Key must be strings");if("u">typeof localStorage){let e=localStorage.getItem(A);e?this.userId=e:(this.userId=(0,H.createId)(),localStorage.setItem(A,this.userId))}else this.userId=(0,H.createId)();this.endpoint=e,this.apiKey=t}setParams(e){let{protocol:t,host:s}=new URL(e.identifyUrl),r=`${t}//${s}/identify`;this.params={identifyUrl:r,index:e.index}}getIdentity(){return this.identity}getUserId(){return this.userId}getAlias(){return this.userAlias}async sendProfileData(e){if(!this.params)throw Error("Orama Profile is not initialized");let t=JSON.stringify({...e,visitorId:this.getUserId(),index:this.params.index});await P(`${this.params?.identifyUrl}?api-key=${this.apiKey}`,t)}async identify(e,t){if("string"!=typeof t)throw Error("Identity must be a string");await e,await this.sendProfileData({entity:"identity",id:t}),this.identity=t}async alias(e,t){if("string"!=typeof t)throw Error("Identity must be a string");await e,await this.sendProfileData({entity:"alias",id:t}),this.userAlias=t}reset(){this.userId=(0,H.createId)(),this.identity=void 0,this.userAlias=void 0}},j=class{id=(0,v.createId)();api_key;endpoint;multiIndexSearch;mergeResults;multiIndexIndexes;answersApiBaseURL;collector;cache;profile;searchDebounceTimer;searchRequestCounter=0;blockSearchTillAuth=!1;heartbeat;initPromise;constructor(e){if("indexes"in e){this.api_key=e.indexes[0].api_key,this.multiIndexIndexes=e.indexes;let t=new URL(e.indexes[0].endpoint).origin;if(e.indexes.some(e=>new URL(e.endpoint).origin!==t))throw Error("All indexes must have the same endpoint origin");this.endpoint=t+"/v1/indexes",this.multiIndexSearch=!0,this.mergeResults=e.mergeResults??!0}else this.api_key=e.api_key,this.endpoint=e.endpoint,this.multiIndexSearch=!1,this.mergeResults=!0;if(this.answersApiBaseURL=e.answersApiBaseURL,this.profile=new M({endpoint:this.endpoint,apiKey:this.api_key}),!1!==e.telemetry){let t={id:this.id,api_key:this.api_key,flushInterval:e.telemetry?.flushInterval??5e3,flushSize:e.telemetry?.flushSize??25};this.collector=E.create(t,this.profile)}!1!==e.cache&&(this.cache=new B({})),this.init()}customerUserToken=void 0;searchToken=void 0;setAuthToken(e){null===e?this.customerUserToken=void 0:this.customerUserToken=e,this.searchToken=void 0,this.init()}onAuthTokenExpired;setOnAuthTokenExpired(e){this.onAuthTokenExpired=e}addSearchResultsToCollector(e,t,s,r){if(this.collector){if(Array.isArray(e))for(let i of e)this.collector.add({rawSearchString:s.term,resultsCount:i.hits?.length??0,roundTripTime:t,query:s,cached:r,searchedAt:new Date,userId:this.profile.getUserId()});else this.collector.add({rawSearchString:s.term,resultsCount:e?.hits?.length??0,roundTripTime:t,query:s,cached:r,searchedAt:new Date,userId:this.profile.getUserId()})}}async search(e,t){if(await this.initPromise,this.blockSearchTillAuth)return console.warn("Search request blocked until user is authenticated"),null;let s=++this.searchRequestCounter,r=`search-${JSON.stringify(e)}`,i=null,n,a=!1,o=t?.fresh!==!0&&this.cache?.has(r),h=async()=>{try{let s=Date.now();i=this.multiIndexSearch?await this.fetch("multi_search","POST",{q:{...e,mergeResults:this.mergeResults},sst:this.searchToken,indexes:this.multiIndexIndexes},t?.abortController):await this.fetch("search","POST",{q:e,sst:this.searchToken},t?.abortController);let a=Date.now();n=a-s;let o=await k(BigInt(1e6*a-1e6*s));if(Array.isArray(i))for(let e of i)e.elapsed=o;else i.elapsed=o;this.cache?.set(r,i)}catch(e){if("AbortError"!==e.name)throw console.error("Search request failed",e),e}return this.addSearchResultsToCollector(i,n,e,a),i};return o&&this.cache?(n=0,i=this.cache.get(r),a=!0,this.addSearchResultsToCollector(i,n,e,a),s===this.searchRequestCounter?i:null):t?.debounce?new Promise((e,s)=>{clearTimeout(this.searchDebounceTimer),this.searchDebounceTimer=setTimeout(async()=>{try{await h(),e(i)}catch(e){"AbortError"!==e.name&&(console.error("Search request failed",e),s(e))}},t?.debounce||300),"unref"in this.searchDebounceTimer&&this.searchDebounceTimer.unref()}):h()}async vectorSearch(e,t){await this.initPromise;let s=`vectorSearch-${JSON.stringify(e)}`,r,i,n=!1;if((t?.fresh!==!0&&this.cache?.has(s))===!0&&null!=this.cache)r=0,i=this.cache.get(s),n=!0;else{let n=Date.now();i=await this.fetch("vector-search2","POST",{q:e},t?.abortSignal??t?.abortController);let a=Date.now();i.elapsed=await k(BigInt(1e6*a-1e6*n)),r=a-n,this.cache?.set(s,i)}return null!=this.collector&&this.collector.add({rawSearchString:e.term,resultsCount:i.hits?.length??0,roundTripTime:r,query:e,cached:n,searchedAt:new Date,userId:this.profile.getUserId()}),i}createAnswerSession(e){return new _({inferenceType:e?.inferenceType||"documentation",initialMessages:e?.initialMessages||[],oramaClient:this,events:e?.events,userContext:e?.userContext,systemPrompts:e?.systemPrompts??[]})}startHeartBeat(e){this.heartbeat?.stop(),this.heartbeat=new U({...e,endpoint:`${this.endpoint}/health?api-key=${this.api_key}`}),this.heartbeat.start()}stopHeartBeat(){this.heartbeat?.stop()}async getPop(){return(await this.initPromise)?.pop??""}expirationTimer;init(){let e=["init","GET",void 0,void 0,{token:this.customerUserToken}];this.multiIndexSearch&&(e=["init_multi_search","POST",{indexes:this.multiIndexIndexes},void 0,{token:this.customerUserToken}]),this.initPromise=this.fetch(...e).then(e=>{if(this.collector?.setParams({endpoint:e.collectUrl,deploymentID:e.deploymentID,index:e.index}),this.profile?.setParams({identifyUrl:e.collectUrl,index:e.index}),e.searchSession){if("required"in e.searchSession&&!0===e.searchSession.required)this.blockSearchTillAuth=!0;else if("token"in e.searchSession){let t=e.searchSession.token;this.searchToken=t;let s=e.searchSession.maxAge;this.blockSearchTillAuth=!1,this.expirationTimer&&clearTimeout(this.expirationTimer),this.expirationTimer=setTimeout(()=>{this.searchToken===t&&(this.searchToken=void 0,this.blockSearchTillAuth=!0,this.onAuthTokenExpired?.(t))},1e3*s),"unref"in this.expirationTimer&&this.expirationTimer.unref()}}return e}).catch(e=>(console.log(e),null))}async fetch(e,t,s,r,i){let n=void 0!==r&&r?.signal!==void 0?r?.signal:r;if(n?.aborted===!0)throw Error("Request aborted");let a={method:t,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:n};"POST"===t&&void 0!==s&&(s.version=C,s.id=this.id,s.visitorId=this.profile.getUserId(),a.body=Object.entries(s).filter(([e,t])=>!!t).map(([e,t])=>`${e}=${encodeURIComponent(JSON.stringify(t))}`).join("&"));let o=new URL(`${this.endpoint}/${e}`);if(this.multiIndexSearch||o.searchParams.append("api-key",this.api_key),i)for(let[e,t]of Object.entries(i))t&&o.searchParams.append(e,t);let h=await fetch(o,a);if(!h.ok){let e=Error();throw e.httpResponse=h,e}return await h.json()}getIdentity(){return this.profile.getIdentity()}getUserId(){return this.profile.getUserId()}getAlias(){return this.profile.getAlias()}async identify(e){if(void 0===this.initPromise)throw Error("OramaClient not initialized");await this.profile.identify(this.initPromise,e)}async alias(e){if(void 0===this.initPromise)throw Error("OramaClient not initialized");await this.profile.alias(this.initPromise,e)}reset(){this.profile.reset()}},D=s(4513),R=s(107),$=s(7095),N=s(4778),q=s(8238);function J(e){var t;let{client:s,searchOptions:i,tags:n,defaultTag:a,showOrama:o=!1,allowClear:h=!1,...l}=e,[c,d]=(0,R.useState)(a),{search:u,setSearch:p,query:f}=(0,D.J)({type:"orama-cloud",client:s,params:i},void 0,c);return(0,$.T)(a,e=>{d(e)}),(0,r.jsx)(N.R,{search:u,onSearchChange:p,results:null!==(t=f.data)&&void 0!==t?t:[],isLoading:f.isLoading,...l,footer:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q.S,{tag:c,onTagChange:d,items:n,allowClear:h,children:o?(0,r.jsx)(F,{}):null}),l.footer]}):l.footer})}function F(){return(0,r.jsx)("a",{href:"https://orama.com",rel:"noreferrer noopener",className:"ms-auto text-xs text-fd-muted-foreground",children:"Search powered by Orama"})}let z=new j({endpoint:"https://cloud.orama.run/v1/indexes/mxspace-no50lj",api_key:"HHIpRwosmxFfAs7l2gsJv5m5A3ew2PRB"});function K(e){return(0,r.jsx)(J,{...e,client:z,showOrama:!0})}}}]);