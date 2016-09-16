/*! npm.im/scroll-restoration-polyfill */
(function () {
	'use strict';

	function getScrollTop() {
		return window.pageYOffset || document.body.scrollTop;
	}
	function getScrollLeft() {
		return window.pageXOffset || document.body.scrollLeft;
	}

	/*! npm.im/one-event */
	function once(target, type, listener, useCapture) {
		target.addEventListener(type, listener, useCapture);
		target.addEventListener(type, function selfRemoving() {
			target.removeEventListener(type, listener, useCapture);
			target.removeEventListener(type, selfRemoving, useCapture);
		}, useCapture);
	}

	once.promise = function (target, type, useCapture) { return new Promise(function (resolve) { return once(target, type, resolve, useCapture); }); };

	var attach = 'addEventListener';
	var remove = 'removeEventListener';

	var canControlScrollRestoration = 'scrollRestoration' in window.history;
	var isPrevented = false;

	/**
	 * Scroll functions
	 */
	var lastScrollPosition;
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
			get: function get() {
				return isPrevented ? 'manual' : 'auto';
			},
			set: function set(ScrollRestoration) {
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

}());