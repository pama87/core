import{_ as d,q as t,k as c,l as p,B as o,M as l,x as m,u as _,y as f}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const b={name:"DeviceFemsBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-fems-bat"},v={class:"small"};function h(n,e,a,B,w,i){const s=t("openwb-base-heading"),r=t("openwb-base-number-input");return c(),p("div",g,[o(s,null,{default:l(()=>[m(" Einstellungen für openEMS, Fenecon FEMS, CENTURIO 10, Kaco Hy-Control Batteriespeicher "),_("span",v,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),o(r,{title:"Anzahl der verbauten Speicher",required:"",min:1,max:2,"model-value":a.configuration.num,"onUpdate:modelValue":e[0]||(e[0]=u=>i.updateConfiguration(u,"configuration.num"))},null,8,["model-value"])])}const E=d(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fems/bat.vue"]]);export{E as default};
