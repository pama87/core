import{_ as c,q as n,k as d,l as p,B as o,M as a,x as s,u,y as l}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const _={name:"DeviceHuaweiBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-huawei-bat"},m={class:"small"};function b(e,t,h,g,w,v){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return d(),p("div",f,[o(i,null,{default:a(()=>[s(" Einstellungen für Huawei Batteriespeicher "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:a(()=>[s(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/huawei/bat.vue"]]);export{x as default};
