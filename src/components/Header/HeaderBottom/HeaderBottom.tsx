import React from "react";

export function HeaderBottom() {
    return <div className="header__bottom">
        <div className="container">
            <ul className="menu-categories">
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Квадроциклы</a>
                </li>
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Катера</a>
                </li>
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Гидроциклы</a>
                </li>
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Лодки</a>
                </li>
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Вездеходы</a>
                </li>
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Снегоходы</a>
                </li>
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Двигатели</a>
                </li>
                <li className="menu-categories__item">
                    <a className="menu-categories__link" href="">Запчасти</a>
                </li>
            </ul>
        </div>
    </div>;
}