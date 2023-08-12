/**
 * @fileOverview Application controller for the "App" view.
 * This module defines the controller class for the main application view.
 * @namespace com.vysk.tree.controller.App
 */

/**
 * Application controller for the "App" view.
 * @class
 * @extends com.vysk.tree.controller.BaseController
 * @constructor
 * @param {com.vysk.tree.controller.BaseController} BaseController - The base controller module.
 * @returns {com.vysk.tree.controller.App} The instance of the App controller class.
 */
sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("com.vysk.tree.controller.App", {

		/**
		 * Called when the controller is initialized.
		 * This function is used to apply content density mode to the root view.
		 * @function
		 * @memberof com.vysk.tree.controller.App
		 * @public
		 */
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});
