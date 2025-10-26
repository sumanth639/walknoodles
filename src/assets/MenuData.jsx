import React from 'react';
import { Soup, Utensils, Coffee, Cake, Zap, Droplet } from 'lucide-react';

// --- FULL MENU DATA (Simplified Category Names) ---
export const FULL_MENU_DATA = {
  noodles: {
    name: "Noodles", // Simplified for filter/header display
    icon: <Utensils className="w-5 h-5 mr-2" />,
    items: [
      {
        id: 'n1',
        name: "Pad Thai",
        price_veg: "255",
        price_nonveg: "285",
        description: "Thai stir-fry with wide rice noodles, sautéed in a savory soy sauce, paired with vegetables. (255/285)",
        image: "/menu/pad-thai.jpg",
        type: 'veg_nonveg',
        ingredients: ["Wide Rice Noodles", "Savory Soy Sauce", "Vegetables"],
      },
      {
        id: 'n2',
        name: "Japchae",
        price_veg: "269",
        price_nonveg: "299",
        description: "Vibrant vegetables, tender meat/paneer, and a sweet savory soy-based sauce. (269/299)",
        image: "/menu/japchae.jpeg",
        type: 'veg_nonveg',
        ingredients: ["Sweet Potato Noodles", "Paneer/Meat", "Vibrant Vegetables"],
      },
      {
        id: 'n3',
        name: "Walkin' Butter Chicken Noodles",
        price: "345",
        description: "Creamy butter chicken paired with spicy, garlicky noodles for a bold fusion of flavors. (345)",
        image: "/menu/butter-chicken-noodles.jpg",
        type: 'nonveg',
        ingredients: ["Spicy Garlicky Noodles", "Creamy Butter Chicken Sauce"],
      },
      {
        id: 'n4',
        name: "Chilli Crisp Noodles",
        price_veg: "259",
        price_nonveg: "289",
        description: "Stir-fried with crunchy chilli crisp topping, balancing heat and umami. (259/289)",
        image: "/menu/chilli-crisp-noodles.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Chilli Crisp Topping", "Vegetables"],
      },
      {
        id: 'n5',
        name: "Street Style Chowmein",
        price_veg: "219",
        price_nonveg: "249",
        description: "Noodles with colorful veggies, savory sauces, and street-style flavor. (219/249)",
        image: "/menu/chowmein.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Colorful Veggies", "Savory Chowmein Sauce"],
      },
      {
        id: 'n6',
        name: "Teriyaki Noodles",
        price_veg: "269",
        price_nonveg: "299",
        description: "Noodles in rich teriyaki sauce with fresh vegetables and a hint of sesame. (269/299)",
        image: "/menu/teriyaki.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Rich Teriyaki Sauce", "Fresh Vegetables", "Sesame"],
      },
      {
        id: 'n7',
        name: "Jajangmyeon",
        price_veg: "269",
        price_nonveg: "299",
        description: "Thick Korean noodles in a savory, spicy sauce. (269/299)",
        image: "/menu/jajangmyeon.jpg",
        type: 'veg_nonveg',
        ingredients: ["Thick Korean Noodles", "Savory Spicy Sauce"],
      },
      {
        id: 'n8',
        name: "Dan Dan Noodles",
        price_veg: "269",
        price_nonveg: "299",
        description: "Rich, tangy sauce with sesame notes, topped with protein and herbs. (269/299)",
        image: "/menu/dan-dan-noodles.jpg",
        type: 'veg_nonveg',
        ingredients: ["Noodles", "Rich Tangy Sauce", "Sesame", "Protein"],
      },
    ],
  },
  ramen: {
    name: "Ramen", // Simplified for filter/header display
    icon: <Soup className="w-5 h-5 mr-2" />,
    items: [
      {
        id: 'r1',
        name: "Kimchi Ramen",
        price_veg: "399",
        price_nonveg: "429",
        description: "Spicy, tangy kimchi broth comfort bowl. (399/429)",
        image: "/menu/kimchi-ramen.jpg",
        type: 'veg_nonveg',
        ingredients: ["Ramen Noodles", "Spicy Kimchi Broth", "Toppings"],
      },
      {
        id: 'r2',
        name: "Spicy Miso Ramen",
        price: "399",
        description: "Ramen with miso broth, spiced toppings, veggies, noodles. (399)",
        image: "/menu/miso-ramen.jpg",
        type: 'veg',
        ingredients: ["Ramen Noodles", "Miso Broth", "Spiced Toppings", "Veggies"],
      },
      {
        id: 'r3',
        name: "Gochujang Ramen Broth",
        price_veg: "399",
        price_nonveg: "429",
        description: "Deep, tangy, umami-rich ramen broth. (399/429)",
        image: "/menu/gochujang-ramen.jpg",
        type: 'veg_nonveg',
        ingredients: ["Ramen Broth", "Gochujang Paste", "Umami-rich Base"],
      },
      {
        id: 'r4',
        name: "Chilli Garlic Ramen",
        price_veg: "399",
        price_nonveg: "429",
        description: "Spicy garlic ramen with fresh toppings. (399/429)",
        image: "/menu/chilli-garlic-ramen.jpg",
        type: 'veg_nonveg',
        ingredients: ["Ramen Noodles", "Spicy Garlic Broth", "Fresh Toppings"],
      },
    ],
  },
  broths: {
    name: "Broths", // Simplified for filter/header display
    icon: <Droplet className="w-5 h-5 mr-2" />,
    items: [
        {
            id: 'b1',
            name: "Thukpa",
            price_veg: "219",
            price_nonveg: "249",
            description: "Tibetan-inspired warm soup with wholesome veggies. (219/249)",
            image: "/menu/thukpa.jpg",
            type: 'veg_nonveg',
            ingredients: ["Tibetan Broth", "Noodles", "Veggies", "Protein"],
        },
        {
            id: 'b2',
            name: "Coconut Thai Soup with Rice Noodles",
            price_veg: "299",
            price_nonveg: "329",
            description: "Rice noodles infused with Thai coconut milk, lemongrass, and zesty lime. (299/329)",
            image: "/menu/coconut-thai-soup.jpg",
            type: 'veg_nonveg',
            ingredients: ["Rice Noodles", "Thai Coconut Milk", "Lemongrass", "Lime"],
        },
        {
            id: 'b3',
            name: "Kimchi Jjigae",
            price_veg: "249",
            price_nonveg: "279",
            description: "Spicy Korean stew with kimchi, tofu, and veggies. (249/279)",
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
      { id: 's1', name: "Crispy Noodle Bhel", price: "159", description: "Crispy noodles tossed with sauces & veggies. (159)", image: "/menu/crispy-noodle-bhel.jpg", type: 'veg', },
      { id: 's2', name: "Chilli Garlic Potato", price: "229", description: "Fried potatoes with tangy garlic sauce. (229)", image: "/menu/chilli-garlic-potato.jpg", type: 'veg', },
      { id: 's3', name: "Vietnamese Spring Roll", price_veg: "199", price_nonveg: "229", description: "Fresh veggies wrapped with dipping sauce. (199/229)", image: "/menu/vietnamese-spring-roll.jpg", type: 'veg_nonveg', },
      { id: 's4', name: "Basil Leaf Dim Sum", price: "229", description: "Steamed dumplings with basil & veggies. (229)", image: "/menu/basil-dimsum.jpg", type: 'veg', },
      { id: 's5', name: "Spicy Gochujang Chicken Wings", price: "259", description: "Chicken wings with spicy Gochujang glaze. (259)", image: "/menu/gochujang-wings.jpg", type: 'nonveg', },
      { id: 's6', name: "Chicken Yakitori", price: "249", description: "Skewered grilled chicken with soy marinade. (249)", image: "/menu/yakitori.jpg", type: 'nonveg', },
    ],
  },
  desserts: {
    name: "Desserts",
    icon: <Cake className="w-5 h-5 mr-2" />,
    items: [
      { id: 'd1', name: "Hong Kong Style Fruit Pancake", price: "189", description: "Fresh fruits wrapped with whipped cream. (189)", image: "/menu/fruit-pancake.jpg", type: 'veg', },
      { id: 'd2', name: "Dessert Bao", price: "159", description: "Steamed bao stuffed with sweet filling. (159)", image: "/menu/dessert-bao.jpg", type: 'veg', },
    ],
  },
  drinks: {
    name: "Drinks",
    icon: <Coffee className="w-5 h-5 mr-2" />,
    items: [
      { id: 'dr1', name: "Too Berry Tea", price: "149", description: "Brewed berry tea with seasonal fruits. (149)", image: "/menu/berry-tea.jpg", type: 'veg' },
      { id: 'dr2', name: "Sparkling Fizz", price: "149", description: "Fizzy drink with seasonal fruits & chia. (149)", image: "/menu/sparkling-fizz.jpg", type: 'veg' },
      { id: 'dr3', name: "Detox Water", price: "149", description: "Cucumber, lemon & ginger-infused water. (149)", image: "/menu/detox-water.jpg", type: 'veg' },
      { id: 'dr4', name: "Lemonade", price: "129", description: "Classic refreshing lemonade. (129)", image: "/menu/lemonade.jpg", type: 'veg' },
      { id: 'dr5', name: "Vietnamese Cold Coffee", price: "149", description: "Chilled milk coffee with ice. (149)", image: "/menu/vietnamese-coffee.jpg", type: 'veg' },
      { id: 'dr6', name: "Almond Cold Coffee", price: "159", description: "Almond milk coffee. (159)", image: "/menu/almond-coffee.jpg", type: 'veg' },
    ],
  },
};

