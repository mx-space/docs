"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{7569:(e,t,r)=>{r.d(t,{B:()=>n});function n(e){return Object.keys(e).forEach(t=>{void 0===e[t]&&delete e[t]}),e}},4344:(e,t,r)=>{r.d(t,{searchDocs:()=>u});var n=r(7569);async function u(e,t,r){let{client:u,params:o={}}=r,s={...o,term:e,where:(0,n.B)({tag:t,...o.where}),groupBy:{properties:["page_id"],maxResult:7,...o.groupBy}},c=await u.search(s);if(!c)return[];let i=[];for(let e of c.groups??[]){let t=!1;for(let r of e.result){let e=r.document;t||(i.push({id:e.page_id,type:"page",content:e.title,url:e.url}),t=!0),i.push({id:e.id,content:e.content,type:e.content===e.section?"heading":"text",url:e.section_id?`${e.url}#${e.section_id}`:e.url})}}return i}r(2969)}}]);