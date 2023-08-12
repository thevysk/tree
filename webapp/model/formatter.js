/**
 * Define a module without any dependencies
 * @fileOverview Application controller for the "BaseController".
 * A controller with basic functionalities from which the other controllers in your SAPUI5 application inherit
 * @namespace com.vysk.tree.model.formatter
 */

/**
 * Format data in teh app
 * @class
 * @extends com.vysk.tree.model.formatter
 * @constructor
 * @returns {com.vysk.tree.model.formatter} The instance of the App controller class.
 */
sap.ui.define(function () {
    "use strict";

    // Return an object with a single function called "formatValue"
    return {
         /**
         * Custom function to show a message box with "Hello World!"
         * @memberof com.vysk.tree.controller.BaseController
         * Shows a message box with hello world
         * @param {string} value -A String Value
         * @returns {boolean} A boolean value
         */
        formatValue: function (value) {
            // Convert the input value to uppercase if it exists
            return value && value.toUpperCase();
        }
    };
});
