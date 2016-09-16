import {getScrollTop, getScrollLeft} from 'get-scroll';
import once from 'one-event';

const attach = 'addEventListener';
const remove = 'removeEventListener';

let isPrevented = false;
let lastScrollPosition;

function resetScroll() {
	window.scrollTo.apply(window, lastScrollPosition);
}

function waitForScroll() {
	lastScrollPosition = [getScrollLeft(), getScrollTop()];
	once(window, 'scroll', resetScroll);
}

function event(action) {
	// run "off" only if it's prevented
	// otherwise run "off" only if it's not already prevented
	if (action === remove === isPrevented) {
		window[action]('popstate', waitForScroll);
	}
}

if (!('scrollRestoration' in window.history)) {
	Object.defineProperty(history, 'scrollRestoration', {
		enumerable: true,
		get() {
			return isPrevented ? 'manual' : 'auto';
		},
		set(ScrollRestoration) {
			switch (ScrollRestoration) {
				case 'auto':
					event(remove);
					isPrevented = false;
					break;
				case 'manual':
					event(attach);
					isPrevented = true;
					break;
				default:
			}
		}
	});
}
