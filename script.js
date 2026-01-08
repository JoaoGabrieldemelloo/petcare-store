const produtos = [
  { nome: "Ração Premium 10kg para cães", preco: 159.90, img: "img/racao.jpg" },
  { nome: "Brinquedo mordedor resistente", preco: 29.90, img: "img/brinquedo.jpg" },
  { nome: "Coleira ajustável para cães", preco: 24.90, img: "img/coleira.jpg" },
  { nome: "Areia higiênica para gatos", preco: 39.90, img: "img/areia.jpg" },
  { nome: "Shampoo neutro para pets", preco: 22.90, img: "img/shampoo.jpg" },
  { nome: "Petisco bifinho para cães", preco: 14.90, img: "img/petisco.jpg" }
];

let carrinho = [];
let total = 0;

function carregarProdutos() {
  const area = document.getElementById("lista-produtos");

  produtos.forEach((p, i) => {
    area.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button onclick="adicionarCarrinho(${i})">Adicionar ao carrinho</button>
      </div>
    `;
  });
}

function adicionarCarrinho(i) {
  carrinho.push(produtos[i]);
  total += produtos[i].preco;
  atualizarCarrinho();
}

function removerItem(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("itens-carrinho");
  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    lista.innerHTML += `
      <li>
        ${item.nome} - R$ ${item.preco.toFixed(2)}
        <button onclick="removerItem(${index})">remover</button>
      </li>
    `;
  });

  document.getElementById("total").innerText =
    "Total: R$ " + total.toFixed(2);
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let texto = "Olá! Gostaria de fazer o seguinte pedido:%0A";

  carrinho.forEach(item => {
    texto += "- " + item.nome + " | R$ " + item.preco.toFixed(2) + "%0A";
  });

  texto += "%0ATotal: R$ " + total.toFixed(2);

  const url = `https://wa.me/55DDDNUMERO?text=${texto}`;
  window.open(url);
}

carregarProdutos();
