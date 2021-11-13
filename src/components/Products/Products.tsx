import React from "react";


export function Products() {
    return <section className="products">
        <div className="container">
            <div className="products__inner">
                <h3 className="product__title">С этим товаром покупают</h3>
                <div className="tabs-wrapper">
                    <div className="tabs products__tabs mobile-overflow">
                        <a className="tab products__tab tab&#45;&#45;active" href="#popular-tab-1">запчасти</a>
                        <a className="tab products__tab" href="#popular-tab-2">моторы</a>
                        <a className="tab products__tab" href="#popular-tab-3">шины</a>
                        <a className="tab products__tab" href="#popular-tab-4">электроника</a>
                        <a className="tab products__tab" href="#popular-tab-5">инструменты</a>
                        <a className="tab products__tab" href="#popular-tab-6">аксессуары</a>
                    </div>
                </div>
                <div className="tabs-container products__container">
                    <div id="popular-tab-1" className="tabs-content products__content tabs-content&#45;&#45;active">
                        <div className="product-slider">
                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper product-item__not-available">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="popular-tab-2" className="tabs-content products__content">
                        <div className="product-slider">
                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper product-item__not-available">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="product-slider__item">
                                <div className="product-item__wrapper">
                                    <button className="product-item__favorite"></button>
                                    <button className="product-item__basket">
                                        <img src="/images/shopping-cart-white-icon.svg" alt=""/>
                                    </button>
                                    <a className="product-item__notify-link" href=""><span>Сообщить о
                                                поступлении</span></a>
                                    <a className="product-item product-item&#45;&#45;sale" href="#">
                                        <p className="product-item__hover-text">посмотреть товар</p>
                                        <img className="product-item__img" src="images/products/product-1.png"
                                             alt=""/>
                                        <h4 className="product-item__title">Водонепроницаемый Рюкзак</h4>
                                        <p className="price product-item__price">9 800 ₽</p>
                                        <p className="product-item__notify-text">
                                            нет в наличии
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="popular-tab-3" className="tabs-content products__content">slider-3</div>
                    <div id="popular-tab-4" className="tabs-content products__content">slider-4</div>
                    <div id="popular-tab-5" className="tabs-content products__content">slider-5</div>
                    <div id="popular-tab-6" className="tabs-content products__content">slider-6</div>
                </div>
            </div>
        </div>
    </section>;
}