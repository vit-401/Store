import {BtnMenu} from "./BtnMenu";
import React from "react";

export function MenuList() {
    return <nav className="menu">
        <BtnMenu/>

        <ul className="menu__list">
            <li className="menu__item">
                <a href="" className="menu__link">Магазины</a>
            </li>
            <li className="menu__item">
                <a href="" className="menu__link">Акции</a>
            </li>
            <li className="menu__item">
                <a href="" className="menu__link">Доставка и оплата</a>
            </li>
        </ul>
    </nav>;
}