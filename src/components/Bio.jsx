import React from "react";
import profilePic  from "./images/bio/profile_pic.png"

export default function Bio() {
    return (
        <div className="bio">
            <div className="bio-container">
                <img className="profile-pic" src={profilePic} alt="profile-pic" />
                <div className="bio-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, enim minus quis ullam porro rem sit, perferendis recusandae a, officia unde alias atque nisi dolor sunt animi quisquam. Ullam dolorem id magnam quae delectus soluta amet dignissimos, totam labore nulla repellendus maxime doloribus, ipsum reiciendis iure beatae unde optio!</p>
                </div>
            </div>
        </div>
    );
};