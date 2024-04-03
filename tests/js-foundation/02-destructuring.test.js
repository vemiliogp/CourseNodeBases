"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_destructuring_1 = require("../../src/js-foundation/02-destructuring");
describe("js-foundation/02-destructuring.ts", () => {
    test("characters should contain Flash and Superman", () => {
        expect(_02_destructuring_1.characters).toContain("Flash");
        expect(_02_destructuring_1.characters).toContain("Superman");
    });
    test("first character should by Flash and second Superman", () => {
        const [flash, superman] = _02_destructuring_1.characters;
        expect(flash).toBe("Flash");
        expect(superman).toBe("Superman");
    });
});
