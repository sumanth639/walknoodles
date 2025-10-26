import React, { useState, useMemo } from 'react';
import { ChevronDown, Soup, Utensils, Coffee, Cake, Zap, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- FULL MENU DATA REFACTOR ---
// Updated to include the 'broths' category and all necessary data.
const FULL_MENU_DATA = {
  noodles: {
    name: "Choice of Noodles",
    icon: <Utensils className="w-5 h-5 mr-2" />,
    items: [
      {
        id: 'n1',
        name: "Pad Thai",
        price_veg: "255",
        price_nonveg: "285",
        description: "Thai stir-fry with wide rice noodles, sautéed in a savory soy sauce, paired with vegetables.",
        image: "/menu/pad-thai.jpg",
        type: 'veg_nonveg',
        ingredients: ["Wide Rice Noodles", "Savory Soy Sauce", "Vegetables"],
      },
      {
        id: 'n2',
        name: "Japchae",
        price_veg: "269",
        price_nonveg: "299",
        description: "Vibrant vegetables, tender meat/paneer, and a sweet savory soy-based sauce.",
        image: "/menu/japchae.jpeg",
        type: 'veg_nonveg',
        ingredients: ["Sweet Potato Noodles", "Paneer/Meat", "Vibrant Vegetables"],
      },
      {
        id: 'n3',
        name: "Walkin' Butter Chicken Noodles",
        price: "345",
        description: "Creamy butter chicken paired with spicy, garlicky noodles for a bold fusion of flavors.",
        image: "/menu/butter-chicken-noodles.jpg",
        type: 'nonveg', // Explicit Non-Veg
        ingredients: ["Spicy Garlicky Noodles", "Creamy Butter Chicken Sauce"],
      },
      {
        id: 'n4',
        name: "Chilli Crisp Noodles",
        price_veg: "259",
        price_nonveg: "289",
        description: "Stir-fried with crunchy chilli crisp topping, balancing heat and umami.",
        image: "/menu/chilli-crisp-noodles.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Chilli Crisp Topping", "Vegetables"],
      },
      {
        id: 'n5',
        name: "Street Style Chowmein",
        price_veg: "219",
        price_nonveg: "249",
        description: "Noodles with colorful veggies, savory sauces, and street-style flavor.",
        image: "/menu/chowmein.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Colorful Veggies", "Savory Chowmein Sauce"],
      },
      {
        id: 'n6',
        name: "Teriyaki Noodles",
        price_veg: "269",
        price_nonveg: "299",
        description: "Noodles in rich teriyaki sauce with fresh vegetables and a hint of sesame.",
        image: "/menu/teriyaki.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Rich Teriyaki Sauce", "Fresh Vegetables", "Sesame"],
      },
      {
        id: 'n7',
        name: "Jajangmyeon",
        price_veg: "269",
        price_nonveg: "299",
        description: "Thick Korean noodles in a savory, spicy sauce.",
        image: "/menu/jajangmyeon.jpg",
        type: 'veg_nonveg',
        ingredients: ["Thick Korean Noodles", "Savory Spicy Sauce"],
      },
      {
        id: 'n8',
        name: "Dan Dan Noodles",
        price_veg: "269",
        price_nonveg: "299",
        description: "Rich, tangy sauce with sesame notes, topped with protein and herbs.",
        image: "/menu/dan-dan-noodles.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Rich Tangy Sauce", "Sesame", "Protein"],
      },
    ],
  },
  ramen: {
    name: "Choice of Ramen",
    icon: <Soup className="w-5 h-5 mr-2" />,
    items: [
      {
        id: 'r1',
        name: "Kimchi Ramen",
        price_veg: "399",
        price_nonveg: "429",
        description: "Spicy, tangy kimchi broth comfort bowl.",
        image: "/menu/kimchi-ramen.jpg",
        type: 'veg_nonveg',
        ingredients: ["Ramen Noodles", "Spicy Kimchi Broth", "Toppings"],
      },
      {
        id: 'r2',
        name: "Spicy Miso Ramen",
        price: "399",
        description: "Ramen with miso broth, spiced toppings, veggies, noodles.",
        image: "/menu/miso-ramen.jpg",
        type: 'veg',
        ingredients: ["Ramen Noodles", "Miso Broth", "Spiced Toppings", "Veggies"],
      },
      {
        id: 'r3',
        name: "Gochujang Ramen Broth",
        price_veg: "399",
        price_nonveg: "429",
        description: "Deep, tangy, umami-rich ramen broth.",
        image: "/menu/gochujang-ramen.jpg",
        type: 'veg_nonveg',
        ingredients: ["Ramen Broth", "Gochujang Paste", "Umami-rich Base"],
      },
      {
        id: 'r4',
        name: "Chilli Garlic Ramen",
        price_veg: "399",
        price_nonveg: "429",
        description: "Spicy garlic ramen with fresh toppings.",
        image: "/menu/chilli-garlic-ramen.jpg",
        type: 'veg_nonveg',
        ingredients: ["Ramen Noodles", "Spicy Garlic Broth", "Fresh Toppings"],
      },
    ],
  },
  broths: {
    name: "Broths & Soups",
    icon: <Droplet className="w-5 h-5 mr-2" />,
    items: [
        {
            id: 'b1',
            name: "Thukpa",
            price_veg: "219",
            price_nonveg: "249",
            description: "Tibetan-inspired warm soup with wholesome veggies.",
            image: "/menu/thukpa.jpg",
            type: 'veg_nonveg',
            ingredients: ["Tibetan Broth", "Noodles", "Veggies", "Protein"],
        },
        {
            id: 'b2',
            name: "Coconut Thai Soup with Rice Noodles",
            price_veg: "299",
            price_nonveg: "329",
            description: "Rice noodles infused with Thai coconut milk, lemongrass, and zesty lime.",
            image: "/menu/coconut-thai-soup.jpg",
            type: 'veg_nonveg',
            ingredients: ["Rice Noodles", "Thai Coconut Milk", "Lemongrass", "Lime"],
        },
        {
            id: 'b3',
            name: "Kimchi Jjigae",
            price_veg: "249",
            price_nonveg: "279",
            description: "Spicy Korean stew with kimchi, tofu, and veggies.",
            image: "/menu/kimchi-jjigae.jpg",
            type: 'veg_nonveg',
            ingredients: ["Spicy Broth", "Kimchi", "Tofu", "Veggies"],
        },
    ],
  },
  small_plates: {
    name: "Small Plates",
    icon: <Zap className="w-5 h-5 mr-2" />,
    items: [
      { id: 's1', name: "Crispy Noodle Bhel", price: "159", description: "Crispy noodles tossed with sauces & veggies.", image: "/menu/crispy-noodle-bhel.jpg", type: 'veg', },
      { id: 's2', name: "Chilli Garlic Potato", price: "229", description: "Fried potatoes with tangy garlic sauce.", image: "/menu/chilli-garlic-potato.jpg", type: 'veg', },
      { id: 's3', name: "Vietnamese Spring Roll", price_veg: "199", price_nonveg: "229", description: "Fresh veggies wrapped with dipping sauce.", image: "/menu/vietnamese-spring-roll.jpg", type: 'veg_nonveg', },
      { id: 's4', name: "Basil Leaf Dim Sum", price: "229", description: "Steamed dumplings with basil & veggies.", image: "/menu/basil-dimsum.jpg", type: 'veg', },
      { id: 's5', name: "Spicy Gochujang Chicken Wings", price: "259", description: "Chicken wings with spicy Gochujang glaze.", image: "/menu/gochujang-wings.jpg", type: 'nonveg', },
      { id: 's6', name: "Chicken Yakitori", price: "249", description: "Skewered grilled chicken with soy marinade.", image: "/menu/yakitori.jpg", type: 'nonveg', },
    ],
  },
  desserts: {
    name: "Desserts",
    icon: <Cake className="w-5 h-5 mr-2" />,
    items: [
      { id: 'd1', name: "Hong Kong Style Fruit Pancake", price: "189", description: "Fresh fruits wrapped with whipped cream.", image: "/menu/fruit-pancake.jpg", type: 'veg', },
      { id: 'd2', name: "Dessert Bao", price: "159", description: "Steamed bao stuffed with sweet filling.", image: "/menu/dessert-bao.jpg", type: 'veg', },
    ],
  },
  drinks: {
    name: "Drinks",
    icon: <Coffee className="w-5 h-5 mr-2" />,
    items: [
      { id: 'dr1', name: "Too Berry Tea", price: "149", description: "Brewed berry tea with seasonal fruits.", image: "/menu/berry-tea.jpg", type: 'veg' },
      { id: 'dr2', name: "Sparkling Fizz", price: "149", description: "Fizzy drink with seasonal fruits & chia.", image: "/menu/sparkling-fizz.jpg", type: 'veg' },
      { id: 'dr3', name: "Detox Water", price: "149", description: "Cucumber, lemon & ginger-infused water.", image: "/menu/detox-water.jpg", type: 'veg' },
      { id: 'dr4', name: "Lemonade", price: "129", description: "Classic refreshing lemonade.", image: "/menu/lemonade.jpg", type: 'veg' },
      { id: 'dr5', name: "Vietnamese Cold Coffee", price: "149", description: "Chilled milk coffee with ice.", image: "/menu/vietnamese-coffee.jpg", type: 'veg' },
      { id: 'dr6', name: "Almond Cold Coffee", price: "159", description: "Almond milk coffee.", image: "/menu/almond-coffee.jpg", type: 'veg' },
    ],
  },
};

