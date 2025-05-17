function MemeDisplay({ input }) {
    if (!input) return null;
  
    const cleanInput = input.toLowerCase().trim();
    const meme = memes.find((m) => m.text === cleanInput);
  
    if (!meme) return null;
  
    return (
      <div className="meme">
        <p className="label">Meme Vibe:</p>
        <img src={meme.url} alt="meme" />
      </div>
    );
  }
  
  import { memes } from '../data/memes';
  export default MemeDisplay;
  