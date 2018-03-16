// /js-browser/main.js loading /js-browser/test.js
module.import('./exp').then(function (test) {
    // will output:
    // Hello CommonJS!
    // from /js-browser/test.js
    test('Hello CommonJS!');
});
