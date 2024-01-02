

let array1=["item1", "item2", "item3"];

let array2=[... array1];   // ... called as spread operator

array2.push("item4");  // push method can add item at the end of an array.
array1.pop();  //pop method can remove last item from array.
console.log(array1);


console.log(array2);