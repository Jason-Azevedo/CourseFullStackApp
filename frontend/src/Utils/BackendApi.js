const BackendApi = {};

// General method for sending requests to the backend
BackendApi.sendRequest = function (url, body, method = "GET") {
  const bodyContent = method === "GET" ? undefined : JSON.stringify(body);

  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyContent,
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

BackendApi.createTodo = function (todo) {
  return this.sendRequest("/todo", todo, "POST");
};

BackendApi.editTodo = function (todo) {
  return this.sendRequest("/todo", todo, "PATCH");
};

BackendApi.getTodos = function () {
  return this.sendRequest("/todo", {}, "GET");
};

BackendApi.deleteTodo = function (todo) {
  return this.sendRequest("/todo", todo, "DELETE");
};

export default BackendApi;
