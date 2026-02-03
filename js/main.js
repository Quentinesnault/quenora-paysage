
(function() {
    'use strict';

       CONFIGURATION

    const CONFIG = {
        sakura: {
            initialCount: 10,
            createInterval: 800,
            createDelay: 200,
            lifetime: 15000
        },
        animation: {
            threshold: 0.1,
            fadeDelay: 50
        },
        nav: {
            mobileBreakpoint: 968
        }
    };

       UTILITY FUNCTIONS

    const Utils = {
        exists: (selector) => document.querySelector(selector) !== null,

        select: (selector) => document.querySelector(selector),

        selectAll: (selector) => document.querySelectorAll(selector),

        isMobile: () => window.innerWidth <= CONFIG.nav.mobileBreakpoint,

        throttle: (func, delay) => {
            let lastCall = 0;
            return (...args) => {
                const now = Date.now();
                if (now - lastCall >= delay) {
                    lastCall = now;
                    func(...args);
                }
            };
        },

        debounce: (func, delay) => {
            let timeoutId;
            return (...args) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func(...args), delay);
            };
        }
    };

       SAKURA PETALS MODULE

    const Sakura = {
        container: null,
        interval: null,
        petalsCount: 0,
        maxPetals: 20,

        init() {
            this.container = Utils.select('#sakura');
            if (!this.container) return;

            for (let i = 0; i < CONFIG.sakura.initialCount; i++) {
                setTimeout(() => this.createPetal(), i * CONFIG.sakura.createDelay);
            }

            this.interval = setInterval(() => {
                if (this.petalsCount < this.maxPetals) {
                    this.createPetal();
                }
            }, CONFIG.sakura.createInterval);
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
            this.petalsCount++;

            setTimeout(() => {
                if (petal.parentNode) {
                    petal.remove();
                    this.petalsCount--;
                }
            }, CONFIG.sakura.lifetime);
        },

        destroy() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            if (this.container) {
                this.container.innerHTML = '';
            }
            this.petalsCount = 0;
        }
    };

       MOBILE NAVIGATION MODULE

    const MobileNav = {
        toggle: null,
        links: null,
        isOpen: false,

        init() {
            this.toggle = Utils.select('.nav__toggle');
            this.links = Utils.select('.nav__links');
            
            if (!this.toggle || !this.links) return;

            this.toggle.addEventListener('click', () => this.handleToggle());
            
            Utils.selectAll('.nav__links a').forEach(link => {
                link.addEventListener('click', () => this.close());
            });

            window.addEventListener('resize', Utils.debounce(() => {
                if (!Utils.isMobile()) this.close();
            }, 250));

            document.addEventListener('click', (e) => {
                if (this.isOpen && !e.target.closest('.nav')) {
                    this.close();
                }
            });
        },

        handleToggle() {
            this.isOpen ? this.close() : this.open();
        },

        open() {
            this.isOpen = true;
            this.links.style.display = 'flex';
            
            Object.assign(this.links.style, {
                position: 'absolute',
                top: '100%',
                left: '0',
                right: '0',
                flexDirection: 'column',
                background: 'rgba(254, 252, 250, 0.98)',
                padding: '2rem',
                gap: '1.5rem',
                borderBottom: '1px solid var(--gris-clair)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            });

            const spans = this.toggle.querySelectorAll('span');
            if (spans.length === 3) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        },

        close() {
            this.isOpen = false;
            
            if (Utils.isMobile()) {
                this.links.style.display = 'none';
            } else {
                this.links.style.cssText = '';
            }

            const spans = this.toggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    };

       SMOOTH SCROLL MODULE

    const SmoothScroll = {
        navHeight: 0,

        init() {
            this.navHeight = Utils.select('.nav')?.offsetHeight || 0;

            Utils.selectAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
            });
        },

        handleClick(e, anchor) {
            const href = anchor.getAttribute('href');
            if (href === '#' || href === '#!') return;

            const target = Utils.select(href);
            if (!target) return;

            e.preventDefault();
            
            const targetPosition = target.offsetTop - this.navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

       CONTACT FORM MODULE

    const ContactForm = {
        form: null,

        init() {
            this.form = Utils.select('.form');
            if (!this.form) return;

            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        },

        handleSubmit(e) {
            e.preventDefault();

            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());

            if (!this.validate(data)) return;

            this.simulateSubmit(data);
        },

        validate(data) {
            const { name, email, message } = data;

            if (!name || name.trim().length < 2) {
                this.showMessage('Veuillez entrer votre nom complet.', 'error');
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
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        simulateSubmit(data) {
            console.log('Données du formulaire:', data);
            
            this.showMessage('Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.', 'success');
            this.form.reset();
        },

        showMessage(text, type) {
            const existing = this.form.querySelector('.form__message');
            if (existing) existing.remove();

            const message = document.createElement('div');
            message.className = `form__message form__message--${type}`;
            message.textContent = text;
            message.setAttribute('role', 'alert');
            
            Object.assign(message.style, {
                padding: '1rem',
                marginBottom: '1rem',
                background: type === 'success' ? '#d4edda' : '#f8d7da',
                color: type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                borderRadius: '4px',
                animation: 'fadeInUp 0.3s ease'
            });

            this.form.insertBefore(message, this.form.firstChild);

            setTimeout(() => {
                if (message.parentNode) {
                    message.style.opacity = '0';
                    setTimeout(() => message.remove(), 300);
                }
            }, 5000);
        }
    };

       SCROLL ANIMATIONS MODULE

    const ScrollAnimations = {
        observer: null,

        init() {
            if (!('IntersectionObserver' in window)) {
                Utils.selectAll('.service-card, .portfolio-item, .stat').forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
                return;
            }

            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { 
                    threshold: CONFIG.animation.threshold,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            Utils.selectAll('.service-card, .portfolio-item, .stat').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                this.observer.observe(el);
            });
        },

        handleIntersection(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, index * CONFIG.animation.fadeDelay);
                    
                    this.observer.unobserve(entry.target);
                }
            });
        },

        destroy() {
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
        }
    };

       PERFORMANCE OPTIMIZATION

    const Performance = {
        preloadImages() {
            const criticalImages = Utils.selectAll('img[loading="eager"]');
            criticalImages.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        },

        lazyLoadImages() {
            if ('loading' in HTMLImageElement.prototype) {
                Utils.selectAll('img[loading="lazy"]').forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                });
            } else {
                this.lazyLoadFallback();
            }
        },

        lazyLoadFallback() {
            const images = Utils.selectAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    };

       APPLICATION INITIALIZATION

    const App = {
        init() {
            try {
                Sakura.init();
                MobileNav.init();
                SmoothScroll.init();
                ContactForm.init();
                ScrollAnimations.init();
                Performance.preloadImages();
                Performance.lazyLoadImages();

                console.log('✓ Quenora Paysage initialisé avec succès');
            } catch (error) {
                console.error('Erreur lors de l\'initialisation:', error);
            }
        },

        cleanup() {
            Sakura.destroy();
            ScrollAnimations.destroy();
        }
    };

       EXECUTION

    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => App.init());
    } else {
        App.init();
    }

    window.addEventListener('beforeunload', () => App.cleanup());

    if (typeof window !== 'undefined') {
        window.QuenoraApp = {
            version: '2.0.0',
            modules: { Sakura, MobileNav, SmoothScroll, ContactForm, ScrollAnimations },
            utils: Utils
        };
    }

})();
