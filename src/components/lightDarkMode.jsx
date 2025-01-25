import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";


export default function LightDarkMode({ theme, setTheme}) {
    const handleToggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <div>
            <button onClick={handleToggleTheme} aria-label="Toggle Theme" className="p-2 rounded">
                {theme === "light" ? (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                ) : (
                    <MoonIcon className="h-6 w-6 text-gray-100" />
                )}
            </button>
        </div>
    );
}
