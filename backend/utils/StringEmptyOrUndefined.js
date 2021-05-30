/**
 * A method for checking whether a string is empty or undefined.
 *
 * @param {string} str - The string to check.
 * @returns            - True if the string is empty or undefined,
 *                       false otherwise
 */
module.exports = function (str) {
  if (str === "" || str === undefined) return true;

  return false;
};
