// StoryTitle.jsx (No changes needed here, as the relative offsets are fine)

function StoryTitle() {
  return (
    // Uses provided offsets: top-12 left-24 (mobile) and lg:top-12 lg:left-64 (desktop)
    <div className="relative top-12 left-24 lg:top-12 lg:left-64 bg-white border-2 border-black rounded-3xl py-3 pl-10 pr-4 shadow-xl md:py-4 md:pl-16">
      <h1 className="text-2xl md:text-3xl font-bold text-light-blue">
        Our <span className="text-gold">Story</span>
      </h1>
    </div>
  );
}

export default StoryTitle;