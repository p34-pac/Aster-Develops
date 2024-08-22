// history.js
import { useState, useEffect } from 'react';

const useCustomHistory = () => {
  const [history, setHistory] = useState([]);

  const push = (path) => {
    setHistory((prevHistory) => [...prevHistory, path]);
    window.history.pushState(null, '', path);
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory((prevHistory) => {
        const newHistory = prevHistory.slice(0, -1);
        window.history.back();
        return newHistory;
      });
    } else {
      console.warn("No history to go back to.");
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return { history, push, goBack };
};

export default useCustomHistory;
