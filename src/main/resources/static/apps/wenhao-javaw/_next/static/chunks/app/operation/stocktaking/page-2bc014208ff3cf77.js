(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{3691:function(e,t,n){Promise.resolve().then(n.bind(n,7825))},2196:function(e,t,n){"use strict";n.d(t,{R1:function(){return u},N6:function(){return b},_R:function(){return x},X:function(){return w},Kk:function(){return F},tR:function(){return M},UT:function(){return f},Gs:function(){return C},Gx:function(){return j},zf:function(){return p},x0:function(){return l},z2:function(){return N},hU:function(){return _},nW:function(){return S},v0:function(){return m},aG:function(){return k},hI:function(){return g},eB:function(){return D},NE:function(){return P},Ju:function(){return T},Wk:function(){return Q},eN:function(){return I},DP:function(){return q},_b:function(){return O},$_:function(){return h},tu:function(){return E},lK:function(){return z},tV:function(){return c},_U:function(){return i},Gb:function(){return v},VR:function(){return y},Mf:function(){return R},qL:function(){return d}});var a=n(5953),s=n(1712);n(2040);let o=a.Z.create({baseURL:"/",withCredentials:!0,timeout:1e5});function r(){s.Z.remove("isv_token")}async function c(e){return o.post("/wms/warehouse/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function i(e,t){return o.post("/wms/warehouse/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function u(e){return o.post("/wms/warehouse/add",e).then(e=>console.log(e))}async function l(e){return o.post("/wms/warehouse/delete",{id:e}).then(e=>console.log(e))}async function d(e){return o.post("/wms/warehouse/update",e).then(e=>console.log(e))}async function h(e,t){return o.post("/wms/storagelocation/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function f(e){return o.post("/wms/storagelocation/add",e).then(e=>(console.log(e),e.data.data))}async function p(e){return o.post("/wms/storagelocation/delete",e).then(e=>(console.log(e),e.data.data))}async function m(e,t){return o.post("/wms/material/get",t,{params:e}).then(e=>(console.log(e),e.data.data))}async function g(e){return o.post("/wms/material/get",e).then(e=>(console.log(e),e.data.data))}async function x(e){return o.post("/wms/material/add",e).then(e=>(console.log(e),e.data.data))}async function y(e){return o.post("/wms/material/update",e).then(e=>(console.log(e),e.data.data))}async function j(e){return o.post("/wms/material/delete",e).then(e=>(console.log(e),e.data.data))}async function k(){return o.post("/wms/rfidmaterial/get").then(e=>(console.log(e),e.data.data))}async function w(e){return o.post("/wms/rfidmaterial/add",e).then(e=>(console.log(e),e.data.data))}async function b(e){return o.post("/wms/inbound/add",e).then(e=>(console.log(e),e.data.data))}async function v(e){return o.post("/wms/inbound/update",e).then(e=>(console.log(e),e.data.data))}async function N(e){return o.post("/wms/inbound/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function S(e,t){return o.post("/wms/inbound/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function C(e){return o.post("/wms/inbound/delete",e).then(e=>(console.log(e),e.data.data))}async function _(e){return o.post("/wms/inbound/detail",e).then(e=>(console.log(e),e.data.data))}async function F(e){return o.post("/wms/outbound/add",e).then(e=>(console.log(e),e.data.data))}async function D(e){return o.post("/wms/outbound/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function T(e){return o.post("/wms/outbound/get",e).then(e=>(console.log(e),e.data.data))}async function R(e){return o.post("/wms/outbound/update",e).then(e=>(console.log(e),e.data.data))}async function P(e){return o.post("/wms/outbound/detail",e).then(e=>(console.log(e),e.data.data))}async function M(e){return o.post("/wms/stocktaking/add",e).then(e=>(console.log(e),e.data.data))}async function I(e){return o.post("/wms/stocktaking/get",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function O(e,t){return o.post("/wms/stocktaking/get",e,{params:t}).then(e=>(console.log(e),e.data.data))}async function q(e){return o.post("/wms/stocktaking/detail",e).then(e=>(console.log(e),e.data.data))}async function E(e){return o.post("/wms/warehouse/namemap",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function Q(e){return o.post("/wms/storagelocation/namemap",{},{params:e}).then(e=>(console.log(e),e.data.data))}async function z(e){return o.post("/wms/warehousestoragelocation/idmap",{},{params:e}).then(e=>(console.log(e),e.data.data))}o.interceptors.request.use(e=>(null!=s.Z.get("isv_token")&&(e.headers.userToken=s.Z.get("isv_token")),e),e=>Promise.reject(e)),o.interceptors.response.use(function(e){return 401===e.data.code?(r(),Promise.reject()):e},function(e){return(console.log(e),401===e.response.status)?(r(),Promise.reject()):Promise.reject(e)})},7825:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(9268),s=n(6006),o=n(9698),r=n(1466),c=n(8005),i=n(7221);n(4177);var u=n(2196),l=n(5850);let d=[{key:"material_name",header:"Material Name"},{key:"quantity",header:"Quantity"},{key:"stock_quantity",header:"Stock Quantity"},{key:"discrepancy",header:"Discrepancy"}];var h=function(e){let{isModalOpen:t,setModalOpen:n,id:r}=e,[c,i]=(0,s.useState)([]),[h,f]=(0,s.useState)([]);return(0,s.useEffect)(()=>{r&&(0,u.DP)({id:r}).then(e=>{console.log(e);let t=e.list.reduce((e,t)=>{let{storage_location:n}=t;return e[n]||(e[n]=[]),e[n].push(...t.inventory),e},{}),n=Object.keys(t);console.log(t),f(n),i(t)}).catch(e=>{console.error("Failed to fetch stocktaking details:",e)})},[r]),console.log(r,c),(0,a.jsxs)(o.u_l,{open:t,modalHeading:"Result",passiveModal:!0,onRequestClose:()=>n(!1),size:"lg",children:[(0,a.jsx)(o.X6q,{className:"text-sm font-normal leading-tight tracking-tight mb-3",children:"The following products entered the designated warehouse in this inbound task."}),0!==h.length&&(0,a.jsxs)(o.mQc,{children:[(0,a.jsx)(o.tdY,{"aria-label":"List of tabs",contained:!0,children:h.map((e,t)=>(0,a.jsx)(o.OK9,{children:e},t))}),(0,a.jsx)(o.nPR,{children:h.map((e,t)=>(0,a.jsx)(o.x45,{children:(0,a.jsx)(l.Z,{headers:d,rows:c[e]})},t))})]})]})},f=n(5326),p=n.n(f),m=n(4566),g=function(e){let{headers:t,refresh:n,setRefresh:r,filters:c,isSearchClicked:i}=e,[l,d]=(0,s.useState)(1),[f,g]=(0,s.useState)(10),[x,y]=(0,s.useState)(0),[j,k]=s.useState(!1),[w,b]=(0,s.useState)([]),[v,N]=(0,s.useState)("");(0,s.useEffect)(()=>{if(i){let e=Object.entries(c).reduce((e,t)=>{let[n,a]=t;return""!==a&&(e[n]=a),e},{});Object.entries(e).length>0&&(console.log(e),(0,u._b)(e,{pageNum:l,pageSize:f}).then(e=>{b(e.list),y(e.total)}))}else(0,u.eN)({pageNum:l,pageSize:f}).then(e=>{b(e.list),y(e.total)})},[l,f,n,c,i]);let[S,C]=(0,s.useState)(""),[_,F]=(0,s.useState)("desc");return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.x4x,{isCondensed:!0,children:[(0,a.jsx)(o.SmK,{children:(0,a.jsx)(o.s1N,{head:!0,children:t.map((e,t)=>(0,a.jsxs)(o.agF,{head:!0,onClick:()=>handleSort(e.key),children:[e.header,S===e.key&&(0,a.jsx)("span",{children:"asc"===_?" ▲":" ▼"})]},e.key))})}),(0,a.jsx)(o.FxI,{children:w.map((e,n)=>(0,a.jsx)(o.s1N,{children:t.map(t=>"status"===t.key?(0,a.jsx)(o.agF,{children:(0,a.jsx)(o.Vp9,{type:"pending"===e[t.key].toLowerCase()?"red":"blue",children:null===e[t.key]?"":e[t.key]})},t.key):"result"===t.key?(0,a.jsx)(o.agF,{children:(0,a.jsx)(o.rUS,{onClick:()=>{k(!0),N(e.id)},children:"View Detail"})},t.key):"create_time"===t.key?(0,a.jsx)(o.agF,{children:e[t.key]&&p()(e[t.key]).format(m.U.shortDate)},t.key):(0,a.jsx)(o.agF,{children:e[t.key]},t.key))},n))})]}),(0,a.jsx)(o.tlE,{backwardText:"Previous page",forwardText:"Next page",itemsPerPageText:"Items per page:",page:l,pageNumberText:"Page Number",pageSize:f,pageSizes:[5,10,20,30,40,50],totalItems:x,onChange:e=>{let{page:t,pageSize:n}=e;d(t),g(n)}}),(0,a.jsx)(h,{id:v,isModalOpen:j,setModalOpen:k})]})},x=n(6008);let y=[{key:"id",header:"ID"},{key:"type",header:"Type"},{key:"operator",header:"Operator"},{key:"source",header:"Source"},{key:"status",header:"Status"},{key:"result",header:"Result"},{key:"create_time",header:"Create Time"},{key:"note",header:"Note"}];var j=function(){let e=(0,x.useRouter)(),[t,n]=(0,s.useState)({}),[u,l]=(0,s.useState)(!1),d={ref_id:"",status:"",type:"",warehouse_name:""},[h,f]=(0,s.useState)(d),p=e=>{let{id:t,value:n}=e.target;f(e=>({...e,[t]:n}))};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.aGc,{children:[(0,a.jsx)(o.gN6,{children:(0,a.jsx)("a",{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/home"))},children:"Home"})}),(0,a.jsx)(o.gN6,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/operation/inbound"))},children:"Operation"}),(0,a.jsx)(o.gN6,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/operation/stocktaking"))},children:"Auditing"})]}),(0,a.jsxs)("div",{className:"bx--col-lg-16 flex justify-between items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.X6q,{className:"mt-2 text-[28px] font-normal",children:"Auditing"}),(0,a.jsx)(o.X6q,{className:"mt-1 text-sm",children:"Verify and adjust inventory accuracy"})]}),(0,a.jsx)(o.zxk,{onClick:()=>{e.push("".concat("/apps/wenhao-javaw","/operation/stocktaking/create"))},isExpressive:!0,size:"sm",renderIcon:r.mm,children:"Create a Auditing Order"})]}),(0,a.jsxs)("div",{className:"flex mt-20 space-x-4 items-end",children:[(0,a.jsx)(o.oil,{className:"flex-auto ",labelText:"Ref Id",id:"ref_id",placeholder:"Ref Id",value:h.ref_id,onChange:p}),(0,a.jsxs)(o.PhF,{className:"flex-auto",id:"type",defaultValue:"",labelText:"Auditing Type",value:h.type,onChange:p,required:!0,children:[(0,a.jsx)(o.QlF,{disabled:!0,hidden:!0,value:"",text:"Choose an option"}),(0,a.jsx)(o.QlF,{value:"Dynamic",text:"Dynamic"}),(0,a.jsx)(o.QlF,{value:"Static",text:"Static"})]}),(0,a.jsxs)(o.PhF,{className:"flex-auto",id:"status",defaultValue:"",labelText:"Status",value:h.status,onChange:p,disabled:!0,required:!0,children:[(0,a.jsx)(o.QlF,{disabled:!0,hidden:!0,value:"",text:"Choose an option"}),(0,a.jsx)(o.QlF,{value:"Done",text:"Done"}),(0,a.jsx)(o.QlF,{value:"Executing",text:"Executing"}),(0,a.jsx)(o.QlF,{value:"To-do",text:"To-do"})]}),(0,a.jsx)(o.oil,{className:"flex-auto ",labelText:"Warehouse Name",id:"warehouse_name",placeholder:"Warehouse Name",value:h.warehouse_name,onChange:p}),(0,a.jsx)(o.JMr,{"aria-label":"Search",onClick:()=>l(!0),children:(0,a.jsx)(c.ol,{size:16})}),(0,a.jsx)(o.JMr,{"aria-label":"Remove Filters",onClick:()=>{l(!1),f(d)},children:(0,a.jsx)(i.eL,{size:16})})]}),(0,a.jsx)("div",{className:"mt-12",children:(0,a.jsx)(g,{headers:y,refresh:t,setRefresh:n,filters:h,isSearchClicked:u})})]})}},5850:function(e,t,n){"use strict";var a=n(9268);n(6006);var s=n(9698);t.Z=function(e){let{headers:t,rows:n}=e;return console.log(n,t),(0,a.jsx)(s.xJi,{children:(0,a.jsxs)(s.iA_,{children:[(0,a.jsx)(s.ssF,{children:(0,a.jsx)(s.SCH,{children:t.map(e=>(0,a.jsx)(s.xDH,{header:!0,children:e.header},e.key))})}),(0,a.jsx)(s.RMI,{children:n.map((e,n)=>(0,a.jsx)(s.SCH,{children:t.map(t=>"discrepancy"===t.key?(0,a.jsx)(s.pj1,{children:(0,a.jsx)(s.Vp9,{type:0>parseInt(e[t.key])?"red":0===parseInt(e[t.key])?"blue":"green",children:e[t.key]})},t.key):(0,a.jsx)(s.pj1,{children:e[t.key]},t.key))},n))})]})})}},4566:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});let a={shortDate:"DD/MM/yyyy",longDate:"DD/MM/yyyy HH:mm:ss"}},4177:function(){}},function(e){e.O(0,[550,313,307,531,698,744],function(){return e(e.s=3691)}),_N_E=e.O()}]);