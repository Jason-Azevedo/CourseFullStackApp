// Checks the input value for certain things
// Returns true if the value passes all the tests specified by options
// Returns false if it fails to pass the tests
export default function ValidateInput(
  inputValue,
  options = { notEmpty: true }
) {
  if (options.notEmpty) {
    const isEmpty = inputValue === "";
    const isUndefined = inputValue === undefined;

    if (isEmpty || isUndefined) return false;
  }

  // All input tests passed!
  return true;
}
