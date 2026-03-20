// Base de datos de productos - Manualidades de Pascua
const productsDatabase = {
    'egg-painting-kit': {
        id: 'egg-painting-kit',
        name: 'Estuche de Conejito',
        price: '$1.000',
        image: 'imagenPascua/9.jpeg',
        description: 'Estuche para guardar huevos de Pascua, disponible en colores verde, celeste claro y oscuro, rosado y fucsia, Capacidad para 8 huevos',
        specs: {
            contenido: 'sin contenido',
            material: 'Papel de goma eva de alta calidad',
            edades: 'A partir de 5 años',
            incluye: 'Sin contenido',
            colores: 'Rosa, lila, amarillo, verde, azul, blanco',
            tamaño: 'Caja 10x8x10 cm'
        }
    },
    'easter-basket': {
        id: 'easter-basket',
        name: 'Canasta Decorativa de Pascua',
        price: '$1.000',
        image: 'imagenPascua/5.jpeg',
        description: 'Hermosa canasta artesanal hecha a mano con cintas de satén en colores pastel, flores artificiales. Ideal como centro de mesa o regalo de Pascua.',
        specs: {
            material: 'Articolos de Decoracion y cartón resistente de muy Buena calidad',
            decoración: 'Cintas de satén rosa y lavanda Flores decorativa',
            incluye: 'Relleno de papel',
            dimensiones: '35x25x20 cm',
            peso: '450g',
            uso: 'Centro de mesa o regalo'
        }
    },
    'easter-garland': {
        id: 'easter-garland',
        name: 'Brochetas de Conejitas de Pascua',
        price: '$300 unidad y $3.200 por 12 unades',
        image: 'imagenPascua/11.jpeg',
        description: 'Brochetas con figuras de conejita de Pascua, ideales para colocar dulces y sorpresas para niños.',
        specs: {
            longitud: '15 Cm',
            material: 'Papel de alta calidad y tela selecionada',
            elementos: 'Sin contenido',
            colores: 'Rosa, amarillo, púrpura y verde',
            instalación: 'Palillo de madera pulida ',
            reutilizable: 'Sí, material resistente'
        }
    },
    'bunny-figurines': {
        id: 'bunny-figurines',
        name: 'Brochetas de Orejas de Conejo',
        price: '$300 unidad y $3.200 por 12 unades',
        image: 'imagenPascua/12.jpeg',
        description: 'Brochetas con orejas de conejo en variedad de colores como verde, azul, café, gris claro y oscuro, y calipso, ideales para colocar dulces y sorpresas para niños.',
        specs: {
            cantidad: '1 conejos por set de 12 brochetas',
            material: 'Fieltro y tela de algodón',
            tamaños: 'Pequeño (10cm), Mediano (15cm)',
            relleno: 'Sin Relleno',
            detalles: 'Ojos de botón y lazos de cinta',
            hecho: '100% artesanal'
        }
    },
    'flower-arrangement': {
        id: 'flower-arrangement',
        name: 'Relleno para Cajitas de Pascua',
        price: '$700',
        image: 'imagenPascua/6.jpeg',
        description: 'Relleno decorativo para cajitas de Pascua, disponible en variedad de colores. Ideal para complementar regalos y presentaciones.',
        specs: {
            contenido: 'Relleno',
            material: 'Papel Relleno',
            seguridad: 'Materiales no tóxicos certificados',
            edades: 'A partir de 3 años',
            incluye: 'Sin contenido',
            proyectos: 'Sin contenido'
        }
    },
    'kids-craft-kit': {
        id: 'kids-craft-kit',
        name: 'Brochetas de Conejitos de Pascua',
        price: '$300 unidad y $3.200 por 12 unades',
        image: 'imagenPascua/10.jpeg',
        description: 'Brochetas con figuras de conejito de Pascua, ideales para colocar dulces y sorpresas para niños.',
        specs: {
            cantidad: '1 conejos por set de 12 brochetas',
            material: 'Fieltro y tela de algodón',
            tamaños: 'Pequeño (10cm), Mediano (15cm)',
            relleno: 'Sin Relleno',
            detalles: 'Ojos de botón y lazos de cinta',
            hecho: '100% artesanal'
        }
    }
};

// WhatsApp number - UPDATED
const WHATSAPP_NUMBER = '56966318212';

// Estado del carrito
let cart = [];
let currentProduct = null;
let currentQuantity = 1;

