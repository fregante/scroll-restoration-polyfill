import {getScrollTop, getScrollLeft} from 'get-scroll';
import once from 'one-event';

let isManual = false;
let lastScrollPosition;

function resetScroll() {
	scrollTo.apply(window, lastScrollPosition);
}

function waitForScroll() {
	lastScrollPosition = [getScrollLeft(), getScrollTop()];
	once(window, 'scroll', resetScroll);
}

function event(action) {
	// removeEventListener only if it's manual
	// otherwise removeEventListener only if it's not already manual
	if (action === 'removeEventListener' === isManual) {
		window[action]('popstate', waitForScroll);
	}
}

if (!('scrollRestoration' in history)) {
	Object.defineProperty(history, 'scrollRestoration', {
		enumerable: true,
		get() {
			return isManual ? 'manual' : 'auto';
		},
		set(requestedState) {
			if (requestedState === 'auto') {
				event('removeEventListener');
				isManual = false;
			} else if (requestedState === 'manual') {
				event('addEventListener');
				isManual = true;
			}
		}
	});
}
