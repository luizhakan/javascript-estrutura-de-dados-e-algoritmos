export function AlertNome() {
  var nomeUser = prompt("Nome : ");
  if (nomeUser != "") {
    document.body.style.background = "black";
    document.body.style.color = "aquamarine";
  }
  return alert(`Bem vindo, ${nomeUser}`);
}
