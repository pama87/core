import{_ as m,q as s,k as _,l as g,B as r,M as h,x as u,u as y}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const T={name:"ElectricityTariffTibber",emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},data(){return{tibberAPI:"https://api.tibber.com/v1-beta/gql",tibberHomeList:[]}},methods:{updateConfiguration(o,t=void 0){this.$emit("update:configuration",{value:o,object:t})},async getTibberHomeList(){if(this.electricityTariff.configuration.token===null)return;const o='{ "query": "{viewer {homes{id address{address1 address2 address3 postalCode city country}}}}" }';try{const t=await this.axios.post(this.tibberAPI,o,{headers:{Authorization:"Bearer "+this.electricityTariff.configuration.token,"Content-Type":"application/json"}});this.tibberHomeList=t.data.data.viewer.homes.map(e=>{let i=e.address.address1;return e.address.address2&&(i=i+", "+e.address.address2),e.address.address3&&(i=i+", "+e.address.address3),i=i+`, ${e.address.postalCode} ${e.address.city}, ${e.address.country}`,{value:e.id,text:i}}),this.electricityTariff.configuration.home_id||this.updateConfiguration(this.tibberHomeList[0].value,"configuration.home_id"),this.$root.postClientMessage("Home IDs erfolgreich abgerufen.","success")}catch(t){console.error(t),this.$root.postClientMessage("Beim Abfragen der Tibber API ist ein Fehler aufgetreten!<pre>"+t+"</pre>","danger")}}}},k={class:"electricity-tariff-tibber"},v=y("a",{href:"https://developer.tibber.com/explorer",target:"_blank",rel:"noopener noreferrer"}," Tibber-Developer-Seite ",-1);function w(o,t,e,i,c,a){var l;const b=s("openwb-base-alert"),d=s("openwb-base-text-input"),f=s("openwb-base-button-input"),p=s("openwb-base-select-input");return _(),g("div",k,[r(b,{subtype:"info"},{default:h(()=>[u(" Ihren persönlichen Tibber-Token erhalten Sie über die "),v,u(" . Behandeln Sie Ihren Token wie ein Passwort, da sich darüber auch persönliche Daten aus Ihrem Tibber-Account abfragen lassen! Die Home-ID können Sie (wenn bekannt) in das Eingabefeld selbst eintragen oder nach Eingabe Ihres Token durch Klick auf den Button von der openWB ermitteln lassen. Unerlaubte Zeichen werden aus dem Token und der Home-ID automatisch gelöscht. ")]),_:1}),r(d,{title:"Token",required:"",ref:"tokenInput","model-value":e.electricityTariff.configuration.token,"onUpdate:modelValue":t[0]||(t[0]=n=>a.updateConfiguration(n,"configuration.token"))},null,8,["model-value"]),r(f,{title:"Home-IDs abrufen",buttonText:"Jetzt abrufen",subtype:"success",disabled:!((l=e.electricityTariff.configuration.token)!=null&&l.length),onButtonClicked:a.getTibberHomeList},null,8,["disabled","onButtonClicked"]),r(p,{title:"Verfügbare Home-IDs",options:c.tibberHomeList,"model-value":e.electricityTariff.configuration.home_id,"onUpdate:modelValue":t[1]||(t[1]=n=>a.updateConfiguration(n,"configuration.home_id"))},null,8,["options","model-value"]),r(d,{title:"Home-ID",required:"","model-value":e.electricityTariff.configuration.home_id,"onUpdate:modelValue":t[2]||(t[2]=n=>a.updateConfiguration(n,"configuration.home_id"))},null,8,["model-value"])])}const x=m(T,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/tibber/electricity_tariff.vue"]]);export{x as default};
