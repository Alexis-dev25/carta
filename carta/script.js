// Crear corazones flotantes al cargar la página
function createFloatingHearts() {
    const heartContainer = document.querySelector('.heart-background');
    if (!heartContainer) {
        const div = document.createElement('div');
        div.className = 'heart-background';
        document.body.insertBefore(div, document.body.firstChild);
    }
    
    // Crear corazones constantemente
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤';
        
        // Posición aleatoria
        const startX = Math.random() * window.innerWidth;
        heart.style.left = startX + 'px';
        heart.style.top = window.innerHeight + 'px';
        
        // Duración aleatoria de animación
        const duration = 6 + Math.random() * 4;
        heart.style.animation = `float-up ${duration}s infinite ease-in`;
        
        // Tamaño aleatorio
        const size = 0.5 + Math.random() * 2;
        heart.style.fontSize = size + 'rem';
        
        // Opacidad aleatoria
        const opacity = 0.4 + Math.random() * 0.4;
        heart.style.opacity = opacity;
        
        document.querySelector('.heart-background').appendChild(heart);
        
        // Remover el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 300);
}

// Agregar índices a los elementos de la lista para animaciones escalonadas
function addListIndexes() {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.setProperty('--index', index);
    });
}

// Efecto de click en los corazones de fondo
document.addEventListener('click', (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = '2rem';
    heart.style.animation = 'float-up 2s ease-out forwards';
    heart.style.pointerEvents = 'none';
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
});

// Animar título al pasar el ratón
const title = document.querySelector('h1');
if (title) {
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateZ(-2deg)';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateZ(0deg)';
    });
}

// Crear efecto de desvanecimiento al entrar a la página
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 1s ease-in';
});

// Agregar estilos dinámicos para la animación de entrada
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Inicializar todo cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        createFloatingHearts();
        addListIndexes();
    });
} else {
    createFloatingHearts();
    addListIndexes();
}
