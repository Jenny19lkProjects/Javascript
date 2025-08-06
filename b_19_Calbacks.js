function a(){
    console.log("Funcion a");
}
console.log(a);



function b(){
    console.log("Funcion b");
}


function f(cb){
    console.log("Dentro de F");
    console.log(cb);
}

f(a);
f(b);