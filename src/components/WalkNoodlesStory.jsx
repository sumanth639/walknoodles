import React from 'react';
import StoryTitle from './StoryTitle';

const FullWidthFolderShape = () => {
  return (
    <div className="w-full relative z-10">
      <div
        className="relative w-full min-h-[200px] bg-dark-blue 
        rounded-bl-xl rounded-br-xl rounded-tl-xl 
        flex flex-row gap-4 
        p-8 pr-2 pb-16"
        style={{
          clipPath: 'polygon(0% 0%, 60% 0%, 60% 20%, 100% 20%, 100% 100%, 0% 100%)',
        }}
      >
        {/* Content Area */}
        <div className="text-white text-base font-museo w-6/10 text-sm md:text-lg">
          <p className="mb-2 font-semibold leading-normal">
            In a world where convenience often compromises health, two passionate minds came together to rewrite the story of comfort food. One, a devoted <span className="text-gold">food enthusiast</span> who lived for bold flavors and global cuisines. The other, a <span className="text-gold">health-conscious</span> innovator who believed in nourishing the body without sacrificing taste.
          </p>
          <p className="text-xs leading-snug">
            Their shared vision gave birth to <strong>WalkNoodles</strong> — a brand that transforms the classic comfort of noodles into a guilt-free indulgence. By using wholesome ingredients like millet and whole wheat, they reimagined everyone's favorite food into a nourishing experience.
          </p>
        </div>

        {/* Yellow Box */}
        <div className="bg-gold border-2 mt-28 border-black rounded-xl p-2 w-4/10 
          flex items-center justify-center text-center">
          <p className="text-xs font-bold">
            At WalkNoodles, every bowl is crafted to bring together the joy of authentic flavors and the goodness of mindful eating. It's where taste meets health, and every bite tells a story of love, innovation, and care.
          </p>
        </div>
      </div>

      {/* StoryTitle positioned top-right */}
      <div className="absolute top-0 right-0">
        <StoryTitle />
      </div>
    </div>
  );
};

export default FullWidthFolderShape;
