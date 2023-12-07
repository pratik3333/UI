// // console log can print something
// // console.log("Hello world");


// function sum(a,b) {
//     return a+b;
    
// }

// console.log(sum(2,3));

// function mul(a,b) {
//     c=a*b;
//     return c;
    
// }

// console.log(mul(2,3));


function duck(a) {

    var a;
    var flag=0;
    var b;

    while (a!=0) {
        
        b=a%10;
        
        if (b==0) {
            
            flag=1;
            // console.log("Duck number");
            break;
        }
        a=a/10;
    }
    if (flag) {
        console.log("Number is a Duck number");
    }
    else
    {
        console.log("Number is not a duck number");
    }
    
}
duck(1012);