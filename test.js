var fs = require('fs')
var test = require('tape')
var postcss = require('postcss')
var constant = require('postcss-constant')
var extend = require('postcss-extend')
var safetyExtend = require('./')

test('throw error: cannot inherit rule sets have `@extend`', function (t) {
    var css = fs.readFileSync('fixture.css', 'utf-8').trim()
    var actual = function () {
        return postcss()
            .use(safetyExtend(css))
            .use(constant(css))
            .use(extend(css))
            .process(css)
            .css;
    }

    t.throws(actual, /cannot inherit rule sets have `@extend`/)
    t.end()
})
