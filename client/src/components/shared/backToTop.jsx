import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

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
            className={`fixed bottom-50 right-5 z-50 p-1 rounded-full shadow-lg transition-all duration-300 bg-white text-black dark:bg-black dark:text-white border ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <FontAwesomeIcon icon={faAngleDoubleUp} size="md"/>
        </button>
    );
};

export default BackToTop;
