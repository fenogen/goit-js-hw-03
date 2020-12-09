'use strict'; 
// const f = function()

const m = ['Oleg', 'Alex', 'Lena', 'Airon'];

// console.log(m);

for (const M of m) { 
    console.log(M);
}



const numbers = [5, 5, 5, 5, 5];
let total = 0;

    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
      // console.log(total);
}
console.log(total);





const OBJECT = {
    name: 'oleg',
    stars: 5,
    capacity: 100,
};

const { name, stars } = OBJECT;

console.log(OBJECT);
console.log(name);
console.log(stars);


    
