"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("../../src/plugins");
describe("plugins/http-client.plugin.ts", () => {
    test("get should return a string", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield plugins_1.httpClient.get("https://jsonplaceholder.typicode.com/todos/1");
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean),
        });
    }));
    test("should have POST, PUT and DELETE methods", () => {
        expect(typeof plugins_1.httpClient.post).toBe("function");
        expect(typeof plugins_1.httpClient.put).toBe("function");
        expect(typeof plugins_1.httpClient.delete).toBe("function");
    });
});
