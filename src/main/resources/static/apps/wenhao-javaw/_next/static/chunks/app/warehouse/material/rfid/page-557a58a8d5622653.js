(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{2536:function(e,t,n){Promise.resolve().then(n.bind(n,8145))},1641:function(e,t,n){"use strict";n.d(t,{R1:function(){return AddWarehouses},N6:function(){return addInboundRecord},_R:function(){return addMaterial},X:function(){return addMaterialRFID},Kk:function(){return addOutboundRecord},tR:function(){return addStocktakingRecord},UT:function(){return addStorageLocation},Gs:function(){return deleteInbound},Gx:function(){return deleteMaterial},jA:function(){return deleteOutbound},Ap:function(){return deleteStocktaking},zf:function(){return deleteStorageLocation},x0:function(){return deleteWarehouse},z2:function(){return fetchInbound},hU:function(){return fetchInboundDetails},nW:function(){return fetchInboundWithFilter},v0:function(){return fetchMaterial},aG:function(){return fetchMaterialRFID},hI:function(){return fetchMaterialWithFilters},eB:function(){return fetchOutbound},NE:function(){return fetchOutboundDetails},Ju:function(){return fetchOutboundWithFilter},eN:function(){return fetchStocktaking},DP:function(){return fetchStocktakingDetails},_b:function(){return fetchStocktakingWithFilter},$_:function(){return fetchStorageLocationsByWId},tV:function(){return fetchWarehouses},_U:function(){return fetchWarehousesWithFilters},VR:function(){return updateMaterial},qL:function(){return updateWarehouse}});var a=n(2173),o=n(1490);n(2601);let r=a.Z.create({baseURL:"/wmsbackendapi",withCredentials:!0,timeout:1e5});function removeLoginInfo(){o.Z.remove("isv_token")}async function fetchWarehouses(e,t){return r.post("/wms/warehouse/get",{},{params:{pageNum:e,pageSize:t}}).then(e=>(console.log(e),e.data.data))}async function fetchWarehousesWithFilters(e){return r.post("/wms/warehouse/get",e).then(e=>(console.log(e),e.data.data))}async function AddWarehouses(e){return r.post("/wms/warehouse/add",e).then(e=>console.log(e))}async function deleteWarehouse(e){return r.post("/wms/warehouse/delete",{id:e}).then(e=>console.log(e))}async function updateWarehouse(e){return r.post("/wms/warehouse/update",e).then(e=>console.log(e))}async function fetchStorageLocationsByWId(e){return r.post("/wms/storagelocation/get",e).then(e=>(console.log(e),e.data.data))}async function addStorageLocation(e){return r.post("/wms/storagelocation/add",e).then(e=>(console.log(e),e.data.data))}async function deleteStorageLocation(e){return r.post("/wms/storagelocation/delete",e).then(e=>(console.log(e),e.data.data))}async function fetchMaterial(){return r.post("/wms/material/get").then(e=>(console.log(e),e.data.data))}async function fetchMaterialWithFilters(e){return r.post("/wms/material/get",e).then(e=>(console.log(e),e.data.data))}async function addMaterial(e){return r.post("/wms/material/add",e).then(e=>(console.log(e),e.data.data))}async function updateMaterial(e){return r.post("/wms/material/update",e).then(e=>(console.log(e),e.data.data))}async function deleteMaterial(e){return r.post("/wms/material/delete",e).then(e=>(console.log(e),e.data.data))}async function fetchMaterialRFID(){return r.post("/wms/rfidmaterial/get").then(e=>(console.log(e),e.data.data))}async function addMaterialRFID(e){return r.post("/wms/rfidmaterial/add",e).then(e=>(console.log(e),e.data.data))}async function addInboundRecord(e){return r.post("/wms/inbound/add",e).then(e=>(console.log(e),e.data.data))}async function fetchInbound(){return r.post("/wms/inbound/get").then(e=>(console.log(e),e.data.data))}async function fetchInboundWithFilter(e){return r.post("/wms/inbound/get",e).then(e=>(console.log(e),e.data.data))}async function deleteInbound(e){return r.post("/wms/inbound/delete",e).then(e=>(console.log(e),e.data.data))}async function fetchInboundDetails(e){return r.post("/wms/inbound/detail/get",e).then(e=>(console.log(e),e.data.data))}async function addOutboundRecord(e){return r.post("/wms/outbound/add",e).then(e=>(console.log(e),e.data.data))}async function fetchOutbound(){return r.post("/wms/outbound/get").then(e=>(console.log(e),e.data.data))}async function fetchOutboundWithFilter(e){return r.post("/wms/outbound/get",e).then(e=>(console.log(e),e.data.data))}async function deleteOutbound(e){return r.post("/wms/outbound/delete",e).then(e=>(console.log(e),e.data.data))}async function fetchOutboundDetails(e){return r.post("/wms/outbound/detail/get",e).then(e=>(console.log(e),e.data.data))}async function addStocktakingRecord(e){return r.post("/wms/stocktaking/add",e).then(e=>(console.log(e),e.data.data))}async function fetchStocktaking(){return r.post("/wms/stocktaking/get").then(e=>(console.log(e),e.data.data))}async function fetchStocktakingWithFilter(e){return r.post("/wms/stocktaking/get",e).then(e=>(console.log(e),e.data.data))}async function deleteStocktaking(e){return r.post("/wms/stocktaking/delete",e).then(e=>(console.log(e),e.data.data))}async function fetchStocktakingDetails(e){return r.post("/wms/stocktaking/detail/get",e).then(e=>(console.log(e),e.data.data))}r.interceptors.request.use(e=>(null!=o.Z.get("isv_token")&&(e.headers.userToken=o.Z.get("isv_token")),e),e=>Promise.reject(e)),r.interceptors.response.use(function(e){return 401===e.data.code?(removeLoginInfo(),Promise.reject()):e},function(e){return(console.log(e),401===e.response.status)?(removeLoginInfo(),Promise.reject()):Promise.reject(e)})},8145:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return page}});var a=n(7437),o=n(2265),r=n(5461),s=n(1641),c=n(6302);n(3180);var Table_LabelingTable=function(e){let{headers:t,rows:n}=e,[s,c]=(0,o.useState)(1),[u,i]=(0,o.useState)(10),d=n.slice((s-1)*u,s*u);return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.x4x,{isCondensed:!0,children:[(0,a.jsx)(r.SmK,{children:(0,a.jsx)(r.s1N,{head:!0,children:t.map((e,t)=>(0,a.jsx)(r.agF,{head:!0,children:e.header},e.key))})}),(0,a.jsx)(r.FxI,{children:d.map((e,n)=>(0,a.jsx)(r.s1N,{children:t.map(t=>(0,a.jsx)(r.agF,{children:e[t.key]},t.key))},e.id))})]}),(0,a.jsx)(r.tlE,{backwardText:"Previous page",forwardText:"Next page",itemsPerPageText:"Items per page:",page:s,pageNumberText:"Page Number",pageSize:u,pageSizes:[5,10,20,30,40,50],totalItems:n.length,onChange:e=>{let{page:t,pageSize:n}=e;c(t),i(n)}})]})};let u=[{key:"material_id",header:"Material ID"},{key:"rfid",header:"RFID"},{key:"quantity",header:"Quantity"}];var page=function(){let[e,t]=(0,o.useState)([]),[n,i]=(0,o.useState)({});return(0,o.useEffect)(()=>{(0,s.aG)().then(e=>t(e))},[n]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.aGc,{children:[(0,a.jsx)(r.gN6,{children:(0,a.jsx)("a",{href:"/",children:"Home"})}),(0,a.jsx)(r.gN6,{href:"/warehouse",children:"Warehouse"}),(0,a.jsx)(r.gN6,{href:"/warehouse/material",children:"Material"}),(0,a.jsx)(r.gN6,{href:"/warehouse/material/rfid",children:"RFID"})]}),(0,a.jsxs)("div",{className:"bx--col-lg-16 flex justify-between items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(r.X6q,{className:"mt-12 text-[28px] font-normal",children:"RFID Tag"}),(0,a.jsx)(r.X6q,{className:"mt-1 text-sm",children:"Description of Labeling view goes here."})]}),(0,a.jsx)(r.zxk,{href:"/warehouse/material/rfid/create",isExpressive:!0,size:"sm",renderIcon:c.mm,children:"Create a RFID Tag"})]}),(0,a.jsx)("div",{className:"mt-12",children:(0,a.jsx)(Table_LabelingTable,{headers:u,rows:e})})]})}},3180:function(){}},function(e){e.O(0,[788,668,971,472,744],function(){return e(e.s=2536)}),_N_E=e.O()}]);