// --- STATIC MENU SECTIONS ---
export const CUSTOM_CHOICES = [
    { id: 'ch1', name: "Choice of Protein", list: ["Paneer", "Chicken", "Egg"], prices: null },
    { id: 'ch2', name: "Choice of Fibre", list: ["Bokchoy", "Mushrooms", "Broccoli", "Carrot", "Cabbage", "Baby corn", "Spinach", "Bell pepper"], prices: null },
    { id: 'ch3', name: "Choice of Noodles", list: ["Rice noodles", "Whole wheat", "Millet noodles", "Zoodles"], prices: null },
    { id: 'ch4', name: "Choice of Condiments", list: ["Fried garlic", "Spring onion", "Chilli garlic oil", "Nori sheet", "Crushed peanuts", "Thai chilli", "Sesame seed", "Chilli oil"], prices: null },
];

export const COMBO_ITEM = {
    id: 'cm1',
    name: "Combo Offer",
    description: "Choose Any Noodle + Any Small Plate + Any Drink",
    price_veg: "499",
    price_nonveg: "549",
};

// --- CATEGORY MAP FOR FILTERS ---
export const CATEGORY_MAP = [
    { id: 'all', name: 'All Dishes', icon: <Utensils className="w-5 h-5 mr-2" /> },
    ...Object.keys(FULL_MENU_DATA).map(key => ({
        id: key,
        name: FULL_MENU_DATA[key].name, // Uses the simplified name (Noodles, Ramen, etc.)
        icon: FULL_MENU_DATA[key].icon
    }))
];