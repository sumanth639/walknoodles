import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FULL_MENU_DATA, CUSTOM_CHOICES, COMBO_ITEM } from '../assets/MenuData';
import MenuFilters from './MenuFilters'
import MenuItemAccordion from './MenuItemAccordion';

// Helper function to get the first item ID from a category
const getFirstItemId = (category) => {
    if (category === 'all') {
        return FULL_MENU_DATA.noodles.items[0]?.id || null;
    }
    return FULL_MENU_DATA[category]?.items[0]?.id || null;
}

const MenuAccordion = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [openItemId, setOpenItemId] = useState(getFirstItemId('all'));
    const [activeType, setActiveType] = useState('all');

    // Effect to automatically open the first item of a newly selected category
    useEffect(() => {
        const firstId = getFirstItemId(activeCategory);
        setOpenItemId(firstId);
    }, [activeCategory]);


    // Toggle function handles closing if the same item is clicked
    const toggleItem = (id) => setOpenItemId(openItemId === id ? null : id);

    // Memoized filter logic
    const filteredMenu = useMemo(() => {
        let itemsToFilter = [];

        // Combine main dish categories for 'all'
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
            
            if (activeType === 'veg') return veg_price;
            if (activeType === 'nonveg') return nonveg_price;
            return `${veg_price} / ${nonveg_price}`;
        }
        return item.price || 'Price on request';
    };
    
    // Uses the simplified name for the main header display
    const currentCategoryName = activeCategory === 'all' 
        ? "All Main Dishes" 
        : FULL_MENU_DATA[activeCategory]?.name;
        
    // Determine if custom choices/combos should be shown 
    const showExtras = ['all', 'noodles', 'ramen', 'broths'].includes(activeCategory);

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

                {/* Filters Component */}
                <MenuFilters 
                    activeCategory={activeCategory} 
                    setActiveCategory={setActiveCategory}
                    activeType={activeType}
                    setActiveType={setActiveType}
                />

                <h3 className="text-2xl mb-4 font-bold font-museo text-light-blue text-center">
                    {currentCategoryName}
                </h3>

                {/* --- Accordion List --- */}
                <div className="space-y-3">
                    {filteredMenu.length > 0 ? (
                        filteredMenu.map((item) => (
                            <MenuItemAccordion
                                key={item.id}
                                item={item}
                                openItemId={openItemId}
                                toggleItem={toggleItem}
                                getPriceString={() => getPriceString(item)} 
                            />
                        ))
                    ) : (
                        <div className="text-center p-8 bg-white rounded-xl text-dark-blue font-semibold">
                            No items found in this category for the selected filter. Try selecting 'All'!
                        </div>
                    )}
                </div>

                {/* --- Static List: Combos --- */}
                {showExtras && (
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
                {showExtras && (
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