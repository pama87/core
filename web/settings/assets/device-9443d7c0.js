import{_ as l,q as d,k as p,l as m,B as n,M as c,x as _,u as f,y as b}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const g={name:"DeviceGoodWe",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-goodwe"},w={class:"small"};function x(t,e,i,C,V,a){const s=d("openwb-base-heading"),r=d("openwb-base-text-input"),u=d("openwb-base-number-input");return p(),m("div",v,[n(s,null,{default:c(()=>[_(" Einstellungen für GoodWe "),f("span",w,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),n(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>a.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),n(u,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>a.updateConfiguration(o,"configuration.port"))},null,8,["model-value"]),n(u,{title:"Modbus ID",required:"","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=o=>a.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"])])}const y=l(g,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/good_we/device.vue"]]);export{y as default};
