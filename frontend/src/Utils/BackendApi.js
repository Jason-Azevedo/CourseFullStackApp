const BackendApi = {};

// General method for sending requests to the backend
BackendApi.sendRequest = function (url, body, method = "GET") {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((res) => {
      // Immediately redirect to login page if the server tells us to!
      if (res.redirect === "/login") window.location = "/login";
      else return res;
    });
};

// Sends a login request to the backend
// Returns a promise with the response from the backend in json format
BackendApi.login = function (userCredentials) {
  return this.sendRequest("/login", userCredentials, "POST");
};

BackendApi.logout = function () {
  localStorage.clear();
  this.sendRequest("/logout");
};

BackendApi.createUser = function (userCredentials) {
  return this.sendRequest("/user", userCredentials, "POST");
};

export default BackendApi;
