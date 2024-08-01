const { load } = require("signal-exit")

const marvel_heros = ["Ironman", "Loki", "Thor"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);


const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);4

const another_Arrys = [1, 2, 3, [4, 5, 6], 7 , [6 , 7, [4 , 5 ]]]

const  real_anoter_array = another_Arrys.flat(Infinity) 

// console.log(real_anoter_array);




console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name: "Rohit"})); // Interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));







