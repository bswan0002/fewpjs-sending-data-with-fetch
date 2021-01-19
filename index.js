function submitData(uName, uEmail) {
  let userObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: `${uName}`,
      email: `${uEmail}`,
    }),
  };
  return fetch("http://localhost:3000/users", userObj)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let newId = document.createElement("p");
      newId.innerHTML = object.id;
      document.querySelector("h2").appendChild(newId);
      console.log(object);
    })
    .catch(function (error) {
      let errorMsg = document.createElement("p");
      errorMsg.innerHTML = error.message;
      document.querySelector("h2").appendChild(errorMsg);
    });
}
