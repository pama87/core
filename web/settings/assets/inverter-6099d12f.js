import{_ as u,q as o,k as c,l,B as t,M as p,x as m,u as _,y as f}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const b={name:"DeviceSolarmaxInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},v={class:"device-solarmax-inverter"},g={class:"small"};function x(n,e,a,h,w,i){const s=o("openwb-base-heading"),r=o("openwb-base-number-input");return c(),l("div",v,[t(s,null,{default:p(()=>[m(" Einstellungen für Solarmax Wechselrichter "),_("span",g,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),t(r,{title:"Modbus ID",required:"","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=d=>i.updateConfiguration(d,"configuration.modbus_id"))},null,8,["model-value"])])}const C=u(b,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/inverter.vue"]]);export{C as default};
