const assert = require("assert")
const createIsEqFn = require("./index")

describe("createIsEqFn", () => {
  it("should return true for identical integers", () => {
    const isEq = createIsEqFn(42)
    assert.strictEqual(isEq(42), true)
  })

  it("should return false for NaN (even against itself)", () => {
    const isEq = createIsEqFn(NaN)
    assert.strictEqual(isEq(NaN), false)
  })

  it("should return false for 0 and -0", () => {
    const isEq = createIsEqFn(0)
    assert.strictEqual(isEq(-0), false)
  })

  it("should return true for -0 and -0", () => {
    const isEq = createIsEqFn(-0)
    assert.strictEqual(isEq(-0), true)
  })

  it("should return false for different values", () => {
    const isEq = createIsEqFn("fox")
    assert.strictEqual(isEq("jones"), false)
  })
})