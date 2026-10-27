document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio de Fernando Llerena cargado correctamente.");

    // Animación suave para los enlaces del menú de navegación
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});