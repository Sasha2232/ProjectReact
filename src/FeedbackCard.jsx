import React from 'react';

const FeedbackCard = ({ name, text }) => {
  return (
    <div className="feedback-card">
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeedbackCard;