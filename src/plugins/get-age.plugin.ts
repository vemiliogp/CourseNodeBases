const getAgePlugin = require("get-age");

export const getAge = (birthDate: string) => {
  return getAgePlugin(birthDate);
};
