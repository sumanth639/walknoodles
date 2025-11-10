import React from 'react';

export default function FoodGridLayout() {
  const images = [
    '/gallery/img-1.jpg',
    '/gallery/img-2.jpg',
    '/gallery/img-3.jpg',
    '/gallery/img-4.png',
    '/gallery/img-5.jpg',
    '/gallery/img-6.jpg',
    '/gallery/img-7.jpg',
  ];

  return (
    // FIX: Removed min-h-screen. The content will now dictate the container's height.
    <div className="bg-gray-100 flex items-center justify-center p-2 mt-5"> 
      <div className="w-full max-w-4xl aspect-square grid grid-cols-3 grid-rows-3 gap-2">
        {/* Image 1 - Top left */}
        <div className="col-start-1 row-start-1 overflow-hidden rounded-lg">
          <img 
            src={images[0]} 
            alt="Image 1" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 - Top middle (tall, spans 2 rows) */}
        <div className="col-start-2 row-start-1 row-span-2 overflow-hidden rounded-lg">
          <img 
            src={images[3]} 
            alt="Image 2" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 - Top right */}
        <div className="col-start-3 row-start-1 overflow-hidden rounded-lg">
          <img 
            src={images[2]} 
            alt="Image 3" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 - Middle left (tall, spans 2 rows) */}
        <div className="col-start-1 row-start-2 row-span-2 overflow-hidden rounded-lg">
          <img 
            src={images[1]} 
            alt="Image 4" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5 - Middle right (wide, spans 2 columns) */}
        {/* NOTE: This image occupies row 2, columns 2 and 3 */}
        <div className="col-start-2 col-span-2 row-start-2 overflow-hidden rounded-lg"> 
          <img 
            src={images[4]} 
            alt="Image 5" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 6 - Bottom middle */}
        <div className="col-start-2 row-start-3 overflow-hidden rounded-lg">
          <img 
            src={images[5]} 
            alt="Image 6" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 7 - Bottom right */}
        <div className="col-start-3 row-start-3 overflow-hidden rounded-lg">
          <img 
            src={images[6]} 
            alt="Image 7" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}