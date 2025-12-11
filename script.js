// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
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

    // Cart Functionality (only if elements exist)
    const cartBadge = document.querySelector('.cart-badge');
    const cartButtons = document.querySelectorAll('.btn-cart');
    
    if (cartBadge && cartButtons.length > 0) {
        let cartCount = 0;
        cartButtons.forEach(button => {
            button.addEventListener('click', function() {
                cartCount++;
                if (cartBadge) {
                    cartBadge.textContent = cartCount;
                    cartBadge.style.transform = 'scale(1.3)';
                    setTimeout(() => {
                        cartBadge.style.transform = 'scale(1)';
                    }, 200);
                }
                showNotification('Ürün sepete eklendi!');
            });
        });
    }
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
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }
        });
    }
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

// Initialize on page load (after DOM is ready)
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

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
document.addEventListener('DOMContentLoaded', function() {
    initSnow();
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            
            const formData = {
                name: nameField ? nameField.value : '',
                email: emailField ? emailField.value : '',
                subject: subjectField ? subjectField.value : '',
                message: messageField ? messageField.value : ''
            };
            
            // Show success notification
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız. 💌');
            
            // Reset form
            contactForm.reset();
            
            // Here you would normally send the data to a server
            console.log('Form Data:', formData);
        });
    }
});

// Image Error Handler
document.addEventListener('DOMContentLoaded', function() {
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
        image: 'öğretmen.jpg',
        title: 'Öğretmenler Günü Kutusu 1',
        description: 'Öğretmenlerinize duyduğunuz saygı ve sevgiyi en güzel şekilde ifade eden, özenle hazırlanmış özel hediye kutusu. Çiçekler, parfüm, defter ve Türk kahvesi ile dolu özel tasarım kutu.'
    }];
    
    // İçimden Geldi Kutusu ürünleri
    const icimdenProducts = [{
        image: 'içimden_geldi.jpg',
        title: 'İçimden Geldi Kutusu 1',
        description: 'İçinizden geldiği gibi, özel bir anı yakalamak için tasarlanmış özel hediye kutusu. Sevdiklerinize sürpriz yapmak için mükemmel bir seçim.'
    }];
    
    // Yeni İş Kutusu ürünleri
    const yeniisProducts = [{
        image: 'yeni_iş.jpg',
        title: 'Yeni İş Kutusu 1',
        description: 'Yeni işe başlayan sevdikleriniz için özel olarak hazırlanmış, başarı dolu bir kariyer yolculuğu için motivasyon veren hediye kutusu. Rebul parfüm, defter, Türk kahvesi ve çikolata ile dolu özel tasarım kutu.'
    }];
    
    // Doğum Günü Kutusu ürünleri
    const dogumProducts = [{
        image: 'Dogum.jpg',
        title: 'Doğum Günü Kutusu 1',
        description: 'Sevdiklerinizin özel gününü unutulmaz kılmak için özenle hazırlanmış doğum günü hediye kutusu. Özel tasarım ve kaliteli ürünlerle dolu, sevgi dolu bir hediye.'
    }];
    
    // Sevgililer Günü Kutusu ürünleri
    const sevgililerProducts = [{
        image: 'sev.jpg',
        title: 'Sevgililer Günü Kutusu 1',
        description: 'Sevgilinize duyduğunuz aşkı ve sevgiyi en romantik şekilde ifade eden, özenle hazırlanmış özel hediye kutusu. Romantik ürünlerle dolu, aşk dolu bir hediye.'
    }];
    
    // Kategori tıklama olayları
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const productsSection = document.getElementById('products');
            
            // Show products section and scroll to it
            if (productsSection) {
                productsSection.style.display = 'block';
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Filter products based on category
            if (category === 'yilbasi') {
                displayYilbasiProducts();
            } else if (category === 'ogretmenler') {
                displayOgretmenlerProducts();
            } else if (category === 'icimden') {
                displayIcimdenProducts();
            } else if (category === 'yeniis') {
                displayYeniisProducts();
            } else if (category === 'dogum') {
                displayDogumProducts();
            } else if (category === 'sevgililer') {
                displaySevgililerProducts();
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
                    <img src="${product.image}" alt="${product.title}">
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
    
    // İçimden Geldi ürünlerini göster
    function displayIcimdenProducts() {
        productsTitle.textContent = 'İçimden Geldi Kutusu Ürünleri';
        productsGrid.innerHTML = '';
        
        icimdenProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
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
    
    // Yeni İş ürünlerini göster
    function displayYeniisProducts() {
        productsTitle.textContent = 'Yeni İş Kutusu Ürünleri';
        productsGrid.innerHTML = '';
        
        yeniisProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
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
    
    // Doğum Günü ürünlerini göster
    function displayDogumProducts() {
        productsTitle.textContent = 'Doğum Günü Kutusu Ürünleri';
        productsGrid.innerHTML = '';
        
        dogumProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
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
    
    // Sevgililer Günü ürünlerini göster
    function displaySevgililerProducts() {
        productsTitle.textContent = 'Sevgililer Günü Kutusu Ürünleri';
        productsGrid.innerHTML = '';
        
        sevgililerProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
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
    
});

// New Year Campaign Popup
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('newYearPopup');
    const backdrop = document.getElementById('popupBackdrop');
    const closeBtn = document.getElementById('popupClose');
    
    if (!popup) return;
    
    const openPopup = () => {
        popup.classList.add('show');
        popup.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    
    const closePopup = () => {
        popup.classList.remove('show');
        popup.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };
    
    // Show popup after a short delay (every time page loads)
    setTimeout(openPopup, 800);
    
    // Close button event
    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }
    
    // Backdrop click event
    if (backdrop) {
        backdrop.addEventListener('click', closePopup);
    }
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('show')) {
            closePopup();
        }
    });
});

// Site yüklendi mesajı
document.addEventListener('DOMContentLoaded', function() {
    console.log('The Teasy Gift Box - Site yüklendi! 🎁');
});

