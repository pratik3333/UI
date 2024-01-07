

const person={
    name:"Pratik",
    age:25,
    "person hobbies":["riding","walking","sleeping"]
}

for (let key in person)
{
    console.log(person[key]);  //insted of [] if we put there only dot . then our output will be undefined for three times
    
}
// trial....
// O/P:
// Pratik
// 25
// [ 'riding', 'walking', 'sleeping' ]
