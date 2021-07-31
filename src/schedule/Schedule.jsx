import React from 'react';
import PropTypes from 'prop-types'
import '../App.scss'
import Carousel from 'react-elastic-carousel';

const items = [
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
    { id: 4, title: 'item #4' },
    { id: 5, title: 'item #5' }
]

const Schedule = props =>
    <div className="schedule">
        <h2>
            {props.title}
        </h2>
        <Carousel>
            {items.map(item => <div key={item.id}>{item.title}</div>)}
        </Carousel>
    </div>

Schedule.propTypes = {
    title: PropTypes.string.isRequired
}

export default Schedule;