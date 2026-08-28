import React from 'react';

export const GallerySection: React.FC = () => {
    const beforeAfterPairs = [
        {
            beforeSrc: '/teeth-1.jpeg',
            afterSrc: '/ba-1.jpeg',
            alt: 'Dental Care Result 1',
            title: 'Before & After'
        },
        {
            beforeSrc: '/teeth-2.jpeg',
            afterSrc: '/ba-2.jpeg',
            alt: 'Dental Care Result 2',
            title: 'Smile Makeover'
        },
        {
            beforeSrc: '/teeth-3.jpeg',
            afterSrc: '/ba-3.jpeg',
            alt: 'Dental Care Result 3',
            title: 'Clinical Results'
        }
    ];

    return (
        <section id="gallery" className="bg-[#FAF5FF] py-16 sm:py-24 border-t border-purple-100/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center space-y-3 mb-10 sm:mb-14">
                    <span className="text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                        SMILES IN ACTION
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1E1035] tracking-tight">
                        Before & After Results
                    </h2>
                    <p className="text-[#596A77] text-base sm:text-lg max-w-2xl mx-auto font-normal">
                        See the transformative results of our professional dental treatments. We take pride in delivering beautiful, natural-looking smiles.
                    </p>
                </div>

                {/* Before & After Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {beforeAfterPairs.map((pair, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100/80 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Title */}
                            <div className="bg-gradient-to-r from-[#6B21A8] to-[#7C3AED] px-6 py-4">
                                <h3 className="text-white font-bold text-lg text-center">{pair.title}</h3>
                            </div>
                            
                            {/* Before Image */}
                            <div className="relative">
                                <div className="absolute top-3 left-3 bg-[#6B21A8] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    BEFORE
                                </div>
                                <img
                                    src={pair.beforeSrc}
                                    alt={`${pair.alt} - Before`}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* After Image */}
                            <div className="relative">
                                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    AFTER
                                </div>
                                <img
                                    src={pair.afterSrc}
                                    alt={`${pair.alt} - After`}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
