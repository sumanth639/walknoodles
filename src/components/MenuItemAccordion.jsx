import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const getTypeTag = (item) => {
    let colorClass;
    let text;
    
    if(item.type === 'veg') { colorClass = 'bg-green-600'; text = 'VEG'; }
    else if(item.type === 'nonveg') { colorClass = 'bg-red-600'; text = 'NON-VEG'; }
    else if(item.type === 'veg_nonveg') { colorClass = 'bg-orange-600'; text = 'V/NV'; }
    else return null;

    return <span className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${colorClass} whitespace-nowrap`}>{text}</span>;
};

const MenuItemAccordion = ({ item, openItemId, toggleItem, getPriceString }) => {
    const isOpen = openItemId === item.id;

    // ⭐️ Smooth Transition Object
    const smoothEaseTransition = {
        duration: 0.5,
        ease: "easeInOut"
    };

    // ⭐️ Icon Rotation Variants
    const iconVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 }
    };

    return (
        <motion.div
            key={item.id}
            layout
            className={`rounded-2xl transition-all duration-300 shadow-md font-museo relative ${
                isOpen
                    ? "bg-cream-bg border border-gold shadow-xl"
                    : "bg-[#FFF3DB] border border-white hover:shadow-lg"
            }`}
        >
            <button
                className={`w-full text-left transition-colors ${
                    isOpen ? "p-0" : "p-4"
                }`}
                onClick={() => toggleItem(item.id)}
            >
                {!isOpen && (
                    <div className="flex justify-between items-center font-bold">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0 max-w-[70%]">
                            <span className="text-lg text-dark-blue whitespace-normal text-left">{item.name}</span>
                            <div className="shrink-0">{getTypeTag(item)}</div> 
                        </div>

                        {/* ⭐️ Animated Chevron Icon */}
                        <div className="flex items-center space-x-3 shrink-0">
                            <motion.div
                                variants={iconVariants}
                                animate={isOpen ? "open" : "closed"}
                                transition={smoothEaseTransition}
                            >
                                <ChevronDown className="w-5 h-5 text-light-blue" />
                            </motion.div>
                        </div>
                    </div>
                )}
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: -20, height: 0 }} // opens from top
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={smoothEaseTransition} // ⭐️ smoother motion
                        className="overflow-hidden origin-top"
                    >
                        <div className="flex items-stretch h-full">
                            <div className="w-2/5 relative overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover block"
                                />
                            </div>

                            <div className="flex-1 p-5 flex flex-col justify-center">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-xl font-extrabold text-light-blue">
                                        {item.name}
                                    </h4>
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
    );
};

export default MenuItemAccordion;
