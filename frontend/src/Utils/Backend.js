const Backend = {};

// General method for sending requests to the backend
Backend.sendRequest = function (url, body, method = "GET") {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

// Sends a login request to the backend
// Returns a promise with the response from the backend in json format
Backend.login = function (username, password) {
  const userCredentials = { username: username, password: password };

  return this.sendRequest("/login", userCredentials, "POST").then((data) =>
    data.json()
  );
};

export default Backend;
