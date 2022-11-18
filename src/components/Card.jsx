import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img src="/image12.png" className="card--image" />
            <div className="card--stats">
                <img src="/Star1.png" alt="" className="card--star" />
                <span className="gray">5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 / person</span></p>
        </div>
    )
}