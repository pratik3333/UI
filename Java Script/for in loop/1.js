
//This for in loop give us index

const fruits = ["Apple","Mango","Banana"];

const fruits2=[];
for (const index in fruits) {
    
    // console.log(index);  //O/P:- 0 1 2

    console.log(fruits[index]); //O/P:- Apple Mango Banana

    fruits2.push(fruits[index].toLocaleUpperCase());
}


console.log(fruits2);