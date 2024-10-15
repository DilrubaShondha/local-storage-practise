const addProduct = () => {
    const productField = document.getElementById("product");
    const quantityField = document.getElementById("quantity");
     const product = productField.value;
     const quantity = quantityField.value;
     productField.value =" ";
     quantityField.value = " ";
     console.log(quantity, product);
     displayProduct(product,quantity);

}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);


}