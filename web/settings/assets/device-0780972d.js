import{_ as l,q as t,k as u,l as c,B as n,M as p,x as _,u as f,y as m}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const v={name:"DeviceSolarWorld",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},b={class:"device-solar_world"},g={class:"small"};function w(o,e,a,h,x,s){const i=t("openwb-base-heading"),d=t("openwb-base-text-input");return u(),c("div",b,[n(i,null,{default:p(()=>[_(" Einstellungen für SolarWorld "),f("span",g,"(Modul: "+m(o.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>s.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const C=l(v,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_world/device.vue"]]);export{C as default};
