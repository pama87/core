import{_ as p,q as c,k as _,l as m,B as n,M as o,x as t,u as e,y as i}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const h={name:"DeviceMqttBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(a,d=void 0){this.$emit("update:configuration",{value:a,object:d})}}},b={class:"device-mqtt-bat"},f={class:"small"},g=e("br",null,null,-1),B=e("br",null,null,-1),k=e("span",{class:"text-info"},"-123",-1),x=e("br",null,null,-1),v=e("br",null,null,-1),I=e("span",{class:"text-info"},"123.45",-1),w=e("br",null,null,-1),W=e("br",null,null,-1),z=e("span",{class:"text-info"},"123.45",-1),T=e("br",null,null,-1),D=e("br",null,null,-1),N=e("span",{class:"text-info"},"95",-1);function q(a,d,l,y,E,F){const r=c("openwb-base-heading"),s=c("openwb-base-copy-to-clipboard"),u=c("openwb-base-alert");return _(),m("div",b,[n(r,null,{default:o(()=>[t(" Einstellungen für MQTT Batteriespeicher "),e("span",f,"(Modul: "+i(a.$options.name)+")",1)]),_:1}),n(u,{subtype:"info"},{default:o(()=>[t(" Die folgenden Topics sind für einen reibungslosen Betrieb unbedingt erforderlich: "),e("ul",null,[e("li",null,[n(s,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/bat/"+i(l.componentId)+"/get/power",1)]),_:1}),g,t(" Speicherleistung in Watt, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, positiv Ladung, negativ Entladung"),B,t(" Beispiel: "),k]),e("li",null,[n(s,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/bat/"+i(l.componentId)+"/get/imported",1)]),_:1}),x,t(" Geladene Energie in Wh, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, nur positiv"),v,t(" Beispiel: "),I]),e("li",null,[n(s,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/bat/"+i(l.componentId)+"/get/exported",1)]),_:1}),w,t(" Entladene Energie in Wh, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, nur positiv"),W,t(" Beispiel: "),z]),e("li",null,[n(s,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/bat/"+i(l.componentId)+"/get/soc",1)]),_:1}),T,t(" Ladestand des Speichers, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, gültige Werte 0 bis 100"),D,t(" Beispiel: "),N])])]),_:1})])}const Z=p(h,[["render",q],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mqtt/bat.vue"]]);export{Z as default};