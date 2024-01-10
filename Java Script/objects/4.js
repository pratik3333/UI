

const person={
    name:"pratik",
    age:25,
    hobbies:["sleeping","riding","guitar"]
}


const car={
    model:"Thar",
    mileage:14,
    company:"mahindra"
}


const spread={ ...person,...car

}


console.log(spread);

// O/P:-
// {
//     name: 'pratik',
//     age: 25,
//     hobbies: [ 'sleeping', 'riding', 'guitar' ],
//     model: 'Thar',
//     mileage: 14,
//     company: 'mahindra'
//   }