  // Setting a Local Storage Variable

export const setLocalStorageVariable = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

// Getting a Local Storage Variable
  
export const getLocalStorageVariable = <T>(key: string): T | null => {
  const storedValue = localStorage.getItem(key);

  try {
    // Check if the value is not undefined before parsing
    return storedValue !== null ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error(`Error parsing JSON from local storage for key "${key}":`, error);
    return null;
  }
};


  