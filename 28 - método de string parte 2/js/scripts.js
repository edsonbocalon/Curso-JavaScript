// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var frasaCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

// trim

var nome = "   Edson  ";

var noemTrim = nome.trim();

console.log(nome);
console.log(noemTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var fraseDois = "Eu quero a útima palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));