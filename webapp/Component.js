sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("Arto.scratchApp.Component", {
      metadata : {
         rootView: {
            "viewName": "Arto.scratchApp.view.App",
            "type": "XML",
            "async": true,
            "id": "app"
         }
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
//         sap.ui.getCore().setModel(this.getModel());
		this.getRouter().initialize();

      }
   });
});