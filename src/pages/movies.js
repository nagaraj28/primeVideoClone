import React from "react";
import Footer from "../footer/footer";
import HeaderContainer from "../container/header";
import Films from "../container/films";
import Carousel from "../components/carousel/carousel";

export default function Movies({dataCollection,carousel}){
  return (
    <>
    <HeaderContainer/>
    <Carousel  carousel={carousel}/>
    <Films dataCollection={dataCollection}/>
    <Footer/>
</>
)
}