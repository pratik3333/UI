


let choice = +prompt("Enter your choice"); //we need to convert string in to number.

// when to take input from user using prompt that time our progmram take that input as a String so thats 
// why we need to convert that.

// let choice = 4;

switch (choice) {
    case 1:
        console.log("Monday");
        break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;

        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;
        
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
    default:
        console.log("Please Enter number between 1 to 7");
        break;
}