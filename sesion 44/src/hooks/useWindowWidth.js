/**
 * Dependencies
 */
import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(null);

  useEffect( () => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      // Desmontaje, limpieza de state y eventos
      window.removeEventListener('resize', handleResize);
    }

  }, []);
  return width;
}

export default useWindowWidth;