(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{953:function(e,t,n){Promise.resolve().then(n.bind(n,438))},2196:function(e,t,n){"use strict";n.d(t,{R1:function(){return c},N6:function(){return k},_R:function(){return f},X:function(){return v},Kk:function(){return T},tR:function(){return R},UT:function(){return h},Gs:function(){return S},Gx:function(){return y},zf:function(){return p},x0:function(){return d},z2:function(){return _},hU:function(){return C},nW:function(){return N},v0:function(){return g},aG:function(){return w},hI:function(){return x},eB:function(){return M},NE:function(){return z},Ju:function(){return I},Wk:function(){return F},eN:function(){return E},DP:function(){return P},_b:function(){return q},$_:function(){return m},tu:function(){return U},lK:function(){return V},tV:function(){return l},_U:function(){return r},Gb:function(){return b},VR:function(){return j},Mf:function(){return G},qL:function(){return u}});var a=n(5953),s=n(1712);n(2040);let o=a.Z.create({baseURL:"/",withCredentials:!0,timeout:1e5});function i(){s.Z.remove("isv_token")}async function l(e){return o.post("/wms/warehouse/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function r(e,t){return o.post("/wms/warehouse/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function c(e){return o.post("/wms/warehouse/add",e).then(e=>console.log(e))}async function d(e){return o.post("/wms/warehouse/delete",{id:e}).then(e=>console.log(e))}async function u(e){return o.post("/wms/warehouse/update",e).then(e=>console.log(e))}async function m(e,t){return o.post("/wms/storagelocation/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function h(e){return o.post("/wms/storagelocation/add",e).then(e=>(console.log(e),e.data.data))}async function p(e){return o.post("/wms/storagelocation/delete",e).then(e=>(console.log(e),e.data.data))}async function g(e,t){return o.post("/wms/material/get",t,{params:e}).then(e=>(console.log(e),e.data.data))}async function x(e){return o.post("/wms/material/get",e).then(e=>(console.log(e),e.data.data))}async function f(e){return o.post("/wms/material/add",e).then(e=>(console.log(e),e.data.data))}async function j(e){return o.post("/wms/material/update",e).then(e=>(console.log(e),e.data.data))}async function y(e){return o.post("/wms/material/delete",e).then(e=>(console.log(e),e.data.data))}async function w(){return o.post("/wms/rfidmaterial/get").then(e=>(console.log(e),e.data.data))}async function v(e){return o.post("/wms/rfidmaterial/add",e).then(e=>(console.log(e),e.data.data))}async function k(e){return o.post("/wms/inbound/add",e).then(e=>(console.log(e),e.data.data))}async function b(e){return o.post("/wms/inbound/update",e).then(e=>(console.log(e),e.data.data))}async function _(e){return o.post("/wms/inbound/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function N(e,t){return o.post("/wms/inbound/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function S(e){return o.post("/wms/inbound/delete",e).then(e=>(console.log(e),e.data.data))}async function C(e){return o.post("/wms/inbound/detail",e).then(e=>(console.log(e),e.data.data))}async function T(e){return o.post("/wms/outbound/add",e).then(e=>(console.log(e),e.data.data))}async function M(e){return o.post("/wms/outbound/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function I(e){return o.post("/wms/outbound/get",e).then(e=>(console.log(e),e.data.data))}async function G(e){return o.post("/wms/outbound/update",e).then(e=>(console.log(e),e.data.data))}async function z(e){return o.post("/wms/outbound/detail",e).then(e=>(console.log(e),e.data.data))}async function R(e){return o.post("/wms/stocktaking/add",e).then(e=>(console.log(e),e.data.data))}async function E(e){return o.post("/wms/stocktaking/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function q(e,t){return o.post("/wms/stocktaking/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function P(e){return o.post("/wms/stocktaking/detail",e).then(e=>(console.log(e),e.data.data))}async function U(e){return o.post("/wms/warehouse/namemap",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function F(e){return o.post("/wms/storagelocation/namemap",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function V(e){return o.post("/wms/warehousestoragelocation/idmap",{},{params:e}).then(e=>(console.log(e),e.data.data))}o.interceptors.request.use(e=>(null!=s.Z.get("isv_token")&&(e.headers.userToken=s.Z.get("isv_token")),e),e=>Promise.reject(e)),o.interceptors.response.use(function(e){return 401===e.data.code?(i(),Promise.reject()):e},function(e){return(console.log(e),401===e.response.status)?(i(),Promise.reject()):Promise.reject(e)})},438:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(9268),s=n(6006),o=n(9698),i=n(8005),l=n(1466),r=n(7221),c=n(8482),d=n(5028);n(4177);var u=n(2196),m=e=>{let{isOpen:t,onClose:n,setRefresh:i,materialValues:l,setMaterialValues:r}=e,[c,d]=(0,s.useState)({codeInvalid:!1,nameInvalid:!1}),[m,h]=(0,s.useState)(l),[p,g]=(0,s.useState)([]),[x,f]=(0,s.useState)([]),[j,y]=(0,s.useState)({}),[w,v]=(0,s.useState)({});(0,s.useEffect)(()=>{t&&((0,u.tV)({pageNum:1,pageSize:99999999}).then(e=>{if(g(e.list),l.expect_wh_id){let t=e.list.find(e=>e.id===l.expect_wh_id);y(t||{})}}),l.expect_wh_id&&(0,u.$_)({warehouse_id:l.expect_wh_id},{pageNum:1,pageSize:99999999}).then(e=>{f(e.list);let t=e.list.find(e=>e.id===l.expact_stock_location_id);v(t||{})}))},[l,t]),(0,s.useEffect)(()=>{h(l)},[l]);let k=(0,s.useRef)(null);(0,s.useEffect)(()=>{if(t){var e;(null==j?void 0:j.id)&&(null===(e=k.current)||void 0===e?void 0:e.id)!==j.id&&(0,u.$_)({warehouse_id:j.id},{pageNum:1,pageSize:99999999}).then(e=>{f(e.list)}),k.current=j}},[j,t]);let b=e=>{let{id:t,value:n}=e.target;h(e=>({...e,[t]:n}))},_=async()=>{let e={codeInvalid:!m.product_code||""===m.product_code,nameInvalid:!m.name||""===m.name};if(d(e),Object.values(c).some(e=>e)){d(e);return}(0,u.VR)(m).then(e=>{n(),i({})})};return(0,a.jsx)(o.u_l,{open:t,modalHeading:"Edit a Material",modalLabel:"Material Management",primaryButtonText:"Save",secondaryButtonText:"Cancel",onRequestClose:()=>{r({}),d({codeInvalid:!1,nameInvalid:!1}),n()},onRequestSubmit:_,children:(0,a.jsxs)(o.rjZ,{className:"pl-0 pr-0",children:[(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"product_code",labelText:"Material Code",placeholder:"Material Code",required:!0,invalid:c.codeInvalid,invalidText:"This field cannot be empty",value:m.product_code,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"name",labelText:"Material Name",placeholder:"Material name",required:!0,invalid:c.nameInvalid,invalidText:"This field cannot be empty",value:m.name,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"specification",labelText:"Specification",placeholder:"Specification",required:!0,invalidText:"This field cannot be empty",value:m.specification,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"product_type",labelText:"Type",placeholder:"type",required:!0,value:m.product_type,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"unit",labelText:"Unit",placeholder:"Unit",value:m.unit,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"max",labelText:"Maximum Safty Stock",placeholder:"Maximum Safty Stock",value:m.max,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"min",labelText:"Minimum Safty Stock",placeholder:"Minimum Safty Stock",value:m.min,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.oil,{className:"mb-5",id:"status",labelText:"Status",placeholder:"Status",value:m.status,onChange:b})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.CtY,{className:"mb-8",titleText:"Expect WH",items:p,itemToString:e=>e?e.name:"",placeholder:"Choose a warehouse",onChange:e=>{if(e){var t;y(e.selectedItem),v({}),h({...m,expect_wh_id:e.selectedItem?null===(t=e.selectedItem)||void 0===t?void 0:t.id:"",expact_stock_location_id:""})}else y({}),v({}),h({...m,expect_wh_id:"",expact_stock_location_id:""})},selectedItem:j})}),(0,a.jsx)(o.sgG,{sm:2,md:4,lg:8,children:(0,a.jsx)(o.CtY,{className:"mb-8",titleText:"Expect Shelf",items:x,itemToString:e=>e?e.name:"",placeholder:"Choose a Shelf",onChange:e=>{var t;v(e.selectedItem),h({...m,expact_stock_location_id:e.selectedItem?null===(t=e.selectedItem)||void 0===t?void 0:t.id:""})},selectedItem:w})}),(0,a.jsx)(o.sgG,{sm:4,md:8,lg:16,children:(0,a.jsx)(o.Kx8,{id:"note",labelText:"Note",placeholder:"Note",value:m.note,onChange:b})})]})})},h=function(e){let{headers:t,refresh:n,setRefresh:i,filters:l,isSearchClicked:r}=e,[h,p]=(0,s.useState)(1),[g,x]=(0,s.useState)(10),[f,j]=(0,s.useState)(0),[y,w]=(0,s.useState)({}),[v,k]=(0,s.useState)(!1),[b,_]=(0,s.useState)([]);(0,s.useEffect)(()=>{if(r){let e=Object.entries(l).reduce((e,t)=>{let[n,a]=t;return""!==a&&(e[n]=a),e},{});Object.entries(e).length>0&&(0,u.hI)(e,{pageNum:h,pageSize:g}).then(e=>{_(e.list),j(e.total)})}else(0,u.v0)({pageNum:h,pageSize:g},{}).then(e=>{_(e.list),j(e.total)})},[h,g,n,r]);let N=e=>{w(e),k(!0)},S=async e=>{(0,u.Gx)({id:e}).then(e=>i({}))};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.x4x,{isCondensed:!0,children:[(0,a.jsx)(o.SmK,{children:(0,a.jsx)(o.s1N,{head:!0,className:"headerRow",children:t.map((e,t)=>(0,a.jsx)(o.agF,{head:!0,children:e.header},e.key))})}),(0,a.jsx)(o.FxI,{children:b.map((e,n)=>(0,a.jsxs)(o.s1N,{children:[t.map(t=>"status"===t.key?(0,a.jsx)(o.agF,{children:(0,a.jsxs)(o.Vp9,{type:"Inactive"===e[t.key]?"red":"blue",children:[null===e[t.key]?"":e[t.key]," "]})},t.key):(0,a.jsx)(o.agF,{children:e[t.key]},t.key)),(0,a.jsxs)(o.agF,{children:[(0,a.jsx)(o.hU,{size:"xs",kind:"ghost",className:"mr-[0.5rem]",children:(0,a.jsx)(c.I8,{size:15,onClick:()=>N(e)})}),(0,a.jsx)(o.hU,{size:"xs",kind:"ghost",onClick:()=>S(e.id),children:(0,a.jsx)(d.HG,{size:15})})]})]},e.id))})]}),(0,a.jsx)(o.tlE,{backwardText:"Previous page",forwardText:"Next page",itemsPerPageText:"Items per page:",page:h,pageNumberText:"Page Number",pageSize:g,pageSizes:[5,10,20,30,40,50],totalItems:f,onChange:e=>{let{page:t,pageSize:n}=e;p(t),x(n)}}),(0,a.jsx)(m,{isOpen:v,onClose:()=>{k(!1)},materialValues:y,setRefresh:i,setMaterialValues:w})]})},p=n(6008);let g=[{key:"id",header:"ID"},{key:"product_code",header:"Material Code"},{key:"name",header:"Material Name"},{key:"product_type",header:"Material Type"},{key:"unit",header:"Unit"},{key:"max",header:"Max Stock"},{key:"min",header:"Min Stock"},{key:"status",header:"Status"},{key:"note",header:"Note"}];var x=function(){let e=(0,p.useRouter)(),t={product_code:"",name:"",product_type:""},[n,c]=(0,s.useState)(t),d=e=>{let{id:t,value:n}=e.target;c(e=>({...e,[t]:n}))},[u,m]=(0,s.useState)({}),[x,f]=(0,s.useState)(!1);return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.aGc,{children:[(0,a.jsx)(o.gN6,{children:(0,a.jsx)("a",{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/home"))},children:"Home"})}),(0,a.jsx)(o.gN6,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/warehouse"))},children:"Warehouse"}),(0,a.jsx)(o.gN6,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/warehouse/material"))},children:"Material"})]}),(0,a.jsxs)("div",{className:"bx--col-lg-16 flex justify-between items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.X6q,{className:"mt-2 text-[28px] font-normal",children:"Material"}),(0,a.jsx)(o.X6q,{className:"mt-1 text-sm",children:"Input materials details for inventory management"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.zxk,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/warehouse/material/rfid"))},className:"mr-2 bg-[#6929C4]",isExpressive:!0,size:"sm",renderIcon:i.ol,children:"RFID Tag"}),(0,a.jsx)(o.zxk,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/warehouse/material/create"))},isExpressive:!0,size:"sm",renderIcon:l.mm,children:"Create a Material"})]})]}),(0,a.jsxs)("div",{className:"flex mt-20 space-x-4 items-end",children:[(0,a.jsx)(o.oil,{className:"flex-auto w-20",labelText:"Material Code",id:"product_code",placeholder:"Material Code",value:n.product_code,onChange:d}),(0,a.jsx)(o.oil,{className:"flex-auto w-20",labelText:"Material Name",id:"name",placeholder:"Material Name",value:n.name,onChange:d}),(0,a.jsx)(o.oil,{className:"flex-auto w-20",labelText:"Material Type",id:"product_type",placeholder:"Material Type",value:n.product_type,onChange:d}),(0,a.jsx)(o.JMr,{"aria-label":"Search",onClick:()=>f(!0),children:(0,a.jsx)(i.ol,{size:16})}),(0,a.jsx)(o.JMr,{"aria-label":"Remove Filters",onClick:()=>{f(!1),c(t)},children:(0,a.jsx)(r.eL,{size:16})})]}),(0,a.jsx)("div",{className:"mt-12",children:(0,a.jsx)(h,{headers:g,refresh:u,setRefresh:m,filters:n,isSearchClicked:x})})]})}},4177:function(){}},function(e){e.O(0,[313,307,28,531,698,744],function(){return e(e.s=953)}),_N_E=e.O()}]);