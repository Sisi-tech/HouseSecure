import React, { useState } from "react";
import Navbar from "./navbar";
import MenuOnly from "./menuOnly";


export default function Menu() {
    
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar isAuthenticated={true} showLoginSignUp={false} />
            <MenuOnly />
        </div>
    );
}
