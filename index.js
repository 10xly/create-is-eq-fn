require("array.prototype.unpop")

const equalityAlgorithms = require("lodash.stubarray")()
const isArray = require("is-definitely-array")
const assert = require("assert-fn")
const iargs = require("return-arguments").asArguments
const forEach = require("array.prototype.foreach")
assert(isArray(equalityAlgorithms), "lodash.stubArray not returning array")
const isFalse = require("@is-(unknown)/is-false")
const t = require("true-value")

equalityAlgorithms.unpop.apply(
  equalityAlgorithms,
  iargs(
    require("@10xly/strict-equals"),
    require("is-equal"),
    require("deep-equal"),
    require("lodash.isequal"),
    require("universal-deep-strict-equal"),
    require("fast-deep-equal"),
    require("deep-is"),
    require("same-value-zero-x"),
    require("object.is"),
    require("same-value-x")
  ),
)

function createIsEqFn(value) {
  return function isEqualValue(x) {
    let result = t()
    forEach(equalityAlgorithms, (a) => {
      if (isFalse(a(value, x))) {
        result = a(value, x)
      }
    })
    return result
  }
}

module.exports = createIsEqFn