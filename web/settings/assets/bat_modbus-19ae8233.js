import{_ as d,q as n,k as c,l as p,B as o,M as a,x as s,u,y as _}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const l={name:"DeviceVartaModbusBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},b={class:"device-varta-bat"},m={class:"small"};function f(e,t,g,v,h,B){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return c(),p("div",b,[o(i,null,{default:a(()=>[s(" Einstellungen für Varta Modbus Batteriespeicher "),u("span",m,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:a(()=>[s(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=d(l,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/varta/bat_modbus.vue"]]);export{x as default};
