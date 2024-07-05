import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const getInitials = (name) => {
    const initials = name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
    return initials;
};

const isColorLight = (color) => {
    const hex = color.startsWith("#") ? color.slice(1) : color;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (channel) => {
        const a = channel / 255;
        return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    };
    const luminanceR = luminance(r);
    const luminanceG = luminance(g);
    const luminanceB = luminance(b);
    const relativeLuminance =
        0.2126 * luminanceR + 0.7152 * luminanceG + 0.0722 * luminanceB;
    return relativeLuminance > 0.179;
};

const getPersistentColor = (name) => {
    const storedColor = localStorage.getItem(`userColor-${name}`);
    if (storedColor) return storedColor;
    const color = getRandomColor();
    localStorage.setItem(`userColor-${name}`, color);
    return color;
};

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default function User() {
    const { user, logoutUser } = useContext(AuthContext); //Use auth context

    useEffect(() => {
        console.log("Current user:", user);
    }, [user]);

    return (
        <>
            <section className="section">
                <div
                    className="container"
                    style={{ maxWidth: "600px", margin: "auto" }}
                >
                    <p>Welcome, {user?.name}!</p>
                    <p>User ID: {user?._id}</p>
                    <button
                        className="button is-primary"
                        onClick={() => logoutUser()}
                    >
                        Logout User
                    </button>
                </div>
            </section>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p style={{ color: "#ff3860" }}>
                    Note: User profile editing functionality will be implemented
                    in future releases.
                </p>
            </div>
        </>
    );
}
