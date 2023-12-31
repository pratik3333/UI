

let temp=+prompt("Please Enter the temperature");

if (temp<0) {
    console.log("Extremly cold");
}
else if (temp<15) {
    console.log("It's cold outside");
}
else if (temp<25) {
    console.log("Weather is okay");
}
else if (temp<35) {
    console.log("It's hot outside");
}

else
{
    console.log("Please turn on AC");
}