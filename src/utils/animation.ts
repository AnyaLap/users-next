import { useState, useEffect } from "react";

const useFadeIn = (duration: number = 1000) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);
  
    const fadeInClass = `transition-opacity duration-${duration} ${isVisible ? 'opacity-100' : 'opacity-0'}`;

    return { isVisible, fadeInClass };
  };
  
  export default useFadeIn;