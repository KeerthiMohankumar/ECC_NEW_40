//@ui5-bundle com/sap/bp/BusinessPartners/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/sap/bp/BusinessPartners/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.sap.bp.BusinessPartners.Component",{metadata:{manifest:"json"}})});
},
	"com/sap/bp/BusinessPartners/i18n/i18n.properties":'# This is the resource bundle for businesspartners\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Business Partner Validation\n\n#YDES: Application description\nappDescription=fiori elements application for s4 extension business partner validation\n',
	"com/sap/bp/BusinessPartners/manifest.json":'{"_version":"1.15.0","sap.app":{"id":"com.sap.bp.BusinessPartners","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","ach":"CA-UI5-FE","dataSources":{"mainService":{"uri":"sales/","type":"OData","settings":{"annotations":["annotation"],"odataVersion":"4.0","localUri":"localService/metadata.xml"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"offline":false,"resources":"resources.json","sourceTemplate":{"id":"ui5template.fiorielements.v4.lrop","version":"1.0.0"},"crossNavigation":{"inbounds":{"intent1":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"partners","action":"display","title":"Business Partners","subTitle":"Manage Business Partners","icon":"sap-icon://project-definition-triangle"}}}},"sap.cloud":{"public":true,"service":"com.sap.bp.BusinessPartners.one"},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"resources":{"js":[],"css":[]},"dependencies":{"minUI5Version":"1.76.0","libs":{"sap.fe.templates":{},"sap.ui.fl":{}}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"":{"dataSource":"mainService","settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"routing":{"routes":[{"pattern":"","name":"NotificationList","target":["NotificationList"]},{"pattern":"Notifications({key})","name":"NotificationObjectPage","target":["NotificationObjectPage"]},{"pattern":"Notifications({key})/addresses({key2}):?query:","name":"AddressObjectPage_address","target":"AddressObjectPage_address"}],"targets":{"NotificationList":{"type":"Component","id":"NotificationList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Notifications","variantManagement":"Page","navigation":{"Notifications":{"detail":{"route":"NotificationObjectPage"}}}}}},"NotificationObjectPage":{"type":"Component","id":"NotificationObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"entitySet":"Notifications","navigation":{}}}},"AddressObjectPage_address":{"type":"Component","id":"AddressObjectPage_address","name":"sap.fe.templates.ObjectPage","options":{"settings":{"entitySet":"Addresses","navigation":{}}}}},"config":{}},"contentDensities":{"compact":true,"cozy":true}},"sap.platform.abap":{"_version":"1.1.0","uri":""},"sap.platform.hcp":{"_version":"1.1.0","uri":""},"sap.fiori":{"_version":"1.1.0","registrationIds":[],"archeType":"transactional"}}'
}});
