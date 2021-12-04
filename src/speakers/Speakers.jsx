import React from 'react';
import PropTypes from 'prop-types';
import Speaker from './Speaker';

const Speakers = (props) =>
    props.speakers.length > 0 &&
    <div className="team">
        <h2>
            {props.title}
        </h2>
        <div className="margin-top">
            <div className="members flex-row-col">
                {props.speakers
                    .sort((a, b) => a.name > b.name).map((m) =>
                        <Speaker
                            key={m.name}
                            name={m.name}
                            desc={m.desc}
                            img={m.img ? m.img : 'NA'} />)}
            </div>
        </div>
    </div>;

Speakers.propTypes = {
    title: PropTypes.string.isRequired,
    speakers: PropTypes.array.isRequired,
};

export default Speakers;
