(()=>{"use strict";var e={n:n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return e.d(o,{a:o}),o},d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};const n=window.wp.blocks,o=JSON.parse('{"u2":"snow-monkey-blocks/like-me-box","Y4":{"j":{"Z":"inc2734.monkey.wrench"}}}'),t=window.React,a=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)("rect",{width:"24",height:"24",fill:"none"}),(0,t.createElement)("path",{d:"M5.11,20.39H4.18A1.18,1.18,0,0,1,3,19.22V10.91A1.18,1.18,0,0,1,4.18,9.74h.93a1.17,1.17,0,0,1,1.17,1.17v8.31A1.17,1.17,0,0,1,5.11,20.39Zm-.93-9.56a.09.09,0,0,0-.09.08v8.31a.09.09,0,0,0,.09.08h.93a.09.09,0,0,0,.08-.08V10.91a.09.09,0,0,0-.08-.08Z"}),(0,t.createElement)("path",{d:"M17.49,20.61H8.34a1,1,0,0,1-1-1V11a1.23,1.23,0,0,1,1.15-1.3H9.85L13.3,4.06a1.36,1.36,0,0,1,1.16-.67h.9a1.3,1.3,0,0,1,1,.48,1.44,1.44,0,0,1,.29,1.21l-.9,4.66H20a.94.94,0,0,1,.76.37A1.24,1.24,0,0,1,21,11.19l-2.32,8.53A1.23,1.23,0,0,1,17.49,20.61ZM8.4,19.52h9.09a.18.18,0,0,0,.08-.09l2.32-8.53a.2.2,0,0,0,0-.07H14.43l1.16-6a.41.41,0,0,0-.07-.31.22.22,0,0,0-.16-.08h-.9a.27.27,0,0,0-.22.15l-3.77,6.2h-2A.26.26,0,0,0,8.4,11Z"})),l=window.wp.components,r=window.wp.blockEditor,c=window.wp.i18n,s=window.wp.serverSideRender;var m=e.n(s);(0,n.registerBlockType)(o.u2,{icon:{foreground:"#cd162c",src:a},edit:function({attributes:e,setAttributes:n}){const{pageName:a}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(l.__experimentalToolsPanel,{label:(0,c.__)("Block settings","snow-monkey-blocks")},(0,t.createElement)(l.__experimentalToolsPanelItem,{hasValue:()=>a!==o.Y4.j.Z,isShownByDefault:!0,label:(0,c.__)("Facebook page name","snow-monkey-blocks"),onDeselect:()=>n({pageName:o.Y4.j.Z})},(0,t.createElement)(l.TextControl,{label:(0,c.__)("Facebook page name","snow-monkey-blocks"),value:a,onChange:e=>n({pageName:e})})))),(0,t.createElement)("div",{...(0,r.useBlockProps)()},a?(0,t.createElement)(m(),{block:"snow-monkey-blocks/like-me-box",attributes:e}):(0,t.createElement)(l.Placeholder,{icon:"thumbs-up",label:(0,c.__)("Like me box","snow-monkey-blocks")},(0,c.__)('Please input "Facebook page name"',"snow-monkey-blocks"))))},save:function(){return null}})})();