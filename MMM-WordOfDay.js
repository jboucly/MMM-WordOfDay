// ################################################################ \\
// # 					MMM-WordOfDay							  # \\
// # 			Show on magic mirror a word of the day 		 	  # \\
// ################################################################ \\

Module.register("MMM-Pages-Screencast", {
	defaults: {},

	start: function () {
		this.logMessage('Started.');
	},

	notificationReceived: function (notification, payload, sender) {
		Log.info(notification);
	},

	/**
	 * Function to log message
	 * @param {String} message
	 * @param {String} type
	 */
	logMessage: function (message, type) {
		switch (type) {
			case 'erorr':
				Log.error(`Module ${this.name} | ${message}`);
				break;
			default:
				Log.info(`Module ${this.name} | ${message}`);
				break;
		}
	},
});
