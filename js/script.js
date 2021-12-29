;(function() {
	'use strict';
	class Tabsmenu {
		constructor(tabmenu) {
			this.tabmenu = tabmenu;
			this.blocks = this.tabmenu.nextElementSibling.querySelectorAll('.container > div');
			this.tabs = this.tabmenu.querySelectorAll('li');
			this.tabmenu.addEventListener('click', this.swithTab.bind(this));
		}
		swithTab(e) {
			let target = e.target;
			if (target.tagName !== 'LI') return;
			const i = [].indexOf.call(this.tabs, target);
			for (let tab of this.tabs) {
				tab.classList.remove('active');
			}
			this.tabs[i].classList.add('active');
			this.switchBloks(i);
		}
		switchBloks(i) {
			for (let block of this.blocks) {
				block.hidden = true;
			}
			this.blocks[i].hidden = false;
		}
	}
	const tabsmenu = document.querySelectorAll('.tabsmenu');
	if (!tabsmenu) return;
	for (let menu of tabsmenu) {
		const tab = new Tabsmenu(menu);
	}
})();