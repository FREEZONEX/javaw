(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{4134:function(e,t,a){Promise.resolve().then(a.bind(a,3019))},2196:function(e,t,a){"use strict";a.d(t,{R1:function(){return c},N6:function(){return j},_R:function(){return w},X:function(){return v},Kk:function(){return y},tR:function(){return U},UT:function(){return m},Gs:function(){return C},Gx:function(){return f},zf:function(){return A},x0:function(){return d},z2:function(){return D},hU:function(){return B},nW:function(){return E},v0:function(){return g},aG:function(){return b},hI:function(){return x},eB:function(){return Q},NE:function(){return I},Ju:function(){return k},Wk:function(){return L},eN:function(){return S},DP:function(){return O},_b:function(){return G},$_:function(){return u},tu:function(){return V},lK:function(){return X},tV:function(){return r},_U:function(){return o},Gb:function(){return N},VR:function(){return p},Mf:function(){return R},qL:function(){return h}});var s=a(5953),l=a(1712);a(2040);let n=s.Z.create({baseURL:"/",withCredentials:!0,timeout:1e5});function i(){l.Z.remove("isv_token")}async function r(e){return n.post("/wms/warehouse/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function o(e,t){return n.post("/wms/warehouse/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function c(e){return n.post("/wms/warehouse/add",e).then(e=>console.log(e))}async function d(e){return n.post("/wms/warehouse/delete",{id:e}).then(e=>console.log(e))}async function h(e){return n.post("/wms/warehouse/update",e).then(e=>console.log(e))}async function u(e,t){return n.post("/wms/storagelocation/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function m(e){return n.post("/wms/storagelocation/add",e).then(e=>(console.log(e),e.data.data))}async function A(e){return n.post("/wms/storagelocation/delete",e).then(e=>(console.log(e),e.data.data))}async function g(e,t){return n.post("/wms/material/get",t,{params:e}).then(e=>(console.log(e),e.data.data))}async function x(e){return n.post("/wms/material/get",e).then(e=>(console.log(e),e.data.data))}async function w(e){return n.post("/wms/material/add",e).then(e=>(console.log(e),e.data.data))}async function p(e){return n.post("/wms/material/update",e).then(e=>(console.log(e),e.data.data))}async function f(e){return n.post("/wms/material/delete",e).then(e=>(console.log(e),e.data.data))}async function b(){return n.post("/wms/rfidmaterial/get").then(e=>(console.log(e),e.data.data))}async function v(e){return n.post("/wms/rfidmaterial/add",e).then(e=>(console.log(e),e.data.data))}async function j(e){return n.post("/wms/inbound/add",e).then(e=>(console.log(e),e.data.data))}async function N(e){return n.post("/wms/inbound/update",e).then(e=>(console.log(e),e.data.data))}async function D(e){return n.post("/wms/inbound/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function E(e,t){return n.post("/wms/inbound/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function C(e){return n.post("/wms/inbound/delete",e).then(e=>(console.log(e),e.data.data))}async function B(e){return n.post("/wms/inbound/detail",e).then(e=>(console.log(e),e.data.data))}async function y(e){return n.post("/wms/outbound/add",e).then(e=>(console.log(e),e.data.data))}async function Q(e){return n.post("/wms/outbound/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function k(e){return n.post("/wms/outbound/get",e).then(e=>(console.log(e),e.data.data))}async function R(e){return n.post("/wms/outbound/update",e).then(e=>(console.log(e),e.data.data))}async function I(e){return n.post("/wms/outbound/detail",e).then(e=>(console.log(e),e.data.data))}async function U(e){return n.post("/wms/stocktaking/add",e).then(e=>(console.log(e),e.data.data))}async function S(e){return n.post("/wms/stocktaking/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function G(e,t){return n.post("/wms/stocktaking/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function O(e){return n.post("/wms/stocktaking/detail",e).then(e=>(console.log(e),e.data.data))}async function V(e){return n.post("/wms/warehouse/namemap",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function L(e){return n.post("/wms/storagelocation/namemap",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function X(e){return n.post("/wms/warehousestoragelocation/idmap",{},{params:e}).then(e=>(console.log(e),e.data.data))}n.interceptors.request.use(e=>(null!=l.Z.get("isv_token")&&(e.headers.userToken=l.Z.get("isv_token")),e),e=>Promise.reject(e)),n.interceptors.response.use(function(e){return 401===e.data.code?(i(),Promise.reject()):e},function(e){return(console.log(e),401===e.response.status)?(i(),Promise.reject()):Promise.reject(e)})},3019:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var s=a(9268);a(6006);var l=a(9698),n=a(7562);a(553);var i=a(6008),r=a(6394),o=a.n(r),c={src:"/apps/wenhao-javaw/_next/static/media/Port--input.5d8da86c.svg",height:35,width:35,blurWidth:0,blurHeight:0},d={src:"/apps/wenhao-javaw/_next/static/media/Port--output.0dbc15d7.svg",height:35,width:35,blurWidth:0,blurHeight:0},h={src:"/apps/wenhao-javaw/_next/static/media/Time.d4b65eee.svg",height:35,width:35,blurWidth:0,blurHeight:0},u={src:"/apps/wenhao-javaw/_next/static/media/Money.fafb0b26.svg",height:35,width:35,blurWidth:0,blurHeight:0},m={src:"/apps/wenhao-javaw/_next/static/media/20240322-141126.fafb0b26.svg",height:35,width:35,blurWidth:0,blurHeight:0},A={src:"/apps/wenhao-javaw/_next/static/media/20240322-141213.0bd0c9bd.png",height:88,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAqklEQVR4nAVAzw6BcBz/fP2E2Pxp1dg6cGA5eAwv4GIOHsDJ3ebBzAuwOZuZixit2lRK0Z+f0WK+tERKFP4Ls809wZE3UFG7iOsSQ/BwaDWdcTDCJWbYGxas2wlCIcNA0/FSddB6Ms4LxTL53xQHM8TODtAQgB5FiAKX07Cv85GiQGEcZ/OKreGgxYBIlFFvdkCaKNgeqvK72c5UniCPPXxKEmppwHz3af8BTFNEXRmfZvkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},g={src:"/apps/wenhao-javaw/_next/static/media/20240322-141217.ead0ed37.png",height:88,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/ASZAZeraABYVmGU//S4lGACxucMASDQTAPj06wMCBxHsAR1kov9+QRcAT0g9ANDQ0QCevN0AaD8GAPPu4gD/Aw0AAVWs9v479cwBAvfpAIPB8QDyJCgAkyftACUR9ADo5+L/AVCe6/+wvrgAAOLqADQvJwDM6vQAjksiADkh9wDZzrkAAT+Ayuviu5sUERoi/f4OJADo7OkAMiorAEAT4wMaB9brGJtF/t5UORQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},x={src:"/apps/wenhao-javaw/_next/static/media/20240322-141220.76c62a4f.png",height:91,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAr0lEQVR4nAWAvcpBYQCAn7fXl8+/CIkkhwwMlISS0e4GWMxuwi1wBS5Ayqj8ZVFnQDmkUNgIG8WRsErjxcLHFTd4Pw9/iJfRgrYZEANpNoVv4k9K3eCJEX7/8wwq1DIVkm4zW7XPYbhCuOCbqrXF3Z9F3U1o+gIklCRTtYu1N9OFDfRiucGpXGehrekUciznIxytPtFIBCHhkVYKdme8xG19pprPcDxrXMcqe3F//gAxGTdWnqnPGQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},w={src:"/apps/wenhao-javaw/_next/static/media/20240322-141223.df149dae.png",height:95,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AUl5h+cQAfQR0vIQ/R4OAgEJ9OUA2Qcr/1crDQMB++7vAWCGk//z8NwAHBMfAPH28QD3+OoAJBITAPgEBwATEgoAAau2qf7D09QBOSsvAAIBBADK088ASDxDAPb6/QDT29D/AdDb4f+5w7gANC07ABgWEwC2vrUAPzhDAAoJBgDByLoAAdnj5/LDzL8NGRUeABALDQC9y8IAKR0hAAEBAgDM29bzKqVCYixWhiQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},p={src:"/apps/wenhao-javaw/_next/static/media/20240322-141226.229797bc.png",height:91,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAp0lEQVR42gVAuQqCYAD+tOOXwvQXDC2MbrQpsK295+qtimhyaLGllmoKGux20DK8g1mtF44giBKJ3DT6hdjvLPTNGXTDLHAV3i3qQ0N93S8420u8Pzla4ykaXBWEBUi5pLJh7Off7AqGNsEKGpzDCYRScDUJDNK8EPD2/Pi0IHoyepICrS2DSjI4qiBLU4bdbB+efxuB73aQ8FVUBhMEpI44jhElmfcHoLw8TfU37UMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},f={src:"/apps/wenhao-javaw/_next/static/media/20240322-145020.e331d25b.png",height:84,width:84,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AeLf3AD9AAYqAf30l/Tx7Dn1+P0BKiknxgwRFWjx8fHXAfX09Snk4NfF//36Ebq7ugD5+wEAHRcSACEoLu8uNj48Ae7m2sHr6uc+19jc+sWfnQalucYA5gAA+qaQhAYfMz/CAdXLvPvz8/EEwrzDABgB+wDc5+sAGTlFABPt3QALIS77Ac/HvPoGBQEFvr/FAN+7rgAxTFoACCAqANmvnwAfMz/8AeDZ0sHt7OU+vb/D+v3g2QbvBxMAt8bP+jgWBQZBWWfCAfv49yqQkpPEpq21ESIhHAD1+/4A9/LvAEE8PO9ucHI7Ac7LywAFChApyMnGmOns7DoJCAj/GhkaxzUzM2ne39/WmYSEnTIx8ScAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},b={src:"/apps/wenhao-javaw/_next/static/media/20240322-145025.43235457.png",height:84,width:84,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AShbSQAIAwMqAO33lyglFjkXCwkBy+XqxsagyWgAXzLXAUBfTCnW/frFXhMXESwbGwD5/vgAAf/8AOYB+e+D//g8AUJsV8G+3+c+rDQi+kFDSQbS2uAAxsnC+gUVEAaX4evCASlhTPsK4+wEYyUbADYyMgAAAgIAlpuXAEBgcwCv4dj7ATBTR/r96egFeDguADIwNgD+//0Al52XAF52hADX7+r8ASpRScE3DAI+EvXx+lVBRgbc4+EAn77G+k5KPAYuKy3CAZuloirVx7/E8tTQETgsJQC+3egA+/z7AAQQBu+p5ME7AStRTgDi4dQphjMsmCcaETqhx9v//AQExyoQCmm+5bjWWQ104WQXyUEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},v={src:"/apps/wenhao-javaw/_next/static/media/20240322-145029.1ed1d7af.png",height:84,width:84,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Aa7B2QBINSYqsbrCl6W0kDkOBC4BMVJHxtoj+WgI/gLXAYuuryk8JBzF0b/BEQfx8gDt3NoAvDkxAOE6NO8S8es8AQDTwcFm6u8+PLWm+gsQHQbd2NEA8v0Q+jxiawa41OfCAaC7w/so2/EE09WjAPTx6AAPDQ8A9vQKADBUbADQ4/z7AdBmoPrY5+8F9CTIACwYGQD18fMA4wEEACdUdAD+8v78AeFYo8EWDx8+mdm4+tQBqwYF8fsA8R1G+kFSbAY+KQnCAQAAACrsiLbE6vbhESqCaQAAGAAAlCJdAEpXaO/eRSQ7AduBmwAkPzAp2szrmMOtpDrPzqb/VEJ5x0A3Omn0GxnWa716vsVoU+EAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},j=a(1466),N=a(9116),D=a(1846),E=a(7221),C=a(6112);a(2196);var B=function(){let e=(0,i.useRouter)(),t=[{group:"SUPCON",value:56}],a={peek:"100",toolbar:{enabled:!1},meter:{status:{ranges:[{range:[0,50],status:"success"},{range:[50,60],status:"warning"},{range:[60,100],status:"danger"}]},height:"25px"}},r=[{group:"SIEMENS",value:78}],B={peek:"100",toolbar:{enabled:!1},meter:{status:{ranges:[{range:[0,50],status:"success"},{range:[50,60],status:"warning"},{range:[60,100],status:"danger"}]},height:"25px"}},y=[{group:"IMI",value:30}],Q={peek:"100",toolbar:{enabled:!1},meter:{status:{ranges:[{range:[0,50],status:"success"},{range:[50,60],status:"warning"},{range:[60,100],status:"danger"}]},height:"25px"}};return(0,s.jsxs)("div",{children:[(0,s.jsxs)(l.aGc,{children:[(0,s.jsx)(l.gN6,{children:(0,s.jsx)("a",{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/home"))},children:"Home"})}),(0,s.jsx)(l.gN6,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/analysis"))},children:"Analysis"})]}),(0,s.jsx)("div",{className:"bx--col-lg-16 flex justify-between items-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(l.X6q,{className:"mt-2 text-[28px] font-normal",children:"Dashboard"}),(0,s.jsx)(l.X6q,{className:"mt-1 text-sm",children:"An instant snapshot of inventory, order status, and efficiency, streamlining warehouse management."})]})}),(0,s.jsxs)("div",{id:"mainContent",className:"flex-grow bg-gray-100 p-8",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",children:[(0,s.jsxs)("div",{className:"bg-white p-6 shadow-md max-w-lg  relative",children:[(0,s.jsx)(l.X6q,{className:"mt-2 text-xl font-normal",children:"Inbound"}),(0,s.jsx)("div",{className:"absolute bottom-5 left-0 mb-4 ml-6",children:(0,s.jsxs)("div",{className:"flex items-baseline  text-3xl",children:[(0,s.jsx)(l.X6q,{className:"text-5xl font-semibold fontIBM",children:"27"}),"/",(0,s.jsx)(l.X6q,{className:"text-3xl ml-2 fontIBM",children:"80"})]})}),(0,s.jsx)("div",{className:"absolute bottom-5 right-0 mb-4 mr-6",children:(0,s.jsx)(o(),{src:c,alt:"arrow",width:32,height:32})})]}),(0,s.jsxs)("div",{className:"bg-white p-6 shadow-md max-w-lg  relative",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-xl font-normal ",children:"Outbound Number"}),(0,s.jsx)("div",{className:"absolute bottom-5 left-0 mb-4 ml-6",children:(0,s.jsxs)("div",{className:"flex items-baseline text-3xl",children:[(0,s.jsx)(l.X6q,{className:"text-5xl font-semibold ",children:"27"}),"/",(0,s.jsx)(l.X6q,{className:"text-3xl ml-2 ",children:"80"})]})}),(0,s.jsx)("div",{className:"absolute bottom-5 right-0 mb-4 mr-6",children:(0,s.jsx)(o(),{src:d,alt:"arrow",width:32,height:32})})]}),(0,s.jsxs)("div",{className:"bg-white p-6 shadow-md max-w-lg  relative",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-xl font-normal ",children:"Longest awaiting time"}),(0,s.jsx)("div",{className:"absolute bottom-5 left-0 mb-4 ml-6",children:(0,s.jsx)("div",{className:"flex items-baseline",children:(0,s.jsx)("span",{className:"text-5xl font-['IBM Plex Sans'] font-semibold",children:"2m38s"})})}),(0,s.jsx)("div",{className:"absolute bottom-5 right-0 mb-4 mr-6",children:(0,s.jsx)(o(),{src:h,alt:"arrow",width:32,height:32})})]}),(0,s.jsxs)("div",{className:"shadow-md bg-white p-6 shadow lg:col-span-2 lg:row-span-2",children:[(0,s.jsx)(l.X6q,{className:"mt-2 text-xl font-normal absolute",children:"Turnover Rate Top5"}),(0,s.jsx)(n.bS,{className:"absolute top-0",data:[{group:"inbound 1245",key:"turnover rate",value:96.8},{group:"inbound 4095",key:"turnover rate",value:87.8},{group:"inbound 133",key:"turnover rate",value:88.5},{group:"inbound 1984",key:"turnover rate",value:80},{group:"inbound 985",key:"turnover rate",value:91.2}],options:{axes:{left:{mapsTo:"value",scaleType:"linear",title:"Rate%"},bottom:{scaleType:"labels",mapsTo:"group"}},height:"400px"}})]}),(0,s.jsxs)("div",{className:"bg-white p-6 shadow-md max-w-lg  relative",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-xl font-normal ",children:"Comm Efficiency Rate"}),(0,s.jsx)("div",{className:"absolute bottom-3  mb-2 ml-3 pr-6",children:(0,s.jsx)("div",{className:"flex  items-center justify-center w-full h-full",children:(0,s.jsx)(n.oN,{data:[{group:"value",value:42},{group:"delta",value:-13.37}],options:{toolbar:{enabled:!1},resizable:!0,height:"105px",width:"100%"},className:"w-full h-full",children:" "})})})]}),(0,s.jsxs)("div",{className:"bg-white p-6 shadow-md max-w-lg relative",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-xl font-normal ",children:"Space Occupancy"}),(0,s.jsx)("div",{className:"absolute bottom-3 mb-2 ml-3 pr-6",children:(0,s.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:(0,s.jsx)(n.oN,{data:[{group:"value",value:77},{group:"delta",value:340}],options:{color:{scale:{value:"#00f",delta:"#f00"}},gauge:{type:"semi",status:"danger"},toolbar:{enabled:!1},resizable:!0,height:"105px",width:"100%"},className:"w-full h-full",children:" "})})})]}),(0,s.jsxs)("div",{className:"bg-white p-6 shadow-md max-w-lg  relative",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-xl font-normal ",children:"Value"}),(0,s.jsx)("div",{className:"absolute bottom-5 left-0 mb-4 ml-6",children:(0,s.jsx)("div",{className:"flex items-baseline",children:(0,s.jsx)(l.X6q,{className:"text-5xl font-semibold fontIBM",children:"6000$"})})}),(0,s.jsx)("div",{className:"absolute bottom-5 right-0 mb-4 mr-6",children:(0,s.jsx)(o(),{src:u,alt:"arrow",width:32,height:32})})]})]})}),(0,s.jsx)("div",{className:"flex py-8 w-full h-1/2-screen",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full",children:[(0,s.jsxs)("div",{className:"bg-white p-6 shadow lg:col-span-2 h-full",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-[20px] font-normal ",children:"Recently Supplier"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2 w-full h-1/16",children:[(0,s.jsx)("div",{className:"bg-white  p-1  mt-5 relative",children:(0,s.jsx)(o(),{src:m,alt:"arrow",width:50,height:32,className:"w-full h-full"})}),(0,s.jsx)("div",{className:" col-span-7 bg-white p-3  mt-2  relative",children:(0,s.jsx)(n.D_,{data:t,options:a})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2  w-full h-1/16",children:[(0,s.jsx)("div",{className:"bg-white p-1  mt-5  relative",children:(0,s.jsx)(o(),{src:A,alt:"arrow",width:50,height:32,className:"w-full h-full"})}),(0,s.jsx)("div",{className:"col-span-7 bg-white p-3 mt-2  relative",children:(0,s.jsx)(n.D_,{data:r,options:B})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2  w-full h-1/16",children:[(0,s.jsx)("div",{className:"bg-white p-1 mt-5 relative",children:(0,s.jsx)(o(),{src:g,alt:"arrow",width:50,height:32,className:"w-full h-full"})}),(0,s.jsx)("div",{className:"col-span-7 bg-white p-3 mt-2   relative",children:(0,s.jsx)(n.D_,{data:y,options:Q})})]})]}),(0,s.jsxs)("div",{className:"bg-white p-6 shadow lg:col-span-2 h-full",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-[20px] font-normal ",children:"Recently Supplier"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2 w-full h-1/16",children:[(0,s.jsx)("div",{className:"bg-white  p-1  mt-5 relative",children:(0,s.jsx)(o(),{src:x,alt:"arrow",width:50,height:32,className:"w-full h-full"})}),(0,s.jsx)("div",{className:" col-span-7 bg-white p-3  mt-2  relative",children:(0,s.jsx)(n.D_,{data:t,options:a})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2  w-full h-1/16",children:[(0,s.jsx)("div",{className:"bg-white p-1 mt-5 relative",children:(0,s.jsx)(o(),{src:w,alt:"arrow",width:50,height:32,className:"w-full h-full"})}),(0,s.jsx)("div",{className:"col-span-7 bg-white p-3 mt-2   relative",children:(0,s.jsx)(n.D_,{data:r,options:B})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2  w-full h-1/16",children:[(0,s.jsx)("div",{className:"bg-white p-1 mt-5 relative",children:(0,s.jsx)(o(),{src:p,alt:"arrow",width:50,height:32,className:"w-full h-full"})}),(0,s.jsx)("div",{className:"col-span-7 bg-white p-3 mt-2   relative",children:(0,s.jsx)(n.D_,{data:y,options:Q})})]})]})]})}),(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsxs)("div",{className:"w-1/3 bg-white p-6 shadow h-128",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-[20px] font-normal ",children:"Current Worker"}),(0,s.jsxs)("div",{className:"shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-1 w-full",children:[(0,s.jsx)("div",{className:"bg-white  items-center justify-center  col-span-2  p-3 mt-4 relative ",children:(0,s.jsx)(o(),{src:f,alt:"arrow",width:500,height:500,className:"ml-5 mx-auto w-3/4 h-full"})}),(0,s.jsxs)("div",{className:"bg-white  col-span-4  p-1 ml-0 mt-5 relative",children:[(0,s.jsx)("div",{className:"mt-5 text-[16px] font-bold right-0",children:"Jesse Thomas"}),(0,s.jsx)("div",{className:"mt-5 text-[16px] right-0",children:"ID: #123456"})]}),(0,s.jsxs)("div",{className:"   bg-white p-2  mt-4   relative",children:[(0,s.jsx)("div",{className:"bottom-2 left-0 absolute ",children:(0,s.jsx)(o(),{src:c,alt:"arrow",width:500,height:500,className:"w-3/4 h-3/4"})}),(0,s.jsx)("div",{className:"bottom-4 left-7 absolute ",children:"3"})]}),(0,s.jsxs)("div",{className:"   bg-white p-2  mt-4   relative",children:[(0,s.jsx)("div",{className:"bottom-2 left-0 absolute ",children:(0,s.jsx)(o(),{src:d,alt:"arrow",width:500,height:500,className:"w-3/4 h-3/4"})}),(0,s.jsx)("div",{className:"bottom-4 left-7 absolute ",children:"2"})]})]}),(0,s.jsxs)("div",{className:"shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-1 w-full",children:[(0,s.jsx)("div",{className:"bg-white  col-span-2  p-3 justify-center mt-4 relative",children:(0,s.jsx)(o(),{src:b,alt:"arrow",width:500,height:500,className:" ml-5 w-3/4 h-full"})}),(0,s.jsxs)("div",{className:"bg-white  col-span-4  p-1 ml-0 mt-5 relative",children:[(0,s.jsx)("div",{className:"mt-5 text-[16px] font-bold right-0",children:"Thisal Mathiyazhagan"}),(0,s.jsx)("div",{className:"mt-5 text-[16px] right-0",children:"ID: #123456"})]}),(0,s.jsxs)("div",{className:"   bg-white p-2  mt-4   relative",children:[(0,s.jsx)("div",{className:"bottom-2 left-0 absolute ",children:(0,s.jsx)(o(),{src:c,alt:"arrow",width:500,height:500,className:"w-3/4 h-3/4"})}),(0,s.jsx)("div",{className:"bottom-4 left-7 absolute ",children:"3"})]}),(0,s.jsxs)("div",{className:"   bg-white p-2  mt-4   relative",children:[(0,s.jsx)("div",{className:"bottom-2 left-0 absolute ",children:(0,s.jsx)(o(),{src:d,alt:"arrow",width:500,height:500,className:"w-3/4 h-3/4"})}),(0,s.jsx)("div",{className:"bottom-4 left-7 absolute ",children:"2"})]})]}),(0,s.jsxs)("div",{className:"shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-1 w-full",children:[(0,s.jsx)("div",{className:"bg-white  col-span-2  p-3 justify-center mt-4 relative",children:(0,s.jsx)(o(),{src:v,alt:"arrow",width:500,height:500,className:"ml-5 w-3/4 h-full"})}),(0,s.jsxs)("div",{className:"bg-white  col-span-4  p-1 ml-0 mt-5 relative",children:[(0,s.jsx)("div",{className:"mt-5 text-[16px] font-bold right-0",children:"Lura Silverman"}),(0,s.jsx)("div",{className:"mt-5 text-[16px] right-0",children:"ID: #123456"})]}),(0,s.jsxs)("div",{className:"   bg-white p-2  mt-4   relative",children:[(0,s.jsx)("div",{className:"bottom-2 left-0 absolute ",children:(0,s.jsx)(o(),{src:c,alt:"arrow",width:500,height:500,className:"w-3/4 h-3/4"})}),(0,s.jsx)("div",{className:"bottom-4 left-7 absolute ",children:"3"})]}),(0,s.jsxs)("div",{className:"   bg-white p-2  mt-4   relative",children:[(0,s.jsx)("div",{className:"bottom-2 left-0 absolute ",children:(0,s.jsx)(o(),{src:d,alt:"arrow",width:500,height:500,className:"w-3/4 h-3/4"})}),(0,s.jsx)("div",{className:"bottom-4 left-7 absolute ",children:"2"})]})]})]}),(0,s.jsxs)("div",{className:"w-2/3 bg-white p-6 shadow h-128 ml-4",children:[(0,s.jsx)(l.X6q,{className:"mt-3 text-[20px] font-normal ",children:"Latest Order"}),(0,s.jsxs)(l.UhJ,{label:"List title",kind:"on-page",children:[(0,s.jsx)(l.C$Z,{renderIcon:j.mm,children:"List item"}),(0,s.jsx)(l.C$Z,{renderIcon:j.AC,children:"List item"}),(0,s.jsx)(l.C$Z,{renderIcon:N.aR,children:"List item"}),(0,s.jsx)(l.C$Z,{renderIcon:D.bo,children:"List item"}),(0,s.jsx)(l.C$Z,{renderIcon:E.x8,children:"List item"}),(0,s.jsx)(l.C$Z,{renderIcon:C.Cb,children:"List item"})]})]})]})]})]})}}},function(e){e.O(0,[526,253,313,307,846,485,531,698,744],function(){return e(e.s=4134)}),_N_E=e.O()}]);