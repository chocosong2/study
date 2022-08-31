const animals = [
    {name : 'lion',size:'big',isAffressice:true,weight:200},
    {name : 'monkey',size:'medium',isAffressice:true,weight:30},
    {name : 'cat',size:'small',isAffressice:true,weight:10},
    {name : 'rat',size:'samll',isAffressice:true,weight:5},
];

//전통적인 for문 
// for(let i=0;i<4;i++){
//     console.log(animals[i]);
// };


// for(let i=0;i<animals.length;i++){
//     console.log(animals[i]);
// };

// let i=0;
// while(i<10){
//     console.log(i);
//     i++
// };

//forEach , map , filter , reduce 에 대하여 

//forEach 코드
// animals.forEach(function(animal, index){
//     console.log(index);
// });

//map 코드
// const animalNames = animals.map(function(aniaml){
//     return `Animals'name is ${aniaml.name} and size is ${aniaml.size}`;
// });

// console.log(animalNames);

//filter 코드
// const smallAnimals = animals.filter(function(item){
//     return item.size ==='small'; 
// })

// console.log(smallAnimals);

//reduce 코드
// const numbers = [1,10,11,23,444];

// const total = numbers.reduce(function(acc,cur){
//     console.log(acc,cur);
//     return acc+cur;
// });

// console.log(total);

// const totalWeight = animals.reduce(function(acc,cur){
//     return acc + cur.weight;
// },0);

// console.log(totalWeight);
