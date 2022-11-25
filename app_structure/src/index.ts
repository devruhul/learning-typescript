// function showUserName() {
//   console.log("userName ruhul amin");
// }

// showUserName();

const userForm = document.querySelector("form") as HTMLFormElement;

const userName = document.querySelector("#user-name") as HTMLInputElement;

const userEmail = document.querySelector("#user-email") as HTMLInputElement;

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    name: userName.value,
    email: userEmail.value,
  };

  console.log(data);
});
