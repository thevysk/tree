/**
 * Define module dependencies
 * @fileOverview Application controller for the "BaseController".
 * A controller with basic functionalities from which the other controllers in your SAPUI5 application inherit
 * @namespace com.vysk.tree.controller.Main
 */

/**
 * A controller with basic functionalities from which the other controllers in your SAPUI5 application inherit
 * @class
 * @extends com.vysk.tree.controller.BaseController
 * @constructor
 * @param {com.vysk.tree.controller.BaseController} BaseController - The base controller module.
 * @returns {com.vysk.tree.controller.Main} The instance of the App controller class.
 */
sap.ui.define(["./BaseController", "sap/m/MessageBox", 'sap/ui/model/json/JSONModel'], function (BaseController, MessageBox, JSONModel) {
    "use strict";

    // Define the controller by extending the BaseController
    return BaseController.extend("com.vysk.tree.controller.Main", {
        // Event handler for view initialization
        onInit: function (evt) {
            // Load and set the JSON data model for the view
            var oModel = new JSONModel(sap.ui.require.toUrl("com/vysk/tree/data/tree.json"));
            this.getView().setModel(oModel); // Set the JSON model to the view
        },
         /**
         * Custom function to show a message box with "Hello World!"
         * @memberof com.vysk.tree.controller.BaseController
         * Shows a message box with hello world
         */
        
        sayHello: function () {
            MessageBox.show("Hello World!");
        },
        // You can add more methods here if needed
        
    }); // End of controller definition
});
