function toggleText(contentId, linkId) {
    const content = document.getElementById(contentId);
    const link = document.getElementById(linkId);
  
    // para cambiar entre visibilidad y ocultamiento
    if (content.style.visibility === "hidden") {
      content.style.visibility = "visible";
      link.textContent = "Ocultar contenidos";
    } else {
      content.style.visibility = "hidden";
      link.textContent = "Mostrar contenidos";
    }
  }
  