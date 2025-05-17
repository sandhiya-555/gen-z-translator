function TranslationOutput({ translation }) {
    if (!translation) return null;
  
    return (
      <div className="output">
        <p className="label">Translation:</p>
        <div className="bubble">{translation}</div>
      </div>
    );
  }
  
  export default TranslationOutput;
  