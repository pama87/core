import{_ as l,q as o,k as c,l as p,B as u,M as m,x as _,u as b,y as f}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const g={name:"DeviceVictronCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-victron-counter"},V={class:"small"};function w(t,e,i,x,C,a){const r=o("openwb-base-heading"),s=o("openwb-base-number-input"),d=o("openwb-base-button-group-input");return c(),p("div",v,[u(r,null,{default:m(()=>[_(" Einstellungen für Victron Zähler "),b("span",V,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),u(s,{title:"Modbus ID",required:"","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=n=>a.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"]),u(d,{title:"Messgerät",buttons:[{buttonValue:!1,text:"AC-In Victron GX"},{buttonValue:!0,text:"Energy Meter"}],"model-value":i.configuration.energy_meter,"onUpdate:modelValue":e[1]||(e[1]=n=>a.updateConfiguration(n,"configuration.energy_meter"))},null,8,["model-value"])])}const B=l(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/victron/counter.vue"]]);export{B as default};
