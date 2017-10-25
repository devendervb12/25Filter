sap.ui.controller("zodatafilter.ProductFilter", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zodatafilter.ProductFilter
*/
	onInit: function() {
     
		var serviceURL = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH25_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
		
		
		var oTable = this.getView().byId("idTable");
			oTable.setModel(oModel);
		// filter the products between HT-1003 to HT-1020
			
			var oTemplate = new sap.m.ColumnListItem({
				cells : [
					new sap.m.Text({ text : "{ProductID}"}),
					new sap.m.Text({text : "{Name}"}),
					new sap.m.Text({ text : "{Category}"})
				]
			});
		
			var filter = [];
			
			var oFilter1 = new sap.ui.model.Filter({
				path : "ProductID",
				operator : sap.ui.model.FilterOperator.BT,
				value1 : "HT-1003",
				value2 : "HT-1020"
			});
			
			/*var oFilter2 = new sap.ui.model.Filter({
				path : 'Category',
				operator : sap.ui.model.FilterOperator.BT,
				value1 : 'HT-1003',
				value2 : 'HT-1020'
			});*/
			
			filter.push(oFilter1);
			//filter.push(oFilter2);
			
			oTable.bindAggregation("items",{
				path : '/ProductSet',
				template : oTemplate,
				filters : filter	
			});
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zodatafilter.ProductFilter
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zodatafilter.ProductFilter
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zodatafilter.ProductFilter
*/
//	onExit: function() {
//
//	}

});