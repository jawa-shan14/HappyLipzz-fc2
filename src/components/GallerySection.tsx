import React from 'react';

export const GallerySection: React.FC = () => {
    const beforeAfterImages = [
        {
            src: '/ba-1.png',
            alt: 'Dental Care Result 1'
        },
        {
            src: '/ba-2.png',
            alt: 'Dental Care Result 2'
        },
        {
            src: '/ba-3.png',
            alt: 'Dental Care Result 3'
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {beforeAfterImages.map((img, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md border border-purple-100/80 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-auto object-cover"
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
