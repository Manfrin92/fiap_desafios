import { useCallback } from "react";

function useGetFromLocalStorage() {
  const getFromLocalStorage = useCallback((key: string) => {
    try {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        return JSON.parse(savedValue);
      }
    } catch (error) {
      console.error("Failed to get from localStorage:", error);
    }
  }, []);

  return getFromLocalStorage;
}

export default useGetFromLocalStorage;
