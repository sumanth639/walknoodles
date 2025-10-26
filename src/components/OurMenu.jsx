import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Butter Chicken Noodles",
    price: "345",
    description: "Creamy butter chicken paired with spicy, garlicky noodles for a bold fusion of flavors.",
    image: "/menu/butter-chicken-noodles.jpg",
  },
  {
    id: 2,
    name: "Pad Thai",
    price: "255 / 285",
    description: "Authentic Thai stir-fried rice noodles with a perfect balance of sweet, sour, and savory flavors.",
    image: "/menu/pad-thai.jpg",
  },
  {
    id: 3,
    name: "Japchae",
    price: "269 / 299",
    description: "Korean sweet potato glass noodles stir-fried with vegetables and savory sauce. A true delicacy.",
    image: "/menu/japchae.jpeg",
  },
  {
    id: 4,
    name: "Chilli Crisp Noodles",
    price: "275 / 305",
    description: "Noodles tossed in a fiery, crunchy chilli crisp oil.",
    image: "/menu/chilli-crisp-noodles.jpg"
  },
  {
    id: 5,
    name: "Street Style Chowmein",
    price: "230 / 260",
    description: "The classic Indian street-style favorite—hot, spicy, and loaded with fresh veggies.",
    image: "/menu/chowmein.jpg"
  },
  {
    id: 6,
    name: "Teriyaki Noodles",
    price: "280 / 310",
    description: "Noodles coated in a rich, sweet, and tangy Teriyaki glaze.",
    image: "/menu/teriyaki.jpg"
  },
  {
    id: 7,
    name: "Jajangmyeon",
    price: "305 / 335",
    description: "Thick wheat noodles topped with a rich, savory black bean sauce.",
    image: "/menu/jajangmyeon.jpg"
  },
  {
    id: 8,
    name: "Dan Dan Noodles",
    price: "290 / 320",
    description: "A classic Sichuan dish featuring spicy pork mince and preserved vegetables.",
    image: "/menu/dan-dan-noodles.jpg"
  },
];

const MenuAccordion = () => {
  const [openItemId, setOpenItemId] = useState(1);
  const toggleItem = (id) => setOpenItemId(openItemId === id ? null : id);

  return (
  <section className="py-12 bg-[#F0F5FD]">
  <div className="container mx-auto px-4 max-w-2xl">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold inline-block font-museo text-dark-blue relative">
        Our <span className="text-gold">Menu</span>
      </h2>
      {/* Centered 80% HR below text */}
      <div className="flex justify-center mt-2">
        <div className="w-11/12  h-0.5 bg-dark-blue rounded-full"></div>
      </div>
    </div>

    <h3 className="text-2xl mb-4 font-bold font-museo text-light-blue">
      Choice of <span className="text-gold">Noodles</span> Flavours
    </h3>

    {/* Accordion List */}
    <div className="space-y-3">
      {MENU_ITEMS.map((item) => (
        <motion.div
          key={item.id}
          layout
          className={`rounded-2xl transition-all duration-300 shadow-md font-museo overflow-hidden relative ${
            openItemId === item.id
              ? "bg-cream-bg border border-gold shadow-xl"
              : "bg-[#FFF3DB] border border-white hover:shadow-lg"
          }`}
        >
          {/* Accordion Header */}
          <button
            className={`w-full text-left transition-colors ${
              openItemId === item.id ? "p-0" : "p-4"
            }`}
            onClick={() => toggleItem(item.id)}
          >
            {openItemId !== item.id && (
              <div className="flex justify-between items-center font-bold">
                <span className="text-lg text-dark-blue">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-base text-gray-600">{item.price}</span>
                  <motion.div
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-light-blue" />
                  </motion.div>
                </div>
              </div>
            )}
          </button>

          {/* Accordion Content */}
          <AnimatePresence initial={false}>
            {openItemId === item.id && (
              <motion.div
                onClick={() => toggleItem(item.id)}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                {/* Content wrapper - no gaps */}
                <div className="flex items-stretch h-full">
                  {/* Image Section */}
                  <div className="w-2/5 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex-1 p-5 flex flex-col justify-center">
                    <div className="text-dark-blue text-xl font-bold text-right mb-1">
                      {item.price}
                    </div>
                    <h4 className="text-2xl font-extrabold mb-1 text-light-blue">
                      {item.name}
                    </h4>
                    <p className="text-base leading-relaxed text-dark-blue m-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default MenuAccordion;