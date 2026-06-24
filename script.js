let cart=[];

function addToCart(product){

cart.push(product);

displayCart();

}

function displayCart(){

let cartItems =
document.getElementById("cart-items");

cartItems.innerHTML="";

cart.forEach(item=>{

let li=document.createElement("li");

li.textContent=item;

cartItems.appendChild(li);

});

}
