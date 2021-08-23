import React from 'react';
import PropTypes from 'prop-types';

const Anecdotes = (props) =>
    props.anecdotes.length > 0 &&
    <div className="anecdotes">
        <h2>{props.title}</h2>
    </div>;

Anecdotes.propTypes = {
    title: PropTypes.string.isRequired,
    anecdotes: PropTypes.array.isRequired,
};

export default Anecdotes;
