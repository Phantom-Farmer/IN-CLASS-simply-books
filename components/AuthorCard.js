import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({ authorObj }) {
  return (
    <>
      <div>Name: {authorObj.first_name} {authorObj.last_name}</div>
      <div>Email: {authorObj.email}</div>
      <Button variant="danger" onClick={deleteAuthorBooks} className="m-2">
        DELETE
      </Button>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    name: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default AuthorCard;
