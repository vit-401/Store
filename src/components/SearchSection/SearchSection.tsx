import React from "react";

export function SearchSection() {
    return <section className="search page-section">
        <div className="container">
            <div className="search__inner">
                <div className="search__tabs tabs-wrapper">
                    <div className="mobile-overflow">
                        <a className="tab search__tabs-item tab&#45;&#45;active" href="#tab-1">Поиск по номеру</a>
                        <a className="tab search__tabs-item" href="#tab-2">Поиск по марке</a>
                        <a className="tab search__tabs-item" href="#tab-3">Поиска по названию товара</a>
                    </div>
                </div>
                <div className="search__content">
                    <div id="tab-1" className="tabs-content search__content-item tabs-content&#45;&#45;active">
                        <form className="search__content-form" action="">
                            <input className="search__content-input" type="text" placeholder="Введите номер"/>
                            <button className="search__content-btn" type="submit">искать</button>
                        </form>
                    </div>
                    <div id="tab-2" className="tabs-content search__content-item">
                        <form className="search__content-form" action="">
                            <input className="search__content-input" type="text" placeholder="Введите марку"/>
                            <button className="search__content-btn" type="submit">искать</button>
                        </form>
                    </div>
                    <div id="tab-3" className="tabs-content search__content-item">
                        <form className="search__content-form" action="">
                            <input className="search__content-input" type="text"
                                   placeholder="Введите название товара"/>
                            <button className="search__content-btn" type="submit">искать</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}