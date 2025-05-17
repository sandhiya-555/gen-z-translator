import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import TranslationOutput from './components/TranslationOutput';
import MemeDisplay from './components/MemeDisplay';
import CopyShare from './components/CopyShare';
import { genZMap, genAlphaMap } from './data/slangMaps';

function App() {
  const [translation, setTranslation] = useState('');
  const [inputText, setInputText] = useState('');
  const [generation, setGeneration] = useState('genz'); // optional: add generation toggle

  const handleTranslate = (text, gen = generation) => {
    setInputText(text);

    const slangMap = gen === 'genz' ? genZMap : genAlphaMap;

    const words = text.toLowerCase().split(' ');

    const translatedWords = words.map((word) => {
      return slangMap[word] || word;
    });

    const result = translatedWords.join(' ');

    setTranslation(result);
  };

  return (
    <div className="app">
      <h1>🗣️ Gen Z & Alpha Translator</h1>
      {/* You can add generation switcher if you want */}
      <InputBox onTranslate={handleTranslate} />
      <TranslationOutput translation={translation} />
      <MemeDisplay input={inputText} />
      {translation && <CopyShare translation={translation} />}
    </div>
  );
}

export default App;
