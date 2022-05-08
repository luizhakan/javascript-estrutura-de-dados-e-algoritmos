// o flat cria um novo array com todos elementos sub-array concatenados

// aqui são 3 array separados

const luiz = [{ nome: "Luiz", level: 100 }];
const yasmin = [{ nome: "Yasmin", level: 86 }];
const alex = [{ nome: "Alex", level: 91 }];
// digamos que eu quero concatenar os meus 3 arrays em um só...
// eu posso usar o push
// este array luizPu foi criado somenta para mostrar o push funcionando
const luizPu = [{ nome: "Luiz", level: 100 }];
luizPu.push(...yasmin, ...alex);
console.log('\npush');
console.log(luizPu)

// eu também posso criar um novo array e adicionar usando o spread
const spread = [...luiz, ...yasmin, ...alex];
console.log('\nspread');
console.log(spread)

// o flat me torna possível concatenar os arrays de forma interessante, sem usar o spread
console.log('\nflat');
console.log([luiz, yasmin, alex].flat());

// o flat também remove espaços vazios no array
console.log('\nremovendo espaços vazios');
console.log([luiz, yasmin, , , alex].flat())