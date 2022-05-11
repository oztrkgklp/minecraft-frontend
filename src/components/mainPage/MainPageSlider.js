import React from "react";
import parse from "html-react-parser";
import slide1 from "../../assets/slide1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Provides a new news wrapper
const MainPageNews = () => {
    // Sets the constant settings for the slides.
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
    return (
        <div className="news-wrapper">
            <div class="container">
                <div class="title">HABERLER</div>
                <div class="news-slider">
                    
                    <Slider {...settings}>
                        
                        <div class="slide">
                            {parse(`<img src=${slide1} alt=""></img>`)}
                            <div class="slide-overlay">
                                <h3>
                                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                                </h3>
                                <p>
                                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                                </p>
                            </div>
                        </div>
                        <div class="slide">
                            {parse(`<img src=${slide1} alt=""></img>`)}{" "}
                            <div class="slide-overlay">
                                <h3>
                                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                                </h3>
                                <p>
                                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                                </p>
                            </div>
                        </div>
                        <div class="slide">
                            {parse(`<img src=${slide1} alt=""></img>`)}{" "}
                            <div class="slide-overlay">
                                <h3>
                                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                                </h3>
                                <p>
                                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                                </p>
                            </div>
                        </div>
                        <div class="slide">
                            {parse(`<img src=${slide1} alt=""></img>`)}
                            <div class="slide-overlay">
                                <h3>
                                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                                </h3>
                                <p>
                                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default MainPageNews;
