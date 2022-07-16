import React from 'react';
import PropTypes from 'prop-types';

function AuthorCard({ firstName, lastName, email }) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
      <h3>{email}</h3>
    </div>
  );
}

AuthorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

AuthorCard.defaultProps = {
  firstName: 'Joel',
  lastName: 'Mcanulty',
  email: 'joeljdahl@gmail.com',
};

export default AuthorCard;
