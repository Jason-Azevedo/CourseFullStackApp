const BackendApi = {};

// General method for sending requests to the backend
BackendApi.sendRequest = function (options, onSuccess, onFail) {
  const bodyContent =
    options.method === "GET" ? undefined : JSON.stringify(options.body);

  const fetchOptions = {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyContent,
  };

  fetch(options.url, fetchOptions)
    .then((data) => data.json())
    .then((res) => {
      // Immediately redirect to login page if the server tells us to!
      if (res.redirect === "/login") window.location = "/login";
      else if (res.error) onFail(res.error);
      else onSuccess(res);
    })
    .catch(console.error);
};

// Sends a login request to the backend
// Returns a promise with the response from the backend in json format
BackendApi.login = function (userCredentials, onSuccess, onFail) {
  const options = {
    url: "/login",
    method: "POST",
    body: userCredentials,
  };

  this.sendRequest(options, onSuccess, onFail);
};

BackendApi.logout = function () {
  localStorage.clear();
  this.sendRequest({ url: "/logout", method: "GET" });
};

BackendApi.createUser = function (userCredentials, onSuccess, onFail) {
  const requestOptions = {
    url: "/user",
    method: "POST",
    body: userCredentials,
  };

  this.sendRequest(requestOptions, onSuccess, onFail);
};

BackendApi.sendTodoRequest = function (todo, method, onSuccess, onFail) {
  const requestOptions = {
    url: "/todo",
    method: method,
    body: todo,
  };

  this.sendRequest(requestOptions, onSuccess, onFail);
};

BackendApi.createTodo = function (todo, onSuccess, onFail) {
  this.sendTodoRequest(todo, "POST", onSuccess, onFail);
};

BackendApi.editTodo = function (todo, onSuccess, onFail) {
  this.sendTodoRequest(todo, "PATCH", onSuccess, onFail);
};

BackendApi.getTodos = function (onSuccess, onFail) {
  this.sendTodoRequest(null, "GET", onSuccess, onFail);
};

BackendApi.deleteTodo = function (todo, onSuccess, onFail) {
  this.sendTodoRequest(todo, "DELETE", onSuccess, onFail);
};

export default BackendApi;
