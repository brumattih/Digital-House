// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias

let videogames = [
    "Playstation",
    "Xbox",
    "Switch"
]

let videogames2 = [
    "Wii",
    "Atari",
    "Mega Drive"
]


// Acessar elementos específicos de um array.
console.log(videogames[0]); //Playstation

// Modificar cada um dos elementos de um array e imprimi-los no console.
console.log(videogames); //Playstation, Xbox, Switch


videogames[0] = "Master System";

videogames[1] = "Mega Drive";

videogames[2] = "Sega Saturn";

console.log(videogames); // Master System, Mega Drive, Sega Saturn

// Adicionar elementos a um array.
videogames.push("Nintendo 64");
console.log(videogames); // Master System, Mega Drive, Sega Saturn, Nintendo 64

// Extrair elementos de um array.
videogames.pop()
console.log(videogames); // Master System, Mega Drive, Sega Saturn

// Comparar elementos de um array com os elementos de outro. 

console.log(videogames[1] === videogames2[0]) // false
console.log(videogames[1] === videogames2[2]) // true
