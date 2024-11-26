"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{7519:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Q});var r=s(3530),i=Object.create,n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,h=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),u=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of o(t))l.call(e,i)||i===s||n(e,i,{get:()=>t[i],enumerable:!(r=a(t,i))||r.enumerable});return e},d=(e,t,s)=>(s=null!=e?i(h(e)):{},u(!t&&e&&e.__esModule?s:n(s,"default",{value:e,enumerable:!0}),e)),p=c(e=>{function t(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function s(e){if("boolean"!=typeof e)throw Error(`Expected boolean, not ${e}`)}function r(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function i(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");t(e.outputLen),t(e.blockLen)}function n(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function a(e,t){r(e);let s=t.outputLen;if(e.length<s)throw Error(`digestInto() expects output buffer of length at least ${s}`)}Object.defineProperty(e,"__esModule",{value:!0}),e.output=e.exists=e.hash=e.bytes=e.bool=e.number=void 0,e.number=t,e.bool=s,e.bytes=r,e.hash=i,e.exists=n,e.output=a,e.default={number:t,bool:s,bytes:r,hash:i,exists:n,output:a}}),f=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;var t=BigInt(0x100000000-1),s=BigInt(32);function r(e,i=!1){return i?{h:Number(e&t),l:Number(e>>s&t)}:{h:0|Number(e>>s&t),l:0|Number(e&t)}}function i(e,t=!1){let s=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:a,l:o}=r(e[i],t);[s[i],n[i]]=[a,o]}return[s,n]}function n(e,t,s,r){let i=(t>>>0)+(r>>>0);return{h:e+s+(i/0x100000000|0)|0,l:0|i}}e.fromBig=r,e.split=i,e.toBig=(e,t)=>BigInt(e>>>0)<<s|BigInt(t>>>0),e.add=n;var a={fromBig:r,split:i,toBig:e.toBig,shrSH:(e,t,s)=>e>>>s,shrSL:(e,t,s)=>e<<32-s|t>>>s,rotrSH:(e,t,s)=>e>>>s|t<<32-s,rotrSL:(e,t,s)=>e<<32-s|t>>>s,rotrBH:(e,t,s)=>e<<64-s|t>>>s-32,rotrBL:(e,t,s)=>e>>>s-32|t<<64-s,rotr32H:(e,t)=>t,rotr32L:(e,t)=>e,rotlSH:(e,t,s)=>e<<s|t>>>32-s,rotlSL:(e,t,s)=>t<<s|e>>>32-s,rotlBH:(e,t,s)=>t<<s-32|e>>>64-s,rotlBL:(e,t,s)=>e<<s-32|t>>>64-s,add:n,add3L:(e,t,s)=>(e>>>0)+(t>>>0)+(s>>>0),add3H:(e,t,s,r)=>t+s+r+(e/0x100000000|0)|0,add4L:(e,t,s,r)=>(e>>>0)+(t>>>0)+(s>>>0)+(r>>>0),add4H:(e,t,s,r,i)=>t+s+r+i+(e/0x100000000|0)|0,add5H:(e,t,s,r,i,n)=>t+s+r+i+n+(e/0x100000000|0)|0,add5L:(e,t,s,r,i)=>(e>>>0)+(t>>>0)+(s>>>0)+(r>>>0)+(i>>>0)};e.default=a}),g=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=void 0,e.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0}),y=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapXOFConstructorWithOpts=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;var t=g(),s=e=>e instanceof Uint8Array;if(e.u8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),e.u32=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),e.createView=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),e.rotr=(e,t)=>e<<32-t|e>>>t,e.isLE=68===new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],!e.isLE)throw Error("Non little-endian hardware is not supported");var r=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));e.bytesToHex=function(e){if(!s(e))throw Error("Uint8Array expected");let t="";for(let s=0;s<e.length;s++)t+=r[e[s]];return t},e.hexToBytes=function(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let s=new Uint8Array(t/2);for(let t=0;t<s.length;t++){let r=2*t,i=Number.parseInt(e.slice(r,r+2),16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");s[t]=i}return s};var i=async()=>{};async function n(t,s,r){let i=Date.now();for(let n=0;n<t;n++){r(n);let t=Date.now()-i;t>=0&&t<s||(await (0,e.nextTick)(),i+=t)}}function a(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function o(e){if("string"==typeof e&&(e=a(e)),!s(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}e.nextTick=i,e.asyncLoop=n,e.utf8ToBytes=a,e.toBytes=o,e.concatBytes=function(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),r=0;return e.forEach(e=>{if(!s(e))throw Error("Uint8Array expected");t.set(e,r),r+=e.length}),t},e.Hash=class{clone(){return this._cloneInto()}};var h=e=>"[object Object]"===Object.prototype.toString.call(e)&&e.constructor===Object;e.checkOpts=function(e,t){if(void 0!==t&&("object"!=typeof t||!h(t)))throw Error("Options should be object or undefined");return Object.assign(e,t)},e.wrapConstructor=function(e){let t=t=>e().update(o(t)).digest(),s=e();return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.create=()=>e(),t},e.wrapConstructorWithOpts=function(e){let t=(t,s)=>e(s).update(o(t)).digest(),s=e({});return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.create=t=>e(t),t},e.wrapXOFConstructorWithOpts=function(e){let t=(t,s)=>e(s).update(o(t)).digest(),s=e({});return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.create=t=>e(t),t},e.randomBytes=function(e=32){if(t.crypto&&"function"==typeof t.crypto.getRandomValues)return t.crypto.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}}),m=c(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.shake256=e.shake128=e.keccak_512=e.keccak_384=e.keccak_256=e.keccak_224=e.sha3_512=e.sha3_384=e.sha3_256=e.sha3_224=e.Keccak=e.keccakP=void 0;var t=p(),s=f(),r=y(),[i,n,a]=[[],[],[]],o=BigInt(0),h=BigInt(1),l=BigInt(2),c=BigInt(7),u=BigInt(256),d=BigInt(113);for(let e=0,t=h,s=1,r=0;e<24;e++){[s,r]=[r,(2*s+3*r)%5],i.push(2*(5*r+s)),n.push((e+1)*(e+2)/2%64);let p=o;for(let e=0;e<7;e++)(t=(t<<h^(t>>c)*d)%u)&l&&(p^=h<<(h<<BigInt(e))-h);a.push(p)}var[g,m]=s.default.split(a,!0),w=(e,t,r)=>r>32?s.default.rotlBH(e,t,r):s.default.rotlSH(e,t,r),b=(e,t,r)=>r>32?s.default.rotlBL(e,t,r):s.default.rotlSL(e,t,r);function v(e,t=24){let s=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let t=0;t<10;t++)s[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let r=(t+8)%10,i=(t+2)%10,n=s[i],a=s[i+1],o=w(n,a,1)^s[r],h=b(n,a,1)^s[r+1];for(let s=0;s<50;s+=10)e[t+s]^=o,e[t+s+1]^=h}let t=e[2],a=e[3];for(let s=0;s<24;s++){let r=n[s],o=w(t,a,r),h=b(t,a,r),l=i[s];t=e[l],a=e[l+1],e[l]=o,e[l+1]=h}for(let t=0;t<50;t+=10){for(let r=0;r<10;r++)s[r]=e[t+r];for(let r=0;r<10;r++)e[t+r]^=~s[(r+2)%10]&s[(r+4)%10]}e[0]^=g[r],e[1]^=m[r]}s.fill(0)}e.keccakP=v;var x=class e extends r.Hash{constructor(e,s,i,n=!1,a=24){if(super(),this.blockLen=e,this.suffix=s,this.outputLen=i,this.enableXOF=n,this.rounds=a,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,t.default.number(i),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,r.u32)(this.state)}keccak(){v(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){t.default.exists(this);let{blockLen:s,state:i}=this,n=(e=(0,r.toBytes)(e)).length;for(let t=0;t<n;){let r=Math.min(s-this.pos,n-t);for(let s=0;s<r;s++)i[this.pos++]^=e[t++];this.pos===s&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:s,blockLen:r}=this;e[s]^=t,128&t&&s===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){t.default.exists(this,!1),t.default.bytes(e),this.finish();let s=this.state,{blockLen:r}=this;for(let t=0,i=e.length;t<i;){this.posOut>=r&&this.keccak();let n=Math.min(r-this.posOut,i-t);e.set(s.subarray(this.posOut,this.posOut+n),t),this.posOut+=n,t+=n}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return t.default.number(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(t.default.output(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:s,suffix:r,outputLen:i,rounds:n,enableXOF:a}=this;return t||(t=new e(s,r,i,a,n)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=n,t.suffix=r,t.outputLen=i,t.enableXOF=a,t.destroyed=this.destroyed,t}};e.Keccak=x;var I=(e,t,s)=>(0,r.wrapConstructor)(()=>new x(t,e,s));e.sha3_224=I(6,144,28),e.sha3_256=I(6,136,32),e.sha3_384=I(6,104,48),e.sha3_512=I(6,72,64),e.keccak_224=I(1,144,28),e.keccak_256=I(1,136,32),e.keccak_384=I(1,104,48),e.keccak_512=I(1,72,64);var k=(e,t,s)=>(0,r.wrapXOFConstructorWithOpts)((r={})=>new x(t,e,void 0===r.dkLen?s:r.dkLen,!0));e.shake128=k(31,168,16),e.shake256=k(31,136,32)}),w=c((e,t)=>{var{sha3_512:s}=m(),r=24,i=32,n=(e=4,t=Math.random)=>{let s="";for(;s.length<e;)s+=Math.floor(36*t()).toString(36);return s};function a(e){let t=BigInt(8),s=BigInt(0);for(let r of e.values())s=(s<<t)+BigInt(r);return s}var o=(e="")=>a(s(e)).toString(36).slice(1),h=Array.from({length:26},(e,t)=>String.fromCharCode(t+97)),l=e=>h[Math.floor(e()*h.length)],c=({globalObj:e="u">typeof global?global:"u">typeof window?window:{},random:t=Math.random}={})=>{let s=Object.keys(e).toString();return o(s.length?s+n(i,t):n(i,t)).substring(0,i)},u=e=>()=>e++,d=0x1c6b1f1f,p=({random:e=Math.random,counter:t=u(Math.floor(e()*d)),length:s=r,fingerprint:i=c({random:e})}={})=>function(){let r=l(e),a=Date.now().toString(36),h=t().toString(36),c=n(s,e),u=`${a+c+h+i}`;return`${r+o(u).substring(1,s)}`},f=p();t.exports.getConstants=()=>({defaultLength:r,bigLength:i}),t.exports.init=p,t.exports.createId=f,t.exports.bufToBigInt=a,t.exports.createCounter=u,t.exports.createFingerprint=c,t.exports.isCuid=(e,{minLength:t=2,maxLength:s=i}={})=>{let r=e.length;return!!("string"==typeof e&&r>=t&&r<=s&&/^[a-z][0-9a-z]+$/.test(e))}}),b=c((e,t)=>{var{createId:s,init:r,getConstants:i,isCuid:n}=w();t.exports.createId=s,t.exports.init=r,t.exports.getConstants=i,t.exports.isCuid=n});Date.now().toString().slice(5);var v=BigInt(1e3),x=BigInt(1e6),I=BigInt(1e9);async function k(e){return"number"==typeof e&&(e=BigInt(e)),e<v?`${e}ns`:e<x?`${e/v}\u03BCs`:e<I?`${e/x}ms`:`${e/I}s`}async function S(e){return{raw:Number(e),formatted:await k(e)}}var C=d(b(),1),T=d(b(),1),O="orama_user_id";function A(e){return"object"==typeof e?JSON.stringify(e):`${e}`}var L=class{messages;inferenceType;oramaClient;endpoint;abortController;events;userContext;conversationID;lastInteractionParams;state=[];systemPrompts;constructor(e){let t=e.oramaClient.answersApiBaseURL||"https://answer.api.orama.com";this.messages=e.initialMessages||[],this.inferenceType=e.inferenceType,this.oramaClient=e.oramaClient,this.endpoint=`${t}/v1/answer?api-key=${this.oramaClient.api_key}`,this.events=e.events,this.conversationID=(0,T.createId)(),this.userContext=e.userContext}async askStream(e){return this.messages.push({role:"user",content:e.term??""}),this.fetchAnswer(e)}async ask(e){let t=await this.askStream(e),s="";for await(let e of t)s=e;return this.events?.onMessageChange&&this.events.onMessageChange(this.messages),s}getMessages(){return this.messages}clearSession(){this.messages=[],this.state=[],this.events?.onMessageChange&&this.events.onMessageChange(this.messages),this.events?.onStateChange&&this.events.onStateChange(this.state)}abortAnswer(){if(!this.abortController)throw Error("AbortController is not ready");this.abortController.abort(),this.abortController=void 0,this.state[this.state.length-1].aborted=!0}async regenerateLast({stream:e=!0}={}){if(0===this.state.length||0===this.messages.length)throw Error("No messages to regenerate");if(this.messages.at(-1)?.role!=="assistant")throw Error("Last message is not an assistant message");return this.messages.pop(),this.state.pop(),e?this.askStream(this.lastInteractionParams):this.ask(this.lastInteractionParams)}addNewEmptyAssistantMessage(){this.messages.push({role:"assistant",content:""})}async *fetchAnswer(e){this.abortController=new AbortController,this.lastInteractionParams=e;let t=(0,T.createId)(),s=null,r=this.state.length;this.state.push({interactionId:t,query:e.term??"",response:"",relatedQueries:null,sources:null,translatedQuery:null,aborted:!1,loading:!0,error:!1,errorMessage:null});try{this.events?.onNewInteractionStarted&&this.events.onNewInteractionStarted(t),this.events?.onStateChange&&this.events.onStateChange(this.state);let i=new URLSearchParams;i.append("type",this.inferenceType),i.append("messages",JSON.stringify(this.messages)),i.append("query",e.term??""),i.append("conversationId",this.conversationID),i.append("userId",this.oramaClient.getUserId()),i.append("endpoint",this.oramaClient.endpoint),i.append("searchParams",JSON.stringify(e)),i.append("identity",this.oramaClient.getIdentity()??""),i.append("interactionId",t),i.append("alias",this.oramaClient.getAlias()??"");let n=this.getSystemPromptConfiguration();if(n&&i.append("systemPrompts",JSON.stringify(n)),this.userContext&&i.append("userContext",A(this.userContext)),e.userData&&i.append("userData",A(e.userData)),e.related){if(e.related?.howMany&&e.related?.howMany>5)throw Error("Can generate at most 5 related queries");i.append("related",JSON.stringify({enabled:!0,howMany:e.related.howMany??3,format:e.related.format??"question"}))}let a=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i.toString(),signal:this.abortController.signal});if(!a.ok||!a.body)throw Error(a.statusText);s=a.body.getReader();let o=new TextDecoder,h=[],l="";this.events?.onMessageLoading&&this.events.onMessageLoading(!0),this.addNewEmptyAssistantMessage();let c=this.messages.at(-1);for(;;){let e,{value:t,done:i}=await s.read();if(i)break;for(l+=o.decode(t,{stream:!0});-1!==(e=l.indexOf(`

`));){let t=l.slice(0,e);l=l.slice(e+2);try{let e=function(e){let[t,...s]=e.split(`
`),r=s.join(`
`).replace("data: ","");return{event:t.replace("event: ",""),data:r}}(t),s=JSON.parse(e.data);if("sources"===s.type)this.state[r].sources=s.message,this.events?.onSourceChange&&this.events.onSourceChange(s.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("query-translated"===s.type)this.state[r].translatedQuery=s.message,this.events?.onQueryTranslated&&this.events.onQueryTranslated(s.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("related-queries"===s.type)this.state[r].relatedQueries=s.message,this.events?.onRelatedQueries&&this.events.onRelatedQueries(s.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("text"===s.type)for(h.push(s.message);h.length>0;)c.content+=h.shift(),this.state[r].response=c.content,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageChange&&this.events.onMessageChange(this.messages),yield c.content}catch(e){console.error("Error parsing SSE event:",e),console.error("Raw message:",t)}}}}catch(e){if("AbortError"===e.name)this.state[r].aborted=!0,this.events?.onAnswerAborted&&this.events.onAnswerAborted(!0);else throw this.state[r].error=!0,this.state[r].errorMessage=e.message??"Unknown error",e}finally{s?.releaseLock(),this.state[r].loading=!1,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageLoading&&this.events.onMessageLoading(!1)}}setSystemPromptConfiguration(e){if(Array.isArray(e.systemPrompts)){if(!e.systemPrompts.every(e=>"string"==typeof e))throw Error("Invalid system prompt configuration");this.systemPrompts=e.systemPrompts}return this}getSystemPromptConfiguration(){return this.systemPrompts}},P=class{cache;config;constructor(e){this.cache=new Map,this.config=e}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){return this.cache.delete(e)}clear(){this.cache.clear()}size(){return this.cache.size}},E="1.3.19",B={version:E};function _(e,t){if("u">typeof navigator){"u">typeof navigator.sendBeacon&&navigator.sendBeacon(e,t);return}fetch(e,{method:"POST",body:t,headers:{"Content-Type":"application/json"}}).then(()=>{},e=>console.log(e))}var U=class e{data;params;config;profile;constructor(e,t){this.data=[],this.config=e,this.profile=t}setParams(e){this.params=e}static create(t,s){let r=new e(t,s);return r.start(),r}add(e){this.data.push({rawSearchString:e.rawSearchString,query:e.query,resultsCount:e.resultsCount,roundTripTime:e.roundTripTime,searchedAt:e.searchedAt,userId:this.profile.getUserId(),identity:this.profile.getIdentity(),alias:this.profile.getAlias(),referer:"u">typeof location?location.toString():void 0}),null!=this.params&&this.data.length>=this.config.flushSize&&this.flush()}flush(){if(null==this.params||0===this.data.length)return;let e=this.data;this.data=[];let t={source:"fe",deploymentID:this.params.deploymentID,index:this.params.index,oramaId:this.config.id,oramaVersion:B.version,userAgent:"u">typeof navigator?navigator.userAgent:void 0,events:e};_(this.params.endpoint+`?api-key=${this.config.api_key}`,JSON.stringify(t))?.catch(e=>console.log(e))}start(){let e=setInterval(this.flush.bind(this),this.config.flushInterval);null!=e.unref&&e.unref()}},M=class{constructor(e){this.params=e}intervalId;start(){this.stop(),this.intervalId=setInterval(this.beat.bind(this),this.params.frequency)}stop(){void 0!==this.intervalId&&clearInterval(this.intervalId)}beat(){_(this.params.endpoint)?.catch(e=>console.log(e))}},j=d(b(),1),D=class{endpoint;apiKey;userId;identity;userAlias;params;constructor({endpoint:e,apiKey:t}){if(!e||!t)throw Error("Endpoint and API Key are required to create a Profile");if("string"!=typeof e||"string"!=typeof t)throw Error("Endpoint and API Key must be strings");if("u">typeof localStorage){let e=localStorage.getItem(O);e?this.userId=e:(this.userId=(0,j.createId)(),localStorage.setItem(O,this.userId))}else this.userId=(0,j.createId)();this.endpoint=e,this.apiKey=t}setParams(e){let{protocol:t,host:s}=new URL(e.identifyUrl),r=`${t}//${s}/identify`;this.params={identifyUrl:r,index:e.index}}getIdentity(){return this.identity}getUserId(){return this.userId}getAlias(){return this.userAlias}async sendProfileData(e){if(!this.params)throw Error("Orama Profile is not initialized");let t=JSON.stringify({...e,visitorId:this.getUserId(),index:this.params.index});await _(`${this.params?.identifyUrl}?api-key=${this.apiKey}`,t)}async identify(e,t){if("string"!=typeof t)throw Error("Identity must be a string");await e,await this.sendProfileData({entity:"identity",id:t}),this.identity=t}async alias(e,t){if("string"!=typeof t)throw Error("Identity must be a string");await e,await this.sendProfileData({entity:"alias",id:t}),this.userAlias=t}reset(){this.userId=(0,j.createId)(),this.identity=void 0,this.userAlias=void 0}},N=class{id=(0,C.createId)();api_key;endpoint;multiIndexSearch;multiIndexIndexes;answersApiBaseURL;collector;cache;profile;searchDebounceTimer;searchRequestCounter=0;blockSearchTillAuth=!1;heartbeat;initPromise;constructor(e){if("indexes"in e?(this.api_key=e.indexes[0].api_key,this.multiIndexIndexes=e.indexes,this.endpoint=e.endpoint||"https://cloud.orama.run/v1/indexes",this.multiIndexSearch=!0):(this.api_key=e.api_key,this.endpoint=e.endpoint,this.multiIndexSearch=!1),this.answersApiBaseURL=e.answersApiBaseURL,this.profile=new D({endpoint:this.endpoint,apiKey:this.api_key}),!1!==e.telemetry){let t={id:this.id,api_key:this.api_key,flushInterval:e.telemetry?.flushInterval??5e3,flushSize:e.telemetry?.flushSize??25};this.collector=U.create(t,this.profile)}!1!==e.cache&&(this.cache=new P({})),this.init()}customerUserToken=void 0;searchToken=void 0;setAuthToken(e){null===e?this.customerUserToken=void 0:this.customerUserToken=e,this.searchToken=void 0,this.init()}onAuthTokenExpired;setOnAuthTokenExpired(e){this.onAuthTokenExpired=e}async search(e,t){if(await this.initPromise,this.blockSearchTillAuth)return console.warn("Search request blocked until user is authenticated"),null;let s=++this.searchRequestCounter,r=`search-${JSON.stringify(e)}`,i=null,n,a=!1,o=t?.fresh!==!0&&this.cache?.has(r),h=async()=>{try{let s=Date.now();i=this.multiIndexSearch?await this.fetch("multi_search","POST",{q:{...e,mergeResults:!0},sst:this.searchToken,indexes:this.multiIndexIndexes},t?.abortController):await this.fetch("search","POST",{q:e,sst:this.searchToken},t?.abortController);let a=Date.now();i.elapsed=await S(BigInt(1e6*a-1e6*s)),n=a-s,this.cache?.set(r,i)}catch(e){if("AbortError"!==e.name)throw console.error("Search request failed",e),e}return this.collector&&this.collector.add({rawSearchString:e.term,resultsCount:i?.hits?.length??0,roundTripTime:n,query:e,cached:a,searchedAt:new Date,userId:this.profile.getUserId()}),i};return o&&this.cache?(n=0,i=this.cache.get(r),a=!0,this.collector&&this.collector.add({rawSearchString:e.term,resultsCount:i?.hits?.length??0,roundTripTime:n,query:e,cached:a,searchedAt:new Date,userId:this.profile.getUserId()}),s===this.searchRequestCounter?i:null):t?.debounce?new Promise((e,s)=>{clearTimeout(this.searchDebounceTimer),this.searchDebounceTimer=setTimeout(async()=>{try{await h(),e(i)}catch(e){"AbortError"!==e.name&&(console.error("Search request failed",e),s(e))}},t?.debounce||300),"unref"in this.searchDebounceTimer&&this.searchDebounceTimer.unref()}):h()}async vectorSearch(e,t){await this.initPromise;let s=`vectorSearch-${JSON.stringify(e)}`,r,i,n=!1;if((t?.fresh!==!0&&this.cache?.has(s))===!0&&null!=this.cache)r=0,i=this.cache.get(s),n=!0;else{let n=Date.now();i=await this.fetch("vector-search2","POST",{q:e},t?.abortSignal??t?.abortController);let a=Date.now();i.elapsed=await S(BigInt(1e6*a-1e6*n)),r=a-n,this.cache?.set(s,i)}return null!=this.collector&&this.collector.add({rawSearchString:e.term,resultsCount:i.hits?.length??0,roundTripTime:r,query:e,cached:n,searchedAt:new Date,userId:this.profile.getUserId()}),i}createAnswerSession(e){return new L({inferenceType:e?.inferenceType||"documentation",initialMessages:e?.initialMessages||[],oramaClient:this,events:e?.events,userContext:e?.userContext,systemPrompts:e?.systemPrompts??[]})}startHeartBeat(e){this.heartbeat?.stop(),this.heartbeat=new M({...e,endpoint:`${this.endpoint}/health?api-key=${this.api_key}`}),this.heartbeat.start()}stopHeartBeat(){this.heartbeat?.stop()}async getPop(){return(await this.initPromise)?.pop??""}expirationTimer;init(){this.initPromise=this.fetch("init","GET",void 0,void 0,{token:this.customerUserToken}).then(e=>{if(this.collector?.setParams({endpoint:e.collectUrl,deploymentID:e.deploymentID,index:e.index}),this.profile?.setParams({identifyUrl:e.collectUrl,index:e.index}),e.searchSession){if("required"in e.searchSession&&!0===e.searchSession.required)this.blockSearchTillAuth=!0;else if("token"in e.searchSession){let t=e.searchSession.token;this.searchToken=t;let s=e.searchSession.maxAge;this.blockSearchTillAuth=!1,this.expirationTimer&&clearTimeout(this.expirationTimer),this.expirationTimer=setTimeout(()=>{this.searchToken===t&&(this.searchToken=void 0,this.blockSearchTillAuth=!0,this.onAuthTokenExpired?.(t))},1e3*s),"unref"in this.expirationTimer&&this.expirationTimer.unref()}}return e}).catch(e=>(console.log(e),null))}async fetch(e,t,s,r,i){let n=void 0!==r&&r?.signal!==void 0?r?.signal:r;if(n?.aborted===!0)throw Error("Request aborted");let a={method:t,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:n};"POST"===t&&void 0!==s&&(s.version=E,s.id=this.id,s.visitorId=this.profile.getUserId(),a.body=Object.entries(s).filter(([e,t])=>!!t).map(([e,t])=>`${e}=${encodeURIComponent(JSON.stringify(t))}`).join("&"));let o=new URL(`${this.endpoint}/${e}`);if(this.multiIndexSearch||o.searchParams.append("api-key",this.api_key),i)for(let[e,t]of Object.entries(i))t&&o.searchParams.append(e,t);let h=await fetch(o,a);if(!h.ok){let e=Error();throw e.httpResponse=h,e}return await h.json()}getIdentity(){return this.profile.getIdentity()}getUserId(){return this.profile.getUserId()}getAlias(){return this.profile.getAlias()}async identify(e){if(void 0===this.initPromise)throw Error("OramaClient not initialized");await this.profile.identify(this.initPromise,e)}async alias(e){if(void 0===this.initPromise)throw Error("OramaClient not initialized");await this.profile.alias(this.initPromise,e)}reset(){this.profile.reset()}},$=s(6845),q=s(8075);s(2332),s(7988),s(1250),s(9650),s(7539),s(6101);var H=s(5036),R=s(5094),F=s(5683);function J(e){var t;let{client:s,searchOptions:i,tags:n,defaultTag:a,showOrama:o=!1,allowClear:h=!1,...l}=e,[c,u]=(0,R.useState)(a),{search:d,setSearch:p,query:f}=(0,H.O)({type:"orama-cloud",client:s,params:i},void 0,c);return(0,F.p)(a,e=>{u(e)}),(0,r.jsx)(q.F,{search:d,onSearchChange:p,results:null!==(t=f.data)&&void 0!==t?t:[],isLoading:f.isLoading,...l,footer:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($.P,{tag:c,onTagChange:u,items:n,allowClear:h,children:o?(0,r.jsx)(z,{}):null}),l.footer]}):l.footer})}function z(){return(0,r.jsx)("a",{href:"https://orama.com",rel:"noreferrer noopener",className:"ms-auto text-xs text-fd-muted-foreground",children:"Search powered by Orama"})}let K=new N({endpoint:"https://cloud.orama.run/v1/indexes/mxspace-no50lj",api_key:"HHIpRwosmxFfAs7l2gsJv5m5A3ew2PRB"});function Q(e){return(0,r.jsx)(J,{...e,client:K,showOrama:!0})}}}]);