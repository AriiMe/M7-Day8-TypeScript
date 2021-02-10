console.log('hello typescript');
//tsc -w index.ts
console.log('hello2');
//everything you write here gets compiled into index.js
var i = 10;
var x = "sup homie";
var array;
array = ['stefano'];
var a;
var addition = function (n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        console.log("provide numbers g");
    }
};
console.log(addition(2, "3"));
var obj1 = {
    shape: 'round',
    color: 'green',
    size: 100,
    intemId: 1
};
var obj = {
    shape: 'round',
    color: 'green'
};
//interface is like type, but it's only for objects and can be extended ex. no need to rewrite it
obj.size = 'large';
var striveTutors = [
    {
        name: 'stefano',
        age: 33,
        role: 'teacher'
    },
    {
        name: 'Riccardo',
        age: 35,
        role: 'teacher'
    },
    {
        name: 'Stefano',
        age: 31,
        role: 'teacher'
    },
    {
        name: 'Diego',
        role: 'Master of strive'
    }
];
console.log(striveTutors[1].role);
