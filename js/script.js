const cart = document.getElementById("cart");
const totalElement = document.querySelector(".total");

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach((item) => {
    const price = parseFloat(item.dataset.price);
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    total += price * quantity;
  });
  totalElement.textContent = `Total: ${total} DT`;
}

cart.addEventListener("click", (event) => {
  const target = event.target;
  const cartItem = target.closest(".cart-item");

  if (target.classList.contains("plus")) {
    const quantityElement = cartItem.querySelector(".quantity");
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    updateTotal();
  } else if (target.classList.contains("minus")) {
    const quantityElement = cartItem.querySelector(".quantity");
    const currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
      quantityElement.textContent = currentQuantity - 1;
      updateTotal();
    }
  } else if (target.classList.contains("remove")) {
    cartItem.remove();
    updateTotal();
  } else if (target.classList.contains("heart")) {
    target.classList.toggle("liked");
  }
});

updateTotal();
