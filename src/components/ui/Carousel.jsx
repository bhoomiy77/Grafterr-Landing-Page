import { useRef } from "react";
import useCarousel from "../../hooks/useCarousel";
import ProductCard from "./ProductCard";

const Carousel = ({ items }) => {
  const visibleItems = 3;
  const { index, next, prev } = useCarousel(items.length, visibleItems);

  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) next();
    if (endX.current - startX.current > 50) prev();
  };

  return (
    <div className="carousel">
      <button onClick={prev} disabled={index === 0}>◀</button>

      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * 33.33}%)`  
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="carousel-item">
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        disabled={index >= items.length - visibleItems}
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;