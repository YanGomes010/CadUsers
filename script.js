window.addEventListener("load", () => {
  users = JSON.parse(localStorage.getItem("0"));
  tableF();
});

var ScreenUsers = document.querySelector("#signUpScreenUsers");
let table = document.querySelector("#table");
let users = [];
let addUsers = [];
let buttonSubmit = document.querySelector("#buttonSubmit");
buttonSubmit.addEventListener("click", submitData);

function submitData(e) {
  e.preventDefault();
  ScreenUsers.style.display = "none";
  table.innerHTML = "";

  let sex = document.querySelector('input[name="sex"]:checked').value;
  let name = document.querySelector("#name").value;
  let cpf = document.querySelector("#cpf").value;
  let date = document.querySelector("#date").value;

  let data = {
    nome: name,
    sex: sex,
    cpf: cpf,
    date: date,
  };

  users.push(data);
  tableF(users);

  localStorage.setItem("0", JSON.stringify(users));
}

function tableF() {
  table.innerHTML = `
    <tr>
        <th>NOME</th>
        <th>SEXO</th>
        <th>CPF</th>
        <th>NASC.</th>
    </tr>`;
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    table.innerHTML += `
     
    <tr>
        <td>${users[i].nome}</td>
        <td>${users[i].sex}</td>
        <td>${users[i].cpf}</td>
        <td>${users[i].date}</td>
    </tr>
    `;
  }
}

function changeSignUpScreen() {
  ScreenUsers = document.querySelector("#signUpScreenUsers");

  if (ScreenUsers.style.display == "block") {
    ScreenUsers.style.display = "none";
  } else {
    ScreenUsers.style.display = "block";
  }
}
