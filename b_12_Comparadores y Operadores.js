const num1=10;
const num2=20;
const otherCondition=true;
if(num1<num2 && otherCondition ){
    console.log("La condicion se cumple");
}
//C1 && c2
// t && t =t
// t && f=f
// f && t=f
// f && f=F

if(num1<num2 || otherCondition){
    console.log("La condicion se cumple");
}
//C1 || c2 si una condicion se cumplke ya cumple
// t || t =t
// t || f=t
// f || t=t
// f || f=F

if(!(num1<num2 )){
    console.log("La condicion se cumple");
}

if(!otherCondition)  {
    console.log("La condicion se cumple");
}