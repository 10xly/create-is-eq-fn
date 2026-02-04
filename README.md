# create-is-eq-fn
Create an equality checker function that distinguishes between 0 and -0.

## Installation
```bash
npm install @10xly/create-is-eq-fn
```

## Usage
```js
const createFn = require("@10xly/create-is-eq-fn")
const assert = require("assert-fn")

const isPositiveZero = createFn(0)

assert(isPositiveZero(0))
assert(!isPositiveZero(-0)) // distinguishes 0 and -0
assert(!isPositiveZero(584))

assert(!createFn(NaN)(NaN)) // does not distinguish NaN
```