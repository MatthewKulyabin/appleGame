export class AppleGameComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners);
		this.name = options.name;
	}

	toHtml() {
		return '';
	}

	init() {

	}

	destroy() {
		
	}
}
