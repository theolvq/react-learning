import { useState, useRef, useEffect } from 'react';

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const hoverRef = useRef(null);

  const enter = () => setHovered(true);

  const leave = () => setHovered(false);

  useEffect(() => {
    hoverRef.current.addEventListener('mouseenter', enter);
    hoverRef.current.addEventListener('mouseleave', leave);
    return () => {
      hoverRef.current.removeEventLisener('mouseenter', enter);
      hoverRef.current.removeEventLisener('mouseleave', leave);
    };
  }, []);

  return [hovered, hoverRef];
};

export default useHover;
