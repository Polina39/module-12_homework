/* 1-й способ
function copyObj (obj){
    const newObj = {};
    for (let prop in obj){
        if(obj.hasOwnProperty(prop)){
        newObj[prop] = obj[prop];
    }
}
return newObj;
}

const obj1 = {a: 1, b: 2};
const obj2 = copyObj (obj1);
obj2.c = 3;
console.log(obj1, obj2);
*/

// 2-й способ

const book =  {
    genre: "fantasy"
};

const childBook = Object.create (null);
childBook.ownGenre = "fairytale";
console.log(childBook);