// Función para abrir el modal de producto
function openProductModal(productId) {
    const productData = productsDatabase[productId];

    if (!productData) {
        console.error('Producto no encontrado:', productId);
        return;
    }

    currentProduct = productData;
    currentQuantity = 1;

    document.getElementById('modalProductName').textContent = productData.name;
    document.getElementById('modalProductPrice').textContent = productData.price;
    document.getElementById('modalProductImage').src = productData.image;
    document.getElementById('modalProductDescription').textContent = productData.description;
    document.getElementById('quantity').value = 1;

    const specsContainer = document.getElementById('modalSpecs');
    specsContainer.innerHTML = '';

    if (productData.specs) {
        for (const [key, value] of Object.entries(productData.specs)) {
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';

            let icon = 'fas fa-info-circle';
            if (key === 'contenido' || key === 'cantidad') icon = 'fas fa-box-open';
            else if (key === 'material') icon = 'fas fa-palette';
            else if (key === 'edades' || key === 'seguridad') icon = 'fas fa-child';
            else if (key === 'incluye' || key === 'extras') icon = 'fas fa-gift';
            else if (key === 'colores') icon = 'fas fa-paint-brush';
            else if (key === 'tamaño' || key === 'dimensiones' || key === 'tamaños' || key === 'altura' || key === 'longitud') icon = 'fas fa-ruler';
            else if (key === 'decoración' || key === 'detalles') icon = 'fas fa-star';
            else if (key === 'peso') icon = 'fas fa-weight-hanging';
            else if (key === 'uso' || key === 'proyectos') icon = 'fas fa-lightbulb';
            else if (key === 'flores') icon = 'fas fa-seedling';
            else if (key === 'jarrón') icon = 'fas fa-vase';
            else if (key === 'relleno') icon = 'fas fa-cloud';
            else if (key === 'hecho') icon = 'fas fa-hands';
            else if (key === 'instalación') icon = 'fas fa-tools';
            else if (key === 'reutilizable') icon = 'fas fa-recycle';
            else if (key === 'mantenimiento') icon = 'fas fa-broom';
            else if (key === 'elementos') icon = 'fas fa-shapes';

            specItem.innerHTML = `
                <div class="spec-label">
                    <i class="${icon}"></i>
                    <strong>${capitalizeFirst(key)}:</strong>
                </div>
                <div class="spec-value">${value}</div>
            `;
            specsContainer.appendChild(specItem);
        }
    }

    document.getElementById('productModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentProduct = null;
    currentQuantity = 1;
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity < 99) {
        quantity++;
        quantityInput.value = quantity;
        currentQuantity = quantity;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        currentQuantity = quantity;
    }
}

function buyNow() {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('quantity').value);

    let message = '🐰 ¡Hola! Estoy interesado en comprar:\n\n';
    message += `*${currentProduct.name}*\n`;
    message += `Precio: ${currentProduct.price}\n`;
    message += `Cantidad: ${quantity}\n\n`;

    if (currentProduct.specs) {
        message += 'Detalles:\n';
        for (const [key, value] of Object.entries(currentProduct.specs)) {
            message += `• ${capitalizeFirst(key)}: ${value}\n`;
        }
    }

    message += '\n¿Podrían confirmar disponibilidad y método de pago? 🥚';

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeProductModal();
}

function addToCartFromModal() {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    const existingProductIndex = cart.findIndex(item => item.id === currentProduct.id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
        showNotification(`Se agregaron ${quantity} unidad(es) más de "${currentProduct.name}"`);
    } else {
        cart.push({
            ...currentProduct,
            quantity: quantity
        });
        showNotification(`"${currentProduct.name}" agregado al carrito (${quantity} unidad${quantity > 1 ? 'es' : ''})`);
    }

    updateCartCount();
    closeProductModal();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;

    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.animation = 'none';
    setTimeout(() => {
        cartIcon.style.animation = 'pulse 0.5s ease';
    }, 10);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'block') {
        closeCart();
    } else {
        openCart();
    }
}

