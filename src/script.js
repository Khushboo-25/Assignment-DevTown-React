document.addEventListener("DOMContentLoaded", function() {
    
let seacrhForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    seacrhForm.classList.toggle('active');
    // seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
const shoppingCart = document.getElementById("shopping-cart");

document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
    seacrhForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    // loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    // navbar.classList.remove('active');
}

window.onscroll=()=>{
    seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
    // Your code here
  });
  

// document.addEventListener("DOMContentLoaded", function () {
//   var mySwiper = new Swiper('.swiper.product-slider', {
//     loop:true,
//   spaceBetween: 20,
//   autoplay:{
//       delay: 7500,
//       disableOnInteraction:false,
//   },
  
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1020: {
//       slidesPerView: 3,
//     },
//   },
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var mySwiper = new Swiper('.swiper.review-slider', {
//     loop:true,
//   spaceBetween: 20,
//   autoplay:{
//       delay: 7500,
//       disableOnInteraction:false,
//   },
  
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1020: {
//       slidesPerView: 3,
//     },
//   }
//   });
// });

// const cart = [];

//     // Function to add a product to the cart
//     function addToCart(productId, productName, productPrice,productsrc) {
//         const existingProduct = cart.find((item) => item.id === productId);

//         if (existingProduct) {
            

//             // If the product is already in the cart, increase its quantity
//             existingProduct.quantity++;
//         } else {
//             // If it's a new product, add it to the cart
//             cart.push({
//                 id: productId,
//                 name: productName,
//                 price: productPrice,
//                 quantity: 1,
//                 source:productsrc,
//             });
//             // console.log(cart);
//         }
        
//         // Update the shopping cart display
//         updateCartDisplay();
//     }
//     function updateCartDisplay() {

//       const cartTotalElement = document.querySelector('.total');
//       const cartDisplay = document.querySelector('.shopping-cart');
//       cartDisplay.innerHTML = '';
//       // Calculate the total price and update the cart display
//       const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      
//       cart.forEach((product) => {
//         // Create a new div element for the cart item
//         const cartItemDiv = document.createElement('div');
//         cartItemDiv.classList.add('box');

//         // Add the product details to the cart item
//         cartItemDiv.innerHTML = `
//             <i class="fa fa-trash"></i>
//             <img src="${product.source}" alt="">
//             <div class="content">
//                 <span class="price">$${product.price}/-</span>
//                 <span class="quantity">Qty: ${product.quantity}</span>
//                 <h3>${product.name}</h3>
//             </div>
//         `;

//         // Append the cart item to the cart display
//         cartDisplay.appendChild(cartItemDiv);
//     });

//     cartTotalElement.textContent = `Total: $${total}/-`;
    
//     const ButtonBuy = document.createElement('div');
//     ButtonBuy.classList.add('btn');
//     ButtonBuy.innerHTML = "Buy Now";
//     cartDisplay.appendChild(cartTotalElement);
//     cartDisplay.appendChild(ButtonBuy);
//       // Update the total price display
      
//   }
//   const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     addToCartButtons.forEach((button) => {
//         button.addEventListener('click', function () {
//             const productId = button.getAttribute('data-product-id');
//             // const productContainer = button.closest('.swiper-slide');
//             const productsrc= `images/product-${productId}.png`;
//             const productName = document.querySelector(`.product-${productId}-name`).textContent;
//             const productPrice = parseFloat(document.querySelector(`.price-${productId}`).textContent.replace('$', ''));

//             // Call the addToCart function to add the product to the cart
//             addToCart(productId, productName, productPrice,productsrc);
//         });
//     });