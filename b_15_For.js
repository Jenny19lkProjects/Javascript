const products=["ordenadore", "teclado","raton"];

for(const product of products){
    console.log(product);
}

const book={
    titile:"Harry Potter",
    pages:200,
    author:"JK.Rowling"
}

for(const key in book){
    console.log(`${key}:${book[key]}`);
    
}

products.forEach((product)=>{
    console.log(product);
    
})