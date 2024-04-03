"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("./../../src/plugins");
describe("plugins/logger.plugin.ts", () => {
    test("buildLogger should return a function logger", () => {
        const logger = (0, plugins_1.buildLogger)("test");
        expect(typeof logger.log).toBe("function");
        expect(typeof logger.error).toBe("function");
    });
    test("logger.log should log a message", () => {
        const winstonLoggerMock = jest.spyOn(plugins_1.logger, "log");
        const message = "Test message";
        const service = "Test service";
        const logger = (0, plugins_1.buildLogger)(service);
        logger.log(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith("info", expect.objectContaining({
            level: "info",
            message,
            service,
        }));
    });
    test("logger.error should log a error", () => {
        const winstonLoggerMock = jest.spyOn(plugins_1.logger, "error");
        const message = "Test message";
        const service = "Test service";
        const logger = (0, plugins_1.buildLogger)(service);
        logger.error(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith("error", expect.objectContaining({
            message,
            service,
        }));
    });
});
