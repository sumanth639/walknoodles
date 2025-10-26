import React from 'react';

const QualitySection = () => {
    const qualities = [
        {
            id: 1,
            bgImage: '/gallery/img-7.jpg',
            title: 'NO PALM OIL',
            description: "We don't use palm oil in our food because your body deserves better ingredients.",
        },
        {
            id: 2,
            bgImage: '/gallery/img-5.jpg',
            title: 'NO MAIDA',
            description: "We do not add refined sugar in any of our dishes & drinks because sweet moments shouldn't come with side effects!",
        },
        {
            id: 3,
            bgImage: '/gallery/img-6.jpg',
            title: 'NO REFINED SUGAR',
            description: "Our noodles are hearty, healthy, and wholesome! Now, you can binge eat your favourite noodles guilt free",
        },
    ];

    return (
        <section className="bg-cream-bg py-12 md:py-16">
            <div className="container space-y-4">
                {qualities.map((quality, index) => (
                    <div
                        key={quality.id}
                        className={`relative flex flex-col justify-center min-h-[250px]
                                    bg-cover bg-center w-full overflow-hidden  shadow-lg group`}
                        style={{ backgroundImage: `url(${quality.bgImage})` }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>

                        {/* Blue box */}
                        <div
                            className={`absolute top-[5%] bottom-[5%] 
                                        w-[60%] h-[90%] flex flex-col justify-center
                                        p-6 sm:p-8 md:p-10 
                                        rounded-2xl bg-light-blue text-white opacity-90
                                        shadow-xl
                                        ${index % 2 === 0 ? 'right-4 sm:right-6 md:right-8' : 'left-4 sm:left-6 md:left-8'}
                                        transition-all duration-300`}
                        >
                            <h3 className="text-2xl font-bold text-gold mb-3 sm:mb-4">
                                {quality.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed">
                                {quality.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QualitySection;
