import{C as B}from"./index-643e9eb5.js";import{l as S,P as V,Z as z,_ as k,F as y}from"./vendor-fortawesome-d651dd92.js";import{_ as M,q as g,k as s,l as u,u as o,B as i,M as a,x as r,z as v,A as m}from"./vendor-b3afda6d.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";S.add(V,z,k);const E={name:"OpenwbPVChargeConfig",mixins:[B],components:{FontAwesomeIcon:y},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/pv_charging/control_range","openWB/general/chargemode_config/pv_charging/feed_in_yield","openWB/general/chargemode_config/pv_charging/switch_on_threshold","openWB/general/chargemode_config/pv_charging/switch_on_delay","openWB/general/chargemode_config/pv_charging/switch_off_threshold","openWB/general/chargemode_config/pv_charging/switch_off_delay","openWB/general/chargemode_config/pv_charging/phases_to_use","openWB/general/chargemode_config/pv_charging/phase_switch_delay","openWB/general/chargemode_config/pv_charging/bat_mode","openWB/general/chargemode_config/pv_charging/bat_power_reserve","openWB/general/chargemode_config/pv_charging/bat_power_reserve_active","openWB/general/chargemode_config/pv_charging/bat_power_discharge","openWB/general/chargemode_config/pv_charging/bat_power_discharge_active","openWB/general/chargemode_config/pv_charging/min_bat_soc"],calculatedControlMode:void 0}},computed:{controlMode:{get(){if(this.calculatedControlMode!==void 0)return this.calculatedControlMode;const n="openWB/general/chargemode_config/pv_charging/control_range";let e=this.$store.state.mqtt[n];var h="individual";return typeof e<"u"&&(e[0]===-230&&e[1]===0?h="export":e[0]===0&&e[1]===230?h="import":e[0]===-115&&e[1]===115?h="balanced":h="individual"),h},set(n){const e="openWB/general/chargemode_config/pv_charging/control_range";switch(this.calculatedControlMode=n,n){case"export":this.updateState(e,[-230,0]);break;case"import":this.updateState(e,[0,230]);break;case"balanced":this.updateState(e,[-115,115]);break}}},batMode(){return this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_mode"]}},watch:{controlMode(n){this.calculatedControlMode=n}}},C={class:"pvChargeConfig"},q={name:"pvChargeConfigForm"},L={key:0},R={key:1},A=o("br",null,null,-1),P=o("br",null,null,-1),U=o("hr",null,null,-1),$=o("br",null,null,-1),F=o("br",null,null,-1),D=o("hr",null,null,-1),N=o("br",null,null,-1),I=o("br",null,null,-1),O=o("hr",null,null,-1),T=o("br",null,null,-1),Z=o("br",null,null,-1),H=o("br",null,null,-1),G=o("br",null,null,-1),J={key:0},j={key:1},K={key:0},Q={key:1},X=o("p",null,' Sofern ein Hausstromspeicher (im Folgenden "Speicher" genannt) im Energiesystem verbaut ist, kann dieser beim Fahrzeugladen mit berücksichtigt werden. Dies erfolgt passiv über die Berücksichtigung der Speicherleistungswerte und des Speicher-SoC. Eine aktive Speichersteuerung durch openWB ist aktuell mangels Speicherschnittstelle nicht möglich. ',-1),Y={key:0},x=o("br",null,null,-1);function ee(n,e,h,ne,te,d){const _=g("openwb-base-alert"),p=g("openwb-base-button-group-input"),l=g("openwb-base-number-input"),b=g("openwb-base-card"),f=g("openwb-base-range-input"),c=g("font-awesome-icon"),w=g("openwb-base-heading"),W=g("openwb-base-submit-buttons");return s(),u("div",C,[o("form",q,[i(b,{title:"Regelparameter"},{default:a(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),u("div",L,[i(_,{subtype:"info"},{default:a(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),u("div",R,[i(p,{title:"Regelmodus",buttons:[{buttonValue:"export",text:"Einspeisung"},{buttonValue:"import",text:"Bezug"},{buttonValue:"balanced",text:"Ausgewogen"},{buttonValue:"individual",text:"Individuell"}],modelValue:d.controlMode,"onUpdate:modelValue":e[0]||(e[0]=t=>d.controlMode=t)},{help:a(()=>[r(" Der Regelbereich wird auf den gesamten Überschuss angewendet, bevor die PV-Regelung durchgeführt wird. D.h. der Regelbereich wird auf alle Einstellungen für das PV-Laden angewendet und nur einmal unabhängig von der Anzahl der angesteckten Fahrzeuge. Liegt der Überschuss im vorgegebenen Regelbereich, wird nicht nachgeregelt. Liegt der Überschuss außerhalb des Regelbereichs, wird in die Mitte des Regelbereichs nachgeregelt."),A,r(' "Einspeisung" definiert einen Bereich mit minimaler Einspeisung (-230W, 0W), "Bezug" mit minimalem Netzbezug (0W, 230W), "Ausgewogen" mit ausgewogenem Netzbezug (-115W, 115W). Mit der Auswahl "individuell" kann ein eigener Regelbereich definiert werden.'),P,r(" Bei Speichervorrang erzeugt die Regelung bei Bedarf unabhängig vom eingestellten Regelmodus Einspeisung, damit der Speicher seine Ladeleistung erhöht. ")]),_:1},8,["modelValue"]),i(l,{disabled:d.controlMode!=="individual",readonly:d.controlMode!=="individual",title:"Minimum",step:.005,unit:"kW","model-value":Array.isArray(n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][0]/1e3:void 0,"onUpdate:modelValue":e[1]||(e[1]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"0"))},{help:a(()=>[r(" Untere Grenze des Regelbereichs. ")]),_:1},8,["disabled","readonly","model-value"]),i(l,{disabled:d.controlMode!=="individual",readonly:d.controlMode!=="individual",title:"Maximum",step:.005,unit:"kW","model-value":Array.isArray(n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][1]/1e3:void 0,"onUpdate:modelValue":e[2]||(e[2]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"1"))},{help:a(()=>[r("Obere Grenze des Regelbereichs.")]),_:1},8,["disabled","readonly","model-value"]),U,i(l,{title:"Einschaltschwelle",min:0,step:.05,unit:"kW","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_threshold"]/1e3,"onUpdate:modelValue":e[3]||(e[3]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_on_threshold",t*1e3))},{help:a(()=>[r(" Wird der Regelbereich in Richtung Einspeisung um diese Leistung überschritten, so wird der Ladevorgang gestartet."),$,r(" Dieser Wert wird pro Phase genutzt und ist daher immer für eine Phase anzugeben. ")]),_:1},8,["model-value"]),i(l,{title:"Einschaltverzögerung",min:0,step:1,unit:"s","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_delay"],"onUpdate:modelValue":e[4]||(e[4]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_on_delay",t))},{help:a(()=>[r(" Die Einschaltschwelle muss für die hier angegebene Zeit dauerhaft überschritten werden, bevor ein Ladevorgang gestartet wird."),F,r(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird weiter geladen, wenn die Abschaltschwelle nicht unterschritten wird. ")]),_:1},8,["model-value"]),D,i(l,{title:"Abschaltschwelle",step:.05,unit:"kW","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_threshold"]/1e3,"onUpdate:modelValue":e[5]||(e[5]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_off_threshold",t*1e3))},{help:a(()=>[r(" Wird der Regelbereich in Richtung Netzbezug um diese Leistung überschritten, so wird der Ladevorgang beendet."),N,r(" Dieser Wert ist unabhängig von der Anzahl genutzter Phasen. ")]),_:1},8,["model-value"]),i(l,{title:"Abschaltverzögerung",min:0,step:1,unit:"s","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_delay"],"onUpdate:modelValue":e[6]||(e[6]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_off_delay",t))},{help:a(()=>[r(" Die Abschaltschwelle muss für die hier angegebene Zeit dauerhaft unterschritten werden, bevor ein Ladevorgang beendet wird."),I,r(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird die Ladung sofort beendet, wenn die Abschaltschwelle unterschritten wird. ")]),_:1},8,["model-value"]),O,i(l,{title:"Regelpunkt Einspeisegrenze",min:0,step:.05,unit:"kW","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/feed_in_yield"]/1e3,"onUpdate:modelValue":e[7]||(e[7]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/feed_in_yield",t*1e3))},{help:a(()=>[r(" Ein Wert größer 0kW bewirkt, dass weniger PV-Leistung zum Laden benutzt wird."),T,r(" Die Nutzung dieser Option ergibt nur Sinn, wenn ein Wechselrichter mit separatem Smart-Meter am EVU-Punkt verbaut ist (nicht der originale Zähler des Versorgers!), welches eine dynamische Begrenzung der Einspeiseleistung am EVU-Punkt durch den PV-Wechselrichter bietet (bitte bei ev. Problemen immer vorab prüfen lassen)."),Z,r(' Ist eine Einspeiseleistungsreduzierung verbaut (in vielen älteren, privaten Einspeiseverträgen z.B. als 70% Regelung bekannt), wird mit Eingabe des Wertes "Regelpunkt Einspeisegrenze" ein eigenverbrauchsoptimiertes Fahrzeugladen mit PV-Überschussenergie möglich, die sonst abgeregelt werden würde (Nutzung der PV-Peaks).'),H,r(' Wird in einem "Ladeprofil" die Option "Einspeisegrenze beachten" eingeschaltet, so wird der Regelpunkt auf diesen Wert verschoben und die Ladung startet erst, wenn der hinterlegte Wert "Regelpunkt Einspeisegrenze" überschritten wird.'),G,r(" Zur optimalen Eigenverbrauchssteuerung sollte der Wert einige hundert Watt UNTER der im Wechselrichter hinterlegten EVU-Einspeiseleistungsgrenze liegen, damit openWB die Ladung freigibt, BEVOR der Wechselrichter begrenzt wird. ")]),_:1},8,["model-value"])]))]),_:1}),i(b,{title:"Phasenumschaltung"},{default:a(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),u("div",J,[i(_,{subtype:"info"},{default:a(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),u("div",j,[i(p,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"],"onUpdate:modelValue":e[8]||(e[8]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/phases_to_use",t))},{help:a(()=>[r(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "PV-Laden" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um den verfügbaren Überschuss in die Fahrzeuge zu laden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen einer und drei Phasen (s.g. 1p3p). ')]),_:1},8,["model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"]==0?(s(),v(f,{key:0,title:"Verzögerung automat. Phasenumschaltung",min:1,max:15,step:1,unit:"Min.","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phase_switch_delay"],"onUpdate:modelValue":e[9]||(e[9]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/phase_switch_delay",t))},{help:a(()=>[r(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung gewechselt. ")]),_:1},8,["model-value"])):m("",!0)]))]),_:1}),i(b,{title:"Speicher-Beachtung"},{default:a(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),u("div",K,[i(_,{subtype:"info"},{default:a(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),u("div",Q,[i(p,{title:"Laden mit Überschuss",buttons:[{buttonValue:"ev_mode"},{buttonValue:"bat_mode"},{buttonValue:"min_soc_bat_mode"}],modelValue:d.batMode,"onUpdate:modelValue":[e[10]||(e[10]=t=>d.batMode=t),e[11]||(e[11]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_mode",t))],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_mode"]},{"label-ev_mode":a(()=>[i(c,{"fixed-width":"",icon:["fas","car-side"]}),r(" Fahrzeuge ")]),"label-bat_mode":a(()=>[i(c,{"fixed-width":"",icon:["fas","fa-car-battery"]}),r(" Speicher ")]),"label-min_soc_bat_mode":a(()=>[i(c,{"fixed-width":"",icon:["fas","fa-battery-half"]}),r(" Mindest-SoC des Speichers ")]),help:a(()=>[X,o("p",null,[r(' Bei Auswahl " '),i(c,{"fixed-width":"",icon:["fas","car-side"]}),r(' Fahrzeuge" wird der gesamte Überschuss in das EV geladen. Ist die maximale Ladeleistung der Fahrzeuge erreicht und es wird eingespeist, wird dieser Überschuss in den Speicher geladen. ')]),o("p",null,[r(' Bei Auswahl " '),i(c,{"fixed-width":"",icon:["fas","fa-car-battery"]}),r(' Speicher" wird der gesamte Überschuss in den Speicher geladen. Ist die maximale Ladeleistung des Speichers erreicht und es wird eingespeist, wird dieser Überschuss unter Beachtung der Einschaltschwelle in die Fahrzeuge geladen. ')]),o("p",null,[r(' Bei Auswahl " '),i(c,{"fixed-width":"",icon:["fas","fa-battery-half"]}),r(' Mindest-SoC des Speichers" wird der Überschuss bis zum Mindest-SoC in den Speicher geladen. Ist die maximale Ladeleistung des Speichers erreicht und es wird eingespeist, wird dieser Überschuss in die Fahrzeuge geladen. Wird der Mindest-SoC überschritten, wird der Überschuss ins Fahrzeug geladen. ')])]),_:1},8,["modelValue","model-value"]),d.batMode==="min_soc_bat_mode"?(s(),u("div",Y,[i(f,{title:"Mindest-SoC des Speichers",min:0,max:100,step:1,unit:"%",required:n.required,"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/min_bat_soc"],"onUpdate:modelValue":e[12]||(e[12]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/min_bat_soc",t))},null,8,["required","model-value"]),i(w,null,{default:a(()=>[r("Speicher-SoC unterhalb Mindest-SoC")]),_:1}),i(p,{title:"Ladeleistung für Speicher reservieren",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:n.batPowerReserveActive,"onUpdate:modelValue":[e[13]||(e[13]=t=>n.batPowerReserveActive=t),e[14]||(e[14]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_reserve_active",t))],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve_active"]},{help:a(()=>[r("ACHTUNG: Der hier eingestellte Wert darf die maximale Ladeleistung des Speichers nicht überschreiten."),x,r(" Wird der Mindest-SoC des Speichers nicht erreicht, wird der Speicher mit der hier eingestellte Leistung geladen. Mit dem verbleibenden Überschuss werden die Fahrzeuge geladen.")]),_:1},8,["modelValue","model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve_active"]?(s(),v(l,{key:0,title:"Reserve Ladeleistung",min:.1,step:.1,unit:"kW",required:n.required,"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve"]/1e3,"onUpdate:modelValue":e[15]||(e[15]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_reserve",t*1e3))},null,8,["required","model-value"])):m("",!0),i(w,null,{default:a(()=>[r("Speicher-SoC oberhalb Mindest-SoC")]),_:1}),i(p,{title:"Entladung des Speichers erlauben",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:n.batPowerReserveActive,"onUpdate:modelValue":[e[16]||(e[16]=t=>n.batPowerReserveActive=t),e[17]||(e[17]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_discharge_active",t))],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge_active"]},{help:a(()=>[r("Wird der Mindest-SoC überschritten, wird der Überschuss ins Fahrzeug geladen und der Speicher mit der hier eingestellten Leistung in die Fahrzeuge entladen. Die Entladeleistung des Speichers wird dem Überschuss zum Erreichen der Einschaltschwelle hinzugerechnet.")]),_:1},8,["modelValue","model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge_active"]?(s(),v(l,{key:1,title:"Erlaubte Entladeleistung",min:.1,step:.1,unit:"kW",required:n.required,"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge"]/1e3,"onUpdate:modelValue":e[18]||(e[18]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_discharge",t*1e3))},null,8,["required","model-value"])):m("",!0)])):m("",!0)]))]),_:1}),i(W,{formName:"pvChargeConfigForm",onSave:e[19]||(e[19]=t=>n.$emit("save")),onReset:e[20]||(e[20]=t=>n.$emit("reset")),onDefaults:e[21]||(e[21]=t=>n.$emit("defaults"))})])])}const ge=M(E,[["render",ee],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/PVChargeConfig.vue"]]);export{ge as default};
