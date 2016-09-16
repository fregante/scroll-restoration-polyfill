# scroll-restoration-polyfill 

> Prevent the scroll restoration caused by the `popstate` event or back/forward buttons. [Demo](https://rawgit.com/bfred-it/scroll-restoration-polyfill/master/demo.html)

[![gzipped size](https://badges.herokuapp.com/size/github/bfred-it/scroll-restoration-polyfill/master/dist/scroll-restoration-polyfill.browser.js?gzip=true&label=gzipped%20size)](#readme)
[![Travis build status](https://api.travis-ci.org/bfred-it/scroll-restoration-polyfill.svg)](https://travis-ci.org/bfred-it/scroll-restoration-polyfill)
[![npm version](https://img.shields.io/npm/v/scroll-restoration-polyfill.svg)](https://www.npmjs.com/package/scroll-restoration-polyfill) 

*Warning:* it works in Chrome, Safari, and Firefox 46+, but there's **no IE/Edge support yet.**

## Usage

The polyfill has no API. Once included, just use the official API as described on [Chrome Developers](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration):

```js
// Prevent the scroll, always
history.scrollRestoration = 'manual';

// Stop preventing the scroll
history.scrollRestoration = 'auto';
```

## Install

Pick your favorite:

```html
<script src="dist/scroll-restoration-polyfill.browser.js"></script>
```

```sh
npm install --save scroll-restoration-polyfill
```

```js
require('scroll-restoration-polyfill');
```

```js
import 'scroll-restoration-polyfill';
```

## Links

- Specification: http://majido.github.io/scroll-restoration-proposal/history-based-api.html
- Native compatibility table: https://developer.mozilla.org/en/docs/Web/API/History#Browser_compatibility
- Chrome Developers post: https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration

## Dependencies

Two lightweight dependencies, already included in `scroll-restoration-polyfill`'s <img alt="scroll-restoration-polyfill's gzipped size" src="https://badges.herokuapp.com/size/github/bfred-it/scroll-restoration-polyfill/master/dist/scroll-restoration-polyfill.browser.js?gzip=true&label=gzipped%20size" height="13" style="vertical-align: middle;">

* [`one-event`](https://github.com/bfred-it/one-event)
* [`get-scroll`](https://github.com/bfred-it/get-scroll)

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
