import{_ as c,q as n,k as d,l as p,B as o,M as s,x as a,u,y as l}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const _={name:"DeviceSmaWebboxInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},b={class:"device-sma-webbox-inverter"},m={class:"small"};function f(e,t,v,g,h,x){const r=n("openwb-base-heading"),i=n("openwb-base-alert");return d(),p("div",b,[o(r,null,{default:s(()=>[a(" Einstellungen für SMA Webbox Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_webbox/inverter.vue"]]);export{B as default};
