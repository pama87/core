import{_ as c,q as n,k as d,l as p,B as o,M as s,x as a,u as l,y as u}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const _={name:"DeviceTeslaInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-tesla-inverter"},m={class:"small"};function b(e,t,v,g,h,w){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return d(),p("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für Tesla Wechselrichter "),l("span",m,"(Modul: "+u(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/tesla/inverter.vue"]]);export{B as default};
