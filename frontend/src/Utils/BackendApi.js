const BackendApi = {};

/**
 * A wrapper around fetch that is used to send requests to the backend.
 *
 * @param {string}   method   - The method for the request, example: GET
 * @param {string}   path     - The route for the request
 * @param {object}   body     - The content to be sent in json to the backend
 * @param {function} callback - A function with two params, data and error
 *   which gets called on successfully contacting the backend.
 */
BackendApi.sendRequest = function (method, path, body, callback) {
  const fetchOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch(path, fetchOptions)
    .then(data => data.json())
    .then(res => {
      // Immediately redirect to login page if the server tells us to!
      if (res.redirect === "/login") window.location = "/login";
      else callback(res, res.error);
    })
    .catch(console.error);
};

/**
 * A general method for sending get requests.
 *
 * @param {string}   path     - The path for the request
 * @param {function} callback - A function with two params, data
 *  and error which gets called on successfully contacting the backend.
 */
BackendApi.get = function (path, callback) {
  this.sendRequest("GET", path, undefined, callback);
};

/**
 * A general method for sending post requests.
 *
 * @param {string}   path     - The path for the request
 * @param {function} callback - A function with two params, data
 *  and error which gets called on successfully contacting the backend.
 */
BackendApi.post = function (path, body, callback) {
  this.sendRequest("POST", path, body, callback);
};

/**
 * A general method for sending patch requests.
 *
 * @param {string}   path     - The path for the request
 * @param {function} callback - A function with two params, data
 *  and error which gets called on successfully contacting the backend.
 */
BackendApi.patch = function (path, body, callback) {
  this.sendRequest("PATCH", path, body, callback);
};

/**
 * A general method for sending delete requests.
 *
 * @param {string}   path     - The path for the request
 * @param {function} callback - A function with two params, data
 *  and error which gets called on successfully contacting the backend.
 */
BackendApi.delete = function (path, body, callback) {
  this.sendRequest("DELETE", path, body, callback);
};

/**
 *  A method for logging the user into their account.
 *
 * @param {object}    userCredentials - A object containing the username
 *  and password of the user.
 * @param {function}  callback        - A function with two params, data
 *  and error which gets called on successfully contacting the backend.
 */
BackendApi.login = function (userCredentials, callback) {
  this.post("/login", userCredentials, callback);
};

/**
 * A method for logging the user out of their account.
 */
BackendApi.logout = function () {
  localStorage.clear();
  this.get("/logout");
};

export default BackendApi;