// Custom items are not accordion items, but static display
const CUSTOM_CHOICES = [
    { id: 'ch1', name: "Choice of Protein", list: ["Paneer", "Chicken", "Egg"], prices: null },
    { id: 'ch2', name: "Choice of Fibre", list: ["Bokchoy", "Mushrooms", "Broccoli", "Carrot", "Cabbage", "Baby corn", "Spinach", "Bell pepper"], prices: null },
    { id: 'ch3', name: "Choice of Noodles", list: ["Rice noodles", "Whole wheat", "Millet noodles", "Zoodles"], prices: null },
    { id: 'ch4', name: "Choice of Condiments", list: ["Fried garlic", "Spring onion", "Chilli garlic oil", "Nori sheet", "Crushed peanuts", "Thai chilli", "Sesame seed", "Chilli oil"], prices: null },
];

const COMBO_ITEM = {
    id: 'cm1',
    name: "Combo Offer",
    description: "Choose Any Noodle + Any Small Plate + Any Drink",
    price_veg: "499",
    price_nonveg: "549",
};


// Map the keys for the filter buttons, including an 'all' option for initial view
const CATEGORY_MAP = [
    { id: 'all', name: 'All Dishes', icon: <Utensils className="w-5 h-5 mr-2" /> },
    ...Object.keys(FULL_MENU_DATA).map(key => ({
        id: key,
        name: FULL_MENU_DATA[key].name,
        icon: FULL_MENU_DATA[key].icon
    }))
];

