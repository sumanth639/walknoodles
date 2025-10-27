import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Review data
const reviewsData = [
  {
    id: 1,
    text: "Absolutely love WalkNoodles! Their Spicy Dan Dan noodles are a personal favorite. The broth is rich, the noodles are perfectly cooked, and the spice level is just right. A must-try for any noodle enthusiast in Indrapuram!",
  },
  {
    id: 2,
    text: "Such a gem for Asian food lovers! We were out with our little one looking for a good Chinese restaurant when we stumbled upon Walk Noodles — what a pleasant surprise! Cozy place with authentic flavors.",
  },
  {
    id: 3,
    text: "WalkNoodles consistently delivers amazing food. Their dim sum selection is fantastic, and the General Tso's Chicken is always crispy and flavorful. Great portions too!",
  },
  {
    id: 4,
    text: "Tried WalkNoodles last week and I'm already a regular. The staff are incredibly friendly and the service is quick. Their vegetarian spring rolls are out of this world!",
  },
  {
    id: 5,
    text: "WalkNoodles is our go-to spot for quick, delicious meals. Great lunch specials and cozy ambiance — perfect for a family dinner or friends outing!",
  },
];

const ReviewsSection = () => {
  return (
    <div className="w-screen bg-cream-bg py-10 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-10 text-gold">
        Reviews
      </h2>

      <div className="relative">
        {/* Decorative background elements */}
        <div className="hidden lg:block absolute left-0 top-1/2 w-64 h-96 bg-light-blue rounded-t-full -rotate-12 translate-x-[-50%] translate-y-[-50%] opacity-30 z-0"></div>
        <div className="hidden lg:block absolute right-0 top-1/2 w-64 h-96 bg-light-blue rounded-t-full rotate-12 translate-x-[50%] translate-y-[-50%] opacity-30 z-0"></div>

        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20} // 👈 adds consistent gap
          breakpoints={{
            320: { slidesPerView: 2.1, spaceBetween: 14 },
            640: { slidesPerView: 2.6, spaceBetween: 20 },
            1024: { slidesPerView: 3.4, spaceBetween: 24 },
          }}
          className="px-4"
        >
          {reviewsData.map((review) => (
            <SwiperSlide
              key={review.id}
              className="!flex justify-center  items-stretch py-4"
            >
              <div
                className="bg-light-blue flex flex-col p-6 border-2 border-black  transition-all duration-300 hover:scale-[1.03] z-10 w-64 h-96 rounded-t-[10rem]"
              >
                <p className="text-gold text-sm leading-snug mt-20 overflow-hidden text-ellipsis">
                  “{review.text}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;
