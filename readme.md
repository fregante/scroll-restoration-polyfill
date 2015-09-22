# scroll-restoration-polyfill [![module size](https://badge-size.herokuapp.com/bfred-it/scroll-restoration-polyfill/master/dist/scroll-restoration-polyfill.node.min.js) ![module gzipped size](https://badge-size.herokuapp.com/bfred-it/scroll-restoration-polyfill/master/dist/scroll-restoration-polyfill.node.min.js?compression=gzip)](https://github.com/bfred-it/scroll-restoration-polyfill/blob/master/dist/scroll-restoration-polyfill.min.js)

> Prevent the scroll restoration caused by the `popstate` event or back/forward buttons.

## Usage

The polyfill has no API. Once included, just use the official API as described on [Chrome Developers](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration):

```js
// Prevent the scroll, always
history.scrollRestoration = 'manual';

// Stop preventing the scroll
history.scrollRestoration = 'auto';
```

## With browserify

```sh
npm install --save scroll-restoration-polyfill
```

```js
require('scroll-restoration-polyfill');
```

## API
 
## Files

Here's an explanation of the files included in this repo

* `index.js`: source file, in ES6
* `dist/scroll-restoration-polyfill.js`: browser-ready file with AMD or a global variable called `getIntrinsicScale`
* `dist/scroll-restoration-polyfill.min.js`: same as above, minified
* `dist/scroll-restoration-polyfill.node.js`: used by node/browserify with `require('scroll-restoration-polyfill')`
* `dist/scroll-restoration-polyfill.node.min.js`: same as above, but minified, for byte counting only

## Dependencies

http://majido.github.io/scroll-restoration-proposal/history-based-api.html

* [`prevent-popstate-scroll` <img alt="dependency gzipped size" src="https://badge-size.herokuapp.com/bfred-it/prevent-popstate-scroll/master/dist/prevent-popstate-scroll.node.min.js?compression=gzip&amp;label=size" height="13">](https://www.npmjs.com/package/one-event)

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
