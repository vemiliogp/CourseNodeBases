"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("../../src/plugins");
describe("plugins/get-id.plugin.ts", () => {
    test("getUUID should return a UUID", () => {
        const uuid = (0, plugins_1.getUUID)();
        expect(typeof uuid).toBe("string");
        expect(uuid.length).toBe(36);
    });
});
