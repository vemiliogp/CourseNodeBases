// const { getUUID, getAge } = require("./plugins");

// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { getUserById } = require("./js-foundation/04-arrow");
// const { buildMakePerson } = require("./js-foundation/05-factory");
const getPokemonById = require("./js-foundation/06-promises");

getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

// const makePerson = buildMakePerson({ getAge, getUUID });
// const obj = { name: "John", birthDate: "1995-10-26" };
// const john = makePerson(obj);
// console.log(john);
