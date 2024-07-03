import{_ as b,q as o,k as h,l as g,B as s,M as u,x as t,u as n,y as i}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const m={name:"DeviceSonnenbatterie",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},computed:{linkRestApi1(){return"http://"+this.configuration.ip_address+":7979/rest/devices/battery"},linkRestApi2(){return"http://"+this.configuration.ip_address+":7979/rest/devices/battery/M05"},linkJsonApi1(){return"http://"+this.configuration.ip_address+"/api/v1/status"},linkJsonApi2(){return"http://"+this.configuration.ip_address+"/api/v2/status"}},methods:{updateConfiguration(a,r=void 0){this.$emit("update:configuration",{value:a,object:r})}}},v={class:"device-sonnenbatterie"},A={class:"small"},k={style:{display:"block"}},w=n("br",null,null,-1),B=["href"],I=n("br",null,null,-1),J=["href"],R=n("br",null,null,-1),x=["href"],P=n("br",null,null,-1),O=["href"];function S(a,r,d,y,C,e){const p=o("openwb-base-heading"),c=o("openwb-base-alert"),_=o("openwb-base-text-input"),f=o("openwb-base-select-input");return h(),g("div",v,[s(p,null,{default:u(()=>[t(" Einstellungen für SonnenBatterie "),n("span",A,"(Modul: "+i(a.$options.name)+")",1)]),_:1}),s(c,{subtype:"info"},{default:u(()=>[t(' Die Leistung steht nur in den Varianten "Rest-API 2" und "JSON-API" zur Verfügung. ')]),_:1}),s(_,{title:"IP oder Hostname",subtype:"host",required:"","model-value":d.configuration.ip_address,"onUpdate:modelValue":r[0]||(r[0]=l=>e.updateConfiguration(l,"configuration.ip_address"))},null,8,["model-value"]),s(f,{title:"Datenverbindung",required:"",notSelected:"Bitte auswählen",options:[{value:0,text:"Rest-API 1 (z.B. ECO 4)"},{value:2,text:"Rest-API 2 (z.B. ECO 6)"},{value:1,text:"JSON-API v1(z.B. ECO 8 oder 10)"},{value:3,text:"JSON-API v2(z.B. ECO 8 oder 10)"}],"model-value":d.configuration.variant,"onUpdate:modelValue":r[1]||(r[1]=l=>e.updateConfiguration(l,"configuration.variant"))},{help:u(()=>[n("span",k,[t(" Je nach Sonnen Batterie muss die richtige Datenverbindung ausgewählt werden. Folgende URLs werden zum Abruf der Daten genutzt und können auch manuell über einen Browser abgefragt werden, um die richtige Einstellung zu finden:"),w,t(" Rest-API 1: "),n("a",{href:e.linkRestApi1,target:"_blank",rel:"noopener noreferrer"},i(e.linkRestApi1),9,B),I,t(" Rest-API 2: "),n("a",{href:e.linkRestApi2,target:"_blank",rel:"noopener noreferrer"},i(e.linkRestApi2),9,J),R,t(" JSON-API v1: "),n("a",{href:e.linkJsonApi1,target:"_blank",rel:"noopener noreferrer"},i(e.linkJsonApi1),9,x),P,t(" JSON-API v2: "),n("a",{href:e.linkJsonApi2,target:"_blank",rel:"noopener noreferrer"},i(e.linkJsonApi2),9,O)])]),_:1},8,["model-value"])])}const E=b(m,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sonnenbatterie/device.vue"]]);export{E as default};
