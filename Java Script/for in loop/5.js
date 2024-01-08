const person ={
    name:"pratik",
    age:25,
    hobbies:["workout","sleeping","riding"]

}

for(let key in person)
{
    console.log(key, ":", person[key]);
}

// O/P:-
// name : pratik
// age : 25
// hobbies : [ 'workout', 'sleeping', 'riding' ]