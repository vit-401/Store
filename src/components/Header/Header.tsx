import React from "react";
import {MenuList} from "../Menu/MenuList";
import {HeaderBox} from "./HeaderBox/HeaderBox";
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";
import {MenuMobileList} from "../Menu/MenuMobileList/MenuMobileList";

export function Header() {
    return <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="header__top-inner">
                    <MenuList/>
                    <a className="logo" href="#">
                        <img className="logo__img" src="images/logo.svg" alt=""/>
                    </a>
                    <HeaderBox/>
                </div>
            </div>
        </div>
        <MenuMobileList/>
        <HeaderBottom/>
    </header>;
}