import React from 'react';

export default function FoodGridLayout() {
  const images = [
    { src: '/gallery/img-1.jpg', alt: 'Delicious Asian noodles and ramen dishes' },
    { src: '/gallery/img-2.jpg', alt: 'Fresh dim sum and small plates from Walk Noodles' },
    { src: '/gallery/img-3.jpg', alt: 'Vegetarian pad thai noodles with fresh vegetables' },
    { src: '/gallery/img-4.png', alt: 'Butter chicken noodles fusion dish' },
    { src: '/gallery/img-5.jpg', alt: 'Spicy ramen bowl with authentic Asian flavors' },
    { src: '/gallery/img-6.jpg', alt: 'Colorful Asian cuisine presentation' },
    { src: '/gallery/img-7.jpg', alt: 'Healthy noodles made with wholesome ingredients' },
  ];

  return (
    // FIX: Removed min-h-screen. The content will now dictate the container's height.
    <div className="bg-gray-100 flex items-center justify-center p-2 mt-5"> 
      <div className="w-full max-w-4xl aspect-square grid grid-cols-3 grid-rows-3 gap-2">
        {/* Image 1 - Top left */}
        <div className="col-start-1 row-start-1 overflow-hidden rounded-lg">
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Image 2 - Top middle (tall, spans 2 rows) */}
        <div className="col-start-2 row-start-1 row-span-2 overflow-hidden rounded-lg">
          <img 
            src={images[3].src} 
            alt={images[3].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Image 3 - Top right */}
        <div className="col-start-3 row-start-1 overflow-hidden rounded-lg">
          <img 
            src={images[2].src} 
            alt={images[2].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Image 4 - Middle left (tall, spans 2 rows) */}
        <div className="col-start-1 row-start-2 row-span-2 overflow-hidden rounded-lg">
          <img 
            src={images[1].src} 
            alt={images[1].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Image 5 - Middle right (wide, spans 2 columns) */}
        {/* NOTE: This image occupies row 2, columns 2 and 3 */}
        <div className="col-start-2 col-span-2 row-start-2 overflow-hidden rounded-lg"> 
          <img 
            src={images[4].src} 
            alt={images[4].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Image 6 - Bottom middle */}
        <div className="col-start-2 row-start-3 overflow-hidden rounded-lg">
          <img 
            src={images[5].src} 
            alt={images[5].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Image 7 - Bottom right */}
        <div className="col-start-3 row-start-3 overflow-hidden rounded-lg">
          <img 
            src={images[6].src} 
            alt={images[6].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}