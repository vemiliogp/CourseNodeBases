// const getPokemonById = require("./js-foundation/06-promises");
const { buildLogger } = require("./plugins");

const logger = buildLogger("app.js");

logger.log("Hola mundo");
logger.error("Esto es algo malo");

// getPokemonById(4)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finally"));
