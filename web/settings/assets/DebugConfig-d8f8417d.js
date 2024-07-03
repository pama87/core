import{C as k}from"./index-9a113fda.js";import{l as B,a1 as D,a2 as L,F as W}from"./vendor-fortawesome-b013cb5c.js";import{_ as f,q as s,k as r,z as w,M as i,B as a,p as C,O as x,u as v,y as F,l as _,I as y,J as N,x as b}from"./vendor-b3afda6d.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";B.add(D,L);const $={name:"OpenwbLogCard",components:{FontAwesomeIcon:W},props:{title:{type:String,required:!0},logFile:{type:String,required:!0}},data(){return{logData:"-- noch nicht geladen --",loading:!1}},methods:{async getFilePromise(n,e=!1){return this.axios.get(location.protocol+"//"+location.host+n).then(t=>t.data).catch(t=>t.response?t.response.status==404&&e?"":`A 404 is expected if running node.js dev server!
`+t.response.status+" "+t.response.statusText+": "+t.response.request.responseURL:t.request?t.request:t.message)},loadLog(n){this.logData="wird aktualisiert...",this.loading=!0;var e="";this.getFilePromise(n+".1",!0).then(t=>{e=t,this.getFilePromise(n).then(d=>{e+=d,this.logData=e,this.loading=!1})})}}},S={class:"log-data mb-0"};function I(n,e,t,d,l,g){const u=s("font-awesome-icon"),p=s("openwb-base-avatar"),m=s("openwb-base-card");return r(),w(m,{title:t.title,class:"log-card mt-3",collapsible:!0,collapsed:!0},{actions:i(()=>[a(p,{class:"bg-success clickable",onClick:e[0]||(e[0]=x(c=>g.loadLog(t.logFile),["stop"]))},{default:i(()=>[a(u,{"fixed-width":"",class:C(l.loading?"fa-spin-pulse":""),icon:l.loading?["fas","spinner"]:["fas","file-download"]},null,8,["class","icon"])]),_:1})]),default:i(()=>[v("pre",S,F(l.logData),1)]),_:1},8,["title"])}const P=f($,[["render",I],["__scopeId","data-v-a320c3d6"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/debug_config/LogCard.vue"]]),q={name:"OpenwbDebuggingView",mixins:[k],components:{OpenwbLogCard:P},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/debug_level"],logFiles:[{title:"Main-Log",fileName:"/openWB/ramdisk/main.log"},{title:"Log des internen Ladepunktes",fileName:"/openWB/ramdisk/internal_chargepoint.log"},{title:"MQTT-Log",fileName:"/openWB/ramdisk/mqtt.log"},{title:"SoC-Log",fileName:"/openWB/ramdisk/soc.log"},{title:"Protokoll des letzten Updates",fileName:"/openWB/data/log/update.log"},{title:"Protokoll des Remote-Dienstes",fileName:"/openWB/ramdisk/remote_support.log"},{title:"Protokoll des SmartHome Dienstes",fileName:"/openWB/ramdisk/smarthome.log"},{title:"Protokoll der Datenmigration",fileName:"/openWB/data/log/data_migration.log"}]}}},z={class:"debugging"},V={name:"debugConfigForm"};function T(n,e,t,d,l,g){const u=s("openwb-base-button-group-input"),p=s("openwb-base-alert"),m=s("openwb-base-card"),c=s("openwb-base-submit-buttons"),h=s("openwb-log-card");return r(),_("div",z,[v("form",V,[a(m,{title:"Protokollierung"},{default:i(()=>[a(u,{title:"Debug Level",buttons:[{buttonValue:30,text:"Warnungen und Fehler"},{buttonValue:20,text:"Info"},{buttonValue:10,text:"Details"}],"model-value":n.$store.state.mqtt["openWB/system/debug_level"],"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateState("openWB/system/debug_level",o))},{help:i(()=>[b(' Wenn der Debug Level auf "Info" oder "Details" gesetzt wird, werden mehr Informationen in die Logdateien geschrieben. Im normalen Betrieb sollte immer "Warnungen und Fehler" gewählt werden, um die Schreibvorgänge auf der SD-Karte zu reduzieren. ')]),_:1},8,["model-value"]),a(p,{subtype:"warning"},{default:i(()=>[b(' Achtung! In den Einstellungen "Info" und "Details" können in den Logdateien sensible Daten wie Benutzernamen und Kennwörter enthalten sein. Diese sollten vor dem Veröffentlichen z.B. im Forum unkenntlich gemacht werden. Private IP-Adressen (z.B. 192.168.x.x) müssen nicht maskiert werden, da diese nicht über das Internet erreichbar sind. ')]),_:1})]),_:1}),a(c,{formName:"debugConfigForm",onSave:e[1]||(e[1]=o=>n.$emit("save")),onReset:e[2]||(e[2]=o=>n.$emit("reset")),onDefaults:e[3]||(e[3]=o=>n.$emit("defaults"))})]),(r(!0),_(y,null,N(l.logFiles,o=>(r(),w(h,{key:o.fileName,title:o.title,"log-file":o.fileName},null,8,["title","log-file"]))),128))])}const j=f(q,[["render",T],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/DebugConfig.vue"]]);export{j as default};
