import React, { useState } from 'react';

const FeedbackForm = ({ onAddFeedback }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      onAddFeedback(name, text);
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text">Пожелание:</label>
        <input
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit">Добавить пожелание</button>
    </form>
  );
};

export default FeedbackForm;
