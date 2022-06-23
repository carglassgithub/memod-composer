import { getLastDeltaOp, getLastInsertedChar } from "../../utils"
import '@testing-library/jest-dom'

describe("Return the last delta different from /", () => {
    it("Return the last delta different from /", () => {
        const delta = {ops: [
            { insert: "This is a normal delta" },
            { insert: "\n"}
        ]}
        const lastDelta = getLastDeltaOp(delta);
        expect(lastDelta).toEqual(delta.ops[0])
    })
})


describe("Return the last inserted char", () => {
    it("Should return the last char", () => {
        const delta = {ops: [
            { insert: "This is a normal delta" },
            { insert: "\n"}
        ]}
        const lastChar = getLastInsertedChar(delta);
        expect(lastChar).toBe("\n")
    })
})