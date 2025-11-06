import StoryTitle from './StoryTitle';

const FullWidthFolderShape = () => {
  return (
    <div className="w-full relative z-10">
      <div
        className="relative w-full min-h-[200px] bg-dark-blue 
         rounded-tl-xl 
        flex flex-row gap-4 
        p-4 pr-2 pb-8"
        style={{
          clipPath: 'polygon(0% 0%, 60% 0%, 60% 20%, 100% 20%, 100% 100%, 0% 100%)',
        }}
      >
        {/* Content Area */}
        <div className="text-white  font-museo w-[55%] text-[11px] md:text-lg">
          <p className="mb-2 font-semibold leading-normal">
            In a world where convenience often compromises health, two passionate minds came together to rewrite the story of comfort food. One, a devoted <span className="text-gold">food enthusiast</span> who lived for bold flavors and global cuisines. The other, a <span className="text-gold">health-conscious</span> innovator who believed in nourishing the body without sacrificing taste.
          </p>
          <p className="text-[10px] font-semibold  mt-6 tracking-widest">
           Their shared vision gave birth to WalkNoodles-a brand that transforms the classic comfort of noodles into a guilt-free indulgence.<br/>By using wholesome ingredients like millet and whole wheat, they reimagined everyone's favorite food into a nourishing experience.
          </p>
        </div>

        {/* Yellow Box */}
        <div className="bg-gold border-2 mt-28 border-black rounded-xl p-2 w-[45%]
          flex items-center justify-center text-center">
          <p className="text-[10px] font-semibold">
            At WalkNoodles, every bowl is crafted to bring together the joy of authentic flavors and the goodness of mindful eating. It's where taste meets health, and every bite tells a story of love, innovation, and care.
          </p>
        </div>
      </div>

     
     
        <StoryTitle />
    
    </div>
  );
};

export default FullWidthFolderShape;
