const login = document.getElementById("log");
const password = document.getElementById("password");

function API() {
  document.getElementById("send").addEventListener("click", function () {
    const inp = login.value;
    const parol = password.value;
    const data = {
      login: inp,
      password: parol
    };
  });
}

API();
