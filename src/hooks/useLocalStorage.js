import { useState, useEffect } from 'react';

/**
 * A custom hook for using localStorage with React state.
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {*} initialValue - The initial value to use if no value is found in localStorage.
 * @returns {[any, Function]} A tuple containing the stored value and a setter function.
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
