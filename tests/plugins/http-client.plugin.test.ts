import { httpClient } from "../../src/plugins";

describe("plugins/http-client.plugin.ts", () => {
  test("get should return a string", async () => {
    const data = await httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test("should have POST, PUT and DELETE methods", () => {
    expect(typeof httpClient.post).toBe("function");
    expect(typeof httpClient.put).toBe("function");
    expect(typeof httpClient.delete).toBe("function");
  });
});
