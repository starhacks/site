import React from 'react';
import Panel from './Panel';
import PropTypes from 'prop-types';

const Roles = (props) =>
    <>
        <h2>
            {props.title}
        </h2>
        <div className="roles">
            <Panel
                title="Workshop Host or Panelist"
                blurb="Lorem Ipsum is
         simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
                button="Sign Up" />
            <Panel
                title="Hacker"
                blurb="Lorem Ipsum is
         simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
                button="Sign Up" />
            <Panel
                title="Judge"
                blurb="Lorem Ipsum is
         simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
                button="Sign Up" />
        </div></>;

Roles.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Roles;
