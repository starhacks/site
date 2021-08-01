import React, { useState } from 'react';
import '../App.scss'
import { hackathonSchedule } from '../constants';

const CarouselLeftArrow = (props) => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={props.onClick}
        >
            <i class="arrow left"></i>
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
            <i class="arrow right"></i>
        </a>
    );
}

const CarouselIndicator = (props) => {
    return (
        <li>
            <a
                className={
                    props.index === props.activeIndex
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
                props.index === props.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
            }
        >
            <h3>{props.slide.title}</h3>
            <div className="schedule-panel">
                <div className="time-event">
                    <strong>Time</strong>
                    <strong>Event</strong>
                </div>
                {props.slide.events.map((evt, index) =>
                    <div className="time-event border">
                        <div className="time">
                            <p>{evt.time}</p>
                        </div>
                        <div className="event">
                            <p>{evt.title}</p>
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
}

const Carousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => setActiveIndex(oldIndex => index);

    const goToPrevSlide = (e) => {
        e.preventDefault();
        let index = activeIndex;
        const slidesLength = props.slides.length;

        if (activeIndex < 1) {
            index = slidesLength;
        }

        --index;

        setActiveIndex(oldIndex => index);
    }

    const goToNextSlide = (e) => {
        e.preventDefault();
        let index = activeIndex;
        const slidesLength = props.slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex(oldIndex => index);
    }

    return (
        <div className="schedule">
            <h2>{props.title}</h2>
            <div className="carousel">
                <CarouselLeftArrow onClick={e => goToPrevSlide(e)} />

                <ul className="carousel__slides">
                    {props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <CarouselRightArrow onClick={e => goToNextSlide(e)} />

                <ul className="carousel__indicators">
                    {props.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={activeIndex}
                            isActive={activeIndex === index}
                            onClick={e => goToSlide(index)}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Carousel;