import React from 'react';
import PropTypes from 'prop-types';
import { milestonesDoc } from '../constants';

const Milestones = (props) =>
    <div className="milestones">
        <h2>{props.title}</h2>
        <div className="flex-row-col">
            {props.milestones.map((m) =>
                <div className="panel mile" key={m.name}>
                    <h3>{m.stat}</h3>
                    <h3>{m.name}</h3>
                </div>)}
        </div>
        <div>
            <p>
                Check out the {' '}
                <a href={milestonesDoc}
                    target="_blank"
                    rel="noreferrer">
                    StarHacks I Event Report
                </a>.
            </p>
        </div>
    </div>;

Milestones.propTypes = {
    title: PropTypes.string.isRequired,
    milestones: PropTypes.array.isRequired,
};

export default Milestones;
