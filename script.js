function addToCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '<h2>Carrinho de Compras</h2>';
    let total = 0;

    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const quantity = item.querySelector('input[type="number"]').value;
        if (checkbox.checked) {
            const label = item.querySelector('label').innerText;
            const price = parseFloat(label.split(' - R$')[1]);
            total += price * quantity;
            cart.innerHTML += `<p>${label} x ${quantity}</p>`;
        }
    });

    cart.innerHTML += `<h3>Total: R$${total.toFixed(2)}</h3>`;
    cart.innerHTML += '<button onclick="addMoreItems()">Adicionar Mais Itens</button>';
    cart.innerHTML += '<button onclick="finalizeOrder()">Finalizar Pedido</button>';
}

function addMoreItems() {
    document.getElementById('cart').innerHTML = '';
}

function finalizeOrder() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '<h2>Finalização do Pedido</h2>';
    cart.innerHTML += '<p>Opções de Pagamento:</p>';
    cart.innerHTML += '<input type="radio" id="debit" name="payment" value="debit"><label for="debit">Cartão de Débito</label><br>';
    cart.innerHTML += '<input type="radio" id="credit" name="payment" value="credit"><label for="credit">Cartão de Crédito</label><br>';
    cart.innerHTML += '<input type="radio" id="pix" name="payment" value="pix"><label for="pix">Pix</label><br>';
    cart.innerHTML += '<p>Nome Completo: <input type="text" id="name"></p>';
    cart.innerHTML += '<p>Endereço: <input type="text" id="address"></p>';
    cart.innerHTML += '<button onclick="confirmOrder()">Confirmar Pedido</button>';
    cart.innerHTML += '<button onclick="cancelOrder()">Cancelar Pedido</button>';
}

function confirmOrder() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    alert(`Pedido confirmado! Nome: ${name}, Endereço: ${address}, Pagamento: ${payment}`);
}

function cancelOrder() {
    alert('Pedido cancelado.');
    document.getElementById('cart').innerHTML = '';
}
