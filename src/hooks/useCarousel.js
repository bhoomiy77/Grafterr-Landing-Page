import { useState } from "react";

const useCarousel = (length, visibleItems = 3) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < length - visibleItems) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return { index, next, prev };
};

export default useCarousel;