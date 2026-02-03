/**
 * QUENORA PAYSAGE - Scripts
 * ========================================================================== */

(function() {
    'use strict';

    /**
     * Sakura Petals Animation
     */
    const Sakura = {
        container: null,
        interval: null,

        init() {
            this.container = document.getElementById('sakura');
            if (!this.container) return;

            // Create initial petals
            for (let i = 0; i < 10; i++) {
                setTimeout(() => this.createPetal(), i * 200);
            }

            // Continue creating petals
            this.interval = setInterval(() => this.createPetal(), 800);
        },

        createPetal() {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            const size = Math.random() * 8 + 8;
            const duration = Math.random() * 5 + 8;
            const delay = Math.random() * 5;
            
            Object.assign(petal.style, {
                left: `${Math.random() * 100}vw`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`
            });

            this.container.appendChild(petal);

            // Remove petal after animation
            setTimeout(() => petal.remove(), 15000);
        },

        destroy() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }
    };

    /**
     * Mobile Navigation
     */
    const MobileNav = {
        toggle: null,
        links: null,
        isOpen: false,

        init() {
            this.toggle = document.querySelector('.nav__toggle');
            this.links = document.querySelector('.nav__links');
            
            if (!this.toggle || !this.links) return;

            this.toggle.addEventListener('click', () => this.handleToggle());
            
            // Close menu on link click
            this.links.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.close());
            });

            // Close menu on resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 968) this.close();
            });
        },

        handleToggle() {
            this.isOpen = !this.isOpen;
            this.links.style.display = this.isOpen ? 'flex' : 'none';
            
            if (this.isOpen) {
                Object.assign(this.links.style, {
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    right: '0',
                    flexDirection: 'column',
                    background: 'rgba(254, 252, 250, 0.98)',
                    padding: '2rem',
                    gap: '1.5rem',
                    borderBottom: '1px solid var(--gris-clair)'
                });
            }
        },

        close() {
            this.isOpen = false;
            if (window.innerWidth <= 968) {
                this.links.style.display = 'none';
            } else {
                this.links.style.cssText = '';
            }
        }
    };

    /**
     * Smooth Scroll for anchor links
     */
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
            });
        },

        handleClick(e, anchor) {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            
            const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    /**
     * Form Handling
     */
    const ContactForm = {
        form: null,

        init() {
            this.form = document.querySelector('.form');
            if (!this.form) return;

            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        },

        handleSubmit(e) {
            e.preventDefault();

            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());

            // Validate
            if (!this.validate(data)) return;

            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            this.showMessage('Merci ! Votre message a bien été envoyé.', 'success');
            this.form.reset();
        },

        validate(data) {
            const { name, email, message } = data;

            if (!name || name.trim().length < 2) {
                this.showMessage('Veuillez entrer votre nom.', 'error');
                return false;
            }

            if (!email || !this.isValidEmail(email)) {
                this.showMessage('Veuillez entrer une adresse email valide.', 'error');
                return false;
            }

            if (!message || message.trim().length < 10) {
                this.showMessage('Veuillez entrer un message (minimum 10 caractères).', 'error');
                return false;
            }

            return true;
        },

        isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

        showMessage(text, type) {
            // Remove existing message
            const existing = this.form.querySelector('.form__message');
            if (existing) existing.remove();

            // Create message element
            const message = document.createElement('div');
            message.className = `form__message form__message--${type}`;
            message.textContent = text;
            
            Object.assign(message.style, {
                padding: '1rem',
                marginBottom: '1rem',
                background: type === 'success' ? '#d4edda' : '#f8d7da',
                color: type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                borderRadius: '4px'
            });

            this.form.insertBefore(message, this.form.firstChild);

            // Auto remove after 5 seconds
            setTimeout(() => message.remove(), 5000);
        }
    };

    /**
     * Intersection Observer for animations
     */
    const ScrollAnimations = {
        init() {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                },
                { threshold: 0.1 }
            );

            document.querySelectorAll('.service-card, .portfolio-item, .testimonial').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        }
    };

    // Add CSS for visible state
    const style = document.createElement('style');
    style.textContent = '.is-visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);

    /**
     * Initialize all modules
     */
    function init() {
        Sakura.init();
        MobileNav.init();
        SmoothScroll.init();
        ContactForm.init();
        ScrollAnimations.init();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