// --- React Component ---

const MenuAccordion = () => {
  // Fix 2: Set initial category to 'all' to show main dishes
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItemId, setOpenItemId] = useState('n1'); // Start with the first noodle item open
  const [activeType, setActiveType] = useState('all');

  // Fix 1: Corrected toggle logic
  const toggleItem = (id) => setOpenItemId(openItemId === id ? null : id);

  // Memoized filter logic
  const filteredMenu = useMemo(() => {
    let itemsToFilter = [];

    // If 'all' is active, combine main dish categories
    if (activeCategory === 'all') {
        itemsToFilter = [
            ...FULL_MENU_DATA.noodles.items,
            ...FULL_MENU_DATA.ramen.items,
            ...FULL_MENU_DATA.broths.items,
            ...FULL_MENU_DATA.small_plates.items
        ];
    } else {
        const currentCategory = FULL_MENU_DATA[activeCategory];
        if (currentCategory) {
            itemsToFilter = currentCategory.items;
        }
    }

    // Apply Veg/Non-Veg filter
    return itemsToFilter.filter(item => {
      if (activeType === 'all') return true;
      if (activeType === 'veg') return item.type === 'veg' || item.type === 'veg_nonveg';
      if (activeType === 'nonveg') return item.type === 'nonveg' || item.type === 'veg_nonveg';
      return true;
    });
  }, [activeCategory, activeType]);

  // Function to determine the price string for display
  const getPriceString = (item) => {
    if (item.type === 'veg_nonveg' && (item.price_veg || item.price_nonveg)) {
      const veg_price = item.price_veg || '???';
      const nonveg_price = item.price_nonveg || '???';
      // Show only one price if a type filter is active
      if (activeType === 'veg') return veg_price;
      if (activeType === 'nonveg') return nonveg_price;
      // Show V/NV price range if filter is 'all'
      return `${veg_price} / ${nonveg_price}`;
    }
    return item.price || 'Price on request';
  };
  
  // Function to determine the type tag color and text
  const getTypeTag = (item) => {
      let colorClass;
      let text;
      
      if(item.type === 'veg') { colorClass = 'bg-green-600'; text = 'VEG'; }
      else if(item.type === 'nonveg') { colorClass = 'bg-red-600'; text = 'NON-VEG'; }
      else if(item.type === 'veg_nonveg') { colorClass = 'bg-orange-600'; text = 'V/NV'; }
      else return null;

      return <span className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${colorClass} whitespace-nowrap`}>{text}</span>;
  }
  
  const currentCategoryName = activeCategory === 'all' 
    ? "All Main Dishes" 
    : FULL_MENU_DATA[activeCategory]?.name;

  // Determine if V/NV filter should be visible (only for food items)
  const isFoodCategory = ['all', 'noodles', 'ramen', 'broths', 'small_plates'].includes(activeCategory);


  return (
    <section className="py-12 bg-[#F0F5FD]">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold inline-block font-museo text-dark-blue relative">
            Our <span className="text-gold">Menu</span>
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-11/12 h-0.5 bg-dark-blue rounded-full"></div>
          </div>
        </div>

        {/* --- Category Filter / Navigation --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 p-3 bg-white rounded-xl shadow-inner">
          {CATEGORY_MAP.map(category => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveType('all');
                // Auto-open the first item of the new category/filter
                const newItems = category.id === 'all' ? FULL_MENU_DATA.noodles.items : FULL_MENU_DATA[category.id]?.items;
                setOpenItemId(newItems?.[0]?.id || null);
              }}
              className={`flex items-center text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-light-blue text-white shadow-lg'
                  : 'bg-gray-200 text-dark-blue hover:bg-gray-300'
              }`}
            >
              {category.icon}
              {category.id === 'all' ? 'All Dishes' : category.name.split(' ').slice(-1)[0]}
            </motion.button>
          ))}
        </div>
        
        {/* --- Veg / Non-Veg Filter (Only for relevant categories) --- */}
        {isFoodCategory && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center gap-4 mb-8"
            >
                {['all', 'veg', 'nonveg'].map(type => (
                    <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`text-sm font-semibold px-4 py-1 rounded-lg transition-colors ${
                            activeType === type
                                ? 'bg-gold text-white shadow-md'
                                : 'bg-white text-dark-blue border border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </motion.div>
        )}

        <h3 className="text-2xl mb-4 font-bold font-museo text-light-blue text-center">
          {currentCategoryName}
        </h3>

        {/* --- Accordion List --- */}
        <div className="space-y-3">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                className={`rounded-2xl transition-all duration-300 shadow-md font-museo relative ${
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
                      
                      {/* Left Side: Name and Tag */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0 max-w-[70%]">
                        <span className="text-lg text-dark-blue whitespace-normal text-left">{item.name}</span>
                        <div className="flex-shrink-0">{getTypeTag(item)}</div> 
                      </div>
                      
                      {/* Right Side: Price and Arrow */}
                      <div className="flex items-center space-x-3 flex-shrink-0">
                        <span className="text-base text-gray-700 whitespace-nowrap">₹{getPriceString(item)}</span>
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
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-stretch h-full">
                        {/* Image Section (Placeholder) */}
                        <div className="w-2/5 relative overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover block"
                          />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-5 flex flex-col justify-center">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="text-xl font-extrabold text-light-blue">
                              {item.name}
                            </h4>
                            <div className="text-dark-blue text-xl font-bold">
                              ₹{getPriceString(item)}
                            </div>
                          </div>
                          
                          <p className="text-sm leading-relaxed text-dark-blue m-0 mb-3 border-b pb-2 border-gray-300">
                            {item.description}
                          </p>
                          
                          {item.ingredients && (
                              <div className="mt-2">
                                <h5 className="text-sm font-bold text-dark-blue">Key Ingredients:</h5>
                                <ul className="list-disc list-inside text-xs text-gray-700 ml-2">
                                    {item.ingredients.map((ing, idx) => (
                                        <li key={idx}>{ing}</li>
                                    ))}
                                </ul>
                              </div>
                          )}
                          {item.type && <div className="mt-3">{getTypeTag(item)}</div>}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center p-8 bg-white rounded-xl text-dark-blue font-semibold">
                No items found in this category for the selected filter. Try selecting 'All'!
            </div>
          )}
        </div>

        {/* --- Static List: Combos --- */}
        {activeCategory === 'all' && (
            <motion.div layout className="mt-8">
                <h3 className="text-2xl mb-4 font-bold font-museo text-light-blue text-center">
                    Combos
                </h3>
                <div className="p-5 bg-yellow-100 border border-gold rounded-xl shadow-md">
                    <h4 className="text-xl font-extrabold text-light-blue mb-1">{COMBO_ITEM.name}</h4>
                    <p className="text-sm text-dark-blue mb-3">{COMBO_ITEM.description}</p>
                    <div className="flex justify-between text-lg font-bold text-dark-blue">
                        <span>Veg: ₹{COMBO_ITEM.price_veg}</span>
                        <span>Non-Veg: ₹{COMBO_ITEM.price_nonveg}</span>
                    </div>
                </div>
            </motion.div>
        )}
        
        {/* --- Static List: Custom Choices (Proteins, Fibres, etc.) --- */}
        {(activeCategory === 'all' || activeCategory === 'noodles' || activeCategory === 'ramen' || activeCategory === 'broths') && (
            <motion.div layout className="mt-8 space-y-4">
                <h3 className="text-2xl mb-4 font-bold font-museo text-light-blue text-center">
                    Custom Choices
                </h3>
                <div className="bg-white p-5 rounded-xl shadow-lg space-y-4">
                    {CUSTOM_CHOICES.map(choice => (
                        <div key={choice.id} className="border-b last:border-b-0 pb-3">
                            <h4 className="text-lg font-bold text-dark-blue mb-2">{choice.name}</h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
                                {choice.list.map((item, idx) => (
                                    <span key={idx} className="font-medium bg-gray-100 px-3 py-1 rounded-full">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuAccordion;