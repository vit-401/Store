import React from "react";

export function HeaderBox() {
    return <div className="header__box">
        <p className="header__adress">Москва, ул. Науки 25</p>
        <ul className="user-list">
            <li className="user-list__item">
                <a className="user-list_link" href="">
                    <img src="images/heart-icon.svg" alt=""/>
                </a>
            </li>
            <li className="user-list__item">
                <a className="user-list_link" href="">
                    <img src="images/user-icon.svg" alt=""/>
                </a>
            </li>
            <li className="user-list__item">
                <a className="user-list_link shopping-cart" href="">
                    <img src="images/shopping-cart-icon.svg" alt=""/>
                    <p className="shopping-cart__num">99</p>
                </a>
            </li>
        </ul>
    </div>;
}