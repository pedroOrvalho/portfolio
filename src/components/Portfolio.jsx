import React from "react";

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-grid">
                <a href="#pic"><div id="pic1" className="grid-item"></div></a>
                <a href="#pic"><div id="pic2" className="grid-item"></div></a>
                <a href="#pic"><div id="pic3" className="grid-item"></div></a>
                <a href="#pic"><div id="pic4" className="grid-item"></div></a>
                <a href="#pic"><div id="pic5" className="grid-item"></div></a>
                <a href="#pic"><div id="pic6" className="grid-item"></div> </a>
                <a href="#pic"><div id="pic7" className="grid-item"></div></a>
                <a href="#pic"><div id="pic8" className="grid-item"></div></a>
                <a href="#pic"><div id="pic9" className="grid-item"></div> </a>
            </div>
            <button>LEARN MORE</button>
        </div>
    );
}