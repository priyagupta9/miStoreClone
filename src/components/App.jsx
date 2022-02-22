import React from "react";
import PreNavbar from "./PreNavbar";
import Navbar from "./Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "../styles/app.css";
import Slider from "./Slider";
import Offers from "./Offers";
import Heading from "./Heading"
import StarProduct from "./StarProduct";
import HotProductMenu from "./HotProductMenu";
import HotProduct from "./HotProduct";
import ProductReview from "./ProductReview";
import data from "../data/data.json";
import Video from "./Video";
import Banner from "./Banner";
import Footer from "./Footer";
import NavOptions from "./NavOptions";
import "../styles/app.css";



function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        lifestyle={data.fitnessAndLifeStyle}
        tv={data.tv}
        laptops={data.laptop}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      {/* <Routes>
        <Route
          path="miPhones"
          element={<NavOptions miPhones={data.miPhones} />}
        />
        <Route
          path="/redmiPhones"
          element={<NavOptions redmiPhones={data.redmiPhones} />}
        />
        <Route
          path="/lifestyle"
          element={<NavOptions lifestyle={data.fitnessAndLifeStyle} />}
        />
        <Route path="/tv" element={<NavOptions tv={data.tv} />} />
        <Route
          path="/laptops"
          element={<NavOptions laptops={data.laptop} />}
        />
        <Route path="/home" element={<NavOptions home={data.home} />} />
        <Route path="/audio" element={<NavOptions audio={data.audio} />} />
        <Route
          path="/accessories"
          element={<NavOptions accessories={data.accessories} />}
        />
      </Routes> */}
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PROJECT" />
      <StarProduct prods={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotProductMenu />

      <Routes>
        <Route
          path="/music"
          element={
            <HotProduct
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevices"
          element={
            <HotProduct
              smartDevice={data.hotAccessories.smartDevice}
              smartDevicesCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotProduct
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifeStyle"
          element={
            <HotProduct
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            <HotProduct
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReview reviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Video videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner end={data.banner.end} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
