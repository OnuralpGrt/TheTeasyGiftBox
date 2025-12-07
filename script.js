// Smooth Scroll
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

// Cart Functionality
let cartCount = 0;
const cartBadge = document.querySelector('.cart-badge');
const cartButtons = document.querySelectorAll('.btn-cart');

cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartBadge.textContent = cartCount;
        
        // Animation
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 200);
        
        // Show notification
        showNotification('Ürün sepete eklendi!');
    });
});

// Notification Function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff6b9d;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize scroll animations
function initScrollAnimations() {
    // Observe all cards
    document.querySelectorAll('.product-card, .category-card, .feature-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// Initialize on page load
initScrollAnimations();

// Search Functionality
const searchIcon = document.querySelector('.fa-search');
if (searchIcon) {
    searchIcon.addEventListener('click', function() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Ürün ara...';
        searchInput.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            padding: 1rem 2rem;
            border: 2px solid #ff6b9d;
            border-radius: 50px;
            font-size: 1rem;
            width: 300px;
            z-index: 10000;
            outline: none;
            animation: slideDown 0.3s ease-out;
        `;
        
        document.body.appendChild(searchInput);
        searchInput.focus();
        
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                if (document.body.contains(searchInput)) {
                    searchInput.style.animation = 'slideUp 0.3s ease-out';
                    setTimeout(() => {
                        document.body.removeChild(searchInput);
                    }, 300);
                }
            }, 200);
        });
    });
}

// Add search animations
const searchStyle = document.createElement('style');
searchStyle.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(searchStyle);

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking on a link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Snow Effect
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Use different snowflake characters for variety
    const snowflakeChars = ['❄', '❅', '❆', '✻', '✼', '✽', '✾', '✿'];
    snowflake.innerHTML = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
    
    // Random size between 0.4em and 1.8em (slightly larger range)
    const size = Math.random() * 1.4 + 0.4;
    snowflake.style.fontSize = size + 'em';
    
    // Random starting position
    snowflake.style.left = Math.random() * 100 + '%';
    
    // Random animation duration between 4 and 10 seconds (slower for more visible effect)
    const duration = Math.random() * 6 + 4;
    snowflake.style.animationDuration = duration + 's';
    
    // Random drift (horizontal movement) - increased range
    const drift = (Math.random() - 0.5) * 300;
    snowflake.style.setProperty('--drift', drift + 'px');
    
    // Random delay
    snowflake.style.animationDelay = Math.random() * 3 + 's';
    
    // Higher opacity for better visibility (0.6 to 1.0)
    snowflake.style.opacity = Math.random() * 0.4 + 0.6;
    
    return snowflake;
}

function initSnow() {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);
    
    // Create initial snowflakes - increased count for more density
    const snowflakeCount = 150;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = createSnowflake();
        snowContainer.appendChild(snowflake);
        
        // Remove snowflake after animation completes
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
        }, 12000);
    }
    
    // Continuously add new snowflakes more frequently
    setInterval(() => {
        // Keep adding snowflakes to maintain density
        if (snowContainer.children.length < snowflakeCount) {
            const snowflake = createSnowflake();
            snowContainer.appendChild(snowflake);
            
            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            }, 12000);
        }
    }, 200); // More frequent creation (every 200ms instead of 500ms)
}

// Initialize snow effect when page loads
window.addEventListener('load', () => {
    initSnow();
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show success notification
        showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız. 💌');
        
        // Reset form
        contactForm.reset();
        
        // Here you would normally send the data to a server
        console.log('Form Data:', formData);
    });
}

// Image Error Handler
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.warn('Resim yüklenemedi:', this.src);
        // Fallback placeholder eklenebilir
        this.style.display = 'none';
    });
    
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// Category Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card[data-category]');
    const productsGrid = document.getElementById('products-grid');
    const productsTitle = document.getElementById('products-title');
    
    if (!productsGrid || !productsTitle) return;
    
    // Yılbaşı Kutusu ürünleri (image0.jpeg'den image14.jpeg'e kadar - 15 ürün)
    const yilbasiProducts = [];
    for (let i = 0; i <= 14; i++) {
        yilbasiProducts.push({
            image: `image${i}.jpeg`,
            title: `Yılbaşı Kutusu ${i + 1}`,
            description: 'Yeni yılı kutlamak için özel olarak tasarlanmış, neşe dolu ve eğlenceli ürünlerle hazırlanmış hediye kutusu.'
        });
    }
    
    // Öğretmenler Günü Kutusu ürünleri
    const ogretmenlerProducts = [{
        image: 'ogretmenler-gunu-1.jpeg',
        title: 'Öğretmenler Günü Kutusu 1',
        description: 'Öğretmenlerinize duyduğunuz saygı ve sevgiyi en güzel şekilde ifade eden, özenle hazırlanmış özel hediye kutusu. Çiçekler, parfüm, defter ve Türk kahvesi ile dolu özel tasarım kutu.'
    }];
    
    // Tüm ürünleri sakla (varsayılan ürünler)
    let defaultProducts = [];
    const productCards = productsGrid.querySelectorAll('.product-card');
    if (productCards.length > 0) {
        defaultProducts = Array.from(productCards).map(card => ({
            html: card.outerHTML
        }));
    }
    
    // Kategori tıklama olayları
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Smooth scroll to products section
            document.getElementById('products').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Filter products based on category
            if (category === 'yilbasi') {
                displayYilbasiProducts();
            } else if (category === 'ogretmenler') {
                displayOgretmenlerProducts();
            } else {
                displayDefaultProducts();
            }
        });
    });
    
    // Yılbaşı ürünlerini göster
    function displayYilbasiProducts() {
        productsTitle.textContent = 'Yılbaşı Kutusu Ürünleri';
        productsGrid.innerHTML = '';
        
        yilbasiProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'">
                    <div class="product-overlay">
                        <button class="btn btn-small">Hızlı Görüntüle</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <a href="https://www.instagram.com/theteasygiftbox_/?igsh=MWFhczRsdGFwZ3RvcQ%3D%3D" target="_blank" class="btn btn-price">Fiyat Bilgisi Al</a>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        
        // Re-initialize animations
        setTimeout(() => {
            initScrollAnimations();
        }, 100);
    }
    
    // Öğretmenler Günü ürünlerini göster
    function displayOgretmenlerProducts() {
        productsTitle.textContent = 'Öğretmenler Günü Kutusu Ürünleri';
        productsGrid.innerHTML = '';
        
        ogretmenlerProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'">
                    <div class="product-overlay">
                        <button class="btn btn-small">Hızlı Görüntüle</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <a href="https://www.instagram.com/theteasygiftbox_/?igsh=MWFhczRsdGFwZ3RvcQ%3D%3D" target="_blank" class="btn btn-price">Fiyat Bilgisi Al</a>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        
        // Re-initialize animations
        setTimeout(() => {
            initScrollAnimations();
        }, 100);
    }
    
    // Varsayılan ürünleri göster
    function displayDefaultProducts() {
        productsTitle.textContent = 'Popüler Ürünler';
        if (defaultProducts.length > 0) {
            productsGrid.innerHTML = defaultProducts.map(p => p.html).join('');
        }
        
        // Re-initialize animations
        setTimeout(() => {
            initScrollAnimations();
        }, 100);
    }
});


console.log('The Teasy Gift Box - Site yüklendi! 🎁');

