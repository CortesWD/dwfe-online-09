/**
 * Dependencies
 */
import React from "react";

/**
 * Componer es una forma eficiente de crear componentes
 * un componente puede recibir la prop "children"
 * esto nos va permitir importarlo y usarlo
 * como un elemento HTML donde se abren y cierran etiquetas
 * Ver App.js linea 21
 */
function GalleryComp({ children }) {
  return (
    <div className="gallery-container">
      <h2>composition gallery</h2>
      {children}
    </div>
  );
}

export default GalleryComp;
