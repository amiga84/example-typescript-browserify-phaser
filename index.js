var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var tsify = require('tsify');
var console = require('console');

var b = browserify({
    entries: ['src/init.ts', 'src/mainScene.ts'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
});

b.on('update', bundle);
b.on('log', function (msg) {
    console.log(msg);
});

bundle();

function bundle() {
    b.plugin(tsify, { noImplicitAny: true })
        .bundle()
        .on('error', console.error)
        .pipe(fs.createWriteStream('public/js/bundle.js'));
}