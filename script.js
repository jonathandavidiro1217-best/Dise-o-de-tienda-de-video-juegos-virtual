document.addEventListener("DOMContentLoaded", () => {
  const botonesComprar = document.querySelectorAll(".btn-comprar");
  const contadorCarrito = document.getElementById("contador-carrito");

  let totalArticulos = 0;

  botonesComprar.forEach((boton) => {
    // Inicializamos cada botón diciendo que NO está añadido
    boton.dataset.anadido = "false";

    boton.addEventListener("click", () => {
      // Si NO está añadido, lo agregamos
      if (boton.dataset.anadido === "false") {
        totalArticulos++;
        boton.dataset.anadido = "true"; // Cambiamos el estado

        // Cambios visuales: agregamos el chulito fijo y estilo activo
        boton.textContent = "¡Añadido! ✓";
        boton.classList.add("activo");
      }
      // Si YA estaba añadido, lo removemos al hacer clic de nuevo
      else {
        totalArticulos--;
        boton.dataset.anadido = "false"; // Revertimos el estado

        // Cambios visuales: vuelve a su texto original y diseño base
        boton.textContent = "Agregar al carrito";
        boton.classList.remove("activo");
      }

      // Actualizamos el número del carrito en la pantalla
      contadorCarrito.textContent = totalArticulos;
    });
  });
});
