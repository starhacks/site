import React from 'react';
import '../App.scss'
import { hackathonSchedule } from '../constants';

const { Component } = React;

const CarouselLeftArrow = (props) => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={props.onClick}
        >
            <span className="fa fa-2x fa-angle-left" />
        </a>
    );
}

const CarouselRightArrow = (props) => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--right"
            onClick={props.onClick}
        >
            <span className="fa fa-2x fa-angle-right" />
        </a>
    );
}

const CarouselIndicator = (props) => {
    return (
        <li>
            <a
                className={
                    props.index == props.activeIndex
                        ? "carousel__indicator carousel__indicator--active"
                        : "carousel__indicator"
                }
                onClick={props.onClick}
            />
        </li>
    );
}

const CarouselSlide = (props) => {
    return (
        <li
            className={
                props.index == props.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
            }
        >
            <p className="carousel-slide__content">{props.slide.content}</p>

            <p>
                <strong className="carousel-slide__author">
                    {props.slide.author}
                </strong>,
                {" "}
                <small className="carousel-slide__source">
                    {props.slide.source}
                </small>
            </p>
        </li>
    );
}


// Carousel wrapper component
export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="carousel">
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

                <ul className="carousel__slides">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

                <ul className="carousel__indicators">
                    {this.props.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            isActive={this.state.activeIndex == index}
                            onClick={e => this.goToSlide(index)}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

