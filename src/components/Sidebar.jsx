import React from "react";
import "./Sidebar.css";

function Sidebar() {
    return (
        <nav className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;