import { useEffect } from "react";

const useEscapeKey = (cb) => {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        cb(event);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useEscapeKey;
