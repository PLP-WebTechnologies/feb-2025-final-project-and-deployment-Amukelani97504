// script.js

// Utility function to update the cart in localStorage
function updateCart(productName, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ productName, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} has been added to your cart!`);
}

// Function to handle "Add to Cart" functionality
function initializeAddToCartButtons() {
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const product = e.target.dataset.product;
      const price = e.target.dataset.price;
      updateCart(product, price);
    });
  });
}

// Function to handle "Shop Now" button interactivity
function initializeShopNowButton() {
  const shopNowButton = document.getElementById('cta-button');
  if (shopNowButton) {
    shopNowButton.addEventListener('click', () => {
      alert('Redirecting to the Products page!');
      window.location.href = 'products.html';
    });
  }
}

// Function to add hover effects to social media icons
function initializeSocialMediaHoverEffects() {
  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.2)';
      link.style.transition = 'transform 0.3s';
    });
    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
    });
  });
}

// Initialize all event listeners
function initializeEventListeners() {
  initializeAddToCartButtons();
  initializeShopNowButton();
  initializeSocialMediaHoverEffects();
}

// Run initialization on page load
document.addEventListener('DOMContentLoaded', initializeEventListeners);
