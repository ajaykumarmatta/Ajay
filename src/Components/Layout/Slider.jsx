import React, { Component } from "react";
import "./slider.css";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders:[
                    "cropped-kalam-quote-23.jpg",
                    "cropped-kalam-quote-26.jpg",
                    "cropped-kalam-quote-22.jpg",
                    "cropped-kalam-quote-23.jpg"
                ]
        }

        this.updateState = this.updateState.bind();
    }
    
    updateState = () => {
        //debugger;
        this.setState({sliders:[]})
    }
    render() {
        const urlPath = "https://opensourcezeal.files.wordpress.com/2015/12/";
        // const buttonStyles = {
        //     backgroundColor:"red",
        //     padding:"20px",
        //     borderRadius:"10px"
        // }
        return (
            // < !--Carousel -- >
            <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-23.jpg" alt="Los Angeles" className="d-block w-100" />
                    </div>
                    {
                        this.state.sliders.map((slider,index)=>{
                            return (
                                <div className="carousel-item" key={index}>
                                    <img src={urlPath+slider} alt="Los Angeles" className="d-block w-100" />
                                </div>
                               
                            )
                        })
                    }
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            {/* <button onClick={this.updateState}  className="buttonStyles">Update State</button> */}
            </>
        )
    }
}

export default Slider;
