//교재실습 437쪽 

const person = { 
    fistName :'Ungmo',
    lastName : 'Lee',

    get fullName(){
        return `${this.fistName} ${this.lastName}`;
    },
    set fullName(name){
        [this.fistName,this.lastName] = name.split(' ');
    }
};

console.log(`${person.fistName} ${person.lastName}`);

person.fullName = 'Heegun Lee';

console.log(person);

console.log(person.fullName);

console.log(Object.getOwnPropertyDescriptor(person,'fullName'));
