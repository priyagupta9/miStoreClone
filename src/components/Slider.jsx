import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider(props) {
  return (
    <Carousel fade>
    {props.start.map(img=>(

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img}
            alt="First slide"
            />
        </Carousel.Item>
     

    ))}

    </Carousel>
  );
}

export default Slider;