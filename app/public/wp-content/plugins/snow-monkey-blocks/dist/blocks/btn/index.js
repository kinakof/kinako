(()=>{var e={4184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)o.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n,o=JSON.parse('{"u2":"snow-monkey-blocks/btn","Y4":{"content":{"type":"string","source":"html","selector":".smb-btn__label","default":""},"url":{"type":"string","source":"attribute","selector":".smb-btn-wrapper a","attribute":"href","default":""},"target":{"type":"string","source":"attribute","selector":".smb-btn-wrapper a","attribute":"target","default":"_self"},"modifier":{"type":"string","default":""},"borderRadius":{"type":"string"},"backgroundColor":{"type":"string"},"backgroundGradientColor":{"type":"string"},"textColor":{"type":"string"},"wrap":{"type":"boolean","default":false},"linkDestination":{"type":"string"}},"be":{"align":["left","center","right"],"snowmonkeyeditor":{"blockPresets":{"ignore":["content","url","target","linkDestination"]}}}}'),a=window.React,n=(0,a.createElement)("svg",{viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M18,8H6A1,1,0,0,0,5,9v6a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V9A1,1,0,0,0,18,8Zm0,5.8A1.15,1.15,0,0,1,16.91,15H6.55A.57.57,0,0,1,6,14.4V9.6A.57.57,0,0,1,6.55,9h10.9a.57.57,0,0,1,.55.6Z"}),(0,a.createElement)("rect",{x:"9.5",y:"11.5",width:"5",height:"1"}));var l=r(4184),s=r.n(l);const i=window.wp.components,c=window.wp.blockEditor,b=window.wp.compose,m=window.wp.element,d=window.wp.primitives,u=(0,a.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(d.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),p=(0,a.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(d.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})),g=o.Y4,f=o.be,v=[{attributes:{...g,borderRadius:{type:"number"}},supports:{...f},migrate(e){const{borderRadius:t}=e;return e.borderRadius=String(t).match(/^\d+$/)?`${t}px`:t,[{...e}]},save({attributes:e,className:t}){const{content:r,url:o,target:n,modifier:l,borderRadius:i,backgroundColor:b,backgroundGradientColor:m,textColor:d,wrap:u}=e,p=s()("smb-btn-wrapper",t,{[`smb-btn-wrapper--${l}`]:!!l}),g=s()("smb-btn",{[`smb-btn--${l}`]:!!l,"smb-btn--wrap":u}),f={"--smb-btn--background-color":b||void 0,"--smb-btn--background-image":m||void 0,"--smb-btn--border-radius":i||0<=i?`${i}px`:void 0,"--smb-btn--color":d||void 0};return e.className&&e.className.split(" ").includes("is-style-ghost")&&(f["--smb-btn--style--ghost--border-color"]=b||void 0),(0,a.createElement)("div",{...c.useBlockProps.save({className:p})},(0,a.createElement)("a",{className:g,href:o,style:f,target:"_self"===n?void 0:n,rel:"_self"===n?void 0:"noopener noreferrer"},(0,a.createElement)("span",{className:"smb-btn__label"},(0,a.createElement)(c.RichText.Content,{value:r}))))}},{attributes:{...g,borderRadius:{type:"number"}},supports:{...f},save({attributes:e,className:t}){const{content:r,url:o,target:n,modifier:l,borderRadius:i,backgroundColor:b,backgroundGradientColor:m,textColor:d,wrap:u}=e,p=s()("smb-btn-wrapper",t,{[`smb-btn-wrapper--${l}`]:!!l}),g=s()("smb-btn",{[`smb-btn--${l}`]:!!l,"smb-btn--wrap":u}),f={backgroundColor:b||void 0,backgroundImage:m||void 0,borderRadius:i||0<=i?`${i}px`:void 0};e.className&&e.className.split(" ").includes("is-style-ghost")&&(f.borderColor=b||void 0);const v={color:d||void 0};return(0,a.createElement)("div",{...c.useBlockProps.save({className:p})},(0,a.createElement)("a",{className:g,href:o,style:f,target:"_self"===n?void 0:n,rel:"_self"===n?void 0:"noopener noreferrer"},(0,a.createElement)("span",{className:"smb-btn__label",style:v},(0,a.createElement)(c.RichText.Content,{value:r}))))}},{attributes:{...g,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e,className:t}){const{content:r,url:o,target:n,modifier:l,borderRadius:i,backgroundColor:b,textColor:m,wrap:d}=e,u=s()("smb-btn-wrapper",t,{[`smb-btn-wrapper--${l}`]:!!l}),p=s()("smb-btn",{[`smb-btn--${l}`]:!!l,"smb-btn--wrap":d}),g={backgroundColor:b||void 0,borderRadius:i||0<=i?`${i}px`:void 0};"is-style-ghost"===e.className&&(g.borderColor=b||void 0);const f={color:m||void 0};return(0,a.createElement)("div",{...c.useBlockProps.save({className:u})},(0,a.createElement)("a",{className:p,href:o,style:g,target:"_self"===n?void 0:n,rel:"_self"===n?void 0:"noopener noreferrer"},(0,a.createElement)("span",{className:"smb-btn__label",style:f},(0,a.createElement)(c.RichText.Content,{value:r}))))}},{attributes:{...g,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e,className:t}){const{content:r,url:o,target:n,modifier:l,borderRadius:i,backgroundColor:b,textColor:m,wrap:d}=e,u=s()("u-clearfix","smb-btn-wrapper",t),p=s()("smb-btn",{[`smb-btn--${l}`]:!!l,"smb-btn--wrap":d}),g={backgroundColor:b||void 0,borderRadius:void 0!==i?`${i}px`:void 0};"is-style-ghost"===e.className&&(g.borderColor=b||void 0);const f={color:m||void 0};return(0,a.createElement)("div",{className:u},(0,a.createElement)("a",{className:p,href:o,style:g,target:"_self"===n?void 0:n,rel:"_self"===n?void 0:"noopener noreferrer"},(0,a.createElement)("span",{className:"smb-btn__label",style:f},(0,a.createElement)(c.RichText.Content,{value:r}))))}},{attributes:{...g,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e}){const{content:t,url:r,target:o,modifier:n,backgroundColor:l,textColor:i}=e;return(0,a.createElement)("div",{className:"u-clearfix smb-btn-wrapper"},(0,a.createElement)("a",{className:s()("smb-btn",{[`smb-btn--${n}`]:!!n}),href:r,style:{backgroundColor:l},target:"_self"===o?void 0:o,rel:"_self"===o?void 0:"noopener noreferrer"},(0,a.createElement)("span",{className:"smb-btn__label",style:{color:i}},(0,a.createElement)(c.RichText.Content,{value:t}))))}},{attributes:{...g,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e}){const{content:t,url:r,target:o,modifier:n,backgroundColor:l,textColor:i}=e;return(0,a.createElement)("div",{className:"u-clearfix smb-btn-wrapper"},(0,a.createElement)("a",{className:s()("smb-btn",{[`smb-btn--${n}`]:!!n}),href:r,target:o,style:{backgroundColor:l}},(0,a.createElement)("span",{className:"smb-btn__label",style:{color:i}},(0,a.createElement)(c.RichText.Content,{value:t}))))}}];(0,e.registerBlockType)(o.u2,{icon:{foreground:"#cd162c",src:n},edit:function({attributes:e,setAttributes:r,className:n,isSelected:l,clientId:d}){const{content:g,url:f,target:v,modifier:w,borderRadius:k,backgroundColor:_,backgroundGradientColor:y,textColor:h,wrap:C}=e,[E,x]=(0,m.useState)(!1),N=!!f,R="_blank"===v,[$,B]=(0,m.useState)(null);(0,m.useEffect)((()=>{e.className&&r({className:e.className.replace("u-clearfix","")})}),[]);const S=s()("smb-btn-wrapper",n,{[`smb-btn-wrapper--${w}`]:!!w}),T=s()("smb-btn",{[`smb-btn--${w}`]:!!w,"smb-btn--wrap":C}),P={"--smb-btn--background-color":_||void 0,"--smb-btn--background-image":y||void 0,"--smb-btn--border-radius":String(k).match(/^\d+$/)?`${k}px`:k,"--smb-btn--color":h||void 0};e.className&&e.className.split(" ").includes("is-style-ghost")&&(P["--smb-btn--style--ghost--border-color"]=_||void 0);const I=(0,m.useRef)(),H=(0,m.useRef)(),V=(0,c.useBlockProps)({className:S,ref:(0,b.useMergeRefs)([B,I])}),D=()=>{r({url:void 0,target:void 0}),x(!1)};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.InspectorControls,null,(0,a.createElement)(i.__experimentalToolsPanel,{label:(0,t.__)("Block settings","snow-monkey-blocks")},(0,a.createElement)(i.__experimentalToolsPanelItem,{hasValue:()=>w!==o.Y4.modifier.default,isShownByDefault:!0,label:(0,t.__)("Button size","snow-monkey-blocks"),onDeselect:()=>r({modifier:o.Y4.modifier.default})},(0,a.createElement)(i.SelectControl,{label:(0,t.__)("Button size","snow-monkey-blocks"),value:w,onChange:e=>r({modifier:e}),options:[{value:"",label:(0,t.__)("Normal size","snow-monkey-blocks")},{value:"little-wider",label:(0,t.__)("Litle wider","snow-monkey-blocks")},{value:"wider",label:(0,t.__)("Wider","snow-monkey-blocks")},{value:"more-wider",label:(0,t.__)("More wider","snow-monkey-blocks")},{value:"full",label:(0,t.__)("Full size","snow-monkey-blocks")}]})),(0,a.createElement)(i.__experimentalToolsPanelItem,{hasValue:()=>C!==o.Y4.wrap.default,isShownByDefault:!0,label:(0,t.__)("Wrap","snow-monkey-blocks"),onDeselect:()=>r({wrap:o.Y4.wrap.default})},(0,a.createElement)(i.ToggleControl,{label:(0,t.__)("Wrap","snow-monkey-blocks"),checked:C,onChange:e=>r({wrap:e})})))),(0,a.createElement)(c.InspectorControls,{group:"styles"},(0,a.createElement)(c.__experimentalPanelColorGradientSettings,{title:(0,t.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:_,onColorChange:e=>r({backgroundColor:e}),gradientValue:y,onGradientChange:e=>r({backgroundGradientColor:e}),label:(0,t.__)("Background color","snow-monkey-blocks")},{colorValue:h,onColorChange:e=>r({textColor:e}),label:(0,t.__)("Text color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0},(0,a.createElement)(c.ContrastChecker,{backgroundColor:_,textColor:h}))),(0,a.createElement)(c.InspectorControls,{group:"border"},(0,a.createElement)(i.__experimentalToolsPanelItem,{hasValue:()=>k!==o.Y4.borderRadius.default,isShownByDefault:!0,label:(0,t.__)("Border radius","snow-monkey-blocks"),onDeselect:()=>r({borderRadius:o.Y4.borderRadius.default}),panelId:d},(0,a.createElement)("div",{className:"smb-border-radius-control"},(0,a.createElement)(c.__experimentalBorderRadiusControl,{values:k,onChange:e=>{r({borderRadius:e})}})))),(0,a.createElement)("div",{...V},(0,a.createElement)("span",{className:T,href:f,style:P,target:"_self"===v?void 0:v,rel:"_self"===v?void 0:"noopener noreferrer"},(0,a.createElement)(c.RichText,{className:"smb-btn__label",value:g,placeholder:(0,t.__)("Button","snow-monkey-blocks"),onChange:e=>r({content:e}),withoutInteractiveFormatting:!0,ref:H}))),(0,a.createElement)(c.BlockControls,{group:"block"},!N&&(0,a.createElement)(i.ToolbarButton,{name:"link",icon:u,title:(0,t.__)("Link","snow-monkey-blocks"),onClick:e=>{e.preventDefault(),x(!0)}}),N&&(0,a.createElement)(i.ToolbarButton,{name:"link",icon:p,title:(0,t.__)("Unlink","snow-monkey-blocks"),onClick:D,isActive:!0})),l&&(E||N)&&(0,a.createElement)(i.Popover,{placement:"bottom",anchor:$,onClose:()=>{x(!1),H.current?.focus()}},(0,a.createElement)(c.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:f,opensInNewTab:R},onChange:({url:e,opensInNewTab:t})=>{r({url:e,target:t?"_blank":"_self"})},onRemove:()=>{D(),H.current?.focus()},forceIsEditingLink:E})))},save:function({attributes:e,className:t}){const{content:r,url:o,target:n,modifier:l,borderRadius:i,backgroundColor:b,backgroundGradientColor:m,textColor:d,wrap:u}=e,p=s()("smb-btn-wrapper",t,{[`smb-btn-wrapper--${l}`]:!!l}),g=s()("smb-btn",{[`smb-btn--${l}`]:!!l,"smb-btn--wrap":u}),f={"--smb-btn--background-color":b||void 0,"--smb-btn--background-image":m||void 0,"--smb-btn--border-radius":String(i).match(/^\d+$/)?`${i}px`:i,"--smb-btn--color":d||void 0};return e.className&&e.className.split(" ").includes("is-style-ghost")&&(f["--smb-btn--style--ghost--border-color"]=b||void 0),(0,a.createElement)("div",{...c.useBlockProps.save({className:p})},(0,a.createElement)("a",{className:g,href:o,style:f,target:"_self"===n?void 0:n,rel:"_self"===n?void 0:"noopener noreferrer"},(0,a.createElement)("span",{className:"smb-btn__label"},(0,a.createElement)(c.RichText.Content,{value:r}))))},styles:[{name:"default",label:(0,t.__)("Default","snow-monkey-blocks"),isDefault:!0},{name:"ghost",label:(0,t.__)("Ghost","snow-monkey-blocks")},{name:"text",label:(0,t.__)("Text","snow-monkey-blocks")}],deprecated:v})})()})();