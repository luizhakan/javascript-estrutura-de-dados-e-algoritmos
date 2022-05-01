// eu posso usar um laço for para acessar cada elemento de meu array um por um
let anos = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"];

for (
  i = 0 /*este i é o meu índice, eu coloquei "i" porquê é muito usado ksks, mas pode ser qualquer coisa*/;
  i < anos.length /*enquanto "i" for menos que anos.lenght*/;
  i++ /*i + 1*/
) {
  console.log(anos[i]); /*
  Janeiro
  Fevereiro
  Março
  Abril
  Maio
  Junho
  Julho
  */
}

// isso é só um básico, mas é util em alguns casos mais complexos