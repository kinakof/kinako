(()=>{var e={4184:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)l.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var s=t[l]={exports:{}};return e[l](s,s.exports,a),s.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-blocks/panels-item","Y4":{"titleTagName":{"type":"string","default":"div"},"title":{"type":"string","source":"html","selector":".smb-panels__item__title","default":""},"summary":{"type":"string","source":"html","selector":".smb-panels__item__content","default":""},"backgroundColor":{"type":"string"},"backgroundGradientColor":{"type":"string"},"textColor":{"type":"string"},"displayLink":{"type":"boolean","default":false},"linkLabel":{"type":"string","source":"text","selector":".smb-panels__item__link","default":""},"linkURL":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"href","default":""},"linkTarget":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"target","default":"_self"},"displayImage":{"type":"boolean","default":false},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"full"}},"be":{"html":false}}'),l=window.React,n=(0,l.createElement)("svg",{viewBox:"0 0 24 24"},(0,l.createElement)("path",{d:"M3,3v8h8V3Zm7,7H4V4h6Z"}),(0,l.createElement)("path",{d:"M13,3v8h8V3Zm7,7H14V4h6Z"}),(0,l.createElement)("path",{d:"M3,13v8h8V13Zm7,7H4V14h6Z"}),(0,l.createElement)("path",{d:"M13,13v8h8V13Zm7,7H14V14h6Z"}));var s=a(4184),i=a.n(s);const o=window.lodash,m=window.wp.blockEditor,r=window.wp.components,c=window.wp.compose,_=window.wp.element,u=window.wp.data,g=window.wp.i18n,p=window.wp.primitives,d=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(p.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),b=({id:e,src:t,allowedTypes:a,accept:n,onSelect:s,onSelectURL:i,onRemove:o})=>(0,l.createElement)(m.BlockControls,{group:"inline"},(0,l.createElement)(m.MediaReplaceFlow,{mediaId:e,mediaURL:t,allowedTypes:a,accept:n,onSelect:s,onSelectURL:i}),!!t&&!!o&&(0,l.createElement)(r.ToolbarButton,{onClick:o},(0,g.__)("Release","snow-monkey-blocks"))),h=({src:e,alt:t,id:a,style:n,width:s,height:i})=>(0,l.createElement)("img",{src:e,alt:t,className:`wp-image-${a}`,style:n,width:s,height:i}),k=({src:e,style:t,width:a,height:n})=>(0,l.createElement)("video",{src:e,style:t,width:a,height:n}),y=(0,_.memo)((({id:e,src:t,alt:a,url:n,width:s,height:i,target:m,allowedTypes:r,accept:c,onSelect:_,onSelectURL:u,onRemove:g,mediaType:p,style:d,rel:y,linkClass:f})=>{let E;if("image"===p){let r;E=(0,l.createElement)(h,{src:t,alt:a,id:e,style:d,width:s,height:i}),r=y?(0,o.isEmpty)(y)?void 0:y:"_self"!==m&&m?"noopener noreferrer":void 0,n&&(E=(0,l.createElement)("span",{href:n,target:"_self"===m?void 0:m,rel:r,className:f},E))}else"video"===p&&(E=(0,l.createElement)(k,{src:t,style:d,width:s,height:i}));return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(b,{id:e,src:t,allowedTypes:r,accept:c,onSelect:_,onSelectURL:u,onRemove:g}),E)}),((e,t)=>{const a=Object.keys(e);for(const l of a)if(e[l]!==t[l])return!1;return!0}));function f(e){const{src:t,onSelect:a,onSelectURL:n,mediaType:s,allowedTypes:i=["image"]}=e,o=!s&&t?"image":s;let r=(0,g.__)("Media","snow-monkey-blocks");1===i.length&&("image"===i[0]?r=(0,g.__)("Image","snow-monkey-blocks"):"video"===i[0]&&(r=(0,g.__)("Video","snow-monkey-blocks")));const c=(0,_.useMemo)((()=>i.map((e=>`${e}/*`)).join(",")),[i]);return t?(0,l.createElement)(y,{...e,accept:c,allowedTypes:i,mediaType:o}):(0,l.createElement)(m.MediaPlaceholder,{icon:"format-image",labels:{title:r},onSelect:a,onSelectURL:n,accept:c,allowedTypes:i})}const E=[{label:(0,g._x)("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:(0,g._x)("Medium","Image size option for resolution control"),value:"medium"},{label:(0,g._x)("Large","Image size option for resolution control"),value:"large"},{label:(0,g._x)("Full Size","Image size option for resolution control"),value:"full"}];function v({panelId:e,value:t,onChange:a,options:n=E,defaultValue:s=E[0].value,isShownByDefault:i=!0,withToolsPanelItem:o=!0}){const m=null!=t?t:s,c=()=>(0,l.createElement)(r.SelectControl,{label:(0,g.__)("Resolution"),value:m,options:n,onChange:a,help:(0,g.__)("Select the size of the source image."),size:"__unstable-large"});return o?(0,l.createElement)(r.__experimentalToolsPanelItem,{hasValue:()=>m!==s,label:(0,g.__)("Resolution"),onDeselect:()=>a(s),isShownByDefault:i,panelId:e},(0,l.createElement)(c,null)):(0,l.createElement)(c,null)}const w=e=>{const t=document.createElement("div");return t.style.display="none",t.innerHTML=e,t.innerText},T=["image"],R="full";void 0===m.__experimentalUseMultipleOriginColorsAndGradients&&(m.__experimentalUseMultipleOriginColorsAndGradients=function(){const e={disableCustomColors:!(0,m.useSetting)("color.custom"),disableCustomGradients:!(0,m.useSetting)("color.customGradient")},t=(0,m.useSetting)("color.palette.custom"),a=(0,m.useSetting)("color.palette.theme"),l=(0,m.useSetting)("color.palette.default"),n=(0,m.useSetting)("color.defaultPalette");e.colors=(0,_.useMemo)((()=>{const e=[];return a&&a.length&&e.push({name:(0,g._x)("Theme","Indicates this palette comes from the theme.","snow-monkey-blocks"),colors:a}),n&&l&&l.length&&e.push({name:(0,g._x)("Default","Indicates this palette comes from WordPress.","snow-monkey-blocks"),colors:l}),t&&t.length&&e.push({name:(0,g._x)("Custom","Indicates this palette comes from the theme.","snow-monkey-blocks"),colors:t}),e}),[l,a,t]);const s=(0,m.useSetting)("color.gradients.custom"),i=(0,m.useSetting)("color.gradients.theme"),o=(0,m.useSetting)("color.gradients.default"),r=(0,m.useSetting)("color.defaultGradients");return e.gradients=(0,_.useMemo)((()=>{const e=[];return i&&i.length&&e.push({name:(0,g._x)("Theme","Indicates this palette comes from the theme.","snow-monkey-blocks"),gradients:i}),r&&o&&o.length&&e.push({name:(0,g._x)("Default","Indicates this palette comes from WordPress.","snow-monkey-blocks"),gradients:o}),s&&s.length&&e.push({name:(0,g._x)("Custom","Indicates this palette is created by the user.","snow-monkey-blocks"),gradients:s}),e}),[s,i,o]),e});const N=t.Y4,x=t.be,C=[{attributes:{...N},supports:{...x},migrate(e){const{linkLabel:t,linkURL:a,imageURL:l}=e;return m.RichText.isEmpty(t)&&!a||(e.displayLink=!0),l&&(e.displayImage=!0),e},save({attributes:e,className:t}){const{titleTagName:a,title:n,summary:s,linkLabel:o,linkURL:r,linkTarget:c,imageID:_,imageURL:u,imageAlt:g,imageWidth:p,imageHeight:d}=e,b=i()("c-row__col",t),h=i()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!o}),k=!m.RichText.isEmpty(o)&&(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(m.RichText.Content,{value:o}));return(0,l.createElement)("div",{...m.useBlockProps.save({className:b})},(0,l.createElement)("div",{className:"smb-panels__item"},!!u&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)("img",{src:u,alt:g,width:!!p&&p,height:!!d&&d,className:`wp-image-${_}`})),(0,l.createElement)("div",{className:"smb-panels__item__body"},!m.RichText.isEmpty(n)&&"none"!==a&&(0,l.createElement)(m.RichText.Content,{tagName:a,className:"smb-panels__item__title",value:n}),!m.RichText.isEmpty(s)&&(0,l.createElement)("div",{className:"smb-panels__item__content"},(0,l.createElement)(m.RichText.Content,{value:s})),(!m.RichText.isEmpty(o)||!!r)&&(0,l.createElement)("div",{className:h},r?(0,l.createElement)("a",{href:r,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer"},k):(0,l.createElement)(l.Fragment,null,k)))))}},{attributes:{...N,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},supports:{...x},save({attributes:e,className:t}){const{titleTagName:a,title:n,summary:s,linkLabel:o,linkURL:r,linkTarget:c,imageID:_,imageURL:u,imageAlt:g}=e,p=(0,l.createElement)(l.Fragment,null,!!u&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)("img",{src:u,alt:g,className:`wp-image-${_}`})),(0,l.createElement)("div",{className:"smb-panels__item__body"},!m.RichText.isEmpty(n)&&"none"!==a&&(0,l.createElement)(m.RichText.Content,{tagName:a,className:"smb-panels__item__title",value:n}),!m.RichText.isEmpty(s)&&(0,l.createElement)("div",{className:"smb-panels__item__content"},(0,l.createElement)(m.RichText.Content,{value:s})),!m.RichText.isEmpty(o)&&(0,l.createElement)("div",{className:"smb-panels__item__action"},(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(m.RichText.Content,{value:o}))))),d=i()("c-row__col",t);return(0,l.createElement)("div",{className:d},r?(0,l.createElement)("a",{className:"smb-panels__item",href:r,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer"},p):(0,l.createElement)("div",{className:"smb-panels__item"},p))}},{attributes:{...N,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},supports:{...x},save({attributes:e}){const{titleTagName:t,title:a,summary:n,linkLabel:s,linkURL:i,linkTarget:o,imageID:r,imageURL:c}=e,_=()=>(0,l.createElement)(l.Fragment,null,!!r&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)("img",{src:c,alt:"",className:`wp-image-${r}`})),(0,l.createElement)("div",{className:"smb-panels__item__body"},!m.RichText.isEmpty(a)&&(0,l.createElement)(m.RichText.Content,{tagName:t,className:"smb-panels__item__title",value:a}),!m.RichText.isEmpty(n)&&(0,l.createElement)("div",{className:"smb-panels__item__content"},(0,l.createElement)(m.RichText.Content,{value:n})),!m.RichText.isEmpty(s)&&(0,l.createElement)("div",{className:"smb-panels__item__action"},(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(m.RichText.Content,{value:s})))));return(0,l.createElement)("div",{className:"c-row__col"},(0,l.createElement)((()=>(i?()=>(0,l.createElement)("a",{className:"smb-panels__item",href:i,target:"_self"===o?void 0:o,rel:"_self"===o?void 0:"noopener noreferrer"},(0,l.createElement)(_,null)):()=>(0,l.createElement)("div",{className:"smb-panels__item"},(0,l.createElement)(_,null))).call(this)),null))}},{attributes:{...N,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},supports:{...x},save({attributes:e}){const{titleTagName:t,title:a,summary:n,linkLabel:s,linkURL:i,linkTarget:o,imageID:r,imageURL:c}=e;return(0,l.createElement)("div",{className:"c-row__col"},(_=(0,l.createElement)(l.Fragment,null,!!r&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)("img",{src:c,alt:"",className:`wp-image-${r}`})),(0,l.createElement)("div",{className:"smb-panels__item__body"},!m.RichText.isEmpty(a)&&(0,l.createElement)(m.RichText.Content,{tagName:t,className:"smb-panels__item__title",value:a}),!m.RichText.isEmpty(n)&&(0,l.createElement)("div",{className:"smb-panels__item__content"},(0,l.createElement)(m.RichText.Content,{value:n})),!m.RichText.isEmpty(s)&&(0,l.createElement)("div",{className:"smb-panels__item__action"},(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(m.RichText.Content,{value:s}))))),i?(0,l.createElement)("a",{className:"smb-panels__item",href:i,target:o},_):(0,l.createElement)("div",{className:"smb-panels__item",href:i,target:o},_)));var _}}],S={to:[{type:"block",blocks:["snow-monkey-blocks/panels-item-horizontal"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/panels-item-horizontal",t)},{type:"block",blocks:["snow-monkey-blocks/panels-item-free"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/panels-item-free",{},[(0,e.createBlock)("core/paragraph",{content:t.summary})])},{type:"block",blocks:["snow-monkey-blocks/panels-item-block-link"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/panels-item-block-link",{linkURL:t.linkURL,linkTarget:t.linkTarget},[(0,e.createBlock)("core/paragraph",{content:t.summary})])}]};(0,e.registerBlockType)(t.u2,{icon:{foreground:"#cd162c",src:n},edit:function({attributes:e,setAttributes:a,isSelected:n,className:s,clientId:p}){const{titleTagName:b,title:h,summary:k,backgroundColor:y,backgroundGradientColor:E,textColor:N,displayLink:x,linkLabel:C,linkURL:S,linkTarget:L,displayImage:I,imageID:U,imageURL:z,imageAlt:D,imageWidth:B,imageHeight:P,imageSizeSlug:V}=e,[H,M]=(0,_.useState)(!1),A=!!S,Y="_blank"===L,[G,W]=(0,_.useState)(null),{imageSizes:Z,image:O}=(0,u.useSelect)((e=>{const{getSettings:t}=e("core/block-editor");return{image:U&&n?e("core").getMedia(U,{context:"view"}):null,imageSizes:t()?.imageSizes}}),[n,U,p]),F=Z.filter((({slug:e})=>O?.media_details?.sizes?.[e]?.source_url)).map((({name:e,slug:t})=>({value:t,label:e}))),j=["div","h2","h3","none"],$=i()("c-row__col",s),J=i()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!C&&!n}),q={"--smb-panel--background-color":y,"--smb-panel--background-image":E,"--smb-panel--color":N},K=(0,_.useRef)(),Q=(0,_.useRef)(),X=(0,m.useBlockProps)({className:$,ref:(0,c.useMergeRefs)([W,K])});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m.InspectorControls,null,(0,l.createElement)(m.__experimentalPanelColorGradientSettings,{title:(0,g.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{label:(0,g.__)("Background color","snow-monkey-blocks"),colorValue:y,onColorChange:e=>a({backgroundColor:e}),gradientValue:E,onGradientChange:e=>a({backgroundGradientColor:e})},{label:(0,g.__)("Text color","snow-monkey-blocks"),colorValue:N,onColorChange:e=>a({textColor:e})}],__experimentalIsRenderedInSidebar:!0},(0,l.createElement)(m.ContrastChecker,{backgroundColor:y||E,textColor:N})),(0,l.createElement)(r.__experimentalToolsPanel,{label:(0,g.__)("Block settings","snow-monkey-blocks")},(0,l.createElement)(r.__experimentalToolsPanelItem,{hasValue:()=>b!==t.Y4.titleTagName.default,isShownByDefault:!0,label:(0,g.__)("Title tag","snow-monkey-blocks"),onDeselect:()=>a({titleTagName:t.Y4.titleTagName.default})},(0,l.createElement)(r.BaseControl,{label:(0,g.__)("Title tag","snow-monkey-blocks"),id:"snow-monkey-blocks/panels-item-horizontal/title-tag-name"},(0,l.createElement)("div",{className:"smb-list-icon-selector"},(0,o.times)(j.length,(e=>(0,l.createElement)(r.Button,{variant:b===j[e]?"primary":"secondary",onClick:()=>a({titleTagName:j[e]}),key:e},j[e]))))))),(0,l.createElement)(r.__experimentalToolsPanel,{label:(0,g.__)("Image settings","snow-monkey-blocks")},(0,l.createElement)(r.__experimentalToolsPanelItem,{hasValue:()=>I!==t.Y4.displayImage.default,isShownByDefault:!0,label:(0,g.__)("Display image","snow-monkey-blocks"),onDeselect:()=>a({displayImage:t.Y4.displayImage.default})},(0,l.createElement)(r.ToggleControl,{label:(0,g.__)("Display image","snow-monkey-blocks"),checked:I,onChange:e=>a({displayImage:e})})),0<F.length&&(0,l.createElement)(v,{defaultValue:t.Y4.imageSizeSlug.default,value:V,options:F,onChange:e=>{const t=O?.media_details?.sizes?.[e]?.source_url,l=O?.media_details?.sizes?.[e]?.width,n=O?.media_details?.sizes?.[e]?.height;a({imageURL:t,imageWidth:l,imageHeight:n,imageSizeSlug:e})}})),(0,l.createElement)(r.__experimentalToolsPanel,{label:(0,g.__)("Link settings","snow-monkey-blocks")},(0,l.createElement)(r.__experimentalToolsPanelItem,{hasValue:()=>x!==t.Y4.displayLink.default,isShownByDefault:!0,label:(0,g.__)("Display link","snow-monkey-blocks"),onDeselect:()=>a({displayLink:t.Y4.displayLink.default})},(0,l.createElement)(r.ToggleControl,{label:(0,g.__)("Display link","snow-monkey-blocks"),checked:x,onChange:e=>a({displayLink:e})})))),(0,l.createElement)("div",{...X},(0,l.createElement)("div",{className:"smb-panels__item",style:q},I&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)(f,{src:z,id:U,alt:D,width:B,height:P,onSelect:e=>{const t=e?.sizes?.[V]?V:R,l=e?.sizes?.[t]?.url,n=e?.sizes?.[t]?.width,s=e?.sizes?.[t]?.height;a({imageURL:l||e.url,imageID:e.id,imageAlt:e.alt,imageWidth:n||e.width,imageHeight:s||e.height,imageSizeSlug:t})},onSelectURL:e=>{e!==z&&a({imageURL:e,imageID:0,mediaSizeSlug:R})},onRemove:()=>a({imageURL:t.Y4.imageURL.default,imageAlt:t.Y4.imageAlt.default,imageWidth:t.Y4.imageWidth.default,imageHeight:t.Y4.imageHeight.default,imageID:t.Y4.imageID.default}),allowedTypes:T})),(0,l.createElement)("div",{className:"smb-panels__item__body"},(!m.RichText.isEmpty(h)||n)&&"none"!==b&&(0,l.createElement)(m.RichText,{tagName:b,className:"smb-panels__item__title",placeholder:(0,g.__)("Write title…","snow-monkey-blocks"),value:h,onChange:e=>a({title:e})}),(!m.RichText.isEmpty(k)||n)&&(0,l.createElement)(m.RichText,{className:"smb-panels__item__content",placeholder:(0,g.__)("Write content…","snow-monkey-blocks"),value:k,onChange:e=>a({summary:e})}),(A||x)&&(0,l.createElement)("div",{className:J},x&&(0,l.createElement)(m.RichText,{className:"smb-panels__item__link",value:C,placeholder:(0,g.__)("Link","snow-monkey-blocks"),onChange:e=>a({linkLabel:w(e)}),ref:Q}))))),(0,l.createElement)(m.BlockControls,null,(0,l.createElement)(r.ToolbarButton,{name:"link",icon:d,title:(0,g.__)("Link","snow-monkey-blocks"),onClick:e=>{e.preventDefault(),M(!0)},isActive:A})),n&&H&&(0,l.createElement)(r.Popover,{placement:"bottom",anchor:G,onClose:()=>{M(!1),Q.current?.focus()}},(0,l.createElement)(m.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:S,opensInNewTab:Y},onChange:({url:e,opensInNewTab:t})=>a({linkURL:e,linkTarget:t?"_blank":"_self"}),onRemove:()=>{a({linkURL:void 0,linkTarget:void 0}),M(!1)},forceIsEditingLink:!A})))},save:function({attributes:e,className:t}){const{titleTagName:a,title:n,summary:s,backgroundColor:o,backgroundGradientColor:r,textColor:c,displayLink:_,linkLabel:u,linkURL:g,linkTarget:p,displayImage:d,imageID:b,imageURL:h,imageAlt:k,imageWidth:y,imageHeight:f}=e,E=i()("c-row__col",t),v=i()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!u}),w={"--smb-panel--background-color":o,"--smb-panel--background-image":r,"--smb-panel--color":c};return(0,l.createElement)("div",{...m.useBlockProps.save({className:E})},(0,l.createElement)("div",{className:"smb-panels__item",style:w},d&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)("img",{src:h,alt:k,width:!!y&&y,height:!!f&&f,className:`wp-image-${b}`})),(0,l.createElement)("div",{className:"smb-panels__item__body"},!m.RichText.isEmpty(n)&&"none"!==a&&(0,l.createElement)(m.RichText.Content,{tagName:a,className:"smb-panels__item__title",value:n}),!m.RichText.isEmpty(s)&&(0,l.createElement)("div",{className:"smb-panels__item__content"},(0,l.createElement)(m.RichText.Content,{value:s})),(!!g||_)&&(0,l.createElement)("div",{className:v},g?(0,l.createElement)("a",{href:g,target:"_self"===p?void 0:p,rel:"_self"===p?void 0:"noopener noreferrer"},_&&(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(m.RichText.Content,{value:u}))):(0,l.createElement)(l.Fragment,null,_&&(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(m.RichText.Content,{value:u})))))))},deprecated:C,transforms:S})})()})();