"use strict";

// window.addEventListener("DOMContentLoaded", () => {
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
  }

//   console.log("elements:", { id, psword, loginBtn });

//   if (!id || !psword || !loginBtn) {
//     console.log("요소 못찾음: HTML의 id가 JS와 다릅니다.");
//     return;
//   }

//   loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     const req = {
//       id: id.value,
//       psword: psword.value,
//     };

//     // 유튜브처럼 객체 출력
//     console.log(req);
//   });
// });
