(()=>{var e={4184:(e,t)=>{var o;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&e.push(a)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var l in o)i.call(o,l)&&o[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-blocks/hero-header","Y4":{"mediaId":{"type":"number","default":0},"mediaUrl":{"type":"string","source":"attribute","selector":".smb-hero-header__figure img, .smb-hero-header__figure video","attribute":"src","default":""},"mediaAlt":{"type":"string","source":"attribute","selector":".smb-hero-header__figure img","attribute":"alt","default":""},"mediaWidth":{"type":"string","source":"attribute","selector":".smb-hero-header__figure img, .smb-hero-header__figure video","attribute":"width","default":""},"mediaHeight":{"type":"string","source":"attribute","selector":".smb-hero-header__figure img, .smb-hero-header__figure video","attribute":"height","default":""},"mediaSizeSlug":{"type":"string","default":"full"},"mediaType":{"type":"string"},"focalPoint":{"type":"object"},"columns":{"type":"string","default":"12"},"rows":{"type":"string","default":"12"},"maxWidth":{"type":"string","default":""},"figureGridColumnStart":{"type":"string","default":"1"},"figureGridColumnEnd":{"type":"string","default":"-1"},"figureGridRowStart":{"type":"string","default":"1"},"figureGridRowEnd":{"type":"string","default":"-1"},"fit":{"type":"boolean","default":false},"figureAspectRatio":{"type":"string","default":"16 / 9"},"bodyAlignSelf":{"type":"string","default":"auto"},"bodyJustifySelf":{"type":"string","default":"auto"},"bodyGridColumnStart":{"type":"string","default":"1"},"bodyGridColumnEnd":{"type":"string","default":"-1"},"bodyGridRowStart":{"type":"string","default":"1"},"bodyGridRowEnd":{"type":"string","default":"-1"},"bodyMaxWidth":{"type":"string","default":""},"bodyPadding":{"type":"object","default":{}}}}'),i=window.React,r=(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)("rect",{x:".13",y:"3.62",width:"13.37",height:".78"}),(0,i.createElement)("path",{d:"m23.23,6.31h-10.6v.83c0,.13-.02.24-.06.35h9.86c.22,0,.39.18.39.39v6.65l-3.33-2.57c-.1-.07-.25-.07-.34,0l-3.76,2.87c-.08.06-.21.07-.31.02l-2.99-1.52c-.09-.04-.2-.04-.28,0l-3.92,2.26v-4.81h-1.18v8.93c0,.44.35.79.79.79h15.73c.44,0,.79-.35.79-.79V7.1c0-.44-.35-.79-.79-.79Zm-.41,12.63c0,.22-.18.39-.39.39h-.01s-14.15-.01-14.15-.01c-.22,0-.39-.18-.39-.39v-2.14l3.91-2.26c.09-.05.2-.05.29,0l2.99,1.51c.1.05.22.04.31-.02l3.76-2.86c.1-.08.25-.08.35,0l3.33,2.57v3.21Z"}),(0,i.createElement)("path",{d:"m13.5,3.62v.78H.13v-.78h13.37m0-.13H.13c-.07,0-.13.06-.13.13v.78c0,.07.06.13.13.13h13.37c.07,0,.13-.06.13-.13v-.78c0-.07-.06-.13-.13-.13h0Z"}),(0,i.createElement)("rect",{y:"6.23",width:"11.72",height:"1.04",rx:".13",ry:".13"}),(0,i.createElement)("rect",{y:"8.97",width:"11.72",height:"1.04",rx:".13",ry:".13"}));var n=o(4184),a=o.n(n);const l=window.lodash,s=window.wp.blockEditor,d=window.wp.components,m=window.wp.primitives,c=(0,i.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(m.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),u=(0,i.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(m.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),h=(0,i.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(m.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),g=window.wp.data,b=window.wp.element,p=window.wp.i18n,y=e=>e.media_type?"image"===e.media_type?"image":"video":e.type,f=["avi","mpg","mpeg","mov","mp4","m4v","ogg","ogv","webm","wmv"];function w(e=""){return!!e&&f.includes(function(e=""){const t=e.split(".");return t[t.length-1]}(e))}const k=({id:e,src:t,allowedTypes:o,accept:r,onSelect:n,onSelectURL:a,onRemove:l})=>(0,i.createElement)(s.BlockControls,{group:"inline"},(0,i.createElement)(s.MediaReplaceFlow,{mediaId:e,mediaURL:t,allowedTypes:o,accept:r,onSelect:n,onSelectURL:a}),!!t&&!!l&&(0,i.createElement)(d.ToolbarButton,{onClick:l},(0,p.__)("Release","snow-monkey-blocks"))),A=({src:e,alt:t,id:o,style:r,width:n,height:a})=>(0,i.createElement)("img",{src:e,alt:t,className:`wp-image-${o}`,style:r,width:n,height:a}),v=({src:e,style:t,width:o,height:r})=>(0,i.createElement)("video",{src:e,style:t,width:o,height:r}),_=(0,b.memo)((({id:e,src:t,alt:o,url:r,width:n,height:a,target:s,allowedTypes:d,accept:m,onSelect:c,onSelectURL:u,onRemove:h,mediaType:g,style:b,rel:p,linkClass:y})=>{let f;if("image"===g){let d;f=(0,i.createElement)(A,{src:t,alt:o,id:e,style:b,width:n,height:a}),d=p?(0,l.isEmpty)(p)?void 0:p:"_self"!==s&&s?"noopener noreferrer":void 0,r&&(f=(0,i.createElement)("span",{href:r,target:"_self"===s?void 0:s,rel:d,className:y},f))}else"video"===g&&(f=(0,i.createElement)(v,{src:t,style:b,width:n,height:a}));return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(k,{id:e,src:t,allowedTypes:d,accept:m,onSelect:c,onSelectURL:u,onRemove:h}),f)}),((e,t)=>{const o=Object.keys(e);for(const i of o)if(e[i]!==t[i])return!1;return!0}));function x(e){const{src:t,onSelect:o,onSelectURL:r,mediaType:n,allowedTypes:a=["image"]}=e,l=!n&&t?"image":n;let d=(0,p.__)("Media","snow-monkey-blocks");1===a.length&&("image"===a[0]?d=(0,p.__)("Image","snow-monkey-blocks"):"video"===a[0]&&(d=(0,p.__)("Video","snow-monkey-blocks")));const m=(0,b.useMemo)((()=>a.map((e=>`${e}/*`)).join(",")),[a]);return t?(0,i.createElement)(_,{...e,accept:m,allowedTypes:a,mediaType:l}):(0,i.createElement)(s.MediaPlaceholder,{icon:"format-image",labels:{title:d},onSelect:o,onSelectURL:r,accept:m,allowedTypes:a})}const E=[{label:(0,p._x)("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:(0,p._x)("Medium","Image size option for resolution control"),value:"medium"},{label:(0,p._x)("Large","Image size option for resolution control"),value:"large"},{label:(0,p._x)("Full Size","Image size option for resolution control"),value:"full"}];function S({panelId:e,value:t,onChange:o,options:r=E,defaultValue:n=E[0].value,isShownByDefault:a=!0,withToolsPanelItem:l=!0}){const s=null!=t?t:n,m=()=>(0,i.createElement)(d.SelectControl,{label:(0,p.__)("Resolution"),value:s,options:r,onChange:o,help:(0,p.__)("Select the size of the source image."),size:"__unstable-large"});return l?(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>s!==n,label:(0,p.__)("Resolution"),onDeselect:()=>o(n),isShownByDefault:a,panelId:e},(0,i.createElement)(m,null)):(0,i.createElement)(m,null)}const D=["image","video"],G="full",C=[{value:"start",icon:c,label:(0,p.__)("Justify items left","snow-monkey-blocks")},{value:"center",icon:u,label:(0,p.__)("Justify items center","snow-monkey-blocks")},{value:"end",icon:h,label:(0,p.__)("Justify items right","snow-monkey-blocks")}],B=[{value:"start",icon:c,label:(0,p.__)("Justify items top","snow-monkey-blocks")},{value:"center",icon:u,label:(0,p.__)("Justify items center","snow-monkey-blocks")},{value:"end",icon:h,label:(0,p.__)("Justify items bottom","snow-monkey-blocks")}],R="var:";function W(e){return(0,l.startsWith)(e,R)?`var(--wp--${e.slice(4).split("|").join("--")})`:e}function P(e,t){if(null!=e&&0!==(e=Number(e))&&!(-1*t>e||t<e))return String(e)}function T({name:t,onSelect:o}){const{blockType:r,variations:n}=(0,g.useSelect)((o=>{const{getBlockVariations:i,getBlockType:r}=o(e.store);return{blockType:r(t),variations:i(t,"block")}}),[t]);return(0,i.createElement)(s.__experimentalBlockVariationPicker,{icon:(0,l.get)(r,["icon","src"]),label:(0,l.get)(r,["title"]),variations:n,onSelect:o,allowSkip:!1})}const I="var:";function Y(e){return(0,l.startsWith)(e,I)?`var(--wp--${e.slice(4).split("|").join("--")})`:e}function U(e,t){if(null!=e&&0!==(e=Number(e))&&!(-1*t>e||t<e))return String(e)}const N={attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,figureGridColumnStart:"2",figureGridRowStart:"2",bodyAlignSelf:"start",bodyJustifySelf:"start",bodyGridColumnEnd:"-2",bodyGridRowEnd:"-2",bodyMaxWidth:"38rem"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},q=(0,i.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{x:"7",y:"17",width:"38",height:"22",fill:"#DDDDDD"}),(0,i.createElement)("line",{x1:"3",y1:"10",x2:"25",y2:"10",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"3",y1:"14",x2:"21",y2:"14",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"3",y1:"18",x2:"19",y2:"18",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"3",y1:"22",x2:"23",y2:"22",stroke:"#AAAAAA",strokeWidth:"2"})),V=(0,i.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{x:"3",y:"17",width:"38",height:"22",fill:"#DDDDDD"}),(0,i.createElement)("line",{x1:"23",y1:"10",x2:"45",y2:"10",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"23",y1:"14",x2:"41",y2:"14",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"23",y1:"18",x2:"39",y2:"18",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"23",y1:"22",x2:"43",y2:"22",stroke:"#AAAAAA",strokeWidth:"2"})),M=(0,i.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{x:"7",y:"9",width:"38",height:"22",fill:"#DDDDDD"}),(0,i.createElement)("line",{x1:"3",y1:"26",x2:"25",y2:"26",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"3",y1:"30",x2:"21",y2:"30",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"3",y1:"34",x2:"19",y2:"34",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"3",y1:"38",x2:"23",y2:"38",stroke:"#AAAAAA",strokeWidth:"2"})),z=(0,i.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{x:"3",y:"9",width:"38",height:"22",fill:"#DDDDDD"}),(0,i.createElement)("line",{x1:"23",y1:"26",x2:"45",y2:"26",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"23",y1:"30",x2:"41",y2:"30",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"23",y1:"34",x2:"39",y2:"34",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{x1:"23",y1:"38",x2:"43",y2:"38",stroke:"#AAAAAA",strokeWidth:"2"})),j=(0,i.createElement)("svg",{width:"48",height:"30",viewBox:"0 0 48 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{width:"48",height:"30",transform:"matrix(1 0 0 -1 0 30)",fill:"#DDDDDD"}),(0,i.createElement)("line",{y1:"-1",x2:"22",y2:"-1",transform:"matrix(1 0 0 -1 3 15)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"18",y2:"-1",transform:"matrix(1 0 0 -1 3 11)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"16",y2:"-1",transform:"matrix(1 0 0 -1 3 7)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"20",y2:"-1",transform:"matrix(1 0 0 -1 3 3)",stroke:"#AAAAAA",strokeWidth:"2"})),J=(0,i.createElement)("svg",{width:"48",height:"30",viewBox:"0 0 48 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{width:"48",height:"30",transform:"matrix(1 0 0 -1 0 30)",fill:"#DDDDDD"}),(0,i.createElement)("line",{y1:"-1",x2:"22",y2:"-1",transform:"matrix(1 0 0 -1 23 15)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"18",y2:"-1",transform:"matrix(1 0 0 -1 23 11)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"16",y2:"-1",transform:"matrix(1 0 0 -1 23 7)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"20",y2:"-1",transform:"matrix(1 0 0 -1 23 3)",stroke:"#AAAAAA",strokeWidth:"2"})),L=(0,i.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{width:"48",height:"30",transform:"matrix(1 0 0 -1 0 39)",fill:"#DDDDDD"}),(0,i.createElement)("line",{y1:"-1",x2:"22",y2:"-1",transform:"matrix(1 0 0 -1 3 34)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"18",y2:"-1",transform:"matrix(1 0 0 -1 3 30)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"16",y2:"-1",transform:"matrix(1 0 0 -1 3 26)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"20",y2:"-1",transform:"matrix(1 0 0 -1 3 22)",stroke:"#AAAAAA",strokeWidth:"2"})),H=(0,i.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{width:"48",height:"30",transform:"matrix(1 0 0 -1 0 39)",fill:"#DDDDDD"}),(0,i.createElement)("line",{y1:"-1",x2:"22",y2:"-1",transform:"matrix(1 0 0 -1 23 34)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"18",y2:"-1",transform:"matrix(1 0 0 -1 23 30)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"16",y2:"-1",transform:"matrix(1 0 0 -1 23 26)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"20",y2:"-1",transform:"matrix(1 0 0 -1 23 22)",stroke:"#AAAAAA",strokeWidth:"2"})),$=(0,i.createElement)("svg",{width:"48",height:"30",viewBox:"0 0 48 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{width:"48",height:"30",transform:"matrix(1 0 0 -1 0 30)",fill:"#DDDDDD"}),(0,i.createElement)("line",{y1:"-1",x2:"22",y2:"-1",transform:"matrix(1 0 0 -1 13 20)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"18",y2:"-1",transform:"matrix(1 0 0 -1 13 16)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"16",y2:"-1",transform:"matrix(1 0 0 -1 13 12)",stroke:"#AAAAAA",strokeWidth:"2"}),(0,i.createElement)("line",{y1:"-1",x2:"20",y2:"-1",transform:"matrix(1 0 0 -1 13 8)",stroke:"#AAAAAA",strokeWidth:"2"})),O=[{name:"default",isDefault:!0,title:(0,p.__)("Default","snow-monkey-blocks"),scope:["block"],icon:()=>(0,i.createElement)("div",{style:{color:"#aaa",width:"48px",height:"48px",padding:"4px"}},r),attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`}},{name:"left-top-out",title:(0,p.__)("Left / Top / Out","snow-monkey-blocks"),scope:["block"],icon:q,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,figureGridColumnStart:"2",figureGridRowStart:"2",bodyAlignSelf:"start",bodyJustifySelf:"start",bodyGridColumnEnd:"-2",bodyGridRowEnd:"-2",bodyMaxWidth:"38rem"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"right-top-out",title:(0,p.__)("Right / Top / Out","snow-monkey-blocks"),scope:["block"],icon:V,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,figureGridColumnEnd:"-2",figureGridRowStart:"2",bodyAlignSelf:"start",bodyJustifySelf:"end",bodyGridColumnStart:"2",bodyGridRowEnd:"-2",bodyMaxWidth:"38rem"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"left-bottom-out",title:(0,p.__)("Left / Bottom / Out","snow-monkey-blocks"),scope:["block"],icon:M,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,figureGridColumnStart:"2",figureGridRowEnd:"-2",figureGridRowStart:"2",bodyAlignSelf:"end",bodyJustifySelf:"start",bodyGridColumnEnd:"-2",bodyGridRowStart:"2",bodyMaxWidth:"38rem"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"right-bottom-out",title:(0,p.__)("Right / Bottom / Out","snow-monkey-blocks"),scope:["block"],icon:z,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,figureGridColumnEnd:"-2",figureGridRowEnd:"-2",bodyAlignSelf:"end",bodyJustifySelf:"end",bodyGridColumnStart:"2",bodyGridRowStart:"2",bodyMaxWidth:"38rem"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"left-top-in",title:(0,p.__)("Left / Top / In","snow-monkey-blocks"),scope:["block"],icon:j,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,bodyAlignSelf:"start",bodyJustifySelf:"start",bodyMaxWidth:"38rem",bodyPadding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"},align:"wide"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"right-top-in",title:(0,p.__)("Right / Top / In","snow-monkey-blocks"),scope:["block"],icon:J,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,bodyAlignSelf:"start",bodyJustifySelf:"end",bodyMaxWidth:"38rem",bodyPadding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"},align:"wide"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"left-bottom-in",title:(0,p.__)("Left / Bottom / In","snow-monkey-blocks"),scope:["block"],icon:L,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,bodyAlignSelf:"end",bodyJustifySelf:"start",bodyMaxWidth:"38rem",bodyPadding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"},align:"wide"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"right-bottom-in",title:(0,p.__)("Right / Bottom / In","snow-monkey-blocks"),scope:["block"],icon:H,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,bodyAlignSelf:"end",bodyJustifySelf:"end",bodyMaxWidth:"38rem",bodyPadding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"},align:"wide"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]},{name:"center",title:(0,p.__)("Center","snow-monkey-blocks"),scope:["block"],icon:$,attributes:{mediaUrl:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`,bodyAlignSelf:"center",bodyJustifySelf:"center",bodyMaxWidth:"38rem",bodyPadding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"},align:"full"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}}]}];(0,e.registerBlockType)(t.u2,{icon:{foreground:"#cd162c",src:r},edit:function({name:o,attributes:r,setAttributes:n,isSelected:l,className:m,clientId:c}){const{mediaId:u,mediaUrl:h,mediaAlt:f,mediaWidth:k,mediaHeight:A,mediaSizeSlug:v,mediaType:_,focalPoint:E,columns:R,rows:I,maxWidth:Y,fit:U,figureGridColumnStart:N,figureGridColumnEnd:q,figureGridRowStart:V,figureGridRowEnd:M,figureAspectRatio:z,bodyAlignSelf:j,bodyJustifySelf:J,bodyGridColumnStart:L,bodyGridColumnEnd:H,bodyGridRowStart:$,bodyGridRowEnd:O,bodyMaxWidth:F,bodyPadding:Z,style:K}=r,Q=(0,g.useSelect)((e=>{const{getBlock:t}=e(s.store),o=t(c);return!(!o||!o.innerBlocks.length)}),[c]),{replaceInnerBlocks:X}=(0,g.useDispatch)(s.store),ee={};Object.values(t.Y4||[]).forEach(((e,o)=>{ee[Object.keys(t.Y4)[o]]=e.default}));const[te,oe]=(0,b.useState)(!Q&&!h);(0,b.useEffect)((()=>{oe(!Q&&!h)}),[h,Q]);const{imageSizes:ie,image:re}=(0,g.useSelect)((e=>{const{getSettings:t}=e(s.store);return{image:u&&l?e("core").getMedia(u,{context:"view"}):null,imageSizes:t()?.imageSizes}}),[l,u,c]);if(te)return(0,i.createElement)("div",{...(0,s.useInnerBlocksProps)({...(0,s.useBlockProps)()})},(0,i.createElement)(T,{name:o,onSelect:t=>{oe(!1),t?.attributes&&n(t.attributes),t?.innerBlocks&&X(c,(0,e.createBlocksFromInnerBlocksTemplate)(t.innerBlocks),!0)}}));const ne=ie.filter((({slug:e})=>re?.media_details?.sizes?.[e]?.source_url)).map((({name:e,slug:t})=>({value:t,label:e}))),ae="video"===_,le="image"===_||void 0===_,se=a()("smb-hero-header",m,{"smb-hero-header--fit":U}),de={"--smb-hero-header--columns":String(R)||void 0,"--smb-hero-header--rows":String(I)||void 0,"--smb-hero-header--max-gap":K?.spacing?.blockGap||void 0,"--smb-hero-header--object-position-x":E?.x?100*E?.x+"%":void 0,"--smb-hero-header--object-position-y":E?.y?100*E?.y+"%":void 0,"--smb-hero-header--max-width":Y||void 0,"--smb-hero-header--figure-grid-column-start":!U&&P(N,R+1)||void 0,"--smb-hero-header--figure-grid-column-end":!U&&P(q,R+1)||void 0,"--smb-hero-header--figure-grid-row-start":!U&&P(V,I+1)||void 0,"--smb-hero-header--figure-grid-row-end":!U&&P(M,I+1)||void 0,"--smb-hero-header--figure-aspect-ratio":!U&&z||void 0,"--smb-hero-header--body-align-self":j||void 0,"--smb-hero-header--body-justify-self":J||void 0,"--smb-hero-header--body-grid-column-start":P(L,R+1)||void 0,"--smb-hero-header--body-grid-column-end":P(H,R+1)||void 0,"--smb-hero-header--body-grid-row-start":P($,I+1)||void 0,"--smb-hero-header--body-grid-row-end":P(O,I+1)||void 0,"--smb-hero-header--body-max-width":F||void 0,"--smb-hero-header--body-padding-top":W(Z?.top)||void 0,"--smb-hero-header--body-padding-right":W(Z?.right)||void 0,"--smb-hero-header--body-padding-bottom":W(Z?.bottom)||void 0,"--smb-hero-header--body-padding-left":W(Z?.left)||void 0},me=(0,s.useBlockProps)({className:se,style:de}),ce=(0,s.useInnerBlocksProps)({className:"smb-hero-header__body"},{renderAppender:Q?s.InnerBlocks.DefaultBlockAppender:s.InnerBlocks.ButtonBlockAppender});return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(s.InspectorControls,{group:"dimensions"},(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>Y!==t.Y4.maxWidth.default,isShownByDefault:!!Y,label:(0,p.__)("Maximum width","snow-monkey-blocks"),onDeselect:()=>n({maxWidth:t.Y4.maxWidth.default}),panelId:c},(0,i.createElement)(d.__experimentalUnitControl,{label:(0,p.__)("Maximum width","snow-monkey-blocks"),value:Y,onChange:e=>n({maxWidth:e})}))),(0,i.createElement)(s.InspectorControls,null,(0,i.createElement)(d.__experimentalToolsPanel,{label:(0,p.__)("Block settings","snow-monkey-blocks")},(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>R!==t.Y4.columns.default,isShownByDefault:!0,label:(0,p.__)("Number of columns in grid","snow-monkey-blocks"),onDeselect:()=>n({columns:t.Y4.columns.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Number of columns in grid","snow-monkey-blocks"),value:Number(R),onChange:e=>n({columns:String(e)}),min:1,max:24,step:1})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>I!==t.Y4.rows.default,isShownByDefault:!0,label:(0,p.__)("Number of rows in grid","snow-monkey-blocks"),onDeselect:()=>n({rows:t.Y4.rows.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Number of rows in grid","snow-monkey-blocks"),value:Number(I),onChange:e=>n({rows:String(e)}),min:1,max:24,step:1}))),(0,i.createElement)(d.__experimentalToolsPanel,{label:(0,p.__)("Background image","snow-monkey-blocks")},(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>h!==t.Y4.mediaUrl.default,isShownByDefault:!0,label:(0,p.__)("Image","snow-monkey-blocks"),onDeselect:()=>n({mediaId:t.Y4.mediaId.default,mediaUrl:t.Y4.mediaUrl.default,mediaAlt:t.Y4.mediaAlt.default,mediaWidth:t.Y4.mediaWidth.default,mediaHeight:t.Y4.mediaHeight.default,mediaSizeSlug:t.Y4.mediaSizeSlug.default,mediaType:t.Y4.mediaType.default})},(0,i.createElement)("div",{className:"smb-image-size-control"},(0,i.createElement)(x,{src:h,id:u,alt:f,width:k,height:A,onSelect:e=>{const t=e?.sizes?.[v]?v:G,o=e?.sizes?.[t]?.url,i=e?.sizes?.[t]?.width,r=e?.sizes?.[t]?.height;n({mediaType:y(e),mediaId:e.id,mediaUrl:o||e.url,mediaAlt:e.alt,mediaWidth:i||e.width,mediaHeight:r||e.height,mediaSizeSlug:t})},onSelectURL:e=>{e!==h&&n({mediaUrl:e,mediaId:0,mediaSizeSlug:G,mediaType:y({media_type:w(e)?"video":"image"})})},onRemove:()=>{n({mediaUrl:t.Y4.mediaUrl.default,mediaAlt:t.Y4.mediaAlt.default,mediaWidth:t.Y4.mediaWidth.default,mediaHeight:t.Y4.mediaHeight.default,mediaId:t.Y4.mediaId.default,mediaType:t.Y4.mediaType.default})},mediaType:_,allowedTypes:D}))),0<ne.length&&(0,i.createElement)(S,{defaultValue:t.Y4.mediaSizeSlug.default,value:v,options:ne,onChange:e=>{const t=re?.media_details?.sizes?.[e]?.source_url,o=re?.media_details?.sizes?.[e]?.width,i=re?.media_details?.sizes?.[e]?.height;n({mediaUrl:t,mediaWidth:o,mediaHeight:i,mediaSizeSlug:e})}}),!!h&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>E!==t.Y4.focalPoint.default,isShownByDefault:!0,label:(0,p.__)("Focal point picker","snow-monkey-blocks"),onDeselect:()=>n({focalPoint:t.Y4.focalPoint.default})},(0,i.createElement)(d.FocalPointPicker,{label:(0,p.__)("Focal point picker","snow-monkey-blocks"),url:h,value:E,onChange:e=>{n({focalPoint:e})},onDrag:e=>n({focalPoint:e})})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>U!==t.Y4.fit.default,isShownByDefault:!0,label:(0,p.__)("Fit to the contents","snow-monkey-blocks"),onDeselect:()=>n({fit:t.Y4.fit.default})},(0,i.createElement)(d.ToggleControl,{label:(0,p.__)("Fit to the contents","snow-monkey-blocks"),checked:U,onChange:e=>n({fit:e})})),!U&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>z!==t.Y4.figureAspectRatio.default,isShownByDefault:!0,label:(0,p.__)("Aspect ratio","snow-monkey-blocks"),onDeselect:()=>n({figureAspectRatio:t.Y4.figureAspectRatio.default})},(0,i.createElement)(d.TextControl,{label:(0,p.__)("Aspect ratio","snow-monkey-blocks"),help:(0,p.__)("e.g. 16 / 9","snow-monkey-blocks"),value:z,onChange:e=>n({figureAspectRatio:e})})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>N!==t.Y4.figureGridColumnStart.default,isShownByDefault:!0,label:(0,p.__)("Grid column: start","snow-monkey-blocks"),onDeselect:()=>n({figureGridColumnStart:t.Y4.figureGridColumnStart.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid column: start","snow-monkey-blocks"),value:Number(N),onChange:e=>n({figureGridColumnStart:String(e)}),min:1,max:Number(R)+1,step:1})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>q!==t.Y4.figureGridColumnEnd.default,isShownByDefault:!0,label:(0,p.__)("Grid column: end","snow-monkey-blocks"),onDeselect:()=>n({figureGridColumnEnd:t.Y4.figureGridColumnEnd.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid column: end","snow-monkey-blocks"),value:Number(q),onChange:e=>n({figureGridColumnEnd:String(e)}),min:-1*Number(R)-1,max:Number(R)+1,step:1})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>V!==t.Y4.figureGridRowStart.default,isShownByDefault:!0,label:(0,p.__)("Grid row: start","snow-monkey-blocks"),onDeselect:()=>n({figureGridRowStart:t.Y4.figureGridRowStart.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid row: start","snow-monkey-blocks"),value:Number(V),onChange:e=>n({figureGridRowStart:String(e)}),min:1,max:Number(I)+1,step:1})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>M!==t.Y4.figureGridRowEnd.default,isShownByDefault:!0,label:(0,p.__)("Grid row: end","snow-monkey-blocks"),onDeselect:()=>n({figureGridRowEnd:t.Y4.figureGridRowEnd.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid row: end","snow-monkey-blocks"),value:Number(M),onChange:e=>n({figureGridRowEnd:String(e)}),min:-1*Number(I)-1,max:Number(I)+1,step:1}))))),(0,i.createElement)(d.__experimentalToolsPanel,{label:(0,p.__)("Contents","snow-monkey-blocks")},(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>F!==t.Y4.bodyMaxWidth.default,isShownByDefault:!0,label:(0,p.__)("Maximum width","snow-monkey-blocks"),onDeselect:()=>n({bodyMaxWidth:t.Y4.bodyMaxWidth.default})},(0,i.createElement)(d.__experimentalUnitControl,{label:(0,p.__)("Maximum width","snow-monkey-blocks"),value:F,onChange:e=>n({bodyMaxWidth:e})})),(0,i.createElement)(d.__experimentalToolsPanelItem,{className:"tools-panel-item-spacing",hasValue:()=>JSON.stringify(Z)!==JSON.stringify(t.Y4.bodyPadding.default),isShownByDefault:!0,label:(0,p.__)("Padding","snow-monkey-blocks"),onDeselect:()=>n({bodyPadding:{...t.Y4.bodyPadding.default}})},(0,i.createElement)(s.__experimentalSpacingSizesControl,{label:(0,p.__)("Padding","snow-monkey-blocks"),allowReset:!1,values:Z,onChange:e=>n({bodyPadding:e})})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>J!==t.Y4.bodyJustifySelf.default,isShownByDefault:!0,label:(0,p.__)("Alignment on inline axis","snow-monkey-blocks"),onDeselect:()=>n({bodyJustifySelf:t.Y4.bodyJustifySelf.default})},(0,i.createElement)(d.BaseControl,{label:(0,p.__)("Alignment on inline axis","snow-monkey-blocks"),id:"snow-monkey-blocks/hero-header-backgroun-image-justify-self"},(0,i.createElement)("div",null,C.map((({value:e,icon:t,iconLabel:o})=>(0,i.createElement)(d.Button,{key:e,label:o,icon:t,isPressed:e===J,onClick:()=>{n({bodyJustifySelf:e!==J?e:void 0})}})))))),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>j!==t.Y4.bodyAlignSelf.default,isShownByDefault:!0,label:(0,p.__)("Alignment on cross axis","snow-monkey-blocks"),onDeselect:()=>n({bodyAlignSelf:t.Y4.bodyAlignSelf.default})},(0,i.createElement)(d.BaseControl,{label:(0,p.__)("Alignment on cross axis","snow-monkey-blocks"),id:"snow-monkey-blocks/hero-header-backgroun-image-align-self"},(0,i.createElement)("div",null,B.map((({value:e,icon:t,iconLabel:o})=>(0,i.createElement)(d.Button,{style:{transform:"rotate(90deg)"},key:e,label:o,icon:t,isPressed:e===j,onClick:()=>{n({bodyAlignSelf:e!==j?e:void 0})}})))))),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>L!==t.Y4.bodyGridColumnStart.default,isShownByDefault:!0,label:(0,p.__)("Grid column: start","snow-monkey-blocks"),onDeselect:()=>n({bodyGridColumnStart:t.Y4.bodyGridColumnStart.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid column: start","snow-monkey-blocks"),value:Number(L),onChange:e=>n({bodyGridColumnStart:String(e)}),min:1,max:Number(R)+1,step:1})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>H!==t.Y4.bodyGridColumnEnd.default,isShownByDefault:!0,label:(0,p.__)("Grid column: end","snow-monkey-blocks"),onDeselect:()=>n({bodyGridColumnEnd:t.Y4.bodyGridColumnEnd.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid column: end","snow-monkey-blocks"),value:Number(H),onChange:e=>n({bodyGridColumnEnd:String(e)}),min:-1*Number(R)-1,max:Number(R)+1,step:1})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>$!==t.Y4.bodyGridRowStart.default,isShownByDefault:!0,label:(0,p.__)("Grid row: start","snow-monkey-blocks"),onDeselect:()=>n({bodyGridRowStart:t.Y4.bodyGridRowStart.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid row: start","snow-monkey-blocks"),value:Number($),onChange:e=>n({bodyGridRowStart:String(e)}),min:1,max:Number(I)+1,step:1})),(0,i.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>O!==t.Y4.bodyGridRowEnd.default,isShownByDefault:!0,label:(0,p.__)("Grid row: end","snow-monkey-blocks"),onDeselect:()=>n({bodyGridRowEnd:t.Y4.bodyGridRowEnd.default})},(0,i.createElement)(d.RangeControl,{label:(0,p.__)("Grid row: end","snow-monkey-blocks"),value:Number(O),onChange:e=>n({bodyGridRowEnd:String(e)}),min:-1*Number(I)-1,max:Number(I)+1,step:1})))),(0,i.createElement)("div",{...me},!!h&&(0,i.createElement)("div",{className:"smb-hero-header__figure"},le&&(0,i.createElement)("img",{src:h,alt:f,width:k,height:A,className:`wp-image-${u}`}),ae&&(0,i.createElement)("video",{playsInline:!0,loop:!0,autoPlay:!0,muted:!0,src:h,width:k,height:A})),(0,i.createElement)("div",{...ce})))},save:function({attributes:e,className:t}){const{mediaId:o,mediaUrl:r,mediaAlt:n,mediaWidth:l,mediaHeight:d,mediaType:m,focalPoint:c,columns:u,rows:h,maxWidth:g,fit:b,figureGridColumnStart:p,figureGridColumnEnd:y,figureGridRowStart:f,figureGridRowEnd:w,figureAspectRatio:k,bodyAlignSelf:A,bodyJustifySelf:v,bodyGridColumnStart:_,bodyGridColumnEnd:x,bodyGridRowStart:E,bodyGridRowEnd:S,bodyMaxWidth:D,bodyPadding:G,style:C}=e,B="video"===m,R="image"===m||void 0===m,W=a()("smb-hero-header",t,{"smb-hero-header--fit":b}),P={"--smb-hero-header--columns":String(u)||void 0,"--smb-hero-header--rows":String(h)||void 0,"--smb-hero-header--max-gap":C?.spacing?.blockGap||void 0,"--smb-hero-header--object-position-x":c?.x?100*c?.x+"%":void 0,"--smb-hero-header--object-position-y":c?.y?100*c?.y+"%":void 0,"--smb-hero-header--max-width":g||void 0,"--smb-hero-header--figure-grid-column-start":!b&&U(p,u+1)||void 0,"--smb-hero-header--figure-grid-column-end":!b&&U(y,u+1)||void 0,"--smb-hero-header--figure-grid-row-start":!b&&U(f,h+1)||void 0,"--smb-hero-header--figure-grid-row-end":!b&&U(w,h+1)||void 0,"--smb-hero-header--figure-aspect-ratio":!b&&k||void 0,"--smb-hero-header--body-align-self":A||void 0,"--smb-hero-header--body-justify-self":v||void 0,"--smb-hero-header--body-grid-column-start":U(_,u+1)||void 0,"--smb-hero-header--body-grid-column-end":U(x,u+1)||void 0,"--smb-hero-header--body-grid-row-start":U(E,h+1)||void 0,"--smb-hero-header--body-grid-row-end":U(S,h+1)||void 0,"--smb-hero-header--body-max-width":D||void 0,"--smb-hero-header--body-padding-top":Y(G?.top)||void 0,"--smb-hero-header--body-padding-right":Y(G?.right)||void 0,"--smb-hero-header--body-padding-bottom":Y(G?.bottom)||void 0,"--smb-hero-header--body-padding-left":Y(G?.left)||void 0},T=s.useBlockProps.save({className:W,style:P}),I=s.useInnerBlocksProps.save({className:"smb-hero-header__body"});return(0,i.createElement)("div",{...T},!!r&&(0,i.createElement)("div",{className:"smb-hero-header__figure"},R&&(0,i.createElement)("img",{src:r,alt:n,width:l,height:d,className:`wp-image-${o}`}),B&&(0,i.createElement)("video",{playsInline:!0,loop:!0,autoPlay:!0,muted:!0,src:r,width:l,height:d})),(0,i.createElement)("div",{...I}))},example:N,variations:O})})()})();