sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("Arto.scratchApp.controller.Products", {
   	onInit: function () {
   		MessageToast.show("loaded!");

	
   	},
      onSelectionChange: function (oEvent) {
      	MessageToast.show("lotain");          
		var oItem = oEvent.getSource(),
		matNr = oItem.getBindingContext().getProperty("MaterialNr"),
		oRouter = sap.ui.core.UIComponent.getRouterFor(this),
		oRout2 = this.getRouter();
		var sam = (oRouter == oRout2);
		this.getRouter().navTo("matDetail", { matNr : matNr });
      }
   });
});