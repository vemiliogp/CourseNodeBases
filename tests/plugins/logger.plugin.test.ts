import { logger as winstonLogger, buildLogger } from "./../../src/plugins";

describe("plugins/logger.plugin.ts", () => {
  test("buildLogger should return a function logger", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "Test message";
    const service = "Test service";

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });

  test("logger.error should log a error", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "error");
    const message = "Test message";
    const service = "Test service";

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        message,
        service,
      })
    );
  });
});
