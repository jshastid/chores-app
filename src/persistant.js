import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  // Load the value from storage on mount
  useEffect(() => {
    const loadValue = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error("Error loading storage:", error);
      }
    };
    loadValue();
  }, [key]);

  // Save to storage whenever value changes
  const setValue = async (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error saving storage:", error);
    }
  };

  return [storedValue, setValue];
}
