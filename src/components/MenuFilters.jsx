import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORY_MAP } from '../assets/MenuData';

const MenuFilters = ({ activeCategory, setActiveCategory, activeType, setActiveType }) => {
    const isFoodCategory = ['all', 'noodles', 'ramen', 'broths', 'small_plates'].includes(activeCategory);

    return (
        <>
            {/* --- Category Filter / Navigation --- */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 p-3 bg-white rounded-xl shadow-inner">
                {CATEGORY_MAP.map(category => (
                    <motion.button
                        key={category.id}
                        onClick={() => {
                            setActiveCategory(category.id);
                            setActiveType('all');
                        }}
                        className={`flex items-center text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                            activeCategory === category.id
                                ? 'bg-light-blue text-white shadow-lg'
                                : 'bg-gray-200 text-dark-blue hover:bg-gray-300'
                        }`}
                    >
                        {category.icon}
                        {category.name}
                    </motion.button>
                ))}
            </div>
            
            {/* --- Veg / Non-Veg Filter (Only for relevant categories) --- */}
            {isFoodCategory && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center gap-4 mb-8 "
                >
                    {['all', 'veg', 'nonveg'].map(type => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`text-sm font-semibold px-4 py-1 rounded-lg transition-colors cursor-pointer ${
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
        </>
    );
};

export default MenuFilters;