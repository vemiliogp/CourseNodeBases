"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("../../src/plugins");
describe("plugins/get-age.plugin.ts", () => {
    test("getAge should return the age of a person", () => {
        const birthDate = "1985-10-21";
        const age = (0, plugins_1.getAge)(birthDate);
        expect(typeof age).toBe("number");
    });
    test("getAge should return current age", () => {
        const birthDate = "1985-10-21";
        const age = (0, plugins_1.getAge)(birthDate);
        const calculatedAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
        expect(age).toBe(calculatedAge);
    });
    test("getAge should return 0 years", () => {
        const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
        const birthDate = "1995-10-21";
        const age = (0, plugins_1.getAge)(birthDate);
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
    });
});
