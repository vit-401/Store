import React from "react";

export function BannerSection() {
    return <section className="banner-section page-section">
        <div className="container">
            <div className="banner-section__inner">
                <div className="banner-section__slider">
                    <a className="banner-section__slider-item" href="">
                        <img className="banner-section__slider-img" src="images/banner-slider.jpg" alt=""/>
                    </a>
                    <a className="banner-section__slider-item" href="">
                        <img className="banner-section__slider-img" src="images/banner-slider.jpg" alt=""/>
                    </a>
                    <a className="banner-section__slider-item" href="">
                        <img className="banner-section__slider-img" src="images/banner-slider.jpg" alt=""/>
                    </a>
                    <a className="banner-section__slider-item" href="">
                        <img className="banner-section__slider-img" src="images/banner-slider.jpg" alt=""/>
                    </a>
                    <a className="banner-section__slider-item" href="">
                        <img className="banner-section__slider-img" src="images/banner-slider.jpg" alt=""/>
                    </a>
                    <a className="banner-section__slider-item" href="">
                        <img className="banner-section__slider-img" src="images/banner-slider.jpg" alt=""/>
                    </a>
                </div>

                <a className="banner-section__item sale-item" href="#">
                    <div className="sale-item__top">
                        <div className="sale-item__info">
                            акция
                        </div>
                        <div className="sale-item__price">
                            <div className="price sale-item__price-new">190 000</div>
                            <div className="price sale-item__price-old">225 000</div>
                        </div>
                    </div>
                    <img className="sale-item__img" src="images/content/sale-1.png" alt=""/>
                    <h5 className="sale-item__title">
                        Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <p className="sale-item__footer">
                        Акция действует
                        <span>до 31.08.2020</span>
                    </p>
                </a>
            </div>
        </div>
    </section>;
}