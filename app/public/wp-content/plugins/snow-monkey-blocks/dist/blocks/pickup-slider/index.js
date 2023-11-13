(()=>{"use strict";const e=window.wp.blocks,l=JSON.parse('{"u2":"snow-monkey-blocks/pickup-slider","Y4":{"random":{"type":"boolean","default":false},"linkType":{"type":"string","default":"button"},"postsPerPage":{"type":"number","default":0},"anchor":{"type":"string","default":""}}}'),a=window.React,n=(0,a.createElement)("svg",{viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M5,5.78V18.22a.78.78,0,0,0,.78.78H18.22a.78.78,0,0,0,.78-.78V5.78A.78.78,0,0,0,18.22,5H5.78A.78.78,0,0,0,5,5.78m12.44,12H6.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H17.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39"}),(0,a.createElement)("path",{d:"M6.17,14.16l3.06-2.23a.22.22,0,0,1,.22,0l2.34,1.5a.21.21,0,0,0,.24,0l3-2.83a.19.19,0,0,1,.27,0l3.09,3v1.16l-3.09-3a.18.18,0,0,0-.27,0l-3,2.82a.19.19,0,0,1-.24,0L9.45,13.11a.18.18,0,0,0-.22,0L6.17,15.33Z"}),(0,a.createElement)("path",{d:"M2.22,5H0V6.17H1.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39H0V19H2.22A.78.78,0,0,0,3,18.22V5.78A.78.78,0,0,0,2.22,5Z"}),(0,a.createElement)("path",{d:"M24,17.83H22.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H24V5H21.78a.78.78,0,0,0-.78.78V18.22a.78.78,0,0,0,.78.78H24Z"})),o=window.wp.components,t=window.wp.blockEditor,s=window.wp.i18n,r=(window.lodash,(e,l=0,a=null)=>(e=Number(e),(isNaN(e)||e<l)&&(e=l),null!==a&&e>a&&(e=a),e)),i=[{attributes:{...l.Y4,myAnchor:{type:"string",default:""}},migrate:e=>(e.anchor=e.myAnchor,e),save:()=>null}];(0,e.registerBlockType)(l.u2,{icon:{foreground:"#cd162c",src:n},edit:function({attributes:e,setAttributes:n}){const{random:i,linkType:c,postsPerPage:m}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(t.InspectorControls,null,(0,a.createElement)(o.__experimentalToolsPanel,{label:(0,s.__)("Block settings","snow-monkey-blocks")},(0,a.createElement)(o.__experimentalToolsPanelItem,{hasValue:()=>i!==l.Y4.random.default,isShownByDefault:!0,label:(0,s.__)("Display in random order","snow-monkey-blocks"),onDeselect:()=>n({random:l.Y4.random.default})},(0,a.createElement)(o.ToggleControl,{label:(0,s.__)("Display in random order","snow-monkey-blocks"),checked:i,onChange:e=>n({random:e})})),(0,a.createElement)(o.__experimentalToolsPanelItem,{hasValue:()=>c!==l.Y4.linkType.default,isShownByDefault:!0,label:(0,s.__)("Link type","snow-monkey-blocks"),onDeselect:()=>n({linkType:l.Y4.linkType.default})},(0,a.createElement)(o.SelectControl,{label:(0,s.__)("Link type","snow-monkey-blocks"),value:c,onChange:e=>n({linkType:e}),options:[{value:"button",label:(0,s.__)("Button link","snow-monkey-blocks")},{value:"overall",label:(0,s.__)("Overall link","snow-monkey-blocks")}]})),(0,a.createElement)(o.__experimentalToolsPanelItem,{hasValue:()=>m!==l.Y4.postsPerPage.default,isShownByDefault:!0,label:(0,s.__)("Maximum number of displays","snow-monkey-blocks"),onDeselect:()=>n({postsPerPage:l.Y4.postsPerPage.default})},(0,a.createElement)(o.RangeControl,{label:(0,s.__)("Maximum number of displays","snow-monkey-blocks"),help:(0,s.__)('If "0", all items are displayed.',"snow-monkey-blocks"),value:m,onChange:e=>n({postsPerPage:r(e,0,10)}),min:"0",max:"10"})))),(0,a.createElement)("div",{...(0,t.useBlockProps)()},(0,a.createElement)(o.Placeholder,{icon:"format-gallery",label:(0,s.__)("Pickup slider","snow-monkey-blocks")},(0,s.__)('Posts with "pickup" tag are displayed as sliders.',"snow-monkey-blocks"))))},save:function(){return(0,a.createElement)("div",{"data-dynamic-block":"snow-monkey-blocks/pickup-slider","data-version":"2"})},deprecated:i})})();