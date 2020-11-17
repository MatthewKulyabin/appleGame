class PSHeader extends AppleGameComponent {
	constructor($root) {
		super($root, {
			name: 'PSHeader',
			listeners: ['click'],
		});
	}

	toHtml() {
		return `
			<div class="playing_screen">
				<div class="playing_screen__header">
					<div class="playing_screen__header__score">
						<div>0</div>
					</div>
					<div class="playing_screen__header__gamer_name">
						<div>MrEnderNasha</div>
					</div>
					<button class="playing_screen__header__timer_pause btn btn-secondary">
						00:00
					</button>
				</div>
				<div class="playing_screen__game">
					<img src="./apple.png" alt="apple.png" width="100px" />
					<div class="playing_screen__game__trash"></div>
				</div>
			</div>
		`;
	}

	onClick() {

	}
}
