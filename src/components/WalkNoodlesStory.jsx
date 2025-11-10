import StoryTitle from './StoryTitle';

const FullWidthFolderShape = () => {
  const clipPathMobile = 'polygon(0% 0%, 60% 0%, 60% 20%, 100% 20%, 100% 100%, 0% 100%)';
  // Desktop clipPath: Shorter tab (10% height) and wider tab (70% width)
  const clipPathDesktop = 'polygon(0% 0%, 70% 0%, 70% 10%, 100% 10%, 100% 100%, 0% 100%)';

  return (
    // Increased z-index for the whole section wrapper
    <div className="w-full relative z-30">
      <div className="max-w-6xl mx-auto"> 
        
        {/* StoryTitle Container - Unified and placed high above the clipped div */}
        {/* FIX: Increased z-index to z-50 to ensure it is above the clipped area */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50">
            <StoryTitle />
        </div>
        
        {/* Clipped Dark-Blue Content Div */}
        <div
          className="relative w-full min-h-[200px] bg-dark-blue 
            rounded-tl-xl 
            flex flex-row gap-4 
            p-4 pr-2 pb-8
            lg:min-h-[400px] lg:p-10 lg:pr-6 lg:pb-12"
          style={{
            clipPath: clipPathMobile,
          }}
        >
          {/* Content Area */}
          <div className="text-white font-museo w-[55%] text-[11px] md:text-lg lg:w-[65%] lg:text-xl lg:pt-10 lg:pl-6">
            <p className="mb-2 font-semibold leading-normal lg:mb-4 lg:leading-relaxed">
              In a world where convenience often compromises health, two passionate minds came together to rewrite the story of comfort food. One, a devoted <span className="text-gold">food enthusiast</span> who lived for bold flavors and global cuisines. The other, a <span className="text-gold">health-conscious</span> innovator who believed in nourishing the body without sacrificing taste.
            </p>
            <p className="text-[10px] font-semibold mt-6 tracking-widest lg:text-sm lg:mt-8 lg:tracking-widest">
              Their shared vision gave birth to WalkNoodles-a brand that transforms the classic comfort of noodles into a guilt-free indulgence.<br />By using wholesome ingredients like millet and whole wheat, they reimagined everyone's favorite food into a nourishing experience.
            </p>
          </div>

          {/* Yellow Box */}
          <div className="bg-gold border-2 mt-28 border-black rounded-xl p-2 w-[45%]
            flex items-center justify-center text-center
            lg:mt-16 lg:w-[35%] lg:p-6 lg:rounded-2xl lg:shadow-2xl">
            <p className="text-[10px] font-semibold lg:text-sm lg:leading-normal">
              At WalkNoodles, every bowl is crafted to bring together the joy of authentic flavors and the goodness of mindful eating. It's where taste meets health, and every bite tells a story of love, innovation, and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthFolderShape;