import{_ as l,q as o,k as m,l as _,B as r,M as i,x as n,u as s,y as f}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const g={name:"DeviceDiscovergyCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-discovergy-counter"},b={class:"small"},h=s("a",{href:"https://api.discovergy.com/public/v1/meters",target:"_blank",rel:"noopener noreferrer"}," https://api.discovergy.com/public/v1/meters ",-1);function w(t,e,a,y,x,d){const u=o("openwb-base-heading"),c=o("openwb-base-text-input");return m(),_("div",v,[r(u,null,{default:i(()=>[n(" Einstellungen für Discovergy Zähler "),s("span",b,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),r(c,{title:"Meter-ID",required:"","model-value":a.configuration.meter_id,"onUpdate:modelValue":e[0]||(e[0]=p=>d.updateConfiguration(p,"configuration.meter_id"))},{help:i(()=>[n(" Um die ID herauszufinden mit dem Browser die Adresse "),h,n(" aufrufen und dort Benutzername und Passwort eingeben. Hier wird nun u.a. die ID des Zählers angezeigt. ")]),_:1},8,["model-value"])])}const C=l(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/discovergy/counter.vue"]]);export{C as default};
