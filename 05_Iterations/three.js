// for of

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Welcome To the Realm"
for (const great of greeting) {
    // console.log(`Each Char are ${great}`);
       
}

// MAP


const map  = new Map();

map.set('IN',"India")
map.set('US',"United State Of America")
map.set('FR',"France")

// console.log(map);


for (const [key, value] of map) {
    // console.log(key, ':-',value );
    
}

// const myObjects = {
//     game1: 'Last Of Us',
//     game2: 'Valorant'
// }

// for (const [key, value] of myObjects) {
//     console.log(key, ':-',value );
// }