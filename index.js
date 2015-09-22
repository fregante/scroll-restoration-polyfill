'use strict';
import {prevent, allow, isPrevented} from 'prevent-popstate-scroll';

let canControlScrollRestoration = 'scrollRestoration' in window.history;

function init () {
	Object.defineProperty(history, 'scrollRestoration', {
		// enumerable: true,
		get() {
			return isPrevented;
		},
		set(ScrollRestoration) {
			switch (ScrollRestoration) {
				case 'auto': allow(); break;
				case 'manual': prevent(); break;
			}
		}
	});
}

if(!canControlScrollRestoration) {
	init();
}
