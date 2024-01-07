

const person ={
    name:'Pratik',
    age:25,
    hobbies:"swimming"
}

for(let key in person)
{
    // console.log('${key} : ${person[key]}');
    console.log({key} : {person[key]});
}