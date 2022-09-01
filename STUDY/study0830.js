// Q1 . make a string out of an array 배열을 문자열로 바꿔라!

let fruits1 = [ 'apple' , 'banana', 'orange'];

// 내가 쓴 코드
strfruits = fruits1.toString();
console.log(strfruits);

//답안 ↓
let result = fruits1.join();
console.log(result);


// Q2. make an array out of string 문자열을 배열로 바꿔라 !

let  fruit2 = '사과,키위,바나나,체리';

let result2 = fruit2.split(',');
console.log(result2);

// Q3. make this array look like this 

let array = [1,2,3,4,5];

//a,b를 인자로 받아서 a-b를 하면 정렬을 할 수 있었던 것같은데.. filter는 아니였나보다.. 

//let result3 = array.filter((a,b)=>{a-b})
//console.log(result3);

//답안 ↓
let result4 = array.reverse();
console.log(result4);

//이런 식으로 풀려고 했음. 
//--------------------------------------
// //정렬 기준을 작성한 콜백함수를 작성한다. 
// let jr = [103,273,32,52]
// function func01(a,b){
//     // if(a>b){
//     //     return +1;        
//     // }else{
//     //     return -1; 
//     // }
    
//     //return a>b? +1:-1;

//     return a-b

// } //순차정렬을 하게 하는 코드 
// jr.sort(func01);

// console.log(jr); //결과 32,52,103,273
//--------------------------------------

// Q4. make new array without the first two element 첫번째와 두번째 요소 빼고 '새로운' 배열 만들기 

let array2 = [1,2,3,4,5]
//array2.shift();
//array2.shift();

console.log(array2);

////답안 ↓
// let result5 = array2.splice(0,2); //새로운 배열을 만드는 것이 아니다. 

// console.log(result5);
// console.log(array2);

//slice 사용하기 
let result5 = array2.splice(2,5); //2~5 - 2,3,4의 요소로만 새로운 배열을 만든다. 
console.log(result5);

// Q5. find a student with the score 90 학생 객체에서 90점인 학생을 찾아라.

class Student{
    constructor(name,age,enrolled,score){
        this.name= name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;
    }
}

const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88),
];

//find 사용하기 
//학생의 점수가 90점이면 true를  반환. find는 true인 배열의 요소를 반환. 

let studentResult = students.find(student => student.score === 90);
console.log(studentResult);


// Q6. make an array of enrolled students 학생들 중 수업을 등록한 학생만 찾아라 

let enrolledStudent = students.find(student => student.enrolled === true);
console.log(enrolledStudent);

//답안 ↓
let enrolledStudent2 = students.filter((student)=>student.enrolled);
console.log('수업을 등록한 학생은?' , enrolledStudent2);


// Q7. make an array containing only the students' scores result should be : [45,80,90,66,88]
// 학생들의 점수를 새 배열로 출력하기

//이렇게 하니까 잘 안된다...짝수 점수를 출력하려면 어떻게 해야할까?  
//let integerScore = students.find(student => student.score % 2 == 0);
//console.log(integerScore);

let integerScore = students.map((student)=>student.score);
console.log(integerScore);

// Q8. Check if there is a student with the score lower than 50 
let score50 = students.find(student => student.score<50);
console.log(score50);

//답안 ↓ some 활용
let student50 = students.some((student => student.score<50));
console.log(student50); // 하나라도 조건에 만족하는 값이 있다면 true 반환 

let student50_2 = students.every(student => student.score >=50);
console.log(student50_2); //모든 학생의 점수가 50점보다 낮다면 ? - 모두는 아니므로 false 

// Q9. compute students' average score 
let ave = students.reduce((prev,curr)=>prev+curr.score,0)
console.log(ave/students.length);

// Q10. make a string containing all the scores result should be : '45,80,90,66,88'
//배열을 문자열로 바꾸기 

let string = students
    .map(student => student.score)
    .filter((score) => score >= 50) //50점 이상인 점수만 ! 
    .join();
console.log(string);

//Bonus! do Q10 sorted in ascending order result should be: '45,66,80,88,90'

// let sortedString = students
//     .map(student => student.score)
//     .sort()
//     .join()
// console.log(sortedString);

let sortedString = students
    .map(student => student.score)
    .sort((a,b)=>a-b)
    .join();
console.log(sortedString);
