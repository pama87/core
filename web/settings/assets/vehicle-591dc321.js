import{_ as d,q as s,k as c,l as m,B as u,M as r,x as i}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const p={name:"VehicleSocRenault",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(l,e=void 0){this.$emit("update:configuration",{value:l,object:e})}}},v={class:"vehicle-soc-renault"};function f(l,e,t,g,h,o){const a=s("openwb-base-text-input");return c(),m("div",v,[u(a,{title:"Benutzername",required:"",subtype:"user","model-value":t.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.user_id"))},{help:r(()=>[i(" Der Benutzername für die Anmeldung an den Renault-Servern. ")]),_:1},8,["model-value"]),u(a,{title:"Kennwort",required:"",subtype:"password","model-value":t.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.password"))},{help:r(()=>[i(" Das Passwort für die Anmeldung an den Renault-Servern. ")]),_:1},8,["model-value"]),u(a,{title:"Land",required:"","model-value":t.vehicle.configuration.country,"onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.country"))},{help:r(()=>[i(" Land des Fahrzeugs, z.b. DE für Deutschland. ")]),_:1},8,["model-value"]),u(a,{title:"VIN","model-value":t.vehicle.configuration.vin,"onUpdate:modelValue":e[3]||(e[3]=n=>o.updateConfiguration(n,"configuration.vin"))},{help:r(()=>[i(" Die Fahrgestellnummer des Fahrzeugs falls mehrere Fahrzeuge im Account vorhanden sind. ")]),_:1},8,["model-value"])])}const w=d(p,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/renault/vehicle.vue"]]);export{w as default};
