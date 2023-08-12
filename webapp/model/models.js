/**
 * Define a module without any dependencies
 * @fileOverview Application controller for the "BaseController".
 * A controller with basic functionalities from which the other controllers in your SAPUI5 application inherit
 * @namespace com.vysk.tree.model.model
 */

/**
 * Format data in teh app
 * @class
 * @constructor
 * @returns {com.vysk.tree.model.model} The instance of the App controller class.
 */

// Define a module with dependencies on "sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", and "sap/ui/Device"
sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
    "use strict";

    // Return an object with a single function called "createDeviceModel"
    return {
        createDeviceModel: function () {
            // Create a JSONModel instance using the "Device" object from the "sap/ui/Device" module
            var oModel = new JSONModel(Device);
            
            // Set the default binding mode of the model to OneWay
            oModel.setDefaultBindingMode(BindingMode.OneWay);
            
            // Return the created model
            return oModel;
        }
    };
});
