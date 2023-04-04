import{C as b}from"./index-5e211303.js";import{_ as c,q as a,l as o,m as i,u as _,A as s,K as r,v as l,y as f,z as h}from"./vendor-b78ff8c0.js";import"./vendor-fortawesome-12414438.js";import"./vendor-bootstrap-760bc08d.js";import"./vendor-jquery-41669b5b.js";import"./vendor-axios-a6fb860e.js";import"./vendor-sortablejs-116030fd.js";const v={name:"OpenwbGeneralChargeConfig",mixins:[b],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/unbalanced_load","openWB/general/chargemode_config/unbalanced_load_limit"]}}},w={class:"generalChargeConfig"},B={name:"generalChargeConfigForm"},C={key:0},z={key:1};function $(n,e,W,k,V,N){const d=a("openwb-base-alert"),u=a("openwb-base-button-group-input"),g=a("openwb-base-range-input"),m=a("openwb-base-card"),p=a("openwb-base-submit-buttons");return o(),i("div",w,[_("form",B,[s(m,{title:"Allgemein"},{default:r(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(o(),i("div",C,[s(d,{subtype:"info"},{default:r(()=>[l(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(o(),i("div",z,[s(u,{title:"Begrenzung der Schieflast",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"],"onUpdate:modelValue":e[0]||(e[0]=t=>n.updateState("openWB/general/chargemode_config/unbalanced_load",t))},{help:r(()=>[l(" Wenn diese Option aktiviert ist, werden nicht dreiphasige Ladevorgänge so geregelt, dass am Netzanschlusspunkt (EVU-Zähler) die eingestellte Grenze für die Schieflast nicht überschritten wird. Hierfür muss der EVU-Zähler einzelne Phasenströme bereitstellen! Weiterhin müssen bei den Ladepunkten sowie Fahrzeugen sämtliche Angaben zur Anzahl angeschlossener/unterstützter Phasen und der Phasenrotation hinterlegt werden, damit der Regelung bekannt ist, welcher Ladevorgang welche Phase am Netzanschluss beeinflusst. ")]),_:1},8,["model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"]?(o(),f(g,{key:0,title:"Erlaubte Schieflast",min:10,max:32,step:1,unit:"A","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load_limit"],"onUpdate:modelValue":e[1]||(e[1]=t=>n.updateState("openWB/general/chargemode_config/unbalanced_load_limit",t))},{help:r(()=>[l("Hiermit wird festgelegt, welche Schieflast am Netzanschlusspunkt erlaubt ist. Bei Überschreitung werden gezielt einzelne Ladevorgänge in der Leistung begrenzt.")]),_:1},8,["model-value"])):h("v-if",!0)]))]),_:1}),s(p,{formName:"generalChargeConfigForm",onSave:e[2]||(e[2]=t=>n.$emit("save")),onReset:e[3]||(e[3]=t=>n.$emit("reset")),onDefaults:e[4]||(e[4]=t=>n.$emit("defaults"))})])])}const P=c(v,[["render",$],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralChargeConfig.vue"]]);export{P as default};