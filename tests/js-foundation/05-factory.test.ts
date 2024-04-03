import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  const getUUID = () => "1234";
  const getAge = () => 28;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: "John Doe", birthDate: "1993-01-01" });
    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthDate: "1993-01-01",
      age: 28,
    });
  });
});
