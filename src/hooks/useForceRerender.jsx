import { useState, useEffect } from "react";

const useForceRerender = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const checkWebGL = () => {
      if (!key) {
        console.warn("WebGL failed, forcing re-render...");
        setTimeout(() => setKey((prevKey) => prevKey + 1), 500); // Retry after 500ms
      }
    };

    checkWebGL();
  }, []);

  return key;
};

export default useForceRerender;
