import React, { useState } from 'react';
import './ReactionButton.css';

const ReactionButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`reaction-btn${liked ? ' liked' : ''}`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? '👍 ¡Gracias!' : 'Me gusta'}
    </button>
  );
};

export default ReactionButton;