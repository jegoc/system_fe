// Setting a Session Variable

export const setSessionVariable = (key: string, value: any): void => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };


// Getting a Session Variable

export const getSessionVariable = <T>(key: string): T | null => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };