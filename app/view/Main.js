Ext.define('MyApp.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'main',
	requires: [
	],
	config: {
		layout: {
			type: 'vbox',
			align: 'center',
			pack: 'center'
		},
		items: [{
			xtype: 'button',
			text: "Scan",
			handler: function () {
				if (cordova && cordova.plugins && cordova.plugins.barcodeScanner) {
					cordova.plugins.barcodeScanner.scan (
						Ext.Function.bind (
							function (result) {
								console.log ("scan::success = " + result);
							}, this
						),

						Ext.Function.bind (
							function (error) {
								console.log ("scan::failure = " + error);
							}, this
						)
					);
				}
			}
		}]
	}
});
