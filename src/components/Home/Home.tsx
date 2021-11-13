import React from "react";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import {BannerSection} from "../BannerSection/BannerSection";
import {SearchSection} from "../SearchSection/SearchSection";
import {Categories} from "../Categories/Categories";
import {Products} from "../Products/Products";
import {Banner} from "../Banner/Banner";
import {ProductsSection} from "../Products/ProductsSection";


export const Home = () => {


    return <>

        <Header/>
        <BannerSection/>
        <SearchSection/>
        <Categories/>
        <ProductsSection/>
        <Banner/>
        <Products/>
        <Footer/>


    </>
}
