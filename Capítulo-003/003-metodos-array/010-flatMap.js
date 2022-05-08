let fraseArray = ["bom dia", "o sol ja nasceu", , "la na fazendinha"];

// o flat map é a coisa que um flat seguido de map
// usando map
fraseArray.map((x) => x.split(" "));

// usando flatMap
fraseArray.flatMap((x) => x.split(" "));