function openCart() {
    renderCart();
    document.getElementById('cartModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function parsePrice(priceStr) {
    // Extract the first price number from strings like "$300 unidad y $3.200 por 12 unades"
    const match = priceStr.match(/\$([0-9.,]+)/);
    if (match) {
        return parseFloat(match[1].replace(/\./g, '').replace(',', ''));
    }
    return 0;
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
                <p class="empty-cart-subtitle">Agrega productos para comenzar tu compra 🐰</p>
            </div>
        `;
        document.getElementById('cartTotal').textContent = '$0';
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        const price = parsePrice(item.price);
        const itemTotal = price * item.quantity;
        total += itemTotal;

        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} × ${item.quantity}</div>
                    <div class="cart-item-subtotal">Subtotal: $${itemTotal.toLocaleString('es-CL')}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="cart-quantity-controls">
                        <button class="cart-qty-btn" data-action="decrease" data-index="${index}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="cart-quantity">${item.quantity}</span>
                        <button class="cart-qty-btn" data-action="increase" data-index="${index}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="cart-item-remove" data-action="remove" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('cartTotal').textContent = `$${total.toLocaleString('es-CL')}`;

    // Attach event listeners to cart item buttons
    cartItemsContainer.querySelectorAll('[data-action="decrease"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const idx = parseInt(this.getAttribute('data-index'));
            updateCartQuantity(idx, -1);
        });
    });

    cartItemsContainer.querySelectorAll('[data-action="increase"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const idx = parseInt(this.getAttribute('data-index'));
            updateCartQuantity(idx, 1);
        });
    });

    cartItemsContainer.querySelectorAll('[data-action="remove"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const idx = parseInt(this.getAttribute('data-index'));
            removeFromCart(idx);
        });
    });
}

function updateCartQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;

        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else if (cart[index].quantity > 99) {
            cart[index].quantity = 99;
            showNotification('Cantidad máxima: 99 unidades por producto');
        }

        updateCartCount();
        renderCart();
    }
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
    showNotification(`"${removedItem.name}" eliminado del carrito`);
}

function clearCart() {
    if (cart.length === 0) {
        showNotification('El carrito ya está vacío');
        return;
    }

    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        cart = [];
        updateCartCount();
        renderCart();
        showNotification('Carrito vaciado');
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío');
        return;
    }

    let message = '🐰🥚 ¡Hola! Me gustaría hacer el siguiente pedido de Pascua:\n\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n';

    let total = 0;
    cart.forEach((item, index) => {
        const price = parsePrice(item.price);
        const itemTotal = price * item.quantity;
        total += itemTotal;

        message += `\n${index + 1}. *${item.name}*\n`;
        message += `   Precio unitario: ${item.price}\n`;
        message += `   Cantidad: ${item.quantity}\n`;
        message += `   Subtotal: $${itemTotal.toLocaleString('es-CL')}\n`;
    });

    message += '\n━━━━━━━━━━━━━━━━━━━━\n';
    message += `\n*TOTAL: $${total.toLocaleString('es-CL')}*\n\n`;
    message += '¿Podrían confirmar disponibilidad, método de pago y tiempo de entrega?\n\n';
    message += '¡Gracias! 🌸';

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    showNotification('Pedido enviado a WhatsApp');
}

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    const productModal = document.getElementById('productModal');
    const cartModal = document.getElementById('cartModal');

    if (event.target === productModal) {
        closeProductModal();
    }
    if (event.target === cartModal) {
        closeCart();
    }
});

// Cerrar modales con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProductModal();
        closeCart();
    }
});

// Inicializar eventos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // --- Cart icon button ---
    const cartIconBtn = document.getElementById('cartIconBtn');
    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCart();
        });
    }

    // --- Close product modal button ---
    const closeProductModalBtn = document.getElementById('closeProductModalBtn');
    if (closeProductModalBtn) {
        closeProductModalBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeProductModal();
        });
    }

    // --- Close cart modal button ---
    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeCart();
        });
    }

    // --- Quantity buttons ---
    const decreaseQtyBtn = document.getElementById('decreaseQtyBtn');
    if (decreaseQtyBtn) {
        decreaseQtyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            decreaseQuantity();
        });
    }

    const increaseQtyBtn = document.getElementById('increaseQtyBtn');
    if (increaseQtyBtn) {
        increaseQtyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            increaseQuantity();
        });
    }

    // --- Add to cart button ---
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            addToCartFromModal();
        });
    }

    // --- Buy now button ---
    const buyNowBtn = document.getElementById('buyNowBtn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            buyNow();
        });
    }

    // --- Checkout button ---
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            checkout();
        });
    }

    // --- Clear cart button ---
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            clearCart();
        });
    }

    // --- Product cards ---
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking inside modal content
            if (e.target.closest('.modal')) return;
            const productId = this.getAttribute('data-product-id');
            openProductModal(productId);
        });
    });

    // --- Stop propagation on modal content to prevent closing when clicking inside ---
    document.querySelectorAll('.modal-content').forEach(content => {
        content.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    // Simple fade-in animation for product cards
    productCards.forEach((card, index) => {
        card.style.opacity = '1';
        card.style.transform = 'none';
    });

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ensure body is visible
    document.body.style.opacity = '1';
});

console.log('🐰 Manualidades de Pascua - Sistema de carrito inicializado correctamente 🥚');
