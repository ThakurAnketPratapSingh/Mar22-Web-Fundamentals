const a = parseInt(prompt("enter the number 1 : "));
const b = parseInt(prompt("enter the number 2 : "));
const c = parseInt(prompt("enter the number 3 : "));
if(a < b && a < c){
    console.log("a is Less than b and c");
    alert("a is Less than b and c");
}
else if (b < a && b < c){
    console.log("b is Less than a and c");
    alert("b is Less than a and c");
}
else if (c < a && c < b){
    console.log("c is Less than a and b");
    alert("c is Less than a and b");
}
else{
    console.log("all are equal or any two values are equal");
    alert("all are equal or any two values are equal");
}