(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{2196:function(t,e,n){"use strict";n.d(e,{R1:function(){return u},N6:function(){return j},_R:function(){return y},X:function(){return x},Kk:function(){return D},tR:function(){return L},UT:function(){return p},Gs:function(){return S},Gx:function(){return _},zf:function(){return f},x0:function(){return l},z2:function(){return b},hU:function(){return N},nW:function(){return C},v0:function(){return m},aG:function(){return k},hI:function(){return g},eB:function(){return U},NE:function(){return H},Ju:function(){return q},Wk:function(){return z},eN:function(){return M},DP:function(){return Z},_b:function(){return R},$_:function(){return h},tu:function(){return P},lK:function(){return F},tV:function(){return r},_U:function(){return i},Gb:function(){return v},VR:function(){return w},Mf:function(){return E},qL:function(){return d}});var o=n(5953),a=n(1712);n(2040);let c=o.Z.create({baseURL:"/",withCredentials:!0,timeout:1e5});function s(){a.Z.remove("isv_token")}async function r(t){return c.post("/wms/warehouse/get",{},{params:t}).then(t=>(console.log(t),t.data.data))}async function i(t,e){return c.post("/wms/warehouse/get",t,{params:e}).then(t=>(console.log(t),t.data.data))}async function u(t){return c.post("/wms/warehouse/add",t).then(t=>console.log(t))}async function l(t){return c.post("/wms/warehouse/delete",{id:t}).then(t=>console.log(t))}async function d(t){return c.post("/wms/warehouse/update",t).then(t=>console.log(t))}async function h(t,e){return c.post("/wms/storagelocation/get",t,{params:e}).then(t=>(console.log(t),t.data.data))}async function p(t){return c.post("/wms/storagelocation/add",t).then(t=>(console.log(t),t.data.data))}async function f(t){return c.post("/wms/storagelocation/delete",t).then(t=>(console.log(t),t.data.data))}async function m(t,e){return c.post("/wms/material/get",e,{params:t}).then(t=>(console.log(t),t.data.data))}async function g(t){return c.post("/wms/material/get",t).then(t=>(console.log(t),t.data.data))}async function y(t){return c.post("/wms/material/add",t).then(t=>(console.log(t),t.data.data))}async function w(t){return c.post("/wms/material/update",t).then(t=>(console.log(t),t.data.data))}async function _(t){return c.post("/wms/material/delete",t).then(t=>(console.log(t),t.data.data))}async function k(){return c.post("/wms/rfidmaterial/get").then(t=>(console.log(t),t.data.data))}async function x(t){return c.post("/wms/rfidmaterial/add",t).then(t=>(console.log(t),t.data.data))}async function j(t){return c.post("/wms/inbound/add",t).then(t=>(console.log(t),t.data.data))}async function v(t){return c.post("/wms/inbound/update",t).then(t=>(console.log(t),t.data.data))}async function b(t){return c.post("/wms/inbound/get",{},{params:t}).then(t=>(console.log(t),t.data.data))}async function C(t,e){return c.post("/wms/inbound/get",t,{params:e}).then(t=>(console.log(t),t.data.data))}async function S(t){return c.post("/wms/inbound/delete",t).then(t=>(console.log(t),t.data.data))}async function N(t){return c.post("/wms/inbound/detail",t).then(t=>(console.log(t),t.data.data))}async function D(t){return c.post("/wms/outbound/add",t).then(t=>(console.log(t),t.data.data))}async function U(t){return c.post("/wms/outbound/get",{},{params:t}).then(t=>(console.log(t),t.data.data))}async function q(t){return c.post("/wms/outbound/get",t).then(t=>(console.log(t),t.data.data))}async function E(t){return c.post("/wms/outbound/update",t).then(t=>(console.log(t),t.data.data))}async function H(t){return c.post("/wms/outbound/detail",t).then(t=>(console.log(t),t.data.data))}async function L(t){return c.post("/wms/stocktaking/add",t).then(t=>(console.log(t),t.data.data))}async function M(t){return c.post("/wms/stocktaking/get",{},{params:t}).then(t=>(console.log(t),t.data.data))}async function R(t,e){return c.post("/wms/stocktaking/get",t,{params:e}).then(t=>(console.log(t),t.data.data))}async function Z(t){return c.post("/wms/stocktaking/detail",t).then(t=>(console.log(t),t.data.data))}async function P(t){return c.post("/wms/warehouse/namemap",{},{params:t}).then(t=>(console.log(t),t.data.data))}async function z(t){return c.post("/wms/storagelocation/namemap",{},{params:t}).then(t=>(console.log(t),t.data.data))}async function F(t){return c.post("/wms/warehousestoragelocation/idmap",{},{params:t}).then(t=>(console.log(t),t.data.data))}c.interceptors.request.use(t=>(null!=a.Z.get("isv_token")&&(t.headers.userToken=a.Z.get("isv_token")),t),t=>Promise.reject(t)),c.interceptors.response.use(function(t){return 401===t.data.code?(s(),Promise.reject()):t},function(t){return(console.log(t),401===t.response.status)?(s(),Promise.reject()):Promise.reject(t)})},7905:function(t,e,n){"use strict";var o=n(9268),a=n(6006),c=n(9698),s=n(1466),r=n(1846),i=n(789),u=n(2196);n(4177);var l=n(6008);e.Z=function(t){let{headers:e,rows:n,setRows:d}=t,h={name:"",product_code:"",specification:"",quantity:"",unit:"",expect_wh_id:"",expact_stock_location_id:""},[p,f]=(0,a.useState)([]),[m,g]=(0,a.useState)([]),[y,w]=(0,a.useState)([0]),[_,k]=(0,a.useState)({}),[x,j]=(0,a.useState)({}),[v,b]=(0,a.useState)({});(0,a.useEffect)(()=>{(0,u.tu)({pageNum:1,pageSize:999999}).then(t=>{let e=t.list.reduce((t,e)=>(t[e.id]=e.name,t),{});k(e)}).catch(t=>{console.error("Failed to fetch WH name map:",t)}),(0,u.Wk)({pageNum:1,pageSize:999999}).then(t=>{let e=t.list.reduce((t,e)=>(t[e.id]=e.name,t),{});j(e)}).catch(t=>{console.error("Failed to fetch SL name map:",t)}),(0,u.lK)({pageNum:1,pageSize:999999}).then(t=>{let e=new Map;t.list.forEach(t=>{t.warehouseNamemap.forEach(n=>{e.set(n.id,t.id)})}),b(e)}).catch(t=>{console.error("Error fetching warehouse data:",t)})},[]);let C=(0,l.usePathname)(),S=()=>C!=="".concat("/apps/wenhao-javaw","/operation/inbound/create")&&C!=="".concat("/apps/wenhao-javaw","/operation/outbound/create")&&C!=="".concat("/apps/wenhao-javaw","/operation/stocktaking/create"),N=async(t,e,n)=>{if(("name"===e||"product_code"===e)&&""!==n){f(e=>[...e,t]);try{let o=await (0,u.v0)({},{[e]:n});if(console.log(o),o.list.length>0){let e=o.list[0];d(n=>n.map((n,o)=>o===t?{name:e.name,product_code:e.product_code,specification:e.specification,quantity:"",unit:e.unit,expect_wh_id:e.expect_wh_id.toString(),expect_wh_name:_[e.expect_wh_id.toString()],expact_stock_location_id:e.expact_stock_location_id.toString(),expact_stock_location_name:x[e.expact_stock_location_id.toString()]}:n)),g(e=>[...e,t])}else g(e=>e.filter(e=>e!==t)),d(e=>e.map((e,n)=>n===t?h:e))}catch(t){console.error("Failed to fetch material data:",t)}f(e=>e.filter(e=>e!==t))}},D=(t,e,n)=>{d(o=>o.map((o,a)=>{if(a===t){if("expact_stock_location_id"!==e)return{...o,[e]:n.target.value};{var c;let t=n.target.value,a=null===(c=Object.entries(x).find(e=>{let[n,o]=e;return o.toLowerCase()===t.toLowerCase()}))||void 0===c?void 0:c[0];if(console.log(t,a),!a)return{...o,[e]:"",expact_stock_location_name:t,expect_wh_id:"",expect_wh_name:""};{let n=v.get(a),c=_[n];return{...o,expect_wh_id:n,expect_wh_name:c,[e]:a,expact_stock_location_name:t}}}}return o})),("name"===e||"product_code"===e)&&""===n.target.value&&(g(e=>e.filter(e=>e!==t)),d(e=>e.map((e,n)=>n===t?h:e)))};return(console.log(n),_&&x&&v)?(0,o.jsxs)(c.xJi,{children:[(0,o.jsx)(c.fjU,{children:(0,o.jsxs)(c.Vj0,{children:[(0,o.jsx)(c.Ys1,{}),(0,o.jsx)(c.hU,{label:"Add",onClick:()=>{d([...n,{...h,id:n.length}])},children:(0,o.jsx)(s.mm,{})}),(0,o.jsx)(c.hU,{label:"Remove",onClick:()=>{d(t=>t.filter((t,e)=>!y.includes(e))),w([]),g(t=>t.filter((t,e)=>!y.includes(e))),f(t=>t.filter((t,e)=>!y.includes(e)))},children:(0,o.jsx)(r.LB,{})})]})}),(0,o.jsxs)(c.iA_,{children:[(0,o.jsx)(c.ssF,{children:(0,o.jsxs)(c.SCH,{onClick:()=>{y.length===n.length?w([]):w(n.map((t,e)=>e))},children:[!S()&&(0,o.jsx)(c.xDH,{children:(0,o.jsx)(c.XZJ,{checked:y.length===n.length&&0!=y.length,labelText:"",onChange:t=>w(t?n.map((t,e)=>e):[])})}),e.map(t=>(0,o.jsx)(c.xDH,{children:t.header},t.key))]})}),(0,o.jsx)(c.RMI,{children:n.map((t,a)=>(0,o.jsxs)(c.SCH,{onClick:()=>{w(t=>y.includes(a)?t.filter(t=>t!==a):[...t,a])},children:[!S()&&(0,o.jsx)(c.pj1,{children:(0,o.jsx)(c.XZJ,{checked:y.includes(a),labelText:"",onChange:t=>{w(e=>t?[...e,a]:e.filter(t=>t!==a))}})}),e.map(e=>"name"===e.key?(console.log("row status",n,p,m,y),(0,o.jsx)(c.pj1,{children:S()?t[e.key]:(0,o.jsxs)("div",{className:"flex items-center w-48 gap-[0.5rem]",children:[(0,o.jsx)(c.oil,{className:"w-40",id:"name-".concat(a),value:t[e.key],onChange:t=>{D(a,e.key,t)},onBlur:t=>{N(a,e.key,t.target.value)}}),p.includes(a)&&(0,o.jsx)("div",{className:"loading-spinner"}),m.includes(a)&&(0,o.jsx)(i.kF,{color:Object.values(t).every(t=>""!==t.trim())?"green":"#c6c6c6"})]})},e.key)):"product_code"===e.key?(0,o.jsx)(c.pj1,{children:S()?t[e.key]:(0,o.jsx)(c.oil,{className:"w-40",id:"product-code-".concat(a),value:t[e.key],onChange:t=>{D(a,e.key,t)},onBlur:t=>{N(a,e.key,t.target.value)}})},e.key):"quantity"===e.key?(0,o.jsx)(c.pj1,{children:S()?t[e.key]:(0,o.jsx)(c.oil,{className:"w-20",id:"quantity-".concat(a),value:t[e.key],onChange:t=>{d(e=>e.map((e,n)=>n===a?{...e,quantity:t.target.value}:e))}})},e.key):"expect_wh_id"===e.key?(0,o.jsx)(c.pj1,{children:_[t[e.key]]},e.key):"expact_stock_location_id"===e.key?(0,o.jsx)(c.pj1,{children:S()?x[t[e.key]]:(0,o.jsx)(c.oil,{className:"w-40",id:"expact-stock-location-id-".concat(a),value:t.expact_stock_location_name,onChange:t=>{console.log(t),D(a,e.key,t)}})},e.key):(0,o.jsx)(c.pj1,{children:t[e.key]?t[e.key]:""},e.key))]},a))})]})]}):(0,o.jsx)("div",{children:"Loading..."})}},4566:function(t,e,n){"use strict";n.d(e,{U:function(){return o}});let o={shortDate:"DD/MM/yyyy",longDate:"DD/MM/yyyy HH:mm:ss"}},690:function(){},4177:function(){}}]);