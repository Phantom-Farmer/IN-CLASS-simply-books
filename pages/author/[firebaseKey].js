import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div>
      <h2>
        {authorDetails.first_name} {authorDetails.last_name}
      </h2>
      <h3>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
      </h3>
      <div className="book box">
        {authorDetails.books?.map((book) => (
          <BookCard
            key={book.firebaseKey}
            bookObj={book}
            onUpdate={() => {
              viewAuthorDetails(firebaseKey).then(setAuthorDetails);
            }}
          />
        ))}
      </div>
    </div>
  );
}
