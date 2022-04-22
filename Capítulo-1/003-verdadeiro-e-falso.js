// true e false são um pouco complicado, na maioria das linguagens, true e false representam os resultados verdadeiro e falso

function testTrusty(val) {
  return val ? console.log("true") : console.log("false");
}

testTrusty(true); // true
testTrusty(false); // false
testTrusty(new Boolean(false)); // objeto é sempre true
testTrusty(""); // false
testTrusty("luiz"); // string é true
testTrusty(new String("")); // objeto é sempre true
testTrusty(1); // true
testTrusty(-1); // true
testTrusty(NaN); // false
testTrusty(new Number(NaN)); // true, objeto é sempre true
testTrusty({}); // true, objeto é sempre true
var obj = { name: "luiz" };
testTrusty(obj); // true, objeto é sempre true
testTrusty(obj.name); // true
testTrusty(obj.idade); // propriedade não existe
