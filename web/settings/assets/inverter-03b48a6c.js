import{_ as d,q as o,k as p,l as c,B as i,M as m,x as _,u as f,y as v}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const b={name:"DeviceOpenwbFlexInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"device-openwb-flex-inverter"},x={class:"small"};function w(t,e,a,M,h,s){const u=o("openwb-base-heading"),l=o("openwb-base-select-input"),r=o("openwb-base-number-input");return p(),c("div",g,[i(u,null,{default:m(()=>[_(" Einstellungen für openWB-Flex Wechselrichter "),f("span",x,"(Modul: "+v(t.$options.name)+")",1)]),_:1}),i(l,{title:"Zählermodell",notSelected:"Bitte auswählen",options:[{value:0,text:"MPM3PM"},{value:1,text:"Lovato"},{value:2,text:"SDM630/SDM72D-M"},{value:3,text:"SDM120"}],"model-value":a.configuration.version,"onUpdate:modelValue":e[0]||(e[0]=n=>s.updateConfiguration(n,"configuration.version"))},null,8,["model-value"]),i(r,{title:"Modbus-ID",required:"",min:1,max:255,"model-value":a.configuration.id,"onUpdate:modelValue":e[1]||(e[1]=n=>s.updateConfiguration(n,"configuration.id"))},null,8,["model-value"])])}const C=d(b,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb_flex/inverter.vue"]]);export{C as default};
