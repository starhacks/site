import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sponsorDoc } from '../constants';

const Contact = (props) =>
  props.socialMediaHandles.length > 0 &&
    <div className="contact">
      <div className="icons flex-row">
        {props.socialMediaHandles.map((i) =>
          <div className="icon-circle" key={i.link}>
            <a className="icon" href={i.link}>
              <FontAwesomeIcon icon={i.icon} />
            </a>
          </div>,
        )}
      </div>
      <p className="blue">
        <a
          href={sponsorDoc}
          target="_blank"
          rel="noreferrer">
                Sponsor StarHacks</a> | Copyright © 2021 StarHacks | {' '}
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          rel="noreferrer">
                MLH Code of Conduct
        </a>
      </p>
    </div>;

Contact.propTypes = {
  socialMediaHandles: PropTypes.array.isRequired,
};

export default Contact;
