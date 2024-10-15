const addProduct = () => {
    const productField = document.getElementById("product");
    const quantityField = document.getElementById("quantity");
     const product = productField.value;
     const quantity = quantityField.value;
     productField.value =" ";
     quantityField.value = " ";
     console.log(quantity, product);
     displayProduct(product,quantity); 
     saveProductToLocalStorage(product,quantity);

}
const displayProduct = (product, quantity) =>{
    const ul = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}
const getStoredShoopingCart =() =>{
    const storedCart = localStorage.getItem('cart');
    let cart ={};
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}
const saveProductToLocalStorage = (product,quantity) =>{
    const cart = getStoredShoopingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    console.log(cartStringified)
    localStorage.setItem('cart', cartStringified);
}
displayProductFromLocalStorage = () =>{
    const saveCart = getStoredShoopingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product)
        console.log(quantity)
        displayProduct(product,quantity)
    }
}
displayProductFromLocalStorage();