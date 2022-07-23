import { React, useEffect, useState } from 'react';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();
  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllAuthors();
  }, []);
  return (
    <div className="d-flex flex-wrap">
      {authors.map((authorObj) => (
        <AuthorCard key={authorObj.firebaseKey} authorObj={authorObj} onUpdate={getAllAuthors} />))}
    </div>
  );
}
