import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Quote } from 'lucide-react'; // Added Quote icon for visual flair

// Review data with specific customer titles added
const reviewsData = [
  {
    id: 1,
    text: "Absolutely love WalkNoodles! Their Spicy Dan Dan noodles are a personal favorite. The broth is rich, the noodles are perfectly cooked, and the spice level is just right. A must-try for any noodle enthusiast in Indrapuram!",
    customerTitle: 'Dan Dan Noodle Devotee',
  },
  {
    id: 2,
    text: "Such a gem for Asian food lovers! We were out with our little one looking for a good Chinese restaurant when we stumbled upon Walk Noodles — what a pleasant surprise! Cozy place with authentic flavors.",
    customerTitle: 'Butter Chicken Noodle Fan',
  },
  {
    id: 3,
    text: "WalkNoodles consistently delivers amazing food. Their dim sum selection is fantastic, and the General Tso's Chicken is always crispy and flavorful. Great portions too!",
    customerTitle: 'Chilli Crisp Connoisseur',
  },
  {
    id: 4,
    text: "Tried WalkNoodles last week and I'm already a regular. The staff are incredibly friendly and the service is quick. Their vegetarian spring rolls are out of this world!",
    customerTitle: 'Ramen Rendezvous Regular',
  },
  {
    id: 5,
    text: "WalkNoodles is our go-to spot for quick, delicious meals. Great lunch specials and cozy ambiance — perfect for a family dinner or friends outing!",
    customerTitle: 'Small Plates Specialist',
  },
  {
    id: 6,
    text: "Absolutely love WalkNoodles! Their Spicy Dan Dan noodles are a personal favorite. The broth is rich, the noodles are perfectly cooked, and the spice level is just right. A must-try for any noodle enthusiast in Indrapuram!",
    customerTitle: 'Thukpa Taster',
  },
  {
    id: 7,
    text: "Such a gem for Asian food lovers! We were out with our little one looking for a good Chinese restaurant when we stumbled upon Walk Noodles — what a pleasant surprise! Cozy place with authentic flavors.",
    customerTitle: 'Kimchi Jjigae Critic',
  },
  {
    id: 8,
    text: "WalkNoodles consistently delivers amazing food. Their dim sum selection is fantastic, and the General Tso's Chicken is always crispy and flavorful. Great portions too!",
    customerTitle: 'Veggie Paneer Patron',
  },
  {
    id: 9,
    text: "Tried WalkNoodles last week and I'm already a regular. The staff are incredibly friendly and the service is quick. Their vegetarian spring rolls are out of this world!",
    customerTitle: 'Basil Leaf Believer',
  },
  {
    id: 10,
    text: "WalkNoodles is our go-to spot for quick, delicious meals. Great lunch specials and cozy ambiance — perfect for a family dinner or friends outing!",
    customerTitle: 'Dim Sum Discovery Agent',
  },
];

const ReviewsSection = () => {
    return (
        <div className="w-full bg-cream-bg py-16 overflow-hidden lg:py-24">
            
            {/* Centered Header */}
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-gold lg:text-6xl">
                Customer <span className="text-light-blue">Raves</span>
            </h2>

            {/* Swiper Container */}
            <div className="relative max-w-7xl mx-auto">
                
                <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    spaceBetween={30} 
                    breakpoints={{
                        320: { slidesPerView: 1.1, spaceBetween: 15 }, 
                        640: { slidesPerView: 2.1, spaceBetween: 25 }, 
                        1024: { slidesPerView: 3, spaceBetween: 30 }, 
                        1280: { slidesPerView: 3.5, spaceBetween: 40 }, 
                    }}
                    className="px-6 lg:px-0"
                >
                    {reviewsData.map((review) => (
                        <SwiperSlide
                            key={review.id}
                            className="py-4"
                        >
                            {/* Review Card */}
                            <div
                                className="bg-gold border-2 border-black flex flex-col p-6 h-72 rounded-lg 
                                           transition-all duration-300 hover:scale-[1.05] hover:border-light-blue"
                            >
                                
                                {/* Quote Icon */}
                                <Quote className="w-8 h-8 text-dark-blue mb-4" />

                                {/* Review Text */}
                                <p className="text-dark-blue text-base leading-relaxed overflow-hidden text-ellipsis h-full">
                                    “{review.text}”
                                </p>
                                
                                {/* Author Title - Now uses the specific title from reviewsData */}
                                <div className="mt-4 pt-2 border-t border-dark-blue/20">
                                    <p className="text-sm font-semibold text-light-blue">{review.customerTitle}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewsSection;