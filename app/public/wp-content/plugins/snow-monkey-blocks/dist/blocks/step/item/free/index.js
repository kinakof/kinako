(()=>{var e={4184:(e,t)=>{var s;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e.push(s);else if(Array.isArray(s)){if(s.length){var o=a.apply(null,s);o&&e.push(o)}}else if("object"===n){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var l in s)r.call(s,l)&&s[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(s=function(){return a}.apply(t,[]))||(e.exports=s)}()}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-blocks/step-item-free","Y4":{"title":{"type":"string","source":"html","selector":".smb-step__item__title > span","default":""},"numberColor":{"type":"string"}},"be":{"anchor":true,"layout":{"allowSwitching":false,"allowEditing":false,"allowInheriting":false,"default":{"type":"constrained"}}}}'),r=window.React,a=(0,r.createElement)("svg",{viewBox:"0 0 24 24"},(0,r.createElement)("rect",{x:"7.68",y:"6.14",width:"13",height:"1"}),(0,r.createElement)("rect",{x:"7.68",y:"11.14",width:"13",height:"1"}),(0,r.createElement)("rect",{x:"7.68",y:"16.14",width:"13",height:"1"}),(0,r.createElement)("path",{d:"M5.29,8.44H4.6V5.86a2.55,2.55,0,0,1-.89.52V5.75a1.87,1.87,0,0,0,.59-.33,1.24,1.24,0,0,0,.43-.57h.56Z"}),(0,r.createElement)("path",{d:"M5.85,12.8v.64H3.44a1.68,1.68,0,0,1,.24-.68,4.3,4.3,0,0,1,.77-.86A4.38,4.38,0,0,0,5,11.31a.78.78,0,0,0,.14-.42A.48.48,0,0,0,5,10.54a.49.49,0,0,0-.34-.12.46.46,0,0,0-.35.13.66.66,0,0,0-.14.43l-.69-.07a1.13,1.13,0,0,1,.39-.82,1.29,1.29,0,0,1,.8-.24,1.14,1.14,0,0,1,.83.28.92.92,0,0,1,.31.71,1.14,1.14,0,0,1-.09.46,2,2,0,0,1-.27.46,5.87,5.87,0,0,1-.45.46c-.22.2-.36.33-.41.39a1,1,0,0,0-.14.19Z"}),(0,r.createElement)("path",{d:"M3.51,17.46l.66-.08a.64.64,0,0,0,.17.39.5.5,0,0,0,.7,0,.65.65,0,0,0,.14-.43A.6.6,0,0,0,5,16.9a.43.43,0,0,0-.34-.15,1,1,0,0,0-.31.05l.07-.56a.67.67,0,0,0,.43-.12A.42.42,0,0,0,5,15.78a.39.39,0,0,0-.1-.29.4.4,0,0,0-.29-.11.41.41,0,0,0-.3.12.6.6,0,0,0-.15.36l-.63-.11a1.38,1.38,0,0,1,.2-.52.85.85,0,0,1,.37-.3,1.14,1.14,0,0,1,.53-.11,1,1,0,0,1,.81.32.83.83,0,0,1,.25.6.85.85,0,0,1-.51.75.82.82,0,0,1,.49.29.89.89,0,0,1,.18.56,1.07,1.07,0,0,1-.34.8,1.2,1.2,0,0,1-.86.33,1.15,1.15,0,0,1-.8-.28A1,1,0,0,1,3.51,17.46Z"}));var n=s(4184),o=s.n(n);const l=window.wp.blockEditor,i=window.wp.data,c=window.wp.i18n,m=[{attributes:{...t.Y4},supports:{...t.be},save({attributes:e,className:t}){const{title:s,numberColor:a}=e,n=o()("smb-step__item",t),i={backgroundColor:a||void 0};return(0,r.createElement)("div",{...l.useBlockProps.save({className:n})},(0,r.createElement)("div",{className:"smb-step__item__title"},(0,r.createElement)("div",{className:"smb-step__item__number",style:i}),(0,r.createElement)(l.RichText.Content,{tagName:"span",value:s})),(0,r.createElement)("div",{className:"smb-step__item__body"},(0,r.createElement)("div",{...l.useInnerBlocksProps.save({className:"smb-step__item__summary"})})))}}],p={to:[{type:"block",blocks:["snow-monkey-blocks/step--item"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/step--item",t)}]};(0,e.registerBlockType)(t.u2,{icon:{foreground:"#cd162c",src:a},edit:function({attributes:e,setAttributes:t,className:s,clientId:a}){const{title:n,numberColor:m}=e,p=(0,i.useSelect)((e=>!!e("core/block-editor").getBlock(a)?.innerBlocks?.length),[a]),u=o()("smb-step__item",s),_={"--smb-step--number-background-color":m||void 0},d=(0,l.useBlockProps)({className:u,style:_}),b=(0,l.useInnerBlocksProps)({className:"smb-step__item__summary"},{renderAppender:p?l.InnerBlocks.DefaultBlockAppender:l.InnerBlocks.ButtonBlockAppender});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.InspectorControls,{group:"styles"},(0,r.createElement)(l.__experimentalPanelColorGradientSettings,{title:(0,c.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:m,onColorChange:e=>t({numberColor:e}),label:(0,c.__)("Number color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0})),(0,r.createElement)("div",{...d},(0,r.createElement)("div",{className:"smb-step__item__title"},(0,r.createElement)("div",{className:"smb-step__item__number"}),(0,r.createElement)(l.RichText,{tagName:"span",placeholder:(0,c.__)("Write title…","snow-monkey-blocks"),value:n,multiline:!1,onChange:e=>t({title:e})})),(0,r.createElement)("div",{className:"smb-step__item__body"},(0,r.createElement)("div",{...b}))))},save:function({attributes:e,className:t}){const{title:s,numberColor:a}=e,n=o()("smb-step__item",t),i={"--smb-step--number-background-color":a||void 0};return(0,r.createElement)("div",{...l.useBlockProps.save({className:n,style:i})},(0,r.createElement)("div",{className:"smb-step__item__title"},(0,r.createElement)("div",{className:"smb-step__item__number"}),(0,r.createElement)(l.RichText.Content,{tagName:"span",value:s})),(0,r.createElement)("div",{className:"smb-step__item__body"},(0,r.createElement)("div",{...l.useInnerBlocksProps.save({className:"smb-step__item__summary"})})))},deprecated:m,transforms:p})})()})();