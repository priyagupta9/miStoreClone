import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


function Banner({end}){
    return (
      <Carousel fade>
        {end.map((item, index) => (
          <Carousel.Item key={item.image} id="banner" interval={1000} keyboard={true}>           
          <img className="d-block w-100" id="bannerImage" src={item.image} alt={`${index} banner`} />

            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read More</u>
            </Carousel.Caption>

          </Carousel.Item>
        ))}
      </Carousel>
    );
}
export default Banner;

// default is 5s i hsve write interval = 1000 i.e. 1s 