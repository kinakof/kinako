import{p as c,o as t,c as s,e as a,D as u,z as i,n as _,r as l,d as p}from"./vue.runtime.esm-bundler.588d3a9f.js";import{_ as d}from"./_plugin-vue_export-helper.a6f24833.js";const f=["id"],S={__name:"ScoreButton",props:{score:{type:Number,default:0},postId:{type:Number,default:0}},setup(e){const n=e,o=c(()=>80<n.score?"score-green":50<n.score?"score-orange":1<n.score?"score-red":"score-disabled");return(r,g)=>(t(),s("div",{class:_(["aioseo-score-button",o.value]),id:`score-button-${e.postId}`},[a(r.$slots,"icon"),u(" "+i(e.score===0?"N/A":`${e.score}/100`),1)],10,f))}};const m={},y={class:"aioseo-index-status"};function x(e,n){const o=l("svg-circle-check-solid");return t(),s("div",y,[p(o)])}const b=d(m,[["render",x]]);export{b as I,S as _};