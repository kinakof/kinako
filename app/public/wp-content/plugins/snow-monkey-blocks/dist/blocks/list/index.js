(()=>{var e={4184:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var c=l.apply(null,o);c&&e.push(c)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-blocks/list","Y4":{"icon":{"type":"string","default":"angle-right"},"iconColor":{"type":"string"}},"be":{"html":false,"spacing":{"margin":true}}}'),n=window.React,l=(0,n.createElement)("svg",{viewBox:"0 0 24 24"},(0,n.createElement)("rect",{x:"7",y:"7",width:"13",height:"1"}),(0,n.createElement)("rect",{x:"3.5",y:"6.5",width:"2",height:"2",rx:"1"}),(0,n.createElement)("rect",{x:"7",y:"11.5",width:"13",height:"1"}),(0,n.createElement)("rect",{x:"3.5",y:"11",width:"2",height:"2",rx:"1"}),(0,n.createElement)("rect",{x:"7",y:"16",width:"13",height:"1"}),(0,n.createElement)("rect",{x:"3.5",y:"15.5",width:"2",height:"2",rx:"1"}));var r=o(4184),c=o.n(r);const a=window.lodash,s=window.wp.blockEditor,i=window.wp.components,u=window.wp.i18n,m=["core/list-item"],d=[["core/list-item"]],b=t.Y4,p=t.be,h=[{attributes:{...b,content:{type:"string",source:"html",selector:"ul",multiline:"li",default:""}},supports:{...p},migrate(t){const{content:o}=t,n=document.createElement("ul");n.innerHTML=o;const[l]=(0,e.rawHandler)({HTML:n.outerHTML});return[{...t},[...l.innerBlocks]]},save({attributes:e,className:t}){const{content:o,icon:l,iconColor:r}=e,a=c()("smb-list",t);return(0,n.createElement)("div",{...s.useBlockProps.save({className:a}),"data-icon":l,"data-icon-color":r},(0,n.createElement)("ul",null,(0,n.createElement)(s.RichText.Content,{value:o})))}},{attributes:{...b,content:{type:"string",source:"html",selector:"ul",multiline:"li",default:""}},supports:{...p},migrate(t){const{content:o}=t,n=document.createElement("ul");n.innerHTML=o;const[l]=(0,e.rawHandler)({HTML:n.outerHTML});return[{...t},[...l.innerBlocks]]},save({attributes:e}){const{content:t,icon:o,iconColor:l}=e;return(0,n.createElement)("div",{className:"smb-list","data-icon":o,"data-icon-color":l},(0,n.createElement)("ul",null,(0,n.createElement)(s.RichText.Content,{value:t})))}}];(0,e.registerBlockType)(t.u2,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:e,setAttributes:o,className:l,clientId:r}){const{icon:b,iconColor:p}=e,h=[{value:"angle-right",label:(0,u.__)("angle-right","snow-monkey-blocks")},{value:"angles-right",label:(0,u.__)("angles-right","snow-monkey-blocks")},{value:"circle-right",label:(0,u.__)("circle-right","snow-monkey-blocks")},{value:"arrow-right",label:(0,u.__)("arrow-right","snow-monkey-blocks")},{value:"check",label:(0,u.__)("check","snow-monkey-blocks")},{value:"circle-check",label:(0,u.__)("circle-check","snow-monkey-blocks")},{value:"square-check",label:(0,u.__)("square-check","snow-monkey-blocks")},{value:"circle-chevron-right",label:(0,u.__)("circle-chevron-right","snow-monkey-blocks")},{value:"hand-point-right",label:(0,u.__)("hand-point-right","snow-monkey-blocks")}],k=c()("smb-list",l),g=(0,s.useBlockProps)({className:k}),w=(0,s.useInnerBlocksProps)({},{allowedBlocks:m,template:d,templateLock:!1});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(s.InspectorControls,{group:"styles"},(0,n.createElement)(s.__experimentalPanelColorGradientSettings,{title:(0,u.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:p,onColorChange:e=>o({iconColor:e}),label:(0,u.__)("Icon color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0})),(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(i.__experimentalToolsPanel,{label:(0,u.__)("Block settings","snow-monkey-blocks")},(0,n.createElement)(i.__experimentalToolsPanelItem,{hasValue:()=>b!==t.Y4.icon.default,isShownByDefault:!0,label:(0,u.__)("Icon","snow-monkey-blocks"),onDeselect:()=>o({icon:t.Y4.icon.default})},(0,n.createElement)(i.BaseControl,{label:(0,u.__)("Icon","snow-monkey-blocks"),id:"snow-monkey-blocks/list/icon"},(0,n.createElement)("div",{className:"smb-list-icon-selector"},(0,a.times)(h.length,(e=>{const t=h[e].value;return(0,n.createElement)(i.Button,{variant:b===t&&"primary",onClick:()=>o({icon:t}),key:e},(0,n.createElement)("i",{className:`fa-solid fa-${h[e].value}`,title:h[e].label}))}))))))),(0,n.createElement)("div",{...g,"data-icon":b,"data-icon-color":p},(0,n.createElement)("style",null,`.editor-styles-wrapper [data-block="${r}"] ul li::before, .customize-control-sidebar_block_editor [data-block="${r}"] ul li::before { border-color: ${p} }`),(0,n.createElement)("ul",{...w})))},save:function({attributes:e,className:t}){const{icon:o,iconColor:l}=e,r=c()("smb-list",t);return(0,n.createElement)("div",{...s.useBlockProps.save({className:r}),"data-icon":o,"data-icon-color":l},(0,n.createElement)("ul",{...s.useInnerBlocksProps.save()}))},deprecated:h})})()})();