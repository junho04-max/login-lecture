"use strict";
    
  const id = document.querySelector("#id");
  const psword = document.querySelector("#psword");
  const loginBtn = document.querySelector("#loginBtn");

  loginBtn.addEventListener("click", login);

  function login() {
    const req = {
        id: id.value,
        paword: psword.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));
    //fatch("/login", {
     //   body: JSON.stringify(req)
    //})
  }

