import { useState, useEffect } from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            className={`fixed bottom-50 right-5 z-50 p-1 text-2xl text-white rounded-full ${
                visible ? "block" : "hidden"
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            ⬆ 
        </button>
    );
};

export default BackToTop;
