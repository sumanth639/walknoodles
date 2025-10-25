

const HeroSection = () => {
    return (
        <div className="w-screen h-screen m-0 p-0 relative bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat overflow-x-hidden">
            <div className="absolute top-2 left-2 right-2 bottom-4 bg-white/60 rounded-4xl flex flex-col items-start justify-start p-5">
                <img src="/hero1.png" alt="Hero" className="mt-10 w-64 h-auto drop-shadow-2xl mx-auto" />
                <h1 className="mt-6 text-6xl font-bold leading-snug text-stroke">
                    <span className="text-dark-blue">Tasty</span> <span className="text-light-blue">Just <br />Got</span><br/> <span className="text-gold">Healthier</span>
                </h1>

                <div>
                    {/* Hereo comes the two coums of button and image */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
