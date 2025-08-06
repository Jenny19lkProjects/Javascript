const product={
    name: "ordenador",
    precio:1000,
    isForSale:true,
};
console.log(product);
console.log(product.name);
console.log(product["precio"]);

const key="isForSale";
console.log(product[key]);


product.color="Blue";
console.log(product);