import React from "react";

export function Categories() {
    return <section className="categories page-section">
        <div className="container">
            <div className="categories__inner">
                <a className="categories__item" href="#">
                    <div className="categories__item-info">
                        <h4 className="categories__item-title">Квадроциклы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src="images/section-categories/quadbike.png" alt=" "/>
                    </div>
                </a>
                <a className="categories__item" href="#">
                    <div className="categories__item-info">
                        <h4 className="categories__item-title">Гидроциклы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src="images/section-categories/hydrocycle.png" alt=" "/>
                    </div>
                </a>
                <a className="categories__item" href="#">
                    <div className="categories__item-info">
                        <h4 className="categories__item-title">Катера</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src="images/section-categories/motorboat.png" alt=" "/>
                    </div>
                </a>
                <a className="categories__item" href="#">
                    <div className="categories__item-info">
                        <h4 className="categories__item-title">Снегоходы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src="images/section-categories/snowmobile.png" alt=" "/>
                    </div>
                </a>
                <a className="categories__item" href="#">
                    <div className="categories__item-info">
                        <h4 className="categories__item-title">Вездеходы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src="images/section-categories/rover.png" alt=" "/>
                    </div>
                </a>
                <a className="categories__item" href="#">
                    <div className="categories__item-info">
                        <h4 className="categories__item-title">Двигатели</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src="images/section-categories/engine.png" alt=" "/>
                    </div>
                </a>
            </div>
        </div>
    </section>;
}