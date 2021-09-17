/**
 * Dependencies
 */
import React, { useState } from "react";

/**
 * Components
 */
import Card from './components/Card';

function Gallery({ images }) {
  const [show, setShow] = useState(false);

  return (
    <div className="gallery-container">
      <button
        type="button"
        className="btn"
        onClick={() => setShow(!show)}
      >
        {show ? 'Ocultar ' : 'Mostrar ' }
        Imágenes
      </button>
      {show && (
        (images || []).map((item, i) => {
          const {title, url} = item;
          return (
            url && (<Card key={`${title}-${i + 1}`} url={url} title={title} />)
          )
        })
      )}
    </div>
  );
}

export default Gallery;