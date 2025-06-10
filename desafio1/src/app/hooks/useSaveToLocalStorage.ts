import { useCallback } from "react";

function useSaveToLocalStorage() {
  const saveToLocalStorage = useCallback((key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, []);

  return saveToLocalStorage;
}

export default useSaveToLocalStorage;
