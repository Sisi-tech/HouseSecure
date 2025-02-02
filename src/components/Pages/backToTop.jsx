import React, { useState, useEffect } from "react";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-40 right-6 px-4 py-2 rounded-lg shadow-lg hover:text-gray-900 hover:bg-blue-100 transition"
                >
                    ↑ Back to Top
                </button>
            )}
        </>
    );
};

export default BackToTop;
