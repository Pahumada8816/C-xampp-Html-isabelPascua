// Base de datos de productos - Manualidades de Pascua
const productsDatabase = {
    'egg-painting-kit': {
        id: 'egg-painting-kit',
        name: 'Kit de Pintura de Huevos',
        price: '$12.990',
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/620822/2026-03-08/a45acb52-55a1-4bb9-8725-75f866bca89a.png',
        description: 'Kit completo con pinturas acrílicas de colores pastel, pinceles finos, huevos de plástico para decorar y stencils con diseños de Pascua. Perfecto para crear hermosos huevos decorados en familia.',
        specs: {
            contenido: '12 huevos + 8 pinturas + 4 pinceles',
            material: 'Pinturas acrílicas no tóxicas',
            edades: 'A partir de 5 años',
            incluye: 'Stencils de diseños pascuales',
            colores: 'Rosa, lila, amarillo, verde, azul, blanco',
            tamaño: 'Caja 30x20x10 cm'
        }
    },
    'easter-basket': {
        id: 'easter-basket',
        name: 'Canasta Decorativa de Pascua',
        price: '$18.990',
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/620822/2026-03-08/c0dad998-07b4-4b1b-b08f-a70c3f77d80d.png',
        description: 'Hermosa canasta artesanal tejida a mano con cintas de satén en colores pastel, flores artificiales y huevos decorativos. Ideal como centro de mesa o regalo de Pascua.',
        specs: {
            material: 'Mimbre natural tejido a mano',
            decoración: 'Cintas de satén rosa y lavanda',
            incluye: '6 huevos decorativos + flores',
            dimensiones: '35x25x20 cm',
            peso: '450g',
            uso: 'Centro de mesa o regalo'
        }
    },
    'easter-garland': {
        id: 'easter-garland',
        name: 'Guirnalda de Flores y Conejos',
        price: '$9.990',
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/620822/2026-03-08/a8329fa6-9912-4f28-98cd-5c469ea24703.png',
        description: 'Guirnalda decorativa con flores de papel artesanal, adorables conejos recortados y mini huevos colgantes. Perfecta para decorar paredes, ventanas o mesas.',
        specs: {
            longitud: '2 metros',
            material: 'Papel de alta calidad y cartulina',
            elementos: '8 flores + 5 conejos + 10 huevos',
            colores: 'Rosa, amarillo, púrpura y verde',
            instalación: 'Con cinta adhesiva o ganchos',
            reutilizable: 'Sí, material resistente'
        }
    },
    'bunny-figurines': {
        id: 'bunny-figurines',
        name: 'Figuras de Conejos Artesanales',
        price: '$14.990',
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/620822/2026-03-08/d8185266-8e4d-4a34-9d63-e25592eb688f.png',
        description: 'Adorables conejos hechos a mano en fieltro y tela de alta calidad. Cada set incluye 3 conejos de diferentes tamaños con ojos de botón y lazos de cinta.',
        specs: {
            cantidad: '3 conejos por set',
            material: 'Fieltro y tela de algodón',
            tamaños: 'Pequeño (10cm), Mediano (15cm), Grande (20cm)',
            relleno: 'Algodón hipoalergénico',
            detalles: 'Ojos de botón y lazos de cinta',
            hecho: '100% artesanal'
        }
    },
    'flower-arrangement': {
        id: 'flower-arrangement',
        name: 'Arreglo de Flores Artificiales',
        price: '$16.990',
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/620822/2026-03-08/d5390565-7294-4c7f-bd05-b7adc17adb19.png',
        description: 'Elegante arreglo primaveral en jarrón de cerámica decorativo. Incluye rosas, tulipanes, margaritas y lirios en tonos pastel con pequeños huevos de Pascua y mariposas.',
        specs: {
            flores: 'Rosas, tulipanes, margaritas y lirios',
            jarrón: 'Cerámica decorativa blanca',
            altura: '40 cm total',
            colores: 'Rosa, lavanda, amarillo y blanco',
            extras: 'Mini huevos y mariposas decorativas',
            mantenimiento: 'Sin agua, limpieza con paño seco'
        }
    },
    'kids-craft-kit': {
        id: 'kids-craft-kit',
        name: 'Kit de Manualidades Infantil',
        price: '$8.990',
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/620822/2026-03-08/8835097f-69a6-44ef-9c09-9383f1c8ee24.png',
        description: 'Kit divertido y seguro para niños con goma eva en formas de huevos y conejos, stickers brillantes, brillantina, limpiapipas, pompones y pegamento seguro.',
        specs: {
            contenido: '+50 piezas de manualidades',
            material: 'Goma eva, brillantina, pompones',
            seguridad: 'Materiales no tóxicos certificados',
            edades: 'A partir de 3 años',
            incluye: 'Stickers, limpiapipas, ojos móviles',
            proyectos: 'Guía con 5 proyectos paso a paso'
        }
    }
};

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
    if (quantity < 10) {
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
    const phoneNumber = '56938934201';

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

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
        const price = parseFloat(item.price.replace('$', '').replace('.', '').replace(',', ''));
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
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${index}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="cart-quantity">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${index}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('cartTotal').textContent = `$${total.toLocaleString('es-CL')}`;
}

function updateCartQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;

        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else if (cart[index].quantity > 10) {
            cart[index].quantity = 10;
            showNotification('Cantidad máxima: 10 unidades por producto');
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

    const phoneNumber = '56938934201';
    let message = '🐰🥚 ¡Hola! Me gustaría hacer el siguiente pedido de Pascua:\n\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n';

    let total = 0;
    cart.forEach((item, index) => {
        const price = parseFloat(item.price.replace('$', '').replace('.', '').replace(',', ''));
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

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    showNotification('Pedido enviado a WhatsApp');
}

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    const cartModal = document.getElementById('cartModal');

    if (event.target === productModal) {
        closeProductModal();
    }
    if (event.target === cartModal) {
        closeCart();
    }
};

// Cerrar modales con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProductModal();
        closeCart();
    }
});

// Inicializar eventos de productos
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            openProductModal(productId);
        });

        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
    });

    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    productCards.forEach((card, index) => {
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(item);
    });

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(item);
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

    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
});

console.log('🐰 Manualidades de Pascua - Sistema de carrito inicializado correctamente 🥚');