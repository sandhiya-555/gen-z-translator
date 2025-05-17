import { useState } from 'react';

function InputBox({ onTranslate }) {
  const [input, setInput] = useState('');

  const handleTranslate = (genType) => {
    if (input.trim()) {
      onTranslate(input, genType);
    }
  };

  return (
    <div className="input-box">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your sentence..."
        rows={4}
      ></textarea>
      <div className="buttons">
        <button onClick={() => handleTranslate('genz')}>Translate to Gen Z</button>
        <button onClick={() => handleTranslate('genalpha')}>Translate to Gen Alpha</button>
      </div>
    </div>
  );
}

export default InputBox;

