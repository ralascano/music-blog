import { Carousel } from 'antd';
import React from 'react';

const contentStyle = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Array of 17 objects with background image paths and labels
const slides = Array.from({ length: 17 }, (_, index) => ({
  content: index + 1,
  backgroundImage: `https://cdn-blog.netlify.app/assets/crazy-${index + 1}.png`, // Adjust paths as needed
}));

const CarouselImage = () => {
  return (
    <Carousel arrows infinite={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url('${slide.backgroundImage}')`,
            }}/>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselImage;