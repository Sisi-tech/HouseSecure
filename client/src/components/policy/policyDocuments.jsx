import React from "react";
import Footer from "../shared/footer";
import Menu from "../shared/menu";

const PolicyDocuments = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Menu />
            <div className="flex flex-col flex-1 items-center pl-4 pr-4 text-md ">
                <h3 className="text-md text-center font-semibold pt-6">Policy documents</h3>
            </div>
            <Footer />
        </div>
    )
};

export default PolicyDocuments;