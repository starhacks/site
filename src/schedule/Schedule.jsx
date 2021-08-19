import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CarouselLeftArrow = (props) => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={props.onClick}
        >
            <i className="arrow left"></i>
        </a>
    );
};

CarouselLeftArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const CarouselRightArrow = (props) => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--right"
            onClick={props.onClick}
        >
            <i className="arrow right"></i>
        </a>
    );
};

CarouselRightArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const CarouselIndicator = (props) => {
    return (

        <li>
            <a
                className={
                    props.index === props.activeIndex ?
                        'carousel__indicator carousel__indicator--active' :
                        'carousel__indicator'
                }
                onClick={props.onClick}
            />
        </li>
    );
};

CarouselIndicator.propTypes = {
    index: PropTypes.number.isRequired,
    activeIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

const CarouselSlide = (props) => {
    return (
        <li
            className={
                props.index === props.activeIndex ?
                    'carousel__slide carousel__slide--active' :
                    'carousel__slide'
            }
        >
            <h3>{props.slide.title}</h3>
            <div className="schedule-panel">
                <div className="time-event">
                    <p className="bold">Time</p>
                    <p className="bold">Event</p>
                </div>
                {props.slide.events.map((evt, index) =>
                    <div className="time-event border" key={index}>
                        <div className="time">
                            <p>{evt.time}</p>
                        </div>
                        <div className="event">
                            <p>{evt.title}</p>
                        </div>
                    </div>,
                )}
            </div>
        </li>
    );
};

CarouselSlide.propTypes = {
    index: PropTypes.number.isRequired,
    activeIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    slide: PropTypes.object.isRequired,
};

const Schedule = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => setActiveIndex((oldIndex) => index);

    const goToPrevSlide = (e) => {
        e.preventDefault();
        let index = activeIndex;
        const slidesLength = props.slides.length;

        if (activeIndex < 1) {
            index = slidesLength;
        }

        --index;

        setActiveIndex((oldIndex) => index);
    };

    const goToNextSlide = (e) => {
        e.preventDefault();
        let index = activeIndex;
        const slidesLength = props.slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex((oldIndex) => index);
    };

    return (
        <div className="schedule">
            <h2>{props.title}</h2>
            <div className="carousel">
                <CarouselLeftArrow onClick={(e) => goToPrevSlide(e)} />

                <ul className="carousel__slides">
                    {props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={activeIndex}
                            slide={slide}
                        />,
                    )}
                </ul>

                <CarouselRightArrow onClick={(e) => goToNextSlide(e)} />

                <ul className="carousel__indicators">
                    {props.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={activeIndex}
                            isActive={activeIndex === index}
                            onClick={(e) => goToSlide(index)}
                        />,
                    )}
                </ul>
            </div>
        </div>
    );
};

Schedule.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    slides: PropTypes.object.isRequired,
};

export default Schedule;
