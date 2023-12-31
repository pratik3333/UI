

let number=prompt("Enter the number");

if (number % 2 === 0 && number !== 0 && number !== null) {
    console.log("Number is even");
}
else if (number === 0 )
{
    console.log("Number is Zero");
}
else if (number !== null)
{
    console.log("Number is Odd");
}
else
{
    console.log("Please Enter number");
}
