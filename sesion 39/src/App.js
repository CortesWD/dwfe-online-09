/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import RenderTypes from './components/renderTypes';
import Gallery from './components/gallery/Gallery';
import GalleryComp from './components/gallery/components/GalleryComposition';
import Card from './components/gallery/components/Card';

/**
 * Styles
 */
import './App.css';

/**
 * Others
 */
import { imagesGallery } from './bd/bd';

function App() {

  return (
    <>
      {/* {<Gallery images={imagesGallery} />} */}
      <GalleryComp>
        <>
          <h3>Titulo desde composicion</h3>
          {imagesGallery.map((item, i) => {
          const {title, url} = item;
          return (
            url && (<Card key={`${title}-${i + 1}`} url={url} title={title} />)
          )
        })}
        </>
      </GalleryComp>
      <GalleryComp>
        <>
          <hr />
          <h3>Titulo galeria 2</h3>
          {imagesGallery.map((item, i) => {
          const {title, url} = item;
          return (
            url && (<Card key={`${title}-${i + 1}`} url={url} title={title} />)
          )
        })}
        </>
      </GalleryComp>
      {/* {<RenderTypes />} */}
    </>
  );
}

export default App;
