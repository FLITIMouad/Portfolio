import { useState, useEffect ,useCallback} from "react";

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


const useForceUpdate = () => {
  const [, setState] = useState(0);
  return useCallback(() => setState((s) => s + 1), []);
};


export {useForceRerender,useForceUpdate} ;
