// Define a module with dependencies on "sap/ui/core/UIComponent", "sap/ui/Device", and "./model/models"
sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "./model/models"], function (UIComponent, Device, models) {
    "use strict";

    // Extend UIComponent to create a custom component named "com.vysk.tree.Component"
    return UIComponent.extend("com.vysk.tree.Component", {
        metadata: {
            manifest: "json" // Load component configuration from manifest.json
        },

        // Initialization function for the component
        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.call(this);

            // Create the device model using the function from "./model/models"
            this.setModel(models.createDeviceModel(), "device");

            // Initialize the router to create views based on the URL/hash
            this.getRouter().initialize();
        },

        /**
         * Method to determine the content density class based on device and touch support
         * @public
         * @returns {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy'
         */
        getContentDensityClass: function () {
            if (this.contentDensityClass === undefined) {
                if (
                    document.body.classList.contains("sapUiSizeCozy") ||
                    document.body.classList.contains("sapUiSizeCompact")
                ) {
                    this.contentDensityClass = "";
                } else if (!Device.support.touch) {
                    // Apply "compact" mode if touch is not supported
                    this.contentDensityClass = "sapUiSizeCompact";
                } else {
                    // "cozy" in case of touch support
                    // Default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                    this.contentDensityClass = "sapUiSizeCozy";
                }
            }
            return this.contentDensityClass;
        }
    });
});
