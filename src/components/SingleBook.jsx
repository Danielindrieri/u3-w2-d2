import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  const handleCardClick = () => {
    changeSelectedBook(book.asin);
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        style={{
          border: selectedBook === book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* Uncomment and use CommentArea if needed */}
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </>
  );
};

export default SingleBook;
