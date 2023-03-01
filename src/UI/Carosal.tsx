import React, { useState } from 'react';
import { useEffect } from 'react';

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % slides.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePreviousSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + slides.length - 1) % slides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 1) % slides.length
    );
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: index === currentSlideIndex ? 0 : '100%',
            width: '100%',
            transition: 'left 0.5s ease-in-out',
          }}
        >
          {slide}
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index === currentSlideIndex ? '#333' : '#ccc',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentSlideIndex(index)}
          />
        ))}
      </div>

      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', width: '100%' }}>
        <button style={{ position: 'absolute', left: 0 }} onClick={handlePreviousSlide}>
          {'<'}
        </button>
        <button style={{ position: 'absolute', right: 0 }} onClick={handleNextSlide}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;