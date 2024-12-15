import React, { useState, useEffect } from "react";
import "./home.css";
import Castle from "../assets/Resources/castle.png";
import FooterImage from "../assets/Resources/walt_disney.png"; 

function Home() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="main-container">
            <div className="content-wrapper">
                <div className="header">
                    <h1 className="logo-text">
                        <span className="disney">Disney</span>
                        <span className="dot-era">.com</span>
                        <p className="tagline">Where magic lives online !!</p>
                    </h1>
                    <div>
                        <img src={Castle} alt="castle" />
                    </div>
                </div>
                <div className="container">
                    <div className="hero">
                        <div className="hero-content"></div>
                    </div>
                    <div className="nav">
                        <button><a href="#">Home</a></button>
                        <button><a href="#">Vacation - Disney Land</a></button>
                        <button><a href="#">Shopping</a></button>
                        <button><a href="#">Kids</a></button>
                        <button><a href="#">TV Entertainment</a></button>
                        <button><a href="#">Music</a></button>
                        <button><a href="#">Playhouse</a></button>
                    </div>
                    <div className="card-section">
                        <div className="card">
                            <h2 className="card-heading">Vacation Planning</h2>
                            <p>Explore the best vacation spots and plan your magical getaway to Disney Land.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Shop Disney</h2>
                            <p>Find exclusive merchandise and magical products in our online store.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Kids Zone</h2>
                            <p>Fun activities, games, and entertainment just for kids.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">TV Entertainment</h2>
                            <p>Watch your favorite Disney shows and enjoy magical moments from the comfort of your home.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Music & Magic</h2>
                            <p>Immerse yourself in enchanting melodies and magical soundtracks from Disney.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Disney Classics</h2>
                            <p>Relive your favorite Disney classic movies and characters.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Adventure Awaits</h2>
                            <p>Discover thrilling adventures and attractions at Disney Parks.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Behind the Scenes</h2>
                            <p>Explore the magic behind Disney's animated films and theme parks.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Character Encounters</h2>
                            <p>Meet and greet your favorite Disney characters in the parks.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Disney Merchandise</h2>
                            <p>Shop for exclusive Disney merchandise and collectibles.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Special Events</h2>
                            <p>Join us for seasonal events and celebrations at Disney Parks.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-heading">Disney Dining</h2>
                            <p>Experience magical dining experiences at Disney restaurants.</p>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-content">
                        <p>&copy; 2024 Disney. All Rights Reserved. | Privacy Policy | Terms of Use</p>
                        <img src={FooterImage} alt="Footer Decorative" className="footer-image" />
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
