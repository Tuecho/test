    const fraseRandom = [
    "La vida no se trata de encontrarse a uno mismo, sino de crearse a uno mismo.",
    "El conocimiento es poder, pero la sabiduría es libertad.",
    "No hay camino a la felicidad; la felicidad es el camino.",
    "El misterio de la vida no es un problema que resolver, sino una realidad que experimentar.", 
    "El hombre es el único ser que se niega a ser lo que es.", 
    "La felicidad depende más de la disposición interior que de las circunstancias exteriores.",
    "Es más fácil engañar a la gente que convencerlos de que han sido engañados.", 
    "El hombre sufre tan terriblemente en el mundo que se ha visto obligado a inventar la risa.", 
    "El verdadero viaje de descubrimiento no consiste en buscar nuevos paisajes, sino en tener nuevos ojos.",
    "Conocer a los demás es sabiduría; conocerse a sí mismo es iluminación."  
];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("input[type='button']");
  const lista = document.getElementById("lista");

  button.addEventListener("click", function () {
    const nuevoElemento = document.createElement("li");

    // Aquí vamos a definir la posición de los elementos
    const posicion = lista.children.length + 1; // +1 al elemento anterior

    // para guardar en la variable frase random
    const fraseRandomPantalla = fraseRandom[Math.floor(Math.random() * fraseRandom.length)];

    // asignar la frase random
    nuevoElemento.textContent = `Elemento ${posicion}: ${fraseRandomPantalla}`;

    // Usando bootstrap
    nuevoElemento.classList.add("list-group-item");

    // Se agrega el elemento a la lista
    lista.appendChild(nuevoElemento);
  });
});
