import once from 'one-event';
import {getScrollTop, getScrollLeft} from 'get-scroll';

let state = 'auto';

function waitForScroll() {
	once(window, 'scroll', scrollTo.bind(window, getScrollLeft(), getScrollTop()));
}

if (!('scrollRestoration' in history)) {
	Object.defineProperty(history, 'scrollRestoration', {
		enumerable: true,
		get: () => state,
		set: requestedState => {
			if (requestedState === state) {
				return;
			}
			if (requestedState === 'auto') {
				window.removeEventListener('popstate', waitForScroll);
				state = requestedState;
			} else if (requestedState === 'manual') {
				window.addEventListener('popstate', waitForScroll);
				state = requestedState;
			}
		}
	});
}
