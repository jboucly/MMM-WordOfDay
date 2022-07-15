// ################################################################ \\
// # 					MMM-WordOfDay							  # \\
// # 			Show on magic mirror a word of the day 		 	  # \\
// ################################################################ \\

Module.register("MMM-WordOfDay", {
	defaults: {
		wordOfDayList: [
			'Todo list: DO NOTHING',
			'Don\'t forget to buy bread!',
			'Dentist appointment 10 a.m.'
		],
		wordChangeInterval: 3000,
	},

	divElement: null,
	loadIndexWord: 0,

	start: function () {
		this.logMessage('Started.');
		this.logMessage(this.config.wordChangeInterval);

		setTimeout(() => {
			setInterval(() => this.updateWordOfDay(), this.config.wordChangeInterval)
		}, 5000);
	},

	/**
	 * Reload DOM
	 * @returns {HTMLDivElement} - Module HTML element
	 */
	getDom: function () {
		this.divElement = document.createElement("div");

		if (this.error != null) {
			this.divElement.innerHTML = this.translate(this.error);
		}
		this.updateWordOfDay(true);

		return this.divElement;
	},

	updateWordOfDay: function (isFirstLoad) {
		if (this.config.wordOfDayList.length === this.loadIndexWord) this.loadIndexWord = 0;
		this.divElement.innerHTML = this.config.wordOfDayList[this.loadIndexWord];
		this.loadIndexWord++;

		if (isFirstLoad === undefined || !isFirstLoad) {
			this.updateDom();
		}
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
