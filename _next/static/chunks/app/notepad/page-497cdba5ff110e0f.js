(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[963],{5260:function(e,t,r){Promise.resolve().then(r.bind(r,8450)),Promise.resolve().then(r.bind(r,1258))},8450:function(e,t,r){"use strict";r.d(t,{Notepad:function(){return p}});var n=r(7437),d=r(2265),o=r(7440);let s=d.forwardRef((e,t)=>{let{className:r,...d}=e;return(0,n.jsx)("textarea",{className:(0,o.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...d})});s.displayName="Textarea";var a=r(1066);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,a.Z)("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]),l=(0,a.Z)("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]),c=(0,a.Z)("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);var w=r(8149),u=r(1715),f=r(5171),m=d.forwardRef((e,t)=>{let{pressed:r,defaultPressed:d=!1,onPressedChange:o,...s}=e,[a=!1,i]=(0,u.T)({prop:r,onChange:o,defaultProp:d});return(0,n.jsx)(f.WV.button,{type:"button","aria-pressed":a,"data-state":a?"on":"off","data-disabled":e.disabled?"":void 0,...s,ref:t,onClick:(0,w.M)(e.onClick,()=>{e.disabled||i(!a)})})});m.displayName="Toggle";let b=(0,r(2218).j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),h=d.forwardRef((e,t)=>{let{className:r,variant:d,size:s,...a}=e;return(0,n.jsx)(m,{ref:t,className:(0,o.cn)(b({variant:d,size:s,className:r})),...a})});function x(e){let{setBold:t,isBold:r,setItalic:d,isItalic:s,setUnderline:a,isUnderline:w}=e;return(0,n.jsxs)("div",{className:"flex h-9 w-full items-center justify-start space-x-2 border-t-windows-dark bg-windows p-1 md:h-10",children:[(0,n.jsx)(h,{onClick:t,className:(0,o.cn)("h-7 w-7 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-2 py-1 shadow shadow-windows-dark hover:bg-white/50",r&&"bg-windows-dark/50 shadow-inner shadow-windows-black"),children:(0,n.jsx)(i,{})}),(0,n.jsx)(h,{onClick:d,className:(0,o.cn)("h-7 w-7 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-2 py-1 shadow shadow-windows-dark hover:bg-white/50",s&&"bg-windows-dark/50 shadow-inner shadow-windows-black"),children:(0,n.jsx)(l,{})}),(0,n.jsx)(h,{onClick:a,className:(0,o.cn)("h-7 w-7 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-2 py-1 shadow shadow-windows-dark hover:bg-white/50",w&&"bg-windows-dark/50 shadow-inner shadow-windows-black"),children:(0,n.jsx)(c,{})})]})}function p(){let[e,t]=(0,d.useState)(""),[r,a]=(0,d.useState)(!1),[i,l]=(0,d.useState)(!1),[c,w]=(0,d.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{setBold:()=>a(!r),setItalic:()=>l(!i),setUnderline:()=>w(!c),isBold:r,isItalic:i,isUnderline:c}),(0,n.jsxs)("div",{className:"min-h-full overflow-hidden",children:[(0,n.jsx)("label",{htmlFor:"notepad",className:"sr-only",children:"Notepad for writing notes. Placeholder is \"Eggs, milk, sugar...\". It's just a visual thing, the notes aren't actually functional. Maybe I can add that in the future but probably not, nobody is coming to my portfolio site to take notes. Thanks for (screen) reading."}),(0,n.jsx)(s,{id:"notepad",placeholder:"Eggs, milk, sugar...",className:(0,o.cn)("absolute h-[95%] flex-grow resize-none rounded-none border-none p-4 placeholder:font-normal placeholder:italic md:top-10 lg:h-[90%]",r?"font-bold":"font-normal",i?"italic":"not-italic",c?"underline":"no-underline"),onChange:e=>t(e.target.value),value:e})]})]})}h.displayName=m.displayName},495:function(e,t,r){"use strict";r.d(t,{d:function(){return i},z:function(){return l}});var n=r(7437),d=r(2265),o=r(1538),s=r(2218),a=r(7440);let i=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",windows:"rounded-none border-2 border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white shadow shadow-windows-dark active:border-2 active:border-b-windows-white active:border-l-windows-dark active:border-r-windows-white active:border-t-windows-dark active:bg-windows-white/30 active:text-windows-black text-windows-black active:shadow-inner active:shadow-windows-dark focus:bg-windows active:shadow-windows-dark transition-none"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=d.forwardRef((e,t)=>{let{className:r,variant:d,size:s,asChild:l=!1,...c}=e,w=l?o.g7:"button";return(0,n.jsx)(w,{className:(0,a.cn)(i({variant:d,size:s,className:r})),ref:t,...c})});l.displayName="Button"},2415:function(e,t,r){"use strict";r.d(t,{N:function(){return b},QP:function(){return i},hL:function(){return u},lS:function(){return f},nm:function(){return c},rQ:function(){return w},tP:function(){return l},uE:function(){return m},yE:function(){return h}});var n=r(7437),d=r(2265),o=r(4867),s=r(2005),a=r(7440);let i=s.v2;s.ZA,s.h_;let l=s.Tr;s.Ee;let c=d.forwardRef((e,t)=>{let{className:r,...d}=e;return(0,n.jsx)(s.fC,{ref:t,className:(0,a.cn)("flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",r),...d})});c.displayName=s.fC.displayName;let w=d.forwardRef((e,t)=>{let{className:r,...d}=e;return(0,n.jsx)(s.xz,{ref:t,className:(0,a.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",r),...d})});w.displayName=s.xz.displayName;let u=d.forwardRef((e,t)=>{let{className:r,inset:d,children:i,...l}=e;return(0,n.jsxs)(s.fF,{ref:t,className:(0,a.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",d&&"pl-8",r),...l,children:[i,(0,n.jsx)(o.XCv,{className:"ml-auto h-4 w-4"})]})});u.displayName=s.fF.displayName;let f=d.forwardRef((e,t)=>{let{className:r,...d}=e;return(0,n.jsx)(s.tu,{ref:t,className:(0,a.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...d})});f.displayName=s.tu.displayName;let m=d.forwardRef((e,t)=>{let{className:r,align:d="start",alignOffset:o=-4,sideOffset:i=8,...l}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsx)(s.VY,{ref:t,align:d,alignOffset:o,sideOffset:i,className:(0,a.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})})});m.displayName=s.VY.displayName;let b=d.forwardRef((e,t)=>{let{className:r,inset:d,...o}=e;return(0,n.jsx)(s.ck,{ref:t,className:(0,a.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",d&&"pl-8",r),...o})});b.displayName=s.ck.displayName,d.forwardRef((e,t)=>{let{className:r,children:d,checked:i,...l}=e;return(0,n.jsxs)(s.oC,{ref:t,className:(0,a.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:i,...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(o.nQG,{className:"h-4 w-4"})})}),d]})}).displayName=s.oC.displayName,d.forwardRef((e,t)=>{let{className:r,children:d,...i}=e;return(0,n.jsxs)(s.Rk,{ref:t,className:(0,a.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(o.jXb,{className:"h-4 w-4 fill-current"})})}),d]})}).displayName=s.Rk.displayName,d.forwardRef((e,t)=>{let{className:r,inset:d,...o}=e;return(0,n.jsx)(s.__,{ref:t,className:(0,a.cn)("px-2 py-1.5 text-sm font-semibold",d&&"pl-8",r),...o})}).displayName=s.__.displayName;let h=d.forwardRef((e,t)=>{let{className:r,...d}=e;return(0,n.jsx)(s.Z0,{ref:t,className:(0,a.cn)("-mx-1 my-1 h-px bg-muted",r),...d})});h.displayName=s.Z0.displayName},1258:function(e,t,r){"use strict";r.d(t,{WindowWrapper:function(){return g}});var n=r(7437),d=r(2265);let o=(0,d.createContext)(void 0);function s(e){let{children:t,icon:r,title:s}=e,[a,i]=(0,d.useState)(!1);return(0,n.jsx)(o.Provider,{value:{isMax:a,setIsMax:i,icon:r,title:s},children:t})}let a=()=>{let e=(0,d.useContext)(o);if(void 0===e)throw Error("useWindowContext must be used within a WindowProvider");return e};var i=r(7440),l=r(6420);function c(){return(0,n.jsxs)("div",{className:"absolute inset-x-0 bottom-0 flex h-6 items-center justify-between gap-x-0.5 bg-windows",children:[(0,n.jsx)("div",{className:"h-full w-1/2 border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark md:w-1/4"}),(0,n.jsx)("div",{className:"hidden h-full w-1/2 border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark md:block"}),(0,n.jsxs)("div",{className:"flex h-full w-1/2 items-center border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark text-xs md:w-1/4 md:text-sm",children:[(0,n.jsx)(l.Z,{className:"mx-2"}),"My Computer"]})]})}function w(e){let{children:t,bottomBar:r}=e,{isMax:d}=a();return(0,n.jsx)("div",{id:"window-wrapper",className:(0,i.cn)("absolute flex resize-none flex-col justify-evenly border-2 border-b-windows-dark border-l-windows border-r-windows-dark border-t-windows bg-white shadow-inner shadow-windows-dark",d?r?"inset-0 h-[calc(100vh-48px)]":"inset-0":"left-1/2 top-[45%] mx-auto size-5/6 -translate-x-1/2 -translate-y-1/2"),children:t})}var u=r(7138),f=r(4486),m=r(4697),b=r(495);function h(){let{isMax:e,setIsMax:t,icon:r,title:d}=a();return(0,n.jsxs)("div",{className:"flex h-8 w-full select-none items-center justify-between bg-gradient-to-r from-windows-blue to-[rgb(0,126,196)] px-1.5 py-0.5 text-windows-white md:h-9",children:[(0,n.jsxs)("div",{className:"flex items-center gap-x-2 text-sm",children:[r,(0,n.jsx)("p",{className:"font-bold",children:d})]}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(b.z,{variant:"ghost",className:"size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black",onClick:()=>t(!e),children:(0,n.jsx)(f.Z,{})}),(0,n.jsx)(b.z,{variant:"ghost",className:"size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black",asChild:!0,children:(0,n.jsx)(u.default,{href:"/",children:(0,n.jsx)(m.Z,{})})})]})]})}var x=r(2415);function p(e){let{menu:t}=e;return(0,n.jsx)(x.nm,{className:"h-8 rounded-none border-0 bg-windows md:h-9",children:t.map(e=>(0,n.jsxs)(x.QP,{children:[(0,n.jsx)(x.rQ,{className:"data-[state=open]:border data-[state=open]:border-dashed data-[state=open]:border-windows-dark data-[state=open]:bg-windows/70 data-[state=open]:shadow-inner focus:bg-windows/50",children:e.trigger}),(0,n.jsx)(x.uE,{className:"-mt-2 ml-1 rounded-none bg-windows",children:e.items.map(e=>(0,n.jsx)(x.N,{children:"Exit"===e.title?(0,n.jsxs)(u.default,{href:"/",className:"flex w-full items-center hover:bg-transparent",children:[e.icon,(0,n.jsx)("span",{className:"mx-2",children:e.title})]}):(0,n.jsxs)(n.Fragment,{children:[e.icon,(0,n.jsx)("span",{className:"mx-2",children:e.title})]})},e.title))})]},e.trigger))})}function g(e){let{bottomBar:t,children:r,icon:d,menu:o,title:a}=e;return(0,n.jsx)(s,{icon:d,title:a,children:(0,n.jsxs)(w,{bottomBar:!0,children:[(0,n.jsx)(h,{}),o&&(0,n.jsx)(p,{menu:o}),(0,n.jsx)("div",{className:(0,i.cn)("relative size-full"),children:r}),t&&(0,n.jsx)(c,{})]})})}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(4839),d=r(6164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,d.m6)((0,n.W)(t))}},4486:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(1066).Z)("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]])}},function(e){e.O(0,[310,231,334,971,23,744],function(){return e(e.s=5260)}),_N_E=e.O()}]);