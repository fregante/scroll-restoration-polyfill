import {getScrollTop, getScrollLeft} from 'get-scroll';
import once from 'one-event';

const attach = 'addEventListener';
const remove = 'removeEventListener';

const canControlScrollRestoration = 'scrollRestoration' in window.history;
let isPrevented = false;

/**
 * Scroll functions
 */
let lastScrollPosition;
function resetScroll() {
	window.scrollTo.apply(window, lastScrollPosition);
}
function waitForScroll() {
	lastScrollPosition = [getScrollLeft(), getScrollTop()];
	once(window, 'scroll', resetScroll);
}

/**
 * Toggle functions
 */
function event(action) {
	// run "off" only if it's prevented
	// otherwise run "off" only if it's not already prevented
	if (action === remove === isPrevented) {
		window[action]('popstate', waitForScroll);
	}
}
function allow() {
	event(remove);
	isPrevented = false;
}
function prevent() {
	event(attach);
	isPrevented = true;
}

function init() {
	Object.defineProperty(history, 'scrollRestoration', {
		enumerable: true,
		get() {
			return isPrevented ? 'manual' : 'auto';
		},
		set(ScrollRestoration) {
			switch (ScrollRestoration) {
				case 'auto': allow(); break;
				case 'manual': prevent(); break;
			}
		}
	});
}

if (!canControlScrollRestoration) {
	init();
}
