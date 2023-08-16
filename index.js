// do some stuff with some dependencies
const minimatch = require("minimatch")
const extend = require("deep-extend")

console.log('is match?', minimatch("bar.foo", "*.foo"))

const base = { foo: { value: 'foo' } }
console.log(extend(base, { foo: { modified: true }, bar: { value: 'bar' }}))
