import{_ as c,q as r,k as m,l as g,B as t,M as s,x as d,u as _,y as b}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const f={name:"DeviceSolax",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-solax"},x={class:"small"};function h(o,e,i,w,S,a){const l=r("openwb-base-heading"),p=r("openwb-base-text-input"),u=r("openwb-base-number-input");return m(),g("div",v,[t(l,null,{default:s(()=>[d(" Einstellungen für Solax "),_("span",x,"(Modul: "+b(o.$options.name)+")",1)]),_:1}),t(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>a.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(u,{title:"Port",min:1,max:65535,placeholder:502,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>a.updateConfiguration(n,"configuration.port"))},{help:s(()=>[d(" Standardmäßig ist der Port 502. Dieser sollte nur geändert werden, wenn der Solax Wechselrichter auf einen anderen Port konfiguriert wurde. ")]),_:1},8,["model-value"]),t(u,{title:"Modbus-ID",required:"",min:0,max:255,"model-value":i.configuration.modbus_id,"onUpdate:modelValue":e[2]||(e[2]=n=>a.updateConfiguration(n,"configuration.modbus_id"))},{help:s(()=>[d(" Laut der Schnittstellenbeschreibung ist die ID bei Solax ab Werk auf 1 gesetzt. Entgegen der Beschreibung ist meist für Gen4 eine ID größer als 2 eingestellt. Bei Gen3 sogar (gegen jeglicher Modbus Standards) eine 0. ")]),_:1},8,["model-value"])])}const D=c(f,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solax/device.vue"]]);export{D as default};
