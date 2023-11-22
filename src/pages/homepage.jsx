import React from 'react';
import "./_homepage_style.css"
import Carousel from "../components/carousel/carousel";
function Homepage() {
    return (
        <div>
            <section id="section1">
                <h2>Sekce 1</h2>
                {<Carousel></Carousel>}
            </section>
            <section id="section2">
                <h2>Sekce 2</h2>
                
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {/* Obsah sekce 3 */}
            </section>
        </div>
    );
}
export default Homepage;


