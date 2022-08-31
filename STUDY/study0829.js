//Array😀

const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['딸기라떼','캬라멜라떼']

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
fruits.push('망고스무디','꿀복숭아플랫치노');
console.log(fruits);


// pop : remove an item from the end
fruits.pop();
console.log('pop');
console.log(fruits);


//unshift : add an item to the benigging
console.log('unshift');
fruits.unshift('맛없는 시나몬라떼');
console.log(fruits);


//shift : remove an item from of the benigging
console.log('shift');
fruits.shift();
console.log(fruits);

// note = shift , unshift are slower than pop,push

//splice : remove an item by index position
console.log('splice');
fruits.push('연유라떼','헤이즐넛 아메리카노');
console.log(fruits);

//fruits.splice(1); //몇개 지울건지 지정안하면 1부터 뒤까지 쭉 지움 .. 
//console.log(fruits); 

fruits.splice(1,1);
console.log(fruits);

fruits.splice(1,1,'수박주스','레몬에이드'); //1번째 인덱스부터 1개 지우고 그 자리에 적은 데이터를 추가함
console.log(fruits);

//combine two arrays
const fruits2 = ['타로밀크티','블랙밀크티'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//FIND THE INDEX ! 
console.log(fruits.indexOf('레몬에이드')); //해당 데이터의 인덱스 

//includes
console.log(fruits.includes('타로밀크티')); //값이 있으면 true 없으면 false 

// lastIndexOf
//딸기라떼가 중복으로 있을 때 딸기라떼를 어떤 것을 찾느냐면, 마지막에서 딸기라떼를 찾는다.
fruits.push('딸기라떼')
console.log(fruits.lastIndexOf('딸기라떼')); 
//indexOf 는 반대로 앞에서 찾는다.
console.log(fruits.indexOf('딸기라떼'));




