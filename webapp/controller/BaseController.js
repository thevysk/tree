// 
/**
 * Define module dependencies
 * @fileOverview Application controller for the "BaseController".
 * A controller with basic functionalities from which the other controllers in your SAPUI5 application inherit
 * @namespace com.vysk.tree.controller.BaseController
 */

/**
 * Acontroller with basic functionalities from which the other controllers in your SAPUI5 application inherit
 * @class
 * @extends sap.ui.core.mvc.Controller
 * @constructor
 * @param {sap.ui.core.mvc.Controller} Controller - The controller module.
 * @param {sap.ui.core.UIComponent} UIComponent  - UIComponent
 * @param {sap.ui.core.routing.History} History - History
 * @returns {com.vysk.tree.controller.BaseController} The instance of the App controller class.
 */
sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent", "sap/ui/core/routing/History"], function (Controller, UIComponent, History) {
    "use strict";

    // Define the BaseController
    return Controller.extend("com.vysk.controller.BaseController", {

        /**
         * Convenience method for accessing the component of the controller's view.
         * @returns {sap.ui.core.Component} The component of the controller's view
         * @memberof com.vysk.tree.controller.BaseController
         */
        getOwnerComponent: function () {
            return Controller.prototype.getOwnerComponent.call(this);
        },

        /**
         * Convenience method to get the components' router instance.
         * @returns {sap.m.routing.Router} The router instance
         * @memberof com.vysk.tree.controller.BaseController
         */
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },

        /**
         * Convenience method for getting the i18n resource bundle of the component.
         * @returns {sap.base.i18n.ResourceBundle} The i18n resource bundle of the component
         * @memberof com.vysk.tree.controller.BaseController
         */
        getResourceBundle: function () {
            var oModel = this.getOwnerComponent().getModel("i18n");
            return oModel.getResourceBundle();
        },

        /**
         * Convenience method for getting the view model by name in every controller of the application.
         * @param {string} [sName] The model name
         * @returns {sap.ui.model.Model} The model instance
         * @memberof com.vysk.tree.controller.BaseController
         */
        getModel: function (sName) {
            return this.getView().getModel(sName);
        },

        /**
         * Convenience method for setting the view model in every controller of the application.
         * @param {sap.ui.model.Model} oModel The model instance
         * @param {string} [sName] The model name
         * @returns {sap.ui.core.mvc.Controller} The current base controller instance
         * @memberof com.vysk.tree.controller.BaseController
         */
        setModel: function (oModel, sName) {
            this.getView().setModel(oModel, sName);
            return this;
        },

        /**
         * Convenience method for triggering the navigation to a specific target.
         * @public
         * @param {string} sName Target name
         * @param {object} [oParameters] Navigation parameters
         * @param {boolean} [bReplace] Defines if the hash should be replaced or set in browser history
         */
        navTo: function (sName, oParameters, bReplace) {
            this.getRouter().navTo(sName, oParameters, undefined, bReplace);
        },

        /**
         * Convenience event handler for navigating back.
         * If there is a history entry, go one step back in the browser history.
         * If not, replace the current entry with the main route.
         * 	
		 * Called when the controller is initialized.
		 * This function is used to apply content density mode to the root view.
		 * @function
		 * @memberof com.vysk.tree.controller.App
		 * @public
		 */

        onNavBack: function () {
            var sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("main", {}, undefined, true);
            }
        }
    }); // End of BaseController definition
});
