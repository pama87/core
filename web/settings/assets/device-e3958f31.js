import{_ as c,q as n,k as p,l as u,B as o,M as s,x as a,u as d,y as l}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const _={name:"DeviceVirtual",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-virtual"},m={class:"small"};function v(e,t,b,g,h,w){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return p(),u("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für virtuelle Geräte "),d("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Dieses Gerät erfordert keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/virtual/device.vue"]]);export{B as default};
