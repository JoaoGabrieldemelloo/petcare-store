let total = 0;
let items = [];

function addToCart(name, price) {
  items.push({ name, price });
  total += price;

  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function finishWhatsApp() {
  let message = "Olá! Quero finalizar minha compra:\n\n";

  items.forEach(item => {
    message += `• ${item.name} - R$ ${item.price.toFixed(2)}\n`;
  });

  message += `\nTotal: R$ ${total.toFixed(2)}`;

  const url = "https://wa.me/55" + "?" + "text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
