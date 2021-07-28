import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import * as Constants from '../constants';
import '../App.scss'

export function Subscribe(props) {
    const [email, setEmail] = useState("");


    const handleSubmit = (event) => {
        alert('A name was submitted: ' + email);
        event.preventDefault();
    }

    return (
        <div className="landing">
            <h1>{props.title}</h1>
            <p>{Constants.date}</p>
            <p>Subscribe for updates</p>
            <form className="subscribe" onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={evt => setEmail(evt.target.value)} placeholder="hello@email.com" />
                <input type="submit" value="Subscribe me!"/>
            </form>
        </div>);
        
}

Subscribe.propTypes = {
    title: PropTypes.string.isRequired
}

export default Subscribe;