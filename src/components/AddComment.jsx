import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);
  const [elementId, setElementId] = useState(asin);

  // Effetto per aggiornare l'elementId quando cambia asin
  useEffect(() => {
    setElementId(asin);
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify({ comment, rate, elementId }),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer inserisci-qui-il-tuo-token',
          },
        }
      );

      if (response.ok) {
        alert('Recensione inviata!');
        setComment('');
        setRate(1);
        setElementId(asin); // Resetta elementId
      } else {
        throw new Error('Qualcosa è andato storto');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        {/* Input Recensione */}
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>

        {/* Input Valutazione */}
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>

        {/* Pulsante di Invio */}
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
