import{_ as l,q as i,k as f,l as _,B as r,M as s,x as n,u as o,y as m}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const h={name:"DevicePowerfoxInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"device-powerfox-inverter"},b={class:"small"},v=o("a",{href:"https://backend.powerfox.energy/api/2.0/my/all/devices",target:"_blank",rel:"noopener noreferrer"}," https://backend.powerfox.energy/api/2.0/my/all/devices ",-1),w=o("span",{class:"font-weight-bold text-monospace",style:{display:"contents"}},' "DeviceID" ',-1);function x(t,e,a,D,k,d){const u=i("openwb-base-heading"),c=i("openwb-base-text-input");return f(),_("div",g,[r(u,null,{default:s(()=>[n(" Einstellungen für Powerfox Wechselrichter "),o("span",b,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),r(c,{title:"ID",required:"","model-value":a.configuration.id,"onUpdate:modelValue":e[0]||(e[0]=p=>d.updateConfiguration(p,"configuration.id"))},{help:s(()=>[n(" Um die ID herauszufinden mit dem Browser die Adresse "),v,n(" aufrufen und dort Benutzername und Passwort eingeben. Die DeviceID ist exakt so einzutragen, wie in der Antwort des Servers. Das bedeutet insbesondere auch, die Groß-/Kleinschreibung ist zu beachten! In dem Feld ist nur die Zeichenfolge direkt hinter "),w,n(" ohne den Doppelpunkt und Anführungszeichen einzutragen. ")]),_:1},8,["model-value"])])}const B=l(h,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerfox/inverter.vue"]]);export{B as default};
