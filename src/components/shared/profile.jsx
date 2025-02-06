import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Profile = ({ firstName, lastName }) => {
    const [profileImg, setProfileImg] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImg(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex flex-col items-center gap-y-1 pl-2">
            <label className="cursor-pointer">
                <input 
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute opacity-0 w-12 h-12 md:w-14 md:h-14 cursor-pointer"
                    style={{ zIndex: 10 }}
                />
                {profileImg ? (
                    <img 
                        src={profileImg}
                        alt="profile"
                        className="rounded-full shadow-md w-12 h-12 md:w-14 md:h-14 object-cover"
                    />
                ) : (
                    <FaUserCircle className="text-sky-100 w-12 h-12 md:w-14 md:h-14" />
                )}
            </label>
            {/* <Link to="/profile" className="text-md">
                {firstName} {lastName}
            </Link> */}
        </div>
    )
};

export default Profile;