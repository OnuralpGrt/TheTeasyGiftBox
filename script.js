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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.product-card, .category-card, .feature-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
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

// Mobile Menu Toggle (if needed)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        if (nav && !document.querySelector('.mobile-menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--dark-color);
                cursor: pointer;
            `;
            
            const headerContent = document.querySelector('.header-content');
            headerContent.insertBefore(menuBtn, nav);
            
            menuBtn.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = 'white';
                nav.style.padding = '1rem';
                nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

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

console.log('Teasy Gift Box - Site yüklendi! 🎁');

