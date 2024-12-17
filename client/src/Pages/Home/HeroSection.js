import { useState, useEffect } from "react";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const heroSections = [
        {
            videoSrc:
                "https://www.bakerhughes.com/sites/bakerhughes/files/2024-11/leucipa-hero-redo-48fps-web.mp4",
            heading: "Technology Solutions",
            subheading:
                "Innovative technologies driving transformation across industries",
            ctaLink: "/technology",
            opacity: "bg-opacity-50",
        },
        {
            videoSrc:
                "https://www.bakerhughes.com/sites/bakerhughes/files/2023-05/baker_hughes_2022_homepage_hero.mp4",
            heading: "Oil & Gas Expertise",
            subheading: "Empowering energy production with cutting-edge solutions",
            ctaLink: "/oil-and-gas",
            opacity: "bg-opacity-30",
        },
        {
            videoSrc:
                "https://www.bakerhughes.com/sites/bakerhughes/files/2024-11/bh_efs_homepageherovideo_sustainability-092324.mp4",
            heading: "Agricultural Innovation",
            subheading: "Sustainable solutions for modern agriculture",
            ctaLink: "/agriculture",
            opacity: "bg-opacity-50",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSections.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [heroSections.length]);

    const handleDotClick = (index) => {
        setIsTransitioning(true);
        setCurrentSlide(index);
    };

    const handlePrevClick = () => {
        setIsTransitioning(true);
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + heroSections.length) % heroSections.length
        );
    };

    const handleNextClick = () => {
        setIsTransitioning(true);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSections.length);
    };

    return (
        <div className="relative w-full h-[35rem] overflow-hidden">
            {/* Carousel Slides */}
            {heroSections.map((section, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                    onTransitionEnd={() => setIsTransitioning(false)}
                >
                    <div className={`relative w-full h-full ${section.opacity}`}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        >
                            <source src={section.videoSrc} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-70">
                            <div className="max-w-2xl px-4">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                    {section.heading}
                                </h1>
                                <p className="text-xl mb-6 text-white">{section.subheading}</p>
                                <a
                                    href={section.ctaLink}
                                    className="inline-flex items-center px-6 py-3 bg-green-800 text-white rounded hover:bg-teal-600 transition duration-300"
                                >
                                    Learn More
                                    <svg
                                        className="ml-2 w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {heroSections.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <div
                className="absolute top-1/2 left-2 sm:left-24 transform -translate-y-1/2 text-white cursor-pointer z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handlePrevClick}
                disabled={isTransitioning}
            >
                <div className="bg-white/20 rounded-full p-1 sm:p-2 hover:bg-white/30 transition-colors duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
            </div>
            <div
                className="absolute top-1/2 right-2 sm:right-24 transform -translate-y-1/2 text-white cursor-pointer z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleNextClick}
                disabled={isTransitioning}
            >
                <div className="bg-white/20 rounded-full p-1 sm:p-2 hover:bg-white/30 transition-colors duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;
