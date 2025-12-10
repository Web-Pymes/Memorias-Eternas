/**
 * Wedding Planner Main Script
 */

// Configuration
// TODO: Replace with your actual API Key from EmailJS or Cloudflare
const API_KEY = 'TU_CLOUDFLARE_EMAILJS_KEY';

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initFormHandler();
    initAnimations();
});

/**
 * Handle Package Selection from cards
 * @param {string} packageName 
 */
function selectPackage(packageName) {
    const select = document.getElementById('style');
    // Just illustrative: if we had a specific package field visible we'd set it.
    // We'll set the hidden input
    document.getElementById('selectedPackage').value = packageName;

    // Scroll to contact form
    document.querySelector('#contacto').scrollIntoView({
        behavior: 'smooth'
    });

    // Optional: Pre-fill message
    const messageBox = document.getElementById('message');
    if (messageBox.value === '') {
        messageBox.value = `Hola, estoy interesado/a en el paquete ${packageName}.`;
    }
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Submission Handler
 */
function initFormHandler() {
    const form = document.getElementById('weddingForm');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const statusMsg = document.getElementById('formStatus');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic Validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            showStatus('Por favor completa los campos requeridos.', 'error');
            return;
        }

        // Simulate Loading State
        toggleLoading(true);
        showStatus('', ''); // Clear previous status

        try {
            // Simulate API Call delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Here you would implement the actual EmailJS or Cloudflare call using API_KEY
            // Example for EmailJS:
            // await emailjs.send('service_id', 'template_id', { ...values }, API_KEY);

            console.log('Form data:', new FormData(form));
            console.log('API Key used:', API_KEY);

            showStatus('¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto pronto.', 'success');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            showStatus('Hubo un error al enviar. Por favor intenta nuevamente.', 'error');
        } finally {
            toggleLoading(false);
        }
    });

    function toggleLoading(isLoading) {
        if (isLoading) {
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-block';
            form.querySelector('button').disabled = true;
        } else {
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
            form.querySelector('button').disabled = false;
        }
    }

    function showStatus(message, type) {
        statusMsg.textContent = message;
        statusMsg.className = 'form-status ' + type;
    }
}

/**
 * Simple Intersection Observer for fade-in animations
 */
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Add animation classes to elements if needed dynamically, 
    // but we have basic CSS animations on load for Hero.
    // This is a placeholder for scroll-triggered animations if we added specific classes.
}
