//Array๐

const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['๋ธ๊ธฐ๋ผ๋ผ','์บฌ๋ผ๋ฉ๋ผ๋ผ']

console.log(fruits[1]);

for(let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log('--forof--');
for(let fruit of fruits){
    console.log(fruit);
}

console.log('--forEach--');
fruits.forEach((fruit)=>{console.log(fruit);
})

//push : add an item to the end 
console.log('push');
fruits.push('๋ง๊ณ ์ค๋ฌด๋','๊ฟ๋ณต์ญ์ํ๋ซ์น๋ธ');
console.log(fruits);


// pop : remove an item from the end
fruits.pop();
console.log('pop');
console.log(fruits);


//unshift : add an item to the benigging
console.log('unshift');
fruits.unshift('๋ง์๋ ์๋๋ชฌ๋ผ๋ผ');
console.log(fruits);


//shift : remove an item from of the benigging
console.log('shift');
fruits.shift();
console.log(fruits);

// note = shift , unshift are slower than pop,push

//splice : remove an item by index position
console.log('splice');
fruits.push('์ฐ์ ๋ผ๋ผ','ํค์ด์ฆ๋ ์๋ฉ๋ฆฌ์นด๋ธ');
console.log(fruits);

//fruits.splice(1); //๋ช๊ฐ ์ง์ธ๊ฑด์ง ์ง์ ์ํ๋ฉด 1๋ถํฐ ๋ค๊น์ง ์ญ ์ง์ .. 
//console.log(fruits); 

fruits.splice(1,1);
console.log(fruits);

fruits.splice(1,1,'์๋ฐ์ฃผ์ค','๋ ๋ชฌ์์ด๋'); //1๋ฒ์งธ ์ธ๋ฑ์ค๋ถํฐ 1๊ฐ ์ง์ฐ๊ณ  ๊ทธ ์๋ฆฌ์ ์ ์ ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐํจ
console.log(fruits);

//combine two arrays
const fruits2 = ['ํ๋ก๋ฐํฌํฐ','๋ธ๋๋ฐํฌํฐ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//FIND THE INDEX ! 
console.log(fruits.indexOf('๋ ๋ชฌ์์ด๋')); //ํด๋น ๋ฐ์ดํฐ์ ์ธ๋ฑ์ค 

//includes
console.log(fruits.includes('ํ๋ก๋ฐํฌํฐ')); //๊ฐ์ด ์์ผ๋ฉด true ์์ผ๋ฉด false 

// lastIndexOf
//๋ธ๊ธฐ๋ผ๋ผ๊ฐ ์ค๋ณต์ผ๋ก ์์ ๋ ๋ธ๊ธฐ๋ผ๋ผ๋ฅผ ์ด๋ค ๊ฒ์ ์ฐพ๋๋๋ฉด, ๋ง์ง๋ง์์ ๋ธ๊ธฐ๋ผ๋ผ๋ฅผ ์ฐพ๋๋ค.
fruits.push('๋ธ๊ธฐ๋ผ๋ผ')
console.log(fruits.lastIndexOf('๋ธ๊ธฐ๋ผ๋ผ')); 
//indexOf ๋ ๋ฐ๋๋ก ์์์ ์ฐพ๋๋ค.
console.log(fruits.indexOf('๋ธ๊ธฐ๋ผ๋ผ'));




