import{_ as r,p as d,k as l,l as p,A as n,L as c,u as f,q as m,x as _}from"./vendor-9bfbb89c.js";import"./vendor-sortablejs-8518b3e5.js";const g={name:"DeviceLG",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-lg"},b={class:"small"};function w(t,e,a,x,V,s){const u=d("openwb-base-heading"),i=d("openwb-base-text-input");return l(),p("div",v,[n(u,null,{default:c(()=>[f(" Einstellungen für LG ESS V1.0 "),m("span",b,"(Modul: "+_(t.$options.name)+")",1)]),_:1}),n(i,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>s.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),n(i,{title:"Passwort",subtype:"password",required:"","model-value":a.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=o=>s.updateConfiguration(o,"configuration.password"))},null,8,["model-value"])])}const q=r(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/lg/device.vue"]]);export{q as default};